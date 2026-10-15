import { useEffect, useMemo, useState } from 'react'
import { ChevronLeft, ChevronRight, ClipboardCheck, Play, Trophy } from 'lucide-react'
import { JournalBook, Solution, StatementsBook } from '../../components/lab/Books'
import { AppliedFormulas } from '../../components/lab/CfdiView'
import { JournalEditor } from '../../components/JournalEditor'
import { Badge, Button, Card, cx, Notice } from '../../components/ui'
import { isBalanced, parseDraft, type DraftLine, type PostedEntry } from '../../lib/accounting'
import { EXAM_PASS, EXAM_SIZE, examDocs, LAB_LEVELS, LEVEL_NAME, newSeed, OPENING, POLICY_NAME, type LabLevel, type PolicyType } from '../../lib/cfdi'
import { buildStatements } from '../../lib/statements'
import { fmtMoney } from '../../lib/numbers'
import { awardXp } from '../../lib/progress'
import { useI18n, useStore } from '../../state/store'
import { blankLines, DocHeader, gradeDoc, PolicyPicker, TopicLinks } from './LabPractice'

interface Answer {
  lines: DraftLine[]
  policy: PolicyType | ''
}
interface Run {
  level: LabLevel
  seed: number
  idx: number
  answers: Record<string, Answer>
  done: boolean
  month: string
}

const KEY = 'fincore-lab-exam'
function loadRun(): Run | null {
  try {
    const r = JSON.parse(localStorage.getItem(KEY) ?? 'null')
    return r && LAB_LEVELS.includes(r.level) && typeof r.seed === 'number' && typeof r.month === 'string' ? (r as Run) : null
  } catch {
    return null
  }
}
function saveRun(r: Run | null) {
  try {
    if (r) localStorage.setItem(KEY, JSON.stringify(r))
    else localStorage.removeItem(KEY)
  } catch {
    /* storage unavailable: the exam still works for this visit */
  }
}

const opening: PostedEntry = { id: 'APERTURA', date: '', description: { es: 'Saldos iniciales del mes (ya registrados)', en: 'Opening balances (already recorded)' }, lines: OPENING }

