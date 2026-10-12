import type { Evaluation, L, Lang } from '../types'
import type { Attempt } from './engine'
import type { PostedEntry } from './accounting'

export const STATE_VERSION = 1

export type ThemePref = 'light' | 'dark' | 'system'

export interface XpEvent {
  xp: number
  at: string
  reason: string
}

export interface LessonProgress {
  status: 'in_progress' | 'completed'
  bestScore: number // 0..1
  lastScore: number
  attempts: number
  completedAt?: string
  theoryRead?: boolean
}

export interface AnswerLog {
  exerciseId: string
  attemptId: string
  correct: boolean
  score: number
  at: string
  mode: 'lesson' | 'review' | 'exam'
}

export interface SrsCard {
  ease: number
  interval: number // days
  reps: number
  lapses: number
  due: string // YYYY-MM-DD
}

export interface ExamResult {
  score: number
  at: string
  passed: boolean
}

export interface AppState {
  version: number
  settings: {
    lang: Lang
    theme: ThemePref
    onboarded: boolean
    dailyGoalXp: number
    /** Free mode unlocks every lesson. */
    freeMode: boolean
  }
  /** Idempotent XP ledger: one entry per unique key (never awarded twice). */
  xpLedger: Record<string, XpEvent>
  lessons: Record<string, LessonProgress>
  answers: AnswerLog[]
  srs: Record<string, SrsCard>
  attempts: Record<string, Attempt>
  /** Days with learning activity, YYYY-MM-DD (local time). */
  activity: string[]
  achievements: Record<string, string>
  lab: { journal: PostedEntry[]; solved: Record<string, string> }
  fraud: { bestScore: number; cases: Record<string, { score: number; at: string }> }
  exams: Record<string, ExamResult[]>
  tutor: { messages: number }
  /** Short subtopics read inside a topic, "lessonId:index" → ISO date. */
  subtopics: Record<string, string>
}

export function defaultState(): AppState {
  return {
    version: STATE_VERSION,
    settings: { lang: 'es', theme: 'system', onboarded: false, dailyGoalXp: 50, freeMode: false },
    xpLedger: {},
    lessons: {},
    answers: [],
    srs: {},
    attempts: {},
    activity: [],
    achievements: {},
    lab: { journal: [], solved: {} },
    fraud: { bestScore: 0, cases: {} },
    exams: {},
    tutor: { messages: 0 },
    subtopics: {},
  }
}

// ───────────────────────── Dates ─────────────────────────

export function localDay(d: Date = new Date()): string {
  const y = d.getFullYear()
  const m = String(d.getMonth() + 1).padStart(2, '0')
  const dd = String(d.getDate()).padStart(2, '0')
  return `${y}-${m}-${dd}`
}

export function addDays(day: string, n: number): string {
  const [y, m, d] = day.split('-').map(Number)
  const dt = new Date(y, m - 1, d + n)
  return localDay(dt)
}

// ───────────────────────── XP & levels ─────────────────────────

export function totalXp(s: AppState): number {
  return Object.values(s.xpLedger).reduce((a, e) => a + e.xp, 0)
}

export function xpToday(s: AppState, today = localDay()): number {
  return Object.values(s.xpLedger)
    .filter((e) => localDay(new Date(e.at)) === today)
    .reduce((a, e) => a + e.xp, 0)
}

/** XP needed to reach level n (n ≥ 1): 50·n·(n−1) → 0, 100, 300, 600, 1000… */
export function xpForLevel(n: number): number {
  return 50 * n * (n - 1)
}

export function levelInfo(xp: number) {
  let lvl = 1
  while (xp >= xpForLevel(lvl + 1)) lvl++
  const base = xpForLevel(lvl)
  const next = xpForLevel(lvl + 1)
  return { level: lvl, current: xp - base, needed: next - base, progress: (xp - base) / (next - base) }
}

/**
 * Awards XP exactly once per key. Returns the same state object when the key was
 * already awarded (idempotent: reloads and resubmissions never duplicate XP).
 */
export function awardXp(s: AppState, key: string, xp: number, reason: string, now = new Date()): AppState {
  if (s.xpLedger[key] || xp <= 0) return s
  return markActivity({ ...s, xpLedger: { ...s.xpLedger, [key]: { xp, at: now.toISOString(), reason } } }, now)
}

export function markActivity(s: AppState, now = new Date()): AppState {
  const d = localDay(now)
  if (s.activity.includes(d)) return s
  return { ...s, activity: [...s.activity, d].sort() }
}

export function streak(s: AppState, today = localDay()): { current: number; best: number } {
  const set = new Set(s.activity)
  let current = 0
  let cursor = set.has(today) ? today : addDays(today, -1)
  while (set.has(cursor)) {
    current++
    cursor = addDays(cursor, -1)
  }
  let best = 0
  let run = 0
  let prev: string | null = null
  for (const d of [...set].sort()) {
    run = prev && addDays(prev, 1) === d ? run + 1 : 1
    best = Math.max(best, run)
    prev = d
  }
  return { current, best }
}

