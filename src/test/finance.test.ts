import { describe, expect, it } from 'vitest'
import * as F from '../lib/finance'
import { forecast, valueCompany } from '../lib/valuation'
import { COMPANIES } from '../content/companies'

const v = <T,>(r: F.Result<T>): T => {
  if (!r.ok) throw new Error(`expected ok, got ${r.error}`)
  return r.value
}
const errOf = <T,>(r: F.Result<T>) => (r.ok ? 'OK' : r.error)

describe('time value of money', () => {
  it('FV / PV known values', () => {
    expect(v(F.futureValue(1000, 0.1, 2))).toBeCloseTo(1210, 8)
    expect(v(F.presentValue(1210, 0.1, 2))).toBeCloseTo(1000, 8)
    expect(v(F.futureValue(10000, 0.08, 5))).toBeCloseTo(14693.28, 2)
  })
  it('compound interest with monthly compounding and EAR', () => {
    const r = v(F.compoundInterest(10000, 0.12, 1, 12))
    expect(r.fv).toBeCloseTo(11268.25, 2)
    expect(v(F.effectiveAnnualRate(0.12, 12))).toBeCloseTo(0.126825, 6)
  })
  it('annuities (ordinary and due) and loan payment', () => {
    expect(v(F.annuityPV(1000, 0.1, 3))).toBeCloseTo(2486.85, 2)
    expect(v(F.annuityFV(1000, 0.1, 3))).toBeCloseTo(3310, 6)
    expect(v(F.annuityPV(1000, 0.1, 3, 'begin'))).toBeCloseTo(2735.54, 2)
    expect(v(F.annuityPayment(100000, 0.01, 12))).toBeCloseTo(8884.88, 2)
    const sched = v(F.amortizationSchedule(100000, 0.01, 12))
    expect(sched).toHaveLength(12)
    expect(sched[11].balance).toBeCloseTo(0, 6)
  })
  it('zero rate annuity is handled without division by zero', () => {
    expect(v(F.annuityPV(100, 0, 10))).toBeCloseTo(1000, 10)
    expect(v(F.annuityPayment(1200, 0, 12))).toBeCloseTo(100, 10)
  })
  it('invalid inputs return errors instead of invented results', () => {
    expect(errOf(F.futureValue(NaN, 0.1, 2))).toBe('MISSING_VALUE')
    expect(errOf(F.futureValue(Infinity, 0.1, 2))).toBe('NOT_FINITE')
    expect(errOf(F.futureValue(100, -1.5, 2))).toBe('INVALID_RATE')
    expect(errOf(F.presentValue(100, 0.1, -1))).toBe('INVALID_PERIODS')
  })
})

describe('NPV, IRR, payback', () => {
  const flows = [-1000, 300, 400, 500]
  it('NPV known value; t = 0 is not discounted', () => {
    expect(v(F.npv(0.1, flows))).toBeCloseTo(-21.04, 2)
    expect(v(F.npv(0, flows))).toBeCloseTo(200, 10)
    expect(errOf(F.npv(0.1, [-100]))).toBe('INSUFFICIENT_FLOWS')
  })
  it('NPV errors', () => {
    expect(errOf(F.npv(0.1, []))).toBe('INSUFFICIENT_FLOWS')
    expect(errOf(F.npv(-1, flows))).toBe('INVALID_RATE')
    expect(errOf(F.npv(0.1, [-100, NaN]))).toBe('MISSING_VALUE')
  })
  it('IRR of a conventional project; NPV at IRR ≈ 0', () => {
    const r = v(F.irr(flows))
    expect(r.roots).toHaveLength(1)
    expect(r.roots[0]).toBeCloseTo(0.0889633947, 6)
    expect(Math.abs(v(F.npv(r.roots[0], flows)))).toBeLessThan(1e-6)
    expect(v(F.irr([-100, 110])).roots[0]).toBeCloseTo(0.1, 10)
  })
  it('IRR does not exist when all flows have the same sign', () => {
    expect(errOf(F.irr([100, 200, 300]))).toBe('NO_SIGN_CHANGE')
    expect(errOf(F.irr([-100, -200]))).toBe('NO_SIGN_CHANGE')
  })
  it('IRR: insufficient flows', () => {
    expect(errOf(F.irr([-100]))).toBe('INSUFFICIENT_FLOWS')
  })
  it('multiple IRRs on non-conventional flows (-100, 230, -132 → 10 % and 20 %)', () => {
    const r = v(F.irr([-100, 230, -132]))
    expect(r.multiple).toBe(true)
    expect(r.roots).toHaveLength(2)
    expect(r.roots[0]).toBeCloseTo(0.1, 8)
    expect(r.roots[1]).toBeCloseTo(0.2, 8)
  })
  it('IRR not found when sign changes but NPV never crosses zero (-100, 50, -100)', () => {
    expect(errOf(F.irr([-100, 50, -100]))).toBe('IRR_NOT_FOUND')
  })
  it('payback, discounted payback and never-recovered', () => {
    expect(v(F.payback([-1000, 400, 400, 400])).periods).toBeCloseTo(2.5, 10)
    expect(v(F.discountedPayback(0.1, [-1000, 600, 600])).periods).toBeGreaterThan(1)
    expect(errOf(F.payback([-1000, 100, 100]))).toBe('NEVER_RECOVERED')
  })
  it('profitability index', () => {
    expect(v(F.profitabilityIndex(0, [-1000, 600, 600]))).toBeCloseTo(1.2, 10)
  })
})

