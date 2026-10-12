import type { Answer, Evaluation, Exercise, L, Option, ValidationMethod } from '../types'
import { checkJournal } from './accounting'
import { parseNumber, withinTolerance, fmtUnit } from './numbers'
import { cryptoRng, fisherYates, randomId, type Rng } from './shuffle'

// ───────────────────────────── Attempts ─────────────────────────────

export interface ResponseRecord {
  answer: Answer
  evaluation: Evaluation
  at: string
}

/**
 * An attempt freezes the presentation order of everything shuffled
 * (options, formula choices, classify items, exercise order) for its lifetime.
 * Re-renders, selections and feedback never reshuffle; only a NEW attempt does.
 */
export interface Attempt {
  id: string
  /** Lesson id, exam id or review session id. */
  key: string
  exerciseIds: string[]
  /** Shuffled id orders. Keys: exerciseId | `${exerciseId}:${blankId}` | `${exerciseId}:items`. */
  orders: Record<string, string[]>
  index: number
  responses: Record<string, ResponseRecord>
  startedAt: string
  finishedAt?: string
}

export function validationMethod(ex: Exercise): ValidationMethod {
  switch (ex.kind) {
    case 'mcq':
      return 'optionId'
    case 'multi':
      return 'optionIdSet'
    case 'truefalse':
      return 'boolean'
    case 'numeric':
      return 'numericTolerance'
    case 'formula':
      return 'blankOptionIds'
    case 'classify':
      return 'categoryMap'
    case 'journal':
      return 'journalLines'
    case 'fields':
      return 'fieldsTolerance'
  }
}

/** Builds the frozen shuffle orders for one exercise. */
export function shuffleOrdersFor(ex: Exercise, rng: Rng = cryptoRng): Record<string, string[]> {
  const o: Record<string, string[]> = {}
  if (ex.kind === 'mcq' || ex.kind === 'multi') o[ex.id] = fisherYates(ex.options.map((x) => x.id), rng)
  if (ex.kind === 'formula') for (const b of ex.blanks) o[`${ex.id}:${b.id}`] = fisherYates(b.options.map((x) => x.id), rng)
  if (ex.kind === 'classify') o[`${ex.id}:items`] = fisherYates(ex.items.map((x) => x.id), rng)
  if (ex.kind === 'journal') o[`${ex.id}:accounts`] = fisherYates(ex.accountChoices, rng)
  return o
}

export function createAttempt(
  key: string,
  exercises: Exercise[],
  opts: { rng?: Rng; shuffleExercises?: boolean } = {},
): Attempt {
  const rng = opts.rng ?? cryptoRng
  const list = opts.shuffleExercises ? fisherYates(exercises, rng) : exercises
  const orders: Record<string, string[]> = {}
  for (const ex of list) Object.assign(orders, shuffleOrdersFor(ex, rng))
  return {
    id: randomId('att_'),
    key,
    exerciseIds: list.map((e) => e.id),
    orders,
    index: 0,
    responses: {},
    startedAt: new Date().toISOString(),
  }
}

function applyOrder<T extends { id: string }>(items: T[], order: string[] | undefined): T[] {
  if (!order) return items
  const map = new Map(items.map((i) => [i.id, i]))
  const out = order.map((id) => map.get(id)).filter((x): x is T => !!x)
  // Safety: anything not covered by the order (content changed) is appended.
  for (const i of items) if (!order.includes(i.id)) out.push(i)
  return out
}

/** Options of an mcq/multi exercise in the attempt's frozen order. */
export function orderedOptions(ex: Exercise, attempt?: Pick<Attempt, 'orders'>): Option[] {
  if (ex.kind !== 'mcq' && ex.kind !== 'multi') return []
  return applyOrder(ex.options, attempt?.orders[ex.id])
}

export function orderedBlankOptions(ex: Exercise, blankId: string, attempt?: Pick<Attempt, 'orders'>): Option[] {
  if (ex.kind !== 'formula') return []
  const b = ex.blanks.find((x) => x.id === blankId)
  if (!b) return []
  return applyOrder(b.options, attempt?.orders[`${ex.id}:${blankId}`])
}

export function orderedItems(ex: Exercise, attempt?: Pick<Attempt, 'orders'>) {
  if (ex.kind !== 'classify') return []
  return applyOrder(ex.items, attempt?.orders[`${ex.id}:items`])
}

