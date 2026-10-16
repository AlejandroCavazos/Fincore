import type { InteractiveLesson } from './types'
import { intL101 } from './L1-01'
import { intL102 } from './L1-02'
import { intL103 } from './L1-03'
import { intL104 } from './L1-04'
import { intL105 } from './L1-05'
import { intL106 } from './L1-06'
import { intL107 } from './L1-07'
import { intL110 } from './L1-10'

export type { Balance, Block, InteractiveLesson, MatchGame, OrderGame, Sim, SortGame, Spot } from './types'
const ALL: InteractiveLesson[] = [intL101, intL102, intL103, intL104, intL105, intL106, intL107, intL110]
export const interactiveFor = (lessonId: string) => ALL.find((x) => x.lessonId === lessonId)
export const allInteractive = () => ALL
