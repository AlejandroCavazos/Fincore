import { beforeEach, describe, expect, it } from 'vitest'
import { LIVES } from '../config/lives'
import * as L from '../lib/lives/service'
import { trackedEvents } from '../lib/lives/analytics'

const H = 3_600_000
const T0 = new Date('2026-10-15T15:00:00Z') // 09:00 in Monterrey
const at = (h: number) => new Date(T0.getTime() + h * H)
const free = () => L.initialState('free', T0)
const failN = (s: L.LivesState, n: number, now = T0) => {
  for (let i = 0; i < n; i++) s = L.spend(s, 'quiz', { topic: 'L1-01' }, now).s
  return s
}

beforeEach(() => localStorage.clear())

describe('lives: spending', () => {
  it('Gratis with 5 lives fails 5 → 0 and cannot start another activity', () => {
    const s = failN(free(), 5)
    expect(s.lives).toBe(0)
    expect(L.canStart(s, 'quiz').ok).toBe(false)
    expect(L.spend(s, 'quiz', {}, T0).ok).toBe(false)
    expect(L.spend(s, 'quiz', {}, T0).s.lives).toBe(0)
  })
  it('a paused activity is kept 7 days (evaluations 24 h), then expires', () => {
    let s = L.pause(failN(free(), 5), { id: 'L1-01', type: 'quiz', answered: 5, correct: 0 }, T0).s
    s = L.pause(s, { id: 'exam:1', type: 'eval', answered: 3, correct: 1 }, T0).s
    expect(L.sync(s, at(23)).s.paused).toHaveLength(2)
    const d2 = L.sync(s, at(25)).s
    expect(d2.paused.map((p) => p.id)).toEqual(['L1-01'])
    expect(d2.expired).toEqual(['exam:1'])
    expect(L.sync(s, at(7 * 24 + 1)).s.paused).toHaveLength(0)
  })
  it('Pro never spends lives and has no counter', () => {
    const s = failN(L.initialState('pro', T0), 20)
    expect(L.isUnlimited('pro')).toBe(true)
    expect(L.canStart(s, 'quiz').ok).toBe(true)
    expect(L.canStart(s, 'areaExam').ok).toBe(true)
    expect(L.nextLifeIn(s, T0)).toBeNull()
  })
})

describe('lives: regeneration', () => {
  it('Gratis at 0: 4 h → 1, 8 h → 2, 30 h → 5 (no more)', () => {
    const s = failN(free(), 5)
    expect(L.sync(s, at(4)).s.lives).toBe(1)
    expect(L.sync(s, at(8)).s.lives).toBe(2)
    expect(L.sync(s, at(30)).s.lives).toBe(5)
    expect(L.sync(s, at(300)).s.lives).toBe(5)
  })
  it('keeps the remainder of the interval and stops when full', () => {
    let s = failN(free(), 2)
    s = L.sync(s, at(5)).s // +1 after 4 h, 1 h already counted toward the next
    expect(s.lives).toBe(4)
    expect(L.nextLifeIn(s, at(5))).toBe(3 * H)
    s = L.sync(s, at(8)).s
    expect(s.lives).toBe(5)
    expect(s.regenStart).toBeNull()
    expect(L.nextLifeIn(s, at(8))).toBeNull()
  })
  it('moving the clock back gives no lives and never moves the clock back', () => {
    let s = failN(free(), 5)
    s = L.sync(s, at(3)).s
    const back = L.sync(s, at(-10)).s
    expect(back.lives).toBe(0)
    expect(back.lastSeen).toBe(s.lastSeen)
    expect(L.sync(back, at(4)).s.lives).toBe(1)
  })
})

describe('lives: recovery review', () => {
  it('3 successful reviews in a day give only 2 lives; the third is blocked', () => {
    let s = failN(free(), 5)
    for (let i = 0; i < 3; i++) s = L.finishRecovery(s, 3, {}, T0).s
    expect(s.lives).toBe(2)
    expect(L.canRecover(s)).toBe(false)
    expect(L.recoveryLeft(s)).toBe(0)
  })
  it('1 of 3 correct: nothing gained or lost, can retry', () => {
    const s0 = failN(free(), 5)
    const r = L.finishRecovery(s0, 1, {}, T0)
    expect(r.gained).toBe(false)
    expect(r.s.lives).toBe(0)
    expect(r.s.daily.recovered).toBe(0)
    expect(L.canRecover(r.s)).toBe(true)
  })
  it('with full lives there is no countdown and no recovery option', () => {
    const s = free()
    expect(L.nextLifeIn(s, T0)).toBeNull()
    expect(L.canRecover(s)).toBe(false)
  })
  it('daily counters reset at midnight in Monterrey', () => {
    let s = failN(free(), 5)
    s = L.finishRecovery(L.finishRecovery(s, 3, {}, T0).s, 3, {}, T0).s
    expect(L.canRecover(s)).toBe(false)
    // 23:59 Monterrey = 05:59Z next day: still the same day.
    expect(L.sync(s, new Date('2026-10-16T05:59:00Z')).s.daily.recovered).toBe(2)
    const next = L.sync(s, new Date('2026-10-16T06:00:30Z')).s
    expect(next.daily).toEqual({ date: '2026-10-16', recovered: 0, refills: 0 })
  })
})

