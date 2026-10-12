import { ChevronRight } from 'lucide-react'
import { LEVELS } from '../content/curriculum'
import { lessonForTopic } from '../content'
import { Badge, Card, PageHeader, ProgressBar } from '../components/ui'
import { levelProgress } from '../lib/selectors'
import { useI18n, useStore } from '../state/store'

const COLORS = ['from-electric-500 to-electric-700', 'from-navy-500 to-navy-700', 'from-money-500 to-money-700', 'from-electric-600 to-navy-700', 'from-navy-600 to-navy-900', 'from-money-600 to-navy-800']

export default function Courses() {
  const { state } = useStore()
  const { t, tx } = useI18n()
  return (
    <div>
      <PageHeader title={tx('Catálogo de cursos', 'Course catalog')} subtitle={tx('Seis rutas progresivas, de cero a nivel avanzado.', 'Six progressive paths, from zero to advanced.')} />
      <div className="grid gap-4 sm:grid-cols-2">
        {LEVELS.map((l, i) => {
          const p = levelProgress(state, l.id)
          const covered = l.topics.filter((tp) => lessonForTopic(tp.id)).length
          return (
            <a key={l.id} href={`#/path/${l.id}`} className="group block">
              <Card className="h-full overflow-hidden p-0 transition group-hover:ring-electric-400">
                <div className={`bg-gradient-to-br ${COLORS[i]} p-4 text-white`}>
                  <div className="flex items-center justify-between">
                    <Badge className="bg-white/20 text-white">{tx('Nivel', 'Level')} {l.id}</Badge>
                    <ChevronRight className="h-5 w-5 opacity-80" />
                  </div>
                  <h2 className="mt-3 text-lg font-bold">{t(l.title)}</h2>
                  <p className="mt-1 text-sm text-white/85">{t(l.description)}</p>
                </div>
                <div className="space-y-2 p-4">
                  <div className="flex justify-between text-xs text-navy-500 dark:text-navy-300">
                    <span>
                      {p.total} {tx('lecciones', 'lessons')} · {covered}/{l.topics.length} {tx('temas cubiertos', 'topics covered')}
                    </span>
                    <span className="tabular font-semibold">{Math.round(p.ratio * 100)} %</span>
                  </div>
                  <ProgressBar value={p.ratio} tone="money" label={t(l.title)} />
                </div>
              </Card>
            </a>
          )
        })}
      </div>
    </div>
  )
}
