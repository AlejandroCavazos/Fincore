import { useState } from 'react'
import { Check } from 'lucide-react'
import { Badge, Button, Card, Notice, PageHeader, cx } from '../components/ui'
import { useI18n, useStore } from '../state/store'
import { useAuth } from '../state/auth'
import { PLANS, freePlansMode, type PlanId } from '../lib/plans'
import { getClient } from '../lib/auth'
import { money, PRICING, type PaidPlan } from '../config/pricing'

export default function Plans() {
  const { tx, lang } = useI18n()
  const { plan: myPlan, user, refreshPlan } = useAuth()
  const { toast } = useStore()
  const [busy, setBusy] = useState<PlanId | null>(null)
  const canChoose = freePlansMode && !!user

  const choose = async (id: PlanId) => {
    setBusy(id)
    try {
      const c = await getClient()
      const { error } = await c.rpc('choose_plan_free', { p_plan: id })
      if (error) throw error
      refreshPlan()
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

      <div className="mt-4 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
        {PLANS.map((p) => {
          const current = p.id === myPlan
          const paid = p.id !== 'free' ? (p.id as PaidPlan) : null
          const price = paid ? PRICING[paid] : null
          return (
            <Card key={p.id} data-plan={p.id} className={cx('flex h-full flex-col', p.highlight && 'ring-2 ring-electric-500 dark:ring-electric-400')}>
              <div className="flex items-center justify-between gap-2">
                <h2 className="text-lg font-bold text-navy-900 dark:text-white">{l(p.name)}</h2>
                {current && <Badge tone="money">{tx('Tu plan', 'Your plan')}</Badge>}
                {!current && p.highlight && <Badge tone="electric">{tx('Recomendado', 'Recommended')}</Badge>}
              </div>
              <p className="text-sm text-navy-500 dark:text-navy-300">{l(p.tagline)}</p>
              {price ? (
                <div className="mt-3">
                  <p className="tabular text-2xl font-bold text-navy-900 dark:text-white">
                    {money(price)}
                    <span className="text-sm font-medium text-navy-500"> /mes</span>
                  </p>
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
    </div>
  )
}