export function orderedAccountChoices(ex: Exercise, attempt?: Pick<Attempt, 'orders'>): string[] {
  if (ex.kind !== 'journal') return []
  const order = attempt?.orders[`${ex.id}:accounts`]
  if (!order) return ex.accountChoices
  return [...order.filter((c) => ex.accountChoices.includes(c)), ...ex.accountChoices.filter((c) => !order.includes(c))]
}

// ───────────────────────────── Evaluation ─────────────────────────────

const ok: L = { es: '¡Correcto!', en: 'Correct!' }
const no: L = { es: 'Respuesta incorrecta.', en: 'Incorrect answer.' }

export function emptyAnswer(ex: Exercise): Answer {
  switch (ex.kind) {
    case 'mcq':
      return { kind: 'mcq', optionId: null }
    case 'multi':
      return { kind: 'multi', optionIds: [] }
    case 'truefalse':
      return { kind: 'truefalse', value: null }
    case 'numeric':
      return { kind: 'numeric', raw: '' }
    case 'formula':
      return { kind: 'formula', blanks: {} }
    case 'classify':
      return { kind: 'classify', map: {} }
    case 'journal':
      return {
        kind: 'journal',
        lines: [
          { accountCode: '', side: 'D', amount: '' },
          { accountCode: '', side: 'C', amount: '' },
        ],
      }
    case 'fields':
      return { kind: 'fields', values: {} }
  }
}

/** True when the learner has provided enough input to submit. */
export function isAnswerComplete(ex: Exercise, a: Answer): boolean {
  switch (a.kind) {
    case 'mcq':
      return !!a.optionId
    case 'multi':
      return a.optionIds.length > 0
    case 'truefalse':
      return a.value !== null
    case 'numeric':
      return a.raw.trim() !== ''
    case 'formula':
      return ex.kind === 'formula' && ex.blanks.every((b) => !!a.blanks[b.id])
    case 'classify':
      return ex.kind === 'classify' && ex.items.every((i) => !!a.map[i.id])
    case 'journal':
      return a.lines.some((l) => l.accountCode && l.amount.trim() !== '')
    case 'fields':
      return ex.kind === 'fields' && ex.fields.every((f) => (a.values[f.id] ?? '').trim() !== '')
  }
}

/**
 * Evaluates an answer. Option-based exercises are always validated by option ID,
 * never by visual position.
 */
