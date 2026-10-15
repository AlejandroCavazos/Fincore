import { useMemo } from 'react'
import { ACCOUNT_HELP } from '../../content/accountHelp'
import { getAccount } from '../../content/accounts'
import { buildLedger, trialBalance, type PostedEntry } from '../../lib/accounting'
import { POLICY_NAME, type PolicyType } from '../../lib/cfdi'
import { fmtMoney } from '../../lib/numbers'
import { buildStatements, type Row, type Tone } from '../../lib/statements'
import { navigate } from '../../state/router'
import { useI18n } from '../../state/store'
import type { JournalLine } from '../../types'
import { Card, cx, Notice } from '../ui'

type Entry = PostedEntry & { kind?: PolicyType }

export function useAccName() {
  const { t } = useI18n()
  return (code: string) => `${code} · ${t(getAccount(code)?.name)}`
}

/** The correct entry, line by line, with why each account moves. */
export function Solution({ lines }: { lines: JournalLine[] }) {
  const { t, tx, lang } = useI18n()
  const accName = useAccName()
  return (
    <ul className="space-y-1.5 text-sm">
      {lines.map((l, i) => {
        const h = ACCOUNT_HELP[l.accountCode]
        return (
          <li key={i} className="rounded-lg bg-navy-50 p-2 dark:bg-navy-950">
            <div className="tabular flex flex-wrap justify-between gap-2">
              <span className={cx('font-semibold', l.side === 'C' && 'pl-4')}>{accName(l.accountCode)}</span>
              <span>
                {l.side === 'D' ? tx('Cargo', 'Debit') : tx('Abono', 'Credit')} {fmtMoney(l.amount, lang)}
              </span>
            </div>
            {h && <p className="mt-0.5 text-xs text-navy-600 dark:text-navy-300">{h[l.side] ? `${t(h[l.side])} ` : ''}{t(h.what)}</p>}
          </li>
        )
      })}
    </ul>
  )
}

