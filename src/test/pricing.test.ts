import { describe, expect, it } from 'vitest'
import { annualSaving, maxSaving, money, PRICING, savingText } from '../config/pricing'

describe('pricing: annual savings in pesos', () => {
  it('matches the agreed amounts, computed from the central price list', () => {
    expect(savingText(PRICING.normal.plus)).toBe('Ahorras $389 al año')
    expect(savingText(PRICING.normal.pro)).toBe('Ahorras $789 al año')
    expect(savingText(PRICING.student.pro!)).toBe('Ahorras $549 al año')
    expect(savingText(PRICING.founder.plus)).toBe('Ahorras $279 al año')
    expect(savingText(PRICING.founder.pro)).toBe('Ahorras $589 al año')
  })
  it('updates by itself when a price changes and never shows decimals or percentages', () => {
    expect(annualSaving({ monthly: 120, annual: 1000 })).toBe(440)
    expect(money(1788.4)).toBe('$1,788')
    expect(savingText({ monthly: 999, annual: 9000 })).toBe('Ahorras $2,988 al año')
    expect(savingText(PRICING.normal.pro)).not.toContain('%')
  })
  it('the switch shows the highest saving among visible plans', () => {
    expect(maxSaving([PRICING.normal.plus, PRICING.normal.pro, PRICING.student.pro!])).toBe(789)
    expect(maxSaving([PRICING.founder.plus, PRICING.founder.pro, PRICING.student.pro!])).toBe(589)
  })
})
