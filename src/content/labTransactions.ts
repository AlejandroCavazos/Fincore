import type { JournalLine, L } from '../types'

export type LabCategory = 'financing' | 'purchases' | 'sales' | 'collections' | 'payments' | 'assets' | 'expenses' | 'adjustments'

export interface LabTransaction {
  id: string
  date: string
  category: LabCategory
  description: L
  hint: L
  expected: JournalLine[]
  explanation: L
}

export const LAB_CATEGORIES: Record<LabCategory, L> = {
  financing: { es: 'Financiamiento', en: 'Financing' },
  purchases: { es: 'Compras', en: 'Purchases' },
  sales: { es: 'Ventas', en: 'Sales' },
  collections: { es: 'Cobros', en: 'Collections' },
  payments: { es: 'Pagos', en: 'Payments' },
  assets: { es: 'Adquisición de activos', en: 'Asset acquisitions' },
  expenses: { es: 'Gastos', en: 'Expenses' },
  adjustments: { es: 'Ajustes contables', en: 'Adjusting entries' },
}

const D = (accountCode: string, amount: number): JournalLine => ({ accountCode, side: 'D', amount })
const C = (accountCode: string, amount: number): JournalLine => ({ accountCode, side: 'C', amount })

/**
 * Fictitious company: Comercializadora Aurora, S.A. de C.V. (January 2026).
 * Perpetual inventory system. Transactions are meant to be recorded in order, so
 * the ledger and trial balance build up like a real month.
 */
export const LAB_COMPANY: L = {
  es: 'Comercializadora Aurora, S.A. de C.V. (empresa ficticia) — enero de 2026. Sistema de inventarios perpetuos.',
  en: 'Comercializadora Aurora, S.A. de C.V. (fictitious company) — January 2026. Perpetual inventory system.',
}

