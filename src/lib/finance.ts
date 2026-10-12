/**
 * Deterministic financial mathematics. Every function validates its inputs and
 * returns a Result: either { ok: true, value } or { ok: false, error } with a
 * machine-readable error code. Nothing is ever "invented" when a value is undefined.
 */

export type FinErrorCode =
  | 'MISSING_VALUE'
  | 'NOT_FINITE'
  | 'INVALID_RATE'
  | 'INVALID_PERIODS'
  | 'DIVISION_BY_ZERO'
  | 'NEGATIVE_NOT_ALLOWED'
  | 'INSUFFICIENT_FLOWS'
  | 'NO_SIGN_CHANGE'
  | 'IRR_NOT_FOUND'
  | 'NEVER_RECOVERED'
  | 'GROWTH_GE_RATE'
  | 'WEIGHTS_INVALID'
  | 'TAX_RATE_INVALID'
  | 'PRICE_LE_VARIABLE_COST'

export type Result<T> = { ok: true; value: T; warnings?: FinErrorCode[] } | { ok: false; error: FinErrorCode }

const okR = <T>(value: T, warnings?: FinErrorCode[]): Result<T> => (warnings && warnings.length ? { ok: true, value, warnings } : { ok: true, value })
const err = <T>(error: FinErrorCode): Result<T> => ({ ok: false, error })

function check(...vals: (number | undefined | null)[]): FinErrorCode | null {
  for (const v of vals) {
    if (v === undefined || v === null || (typeof v === 'number' && Number.isNaN(v))) return 'MISSING_VALUE'
    if (!Number.isFinite(v)) return 'NOT_FINITE'
  }
  return null
}

/** Rate must be > -100 %. */
const badRate = (r: number) => r <= -1

// ───────────────────────── Interest & TVM ─────────────────────────

export function simpleInterest(principal: number, rate: number, years: number): Result<{ interest: number; total: number }> {
  const e = check(principal, rate, years)
  if (e) return err(e)
  if (badRate(rate)) return err('INVALID_RATE')
  if (years < 0) return err('INVALID_PERIODS')
  const interest = principal * rate * years
  return okR({ interest, total: principal + interest })
}

export function futureValue(pv: number, rate: number, n: number): Result<number> {
  const e = check(pv, rate, n)
  if (e) return err(e)
  if (badRate(rate)) return err('INVALID_RATE')
  if (n < 0) return err('INVALID_PERIODS')
  return okR(pv * Math.pow(1 + rate, n))
}

export function presentValue(fv: number, rate: number, n: number): Result<number> {
  const e = check(fv, rate, n)
  if (e) return err(e)
  if (badRate(rate)) return err('INVALID_RATE')
  if (n < 0) return err('INVALID_PERIODS')
  return okR(fv / Math.pow(1 + rate, n))
}

/**
 * Compound interest with m capitalisations per year.
 * FV = P (1 + r/m)^(m·t). Also returns the effective annual rate (1 + r/m)^m − 1.
 */
export function compoundInterest(
  principal: number,
  annualRate: number,
  years: number,
  periodsPerYear: number,
): Result<{ fv: number; interest: number; effectiveRate: number; schedule: { year: number; balance: number; interest: number }[] }> {
  const e = check(principal, annualRate, years, periodsPerYear)
  if (e) return err(e)
  if (periodsPerYear <= 0 || !Number.isInteger(periodsPerYear)) return err('INVALID_PERIODS')
  if (years < 0) return err('INVALID_PERIODS')
  const i = annualRate / periodsPerYear
  if (badRate(i)) return err('INVALID_RATE')
  const fv = principal * Math.pow(1 + i, periodsPerYear * years)
  const schedule: { year: number; balance: number; interest: number }[] = []
  let prev = principal
  for (let y = 1; y <= Math.ceil(years); y++) {
    const t = Math.min(y, years)
    const bal = principal * Math.pow(1 + i, periodsPerYear * t)
    schedule.push({ year: y, balance: bal, interest: bal - prev })
    prev = bal
  }
  return okR({ fv, interest: fv - principal, effectiveRate: Math.pow(1 + i, periodsPerYear) - 1, schedule })
}

export function effectiveAnnualRate(nominal: number, periodsPerYear: number): Result<number> {
  const e = check(nominal, periodsPerYear)
  if (e) return err(e)
  if (periodsPerYear <= 0) return err('INVALID_PERIODS')
  if (badRate(nominal / periodsPerYear)) return err('INVALID_RATE')
  return okR(Math.pow(1 + nominal / periodsPerYear, periodsPerYear) - 1)
}

