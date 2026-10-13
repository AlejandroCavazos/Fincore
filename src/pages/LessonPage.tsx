import { ArrowLeft, BookOpen, Check, Lightbulb, Lock, Play, Scale, Store, Target, X } from 'lucide-react'
import { areaOfLesson, BUSINESS_PER_TOPIC } from '../content/areas'
import { exercisesOfLesson, getLesson } from '../content'
import { ExerciseRunner } from '../components/ExerciseRunner'
import { Button, Card, cx, Notice, ProgressBar, Rich } from '../components/ui'
import { markSubtopic } from '../lib/progress'
import {
  isLessonCompleted,
  isLessonUnlocked,
  isSubtopicDone,
  isSubtopicOpen,
  nextSubtopic,
  subtopicCount,
  subtopicStates,
  type SubtopicState,
} from '../lib/selectors'
import { navigate } from '../state/router'
import { useI18n, useStore } from '../state/store'
import type { Lesson } from '../types'
import { money } from './AreaPage'
import NotFound from './NotFound'

/** Minutes shown per subtopic: the lesson's time split across its parts, at least 3. */
const subMinutes = (l: Lesson) => Math.max(3, Math.round(l.minutes / subtopicCount(l)))

export default function LessonPage({ lessonId, tab, sub }: { lessonId: string; tab: string | null; sub?: string | null }) {
  const { state } = useStore()
  const { tx } = useI18n()
  const lesson = getLesson(lessonId)
  if (!lesson) return <NotFound />
  const unlocked = isLessonUnlocked(state, lesson, state.settings.freeMode)
  if (!unlocked) return <Locked lesson={lesson} />
  if (tab === 'practice') return <Reto lesson={lesson} />
  const i = sub == null ? NaN : Number(sub)
  if (Number.isInteger(i) && i >= 0 && i < lesson.theory.length && isSubtopicOpen(state, lesson, i, state.settings.freeMode)) return <Subtopic lesson={lesson} index={i} />
  return <Overview lesson={lesson} tx={tx} />
}

function AreaLink({ lesson }: { lesson: Lesson }) {
  const { t } = useI18n()
  const area = areaOfLesson(lesson.id)
  return (
    <a href={`#/area/${area.id}`} className="inline-flex items-center gap-1 text-sm font-semibold text-electric-600 dark:text-electric-300">
      <ArrowLeft className="h-4 w-4" /> {t(area.title)}
    </a>
  )
}

function Locked({ lesson }: { lesson: Lesson }) {
  const { t, tx } = useI18n()
  return (
    <div className="space-y-4">
      <AreaLink lesson={lesson} />
      <h1 className="text-2xl font-bold tracking-tight text-navy-900 dark:text-white">{t(lesson.title)}</h1>
      <Card className="flex items-start gap-3">
        <Lock className="mt-0.5 h-5 w-5 text-navy-400" />
        <div>
          <p className="font-semibold text-navy-900 dark:text-white">{tx('Tema bloqueado', 'Topic locked')}</p>
          <p className="text-sm text-navy-500 dark:text-navy-300">
            {tx('Domina el tema anterior de este nivel, o activa el modo libre en Configuración.', 'Master the previous topic in this level, or turn on free mode in Settings.')}
          </p>
          <a href="#/settings" className="mt-2 inline-block text-sm font-semibold text-electric-600">
            {tx('Ir a Configuración', 'Go to Settings')}
          </a>
        </div>
      </Card>
    </div>
  )
}

const href = (l: Lesson, i: number) => (i === l.theory.length ? `#/lesson/${l.id}?tab=practice` : `#/lesson/${l.id}?s=${i}`)

