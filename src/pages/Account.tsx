import { LogOut, Mail, Star } from 'lucide-react'
import { Badge, Button, Card, PageHeader, SectionTitle } from '../components/ui'
import { getClient } from '../lib/auth'
import { PLANS } from '../lib/plans'
import { useAuth } from '../state/auth'
import { useI18n } from '../state/store'

export default function Account() {
  const { tx, lang } = useI18n()
  const auth = useAuth()
  const plan = PLANS.find((p) => p.id === auth.plan)!
  const l = (p: [string, string]) => (lang === 'es' ? p[0] : p[1])

  return (
    <div>
      <PageHeader title={tx('Cuenta', 'Account')} />

      <SectionTitle>{tx('Tu cuenta', 'Your account')}</SectionTitle>
      <Card className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex min-w-0 items-center gap-3">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-electric-500/10 text-lg font-bold uppercase text-electric-600 dark:text-electric-300">
            {auth.user?.email?.[0] ?? <Mail className="h-5 w-5" />}
          </span>
          <div className="min-w-0">
            <p className="text-xs text-navy-400">{auth.user ? tx('Sesión iniciada como', 'Signed in as') : tx('Sin cuenta', 'No account')}</p>
            <p data-testid="account-email" className="truncate font-semibold text-navy-900 dark:text-white">
              {auth.user?.email ?? tx('Tu progreso se guarda en este dispositivo', 'Your progress is stored on this device')}
            </p>
            {auth.user && <p className="text-xs text-navy-500 dark:text-navy-300">{tx('Tu avance se guarda en tu cuenta: puedes seguir en cualquier navegador.', 'Your progress is saved to your account: continue in any browser.')}</p>}
          </div>
        </div>
        {auth.enabled && auth.user && (
          <Button variant="secondary" onClick={() => getClient().then((c) => c.auth.signOut())}>
            <LogOut className="h-4 w-4" /> {tx('Cerrar sesión', 'Sign out')}
          </Button>
        )}
      </Card>

      <SectionTitle>{tx('Mi suscripción', 'My subscription')}</SectionTitle>
      <Card className="space-y-3">
        <div className="flex items-center justify-between gap-2">
          <p data-testid="account-plan" className="text-lg font-bold text-navy-900 dark:text-white">{l(plan.name)}</p>
          <div className="flex flex-wrap gap-1">
            <Badge tone="money">{tx('Activo', 'Active')}</Badge>
          </div>
        </div>
        <p className="text-sm text-navy-500 dark:text-navy-300">{l(plan.tagline)}</p>
        <ul className="list-inside list-disc space-y-1 text-sm">
          {plan.features.map((f) => (
            <li key={f[0]}>{l(f)}</li>
          ))}
        </ul>
        <a href="#/plans" className="inline-block">
          <Button>
            <Star className="h-4 w-4" /> {tx('Ver planes', 'See plans')}
          </Button>
        </a>
      </Card>
    </div>
  )
}
