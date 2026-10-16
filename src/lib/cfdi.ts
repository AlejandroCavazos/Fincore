import type { JournalLine, L } from '../types'

/**
 * Practice CFDI generator for the accounting lab. Every document is fictitious
 * (fictitious RFCs, names and UUIDs) and is shown with a "sin validez fiscal"
 * watermark. Rates are teaching examples: IVA 16% / 0%, ISR withheld on fees and
 * rent 10%, IVA withheld two thirds of the IVA. Payroll ISR and IMSS are example
 * amounts, not the official tables.
 */

export type LabLevel = 'basico' | 'intermedio' | 'avanzado'
export const LAB_LEVELS: LabLevel[] = ['basico', 'intermedio', 'avanzado']
export const LEVEL_NAME: Record<LabLevel, L> = {
  basico: { es: 'Básico', en: 'Basic' },
  intermedio: { es: 'Intermedio', en: 'Intermediate' },
  avanzado: { es: 'Avanzado', en: 'Advanced' },
}
export const LEVEL_DESC: Record<LabLevel, L> = {
  basico: { es: 'Ventas, compras y gastos de contado.', en: 'Cash sales, purchases and expenses.' },
  intermedio: {
    es: 'Ventas y compras a crédito, complementos de pago, notas de crédito, nómina y retenciones.',
    en: 'Credit sales and purchases, payment receipts, credit notes, payroll and withholdings.',
  },
  avanzado: {
    es: 'Facturas grandes con varios conceptos, IVA 16% y 0%, descuentos, pagos en parcialidades y nómina de varios empleados.',
    en: 'Large invoices with several items, 16% and 0% VAT, discounts, partial payments and multi-employee payroll.',
  },
}

/** Póliza type: Ingreso (money comes in), Egreso (money goes out), Diario (no money moves). */
export type PolicyType = 'I' | 'E' | 'D'
export const POLICY_NAME: Record<PolicyType, L> = {
  I: { es: 'Ingreso', en: 'Receipt' },
  E: { es: 'Egreso', en: 'Payment' },
  D: { es: 'Diario', en: 'Journal' },
}

export interface Party {
  rfc: string
  name: string
  regime: string
}

export interface Concept {
  qty: number
  unit: string
  desc: string
  price: number
  amount: number
  discount: number
  /** iva16 = 16% rate, iva0 = 0% rate. */
  tax: 'iva16' | 'iva0'
}

export interface PayrollData {
  employee: string
  position: string
  days: number
  perceptions: { desc: string; amount: number }[]
  deductions: { desc: string; amount: number }[]
  net: number
}

export interface PaymentData {
  serie: string
  folio: number
  uuid: string
  invoiceTotal: number
  previous: number
  paid: number
  remaining: number
  part: number
}

export interface Cfdi {
  type: 'I' | 'E' | 'P' | 'N'
  direction: 'emitido' | 'recibido'
  serie: string
  folio: number
  date: string
  uuid: string
  issuer: Party
  receiver: Party
  use: string
  method?: 'PUE' | 'PPD'
  form?: string
  concepts: Concept[]
  subtotal: number
  discount: number
  iva: number
  retIsr: number
  retIva: number
  total: number
  related?: { uuid: string; serie: string; folio: number; relation: string }
  payment?: PaymentData
  payroll?: PayrollData
}

/** A formula applied with this document's numbers. */
export interface AppliedFormula {
  name: L
  expression: string
  calc: string[]
}

export interface PracticeDoc {
  id: string
  level: LabLevel
  title: L
  /** What happened, in plain words. */
  story: L
  /** Facts not printed on the CFDI (e.g. the cost of the goods sold). */
  extra?: L
  cfdis: Cfdi[]
  policy: PolicyType
  expected: JournalLine[]
  hint: L
  formulas: AppliedFormula[]
  /** Lessons that explain this operation. */
  topics: string[]
}

// ───────────────────────── Random helpers ─────────────────────────

export type Rng = () => number

