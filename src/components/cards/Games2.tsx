import { useEffect, useState, type ReactNode } from 'react'
import { BookOpen, Calculator, CheckSquare, FileText, Timer } from 'lucide-react'
import type { Calc, Entry, Multi, Rush, TAcct } from '../../content/interactive'
import { cx, Rich } from '../ui'

const mxn = new Intl.NumberFormat('es-MX', { maximumFractionDigits: 0 })
const money = (n: number) => `$${mxn.format(n)}`
const num = new Intl.NumberFormat('es-MX', { maximumFractionDigits: 4 })
const calcMoney = (n: number) => `$${num.format(n)}`
const SIDE = { D: 'Debe (cargo)', C: 'Haber (abono)' } as const

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
const Win = ({ children }: { children: ReactNode }) => <p className="animate-pop mt-3 rounded-xl bg-money-50 p-3 text-[15px] text-navy-800 ring-1 ring-money-500/50 dark:bg-money-500/10 dark:text-navy-100">✅ {children}</p>
const choiceCls = (state: 'idle' | 'ok' | 'bad' | 'off') =>
  cx(
    'min-h-11 rounded-xl border-2 px-3 py-2 text-[15px] font-bold transition',
    state === 'idle' && 'border-electric-500 text-electric-600 hover:bg-electric-50 dark:text-electric-300',
    state === 'ok' && 'border-money-500 bg-money-50 text-money-700',
    state === 'bad' && 'border-amber-500 bg-amber-50 text-amber-700',
    state === 'off' && 'border-navy-200 text-navy-400 dark:border-navy-700',
  )
const NextBtn = ({ onClick, label, testid }: { onClick: () => void; label: string; testid: string }) => (
  <button type="button" data-testid={testid} onClick={onClick} className="mt-3 min-h-11 w-full rounded-xl bg-electric-500 px-4 font-bold text-white hover:bg-electric-600">
    {label}
  </button>
)

/** Two-sided T drawing with the movements placed so far. */
function TDraw({ name, debe, haber, showSaldo }: { name: string; debe: number[]; haber: number[]; showSaldo: boolean }) {
  const d = debe.reduce((a, b) => a + b, 0)
  const h = haber.reduce((a, b) => a + b, 0)
  const col = (xs: number[], align: string) => (
    <div className={cx('min-h-20 space-y-1 p-2 tabular-nums', align)}>
      {xs.map((x, i) => (
        <p key={i} className="animate-pop text-[15px]">
          {money(x)}
        </p>
      ))}
    </div>
  )
  return (
    <div className="mx-auto max-w-sm">
      <p className="border-b-4 border-navy-800 pb-1 text-center text-lg font-extrabold text-navy-900 dark:border-navy-200 dark:text-white">{name}</p>
      <div className="grid grid-cols-2">
        <div className="border-r-4 border-navy-800 dark:border-navy-200">
          <p className="pt-1 text-center text-xs font-bold uppercase text-electric-600">Debe</p>
          {col(debe, 'text-right pr-3')}
        </div>
        <div>
          <p className="pt-1 text-center text-xs font-bold uppercase text-amber-600">Haber</p>
          {col(haber, 'text-left pl-3')}
        </div>
      </div>
      {showSaldo && (
        <div className="animate-fade-up mt-1 border-t-2 border-navy-300 pt-2 text-center text-sm dark:border-navy-600">
          <p className="tabular-nums text-navy-600 dark:text-navy-300">
            Debe {money(d)} − Haber {money(h)}
          </p>
          <p data-testid="tacct-saldo" className="text-base font-extrabold text-navy-900 dark:text-white">
            Saldo: {d === h ? '$0 (saldada)' : `${money(Math.abs(d - h))} ${d > h ? 'deudor' : 'acreedor'}`}
          </p>
        </div>
      )}
    </div>
  )
}

