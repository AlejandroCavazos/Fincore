import type { Lang, Tolerance, Unit } from '../types'

/**
 * Parses a number typed by a learner. Accepts "$12,500.50", "12500.5", "12.5%",
 * "-1,000", " 3 ". A single comma with 1–2 trailing digits and no dot is read as a
 * decimal comma ("12,5" → 12.5). Returns null when the text is not a number.
 */
export function parseNumber(raw: string): number | null {
  if (raw == null) return null
  let s = String(raw).trim().replace(/[\s$%]/g, '').replace(/^MXN|MXN$/i, '')
  if (s === '' || s === '-' || s === '+') return null
  if (/^[+-]?\d+,\d{1,2}$/.test(s)) s = s.replace(',', '.')
  else s = s.replace(/,/g, '')
  if (!/^[+-]?(\d+\.?\d*|\.\d+)(e[+-]?\d+)?$/i.test(s)) return null
  const n = Number(s)
  return Number.isFinite(n) ? n : null
}

/**
 * Tolerance rule: accepted when |x − answer| ≤ max(abs, rel·|answer|).
 * When no tolerance is given a tiny epsilon (1e-9) is used.
 */
export function withinTolerance(value: number, answer: number, tol: Tolerance = {}): boolean {
  const abs = tol.abs ?? 0
  const rel = tol.rel ?? 0
  const allowed = Math.max(abs, rel * Math.abs(answer), 1e-9)
  return Math.abs(value - answer) <= allowed + 1e-12
}

/** Round half away from zero to `decimals`. */
export function round(value: number, decimals = 2): number {
  const f = 10 ** decimals
  return (Math.sign(value) * Math.round(Math.abs(value) * f + Number.EPSILON)) / f
}

const locale = (lang: Lang) => (lang === 'es' ? 'es-MX' : 'en-US')

export function fmtNumber(n: number, lang: Lang, decimals = 2): string {
  return n.toLocaleString(locale(lang), { minimumFractionDigits: decimals, maximumFractionDigits: decimals })
}

export function fmtMoney(n: number, lang: Lang, decimals = 2): string {
  const s = fmtNumber(Math.abs(n), lang, decimals)
  return `${n < 0 ? '-' : ''}$${s}`
}

export function fmtPct(fraction: number, lang: Lang, decimals = 2): string {
  return `${fmtNumber(fraction * 100, lang, decimals)} %`
}

export function fmtUnit(n: number, unit: Unit, lang: Lang, decimals = 2): string {
  switch (unit) {
    case 'MXN':
      return fmtMoney(n, lang, decimals)
    case '%':
      return `${fmtNumber(n, lang, decimals)} %`
    case 'years':
      return `${fmtNumber(n, lang, decimals)} ${lang === 'es' ? 'años' : 'years'}`
    case 'periods':
      return `${fmtNumber(n, lang, decimals)} ${lang === 'es' ? 'periodos' : 'periods'}`
    case 'units':
      return `${fmtNumber(n, lang, decimals)} ${lang === 'es' ? 'unidades' : 'units'}`
    case 'times':
      return `${fmtNumber(n, lang, decimals)}x`
    case 'days':
      return `${fmtNumber(n, lang, decimals)} ${lang === 'es' ? 'días' : 'days'}`
    default:
      return fmtNumber(n, lang, decimals)
  }
}

export function unitLabel(unit: Unit, lang: Lang): string {
  const es: Record<Unit, string> = { MXN: 'pesos (MXN)', '%': '%', years: 'años', periods: 'periodos', units: 'unidades', times: 'veces', days: 'días', none: '' }
  const en: Record<Unit, string> = { MXN: 'pesos (MXN)', '%': '%', years: 'years', periods: 'periods', units: 'units', times: 'times', days: 'days', none: '' }
  return (lang === 'es' ? es : en)[unit]
}
