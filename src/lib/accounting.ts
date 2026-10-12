import { getAccount } from '../content/accounts'
import type { JournalLine, L } from '../types'
import { parseNumber } from './numbers'

export const CENT = 0.005

export interface DraftLine {
  accountCode: string
  side: 'D' | 'C'
  amount: string
}

export type LineStatus = 'ok' | 'wrongAccount' | 'wrongSide' | 'wrongAmount' | 'invalid'

export interface JournalCheck {
  /** Lines successfully parsed (blank rows removed). */
  lines: JournalLine[]
  totalDebit: number
  totalCredit: number
  balanced: boolean
  /** Accounts and sides exactly match the expected entry. */
  accountsCorrect: boolean
  amountsCorrect: boolean
  correct: boolean
  /** 0..1 partial credit. */
  score: number
  feedback: L[]
  /** Status of each non-blank draft line, aligned with the draft indexes. */
  lineStatus: Record<number, LineStatus>
}

const name = (code: string): L => getAccount(code)?.name ?? { es: code, en: code }
const sideName = (s: 'D' | 'C'): L => (s === 'D' ? { es: 'cargo', en: 'debit' } : { es: 'abono', en: 'credit' })

function aggregate(lines: JournalLine[]): Map<string, number> {
  const m = new Map<string, number>()
  for (const l of lines) {
    const k = `${l.accountCode}|${l.side}`
    m.set(k, (m.get(k) ?? 0) + l.amount)
  }
  return m
}

export function sumSide(lines: JournalLine[], side: 'D' | 'C'): number {
  return lines.filter((l) => l.side === side).reduce((s, l) => s + l.amount, 0)
}

/** Parses draft rows. Blank rows are skipped; malformed rows are reported. */
export function parseDraft(draft: DraftLine[]): { lines: JournalLine[]; indexes: number[]; errors: L[]; invalid: number[] } {
  const lines: JournalLine[] = []
  const indexes: number[] = []
  const errors: L[] = []
  const invalid: number[] = []
  draft.forEach((d, i) => {
    const blank = !d.accountCode && (d.amount ?? '').trim() === ''
    if (blank) return
    const amt = parseNumber(d.amount)
    if (!d.accountCode) {
      errors.push({ es: `Renglón ${i + 1}: selecciona una cuenta.`, en: `Row ${i + 1}: choose an account.` })
      invalid.push(i)
      return
    }
    if (!getAccount(d.accountCode)) {
      errors.push({ es: `Renglón ${i + 1}: la cuenta ${d.accountCode} no existe en el catálogo.`, en: `Row ${i + 1}: account ${d.accountCode} is not in the chart of accounts.` })
      invalid.push(i)
      return
    }
    if (amt === null || amt <= 0) {
      errors.push({ es: `Renglón ${i + 1}: escribe un importe mayor que cero.`, en: `Row ${i + 1}: enter an amount greater than zero.` })
      invalid.push(i)
      return
    }
    if (d.side !== 'D' && d.side !== 'C') {
      errors.push({ es: `Renglón ${i + 1}: indica cargo o abono.`, en: `Row ${i + 1}: choose debit or credit.` })
      invalid.push(i)
      return
    }
    lines.push({ accountCode: d.accountCode, side: d.side, amount: Math.round(amt * 100) / 100 })
    indexes.push(i)
  })
  return { lines, indexes, errors, invalid }
}

export function isBalanced(lines: JournalLine[]): boolean {
  return lines.length >= 2 && Math.abs(sumSide(lines, 'D') - sumSide(lines, 'C')) < CENT
}

/**
 * Validates a learner's journal entry against the expected entry.
 * A balanced entry is NOT correct when it uses the wrong accounts or sides.
 */
