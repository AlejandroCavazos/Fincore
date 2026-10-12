import { Check } from 'lucide-react'
import { Badge, Button, Card, Notice, PageHeader, cx } from '../components/ui'
import { useI18n } from '../state/store'
import { useAuth } from '../state/auth'
import { PLANS } from '../lib/plans'

export default function Plans() {
  const { tx, lang } = useI18n()
  const { plan: myPlan } = useAuth()
  const l = (p: [string, string]) => (lang === 'es' ? p[0] : p[1])
  return (
    <div>
      <PageHeader
        title={tx('Planes', 'Plans')}
        subtitle={tx('Elige cómo quieres aprender con FINCORE.', 'Choose how you want to learn with FINCORE.')}
      />
      <Notice tone="info" title={tx('En preparación', 'Coming soon')}>
        {tx(
          'Los planes de pago aún no están disponibles. El contenido y los precios de cada plan pueden cambiar.',
          'Paid plans are not available yet. Each plan’s contents and prices may change.',
        )}
      </Notice>
      <div className="mt-4 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        {PLANS.map((p) => {
          const current = p.id === myPlan
          return (
            <Card
              key={p.id}
              data-plan={p.id}
              className={cx('flex h-full flex-col', p.highlight && 'ring-2 ring-electric-500 dark:ring-electric-400')}
            >
              <div className="flex items-center justify-between gap-2">
                <h2 className="text-lg font-bold text-navy-900 dark:text-white">{l(p.name)}</h2>
                {current && <Badge tone="money">{tx('Tu plan', 'Your plan')}</Badge>}
                {!current && p.highlight && <Badge tone="electric">{tx('Recomendado', 'Recommended')}</Badge>}
              </div>
              <p className="text-sm text-navy-500 dark:text-navy-300">{l(p.tagline)}</p>
              <p className={cx('tabular mt-3 font-bold text-navy-900 dark:text-white', p.id === 'free' ? 'text-2xl' : 'text-lg leading-8 text-navy-500 dark:text-navy-300')}>
                {p.id === 'free' ? '$0' : tx('Precio por definir', 'Price TBD')}
              </p>
              <ul className="mt-3 flex-1 space-y-2 text-sm">
                {p.features.map((f) => (
                  <li key={f[0]} className="flex gap-2">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-money-500" aria-hidden />
                    <span>{l(f)}</span>
                  </li>
                ))}
              </ul>
              <Button className="mt-4 w-full" variant={current ? 'secondary' : 'primary'} disabled>
                {current ? tx('Plan actual', 'Current plan') : tx('Próximamente', 'Coming soon')}
              </Button>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
