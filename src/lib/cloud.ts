import { getClient } from './auth'
import { validateState } from './backup'
import type { AppState } from './progress'
import type { LivesState } from './lives/service'

/** Progress saved in the user's account (Supabase table user_progress, see supabase/migrations/003). */
export interface CloudProgress {
  state: AppState | null
  lives: LivesState | null
}

/** Reads the account's saved progress. Throws on network/database errors so callers never overwrite blindly. */
export async function pullProgress(userId: string): Promise<CloudProgress | null> {
  const c = await getClient()
  const { data, error } = await c.from('user_progress').select('state,lives').eq('user_id', userId).maybeSingle()
  if (error) throw error
  if (!data) return null
  const v = validateState(data.state)
  const lives = data.lives && typeof data.lives === 'object' && typeof (data.lives as LivesState).lives === 'number' ? (data.lives as LivesState) : null
  return { state: v.ok ? v.state : null, lives }
}

export async function pushProgress(userId: string, state: AppState, lives: LivesState | null): Promise<void> {
  const c = await getClient()
  const { error } = await c.from('user_progress').upsert({ user_id: userId, state, lives })
  if (error) throw error
}
