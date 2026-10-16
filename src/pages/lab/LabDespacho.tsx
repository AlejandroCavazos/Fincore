import { useState } from 'react'
import { ArrowLeft, BookCheck, Eye, Lightbulb, Star, UserPlus } from 'lucide-react'
import { AppliedFormulas, CfdiView } from '../../components/lab/CfdiView'
import { Solution } from '../../components/lab/Books'
import { JournalEditor } from '../../components/JournalEditor'
import { OutOfLives } from '../../components/lives/OutOfLives'
import { Badge, Button, Card, cx, Notice, Rich } from '../../components/ui'
import { parseDraft, type DraftLine, type JournalCheck } from '../../lib/accounting'
import { m, POLICY_NAME, type PolicyType } from '../../lib/cfdi'
import { CASES, MAX_STARS, rankOf, SOON, starsFor, type ClientCase } from '../../lib/despacho'
import { awardXp } from '../../lib/progress'
import { navigate } from '../../state/router'
import { livesCtx, useLives } from '../../state/lives'
import { useI18n, useStore } from '../../state/store'
import { blankLines, gradeDoc, PolicyPicker, TopicLinks } from './LabPractice'

function Bubble({ who, children, me }: { who?: string; children: React.ReactNode; me?: boolean }) {
  return (
    <div className={cx('flex items-end gap-2', me && 'justify-end')}>
      {who && <span className="text-2xl leading-none">{who}</span>}
      <div className={cx('animate-pop max-w-[85%] rounded-2xl px-3.5 py-2 text-[15px]', me ? 'rounded-br-sm bg-electric-600 text-white' : 'rounded-bl-sm bg-navy-100 text-navy-900 dark:bg-navy-800 dark:text-white')}>{children}</div>
    </div>
  )
}

const Stars = ({ n, of = 3 }: { n: number; of?: number }) => (
  <span className="inline-flex" aria-label={`${n} de ${of} estrellas`}>
    {Array.from({ length: of }, (_, i) => (
      <Star key={i} className={cx('h-4 w-4', i < n ? 'fill-amber-400 text-amber-400' : 'text-navy-300')} />
    ))}
  </span>
)

