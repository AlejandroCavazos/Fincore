/**
 * Lives service. ALL lives logic lives here so it can move to the backend later
 * without touching the UI.
 *
 * TODO(server): validation is still local. When lives move to Supabase, the
 * server must be the authority for regeneration, spending and plan changes,
 * using its own clock (never the device's). Until then the device clock is
 * guarded: if it goes backwards no lives are regenerated and the clock never
 * moves back.
 */
import { LIVES, planLives } from '../../config/lives'
import type { PlanId } from '../plans'
import { track, type LivesEvent } from './analytics'

export type ActivityType = 'quiz' | 'practice' | 'lab' | 'eval'

export interface PausedActivity {
  id: string
  type: ActivityType
  topic?: string
  area?: string
  answered: number
  correct: number
  pausedAt: string
}

export interface LivesState {
  plan: PlanId
  lives: number
  /** When the regeneration clock started (ISO); null when lives are full. */
  regenStart: string | null
  daily: { date: string; recovered: number; refills: number }
  paused: PausedActivity[]
  lastFailedTopic: string | null
  lastStudiedTopic: string | null
  lastSeen: string
  streak: { days: number; lastDate: string | null }
  /** Day (America/Monterrey) when the user last started an activity that costs lives. */
  startedOn: string | null
  /** Paused activities that expired and still have to be restarted (or graded) by their screen. */
  expired: string[]
  /** Official exam attempts (ISO dates) per exam, for plans whose exams do not cost lives. */
  examAttempts: Record<string, string[]>
}

export interface Ctx {
  topic?: string
  area?: string
}

type Emit = { name: LivesEvent; props: Record<string, unknown> }
export interface Result {
  s: LivesState
  ok: boolean
  events: Emit[]
}

// ───────────────────────── Dates in America/Monterrey ─────────────────────────

const dayFmt = new Intl.DateTimeFormat('en-CA', { timeZone: LIVES.timezone, year: 'numeric', month: '2-digit', day: '2-digit' })
/** YYYY-MM-DD in America/Monterrey. */
export const dayOf = (now: Date) => dayFmt.format(now)
function prevDay(day: string) {
  const d = new Date(`${day}T12:00:00Z`)
  d.setUTCDate(d.getUTCDate() - 1)
  return d.toISOString().slice(0, 10)
}

// ───────────────────────── Basics ─────────────────────────

export const isUnlimited = (plan: PlanId) => planLives(plan).max === null
export const maxOf = (plan: PlanId) => planLives(plan).max ?? Infinity

export function initialState(plan: PlanId, now: Date): LivesState {
  return {
    plan,
    lives: planLives(plan).max ?? 0,
    regenStart: null,
    daily: { date: dayOf(now), recovered: 0, refills: 0 },
    paused: [],
    lastFailedTopic: null,
    lastStudiedTopic: null,
    lastSeen: now.toISOString(),
    streak: { days: 0, lastDate: null },
    startedOn: null,
    expired: [],
    examAttempts: {},
    ...(seed ? { streak: { ...seed } } : {}),
  }
}

let seed: LivesState['streak'] | null = null
let storageKey: string = LIVES.storageKey
/** Lives are stored per account on this device; the streak of a new store starts from the app's current streak. */
export function setLivesUser(userId: string | null, streakSeed?: LivesState['streak']) {
  storageKey = userId ? `${LIVES.storageKey}:${userId}` : LIVES.storageKey
  seed = streakSeed ?? null
}
export const currentStorageKey = () => storageKey

const ev = (s: LivesState, name: LivesEvent, ctx: Ctx = {}, extra: Record<string, unknown> = {}): Emit => ({ name, props: { plan: s.plan, area: ctx.area, topic: ctx.topic, ...extra } })

/**
 * Brings the state up to date: daily reset (Monterrey midnight), time-based
 * regeneration from stored timestamps, streak loss, and clock-tamper guard.
 */