// ───────────────────────── Spaced repetition (SM-2 lite) ─────────────────────────

export function scheduleCard(card: SrsCard | undefined, correct: boolean, today = localDay()): SrsCard {
  const c: SrsCard = card ? { ...card } : { ease: 2.5, interval: 0, reps: 0, lapses: 0, due: today }
  if (correct) {
    c.reps += 1
    c.interval = c.reps === 1 ? 1 : c.reps === 2 ? 3 : Math.round(c.interval * c.ease)
    c.ease = Math.min(3, c.ease + 0.1)
  } else {
    c.reps = 0
    c.lapses += 1
    c.interval = 0
    c.ease = Math.max(1.3, c.ease - 0.2)
  }
  c.due = addDays(today, c.interval)
  return c
}

export function dueCards(s: AppState, today = localDay()): string[] {
  return Object.entries(s.srs)
    .filter(([, c]) => c.due <= today)
    .sort((a, b) => a[1].due.localeCompare(b[1].due))
    .map(([id]) => id)
}

// ───────────────────────── Recording answers ─────────────────────────

export interface RecordInput {
  exerciseId: string
  points: number
  attempt: Attempt
  answer: import('../types').Answer
  evaluation: Evaluation
  mode: 'lesson' | 'review' | 'exam'
  now?: Date
}

/**
 * Records the first submission of an exercise in an attempt. Any later submission
 * of the same exercise in the same attempt is ignored (answer is locked).
 * XP: full points the first time an exercise is ever answered correctly (lesson/exam),
 * +5 for a correct review once per exercise per day.
 */
export function recordAnswer(s: AppState, i: RecordInput): AppState {
  const now = i.now ?? new Date()
  const att = s.attempts[i.attempt.key]
  const current = att && att.id === i.attempt.id ? att : i.attempt
  if (current.responses[i.exerciseId]) return s // locked: no double submission
  const nextAttempt: Attempt = {
    ...current,
    responses: { ...current.responses, [i.exerciseId]: { answer: i.answer, evaluation: i.evaluation, at: now.toISOString() } },
  }
  let next: AppState = {
    ...s,
    attempts: { ...s.attempts, [i.attempt.key]: nextAttempt },
    answers: [
      ...s.answers,
      { exerciseId: i.exerciseId, attemptId: i.attempt.id, correct: i.evaluation.correct, score: i.evaluation.score, at: now.toISOString(), mode: i.mode },
    ].slice(-2000),
    srs: { ...s.srs, [i.exerciseId]: scheduleCard(s.srs[i.exerciseId], i.evaluation.correct, localDay(now)) },
  }
  next = markActivity(next, now)
  if (i.evaluation.correct) {
    if (i.mode === 'review') next = awardXp(next, `review:${i.exerciseId}:${localDay(now)}`, 5, 'review', now)
    else next = awardXp(next, `ex:${i.exerciseId}`, i.points, 'exercise', now)
  }
  return next
}

export const LESSON_PASS = 0.6

export function attemptScore(attempt: Attempt): number {
  const ids = attempt.exerciseIds
  if (ids.length === 0) return 0
  return ids.reduce((a, id) => a + (attempt.responses[id]?.evaluation.score ?? 0), 0) / ids.length
}

/** Finishes a lesson attempt: updates best score, completion and the one-time lesson bonus. */
export function finishLesson(s: AppState, lessonId: string, now = new Date()): AppState {
  const att = s.attempts[lessonId]
  if (!att || att.finishedAt) return s
  const score = attemptScore(att)
  const prev = s.lessons[lessonId]
  const passed = score >= LESSON_PASS
  const lp: LessonProgress = {
    status: passed || prev?.status === 'completed' ? 'completed' : 'in_progress',
    bestScore: Math.max(prev?.bestScore ?? 0, score),
    lastScore: score,
    attempts: (prev?.attempts ?? 0) + 1,
    completedAt: prev?.completedAt ?? (passed ? now.toISOString() : undefined),
    theoryRead: true,
  }
  let next: AppState = {
    ...s,
    lessons: { ...s.lessons, [lessonId]: lp },
    attempts: { ...s.attempts, [lessonId]: { ...att, finishedAt: now.toISOString() } },
  }
  if (passed) next = awardXp(next, `lesson:${lessonId}`, 50, 'lesson-complete', now)
  if (score === 1) next = awardXp(next, `perfect:${lessonId}`, 25, 'lesson-perfect', now)
  return next
}

// ───────────────────────── Achievements ─────────────────────────

export interface AchievementDef {
  id: string
  title: L
  description: L
  icon: string
  test: (s: AppState) => boolean
}

const completedCount = (s: AppState) => Object.values(s.lessons).filter((l) => l.status === 'completed').length

