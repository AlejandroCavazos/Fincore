/**
 * Local educational tutor (no AI). Rule-based: concept explanations from a curated
 * knowledge base, calculations through the deterministic finance library (with
 * steps), parametric exercise generation with verified answers, and error
 * explanations for exercises the learner missed. It is explicitly labelled as a
 * limited local assistant in the UI.
 */
import type { Exercise, L, Lang } from '../types'
import * as F from './finance'
import { FIN_ERRORS } from './finErrors'
import { fmtMoney, fmtNumber, fmtPct, parseNumber, withinTolerance } from './numbers'
import { cryptoRng, type Rng } from './shuffle'

export interface TutorReply {
  text: string
  steps?: string[]
  link?: { href: string; label: string }
  note?: string
  /** A generated exercise awaiting an answer. */
  exercise?: GeneratedExercise
}

export interface GeneratedExercise {
  topic: string
  prompt: string
  answer: number
  tolerance: number
  unit: 'MXN' | '%' | 'units'
  hint: string
  steps: string[]
}

interface Concept {
  id: string
  keys: string[]
  title: L
  body: L
  formula?: string
  lesson?: string
}

const C = (id: string, keys: string[], title: L, body: L, formula?: string, lesson?: string): Concept => ({ id, keys, title, body, formula, lesson })

