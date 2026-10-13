import type { L } from '../types'

/**
 * Areas of the FINCORE academy (temario v2.0, 12 areas). Each area groups
 * sections of topics; a topic is a lesson. Areas without lessons yet show their
 * planned syllabus ("materias") as coming soon.
 */
export type AreaId =
  | 'contabilidad'
  | 'costos'
  | 'fiscal'
  | 'auditoria'
  | 'finanzas'
  | 'personales'
  | 'inversiones'
  | 'cuantitativas'
  | 'economia'
  | 'derecho'
  | 'tecnologia'
  | 'emprendimiento'

export interface AreaSection {
  title: L
  /** Difficulty stage shown next to the title. */
  stage: L
  lessonIds: string[]
  /** Curriculum level whose exam covers this section, if any. */
  examLevel?: number
}

export interface Area {
  id: AreaId
  title: L
  discipline: L
  description: L
  /** The learner's business in this area: it grows with each mastered topic. */
  business: L
  sections: AreaSection[]
  /** Planned subjects from the syllabus (Spanish, as provided by FINCORE). */
  materias: string[]
}

const BASIC: L = { es: 'Básico', en: 'Basic' }
const MID: L = { es: 'Intermedio', en: 'Intermediate' }
const ADV: L = { es: 'Avanzado', en: 'Advanced' }
const range = (prefix: string, from: number, to: number) => Array.from({ length: to - from + 1 }, (_, i) => `${prefix}-${String(from + i).padStart(2, '0')}`)

