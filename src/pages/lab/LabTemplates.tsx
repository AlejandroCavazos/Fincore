import { useState } from 'react'
import { BookPlus } from 'lucide-react'
import { AppliedFormulas } from '../../components/lab/CfdiView'
import { Button, Card, Field, Segmented } from '../../components/ui'
import { m, type AppliedFormula } from '../../lib/cfdi'
import { parseNumber } from '../../lib/numbers'
import { useI18n } from '../../state/store'
import type { JournalLine, L } from '../../types'
import { TopicLinks } from './LabPractice'

type Tpl = 'dep' | 'loan' | 'be' | 'price'

export interface TemplateEntry {
  description: L
  lines: JournalLine[]
}

const r2 = (n: number) => Math.round(n * 100) / 100
const useNum = (init: string) => {
  const [v, set] = useState(init)
  const n = parseNumber(v)
  return { v, set, n, err: v.trim() !== '' && n === null }
}

function Result({ items }: { items: [string, string][] }) {
  return (
    <dl className="tabular grid grid-cols-[minmax(0,1fr)_auto] gap-x-3 gap-y-1 rounded-xl bg-navy-50 p-3 text-sm dark:bg-navy-950">
      {items.map(([k, v], i) => (
        <div key={i} className="contents">
          <dt className="text-navy-600 dark:text-navy-300">{k}</dt>
          <dd className="text-right font-semibold text-navy-900 dark:text-white">{v}</dd>
        </div>
      ))}
    </dl>
  )
}

/** Calculation templates. Each shows where every number comes from and links to its lesson. */
export default function LabTemplates({ onRecord }: { onRecord: (e: TemplateEntry) => void }) {
  const { tx } = useI18n()
  const [tpl, setTpl] = useState<Tpl>('dep')
  return (
    <div className="space-y-4">
      <Segmented<Tpl>
        label={tx('Plantilla', 'Template')}
        value={tpl}
        onChange={setTpl}
        options={[
          { value: 'dep', label: tx('Depreciación', 'Depreciation') },
          { value: 'loan', label: tx('Préstamo', 'Loan') },
          { value: 'be', label: tx('Punto de equilibrio', 'Break-even') },
          { value: 'price', label: tx('Precio de venta', 'Selling price') },
        ]}
      />
      {tpl === 'dep' && <Depreciation onRecord={onRecord} />}
      {tpl === 'loan' && <Loan />}
      {tpl === 'be' && <BreakEven />}
      {tpl === 'price' && <Price />}
    </div>
  )
}

