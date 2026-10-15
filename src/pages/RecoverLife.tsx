import { useMemo, useState } from 'react'
import { ArrowLeft, HeartPulse } from 'lucide-react'
import { LIVES } from '../config/lives'
import { exercisesOfLesson, getLesson, LESSONS } from '../content'
import { ExerciseView } from '../components/ExerciseView'
import { Button, Card, PageHeader, Rich } from '../components/ui'
import { REVIEW_LIMIT_TEXT } from '../components/lives/text'
import { createAttempt, emptyAnswer, evaluate, isAnswerComplete } from '../lib/engine'
import { canRecover, recoveryLeft } from '../lib/lives/service'
import { fisherYates } from '../lib/shuffle'
import { livesCtx, useLives } from '../state/lives'
import { useI18n, useStore } from '../state/store'
import type { Answer, Evaluation, Exercise } from '../types'

/** Recovery review: short summary + 3 questions of the topic. Costs no lives and works with 0 lives. */
export default function RecoverLife({ topic }: { topic?: string | null }) {
  const lv = useLives()
  const { state } = useStore()
  const { t } = useI18n()
  const lesson = getLesson(topic ?? '') ?? getLesson(lv.s.lastFailedTopic ?? '') ?? getLesson(lv.s.lastStudiedTopic ?? '') ?? LESSONS[0]
  const ctx = livesCtx(lesson.id)
  const [round, setRound] = useState(0)
  const [used, setUsed] = useState<string[]>([])

  // Prefer questions the learner did not just fail (and not ones already used here).
  const questions = useMemo(() => {
    const failed = new Set(Object.values(state.attempts).flatMap((a) => Object.entries(a?.responses ?? {}).filter(([, r]) => !r.evaluation.correct).map(([id]) => id)))
    const pool = fisherYates(exercisesOfLesson(lesson))
    const rank = (e: Exercise) => (used.includes(e.id) ? 2 : failed.has(e.id) ? 1 : 0)
    return [...pool].sort((a, b) => rank(a) - rank(b)).slice(0, LIVES.recovery.questions)
  }, [lesson.id, round]) // eslint-disable-line react-hooks/exhaustive-deps
  const attempt = useMemo(() => createAttempt(`recover:${lesson.id}:${round}`, questions), [questions]) // eslint-disable-line react-hooks/exhaustive-deps

  const [answers, setAnswers] = useState<Record<string, Answer>>({})
  const [evals, setEvals] = useState<Record<string, Evaluation>>({})
  const [outcome, setOutcome] = useState<'gained' | 'failed' | null>(null)

  const back = (
    <button type="button" onClick={() => history.back()} className="mb-3 inline-flex items-center gap-1 text-sm font-semibold text-electric-600 dark:text-electric-300">
      <ArrowLeft className="h-4 w-4" /> Volver
    </button>
  )

  if (lv.unlimited) return <div>{back}<Card>Con tu plan tienes vidas ilimitadas. ¡Sigue practicando!</Card></div>
  if (!outcome && lv.s.lives >= lv.max) return <div>{back}<Card>Tus vidas están llenas. ¡Aprovecha para practicar!</Card></div>
  if (!outcome && !canRecover(lv.s))
    return (
      <div>
        {back}
        <Card data-testid="recover-limit">{recoveryLeft(lv.s) === 0 ? REVIEW_LIMIT_TEXT : 'Por ahora no puedes recuperar vidas con un repaso.'}</Card>
      </div>
    )

  const correct = questions.filter((q) => evals[q.id]?.correct).length
  const allDone = questions.every((q) => evals[q.id])
  const submit = (q: Exercise) => {
    const a = answers[q.id] ?? emptyAnswer(q)
    if (!isAnswerComplete(q, a)) return
    setEvals((m) => ({ ...m, [q.id]: evaluate(q, a) }))
  }
  const finish = () => {
    const gained = lv.finishRecovery(correct, ctx)
    setOutcome(gained ? 'gained' : 'failed')
  }
  const retry = () => {
    setUsed((u) => [...u, ...questions.map((q) => q.id)])
    setAnswers({})
    setEvals({})
    setOutcome(null)
    setRound((r) => r + 1)
  }

  return (
    <div className="space-y-4">
      {back}
      <PageHeader title="Repaso para recuperar una vida" subtitle={`${t(lesson.title)} · acierta ${LIVES.recovery.toPass} de ${LIVES.recovery.questions}. Este repaso no cuesta vidas.`} />
      <Card>
        <h2 className="mb-2 flex items-center gap-2 font-semibold text-navy-900 dark:text-white">
          <HeartPulse className="h-5 w-5 text-red-500" /> Lo esencial del tema
        </h2>
        <ul className="list-disc space-y-1 pl-5 text-sm text-navy-700 dark:text-navy-200">
          {(lesson.keyPoints.length ? lesson.keyPoints : [lesson.summary]).slice(0, LIVES.recovery.summaryMaxLines).map((k, i) => (
            <li key={i}>
              <Rich text={t(k)} />
            </li>
          ))}
        </ul>
      </Card>

      {questions.map((q, i) => {
        const ev = evals[q.id]
        const a = answers[q.id] ?? emptyAnswer(q)
        return (
          <Card key={`${round}-${q.id}`} data-testid="recover-question">
            <p className="mb-2 text-xs font-semibold text-navy-500">Pregunta {i + 1} de {questions.length}</p>
            <ExerciseView exercise={q} attempt={attempt} answer={a} onChange={(x) => setAnswers((m) => ({ ...m, [q.id]: x }))} evaluation={ev} />
            {ev ? (
              <p className={ev.correct ? 'mt-3 font-semibold text-money-600' : 'mt-3 font-semibold text-red-600'}>{t(ev.feedback[0])}</p>
            ) : (
              <Button className="mt-3" onClick={() => submit(q)} disabled={!isAnswerComplete(q, a)}>
                Comprobar
              </Button>
            )}
          </Card>
        )
      })}

      {allDone && !outcome && (
        <Button size="lg" className="w-full" onClick={finish} data-testid="recover-finish">
          Ver resultado
        </Button>
      )}
      {outcome === 'gained' && (
        <Card className="text-center" data-testid="recover-result">
          <p className="text-lg font-bold text-money-600">¡Recuperaste 1 vida! Acertaste {correct} de {questions.length}.</p>
          <Button className="mt-3" onClick={() => history.back()}>Seguir practicando</Button>
        </Card>
      )}
      {outcome === 'failed' && (
        <Card className="text-center" data-testid="recover-result">
          <p className="font-semibold text-navy-900 dark:text-white">Acertaste {correct} de {questions.length}. Esta vez no recuperaste vida, pero tampoco perdiste nada.</p>
          {canRecover(lv.s) && (
            <Button className="mt-3" onClick={retry} data-testid="recover-retry">
              Intentar con otras 3 preguntas
            </Button>
          )}
        </Card>
      )}
    </div>
  )
}
