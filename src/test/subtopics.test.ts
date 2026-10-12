import { describe, expect, it } from 'vitest'
import { AREAS, areaOfLevel } from '../content/areas'
import { LESSONS } from '../content'
import { defaultState, markSubtopic } from '../lib/progress'
import { validateState } from '../lib/backup'
import { areaProgress, isSubtopicOpen, lessonsOfArea, nextSubtopic, subtopicCount, subtopicStates } from '../lib/selectors'

const lesson = LESSONS[0]

describe('areas', () => {
  it('cover every lesson exactly once', () => {
    const ids = AREAS.flatMap((a) => lessonsOfArea(a.levels).map((l) => l.id))
    expect(ids.sort()).toEqual(LESSONS.map((l) => l.id).sort())
  })
  it('map levels to areas', () => {
    expect(areaOfLevel(1).id).toBe('contabilidad')
    expect(areaOfLevel(6).id).toBe('finanzas')
    expect(areaOfLevel(5).id).toBe('fiscal')
  })
})

describe('subtopics', () => {
  it('are the theory sections plus the topic challenge', () => {
    expect(subtopicCount(lesson)).toBe(lesson.theory.length + 1)
    for (const l of LESSONS) expect(subtopicCount(l)).toBeGreaterThanOrEqual(4)
  })
  it('advance in order and stay idempotent', () => {
    let s = defaultState()
    expect(nextSubtopic(s, lesson)).toBe(0)
    expect(isSubtopicOpen(s, lesson, 1)).toBe(false)
    s = markSubtopic(s, lesson.id, 0)
    const xp = Object.keys(s.xpLedger).length
    s = markSubtopic(s, lesson.id, 0)
    expect(Object.keys(s.xpLedger).length).toBe(xp)
    expect(nextSubtopic(s, lesson)).toBe(1)
    expect(isSubtopicOpen(s, lesson, 1)).toBe(true)
    expect(subtopicStates(s, lesson).slice(0, 3)).toEqual(['done', 'next', 'todo'])
  })
  it('free mode opens every subtopic', () => {
    expect(isSubtopicOpen(defaultState(), lesson, 3, true)).toBe(true)
  })
  it('a completed lesson marks all subtopics done and counts for its area', () => {
    const s = { ...defaultState(), lessons: { [lesson.id]: { status: 'completed' as const, bestScore: 1, lastScore: 1, attempts: 1 } } }
    expect(subtopicStates(s, lesson).every((x) => x === 'done')).toBe(true)
    expect(areaProgress(s, [1, 2]).done).toBe(1)
  })
  it('survive backup validation', () => {
    const s = markSubtopic(defaultState(), lesson.id, 0)
    const v = validateState(JSON.parse(JSON.stringify(s)))
    expect(v.ok && v.state.subtopics[`${lesson.id}:0`]).toBeTruthy()
  })
})
