import type { L } from '../types'
import { fisherYates, seededRng, type Rng } from './shuffle'

export type AnomalyType = 'duplicate' | 'unusualAmount' | 'offHours' | 'suspiciousVendor' | 'docInconsistency' | 'splitPayment'
export type Verdict = 'irregular' | 'explained'
export type PayMethod = 'transfer' | 'check' | 'card'

export const ANOMALY_LABELS: Record<AnomalyType, L> = {
  duplicate: { es: 'Pago duplicado', en: 'Duplicate payment' },
  unusualAmount: { es: 'Importe inusual', en: 'Unusual amount' },
  offHours: { es: 'Fuera de horario', en: 'Off-hours transaction' },
  suspiciousVendor: { es: 'Proveedor sospechoso', en: 'Suspicious vendor' },
  docInconsistency: { es: 'Inconsistencia documental', en: 'Document inconsistency' },
  splitPayment: { es: 'Fraccionamiento de pagos', en: 'Split payments' },
}

export interface Vendor {
  id: string
  name: string
  rfc: string
  registeredOn: string
  bankAccount: string
  inMaster: boolean
  category: L
  typical: [number, number]
}

export interface FraudTx {
  id: string
  date: string
  time: string
  weekday: number // 0 = Sunday
  vendorId: string
  concept: L
  amount: number
  reference: string
  method: PayMethod
  category: L
  requestedBy: string
  approvedBy: string | null
  poNumber: string | null
  invoice: { number: string; date: string; amount: number; cfdiUuid: string | null }
  note?: L
}

export interface Truth {
  type: AnomalyType
  verdict: Verdict
  explanation: L
}

export interface FraudCase {
  seed: number
  company: string
  period: L
  approvalThreshold: number
  vendors: Vendor[]
  employeeAccounts: { name: string; account: string }[]
  txs: FraudTx[]
  truth: Record<string, Truth>
}

const CATS = {
  supplies: { es: 'Materiales', en: 'Supplies' },
  services: { es: 'Servicios', en: 'Services' },
  logistics: { es: 'Logística', en: 'Logistics' },
  capex: { es: 'Activo fijo', en: 'Fixed assets' },
  utilities: { es: 'Servicios básicos', en: 'Utilities' },
  payroll: { es: 'Nómina', en: 'Payroll' },
  consulting: { es: 'Consultoría', en: 'Consulting' },
}

const VENDOR_POOL: Omit<Vendor, 'id' | 'bankAccount' | 'inMaster' | 'registeredOn'>[] = [
  { name: 'Papelería Central del Norte', rfc: 'PCN150312AB1', category: CATS.supplies, typical: [1500, 9000] },
  { name: 'Transportes Rápidos del Golfo', rfc: 'TRG110825K32', category: CATS.logistics, typical: [8000, 35000] },
  { name: 'Energía y Servicios Urbanos', rfc: 'ESU090101QW4', category: CATS.utilities, typical: [12000, 28000] },
  { name: 'Insumos Industriales Atlas', rfc: 'IIA130620LM8', category: CATS.supplies, typical: [15000, 42000] },
  { name: 'Limpieza Profesional Brisa', rfc: 'LPB170203HT5', category: CATS.services, typical: [4000, 12000] },
  { name: 'Mantenimiento Técnico Sigma', rfc: 'MTS120914RE7', category: CATS.services, typical: [6000, 22000] },
  { name: 'Maquinaria y Equipos del Centro', rfc: 'MEC080430PK2', category: CATS.capex, typical: [20000, 60000] },
  { name: 'Software Empresarial Delta', rfc: 'SED160711VB9', category: CATS.services, typical: [5000, 18000] },
]

const STAFF = ['A. Ramírez', 'M. Torres', 'L. Gómez', 'R. Castillo', 'P. Herrera']
const APPROVERS = ['Dir. Finanzas', 'Gerente de Compras', 'Contralor']

const pad = (n: number, w = 2) => String(n).padStart(w, '0')
const money = (x: number) => Math.round(x * 100) / 100

function uuid(rng: Rng) {
  const h = () => Math.floor(rng() * 16).toString(16).toUpperCase()
  const part = (n: number) => Array.from({ length: n }, h).join('')
  return `${part(8)}-${part(4)}-${part(4)}-${part(4)}-${part(12)}`
}
function account(rng: Rng) {
  return `0${Array.from({ length: 17 }, () => Math.floor(rng() * 10)).join('')}`
}
function dayOfWeek(date: string) {
  const [y, m, d] = date.split('-').map(Number)
  return new Date(y, m - 1, d).getDay()
}