export function checkJournal(draft: DraftLine[], expected: JournalLine[]): JournalCheck {
  const { lines, indexes, errors, invalid } = parseDraft(draft)
  const totalDebit = sumSide(lines, 'D')
  const totalCredit = sumSide(lines, 'C')
  const balanced = isBalanced(lines)
  const feedback: L[] = [...errors]
  const lineStatus: Record<number, LineStatus> = {}
  invalid.forEach((i) => (lineStatus[i] = 'invalid'))

  const exp = aggregate(expected)
  const got = aggregate(lines)

  if (lines.length === 0) {
    feedback.push({ es: 'La póliza está vacía.', en: 'The entry is empty.' })
  } else if (lines.length < 2) {
    feedback.push({ es: 'Una póliza de partida doble necesita al menos un cargo y un abono.', en: 'A double-entry needs at least one debit and one credit.' })
  }

  if (!balanced && lines.length >= 2) {
    feedback.push({
      es: `La póliza no cuadra: cargos ${totalDebit.toFixed(2)} ≠ abonos ${totalCredit.toFixed(2)}.`,
      en: `The entry does not balance: debits ${totalDebit.toFixed(2)} ≠ credits ${totalCredit.toFixed(2)}.`,
    })
  }

  let keysMatch = got.size === exp.size
  let amountsMatch = true
  let good = 0
  for (const [k, v] of exp) {
    const [code, side] = k.split('|') as [string, 'D' | 'C']
    const opposite = `${code}|${side === 'D' ? 'C' : 'D'}`
    if (!got.has(k)) {
      keysMatch = false
      if (got.has(opposite)) {
        feedback.push({
          es: `«${name(code).es}» debe registrarse como ${sideName(side).es}, no como ${sideName(side === 'D' ? 'C' : 'D').es}.`,
          en: `"${name(code).en}" should be a ${sideName(side).en}, not a ${sideName(side === 'D' ? 'C' : 'D').en}.`,
        })
      } else {
        feedback.push({ es: `Falta un ${sideName(side).es} a «${name(code).es}».`, en: `A ${sideName(side).en} to "${name(code).en}" is missing.` })
      }
      continue
    }
    const g = got.get(k)!
    if (Math.abs(g - v) >= CENT) {
      amountsMatch = false
      feedback.push({
        es: `El importe de «${name(code).es}» (${sideName(side).es}) no es correcto.`,
        en: `The amount for "${name(code).en}" (${sideName(side).en}) is not correct.`,
      })
    } else good++
  }
  for (const k of got.keys()) {
    if (exp.has(k)) continue
    const [code, side] = k.split('|') as [string, 'D' | 'C']
    const opposite = `${code}|${side === 'D' ? 'C' : 'D'}`
    keysMatch = false
    if (!exp.has(opposite)) {
      feedback.push({ es: `La cuenta «${name(code).es}» no interviene en esta operación.`, en: `Account "${name(code).en}" is not affected by this transaction.` })
    }
  }

  // Per-line status
  lines.forEach((l, n) => {
    const i = indexes[n]
    const k = `${l.accountCode}|${l.side}`
    const opposite = `${l.accountCode}|${l.side === 'D' ? 'C' : 'D'}`
    if (exp.has(k)) lineStatus[i] = Math.abs((got.get(k) ?? 0) - exp.get(k)!) < CENT ? 'ok' : 'wrongAmount'
    else if (exp.has(opposite)) lineStatus[i] = 'wrongSide'
    else lineStatus[i] = 'wrongAccount'
  })

  const accountsCorrect = keysMatch
  const amountsCorrect = keysMatch && amountsMatch
  const correct = balanced && accountsCorrect && amountsCorrect && errors.length === 0
  if (balanced && !accountsCorrect) {
    feedback.unshift({
      es: 'La póliza está cuadrada, pero las cuentas o su naturaleza (cargo/abono) no son las correctas. Cuadrar no basta.',
      en: 'The entry balances, but the accounts or their sides are wrong. Balancing alone is not enough.',
    })
  }
  if (correct) feedback.unshift({ es: '¡Correcto! Cuentas, naturaleza e importes coinciden y la póliza cuadra.', en: 'Correct! Accounts, sides and amounts match and the entry balances.' })

  const union = new Set([...exp.keys(), ...got.keys()]).size || 1
  const score = correct ? 1 : Math.max(0, Math.min(1, good / union))
  return { lines, totalDebit, totalCredit, balanced, accountsCorrect, amountsCorrect, correct, score, feedback, lineStatus }
}

// ───────────────────────────── Ledger ─────────────────────────────

export interface PostedEntry {
  id: string
  date: string
  description: L
  lines: JournalLine[]
}

