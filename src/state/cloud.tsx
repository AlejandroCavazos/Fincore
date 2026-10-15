import { useEffect, useRef } from 'react'
import { pullProgress, pushProgress } from '../lib/cloud'
import { mergeLives, mergeStates } from '../lib/merge'
import { defaultState } from '../lib/progress'
import * as L from '../lib/lives/service'
import { useAuth } from './auth'
import { useStore } from './store'

/** Device whose local progress belongs to this account (so another account never absorbs it). */
const OWNER_KEY = 'fincore-progress-owner'
const PUSH_DELAY = 4000

function owner() {
  try {
    return localStorage.getItem(OWNER_KEY)
  } catch {
    return null
  }
}

/**
 * Keeps the signed-in user's progress in their account: on sign-in and when the
 * app comes back to the foreground it downloads and merges the saved progress;
 * after changes it merges again and uploads. Without a session nothing leaves the device.
 */
export function CloudSync() {
  const { user } = useAuth()
  const { state, ready, replace } = useStore()
  const latest = useRef(state)
  latest.current = state
  const applying = useRef(false)
  const linked = useRef<string | null>(null)
  const busy = useRef<Promise<void> | null>(null)
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const userId = user?.id ?? null

  const sync = (id: string, first: boolean) => {
    const run = async () => {
      const remote = await pullProgress(id)
      if (first && owner() && owner() !== id) {
        // This browser holds another account's progress: start from this account's.
        applying.current = true
        replace({ ...(remote?.state ?? defaultState()), settings: { ...latest.current.settings } })
      } else if (remote?.state) {
        applying.current = true
        replace(mergeStates(latest.current, remote.state))
      }
      // Lives are already stored per account on the device, so they always merge.
      const lives = mergeLives(L.storedLives(), remote?.lives ?? null)
      if (lives) L.overwriteLives(lives)
      try {
        localStorage.setItem(OWNER_KEY, id)
      } catch {
        /* ignore */
      }
      linked.current = id
      // Let React apply the merged state before uploading it.
      await new Promise((r) => setTimeout(r, 0))
      await pushProgress(id, latest.current, L.storedLives())
    }
    const p = (busy.current ?? Promise.resolve()).then(run).catch(() => {
      /* offline or table missing: keep working locally, retry later */
    })
    busy.current = p
    return p
  }

  // Sign-in.
  useEffect(() => {
    linked.current = null
    if (!userId || !ready) return
    void sync(userId, true)
  }, [userId, ready]) // eslint-disable-line react-hooks/exhaustive-deps

  // Changes: merge + upload a few seconds later.
  useEffect(() => {
    if (applying.current) {
      applying.current = false
      return
    }
    if (!userId || linked.current !== userId) return
    if (timer.current) clearTimeout(timer.current)
    timer.current = setTimeout(() => void sync(userId, false), PUSH_DELAY)
  }, [state]) // eslint-disable-line react-hooks/exhaustive-deps

  // Back to the app (maybe after studying in another browser) / leaving it.
  useEffect(() => {
    if (!userId) return
    let last = 0
    const on = () => {
      if (linked.current !== userId) return
      if (document.visibilityState === 'hidden') {
        void pushProgress(userId, latest.current, L.storedLives()).catch(() => {})
        return
      }
      if (Date.now() - last < 30_000) return
      last = Date.now()
      void sync(userId, false)
    }
    document.addEventListener('visibilitychange', on)
    window.addEventListener('focus', on)
    return () => {
      document.removeEventListener('visibilitychange', on)
      window.removeEventListener('focus', on)
    }
  }, [userId]) // eslint-disable-line react-hooks/exhaustive-deps

  return null
}
