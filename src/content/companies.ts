import type { L } from '../types'

export interface CompanyYear {
  year: number
  revenue: number
  costOfSales: number
  opex: number
  da: number
  interest: number
  taxRate: number
  totalAssets: number
  totalLiabilities: number
  equity: number
  cash: number
  debt: number
  currentAssets: number
  currentLiabilities: number
  inventory: number
  capex: number
  deltaNwc: number
}

export interface DcfAssumptions {
  growth: number // annual revenue growth, years 1–5
  ebitMargin: number
  taxRate: number
  daPct: number // D&A as % of revenue
  capexPct: number // CapEx as % of revenue
  nwcPct: number // ΔNWC as % of revenue increase
  wacc: number
  terminalGrowth: number
}

export interface Company {
  id: string
  name: string
  sector: L
  description: L
  /** Figures in millions of MXN. */
  years: CompanyYear[]
  sharesMillions: number
  base: DcfAssumptions
}

/** Fictitious companies. Figures in millions of MXN. Any resemblance to real companies is coincidental. */
export const COMPANIES: Company[] = [
  {
    id: 'bajio',
    name: 'Alimentos del Bajío, S.A.B. (ficticia)',
    sector: { es: 'Consumo básico', en: 'Consumer staples' },
    description: {
      es: 'Productor de alimentos empacados, crecimiento estable y márgenes moderados.',
      en: 'Packaged-food producer with stable growth and moderate margins.',
    },
    sharesMillions: 500,
    years: [
      { year: 2023, revenue: 8200, costOfSales: 5330, opex: 1640, da: 300, interest: 180, taxRate: 0.3, totalAssets: 7600, totalLiabilities: 3900, equity: 3700, cash: 600, debt: 2000, currentAssets: 2900, currentLiabilities: 1500, inventory: 1100, capex: 420, deltaNwc: 60 },
      { year: 2024, revenue: 8900, costOfSales: 5740, opex: 1760, da: 320, interest: 190, taxRate: 0.3, totalAssets: 8100, totalLiabilities: 4000, equity: 4100, cash: 700, debt: 2050, currentAssets: 3150, currentLiabilities: 1550, inventory: 1180, capex: 450, deltaNwc: 70 },
      { year: 2025, revenue: 9650, costOfSales: 6180, opex: 1880, da: 345, interest: 200, taxRate: 0.3, totalAssets: 8700, totalLiabilities: 4150, equity: 4550, cash: 820, debt: 2100, currentAssets: 3450, currentLiabilities: 1620, inventory: 1260, capex: 480, deltaNwc: 75 },
    ],
    base: { growth: 0.06, ebitMargin: 0.165, taxRate: 0.3, daPct: 0.036, capexPct: 0.05, nwcPct: 0.1, wacc: 0.105, terminalGrowth: 0.035 },
  },
  {
    id: 'tecnonube',
    name: 'TecnoNube México, S.A.P.I. (ficticia)',
    sector: { es: 'Software y servicios en la nube', en: 'Software and cloud services' },
    description: {
      es: 'Empresa de software por suscripción en fuerte crecimiento; mayor riesgo y mayor WACC.',
      en: 'Fast-growing subscription software company; higher risk and higher WACC.',
    },
    sharesMillions: 120,
    years: [
      { year: 2023, revenue: 1200, costOfSales: 480, opex: 620, da: 90, interest: 40, taxRate: 0.3, totalAssets: 1500, totalLiabilities: 700, equity: 800, cash: 250, debt: 400, currentAssets: 600, currentLiabilities: 260, inventory: 0, capex: 160, deltaNwc: 30 },
      { year: 2024, revenue: 1680, costOfSales: 640, opex: 790, da: 120, interest: 45, taxRate: 0.3, totalAssets: 1900, totalLiabilities: 820, equity: 1080, cash: 320, debt: 450, currentAssets: 760, currentLiabilities: 310, inventory: 0, capex: 210, deltaNwc: 40 },
      { year: 2025, revenue: 2270, costOfSales: 840, opex: 1000, da: 150, interest: 50, taxRate: 0.3, totalAssets: 2400, totalLiabilities: 960, equity: 1440, cash: 420, debt: 500, currentAssets: 980, currentLiabilities: 380, inventory: 0, capex: 260, deltaNwc: 55 },
    ],
    base: { growth: 0.2, ebitMargin: 0.19, taxRate: 0.3, daPct: 0.065, capexPct: 0.11, nwcPct: 0.08, wacc: 0.13, terminalGrowth: 0.04 },
  },
]

export function derive(y: CompanyYear) {
  const grossProfit = y.revenue - y.costOfSales
  const ebit = grossProfit - y.opex
  const ebt = ebit - y.interest
  const tax = ebt > 0 ? ebt * y.taxRate : 0
  const netIncome = ebt - tax
  return { grossProfit, ebit, ebitda: ebit + y.da, ebt, tax, netIncome }
}
