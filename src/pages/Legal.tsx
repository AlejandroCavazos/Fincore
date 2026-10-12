import { ArrowLeft } from 'lucide-react'
import { Card, Notice, Rich, cx } from '../components/ui'
import { COOKIES, PRIVACY, type LegalDoc } from '../content/legal'
import { useI18n } from '../state/store'

/** Highlights still-pending [PLACEHOLDERS] so they are easy to spot. */
function Para({ text }: { text: string }) {
  const parts = text.split(/(\[[^\]]+\])/g)
  return (
    <p className="text-sm leading-relaxed text-navy-700 dark:text-navy-200">
      {parts.map((p, i) =>
        p.startsWith('[') ? (
          <mark key={i} className="rounded bg-amber-200/70 px-1 text-amber-950 dark:bg-amber-500/30 dark:text-amber-100">
            {p}
          </mark>
        ) : (
          <Rich key={i} text={p} />
        ),
      )}
    </p>
  )
}

export function LegalBody({ doc }: { doc: LegalDoc }) {
  return (
    <div className="space-y-5">
      {doc.sections.map((s) => (
        <section key={s.title} className="space-y-2">
          <h2 className="font-semibold text-navy-900 dark:text-white">{s.title}</h2>
          {s.paragraphs.map((p, i) => (
            <Para key={i} text={p} />
          ))}
        </section>
      ))}
    </div>
  )
}

export default function Legal({ which, standalone }: { which: string | undefined; standalone?: boolean }) {
  const { tx } = useI18n()
  const doc = which === 'cookies' ? COOKIES : PRIVACY
  const other = doc.id === 'privacy' ? COOKIES : PRIVACY
  return (
    <div className={cx(standalone && 'min-h-dvh bg-[#f5f7fb] px-4 py-8 dark:bg-navy-950')}>
      <div className="mx-auto max-w-3xl">
        <button type="button" onClick={() => history.back()} className="mb-4 inline-flex items-center gap-1 text-sm font-medium text-electric-600 hover:underline dark:text-electric-300">
          <ArrowLeft className="h-4 w-4" /> {tx('Volver', 'Back')}
        </button>
        <h1 className="text-2xl font-bold text-navy-900 dark:text-white">{doc.title}</h1>
        <p className="mb-4 text-sm text-navy-500 dark:text-navy-300">
          {tx('Última actualización', 'Last updated')}: {doc.updated}
        </p>
        <div className="mb-4">
          <Notice tone="info">{tx('Disponible solo en español.', 'Available in Spanish only.')}</Notice>
        </div>
        <Card>
          <LegalBody doc={doc} />
        </Card>
        <p className="mt-4 text-center text-sm">
          <a href={`#/legal/${other.id}`} className="text-electric-600 hover:underline dark:text-electric-300">
            {other.title}
          </a>
        </p>
      </div>
    </div>
  )
}
