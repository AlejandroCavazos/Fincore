import { ArrowLeft, Check, Clock, GraduationCap, Lock, Play } from 'lucide-react'
import { getLevel } from '../content/curriculum'
import { lessonForTopic, lessonsOfLevel } from '../content'
import { Badge, Card, cx, ProgressBar, SectionTitle } from '../components/ui'
import { isLessonCompleted, isLessonUnlocked, levelProgress } from '../lib/selectors'
import { useI18n, useStore } from '../state/store'
import type { LevelId } from '../types'
import NotFound from './NotFound'

export default function PathPage({ levelId }: { levelId: number }) {
  const { state } = useStore()
  const { t, tx } = useI18n()
  const level = getLevel(levelId)
  if (!level) return <NotFound />
  const lessons = lessonsOfLevel(level.id as LevelId)
  const p = levelProgress(state, level.id)
  const free = state.settings.freeMode

  return (
    <div>
      <a href="#/courses" className="mb-3 inline-flex items-center gap-1 text-sm font-semibold text-electric-600 dark:text-electric-300">
        <ArrowLeft className="h-4 w-4" /> {tx('Cursos', 'Courses')}
      </a>
      <Card className="bg-gradient-to-br from-navy-800 to-navy-950 text-white ring-0">
        <Badge className="bg-white/15 text-white">
          {tx('Ruta de aprendizaje', 'Learning path')} · {level.code}
        </Badge>
        <h1 className="mt-2 text-2xl font-bold">{t(level.title)}</h1>
        <p className="mt-1 text-sm text-navy-200">{t(level.description)}</p>
        <div className="mt-3 flex items-center gap-3">
          <ProgressBar value={p.ratio} tone="money" className="bg-white/10 dark:bg-white/10" label={t(level.title)} />
          <span className="tabular shrink-0 text-sm font-semibold">
            {p.done}/{p.total}
          </span>
        </div>
      </Card>

      <SectionTitle>{tx('Lecciones', 'Lessons')}</SectionTitle>
      <ol className="relative space-y-3 before:absolute before:bottom-6 before:left-6 before:top-6 before:w-0.5 before:bg-navy-200 dark:before:bg-navy-800">
        {lessons.map((l, i) => {
          const done = isLessonCompleted(state, l.id)
          const unlocked = isLessonUnlocked(state, l, free)
          const lp = state.lessons[l.id]
          const content = (
            <Card className={cx('relative flex items-center gap-4 transition', unlocked ? 'hover:ring-electric-400' : 'opacity-60')}>
              <div
                className={cx(
                  'z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-white',
                  done ? 'bg-money-500' : unlocked ? 'bg-electric-500' : 'bg-navy-300 dark:bg-navy-700',
                )}
              >
                {done ? <Check className="h-6 w-6" /> : unlocked ? <Play className="h-5 w-5" /> : <Lock className="h-5 w-5" />}
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-xs font-semibold text-navy-400">
                  {tx('Lección', 'Lesson')} {i + 1} · <Clock className="inline h-3 w-3" /> {l.minutes} min
                </p>
                <p className="font-semibold text-navy-900 dark:text-white">{t(l.title)}</p>
                <p className="line-clamp-2 text-sm text-navy-500 dark:text-navy-300">{t(l.summary)}</p>
                {lp && (
                  <p className="mt-1 text-xs font-semibold text-money-600 dark:text-money-300">
                    {tx('Mejor puntaje', 'Best score')}: {Math.round(lp.bestScore * 100)} %
                  </p>
                )}
              </div>
            </Card>
          )
          return (
            <li key={l.id}>
              {unlocked ? (
                <a href={`#/lesson/${l.id}`} className="block" aria-label={`${t(l.title)}${done ? tx(' (completada)', ' (completed)') : ''}`}>
                  {content}
                </a>
              ) : (
                <div aria-disabled="true" title={tx('Completa la lección anterior para desbloquear', 'Complete the previous lesson to unlock')}>
                  {content}
                  <span className="sr-only">{tx('Bloqueada: completa la lección anterior.', 'Locked: complete the previous lesson.')}</span>
                </div>
              )}
            </li>
          )
        })}
      </ol>
      {!free && (
        <p className="mt-3 text-xs text-navy-500 dark:text-navy-300">
          {tx('¿Ya dominas el tema? Activa el «modo libre» en Configuración para desbloquear todas las lecciones.', 'Already know the topic? Turn on "free mode" in Settings to unlock every lesson.')}
        </p>
      )}

      <SectionTitle>{tx('Temas del nivel', 'Level topics')}</SectionTitle>
      <Card>
        <ul className="divide-y divide-navy-100 dark:divide-navy-800">
          {level.topics.map((tp) => {
            const lesson = lessonForTopic(tp.id)
            return (
              <li key={tp.id} className="flex items-center justify-between gap-2 py-2 text-sm">
                <span className="text-navy-700 dark:text-navy-100">
                  <span className="tabular mr-2 text-navy-400">{tp.id}</span>
                  {t(tp.title)}
                </span>
                {lesson ? (
                  isLessonCompleted(state, lesson.id) ? (
                    <Badge tone="money">{tx('Completado', 'Done')}</Badge>
                  ) : (
                    <Badge tone="electric">{tx('Disponible', 'Available')}</Badge>
                  )
                ) : (
                  <Badge tone="amber">{tx('Próximamente', 'Coming soon')}</Badge>
                )}
              </li>
            )
          })}
        </ul>
      </Card>

      <a href={`#/exams/${level.id}`} className="mt-4 block">
        <Card className="flex items-center gap-3 transition hover:ring-electric-400">
          <GraduationCap className="h-6 w-6 text-electric-500" />
          <div className="flex-1">
            <p className="font-semibold text-navy-900 dark:text-white">{tx('Evaluación del nivel', 'Level exam')}</p>
            <p className="text-sm text-navy-500 dark:text-navy-300">{tx('Preguntas aleatorias de todo el nivel.', 'Random questions from the whole level.')}</p>
          </div>
        </Card>
      </a>
    </div>
  )
}
