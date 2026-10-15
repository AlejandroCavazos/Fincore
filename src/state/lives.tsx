import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState, type ReactNode } from 'react'
import { LIVES, planLives } from '../config/lives'
import { LOW_LIVES_TEXT } from '../components/lives/text'
import type { PlanId } from '../lib/plans'
import { streak } from '../lib/progress'
import { track, type LivesEvent } from '../lib/lives/analytics'
import * as L from '../lib/lives/service'
import type { ActivityType, Ctx, LivesState, PausedActivity, Result } from '../lib/lives/service'
import { areaOfLesson } from '../content/areas'
import { useAuth } from './auth'
import { useRoute } from './router'
import { useStore } from './store'

export interface LivesApi {
  s: LivesState
  plan: PlanId
  unlimited: boolean
  max: number
  /** ms to next life, or null when full/unlimited. */
  nextIn: number | null
  canStart: (kind: ActivityType | 'areaExam') => { ok: boolean; need: number }
  /** Charges one life for a wrong answer. Saved before the caller reveals the result. */
  spend: (kind: ActivityType, ctx?: Ctx) => boolean
  started: (ctx?: Ctx) => void
  /** A quiz, practice, lab exercise or recovery review was completed today. */
  completed: () => void
  refill: () => boolean
  finishRecovery: (correct: number, ctx?: Ctx) => boolean
  pause: (a: Omit<PausedActivity, 'pausedAt'>) => void
  resume: (id: string) => void
  isPaused: (id: string) => boolean
  takeExpired: (id: string) => boolean
  officialLeft: (examId: string) => number | null
  officialFreeAt: (examId: string) => Date | null
  recordOfficial: (examId: string) => boolean
  track: (name: LivesEvent, extra?: Record<string, unknown>) => void
}

const Ctx_ = createContext<LivesApi | null>(null)

export function LivesProvider({ children }: { children: ReactNode }) {
  const auth = useAuth()
  const { state, toast } = useStore()
  const route = useRoute()
  const userId = auth.user?.id ?? null

  // Pick this account's store before the first read.
  useMemo(() => {
    const st = streak(state)
    const last = [...state.activity].sort().pop() ?? null
    L.setLivesUser(userId, st.current > 0 && last ? { days: st.current, lastDate: last } : undefined)
  }, [userId]) // eslint-disable-line react-hooks/exhaustive-deps

  const [s, setS] = useState<LivesState>(() => L.mutate('free', (x) => L.sync(x, new Date())).s)
  const [now, setNow] = useState(() => Date.now())

  const run = useCallback(<T extends Result>(fn: (x: LivesState) => T): T => {
    const out = L.mutate(s.plan, fn)
    setS(out.s)
    return out
  }, [s.plan])
  const sync = useCallback(() => run((x) => L.sync(x, new Date())), [run])

  // New account, screen change: re-read and bring up to date.
  useEffect(() => {
    sync()
  }, [userId, route.path]) // eslint-disable-line react-hooks/exhaustive-deps

  // Plan changes (only once the real plan is known).
  useEffect(() => {
    if (!auth.planReady || s.plan === auth.plan) return
    run((x) => L.changePlan(x, auth.plan, new Date()))
  }, [auth.planReady, auth.plan, s.plan, run])

  // Warn once when a wrong answer leaves exactly the warning count.
  const shown = useRef(s.lives)
  useEffect(() => {
    if (s.lives < shown.current && s.lives === LIVES.lowLivesWarningAt && planLives(s.plan).max !== null) toast({ es: LOW_LIVES_TEXT, en: LOW_LIVES_TEXT }, 'info')
    shown.current = s.lives
  }, [s.lives, s.plan, toast])

  // Other tabs.
  useEffect(() => {
    const on = (e: StorageEvent) => {
      if (e.key === L.currentStorageKey()) setS(L.peek(s.plan))
    }
    const local = () => setS(L.peek(s.plan))
    window.addEventListener('storage', on)
    window.addEventListener(L.LIVES_CHANGED, local)
    return () => {
      window.removeEventListener('storage', on)
      window.removeEventListener(L.LIVES_CHANGED, local)
    }
  }, [s.plan])

  // 1 s tick for countdowns; sync when a life is due or the day changes.
  useEffect(() => {
    const id = window.setInterval(() => {
      const d = new Date()
      setNow(d.getTime())
      const due = L.nextLifeIn(s, d)
      if ((due !== null && due <= 0) || s.daily.date !== L.dayOf(d)) sync()
    }, 1000)
    return () => window.clearInterval(id)
  }, [s, sync])

  const api = useMemo<LivesApi>(() => {
    const d = new Date(now)
    const cfg = planLives(s.plan)
    const ctxProps = (c?: Ctx) => ({ plan: s.plan, area: c?.area, topic: c?.topic })
    return {
      s,
      plan: s.plan,
      unlimited: cfg.max === null,
      max: cfg.max ?? Infinity,
      nextIn: L.nextLifeIn(s, d),
      canStart: (kind) => L.canStart(L.peek(s.plan), kind),
      spend: (kind, c = {}) => run((x) => L.spend(x, kind, c, new Date())).ok,
      started: (c = {}) => run((x) => ({ s: L.markStarted(x, new Date(), c), ok: true, events: [] })),
      completed: () => run((x) => L.markStreakDay(x, new Date())),
      refill: () => run((x) => L.refill(x, new Date())).ok,
      finishRecovery: (correct, c = {}) => run((x) => L.finishRecovery(x, correct, c, new Date())).gained,
      pause: (a) => run((x) => L.pause(x, a, new Date())),
      resume: (id) => run((x) => L.resume(x, id)),
      isPaused: (id) => s.paused.some((p) => p.id === id),
      takeExpired: (id) => {
        if (!L.peek(s.plan).expired.includes(id)) return false
        run((x) => L.clearExpired(x, id))
        return true
      },
      officialLeft: (id) => L.officialAttemptsLeft(s, id, d),
      officialFreeAt: (id) => L.officialAttemptFreeAt(s, id, d),
      recordOfficial: (id) => run((x) => L.recordOfficialAttempt(x, id, new Date())).ok,
      track: (name, extra = {}) => void track(name, { ...ctxProps(extra as Ctx), ...extra }),
    }
  }, [s, now, run])

  return <Ctx_.Provider value={api}>{children}</Ctx_.Provider>
}

const noop = () => {}
/** Outside the provider (isolated component tests) everything behaves like an unlimited plan. */
const FALLBACK: LivesApi = {
  s: L.initialState('pro', new Date(0)),
  plan: 'pro',
  unlimited: true,
  max: Infinity,
  nextIn: null,
  canStart: () => ({ ok: true, need: 0 }),
  spend: () => true,
  started: noop,
  completed: noop,
  refill: () => false,
  finishRecovery: () => false,
  pause: noop,
  resume: noop,
  isPaused: () => false,
  takeExpired: () => false,
  officialLeft: () => null,
  officialFreeAt: () => null,
  recordOfficial: () => true,
  track: noop,
}

export const useLives = (): LivesApi => useContext(Ctx_) ?? FALLBACK

/** Topic and area of a lesson, for analytics and the recovery review. */
export function livesCtx(lessonId?: string | null): Ctx {
  return lessonId ? { topic: lessonId, area: areaOfLesson(lessonId).id } : {}
}

/** Formats ms as hh:mm:ss. */
export function hms(ms: number) {
  const t = Math.max(0, Math.ceil(ms / 1000))
  const p = (n: number) => String(n).padStart(2, '0')
  return `${p(Math.floor(t / 3600))}:${p(Math.floor((t % 3600) / 60))}:${p(t % 60)}`
}
