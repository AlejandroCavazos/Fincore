// User accounts via Supabase Auth. Only the email is stored (plus the
// provider's id when signing in with Google). The URL and anon key are public
// by design; access is enforced server-side by Supabase.
// When the two env vars are missing, accounts are disabled and the app keeps
// working fully offline as before.
import type { SupabaseClient, User } from '@supabase/supabase-js'

const URL_ = (import.meta.env.VITE_SUPABASE_URL as string | undefined)?.trim() || ''
const KEY = (import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined)?.trim() || ''

export const authEnabled = !!(URL_ && KEY)

export type AuthUser = Pick<User, 'id' | 'email'>

let clientPromise: Promise<SupabaseClient> | null = null
export function getClient(): Promise<SupabaseClient> {
  if (!authEnabled) return Promise.reject(new Error('auth-disabled'))
  clientPromise ??= import('@supabase/supabase-js').then(({ createClient }) =>
    createClient(URL_, KEY, { auth: { flowType: 'pkce', persistSession: true, autoRefreshToken: true, detectSessionInUrl: true } }),
  )
  return clientPromise
}

/** Where email links and Google send the user back to (the app's own page). */
export function redirectUrl(): string {
  return window.location.origin + window.location.pathname
}

export const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
export const MIN_PASSWORD = 8

export type AuthErrorCode = 'invalid-email' | 'short-password' | 'mismatch'
export function validateCredentials(email: string, password: string, confirm?: string): AuthErrorCode | null {
  if (!EMAIL_RE.test(email.trim())) return 'invalid-email'
  if (password.length < MIN_PASSWORD) return 'short-password'
  if (confirm !== undefined && confirm !== password) return 'mismatch'
  return null
}

/** Maps Supabase error messages to bilingual, user-facing text. */
export function friendlyError(message: string): { es: string; en: string } {
  const m = message.toLowerCase()
  if (m.includes('invalid login')) return { es: 'Correo o contraseña incorrectos.', en: 'Wrong email or password.' }
  if (m.includes('not confirmed')) return { es: 'Confirma tu correo con el enlace que te enviamos.', en: 'Confirm your email with the link we sent you.' }
  if (m.includes('already registered')) return { es: 'Ese correo ya tiene cuenta. Inicia sesión.', en: 'That email already has an account. Sign in.' }
  if (m.includes('rate limit') || m.includes('too many')) return { es: 'Demasiados intentos. Espera un momento.', en: 'Too many attempts. Wait a moment.' }
  if (m.includes('fetch') || m.includes('network')) return { es: 'Sin conexión. Revisa tu internet.', en: 'No connection. Check your internet.' }
  return { es: 'No se pudo completar. Intenta de nuevo.', en: 'Could not complete. Try again.' }
}
