import { Heart, Infinity as InfinityIcon, RefreshCw } from 'lucide-react'
import { planLives } from '../../config/lives'
import type { PlanId } from '../../lib/plans'
import { canRefill, canRecover, recoveryLeft } from '../../lib/lives/service'
import { hms, useLives } from '../../state/lives'
import { Button, Card, cx } from '../ui'
import { comparisonRows, PLAN_NAME, planRule, REFILL_CONFIRM } from './text'

/** "Mis vidas" section of Configuración. */
export function MyLives() {
  const lv = useLives()
  const s = lv.s
  const cfg = planLives(lv.plan)
  const left = recoveryLeft(s)
  const plans: PlanId[] = ['free', 'plus', 'pro']
  return (
    <Card className="space-y-3 text-sm text-navy-600 dark:text-navy-300" data-testid="my-lives">
      <div className="flex items-center gap-3">
        <Heart className="h-8 w-8 fill-red-500 text-red-500" />
        <div>
          <p className="text-lg font-bold text-navy-900 dark:text-white">
            {lv.unlimited ? (
              <span className="inline-flex items-center gap-1">
                <InfinityIcon className="h-5 w-5" /> Ilimitadas
              </span>
            ) : (
              `${s.lives} de ${lv.max} vidas`
            )}
          </p>
          <p>{planRule(lv.plan)}</p>
        </div>
      </div>
      {!lv.unlimited && (
        <ul className="space-y-1">
          <li>{lv.nextIn === null ? 'Vidas llenas' : `Próxima vida en ${hms(lv.nextIn)}`}</li>
          <li>
            Repasos para recuperar vidas hoy: {s.daily.recovered}
            {left !== null ? ` de ${cfg.recoveryPerDay}` : ' (sin límite)'}
          </li>
          {cfg.refillsPerDay > 0 && <li>Recarga de hoy: {s.daily.refills >= cfg.refillsPerDay ? 'ya la usaste' : 'disponible'}</li>}
        </ul>
      )}
      <div className="flex flex-wrap gap-2">
        {canRecover(s) && (
          <a href="#/lives/recover" className="inline-flex min-h-9 items-center rounded-xl bg-navy-100 px-3 py-1.5 font-semibold text-navy-800 dark:bg-navy-800 dark:text-navy-100">
            Repasar para recuperar 1 vida
          </a>
        )}
        {canRefill(s) && (
          <Button size="sm" onClick={() => window.confirm(REFILL_CONFIRM) && lv.refill()}>
            <RefreshCw className="h-4 w-4" /> Usar mi recarga de hoy
          </Button>
        )}
      </div>
      <p>Solo pierdes una vida cuando fallas un ejercicio. Leer la teoría, usar las calculadoras y el tutor nunca cuesta vidas.</p>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[22rem] text-left text-xs">
          <thead>
            <tr>
              <th className="py-1 pr-2" />
              {plans.map((p) => (
                <th key={p} className={cx('px-2 py-1 font-bold', p === lv.plan ? 'text-electric-600 dark:text-electric-300' : 'text-navy-900 dark:text-white')}>
                  {PLAN_NAME[p]}
                  {p === lv.plan ? ' (tu plan)' : ''}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {comparisonRows().map((r) => (
              <tr key={r.label} className="border-t border-navy-100 dark:border-navy-800">
                <td className="py-1 pr-2">{r.label}</td>
                {plans.map((p) => (
                  <td key={p} className="px-2 py-1">
                    {r.values[p]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {lv.plan !== 'pro' && (
        <a href="#/plans" onClick={() => lv.track('upgrade_clicked', { from: 'my_lives' })} className="inline-block text-xs underline-offset-2 hover:underline">
          Ver planes
        </a>
      )}
    </Card>
  )
}
