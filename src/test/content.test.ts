import { describe, expect, it } from 'vitest'
import { EXERCISES, LESSONS, getExercise } from '../content'
import { LEVELS } from '../content/curriculum'
import { getAccount } from '../content/accounts'
import { LAB_TRANSACTIONS } from '../content/labTransactions'
import { emptyAnswer, evaluate, solutionAnswer } from '../lib/engine'
import { isBalanced } from '../lib/accounting'

describe('content minimums (spec §14)', () => {
  it('6 paths, ≥ 20 lessons, ≥ 100 exercises', () => {
    expect(LEVELS).toHaveLength(6)
    expect(LESSONS.length).toBeGreaterThanOrEqual(20)
    expect(EXERCISES.length).toBeGreaterThanOrEqual(100)
    for (const lv of LEVELS) expect(LESSONS.some((l) => l.level === lv.id), `level ${lv.id}`).toBe(true)
  })
  it('lesson and exercise ids are unique', () => {
    expect(new Set(LESSONS.map((l) => l.id)).size).toBe(LESSONS.length)
    expect(new Set(EXERCISES.map((e) => e.id)).size).toBe(EXERCISES.length)
  })
  it('no empty lessons: objectives, theory, examples, key points and ≥ 4 exercises', () => {
    for (const l of LESSONS) {
      expect(l.objectives.length, l.id).toBeGreaterThan(0)
      expect(l.theory.length, l.id).toBeGreaterThan(0)
      expect(l.examples.length, l.id).toBeGreaterThan(0)
      expect(l.keyPoints.length, l.id).toBeGreaterThan(0)
      expect(l.exerciseIds.length, l.id).toBeGreaterThanOrEqual(4)
      for (const id of l.exerciseIds) expect(getExercise(id), `${l.id} → ${id}`).toBeDefined()
      for (const s of l.theory) for (const p of s.body) expect(p.es.trim().length * p.en.trim().length, l.id).toBeGreaterThan(0)
    }
  })
  it('no duplicate questions (prompt + case data), in either language', () => {
    for (const lang of ['es', 'en'] as const) {
      const keys = EXERCISES.map((e) => `${e.prompt[lang]}|${e.context?.[lang] ?? ''}`.trim().toLowerCase())
      expect(keys.filter((p, i) => keys.indexOf(p) !== i)).toEqual([])
    }
    const prompts = EXERCISES.map((e) => e.prompt.es.trim().toLowerCase())
    const dups = prompts.filter((p, i) => prompts.indexOf(p) !== i)
    expect(dups).toEqual([])
  })
  it('every exercise is bilingual, has explanation and positive points', () => {
    for (const e of EXERCISES) {
      expect(e.prompt.es && e.prompt.en, e.id).toBeTruthy()
      expect(e.explanation.es && e.explanation.en, e.id).toBeTruthy()
      expect(e.points, e.id).toBeGreaterThan(0)
    }
  })
  it('MCQs have exactly 4 unique options and the correct id is among them', () => {
    for (const e of EXERCISES) {
      if (e.kind !== 'mcq' && e.kind !== 'multi') continue
      const ids = e.options.map((o) => o.id)
      expect(new Set(ids).size, e.id).toBe(ids.length)
      if (e.kind === 'mcq') {
        expect(ids.length, e.id).toBe(4)
        expect(ids, e.id).toContain(e.correctOptionId)
      } else {
        for (const c of e.correctOptionIds) expect(ids, e.id).toContain(c)
      }
    }
  })
  it('option ids are unique across the whole bank', () => {
    const all: string[] = []
    for (const e of EXERCISES) {
      if (e.kind === 'mcq' || e.kind === 'multi') all.push(...e.options.map((o) => o.id))
      if (e.kind === 'formula') for (const b of e.blanks) all.push(...b.options.map((o) => `${e.id}:${o.id}`))
    }
    expect(new Set(all).size).toBe(all.length)
  })
  it('journal exercises: expected entries balance and use real accounts offered to the learner', () => {
    for (const e of EXERCISES) {
      if (e.kind !== 'journal') continue
      expect(isBalanced(e.expected), e.id).toBe(true)
      for (const l of e.expected) {
        expect(getAccount(l.accountCode), `${e.id} ${l.accountCode}`).toBeDefined()
        expect(e.accountChoices, e.id).toContain(l.accountCode)
      }
    }
    for (const t of LAB_TRANSACTIONS) for (const l of t.expected) expect(getAccount(l.accountCode), t.id).toBeDefined()
  })
  it('the official solution of EVERY exercise is graded correct, and an empty answer is not', () => {
    for (const e of EXERCISES) {
      expect(evaluate(e, solutionAnswer(e)).correct, e.id).toBe(true)
      expect(evaluate(e, emptyAnswer(e)).correct, e.id).toBe(false)
    }
  })
})