// ───────────────────────── Annuities ─────────────────────────

export type AnnuityTiming = 'end' | 'begin'

/** Present value of an annuity. Handles r = 0 (PV = PMT·n). */
export function annuityPV(pmt: number, rate: number, n: number, timing: AnnuityTiming = 'end'): Result<number> {
  const e = check(pmt, rate, n)
  if (e) return err(e)
  if (badRate(rate)) return err('INVALID_RATE')
  if (n <= 0) return err('INVALID_PERIODS')
  const base = rate === 0 ? pmt * n : (pmt * (1 - Math.pow(1 + rate, -n))) / rate
  return okR(timing === 'begin' ? base * (1 + rate) : base)
}

export function annuityFV(pmt: number, rate: number, n: number, timing: AnnuityTiming = 'end'): Result<number> {
  const e = check(pmt, rate, n)
  if (e) return err(e)
  if (badRate(rate)) return err('INVALID_RATE')
  if (n <= 0) return err('INVALID_PERIODS')
  const base = rate === 0 ? pmt * n : (pmt * (Math.pow(1 + rate, n) - 1)) / rate
  return okR(timing === 'begin' ? base * (1 + rate) : base)
}

/** Payment that amortises a loan `pv` over n periods. */
export function annuityPayment(pv: number, rate: number, n: number, timing: AnnuityTiming = 'end'): Result<number> {
  const e = check(pv, rate, n)
  if (e) return err(e)
  if (badRate(rate)) return err('INVALID_RATE')
  if (n <= 0) return err('INVALID_PERIODS')
  let pmt = rate === 0 ? pv / n : (pv * rate) / (1 - Math.pow(1 + rate, -n))
  if (timing === 'begin') pmt = pmt / (1 + rate)
  return okR(pmt)
}

export interface AmortRow {
  period: number
  payment: number
  interest: number
  principal: number
  balance: number
}

/** Amortisation table (ordinary annuity, French system). */
export function amortizationSchedule(pv: number, rate: number, n: number): Result<AmortRow[]> {
  const p = annuityPayment(pv, rate, n)
  if (!p.ok) return p
  if (!Number.isInteger(n) || n > 1200) return err('INVALID_PERIODS')
  const rows: AmortRow[] = []
  let bal = pv
  for (let k = 1; k <= n; k++) {
    const interest = bal * rate
    let principal = p.value - interest
    if (k === n) principal = bal // clear rounding residue
    bal = bal - principal
    rows.push({ period: k, payment: interest + principal, interest, principal, balance: Math.abs(bal) < 1e-7 ? 0 : bal })
  }
  return okR(rows)
}

// ───────────────────────── Capital budgeting ─────────────────────────

/** NPV with the first flow at t = 0 (not discounted). */
export function npv(rate: number, flows: number[]): Result<number> {
  const e = check(rate, ...flows)
  if (e) return err(e)
  if (badRate(rate)) return err('INVALID_RATE')
  if (flows.length < 2) return err('INSUFFICIENT_FLOWS')
  return okR(flows.reduce((s, cf, t) => s + cf / Math.pow(1 + rate, t), 0))
}

function npvRaw(rate: number, flows: number[]): number {
  let s = 0
  for (let t = 0; t < flows.length; t++) s += flows[t] / Math.pow(1 + rate, t)
  return s
}

export function signChanges(flows: number[]): number {
  const nz = flows.filter((f) => f !== 0)
  let c = 0
  for (let i = 1; i < nz.length; i++) if (Math.sign(nz[i]) !== Math.sign(nz[i - 1])) c++
  return c
}

export interface IrrResult {
  /** All IRRs found in (−99 %, 1000 %), ascending. */
  roots: number[]
  /** Number of sign changes in the flows (Descartes' rule upper bound on positive roots of 1+r). */
  signChanges: number
  multiple: boolean
}

/**
 * IRR by bracketing + bisection over (−0.99, 10]. Returns every root found.
 * Errors: INSUFFICIENT_FLOWS, NO_SIGN_CHANGE (all flows same sign → IRR does not exist),
 * IRR_NOT_FOUND (sign change exists but NPV never crosses zero in the search range).
 */
