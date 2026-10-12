import { ArrowLeft, Brain, Dumbbell, RotateCcw, Shuffle } from 'lucide-react'
import { LEVELS } from '../content/curriculum'
import { EXERCISES, exercisesOfLevel, getExercise } from '../content'
import { ExerciseRunner } from '../components/ExerciseRunner'
import { Badge, Button, Card, PageHeader, SectionTitle } from '../components/ui'
import { competencyStats, dueCards } from '../lib/progress'
import { fisherYates } from '../lib/shuffle'
import { navigate } from '../state/router'
import { useI18n, useStore } from '../state/store'
import type { LevelId } from '../types'

const REVIEW_MAX = 15

export default function Practice({ mode }: { mode?: string }) {
  const { state, update } = useStore()
  const { t, tx } = useI18n()
  const due = dueCards(state)

  if (mode === 'review') {
    return (
      <div>
        <a href="#/practice" className="mb-3 inline-flex items-center gap-1 text-sm font-semibold text-electric-600 dark:text-electric-300">
          <ArrowLeft className="h-4 w-4" /> {tx('Práctica', 'Practice')}
        </a>
        <PageHeader title={tx('Repaso espaciado', 'Spaced review')} subtitle={tx('Las tarjetas vuelven en intervalos crecientes cuando las aciertas (algoritmo tipo SM-2).', 'Cards come back at growing intervals when you get them right (SM-2-style algorithm).')} />
        {!state.attempts.review || state.attempts.review.finishedAt ? (
          due.length === 0 && !state.attempts.review ? (
            <Card>{tx('No tienes tarjetas pendientes. Completa lecciones para alimentar tu repaso.', 'No cards due. Complete lessons to feed your review queue.')}</Card>
          ) : null
        ) : null}
        {(due.length > 0 || state.attempts.review) && (
          <ExerciseRunner
            sessionKey="review"
            mode="review"
            exercises={() => dueCards(state).slice(0, REVIEW_MAX).map((id) => getExercise(id)!).filter(Boolean)}
            shuffleExercises
            onExit={() => navigate('/practice')}
            exitLabel={tx('Volver a práctica', 'Back to practice')}
          />
        )}
      </div>
    )
  }

  if (mode === 'level' || mode?.startsWith('n')) {
    const lvl = Number(mode.replace('n', '')) as LevelId
    const level = LEVELS.find((l) => l.id === lvl)
    if (!level) return null
    return (
      <div>
        <a href="#/practice" className="mb-3 inline-flex items-center gap-1 text-sm font-semibold text-electric-600 dark:text-electric-300">
          <ArrowLeft className="h-4 w-4" /> {tx('Práctica', 'Practice')}
        </a>
        <PageHeader title={`${tx('Práctica libre', 'Free practice')} · ${level.code}`} subtitle={t(level.title)} />
        <ExerciseRunner
          sessionKey={`practice:${lvl}`}
          mode="review"
          exercises={() => fisherYates(exercisesOfLevel(lvl)).slice(0, 10)}
          onExit={() => navigate('/practice')}
          exitLabel={tx('Volver a práctica', 'Back to practice')}
        />
      </div>
    )
  }

  const weak = competencyStats(state, (id) => getExercise(id)?.competency).filter((c) => c.total >= 2 && c.accuracy < 0.7).slice(0, 5)
  const startWeak = () => {
    const comps = new Set(weak.map((w) => w.competency))
    const pool = EXERCISES.filter((e) => comps.has(e.competency))
    update((s) => {
      const { practice_weak: _drop, ...rest } = s.attempts
      void _drop
      return { ...s, attempts: rest }
    })
    sessionStorage.setItem('fincore-weak', JSON.stringify(fisherYates(pool).slice(0, 10).map((e) => e.id)))
    navigate('/practice/weak')
  }

  if (mode === 'weak') {
    let ids: string[] = []
    try {
      ids = JSON.parse(sessionStorage.getItem('fincore-weak') ?? '[]')
    } catch {
      ids = []
    }
    return (
      <div>
        <a href="#/practice" className="mb-3 inline-flex items-center gap-1 text-sm font-semibold text-electric-600 dark:text-electric-300">
          <ArrowLeft className="h-4 w-4" /> {tx('Práctica', 'Practice')}
        </a>
        <PageHeader title={tx('Refuerza tus puntos débiles', 'Strengthen weak spots')} />
        <ExerciseRunner sessionKey="practice_weak" mode="review" exercises={() => ids.map((id) => getExercise(id)!).filter(Boolean)} onExit={() => navigate('/practice')} />
      </div>
    )
  }

  return (
    <div>
      <PageHeader title={tx('Práctica y repaso', 'Practice & review')} subtitle={tx('Ejercicios aleatorios, repetición espaciada y refuerzo por competencia.', 'Random exercises, spaced repetition and competency reinforcement.')} />
      <a href="#/practice/review" className="block">
        <Card className="flex items-center gap-4 transition hover:ring-electric-400">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-money-500 text-white">
            <RotateCcw className="h-6 w-6" />
          </div>
          <div className="flex-1">
            <p className="font-semibold text-navy-900 dark:text-white">{tx('Repaso de hoy', "Today's review")}</p>
            <p className="text-sm text-navy-500 dark:text-navy-300">
              {due.length ? tx(`${due.length} pendiente(s) · máx. ${REVIEW_MAX} por sesión`, `${due.length} due · max ${REVIEW_MAX} per session`) : tx('Sin pendientes', 'Nothing due')}
            </p>
          </div>
          <Badge tone="money">{due.length}</Badge>
        </Card>
      </a>

      {weak.length > 0 && (
        <Card className="mt-3">
          <div className="flex items-center gap-2 font-semibold text-navy-900 dark:text-white">
            <Brain className="h-5 w-5 text-electric-500" /> {tx('Competencias por reforzar', 'Competencies to reinforce')}
          </div>
          <ul className="mt-2 space-y-1 text-sm">
            {weak.map((w) => (
              <li key={w.competency} className="flex justify-between text-navy-600 dark:text-navy-300">
                <span>{w.competency}</span>
                <span className="tabular font-semibold">{Math.round(w.accuracy * 100)} %</span>
              </li>
            ))}
          </ul>
          <Button className="mt-3" onClick={startWeak}>
            <Dumbbell className="h-4 w-4" /> {tx('Practicar estas competencias', 'Practice these competencies')}
          </Button>
        </Card>
      )}

      <SectionTitle>{tx('Práctica libre por nivel', 'Free practice by level')}</SectionTitle>
      <p className="mb-3 text-sm text-navy-500 dark:text-navy-300">
        {tx('10 ejercicios al azar. Cada sesión mezcla de nuevo preguntas y opciones.', '10 random exercises. Every session reshuffles questions and options.')}
      </p>
      <div className="grid gap-3 sm:grid-cols-2">
        {LEVELS.map((l) => (
          <button
            key={l.id}
            type="button"
            onClick={() => {
              update((s) => {
                const key = `practice:${l.id}`
                if (!s.attempts[key]?.finishedAt) return s
                const { [key]: _x, ...rest } = s.attempts
                void _x
                return { ...s, attempts: rest }
              })
              navigate(`/practice/n${l.id}`)
            }}
            className="text-left"
          >
            <Card className="flex items-center gap-3 transition hover:ring-electric-400">
              <Shuffle className="h-5 w-5 text-electric-500" />
              <div className="flex-1">
                <p className="font-semibold text-navy-900 dark:text-white">
                  {l.code} · {t(l.title)}
                </p>
                <p className="text-xs text-navy-500">
                  {exercisesOfLevel(l.id).length} {tx('ejercicios en el banco', 'exercises in the bank')}
                </p>
              </div>
            </Card>
          </button>
        ))}
      </div>
    </div>
  )
}
