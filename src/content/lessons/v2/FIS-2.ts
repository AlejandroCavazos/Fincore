import type { Exercise, Lesson } from '../../../types'

/**
 * FINCORE — Temario v2.0, área Fiscalidad y Tributación (México), parte 2.
 * Materias FIS.7 a FIS.12 (Nivel 5, etapa Intermedio).
 */

const NOTE_TAX = {
  es: "Contenido educativo basado en leyes fiscales mexicanas (LIVA, LISR, CFF), la Resolución Miscelánea Fiscal y reglas del SAT. Las leyes, tasas, límites, plazos y formatos cambian con frecuencia: verifica la versión vigente (2026) y consulta a un contador antes de aplicarlas en un caso real. Los montos y tasas de los ejemplos son ilustrativos.",
  en: "Educational content based on Mexican tax laws (VAT Law, Income Tax Law, Federal Tax Code), the Miscellaneous Tax Resolution and SAT rules. Laws, rates, limits, deadlines and formats change often: verify the current version (2026) and consult an accountant before applying them to a real case. Amounts and rates in the examples are illustrative.",
}

export const lessons: Lesson[] = [
  // ───────────────────────────── FIS-07 ─────────────────────────────
  {
    id: 'FIS-07',
    level: 5,
    topicIds: ['FIS.7'],
    title: { es: "Ley del Impuesto al Valor Agregado (LIVA)", en: "Value Added Tax Law (LIVA)" },
    summary: {
      es: "La LIVA dice qué actos pagan IVA, a qué tasa (16 %, 0 % o exento), cuándo nace la obligación y qué requisitos debe cumplir el IVA que quieres acreditar o retener.",
      en: "The VAT Law states which acts pay VAT, at what rate (16%, 0% or exempt), when the obligation arises and which requirements the VAT you want to credit or withhold must meet.",
    },
    minutes: 16,
    objectives: [
      { es: "Identificar los cuatro actos que grava la LIVA y quiénes son sujetos del impuesto.", en: "Identify the four acts taxed by the VAT Law and who is subject to the tax." },
      { es: "Distinguir entre tasa general, tasa 0 % y actos exentos, y sus efectos en el acreditamiento.", en: "Distinguish between the general rate, the 0% rate and exempt acts, and their effects on crediting." },
      { es: "Aplicar el momento de causación por flujo de efectivo y los requisitos para acreditar IVA.", en: "Apply the cash-basis timing rule and the requirements to credit VAT." },
      { es: "Calcular la retención de IVA en servicios de personas físicas a personas morales.", en: "Compute VAT withholding on services provided by individuals to companies." },
    ],
    theory: [
      {
        heading: { es: "Qué grava la LIVA y quién paga", en: "What the VAT Law taxes and who pays" },
        body: [
          {
            es: "La **LIVA** es la ley que regula el IVA. Su primer artículo dice que pagan este impuesto las personas físicas y morales que, en México, realicen alguno de **cuatro actos**: **enajenar bienes** (vender o transferir la propiedad), **prestar servicios independientes** (trabajar por tu cuenta, no como empleado), **otorgar el uso o goce temporal de bienes** (rentar) e **importar** bienes o servicios.",
            en: "The **VAT Law (LIVA)** is the law that regulates VAT. Its first article says that individuals and companies that, in Mexico, carry out any of **four acts** pay this tax: **selling goods** (selling or transferring ownership), **providing independent services** (working on your own, not as an employee), **granting temporary use of goods** (renting) and **importing** goods or services.",
          },
          {
            es: "Quien vende es el **contribuyente** ante la ley, pero el impuesto lo **traslada**: lo cobra por separado a su cliente. Por eso se dice que el IVA lo carga el consumidor final y el negocio funciona como **recaudador**. El IVA que cobras se llama **trasladado** y el que pagas en tus compras, **acreditable**.",
            en: "The seller is the **taxpayer** before the law, but it **passes on** the tax: it charges it separately to its customer. That is why VAT is said to be borne by the final consumer, while the business acts as a **collector**. The VAT you charge is called **output VAT** and the VAT you pay on purchases, **input (creditable) VAT**.",
          },
          {
            es: "Un **sueldo** no paga IVA: el trabajo subordinado (como empleado) no es un servicio independiente. Mini ejemplo: una diseñadora que cobra por su cuenta un logotipo de $8,000 debe trasladar IVA de $1,280; si ese mismo trabajo lo hace como empleada de una agencia, su sueldo no lleva IVA.",
            en: "A **salary** does not pay VAT: subordinate work (as an employee) is not an independent service. Mini example: a designer who charges $8,000 on her own for a logo must pass on $1,280 of VAT; if she does the same work as an agency employee, her salary carries no VAT.",
          },
        ],
        bullets: [
          { es: "Enajenación de bienes: vender una lavadora, un auto, mercancía.", en: "Sale of goods: selling a washing machine, a car, merchandise." },
          { es: "Servicios independientes: consultoría, reparaciones, publicidad.", en: "Independent services: consulting, repairs, advertising." },
          { es: "Uso o goce temporal: rentar un local, una máquina, un auto.", en: "Temporary use: renting a store, a machine, a car." },
          { es: "Importación: traer bienes del extranjero o contratar ciertos servicios de fuera.", en: "Importing: bringing goods from abroad or hiring certain foreign services." },
        ],
      },
      {
        heading: { es: "Tasa general, tasa 0 % y exentos", en: "General rate, 0% rate and exemptions" },
        body: [
          {
            es: "La **tasa general** es del **16 %**. La ley contempla además una **tasa del 0 %** para ciertos bienes básicos, como la mayoría de los **alimentos** no preparados y las **medicinas de patente**, y para la **exportación**. Hay también un estímulo con tasa reducida en ciertas zonas fronterizas, que depende de decretos que se renuevan.",
            en: "The **general rate** is **16%**. The law also provides a **0% rate** for certain basic goods, such as most unprepared **foods** and **patent medicines**, and for **exports**. There is also a reduced-rate incentive in certain border areas, which depends on decrees that get renewed.",
          },
          {
            es: "Los actos **exentos** simplemente no pagan IVA. Ejemplos clásicos: la venta de **casa habitación**, la **renta de casa habitación**, las **colegiaturas** de escuelas con validez oficial, las consultas de **médicos** personas físicas y el **transporte público** de personas.",
            en: "**Exempt** acts simply do not pay VAT. Classic examples: the sale of a **home**, **renting a home**, **tuition** at officially recognized schools, consultations with **physicians** who are individuals and **public transport** of people.",
          },
          {
            es: "La gran diferencia está en el **acreditamiento**. Con tasa 0 % sí puedes acreditar el IVA de tus compras, y como no cobras IVA, suele quedarte **saldo a favor** que puedes pedir en devolución. Con actos exentos **no** puedes acreditar: el IVA que pagaste se vuelve parte de tu **costo**. Mini ejemplo: una frutería (0 %) compra básculas con $1,600 de IVA y lo puede recuperar; una escuela (exenta) que compra pizarrones con $1,600 de IVA, no.",
            en: "The big difference lies in **crediting**. With the 0% rate you can credit the VAT on your purchases, and since you charge no VAT, you usually end up with a **balance in your favor** that you can claim as a refund. With exempt acts you **cannot** credit: the VAT you paid becomes part of your **cost**. Mini example: a fruit shop (0%) buys scales with $1,600 of VAT and can recover it; a school (exempt) that buys whiteboards with $1,600 of VAT cannot.",
          },
        ],
        bullets: [
          { es: "16 %: la regla general (ropa, electrónicos, servicios profesionales).", en: "16%: the general rule (clothing, electronics, professional services)." },
          { es: "0 %: alimentos básicos, medicinas de patente, exportaciones; sí acredita.", en: "0%: basic foods, patent medicines, exports; crediting allowed." },
          { es: "Exento: casa habitación, colegiaturas, consultas médicas; no acredita.", en: "Exempt: homes, tuition, medical visits; no crediting." },
        ],
      },
      {
        heading: { es: "Cuándo se causa, acreditamiento y retención", en: "When it is due, crediting and withholding" },
        body: [
          {
            es: "El IVA se causa por **flujo de efectivo**: nace cuando **cobras** efectivamente el precio, no cuando emites la factura. Si vendes a crédito en marzo y cobras en abril, ese IVA lo declaras en abril. El pago es **mensual** y, en general, vence el día 17 del mes siguiente.",
            en: "VAT is due on a **cash basis**: it arises when you actually **collect** the price, not when you issue the invoice. If you sell on credit in March and collect in April, you report that VAT in April. Payment is **monthly** and, in general, is due on the 17th of the following month.",
          },
          {
            es: "Para **acreditar** IVA, la ley pide en esencia: que el gasto sea **estrictamente indispensable** para tu actividad gravada, que el IVA venga **trasladado por separado en un CFDI**, que esté **efectivamente pagado** y que, si hubo retención, ya la hayas **enterado** (pagado al SAT).",
            en: "To **credit** VAT, the law essentially requires: that the expense be **strictly necessary** for your taxed activity, that the VAT be **shown separately on a CFDI**, that it be **actually paid**, and that, if there was a withholding, you have already **remitted** it (paid it to the SAT).",
          },
          {
            es: "Algunas personas morales deben **retener** IVA: por ejemplo, cuando reciben servicios profesionales o rentan bienes de una persona física, retienen **dos terceras partes** del IVA y lo enteran ellas mismas. Mini ejemplo: una empresa paga honorarios de $10,000 más $1,600 de IVA; retiene $1,066.67 (2/3 de 1,600) y entrega al profesionista el resto.",
            en: "Some companies must **withhold** VAT: for example, when they receive professional services or rent goods from an individual, they withhold **two thirds** of the VAT and remit it themselves. Mini example: a company pays $10,000 in fees plus $1,600 of VAT; it withholds $1,066.67 (2/3 of 1,600) and gives the professional the rest.",
          },
        ],
        formula: "IVA a cargo = IVA trasladado cobrado − IVA acreditable pagado − IVA retenido (si te retuvieron)",
      },
    ],
    examples: [
      {
        title: { es: "IVA del mes con ventas a crédito", en: "Monthly VAT with credit sales" },
        problem: {
          es: "Una ferretería facturó en junio $200,000 + IVA, pero solo cobró $150,000 + IVA; el resto lo cobrará en julio. En junio pagó compras por $100,000 + IVA con CFDI. ¿Cuánto IVA paga por junio? (Tasa 16 %.)",
          en: "A hardware store invoiced $200,000 + VAT in June but only collected $150,000 + VAT; it will collect the rest in July. In June it paid $100,000 + VAT for purchases with CFDI. How much VAT does it pay for June? (16% rate.)",
        },
        steps: [
          { es: "Solo cuenta lo cobrado: 150,000 × 16 % = $24,000 de IVA trasladado.", en: "Only what was collected counts: 150,000 × 16% = $24,000 of output VAT." },
          { es: "IVA acreditable pagado: 100,000 × 16 % = $16,000.", en: "Input VAT paid: 100,000 × 16% = $16,000." },
          { es: "IVA a cargo: 24,000 − 16,000 = $8,000.", en: "VAT payable: 24,000 − 16,000 = $8,000." },
          { es: "Los $8,000 de IVA de lo no cobrado (50,000 × 16 %) se declaran en julio.", en: "The $8,000 of VAT on the uncollected part (50,000 × 16%) is reported in July." },
        ],
        result: {
          es: "Paga $8,000 por junio. Facturar no es lo mismo que causar: el IVA nace al cobrar.",
          en: "It pays $8,000 for June. Invoicing is not the same as owing: VAT arises upon collection.",
        },
      },
      {
        title: { es: "Tasa 0 % contra exento", en: "0% rate versus exempt" },
        problem: {
          es: "Una tortillería (tasa 0 %) y un colegio con validez oficial (exento) compran cada uno equipo por $50,000 + IVA. ¿Qué pasa con ese IVA en cada caso?",
          en: "A tortilla shop (0% rate) and an officially recognized school (exempt) each buy equipment for $50,000 + VAT. What happens to that VAT in each case?",
        },
        steps: [
          { es: "IVA pagado por cada uno: 50,000 × 16 % = $8,000.", en: "VAT paid by each: 50,000 × 16% = $8,000." },
          { es: "Tortillería: su IVA trasladado es 0, así que acredita $8,000 y queda saldo a favor de $8,000.", en: "Tortilla shop: its output VAT is 0, so it credits $8,000 and has an $8,000 balance in its favor." },
          { es: "Colegio: al estar exento no puede acreditar; los $8,000 se suman al costo del equipo ($58,000).", en: "School: being exempt it cannot credit; the $8,000 is added to the equipment cost ($58,000)." },
        ],
        result: {
          es: "La tortillería puede recuperar $8,000 (por devolución o compensación); el colegio absorbe el IVA como costo.",
          en: "The tortilla shop can recover $8,000 (through refund or offset); the school absorbs the VAT as a cost.",
        },
      },
    ],
    keyPoints: [
      { es: "La LIVA grava cuatro actos: enajenar, prestar servicios independientes, rentar e importar.", en: "The VAT Law taxes four acts: selling, providing independent services, renting and importing." },
      { es: "Tasa general 16 %; tasa 0 % para básicos y exportación; algunos actos están exentos.", en: "General rate 16%; 0% rate for basics and exports; some acts are exempt." },
      { es: "Tasa 0 % permite acreditar y genera saldo a favor; exento no permite acreditar.", en: "The 0% rate allows crediting and generates refunds; exempt does not allow crediting." },
      { es: "El IVA se causa al cobrar (flujo de efectivo) y se paga mensualmente.", en: "VAT is due upon collection (cash basis) and paid monthly." },
      { es: "Para acreditar: gasto indispensable, CFDI con IVA separado, pagado y retenciones enteradas.", en: "To credit: necessary expense, CFDI with separate VAT, paid and withholdings remitted." },
    ],
    normativeNote: NOTE_TAX,
    exerciseIds: ['FIS-07-E1', 'FIS-07-E2', 'FIS-07-E3', 'FIS-07-E4', 'FIS-07-E5', 'FIS-07-E6'],
  },

  // ───────────────────────────── FIS-08 ─────────────────────────────
  {
    id: 'FIS-08',
    level: 5,
    topicIds: ['FIS.8'],
    title: { es: "Regímenes fiscales de personas físicas", en: "Tax regimes for individuals" },
    summary: {
      es: "Una persona física paga ISR según el tipo de ingreso que recibe (sueldo, negocio, honorarios, rentas, ventas de bienes, entre otros), y cada régimen tiene su forma de calcular, deducir y declarar.",
      en: "An individual pays income tax according to the type of income received (salary, business, fees, rent, sales of assets, among others), and each regime has its own way of computing, deducting and filing.",
    },
    minutes: 16,
    objectives: [
      { es: "Identificar los principales regímenes de personas físicas según la fuente del ingreso.", en: "Identify the main regimes for individuals according to the source of income." },
      { es: "Comparar el régimen de actividades empresariales y profesionales con el RESICO.", en: "Compare the business and professional activities regime with RESICO." },
      { es: "Calcular la base de arrendamiento con deducción opcional (ciega) y el ISR mensual del RESICO.", en: "Compute the rental tax base with the optional (blind) deduction and monthly RESICO income tax." },
    ],
    theory: [
      {
        heading: { es: "El régimen depende de cómo ganas tu dinero", en: "The regime depends on how you earn your money" },
        body: [
          {
            es: "Un **régimen fiscal** es el conjunto de reglas que te dice cómo calcular y pagar impuestos según el **tipo de ingreso**. La LISR agrupa los ingresos de las personas físicas en capítulos: **sueldos y salarios**, **actividades empresariales y profesionales**, **RESICO**, **arrendamiento**, **enajenación de bienes**, **adquisición de bienes**, **intereses**, **premios**, **dividendos** y otros.",
            en: "A **tax regime** is the set of rules that tells you how to compute and pay taxes according to the **type of income**. The Income Tax Law groups individuals' income into chapters: **salaries and wages**, **business and professional activities**, **RESICO**, **rental income**, **sale of assets**, **acquisition of assets**, **interest**, **prizes**, **dividends** and others.",
          },
          {
            es: "Una misma persona puede estar en **varios regímenes a la vez**. Una maestra que trabaja en una escuela (sueldo) y renta un departamento (arrendamiento) tiene dos fuentes de ingreso, y cada una sigue sus reglas. Al final del año, en la **declaración anual** (que las personas físicas presentan en abril), varios de esos ingresos se suman.",
            en: "The same person can be in **several regimes at once**. A teacher who works at a school (salary) and rents out an apartment (rental) has two sources of income, and each follows its own rules. At year end, in the **annual return** (which individuals file in April), several of those incomes are added together.",
          },
          {
            es: "Mini ejemplo: Carlos es empleado en una fábrica y los fines de semana vende pasteles. Su sueldo va en **sueldos y salarios** (su patrón le retiene ISR) y su venta de pasteles en **actividad empresarial** o, si cumple requisitos y lo elige, en **RESICO**.",
            en: "Mini example: Carlos is an employee at a factory and sells cakes on weekends. His salary falls under **salaries and wages** (his employer withholds income tax) and his cake sales under **business activity** or, if he qualifies and chooses it, under **RESICO**.",
          },
        ],
        bullets: [
          { es: "Sueldos y salarios: trabajas para un patrón; él retiene y entera tu ISR.", en: "Salaries and wages: you work for an employer; it withholds and remits your income tax." },
          { es: "Actividades empresariales y profesionales: negocio o profesión por tu cuenta.", en: "Business and professional activities: your own business or profession." },
          { es: "RESICO: régimen simplificado con tasa baja sobre ingresos cobrados.", en: "RESICO: simplified regime with a low rate on collected income." },
          { es: "Arrendamiento: rentas de casas, locales o terrenos.", en: "Rental: rent from houses, stores or land." },
          { es: "Enajenación de bienes: venta ocasional de un terreno, casa o acciones.", en: "Sale of assets: occasional sale of land, a house or shares." },
        ],
      },
      {
        heading: { es: "Negocio propio: régimen general contra RESICO", en: "Own business: general regime versus RESICO" },
        body: [
          {
            es: "En **actividades empresariales y profesionales**, pagas ISR sobre la **utilidad**: ingresos cobrados menos **deducciones autorizadas** (gastos indispensables con CFDI). Haces **pagos provisionales** mensuales con una tarifa progresiva: a mayor utilidad, mayor porcentaje.",
            en: "In **business and professional activities**, you pay income tax on **profit**: collected income minus **authorized deductions** (necessary expenses with CFDI). You make monthly **provisional payments** with a progressive tariff: the higher the profit, the higher the percentage.",
          },
          {
            es: "El **RESICO** (Régimen Simplificado de Confianza) es una **opción** para quienes tienen ingresos anuales de hasta **3.5 millones de pesos** y cumplen ciertos requisitos. Aplica una **tasa baja (de 1 % a 2.5 %) directamente sobre los ingresos cobrados**, **sin restar gastos**. Además, si le facturas a una persona moral, ella te **retiene 1.25 %** de ISR.",
            en: "**RESICO** (Simplified Trust Regime) is an **option** for those with annual income up to **3.5 million pesos** who meet certain requirements. It applies a **low rate (1% to 2.5%) directly to collected income**, **without subtracting expenses**. Also, if you invoice a company, it **withholds 1.25%** of income tax.",
          },
          {
            es: "¿Cuál conviene? Depende sobre todo de tu **margen**. Si tus gastos son pequeños (por ejemplo, un consultor que casi no compra nada), el RESICO suele pagar menos. Si tus gastos son muy altos (por ejemplo, una tienda que revende con poco margen), el régimen general puede convenir porque sí resta gastos. Mini ejemplo: con ingresos de $40,000 al mes y gastos de $5,000, el RESICO cobra un porcentaje pequeño de $40,000; con gastos de $36,000, la utilidad real es solo $4,000 y conviene comparar con cuidado.",
            en: "Which is better? It mainly depends on your **margin**. If your expenses are small (for example, a consultant who buys almost nothing), RESICO usually pays less. If your expenses are very high (for example, a store reselling at a low margin), the general regime may be better because it does subtract expenses. Mini example: with income of $40,000 a month and expenses of $5,000, RESICO charges a small percentage of $40,000; with expenses of $36,000, the real profit is only $4,000 and you should compare carefully.",
          },
        ],
        formula: "RESICO PF: ISR mensual = ingresos cobrados del mes × tasa de la tabla − ISR que te retuvieron",
      },
      {
        heading: { es: "Arrendamiento y otros ingresos", en: "Rental and other income" },
        body: [
          {
            es: "En **arrendamiento** puedes elegir entre restar tus **gastos reales** (mantenimiento, intereses de un crédito, depreciación, etc.) o aplicar la **deducción opcional**, llamada \"**ciega**\": restar el **35 %** de tus ingresos sin necesidad de facturas de gastos, más el **predial** que pagues del inmueble.",
            en: "In **rental income** you can choose between subtracting your **actual expenses** (maintenance, loan interest, depreciation, etc.) or applying the **optional deduction**, called the \"**blind**\" deduction: subtract **35%** of your income without needing expense invoices, plus the **property tax** you pay on the property.",
          },
          {
            es: "La **enajenación de bienes** (vender una casa, un terreno o un auto usado) paga ISR sobre la **ganancia**: precio de venta menos el costo actualizado por inflación. Algunas ventas están **exentas** con límites, como la de tu **casa habitación**. Los **intereses** bancarios y los **premios** de loterías suelen pagar ISR mediante **retención** del banco o de quien paga el premio.",
            en: "The **sale of assets** (selling a house, land or a used car) pays income tax on the **gain**: sale price minus the inflation-adjusted cost. Some sales are **exempt** within limits, such as that of your **home**. Bank **interest** and lottery **prizes** usually pay income tax through **withholding** by the bank or by whoever pays the prize.",
          },
          {
            es: "Mini ejemplo: Lucía renta un local en $10,000 al mes. Con la deducción ciega resta $3,500 (35 %) y su base es $6,500, sin juntar facturas de gastos. Si en realidad gasta más del 35 % en mantenimiento, le conviene deducir gastos reales.",
            en: "Mini example: Lucía rents out a store for $10,000 a month. With the blind deduction she subtracts $3,500 (35%) and her base is $6,500, without collecting expense invoices. If she actually spends more than 35% on maintenance, she is better off deducting actual expenses.",
          },
        ],
        formula: "Base arrendamiento (opcional) = Rentas cobradas − 35 % de las rentas − predial pagado",
      },
    ],
    examples: [
      {
        title: { es: "ISR mensual en RESICO con retención", en: "Monthly RESICO income tax with withholding" },
        problem: {
          es: "Andrea, traductora en RESICO, cobró en mayo $45,000 (sin IVA). De eso, $30,000 se los pagó una persona moral, que le retuvo 1.25 % de ISR. Supón que para su nivel de ingresos la tabla marca 1.10 % (ejemplo ilustrativo). ¿Cuánto paga?",
          en: "Andrea, a translator in RESICO, collected $45,000 (excluding VAT) in May. Of that, $30,000 was paid by a company, which withheld 1.25% of income tax. Assume that for her income level the table sets 1.10% (illustrative example). How much does she pay?",
        },
        steps: [
          { es: "ISR del mes: 45,000 × 1.10 % = $495.", en: "Month's income tax: 45,000 × 1.10% = $495." },
          { es: "Retención de la persona moral: 30,000 × 1.25 % = $375.", en: "Company withholding: 30,000 × 1.25% = $375." },
          { es: "ISR a pagar: 495 − 375 = $120.", en: "Income tax payable: 495 − 375 = $120." },
        ],
        result: {
          es: "Andrea paga $120 en su declaración mensual; la retención ya es un pago a cuenta.",
          en: "Andrea pays $120 on her monthly return; the withholding is already a payment on account.",
        },
      },
      {
        title: { es: "Deducción ciega contra gastos reales", en: "Blind deduction versus actual expenses" },
        problem: {
          es: "Jorge renta una casa en $15,000 al mes. En el mes pagó $4,000 de reparaciones con CFDI y $500 de predial. ¿Qué opción le deja una base menor?",
          en: "Jorge rents out a house for $15,000 a month. In the month he paid $4,000 in repairs with CFDI and $500 of property tax. Which option gives him a lower base?",
        },
        steps: [
          { es: "Opción ciega: 15,000 × 35 % = $5,250; base = 15,000 − 5,250 − 500 = $9,250.", en: "Blind option: 15,000 × 35% = $5,250; base = 15,000 − 5,250 − 500 = $9,250." },
          { es: "Gastos reales: 15,000 − 4,000 − 500 = $10,500.", en: "Actual expenses: 15,000 − 4,000 − 500 = $10,500." },
          { es: "Comparar: 9,250 < 10,500.", en: "Compare: 9,250 < 10,500." },
        ],
        result: {
          es: "Le conviene la deducción ciega: su base es $1,250 menor y no necesita facturas de gastos.",
          en: "The blind deduction is better: his base is $1,250 lower and he needs no expense invoices.",
        },
      },
    ],
    keyPoints: [
      { es: "El régimen de una persona física depende del tipo de ingreso; puede tener varios a la vez.", en: "An individual's regime depends on the type of income; they can have several at once." },
      { es: "En sueldos, el patrón retiene y entera el ISR del trabajador.", en: "For salaries, the employer withholds and remits the worker's income tax." },
      { es: "El régimen general grava la utilidad; el RESICO aplica 1 %–2.5 % a ingresos sin restar gastos.", en: "The general regime taxes profit; RESICO applies 1%–2.5% to income without subtracting expenses." },
      { es: "En arrendamiento puedes usar gastos reales o la deducción ciega del 35 % más predial.", en: "For rental income you can use actual expenses or the 35% blind deduction plus property tax." },
      { es: "Las personas físicas presentan su declaración anual en abril.", en: "Individuals file their annual return in April." },
    ],
    normativeNote: NOTE_TAX,
    exerciseIds: ['FIS-08-E1', 'FIS-08-E2', 'FIS-08-E3', 'FIS-08-E4', 'FIS-08-E5', 'FIS-08-E6'],
  },

  // ───────────────────────────── FIS-09 ─────────────────────────────
  {
    id: 'FIS-09',
    level: 5,
    topicIds: ['FIS.9'],
    title: { es: "Regímenes fiscales de personas morales", en: "Tax regimes for legal entities" },
    summary: {
      es: "Las empresas (personas morales) pagan ISR en el régimen general a tasa del 30 % sobre su resultado fiscal, con pagos provisionales mensuales; existen además el RESICO de personas morales y el régimen de entidades sin fines de lucro.",
      en: "Companies (legal entities) pay income tax under the general regime at a 30% rate on their taxable result, with monthly provisional payments; there are also RESICO for legal entities and the non-profit regime.",
    },
    minutes: 17,
    objectives: [
      { es: "Distinguir el régimen general, el RESICO de personas morales y el de personas morales sin fines de lucro.", en: "Distinguish the general regime, RESICO for legal entities and the non-profit regime." },
      { es: "Calcular el resultado fiscal y el ISR anual de una persona moral.", en: "Compute a legal entity's taxable result and annual income tax." },
      { es: "Calcular un pago provisional con coeficiente de utilidad.", en: "Compute a provisional payment using the profit coefficient." },
      { es: "Explicar para qué sirve la CUFIN al pagar dividendos.", en: "Explain what CUFIN is for when paying dividends." },
    ],
    theory: [
      {
        heading: { es: "Qué es una persona moral y qué regímenes hay", en: "What a legal entity is and which regimes exist" },
        body: [
          {
            es: "Una **persona moral** es una organización con personalidad jurídica propia: una **S.A. de C.V.**, una **S. de R.L.**, una **asociación civil** o una **cooperativa**. Tiene su propio RFC y paga sus propios impuestos, separados de los de sus socios.",
            en: "A **legal entity** is an organization with its own legal personality: an **S.A. de C.V.** (corporation), an **S. de R.L.** (limited liability company), a **civil association** or a **cooperative**. It has its own RFC and pays its own taxes, separate from those of its partners.",
          },
          {
            es: "El **régimen general** (Título II de la LISR) es el más común: la empresa paga ISR sobre su utilidad fiscal. El **RESICO de personas morales** es para sociedades cuyos socios son **solo personas físicas** e ingresos de hasta **35 millones** al año; la tasa es la misma, pero ingresos y deducciones se reconocen al **cobrar y pagar** (flujo de efectivo). El régimen de **personas morales con fines no lucrativos** (Título III) incluye sindicatos, asociaciones y **donatarias autorizadas**, que en general no pagan ISR sobre su actividad, salvo excepciones.",
            en: "The **general regime** (Title II of the Income Tax Law) is the most common: the company pays income tax on its taxable profit. **RESICO for legal entities** is for companies whose partners are **only individuals** with income up to **35 million** a year; the rate is the same, but income and deductions are recognized when **collected and paid** (cash basis). The **non-profit entities** regime (Title III) includes unions, associations and **authorized donees**, which generally do not pay income tax on their activity, with exceptions.",
          },
          {
            es: "Mini ejemplo: una S.A. de C.V. cuyo socio principal es otra empresa no puede entrar al RESICO de personas morales aunque venda poco, porque tiene un socio persona moral: tributa en el régimen general.",
            en: "Mini example: an S.A. de C.V. whose main partner is another company cannot enter RESICO for legal entities even if it sells little, because it has a legal-entity partner: it is taxed under the general regime.",
          },
        ],
        bullets: [
          { es: "Régimen general: tasa del 30 % sobre resultado fiscal; ingresos al facturar o entregar (devengado).", en: "General regime: 30% rate on taxable result; income when invoiced or delivered (accrual)." },
          { es: "RESICO PM: socios personas físicas, ingresos hasta 35 millones, flujo de efectivo.", en: "RESICO for entities: individual partners, income up to 35 million, cash basis." },
          { es: "Fines no lucrativos: sindicatos, asociaciones, donatarias autorizadas.", en: "Non-profit: unions, associations, authorized donees." },
        ],
      },
      {
        heading: { es: "Resultado fiscal e ISR anual", en: "Taxable result and annual income tax" },
        body: [
          {
            es: "La **utilidad fiscal** no es igual a la utilidad contable. Parte de los **ingresos acumulables** (los que la ley dice que se suman) y les resta las **deducciones autorizadas** (gastos que cumplen requisitos fiscales, como tener CFDI y ser indispensables). Luego se resta la **PTU pagada** a los trabajadores y las **pérdidas fiscales** de años anteriores pendientes de aplicar. Lo que queda es el **resultado fiscal**.",
            en: "**Taxable profit** is not the same as accounting profit. It starts from **taxable income** (the income the law says to add) and subtracts **authorized deductions** (expenses meeting tax requirements, such as having a CFDI and being necessary). Then the **profit sharing (PTU) paid** to workers and **tax losses** from prior years still pending are subtracted. What remains is the **taxable result**.",
          },
          {
            es: "Al resultado fiscal se le aplica la tasa del **30 %**. Al ISR anual se le restan los **pagos provisionales** hechos en el año, y la diferencia se paga (o queda saldo a favor) en la **declaración anual**, que las personas morales presentan a más tardar en **marzo**.",
            en: "The **30%** rate is applied to the taxable result. The **provisional payments** made during the year are subtracted from the annual income tax, and the difference is paid (or a balance in favor arises) in the **annual return**, which legal entities file by **March**.",
          },
          {
            es: "Mini ejemplo: ingresos acumulables $3,000,000, deducciones $2,400,000, PTU pagada $50,000, sin pérdidas. Resultado fiscal = $550,000; ISR = 550,000 × 30 % = $165,000.",
            en: "Mini example: taxable income $3,000,000, deductions $2,400,000, PTU paid $50,000, no losses. Taxable result = $550,000; income tax = 550,000 × 30% = $165,000.",
          },
        ],
        formula: "Resultado fiscal = Ingresos acumulables − Deducciones autorizadas − PTU pagada − Pérdidas fiscales pendientes;  ISR = Resultado fiscal × 30 %",
      },
      {
        heading: { es: "Pagos provisionales y dividendos", en: "Provisional payments and dividends" },
        body: [
          {
            es: "Durante el año, la empresa no espera a marzo: hace **pagos provisionales** mensuales. Para estimar su utilidad usa el **coeficiente de utilidad** (CU): la utilidad fiscal del último ejercicio entre sus ingresos nominales. Es como decir \"el año pasado ganaba 12 centavos por cada peso que vendía\".",
            en: "During the year, the company does not wait until March: it makes monthly **provisional payments**. To estimate its profit it uses the **profit coefficient** (CU): last year's taxable profit divided by its nominal income. It is like saying \"last year I earned 12 cents for every peso I sold\".",
          },
          {
            es: "Los ingresos **acumulados** del año hasta ese mes se multiplican por el CU para obtener la utilidad estimada; a ésta se aplica el 30 % y se restan los pagos provisionales anteriores del mismo año. Así cada pago es **acumulativo**.",
            en: "The year-to-date **cumulative** income up to that month is multiplied by the CU to get the estimated profit; 30% is applied and the earlier provisional payments of the same year are subtracted. So each payment is **cumulative**.",
          },
          {
            es: "Cuando la empresa reparte **dividendos**, revisa su **CUFIN** (Cuenta de Utilidad Fiscal Neta): un registro de las utilidades que **ya pagaron ISR** en la empresa. Si el dividendo sale de la CUFIN, la empresa no vuelve a pagar ISR por él; si no, sí paga. Además, al pagar dividendos a personas físicas hay una **retención adicional del 10 %**. Mini ejemplo: con CUFIN de $1,000,000, repartir $400,000 no genera ISR corporativo extra.",
            en: "When the company pays **dividends**, it checks its **CUFIN** (Net Taxable Profit Account): a record of profits that **already paid income tax** at the company. If the dividend comes from CUFIN, the company does not pay income tax on it again; if not, it does. Also, when paying dividends to individuals there is an **additional 10% withholding**. Mini example: with a CUFIN of $1,000,000, distributing $400,000 creates no extra corporate income tax.",
          },
        ],
        formula: "CU = Utilidad fiscal del ejercicio anterior ÷ Ingresos nominales;  Pago provisional = (Ingresos acumulados × CU × 30 %) − Pagos provisionales previos",
      },
    ],
    examples: [
      {
        title: { es: "Resultado fiscal con pérdidas", en: "Taxable result with losses" },
        problem: {
          es: "Alimentos del Bajío, S.A. de C.V. tuvo ingresos acumulables de $8,000,000, deducciones autorizadas de $6,500,000, pagó PTU de $150,000 y tiene pérdidas fiscales pendientes de $250,000. Hizo pagos provisionales por $250,000. ¿Cuánto paga en la anual?",
          en: "Alimentos del Bajío, S.A. de C.V. had taxable income of $8,000,000, authorized deductions of $6,500,000, paid $150,000 of PTU and has $250,000 of pending tax losses. It made $250,000 in provisional payments. How much does it pay in the annual return?",
        },
        steps: [
          { es: "Utilidad fiscal: 8,000,000 − 6,500,000 − 150,000 = $1,350,000.", en: "Taxable profit: 8,000,000 − 6,500,000 − 150,000 = $1,350,000." },
          { es: "Resultado fiscal: 1,350,000 − 250,000 = $1,100,000.", en: "Taxable result: 1,350,000 − 250,000 = $1,100,000." },
          { es: "ISR anual: 1,100,000 × 30 % = $330,000.", en: "Annual income tax: 1,100,000 × 30% = $330,000." },
          { es: "A pagar: 330,000 − 250,000 = $80,000.", en: "Payable: 330,000 − 250,000 = $80,000." },
        ],
        result: {
          es: "Paga $80,000 en la declaración anual de marzo.",
          en: "It pays $80,000 in the March annual return.",
        },
      },
      {
        title: { es: "Pago provisional de marzo", en: "March provisional payment" },
        problem: {
          es: "El año pasado una empresa tuvo utilidad fiscal de $480,000 e ingresos nominales de $4,000,000. De enero a marzo de este año acumula ingresos por $1,100,000 y ya pagó $25,000 de provisionales en enero y febrero. Calcula el pago de marzo.",
          en: "Last year a company had taxable profit of $480,000 and nominal income of $4,000,000. From January to March this year it has cumulative income of $1,100,000 and already paid $25,000 in provisional payments in January and February. Compute the March payment.",
        },
        steps: [
          { es: "CU = 480,000 ÷ 4,000,000 = 0.12.", en: "CU = 480,000 ÷ 4,000,000 = 0.12." },
          { es: "Utilidad estimada: 1,100,000 × 0.12 = $132,000.", en: "Estimated profit: 1,100,000 × 0.12 = $132,000." },
          { es: "ISR acumulado: 132,000 × 30 % = $39,600.", en: "Cumulative income tax: 132,000 × 30% = $39,600." },
          { es: "Pago de marzo: 39,600 − 25,000 = $14,600.", en: "March payment: 39,600 − 25,000 = $14,600." },
        ],
        result: {
          es: "El pago provisional de marzo es $14,600.",
          en: "The March provisional payment is $14,600.",
        },
      },
    ],
    keyPoints: [
      { es: "La persona moral paga sus propios impuestos, separados de los de sus socios.", en: "A legal entity pays its own taxes, separate from those of its partners." },
      { es: "Régimen general: 30 % sobre resultado fiscal; declaración anual a más tardar en marzo.", en: "General regime: 30% on taxable result; annual return due by March." },
      { es: "RESICO PM: solo socios personas físicas, hasta 35 millones, base flujo de efectivo.", en: "RESICO for entities: individual partners only, up to 35 million, cash basis." },
      { es: "Los pagos provisionales usan el coeficiente de utilidad y son acumulativos.", en: "Provisional payments use the profit coefficient and are cumulative." },
      { es: "Dividendos que salen de la CUFIN no vuelven a pagar ISR en la empresa.", en: "Dividends paid out of CUFIN do not pay income tax again at the company." },
    ],
    normativeNote: NOTE_TAX,
    exerciseIds: ['FIS-09-E1', 'FIS-09-E2', 'FIS-09-E3', 'FIS-09-E4', 'FIS-09-E5', 'FIS-09-E6'],
  },

  // ───────────────────────────── FIS-10 ─────────────────────────────
  {
    id: 'FIS-10',
    level: 5,
    topicIds: ['FIS.10'],
    title: { es: "CFDI y facturación electrónica", en: "CFDI and electronic invoicing" },
    summary: {
      es: "El CFDI es la factura electrónica que valida el SAT: tiene datos obligatorios del emisor y receptor, un tipo de comprobante, un método de pago (PUE o PPD) y reglas claras para pagos parciales y cancelaciones.",
      en: "The CFDI is the electronic invoice validated by the SAT: it has mandatory issuer and recipient data, a voucher type, a payment method (PUE or PPD) and clear rules for partial payments and cancellations.",
    },
    minutes: 15,
    objectives: [
      { es: "Explicar qué es un CFDI, quién lo certifica y qué datos del receptor exige.", en: "Explain what a CFDI is, who certifies it and what recipient data it requires." },
      { es: "Elegir el tipo de comprobante y el método de pago correctos para cada operación.", en: "Choose the right voucher type and payment method for each transaction." },
      { es: "Manejar complementos de pago, factura global y cancelaciones.", en: "Handle payment complements, global invoices and cancellations." },
    ],
    theory: [
      {
        heading: { es: "Qué es un CFDI y cómo nace", en: "What a CFDI is and how it is born" },
        body: [
          {
            es: "**CFDI** significa Comprobante Fiscal Digital por Internet: es la **factura electrónica** de México. Es un archivo **XML** (un formato de datos que leen las computadoras) con una representación impresa en PDF. Lo que vale fiscalmente es el XML.",
            en: "**CFDI** stands for Digital Tax Receipt via Internet: it is Mexico's **electronic invoice**. It is an **XML** file (a data format computers read) with a printed PDF representation. What counts for tax purposes is the XML.",
          },
          {
            es: "Para emitirlo necesitas un **Certificado de Sello Digital (CSD)**, distinto de tu e.firma, que \"sella\" la factura. Después, un **PAC** (Proveedor de Certificación Autorizado por el SAT, o el servicio gratuito del SAT) la valida y le pone el **timbre**, que incluye el **folio fiscal** o **UUID**: un código único que identifica esa factura en todo el país.",
            en: "To issue one you need a **Digital Seal Certificate (CSD)**, different from your e.firma, which \"seals\" the invoice. Then a **PAC** (SAT-Authorized Certification Provider, or the SAT's free service) validates it and adds the **stamp**, which includes the **tax folio** or **UUID**: a unique code that identifies that invoice nationwide.",
          },
          {
            es: "En la versión **4.0** del CFDI, los datos del **receptor** deben coincidir con su constancia de situación fiscal: **RFC**, **nombre o razón social**, **código postal del domicilio fiscal** y **régimen fiscal**, además del **uso del CFDI** (para qué lo usará: gastos en general, adquisición de mercancías, etc.). Mini ejemplo: si el nombre que te dicta tu cliente no coincide con el registrado en el SAT, el timbrado se rechaza.",
            en: "In CFDI version **4.0**, the **recipient's** data must match their tax status certificate: **RFC**, **name or company name**, **tax address ZIP code** and **tax regime**, plus the **CFDI use** (what they will use it for: general expenses, purchase of goods, etc.). Mini example: if the name your customer gives you does not match the one registered with the SAT, the stamping is rejected.",
          },
        ],
      },
      {
        heading: { es: "Tipos de comprobante y métodos de pago", en: "Voucher types and payment methods" },
        body: [
          {
            es: "Cada CFDI tiene un **tipo de comprobante**. El de **Ingreso (I)** documenta una venta o servicio cobrado. El de **Egreso (E)** es una **nota de crédito**: devoluciones, descuentos o bonificaciones. El de **Traslado (T)** ampara mercancía que se mueve sin venderse. El de **Nómina (N)** es el recibo de sueldo. El de **Pago (P)** registra cobros de facturas a plazos.",
            en: "Each CFDI has a **voucher type**. **Income (I)** documents a sale or service charged. **Expense (E)** is a **credit note**: returns, discounts or rebates. **Transfer (T)** covers goods moved without being sold. **Payroll (N)** is the salary slip. **Payment (P)** records collections of installment invoices.",
          },
          {
            es: "El **método de pago** dice cuándo se cobra. **PUE** (Pago en Una sola Exhibición) se usa cuando el cliente paga **al emitir** la factura o dentro del mismo mes. **PPD** (Pago en Parcialidades o Diferido) se usa cuando pagará **después** o en partes; en ese caso la **forma de pago** se pone como \"por definir\".",
            en: "The **payment method** says when it is collected. **PUE** (single payment) is used when the customer pays **upon issuance** of the invoice or within the same month. **PPD** (installment or deferred payment) is used when they will pay **later** or in parts; in that case the **form of payment** is set to \"to be defined\".",
          },
          {
            es: "Con PPD, cada vez que cobras emites un **complemento de pago** (CFDI tipo P, también llamado REP) que dice cuánto se pagó y cuál es el **saldo insoluto** (lo que falta). Como el IVA se causa al cobrar, este complemento es lo que permite al cliente acreditar ese IVA. Mini ejemplo: vendes $11,600 a 30 días con PPD; cuando te pagan, emites el complemento por $11,600 con saldo insoluto $0.",
            en: "With PPD, each time you collect you issue a **payment complement** (type P CFDI, also called REP) stating how much was paid and the **outstanding balance** (what remains). Since VAT is due upon collection, this complement is what lets the customer credit that VAT. Mini example: you sell $11,600 on 30-day terms with PPD; when you are paid, you issue the complement for $11,600 with a $0 outstanding balance.",
          },
        ],
        bullets: [
          { es: "I Ingreso: ventas y servicios.", en: "I Income: sales and services." },
          { es: "E Egreso: notas de crédito (devoluciones, descuentos).", en: "E Expense: credit notes (returns, discounts)." },
          { es: "T Traslado: mover mercancía sin venta.", en: "T Transfer: moving goods without a sale." },
          { es: "N Nómina: pagos a trabajadores.", en: "N Payroll: payments to workers." },
          { es: "P Pago: complemento para facturas PPD.", en: "P Payment: complement for PPD invoices." },
        ],
      },
      {
        heading: { es: "Público en general y cancelaciones", en: "General public and cancellations" },
        body: [
          {
            es: "Si vendes a personas que **no piden factura** (por ejemplo, en una tienda de abarrotes), puedes juntar esas ventas en una **factura global** con el **RFC genérico de público en general** (XAXX010101000), por día, semana, mes o el periodo que permitan las reglas. Así esas ventas quedan documentadas.",
            en: "If you sell to people who **do not ask for an invoice** (for example, in a grocery store), you can group those sales in a **global invoice** with the **generic general-public RFC** (XAXX010101000), by day, week, month or the period the rules allow. That way those sales are documented.",
          },
          {
            es: "Para **cancelar** un CFDI debes indicar un **motivo** (por ejemplo, errores con relación a una factura que la sustituye, errores sin relación, operación que no se realizó u operación nominativa incluida en una factura global). En muchos casos el **receptor debe aceptar** la cancelación, y hay plazos para hacerlo.",
            en: "To **cancel** a CFDI you must give a **reason** (for example, errors with a replacement invoice, errors without one, a transaction that did not happen, or a named transaction included in a global invoice). In many cases the **recipient must accept** the cancellation, and there are deadlines for it.",
          },
          {
            es: "Recuerda: **cancelar no es lo mismo que corregir un descuento**. Si la venta sí ocurrió pero luego hiciste una devolución parcial, lo correcto es una **nota de crédito** (Egreso), no cancelar. Mini ejemplo: vendes $5,800 y el cliente devuelve una pieza de $1,160: emites un CFDI de Egreso por $1,160 relacionado con la factura original.",
            en: "Remember: **cancelling is not the same as fixing a discount**. If the sale did happen but you later had a partial return, the right tool is a **credit note** (Expense), not a cancellation. Mini example: you sell $5,800 and the customer returns a $1,160 item: you issue an Expense CFDI for $1,160 linked to the original invoice.",
          },
        ],
      },
    ],
    examples: [
      {
        title: { es: "Factura a plazos con dos pagos", en: "Installment invoice with two payments" },
        problem: {
          es: "Un taller vende un servicio de $40,000 + IVA a una empresa que pagará la mitad en 15 días y la otra mitad en 45 días. ¿Cómo se factura y cuánto IVA contiene cada pago?",
          en: "A workshop sells a $40,000 + VAT service to a company that will pay half in 15 days and the other half in 45 days. How is it invoiced and how much VAT does each payment contain?",
        },
        steps: [
          { es: "Total: 40,000 × 1.16 = $46,400. Se emite CFDI de Ingreso con método PPD.", en: "Total: 40,000 × 1.16 = $46,400. An Income CFDI is issued with PPD method." },
          { es: "Primer pago $23,200: complemento de pago con saldo insoluto 46,400 − 23,200 = $23,200.", en: "First payment $23,200: payment complement with outstanding balance 46,400 − 23,200 = $23,200." },
          { es: "IVA en cada pago: 23,200 ÷ 1.16 × 0.16 = $3,200.", en: "VAT in each payment: 23,200 ÷ 1.16 × 0.16 = $3,200." },
          { es: "Segundo pago $23,200: otro complemento, saldo insoluto $0.", en: "Second payment $23,200: another complement, outstanding balance $0." },
        ],
        result: {
          es: "Una factura PPD y dos complementos de pago; cada uno ampara $3,200 de IVA que se causa en el mes de su cobro.",
          en: "One PPD invoice and two payment complements; each covers $3,200 of VAT due in the month it is collected.",
        },
      },
      {
        title: { es: "¿Cancelar o nota de crédito?", en: "Cancel or credit note?" },
        problem: {
          es: "Una papelería facturó $2,320 a una escuela. Días después nota que puso mal el código postal de la escuela. En otra venta de $3,480, el cliente devolvió la mitad de la mercancía. ¿Qué hace en cada caso?",
          en: "A stationery store invoiced $2,320 to a school. Days later it notices it entered the school's ZIP code incorrectly. In another $3,480 sale, the customer returned half the goods. What does it do in each case?",
        },
        steps: [
          { es: "Código postal erróneo: es un error en la factura; se cancela indicando que hubo errores y se emite una nueva que la sustituye.", en: "Wrong ZIP code: it is an invoice error; it is cancelled stating there were errors and a new replacement invoice is issued." },
          { es: "Devolución parcial: la venta sí existió; se emite CFDI de Egreso por 3,480 ÷ 2 = $1,740.", en: "Partial return: the sale did happen; an Expense CFDI is issued for 3,480 ÷ 2 = $1,740." },
        ],
        result: {
          es: "Errores de datos: cancelar y sustituir. Devoluciones o descuentos: nota de crédito.",
          en: "Data errors: cancel and replace. Returns or discounts: credit note.",
        },
      },
    ],
    keyPoints: [
      { es: "El CFDI es un XML sellado con tu CSD y timbrado por un PAC, que le asigna el UUID.", en: "The CFDI is an XML sealed with your CSD and stamped by a PAC, which assigns the UUID." },
      { es: "En CFDI 4.0, RFC, nombre, código postal y régimen del receptor deben coincidir con el SAT.", en: "In CFDI 4.0, the recipient's RFC, name, ZIP code and regime must match SAT records." },
      { es: "PUE si se paga al facturar; PPD si se paga después o en partes, con complemento de pago.", en: "PUE if paid upon invoicing; PPD if paid later or in parts, with a payment complement." },
      { es: "Ventas sin factura van en una factura global con el RFC genérico.", en: "Sales without an invoice go in a global invoice with the generic RFC." },
      { es: "Devoluciones y descuentos se documentan con CFDI de Egreso, no cancelando.", en: "Returns and discounts are documented with an Expense CFDI, not by cancelling." },
    ],
    normativeNote: NOTE_TAX,
    exerciseIds: ['FIS-10-E1', 'FIS-10-E2', 'FIS-10-E3', 'FIS-10-E4', 'FIS-10-E5', 'FIS-10-E6'],
  },

  // ───────────────────────────── FIS-11 ─────────────────────────────
  {
    id: 'FIS-11',
    level: 5,
    topicIds: ['FIS.11'],
    title: { es: "Contabilidad electrónica", en: "Electronic accounting" },
    summary: {
      es: "La contabilidad electrónica obliga a llevar tus registros en sistemas, ligar cada póliza a sus CFDI y enviar al SAT el catálogo de cuentas con código agrupador y la balanza de comprobación mensual.",
      en: "Electronic accounting requires keeping your records in systems, linking each journal entry to its CFDI, and sending the SAT the chart of accounts with the grouping code and the monthly trial balance.",
    },
    minutes: 15,
    objectives: [
      { es: "Explicar qué es la contabilidad electrónica y qué archivos la forman.", en: "Explain what electronic accounting is and which files it consists of." },
      { es: "Asociar un catálogo de cuentas al código agrupador del SAT.", en: "Map a chart of accounts to the SAT grouping code." },
      { es: "Registrar pólizas ligadas a CFDI y verificar que la balanza cuadre.", en: "Record entries linked to CFDI and check that the trial balance balances." },
    ],
    theory: [
      {
        heading: { es: "Qué es y quién la lleva", en: "What it is and who keeps it" },
        body: [
          {
            es: "El **Código Fiscal de la Federación** obliga a los contribuyentes a llevar **contabilidad** y a ingresarla de forma mensual al SAT por medios electrónicos, según las reglas que publica la autoridad. A esto se le llama **contabilidad electrónica**: tus libros ya no son cuadernos, sino archivos en **XML** con un formato definido por el SAT.",
            en: "The **Federal Tax Code** requires taxpayers to keep **accounting records** and to submit them monthly to the SAT electronically, under the rules the authority publishes. This is called **electronic accounting**: your books are no longer notebooks but **XML** files in a format defined by the SAT.",
          },
          {
            es: "La llevan principalmente las **personas morales** y las personas físicas con actividades empresariales, profesionales o de arrendamiento que no estén liberadas. Algunos contribuyentes con ingresos bajos o que usan las herramientas gratuitas del SAT (como su aplicación de registro de ingresos y gastos) quedan **liberados** de enviarla; esas reglas cambian, así que conviene revisarlas cada año.",
            en: "It is mainly kept by **legal entities** and individuals with business, professional or rental activities who are not exempted. Some low-income taxpayers or those using SAT's free tools (such as its income and expense recording app) are **exempted** from sending it; those rules change, so it is worth checking them every year.",
          },
          {
            es: "La contabilidad se debe **conservar** en general **5 años**. Mini ejemplo: una S.A. de C.V. que recibe una revisión en 2026 sobre el ejercicio 2022 debe poder mostrar sus pólizas, auxiliares y CFDI de ese año.",
            en: "Accounting records must generally be **kept for 5 years**. Mini example: an S.A. de C.V. reviewed in 2026 for fiscal year 2022 must be able to show its entries, ledgers and CFDI for that year.",
          },
        ],
      },
      {
        heading: { es: "Los archivos: catálogo, balanza, pólizas", en: "The files: chart, trial balance, entries" },
        body: [
          {
            es: "El **catálogo de cuentas** es la lista de todas tus cuentas (Bancos, Clientes, Ventas...). A cada cuenta le asocias un **código agrupador** del SAT: una lista estándar que permite al SAT comparar a todos los contribuyentes aunque cada uno nombre sus cuentas distinto. Por ejemplo, tu cuenta \"Banco Norte cheques\" se asocia al código agrupador de **Bancos nacionales**.",
            en: "The **chart of accounts** is the list of all your accounts (Bank, Receivables, Sales...). You map each account to a SAT **grouping code**: a standard list that lets the SAT compare all taxpayers even though each one names its accounts differently. For example, your \"North Bank checking\" account is mapped to the **domestic banks** grouping code.",
          },
          {
            es: "La **balanza de comprobación** muestra, por cuenta, el saldo inicial, los cargos, los abonos y el saldo final del mes. Se envía **mensualmente**, y al final del año hay una **balanza de cierre** con los ajustes. El catálogo se envía al inicio y cuando cambia.",
            en: "The **trial balance** shows, per account, the opening balance, debits, credits and closing balance for the month. It is sent **monthly**, and at year end there is a **closing trial balance** with adjustments. The chart is sent at the start and whenever it changes.",
          },
          {
            es: "Las **pólizas** (asientos con su detalle) y los **auxiliares** (movimientos de cada cuenta y de folios fiscales) **no** se envían cada mes: se entregan **cuando el SAT los solicita**, por ejemplo en una auditoría o al pedir una devolución. Mini ejemplo: si pides devolución de IVA, el SAT puede pedirte las pólizas del periodo.",
            en: "**Journal entries** (entries with their detail) and **ledgers** (movements of each account and of tax folios) are **not** sent every month: they are delivered **when the SAT requests them**, for example in an audit or when you claim a refund. Mini example: if you claim a VAT refund, the SAT may ask for that period's entries.",
          },
        ],
        bullets: [
          { es: "Catálogo de cuentas con código agrupador: al inicio y cuando cambie.", en: "Chart of accounts with grouping code: at the start and when it changes." },
          { es: "Balanza de comprobación: cada mes.", en: "Trial balance: every month." },
          { es: "Pólizas y auxiliares: a solicitud de la autoridad.", en: "Entries and ledgers: upon the authority's request." },
          { es: "Conservación: en general 5 años.", en: "Retention: generally 5 years." },
        ],
      },
      {
        heading: { es: "Pólizas ligadas a CFDI y balanza que cuadra", en: "Entries linked to CFDI and a balancing trial balance" },
        body: [
          {
            es: "Cada póliza debe poder **rastrearse** hasta su soporte: por eso se registra el **UUID** del CFDI que la respalda (la factura de venta, la de compra o el complemento de pago). Así, cualquier revisor puede ir del asiento a la factura y viceversa.",
            en: "Each entry must be **traceable** to its support: that is why the **UUID** of the backing CFDI is recorded (the sales invoice, the purchase invoice or the payment complement). That way any reviewer can go from the entry to the invoice and vice versa.",
          },
          {
            es: "Antes de enviar la balanza, verifica que **la suma de saldos deudores sea igual a la suma de saldos acreedores**. Si no cuadra, hay un error de captura. También conviene conciliar: el IVA trasladado de tu balanza debe corresponder a tus CFDI de ingreso cobrados, y Bancos a tus estados de cuenta.",
            en: "Before sending the trial balance, check that **total debit balances equal total credit balances**. If it does not balance, there is an entry error. It also helps to reconcile: the output VAT in your trial balance should match your collected income CFDI, and Bank should match your bank statements.",
          },
          {
            es: "Mini ejemplo: cobras una venta de $10,000 + IVA por transferencia. La póliza carga Bancos $11,600 y abona Ventas $10,000 e IVA trasladado $1,600, y lleva anotado el UUID de la factura.",
            en: "Mini example: you collect a $10,000 + VAT sale by transfer. The entry debits Bank $11,600 and credits Sales $10,000 and Output VAT $1,600, and records the invoice UUID.",
          },
        ],
        formula: "Σ saldos deudores = Σ saldos acreedores",
      },
    ],
    examples: [
      {
        title: { es: "Póliza de compra ligada a CFDI", en: "Purchase entry linked to CFDI" },
        problem: {
          es: "Una distribuidora compra mercancía por $30,000 + IVA a crédito con su proveedor, que le envía su CFDI. Registra la póliza.",
          en: "A distributor buys $30,000 + VAT of goods on credit from its supplier, which sends its CFDI. Record the entry.",
        },
        steps: [
          { es: "IVA: 30,000 × 16 % = $4,800; total 34,800.", en: "VAT: 30,000 × 16% = $4,800; total 34,800." },
          { es: "Cargo a Inventarios $30,000 y a IVA acreditable $4,800 (como se paga después, muchas empresas usan una subcuenta de IVA pendiente de pago hasta liquidar).", en: "Debit Inventory $30,000 and Input VAT $4,800 (since it is paid later, many companies use an unpaid-VAT subaccount until settled)." },
          { es: "Abono a Proveedores $34,800.", en: "Credit Accounts payable $34,800." },
          { es: "Se anota el UUID del CFDI del proveedor en la póliza.", en: "The supplier's CFDI UUID is recorded in the entry." },
        ],
        result: {
          es: "Cargos 34,800 = Abonos 34,800, y la póliza queda ligada a su factura.",
          en: "Debits 34,800 = Credits 34,800, and the entry is linked to its invoice.",
        },
      },
      {
        title: { es: "Revisar que la balanza cuadre", en: "Checking the trial balance balances" },
        problem: {
          es: "Saldos deudores: Bancos $60,000, Clientes $25,000, Equipo de cómputo $40,000, Sueldos $15,000. Saldos acreedores: Proveedores $20,000, IVA trasladado $8,000, Capital social $62,000, Ventas $50,000. ¿Cuadra?",
          en: "Debit balances: Bank $60,000, Receivables $25,000, Computer equipment $40,000, Salaries $15,000. Credit balances: Payables $20,000, Output VAT $8,000, Share capital $62,000, Sales $50,000. Does it balance?",
        },
        steps: [
          { es: "Deudores: 60,000 + 25,000 + 40,000 + 15,000 = $140,000.", en: "Debits: 60,000 + 25,000 + 40,000 + 15,000 = $140,000." },
          { es: "Acreedores: 20,000 + 8,000 + 62,000 + 50,000 = $140,000.", en: "Credits: 20,000 + 8,000 + 62,000 + 50,000 = $140,000." },
        ],
        result: {
          es: "Sí cuadra: $140,000 en ambos lados. Ya se puede generar el XML de la balanza.",
          en: "Yes, it balances: $140,000 on both sides. The trial balance XML can now be generated.",
        },
      },
    ],
    keyPoints: [
      { es: "La contabilidad electrónica es llevar y enviar tu contabilidad en archivos XML con formato del SAT.", en: "Electronic accounting means keeping and sending your books in XML files in SAT format." },
      { es: "El código agrupador estandariza tu catálogo para que el SAT lo compare.", en: "The grouping code standardizes your chart so the SAT can compare it." },
      { es: "La balanza se envía cada mes; pólizas y auxiliares solo cuando el SAT los pide.", en: "The trial balance is sent monthly; entries and ledgers only when the SAT asks." },
      { es: "Cada póliza se liga al UUID del CFDI que la respalda.", en: "Each entry is linked to the UUID of its supporting CFDI." },
      { es: "La contabilidad se conserva, en general, 5 años.", en: "Accounting records are generally kept for 5 years." },
    ],
    normativeNote: NOTE_TAX,
    exerciseIds: ['FIS-11-E1', 'FIS-11-E2', 'FIS-11-E3', 'FIS-11-E4', 'FIS-11-E5', 'FIS-11-E6'],
  },

  // ───────────────────────────── FIS-12 ─────────────────────────────
  {
    id: 'FIS-12',
    level: 5,
    topicIds: ['FIS.12'],
    title: { es: "Nóminas, retenciones y obligaciones fiscales", en: "Payroll, withholdings and tax obligations" },
    summary: {
      es: "Al pagar sueldos, honorarios o rentas, el pagador actúa como retenedor: calcula el ISR (y a veces el IVA) que corresponde, lo descuenta, lo entera al SAT y lo documenta con CFDI.",
      en: "When paying salaries, fees or rent, the payer acts as a withholding agent: it computes the applicable income tax (and sometimes VAT), deducts it, remits it to the SAT and documents it with CFDI.",
    },
    minutes: 17,
    objectives: [
      { es: "Calcular la retención de ISR por salarios con la tarifa progresiva.", en: "Compute income tax withholding on salaries with the progressive tariff." },
      { es: "Distinguir retenciones al trabajador de las cargas que paga el patrón.", en: "Distinguish worker withholdings from charges paid by the employer." },
      { es: "Calcular retenciones de ISR e IVA en honorarios pagados por personas morales.", en: "Compute income tax and VAT withholdings on fees paid by companies." },
      { es: "Registrar la póliza de nómina y conocer los plazos para enterar retenciones.", en: "Record the payroll entry and know the deadlines to remit withholdings." },
    ],
    theory: [
      {
        heading: { es: "ISR por salarios: el patrón como retenedor", en: "Income tax on salaries: the employer as withholding agent" },
        body: [
          {
            es: "Un **retenedor** es quien, por ley, descuenta un impuesto de un pago que hace a otra persona y lo entrega al SAT. En la nómina, el **patrón** retiene el ISR de cada trabajador. Ese dinero **no es del patrón**: es del trabajador y el patrón solo lo cobra y lo entera; si no lo entera, responde por él.",
            en: "A **withholding agent** is whoever, by law, deducts a tax from a payment made to someone else and hands it to the SAT. In payroll, the **employer** withholds each worker's income tax. That money **does not belong to the employer**: it belongs to the worker, and the employer only collects and remits it; if it does not remit it, it is liable for it.",
          },
          {
            es: "Para calcularlo se usa una **tarifa progresiva** (tabla con rangos). Buscas el renglón donde cae el sueldo gravado: restas el **límite inferior**, multiplicas el **excedente** por el **porcentaje** del renglón y sumas la **cuota fija**. Para sueldos bajos existe además un **subsidio para el empleo**, cuyas reglas han cambiado en años recientes.",
            en: "To compute it a **progressive tariff** (table with brackets) is used. You find the row where the taxable salary falls: subtract the **lower limit**, multiply the **excess** by the row's **percentage** and add the **fixed fee**. For low salaries there is also an **employment subsidy**, whose rules have changed in recent years.",
          },
          {
            es: "No todo lo que recibe el trabajador es gravado: algunas prestaciones tienen **partes exentas** con límites ligados a la **UMA** (Unidad de Medida y Actualización), como el **aguinaldo**, la **prima vacacional** o la **PTU**. Mini ejemplo con una tarifa hipotética: sueldo $12,000, límite inferior $10,000, cuota fija $900 y 20 % sobre el excedente → (12,000 − 10,000) × 20 % + 900 = $1,300 de ISR.",
            en: "Not everything the worker receives is taxable: some benefits have **exempt portions** with limits tied to the **UMA** (Unit of Measure and Update), such as the **Christmas bonus**, the **vacation premium** or **PTU**. Mini example with a hypothetical tariff: salary $12,000, lower limit $10,000, fixed fee $900 and 20% on the excess → (12,000 − 10,000) × 20% + 900 = $1,300 of income tax.",
          },
        ],
        formula: "ISR = (Ingreso gravado − Límite inferior) × % sobre excedente + Cuota fija",
      },
      {
        heading: { es: "Retenciones fuera de la nómina", en: "Withholdings outside payroll" },
        body: [
          {
            es: "Las **personas morales** también retienen cuando pagan a **personas físicas** por **honorarios** (servicios profesionales) o **rentas**: en general retienen **10 % de ISR** sobre el monto sin IVA y **dos terceras partes del IVA**. Si la persona física está en **RESICO**, la retención de ISR es de **1.25 %**.",
            en: "**Companies** also withhold when they pay **individuals** for **fees** (professional services) or **rent**: in general they withhold **10% income tax** on the amount before VAT and **two thirds of the VAT**. If the individual is in **RESICO**, the income tax withholding is **1.25%**.",
          },
          {
            es: "Quien recibe el pago no pierde ese dinero: la retención es un **pago a cuenta** de sus impuestos que podrá restar en su declaración. Por eso el retenedor debe reflejar la retención en el **CFDI** y, cuando aplique, entregar la **constancia** correspondiente.",
            en: "Whoever receives the payment does not lose that money: the withholding is a **payment on account** of their taxes that they can subtract on their return. That is why the withholding agent must show the withholding on the **CFDI** and, where applicable, provide the corresponding **certificate**.",
          },
          {
            es: "Mini ejemplo: una empresa paga $20,000 de honorarios más IVA a un abogado (régimen general). IVA $3,200; retiene ISR $2,000 y IVA $2,133.33; le transfiere 20,000 + 3,200 − 2,000 − 2,133.33 = $19,066.67.",
            en: "Mini example: a company pays $20,000 in fees plus VAT to a lawyer (general regime). VAT $3,200; it withholds $2,000 income tax and $2,133.33 VAT; it transfers 20,000 + 3,200 − 2,000 − 2,133.33 = $19,066.67.",
          },
        ],
        formula: "Neto a pagar = Honorarios + IVA − ISR retenido − IVA retenido",
      },
      {
        heading: { es: "Obligaciones del patrón y póliza de nómina", en: "Employer obligations and payroll entry" },
        body: [
          {
            es: "Las obligaciones básicas del patrón son: **inscribirse** como retenedor, **timbrar un CFDI de nómina** por cada pago a cada trabajador, **enterar** las retenciones a más tardar el **día 17 del mes siguiente** y, al final del año, hacer el **cálculo anual** de sus trabajadores cuando corresponda.",
            en: "The employer's basic obligations are: **registering** as a withholding agent, **stamping a payroll CFDI** for each payment to each worker, **remitting** withholdings by the **17th of the following month** and, at year end, performing the **annual calculation** for its workers when applicable.",
          },
          {
            es: "Distingue lo que se **retiene** al trabajador (sale de su sueldo: ISR, cuota obrera del IMSS, descuento de su crédito INFONAVIT) de lo que **paga el patrón** con su propio dinero (cuota patronal del IMSS, aportación al INFONAVIT y el **Impuesto sobre Nóminas** estatal, cuya tasa cambia según el estado). Los detalles de IMSS e INFONAVIT se ven en su propia materia.",
            en: "Distinguish what is **withheld** from the worker (comes out of their salary: income tax, the employee IMSS contribution, their INFONAVIT loan deduction) from what the **employer pays** with its own money (employer IMSS contribution, INFONAVIT contribution and the state **Payroll Tax**, whose rate varies by state). IMSS and INFONAVIT details are covered in their own subject.",
          },
          {
            es: "En la póliza, el **gasto** es el sueldo bruto; el ISR retenido es un **pasivo** (lo debes al SAT) y el neto es lo que sale del banco. Mini ejemplo: sueldos $30,000, ISR retenido $3,000: cargo Sueldos y salarios $30,000; abono Impuestos por pagar $3,000 y Bancos $27,000.",
            en: "In the entry, the **expense** is the gross salary; the withheld income tax is a **liability** (you owe it to the SAT) and the net is what leaves the bank. Mini example: salaries $30,000, income tax withheld $3,000: debit Salaries and wages $30,000; credit Taxes payable $3,000 and Bank $27,000.",
          },
        ],
        bullets: [
          { es: "Retiene al trabajador: ISR, cuota obrera IMSS, descuento de crédito INFONAVIT.", en: "Withheld from the worker: income tax, employee IMSS contribution, INFONAVIT loan deduction." },
          { es: "Paga el patrón: cuota patronal IMSS, aportación INFONAVIT, Impuesto sobre Nóminas.", en: "Paid by the employer: employer IMSS contribution, INFONAVIT contribution, Payroll Tax." },
          { es: "Un CFDI de nómina por cada pago a cada trabajador.", en: "One payroll CFDI per payment to each worker." },
          { es: "Enterar retenciones a más tardar el día 17 del mes siguiente.", en: "Remit withholdings by the 17th of the following month." },
        ],
      },
    ],
    examples: [
      {
        title: { es: "Retención de ISR con tarifa", en: "Income tax withholding with the tariff" },
        problem: {
          es: "Mariana gana $22,000 al mes, todo gravado. Usa este renglón hipotético de tarifa mensual: límite inferior $18,000, cuota fija $2,000, 22 % sobre el excedente. ¿Cuánto le retienen y cuánto recibe (sin contar IMSS)?",
          en: "Mariana earns $22,000 a month, all taxable. Use this hypothetical monthly tariff row: lower limit $18,000, fixed fee $2,000, 22% on the excess. How much is withheld and how much does she receive (excluding IMSS)?",
        },
        steps: [
          { es: "Excedente: 22,000 − 18,000 = $4,000.", en: "Excess: 22,000 − 18,000 = $4,000." },
          { es: "Impuesto marginal: 4,000 × 22 % = $880.", en: "Marginal tax: 4,000 × 22% = $880." },
          { es: "ISR: 880 + 2,000 = $2,880.", en: "Income tax: 880 + 2,000 = $2,880." },
          { es: "Neto: 22,000 − 2,880 = $19,120.", en: "Net: 22,000 − 2,880 = $19,120." },
        ],
        result: {
          es: "Le retienen $2,880 y recibe $19,120. El patrón entera los $2,880 a más tardar el 17 del mes siguiente.",
          en: "$2,880 is withheld and she receives $19,120. The employer remits the $2,880 by the 17th of the following month.",
        },
      },
      {
        title: { es: "Pago de renta a persona física", en: "Rent payment to an individual" },
        problem: {
          es: "Una S.A. de C.V. renta una bodega a una persona física (régimen de arrendamiento) en $25,000 + IVA mensuales. ¿Cuánto retiene y cuánto transfiere?",
          en: "An S.A. de C.V. rents a warehouse from an individual (rental regime) for $25,000 + VAT monthly. How much does it withhold and how much does it transfer?",
        },
        steps: [
          { es: "IVA: 25,000 × 16 % = $4,000.", en: "VAT: 25,000 × 16% = $4,000." },
          { es: "ISR retenido: 25,000 × 10 % = $2,500.", en: "Income tax withheld: 25,000 × 10% = $2,500." },
          { es: "IVA retenido: 4,000 × 2/3 = $2,666.67.", en: "VAT withheld: 4,000 × 2/3 = $2,666.67." },
          { es: "Neto: 25,000 + 4,000 − 2,500 − 2,666.67 = $23,833.33.", en: "Net: 25,000 + 4,000 − 2,500 − 2,666.67 = $23,833.33." },
        ],
        result: {
          es: "Retiene $5,166.67 en total y transfiere $23,833.33; el arrendador acredita esas retenciones en sus declaraciones.",
          en: "It withholds $5,166.67 in total and transfers $23,833.33; the landlord credits those withholdings on their returns.",
        },
      },
    ],
    keyPoints: [
      { es: "El patrón es retenedor: descuenta el ISR del trabajador y lo entera al SAT.", en: "The employer is a withholding agent: it deducts the worker's income tax and remits it to the SAT." },
      { es: "ISR por salarios = (gravado − límite inferior) × % + cuota fija.", en: "Salary income tax = (taxable − lower limit) × % + fixed fee." },
      { es: "Personas morales retienen 10 % de ISR y 2/3 del IVA en honorarios y rentas de personas físicas.", en: "Companies withhold 10% income tax and 2/3 of VAT on fees and rent from individuals." },
      { es: "Retenciones al trabajador no son gasto del patrón; las cuotas patronales sí.", en: "Worker withholdings are not an employer expense; employer contributions are." },
      { es: "Cada pago de nómina lleva CFDI y las retenciones se enteran a más tardar el día 17.", en: "Each payroll payment carries a CFDI and withholdings are remitted by the 17th." },
    ],
    normativeNote: NOTE_TAX,
    exerciseIds: ['FIS-12-E1', 'FIS-12-E2', 'FIS-12-E3', 'FIS-12-E4', 'FIS-12-E5', 'FIS-12-E6'],
  },
]