export function irr(flows: number[]): Result<IrrResult> {
  const e = check(...flows)
  if (e) return err(e)
  if (flows.length < 2) return err('INSUFFICIENT_FLOWS')
  const sc = signChanges(flows)
  if (sc === 0) return err('NO_SIGN_CHANGE')
  // Grid in log-space of (1 + r) for good resolution near 0 and at high rates.
  const lo = Math.log(0.01)
  const hi = Math.log(11)
  const N = 4000
  const roots: number[] = []
  let prevR = Math.exp(lo) - 1
  let prevV = npvRaw(prevR, flows)
  for (let k = 1; k <= N; k++) {
    const r = Math.exp(lo + ((hi - lo) * k) / N) - 1
    const v = npvRaw(r, flows)
    if (v === 0) {
      roots.push(r)
    } else if (Math.sign(v) !== Math.sign(prevV) && prevV !== 0) {
      let a = prevR
      let b = r
      let fa = prevV
      for (let it = 0; it < 200; it++) {
        const m = (a + b) / 2
        const fm = npvRaw(m, flows)
        if (fm === 0 || b - a < 1e-14) {
          a = b = m
          break
        }
        if (Math.sign(fm) === Math.sign(fa)) {
          a = m
          fa = fm
        } else b = m
      }
      roots.push((a + b) / 2)
    }
    prevR = r
    prevV = v
  }
  const uniq = roots.filter((r, i) => i === 0 || Math.abs(r - roots[i - 1]) > 1e-7)
  if (uniq.length === 0) return err('IRR_NOT_FOUND')
  return okR({ roots: uniq, signChanges: sc, multiple: uniq.length > 1 }, uniq.length > 1 ? [] : undefined)
}

export interface PaybackResult {
  /** Fractional periods to recover the initial outlay (interpolated within the period). */
  periods: number
  cumulative: number[]
}

/** Simple payback. Flows[0] should be the (negative) investment. */
export function payback(flows: number[]): Result<PaybackResult> {
  const e = check(...flows)
  if (e) return err(e)
  if (flows.length < 2) return err('INSUFFICIENT_FLOWS')
  return paybackFrom(flows)
}

/** Discounted payback using `rate`. */
export function discountedPayback(rate: number, flows: number[]): Result<PaybackResult> {
  const e = check(rate, ...flows)
  if (e) return err(e)
  if (badRate(rate)) return err('INVALID_RATE')
  if (flows.length < 2) return err('INSUFFICIENT_FLOWS')
  return paybackFrom(flows.map((f, t) => f / Math.pow(1 + rate, t)))
}

function paybackFrom(flows: number[]): Result<PaybackResult> {
  const cumulative: number[] = []
  let acc = 0
  for (const f of flows) {
    acc += f
    cumulative.push(acc)
  }
  if (cumulative[0] >= 0) return okR({ periods: 0, cumulative })
  for (let t = 1; t < flows.length; t++) {
    if (cumulative[t] >= 0 && cumulative[t - 1] < 0) {
      const frac = flows[t] === 0 ? 0 : -cumulative[t - 1] / flows[t]
      return okR({ periods: t - 1 + frac, cumulative })
    }
  }
  return err('NEVER_RECOVERED')
}

/** Profitability index = PV(future flows) / |initial investment|. */
export function profitabilityIndex(rate: number, flows: number[]): Result<number> {
  const r = npv(rate, flows)
  if (!r.ok) return r
  if (flows[0] === 0) return err('DIVISION_BY_ZERO')
  return okR((r.value - flows[0]) / Math.abs(flows[0]))
}

// ───────────────────────── Cost of capital ─────────────────────────

/** CAPM: Re = rf + β (Rm − rf). */
export function capm(rf: number, beta: number, marketReturn: number): Result<number> {
  const e = check(rf, beta, marketReturn)
  if (e) return err(e)
  if (badRate(rf) || badRate(marketReturn)) return err('INVALID_RATE')
  return okR(rf + beta * (marketReturn - rf))
}

export interface WaccInput {
  equityValue: number
  debtValue: number
  costOfEquity: number
  costOfDebt: number
  taxRate: number
}

