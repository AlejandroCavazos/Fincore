import { describe, expect, it } from 'vitest'
import { AREAS, areaOfLesson, getArea } from '../content/areas'
import { LESSONS } from '../content'
import { defaultState, markSubtopic } from '../lib/progress'
import { validateState } from '../lib/backup'
import { areaProgress, isSubtopicOpen, lessonsOfArea, nextSubtopic, subtopicCount, subtopicStates } from '../lib/selectors'

const lesson = LESSONS[0]

describe('areas', () => {
  it('cover every lesson exactly once', () => {
    const ids = AREAS.flatMap((a) => a.sections.flatMap((s) => s.lessonIds))
    expect([...ids].sort()).toEqual(LESSONS.map((l) => l.id).sort())
    expect(AREAS.flatMap((a) => lessonsOfArea(a)).length).toBe(LESSONS.length)
  })
  it('follow the 12-area syllabus and map lessons to their area', () => {
    expect(AREAS).toHaveLength(12)
    for (const a of AREAS) expect(a.materias.length, a.id).toBeGreaterThan(0)
    expect(areaOfLesson('L1-15').id).toBe('contabilidad')
    expect(areaOfLesson('L5-01').id).toBe('fiscal')
    expect(areaOfLesson('L5-03').id).toBe('auditoria')
    expect(areaOfLesson('L6-05').id).toBe('inversiones')
  })
  it('Nivel 1 follows the 15 topics of the syllabus', () => {
    const all = getArea('contabilidad')!.sections.filter((s) => s.lessonIds[0].startsWith('L1-')).flatMap((s) => s.lessonIds)
    // L1-16 (pólizas, facturas e IVA) is an added bridge topic at the end of Unit 3, outside the original 15.
    expect(all.indexOf('L1-16')).toBe(all.indexOf('L1-11') + 1)
    const n1 = all.filter((id) => id !== 'L1-16')
    expect(n1).toHaveLength(15)
    n1.forEach((id, i) => expect(LESSONS.find((l) => l.id === id)?.topicIds[0], id).toBe(`1.${i + 1}`))
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
    expect(areaProgress(s, getArea('contabilidad')!).done).toBe(1)
  })
  it('survive backup validation', () => {
    const s = markSubtopic(defaultState(), lesson.id, 0)
    const v = validateState(JSON.parse(JSON.stringify(s)))
    expect(v.ok && v.state.subtopics[`${lesson.id}:0`]).toBeTruthy()
  })
})
