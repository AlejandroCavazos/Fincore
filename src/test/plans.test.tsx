import { describe, expect, it } from 'vitest'
import { PLANS } from '../lib/plans'

describe('plans', () => {
  it('lists Free, Plus, Pro and Institutional in order', () => {
    expect(PLANS.map((p) => p.id)).toEqual(['free', 'plus', 'pro', 'institutional'])
  })
  it('every plan has bilingual features', () => {
    for (const p of PLANS) {
      expect(p.features.length).toBeGreaterThan(0)
      for (const f of p.features) expect(f.every((s) => s.length > 0)).toBe(true)
    }
  })
})