export function wacc(i: WaccInput): Result<{ wacc: number; we: number; wd: number; afterTaxKd: number }> {
  const e = check(i.equityValue, i.debtValue, i.costOfEquity, i.costOfDebt, i.taxRate)
  if (e) return err(e)
  if (i.equityValue < 0 || i.debtValue < 0) return err('NEGATIVE_NOT_ALLOWED')
  const v = i.equityValue + i.debtValue
  if (v === 0) return err('DIVISION_BY_ZERO')
  if (i.taxRate < 0 || i.taxRate >= 1) return err('TAX_RATE_INVALID')
  if (badRate(i.costOfEquity) || badRate(i.costOfDebt)) return err('INVALID_RATE')
  const we = i.equityValue / v
  const wd = i.debtValue / v
  const afterTaxKd = i.costOfDebt * (1 - i.taxRate)
  return okR({ wacc: we * i.costOfEquity + wd * afterTaxKd, we, wd, afterTaxKd })
}

// ───────────────────────── Break-even ─────────────────────────

export interface BreakEvenInput {
  fixedCosts: number
  price: number
  variableCost: number
  targetProfit?: number
  expectedUnits?: number
}

export function breakEven(i: BreakEvenInput): Result<{
  units: number
  sales: number
  unitContributionMargin: number
  contributionMarginRatio: number
  unitsForTarget?: number
  marginOfSafetyUnits?: number
  marginOfSafetyPct?: number
}> {
  const e = check(i.fixedCosts, i.price, i.variableCost)
  if (e) return err(e)
  if (i.fixedCosts < 0 || i.price < 0 || i.variableCost < 0) return err('NEGATIVE_NOT_ALLOWED')
  const cm = i.price - i.variableCost
  if (cm <= 0) return err('PRICE_LE_VARIABLE_COST')
  const units = i.fixedCosts / cm
  const out: {
    units: number
    sales: number
    unitContributionMargin: number
    contributionMarginRatio: number
    unitsForTarget?: number
    marginOfSafetyUnits?: number
    marginOfSafetyPct?: number
  } = { units, sales: units * i.price, unitContributionMargin: cm, contributionMarginRatio: cm / i.price }
  if (i.targetProfit !== undefined && Number.isFinite(i.targetProfit)) out.unitsForTarget = (i.fixedCosts + i.targetProfit) / cm
  if (i.expectedUnits !== undefined && Number.isFinite(i.expectedUnits) && i.expectedUnits > 0) {
    out.marginOfSafetyUnits = i.expectedUnits - units
    out.marginOfSafetyPct = (i.expectedUnits - units) / i.expectedUnits
  }
  return okR(out)
}

// ───────────────────────── Ratios ─────────────────────────

export interface StatementInput {
  currentAssets: number
  inventory: number
  cash: number
  receivables: number
  totalAssets: number
  currentLiabilities: number
  totalLiabilities: number
  equity: number
  revenue: number
  costOfSales: number
  operatingIncome: number
  interestExpense: number
  netIncome: number
}

export type RatioKey =
  | 'currentRatio'
  | 'quickRatio'
  | 'cashRatio'
  | 'debtRatio'
  | 'debtToEquity'
  | 'grossMargin'
  | 'operatingMargin'
  | 'netMargin'
  | 'roa'
  | 'roe'
  | 'assetTurnover'
  | 'inventoryTurnover'
  | 'dso'
  | 'interestCoverage'
  | 'equityMultiplier'

/** Safe division: null when the denominator is 0 or inputs are missing. */
export function safeDiv(a: number, b: number): number | null {
  if (!Number.isFinite(a) || !Number.isFinite(b) || b === 0) return null
  return a / b
}

export function ratios(s: StatementInput): Record<RatioKey, number | null> {
  return {
    currentRatio: safeDiv(s.currentAssets, s.currentLiabilities),
    quickRatio: safeDiv(s.currentAssets - s.inventory, s.currentLiabilities),
    cashRatio: safeDiv(s.cash, s.currentLiabilities),
    debtRatio: safeDiv(s.totalLiabilities, s.totalAssets),
    debtToEquity: safeDiv(s.totalLiabilities, s.equity),
    grossMargin: safeDiv(s.revenue - s.costOfSales, s.revenue),
    operatingMargin: safeDiv(s.operatingIncome, s.revenue),
    netMargin: safeDiv(s.netIncome, s.revenue),
    roa: safeDiv(s.netIncome, s.totalAssets),
    roe: safeDiv(s.netIncome, s.equity),
    assetTurnover: safeDiv(s.revenue, s.totalAssets),
    inventoryTurnover: safeDiv(s.costOfSales, s.inventory),
    dso: (() => {
      const d = safeDiv(s.receivables, s.revenue)
      return d === null ? null : d * 365
    })(),
    interestCoverage: safeDiv(s.operatingIncome, s.interestExpense),
    equityMultiplier: safeDiv(s.totalAssets, s.equity),
  }
}

