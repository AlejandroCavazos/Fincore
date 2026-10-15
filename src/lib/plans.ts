// Subscription tiers. Contents and prices are a draft until pricing is decided;
// nothing here is enforced yet (no accounts or payments exist).
export type PlanId = 'free' | 'plus' | 'pro'

export interface Plan {
  id: PlanId
  name: [string, string]
  tagline: [string, string]
  /** null = price not decided yet */
  price: null
  features: [string, string][]
  highlight?: boolean
}

export const PLANS: Plan[] = [
  {
    id: 'free',
    name: ['Gratis', 'Free'],
    tagline: ['Para empezar a aprender', 'To start learning'],
    price: null,
    features: [
      ['Todas las lecciones y los 6 niveles', 'All lessons and the 6 levels'],
      ['Ejercicios, repaso y evaluaciones', 'Exercises, review and exams'],
      ['Laboratorio contable: práctica nivel Básico', 'Accounting lab: Basic practice level'],
      ['Calculadoras', 'Calculators'],
      ['Tutor local sin IA', 'Local tutor without AI'],
      ['Algunas preguntas al tutor con IA por día', 'A few AI tutor questions per day'],
    ],
  },
  {
    id: 'plus',
    name: ['Plus', 'Plus'],
    tagline: ['Para estudiar a diario', 'For daily study'],
    price: null,
    highlight: true,
    features: [
      ['Todo lo de Gratis', 'Everything in Free'],
      ['Laboratorio completo: 3 niveles de práctica con CFDI, exámenes de Mes contable y Hoja libre', 'Full lab: 3 CFDI practice levels, monthly exams and Free sheet'],
      ['Más preguntas al tutor con IA', 'More AI tutor questions'],
      ['Progreso sincronizado entre dispositivos', 'Progress synced across devices'],
    ],
  },
  {
    id: 'pro',
    name: ['Pro', 'Pro'],
    tagline: ['Para profesionales y examen', 'For professionals and exam prep'],
    price: null,
    features: [
      ['Todo lo de Plus', 'Everything in Plus'],
      ['Tutor con IA con límite alto', 'AI tutor with a high limit'],
      ['Ejercicios y casos generados con IA', 'AI-generated exercises and cases'],
    ],
  },
]

const PLAN_IDS: PlanId[] = ['free', 'plus', 'pro']

/** Plan from a `subscriptions` row; anything missing, unknown or not active counts as Free. */
export function planFromRow(row: { plan?: unknown; status?: unknown } | null | undefined): PlanId {
  // Institutional was retired; any old row with it counts as Pro.
  const plan = row?.plan === 'institutional' ? 'pro' : row?.plan
  if (!row || !PLAN_IDS.includes(plan as PlanId)) return 'free'
  return row.status === 'active' || row.status === 'trialing' ? (plan as PlanId) : 'free'
}

/** Test mode: every plan costs $0 and can be picked from the Plans page. */
export const freePlansMode = import.meta.env.VITE_FREE_PLANS === 'true'
