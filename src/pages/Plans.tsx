import { useEffect, useState } from 'react'
import { Check } from 'lucide-react'
import { Badge, Button, Card, Notice, PageHeader, Segmented, cx } from '../components/ui'
import { useI18n, useStore } from '../state/store'
import { useAuth } from '../state/auth'
import { PLANS, freePlansMode, type PlanId } from '../lib/plans'
import { authEnabled, getClient } from '../lib/auth'
import { annualSaving, maxSaving, money, PRICING, savingText, type Billing, type PaidPlan, type Price } from '../config/pricing'

/** Founder spots left, read from the server (null = unknown: then the promotion is not shown). */
function useFounderSpots() {
  const [left, setLeft] = useState<number | null>(null)
  const [tick, setTick] = useState(0)
  useEffect(() => {
    if (!authEnabled) return
    let alive = true
    getClient()
      .then((c) => c.rpc('founder_spots_left'))
      .then(({ data, error }) => alive && !error && typeof data === 'number' && setLeft(data))
      .catch(() => {})
    return () => {
      alive = false
    }
  }, [tick])
  return { left, refresh: () => setTick((t) => t + 1) }
}

const per = (b: Billing) => (b === 'monthly' ? '/mes' : '/año')

export default function Plans() {
  const { tx, lang } = useI18n()
  const { plan: myPlan, billing: myBilling, founder: isFounder, user, refreshPlan } = useAuth()
  const { toast } = useStore()
  const [busy, setBusy] = useState<PlanId | null>(null)
  const [billing, setBilling] = useState<Billing>(myPlan !== 'free' ? myBilling : 'monthly')
  const spots = useFounderSpots()
  const canChoose = freePlansMode && !!user
  // Founders keep their price on any paid plan; others see it while spots remain.
  const founderOffer = isFounder || (spots.left !== null && spots.left > 0)
  const priceFor = (id: PaidPlan): Price => (founderOffer ? PRICING.founder[id] : PRICING.normal[id])
  const student = PRICING.student.pro
  const visible = [priceFor('plus'), priceFor('pro'), ...(student ? [student] : [])]

  const choose = async (id: PlanId) => {
    setBusy(id)
    const expect = id !== 'free' && founderOffer
    try {
      const c = await getClient()
      let { error } = await c.rpc('choose_plan_free', { p_plan: id, p_billing: billing, p_expect_founder: expect })
      if (error?.message.includes('founder_sold_out')) {
        spots.refresh()
        const normal = PRICING.normal[id as PaidPlan][billing]
        if (!window.confirm(`Se acaban de terminar los lugares con precio de fundador. Tu precio sería el normal: ${money(normal)} ${per(billing)}. ¿Quieres continuar?`)) return
        ;({ error } = await c.rpc('choose_plan_free', { p_plan: id, p_billing: billing, p_expect_founder: false }))
      }
      if (error) throw error
      refreshPlan()
      spots.refresh()
      toast({ es: 'Plan actualizado.', en: 'Plan updated.' }, 'success')
    } catch {
      toast({ es: 'No se pudo cambiar el plan.', en: 'Could not change the plan.' }, 'warning')
    } finally {
      setBusy(null)
    }
  }
  const l = (p: [string, string]) => (lang === 'es' ? p[0] : p[1])

  return (
    <div>
      <PageHeader title={tx('Planes', 'Plans')} subtitle={tx('Elige cómo quieres aprender con FINCORE.', 'Choose how you want to learn with FINCORE.')} />
      <Notice tone="info" title={freePlansMode ? tx('Modo de prueba', 'Test mode') : tx('En preparación', 'Coming soon')}>
        {freePlansMode
          ? tx('Por ahora no se cobra nada. Elige un plan para probarlo.', 'Nothing is charged for now. Pick a plan to try it.')
          : tx('Los planes de pago aún no están disponibles.', 'Paid plans are not available yet.')}
      </Notice>

      {!isFounder && spots.left !== null && spots.left > 0 && (
        <p data-testid="founder-counter" className="mt-3 rounded-xl bg-amber-500/10 p-3 text-center text-sm font-semibold text-amber-700 ring-1 ring-amber-500/40 dark:text-amber-300">
          Quedan {spots.left} de {PRICING.founderSpots} lugares con precio de fundador
        </p>
      )}

      <div className="mt-4 flex flex-wrap items-center gap-3">
        <div className="w-56">
        <Segmented
          value={billing}
          onChange={(v) => setBilling(v)}
          options={[
            { value: 'monthly', label: 'Mensual' },
            { value: 'annual', label: 'Anual' },
          ]}
          label="Periodo de pago"
        />
        </div>
        <span data-testid="billing-saving" className="text-sm font-semibold text-money-600 dark:text-money-300">
          Ahorra hasta {money(maxSaving(visible))} al año
        </span>
      </div>

      <div className="mt-4 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
        {PLANS.map((p) => {
          const current = p.id === myPlan && (p.id === 'free' || billing === myBilling)
          const paid = p.id !== 'free' ? (p.id as PaidPlan) : null
          const price = paid ? priceFor(paid) : null
          const normal = paid ? PRICING.normal[paid] : null
          return (
            <Card key={p.id} data-plan={p.id} className={cx('flex h-full flex-col', p.highlight && 'ring-2 ring-electric-500 dark:ring-electric-400')}>
              <div className="flex items-center justify-between gap-2">
                <h2 className="text-lg font-bold text-navy-900 dark:text-white">{l(p.name)}</h2>
                {current && <Badge tone="money">{tx('Tu plan', 'Your plan')}</Badge>}
                {!current && p.highlight && <Badge tone="electric">{tx('Recomendado', 'Recommended')}</Badge>}
              </div>
              <p className="text-sm text-navy-500 dark:text-navy-300">{l(p.tagline)}</p>
              {price && normal ? (
                <div className="mt-3">
                  {founderOffer && <Badge tone="amber">Precio de fundador</Badge>}
                  <p className="tabular mt-1 text-2xl font-bold text-navy-900 dark:text-white">
                    {money(price[billing])}
                    <span className="text-sm font-medium text-navy-500"> {per(billing)}</span>
                    {founderOffer && <span className="ml-2 text-sm font-medium text-navy-400 line-through">{money(normal[billing])}</span>}
                  </p>
                  {billing === 'annual' && (
                    <p data-testid={`saving-${p.id}`} className="tabular text-sm font-bold text-money-600 dark:text-money-300">
                      {savingText(price)}
                    </p>
                  )}
                  {paid === 'pro' && student && (
                    <p className="tabular mt-1 text-xs text-navy-500 dark:text-navy-300">
                      Estudiantes: {money(student[billing])} {per(billing)}
                      {billing === 'annual' && annualSaving(student) > 0 && <span className="font-semibold text-money-600 dark:text-money-300"> · {savingText(student)}</span>}
                    </p>
                  )}
                </div>
              ) : (
                <p className="tabular mt-3 text-2xl font-bold text-navy-900 dark:text-white">$0</p>
              )}
              <ul className="mt-3 flex-1 space-y-2 text-sm">
                {p.features.map((f) => (
                  <li key={f[0]} className="flex gap-2">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-money-500" aria-hidden />
                    <span>{l(f)}</span>
                  </li>
                ))}
              </ul>
              <Button className="mt-4 w-full" variant={current ? 'secondary' : 'primary'} disabled={current || !canChoose || busy !== null} onClick={() => choose(p.id)}>
                {current ? tx('Plan actual', 'Current plan') : canChoose ? tx('Elegir', 'Choose') : tx('Próximamente', 'Coming soon')}
              </Button>
            </Card>
          )
        })}
      </div>
      {founderOffer && (
        <p className="mt-3 text-xs text-navy-500 dark:text-navy-300">
          El precio de fundador se conserva de por vida mientras tu suscripción siga activa, aunque cambies entre mensual y anual o entre Plus y Pro. Si cancelas, lo pierdes.
        </p>
      )}
    </div>
  )
}