export function sync(input: LivesState, now: Date): Result {
  let s = { ...input, daily: { ...input.daily }, streak: { ...input.streak } }
  const events: Emit[] = []
  const today = dayOf(now)
  if (s.daily.date !== today) s.daily = { date: today, recovered: 0, refills: 0 }

  if (s.streak.days > 0 && s.streak.lastDate && s.streak.lastDate !== today && s.streak.lastDate !== prevDay(today)) {
    events.push(ev(s, 'streak_lost', {}, { days: s.streak.days }))
    s.streak = { days: 0, lastDate: s.streak.lastDate }
  }

  const cfg = planLives(s.plan)
  const tampered = now.getTime() < Date.parse(s.lastSeen)
  if (cfg.max !== null && cfg.regenMs !== null) {
    if (s.lives >= cfg.max) s.regenStart = null
    else if (!s.regenStart) s.regenStart = now.toISOString()
    else if (!tampered) {
      const start = Date.parse(s.regenStart)
      const elapsed = now.getTime() - start
      if (elapsed > 0) {
        const gained = Math.min(Math.floor(elapsed / cfg.regenMs), cfg.max - s.lives)
        if (gained > 0) {
          s.lives += gained
          events.push(ev(s, 'life_regenerated', {}, { gained }))
          s.regenStart = s.lives >= cfg.max ? null : new Date(start + gained * cfg.regenMs).toISOString()
        }
      }
    }
  }
  if (!tampered) s.lastSeen = now.toISOString()

  // Expire paused activities.
  const keep: PausedActivity[] = []
  for (const p of s.paused) {
    const ttl = p.type === 'eval' ? LIVES.pausedEvalKeepMs : LIVES.pausedKeepMs
    if (now.getTime() - Date.parse(p.pausedAt) > ttl) {
      events.push(ev(s, 'activity_expired', p, { activity: p.id, type: p.type }))
      s.expired = [...s.expired.filter((x) => x !== p.id), p.id].slice(-50)
    } else keep.push(p)
  }
  s.paused = keep
  return { s, ok: true, events }
}

/** Milliseconds until the next life, or null when full / unlimited. */
export function nextLifeIn(s: LivesState, now: Date): number | null {
  const cfg = planLives(s.plan)
  if (cfg.max === null || cfg.regenMs === null || s.lives >= cfg.max || !s.regenStart) return null
  return Math.max(0, Date.parse(s.regenStart) + cfg.regenMs - now.getTime())
}

/** Can an activity that costs lives start (or continue)? */
export function canStart(s: LivesState, kind: ActivityType | 'areaExam'): { ok: boolean; need: number } {
  const cfg = planLives(s.plan)
  if (cfg.max === null) return { ok: true, need: 0 }
  if ((kind === 'eval' || kind === 'areaExam') && !cfg.examsCostLives) return { ok: true, need: 0 }
  const need = kind === 'areaExam' ? Math.max(cfg.examMinLives, LIVES.activityMinLives) : LIVES.activityMinLives
  return { ok: s.lives >= need, need }
}

export function markStarted(input: LivesState, now: Date, ctx: Ctx = {}): LivesState {
  return { ...input, startedOn: dayOf(now), lastStudiedTopic: ctx.topic ?? input.lastStudiedTopic }
}

/** Counts today for the streak (completed quiz, practice, lab exercise or recovery review). */
export function markStreakDay(input: LivesState, now: Date): Result {
  const s = { ...input, streak: { ...input.streak } }
  const today = dayOf(now)
  if (s.streak.lastDate === today) return { s, ok: true, events: [] }
  s.streak = { days: s.streak.lastDate === prevDay(today) ? s.streak.days + 1 : 1, lastDate: today }
  return { s, ok: true, events: [] }
}

/**
 * Spends one life for a wrong answer, at the moment it is confirmed. Never goes
 * below zero. Pro and evaluations in plans where exams are free cost nothing.
 */