export const exercises: Exercise[] = [
  // ═════════════════════════ FIS-07 ═════════════════════════
  {
    id: 'FIS-07-E1',
    level: 5,
    module: 'FIS-07',
    kind: 'mcq',
    flavor: 'concept',
    prompt: {
      es: "¿Cuál de estas operaciones NO es uno de los cuatro actos que grava la Ley del IVA?",
      en: "Which of these transactions is NOT one of the four acts taxed by the VAT Law?",
    },
    options: [
      { id: 'FIS-07-E1-a', text: { es: "Rentar un local comercial", en: "Renting out a commercial store" } },
      { id: 'FIS-07-E1-b', text: { es: "Importar maquinaria de otro país", en: "Importing machinery from another country" } },
      { id: 'FIS-07-E1-c', text: { es: "Recibir un sueldo como empleado de una empresa", en: "Receiving a salary as a company employee" } },
      { id: 'FIS-07-E1-d', text: { es: "Dar un servicio de consultoría por tu cuenta", en: "Providing a consulting service on your own" } },
    ],
    correctOptionId: 'FIS-07-E1-c',
    explanation: {
      es: "La LIVA grava enajenar bienes, prestar servicios independientes, otorgar el uso o goce temporal de bienes (rentar) e importar. El trabajo subordinado (sueldo) no es un servicio independiente, así que no lleva IVA. Error común: pensar que todo pago por trabajo causa IVA.",
      en: "The VAT Law taxes selling goods, providing independent services, granting temporary use of goods (renting) and importing. Subordinate work (salary) is not an independent service, so it carries no VAT. Common mistake: thinking every payment for work triggers VAT.",
    },
    difficulty: 1,
    points: 10,
    competency: 'vat-law',
  },
  {
    id: 'FIS-07-E2',
    level: 5,
    module: 'FIS-07',
    kind: 'classify',
    flavor: 'concept',
    prompt: {
      es: "Clasifica cada operación según su tratamiento en la Ley del IVA (régimen general del impuesto, sin estímulos de zona fronteriza).",
      en: "Classify each transaction by its treatment under the VAT Law (general rules, without border-zone incentives).",
    },
    categories: [
      { id: 'FIS-07-E2-c1', label: { es: "Tasa 16 %", en: "16% rate" } },
      { id: 'FIS-07-E2-c2', label: { es: "Tasa 0 %", en: "0% rate" } },
      { id: 'FIS-07-E2-c3', label: { es: "Exento", en: "Exempt" } },
    ],
    items: [
      { id: 'FIS-07-E2-i1', label: { es: "Honorarios de un despacho de abogados", en: "Fees of a law firm" }, correctCategoryId: 'FIS-07-E2-c1' },
      { id: 'FIS-07-E2-i2', label: { es: "Venta de frijol y arroz en una tienda de abarrotes", en: "Sale of beans and rice in a grocery store" }, correctCategoryId: 'FIS-07-E2-c2' },
      { id: 'FIS-07-E2-i3', label: { es: "Renta de una casa para vivir", en: "Renting a house to live in" }, correctCategoryId: 'FIS-07-E2-c3' },
      { id: 'FIS-07-E2-i4', label: { es: "Colegiatura de una primaria con validez oficial", en: "Tuition at an officially recognized primary school" }, correctCategoryId: 'FIS-07-E2-c3' },
      { id: 'FIS-07-E2-i5', label: { es: "Exportación de aguacate a otro país", en: "Export of avocados to another country" }, correctCategoryId: 'FIS-07-E2-c2' },
      { id: 'FIS-07-E2-i6', label: { es: "Venta de un refrigerador nuevo en una tienda departamental", en: "Sale of a new refrigerator in a department store" }, correctCategoryId: 'FIS-07-E2-c1' },
    ],
    explanation: {
      es: "Los servicios profesionales y los bienes de consumo como electrodomésticos van al 16 %. Los alimentos básicos no preparados y la exportación tienen tasa 0 %. La renta de casa habitación y la enseñanza con validez oficial están exentas. Error común: confundir 0 % con exento; en ambos el cliente no paga IVA, pero solo con 0 % se acredita el IVA de las compras.",
      en: "Professional services and consumer goods such as appliances are taxed at 16%. Basic unprepared foods and exports have a 0% rate. Home rental and officially recognized education are exempt. Common mistake: confusing 0% with exempt; in both the customer pays no VAT, but only at 0% can input VAT be credited.",
    },
    difficulty: 2,
    points: 15,
    competency: 'vat-law',
  },
  {
    id: 'FIS-07-E3',
    level: 5,
    module: 'FIS-07',
    kind: 'truefalse',
    flavor: 'concept',
    prompt: {
      es: "Un contribuyente que solo realiza actos exentos de IVA puede acreditar el IVA que pagó en sus compras y pedir su devolución.",
      en: "A taxpayer who only carries out VAT-exempt acts can credit the VAT paid on purchases and claim a refund.",
    },
    answer: false,
    explanation: {
      es: "Falso. Solo se acredita el IVA de compras relacionadas con actos gravados (incluida la tasa 0 %). Quien solo realiza actos exentos no acredita: el IVA pagado se vuelve parte de su costo. Error común: tratar exento y tasa 0 % como si fueran lo mismo.",
      en: "False. Only VAT on purchases related to taxed acts (including the 0% rate) can be credited. Someone who only carries out exempt acts cannot credit: the VAT paid becomes part of their cost. Common mistake: treating exempt and 0% as if they were the same.",
    },
    difficulty: 1,
    points: 10,
    competency: 'vat-law',
  },
  {
    id: 'FIS-07-E4',
    level: 5,
    module: 'FIS-07',
    kind: 'numeric',
    flavor: 'case',
    context: {
      es: "Comercializadora del Norte, S.A. de C.V. contrata a una arquitecta (persona física, régimen general) por $12,000 de honorarios más IVA al 16 %.",
      en: "Comercializadora del Norte, S.A. de C.V. hires an architect (individual, general regime) for $12,000 in fees plus 16% VAT.",
    },
    prompt: {
      es: "¿Cuánto IVA debe retener la empresa a la arquitecta? Responde en pesos.",
      en: "How much VAT must the company withhold from the architect? Answer in pesos.",
    },
    answer: 1280,
    unit: 'MXN',
    decimals: 2,
    tolerance: { abs: 0.5 },
    explanation: {
      es: "IVA trasladado: 12,000 × 16 % = $1,920. La persona moral retiene dos terceras partes: 1,920 × 2/3 = $1,280. La arquitecta solo recibe en efectivo $640 de IVA. Error común: retener el 16 % completo o calcular 2/3 sobre los honorarios en vez de sobre el IVA.",
      en: "Output VAT: 12,000 × 16% = $1,920. The company withholds two thirds: 1,920 × 2/3 = $1,280. The architect only receives $640 of VAT in cash. Common mistake: withholding the full 16% or computing 2/3 on the fees instead of on the VAT.",
    },
    difficulty: 2,
    points: 15,
    competency: 'vat-law',
  },
  {
    id: 'FIS-07-E5',
    level: 5,
    module: 'FIS-07',
    kind: 'fields',
    flavor: 'case',
    context: {
      es: "En agosto, una imprenta facturó $90,000 + IVA, pero solo cobró $80,000 + IVA; el resto lo cobrará en septiembre. En agosto pagó insumos por $50,000 + IVA, todos con CFDI. Tasa 16 %, sin retenciones.",
      en: "In August, a print shop invoiced $90,000 + VAT but only collected $80,000 + VAT; it will collect the rest in September. In August it paid $50,000 + VAT for supplies, all with CFDI. 16% rate, no withholdings.",
    },
    prompt: {
      es: "Aplica el flujo de efectivo y calcula el IVA de agosto, en pesos.",
      en: "Apply the cash basis and compute August VAT, in pesos.",
    },
    fields: [
      { id: 'f1', label: { es: "IVA trasladado efectivamente cobrado", en: "Output VAT actually collected" }, answer: 12800, unit: 'MXN', tolerance: { abs: 0.5 } },
      { id: 'f2', label: { es: "IVA acreditable pagado", en: "Input VAT paid" }, answer: 8000, unit: 'MXN', tolerance: { abs: 0.5 } },
      { id: 'f3', label: { es: "IVA a cargo del mes", en: "VAT payable for the month" }, answer: 4800, unit: 'MXN', tolerance: { abs: 0.5 } },
    ],
    explanation: {
      es: "Solo se causa el IVA de lo cobrado: 80,000 × 16 % = $12,800. Acreditable: 50,000 × 16 % = $8,000. A cargo: 12,800 − 8,000 = $4,800. Los $1,600 del IVA de los $10,000 no cobrados se causan en septiembre. Error común: usar lo facturado ($90,000) y pagar IVA de más en agosto.",
      en: "Only VAT on what was collected is due: 80,000 × 16% = $12,800. Creditable: 50,000 × 16% = $8,000. Payable: 12,800 − 8,000 = $4,800. The $1,600 of VAT on the uncollected $10,000 becomes due in September. Common mistake: using the invoiced amount ($90,000) and overpaying VAT in August.",
    },
    difficulty: 2,
    points: 20,
    competency: 'vat-law',
  },
  {
    id: 'FIS-07-E6',
    level: 5,
    module: 'FIS-07',
    kind: 'multi',
    flavor: 'concept',
    prompt: {
      es: "¿Cuáles son requisitos para acreditar el IVA de una compra según la LIVA? Selecciona todas las que apliquen.",
      en: "Which are requirements to credit the VAT on a purchase under the VAT Law? Select all that apply.",
    },
    options: [
      { id: 'FIS-07-E6-a', text: { es: "Que el gasto sea estrictamente indispensable para tu actividad gravada", en: "That the expense be strictly necessary for your taxed activity" } },
      { id: 'FIS-07-E6-b', text: { es: "Que el IVA venga trasladado por separado en un CFDI a tu nombre", en: "That the VAT be shown separately on a CFDI in your name" } },
      { id: 'FIS-07-E6-c', text: { es: "Que el IVA esté efectivamente pagado", en: "That the VAT be actually paid" } },
      { id: 'FIS-07-E6-d', text: { es: "Que la compra sea para uso personal de tu familia", en: "That the purchase be for your family's personal use" } },
      { id: 'FIS-07-E6-e', text: { es: "Basta con un ticket simple sin datos fiscales", en: "A simple receipt without tax data is enough" } },
    ],
    correctOptionIds: ['FIS-07-E6-a', 'FIS-07-E6-b', 'FIS-07-E6-c'],
    explanation: {
      es: "Para acreditar, el gasto debe ser indispensable para la actividad gravada, el IVA debe constar por separado en un CFDI y estar efectivamente pagado (además de enterar retenciones si las hubo). Los gastos personales no se acreditan y un ticket sin datos fiscales no sirve. Error común: creer que cualquier IVA pagado se puede recuperar.",
      en: "To credit, the expense must be necessary for the taxed activity, the VAT must appear separately on a CFDI and be actually paid (plus remitting withholdings if any). Personal expenses cannot be credited and a receipt without tax data does not work. Common mistake: believing any VAT paid can be recovered.",
    },
    difficulty: 1,
    points: 10,
    competency: 'vat-law',
  },

  // ═════════════════════════ FIS-08 ═════════════════════════
  {
    id: 'FIS-08-E1',
    level: 5,
    module: 'FIS-08',
    kind: 'classify',
    flavor: 'concept',
    prompt: {
      es: "Clasifica cada ingreso de una persona física en el régimen o capítulo de la LISR que le corresponde.",
      en: "Classify each individual's income into the corresponding Income Tax Law regime or chapter.",
    },
    categories: [
      { id: 'FIS-08-E1-c1', label: { es: "Sueldos y salarios", en: "Salaries and wages" } },
      { id: 'FIS-08-E1-c2', label: { es: "Actividades empresariales y profesionales (o RESICO)", en: "Business and professional activities (or RESICO)" } },
      { id: 'FIS-08-E1-c3', label: { es: "Arrendamiento", en: "Rental income" } },
      { id: 'FIS-08-E1-c4', label: { es: "Enajenación de bienes", en: "Sale of assets" } },
    ],
    items: [
      { id: 'FIS-08-E1-i1', label: { es: "Quincena que una enfermera recibe del hospital donde trabaja", en: "Biweekly pay a nurse receives from the hospital where she works" }, correctCategoryId: 'FIS-08-E1-c1' },
      { id: 'FIS-08-E1-i2', label: { es: "Ventas de una taquería propia", en: "Sales of one's own taco stand" }, correctCategoryId: 'FIS-08-E1-c2' },
      { id: 'FIS-08-E1-i3', label: { es: "Renta mensual de un local comercial", en: "Monthly rent of a commercial store" }, correctCategoryId: 'FIS-08-E1-c3' },
      { id: 'FIS-08-E1-i4', label: { es: "Venta ocasional de un terreno heredado", en: "Occasional sale of an inherited plot of land" }, correctCategoryId: 'FIS-08-E1-c4' },
      { id: 'FIS-08-E1-i5', label: { es: "Honorarios de una dentista con consultorio propio", en: "Fees of a dentist with her own practice" }, correctCategoryId: 'FIS-08-E1-c2' },
      { id: 'FIS-08-E1-i6', label: { es: "Aguinaldo pagado por el patrón", en: "Christmas bonus paid by the employer" }, correctCategoryId: 'FIS-08-E1-c1' },
    ],
    explanation: {
      es: "Lo que paga un patrón (quincena, aguinaldo) es sueldos y salarios. Un negocio o profesión por cuenta propia va en actividades empresariales y profesionales, o en RESICO si cumple y lo elige. Las rentas van en arrendamiento y la venta ocasional de un bien, en enajenación. Error común: poner el aguinaldo en otro régimen; es una prestación laboral.",
      en: "What an employer pays (biweekly pay, Christmas bonus) is salaries and wages. An own business or profession goes under business and professional activities, or RESICO if eligible and chosen. Rent goes under rental, and the occasional sale of an asset under sale of assets. Common mistake: placing the Christmas bonus in another regime; it is an employment benefit.",
    },
    difficulty: 1,
    points: 15,
    competency: 'individual-tax-regimes',
  },
  {
    id: 'FIS-08-E2',
    level: 5,
    module: 'FIS-08',
    kind: 'numeric',
    flavor: 'case',
    context: {
      es: "Rosa renta un departamento en $18,000 al mes y elige la deducción opcional (ciega) del 35 %. Este mes no pagó predial.",
      en: "Rosa rents out an apartment for $18,000 a month and chooses the optional (blind) 35% deduction. This month she paid no property tax.",
    },
    prompt: {
      es: "¿Cuál es la base gravable de arrendamiento de Rosa en el mes? Responde en pesos.",
      en: "What is Rosa's taxable rental base for the month? Answer in pesos.",
    },
    answer: 11700,
    unit: 'MXN',
    decimals: 2,
    tolerance: { abs: 0.5 },
    explanation: {
      es: "Deducción ciega: 18,000 × 35 % = $6,300. Base: 18,000 − 6,300 = $11,700 (equivale al 65 % de la renta). Error común: dar como respuesta los $6,300, que es la deducción, no la base.",
      en: "Blind deduction: 18,000 × 35% = $6,300. Base: 18,000 − 6,300 = $11,700 (equal to 65% of the rent). Common mistake: answering $6,300, which is the deduction, not the base.",
    },
    difficulty: 1,
    points: 10,
    competency: 'individual-tax-regimes',
  },
  {
    id: 'FIS-08-E3',
    level: 5,
    module: 'FIS-08',
    kind: 'mcq',
    flavor: 'concept',
    prompt: {
      es: "¿Qué describe mejor cómo se calcula el ISR en el RESICO de personas físicas?",
      en: "What best describes how income tax is computed in RESICO for individuals?",
    },
    options: [
      { id: 'FIS-08-E3-a', text: { es: "Una tasa baja aplicada a los ingresos cobrados, sin restar gastos", en: "A low rate applied to collected income, without subtracting expenses" } },
      { id: 'FIS-08-E3-b', text: { es: "El 30 % sobre la utilidad, después de restar todos los gastos", en: "30% on profit, after subtracting all expenses" } },
      { id: 'FIS-08-E3-c', text: { es: "Una cuota fija igual para todos, sin importar cuánto se gane", en: "A flat fee equal for everyone, regardless of earnings" } },
      { id: 'FIS-08-E3-d', text: { es: "No se paga ISR mientras se esté inscrito en RESICO", en: "No income tax is paid while enrolled in RESICO" } },
    ],
    correctOptionId: 'FIS-08-E3-a',
    explanation: {
      es: "En RESICO PF se aplica una tasa de 1 % a 2.5 % (según el nivel de ingresos) directamente a lo cobrado, sin deducciones. El 30 % sobre utilidad corresponde a personas morales del régimen general. Error común: pensar que RESICO no paga ISR o que permite restar gastos.",
      en: "In RESICO for individuals a 1% to 2.5% rate (depending on income level) is applied directly to collections, without deductions. 30% on profit belongs to legal entities in the general regime. Common mistake: thinking RESICO pays no income tax or allows subtracting expenses.",
    },
    difficulty: 1,
    points: 10,
    competency: 'individual-tax-regimes',
  },
  {
    id: 'FIS-08-E4',
    level: 5,
    module: 'FIS-08',
    kind: 'truefalse',
    flavor: 'concept',
    prompt: {
      es: "Una persona física puede tributar en más de un régimen a la vez, por ejemplo, en sueldos y salarios y en arrendamiento.",
      en: "An individual can be taxed under more than one regime at the same time, for example, salaries and wages and rental income.",
    },
    answer: true,
    explanation: {
      es: "Verdadero. El régimen depende del tipo de ingreso, y una persona puede tener varias fuentes: cada una sigue sus reglas y, en la declaración anual, varias se suman. Error común: creer que solo se puede tener un régimen y \"cambiarse\" de uno a otro.",
      en: "True. The regime depends on the type of income, and a person can have several sources: each follows its own rules and, in the annual return, several are added together. Common mistake: believing you can only have one regime and must \"switch\" from one to another.",
    },
    difficulty: 1,
    points: 10,
    competency: 'individual-tax-regimes',
  },
  {
    id: 'FIS-08-E5',
    level: 5,
    module: 'FIS-08',
    kind: 'mcq',
    flavor: 'case',
    context: {
      es: "Héctor revende celulares. Cobra unos $900,000 al año, pero sus compras de mercancía con CFDI suman $820,000. Cumple los requisitos para RESICO.",
      en: "Héctor resells cell phones. He collects about $900,000 a year, but his merchandise purchases with CFDI total $820,000. He meets the RESICO requirements.",
    },
    prompt: {
      es: "¿Qué debe analizar Héctor antes de elegir entre RESICO y actividades empresariales?",
      en: "What should Héctor analyze before choosing between RESICO and business activities?",
    },
    options: [
      { id: 'FIS-08-E5-a', text: { es: "Nada: el RESICO siempre paga menos impuesto", en: "Nothing: RESICO always pays less tax" } },
      { id: 'FIS-08-E5-b', text: { es: "Su margen: con gastos tan altos, comparar el ISR sobre ingresos (RESICO) contra el ISR sobre su utilidad real", en: "His margin: with such high expenses, compare income tax on revenue (RESICO) against income tax on his real profit" } },
      { id: 'FIS-08-E5-c', text: { es: "Solo cuántos clientes le piden factura", en: "Only how many customers ask for an invoice" } },
      { id: 'FIS-08-E5-d', text: { es: "El color de su logotipo en las facturas", en: "The color of his logo on the invoices" } },
    ],
    correctOptionId: 'FIS-08-E5-b',
    explanation: {
      es: "Su utilidad real es de unos $80,000 (900,000 − 820,000). En RESICO pagaría un porcentaje sobre los $900,000 completos; en el régimen general pagaría sobre la utilidad. Con márgenes muy bajos, el régimen general puede salir más barato, así que debe hacer números. Error común: suponer que RESICO conviene a todos.",
      en: "His real profit is about $80,000 (900,000 − 820,000). In RESICO he would pay a percentage of the full $900,000; in the general regime he would pay on profit. With very low margins, the general regime may be cheaper, so he must run the numbers. Common mistake: assuming RESICO suits everyone.",
    },
    difficulty: 2,
    points: 15,
    competency: 'individual-tax-regimes',
  },
  {
    id: 'FIS-08-E6',
    level: 5,
    module: 'FIS-08',
    kind: 'fields',
    flavor: 'case',
    context: {
      es: "Iván, programador en RESICO, cobró en octubre $60,000 (sin IVA). De ese total, $20,000 se los pagó una persona moral que le retuvo 1.25 % de ISR. Supón que la tabla vigente le asigna una tasa de 1.50 % para ese nivel de ingresos.",
      en: "Iván, a programmer in RESICO, collected $60,000 (excluding VAT) in October. Of that total, $20,000 was paid by a company that withheld 1.25% income tax. Assume the current table assigns him a 1.50% rate for that income level.",
    },
    prompt: {
      es: "Calcula el ISR mensual de Iván, en pesos.",
      en: "Compute Iván's monthly income tax, in pesos.",
    },
    fields: [
      { id: 'f1', label: { es: "ISR del mes (antes de retenciones)", en: "Month's income tax (before withholdings)" }, answer: 900, unit: 'MXN', tolerance: { abs: 0.5 } },
      { id: 'f2', label: { es: "ISR retenido por la persona moral", en: "Income tax withheld by the company" }, answer: 250, unit: 'MXN', tolerance: { abs: 0.5 } },
      { id: 'f3', label: { es: "ISR a pagar", en: "Income tax payable" }, answer: 650, unit: 'MXN', tolerance: { abs: 0.5 } },
    ],
    explanation: {
      es: "ISR: 60,000 × 1.50 % = $900. Retención: 20,000 × 1.25 % = $250 (solo sobre lo que pagó la persona moral). A pagar: 900 − 250 = $650. Error común: calcular la retención sobre los $60,000 completos o no restarla.",
      en: "Income tax: 60,000 × 1.50% = $900. Withholding: 20,000 × 1.25% = $250 (only on what the company paid). Payable: 900 − 250 = $650. Common mistake: computing the withholding on the full $60,000 or not subtracting it.",
    },
    difficulty: 2,
    points: 20,
    competency: 'individual-tax-regimes',
  },

  // ═════════════════════════ FIS-09 ═════════════════════════
  {
    id: 'FIS-09-E1',
    level: 5,
    module: 'FIS-09',
    kind: 'numeric',
    flavor: 'case',
    context: {
      es: "Muebles Tapatíos, S.A. de C.V. (régimen general) tuvo en el año ingresos acumulables de $6,000,000, deducciones autorizadas de $4,500,000, pagó PTU por $200,000 y tiene pérdidas fiscales pendientes de amortizar por $300,000.",
      en: "Muebles Tapatíos, S.A. de C.V. (general regime) had taxable income of $6,000,000 for the year, authorized deductions of $4,500,000, paid $200,000 of PTU and has $300,000 of tax losses pending carryforward.",
    },
    prompt: {
      es: "¿Cuánto es el ISR anual de la empresa antes de restar pagos provisionales? Responde en pesos.",
      en: "What is the company's annual income tax before subtracting provisional payments? Answer in pesos.",
    },
    answer: 300000,
    unit: 'MXN',
    decimals: 2,
    tolerance: { abs: 0.5 },
    explanation: {
      es: "Utilidad fiscal: 6,000,000 − 4,500,000 − 200,000 = $1,300,000. Resultado fiscal: 1,300,000 − 300,000 = $1,000,000. ISR: 1,000,000 × 30 % = $300,000. Error común: olvidar restar la PTU pagada o las pérdidas pendientes y obtener $450,000 o $390,000.",
      en: "Taxable profit: 6,000,000 − 4,500,000 − 200,000 = $1,300,000. Taxable result: 1,300,000 − 300,000 = $1,000,000. Income tax: 1,000,000 × 30% = $300,000. Common mistake: forgetting to subtract PTU paid or pending losses and getting $450,000 or $390,000.",
    },
    difficulty: 2,
    points: 15,
    competency: 'corporate-tax-regimes',
  },
  {
    id: 'FIS-09-E2',
    level: 5,
    module: 'FIS-09',
    kind: 'fields',
    flavor: 'case',
    context: {
      es: "Una empresa del régimen general tuvo el año pasado utilidad fiscal de $900,000 e ingresos nominales de $6,000,000. De enero a abril de este año acumula ingresos nominales por $2,400,000 y sus pagos provisionales de enero a marzo suman $75,000. No tiene pérdidas pendientes.",
      en: "A general-regime company had last year a taxable profit of $900,000 and nominal income of $6,000,000. From January to April this year it has cumulative nominal income of $2,400,000 and its January–March provisional payments total $75,000. It has no pending losses.",
    },
    prompt: {
      es: "Calcula el pago provisional de abril.",
      en: "Compute the April provisional payment.",
    },
    fields: [
      { id: 'f1', label: { es: "Coeficiente de utilidad (decimal)", en: "Profit coefficient (decimal)" }, answer: 0.15, unit: 'none', tolerance: { abs: 0.0001 } },
      { id: 'f2', label: { es: "Utilidad fiscal estimada enero–abril (pesos)", en: "Estimated taxable profit January–April (pesos)" }, answer: 360000, unit: 'MXN', tolerance: { abs: 0.5 } },
      { id: 'f3', label: { es: "Pago provisional de abril (pesos)", en: "April provisional payment (pesos)" }, answer: 33000, unit: 'MXN', tolerance: { abs: 0.5 } },
    ],
    explanation: {
      es: "CU = 900,000 ÷ 6,000,000 = 0.15. Utilidad estimada: 2,400,000 × 0.15 = $360,000. ISR acumulado: 360,000 × 30 % = $108,000. Pago de abril: 108,000 − 75,000 = $33,000. Error común: aplicar el CU solo a los ingresos de abril; los pagos provisionales son acumulativos desde enero.",
      en: "CU = 900,000 ÷ 6,000,000 = 0.15. Estimated profit: 2,400,000 × 0.15 = $360,000. Cumulative income tax: 360,000 × 30% = $108,000. April payment: 108,000 − 75,000 = $33,000. Common mistake: applying the CU only to April income; provisional payments are cumulative from January.",
    },
    difficulty: 2,
    points: 20,
    competency: 'corporate-tax-regimes',
  },
  {
    id: 'FIS-09-E3',
    level: 5,
    module: 'FIS-09',
    kind: 'classify',
    flavor: 'concept',
    prompt: {
      es: "Clasifica cada persona moral en el régimen de ISR que le corresponde normalmente.",
      en: "Classify each legal entity into the income tax regime that normally applies to it.",
    },
    categories: [
      { id: 'FIS-09-E3-c1', label: { es: "Régimen general (Título II)", en: "General regime (Title II)" } },
      { id: 'FIS-09-E3-c2', label: { es: "RESICO de personas morales", en: "RESICO for legal entities" } },
      { id: 'FIS-09-E3-c3', label: { es: "Personas morales con fines no lucrativos", en: "Non-profit legal entities" } },
    ],
    items: [
      { id: 'FIS-09-E3-i1', label: { es: "S.A. de C.V. cuyo único socio es otra empresa", en: "S.A. de C.V. whose only partner is another company" }, correctCategoryId: 'FIS-09-E3-c1' },
      { id: 'FIS-09-E3-i2', label: { es: "S. de R.L. con tres socios personas físicas e ingresos anuales de $8 millones", en: "S. de R.L. with three individual partners and annual income of $8 million" }, correctCategoryId: 'FIS-09-E3-c2' },
      { id: 'FIS-09-E3-i3', label: { es: "Fundación autorizada para recibir donativos deducibles", en: "Foundation authorized to receive deductible donations" }, correctCategoryId: 'FIS-09-E3-c3' },
      { id: 'FIS-09-E3-i4', label: { es: "Fabricante con socios personas físicas e ingresos anuales de $300 millones", en: "Manufacturer with individual partners and annual income of $300 million" }, correctCategoryId: 'FIS-09-E3-c1' },
      { id: 'FIS-09-E3-i5', label: { es: "Sindicato de trabajadores", en: "Labor union" }, correctCategoryId: 'FIS-09-E3-c3' },
    ],
    explanation: {
      es: "El RESICO PM exige socios que sean solo personas físicas e ingresos de hasta 35 millones; por eso la S. de R.L. de $8 millones entra, pero la empresa con socio persona moral y la de $300 millones van al régimen general. Fundaciones donatarias y sindicatos están en fines no lucrativos. Error común: pensar que basta con vender poco para entrar al RESICO PM.",
      en: "RESICO for entities requires only individual partners and income up to 35 million; that is why the $8 million S. de R.L. qualifies, while the company with a legal-entity partner and the $300 million one go to the general regime. Donee foundations and unions are non-profit. Common mistake: thinking low sales alone qualify for RESICO for entities.",
    },
    difficulty: 2,
    points: 15,
    competency: 'corporate-tax-regimes',
  },
  {
    id: 'FIS-09-E4',
    level: 5,
    module: 'FIS-09',
    kind: 'truefalse',
    flavor: 'concept',
    prompt: {
      es: "Las personas morales presentan su declaración anual de ISR en abril, igual que las personas físicas.",
      en: "Legal entities file their annual income tax return in April, the same as individuals.",
    },
    answer: false,
    explanation: {
      es: "Falso. Las personas morales la presentan a más tardar en marzo; las personas físicas, en abril. Error común: aplicar a las empresas el calendario de las personas físicas y presentar tarde, con recargos y multas.",
      en: "False. Legal entities file by March; individuals, in April. Common mistake: applying the individuals' calendar to companies and filing late, incurring surcharges and fines.",
    },
    difficulty: 1,
    points: 10,
    competency: 'corporate-tax-regimes',
  },
  {
    id: 'FIS-09-E5',
    level: 5,
    module: 'FIS-09',
    kind: 'mcq',
    flavor: 'concept',
    prompt: {
      es: "¿Para qué sirve la CUFIN (Cuenta de Utilidad Fiscal Neta) de una empresa?",
      en: "What is a company's CUFIN (Net Taxable Profit Account) for?",
    },
    options: [
      { id: 'FIS-09-E5-a', text: { es: "Para registrar el saldo de la cuenta bancaria principal", en: "To record the balance of the main bank account" } },
      { id: 'FIS-09-E5-b', text: { es: "Para calcular el IVA acreditable del mes", en: "To compute the month's input VAT" } },
      { id: 'FIS-09-E5-c', text: { es: "Para controlar las utilidades que ya pagaron ISR, de modo que los dividendos que salen de ella no lo paguen otra vez en la empresa", en: "To track profits that already paid income tax, so dividends paid out of it do not pay it again at the company" } },
      { id: 'FIS-09-E5-d', text: { es: "Para calcular la PTU de los trabajadores", en: "To compute workers' profit sharing" } },
    ],
    correctOptionId: 'FIS-09-E5-c',
    explanation: {
      es: "La CUFIN acumula las utilidades que ya pagaron ISR corporativo. Si un dividendo sale de ella, la empresa no vuelve a pagar ISR por él (aunque al socio persona física se le retiene un 10 % adicional). Error común: confundirla con una cuenta bancaria o con la base de PTU.",
      en: "CUFIN accumulates profits that already paid corporate income tax. If a dividend comes out of it, the company does not pay income tax on it again (though an additional 10% is withheld from individual shareholders). Common mistake: confusing it with a bank account or with the PTU base.",
    },
    difficulty: 2,
    points: 15,
    competency: 'corporate-tax-regimes',
  },
  {
    id: 'FIS-09-E6',
    level: 5,
    module: 'FIS-09',
    kind: 'multi',
    flavor: 'concept',
    prompt: {
      es: "¿Qué características tiene el RESICO de personas morales? Selecciona todas las que apliquen.",
      en: "Which features does RESICO for legal entities have? Select all that apply.",
    },
    options: [
      { id: 'FIS-09-E6-a', text: { es: "Sus socios deben ser solo personas físicas", en: "Its partners must be individuals only" } },
      { id: 'FIS-09-E6-b', text: { es: "Ingresos anuales de hasta 35 millones de pesos", en: "Annual income up to 35 million pesos" } },
      { id: 'FIS-09-E6-c', text: { es: "Reconoce ingresos al cobrar y deducciones al pagar (flujo de efectivo)", en: "Recognizes income when collected and deductions when paid (cash basis)" } },
      { id: 'FIS-09-E6-d', text: { es: "Paga de 1 % a 2.5 % sobre ingresos, sin deducciones", en: "Pays 1% to 2.5% on income, without deductions" } },
      { id: 'FIS-09-E6-e', text: { es: "Permite que otra persona moral sea socia", en: "Allows another legal entity to be a partner" } },
    ],
    correctOptionIds: ['FIS-09-E6-a', 'FIS-09-E6-b', 'FIS-09-E6-c'],
    explanation: {
      es: "El RESICO PM es para sociedades con socios personas físicas e ingresos de hasta 35 millones, y su ventaja es el flujo de efectivo; la tasa sigue siendo la del régimen general sobre la utilidad. La tasa de 1 % a 2.5 % sobre ingresos es del RESICO de personas físicas. Error común: mezclar ambos RESICO.",
      en: "RESICO for entities is for companies with individual partners and income up to 35 million, and its advantage is the cash basis; the rate is still the general-regime rate on profit. The 1% to 2.5% rate on income belongs to RESICO for individuals. Common mistake: mixing up the two RESICOs.",
    },
    difficulty: 2,
    points: 15,
    competency: 'corporate-tax-regimes',
  },

  // ═════════════════════════ FIS-10 ═════════════════════════
  {
    id: 'FIS-10-E1',
    level: 5,
    module: 'FIS-10',
    kind: 'mcq',
    flavor: 'concept',
    prompt: {
      es: "¿Qué es el folio fiscal (UUID) de un CFDI y quién lo asigna?",
      en: "What is a CFDI's tax folio (UUID) and who assigns it?",
    },
    options: [
      { id: 'FIS-10-E1-a', text: { es: "Un número consecutivo que el emisor escoge libremente", en: "A sequential number the issuer chooses freely" } },
      { id: 'FIS-10-E1-b', text: { es: "Un código único que se asigna al timbrar la factura a través de un PAC o del servicio del SAT", en: "A unique code assigned when the invoice is stamped through a PAC or the SAT's service" } },
      { id: 'FIS-10-E1-c', text: { es: "El RFC del cliente escrito al revés", en: "The customer's RFC written backwards" } },
      { id: 'FIS-10-E1-d', text: { es: "La contraseña de la e.firma del emisor", en: "The issuer's e.firma password" } },
    ],
    correctOptionId: 'FIS-10-E1-b',
    explanation: {
      es: "El UUID es el identificador único de la factura y se genera al timbrarla, por un PAC o por el servicio del SAT. El folio interno que elige el emisor es distinto y opcional. Error común: confundir el folio interno o la e.firma con el folio fiscal.",
      en: "The UUID is the invoice's unique identifier, generated when it is stamped by a PAC or the SAT's service. The internal folio the issuer chooses is different and optional. Common mistake: confusing the internal folio or the e.firma with the tax folio.",
    },
    difficulty: 1,
    points: 10,
    competency: 'e-invoicing',
  },
  {
    id: 'FIS-10-E2',
    level: 5,
    module: 'FIS-10',
    kind: 'classify',
    flavor: 'concept',
    prompt: {
      es: "Clasifica cada operación según el tipo de CFDI que se debe emitir.",
      en: "Classify each transaction by the type of CFDI that must be issued.",
    },
    categories: [
      { id: 'FIS-10-E2-c1', label: { es: "Ingreso (I)", en: "Income (I)" } },
      { id: 'FIS-10-E2-c2', label: { es: "Egreso (E)", en: "Expense (E)" } },
      { id: 'FIS-10-E2-c3', label: { es: "Traslado (T)", en: "Transfer (T)" } },
      { id: 'FIS-10-E2-c4', label: { es: "Nómina (N)", en: "Payroll (N)" } },
      { id: 'FIS-10-E2-c5', label: { es: "Pago (P)", en: "Payment (P)" } },
    ],
    items: [
      { id: 'FIS-10-E2-i1', label: { es: "Venta de 20 sillas a un restaurante", en: "Sale of 20 chairs to a restaurant" }, correctCategoryId: 'FIS-10-E2-c1' },
      { id: 'FIS-10-E2-i2', label: { es: "Devolución parcial de mercancía por un cliente", en: "Partial return of goods by a customer" }, correctCategoryId: 'FIS-10-E2-c2' },
      { id: 'FIS-10-E2-i3', label: { es: "Envío de mercancía del almacén a una sucursal propia", en: "Shipment of goods from the warehouse to one's own branch" }, correctCategoryId: 'FIS-10-E2-c3' },
      { id: 'FIS-10-E2-i4', label: { es: "Pago de la quincena a un empleado", en: "Biweekly pay to an employee" }, correctCategoryId: 'FIS-10-E2-c4' },
      { id: 'FIS-10-E2-i5', label: { es: "Cobro de la segunda parcialidad de una factura emitida como PPD", en: "Collection of the second installment of an invoice issued as PPD" }, correctCategoryId: 'FIS-10-E2-c5' },
      { id: 'FIS-10-E2-i6', label: { es: "Descuento por pronto pago otorgado después de facturar", en: "Early-payment discount granted after invoicing" }, correctCategoryId: 'FIS-10-E2-c2' },
    ],
    explanation: {
      es: "Ventas: Ingreso. Devoluciones y descuentos posteriores: Egreso (nota de crédito). Mover mercancía propia sin venderla: Traslado. Sueldos: Nómina. Cobros de facturas PPD: Pago (complemento). Error común: cancelar la factura original para reflejar un descuento en vez de emitir un Egreso.",
      en: "Sales: Income. Later returns and discounts: Expense (credit note). Moving one's own goods without selling them: Transfer. Salaries: Payroll. Collections of PPD invoices: Payment (complement). Common mistake: cancelling the original invoice to reflect a discount instead of issuing an Expense CFDI.",
    },
    difficulty: 2,
    points: 15,
    competency: 'e-invoicing',
  },
  {
    id: 'FIS-10-E3',
    level: 5,
    module: 'FIS-10',
    kind: 'truefalse',
    flavor: 'concept',
    prompt: {
      es: "Si vendes a crédito y el cliente te pagará dentro de 60 días, la factura debe emitirse con método de pago PUE.",
      en: "If you sell on credit and the customer will pay you within 60 days, the invoice must be issued with the PUE payment method.",
    },
    answer: false,
    explanation: {
      es: "Falso. PUE se usa cuando el pago ocurre al facturar o dentro del mismo mes. Si se pagará después, va con PPD y, al cobrar, se emite el complemento de pago. Error común: usar PUE por costumbre y dejar al cliente acreditando un IVA que aún no ha pagado.",
      en: "False. PUE is used when payment happens upon invoicing or within the same month. If it will be paid later, it goes with PPD and, upon collection, the payment complement is issued. Common mistake: using PUE out of habit, leaving the customer crediting VAT not yet paid.",
    },
    difficulty: 1,
    points: 10,
    competency: 'e-invoicing',
  },
  {
    id: 'FIS-10-E4',
    level: 5,
    module: 'FIS-10',
    kind: 'fields',
    flavor: 'case',
    context: {
      es: "Una agencia de publicidad factura con PPD un servicio de $50,000 + IVA (16 %). El cliente hace un primer pago de $23,200.",
      en: "An advertising agency invoices a $50,000 + VAT (16%) service with PPD. The customer makes a first payment of $23,200.",
    },
    prompt: {
      es: "Completa los datos del complemento de pago, en pesos.",
      en: "Complete the payment complement data, in pesos.",
    },
    fields: [
      { id: 'f1', label: { es: "Total de la factura", en: "Invoice total" }, answer: 58000, unit: 'MXN', tolerance: { abs: 0.5 } },
      { id: 'f2', label: { es: "Saldo insoluto después del primer pago", en: "Outstanding balance after the first payment" }, answer: 34800, unit: 'MXN', tolerance: { abs: 0.5 } },
      { id: 'f3', label: { es: "IVA contenido en el primer pago", en: "VAT contained in the first payment" }, answer: 3200, unit: 'MXN', tolerance: { abs: 0.5 } },
    ],
    explanation: {
      es: "Total: 50,000 × 1.16 = $58,000. Saldo insoluto: 58,000 − 23,200 = $34,800. IVA del pago: 23,200 ÷ 1.16 = 20,000 de base; 20,000 × 16 % = $3,200. Error común: calcular el IVA como 23,200 × 16 % = $3,712, olvidando que el pago ya incluye IVA.",
      en: "Total: 50,000 × 1.16 = $58,000. Outstanding balance: 58,000 − 23,200 = $34,800. Payment VAT: 23,200 ÷ 1.16 = 20,000 base; 20,000 × 16% = $3,200. Common mistake: computing VAT as 23,200 × 16% = $3,712, forgetting the payment already includes VAT.",
    },
    difficulty: 2,
    points: 20,
    competency: 'e-invoicing',
  },
  {
    id: 'FIS-10-E5',
    level: 5,
    module: 'FIS-10',
    kind: 'multi',
    flavor: 'concept',
    prompt: {
      es: "En un CFDI 4.0, ¿qué datos del receptor deben coincidir con su registro en el SAT? Selecciona todas las que apliquen.",
      en: "In a CFDI 4.0, which recipient data must match their SAT registration? Select all that apply.",
    },
    options: [
      { id: 'FIS-10-E5-a', text: { es: "RFC", en: "RFC" } },
      { id: 'FIS-10-E5-b', text: { es: "Nombre o razón social", en: "Name or company name" } },
      { id: 'FIS-10-E5-c', text: { es: "Código postal del domicilio fiscal", en: "Tax address ZIP code" } },
      { id: 'FIS-10-E5-d', text: { es: "Régimen fiscal", en: "Tax regime" } },
      { id: 'FIS-10-E5-e', text: { es: "Número de teléfono celular", en: "Cell phone number" } },
      { id: 'FIS-10-E5-f', text: { es: "Firma autógrafa escaneada", en: "Scanned handwritten signature" } },
    ],
    correctOptionIds: ['FIS-10-E5-a', 'FIS-10-E5-b', 'FIS-10-E5-c', 'FIS-10-E5-d'],
    explanation: {
      es: "CFDI 4.0 valida contra el SAT el RFC, el nombre o razón social, el código postal del domicilio fiscal y el régimen fiscal del receptor; por eso se piden con la constancia de situación fiscal. El teléfono y la firma no forman parte del comprobante. Error común: escribir el nombre comercial en lugar del registrado.",
      en: "CFDI 4.0 validates the recipient's RFC, name or company name, tax address ZIP code and tax regime against SAT records; that is why they are requested with the tax status certificate. Phone and signature are not part of the voucher. Common mistake: writing the trade name instead of the registered one.",
    },
    difficulty: 1,
    points: 10,
    competency: 'e-invoicing',
  },
  {
    id: 'FIS-10-E6',
    level: 5,
    module: 'FIS-10',
    kind: 'mcq',
    flavor: 'case',
    context: {
      es: "Una panadería vende todos los días a decenas de personas que no piden factura.",
      en: "A bakery sells every day to dozens of people who do not ask for an invoice.",
    },
    prompt: {
      es: "¿Cómo debe documentar fiscalmente esas ventas?",
      en: "How should it document those sales for tax purposes?",
    },
    options: [
      { id: 'FIS-10-E6-a', text: { es: "No necesita documentarlas porque nadie pidió factura", en: "It does not need to document them because nobody asked for an invoice" } },
      { id: 'FIS-10-E6-b', text: { es: "Emitir una factura a nombre del dueño por todas las ventas", en: "Issue an invoice in the owner's name for all sales" } },
      { id: 'FIS-10-E6-c', text: { es: "Incluirlas en una factura global con el RFC genérico de público en general", en: "Include them in a global invoice with the generic general-public RFC" } },
      { id: 'FIS-10-E6-d', text: { es: "Emitir CFDI de Traslado por el pan vendido", en: "Issue Transfer CFDIs for the bread sold" } },
    ],
    correctOptionId: 'FIS-10-E6-c',
    explanation: {
      es: "Las ventas al público en general se documentan en una factura global con el RFC genérico (XAXX010101000), por el periodo que permitan las reglas. Facturarse a sí mismo es incorrecto y el Traslado no ampara ventas. Error común: creer que si nadie pide factura, la venta no se reporta.",
      en: "Sales to the general public are documented in a global invoice with the generic RFC (XAXX010101000), for the period the rules allow. Invoicing oneself is wrong and a Transfer CFDI does not cover sales. Common mistake: believing that if nobody asks for an invoice, the sale is not reported.",
    },
    difficulty: 1,
    points: 10,
    competency: 'e-invoicing',
  },

  // ═════════════════════════ FIS-11 ═════════════════════════
  {
    id: 'FIS-11-E1',
    level: 5,
    module: 'FIS-11',
    kind: 'mcq',
    flavor: 'concept',
    prompt: {
      es: "¿Para qué sirve el código agrupador del SAT en la contabilidad electrónica?",
      en: "What is the SAT grouping code for in electronic accounting?",
    },
    options: [
      { id: 'FIS-11-E1-a', text: { es: "Para asociar cada cuenta de tu catálogo a una lista estándar y que el SAT pueda comparar a todos los contribuyentes", en: "To map each account in your chart to a standard list so the SAT can compare all taxpayers" } },
      { id: 'FIS-11-E1-b', text: { es: "Para numerar las facturas de venta", en: "To number sales invoices" } },
      { id: 'FIS-11-E1-c', text: { es: "Para calcular la tasa de ISR de la empresa", en: "To compute the company's income tax rate" } },
      { id: 'FIS-11-E1-d', text: { es: "Para sustituir la balanza de comprobación", en: "To replace the trial balance" } },
    ],
    correctOptionId: 'FIS-11-E1-a',
    explanation: {
      es: "Cada contribuyente nombra sus cuentas como quiere; el código agrupador las conecta con una lista estándar del SAT para poder compararlas y analizarlas. No numera facturas ni sustituye la balanza. Error común: pensar que hay que renombrar las cuentas igual que el código agrupador.",
      en: "Each taxpayer names its accounts as it wishes; the grouping code connects them to a standard SAT list so they can be compared and analyzed. It does not number invoices or replace the trial balance. Common mistake: thinking you must rename accounts exactly like the grouping code.",
    },
    difficulty: 1,
    points: 10,
    competency: 'e-accounting',
  },
  {
    id: 'FIS-11-E2',
    level: 5,
    module: 'FIS-11',
    kind: 'classify',
    flavor: 'concept',
    prompt: {
      es: "Clasifica cada elemento de la contabilidad electrónica según cuándo se entrega al SAT.",
      en: "Classify each electronic accounting element by when it is delivered to the SAT.",
    },
    categories: [
      { id: 'FIS-11-E2-c1', label: { es: "Cada mes", en: "Every month" } },
      { id: 'FIS-11-E2-c2', label: { es: "Al inicio y cuando cambie", en: "At the start and when it changes" } },
      { id: 'FIS-11-E2-c3', label: { es: "Solo cuando el SAT lo solicita", en: "Only when the SAT requests it" } },
    ],
    items: [
      { id: 'FIS-11-E2-i1', label: { es: "Balanza de comprobación", en: "Trial balance" }, correctCategoryId: 'FIS-11-E2-c1' },
      { id: 'FIS-11-E2-i2', label: { es: "Catálogo de cuentas con código agrupador", en: "Chart of accounts with grouping code" }, correctCategoryId: 'FIS-11-E2-c2' },
      { id: 'FIS-11-E2-i3', label: { es: "Pólizas del periodo", en: "Journal entries for the period" }, correctCategoryId: 'FIS-11-E2-c3' },
      { id: 'FIS-11-E2-i4', label: { es: "Auxiliar de folios fiscales", en: "Tax folio ledger" }, correctCategoryId: 'FIS-11-E2-c3' },
      { id: 'FIS-11-E2-i5', label: { es: "Auxiliar de cuentas y subcuentas", en: "Account and subaccount ledger" }, correctCategoryId: 'FIS-11-E2-c3' },
    ],
    explanation: {
      es: "La balanza se envía mensualmente; el catálogo, al inicio y cuando se modifica; pólizas y auxiliares se entregan solo si el SAT los pide (por ejemplo, en una auditoría o una devolución). Error común: enviar todas las pólizas cada mes o creer que el catálogo se envía mensualmente.",
      en: "The trial balance is sent monthly; the chart, at the start and when modified; entries and ledgers are delivered only if the SAT asks (for example, in an audit or a refund). Common mistake: sending all entries every month or believing the chart is sent monthly.",
    },
    difficulty: 2,
    points: 15,
    competency: 'e-accounting',
  },
  {
    id: 'FIS-11-E3',
    level: 5,
    module: 'FIS-11',
    kind: 'truefalse',
    flavor: 'concept',
    prompt: {
      es: "En la contabilidad electrónica, cada póliza debe poder relacionarse con el UUID del CFDI que la respalda.",
      en: "In electronic accounting, each journal entry must be traceable to the UUID of the CFDI that supports it.",
    },
    answer: true,
    explanation: {
      es: "Verdadero. Registrar el UUID permite ir del asiento a la factura y viceversa; es lo que el SAT revisa al pedir pólizas o el auxiliar de folios. Error común: archivar los PDF de facturas sin ligarlos a las pólizas, lo que complica cualquier revisión.",
      en: "True. Recording the UUID lets you go from the entry to the invoice and vice versa; it is what the SAT checks when requesting entries or the folio ledger. Common mistake: filing invoice PDFs without linking them to entries, which complicates any review.",
    },
    difficulty: 1,
    points: 10,
    competency: 'e-accounting',
  },
  {
    id: 'FIS-11-E4',
    level: 5,
    module: 'FIS-11',
    kind: 'journal',
    flavor: 'case',
    context: {
      es: "Una comercializadora vende mercancía por $25,000 + IVA (16 %). El cliente paga por transferencia el mismo día y se emite el CFDI con PUE. (Registra solo la venta, no el costo.)",
      en: "A trading company sells goods for $25,000 + VAT (16%). The customer pays by transfer the same day and the CFDI is issued with PUE. (Record only the sale, not the cost.)",
    },
    prompt: {
      es: "Registra la póliza de la venta que se ligará al UUID del CFDI.",
      en: "Record the sales entry that will be linked to the CFDI UUID.",
    },
    accountChoices: ['1101', '1102', '1104', '1109', '2104', '4101', '4102'],
    expected: [
      { accountCode: '1102', side: 'D', amount: 29000 },
      { accountCode: '4101', side: 'C', amount: 25000 },
      { accountCode: '2104', side: 'C', amount: 4000 },
    ],
    explanation: {
      es: "Entra dinero al banco: cargo a Bancos $29,000 (25,000 × 1.16). Se reconoce la venta: abono a Ventas $25,000. El IVA cobrado se debe al SAT: abono a IVA trasladado $4,000. Cargos = abonos = $29,000. Error común: abonar el IVA a IVA acreditable (que es el de las compras) o usar Clientes cuando ya se cobró.",
      en: "Money enters the bank: debit Bank $29,000 (25,000 × 1.16). The sale is recognized: credit Sales $25,000. The VAT collected is owed to the SAT: credit Output VAT $4,000. Debits = credits = $29,000. Common mistake: crediting the VAT to Input VAT (which is for purchases) or using Receivables when it was already collected.",
    },
    difficulty: 2,
    points: 15,
    competency: 'e-accounting',
  },
  {
    id: 'FIS-11-E5',
    level: 5,
    module: 'FIS-11',
    kind: 'fields',
    flavor: 'case',
    context: {
      es: "Balanza de comprobación al cierre de mayo. Saldos deudores: Bancos $120,000; Clientes $45,000; Mobiliario y equipo $80,000; Sueldos y salarios $35,000. Saldos acreedores: Proveedores $60,000; IVA trasladado $20,000; Capital social $100,000; Ventas: dato faltante.",
      en: "Trial balance at the end of May. Debit balances: Bank $120,000; Receivables $45,000; Furniture and equipment $80,000; Salaries and wages $35,000. Credit balances: Payables $60,000; Output VAT $20,000; Share capital $100,000; Sales: missing figure.",
    },
    prompt: {
      es: "Calcula lo necesario para que la balanza cuadre antes de enviarla, en pesos.",
      en: "Compute what is needed for the trial balance to balance before sending it, in pesos.",
    },
    fields: [
      { id: 'f1', label: { es: "Total de saldos deudores", en: "Total debit balances" }, answer: 280000, unit: 'MXN', tolerance: { abs: 0.5 } },
      { id: 'f2', label: { es: "Saldo de Ventas", en: "Sales balance" }, answer: 100000, unit: 'MXN', tolerance: { abs: 0.5 } },
    ],
    explanation: {
      es: "Deudores: 120,000 + 45,000 + 80,000 + 35,000 = $280,000. Los acreedores deben sumar lo mismo: 60,000 + 20,000 + 100,000 + Ventas = 280,000, así que Ventas = $100,000. Error común: poner Sueldos (un gasto) entre los acreedores; los gastos tienen saldo deudor.",
      en: "Debits: 120,000 + 45,000 + 80,000 + 35,000 = $280,000. Credits must total the same: 60,000 + 20,000 + 100,000 + Sales = 280,000, so Sales = $100,000. Common mistake: placing Salaries (an expense) among the credits; expenses have debit balances.",
    },
    difficulty: 2,
    points: 15,
    competency: 'e-accounting',
  },
  {
    id: 'FIS-11-E6',
    level: 5,
    module: 'FIS-11',
    kind: 'multi',
    flavor: 'concept',
    prompt: {
      es: "¿Qué forma parte de la contabilidad electrónica que pide el SAT? Selecciona todas las que apliquen.",
      en: "What is part of the electronic accounting the SAT requires? Select all that apply.",
    },
    options: [
      { id: 'FIS-11-E6-a', text: { es: "Catálogo de cuentas", en: "Chart of accounts" } },
      { id: 'FIS-11-E6-b', text: { es: "Balanza de comprobación", en: "Trial balance" } },
      { id: 'FIS-11-E6-c', text: { es: "Pólizas y auxiliares", en: "Journal entries and ledgers" } },
      { id: 'FIS-11-E6-d', text: { es: "La lista de precios de los productos", en: "The product price list" } },
      { id: 'FIS-11-E6-e', text: { es: "Los estados de cuenta personales de las tarjetas del dueño", en: "The owner's personal card statements" } },
    ],
    correctOptionIds: ['FIS-11-E6-a', 'FIS-11-E6-b', 'FIS-11-E6-c'],
    explanation: {
      es: "La contabilidad electrónica se compone del catálogo de cuentas (con código agrupador), la balanza de comprobación y, cuando se soliciten, las pólizas y auxiliares. La lista de precios es información comercial y las finanzas personales del dueño no son contabilidad del negocio. Error común: mezclar gastos personales con los del negocio.",
      en: "Electronic accounting consists of the chart of accounts (with grouping code), the trial balance and, when requested, entries and ledgers. The price list is commercial information and the owner's personal finances are not the business's accounting. Common mistake: mixing personal and business expenses.",
    },
    difficulty: 1,
    points: 10,
    competency: 'e-accounting',
  },

  // ═════════════════════════ FIS-12 ═════════════════════════
  {
    id: 'FIS-12-E1',
    level: 5,
    module: 'FIS-12',
    kind: 'fields',
    flavor: 'case',
    context: {
      es: "Un supervisor gana $18,000 mensuales, todos gravados. Renglón hipotético de la tarifa mensual: límite inferior $15,000, cuota fija $1,500 y 20 % sobre el excedente. Ignora el subsidio para el empleo.",
      en: "A supervisor earns $18,000 a month, all taxable. Hypothetical monthly tariff row: lower limit $15,000, fixed fee $1,500 and 20% on the excess. Ignore the employment subsidy.",
    },
    prompt: {
      es: "Calcula la retención de ISR del supervisor, en pesos.",
      en: "Compute the supervisor's income tax withholding, in pesos.",
    },
    fields: [
      { id: 'f1', label: { es: "Excedente sobre el límite inferior", en: "Excess over the lower limit" }, answer: 3000, unit: 'MXN', tolerance: { abs: 0.5 } },
      { id: 'f2', label: { es: "Impuesto marginal", en: "Marginal tax" }, answer: 600, unit: 'MXN', tolerance: { abs: 0.5 } },
      { id: 'f3', label: { es: "ISR a retener", en: "Income tax to withhold" }, answer: 2100, unit: 'MXN', tolerance: { abs: 0.5 } },
    ],
    explanation: {
      es: "Excedente: 18,000 − 15,000 = $3,000. Marginal: 3,000 × 20 % = $600. ISR: 600 + 1,500 = $2,100. Error común: aplicar el 20 % a todo el sueldo (18,000 × 20 % = $3,600); el porcentaje solo se aplica al excedente.",
      en: "Excess: 18,000 − 15,000 = $3,000. Marginal: 3,000 × 20% = $600. Income tax: 600 + 1,500 = $2,100. Common mistake: applying 20% to the whole salary (18,000 × 20% = $3,600); the percentage only applies to the excess.",
    },
    difficulty: 2,
    points: 15,
    competency: 'payroll-withholding',
  },
  {
    id: 'FIS-12-E2',
    level: 5,
    module: 'FIS-12',
    kind: 'journal',
    flavor: 'case',
    context: {
      es: "Una empresa paga la nómina del mes: sueldos brutos $80,000, ISR retenido a los trabajadores $9,500. El neto se paga por transferencia. (Ignora cuotas de seguridad social.)",
      en: "A company pays the month's payroll: gross salaries $80,000, income tax withheld from workers $9,500. The net is paid by transfer. (Ignore social security contributions.)",
    },
    prompt: {
      es: "Registra la póliza del pago de nómina.",
      en: "Record the payroll payment entry.",
    },
    accountChoices: ['1101', '1102', '2105', '2106', '6101', '8101'],
    expected: [
      { accountCode: '6101', side: 'D', amount: 80000 },
      { accountCode: '2105', side: 'C', amount: 9500 },
      { accountCode: '1102', side: 'C', amount: 70500 },
    ],
    explanation: {
      es: "El gasto es el sueldo bruto: cargo a Sueldos y salarios $80,000. El ISR retenido se debe al SAT: abono a Impuestos por pagar $9,500. Sale del banco el neto: 80,000 − 9,500 = $70,500. Error común: cargar el ISR retenido a ISR del ejercicio, que es el impuesto propio de la empresa, no el del trabajador.",
      en: "The expense is the gross salary: debit Salaries and wages $80,000. The withheld income tax is owed to the SAT: credit Taxes payable $9,500. The net leaves the bank: 80,000 − 9,500 = $70,500. Common mistake: debiting the withheld tax to Income tax expense, which is the company's own tax, not the worker's.",
    },
    difficulty: 2,
    points: 15,
    competency: 'payroll-withholding',
  },
  {
    id: 'FIS-12-E3',
    level: 5,
    module: 'FIS-12',
    kind: 'mcq',
    flavor: 'concept',
    prompt: {
      es: "En general, ¿cuándo debe el retenedor enterar al SAT el ISR que retuvo a sus trabajadores en un mes?",
      en: "In general, when must the withholding agent remit to the SAT the income tax withheld from its workers in a month?",
    },
    options: [
      { id: 'FIS-12-E3-a', text: { es: "Al final del año, en una sola exhibición", en: "At year end, in a single payment" } },
      { id: 'FIS-12-E3-b', text: { es: "A más tardar el día 17 del mes siguiente", en: "By the 17th of the following month" } },
      { id: 'FIS-12-E3-c', text: { es: "Cuando el trabajador lo pida", en: "When the worker asks for it" } },
      { id: 'FIS-12-E3-d', text: { es: "Solo si la empresa tuvo utilidad", en: "Only if the company made a profit" } },
    ],
    correctOptionId: 'FIS-12-E3-b',
    explanation: {
      es: "Las retenciones se enteran mensualmente, a más tardar el día 17 del mes siguiente. No dependen de que la empresa gane: el dinero es del trabajador. Error común: retener y \"guardar\" el dinero hasta fin de año, lo que genera recargos y responsabilidad para el patrón.",
      en: "Withholdings are remitted monthly, by the 17th of the following month. They do not depend on the company's profit: the money belongs to the worker. Common mistake: withholding and \"keeping\" the money until year end, which creates surcharges and liability for the employer.",
    },
    difficulty: 1,
    points: 10,
    competency: 'payroll-withholding',
  },
  {
    id: 'FIS-12-E4',
    level: 5,
    module: 'FIS-12',
    kind: 'truefalse',
    flavor: 'concept',
    prompt: {
      es: "El ISR que el patrón retiene a sus trabajadores es un gasto adicional que sale del bolsillo de la empresa.",
      en: "The income tax the employer withholds from its workers is an additional expense paid out of the company's pocket.",
    },
    answer: false,
    explanation: {
      es: "Falso. El ISR retenido se descuenta del sueldo del trabajador; la empresa solo lo cobra y lo entera. El gasto de la empresa es el sueldo bruto, que ya incluye ese ISR. Error común: registrar la retención como un gasto extra y duplicar el costo de la nómina.",
      en: "False. Withheld income tax is deducted from the worker's salary; the company only collects and remits it. The company's expense is the gross salary, which already includes that tax. Common mistake: recording the withholding as an extra expense and double-counting payroll cost.",
    },
    difficulty: 1,
    points: 10,
    competency: 'payroll-withholding',
  },
  {
    id: 'FIS-12-E5',
    level: 5,
    module: 'FIS-12',
    kind: 'fields',
    flavor: 'case',
    context: {
      es: "Constructora Sierra, S.A. de C.V. paga $15,000 de honorarios + IVA (16 %) a un ingeniero persona física del régimen general de actividades profesionales. Aplica 10 % de retención de ISR y 2/3 de retención de IVA.",
      en: "Constructora Sierra, S.A. de C.V. pays $15,000 in fees + VAT (16%) to an engineer who is an individual under the general professional activities regime. Apply 10% income tax withholding and 2/3 VAT withholding.",
    },
    prompt: {
      es: "Calcula las retenciones y lo que se transfiere al ingeniero, en pesos.",
      en: "Compute the withholdings and what is transferred to the engineer, in pesos.",
    },
    fields: [
      { id: 'f1', label: { es: "ISR retenido", en: "Income tax withheld" }, answer: 1500, unit: 'MXN', tolerance: { abs: 0.5 } },
      { id: 'f2', label: { es: "IVA retenido", en: "VAT withheld" }, answer: 1600, unit: 'MXN', tolerance: { abs: 0.5 } },
      { id: 'f3', label: { es: "Neto a transferir", en: "Net to transfer" }, answer: 14300, unit: 'MXN', tolerance: { abs: 0.5 } },
    ],
    explanation: {
      es: "IVA: 15,000 × 16 % = $2,400. ISR retenido: 15,000 × 10 % = $1,500. IVA retenido: 2,400 × 2/3 = $1,600. Neto: 15,000 + 2,400 − 1,500 − 1,600 = $14,300. Error común: calcular el 10 % de ISR sobre el total con IVA ($17,400).",
      en: "VAT: 15,000 × 16% = $2,400. Income tax withheld: 15,000 × 10% = $1,500. VAT withheld: 2,400 × 2/3 = $1,600. Net: 15,000 + 2,400 − 1,500 − 1,600 = $14,300. Common mistake: computing the 10% income tax on the VAT-inclusive total ($17,400).",
    },
    difficulty: 2,
    points: 20,
    competency: 'payroll-withholding',
  },
  {
    id: 'FIS-12-E6',
    level: 5,
    module: 'FIS-12',
    kind: 'classify',
    flavor: 'concept',
    prompt: {
      es: "Clasifica cada concepto de nómina: ¿se retiene al trabajador o lo paga el patrón con su propio dinero?",
      en: "Classify each payroll item: is it withheld from the worker or paid by the employer with its own money?",
    },
    categories: [
      { id: 'FIS-12-E6-c1', label: { es: "Se retiene al trabajador", en: "Withheld from the worker" } },
      { id: 'FIS-12-E6-c2', label: { es: "Lo paga el patrón", en: "Paid by the employer" } },
    ],
    items: [
      { id: 'FIS-12-E6-i1', label: { es: "ISR por salarios", en: "Income tax on salaries" }, correctCategoryId: 'FIS-12-E6-c1' },
      { id: 'FIS-12-E6-i2', label: { es: "Cuota obrera del IMSS", en: "Employee IMSS contribution" }, correctCategoryId: 'FIS-12-E6-c1' },
      { id: 'FIS-12-E6-i3', label: { es: "Cuota patronal del IMSS", en: "Employer IMSS contribution" }, correctCategoryId: 'FIS-12-E6-c2' },
      { id: 'FIS-12-E6-i4', label: { es: "Impuesto sobre Nóminas estatal", en: "State Payroll Tax" }, correctCategoryId: 'FIS-12-E6-c2' },
      { id: 'FIS-12-E6-i5', label: { es: "Aportación patronal al INFONAVIT", en: "Employer INFONAVIT contribution" }, correctCategoryId: 'FIS-12-E6-c2' },
      { id: 'FIS-12-E6-i6', label: { es: "Descuento del crédito de vivienda INFONAVIT del trabajador", en: "Deduction for the worker's INFONAVIT housing loan" }, correctCategoryId: 'FIS-12-E6-c1' },
    ],
    explanation: {
      es: "Se descuentan del sueldo: ISR, cuota obrera del IMSS y el abono al crédito INFONAVIT del trabajador. Son costo del patrón: cuota patronal del IMSS, aportación al INFONAVIT e Impuesto sobre Nóminas. Error común: pensar que la aportación al INFONAVIT se descuenta al trabajador; la aportación la paga el patrón, solo el pago del crédito se descuenta.",
      en: "Deducted from salary: income tax, employee IMSS contribution and the payment on the worker's INFONAVIT loan. Employer costs: employer IMSS contribution, INFONAVIT contribution and Payroll Tax. Common mistake: thinking the INFONAVIT contribution is deducted from the worker; the employer pays the contribution, only the loan payment is deducted.",
    },
    difficulty: 2,
    points: 15,
    competency: 'payroll-withholding',
  },
]
