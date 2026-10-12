/**
 * Spec §7 — mandatory option-shuffling tests.
 */
import { describe, expect, it } from 'vitest'
import { createAttempt, evaluate, orderedOptions } from '../lib/engine'
import { cryptoRng, fisherYates, seededRng } from '../lib/shuffle'
import { EXERCISES } from '../content'
import type { McqExercise, MultiExercise } from '../types'

const mcq: McqExercise = {
  id: 'T-MCQ',
  level: 1,
  module: 'L1-01',
  kind: 'mcq',
  prompt: { es: '¿?', en: '?' },
  explanation: { es: '.', en: '.' },
  difficulty: 1,
  points: 10,
  competency: 'test',
  options: [
    { id: 'a', text: { es: 'A', en: 'A' } },
    { id: 'b', text: { es: 'B', en: 'B' } },
    { id: 'c', text: { es: 'C', en: 'C' } },
    { id: 'd', text: { es: 'D', en: 'D' } },
  ],
  correctOptionId: 'a', // authored in position A on purpose
}

describe('Fisher–Yates', () => {
  it('returns a new array with the same elements (no loss, no duplicates) over 10,000 shuffles', () => {
    const src = ['a', 'b', 'c', 'd']
    for (let i = 0; i < 10_000; i++) {
      const out = fisherYates(src, cryptoRng)
      expect(out).toHaveLength(4)
      expect(new Set(out).size).toBe(4)
      expect([...out].sort()).toEqual(src)
    }
    expect(src).toEqual(['a', 'b', 'c', 'd']) // input not mutated
  })

  it('places the correct answer in every position A–D with a roughly uniform distribution (crypto RNG, 4,000 shuffles)', () => {
    const N = 4000
    const counts = [0, 0, 0, 0]
    for (let i = 0; i < N; i++) {
      const att = createAttempt('k', [mcq])
      const pos = orderedOptions(mcq, att).findIndex((o) => o.id === mcq.correctOptionId)
      counts[pos]++
    }
    for (const c of counts) {
      expect(c).toBeGreaterThan(0)
      // expected 1000 each; ±15 % is > 8σ for a fair shuffle
      expect(c).toBeGreaterThan(N / 4 * 0.85)
      expect(c).toBeLessThan(N / 4 * 1.15)
    }
    // Chi-square goodness-of-fit, 3 dof, p = 0.001 critical value 16.27
    const chi = counts.reduce((a, c) => a + (c - N / 4) ** 2 / (N / 4), 0)
    expect(chi).toBeLessThan(16.27)
  })

  it('all 24 permutations of 4 options appear (seeded, 24,000 shuffles)', () => {
    const rng = seededRng(42)
    const seen = new Map<string, number>()
    for (let i = 0; i < 24_000; i++) {
      const k = fisherYates(['a', 'b', 'c', 'd'], rng).join('')
      seen.set(k, (seen.get(k) ?? 0) + 1)
    }
    expect(seen.size).toBe(24)
    for (const v of seen.values()) expect(v).toBeGreaterThan(700) // expected 1000
  })

  it('handles 0 and 1 elements', () => {
    expect(fisherYates([], cryptoRng)).toEqual([])
    expect(fisherYates(['x'], cryptoRng)).toEqual(['x'])
  })
})

describe('Attempt stability and grading by ID', () => {
  it('order is stable within an attempt (repeated reads = rerender / selection / feedback)', () => {
    const att = createAttempt('k', [mcq])
    const first = orderedOptions(mcq, att).map((o) => o.id)
    for (let i = 0; i < 50; i++) expect(orderedOptions(mcq, att).map((o) => o.id)).toEqual(first)
    // simulate a reload: the attempt is serialised and restored
    const restored = JSON.parse(JSON.stringify(att))
    expect(orderedOptions(mcq, restored).map((o) => o.id)).toEqual(first)
  })

  it('a new attempt produces a new shuffle (not always the same order)', () => {
    const orders = new Set<string>()
    for (let i = 0; i < 200; i++) orders.add(orderedOptions(mcq, createAttempt('k', [mcq])).map((o) => o.id).join(''))
    expect(orders.size).toBeGreaterThan(10)
  })

  it('grades by option ID, never by position — for every possible position of the correct option', () => {
    const rng = seededRng(7)
    const positionsSeen = new Set<number>()
    for (let i = 0; i < 1000; i++) {
      const att = createAttempt('k', [mcq], { rng })
      const shown = orderedOptions(mcq, att)
      const pos = shown.findIndex((o) => o.id === 'a')
      positionsSeen.add(pos)
      // selecting the option shown at the correct position is correct
      expect(evaluate(mcq, { kind: 'mcq', optionId: shown[pos].id }).correct).toBe(true)
      // selecting whatever is now in position A is only correct when it IS option 'a'
      expect(evaluate(mcq, { kind: 'mcq', optionId: shown[0].id }).correct).toBe(shown[0].id === 'a')
      for (const o of shown) if (o.id !== 'a') expect(evaluate(mcq, { kind: 'mcq', optionId: o.id }).correct).toBe(false)
    }
    expect(positionsSeen).toEqual(new Set([0, 1, 2, 3]))
  })

  it('multi-answer exercises keep their set of correct IDs after shuffling', () => {
    const multi: MultiExercise = { ...mcq, id: 'T-MULTI', kind: 'multi', correctOptionIds: ['a', 'c'] } as unknown as MultiExercise
    delete (multi as unknown as Record<string, unknown>).correctOptionId
    for (let i = 0; i < 1000; i++) {
      const att = createAttempt('k', [multi])
      const shown = orderedOptions(multi, att).map((o) => o.id)
      expect([...shown].sort()).toEqual(['a', 'b', 'c', 'd'])
      expect(evaluate(multi, { kind: 'multi', optionIds: shown.filter((id) => id === 'a' || id === 'c') }).correct).toBe(true)
      expect(evaluate(multi, { kind: 'multi', optionIds: ['a'] }).correct).toBe(false)
      expect(evaluate(multi, { kind: 'multi', optionIds: ['a', 'b', 'c'] }).correct).toBe(false)
    }
  })

  it('every MCQ in the real bank: shuffling preserves options and the correct ID still grades correct (1,000 attempts over the bank)', () => {
    const bank = EXERCISES.filter((e): e is McqExercise => e.kind === 'mcq')
    expect(bank.length).toBeGreaterThan(30)
    const posCount = [0, 0, 0, 0]
    for (let i = 0; i < 1000; i++) {
      const ex = bank[i % bank.length]
      const att = createAttempt('k', [ex])
      const shown = orderedOptions(ex, att)
      expect(shown.map((o) => o.id).sort()).toEqual(ex.options.map((o) => o.id).sort())
      const pos = shown.findIndex((o) => o.id === ex.correctOptionId)
      if (pos < 4) posCount[pos]++
      expect(evaluate(ex, { kind: 'mcq', optionId: ex.correctOptionId }).correct).toBe(true)
    }
    for (const c of posCount) expect(c).toBeGreaterThan(150)
  })
})