const CONCEPTS: Record<string, L[]> = {
  supplies: [
    { es: 'Compra de materiales', en: 'Purchase of materials' },
    { es: 'Material de oficina', en: 'Office supplies' },
  ],
  services: [
    { es: 'Servicio mensual', en: 'Monthly service' },
    { es: 'Mantenimiento correctivo', en: 'Corrective maintenance' },
  ],
  logistics: [{ es: 'Fletes nacionales', en: 'Domestic freight' }],
  utilities: [{ es: 'Energía eléctrica', en: 'Electricity' }],
  capex: [{ es: 'Refacciones de equipo', en: 'Equipment parts' }],
}

function conceptFor(v: Omit<Vendor, 'id'>, rng: Rng): L {
  const key = Object.entries(CATS).find(([, c]) => c.es === v.category.es)?.[0] ?? 'services'
  const list = CONCEPTS[key] ?? CONCEPTS.services
  return list[Math.floor(rng() * list.length)]
}

/**
 * Deterministically generates a fictitious forensic case from a seed. The same seed
 * always yields the same dataset (so a case can be resumed and scored reproducibly).
 */
export function generateCase(seed: number): FraudCase {
  const rng = seededRng(seed)
  const year = 2026
  const month = 3
  const days = Array.from({ length: 31 }, (_, i) => `${year}-${pad(month)}-${pad(i + 1)}`)
  const businessDays = days.filter((d) => {
    const w = dayOfWeek(d)
    return w !== 0 && w !== 6
  })

  const vendors: Vendor[] = VENDOR_POOL.map((v, i) => ({
    ...v,
    id: `V${pad(i + 1, 3)}`,
    inMaster: true,
    registeredOn: `20${pad(15 + Math.floor(rng() * 9))}-${pad(1 + Math.floor(rng() * 12))}-${pad(1 + Math.floor(rng() * 28))}`,
    bankAccount: account(rng),
  }))
  const employeeAccounts = STAFF.map((name) => ({ name, account: account(rng) }))

  const txs: FraudTx[] = []
  let invSeq = 1000 + Math.floor(rng() * 8000)
  let ref = 50000 + Math.floor(rng() * 40000)

  const legitVendors = vendors.filter((v) => v.inMaster)
  const makeNormal = (date: string): FraudTx => {
    const v = legitVendors[Math.floor(rng() * legitVendors.length)]
    const amount = money(v.typical[0] + rng() * (v.typical[1] - v.typical[0]))
    const hour = 9 + Math.floor(rng() * 9)
    const invDate = days[Math.max(0, days.indexOf(date) - 1 - Math.floor(rng() * 5))]
    return {
      id: '',
      date,
      time: `${pad(hour)}:${pad(Math.floor(rng() * 60))}`,
      weekday: dayOfWeek(date),
      vendorId: v.id,
      concept: conceptFor(v, rng),
      amount,
      reference: `TRF-${ref++}`,
      method: rng() < 0.85 ? 'transfer' : 'check',
      category: v.category,
      requestedBy: STAFF[Math.floor(rng() * STAFF.length)],
      approvedBy: amount >= 50000 ? 'Dir. Finanzas' : APPROVERS[1 + Math.floor(rng() * 2)],
      poNumber: `OC-${2600 + Math.floor(rng() * 400)}`,
      invoice: { number: `F-${invSeq++}`, date: invDate, amount, cfdiUuid: uuid(rng) },
    }
  }

  for (let i = 0; i < 44; i++) txs.push(makeNormal(businessDays[Math.floor(rng() * businessDays.length)]))

  const truth: Record<string, Truth> = {}
  const anomalies: { tx: FraudTx; t: Truth }[] = []
  const pickDay = () => businessDays[3 + Math.floor(rng() * (businessDays.length - 6))]

  // 1. Duplicate payment of an existing invoice
  {
    const orig = txs[Math.floor(rng() * txs.length)]
    const i = businessDays.indexOf(orig.date)
    const date = businessDays[Math.min(businessDays.length - 1, i + 2 + Math.floor(rng() * 3))]
    const dup: FraudTx = { ...orig, date, weekday: dayOfWeek(date), time: `${pad(10 + Math.floor(rng() * 6))}:${pad(Math.floor(rng() * 60))}`, reference: `TRF-${ref++}`, requestedBy: STAFF[Math.floor(rng() * STAFF.length)] }
    anomalies.push({
      tx: dup,
      t: {
        type: 'duplicate',
        verdict: 'irregular',
        explanation: {
          es: `Paga de nuevo la factura ${orig.invoice.number} (mismo proveedor, importe y CFDI) que ya se había pagado el ${orig.date}. Procede solicitar reembolso y revisar el control de facturas pagadas.`,
          en: `Pays invoice ${orig.invoice.number} again (same vendor, amount and CFDI) that was already paid on ${orig.date}. Request a refund and review the paid-invoice control.`,
        },
      },
    })
  }
  // 2. Unusual amount without support (irregular)
  {
    const v = vendors[0]
    const date = pickDay()
    const amount = money(85000 + rng() * 20000)
    anomalies.push({
      tx: { ...makeNormal(date), vendorId: v.id, category: v.category, concept: { es: 'Material de oficina', en: 'Office supplies' }, amount, poNumber: null, approvedBy: 'Gerente de Compras', invoice: { number: `F-${invSeq++}`, date, amount, cfdiUuid: uuid(rng) } },
      t: {
        type: 'unusualAmount',
        verdict: 'irregular',
        explanation: {
          es: `Importe muy superior al rango habitual del proveedor (${v.typical[0].toLocaleString()}–${v.typical[1].toLocaleString()}), sin orden de compra y aprobado por un nivel sin facultades para montos ≥ $50,000.`,
          en: `Amount far above the vendor’s usual range (${v.typical[0].toLocaleString()}–${v.typical[1].toLocaleString()}), no purchase order, approved by a level without authority for amounts ≥ $50,000.`,
        },
      },
    })
  }
  // 3. Unusual amount, but documented (explained)
  {
    const v = vendors[6]
    const date = pickDay()
    const amount = money(420000 + Math.floor(rng() * 80) * 1000)
    anomalies.push({
      tx: {
        ...makeNormal(date),
        vendorId: v.id,
        category: CATS.capex,
        concept: { es: 'Adquisición de línea de envasado', en: 'Acquisition of packaging line' },
        amount,
        approvedBy: 'Consejo de Administración',
        poNumber: 'OC-CAPEX-2026-014',
        invoice: { number: `F-${invSeq++}`, date, amount, cfdiUuid: uuid(rng) },
        note: { es: 'Contrato C-2026-014 y acta de consejo adjuntos; presupuesto de inversión aprobado.', en: 'Contract C-2026-014 and board minutes attached; approved capital budget.' },
      },
      t: {
        type: 'unusualAmount',
        verdict: 'explained',
        explanation: {
          es: 'Es una alerta válida (importe atípico), pero la evidencia la explica: contrato, orden de compra específica, aprobación del consejo y CFDI coinciden. No hay irregularidad.',
          en: 'A valid red flag (atypical amount), but the evidence explains it: contract, specific PO, board approval and CFDI all match. No irregularity.',
        },
      },
    })
  }
  // 4. Off-hours manual transfer (irregular)
  {
    const sunday = days.filter((d) => dayOfWeek(d) === 0)[1 + Math.floor(rng() * 2)]
    const v = vendors[5]
    const amount = money(31000 + rng() * 9000)
    anomalies.push({
      tx: { ...makeNormal(sunday), date: sunday, weekday: 0, time: `0${2 + Math.floor(rng() * 2)}:${pad(Math.floor(rng() * 60))}`, vendorId: v.id, category: v.category, concept: { es: 'Mantenimiento urgente', en: 'Urgent maintenance' }, amount, approvedBy: null, poNumber: null, invoice: { number: `F-${invSeq++}`, date: sunday, amount, cfdiUuid: uuid(rng) } },
      t: {
        type: 'offHours',
        verdict: 'irregular',
        explanation: {
          es: 'Transferencia manual en domingo de madrugada, sin aprobación ni orden de compra, y por encima del rango típico del proveedor. Viola la segregación de funciones.',
          en: 'Manual transfer early on a Sunday, with no approval or purchase order, above the vendor’s typical range. Breaks segregation of duties.',
        },
      },
    })
  }
  // 5. Off-hours but scheduled batch (explained)
  {
    const date = businessDays[businessDays.length - 1]
    const amount = money(380000 + Math.floor(rng() * 40) * 1000)
    const payroll: Vendor = { id: 'V900', name: 'Dispersión de nómina (banco)', rfc: 'N/A', registeredOn: '2014-01-02', bankAccount: account(rng), inMaster: true, category: CATS.payroll, typical: [350000, 450000] }
    vendors.push(payroll)
    anomalies.push({
      tx: {
        id: '',
        date,
        time: '23:30',
        weekday: dayOfWeek(date),
        vendorId: payroll.id,
        concept: { es: 'Nómina quincenal (proceso programado)', en: 'Biweekly payroll (scheduled batch)' },
        amount,
        reference: `NOM-${ref++}`,
        method: 'transfer',
        category: CATS.payroll,
        requestedBy: 'Sistema',
        approvedBy: 'Dir. Recursos Humanos',
        poNumber: null,
        invoice: { number: 'CFDI-NÓMINA', date, amount, cfdiUuid: uuid(rng) },
        note: { es: 'Lote programado en el banco; misma hora cada quincena.', en: 'Batch scheduled at the bank; same time every pay period.' },
      },
      t: {
        type: 'offHours',
        verdict: 'explained',
        explanation: {
          es: 'Hora inusual, pero es un proceso programado y recurrente con aprobación de RR. HH. y CFDI de nómina. Alerta descartada tras investigar.',
          en: 'Unusual hour, but it is a recurring scheduled batch approved by HR with payroll CFDI. Alert cleared after investigation.',
        },
      },
    })
  }
  // 6. Suspicious vendor (new, not in master, bank account = employee)
  {
    const emp = employeeAccounts[Math.floor(rng() * employeeAccounts.length)]
    const date = pickDay()
    const created = days[Math.max(0, days.indexOf(date) - 3)]
    const ghost: Vendor = { id: 'V777', name: 'Servicios Integrales Omega', rfc: 'XAXX010101000', registeredOn: created, bankAccount: emp.account, inMaster: false, category: CATS.consulting, typical: [0, 0] }
    vendors.push(ghost)
    const amount = money(42000 + rng() * 7000)
    anomalies.push({
      tx: { ...makeNormal(date), vendorId: ghost.id, category: CATS.consulting, concept: { es: 'Consultoría estratégica', en: 'Strategy consulting' }, amount, requestedBy: emp.name, approvedBy: emp.name, poNumber: null, invoice: { number: `A-${Math.floor(rng() * 90) + 10}`, date, amount, cfdiUuid: uuid(rng) } },
      t: {
        type: 'suspiciousVendor',
        verdict: 'irregular',
        explanation: {
          es: `Proveedor dado de alta 3 días antes, fuera del padrón autorizado, con RFC genérico y cuenta bancaria idéntica a la de ${emp.name}, quien además solicitó y aprobó el pago. Patrón de «proveedor fantasma».`,
          en: `Vendor created 3 days earlier, outside the approved master file, with a generic RFC and a bank account identical to ${emp.name}’s, who also requested and approved the payment. "Ghost vendor" pattern.`,
        },
      },
    })
  }
  // 7. Document inconsistency: invoice amount ≠ payment
  {
    const base = makeNormal(pickDay())
    const paid = money(base.amount * (1.12 + rng() * 0.1))
    anomalies.push({
      tx: { ...base, amount: paid },
      t: {
        type: 'docInconsistency',
        verdict: 'irregular',
        explanation: {
          es: `Se pagó ${paid.toLocaleString()} pero el CFDI ampara ${base.invoice.amount.toLocaleString()}. La diferencia no tiene soporte documental.`,
          en: `${paid.toLocaleString()} was paid but the CFDI supports ${base.invoice.amount.toLocaleString()}. The difference has no documentary support.`,
        },
      },
    })
  }
  // 8. Document inconsistency: missing CFDI and invoice dated after payment
  {
    const base = makeNormal(pickDay())
    const later = days[Math.min(days.length - 1, days.indexOf(base.date) + 6)]
    anomalies.push({
      tx: { ...base, invoice: { ...base.invoice, date: later, cfdiUuid: null } },
      t: {
        type: 'docInconsistency',
        verdict: 'irregular',
        explanation: {
          es: 'El pago carece de folio fiscal (UUID) del CFDI y la factura tiene fecha posterior al pago: no hay comprobante válido al momento de pagar.',
          en: 'The payment lacks the CFDI fiscal folio (UUID) and the invoice is dated after the payment: there was no valid voucher when paying.',
        },
      },
    })
  }
  // 9. Split payments just below the approval threshold
  {
    const v = vendors[3]
    const date = pickDay()
    const amount = money(49000 + Math.floor(rng() * 900))
    const requester = STAFF[Math.floor(rng() * STAFF.length)]
    for (let k = 0; k < 3; k++) {
      anomalies.push({
        tx: {
          ...makeNormal(date),
          vendorId: v.id,
          category: v.category,
          concept: { es: 'Compra de materiales', en: 'Purchase of materials' },
          amount,
          requestedBy: requester,
          approvedBy: 'Gerente de Compras',
          time: `${pad(11 + k)}:${pad(Math.floor(rng() * 60))}`,
          invoice: { number: `F-${invSeq++}`, date, amount, cfdiUuid: uuid(rng) },
        },
        t: {
          type: 'splitPayment',
          verdict: 'irregular',
          explanation: {
            es: 'Tres pagos el mismo día al mismo proveedor, cada uno justo debajo del límite de $50,000 que exige aprobación del Director de Finanzas. Patrón de fraccionamiento para evadir el control.',
            en: 'Three same-day payments to the same vendor, each just below the $50,000 limit requiring CFO approval. Splitting pattern to evade the control.',
          },
        },
      })
    }
  }

  const all = fisherYates([...txs, ...anomalies.map((a) => a.tx)], rng)
  const anomalySet = new Map(anomalies.map((a) => [a.tx, a.t]))
  const sorted = all.sort((a, b) => (a.date + a.time).localeCompare(b.date + b.time))
  sorted.forEach((tx, i) => {
    tx.id = `T${pad(i + 1, 3)}`
    const t = anomalySet.get(tx)
    if (t) truth[tx.id] = t
  })

  return {
    seed,
    company: 'Distribuidora Pacífico Norte, S.A. de C.V. (ficticia)',
    period: { es: 'Marzo de 2026', en: 'March 2026' },
    approvalThreshold: 50000,
    vendors,
    employeeAccounts,
    txs: sorted,
    truth,
  }
}

