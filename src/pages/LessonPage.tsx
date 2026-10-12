import { ArrowLeft, ArrowRight, BookOpen, Dumbbell, Lightbulb, Lock, Scale, Target } from 'lucide-react'
import { getLevel } from '../content/curriculum'
import { exercisesOfLesson, getLesson, lessonsOfLevel } from '../content'
import { ExerciseRunner } from '../components/ExerciseRunner'
import { Badge, Button, Card, Notice, Rich, SectionTitle, Segmented } from '../components/ui'
import { isLessonUnlocked } from '../lib/selectors'
import { navigate } from '../state/router'
import { useI18n, useStore } from '../state/store'
import NotFound from './NotFound'

export default function LessonPage({ lessonId, tab }: { lessonId: string; tab: string | null }) {
  const { state } = useStore()
  const { t, tx } = useI18n()
  const lesson = getLesson(lessonId)
  if (!lesson) return <NotFound />
  const level = getLevel(lesson.level)!
  const exercises = exercisesOfLesson(lesson)
  const unlocked = isLessonUnlocked(state, lesson, state.settings.freeMode)
  const current = tab === 'practice' ? 'practice' : 'theory'
  const siblings = lessonsOfLevel(lesson.level)
  const next = siblings[siblings.findIndex((l) => l.id === lesson.id) + 1]
  const setTab = (v: 'theory' | 'practice') => navigate(`/lesson/${lesson.id}${v === 'practice' ? '?tab=practice' : ''}`)

  return (
    <div className="space-y-4">
      <a href={`#/path/${lesson.level}`} className="inline-flex items-center gap-1 text-sm font-semibold text-electric-600 dark:text-electric-300">
        <ArrowLeft className="h-4 w-4" /> {level.code} · {t(level.title)}
      </a>
      <div>
        <div className="flex flex-wrap gap-2">
          <Badge tone="electric">{lesson.id}</Badge>
          <Badge>{lesson.minutes} min</Badge>
          <Badge tone="money">
            {exercises.length} {tx('ejercicios', 'exercises')}
          </Badge>
        </div>
        <h1 className="mt-2 text-2xl font-bold tracking-tight text-navy-900 dark:text-white">{t(lesson.title)}</h1>
        <p className="mt-1 text-navy-500 dark:text-navy-300">{t(lesson.summary)}</p>
      </div>

      {!unlocked ? (
        <Card className="flex items-start gap-3">
          <Lock className="mt-0.5 h-5 w-5 text-navy-400" />
          <div>
            <p className="font-semibold text-navy-900 dark:text-white">{tx('Lección bloqueada', 'Lesson locked')}</p>
            <p className="text-sm text-navy-500 dark:text-navy-300">
              {tx('Completa la lección anterior de este nivel, o activa el modo libre en Configuración.', 'Complete the previous lesson in this level, or turn on free mode in Settings.')}
            </p>
            <a href="#/settings" className="mt-2 inline-block text-sm font-semibold text-electric-600">
              {tx('Ir a Configuración', 'Go to Settings')}
            </a>
          </div>
        </Card>
      ) : (
        <>
          <Segmented
            label={tx('Sección de la lección', 'Lesson section')}
            value={current}
            onChange={setTab}
            options={[
              { value: 'theory', label: tx('1. Teoría', '1. Theory') },
              { value: 'practice', label: tx('2. Práctica', '2. Practice') },
            ]}
          />

          {current === 'theory' ? (
            <article className="space-y-4">
              <Card>
                <h2 className="mb-2 flex items-center gap-2 font-semibold text-navy-900 dark:text-white">
                  <Target className="h-5 w-5 text-electric-500" /> {tx('Objetivos de aprendizaje', 'Learning objectives')}
                </h2>
                <ul className="list-disc space-y-1 pl-5 text-[15px] text-navy-700 dark:text-navy-200">
                  {lesson.objectives.map((o, i) => (
                    <li key={i}>{t(o)}</li>
                  ))}
                </ul>
              </Card>

              {lesson.theory.map((sec, i) => (
                <Card key={i} as="section">
                  <h2 className="mb-2 flex items-center gap-2 text-lg font-semibold text-navy-900 dark:text-white">
                    <BookOpen className="h-5 w-5 shrink-0 text-electric-500" /> {t(sec.heading)}
                  </h2>
                  <div className="space-y-2 text-[15px] leading-relaxed text-navy-700 dark:text-navy-200">
                    {sec.body.map((p, k) => (
                      <p key={k}>
                        <Rich text={t(p)} />
                      </p>
                    ))}
                  </div>
                  {sec.formula && (
                    <div className="mt-3 overflow-x-auto whitespace-pre rounded-xl bg-navy-900 px-4 py-3 font-mono text-sm text-electric-300 dark:bg-navy-950">{sec.formula}</div>
                  )}
                  {sec.bullets && (
                    <ul className="mt-3 list-disc space-y-1 pl-5 text-[15px] text-navy-700 dark:text-navy-200">
                      {sec.bullets.map((b, k) => (
                        <li key={k}>
                          <Rich text={t(b)} />
                        </li>
                      ))}
                    </ul>
                  )}
                </Card>
              ))}

              <SectionTitle>{tx('Ejemplos resueltos', 'Worked examples')}</SectionTitle>
              {lesson.examples.map((ex, i) => (
                <Card key={i} className="border-l-4 border-money-500">
                  <h3 className="font-semibold text-navy-900 dark:text-white">{t(ex.title)}</h3>
                  <p className="mt-1 whitespace-pre-line text-[15px] text-navy-700 dark:text-navy-200">
                    <Rich text={t(ex.problem)} />
                  </p>
                  <ol className="mt-3 space-y-1.5">
                    {ex.steps.map((s, k) => (
                      <li key={k} className="flex gap-2 text-sm text-navy-700 dark:text-navy-200">
                        <span className="tabular flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-navy-100 text-[11px] font-bold dark:bg-navy-800">{k + 1}</span>
                        <span className="whitespace-pre-line">
                          <Rich text={t(s)} />
                        </span>
                      </li>
                    ))}
                  </ol>
                  <p className="mt-3 rounded-lg bg-money-500/10 px-3 py-2 text-sm font-semibold text-money-800 dark:text-money-200">
                    <Rich text={t(ex.result)} />
                  </p>
                </Card>
              ))}

              <Card>
                <h2 className="mb-2 flex items-center gap-2 font-semibold text-navy-900 dark:text-white">
                  <Lightbulb className="h-5 w-5 text-amber-500" /> {tx('Puntos clave', 'Key points')}
                </h2>
                <ul className="list-disc space-y-1 pl-5 text-[15px] text-navy-700 dark:text-navy-200">
                  {lesson.keyPoints.map((k, i) => (
                    <li key={i}>
                      <Rich text={t(k)} />
                    </li>
                  ))}
                </ul>
              </Card>

              {lesson.normativeNote && (
                <Notice tone="warning" title={tx('Nota normativa', 'Regulatory note')}>
                  <span className="flex gap-2">
                    <Scale className="mt-0.5 h-4 w-4 shrink-0" />
                    <Rich text={t(lesson.normativeNote)} />
                  </span>
                </Notice>
              )}

              <Button size="lg" className="w-full" onClick={() => setTab('practice')}>
                <Dumbbell className="h-5 w-5" /> {tx('Ir a la práctica', 'Go to practice')}
              </Button>
            </article>
          ) : (
            <ExerciseRunner
              sessionKey={lesson.id}
              exercises={exercises}
              mode="lesson"
              onExit={() => navigate(next ? `/lesson/${next.id}` : `/path/${lesson.level}`)}
              exitLabel={next ? tx('Siguiente lección', 'Next lesson') : tx('Volver a la ruta', 'Back to path')}
            />
          )}
          {current === 'practice' && (
            <button type="button" onClick={() => setTab('theory')} className="inline-flex items-center gap-1 text-sm font-semibold text-electric-600 dark:text-electric-300">
              <ArrowLeft className="h-4 w-4" /> {tx('Repasar la teoría', 'Review the theory')}
            </button>
          )}
          {next && current === 'theory' && (
            <a href={`#/lesson/${next.id}`} className="flex items-center justify-end gap-1 text-sm font-semibold text-navy-500 dark:text-navy-300">
              {tx('Siguiente', 'Next')}: {t(next.title)} <ArrowRight className="h-4 w-4" />
            </a>
          )}
        </>
      )}
    </div>
  )
}
