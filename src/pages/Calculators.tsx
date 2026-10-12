import { useState, type ReactNode } from 'react'
import { ArrowLeft, Plus, Trash2 } from 'lucide-react'
import { CartesianGrid, Legend, Line, LineChart, ReferenceLine, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { errText, FormulaBox, Interpretation, num, ResultBox } from '../components/calc'
import { Button, Card, cx, Field, Notice, PageHeader, Segmented } from '../components/ui'
import * as F from '../lib/finance'
import { FIN_ERRORS } from '../lib/finErrors'
import { fmtMoney, fmtNumber, fmtPct } from '../lib/numbers'
import { navigate } from '../state/router'
import { useI18n } from '../state/store'

type Tool = 'pv' | 'fv' | 'compound' | 'annuity' | 'project' | 'wacc' | 'breakeven' | 'ratios'

const TOOLS: { id: Tool; es: string; en: string; desc: [string, string] }[] = [
  { id: 'pv', es: 'Valor presente', en: 'Present value', desc: ['¿Cuánto vale hoy un monto futuro?', 'What is a future amount worth today?'] },
  { id: 'fv', es: 'Valor futuro', en: 'Future value', desc: ['¿Cuánto valdrá mañana un monto de hoy?', 'What will an amount be worth later?'] },
  { id: 'compound', es: 'Interés compuesto', en: 'Compound interest', desc: ['Capitalización y tasa efectiva.', 'Compounding and effective rate.'] },
  { id: 'annuity', es: 'Anualidades', en: 'Annuities', desc: ['Pagos iguales y amortización.', 'Equal payments and amortization.'] },
  { id: 'project', es: 'VPN · TIR · Payback', en: 'NPV · IRR · Payback', desc: ['Evalúa un proyecto de inversión.', 'Evaluate an investment project.'] },
  { id: 'wacc', es: 'WACC y CAPM', en: 'WACC & CAPM', desc: ['Costo de capital promedio ponderado.', 'Weighted average cost of capital.'] },
  { id: 'breakeven', es: 'Punto de equilibrio', en: 'Break-even', desc: ['Unidades y ventas para no perder.', 'Units and sales to break even.'] },
  { id: 'ratios', es: 'Razones financieras', en: 'Financial ratios', desc: ['Liquidez, endeudamiento y rentabilidad.', 'Liquidity, leverage and profitability.'] },
]

export default function Calculators({ tool }: { tool?: string }) {
  const { tx, lang } = useI18n()
  const current = TOOLS.find((x) => x.id === tool)
  if (!current)
    return (
      <div>
        <PageHeader title={tx('Calculadoras financieras', 'Financial calculators')} subtitle={tx('Cálculos deterministas y verificables, con fórmula e interpretación.', 'Deterministic, verifiable calculations with formula and interpretation.')} />
        <div className="grid gap-3 sm:grid-cols-2">
          {TOOLS.map((x) => (
            <a key={x.id} href={`#/calc/${x.id}`}>
              <Card className="h-full transition hover:ring-electric-400">
                <p className="font-semibold text-navy-900 dark:text-white">{lang === 'es' ? x.es : x.en}</p>
                <p className="text-sm text-navy-500 dark:text-navy-300">{tx(...x.desc)}</p>
              </Card>
            </a>
          ))}
        </div>
      </div>
    )
  return (
    <div>
      <button type="button" onClick={() => navigate('/calc')} className="mb-3 inline-flex items-center gap-1 text-sm font-semibold text-electric-600 dark:text-electric-300">
        <ArrowLeft className="h-4 w-4" /> {tx('Calculadoras', 'Calculators')}
      </button>
      <PageHeader title={lang === 'es' ? current.es : current.en} subtitle={tx(...current.desc)} />
      {current.id === 'pv' && <TvmCalc mode="pv" />}
      {current.id === 'fv' && <TvmCalc mode="fv" />}
      {current.id === 'compound' && <CompoundCalc />}
      {current.id === 'annuity' && <AnnuityCalc />}
      {current.id === 'project' && <ProjectCalc />}
      {current.id === 'wacc' && <WaccCalc />}
      {current.id === 'breakeven' && <BreakEvenCalc />}
      {current.id === 'ratios' && <RatiosCalc />}
    </div>
  )
}

function Grid({ children }: { children: ReactNode }) {
  return <div className="grid gap-3 sm:grid-cols-2">{children}</div>
}

function FinError({ code }: { code: F.FinErrorCode }) {
  const { t, tx } = useI18n()
  return (
    <Notice tone="error" title={tx('No se puede calcular', 'Cannot compute')}>
      <span data-testid="calc-error">{t(FIN_ERRORS[code])}</span>
    </Notice>
  )
}

// ───────────────────────── PV / FV ─────────────────────────

function TvmCalc({ mode }: { mode: 'pv' | 'fv' }) {
  const { tx, lang } = useI18n()
  const [amount, setAmount] = useState(mode === 'pv' ? '100000' : '50000')
  const [rate, setRate] = useState('10')
  const [n, setN] = useState('5')
  const a = num(amount)
  const r = num(rate, { min: -99.99 })
  const p = num(n, { min: 0, max: 1000 })
  const ready = a.value !== null && r.value !== null && p.value !== null
  const res = ready ? (mode === 'pv' ? F.presentValue(a.value!, r.value! / 100, p.value!) : F.futureValue(a.value!, r.value! / 100, p.value!)) : null
  const series =
    res?.ok && p.value! <= 60
      ? Array.from({ length: Math.floor(p.value!) + 1 }, (_, k) => ({
          k,
          v: mode === 'pv' ? res.value * Math.pow(1 + r.value! / 100, k) : a.value! * Math.pow(1 + r.value! / 100, k),
        }))
      : []
  return (
    <div className="space-y-4">
      <Card>
        <Grid>
          <Field id="tvm-amount" label={mode === 'pv' ? tx('Valor futuro (VF)', 'Future value (FV)') : tx('Valor presente (VP)', 'Present value (PV)')} inputMode="decimal" value={amount} onChange={(e) => setAmount(e.target.value)} error={errText(a.error, tx)} suffix="$" />
          <Field id="tvm-rate" label={tx('Tasa por periodo', 'Rate per period')} inputMode="decimal" value={rate} onChange={(e) => setRate(e.target.value)} error={errText(r.error, tx, { min: -99.99 })} suffix="%" />
          <Field id="tvm-n" label={tx('Número de periodos (n)', 'Number of periods (n)')} inputMode="decimal" value={n} onChange={(e) => setN(e.target.value)} error={errText(p.error, tx, { min: 0, max: 1000 })} />
        </Grid>
      </Card>
      <FormulaBox>{mode === 'pv' ? 'VP = VF / (1 + r)^n' : 'VF = VP × (1 + r)^n'}</FormulaBox>
      {res && !res.ok && <FinError code={res.error} />}
      {res?.ok && (
        <>
          <div className="grid gap-3 sm:grid-cols-2">
            <ResultBox label={mode === 'pv' ? tx('Valor presente', 'Present value') : tx('Valor futuro', 'Future value')} value={fmtMoney(res.value, lang)} testId="tvm-result" />
            <ResultBox
              label={tx('Factor', 'Factor')}
              value={fmtNumber(mode === 'pv' ? 1 / Math.pow(1 + r.value! / 100, p.value!) : Math.pow(1 + r.value! / 100, p.value!), lang, 6)}
              tone="money"
            />
          </div>
          <Interpretation title={tx('Interpretación', 'Interpretation')}>
            {mode === 'pv'
              ? tx(
                  `Recibir ${fmtMoney(a.value!, lang)} dentro de ${p.value} periodos equivale a tener ${fmtMoney(res.value, lang)} hoy, si puedes invertir al ${rate} % por periodo. Mientras mayor la tasa o el plazo, menor el valor presente.`,
                  `Receiving ${fmtMoney(a.value!, lang)} in ${p.value} periods is equivalent to ${fmtMoney(res.value, lang)} today if you can invest at ${rate} % per period. Higher rates or longer terms lower the present value.`,
                )
              : tx(
                  `${fmtMoney(a.value!, lang)} invertidos hoy al ${rate} % por periodo se convierten en ${fmtMoney(res.value, lang)} después de ${p.value} periodos; ${fmtMoney(res.value - a.value!, lang)} son intereses (compuestos).`,
                  `${fmtMoney(a.value!, lang)} invested today at ${rate} % per period grows to ${fmtMoney(res.value, lang)} after ${p.value} periods; ${fmtMoney(res.value - a.value!, lang)} is (compound) interest.`,
                )}
          </Interpretation>
          {series.length > 1 && (
            <Card className="h-56 p-2">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={series} margin={{ top: 8, right: 12, left: 8, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#7f9bd1" strokeOpacity={0.25} />
                  <XAxis dataKey="k" fontSize={11} stroke="#7f9bd1" />
                  <YAxis fontSize={11} stroke="#7f9bd1" width={70} tickFormatter={(v) => fmtNumber(v, lang, 0)} />
                  <Tooltip formatter={(v) => fmtMoney(Number(v), lang)} labelFormatter={(l) => `${tx('Periodo', 'Period')} ${l}`} />
                  <Line type="monotone" dataKey="v" name={tx('Valor', 'Value')} stroke="#1f7aff" strokeWidth={2} dot={false} />
                </LineChart>
              </ResponsiveContainer>
            </Card>
          )}
        </>
      )}
    </div>
  )
}

// ───────────────────────── Compound ─────────────────────────

function CompoundCalc() {
  const { tx, lang } = useI18n()
  const [p0, setP0] = useState('10000')
  const [rate, setRate] = useState('12')
  const [years, setYears] = useState('3')
  const [m, setM] = useState('12')
  const a = num(p0)
  const r = num(rate, { min: -99 })
  const y = num(years, { min: 0, max: 100 })
  const mm = num(m, { min: 1, max: 365, integer: true })
  const ready = [a, r, y, mm].every((x) => x.value !== null)
  const res = ready ? F.compoundInterest(a.value!, r.value! / 100, y.value!, mm.value!) : null
  const simple = ready ? F.simpleInterest(a.value!, r.value! / 100, y.value!) : null
  return (
    <div className="space-y-4">
      <Card>
        <Grid>
          <Field id="ci-p" label={tx('Capital inicial', 'Principal')} inputMode="decimal" value={p0} onChange={(e) => setP0(e.target.value)} error={errText(a.error, tx)} suffix="$" />
          <Field id="ci-r" label={tx('Tasa nominal anual', 'Nominal annual rate')} inputMode="decimal" value={rate} onChange={(e) => setRate(e.target.value)} error={errText(r.error, tx, { min: -99 })} suffix="%" />
          <Field id="ci-y" label={tx('Años', 'Years')} inputMode="decimal" value={years} onChange={(e) => setYears(e.target.value)} error={errText(y.error, tx, { min: 0, max: 100 })} />
          <Field id="ci-m" label={tx('Capitalizaciones por año (m)', 'Compounding periods per year (m)')} inputMode="numeric" value={m} onChange={(e) => setM(e.target.value)} error={errText(mm.error, tx, { min: 1, max: 365 })} hint={tx('1 anual · 12 mensual · 365 diaria', '1 annual · 12 monthly · 365 daily')} />
        </Grid>
      </Card>
      <FormulaBox>{'VF = P × (1 + r/m)^(m·t)\nTasa efectiva = (1 + r/m)^m − 1\nInterés simple = P × r × t'}</FormulaBox>
      {res && !res.ok && <FinError code={res.error} />}
      {res?.ok && simple?.ok && (
        <>
          <div className="grid gap-3 sm:grid-cols-3">
            <ResultBox label={tx('Monto final (compuesto)', 'Final amount (compound)')} value={fmtMoney(res.value.fv, lang)} testId="ci-fv" />
            <ResultBox label={tx('Tasa efectiva anual', 'Effective annual rate')} value={fmtPct(res.value.effectiveRate, lang, 4)} tone="money" testId="ci-ear" />
            <ResultBox label={tx('Monto con interés simple', 'Amount with simple interest')} value={fmtMoney(simple.value.total, lang)} />
          </div>
          <Interpretation title={tx('Interpretación', 'Interpretation')}>
            {tx(
              `El interés compuesto genera ${fmtMoney(res.value.fv - simple.value.total, lang)} más que el simple porque los intereses también generan intereses. Una tasa nominal del ${rate} % capitalizable ${m} veces al año equivale a una tasa efectiva del ${fmtPct(res.value.effectiveRate, lang, 4)}.`,
              `Compound interest earns ${fmtMoney(res.value.fv - simple.value.total, lang)} more than simple interest because interest earns interest. A ${rate} % nominal rate compounded ${m} times a year equals an effective rate of ${fmtPct(res.value.effectiveRate, lang, 4)}.`,
            )}
          </Interpretation>
          <Card className="overflow-x-auto p-0">
            <table className="tabular w-full text-sm">
              <thead className="bg-navy-50 text-xs text-navy-500 dark:bg-navy-950">
                <tr>
                  <th className="p-2 text-left">{tx('Año', 'Year')}</th>
                  <th className="p-2 text-right">{tx('Interés del año', 'Interest for year')}</th>
                  <th className="p-2 text-right">{tx('Saldo', 'Balance')}</th>
                </tr>
              </thead>
              <tbody>
                {res.value.schedule.map((row) => (
                  <tr key={row.year} className="border-t border-navy-100 dark:border-navy-800">
                    <td className="p-2">{row.year}</td>
                    <td className="p-2 text-right">{fmtMoney(row.interest, lang)}</td>
                    <td className="p-2 text-right">{fmtMoney(row.balance, lang)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Card>
        </>
      )}
    </div>
  )
}

// ───────────────────────── Annuity ─────────────────────────

function AnnuityCalc() {
  const { tx, lang } = useI18n()
  const [solve, setSolve] = useState<'payment' | 'pv' | 'fv'>('payment')
  const [amount, setAmount] = useState('250000')
  const [rate, setRate] = useState('1')
  const [n, setN] = useState('24')
  const [timing, setTiming] = useState<F.AnnuityTiming>('end')
  const a = num(amount)
  const r = num(rate, { min: -99 })
  const nn = num(n, { min: 1, max: 1200, integer: true })
  const ready = a.value !== null && r.value !== null && nn.value !== null
  const i = (r.value ?? 0) / 100
  const res = !ready
    ? null
    : solve === 'payment'
      ? F.annuityPayment(a.value!, i, nn.value!, timing)
      : solve === 'pv'
        ? F.annuityPV(a.value!, i, nn.value!, timing)
        : F.annuityFV(a.value!, i, nn.value!, timing)
  const sched = ready && solve === 'payment' && timing === 'end' ? F.amortizationSchedule(a.value!, i, nn.value!) : null
  return (
    <div className="space-y-4">
      <Segmented
        label={tx('Qué calcular', 'What to compute')}
        value={solve}
        onChange={setSolve}
        options={[
          { value: 'payment', label: tx('Pago (préstamo)', 'Payment (loan)') },
          { value: 'pv', label: tx('Valor presente', 'Present value') },
          { value: 'fv', label: tx('Valor futuro', 'Future value') },
        ]}
      />
      <Card>
        <Grid>
          <Field
            id="an-amt"
            label={solve === 'payment' ? tx('Monto del préstamo (VP)', 'Loan amount (PV)') : tx('Pago periódico (PMT)', 'Periodic payment (PMT)')}
            inputMode="decimal"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            error={errText(a.error, tx)}
            suffix="$"
          />
          <Field id="an-r" label={tx('Tasa por periodo', 'Rate per period')} inputMode="decimal" value={rate} onChange={(e) => setRate(e.target.value)} error={errText(r.error, tx, { min: -99 })} suffix="%" hint={tx('Ej.: 12 % anual pagadero mensual → 1 %', 'E.g. 12 % annual paid monthly → 1 %')} />
          <Field id="an-n" label={tx('Número de pagos', 'Number of payments')} inputMode="numeric" value={n} onChange={(e) => setN(e.target.value)} error={errText(nn.error, tx, { min: 1, max: 1200 })} />
          <div>
            <span className="mb-1 block text-sm font-medium text-navy-700 dark:text-navy-100">{tx('Tipo', 'Type')}</span>
            <Segmented
              label={tx('Tipo de anualidad', 'Annuity type')}
              value={timing}
              onChange={setTiming}
              options={[
                { value: 'end', label: tx('Vencida', 'Ordinary') },
                { value: 'begin', label: tx('Anticipada', 'Due') },
              ]}
            />
          </div>
        </Grid>
      </Card>
      <FormulaBox>
        {solve === 'payment'
          ? 'PMT = VP × r / [1 − (1 + r)^−n]' + (timing === 'begin' ? '   ÷ (1 + r) (anticipada)' : '')
          : solve === 'pv'
            ? 'VP = PMT × [1 − (1 + r)^−n] / r' + (timing === 'begin' ? ' × (1 + r)' : '')
            : 'VF = PMT × [(1 + r)^n − 1] / r' + (timing === 'begin' ? ' × (1 + r)' : '')}
      </FormulaBox>
      {res && !res.ok && <FinError code={res.error} />}
      {res?.ok && (
        <>
          <div className="grid gap-3 sm:grid-cols-2">
            <ResultBox label={solve === 'payment' ? tx('Pago periódico', 'Periodic payment') : solve === 'pv' ? tx('Valor presente', 'Present value') : tx('Valor futuro', 'Future value')} value={fmtMoney(res.value, lang)} testId="annuity-result" />
            {solve === 'payment' && <ResultBox label={tx('Total pagado / intereses', 'Total paid / interest')} value={`${fmtMoney(res.value * nn.value!, lang)} / ${fmtMoney(res.value * nn.value! - a.value!, lang)}`} tone="money" />}
          </div>
          {sched?.ok && (
            <Card className="max-h-80 overflow-auto p-0">
              <table className="tabular w-full text-sm">
                <caption className="p-3 text-left font-semibold">{tx('Tabla de amortización', 'Amortization table')}</caption>
                <thead className="sticky top-0 bg-navy-50 text-xs text-navy-500 dark:bg-navy-950">
                  <tr>
                    <th className="p-2 text-left">#</th>
                    <th className="p-2 text-right">{tx('Pago', 'Payment')}</th>
                    <th className="p-2 text-right">{tx('Interés', 'Interest')}</th>
                    <th className="p-2 text-right">{tx('Capital', 'Principal')}</th>
                    <th className="p-2 text-right">{tx('Saldo', 'Balance')}</th>
                  </tr>
                </thead>
                <tbody>
                  {sched.value.map((row) => (
                    <tr key={row.period} className="border-t border-navy-100 dark:border-navy-800">
                      <td className="p-2">{row.period}</td>
                      <td className="p-2 text-right">{fmtMoney(row.payment, lang)}</td>
                      <td className="p-2 text-right">{fmtMoney(row.interest, lang)}</td>
                      <td className="p-2 text-right">{fmtMoney(row.principal, lang)}</td>
                      <td className="p-2 text-right">{fmtMoney(row.balance, lang)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Card>
          )}
          <Interpretation title={tx('Interpretación', 'Interpretation')}>
            {solve === 'payment'
              ? tx('En cada pago, la parte de interés se calcula sobre el saldo insoluto; por eso el abono a capital crece con el tiempo (sistema francés).', 'Each payment’s interest is computed on the outstanding balance, so the principal portion grows over time (French amortization).')
              : tx('Una anualidad anticipada vale más que una vencida porque cada pago se recibe un periodo antes.', 'An annuity due is worth more than an ordinary annuity because each payment arrives one period earlier.')}
          </Interpretation>
        </>
      )}
    </div>
  )
}

// ───────────────────────── Project: NPV / IRR / Payback ─────────────────────────

function ProjectCalc() {
  const { t, tx, lang } = useI18n()
  const [rate, setRate] = useState('10')
  const [flows, setFlows] = useState<string[]>(['-100000', '30000', '40000', '50000', '20000'])
  const r = num(rate, { min: -99 })
  const parsed = flows.map((f) => num(f))
  const ready = r.value !== null && parsed.every((p) => p.value !== null)
  const cf = parsed.map((p) => p.value ?? 0)
  const npv = ready ? F.npv(r.value! / 100, cf) : null
  const irr = ready ? F.irr(cf) : null
  const pb = ready ? F.payback(cf) : null
  const dpb = ready ? F.discountedPayback(r.value! / 100, cf) : null
  const pi = ready ? F.profitabilityIndex(r.value! / 100, cf) : null
  const profile =
    ready && cf.length >= 2
      ? Array.from({ length: 41 }, (_, k) => {
          const maxRate = irr?.ok ? Math.min(Math.max(0.2, Math.max(...irr.value.roots) * 1.6), 3) : 0.5
          const rr = (k / 40) * maxRate
          const v = F.npv(rr, cf)
          return { rate: Math.round(rr * 1000) / 10, npv: v.ok ? Math.round(v.value) : null }
        })
      : []
  const setFlow = (i: number, v: string) => setFlows((f) => f.map((x, k) => (k === i ? v : x)))

  return (
    <div className="space-y-4">
      <Card className="space-y-3">
        <Field id="pj-rate" label={tx('Tasa de descuento (costo de capital)', 'Discount rate (cost of capital)')} inputMode="decimal" value={rate} onChange={(e) => setRate(e.target.value)} error={errText(r.error, tx, { min: -99 })} suffix="%" />
        <div>
          <p className="mb-1 text-sm font-medium text-navy-700 dark:text-navy-100">{tx('Flujos de efectivo (t = 0 es la inversión inicial, normalmente negativa)', 'Cash flows (t = 0 is the initial investment, usually negative)')}</p>
          <div className="space-y-2">
            {flows.map((f, i) => (
              <div key={i} className="flex items-center gap-2">
                <span className="tabular w-10 text-sm text-navy-500">t={i}</span>
                <input
                  aria-label={tx(`Flujo del periodo ${i}`, `Cash flow period ${i}`)}
                  inputMode="decimal"
                  value={f}
                  onChange={(e) => setFlow(i, e.target.value)}
                  className={cx('tabular flex-1 rounded-xl border bg-white px-3 py-2 text-right dark:bg-navy-950', parsed[i].error ? 'border-red-500' : 'border-navy-200 dark:border-navy-700')}
                />
                <button type="button" aria-label={tx(`Eliminar flujo ${i}`, `Remove flow ${i}`)} disabled={flows.length <= 2} onClick={() => setFlows((fl) => fl.filter((_, k) => k !== i))} className="rounded-lg p-2 text-navy-400 hover:text-red-600 disabled:opacity-30">
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            ))}
          </div>
          <div className="mt-2 flex flex-wrap gap-2">
            <Button variant="ghost" size="sm" disabled={flows.length >= 40} onClick={() => setFlows((f) => [...f, '0'])}>
              <Plus className="h-4 w-4" /> {tx('Agregar periodo', 'Add period')}
            </Button>
            <Button variant="ghost" size="sm" onClick={() => setFlows(['-1000', '5000', '-6000'])}>
              {tx('Ejemplo: flujos no convencionales', 'Example: non-conventional flows')}
            </Button>
            <Button variant="ghost" size="sm" onClick={() => setFlows(['1000', '2000', '3000'])}>
              {tx('Ejemplo: sin TIR', 'Example: no IRR')}
            </Button>
          </div>
          {!ready && <p className="mt-1 text-xs text-red-600">{tx('Corrige los campos marcados.', 'Fix the highlighted fields.')}</p>}
        </div>
      </Card>
      <FormulaBox>{'VPN = Σ FCt / (1 + r)^t   (t = 0 … n)\nTIR: tasa r tal que VPN(r) = 0\nPayback: periodo en que el flujo acumulado llega a 0'}</FormulaBox>
      {npv && !npv.ok && <FinError code={npv.error} />}
      {npv?.ok && (
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          <ResultBox label={tx('VPN', 'NPV')} value={fmtMoney(npv.value, lang)} testId="npv-result" tone={npv.value >= 0 ? 'money' : 'red'} />
          <ResultBox
            label={irr?.ok && irr.value.multiple ? tx('TIR (múltiples)', 'IRR (multiple)') : tx('TIR', 'IRR')}
            value={irr?.ok ? irr.value.roots.map((x) => fmtPct(x, lang, 2)).join(' · ') : tx('No existe / no definida', 'Does not exist / undefined')}
            testId="irr-result"
          />
          <ResultBox label={tx('Índice de rentabilidad', 'Profitability index')} value={pi?.ok ? fmtNumber(pi.value, lang, 3) : '—'} />
          <ResultBox label={tx('Payback simple', 'Simple payback')} value={pb?.ok ? `${fmtNumber(pb.value.periods, lang, 2)} ${tx('periodos', 'periods')}` : tx('No se recupera', 'Not recovered')} testId="payback-result" />
          <ResultBox label={tx('Payback descontado', 'Discounted payback')} value={dpb?.ok ? `${fmtNumber(dpb.value.periods, lang, 2)} ${tx('periodos', 'periods')}` : tx('No se recupera', 'Not recovered')} />
        </div>
      )}
      {irr && !irr.ok && npv?.ok && <FinError code={irr.error} />}
      {irr?.ok && irr.value.multiple && (
        <Notice tone="warning" title={tx('Varias TIR', 'Multiple IRRs')}>
          {tx(
            `Los flujos cambian de signo ${irr.value.signChanges} veces, por lo que existen varias tasas que hacen VPN = 0. En este caso la TIR no es un criterio confiable: decide con el VPN al costo de capital.`,
            `Flows change sign ${irr.value.signChanges} times, so several rates make NPV = 0. The IRR is unreliable here: decide using NPV at the cost of capital.`,
          )}
        </Notice>
      )}
      {npv?.ok && (
        <Interpretation title={tx('Interpretación', 'Interpretation')}>
          {npv.value > 0
            ? tx(`Con VPN positivo (${fmtMoney(npv.value, lang)}), el proyecto crea valor: rinde más que el ${rate} % exigido. Se acepta si no hay restricciones o proyectos mutuamente excluyentes mejores.`, `With positive NPV (${fmtMoney(npv.value, lang)}), the project creates value: it returns more than the required ${rate} %. Accept unless constrained or a better mutually exclusive project exists.`)
            : npv.value < 0
              ? tx(`Con VPN negativo, el proyecto destruye valor al ${rate} %: se rechaza.`, `With negative NPV, the project destroys value at ${rate} %: reject it.`)
              : tx('VPN = 0: el proyecto rinde exactamente el costo de capital.', 'NPV = 0: the project earns exactly the cost of capital.')}{' '}
          {pb?.ok ? '' : tx('El payback no se alcanza en el horizonte, lo que indica alto riesgo de liquidez.', 'Payback is not reached within the horizon, signalling high liquidity risk.')}
        </Interpretation>
      )}
      {npv?.ok && (
        <Card className="overflow-x-auto p-0">
          <table className="tabular w-full text-sm">
            <thead className="bg-navy-50 text-xs text-navy-500 dark:bg-navy-950">
              <tr>
                <th className="p-2 text-left">t</th>
                <th className="p-2 text-right">{tx('Flujo', 'Flow')}</th>
                <th className="p-2 text-right">{tx('Factor', 'Factor')}</th>
                <th className="p-2 text-right">{tx('Flujo descontado', 'Discounted flow')}</th>
                <th className="p-2 text-right">{tx('Acumulado', 'Cumulative')}</th>
              </tr>
            </thead>
            <tbody>
              {cf.map((c, k) => {
                const f = 1 / Math.pow(1 + r.value! / 100, k)
                return (
                  <tr key={k} className="border-t border-navy-100 dark:border-navy-800">
                    <td className="p-2">{k}</td>
                    <td className="p-2 text-right">{fmtMoney(c, lang)}</td>
                    <td className="p-2 text-right">{fmtNumber(f, lang, 4)}</td>
                    <td className="p-2 text-right">{fmtMoney(c * f, lang)}</td>
                    <td className="p-2 text-right">{pb?.ok ? fmtMoney(pb.value.cumulative[k], lang) : fmtMoney(cf.slice(0, k + 1).reduce((a, b) => a + b, 0), lang)}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </Card>
      )}
      {profile.length > 0 && (
        <Card className="h-64 p-2">
          <p className="px-2 text-sm font-semibold">{tx('Perfil del VPN', 'NPV profile')}</p>
          <ResponsiveContainer width="100%" height="90%">
            <LineChart data={profile} margin={{ top: 8, right: 12, left: 8, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#7f9bd1" strokeOpacity={0.25} />
              <XAxis dataKey="rate" fontSize={11} stroke="#7f9bd1" unit="%" />
              <YAxis fontSize={11} stroke="#7f9bd1" width={70} tickFormatter={(v) => fmtNumber(v, lang, 0)} />
              <Tooltip formatter={(v) => fmtMoney(Number(v), lang)} labelFormatter={(l) => `${tx('Tasa', 'Rate')} ${l} %`} />
              <ReferenceLine y={0} stroke="#ef4444" />
              <Line type="monotone" dataKey="npv" name="VPN" stroke="#1f7aff" strokeWidth={2} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </Card>
      )}
      <p className="text-xs text-navy-400">{t({ es: 'La TIR se busca numéricamente entre −99 % y 1,000 % (bisección); se reportan todas las raíces encontradas.', en: 'IRR is searched numerically between −99 % and 1,000 % (bisection); every root found is reported.' })}</p>
    </div>
  )
}

// ───────────────────────── WACC ─────────────────────────

function WaccCalc() {
  const { tx, lang } = useI18n()
  const [useCapm, setUseCapm] = useState(true)
  const [E, setE] = useState('600000')
  const [D, setD] = useState('400000')
  const [ke, setKe] = useState('15')
  const [rf, setRf] = useState('9')
  const [beta, setBeta] = useState('1.2')
  const [rm, setRm] = useState('14')
  const [kd, setKd] = useState('11')
  const [tax, setTax] = useState('30')
  const e = num(E, { min: 0 })
  const d = num(D, { min: 0 })
  const kd_ = num(kd, { min: -99 })
  const t_ = num(tax, { min: 0, max: 99.99 })
  const rf_ = num(rf, { min: -99 })
  const b_ = num(beta)
  const rm_ = num(rm, { min: -99 })
  const ke_ = num(ke, { min: -99 })
  const capm = useCapm && rf_.value !== null && b_.value !== null && rm_.value !== null ? F.capm(rf_.value / 100, b_.value, rm_.value / 100) : null
  const costEquity = useCapm ? (capm?.ok ? capm.value : null) : ke_.value !== null ? ke_.value / 100 : null
  const ready = e.value !== null && d.value !== null && kd_.value !== null && t_.value !== null && costEquity !== null
  const res = ready ? F.wacc({ equityValue: e.value!, debtValue: d.value!, costOfEquity: costEquity!, costOfDebt: kd_.value! / 100, taxRate: t_.value! / 100 }) : null
  return (
    <div className="space-y-4">
      <Card>
        <Grid>
          <Field id="w-e" label={tx('Valor de mercado del capital (E)', 'Market value of equity (E)')} inputMode="decimal" value={E} onChange={(x) => setE(x.target.value)} error={errText(e.error, tx, { min: 0 })} suffix="$" />
          <Field id="w-d" label={tx('Valor de mercado de la deuda (D)', 'Market value of debt (D)')} inputMode="decimal" value={D} onChange={(x) => setD(x.target.value)} error={errText(d.error, tx, { min: 0 })} suffix="$" />
          <Field id="w-kd" label={tx('Costo de la deuda antes de impuestos (Kd)', 'Pre-tax cost of debt (Kd)')} inputMode="decimal" value={kd} onChange={(x) => setKd(x.target.value)} error={errText(kd_.error, tx, { min: -99 })} suffix="%" />
          <Field id="w-t" label={tx('Tasa de impuestos (T)', 'Tax rate (T)')} inputMode="decimal" value={tax} onChange={(x) => setTax(x.target.value)} error={errText(t_.error, tx, { min: 0, max: 99.99 })} suffix="%" hint={tx('ISR personas morales en México: 30 % (LISR art. 9; verificar vigencia).', 'Mexican corporate income tax: 30 % (LISR art. 9; verify current law).')} />
        </Grid>
        <label className="mt-4 flex items-center gap-2 text-sm font-medium">
          <input type="checkbox" className="h-5 w-5 accent-electric-500" checked={useCapm} onChange={(x) => setUseCapm(x.target.checked)} />
          {tx('Calcular el costo del capital con CAPM', 'Compute the cost of equity with CAPM')}
        </label>
        <div className="mt-3">
          {useCapm ? (
            <div className="grid gap-3 sm:grid-cols-3">
              <Field id="w-rf" label={tx('Tasa libre de riesgo (rf)', 'Risk-free rate (rf)')} inputMode="decimal" value={rf} onChange={(x) => setRf(x.target.value)} error={errText(rf_.error, tx)} suffix="%" />
              <Field id="w-b" label="Beta (β)" inputMode="decimal" value={beta} onChange={(x) => setBeta(x.target.value)} error={errText(b_.error, tx)} />
              <Field id="w-rm" label={tx('Rendimiento de mercado (Rm)', 'Market return (Rm)')} inputMode="decimal" value={rm} onChange={(x) => setRm(x.target.value)} error={errText(rm_.error, tx)} suffix="%" />
            </div>
          ) : (
            <Field id="w-ke" label={tx('Costo del capital (Ke)', 'Cost of equity (Ke)')} inputMode="decimal" value={ke} onChange={(x) => setKe(x.target.value)} error={errText(ke_.error, tx)} suffix="%" />
          )}
        </div>
      </Card>
      <FormulaBox>{'Ke (CAPM) = rf + β × (Rm − rf)\nWACC = E/V × Ke + D/V × Kd × (1 − T),   V = E + D'}</FormulaBox>
      {capm && !capm.ok && <FinError code={capm.error} />}
      {res && !res.ok && <FinError code={res.error} />}
      {res?.ok && (
        <>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <ResultBox label="WACC" value={fmtPct(res.value.wacc, lang, 2)} testId="wacc-result" />
            <ResultBox label="Ke" value={fmtPct(costEquity!, lang, 2)} tone="money" />
            <ResultBox label={tx('Kd después de impuestos', 'After-tax Kd')} value={fmtPct(res.value.afterTaxKd, lang, 2)} tone="money" />
            <ResultBox label="E/V · D/V" value={`${fmtPct(res.value.we, lang, 1)} · ${fmtPct(res.value.wd, lang, 1)}`} />
          </div>
          <Interpretation title={tx('Interpretación', 'Interpretation')}>
            {tx(
              `La empresa debe generar al menos ${fmtPct(res.value.wacc, lang, 2)} sobre sus inversiones para satisfacer a acreedores y accionistas. Los intereses son deducibles, por eso la deuda cuesta ${fmtPct(res.value.afterTaxKd, lang, 2)} después de impuestos. Más deuda no reduce el WACC indefinidamente: aumenta el riesgo financiero y, con él, Ke y Kd.`,
              `The firm must earn at least ${fmtPct(res.value.wacc, lang, 2)} on its investments to satisfy lenders and shareholders. Interest is tax-deductible, so debt costs ${fmtPct(res.value.afterTaxKd, lang, 2)} after tax. More debt does not lower WACC forever: it raises financial risk and therefore Ke and Kd.`,
            )}
          </Interpretation>
        </>
      )}
    </div>
  )
}

// ───────────────────────── Break-even ─────────────────────────

function BreakEvenCalc() {
  const { tx, lang } = useI18n()
  const [fc, setFc] = useState('120000')
  const [price, setPrice] = useState('250')
  const [vc, setVc] = useState('150')
  const [target, setTarget] = useState('30000')
  const [expected, setExpected] = useState('1800')
  const f = num(fc, { min: 0 })
  const p = num(price, { min: 0 })
  const v = num(vc, { min: 0 })
  const tg = num(target, { required: false })
  const ex = num(expected, { min: 0, required: false })
  const ready = f.value !== null && p.value !== null && v.value !== null
  const res = ready ? F.breakEven({ fixedCosts: f.value!, price: p.value!, variableCost: v.value!, targetProfit: tg.value ?? undefined, expectedUnits: ex.value ?? undefined }) : null
  const maxQ = res?.ok ? Math.max(10, Math.ceil(res.value.units * 2)) : 0
  const chart = res?.ok
    ? Array.from({ length: 21 }, (_, k) => {
        const q = Math.round((maxQ * k) / 20)
        return { q, revenue: q * p.value!, cost: f.value! + q * v.value! }
      })
    : []
  return (
    <div className="space-y-4">
      <Card>
        <Grid>
          <Field id="be-fc" label={tx('Costos fijos totales', 'Total fixed costs')} inputMode="decimal" value={fc} onChange={(e) => setFc(e.target.value)} error={errText(f.error, tx, { min: 0 })} suffix="$" />
          <Field id="be-p" label={tx('Precio de venta unitario', 'Unit selling price')} inputMode="decimal" value={price} onChange={(e) => setPrice(e.target.value)} error={errText(p.error, tx, { min: 0 })} suffix="$" />
          <Field id="be-vc" label={tx('Costo variable unitario', 'Unit variable cost')} inputMode="decimal" value={vc} onChange={(e) => setVc(e.target.value)} error={errText(v.error, tx, { min: 0 })} suffix="$" />
          <Field id="be-t" label={tx('Utilidad deseada (opcional)', 'Target profit (optional)')} inputMode="decimal" value={target} onChange={(e) => setTarget(e.target.value)} error={errText(tg.error, tx)} suffix="$" />
          <Field id="be-x" label={tx('Ventas esperadas en unidades (opcional)', 'Expected unit sales (optional)')} inputMode="decimal" value={expected} onChange={(e) => setExpected(e.target.value)} error={errText(ex.error, tx, { min: 0 })} />
        </Grid>
      </Card>
      <FormulaBox>{'MC unitario = P − CVu\nPE (unidades) = CF / (P − CVu)\nPE ($) = CF / razón MC\nUnidades para utilidad = (CF + U) / (P − CVu)'}</FormulaBox>
      {res && !res.ok && <FinError code={res.error} />}
      {res?.ok && (
        <>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            <ResultBox label={tx('Punto de equilibrio (unidades)', 'Break-even (units)')} value={fmtNumber(res.value.units, lang, 2)} testId="be-units" />
            <ResultBox label={tx('Punto de equilibrio (ventas $)', 'Break-even (sales $)')} value={fmtMoney(res.value.sales, lang)} testId="be-sales" />
            <ResultBox label={tx('Margen de contribución unitario', 'Unit contribution margin')} value={`${fmtMoney(res.value.unitContributionMargin, lang)} (${fmtPct(res.value.contributionMarginRatio, lang, 1)})`} tone="money" />
            {res.value.unitsForTarget !== undefined && <ResultBox label={tx('Unidades para la utilidad deseada', 'Units for target profit')} value={fmtNumber(res.value.unitsForTarget, lang, 2)} />}
            {res.value.marginOfSafetyUnits !== undefined && (
              <ResultBox
                label={tx('Margen de seguridad', 'Margin of safety')}
                value={`${fmtNumber(res.value.marginOfSafetyUnits, lang, 0)} u (${fmtPct(res.value.marginOfSafetyPct!, lang, 1)})`}
                tone={res.value.marginOfSafetyUnits >= 0 ? 'money' : 'red'}
              />
            )}
          </div>
          <Interpretation title={tx('Interpretación', 'Interpretation')}>
            {tx(
              `Cada unidad aporta ${fmtMoney(res.value.unitContributionMargin, lang)} para cubrir costos fijos. Se necesitan ${fmtNumber(Math.ceil(res.value.units - 1e-9), lang, 0)} unidades (redondeando hacia arriba) para no tener pérdidas.`,
              `Each unit contributes ${fmtMoney(res.value.unitContributionMargin, lang)} toward fixed costs. ${fmtNumber(Math.ceil(res.value.units - 1e-9), lang, 0)} units (rounded up) are needed to avoid a loss.`,
            )}{' '}
            {res.value.marginOfSafetyUnits !== undefined &&
              (res.value.marginOfSafetyUnits >= 0
                ? tx('Las ventas esperadas superan el equilibrio.', 'Expected sales exceed break-even.')
                : tx('Las ventas esperadas están por debajo del equilibrio: se esperan pérdidas.', 'Expected sales are below break-even: a loss is expected.'))}
          </Interpretation>
          <Card className="h-64 p-2">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chart} margin={{ top: 8, right: 12, left: 8, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#7f9bd1" strokeOpacity={0.25} />
                <XAxis dataKey="q" fontSize={11} stroke="#7f9bd1" />
                <YAxis fontSize={11} stroke="#7f9bd1" width={70} tickFormatter={(x) => fmtNumber(x, lang, 0)} />
                <Tooltip formatter={(x) => fmtMoney(Number(x), lang)} labelFormatter={(l) => `${l} ${tx('unidades', 'units')}`} />
                <Legend />
                <ReferenceLine x={chart.reduce((best, c) => (Math.abs(c.q - res.value.units) < Math.abs(best - res.value.units) ? c.q : best), 0)} stroke="#12a86d" strokeDasharray="4 4" />
                <Line type="monotone" dataKey="revenue" name={tx('Ingresos', 'Revenue')} stroke="#1f7aff" strokeWidth={2} dot={false} />
                <Line type="monotone" dataKey="cost" name={tx('Costo total', 'Total cost')} stroke="#ef4444" strokeWidth={2} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </Card>
        </>
      )}
    </div>
  )
}

// ───────────────────────── Ratios ─────────────────────────

const RATIO_FIELDS: { key: keyof F.StatementInput; es: string; en: string; def: string }[] = [
  { key: 'cash', es: 'Efectivo', en: 'Cash', def: '80000' },
  { key: 'receivables', es: 'Cuentas por cobrar', en: 'Receivables', def: '150000' },
  { key: 'inventory', es: 'Inventarios', en: 'Inventory', def: '170000' },
  { key: 'currentAssets', es: 'Activo circulante', en: 'Current assets', def: '400000' },
  { key: 'totalAssets', es: 'Activo total', en: 'Total assets', def: '1000000' },
  { key: 'currentLiabilities', es: 'Pasivo a corto plazo', en: 'Current liabilities', def: '250000' },
  { key: 'totalLiabilities', es: 'Pasivo total', en: 'Total liabilities', def: '550000' },
  { key: 'equity', es: 'Capital contable', en: 'Equity', def: '450000' },
  { key: 'revenue', es: 'Ventas netas', en: 'Net sales', def: '1200000' },
  { key: 'costOfSales', es: 'Costo de ventas', en: 'Cost of sales', def: '720000' },
  { key: 'operatingIncome', es: 'Utilidad de operación', en: 'Operating income', def: '180000' },
  { key: 'interestExpense', es: 'Gasto por intereses', en: 'Interest expense', def: '40000' },
  { key: 'netIncome', es: 'Utilidad neta', en: 'Net income', def: '98000' },
]

const RATIO_DEFS: { key: F.RatioKey; es: string; en: string; formula: string; kind: 'x' | '%' | 'days'; group: [string, string] }[] = [
  { key: 'currentRatio', es: 'Razón circulante', en: 'Current ratio', formula: 'AC / PCP', kind: 'x', group: ['Liquidez', 'Liquidity'] },
  { key: 'quickRatio', es: 'Prueba ácida', en: 'Quick ratio', formula: '(AC − Inv) / PCP', kind: 'x', group: ['Liquidez', 'Liquidity'] },
  { key: 'cashRatio', es: 'Razón de efectivo', en: 'Cash ratio', formula: 'Efectivo / PCP', kind: 'x', group: ['Liquidez', 'Liquidity'] },
  { key: 'debtRatio', es: 'Endeudamiento', en: 'Debt ratio', formula: 'Pasivo / Activo', kind: '%', group: ['Apalancamiento', 'Leverage'] },
  { key: 'debtToEquity', es: 'Pasivo / Capital', en: 'Debt to equity', formula: 'Pasivo / Capital', kind: 'x', group: ['Apalancamiento', 'Leverage'] },
  { key: 'equityMultiplier', es: 'Multiplicador de capital', en: 'Equity multiplier', formula: 'Activo / Capital', kind: 'x', group: ['Apalancamiento', 'Leverage'] },
  { key: 'interestCoverage', es: 'Cobertura de intereses', en: 'Interest coverage', formula: 'UO / Intereses', kind: 'x', group: ['Apalancamiento', 'Leverage'] },
  { key: 'grossMargin', es: 'Margen bruto', en: 'Gross margin', formula: '(Ventas − CV) / Ventas', kind: '%', group: ['Rentabilidad', 'Profitability'] },
  { key: 'operatingMargin', es: 'Margen operativo', en: 'Operating margin', formula: 'UO / Ventas', kind: '%', group: ['Rentabilidad', 'Profitability'] },
  { key: 'netMargin', es: 'Margen neto', en: 'Net margin', formula: 'UN / Ventas', kind: '%', group: ['Rentabilidad', 'Profitability'] },
  { key: 'roa', es: 'ROA', en: 'ROA', formula: 'UN / Activo total', kind: '%', group: ['Rentabilidad', 'Profitability'] },
  { key: 'roe', es: 'ROE', en: 'ROE', formula: 'UN / Capital', kind: '%', group: ['Rentabilidad', 'Profitability'] },
  { key: 'assetTurnover', es: 'Rotación de activos', en: 'Asset turnover', formula: 'Ventas / Activo', kind: 'x', group: ['Eficiencia', 'Efficiency'] },
  { key: 'inventoryTurnover', es: 'Rotación de inventarios', en: 'Inventory turnover', formula: 'CV / Inventario', kind: 'x', group: ['Eficiencia', 'Efficiency'] },
  { key: 'dso', es: 'Días de cobro', en: 'Days sales outstanding', formula: 'CxC / Ventas × 365', kind: 'days', group: ['Eficiencia', 'Efficiency'] },
]

function RatiosCalc() {
  const { tx, lang } = useI18n()
  const [vals, setVals] = useState<Record<string, string>>(() => Object.fromEntries(RATIO_FIELDS.map((f) => [f.key, f.def])))
  const parsed = Object.fromEntries(RATIO_FIELDS.map((f) => [f.key, num(vals[f.key])]))
  const ready = RATIO_FIELDS.every((f) => parsed[f.key].value !== null)
  const input = Object.fromEntries(RATIO_FIELDS.map((f) => [f.key, parsed[f.key].value ?? NaN])) as unknown as F.StatementInput
  const r = ready ? F.ratios(input) : null
  const balanceCheck = ready ? Math.abs(input.totalAssets - (input.totalLiabilities + input.equity)) < 0.5 : true
  const fmt = (v: number | null, kind: 'x' | '%' | 'days') =>
    v === null ? tx('No definido (÷0)', 'Undefined (÷0)') : kind === '%' ? fmtPct(v, lang, 2) : kind === 'days' ? `${fmtNumber(v, lang, 1)} ${tx('días', 'days')}` : `${fmtNumber(v, lang, 2)}x`
  return (
    <div className="space-y-4">
      <Card>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {RATIO_FIELDS.map((f) => (
            <Field key={f.key} id={`ra-${f.key}`} label={lang === 'es' ? f.es : f.en} inputMode="decimal" value={vals[f.key]} onChange={(e) => setVals((v) => ({ ...v, [f.key]: e.target.value }))} error={errText(parsed[f.key].error, tx)} suffix="$" />
          ))}
        </div>
      </Card>
      {!balanceCheck && <Notice tone="warning">{tx('Atención: Activo ≠ Pasivo + Capital. Revisa tus datos.', 'Warning: Assets ≠ Liabilities + Equity. Check your inputs.')}</Notice>}
      {r && (
        <Card className="overflow-x-auto p-0">
          <table className="tabular w-full text-sm">
            <thead className="bg-navy-50 text-xs text-navy-500 dark:bg-navy-950">
              <tr>
                <th className="p-2 text-left">{tx('Razón', 'Ratio')}</th>
                <th className="p-2 text-left">{tx('Fórmula', 'Formula')}</th>
                <th className="p-2 text-right">{tx('Resultado', 'Result')}</th>
              </tr>
            </thead>
            <tbody>
              {RATIO_DEFS.map((d, i) => (
                <tr key={d.key} className={cx('border-t border-navy-100 dark:border-navy-800', i > 0 && RATIO_DEFS[i - 1].group[0] !== d.group[0] && 'border-t-2 border-navy-300')}>
                  <td className="p-2">
                    <span className="block font-medium">{lang === 'es' ? d.es : d.en}</span>
                    <span className="text-[11px] text-navy-400">{tx(...d.group)}</span>
                  </td>
                  <td className="p-2 font-mono text-xs text-navy-500">{d.formula}</td>
                  <td className="p-2 text-right font-semibold" data-testid={`ratio-${d.key}`}>
                    {fmt(r[d.key], d.kind)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
      )}
      {r && (
        <Interpretation title={tx('Interpretación', 'Interpretation')}>
          {r.roe !== null && r.netMargin !== null && r.assetTurnover !== null && r.equityMultiplier !== null && (
            <p>
              {tx('DuPont', 'DuPont')}: ROE = {fmtPct(r.netMargin, lang, 2)} × {fmtNumber(r.assetTurnover, lang, 2)} × {fmtNumber(r.equityMultiplier, lang, 2)} = {fmtPct(r.roe, lang, 2)}.
            </p>
          )}
          {r.currentRatio !== null && (
            <p className="mt-1">
              {r.currentRatio >= 1
                ? tx(`Con razón circulante de ${fmtNumber(r.currentRatio, lang, 2)}, los activos circulantes cubren las deudas de corto plazo.`, `With a current ratio of ${fmtNumber(r.currentRatio, lang, 2)}, current assets cover short-term debts.`)
                : tx('La razón circulante es menor que 1: posible presión de liquidez.', 'The current ratio is below 1: possible liquidity pressure.')}{' '}
              {tx('Compara siempre contra el sector y contra años anteriores; una razón aislada no basta.', 'Always compare with the industry and prior years; a single ratio is not enough.')}
            </p>
          )}
        </Interpretation>
      )}
    </div>
  )
}
