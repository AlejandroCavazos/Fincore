import type { Attempt } from './engine'
import type { AppState, LessonProgress, SrsCard } from './progress'
import type { LivesState } from './lives/service'

/**
 * Combines progress from two devices without losing anything: completed
 * lessons, best scores, XP, answers, lab work and streak days from both.
 */

const minIso = (a?: string, b?: string) => (!a ? b : !b ? a : a < b ? a : b)

function byKey<T>(a: Record<string, T>, b: Record<string, T>, pick: (x: T, y: T) => T): Record<string, T> {
  const out: Record<string, T> = { ...a }
  for (const [k, v] of Object.entries(b)) out[k] = k in out ? pick(out[k], v) : v
  return out
}
function uniqBy<T>(list: T[], key: (x: T) => string): T[] {
  const seen = new Map<string, T>()
  for (const x of list) if (!seen.has(key(x))) seen.set(key(x), x)
  return [...seen.values()]
}

const lesson = (x: LessonProgress, y: LessonProgress): LessonProgress => {
  const recent = y.attempts > x.attempts ? y : x
  return {
    ...recent,
    status: x.status === 'completed' || y.status === 'completed' ? 'completed' : 'in_progress',
    bestScore: Math.max(x.bestScore, y.bestScore),
    attempts: Math.max(x.attempts, y.attempts),
    completedAt: minIso(x.completedAt, y.completedAt),
    theoryRead: x.theoryRead || y.theoryRead || undefined,
  }
}
const srs = (x: SrsCard, y: SrsCard) => (y.reps + y.lapses > x.reps + x.lapses || (y.reps + y.lapses === x.reps + x.lapses && y.due > x.due) ? y : x)
const attempt = (x: Attempt, y: Attempt) => {
  if (x.id !== y.id) return y.startedAt > x.startedAt ? y : x
  const n = (a: Attempt) => Object.keys(a.responses).length + (a.finishedAt ? 1000 : 0)
  return n(y) > n(x) ? y : x
}

export function mergeStates(local: AppState, remote: AppState): AppState {
  return {
    ...local,
    version: Math.max(local.version, remote.version),
    xpLedger: byKey(local.xpLedger, remote.xpLedger, (x, y) => (y.at < x.at ? y : x)),
    lessons: byKey(local.lessons, remote.lessons, lesson),
    answers: uniqBy([...local.answers, ...remote.answers], (a) => `${a.attemptId}|${a.exerciseId}|${a.at}`).sort((a, b) => a.at.localeCompare(b.at)),
    srs: byKey(local.srs, remote.srs, srs),
    attempts: byKey(local.attempts, remote.attempts, attempt),
    activity: [...new Set([...local.activity, ...remote.activity])].sort(),
    achievements: byKey(local.achievements, remote.achievements, (x, y) => minIso(x, y)!),
    lab: {
      journal: uniqBy([...local.lab.journal, ...remote.lab.journal], (e) => e.id),
      solved: byKey(local.lab.solved, remote.lab.solved, (x, y) => minIso(x, y)!),
    },
    labx: {
      practice: byKey(local.labx.practice, remote.labx.practice, (x, y) => ({ done: Math.max(x.done, y.done), correct: Math.max(x.correct, y.correct) })),
      exams: byKey(local.labx.exams, remote.labx.exams, (x, y) => {
        const passedAt = minIso(x.passedAt, y.passedAt)
        return { best: Math.max(x.best, y.best), tries: Math.max(x.tries, y.tries), ...(passedAt ? { passedAt } : {}) }
      }),
      projects: Object.values(byKey(Object.fromEntries(local.labx.projects.map((p) => [p.id, p])), Object.fromEntries(remote.labx.projects.map((p) => [p.id, p])), (x, y) => (y.entries.length > x.entries.length ? y : x))),
      ...(local.labx.despacho || remote.labx.despacho
        ? {
            despacho: {
              ...((local.labx.despacho?.name ?? remote.labx.despacho?.name) ? { name: (local.labx.despacho?.name ?? remote.labx.despacho?.name) as string } : {}),
              cases: byKey(local.labx.despacho?.cases ?? {}, remote.labx.despacho?.cases ?? {}, (x, y) => (y.stars > x.stars ? y : x)),
            },
          }
        : {}),
    },
    fraud: {
      bestScore: Math.max(local.fraud.bestScore, remote.fraud.bestScore),
      cases: byKey(local.fraud.cases, remote.fraud.cases, (x, y) => (y.score > x.score ? y : x)),
    },
    exams: byKey(local.exams, remote.exams, (x, y) => uniqBy([...x, ...y], (r) => r.at).sort((a, b) => a.at.localeCompare(b.at))),
    tutor: { messages: Math.max(local.tutor.messages, remote.tutor.messages) },
    subtopics: byKey(local.subtopics, remote.subtopics, (x, y) => minIso(x, y)!),
  }
}

/**
 * Lives from two devices: the most recently used one wins, but daily counters
 * keep the highest use so switching browsers never gives extra reviews or refills.
 */
export function mergeLives(local: LivesState | null, remote: LivesState | null): LivesState | null {
  if (!local || !remote) return local ?? remote
  const [newer, older] = remote.lastSeen > local.lastSeen ? [remote, local] : [local, remote]
  const daily =
    newer.daily.date === older.daily.date
      ? { date: newer.daily.date, recovered: Math.max(newer.daily.recovered, older.daily.recovered), refills: Math.max(newer.daily.refills, older.daily.refills) }
      : newer.daily.date > older.daily.date
        ? newer.daily
        : older.daily
  const examAttempts = byKey(newer.examAttempts ?? {}, older.examAttempts ?? {}, (x, y) => [...new Set([...x, ...y])].sort())
  const o = older.streak
  const n = newer.streak
  const streak = (o.lastDate ?? '') > (n.lastDate ?? '') || (o.lastDate === n.lastDate && o.days > n.days) ? o : n
  return { ...newer, daily, examAttempts, streak, paused: uniqBy([...newer.paused, ...older.paused], (p) => p.id) }
}
