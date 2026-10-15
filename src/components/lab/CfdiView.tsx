import { useState } from 'react'
import { Calculator, ChevronDown } from 'lucide-react'
import { COMPANY, m, type AppliedFormula, type Cfdi } from '../../lib/cfdi'
import { useI18n } from '../../state/store'
import { cx } from '../ui'

const TYPE: Record<Cfdi['type'], [string, string]> = {
  I: ['I · Ingreso', 'I · Income'],
  E: ['E · Egreso (nota de crédito)', 'E · Outgoing (credit note)'],
  P: ['P · Pago (complemento de pago)', 'P · Payment receipt'],
  N: ['N · Nómina', 'N · Payroll'],
}

/** A practice CFDI drawn like a printed invoice, always watermarked as fictitious. */
export function CfdiView({ c }: { c: Cfdi }) {
  const { tx } = useI18n()
  const mine = c.issuer.rfc === COMPANY.rfc
  const k = 'text-[11px] font-semibold uppercase tracking-wide text-navy-400'
  return (
    <div className="relative overflow-hidden rounded-xl border border-navy-200 bg-white p-3 text-sm text-navy-800 dark:border-navy-700 dark:bg-navy-950 dark:text-navy-100" data-testid="cfdi">
      <div aria-hidden className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <span className="-rotate-12 select-none text-center text-2xl font-black uppercase leading-tight tracking-widest text-red-500/15 sm:text-4xl">
          Práctica
          <br />
          Sin validez fiscal
        </span>
      </div>
      <div className="relative flex flex-wrap items-start justify-between gap-2 border-b border-navy-100 pb-2 dark:border-navy-800">
        <div>
          <p className="font-bold text-navy-900 dark:text-white">CFDI {tx(TYPE[c.type][0], TYPE[c.type][1])}</p>
          <p className="text-xs text-navy-500">{mine ? tx('Lo emitiste tú', 'Issued by you') : tx('Lo recibiste de un proveedor', 'Received from a supplier')}</p>
        </div>
        <div className="text-right text-xs">
          <p>
            <span className={k}>{tx('Serie y folio', 'Series/number')}</span> <span className="font-mono font-semibold">{c.serie}-{c.folio}</span>
          </p>
          <p>
            <span className={k}>{tx('Fecha', 'Date')}</span> <span className="font-mono">{c.date}</span>
          </p>
        </div>
      </div>
      <div className="relative mt-2 grid gap-2 sm:grid-cols-2">
        <div>
          <p className={k}>{tx('Emisor', 'Issuer')}</p>
          <p className="font-semibold">{c.issuer.name}</p>
          <p className="font-mono text-xs">RFC {c.issuer.rfc}</p>
          <p className="text-xs text-navy-500">{c.issuer.regime}</p>
        </div>
        <div>
          <p className={k}>{tx('Receptor', 'Receiver')}</p>
          <p className="font-semibold">{c.receiver.name}</p>
          <p className="font-mono text-xs">RFC {c.receiver.rfc}</p>
          <p className="text-xs text-navy-500">
            {tx('Uso del CFDI', 'CFDI use')}: {c.use}
          </p>
        </div>
      </div>
      <p className="relative mt-2 break-all font-mono text-[11px] text-navy-400">
        {tx('Folio fiscal (ficticio)', 'Fiscal UUID (fictitious)')}: {c.uuid}
      </p>
      {(c.method || c.form) && (
        <div className="relative mt-1 flex flex-wrap gap-x-4 text-xs">
          {c.method && (
            <span>
              <span className={k}>{tx('Método de pago', 'Payment method')}</span> <b>{c.method}</b> {c.method === 'PUE' ? tx('(pago en una sola exhibición)', '(paid in full)') : tx('(pago en parcialidades o diferido)', '(deferred / installments)')}
            </span>
          )}
          {c.form && (
            <span>
              <span className={k}>{tx('Forma de pago', 'Payment form')}</span> {c.form}
            </span>
          )}
        </div>
      )}

      {c.payroll ? (
        <div className="relative mt-3 grid gap-3 sm:grid-cols-2">
          <div className="sm:col-span-2 text-xs">
            <b>{c.payroll.employee}</b> · {c.payroll.position} · {c.payroll.days} {tx('días pagados', 'days paid')}
          </div>
          <Table title={tx('Percepciones', 'Earnings')} rows={c.payroll.perceptions} />
          <Table title={tx('Deducciones', 'Deductions')} rows={c.payroll.deductions} />
          <p className="sm:col-span-2 text-right font-bold">
            {tx('Neto pagado', 'Net paid')}: {m(c.payroll.net)}
          </p>
        </div>
      ) : c.payment ? (
        <div className="relative mt-3 overflow-x-auto">
          <p className={k}>{tx('Documento relacionado (la factura que se paga)', 'Related document (invoice being paid)')}</p>
          <table className="tabular mt-1 w-full min-w-[26rem] text-xs">
            <thead className="text-left text-navy-400">
              <tr>
                <th className="font-medium">{tx('Factura', 'Invoice')}</th>
                <th className="text-right font-medium">{tx('Parcialidad', 'Installment')}</th>
                <th className="text-right font-medium">{tx('Saldo anterior', 'Prior balance')}</th>
                <th className="text-right font-medium">{tx('Importe pagado', 'Amount paid')}</th>
                <th className="text-right font-medium">{tx('Saldo insoluto', 'Remaining')}</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-navy-100 dark:border-navy-800">
                <td className="font-mono">
                  {c.payment.serie}-{c.payment.folio}
                </td>
                <td className="text-right">{c.payment.part}</td>
                <td className="text-right">{m(c.payment.previous)}</td>
                <td className="text-right font-semibold">{m(c.payment.paid)}</td>
                <td className="text-right">{m(c.payment.remaining)}</td>
              </tr>
            </tbody>
          </table>
        </div>
      ) : (
        <>
          <div className="relative mt-3 overflow-x-auto">
            <table className="tabular w-full min-w-[22rem] text-xs">
              <thead className="text-left text-navy-400">
                <tr>
                  <th className="font-medium">{tx('Cant.', 'Qty')}</th>
                  <th className="font-medium">{tx('Descripción', 'Description')}</th>
                  <th className="text-right font-medium">{tx('Valor unit.', 'Unit price')}</th>
                  <th className="text-right font-medium">{tx('Importe', 'Amount')}</th>
                  <th className="text-right font-medium">IVA</th>
                </tr>
              </thead>
              <tbody>
                {c.concepts.map((x, i) => (
                  <tr key={i} className="border-t border-navy-100 dark:border-navy-800">
                    <td>{x.qty}</td>
                    <td>
                      {x.desc}
                      <span className="block text-[10px] text-navy-400">{x.unit}</span>
                      {x.discount > 0 && (
                        <span className="block text-navy-500">
                          {tx('Descuento', 'Discount')} {m(x.discount)}
                        </span>
                      )}
                    </td>
                    <td className="text-right">{m(x.price)}</td>
                    <td className="text-right">{m(x.amount)}</td>
                    <td className="text-right">{x.tax === 'iva16' ? '16%' : '0%'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {c.related && (
            <p className="relative mt-2 text-xs text-navy-500">
              {tx('CFDI relacionado', 'Related CFDI')}: {c.related.relation} · {c.related.serie}-{c.related.folio}
            </p>
          )}
          <dl className="tabular relative mt-2 ml-auto grid max-w-xs grid-cols-2 gap-x-3 text-xs">
            <dt>Subtotal</dt>
            <dd className="text-right">{m(c.subtotal)}</dd>
            {c.discount > 0 && (
              <>
                <dt>{tx('Descuento', 'Discount')}</dt>
                <dd className="text-right">−{m(c.discount)}</dd>
              </>
            )}
            <dt>{tx('IVA trasladado 16%', 'VAT 16%')}</dt>
            <dd className="text-right">{m(c.iva)}</dd>
            {c.retIsr > 0 && (
              <>
                <dt>{tx('ISR retenido', 'ISR withheld')}</dt>
                <dd className="text-right">−{m(c.retIsr)}</dd>
              </>
            )}
            {c.retIva > 0 && (
              <>
                <dt>{tx('IVA retenido', 'VAT withheld')}</dt>
                <dd className="text-right">−{m(c.retIva)}</dd>
              </>
            )}
            <dt className="font-bold">Total</dt>
            <dd className="text-right font-bold">{m(c.total)}</dd>
          </dl>
        </>
      )}
    </div>
  )
}

function Table({ title, rows }: { title: string; rows: { desc: string; amount: number }[] }) {
  return (
    <div>
      <p className="text-[11px] font-semibold uppercase tracking-wide text-navy-400">{title}</p>
      <table className="tabular w-full text-xs">
        <tbody>
          {rows.map((r, i) => (
            <tr key={i} className="border-t border-navy-100 dark:border-navy-800">
              <td>{r.desc}</td>
              <td className="text-right">{m(r.amount)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

/** "¿Cómo se calcula?": first a hint (which formula), then the full calculation with this document's numbers. */
export function AppliedFormulas({ formulas, open: startOpen = false }: { formulas: AppliedFormula[]; open?: boolean }) {
  const { t, tx } = useI18n()
  const [level, setLevel] = useState(startOpen ? 2 : 0)
  return (
    <div className="rounded-xl bg-electric-500/5 p-3 ring-1 ring-electric-500/20">
      <button type="button" onClick={() => setLevel((l) => (l === 0 ? 1 : 0))} className="flex w-full items-center gap-2 text-left text-sm font-semibold text-electric-700 dark:text-electric-300" aria-expanded={level > 0}>
        <Calculator className="h-4 w-4" /> {tx('¿Cómo se calculan los importes?', 'How are the amounts calculated?')}
        <ChevronDown className={cx('ml-auto h-4 w-4 transition', level > 0 && 'rotate-180')} />
      </button>
      {level > 0 && (
        <div className="mt-2 space-y-2">
          {formulas.map((f, i) => (
            <div key={i}>
              <p className="text-sm font-semibold text-navy-900 dark:text-white">{t(f.name)}</p>
              <p className="whitespace-pre-wrap break-words rounded-lg bg-navy-900 px-3 py-1.5 font-mono text-xs text-electric-300">{f.expression}</p>
              {level === 2 && (
                <ul className="tabular mt-1 space-y-0.5 break-words font-mono text-xs text-navy-700 dark:text-navy-200">
                  {f.calc.map((c, k) => (
                    <li key={k}>{c}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
          {level === 1 && (
            <button type="button" onClick={() => setLevel(2)} className="text-sm font-semibold text-electric-600 underline dark:text-electric-300">
              {tx('Ver el cálculo con los números de esta factura', 'Show the calculation with this invoice’s numbers')}
            </button>
          )}
        </div>
      )}
    </div>
  )
}
