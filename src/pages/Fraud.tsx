import { useEffect, useMemo, useState } from 'react'
import { AlertTriangle, CircleCheck, CircleX, FileSearch, Flag as FlagIcon, RefreshCw, ShieldAlert, X } from 'lucide-react'
import { Badge, Button, Card, cx, Notice, PageHeader, SectionTitle, Select } from '../components/ui'
import { ANOMALY_LABELS, analytics, generateCase, scoreCase, type AnomalyType, type Flag, type FraudScore, type Verdict } from '../lib/fraud'
import { fmtMoney } from '../lib/numbers'
import { awardXp } from '../lib/progress'
import { randomInt } from '../lib/shuffle'
import { useI18n, useStore } from '../state/store'

const KEY = 'fincore-fraud'

function load(): { seed: number; flags: Record<string, Flag>; submitted: boolean } | null {
  try {
    const raw = localStorage.getItem(KEY)
    if (!raw) return null
    const v = JSON.parse(raw)
    if (typeof v?.seed !== 'number' || typeof v?.flags !== 'object') return null
    return v
  } catch {
    return null
  }
}

export default function Fraud() {
  const { state, update } = useStore()
  const { t, tx, lang } = useI18n()
  const saved = useMemo(load, [])
  const [seed, setSeed] = useState(saved?.seed ?? 20260301)
  const [flags, setFlags] = useState<Record<string, Flag>>(saved?.flags ?? {})
  const [submitted, setSubmitted] = useState(saved?.submitted ?? false)
  const [open, setOpen] = useState<string | null>(null)
  const [filter, setFilter] = useState<string>('all')
  const c = useMemo(() => generateCase(seed), [seed])
  const an = useMemo(() => analytics(c), [c])
  const result: FraudScore | null = submitted ? scoreCase(c, flags) : null

  useEffect(() => {
    try {
      localStorage.setItem(KEY, JSON.stringify({ seed, flags, submitted }))
    } catch {
      /* storage unavailable: case stays in memory */
    }
  }, [seed, flags, submitted])

  const vendor = (id: string) => c.vendors.find((v) => v.id === id)
  const filters: { id: string; label: string; ids: string[] }[] = [
    { id: 'sameInvoice', label: tx('Misma factura e importe', 'Same invoice & amount'), ids: an.sameInvoice.flat() },
    { id: 'offHours', label: tx('Fuera de horario / fin de semana', 'Off-hours / weekend'), ids: an.offHours },
    { id: 'nearThreshold', label: tx('Justo debajo del límite', 'Just below the limit'), ids: an.nearThreshold },
    { id: 'vendorOutOfRange', label: tx('Fuera del rango del proveedor', 'Outside vendor range'), ids: an.vendorOutOfRange },
    { id: 'notInMaster', label: tx('Proveedor fuera del padrón', 'Vendor not in master file'), ids: an.notInMaster },
    { id: 'docIssues', label: tx('Problemas documentales', 'Document issues'), ids: an.docIssues },
  ]
  const active = filters.find((f) => f.id === filter)
  const list = filter === 'flagged' ? c.txs.filter((x) => flags[x.id]) : active ? c.txs.filter((x) => active.ids.includes(x.id)) : c.txs

  const newCase = () => {
    setSeed(1 + randomInt(2 ** 31 - 2))
    setFlags({})
    setSubmitted(false)
    setOpen(null)
    setFilter('all')
  }
  const submit = () => {
    const r = scoreCase(c, flags)
    setSubmitted(true)
    update((s) => {
      let n = { ...s, fraud: { bestScore: Math.max(s.fraud.bestScore, r.score), cases: { ...s.fraud.cases, [String(seed)]: { score: r.score, at: new Date().toISOString() } } } }
      n = awardXp(n, `fraud:${seed}`, Math.round(r.score * 100), 'fraud-case')
      return n
    })
  }

  return (
    <div>
      <PageHeader title="Financial Fraud Detective" subtitle={tx('Auditoría forense con datos ficticios.', 'Forensic audit with fictitious data.')} />
      <Card className="space-y-2 text-sm text-navy-700 dark:text-navy-200">
        <p>
          <strong>{c.company}</strong> · {t(c.period)} · {c.txs.length} {tx('pagos', 'payments')} · {tx('Caso', 'Case')} #{seed}
        </p>
        <p>
          {tx(
            `Política: pagos ≥ ${fmtMoney(c.approvalThreshold, lang, 0)} requieren aprobación del Director de Finanzas; todo pago requiere CFDI válido, orden de compra y proveedor en el padrón. Horario de operación: lunes a viernes, 8:00–20:00.`,
            `Policy: payments ≥ ${fmtMoney(c.approvalThreshold, lang, 0)} need CFO approval; every payment needs a valid CFDI, a purchase order and a vendor in the master file. Business hours: Mon–Fri, 8:00–20:00.`,
          )}
        </p>
        <Notice tone="warning" title={tx('Alerta de riesgo ≠ fraude demostrado', 'Red flag ≠ proven fraud')}>
          {tx(
            'Marcar una operación es levantar una alerta. Solo después de examinar la evidencia concluyes si hay una irregularidad sustentada o si la alerta se explica. Un fraude demostrado requiere evidencia suficiente, determinar intención y, en su caso, resolución de la autoridad competente.',
            'Flagging a transaction raises an alert. Only after examining the evidence do you conclude whether there is a supported irregularity or the alert is explained. Proven fraud requires sufficient evidence, establishing intent and, where applicable, a ruling by the competent authority.',
          )}
        </Notice>
      </Card>

      <SectionTitle>{tx('Pruebas analíticas', 'Analytical tests')}</SectionTitle>
      <div className="flex flex-wrap gap-2">
        {[{ id: 'all', label: tx('Todas', 'All'), ids: c.txs.map((x) => x.id) }, ...filters, { id: 'flagged', label: tx('Mis alertas', 'My alerts'), ids: Object.keys(flags) }].map((f) => (
          <button
            key={f.id}
            type="button"
            aria-pressed={filter === f.id}
            onClick={() => setFilter(f.id)}
            className={cx('rounded-full px-3 py-1.5 text-xs font-semibold ring-1', filter === f.id ? 'bg-electric-500 text-white ring-electric-500' : 'bg-white text-navy-600 ring-navy-200 dark:bg-navy-900 dark:text-navy-200 dark:ring-navy-700')}
          >
            {f.label} ({f.ids.length})
          </button>
        ))}
      </div>
      <p className="mt-2 text-xs text-navy-500">{tx('Las pruebas señalan candidatos; algunos tienen explicación legítima y otras irregularidades no las detecta ninguna prueba automática.', 'Tests point to candidates; some have legitimate explanations and some irregularities escape every automatic test.')}</p>

      <ul className="mt-3 space-y-2">
        {list.map((x) => {
          const v = vendor(x.vendorId)!
          const f = flags[x.id]
          const truth = result ? c.truth[x.id] : undefined
          const isOpen = open === x.id
          return (
            <li key={x.id}>
              <Card className={cx('p-0', f && 'ring-2 ring-amber-500', result && truth && f && 'ring-money-500', result && !truth && f && 'ring-red-500', result && truth && !f && 'ring-2 ring-red-500')}>
                <button type="button" aria-expanded={isOpen} onClick={() => setOpen(isOpen ? null : x.id)} className="flex w-full items-center gap-3 p-3 text-left">
                  <span className="tabular w-10 shrink-0 font-mono text-xs text-navy-400">{x.id}</span>
                  <span className="min-w-0 flex-1">
                    <span className="block truncate text-sm font-semibold text-navy-900 dark:text-white">{v.name}</span>
                    <span className="tabular block text-xs text-navy-500">
                      {x.date} {x.time} · {t(x.concept)}
                    </span>
                  </span>
                  <span className="tabular shrink-0 text-right text-sm font-semibold">{fmtMoney(x.amount, lang)}</span>
                  {f && <FlagIcon className="h-4 w-4 shrink-0 text-amber-500" aria-label={tx('Con alerta', 'Flagged')} />}
                </button>
                {isOpen && (
                  <div className="space-y-3 border-t border-navy-100 p-3 text-sm dark:border-navy-800">
                    <div className="grid gap-2 sm:grid-cols-2">
                      <dl className="tabular grid grid-cols-[auto_1fr] gap-x-3 gap-y-1 rounded-xl bg-navy-50 p-3 text-xs dark:bg-navy-950">
                        <dt className="text-navy-400">{tx('Referencia', 'Reference')}</dt>
                        <dd>{x.reference}</dd>
                        <dt className="text-navy-400">{tx('Método', 'Method')}</dt>
                        <dd>{x.method === 'transfer' ? tx('Transferencia', 'Transfer') : x.method === 'check' ? tx('Cheque', 'Check') : tx('Tarjeta', 'Card')}</dd>
                        <dt className="text-navy-400">{tx('Categoría', 'Category')}</dt>
                        <dd>{t(x.category)}</dd>
                        <dt className="text-navy-400">{tx('Solicitó', 'Requested by')}</dt>
                        <dd>{x.requestedBy}</dd>
                        <dt className="text-navy-400">{tx('Aprobó', 'Approved by')}</dt>
                        <dd className={cx(!x.approvedBy && 'font-semibold text-red-600')}>{x.approvedBy ?? tx('Sin aprobación', 'No approval')}</dd>
                        <dt className="text-navy-400">{tx('Orden de compra', 'Purchase order')}</dt>
                        <dd className={cx(!x.poNumber && 'font-semibold text-amber-600')}>{x.poNumber ?? tx('No hay', 'None')}</dd>
                      </dl>
                      <dl className="tabular grid grid-cols-[auto_1fr] gap-x-3 gap-y-1 rounded-xl bg-navy-50 p-3 text-xs dark:bg-navy-950">
                        <dt className="text-navy-400">{tx('Factura', 'Invoice')}</dt>
                        <dd>
                          {x.invoice.number} · {x.invoice.date}
                        </dd>
                        <dt className="text-navy-400">{tx('Importe CFDI', 'CFDI amount')}</dt>
                        <dd>{fmtMoney(x.invoice.amount, lang)}</dd>
                        <dt className="text-navy-400">UUID</dt>
                        <dd className="break-all">{x.invoice.cfdiUuid ?? <span className="font-semibold text-red-600">{tx('Sin folio fiscal', 'No fiscal folio')}</span>}</dd>
                        <dt className="text-navy-400">RFC</dt>
                        <dd>{v.rfc}</dd>
                        <dt className="text-navy-400">{tx('Alta proveedor', 'Vendor created')}</dt>
                        <dd>{v.registeredOn}</dd>
                        <dt className="text-navy-400">{tx('En padrón', 'In master file')}</dt>
                        <dd className={cx(!v.inMaster && 'font-semibold text-red-600')}>{v.inMaster ? tx('Sí', 'Yes') : tx('No', 'No')}</dd>
                        <dt className="text-navy-400">{tx('Cuenta bancaria', 'Bank account')}</dt>
                        <dd className="break-all">{v.bankAccount}</dd>
                        {v.typical[1] > 0 && (
                          <>
                            <dt className="text-navy-400">{tx('Rango habitual', 'Usual range')}</dt>
                            <dd>
                              {fmtMoney(v.typical[0], lang, 0)}–{fmtMoney(v.typical[1], lang, 0)}
                            </dd>
                          </>
                        )}
                      </dl>
                    </div>
                    {x.note && <Notice>{t(x.note)}</Notice>}
                    <details className="text-xs">
                      <summary className="cursor-pointer font-semibold text-electric-600">{tx('Cuentas bancarias de empleados (expediente de RR. HH.)', 'Employee bank accounts (HR file)')}</summary>
                      <ul className="tabular mt-1 space-y-0.5">
                        {c.employeeAccounts.map((e) => (
                          <li key={e.name}>
                            {e.name}: {e.account}
                          </li>
                        ))}
                      </ul>
                    </details>
                    {!submitted && (
                      <div className="grid gap-2 sm:grid-cols-[1fr_1fr_auto] sm:items-end">
                        <Select
                          id={`ft-${x.id}`}
                          label={tx('Tipo de alerta', 'Alert type')}
                          value={f?.type ?? ''}
                          onChange={(e) => {
                            const type = e.target.value as AnomalyType
                            setFlags((m) => (type ? { ...m, [x.id]: { type, conclusion: m[x.id]?.conclusion ?? null } } : Object.fromEntries(Object.entries(m).filter(([k]) => k !== x.id))))
                          }}
                        >
                          <option value="">{tx('— Sin alerta —', '— No alert —')}</option>
                          {(Object.keys(ANOMALY_LABELS) as AnomalyType[]).map((k) => (
                            <option key={k} value={k}>
                              {t(ANOMALY_LABELS[k])}
                            </option>
                          ))}
                        </Select>
                        <Select
                          id={`fc-${x.id}`}
                          label={tx('Conclusión tras investigar', 'Conclusion after investigating')}
                          disabled={!f}
                          value={f?.conclusion ?? ''}
                          onChange={(e) => setFlags((m) => ({ ...m, [x.id]: { ...m[x.id], conclusion: (e.target.value || null) as Verdict | null } }))}
                        >
                          <option value="">{tx('— Pendiente —', '— Pending —')}</option>
                          <option value="irregular">{tx('Irregularidad sustentada', 'Supported irregularity')}</option>
                          <option value="explained">{tx('Alerta explicada (descartada)', 'Alert explained (cleared)')}</option>
                        </Select>
                        {f && (
                          <Button variant="ghost" onClick={() => setFlags((m) => Object.fromEntries(Object.entries(m).filter(([k]) => k !== x.id)))}>
                            <X className="h-4 w-4" /> {tx('Quitar', 'Remove')}
                          </Button>
                        )}
                      </div>
                    )}
                    {result && (
                      <div className={cx('rounded-xl p-3 text-sm', truth ? 'bg-money-500/10' : f ? 'bg-red-500/10' : 'bg-navy-50 dark:bg-navy-950')}>
                        {truth ? (
                          <>
                            <p className="font-semibold">
                              {t(ANOMALY_LABELS[truth.type])} · {truth.verdict === 'irregular' ? tx('Irregularidad sustentada', 'Supported irregularity') : tx('Alerta explicada', 'Explained alert')}
                            </p>
                            <p>{t(truth.explanation)}</p>
                          </>
                        ) : f ? (
                          <p>{tx('Falso positivo: esta operación cumple la política y tiene soporte completo.', 'False positive: this transaction complies with policy and is fully supported.')}</p>
                        ) : (
                          <p>{tx('Operación normal.', 'Normal transaction.')}</p>
                        )}
                      </div>
                    )}
                  </div>
                )}
              </Card>
            </li>
          )
        })}
      </ul>

      <div className="sticky bottom-20 z-10 mt-4 lg:bottom-4">
        <Card className="flex flex-wrap items-center gap-3 shadow-lg">
          <span className="flex items-center gap-1 text-sm font-semibold">
            <AlertTriangle className="h-4 w-4 text-amber-500" /> {Object.keys(flags).length} {tx('alertas', 'alerts')}
          </span>
          <div className="flex-1" />
          {!submitted ? (
            <Button onClick={submit} disabled={Object.keys(flags).length === 0}>
              <ShieldAlert className="h-4 w-4" /> {tx('Entregar informe', 'Submit report')}
            </Button>
          ) : (
            <Button variant="secondary" onClick={newCase}>
              <RefreshCw className="h-4 w-4" /> {tx('Nuevo caso', 'New case')}
            </Button>
          )}
        </Card>
      </div>

      {result && (
        <Card className="mt-4 space-y-3" data-testid="fraud-result">
          <h2 className="flex items-center gap-2 text-lg font-bold">
            <FileSearch className="h-5 w-5 text-electric-500" /> {tx('Resultado del informe', 'Report result')}: <span className="tabular text-electric-500">{Math.round(result.score * 100)} %</span>
          </h2>
          <div className="tabular grid grid-cols-2 gap-2 text-sm sm:grid-cols-4">
            <div className="rounded-xl bg-money-500/10 p-2">
              <CircleCheck className="h-4 w-4 text-money-600" /> {tx('Hallazgos correctos', 'Correct findings')}: <strong>{result.truePositives.length}</strong>
            </div>
            <div className="rounded-xl bg-red-500/10 p-2">
              <CircleX className="h-4 w-4 text-red-600" /> {tx('Falsos positivos', 'False positives')}: <strong>{result.falsePositives.length}</strong>
            </div>
            <div className="rounded-xl bg-amber-500/10 p-2">
              <AlertTriangle className="h-4 w-4 text-amber-600" /> {tx('No detectados', 'Missed')}: <strong>{result.falseNegatives.length}</strong>
            </div>
            <div className="rounded-xl bg-navy-50 p-2 dark:bg-navy-950">
              {tx('Conclusiones correctas', 'Correct conclusions')}: <strong>{result.correctConclusions}</strong>
            </div>
          </div>
          <p className="text-xs text-navy-500">
            {tx('Puntuación', 'Scoring')}: +10 {tx('por hallazgo', 'per finding')}, +5 {tx('por conclusión correcta', 'per correct conclusion')}, +2 {tx('por tipo correcto', 'per correct type')}, −5 {tx('por falso positivo', 'per false positive')} ({result.points}/{result.maxPoints}).{' '}
            {tx('Precisión', 'Precision')} {Math.round(result.precision * 100)} % · {tx('Exhaustividad', 'Recall')} {Math.round(result.recall * 100)} %.
          </p>
          {result.falseNegatives.length > 0 && (
            <div>
              <p className="text-sm font-semibold">{tx('Operaciones que debiste alertar', 'Transactions you should have flagged')}:</p>
              <ul className="mt-1 space-y-1 text-sm">
                {result.falseNegatives.map((id) => (
                  <li key={id}>
                    <button type="button" className="font-mono text-electric-600 underline" onClick={() => setOpen(id)}>
                      {id}
                    </button>{' '}
                    — {t(ANOMALY_LABELS[c.truth[id].type])}
                  </li>
                ))}
              </ul>
            </div>
          )}
          <Badge tone="money">
            {tx('Mejor puntuación histórica', 'Best score so far')}: {Math.round(state.fraud.bestScore * 100)} %
          </Badge>
        </Card>
      )}
    </div>
  )
}