describe('lives: Plus refill', () => {
  it('refills to 15, not again the same day, available the next day', () => {
    let s = failN(L.initialState('plus', T0), 10)
    const r = L.refill(s, T0)
    expect(r.ok && r.s.lives).toBe(15)
    expect(r.s.regenStart).toBeNull()
    s = failN(r.s, 3)
    expect(L.canRefill(s)).toBe(false)
    expect(L.refill(s, T0).ok).toBe(false)
    // Next day (lives drop again before the hourly regeneration fills them).
    expect(L.refill(failN(L.sync(s, at(24)).s, 2, at(24)), at(24)).ok).toBe(true)
  })
  it('Plus with 4 lives cannot start an area exam', () => {
    const s = failN(L.initialState('plus', T0), 11)
    expect(L.canStart(s, 'areaExam')).toEqual({ ok: false, need: LIVES.plans.plus.examMinLives })
    expect(L.canStart(s, 'quiz').ok).toBe(true)
  })
})

describe('lives: plan changes', () => {
  it('Plus 12 → Gratis = 5; Plus 3 → Gratis = 3 with the 4 h clock running', () => {
    const a = L.changePlan(failN(L.initialState('plus', T0), 3), 'free', T0).s
    expect(a.lives).toBe(5)
    expect(a.regenStart).toBeNull()
    const b = L.changePlan(failN(L.initialState('plus', T0), 12), 'free', T0).s
    expect(b.lives).toBe(3)
    expect(L.nextLifeIn(b, T0)).toBe(4 * H)
  })
  it('Gratis 0 → Plus = 15 and the paused activity can resume; → Pro resumes everything', () => {
    const paused = L.pause(failN(free(), 5), { id: 'L1-01', type: 'quiz', answered: 5, correct: 0 }, T0).s
    const plus = L.changePlan(paused, 'plus', T0).s
    expect(plus.lives).toBe(15)
    expect(L.canStart(plus, 'quiz').ok).toBe(true)
    expect(L.changePlan(paused, 'pro', T0).s.paused).toHaveLength(0)
    expect(L.changePlan(L.initialState('pro', T0), 'free', T0).s.lives).toBe(5)
    expect(L.changePlan(L.initialState('pro', T0), 'plus', T0).s.lives).toBe(15)
  })
  it('recoveries used today still count after a plan change', () => {
    let s = failN(free(), 5)
    s = L.finishRecovery(L.finishRecovery(s, 3, {}, T0).s, 3, {}, T0).s
    s = L.changePlan(L.changePlan(s, 'plus', T0).s, 'free', T0).s
    expect(L.canRecover(L.spend(s, 'quiz', {}, T0).s)).toBe(false)
  })
})

describe('lives: streak', () => {
  it('Plus that hits 0 keeps the day; Gratis in the same situation does not', () => {
    expect(failN(L.initialState('plus', T0), 15).streak.lastDate).toBe('2026-10-15')
    expect(failN(free(), 5).streak.lastDate).toBeNull()
  })
  it('a recovery review counts even without gaining a life; a missed day resets', () => {
    let s = L.finishRecovery(failN(free(), 1), 0, {}, T0).s
    expect(s.streak).toEqual({ days: 1, lastDate: '2026-10-15' })
    s = L.markStreakDay(s, at(24)).s
    expect(s.streak.days).toBe(2)
    expect(L.sync(s, at(72)).s.streak.days).toBe(0)
  })
})

describe('lives: Pro official exam', () => {
  it('3 attempts per area every 7 days', () => {
    let s = L.initialState('pro', T0)
    for (let i = 0; i < 3; i++) s = L.recordOfficialAttempt(s, 'exam:1', at(i)).s
    expect(L.officialAttemptsLeft(s, 'exam:1', at(3))).toBe(0)
    expect(L.recordOfficialAttempt(s, 'exam:1', at(3)).ok).toBe(false)
    expect(L.officialAttemptsLeft(s, 'exam:2', at(3))).toBe(3)
    expect(L.officialAttemptsLeft(s, 'exam:1', at(7 * 24 + 0.5))).toBe(1)
    expect(L.officialAttemptsLeft(free(), 'exam:1', T0)).toBeNull()
  })
})

describe('lives: storage', () => {
  it('two tabs cannot duplicate lives: every change starts from the saved state', () => {
    L.setLivesUser(null)
    L.mutate('free', (s) => L.sync(s, T0), T0)
    // Tab A and tab B each had "5" on screen; both fail once.
    L.mutate('free', (s) => L.spend(s, 'quiz', {}, T0), T0)
    L.mutate('free', (s) => L.spend(s, 'quiz', {}, T0), T0)
    expect(L.peek('free').lives).toBe(3)
    // Both try to recover with only one review left.
    L.mutate('free', (s) => L.finishRecovery(s, 3, {}, T0), T0)
    L.mutate('free', (s) => L.finishRecovery(s, 3, {}, T0), T0)
    L.mutate('free', (s) => L.finishRecovery(s, 3, {}, T0), T0)
    expect(L.peek('free').lives).toBe(5)
    expect(L.peek('free').daily.recovered).toBe(2)
  })
  it('records analytics events locally with plan and topic', () => {
    L.setLivesUser(null)
    L.mutate('free', (s) => L.spend(s, 'quiz', { topic: 'L1-01', area: 'contabilidad' }, T0), T0)
    const e = trackedEvents().find((x) => x.name === 'life_lost')
    expect(e).toMatchObject({ plan: 'free', topic: 'L1-01', area: 'contabilidad', activity: 'quiz' })
  })
  it('lives are stored per account', () => {
    L.setLivesUser('u1')
    L.mutate('free', (s) => L.spend(s, 'quiz', {}, T0), T0)
    L.setLivesUser('u2')
    expect(L.peek('free').lives).toBe(5)
    L.setLivesUser(null)
  })
})
