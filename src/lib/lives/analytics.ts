import { LIVES } from '../../config/lives'

export type LivesEvent =
  | 'life_lost'
  | 'life_regenerated'
  | 'life_recovered'
  | 'recovery_failed'
  | 'lives_zero'
  | 'out_of_lives_viewed'
  | 'out_of_lives_choice'
  | 'refill_used'
  | 'activity_paused'
  | 'activity_resumed'
  | 'activity_expired'
  | 'upgrade_clicked'
  | 'streak_protected'
  | 'streak_lost'

export interface TrackedEvent {
  name: LivesEvent
  at: string
  plan: string
  area?: string
  topic?: string
  [k: string]: unknown
}

/**
 * Records analytics events locally (no data leaves the device: the privacy
 * notice says the app has no analytics). Connect a provider here later.
 */
export function track(name: LivesEvent, props: { plan: string; area?: string; topic?: string; [k: string]: unknown }, now = new Date()) {
  const ev: TrackedEvent = { name, at: now.toISOString(), ...props }
  try {
    const list: TrackedEvent[] = JSON.parse(localStorage.getItem(LIVES.analytics.storageKey) ?? '[]')
    list.push(ev)
    localStorage.setItem(LIVES.analytics.storageKey, JSON.stringify(list.slice(-LIVES.analytics.keep)))
  } catch {
    /* storage unavailable */
  }
  return ev
}

export function trackedEvents(): TrackedEvent[] {
  try {
    return JSON.parse(localStorage.getItem(LIVES.analytics.storageKey) ?? '[]')
  } catch {
    return []
  }
}
