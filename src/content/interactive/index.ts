import type { InteractiveLesson } from './types'
import { intL105 } from './L1-05'
import { intL110 } from './L1-10'

export type { Block, InteractiveLesson, Sim, Spot } from './types'
const ALL: InteractiveLesson[] = [intL105, intL110]
export const interactiveFor = (lessonId: string) => ALL.find((x) => x.lessonId === lessonId)
export const allInteractive = () => ALL
