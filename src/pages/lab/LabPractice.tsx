import { useMemo, useState } from 'react'
import { BookCheck, Eye, Lightbulb, Shuffle } from 'lucide-react'
import { AppliedFormulas, CfdiView } from '../../components/lab/CfdiView'
import { Solution } from '../../components/lab/Books'
import { JournalEditor } from '../../components/JournalEditor'
import { Badge, Button, Card, cx, Notice } from '../../components/ui'
import { checkJournal, parseDraft, type DraftLine, type JournalCheck } from '../../lib/accounting'
import { LAB_LEVELS, LEVEL_DESC, LEVEL_NAME, newSeed, POLICY_NAME, practiceDoc, type LabLevel, type PolicyType, type PracticeDoc } from '../../lib/cfdi'
import { awardXp } from '../../lib/progress'
import { LESSONS } from '../../content'
import { navigate } from '../../state/router'
import { useI18n, useStore } from '../../state/store'

export const blankLines = (): DraftLine[] => [
  { accountCode: '', side: 'D', amount: '' },
  { accountCode: '', side: 'D', amount: '' },
  { accountCode: '', side: 'C', amount: '' },
]

/** Lessons linked from a document, by id, with their titles. */
export function TopicLinks({ ids }: { ids: string[] }) {
  const { t, tx } = useI18n()
  const items = ids.map((id) => LESSONS.find((l) => l.id === id)).filter((l) => !!l)
  if (!items.length) return null
  return (
    <div className="flex flex-wrap items-center gap-2 text-xs">
      <span className="text-navy-500">{tx('Repasa:', 'Review:')}</span>
      {items.map((l) => (
        <button key={l.id} type="button" onClick={() => navigate(`/lesson/${l.id}`)} className="rounded-full bg-electric-500/10 px-2 py-0.5 font-semibold text-electric-700 dark:text-electric-300">
          {t(l.title)}
        </button>
      ))}
    </div>
  )
}

export function PolicyPicker({ value, onChange, idPrefix, status }: { value: PolicyType | ''; onChange: (v: PolicyType) => void; idPrefix: string; status?: 'ok' | 'bad' }) {
  const { t, tx } = useI18n()
  const help: Record<PolicyType, [string, string]> = {
    I: ['entra dinero', 'money comes in'],
    E: ['sale dinero', 'money goes out'],
    D: ['no se mueve dinero', 'no money moves'],
  }
  return (
    <fieldset>
      <legend className="mb-1 text-sm font-medium text-navy-700 dark:text-navy-100">{tx('Tipo de póliza', 'Entry type')}</legend>
      <div role="radiogroup" aria-label={tx('Tipo de póliza', 'Entry type')} className="flex flex-wrap gap-2">
        {(['I', 'E', 'D'] as PolicyType[]).map((p) => (
          <button
            key={p}
            id={`${idPrefix}-pol-${p}`}
            type="button"
            role="radio"
            aria-checked={value === p}
            onClick={() => onChange(p)}
            className={cx(
              'rounded-xl px-3 py-1.5 text-left text-sm ring-1',
              value === p ? (status === 'bad' ? 'bg-red-500/10 ring-2 ring-red-500' : status === 'ok' ? 'bg-money-500/10 ring-2 ring-money-500' : 'bg-electric-500/10 ring-2 ring-electric-500') : 'bg-white ring-navy-200 dark:bg-navy-900 dark:ring-navy-700',
            )}
          >
            <span className="font-semibold">{t(POLICY_NAME[p])}</span> <span className="text-xs text-navy-500">({tx(...help[p])})</span>
          </button>
        ))}
      </div>
    </fieldset>
  )
}

/** Grades one document: the journal (accounts, sides, amounts) and the póliza type. */
export function gradeDoc(doc: PracticeDoc, lines: DraftLine[], policy: PolicyType | '') {
  const check = checkJournal(lines, doc.expected)
  const policyOk = policy === doc.policy
  const score = Math.round((check.score * 0.8 + (policyOk ? 0.2 : 0)) * 100) / 100
  return { check, policyOk, score, correct: check.correct && policyOk }
}

