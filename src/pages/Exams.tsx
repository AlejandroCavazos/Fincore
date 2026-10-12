import { ArrowLeft, GraduationCap } from 'lucide-react'
import { LEVELS } from '../content/curriculum'
import { exercisesOfLevel } from '../content'
import { ExerciseRunner } from '../components/ExerciseRunner'
import { Badge, Card, Notice, PageHeader } from '../components/ui'
import { EXAM_PASS } from '../lib/progress'
import { fisherYates } from '../lib/shuffle'
import { navigate } from '../state/router'
import { useI18n, useStore } from '../state/store'
import type { LevelId } from '../types'

const EXAM_SIZE = 12

export default function Exams({ levelId }: { levelId?: number }) {
  const { state } = useStore()
  const { t, tx } = useI18n()

  if (levelId) {
    const level = LEVELS.find((l) => l.id === levelId)
    if (!level) return null
    const key = `exam:${level.id}`
    return (
      <div>
        <a href="#/exams" className="mb-3 inline-flex items-center gap-1 text-sm font-semibold text-electric-600 dark:text-electric-300">
          <ArrowLeft className="h-4 w-4" /> {tx('Evaluaciones', 'Exams')}
        </a>
        <PageHeader title={`${tx('Evaluación', 'Exam')} ${level.code}`} subtitle={t(level.title)} />
        <Notice>
          {tx(
            `${EXAM_SIZE} preguntas al azar del nivel. No verás si acertaste hasta terminar. Aprobación: ${EXAM_PASS * 100} %. Cada intento genera una nueva selección y un nuevo orden de opciones.`,
            `${EXAM_SIZE} random questions from the level. You will not see results until the end. Pass mark: ${EXAM_PASS * 100} %. Each attempt draws a new selection and option order.`,
          )}
        </Notice>
        <div className="mt-4">
          <ExerciseRunner
            sessionKey={key}
            mode="exam"
            exercises={() => fisherYates(exercisesOfLevel(level.id as LevelId)).slice(0, EXAM_SIZE)}
            onExit={() => navigate('/exams')}
            exitLabel={tx('Volver a evaluaciones', 'Back to exams')}
          />
        </div>
      </div>
    )
  }

  return (
    <div>
      <PageHeader title={tx('Evaluaciones', 'Exams')} subtitle={tx('Comprueba tu dominio de cada nivel.', 'Check your mastery of each level.')} />
      <div className="grid gap-3 sm:grid-cols-2">
        {LEVELS.map((l) => {
          const results = state.exams[`exam:${l.id}`] ?? []
          const best = results.reduce((m, r) => Math.max(m, r.score), 0)
          const passed = results.some((r) => r.passed)
          return (
            <a key={l.id} href={`#/exams/${l.id}`}>
              <Card className="flex items-center gap-3 transition hover:ring-electric-400">
                <GraduationCap className="h-6 w-6 text-electric-500" />
                <div className="flex-1">
                  <p className="font-semibold text-navy-900 dark:text-white">
                    {l.code} · {t(l.title)}
                  </p>
                  <p className="text-xs text-navy-500">
                    {results.length ? `${tx('Mejor', 'Best')}: ${Math.round(best * 100)} % · ${results.length} ${tx('intento(s)', 'attempt(s)')}` : tx('Sin intentos', 'No attempts yet')}
                  </p>
                </div>
                {passed && <Badge tone="money">{tx('Aprobado', 'Passed')}</Badge>}
              </Card>
            </a>
          )
        })}
      </div>
    </div>
  )
}