// ───────────────────────── Valuation ─────────────────────────

/** Gordon growth terminal value at the end of the last forecast year: FCF_{n+1}/(r − g). */
export function gordonTerminalValue(lastFcf: number, rate: number, growth: number): Result<number> {
  const e = check(lastFcf, rate, growth)
  if (e) return err(e)
  if (badRate(rate)) return err('INVALID_RATE')
  if (growth >= rate) return err('GROWTH_GE_RATE')
  return okR((lastFcf * (1 + growth)) / (rate - growth))
}

export interface DcfInput {
  /** Free cash flows to the firm for years 1..n. */
  fcf: number[]
  wacc: number
  terminalGrowth: number
  netDebt: number
  sharesOutstanding?: number
}

export interface DcfResult {
  pvFcf: number[]
  sumPvFcf: number
  terminalValue: number
  pvTerminalValue: number
  enterpriseValue: number
  equityValue: number
  perShare?: number
  terminalShare: number
}

export function dcf(i: DcfInput): Result<DcfResult> {
  const e = check(i.wacc, i.terminalGrowth, i.netDebt, ...i.fcf)
  if (e) return err(e)
  if (i.fcf.length < 1) return err('INSUFFICIENT_FLOWS')
  if (i.wacc <= 0) return err('INVALID_RATE')
  const tv = gordonTerminalValue(i.fcf[i.fcf.length - 1], i.wacc, i.terminalGrowth)
  if (!tv.ok) return tv
  const pvFcf = i.fcf.map((f, k) => f / Math.pow(1 + i.wacc, k + 1))
  const sumPvFcf = pvFcf.reduce((a, b) => a + b, 0)
  const pvTerminalValue = tv.value / Math.pow(1 + i.wacc, i.fcf.length)
  const enterpriseValue = sumPvFcf + pvTerminalValue
  const equityValue = enterpriseValue - i.netDebt
  const res: DcfResult = {
    pvFcf,
    sumPvFcf,
    terminalValue: tv.value,
    pvTerminalValue,
    enterpriseValue,
    equityValue,
    terminalShare: pvTerminalValue / enterpriseValue,
  }
  if (i.sharesOutstanding !== undefined) {
    if (i.sharesOutstanding <= 0) return err('DIVISION_BY_ZERO')
    res.perShare = equityValue / i.sharesOutstanding
  }
  return okR(res)
}

/** FCFF = EBIT(1 − T) + D&A − CapEx − ΔNWC. */
export function fcff(ebit: number, taxRate: number, da: number, capex: number, deltaNwc: number): Result<number> {
  const e = check(ebit, taxRate, da, capex, deltaNwc)
  if (e) return err(e)
  if (taxRate < 0 || taxRate >= 1) return err('TAX_RATE_INVALID')
  return okR(ebit * (1 - taxRate) + da - capex - deltaNwc)
}

// ───────────────────────── Bonds & portfolios ─────────────────────────

export function bondPrice(face: number, couponRate: number, ytm: number, years: number, freq = 1): Result<number> {
  const e = check(face, couponRate, ytm, years, freq)
  if (e) return err(e)
  if (freq <= 0 || years <= 0) return err('INVALID_PERIODS')
  const n = Math.round(years * freq)
  const y = ytm / freq
  if (badRate(y)) return err('INVALID_RATE')
  const c = (face * couponRate) / freq
  const pvC = annuityPV(c, y, n)
  if (!pvC.ok) return pvC
  return okR(pvC.value + face / Math.pow(1 + y, n))
}

export function portfolioTwoAssets(
  w1: number,
  r1: number,
  r2: number,
  s1: number,
  s2: number,
  corr: number,
): Result<{ expectedReturn: number; stdDev: number }> {
  const e = check(w1, r1, r2, s1, s2, corr)
  if (e) return err(e)
  if (w1 < 0 || w1 > 1) return err('WEIGHTS_INVALID')
  if (s1 < 0 || s2 < 0) return err('NEGATIVE_NOT_ALLOWED')
  if (corr < -1 || corr > 1) return err('WEIGHTS_INVALID')
  const w2 = 1 - w1
  const variance = w1 * w1 * s1 * s1 + w2 * w2 * s2 * s2 + 2 * w1 * w2 * s1 * s2 * corr
  return okR({ expectedReturn: w1 * r1 + w2 * r2, stdDev: Math.sqrt(Math.max(0, variance)) })
}