export function DocHeader({ doc }: { doc: PracticeDoc }) {
  const { t } = useI18n()
  return (
    <>
      <div className="flex flex-wrap items-center gap-2">
        <Badge tone="electric">{t(LEVEL_NAME[doc.level])}</Badge>
        <p className="text-lg font-semibold text-navy-900 dark:text-white">{t(doc.title)}</p>
      </div>
      <p className="text-[15px] text-navy-700 dark:text-navy-200">{t(doc.story)}</p>
      {doc.extra && <Notice tone="info">{t(doc.extra)}</Notice>}
      <div className="space-y-3">
        {doc.cfdis.map((c) => (
          <CfdiView key={c.uuid} c={c} />
        ))}
      </div>
    </>
  )
}

export default function LabPractice({ unlocked }: { unlocked: Record<LabLevel, boolean> }) {
  const { state, update, toast } = useStore()
  const { t, tx } = useI18n()
  const [level, setLevel] = useState<LabLevel>('basico')
  const [seed, setSeed] = useState(newSeed)
  const doc = useMemo(() => practiceDoc(level, seed), [level, seed])
  const [lines, setLines] = useState<DraftLine[]>(blankLines)
  const [policy, setPolicy] = useState<PolicyType | ''>('')
  const [result, setResult] = useState<{ check: JournalCheck; policyOk: boolean; correct: boolean } | null>(null)
  const [counted, setCounted] = useState(false)
  const [hint, setHint] = useState(false)
  const [solution, setSolution] = useState(false)

  const next = (lv = level) => {
    setLevel(lv)
    setSeed(newSeed())
    setLines(blankLines())
    setPolicy('')
    setResult(null)
    setCounted(false)
    setHint(false)
    setSolution(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  const check = () => {
    const g = gradeDoc(doc, lines, policy)
    setResult(g)
    if (!counted) {
      setCounted(true)
      update((s) => {
        const p = s.labx.practice[level] ?? { done: 0, correct: 0 }
        let n = { ...s, labx: { ...s.labx, practice: { ...s.labx.practice, [level]: { done: p.done + 1, correct: p.correct + (g.correct && !solution ? 1 : 0) } } } }
        if (g.correct && !solution) n = awardXp(n, `labx:${level}:${seed}`, 10, 'lab')
        return n
      })
    }
    if (g.correct) toast({ es: '¡Póliza correcta!', en: 'Correct entry!' }, 'success')
  }
  const stats = state.labx.practice[level]

  return (
    <div className="mt-4 space-y-4">
      <div className="grid gap-2 sm:grid-cols-3">
        {LAB_LEVELS.map((lv) => (
          <button
            key={lv}
            type="button"
            disabled={!unlocked[lv]}
            onClick={() => next(lv)}
            aria-pressed={level === lv}
            className={cx('rounded-xl p-3 text-left ring-1 disabled:opacity-50', level === lv ? 'bg-electric-500/10 ring-2 ring-electric-500' : 'bg-white ring-navy-100 dark:bg-navy-900 dark:ring-navy-800')}
          >
            <p className="font-semibold text-navy-900 dark:text-white">
              {t(LEVEL_NAME[lv])} {!unlocked[lv] && '🔒'}
            </p>
            <p className="text-xs text-navy-500">{unlocked[lv] ? t(LEVEL_DESC[lv]) : tx('Aprueba el examen del nivel anterior para desbloquearlo.', 'Pass the previous level’s exam to unlock it.')}</p>
          </button>
        ))}
      </div>
      <div className="flex flex-wrap items-center gap-3">
        <Button onClick={() => next()} data-testid="random-case">
          <Shuffle className="h-4 w-4" /> {tx('Caso aleatorio', 'Random case')}
        </Button>
        {stats && (
          <p className="text-xs text-navy-500">
            {tx('En este nivel', 'At this level')}: {stats.correct} {tx('correctas a la primera de', 'right first time out of')} {stats.done}
          </p>
        )}
      </div>

      <div className="grid grid-cols-[minmax(0,1fr)] gap-4 xl:grid-cols-2">
        <Card className="space-y-3">
          <DocHeader doc={doc} />
          <AppliedFormulas key={doc.id + seed} formulas={doc.formulas} />
        </Card>

        <Card className="space-y-3">
          <p className="font-semibold text-navy-900 dark:text-white">{tx('Tu póliza', 'Your entry')}</p>
          <p className="text-xs text-navy-500">
            {tx('Ojo: el tipo de CFDI (I, E, P, N) no es lo mismo que el tipo de póliza. La póliza depende de si entra o sale dinero.', 'Note: the CFDI type is not the entry type. The entry type depends on whether money comes in or goes out.')}
          </p>
          <PolicyPicker idPrefix="prac" value={policy} onChange={(p) => { setPolicy(p); setResult(null) }} status={result ? (result.policyOk ? 'ok' : 'bad') : undefined} />
          <JournalEditor idPrefix="prac" lines={lines} onChange={(l) => { setLines(l); setResult(null) }} lineStatus={result?.check.lineStatus} />

          <button type="button" onClick={() => setHint((v) => !v)} className="inline-flex items-center gap-1 text-sm font-semibold text-amber-600">
            <Lightbulb className="h-4 w-4" /> {hint ? tx('Ocultar pista', 'Hide hint') : tx('Ver pista', 'Show hint')}
          </button>
          {hint && <p className="text-sm text-navy-600 dark:text-navy-300">{t(doc.hint)}</p>}

          {result && (
            <div role="status" className={cx('space-y-1 rounded-xl p-3 text-sm', result.correct ? 'bg-money-500/10 text-money-800 dark:text-money-200' : 'bg-red-500/10 text-red-800 dark:text-red-200')}>
              {!result.policyOk && (
                <p className="font-semibold">
                  {policy === ''
                    ? tx('Elige el tipo de póliza.', 'Choose the entry type.')
                    : tx(`El tipo de póliza no es ${t(POLICY_NAME[policy])}. Piensa: ¿entra dinero, sale dinero o no se mueve?`, `The entry type is not ${t(POLICY_NAME[policy])}. Does money come in, go out, or not move?`)}
                </p>
              )}
              {result.check.feedback.map((f, i) => (
                <p key={i} className={i === 0 && result.policyOk ? 'font-semibold' : ''}>
                  {t(f)}
                </p>
              ))}
            </div>
          )}

          {(solution || result?.correct) && (
            <div className="space-y-2">
              <p className="text-sm font-semibold text-navy-900 dark:text-white">
                {tx('Póliza correcta', 'Correct entry')}: {t(POLICY_NAME[doc.policy])} · {tx('por qué se mueve cada cuenta', 'why each account moves')}
              </p>
              <Solution lines={doc.expected} />
              <TopicLinks ids={doc.topics} />
            </div>
          )}

          <div className="flex flex-wrap gap-2">
            <Button onClick={check} disabled={parseDraft(lines).lines.length === 0}>
              <BookCheck className="h-4 w-4" /> {tx('Comprobar', 'Check')}
            </Button>
            {result && !result.correct && !solution && (
              <Button variant="ghost" onClick={() => setSolution(true)}>
                <Eye className="h-4 w-4" /> {tx('Ver solución', 'Show solution')}
              </Button>
            )}
            <Button variant={result?.correct || solution ? 'success' : 'secondary'} onClick={() => next()}>
              <Shuffle className="h-4 w-4" /> {result?.correct || solution ? tx('Siguiente caso', 'Next case') : tx('Caso aleatorio', 'Random case')}
            </Button>
          </div>
        </Card>
      </div>
    </div>
  )
}
