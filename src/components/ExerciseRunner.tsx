import { FOCUS_COURSES } from '../config/focus'
import { useEffect, useMemo, useState } from 'react'
import { ArrowRight, Bot, CircleCheck, CircleX, Lightbulb, RotateCcw, Trophy } from 'lucide-react'
import type { Answer, Exercise } from '../types'
import { getExercise, lessonOfExercise } from '../content'
import { createAttempt, emptyAnswer, evaluate, isAnswerComplete, type Attempt } from '../lib/engine'
import { attemptScore, ensureAttempt, finishAttempt, finishLesson, recordAnswer, EXAM_PASS, LESSON_PASS } from '../lib/progress'
import { useI18n, useStore } from '../state/store'
import { livesCtx, useLives } from '../state/lives'
import type { ActivityType } from '../lib/lives/service'
import { OutOfLives } from './lives/OutOfLives'
import { ExerciseView, kindLabel } from './ExerciseView'
import { Badge, Button, Card, cx, ProgressBar, Rich } from './ui'

interface Props {
  sessionKey: string
  /** Fixed list, or a sampler called each time a NEW attempt is created (exams, reviews). */
  exercises: Exercise[] | (() => Exercise[])
  mode: 'lesson' | 'review' | 'exam'
  shuffleExercises?: boolean
  onExit?: () => void
  exitLabel?: string
  /** Kind of activity for the lives system (defaults from mode); null = costs no lives (Pro mock exams). */
  lives?: ActivityType | null
  /** Replaces the built-in "Nuevo intento" (e.g. exams go back to their start screen). */
  onNewAttempt?: () => void
}

const DIFF = ['', '●○○', '●●○', '●●●']
const KIND: Record<Props['mode'], ActivityType> = { lesson: 'quiz', review: 'practice', exam: 'eval' }