export function TAcctBlock({ game, onSolved }: { game: TAcct; onSolved: () => void }) {
  const [at, setAt] = useState(0)
  const [pick, setPick] = useState<'D' | 'C' | null>(null)
  const placed = game.moves.slice(0, pick ? at + 1 : at)
  const finished = at >= game.moves.length
  const mv = game.moves[at]
  const next = () => {
    setPick(null)
    setAt((n) => n + 1)
    if (at + 1 >= game.moves.length) onSolved()
  }
  return (
    <Shell testid="tacct" icon={<BookOpen className="h-4 w-4 text-electric-500" />} title={game.title} tone="ring-electric-200 dark:ring-electric-500/30">
      <TDraw name={game.account} debe={placed.filter((m) => m.side === 'D').map((m) => m.amount)} haber={placed.filter((m) => m.side === 'C').map((m) => m.amount)} showSaldo={finished} />
      {!finished && (
        <div key={at} className="animate-fade-up mt-4">
          <p className="mb-1 text-xs font-bold uppercase text-navy-400">
            Movimiento {at + 1} de {game.moves.length}
          </p>
          <p className="mb-3 text-[16px] font-semibold text-navy-900 dark:text-white">
            <Rich text={mv.story} />
          </p>
          <div className="grid grid-cols-2 gap-2">
            {(['D', 'C'] as const).map((s) => (
              <button key={s} type="button" data-testid={`tacct-${s}`} disabled={!!pick} onClick={() => setPick(s)} className={choiceCls(!pick ? 'idle' : s === mv.side ? 'ok' : s === pick ? 'bad' : 'off')}>
                {SIDE[s]}
              </button>
            ))}
          </div>
          {pick && (
            <div className="animate-fade-up">
              <p className="mt-3 text-[15px] text-navy-800 dark:text-navy-100">
                <Rich text={`${pick === mv.side ? '✅ ' : `💡 Va en el **${SIDE[mv.side]}**. `}${mv.why}`} />
              </p>
              <NextBtn testid="tacct-next" onClick={next} label={at + 1 < game.moves.length ? 'Siguiente movimiento' : 'Calcular saldo'} />
            </div>
          )}
        </div>
      )}
    </Shell>
  )
}

export function EntryBlock({ game, onSolved }: { game: Entry; onSolved: () => void }) {
  const [sides, setSides] = useState<Record<number, 'D' | 'C'>>({})
  const done = Object.keys(sides).length === game.lines.length
  const sum = (s: 'D' | 'C') => game.lines.filter((l) => l.side === s).reduce((a, l) => a + l.amount, 0)
  const hits = game.lines.filter((l, i) => sides[i] === l.side).length
  const choose = (i: number, s: 'D' | 'C') => {
    if (sides[i]) return
    const nx = { ...sides, [i]: s }
    setSides(nx)
    if (Object.keys(nx).length === game.lines.length) onSolved()
  }
  return (
    <Shell testid="entry" icon={<FileText className="h-4 w-4 text-purple-500" />} title={game.title} tone="ring-purple-200 dark:ring-purple-500/30">
      <p className="mb-3 text-[15px] text-navy-700 dark:text-navy-200">
        <Rich text={game.story} />
      </p>
      <p className="mb-2 text-sm text-navy-500 dark:text-navy-300">¿Cada cuenta va en cargo o en abono?</p>
      <div className="space-y-2">
        {game.lines.map((l, i) => {
          const s = sides[i]
          return (
            <div key={i} className="rounded-xl bg-navy-50 p-2.5 dark:bg-navy-950">
              <div className="flex items-center justify-between gap-2">
                <span className="font-semibold text-navy-900 dark:text-white">{l.account}</span>
                <span className="tabular-nums text-navy-700 dark:text-navy-200">{money(l.amount)}</span>
              </div>
              <div className="mt-2 grid grid-cols-2 gap-2">
                {(['D', 'C'] as const).map((x) => (
                  <button key={x} type="button" data-testid={`entry-${i}-${x}`} disabled={!!s} onClick={() => choose(i, x)} className={choiceCls(!s ? 'idle' : x === l.side ? 'ok' : x === s ? 'bad' : 'off')}>
                    {x === 'D' ? 'Cargo' : 'Abono'}
                  </button>
                ))}
              </div>
              {s && (
                <p className="animate-fade-up mt-2 text-sm text-navy-700 dark:text-navy-200">
                  <Rich text={`${s === l.side ? '✅ ' : '💡 '}${l.why}`} />
                </p>
              )}
            </div>
          )
        })}
      </div>
      {done && (
        <Win>
          Póliza lista: cargos {money(sum('D'))} = abonos {money(sum('C'))}. Acertaste {hits} de {game.lines.length}.
        </Win>
      )}
    </Shell>
  )
}

