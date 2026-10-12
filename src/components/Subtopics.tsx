import { cx } from './ui'
import type { SubtopicState } from '../lib/selectors'

const SQUARE: Record<SubtopicState, string> = {
  done: 'bg-money-500',
  next: 'border-2 border-electric-500 bg-white dark:bg-navy-900',
  todo: 'bg-navy-200 dark:bg-navy-700',
}

export function SubtopicSquares({ states, size = 'sm', label }: { states: SubtopicState[]; size?: 'sm' | 'xs'; label: string }) {
  return (
    <span className="flex shrink-0 gap-1" role="img" aria-label={label}>
      {states.map((st, i) => (
        <span key={i} className={cx('rounded box-border', size === 'sm' ? 'h-3.5 w-3.5' : 'h-2.5 w-2.5', SQUARE[st])} />
      ))}
    </span>
  )
}

export function SubtopicLegend({ tx }: { tx: (es: string, en: string) => string }) {
  const item = (cls: string, text: string) => (
    <span className="flex items-center gap-1.5">
      <span className={cx('h-3 w-3 rounded box-border', cls)} />
      {text}
    </span>
  )
  return (
    <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs font-semibold text-navy-500 dark:text-navy-300">
      {item(SQUARE.done, tx('Dominado', 'Mastered'))}
      {item(SQUARE.next, tx('Siguiente', 'Next'))}
      {item(SQUARE.todo, tx('Por hacer', 'To do'))}
    </div>
  )
}
