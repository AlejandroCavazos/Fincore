import { useState } from 'react'
import { Bar, BarChart, CartesianGrid, Cell, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis, Scatter, ScatterChart, ZAxis } from 'recharts'
import { COMPANIES, derive, type DcfAssumptions } from '../content/companies'
import { FormulaBox, Interpretation, ResultBox } from '../components/calc'
import { Badge, Card, cx, Notice, PageHeader, SectionTitle, Segmented, Select } from '../components/ui'
import * as F from '../lib/finance'
import { FIN_ERRORS } from '../lib/finErrors'
import { fmtMoney, fmtNumber, fmtPct, parseNumber } from '../lib/numbers'
import { applyScenario, valueCompany } from '../lib/valuation'
import { useI18n } from '../state/store'

type Tab = 'analysis' | 'dcf' | 'scenarios' | 'project' | 'portfolio'

function Tag({ kind }: { kind: 'data' | 'assumption' | 'calc' }) {
  const { tx } = useI18n()
  return kind === 'data' ? <Badge>{tx('Dato', 'Data')}</Badge> : kind === 'assumption' ? <Badge tone="amber">{tx('Supuesto', 'Assumption')}</Badge> : <Badge tone="electric">{tx('Cálculo', 'Calculation')}</Badge>
}

export default function Invest() {
  const { t, tx, lang } = useI18n()
  const [companyId, setCompanyId] = useState(COMPANIES[0].id)
  const [tab, setTab] = useState<Tab>('analysis')
  const [resets, setResets] = useState(0)
  const company = COMPANIES.find((c) => c.id === companyId)!
  const [assump, setAssump] = useState<Record<string, DcfAssumptions>>(() => Object.fromEntries(COMPANIES.map((c) => [c.id, c.base])))
  const a = assump[company.id]
  const last = company.years[company.years.length - 1]
  const netDebt = last.debt - last.cash
  const m = (v: number) => `${fmtNumber(v, lang, 0)}`

  return (
    <div>
      <PageHeader title={tx('Inversión y valuación', 'Investing & valuation')} subtitle={tx('Casos ficticios. Cifras en millones de pesos (MXN).', 'Fictitious cases. Figures in millions of pesos (MXN).')} />
      <Select id="company" label={tx('Empresa', 'Company')} value={companyId} onChange={(e) => setCompanyId(e.target.value)}>
        {COMPANIES.map((c) => (
          <option key={c.id} value={c.id}>
            {c.name}
          </option>
        ))}
      </Select>
      <p className="mt-2 text-sm text-navy-500 dark:text-navy-300">
        <Badge tone="electric">{t(company.sector)}</Badge> {t(company.description)}
      </p>
      <div className="mt-4">
        <Segmented<Tab>
          label={tx('Sección', 'Section')}
          value={tab}
          onChange={setTab}
          options={[
            { value: 'analysis', label: tx('Análisis', 'Analysis') },
            { value: 'dcf', label: 'DCF' },
            { value: 'scenarios', label: tx('Escenarios', 'Scenarios') },
            { value: 'project', label: tx('Proyecto', 'Project') },
            { value: 'portfolio', label: tx('Portafolio', 'Portfolio') },
          ]}
        />
      </div>

      {tab === 'analysis' && <Analysis company={company} m={m} />}
      {tab === 'dcf' && (
        <DcfView
          a={a}
          setA={(x) => setAssump((s) => ({ ...s, [company.id]: x }))}
          reset={() => {
            setAssump((s) => ({ ...s, [company.id]: company.base }))
            setResets((n) => n + 1)
          }}
          version={`${company.id}-${resets}`}
          lastRevenue={last.revenue}
          netDebt={netDebt}
          shares={company.sharesMillions}
        />
      )}
      {tab === 'scenarios' && <Scenarios a={a} lastRevenue={last.revenue} netDebt={netDebt} shares={company.sharesMillions} />}
      {tab === 'project' && <ProjectCase />}
      {tab === 'portfolio' && <Portfolio />}
    </div>
  )

  function Analysis({ company: c, m: fm }: { company: typeof company; m: (v: number) => string }) {
    const rows = c.years.map((y) => {
      const d = derive(y)
      const r = F.ratios({
        currentAssets: y.currentAssets,
        inventory: y.inventory,
        cash: y.cash,
        receivables: 0,
        totalAssets: y.totalAssets,
        currentLiabilities: y.currentLiabilities,
        totalLiabilities: y.totalLiabilities,
        equity: y.equity,
        revenue: y.revenue,
        costOfSales: y.costOfSales,
        operatingIncome: d.ebit,
        interestExpense: y.interest,
        netIncome: d.netIncome,
      })
      return { y, d, r }
    })
    const chart = rows.map(({ y, r }) => ({ year: y.year, gross: (r.grossMargin ?? 0) * 100, op: (r.operatingMargin ?? 0) * 100, net: (r.netMargin ?? 0) * 100, roe: (r.roe ?? 0) * 100 }))
    const line = (label: string, kind: 'data' | 'calc', vals: string[], bold = false) => (
      <tr className={cx('border-t border-navy-100 dark:border-navy-800', bold && 'font-semibold')}>
        <td className="p-2">
          {label} <span className="ml-1 align-middle">{kind === 'calc' ? <Tag kind="calc" /> : null}</span>
        </td>
        {vals.map((v, i) => (
          <td key={i} className="p-2 text-right">
            {v}
          </td>
        ))}
      </tr>
    )
    const pct = (v: number | null) => (v === null ? '—' : fmtPct(v, lang, 1))
    return (
      <div className="mt-4 space-y-4">
        <Notice>
          <Tag kind="data" /> {tx('= cifras reportadas del caso.', '= reported case figures.')} <Tag kind="calc" /> {tx('= calculado por FINCORE con funciones deterministas.', '= computed by FINCORE with deterministic functions.')}
        </Notice>
        <Card className="overflow-x-auto p-0">
          <table className="tabular w-full min-w-[30rem] text-sm">
            <caption className="p-3 text-left font-semibold">{tx('Estado de resultados (MXN millones)', 'Income statement (MXN millions)')}</caption>
            <thead className="bg-navy-50 text-xs text-navy-500 dark:bg-navy-950">
              <tr>
                <th className="p-2 text-left">{tx('Concepto', 'Item')}</th>
                {c.years.map((y) => (
                  <th key={y.year} className="p-2 text-right">
                    {y.year}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {line(tx('Ventas', 'Revenue'), 'data', rows.map((x) => fm(x.y.revenue)))}
              {line(tx('Costo de ventas', 'Cost of sales'), 'data', rows.map((x) => fm(x.y.costOfSales)))}
              {line(tx('Utilidad bruta', 'Gross profit'), 'calc', rows.map((x) => fm(x.d.grossProfit)), true)}
              {line(tx('Gastos de operación', 'Operating expenses'), 'data', rows.map((x) => fm(x.y.opex)))}
              {line(tx('Utilidad de operación (EBIT)', 'Operating income (EBIT)'), 'calc', rows.map((x) => fm(x.d.ebit)), true)}
              {line('EBITDA', 'calc', rows.map((x) => fm(x.d.ebitda)))}
              {line(tx('Gasto por intereses', 'Interest expense'), 'data', rows.map((x) => fm(x.y.interest)))}
              {line(tx('Impuestos (30 %)', 'Taxes (30 %)'), 'calc', rows.map((x) => fmtNumber(x.d.tax, lang, 1)))}
              {line(tx('Utilidad neta', 'Net income'), 'calc', rows.map((x) => fmtNumber(x.d.netIncome, lang, 1)), true)}
            </tbody>
          </table>
        </Card>
        <Card className="overflow-x-auto p-0">
          <table className="tabular w-full min-w-[30rem] text-sm">
            <caption className="p-3 text-left font-semibold">{tx('Balance y razones', 'Balance sheet and ratios')}</caption>
            <tbody>
              {line(tx('Activo total', 'Total assets'), 'data', rows.map((x) => fm(x.y.totalAssets)))}
              {line(tx('Pasivo total', 'Total liabilities'), 'data', rows.map((x) => fm(x.y.totalLiabilities)))}
              {line(tx('Capital contable', 'Equity'), 'data', rows.map((x) => fm(x.y.equity)))}
              {line(tx('Margen bruto', 'Gross margin'), 'calc', rows.map((x) => pct(x.r.grossMargin)))}
              {line(tx('Margen operativo', 'Operating margin'), 'calc', rows.map((x) => pct(x.r.operatingMargin)))}
              {line(tx('Margen neto', 'Net margin'), 'calc', rows.map((x) => pct(x.r.netMargin)))}
              {line('ROA', 'calc', rows.map((x) => pct(x.r.roa)))}
              {line('ROE', 'calc', rows.map((x) => pct(x.r.roe)))}
              {line(tx('Razón circulante', 'Current ratio'), 'calc', rows.map((x) => (x.r.currentRatio === null ? '—' : `${fmtNumber(x.r.currentRatio, lang, 2)}x`)))}
              {line(tx('Pasivo / Activo', 'Liabilities / Assets'), 'calc', rows.map((x) => pct(x.r.debtRatio)))}
              {line(tx('Cobertura de intereses', 'Interest coverage'), 'calc', rows.map((x) => (x.r.interestCoverage === null ? '—' : `${fmtNumber(x.r.interestCoverage, lang, 1)}x`)))}
            </tbody>
          </table>
        </Card>
        <Card className="h-64 p-2">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={chart} margin={{ top: 8, right: 12, left: -10, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#7f9bd1" strokeOpacity={0.25} />
              <XAxis dataKey="year" fontSize={11} stroke="#7f9bd1" />
              <YAxis fontSize={11} stroke="#7f9bd1" unit="%" />
              <Tooltip formatter={(v) => `${fmtNumber(Number(v), lang, 1)} %`} />
              <Legend />
              <Line dataKey="gross" name={tx('Margen bruto', 'Gross')} stroke="#1f7aff" strokeWidth={2} />
              <Line dataKey="op" name={tx('Margen operativo', 'Operating')} stroke="#12a86d" strokeWidth={2} />
              <Line dataKey="net" name={tx('Margen neto', 'Net')} stroke="#f59e0b" strokeWidth={2} />
              <Line dataKey="roe" name="ROE" stroke="#8b5cf6" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </Card>
        <Interpretation title={tx('Interpretación', 'Interpretation')}>
          {(() => {
            const f = rows[0]
            const l = rows[rows.length - 1]
            const growth = Math.pow(l.y.revenue / f.y.revenue, 1 / (rows.length - 1)) - 1
            return tx(
              `Las ventas crecieron a una tasa anual compuesta de ${fmtPct(growth, lang, 1)} entre ${f.y.year} y ${l.y.year}. El margen operativo pasó de ${pct(f.r.operatingMargin)} a ${pct(l.r.operatingMargin)} y el ROE de ${pct(f.r.roe)} a ${pct(l.r.roe)}. Esta interpretación es educativa: en la práctica se compara contra el sector y se revisan notas a los estados financieros.`,
              `Revenue grew at a compound annual rate of ${fmtPct(growth, lang, 1)} between ${f.y.year} and ${l.y.year}. Operating margin moved from ${pct(f.r.operatingMargin)} to ${pct(l.r.operatingMargin)} and ROE from ${pct(f.r.roe)} to ${pct(l.r.roe)}. This interpretation is educational: in practice, compare with peers and read the notes to the financial statements.`,
            )
          })()}
        </Interpretation>
      </div>
    )
  }
}

function PctInput({ id, label, value, onChange }: { id: string; label: string; value: number; onChange: (v: number) => void }) {
  const [raw, setRaw] = useState(String(Math.round(value * 10000) / 100))
  const [err, setErr] = useState(false)
  return (
    <div>
      <label htmlFor={id} className="mb-1 flex items-center gap-1 text-xs font-medium text-navy-600 dark:text-navy-200">
        {label} <Tag kind="assumption" />
      </label>
      <div className="relative">
        <input
          id={id}
          inputMode="decimal"
          value={raw}
          onChange={(e) => {
            setRaw(e.target.value)
            const v = parseNumber(e.target.value)
            if (v === null || v < -50 || v > 100) setErr(true)
            else {
              setErr(false)
              onChange(v / 100)
            }
          }}
          aria-invalid={err}
          className={cx('tabular w-full rounded-xl border bg-white px-3 py-2 pr-8 dark:bg-navy-950', err ? 'border-red-500' : 'border-navy-200 dark:border-navy-700')}
        />
        <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-sm text-navy-400">%</span>
      </div>
    </div>
  )
}

function DcfView({ a, setA, reset, lastRevenue, netDebt, shares, version }: { version: string; a: DcfAssumptions; setA: (a: DcfAssumptions) => void; reset: () => void; lastRevenue: number; netDebt: number; shares: number }) {
  const { t, tx, lang } = useI18n()
  const res = valueCompany(lastRevenue, a, netDebt, shares)
  const fields: [keyof DcfAssumptions, string, string][] = [
    ['growth', 'Crecimiento anual de ventas (años 1–5)', 'Annual revenue growth (years 1–5)'],
    ['ebitMargin', 'Margen EBIT', 'EBIT margin'],
    ['taxRate', 'Tasa de impuestos', 'Tax rate'],
    ['daPct', 'D&A / ventas', 'D&A / revenue'],
    ['capexPct', 'CapEx / ventas', 'CapEx / revenue'],
    ['nwcPct', 'ΔCapital de trabajo / Δventas', 'ΔNWC / Δrevenue'],
    ['wacc', 'WACC', 'WACC'],
    ['terminalGrowth', 'Crecimiento perpetuo (g)', 'Terminal growth (g)'],
  ]
  return (
    <div className="mt-4 space-y-4">
      <Card>
        <div className="mb-2 flex items-center justify-between">
          <p className="font-semibold">{tx('Supuestos', 'Assumptions')}</p>
          <button type="button" onClick={reset} className="text-sm font-semibold text-electric-600">
            {tx('Restablecer', 'Reset')}
          </button>
        </div>
        <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
          {fields.map(([k, es, en]) => (
            <PctInput key={`${k}-${version}`} id={`dcf-${k}`} label={lang === 'es' ? es : en} value={a[k]} onChange={(v) => setA({ ...a, [k]: v })} />
          ))}
        </div>
        <p className="mt-3 text-xs text-navy-500">
          <Tag kind="data" /> {tx('Ventas del último año', 'Last-year revenue')}: {fmtNumber(lastRevenue, lang, 0)} · {tx('Deuda neta', 'Net debt')}: {fmtNumber(netDebt, lang, 0)} · {tx('Acciones (millones)', 'Shares (millions)')}: {shares}
        </p>
      </Card>
      <FormulaBox>{'FCFF = EBIT × (1 − T) + D&A − CapEx − ΔCTN\nVT = FCFF₅ × (1 + g) / (WACC − g)\nEV = Σ FCFFt/(1+WACC)^t + VT/(1+WACC)^5\nValor del capital = EV − Deuda neta'}</FormulaBox>
      {!res.ok ? (
        <Notice tone="error" title={tx('No se puede valuar', 'Cannot value')}>
          {t(FIN_ERRORS[res.error])}
        </Notice>
      ) : (
        <>
          <Card className="overflow-x-auto p-0">
            <table className="tabular w-full min-w-[34rem] text-sm">
              <caption className="p-3 text-left font-semibold">
                {tx('Proyección (MXN millones)', 'Forecast (MXN millions)')} <Tag kind="calc" />
              </caption>
              <thead className="bg-navy-50 text-xs text-navy-500 dark:bg-navy-950">
                <tr>
                  <th className="p-2 text-left">{tx('Año', 'Year')}</th>
                  {res.value.rows.map((r) => (
                    <th key={r.t} className="p-2 text-right">
                      +{r.t}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {(
                  [
                    ['revenue', tx('Ventas', 'Revenue')],
                    ['ebit', 'EBIT'],
                    ['nopat', 'NOPAT'],
                    ['da', 'D&A'],
                    ['capex', 'CapEx'],
                    ['deltaNwc', 'ΔCTN / ΔNWC'],
                    ['fcff', 'FCFF'],
                  ] as const
                ).map(([k, label]) => (
                  <tr key={k} className={cx('border-t border-navy-100 dark:border-navy-800', k === 'fcff' && 'font-bold')}>
                    <td className="p-2">{label}</td>
                    {res.value.rows.map((r) => (
                      <td key={r.t} className="p-2 text-right">
                        {fmtNumber(r[k], lang, 1)}
                      </td>
                    ))}
                  </tr>
                ))}
                <tr className="border-t border-navy-100 dark:border-navy-800">
                  <td className="p-2">{tx('VP del FCFF', 'PV of FCFF')}</td>
                  {res.value.pvFcf.map((v, i) => (
                    <td key={i} className="p-2 text-right">
                      {fmtNumber(v, lang, 1)}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </Card>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <ResultBox label={tx('Valor terminal (VP)', 'Terminal value (PV)')} value={fmtNumber(res.value.pvTerminalValue, lang, 0)} />
            <ResultBox label="Enterprise Value" value={fmtNumber(res.value.enterpriseValue, lang, 0)} testId="dcf-ev" />
            <ResultBox label="Equity Value" value={fmtNumber(res.value.equityValue, lang, 0)} tone="money" testId="dcf-equity" />
            <ResultBox label={tx('Valor por acción', 'Value per share')} value={fmtMoney(res.value.perShare ?? 0, lang)} tone="money" />
          </div>
          <Interpretation title={tx('Interpretación', 'Interpretation')}>
            {tx(
              `El valor terminal representa ${fmtPct(res.value.terminalShare, lang, 0)} del Enterprise Value: la valuación depende mucho de los supuestos de largo plazo (WACC y g). Un DCF es tan bueno como sus supuestos; prueba la sensibilidad en «Escenarios».`,
              `Terminal value is ${fmtPct(res.value.terminalShare, lang, 0)} of enterprise value: the valuation depends heavily on long-term assumptions (WACC and g). A DCF is only as good as its assumptions; test sensitivity under "Scenarios".`,
            )}
          </Interpretation>
        </>
      )}
    </div>
  )
}

function Scenarios({ a, lastRevenue, netDebt, shares }: { a: DcfAssumptions; lastRevenue: number; netDebt: number; shares: number }) {
  const { tx, lang } = useI18n()
  const names = { bear: tx('Pesimista', 'Bear'), base: tx('Base', 'Base'), bull: tx('Optimista', 'Bull') }
  const data = (['bear', 'base', 'bull'] as const).map((s) => {
    const sa = applyScenario(a, s)
    const r = valueCompany(lastRevenue, sa, netDebt, shares)
    return { s, name: names[s], sa, ok: r.ok, perShare: r.ok ? r.value.perShare ?? 0 : 0, ev: r.ok ? r.value.enterpriseValue : 0 }
  })
  const waccs = [-0.01, -0.005, 0, 0.005, 0.01].map((d) => a.wacc + d)
  const gs = [-0.01, -0.005, 0, 0.005, 0.01].map((d) => a.terminalGrowth + d)
  return (
    <div className="mt-4 space-y-4">
      <Card className="overflow-x-auto p-0">
        <table className="tabular w-full min-w-[30rem] text-sm">
          <thead className="bg-navy-50 text-xs text-navy-500 dark:bg-navy-950">
            <tr>
              <th className="p-2 text-left">{tx('Escenario', 'Scenario')}</th>
              <th className="p-2 text-right">{tx('Crecimiento', 'Growth')}</th>
              <th className="p-2 text-right">{tx('Margen EBIT', 'EBIT margin')}</th>
              <th className="p-2 text-right">WACC</th>
              <th className="p-2 text-right">EV</th>
              <th className="p-2 text-right">{tx('Valor/acción', 'Value/share')}</th>
            </tr>
          </thead>
          <tbody>
            {data.map((d) => (
              <tr key={d.s} className="border-t border-navy-100 dark:border-navy-800">
                <td className="p-2 font-semibold">{d.name}</td>
                <td className="p-2 text-right">{fmtPct(d.sa.growth, lang, 1)}</td>
                <td className="p-2 text-right">{fmtPct(d.sa.ebitMargin, lang, 1)}</td>
                <td className="p-2 text-right">{fmtPct(d.sa.wacc, lang, 1)}</td>
                <td className="p-2 text-right">{d.ok ? fmtNumber(d.ev, lang, 0) : '—'}</td>
                <td className="p-2 text-right font-bold">{d.ok ? fmtMoney(d.perShare, lang) : tx('No definido', 'Undefined')}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
      <Card className="h-56 p-2">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 8, right: 12, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#7f9bd1" strokeOpacity={0.25} vertical={false} />
            <XAxis dataKey="name" fontSize={12} stroke="#7f9bd1" />
            <YAxis fontSize={11} stroke="#7f9bd1" />
            <Tooltip formatter={(v) => fmtMoney(Number(v), lang)} />
            <Bar dataKey="perShare" name={tx('Valor por acción', 'Value per share')} radius={[6, 6, 0, 0]}>
              {data.map((d) => (
                <Cell key={d.s} fill={d.s === 'bear' ? '#ef4444' : d.s === 'base' ? '#1f7aff' : '#12a86d'} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </Card>
      <SectionTitle>{tx('Sensibilidad: valor por acción (WACC × g)', 'Sensitivity: value per share (WACC × g)')}</SectionTitle>
      <Card className="overflow-x-auto p-0">
        <table className="tabular w-full min-w-[30rem] text-sm">
          <thead className="bg-navy-50 text-xs text-navy-500 dark:bg-navy-950">
            <tr>
              <th className="p-2 text-left">WACC \ g</th>
              {gs.map((g) => (
                <th key={g} className="p-2 text-right">
                  {fmtPct(g, lang, 1)}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {waccs.map((w) => (
              <tr key={w} className="border-t border-navy-100 dark:border-navy-800">
                <td className="p-2 font-semibold">{fmtPct(w, lang, 1)}</td>
                {gs.map((g) => {
                  const r = valueCompany(lastRevenue, { ...a, wacc: w, terminalGrowth: g }, netDebt, shares)
                  const center = w === a.wacc && g === a.terminalGrowth
                  return (
                    <td key={g} className={cx('p-2 text-right', center && 'bg-electric-500/10 font-bold')}>
                      {r.ok ? fmtNumber(r.value.perShare ?? 0, lang, 2) : 'n/d'}
                    </td>
                  )
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
      <Interpretation title={tx('Interpretación', 'Interpretation')}>
        {tx(
          'Los escenarios ajustan crecimiento (±3 pp), margen (±2 pp) y WACC. La tabla de sensibilidad muestra que pequeños cambios en WACC o g mueven mucho el valor; «n/d» indica g ≥ WACC, donde el modelo de Gordon no está definido.',
          'Scenarios shift growth (±3 pp), margin (±2 pp) and WACC. The sensitivity table shows small WACC or g changes move value a lot; "n/d" means g ≥ WACC, where the Gordon model is undefined.',
        )}
      </Interpretation>
    </div>
  )
}

function ProjectCase() {
  const { tx, lang } = useI18n()
  const [capex, setCapex] = useState('1500')
  const [units, setUnits] = useState('120000')
  const [price, setPrice] = useState('9')
  const [vc, setVc] = useState('5')
  const [fixed, setFixed] = useState('150')
  const [rate, setRate] = useState('11')
  const n = 5
  const p = (s: string) => parseNumber(s)
  const vals = [p(capex), p(units), p(price), p(vc), p(fixed), p(rate)]
  const ok = vals.every((v) => v !== null && v >= 0)
  let flows: number[] = []
  if (ok) {
    const [I, q, P, V, CF] = vals as number[]
    const dep = I / n
    const ebit = (q * (P - V)) / 1000 - CF - dep // contribution in pesos → thousands of pesos
    const nopat = ebit * 0.7
    flows = [-I, ...Array.from({ length: n }, () => nopat + dep)]
  }
  const npv = ok ? F.npv((vals[5] as number) / 100, flows) : null
  const irr = ok ? F.irr(flows) : null
  const pb = ok ? F.payback(flows) : null
  return (
    <div className="mt-4 space-y-4">
      <Card>
        <p className="text-sm text-navy-600 dark:text-navy-300">
          {tx(
            'Caso: nueva línea de producción. Cifras en miles de pesos, salvo precio y costo unitarios (pesos). Vida 5 años, depreciación en línea recta sin valor residual, ISR 30 %.',
            'Case: new production line. Figures in thousands of pesos, except unit price and cost (pesos). 5-year life, straight-line depreciation with no residual value, 30 % tax.',
          )}
        </p>
        <div className="mt-3 grid grid-cols-2 gap-3 lg:grid-cols-3">
          {(
            [
              ['pc-i', tx('Inversión inicial (miles $)', 'Initial investment ($ thousands)'), capex, setCapex],
              ['pc-q', tx('Unidades anuales', 'Annual units'), units, setUnits],
              ['pc-p', tx('Precio unitario ($)', 'Unit price ($)'), price, setPrice],
              ['pc-v', tx('Costo variable unitario ($)', 'Unit variable cost ($)'), vc, setVc],
              ['pc-f', tx('Costos fijos anuales (miles $)', 'Annual fixed costs ($ thousands)'), fixed, setFixed],
              ['pc-r', tx('Tasa de descuento (%)', 'Discount rate (%)'), rate, setRate],
            ] as const
          ).map(([id, label, v, set]) => (
            <div key={id}>
              <label htmlFor={id} className="mb-1 flex items-center gap-1 text-xs font-medium">
                {label} <Tag kind="assumption" />
              </label>
              <input id={id} inputMode="decimal" value={v} onChange={(e) => set(e.target.value)} className="tabular w-full rounded-xl border border-navy-200 bg-white px-3 py-2 dark:border-navy-700 dark:bg-navy-950" />
            </div>
          ))}
        </div>
      </Card>
      {!ok ? (
        <Notice tone="error">{tx('Completa todos los supuestos con números no negativos.', 'Fill every assumption with non-negative numbers.')}</Notice>
      ) : (
        <>
          <FormulaBox>{'Flujo anual = (Q × (P − CVu) / 1000 − CF − Dep) × (1 − 30 %) + Dep'}</FormulaBox>
          <div className="grid gap-3 sm:grid-cols-3">
            <ResultBox label={tx('VPN (miles $)', 'NPV ($ thousands)')} value={npv?.ok ? fmtNumber(npv.value, lang, 1) : '—'} tone={npv?.ok && npv.value >= 0 ? 'money' : 'red'} />
            <ResultBox label={tx('TIR', 'IRR')} value={irr?.ok ? irr.value.roots.map((r) => fmtPct(r, lang, 2)).join(' · ') : tx('No existe', 'Does not exist')} />
            <ResultBox label="Payback" value={pb?.ok ? `${fmtNumber(pb.value.periods, lang, 2)} ${tx('años', 'years')}` : tx('No se recupera', 'Not recovered')} />
          </div>
          <p className="tabular text-xs text-navy-500">
            {tx('Flujos', 'Flows')}: {flows.map((f) => fmtNumber(f, lang, 1)).join(' · ')}
          </p>
          <Interpretation title={tx('Interpretación', 'Interpretation')}>
            {npv?.ok && npv.value >= 0
              ? tx('El proyecto genera valor a la tasa exigida; aun así, revisa el riesgo de los supuestos de volumen y precio.', 'The project creates value at the required rate; still, stress-test the volume and price assumptions.')
              : tx('El proyecto no cubre el costo de capital con estos supuestos: se rechaza o se rediseña.', 'The project does not cover the cost of capital under these assumptions: reject or redesign it.')}
          </Interpretation>
        </>
      )}
    </div>
  )
}

function Portfolio() {
  const { t, tx, lang } = useI18n()
  const [r1, setR1] = useState('12')
  const [s1, setS1] = useState('20')
  const [r2, setR2] = useState('7')
  const [s2, setS2] = useState('8')
  const [rho, setRho] = useState('0.2')
  const [w, setW] = useState(60)
  const v = [r1, s1, r2, s2, rho].map(parseNumber)
  const ok = v.every((x) => x !== null)
  const res = ok ? F.portfolioTwoAssets(w / 100, v[0]! / 100, v[2]! / 100, v[1]! / 100, v[3]! / 100, v[4]!) : null
  const frontier = ok
    ? Array.from({ length: 21 }, (_, k) => {
        const r = F.portfolioTwoAssets(k / 20, v[0]! / 100, v[2]! / 100, v[1]! / 100, v[3]! / 100, v[4]!)
        return r.ok ? { risk: +(r.value.stdDev * 100).toFixed(2), ret: +(r.value.expectedReturn * 100).toFixed(2), w: k * 5 } : null
      }).filter((x): x is { risk: number; ret: number; w: number } => !!x)
    : []
  return (
    <div className="mt-4 space-y-4">
      <Card>
        <p className="mb-3 text-sm text-navy-600 dark:text-navy-300">{tx('Simulador de dos activos: acciones (A) y bonos (B). Supuestos anuales.', 'Two-asset simulator: equities (A) and bonds (B). Annual assumptions.')}</p>
        <div className="grid grid-cols-2 gap-3 lg:grid-cols-5">
          {(
            [
              ['pf-r1', tx('Rend. esperado A (%)', 'Exp. return A (%)'), r1, setR1],
              ['pf-s1', tx('Volatilidad A (%)', 'Volatility A (%)'), s1, setS1],
              ['pf-r2', tx('Rend. esperado B (%)', 'Exp. return B (%)'), r2, setR2],
              ['pf-s2', tx('Volatilidad B (%)', 'Volatility B (%)'), s2, setS2],
              ['pf-rho', tx('Correlación ρ (−1 a 1)', 'Correlation ρ (−1 to 1)'), rho, setRho],
            ] as const
          ).map(([id, label, val, set]) => (
            <div key={id}>
              <label htmlFor={id} className="mb-1 block text-xs font-medium">
                {label}
              </label>
              <input id={id} inputMode="decimal" value={val} onChange={(e) => set(e.target.value)} className="tabular w-full rounded-xl border border-navy-200 bg-white px-3 py-2 dark:border-navy-700 dark:bg-navy-950" />
            </div>
          ))}
        </div>
        <label htmlFor="pf-w" className="mt-4 block text-sm font-medium">
          {tx('Peso en A', 'Weight in A')}: <span className="tabular font-bold">{w} %</span> · {tx('Peso en B', 'Weight in B')}: <span className="tabular font-bold">{100 - w} %</span>
        </label>
        <input id="pf-w" type="range" min={0} max={100} step={5} value={w} onChange={(e) => setW(Number(e.target.value))} className="mt-2 w-full accent-electric-500" />
      </Card>
      <FormulaBox>{'E[Rp] = wA·RA + wB·RB\nσp = √(wA²σA² + wB²σB² + 2·wA·wB·σA·σB·ρ)'}</FormulaBox>
      {res && !res.ok && (
        <Notice tone="error">{t(FIN_ERRORS[res.error])}</Notice>
      )}
      {res?.ok && (
        <>
          <div className="grid gap-3 sm:grid-cols-2">
            <ResultBox label={tx('Rendimiento esperado', 'Expected return')} value={fmtPct(res.value.expectedReturn, lang, 2)} tone="money" />
            <ResultBox label={tx('Riesgo (desv. estándar)', 'Risk (std. dev.)')} value={fmtPct(res.value.stdDev, lang, 2)} />
          </div>
          <Card className="h-64 p-2">
            <ResponsiveContainer width="100%" height="100%">
              <ScatterChart margin={{ top: 8, right: 12, left: -10, bottom: 8 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#7f9bd1" strokeOpacity={0.25} />
                <XAxis type="number" dataKey="risk" name={tx('Riesgo', 'Risk')} unit="%" fontSize={11} stroke="#7f9bd1" domain={['auto', 'auto']} />
                <YAxis type="number" dataKey="ret" name={tx('Rendimiento', 'Return')} unit="%" fontSize={11} stroke="#7f9bd1" domain={['auto', 'auto']} />
                <ZAxis range={[40, 40]} />
                <Tooltip formatter={(val) => `${val} %`} />
                <Scatter data={frontier} fill="#1f7aff" line />
                <Scatter data={[{ risk: +(res.value.stdDev * 100).toFixed(2), ret: +(res.value.expectedReturn * 100).toFixed(2) }]} fill="#12a86d" shape="star" />
              </ScatterChart>
            </ResponsiveContainer>
          </Card>
          <Interpretation title={tx('Interpretación', 'Interpretation')}>
            {tx(
              'Mientras menor sea la correlación, mayor el beneficio de diversificar: el riesgo del portafolio es menor que el promedio ponderado de los riesgos individuales (salvo con ρ = 1). Rendimientos pasados o supuestos no garantizan resultados futuros.',
              'The lower the correlation, the larger the diversification benefit: portfolio risk is below the weighted average of individual risks (unless ρ = 1). Past or assumed returns do not guarantee future results.',
            )}
          </Interpretation>
        </>
      )}
    </div>
  )
}