export const CONCEPTS: Concept[] = [
  C('equation', ['ecuacion contable', 'ecuación contable', 'accounting equation', 'activo pasivo capital'], { es: 'Ecuación contable', en: 'Accounting equation' }, {
    es: 'Todo lo que la empresa controla (activo) se financió con recursos de terceros (pasivo) o de los dueños (capital contable). Cada operación mantiene la igualdad.',
    en: 'Everything the entity controls (assets) was financed by third parties (liabilities) or owners (equity). Every transaction keeps the equality.',
  }, 'Activo = Pasivo + Capital contable', 'L1-03'),
  C('debit-credit', ['cargo', 'abono', 'debit', 'credit', 'naturaleza', 'deudora', 'acreedora', 'normal balance'], { es: 'Cargos y abonos', en: 'Debits and credits' }, {
    es: 'Cargar es anotar en el lado izquierdo (debe) y abonar en el derecho (haber). Activos y gastos aumentan con cargos; pasivos, capital e ingresos aumentan con abonos.',
    en: 'A debit is the left side, a credit the right side. Assets and expenses increase with debits; liabilities, equity and revenue increase with credits.',
  }, undefined, 'L1-04'),
  C('double-entry', ['partida doble', 'double entry', 'double-entry', 'poliza', 'póliza', 'asiento', 'journal entry'], { es: 'Partida doble', en: 'Double entry' }, {
    es: 'Toda operación afecta al menos dos cuentas y la suma de cargos es igual a la de abonos. Pero cuadrar no basta: las cuentas y su naturaleza deben ser las correctas.',
    en: 'Every transaction affects at least two accounts and total debits equal total credits. Balancing is not enough: the accounts and sides must be right.',
  }, 'Σ cargos = Σ abonos', 'L1-05'),
  C('trial-balance', ['balanza', 'trial balance', 'libro mayor', 'ledger', 'cuentas t', 't-account', 'cuenta t'], { es: 'Mayor y balanza de comprobación', en: 'Ledger and trial balance' }, {
    es: 'El libro mayor agrupa los movimientos por cuenta (cuentas T). La balanza lista los saldos y comprueba que los cargos totales igualen a los abonos; no detecta errores de clasificación ni omisiones completas.',
    en: 'The ledger groups postings by account (T-accounts). The trial balance lists balances and checks total debits equal total credits; it cannot detect misclassifications or fully omitted entries.',
  }, undefined, 'L1-06'),
  C('statements', ['estado de resultados', 'income statement', 'balance general', 'situacion financiera', 'situación financiera', 'balance sheet'], { es: 'Estados financieros básicos', en: 'Basic financial statements' }, {
    es: 'El estado de situación financiera muestra activos, pasivos y capital a una fecha; el estado de resultados muestra ingresos, costos y gastos de un periodo.',
    en: 'The statement of financial position shows assets, liabilities and equity at a date; the income statement shows revenue, costs and expenses for a period.',
  }, undefined, 'L2-01'),
  C('cashflow', ['flujo de efectivo', 'flujos de efectivo', 'cash flow statement', 'estado de flujos'], { es: 'Estado de flujos de efectivo', en: 'Statement of cash flows' }, {
    es: 'Clasifica entradas y salidas de efectivo en operación, inversión y financiamiento. Utilidad no es lo mismo que efectivo: devengado vs. cobrado.',
    en: 'Classifies cash inflows and outflows into operating, investing and financing. Profit is not cash: accrual vs. collection.',
  }, undefined, 'L2-02'),
  C('depreciation', ['depreciacion', 'depreciación', 'depreciation'], { es: 'Depreciación', en: 'Depreciation' }, {
    es: 'Distribuye el costo de un activo fijo durante su vida útil. En línea recta el cargo anual es constante.',
    en: 'Allocates the cost of a fixed asset over its useful life. Straight-line gives a constant annual charge.',
  }, 'Depreciación anual = (Costo − Valor residual) / Vida útil', 'L2-03'),
  C('inventory', ['inventario', 'inventory', 'peps', 'fifo', 'costo promedio', 'ueps', 'lifo'], { es: 'Inventarios', en: 'Inventories' }, {
    es: 'Bajo NIF C-4 e IAS 2 se permiten PEPS (FIFO) y costo promedio; UEPS (LIFO) no está permitido. En inflación, PEPS da menor costo de ventas.',
    en: 'Under NIF C-4 and IAS 2, FIFO and weighted average are allowed; LIFO is not. With inflation, FIFO gives a lower cost of sales.',
  }, undefined, 'L2-04'),
  C('breakeven', ['punto de equilibrio', 'break even', 'break-even', 'margen de contribucion', 'margen de contribución', 'contribution margin'], { es: 'Punto de equilibrio', en: 'Break-even point' }, {
    es: 'Nivel de ventas en que la utilidad es cero. Cada unidad aporta su margen de contribución (precio − costo variable) para cubrir costos fijos.',
    en: 'Sales level where profit is zero. Each unit contributes its contribution margin (price − variable cost) toward fixed costs.',
  }, 'PE (unidades) = Costos fijos / (Precio − Costo variable unitario)', 'L3-03'),
  C('tvm', ['valor del dinero', 'time value', 'interes compuesto', 'interés compuesto', 'compound interest', 'valor futuro', 'valor presente', 'future value', 'present value'], { es: 'Valor del dinero en el tiempo', en: 'Time value of money' }, {
    es: 'Un peso hoy vale más que un peso mañana porque puede invertirse. Capitalizar lleva valores al futuro; descontar los trae al presente.',
    en: 'A peso today is worth more than a peso tomorrow because it can be invested. Compounding moves values forward; discounting brings them back.',
  }, 'VF = VP × (1 + r)^n     VP = VF / (1 + r)^n', 'L4-01'),
  C('annuity', ['anualidad', 'anualidades', 'annuity', 'amortizacion', 'amortización', 'pago de prestamo', 'loan payment'], { es: 'Anualidades', en: 'Annuities' }, {
    es: 'Serie de pagos iguales a intervalos iguales. Vencida: pagos al final del periodo; anticipada: al inicio.',
    en: 'A series of equal payments at equal intervals. Ordinary: end of period; due: start of period.',
  }, 'VP = PMT × [1 − (1 + r)^−n] / r', 'L4-03'),
  C('npv', ['vpn', 'npv', 'valor presente neto', 'net present value'], { es: 'Valor presente neto (VPN)', en: 'Net present value (NPV)' }, {
    es: 'Suma de los flujos descontados al costo de capital, incluida la inversión inicial. VPN > 0 significa que el proyecto crea valor.',
    en: 'Sum of cash flows discounted at the cost of capital, including the initial investment. NPV > 0 means the project creates value.',
  }, 'VPN = Σ FCt / (1 + r)^t', 'L4-04'),
  C('irr', ['tir', 'irr', 'tasa interna de retorno', 'internal rate of return'], { es: 'Tasa interna de retorno (TIR)', en: 'Internal rate of return (IRR)' }, {
    es: 'Tasa que hace VPN = 0. Puede no existir (todos los flujos del mismo signo) o haber varias (flujos no convencionales); en esos casos decide con el VPN.',
    en: 'The rate that makes NPV = 0. It may not exist (all flows same sign) or be multiple (non-conventional flows); then decide with NPV.',
  }, 'VPN(TIR) = 0', 'L4-04'),
  C('payback', ['payback', 'periodo de recuperacion', 'periodo de recuperación'], { es: 'Payback', en: 'Payback' }, {
    es: 'Tiempo para recuperar la inversión con los flujos acumulados. Ignora el valor del dinero (salvo el descontado) y los flujos posteriores.',
    en: 'Time to recover the investment from cumulative flows. Ignores time value (except the discounted version) and later flows.',
  }, undefined, 'L4-04'),
  C('capm', ['capm', 'beta', 'costo del capital propio', 'cost of equity'], { es: 'CAPM', en: 'CAPM' }, {
    es: 'Estima el rendimiento exigido por los accionistas según el riesgo sistemático (beta).',
    en: 'Estimates the return shareholders require given systematic risk (beta).',
  }, 'Ke = rf + β × (Rm − rf)', 'L4-05'),
  C('wacc', ['wacc', 'costo de capital', 'cost of capital', 'costo promedio ponderado'], { es: 'WACC', en: 'WACC' }, {
    es: 'Costo promedio ponderado de las fuentes de financiamiento a valor de mercado; la deuda se ajusta por el escudo fiscal de los intereses.',
    en: 'Weighted average cost of financing sources at market value; debt is adjusted for the interest tax shield.',
  }, 'WACC = E/V × Ke + D/V × Kd × (1 − T)', 'L4-05'),
  C('isr', ['isr', 'impuesto sobre la renta', 'income tax'], { es: 'ISR (México)', en: 'Income tax (ISR, Mexico)' }, {
    es: 'Impuesto sobre la renta. Para personas morales del régimen general la tasa es 30 % sobre el resultado fiscal (LISR art. 9). El resultado fiscal no es la utilidad contable: hay partidas no deducibles y diferencias temporales.',
    en: 'Income tax. For corporations under the general regime the rate is 30 % of taxable income (LISR art. 9). Taxable income is not book profit: there are non-deductible items and timing differences.',
  }, 'ISR = Resultado fiscal × 30 %', 'L5-02'),
  C('iva', ['iva', 'vat', 'impuesto al valor agregado', 'acreditable', 'trasladado'], { es: 'IVA (México)', en: 'VAT (IVA, Mexico)' }, {
    es: 'Impuesto al consumo. Tasa general 16 % (LIVA art. 1); tasa 0 % para ciertos bienes como la mayoría de alimentos; 8 % en región fronteriza por estímulo vía decreto. El IVA a pagar es el trasladado menos el acreditable.',
    en: 'A consumption tax. General rate 16 % (LIVA art. 1); 0 % on certain goods such as most food; 8 % in the border region by decree. VAT payable is output VAT minus creditable input VAT.',
  }, 'IVA a cargo = IVA trasladado − IVA acreditable', 'L5-02'),
  C('cfdi', ['cfdi', 'factura electronica', 'factura electrónica', 'e-invoice', 'uuid'], { es: 'CFDI', en: 'CFDI (e-invoice)' }, {
    es: 'Comprobante Fiscal Digital por Internet, versión 4.0, timbrado por un PAC con folio fiscal (UUID). Sin CFDI válido, en general no procede la deducción ni el acreditamiento.',
    en: 'Mexico’s digital tax invoice, version 4.0, stamped by a certified provider (PAC) with a fiscal folio (UUID). Without a valid CFDI, deductions and VAT credits generally do not apply.',
  }, undefined, 'L5-02'),
  C('audit-risk', ['riesgo de auditoria', 'riesgo de auditoría', 'audit risk', 'materialidad', 'materiality'], { es: 'Riesgo de auditoría y materialidad', en: 'Audit risk and materiality' }, {
    es: 'El riesgo de auditoría es el de emitir una opinión inadecuada. El auditor ajusta el riesgo de detección según los riesgos inherente y de control. La materialidad es el umbral de error que influiría en las decisiones de los usuarios.',
    en: 'Audit risk is the risk of issuing an inappropriate opinion. The auditor sets detection risk based on inherent and control risks. Materiality is the misstatement threshold that would influence users’ decisions.',
  }, 'RA = RI × RC × RD', 'L5-04'),
  C('internal-control', ['control interno', 'internal control', 'coso', 'segregacion', 'segregación'], { es: 'Control interno', en: 'Internal control' }, {
    es: 'Según COSO 2013 tiene cinco componentes: entorno de control, evaluación de riesgos, actividades de control, información y comunicación, y supervisión. La segregación de funciones evita que una sola persona autorice, registre y custodie.',
    en: 'Under COSO 2013 it has five components: control environment, risk assessment, control activities, information and communication, and monitoring. Segregation of duties prevents one person from authorising, recording and holding custody.',
  }, undefined, 'L5-03'),
  C('fraud', ['fraude', 'fraud', 'triangulo del fraude', 'triángulo del fraude', 'forense', 'forensic', 'benford'], { es: 'Fraude y auditoría forense', en: 'Fraud and forensic audit' }, {
    es: 'El triángulo del fraude: presión, oportunidad y racionalización. Una señal de alerta no prueba fraude: se requiere evidencia suficiente, cadena de custodia y, en su caso, resolución de la autoridad.',
    en: 'The fraud triangle: pressure, opportunity and rationalisation. A red flag does not prove fraud: it requires sufficient evidence, chain of custody and, where applicable, a ruling by the authority.',
  }, undefined, 'L5-05'),
  C('ratios', ['razones financieras', 'ratios', 'roe', 'roa', 'dupont', 'liquidez', 'liquidity', 'prueba acida', 'prueba ácida'], { es: 'Razones financieras', en: 'Financial ratios' }, {
    es: 'Relacionan partidas de los estados financieros para medir liquidez, apalancamiento, rentabilidad y eficiencia. DuPont descompone el ROE en margen × rotación × apalancamiento.',
    en: 'Relate statement items to measure liquidity, leverage, profitability and efficiency. DuPont splits ROE into margin × turnover × leverage.',
  }, 'ROE = Margen neto × Rotación de activos × Multiplicador de capital', 'L6-01'),
  C('dcf', ['dcf', 'flujos descontados', 'discounted cash flow', 'valor terminal', 'terminal value', 'gordon'], { es: 'Valuación DCF', en: 'DCF valuation' }, {
    es: 'Proyecta flujos libres para la firma (FCFF), los descuenta al WACC y agrega un valor terminal (Gordon requiere g < WACC). EV − deuda neta = valor del capital.',
    en: 'Forecast free cash flow to the firm (FCFF), discount at WACC and add a terminal value (Gordon requires g < WACC). EV − net debt = equity value.',
  }, 'VT = FCFFₙ × (1 + g) / (WACC − g)', 'L6-02'),
  C('ev', ['enterprise value', 'equity value', 'valor empresa', 'multiplos', 'múltiplos', 'ev/ebitda', 'p/e'], { es: 'EV, Equity Value y múltiplos', en: 'EV, equity value and multiples' }, {
    es: 'EV = valor del capital + deuda neta (+ minoritarios y preferentes). Los múltiplos (EV/EBITDA, P/U) valúan por comparación con empresas similares.',
    en: 'EV = equity value + net debt (+ minorities and preferred). Multiples (EV/EBITDA, P/E) value by comparison with peers.',
  }, 'EV = Capital + Deuda − Efectivo', 'L6-03'),
  C('bonds', ['bono', 'bonos', 'bond', 'ytm', 'rendimiento al vencimiento', 'cupon', 'cupón'], { es: 'Bonos', en: 'Bonds' }, {
    es: 'El precio de un bono es el valor presente de cupones y principal. Precio y rendimiento se mueven en sentido inverso.',
    en: 'A bond’s price is the present value of coupons and principal. Price and yield move inversely.',
  }, 'P = Σ C/(1+y)^t + VN/(1+y)^n', 'L6-05'),
  C('portfolio', ['portafolio', 'portfolio', 'diversificacion', 'diversificación', 'correlacion', 'correlación', 'var'], { es: 'Portafolios y riesgo', en: 'Portfolios and risk' }, {
    es: 'El riesgo de un portafolio depende de las correlaciones: con ρ < 1 la diversificación reduce la volatilidad sin sacrificar todo el rendimiento.',
    en: 'Portfolio risk depends on correlations: with ρ < 1, diversification reduces volatility without giving up all return.',
  }, 'σp² = wA²σA² + wB²σB² + 2wAwBσAσBρ', 'L6-06'),
]