export function evaluate(ex: Exercise, a: Answer): Evaluation {
  if (a.kind !== ex.kind) throw new Error(`Answer kind ${a.kind} does not match exercise kind ${ex.kind}`)
  switch (ex.kind) {
    case 'mcq': {
      const ans = a as Extract<Answer, { kind: 'mcq' }>
      const correct = ans.optionId === ex.correctOptionId
      return { correct, score: correct ? 1 : 0, feedback: [correct ? ok : no], parts: ans.optionId ? { [ans.optionId]: correct } : {} }
    }
    case 'multi': {
      const ans = a as Extract<Answer, { kind: 'multi' }>
      const sel = new Set(ans.optionIds)
      const target = new Set(ex.correctOptionIds)
      const parts: Record<string, boolean> = {}
      let hits = 0
      let wrong = 0
      for (const id of sel) {
        parts[id] = target.has(id)
        if (target.has(id)) hits++
        else wrong++
      }
      const correct = wrong === 0 && hits === target.size
      const score = correct ? 1 : Math.max(0, (hits - wrong) / target.size)
      const fb: L[] = [correct ? ok : no]
      if (!correct && hits < target.size)
        fb.push({ es: `Te faltaron ${target.size - hits} opción(es) correcta(s).`, en: `You missed ${target.size - hits} correct option(s).` })
      if (wrong > 0) fb.push({ es: `Seleccionaste ${wrong} opción(es) incorrecta(s).`, en: `You selected ${wrong} incorrect option(s).` })
      return { correct, score, feedback: fb, parts }
    }
    case 'truefalse': {
      const ans = a as Extract<Answer, { kind: 'truefalse' }>
      const correct = ans.value === ex.answer
      return { correct, score: correct ? 1 : 0, feedback: [correct ? ok : no] }
    }
    case 'numeric': {
      const ans = a as Extract<Answer, { kind: 'numeric' }>
      const v = parseNumber(ans.raw)
      if (v === null)
        return { correct: false, score: 0, feedback: [{ es: 'Escribe un número válido (ej. 1250.50).', en: 'Enter a valid number (e.g. 1250.50).' }] }
      const correct = withinTolerance(v, ex.answer, ex.tolerance)
      const fb: L[] = [correct ? ok : no]
      if (!correct) {
        if (ex.unit === '%' && withinTolerance(v * 100, ex.answer, ex.tolerance))
          fb.push({ es: 'Parece que escribiste la tasa en decimal. Escríbela en porcentaje (ej. 12.5).', en: 'It looks like you typed a decimal rate. Enter it as a percentage (e.g. 12.5).' })
        else if (Math.abs(v + ex.answer) < Math.max(1e-9, Math.abs(ex.answer) * 0.005))
          fb.push({ es: 'Revisa el signo de tu resultado.', en: 'Check the sign of your result.' })
        fb.push({
          es: `Respuesta esperada: ${fmtUnit(ex.answer, ex.unit, 'es', ex.decimals)}.`,
          en: `Expected answer: ${fmtUnit(ex.answer, ex.unit, 'en', ex.decimals)}.`,
        })
      }
      return { correct, score: correct ? 1 : 0, feedback: fb }
    }
    case 'formula': {
      const ans = a as Extract<Answer, { kind: 'formula' }>
      const parts: Record<string, boolean> = {}
      let hits = 0
      for (const b of ex.blanks) {
        parts[b.id] = ans.blanks[b.id] === b.correctOptionId
        if (parts[b.id]) hits++
      }
      const correct = hits === ex.blanks.length
      return { correct, score: hits / ex.blanks.length, feedback: [correct ? ok : { es: `${hits} de ${ex.blanks.length} espacios correctos.`, en: `${hits} of ${ex.blanks.length} blanks correct.` }], parts }
    }
    case 'classify': {
      const ans = a as Extract<Answer, { kind: 'classify' }>
      const parts: Record<string, boolean> = {}
      let hits = 0
      for (const i of ex.items) {
        parts[i.id] = ans.map[i.id] === i.correctCategoryId
        if (parts[i.id]) hits++
      }
      const correct = hits === ex.items.length
      return { correct, score: hits / ex.items.length, feedback: [correct ? ok : { es: `${hits} de ${ex.items.length} elementos bien clasificados.`, en: `${hits} of ${ex.items.length} items classified correctly.` }], parts }
    }
    case 'journal': {
      const ans = a as Extract<Answer, { kind: 'journal' }>
      const r = checkJournal(ans.lines, ex.expected)
      const parts: Record<string, boolean> = {}
      for (const [i, s] of Object.entries(r.lineStatus)) parts[`line-${i}`] = s === 'ok'
      return { correct: r.correct, score: r.score, feedback: r.feedback, parts }
    }
    case 'fields': {
      const ans = a as Extract<Answer, { kind: 'fields' }>
      const parts: Record<string, boolean> = {}
      let hits = 0
      for (const f of ex.fields) {
        const v = parseNumber(ans.values[f.id] ?? '')
        parts[f.id] = v !== null && withinTolerance(v, f.answer, f.tolerance)
        if (parts[f.id]) hits++
      }
      const correct = hits === ex.fields.length
      return { correct, score: hits / ex.fields.length, feedback: [correct ? ok : { es: `${hits} de ${ex.fields.length} campos correctos.`, en: `${hits} of ${ex.fields.length} fields correct.` }], parts }
    }
  }
}

/** Builds a correct answer for an exercise (used by tests and the "show solution" view). */
export function solutionAnswer(ex: Exercise): Answer {
  switch (ex.kind) {
    case 'mcq':
      return { kind: 'mcq', optionId: ex.correctOptionId }
    case 'multi':
      return { kind: 'multi', optionIds: [...ex.correctOptionIds] }
    case 'truefalse':
      return { kind: 'truefalse', value: ex.answer }
    case 'numeric':
      return { kind: 'numeric', raw: String(ex.answer) }
    case 'formula':
      return { kind: 'formula', blanks: Object.fromEntries(ex.blanks.map((b) => [b.id, b.correctOptionId])) }
    case 'classify':
      return { kind: 'classify', map: Object.fromEntries(ex.items.map((i) => [i.id, i.correctCategoryId])) }
    case 'journal':
      return { kind: 'journal', lines: ex.expected.map((l) => ({ accountCode: l.accountCode, side: l.side, amount: String(l.amount) })) }
    case 'fields':
      return { kind: 'fields', values: Object.fromEntries(ex.fields.map((f) => [f.id, String(f.answer)])) }
  }
}