describe('cost of capital', () => {
  it('CAPM', () => {
    expect(v(F.capm(0.09, 1.2, 0.15))).toBeCloseTo(0.162, 10)
  })
  it('WACC known value: E 600k, D 400k, Ke 15 %, Kd 11 %, T 30 % → 12.08 %', () => {
    const r = v(F.wacc({ equityValue: 600000, debtValue: 400000, costOfEquity: 0.15, costOfDebt: 0.11, taxRate: 0.3 }))
    expect(r.wacc).toBeCloseTo(0.1208, 10)
    expect(r.we + r.wd).toBeCloseTo(1, 12)
    expect(r.afterTaxKd).toBeCloseTo(0.077, 10)
  })
  it('WACC errors', () => {
    expect(errOf(F.wacc({ equityValue: 0, debtValue: 0, costOfEquity: 0.1, costOfDebt: 0.1, taxRate: 0.3 }))).toBe('DIVISION_BY_ZERO')
    expect(errOf(F.wacc({ equityValue: 1, debtValue: 1, costOfEquity: 0.1, costOfDebt: 0.1, taxRate: 1.2 }))).toBe('TAX_RATE_INVALID')
  })
})

describe('break-even', () => {
  it('known value: FC 120,000, P 250, VC 150 → 1,200 units / $300,000', () => {
    const r = v(F.breakEven({ fixedCosts: 120000, price: 250, variableCost: 150, targetProfit: 30000, expectedUnits: 1500 }))
    expect(r.units).toBe(1200)
    expect(r.sales).toBe(300000)
    expect(r.contributionMarginRatio).toBeCloseTo(0.4, 12)
    expect(r.unitsForTarget).toBe(1500)
    expect(r.marginOfSafetyPct).toBeCloseTo(0.2, 12)
  })
  it('price ≤ variable cost has no break-even', () => {
    expect(errOf(F.breakEven({ fixedCosts: 1000, price: 100, variableCost: 100 }))).toBe('PRICE_LE_VARIABLE_COST')
    expect(errOf(F.breakEven({ fixedCosts: -1, price: 100, variableCost: 10 }))).toBe('NEGATIVE_NOT_ALLOWED')
  })
})

describe('ratios', () => {
  it('computes ratios and returns null on division by zero', () => {
    const base: F.StatementInput = {
      currentAssets: 500, inventory: 200, cash: 100, totalAssets: 2000, currentLiabilities: 250, totalLiabilities: 800, equity: 1200,
      revenue: 3000, costOfSales: 1800, operatingIncome: 400, netIncome: 240, interestExpense: 50, receivables: 150,
    }
    const r = F.ratios(base)
    expect(r.currentRatio).toBeCloseTo(2, 12)
    expect(r.quickRatio).toBeCloseTo(1.2, 12)
    expect(r.roe).toBeCloseTo(0.2, 12)
    expect(r.roa).toBeCloseTo(0.12, 12)
    const zero = F.ratios({ ...base, currentLiabilities: 0, equity: 0 })
    expect(zero.currentRatio).toBeNull()
    expect(zero.roe).toBeNull()
  })
})

describe('valuation', () => {
  it('Gordon terminal value requires g < r', () => {
    expect(v(F.gordonTerminalValue(100, 0.1, 0.03))).toBeCloseTo(1471.43, 2)
    expect(errOf(F.gordonTerminalValue(100, 0.05, 0.05))).toBe('GROWTH_GE_RATE')
  })
  it('bond price at par when coupon = yield; premium when coupon > yield', () => {
    expect(v(F.bondPrice(1000, 0.08, 0.08, 10))).toBeCloseTo(1000, 8)
    expect(v(F.bondPrice(1000, 0.1, 0.08, 10))).toBeGreaterThan(1000)
  })
  it('DCF of the sample companies is finite and EV − net debt = equity', () => {
    for (const c of COMPANIES) {
      const last = c.years[c.years.length - 1]
      const rows = forecast(last.revenue, c.base)
      expect(rows).toHaveLength(5)
      const netDebt = last.debt - last.cash
      const val = valueCompany(last.revenue, c.base, netDebt, c.sharesMillions)
      expect(val.ok).toBe(true)
      if (val.ok) {
        expect(Number.isFinite(val.value.enterpriseValue)).toBe(true)
        expect(val.value.equityValue).toBeCloseTo(val.value.enterpriseValue - netDebt, 6)
      }
    }
  })
})
