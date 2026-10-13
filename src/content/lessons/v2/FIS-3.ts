import type { Exercise, Lesson } from '../../../types'

/**
 * FINCORE — Temario v2.0, área Fiscalidad y Tributación (México), parte 3:
 * FIS.13 a FIS.17 (nivel 5, etapa Avanzado).
 */

const NOTE_SS = {
  es: "Contenido educativo basado en la Ley del Seguro Social, la Ley del INFONAVIT y la Ley Federal del Trabajo. Porcentajes, topes en UMA, días mínimos de prestaciones, plazos y sistemas del IMSS cambian con reformas y reglas administrativas: verifica la versión vigente (2026) antes de aplicarlos. Las cifras de los ejemplos son hipotéticas.",
  en: "Educational content based on Mexico's Social Security Law, INFONAVIT Law and Federal Labor Law. Percentages, UMA-based caps, minimum benefit days, deadlines and IMSS systems change with reforms and administrative rules: verify the current version (2026) before applying them. Figures in the examples are hypothetical.",
}

const NOTE_COMPLIANCE = {
  es: "Contenido educativo basado en el Código Fiscal de la Federación (CFF), las leyes del ISR e IVA y las reglas del SAT. Fechas límite, tasas de recargos (que fija cada año la Ley de Ingresos de la Federación), multas y trámites cambian: verifica la versión vigente (2026). Los factores y tasas de los ejemplos son hipotéticos.",
  en: "Educational content based on Mexico's Federal Tax Code (CFF), the Income Tax and VAT laws and SAT rules. Deadlines, surcharge rates (set each year by the Federal Revenue Law), fines and procedures change: verify the current version (2026). Factors and rates in the examples are hypothetical.",
}

const NOTE_PLANNING = {
  es: "Contenido educativo, no asesoría fiscal. La regla de razón de negocios del CFF, los esquemas reportables y las listas del SAT de operaciones presuntamente inexistentes existen en la ley mexicana, pero su redacción y criterios cambian: verifica la versión vigente (2026) y consulta a un profesional. Las tasas de los ejemplos son hipotéticas.",
  en: "Educational content, not tax advice. The CFF's business-purpose rule, reportable schemes and SAT lists of presumably non-existent transactions exist in Mexican law, but their wording and criteria change: verify the current version (2026) and consult a professional. Rates in the examples are hypothetical.",
}

const NOTE_INTL = {
  es: "Contenido educativo basado en la Ley del ISR, el CFF, el Modelo de Convenio de la OCDE y los tratados para evitar la doble imposición firmados por México. Cada tratado tiene sus propias tasas y requisitos, y la red de tratados cambia: verifica el texto vigente (2026). Las tasas de los ejemplos son hipotéticas.",
  en: "Educational content based on Mexico's Income Tax Law, the CFF, the OECD Model Tax Convention and the double tax treaties signed by Mexico. Each treaty has its own rates and requirements, and the treaty network changes: verify the current text (2026). Rates in the examples are hypothetical.",
}

const NOTE_AUDIT = {
  es: "Contenido educativo basado en el Código Fiscal de la Federación, la Ley Federal de los Derechos del Contribuyente y las leyes que rigen a la PRODECON y al Tribunal Federal de Justicia Administrativa. Los plazos de revisión, caducidad y medios de defensa tienen excepciones y cambian con reformas: verifica la versión vigente (2026) y busca asesoría profesional ante una revisión real. Las cifras de los ejemplos son hipotéticas.",
  en: "Educational content based on Mexico's Federal Tax Code, the Federal Taxpayer Rights Law and the laws governing PRODECON and the Federal Administrative Justice Court. Review periods, statute of limitations and remedies have exceptions and change with reforms: verify the current version (2026) and seek professional advice in a real audit. Figures in the examples are hypothetical.",
}

