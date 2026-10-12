import { BookOpen, Calculator, ChevronRight, Landmark, Play, TrendingUp } from 'lucide-react'
import type { ReactNode } from 'react'
import { AREAS, areaOfLevel, type AreaId } from '../content/areas'
import { Card, cx, PageHeader, ProgressBar } from '../components/ui'
import { areaProgress, lessonsOfArea, nextLesson, nextSubtopic, subtopicCount } from '../lib/selectors'
import { useI18n, useStore } from '../state/store'

const ic = 'h-6 w-6'
export const AREA_STYLE: Record<AreaId, { icon: ReactNode; tile: string }> = {
  contabilidad: { icon: <BookOpen className={ic} />, tile: 'bg-electric-500/10 text-electric-600 dark:text-electric-300' },
  costos: { icon: <Calculator className={ic} />, tile: 'bg-amber-500/15 text-amber-700 dark:text-amber-300' },
  finanzas: { icon: <TrendingUp className={ic} />, tile: 'bg-money-500/15 text-money-700 dark:text-money-300' },
  fiscal: { icon: <Landmark className={ic} />, tile: 'bg-navy-500/15 text-navy-700 dark:text-navy-200' },
}

export default function Courses() {
  const { state } = useStore()
  const { t, tx } = useI18n()
  const next = nextLesson(state)
  const sub = next ? nextSubtopic(state, next) : 0
  const isReto = next ? sub === subtopicCount(next) - 1 : false

  return (
    <div>
      <PageHeader title={tx('Cursos', 'Courses')} subtitle={tx('Elige un área. Cada tema se divide en subtemas cortos de pocos minutos.', 'Pick an area. Each topic is split into short subtopics of a few minutes.')} />

      {next && (
        <a href={isReto ? `#/lesson/${next.id}?tab=practice` : `#/lesson/${next.id}?s=${sub}`} className="mb-5 block" data-testid="continue-card">
          <div className="flex items-center gap-4 rounded-2xl bg-electric-500 p-4 text-white shadow-sm shadow-electric-500/30 transition hover:bg-electric-600">
            <div className="min-w-0 flex-1">
              <p className="text-xs font-bold uppercase tracking-wider text-white/85">{tx('Sigue donde te quedaste', 'Pick up where you left off')}</p>
              <p className="mt-0.5 truncate text-lg font-bold">{isReto ? tx('Reto del tema', 'Topic challenge') : t(next.theory[sub].heading)}</p>
              <p className="truncate text-sm text-white/90">
                {t(areaOfLevel(next.level).title)} · {t(next.title)}
              </p>
            </div>
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-electric-600">
              <Play className="h-5 w-5 fill-current" />
            </span>
          </div>
        </a>
      )}

      <h2 className="mb-2 text-xs font-bold uppercase tracking-wider text-navy-500 dark:text-navy-300">{tx('Áreas', 'Areas')}</h2>
      <div className="grid gap-3 sm:grid-cols-2">
        {AREAS.map((a) => {
          const p = areaProgress(state, a.levels)
          const current = next ? a.levels.includes(next.level) : false
          return (
            <a key={a.id} href={`#/area/${a.id}`} className="group block">
              <Card className={cx('flex h-full items-center gap-4 transition group-hover:ring-electric-400', current && 'ring-2 ring-electric-500 dark:ring-electric-400')}>
                <span className={cx('flex h-12 w-12 shrink-0 items-center justify-center rounded-xl', AREA_STYLE[a.id].tile)}>{AREA_STYLE[a.id].icon}</span>
                <div className="min-w-0 flex-1">
                  <p className="font-bold text-navy-900 dark:text-white">{t(a.title)}</p>
                  <p className="text-sm text-navy-500 dark:text-navy-300">
                    {lessonsOfArea(a.levels).length} {tx('temas', 'topics')} · {t(a.description)}
                  </p>
                  <div className="mt-2 flex items-center gap-2">
                    <ProgressBar value={p.ratio} label={t(a.title)} />
                    <span className="tabular shrink-0 text-xs font-semibold text-navy-500 dark:text-navy-300">
                      {p.done}/{p.total}
                    </span>
                  </div>
                </div>
                <ChevronRight className="h-5 w-5 shrink-0 text-navy-300 transition group-hover:translate-x-0.5" />
              </Card>
            </a>
          )
        })}
      </div>
      <p className="mt-4 text-center text-xs text-navy-500 dark:text-navy-300">
        {tx('Puedes empezar en cualquier área. El primer tema de cada nivel siempre está abierto.', 'You can start in any area. The first topic of each level is always open.')}
      </p>
    </div>
  )
}