const norm = (s: string) =>
  s
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')

export function findConcept(q: string): Concept | undefined {
  const n = norm(q)
  let best: { c: Concept; score: number } | undefined
  for (const c of CONCEPTS) {
    for (const k of c.keys) {
      const nk = norm(k)
      const re = new RegExp(`(^|[^a-z])${nk.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}([^a-z]|$)`)
      if (re.test(n)) {
        const score = nk.length
        if (!best || score > best.score) best = { c, score }
      }
    }
  }
  return best?.c
}

/** Extracts signed numbers ("-1,000", "12.5%", "$3,500") in order of appearance. */
export function extractNumbers(text: string): number[] {
  const out: number[] = []
  const re = /-?\$?\d[\d,]*(?:\.\d+)?%?/g
  for (const m of text.match(re) ?? []) {
    const v = parseNumber(m.replace(/^-\$/, '-'))
    if (v !== null) out.push(v)
  }
  return out
}

function keyValue(text: string, keys: string[]): number | undefined {
  for (const k of keys) {
    const re = new RegExp(`(?:^|[\\s,;])${k}\\s*[=:]\\s*(-?[\\d.,]+)\\s*%?`, 'i')
    const m = text.match(re)
    if (m) {
      const v = parseNumber(m[1])
      if (v !== null) return v
    }
  }
  return undefined
}