export const LAB_TRANSACTIONS: LabTransaction[] = [
  {
    id: 'TX01',
    date: '2026-01-02',
    category: 'financing',
    description: { es: 'Los socios aportan $500,000 de capital, depositados en la cuenta bancaria de la empresa.', en: 'The shareholders contribute $500,000 of capital, deposited in the company bank account.' },
    hint: { es: 'Aumenta un activo (dinero en el banco) y aumenta el capital contable.', en: 'An asset (cash at bank) increases and equity increases.' },
    expected: [D('1102', 500000), C('3101', 500000)],
    explanation: { es: 'Bancos (activo) aumenta → se carga. Capital social (capital contable) aumenta → se abona.', en: 'Bank (asset) increases → debit. Share capital (equity) increases → credit.' },
  },
  {
    id: 'TX02',
    date: '2026-01-03',
    category: 'financing',
    description: { es: 'Se obtiene un préstamo bancario a 3 años por $200,000 (tasa anual 12 %), depositado en bancos.', en: 'A 3-year bank loan of $200,000 (12 % annual rate) is obtained and deposited.' },
    hint: { es: 'Recibes efectivo y contraes una obligación a largo plazo.', en: 'You receive cash and take on a long-term obligation.' },
    expected: [D('1102', 200000), C('2201', 200000)],
    explanation: { es: 'Bancos aumenta (cargo). El préstamo es un pasivo a largo plazo que aumenta (abono). La tasa no se registra hoy: los intereses se reconocen conforme se devengan.', en: 'Bank increases (debit). The loan is a long-term liability that increases (credit). Interest is not recorded today; it is recognised as it accrues.' },
  },
  {
    id: 'TX03',
    date: '2026-01-05',
    category: 'purchases',
    description: { es: 'Compra de mercancía de contado por $50,000 más IVA al 16 %, pagada por transferencia.', en: 'Cash purchase of merchandise for $50,000 plus 16 % VAT, paid by bank transfer.' },
    hint: { es: 'El IVA pagado en una compra efectivamente pagada es IVA acreditable (activo).', en: 'VAT paid on a purchase that has been paid is creditable input VAT (asset).' },
    expected: [D('1108', 50000), D('1109', 8000), C('1102', 58000)],
    explanation: { es: 'Inventarios + $50,000 (cargo); IVA acreditable = 50,000 × 16 % = $8,000 (cargo); Bancos disminuye por el total pagado $58,000 (abono).', en: 'Inventory + $50,000 (debit); input VAT = 50,000 × 16 % = $8,000 (debit); Bank decreases by the total paid $58,000 (credit).' },
  },
  {
    id: 'TX04',
    date: '2026-01-07',
    category: 'purchases',
    description: { es: 'Compra de mercancía a crédito por $80,000 (para simplificar, sin IVA).', en: 'Purchase of merchandise on credit for $80,000 (no VAT, for simplicity).' },
    hint: { es: 'No sale dinero: surge una deuda con el proveedor.', en: 'No cash leaves: a debt to the supplier arises.' },
    expected: [D('1108', 80000), C('2101', 80000)],
    explanation: { es: 'Inventarios aumenta (cargo) y Proveedores, un pasivo, aumenta (abono).', en: 'Inventory increases (debit) and Accounts payable, a liability, increases (credit).' },
  },
  {
    id: 'TX05',
    date: '2026-01-10',
    category: 'sales',
    description: {
      es: 'Venta de contado por $60,000 más IVA al 16 %, cobrada por transferencia. La mercancía vendida costó $36,000 (inventarios perpetuos).',
      en: 'Cash sale for $60,000 plus 16 % VAT, collected by transfer. The goods sold cost $36,000 (perpetual inventory).',
    },
    hint: { es: 'Son dos registros: el ingreso (con su IVA trasladado) y el costo de lo vendido.', en: 'Two records: the revenue (with its output VAT) and the cost of what was sold.' },
    expected: [D('1102', 69600), C('4101', 60000), C('2104', 9600), D('5101', 36000), C('1108', 36000)],
    explanation: {
      es: 'Bancos + $69,600 (cargo); Ventas $60,000 e IVA trasladado $9,600 (abonos). Con inventarios perpetuos: Costo de ventas $36,000 (cargo) e Inventarios − $36,000 (abono). Cargos = abonos = $105,600.',
      en: 'Bank + $69,600 (debit); Sales $60,000 and output VAT $9,600 (credits). With perpetual inventory: COGS $36,000 (debit) and Inventory − $36,000 (credit). Debits = credits = $105,600.',
    },
  },
  {
    id: 'TX06',
    date: '2026-01-12',
    category: 'sales',
    description: { es: 'Venta a crédito por $40,000 (sin IVA, para simplificar). El costo de la mercancía fue $24,000.', en: 'Credit sale for $40,000 (no VAT, for simplicity). The goods cost $24,000.' },
    hint: { es: 'Surge un derecho de cobro y se reconoce el costo.', en: 'A receivable arises and the cost is recognised.' },
    expected: [D('1104', 40000), C('4101', 40000), D('5101', 24000), C('1108', 24000)],
    explanation: { es: 'Clientes (cargo) / Ventas (abono) por $40,000; Costo de ventas (cargo) / Inventarios (abono) por $24,000.', en: 'Accounts receivable (debit) / Sales (credit) for $40,000; COGS (debit) / Inventory (credit) for $24,000.' },
  },
  {
    id: 'TX07',
    date: '2026-01-15',
    category: 'collections',
    description: { es: 'Se cobran $25,000 a clientes por transferencia.', en: '$25,000 is collected from customers by transfer.' },
    hint: { es: 'Un activo se transforma en otro activo.', en: 'One asset turns into another asset.' },
    expected: [D('1102', 25000), C('1104', 25000)],
    explanation: { es: 'Bancos aumenta (cargo) y Clientes disminuye (abono). El cobro no es un ingreso: la venta ya se reconoció.', en: 'Bank increases (debit) and Receivables decrease (credit). Collection is not revenue: the sale was already recognised.' },
  },
  {
    id: 'TX08',
    date: '2026-01-16',
    category: 'financing',
    description: { es: 'Un cliente entrega un anticipo de $15,000 por mercancía que se entregará en febrero.', en: 'A customer pays a $15,000 advance for goods to be delivered in February.' },
    hint: { es: 'Aún no hay venta: la empresa debe entregar mercancía.', en: 'There is no sale yet: the company owes goods.' },
    expected: [D('1102', 15000), C('2107', 15000)],
    explanation: { es: 'Bancos aumenta (cargo). Anticipos de clientes es un pasivo (obligación de entregar), que aumenta (abono). No se reconoce ingreso hasta transferir el control de los bienes.', en: 'Bank increases (debit). Customer advances is a liability (obligation to deliver), which increases (credit). No revenue until control of the goods transfers.' },
  },
  {
    id: 'TX09',
    date: '2026-01-18',
    category: 'payments',
    description: { es: 'Se pagan $30,000 a proveedores por transferencia.', en: '$30,000 is paid to suppliers by transfer.' },
    hint: { es: 'Disminuye una deuda y disminuye el banco.', en: 'A debt decreases and the bank decreases.' },
    expected: [D('2101', 30000), C('1102', 30000)],
    explanation: { es: 'Proveedores (pasivo) disminuye → cargo. Bancos (activo) disminuye → abono.', en: 'Accounts payable (liability) decreases → debit. Bank (asset) decreases → credit.' },
  },
  {
    id: 'TX10',
    date: '2026-01-20',
    category: 'assets',
    description: { es: 'Compra de equipo de cómputo de contado por $45,000 (sin IVA, para simplificar).', en: 'Cash purchase of computer equipment for $45,000 (no VAT, for simplicity).' },
    hint: { es: 'Es un activo no circulante, no un gasto.', en: 'It is a non-current asset, not an expense.' },
    expected: [D('1205', 45000), C('1102', 45000)],
    explanation: { es: 'Equipo de cómputo aumenta (cargo); Bancos disminuye (abono). Se capitaliza porque generará beneficios por varios años; se depreciará.', en: 'Computer equipment increases (debit); Bank decreases (credit). It is capitalised because it will benefit several years; it will be depreciated.' },
  },
  {
    id: 'TX11',
    date: '2026-01-21',
    category: 'assets',
    description: { es: 'Compra de una camioneta de reparto por $300,000: se pagan $100,000 por transferencia y se firma un documento por pagar a 6 meses por el resto.', en: 'Purchase of a delivery van for $300,000: $100,000 paid by transfer and a 6-month note payable signed for the rest.' },
    hint: { es: 'Un cargo y dos abonos.', en: 'One debit and two credits.' },
    expected: [D('1204', 300000), C('1102', 100000), C('2103', 200000)],
    explanation: { es: 'Equipo de transporte + $300,000 (cargo). Bancos − $100,000 (abono) y Documentos por pagar + $200,000 (abono, pasivo a corto plazo).', en: 'Vehicles + $300,000 (debit). Bank − $100,000 (credit) and Notes payable + $200,000 (credit, short-term liability).' },
  },
  {
    id: 'TX12',
    date: '2026-01-22',
    category: 'payments',
    description: { es: 'Se paga por anticipado el seguro anual de la flotilla: $24,000 por transferencia (cobertura de enero a diciembre).', en: 'The annual fleet insurance is prepaid: $24,000 by transfer (coverage January–December).' },
    hint: { es: 'Es un derecho a recibir un servicio futuro.', en: 'It is a right to receive a future service.' },
    expected: [D('1110', 24000), C('1102', 24000)],
    explanation: { es: 'Pagos anticipados (activo) aumenta (cargo); Bancos disminuye (abono). El gasto se reconocerá mes a mes con un ajuste.', en: 'Prepaid expenses (asset) increase (debit); Bank decreases (credit). The expense is recognised monthly via an adjustment.' },
  },
  {
    id: 'TX13',
    date: '2026-01-25',
    category: 'expenses',
    description: { es: 'Se paga la renta del local de enero: $12,000 por transferencia.', en: 'January store rent of $12,000 is paid by transfer.' },
    hint: { es: 'El servicio ya se consumió en el periodo.', en: 'The service was consumed in the period.' },
    expected: [D('6102', 12000), C('1102', 12000)],
    explanation: { es: 'Renta (gasto) aumenta → cargo; Bancos disminuye → abono.', en: 'Rent expense increases → debit; Bank decreases → credit.' },
  },
  {
    id: 'TX14',
    date: '2026-01-26',
    category: 'expenses',
    description: { es: 'Se paga publicidad en redes sociales por $5,000 por transferencia.', en: '$5,000 of social media advertising is paid by transfer.' },
    hint: { es: 'Gasto de operación pagado.', en: 'An operating expense paid.' },
    expected: [D('6104', 5000), C('1102', 5000)],
    explanation: { es: 'Publicidad (gasto) se carga; Bancos se abona.', en: 'Advertising (expense) is debited; Bank is credited.' },
  },
  {
    id: 'TX15',
    date: '2026-01-30',
    category: 'expenses',
    description: { es: 'Se pagan sueldos de enero por $28,000 por transferencia (ignora retenciones y cuotas, para simplificar).', en: 'January salaries of $28,000 are paid by transfer (ignore withholdings and social security, for simplicity).' },
    hint: { es: 'Gasto devengado y pagado en el mismo periodo.', en: 'Expense incurred and paid in the same period.' },
    expected: [D('6101', 28000), C('1102', 28000)],
    explanation: { es: 'Sueldos y salarios (gasto) se carga; Bancos se abona.', en: 'Salaries (expense) debited; Bank credited.' },
  },
  {
    id: 'TX16',
    date: '2026-01-31',
    category: 'adjustments',
    description: { es: 'Ajuste: depreciación de enero del equipo de cómputo ($45,000, vida útil 3 años, sin valor residual, línea recta).', en: 'Adjustment: January depreciation of the computer equipment ($45,000, 3-year life, no residual value, straight-line).' },
    hint: { es: '45,000 ÷ 36 meses.', en: '45,000 ÷ 36 months.' },
    expected: [D('6105', 1250), C('1207', 1250)],
    explanation: { es: 'Depreciación mensual = 45,000 / 3 / 12 = $1,250. Gasto por depreciación (cargo) y Depreciación acumulada, cuenta complementaria de activo (abono).', en: 'Monthly depreciation = 45,000 / 3 / 12 = $1,250. Depreciation expense (debit) and Accumulated depreciation, a contra-asset (credit).' },
  },
  {
    id: 'TX17',
    date: '2026-01-31',
    category: 'adjustments',
    description: { es: 'Ajuste: se devenga un mes del seguro pagado por anticipado ($24,000 anuales).', en: 'Adjustment: one month of the prepaid insurance ($24,000 per year) expires.' },
    hint: { es: '24,000 ÷ 12.', en: '24,000 ÷ 12.' },
    expected: [D('6106', 2000), C('1110', 2000)],
    explanation: { es: 'Se consume 1/12 del seguro: $2,000. Gasto por seguros (cargo) y Pagos anticipados disminuye (abono).', en: '1/12 of the insurance is used: $2,000. Insurance expense (debit) and Prepaid expenses decrease (credit).' },
  },
  {
    id: 'TX18',
    date: '2026-01-31',
    category: 'adjustments',
    description: { es: 'Ajuste: intereses devengados y no pagados de enero sobre el préstamo de $200,000 al 12 % anual (un mes completo, para simplificar).', en: 'Adjustment: January interest accrued but unpaid on the $200,000 loan at 12 % per year (a full month, for simplicity).' },
    hint: { es: '200,000 × 12 % ÷ 12.', en: '200,000 × 12 % ÷ 12.' },
    expected: [D('7101', 2000), C('2108', 2000)],
    explanation: { es: 'Interés = 200,000 × 0.12 / 12 = $2,000. Gasto por intereses (cargo) e Intereses por pagar (abono). Base devengado: se reconoce aunque no se haya pagado.', en: 'Interest = 200,000 × 0.12 / 12 = $2,000. Interest expense (debit) and Interest payable (credit). Accrual basis: recognised even though unpaid.' },
  },
  {
    id: 'TX19',
    date: '2026-01-31',
    category: 'adjustments',
    description: { es: 'Ajuste: se estima incobrable el 5 % del saldo de Clientes, que es de $15,000.', en: 'Adjustment: 5 % of the $15,000 receivables balance is estimated to be uncollectible.' },
    hint: { es: 'Se usa una cuenta complementaria de activo, no se cancela Clientes directamente.', en: 'Use a contra-asset account; do not write off receivables directly.' },
    expected: [D('6107', 750), C('1105', 750)],
    explanation: { es: '15,000 × 5 % = $750. Gasto por cuentas incobrables (cargo) y Estimación para cuentas incobrables (abono).', en: '15,000 × 5 % = $750. Bad debt expense (debit) and Allowance for doubtful accounts (credit).' },
  },
  {
    id: 'TX20',
    date: '2026-01-31',
    category: 'adjustments',
    description: { es: 'Ajuste: al cierre se adeudan $6,000 de sueldos de los últimos días de enero, que se pagarán en febrero.', en: 'Adjustment: at month-end $6,000 of salaries for the last days of January is owed, to be paid in February.' },
    hint: { es: 'Gasto devengado no pagado.', en: 'Accrued, unpaid expense.' },
    expected: [D('6101', 6000), C('2106', 6000)],
    explanation: { es: 'Sueldos y salarios (gasto) se carga y Sueldos por pagar (pasivo) se abona.', en: 'Salaries expense debited and Salaries payable (liability) credited.' },
  },
]