export const AREAS: Area[] = [
  {
    id: 'contabilidad',
    title: { es: 'Contabilidad Financiera', en: 'Financial Accounting' },
    discipline: { es: 'Contaduría Pública', en: 'Public Accounting' },
    description: { es: 'De cero a registrar operaciones y leer estados financieros', en: 'From zero to recording transactions and reading financial statements' },
    business: { es: 'Tu cafetería', en: 'Your coffee shop' },
    sections: [
      { title: { es: 'Nivel 1 · Unidad 1. Introducción a la contabilidad', en: 'Level 1 · Unit 1. Introduction to accounting' }, stage: BASIC, lessonIds: range('L1', 1, 3), examLevel: 1 },
      { title: { es: 'Nivel 1 · Unidad 2. Fundamentos contables', en: 'Level 1 · Unit 2. Accounting fundamentals' }, stage: BASIC, lessonIds: range('L1', 4, 7) },
      { title: { es: 'Nivel 1 · Unidad 3. Registro contable básico', en: 'Level 1 · Unit 3. Basic bookkeeping' }, stage: BASIC, lessonIds: range('L1', 8, 11) },
      { title: { es: 'Nivel 1 · Unidad 4. Ciclo contable e información financiera', en: 'Level 1 · Unit 4. Accounting cycle and financial information' }, stage: BASIC, lessonIds: range('L1', 12, 15) },
      { title: { es: 'Nivel 2 · Contabilidad financiera básica', en: 'Level 2 · Basic financial accounting' }, stage: MID, lessonIds: range('L2', 1, 6), examLevel: 2 },
    ],
    materias: [
      'Fundamentos de contabilidad', 'Historia y evolución de la contabilidad', 'Ciclo contable', 'Contabilidad financiera básica, intermedia y avanzada',
      'Normas de Información Financiera mexicanas (NIF)', 'Normas Internacionales de Información Financiera (NIIF/IFRS)', 'Elaboración y presentación de estados financieros',
      'Contabilidad de activos, pasivos y capital', 'Consolidación de estados financieros', 'Contabilidad internacional', 'Contabilidad gubernamental',
      'Sistemas de información contable y cierres contables',
    ],
  },
  {
    id: 'costos',
    title: { es: 'Costos y Contabilidad Administrativa', en: 'Cost and Managerial Accounting' },
    discipline: { es: 'Contaduría Pública y Administración', en: 'Accounting and Management' },
    description: { es: 'Costeo, presupuestos, punto de equilibrio y control de gestión', en: 'Costing, budgets, break-even and management control' },
    business: { es: 'Tu taller', en: 'Your workshop' },
    sections: [{ title: { es: 'Contabilidad de costos', en: 'Cost accounting' }, stage: MID, lessonIds: range('L3', 1, 4), examLevel: 3 }],
    materias: [
      'Fundamentos de contabilidad de costos', 'Clasificación y comportamiento de costos', 'Costeo por órdenes de producción', 'Costeo por procesos',
      'Costeo basado en actividades (ABC)', 'Costos estándar y análisis de variaciones', 'Costos fijos y variables', 'Análisis costo-volumen-utilidad',
      'Punto de equilibrio', 'Presupuestos operativos', 'Contabilidad administrativa', 'Control presupuestal y de gestión',
      'Indicadores de desempeño empresarial', 'Costos para la toma de decisiones',
    ],
  },
  {
    id: 'fiscal',
    title: { es: 'Fiscalidad y Tributación', en: 'Tax' },
    discipline: { es: 'Contaduría Pública y Derecho Fiscal', en: 'Accounting and Tax Law' },
    description: { es: 'ISR, IVA, CFDI, regímenes y cumplimiento ante el SAT', en: 'Income tax, VAT, e-invoicing, regimes and SAT compliance' },
    business: { es: 'Tu despacho contable', en: 'Your accounting firm' },
    sections: [{ title: { es: 'Fundamentos fiscales', en: 'Tax fundamentals' }, stage: ADV, lessonIds: ['L5-01', 'L5-02'], examLevel: 5 }],
    materias: [
      'Fundamentos del sistema tributario mexicano', 'Introducción al Servicio de Administración Tributaria (SAT)', 'Código Fiscal de la Federación (CFF)',
      'Impuesto sobre la Renta (ISR)', 'Ley del Impuesto sobre la Renta (LISR)', 'Impuesto al Valor Agregado (IVA)', 'Ley del Impuesto al Valor Agregado (LIVA)',
      'Regímenes fiscales de personas físicas', 'Regímenes fiscales de personas morales', 'CFDI y facturación electrónica', 'Contabilidad electrónica',
      'Nóminas, retenciones y obligaciones fiscales', 'Seguridad social: IMSS e INFONAVIT', 'Obligaciones y cumplimiento tributario', 'Planeación fiscal lícita',
      'Fiscalidad internacional y tratados fiscales', 'Auditoría fiscal y facultades de comprobación',
    ],
  },
  {
    id: 'auditoria',
    title: { es: 'Auditoría, Control Interno y Riesgos', en: 'Audit, Internal Control and Risk' },
    discipline: { es: 'Contaduría Pública y Auditoría', en: 'Accounting and Audit' },
    description: { es: 'Auditoría financiera, control interno, evidencia y fraude', en: 'Financial audit, internal control, evidence and fraud' },
    business: { es: 'Tu firma de auditoría', en: 'Your audit firm' },
    sections: [{ title: { es: 'Fundamentos de auditoría', en: 'Audit fundamentals' }, stage: ADV, lessonIds: ['L5-03', 'L5-04', 'L5-05'], examLevel: 5 }],
    materias: [
      'Fundamentos de auditoría', 'Normas Internacionales de Auditoría (NIA)', 'Planeación y ejecución de auditorías', 'Evidencia y documentación de auditoría',
      'Control interno', 'Marco COSO', 'Evaluación de riesgos empresariales', 'Auditoría de estados financieros', 'Auditoría interna', 'Auditoría de sistemas ERP',
      'Auditoría de tecnologías de información', 'Auditoría forense', 'Prevención y detección de fraude', 'Cumplimiento y gestión de riesgos',
      'Elaboración de informes de auditoría',
    ],
  },
  {
    id: 'finanzas',
    title: { es: 'Finanzas Corporativas', en: 'Corporate Finance' },
    discipline: { es: 'Finanzas', en: 'Finance' },
    description: { es: 'Valor del dinero, análisis financiero, proyectos y valuación', en: 'Time value of money, financial analysis, projects and valuation' },
    business: { es: 'Tu empresa en crecimiento', en: 'Your growing company' },
    sections: [
      { title: { es: 'Finanzas corporativas', en: 'Corporate finance' }, stage: MID, lessonIds: range('L4', 1, 5), examLevel: 4 },
      { title: { es: 'Análisis y valuación', en: 'Analysis and valuation' }, stage: ADV, lessonIds: range('L6', 1, 4), examLevel: 6 },
    ],
    materias: [
      'Fundamentos de finanzas', 'Matemáticas financieras', 'Valor del dinero en el tiempo', 'Análisis e interpretación de estados financieros', 'Razones financieras',
      'Administración del capital de trabajo', 'Planeación y presupuestación financiera', 'Evaluación de proyectos de inversión', 'Valor presente neto (VPN)',
      'Tasa interna de retorno (TIR)', 'Costo promedio ponderado de capital (WACC)', 'Estructura de capital y financiamiento', 'Valuación de empresas',
      'Modelación financiera', 'Fusiones y adquisiciones (M&A)', 'Finanzas internacionales', 'Reestructuración financiera',
    ],
  },
  {
    id: 'personales',
    title: { es: 'Finanzas Personales y Educación Financiera', en: 'Personal Finance' },
    discipline: { es: 'Educación Financiera', en: 'Financial Education' },
    description: { es: 'Presupuesto, ahorro, crédito, deudas, seguros y retiro', en: 'Budgeting, saving, credit, debt, insurance and retirement' },
    business: { es: 'Tu patrimonio', en: 'Your net worth' },
    sections: [],
    materias: [
      'Historia y funciones del dinero', 'Fundamentos de educación financiera', 'Administración del dinero', 'Presupuestos personales y familiares',
      'Ingresos, gastos y ahorro', 'Inflación y poder adquisitivo', 'Interés simple y compuesto', 'Crédito y tarjetas de crédito', 'CAT, tasas de interés y endeudamiento',
      'Manejo y reducción de deudas', 'Fondo de emergencia', 'Introducción a las inversiones', 'Seguros y protección financiera', 'AFORE y ahorro para el retiro',
      'Planeación financiera y patrimonial', 'Prevención de fraudes financieros', 'Finanzas conductuales y hábitos financieros',
    ],
  },
  {
    id: 'inversiones',
    title: { es: 'Inversiones y Mercados Financieros', en: 'Investments and Markets' },
    discipline: { es: 'Finanzas e Inversiones', en: 'Finance and Investments' },
    description: { es: 'CETES, bonos, acciones, ETFs, portafolios y activos digitales', en: 'Treasury bills, bonds, stocks, ETFs, portfolios and digital assets' },
    business: { es: 'Tu fondo de inversión', en: 'Your investment fund' },
    sections: [{ title: { es: 'Instrumentos y portafolios', en: 'Instruments and portfolios' }, stage: ADV, lessonIds: ['L6-05', 'L6-06'] }],
    materias: [
      'Fundamentos de inversión', 'Sistema financiero mexicano', 'Mercados financieros y bursátiles', 'Mercado de dinero y mercado de capitales', 'CETES y deuda gubernamental',
      'Bonos e instrumentos de renta fija', 'Acciones y renta variable', 'ETFs y fondos de inversión', 'FIBRAs e inversión inmobiliaria',
      'Construcción y diversificación de portafolios', 'Análisis fundamental', 'Introducción al análisis técnico', 'Derivados financieros: fundamentos',
      'Criptomonedas y activos digitales', 'Bitcoin, Ethereum y stablecoins', 'Blockchain aplicado a los mercados financieros', 'Gestión del riesgo de inversión',
      'Estrategias de inversión a largo plazo',
    ],
  },
  {
    id: 'cuantitativas',
    title: { es: 'Finanzas Cuantitativas y Gestión de Riesgos', en: 'Quantitative Finance and Risk' },
    discipline: { es: 'Finanzas y Matemáticas Aplicadas', en: 'Finance and Applied Mathematics' },
    description: { es: 'Estadística, econometría, portafolios, VaR y programación', en: 'Statistics, econometrics, portfolios, VaR and programming' },
    business: { es: 'Tu mesa de análisis', en: 'Your quant desk' },
    sections: [],
    materias: [
      'Matemáticas para finanzas cuantitativas', 'Álgebra lineal y cálculo aplicado', 'Probabilidad y estadística avanzada', 'Estadística inferencial',
      'Econometría financiera', 'Modelos de regresión', 'Series de tiempo financieras', 'Modelos de volatilidad', 'Teoría moderna de portafolios',
      'Optimización financiera', 'Value at Risk (VaR)', 'Riesgo de mercado, crédito y liquidez', 'Modelos de valuación de derivados', 'Simulación Monte Carlo',
      'Programación cuantitativa con Python', 'Machine learning aplicado a finanzas', 'Backtesting y validación de modelos',
    ],
  },
  {
    id: 'economia',
    title: { es: 'Economía y Entorno Empresarial', en: 'Economics' },
    discipline: { es: 'Economía', en: 'Economics' },
    description: { es: 'Oferta y demanda, inflación, PIB, política monetaria y fiscal', en: 'Supply and demand, inflation, GDP, monetary and fiscal policy' },
    business: { es: 'Tu economía', en: 'Your economy' },
    sections: [],
    materias: [
      'Introducción a la economía', 'Historia del pensamiento económico', 'Microeconomía', 'Macroeconomía', 'Oferta, demanda y elasticidad',
      'Teoría del consumidor y del productor', 'Estructuras de mercado y competencia', 'Producto Interno Bruto (PIB)', 'Inflación, empleo y crecimiento económico',
      'Política monetaria', 'Política fiscal', 'Banco de México y banca central', 'Economía internacional y comercio exterior', 'Tipos de cambio', 'Economía empresarial',
      'Teoría de juegos', 'Economía del sector público', 'Finanzas públicas y presupuesto gubernamental', 'Federalismo fiscal mexicano',
      'Coordinación fiscal y transferencias intergubernamentales', 'Deuda pública', 'Desarrollo económico',
    ],
  },
  {
    id: 'derecho',
    title: { es: 'Derecho Empresarial y Regulación', en: 'Business Law and Regulation' },
    discipline: { es: 'Derecho y Negocios', en: 'Law and Business' },
    description: { es: 'Sociedades, contratos, derecho laboral y cumplimiento', en: 'Companies, contracts, labor law and compliance' },
    business: { es: 'Tu empresa constituida', en: 'Your incorporated company' },
    sections: [],
    materias: [
      'Introducción al derecho empresarial', 'Marco jurídico mexicano', 'Derecho mercantil', 'Sociedades mercantiles', 'Constitución legal de empresas',
      'Contratos mercantiles', 'Derecho laboral', 'Ley Federal del Trabajo (LFT)', 'Obligaciones patronales', 'Propiedad intelectual',
      'Marcas, patentes y derechos de autor', 'Derecho financiero y bancario', 'Regulación de instituciones financieras', 'Gobierno corporativo',
      'Prevención de lavado de dinero (PLD)', 'Protección de datos personales', 'Cumplimiento regulatorio y ética empresarial',
    ],
  },
  {
    id: 'tecnologia',
    title: { es: 'Análisis de Datos, Tecnología e IA', en: 'Data, Technology and AI' },
    discipline: { es: 'Tecnología Aplicada a Negocios', en: 'Business Technology' },
    description: { es: 'Excel, Power BI, SQL, Python, ERP, IA y Fintech', en: 'Excel, Power BI, SQL, Python, ERP, AI and Fintech' },
    business: { es: 'Tu área de datos', en: 'Your data team' },
    sections: [],
    materias: [
      'Fundamentos de tecnología empresarial', 'Excel básico, intermedio y avanzado', 'Excel financiero y contable', 'Modelación y automatización con hojas de cálculo',
      'Estadística aplicada a negocios', 'Power BI y visualización de datos', 'Bases de datos y SQL', 'Programación con Python', 'Análisis de datos financieros',
      'Fundamentos de sistemas ERP', 'ERP aplicado a contabilidad, inventarios y finanzas', 'Automatización de procesos contables',
      'Inteligencia artificial aplicada a negocios', 'Fundamentos de machine learning', 'Analítica predictiva', 'Fintech y transformación digital',
      'Blockchain y contratos inteligentes', 'Gobernanza, privacidad y seguridad de datos', 'Desarrollo de herramientas financieras digitales',
    ],
  },
  {
    id: 'emprendimiento',
    title: { es: 'Emprendimiento, Administración y Estrategia', en: 'Entrepreneurship and Strategy' },
    discipline: { es: 'Administración y Negocios', en: 'Business Administration' },
    description: { es: 'Modelos de negocio, estrategia, operaciones y financiamiento', en: 'Business models, strategy, operations and funding' },
    business: { es: 'Tu startup', en: 'Your startup' },
    sections: [],
    materias: [
      'Fundamentos de administración', 'Introducción al emprendimiento', 'Identificación de oportunidades de negocio', 'Modelos de negocio', 'Business Model Canvas',
      'Investigación de mercados', 'Planeación estratégica', 'Análisis FODA y PESTEL', 'Análisis de las cinco fuerzas de Porter', 'Modelos de ingresos y monetización',
      'Administración de operaciones', 'Gestión de proyectos', 'Evaluación de viabilidad empresarial', 'Indicadores de desempeño (KPI)',
      'Innovación y transformación empresarial', 'Estrategias de crecimiento', 'Escalabilidad de negocios', 'Venture Capital y financiamiento de startups',
      'Gobierno y dirección estratégica',
    ],
  },
]

export const getArea = (id: string) => AREAS.find((a) => a.id === id)

/** Area and section that contain a lesson (every lesson belongs to exactly one). */
export function locateLesson(lessonId: string): { area: Area; section: AreaSection } {
  for (const area of AREAS) for (const section of area.sections) if (section.lessonIds.includes(lessonId)) return { area, section }
  return { area: AREAS[0], section: AREAS[0].sections[0] }
}
export const areaOfLesson = (lessonId: string) => locateLesson(lessonId).area

/** Value the learner's business starts at and gains per mastered topic (MXN, illustrative). */
export const BUSINESS_BASE = 10000
export const BUSINESS_PER_TOPIC = 1500
