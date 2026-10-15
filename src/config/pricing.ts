import type { PlanId } from '../lib/plans'

/**
 * Central price list (MXN). Every price and saving shown in the app is computed
 * from here. The founder spots number must match FOUNDER_SPOTS in
 * supabase/migrations/004_founder_pricing.sql (the server is the authority).
 */
export type PaidPlan = Exclude<PlanId, 'free'>
export type Billing = 'monthly' | 'annual'
export type PriceList = 'normal' | 'founder' | 'student'

export interface Price {
  monthly: number
  annual: number
}

export const PRICING = {
  currency: 'MXN',
  normal: { plus: { monthly: 99, annual: 799 }, pro: { monthly: 199, annual: 1599 } } as Record<PaidPlan, Price>,
  founder: { plus: { monthly: 69, annual: 549 }, pro: { monthly: 149, annual: 1199 } } as Record<PaidPlan, Price>,
  /** Pro for students (shown under Pro). */
  student: { pro: { monthly: 129, annual: 999 } } as Partial<Record<PaidPlan, Price>>,
  founderSpots: 50,
} as const

export const priceOf = (list: PriceList, plan: PaidPlan): Price | undefined => PRICING[list][plan]

/** Annual saving in pesos: 12 monthly payments minus the annual price. */
export const annualSaving = (p: Price) => Math.max(0, p.monthly * 12 - p.annual)

const mxn = new Intl.NumberFormat('es-MX', { maximumFractionDigits: 0, minimumFractionDigits: 0 })
/** "$1,599" (no decimals, thousands separator). */
export const money = (n: number) => `$${mxn.format(Math.round(n))}`

export const savingText = (p: Price) => `Ahorras ${money(annualSaving(p))} al año`

/** Highest saving among the prices the user can see (for the monthly/annual switch). */
export function maxSaving(prices: Price[]) {
  return prices.reduce((m, p) => Math.max(m, annualSaving(p)), 0)
}
