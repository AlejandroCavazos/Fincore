import { useMemo, useState, type ReactNode } from 'react'
import { ArrowUpDown, CheckCircle2, Link2, Layers, Scale } from 'lucide-react'
import type { Balance, MatchGame, OrderGame, SortGame } from '../../content/interactive'
import { cx, Rich } from '../ui'

const mxn = new Intl.NumberFormat('es-MX', { maximumFractionDigits: 0 })
const money = (n: number) => `${n < 0 ? '−' : ''}$${mxn.format(Math.abs(n))}`

/** Stable shuffle (same order on every render) that never returns the original order. */
export function mix<T>(list: T[], seed = 7): number[] {
  const idx = list.map((_, i) => i)
  let x = seed
  for (let i = idx.length - 1; i > 0; i--) {
    x = (x * 9301 + 49297) % 233280
    const j = Math.floor((x / 233280) * (i + 1))
    ;[idx[i], idx[j]] = [idx[j], idx[i]]
  }
  if (idx.length > 1 && idx.every((v, i) => v === i)) idx.push(idx.shift()!)
  return idx
}

function Shell({ icon, title, tone, children, testid }: { icon: ReactNode; title: string; tone: string; children: ReactNode; testid: string }) {
  return (
    <div data-testid={testid} className={cx('animate-fade-up rounded-2xl bg-white p-4 shadow-sm ring-2 dark:bg-navy-900', tone)}>
      <p className="mb-3 flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-navy-600 dark:text-navy-200">
        {icon} {title}
      </p>
      {children}
    </div>
  )
}

function Win({ children }: { children: ReactNode }) {
  return (
    <p className="animate-pop mt-3 flex gap-2 rounded-xl bg-money-50 p-3 text-[15px] text-navy-800 ring-1 ring-money-500/50 dark:bg-money-500/10 dark:text-navy-100">
      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-money-600" />
      <span>{children}</span>
    </p>
  )
}

export function SortBlock({ game, onSolved }: { game: SortGame; onSolved: () => void }) {
  const [at, setAt] = useState(0)
  const [pick, setPick] = useState<number | null>(null)
  const [hits, setHits] = useState(0)
  const item = game.items[at]
  const finished = at >= game.items.length
  const answer = (b: number) => {
    if (pick !== null) return
    setPick(b)
    if (b === item.bucket) setHits((h) => h + 1)
  }
  const next = () => {
    setPick(null)
    setAt((n) => n + 1)
    if (at + 1 >= game.items.length) onSolved()
  }
  return (
    <Shell testid="sort" icon={<Layers className="h-4 w-4 text-electric-500" />} title={game.title} tone="ring-electric-200 dark:ring-electric-500/30">
      <div className="mb-3 h-1.5 overflow-hidden rounded-full bg-navy-100 dark:bg-navy-800">
        <div className="h-full bg-electric-500 transition-all" style={{ width: `${(Math.min(at, game.items.length) / game.items.length) * 100}%` }} />
      </div>
      {!finished ? (
        <>
          <div key={at} className="animate-pop mb-3 rounded-xl bg-navy-50 p-4 text-center text-[17px] font-semibold text-navy-900 dark:bg-navy-950 dark:text-white">
            <Rich text={item.text} />
          </div>
          <div className={cx('grid gap-2', game.buckets.length === 2 ? 'grid-cols-2' : 'grid-cols-3')}>
            {game.buckets.map((b, i) => (
              <button
                key={b}
                type="button"
                data-testid={`sort-bucket-${i}`}
                disabled={pick !== null}
                onClick={() => answer(i)}
                className={cx(
                  'min-h-12 rounded-xl border-2 px-2 py-2 text-[14px] font-bold leading-tight transition',
                  pick === null && 'border-electric-500 text-electric-600 hover:bg-electric-50 dark:text-electric-300',
                  pick !== null && i === item.bucket && 'border-money-500 bg-money-50 text-money-700',
                  pick !== null && i === pick && i !== item.bucket && 'border-amber-500 bg-amber-50 text-amber-700',
                  pick !== null && i !== pick && i !== item.bucket && 'border-navy-200 text-navy-400 dark:border-navy-700',
                )}
              >
                {b}
              </button>
            ))}
          </div>
          {pick !== null && (
            <div className="animate-fade-up mt-3">
              <p className="text-[15px] text-navy-800 dark:text-navy-100">
                <Rich text={`${pick === item.bucket ? '✅ ' : `💡 Es **${game.buckets[item.bucket]}**. `}${item.why}`} />
              </p>
              <button type="button" data-testid="sort-next" onClick={next} className="mt-3 min-h-11 w-full rounded-xl bg-electric-500 px-4 font-bold text-white hover:bg-electric-600">
                {at + 1 < game.items.length ? 'Siguiente' : 'Ver resultado'}
              </button>
            </div>
          )}
        </>
      ) : (
        <Win>
          {hits === game.items.length ? '¡Perfecto! ' : ''}
          Acertaste <b>{hits} de {game.items.length}</b> a la primera.
        </Win>
      )}
    </Shell>
  )
}

