import { useState, type FormEvent } from 'react'
import { Logo } from '../components/Logo'
import { Button, Card, Field, Notice, cx } from '../components/ui'
import { googleEnabled, friendlyError, getClient, redirectUrl, validateCredentials, MIN_PASSWORD, type AuthErrorCode } from '../lib/auth'
import { useAuth } from '../state/auth'
import { useI18n } from '../state/store'

type Mode = 'signin' | 'signup' | 'forgot' | 'newpass'

export default function AuthScreen() {
  const { tx, lang } = useI18n()
  const { recovering, doneRecovering } = useAuth()
  const [mode, setMode] = useState<Mode>(recovering ? 'newpass' : 'signup')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirm, setConfirm] = useState('')
  const [busy, setBusy] = useState(false)
  const [fieldErr, setFieldErr] = useState<AuthErrorCode | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [info, setInfo] = useState<string | null>(null)
  const l = (m: { es: string; en: string }) => (lang === 'es' ? m.es : m.en)

  const switchTo = (m: Mode) => {
    setMode(m)
    setFieldErr(null)
    setError(null)
    setInfo(null)
  }

  const fieldMsg: Record<AuthErrorCode, string> = {
    'invalid-email': tx('Escribe un correo válido.', 'Enter a valid email.'),
    'short-password': tx(`Mínimo ${MIN_PASSWORD} caracteres.`, `At least ${MIN_PASSWORD} characters.`),
    mismatch: tx('Las contraseñas no coinciden.', 'Passwords do not match.'),
  }

  const run = async (fn: () => Promise<void>) => {
    setBusy(true)
    setError(null)
    setInfo(null)
    try {
      await fn()
    } catch (e) {
      setError(l(friendlyError(e instanceof Error ? e.message : String(e))))
    } finally {
      setBusy(false)
    }
  }

  const submit = (e: FormEvent) => {
    e.preventDefault()
    if (mode === 'forgot') {
      const v = validateCredentials(email, 'x'.repeat(MIN_PASSWORD))
      setFieldErr(v)
      if (v) return
      return run(async () => {
        const c = await getClient()
        const { error } = await c.auth.resetPasswordForEmail(email.trim(), { redirectTo: redirectUrl() })
        if (error) throw error
        setInfo(tx('Si el correo tiene cuenta, te enviamos un enlace para cambiar la contraseña.', 'If that email has an account, we sent a link to reset the password.'))
      })
    }
    if (mode === 'newpass') {
      const v = validateCredentials('a@b.co', password, confirm)
      setFieldErr(v)
      if (v) return
      return run(async () => {
        const c = await getClient()
        const { error } = await c.auth.updateUser({ password })
        if (error) throw error
        doneRecovering()
      })
    }
    const v = validateCredentials(email, password, mode === 'signup' ? confirm : undefined)
    setFieldErr(v)
    if (v) return
    return run(async () => {
      const c = await getClient()
      if (mode === 'signin') {
        const { error } = await c.auth.signInWithPassword({ email: email.trim(), password })
        if (error) throw error
      } else {
        const { data, error } = await c.auth.signUp({ email: email.trim(), password, options: { emailRedirectTo: redirectUrl() } })
        if (error) throw error
        if (!data.session) {
          setInfo(tx(`Te enviamos un correo a ${email.trim()}. Abre el enlace para activar tu cuenta.`, `We sent an email to ${email.trim()}. Open the link to activate your account.`))
          setMode('signin')
        }
      }
    })
  }

  const google = () =>
    run(async () => {
      const c = await getClient()
      const { error } = await c.auth.signInWithOAuth({ provider: 'google', options: { redirectTo: redirectUrl() } })
      if (error) throw error
    })

  const titles: Record<Mode, string> = {
    signup: tx('Crea tu cuenta', 'Create your account'),
    signin: tx('Inicia sesión', 'Sign in'),
    forgot: tx('Recupera tu contraseña', 'Reset your password'),
    newpass: tx('Nueva contraseña', 'New password'),
  }
  const showTabs = mode === 'signin' || mode === 'signup'

  return (
    <div className="pt-safe pb-safe flex min-h-dvh flex-col bg-gradient-to-b from-navy-900 via-navy-900 to-navy-950">
      <div className="mx-auto flex w-full max-w-md flex-1 flex-col px-4 py-10 sm:px-6">
        <div className="mb-8 px-2 [&_span]:!text-white">
          <Logo />
        </div>
        <Card className="animate-fade-up">
          {showTabs && (
            <div role="tablist" className="mb-5 grid grid-cols-2 gap-1 rounded-xl bg-navy-100 p-1 dark:bg-navy-800">
              {(['signup', 'signin'] as const).map((m) => (
                <button
                  key={m}
                  type="button"
                  role="tab"
                  aria-selected={mode === m}
                  onClick={() => switchTo(m)}
                  className={cx(
                    'min-h-10 rounded-lg text-sm font-semibold transition',
                    mode === m ? 'bg-white text-navy-900 shadow-sm dark:bg-navy-950 dark:text-white' : 'text-navy-500 dark:text-navy-300',
                  )}
                >
                  {m === 'signup' ? tx('Crear cuenta', 'Sign up') : tx('Iniciar sesión', 'Sign in')}
                </button>
              ))}
            </div>
          )}
          <h1 className="text-xl font-bold text-navy-900 dark:text-white">{titles[mode]}</h1>
          {mode === 'signup' && (
            <p className="mt-1 text-sm text-navy-500 dark:text-navy-300">
              {tx('Solo te pedimos tu correo. Tu progreso sigue guardado en tu dispositivo.', 'We only ask for your email. Your progress stays on your device.')}
            </p>
          )}

          <form className="mt-5 space-y-4" onSubmit={submit} noValidate>
            {mode !== 'newpass' && (
              <Field
                id="auth-email"
                label={tx('Correo', 'Email')}
                type="email"
                autoComplete="email"
                inputMode="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={fieldErr === 'invalid-email' ? fieldMsg['invalid-email'] : null}
              />
            )}
            {mode !== 'forgot' && (
              <Field
                id="auth-password"
                label={mode === 'newpass' ? tx('Nueva contraseña', 'New password') : tx('Contraseña', 'Password')}
                type="password"
                autoComplete={mode === 'signin' ? 'current-password' : 'new-password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                hint={mode === 'signin' ? undefined : fieldMsg['short-password']}
                error={fieldErr === 'short-password' ? fieldMsg['short-password'] : null}
              />
            )}
            {(mode === 'signup' || mode === 'newpass') && (
              <Field
                id="auth-confirm"
                label={tx('Confirma la contraseña', 'Confirm password')}
                type="password"
                autoComplete="new-password"
                value={confirm}
                onChange={(e) => setConfirm(e.target.value)}
                error={fieldErr === 'mismatch' ? fieldMsg.mismatch : null}
              />
            )}
            {error && <Notice tone="error">{error}</Notice>}
            {info && <Notice tone="success">{info}</Notice>}
            <Button type="submit" size="lg" className="w-full" disabled={busy}>
              {mode === 'signup'
                ? tx('Crear cuenta', 'Create account')
                : mode === 'signin'
                  ? tx('Entrar', 'Sign in')
                  : mode === 'forgot'
                    ? tx('Enviar enlace', 'Send link')
                    : tx('Guardar contraseña', 'Save password')}
            </Button>
          </form>

          {showTabs && googleEnabled && (
            <>
              <div className="my-4 flex items-center gap-3 text-xs text-navy-400">
                <span className="h-px flex-1 bg-navy-100 dark:bg-navy-700" />
                {tx('o', 'or')}
                <span className="h-px flex-1 bg-navy-100 dark:bg-navy-700" />
              </div>
              <Button variant="secondary" size="lg" className="w-full" onClick={google} disabled={busy}>
                <GoogleMark /> {tx('Continuar con Google', 'Continue with Google')}
              </Button>
            </>
          )}

          <div className="mt-4 text-center text-sm">
            {mode === 'signin' && (
              <button type="button" className="text-electric-600 hover:underline dark:text-electric-300" onClick={() => switchTo('forgot')}>
                {tx('¿Olvidaste tu contraseña?', 'Forgot your password?')}
              </button>
            )}
            {mode === 'forgot' && (
              <button type="button" className="text-electric-600 hover:underline dark:text-electric-300" onClick={() => switchTo('signin')}>
                {tx('Volver a iniciar sesión', 'Back to sign in')}
              </button>
            )}
          </div>
        </Card>
      </div>
    </div>
  )
}

function GoogleMark() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden>
      <path fill="#4285F4" d="M23.5 12.3c0-.8-.1-1.6-.2-2.3H12v4.5h6.5a5.6 5.6 0 0 1-2.4 3.6v3h3.9c2.3-2.1 3.5-5.2 3.5-8.8z" />
      <path fill="#34A853" d="M12 24c3.2 0 6-1.1 8-2.9l-3.9-3c-1.1.7-2.5 1.2-4.1 1.2-3.1 0-5.8-2.1-6.7-5H1.3v3.1A12 12 0 0 0 12 24z" />
      <path fill="#FBBC05" d="M5.3 14.3a7.2 7.2 0 0 1 0-4.6V6.6H1.3a12 12 0 0 0 0 10.8l4-3.1z" />
      <path fill="#EA4335" d="M12 4.8c1.8 0 3.3.6 4.6 1.8l3.4-3.4A12 12 0 0 0 1.3 6.6l4 3.1c.9-2.9 3.6-4.9 6.7-4.9z" />
    </svg>
  )
}
