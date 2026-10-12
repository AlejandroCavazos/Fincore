import { type ReactNode } from 'react'
import {
  BarChart3,
  Bot,
  BookOpen,
  Calculator,
  CircleCheck,
  Dumbbell,
  FlaskConical,
  GraduationCap,
  House,
  Info,
  LayoutGrid,
  Settings,
  TrendingUp,
  TriangleAlert,
  X,
} from 'lucide-react'
import { useI18n, useStore } from '../state/store'
import { cx } from './ui'
import { Logo } from './Logo'

interface NavItem {
  href: string
  match: string[]
  label: [string, string]
  icon: ReactNode
}

const ic = 'h-5 w-5'
export const MOBILE_NAV: NavItem[] = [
  { href: '/', match: ['/'], label: ['Inicio', 'Home'], icon: <House className={ic} /> },
  { href: '/courses', match: ['/courses', '/path', '/lesson'], label: ['Cursos', 'Courses'], icon: <BookOpen className={ic} /> },
  { href: '/practice', match: ['/practice', '/exams'], label: ['Práctica', 'Practice'], icon: <Dumbbell className={ic} /> },
  { href: '/tools', match: ['/tools', '/lab', '/calc', '/invest', '/tutor'], label: ['Herramientas', 'Tools'], icon: <LayoutGrid className={ic} /> },
  { href: '/stats', match: ['/stats', '/settings'], label: ['Progreso', 'Progress'], icon: <BarChart3 className={ic} /> },
]

export const SIDE_NAV: NavItem[] = [
  { href: '/', match: ['/'], label: ['Inicio', 'Dashboard'], icon: <House className={ic} /> },
  { href: '/courses', match: ['/courses', '/path', '/lesson'], label: ['Cursos', 'Courses'], icon: <BookOpen className={ic} /> },
  { href: '/practice', match: ['/practice'], label: ['Práctica y repaso', 'Practice & review'], icon: <Dumbbell className={ic} /> },
  { href: '/exams', match: ['/exams'], label: ['Evaluaciones', 'Exams'], icon: <GraduationCap className={ic} /> },
  { href: '/lab', match: ['/lab'], label: ['Laboratorio contable', 'Accounting lab'], icon: <FlaskConical className={ic} /> },
  { href: '/calc', match: ['/calc'], label: ['Calculadoras', 'Calculators'], icon: <Calculator className={ic} /> },
  { href: '/invest', match: ['/invest'], label: ['Inversión y valuación', 'Investing & valuation'], icon: <TrendingUp className={ic} /> },
  { href: '/tutor', match: ['/tutor'], label: ['Tutor', 'Tutor'], icon: <Bot className={ic} /> },
  { href: '/stats', match: ['/stats'], label: ['Estadísticas', 'Statistics'], icon: <BarChart3 className={ic} /> },
  { href: '/settings', match: ['/settings'], label: ['Configuración', 'Settings'], icon: <Settings className={ic} /> },
]

function isActive(item: NavItem, path: string) {
  return item.match.some((m) => (m === '/' ? path === '/' : path === m || path.startsWith(`${m}/`)))
}

