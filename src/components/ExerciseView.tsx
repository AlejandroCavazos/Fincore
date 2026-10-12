import { Check, X } from 'lucide-react'
import type { Answer, Evaluation, Exercise } from '../types'
import { orderedAccountChoices, orderedBlankOptions, orderedItems, orderedOptions, type Attempt } from '../lib/engine'
import { unitLabel } from '../lib/numbers'
import { checkJournal } from '../lib/accounting'
import { useI18n } from '../state/store'
import { JournalEditor } from './JournalEditor'
import { cx, Rich } from './ui'

const LETTERS = ['A', 'B', 'C', 'D', 'E', 'F']

interface Props {
  exercise: Exercise
  attempt: Pick<Attempt, 'orders'>
  answer: Answer
  onChange: (a: Answer) => void
  evaluation?: Evaluation
  /** Show which option is correct once evaluated (false in exams until the end). */
  reveal?: boolean
}

export function kindLabel(ex: Exercise, tx: (es: string, en: string) => string): string {
  if (ex.flavor === 'case') return tx('Caso empresarial', 'Business case')
  if (ex.flavor === 'interpret') return tx('Interpretar indicadores', 'Interpret indicators')
  if (ex.flavor === 'tAccount') return tx('Cuentas T', 'T-accounts')
  if (ex.flavor === 'statement') return tx('Completar estados financieros', 'Complete financial statements')
  switch (ex.kind) {
    case 'mcq':
      return tx('Opción múltiple', 'Multiple choice')
    case 'multi':
      return tx('Selección múltiple', 'Select all that apply')
    case 'truefalse':
      return tx('Verdadero o falso', 'True or false')
    case 'numeric':
      return tx('Respuesta numérica', 'Numeric answer')
    case 'formula':
      return tx('Completar la fórmula', 'Complete the formula')
    case 'classify':
      return tx('Clasificar', 'Classify')
    case 'journal':
      return tx('Registrar póliza', 'Record the journal entry')
    case 'fields':
      return tx('Completar valores', 'Fill in the values')
  }
}