export interface Flag {
  type: AnomalyType
  conclusion: Verdict | null
}

export interface FraudScore {
  truePositives: string[]
  falsePositives: string[]
  falseNegatives: string[]
  correctConclusions: number
  correctTypes: number
  precision: number
  recall: number
  score: number // 0..1
  points: number
  maxPoints: number
}

/**
 * Scoring: +10 per correct alert, +5 per correct conclusion (irregular vs explained),
 * +2 per correctly typed alert, −5 per false positive. Normalised to [0, 1].
 */
export function scoreCase(c: FraudCase, flags: Record<string, Flag>): FraudScore {
  const anomalyIds = Object.keys(c.truth)
  const flagged = Object.keys(flags).filter((id) => c.txs.some((t) => t.id === id))
  const tp = flagged.filter((id) => c.truth[id])
  const fp = flagged.filter((id) => !c.truth[id])
  const fn = anomalyIds.filter((id) => !flags[id])
  let concl = 0
  let types = 0
  for (const id of tp) {
    if (flags[id].conclusion === c.truth[id].verdict) concl++
    if (flags[id].type === c.truth[id].type) types++
  }
  const maxPoints = anomalyIds.length * 17
  const points = tp.length * 10 + concl * 5 + types * 2 - fp.length * 5
  return {
    truePositives: tp,
    falsePositives: fp,
    falseNegatives: fn,
    correctConclusions: concl,
    correctTypes: types,
    precision: flagged.length ? tp.length / flagged.length : 0,
    recall: anomalyIds.length ? tp.length / anomalyIds.length : 0,
    score: Math.max(0, Math.min(1, points / maxPoints)),
    points,
    maxPoints,
  }
}

