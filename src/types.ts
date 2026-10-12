/**
 * FINCORE — core typed models.
 * All learner-facing text is bilingual through the `L` type.
 */

export type Lang = 'es' | 'en'

/** Bilingual text. */
export interface L {
  es: string
  en: string
}

export type LevelId = 1 | 2 | 3 | 4 | 5 | 6
export type Difficulty = 1 | 2 | 3

// ───────────────────────────── Curriculum ─────────────────────────────

export interface Topic {
  id: string // e.g. "1.3"
  title: L
}

export interface Level {
  id: LevelId
  code: string // e.g. "N1"
  title: L
  description: L
  topics: Topic[]
}

export interface WorkedExample {
  title: L
  /** Statement of the problem. */
  problem: L
  /** Ordered solution steps. */
  steps: L[]
  /** Final answer / conclusion. */
  result: L
}

export interface TheorySection {
  heading: L
  /** Paragraphs. Supports **bold** markup only. */
  body: L[]
  /** Optional formula shown in a highlighted box (plain text). */
  formula?: string
  /** Optional bullet list. */
  bullets?: L[]
}

export interface Lesson {
  id: string // e.g. "L1-01"
  level: LevelId
  /** Topic ids from the level that this lesson covers. */
  topicIds: string[]
  title: L
  summary: L
  minutes: number
  objectives: L[]
  theory: TheorySection[]
  examples: WorkedExample[]
  /** Key takeaways shown at the end of the theory. */
  keyPoints: L[]
  /** Normative note (jurisdiction / applicable date) when relevant. */
  normativeNote?: L
  /** Ids of exercises (in Exercise bank) used for this lesson's practice. */
  exerciseIds: string[]
}

// ───────────────────────────── Exercises ─────────────────────────────

export type ExerciseKind =
  | 'mcq' // single correct option
  | 'multi' // several correct options
  | 'truefalse'
  | 'numeric'
  | 'formula' // complete a formula: blanks with choices
  | 'classify' // classify accounts into categories
  | 'journal' // register a journal entry (póliza)
  | 'fields' // complete several numeric fields (T-account, statement)

/** Pedagogical tag describing the activity (spec §6). */
export type ExerciseFlavor =
  | 'concept'
  | 'tAccount'
  | 'statement'
  | 'case'
  | 'interpret'

export type ValidationMethod =
  | 'optionId'
  | 'optionIdSet'
  | 'boolean'
  | 'numericTolerance'
  | 'blankOptionIds'
  | 'categoryMap'
  | 'journalLines'
  | 'fieldsTolerance'

export interface Option {
  /** Unique option id (unique across the whole bank). */
  id: string
  text: L
}

export type Unit = 'MXN' | '%' | 'years' | 'periods' | 'units' | 'times' | 'days' | 'none'

export interface Tolerance {
  /** Absolute tolerance in the unit of the answer. */
  abs?: number
  /** Relative tolerance (0.005 = 0.5 %). */
  rel?: number
}

interface ExerciseBase {
  id: string // e.g. "ACC001"
  level: LevelId
  /** Module = lesson id that owns the exercise. */
  module: string
  kind: ExerciseKind
  flavor?: ExerciseFlavor
  prompt: L
  /** Optional case / data shown above the prompt. */
  context?: L
  explanation: L
  difficulty: Difficulty
  points: number
  /** Competency tag used for per-competency tracking. */
  competency: string
}

export interface McqExercise extends ExerciseBase {
  kind: 'mcq'
  options: Option[]
  correctOptionId: string
}

export interface MultiExercise extends ExerciseBase {
  kind: 'multi'
  options: Option[]
  correctOptionIds: string[]
}

export interface TrueFalseExercise extends ExerciseBase {
  kind: 'truefalse'
  answer: boolean
}

export interface NumericExercise extends ExerciseBase {
  kind: 'numeric'
  answer: number
  unit: Unit
  /** Decimals used to display the official answer. */
  decimals: number
  tolerance: Tolerance
}

export interface FormulaBlank {
  id: string
  options: Option[]
  correctOptionId: string
}

export interface FormulaExercise extends ExerciseBase {
  kind: 'formula'
  /** Template with placeholders like {{b1}}. Language independent. */
  template: string
  blanks: FormulaBlank[]
}

export interface ClassifyExercise extends ExerciseBase {
  kind: 'classify'
  categories: { id: string; label: L }[]
  items: { id: string; label: L; correctCategoryId: string }[]
}

export interface JournalLine {
  accountCode: string
  side: 'D' | 'C' // D = cargo/debit, C = abono/credit
  amount: number
}

export interface JournalExercise extends ExerciseBase {
  kind: 'journal'
  /** Account codes offered in the selector (from the chart of accounts). */
  accountChoices: string[]
  expected: JournalLine[]
}

export interface FieldsExercise extends ExerciseBase {
  kind: 'fields'
  fields: { id: string; label: L; answer: number; unit: Unit; tolerance: Tolerance }[]
}

export type Exercise =
  | McqExercise
  | MultiExercise
  | TrueFalseExercise
  | NumericExercise
  | FormulaExercise
  | ClassifyExercise
  | JournalExercise
  | FieldsExercise

// ───────────────────────────── Answers ─────────────────────────────

export type Answer =
  | { kind: 'mcq'; optionId: string | null }
  | { kind: 'multi'; optionIds: string[] }
  | { kind: 'truefalse'; value: boolean | null }
  | { kind: 'numeric'; raw: string }
  | { kind: 'formula'; blanks: Record<string, string> }
  | { kind: 'classify'; map: Record<string, string> }
  | { kind: 'journal'; lines: { accountCode: string; side: 'D' | 'C'; amount: string }[] }
  | { kind: 'fields'; values: Record<string, string> }

export interface Evaluation {
  correct: boolean
  /** Score in [0,1]. Partial credit for multi-part exercises. */
  score: number
  /** Feedback messages (specific errors). */
  feedback: L[]
  /** Per-part correctness for highlighting (option ids / blank ids / field ids). */
  parts?: Record<string, boolean>
}

// ───────────────────────────── Accounting ─────────────────────────────

export type AccountType =
  | 'asset'
  | 'contraAsset'
  | 'liability'
  | 'equity'
  | 'revenue'
  | 'expense'

export interface Account {
  code: string
  name: L
  type: AccountType
  /** Normal balance. */
  nature: 'D' | 'C'
  group: L
}
