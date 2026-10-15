import { useMemo, useState } from 'react'
import { Sigma } from 'lucide-react'
import { Card, cx, Select } from '../../components/ui'
import { colName, evaluateSheet, SHEET_COLS, SHEET_FORMULAS, SHEET_ROWS, type Cells, type Value } from '../../lib/sheet'
import { useI18n } from '../../state/store'

const show = (v: Value | undefined) => {
  if (v === undefined || v === '') return ''
  if (typeof v === 'string') return v
  const d = v !== 0 && Math.abs(v) < 1 ? 4 : 2
  return v.toLocaleString('es-MX', { maximumFractionDigits: d })
}

/** Plain-language trace of a formula: every reference replaced by its value. */
function trace(formula: string, values: Record<string, Value>) {
  return formula
    .slice(1)
    .replace(/\b([A-Ha-h]\d{1,2}):([A-Ha-h]\d{1,2})\b/g, (r) => `[${r.toUpperCase()}]`)
    .replace(/(?<![[:A-Za-z])\b([A-Ha-h])(\d{1,2})\b(?![\]:])/g, (_, c: string, n: string) => {
      const v = values[`${c.toUpperCase()}${n}`]
      return v === undefined || v === '' ? '0' : show(v)
    })
    .replace(/\*/g, ' × ')
    .replace(/\//g, ' ÷ ')
}

export default function LabSheet({ cells, onChange }: { cells: Cells; onChange: (c: Cells) => void }) {
  const { tx, lang } = useI18n()
  const [sel, setSel] = useState('A1')
  const [draft, setDraft] = useState(cells.A1 ?? '')
  const [help, setHelp] = useState<number | null>(null)
  const values = useMemo(() => evaluateSheet(cells), [cells])

  const select = (ref: string) => {
    commit()
    setSel(ref)
    setDraft(cells[ref] ?? '')
  }
  const commit = (value = draft) => {
    if ((cells[sel] ?? '') === value) return
    const next = { ...cells }
    if (value.trim() === '') delete next[sel]
    else next[sel] = value.slice(0, 500)
    onChange(next)
  }
  const raw = cells[sel] ?? ''
  const v = values[sel]

  return (
    <Card className="space-y-3">
      <p className="text-sm text-navy-600 dark:text-navy-300">
        {tx('Una hoja como la de Excel. Escribe números o fórmulas que empiecen con "=", por ejemplo =A1*16% o =SUMA(A1:A5). Usa el botón de fórmulas si no sabes cuál usar.', 'An Excel-like sheet. Type numbers or formulas starting with "=", e.g. =A1*16% or =SUM(A1:A5).')}
      </p>
      <div className="flex flex-wrap items-end gap-2">
        <label htmlFor="sheet-bar" className="w-10 shrink-0 rounded-lg bg-navy-100 px-2 py-2 text-center font-mono text-sm font-bold dark:bg-navy-800">
          {sel}
        </label>
        <input
          id="sheet-bar"
          aria-label={tx('Contenido de la celda', 'Cell content')}
          value={draft}
          maxLength={500}
          onChange={(e) => setDraft(e.target.value)}
          onBlur={() => commit()}
          onKeyDown={(e) => {
            if (e.key === 'Enter') commit()
          }}
          className="min-w-0 flex-1 rounded-xl border border-navy-200 bg-white px-3 py-2 font-mono text-sm dark:border-navy-700 dark:bg-navy-950"
          placeholder="=SUMA(A1:A5)"
        />
      </div>
      <div className="flex flex-wrap items-end gap-2">
        <div className="min-w-0 flex-1">
          <Select
            id="sheet-formulas"
            label={tx('Fórmulas', 'Formulas')}
            value={help === null ? '' : String(help)}
            onChange={(e) => {
              const i = e.target.value === '' ? null : Number(e.target.value)
              setHelp(i)
              if (i !== null) {
                setDraft(SHEET_FORMULAS[i].formula)
                commit(SHEET_FORMULAS[i].formula)
              }
            }}
          >
            <option value="">{tx('Elige una fórmula para ponerla en la celda…', 'Pick a formula to insert…')}</option>
            {SHEET_FORMULAS.map((f, i) => (
              <option key={i} value={i}>
                {lang === 'es' ? f.name[0] : f.name[1]}
              </option>
            ))}
          </Select>
        </div>
      </div>
      {help !== null && (
        <p className="rounded-xl bg-electric-500/5 p-2 text-sm text-navy-700 ring-1 ring-electric-500/20 dark:text-navy-200">
          <Sigma className="mr-1 inline h-4 w-4 text-electric-500" />
          <span className="font-mono">{SHEET_FORMULAS[help].formula}</span> · {lang === 'es' ? SHEET_FORMULAS[help].help[0] : SHEET_FORMULAS[help].help[1]} {tx('Cambia las celdas si tus datos están en otro lugar.', 'Change the cells if your data is elsewhere.')}
        </p>
      )}
      {raw.startsWith('=') && (
        <p className="break-words rounded-xl bg-navy-50 p-2 font-mono text-xs text-navy-700 dark:bg-navy-950 dark:text-navy-200" data-testid="sheet-trace">
          {tx('¿De dónde sale?', 'Where does it come from?')} {sel} = {trace(raw, values)} = <b>{show(v)}</b>
        </p>
      )}
      <div className="max-h-[60vh] overflow-auto rounded-xl ring-1 ring-navy-200 dark:ring-navy-700">
        <table className="tabular border-collapse text-xs">
          <thead className="sticky top-0 z-10 bg-navy-100 dark:bg-navy-800">
            <tr>
              <th className="sticky left-0 w-8 bg-navy-100 dark:bg-navy-800" />
              {Array.from({ length: SHEET_COLS }).map((_, c) => (
                <th key={c} className="w-24 min-w-24 px-1 py-1 font-semibold text-navy-500">
                  {colName(c)}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: SHEET_ROWS }).map((_, r) => (
              <tr key={r}>
                <th className="sticky left-0 bg-navy-100 px-1 text-navy-500 dark:bg-navy-800">{r + 1}</th>
                {Array.from({ length: SHEET_COLS }).map((_, c) => {
                  const ref = `${colName(c)}${r + 1}`
                  const val = values[ref]
                  const err = typeof val === 'string' && val.startsWith('#')
                  return (
                    <td key={c} className="border border-navy-100 p-0 dark:border-navy-800">
                      <button
                        type="button"
                        aria-label={`${tx('Celda', 'Cell')} ${ref}`}
                        onClick={() => select(ref)}
                        className={cx(
                          'block h-7 w-24 truncate px-1 text-right',
                          typeof val === 'string' && !err && 'text-left',
                          sel === ref ? 'bg-electric-500/15 ring-2 ring-inset ring-electric-500' : 'bg-white dark:bg-navy-950',
                          err && 'text-red-600',
                        )}
                      >
                        {show(val)}
                      </button>
                    </td>
                  )
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-xs text-navy-500">
        {tx('Funciones', 'Functions')}: SUMA, PROMEDIO, MIN, MAX, CONTAR, REDONDEAR, ABS, SI, PAGO, VA, VF, VNA, TIR. {tx('Errores: #DIV/0! (dividiste entre cero), #NOMBRE? (función que no existe), #REF! (celda fuera de la hoja), #CICLO! (la celda se usa a sí misma).', 'Errors: #DIV/0!, #NOMBRE? (unknown function), #REF!, #CICLO! (circular).')}
      </p>
    </Card>
  )
}
