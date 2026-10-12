// Subscription tiers. Contents and prices are a draft until pricing is decided;
// nothing here is enforced yet (no accounts or payments exist).
export type PlanId = 'free' | 'plus' | 'pro' | 'institutional'

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
      ['Laboratorio contable y calculadoras', 'Accounting lab and calculators'],
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
  {
    id: 'institutional',
    name: ['Institucional', 'Institutional'],
    tagline: ['Para universidades y despachos', 'For universities and firms'],
    price: null,
    features: [
      ['Todo lo de Pro para cada alumno', 'Everything in Pro for each student'],
      ['Grupos y panel del profesor', 'Groups and a teacher dashboard'],
      ['Facturación por volumen', 'Volume billing'],
    ],
  },
]

const PLAN_IDS: PlanId[] = ['free', 'plus', 'pro', 'institutional']

/** Plan from a `subscriptions` row; anything missing, unknown or not active counts as Free. */
export function planFromRow(row: { plan?: unknown; status?: unknown } | null | undefined): PlanId {
  if (!row || !PLAN_IDS.includes(row.plan as PlanId)) return 'free'
  return row.status === 'active' || row.status === 'trialing' ? (row.plan as PlanId) : 'free'
}

/** Test mode: every plan costs $0 and can be picked from the Plans page. */
export const freePlansMode = import.meta.env.VITE_FREE_PLANS === 'true'