export const lessons: Lesson[] = [
  // ───────────────────────────── FIS-13 ─────────────────────────────
  {
    id: 'FIS-13',
    level: 5,
    topicIds: ['FIS.13'],
    title: { es: "Seguridad social: IMSS e INFONAVIT", en: "Social security: IMSS and INFONAVIT" },
    summary: {
      es: "Quien contrata trabajadores en México debe inscribirlos al IMSS, calcular su salario base de cotización y pagar cada mes y cada bimestre las cuotas del IMSS y las aportaciones al INFONAVIT.",
      en: "Anyone who hires workers in Mexico must register them with IMSS, compute their contribution base salary and pay IMSS contributions and INFONAVIT payments every month and every two months.",
    },
    minutes: 17,
    objectives: [
      { es: "Describir los cinco seguros del régimen obligatorio del IMSS y qué protege cada uno.", en: "Describe the five insurance branches of IMSS's mandatory regime and what each protects." },
      { es: "Calcular el salario base de cotización (SBC) de un trabajador con prestaciones mínimas de ley.", en: "Compute a worker's contribution base salary (SBC) with the legal minimum benefits." },
      { es: "Explicar cómo se determinan y pagan las cuotas obrero-patronales y la aportación al INFONAVIT.", en: "Explain how employer-employee contributions and the INFONAVIT payment are determined and paid." },
      { es: "Identificar las obligaciones del patrón: registro, avisos de alta, baja y cambio de salario.", en: "Identify the employer's duties: registration and notices of hiring, termination and salary change." },
    ],
    theory: [
      {
        heading: { es: "Qué es la seguridad social y qué cubre el IMSS", en: "What social security is and what IMSS covers" },
        body: [
          {
            es: "La **seguridad social** es una red de protección que pagan entre todos: el trabajador, el patrón y el gobierno. Sirve para que, si te enfermas, te accidentas o llegas a la vejez, no te quedes sin ingreso ni atención. En México, para quienes trabajan con un patrón privado, la administra el **IMSS** (Instituto Mexicano del Seguro Social).",
            en: "**Social security** is a safety net paid for by everyone together: the worker, the employer and the government. It ensures that if you get sick, have an accident or reach old age, you are not left without income or care. In Mexico, for people working for a private employer, it is run by **IMSS** (Mexican Social Security Institute).",
          },
          {
            es: "El **régimen obligatorio** del IMSS se divide en **cinco seguros**. Cada uno tiene su propia cuota y su propio fin. Ojo: las cuotas del IMSS no son un impuesto como el ISR o el IVA, pero la ley las trata como **contribuciones** (aportaciones de seguridad social), así que si no se pagan generan actualización, recargos y pueden cobrarse a la fuerza.",
            en: "IMSS's **mandatory regime** is split into **five insurance branches**. Each has its own contribution and purpose. Note: IMSS contributions are not a tax like income tax or VAT, but the law treats them as **contributions** (social security contributions), so unpaid amounts are inflation-adjusted, accrue surcharges and can be collected by force.",
          },
          {
            es: "Además del IMSS existe el **INFONAVIT** (Instituto del Fondo Nacional de la Vivienda para los Trabajadores). El patrón aporta a una **subcuenta de vivienda** a nombre de cada trabajador; ese ahorro sirve para pedir un crédito de casa o, si no se usa, se entrega al retirarse.",
            en: "Besides IMSS there is **INFONAVIT** (National Workers' Housing Fund Institute). The employer contributes to a **housing sub-account** in each worker's name; those savings can back a home loan or, if unused, are paid out at retirement.",
          },
          {
            es: "Mini ejemplo: Lupita se tuerce el tobillo bajando las escaleras del almacén donde trabaja. Es un **riesgo de trabajo**: el IMSS la atiende y le paga un subsidio mientras está incapacitada, y el patrón no paga de su bolsa la atención médica.",
            en: "Mini example: Lupita twists her ankle going down the stairs of the warehouse where she works. It is an **occupational risk**: IMSS treats her and pays her a benefit while she is unable to work, and the employer does not pay the medical care out of pocket.",
          },
        ],
        bullets: [
          { es: "Riesgos de trabajo: accidentes y enfermedades por el trabajo; la paga solo el patrón.", en: "Occupational risks: work-related accidents and illnesses; paid only by the employer." },
          { es: "Enfermedades y maternidad: consultas, hospital, medicinas e incapacidades.", en: "Sickness and maternity: doctor visits, hospital, medicine and sick leave." },
          { es: "Invalidez y vida: pensión si quedas imposibilitado o para tus beneficiarios si falleces.", en: "Disability and life: a pension if you become unable to work, or for your beneficiaries if you die." },
          { es: "Retiro, cesantía en edad avanzada y vejez (RCV): tu ahorro para el retiro en la Afore.", en: "Retirement, old-age unemployment and old age (RCV): your retirement savings in the Afore." },
          { es: "Guarderías y prestaciones sociales: cuidado de hijos y actividades culturales y deportivas.", en: "Daycare and social benefits: childcare and cultural and sports activities." },
        ],
      },
      {
        heading: { es: "El salario base de cotización (SBC)", en: "The contribution base salary (SBC)" },
        body: [
          {
            es: "Las cuotas no se calculan sobre el sueldo \"a secas\", sino sobre el **salario base de cotización (SBC)**: el salario diario más las prestaciones que recibe el trabajador, convertidas a una cantidad por día. A esto se le llama **integrar** el salario. Por eso también se le dice **salario diario integrado**.",
            en: "Contributions are not computed on the \"plain\" salary but on the **contribution base salary (SBC)**: the daily wage plus the benefits the worker receives, converted to a per-day amount. This is called **integrating** the salary, which is why it is also known as the **integrated daily wage**.",
          },
          {
            es: "Con las prestaciones **mínimas** de la Ley Federal del Trabajo, las dos que más pesan son el **aguinaldo** (al menos 15 días de salario al año) y la **prima vacacional** (al menos 25% del pago de los días de vacaciones; tras la reforma de 2023 el primer año da derecho a 12 días). Se suman al año y se reparten entre 365 días; el resultado es el **factor de integración**.",
            en: "With the **minimum** benefits under the Federal Labor Law, the two that matter most are the **year-end bonus** (aguinaldo, at least 15 days of wages per year) and the **vacation premium** (at least 25% of the pay for vacation days; since the 2023 reform the first year gives 12 days). They are added up for the year and spread over 365 days; the result is the **integration factor**.",
          },
          {
            es: "Algunas percepciones **no** integran o integran solo en parte (por ejemplo, ciertos instrumentos de trabajo o despensas dentro de límites), y el SBC tiene un **tope** expresado en UMA. Si el salario cambia, el patrón debe avisar la **modificación salarial** al IMSS. Un SBC mal integrado es de las diferencias más comunes en una revisión.",
            en: "Some payments do **not** integrate or integrate only partly (for example, certain work tools or grocery vouchers within limits), and the SBC has a **cap** expressed in UMA. If the salary changes, the employer must report the **salary change** to IMSS. A badly integrated SBC is one of the most common findings in a review.",
          },
          {
            es: "Mini ejemplo: con salario diario de $500 y prestaciones mínimas del primer año, el factor es (365 + 15 + 12 × 0.25) ÷ 365 = 383 ÷ 365 ≈ 1.0493. El SBC queda en 500 × 1.0493 ≈ $524.66 diarios.",
            en: "Mini example: with a $500 daily wage and first-year minimum benefits, the factor is (365 + 15 + 12 × 0.25) ÷ 365 = 383 ÷ 365 ≈ 1.0493. The SBC is 500 × 1.0493 ≈ $524.66 per day.",
          },
        ],
        formula: "Factor de integración = (365 + días de aguinaldo + días de vacaciones × % prima vacacional) ÷ 365;  SBC = salario diario × factor",
      },
      {
        heading: { es: "Cuotas, aportaciones y obligaciones del patrón", en: "Contributions, payments and employer duties" },
        body: [
          {
            es: "Las **cuotas obrero-patronales** se llaman así porque una parte la paga el **patrón** y otra el **trabajador** (la \"obrera\"). El patrón **retiene** la parte del trabajador de su nómina y entera el total al IMSS. Cada seguro se calcula como un porcentaje del SBC por los días cotizados; los porcentajes los fija la ley y algunos cambian con el tiempo.",
            en: "**Employer-employee contributions** are so called because part is paid by the **employer** and part by the **worker**. The employer **withholds** the worker's share from payroll and remits the total to IMSS. Each branch is a percentage of the SBC times the days contributed; percentages are set by law and some change over time.",
          },
          {
            es: "Las cuotas de los seguros del IMSS se pagan **cada mes**; las de **retiro, cesantía y vejez** y la aportación al **INFONAVIT** se pagan **cada bimestre**. La aportación patronal al INFONAVIT es del **5% del SBC** y la paga solo el patrón. Si el trabajador tiene un **crédito INFONAVIT**, el patrón además le descuenta el abono y lo entera junto con la aportación.",
            en: "IMSS insurance contributions are paid **monthly**; **retirement, old-age unemployment and old age** contributions and the **INFONAVIT** payment are paid **every two months**. The employer's INFONAVIT contribution is **5% of the SBC** and only the employer pays it. If the worker has an **INFONAVIT loan**, the employer also deducts the installment and remits it with the contribution.",
          },
          {
            es: "Para cumplir, el patrón se **registra** ante el IMSS, presenta **avisos** de alta, baja y modificación de salario (en línea, en el sistema IDSE) dentro de los plazos legales, y calcula sus pagos con el **SUA** (Sistema Único de Autodeterminación) o con la propuesta que emite el IMSS. Además, cada año revisa su **prima de riesgo de trabajo**, que sube o baja según los accidentes que haya tenido.",
            en: "To comply, the employer **registers** with IMSS, files **notices** of hiring, termination and salary change (online, through the IDSE system) within the legal deadlines, and computes payments with **SUA** (Single Self-Assessment System) or the proposal IMSS issues. Each year it also reviews its **occupational risk premium**, which goes up or down depending on its accident record.",
          },
          {
            es: "Mini ejemplo: una panadería con SBC de $600 diarios para un empleado y un bimestre de 61 días aporta al INFONAVIT 600 × 61 × 5% = $1,830 por ese trabajador.",
            en: "Mini example: a bakery with a $600 daily SBC for an employee and a 61-day two-month period contributes 600 × 61 × 5% = $1,830 to INFONAVIT for that worker.",
          },
        ],
        bullets: [
          { es: "Alta antes de que el trabajador empiece a laborar o dentro del plazo legal.", en: "Register the worker before they start or within the legal deadline." },
          { es: "Retener la cuota obrera y no cobrarla después si se olvidó retenerla.", en: "Withhold the worker's share and do not charge it later if you forgot." },
          { es: "Pagar mensual (IMSS) y bimestral (RCV e INFONAVIT).", en: "Pay monthly (IMSS) and bimonthly (RCV and INFONAVIT)." },
          { es: "Avisar cada cambio de salario para que el SBC sea correcto.", en: "Report every salary change so the SBC is correct." },
          { es: "Conservar nóminas y recibos: son la prueba en una revisión.", en: "Keep payroll records and pay slips: they are the evidence in a review." },
        ],
      },
    ],
    examples: [
      {
        title: { es: "Integrar el SBC de un nuevo empleado", en: "Integrating a new employee's SBC" },
        problem: {
          es: "Un taller contrata a Raúl con salario diario hipotético de $350 y prestaciones mínimas de primer año: 15 días de aguinaldo, 12 días de vacaciones y 25% de prima vacacional. ¿Cuál es su SBC?",
          en: "A workshop hires Raúl at a hypothetical $350 daily wage with first-year minimum benefits: 15 days of aguinaldo, 12 vacation days and a 25% vacation premium. What is his SBC?",
        },
        steps: [
          { es: "Días de prima vacacional: 12 × 0.25 = 3 días.", en: "Vacation premium days: 12 × 0.25 = 3 days." },
          { es: "Días pagados al año: 365 + 15 + 3 = 383.", en: "Days paid per year: 365 + 15 + 3 = 383." },
          { es: "Factor de integración: 383 ÷ 365 ≈ 1.0493.", en: "Integration factor: 383 ÷ 365 ≈ 1.0493." },
          { es: "SBC: 350 × 383 ÷ 365 ≈ $367.26 diarios.", en: "SBC: 350 × 383 ÷ 365 ≈ $367.26 per day." },
        ],
        result: {
          es: "El SBC de Raúl es de unos $367.26 diarios; sobre esa cifra, y no sobre $350, se calculan sus cuotas IMSS y la aportación al INFONAVIT.",
          en: "Raúl's SBC is about $367.26 per day; his IMSS contributions and INFONAVIT payment are computed on that figure, not on $350.",
        },
      },
      {
        title: { es: "Aportación bimestral al INFONAVIT con crédito", en: "Bimonthly INFONAVIT payment with a loan" },
        problem: {
          es: "Sofía tiene SBC de $800 diarios. El bimestre tiene 62 días. Además, tiene un crédito INFONAVIT con un descuento hipotético de $2,400 por bimestre. ¿Cuánto entera el patrón al INFONAVIT y cuánto sale del bolsillo de cada quien?",
          en: "Sofía has an $800 daily SBC. The two-month period has 62 days. She also has an INFONAVIT loan with a hypothetical $2,400 deduction per period. How much does the employer remit to INFONAVIT and how much comes out of each party's pocket?",
        },
        steps: [
          { es: "Salario del bimestre para la aportación: 800 × 62 = $49,600.", en: "Two-month wage base: 800 × 62 = $49,600." },
          { es: "Aportación patronal (5%): 49,600 × 0.05 = $2,480. La paga el patrón.", en: "Employer contribution (5%): 49,600 × 0.05 = $2,480. The employer pays it." },
          { es: "Descuento del crédito: $2,400, retenido del sueldo de Sofía.", en: "Loan deduction: $2,400, withheld from Sofía's pay." },
          { es: "Total enterado: 2,480 + 2,400 = $4,880.", en: "Total remitted: 2,480 + 2,400 = $4,880." },
        ],
        result: {
          es: "El patrón entera $4,880: $2,480 son costo suyo y $2,400 son dinero de Sofía que solo retiene y entrega. Si no lo entera, responde él por lo retenido.",
          en: "The employer remits $4,880: $2,480 is its own cost and $2,400 is Sofía's money it only withholds and passes on. If it does not remit it, the employer is liable for what it withheld.",
        },
      },
    ],
    keyPoints: [
      { es: "El IMSS tiene cinco seguros obligatorios; riesgos de trabajo los paga solo el patrón.", en: "IMSS has five mandatory branches; occupational risks are paid only by the employer." },
      { es: "Las cuotas se calculan sobre el SBC: salario diario integrado con aguinaldo, prima vacacional y otras prestaciones.", en: "Contributions are computed on the SBC: the daily wage integrated with aguinaldo, vacation premium and other benefits." },
      { es: "La cuota obrera se retiene de la nómina; el patrón la entera junto con la suya.", en: "The worker's share is withheld from payroll; the employer remits it with its own share." },
      { es: "IMSS se paga mensual; RCV e INFONAVIT, bimestral. La aportación patronal al INFONAVIT es del 5% del SBC.", en: "IMSS is paid monthly; RCV and INFONAVIT every two months. The employer's INFONAVIT contribution is 5% of the SBC." },
      { es: "Altas, bajas y cambios de salario deben avisarse a tiempo para evitar diferencias y multas.", en: "Hirings, terminations and salary changes must be reported on time to avoid differences and fines." },
    ],
    normativeNote: NOTE_SS,
    exerciseIds: ['FIS-13-E1', 'FIS-13-E2', 'FIS-13-E3', 'FIS-13-E4', 'FIS-13-E5', 'FIS-13-E6'],
  },

  // ───────────────────────────── FIS-14 ─────────────────────────────
  {
    id: 'FIS-14',
    level: 5,
    topicIds: ['FIS.14'],
    title: { es: "Obligaciones y cumplimiento tributario", en: "Tax obligations and compliance" },
    summary: {
      es: "Cumplir con el fisco es más que pagar: implica cumplir a tiempo obligaciones formales y de pago, y cuando algo se paga tarde hay que sumar actualización y recargos.",
      en: "Complying with the tax authority is more than paying: it means meeting formal and payment obligations on time, and when something is paid late, inflation adjustment and surcharges must be added.",
    },
    minutes: 16,
    objectives: [
      { es: "Distinguir las obligaciones sustantivas (pagar) de las formales (registrarse, declarar, avisar, conservar).", en: "Distinguish substantive obligations (paying) from formal ones (registering, filing, notifying, keeping records)." },
      { es: "Organizar un calendario de cumplimiento con pagos provisionales, declaraciones anuales e informativas.", en: "Organize a compliance calendar with provisional payments, annual and informative returns." },
      { es: "Calcular la actualización y los recargos de una contribución pagada fuera de plazo.", en: "Compute the inflation adjustment and surcharges of a contribution paid late." },
      { es: "Explicar qué es la opinión de cumplimiento y por qué conviene corregir de forma espontánea.", en: "Explain what the compliance opinion is and why it pays to correct voluntarily." },
    ],
    theory: [
      {
        heading: { es: "Obligaciones sustantivas y formales", en: "Substantive and formal obligations" },
        body: [
          {
            es: "Toda relación con el fisco tiene dos tipos de deberes. La **obligación sustantiva** es la de **pagar** la contribución: el ISR, el IVA o las retenciones que hiciste. Las **obligaciones formales** son todo lo que rodea ese pago para que el SAT pueda vigilarlo: inscribirte en el **RFC**, presentar **declaraciones**, dar **avisos**, emitir comprobantes, llevar y **conservar** registros.",
            en: "Every relationship with the tax authority has two kinds of duties. The **substantive obligation** is to **pay** the contribution: income tax, VAT or the amounts you withheld. **Formal obligations** are everything around that payment so SAT can monitor it: registering in the **RFC**, filing **returns**, giving **notices**, issuing receipts, and keeping and **preserving** records.",
          },
          {
            es: "Un error común es pensar que si **no hay impuesto a pagar** no hay que hacer nada. Falso: aunque el resultado sea cero o a favor, la declaración se presenta. Incumplir una obligación formal también tiene **multa**, aunque no se deba dinero.",
            en: "A common mistake is thinking that if **there is no tax to pay** there is nothing to do. False: even if the result is zero or a refund, the return is filed. Breaking a formal obligation also carries a **fine**, even when no money is owed.",
          },
          {
            es: "Otras obligaciones formales clave: mantener actualizado tu **domicilio fiscal** y tus actividades; tener vigente tu **e.firma** y, si facturas, tu **certificado de sello digital**; y habilitar el **buzón tributario**, el canal electrónico por el que el SAT te notifica. Si no lo revisas, una notificación igual cuenta como hecha.",
            en: "Other key formal obligations: keep your **tax address** and activities up to date; keep your **e.firma** (advanced e-signature) valid and, if you invoice, your **digital seal certificate**; and enable the **tax mailbox** (buzón tributario), the electronic channel through which SAT notifies you. If you do not check it, a notice still counts as delivered.",
          },
          {
            es: "Mini ejemplo: Martha cambió su consultorio de colonia y no presentó el aviso de cambio de domicilio. No debe impuestos, pero sí incumplió una obligación formal y el SAT puede multarla o restringir su sello para facturar.",
            en: "Mini example: Martha moved her practice to another neighborhood and did not file the change-of-address notice. She owes no tax, but she did break a formal obligation and SAT may fine her or restrict her invoicing seal.",
          },
        ],
        bullets: [
          { es: "Sustantiva: pagar la contribución correcta y a tiempo.", en: "Substantive: pay the right contribution on time." },
          { es: "Formal: RFC, avisos, declaraciones, comprobantes, registros, buzón tributario.", en: "Formal: RFC, notices, returns, receipts, records, tax mailbox." },
          { es: "Declarar aunque el resultado sea cero.", en: "File even if the result is zero." },
          { es: "Conservar la documentación durante el plazo que marca la ley (en general, varios años).", en: "Keep documentation for the period the law requires (generally several years)." },
        ],
      },
      {
        heading: { es: "El calendario de cumplimiento", en: "The compliance calendar" },
        body: [
          {
            es: "Para no olvidar nada, los despachos arman un **calendario de cumplimiento**. Lo más frecuente son los **pagos provisionales mensuales** de ISR y los pagos de IVA y retenciones, que en general vencen **a más tardar el día 17 del mes siguiente**. Son \"provisionales\" porque son anticipos a cuenta del impuesto del año.",
            en: "To forget nothing, firms build a **compliance calendar**. The most frequent items are **monthly provisional payments** of income tax and payments of VAT and withholdings, generally due **no later than the 17th of the following month**. They are \"provisional\" because they are advances on the year's tax.",
          },
          {
            es: "Después viene la **declaración anual**: en general, las personas morales la presentan a más tardar en **marzo** y las personas físicas en **abril** del año siguiente. Ahí se calcula el impuesto real del año y se le restan los pagos provisionales. Además existen **declaraciones informativas**, que no pagan impuesto pero reportan datos, como la información de operaciones con proveedores (DIOT).",
            en: "Then comes the **annual return**: in general, legal entities file it no later than **March** and individuals in **April** of the following year. It computes the year's actual tax and subtracts the provisional payments. There are also **informative returns**, which pay no tax but report data, such as information on transactions with suppliers (DIOT).",
          },
          {
            es: "Para comprobar que estás al día existe la **opinión del cumplimiento de obligaciones fiscales**, que el SAT emite como **positiva** o **negativa**. Muchas empresas, bancos y dependencias de gobierno la piden antes de contratarte, darte un apoyo o un crédito. Una opinión negativa puede costarte un cliente aunque tu deuda sea pequeña.",
            en: "To prove you are up to date there is the **tax compliance opinion**, which SAT issues as **positive** or **negative**. Many companies, banks and government agencies ask for it before hiring you, giving you support or a loan. A negative opinion can cost you a client even if your debt is small.",
          },
          {
            es: "Mini ejemplo: el pago provisional de ISR de mayo de una persona moral se presenta a más tardar el 17 de junio. Si el 17 cae en día inhábil, el plazo se recorre al siguiente día hábil.",
            en: "Mini example: a legal entity's May provisional income tax payment is due no later than June 17. If the 17th falls on a non-business day, the deadline moves to the next business day.",
          },
        ],
      },
      {
        heading: { es: "Pagar tarde: actualización, recargos y corrección espontánea", en: "Paying late: inflation adjustment, surcharges and voluntary correction" },
        body: [
          {
            es: "Si pagas después del plazo, el monto se **actualiza**: se ajusta por inflación con un **factor de actualización** que sale del Índice Nacional de Precios al Consumidor (INPC). La idea es que el fisco reciba el mismo **poder de compra** que tenía el dinero cuando debió pagarse. La actualización **no es castigo**, es reponer valor.",
            en: "If you pay after the deadline, the amount is **adjusted for inflation** with an **adjustment factor** derived from the National Consumer Price Index (INPC). The idea is that the authority receives the same **purchasing power** the money had when it was due. The adjustment is **not a penalty**; it restores value.",
          },
          {
            es: "Además se cobran **recargos**: una especie de interés por cada mes o fracción de retraso, con una tasa mensual que fija la Ley de Ingresos de cada año. Los recargos se calculan sobre la contribución **ya actualizada**. Y si el SAT descubre el incumplimiento, se suman **multas**.",
            en: "**Surcharges** are also charged: a kind of interest for each month or fraction of delay, at a monthly rate set by each year's Revenue Law. Surcharges are computed on the **already adjusted** contribution. And if SAT discovers the non-compliance, **fines** are added.",
          },
          {
            es: "La buena noticia: si corriges **de forma espontánea**, es decir, antes de que el SAT te lo requiera o inicie una revisión, en general **no se imponen multas**; pagas solo actualización y recargos. Por eso conviene revisar tus propias declaraciones y corregir pronto.",
            en: "The good news: if you correct **voluntarily**, that is, before SAT demands it or starts a review, in general **no fines are imposed**; you pay only the adjustment and surcharges. That is why it pays to review your own returns and correct early.",
          },
          {
            es: "Mini ejemplo con números hipotéticos: debías $10,000; el factor de actualización es 1.012, así que actualizado son $10,120. Con 3 meses de atraso y una tasa de recargos de 1.5% mensual, los recargos son 10,120 × 4.5% = $455.40. Total: $10,575.40.",
            en: "Mini example with hypothetical numbers: you owed $10,000; the adjustment factor is 1.012, so the adjusted amount is $10,120. With 3 months of delay and a 1.5% monthly surcharge rate, surcharges are 10,120 × 4.5% = $455.40. Total: $10,575.40.",
          },
        ],
        formula: "Contribución actualizada = contribución × factor de actualización;  Recargos = actualizada × (tasa mensual × meses);  Total = actualizada + recargos",
      },
    ],
    examples: [
      {
        title: { es: "Pago tardío de IVA", en: "Late VAT payment" },
        problem: {
          es: "Una ferretería olvidó pagar $20,000 de IVA. Lo paga 4 meses tarde, de forma espontánea. Factor de actualización hipotético: 1.015; tasa de recargos hipotética: 1.47% mensual. ¿Cuánto paga en total?",
          en: "A hardware store forgot to pay $20,000 of VAT. It pays 4 months late, voluntarily. Hypothetical adjustment factor: 1.015; hypothetical surcharge rate: 1.47% per month. How much does it pay in total?",
        },
        steps: [
          { es: "Actualización: 20,000 × 1.015 = $20,300.", en: "Adjustment: 20,000 × 1.015 = $20,300." },
          { es: "Tasa acumulada de recargos: 1.47% × 4 = 5.88%.", en: "Cumulative surcharge rate: 1.47% × 4 = 5.88%." },
          { es: "Recargos: 20,300 × 0.0588 = $1,193.64.", en: "Surcharges: 20,300 × 0.0588 = $1,193.64." },
          { es: "Total: 20,300 + 1,193.64 = $21,493.64. Al ser espontáneo, en general no hay multa.", en: "Total: 20,300 + 1,193.64 = $21,493.64. Being voluntary, in general there is no fine." },
        ],
        result: {
          es: "Paga $21,493.64. El retraso le costó $1,493.64 más; si hubiera esperado a que el SAT lo detectara, además habría multa.",
          en: "It pays $21,493.64. The delay cost $1,493.64 extra; had it waited for SAT to detect it, there would also be a fine.",
        },
      },
      {
        title: { es: "Calendario de una persona moral", en: "A legal entity's calendar" },
        problem: {
          es: "Comercializadora del Bajío, S.A. de C.V., con trabajadores y proveedores, quiere su calendario básico de obligaciones fiscales del año. ¿Qué incluye?",
          en: "Comercializadora del Bajío, S.A. de C.V., with employees and suppliers, wants its basic annual tax compliance calendar. What does it include?",
        },
        steps: [
          { es: "Cada mes, a más tardar el día 17: pago provisional de ISR, pago de IVA y entero de retenciones de ISR de sueldos.", en: "Every month, no later than the 17th: provisional income tax payment, VAT payment and remittance of payroll income tax withholdings." },
          { es: "Cada mes: la informativa de operaciones con terceros (DIOT) en el plazo que fijen las reglas.", en: "Every month: the third-party transactions informative return (DIOT) by the deadline set in the rules." },
          { es: "En marzo del año siguiente: declaración anual de la persona moral.", en: "In March of the following year: the legal entity's annual return." },
          { es: "Todo el año: emitir CFDI, revisar el buzón tributario y mantener vigentes e.firma y sello digital.", en: "All year: issue CFDI, check the tax mailbox and keep the e.firma and digital seal valid." },
        ],
        result: {
          es: "Un calendario claro evita recargos y multas y mantiene la opinión de cumplimiento positiva, que sus clientes grandes le piden para seguir comprándole.",
          en: "A clear calendar avoids surcharges and fines and keeps the compliance opinion positive, which its large customers ask for to keep buying from it.",
        },
      },
    ],
    keyPoints: [
      { es: "Obligación sustantiva = pagar; formales = registrarse, declarar, avisar, facturar y conservar.", en: "Substantive obligation = pay; formal ones = register, file, notify, invoice and keep records." },
      { es: "Se declara aunque el resultado sea cero; las faltas formales también se multan.", en: "You file even if the result is zero; formal breaches are also fined." },
      { es: "Pagos provisionales mensuales, en general, a más tardar el día 17 del mes siguiente; anual en marzo (morales) o abril (físicas).", en: "Monthly provisional payments, generally no later than the 17th of the following month; annual in March (entities) or April (individuals)." },
      { es: "Pagar tarde implica actualización por inflación y recargos sobre el monto actualizado.", en: "Paying late means an inflation adjustment plus surcharges on the adjusted amount." },
      { es: "Corregir de forma espontánea, antes de una revisión, en general evita la multa.", en: "Correcting voluntarily, before a review, generally avoids the fine." },
    ],
    normativeNote: NOTE_COMPLIANCE,
    exerciseIds: ['FIS-14-E1', 'FIS-14-E2', 'FIS-14-E3', 'FIS-14-E4', 'FIS-14-E5', 'FIS-14-E6'],
  },

  // ───────────────────────────── FIS-15 ─────────────────────────────
  {
    id: 'FIS-15',
    level: 5,
    topicIds: ['FIS.15'],
    title: { es: "Planeación fiscal lícita", en: "Lawful tax planning" },
    summary: {
      es: "Planear tus impuestos es elegir, dentro de la ley y con operaciones reales, la opción que menos carga fiscal te genera; usar simulaciones o esquemas sin razón de negocios cruza la línea hacia la elusión o la evasión.",
      en: "Tax planning means choosing, within the law and with real transactions, the option that creates the lowest tax burden; using sham transactions or schemes without business purpose crosses the line into avoidance or evasion.",
    },
    minutes: 16,
    objectives: [
      { es: "Distinguir planeación fiscal lícita, elusión agresiva y evasión.", en: "Distinguish lawful tax planning, aggressive avoidance and evasion." },
      { es: "Aplicar las pruebas de materialidad y razón de negocios a una estrategia fiscal.", en: "Apply the substance and business-purpose tests to a tax strategy." },
      { es: "Calcular el ahorro de una deducción usando la tasa marginal.", en: "Compute the savings from a deduction using the marginal rate." },
      { es: "Reconocer señales de alerta: listas del SAT, esquemas reportables y facturas sin operación real.", en: "Recognize red flags: SAT lists, reportable schemes and invoices without a real transaction." },
    ],
    theory: [
      {
        heading: { es: "Planear, eludir y evadir no son lo mismo", en: "Planning, avoiding and evading are not the same" },
        body: [
          {
            es: "La **planeación fiscal lícita** es usar las opciones que la propia ley te da para pagar lo justo, no más. Por ejemplo, elegir el régimen que te conviene si cumples los requisitos, o aprovechar una deducción permitida. A esto se le llama **economía de opción**: la ley ofrece caminos y tú escoges el menos costoso.",
            en: "**Lawful tax planning** is using the options the law itself gives you to pay what is fair, no more. For example, choosing the regime that suits you if you meet the requirements, or using an allowed deduction. This is called **economy of option**: the law offers paths and you choose the least costly one.",
          },
          {
            es: "La **elusión** agresiva es acomodar operaciones para que **en papel** encajen en un beneficio, aunque en la realidad no tengan otro fin que pagar menos. La **evasión** es dejar de pagar ocultando ingresos, inventando gastos o usando facturas falsas: es ilegal y puede ser **delito** (defraudación fiscal).",
            en: "Aggressive **avoidance** is arranging transactions so that **on paper** they fit a benefit, even though in reality their only purpose is to pay less. **Evasion** is not paying by hiding income, inventing expenses or using fake invoices: it is illegal and can be a **crime** (tax fraud).",
          },
          {
            es: "Una prueba sencilla: ¿la operación **existe de verdad** y la harías aunque no hubiera beneficio fiscal? Si la respuesta es sí, vas por buen camino. Si solo existe en facturas y contratos, el SAT puede ignorarla y cobrarte el impuesto, con multas y, en casos graves, consecuencias penales.",
            en: "A simple test: does the transaction **really exist**, and would you do it even without a tax benefit? If yes, you are on the right track. If it only exists in invoices and contracts, SAT can disregard it and charge you the tax, with fines and, in serious cases, criminal consequences.",
          },
          {
            es: "Mini ejemplo: una diseñadora que factura poco y cumple requisitos elige el régimen simplificado que le da una tasa menor: es planeación. Otra compra facturas de \"asesoría\" que nunca recibió para deducirlas: es evasión.",
            en: "Mini example: a designer with low income who meets the requirements chooses the simplified regime that gives her a lower rate: that is planning. Another buys invoices for \"consulting\" she never received to deduct them: that is evasion.",
          },
        ],
        bullets: [
          { es: "Planeación lícita: opciones que la ley ofrece, con operaciones reales.", en: "Lawful planning: options the law offers, with real transactions." },
          { es: "Elusión agresiva: forma legal sin sustancia ni propósito de negocio.", en: "Aggressive avoidance: legal form without substance or business purpose." },
          { es: "Evasión: ocultar o simular; es ilegal y puede ser delito.", en: "Evasion: hiding or faking; it is illegal and can be a crime." },
        ],
      },
      {
        heading: { es: "Materialidad, razón de negocios y señales de alerta", en: "Substance, business purpose and red flags" },
        body: [
          {
            es: "La **materialidad** es poder **demostrar que la operación sí ocurrió**: el servicio se prestó, la mercancía llegó, el pago salió del banco. No basta con el CFDI. Se prueba con contratos, entregables, correos, fotos, bitácoras y pagos bancarizados.",
            en: "**Substance** (materialidad) means being able to **prove the transaction really happened**: the service was provided, the goods arrived, the payment left the bank. The CFDI alone is not enough. It is proven with contracts, deliverables, emails, photos, logs and bank payments.",
          },
          {
            es: "Desde 2020, el CFF incluye una regla de **razón de negocios**: si una serie de operaciones genera un beneficio fiscal pero **no tiene un beneficio económico razonable** distinto del fiscal, la autoridad puede darle los efectos que tendría la operación que normalmente se habría hecho. Además, desde 2021 los asesores (y a veces los propios contribuyentes) deben **revelar** al SAT ciertos **esquemas reportables**.",
            en: "Since 2020, the CFF includes a **business-purpose** rule: if a series of transactions produces a tax benefit but **has no reasonable economic benefit** other than the tax one, the authority can give it the effects of the transaction that would normally have been carried out. Also, since 2021 advisors (and sometimes taxpayers themselves) must **disclose** certain **reportable schemes** to SAT.",
          },
          {
            es: "Señal de alerta clave: el SAT publica listas de contribuyentes que emiten facturas por **operaciones presuntamente inexistentes** (conocidos como EFOS). Si tu proveedor aparece y no demuestras que la operación fue real, pierdes la deducción y el IVA acreditable. Revisar las listas antes de pagar es parte de una planeación sana.",
            en: "Key red flag: SAT publishes lists of taxpayers who issue invoices for **presumably non-existent transactions** (known as EFOS). If your supplier appears and you cannot prove the transaction was real, you lose the deduction and the creditable VAT. Checking the lists before paying is part of sound planning.",
          },
          {
            es: "Mini ejemplo: una empresa contrata \"capacitación\" por $500,000 a un proveedor sin empleados ni instalaciones; no hay listas de asistencia ni materiales. Aunque tenga CFDI, la falta de materialidad hace muy probable que el SAT rechace la deducción.",
            en: "Mini example: a company hires \"training\" for $500,000 from a supplier with no employees or premises; there are no attendance lists or materials. Even with a CFDI, the lack of substance makes it very likely SAT will reject the deduction.",
          },
        ],
      },
      {
        heading: { es: "Herramientas lícitas y cómo medir su efecto", en: "Lawful tools and how to measure their effect" },
        body: [
          {
            es: "Para medir cuánto ahorras con una deducción se usa la **tasa marginal**: la tasa que paga el **último peso** de tu ingreso. Si tu último peso paga 30%, cada $1,000 de deducción adicional te ahorran $300 de ISR. Por eso una misma deducción vale más para quien gana más.",
            en: "To measure how much a deduction saves you, use the **marginal rate**: the rate paid on the **last peso** of your income. If your last peso pays 30%, every additional $1,000 of deduction saves you $300 of income tax. That is why the same deduction is worth more to someone who earns more.",
          },
          {
            es: "Herramientas lícitas frecuentes en personas físicas: **deducciones personales** (gastos médicos, colegiaturas en ciertos niveles, intereses reales de crédito hipotecario) y **aportaciones voluntarias** para el retiro, siempre dentro de los **topes** de ley y pagadas con medios bancarizados. En negocios: elegir el régimen adecuado, programar inversiones, documentar bien los gastos y diseñar prestaciones de previsión social que la ley permite.",
            en: "Common lawful tools for individuals: **personal deductions** (medical expenses, tuition at certain levels, real interest on mortgage loans) and **voluntary retirement contributions**, always within the legal **caps** and paid through bank channels. In businesses: choosing the right regime, scheduling investments, documenting expenses well and designing the social welfare benefits the law allows.",
          },
          {
            es: "Una buena planeación también mira el **momento**: adelantar o diferir una inversión cambia en qué año deduces, y el **valor del dinero en el tiempo** hace que pagar después valga menos. Pero nunca se planea \"hacia atrás\": cambiar fechas o documentos de operaciones ya hechas es simulación.",
            en: "Good planning also considers **timing**: bringing forward or deferring an investment changes the year you deduct it, and the **time value of money** makes paying later worth less. But you never plan \"backward\": changing dates or documents of past transactions is a sham.",
          },
          {
            es: "Mini ejemplo con tasa hipotética: Jorge tiene tasa marginal de 30% y hace una aportación voluntaria deducible de $20,000. Su ISR baja 20,000 × 30% = $6,000, y además ahorra para su retiro.",
            en: "Mini example with a hypothetical rate: Jorge has a 30% marginal rate and makes a $20,000 deductible voluntary contribution. His income tax drops by 20,000 × 30% = $6,000, and he also saves for retirement.",
          },
        ],
        formula: "Ahorro fiscal = deducción adicional × tasa marginal",
      },
    ],
    examples: [
      {
        title: { es: "¿Cuánto vale de verdad una deducción?", en: "How much is a deduction really worth?" },
        problem: {
          es: "Claudia, médica, paga $40,000 de gastos médicos de su familia con tarjeta y recibe CFDI. Su tasa marginal hipotética es 25% y la deducción cabe dentro de los topes. ¿Cuánto ISR deja de pagar y cuál es el costo neto de esos gastos?",
          en: "Claudia, a physician, pays $40,000 of her family's medical expenses by card and receives CFDI. Her hypothetical marginal rate is 25% and the deduction fits within the caps. How much income tax does she stop paying and what is the net cost of those expenses?",
        },
        steps: [
          { es: "Ahorro fiscal: 40,000 × 25% = $10,000.", en: "Tax savings: 40,000 × 25% = $10,000." },
          { es: "Costo neto: 40,000 − 10,000 = $30,000.", en: "Net cost: 40,000 − 10,000 = $30,000." },
          { es: "Requisitos: gasto real, CFDI a su nombre o de sus dependientes, pago bancarizado.", en: "Requirements: real expense, CFDI in her or her dependents' name, bank payment." },
        ],
        result: {
          es: "Claudia ahorra $10,000 de ISR; el gasto le cuesta $30,000 netos. Es planeación lícita: el gasto existe y la ley lo permite.",
          en: "Claudia saves $10,000 of income tax; the expense costs her $30,000 net. It is lawful planning: the expense is real and the law allows it.",
        },
      },
      {
        title: { es: "Revisar un esquema propuesto", en: "Reviewing a proposed scheme" },
        problem: {
          es: "Un asesor le ofrece a una empresa pagar el 40% de los sueldos como \"servicios\" facturados por una sociedad nueva, sin empleados, para \"bajar el ISR y las cuotas IMSS\". ¿Cómo evaluarlo?",
          en: "An advisor offers a company to pay 40% of salaries as \"services\" invoiced by a new company with no employees, to \"lower income tax and IMSS contributions\". How should it be evaluated?",
        },
        steps: [
          { es: "Materialidad: ¿la sociedad presta un servicio real? No tiene empleados ni medios: no.", en: "Substance: does the company provide a real service? It has no employees or means: no." },
          { es: "Razón de negocios: el único beneficio es fiscal; los trabajadores siguen haciendo lo mismo.", en: "Business purpose: the only benefit is tax; workers keep doing the same thing." },
          { es: "Señales: proveedor que puede terminar en listas de operaciones inexistentes; posible esquema reportable.", en: "Red flags: a supplier that may end up on non-existent transaction lists; possible reportable scheme." },
          { es: "Efecto real: el SAT y el IMSS pueden recalificar los pagos como salario y cobrar con multas.", en: "Real effect: SAT and IMSS can recharacterize the payments as salary and collect with fines." },
        ],
        result: {
          es: "No es planeación lícita: carece de materialidad y de razón de negocios. La respuesta correcta es rechazarlo y buscar opciones reales, como prestaciones de previsión social bien documentadas.",
          en: "It is not lawful planning: it lacks substance and business purpose. The right answer is to reject it and look for real options, such as well-documented social welfare benefits.",
        },
      },
    ],
    keyPoints: [
      { es: "Planeación lícita = elegir opciones que da la ley, con operaciones reales.", en: "Lawful planning = choosing options the law gives, with real transactions." },
      { es: "Evasión = ocultar ingresos o simular gastos; puede ser delito.", en: "Evasion = hiding income or faking expenses; it can be a crime." },
      { es: "Toda estrategia necesita materialidad (pruebas) y razón de negocios (beneficio económico real).", en: "Every strategy needs substance (evidence) and business purpose (real economic benefit)." },
      { es: "El ahorro de una deducción se mide con la tasa marginal.", en: "A deduction's savings are measured with the marginal rate." },
      { es: "Revisa las listas del SAT de operaciones presuntamente inexistentes antes de pagar a un proveedor.", en: "Check SAT's lists of presumably non-existent transactions before paying a supplier." },
    ],
    normativeNote: NOTE_PLANNING,
    exerciseIds: ['FIS-15-E1', 'FIS-15-E2', 'FIS-15-E3', 'FIS-15-E4', 'FIS-15-E5', 'FIS-15-E6'],
  },

  // ───────────────────────────── FIS-16 ─────────────────────────────
  {
    id: 'FIS-16',
    level: 5,
    topicIds: ['FIS.16'],
    title: { es: "Fiscalidad internacional y tratados fiscales", en: "International taxation and tax treaties" },
    summary: {
      es: "Cuando un ingreso cruza fronteras, dos países pueden querer cobrarle impuesto; la residencia, la fuente, los tratados y el acreditamiento de impuestos extranjeros evitan pagar dos veces.",
      en: "When income crosses borders, two countries may want to tax it; residence, source, treaties and the foreign tax credit prevent paying twice.",
    },
    minutes: 17,
    objectives: [
      { es: "Explicar los criterios de residencia y fuente y por qué generan doble imposición.", en: "Explain the residence and source criteria and why they cause double taxation." },
      { es: "Describir para qué sirven los tratados para evitar la doble imposición y qué se necesita para aplicarlos.", en: "Describe what double tax treaties are for and what is needed to apply them." },
      { es: "Calcular el acreditamiento de un impuesto pagado en el extranjero con su límite.", en: "Compute the credit for tax paid abroad with its limit." },
      { es: "Reconocer temas clave: establecimiento permanente, precios de transferencia e intercambio de información.", en: "Recognize key topics: permanent establishment, transfer pricing and information exchange." },
    ],
    theory: [
      {
        heading: { es: "Residencia, fuente y doble imposición", en: "Residence, source and double taxation" },
        body: [
          {
            es: "Los países cobran impuestos con dos criterios. Por **residencia**: si vives (o tu empresa tiene su administración) en México, México grava **todo tu ingreso, venga de donde venga**. Por **fuente**: si el ingreso **se genera** en México, México lo grava aunque quien lo recibe viva fuera.",
            en: "Countries tax with two criteria. By **residence**: if you live (or your company is managed) in Mexico, Mexico taxes **all your income, wherever it comes from**. By **source**: if the income **is generated** in Mexico, Mexico taxes it even if the recipient lives abroad.",
          },
          {
            es: "Para una persona física, en general eres **residente en México** si aquí tienes tu **casa habitación**; si también tienes casa en otro país, se ve dónde está tu **centro de intereses vitales** (dónde está la mayor parte de tus ingresos o tus actividades profesionales). Los mexicanos se presumen residentes salvo prueba en contrario.",
            en: "For an individual, you are generally **resident in Mexico** if you have your **home** here; if you also have a home in another country, you look at where your **center of vital interests** is (where most of your income or professional activities are). Mexican nationals are presumed resident unless proven otherwise.",
          },
          {
            es: "El problema aparece cuando ambos criterios chocan: tu país de residencia te grava por residencia y el otro país te grava por fuente. Eso es la **doble imposición**: el mismo ingreso paga impuesto dos veces, lo que desalienta el comercio y la inversión.",
            en: "The problem appears when both criteria collide: your residence country taxes you for residence and the other country taxes you for source. That is **double taxation**: the same income is taxed twice, which discourages trade and investment.",
          },
          {
            es: "Mini ejemplo: Ana vive en Monterrey y da un curso pagado en Colombia. Colombia puede gravar el pago por ser fuente; México lo grava porque Ana es residente aquí. Sin remedios, pagaría dos veces.",
            en: "Mini example: Ana lives in Monterrey and gives a paid course in Colombia. Colombia may tax the payment as the source; Mexico taxes it because Ana is resident here. Without remedies, she would pay twice.",
          },
        ],
        bullets: [
          { es: "Residente en México: tributa por su ingreso mundial.", en: "Resident in Mexico: taxed on worldwide income." },
          { es: "No residente: tributa en México solo por ingresos de fuente mexicana.", en: "Non-resident: taxed in Mexico only on Mexican-source income." },
          { es: "Doble imposición: mismo ingreso, dos países, dos impuestos.", en: "Double taxation: same income, two countries, two taxes." },
        ],
      },
      {
        heading: { es: "Tratados fiscales y acreditamiento", en: "Tax treaties and the foreign tax credit" },
        body: [
          {
            es: "Un **tratado para evitar la doble imposición** es un acuerdo entre dos países que reparte quién puede cobrar y cuánto. México tiene una red amplia de tratados, la mayoría basados en el **Modelo de Convenio de la OCDE**. Suelen **reducir las retenciones** sobre dividendos, intereses y regalías que paga el país de la fuente y fijan reglas para resolver casos de doble residencia.",
            en: "A **double tax treaty** is an agreement between two countries that allocates who may tax and how much. Mexico has a broad treaty network, mostly based on the **OECD Model Tax Convention**. They usually **reduce withholding** on dividends, interest and royalties paid by the source country and set rules to resolve dual-residence cases.",
          },
          {
            es: "Para aplicar el beneficio de un tratado, quien recibe el pago debe **demostrar que es residente** del otro país, normalmente con una **constancia de residencia fiscal** emitida por su autoridad, y cumplir los demás requisitos (como ser el **beneficiario efectivo** del ingreso). Sin esa prueba, se retiene la tasa general de la ley mexicana.",
            en: "To apply a treaty benefit, the recipient must **prove residence** in the other country, usually with a **tax residence certificate** issued by its authority, and meet the other requirements (such as being the **beneficial owner** of the income). Without that proof, the general rate under Mexican law is withheld.",
          },
          {
            es: "El otro remedio es el **acreditamiento**: un residente en México puede **restar de su ISR mexicano el impuesto que pagó en el extranjero** por ese ingreso. Hay un **límite**: no puedes acreditar más que el ISR mexicano que corresponde a ese ingreso extranjero. Si el impuesto extranjero es mayor, el excedente no se acredita ese año (la ley tiene reglas específicas para su uso posterior).",
            en: "The other remedy is the **credit**: a Mexican resident can **subtract from Mexican income tax the tax paid abroad** on that income. There is a **limit**: you cannot credit more than the Mexican income tax attributable to that foreign income. If the foreign tax is higher, the excess is not credited that year (the law has specific rules for its later use).",
          },
          {
            es: "Mini ejemplo con tasas hipotéticas: Ana ganó $100,000 en Colombia y pagó allá $15,000. Su ISR mexicano sobre ese ingreso sería $30,000. Acredita $15,000 y en México paga solo $15,000 más. En total pagó $30,000, no $45,000.",
            en: "Mini example with hypothetical rates: Ana earned $100,000 in Colombia and paid $15,000 there. Her Mexican income tax on that income would be $30,000. She credits $15,000 and pays only $15,000 more in Mexico. In total she paid $30,000, not $45,000.",
          },
        ],
        formula: "Impuesto acreditable = menor entre (impuesto pagado en el extranjero, ISR mexicano sobre ese ingreso);  ISR a pagar en México = ISR mexicano − acreditable",
      },
      {
        heading: { es: "Empresas que cruzan fronteras", en: "Businesses that cross borders" },
        body: [
          {
            es: "Una empresa extranjera tributa en México por sus ganancias de negocio si aquí tiene un **establecimiento permanente**: un lugar fijo de negocios (oficina, sucursal, fábrica) o, en ciertos casos, agentes que cierran contratos por ella. Sin establecimiento permanente, normalmente solo se le retiene impuesto por pagos concretos de fuente mexicana.",
            en: "A foreign company is taxed in Mexico on its business profits if it has a **permanent establishment** here: a fixed place of business (office, branch, factory) or, in certain cases, agents who conclude contracts on its behalf. Without a permanent establishment, it is usually only subject to withholding on specific Mexican-source payments.",
          },
          {
            es: "Cuando empresas del **mismo grupo** se venden entre sí, podrían fijar precios para dejar la ganancia en el país con menor impuesto. Para evitarlo existen los **precios de transferencia**: las operaciones entre **partes relacionadas** deben pactarse como lo harían empresas independientes, el llamado **principio de plena competencia** (arm's length), y documentarse.",
            en: "When companies in the **same group** sell to each other, they could set prices to leave profit in the country with lower tax. To prevent this there are **transfer pricing** rules: transactions between **related parties** must be priced as independent companies would, the so-called **arm's length principle**, and be documented.",
          },
          {
            es: "Además, los países ya **comparten información**: con el intercambio automático (como el estándar común de la OCDE y el acuerdo con Estados Unidos conocido como FATCA), los bancos reportan cuentas de no residentes a su autoridad, que las envía al país de residencia. El proyecto **BEPS** de la OCDE y el G20 dio reglas para frenar el traslado artificial de utilidades. México también tiene reglas especiales para ingresos en **regímenes fiscales preferentes** (paraísos fiscales).",
            en: "Countries also **share information** now: with automatic exchange (such as the OECD's common standard and the agreement with the United States known as FATCA), banks report non-residents' accounts to their authority, which sends them to the residence country. The OECD/G20 **BEPS** project set rules to curb artificial profit shifting. Mexico also has special rules for income in **preferential tax regimes** (tax havens).",
          },
          {
            es: "Mini ejemplo: una filial mexicana compra piezas a su matriz a un precio muy superior al de mercado. Su utilidad en México baja artificialmente; el SAT puede ajustar el precio al de plena competencia y cobrar el ISR faltante.",
            en: "Mini example: a Mexican subsidiary buys parts from its parent at a price far above market. Its profit in Mexico drops artificially; SAT can adjust the price to arm's length and collect the missing income tax.",
          },
        ],
      },
    ],
    examples: [
      {
        title: { es: "Acreditamiento con límite", en: "Credit with a limit" },
        problem: {
          es: "Un residente en México obtiene $200,000 de honorarios en otro país, que le cobra un impuesto hipotético de $70,000. El ISR mexicano correspondiente a ese ingreso es, hipotéticamente, $60,000. ¿Cuánto acredita y cuánto paga en México por ese ingreso?",
          en: "A Mexican resident earns $200,000 in fees in another country, which charges a hypothetical $70,000 tax. The Mexican income tax attributable to that income is, hypothetically, $60,000. How much does he credit and how much does he pay in Mexico on that income?",
        },
        steps: [
          { es: "Comparamos: impuesto extranjero $70,000 vs. ISR mexicano $60,000.", en: "Compare: foreign tax $70,000 vs. Mexican income tax $60,000." },
          { es: "Acreditable = el menor: $60,000.", en: "Creditable = the lower: $60,000." },
          { es: "ISR en México por ese ingreso: 60,000 − 60,000 = $0.", en: "Mexican income tax on that income: 60,000 − 60,000 = $0." },
          { es: "Excedente no acreditado este año: 70,000 − 60,000 = $10,000.", en: "Excess not credited this year: 70,000 − 60,000 = $10,000." },
        ],
        result: {
          es: "Acredita $60,000 y no paga más en México por ese ingreso. Los $10,000 extra no se descuentan este año de su ISR por otros ingresos; su uso posterior depende de las reglas de la ley.",
          en: "He credits $60,000 and pays nothing more in Mexico on that income. The extra $10,000 is not deducted this year from his tax on other income; its later use depends on the law's rules.",
        },
      },
      {
        title: { es: "Retención reducida por tratado", en: "Reduced withholding under a treaty" },
        problem: {
          es: "Una empresa mexicana pagará intereses por $500,000 a un banco residente en un país con tratado. Supón una tasa de retención hipotética de 15% según la ley interna y 10% según el tratado. ¿Cuánto se retiene y qué se necesita?",
          en: "A Mexican company will pay $500,000 of interest to a bank resident in a treaty country. Assume a hypothetical withholding rate of 15% under domestic law and 10% under the treaty. How much is withheld and what is needed?",
        },
        steps: [
          { es: "Sin tratado: 500,000 × 15% = $75,000.", en: "Without treaty: 500,000 × 15% = $75,000." },
          { es: "Con tratado: 500,000 × 10% = $50,000.", en: "With treaty: 500,000 × 10% = $50,000." },
          { es: "Requisito: constancia de residencia fiscal del banco y que sea beneficiario efectivo, más los demás requisitos de la ley mexicana.", en: "Requirement: the bank's tax residence certificate and beneficial ownership, plus the other requirements of Mexican law." },
        ],
        result: {
          es: "Con la documentación correcta se retienen $50,000 en lugar de $75,000. Si la empresa aplica el tratado sin la constancia, puede responder por la diferencia de $25,000.",
          en: "With the right documentation, $50,000 is withheld instead of $75,000. If the company applies the treaty without the certificate, it may be liable for the $25,000 difference.",
        },
      },
    ],
    keyPoints: [
      { es: "Residencia grava el ingreso mundial; fuente grava lo generado en el país.", en: "Residence taxes worldwide income; source taxes what is generated in the country." },
      { es: "Los tratados reparten el derecho a gravar y suelen reducir retenciones; se necesita probar la residencia.", en: "Treaties allocate taxing rights and usually reduce withholding; residence must be proven." },
      { es: "El acreditamiento resta el impuesto extranjero, hasta el ISR mexicano de ese ingreso.", en: "The credit subtracts foreign tax, up to the Mexican income tax on that income." },
      { es: "Una empresa extranjera tributa por sus utilidades en México si tiene establecimiento permanente.", en: "A foreign company is taxed on its profits in Mexico if it has a permanent establishment." },
      { es: "Entre partes relacionadas rige la plena competencia; los países intercambian información automáticamente.", en: "Arm's length governs related-party deals; countries exchange information automatically." },
    ],
    normativeNote: NOTE_INTL,
    exerciseIds: ['FIS-16-E1', 'FIS-16-E2', 'FIS-16-E3', 'FIS-16-E4', 'FIS-16-E5', 'FIS-16-E6'],
  },

  // ───────────────────────────── FIS-17 ─────────────────────────────
  {
    id: 'FIS-17',
    level: 5,
    topicIds: ['FIS.17'],
    title: { es: "Auditoría fiscal y facultades de comprobación", en: "Tax audits and verification powers" },
    summary: {
      es: "El SAT puede revisar si pagaste bien mediante distintas facultades de comprobación, con procedimientos y plazos que también protegen tus derechos y te permiten corregirte o defenderte.",
      en: "SAT can check whether you paid correctly through different verification powers, with procedures and deadlines that also protect your rights and let you correct or defend yourself.",
    },
    minutes: 17,
    objectives: [
      { es: "Identificar las principales facultades de comprobación del SAT y en qué se diferencian.", en: "Identify SAT's main verification powers and how they differ." },
      { es: "Describir las etapas de una revisión y los derechos del contribuyente en cada una.", en: "Describe the stages of a review and the taxpayer's rights in each." },
      { es: "Explicar la caducidad y cómo se cuentan los plazos para que el SAT revise.", en: "Explain the statute of limitations and how review deadlines are counted." },
      { es: "Conocer las salidas: autocorrección, acuerdo conclusivo y medios de defensa.", en: "Know the ways out: self-correction, conclusive agreement and legal remedies." },
    ],
    theory: [
      {
        heading: { es: "Las facultades de comprobación", en: "The verification powers" },
        body: [
          {
            es: "Las **facultades de comprobación** son los poderes que la ley da al SAT para **verificar** que calculaste y pagaste bien tus impuestos y, si no, **determinar** lo que debes. Antes de usarlas, el SAT a veces manda **cartas invitación**: avisos de que detectó una diferencia. Una carta invitación **no es** una auditoría formal, pero ignorarla suele llevar a una.",
            en: "**Verification powers** are the powers the law gives SAT to **check** that you computed and paid your taxes correctly and, if not, to **assess** what you owe. Before using them, SAT sometimes sends **invitation letters**: notices that it detected a difference. An invitation letter is **not** a formal audit, but ignoring it often leads to one.",
          },
          {
            es: "Las facultades más usadas son: la **revisión de gabinete** (o de escritorio), en la que te piden información y documentos para revisarlos en la oficina del SAT; la **visita domiciliaria**, en la que los auditores van a tu domicilio fiscal; y la **revisión electrónica**, que se hace con la información que el SAT ya tiene (CFDI, contabilidad electrónica, declaraciones) y se notifica por buzón tributario.",
            en: "The most used powers are: the **desk review**, in which they request information and documents to review at SAT's office; the **home visit** (field audit), in which auditors come to your tax address; and the **electronic review**, done with information SAT already has (CFDI, electronic accounting, returns) and notified through the tax mailbox.",
          },
          {
            es: "También existen visitas rápidas para verificar que **expidas comprobantes** o tengas tu documentación en regla, y la revisión de **dictámenes** de contador público. Todas deben empezar con una **orden** o un oficio emitido por autoridad competente, que diga qué impuestos y periodos se revisan.",
            en: "There are also quick visits to verify that you **issue receipts** or that your documents are in order, and the review of public accountants' **audit reports**. All must start with an **order** or official notice issued by a competent authority, stating which taxes and periods are being reviewed.",
          },
          {
            es: "Mini ejemplo: una tienda en línea recibe en su buzón tributario un oficio que le pide explicar por qué sus CFDI emitidos suman más que los ingresos declarados. Es una revisión electrónica: todo ocurre en línea y debe contestar con pruebas en el plazo indicado.",
            en: "Mini example: an online store receives in its tax mailbox a notice asking it to explain why its issued CFDI add up to more than its declared income. It is an electronic review: everything happens online and it must answer with evidence within the stated deadline.",
          },
        ],
        bullets: [
          { es: "Carta invitación: aviso, no auditoría formal.", en: "Invitation letter: a notice, not a formal audit." },
          { es: "Revisión de gabinete: entregas documentos al SAT.", en: "Desk review: you deliver documents to SAT." },
          { es: "Visita domiciliaria: auditores en tu domicilio, con actas.", en: "Home visit: auditors at your address, with written records." },
          { es: "Revisión electrónica: con datos que el SAT ya tiene, por buzón tributario.", en: "Electronic review: with data SAT already has, via the tax mailbox." },
        ],
      },
      {
        heading: { es: "Cómo se desarrolla una revisión y cuánto puede durar", en: "How a review unfolds and how long it can last" },
        body: [
          {
            es: "En una visita, los auditores levantan **actas** donde anotan lo que observan. Al final de la revisión te dan a conocer las **irregularidades** (en la visita, en la última acta parcial; en gabinete, en un **oficio de observaciones**) y tienes un plazo para **desvirtuarlas** con pruebas. Después, la autoridad emite la **resolución**, que puede determinar un **crédito fiscal**: impuesto omitido, actualización, recargos y multas.",
            en: "In a visit, auditors draw up **records** (actas) of what they observe. At the end of the review you are informed of the **irregularities** (in a visit, in the last partial record; in a desk review, in an **observations notice**) and you have a period to **rebut** them with evidence. Then the authority issues the **resolution**, which may assess a **tax liability**: omitted tax, adjustment, surcharges and fines.",
          },
          {
            es: "La revisión tiene un **plazo máximo** para terminar, en general de **12 meses**, con excepciones (por ejemplo, para grupos o casos con información del extranjero). Además, el SAT no puede revisar para siempre: sus facultades **caducan**, en general a los **5 años** contados desde el día siguiente a que presentaste la declaración; en ciertos casos (como no estar inscrito o no llevar contabilidad) el plazo se amplía a 10 años.",
            en: "The review has a **maximum period** to finish, generally **12 months**, with exceptions (for example, for groups or cases with foreign information). Also, SAT cannot review forever: its powers **expire** (caducidad), generally **5 years** counted from the day after you filed the return; in certain cases (such as not being registered or not keeping accounts) the period extends to 10 years.",
          },
          {
            es: "Una herramienta frecuente es la **presunción**: si tienes **depósitos bancarios** que no corresponden a tus registros ni a ingresos declarados, la ley permite al SAT **presumir** que son ingresos, salvo que demuestres otra cosa (un préstamo, un traspaso entre tus cuentas, una herencia). Por eso conviene poder explicar cada depósito importante.",
            en: "A frequent tool is **presumption**: if you have **bank deposits** that do not match your records or declared income, the law lets SAT **presume** they are income, unless you prove otherwise (a loan, a transfer between your own accounts, an inheritance). That is why you should be able to explain each significant deposit.",
          },
          {
            es: "Mini ejemplo: una persona presentó su declaración anual de 2023 el 30 de abril de 2024. En general, el SAT puede revisar ese ejercicio hasta abril de 2029.",
            en: "Mini example: a person filed their 2023 annual return on April 30, 2024. In general, SAT can review that year until April 2029.",
          },
        ],
        formula: "Diferencia presunta = depósitos bancarios − ingresos declarados − depósitos explicados (préstamos, traspasos, etc.)",
      },
      {
        heading: { es: "Autocorrección, acuerdos y medios de defensa", en: "Self-correction, agreements and legal remedies" },
        body: [
          {
            es: "Durante la revisión puedes **autocorregirte**: aceptar las diferencias y pagarlas. Como ya hay una revisión, no es espontáneo, pero la ley prevé **multas reducidas** si lo haces antes de ciertas etapas. Es útil cuando el SAT tiene razón y quieres cerrar el tema con menor costo.",
            en: "During the review you can **self-correct**: accept the differences and pay them. Since a review is already underway, it is not voluntary, but the law provides **reduced fines** if you do it before certain stages. It is useful when SAT is right and you want to close the matter at lower cost.",
          },
          {
            es: "Si no estás de acuerdo con lo que observa el SAT durante la revisión, puedes pedir un **acuerdo conclusivo** ante la **PRODECON** (Procuraduría de la Defensa del Contribuyente), un organismo autónomo que media entre tú y la autoridad para llegar a un acuerdo antes de la resolución. La PRODECON también atiende **quejas** y orienta gratis.",
            en: "If you disagree with SAT's findings during the review, you can request a **conclusive agreement** before **PRODECON** (Taxpayer Advocate's Office), an autonomous body that mediates between you and the authority to reach an agreement before the resolution. PRODECON also handles **complaints** and gives free guidance.",
          },
          {
            es: "Si ya te determinaron un crédito, existen **medios de defensa**: el **recurso de revocación** ante el propio SAT, el **juicio contencioso administrativo** ante el **Tribunal Federal de Justicia Administrativa** y, después, el **amparo**. Cada uno tiene plazos cortos y estrictos; si se pasan, la resolución queda firme.",
            en: "If a tax liability has already been assessed, there are **legal remedies**: the **revocation appeal** before SAT itself, the **administrative lawsuit** before the **Federal Administrative Justice Court** and, afterwards, **amparo**. Each has short, strict deadlines; if they pass, the resolution becomes final.",
          },
          {
            es: "Mini ejemplo: en una revisión de gabinete, el SAT rechaza deducciones de un proveedor. La empresa tiene contratos y entregables, pero el SAT no los valoró. En lugar de esperar la resolución, pide un acuerdo conclusivo en PRODECON para que se revisen sus pruebas.",
            en: "Mini example: in a desk review, SAT rejects deductions from a supplier. The company has contracts and deliverables, but SAT did not weigh them. Instead of waiting for the resolution, it requests a conclusive agreement at PRODECON so its evidence gets reviewed.",
          },
        ],
        bullets: [
          { es: "Autocorrección: pagas y obtienes multas reducidas.", en: "Self-correction: you pay and get reduced fines." },
          { es: "Acuerdo conclusivo (PRODECON): mediación durante la revisión.", en: "Conclusive agreement (PRODECON): mediation during the review." },
          { es: "Recurso de revocación: ante el SAT, después de la resolución.", en: "Revocation appeal: before SAT, after the resolution." },
          { es: "Juicio ante el TFJA y, luego, amparo.", en: "Lawsuit before the TFJA and, later, amparo." },
        ],
      },
    ],
    examples: [
      {
        title: { es: "Depósitos que no cuadran", en: "Deposits that do not match" },
        problem: {
          es: "En una revisión, el SAT ve que una persona tuvo depósitos por $1,200,000 en el año y declaró ingresos por $900,000. Ella demuestra con contrato y estados de cuenta un préstamo de su hermano por $200,000. Con una tasa hipotética de 30%, ¿cuál es el ingreso presunto y el impuesto omitido estimado?",
          en: "In a review, SAT sees a person had $1,200,000 in deposits during the year and declared $900,000 of income. She proves with a contract and bank statements a $200,000 loan from her brother. With a hypothetical 30% rate, what is the presumed income and the estimated omitted tax?",
        },
        steps: [
          { es: "Diferencia bruta: 1,200,000 − 900,000 = $300,000.", en: "Gross difference: 1,200,000 − 900,000 = $300,000." },
          { es: "Restamos lo explicado: 300,000 − 200,000 = $100,000 de ingreso presunto.", en: "Subtract what is explained: 300,000 − 200,000 = $100,000 of presumed income." },
          { es: "Impuesto omitido estimado: 100,000 × 30% = $30,000, más actualización, recargos y multas.", en: "Estimated omitted tax: 100,000 × 30% = $30,000, plus adjustment, surcharges and fines." },
        ],
        result: {
          es: "Gracias a sus pruebas, el ingreso presunto baja de $300,000 a $100,000 y el impuesto estimado a $30,000. Documentar cada depósito importante es la mejor defensa.",
          en: "Thanks to her evidence, the presumed income drops from $300,000 to $100,000 and the estimated tax to $30,000. Documenting every significant deposit is the best defense.",
        },
      },
      {
        title: { es: "¿Todavía me pueden revisar?", en: "Can they still review me?" },
        problem: {
          es: "Una empresa presentó su declaración anual de 2020 el 31 de marzo de 2021 y nunca la corrigió. En 2026 recibe una orden de visita para revisar ese ejercicio. ¿Siguen vigentes las facultades del SAT, según la regla general?",
          en: "A company filed its 2020 annual return on March 31, 2021 and never amended it. In 2026 it receives a visit order to review that year. Are SAT's powers still in force under the general rule?",
        },
        steps: [
          { es: "Regla general: 5 años desde el día siguiente a la presentación de la declaración.", en: "General rule: 5 years from the day after the return was filed." },
          { es: "Inicio: 1 de abril de 2021. Fin: alrededor del 31 de marzo de 2026.", en: "Start: April 1, 2021. End: around March 31, 2026." },
          { es: "Si la orden llegó después de esa fecha, las facultades ya caducaron (salvo suspensiones o casos de 10 años).", en: "If the order arrived after that date, the powers have expired (except for suspensions or 10-year cases)." },
        ],
        result: {
          es: "Depende de la fecha exacta: después de finales de marzo de 2026, en general el SAT ya no puede revisar 2020. Hay que verificar si hubo causas de suspensión o si aplica el plazo de 10 años.",
          en: "It depends on the exact date: after the end of March 2026, SAT generally can no longer review 2020. You must check for suspension events or whether the 10-year period applies.",
        },
      },
    ],
    keyPoints: [
      { es: "Las facultades de comprobación permiten al SAT verificar y determinar créditos; una carta invitación no es auditoría.", en: "Verification powers let SAT check and assess liabilities; an invitation letter is not an audit." },
      { es: "Principales vías: revisión de gabinete, visita domiciliaria y revisión electrónica.", en: "Main channels: desk review, home visit and electronic review." },
      { es: "En general, la revisión dura hasta 12 meses y las facultades caducan a los 5 años (10 en ciertos casos).", en: "Generally, a review lasts up to 12 months and powers expire after 5 years (10 in certain cases)." },
      { es: "Los depósitos no explicados pueden presumirse ingresos: documenta cada uno.", en: "Unexplained deposits can be presumed income: document each one." },
      { es: "Salidas: autocorrección, acuerdo conclusivo en PRODECON, recurso de revocación, juicio ante el TFJA y amparo.", en: "Ways out: self-correction, PRODECON conclusive agreement, revocation appeal, TFJA lawsuit and amparo." },
    ],
    normativeNote: NOTE_AUDIT,
    exerciseIds: ['FIS-17-E1', 'FIS-17-E2', 'FIS-17-E3', 'FIS-17-E4', 'FIS-17-E5', 'FIS-17-E6'],
  },
]