export const ACHIEVEMENTS: AchievementDef[] = [
  { id: 'first-lesson', icon: 'BookOpen', title: { es: 'Primer paso', en: 'First step' }, description: { es: 'Completa tu primera lección.', en: 'Complete your first lesson.' }, test: (s) => completedCount(s) >= 1 },
  { id: 'five-lessons', icon: 'Library', title: { es: 'Constancia', en: 'Consistency' }, description: { es: 'Completa 5 lecciones.', en: 'Complete 5 lessons.' }, test: (s) => completedCount(s) >= 5 },
  { id: 'perfect', icon: 'Star', title: { es: 'Sin errores', en: 'Flawless' }, description: { es: 'Termina una lección con 100 %.', en: 'Finish a lesson with 100 %.' }, test: (s) => Object.keys(s.xpLedger).some((k) => k.startsWith('perfect:')) },
  { id: 'xp-500', icon: 'Zap', title: { es: '500 XP', en: '500 XP' }, description: { es: 'Acumula 500 puntos de experiencia.', en: 'Earn 500 experience points.' }, test: (s) => totalXp(s) >= 500 },
  { id: 'streak-3', icon: 'Flame', title: { es: 'Racha de 3 días', en: '3-day streak' }, description: { es: 'Estudia 3 días seguidos.', en: 'Study 3 days in a row.' }, test: (s) => streak(s).best >= 3 },
  { id: 'streak-7', icon: 'Flame', title: { es: 'Racha de 7 días', en: '7-day streak' }, description: { es: 'Estudia 7 días seguidos.', en: 'Study 7 days in a row.' }, test: (s) => streak(s).best >= 7 },
  { id: 'bookkeeper', icon: 'BookCheck', title: { es: 'Tenedor de libros', en: 'Bookkeeper' }, description: { es: 'Registra correctamente 5 operaciones en el laboratorio.', en: 'Correctly record 5 lab transactions.' }, test: (s) => Object.keys(s.lab.solved).length >= 5 },
  { id: 'examiner', icon: 'GraduationCap', title: { es: 'Examen aprobado', en: 'Exam passed' }, description: { es: 'Aprueba una evaluación de nivel.', en: 'Pass a level exam.' }, test: (s) => Object.values(s.exams).some((r) => r.some((x) => x.passed)) },
  { id: 'reviewer', icon: 'RotateCcw', title: { es: 'Memoria de largo plazo', en: 'Long-term memory' }, description: { es: 'Responde 10 repasos correctamente.', en: 'Answer 10 reviews correctly.' }, test: (s) => s.answers.filter((a) => a.mode === 'review' && a.correct).length >= 10 },
]

/** Unlocks any newly satisfied achievement. Returns ids unlocked now. */
export function checkAchievements(s: AppState, now = new Date()): { state: AppState; unlocked: string[] } {
  const unlocked: string[] = []
  const ach = { ...s.achievements }
  for (const a of ACHIEVEMENTS) {
    if (!ach[a.id] && a.test(s)) {
      ach[a.id] = now.toISOString()
      unlocked.push(a.id)
    }
  }
  return unlocked.length ? { state: { ...s, achievements: ach }, unlocked } : { state: s, unlocked }
}

export const EXAM_PASS = 0.7

/** Finishes a review or exam attempt. Exams store the result and award a one-time pass bonus. */
export function finishAttempt(s: AppState, key: string, mode: 'review' | 'exam', now = new Date()): AppState {
  const att = s.attempts[key]
  if (!att || att.finishedAt) return s
  const score = attemptScore(att)
  let next: AppState = { ...s, attempts: { ...s.attempts, [key]: { ...att, finishedAt: now.toISOString() } } }
  if (mode === 'exam') {
    const passed = score >= EXAM_PASS
    next = { ...next, exams: { ...next.exams, [key]: [...(next.exams[key] ?? []), { score, at: now.toISOString(), passed }].slice(-20) } }
    if (passed) next = awardXp(next, `exam-pass:${key}`, 100, 'exam-pass', now)
  }
  return next
}

/** Starts (or keeps) an attempt. A new attempt is only created when none is active. */
export function ensureAttempt(s: AppState, key: string, create: () => Attempt, forceNew = false): AppState {
  const cur = s.attempts[key]
  if (cur && !cur.finishedAt && !forceNew) return s
  return { ...s, attempts: { ...s.attempts, [key]: create() } }
}

/** Accuracy per competency tag, from the answer log. */
export function competencyStats(s: AppState, competencyOf: (exerciseId: string) => string | undefined) {
  const m = new Map<string, { correct: number; total: number }>()
  for (const a of s.answers) {
    const c = competencyOf(a.exerciseId)
    if (!c) continue
    const v = m.get(c) ?? { correct: 0, total: 0 }
    v.total++
    if (a.correct) v.correct++
    m.set(c, v)
  }
  return [...m.entries()].map(([competency, v]) => ({ competency, ...v, accuracy: v.correct / v.total })).sort((a, b) => a.accuracy - b.accuracy)
}

/** Marks one short subtopic of a topic as read (idempotent) and awards a small XP bonus once. */
export function markSubtopic(s: AppState, lessonId: string, index: number, now = new Date()): AppState {
  const key = `${lessonId}:${index}`
  if (s.subtopics[key]) return s
  const next = { ...s, subtopics: { ...s.subtopics, [key]: now.toISOString() } }
  return awardXp(next, `sub:${key}`, 5, 'subtopic', now)
}
