import { describe, expect, it } from 'vitest'
import { accountingEquation, buildLedger, checkJournal, isBalanced, solveEquation, trialBalance, type DraftLine, type PostedEntry } from '../lib/accounting'
import { ACCOUNTS, getAccount } from '../content/accounts'
import { LAB_TRANSACTIONS } from '../content/labTransactions'

const d = (accountCode: string, side: 'D' | 'C', amount: string): DraftLine => ({ accountCode, side, amount })

describe('accounting equation', () => {
  it('solves the missing element', () => {
    expect(solveEquation({ assets: 1000, liabilities: 400 })).toBe(600)
    expect(solveEquation({ assets: 1000, equity: 600 })).toBe(400)
    expect(solveEquation({ liabilities: 400, equity: 600 })).toBe(1000)
    expect(solveEquation({ assets: 1000 })).toBeNull()
  })
  it('holds after posting all 20 lab transactions (A = L + E + net income)', () => {
    const entries: PostedEntry[] = LAB_TRANSACTIONS.map((t) => ({ id: t.id, date: t.date, description: t.description, lines: t.expected }))
    const eq = accountingEquation(entries)
    expect(eq.holds).toBe(true)
    expect(eq.assets).toBeCloseTo(eq.liabilities + eq.equity + eq.netIncome, 2)
    const tb = trialBalance(entries)
    expect(tb.totalDebit).toBeCloseTo(tb.totalCredit, 2)
  })
  it('the ledger computes T-account balances', () => {
    const led = buildLedger([
      { id: '1', date: '2026-01-01', description: { es: '', en: '' }, lines: [{ accountCode: '1102', side: 'D', amount: 500 }, { accountCode: '3101', side: 'C', amount: 500 }] },
      { id: '2', date: '2026-01-02', description: { es: '', en: '' }, lines: [{ accountCode: '6102', side: 'D', amount: 120 }, { accountCode: '1102', side: 'C', amount: 120 }] },
    ])
    const bank = led.find((t) => t.code === '1102')!
    expect(bank.totalDebit).toBe(500)
    expect(bank.totalCredit).toBe(120)
    expect(bank.balance).toBe(380)
  })
})

describe('journal entries', () => {
  const expected = LAB_TRANSACTIONS.find((t) => t.id === 'TX03')!.expected // cash purchase 50k + IVA 8k
  it('every lab transaction solution balances', () => {
    for (const t of LAB_TRANSACTIONS) expect(isBalanced(t.expected), t.id).toBe(true)
  })
  it('correct entry passes', () => {
    const r = checkJournal(expected.map((l) => d(l.accountCode, l.side, String(l.amount))), expected)
    expect(r.balanced).toBe(true)
    expect(r.correct).toBe(true)
    expect(r.score).toBe(1)
  })
  it('detects an unbalanced entry', () => {
    const r = checkJournal([d('1108', 'D', '50000'), d('1109', 'D', '8000'), d('1102', 'C', '50000')], expected)
    expect(r.balanced).toBe(false)
    expect(r.correct).toBe(false)
  })
  it('a BALANCED entry with the WRONG accounts is NOT correct', () => {
    const r = checkJournal([d('6102', 'D', '58000'), d('1102', 'C', '58000')], expected)
    expect(r.balanced).toBe(true)
    expect(r.accountsCorrect).toBe(false)
    expect(r.correct).toBe(false)
    expect(r.feedback.some((f) => /cuadra|balance/i.test(f.es + f.en))).toBe(true)
  })
  it('right accounts on the wrong side are flagged', () => {
    const r = checkJournal(expected.map((l) => d(l.accountCode, l.side === 'D' ? 'C' : 'D', String(l.amount))), expected)
    expect(r.correct).toBe(false)
    expect(Object.values(r.lineStatus)).toContain('wrongSide')
  })
  it('wrong amount but balanced is flagged', () => {
    const r = checkJournal([d('1108', 'D', '40000'), d('1109', 'D', '8000'), d('1102', 'C', '48000')], expected)
    expect(r.balanced).toBe(true)
    expect(r.correct).toBe(false)
    expect(Object.values(r.lineStatus)).toContain('wrongAmount')
  })
  it('invalid amounts and empty entries are rejected with feedback', () => {
    expect(checkJournal([d('1108', 'D', 'abc'), d('1102', 'C', '-5')], expected).correct).toBe(false)
    const empty = checkJournal([], expected)
    expect(empty.correct).toBe(false)
    expect(empty.feedback.length).toBeGreaterThan(0)
  })
})

describe('account classification (chart of accounts)', () => {
  it('codes are unique and type/nature follow the code scheme', () => {
    expect(new Set(ACCOUNTS.map((a) => a.code)).size).toBe(ACCOUNTS.length)
    for (const a of ACCOUNTS) {
      const head = a.code[0]
      if (head === '1') expect(['asset', 'contraAsset']).toContain(a.type)
      if (head === '2') expect(a.type).toBe('liability')
      if (head === '3') expect(a.type).toBe('equity')
      if (a.type === 'asset' || a.type === 'expense') expect(a.nature, a.code).toBe('D')
      if (a.type === 'liability' || a.type === 'contraAsset') expect(a.nature, a.code).toBe('C')
    }
  })
  it('known classifications', () => {
    expect(getAccount('1102')?.type).toBe('asset')
    expect(getAccount('1207')?.type).toBe('contraAsset')
    expect(getAccount('2101')?.type).toBe('liability')
    expect(getAccount('3101')?.type).toBe('equity')
    expect(getAccount('4101')?.type).toBe('revenue')
    expect(getAccount('6102')?.type).toBe('expense')
    expect(getAccount('9999')).toBeUndefined()
  })
})