export function JournalBook({ entries, onDelete }: { entries: Entry[]; onDelete?: (id: string) => void }) {
  const { t, tx, lang } = useI18n()
  const accName = useAccName()
  if (entries.length === 0) return <Card>{tx('Todavía no hay pólizas.', 'No entries yet.')}</Card>
  return (
    <div className="space-y-3">
      {entries.map((e, n) => (
        <Card key={e.id} className="p-3">
          <div className="flex flex-wrap justify-between gap-2 text-xs text-navy-400">
            <span>
              {e.kind ? `${tx('Póliza de', 'Entry type:')} ${t(POLICY_NAME[e.kind])}` : tx('Póliza', 'Entry')} · {n + 1}
            </span>
            <span>{e.date}</span>
          </div>
          <p className="mt-1 text-sm font-medium text-navy-800 dark:text-navy-100">{t(e.description)}</p>
          <div className="overflow-x-auto">
            <table className="tabular mt-2 w-full min-w-[20rem] text-sm">
              <thead>
                <tr className="text-left text-xs text-navy-400">
                  <th className="font-medium">{tx('Cuenta', 'Account')}</th>
                  <th className="text-right font-medium">{tx('Cargo', 'Debit')}</th>
                  <th className="text-right font-medium">{tx('Abono', 'Credit')}</th>
                </tr>
              </thead>
              <tbody>
                {e.lines.map((l, i) => (
                  <tr key={i} className="border-t border-navy-100 dark:border-navy-800">
                    <td className={cx('py-1', l.side === 'C' && 'pl-4')}>{accName(l.accountCode)}</td>
                    <td className="text-right">{l.side === 'D' ? fmtMoney(l.amount, lang) : ''}</td>
                    <td className="text-right">{l.side === 'C' ? fmtMoney(l.amount, lang) : ''}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {onDelete && (
            <button type="button" className="mt-2 text-xs font-semibold text-red-600" onClick={() => window.confirm(tx('¿Borrar esta póliza?', 'Delete this entry?')) && onDelete(e.id)}>
              {tx('Borrar póliza', 'Delete entry')}
            </button>
          )}
        </Card>
      ))}
    </div>
  )
}

export function LedgerBook({ entries }: { entries: Entry[] }) {
  const { tx, lang } = useI18n()
  const accName = useAccName()
  const ledger = useMemo(() => buildLedger(entries), [entries])
  if (ledger.length === 0) return <Card>{tx('Sin movimientos todavía.', 'No postings yet.')}</Card>
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {ledger.map((ta) => {
        const rows = Math.max(ta.debits.length, ta.credits.length)
        return (
          <Card key={ta.code} className="p-3">
            <p className="text-center text-sm font-semibold text-navy-900 dark:text-white">{accName(ta.code)}</p>
            <div className="tabular mt-2 grid grid-cols-2 border-t-2 border-navy-800 text-sm dark:border-navy-300">
              <div className="border-r-2 border-navy-800 pr-2 text-right dark:border-navy-300">
                {Array.from({ length: rows }).map((_, i) => (
                  <div key={i} className="py-0.5">
                    {ta.debits[i] ? fmtMoney(ta.debits[i].amount, lang) : ' '}
                  </div>
                ))}
              </div>
              <div className="pl-2 text-right">
                {Array.from({ length: rows }).map((_, i) => (
                  <div key={i} className="py-0.5">
                    {ta.credits[i] ? fmtMoney(ta.credits[i].amount, lang) : ' '}
                  </div>
                ))}
              </div>
            </div>
            <p className="tabular mt-1 border-t border-navy-200 pt-1 text-center text-xs font-semibold dark:border-navy-700">
              {ta.balance > 0 ? `${tx('Saldo deudor', 'Debit balance')} ${fmtMoney(ta.balance, lang)}` : ta.balance < 0 ? `${tx('Saldo acreedor', 'Credit balance')} ${fmtMoney(-ta.balance, lang)}` : tx('Saldada', 'Zero')}
            </p>
          </Card>
        )
      })}
    </div>
  )
}

export function TrialBook({ entries }: { entries: Entry[] }) {
  const { tx, lang } = useI18n()
  const accName = useAccName()
  const tb = useMemo(() => trialBalance(entries), [entries])
  return (
    <div className="space-y-3">
      <Card className="overflow-x-auto p-0">
        <table className="tabular w-full min-w-[34rem] text-sm">
          <caption className="p-3 text-left font-semibold text-navy-900 dark:text-white">{tx('Balanza de comprobación', 'Trial balance')}</caption>
          <thead className="bg-navy-50 text-xs text-navy-500 dark:bg-navy-950">
            <tr>
              <th className="p-2 text-left">{tx('Cuenta', 'Account')}</th>
              <th className="p-2 text-right">{tx('Cargos', 'Debits')}</th>
              <th className="p-2 text-right">{tx('Abonos', 'Credits')}</th>
              <th className="p-2 text-right">{tx('Saldo deudor', 'Debit bal.')}</th>
              <th className="p-2 text-right">{tx('Saldo acreedor', 'Credit bal.')}</th>
            </tr>
          </thead>
          <tbody>
            {tb.rows.map((r) => (
              <tr key={r.code} className="border-t border-navy-100 dark:border-navy-800">
                <td className="p-2">{accName(r.code)}</td>
                <td className="p-2 text-right">{fmtMoney(r.debit, lang)}</td>
                <td className="p-2 text-right">{fmtMoney(r.credit, lang)}</td>
                <td className="p-2 text-right">{r.debitBalance ? fmtMoney(r.debitBalance, lang) : ''}</td>
                <td className="p-2 text-right">{r.creditBalance ? fmtMoney(r.creditBalance, lang) : ''}</td>
              </tr>
            ))}
            <tr className="border-t-2 border-navy-800 font-bold dark:border-navy-300">
              <td className="p-2">{tx('Sumas iguales', 'Totals')}</td>
              <td className="p-2 text-right">{fmtMoney(tb.totalDebit, lang)}</td>
              <td className="p-2 text-right">{fmtMoney(tb.totalCredit, lang)}</td>
              <td className="p-2 text-right">{fmtMoney(tb.totalDebitBalance, lang)}</td>
              <td className="p-2 text-right">{fmtMoney(tb.totalCreditBalance, lang)}</td>
            </tr>
          </tbody>
        </table>
      </Card>
      {tb.rows.length > 0 && (
        <Notice tone={tb.balanced ? 'success' : 'error'}>
          {tb.balanced
            ? tx('La balanza cuadra: la suma de cargos es igual a la de abonos. Eso confirma que cada póliza respetó la partida doble.', 'The trial balance balances: total debits equal total credits.')
            : tx('La balanza no cuadra: revisa tus pólizas.', 'The trial balance does not balance.')}
        </Notice>
      )}
    </div>
  )
}

const TONE: Record<Tone, string> = {
  good: 'bg-money-500/10 text-money-800 ring-money-500/40 dark:text-money-200',
  warn: 'bg-amber-500/10 text-amber-800 ring-amber-500/40 dark:text-amber-200',
  bad: 'bg-red-500/10 text-red-800 ring-red-500/40 dark:text-red-200',
  na: 'bg-navy-100 text-navy-600 ring-navy-200 dark:bg-navy-800 dark:text-navy-300 dark:ring-navy-700',
}
const TONE_LABEL: Record<Tone, [string, string]> = { good: ['Bien', 'Good'], warn: ['Cuidado', 'Watch'], bad: ['Alerta', 'Alert'], na: ['Sin datos', 'No data'] }

function Rows({ rows }: { rows: Row[] }) {
  const { t, lang } = useI18n()
  return (
    <table className="tabular w-full text-sm">
      <tbody>
        {rows.map((r, i) => (
          <tr key={i} className={cx('border-t border-navy-100 dark:border-navy-800', r.kind && 'font-semibold', r.kind === 'total' && 'border-t-2 border-navy-800 dark:border-navy-300')}>
            <td className={cx('py-1', !r.kind && 'pl-3')}>{t(r.label)}</td>
            <td className="py-1 text-right">{fmtMoney(r.amount, lang)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

/** Balance sheet, income statement, monthly VAT and ratios with plain-language readings. */
export function StatementsBook({ entries, title }: { entries: Entry[]; title?: string }) {
  const { t, tx, lang } = useI18n()
  const s = useMemo(() => buildStatements(entries), [entries])
  if (s.empty) return <Card>{tx('Registra pólizas para ver tus estados financieros.', 'Post entries to see your financial statements.')}</Card>
  const link = (id: string, label: string) => (
    <button type="button" onClick={() => navigate(`/lesson/${id}`)} className="text-xs font-semibold text-electric-600 underline dark:text-electric-300">
      {label}
    </button>
  )
  return (
    <div className="space-y-4">
      {title && <p className="text-sm text-navy-500">{title}</p>}
      <div className="grid gap-4 lg:grid-cols-2">
        <Card>
          <h3 className="font-semibold text-navy-900 dark:text-white">{tx('Estado de Resultados', 'Income statement')}</h3>
          <p className="mb-2 text-xs text-navy-500">{tx('Cuánto vendiste, cuánto gastaste y cuánto ganaste en el periodo.', 'What you sold, spent and earned in the period.')}</p>
          <Rows rows={s.income} />
        </Card>
        <Card>
          <h3 className="font-semibold text-navy-900 dark:text-white">{tx('Balance General', 'Balance sheet')}</h3>
          <p className="mb-2 text-xs text-navy-500">{tx('Lo que tiene tu negocio (activo), lo que debe (pasivo) y lo que es de los dueños (capital).', 'What the business owns, owes, and what belongs to the owners.')}</p>
          <p className="text-xs font-bold uppercase text-navy-400">{tx('Activo', 'Assets')}</p>
          <Rows rows={s.balance.assets} />
          <p className="mt-2 text-xs font-bold uppercase text-navy-400">{tx('Pasivo', 'Liabilities')}</p>
          <Rows rows={s.balance.liabilities} />
          <p className="mt-2 text-xs font-bold uppercase text-navy-400">{tx('Capital contable', 'Equity')}</p>
          <Rows rows={s.balance.equity} />
          <p className={cx('mt-2 text-sm font-semibold', s.balance.holds ? 'text-money-600' : 'text-red-600')}>
            {s.balance.holds ? '✓' : '✗'} {tx('Activo = Pasivo + Capital', 'Assets = Liabilities + Equity')}: {fmtMoney(s.totals.assets, lang)} = {fmtMoney(s.totals.liabilities, lang)} + {fmtMoney(s.totals.equity, lang)}
          </p>
        </Card>
      </div>

      <Card>
        <h3 className="font-semibold text-navy-900 dark:text-white">{tx('IVA del periodo', 'VAT for the period')}</h3>
        <p className="whitespace-pre-wrap break-words rounded-lg bg-navy-900 px-3 py-1.5 font-mono text-xs text-electric-300">{tx('IVA a pagar = IVA trasladado (cobrado) − IVA acreditable (pagado)', 'VAT payable = output VAT collected − input VAT paid')}</p>
        <p className="tabular mt-2 text-sm">
          {fmtMoney(s.iva.charged, lang)} − {fmtMoney(s.iva.credit, lang)} = <b>{fmtMoney(s.iva.result, lang)}</b>{' '}
          {s.iva.result >= 0 ? tx('a pagar al SAT', 'payable') : tx('a tu favor (saldo a favor)', 'in your favor')}
        </p>
        {(s.iva.pendingCharged > 0 || s.iva.pendingCredit > 0) && (
          <p className="mt-1 text-xs text-navy-500">
            {tx('No cuentan todavía: IVA de ventas no cobradas', 'Not counted yet: VAT on uncollected sales')} {fmtMoney(s.iva.pendingCharged, lang)} · {tx('IVA de compras no pagadas', 'VAT on unpaid purchases')} {fmtMoney(s.iva.pendingCredit, lang)}.{' '}
            {tx('El IVA se paga cuando se cobra y se acredita cuando se paga.', 'VAT is due when collected and creditable when paid.')}
          </p>
        )}
        {(s.iva.withheldIsr > 0 || s.iva.withheldIva > 0) && (
          <p className="mt-1 text-xs text-navy-500">
            {tx('Además debes enterar las retenciones', 'You must also pay the withholdings')}: ISR {fmtMoney(s.iva.withheldIsr, lang)} · IVA {fmtMoney(s.iva.withheldIva, lang)}.
          </p>
        )}
        <div className="mt-1">{link('FIS-06', tx('Repasar IVA', 'Review VAT'))}</div>
      </Card>

      <div>
        <h3 className="font-semibold text-navy-900 dark:text-white">{tx('Razones financieras', 'Financial ratios')}</h3>
        <p className="text-xs text-navy-500">{tx('El semáforo es una referencia general; lo normal cambia según el tipo de negocio y el periodo.', 'The traffic light is a general reference; normal values depend on industry and period.')}</p>
        <div className="mt-2 grid gap-3 md:grid-cols-2">
          {s.ratios.map((r) => (
            <Card key={r.id} className="space-y-2" data-testid={`ratio-${r.id}`}>
              <div className="flex items-start justify-between gap-2">
                <p className="font-semibold text-navy-900 dark:text-white">{t(r.name)}</p>
                <span className={cx('shrink-0 rounded-full px-2 py-0.5 text-xs font-bold ring-1', TONE[r.tone])}>{tx(...TONE_LABEL[r.tone])}</span>
              </div>
              <p className="whitespace-pre-wrap break-words rounded-lg bg-navy-900 px-3 py-1.5 font-mono text-xs text-electric-300">{r.expression}</p>
              <p className="tabular break-words font-mono text-xs">{r.calc}</p>
              <p className="text-sm text-navy-700 dark:text-navy-200">{t(r.meaning)}</p>
              <p className="text-xs text-navy-500">{t(r.advice)}</p>
              {link(r.topic, tx('Ver el tema', 'Open the topic'))}
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