function rateIn(text: string): number | undefined {
  const m = text.match(/(-?\d+(?:\.\d+)?)\s*%/)
  return m ? Number(m[1]) / 100 : undefined
}

const tr = (lang: Lang, es: string, en: string) => (lang === 'es' ? es : en)
const errText = (code: F.FinErrorCode, lang: Lang) => FIN_ERRORS[code][lang]

// ───────────────────────── Calculation intents ─────────────────────────

function npvIntent(q: string, lang: Lang): TutorReply | null {
  const n = norm(q)
  if (!/\b(vpn|npv|valor presente neto|net present value)\b/.test(n)) return null
  const rate = rateIn(q)
  const after = q.split(/flujos|flows|cf|:/i).slice(1).join(' ')
  const flows = extractNumbers(after.replace(/-?\d+(?:\.\d+)?\s*%/g, ''))
  if (rate === undefined || flows.length < 2)
    return {
      text: tr(lang, 'Para calcular el VPN necesito la tasa y los flujos (el primero es la inversión, normalmente negativo). Ejemplo:', 'To compute NPV I need the rate and the flows (the first is the investment, usually negative). Example:'),
      note: tr(lang, '«VPN al 10% flujos: -1000, 300, 400, 500»', '"NPV at 10% flows: -1000, 300, 400, 500"'),
    }
  const r = F.npv(rate, flows)
  if (!r.ok) return { text: errText(r.error, lang) }
  const steps = flows.map((cf, t) => `t=${t}: ${fmtNumber(cf, lang, 2)} / (1 + ${fmtNumber(rate, lang, 4)})^${t} = ${fmtNumber(cf / Math.pow(1 + rate, t), lang, 2)}`)
  steps.push(tr(lang, `Suma = ${fmtMoney(r.value, lang)}`, `Sum = ${fmtMoney(r.value, lang)}`))
  return {
    text: tr(
      lang,
      `**VPN = ${fmtMoney(r.value, lang)}**. ${r.value > 0 ? 'Como es positivo, el proyecto rinde más que la tasa exigida y crea valor.' : r.value < 0 ? 'Como es negativo, el proyecto no alcanza la tasa exigida: se rechaza.' : 'VPN = 0: rinde exactamente la tasa exigida.'}`,
      `**NPV = ${fmtMoney(r.value, lang)}**. ${r.value > 0 ? 'Positive, so the project returns more than the required rate and creates value.' : r.value < 0 ? 'Negative, so the project falls short of the required rate: reject.' : 'NPV = 0: it earns exactly the required rate.'}`,
    ),
    steps,
    note: tr(lang, 'Cálculo verificado con la función determinista npv() de FINCORE.', 'Computed with FINCORE’s deterministic npv() function.'),
    link: { href: '#/calc/project', label: tr(lang, 'Abrir calculadora VPN/TIR', 'Open NPV/IRR calculator') },
  }
}

