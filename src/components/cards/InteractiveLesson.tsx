import { useEffect, useRef, useState, type ReactNode } from 'react'
import { Pin, SlidersHorizontal, Search, CheckCircle2 } from 'lucide-react'
import type { Block, InteractiveLesson as Lesson, Sim, Spot } from '../../content/interactive'
import { Button, cx, Rich } from '../ui'
import { BalanceBlock, MatchBlock, OrderBlock, SortBlock } from './Games'
import { CalcBlock, EntryBlock, MultiBlock, RushBlock, TAcctBlock } from './Games2'

const mxn = new Intl.NumberFormat('es-MX', { maximumFractionDigits: 0 })
const money = (n: number) => `${n < 0 ? '−' : ''}$${mxn.format(Math.abs(n))}`
const num = new Intl.NumberFormat('es-MX', { maximumFractionDigits: 2 })
const withUnit = (n: number, unit?: string) => (unit ? `${n < 0 ? '−' : ''}${num.format(Math.abs(n))} ${unit}` : money(n))

function Panel({ children, className, ...rest }: { children: ReactNode; className?: string; 'data-testid'?: string }) {
  return (
    <div {...rest} className={cx('animate-fade-up rounded-2xl bg-white p-4 shadow-sm ring-1 ring-navy-100 dark:bg-navy-900 dark:ring-navy-800', className)}>
      {children}
    </div>
  )
}

function SimBlock({ sim, onSolved }: { sim: Sim; onSolved: () => void }) {
  const [v, setV] = useState<Record<string, number>>(() => Object.fromEntries(sim.inputs.map((i) => [i.key, i.value])))
  const reached = sim.goal ? sim.goal.check(v) : true
  const [solved, setSolved] = useState(!sim.goal)
  useEffect(() => {
    if (reached && !solved) {
      setSolved(true)
      onSolved()
    }
  }, [reached, solved, onSolved])
  return (
    <Panel data-testid="sim" className="ring-2 ring-electric-200 dark:ring-electric-500/30">
      <p className="mb-3 flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-electric-600 dark:text-electric-300">
        <SlidersHorizontal className="h-4 w-4" /> {sim.title}
      </p>
      {sim.goal && (
        <p className="mb-4 rounded-xl bg-electric-50 p-3 text-[15px] text-navy-800 dark:bg-electric-500/10 dark:text-navy-100">
          🎯 <Rich text={sim.goal.text} />
        </p>
      )}
      <div className="mb-4 divide-y divide-navy-100 rounded-xl bg-navy-50 px-3 dark:divide-navy-800 dark:bg-navy-950">
        {sim.outputs.map((o) => {
          const n = o.calc(v)
          return (
            <div key={o.label} className={cx('flex items-center justify-between gap-3 py-2', o.main ? 'text-base font-bold' : 'text-sm')}>
              <span className="text-navy-700 dark:text-navy-200">{o.label}</span>
              <span data-testid={o.main ? 'sim-result' : undefined} className={cx('tabular-nums', o.main && (n < 0 ? 'text-red-600' : 'text-money-600'))}>
                {withUnit(n, o.unit)}
                {o.main && n < 0 ? ' pérdida' : ''}
              </span>
            </div>
          )
        })}
      </div>
      <div className="space-y-4">
        {sim.inputs.map((i) => (
          <label key={i.key} className="block">
            <span className="flex justify-between text-sm text-navy-600 dark:text-navy-300">
              <span>{i.label}</span>
              <b className="text-navy-900 dark:text-white">{i.max > 5000 || i.label.toLowerCase().includes('precio') || i.label.toLowerCase().includes('costo') ? money(v[i.key]) : mxn.format(v[i.key])}</b>
            </span>
            <input
              type="range"
              min={i.min}
              max={i.max}
              step={i.step}
              value={v[i.key]}
              data-testid={`sim-${i.key}`}
              onChange={(e) => setV((p) => ({ ...p, [i.key]: Number(e.target.value) }))}
              className="mt-1 h-8 w-full accent-electric-500"
            />
          </label>
        ))}
      </div>
      {sim.goal && solved && (
        <p className="animate-pop mt-3 flex gap-2 rounded-xl bg-money-50 p-3 text-[15px] text-navy-800 ring-1 ring-money-500/50 dark:bg-money-500/10 dark:text-navy-100">
          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-money-600" />
          <Rich text={sim.goal.done} />
        </p>
      )}
    </Panel>
  )
}

