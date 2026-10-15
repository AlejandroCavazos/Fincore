import type { PlanId } from '../lib/plans'

/** Central price list: monthly price in MXN. Every price shown in the app comes from here. */
export type PaidPlan = Exclude<PlanId, 'free'>

export const PRICING: Record<PaidPlan, number> = { plus: 99, pro: 199 }

const mxn = new Intl.NumberFormat('es-MX', { maximumFractionDigits: 0, minimumFractionDigits: 0 })
/** "$1,599" (no decimals, thousands separator). */
export const money = (n: number) => `$${mxn.format(Math.round(n))}`