function irrIntent(q: string, lang: Lang): TutorReply | null {
  const n = norm(q)
  if (!/\b(tir|irr|tasa interna)\b/.test(n)) return null
  const after = q.split(/flujos|flows|cf|:/i).slice(1).join(' ')
  const flows = extractNumbers(after)
  if (flows.length < 2) return { text: tr(lang, 'Dame los flujos, por ejemplo: «TIR flujos: -1000, 400, 400, 400».', 'Give me the flows, e.g. "IRR flows: -1000, 400, 400, 400".') }
  const r = F.irr(flows)
  if (!r.ok) return { text: errText(r.error, lang), note: tr(lang, 'FINCORE no inventa una TIR cuando no está definida.', 'FINCORE does not invent an IRR when it is undefined.') }
  const roots = r.value.roots.map((x) => fmtPct(x, lang, 2)).join(', ')
  return {
    text: r.value.multiple
      ? tr(lang, `Hay **varias TIR: ${roots}**. Los flujos cambian de signo ${r.value.signChanges} veces; usa el VPN para decidir.`, `There are **multiple IRRs: ${roots}**. Flows change sign ${r.value.signChanges} times; use NPV to decide.`)
      : tr(lang, `**TIR = ${roots}**. Es la tasa a la que el VPN vale cero.`, `**IRR = ${roots}**. It is the rate at which NPV equals zero.`),
    steps: [
      tr(lang, 'Buscamos r tal que Σ FCt/(1+r)^t = 0.', 'We look for r such that Σ CFt/(1+r)^t = 0.'),
      tr(lang, 'Se evalúa el VPN en muchas tasas, se localiza dónde cambia de signo y se refina por bisección.', 'NPV is evaluated at many rates, sign changes are located and refined by bisection.'),
      ...r.value.roots.map((x) => `VPN(${fmtPct(x, lang, 4)}) ≈ ${fmtNumber(F.npv(x, flows).ok ? (F.npv(x, flows) as { value: number }).value : NaN, lang, 6)}`),
    ],
  }
}

function waccIntent(q: string, lang: Lang): TutorReply | null {
  if (!/\bwacc\b|costo de capital promedio/i.test(q)) return null
  const E = keyValue(q, ['E', 'equity', 'capital'])
  const D = keyValue(q, ['D', 'debt', 'deuda'])
  let ke = keyValue(q, ['Ke', 're'])
  const kd = keyValue(q, ['Kd', 'rd'])
  const T = keyValue(q, ['T', 'tax', 'impuestos'])
  const rf = keyValue(q, ['rf'])
  const beta = keyValue(q, ['beta', 'b'])
  const rm = keyValue(q, ['rm'])
  if (ke === undefined && rf !== undefined && beta !== undefined && rm !== undefined) ke = (rf + beta * (rm - rf))
  if ([E, D, ke, kd, T].some((v) => v === undefined))
    return { text: tr(lang, 'Para el WACC indica E, D, Ke (o rf, beta, rm), Kd y T. Ejemplo:', 'For WACC give E, D, Ke (or rf, beta, rm), Kd and T. Example:'), note: 'wacc E=600000 D=400000 Ke=15 Kd=11 T=30' }
  const r = F.wacc({ equityValue: E!, debtValue: D!, costOfEquity: ke! / 100, costOfDebt: kd! / 100, taxRate: T! / 100 })
  if (!r.ok) return { text: errText(r.error, lang) }
  return {
    text: `**WACC = ${fmtPct(r.value.wacc, lang, 2)}**`,
    steps: [
      `V = E + D = ${fmtNumber(E! + D!, lang, 0)}`,
      `E/V = ${fmtPct(r.value.we, lang, 2)} · D/V = ${fmtPct(r.value.wd, lang, 2)}`,
      `Kd × (1 − T) = ${fmtPct(kd! / 100, lang, 2)} × ${fmtNumber(1 - T! / 100, lang, 2)} = ${fmtPct(r.value.afterTaxKd, lang, 2)}`,
      `WACC = ${fmtPct(r.value.we, lang, 2)} × ${fmtPct(ke! / 100, lang, 2)} + ${fmtPct(r.value.wd, lang, 2)} × ${fmtPct(r.value.afterTaxKd, lang, 2)} = ${fmtPct(r.value.wacc, lang, 2)}`,
    ],
    link: { href: '#/calc/wacc', label: tr(lang, 'Abrir calculadora WACC', 'Open WACC calculator') },
  }
}

function breakEvenIntent(q: string, lang: Lang): TutorReply | null {
  if (!/(equilibrio|break.?even)/i.test(norm(q))) return null
  const fc = keyValue(q, ['CF', 'FC', 'fijos', 'fixed'])
  const p = keyValue(q, ['P', 'precio', 'price'])
  const v = keyValue(q, ['CV', 'VC', 'variable'])
  if ([fc, p, v].some((x) => x === undefined)) return null
  const r = F.breakEven({ fixedCosts: fc!, price: p!, variableCost: v! })
  if (!r.ok) return { text: errText(r.error, lang) }
  return {
    text: tr(lang, `**Punto de equilibrio = ${fmtNumber(r.value.units, lang, 2)} unidades** (${fmtMoney(r.value.sales, lang)} en ventas).`, `**Break-even = ${fmtNumber(r.value.units, lang, 2)} units** (${fmtMoney(r.value.sales, lang)} in sales).`),
    steps: [
      tr(lang, `Margen de contribución unitario = ${fmtMoney(p!, lang)} − ${fmtMoney(v!, lang)} = ${fmtMoney(r.value.unitContributionMargin, lang)}`, `Unit contribution margin = ${fmtMoney(p!, lang)} − ${fmtMoney(v!, lang)} = ${fmtMoney(r.value.unitContributionMargin, lang)}`),
      `PE = ${fmtMoney(fc!, lang)} / ${fmtMoney(r.value.unitContributionMargin, lang)} = ${fmtNumber(r.value.units, lang, 2)}`,
    ],
  }
}