export default function LabExam({ unlocked }: { unlocked: Record<LabLevel, boolean> }) {
  const { state, update, toast } = useStore()
  const { t, tx } = useI18n()
  const [run, setRun] = useState<Run | null>(loadRun)
  useEffect(() => saveRun(run), [run])
  const docs = useMemo(() => (run ? examDocs(run.level, run.seed, new Date(`${run.month}-15T12:00:00Z`)) : []), [run?.level, run?.seed, run?.month]) // eslint-disable-line react-hooks/exhaustive-deps

  const start = (level: LabLevel) => setRun({ level, seed: newSeed(), idx: 0, answers: {}, done: false, month: new Date().toISOString().slice(0, 7) })

  if (!run)
    return (
      <div className="mt-4 space-y-4">
        <Card className="space-y-2">
          <p className="flex items-center gap-2 text-lg font-semibold text-navy-900 dark:text-white">
            <ClipboardCheck className="h-5 w-5 text-electric-500" /> {tx('Examen: Mes contable', 'Exam: Accounting month')}
          </p>
          <p className="text-[15px] text-navy-700 dark:text-navy-200">
            {tx(
              'Te llega todo lo que pasó en tu negocio durante un mes: facturas de ventas, compras, gastos, pagos y nómina. Registras cada documento sin ayuda. Al terminar recibes tu calificación, cada error explicado y tus estados financieros armados con tus pólizas.',
              'You receive everything that happened in your business in a month. Record each document without help. At the end you get your grade, each mistake explained and your financial statements built from your entries.',
            )}
          </p>
          <p className="text-sm text-navy-500">
            {tx(`Apruebas con ${EXAM_PASS * 100}% o más y se desbloquea el siguiente nivel. Cada examen es distinto.`, `Pass with ${EXAM_PASS * 100}% or more to unlock the next level. Every exam is different.`)}
          </p>
        </Card>
        <div className="grid gap-3 sm:grid-cols-3">
          {LAB_LEVELS.map((lv) => {
            const r = state.labx.exams[lv]
            return (
              <Card key={lv} className="space-y-2">
                <div className="flex items-center justify-between">
                  <p className="font-semibold text-navy-900 dark:text-white">{t(LEVEL_NAME[lv])}</p>
                  {r?.passedAt && <Badge tone="money">{tx('Aprobado', 'Passed')}</Badge>}
                </div>
                <p className="text-xs text-navy-500">
                  {EXAM_SIZE[lv]} {tx('documentos', 'documents')}
                  {r ? ` · ${tx('mejor', 'best')} ${Math.round(r.best * 100)}% · ${r.tries} ${tx('intentos', 'tries')}` : ''}
                </p>
                <Button onClick={() => start(lv)} disabled={!unlocked[lv]}>
                  <Play className="h-4 w-4" /> {unlocked[lv] ? tx('Empezar', 'Start') : tx('Bloqueado 🔒', 'Locked 🔒')}
                </Button>
              </Card>
            )
          })}
        </div>
      </div>
    )

  const answer = (id: string): Answer => run.answers[id] ?? { lines: blankLines(), policy: '' }
  const setAnswer = (id: string, a: Partial<Answer>) => setRun({ ...run, answers: { ...run.answers, [id]: { ...answer(id), ...a } } })
  const answered = (id: string) => parseDraft(answer(id).lines).lines.length > 0

  if (!run.done) {
    const doc = docs[run.idx]
    const a = answer(doc.id)
    const missing = docs.filter((d) => !answered(d.id)).length
    const finish = () => {
      if (missing && !window.confirm(tx(`Te faltan ${missing} documentos sin registrar. ¿Entregar de todos modos?`, `${missing} documents are empty. Submit anyway?`))) return
      const score = docs.reduce((s, d) => s + gradeDoc(d, answer(d.id).lines, answer(d.id).policy).score, 0) / docs.length
      const passed = score >= EXAM_PASS
      update((s) => {
        const prev = s.labx.exams[run.level]
        let n = { ...s, labx: { ...s.labx, exams: { ...s.labx.exams, [run.level]: { best: Math.max(prev?.best ?? 0, score), tries: (prev?.tries ?? 0) + 1, ...(prev?.passedAt ? { passedAt: prev.passedAt } : passed ? { passedAt: new Date().toISOString() } : {}) } } } }
        if (passed) n = awardXp(n, `labx-exam:${run.level}`, 100, 'lab')
        return n
      })
      if (passed) toast({ es: '¡Aprobaste el examen!', en: 'You passed the exam!' }, 'success')
      setRun({ ...run, done: true })
    }
    return (
      <div className="mt-4 space-y-4">
        <div className="flex flex-wrap items-center gap-2">
          <Badge tone="electric">
            {tx('Examen', 'Exam')} · {t(LEVEL_NAME[run.level])}
          </Badge>
          <span className="text-sm text-navy-500">
            {tx('Documento', 'Document')} {run.idx + 1} / {docs.length}
          </span>
          <button type="button" className="ml-auto text-xs font-semibold text-red-600" onClick={() => window.confirm(tx('¿Abandonar el examen? Se perderán tus respuestas.', 'Quit the exam? Your answers will be lost.')) && setRun(null)}>
            {tx('Abandonar', 'Quit')}
          </button>
        </div>
        <ol className="flex flex-wrap gap-1.5" aria-label={tx('Documentos del mes', 'Documents of the month')}>
          {docs.map((d, i) => (
            <li key={d.id}>
              <button
                type="button"
                onClick={() => setRun({ ...run, idx: i })}
                aria-current={i === run.idx}
                aria-label={`${tx('Documento', 'Document')} ${i + 1}`}
                className={cx('h-8 w-8 rounded-lg text-xs font-bold ring-1', i === run.idx ? 'bg-electric-500 text-white ring-electric-500' : answered(d.id) ? 'bg-money-500/15 text-money-700 ring-money-500/40 dark:text-money-200' : 'bg-white text-navy-500 ring-navy-200 dark:bg-navy-900 dark:ring-navy-700')}
              >
                {i + 1}
              </button>
            </li>
          ))}
        </ol>
        <div className="grid grid-cols-[minmax(0,1fr)] gap-4 xl:grid-cols-2">
          <Card className="space-y-3">
            <DocHeader doc={doc} />
          </Card>
          <Card className="space-y-3">
            <p className="font-semibold text-navy-900 dark:text-white">{tx('Tu póliza', 'Your entry')}</p>
            <PolicyPicker idPrefix="exam" value={a.policy} onChange={(p) => setAnswer(doc.id, { policy: p })} />
            <JournalEditor idPrefix="exam" lines={a.lines} onChange={(l) => setAnswer(doc.id, { lines: l })} />
            <p className="text-xs text-navy-500">{tx('Sin pistas ni correcciones: las verás al entregar.', 'No hints or corrections: you will see them after submitting.')}</p>
            <div className="flex flex-wrap gap-2">
              <Button variant="secondary" disabled={run.idx === 0} onClick={() => setRun({ ...run, idx: run.idx - 1 })}>
                <ChevronLeft className="h-4 w-4" /> {tx('Anterior', 'Previous')}
              </Button>
              {run.idx < docs.length - 1 ? (
                <Button onClick={() => setRun({ ...run, idx: run.idx + 1 })}>
                  {tx('Siguiente', 'Next')} <ChevronRight className="h-4 w-4" />
                </Button>
              ) : (
                <Button variant="success" onClick={finish}>
                  <ClipboardCheck className="h-4 w-4" /> {tx('Entregar examen', 'Submit exam')}
                </Button>
              )}
            </div>
            {run.idx < docs.length - 1 && (
              <button type="button" onClick={finish} className="text-sm font-semibold text-electric-600 underline dark:text-electric-300">
                {tx('Entregar examen', 'Submit exam')}
              </button>
            )}
          </Card>
        </div>
      </div>
    )
  }

  return <ExamResults docs={docs} answer={answer} onRetry={() => start(run.level)} onClose={() => setRun(null)} />
}

