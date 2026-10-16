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
/** Classify items one by one into buckets (e.g. Activo / Pasivo / Capital, or Mito / Realidad). */
export interface SortGame {
  title: string
  buckets: string[]
  items: { text: string; bucket: number; why: string }[]
}
/** Tap the steps in the right order. `steps` is the correct order. */
export interface OrderGame {
  title: string
  steps: string[]
  done: string
}
/** Join each term with its meaning. */
export interface MatchGame {
  title: string
  pairs: [string, string][]
}
/** The accounting equation as a live scale: predict each operation, then watch it move. */
export interface Balance {
  title: string
  start: { a: number; p: number; c: number }
  ops: { story: string; options: { text: string; ok?: boolean }[]; d: { a: number; p: number; c: number }; why: string }[]
}
/** A T account that fills as the learner sends each movement to Debe or Haber. */
export interface TAcct {
  title: string
  account: string
  moves: { story: string; side: 'D' | 'C'; amount: number; why: string }[]
}
/** Build a póliza: choose Cargo or Abono for each line. */
export interface Entry {
  title: string
  story: string
  lines: { account: string; side: 'D' | 'C'; amount: number; why: string }[]
}
/** Timed round: answer as many as you can with two buttons. */
export interface Rush {
  title: string
  seconds: number
  labels: [string, string]
  items: { text: string; ans: 0 | 1 }[]
}
/** Type the number. */
export interface Calc {
  question: string
  answer: number
  /** What the number counts when it is not pesos, e.g. '%', 'piezas', 'horas'. Without it the answer is in pesos. */
  unit?: string
  hint: string
  why: string
}
/** Select every right option, then check. */
export interface Multi {
  title: string
  items: { text: string; ok: boolean }[]
  why: string
}
export type Block =
  | { text: string }
  | { tip: string }
  | { ask: string; options: { text: string; ok?: boolean; reply: string }[] }
  | { sim: Sim }
  | { spot: Spot }
  | { sort: SortGame }
  | { order: OrderGame }
  | { match: MatchGame }
  | { balance: Balance }
  | { tacct: TAcct }
  | { entry: Entry }
  | { rush: Rush }
  | { calc: Calc }
  | { multi: Multi }

export interface InteractiveLesson {
  lessonId: string
  /** Same order and count as lesson.theory; null = that subtopic keeps the default view. */
  sections: (Block[] | null)[]
}