function tvmIntent(q: string, lang: Lang): TutorReply | null {
  const n = norm(q)
  const isFv = /(valor futuro|future value|\bvf\b|\bfv\b)/.test(n)
  const isPv = /(valor presente|present value|\bvp\b|\bpv\b)/.test(n) && !/neto|net/.test(n)
  if (!isFv && !isPv) return null
  const rate = rateIn(q)
  const nums = extractNumbers(q.replace(/-?\d+(?:\.\d+)?\s*%/g, ''))
  if (rate === undefined || nums.length < 2) return null
  const [amount, periods] = nums
  const r = isFv ? F.futureValue(amount, rate, periods) : F.presentValue(amount, rate, periods)
  if (!r.ok) return { text: errText(r.error, lang) }
  return {
    text: isFv ? tr(lang, `**VF = ${fmtMoney(r.value, lang)}**`, `**FV = ${fmtMoney(r.value, lang)}**`) : tr(lang, `**VP = ${fmtMoney(r.value, lang)}**`, `**PV = ${fmtMoney(r.value, lang)}**`),
    steps: isFv
      ? [`VF = ${fmtMoney(amount, lang)} × (1 + ${fmtNumber(rate, lang, 4)})^${periods}`, `(1 + r)^n = ${fmtNumber(Math.pow(1 + rate, periods), lang, 6)}`, `VF = ${fmtMoney(r.value, lang)}`]
      : [`VP = ${fmtMoney(amount, lang)} / (1 + ${fmtNumber(rate, lang, 4)})^${periods}`, `(1 + r)^n = ${fmtNumber(Math.pow(1 + rate, periods), lang, 6)}`, `VP = ${fmtMoney(r.value, lang)}`],
    note: tr(lang, 'Interpreté el primer número como monto y el segundo como número de periodos.', 'I read the first number as the amount and the second as the number of periods.'),
  }
}

// ───────────────────────── Exercise generation ─────────────────────────

const pick = <T,>(arr: T[], rng: Rng) => arr[Math.floor(rng() * arr.length)]
const roundTo = (x: number, step: number) => Math.round(x / step) * step

export type GenTopic = 'compound' | 'npv' | 'breakeven' | 'equation' | 'wacc'

