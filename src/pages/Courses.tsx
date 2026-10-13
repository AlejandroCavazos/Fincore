import { BarChart3, BookOpen, Brain, Calculator, ChevronRight, Cpu, Gavel, Globe, Landmark, Lightbulb, PiggyBank, Play, Search, TrendingUp } from 'lucide-react'
import type { ReactNode } from 'react'
import { AREAS, areaOfLesson, type AreaId } from '../content/areas'
import { Card, cx, PageHeader, ProgressBar } from '../components/ui'
import { areaProgress, nextLesson, nextSubtopic, subtopicCount } from '../lib/selectors'
import { useI18n, useStore } from '../state/store'

const ic = 'h-6 w-6'
export const AREA_STYLE: Record<AreaId, { icon: ReactNode; tile: string }> = {
  contabilidad: { icon: <BookOpen className={ic} />, tile: 'bg-electric-500/10 text-electric-600 dark:text-electric-300' },
  costos: { icon: <Calculator className={ic} />, tile: 'bg-amber-500/15 text-amber-700 dark:text-amber-300' },
  fiscal: { icon: <Landmark className={ic} />, tile: 'bg-navy-500/15 text-navy-700 dark:text-navy-200' },
  auditoria: { icon: <Search className={ic} />, tile: 'bg-red-500/10 text-red-700 dark:text-red-300' },
  finanzas: { icon: <TrendingUp className={ic} />, tile: 'bg-money-500/15 text-money-700 dark:text-money-300' },
  personales: { icon: <PiggyBank className={ic} />, tile: 'bg-pink-500/10 text-pink-700 dark:text-pink-300' },
  inversiones: { icon: <BarChart3 className={ic} />, tile: 'bg-violet-500/10 text-violet-700 dark:text-violet-300' },
  cuantitativas: { icon: <Brain className={ic} />, tile: 'bg-cyan-500/10 text-cyan-700 dark:text-cyan-300' },
  economia: { icon: <Globe className={ic} />, tile: 'bg-teal-500/10 text-teal-700 dark:text-teal-300' },
  derecho: { icon: <Gavel className={ic} />, tile: 'bg-orange-500/10 text-orange-700 dark:text-orange-300' },
  tecnologia: { icon: <Cpu className={ic} />, tile: 'bg-sky-500/10 text-sky-700 dark:text-sky-300' },
  emprendimiento: { icon: <Lightbulb className={ic} />, tile: 'bg-yellow-500/15 text-yellow-700 dark:text-yellow-300' },
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
                {t(areaOfLesson(next.id).title)} · {t(next.title)}
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
          const p = areaProgress(state, a)
          const current = next ? areaOfLesson(next.id).id === a.id : false
          const soon = p.total === 0
          return (
            <a key={a.id} href={`#/area/${a.id}`} className="group block">
              <Card className={cx('flex h-full items-center gap-4 transition group-hover:ring-electric-400', current && 'ring-2 ring-electric-500 dark:ring-electric-400')}>
                <span className={cx('flex h-12 w-12 shrink-0 items-center justify-center rounded-xl', AREA_STYLE[a.id].tile)}>{AREA_STYLE[a.id].icon}</span>
                <div className="min-w-0 flex-1">
                  <p className="font-bold text-navy-900 dark:text-white">{t(a.title)}</p>
                  <p className="text-sm text-navy-500 dark:text-navy-300">
                    {soon ? `${a.materias.length} ${tx('temas', 'topics')}` : `${p.total} ${tx('de', 'of')} ${p.total + a.pending.length} ${tx('temas', 'topics')}`} · {t(a.description)}
                  </p>
                  {soon ? (
                    <span className="mt-2 inline-block rounded-full bg-amber-500/15 px-2 py-0.5 text-xs font-bold text-amber-700 dark:text-amber-300">{tx('Próximamente', 'Coming soon')}</span>
                  ) : (
                    <div className="mt-2 flex items-center gap-2">
                      <ProgressBar value={p.ratio} label={t(a.title)} />
                      <span className="tabular shrink-0 text-xs font-semibold text-navy-500 dark:text-navy-300">
                        {p.done}/{p.total}
                      </span>
                    </div>
                  )}
                </div>
                <ChevronRight className="h-5 w-5 shrink-0 text-navy-300 transition group-hover:translate-x-0.5" />
              </Card>
            </a>
          )
        })}
      </div>
      <p className="mt-4 text-center text-xs text-navy-500 dark:text-navy-300">
        {tx('Puedes empezar en cualquier área. El primer tema de cada unidad siempre está abierto.', 'You can start in any area. The first topic of each unit is always open.')}
      </p>
    </div>
  )
}