export default function LabDespacho({ paid }: { paid: boolean }) {
  const { state, update } = useStore()
  const [open, setOpen] = useState<string | null>(null)
  const d = state.labx.despacho ?? { cases: {} }
  const stars = Object.values(d.cases).reduce((s, c) => s + c.stars, 0)
  const fees = CASES.reduce((s, c) => s + (d.cases[c.id] ? Math.round((c.fee * d.cases[c.id].stars) / 3) : 0), 0)
  const setName = (name: string) => update((s) => ({ ...s, labx: { ...s.labx, despacho: { ...(s.labx.despacho ?? { cases: {} }), name: name.slice(0, 60) } } }))
  const lockReason = (c: ClientCase) => {
    if (c.needs?.case && !d.cases[c.needs.case]) return `Llega cuando termines con ${CASES.find((x) => x.id === c.needs!.case)?.name}.`
    if (c.needs?.paid && !paid) return 'Cliente para despachos con Plus o Pro.'
    return null
  }
  const current = CASES.find((c) => c.id === open)
  if (current) return <CaseView c={current} onExit={() => { setOpen(null); window.scrollTo({ top: 0 }) }} />

  return (
    <div className="mt-4 space-y-4" data-testid="despacho">
      <Card className="space-y-3">
        <div className="flex flex-wrap items-center gap-3">
          <span className="text-4xl">🏢</span>
          <div className="min-w-0 flex-1">
            <label className="text-xs text-navy-500" htmlFor="despacho-name">Tu despacho</label>
            <input
              id="despacho-name"
              value={d.name ?? ''}
              placeholder="Ponle nombre a tu despacho"
              onChange={(e) => setName(e.target.value)}
              className="block w-full bg-transparent text-xl font-bold text-navy-900 outline-none placeholder:text-navy-300 dark:text-white"
            />
            <Badge tone="electric">{rankOf(stars)}</Badge>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2 text-center">
          <div className="rounded-xl bg-amber-50 p-2 dark:bg-amber-500/10">
            <p className="text-xs text-navy-500">Reputación</p>
            <p className="text-lg font-bold text-navy-900 dark:text-white" data-testid="despacho-stars">⭐ {stars} / {MAX_STARS}</p>
          </div>
          <div className="rounded-xl bg-money-50 p-2 dark:bg-money-500/10">
            <p className="text-xs text-navy-500">Honorarios cobrados (de práctica)</p>
            <p className="text-lg font-bold text-navy-900 dark:text-white">{m(fees)}</p>
          </div>
        </div>
        <p className="text-sm text-navy-600 dark:text-navy-300">Los clientes llegan con sus papeles y una duda. Si haces bien su contabilidad, te recomiendan y llegan clientes más grandes.</p>
      </Card>

      <p className="font-semibold text-navy-900 dark:text-white">Clientes</p>
      <div className="grid gap-3 sm:grid-cols-2">
        {CASES.map((c) => {
          const done = d.cases[c.id]
          const lock = lockReason(c)
          return (
            <button
              key={c.id}
              type="button"
              disabled={!!lock}
              onClick={() => setOpen(c.id)}
              data-testid={`client-${c.id}`}
              className={cx('flex gap-3 rounded-2xl p-3 text-left ring-1 transition', lock ? 'bg-navy-50 opacity-70 ring-navy-100 dark:bg-navy-900 dark:ring-navy-800' : 'bg-white ring-navy-100 hover:ring-electric-500 dark:bg-navy-900 dark:ring-navy-800')}
            >
              <span className="text-3xl">{lock ? '🔒' : c.emoji}</span>
              <span className="min-w-0 flex-1">
                <span className="flex flex-wrap items-center gap-2">
                  <span className="font-semibold text-navy-900 dark:text-white">{c.name}</span>
                  {done ? <Stars n={done.stars} /> : !lock && <Badge tone="money">Te escribió</Badge>}
                </span>
                <span className="block text-xs text-navy-500">{c.business}</span>
                <span className="mt-1 block text-sm text-navy-700 dark:text-navy-200">{lock ?? (done ? 'Caso terminado. Puedes repetirlo.' : c.problem)}</span>
              </span>
            </button>
          )
        })}
        {SOON.map((s) => (
          <div key={s.name} className="flex gap-3 rounded-2xl bg-navy-50 p-3 opacity-70 ring-1 ring-navy-100 dark:bg-navy-900 dark:ring-navy-800">
            <span className="text-3xl">{s.emoji}</span>
            <span>
              <span className="font-semibold text-navy-900 dark:text-white">{s.name}</span> <Badge>Próximamente</Badge>
              <span className="mt-1 block text-sm text-navy-700 dark:text-navy-200">{s.problem}</span>
            </span>
          </div>
        ))}
      </div>
      {!paid && (
        <p className="text-center text-xs text-navy-500">
          Clientes más grandes con Plus o Pro.{' '}
          <button type="button" className="font-semibold text-electric-600 underline" onClick={() => navigate('/plans')}>
            Ver planes
          </button>
        </p>
      )}
    </div>
  )
}

