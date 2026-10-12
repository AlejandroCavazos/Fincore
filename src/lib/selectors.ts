import { LESSONS, lessonsOfLevel } from '../content'
import type { Lesson, LevelId } from '../types'
import { addDays, localDay, type AppState } from './progress'

export function isLessonCompleted(s: AppState, id: string) {
  return s.lessons[id]?.status === 'completed'
}

/**
 * Unlock rule: the first lesson of each level is always open (learners may start at
 * any level); later lessons open when the previous lesson of the same level is
 * completed, unless free mode is on.
 */
export function isLessonUnlocked(s: AppState, lesson: Lesson, freeMode = false): boolean {
  if (freeMode) return true
  const list = lessonsOfLevel(lesson.level)
  const i = list.findIndex((l) => l.id === lesson.id)
  return i <= 0 || isLessonCompleted(s, list[i - 1].id)
}

export function nextLesson(s: AppState): Lesson | undefined {
  const inProgress = LESSONS.find((l) => s.attempts[l.id] && !s.attempts[l.id].finishedAt && !isLessonCompleted(s, l.id))
  return inProgress ?? LESSONS.find((l) => !isLessonCompleted(s, l.id) && isLessonUnlocked(s, l, s.settings.freeMode))
}

export function levelProgress(s: AppState, level: LevelId) {
  const list = lessonsOfLevel(level)
  const done = list.filter((l) => isLessonCompleted(s, l.id)).length
  return { done, total: list.length, ratio: list.length ? done / list.length : 0 }
}

export function xpByDay(s: AppState, days = 7, today = localDay()) {
  const out: { day: string; xp: number }[] = []
  for (let i = days - 1; i >= 0; i--) out.push({ day: addDays(today, -i), xp: 0 })
  const idx = new Map(out.map((d, i) => [d.day, i]))
  for (const e of Object.values(s.xpLedger)) {
    const d = localDay(new Date(e.at))
    const i = idx.get(d)
    if (i !== undefined) out[i].xp += e.xp
  }
  return out
}

export function accuracy(s: AppState) {
  const total = s.answers.length
  const correct = s.answers.filter((a) => a.correct).length
  return { total, correct, ratio: total ? correct / total : 0 }
}
