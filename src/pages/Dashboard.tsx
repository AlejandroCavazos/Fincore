import { ArrowRight, Bot, Calculator, Flame, FlaskConical, GraduationCap, RotateCcw, Target, TrendingUp, Zap } from 'lucide-react'
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis } from 'recharts'
import { LEVELS } from '../content/curriculum'
import { LESSONS } from '../content'
import { Badge, Card, ProgressBar, SectionTitle, Stat } from '../components/ui'
import { dueCards, levelInfo, totalXp, xpToday } from '../lib/progress'
import { useLives } from '../state/lives'
import { levelProgress, nextLesson, xpByDay } from '../lib/selectors'
import { useI18n, useStore } from '../state/store'

export default function Dashboard() {
  const { state } = useStore()
  const { t, tx, lang } = useI18n()
  const xp = totalXp(state)
  const lvl = levelInfo(xp)
  const lives = useLives()
  // Streak: days with a completed quiz, practice, lab exercise or recovery review (lives system).
  const st = { current: lives.s.streak.days }
  const today = xpToday(state)
  const goal = state.settings.dailyGoalXp
  const due = dueCards(state).length
  const next = nextLesson(state)
  const week = xpByDay(state, 7).map((d) => ({ ...d, label: new Date(`${d.day}T12:00:00`).toLocaleDateString(lang === 'es' ? 'es-MX' : 'en-US', { weekday: 'short' }) }))
  const completed = Object.values(state.lessons).filter((l) => l.status === 'completed').length
  const hour = new Date().getHours()
  const greet = hour < 12 ? tx('Buenos días', 'Good morning') : hour < 19 ? tx('Buenas tardes', 'Good afternoon') : tx('Buenas noches', 'Good evening')

  const tools = [
    { href: '#/lab', icon: <FlaskConical className="h-5 w-5" />, label: tx('Laboratorio', 'Lab') },
    { href: '#/calc', icon: <Calculator className="h-5 w-5" />, label: tx('Calculadoras', 'Calculators') },
    { href: '#/invest', icon: <TrendingUp className="h-5 w-5" />, label: tx('Valuación', 'Valuation') },
    { href: '#/tutor', icon: <Bot className="h-5 w-5" />, label: tx('Tutor', 'Tutor') },
  ]

  return (
    <div className="space-y-4">
      <div>
        <p className="text-sm text-navy-500 dark:text-navy-300">{greet} 👋</p>
        <h1 className="text-2xl font-bold tracking-tight text-navy-900 dark:text-white">{tx('Tu panel de aprendizaje', 'Your learning dashboard')}</h1>
      </div>

      <Card className="overflow-hidden bg-gradient-to-br from-navy-800 to-navy-950 p-5 text-white ring-0 dark:from-navy-800 dark:to-navy-900">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-electric-300">{tx('Nivel', 'Level')}</p>
            <p className="tabular text-4xl font-extrabold" data-testid="user-level">
              {lvl.level}
            </p>
          </div>
          <div className="text-right">
            <p className="tabular text-2xl font-bold" data-testid="total-xp">
              {xp.toLocaleString()} XP
            </p>
            <p className="text-xs text-navy-300">
              {lvl.needed - lvl.current} XP {tx('para el nivel', 'to level')} {lvl.level + 1}
            </p>
          </div>
        </div>
        <ProgressBar value={lvl.progress} className="mt-3 bg-white/10 dark:bg-white/10" label={tx('Progreso de nivel', 'Level progress')} />
      </Card>

      <div className="grid grid-cols-3 gap-3">
        <Stat icon={<Flame className="h-6 w-6" />} tone="amber" value={st.current} label={tx('Días de racha', 'Day streak')} />
        <Stat icon={<Target className="h-6 w-6" />} tone="money" value={`${Math.min(today, goal)}/${goal}`} label={tx('Meta diaria XP', 'Daily XP goal')} />
        <Stat icon={<GraduationCap className="h-6 w-6" />} value={`${completed}/${LESSONS.length}`} label={tx('Lecciones', 'Lessons')} />
      </div>

      {next ? (
        <a href={`#/lesson/${next.id}`} className="block">
          <Card className="flex items-center gap-4 transition hover:ring-electric-400">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-electric-500 text-white">
              <Zap className="h-6 w-6" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-xs font-semibold uppercase tracking-wider text-electric-600 dark:text-electric-300">
                {state.attempts[next.id] && !state.attempts[next.id].finishedAt ? tx('Continuar lección', 'Continue lesson') : tx('Siguiente lección', 'Next lesson')}
              </p>
              <p className="truncate font-semibold text-navy-900 dark:text-white">{t(next.title)}</p>
              <p className="text-xs text-navy-500 dark:text-navy-300">
                {LEVELS[next.level - 1].code} · {next.minutes} min
              </p>
            </div>
            <ArrowRight className="h-5 w-5 shrink-0 text-navy-400" />
          </Card>
        </a>
      ) : (
        <Card>{tx('¡Completaste todas las lecciones disponibles! Repasa o presenta evaluaciones.', 'You completed every available lesson! Review or take exams.')}</Card>
      )}

      <a href="#/practice/review" className="block">
        <Card className="flex items-center gap-4 transition hover:ring-electric-400">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-money-500 text-white">
            <RotateCcw className="h-6 w-6" />
          </div>
          <div className="flex-1">
            <p className="font-semibold text-navy-900 dark:text-white">{tx('Repaso espaciado', 'Spaced review')}</p>
            <p className="text-sm text-navy-500 dark:text-navy-300">
              {due > 0 ? tx(`${due} tarjeta(s) pendiente(s) hoy`, `${due} card(s) due today`) : tx('Nada pendiente hoy. ¡Al día!', 'Nothing due today. All caught up!')}
            </p>
          </div>
          {due > 0 && <Badge tone="money">{due}</Badge>}
        </Card>
      </a>

      <SectionTitle>{tx('Herramientas', 'Tools')}</SectionTitle>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {tools.map((x) => (
          <a key={x.href} href={x.href} className="flex flex-col items-center gap-2 rounded-2xl bg-white p-4 text-center text-sm font-semibold text-navy-700 shadow-sm ring-1 ring-navy-100 transition hover:ring-electric-400 dark:bg-navy-900 dark:text-navy-100 dark:ring-navy-800">
            <span className="text-electric-500">{x.icon}</span>
            {x.label}
          </a>
        ))}
      </div>

      <SectionTitle>{tx('XP de los últimos 7 días', 'XP over the last 7 days')}</SectionTitle>
      <Card className="h-44 p-2">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={week} margin={{ top: 8, right: 8, left: 8, bottom: 0 }}>
            <XAxis dataKey="label" tickLine={false} axisLine={false} fontSize={12} stroke="#7f9bd1" />
            <Tooltip cursor={{ fill: 'rgba(31,122,255,0.08)' }} formatter={(v) => [`${v} XP`, 'XP']} />
            <Bar dataKey="xp" fill="#1f7aff" radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </Card>

      <SectionTitle>{tx('Tus rutas', 'Your paths')}</SectionTitle>
      <div className="grid gap-3 sm:grid-cols-2">
        {LEVELS.map((l) => {
          const p = levelProgress(state, l.id)
          return (
            <a key={l.id} href={`#/path/${l.id}`}>
              <Card className="transition hover:ring-electric-400">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-navy-900 dark:text-white">
                    {l.code} · {t(l.title)}
                  </span>
                  <span className="tabular text-xs text-navy-500">
                    {p.done}/{p.total}
                  </span>
                </div>
                <ProgressBar value={p.ratio} tone="money" className="mt-2" label={t(l.title)} />
              </Card>
            </a>
          )
        })}
      </div>
    </div>
  )
}