export function generateExercise(topic: GenTopic, difficulty: 1 | 2 | 3, lang: Lang, rng: Rng = cryptoRng): GeneratedExercise {
  switch (topic) {
    case 'compound': {
      const p = roundTo(5000 + rng() * 95000, 500)
      const r = pick([4, 5, 6, 8, 10, 12], rng)
      const n = difficulty === 1 ? pick([2, 3], rng) : pick([4, 5, 6, 8], rng)
      const m = difficulty === 3 ? 12 : 1
      const fv = p * Math.pow(1 + r / 100 / m, n * m)
      return {
        topic,
        prompt: tr(lang, `Inviertes ${fmtMoney(p, lang, 0)} al ${r} % anual${m === 12 ? ' capitalizable mensualmente' : ''} durante ${n} años. ¿Cuál es el monto final? (pesos, 2 decimales)`, `You invest ${fmtMoney(p, lang, 0)} at ${r} % per year${m === 12 ? ' compounded monthly' : ''} for ${n} years. What is the final amount? (pesos, 2 decimals)`),
        answer: Math.round(fv * 100) / 100,
        tolerance: Math.max(0.5, fv * 0.0005),
        unit: 'MXN',
        hint: tr(lang, m === 12 ? 'Usa VF = P (1 + r/12)^(12·n).' : 'Usa VF = P (1 + r)^n.', m === 12 ? 'Use FV = P (1 + r/12)^(12·n).' : 'Use FV = P (1 + r)^n.'),
        steps: [
          m === 12 ? `r/m = ${r}% / 12 = ${fmtNumber(r / 1200, lang, 6)}; m·n = ${12 * n}` : `r = ${r / 100}; n = ${n}`,
          `(1 + ${m === 12 ? fmtNumber(r / 1200, lang, 6) : r / 100})^${n * m} = ${fmtNumber(Math.pow(1 + r / 100 / m, n * m), lang, 6)}`,
          `VF = ${fmtMoney(p, lang, 0)} × ${fmtNumber(Math.pow(1 + r / 100 / m, n * m), lang, 6)} = ${fmtMoney(fv, lang)}`,
        ],
      }
    }
    case 'npv': {
      const I = roundTo(50000 + rng() * 150000, 1000)
      const years = difficulty === 1 ? 3 : difficulty === 2 ? 4 : 5
      const flows = [-I, ...Array.from({ length: years }, () => roundTo((I / years) * (0.8 + rng() * 0.7), 500))]
      const r = pick([8, 10, 12, 14], rng)
      const v = (F.npv(r / 100, flows) as { ok: true; value: number }).value
      return {
        topic,
        prompt: tr(lang, `Un proyecto tiene flujos ${flows.map((f) => fmtNumber(f, lang, 0)).join(', ')} (t = 0…${years}). Con tasa del ${r} %, ¿cuál es el VPN? (pesos)`, `A project has flows ${flows.map((f) => fmtNumber(f, lang, 0)).join(', ')} (t = 0…${years}). At ${r} %, what is the NPV? (pesos)`),
        answer: Math.round(v * 100) / 100,
        tolerance: Math.max(1, Math.abs(v) * 0.001),
        unit: 'MXN',
        hint: tr(lang, 'Descuenta cada flujo con (1 + r)^t y súmalos, incluida la inversión en t = 0 sin descontar.', 'Discount each flow by (1 + r)^t and add them, including the t = 0 investment undiscounted.'),
        steps: [...flows.map((cf, t) => `t=${t}: ${fmtNumber(cf, lang, 0)} / ${fmtNumber(Math.pow(1 + r / 100, t), lang, 4)} = ${fmtNumber(cf / Math.pow(1 + r / 100, t), lang, 2)}`), `VPN = ${fmtMoney(v, lang)}`],
      }
    }
    case 'breakeven': {
      const P = roundTo(100 + rng() * 400, 10)
      const V = roundTo(P * (0.4 + rng() * 0.3), 5)
      const cm = P - V
      const units = difficulty === 1 ? roundTo(500 + rng() * 2000, 100) : Math.round(800 + rng() * 3000)
      const FC = cm * units
      return {
        topic,
        prompt: tr(lang, `Costos fijos ${fmtMoney(FC, lang, 0)}, precio ${fmtMoney(P, lang, 0)} y costo variable unitario ${fmtMoney(V, lang, 0)}. ¿Punto de equilibrio en unidades?`, `Fixed costs ${fmtMoney(FC, lang, 0)}, price ${fmtMoney(P, lang, 0)} and unit variable cost ${fmtMoney(V, lang, 0)}. Break-even in units?`),
        answer: units,
        tolerance: 0.5,
        unit: 'units',
        hint: tr(lang, 'Calcula primero el margen de contribución unitario (P − CVu).', 'First compute the unit contribution margin (P − VC).'),
        steps: [`MC = ${P} − ${V} = ${cm}`, `PE = ${fmtNumber(FC, lang, 0)} / ${cm} = ${units}`],
      }
    }
    case 'wacc': {
      const E = roundTo(400000 + rng() * 600000, 10000)
      const D = roundTo(200000 + rng() * 500000, 10000)
      const ke = pick([12, 13, 14, 15, 16], rng)
      const kd = pick([8, 9, 10, 11], rng)
      const w = (F.wacc({ equityValue: E, debtValue: D, costOfEquity: ke / 100, costOfDebt: kd / 100, taxRate: 0.3 }) as { ok: true; value: { wacc: number } }).value.wacc * 100
      return {
        topic,
        prompt: tr(lang, `E = ${fmtMoney(E, lang, 0)}, D = ${fmtMoney(D, lang, 0)}, Ke = ${ke} %, Kd = ${kd} %, T = 30 %. ¿WACC? (en %, 2 decimales)`, `E = ${fmtMoney(E, lang, 0)}, D = ${fmtMoney(D, lang, 0)}, Ke = ${ke} %, Kd = ${kd} %, T = 30 %. WACC? (in %, 2 decimals)`),
        answer: Math.round(w * 100) / 100,
        tolerance: 0.02,
        unit: '%',
        hint: tr(lang, 'Pondera Ke y Kd·(1 − T) por E/V y D/V.', 'Weight Ke and Kd·(1 − T) by E/V and D/V.'),
        steps: [`V = ${fmtNumber(E + D, lang, 0)}`, `E/V = ${fmtNumber(E / (E + D), lang, 4)}, D/V = ${fmtNumber(D / (E + D), lang, 4)}`, `Kd(1−T) = ${fmtNumber(kd * 0.7, lang, 2)} %`, `WACC = ${fmtNumber(w, lang, 2)} %`],
      }
    }
    case 'equation':
    default: {
      const A = roundTo(100000 + rng() * 900000, 1000)
      const Lb = roundTo(A * (0.2 + rng() * 0.5), 1000)
      const E = A - Lb
      const ask = difficulty === 1 ? 'E' : pick(['E', 'L', 'A'] as const, rng)
      const prompt =
        ask === 'E'
          ? tr(lang, `Activo total ${fmtMoney(A, lang, 0)} y pasivo total ${fmtMoney(Lb, lang, 0)}. ¿Capital contable?`, `Total assets ${fmtMoney(A, lang, 0)} and total liabilities ${fmtMoney(Lb, lang, 0)}. Equity?`)
          : ask === 'L'
            ? tr(lang, `Activo total ${fmtMoney(A, lang, 0)} y capital contable ${fmtMoney(E, lang, 0)}. ¿Pasivo total?`, `Total assets ${fmtMoney(A, lang, 0)} and equity ${fmtMoney(E, lang, 0)}. Total liabilities?`)
            : tr(lang, `Pasivo ${fmtMoney(Lb, lang, 0)} y capital contable ${fmtMoney(E, lang, 0)}. ¿Activo total?`, `Liabilities ${fmtMoney(Lb, lang, 0)} and equity ${fmtMoney(E, lang, 0)}. Total assets?`)
      const answer = ask === 'E' ? E : ask === 'L' ? Lb : A
      return { topic: 'equation', prompt, answer, tolerance: 0.5, unit: 'MXN', hint: 'Activo = Pasivo + Capital', steps: [`A = P + C → ${fmtNumber(A, lang, 0)} = ${fmtNumber(Lb, lang, 0)} + ${fmtNumber(E, lang, 0)}`] }
    }
  }
}

