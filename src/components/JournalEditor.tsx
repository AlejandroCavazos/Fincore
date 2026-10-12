import { Plus, Trash2, Scale } from 'lucide-react'
import { ACCOUNTS, getAccount } from '../content/accounts'
import type { DraftLine, LineStatus } from '../lib/accounting'
import { parseNumber, fmtMoney } from '../lib/numbers'
import { useI18n } from '../state/store'
import { cx } from './ui'

interface Props {
  idPrefix: string
  lines: DraftLine[]
  onChange: (lines: DraftLine[]) => void
  /** Restrict the selector to these codes (in display order). Defaults to the whole catalog. */
  accountChoices?: string[]
  disabled?: boolean
  lineStatus?: Record<number, LineStatus>
}

export function JournalEditor({ idPrefix, lines, onChange, accountChoices, disabled, lineStatus }: Props) {
  const { t, tx, lang } = useI18n()
  const accounts = accountChoices ? accountChoices.map((c) => getAccount(c)).filter((a) => !!a) : ACCOUNTS
  const set = (i: number, patch: Partial<DraftLine>) => onChange(lines.map((l, k) => (k === i ? { ...l, ...patch } : l)))
  const debit = lines.reduce((s, l) => s + (l.side === 'D' ? parseNumber(l.amount) ?? 0 : 0), 0)
  const credit = lines.reduce((s, l) => s + (l.side === 'C' ? parseNumber(l.amount) ?? 0 : 0), 0)
  const balanced = debit > 0 && Math.abs(debit - credit) < 0.005

  const statusClass = (s?: LineStatus) =>
    s === 'ok' ? 'ring-2 ring-money-500' : s ? 'ring-2 ring-red-500' : 'ring-1 ring-navy-100 dark:ring-navy-800'
  const statusText = (s?: LineStatus) =>
    s === 'ok'
      ? tx('Correcto', 'Correct')
      : s === 'wrongSide'
        ? tx('Naturaleza incorrecta', 'Wrong side')
        : s === 'wrongAmount'
          ? tx('Importe incorrecto', 'Wrong amount')
          : s === 'wrongAccount'
            ? tx('Cuenta no corresponde', 'Wrong account')
            : s === 'invalid'
              ? tx('Renglón incompleto', 'Incomplete row')
              : ''

  return (
    <div className="space-y-2">
      {lines.map((l, i) => (
        <div key={i} className={cx('rounded-xl bg-navy-50/60 p-2 dark:bg-navy-950/60', statusClass(lineStatus?.[i]))}>
          <div className="flex gap-2">
            <label className="sr-only" htmlFor={`${idPrefix}-acc-${i}`}>
              {tx(`Cuenta del renglón ${i + 1}`, `Account for row ${i + 1}`)}
            </label>
            <select
              id={`${idPrefix}-acc-${i}`}
              value={l.accountCode}
              disabled={disabled}
              onChange={(e) => set(i, { accountCode: e.target.value })}
              className="min-w-0 flex-1 rounded-lg border border-navy-200 bg-white px-2 py-2 text-navy-900 dark:border-navy-700 dark:bg-navy-900 dark:text-white"
            >
              <option value="">{tx('— Selecciona cuenta —', '— Choose account —')}</option>
              {accounts.map((a) => (
                <option key={a!.code} value={a!.code}>
                  {a!.code} · {t(a!.name)}
                </option>
              ))}
            </select>
            <button
              type="button"
              disabled={disabled || lines.length <= 2}
              onClick={() => onChange(lines.filter((_, k) => k !== i))}
              aria-label={tx(`Eliminar renglón ${i + 1}`, `Delete row ${i + 1}`)}
              className="shrink-0 rounded-lg p-2 text-navy-400 hover:bg-red-50 hover:text-red-600 disabled:opacity-30 dark:hover:bg-red-950"
            >
              <Trash2 className="h-4 w-4" />
            </button>
          </div>
          <div className="mt-2 flex gap-2">
            <div role="radiogroup" aria-label={tx('Cargo o abono', 'Debit or credit')} className="flex shrink-0 rounded-lg bg-navy-100 p-0.5 dark:bg-navy-800">
              {(['D', 'C'] as const).map((s) => (
                <button
                  key={s}
                  type="button"
                  role="radio"
                  aria-checked={l.side === s}
                  disabled={disabled}
                  onClick={() => set(i, { side: s })}
                  className={cx(
                    'min-h-9 rounded-md px-3 text-sm font-semibold',
                    l.side === s ? (s === 'D' ? 'bg-electric-500 text-white' : 'bg-money-500 text-white') : 'text-navy-500 dark:text-navy-300',
                  )}
                >
                  {s === 'D' ? tx('Cargo', 'Debit') : tx('Abono', 'Credit')}
                </button>
              ))}
            </div>
            <label className="sr-only" htmlFor={`${idPrefix}-amt-${i}`}>
              {tx(`Importe del renglón ${i + 1}`, `Amount for row ${i + 1}`)}
            </label>
            <input
              id={`${idPrefix}-amt-${i}`}
              inputMode="decimal"
              placeholder="0.00"
              value={l.amount}
              disabled={disabled}
              onChange={(e) => set(i, { amount: e.target.value })}
              className="tabular min-w-0 flex-1 rounded-lg border border-navy-200 bg-white px-3 py-2 text-right text-navy-900 dark:border-navy-700 dark:bg-navy-900 dark:text-white"
            />
          </div>
          {lineStatus?.[i] && <p className={cx('mt-1 text-xs font-semibold', lineStatus[i] === 'ok' ? 'text-money-600' : 'text-red-600 dark:text-red-400')}>{statusText(lineStatus[i])}</p>}
        </div>
      ))}
      <div className="flex flex-wrap items-center justify-between gap-2">
        <button
          type="button"
          disabled={disabled || lines.length >= 10}
          onClick={() => onChange([...lines, { accountCode: '', side: 'D', amount: '' }])}
          className="inline-flex items-center gap-1 rounded-lg px-2 py-1.5 text-sm font-semibold text-electric-600 hover:bg-electric-500/10 disabled:opacity-40 dark:text-electric-300"
        >
          <Plus className="h-4 w-4" /> {tx('Agregar renglón', 'Add row')}
        </button>
        <div className={cx('flex items-center gap-2 rounded-lg px-2 py-1 text-xs font-semibold tabular', balanced ? 'bg-money-500/10 text-money-700 dark:text-money-300' : 'bg-navy-100 text-navy-600 dark:bg-navy-800 dark:text-navy-200')}>
          <Scale className="h-4 w-4" aria-hidden />
          <span>
            {tx('Cargos', 'Debits')} {fmtMoney(debit, lang)} · {tx('Abonos', 'Credits')} {fmtMoney(credit, lang)}
          </span>
          <span aria-live="polite">{balanced ? tx('✓ Cuadra', '✓ Balanced') : tx('No cuadra', 'Not balanced')}</span>
        </div>
      </div>
    </div>
  )
}
