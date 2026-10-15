import { getAccount } from '../content/accounts'
import type { L } from '../types'
import { buildLedger, type PostedEntry } from './accounting'
import { m } from './cfdi'

/**
 * Financial statements, ratios and the monthly VAT built from journal entries.
 * Grouping follows the catalog codes: 11 current assets, 12 non-current assets,
 * 21 current liabilities, 22 long-term liabilities, 3 equity, 41 revenue,
 * 5 cost of sales, 6 operating expenses, 71 financing result, 8 income taxes.
 */

export interface Row {
  code?: string
  label: L
  amount: number
  kind?: 'item' | 'subtotal' | 'total'
}

export type Tone = 'good' | 'warn' | 'bad' | 'na'

export interface Ratio {
  id: string
  name: L
  expression: string
  calc: string
  value: number | null
  unit: 'x' | '%'
  tone: Tone
  meaning: L
  advice: L
  topic: string
}

const r2 = (n: number) => Math.round(n * 100) / 100
const name = (code: string): L => getAccount(code)?.name ?? { es: code, en: code }

export function buildStatements(entries: PostedEntry[]) {
  const bal = new Map<string, number>()
  for (const t of buildLedger(entries)) bal.set(t.code, t.balance)
  const sum = (prefix: string) => r2([...bal].filter(([c]) => c.startsWith(prefix)).reduce((s, [, v]) => s + v, 0))
  const items = (prefix: string, sign: 1 | -1): Row[] =>
    [...bal]
      .filter(([c, v]) => c.startsWith(prefix) && Math.abs(v) >= 0.005)
      .sort(([a], [b]) => a.localeCompare(b))
      .map(([code, v]) => ({ code, label: name(code), amount: r2(sign * v) }))

  // Income statement
  const grossSales = r2(-((bal.get('4101') ?? 0) + (bal.get('4102') ?? 0)))
  const returns = r2(bal.get('4103') ?? 0)
  const discounts = r2(bal.get('4104') ?? 0)
  const netSales = r2(grossSales - returns - discounts)
  const cost = sum('5')
  const grossProfit = r2(netSales - cost)
  const opex = sum('6')
  const operating = r2(grossProfit - opex)
  const financing = r2(-sum('71'))
  const preTax = r2(operating + financing)
  const tax = sum('8')
  const netIncome = r2(preTax - tax)
  const income: Row[] = [
    { label: { es: 'Ventas e ingresos por servicios', en: 'Sales and service revenue' }, amount: grossSales },
    ...(returns ? [{ code: '4103', label: name('4103'), amount: -returns }] : []),
    ...(discounts ? [{ code: '4104', label: name('4104'), amount: -discounts }] : []),
    { label: { es: 'Ventas netas', en: 'Net sales' }, amount: netSales, kind: 'subtotal' },
    { code: '5101', label: name('5101'), amount: -cost },
    { label: { es: 'Utilidad bruta', en: 'Gross profit' }, amount: grossProfit, kind: 'subtotal' },
    ...items('6', -1),
    { label: { es: 'Utilidad de operación', en: 'Operating income' }, amount: operating, kind: 'subtotal' },
    ...(financing ? [{ label: { es: 'Resultado integral de financiamiento', en: 'Net finance result' }, amount: financing }] : []),
    { label: { es: 'Utilidad antes de impuestos', en: 'Income before taxes' }, amount: preTax, kind: 'subtotal' },
    ...(tax ? [{ code: '8101', label: name('8101'), amount: -tax }] : []),
    { label: { es: 'Utilidad (pérdida) neta', en: 'Net income (loss)' }, amount: netIncome, kind: 'total' },
  ]

  // Balance sheet
  const currentAssets = sum('11')
  const fixedAssets = sum('12')
  const assets = r2(currentAssets + fixedAssets)
  const currentLiab = r2(-sum('21'))
  const longLiab = r2(-sum('22'))
  const liabilities = r2(currentLiab + longLiab)
  const contributed = r2(-sum('3'))
  const equity = r2(contributed + netIncome)
  const balance = {
    assets: [
      ...items('11', 1),
      { label: { es: 'Total activo circulante', en: 'Total current assets' }, amount: currentAssets, kind: 'subtotal' as const },
      ...items('12', 1),
      { label: { es: 'Total activo no circulante', en: 'Total non-current assets' }, amount: fixedAssets, kind: 'subtotal' as const },
      { label: { es: 'Activo total', en: 'Total assets' }, amount: assets, kind: 'total' as const },
    ],
    liabilities: [
      ...items('21', -1),
      { label: { es: 'Total pasivo a corto plazo', en: 'Total current liabilities' }, amount: currentLiab, kind: 'subtotal' as const },
      ...items('22', -1),
      { label: { es: 'Pasivo total', en: 'Total liabilities' }, amount: liabilities, kind: 'total' as const },
    ],
    equity: [
      ...items('3', -1),
      { label: { es: 'Utilidad (pérdida) del periodo', en: 'Profit (loss) for the period' }, amount: netIncome },
      { label: { es: 'Capital contable total', en: 'Total equity' }, amount: equity, kind: 'total' as const },
    ],
    holds: Math.abs(assets - liabilities - equity) < 0.01,
  }

  // VAT for the month
  const ivaCharged = r2(-(bal.get('2104') ?? 0))
  const ivaCredit = r2(bal.get('1109') ?? 0)
  const iva = {
    charged: ivaCharged,
    credit: ivaCredit,
    result: r2(ivaCharged - ivaCredit),
    pendingCharged: r2(-(bal.get('2110') ?? 0)),
    pendingCredit: r2(bal.get('1112') ?? 0),
    withheldIsr: r2(-(bal.get('2111') ?? 0)),
    withheldIva: r2(-(bal.get('2112') ?? 0)),
  }

  const inventory = r2(bal.get('1108') ?? 0)
  const ratios = buildRatios({ currentAssets, currentLiab, inventory, liabilities, assets, equity, netSales, grossProfit, netIncome })
  return { income, balance, ratios, iva, totals: { assets, liabilities, equity, netSales, netIncome, currentAssets, currentLiab }, empty: bal.size === 0 }
}