export function ExerciseView({ exercise: ex, attempt, answer, onChange, evaluation, reveal = true }: Props) {
  const { t, tx, lang } = useI18n()
  const locked = !!evaluation
  const showTruth = locked && reveal

  return (
    <div className="space-y-4" data-exercise-id={ex.id}>
      {ex.context && (
        <div className="whitespace-pre-line rounded-xl bg-navy-50 p-3 text-sm leading-relaxed text-navy-700 ring-1 ring-navy-100 dark:bg-navy-950 dark:text-navy-200 dark:ring-navy-800">
          <Rich text={t(ex.context)} />
        </div>
      )}
      <h2 className="whitespace-pre-line text-lg font-semibold leading-snug text-navy-900 dark:text-white" id={`q-${ex.id}`}>
        <Rich text={t(ex.prompt)} />
      </h2>

      {(ex.kind === 'mcq' || ex.kind === 'multi') && (
        <div role={ex.kind === 'mcq' ? 'radiogroup' : 'group'} aria-labelledby={`q-${ex.id}`} className="space-y-2">
          {orderedOptions(ex, attempt).map((o, idx) => {
            const selected = answer.kind === 'mcq' ? answer.optionId === o.id : answer.kind === 'multi' && answer.optionIds.includes(o.id)
            const isCorrect = ex.kind === 'mcq' ? ex.correctOptionId === o.id : ex.correctOptionIds.includes(o.id)
            const state = showTruth ? (isCorrect ? 'correct' : selected ? 'wrong' : 'idle') : selected ? 'selected' : 'idle'
            return (
              <button
                key={o.id}
                type="button"
                role={ex.kind === 'mcq' ? 'radio' : 'checkbox'}
                aria-checked={selected}
                data-option-id={o.id}
                data-position={LETTERS[idx]}
                disabled={locked}
                onClick={() => {
                  if (answer.kind === 'mcq') onChange({ kind: 'mcq', optionId: o.id })
                  else if (answer.kind === 'multi')
                    onChange({ kind: 'multi', optionIds: selected ? answer.optionIds.filter((x) => x !== o.id) : [...answer.optionIds, o.id] })
                }}
                className={cx(
                  'flex w-full items-start gap-3 rounded-xl border-2 p-3 text-left text-[15px] transition disabled:cursor-default',
                  state === 'idle' && 'border-navy-100 bg-white hover:border-electric-400 dark:border-navy-800 dark:bg-navy-900',
                  state === 'selected' && 'border-electric-500 bg-electric-500/8',
                  state === 'correct' && 'border-money-500 bg-money-500/10',
                  state === 'wrong' && 'border-red-500 bg-red-500/10',
                )}
              >
                <span
                  className={cx(
                    'flex h-7 w-7 shrink-0 items-center justify-center text-xs font-bold',
                    ex.kind === 'mcq' ? 'rounded-full' : 'rounded-md',
                    state === 'correct' ? 'bg-money-500 text-white' : state === 'wrong' ? 'bg-red-500 text-white' : selected ? 'bg-electric-500 text-white' : 'bg-navy-100 text-navy-600 dark:bg-navy-800 dark:text-navy-200',
                  )}
                  aria-hidden
                >
                  {state === 'correct' ? <Check className="h-4 w-4" /> : state === 'wrong' ? <X className="h-4 w-4" /> : LETTERS[idx]}
                </span>
                <span className="pt-0.5 text-navy-800 dark:text-navy-100">
                  <Rich text={t(o.text)} />
                </span>
              </button>
            )
          })}
        </div>
      )}

      {ex.kind === 'truefalse' && answer.kind === 'truefalse' && (
        <div role="radiogroup" aria-labelledby={`q-${ex.id}`} className="grid grid-cols-2 gap-3">
          {[true, false].map((v) => {
            const selected = answer.value === v
            const state = showTruth ? (ex.answer === v ? 'correct' : selected ? 'wrong' : 'idle') : selected ? 'selected' : 'idle'
            return (
              <button
                key={String(v)}
                type="button"
                role="radio"
                aria-checked={selected}
                disabled={locked}
                onClick={() => onChange({ kind: 'truefalse', value: v })}
                className={cx(
                  'min-h-14 rounded-xl border-2 p-3 text-base font-semibold transition',
                  state === 'idle' && 'border-navy-100 bg-white hover:border-electric-400 dark:border-navy-800 dark:bg-navy-900',
                  state === 'selected' && 'border-electric-500 bg-electric-500/8 text-electric-700 dark:text-electric-300',
                  state === 'correct' && 'border-money-500 bg-money-500/10 text-money-700 dark:text-money-300',
                  state === 'wrong' && 'border-red-500 bg-red-500/10 text-red-700 dark:text-red-300',
                )}
              >
                {v ? tx('Verdadero', 'True') : tx('Falso', 'False')}
              </button>
            )
          })}
        </div>
      )}

      {ex.kind === 'numeric' && answer.kind === 'numeric' && (
        <div>
          <label htmlFor={`num-${ex.id}`} className="mb-1 block text-sm font-medium text-navy-600 dark:text-navy-200">
            {tx('Tu respuesta', 'Your answer')} {ex.unit !== 'none' && `(${unitLabel(ex.unit, lang)})`}
          </label>
          <input
            id={`num-${ex.id}`}
            inputMode="decimal"
            autoComplete="off"
            value={answer.raw}
            disabled={locked}
            onChange={(e) => onChange({ kind: 'numeric', raw: e.target.value })}
            placeholder={ex.unit === '%' ? '12.5' : '0.00'}
            className={cx(
              'tabular w-full rounded-xl border-2 bg-white px-4 py-3 text-lg font-semibold text-navy-900 outline-none focus:border-electric-500 dark:bg-navy-950 dark:text-white',
              evaluation ? (evaluation.correct ? 'border-money-500' : 'border-red-500') : 'border-navy-200 dark:border-navy-700',
            )}
          />
          <p className="mt-1 text-xs text-navy-400">{tx('Puedes usar comas de miles: 12,500.50', 'You may use thousands separators: 12,500.50')}</p>
        </div>
      )}

      {ex.kind === 'formula' && answer.kind === 'formula' && (
        <div className="rounded-xl bg-navy-900 p-4 font-mono text-[15px] leading-loose text-white dark:bg-navy-950">
          {ex.template.split(/(\{\{\w+\}\})/g).map((part, i) => {
            const m = part.match(/^\{\{(\w+)\}\}$/)
            if (!m) return <span key={i}>{part}</span>
            const blank = ex.blanks.find((b) => b.id === m[1])
            if (!blank) return <span key={i}>{part}</span>
            const ok = evaluation?.parts?.[blank.id]
            return (
              <select
                key={i}
                aria-label={tx(`Espacio ${blank.id}`, `Blank ${blank.id}`)}
                value={answer.blanks[blank.id] ?? ''}
                disabled={locked}
                onChange={(e) => onChange({ kind: 'formula', blanks: { ...answer.blanks, [blank.id]: e.target.value } })}
                className={cx(
                  'mx-1 my-1 rounded-lg border-2 bg-navy-800 px-2 py-1 font-mono text-sm text-white',
                  evaluation ? (ok ? 'border-money-400' : 'border-red-400') : 'border-electric-400',
                )}
              >
                <option value="">?</option>
                {orderedBlankOptions(ex, blank.id, attempt).map((o) => (
                  <option key={o.id} value={o.id}>
                    {t(o.text)}
                  </option>
                ))}
              </select>
            )
          })}
        </div>
      )}

      {ex.kind === 'classify' && answer.kind === 'classify' && (
        <div className="space-y-2">
          {orderedItems(ex, attempt).map((item) => {
            const ok = evaluation?.parts?.[item.id]
            return (
              <div key={item.id} className={cx('flex flex-col gap-2 rounded-xl bg-white p-3 ring-1 dark:bg-navy-900 sm:flex-row sm:items-center', evaluation ? (ok ? 'ring-2 ring-money-500' : 'ring-2 ring-red-500') : 'ring-navy-100 dark:ring-navy-800')}>
                <span className="flex-1 text-[15px] font-medium text-navy-800 dark:text-navy-100">{t(item.label)}</span>
                <div role="radiogroup" aria-label={t(item.label)} className="flex flex-wrap gap-1">
                  {ex.categories.map((c) => {
                    const sel = answer.map[item.id] === c.id
                    const truth = showTruth && item.correctCategoryId === c.id
                    return (
                      <button
                        key={c.id}
                        type="button"
                        role="radio"
                        aria-checked={sel}
                        disabled={locked}
                        onClick={() => onChange({ kind: 'classify', map: { ...answer.map, [item.id]: c.id } })}
                        className={cx(
                          'min-h-9 rounded-lg px-3 py-1 text-sm font-semibold ring-1 transition',
                          truth ? 'bg-money-500 text-white ring-money-500' : sel ? (evaluation && !ok ? 'bg-red-500 text-white ring-red-500' : 'bg-electric-500 text-white ring-electric-500') : 'bg-navy-50 text-navy-600 ring-navy-200 dark:bg-navy-800 dark:text-navy-200 dark:ring-navy-700',
                        )}
                      >
                        {t(c.label)}
                      </button>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>
      )}

      {ex.kind === 'journal' && answer.kind === 'journal' && (
        <JournalEditor
          idPrefix={`j-${ex.id}`}
          lines={answer.lines}
          onChange={(lines) => onChange({ kind: 'journal', lines })}
          accountChoices={orderedAccountChoices(ex, attempt)}
          disabled={locked}
          lineStatus={evaluation && reveal ? checkJournal(answer.lines, ex.expected).lineStatus : undefined}
        />
      )}

      {ex.kind === 'fields' && answer.kind === 'fields' && (
        <div className="space-y-2">
          {ex.fields.map((f) => {
            const ok = evaluation?.parts?.[f.id]
            return (
              <div key={f.id} className="flex items-center gap-3">
                <label htmlFor={`f-${ex.id}-${f.id}`} className="flex-1 text-[15px] text-navy-700 dark:text-navy-100">
                  {t(f.label)} {f.unit !== 'none' && <span className="text-xs text-navy-400">({unitLabel(f.unit, lang)})</span>}
                </label>
                <input
                  id={`f-${ex.id}-${f.id}`}
                  inputMode="decimal"
                  autoComplete="off"
                  value={answer.values[f.id] ?? ''}
                  disabled={locked}
                  onChange={(e) => onChange({ kind: 'fields', values: { ...answer.values, [f.id]: e.target.value } })}
                  className={cx(
                    'tabular w-36 rounded-xl border-2 bg-white px-3 py-2 text-right font-semibold text-navy-900 dark:bg-navy-950 dark:text-white',
                    evaluation ? (ok ? 'border-money-500' : 'border-red-500') : 'border-navy-200 dark:border-navy-700',
                  )}
                />
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
