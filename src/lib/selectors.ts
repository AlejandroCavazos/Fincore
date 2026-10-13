import { getLesson, LESSONS, lessonsOfLevel } from '../content'
import { locateLesson, type Area } from '../content/areas'
import type { Lesson, LevelId } from '../types'
import { addDays, localDay, type AppState } from './progress'

export function isLessonCompleted(s: AppState, id: string) {
  return s.lessons[id]?.status === 'completed'
}

/**
 * Unlock rule: the first topic of each area section is always open (learners may
 * start anywhere); later topics open when the previous topic of the same section
 * is completed, unless free mode is on.
 */
export function isLessonUnlocked(s: AppState, lesson: Lesson, freeMode = false): boolean {
  if (freeMode) return true
  const list = locateLesson(lesson.id).section.lessonIds
  const i = list.indexOf(lesson.id)
  return i <= 0 || isLessonCompleted(s, list[i - 1])
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

// ───────────────────────── Areas, topics and subtopics ─────────────────────────
// A topic is a lesson. Its subtopics are the lesson's theory sections (one short
// idea each) followed by the "Reto del tema", which is the lesson's practice.

export type SubtopicState = 'done' | 'next' | 'todo'

export function subtopicCount(lesson: Lesson) {
  return lesson.theory.length + 1
}

export const isRetoIndex = (lesson: Lesson, i: number) => i === lesson.theory.length

export function isSubtopicDone(s: AppState, lesson: Lesson, i: number) {
  if (isLessonCompleted(s, lesson.id)) return true
  return !isRetoIndex(lesson, i) && Boolean(s.subtopics[`${lesson.id}:${i}`])
}

/** Index of the first subtopic not done yet, or the reto when everything is done. */
export function nextSubtopic(s: AppState, lesson: Lesson) {
  const n = subtopicCount(lesson)
  for (let i = 0; i < n; i++) if (!isSubtopicDone(s, lesson, i)) return i
  return n - 1
}

export function subtopicStates(s: AppState, lesson: Lesson): SubtopicState[] {
  const next = isLessonCompleted(s, lesson.id) ? -1 : nextSubtopic(s, lesson)
  return Array.from({ length: subtopicCount(lesson) }, (_, i) => (isSubtopicDone(s, lesson, i) ? 'done' : i === next ? 'next' : 'todo'))
}

/** A subtopic opens once the previous one is done (free mode opens everything). */
export function isSubtopicOpen(s: AppState, lesson: Lesson, i: number, freeMode = false) {
  if (freeMode || i === 0 || isLessonCompleted(s, lesson.id)) return true
  return isSubtopicDone(s, lesson, i - 1)
}

export function lessonsOfArea(area: Area): Lesson[] {
  return area.sections.flatMap((sec) => sec.lessonIds.map((id) => getLesson(id)).filter((l): l is Lesson => !!l))
}

export function areaProgress(s: AppState, area: Area) {
  const list = lessonsOfArea(area)
  const done = list.filter((l) => isLessonCompleted(s, l.id)).length
  return { done, total: list.length, ratio: list.length ? done / list.length : 0 }
}
