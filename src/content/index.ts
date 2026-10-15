import type { Exercise, Lesson, LevelId } from '../types'
import * as n1 from './lessons/level1'
import * as n2 from './lessons/level2'
import * as n3 from './lessons/level3'
import * as n4 from './lessons/level4'
import * as n5 from './lessons/level5'
import * as n6 from './lessons/level6'
import * as etica from './lessons/extra/etica'
import * as negocio from './lessons/extra/negocio'
import * as polizas from './lessons/extra/polizas'

/** Syllabus v2.0 lessons: every file in lessons/v2 exports `lessons` and `exercises`. */
const v2 = Object.values(import.meta.glob<{ lessons: Lesson[]; exercises: Exercise[] }>('./lessons/v2/*.ts', { eager: true })).sort((a, b) =>
  (a.lessons[0]?.id ?? '').localeCompare(b.lessons[0]?.id ?? ''),
)

export const LESSONS: Lesson[] = [...n1.lessons, ...polizas.lessons, ...n2.lessons, ...n3.lessons, ...n4.lessons, ...n5.lessons, ...n6.lessons, ...etica.lessons, ...negocio.lessons, ...v2.flatMap((m) => m.lessons)]
export const EXERCISES: Exercise[] = [...n1.exercises, ...polizas.exercises, ...n2.exercises, ...n3.exercises, ...n4.exercises, ...n5.exercises, ...n6.exercises, ...etica.exercises, ...negocio.exercises, ...v2.flatMap((m) => m.exercises)]

const lessonById = new Map(LESSONS.map((l) => [l.id, l]))
const exerciseById = new Map(EXERCISES.map((e) => [e.id, e]))

export const getLesson = (id: string) => lessonById.get(id)
export const getExercise = (id: string) => exerciseById.get(id)
export const lessonsOfLevel = (level: LevelId) => LESSONS.filter((l) => l.level === level)
export const exercisesOfLesson = (lesson: Lesson): Exercise[] =>
  lesson.exerciseIds.map((id) => exerciseById.get(id)).filter((e): e is Exercise => !!e)
export const exercisesOfLevel = (level: LevelId) => EXERCISES.filter((e) => e.level === level)

/** Lesson that covers a topic (first match). */
export const lessonForTopic = (topicId: string) => LESSONS.find((l) => l.topicIds.includes(topicId))

/** Previous lesson in curriculum order (used for soft-unlocking). */
export function previousLesson(id: string): Lesson | undefined {
  const i = LESSONS.findIndex((l) => l.id === id)
  return i > 0 ? LESSONS[i - 1] : undefined
}

const lessonByExercise = new Map(LESSONS.flatMap((l) => l.exerciseIds.map((id) => [id, l.id] as const)))
/** Lesson (topic) that owns an exercise. */
export const lessonOfExercise = (exerciseId: string) => lessonByExercise.get(exerciseId)