function SpotBlock({ spot, onSolved }: { spot: Spot; onSolved: () => void }) {
  const [tried, setTried] = useState<number[]>([])
  const found = tried.includes(spot.wrong)
  const sum = (s: 'D' | 'C') => spot.lines.filter((l) => l.side === s).reduce((a, l) => a + l.amount, 0)
  const tap = (i: number) => {
    if (found || tried.includes(i)) return
    setTried((t) => [...t, i])
    if (i === spot.wrong) onSolved()
  }
  const missed = tried.filter((i) => i !== spot.wrong).length
  return (
    <Panel data-testid="spot" className="ring-2 ring-amber-300 dark:ring-amber-500/40">
      <p className="mb-2 flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-amber-600">
        <Search className="h-4 w-4" /> ¿Cuál está mal? · {spot.title}
      </p>
      <p className="mb-3 text-[15px] text-navy-700 dark:text-navy-200">{spot.story}</p>
      <div className="overflow-hidden rounded-xl ring-1 ring-navy-200 dark:ring-navy-700">
        <div className="grid grid-cols-[1fr_5.5rem_5.5rem] bg-navy-100 px-3 py-1.5 text-xs font-bold uppercase text-navy-500 dark:bg-navy-800 dark:text-navy-300">
          <span>Cuenta</span>
          <span className="text-right">Cargo</span>
          <span className="text-right">Abono</span>
        </div>
        {spot.lines.map((l, i) => {
          const bad = tried.includes(i) && i !== spot.wrong
          const ok = found && i === spot.wrong
          return (
            <button
              key={i}
              type="button"
              data-testid={`spot-line-${i}`}
              onClick={() => tap(i)}
              disabled={found}
              className={cx(
                'grid min-h-12 w-full grid-cols-[1fr_5.5rem_5.5rem] items-center border-t border-navy-100 px-3 text-left text-[15px] tabular-nums transition dark:border-navy-800',
                !found && 'hover:bg-amber-50 dark:hover:bg-amber-500/10',
                bad && 'bg-navy-50 text-navy-400 line-through decoration-navy-300 dark:bg-navy-950',
                ok && 'animate-pop bg-red-50 font-bold text-red-700 ring-2 ring-inset ring-red-400 dark:bg-red-500/10 dark:text-red-300',
              )}
            >
              <span className={l.side === 'C' ? 'pl-4' : ''}>{l.account}</span>
              <span className="text-right">{l.side === 'D' ? money(l.amount) : ''}</span>
              <span className="text-right">{l.side === 'C' ? money(l.amount) : ''}</span>
            </button>
          )
        })}
        <div className="grid grid-cols-[1fr_5.5rem_5.5rem] border-t-2 border-navy-300 bg-navy-50 px-3 py-1.5 text-sm font-bold tabular-nums dark:border-navy-600 dark:bg-navy-950">
          <span>Sumas</span>
          <span className="text-right">{money(sum('D'))}</span>
          <span className="text-right">{money(sum('C'))}</span>
        </div>
      </div>
      {!found && (
        <p className="mt-3 text-sm text-navy-500 dark:text-navy-300">
          {missed === 0 ? '👆 Toca la línea que está mal.' : missed === 1 ? '🤔 Esa está bien. Fíjate si cada cuenta va del lado correcto y si el importe coincide con la historia.' : '💡 Pista: compara cada importe y lado con lo que dice la historia.'}
        </p>
      )}
      {found && (
        <p className="animate-pop mt-3 flex gap-2 rounded-xl bg-money-50 p-3 text-[15px] text-navy-800 ring-1 ring-money-500/50 dark:bg-money-500/10 dark:text-navy-100" data-testid="spot-why">
          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-money-600" />
          <span>
            {missed === 0 ? '¡A la primera! ' : '¡La encontraste! '}
            <Rich text={spot.why} />
          </span>
        </p>
      )}
    </Panel>
  )
}

function AskBlock({ b, idx, onSolved }: { b: Extract<Block, { ask: string }>; idx: number; onSolved: () => void }) {
  const [pick, setPick] = useState<number | null>(null)
  const opt = pick !== null ? b.options[pick] : null
  const order = b.options.map((_, j) => (j + idx) % b.options.length)
  return (
    <Panel data-testid="int-ask">
      <p className="mb-3 text-[16px] font-bold text-navy-900 dark:text-white">
        <Rich text={b.ask} />
      </p>
      <div className="flex flex-wrap gap-2">
        {order.map((k) => (
          <button
            key={k}
            type="button"
            disabled={pick !== null}
            onClick={() => {
              setPick(k)
              onSolved()
            }}
            className={cx(
              'min-h-11 rounded-xl border-2 px-4 py-2 text-[15px] font-semibold transition',
              pick === null && 'border-electric-500 text-electric-600 hover:bg-electric-50 dark:text-electric-300',
              pick !== null && k === pick && (b.options[k].ok ? 'border-money-500 bg-money-50 text-money-700' : 'border-amber-500 bg-amber-50 text-amber-700'),
              pick !== null && k !== pick && 'border-navy-200 text-navy-400 dark:border-navy-700',
            )}
          >
            {b.options[k].text}
          </button>
        ))}
      </div>
      {opt && (
        <p className="animate-pop mt-3 text-[15px] text-navy-800 dark:text-navy-100">
          {opt.ok ? '✅ ' : '💡 '}
          <Rich text={opt.reply} />
        </p>
      )}
    </Panel>
  )
}

