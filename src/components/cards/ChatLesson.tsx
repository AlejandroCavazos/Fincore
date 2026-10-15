import { useEffect, useRef, useState, type ReactNode } from 'react'
import { Pin } from 'lucide-react'
import type { ChatLesson as Chat, ChatStep } from '../../content/chats'
import { Button, cx, Rich } from '../ui'

const DELAY = 700

function Bubble({ who, children, tone }: { who: 'them' | 'me'; children: ReactNode; tone?: 'ok' | 'bad' }) {
  return (
    <div className={cx('flex', who === 'me' ? 'justify-end' : 'justify-start')}>
      <div
        className={cx(
          'animate-fade-up max-w-[85%] rounded-2xl px-4 py-2.5 text-[16px] leading-snug',
          who === 'me' ? 'rounded-br-md bg-electric-500 text-white' : 'rounded-bl-md bg-white text-navy-800 shadow-sm ring-1 ring-navy-100 dark:bg-navy-800 dark:text-navy-100 dark:ring-navy-700',
          tone === 'ok' && 'ring-2 ring-money-500/60',
          tone === 'bad' && 'ring-2 ring-amber-500/60',
        )}
      >
        {children}
      </div>
    </div>
  )
}

/**
 * A theory subtopic as a chat: the character's bubbles appear one by one, stop
 * at each challenge until the learner answers, and the answer gets a reply.
 */
export function ChatLesson({ chat, index, header, finishLabel, onFinish }: { chat: Chat; index: number; header: ReactNode; finishLabel: string; onFinish: () => void }) {
  const steps: ChatStep[] = chat.sections[index] ?? []
  const [shown, setShown] = useState(1)
  const [picked, setPicked] = useState<Record<number, number>>({})
  const end = useRef<HTMLDivElement>(null)
  const last = steps[shown - 1]
  const waiting = !!last && 'ask' in last && picked[shown - 1] === undefined
  const done = shown >= steps.length && !waiting
  const typing = !waiting && shown < steps.length

  useEffect(() => {
    if (!typing) return
    const id = window.setTimeout(() => setShown((n) => n + 1), DELAY)
    return () => window.clearTimeout(id)
  }, [typing, shown])
  useEffect(() => {
    end.current?.scrollIntoView({ behavior: 'smooth', block: 'end' })
  }, [shown, picked])

  const them = (text: string, tone?: 'ok' | 'bad') => (
    <Bubble who="them" tone={tone}>
      <Rich text={text} />
    </Bubble>
  )

  return (
    <div className="mx-auto max-w-2xl">
      {header}
      <div className="mt-3 flex items-center gap-3 rounded-2xl bg-white p-3 shadow-sm ring-1 ring-navy-100 dark:bg-navy-900 dark:ring-navy-800">
        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-amber-100 text-2xl dark:bg-amber-500/20" aria-hidden>
          {chat.character.emoji}
        </span>
        <div>
          <p className="font-bold text-navy-900 dark:text-white">{chat.character.name}</p>
          <p className="text-xs text-navy-500 dark:text-navy-300">{typing ? 'escribiendo…' : chat.character.role}</p>
        </div>
      </div>
      <div data-testid="chat-lesson" className="mt-3 space-y-2 rounded-2xl bg-navy-50 p-3 pb-6 dark:bg-navy-950" onClick={() => typing && setShown((n) => n + 1)}>
        {steps.slice(0, shown).map((st, i) => {
          if ('say' in st) return <div key={i}>{them(st.say)}</div>
          if ('tip' in st)
            return (
              <div key={i} className="animate-pop rounded-2xl bg-amber-50 p-3 text-[15px] text-navy-800 ring-1 ring-amber-300 dark:bg-amber-500/10 dark:text-navy-100 dark:ring-amber-500/40">
                <p className="mb-1 flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-amber-600">
                  <Pin className="h-3.5 w-3.5" /> Para recordar
                </p>
                <Rich text={st.tip} />
              </div>
            )
          const choice = picked[i]
          const opt = choice !== undefined ? st.options[choice] : null
          return (
            <div key={i} className="space-y-2" data-testid="chat-ask">
              {them(`**${st.ask}**`)}
              {opt ? (
                <>
                  <Bubble who="me">{opt.text}</Bubble>
                  {them(`${opt.ok ? '✅ ' : '💡 '}${opt.reply}`, opt.ok ? 'ok' : 'bad')}
                </>
              ) : (
                <div className="flex flex-wrap justify-end gap-2 pl-8">
                  {/* Rotate so the right answer is not always first. */}
                  {st.options.map((_, j) => (j + i) % st.options.length).map((k) => st.options[k] && { o: st.options[k], k }).map(({ o, k }) => (
                    <button
                      key={k}
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation()
                        setPicked((p) => ({ ...p, [i]: k }))
                      }}
                      className="animate-fade-up min-h-11 rounded-full border-2 border-electric-500 bg-white px-4 py-2 text-[15px] font-semibold text-electric-600 hover:bg-electric-50 dark:bg-navy-900 dark:text-electric-300"
                    >
                      {o.text}
                    </button>
                  ))}
                </div>
              )}
            </div>
          )
        })}
        {typing && (
          <div className="flex gap-1 pl-2 pt-1" aria-label="escribiendo">
            {[0, 1, 2].map((d) => (
              <span key={d} className="h-2 w-2 animate-bounce rounded-full bg-navy-300" style={{ animationDelay: `${d * 120}ms` }} />
            ))}
          </div>
        )}
        <div ref={end} />
      </div>
      {done && (
        <Button size="lg" className="animate-fade-up mt-4 w-full uppercase tracking-wide shadow-[0_3px_0] shadow-electric-700" onClick={onFinish} data-testid="chat-finish">
          {finishLabel}
        </Button>
      )}
    </div>
  )
}
