import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState, type ReactNode } from 'react'
import type { Exercise, L, Lang } from '../types'
import { loadState, saveState } from '../lib/db'
import { ACHIEVEMENTS, checkAchievements, defaultState, type AppState } from '../lib/progress'

type Updater = (s: AppState) => AppState

interface Toast {
  id: number
  text: L
  tone: 'success' | 'info' | 'warning'
}

interface StoreValue {
  state: AppState
  ready: boolean
  persistence: 'indexeddb' | 'memory'
  update: (fn: Updater) => void
  replace: (s: AppState) => void
  toasts: Toast[]
  toast: (text: L, tone?: Toast['tone']) => void
  dismissToast: (id: number) => void
}

const StoreCtx = createContext<StoreValue | null>(null)

export function StoreProvider({ children, initial }: { children: ReactNode; initial?: AppState }) {
  const [state, setState] = useState<AppState>(initial ?? defaultState())
  const [ready, setReady] = useState(!!initial)
  const [persistence, setPersistence] = useState<'indexeddb' | 'memory'>('indexeddb')
  const [toasts, setToasts] = useState<Toast[]>([])
  const toastId = useRef(0)
  const saveTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const latest = useRef(state)
  latest.current = state

  const toast = useCallback((text: L, tone: Toast['tone'] = 'info') => {
    const id = ++toastId.current
    setToasts((t) => [...t, { id, text, tone }])
    setTimeout(() => setToasts((t) => t.filter((x) => x.id !== id)), 3800)
  }, [])
  const dismissToast = useCallback((id: number) => setToasts((t) => t.filter((x) => x.id !== id)), [])

  useEffect(() => {
    if (initial) return
    let alive = true
    loadState().then((r) => {
      if (!alive) return
      if (r.error === 'indexeddb-unavailable') setPersistence('memory')
      setState(r.state)
      setReady(true)
    })
    return () => {
      alive = false
    }
  }, [initial])

  // Debounced persistence + flush when the page is hidden.
  useEffect(() => {
    if (!ready) return
    if (saveTimer.current) clearTimeout(saveTimer.current)
    saveTimer.current = setTimeout(() => {
      saveState(latest.current).then((ok) => {
        if (!ok) setPersistence('memory')
      })
    }, 250)
  }, [state, ready])
  useEffect(() => {
    const flush = () => {
      if (document.visibilityState === 'hidden') void saveState(latest.current)
    }
    document.addEventListener('visibilitychange', flush)
    window.addEventListener('pagehide', flush)
    return () => {
      document.removeEventListener('visibilitychange', flush)
      window.removeEventListener('pagehide', flush)
    }
  }, [])

  const update = useCallback(
    (fn: Updater) => {
      setState((prev) => {
        const next = fn(prev)
        if (next === prev) return prev
        const { state: withAch, unlocked } = checkAchievements(next)
        if (unlocked.length) {
          setTimeout(() => unlocked.forEach((id) => {
              const a = ACHIEVEMENTS.find((x) => x.id === id)
              if (a) toast({ es: `🏆 Logro desbloqueado: ${a.title.es}`, en: `🏆 Achievement unlocked: ${a.title.en}` }, 'success')
            }), 0)
        }
        return withAch
      })
    },
    [toast],
  )
  const replace = useCallback((s: AppState) => setState(s), [])

  const value = useMemo(() => ({ state, ready, persistence, update, replace, toasts, toast, dismissToast }), [state, ready, persistence, update, replace, toasts, toast, dismissToast])
  return <StoreCtx.Provider value={value}>{children}</StoreCtx.Provider>
}

export function useStore(): StoreValue {
  const v = useContext(StoreCtx)
  if (!v) throw new Error('useStore outside StoreProvider')
  return v
}

/** Translation helpers bound to the current language. */
export function useI18n() {
  const { state } = useStore()
  const lang: Lang = state.settings.lang
  const t = useCallback((x: L | undefined) => (x ? x[lang] : ''), [lang])
  const tx = useCallback((es: string, en: string) => (lang === 'es' ? es : en), [lang])
  return { lang, t, tx }
}

export type { Exercise }