/**
 * A theory subtopic as hands-on steps: short text, simulators with a goal and
 * "¿Cuál está mal?" pólizas. Each interactive step must be solved before the
 * "Continuar" button appears.
 */
export function InteractiveLesson({ data, index, title, header, finishLabel, onFinish }: { data: Lesson; index: number; title: string; header: ReactNode; finishLabel: string; onFinish: () => void }) {
  const blocks = data.sections[index] ?? []
  const [shown, setShown] = useState(1)
  const [solved, setSolved] = useState<Record<number, boolean>>({})
  const end = useRef<HTMLDivElement>(null)
  const cur = blocks[shown - 1]
  const needs = !!cur && !('text' in cur) && !('tip' in cur)
  const blocked = needs && !solved[shown - 1]
  const done = shown >= blocks.length && !blocked
  const isGame = (b: Block) => !('text' in b) && !('tip' in b)
  // One screen at a time: a new screen starts after each solved activity, so the
  // learner never scrolls through a long page of earlier content.
  let start = 0
  for (let j = shown - 2; j >= 0; j--)
    if (isGame(blocks[j])) {
      start = j + 1
      break
    }
  const top = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (shown > 1 && start === shown - 1) top.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    else if (shown > 1) end.current?.scrollIntoView({ behavior: 'smooth', block: 'end' })
  }, [shown, solved, start])

  return (
    <div className="mx-auto max-w-2xl" ref={top}>
      {header}
      <h1 className="mt-2 text-2xl font-bold tracking-tight text-navy-900 dark:text-white">{title}</h1>
      <div className="mt-3 h-2 overflow-hidden rounded-full bg-navy-100 dark:bg-navy-800" aria-hidden>
        <div className="h-full rounded-full bg-money-500 transition-all duration-500" style={{ width: `${Math.round(((done ? blocks.length : shown - 1) / Math.max(1, blocks.length)) * 100)}%` }} />
      </div>
      <div data-testid="interactive-lesson" className="mt-5 space-y-4">
        {blocks.slice(0, shown).map((b, i) => {
          if (i < start) return null
          const ok = () => setSolved((s) => ({ ...s, [i]: true }))
          if ('text' in b)
            return (
              <p key={i} className="animate-fade-up whitespace-pre-line px-1 text-[18px] leading-relaxed text-navy-800 dark:text-navy-100">
                <Rich text={b.text} />
              </p>
            )
          if ('tip' in b)
            return (
              <div key={i} className="animate-pop rounded-2xl bg-amber-50 p-3 text-[15px] text-navy-800 ring-1 ring-amber-300 dark:bg-amber-500/10 dark:text-navy-100 dark:ring-amber-500/40">
                <p className="mb-1 flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-amber-600">
                  <Pin className="h-3.5 w-3.5" /> Para recordar
                </p>
                <Rich text={b.tip} />
              </div>
            )
          if ('sim' in b) return <SimBlock key={i} sim={b.sim} onSolved={ok} />
          if ('spot' in b) return <SpotBlock key={i} spot={b.spot} onSolved={ok} />
          if ('sort' in b) return <SortBlock key={i} game={b.sort} onSolved={ok} />
          if ('order' in b) return <OrderBlock key={i} game={b.order} onSolved={ok} />
          if ('match' in b) return <MatchBlock key={i} game={b.match} onSolved={ok} />
          if ('balance' in b) return <BalanceBlock key={i} game={b.balance} onSolved={ok} />
          if ('tacct' in b) return <TAcctBlock key={i} game={b.tacct} onSolved={ok} />
          if ('entry' in b) return <EntryBlock key={i} game={b.entry} onSolved={ok} />
          if ('rush' in b) return <RushBlock key={i} game={b.rush} onSolved={ok} />
          if ('calc' in b) return <CalcBlock key={i} game={b.calc} onSolved={ok} />
          if ('multi' in b) return <MultiBlock key={i} game={b.multi} onSolved={ok} />
          return <AskBlock key={i} b={b} idx={i} onSolved={ok} />
        })}
        <div ref={end} />
      </div>
      {!done && !blocked && (
        <Button size="lg" className="animate-fade-up mt-5 w-full shadow-[0_3px_0] shadow-electric-700" onClick={() => setShown((n) => n + 1)} data-testid="int-next">
          Continuar
        </Button>
      )}
      {done && (
        <Button size="lg" className="animate-fade-up mt-4 w-full uppercase tracking-wide shadow-[0_3px_0] shadow-electric-700" onClick={onFinish} data-testid="int-finish">
          {finishLabel}
        </Button>
      )}
    </div>
  )
}
