import { describe, expect, it } from 'vitest'
import { PLANS } from '../lib/plans'

describe('plans', () => {
  it('lists Free, Plus, Pro and Institutional in order', () => {
    expect(PLANS.map((p) => p.id)).toEqual(['free', 'plus', 'pro'])
  })
  it('every plan has bilingual features', () => {
    for (const p of PLANS) {
      expect(p.features.length).toBeGreaterThan(0)
      for (const f of p.features) expect(f.every((s) => s.length > 0)).toBe(true)
    }
  })
})

import { planFromRow } from '../lib/plans'
describe('planFromRow', () => {
  it('uses the plan only when the subscription is active or trialing', () => {
    expect(planFromRow({ plan: 'pro', status: 'active' })).toBe('pro')
    expect(planFromRow({ plan: 'plus', status: 'trialing' })).toBe('plus')
    expect(planFromRow({ plan: 'pro', status: 'canceled' })).toBe('free')
    expect(planFromRow({ plan: 'gold', status: 'active' })).toBe('free')
    expect(planFromRow(null)).toBe('free')
  })
})