export function OrderBlock({ game, onSolved }: { game: OrderGame; onSolved: () => void }) {
  const order = useMemo(() => mix(game.steps, game.steps.length + 3), [game.steps])
  const [done, setDone] = useState<number[]>([])
  const [miss, setMiss] = useState<number | null>(null)
  const finished = done.length === game.steps.length
  const tap = (i: number) => {
    if (finished || done.includes(i)) return
    if (i === done.length) {
      const nx = [...done, i]
      setDone(nx)
      setMiss(null)
      if (nx.length === game.steps.length) onSolved()
    } else setMiss(i)
  }
  return (
    <Shell testid="order" icon={<ArrowUpDown className="h-4 w-4 text-purple-500" />} title={game.title} tone="ring-purple-200 dark:ring-purple-500/30">
      <p className="mb-3 text-sm text-navy-500 dark:text-navy-300">Toca en orden, del primero al último.</p>
      {done.length > 0 && (
        <ol className="mb-3 space-y-1.5">
          {done.map((i, n) => (
            <li key={i} className="animate-pop flex items-center gap-2 rounded-xl bg-money-50 px-3 py-2 text-[15px] text-navy-800 dark:bg-money-500/10 dark:text-navy-100">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-money-500 text-xs font-bold text-white">{n + 1}</span>
              <Rich text={game.steps[i]} />
            </li>
          ))}
        </ol>
      )}
      <div className="space-y-2">
        {order
          .filter((i) => !done.includes(i))
          .map((i) => (
            <button
              key={i}
              type="button"
              data-testid={`order-step-${i}`}
              onClick={() => tap(i)}
              className={cx(
                'block min-h-12 w-full rounded-xl border-2 px-3 py-2 text-left text-[15px] transition',
                miss === i ? 'animate-shake border-amber-500 bg-amber-50 text-amber-800' : 'border-navy-200 text-navy-800 hover:border-purple-400 dark:border-navy-700 dark:text-navy-100',
              )}
            >
              <Rich text={game.steps[i]} />
            </button>
          ))}
      </div>
      {miss !== null && !finished && <p className="mt-2 text-sm text-amber-700 dark:text-amber-300">🤔 Ese va después. ¿Cuál pasa antes?</p>}
      {finished && <Win><Rich text={game.done} /></Win>}
    </Shell>
  )
}

export function MatchBlock({ game, onSolved }: { game: MatchGame; onSolved: () => void }) {
  const right = useMemo(() => mix(game.pairs, game.pairs.length + 11), [game.pairs])
  const [sel, setSel] = useState<number | null>(null)
  const [ok, setOk] = useState<number[]>([])
  const [bad, setBad] = useState<number | null>(null)
  const finished = ok.length === game.pairs.length
  const pickRight = (j: number) => {
    if (sel === null || ok.includes(j)) return
    if (j === sel) {
      const nx = [...ok, j]
      setOk(nx)
      setSel(null)
      setBad(null)
      if (nx.length === game.pairs.length) onSolved()
    } else setBad(j)
  }
  const cell = 'min-h-12 w-full rounded-xl border-2 px-3 py-2 text-left text-[14px] leading-snug transition'
  return (
    <Shell testid="match" icon={<Link2 className="h-4 w-4 text-teal-500" />} title={game.title} tone="ring-teal-200 dark:ring-teal-500/30">
      <p className="mb-3 text-sm text-navy-500 dark:text-navy-300">Toca una palabra y luego lo que significa.</p>
      <div className="grid grid-cols-[2fr_3fr] gap-2">
        <div className="space-y-2">
          {game.pairs.map(([a], i) => (
            <button
              key={i}
              type="button"
              data-testid={`match-l-${i}`}
              disabled={ok.includes(i)}
              onClick={() => {
                setSel(i)
                setBad(null)
              }}
              className={cx(cell, 'font-bold', ok.includes(i) ? 'border-money-400 bg-money-50 text-money-700 dark:bg-money-500/10' : sel === i ? 'border-teal-500 bg-teal-50 text-teal-800 dark:bg-teal-500/10 dark:text-teal-200' : 'border-navy-200 text-navy-800 dark:border-navy-700 dark:text-navy-100')}
            >
              {a}
            </button>
          ))}
        </div>
        <div className="space-y-2">
          {right.map((j) => (
            <button
              key={j}
              type="button"
              data-testid={`match-r-${j}`}
              disabled={ok.includes(j)}
              onClick={() => pickRight(j)}
              className={cx(cell, ok.includes(j) ? 'border-money-400 bg-money-50 text-money-700 dark:bg-money-500/10' : bad === j ? 'animate-shake border-amber-500 bg-amber-50 text-amber-800' : 'border-navy-200 text-navy-700 dark:border-navy-700 dark:text-navy-200', sel === null && !ok.includes(j) && 'opacity-70')}
            >
              {game.pairs[j][1]}
            </button>
          ))}
        </div>
      </div>
      {finished && <Win>¡Todas unidas!</Win>}
    </Shell>
  )
}

