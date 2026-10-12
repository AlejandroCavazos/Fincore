import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'
import { authEnabled, getClient, type AuthUser } from '../lib/auth'
import { planFromRow, type PlanId } from '../lib/plans'

interface AuthValue {
  enabled: boolean
  loading: boolean
  user: AuthUser | null
  /** Plan read from the subscriptions table; Free when unknown. */
  plan: PlanId
  /** True after the user opened a password-reset link. */
  recovering: boolean
  doneRecovering: () => void
}

const AuthCtx = createContext<AuthValue>({ enabled: false, loading: false, user: null, plan: 'free', recovering: false, doneRecovering: () => {} })

export function AuthProvider({ children }: { children: ReactNode }) {
  const [loading, setLoading] = useState(authEnabled)
  const [user, setUser] = useState<AuthUser | null>(null)
  const [recovering, setRecovering] = useState(false)
  const [plan, setPlan] = useState<PlanId>('free')

  useEffect(() => {
    if (!authEnabled || !user) {
      setPlan('free')
      return
    }
    let alive = true
    getClient()
      .then((c) => c.from('subscriptions').select('plan,status').eq('user_id', user.id).maybeSingle())
      .then(({ data }) => alive && setPlan(planFromRow(data)))
      .catch(() => {})
    return () => {
      alive = false
    }
  }, [user])

  useEffect(() => {
    if (!authEnabled) return
    let off = () => {}
    let alive = true
    getClient()
      .then(async (c) => {
        const { data } = c.auth.onAuthStateChange((event, session) => {
          if (!alive) return
          if (event === 'PASSWORD_RECOVERY') setRecovering(true)
          setUser(session?.user ? { id: session.user.id, email: session.user.email } : null)
        })
        off = () => data.subscription.unsubscribe()
        const { data: s } = await c.auth.getSession()
        if (!alive) return
        setUser(s.session?.user ? { id: s.session.user.id, email: s.session.user.email } : null)
        // Drop the one-time ?code= left by email links / Google, keep the hash route.
        if (new URLSearchParams(window.location.search).has('code')) {
          history.replaceState(null, '', window.location.pathname + window.location.hash)
        }
      })
      .catch(() => {})
      .finally(() => alive && setLoading(false))
    return () => {
      alive = false
      off()
    }
  }, [])

  return (
    <AuthCtx.Provider value={{ enabled: authEnabled, loading, user, plan, recovering, doneRecovering: () => setRecovering(false) }}>
      {children}
    </AuthCtx.Provider>
  )
}

export const useAuth = () => useContext(AuthCtx)
