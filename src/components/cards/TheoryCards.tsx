import { useMemo, useRef, useState } from 'react'
import { ChevronUp, CircleCheck, CircleX, Lightbulb, ListChecks, Sigma, Sparkles } from 'lucide-react'
import type { Exercise, Lesson } from '../../types'
import { buildCards, type TheoryCard } from '../../lib/cards'
import { createAttempt, emptyAnswer, evaluate, isAnswerComplete } from '../../lib/engine'
import { exercisesOfLesson } from '../../content'
import { useI18n } from '../../state/store'
import { ExerciseView } from '../ExerciseView'
import { FormulaCard } from '../FormulaCard'
import { Button, cx, Rich } from '../ui'
import type { Answer, Evaluation } from '../../types'

/** Quick one-tap question inside the cards. Free: no lives, no XP, just feedback. */
function Check({ exercise }: { exercise: Exercise }) {
  const { t } = useI18n()
  const attempt = useMemo(() => createAttempt(`card:${exercise.id}`, [exercise]), [exercise])
  const [answer, setAnswer] = useState<Answer>(() => emptyAnswer(exercise))
  const [ev, setEv] = useState<Evaluation | null>(null)
  return (
    <div className="w-full space-y-3">
      <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-electric-600 dark:text-electric-300">
        <Sparkles className="h-4 w-4" /> Pregunta rápida
      </p>
      <ExerciseView exercise={exercise} attempt={attempt} answer={answer} onChange={setAnswer} evaluation={ev ?? undefined} />
      {ev ? (
        <div className={cx('animate-pop rounded-xl p-3 text-sm', ev.correct ? 'bg-money-500/10 text-money-700 dark:text-money-300' : 'bg-red-500/10 text-red-700 dark:text-red-300')}>
          <p className="flex items-center gap-2 font-bold">
            {ev.correct ? <CircleCheck className="h-5 w-5" /> : <CircleX className="h-5 w-5" />}
            {ev.correct ? '¡Bien!' : 'Casi. Así es:'}
          </p>
          <p className="mt-1 text-navy-700 dark:text-navy-200">
            <Rich text={t(exercise.explanation)} />
          </p>
        </div>
      ) : (
        <Button className="w-full" disabled={!isAnswerComplete(exercise, answer)} onClick={() => setEv(evaluate(exercise, answer))}>
          Comprobar
        </Button>
      )}
    </div>
  )
}

function Idea({ card }: { card: Extract<TheoryCard, { kind: 'idea' }> }) {
  const { t } = useI18n()
  const [open, setOpen] = useState(false)
  return (
    <div className="space-y-3">
      <p className="text-xl leading-relaxed text-navy-800 dark:text-navy-100">
        <Rich text={t(card.text)} />
      </p>
      {card.more &&
        (open ? (
          <p className="animate-fade-up text-[16px] leading-relaxed text-navy-600 dark:text-navy-300">
            <Rich text={t(card.more)} />
          </p>
        ) : (
          <button type="button" onClick={() => setOpen(true)} className="text-sm font-semibold text-electric-600 hover:underline dark:text-electric-300">
            Ver más
          </button>
        ))}
    </div>
  )
}

