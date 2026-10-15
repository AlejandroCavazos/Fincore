import { useState } from 'react'
import { ArrowLeft, FolderPlus, Send, Trash2 } from 'lucide-react'
import { JournalBook, LedgerBook, StatementsBook, TrialBook } from '../../components/lab/Books'
import { JournalEditor } from '../../components/JournalEditor'
import { Button, Card, Notice, Segmented } from '../../components/ui'
import { isBalanced, parseDraft, sumSide, type DraftLine } from '../../lib/accounting'
import type { PolicyType } from '../../lib/cfdi'
import { fmtMoney } from '../../lib/numbers'
import type { LabProject, LabProjectEntry } from '../../lib/progress'
import { useI18n, useStore } from '../../state/store'
import LabSheet from './LabSheet'
import LabTemplates, { type TemplateEntry } from './LabTemplates'
import { blankLines, PolicyPicker } from './LabPractice'

type View = 'entries' | 'journal' | 'ledger' | 'trial' | 'statements' | 'templates' | 'sheet'
export const MAX_PROJECTS = 20

const today = () => new Date().toISOString().slice(0, 10)
const uid = () => `${Date.now().toString(36)}${Math.random().toString(36).slice(2, 6)}`

export default function LabProjects() {
  const { state, update, toast } = useStore()
  const { tx } = useI18n()
  const projects = state.labx.projects
  const [openId, setOpenId] = useState<string | null>(null)
  const [name, setName] = useState('')
  const project = projects.find((p) => p.id === openId)

  const setProject = (id: string, f: (p: LabProject) => LabProject) =>
    update((s) => ({ ...s, labx: { ...s.labx, projects: s.labx.projects.map((p) => (p.id === id ? f(p) : p)) } }))

  if (project) return <ProjectView project={project} onBack={() => setOpenId(null)} setProject={(f) => setProject(project.id, f)} />

  const create = () => {
    const n = name.trim()
    if (!n || projects.length >= MAX_PROJECTS) return
    const p: LabProject = { id: uid(), name: n.slice(0, 60), createdAt: new Date().toISOString(), entries: [], sheet: {} }
    update((s) => ({ ...s, labx: { ...s.labx, projects: [...s.labx.projects, p] } }))
    setName('')
    setOpenId(p.id)
    toast({ es: 'Proyecto creado.', en: 'Project created.' }, 'success')
  }

  return (
    <div className="mt-4 space-y-4">
      <Card className="space-y-2">
        <p className="text-lg font-semibold text-navy-900 dark:text-white">{tx('Hoja libre: tus proyectos', 'Free sheet: your projects')}</p>
        <p className="text-[15px] text-navy-700 dark:text-navy-200">
          {tx(
            'Crea un proyecto para tu negocio (real o inventado) y registra lo que quieras. La app arma tu libro diario, el mayor, la balanza, tus estados financieros y tus razones con su explicación. También tienes plantillas de cálculo y una hoja tipo Excel.',
            'Create a project for your business and record anything. The app builds your journal, ledger, trial balance, statements and ratios. You also get calculation templates and an Excel-like sheet.',
          )}
        </p>
        <p className="text-xs text-navy-500">{tx('Tus proyectos se guardan en este dispositivo.', 'Projects are saved on this device.')}</p>
        <div className="flex flex-wrap gap-2">
          <input
            aria-label={tx('Nombre del proyecto', 'Project name')}
            value={name}
            maxLength={60}
            onChange={(e) => setName(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && create()}
            placeholder={tx('Ej. Mi cafetería', 'e.g. My coffee shop')}
            className="min-w-0 flex-1 rounded-xl border border-navy-200 bg-white px-3 py-2 dark:border-navy-700 dark:bg-navy-950"
          />
          <Button onClick={create} disabled={!name.trim() || projects.length >= MAX_PROJECTS}>
            <FolderPlus className="h-4 w-4" /> {tx('Crear proyecto', 'Create project')}
          </Button>
        </div>
      </Card>
      {projects.length > 0 && (
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <Card key={p.id} className="flex flex-col gap-2">
              <button type="button" onClick={() => setOpenId(p.id)} className="text-left">
                <p className="font-semibold text-navy-900 dark:text-white">{p.name}</p>
                <p className="text-xs text-navy-500">
                  {p.entries.length} {tx('pólizas', 'entries')} · {tx('creado', 'created')} {p.createdAt.slice(0, 10)}
                </p>
              </button>
              <div className="mt-auto flex gap-2">
                <Button variant="secondary" onClick={() => setOpenId(p.id)}>
                  {tx('Abrir', 'Open')}
                </Button>
                <Button
                  variant="ghost"
                  aria-label={`${tx('Borrar', 'Delete')} ${p.name}`}
                  onClick={() => {
                    if (window.confirm(tx(`¿Borrar el proyecto "${p.name}"? No se puede deshacer.`, `Delete project "${p.name}"? This cannot be undone.`)))
                      update((s) => ({ ...s, labx: { ...s.labx, projects: s.labx.projects.filter((x) => x.id !== p.id) } }))
                  }}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}

const CASH = ['1101', '1102']

/** Teaching checks on a free entry: balance, and whether the póliza type matches the money movement. */
function entryTips(lines: DraftLine[], kind: PolicyType | '') {
  const p = parseDraft(lines)
  const debit = sumSide(p.lines, 'D')
  const credit = sumSide(p.lines, 'C')
  const cashIn = p.lines.some((l) => CASH.includes(l.accountCode) && l.side === 'D')
  const cashOut = p.lines.some((l) => CASH.includes(l.accountCode) && l.side === 'C')
  const tips: { es: string; en: string }[] = []
  if (p.lines.length >= 2 && !isBalanced(p.lines))
    tips.push({ es: `No cuadra: cargos ${debit.toFixed(2)} y abonos ${credit.toFixed(2)}. En la partida doble siempre deben ser iguales.`, en: `Not balanced: debits ${debit.toFixed(2)} vs credits ${credit.toFixed(2)}.` })
  if (kind === 'I' && p.lines.length && !cashIn) tips.push({ es: 'Una póliza de Ingreso normalmente tiene un cargo a Caja o Bancos (entra dinero). ¿Seguro que es de Ingreso?', en: 'A receipt entry usually debits Cash or Bank.' })
  if (kind === 'E' && p.lines.length && !cashOut) tips.push({ es: 'Una póliza de Egreso normalmente tiene un abono a Caja o Bancos (sale dinero). ¿Seguro que es de Egreso?', en: 'A payment entry usually credits Cash or Bank.' })
  if (kind === 'D' && (cashIn || cashOut)) tips.push({ es: 'Aquí se mueve dinero (Caja o Bancos). Las pólizas de Diario son para operaciones sin dinero, como ventas a crédito o depreciación.', en: 'Money moves here; journal entries are for non-cash operations.' })
  return { p, tips, ok: p.errors.length === 0 && p.lines.length >= 2 && isBalanced(p.lines) }
}

function ProjectView({ project, onBack, setProject }: { project: LabProject; onBack: () => void; setProject: (f: (p: LabProject) => LabProject) => void }) {
  const { t, tx, lang } = useI18n()
  const { toast } = useStore()
  const [view, setView] = useState<View>('entries')
  const [kind, setKind] = useState<PolicyType | ''>('')
  const [date, setDate] = useState(today)
  const [concept, setConcept] = useState('')
  const [lines, setLines] = useState<DraftLine[]>(blankLines)
  const { p, tips, ok } = entryTips(lines, kind)
  const entries = [...project.entries].sort((a, b) => a.date.localeCompare(b.date) || a.id.localeCompare(b.id))

  const add = (e: Omit<LabProjectEntry, 'id'>) => setProject((pr) => ({ ...pr, entries: [...pr.entries, { ...e, id: uid() }] }))
  const save = () => {
    if (!ok || !kind || !concept.trim()) return
    add({ kind, date: /^\d{4}-\d{2}-\d{2}$/.test(date) ? date : today(), description: { es: concept.trim().slice(0, 140), en: concept.trim().slice(0, 140) }, lines: p.lines })
    setLines(blankLines())
    setConcept('')
    toast({ es: 'Póliza guardada en tu proyecto.', en: 'Entry saved.' }, 'success')
  }
  const fromTemplate = (e: TemplateEntry) => {
    add({ kind: 'D', date: today(), description: e.description, lines: e.lines })
    toast({ es: `Póliza de diario registrada: ${t(e.description)}`, en: `Journal entry recorded: ${t(e.description)}` }, 'success')
  }

  return (
    <div className="mt-4 space-y-4">
      <div className="flex flex-wrap items-center gap-2">
        <Button variant="ghost" onClick={onBack}>
          <ArrowLeft className="h-4 w-4" /> {tx('Mis proyectos', 'My projects')}
        </Button>
        <p className="text-lg font-semibold text-navy-900 dark:text-white">{project.name}</p>
      </div>
      <Segmented<View>
        label={tx('Sección del proyecto', 'Project section')}
        value={view}
        onChange={setView}
        options={[
          { value: 'entries', label: tx('Nueva póliza', 'New entry') },
          { value: 'journal', label: tx('Diario', 'Journal') },
          { value: 'ledger', label: tx('Mayor', 'Ledger') },
          { value: 'trial', label: tx('Balanza', 'Trial bal.') },
          { value: 'statements', label: tx('Estados y razones', 'Statements') },
          { value: 'templates', label: tx('Plantillas', 'Templates') },
          { value: 'sheet', label: tx('Hoja', 'Sheet') },
        ]}
      />

      {view === 'entries' && (
        <Card className="space-y-3">
          {project.entries.length === 0 && (
            <Notice tone="info">
              {tx(
                '¿No sabes por dónde empezar? Registra lo que pusiste para abrir tu negocio: por ejemplo, cargo a Bancos y abono a Capital social por el dinero que aportaste. Es una póliza de Ingreso porque entra dinero.',
                'Not sure where to start? Record what you put in to open the business: debit Bank, credit Share capital. It is a receipt entry.',
              )}
            </Notice>
          )}
          <PolicyPicker idPrefix="proj" value={kind} onChange={setKind} />
          <div className="grid gap-3 sm:grid-cols-[10rem_minmax(0,1fr)]">
            <div>
              <label htmlFor="proj-date" className="mb-1 block text-sm font-medium">
                {tx('Fecha', 'Date')}
              </label>
              <input id="proj-date" type="date" value={date} onChange={(e) => setDate(e.target.value)} className="w-full rounded-xl border border-navy-200 bg-white px-3 py-2 dark:border-navy-700 dark:bg-navy-950" />
            </div>
            <div>
              <label htmlFor="proj-concept" className="mb-1 block text-sm font-medium">
                {tx('Concepto', 'Description')}
              </label>
              <input id="proj-concept" maxLength={140} value={concept} onChange={(e) => setConcept(e.target.value)} placeholder={tx('Ej. Venta de contado, factura A-120', 'e.g. Cash sale, invoice A-120')} className="w-full rounded-xl border border-navy-200 bg-white px-3 py-2 dark:border-navy-700 dark:bg-navy-950" />
            </div>
          </div>
          <JournalEditor idPrefix="proj" lines={lines} onChange={setLines} />
          {tips.length > 0 && (
            <div className="space-y-1 rounded-xl bg-amber-500/10 p-3 text-sm text-amber-900 dark:text-amber-100">
              {tips.map((x, i) => (
                <p key={i}>{lang === 'es' ? x.es : x.en}</p>
              ))}
            </div>
          )}
          <Button onClick={save} disabled={!ok || !kind || !concept.trim()}>
            <Send className="h-4 w-4" /> {tx('Guardar póliza', 'Save entry')}
          </Button>
          {(!kind || !concept.trim()) && <p className="text-xs text-navy-500">{tx('Para guardar: elige el tipo de póliza, escribe el concepto y cuadra cargos con abonos.', 'To save: choose the type, write a description and balance the entry.')}</p>}
          {project.entries.length > 0 && (
            <p className="text-xs text-navy-500">
              {project.entries.length} {tx('pólizas en el proyecto. Total cargado:', 'entries. Total debits:')} {fmtMoney(project.entries.reduce((s, e) => s + sumSide(e.lines, 'D'), 0), lang)}
            </p>
          )}
        </Card>
      )}
      {view === 'journal' && <JournalBook entries={entries} onDelete={(id) => setProject((pr) => ({ ...pr, entries: pr.entries.filter((e) => e.id !== id) }))} />}
      {view === 'ledger' && <LedgerBook entries={entries} />}
      {view === 'trial' && <TrialBook entries={entries} />}
      {view === 'statements' && <StatementsBook entries={entries} />}
      {view === 'templates' && <LabTemplates onRecord={fromTemplate} />}
      {view === 'sheet' && <LabSheet cells={project.sheet} onChange={(c) => setProject((pr) => ({ ...pr, sheet: c }))} />}
    </div>
  )
}