function CaseView({ c, onExit }: { c: ClientCase; onExit: () => void }) {
  const { update, toast } = useStore()
  const { t } = useI18n()
  const lv = useLives()
  const [step, setStep] = useState(-1) // -1 intro, 0..n-1 docs, n final, n+1 result
  const [mistakes, setMistakes] = useState(0)
  const [lines, setLines] = useState<DraftLine[]>(blankLines)
  const [policy, setPolicy] = useState<PolicyType | ''>('')
  const [result, setResult] = useState<{ check: JournalCheck; policyOk: boolean; correct: boolean } | null>(null)
  const [counted, setCounted] = useState(false)
  const [hint, setHint] = useState(false)
  const [solution, setSolution] = useState(false)
  const [pick, setPick] = useState<number | null>(null)
  const n = c.docs.length
  const item = step >= 0 && step < n ? c.docs[step] : null
  const ctx = livesCtx(item?.doc.topics[0])

  const go = (s: number) => {
    setStep(s)
    setLines(blankLines())
    setPolicy('')
    setResult(null)
    setCounted(false)
    setHint(false)
    setSolution(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  const check = () => {
    if (!item) return
    const g = gradeDoc(item.doc, lines, policy)
    if (!counted && !g.correct && !lv.spend('lab', ctx)) return
    if (!counted) {
      lv.started(ctx)
      setCounted(true)
      if (!g.correct) setMistakes((x) => x + 1)
      else update((s) => awardXp(s, `despacho:${c.id}:${step}`, 10, 'lab'))
    }
    if (g.correct) lv.completed()
    setResult(g)
  }
  const choose = (i: number) => {
    if (pick !== null) return
    setPick(i)
    if (!c.final.options[i].ok) setMistakes((x) => x + 1)
  }
  const finish = () => {
    const stars = starsFor(mistakes)
    update((s) => {
      const prev = s.labx.despacho ?? { cases: {} }
      const old = prev.cases[c.id]
      const cases = old && old.stars >= stars ? prev.cases : { ...prev.cases, [c.id]: { stars, at: new Date().toISOString() } }
      return awardXp({ ...s, labx: { ...s.labx, despacho: { ...prev, cases } } }, `despacho:${c.id}:done`, 20, 'lab')
    })
    toast({ es: `Caso terminado: ${stars} ⭐`, en: `Case finished: ${stars} ⭐` }, 'success')
    go(n + 1)
  }

  return (
    <div className="mt-4 space-y-4" data-testid="despacho-case">
      <div className="flex items-center gap-3">
        <Button variant="ghost" onClick={onExit} aria-label="Volver al despacho">
          <ArrowLeft className="h-4 w-4" /> Despacho
        </Button>
        <span className="text-3xl">{c.emoji}</span>
        <div className="min-w-0">
          <p className="font-semibold text-navy-900 dark:text-white">{c.name}</p>
          <p className="text-xs text-navy-500">{c.business}</p>
        </div>
      </div>
      <div className="flex gap-1" aria-hidden>
        {Array.from({ length: n + 2 }, (_, i) => (
          <span key={i} className={cx('h-1.5 flex-1 rounded-full', i <= step + 1 ? 'bg-electric-500' : 'bg-navy-100 dark:bg-navy-800')} />
        ))}
      </div>

      {step === -1 && (
        <Card className="space-y-2">
          {c.intro.map((x, i) => (
            <Bubble key={i} who={i === 0 ? c.emoji : undefined}>{x}</Bubble>
          ))}
          <Bubble me>Claro, déjeme revisar sus papeles. 📂</Bubble>
          <div className="pt-2">
            <Button onClick={() => go(0)} data-testid="case-start">Revisar sus papeles</Button>
          </div>
        </Card>
      )}

      {item && (!counted && !lv.canStart('lab').ok ? (
        <OutOfLives ctx={ctx} />
      ) : (
        <div className="grid grid-cols-[minmax(0,1fr)] gap-4 xl:grid-cols-2">
          <Card className="space-y-3">
            <Bubble who={c.emoji}>{item.say}</Bubble>
            <div className="flex flex-wrap items-center gap-2">
              <Badge tone="electric">Papel {step + 1} de {n}</Badge>
              <p className="text-lg font-semibold text-navy-900 dark:text-white">{t(item.doc.title)}</p>
            </div>
            <p className="text-[15px] text-navy-700 dark:text-navy-200">{t(item.doc.story)}</p>
            {item.doc.extra && <Notice tone="info">{t(item.doc.extra)}</Notice>}
            {item.doc.cfdis.map((x) => (
              <CfdiView key={x.uuid} c={x} />
            ))}
            <AppliedFormulas key={item.doc.id} formulas={item.doc.formulas} />
          </Card>
          <Card className="space-y-3">
            <p className="font-semibold text-navy-900 dark:text-white">Haz la póliza de {c.name}</p>
            <PolicyPicker idPrefix="desp" value={policy} onChange={(p) => { setPolicy(p); setResult(null) }} status={result ? (result.policyOk ? 'ok' : 'bad') : undefined} />
            <JournalEditor idPrefix="desp" accountChoices={c.accounts} lines={lines} onChange={(l) => { setLines(l); setResult(null) }} lineStatus={result?.check.lineStatus} />
            <button type="button" onClick={() => setHint((v) => !v)} className="inline-flex items-center gap-1 text-sm font-semibold text-amber-600">
              <Lightbulb className="h-4 w-4" /> {hint ? 'Ocultar pista' : 'Ver pista'}
            </button>
            {hint && <Rich className="text-sm text-navy-600 dark:text-navy-300" text={t(item.doc.hint)} />}
            {result && (
              <div role="status" className={cx('space-y-1 rounded-xl p-3 text-sm', result.correct ? 'bg-money-500/10 text-money-800 dark:text-money-200' : 'bg-red-500/10 text-red-800 dark:text-red-200')}>
                {!result.policyOk && <p className="font-semibold">{policy === '' ? 'Elige el tipo de póliza.' : `El tipo de póliza no es ${t(POLICY_NAME[policy])}. Piensa: ¿entra dinero, sale dinero o no se mueve?`}</p>}
                {result.check.feedback.map((f, i) => (
                  <p key={i}>{t(f)}</p>
                ))}
              </div>
            )}
            {result && <Bubble who={c.emoji}>{result.correct ? item.ok : item.bad}</Bubble>}
            {(solution || result?.correct) && (
              <div className="space-y-2">
                <p className="text-sm font-semibold text-navy-900 dark:text-white">Póliza correcta: {t(POLICY_NAME[item.doc.policy])} · por qué se mueve cada cuenta</p>
                <Solution lines={item.doc.expected} />
                <TopicLinks ids={item.doc.topics} />
              </div>
            )}
            <div className="flex flex-wrap gap-2">
              {!(result?.correct || solution) && (
                <Button onClick={check} disabled={parseDraft(lines).lines.length === 0} data-testid="desp-check">
                  <BookCheck className="h-4 w-4" /> Comprobar
                </Button>
              )}
              {result && !result.correct && !solution && (
                <Button variant="ghost" onClick={() => setSolution(true)} data-testid="desp-solution">
                  <Eye className="h-4 w-4" /> Ver solución
                </Button>
              )}
              {(result?.correct || solution) && (
                <Button variant="success" onClick={() => go(step + 1)} data-testid="desp-next">
                  {step + 1 < n ? 'Siguiente papel' : 'Responderle a ' + c.name}
                </Button>
              )}
            </div>
          </Card>
        </div>
      ))}

      {step === n && (
        <Card className="space-y-3">
          <Bubble who={c.emoji}>{c.final.ask}</Bubble>
          {c.final.facts && <Notice tone="info">{c.final.facts}</Notice>}
          <div className="grid gap-2">
            {c.final.options.map((o, i) => (
              <button
                key={i}
                type="button"
                onClick={() => choose(i)}
                data-testid={`final-${i}`}
                className={cx(
                  'rounded-xl p-3 text-left text-[15px] ring-1',
                  pick === null ? 'bg-white ring-navy-200 hover:ring-electric-500 dark:bg-navy-900 dark:ring-navy-700' : o.ok ? 'bg-money-50 ring-2 ring-money-500 dark:bg-money-500/10' : pick === i ? 'bg-amber-50 ring-2 ring-amber-500 dark:bg-amber-500/10' : 'opacity-60 ring-navy-200 dark:ring-navy-700',
                )}
              >
                {o.text}
                {pick !== null && (o.ok || pick === i) && <span className="mt-1 block text-sm text-navy-600 dark:text-navy-300">{o.why}</span>}
              </button>
            ))}
          </div>
          {pick !== null && (
            <div className="animate-pop space-y-3">
              <Rich className="text-[15px] text-navy-800 dark:text-navy-100" text={c.final.explain} />
              <table className="w-full text-sm">
                <tbody>
                  {c.final.table.map(([k, v], i) => (
                    <tr key={k} className={cx(i === c.final.table.length - 1 && 'border-t border-navy-200 font-bold dark:border-navy-700')}>
                      <td className="py-1 text-navy-700 dark:text-navy-200">{k}</td>
                      <td className={cx('py-1 text-right tabular-nums', v < 0 ? 'text-red-600' : 'text-navy-900 dark:text-white')}>{v < 0 ? `−${m(-v)}` : m(v)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {c.final.after && <Notice tone="info"><Rich text={c.final.after} /></Notice>}
              <Button onClick={finish} data-testid="case-finish">Entregar a {c.name}</Button>
            </div>
          )}
        </Card>
      )}

      {step === n + 1 && (
        <Card className="space-y-3 text-center">
          <p className="text-5xl">{c.emoji}</p>
          <div className="flex justify-center"><Stars n={starsFor(mistakes)} /></div>
          <Bubble who={c.emoji}>{starsFor(mistakes) === 3 ? c.review.good : c.review.meh}</Bubble>
          <p className="text-sm text-navy-600 dark:text-navy-300">
            Honorarios: <b>{m(Math.round((c.fee * starsFor(mistakes)) / 3))}</b>
            {mistakes > 0 && ` · Errores: ${mistakes}. Repite el caso cuando quieras para ganar las 3 estrellas.`}
          </p>
          {c.refers && (
            <p className="flex items-center justify-center gap-2 font-semibold text-electric-700 dark:text-electric-300">
              <UserPlus className="h-4 w-4" /> ¡Nuevo cliente recomendado: {CASES.find((x) => x.id === c.refers)?.name}!
            </p>
          )}
          <Button onClick={onExit} data-testid="case-exit">Volver al despacho</Button>
        </Card>
      )}
    </div>
  )
}
