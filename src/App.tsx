import { lazy, Suspense, useEffect } from 'react'
import { Layout } from './components/Layout'
import { LogoMark } from './components/Logo'
import { useStore } from './state/store'
import { useAuth } from './state/auth'
import { navigate, useRoute } from './state/router'
import Dashboard from './pages/Dashboard'
import Welcome from './pages/Welcome'
import Courses from './pages/Courses'
import AreaPage from './pages/AreaPage'
import { areaOfLesson } from './content/areas'
import { lessonsOfLevel } from './content'
import type { LevelId } from './types'
import LessonPage from './pages/LessonPage'
import Practice from './pages/Practice'
import Exams from './pages/Exams'
import Tools from './pages/Tools'
import Stats from './pages/Stats'
import SettingsPage from './pages/Settings'
import NotFound from './pages/NotFound'
import Plans from './pages/Plans'
import Account from './pages/Account'

// Heavier tools are code-split.
const Lab = lazy(() => import('./pages/Lab'))
const Calculators = lazy(() => import('./pages/Calculators'))
const Invest = lazy(() => import('./pages/Invest'))
const Tutor = lazy(() => import('./pages/Tutor'))
const AuthScreen = lazy(() => import('./pages/Auth'))
const Legal = lazy(() => import('./pages/Legal'))

function useTheme() {
  const { state } = useStore()
  const pref = state.settings.theme
  useEffect(() => {
    const mq = window.matchMedia?.('(prefers-color-scheme: dark)')
    const apply = () => {
      const dark = pref === 'dark' || (pref === 'system' && !!mq?.matches)
      document.documentElement.classList.toggle('dark', dark)
      document.querySelector('meta[name="theme-color"]')?.setAttribute('content', dark ? '#060e21' : '#0b1731')
    }
    apply()
    mq?.addEventListener?.('change', apply)
    return () => mq?.removeEventListener?.('change', apply)
  }, [pref])
  useEffect(() => {
    document.documentElement.lang = state.settings.lang
  }, [state.settings.lang])
}

function Splash() {
  return (
    <div className="flex min-h-dvh items-center justify-center bg-navy-950" aria-busy="true">
      <div className="animate-pulse">
        <LogoMark size={64} />
      </div>
    </div>
  )
}

export default function App() {
  const { state, ready } = useStore()
  const route = useRoute()
  const auth = useAuth()
  useTheme()

  const onboarding = route.path === '/welcome'
  const legal = route.segments[0] === 'legal'
  useEffect(() => {
    if (ready && !state.settings.onboarded && !onboarding && !legal) navigate('/welcome')
  }, [ready, state.settings.onboarded, onboarding, legal])

  if (!ready || auth.loading) return <Splash />
  // Legal notices are readable before onboarding and sign-in.
  if (route.segments[0] === 'legal' && (onboarding || !state.settings.onboarded || (auth.enabled && !auth.user)))
    return (
      <Suspense fallback={<Splash />}>
        <Legal which={route.segments[1]} standalone />
      </Suspense>
    )
  if (onboarding || !state.settings.onboarded) return <Welcome />
  if (auth.enabled && (!auth.user || auth.recovering))
    return (
      <Suspense fallback={<Splash />}>
        <AuthScreen />
      </Suspense>
    )

  const [first, second] = route.segments
  let page
  switch (first) {
    case undefined:
      page = <Dashboard />
      break
    case 'courses':
      page = <Courses />
      break
    case 'area':
      page = <AreaPage areaId={second ?? ''} />
      break
    case 'path':
      page = <AreaPage areaId={/^[1-6]$/.test(second ?? '') ? areaOfLesson(lessonsOfLevel(Number(second) as LevelId)[0]?.id ?? '').id : ''} />
      break
    case 'lesson':
      page = <LessonPage lessonId={second ?? ''} tab={route.query.get('tab')} sub={route.query.get('s')} />
      break
    case 'practice':
      page = <Practice mode={second} />
      break
    case 'exams':
      page = <Exams levelId={second ? Number(second) : undefined} />
      break
    case 'tools':
      page = <Tools />
      break
    case 'lab':
      page = <Lab />
      break
    case 'calc':
      page = <Calculators tool={second} />
      break
    case 'invest':
      page = <Invest />
      break
    case 'tutor':
      page = <Tutor exerciseId={route.query.get('ex')} />
      break
    case 'stats':
      page = <Stats />
      break
    case 'legal':
      page = <Legal which={second} />
      break
    case 'account':
      page = <Account />
      break
    case 'plans':
      page = <Plans />
      break
    case 'settings':
      page = <SettingsPage />
      break
    default:
      page = <NotFound />
  }

  return (
    <Layout path={route.path}>
      <Suspense fallback={<div className="p-8 text-center text-sm text-navy-400">…</div>}>{page}</Suspense>
    </Layout>
  )
}