export function spend(input: LivesState, kind: ActivityType, ctx: Ctx, now: Date): Result {
  const synced = sync(input, now)
  let s = synced.s
  const events = synced.events
  const cfg = planLives(s.plan)
  s.lastFailedTopic = ctx.topic ?? s.lastFailedTopic
  if (cfg.max === null || (kind === 'eval' && !cfg.examsCostLives)) return { s, ok: true, events }
  if (s.lives <= 0) return { s, ok: false, events }
  s.lives = Math.max(0, s.lives - LIVES.costPerError)
  s.startedOn = dayOf(now)
  if (!s.regenStart && cfg.regenMs !== null && s.lives < cfg.max) s.regenStart = now.toISOString()
  events.push(ev(s, 'life_lost', ctx, { activity: kind }))
  if (s.lives === 0) {
    events.push(ev(s, 'lives_zero', ctx, { activity: kind }))
    if (cfg.streakProtection && s.startedOn === dayOf(now) && s.streak.lastDate !== dayOf(now)) {
      s = markStreakDay(s, now).s
      events.push(ev(s, 'streak_protected', ctx))
    }
  }
  return { s, ok: true, events }
}

export function recoveryLeft(s: LivesState): number | null {
  const lim = planLives(s.plan).recoveryPerDay
  return lim === null ? null : Math.max(0, lim - s.daily.recovered)
}

/** Recovery review is offered when lives are below max and the plan allows it. */
export function canRecover(s: LivesState): boolean {
  const cfg = planLives(s.plan)
  if (cfg.max === null || cfg.recoveryPerDay === 0) return false
  if (s.lives >= cfg.max) return false
  const left = recoveryLeft(s)
  return left === null || left > 0
}

/** Result of a recovery review: ≥ toPass correct gains one life (within limits). Never costs anything. */
export function finishRecovery(input: LivesState, correct: number, ctx: Ctx, now: Date): Result & { gained: boolean } {
  let { s, events } = sync(input, now)
  s = markStreakDay(s, now).s
  const passed = correct >= LIVES.recovery.toPass
  if (!passed || !canRecover(s)) {
    events.push(ev(s, 'recovery_failed', ctx, { correct }))
    return { s, ok: true, events, gained: false }
  }
  const cfg = planLives(s.plan)
  s = { ...s, lives: Math.min(cfg.max!, s.lives + LIVES.recovery.livesGained), daily: { ...s.daily, recovered: s.daily.recovered + 1 } }
  if (s.lives >= cfg.max!) s.regenStart = null
  events.push(ev(s, 'life_recovered', ctx, { correct }))
  return { s, ok: true, events, gained: true }
}

export function canRefill(s: LivesState): boolean {
  const cfg = planLives(s.plan)
  return cfg.max !== null && cfg.refillsPerDay > 0 && s.daily.refills < cfg.refillsPerDay && s.lives < cfg.max
}

/** Plus daily refill: lives to max, clock stops. */
export function refill(input: LivesState, now: Date): Result {
  const { s, events } = sync(input, now)
  if (!canRefill(s)) return { s, ok: false, events }
  const cfg = planLives(s.plan)
  const n = { ...s, lives: cfg.max!, regenStart: null, daily: { ...s.daily, refills: s.daily.refills + 1 } }
  events.push(ev(n, 'refill_used'))
  return { s: n, ok: true, events }
}

/** Applies the plan-change rules. Daily counters carry over so they cannot be reset by switching plans. */
export function changePlan(input: LivesState, to: PlanId, now: Date): Result {
  const { s, events } = sync(input, now)
  const from = s.plan
  if (from === to) return { s, ok: true, events }
  const n: LivesState = { ...s, plan: to }
  const cfg = planLives(to)
  if (cfg.max === null) {
    n.regenStart = null
    for (const p of n.paused) events.push(ev(n, 'activity_resumed', p, { activity: p.id, reason: 'plan' }))
    n.paused = []
  } else if (to === 'plus') {
    n.lives = Math.min(cfg.max, LIVES.planChange.toPlus)
    n.regenStart = null
  } else if (from === 'pro') {
    n.lives = Math.min(cfg.max, LIVES.planChange.proToFree)
    n.regenStart = null
  } else {
    // Plus → Free: keep current lives, capped; clock restarts with the new interval.
    n.lives = Math.min(cfg.max, s.lives)
    n.regenStart = n.lives < cfg.max ? now.toISOString() : null
  }
  return { s: n, ok: true, events }
}

