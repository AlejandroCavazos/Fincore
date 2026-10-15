import { describe, expect, test } from 'vitest'
import { getAccount } from '../content/accounts'
import { isBalanced, checkJournal } from '../lib/accounting'
import { examDocs, EXAM_SIZE, LAB_LEVELS, practiceDoc, type PracticeDoc } from '../lib/cfdi'

const now = new Date('2026-10-15T12:00:00Z')
const ok = (d: PracticeDoc) => {
  expect(isBalanced(d.expected), `${d.id} ${d.title.es} balanced`).toBe(true)
  for (const l of d.expected) {
    expect(getAccount(l.accountCode), l.accountCode).toBeTruthy()
    expect(l.amount).toBeGreaterThan(0)
  }
  expect(d.cfdis.length).toBeGreaterThan(0)
  expect(d.formulas.length).toBeGreaterThan(0)
  for (const f of d.formulas) expect(f.calc.join('')).not.toMatch(/NaN|undefined/)
  const draft = d.expected.map((l) => ({ accountCode: l.accountCode, side: l.side, amount: String(l.amount) }))
  expect(checkJournal(draft, d.expected).correct).toBe(true)
  for (const c of d.cfdis) {
    if (c.type === 'I' || c.type === 'E') expect(Math.abs(c.subtotal - c.discount + c.iva - c.retIsr - c.retIva - c.total)).toBeLessThan(0.006)
    expect(c.date.startsWith('2026-10')).toBe(true)
  }
}

describe('practice CFDIs', () => {
  test('every practice document is balanced and gradable (300 seeds per level)', () => {
    for (const lv of LAB_LEVELS) for (let s = 1; s <= 300; s++) ok(practiceDoc(lv, s, now))
  })
  test('same seed, same document', () => {
    expect(practiceDoc('intermedio', 42, now)).toEqual(practiceDoc('intermedio', 42, now))
  })
  test('exam months have the right size, are sorted, and payments follow their invoices', () => {
    for (const lv of LAB_LEVELS)
      for (let s = 1; s <= 60; s++) {
        const docs = examDocs(lv, s, now)
        expect(docs).toHaveLength(EXAM_SIZE[lv])
        docs.forEach(ok)
        const dates = docs.map((d) => d.cfdis[d.cfdis.length - 1].date)
        expect([...dates].sort()).toEqual(dates)
        docs.forEach((d, i) => {
          const pay = d.cfdis.find((c) => c.payment)
          if (!pay) return
          const inv = docs.findIndex((x) => x.cfdis.some((c) => c.uuid === pay.payment!.uuid))
          if (inv >= 0) expect(inv).toBeLessThan(i)
        })
        expect(new Set(docs.map((d) => d.id)).size).toBe(docs.length)
      }
  })
})
