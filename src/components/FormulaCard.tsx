import { Calculator } from 'lucide-react'
import { Card, Rich } from './ui'
import { useI18n } from '../state/store'
import type { FormulaGuide } from '../types'

/** A formula explained for beginners: symbols, steps, a solved example and the usual mistake. */
export function FormulaCard({ f }: { f: FormulaGuide }) {
  const { t, tx } = useI18n()
  const label = 'mb-1 text-xs font-bold uppercase tracking-wider text-electric-600 dark:text-electric-300'
  return (
    <Card className="space-y-3">
      <h3 className="flex items-center gap-2 font-semibold text-navy-900 dark:text-white">
        <Calculator className="h-5 w-5 text-electric-500" /> {t(f.name)}
      </h3>
      <div className="overflow-x-auto whitespace-pre-wrap break-words rounded-xl bg-navy-900 px-4 py-3 font-mono text-sm text-electric-300 dark:bg-navy-950">{f.expression}</div>
      <div>
        <p className={label}>{tx('Qué significa cada parte', 'What each part means')}</p>
        <ul className="space-y-1 text-[15px] text-navy-700 dark:text-navy-200">
          {f.variables.map((v, k) => (
            <li key={k}>
              <span className="font-mono font-semibold text-navy-900 dark:text-white">{v.symbol}</span> = <Rich text={t(v.meaning)} />
            </li>
          ))}
        </ul>
      </div>
      <div>
        <p className={label}>{tx('Cómo usarla paso a paso', 'How to use it step by step')}</p>
        <ol className="list-decimal space-y-1 pl-5 text-[15px] text-navy-700 dark:text-navy-200">
          {f.steps.map((s, k) => (
            <li key={k}>
              <Rich text={t(s)} />
            </li>
          ))}
        </ol>
      </div>
      <div className="rounded-xl bg-electric-50 p-3 text-[15px] text-navy-700 dark:bg-electric-500/10 dark:text-navy-200">
        <p className={label}>{tx('Ejemplo', 'Example')}</p>
        <p className="whitespace-pre-line">
          <Rich text={t(f.example)} />
        </p>
      </div>
      {f.interpret && (
        <p className="text-[15px] text-navy-700 dark:text-navy-200">
          <span className="font-semibold">{tx('Cómo leer el resultado: ', 'How to read the result: ')}</span>
          <Rich text={t(f.interpret)} />
        </p>
      )}
      {f.mistake && (
        <p className="rounded-xl bg-amber-50 p-3 text-[15px] text-navy-700 dark:bg-amber-500/10 dark:text-navy-200">
          <span className="font-semibold">{tx('Error común: ', 'Common mistake: ')}</span>
          <Rich text={t(f.mistake)} />
        </p>
      )}
    </Card>
  )
}