export function pause(input: LivesState, a: Omit<PausedActivity, 'pausedAt'>, now: Date): Result {
  if (input.paused.some((p) => p.id === a.id)) return { s: input, ok: true, events: [] }
  const s = { ...input, paused: [...input.paused, { ...a, pausedAt: now.toISOString() }] }
  return { s, ok: true, events: [ev(s, 'activity_paused', a, { activity: a.id, type: a.type })] }
}

export function resume(input: LivesState, id: string): Result {
  const p = input.paused.find((x) => x.id === id)
  if (!p) return { s: input, ok: true, events: [] }
  const s = { ...input, paused: input.paused.filter((x) => x.id !== id) }
  return { s, ok: true, events: [ev(s, 'activity_resumed', p, { activity: id })] }
}

export function clearExpired(input: LivesState, id: string): Result {
  return { s: { ...input, expired: input.expired.filter((x) => x !== id) }, ok: true, events: [] }
}

const recentAttempts = (s: LivesState, examId: string, now: Date) =>
  (s.examAttempts[examId] ?? []).filter((d) => now.getTime() - Date.parse(d) < LIVES.officialExam.windowMs)

/** Official exam attempts left in the rolling window (null = no limit because exams cost lives). */
export function officialAttemptsLeft(s: LivesState, examId: string, now: Date): number | null {
  if (planLives(s.plan).examsCostLives) return null
  return Math.max(0, LIVES.officialExam.maxAttempts - recentAttempts(s, examId, now).length)
}

/** When the oldest attempt in the window frees up. */
export function officialAttemptFreeAt(s: LivesState, examId: string, now: Date): Date | null {
  const list = recentAttempts(s, examId, now).sort()
  return list.length ? new Date(Date.parse(list[0]) + LIVES.officialExam.windowMs) : null
}

export function recordOfficialAttempt(input: LivesState, examId: string, now: Date): Result {
  if (planLives(input.plan).examsCostLives) return { s: input, ok: true, events: [] }
  if ((officialAttemptsLeft(input, examId, now) ?? 1) <= 0) return { s: input, ok: false, events: [] }
  const list = [...recentAttempts(input, examId, now), now.toISOString()]
  return { s: { ...input, examAttempts: { ...input.examAttempts, [examId]: list } }, ok: true, events: [] }
}

// ───────────────────────── Storage (shared by all tabs) ─────────────────────────

function read(plan: PlanId, now: Date): LivesState {
  try {
    const raw = localStorage.getItem(storageKey)
    if (raw) {
      const s = JSON.parse(raw) as LivesState
      if (s && typeof s.lives === 'number' && s.daily && Array.isArray(s.paused)) return { ...initialState(s.plan, now), ...s }
    }
  } catch {
    /* fall through */
  }
  return initialState(plan, now)
}

function write(s: LivesState) {
  try {
    const json = JSON.stringify(s)
    if (localStorage.getItem(storageKey) !== json) localStorage.setItem(storageKey, json)
  } catch {
    /* storage unavailable: state lives in memory for this tab */
  }
}

/**
 * Read-modify-write against localStorage in one synchronous step, so two open
 * tabs always start from the latest saved state (no double spending or gaining).
 * The result is saved BEFORE the caller shows anything to the user.
 */
export function mutate<T extends Result>(plan: PlanId, fn: (s: LivesState) => T, now = new Date()): T {
  const current = read(plan, now)
  const out = fn(current)
  write(out.s)
  for (const e of out.events) track(e.name, e.props as { plan: string }, now)
  return out
}

export const peek = (plan: PlanId, now = new Date()) => read(plan, now)
