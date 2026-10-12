import { describe, expect, it } from 'vitest'
import { evaluate } from '../lib/engine'
import { parseNumber, withinTolerance } from '../lib/numbers'
import type { ClassifyExercise, FieldsExercise, FormulaExercise, NumericExercise, TrueFalseExercise } from '../types'

const base = { level: 1 as const, module: 'L1-01', prompt: { es: 'p', en: 'p' }, explanation: { es: 'e', en: 'e' }, difficulty: 1 as const, points: 10, competency: 'c' }

describe('number parsing and tolerance', () => {
  it('parses common learner formats', () => {
    expect(parseNumber('$12,500.50')).toBe(12500.5)
    expect(parseNumber('12.5%')).toBe(12.5)
    expect(parseNumber('-1,000')).toBe(-1000)
    expect(parseNumber('12,5')).toBe(12.5)
    expect(parseNumber(' 3 ')).toBe(3)
    expect(parseNumber('abc')).toBeNull()
    expect(parseNumber('')).toBeNull()
    expect(parseNumber('1e999')).toBeNull()
  })
  it('tolerance = max(abs, rel·|answer|)', () => {
    expect(withinTolerance(100.4, 100, { abs: 0.5 })).toBe(true)
    expect(withinTolerance(100.6, 100, { abs: 0.5 })).toBe(false)
    expect(withinTolerance(1004, 1000, { rel: 0.005 })).toBe(true)
    expect(withinTolerance(1006, 1000, { rel: 0.005 })).toBe(false)
  })
})

describe('evaluate() for each exercise kind', () => {
  it('numeric with tolerance, invalid input', () => {
    const ex: NumericExercise = { ...base, id: 'n', kind: 'numeric', answer: 1210, unit: 'MXN', decimals: 2, tolerance: { abs: 1 } }
    expect(evaluate(ex, { kind: 'numeric', raw: '1,210.50' }).correct).toBe(true)
    expect(evaluate(ex, { kind: 'numeric', raw: '1215' }).correct).toBe(false)
    const bad = evaluate(ex, { kind: 'numeric', raw: 'hola' })
    expect(bad.correct).toBe(false)
    expect(bad.feedback.length).toBeGreaterThan(0)
  })
  it('true/false', () => {
    const ex: TrueFalseExercise = { ...base, id: 't', kind: 'truefalse', answer: false }
    expect(evaluate(ex, { kind: 'truefalse', value: false }).correct).toBe(true)
    expect(evaluate(ex, { kind: 'truefalse', value: true }).correct).toBe(false)
    expect(evaluate(ex, { kind: 'truefalse', value: null }).correct).toBe(false)
  })
  it('formula blanks graded by option id with partial credit', () => {
    const ex: FormulaExercise = {
      ...base, id: 'f', kind: 'formula', template: '{{b1}} = {{b2}} + C',
      blanks: [
        { id: 'b1', options: [{ id: 'x1', text: { es: 'A', en: 'A' } }, { id: 'x2', text: { es: 'P', en: 'L' } }], correctOptionId: 'x1' },
        { id: 'b2', options: [{ id: 'y1', text: { es: 'P', en: 'L' } }, { id: 'y2', text: { es: 'I', en: 'R' } }], correctOptionId: 'y1' },
      ],
    }
    expect(evaluate(ex, { kind: 'formula', blanks: { b1: 'x1', b2: 'y1' } }).correct).toBe(true)
    const half = evaluate(ex, { kind: 'formula', blanks: { b1: 'x1', b2: 'y2' } })
    expect(half.correct).toBe(false)
    expect(half.score).toBeCloseTo(0.5, 10)
  })
  it('classify accounts with partial credit', () => {
    const ex: ClassifyExercise = {
      ...base, id: 'c', kind: 'classify',
      categories: [{ id: 'A', label: { es: 'Activo', en: 'Asset' } }, { id: 'L', label: { es: 'Pasivo', en: 'Liability' } }],
      items: [
        { id: 'i1', label: { es: 'Bancos', en: 'Bank' }, correctCategoryId: 'A' },
        { id: 'i2', label: { es: 'Proveedores', en: 'Payables' }, correctCategoryId: 'L' },
      ],
    }
    expect(evaluate(ex, { kind: 'classify', map: { i1: 'A', i2: 'L' } }).correct).toBe(true)
    const r = evaluate(ex, { kind: 'classify', map: { i1: 'A', i2: 'A' } })
    expect(r.correct).toBe(false)
    expect(r.score).toBeCloseTo(0.5, 10)
  })
  it('fields (statement completion / T-account) with tolerance per field', () => {
    const ex: FieldsExercise = {
      ...base, id: 'fl', kind: 'fields',
      fields: [
        { id: 'a', label: { es: 'a', en: 'a' }, answer: 100, unit: 'MXN', tolerance: { abs: 0.5 } },
        { id: 'b', label: { es: 'b', en: 'b' }, answer: -20, unit: 'MXN', tolerance: { abs: 0.5 } },
      ],
    }
    expect(evaluate(ex, { kind: 'fields', values: { a: '100', b: '-20' } }).correct).toBe(true)
    expect(evaluate(ex, { kind: 'fields', values: { a: '100', b: '20' } }).correct).toBe(false)
  })
})