export function ExerciseRunner({ sessionKey, exercises, mode, shuffleExercises, onExit, exitLabel, lives, onNewAttempt }: Props) {
  const { state, update, toast } = useStore()
  const lv = useLives()
  const kind = lives === undefined ? KIND[mode] : lives
  const { t, tx } = useI18n()
  const attempt: Attempt | undefined = state.attempts[sessionKey]
  const fixed = Array.isArray(exercises) ? exercises : null
  const byId = useMemo(() => new Map((fixed ?? []).map((e) => [e.id, e])), [fixed])
  const [newAttemptRequested, setNewAttemptRequested] = useState(0)
  const [empty, setEmpty] = useState(false)

  const make = () => {
    const list = typeof exercises === 'function' ? exercises() : exercises
    if (list.length === 0) setEmpty(true)
    return list
  }

  // Create the attempt (frozen shuffle) only if there is no active one.
  useEffect(() => {
    if (attempt) return
    const list = make()
    if (list.length === 0) return
    update((s) => ensureAttempt(s, sessionKey, () => createAttempt(sessionKey, list, { shuffleExercises })))
  }, [attempt, sessionKey]) // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (newAttemptRequested === 0) return
    const list = make()
    if (list.length === 0) {
      toast({ es: 'No hay ejercicios pendientes para un nuevo intento.', en: 'There are no pending exercises for a new attempt.' })
      return
    }
    setEmpty(false)
    update((s) => ensureAttempt(s, sessionKey, () => createAttempt(sessionKey, list, { shuffleExercises }), true))
  }, [newAttemptRequested]) // eslint-disable-line react-hooks/exhaustive-deps

  const list = (attempt?.exerciseIds ?? []).map((id) => byId.get(id) ?? getExercise(id)).filter((e): e is Exercise => !!e)
  const index = Math.min(attempt?.index ?? 0, Math.max(0, list.length - 1))
  const ex = list[index]
  const response = ex ? attempt?.responses[ex.id] : undefined
  const [draft, setDraft] = useState<{ id: string; answer: Answer } | null>(null)
  const answer: Answer | null = ex ? (response?.answer ?? (draft?.id === ex.id ? draft.answer : emptyAnswer(ex))) : null
  const [earned, setEarned] = useState<Record<string, number>>({})
  const allAnswered = list.length > 0 && list.every((e) => attempt?.responses[e.id])
  const ctx = livesCtx(ex ? lessonOfExercise(ex.id) : null)
  const answeredSoFar = list.filter((e) => attempt?.responses[e.id]).length
  // Out of lives: blocks the next unanswered question (the last feedback stays visible).
  const blocked = !!kind && !!attempt && !attempt.finishedAt && !!ex && !response && !lv.canStart(kind).ok

  // Paused activities that expired: evaluations are graded with the answered questions, the rest restart.
  useEffect(() => {
    if (!lv.takeExpired(sessionKey)) return
    update((s) => {
      const a = s.attempts[sessionKey]
      if (!a || a.finishedAt) return s
      if (mode !== 'lesson' && kind === 'eval') {
        const ids = a.exerciseIds.filter((id) => a.responses[id])
        if (ids.length) return finishAttempt({ ...s, attempts: { ...s.attempts, [sessionKey]: { ...a, exerciseIds: ids } } }, sessionKey, mode)
      }
      const rest = { ...s.attempts }
      delete rest[sessionKey]
      return { ...s, attempts: rest }
    })
  }, [sessionKey]) // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (!kind || !attempt) return
    if (blocked && answeredSoFar > 0 && !lv.isPaused(sessionKey)) lv.pause({ id: sessionKey, type: kind, topic: ctx.topic, area: ctx.area, answered: answeredSoFar, correct: list.filter((e) => attempt.responses[e.id]?.evaluation.correct).length })
    if (!blocked && lv.isPaused(sessionKey)) lv.resume(sessionKey)
  }, [blocked, answeredSoFar, lv.s.paused.length]) // eslint-disable-line react-hooks/exhaustive-deps

  if (empty && !attempt) return <Card>{tx('No hay ejercicios disponibles en este momento.', 'No exercises available right now.')}</Card>
  if (!attempt || !ex || !answer) return <Card aria-busy="true">{tx('Preparando ejercicios…', 'Preparing exercises…')}</Card>

  if (blocked) return <OutOfLives ctx={ctx} paused={answeredSoFar > 0} />

  if (attempt.finishedAt) {
    const score = attemptScore(attempt)
    const pass = mode === 'exam' ? EXAM_PASS : LESSON_PASS
    const passed = score >= pass
    return (
      <div className="animate-fade-up space-y-4">
        <Card className="text-center">
          <div className={cx('mx-auto mb-2 flex h-14 w-14 items-center justify-center rounded-full', passed ? 'bg-money-500/15 text-money-600' : 'bg-amber-500/15 text-amber-600')}>
            <Trophy className="h-7 w-7" />
          </div>
          <h2 className="text-xl font-bold text-navy-900 dark:text-white">
            {passed ? tx('¡Buen trabajo!', 'Great work!') : tx('Sigue practicando', 'Keep practicing')}
          </h2>
          <p className="tabular mt-1 text-3xl font-extrabold text-electric-500" data-testid="attempt-score">
            {Math.round(score * 100)} %
          </p>
          <p className="mt-1 text-sm text-navy-500 dark:text-navy-300">
            {mode === 'exam'
              ? tx(`Mínimo aprobatorio: ${pass * 100} %`, `Passing score: ${pass * 100} %`)
              : mode === 'lesson'
                ? passed
                  ? tx('Lección completada. Las preguntas que fallaste se agregaron a tu repaso.', 'Lesson completed. Missed questions were added to your review queue.')
                  : tx(`Necesitas ${pass * 100} % para completar la lección. Repasa la teoría e inténtalo de nuevo.`, `You need ${pass * 100} % to complete the lesson. Review the theory and try again.`)
                : tx('Repaso registrado. Los intervalos de repetición se actualizaron.', 'Review recorded. Spaced-repetition intervals were updated.')}
          </p>
          <div className="mt-4 flex flex-wrap justify-center gap-2">
            <Button variant="secondary" onClick={() => (onNewAttempt ? onNewAttempt() : setNewAttemptRequested((n) => n + 1))}>
              <RotateCcw className="h-4 w-4" /> {tx('Nuevo intento', 'New attempt')}
            </Button>
            {onExit && (
              <Button onClick={onExit}>
                {exitLabel ?? tx('Continuar', 'Continue')} <ArrowRight className="h-4 w-4" />
              </Button>
            )}
          </div>
        </Card>
        <Card>
          <h3 className="mb-2 font-semibold text-navy-900 dark:text-white">{tx('Revisión de respuestas', 'Answer review')}</h3>
          <ol className="space-y-2">
            {list.map((e, i) => {
              const r = attempt.responses[e.id]
              return (
                <li key={e.id}>
                  <details className="group rounded-xl bg-navy-50 p-3 dark:bg-navy-950">
                    <summary className="flex cursor-pointer list-none items-start gap-2">
                      {r?.evaluation.correct ? <CircleCheck className="mt-0.5 h-5 w-5 shrink-0 text-money-500" /> : <CircleX className="mt-0.5 h-5 w-5 shrink-0 text-red-500" />}
                      <span className="text-sm text-navy-800 dark:text-navy-100">
                        {i + 1}. <Rich text={t(e.prompt)} />
                      </span>
                    </summary>
                    <div className="mt-2 border-t border-navy-200 pt-2 text-sm text-navy-600 dark:border-navy-800 dark:text-navy-300">
                      {r?.evaluation.feedback.map((f, k) => <p key={k}>{t(f)}</p>)}
                      <p className="mt-1">
                        <Rich text={t(e.explanation)} />
                      </p>
                    </div>
                  </details>
                </li>
              )
            })}
          </ol>
        </Card>
      </div>
    )
  }

  const answeredCount = list.filter((e) => attempt.responses[e.id]).length
  const evaluation = response?.evaluation
  const reveal = mode !== 'exam'
  const xpKey = mode === 'review' ? null : `ex:${ex.id}`

  const submit = () => {
    if (response || !isAnswerComplete(ex, answer)) return
    const ev = evaluate(ex, answer)
    const already = xpKey ? !!state.xpLedger[xpKey] : false
    if (kind) {
      if (answeredCount === 0) lv.started(ctx)
      // The life is charged and saved BEFORE the answer is recorded or revealed.
      if (!ev.correct && !lv.spend(kind, ctx)) return
    }
    update((s) => recordAnswer(s, { exerciseId: ex.id, points: ex.points, attempt, answer, evaluation: ev, mode }))
    if (ev.correct && !already) setEarned((m) => ({ ...m, [ex.id]: mode === 'review' ? 5 : ex.points }))
  }
  const goTo = (i: number) => {
    setDraft(null)
    update((s) => {
      const a = s.attempts[sessionKey]
      if (!a || a.id !== attempt.id) return s
      return { ...s, attempts: { ...s.attempts, [sessionKey]: { ...a, index: i } } }
    })
  }
  const finish = () => {
    if (kind) lv.completed()
    update((s) => (mode === 'lesson' ? finishLesson(s, sessionKey) : finishAttempt(s, sessionKey, mode)))
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        <ProgressBar value={answeredCount / list.length} label={tx('Progreso del intento', 'Attempt progress')} />
        <span className="tabular shrink-0 text-xs font-semibold text-navy-500 dark:text-navy-300">
          {index + 1}/{list.length}
        </span>
      </div>

      <Card className="animate-fade-up" key={ex.id}>
        <div className="mb-3 flex flex-wrap items-center gap-2">
          <Badge tone="electric">{kindLabel(ex, tx)}</Badge>
          <Badge>
            <span aria-label={tx(`Dificultad ${ex.difficulty} de 3`, `Difficulty ${ex.difficulty} of 3`)}>{DIFF[ex.difficulty]}</span>
          </Badge>
          <Badge tone="money">{ex.points} XP</Badge>
          <span className="ml-auto font-mono text-[11px] text-navy-400">{ex.id}</span>
        </div>
        <ExerciseView exercise={ex} attempt={attempt} answer={answer} onChange={(a) => setDraft({ id: ex.id, answer: a })} evaluation={evaluation} reveal={reveal} />

        {evaluation && reveal && (
          <div
            role="status"
            className={cx('animate-pop mt-4 rounded-xl p-4', evaluation.correct ? 'bg-money-500/10 ring-1 ring-money-500/40' : 'bg-red-500/10 ring-1 ring-red-500/40')}
          >
            <div className="flex items-center gap-2 font-bold">
              {evaluation.correct ? <CircleCheck className="h-5 w-5 text-money-600" /> : <CircleX className="h-5 w-5 text-red-600" />}
              <span className={evaluation.correct ? 'text-money-700 dark:text-money-300' : 'text-red-700 dark:text-red-300'}>{t(evaluation.feedback[0])}</span>
              {earned[ex.id] ? <Badge tone="money">+{earned[ex.id]} XP</Badge> : null}
            </div>
            {evaluation.feedback.slice(1).map((f, i) => (
              <p key={i} className="mt-1 text-sm text-navy-700 dark:text-navy-200">
                {t(f)}
              </p>
            ))}
            <div className="mt-3 flex gap-2 text-sm text-navy-700 dark:text-navy-200">
              <Lightbulb className="mt-0.5 h-4 w-4 shrink-0 text-amber-500" />
              <p className="whitespace-pre-line">
                <Rich text={t(ex.explanation)} />
              </p>
            </div>
            {!evaluation.correct && !FOCUS_COURSES && (
              <a href={`#/tutor?ex=${encodeURIComponent(ex.id)}`} className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-electric-600 hover:underline dark:text-electric-300">
                <Bot className="h-4 w-4" /> {tx('Pídele al tutor que explique el procedimiento', 'Ask the tutor to explain the procedure')}
              </a>
            )}
          </div>
        )}
        {evaluation && !reveal && (
          <p role="status" className="mt-4 rounded-xl bg-navy-50 p-3 text-sm text-navy-600 dark:bg-navy-950 dark:text-navy-300">
            {tx('Respuesta registrada. Verás los resultados al terminar la evaluación.', 'Answer recorded. You will see the results when you finish the exam.')}
          </p>
        )}

        <div className="mt-4 flex gap-2">
          {index > 0 && (
            <Button variant="ghost" onClick={() => goTo(index - 1)}>
              {tx('Anterior', 'Previous')}
            </Button>
          )}
          <div className="flex-1" />
          {!evaluation ? (
            <Button onClick={submit} disabled={!isAnswerComplete(ex, answer)} size="lg" className="min-w-36">
              {mode === 'exam' ? tx('Responder', 'Submit') : tx('Comprobar', 'Check')}
            </Button>
          ) : index < list.length - 1 ? (
            <Button onClick={() => goTo(index + 1)} size="lg" className="min-w-36">
              {tx('Continuar', 'Continue')} <ArrowRight className="h-4 w-4" />
            </Button>
          ) : allAnswered ? (
            <Button variant="success" onClick={finish} size="lg" className="min-w-36">
              {tx('Ver resultados', 'See results')}
            </Button>
          ) : (
            <Button onClick={() => goTo(list.findIndex((e) => !attempt.responses[e.id]))} size="lg">
              {tx('Ir a pendiente', 'Go to unanswered')}
            </Button>
          )}
        </div>
      </Card>
    </div>
  )
}