function Depreciation({ onRecord }: { onRecord: (e: TemplateEntry) => void }) {
  const { tx } = useI18n()
  const cost = useNum('60000')
  const salvage = useNum('6000')
  const life = useNum('5')
  const ok = cost.n !== null && salvage.n !== null && life.n !== null && life.n > 0 && cost.n >= salvage.n
  const annual = ok ? r2((cost.n! - salvage.n!) / life.n!) : 0
  const monthly = r2(annual / 12)
  const years = ok ? Math.min(30, Math.ceil(life.n!)) : 0
  const f: AppliedFormula[] = [
    { name: { es: 'Depreciación anual (línea recta)', en: 'Annual depreciation (straight line)' }, expression: 'Depreciación anual = (Costo − Valor de rescate) ÷ Años de vida útil', calc: [`(${m(cost.n ?? 0)} − ${m(salvage.n ?? 0)}) ÷ ${life.n ?? 0} = ${m(annual)}`] },
    { name: { es: 'Depreciación mensual', en: 'Monthly depreciation' }, expression: 'Depreciación mensual = Depreciación anual ÷ 12', calc: [`${m(annual)} ÷ 12 = ${m(monthly)}`] },
    { name: { es: 'Valor en libros', en: 'Book value' }, expression: 'Valor en libros = Costo − Depreciación acumulada', calc: [`${tx('Año 1', 'Year 1')}: ${m(cost.n ?? 0)} − ${m(annual)} = ${m((cost.n ?? 0) - annual)}`] },
  ]
  return (
    <Card className="space-y-3">
      <p className="text-sm text-navy-600 dark:text-navy-300">{tx('Calcula cuánto se desgasta cada año un bien que usas en tu negocio (un auto, una computadora, una máquina).', 'How much an asset you use wears down each year.')}</p>
      <div className="grid gap-3 sm:grid-cols-3">
        <Field id="dep-cost" label={tx('Costo del bien', 'Asset cost')} inputMode="decimal" value={cost.v} onChange={(e) => cost.set(e.target.value)} error={cost.err ? tx('Escribe un número válido', 'Enter a valid number') : null} />
        <Field id="dep-salvage" label={tx('Valor de rescate', 'Salvage value')} hint={tx('Lo que valdrá al final', 'What it will be worth at the end')} inputMode="decimal" value={salvage.v} onChange={(e) => salvage.set(e.target.value)} />
        <Field id="dep-life" label={tx('Años de vida útil', 'Useful life (years)')} inputMode="decimal" value={life.v} onChange={(e) => life.set(e.target.value)} />
      </div>
      {ok ? (
        <>
          <Result items={[[tx('Depreciación anual', 'Annual depreciation'), m(annual)], [tx('Depreciación mensual', 'Monthly depreciation'), m(monthly)]]} />
          <div className="overflow-x-auto">
            <table className="tabular w-full min-w-[24rem] text-sm">
              <thead className="text-left text-xs text-navy-400">
                <tr>
                  <th className="font-medium">{tx('Año', 'Year')}</th>
                  <th className="text-right font-medium">{tx('Depreciación', 'Depreciation')}</th>
                  <th className="text-right font-medium">{tx('Acumulada', 'Accumulated')}</th>
                  <th className="text-right font-medium">{tx('Valor en libros', 'Book value')}</th>
                </tr>
              </thead>
              <tbody>
                {Array.from({ length: years }).map((_, i) => {
                  const acc = r2(Math.min(cost.n! - salvage.n!, annual * (i + 1)))
                  const dep = r2(acc - Math.min(cost.n! - salvage.n!, annual * i))
                  return (
                    <tr key={i} className="border-t border-navy-100 dark:border-navy-800">
                      <td>{i + 1}</td>
                      <td className="text-right">{m(dep)}</td>
                      <td className="text-right">{m(acc)}</td>
                      <td className="text-right">{m(cost.n! - acc)}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
          <Button
            variant="secondary"
            disabled={monthly <= 0}
            onClick={() =>
              onRecord({
                description: { es: `Depreciación del mes (${m(monthly)})`, en: `Monthly depreciation (${m(monthly)})` },
                lines: [
                  { accountCode: '6105', side: 'D', amount: monthly },
                  { accountCode: '1207', side: 'C', amount: monthly },
                ],
              })
            }
          >
            <BookPlus className="h-4 w-4" /> {tx('Registrar la depreciación del mes en mi proyecto', 'Record this month’s depreciation in my project')}
          </Button>
        </>
      ) : (
        <p className="text-sm text-red-600">{tx('Revisa los datos: el costo debe ser mayor o igual al valor de rescate y la vida útil mayor que cero.', 'Check the data: cost ≥ salvage and life > 0.')}</p>
      )}
      <AppliedFormulas formulas={f} />
      <TopicLinks ids={['CON-08']} />
    </Card>
  )
}

function Loan() {
  const { tx } = useI18n()
  const amount = useNum('100000')
  const rate = useNum('18')
  const months = useNum('12')
  const ok = amount.n !== null && amount.n > 0 && rate.n !== null && rate.n >= 0 && months.n !== null && months.n >= 1 && months.n <= 360 && Number.isInteger(months.n)
  const i = ok ? rate.n! / 100 / 12 : 0
  const n = ok ? months.n! : 0
  const pay = !ok ? 0 : i === 0 ? amount.n! / n : (amount.n! * i) / (1 - (1 + i) ** -n)
  const rows: { k: number; interest: number; capital: number; balance: number }[] = []
  let bal = amount.n ?? 0
  for (let k = 1; ok && k <= n; k++) {
    const interest = bal * i
    const capital = pay - interest
    bal = Math.max(0, bal - capital)
    rows.push({ k, interest, capital, balance: bal })
  }
  const f: AppliedFormula[] = [
    { name: { es: 'Tasa mensual', en: 'Monthly rate' }, expression: 'i = Tasa anual ÷ 12', calc: [`${rate.n ?? 0}% ÷ 12 = ${(i * 100).toFixed(4)}% = ${i.toFixed(6)}`] },
    { name: { es: 'Pago mensual fijo', en: 'Fixed monthly payment' }, expression: 'Pago = Monto × i ÷ (1 − (1 + i)^−n)', calc: [`${m(amount.n ?? 0)} × ${i.toFixed(6)} ÷ (1 − (1 + ${i.toFixed(6)})^−${n}) = ${m(pay)}`] },
    { name: { es: 'Interés y capital de cada mes', en: 'Interest and principal each month' }, expression: 'Interés = Saldo × i\nCapital = Pago − Interés\nNuevo saldo = Saldo − Capital', calc: rows[0] ? [`${tx('Mes 1', 'Month 1')}: ${m(amount.n!)} × ${i.toFixed(6)} = ${m(rows[0].interest)}; ${m(pay)} − ${m(rows[0].interest)} = ${m(rows[0].capital)}`] : [] },
  ]
  return (
    <Card className="space-y-3">
      <p className="text-sm text-navy-600 dark:text-navy-300">{tx('Calcula el pago mensual de un préstamo y cuánto de cada pago es interés y cuánto abona a la deuda.', 'Monthly payment of a loan and how much of each payment is interest.')}</p>
      <div className="grid gap-3 sm:grid-cols-3">
        <Field id="loan-amount" label={tx('Monto prestado', 'Loan amount')} inputMode="decimal" value={amount.v} onChange={(e) => amount.set(e.target.value)} />
        <Field id="loan-rate" label={tx('Tasa anual', 'Annual rate')} suffix="%" inputMode="decimal" value={rate.v} onChange={(e) => rate.set(e.target.value)} />
        <Field id="loan-months" label={tx('Plazo en meses', 'Term (months)')} inputMode="numeric" value={months.v} onChange={(e) => months.set(e.target.value)} />
      </div>
      {ok ? (
        <>
          <Result
            items={[
              [tx('Pago mensual', 'Monthly payment'), m(pay)],
              [tx('Total que pagarás', 'Total paid'), m(pay * n)],
              [tx('Intereses totales', 'Total interest'), m(pay * n - amount.n!)],
            ]}
          />
          <div className="max-h-72 overflow-auto">
            <table className="tabular w-full min-w-[26rem] text-sm">
              <thead className="sticky top-0 bg-white text-left text-xs text-navy-400 dark:bg-navy-900">
                <tr>
                  <th className="font-medium">{tx('Mes', 'Month')}</th>
                  <th className="text-right font-medium">{tx('Pago', 'Payment')}</th>
                  <th className="text-right font-medium">{tx('Interés', 'Interest')}</th>
                  <th className="text-right font-medium">{tx('Capital', 'Principal')}</th>
                  <th className="text-right font-medium">{tx('Saldo', 'Balance')}</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r) => (
                  <tr key={r.k} className="border-t border-navy-100 dark:border-navy-800">
                    <td>{r.k}</td>
                    <td className="text-right">{m(pay)}</td>
                    <td className="text-right">{m(r.interest)}</td>
                    <td className="text-right">{m(r.capital)}</td>
                    <td className="text-right">{m(r.balance)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      ) : (
        <p className="text-sm text-red-600">{tx('Revisa los datos: monto mayor que cero y plazo de 1 a 360 meses (número entero).', 'Check the data: amount > 0, term 1–360 whole months.')}</p>
      )}
      <AppliedFormulas formulas={f} />
      <TopicLinks ids={['FIN-02', 'FIN-03']} />
    </Card>
  )
}

function BreakEven() {
  const { tx } = useI18n()
  const fixed = useNum('120000')
  const price = useNum('250')
  const variable = useNum('150')
  const cm = (price.n ?? 0) - (variable.n ?? 0)
  const ok = fixed.n !== null && fixed.n >= 0 && price.n !== null && variable.n !== null && cm > 0
  const units = ok ? fixed.n! / cm : 0
  const f: AppliedFormula[] = [
    { name: { es: 'Margen de contribución por unidad', en: 'Unit contribution margin' }, expression: 'Margen = Precio − Costo variable', calc: [`${m(price.n ?? 0)} − ${m(variable.n ?? 0)} = ${m(cm)}`] },
    { name: { es: 'Punto de equilibrio en unidades', en: 'Break-even units' }, expression: 'Unidades = Costos fijos ÷ Margen de contribución', calc: [`${m(fixed.n ?? 0)} ÷ ${m(cm)} = ${units.toFixed(2)}`] },
    { name: { es: 'Punto de equilibrio en pesos', en: 'Break-even sales' }, expression: 'Ventas = Unidades × Precio', calc: [`${units.toFixed(2)} × ${m(price.n ?? 0)} = ${m(units * (price.n ?? 0))}`] },
  ]
  return (
    <Card className="space-y-3">
      <p className="text-sm text-navy-600 dark:text-navy-300">{tx('Cuánto necesitas vender para no ganar ni perder.', 'How much you must sell to neither win nor lose.')}</p>
      <div className="grid gap-3 sm:grid-cols-3">
        <Field id="be-fixed" label={tx('Costos fijos del mes', 'Monthly fixed costs')} hint={tx('Renta, sueldos, luz…', 'Rent, salaries…')} inputMode="decimal" value={fixed.v} onChange={(e) => fixed.set(e.target.value)} />
        <Field id="be-price" label={tx('Precio por unidad', 'Price per unit')} inputMode="decimal" value={price.v} onChange={(e) => price.set(e.target.value)} />
        <Field id="be-var" label={tx('Costo variable por unidad', 'Variable cost per unit')} inputMode="decimal" value={variable.v} onChange={(e) => variable.set(e.target.value)} />
      </div>
      {ok ? (
        <Result
          items={[
            [tx('Unidades para no perder', 'Break-even units'), Math.ceil(units).toLocaleString('es-MX')],
            [tx('Ventas para no perder', 'Break-even sales'), m(Math.ceil(units) * price.n!)],
            [tx('Ganas por cada unidad extra', 'Earned per extra unit'), m(cm)],
          ]}
        />
      ) : (
        <p className="text-sm text-red-600">{tx('El precio debe ser mayor que el costo variable; si no, nunca recuperas tus costos fijos.', 'Price must exceed variable cost.')}</p>
      )}
      <AppliedFormulas formulas={f} />
      <TopicLinks ids={['COS-09', 'COS-08']} />
    </Card>
  )
}

function Price() {
  const { tx } = useI18n()
  const cost = useNum('80')
  const margin = useNum('35')
  const ok = cost.n !== null && cost.n >= 0 && margin.n !== null && margin.n >= 0 && margin.n < 100
  const net = ok ? cost.n! / (1 - margin.n! / 100) : 0
  const iva = net * 0.16
  const f: AppliedFormula[] = [
    { name: { es: 'Precio sin IVA para ganar el margen deseado', en: 'Price before VAT for the target margin' }, expression: 'Precio = Costo ÷ (1 − Margen)', calc: [`${m(cost.n ?? 0)} ÷ (1 − ${(margin.n ?? 0) / 100}) = ${m(net)}`] },
    { name: { es: 'IVA y precio final', en: 'VAT and final price' }, expression: 'IVA = Precio × 0.16\nPrecio con IVA = Precio + IVA', calc: [`${m(net)} × 0.16 = ${m(iva)}`, `${m(net)} + ${m(iva)} = ${m(net + iva)}`] },
  ]
  return (
    <Card className="space-y-3">
      <p className="text-sm text-navy-600 dark:text-navy-300">{tx('A qué precio vender para ganar el porcentaje que quieres. Ojo: margen sobre el precio no es lo mismo que sumarle el % al costo.', 'Price to earn your target margin. Margin on price is not the same as adding % to cost.')}</p>
      <div className="grid gap-3 sm:grid-cols-2">
        <Field id="pr-cost" label={tx('Costo por unidad', 'Unit cost')} inputMode="decimal" value={cost.v} onChange={(e) => cost.set(e.target.value)} />
        <Field id="pr-margin" label={tx('Margen que quieres ganar', 'Target margin')} suffix="%" inputMode="decimal" value={margin.v} onChange={(e) => margin.set(e.target.value)} />
      </div>
      {ok ? (
        <Result
          items={[
            [tx('Precio sin IVA', 'Price before VAT'), m(net)],
            [tx('IVA 16%', 'VAT 16%'), m(iva)],
            [tx('Precio al público con IVA', 'Price with VAT'), m(net + iva)],
            [tx('Ganancia por unidad', 'Profit per unit'), m(net - cost.n!)],
          ]}
        />
      ) : (
        <p className="text-sm text-red-600">{tx('El margen debe estar entre 0% y 99%.', 'Margin must be between 0% and 99%.')}</p>
      )}
      <AppliedFormulas formulas={f} />
      <TopicLinks ids={['COS-14', 'FIS-06']} />
    </Card>
  )
}
