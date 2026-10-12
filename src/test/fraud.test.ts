import { describe, expect, it } from 'vitest'
import { analytics, generateCase, scoreCase, type Flag } from '../lib/fraud'

describe('Fraud Detective', () => {
  const c = generateCase(20260301)
  it('is deterministic for a seed and has controlled anomalies of every type', () => {
    expect(generateCase(20260301)).toEqual(c)
    const types = new Set(Object.values(c.truth).map((t) => t.type))
    for (const t of ['duplicate', 'unusualAmount', 'offHours', 'suspiciousVendor', 'docInconsistency', 'splitPayment']) expect(types).toContain(t)
    expect(Object.values(c.truth).some((t) => t.verdict === 'explained')).toBe(true) // red flag ≠ fraud
    expect(new Set(c.txs.map((t) => t.id)).size).toBe(c.txs.length)
    for (const id of Object.keys(c.truth)) expect(c.txs.some((t) => t.id === id)).toBe(true)
  })
  it('a different seed gives a different case', () => {
    expect(generateCase(1).txs.map((t) => t.amount)).not.toEqual(c.txs.map((t) => t.amount))
  })
  it('perfect answer scores 100 %', () => {
    const flags: Record<string, Flag> = {}
    for (const [id, t] of Object.entries(c.truth)) flags[id] = { type: t.type, conclusion: t.verdict }
    const s = scoreCase(c, flags)
    expect(s.score).toBe(1)
    expect(s.falsePositives).toEqual([])
    expect(s.falseNegatives).toEqual([])
  })
  it('counts false positives and false negatives', () => {
    const normal = c.txs.filter((t) => !c.truth[t.id]).slice(0, 3)
    const flags: Record<string, Flag> = {}
    for (const t of normal) flags[t.id] = { type: 'duplicate', conclusion: 'irregular' }
    const s = scoreCase(c, flags)
    expect(s.falsePositives).toHaveLength(3)
    expect(s.falseNegatives).toHaveLength(Object.keys(c.truth).length)
    expect(s.score).toBe(0)
    expect(s.points).toBeLessThan(0)
  })
  it('right transaction but wrong conclusion scores less than fully right', () => {
    const [id, t] = Object.entries(c.truth)[0]
    const right = scoreCase(c, { [id]: { type: t.type, conclusion: t.verdict } })
    const wrong = scoreCase(c, { [id]: { type: t.type, conclusion: t.verdict === 'irregular' ? 'explained' : 'irregular' } })
    expect(right.points - wrong.points).toBe(5)
  })
  it('analytics flag candidates without revealing the key', () => {
    const a = analytics(c)
    expect(a.sameInvoice.length).toBeGreaterThan(0)
    expect(a.offHours.length).toBeGreaterThan(0)
    expect(a.nearThreshold.length).toBeGreaterThan(0)
  })
})
