import { describe, expect, test } from 'vitest'
import { evaluateSheet } from '../lib/sheet'
import { buildStatements } from '../lib/statements'
import { examDocs, OPENING } from '../lib/cfdi'

describe('sheet engine', () => {
  test('arithmetic, refs, ranges and functions', () => {
    const v = evaluateSheet({ A1: '100', A2: '250', A3: '=SUMA(A1:A2)', B1: '=A3*16%', B2: '=REDONDEAR(PAGO(18%/12;12;-10000);2)', B3: '=TIR(C1:C4)', C1: '-1000', C2: '300', C3: '400', C4: '500', D1: '=(A2-A1)/A1', D2: '=PROMEDIO(A1:A2)', D3: '=SI(A1>50,1,0)', D4: 'texto', D5: '=2^3+1' })
    expect(v.A3).toBe(350)
    expect(v.B1).toBeCloseTo(56)
    expect(v.B2).toBe(916.8)
    expect(v.B3 as number).toBeCloseTo(0.0890, 3)
    expect(v.D1).toBe(1.5)
    expect(v.D2).toBe(175)
    expect(v.D3).toBe(1)
    expect(v.D4).toBe('texto')
    expect(v.D5).toBe(9)
  })
  test('errors: division by zero, unknown name, cycle, bad ref', () => {
    const v = evaluateSheet({ A1: '=1/0', A2: '=FOO(1)', A3: '=A4', A4: '=A3', A5: '=Z99', A6: '=A1+1' })
    expect(v.A1).toBe('#DIV/0!')
    expect(v.A2).toBe('#NOMBRE?')
    expect(v.A3).toBe('#CICLO!')
    expect(v.A5).toBe('#REF!')
    expect(v.A6).toBe('#DIV/0!')
  })
})

describe('statements', () => {
  test('a solved exam month produces a balance sheet that balances', () => {
    for (const lv of ['basico', 'intermedio', 'avanzado'] as const) {
      const docs = examDocs(lv, 7, new Date('2026-10-15'))
      const entries = [{ id: 'AP', date: '2026-10-01', description: { es: 'a', en: 'a' }, lines: OPENING }, ...docs.map((d) => ({ id: d.id, date: d.cfdis[0].date, description: d.title, lines: d.expected }))]
      const s = buildStatements(entries)
      expect(s.balance.holds).toBe(true)
      expect(s.totals.netSales).toBeGreaterThan(0)
      expect(s.ratios).toHaveLength(7)
      expect(s.iva.result).toBeCloseTo(s.iva.charged - s.iva.credit, 2)
    }
  })
})