export interface TAccount {
  code: string
  debits: { entryId: string; amount: number }[]
  credits: { entryId: string; amount: number }[]
  totalDebit: number
  totalCredit: number
  /** Positive = debit balance, negative = credit balance. */
  balance: number
}

export function buildLedger(entries: PostedEntry[]): TAccount[] {
  const map = new Map<string, TAccount>()
  for (const e of entries) {
    for (const l of e.lines) {
      let t = map.get(l.accountCode)
      if (!t) {
        t = { code: l.accountCode, debits: [], credits: [], totalDebit: 0, totalCredit: 0, balance: 0 }
        map.set(l.accountCode, t)
      }
      if (l.side === 'D') {
        t.debits.push({ entryId: e.id, amount: l.amount })
        t.totalDebit += l.amount
      } else {
        t.credits.push({ entryId: e.id, amount: l.amount })
        t.totalCredit += l.amount
      }
    }
  }
  for (const t of map.values()) t.balance = Math.round((t.totalDebit - t.totalCredit) * 100) / 100
  return [...map.values()].sort((a, b) => a.code.localeCompare(b.code))
}

export interface TrialBalanceRow {
  code: string
  debit: number
  credit: number
  debitBalance: number
  creditBalance: number
}

export interface TrialBalance {
  rows: TrialBalanceRow[]
  totalDebit: number
  totalCredit: number
  totalDebitBalance: number
  totalCreditBalance: number
  balanced: boolean
}

export function trialBalance(entries: PostedEntry[]): TrialBalance {
  const rows = buildLedger(entries).map((t) => ({
    code: t.code,
    debit: t.totalDebit,
    credit: t.totalCredit,
    debitBalance: t.balance > 0 ? t.balance : 0,
    creditBalance: t.balance < 0 ? -t.balance : 0,
  }))
  const s = (f: (r: TrialBalanceRow) => number) => Math.round(rows.reduce((a, r) => a + f(r), 0) * 100) / 100
  const totalDebit = s((r) => r.debit)
  const totalCredit = s((r) => r.credit)
  const totalDebitBalance = s((r) => r.debitBalance)
  const totalCreditBalance = s((r) => r.creditBalance)
  return {
    rows,
    totalDebit,
    totalCredit,
    totalDebitBalance,
    totalCreditBalance,
    balanced: Math.abs(totalDebit - totalCredit) < CENT && Math.abs(totalDebitBalance - totalCreditBalance) < CENT,
  }
}

/**
 * Accounting equation from a ledger: Assets = Liabilities + Equity + (Revenue − Expenses).
 * Contra-assets reduce assets. Returns the components and whether the equation holds.
 */
export function accountingEquation(entries: PostedEntry[]) {
  let assets = 0
  let liabilities = 0
  let equity = 0
  let revenue = 0
  let expenses = 0
  for (const t of buildLedger(entries)) {
    const a = getAccount(t.code)
    if (!a) continue
    const debitBal = t.totalDebit - t.totalCredit
    switch (a.type) {
      case 'asset':
      case 'contraAsset':
        assets += debitBal
        break
      case 'liability':
        liabilities -= debitBal
        break
      case 'equity':
        equity -= debitBal
        break
      case 'revenue':
        revenue -= debitBal
        break
      case 'expense':
        expenses += debitBal
        break
    }
  }
  const r2 = (n: number) => Math.round(n * 100) / 100
  const net = r2(revenue - expenses)
  return {
    assets: r2(assets),
    liabilities: r2(liabilities),
    equity: r2(equity),
    netIncome: net,
    holds: Math.abs(assets - (liabilities + equity + net)) < CENT,
  }
}

/** Simple equation solver: given two of A, L, E returns the third. */
export function solveEquation(v: { assets?: number; liabilities?: number; equity?: number }): number | null {
  const { assets, liabilities, equity } = v
  if (assets === undefined && liabilities !== undefined && equity !== undefined) return liabilities + equity
  if (liabilities === undefined && assets !== undefined && equity !== undefined) return assets - equity
  if (equity === undefined && assets !== undefined && liabilities !== undefined) return assets - liabilities
  return null
}
