import { ArrowLeft, Lock, Store } from 'lucide-react'
import { BUSINESS_BASE, BUSINESS_PER_TOPIC, getArea, LEVEL_STAGE } from '../content/areas'
import { getLevel } from '../content/curriculum'
import { lessonsOfLevel } from '../content'
import { SubtopicLegend, SubtopicSquares } from '../components/Subtopics'
import { Card, cx } from '../components/ui'
import { areaProgress, isLessonCompleted, isLessonUnlocked, nextLesson, subtopicStates } from '../lib/selectors'
import { useI18n, useStore } from '../state/store'
import NotFound from './NotFound'

export const money = (n: number) => `$${n.toLocaleString('es-MX')}`

export default function AreaPage({ areaId }: { areaId: string }) {
  const { state } = useStore()
  const { t, tx } = useI18n()
  const area = getArea(areaId)
  if (!area) return <NotFound />
  const p = areaProgress(state, area.levels)
  const free = state.settings.freeMode
  const next = nextLesson(state)

  return (
    <div className="space-y-4">
      <a href="#/courses" className="inline-flex items-center gap-1 text-sm font-semibold text-electric-600 dark:text-electric-300">
        <ArrowLeft className="h-4 w-4" /> {tx('Cursos', 'Courses')}
      </a>
      <div className="flex items-end justify-between gap-3">
        <div>
          <p className="text-xs font-bold uppercase tracking-wider text-electric-600 dark:text-electric-300">{tx('Área', 'Area')}</p>
          <h1 className="text-2xl font-bold tracking-tight text-navy-900 dark:text-white">{t(area.title)}</h1>
        </div>
        <p className="tabular text-sm font-semibold text-navy-500 dark:text-navy-300">
          {p.done} {tx('de', 'of')} {p.total} {tx('temas', 'topics')}
        </p>
      </div>

      <div className="flex items-center gap-3 rounded-2xl bg-navy-900 px-4 py-3 text-white dark:bg-navy-950" data-testid="business">
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
      </div>

      <SubtopicLegend tx={tx} />

      {area.levels.map((lv) => {
        const level = getLevel(lv)!
        return (
          <section key={lv}>
            <h2 className="mb-2 text-xs font-bold uppercase tracking-wider text-navy-500 dark:text-navy-300">
              {t(LEVEL_STAGE[lv])} · {t(level.title)}
            </h2>
            <Card className="p-0">
              <ol className="divide-y divide-navy-100 dark:divide-navy-800">
                {lessonsOfLevel(lv).map((l, i) => {
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
                        <span className="tabular w-6 shrink-0 text-xs font-bold text-navy-400">{i + 1}</span>
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
            <a href={`#/exams/${lv}`} className="mt-2 inline-block text-xs font-semibold text-electric-600 dark:text-electric-300">
              {tx('Evaluación del nivel', 'Level exam')}: {t(level.title)}
            </a>
          </section>
        )
      })}

      <p className="text-xs text-navy-500 dark:text-navy-300">
        {free
          ? tx('Modo libre activo: todos los temas están abiertos.', 'Free mode is on: every topic is open.')
          : tx('Cada tema se abre al dominar el anterior. ¿Ya sabes el tema? Activa el «modo libre» en Configuración.', 'Each topic opens when you master the previous one. Already know it? Turn on "free mode" in Settings.')}
      </p>
    </div>
  )
}