/** Analytical helpers available to the learner (they do not reveal the answer key). */
export function analytics(c: FraudCase) {
  const keyOf = (t: FraudTx) => `${t.vendorId}|${t.invoice.number}|${t.amount}`
  const seen = new Map<string, string[]>()
  for (const t of c.txs) seen.set(keyOf(t), [...(seen.get(keyOf(t)) ?? []), t.id])
  const sameInvoice = [...seen.values()].filter((ids) => ids.length > 1)
  const offHours = c.txs.filter((t) => t.weekday === 0 || t.weekday === 6 || Number(t.time.slice(0, 2)) < 7 || Number(t.time.slice(0, 2)) >= 21).map((t) => t.id)
  const nearThreshold = c.txs.filter((t) => t.amount >= c.approvalThreshold * 0.95 && t.amount < c.approvalThreshold).map((t) => t.id)
  const vendorOutOfRange = c.txs
    .filter((t) => {
      const v = c.vendors.find((x) => x.id === t.vendorId)
      return v && v.typical[1] > 0 && t.amount > v.typical[1] * 2
    })
    .map((t) => t.id)
  const notInMaster = c.txs.filter((t) => !c.vendors.find((v) => v.id === t.vendorId)?.inMaster).map((t) => t.id)
  const docIssues = c.txs.filter((t) => !t.invoice.cfdiUuid || Math.abs(t.invoice.amount - t.amount) > 0.005 || t.invoice.date > t.date).map((t) => t.id)
  return { sameInvoice, offHours, nearThreshold, vendorOutOfRange, notInMaster, docIssues }
}
