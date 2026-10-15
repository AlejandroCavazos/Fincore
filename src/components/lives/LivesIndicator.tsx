import { useEffect, useRef, useState } from 'react'
import { Heart, Infinity as InfinityIcon } from 'lucide-react'
import { hms, useLives } from '../../state/lives'
import { cx } from '../ui'
import { planRule } from './text'

/** Heart counter for the top bar: "3/5", countdown and plan rules on hover or tap. */
export function LivesIndicator({ className }: { className?: string }) {
  const lv = useLives()
  const [hover, setHover] = useState(false)
  const [pinned, setPinned] = useState(false)
  const open = hover || pinned
  const [anim, setAnim] = useState<'lose' | 'gain' | null>(null)
  const prev = useRef(lv.s.lives)
  const box = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const before = prev.current
    prev.current = lv.s.lives
    if (lv.unlimited || before === lv.s.lives) return
    setAnim(lv.s.lives < before ? 'lose' : 'gain')
    const id = window.setTimeout(() => setAnim(null), 650)
    return () => window.clearTimeout(id)
  }, [lv.s.lives, lv.unlimited])

  useEffect(() => {
    const reset = () => {
      setPinned(false)
      setHover(false)
    }
    window.addEventListener('hashchange', reset)
    return () => window.removeEventListener('hashchange', reset)
  }, [])

  useEffect(() => {
    if (!open) return
    const close = (e: PointerEvent) => {
      if (box.current?.contains(e.target as Node)) return
      setPinned(false)
      setHover(false)
    }
    document.addEventListener('pointerdown', close)
    return () => document.removeEventListener('pointerdown', close)
  }, [open])

  if (lv.unlimited)
    return (
      <span data-testid="lives" className={cx('inline-flex items-center gap-1 rounded-full bg-red-500/10 px-2.5 py-1 text-sm font-bold text-red-600 dark:text-red-300', className)} title="Vidas ilimitadas">
        <Heart className="h-4 w-4 fill-current" />
        <InfinityIcon className="h-4 w-4" aria-hidden />
        <span className="sr-only sm:not-sr-only">Ilimitadas</span>
      </span>
    )

  const empty = lv.s.lives === 0
  return (
    <div ref={box} className={cx('relative', className)} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
      <button
        type="button"
        data-testid="lives"
        aria-expanded={open}
        aria-label={`Vidas: ${lv.s.lives} de ${lv.max}`}
        onClick={() => setPinned((o) => !o)}
        className={cx('tabular inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-sm font-bold', empty ? 'bg-navy-100 text-navy-500 dark:bg-navy-800 dark:text-navy-300' : 'bg-red-500/10 text-red-600 dark:text-red-300')}
      >
        <Heart className={cx('h-4 w-4', !empty && 'fill-current', anim === 'lose' && 'animate-heart-lose', anim === 'gain' && 'animate-heart-gain')} />
        {lv.s.lives}/{lv.max}
      </button>
      {open && (
        <div role="dialog" aria-label="Tus vidas" className="animate-pop absolute right-0 top-full z-40 mt-2 w-64 max-w-[calc(100vw-2rem)] rounded-xl bg-white p-3 text-sm shadow-lg ring-1 ring-navy-100 dark:bg-navy-900 dark:ring-navy-700">
          <p className="font-semibold text-navy-900 dark:text-white">{lv.nextIn === null ? 'Vidas llenas' : `Próxima vida en ${hms(lv.nextIn)}`}</p>
          <p className="mt-1 text-navy-500 dark:text-navy-300">{planRule(lv.plan)}</p>
          <p className="mt-1 text-navy-500 dark:text-navy-300">Solo pierdes una vida cuando fallas un ejercicio. Leer la teoría nunca cuesta vidas.</p>
          <a href="#/settings" className="mt-2 inline-block font-semibold text-electric-600 hover:underline dark:text-electric-300">
            Ver mis vidas
          </a>
        </div>
      )}
    </div>
  )
}
