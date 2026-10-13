import { ArrowLeft, Lock, Sparkles, Store } from 'lucide-react'
import { BUSINESS_BASE, BUSINESS_PER_TOPIC, getArea } from '../content/areas'
import { getLesson } from '../content'
import type { Lesson } from '../types'
import { SubtopicLegend, SubtopicSquares } from '../components/Subtopics'
import { Card, cx } from '../components/ui'
import { areaProgress, isLessonCompleted, isLessonUnlocked, nextLesson, subtopicStates } from '../lib/selectors'
import { useI18n, useStore } from '../state/store'
import NotFound from './NotFound'

export const money = (n: number) => `$${n.toLocaleString('es-MX')}`

export default function AreaPage({ areaId }: { areaId: string }) {
  const { state } = useStore()
  const { t, tx, lang } = useI18n()
  const area = getArea(areaId)
  if (!area) return <NotFound />
  const p = areaProgress(state, area)
  const free = state.settings.freeMode
  const next = nextLesson(state)

  return (
    <div className="space-y-4">
      <a href="#/courses" className="inline-flex items-center gap-1 text-sm font-semibold text-electric-600 dark:text-electric-300">
        <ArrowLeft className="h-4 w-4" /> {tx('Cursos', 'Courses')}
      </a>
      <div className="flex items-end justify-between gap-3">
        <div>
          <p className="text-xs font-bold uppercase tracking-wider text-electric-600 dark:text-electric-300">{t(area.discipline)}</p>
          <h1 className="text-2xl font-bold tracking-tight text-navy-900 dark:text-white">{t(area.title)}</h1>
        </div>
        <p className="tabular text-sm font-semibold text-navy-500 dark:text-navy-300">
          {p.done} {tx('de', 'of')} {p.total} {tx('temas', 'topics')}
        </p>
      </div>

      {area.sections.length > 0 && (<div className="flex items-center gap-3 rounded-2xl bg-navy-900 px-4 py-3 text-white dark:bg-navy-950" data-testid="business">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-300 text-amber-900">
          <Store className="h-5 w-5" />
        </span>
        <div className="min-w-0 flex-1 text-sm">
          <p className="font-bold">{t(area.business)}</p>
          <p className="text-navy-200">
            {p.done === 0 ? tx('Crece con cada tema que dominas.', 'Grows with every topic you master.') : `${p.done} ${tx(p.done === 1 ? 'mejora' : 'mejoras', p.done === 1 ? 'upgrade' : 'upgrades')}`}
          </p>
        </div>
        <span className="tabular font-bold text-money-300">{money(BUSINESS_BASE + p.done * BUSINESS_PER_TOPIC)}</span>
      </div>)}

      {area.sections.length > 0 && <SubtopicLegend tx={tx} />}

      {area.sections.map((sec, si) => {
        const lessons = sec.lessonIds.map((id) => getLesson(id)).filter((l): l is Lesson => !!l)
        return (
          <section key={si}>
            <h2 className="mb-2 text-xs font-bold uppercase tracking-wider text-navy-500 dark:text-navy-300">
              {t(sec.stage)} · {t(sec.title)}
            </h2>
            <Card className="p-0">
              <ol className="divide-y divide-navy-100 dark:divide-navy-800">
                {lessons.map((l) => {
                  const done = isLessonCompleted(state, l.id)
                  const open = isLessonUnlocked(state, l, free)
                  const current = next?.id === l.id
                  return (
                    <li key={l.id}>
                      <a
                        href={`#/lesson/${l.id}`}
                        className={cx('flex items-center gap-3 px-4 py-3 transition hover:bg-navy-50 dark:hover:bg-navy-800/60', current && 'bg-electric-500/10')}
                        aria-label={`${t(l.title)}${done ? tx(' (dominado)', ' (mastered)') : !open ? tx(' (bloqueado)', ' (locked)') : ''}`}
                      >
                        <span className="tabular w-8 shrink-0 text-xs font-bold text-navy-400">{l.topicIds[0]}</span>
                        <span className={cx('min-w-0 flex-1 text-sm font-semibold', current ? 'text-electric-600 dark:text-electric-300' : open ? 'text-navy-900 dark:text-white' : 'text-navy-400')}>
                          {t(l.title)}
                        </span>
                        {open ? (
                          <SubtopicSquares states={subtopicStates(state, l)} label={tx('Avance de subtemas', 'Subtopic progress')} />
                        ) : (
                          <Lock className="h-4 w-4 shrink-0 text-navy-300" />
                        )}
                      </a>
                    </li>
                  )
                })}
              </ol>
            </Card>
            {sec.examLevel && si === area.sections.findIndex((x) => x.examLevel === sec.examLevel) && (
              <a href={`#/exams/${sec.examLevel}`} className="mt-2 inline-block text-xs font-semibold text-electric-600 dark:text-electric-300">
                {tx('Evaluación del nivel', 'Level exam')}
              </a>
            )}
          </section>
        )
      })}

      {area.sections.length === 0 && (
        <Card className="flex items-start gap-3 bg-amber-50 ring-amber-200 dark:bg-amber-500/10 dark:ring-amber-500/30">
          <Sparkles className="mt-0.5 h-5 w-5 shrink-0 text-amber-600" />
          <p className="text-sm text-navy-700 dark:text-navy-200">
            {tx('Esta área está en preparación. Abajo ves el temario que vamos a cubrir.', 'This area is being prepared. Below is the syllabus we will cover.')}
          </p>
        </Card>
      )}

      <section>
        <h2 className="mb-2 text-xs font-bold uppercase tracking-wider text-navy-500 dark:text-navy-300">
          {tx('Temario completo del área', 'Full syllabus of the area')}
          {lang === 'en' && ' (in Spanish)'}
        </h2>
        <Card>
          <ul className="grid gap-x-6 gap-y-1.5 text-sm text-navy-700 sm:grid-cols-2 dark:text-navy-200">
            {area.materias.map((m) => (
              <li key={m} className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-navy-300 dark:bg-navy-600" />
                {m}
              </li>
            ))}
          </ul>
        </Card>
      </section>

      {area.sections.length > 0 && (<p className="text-xs text-navy-500 dark:text-navy-300">
        {free
          ? tx('Modo libre activo: todos los temas están abiertos.', 'Free mode is on: every topic is open.')
          : tx('Cada tema se abre al dominar el anterior. ¿Ya sabes el tema? Activa el «modo libre» en Configuración.', 'Each topic opens when you master the previous one. Already know it? Turn on "free mode" in Settings.')}
      </p>)}
    </div>
  )
}
