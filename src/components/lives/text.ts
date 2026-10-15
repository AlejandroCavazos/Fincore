import { LIVES, planLives } from '../../config/lives'
import type { PlanId } from '../../lib/plans'

export const PLAN_NAME: Record<PlanId, string> = { free: 'Gratis', plus: 'Plus', pro: 'Pro' }

const every = (ms: number) => {
  const h = ms / 3_600_000
  return h === 1 ? '1 cada hora' : `1 cada ${h} horas`
}

/** "Plan Gratis: 5 vidas máximo, 1 cada 4 horas" */
export function planRule(plan: PlanId): string {
  const c = planLives(plan)
  if (c.max === null) return `Plan ${PLAN_NAME[plan]}: vidas ilimitadas`
  return `Plan ${PLAN_NAME[plan]}: ${c.max} vidas máximo, ${every(c.regenMs!)}`
}

/** Rows of the plan comparison table, all read from the central config. */
export function comparisonRows(): { label: string; values: Record<PlanId, string> }[] {
  const plans: PlanId[] = ['free', 'plus', 'pro']
  const row = (label: string, f: (p: PlanId) => string) => ({ label, values: Object.fromEntries(plans.map((p) => [p, f(p)])) as Record<PlanId, string> })
  const c = planLives
  const yes = (b: boolean) => (b ? 'Sí' : 'No')
  return [
    row('Vidas máximas', (p) => (c(p).max === null ? 'Ilimitadas' : String(c(p).max))),
    row('Regeneración', (p) => (c(p).regenMs === null ? 'No hace falta' : every(c(p).regenMs!))),
    row('Repasos para recuperar', (p) => (c(p).max === null ? 'No hace falta' : c(p).recoveryPerDay === null ? 'Sin límite' : `${c(p).recoveryPerDay} al día`)),
    row('Recarga completa', (p) => (c(p).refillsPerDay > 0 ? `${c(p).refillsPerDay} al día` : 'No')),
    row('Protección de racha', (p) => yes(c(p).streakProtection)),
    row('Las evaluaciones gastan vidas', (p) => yes(c(p).examsCostLives)),
    row('Simulacros de examen', (p) => yes(c(p).mockExams)),
  ]
}

export const LOW_LIVES_TEXT = 'Te queda 1 vida. Si fallas, podrás repasar para recuperarla.'
export const REVIEW_LIMIT_TEXT = `Ya usaste tus ${LIVES.plans.free.recoveryPerDay} repasos de hoy. Se reinician a medianoche.`
export const EXAM_MIN_TEXT = (n: number) => `Necesitas al menos ${n} vidas para iniciar el examen.`
export const REFILL_CONFIRM = `¿Usar tu recarga de hoy? Tus vidas quedarán en ${LIVES.plans.plus.max}.`
export const UPGRADE_TEXT = `${LIVES.plans.plus.max} vidas y regeneración cada hora`