export function RushBlock({ game, onSolved }: { game: Rush; onSolved: () => void }) {
  const [state, setState] = useState<'ready' | 'run' | 'end'>('ready')
  const [left, setLeft] = useState(game.seconds)
  const [at, setAt] = useState(0)
  const [miss, setMiss] = useState<number[]>([])
  const [flash, setFlash] = useState<'ok' | 'bad' | null>(null)
  const [best, setBest] = useState(0)
  useEffect(() => {
    if (state !== 'run') return
    if (left <= 0) {
      setState('end')
      return
    }
    const id = window.setTimeout(() => setLeft((s) => s - 1), 1000)
    return () => window.clearTimeout(id)
  }, [state, left])
  const answered = Math.min(at, game.items.length)
  const score = answered - miss.length
  useEffect(() => {
    if (state === 'end') {
      setBest((b) => Math.max(b, score))
      onSolved()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state])
  const start = () => {
    setAt(0)
    setMiss([])
    setLeft(game.seconds)
    setFlash(null)
    setState('run')
  }
  const answer = (k: 0 | 1) => {
    const ok = game.items[at].ans === k
    if (!ok) setMiss((m) => [...m, at])
    setFlash(ok ? 'ok' : 'bad')
    const nx = at + 1
    setAt(nx)
    if (nx >= game.items.length) setState('end')
  }
  const item = game.items[at]
  return (
    <Shell testid="rush" icon={<Timer className="h-4 w-4 text-red-500" />} title={`Contrarreloj · ${game.title}`} tone="ring-red-200 dark:ring-red-500/30">
      {state === 'ready' && (
        <div className="text-center">
          <p className="text-[15px] text-navy-700 dark:text-navy-200">
            Tienes <b>{game.seconds} segundos</b> para contestar {game.items.length}. ¿Listo?
          </p>
          <button type="button" data-testid="rush-start" onClick={start} className="mt-3 min-h-12 w-full rounded-xl bg-red-500 px-4 text-lg font-extrabold text-white hover:bg-red-600">
            ¡Empezar! ⏱️
          </button>
        </div>
      )}
      {state === 'run' && item && (
        <div>
          <div className="mb-2 flex items-center justify-between text-sm font-bold">
            <span className="text-navy-500">
              {at + 1} / {game.items.length}
            </span>
            <span className={cx('tabular-nums', left <= 5 ? 'text-red-600' : 'text-navy-700 dark:text-navy-200')}>⏱️ {left} s</span>
          </div>
          <div className="mb-2 h-1.5 overflow-hidden rounded-full bg-navy-100 dark:bg-navy-800">
            <div className="h-full bg-red-500 transition-all duration-1000 ease-linear" style={{ width: `${(left / game.seconds) * 100}%` }} />
          </div>
          <div key={at} className={cx('animate-pop mb-3 rounded-xl p-5 text-center text-[18px] font-bold text-navy-900 dark:text-white', flash === 'ok' ? 'bg-money-50 dark:bg-money-500/10' : flash === 'bad' ? 'bg-amber-50 dark:bg-amber-500/10' : 'bg-navy-50 dark:bg-navy-950')}>
            <Rich text={item.text} />
          </div>
          <div className="grid grid-cols-2 gap-2">
            {game.labels.map((l, k) => (
              <button key={l} type="button" data-testid={`rush-${k}`} onClick={() => answer(k as 0 | 1)} className="min-h-14 rounded-xl bg-electric-500 px-3 text-[16px] font-extrabold text-white active:scale-95 hover:bg-electric-600">
                {l}
              </button>
            ))}
          </div>
        </div>
      )}
      {state === 'end' && (
        <div data-testid="rush-end">
          <p className="text-center text-2xl font-extrabold text-navy-900 dark:text-white">
            {score} de {game.items.length} {score === game.items.length ? '🏆' : score >= game.items.length * 0.7 ? '🔥' : '💪'}
          </p>
          <p className="text-center text-sm text-navy-500">{at < game.items.length ? 'Se acabó el tiempo.' : `Te sobraron ${left} segundos.`} Mejor marca: {Math.max(best, score)}</p>
          {miss.length > 0 && (
            <div className="mt-3 rounded-xl bg-amber-50 p-3 text-sm dark:bg-amber-500/10">
              <p className="mb-1 font-bold text-amber-700">Repasa estas:</p>
              {miss.map((i) => (
                <p key={i} className="text-navy-800 dark:text-navy-100">
                  <Rich text={`${game.items[i].text} → **${game.labels[game.items[i].ans]}**`} />
                </p>
              ))}
            </div>
          )}
          <button type="button" data-testid="rush-again" onClick={start} className="mt-3 min-h-11 w-full rounded-xl border-2 border-red-400 font-bold text-red-600">
            Otra vez
          </button>
        </div>
      )}
    </Shell>
  )
}

export function CalcBlock({ game, onSolved }: { game: Calc; onSolved: () => void }) {
  const [val, setVal] = useState('')
  const [tries, setTries] = useState(0)
  const [ok, setOk] = useState(false)
  const done = ok || tries >= 2
  const check = () => {
    if (done || !val.trim()) return
    const n = Number(val.replace(/[$,%\s]/g, '').replace(/[−–]/g, '-'))
    if (Number.isFinite(n) && Math.abs(n - game.answer) < 1e-6) {
      setOk(true)
      onSolved()
    } else {
      setTries((t) => t + 1)
      if (tries + 1 >= 2) onSolved()
    }
  }
  return (
    <Shell testid="calc" icon={<Calculator className="h-4 w-4 text-teal-500" />} title="Calcula tú" tone="ring-teal-200 dark:ring-teal-500/30">
      <p className="mb-3 text-[16px] font-semibold text-navy-900 dark:text-white">
        <Rich text={game.question} />
      </p>
      <div className="flex gap-2">
        <div className="flex flex-1 items-center rounded-xl border-2 border-navy-200 px-3 focus-within:border-teal-500 dark:border-navy-700">
          {!game.unit && <span className="text-lg font-bold text-navy-400">$</span>}
          <input
            inputMode={game.answer < 0 ? 'text' : Number.isInteger(game.answer) ? 'numeric' : 'decimal'}
            data-testid="calc-input"
            value={val}
            disabled={done}
            onChange={(e) => setVal(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && check()}
            className="min-h-12 w-full bg-transparent px-2 text-lg font-bold tabular-nums text-navy-900 outline-none dark:text-white"
            placeholder="0"
            aria-label="Tu respuesta"
          />
          {game.unit && <span className="shrink-0 text-base font-bold text-navy-400">{game.unit}</span>}
        </div>
        <button type="button" data-testid="calc-check" disabled={done} onClick={check} className="min-h-12 rounded-xl bg-teal-500 px-4 font-bold text-white hover:bg-teal-600 disabled:opacity-50">
          Comprobar
        </button>
      </div>
      {!done && tries === 1 && <p className="animate-shake mt-2 text-sm text-amber-700 dark:text-amber-300">🤔 Casi. Pista: <Rich text={game.hint} /></p>}
      {done && (
        <p className={cx('animate-pop mt-3 rounded-xl p-3 text-[15px] text-navy-800 ring-1 dark:text-navy-100', ok ? 'bg-money-50 ring-money-500/50 dark:bg-money-500/10' : 'bg-amber-50 ring-amber-400 dark:bg-amber-500/10')}>
          <Rich text={`${ok ? '✅ ¡Exacto! ' : `💡 Era **${game.unit ? `${num.format(game.answer)}${game.unit === '%' ? '%' : ` ${game.unit}`}` : calcMoney(game.answer)}**. `}${game.why}`} />
        </p>
      )}
    </Shell>
  )
}

export function MultiBlock({ game, onSolved }: { game: Multi; onSolved: () => void }) {
  const [sel, setSel] = useState<number[]>([])
  const [checked, setChecked] = useState(false)
  const right = game.items.filter((x, i) => x.ok === sel.includes(i)).length
  return (
    <Shell testid="multi" icon={<CheckSquare className="h-4 w-4 text-money-600" />} title={game.title} tone="ring-money-200 dark:ring-money-500/30">
      <p className="mb-3 text-sm text-navy-500 dark:text-navy-300">Puede haber varias. Marca todas las que sí.</p>
      <div className="space-y-2">
        {game.items.map((x, i) => {
          const on = sel.includes(i)
          const state = !checked ? (on ? 'border-money-500 bg-money-50 dark:bg-money-500/10' : 'border-navy-200 dark:border-navy-700') : x.ok ? 'border-money-500 bg-money-50 dark:bg-money-500/10' : on ? 'border-amber-500 bg-amber-50 dark:bg-amber-500/10' : 'border-navy-200 opacity-60 dark:border-navy-700'
          return (
            <button key={i} type="button" data-testid={`multi-${i}`} disabled={checked} onClick={() => setSel((s) => (on ? s.filter((k) => k !== i) : [...s, i]))} className={cx('flex min-h-12 w-full items-center gap-3 rounded-xl border-2 px-3 py-2 text-left text-[15px] text-navy-800 transition dark:text-navy-100', state)}>
              <span className={cx('flex h-6 w-6 shrink-0 items-center justify-center rounded-md border-2 text-sm font-bold', on ? 'border-money-500 bg-money-500 text-white' : 'border-navy-300')}>{on ? '✓' : ''}</span>
              <span className="flex-1">
                <Rich text={x.text} />
              </span>
              {checked && <span>{x.ok === on ? '✅' : x.ok ? '⬅️ faltó' : '❌'}</span>}
            </button>
          )
        })}
      </div>
      {!checked ? (
        <NextBtn
          testid="multi-check"
          label="Revisar"
          onClick={() => {
            setChecked(true)
            onSolved()
          }}
        />
      ) : (
        <p className="animate-pop mt-3 rounded-xl bg-money-50 p-3 text-[15px] text-navy-800 ring-1 ring-money-500/50 dark:bg-money-500/10 dark:text-navy-100">
          <Rich text={`${right === game.items.length ? '✅ ¡Todas bien! ' : `Tuviste ${right} de ${game.items.length} bien. `}${game.why}`} />
        </p>
      )}
    </Shell>
  )
}