export function detectGenTopic(q: string): GenTopic | null {
  const n = norm(q)
  if (!/(genera|generate|dame un ejercicio|give me an exercise|ejercicio|exercise|practica|practice|quiz)/.test(n)) return null
  if (/(vpn|npv)/.test(n)) return 'npv'
  if (/(equilibrio|break)/.test(n)) return 'breakeven'
  if (/wacc/.test(n)) return 'wacc'
  if (/(ecuacion|equation|activo|asset)/.test(n)) return 'equation'
  if (/(interes|interest|compuesto|compound|valor futuro|future)/.test(n)) return 'compound'
  return 'equation'
}

export function checkGenerated(ex: GeneratedExercise, raw: string): boolean | null {
  const v = parseNumber(raw)
  if (v === null) return null
  return withinTolerance(v, ex.answer, { abs: ex.tolerance })
}

/** Difficulty adapts to recent accuracy: <50 % → 1, <80 % → 2, else 3. */
export function adaptiveDifficulty(recent: boolean[]): 1 | 2 | 3 {
  if (recent.length < 3) return 1
  const acc = recent.filter(Boolean).length / recent.length
  return acc < 0.5 ? 1 : acc < 0.8 ? 2 : 3
}

// ───────────────────────── Main entry ─────────────────────────

const TAX_RE = /\b(isr|iva|cfdi|sat|impuesto|impuestos|fiscal|tax|vat|deducci|rfc|declaraci)/

export function explainMistake(ex: Exercise, lang: Lang): TutorReply {
  const steps = [
    tr(lang, 'Lee de nuevo el enunciado e identifica qué se pide y en qué unidad.', 'Re-read the prompt and identify what is asked and in which unit.'),
    tr(lang, 'Recuerda el concepto o fórmula clave de la lección.', 'Recall the lesson’s key concept or formula.'),
    ex.explanation[lang],
  ]
  return {
    text: tr(lang, `Revisemos el procedimiento del ejercicio **${ex.id}** paso a paso, en lugar de solo dar la respuesta:`, `Let’s go through exercise **${ex.id}** step by step instead of just giving the answer:`),
    steps,
    link: { href: `#/lesson/${ex.module}`, label: tr(lang, 'Repasar la lección', 'Review the lesson') },
  }
}

export function answer(q: string, lang: Lang, opts: { difficulty?: 1 | 2 | 3; rng?: Rng; today?: string } = {}): TutorReply {
  const text = q.trim().slice(0, 1000)
  if (!text) return { text: tr(lang, 'Escribe una pregunta.', 'Type a question.') }
  for (const intent of [npvIntent, irrIntent, waccIntent, breakEvenIntent, tvmIntent]) {
    const r = intent(text, lang)
    if (r) return r
  }
  const gen = detectGenTopic(text)
  if (gen) {
    const ex = generateExercise(gen, opts.difficulty ?? 1, lang, opts.rng)
    return {
      text: tr(lang, `Aquí tienes un ejercicio (dificultad ${opts.difficulty ?? 1}/3). Escribe tu respuesta numérica, o pide una «pista» o la «solución».`, `Here is an exercise (difficulty ${opts.difficulty ?? 1}/3). Type your numeric answer, or ask for a "hint" or the "solution".`),
      exercise: ex,
    }
  }
  const c = findConcept(text)
  const isTax = TAX_RE.test(norm(text))
  if (c) {
    return {
      text: `**${c.title[lang]}.** ${c.body[lang]}`,
      steps: c.formula ? [c.formula] : undefined,
      link: c.lesson ? { href: `#/lesson/${c.lesson}`, label: tr(lang, 'Ir a la lección', 'Go to the lesson') } : undefined,
      note: isTax ? taxNote(lang, opts.today) : undefined,
    }
  }
  if (isTax)
    return {
      text: tr(lang, 'Puedo explicar ISR, IVA, CFDI y obligaciones fiscales básicas con fines educativos. Pregunta, por ejemplo, «¿qué es el IVA acreditable?».', 'I can explain ISR, IVA, CFDI and basic tax obligations for learning purposes. Ask, for example, "what is creditable VAT?".'),
      note: taxNote(lang, opts.today),
    }
  return {
    text: tr(
      lang,
      'No encontré ese tema en mi base local. Prueba con: «explica la partida doble», «VPN al 10% flujos: -1000, 300, 400, 500», «TIR flujos: -1000, 500, 600», «wacc E=600000 D=400000 Ke=15 Kd=11 T=30», «genera un ejercicio de interés compuesto».',
      'I could not find that topic in my local base. Try: "explain double entry", "NPV at 10% flows: -1000, 300, 400, 500", "IRR flows: -1000, 500, 600", "wacc E=600000 D=400000 Ke=15 Kd=11 T=30", "generate a compound interest exercise".',
    ),
  }
}

export function taxNote(lang: Lang, today = new Date().toISOString().slice(0, 10)): string {
  return tr(
    lang,
    `Jurisdicción: México (federal). Información educativa revisada para 2026; fecha de consulta: ${today}. Fuentes: LISR, LIVA, CFF y RMF publicadas en el DOF. Verifica reformas y estímulos vigentes antes de aplicarla: no es asesoría fiscal.`,
    `Jurisdiction: Mexico (federal). Educational information reviewed for 2026; consulted on: ${today}. Sources: LISR, LIVA, CFF and RMF as published in the DOF. Check current amendments and incentives before applying it: this is not tax advice.`,
  )
}
