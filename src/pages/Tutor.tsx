import { useEffect, useRef, useState, type FormEvent } from 'react'
import { Bot, Cpu, Lightbulb, Send, Sparkles, User } from 'lucide-react'
import { Badge, Button, cx, Notice, PageHeader, Rich, Segmented } from '../components/ui'
import { getExercise } from '../content'
import { adaptiveDifficulty, answer, checkGenerated, explainMistake, type GeneratedExercise, type TutorReply } from '../lib/tutor'
import { fmtMoney, fmtNumber } from '../lib/numbers'
import { useI18n, useStore } from '../state/store'

interface Msg {
  id: number
  from: 'user' | 'tutor'
  reply?: TutorReply
  text?: string
  ai?: boolean
}

const API_URL = (import.meta.env.VITE_TUTOR_API_URL as string | undefined)?.trim() || ''

let nextId = 1

export default function Tutor({ exerciseId }: { exerciseId: string | null }) {
  const { update } = useStore()
  const { tx, lang } = useI18n()
  const [msgs, setMsgs] = useState<Msg[]>([])
  const [input, setInput] = useState('')
  const [pending, setPending] = useState<GeneratedExercise | null>(null)
  const [recent, setRecent] = useState<boolean[]>([])
  const [mode, setMode] = useState<'local' | 'ai'>(API_URL ? 'ai' : 'local')
  const [busy, setBusy] = useState(false)
  const listRef = useRef<HTMLDivElement>(null)
  const handledEx = useRef<string | null>(null)

  const push = (m: Omit<Msg, 'id'>) => setMsgs((xs) => [...xs, { ...m, id: nextId++ }])

  useEffect(() => {
    if (!exerciseId || handledEx.current === exerciseId) return
    handledEx.current = exerciseId
    const ex = getExercise(exerciseId)
    if (ex) push({ from: 'tutor', reply: explainMistake(ex, lang) })
    else push({ from: 'tutor', reply: { text: tx('No encontré ese ejercicio.', 'I could not find that exercise.') } })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [exerciseId])

  useEffect(() => {
    listRef.current?.lastElementChild?.scrollIntoView?.({ block: 'end', behavior: 'smooth' })
  }, [msgs])

  const unitFmt = (ex: GeneratedExercise, v: number) => (ex.unit === 'MXN' ? fmtMoney(v, lang) : ex.unit === '%' ? `${fmtNumber(v, lang, 2)} %` : fmtNumber(v, lang, 2))

  const handleLocal = (q: string) => {
    const n = q.toLowerCase()
    if (pending) {
      if (/(pista|hint|ayuda|help)/.test(n)) {
        push({ from: 'tutor', reply: { text: `💡 ${pending.hint}` } })
        return
      }
      if (/(soluci|solution|respuesta|answer|rindo|give up)/.test(n)) {
        push({ from: 'tutor', reply: { text: tx(`La respuesta es **${unitFmt(pending, pending.answer)}**.`, `The answer is **${unitFmt(pending, pending.answer)}**.`), steps: pending.steps } })
        setRecent((r) => [...r.slice(-4), false])
        setPending(null)
        return
      }
      const ok = checkGenerated(pending, q)
      if (ok !== null) {
        setRecent((r) => [...r.slice(-4), ok])
        if (ok) {
          push({ from: 'tutor', reply: { text: tx(`✅ ¡Correcto! ${unitFmt(pending, pending.answer)}.`, `✅ Correct! ${unitFmt(pending, pending.answer)}.`), steps: pending.steps, note: tx('Pide otro ejercicio para seguir; la dificultad se ajusta a tus aciertos.', 'Ask for another exercise to continue; difficulty adapts to your accuracy.') } })
          setPending(null)
        } else {
          push({ from: 'tutor', reply: { text: tx('❌ Aún no. Revisa tu procedimiento, escribe «pista» o «solución», o intenta de nuevo.', '❌ Not yet. Check your procedure, type "hint" or "solution", or try again.') } })
        }
        return
      }
    }
    const r = answer(q, lang, { difficulty: adaptiveDifficulty(recent) })
    if (r.exercise) setPending(r.exercise)
    push({ from: 'tutor', reply: r })
  }

  const handleAi = async (q: string) => {
    setBusy(true)
    try {
      const history = msgs
        .slice(-10)
        .map((m) => ({ role: m.from === 'user' ? 'user' : 'assistant', content: m.text ?? m.reply?.text ?? '' }))
        .filter((m) => m.content)
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ lang, messages: [...history, { role: 'user', content: q }] }),
      })
      const data = (await res.json().catch(() => null)) as { text?: string; error?: string } | null
      if (!res.ok || !data?.text) throw new Error(data?.error || `HTTP ${res.status}`)
      push({ from: 'tutor', ai: true, reply: { text: data.text } })
    } catch (e) {
      push({
        from: 'tutor',
        reply: { text: tx('No pude contactar al tutor con IA. Respondo en modo local:', 'Could not reach the AI tutor. Answering in local mode:'), note: String((e as Error).message).slice(0, 120) },
      })
      handleLocal(q)
    } finally {
      setBusy(false)
    }
  }

  const send = (raw: string) => {
    const q = raw.trim().slice(0, 1000)
    if (!q || busy) return
    push({ from: 'user', text: q })
    setInput('')
    update((s) => ({ ...s, tutor: { messages: s.tutor.messages + 1 } }))
    if (mode === 'ai' && API_URL) void handleAi(q)
    else handleLocal(q)
  }

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    send(input)
  }

  const suggestions = [
    tx('Explica la partida doble', 'Explain double entry'),
    tx('VPN al 10% flujos: -1000, 300, 400, 500', 'NPV at 10% flows: -1000, 300, 400, 500'),
    tx('TIR flujos: -1000, 500, 600', 'IRR flows: -1000, 500, 600'),
    'wacc E=600000 D=400000 Ke=15 Kd=11 T=30',
    tx('Genera un ejercicio de interés compuesto', 'Generate a compound interest exercise'),
    tx('¿Qué es el IVA acreditable?', 'What is creditable VAT?'),
  ]

  return (
    <div className="flex flex-col">
      <PageHeader
        title={tx('Tutor', 'Tutor')}
        subtitle={tx('Explica procedimientos y verifica cálculos con código.', 'Explains procedures and verifies calculations with code.')}
        right={
          mode === 'local' ? (
            <Badge tone="amber">
              <Cpu size={14} aria-hidden /> {tx('Modo local (sin IA)', 'Local mode (no AI)')}
            </Badge>
          ) : (
            <Badge tone="electric">
              <Sparkles size={14} aria-hidden /> {tx('Modo IA', 'AI mode')}
            </Badge>
          )
        }
      />

      {API_URL ? (
        <div className="mb-3">
          <Segmented<'local' | 'ai'>
            label={tx('Modo del tutor', 'Tutor mode')}
            value={mode}
            onChange={setMode}
            options={[
              { value: 'local', label: tx('Local', 'Local') },
              { value: 'ai', label: tx('IA (servidor)', 'AI (server)') },
            ]}
          />
        </div>
      ) : null}

      <Notice tone={mode === 'local' ? 'warning' : 'info'} title={mode === 'local' ? tx('Asistente local limitado', 'Limited local assistant') : tx('Tutor con IA', 'AI tutor')}>
        {mode === 'local'
          ? tx(
              'Este tutor funciona sin conexión y sin inteligencia artificial: reconoce conceptos de una base curada, hace cálculos (VPN, TIR, WACC, punto de equilibrio, VF/VP) con las funciones verificadas de la app y genera ejercicios. No entiende preguntas abiertas como un modelo de lenguaje.',
              'This tutor works offline and without artificial intelligence: it recognises concepts from a curated base, computes (NPV, IRR, WACC, break-even, FV/PV) with the app’s verified functions and generates exercises. It does not understand open questions like a language model.',
            )
          : tx('Las respuestas las genera un modelo de IA a través de tu servidor; la clave nunca llega al navegador. Verifica los cálculos con las calculadoras.', 'Answers are generated by an AI model through your server; the key never reaches the browser. Verify calculations with the calculators.')}
      </Notice>

      <div ref={listRef} className="mt-4 space-y-3" aria-live="polite" data-testid="tutor-log">
        {msgs.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-navy-200 p-4 text-sm text-navy-600 dark:border-navy-700 dark:text-navy-300">
            <p className="mb-3 flex items-center gap-2 font-medium">
              <Lightbulb size={16} aria-hidden /> {tx('Prueba con:', 'Try:')}
            </p>
            <div className="flex flex-wrap gap-2">
              {suggestions.map((s) => (
                <button key={s} type="button" onClick={() => send(s)} className="rounded-full bg-electric-50 px-3 py-1.5 text-left text-xs font-medium text-electric-700 hover:bg-electric-100 dark:bg-electric-500/15 dark:text-electric-300">
                  {s}
                </button>
              ))}
            </div>
          </div>
        ) : null}
        {msgs.map((m) => (
          <div key={m.id} className={cx('flex gap-2', m.from === 'user' && 'flex-row-reverse')}>
            <div className={cx('mt-1 grid h-8 w-8 shrink-0 place-items-center rounded-full', m.from === 'user' ? 'bg-navy-900 text-white dark:bg-navy-700' : 'bg-electric-500 text-white')} aria-hidden>
              {m.from === 'user' ? <User size={16} /> : <Bot size={16} />}
            </div>
            <div
              className={cx(
                'max-w-[85%] rounded-2xl px-4 py-3 text-sm',
                m.from === 'user' ? 'bg-navy-900 text-white dark:bg-navy-700' : 'border border-navy-100 bg-white text-navy-900 dark:border-navy-800 dark:bg-navy-900 dark:text-navy-50',
              )}
              data-testid={m.from === 'tutor' ? 'tutor-msg' : 'user-msg'}
            >
              <span className="sr-only">{m.from === 'user' ? tx('Tú:', 'You:') : tx('Tutor:', 'Tutor:')}</span>
              {m.text ? <p className="whitespace-pre-wrap">{m.text}</p> : null}
              {m.reply ? (
                <div className="space-y-2">
                  {m.reply.text.split('\n').map((p, i) => (
                    <Rich key={i} text={p} className="whitespace-pre-wrap" />
                  ))}
                  {m.reply.exercise ? <p className="rounded-xl bg-electric-50 p-3 font-medium dark:bg-electric-500/10">{m.reply.exercise.prompt}</p> : null}
                  {m.reply.steps?.length ? (
                    <ol className="tabular list-decimal space-y-1 rounded-xl bg-navy-50 py-2 pr-3 pl-7 font-mono text-xs dark:bg-navy-950">
                      {m.reply.steps.map((s, i) => (
                        <li key={i}>{s}</li>
                      ))}
                    </ol>
                  ) : null}
                  {m.reply.note ? <p className="text-xs text-navy-500 dark:text-navy-300">{m.reply.note}</p> : null}
                  {m.reply.link ? (
                    <a href={m.reply.link.href} className="inline-block text-sm font-semibold text-electric-600 underline-offset-2 hover:underline dark:text-electric-300">
                      {m.reply.link.label} →
                    </a>
                  ) : null}
                  {m.ai ? <p className="text-[11px] text-navy-400">{tx('Respuesta generada por IA', 'AI-generated answer')}</p> : null}
                </div>
              ) : null}
            </div>
          </div>
        ))}
        {busy ? <p className="text-sm text-navy-500">{tx('Pensando…', 'Thinking…')}</p> : null}
      </div>

      <form onSubmit={onSubmit} className="sticky bottom-20 mt-4 flex gap-2 rounded-2xl bg-[#f5f7fb]/90 py-2 backdrop-blur lg:bottom-4 dark:bg-navy-950/90">
        <label htmlFor="tutor-input" className="sr-only">
          {tx('Escribe tu pregunta', 'Type your question')}
        </label>
        <input
          id="tutor-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          maxLength={1000}
          autoComplete="off"
          placeholder={pending ? tx('Tu respuesta, «pista» o «solución»', 'Your answer, "hint" or "solution"') : tx('Pregunta un concepto o pide un cálculo…', 'Ask a concept or request a calculation…')}
          className="min-w-0 flex-1 rounded-xl border border-navy-200 bg-white px-4 py-3 text-base text-navy-900 dark:border-navy-700 dark:bg-navy-900 dark:text-white"
        />
        <Button type="submit" disabled={!input.trim() || busy} aria-label={tx('Enviar', 'Send')}>
          <Send size={18} aria-hidden />
        </Button>
      </form>
    </div>
  )
}
