import { Award, BookCheck, BookOpen, CircleCheck, CircleX, Flame, GraduationCap, Library, RotateCcw, Search, Star, Target, Zap, type LucideIcon } from 'lucide-react'

const ACH_ICONS: Record<string, LucideIcon> = { BookOpen, Library, Star, Zap, Flame, BookCheck, Search, GraduationCap, RotateCcw, Award }
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { LEVELS } from '../content/curriculum'
import { getExercise, getLesson } from '../content'
import { Badge, Card, cx, PageHeader, ProgressBar, SectionTitle, Stat } from '../components/ui'
import { ACHIEVEMENTS, competencyStats, levelInfo, streak, totalXp } from '../lib/progress'
import { accuracy, levelProgress, xpByDay } from '../lib/selectors'
import { useI18n, useStore } from '../state/store'

export default function Stats() {
  const { state } = useStore()
  const { t, tx, lang } = useI18n()
  const xp = totalXp(state)
  const lvl = levelInfo(xp)
  const st = streak(state)
  const acc = accuracy(state)
  const comps = competencyStats(state, (id) => getExercise(id)?.competency)
  const days = xpByDay(state, 14).map((d) => ({ ...d, label: d.day.slice(5) }))
  const history = [...state.answers].reverse().slice(0, 25)

  return (
    <div>
      <PageHeader title={tx('Estadísticas', 'Statistics')} subtitle={tx('Tu progreso se guarda en este dispositivo.', 'Your progress is stored on this device.')} />
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        <Stat icon={<Zap className="h-6 w-6" />} value={xp} label="XP" />
        <Stat icon={<Award className="h-6 w-6" />} value={lvl.level} label={tx('Nivel', 'Level')} />
        <Stat icon={<Flame className="h-6 w-6" />} tone="amber" value={`${st.current} / ${st.best}`} label={tx('Racha actual / mejor', 'Current / best streak')} />
        <Stat icon={<Target className="h-6 w-6" />} tone="money" value={`${Math.round(acc.ratio * 100)} %`} label={tx(`Precisión (${acc.total} resp.)`, `Accuracy (${acc.total} ans.)`)} />
      </div>

      <SectionTitle>{tx('XP por día (14 días)', 'XP per day (14 days)')}</SectionTitle>
      <Card className="h-52 p-2">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={days} margin={{ top: 8, right: 8, left: -16, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#7f9bd1" strokeOpacity={0.2} vertical={false} />
            <XAxis dataKey="label" fontSize={11} stroke="#7f9bd1" tickLine={false} />
            <YAxis fontSize={11} stroke="#7f9bd1" tickLine={false} axisLine={false} allowDecimals={false} />
            <Tooltip formatter={(v) => [`${v} XP`, 'XP']} />
            <Bar dataKey="xp" fill="#12a86d" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </Card>

      <SectionTitle>{tx('Progreso por nivel', 'Progress by level')}</SectionTitle>
      <Card className="space-y-3">
        {LEVELS.map((l) => {
          const p = levelProgress(state, l.id)
          return (
            <div key={l.id}>
              <div className="mb-1 flex justify-between text-sm">
                <span className="text-navy-700 dark:text-navy-100">
                  {l.code} · {t(l.title)}
                </span>
                <span className="tabular text-navy-500">
                  {p.done}/{p.total}
                </span>
              </div>
              <ProgressBar value={p.ratio} tone="money" label={t(l.title)} />
            </div>
          )
        })}
      </Card>

      <SectionTitle>{tx('Seguimiento por competencia', 'Competency tracking')}</SectionTitle>
      <Card>
        {comps.length === 0 ? (
          <p className="text-sm text-navy-500">{tx('Responde ejercicios para ver tu dominio por competencia.', 'Answer exercises to see your mastery per competency.')}</p>
        ) : (
          <ul className="space-y-2">
            {comps.map((c) => (
              <li key={c.competency}>
                <div className="mb-1 flex justify-between text-sm">
                  <span className="font-mono text-xs text-navy-700 dark:text-navy-100">{c.competency}</span>
                  <span className="tabular text-xs text-navy-500">
                    {c.correct}/{c.total} · {Math.round(c.accuracy * 100)} %
                  </span>
                </div>
                <ProgressBar value={c.accuracy} tone={c.accuracy >= 0.7 ? 'money' : 'electric'} label={c.competency} />
              </li>
            ))}
          </ul>
        )}
      </Card>

      <SectionTitle>{tx('Logros', 'Achievements')}</SectionTitle>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        {ACHIEVEMENTS.map((a) => {
          const at = state.achievements[a.id]
          const Icon = ACH_ICONS[a.icon] ?? Award
          return (
            <Card key={a.id} className={cx('p-3', !at && 'opacity-55')}>
              <Icon className={cx('h-6 w-6', at ? 'text-amber-500' : 'text-navy-300')} />
              <p className="mt-1 text-sm font-semibold text-navy-900 dark:text-white">{t(a.title)}</p>
              <p className="text-xs text-navy-500 dark:text-navy-300">{t(a.description)}</p>
              {at && <Badge tone="money" className="mt-1">{new Date(at).toLocaleDateString(lang === 'es' ? 'es-MX' : 'en-US')}</Badge>}
            </Card>
          )
        })}
      </div>

      <SectionTitle>{tx('Historial reciente', 'Recent history')}</SectionTitle>
      <Card>
        {history.length === 0 ? (
          <p className="text-sm text-navy-500">{tx('Aún no hay respuestas registradas.', 'No answers recorded yet.')}</p>
        ) : (
          <ul className="divide-y divide-navy-100 text-sm dark:divide-navy-800">
            {history.map((h, i) => {
              const ex = getExercise(h.exerciseId)
              const lesson = ex ? getLesson(ex.module) : undefined
              return (
                <li key={i} className="flex items-center gap-2 py-2">
                  {h.correct ? <CircleCheck className="h-4 w-4 shrink-0 text-money-500" /> : <CircleX className="h-4 w-4 shrink-0 text-red-500" />}
                  <span className="min-w-0 flex-1 truncate text-navy-700 dark:text-navy-200">{lesson ? t(lesson.title) : h.exerciseId}</span>
                  <Badge>{h.mode === 'lesson' ? tx('Lección', 'Lesson') : h.mode === 'exam' ? tx('Examen', 'Exam') : tx('Repaso', 'Review')}</Badge>
                  <span className="tabular shrink-0 text-xs text-navy-400">{new Date(h.at).toLocaleDateString(lang === 'es' ? 'es-MX' : 'en-US')}</span>
                </li>
              )
            })}
          </ul>
        )}
      </Card>
    </div>
  )
}