export type Statements = ReturnType<typeof buildStatements>

function grade(v: number | null, good: number, warn: number, higherIsBetter = true): Tone {
  if (v === null || !Number.isFinite(v)) return 'na'
  if (higherIsBetter) return v >= good ? 'good' : v >= warn ? 'warn' : 'bad'
  return v <= good ? 'good' : v <= warn ? 'warn' : 'bad'
}

const div = (a: number, b: number) => (Math.abs(b) < 0.005 ? null : a / b)
const fx = (v: number | null) => (v === null ? '—' : v.toFixed(2))
const fp = (v: number | null) => (v === null ? '—' : `${(v * 100).toFixed(1)}%`)

function buildRatios(x: { currentAssets: number; currentLiab: number; inventory: number; liabilities: number; assets: number; equity: number; netSales: number; grossProfit: number; netIncome: number }): Ratio[] {
  const liquidity = div(x.currentAssets, x.currentLiab)
  const acid = div(x.currentAssets - x.inventory, x.currentLiab)
  const debt = div(x.liabilities, x.assets)
  const gm = div(x.grossProfit, x.netSales)
  const nm = div(x.netIncome, x.netSales)
  const roa = div(x.netIncome, x.assets)
  const roe = x.equity > 0 ? div(x.netIncome, x.equity) : null
  const tones = {
    liquidity: grade(liquidity, 1.5, 1),
    acid: grade(acid, 1, 0.7),
    debt: grade(debt, 0.5, 0.7, false),
    gm: grade(gm, 0.3, 0.15),
    nm: grade(nm, 0.1, 0),
    roa: grade(roa, 0.05, 0),
    roe: grade(roe, 0.1, 0),
  }
  const pick = (t: Tone, good: L, warn: L, bad: L): L => (t === 'good' ? good : t === 'warn' ? warn : t === 'bad' ? bad : { es: 'No aplica todavía: falta información para calcularla.', en: 'Not available yet: missing data to compute it.' })
  return [
    {
      id: 'liquidity',
      name: { es: 'Liquidez (razón circulante)', en: 'Current ratio' },
      expression: 'Liquidez = Activo circulante ÷ Pasivo a corto plazo',
      calc: `${m(x.currentAssets)} ÷ ${m(x.currentLiab)} = ${fx(liquidity)}`,
      value: liquidity,
      unit: 'x',
      tone: tones.liquidity,
      meaning: pick(
        tones.liquidity,
        { es: `Por cada peso que debes a corto plazo tienes ${fx(liquidity)} pesos para pagarlo. Vas bien.`, en: `For each peso owed short-term you have ${fx(liquidity)} to pay it. Healthy.` },
        { es: `Tienes ${fx(liquidity)} pesos por cada peso que debes: alcanza, pero justo.`, en: `You have ${fx(liquidity)} per peso owed: enough, but tight.` },
        { es: `Solo tienes ${fx(liquidity)} pesos por cada peso que debes a corto plazo: no te alcanza para pagar todo.`, en: `Only ${fx(liquidity)} per peso owed: not enough to pay everything.` },
      ),
      advice: { es: 'Para mejorarla: cobra más rápido a tus clientes, no compres inventario de más y negocia plazos más largos con tus proveedores.', en: 'To improve: collect faster, avoid excess inventory, negotiate longer supplier terms.' },
      topic: 'FIN-05',
    },
    {
      id: 'acid',
      name: { es: 'Prueba ácida', en: 'Quick ratio' },
      expression: 'Prueba ácida = (Activo circulante − Inventarios) ÷ Pasivo a corto plazo',
      calc: `(${m(x.currentAssets)} − ${m(x.inventory)}) ÷ ${m(x.currentLiab)} = ${fx(acid)}`,
      value: acid,
      unit: 'x',
      tone: tones.acid,
      meaning: pick(
        tones.acid,
        { es: 'Aun sin vender tu inventario podrías pagar tus deudas de corto plazo.', en: 'Even without selling inventory you could pay short-term debts.' },
        { es: 'Sin vender inventario pagarías casi todo lo que debes a corto plazo.', en: 'Without selling inventory you could pay almost all short-term debts.' },
        { es: 'Dependes de vender tu inventario para poder pagar lo que debes.', en: 'You depend on selling inventory to pay your debts.' },
      ),
      advice: { es: 'Es como la liquidez, pero sin contar la mercancía, porque venderla toma tiempo.', en: 'Like the current ratio but excluding inventory, which takes time to sell.' },
      topic: 'FIN-05',
    },
    {
      id: 'debt',
      name: { es: 'Endeudamiento', en: 'Debt ratio' },
      expression: 'Endeudamiento = Pasivo total ÷ Activo total',
      calc: `${m(x.liabilities)} ÷ ${m(x.assets)} = ${fp(debt)}`,
      value: debt,
      unit: '%',
      tone: tones.debt,
      meaning: pick(
        tones.debt,
        { es: `El ${fp(debt)} de lo que tiene tu negocio está financiado con deudas. Lo demás es tuyo.`, en: `${fp(debt)} of your assets are financed with debt.` },
        { es: `El ${fp(debt)} de tus bienes se pagó con deuda: cuidado, dependes bastante de terceros.`, en: `${fp(debt)} financed with debt: rather high.` },
        { es: `El ${fp(debt)} de tus bienes es deuda: el negocio es más de tus acreedores que tuyo.`, en: `${fp(debt)} is debt: creditors own more of the business than you do.` },
      ),
      advice: { es: 'Para bajarla: paga deudas con tus utilidades o aporta más capital propio.', en: 'To lower it: repay debt from profits or add owner capital.' },
      topic: 'FIN-05',
    },
    {
      id: 'gross-margin',
      name: { es: 'Margen bruto', en: 'Gross margin' },
      expression: 'Margen bruto = Utilidad bruta ÷ Ventas netas × 100',
      calc: `${m(x.grossProfit)} ÷ ${m(x.netSales)} × 100 = ${fp(gm)}`,
      value: gm,
      unit: '%',
      tone: tones.gm,
      meaning: pick(
        tones.gm,
        { es: `De cada $100 que vendes te quedan ${fp(gm).replace('%', '')} pesos después de pagar la mercancía.`, en: `Of every $100 sold, ${fp(gm).replace('%', '')} remain after the cost of goods.` },
        { es: `Te quedan ${fp(gm).replace('%', '')} de cada $100 vendidos tras el costo: margen ajustado.`, en: 'Thin margin after cost of goods.' },
        { es: 'Casi todo lo que vendes se va en pagar la mercancía: tu precio es bajo o tu costo alto.', en: 'Almost all sales go to cost: price too low or cost too high.' },
      ),
      advice: { es: 'Para mejorarlo: revisa tus precios o consigue proveedores más baratos.', en: 'To improve: review prices or find cheaper suppliers.' },
      topic: 'FIN-05',
    },
    {
      id: 'net-margin',
      name: { es: 'Margen neto', en: 'Net margin' },
      expression: 'Margen neto = Utilidad neta ÷ Ventas netas × 100',
      calc: `${m(x.netIncome)} ÷ ${m(x.netSales)} × 100 = ${fp(nm)}`,
      value: nm,
      unit: '%',
      tone: tones.nm,
      meaning: pick(
        tones.nm,
        { es: `Ganas ${fp(nm).replace('%', '')} pesos limpios de cada $100 que vendes.`, en: `You earn ${fp(nm).replace('%', '')} net per $100 sold.` },
        { es: `Ganas poco: ${fp(nm).replace('%', '')} pesos de cada $100 vendidos.`, en: 'Small profit per $100 sold.' },
        { es: 'Estás perdiendo dinero: tus gastos y costos son mayores que tus ventas.', en: 'You are losing money: costs exceed sales.' },
      ),
      advice: { es: 'Para mejorarlo: vende más con los mismos gastos o recorta gastos que no te ayudan a vender.', en: 'To improve: sell more with the same expenses or cut expenses that do not drive sales.' },
      topic: 'FIN-05',
    },
    {
      id: 'roa',
      name: { es: 'Rendimiento sobre activos (ROA)', en: 'Return on assets (ROA)' },
      expression: 'ROA = Utilidad neta ÷ Activo total × 100',
      calc: `${m(x.netIncome)} ÷ ${m(x.assets)} × 100 = ${fp(roa)}`,
      value: roa,
      unit: '%',
      tone: tones.roa,
      meaning: pick(
        tones.roa,
        { es: `Tus bienes generan ${fp(roa)} de ganancia en el periodo. Los estás aprovechando bien.`, en: `Your assets earned ${fp(roa)} this period.` },
        { es: `Tus bienes generan poca ganancia (${fp(roa)}).`, en: `Low return on assets (${fp(roa)}).` },
        { es: 'Tus bienes no están generando ganancia en este periodo.', en: 'Your assets are not generating profit this period.' },
      ),
      advice: { es: 'Mide qué tanto le sacas provecho a todo lo que tiene tu negocio (dinero, mercancía, equipo).', en: 'Shows how well you use everything the business owns.' },
      topic: 'FIN-05',
    },
    {
      id: 'roe',
      name: { es: 'Rendimiento sobre capital (ROE)', en: 'Return on equity (ROE)' },
      expression: 'ROE = Utilidad neta ÷ Capital contable × 100',
      calc: `${m(x.netIncome)} ÷ ${m(x.equity)} × 100 = ${fp(roe)}`,
      value: roe,
      unit: '%',
      tone: tones.roe,
      meaning: pick(
        tones.roe,
        { es: `Por cada $100 que tú (los dueños) pusiste, el negocio ganó ${fp(roe).replace('%', '')} pesos.`, en: `For each $100 the owners invested, the business earned ${fp(roe).replace('%', '')}.` },
        { es: `Tu dinero invertido está rindiendo poco (${fp(roe)}).`, en: `Low return on owners' money (${fp(roe)}).` },
        { es: 'Tu dinero invertido no está rindiendo en este periodo.', en: "Owners' money is not earning this period." },
      ),
      advice: { es: 'Compáralo con lo que ganarías en una inversión segura (por ejemplo, CETES): si es menor, tu negocio rinde menos que eso.', en: 'Compare with a safe investment (e.g. CETES): if lower, the business earns less than that.' },
      topic: 'FIN-04',
    },
  ]
}
