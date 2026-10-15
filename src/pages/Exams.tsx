import { useState } from 'react'
import { ArrowLeft, GraduationCap } from 'lucide-react'
import { LEVELS } from '../content/curriculum'
import { exercisesOfLevel } from '../content'
import { ExerciseRunner } from '../components/ExerciseRunner'
import { Badge, Button, Card, Notice, PageHeader } from '../components/ui'
import { EXAM_MIN_TEXT } from '../components/lives/text'
import { planLives, LIVES } from '../config/lives'
import { useLives } from '../state/lives'
import { EXAM_PASS } from '../lib/progress'
import { fisherYates } from '../lib/shuffle'
import { navigate } from '../state/router'
import { useI18n, useStore } from '../state/store'
import type { LevelId } from '../types'

const EXAM_SIZE = 12

export default function Exams({ levelId }: { levelId?: number }) {
  const { state, update } = useStore()
  const { t, tx } = useI18n()
  const lv = useLives()
  const [run, setRun] = useState<'official' | 'mock' | 'gate' | null>(null)

  if (levelId) {
    const level = LEVELS.find((l) => l.id === levelId)
    if (!level) return null
    const key = `exam:${level.id}`
    const mockKey = `sim:${level.id}`
    const active = (k: string) => !!state.attempts[k] && !state.attempts[k].finishedAt
    // Without a choice yet: resume a running attempt or show the last official result.
    const current = run === 'gate' ? null : (run ?? (active(mockKey) ? 'mock' : state.attempts[key] ? 'official' : null))
    const begin = (which: 'official' | 'mock') => {
      const k = which === 'official' ? key : mockKey
      if (which === 'official' && !active(key) && !lv.recordOfficial(key)) return
      update((s) => {
        const a = { ...s.attempts }
        if (a[k]?.finishedAt) delete a[k]
        return { ...s, attempts: a }
      })
      setRun(which)
    }
    const gate = lv.canStart('areaExam')
    const left = lv.officialLeft(key)
    const freeAt = lv.officialFreeAt(key)
    const mock = planLives(lv.plan).mockExams
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
          {current ? (
            <ExerciseRunner
              key={current}
              sessionKey={current === 'official' ? key : mockKey}
              mode={current === 'official' ? 'exam' : 'review'}
              lives={current === 'official' ? 'eval' : null}
              exercises={() => fisherYates(exercisesOfLevel(level.id as LevelId)).slice(0, EXAM_SIZE)}
              onExit={() => navigate('/exams')}
              onNewAttempt={() => setRun('gate')}
              exitLabel={tx('Volver a evaluaciones', 'Back to exams')}
            />
          ) : (
            <Card data-testid="exam-start" className="space-y-3">
              {mock && (
                <div>
                  <Button variant="secondary" className="w-full" onClick={() => begin('mock')}>
                    Simulacro de práctica
                  </Button>
                  <p className="mt-1 text-xs text-navy-500 dark:text-navy-300">Mismo formato que el examen, con retroalimentación en cada respuesta. Intentos ilimitados; no cuenta para tu certificado.</p>
                </div>
              )}
              <div>
                <Button className="w-full" size="lg" disabled={!gate.ok || left === 0} onClick={() => begin('official')}>
                  {mock ? 'Examen oficial' : 'Iniciar examen'}
                </Button>
                {!gate.ok && <p className="mt-1 text-xs text-navy-500 dark:text-navy-300">{EXAM_MIN_TEXT(gate.need)}</p>}
                {left !== null && (
                  <p className="mt-1 text-xs text-navy-500 dark:text-navy-300">
                    {left > 0
                      ? `Te quedan ${left} de ${LIVES.officialExam.maxAttempts} intentos oficiales en estos 7 días.`
                      : `Ya usaste tus ${LIVES.officialExam.maxAttempts} intentos de esta semana. Podrás intentarlo de nuevo el ${freeAt?.toLocaleDateString('es-MX', { day: 'numeric', month: 'long' })}.`}
                  </p>
                )}
                {lv.plan !== 'pro' && <p className="mt-1 text-xs text-navy-500 dark:text-navy-300">Cada respuesta incorrecta cuesta 1 vida.</p>}
              </div>
            </Card>
          )}
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
