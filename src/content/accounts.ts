import type { Account } from '../types'

const g = {
  ca: { es: 'Activo circulante', en: 'Current assets' },
  nca: { es: 'Activo no circulante', en: 'Non-current assets' },
  cl: { es: 'Pasivo a corto plazo', en: 'Current liabilities' },
  ncl: { es: 'Pasivo a largo plazo', en: 'Non-current liabilities' },
  eq: { es: 'Capital contable', en: 'Equity' },
  rev: { es: 'Ingresos', en: 'Revenue' },
  cos: { es: 'Costos', en: 'Cost of sales' },
  exp: { es: 'Gastos de operación', en: 'Operating expenses' },
  fin: { es: 'Resultado integral de financiamiento', en: 'Finance costs / income' },
  tax: { es: 'Impuestos a la utilidad', en: 'Income taxes' },
}

/**
 * Fictitious chart of accounts (catálogo de cuentas) used by the lab and the
 * journal exercises. Codes follow a simple 4-digit scheme:
 * 1xxx assets, 2xxx liabilities, 3xxx equity, 4xxx revenue, 5xxx costs, 6xxx expenses, 7xxx finance, 8xxx taxes.
 */
export const ACCOUNTS: Account[] = [
  { code: '1101', name: { es: 'Caja', en: 'Cash on hand' }, type: 'asset', nature: 'D', group: g.ca },
  { code: '1102', name: { es: 'Bancos', en: 'Bank' }, type: 'asset', nature: 'D', group: g.ca },
  { code: '1103', name: { es: 'Inversiones temporales', en: 'Short-term investments' }, type: 'asset', nature: 'D', group: g.ca },
  { code: '1104', name: { es: 'Clientes', en: 'Accounts receivable' }, type: 'asset', nature: 'D', group: g.ca },
  { code: '1105', name: { es: 'Estimación para cuentas incobrables', en: 'Allowance for doubtful accounts' }, type: 'contraAsset', nature: 'C', group: g.ca },
  { code: '1106', name: { es: 'Documentos por cobrar', en: 'Notes receivable' }, type: 'asset', nature: 'D', group: g.ca },
  { code: '1107', name: { es: 'Deudores diversos', en: 'Other receivables' }, type: 'asset', nature: 'D', group: g.ca },
  { code: '1108', name: { es: 'Inventarios', en: 'Inventory' }, type: 'asset', nature: 'D', group: g.ca },
  { code: '1109', name: { es: 'IVA acreditable', en: 'Input VAT (creditable)' }, type: 'asset', nature: 'D', group: g.ca },
  { code: '1110', name: { es: 'Pagos anticipados (seguros)', en: 'Prepaid expenses (insurance)' }, type: 'asset', nature: 'D', group: g.ca },
  { code: '1111', name: { es: 'Papelería y útiles', en: 'Office supplies' }, type: 'asset', nature: 'D', group: g.ca },
  { code: '1201', name: { es: 'Terrenos', en: 'Land' }, type: 'asset', nature: 'D', group: g.nca },
  { code: '1202', name: { es: 'Edificios', en: 'Buildings' }, type: 'asset', nature: 'D', group: g.nca },
  { code: '1203', name: { es: 'Mobiliario y equipo de oficina', en: 'Office furniture and equipment' }, type: 'asset', nature: 'D', group: g.nca },
  { code: '1204', name: { es: 'Equipo de transporte', en: 'Vehicles' }, type: 'asset', nature: 'D', group: g.nca },
  { code: '1205', name: { es: 'Equipo de cómputo', en: 'Computer equipment' }, type: 'asset', nature: 'D', group: g.nca },
  { code: '1206', name: { es: 'Maquinaria', en: 'Machinery' }, type: 'asset', nature: 'D', group: g.nca },
  { code: '1207', name: { es: 'Depreciación acumulada', en: 'Accumulated depreciation' }, type: 'contraAsset', nature: 'C', group: g.nca },
  { code: '1208', name: { es: 'Activo por derecho de uso', en: 'Right-of-use asset' }, type: 'asset', nature: 'D', group: g.nca },
  { code: '2101', name: { es: 'Proveedores', en: 'Accounts payable' }, type: 'liability', nature: 'C', group: g.cl },
  { code: '2102', name: { es: 'Acreedores diversos', en: 'Other payables' }, type: 'liability', nature: 'C', group: g.cl },
  { code: '2103', name: { es: 'Documentos por pagar', en: 'Notes payable' }, type: 'liability', nature: 'C', group: g.cl },
  { code: '2104', name: { es: 'IVA trasladado', en: 'Output VAT' }, type: 'liability', nature: 'C', group: g.cl },
  { code: '2105', name: { es: 'Impuestos por pagar', en: 'Taxes payable' }, type: 'liability', nature: 'C', group: g.cl },
  { code: '2106', name: { es: 'Sueldos por pagar', en: 'Salaries payable' }, type: 'liability', nature: 'C', group: g.cl },
  { code: '2107', name: { es: 'Anticipos de clientes', en: 'Customer advances (unearned revenue)' }, type: 'liability', nature: 'C', group: g.cl },
  { code: '2108', name: { es: 'Intereses por pagar', en: 'Interest payable' }, type: 'liability', nature: 'C', group: g.cl },
  { code: '2109', name: { es: 'Provisiones', en: 'Provisions' }, type: 'liability', nature: 'C', group: g.cl },
  { code: '2201', name: { es: 'Préstamos bancarios a largo plazo', en: 'Long-term bank loans' }, type: 'liability', nature: 'C', group: g.ncl },
  { code: '2202', name: { es: 'Pasivo por arrendamiento', en: 'Lease liability' }, type: 'liability', nature: 'C', group: g.ncl },
  { code: '3101', name: { es: 'Capital social', en: 'Share capital' }, type: 'equity', nature: 'C', group: g.eq },
  { code: '3102', name: { es: 'Utilidades retenidas', en: 'Retained earnings' }, type: 'equity', nature: 'C', group: g.eq },
  { code: '3103', name: { es: 'Utilidad (pérdida) del ejercicio', en: 'Profit (loss) for the year' }, type: 'equity', nature: 'C', group: g.eq },
  { code: '3104', name: { es: 'Dividendos decretados', en: 'Dividends declared' }, type: 'equity', nature: 'D', group: g.eq },
  { code: '4101', name: { es: 'Ventas', en: 'Sales' }, type: 'revenue', nature: 'C', group: g.rev },
  { code: '4102', name: { es: 'Ingresos por servicios', en: 'Service revenue' }, type: 'revenue', nature: 'C', group: g.rev },
  { code: '4103', name: { es: 'Devoluciones sobre ventas', en: 'Sales returns' }, type: 'revenue', nature: 'D', group: g.rev },
  { code: '5101', name: { es: 'Costo de ventas', en: 'Cost of goods sold' }, type: 'expense', nature: 'D', group: g.cos },
  { code: '6101', name: { es: 'Sueldos y salarios', en: 'Salaries and wages' }, type: 'expense', nature: 'D', group: g.exp },
  { code: '6102', name: { es: 'Renta', en: 'Rent expense' }, type: 'expense', nature: 'D', group: g.exp },
  { code: '6103', name: { es: 'Luz, agua y teléfono', en: 'Utilities' }, type: 'expense', nature: 'D', group: g.exp },
  { code: '6104', name: { es: 'Publicidad', en: 'Advertising' }, type: 'expense', nature: 'D', group: g.exp },
  { code: '6105', name: { es: 'Gasto por depreciación', en: 'Depreciation expense' }, type: 'expense', nature: 'D', group: g.exp },
  { code: '6106', name: { es: 'Gasto por seguros', en: 'Insurance expense' }, type: 'expense', nature: 'D', group: g.exp },
  { code: '6107', name: { es: 'Gasto por cuentas incobrables', en: 'Bad debt expense' }, type: 'expense', nature: 'D', group: g.exp },
  { code: '6108', name: { es: 'Papelería consumida', en: 'Supplies expense' }, type: 'expense', nature: 'D', group: g.exp },
  { code: '6109', name: { es: 'Gasto por provisiones', en: 'Provision expense' }, type: 'expense', nature: 'D', group: g.exp },
  { code: '7101', name: { es: 'Gasto por intereses', en: 'Interest expense' }, type: 'expense', nature: 'D', group: g.fin },
  { code: '7102', name: { es: 'Ingreso por intereses', en: 'Interest income' }, type: 'revenue', nature: 'C', group: g.fin },
  { code: '8101', name: { es: 'ISR del ejercicio', en: 'Income tax expense' }, type: 'expense', nature: 'D', group: g.tax },
]

const byCode = new Map(ACCOUNTS.map((a) => [a.code, a]))

export function getAccount(code: string): Account | undefined {
  return byCode.get(code)
}