function Body({ card, first }: { card: TheoryCard; first: boolean }) {
  const { t } = useI18n()
  switch (card.kind) {
    case 'title':
      return (
        <div className="space-y-4">
          <h1 className="text-3xl font-extrabold tracking-tight text-navy-900 dark:text-white">{t(card.heading)}</h1>
          {card.lead && (
            <p className="text-xl leading-relaxed text-navy-700 dark:text-navy-200">
              <Rich text={t(card.lead)} />
            </p>
          )}
          {first && (
            <p className="flex items-center gap-1 pt-4 text-sm font-semibold text-navy-400">
              <ChevronUp className="h-4 w-4 animate-bounce" /> Desliza hacia arriba
            </p>
          )}
        </div>
      )
    case 'idea':
      return <Idea card={card} />
    case 'list':
      return (
        <div className="space-y-3">
          <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-electric-600 dark:text-electric-300">
            <ListChecks className="h-4 w-4" /> En corto
          </p>
          <ul className="space-y-2">
            {card.items.map((b, i) => (
              <li key={i} className="rounded-xl bg-navy-50 px-3 py-2 text-[16px] text-navy-800 dark:bg-navy-800 dark:text-navy-100">
                <Rich text={t(b)} />
              </li>
            ))}
          </ul>
        </div>
      )
    case 'formula':
      return (
        <div className="w-full space-y-3">
          <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-electric-600 dark:text-electric-300">
            <Sigma className="h-4 w-4" /> Fórmula
          </p>
          {card.formula && <div className="overflow-x-auto whitespace-pre rounded-xl bg-navy-900 px-4 py-3 font-mono text-sm text-electric-300">{card.formula}</div>}
          {card.guide && <FormulaCard f={card.guide} />}
        </div>
      )
    case 'check':
      return <Check exercise={card.exercise} />
    case 'keypoints':
      return (
        <div className="space-y-3">
          <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-600">
            <Lightbulb className="h-4 w-4" /> Lo que te llevas del tema
          </p>
          <ul className="space-y-2">
            {card.items.map((k, i) => (
              <li key={i} className="flex gap-2 text-[16px] text-navy-800 dark:text-navy-100">
                <CircleCheck className="mt-0.5 h-5 w-5 shrink-0 text-money-500" />
                <span>
                  <Rich text={t(k)} />
                </span>
              </li>
            ))}
          </ul>
        </div>
      )
  }
}

/**
 * Theory as full-screen cards you scroll through (snap), like stories:
 * one idea per card, quick questions in between, button at the end.
 */
export function TheoryCards({ lesson, index, header, finishLabel, onFinish }: { lesson: Lesson; index: number; header: React.ReactNode; finishLabel: string; onFinish: () => void }) {
  const cards = useMemo(() => buildCards(lesson, index, exercisesOfLesson(lesson)), [lesson, index])
  const box = useRef<HTMLDivElement>(null)
  const [at, setAt] = useState(0)
  const total = cards.length + 1
  const onScroll = () => {
    const el = box.current
    if (el) setAt(Math.round(el.scrollTop / el.clientHeight))
  }
  return (
    <div className="relative mx-auto max-w-2xl">
      {header}
      <div className="mt-2 flex gap-1" aria-hidden>
        {Array.from({ length: total }, (_, i) => (
          <span key={i} className={cx('h-1 flex-1 rounded-full transition-colors', i <= at ? 'bg-electric-500' : 'bg-navy-200 dark:bg-navy-700')} />
        ))}
      </div>
      <div
        ref={box}
        onScroll={onScroll}
        data-testid="theory-cards"
        className="mt-2 h-[calc(100dvh-15.5rem)] snap-y snap-mandatory overflow-y-auto overscroll-contain rounded-2xl lg:h-[calc(100dvh-11rem)]"
      >
        {cards.map((c, i) => (
          <section
            key={i}
            data-card={c.kind}
            className={cx(
              'flex h-full snap-start snap-always flex-col overflow-y-auto p-6',
              c.kind === 'title' ? 'bg-gradient-to-br from-electric-500/15 to-money-500/10' : c.kind === 'check' ? 'bg-electric-500/5' : 'bg-white dark:bg-navy-900',
              'border-b border-navy-100 dark:border-navy-800',
            )}
          >
            <div className="my-auto w-full">
              <Body card={c} first={i === 0} />
            </div>
          </section>
        ))}
        <section className="flex h-full snap-start flex-col items-center justify-center gap-4 p-6 text-center">
          <CircleCheck className="h-14 w-14 text-money-500" />
          <p className="text-xl font-bold text-navy-900 dark:text-white">¡Listo! Ya viste lo esencial.</p>
          <Button size="lg" className="w-full max-w-sm uppercase tracking-wide shadow-[0_3px_0] shadow-electric-700" onClick={onFinish} data-testid="cards-finish">
            {finishLabel}
          </Button>
        </section>
      </div>
    </div>
  )
}