export const exercises: Exercise[] = [
  // ═════════════════════════ FIS-13 ═════════════════════════
  {
    id: 'FIS-13-E1',
    level: 5,
    module: 'FIS-13',
    kind: 'classify',
    flavor: 'concept',
    prompt: {
      es: "Clasifica cada situación según el seguro del régimen obligatorio del IMSS que la cubre.",
      en: "Classify each situation by the IMSS mandatory insurance branch that covers it.",
    },
    categories: [
      { id: 'FIS-13-E1-c1', label: { es: "Riesgos de trabajo", en: "Occupational risks" } },
      { id: 'FIS-13-E1-c2', label: { es: "Enfermedades y maternidad", en: "Sickness and maternity" } },
      { id: 'FIS-13-E1-c3', label: { es: "Retiro, cesantía en edad avanzada y vejez", en: "Retirement, old-age unemployment and old age" } },
      { id: 'FIS-13-E1-c4', label: { es: "Guarderías y prestaciones sociales", en: "Daycare and social benefits" } },
    ],
    items: [
      { id: 'FIS-13-E1-i1', label: { es: "Un repartidor se fractura la mano al cargar cajas en el almacén", en: "A delivery worker breaks his hand loading boxes in the warehouse" }, correctCategoryId: 'FIS-13-E1-c1' },
      { id: 'FIS-13-E1-i2', label: { es: "Una cajera recibe atención médica por una gripa fuerte", en: "A cashier gets medical care for a bad flu" }, correctCategoryId: 'FIS-13-E1-c2' },
      { id: 'FIS-13-E1-i3', label: { es: "Una trabajadora recibe incapacidad por embarazo y parto", en: "A worker receives leave for pregnancy and childbirth" }, correctCategoryId: 'FIS-13-E1-c2' },
      { id: 'FIS-13-E1-i4', label: { es: "Se depositan aportaciones bimestrales en la Afore del trabajador", en: "Bimonthly contributions are deposited in the worker's Afore" }, correctCategoryId: 'FIS-13-E1-c3' },
      { id: 'FIS-13-E1-i5', label: { es: "Una madre trabajadora deja a su hijo de dos años en la estancia del IMSS", en: "A working mother leaves her two-year-old at the IMSS daycare" }, correctCategoryId: 'FIS-13-E1-c4' },
      { id: 'FIS-13-E1-i6', label: { es: "Un empleado se lastima en el trayecto directo de su casa al trabajo", en: "An employee is injured on the direct commute from home to work" }, correctCategoryId: 'FIS-13-E1-c1' },
    ],
    explanation: {
      es: "Los accidentes en el trabajo o en el trayecto directo casa-trabajo son riesgos de trabajo. Las enfermedades comunes y la maternidad van a enfermedades y maternidad. La Afore se alimenta del seguro de RCV, y las estancias infantiles son del seguro de guarderías. Error común: poner el accidente de trayecto en enfermedades, cuando la ley lo considera riesgo de trabajo.",
      en: "Accidents at work or on the direct home-to-work commute are occupational risks. Common illnesses and maternity go to sickness and maternity. The Afore is funded by the RCV branch, and childcare centers belong to the daycare branch. Common mistake: placing the commute accident under sickness, when the law treats it as an occupational risk.",
    },
    difficulty: 2,
    points: 15,
    competency: 'social-security',
  },
  {
    id: 'FIS-13-E2',
    level: 5,
    module: 'FIS-13',
    kind: 'fields',
    flavor: 'case',
    context: {
      es: "Una estética contrata a Itzel con salario diario hipotético de $400 y prestaciones mínimas de primer año: 15 días de aguinaldo, 12 días de vacaciones y 25% de prima vacacional. No recibe otras prestaciones.",
      en: "A beauty salon hires Itzel at a hypothetical $400 daily wage with first-year minimum benefits: 15 days of aguinaldo, 12 vacation days and a 25% vacation premium. She receives no other benefits.",
    },
    prompt: {
      es: "Calcula el factor de integración (4 decimales) y el salario base de cotización diario de Itzel (2 decimales).",
      en: "Compute Itzel's integration factor (4 decimals) and daily contribution base salary (2 decimals).",
    },
    fields: [
      { id: 'f1', label: { es: "Factor de integración", en: "Integration factor" }, answer: 1.0493, unit: 'none', tolerance: { abs: 0.0002 } },
      { id: 'f2', label: { es: "SBC diario", en: "Daily SBC" }, answer: 419.73, unit: 'MXN', tolerance: { abs: 0.1 } },
    ],
    explanation: {
      es: "Prima vacacional: 12 × 0.25 = 3 días. Factor: (365 + 15 + 3) ÷ 365 = 383 ÷ 365 ≈ 1.0493. SBC: 400 × 383 ÷ 365 ≈ $419.73. Error común: sumar los 12 días completos de vacaciones al factor; las vacaciones ya están pagadas dentro de los 365 días, solo se integra la prima.",
      en: "Vacation premium: 12 × 0.25 = 3 days. Factor: (365 + 15 + 3) ÷ 365 = 383 ÷ 365 ≈ 1.0493. SBC: 400 × 383 ÷ 365 ≈ $419.73. Common mistake: adding all 12 vacation days to the factor; vacation days are already paid within the 365 days, only the premium is integrated.",
    },
    difficulty: 2,
    points: 15,
    competency: 'social-security',
  },
  {
    id: 'FIS-13-E3',
    level: 5,
    module: 'FIS-13',
    kind: 'numeric',
    flavor: 'case',
    context: {
      es: "Una imprenta tiene un trabajador con SBC de $650 diarios. El bimestre a pagar tiene 61 días y el trabajador no tiene crédito de vivienda.",
      en: "A print shop has a worker with a $650 daily SBC. The two-month period has 61 days and the worker has no housing loan.",
    },
    prompt: {
      es: "¿Cuánto debe aportar el patrón al INFONAVIT por este trabajador en el bimestre? Responde en pesos.",
      en: "How much must the employer contribute to INFONAVIT for this worker for the two-month period? Answer in pesos.",
    },
    answer: 1982.5,
    unit: 'MXN',
    decimals: 2,
    tolerance: { abs: 0.5 },
    explanation: {
      es: "Aportación = SBC × días × 5% = 650 × 61 × 0.05 = 39,650 × 0.05 = $1,982.50. La paga íntegra el patrón. Error común: descontarle una parte al trabajador; la aportación de vivienda no tiene parte obrera (solo se le descuenta el abono si tiene crédito).",
      en: "Contribution = SBC × days × 5% = 650 × 61 × 0.05 = 39,650 × 0.05 = $1,982.50. The employer pays all of it. Common mistake: deducting part from the worker; the housing contribution has no worker share (only the loan installment is deducted if there is a loan).",
    },
    difficulty: 1,
    points: 10,
    competency: 'social-security',
  },
  {
    id: 'FIS-13-E4',
    level: 5,
    module: 'FIS-13',
    kind: 'mcq',
    flavor: 'concept',
    prompt: {
      es: "¿Cuál es la periodicidad correcta de pago de las cuotas y aportaciones de seguridad social de un patrón?",
      en: "What is the correct payment frequency of an employer's social security contributions?",
    },
    options: [
      { id: 'FIS-13-E4-a', text: { es: "Todo se paga una vez al año, junto con la declaración anual", en: "Everything is paid once a year, with the annual return" } },
      { id: 'FIS-13-E4-b', text: { es: "Seguros del IMSS cada mes; retiro, cesantía y vejez e INFONAVIT cada bimestre", en: "IMSS insurance monthly; retirement, old-age unemployment and old age and INFONAVIT every two months" } },
      { id: 'FIS-13-E4-c', text: { es: "INFONAVIT cada mes; IMSS cada bimestre", en: "INFONAVIT monthly; IMSS every two months" } },
      { id: 'FIS-13-E4-d', text: { es: "Solo cuando el trabajador usa un servicio del IMSS", en: "Only when the worker uses an IMSS service" } },
    ],
    correctOptionId: 'FIS-13-E4-b',
    explanation: {
      es: "Las cuotas de los seguros del IMSS se enteran cada mes, y las de RCV y la aportación al INFONAVIT cada bimestre. Error común: creer que se paga solo si el trabajador se enferma; es un seguro, se paga siempre que hay relación laboral.",
      en: "IMSS insurance contributions are remitted monthly, and RCV and the INFONAVIT contribution every two months. Common mistake: believing you pay only if the worker gets sick; it is insurance, paid whenever there is an employment relationship.",
    },
    difficulty: 1,
    points: 10,
    competency: 'social-security',
  },
  {
    id: 'FIS-13-E5',
    level: 5,
    module: 'FIS-13',
    kind: 'truefalse',
    flavor: 'case',
    context: {
      es: "Un restaurante le paga a un mesero $300 diarios de sueldo base, pero reporta al IMSS solo $250 diarios para pagar menos cuotas, y no avisó el aumento que le dio hace tres meses.",
      en: "A restaurant pays a waiter a $300 daily base wage, but reports only $250 per day to IMSS to pay lower contributions, and did not report the raise it gave him three months ago.",
    },
    prompt: {
      es: "Si el IMSS lo detecta, el restaurante solo tendría que pagar la diferencia de cuotas, sin actualización ni recargos, porque las cuotas no son impuestos.",
      en: "If IMSS detects it, the restaurant would only have to pay the contribution difference, without adjustment or surcharges, because contributions are not taxes.",
    },
    answer: false,
    explanation: {
      es: "Falso. Las cuotas del IMSS son contribuciones de seguridad social: las diferencias se cobran con actualización y recargos, y el patrón puede ser multado por no avisar la modificación salarial. Además, si el trabajador se enferma, sus subsidios se calculan con un salario menor al real. Error común: pensar que, por no ser impuesto, no aplican las consecuencias fiscales.",
      en: "False. IMSS contributions are social security contributions: differences are collected with adjustment and surcharges, and the employer can be fined for not reporting the salary change. Also, if the worker gets sick, his benefits are computed on a lower-than-real salary. Common mistake: thinking that because they are not a tax, tax consequences do not apply.",
    },
    difficulty: 2,
    points: 15,
    competency: 'social-security',
  },
  {
    id: 'FIS-13-E6',
    level: 5,
    module: 'FIS-13',
    kind: 'multi',
    flavor: 'concept',
    prompt: {
      es: "¿Cuáles son obligaciones del patrón en materia de IMSS e INFONAVIT? Selecciona todas las que apliquen.",
      en: "Which are the employer's IMSS and INFONAVIT obligations? Select all that apply.",
    },
    options: [
      { id: 'FIS-13-E6-a', text: { es: "Registrarse como patrón e inscribir a sus trabajadores", en: "Register as an employer and enroll its workers" } },
      { id: 'FIS-13-E6-b', text: { es: "Retener la cuota obrera y enterarla junto con la patronal", en: "Withhold the worker's share and remit it with the employer's share" } },
      { id: 'FIS-13-E6-c', text: { es: "Pedir al trabajador que pague por su cuenta la aportación del 5% al INFONAVIT", en: "Ask the worker to pay the 5% INFONAVIT contribution on their own" } },
      { id: 'FIS-13-E6-d', text: { es: "Avisar altas, bajas y modificaciones de salario", en: "Report hirings, terminations and salary changes" } },
      { id: 'FIS-13-E6-e', text: { es: "Revisar cada año su prima de riesgo de trabajo", en: "Review its occupational risk premium every year" } },
    ],
    correctOptionIds: ['FIS-13-E6-a', 'FIS-13-E6-b', 'FIS-13-E6-d', 'FIS-13-E6-e'],
    explanation: {
      es: "El patrón se registra, inscribe, retiene la cuota obrera, presenta avisos y revisa anualmente su prima de riesgo. La aportación del 5% al INFONAVIT es costo exclusivo del patrón, no del trabajador. Error común: confundir esa aportación con el descuento del crédito INFONAVIT, que sí sale del sueldo del trabajador.",
      en: "The employer registers, enrolls, withholds the worker's share, files notices and reviews its risk premium annually. The 5% INFONAVIT contribution is solely the employer's cost, not the worker's. Common mistake: confusing that contribution with the INFONAVIT loan deduction, which does come out of the worker's pay.",
    },
    difficulty: 2,
    points: 15,
    competency: 'social-security',
  },

  // ═════════════════════════ FIS-14 ═════════════════════════
  {
    id: 'FIS-14-E1',
    level: 5,
    module: 'FIS-14',
    kind: 'classify',
    flavor: 'concept',
    prompt: {
      es: "Clasifica cada deber de un contribuyente como obligación sustantiva o formal.",
      en: "Classify each taxpayer duty as a substantive or a formal obligation.",
    },
    categories: [
      { id: 'FIS-14-E1-c1', label: { es: "Sustantiva (pagar)", en: "Substantive (paying)" } },
      { id: 'FIS-14-E1-c2', label: { es: "Formal", en: "Formal" } },
    ],
    items: [
      { id: 'FIS-14-E1-i1', label: { es: "Enterar el IVA a cargo del mes", en: "Remit the month's VAT payable" }, correctCategoryId: 'FIS-14-E1-c1' },
      { id: 'FIS-14-E1-i2', label: { es: "Presentar el aviso de cambio de domicilio fiscal", en: "File the change-of-tax-address notice" }, correctCategoryId: 'FIS-14-E1-c2' },
      { id: 'FIS-14-E1-i3', label: { es: "Pagar el ISR retenido a los empleados", en: "Pay the income tax withheld from employees" }, correctCategoryId: 'FIS-14-E1-c1' },
      { id: 'FIS-14-E1-i4', label: { es: "Habilitar y revisar el buzón tributario", en: "Enable and check the tax mailbox" }, correctCategoryId: 'FIS-14-E1-c2' },
      { id: 'FIS-14-E1-i5', label: { es: "Presentar la declaración anual aunque el resultado sea cero", en: "File the annual return even if the result is zero" }, correctCategoryId: 'FIS-14-E1-c2' },
      { id: 'FIS-14-E1-i6', label: { es: "Conservar la documentación contable durante el plazo legal", en: "Keep accounting documentation for the legal period" }, correctCategoryId: 'FIS-14-E1-c2' },
    ],
    explanation: {
      es: "Sustantiva es entregar dinero al fisco: el IVA a cargo y el ISR retenido. Todo lo demás (avisos, buzón, declarar, conservar) son obligaciones formales. Error común: clasificar la declaración en cero como sustantiva; si no hay pago, presentarla es un deber formal, pero igual se multa si no se cumple.",
      en: "Substantive means handing money to the authority: VAT payable and income tax withheld. Everything else (notices, mailbox, filing, record keeping) is formal. Common mistake: classifying the zero return as substantive; with no payment, filing it is a formal duty, but failing to do so is still fined.",
    },
    difficulty: 1,
    points: 10,
    competency: 'tax-compliance',
  },
  {
    id: 'FIS-14-E2',
    level: 5,
    module: 'FIS-14',
    kind: 'fields',
    flavor: 'case',
    context: {
      es: "Un despacho de arquitectura omitió pagar $30,000 de ISR de un pago provisional y lo paga 5 meses tarde, por su cuenta, antes de cualquier requerimiento. Factor de actualización hipotético: 1.0200. Tasa de recargos hipotética: 1.47% mensual.",
      en: "An architecture firm failed to pay $30,000 of income tax on a provisional payment and pays it 5 months late, on its own, before any demand. Hypothetical adjustment factor: 1.0200. Hypothetical surcharge rate: 1.47% per month.",
    },
    prompt: {
      es: "Calcula la contribución actualizada, los recargos y el total a pagar, en pesos.",
      en: "Compute the adjusted contribution, the surcharges and the total payable, in pesos.",
    },
    fields: [
      { id: 'f1', label: { es: "Contribución actualizada", en: "Adjusted contribution" }, answer: 30600, unit: 'MXN', tolerance: { abs: 0.5 } },
      { id: 'f2', label: { es: "Recargos", en: "Surcharges" }, answer: 2249.1, unit: 'MXN', tolerance: { abs: 0.5 } },
      { id: 'f3', label: { es: "Total a pagar", en: "Total payable" }, answer: 32849.1, unit: 'MXN', tolerance: { abs: 0.5 } },
    ],
    explanation: {
      es: "Actualizada: 30,000 × 1.02 = $30,600. Tasa acumulada: 1.47% × 5 = 7.35%. Recargos: 30,600 × 0.0735 = $2,249.10. Total: 30,600 + 2,249.10 = $32,849.10. Al ser espontáneo, en general no hay multa. Error común: calcular los recargos sobre los $30,000 originales; se calculan sobre el monto actualizado.",
      en: "Adjusted: 30,000 × 1.02 = $30,600. Cumulative rate: 1.47% × 5 = 7.35%. Surcharges: 30,600 × 0.0735 = $2,249.10. Total: 30,600 + 2,249.10 = $32,849.10. Being voluntary, in general there is no fine. Common mistake: computing surcharges on the original $30,000; they are computed on the adjusted amount.",
    },
    difficulty: 3,
    points: 20,
    competency: 'tax-compliance',
  },
  {
    id: 'FIS-14-E3',
    level: 5,
    module: 'FIS-14',
    kind: 'mcq',
    flavor: 'concept',
    prompt: {
      es: "Según la regla general, ¿cuándo vence el pago provisional de ISR correspondiente a agosto?",
      en: "Under the general rule, when is the provisional income tax payment for August due?",
    },
    options: [
      { id: 'FIS-14-E3-a', text: { es: "El último día de agosto", en: "The last day of August" } },
      { id: 'FIS-14-E3-b', text: { es: "A más tardar el 17 de septiembre", en: "No later than September 17" } },
      { id: 'FIS-14-E3-c', text: { es: "En la declaración anual del año siguiente", en: "In the following year's annual return" } },
      { id: 'FIS-14-E3-d', text: { es: "Cuando el SAT envíe una carta invitación", en: "When SAT sends an invitation letter" } },
    ],
    correctOptionId: 'FIS-14-E3-b',
    explanation: {
      es: "Los pagos provisionales mensuales vencen, en general, a más tardar el día 17 del mes siguiente al que corresponden; si es inhábil, se recorre al siguiente día hábil. Error común: esperar a la anual; los pagos provisionales son anticipos obligatorios durante el año.",
      en: "Monthly provisional payments are generally due no later than the 17th of the month following the one they cover; if it is a non-business day, it moves to the next business day. Common mistake: waiting for the annual return; provisional payments are mandatory advances during the year.",
    },
    difficulty: 1,
    points: 10,
    competency: 'tax-compliance',
  },
  {
    id: 'FIS-14-E4',
    level: 5,
    module: 'FIS-14',
    kind: 'truefalse',
    flavor: 'concept',
    prompt: {
      es: "Una notificación que el SAT deposita en tu buzón tributario puede surtir efectos aunque tú no la abras.",
      en: "A notice SAT places in your tax mailbox can take effect even if you do not open it.",
    },
    answer: true,
    explanation: {
      es: "Verdadero. Si no abres la notificación dentro del plazo que marca la ley, se tiene por hecha y los plazos para responder empiezan a correr. Por eso es obligatorio habilitar medios de contacto y revisarlo. Error común: creer que si no lo abres \"no te enteraste\" y no cuenta.",
      en: "True. If you do not open the notice within the period set by law, it is deemed delivered and the deadlines to respond start running. That is why enabling contact channels and checking it is mandatory. Common mistake: believing that if you do not open it you \"never found out\" and it does not count.",
    },
    difficulty: 1,
    points: 10,
    competency: 'tax-compliance',
  },
  {
    id: 'FIS-14-E5',
    level: 5,
    module: 'FIS-14',
    kind: 'formula',
    flavor: 'concept',
    prompt: {
      es: "Completa la fórmula del total a pagar por una contribución pagada fuera de plazo.",
      en: "Complete the formula for the total due on a contribution paid late.",
    },
    template: 'Total = contribución × {{b1}} + ({{b2}} × {{b3}} × meses de atraso)',
    blanks: [
      {
        id: 'b1',
        options: [
          { id: 'FIS-14-E5-b1-a', text: { es: "factor de actualización", en: "adjustment factor" } },
          { id: 'FIS-14-E5-b1-b', text: { es: "tasa de IVA", en: "VAT rate" } },
          { id: 'FIS-14-E5-b1-c', text: { es: "tasa marginal", en: "marginal rate" } },
        ],
        correctOptionId: 'FIS-14-E5-b1-a',
      },
      {
        id: 'b2',
        options: [
          { id: 'FIS-14-E5-b2-a', text: { es: "contribución original", en: "original contribution" } },
          { id: 'FIS-14-E5-b2-b', text: { es: "contribución actualizada", en: "adjusted contribution" } },
          { id: 'FIS-14-E5-b2-c', text: { es: "ingreso del mes", en: "month's income" } },
        ],
        correctOptionId: 'FIS-14-E5-b2-b',
      },
      {
        id: 'b3',
        options: [
          { id: 'FIS-14-E5-b3-a', text: { es: "tasa mensual de recargos", en: "monthly surcharge rate" } },
          { id: 'FIS-14-E5-b3-b', text: { es: "tasa de inflación anual", en: "annual inflation rate" } },
          { id: 'FIS-14-E5-b3-c', text: { es: "porcentaje de multa", en: "fine percentage" } },
        ],
        correctOptionId: 'FIS-14-E5-b3-a',
      },
    ],
    explanation: {
      es: "Primero se actualiza la contribución con el factor derivado del INPC; luego se aplican los recargos (tasa mensual × meses) sobre la contribución actualizada. Error común: aplicar los recargos sobre la contribución original o usar la inflación anual como tasa de recargos.",
      en: "First the contribution is adjusted with the INPC-based factor; then surcharges (monthly rate × months) are applied on the adjusted contribution. Common mistake: applying surcharges on the original contribution or using annual inflation as the surcharge rate.",
    },
    difficulty: 2,
    points: 15,
    competency: 'tax-compliance',
  },
  {
    id: 'FIS-14-E6',
    level: 5,
    module: 'FIS-14',
    kind: 'mcq',
    flavor: 'case',
    context: {
      es: "Una empresa de limpieza quiere ganar un contrato con una cadena de hoteles. El área de compras del hotel le pide un documento del SAT que demuestre que está al corriente. La empresa tiene una declaración mensual sin presentar.",
      en: "A cleaning company wants to win a contract with a hotel chain. The hotel's purchasing department asks for a SAT document proving it is up to date. The company has one monthly return not filed.",
    },
    prompt: {
      es: "¿Qué documento le piden y qué le conviene hacer?",
      en: "Which document are they asking for and what should the company do?",
    },
    options: [
      { id: 'FIS-14-E6-a', text: { es: "La constancia de situación fiscal; basta con descargarla aunque falte la declaración", en: "The tax status certificate; downloading it is enough even with the missing return" } },
      { id: 'FIS-14-E6-b', text: { es: "La opinión de cumplimiento; debe presentar la declaración pendiente para que salga positiva", en: "The compliance opinion; it must file the pending return so it comes out positive" } },
      { id: 'FIS-14-E6-c', text: { es: "Un CFDI de nómina; no necesita hacer nada más", en: "A payroll CFDI; it needs to do nothing else" } },
      { id: 'FIS-14-E6-d', text: { es: "La e.firma; debe renovarla aunque esté vigente", en: "The e.firma; it must renew it even though it is valid" } },
    ],
    correctOptionId: 'FIS-14-E6-b',
    explanation: {
      es: "La opinión del cumplimiento de obligaciones fiscales indica si estás al corriente (positiva) o no (negativa). Una declaración omitida la vuelve negativa, así que debe presentarla, con lo que corresponda, para obtenerla positiva. Error común: confundirla con la constancia de situación fiscal, que solo muestra tus datos de registro.",
      en: "The tax compliance opinion shows whether you are up to date (positive) or not (negative). An omitted return makes it negative, so the company must file it, with whatever is due, to get a positive one. Common mistake: confusing it with the tax status certificate, which only shows your registration data.",
    },
    difficulty: 2,
    points: 15,
    competency: 'tax-compliance',
  },

  // ═════════════════════════ FIS-15 ═════════════════════════
  {
    id: 'FIS-15-E1',
    level: 5,
    module: 'FIS-15',
    kind: 'classify',
    flavor: 'case',
    prompt: {
      es: "Clasifica cada decisión como planeación fiscal lícita o como evasión/simulación.",
      en: "Classify each decision as lawful tax planning or as evasion/sham.",
    },
    categories: [
      { id: 'FIS-15-E1-c1', label: { es: "Planeación lícita", en: "Lawful planning" } },
      { id: 'FIS-15-E1-c2', label: { es: "Evasión o simulación", en: "Evasion or sham" } },
    ],
    items: [
      { id: 'FIS-15-E1-i1', label: { es: "Hacer aportaciones voluntarias deducibles a tu cuenta de retiro dentro del tope", en: "Make deductible voluntary contributions to your retirement account within the cap" }, correctCategoryId: 'FIS-15-E1-c1' },
      { id: 'FIS-15-E1-i2', label: { es: "Comprar facturas de servicios que nunca se recibieron", en: "Buy invoices for services never received" }, correctCategoryId: 'FIS-15-E1-c2' },
      { id: 'FIS-15-E1-i3', label: { es: "Elegir el régimen simplificado porque cumples sus requisitos", en: "Choose the simplified regime because you meet its requirements" }, correctCategoryId: 'FIS-15-E1-c1' },
      { id: 'FIS-15-E1-i4', label: { es: "Cobrar parte de las ventas en efectivo sin facturar ni declarar", en: "Collect part of sales in cash without invoicing or declaring" }, correctCategoryId: 'FIS-15-E1-c2' },
      { id: 'FIS-15-E1-i5', label: { es: "Comprar en diciembre un equipo que de verdad necesitas, para deducirlo ese año", en: "Buy in December equipment you really need, to deduct it that year" }, correctCategoryId: 'FIS-15-E1-c1' },
      { id: 'FIS-15-E1-i6', label: { es: "Cambiar la fecha de un contrato ya firmado para que el gasto caiga en el año anterior", en: "Change the date of an already signed contract so the expense falls in the prior year" }, correctCategoryId: 'FIS-15-E1-c2' },
    ],
    explanation: {
      es: "Lícito: usar opciones que la ley ofrece con operaciones reales (aportaciones dentro del tope, régimen que te corresponde, inversión real en el momento conveniente). Evasión o simulación: facturas falsas, ocultar ingresos y alterar documentos. Error común: pensar que cambiar una fecha es \"solo planeación de tiempos\"; planear el momento se hace antes de operar, no reescribiendo el pasado.",
      en: "Lawful: using options the law offers with real transactions (contributions within the cap, the regime you qualify for, a real investment at a convenient time). Evasion or sham: fake invoices, hiding income and altering documents. Common mistake: thinking that changing a date is \"just timing planning\"; timing is planned before acting, not by rewriting the past.",
    },
    difficulty: 1,
    points: 10,
    competency: 'tax-planning',
  },
  {
    id: 'FIS-15-E2',
    level: 5,
    module: 'FIS-15',
    kind: 'numeric',
    flavor: 'case',
    context: {
      es: "Ernesto, ingeniero asalariado, tiene una tasa marginal hipotética de 32%. Hace una aportación voluntaria para su retiro de $25,000 que es deducible porque cabe en los topes y la pagó por transferencia.",
      en: "Ernesto, a salaried engineer, has a hypothetical 32% marginal rate. He makes a $25,000 voluntary retirement contribution that is deductible because it fits within the caps and he paid it by transfer.",
    },
    prompt: {
      es: "¿Cuánto ISR se ahorra Ernesto con esa deducción? Responde en pesos.",
      en: "How much income tax does Ernesto save with that deduction? Answer in pesos.",
    },
    answer: 8000,
    unit: 'MXN',
    decimals: 0,
    tolerance: { abs: 0.5 },
    explanation: {
      es: "Ahorro = deducción × tasa marginal = 25,000 × 0.32 = $8,000. Error común: pensar que la deducción se \"devuelve\" completa ($25,000); la deducción reduce la base, y lo que ahorras es solo la parte del impuesto que esa base habría pagado.",
      en: "Savings = deduction × marginal rate = 25,000 × 0.32 = $8,000. Common mistake: thinking the full deduction ($25,000) is \"refunded\"; a deduction reduces the base, and what you save is only the tax that base would have paid.",
    },
    difficulty: 1,
    points: 10,
    competency: 'tax-planning',
  },
  {
    id: 'FIS-15-E3',
    level: 5,
    module: 'FIS-15',
    kind: 'mcq',
    flavor: 'concept',
    prompt: {
      es: "¿Qué significa, en planeación fiscal, la \"materialidad\" de una operación?",
      en: "In tax planning, what does the \"substance\" (materialidad) of a transaction mean?",
    },
    options: [
      { id: 'FIS-15-E3-a', text: { es: "Que el monto sea grande o importante", en: "That the amount is large or significant" } },
      { id: 'FIS-15-E3-b', text: { es: "Que exista un CFDI válido, sin importar nada más", en: "That a valid CFDI exists, regardless of anything else" } },
      { id: 'FIS-15-E3-c', text: { es: "Poder demostrar con pruebas que la operación realmente ocurrió", en: "Being able to prove with evidence that the transaction really happened" } },
      { id: 'FIS-15-E3-d', text: { es: "Que la operación se haya pagado en efectivo", en: "That the transaction was paid in cash" } },
    ],
    correctOptionId: 'FIS-15-E3-c',
    explanation: {
      es: "Materialidad es la prueba de que la operación existió: contratos, entregables, evidencia del servicio y pagos bancarizados. El CFDI es necesario pero no suficiente. Error común: confundirla con la \"importancia relativa\" de auditoría financiera, que habla del tamaño de las cifras.",
      en: "Substance is proof that the transaction existed: contracts, deliverables, evidence of the service and bank payments. The CFDI is necessary but not sufficient. Common mistake: confusing it with financial-audit \"materiality\", which refers to the size of the figures.",
    },
    difficulty: 1,
    points: 10,
    competency: 'tax-planning',
  },
  {
    id: 'FIS-15-E4',
    level: 5,
    module: 'FIS-15',
    kind: 'multi',
    flavor: 'case',
    context: {
      es: "Una constructora evalúa contratar \"servicios de consultoría\" por $2,000,000 con una empresa creada hace dos meses, sin empleados ni oficinas, que promete \"bajar la carga fiscal\".",
      en: "A construction company is considering hiring \"consulting services\" for $2,000,000 from a company created two months ago, with no employees or offices, which promises to \"lower the tax burden\".",
    },
    prompt: {
      es: "¿Qué señales de alerta presenta esta propuesta? Selecciona todas las que apliquen.",
      en: "What red flags does this proposal show? Select all that apply.",
    },
    options: [
      { id: 'FIS-15-E4-a', text: { es: "El proveedor no tiene personal ni instalaciones para prestar el servicio", en: "The supplier has no staff or facilities to provide the service" } },
      { id: 'FIS-15-E4-b', text: { es: "El beneficio que se ofrece es solo fiscal, sin un beneficio económico real", en: "The benefit offered is only tax-related, with no real economic benefit" } },
      { id: 'FIS-15-E4-c', text: { es: "El proveedor podría terminar en la lista de operaciones presuntamente inexistentes", en: "The supplier could end up on the list of presumably non-existent transactions" } },
      { id: 'FIS-15-E4-d', text: { es: "Que el pago se haría por transferencia bancaria", en: "That the payment would be made by bank transfer" } },
      { id: 'FIS-15-E4-e', text: { es: "El esquema podría ser reportable y requerir revelación al SAT", en: "The scheme could be reportable and require disclosure to SAT" } },
    ],
    correctOptionIds: ['FIS-15-E4-a', 'FIS-15-E4-b', 'FIS-15-E4-c', 'FIS-15-E4-e'],
    explanation: {
      es: "Falta de medios (no hay materialidad), beneficio solo fiscal (sin razón de negocios), riesgo de lista de operaciones inexistentes y posible esquema reportable son alertas claras. Pagar por transferencia, por sí solo, es un requisito sano, no una alerta. Error común: creer que con pagar por banco y tener CFDI la operación queda protegida.",
      en: "Lack of means (no substance), a tax-only benefit (no business purpose), risk of the non-existent transactions list and a possible reportable scheme are clear red flags. Paying by transfer, on its own, is a healthy requirement, not a red flag. Common mistake: believing that paying through a bank and having a CFDI protects the transaction.",
    },
    difficulty: 2,
    points: 15,
    competency: 'tax-planning',
  },
  {
    id: 'FIS-15-E5',
    level: 5,
    module: 'FIS-15',
    kind: 'truefalse',
    flavor: 'concept',
    prompt: {
      es: "Si una serie de operaciones solo produce un beneficio fiscal y ningún beneficio económico razonable, la autoridad puede darle los efectos fiscales de la operación que normalmente se habría realizado.",
      en: "If a series of transactions produces only a tax benefit and no reasonable economic benefit, the authority can give it the tax effects of the transaction that would normally have been carried out.",
    },
    answer: true,
    explanation: {
      es: "Verdadero. Es la idea de la regla de razón de negocios del CFF: sin beneficio económico razonable distinto del fiscal, el SAT puede recaracterizar la operación para efectos fiscales. Error común: pensar que mientras cada paso sea legal por separado, el conjunto no puede cuestionarse.",
      en: "True. That is the idea of the CFF's business-purpose rule: without a reasonable economic benefit other than the tax one, SAT can recharacterize the transaction for tax purposes. Common mistake: thinking that as long as each step is legal separately, the whole cannot be challenged.",
    },
    difficulty: 2,
    points: 15,
    competency: 'tax-planning',
  },
  {
    id: 'FIS-15-E6',
    level: 5,
    module: 'FIS-15',
    kind: 'fields',
    flavor: 'case',
    context: {
      es: "Laura, consultora, compara dos opciones lícitas para el año. Opción A: no hace nada extra. Opción B: paga $30,000 de colegiatura deducible de su hija y aporta $20,000 deducibles a su plan de retiro, ambos dentro de topes y por transferencia. Su tasa marginal hipotética es 30% y suponemos que no cambia con las deducciones.",
      en: "Laura, a consultant, compares two lawful options for the year. Option A: she does nothing extra. Option B: she pays $30,000 of her daughter's deductible tuition and contributes $20,000 deductible to her retirement plan, both within caps and by transfer. Her hypothetical marginal rate is 30% and we assume it does not change with the deductions.",
    },
    prompt: {
      es: "En la opción B, calcula el total de deducciones adicionales y el ahorro de ISR frente a la opción A, en pesos.",
      en: "For option B, compute the total additional deductions and the income tax savings versus option A, in pesos.",
    },
    fields: [
      { id: 'f1', label: { es: "Deducciones adicionales", en: "Additional deductions" }, answer: 50000, unit: 'MXN', tolerance: { abs: 0.5 } },
      { id: 'f2', label: { es: "Ahorro de ISR", en: "Income tax savings" }, answer: 15000, unit: 'MXN', tolerance: { abs: 0.5 } },
    ],
    explanation: {
      es: "Deducciones: 30,000 + 20,000 = $50,000. Ahorro: 50,000 × 30% = $15,000. Son gastos reales y permitidos, así que es planeación lícita. Error común: restar los $50,000 directamente del impuesto; las deducciones reducen la base, no el impuesto peso por peso.",
      en: "Deductions: 30,000 + 20,000 = $50,000. Savings: 50,000 × 30% = $15,000. They are real, allowed expenses, so it is lawful planning. Common mistake: subtracting the $50,000 directly from the tax; deductions reduce the base, not the tax peso for peso.",
    },
    difficulty: 2,
    points: 15,
    competency: 'tax-planning',
  },

  // ═════════════════════════ FIS-16 ═════════════════════════
  {
    id: 'FIS-16-E1',
    level: 5,
    module: 'FIS-16',
    kind: 'mcq',
    flavor: 'concept',
    prompt: {
      es: "Según el criterio de residencia, ¿sobre qué ingresos paga ISR en México una persona residente en el país?",
      en: "Under the residence criterion, on which income does a Mexican resident pay income tax in Mexico?",
    },
    options: [
      { id: 'FIS-16-E1-a', text: { es: "Solo sobre lo que gana dentro de México", en: "Only on what they earn inside Mexico" } },
      { id: 'FIS-16-E1-b', text: { es: "Sobre todos sus ingresos, sin importar el país donde se generen", en: "On all their income, regardless of the country where it is generated" } },
      { id: 'FIS-16-E1-c', text: { es: "Solo sobre lo que deposita en bancos mexicanos", en: "Only on what they deposit in Mexican banks" } },
      { id: 'FIS-16-E1-d', text: { es: "Sobre nada, si ya pagó impuesto en otro país", en: "On nothing, if they already paid tax in another country" } },
    ],
    correctOptionId: 'FIS-16-E1-b',
    explanation: {
      es: "Un residente en México tributa por su ingreso mundial. Si pagó impuesto en el extranjero, puede acreditarlo con límite, pero el ingreso sigue siendo gravable aquí. Error común: pensar que lo ganado fuera \"no cuenta\" o que basta con haber pagado allá para no declararlo.",
      en: "A Mexican resident is taxed on worldwide income. If tax was paid abroad, it can be credited with a limit, but the income is still taxable here. Common mistake: thinking that income earned abroad \"does not count\" or that paying abroad means you do not declare it.",
    },
    difficulty: 1,
    points: 10,
    competency: 'international-tax',
  },
  {
    id: 'FIS-16-E2',
    level: 5,
    module: 'FIS-16',
    kind: 'fields',
    flavor: 'case',
    context: {
      es: "Mariana, residente en México, cobró $300,000 por un proyecto de diseño realizado en otro país, que le retuvo un impuesto hipotético de $45,000. El ISR mexicano que corresponde a ese ingreso es, hipotéticamente, $90,000.",
      en: "Mariana, a Mexican resident, earned $300,000 for a design project done in another country, which withheld a hypothetical $45,000 tax. The Mexican income tax attributable to that income is, hypothetically, $90,000.",
    },
    prompt: {
      es: "Calcula el impuesto extranjero acreditable, el ISR que paga en México por ese ingreso y su carga total, en pesos.",
      en: "Compute the creditable foreign tax, the income tax she pays in Mexico on that income and her total burden, in pesos.",
    },
    fields: [
      { id: 'f1', label: { es: "Impuesto acreditable", en: "Creditable tax" }, answer: 45000, unit: 'MXN', tolerance: { abs: 0.5 } },
      { id: 'f2', label: { es: "ISR a pagar en México", en: "Income tax payable in Mexico" }, answer: 45000, unit: 'MXN', tolerance: { abs: 0.5 } },
      { id: 'f3', label: { es: "Carga total (extranjero + México)", en: "Total burden (abroad + Mexico)" }, answer: 90000, unit: 'MXN', tolerance: { abs: 0.5 } },
    ],
    explanation: {
      es: "Acreditable = menor entre 45,000 y 90,000 = $45,000. En México paga 90,000 − 45,000 = $45,000. Carga total: 45,000 + 45,000 = $90,000, igual que si todo se hubiera gravado solo en México. Error común: sumar ambos impuestos sin acreditar ($135,000), que es justo la doble imposición que se quiere evitar.",
      en: "Creditable = lower of 45,000 and 90,000 = $45,000. In Mexico she pays 90,000 − 45,000 = $45,000. Total burden: 45,000 + 45,000 = $90,000, the same as if all of it were taxed only in Mexico. Common mistake: adding both taxes without crediting ($135,000), which is exactly the double taxation to be avoided.",
    },
    difficulty: 2,
    points: 15,
    competency: 'international-tax',
  },
  {
    id: 'FIS-16-E3',
    level: 5,
    module: 'FIS-16',
    kind: 'numeric',
    flavor: 'case',
    context: {
      es: "Una empresa mexicana pagará regalías por $800,000 a una empresa residente en un país con el que México tiene tratado. Supón una tasa de retención hipotética de 25% según la ley interna y de 10% según el tratado. La empresa extranjera entregó su constancia de residencia fiscal y cumple los demás requisitos.",
      en: "A Mexican company will pay $800,000 in royalties to a company resident in a country with which Mexico has a treaty. Assume a hypothetical withholding rate of 25% under domestic law and 10% under the treaty. The foreign company provided its tax residence certificate and meets the other requirements.",
    },
    prompt: {
      es: "¿Cuánto ISR debe retener la empresa mexicana? Responde en pesos.",
      en: "How much income tax must the Mexican company withhold? Answer in pesos.",
    },
    answer: 80000,
    unit: 'MXN',
    decimals: 0,
    tolerance: { abs: 0.5 },
    explanation: {
      es: "Con requisitos cumplidos aplica la tasa del tratado: 800,000 × 10% = $80,000 (frente a $200,000 con la tasa interna). Error común: retener la tasa interna aunque se acreditó la residencia, o aplicar el tratado sin constancia; en ese caso el retenedor puede responder por la diferencia.",
      en: "With requirements met, the treaty rate applies: 800,000 × 10% = $80,000 (versus $200,000 at the domestic rate). Common mistake: withholding the domestic rate despite proven residence, or applying the treaty without the certificate; in that case the withholding agent may be liable for the difference.",
    },
    difficulty: 2,
    points: 15,
    competency: 'international-tax',
  },
  {
    id: 'FIS-16-E4',
    level: 5,
    module: 'FIS-16',
    kind: 'classify',
    flavor: 'concept',
    prompt: {
      es: "Relaciona cada situación con el concepto de fiscalidad internacional que aplica.",
      en: "Match each situation with the international tax concept that applies.",
    },
    categories: [
      { id: 'FIS-16-E4-c1', label: { es: "Establecimiento permanente", en: "Permanent establishment" } },
      { id: 'FIS-16-E4-c2', label: { es: "Precios de transferencia", en: "Transfer pricing" } },
      { id: 'FIS-16-E4-c3', label: { es: "Intercambio de información", en: "Information exchange" } },
    ],
    items: [
      { id: 'FIS-16-E4-i1', label: { es: "Una empresa española abre una sucursal con oficina en Guadalajara", en: "A Spanish company opens a branch with an office in Guadalajara" }, correctCategoryId: 'FIS-16-E4-c1' },
      { id: 'FIS-16-E4-i2', label: { es: "Una filial mexicana paga a su matriz servicios a un precio mayor que el de mercado", en: "A Mexican subsidiary pays its parent for services at above-market prices" }, correctCategoryId: 'FIS-16-E4-c2' },
      { id: 'FIS-16-E4-i3', label: { es: "Un banco extranjero reporta la cuenta de un residente en México a su autoridad fiscal", en: "A foreign bank reports a Mexican resident's account to its tax authority" }, correctCategoryId: 'FIS-16-E4-c3' },
      { id: 'FIS-16-E4-i4', label: { es: "Una empresa extranjera opera una fábrica en Querétaro", en: "A foreign company operates a factory in Querétaro" }, correctCategoryId: 'FIS-16-E4-c1' },
      { id: 'FIS-16-E4-i5', label: { es: "Dos empresas del mismo grupo documentan que sus préstamos internos usan tasas de mercado", en: "Two companies in the same group document that their internal loans use market rates" }, correctCategoryId: 'FIS-16-E4-c2' },
      { id: 'FIS-16-E4-i6', label: { es: "El SAT recibe datos de cuentas bancarias de mexicanos en Estados Unidos", en: "SAT receives bank account data of Mexicans in the United States" }, correctCategoryId: 'FIS-16-E4-c3' },
    ],
    explanation: {
      es: "Sucursal y fábrica son lugares fijos de negocios: establecimiento permanente. Precios entre empresas del mismo grupo: precios de transferencia (plena competencia). Reportes de cuentas entre países: intercambio automático de información. Error común: pensar que una fábrica de una empresa extranjera no tributa en México porque la dueña está fuera.",
      en: "A branch and a factory are fixed places of business: permanent establishment. Prices between group companies: transfer pricing (arm's length). Account reporting between countries: automatic information exchange. Common mistake: thinking a foreign company's factory is not taxed in Mexico because the owner is abroad.",
    },
    difficulty: 2,
    points: 15,
    competency: 'international-tax',
  },
  {
    id: 'FIS-16-E5',
    level: 5,
    module: 'FIS-16',
    kind: 'truefalse',
    flavor: 'concept',
    prompt: {
      es: "Para que un extranjero obtenga la retención reducida que prevé un tratado, basta con que diga que es residente del otro país; no necesita probarlo.",
      en: "For a foreigner to obtain the reduced withholding a treaty provides, it is enough to say they are resident in the other country; they do not need to prove it.",
    },
    answer: false,
    explanation: {
      es: "Falso. Debe acreditar su residencia, normalmente con una constancia de residencia fiscal de su autoridad, y cumplir los demás requisitos (como ser beneficiario efectivo). Sin prueba, se retiene la tasa interna. Error común: aplicar el tratado \"de palabra\"; el retenedor mexicano puede quedar obligado a pagar la diferencia.",
      en: "False. They must prove residence, usually with a tax residence certificate from their authority, and meet the other requirements (such as beneficial ownership). Without proof, the domestic rate is withheld. Common mistake: applying the treaty \"on their word\"; the Mexican withholding agent may end up liable for the difference.",
    },
    difficulty: 1,
    points: 10,
    competency: 'international-tax',
  },
  {
    id: 'FIS-16-E6',
    level: 5,
    module: 'FIS-16',
    kind: 'mcq',
    flavor: 'case',
    context: {
      es: "Un residente en México gana $150,000 en un país extranjero, que le cobra un impuesto hipotético de $60,000. Su ISR mexicano por ese ingreso sería, hipotéticamente, $45,000.",
      en: "A Mexican resident earns $150,000 in a foreign country, which charges a hypothetical $60,000 tax. His Mexican income tax on that income would be, hypothetically, $45,000.",
    },
    prompt: {
      es: "¿Cuánto impuesto extranjero puede acreditar ese año contra el ISR de ese ingreso?",
      en: "How much foreign tax can he credit that year against the income tax on that income?",
    },
    options: [
      { id: 'FIS-16-E6-a', text: { es: "$60,000, todo lo que pagó afuera", en: "$60,000, everything paid abroad" } },
      { id: 'FIS-16-E6-b', text: { es: "$45,000, hasta el ISR mexicano de ese ingreso", en: "$45,000, up to the Mexican income tax on that income" } },
      { id: 'FIS-16-E6-c', text: { es: "$15,000, la diferencia entre ambos", en: "$15,000, the difference between them" } },
      { id: 'FIS-16-E6-d', text: { es: "$0, porque el impuesto extranjero es mayor", en: "$0, because the foreign tax is higher" } },
    ],
    correctOptionId: 'FIS-16-E6-b',
    explanation: {
      es: "El acreditamiento tiene como límite el ISR mexicano que corresponde a ese ingreso: menor entre 60,000 y 45,000 = $45,000. No paga más en México por ese ingreso; los $15,000 excedentes no se acreditan ese año. Error común: creer que se acredita todo lo pagado afuera, lo que reduciría el impuesto de sus ingresos mexicanos.",
      en: "The credit is capped at the Mexican income tax attributable to that income: lower of 60,000 and 45,000 = $45,000. He pays nothing more in Mexico on that income; the $15,000 excess is not credited that year. Common mistake: believing all tax paid abroad is credited, which would reduce the tax on his Mexican income.",
    },
    difficulty: 2,
    points: 15,
    competency: 'international-tax',
  },

  // ═════════════════════════ FIS-17 ═════════════════════════
  {
    id: 'FIS-17-E1',
    level: 5,
    module: 'FIS-17',
    kind: 'classify',
    flavor: 'concept',
    prompt: {
      es: "Clasifica cada situación según el tipo de actuación del SAT.",
      en: "Classify each situation by the type of SAT action.",
    },
    categories: [
      { id: 'FIS-17-E1-c1', label: { es: "Carta invitación", en: "Invitation letter" } },
      { id: 'FIS-17-E1-c2', label: { es: "Revisión de gabinete", en: "Desk review" } },
      { id: 'FIS-17-E1-c3', label: { es: "Visita domiciliaria", en: "Home visit" } },
      { id: 'FIS-17-E1-c4', label: { es: "Revisión electrónica", en: "Electronic review" } },
    ],
    items: [
      { id: 'FIS-17-E1-i1', label: { es: "Un correo del SAT sugiere revisar una diferencia en tu declaración, sin orden de auditoría", en: "An email from SAT suggests reviewing a difference in your return, without an audit order" }, correctCategoryId: 'FIS-17-E1-c1' },
      { id: 'FIS-17-E1-i2', label: { es: "Te piden entregar en la oficina del SAT tus estados de cuenta y contratos del año", en: "You are asked to deliver your bank statements and contracts for the year to SAT's office" }, correctCategoryId: 'FIS-17-E1-c2' },
      { id: 'FIS-17-E1-i3', label: { es: "Auditores llegan a tu negocio con una orden y levantan actas", en: "Auditors arrive at your business with an order and draw up records" }, correctCategoryId: 'FIS-17-E1-c3' },
      { id: 'FIS-17-E1-i4', label: { es: "Por buzón tributario recibes una resolución provisional basada en tus CFDI", en: "Through the tax mailbox you receive a provisional resolution based on your CFDI" }, correctCategoryId: 'FIS-17-E1-c4' },
    ],
    explanation: {
      es: "La carta invitación es solo un aviso, sin orden. Gabinete: entregas documentos al SAT. Visita: los auditores van a tu domicilio y levantan actas. Electrónica: se trabaja con datos que el SAT ya tiene y se notifica por buzón. Error común: tratar la carta invitación como auditoría formal, o ignorarla; conviene aclararla para evitar una revisión.",
      en: "The invitation letter is only a notice, with no order. Desk review: you deliver documents to SAT. Visit: auditors come to your address and draw up records. Electronic: it uses data SAT already has and is notified through the mailbox. Common mistake: treating the invitation letter as a formal audit, or ignoring it; it is best to clarify it to avoid a review.",
    },
    difficulty: 1,
    points: 10,
    competency: 'tax-audit',
  },
  {
    id: 'FIS-17-E2',
    level: 5,
    module: 'FIS-17',
    kind: 'fields',
    flavor: 'case',
    context: {
      es: "En una revisión, el SAT detecta que un fotógrafo tuvo depósitos por $950,000 en el año y declaró ingresos por $700,000. Él demuestra con estados de cuenta que $80,000 fueron traspasos entre sus propias cuentas. Usa una tasa hipotética de 30% para estimar el impuesto.",
      en: "In a review, SAT finds that a photographer had $950,000 in deposits during the year and declared $700,000 of income. He proves with bank statements that $80,000 were transfers between his own accounts. Use a hypothetical 30% rate to estimate the tax.",
    },
    prompt: {
      es: "Calcula el ingreso presunto que queda sin explicar y el impuesto omitido estimado (sin actualización ni recargos), en pesos.",
      en: "Compute the unexplained presumed income and the estimated omitted tax (without adjustment or surcharges), in pesos.",
    },
    fields: [
      { id: 'f1', label: { es: "Ingreso presunto", en: "Presumed income" }, answer: 170000, unit: 'MXN', tolerance: { abs: 0.5 } },
      { id: 'f2', label: { es: "Impuesto omitido estimado", en: "Estimated omitted tax" }, answer: 51000, unit: 'MXN', tolerance: { abs: 0.5 } },
    ],
    explanation: {
      es: "Diferencia: 950,000 − 700,000 = $250,000. Menos lo explicado: 250,000 − 80,000 = $170,000 de ingreso presunto. Impuesto: 170,000 × 30% = $51,000, al que luego se suman actualización, recargos y multas. Error común: olvidar restar los traspasos comprobados; los movimientos entre tus propias cuentas no son ingreso.",
      en: "Difference: 950,000 − 700,000 = $250,000. Less what is explained: 250,000 − 80,000 = $170,000 of presumed income. Tax: 170,000 × 30% = $51,000, to which adjustment, surcharges and fines are later added. Common mistake: forgetting to subtract the proven transfers; moves between your own accounts are not income.",
    },
    difficulty: 2,
    points: 15,
    competency: 'tax-audit',
  },
  {
    id: 'FIS-17-E3',
    level: 5,
    module: 'FIS-17',
    kind: 'mcq',
    flavor: 'case',
    context: {
      es: "Una persona presentó su declaración anual de 2022 el 28 de abril de 2023 y nunca la corrigió. No hay causas de suspensión ni supuestos del plazo de 10 años.",
      en: "A person filed their 2022 annual return on April 28, 2023 and never amended it. There are no suspension events or 10-year-period circumstances.",
    },
    prompt: {
      es: "Según la regla general de caducidad, ¿hasta cuándo puede el SAT ejercer sus facultades sobre ese ejercicio?",
      en: "Under the general statute-of-limitations rule, until when can SAT exercise its powers over that year?",
    },
    options: [
      { id: 'FIS-17-E3-a', text: { es: "Hasta el 31 de diciembre de 2023", en: "Until December 31, 2023" } },
      { id: 'FIS-17-E3-b', text: { es: "Hasta finales de abril de 2028, cinco años después de presentada la declaración", en: "Until late April 2028, five years after the return was filed" } },
      { id: 'FIS-17-E3-c', text: { es: "Hasta 2027, cinco años contados desde el ejercicio 2022", en: "Until 2027, five years counted from fiscal year 2022" } },
      { id: 'FIS-17-E3-d', text: { es: "Para siempre: los impuestos no caducan", en: "Forever: taxes never expire" } },
    ],
    correctOptionId: 'FIS-17-E3-b',
    explanation: {
      es: "En general, las facultades caducan a los 5 años contados desde el día siguiente a la presentación de la declaración: del 29 de abril de 2023 a finales de abril de 2028. Error común: contar desde el año del ejercicio (2022) y no desde la fecha de presentación; además, corregir la declaración puede reiniciar el plazo para lo corregido.",
      en: "Generally, powers expire 5 years from the day after the return was filed: from April 29, 2023 to late April 2028. Common mistake: counting from the fiscal year (2022) rather than the filing date; also, amending the return can restart the period for the amended items.",
    },
    difficulty: 3,
    points: 20,
    competency: 'tax-audit',
  },
  {
    id: 'FIS-17-E4',
    level: 5,
    module: 'FIS-17',
    kind: 'truefalse',
    flavor: 'concept',
    prompt: {
      es: "El acuerdo conclusivo ante la PRODECON se solicita durante la revisión, antes de que el SAT emita la resolución que determina el crédito fiscal.",
      en: "The conclusive agreement before PRODECON is requested during the review, before SAT issues the resolution assessing the tax liability.",
    },
    answer: true,
    explanation: {
      es: "Verdadero. El acuerdo conclusivo es una mediación de la PRODECON mientras la revisión sigue abierta, para resolver diferencias antes de la resolución. Una vez emitida, quedan los medios de defensa (recurso de revocación, juicio, amparo). Error común: confundirlo con un recurso que se presenta después de la liquidación.",
      en: "True. The conclusive agreement is PRODECON mediation while the review is still open, to settle differences before the resolution. Once it is issued, the legal remedies remain (revocation appeal, lawsuit, amparo). Common mistake: confusing it with an appeal filed after the assessment.",
    },
    difficulty: 2,
    points: 15,
    competency: 'tax-audit',
  },
  {
    id: 'FIS-17-E5',
    level: 5,
    module: 'FIS-17',
    kind: 'multi',
    flavor: 'concept',
    prompt: {
      es: "¿Cuáles son medios de defensa contra una resolución del SAT que ya determinó un crédito fiscal? Selecciona todas las que apliquen.",
      en: "Which are legal remedies against a SAT resolution that has already assessed a tax liability? Select all that apply.",
    },
    options: [
      { id: 'FIS-17-E5-a', text: { es: "Recurso de revocación ante el SAT", en: "Revocation appeal before SAT" } },
      { id: 'FIS-17-E5-b', text: { es: "Juicio contencioso administrativo ante el Tribunal Federal de Justicia Administrativa", en: "Administrative lawsuit before the Federal Administrative Justice Court" } },
      { id: 'FIS-17-E5-c', text: { es: "Esperar a que caduque sin hacer nada, aunque ya esté notificada", en: "Waiting for it to expire without doing anything, even though it has been notified" } },
      { id: 'FIS-17-E5-d', text: { es: "Amparo, después de agotar las instancias que correspondan", en: "Amparo, after exhausting the applicable stages" } },
    ],
    correctOptionIds: ['FIS-17-E5-a', 'FIS-17-E5-b', 'FIS-17-E5-d'],
    explanation: {
      es: "Contra la resolución proceden el recurso de revocación, el juicio ante el TFJA y, después, el amparo. No hacer nada no es defensa: si vencen los plazos, la resolución queda firme y el SAT puede cobrarla. Error común: confundir la caducidad de las facultades (antes de revisar) con la del crédito ya determinado.",
      en: "Against the resolution there are the revocation appeal, the TFJA lawsuit and, afterwards, amparo. Doing nothing is not a defense: if the deadlines pass, the resolution becomes final and SAT can collect it. Common mistake: confusing the expiration of review powers (before reviewing) with that of an already assessed liability.",
    },
    difficulty: 2,
    points: 15,
    competency: 'tax-audit',
  },
  {
    id: 'FIS-17-E6',
    level: 5,
    module: 'FIS-17',
    kind: 'mcq',
    flavor: 'case',
    context: {
      es: "Durante una visita domiciliaria, una distribuidora reconoce que dedujo gastos sin CFDI y que el SAT tiene razón en esa observación. Quiere cerrar ese punto al menor costo posible.",
      en: "During a home visit, a distributor acknowledges that it deducted expenses without CFDI and that SAT is right on that finding. It wants to close that point at the lowest possible cost.",
    },
    prompt: {
      es: "¿Qué le conviene hacer con esa observación?",
      en: "What should it do about that finding?",
    },
    options: [
      { id: 'FIS-17-E6-a', text: { es: "Autocorregirse pronto y pagar, para acceder a multas reducidas", en: "Self-correct early and pay, to access reduced fines" } },
      { id: 'FIS-17-E6-b', text: { es: "Esperar la resolución y luego presentar todos los recursos posibles", en: "Wait for the resolution and then file every possible appeal" } },
      { id: 'FIS-17-E6-c', text: { es: "Emitir ahora CFDI con fecha del año revisado para justificar los gastos", en: "Issue CFDI now dated in the reviewed year to justify the expenses" } },
      { id: 'FIS-17-E6-d', text: { es: "Corregir de forma espontánea para que no haya ninguna multa", en: "Correct voluntarily so there is no fine at all" } },
    ],
    correctOptionId: 'FIS-17-E6-a',
    explanation: {
      es: "Si la observación es correcta, autocorregirse durante la revisión reduce multas y cierra el tema. Ya no puede ser espontáneo porque la revisión empezó, y litigar algo que se sabe perdido solo suma recargos. Fabricar comprobantes con fecha pasada es simulación y puede ser delito. Error común: creer que corregir durante la visita equivale a hacerlo de forma espontánea.",
      en: "If the finding is correct, self-correcting during the review reduces fines and closes the matter. It can no longer be voluntary because the review has started, and litigating something you know is lost only adds surcharges. Fabricating backdated receipts is a sham and can be a crime. Common mistake: believing that correcting during the visit equals doing it voluntarily.",
    },
    difficulty: 2,
    points: 15,
    competency: 'tax-audit',
  },
]
