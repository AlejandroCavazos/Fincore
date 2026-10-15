import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'
import { authEnabled, getClient, type AuthUser } from '../lib/auth'
import { planFromRow, type PlanId } from '../lib/plans'

interface AuthValue {
  enabled: boolean
  loading: boolean
  user: AuthUser | null
  /** Plan read from the subscriptions table; Free when unknown. */
  plan: PlanId
  /** False while the plan of a signed-in user is still loading (do not apply plan changes yet). */
  planReady: boolean
  /** Billing period and founder price of the current paid subscription. */
  billing: 'monthly' | 'annual'
  founder: boolean
  refreshPlan: () => void
  /** True after the user opened a password-reset link. */
  recovering: boolean
  doneRecovering: () => void
}

const AuthCtx = createContext<AuthValue>({ enabled: false, loading: false, user: null, plan: 'free', planReady: true, billing: 'monthly', founder: false, refreshPlan: () => {}, recovering: false, doneRecovering: () => {} })

export function AuthProvider({ children }: { children: ReactNode }) {
  const [loading, setLoading] = useState(authEnabled)
  const [user, setUser] = useState<AuthUser | null>(null)
  const [recovering, setRecovering] = useState(false)
  const [plan, setPlan] = useState<PlanId>('free')
  const [planTick, setPlanTick] = useState(0)
  const [planUser, setPlanUser] = useState<string | null>(null)
  const [sub, setSub] = useState<{ billing: 'monthly' | 'annual'; founder: boolean }>({ billing: 'monthly', founder: false })

  useEffect(() => {
    if (!authEnabled || !user) {
      setPlan('free')
      setSub({ billing: 'monthly', founder: false })
      return
    }
    let alive = true
    getClient()
      .then((c) => c.from('subscriptions').select('*').eq('user_id', user.id).maybeSingle())
      .then(({ data }) => {
        if (!alive) return
        const p = planFromRow(data)
        setPlan(p)
        setSub({ billing: data?.billing === 'annual' ? 'annual' : 'monthly', founder: p !== 'free' && data?.founder === true })
        setPlanUser(user.id)
      })
      .catch(() => {})
    return () => {
      alive = false
    }
  }, [user, planTick])

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

  const planReady = !authEnabled || (!loading && (!user || planUser === user.id))
  return (
    <AuthCtx.Provider value={{ enabled: authEnabled, loading, user, plan, planReady, ...sub, refreshPlan: () => setPlanTick((t) => t + 1), recovering, doneRecovering: () => setRecovering(false) }}>
      {children}
    </AuthCtx.Provider>
  )
}

export const useAuth = () => useContext(AuthCtx)