function ExamResults({ docs, answer, onRetry, onClose }: { docs: ReturnType<typeof examDocs>; answer: (id: string) => Answer; onRetry: () => void; onClose: () => void }) {
  const { t, tx, lang } = useI18n()
  const [open, setOpen] = useState<string | null>(null)
  const graded = docs.map((d) => ({ d, a: answer(d.id), g: gradeDoc(d, answer(d.id).lines, answer(d.id).policy) }))
  const score = graded.reduce((s, x) => s + x.g.score, 0) / docs.length
  const passed = score >= EXAM_PASS
  const mine: PostedEntry[] = [opening]
  const right: PostedEntry[] = [opening]
  for (const { d, a } of graded) {
    const p = parseDraft(a.lines)
    if (!p.errors.length && p.lines.length >= 2 && isBalanced(p.lines)) mine.push({ id: d.id, date: d.cfdis[d.cfdis.length - 1].date, description: d.title, lines: p.lines })
    right.push({ id: d.id, date: d.cfdis[d.cfdis.length - 1].date, description: d.title, lines: d.expected })
  }
  const [view, setView] = useState<'docs' | 'statements' | 'journal'>('docs')
  const correctNet = buildStatements(right).totals.netIncome
  const myNet = buildStatements(mine).totals.netIncome
  return (
    <div className="mt-4 space-y-4">
      <Card className={cx('space-y-2', passed ? 'ring-2 ring-money-500' : 'ring-2 ring-amber-500')}>
        <p className="flex items-center gap-2 text-xl font-bold text-navy-900 dark:text-white" data-testid="exam-score">
          <Trophy className={cx('h-6 w-6', passed ? 'text-money-500' : 'text-amber-500')} /> {Math.round(score * 100)}% · {passed ? tx('¡Aprobado!', 'Passed!') : tx('Aún no apruebas', 'Not passed yet')}
        </p>
        <p className="text-sm text-navy-600 dark:text-navy-300">
          {graded.filter((x) => x.g.correct).length} / {docs.length} {tx('pólizas perfectas.', 'perfect entries.')}{' '}
          {passed ? tx('Se desbloqueó el siguiente nivel.', 'The next level is unlocked.') : tx(`Necesitas ${EXAM_PASS * 100}%. Revisa tus errores abajo y vuelve a intentarlo con un mes nuevo.`, `You need ${EXAM_PASS * 100}%. Review your mistakes and try a new month.`)}
        </p>
        <div className="flex flex-wrap gap-2">
          <Button onClick={onRetry}>{tx('Otro mes', 'Another month')}</Button>
          <Button variant="secondary" onClick={onClose}>
            {tx('Salir', 'Exit')}
          </Button>
        </div>
      </Card>

      <div role="radiogroup" aria-label={tx('Revisión', 'Review')} className="flex flex-wrap gap-2">
        {(
          [
            ['docs', tx('Revisión de cada documento', 'Each document')],
            ['statements', tx('Tus estados financieros', 'Your statements')],
            ['journal', tx('Tu libro diario', 'Your journal')],
          ] as const
        ).map(([v, label]) => (
          <button key={v} type="button" role="radio" aria-checked={view === v} onClick={() => setView(v)} className={cx('rounded-lg px-3 py-1.5 text-sm font-semibold', view === v ? 'bg-navy-900 text-white dark:bg-white dark:text-navy-900' : 'bg-navy-100 text-navy-600 dark:bg-navy-800 dark:text-navy-300')}>
            {label}
          </button>
        ))}
      </div>

      {view === 'docs' &&
        graded.map(({ d, a, g }, i) => (
          <Card key={d.id} className="space-y-2">
            <button type="button" className="flex w-full items-center gap-2 text-left" onClick={() => setOpen(open === d.id ? null : d.id)} aria-expanded={open === d.id}>
              <span className={cx('flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-xs font-bold text-white', g.correct ? 'bg-money-500' : g.score >= 0.5 ? 'bg-amber-500' : 'bg-red-500')}>{i + 1}</span>
              <span className="font-semibold text-navy-900 dark:text-white">{t(d.title)}</span>
              <span className="ml-auto text-sm text-navy-500">{Math.round(g.score * 100)}%</span>
            </button>
            {open === d.id && (
              <div className="space-y-3">
                <p className="text-sm text-navy-700 dark:text-navy-200">{t(d.story)}</p>
                {!g.policyOk && (
                  <Notice tone="error">
                    {tx('Tipo de póliza', 'Entry type')}: {a.policy ? t(POLICY_NAME[a.policy]) : '—'} → {tx('correcto', 'correct')}: {t(POLICY_NAME[d.policy])}
                  </Notice>
                )}
                {!g.check.correct && (
                  <div className="space-y-1 rounded-xl bg-red-500/10 p-3 text-sm text-red-800 dark:text-red-200">
                    {g.check.feedback.map((f, k) => (
                      <p key={k}>{t(f)}</p>
                    ))}
                  </div>
                )}
                <p className="text-sm font-semibold">{tx('Póliza correcta', 'Correct entry')}</p>
                <Solution lines={d.expected} />
                <AppliedFormulas formulas={d.formulas} open />
                <TopicLinks ids={d.topics} />
              </div>
            )}
          </Card>
        ))}

      {view === 'statements' && (
        <>
          <Notice tone={Math.abs(myNet - correctNet) < 0.01 ? 'success' : 'warning'}>
            {tx('Tu utilidad del mes', 'Your profit for the month')}: <b>{fmtMoney(myNet, lang)}</b> · {tx('con las pólizas correctas sería', 'with the correct entries it would be')} <b>{fmtMoney(correctNet, lang)}</b>.{' '}
            {tx('Las pólizas que no cuadran no se incluyen.', 'Unbalanced entries are not included.')}
          </Notice>
          <StatementsBook entries={mine} />
        </>
      )}
      {view === 'journal' && <JournalBook entries={mine} />}
    </div>
  )
}
