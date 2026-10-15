import type { PlanId } from '../lib/plans'

/**
 * Central configuration of the lives system. Every number the lives system uses
 * lives here; nothing else in the code may hard-code these values.
 */

const HOUR = 60 * 60 * 1000
const DAY = 24 * HOUR

export interface PlanLives {
  /** null = unlimited lives (no counter, no regeneration, no recovery). */
  max: number | null
  /** Milliseconds to regenerate one life; null = no regeneration. */
  regenMs: number | null
  /** Lives that can be recovered per day with reviews; null = no daily limit; 0 = recovery unavailable. */
  recoveryPerDay: number | null
  /** Full refills per day (sets lives to max). */
  refillsPerDay: number
  /** A started activity that ends at 0 lives still counts for the streak. */
  streakProtection: boolean
  /** Wrong answers in evaluations cost lives. */
  examsCostLives: boolean
  /** Practice exams with feedback (do not count for the certificate). */
  mockExams: boolean
  /** Minimum lives to start an area/level exam. */
  examMinLives: number
}

export const LIVES = {
  timezone: 'America/Monterrey',
  storageKey: 'fincore-lives',
  plans: {
    free: { max: 5, regenMs: 4 * HOUR, recoveryPerDay: 2, refillsPerDay: 0, streakProtection: false, examsCostLives: true, mockExams: false, examMinLives: 1 },
    plus: { max: 15, regenMs: 1 * HOUR, recoveryPerDay: null, refillsPerDay: 1, streakProtection: true, examsCostLives: true, mockExams: false, examMinLives: 5 },
    pro: { max: null, regenMs: null, recoveryPerDay: 0, refillsPerDay: 0, streakProtection: true, examsCostLives: false, mockExams: true, examMinLives: 0 },
  } satisfies Record<PlanId, PlanLives>,
  /** Lives lost per wrong answer (first wrong attempt only). */
  costPerError: 1,
  /** Minimum lives to start a topic quiz, a practice or a lab exercise. */
  activityMinLives: 1,
  /** Show the "1 life left" warning at this count. */
  lowLivesWarningAt: 1,
  recovery: { questions: 3, toPass: 2, summaryMaxLines: 5, livesGained: 1 },
  /** Paused quizzes, practices and lab exercises are kept this long, then restart. */
  pausedKeepMs: 7 * DAY,
  /** Paused evaluations can be resumed this long, then are graded with the answered questions. */
  pausedEvalKeepMs: 24 * HOUR,
  /** Official exam limit for plans whose exams do not cost lives (Pro). */
  officialExam: { maxAttempts: 3, windowMs: 7 * DAY },
  /** Lives after a plan change (null in a plan = unlimited). Plus → Free keeps current lives capped at Free's max. */
  planChange: {
    toPlus: 15,
    proToFree: 5,
  },
  analytics: { storageKey: 'fincore-events', keep: 500 },
} as const

export type LivesPlan = keyof typeof LIVES.plans
export const planLives = (p: PlanId): PlanLives => LIVES.plans[p] ?? LIVES.plans.free