/** Small deterministic PRNG (mulberry32) so a seed always rebuilds the same documents. */
export function rngFrom(seed: number): Rng {
  let a = seed >>> 0
  return () => {
    a = (a + 0x6d2b79f5) >>> 0
    let t = a
    t = Math.imul(t ^ (t >>> 15), t | 1)
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61)
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

export const newSeed = () => Math.floor(Math.random() * 2 ** 31)

const int = (r: Rng, min: number, max: number) => min + Math.floor(r() * (max - min + 1))
const pick = <T>(r: Rng, xs: readonly T[]): T => xs[Math.floor(r() * xs.length)]
const r2 = (n: number) => Math.round(n * 100) / 100
const step = (r: Rng, min: number, max: number, by: number) => int(r, Math.ceil(min / by), Math.floor(max / by)) * by
const hex = (r: Rng, n: number) => Array.from({ length: n }, () => '0123456789ABCDEF'[int(r, 0, 15)]).join('')
const uuid = (r: Rng) => `${hex(r, 8)}-${hex(r, 4)}-4${hex(r, 3)}-A${hex(r, 3)}-${hex(r, 12)}`

/** Money formatted the same in both languages: $12,345.60 */
export const m = (n: number) => `$${r2(n).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
const pct = (n: number) => `${r2(n * 100)}%`

// ───────────────────────── Fictitious parties ─────────────────────────

export const COMPANY: Party = { rfc: 'TNP200115AB1', name: 'TU NEGOCIO DE PRACTICA', regime: '601 General de Ley Personas Morales' }
const PM = '601 General de Ley Personas Morales'
const CUSTOMERS: Party[] = [
  { rfc: 'COM190312KL4', name: 'COMERCIAL LAS PALMAS', regime: PM },
  { rfc: 'SIE170825QW2', name: 'SERVICIOS INDUSTRIALES DEL ESTE', regime: PM },
  { rfc: 'RES210604HT9', name: 'RESTAURANTE EL PORTAL', regime: PM },
  { rfc: 'ESC160120MX3', name: 'ESCUELA NUEVO HORIZONTE', regime: PM },
]
const PUBLIC: Party = { rfc: 'XAXX010101000', name: 'PUBLICO EN GENERAL', regime: '616 Sin obligaciones fiscales' }
const SUPPLIER_GOODS: Party[] = [
  { rfc: 'DME150910RT6', name: 'DISTRIBUIDORA MAYORISTA DEL CENTRO', regime: PM },
  { rfc: 'ABA180215QP8', name: 'ABASTECEDORA DEL BAJIO', regime: PM },
]
const SUPPLIERS = {
  power: { rfc: 'ENE160222PL1', name: 'ENERGIA Y SERVICIOS DEL NORTE', regime: PM },
  phone: { rfc: 'TEL140507MN8', name: 'TELECOMUNICACIONES AGUILA', regime: PM },
  ads: { rfc: 'PUB180130ZX5', name: 'PUBLICIDAD CREATIVA', regime: PM },
  tech: { rfc: 'TEC170418CV2', name: 'TECNOLOGIA Y COMPUTO', regime: PM },
  furniture: { rfc: 'MOB120909BB7', name: 'MUEBLES PARA OFICINA', regime: PM },
  freight: { rfc: 'TRA200303FL9', name: 'TRANSPORTES RAPIDOS', regime: PM },
  rentPm: { rfc: 'INM110707RE3', name: 'INMOBILIARIA CENTRO', regime: PM },
} satisfies Record<string, Party>
const ACCOUNTANT: Party = { rfc: 'ROPJ800512AB1', name: 'JORGE RODRIGUEZ PEREZ', regime: '612 Personas Físicas con Actividades Empresariales y Profesionales' }
const LANDLORD: Party = { rfc: 'MEHA750930CD2', name: 'ANA MENDEZ HERNANDEZ', regime: '606 Arrendamiento' }
const EMPLOYEES = [
  ['LUIS TORRES RAMIREZ', 'Vendedor'],
  ['SOFIA CRUZ MORALES', 'Auxiliar contable'],
  ['DIEGO VARGAS SOTO', 'Almacenista'],
  ['PAOLA JIMENEZ RUIZ', 'Cajera'],
  ['MIGUEL REYES FLORES', 'Repartidor'],
] as const

interface Product {
  desc: string
  unit: string
  price: number
  cost: number
  tax: 'iva16' | 'iva0'
}
const PRODUCTS: Product[] = [
  { desc: 'Silla ergonómica', unit: 'H87 Pieza', price: 2400, cost: 1500, tax: 'iva16' },
  { desc: 'Escritorio de melamina', unit: 'H87 Pieza', price: 3800, cost: 2500, tax: 'iva16' },
  { desc: 'Impresora láser', unit: 'H87 Pieza', price: 4500, cost: 3100, tax: 'iva16' },
  { desc: 'Caja de hojas carta (5,000)', unit: 'XBX Caja', price: 950, cost: 600, tax: 'iva16' },
  { desc: 'Café en grano 1 kg', unit: 'KGM Kilogramo', price: 380, cost: 220, tax: 'iva0' },
  { desc: 'Libro "Contabilidad básica"', unit: 'H87 Pieza', price: 450, cost: 280, tax: 'iva0' },
]
const SERVICES = [
  { desc: 'Servicio de instalación de equipo', min: 1500, max: 6000 },
  { desc: 'Mantenimiento de equipo de oficina', min: 1200, max: 5000 },
  { desc: 'Asesoría en uso de software', min: 2000, max: 9000 },
]

// ───────────────────────── Building blocks ─────────────────────────

class Ctx {
  folio = { A: 0, NC: 0, P: 0, N: 0 }
  r: Rng
  month: string
  constructor(r: Rng, month: string) {
    this.r = r
    this.month = month
    this.folio = { A: int(r, 100, 900), NC: int(r, 10, 90), P: int(r, 10, 90), N: int(r, 10, 90) }
  }
  day(min = 1, max = 28) {
    return `${this.month}-${String(int(this.r, min, max)).padStart(2, '0')}`
  }
}

export function concept(qty: number, unit: string, desc: string, price: number, tax: Concept['tax'], discount = 0): Concept {
  return { qty, unit, desc, price, amount: r2(qty * price), discount: r2(discount), tax }
}

export function totals(concepts: Concept[], ret: { isr?: number; iva?: number } = {}) {
  const subtotal = r2(concepts.reduce((s, c) => s + c.amount, 0))
  const discount = r2(concepts.reduce((s, c) => s + c.discount, 0))
  const base16 = r2(concepts.filter((c) => c.tax === 'iva16').reduce((s, c) => s + c.amount - c.discount, 0))
  const iva = r2(base16 * 0.16)
  const retIsr = ret.isr ? r2((subtotal - discount) * ret.isr) : 0
  const retIva = ret.iva ? r2(iva * ret.iva) : 0
  return { subtotal, discount, base16, iva, retIsr, retIva, total: r2(subtotal - discount + iva - retIsr - retIva) }
}

class Lines {
  map = new Map<string, number>()
  add(code: string, side: 'D' | 'C', amount: number) {
    if (amount <= 0) return this
    const k = `${code}|${side}`
    this.map.set(k, r2((this.map.get(k) ?? 0) + amount))
    return this
  }
  get(): JournalLine[] {
    const out = [...this.map].map(([k, amount]) => {
      const [accountCode, side] = k.split('|') as [string, 'D' | 'C']
      return { accountCode, side, amount }
    })
    return [...out.filter((l) => l.side === 'D'), ...out.filter((l) => l.side === 'C')]
  }
}

const FORM = { cash: '01 Efectivo', transfer: '03 Transferencia electrónica de fondos', card: '04 Tarjeta de crédito', tbd: '99 Por definir' }
const USE = { goods: 'G01 Adquisición de mercancías', expense: 'G03 Gastos en general', equipment: 'I02 Mobiliario y equipo de oficina por inversiones', computer: 'I04 Equipo de cómputo y accesorios', returns: 'G02 Devoluciones, descuentos o bonificaciones', payment: 'CP01 Pagos', payroll: 'CN01 Nómina', none: 'S01 Sin efectos fiscales' }

export function invoiceFormulas(concepts: Concept[], t: ReturnType<typeof totals>, opts: { ret?: boolean } = {}): AppliedFormula[] {
  const f: AppliedFormula[] = [
    {
      name: { es: 'Importe de cada concepto', en: 'Amount of each line item' },
      expression: 'Importe = Cantidad × Valor unitario',
      calc: concepts.map((c) => `${c.desc}: ${c.qty} × ${m(c.price)} = ${m(c.amount)}`),
    },
    {
      name: { es: 'Subtotal', en: 'Subtotal' },
      expression: 'Subtotal = suma de los importes',
      calc: [`${concepts.map((c) => m(c.amount)).join(' + ')} = ${m(t.subtotal)}`],
    },
  ]
  if (t.discount > 0) f.push({ name: { es: 'Descuento', en: 'Discount' }, expression: 'Descuento = Importe × % de descuento', calc: concepts.filter((c) => c.discount > 0).map((c) => `${c.desc}: ${m(c.amount)} × ${pct(c.discount / c.amount)} = ${m(c.discount)}`) })
  const zero = concepts.some((c) => c.tax === 'iva0')
  f.push({
    name: { es: 'IVA trasladado (16%)', en: 'VAT charged (16%)' },
    expression: zero ? 'IVA = (importes con tasa 16% − sus descuentos) × 0.16\nLos conceptos con tasa 0% no generan IVA.' : t.discount > 0 ? 'IVA = (Subtotal − Descuento) × 0.16' : 'IVA = Subtotal × 0.16',
    calc: [`${m(t.base16)} × 0.16 = ${m(t.iva)}`],
  })
  if (opts.ret && t.retIsr > 0)
    f.push({
      name: { es: 'Retenciones', en: 'Withholdings' },
      expression: 'ISR retenido = Subtotal × 10%\nIVA retenido = IVA × 2/3',
      calc: [`ISR: ${m(t.subtotal)} × 0.10 = ${m(t.retIsr)}`, `IVA: ${m(t.iva)} × 2 ÷ 3 = ${m(t.retIva)}`],
    })
  f.push({
    name: { es: 'Total de la factura', en: 'Invoice total' },
    expression: opts.ret && t.retIsr > 0 ? 'Total = Subtotal − Descuento + IVA − ISR retenido − IVA retenido' : 'Total = Subtotal − Descuento + IVA',
    calc: [
      opts.ret && t.retIsr > 0
        ? `${m(t.subtotal)} + ${m(t.iva)} − ${m(t.retIsr)} − ${m(t.retIva)} = ${m(t.total)}`
        : `${m(t.subtotal)}${t.discount ? ` − ${m(t.discount)}` : ''} + ${m(t.iva)} = ${m(t.total)}`,
    ],
  })
  return f
}

export function costFormula(items: { desc: string; qty: number; cost: number }[]): AppliedFormula {
  const total = r2(items.reduce((s, i) => s + i.qty * i.cost, 0))
  return {
    name: { es: 'Costo de ventas', en: 'Cost of goods sold' },
    expression: 'Costo de ventas = Cantidad vendida × Costo unitario',
    calc: [...items.map((i) => `${i.desc}: ${i.qty} × ${m(i.cost)} = ${m(i.qty * i.cost)}`), ...(items.length > 1 ? [`Total: ${m(total)}`] : [])],
  }
}

function invoice(c: Ctx, o: { direction: Cfdi['direction']; serie?: string; issuer: Party; receiver: Party; use: string; method: 'PUE' | 'PPD'; form: string; concepts: Concept[]; ret?: { isr?: number; iva?: number }; date?: string }): Cfdi {
  const t = totals(o.concepts, o.ret)
  const serie = o.serie ?? (o.direction === 'emitido' ? 'A' : pick(c.r, ['F', 'FA', 'B']))
  return {
    type: 'I',
    direction: o.direction,
    serie,
    folio: o.direction === 'emitido' ? ++c.folio.A : int(c.r, 1000, 99999),
    date: o.date ?? c.day(),
    uuid: uuid(c.r),
    issuer: o.issuer,
    receiver: o.receiver,
    use: o.use,
    method: o.method,
    form: o.method === 'PPD' ? FORM.tbd : o.form,
    concepts: o.concepts,
    subtotal: t.subtotal,
    discount: t.discount,
    iva: t.iva,
    retIsr: t.retIsr,
    retIva: t.retIva,
    total: t.total,
  }
}

const cashAccount = (form: string) => (form === FORM.cash ? '1101' : '1102')
const cashName = (form: string): L => (form === FORM.cash ? { es: 'Caja', en: 'Cash' } : { es: 'Bancos', en: 'Bank' })

// ───────────────────────── Generators ─────────────────────────

type Gen = (c: Ctx) => PracticeDoc

function doc(_c: Ctx, level: LabLevel, d: Omit<PracticeDoc, 'id' | 'level'>): PracticeDoc {
  return { id: d.cfdis[0].uuid.slice(0, 8), level, ...d }
}

const saleServiceCash: Gen = (c) => {
  const s = pick(c.r, SERVICES)
  const form = pick(c.r, [FORM.cash, FORM.transfer, FORM.card])
  const customer = c.r() < 0.4 ? PUBLIC : pick(c.r, CUSTOMERS)
  const cf = invoice(c, { direction: 'emitido', issuer: COMPANY, receiver: customer, use: customer === PUBLIC ? USE.none : USE.expense, method: 'PUE', form, concepts: [concept(1, 'E48 Servicio', s.desc, step(c.r, s.min, s.max, 500), 'iva16')] })
  const acc = cashAccount(form)
  return doc(c, 'basico', {
    title: { es: 'Factura de venta de contado', en: 'Cash sales invoice' },
    story: { es: `Prestaste un servicio y te pagaron en el momento (${form.slice(3).toLowerCase()}). Tú emitiste esta factura.`, en: `You provided a service and were paid on the spot. You issued this invoice.` },
    cfdis: [cf],
    policy: 'I',
    expected: new Lines().add(acc, 'D', cf.total).add('4102', 'C', cf.subtotal).add('2104', 'C', cf.iva).get(),
    hint: { es: `Método PUE = ya te pagaron. Entra dinero a ${cashName(form).es}; el ingreso es por servicios y el IVA que cobraste se lo debes al SAT.`, en: `PUE = already paid. Money comes into ${cashName(form).en}; record service revenue and the VAT you owe.` },
    formulas: invoiceFormulas(cf.concepts, totals(cf.concepts)),
    topics: ['L1-16', 'L1-09', 'FIS-06'],
  })
}

function goodsPurchase(c: Ctx, level: LabLevel, method: 'PUE' | 'PPD'): PracticeDoc {
  const supplier = pick(c.r, SUPPLIER_GOODS)
  const n = level === 'avanzado' ? 3 : 1
  const pool = level === 'basico' ? PRODUCTS.filter((p) => p.tax === 'iva16') : PRODUCTS
  const prods = [...pool].sort(() => c.r() - 0.5).slice(0, n)
  const concepts = prods.map((p) => concept(level === 'basico' ? step(c.r, 5, 20, 5) : int(c.r, 5, 40), p.unit, p.desc, p.cost, p.tax))
  const form = pick(c.r, [FORM.transfer, FORM.transfer, FORM.cash])
  const cf = invoice(c, { direction: 'recibido', issuer: supplier, receiver: COMPANY, use: USE.goods, method, form, concepts })
  const lines = new Lines().add('1108', 'D', cf.subtotal)
  if (method === 'PUE') lines.add('1109', 'D', cf.iva).add(cashAccount(form), 'C', cf.total)
  else lines.add('1112', 'D', cf.iva).add('2101', 'C', cf.total)
  return doc(c, level, {
    title: method === 'PUE' ? { es: 'Compra de mercancía de contado', en: 'Cash purchase of goods' } : { es: 'Compra de mercancía a crédito', en: 'Credit purchase of goods' },
    story:
      method === 'PUE'
        ? { es: 'Compraste mercancía para revender y la pagaste en el momento. Tu proveedor te mandó esta factura.', en: 'You bought goods for resale and paid immediately. Your supplier sent this invoice.' }
        : { es: 'Compraste mercancía para revender; la pagarás después. Tu proveedor te mandó esta factura.', en: 'You bought goods for resale; you will pay later. Your supplier sent this invoice.' },
    cfdis: [cf],
    policy: method === 'PUE' ? 'E' : 'D',
    expected: lines.get(),
    hint:
      method === 'PUE'
        ? { es: 'Entra mercancía a tu almacén (Inventarios) y sale dinero. El IVA que pagaste lo podrás restar: es IVA acreditable.', en: 'Goods come into Inventory and money goes out. The VAT you paid is creditable.' }
        : { es: 'PPD = todavía no pagas. Le debes al proveedor, y el IVA aún no lo puedes acreditar porque no lo has pagado: va a IVA pendiente de acreditar.', en: 'PPD = not paid yet. You owe the supplier, and the VAT is not creditable until paid.' },
    formulas: invoiceFormulas(cf.concepts, totals(cf.concepts)),
    topics: level === 'basico' ? ['L1-16', 'L1-09'] : ['L1-09', 'FIS-06'],
  })
}

const expenseCash: Gen = (c) => {
  const kind = pick(c.r, ['power', 'phone', 'ads', 'rentPm'] as const)
  const info = {
    power: { desc: 'Suministro de energía eléctrica', code: '6103', min: 1200, max: 6500 },
    phone: { desc: 'Servicio de internet y telefonía', code: '6103', min: 600, max: 2500 },
    ads: { desc: 'Campaña de publicidad en redes sociales', code: '6104', min: 2000, max: 12000 },
    rentPm: { desc: 'Renta de local comercial', code: '6102', min: 8000, max: 25000 },
  }[kind]
  const form = FORM.transfer
  const cf = invoice(c, { direction: 'recibido', issuer: SUPPLIERS[kind], receiver: COMPANY, use: USE.expense, method: 'PUE', form, concepts: [concept(1, 'E48 Servicio', info.desc, step(c.r, info.min, info.max, 100), 'iva16')] })
  return doc(c, 'basico', {
    title: { es: 'Factura de un gasto pagado', en: 'Paid expense invoice' },
    story: { es: 'Pagaste por transferencia un gasto del negocio y te llegó esta factura.', en: 'You paid a business expense by transfer and received this invoice.' },
    cfdis: [cf],
    policy: 'E',
    expected: new Lines().add(info.code, 'D', cf.subtotal).add('1109', 'D', cf.iva).add('1102', 'C', cf.total).get(),
    hint: { es: 'Es un gasto (se consume, no es un bien que dure). Sale dinero del banco y el IVA pagado es acreditable.', en: 'It is an expense. Money leaves the bank and the VAT paid is creditable.' },
    formulas: invoiceFormulas(cf.concepts, totals(cf.concepts)),
    topics: ['L1-16', 'L1-05', 'FIS-06'],
  })
}

const equipmentPurchase: Gen = (c) => {
  const comp = c.r() < 0.5
  const items = comp
    ? [concept(1, 'H87 Pieza', 'Computadora portátil', step(c.r, 12000, 22000, 1000), 'iva16')]
    : [concept(int(c.r, 1, 3), 'H87 Pieza', 'Escritorio ejecutivo', step(c.r, 3000, 7000, 500), 'iva16')]
  const cf = invoice(c, { direction: 'recibido', issuer: comp ? SUPPLIERS.tech : SUPPLIERS.furniture, receiver: COMPANY, use: comp ? USE.computer : USE.equipment, method: 'PUE', form: FORM.transfer, concepts: items })
  const code = comp ? '1205' : '1203'
  return doc(c, 'basico', {
    title: { es: 'Compra de equipo para el negocio', en: 'Equipment purchase' },
    story: { es: 'Compraste equipo para usarlo en tu negocio (no para venderlo) y lo pagaste por transferencia.', en: 'You bought equipment to use in the business (not to resell) and paid by transfer.' },
    cfdis: [cf],
    policy: 'E',
    expected: new Lines().add(code, 'D', cf.subtotal).add('1109', 'D', cf.iva).add('1102', 'C', cf.total).get(),
    hint: { es: 'No es mercancía ni gasto: es un activo que usarás varios años (activo fijo). Por eso no va a Inventarios.', en: 'Not inventory, not an expense: it is a fixed asset you will use for years.' },
    formulas: invoiceFormulas(cf.concepts, totals(cf.concepts)),
    topics: ['L1-16', 'L1-04', 'CON-08'],
  })
}

function goodsSale(c: Ctx, level: LabLevel, method: 'PUE' | 'PPD'): { doc: PracticeDoc; invoice: Cfdi } {
  const big = level === 'avanzado'
  const prods = [...PRODUCTS].sort(() => c.r() - 0.5).slice(0, big ? 3 : 1)
  if (big && !prods.some((p) => p.tax === 'iva0')) prods[2] = PRODUCTS.find((p) => p.tax === 'iva0')!
  const disc = big && c.r() < 0.7 ? pick(c.r, [0.05, 0.1]) : 0
  const items = prods.map((p) => ({ p, qty: int(c.r, big ? 3 : 1, big ? 15 : 6) }))
  const concepts = items.map(({ p, qty }, i) => concept(qty, p.unit, p.desc, p.price, p.tax, i === 0 && disc ? qty * p.price * disc : 0))
  const customer = pick(c.r, CUSTOMERS)
  const form = pick(c.r, [FORM.transfer, FORM.card])
  const cf = invoice(c, { direction: 'emitido', issuer: COMPANY, receiver: customer, use: USE.goods, method, form, concepts })
  const cost = r2(items.reduce((s, i) => s + i.qty * i.p.cost, 0))
  const lines = new Lines()
  // Sales are recorded at gross amount with the discount in its own account.
  if (method === 'PUE') lines.add(cashAccount(form), 'D', cf.total).add('2104', 'C', cf.iva)
  else lines.add('1104', 'D', cf.total).add('2110', 'C', cf.iva)
  lines.add('4104', 'D', cf.discount).add('4101', 'C', cf.subtotal).add('5101', 'D', cost).add('1108', 'C', cost)
  return {
    invoice: cf,
    doc: doc(c, level, {
      title: method === 'PUE' ? { es: 'Factura de venta de mercancía de contado', en: 'Cash sale of goods' } : { es: 'Factura de venta de mercancía a crédito', en: 'Credit sale of goods' },
      story:
        method === 'PUE'
          ? { es: 'Vendiste mercancía y te pagaron en el momento. Tú emitiste esta factura.', en: 'You sold goods and were paid immediately. You issued this invoice.' }
          : { es: 'Vendiste mercancía a crédito: tu cliente te pagará después. Tú emitiste esta factura.', en: 'You sold goods on credit: the customer will pay later. You issued this invoice.' },
      extra: { es: `Dato de tu almacén: la mercancía vendida te costó ${m(cost)}. Registra también la salida del almacén (costo de ventas).`, en: `From your warehouse: the goods sold cost you ${m(cost)}. Also record the cost of goods sold.` },
      cfdis: [cf],
      policy: method === 'PUE' ? 'I' : 'D',
      expected: lines.get(),
      hint:
        method === 'PUE'
          ? { es: `Entra dinero, registras la venta y el IVA cobrado.${disc ? ' El descuento va en su propia cuenta (Descuentos sobre ventas).' : ''} Además sale mercancía: Costo de ventas contra Inventarios.`, en: 'Money comes in; record the sale and VAT, plus cost of goods sold against Inventory.' }
          : { es: `PPD = aún no te pagan: tu cliente te debe (Clientes) y el IVA todavía no lo cobras (IVA trasladado no cobrado).${disc ? ' El descuento va en Descuentos sobre ventas.' : ''} Además, Costo de ventas contra Inventarios.`, en: 'PPD = not paid yet: Accounts receivable and VAT not yet collected. Also cost of goods sold against Inventory.' },
      formulas: [...invoiceFormulas(concepts, totals(concepts)), costFormula(items.map((i) => ({ desc: i.p.desc, qty: i.qty, cost: i.p.cost })))],
      topics: ['L1-09', 'L1-10', 'FIS-06', 'FIS-10'],
    }),
  }
}

function paymentReceived(c: Ctx, level: LabLevel, inv?: Cfdi, partial = false): PracticeDoc {
  const base = inv ?? goodsSale(new Ctx(c.r, c.month), 'intermedio', 'PPD').invoice
  const paid = partial ? r2(Math.round((base.total * pick(c.r, [0.4, 0.5, 0.6])) / 100) * 100) : base.total
  const mixed = base.concepts.some((x) => x.tax === 'iva0')
  const ivaPart = r2(mixed ? (base.iva * paid) / base.total : (paid / 1.16) * 0.16)
  const p: Cfdi = {
    type: 'P',
    direction: 'emitido',
    serie: 'P',
    folio: ++c.folio.P,
    date: inv ? c.day(Math.min(28, Number(inv.date.slice(8)) + 1), 28) : c.day(),
    uuid: uuid(c.r),
    issuer: COMPANY,
    receiver: base.receiver,
    use: USE.payment,
    form: FORM.transfer,
    concepts: [concept(1, 'ACT Actividad', 'Pago', 0, 'iva16')],
    subtotal: 0,
    discount: 0,
    iva: 0,
    retIsr: 0,
    retIva: 0,
    total: 0,
    payment: { serie: base.serie, folio: base.folio, uuid: base.uuid, invoiceTotal: base.total, previous: base.total, paid, remaining: r2(base.total - paid), part: 1 },
  }
  const ivaFormula: AppliedFormula = {
    name: { es: 'IVA que se cobra con este pago', en: 'VAT collected with this payment' },
    expression: mixed ? 'IVA cobrado = IVA de la factura × (Pago ÷ Total de la factura)' : 'IVA cobrado = Pago ÷ 1.16 × 0.16',
    calc: mixed ? [`${m(base.iva)} × (${m(paid)} ÷ ${m(base.total)}) = ${m(ivaPart)}`] : [`${m(paid)} ÷ 1.16 × 0.16 = ${m(ivaPart)}`],
  }
  const formulas: AppliedFormula[] = [ivaFormula]
  if (partial) formulas.unshift({ name: { es: 'Saldo que queda pendiente', en: 'Remaining balance' }, expression: 'Saldo insoluto = Saldo anterior − Importe pagado', calc: [`${m(base.total)} − ${m(paid)} = ${m(base.total - paid)}`] })
  const cfdis = inv ? [p] : [base, p]
  return doc(c, level, {
    title: partial ? { es: 'Complemento de pago (pago parcial)', en: 'Payment receipt (partial payment)' } : { es: 'Complemento de pago recibido de un cliente', en: 'Payment receipt from a customer' },
    story: inv
      ? { es: `Tu cliente te pagó por transferencia ${partial ? 'una parte de' : ''} la factura ${base.serie}-${base.folio} que le vendiste a crédito. Tú emitiste este complemento de pago.`, en: `Your customer paid ${partial ? 'part of ' : ''}invoice ${base.serie}-${base.folio} by transfer. You issued this payment receipt.` }
      : { es: `El mes pasado vendiste a crédito con la factura ${base.serie}-${base.folio} (ya está registrada). Hoy tu cliente te pagó por transferencia y emitiste este complemento de pago.`, en: `Last month you sold on credit with invoice ${base.serie}-${base.folio} (already recorded). Today the customer paid by transfer and you issued this payment receipt.` },
    cfdis,
    policy: 'I',
    expected: new Lines().add('1102', 'D', paid).add('1104', 'C', paid).add('2110', 'D', ivaPart).add('2104', 'C', ivaPart).get(),
    hint: { es: 'Entra dinero al banco y tu cliente ya no te debe esa cantidad. Como ya cobraste, el IVA pasa de "no cobrado" a "trasladado" (cobrado).', en: 'Money comes in and receivables go down. The VAT moves from "not yet collected" to "output VAT".' },
    formulas,
    topics: ['FIS-10', 'FIS-06', 'L1-10'],
  })
}

function paymentToSupplier(c: Ctx, level: LabLevel, inv?: Cfdi): PracticeDoc {
  const base = inv ?? (goodsPurchase(new Ctx(c.r, c.month), 'intermedio', 'PPD').cfdis[0])
  const p: Cfdi = {
    type: 'P',
    direction: 'recibido',
    serie: 'CP',
    folio: int(c.r, 100, 9999),
    date: inv ? c.day(Math.min(28, Number(inv.date.slice(8)) + 1), 28) : c.day(),
    uuid: uuid(c.r),
    issuer: base.issuer,
    receiver: COMPANY,
    use: USE.payment,
    form: FORM.transfer,
    concepts: [concept(1, 'ACT Actividad', 'Pago', 0, 'iva16')],
    subtotal: 0,
    discount: 0,
    iva: 0,
    retIsr: 0,
    retIva: 0,
    total: 0,
    payment: { serie: base.serie, folio: base.folio, uuid: base.uuid, invoiceTotal: base.total, previous: base.total, paid: base.total, remaining: 0, part: 1 },
  }
  return doc(c, level, {
    title: { es: 'Pago a un proveedor (complemento de pago)', en: 'Payment to a supplier (payment receipt)' },
    story: inv
      ? { es: `Le pagaste a tu proveedor la factura ${base.serie}-${base.folio} que compraste a crédito. Él te mandó este complemento de pago.`, en: `You paid your supplier invoice ${base.serie}-${base.folio}. They sent this payment receipt.` }
      : { es: `El mes pasado compraste a crédito con la factura ${base.serie}-${base.folio} (ya está registrada). Hoy la pagaste por transferencia y tu proveedor te mandó este complemento de pago.`, en: `Last month you bought on credit (already recorded). Today you paid by transfer and got this payment receipt.` },
    cfdis: inv ? [p] : [base, p],
    policy: 'E',
    expected: new Lines().add('2101', 'D', base.total).add('1102', 'C', base.total).add('1109', 'D', base.iva).add('1112', 'C', base.iva).get(),
    hint: { es: 'Sale dinero del banco y ya no le debes al proveedor. Como ya pagaste, el IVA pasa de "pendiente de acreditar" a "acreditable".', en: 'Money leaves the bank and the payable is settled. VAT moves from "not yet paid" to "creditable".' },
    formulas: [{ name: { es: 'IVA que ya puedes acreditar', en: 'VAT you can now credit' }, expression: 'IVA acreditable = IVA de la factura pagada', calc: [`${m(base.iva)}`] }],
    topics: ['FIS-10', 'FIS-06'],
  })
}

const creditNote: Gen = (c) => {
  const p = pick(c.r, PRODUCTS.filter((x) => x.tax === 'iva16'))
  const isReturn = c.r() < 0.5
  const qty = int(c.r, 1, 3)
  const items = isReturn ? [concept(qty, p.unit, `Devolución: ${p.desc}`, p.price, 'iva16')] : [concept(1, 'ACT Actividad', 'Descuento por pronto pago', step(c.r, 300, 2500, 50), 'iva16')]
  const t = totals(items)
  const original = { serie: 'A', folio: c.folio.A - int(c.r, 5, 40), uuid: uuid(c.r) }
  const cf: Cfdi = {
    type: 'E',
    direction: 'emitido',
    serie: 'NC',
    folio: ++c.folio.NC,
    date: c.day(),
    uuid: uuid(c.r),
    issuer: COMPANY,
    receiver: pick(c.r, CUSTOMERS),
    use: USE.returns,
    method: 'PUE',
    form: FORM.transfer,
    concepts: items,
    ...t,
    related: { ...original, relation: '01 Nota de crédito de los documentos relacionados' },
  }
  const lines = new Lines().add(isReturn ? '4103' : '4104', 'D', t.subtotal).add('2104', 'D', t.iva).add('1102', 'C', t.total)
  if (isReturn) lines.add('1108', 'D', r2(qty * p.cost)).add('5101', 'C', r2(qty * p.cost))
  return doc(c, 'intermedio', {
    title: { es: 'Nota de crédito (CFDI de egreso)', en: 'Credit note (outgoing CFDI)' },
    story: isReturn
      ? { es: `Un cliente te devolvió mercancía de una venta de contado y le regresaste su dinero por transferencia. Emitiste esta nota de crédito.`, en: 'A customer returned goods from a cash sale and you refunded by transfer. You issued this credit note.' }
      : { es: 'Le diste a un cliente un descuento por pagar antes de tiempo y le regresaste esa cantidad por transferencia. Emitiste esta nota de crédito.', en: 'You gave a customer an early-payment discount and refunded it by transfer. You issued this credit note.' },
    extra: isReturn ? { es: `La mercancía devuelta regresa a tu almacén. Su costo es ${m(qty * p.cost)}.`, en: `The returned goods go back to stock. Their cost is ${m(qty * p.cost)}.` } : undefined,
    cfdis: [cf],
    policy: 'E',
    expected: lines.get(),
    hint: isReturn
      ? { es: 'Es lo contrario de una venta: Devoluciones sobre ventas (cargo), el IVA que habías cobrado disminuye y sale dinero. La mercancía regresa a Inventarios y se reduce el Costo de ventas.', en: 'The reverse of a sale: Sales returns (debit), output VAT decreases, money goes out; goods return to Inventory.' }
      : { es: 'Un descuento reduce tus ventas: Descuentos sobre ventas (cargo). El IVA que cobraste baja y sale dinero del banco.', en: 'A discount reduces sales: Sales discounts (debit). Output VAT decreases and money goes out.' },
    formulas: invoiceFormulas(items, t),
    topics: ['FIS-10', 'L1-05'],
  })
}

function payroll(c: Ctx, level: LabLevel, n: number): PracticeDoc {
  const staff = [...EMPLOYEES].sort(() => c.r() - 0.5).slice(0, n)
  const date = c.day(14, 15)
  const cfdis: Cfdi[] = staff.map(([employee, position]) => {
    const daily = step(c.r, 300, 900, 10)
    const perceptions = [{ desc: 'Sueldo (15 días)', amount: r2(daily * 15) }]
    if (level === 'avanzado' && c.r() < 0.6) perceptions.push({ desc: 'Horas extra', amount: step(c.r, 400, 1500, 10) })
    if (level === 'avanzado' && c.r() < 0.5) perceptions.push({ desc: 'Premio de puntualidad', amount: r2(perceptions[0].amount * 0.1) })
    const gross = r2(perceptions.reduce((s, p) => s + p.amount, 0))
    const deductions = [
      { desc: 'ISR retenido', amount: r2(gross * pick(c.r, [0.06, 0.08, 0.1, 0.12])) },
      { desc: 'Cuota obrera IMSS', amount: r2(gross * 0.025) },
    ]
    const net = r2(gross - deductions[0].amount - deductions[1].amount)
    return {
      type: 'N',
      direction: 'emitido',
      serie: 'N',
      folio: ++c.folio.N,
      date,
      uuid: uuid(c.r),
      issuer: COMPANY,
      receiver: { rfc: `${employee.split(' ')[1].slice(0, 2)}${employee.split(' ')[2][0]}${employee[0]}9${int(c.r, 0, 9)}0${int(c.r, 1, 9)}1${int(c.r, 0, 9)}${hex(c.r, 3)}`, name: employee, regime: '605 Sueldos y Salarios' },
      use: USE.payroll,
      form: '99 Por definir',
      concepts: [concept(1, 'ACT Actividad', 'Pago de nómina', gross, 'iva0')],
      subtotal: gross,
      discount: r2(deductions[0].amount + deductions[1].amount),
      iva: 0,
      retIsr: 0,
      retIva: 0,
      total: net,
      payroll: { employee, position, days: 15, perceptions, deductions, net },
    }
  })
  const sum = (f: (p: PayrollData) => number) => r2(cfdis.reduce((s, x) => s + f(x.payroll!), 0))
  const gross = sum((p) => p.perceptions.reduce((s, x) => s + x.amount, 0))
  const isr = sum((p) => p.deductions[0].amount)
  const imss = sum((p) => p.deductions[1].amount)
  const net = sum((p) => p.net)
  return doc(c, level, {
    title: n > 1 ? { es: `Nómina de ${n} empleados`, en: `Payroll for ${n} employees` } : { es: 'Recibo de nómina', en: 'Payroll receipt' },
    story: { es: `Pagaste la quincena por transferencia ${n > 1 ? `a ${n} empleados` : 'a tu empleado'}. Emitiste ${n > 1 ? 'un CFDI de nómina para cada uno' : 'este CFDI de nómina'}. Registra todo en una sola póliza.`, en: `You paid the fortnight by transfer. You issued ${n > 1 ? 'one payroll CFDI per employee' : 'this payroll CFDI'}. Record everything in one entry.` },
    extra: { es: 'El ISR y la cuota del IMSS de estos recibos son valores de ejemplo. En la vida real salen de la tarifa del ISR y de las cuotas del IMSS.', en: 'ISR and IMSS here are example amounts; in real life they come from the official tables.' },
    cfdis,
    policy: 'E',
    expected: new Lines().add('6101', 'D', gross).add('2111', 'C', isr).add('2113', 'C', imss).add('1102', 'C', net).get(),
    hint: { es: 'El gasto es el sueldo completo (percepciones). Lo que le retuviste al empleado (ISR e IMSS) ahora se lo debes al gobierno, y solo sale del banco el neto.', en: 'The expense is the gross pay. Withholdings become liabilities, and only the net pay leaves the bank.' },
    formulas: [
      { name: { es: 'Total de percepciones', en: 'Gross pay' }, expression: 'Percepciones = Sueldo diario × días + otros pagos', calc: cfdis.map((x) => `${x.payroll!.employee}: ${x.payroll!.perceptions.map((p) => m(p.amount)).join(' + ')} = ${m(x.subtotal)}`) },
      { name: { es: 'Neto a pagar', en: 'Net pay' }, expression: 'Neto = Percepciones − Deducciones (ISR retenido + IMSS)', calc: cfdis.map((x) => `${x.payroll!.employee}: ${m(x.subtotal)} − ${m(x.discount)} = ${m(x.total)}`).concat(n > 1 ? [`Total neto: ${m(net)}`] : []) },
    ],
    topics: ['FIS-12', 'FIS-13'],
  })
}

function withheldService(c: Ctx, level: LabLevel, kind: 'fees' | 'rent'): PracticeDoc {
  const fees = kind === 'fees'
  const items = [concept(1, 'E48 Servicio', fees ? 'Honorarios por servicios contables' : 'Arrendamiento de bodega', step(c.r, fees ? 5000 : 9000, fees ? 15000 : 30000, 100), 'iva16')]
  const cf = invoice(c, { direction: 'recibido', serie: 'A', issuer: fees ? ACCOUNTANT : LANDLORD, receiver: COMPANY, use: USE.expense, method: 'PUE', form: FORM.transfer, concepts: items, ret: { isr: 0.1, iva: 2 / 3 } })
  const t = totals(items, { isr: 0.1, iva: 2 / 3 })
  return doc(c, level, {
    title: fees ? { es: 'Honorarios de una persona física (con retenciones)', en: 'Fees from an individual (with withholdings)' } : { es: 'Renta pagada a una persona física (con retenciones)', en: 'Rent paid to an individual (with withholdings)' },
    story: fees
      ? { es: 'Un contador independiente (persona física) te cobró sus servicios. Como tu negocio es persona moral, le retienes ISR e IVA y le pagas el resto por transferencia.', en: 'An independent accountant (individual) billed you. As a company you withhold ISR and VAT and pay the rest by transfer.' }
      : { es: 'Le pagaste la renta de una bodega a una persona física. Como tu negocio es persona moral, le retienes ISR e IVA y le pagas el resto por transferencia.', en: 'You paid rent to an individual. As a company you withhold ISR and VAT and pay the rest by transfer.' },
    extra: { es: 'Tasas de ejemplo: ISR retenido 10% del subtotal e IVA retenido dos terceras partes del IVA.', en: 'Example rates: ISR withheld 10% of subtotal, VAT withheld two thirds of the VAT.' },
    cfdis: [cf],
    policy: 'E',
    expected: new Lines().add(fees ? '6110' : '6102', 'D', t.subtotal).add('1109', 'D', t.iva).add('1102', 'C', t.total).add('2111', 'C', t.retIsr).add('2112', 'C', t.retIva).get(),
    hint: { es: 'El gasto es el subtotal y el IVA completo es acreditable. Del banco solo sale el total de la factura; lo retenido ya no es del proveedor: se lo debes al SAT (ISR e IVA retenido por pagar).', en: 'Expense = subtotal; full VAT is creditable. Only the invoice total leaves the bank; the withholdings are owed to the tax authority.' },
    formulas: invoiceFormulas(items, t, { ret: true }),
    topics: ['FIS-12', 'FIS-06', 'FIS-09'],
  })
}

function bigPurchase(c: Ctx): PracticeDoc {
  const prods = [...PRODUCTS].sort(() => c.r() - 0.5).slice(0, 2)
  const goods = prods.map((p) => concept(int(c.r, 10, 40), p.unit, p.desc, p.cost, p.tax))
  const freight = concept(1, 'E48 Servicio', 'Flete de entrega', step(c.r, 800, 3000, 50), 'iva16')
  const equip = concept(1, 'H87 Pieza', 'Computadora de escritorio', step(c.r, 11000, 18000, 100), 'iva16')
  const concepts = [...goods, freight, equip]
  const cf = invoice(c, { direction: 'recibido', issuer: pick(c.r, SUPPLIER_GOODS), receiver: COMPANY, use: USE.goods, method: 'PPD', form: FORM.tbd, concepts })
  const goodsTotal = r2(goods.reduce((s, x) => s + x.amount, 0))
  return doc(c, 'avanzado', {
    title: { es: 'Factura de compra con varios conceptos (a crédito)', en: 'Multi-item purchase invoice (on credit)' },
    story: { es: 'Tu proveedor te vendió a crédito mercancía para revender, te cobró el flete y además le compraste una computadora para tu oficina. Todo viene en una sola factura.', en: 'Your supplier sold you goods on credit, charged freight, and you also bought an office computer. All on one invoice.' },
    cfdis: [cf],
    policy: 'D',
    expected: new Lines().add('1108', 'D', goodsTotal).add('6111', 'D', freight.amount).add('1205', 'D', equip.amount).add('1112', 'D', cf.iva).add('2101', 'C', cf.total).get(),
    hint: { es: 'Separa cada concepto en su cuenta: la mercancía a Inventarios, el flete es un gasto (Fletes y acarreos) y la computadora es activo fijo (Equipo de cómputo). Es PPD: le debes al proveedor y el IVA queda pendiente de acreditar.', en: 'Split each item: goods to Inventory, freight is an expense, the computer is a fixed asset. PPD: owe the supplier; VAT is pending.' },
    formulas: [...invoiceFormulas(concepts, totals(concepts)), { name: { es: 'Mercancía para Inventarios', en: 'Goods to Inventory' }, expression: 'Inventarios = suma de los importes de mercancía', calc: [`${goods.map((g) => m(g.amount)).join(' + ')} = ${m(goodsTotal)}`] }],
    topics: ['L1-10', 'CON-08', 'FIS-06'],
  })
}

// ───────────────────────── Public API ─────────────────────────

const POOL: Record<LabLevel, Gen[]> = {
  basico: [saleServiceCash, saleServiceCash, (c) => goodsPurchase(c, 'basico', 'PUE'), expenseCash, equipmentPurchase],
  intermedio: [
    (c) => goodsSale(c, 'intermedio', 'PUE').doc,
    (c) => goodsSale(c, 'intermedio', 'PPD').doc,
    (c) => paymentReceived(c, 'intermedio'),
    (c) => goodsPurchase(c, 'intermedio', 'PPD'),
    (c) => paymentToSupplier(c, 'intermedio'),
    creditNote,
    (c) => payroll(c, 'intermedio', 1),
    (c) => withheldService(c, 'intermedio', 'fees'),
    (c) => withheldService(c, 'intermedio', 'rent'),
  ],
  avanzado: [
    (c) => goodsSale(c, 'avanzado', 'PUE').doc,
    (c) => goodsSale(c, 'avanzado', 'PPD').doc,
    (c) => paymentReceivedFrom(c, goodsSale(c, 'avanzado', 'PPD').invoice),
    bigPurchase,
    (c) => payroll(c, 'avanzado', int(c.r, 3, 5)),
    (c) => goodsPurchase(c, 'avanzado', 'PUE'),
  ],
}

/** Partial payment of an invoice issued last month (the invoice is shown for reference). */
function paymentReceivedFrom(c: Ctx, inv: Cfdi): PracticeDoc {
  const d = paymentReceived(c, 'avanzado', inv, true)
  return { ...d, cfdis: [inv, ...d.cfdis], story: { es: `El mes pasado vendiste a crédito con la factura ${inv.serie}-${inv.folio} (ya está registrada). Hoy tu cliente te pagó una parte por transferencia y emitiste este complemento de pago.`, en: `Last month you sold on credit with invoice ${inv.serie}-${inv.folio} (already recorded). Today the customer paid part of it and you issued this payment receipt.` } }
}

const monthOf = (d: Date) => d.toISOString().slice(0, 7)

/** One random practice document of the given level. */
export function practiceDoc(level: LabLevel, seed: number, now = new Date()): PracticeDoc {
  const r = rngFrom(seed)
  const c = new Ctx(r, monthOf(now))
  return pick(r, POOL[level])(c)
}

export const EXAM_PASS = 0.8
export const EXAM_SIZE: Record<LabLevel, number> = { basico: 8, intermedio: 12, avanzado: 12 }

/** Opening balances for the exam month (already recorded, not graded). */
export const OPENING: JournalLine[] = [
  { accountCode: '1101', side: 'D', amount: 20000 },
  { accountCode: '1102', side: 'D', amount: 300000 },
  { accountCode: '1108', side: 'D', amount: 150000 },
  { accountCode: '1203', side: 'D', amount: 80000 },
  { accountCode: '3101', side: 'C', amount: 550000 },
]

/** A full month of documents ("Mes contable"), sorted by date. */
export function examDocs(level: LabLevel, seed: number, now = new Date()): PracticeDoc[] {
  const r = rngFrom(seed)
  const c = new Ctx(r, monthOf(now))
  const out: PracticeDoc[] = []
  if (level === 'basico') {
    for (let i = 0; i < 3; i++) out.push(saleServiceCash(c))
    for (let i = 0; i < 2; i++) out.push(goodsPurchase(c, 'basico', 'PUE'))
    for (let i = 0; i < 2; i++) out.push(expenseCash(c))
    out.push(equipmentPurchase(c))
  } else if (level === 'intermedio') {
    out.push(goodsSale(c, 'intermedio', 'PUE').doc, goodsSale(c, 'intermedio', 'PUE').doc)
    const s1 = goodsSale(c, 'intermedio', 'PPD')
    out.push(s1.doc, goodsSale(c, 'intermedio', 'PPD').doc, paymentReceived(c, 'intermedio', s1.invoice))
    const p1 = goodsPurchase(c, 'intermedio', 'PPD')
    out.push(p1, paymentToSupplier(c, 'intermedio', p1.cfdis[0]))
    out.push(expenseCash(c), withheldService(c, 'intermedio', 'fees'), creditNote(c), payroll(c, 'intermedio', 1), withheldService(c, 'intermedio', 'rent'))
  } else {
    out.push(goodsSale(c, 'avanzado', 'PUE').doc)
    const s1 = goodsSale(c, 'avanzado', 'PPD')
    out.push(s1.doc, paymentReceived(c, 'avanzado', s1.invoice, true))
    out.push(bigPurchase(c))
    const p1 = goodsPurchase(c, 'intermedio', 'PPD')
    out.push({ ...p1, level: 'avanzado' }, paymentToSupplier(c, 'avanzado', p1.cfdis[0]))
    out.push(payroll(c, 'avanzado', int(r, 3, 4)), withheldService(c, 'avanzado', 'fees'), withheldService(c, 'avanzado', 'rent'), { ...creditNote(c), level: 'avanzado' }, expenseCash(c), equipmentPurchase(c))
  }
  // Keep a sale before its payment: sort by date, then by original order.
  const order = new Map(out.map((d, i) => [d, i]))
  const date = (d: PracticeDoc) => d.cfdis[d.cfdis.length - 1].date
  return out.sort((a, b) => date(a).localeCompare(date(b)) || order.get(a)! - order.get(b)!).map((d, i) => ({ ...d, id: `${String(i + 1).padStart(2, '0')}-${d.id}` }))
}

/** Accounts offered in the Básico selector, so beginners choose among the few that apply. */
export const BASIC_ACCOUNTS = ['1101', '1102', '1104', '1108', '1109', '1203', '1205', '2101', '2104', '3101', '4101', '4102', '6102', '6103', '6104']
