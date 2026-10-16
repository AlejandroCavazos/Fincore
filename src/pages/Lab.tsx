import { lazy, Suspense, useState } from 'react'
import { Lock } from 'lucide-react'
import { Button, Card, PageHeader, Segmented } from '../components/ui'
import { authEnabled } from '../lib/auth'
import type { LabLevel } from '../lib/cfdi'
import { navigate } from '../state/router'
import { useAuth } from '../state/auth'
import { useI18n, useStore } from '../state/store'
import LabPractice from './lab/LabPractice'

const LabExam = lazy(() => import('./lab/LabExam'))
const LabProjects = lazy(() => import('./lab/LabProjects'))
const LabDespacho = lazy(() => import('./lab/LabDespacho'))

type Section = 'despacho' | 'practice' | 'exam' | 'free'

/** Paid feature: Free accounts get Práctica básico; Plus and above get everything. Builds without accounts unlock all. */
export function useLabAccess() {
  const { plan } = useAuth()
  const { state } = useStore()
  const paid = !authEnabled || plan !== 'free'
  const passed = (lv: LabLevel) => !!state.labx.exams[lv]?.passedAt
  const unlocked: Record<LabLevel, boolean> = { basico: true, intermedio: paid && passed('basico'), avanzado: paid && passed('intermedio') }
  return { paid, unlocked }
}

function Upgrade() {
  const { tx } = useI18n()
  return (
    <Card className="mt-4 space-y-2 text-center">
      <Lock className="mx-auto h-8 w-8 text-electric-500" />
      <p className="text-lg font-semibold text-navy-900 dark:text-white">{tx('Disponible con tu suscripción', 'Included with a subscription')}</p>
      <p className="mx-auto max-w-lg text-sm text-navy-600 dark:text-navy-300">
        {tx(
          'Con Plus o Pro tienes los tres niveles de práctica, los exámenes de Mes contable y la Hoja libre con tus proyectos, estados financieros, razones, plantillas y hoja de cálculo.',
          'Plus or Pro unlocks all practice levels, the monthly exams and the free sheet with projects, statements, ratios, templates and spreadsheet.',
        )}
      </p>
      <Button onClick={() => navigate('/plans')}>{tx('Ver planes', 'See plans')}</Button>
    </Card>
  )
}

export default function Lab() {
  const { tx } = useI18n()
  const { paid, unlocked } = useLabAccess()
  const [section, setSection] = useState<Section>('despacho')
  return (
    <div>
      <PageHeader title={tx('Laboratorio contable', 'Accounting lab')} subtitle={tx('Practica con facturas (CFDI) de un negocio de práctica, presenta exámenes y lleva tus propios proyectos.', 'Practice with invoices (CFDI), take exams and keep your own projects.')} />
      <Segmented<Section>
        label={tx('Sección del laboratorio', 'Lab section')}
        value={section}
        onChange={setSection}
        options={[
          { value: 'despacho', label: tx('Despacho', 'Firm') },
          { value: 'practice', label: tx('Práctica', 'Practice') },
          { value: 'exam', label: tx('Examen', 'Exam') },
          { value: 'free', label: tx('Hoja libre', 'Free sheet') },
        ]}
      />
      {section === 'practice' && <LabPractice unlocked={unlocked} />}
      <Suspense fallback={<p className="mt-4 text-sm text-navy-500">…</p>}>
        {section === 'despacho' && <LabDespacho paid={paid} />}
        {section === 'exam' && (paid ? <LabExam unlocked={unlocked} /> : <Upgrade />)}
        {section === 'free' && (paid ? <LabProjects /> : <Upgrade />)}
      </Suspense>
      {!paid && section === 'practice' && (
        <p className="mt-4 text-center text-xs text-navy-500">
          {tx('Con tu plan gratis practicas el nivel Básico.', 'The free plan includes the Basic level.')}{' '}
          <button type="button" className="font-semibold text-electric-600 underline" onClick={() => navigate('/plans')}>
            {tx('Ver planes', 'See plans')}
          </button>
        </p>
      )}
    </div>
  )
}