function Overview({ lesson, tx }: { lesson: Lesson; tx: (es: string, en: string) => string }) {
  const { state } = useStore()
  const { t } = useI18n()
  const states = subtopicStates(state, lesson)
  const done = states.filter((s) => s === 'done').length
  const free = state.settings.freeMode
  const area = areaOfLesson(lesson.id)
  const pos = lesson.topicIds[0]
  const items = [...lesson.theory.map((sec) => t(sec.heading)), tx('Reto del tema', 'Topic challenge')]

  return (
    <div className="space-y-4">
      <AreaLink lesson={lesson} />
      <div>
        <p className="text-xs font-bold uppercase tracking-wider text-electric-600 dark:text-electric-300">
          {t(area.title)} · {tx('Tema', 'Topic')} {pos}
        </p>
        <h1 className="text-2xl font-bold tracking-tight text-navy-900 dark:text-white">{t(lesson.title)}</h1>
        <p className="mt-1 text-navy-500 dark:text-navy-300">{t(lesson.summary)}</p>
      </div>
      <div>
        <div className="mb-1.5 flex justify-between text-sm font-semibold text-navy-500 dark:text-navy-300">
          <span>
            {done} {tx('de', 'of')} {states.length} {tx('subtemas', 'subtopics')}
          </span>
          <span>
            ~{lesson.minutes} min {tx('en total', 'in total')}
          </span>
        </div>
        <ProgressBar value={done / states.length} tone="money" label={tx('Avance del tema', 'Topic progress')} />
      </div>

      <ol className="space-y-3">
        {items.map((title, i) => {
          const st: SubtopicState = states[i]
          const open = isSubtopicOpen(state, lesson, i, free)
          const reto = i === lesson.theory.length
          const icon =
            st === 'done' ? (
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-money-500 text-white shadow-[0_3px_0] shadow-money-700">
                <Check className="h-5 w-5" strokeWidth={3} />
              </span>
            ) : reto ? (
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber-200 text-amber-800 shadow-[0_3px_0] shadow-amber-400 dark:bg-amber-300">
                <Store className="h-5 w-5" />
              </span>
            ) : open ? (
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border-[3px] border-electric-500 bg-electric-500/10 text-electric-600 dark:text-electric-300">
                <Play className="h-5 w-5 fill-current" />
              </span>
            ) : (
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-navy-100 text-navy-400 dark:bg-navy-800">
                <Lock className="h-5 w-5" />
              </span>
            )
          const body = (
            <Card className={cx('transition', st === 'next' ? 'ring-2 ring-electric-500 dark:ring-electric-400' : open && 'hover:ring-electric-400', !open && 'opacity-70')}>
              <div className="flex items-center gap-3">
                {icon}
                <div className="min-w-0 flex-1">
                  <p className="text-xs font-bold uppercase tracking-wider text-navy-400">
                    {tx('Subtema', 'Subtopic')} {i + 1} · {subMinutes(lesson)} min
                  </p>
                  <p className={cx('font-bold', st === 'done' ? 'text-money-700 dark:text-money-300' : st === 'next' ? 'text-electric-600 dark:text-electric-300' : reto ? 'text-amber-800 dark:text-amber-300' : 'text-navy-900 dark:text-white')}>
                    {title}
                  </p>
                  {reto && st !== 'done' && (
                    <p className="text-xs font-semibold text-navy-500 dark:text-navy-300">
                      {tx('Sello de dominio y una mejora para', 'Mastery seal and an upgrade for')} {t(area.business).toLowerCase()}
                    </p>
                  )}
                </div>
              </div>
              {st === 'next' && (
                <span className="mt-3 flex min-h-11 w-full items-center justify-center rounded-xl bg-electric-500 text-sm font-bold uppercase tracking-wide text-white shadow-[0_3px_0] shadow-electric-700">
                  {tx('Continuar', 'Continue')}
                </span>
              )}
            </Card>
          )
          return (
            <li key={i}>
              {open ? (
                <a href={href(lesson, i)} className="block" aria-label={`${title}${st === 'done' ? tx(' (dominado)', ' (mastered)') : ''}`}>
                  {body}
                </a>
              ) : (
                <div aria-disabled="true">
                  {body}
                  <span className="sr-only">{tx('Bloqueado: termina el subtema anterior.', 'Locked: finish the previous subtopic.')}</span>
                </div>
              )}
            </li>
          )
        })}
      </ol>

      <Card>
        <h2 className="mb-2 flex items-center gap-2 font-semibold text-navy-900 dark:text-white">
          <Target className="h-5 w-5 text-electric-500" /> {tx('Al terminar este tema podrás', 'After this topic you will be able to')}
        </h2>
        <ul className="list-disc space-y-1 pl-5 text-[15px] text-navy-700 dark:text-navy-200">
          {lesson.objectives.map((o, k) => (
            <li key={k}>{t(o)}</li>
          ))}
        </ul>
      </Card>
    </div>
  )
}

