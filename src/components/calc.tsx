import type { ReactNode } from 'react'
import { parseNumber } from '../lib/numbers'
import { Card } from './ui'

/** Parses a field: returns number or an error key. */
export function num(raw: string, opts: { min?: number; max?: number; integer?: boolean; required?: boolean } = {}): { value: number | null; error: 'required' | 'nan' | 'min' | 'max' | 'int' | null } {
  if (raw.trim() === '') return { value: null, error: opts.required === false ? null : 'required' }
  const v = parseNumber(raw)
  if (v === null) return { value: null, error: 'nan' }
  if (opts.integer && !Number.isInteger(v)) return { value: null, error: 'int' }
  if (opts.min !== undefined && v < opts.min) return { value: null, error: 'min' }
  if (opts.max !== undefined && v > opts.max) return { value: null, error: 'max' }
  return { value: v, error: null }
}

export function errText(e: ReturnType<typeof num>['error'], tx: (es: string, en: string) => string, bounds?: { min?: number; max?: number }): string | null {
  switch (e) {
    case 'required':
      return tx('Campo obligatorio', 'Required field')
    case 'nan':
      return tx('Escribe un número válido', 'Enter a valid number')
    case 'min':
      return tx(`Debe ser ≥ ${bounds?.min}`, `Must be ≥ ${bounds?.min}`)
    case 'max':
      return tx(`Debe ser ≤ ${bounds?.max}`, `Must be ≤ ${bounds?.max}`)
    case 'int':
      return tx('Debe ser un número entero', 'Must be a whole number')
    default:
      return null
  }
}

export function ResultBox({ label, value, testId, tone = 'electric' }: { label: string; value: ReactNode; testId?: string; tone?: 'electric' | 'money' | 'red' }) {
  const c = tone === 'money' ? 'text-money-600 dark:text-money-300' : tone === 'red' ? 'text-red-600 dark:text-red-400' : 'text-electric-600 dark:text-electric-300'
  return (
    <div className="rounded-xl bg-navy-50 p-3 dark:bg-navy-950">
      <div className="text-xs text-navy-500 dark:text-navy-300">{label}</div>
      <div className={`tabular text-xl font-bold ${c}`} data-testid={testId}>
        {value}
      </div>
    </div>
  )
}

export function FormulaBox({ children }: { children: ReactNode }) {
  return <div className="overflow-x-auto whitespace-pre rounded-xl bg-navy-900 px-4 py-3 font-mono text-sm text-electric-300 dark:bg-navy-950">{children}</div>
}

export function Interpretation({ children, title }: { children: ReactNode; title: string }) {
  return (
    <Card className="border-l-4 border-electric-500 text-sm text-navy-700 dark:text-navy-200">
      <p className="mb-1 text-xs font-bold uppercase tracking-wider text-electric-600 dark:text-electric-300">{title}</p>
      {children}
    </Card>
  )
}
