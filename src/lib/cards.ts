import type { Exercise, FormulaGuide, L, Lesson } from '../types'

/**
 * Turns a theory subtopic into short swipeable cards, automatically, from the
 * existing content: one key idea per card (the rest of the paragraph stays
 * behind "Ver más"), lists and formulas as their own cards, and a quick
 * question every few cards. No content is rewritten or lost.
 */
export type TheoryCard =
  | { kind: 'title'; heading: L; lead: L | null }
  | { kind: 'idea'; text: L; more: L | null }
  | { kind: 'list'; items: L[] }
  | { kind: 'formula'; formula?: string; guide?: FormulaGuide }
  | { kind: 'check'; exercise: Exercise }
  | { kind: 'keypoints'; items: L[] }

/** Only these kinds answer with one tap. */
const QUICK = new Set(['mcq', 'truefalse'])
const MAX_PROMPT = 240
const QUESTION_EVERY = 3
const SHORT = 70

const balanced = (s: string) => (s.match(/\*\*/g)?.length ?? 0) % 2 === 0

/** First sentence (two if the first is very short); the rest goes behind "Ver más". */
export function splitLead(text: string): [string, string] {
  const parts = text.split(/(?<=[.!?:])\s+(?=[¿¡(A-ZÁÉÍÓÚÑ0-9*"“])/)
  if (parts.length < 2) return [text, '']
  let n = 1
  if (parts[0].length < SHORT && parts.length > 2) n = 2
  const lead = parts.slice(0, n).join(' ')
  const rest = parts.slice(n).join(' ')
  // Never cut through **bold** markup.
  if (!balanced(lead) || !balanced(rest)) return [text, '']
  return [lead, rest]
}

function splitL(p: L): [L, L | null] {
  const [es, esRest] = splitLead(p.es)
  const [en, enRest] = splitLead(p.en)
  // Keep both languages in step: if one cannot be split, show the whole paragraph.
  if (!esRest || !enRest) return [p, null]
  return [{ es, en }, { es: esRest, en: enRest }]
}

/** Quick questions of the lesson, spread across its subtopics in order. */
export function quickChecks(lesson: Lesson, exercises: Exercise[], index: number): Exercise[] {
  const quick = exercises.filter((e) => QUICK.has(e.kind) && e.prompt.es.length <= MAX_PROMPT)
  return quick.filter((_, i) => i % lesson.theory.length === index)
}

export function buildCards(lesson: Lesson, index: number, exercises: Exercise[]): TheoryCard[] {
  const sec = lesson.theory[index]
  const out: TheoryCard[] = []
  const [first, ...rest] = sec.body
  const firstSplit = first ? splitL(first) : null
  out.push({ kind: 'title', heading: sec.heading, lead: firstSplit ? firstSplit[0] : null })
  if (firstSplit?.[1]) out.push({ kind: 'idea', text: firstSplit[1], more: null })
  for (const p of rest) {
    const [text, more] = splitL(p)
    out.push({ kind: 'idea', text, more })
  }
  if (sec.bullets?.length) out.push({ kind: 'list', items: sec.bullets })
  if (sec.formula) out.push({ kind: 'formula', formula: sec.formula })
  for (const g of sec.formulas ?? []) out.push({ kind: 'formula', guide: g })

  // A quick question after every few cards, the rest at the end.
  const checks = quickChecks(lesson, exercises, index)
  const withChecks: TheoryCard[] = []
  let k = 0
  out.forEach((c, i) => {
    withChecks.push(c)
    if ((i + 1) % QUESTION_EVERY === 0 && k < checks.length) withChecks.push({ kind: 'check', exercise: checks[k++] })
  })
  while (k < checks.length && k < 2) withChecks.push({ kind: 'check', exercise: checks[k++] })
  if (index === lesson.theory.length - 1 && lesson.keyPoints.length) withChecks.push({ kind: 'keypoints', items: lesson.keyPoints })
  return withChecks
}

/** Swipeable cards are on for these topics (pilot: Contabilidad Nivel 1). */
export const cardsEnabled = (lesson: Lesson) => lesson.id.startsWith('L1-')
