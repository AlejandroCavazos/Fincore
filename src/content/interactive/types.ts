/** Interactive theory: short text plus hands-on blocks (simulators, find-the-error). Spanish only. */
export interface SimInput {
  key: string
  label: string
  min: number
  max: number
  step: number
  value: number
}
export interface Sim {
  title: string
  inputs: SimInput[]
  outputs: { label: string; calc: (v: Record<string, number>) => number; main?: boolean }[]
  goal?: { text: string; check: (v: Record<string, number>) => boolean; done: string }
}
export interface Spot {
  title: string
  story: string
  lines: { account: string; side: 'D' | 'C'; amount: number }[]
  /** Index of the wrong line. */
  wrong: number
  why: string
}
export type Block =
  | { text: string }
  | { tip: string }
  | { ask: string; options: { text: string; ok?: boolean; reply: string }[] }
  | { sim: Sim }
  | { spot: Spot }

export interface InteractiveLesson {
  lessonId: string
  /** Same order and count as lesson.theory; null = that subtopic keeps the default view. */
  sections: (Block[] | null)[]
}
