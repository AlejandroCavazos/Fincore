import { describe, expect, it } from 'vitest'
import { CASES, starsFor } from '../lib/despacho'
import { checkJournal } from '../lib/accounting'
import { getAccount } from '../content/accounts'

describe('Tu Despacho cases', () => {
  for (const c of CASES)
    it(`${c.id}: documents balance, accounts exist, final has one answer and the table adds up`, () => {
      for (const { doc } of c.docs) {
        const d = doc.expected.filter((l) => l.side === 'D').reduce((s, l) => s + l.amount, 0)
        const k = doc.expected.filter((l) => l.side === 'C').reduce((s, l) => s + l.amount, 0)
        expect(Math.abs(d - k)).toBeLessThan(0.005)
        for (const l of doc.expected) {
          expect(getAccount(l.accountCode)).toBeTruthy()
          if (c.accounts) expect(c.accounts).toContain(l.accountCode)
        }
        const cf = doc.cfdis[0]
        expect(doc.expected.some((l) => Math.abs(l.amount - cf.total) < 0.005)).toBe(true)
        const draft = doc.expected.map((l) => ({ accountCode: l.accountCode, side: l.side, amount: String(l.amount) }))
        expect(checkJournal(draft, doc.expected).correct).toBe(true)
      }
      expect(c.final.options.filter((o) => o.ok)).toHaveLength(1)
      const rows = c.final.table.map(([, v]) => v)
      expect(rows.slice(0, -1).reduce((s, v) => s + v, 0)).toBe(rows[rows.length - 1])
      if (c.refers) expect(CASES.some((x) => x.id === c.refers && x.needs?.case === c.id)).toBe(true)
    })
  it('stars by mistakes', () => {
    expect([0, 1, 2, 3].map(starsFor)).toEqual([3, 2, 2, 1])
  })
})
