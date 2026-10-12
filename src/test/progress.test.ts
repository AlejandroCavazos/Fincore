import { describe, expect, it } from 'vitest'
import { createAttempt, evaluate, solutionAnswer, emptyAnswer } from '../lib/engine'
import { awardXp, defaultState, dueCards, ensureAttempt, finishAttempt, finishLesson, levelInfo, recordAnswer, scheduleCard, streak, totalXp, xpForLevel, type AppState } from '../lib/progress'
import { checkAchievements } from '../lib/progress'
import { isLessonUnlocked } from '../lib/selectors'
import { exercisesOfLesson, LESSONS } from '../content'

const lesson = LESSONS[0]
const exs = exercisesOfLesson(lesson)

function answerAll(s: AppState, key: string, correct: boolean, mode: 'lesson' | 'review' | 'exam' = 'lesson', now = new Date('2026-03-02T12:00:00')) {
  const att = s.attempts[key]
  for (const id of att.exerciseIds) {
    const ex = exs.find((e) => e.id === id)!
    const answer = correct ? solutionAnswer(ex) : emptyAnswer(ex)
    s = recordAnswer(s, { exerciseId: id, points: ex.points, attempt: s.attempts[key], answer, evaluation: evaluate(ex, answer), mode, now })
  }
  return s
}

describe('XP', () => {
  it('awardXp is idempotent per key (no duplicate XP on reload/resubmit)', () => {
    let s = defaultState()
    s = awardXp(s, 'ex:X', 10, 'exercise')
    s = awardXp(s, 'ex:X', 10, 'exercise')
    s = awardXp(s, 'ex:X', 999, 'exercise')
    expect(totalXp(s)).toBe(10)
  })
  it('a correct lesson awards exercise points + lesson bonus once; repeating the lesson gives no extra XP', () => {
    let s = defaultState()
    s = ensureAttempt(s, lesson.id, () => createAttempt(lesson.id, exs))
    s = answerAll(s, lesson.id, true)
    s = finishLesson(s, lesson.id)
    const sum = exs.reduce((a, e) => a + e.points, 0)
    expect(totalXp(s)).toBe(sum + 50 + 25)
    // resubmitting the same attempt is ignored (locked answers)
    const again = answerAll(s, lesson.id, true)
    expect(again).toBe(s)
    // finishing again is a no-op
    expect(finishLesson(s, lesson.id)).toBe(s)
    // a brand new attempt answered correctly gives no new XP
    s = ensureAttempt(s, lesson.id, () => createAttempt(lesson.id, exs), true)
    s = answerAll(s, lesson.id, true)
    s = finishLesson(s, lesson.id)
    expect(totalXp(s)).toBe(sum + 75)
    expect(s.lessons[lesson.id].attempts).toBe(2)
  })
  it('first submission is locked: a wrong answer cannot be overwritten by a right one in the same attempt', () => {
    let s = defaultState()
    s = ensureAttempt(s, lesson.id, () => createAttempt(lesson.id, exs))
    const ex = exs[0]
    const wrong = emptyAnswer(ex)
    s = recordAnswer(s, { exerciseId: ex.id, points: ex.points, attempt: s.attempts[lesson.id], answer: wrong, evaluation: evaluate(ex, wrong), mode: 'lesson' })
    const right = solutionAnswer(ex)
    const s2 = recordAnswer(s, { exerciseId: ex.id, points: ex.points, attempt: s.attempts[lesson.id], answer: right, evaluation: evaluate(ex, right), mode: 'lesson' })
    expect(s2).toBe(s)
    expect(totalXp(s2)).toBe(0)
  })
  it('a failed lesson (< 60 %) is not completed and gives no bonus', () => {
    let s = defaultState()
    s = ensureAttempt(s, lesson.id, () => createAttempt(lesson.id, exs))
    s = answerAll(s, lesson.id, false)
    s = finishLesson(s, lesson.id)
    expect(s.lessons[lesson.id].status).toBe('in_progress')
    expect(totalXp(s)).toBe(0)
  })
  it('exam pass bonus is awarded once', () => {
    let s = defaultState()
    s = ensureAttempt(s, 'exam:1', () => createAttempt('exam:1', exs))
    s = answerAll(s, 'exam:1', true, 'exam')
    s = finishAttempt(s, 'exam:1', 'exam')
    const xp1 = totalXp(s)
    s = ensureAttempt(s, 'exam:1', () => createAttempt('exam:1', exs), true)
    s = answerAll(s, 'exam:1', true, 'exam')
    s = finishAttempt(s, 'exam:1', 'exam')
    expect(totalXp(s)).toBe(xp1)
    expect(s.exams['exam:1']).toHaveLength(2)
  })
  it('levels: thresholds 0, 100, 300, 600…', () => {
    expect(xpForLevel(1)).toBe(0)
    expect(xpForLevel(2)).toBe(100)
    expect(xpForLevel(3)).toBe(300)
    expect(levelInfo(0).level).toBe(1)
    expect(levelInfo(99).level).toBe(1)
    expect(levelInfo(100).level).toBe(2)
    expect(levelInfo(350).level).toBe(3)
  })
})

describe('streaks, spaced repetition, unlocking, achievements', () => {
  it('streak counts consecutive days', () => {
    const s = { ...defaultState(), activity: ['2026-02-20', '2026-03-01', '2026-03-02', '2026-03-03'] } as AppState
    expect(streak(s, '2026-03-03')).toEqual({ current: 3, best: 3 })
    expect(streak(s, '2026-03-05').current).toBe(0)
  })
  it('SM-2-lite: correct answers grow the interval; a lapse resets it', () => {
    let c = scheduleCard(undefined, true, '2026-03-01')
    expect(c.interval).toBe(1)
    c = scheduleCard(c, true, '2026-03-02')
    expect(c.interval).toBeGreaterThan(1)
    const lapse = scheduleCard(c, false, '2026-03-05')
    expect(lapse.interval).toBe(0)
    expect(lapse.lapses).toBe(1)
    const s = { ...defaultState(), srs: { A: { ...lapse, due: '2026-03-06' }, B: { ...lapse, due: '2026-04-01' } } }
    expect(dueCards(s, '2026-03-10')).toEqual(['A'])
  })
  it('first lesson of a level is open, the next one opens after completing it; free mode unlocks all', () => {
    const s = defaultState()
    expect(isLessonUnlocked(s, LESSONS[0])).toBe(true)
    expect(isLessonUnlocked(s, LESSONS[1])).toBe(false)
    expect(isLessonUnlocked(s, LESSONS[1], true)).toBe(true)
    const done = { ...s, lessons: { [LESSONS[0].id]: { status: 'completed' as const, bestScore: 1, lastScore: 1, attempts: 1, theoryRead: true } } }
    expect(isLessonUnlocked(done, LESSONS[1])).toBe(true)
  })
  it('achievements unlock once', () => {
    let s = awardXp(defaultState(), 'x', 600, 'test')
    const r1 = checkAchievements(s)
    expect(r1.unlocked).toContain('xp-500')
    s = r1.state
    expect(checkAchievements(s).unlocked).toEqual([])
  })
})
