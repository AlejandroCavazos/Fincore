import type { DcfAssumptions } from '../content/companies'
import { dcf, type DcfResult, type Result } from './finance'

export interface ForecastRow {
  t: number
  revenue: number
  ebit: number
  nopat: number
  da: number
  capex: number
  deltaNwc: number
  fcff: number
}

/** 5-year FCFF forecast: FCFF = EBIT(1−T) + D&A − CapEx − ΔNWC. */
export function forecast(lastRevenue: number, a: DcfAssumptions, years = 5): ForecastRow[] {
  const rows: ForecastRow[] = []
  let prev = lastRevenue
  for (let t = 1; t <= years; t++) {
    const revenue = prev * (1 + a.growth)
    const ebit = revenue * a.ebitMargin
    const nopat = ebit * (1 - a.taxRate)
    const da = revenue * a.daPct
    const capex = revenue * a.capexPct
    const deltaNwc = (revenue - prev) * a.nwcPct
    rows.push({ t, revenue, ebit, nopat, da, capex, deltaNwc, fcff: nopat + da - capex - deltaNwc })
    prev = revenue
  }
  return rows
}

export function valueCompany(lastRevenue: number, a: DcfAssumptions, netDebt: number, shares: number): Result<DcfResult & { rows: ForecastRow[] }> {
  const rows = forecast(lastRevenue, a)
  const r = dcf({ fcf: rows.map((x) => x.fcff), wacc: a.wacc, terminalGrowth: a.terminalGrowth, netDebt, sharesOutstanding: shares })
  if (!r.ok) return r
  return { ok: true, value: { ...r.value, rows } }
}

export const SCENARIOS = {
  bear: { growthDelta: -0.03, marginDelta: -0.02, waccDelta: 0.01 },
  base: { growthDelta: 0, marginDelta: 0, waccDelta: 0 },
  bull: { growthDelta: 0.03, marginDelta: 0.02, waccDelta: -0.005 },
} as const

export function applyScenario(a: DcfAssumptions, s: keyof typeof SCENARIOS): DcfAssumptions {
  const d = SCENARIOS[s]
  return { ...a, growth: a.growth + d.growthDelta, ebitMargin: a.ebitMargin + d.marginDelta, wacc: a.wacc + d.waccDelta }
}
