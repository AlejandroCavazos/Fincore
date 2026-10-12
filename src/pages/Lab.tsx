import { useMemo, useState } from 'react'
import { BookCheck, CircleCheck, Eye, Lightbulb, RotateCcw, Send } from 'lucide-react'
import { ACCOUNTS, getAccount } from '../content/accounts'
import { LAB_CATEGORIES, LAB_COMPANY, LAB_TRANSACTIONS, type LabCategory } from '../content/labTransactions'
import { JournalEditor } from '../components/JournalEditor'
import { Badge, Button, Card, cx, Notice, PageHeader, Segmented, Select } from '../components/ui'
import { accountingEquation, buildLedger, checkJournal, isBalanced, parseDraft, trialBalance, type DraftLine, type JournalCheck, type PostedEntry } from '../lib/accounting'
import { fmtMoney } from '../lib/numbers'
import { awardXp } from '../lib/progress'
import { useI18n, useStore } from '../state/store'

type Tab = 'record' | 'journal' | 'ledger' | 'trial' | 'catalog'
const blank = (): DraftLine[] => [
  { accountCode: '', side: 'D', amount: '' },
  { accountCode: '', side: 'C', amount: '' },
]

export default function Lab() {
  const { state, update, toast } = useStore()
  const { t, tx, lang } = useI18n()
  const [tab, setTab] = useState<Tab>('record')
  const [cat, setCat] = useState<LabCategory | 'all'>('all')
  const [txId, setTxId] = useState<string>(LAB_TRANSACTIONS.find((x) => !state.lab.solved[x.id])?.id ?? LAB_TRANSACTIONS[0].id)
  const [lines, setLines] = useState<DraftLine[]>(blank)
  const [check, setCheck] = useState<JournalCheck | null>(null)
  const [showHint, setShowHint] = useState(false)
  const [free, setFree] = useState(false)
  const [freeDesc, setFreeDesc] = useState('')

  const trx = LAB_TRANSACTIONS.find((x) => x.id === txId)!
  const list = LAB_TRANSACTIONS.filter((x) => cat === 'all' || x.category === cat)
  const journal = state.lab.journal
  const ledger = useMemo(() => buildLedger(journal), [journal])
  const tb = useMemo(() => trialBalance(journal), [journal])
  const eq = useMemo(() => accountingEquation(journal), [journal])
  const posted = journal.some((e) => e.id === trx.id)
  const accName = (code: string) => `${code} · ${t(getAccount(code)?.name)}`

  const select = (id: string) => {
    setTxId(id)
    setLines(blank())
    setCheck(null)
    setShowHint(false)
  }
  const doCheck = () => setCheck(checkJournal(lines, trx.expected))
  const post = () => {
    if (!check?.correct || posted) return
    const entry: PostedEntry = { id: trx.id, date: trx.date, description: trx.description, lines: check.lines }
    update((s) => {
      let n = { ...s, lab: { journal: [...s.lab.journal, entry].sort((a, b) => a.date.localeCompare(b.date) || a.id.localeCompare(b.id)), solved: { ...s.lab.solved, [trx.id]: s.lab.solved[trx.id] ?? new Date().toISOString() } } }
      n = awardXp(n, `lab:${trx.id}`, 20, 'lab')
      return n
    })
    toast({ es: 'Póliza contabilizada en el libro diario.', en: 'Entry posted to the journal.' }, 'success')
    const nextTx = LAB_TRANSACTIONS.find((x) => !state.lab.solved[x.id] && x.id !== trx.id)
    if (nextTx) select(nextTx.id)
  }
  const postFree = () => {
    const p = parseDraft(lines)
    if (p.errors.length || !isBalanced(p.lines) || !freeDesc.trim()) return
    const entry: PostedEntry = {
      id: `FREE-${Date.now().toString(36)}`,
      date: new Date().toISOString().slice(0, 10),
      description: { es: freeDesc.trim().slice(0, 140), en: freeDesc.trim().slice(0, 140) },
      lines: p.lines,
    }
    update((s) => ({ ...s, lab: { ...s.lab, journal: [...s.lab.journal, entry] } }))
    setLines(blank())
    setFreeDesc('')
    toast({ es: 'Póliza libre contabilizada.', en: 'Free entry posted.' }, 'success')
  }
  const freeParsed = parseDraft(lines)
  const freeOk = free && freeParsed.errors.length === 0 && isBalanced(freeParsed.lines) && freeDesc.trim().length > 0

  return (
    <div>
      <PageHeader title={tx('Laboratorio contable', 'Accounting lab')} subtitle={t(LAB_COMPANY)} />
      <Segmented<Tab>
        label={tx('Sección del laboratorio', 'Lab section')}
        value={tab}
        onChange={setTab}
        options={[
          { value: 'record', label: tx('Registrar', 'Record') },
          { value: 'journal', label: tx('Diario', 'Journal') },
          { value: 'ledger', label: tx('Cuentas T', 'T-accounts') },
          { value: 'trial', label: tx('Balanza', 'Trial bal.') },
          { value: 'catalog', label: tx('Catálogo', 'Chart') },
        ]}
      />

      {tab === 'record' && (
        <div className="mt-4 grid grid-cols-[minmax(0,1fr)] gap-4 lg:grid-cols-[18rem_minmax(0,1fr)]">
          <div className="space-y-2">
            <Select id="lab-cat" label={tx('Tipo de operación', 'Transaction type')} value={cat} onChange={(e) => setCat(e.target.value as LabCategory | 'all')}>
              <option value="all">{tx('Todas', 'All')}</option>
              {(Object.keys(LAB_CATEGORIES) as LabCategory[]).map((c) => (
                <option key={c} value={c}>
                  {t(LAB_CATEGORIES[c])}
                </option>
              ))}
            </Select>
            <p className="text-xs text-navy-500">
              {Object.keys(state.lab.solved).length}/{LAB_TRANSACTIONS.length} {tx('resueltas', 'solved')}
            </p>
            <ul className="flex gap-2 overflow-x-auto pb-1 lg:max-h-[60vh] lg:flex-col lg:overflow-y-auto">
              {list.map((x) => (
                <li key={x.id} className="shrink-0 lg:shrink">
                  <button
                    type="button"
                    onClick={() => {
                      setFree(false)
                      select(x.id)
                    }}
                    aria-pressed={!free && x.id === txId}
                    className={cx(
                      'flex w-56 items-start gap-2 rounded-xl p-2 text-left text-sm ring-1 lg:w-full',
                      !free && x.id === txId ? 'bg-electric-500/10 ring-electric-500' : 'bg-white ring-navy-100 dark:bg-navy-900 dark:ring-navy-800',
                    )}
                  >
                    {state.lab.solved[x.id] ? <CircleCheck className="mt-0.5 h-4 w-4 shrink-0 text-money-500" /> : <span className="tabular mt-0.5 w-4 shrink-0 text-[10px] font-bold text-navy-400">{x.id.slice(2)}</span>}
                    <span className="line-clamp-2 text-navy-700 dark:text-navy-200">{t(x.description)}</span>
                  </button>
                </li>
              ))}
              <li className="shrink-0 lg:shrink">
                <button
                  type="button"
                  onClick={() => {
                    setFree(true)
                    setLines(blank())
                    setCheck(null)
                  }}
                  aria-pressed={free}
                  className={cx('w-56 rounded-xl p-2 text-left text-sm font-semibold ring-1 lg:w-full', free ? 'bg-electric-500/10 ring-electric-500' : 'bg-white ring-navy-100 dark:bg-navy-900 dark:ring-navy-800')}
                >
                  ✎ {tx('Póliza libre', 'Free entry')}
                </button>
              </li>
            </ul>
          </div>

          <Card>
            {!free ? (
              <>
                <div className="flex flex-wrap items-center gap-2">
                  <Badge tone="electric">{t(LAB_CATEGORIES[trx.category])}</Badge>
                  <Badge>{trx.date}</Badge>
                  <span className="font-mono text-xs text-navy-400">{trx.id}</span>
                  {posted && <Badge tone="money">{tx('Contabilizada', 'Posted')}</Badge>}
                </div>
                <p className="mt-3 text-lg font-semibold text-navy-900 dark:text-white">{t(trx.description)}</p>
                <button type="button" onClick={() => setShowHint((v) => !v)} className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-amber-600">
                  <Lightbulb className="h-4 w-4" /> {showHint ? tx('Ocultar pista', 'Hide hint') : tx('Ver pista', 'Show hint')}
                </button>
                {showHint && <p className="mt-1 text-sm text-navy-600 dark:text-navy-300">{t(trx.hint)}</p>}
                <ol className="mt-3 mb-2 flex flex-wrap gap-x-3 text-xs text-navy-400">
                  <li>1. {tx('Elige cuentas', 'Choose accounts')}</li>
                  <li>2. {tx('Cargo o abono', 'Debit or credit')}</li>
                  <li>3. {tx('Importes', 'Amounts')}</li>
                  <li>4. {tx('Comprueba', 'Check')}</li>
                </ol>
              </>
            ) : (
              <div className="mb-3">
                <p className="text-lg font-semibold text-navy-900 dark:text-white">{tx('Póliza libre', 'Free entry')}</p>
                <p className="text-sm text-navy-500 dark:text-navy-300">
                  {tx('Registra cualquier operación. Solo se valida que esté cuadrada (no hay respuesta oficial).', 'Record any transaction. Only balance is validated (there is no official answer).')}
                </p>
                <label htmlFor="free-desc" className="mt-2 block text-sm font-medium">
                  {tx('Concepto', 'Description')}
                </label>
                <input id="free-desc" maxLength={140} value={freeDesc} onChange={(e) => setFreeDesc(e.target.value)} className="mt-1 w-full rounded-xl border border-navy-200 bg-white px-3 py-2 dark:border-navy-700 dark:bg-navy-950" />
              </div>
            )}

            <JournalEditor idPrefix="lab" lines={lines} onChange={(l) => { setLines(l); setCheck(null) }} lineStatus={check?.lineStatus} disabled={!free && posted} />

            {check && !free && (
              <div role="status" className={cx('mt-3 space-y-1 rounded-xl p-3 text-sm', check.correct ? 'bg-money-500/10 text-money-800 dark:text-money-200' : 'bg-red-500/10 text-red-800 dark:text-red-200')}>
                {check.feedback.map((f, i) => (
                  <p key={i} className={i === 0 ? 'font-semibold' : ''}>
                    {t(f)}
                  </p>
                ))}
                {check.correct && <p className="text-navy-700 dark:text-navy-200">{t(trx.explanation)}</p>}
              </div>
            )}

            <div className="mt-4 flex flex-wrap gap-2">
              {free ? (
                <Button onClick={postFree} disabled={!freeOk}>
                  <Send className="h-4 w-4" /> {tx('Contabilizar', 'Post')}
                </Button>
              ) : posted ? (
                <Notice tone="success">{tx('Esta operación ya está en tu libro diario.', 'This transaction is already in your journal.')}</Notice>
              ) : (
                <>
                  <Button onClick={doCheck} disabled={parseDraft(lines).lines.length === 0}>
                    <BookCheck className="h-4 w-4" /> {tx('Comprobar', 'Check')}
                  </Button>
                  {check?.correct && (
                    <Button variant="success" onClick={post}>
                      <Send className="h-4 w-4" /> {tx('Contabilizar (+20 XP)', 'Post (+20 XP)')}
                    </Button>
                  )}
                  {check && !check.correct && (
                    <Button
                      variant="ghost"
                      onClick={() => {
                        setLines(trx.expected.map((l) => ({ accountCode: l.accountCode, side: l.side, amount: String(l.amount) })))
                        setCheck(null)
                      }}
                    >
                      <Eye className="h-4 w-4" /> {tx('Ver solución', 'Show solution')}
                    </Button>
                  )}
                </>
              )}
            </div>
          </Card>
        </div>
      )}

      {tab === 'journal' && (
        <div className="mt-4 space-y-3">
          {journal.length === 0 ? (
            <Card>{tx('Tu libro diario está vacío. Registra operaciones en la pestaña «Registrar».', 'Your journal is empty. Record transactions in the "Record" tab.')}</Card>
          ) : (
            journal.map((e, n) => (
              <Card key={e.id} className="p-3">
                <div className="flex justify-between text-xs text-navy-400">
                  <span>
                    {tx('Póliza', 'Entry')} {n + 1} · {e.id}
                  </span>
                  <span>{e.date}</span>
                </div>
                <p className="mt-1 text-sm font-medium text-navy-800 dark:text-navy-100">{t(e.description)}</p>
                <table className="tabular mt-2 w-full text-sm">
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
              </Card>
            ))
          )}
          {journal.length > 0 && (
            <Button
              variant="secondary"
              onClick={() => {
                if (window.confirm(tx('¿Vaciar el libro diario? Tu XP ganada se conserva.', 'Clear the journal? XP already earned is kept.'))) update((s) => ({ ...s, lab: { ...s.lab, journal: [] } }))
              }}
            >
              <RotateCcw className="h-4 w-4" /> {tx('Reiniciar libro diario', 'Reset journal')}
            </Button>
          )}
        </div>
      )}

      {tab === 'ledger' && (
        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {ledger.length === 0 && <Card>{tx('Sin movimientos todavía.', 'No postings yet.')}</Card>}
          {ledger.map((ta) => {
            const acc = getAccount(ta.code)
            const rows = Math.max(ta.debits.length, ta.credits.length)
            return (
              <Card key={ta.code} className="p-3">
                <p className="text-center text-sm font-semibold text-navy-900 dark:text-white">{accName(ta.code)}</p>
                <div className="tabular mt-2 grid grid-cols-2 border-t-2 border-navy-800 text-sm dark:border-navy-300">
                  <div className="border-r-2 border-navy-800 pr-2 dark:border-navy-300">
                    {Array.from({ length: rows }).map((_, i) => (
                      <div key={i} className="flex justify-between py-0.5">
                        <span className="text-[10px] text-navy-400">{ta.debits[i]?.entryId ?? ''}</span>
                        <span>{ta.debits[i] ? fmtMoney(ta.debits[i].amount, lang) : ''}</span>
                      </div>
                    ))}
                  </div>
                  <div className="pl-2">
                    {Array.from({ length: rows }).map((_, i) => (
                      <div key={i} className="flex justify-between py-0.5">
                        <span className="text-[10px] text-navy-400">{ta.credits[i]?.entryId ?? ''}</span>
                        <span>{ta.credits[i] ? fmtMoney(ta.credits[i].amount, lang) : ''}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="tabular mt-1 grid grid-cols-2 border-t border-navy-200 pt-1 text-xs font-semibold dark:border-navy-700">
                  <span>{ta.balance > 0 ? `${tx('Saldo deudor', 'Debit bal.')} ${fmtMoney(ta.balance, lang)}` : ''}</span>
                  <span className="text-right">{ta.balance < 0 ? `${tx('Saldo acreedor', 'Credit bal.')} ${fmtMoney(-ta.balance, lang)}` : ta.balance === 0 ? tx('Saldada', 'Zero') : ''}</span>
                </div>
                {acc && ((ta.balance > 0 && acc.nature === 'C') || (ta.balance < 0 && acc.nature === 'D')) && (
                  <p className="mt-1 text-xs text-amber-600">{tx('Saldo contrario a su naturaleza: revisa tus registros.', 'Balance opposite to its normal side: check your entries.')}</p>
                )}
              </Card>
            )
          })}
        </div>
      )}

      {tab === 'trial' && (
        <div className="mt-4 space-y-3">
          <Card className="overflow-x-auto p-0">
            <table className="tabular w-full min-w-[34rem] text-sm">
              <caption className="p-3 text-left font-semibold text-navy-900 dark:text-white">{tx('Balanza de comprobación', 'Trial balance')}</caption>
              <thead className="bg-navy-50 text-xs text-navy-500 dark:bg-navy-950">
                <tr>
                  <th className="p-2 text-left">{tx('Cuenta', 'Account')}</th>
                  <th className="p-2 text-right">{tx('Movs. deudor', 'Debits')}</th>
                  <th className="p-2 text-right">{tx('Movs. acreedor', 'Credits')}</th>
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
          <Notice tone={tb.balanced ? 'success' : 'error'}>
            {tb.rows.length === 0
              ? tx('Sin movimientos.', 'No postings.')
              : tb.balanced
                ? tx('✓ La balanza cuadra: sumas de cargos = sumas de abonos, y saldos deudores = saldos acreedores.', '✓ The trial balance balances: total debits = total credits, and debit balances = credit balances.')
                : tx('✗ La balanza no cuadra.', '✗ The trial balance does not balance.')}
          </Notice>
          <Card>
            <p className="font-semibold text-navy-900 dark:text-white">{tx('Ecuación contable', 'Accounting equation')}</p>
            <p className="tabular mt-1 text-sm text-navy-600 dark:text-navy-300">
              {tx('Activo', 'Assets')} {fmtMoney(eq.assets, lang)} = {tx('Pasivo', 'Liabilities')} {fmtMoney(eq.liabilities, lang)} + {tx('Capital', 'Equity')} {fmtMoney(eq.equity, lang)} +{' '}
              {tx('Resultado del periodo', 'Net income')} {fmtMoney(eq.netIncome, lang)} {eq.holds ? '✓' : '✗'}
            </p>
          </Card>
        </div>
      )}

      {tab === 'catalog' && (
        <Card className="mt-4 overflow-x-auto p-0">
          <table className="w-full text-sm">
            <caption className="p-3 text-left font-semibold text-navy-900 dark:text-white">{tx('Catálogo de cuentas (ficticio)', 'Chart of accounts (fictitious)')}</caption>
            <thead className="bg-navy-50 text-xs text-navy-500 dark:bg-navy-950">
              <tr>
                <th className="p-2 text-left">{tx('Código', 'Code')}</th>
                <th className="p-2 text-left">{tx('Cuenta', 'Account')}</th>
                <th className="p-2 text-left">{tx('Grupo', 'Group')}</th>
                <th className="p-2 text-left">{tx('Naturaleza', 'Normal bal.')}</th>
              </tr>
            </thead>
            <tbody>
              {ACCOUNTS.map((a) => (
                <tr key={a.code} className="border-t border-navy-100 dark:border-navy-800">
                  <td className="p-2 font-mono">{a.code}</td>
                  <td className="p-2">{t(a.name)}</td>
                  <td className="p-2 text-navy-500">{t(a.group)}</td>
                  <td className="p-2">{a.nature === 'D' ? <Badge tone="electric">{tx('Deudora', 'Debit')}</Badge> : <Badge tone="money">{tx('Acreedora', 'Credit')}</Badge>}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
      )}
    </div>
  )
}