function Steps({ lesson, current }: { lesson: Lesson; current: number }) {
  const { state } = useStore()
  const { tx } = useI18n()
  const n = subtopicCount(lesson)
  return (
    <div className="flex items-center gap-3">
      <a href={`#/lesson/${lesson.id}`} aria-label={tx('Salir al tema', 'Back to topic')} className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-navy-400 hover:bg-navy-100 dark:hover:bg-navy-800">
        <X className="h-6 w-6" />
      </a>
      <div className="grid flex-1 gap-1" style={{ gridTemplateColumns: `repeat(${n}, minmax(0, 1fr))` }}>
        {Array.from({ length: n }, (_, i) => (
          <span key={i} className={cx('h-2 rounded-full', i === current ? 'bg-electric-500' : isSubtopicDone(state, lesson, i) ? 'bg-money-500' : 'bg-navy-200 dark:bg-navy-700')} />
        ))}
      </div>
    </div>
  )
}

function Subtopic({ lesson, index }: { lesson: Lesson; index: number }) {
  const { update } = useStore()
  const { t, tx } = useI18n()
  const sec = lesson.theory[index]
  const last = index === lesson.theory.length - 1
  const pos = lesson.topicIds[0]
  const finish = () => {
    update((s) => markSubtopic(s, lesson.id, index))
    navigate(last ? `/lesson/${lesson.id}?tab=practice` : `/lesson/${lesson.id}?s=${index + 1}`)
  }

  return (
    <div className="mx-auto max-w-2xl space-y-4">
      <Steps lesson={lesson} current={index} />
      <article className="space-y-4">
        <div>
          <p className="text-xs font-bold uppercase tracking-wider text-electric-600 dark:text-electric-300">
            {tx('Tema', 'Topic')} {pos} · {tx('Subtema', 'Subtopic')} {index + 1} {tx('de', 'of')} {subtopicCount(lesson)} · {subMinutes(lesson)} min
          </p>
          <h1 className="mt-1 text-2xl font-bold tracking-tight text-navy-900 dark:text-white">{t(sec.heading)}</h1>
          <p className="text-sm text-navy-500 dark:text-navy-300">{t(lesson.title)}</p>
        </div>
        <div className="space-y-3 text-[16px] leading-relaxed text-navy-700 dark:text-navy-200">
          {sec.body.map((p, k) => (
            <p key={k}>
              <Rich text={t(p)} />
            </p>
          ))}
        </div>
        {sec.formula && <div className="overflow-x-auto whitespace-pre rounded-xl bg-navy-900 px-4 py-3 font-mono text-sm text-electric-300 dark:bg-navy-950">{sec.formula}</div>}
        {sec.bullets && (
          <Card>
            <ul className="list-disc space-y-1 pl-5 text-[15px] text-navy-700 dark:text-navy-200">
              {sec.bullets.map((b, k) => (
                <li key={k}>
                  <Rich text={t(b)} />
                </li>
              ))}
            </ul>
          </Card>
        )}
        {last && (
          <Card className="bg-amber-50 ring-amber-200 dark:bg-amber-500/10 dark:ring-amber-500/30">
            <h2 className="mb-2 flex items-center gap-2 font-semibold text-navy-900 dark:text-white">
              <Lightbulb className="h-5 w-5 text-amber-500" /> {tx('Puntos clave del tema', 'Key points of the topic')}
            </h2>
            <ul className="list-disc space-y-1 pl-5 text-[15px] text-navy-700 dark:text-navy-200">
              {lesson.keyPoints.map((k, j) => (
                <li key={j}>
                  <Rich text={t(k)} />
                </li>
              ))}
            </ul>
          </Card>
        )}
      </article>
      <Button size="lg" className="w-full uppercase tracking-wide shadow-[0_3px_0] shadow-electric-700" onClick={finish}>
        {last ? tx('Entendido, al reto del tema', 'Got it, on to the challenge') : tx('Entendido, siguiente', 'Got it, next')}
      </Button>
    </div>
  )
}

