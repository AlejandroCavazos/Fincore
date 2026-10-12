import type { L, LevelId } from '../types'

export type AreaId = 'contabilidad' | 'costos' | 'finanzas' | 'fiscal'

export interface Area {
  id: AreaId
  title: L
  description: L
  /** Curriculum levels whose lessons form the topics of this area, easiest first. */
  levels: LevelId[]
  /** The learner's business in this area: it grows with each mastered topic. */
  business: L
}

export const AREAS: Area[] = [
  {
    id: 'contabilidad',
    title: { es: 'Contabilidad', en: 'Accounting' },
    description: { es: 'De cero a estados financieros', en: 'From zero to financial statements' },
    levels: [1, 2],
    business: { es: 'Tu cafetería', en: 'Your coffee shop' },
  },
  {
    id: 'costos',
    title: { es: 'Costos', en: 'Cost accounting' },
    description: { es: 'Costeo, presupuestos y punto de equilibrio', en: 'Costing, budgets and break-even' },
    levels: [3],
    business: { es: 'Tu taller', en: 'Your workshop' },
  },
  {
    id: 'finanzas',
    title: { es: 'Finanzas', en: 'Finance' },
    description: { es: 'Valor del dinero, inversión y valuación', en: 'Time value of money, investing and valuation' },
    levels: [4, 6],
    business: { es: 'Tu fondo de inversión', en: 'Your investment fund' },
  },
  {
    id: 'fiscal',
    title: { es: 'Fiscal y auditoría', en: 'Tax and audit' },
    description: { es: 'ISR, IVA, CFDI y auditoría', en: 'Income tax, VAT, e-invoicing and audit' },
    levels: [5],
    business: { es: 'Tu despacho contable', en: 'Your accounting firm' },
  },
]

export const getArea = (id: string) => AREAS.find((a) => a.id === id)
export const areaOfLevel = (level: number) => AREAS.find((a) => a.levels.includes(level as LevelId)) ?? AREAS[0]

/** Difficulty label shown for each curriculum level inside its area. */
export const LEVEL_STAGE: Record<number, L> = {
  1: { es: 'Básico', en: 'Basic' },
  2: { es: 'Intermedio', en: 'Intermediate' },
  3: { es: 'Intermedio', en: 'Intermediate' },
  4: { es: 'Intermedio', en: 'Intermediate' },
  5: { es: 'Avanzado', en: 'Advanced' },
  6: { es: 'Avanzado', en: 'Advanced' },
}

/** Value the learner's business starts at and gains per mastered topic (MXN, illustrative). */
export const BUSINESS_BASE = 10000
export const BUSINESS_PER_TOPIC = 1500