export function Layout({ path, children }: { path: string; children: ReactNode }) {
  const { tx, lang } = useI18n()
  const { toasts, dismissToast } = useStore()
  const label = (l: [string, string]) => (lang === 'es' ? l[0] : l[1])

  return (
    <div className="min-h-dvh bg-[#f5f7fb] text-navy-800 dark:bg-navy-950 dark:text-navy-100">
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-2 focus:top-2 focus:z-50 focus:rounded-lg focus:bg-white focus:px-3 focus:py-2">
        {tx('Saltar al contenido', 'Skip to content')}
      </a>

      {/* Desktop sidebar */}
      <aside className="fixed inset-y-0 left-0 z-30 hidden w-64 flex-col border-r border-navy-100 bg-white px-3 py-5 dark:border-navy-800 dark:bg-navy-900 lg:flex">
        <a href="#/" className="mb-6 px-2">
          <Logo />
        </a>
        <nav aria-label={tx('Navegación principal', 'Main navigation')} className="flex flex-1 flex-col gap-0.5 overflow-y-auto">
          {SIDE_NAV.map((item) => {
            const active = isActive(item, path)
            return (
              <a
                key={item.href}
                href={`#${item.href}`}
                aria-current={active ? 'page' : undefined}
                className={cx(
                  'flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition',
                  active ? 'bg-electric-500/10 text-electric-600 dark:text-electric-300' : 'text-navy-600 hover:bg-navy-50 dark:text-navy-200 dark:hover:bg-navy-800',
                )}
              >
                {item.icon}
                {label(item.label)}
              </a>
            )
          })}
        </nav>
        <p className="px-3 pt-4 text-[11px] text-navy-400">FINCORE v1.0 · {tx('Contenido educativo', 'Educational content')}</p>
      </aside>

      {/* Mobile header */}
      <header className="pt-safe sticky top-0 z-20 border-b border-navy-100 bg-white/85 backdrop-blur dark:border-navy-800 dark:bg-navy-900/85 lg:hidden">
        <div className="flex h-12 items-center justify-between px-4">
          <a href="#/" aria-label="FINCORE">
            <Logo compact />
          </a>
          <div className="flex items-center gap-1">
            <a href="#/tutor" className="rounded-lg p-2 text-navy-600 hover:bg-navy-100 dark:text-navy-200 dark:hover:bg-navy-800" aria-label={tx('Tutor', 'Tutor')}>
              <Bot className="h-5 w-5" />
            </a>
            <a href="#/settings" className="rounded-lg p-2 text-navy-600 hover:bg-navy-100 dark:text-navy-200 dark:hover:bg-navy-800" aria-label={tx('Configuración', 'Settings')}>
              <Settings className="h-5 w-5" />
            </a>
          </div>
        </div>
      </header>

      <main id="main" className="mx-auto max-w-5xl pl-[max(1rem,env(safe-area-inset-left))] pr-[max(1rem,env(safe-area-inset-right))] pb-28 pt-4 lg:ml-64 lg:max-w-none lg:px-10 lg:pb-12 lg:pt-8">
        <div className="mx-auto max-w-5xl">{children}</div>
      </main>

      {/* Mobile bottom navigation */}
      <nav
        aria-label={tx('Navegación inferior', 'Bottom navigation')}
        className="pb-safe fixed inset-x-0 bottom-0 z-30 border-t border-navy-100 bg-white/95 backdrop-blur dark:border-navy-800 dark:bg-navy-900/95 lg:hidden"
      >
        <ul className="mx-auto grid max-w-lg grid-cols-5">
          {MOBILE_NAV.map((item) => {
            const active = isActive(item, path)
            return (
              <li key={item.href}>
                <a
                  href={`#${item.href}`}
                  aria-current={active ? 'page' : undefined}
                  className={cx(
                    'flex min-h-14 flex-col items-center justify-center gap-0.5 text-[11px] font-semibold',
                    active ? 'text-electric-500' : 'text-navy-400 dark:text-navy-300',
                  )}
                >
                  {item.icon}
                  {label(item.label)}
                </a>
              </li>
            )
          })}
        </ul>
      </nav>

      {/* Toasts */}
      <div aria-live="polite" className="pointer-events-none fixed inset-x-0 top-14 z-50 flex flex-col items-center gap-2 px-4 lg:top-4">
        {toasts.map((t) => (
          <div
            key={t.id}
            className={cx(
              'animate-pop pointer-events-auto flex max-w-sm items-center gap-2 rounded-xl px-4 py-3 text-sm font-medium shadow-lg',
              t.tone === 'success' ? 'bg-money-600 text-white' : t.tone === 'warning' ? 'bg-amber-500 text-navy-950' : 'bg-navy-800 text-white',
            )}
          >
            {t.tone === 'success' ? <CircleCheck className="h-4 w-4 shrink-0" /> : t.tone === 'warning' ? <TriangleAlert className="h-4 w-4 shrink-0" /> : <Info className="h-4 w-4 shrink-0" />}
            <span>{t.text[lang]}</span>
            <button type="button" onClick={() => dismissToast(t.id)} aria-label={tx('Cerrar', 'Close')} className="ml-1 rounded p-0.5 opacity-80 hover:opacity-100">
              <X className="h-4 w-4" />
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