function Reto({ lesson }: { lesson: Lesson }) {
  const { state } = useStore()
  const { t, tx } = useI18n()
  const area = areaOfLesson(lesson.id)
  const exercises = exercisesOfLesson(lesson)
  const order = area.sections.flatMap((x) => x.lessonIds)
  const next = getLesson(order[order.indexOf(lesson.id) + 1] ?? '')
  const mastered = isLessonCompleted(state, lesson.id)
  const theoryLeft = !state.settings.freeMode && !mastered && nextSubtopic(state, lesson) < lesson.theory.length

  return (
    <div className="mx-auto max-w-2xl space-y-4">
      <Steps lesson={lesson} current={lesson.theory.length} />
      <div>
        <p className="text-xs font-bold uppercase tracking-wider text-amber-700 dark:text-amber-300">{tx('Reto del tema', 'Topic challenge')}</p>
        <h1 className="mt-1 text-2xl font-bold tracking-tight text-navy-900 dark:text-white">{t(lesson.title)}</h1>
      </div>

      <div className="flex items-center gap-3 rounded-2xl bg-navy-900 px-4 py-3 text-white dark:bg-navy-950">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-300 text-amber-900">
          <Store className="h-5 w-5" />
        </span>
        <p className="flex-1 text-sm">
          {mastered
            ? tx('Ya dominaste este tema. Puedes repetir el reto cuando quieras.', 'You already mastered this topic. Retake the challenge any time.')
            : `${tx('Pásalo y', 'Pass it and')} ${t(area.business).toLowerCase()} ${tx('gana', 'gains')} +${money(BUSINESS_PER_TOPIC)} ${tx('y el sello de dominio.', 'and the mastery seal.')}`}
        </p>
      </div>

      {theoryLeft && (
        <Notice tone="info">
          {tx('Te faltan subtemas por leer. Puedes intentar el reto, pero te conviene ', 'You still have subtopics to read. You can try the challenge, but it helps to ')}
          <a className="font-semibold underline" href={href(lesson, nextSubtopic(state, lesson))}>
            {tx('terminarlos primero', 'finish them first')}
          </a>
          .
        </Notice>
      )}

      <details className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-navy-100 dark:bg-navy-900 dark:ring-navy-800">
        <summary className="flex cursor-pointer items-center gap-2 font-semibold text-navy-900 dark:text-white">
          <BookOpen className="h-5 w-5 text-electric-500" /> {tx('Antes del reto: ejemplos resueltos', 'Before the challenge: worked examples')}
        </summary>
        <div className="mt-3 space-y-4">
          {lesson.examples.map((ex, k) => (
            <div key={k} className="border-l-4 border-money-500 pl-3">
              <h3 className="font-semibold text-navy-900 dark:text-white">{t(ex.title)}</h3>
              <p className="mt-1 whitespace-pre-line text-[15px] text-navy-700 dark:text-navy-200">
                <Rich text={t(ex.problem)} />
              </p>
              <ol className="mt-2 space-y-1.5">
                {ex.steps.map((s, j) => (
                  <li key={j} className="flex gap-2 text-sm text-navy-700 dark:text-navy-200">
                    <span className="tabular flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-navy-100 text-[11px] font-bold dark:bg-navy-800">{j + 1}</span>
                    <span className="whitespace-pre-line">
                      <Rich text={t(s)} />
                    </span>
                  </li>
                ))}
              </ol>
              <p className="mt-2 rounded-lg bg-money-500/10 px-3 py-2 text-sm font-semibold text-money-800 dark:text-money-200">
                <Rich text={t(ex.result)} />
              </p>
            </div>
          ))}
        </div>
      </details>

      {lesson.normativeNote && (
        <Notice tone="warning" title={tx('Nota normativa', 'Regulatory note')}>
          <span className="flex gap-2">
            <Scale className="mt-0.5 h-4 w-4 shrink-0" />
            <Rich text={t(lesson.normativeNote)} />
          </span>
        </Notice>
      )}

      <ExerciseRunner
        sessionKey={lesson.id}
        exercises={exercises}
        mode="lesson"
        onExit={() => navigate(next ? `/lesson/${next.id}` : `/area/${area.id}`)}
        exitLabel={next ? tx('Siguiente tema', 'Next topic') : tx('Volver al área', 'Back to area')}
      />
    </div>
  )
}