export function BalanceBlock({ game, onSolved }: { game: Balance; onSolved: () => void }) {
  const [step, setStep] = useState(0)
  const [pick, setPick] = useState<number | null>(null)
  const applied = game.ops.slice(0, pick !== null ? step + 1 : step)
  const tot = applied.reduce((t, o) => ({ a: t.a + o.d.a, p: t.p + o.d.p, c: t.c + o.d.c }), game.start)
  const op = game.ops[step]
  const finished = step >= game.ops.length
  const max = Math.max(1, ...game.ops.reduce((acc, o) => [...acc, acc[acc.length - 1] + o.d.a], [game.start.a]))
  const next = () => {
    setPick(null)
    setStep((s) => s + 1)
    if (step + 1 >= game.ops.length) onSolved()
  }
  const bar = (v: number, cls: string) => <div className={cx('rounded-t-md transition-all duration-700', cls)} style={{ height: `${Math.max(2, (v / max) * 100)}%` }} />
  return (
    <Shell testid="balance" icon={<Scale className="h-4 w-4 text-amber-500" />} title={game.title} tone="ring-amber-200 dark:ring-amber-500/30">
      <div className="mb-3 grid grid-cols-[1fr_auto_1fr] items-end gap-3 rounded-xl bg-navy-50 p-3 dark:bg-navy-950">
        <div className="text-center">
          <div className="mx-auto flex h-28 w-14 flex-col justify-end">{bar(tot.a, 'bg-electric-500')}</div>
          <p className="mt-1 text-xs font-bold uppercase text-electric-600">Activo</p>
          <p data-testid="bal-a" className="text-sm font-bold tabular-nums text-navy-900 dark:text-white">{money(tot.a)}</p>
        </div>
        <p className="pb-8 text-2xl font-bold text-navy-400">=</p>
        <div className="text-center">
          <div className="mx-auto flex h-28 w-14 flex-col justify-end">
            {bar(tot.c, 'bg-money-500')}
            {tot.p > 0 && <div className="rounded-b-md bg-amber-500 transition-all duration-700" style={{ height: `${(tot.p / max) * 100}%` }} />}
          </div>
          <p className="mt-1 text-xs font-bold uppercase">
            <span className="text-amber-600">Pasivo</span> + <span className="text-money-600">Capital</span>
          </p>
          <p className="text-sm font-bold tabular-nums text-navy-900 dark:text-white">
            {money(tot.p)} + {money(tot.c)}
          </p>
        </div>
      </div>
      {!finished ? (
        <div key={step} className="animate-fade-up">
          <p className="mb-1 text-xs font-bold uppercase text-navy-400">
            Operación {step + 1} de {game.ops.length}
          </p>
          <p className="mb-3 text-[16px] font-semibold text-navy-900 dark:text-white">
            <Rich text={op.story} />
          </p>
          <div className="space-y-2">
            {op.options.map((o, i) => (
              <button
                key={i}
                type="button"
                data-testid={`bal-opt-${i}`}
                disabled={pick !== null}
                onClick={() => setPick(i)}
                className={cx(
                  'block min-h-11 w-full rounded-xl border-2 px-3 py-2 text-left text-[15px] font-semibold transition',
                  pick === null && 'border-amber-400 text-navy-800 hover:bg-amber-50 dark:text-navy-100 dark:hover:bg-amber-500/10',
                  pick !== null && o.ok && 'border-money-500 bg-money-50 text-money-700',
                  pick === i && !o.ok && 'border-amber-500 bg-amber-50 text-amber-700',
                  pick !== null && pick !== i && !o.ok && 'border-navy-200 text-navy-400 dark:border-navy-700',
                )}
              >
                {o.text}
              </button>
            ))}
          </div>
          {pick !== null && (
            <div className="animate-fade-up mt-3">
              <p className="text-[15px] text-navy-800 dark:text-navy-100">
                {op.options[pick].ok ? '✅ ' : '💡 '}
                <Rich text={op.why} />
              </p>
              <button type="button" data-testid="bal-next" onClick={next} className="mt-3 min-h-11 w-full rounded-xl bg-amber-500 px-4 font-bold text-white hover:bg-amber-600">
                {step + 1 < game.ops.length ? 'Siguiente operación' : 'Terminar'}
              </button>
            </div>
          )}
        </div>
      ) : (
        <Win>La balanza quedó nivelada en cada paso: {money(tot.a)} = {money(tot.p)} + {money(tot.c)}.</Win>
      )}
    </Shell>
  )
}
