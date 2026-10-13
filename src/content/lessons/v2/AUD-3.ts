import type { Exercise, Lesson } from '../../../types'

/**
 * FINCORE — Temario v2.0, área Auditoría, Control Interno y Riesgos (nivel 5, etapa Avanzado):
 * AUD.13 a AUD.15 (prevención y detección de fraude, cumplimiento y gestión de riesgos,
 * elaboración de informes de auditoría).
 */

const NOTE_FRAUD = {
  es: "Contenido educativo. Las referencias a la NIA 240 (responsabilidades del auditor respecto al fraude), a los estudios de la ACFE (Association of Certified Fraud Examiners) y a las leyes mexicanas que castigan el fraude o piden programas de integridad a las empresas son generales: las normas y las leyes cambian. Verifica la versión vigente (2026) con fuentes oficiales y con un especialista antes de actuar en un caso real. Todas las cifras son ejemplos hipotéticos.",
  en: "Educational content. References to ISA 240 (the auditor's responsibilities relating to fraud), to ACFE (Association of Certified Fraud Examiners) studies and to Mexican laws that punish fraud or ask companies for integrity programs are general: standards and laws change. Verify the current version (2026) with official sources and a specialist before acting on a real case. All figures are hypothetical examples.",
}

const NOTE_COMPLIANCE = {
  es: "Contenido educativo. Se mencionan de forma general el Modelo de las Tres Líneas del IIA (Instituto de Auditores Internos), las normas ISO 37301 (sistemas de gestión del cumplimiento) e ISO 31000 (gestión del riesgo), y en México la ley de prevención de operaciones con recursos de procedencia ilícita y la de protección de datos personales. Las obligaciones, montos y autoridades cambian: verifica la versión vigente (2026) con fuentes oficiales. Las cifras y escalas de riesgo son ejemplos hipotéticos.",
  en: "Educational content. The IIA (Institute of Internal Auditors) Three Lines Model, ISO 37301 (compliance management systems) and ISO 31000 (risk management), and in Mexico the law on preventing transactions with illicit-origin funds and the personal data protection law are mentioned in general terms. Obligations, amounts and authorities change: verify the current version (2026) with official sources. Figures and risk scales are hypothetical examples.",
}

const NOTE_REPORT = {
  es: "Contenido educativo. El informe del auditor externo se basa en las Normas Internacionales de Auditoría (NIA 700, 701, 705, 706 y 570, entre otras), que en México difunde el IMCP; los informes de auditoría interna siguen las Normas Globales de Auditoría Interna del IIA. Los requisitos de formato y para emisoras de valores pueden cambiar: verifica la versión vigente (2026). Las cifras y la materialidad usadas son ejemplos hipotéticos.",
  en: "Educational content. The external auditor's report is based on the International Standards on Auditing (ISA 700, 701, 705, 706 and 570, among others), which in Mexico are issued by the IMCP; internal audit reports follow the IIA Global Internal Audit Standards. Format requirements and those for listed issuers may change: verify the current version (2026). Figures and materiality used are hypothetical examples.",
}

export const lessons: Lesson[] = [
  // ───────────────────────────── AUD-13 ─────────────────────────────
  {
    id: 'AUD-13',
    level: 5,
    topicIds: ['AUD.13'],
    title: { es: "Prevención y detección de fraude", en: "Fraud prevention and detection" },
    summary: {
      es: "El fraude aparece cuando coinciden presión, oportunidad y racionalización; se previene quitando oportunidades con controles y cultura, y se detecta con señales de alerta, denuncias y análisis de datos.",
      en: "Fraud appears when pressure, opportunity and rationalization meet; it is prevented by removing opportunities through controls and culture, and detected through red flags, tips and data analytics.",
    },
    minutes: 17,
    objectives: [
      { es: "Explicar el triángulo del fraude y los tres grandes tipos de fraude ocupacional.", en: "Explain the fraud triangle and the three main types of occupational fraud." },
      { es: "Seleccionar controles preventivos que reduzcan la oportunidad de cometer fraude.", en: "Select preventive controls that reduce the opportunity to commit fraud." },
      { es: "Reconocer señales de alerta y aplicar pruebas analíticas como la ley de Benford.", en: "Recognize red flags and apply analytical tests such as Benford's law." },
      { es: "Cuantificar los resultados de una prueba de detección de pagos duplicados.", en: "Quantify the results of a duplicate-payment detection test." },
    ],
    theory: [
      {
        heading: { es: "Por qué ocurre el fraude: el triángulo y sus tipos", en: "Why fraud happens: the triangle and its types" },
        body: [
          {
            es: "El **fraude** es un engaño hecho a propósito para obtener un beneficio indebido. A diferencia del **error**, que es involuntario, el fraude tiene **intención** y casi siempre alguien intenta ocultarlo. Por eso es más difícil de encontrar.",
            en: "**Fraud** is a deliberate deception to obtain an undue benefit. Unlike an **error**, which is unintentional, fraud involves **intent** and someone almost always tries to hide it. That is why it is harder to find.",
          },
          {
            es: "El **triángulo del fraude** explica cuándo una persona honesta puede cometerlo. Necesita **presión** (una deuda, una meta de ventas imposible), **oportunidad** (un control débil que le permite hacerlo sin que nadie lo note) y **racionalización** (una excusa que se dice a sí misma: «lo voy a devolver», «la empresa me debe»).",
            en: "The **fraud triangle** explains when an honest person may commit it. They need **pressure** (a debt, an impossible sales target), **opportunity** (a weak control that lets them do it unnoticed) and **rationalization** (an excuse they tell themselves: \"I'll pay it back\", \"the company owes me\").",
          },
          {
            es: "El **fraude ocupacional** (cometido por personas dentro de la organización) se agrupa en tres familias: **apropiación indebida de activos** (robar efectivo, inventario o cobrar gastos falsos), **corrupción** (sobornos, conflictos de interés) y **fraude en estados financieros** (inflar ventas o esconder pasivos para aparentar resultados). La empresa casi nunca controla la presión ni la racionalización; donde sí puede actuar es en la **oportunidad**.",
            en: "**Occupational fraud** (committed by people inside the organization) falls into three families: **asset misappropriation** (stealing cash, inventory or claiming fake expenses), **corruption** (bribes, conflicts of interest) and **financial statement fraud** (inflating sales or hiding liabilities to look better). The company rarely controls pressure or rationalization; where it can act is on **opportunity**.",
          },
          {
            es: "Mini ejemplo: una cajera de una tienda en Puebla tiene deudas con una casa de empeño (presión), nadie cuenta su caja al cierre (oportunidad) y piensa que su sueldo es injusto (racionalización). Si el gerente cuenta la caja cada noche frente a ella, desaparece la oportunidad.",
            en: "Mini example: a cashier at a store in Puebla owes money to a pawnshop (pressure), nobody counts her register at closing (opportunity) and she thinks her salary is unfair (rationalization). If the manager counts the register every night in front of her, the opportunity disappears.",
          },
        ],
        bullets: [
          { es: "Presión: la necesidad o el incentivo personal.", en: "Pressure: the personal need or incentive." },
          { es: "Oportunidad: el hueco en los controles que permite actuar y ocultarlo.", en: "Opportunity: the gap in controls that allows acting and hiding it." },
          { es: "Racionalización: la justificación moral que se da quien comete el fraude.", en: "Rationalization: the moral justification the fraudster gives themselves." },
          { es: "Tipos: apropiación de activos, corrupción y fraude en estados financieros.", en: "Types: asset misappropriation, corruption and financial statement fraud." },
        ],
      },
      {
        heading: { es: "Prevención: cerrar la puerta antes del robo", en: "Prevention: closing the door before the theft" },
        body: [
          {
            es: "Prevenir es más barato que investigar. La base es el **tono desde arriba**: si la dirección actúa con integridad y castiga las faltas sin excepciones, el personal entiende que el fraude no se tolera. Esto se apoya en un **código de ética** firmado, capacitación y una política clara de **conflictos de interés**.",
            en: "Preventing is cheaper than investigating. The foundation is the **tone at the top**: if leadership acts with integrity and punishes misconduct without exceptions, staff understand fraud is not tolerated. This is backed by a signed **code of ethics**, training and a clear **conflict-of-interest** policy.",
          },
          {
            es: "Los controles antifraude atacan la oportunidad. La **segregación de funciones** separa autorizar, registrar y custodiar: quien da de alta a un proveedor no debe poder pagarle. Las **vacaciones obligatorias** y la **rotación de puestos** sirven porque muchos fraudes requieren que la misma persona los «atienda» todos los días.",
            en: "Anti-fraud controls attack opportunity. **Segregation of duties** separates authorizing, recording and safeguarding: whoever adds a supplier should not be able to pay it. **Mandatory vacations** and **job rotation** help because many frauds require the same person to \"tend\" them every day.",
          },
          {
            es: "Ningún control es perfecto. Si dos o más personas se ponen de acuerdo (**colusión**), pueden saltarse la segregación de funciones. Por eso la prevención se combina con un **canal de denuncia** confidencial y con la certeza de que habrá revisiones sorpresa: el miedo a ser descubierto también disuade.",
            en: "No control is perfect. If two or more people agree to act together (**collusion**), they can get around segregation of duties. That is why prevention is combined with a confidential **whistleblower hotline** and the certainty of surprise reviews: fear of being caught also deters.",
          },
          {
            es: "Mini ejemplo: en una constructora de Querétaro, el mismo empleado daba de alta proveedores y liberaba transferencias. La empresa separó las dos tareas y pidió que otra persona validara el RFC y la cuenta bancaria de cada proveedor nuevo. El riesgo de proveedores fantasma bajó sin comprar ningún sistema.",
            en: "Mini example: at a construction company in Querétaro, the same employee added suppliers and released transfers. The company split the two tasks and had another person validate each new supplier's tax ID (RFC) and bank account. The risk of ghost suppliers dropped without buying any system.",
          },
        ],
        bullets: [
          { es: "Tono desde arriba, código de ética y política de conflictos de interés.", en: "Tone at the top, code of ethics and conflict-of-interest policy." },
          { es: "Segregación de funciones: autorizar, registrar y custodiar por separado.", en: "Segregation of duties: authorize, record and safeguard separately." },
          { es: "Vacaciones obligatorias y rotación de puestos sensibles.", en: "Mandatory vacations and rotation of sensitive positions." },
          { es: "Revisión de antecedentes al contratar y al dar de alta proveedores.", en: "Background checks when hiring and when onboarding suppliers." },
          { es: "Canal de denuncia confidencial y protección para quien denuncia.", en: "Confidential hotline and protection for whistleblowers." },
        ],
      },
      {
        heading: { es: "Detección: señales de alerta y análisis de datos", en: "Detection: red flags and data analytics" },
        body: [
          {
            es: "Una **señal de alerta** (red flag) es un hecho raro que no prueba fraude, pero pide revisar más. Ejemplos: un empleado que nunca toma vacaciones, un estilo de vida muy superior a su sueldo, un proveedor con la misma cuenta bancaria que un trabajador, o asientos contables registrados un domingo en la noche.",
            en: "A **red flag** is an unusual fact that does not prove fraud but calls for a closer look. Examples: an employee who never takes vacation, a lifestyle far above their salary, a supplier with the same bank account as an employee, or journal entries posted on a Sunday night.",
          },
          {
            es: "Según estudios internacionales como los de la ACFE, las **denuncias** (de empleados, clientes o proveedores) suelen ser la forma más común en que se descubre un fraude, por encima de la auditoría. Por eso un canal de denuncia bien difundido es también una herramienta de detección.",
            en: "According to international studies such as those by the ACFE, **tips** (from employees, customers or suppliers) are usually the most common way fraud is discovered, ahead of audits. That is why a well-publicized hotline is also a detection tool.",
          },
          {
            es: "El **análisis de datos** revisa el 100 % de las operaciones, no solo una muestra. Pruebas típicas: pagos duplicados (mismo proveedor, monto y factura), empleados sin vacaciones ni incapacidades que podrían ser **empleados fantasma**, montos justo debajo del límite de autorización y la **ley de Benford**, que dice que en muchos datos naturales el primer dígito es 1 cerca del 30 % de las veces. Si en las facturas de un proveedor el 1 casi no aparece, algo pudo inventarse.",
            en: "**Data analytics** reviews 100% of transactions, not just a sample. Typical tests: duplicate payments (same supplier, amount and invoice), employees with no vacation or sick leave who could be **ghost employees**, amounts just below the approval limit, and **Benford's law**, which says that in many natural data sets the first digit is 1 about 30% of the time. If 1 hardly appears in a supplier's invoices, something may have been made up.",
          },
          {
            es: "Mini ejemplo: el límite para pagar sin autorización del director es $50,000. El análisis encuentra 40 pagos de entre $49,000 y $49,999 al mismo proveedor en un año. No prueba nada por sí solo, pero sugiere que alguien divide pagos para evitar la autorización.",
            en: "Mini example: the limit for paying without the director's approval is $50,000. Analytics finds 40 payments between $49,000 and $49,999 to the same supplier in one year. It proves nothing by itself, but suggests someone is splitting payments to avoid approval.",
          },
        ],
        formula: "Ley de Benford: P(primer dígito = d) = log10(1 + 1/d)  →  P(1) ≈ 30.1 %, P(9) ≈ 4.6 %",
      },
    ],
    examples: [
      {
        title: { es: "Prueba de Benford sobre gastos de viaje", en: "Benford test on travel expenses" },
        problem: {
          es: "Revisas 1,000 comprobantes de gastos de viaje de un área. Solo 180 empiezan con el dígito 1 y 160 empiezan con 4 (Benford espera cerca de 97 con el 4, es decir 9.7 %). ¿Qué concluyes?",
          en: "You review 1,000 travel expense receipts from one department. Only 180 begin with the digit 1 and 160 begin with 4 (Benford expects about 97 with 4, i.e. 9.7%). What do you conclude?",
        },
        steps: [
          { es: "Esperado con 1: 1,000 × 30.1 % = 301 comprobantes. Observado: 180, muy por debajo.", en: "Expected with 1: 1,000 × 30.1% = 301 receipts. Observed: 180, far below." },
          { es: "Esperado con 4: 1,000 × 9.7 % = 97. Observado: 160, muy por encima.", en: "Expected with 4: 1,000 × 9.7% = 97. Observed: 160, far above." },
          { es: "Revisas el límite de reembolso: es $5,000 sin comprobante adicional. Muchos gastos de $4,xxx sugieren montos ajustados para no pasar el límite.", en: "You check the reimbursement limit: $5,000 without extra support. Many $4,xxx expenses suggest amounts tailored to stay under the limit." },
          { es: "Seleccionas los comprobantes de $4,000 a $4,999 para revisarlos uno por uno contra las facturas (CFDI) y las agendas de viaje.", en: "You select the $4,000–$4,999 receipts to review one by one against the invoices (CFDI) and travel schedules." },
        ],
        result: {
          es: "La desviación no prueba fraude, pero dirige la revisión a donde está el riesgo. Benford es un filtro: después se necesita evidencia documental.",
          en: "The deviation does not prove fraud, but it directs the review to where the risk is. Benford is a filter: documentary evidence is needed afterward.",
        },
      },
      {
        title: { es: "Diseñar controles contra un proveedor fantasma", en: "Designing controls against a ghost supplier" },
        problem: {
          es: "En una distribuidora, la auxiliar de compras da de alta proveedores, captura facturas y prepara transferencias que el gerente aprueba sin ver soporte. Se descubre un proveedor cuya cuenta bancaria coincide con la de un familiar de ella. ¿Qué falló y qué controles propones?",
          en: "At a distributor, the purchasing assistant adds suppliers, enters invoices and prepares transfers that the manager approves without seeing support. A supplier is found whose bank account matches that of one of her relatives. What failed and which controls do you propose?",
        },
        steps: [
          { es: "Triángulo: la oportunidad fue que una sola persona controlaba alta, registro y pago, y la aprobación era solo de nombre.", en: "Triangle: the opportunity was that one person controlled onboarding, recording and payment, and approval was in name only." },
          { es: "Prevención: separar el alta de proveedores (otra área valida RFC, domicilio y cuenta) de la captura y del pago.", en: "Prevention: separate supplier onboarding (another area validates tax ID, address and account) from data entry and payment." },
          { es: "Prevención: el aprobador revisa orden de compra, recepción del bien y factura (conciliación de tres vías) antes de autorizar.", en: "Prevention: the approver checks purchase order, goods receipt and invoice (three-way match) before authorizing." },
          { es: "Detección: cruzar cada mes las cuentas bancarias y domicilios de proveedores contra los de empleados.", en: "Detection: monthly cross-match of supplier bank accounts and addresses against employees'." },
        ],
        result: {
          es: "Se combinan controles preventivos (segregación y conciliación de tres vías) con uno detectivo (cruce de datos). Ninguno solo basta: juntos reducen la oportunidad y aumentan la probabilidad de descubrir.",
          en: "Preventive controls (segregation and three-way match) are combined with a detective one (data cross-match). None alone is enough: together they reduce opportunity and raise the chance of discovery.",
        },
      },
    ],
    keyPoints: [
      { es: "Fraude es engaño intencional; el error es involuntario.", en: "Fraud is intentional deception; an error is unintentional." },
      { es: "El triángulo del fraude: presión, oportunidad y racionalización; la empresa actúa sobre todo en la oportunidad.", en: "The fraud triangle: pressure, opportunity and rationalization; the company acts mainly on opportunity." },
      { es: "Prevenir: tono desde arriba, segregación de funciones, vacaciones obligatorias y canal de denuncia.", en: "Prevent: tone at the top, segregation of duties, mandatory vacations and a hotline." },
      { es: "La colusión puede vencer la segregación de funciones; por eso se suman controles detectivos.", en: "Collusion can defeat segregation of duties; that is why detective controls are added." },
      { es: "Las señales de alerta y pruebas como Benford dirigen la revisión, pero no prueban el fraude por sí solas.", en: "Red flags and tests such as Benford direct the review, but do not prove fraud by themselves." },
    ],
    normativeNote: NOTE_FRAUD,
    exerciseIds: ['AUD-13-E1', 'AUD-13-E2', 'AUD-13-E3', 'AUD-13-E4', 'AUD-13-E5', 'AUD-13-E6'],
  },

  // ───────────────────────────── AUD-14 ─────────────────────────────
  {
    id: 'AUD-14',
    level: 5,
    topicIds: ['AUD.14'],
    title: { es: "Cumplimiento y gestión de riesgos", en: "Compliance and risk management" },
    summary: {
      es: "Un programa de cumplimiento identifica las obligaciones de la empresa, asigna quién las cumple y quién las vigila según el modelo de las tres líneas, y las monitorea con indicadores y pruebas contra un apetito de riesgo definido.",
      en: "A compliance program identifies the company's obligations, assigns who meets them and who oversees them under the three lines model, and monitors them with indicators and tests against a defined risk appetite.",
    },
    minutes: 16,
    objectives: [
      { es: "Describir los elementos de un programa de cumplimiento eficaz.", en: "Describe the elements of an effective compliance program." },
      { es: "Asignar responsabilidades con el modelo de las tres líneas.", en: "Assign responsibilities using the three lines model." },
      { es: "Distinguir apetito y tolerancia al riesgo y usarlos con indicadores clave de riesgo (KRI).", en: "Distinguish risk appetite and tolerance and use them with key risk indicators (KRIs)." },
      { es: "Calcular una tasa de excepción en una prueba de cumplimiento y compararla con la tolerancia.", en: "Compute an exception rate in a compliance test and compare it with tolerance." },
    ],
    theory: [
      {
        heading: { es: "Qué es cumplimiento y cómo se arma un programa", en: "What compliance is and how a program is built" },
        body: [
          {
            es: "**Cumplimiento** (compliance) es asegurarse de que la empresa respeta sus **obligaciones**: leyes, reglas de las autoridades, contratos y sus propias políticas. Un ejemplo cotidiano: una casa de empeño en México debe identificar a sus clientes y avisar de ciertas operaciones a la autoridad por las reglas contra el lavado de dinero; si no lo hace, arriesga multas y su reputación.",
            en: "**Compliance** means making sure the company respects its **obligations**: laws, regulators' rules, contracts and its own policies. An everyday example: a pawnshop in Mexico must identify its customers and report certain transactions to the authority under anti-money-laundering rules; if it doesn't, it risks fines and its reputation.",
          },
          {
            es: "Un **programa de cumplimiento** no es un manual en un cajón. Empieza con un **inventario de obligaciones** (qué normas te aplican y qué exigen), sigue con una **evaluación de riesgos de incumplimiento** (dónde es más probable fallar y qué tan grave sería) y termina en controles, capacitación y vigilancia continua.",
            en: "A **compliance program** is not a manual in a drawer. It starts with an **inventory of obligations** (which rules apply and what they require), continues with a **non-compliance risk assessment** (where failure is most likely and how serious it would be) and ends in controls, training and ongoing monitoring.",
          },
          {
            es: "Normas como la **ISO 37301** describen estos sistemas de gestión del cumplimiento. Lo importante es la lógica: un responsable con autoridad e independencia (el **oficial de cumplimiento**), recursos suficientes y reportes directos al consejo o al comité de auditoría.",
            en: "Standards such as **ISO 37301** describe these compliance management systems. What matters is the logic: a responsible person with authority and independence (the **compliance officer**), sufficient resources and direct reporting to the board or audit committee.",
          },
          {
            es: "Mini ejemplo: una fintech hace su inventario y encuentra 3 grandes fuentes de obligaciones: prevención de lavado de dinero, protección de datos personales y obligaciones fiscales. Para cada una nombra un dueño, define controles y fija cuándo se revisará.",
            en: "Mini example: a fintech builds its inventory and finds 3 major sources of obligations: anti-money-laundering, personal data protection and tax obligations. For each one it names an owner, defines controls and sets when it will be reviewed.",
          },
        ],
        bullets: [
          { es: "Compromiso de la dirección y un oficial de cumplimiento con autoridad.", en: "Leadership commitment and a compliance officer with authority." },
          { es: "Inventario de obligaciones y evaluación de riesgos de incumplimiento.", en: "Inventory of obligations and non-compliance risk assessment." },
          { es: "Políticas, controles y capacitación según el riesgo de cada área.", en: "Policies, controls and training according to each area's risk." },
          { es: "Canal de denuncia, investigación y consecuencias disciplinarias.", en: "Reporting channel, investigation and disciplinary consequences." },
          { es: "Monitoreo, pruebas y mejora continua; seguimiento a cambios regulatorios.", en: "Monitoring, testing and continuous improvement; tracking regulatory change." },
        ],
      },
      {
        heading: { es: "El modelo de las tres líneas", en: "The three lines model" },
        body: [
          {
            es: "El **modelo de las tres líneas** del IIA ordena quién hace qué con los riesgos. Encima está el **órgano de gobierno** (consejo de administración y sus comités), que fija la dirección y supervisa. Debajo, la administración y la auditoría interna.",
            en: "The IIA's **three lines model** organizes who does what about risk. At the top is the **governing body** (the board and its committees), which sets direction and oversees. Below it are management and internal audit.",
          },
          {
            es: "La **primera línea** son las áreas que operan y venden: son **dueñas del riesgo** y ejecutan los controles día a día (el ejecutivo que pide identificación al cliente). La **segunda línea** son funciones especializadas, como gestión de riesgos y cumplimiento: diseñan metodologías, asesoran, vigilan y retan a la primera línea.",
            en: "The **first line** consists of the areas that operate and sell: they **own the risk** and run the controls day to day (the officer who asks a customer for ID). The **second line** consists of specialized functions such as risk management and compliance: they design methodologies, advise, monitor and challenge the first line.",
          },
          {
            es: "La **tercera línea** es la **auditoría interna**: da un **aseguramiento independiente** al órgano de gobierno sobre si todo lo anterior funciona. Para ser independiente no debe diseñar ni operar los controles que luego evaluará; si lo hiciera, se estaría auditando a sí misma.",
            en: "The **third line** is **internal audit**: it provides **independent assurance** to the governing body on whether all of the above works. To be independent it must not design or operate the controls it will later evaluate; if it did, it would be auditing itself.",
          },
          {
            es: "Mini ejemplo: en un banco, la sucursal integra los expedientes de clientes (primera línea), cumplimiento revisa cada mes una muestra y emite alertas (segunda línea) y auditoría interna evalúa una vez al año si el proceso completo es eficaz (tercera línea).",
            en: "Mini example: at a bank, the branch assembles customer files (first line), compliance reviews a sample each month and issues alerts (second line) and internal audit assesses once a year whether the whole process is effective (third line).",
          },
        ],
        bullets: [
          { es: "Órgano de gobierno: fija el apetito de riesgo y supervisa.", en: "Governing body: sets risk appetite and oversees." },
          { es: "Primera línea: dueña del riesgo, opera los controles.", en: "First line: owns the risk, runs the controls." },
          { es: "Segunda línea: riesgos y cumplimiento; vigila, asesora y reta.", en: "Second line: risk and compliance; monitors, advises and challenges." },
          { es: "Tercera línea: auditoría interna; aseguramiento independiente.", en: "Third line: internal audit; independent assurance." },
        ],
      },
      {
        heading: { es: "Apetito de riesgo, indicadores y pruebas de cumplimiento", en: "Risk appetite, indicators and compliance testing" },
        body: [
          {
            es: "El **apetito de riesgo** es cuánto riesgo está dispuesta a aceptar la empresa para lograr sus metas; lo aprueba el consejo. La **tolerancia** es el margen concreto de variación aceptable en una métrica. Ejemplo: «aceptamos riesgo bajo en lavado de dinero» (apetito) y «máximo 2 % de expedientes incompletos» (tolerancia).",
            en: "**Risk appetite** is how much risk the company is willing to accept to reach its goals; the board approves it. **Tolerance** is the specific acceptable range of variation in a metric. Example: \"we accept low money-laundering risk\" (appetite) and \"at most 2% incomplete files\" (tolerance).",
          },
          {
            es: "Un **indicador clave de riesgo** (KRI) es una métrica que avisa **antes** de que el riesgo se materialice, con umbrales tipo semáforo: verde, amarillo y rojo. Por ejemplo, el número de alertas de operaciones inusuales sin revisar después de 30 días.",
            en: "A **key risk indicator** (KRI) is a metric that warns **before** a risk materializes, with traffic-light thresholds: green, amber and red. For example, the number of unusual-transaction alerts still unreviewed after 30 days.",
          },
          {
            es: "Las **pruebas de cumplimiento** toman una muestra y cuentan las **excepciones** (casos que no cumplen). La tasa de excepción se compara con la tolerancia: si la supera, se analiza la causa, se corrige y se reporta. Muchas empresas también estiman el **riesgo residual**: lo que queda del riesgo después de los controles.",
            en: "**Compliance tests** take a sample and count the **exceptions** (cases that do not comply). The exception rate is compared with tolerance: if it exceeds it, the cause is analyzed, fixed and reported. Many companies also estimate **residual risk**: what remains of the risk after controls.",
          },
          {
            es: "Mini ejemplo: de 50 contratos de clientes revisados, 1 no tiene firma del aviso de privacidad. Tasa de excepción: 1 ÷ 50 = 2 %. Con tolerancia de 2 %, el indicador queda justo en el límite: amarillo, conviene vigilarlo.",
            en: "Mini example: of 50 customer contracts reviewed, 1 lacks a signed privacy notice. Exception rate: 1 ÷ 50 = 2%. With a 2% tolerance, the indicator sits right at the limit: amber, worth watching.",
          },
        ],
        formula: "Tasa de excepción = Casos que no cumplen ÷ Casos revisados × 100  |  Riesgo residual (método simplificado) = Riesgo inherente × (1 − Efectividad del control)",
      },
    ],
    examples: [
      {
        title: { es: "Prueba de expedientes de clientes contra la tolerancia", en: "Testing customer files against tolerance" },
        problem: {
          es: "Una sofom tiene tolerancia de 3 % de expedientes incompletos. Cumplimiento revisa 120 expedientes y encuentra 9 sin comprobante de domicilio vigente. ¿Cuál es la tasa de excepción y qué debe hacerse?",
          en: "A non-bank lender (sofom) has a 3% tolerance for incomplete files. Compliance reviews 120 files and finds 9 without a current proof of address. What is the exception rate and what should be done?",
        },
        steps: [
          { es: "Tasa de excepción: 9 ÷ 120 = 0.075 → 7.5 %.", en: "Exception rate: 9 ÷ 120 = 0.075 → 7.5%." },
          { es: "Comparación: 7.5 % − 3 % = 4.5 puntos porcentuales por encima de la tolerancia.", en: "Comparison: 7.5% − 3% = 4.5 percentage points above tolerance." },
          { es: "Causa: se descubre que una sucursal nueva no recibió capacitación.", en: "Cause: a new branch turns out not to have received training." },
          { es: "Acciones: completar los 9 expedientes, capacitar a la sucursal, aumentar la muestra el siguiente mes y reportar al comité.", en: "Actions: complete the 9 files, train the branch, increase next month's sample and report to the committee." },
        ],
        result: {
          es: "La tasa de 7.5 % rebasa la tolerancia de 3 %: es un incumplimiento que se corrige en su causa (capacitación), no solo en los 9 casos encontrados.",
          en: "The 7.5% rate exceeds the 3% tolerance: it is a breach to be fixed at its cause (training), not only in the 9 cases found.",
        },
      },
      {
        title: { es: "Riesgo residual con un método simplificado", en: "Residual risk with a simplified method" },
        problem: {
          es: "En una escala de 1 a 25, el riesgo inherente de filtración de datos personales de una tienda en línea es 20. Sus controles (cifrado, accesos restringidos) se evalúan con 70 % de efectividad. El apetito del consejo es un residual máximo de 8. ¿Está dentro?",
          en: "On a 1 to 25 scale, an online store's inherent risk of personal data leakage is 20. Its controls (encryption, restricted access) are rated 70% effective. The board's appetite is a maximum residual of 8. Is it within?",
        },
        steps: [
          { es: "Fórmula simplificada: residual = 20 × (1 − 0.70).", en: "Simplified formula: residual = 20 × (1 − 0.70)." },
          { es: "1 − 0.70 = 0.30; 20 × 0.30 = 6.", en: "1 − 0.70 = 0.30; 20 × 0.30 = 6." },
          { es: "Comparación: 6 ≤ 8, dentro del apetito.", en: "Comparison: 6 ≤ 8, within appetite." },
          { es: "Si una prueba muestra que los controles solo son 50 % efectivos: 20 × 0.5 = 10 > 8, fuera del apetito.", en: "If a test shows controls are only 50% effective: 20 × 0.5 = 10 > 8, outside appetite." },
        ],
        result: {
          es: "Con controles al 70 % el riesgo residual (6) está dentro del apetito. La conclusión depende de que la efectividad esté probada, no solo supuesta.",
          en: "With controls at 70% the residual risk (6) is within appetite. The conclusion depends on effectiveness being tested, not just assumed.",
        },
      },
    ],
    keyPoints: [
      { es: "Cumplir es respetar leyes, reglas, contratos y políticas internas; empieza con un inventario de obligaciones.", en: "Compliance means respecting laws, rules, contracts and internal policies; it starts with an inventory of obligations." },
      { es: "Primera línea opera y es dueña del riesgo; segunda vigila y asesora; tercera (auditoría interna) da aseguramiento independiente.", en: "The first line operates and owns risk; the second monitors and advises; the third (internal audit) gives independent assurance." },
      { es: "Apetito es el nivel general de riesgo aceptado; tolerancia es el límite concreto en una métrica.", en: "Appetite is the general level of risk accepted; tolerance is the specific limit on a metric." },
      { es: "Los KRI avisan antes del problema con umbrales de semáforo.", en: "KRIs warn before the problem with traffic-light thresholds." },
      { es: "Una excepción por encima de la tolerancia se corrige en su causa y se reporta al gobierno.", en: "An exception above tolerance is fixed at its cause and reported to governance." },
    ],
    normativeNote: NOTE_COMPLIANCE,
    exerciseIds: ['AUD-14-E1', 'AUD-14-E2', 'AUD-14-E3', 'AUD-14-E4', 'AUD-14-E5', 'AUD-14-E6'],
  },

  // ───────────────────────────── AUD-15 ─────────────────────────────
  {
    id: 'AUD-15',
    level: 5,
    topicIds: ['AUD.15'],
    title: { es: "Elaboración de informes de auditoría", en: "Preparing audit reports" },
    summary: {
      es: "El informe es el producto final de la auditoría: el auditor externo emite una opinión limpia o modificada según la materialidad y el alcance del problema, y el auditor interno comunica hallazgos con condición, criterio, causa, efecto y recomendación.",
      en: "The report is the final product of the audit: the external auditor issues a clean or modified opinion based on the materiality and extent of the problem, and the internal auditor communicates findings with condition, criteria, cause, effect and recommendation.",
    },
    minutes: 18,
    objectives: [
      { es: "Identificar las secciones del informe del auditor independiente.", en: "Identify the sections of the independent auditor's report." },
      { es: "Elegir el tipo de opinión según materialidad y generalización del problema.", en: "Choose the type of opinion based on materiality and pervasiveness of the issue." },
      { es: "Diferenciar un párrafo de énfasis de una opinión modificada.", en: "Differentiate an emphasis-of-matter paragraph from a modified opinion." },
      { es: "Redactar un hallazgo de auditoría interna con sus cinco atributos.", en: "Write an internal audit finding with its five attributes." },
    ],
    theory: [
      {
        heading: { es: "El informe del auditor independiente", en: "The independent auditor's report" },
        body: [
          {
            es: "Cuando un despacho audita los estados financieros, su trabajo termina en un **informe** con una **opinión**: si los estados financieros están presentados razonablemente, **en todos los aspectos materiales**, conforme al marco contable (por ejemplo, NIF o IFRS). «Razonablemente» significa que no hay errores que cambiarían las decisiones de quien los lee; no significa que estén perfectos.",
            en: "When a firm audits financial statements, its work ends in a **report** with an **opinion**: whether the statements are presented fairly, **in all material respects**, under the accounting framework (for example, Mexican FRS or IFRS). \"Fairly\" means there are no errors that would change readers' decisions; it does not mean they are perfect.",
          },
          {
            es: "Según la NIA 700, el informe empieza con la **opinión** y luego el **fundamento de la opinión** (que se siguieron las NIA y el auditor es independiente). Después vienen, cuando aplican, la sección sobre **empresa en funcionamiento** (dudas sobre si la empresa podrá seguir operando) y las **cuestiones clave de la auditoría** (lo que más atención requirió, obligatorio para emisoras en bolsa).",
            en: "Under ISA 700, the report opens with the **opinion** and then the **basis for opinion** (that ISAs were followed and the auditor is independent). Next come, where applicable, the **going concern** section (doubts about whether the company can keep operating) and **key audit matters** (what required the most attention, mandatory for listed issuers).",
          },
          {
            es: "Cierra con las **responsabilidades de la administración** (preparar los estados financieros) y las **del auditor** (obtener seguridad razonable, no absoluta), la firma del socio, el lugar y la **fecha**. La fecha importa: el auditor responde por lo que conoció hasta ese día.",
            en: "It closes with the **responsibilities of management** (preparing the statements) and **of the auditor** (obtaining reasonable, not absolute, assurance), the partner's signature, the place and the **date**. The date matters: the auditor answers for what was known up to that day.",
          },
          {
            es: "Mini ejemplo: un lector de un informe de una empresa en bolsa va primero a la opinión («razonable»), luego a las cuestiones clave (valuación de inventarios) y entiende en dos minutos qué tan confiables son las cifras y dónde estuvo el juicio difícil.",
            en: "Mini example: a reader of a listed company's report goes first to the opinion (\"fair\"), then to the key audit matters (inventory valuation) and understands in two minutes how reliable the figures are and where the hard judgment lay.",
          },
        ],
        bullets: [
          { es: "Opinión y fundamento de la opinión.", en: "Opinion and basis for opinion." },
          { es: "Empresa en funcionamiento, cuando hay incertidumbre material (NIA 570).", en: "Going concern, when there is material uncertainty (ISA 570)." },
          { es: "Cuestiones clave de la auditoría (NIA 701), obligatorias para emisoras.", en: "Key audit matters (ISA 701), mandatory for listed issuers." },
          { es: "Responsabilidades de la administración y del auditor.", en: "Responsibilities of management and of the auditor." },
          { es: "Firma, lugar y fecha del informe.", en: "Signature, place and date of the report." },
        ],
      },
      {
        heading: { es: "Tipos de opinión: limpia o modificada", en: "Types of opinion: clean or modified" },
        body: [
          {
            es: "La opinión **limpia** (no modificada) dice que todo es razonable. Las opiniones **modificadas** (NIA 705) son tres, y se eligen respondiendo dos preguntas: ¿el problema es una **incorrección** (algo mal registrado) o una **limitación** (no pude obtener evidencia)? ¿Y es **material pero no generalizado**, o **material y generalizado**?",
            en: "A **clean** (unmodified) opinion says everything is fair. There are three **modified** opinions (ISA 705), chosen by answering two questions: is the issue a **misstatement** (something recorded wrongly) or a **limitation** (I could not obtain evidence)? And is it **material but not pervasive**, or **material and pervasive**?",
          },
          {
            es: "**Material** quiere decir que su tamaño o naturaleza podría cambiar decisiones; se compara con la **materialidad** que el auditor fijó. **Generalizado** quiere decir que afecta muchas partes de los estados financieros o su esencia, no un renglón aislado. Un inventario sobrevaluado es material; si además toda la contabilidad está mal, es generalizado.",
            en: "**Material** means its size or nature could change decisions; it is compared with the **materiality** the auditor set. **Pervasive** means it affects many parts of the statements or their essence, not an isolated line. An overstated inventory is material; if the whole bookkeeping is also wrong, it is pervasive.",
          },
          {
            es: "Un **párrafo de énfasis** (NIA 706) **no** modifica la opinión: solo llama la atención sobre algo que ya está bien revelado en las notas, como un juicio importante o un desastre natural posterior al cierre. Confundirlo con una salvedad es un error frecuente.",
            en: "An **emphasis-of-matter paragraph** (ISA 706) does **not** modify the opinion: it just draws attention to something already properly disclosed in the notes, such as a major lawsuit or a natural disaster after year-end. Confusing it with a qualification is a common mistake.",
          },
          {
            es: "Mini ejemplo: con materialidad de $1,000,000, una empresa no reconoce una provisión de $1,500,000 por una demanda probable. Es material, pero afecta solo ese renglón y la utilidad: opinión **con salvedades**.",
            en: "Mini example: with $1,000,000 materiality, a company does not record a $1,500,000 provision for a probable lawsuit. It is material but affects only that line and profit: **qualified** opinion.",
          },
        ],
        bullets: [
          { es: "Incorrección material, no generalizada → con salvedades.", en: "Material misstatement, not pervasive → qualified." },
          { es: "Incorrección material y generalizada → desfavorable (adversa).", en: "Material and pervasive misstatement → adverse." },
          { es: "Sin evidencia suficiente, material no generalizada → con salvedades.", en: "Insufficient evidence, material not pervasive → qualified." },
          { es: "Sin evidencia suficiente, material y generalizada → abstención de opinión.", en: "Insufficient evidence, material and pervasive → disclaimer of opinion." },
        ],
      },
      {
        heading: { es: "Informes de auditoría interna: hallazgos que se entienden", en: "Internal audit reports: findings people understand" },
        body: [
          {
            es: "El informe de auditoría interna no da una opinión sobre estados financieros: comunica **hallazgos** a la dirección y al comité de auditoría para que se corrijan. Suele abrir con un **resumen ejecutivo** de una página: objetivo, alcance, calificación general y los hallazgos más graves.",
            en: "The internal audit report does not give an opinion on financial statements: it communicates **findings** to management and the audit committee so they get fixed. It usually opens with a one-page **executive summary**: objective, scope, overall rating and the most serious findings.",
          },
          {
            es: "Un buen hallazgo tiene cinco atributos. **Condición**: lo que encontraste. **Criterio**: lo que debería ser (la política, la ley, el contrato). **Causa**: por qué pasó. **Efecto**: la consecuencia o el riesgo, en pesos si se puede. **Recomendación**: qué hacer, atacando la causa.",
            en: "A good finding has five attributes. **Condition**: what you found. **Criteria**: what should be (the policy, law or contract). **Cause**: why it happened. **Effect**: the consequence or risk, in pesos if possible. **Recommendation**: what to do, addressing the cause.",
          },
          {
            es: "Cada hallazgo lleva la **respuesta de la administración**: un plan de acción con responsable y fecha, que auditoría da seguimiento. Escribe con frases cortas, datos verificables y sin adjetivos que suenen a acusación: el informe se trata de procesos, no de culpar personas.",
            en: "Each finding carries **management's response**: an action plan with an owner and a date, which audit follows up. Write with short sentences, verifiable data and no adjectives that sound accusatory: the report is about processes, not blaming people.",
          },
          {
            es: "Mini ejemplo: «De 40 notas de crédito revisadas, 12 no tenían autorización (condición). La política exige firma del gerente de ventas (criterio). El sistema permite emitirlas sin flujo de aprobación (causa). Se otorgaron $380,000 en descuentos sin autorización (efecto). Configurar la aprobación obligatoria en el sistema (recomendación).»",
            en: "Mini example: \"Of 40 credit notes reviewed, 12 lacked approval (condition). Policy requires the sales manager's signature (criteria). The system allows issuing them without an approval workflow (cause). $380,000 in discounts were granted without approval (effect). Configure mandatory approval in the system (recommendation).\"",
          },
        ],
        formula: "Hallazgo = Condición vs. Criterio → Causa → Efecto → Recomendación (+ plan de acción, responsable y fecha)",
      },
    ],
    examples: [
      {
        title: { es: "Decidir la opinión con incorrecciones no corregidas", en: "Deciding the opinion with uncorrected misstatements" },
        problem: {
          es: "Materialidad global: $2,000,000. La empresa se niega a corregir: ingresos registrados antes de tiempo por $1,300,000 y una estimación de cuentas incobrables faltante por $900,000. Ambas inflan la utilidad. El resto de los estados financieros está correcto. ¿Qué opinión emites?",
          en: "Overall materiality: $2,000,000. The company refuses to correct: revenue recorded early for $1,300,000 and a missing bad-debt allowance of $900,000. Both inflate profit. The rest of the statements is correct. What opinion do you issue?",
        },
        steps: [
          { es: "Suma de incorrecciones no corregidas: 1,300,000 + 900,000 = $2,200,000.", en: "Sum of uncorrected misstatements: 1,300,000 + 900,000 = $2,200,000." },
          { es: "Comparación: 2,200,000 > 2,000,000 → en conjunto son materiales.", en: "Comparison: 2,200,000 > 2,000,000 → together they are material." },
          { es: "Alcance: afectan ingresos, cuentas por cobrar y utilidad, pero no toda la información: no son generalizadas.", en: "Extent: they affect revenue, receivables and profit, but not all the information: not pervasive." },
          { es: "Conclusión: opinión con salvedades, explicando el efecto en la sección «Fundamento de la opinión con salvedades».", en: "Conclusion: qualified opinion, explaining the effect in the \"Basis for qualified opinion\" section." },
        ],
        result: {
          es: "Opinión con salvedades. Por separado ninguna incorrección era material, pero sumadas sí: el auditor siempre evalúa el total acumulado.",
          en: "Qualified opinion. Separately neither misstatement was material, but together they are: the auditor always evaluates the cumulative total.",
        },
      },
      {
        title: { es: "Reescribir un hallazgo débil", en: "Rewriting a weak finding" },
        problem: {
          es: "Un borrador dice: «El área de almacén es descuidada y no hace bien los conteos». ¿Cómo lo conviertes en un hallazgo útil?",
          en: "A draft says: \"The warehouse area is careless and doesn't count properly.\" How do you turn it into a useful finding?",
        },
        steps: [
          { es: "Condición con datos: «En 3 de 6 meses no se hizo el conteo cíclico; el conteo de junio mostró diferencias por $210,000».", en: "Condition with data: \"In 3 of 6 months the cycle count was not done; the June count showed differences of $210,000.\"" },
          { es: "Criterio: «La política de inventarios exige conteo cíclico mensual».", en: "Criteria: \"The inventory policy requires a monthly cycle count.\"" },
          { es: "Causa: «El almacén tiene una sola persona y nadie la cubre en vacaciones».", en: "Cause: \"The warehouse has a single person and nobody covers vacations.\"" },
          { es: "Efecto y recomendación: «Riesgo de pérdidas no detectadas; asignar un suplente y que contabilidad supervise el conteo». Plan: gerente de operaciones, 30 de noviembre.", en: "Effect and recommendation: \"Risk of undetected losses; assign a backup and have accounting supervise the count.\" Plan: operations manager, November 30." },
        ],
        result: {
          es: "El hallazgo pasa de un juicio sobre personas a un hecho medible, con causa, efecto en pesos y una acción con responsable y fecha.",
          en: "The finding goes from a judgment about people to a measurable fact, with cause, effect in pesos and an action with an owner and a date.",
        },
      },
    ],
    keyPoints: [
      { es: "El informe externo abre con la opinión y su fundamento; cierra con responsabilidades, firma y fecha.", en: "The external report opens with the opinion and its basis; it closes with responsibilities, signature and date." },
      { es: "Opiniones modificadas: con salvedades, desfavorable y abstención, según tipo de problema y si es generalizado.", en: "Modified opinions: qualified, adverse and disclaimer, depending on the type of issue and whether it is pervasive." },
      { es: "Las incorrecciones no corregidas se suman y se comparan con la materialidad.", en: "Uncorrected misstatements are added up and compared with materiality." },
      { es: "El párrafo de énfasis no modifica la opinión.", en: "An emphasis-of-matter paragraph does not modify the opinion." },
      { es: "Un hallazgo interno tiene condición, criterio, causa, efecto y recomendación, más un plan con responsable y fecha.", en: "An internal finding has condition, criteria, cause, effect and recommendation, plus a plan with an owner and a date." },
    ],
    normativeNote: NOTE_REPORT,
    exerciseIds: ['AUD-15-E1', 'AUD-15-E2', 'AUD-15-E3', 'AUD-15-E4', 'AUD-15-E5', 'AUD-15-E6'],
  },
]

export const exercises: Exercise[] = [
  // ═════════════════════════ AUD-13 ═════════════════════════
  {
    id: 'AUD-13-E1',
    level: 5,
    module: 'AUD-13',
    kind: 'mcq',
    flavor: 'case',
    context: {
      es: "En una refaccionaria de León, el encargado de cobranza recibe pagos en efectivo, los registra en el sistema y hace él mismo el depósito bancario. Nadie concilia los depósitos contra los recibos.",
      en: "At an auto parts store in León, the collections clerk receives cash payments, records them in the system and makes the bank deposit himself. Nobody reconciles deposits against receipts.",
    },
    prompt: {
      es: "¿Qué elemento del triángulo del fraude describe principalmente esta situación de cobranza?",
      en: "Which element of the fraud triangle does this collections situation mainly describe?",
    },
    options: [
      { id: 'AUD-13-E1-a', text: { es: "Presión", en: "Pressure" } },
      { id: 'AUD-13-E1-b', text: { es: "Racionalización", en: "Rationalization" } },
      { id: 'AUD-13-E1-c', text: { es: "Oportunidad", en: "Opportunity" } },
      { id: 'AUD-13-E1-d', text: { es: "Colusión", en: "Collusion" } },
    ],
    correctOptionId: 'AUD-13-E1-c',
    explanation: {
      es: "Una sola persona cobra, registra y deposita sin conciliación: es un hueco de control, es decir, oportunidad. No se menciona ninguna necesidad personal (presión) ni excusa (racionalización), y la colusión requiere al menos dos personas, que no es parte del triángulo. Error común: confundir la falta de controles con la presión del empleado.",
      en: "One person collects, records and deposits with no reconciliation: it is a control gap, i.e. opportunity. No personal need (pressure) or excuse (rationalization) is mentioned, and collusion requires at least two people and is not part of the triangle. Common mistake: confusing lack of controls with the employee's pressure.",
    },
    difficulty: 1,
    points: 10,
    competency: 'fraud-prevention',
  },
  {
    id: 'AUD-13-E2',
    level: 5,
    module: 'AUD-13',
    kind: 'classify',
    flavor: 'case',
    prompt: {
      es: "Clasifica cada situación según el elemento del triángulo del fraude que representa.",
      en: "Classify each situation by the element of the fraud triangle it represents.",
    },
    categories: [
      { id: 'AUD-13-E2-c1', label: { es: "Presión", en: "Pressure" } },
      { id: 'AUD-13-E2-c2', label: { es: "Oportunidad", en: "Opportunity" } },
      { id: 'AUD-13-E2-c3', label: { es: "Racionalización", en: "Rationalization" } },
    ],
    items: [
      { id: 'AUD-13-E2-i1', label: { es: "El bono del director depende de llegar a una meta de ventas que el mercado no permite alcanzar", en: "The director's bonus depends on a sales target the market does not allow reaching" }, correctCategoryId: 'AUD-13-E2-c1' },
      { id: 'AUD-13-E2-i2', label: { es: "El sistema de nómina permite dar de alta empleados sin autorización de recursos humanos", en: "The payroll system allows adding employees without HR approval" }, correctCategoryId: 'AUD-13-E2-c2' },
      { id: 'AUD-13-E2-i3', label: { es: "«Todos inflan sus viáticos, no es para tanto»", en: "\"Everyone pads their travel expenses, it's no big deal\"" }, correctCategoryId: 'AUD-13-E2-c3' },
      { id: 'AUD-13-E2-i4', label: { es: "Un comprador tiene una deuda de tarjeta de crédito que no puede pagar", en: "A buyer has a credit card debt he cannot pay" }, correctCategoryId: 'AUD-13-E2-c1' },
      { id: 'AUD-13-E2-i5', label: { es: "Los inventarios del almacén nunca se cuentan físicamente", en: "Warehouse inventory is never physically counted" }, correctCategoryId: 'AUD-13-E2-c2' },
      { id: 'AUD-13-E2-i6', label: { es: "«Solo lo tomo prestado y lo regreso en la quincena»", en: "\"I'm just borrowing it and will return it on payday\"" }, correctCategoryId: 'AUD-13-E2-c3' },
    ],
    explanation: {
      es: "Presión es la necesidad o el incentivo (bono inalcanzable, deuda). Oportunidad es el control débil (altas sin autorización, inventario sin conteo). Racionalización es la excusa interna («todos lo hacen», «lo devolveré»). Error común: clasificar el bono como oportunidad; el bono empuja a actuar, no facilita hacerlo.",
      en: "Pressure is the need or incentive (unreachable bonus, debt). Opportunity is the weak control (unapproved hires, uncounted inventory). Rationalization is the inner excuse (\"everyone does it\", \"I'll pay it back\"). Common mistake: classifying the bonus as opportunity; the bonus pushes someone to act, it does not make it easier to do.",
    },
    difficulty: 1,
    points: 15,
    competency: 'fraud-prevention',
  },
  {
    id: 'AUD-13-E3',
    level: 5,
    module: 'AUD-13',
    kind: 'numeric',
    flavor: 'case',
    context: {
      es: "Analizas 2,000 facturas de un proveedor. Según la ley de Benford, cerca del 30.1 % de los montos deberían empezar con el dígito 1. Usa exactamente 30.1 %.",
      en: "You analyze 2,000 invoices from one supplier. Under Benford's law, about 30.1% of amounts should begin with the digit 1. Use exactly 30.1%.",
    },
    prompt: {
      es: "¿Cuántas de esas facturas del proveedor esperarías que empiecen con el dígito 1?",
      en: "How many of the supplier's invoices would you expect to begin with the digit 1?",
    },
    answer: 602,
    unit: 'units',
    decimals: 0,
    tolerance: { abs: 0.5 },
    explanation: {
      es: "Esperado = 2,000 × 0.301 = 602 facturas. Si observas muchas menos (por ejemplo 350), es una señal de alerta que pide revisar esas facturas, no una prueba de fraude. Error común: suponer que cada dígito del 1 al 9 aparece igual (2,000 ÷ 9 ≈ 222).",
      en: "Expected = 2,000 × 0.301 = 602 invoices. If you observe far fewer (for example 350), it is a red flag calling for a review of those invoices, not proof of fraud. Common mistake: assuming each digit from 1 to 9 appears equally (2,000 ÷ 9 ≈ 222).",
    },
    difficulty: 2,
    points: 15,
    competency: 'fraud-prevention',
  },
  {
    id: 'AUD-13-E4',
    level: 5,
    module: 'AUD-13',
    kind: 'multi',
    flavor: 'interpret',
    prompt: {
      es: "Revisas la nómina de una maquiladora en busca de empleados fantasma. ¿Qué hallazgos son señales de alerta? Selecciona todas las que apliquen.",
      en: "You review a maquiladora's payroll looking for ghost employees. Which findings are red flags? Select all that apply.",
    },
    options: [
      { id: 'AUD-13-E4-a', text: { es: "Dos empleados distintos cobran en la misma cuenta bancaria", en: "Two different employees are paid into the same bank account" } },
      { id: 'AUD-13-E4-b', text: { es: "Un empleado no tiene registros de entrada, vacaciones ni incapacidades en todo el año", en: "An employee has no clock-ins, vacation or sick leave all year" } },
      { id: 'AUD-13-E4-c', text: { es: "Un empleado recibió un aumento aprobado por escrito por su director", en: "An employee received a raise approved in writing by her director" } },
      { id: 'AUD-13-E4-d', text: { es: "Un empleado dado de baja siguió recibiendo pagos tres quincenas después", en: "A terminated employee kept receiving payments three pay periods later" } },
      { id: 'AUD-13-E4-e', text: { es: "Un trabajador tomó sus vacaciones completas en diciembre", en: "A worker took his full vacation in December" } },
    ],
    correctOptionIds: ['AUD-13-E4-a', 'AUD-13-E4-b', 'AUD-13-E4-d'],
    explanation: {
      es: "Una cuenta bancaria compartida, un «empleado» sin ninguna actividad registrada y pagos después de la baja son patrones típicos de empleados fantasma. Un aumento aprobado por escrito y unas vacaciones normales son hechos ordinarios con soporte. Error común: marcar como sospechoso todo lo inusual en calendario, como tomar vacaciones en diciembre, que es lo más común.",
      en: "A shared bank account, an \"employee\" with no recorded activity and payments after termination are typical ghost-employee patterns. A raise approved in writing and normal vacation are ordinary, supported facts. Common mistake: flagging anything unusual on the calendar, like taking vacation in December, which is very common.",
    },
    difficulty: 2,
    points: 15,
    competency: 'fraud-prevention',
  },
  {
    id: 'AUD-13-E5',
    level: 5,
    module: 'AUD-13',
    kind: 'fields',
    flavor: 'case',
    context: {
      es: "Una prueba de pagos duplicados revisa 4,800 pagos del año. El sistema marca 36 posibles duplicados (mismo proveedor, monto y número de factura). Al revisarlos, 24 son duplicados reales con un monto promedio de $12,500 cada uno; los demás tenían explicación válida.",
      en: "A duplicate-payment test reviews 4,800 payments for the year. The system flags 36 possible duplicates (same supplier, amount and invoice number). On review, 24 are real duplicates averaging $12,500 each; the rest had a valid explanation.",
    },
    prompt: {
      es: "Calcula la pérdida confirmada, los falsos positivos y la tasa de confirmación de la prueba de pagos duplicados.",
      en: "Compute the confirmed loss, the false positives and the confirmation rate of the duplicate-payment test.",
    },
    fields: [
      { id: 'f1', label: { es: "Pérdida confirmada (MXN)", en: "Confirmed loss (MXN)" }, answer: 300000, unit: 'MXN', tolerance: { abs: 0.5 } },
      { id: 'f2', label: { es: "Falsos positivos (casos)", en: "False positives (cases)" }, answer: 12, unit: 'units', tolerance: { abs: 0 } },
      { id: 'f3', label: { es: "Tasa de confirmación (% de los marcados)", en: "Confirmation rate (% of flagged)" }, answer: 66.67, unit: '%', tolerance: { abs: 0.05 } },
    ],
    explanation: {
      es: "Pérdida: 24 × 12,500 = $300,000. Falsos positivos: 36 − 24 = 12. Tasa de confirmación: 24 ÷ 36 = 66.67 %. El siguiente paso es recuperar los pagos y averiguar si fueron errores o fraude (intención). Error común: dividir entre los 4,800 pagos totales (0.5 %), que mide otra cosa: la frecuencia en la población, no la precisión de la prueba.",
      en: "Loss: 24 × 12,500 = $300,000. False positives: 36 − 24 = 12. Confirmation rate: 24 ÷ 36 = 66.67%. The next step is to recover the payments and find out whether they were errors or fraud (intent). Common mistake: dividing by the 4,800 total payments (0.5%), which measures something else: frequency in the population, not the test's precision.",
    },
    difficulty: 3,
    points: 20,
    competency: 'fraud-prevention',
  },
  {
    id: 'AUD-13-E6',
    level: 5,
    module: 'AUD-13',
    kind: 'truefalse',
    flavor: 'concept',
    prompt: {
      es: "Si una empresa aplica bien la segregación de funciones, el riesgo de fraude en pagos queda eliminado por completo.",
      en: "If a company applies segregation of duties well, the risk of payment fraud is completely eliminated.",
    },
    answer: false,
    explanation: {
      es: "Falso. La segregación de funciones reduce la oportunidad, pero dos o más personas pueden ponerse de acuerdo (colusión) o un directivo puede saltarse los controles. Por eso se combina con controles detectivos, canal de denuncia y análisis de datos. Error común: pensar que un control bien diseñado da seguridad absoluta.",
      en: "False. Segregation of duties reduces opportunity, but two or more people can collude, or an executive can override controls. That is why it is combined with detective controls, a hotline and data analytics. Common mistake: thinking a well-designed control gives absolute assurance.",
    },
    difficulty: 1,
    points: 10,
    competency: 'fraud-prevention',
  },

  // ═════════════════════════ AUD-14 ═════════════════════════
  {
    id: 'AUD-14-E1',
    level: 5,
    module: 'AUD-14',
    kind: 'classify',
    flavor: 'concept',
    prompt: {
      es: "Clasifica cada actividad según la línea que le corresponde en el modelo de las tres líneas.",
      en: "Classify each activity by the line it belongs to in the three lines model.",
    },
    categories: [
      { id: 'AUD-14-E1-c1', label: { es: "Primera línea", en: "First line" } },
      { id: 'AUD-14-E1-c2', label: { es: "Segunda línea", en: "Second line" } },
      { id: 'AUD-14-E1-c3', label: { es: "Tercera línea", en: "Third line" } },
    ],
    items: [
      { id: 'AUD-14-E1-i1', label: { es: "El ejecutivo de sucursal pide identificación y comprobante de domicilio al abrir una cuenta", en: "The branch officer asks for ID and proof of address when opening an account" }, correctCategoryId: 'AUD-14-E1-c1' },
      { id: 'AUD-14-E1-i2', label: { es: "El área de cumplimiento diseña la metodología para evaluar riesgos de lavado de dinero", en: "The compliance area designs the methodology to assess money-laundering risk" }, correctCategoryId: 'AUD-14-E1-c2' },
      { id: 'AUD-14-E1-i3', label: { es: "Auditoría interna informa al comité de auditoría si el programa de cumplimiento funciona", en: "Internal audit reports to the audit committee on whether the compliance program works" }, correctCategoryId: 'AUD-14-E1-c3' },
      { id: 'AUD-14-E1-i4', label: { es: "El gerente de crédito aprueba préstamos dentro de los límites autorizados", en: "The credit manager approves loans within authorized limits" }, correctCategoryId: 'AUD-14-E1-c1' },
      { id: 'AUD-14-E1-i5', label: { es: "Gestión de riesgos monitorea los indicadores clave y alerta cuando pasan a rojo", en: "Risk management monitors key indicators and alerts when they turn red" }, correctCategoryId: 'AUD-14-E1-c2' },
    ],
    explanation: {
      es: "La primera línea opera y es dueña del riesgo (sucursal, crédito). La segunda diseña metodologías y vigila (cumplimiento, riesgos). La tercera, auditoría interna, da aseguramiento independiente al órgano de gobierno. Error común: poner a cumplimiento en la tercera línea por «revisar»; revisa, pero no es independiente de la administración como auditoría interna.",
      en: "The first line operates and owns risk (branch, credit). The second designs methodologies and monitors (compliance, risk). The third, internal audit, gives independent assurance to the governing body. Common mistake: placing compliance in the third line because it \"reviews\"; it does review, but it is not independent of management as internal audit is.",
    },
    difficulty: 2,
    points: 15,
    competency: 'compliance-risk',
  },
  {
    id: 'AUD-14-E2',
    level: 5,
    module: 'AUD-14',
    kind: 'mcq',
    flavor: 'concept',
    prompt: {
      es: "El consejo declara: «Aceptamos un riesgo bajo de sanciones regulatorias» y fija «máximo 1 % de reportes regulatorios entregados tarde». ¿Cómo se llama cada parte?",
      en: "The board states: \"We accept low regulatory-sanction risk\" and sets \"at most 1% of regulatory reports filed late\". What is each part called?",
    },
    options: [
      { id: 'AUD-14-E2-a', text: { es: "La primera es la tolerancia y la segunda el apetito de riesgo", en: "The first is tolerance and the second is risk appetite" } },
      { id: 'AUD-14-E2-b', text: { es: "La primera es el apetito de riesgo y la segunda la tolerancia", en: "The first is risk appetite and the second is tolerance" } },
      { id: 'AUD-14-E2-c', text: { es: "Ambas son riesgo inherente", en: "Both are inherent risk" } },
      { id: 'AUD-14-E2-d', text: { es: "La primera es un control y la segunda un hallazgo", en: "The first is a control and the second is a finding" } },
    ],
    correctOptionId: 'AUD-14-E2-b',
    explanation: {
      es: "El apetito es la declaración general de cuánto riesgo se acepta; la tolerancia lo traduce a un límite medible en una métrica (1 % de reportes tarde). Error común: invertirlos; la tolerancia siempre es la cifra concreta que permite saber si te pasaste.",
      en: "Appetite is the general statement of how much risk is accepted; tolerance translates it into a measurable limit on a metric (1% of late reports). Common mistake: swapping them; tolerance is always the concrete figure that tells you whether you went over.",
    },
    difficulty: 1,
    points: 10,
    competency: 'compliance-risk',
  },
  {
    id: 'AUD-14-E3',
    level: 5,
    module: 'AUD-14',
    kind: 'fields',
    flavor: 'case',
    context: {
      es: "Una casa de cambio tiene tolerancia de 5 % de expedientes de clientes incompletos. Cumplimiento revisa una muestra de 80 expedientes y encuentra 6 sin identificación oficial vigente.",
      en: "A currency exchange house has a 5% tolerance for incomplete customer files. Compliance reviews a sample of 80 files and finds 6 without a valid official ID.",
    },
    prompt: {
      es: "Calcula la tasa de excepción, la tasa de cumplimiento y cuántos puntos porcentuales rebasa la tolerancia la casa de cambio.",
      en: "Compute the exception rate, the compliance rate and by how many percentage points the exchange house exceeds tolerance.",
    },
    fields: [
      { id: 'f1', label: { es: "Tasa de excepción (%)", en: "Exception rate (%)" }, answer: 7.5, unit: '%', tolerance: { abs: 0.05 } },
      { id: 'f2', label: { es: "Tasa de cumplimiento (%)", en: "Compliance rate (%)" }, answer: 92.5, unit: '%', tolerance: { abs: 0.05 } },
      { id: 'f3', label: { es: "Exceso sobre la tolerancia (puntos porcentuales)", en: "Excess over tolerance (percentage points)" }, answer: 2.5, unit: '%', tolerance: { abs: 0.05 } },
    ],
    explanation: {
      es: "Excepción: 6 ÷ 80 = 7.5 %. Cumplimiento: 100 − 7.5 = 92.5 %. Exceso: 7.5 − 5 = 2.5 puntos porcentuales. Al rebasar la tolerancia, se busca la causa, se corrigen los expedientes y se reporta. Error común: calcular el exceso como 7.5 ÷ 5 = 1.5 veces y llamarlo «1.5 %».",
      en: "Exception: 6 ÷ 80 = 7.5%. Compliance: 100 − 7.5 = 92.5%. Excess: 7.5 − 5 = 2.5 percentage points. Being over tolerance, the cause is sought, files are corrected and the breach is reported. Common mistake: computing the excess as 7.5 ÷ 5 = 1.5 times and calling it \"1.5%\".",
    },
    difficulty: 2,
    points: 15,
    competency: 'compliance-risk',
  },
  {
    id: 'AUD-14-E4',
    level: 5,
    module: 'AUD-14',
    kind: 'truefalse',
    flavor: 'concept',
    prompt: {
      es: "Para ahorrar costos, lo ideal es que auditoría interna diseñe y opere los controles de cumplimiento, porque así conoce mejor lo que luego evaluará.",
      en: "To save costs, ideally internal audit should design and run the compliance controls, because that way it knows best what it will later evaluate.",
    },
    answer: false,
    explanation: {
      es: "Falso. Si auditoría interna diseña y opera los controles, pierde su independencia: terminaría evaluando su propio trabajo. Diseñar y operar corresponde a la primera y segunda líneas; auditoría interna puede asesorar, pero sin asumir responsabilidades de la administración. Error común: creer que conocer el proceso desde dentro vale más que la objetividad.",
      en: "False. If internal audit designs and runs the controls, it loses its independence: it would end up evaluating its own work. Designing and operating belong to the first and second lines; internal audit may advise, but without taking on management responsibilities. Common mistake: believing inside knowledge of the process is worth more than objectivity.",
    },
    difficulty: 1,
    points: 10,
    competency: 'compliance-risk',
  },
  {
    id: 'AUD-14-E5',
    level: 5,
    module: 'AUD-14',
    kind: 'numeric',
    flavor: 'case',
    context: {
      es: "Una empresa usa el método simplificado: riesgo residual = riesgo inherente × (1 − efectividad del control), en una escala de 1 a 25. El riesgo inherente de incumplir obligaciones fiscales es 16 y las pruebas muestran que sus controles tienen 75 % de efectividad.",
      en: "A company uses the simplified method: residual risk = inherent risk × (1 − control effectiveness), on a 1 to 25 scale. The inherent risk of breaching tax obligations is 16 and tests show its controls are 75% effective.",
    },
    prompt: {
      es: "¿Cuál es el riesgo residual de incumplimiento fiscal en esa escala?",
      en: "What is the residual risk of tax non-compliance on that scale?",
    },
    answer: 4,
    unit: 'none',
    decimals: 0,
    tolerance: { abs: 0.01 },
    explanation: {
      es: "Residual = 16 × (1 − 0.75) = 16 × 0.25 = 4. Error común: multiplicar por la efectividad (16 × 0.75 = 12), que da el riesgo que el control mitiga, no el que queda.",
      en: "Residual = 16 × (1 − 0.75) = 16 × 0.25 = 4. Common mistake: multiplying by effectiveness (16 × 0.75 = 12), which gives the risk the control mitigates, not what remains.",
    },
    difficulty: 2,
    points: 15,
    competency: 'compliance-risk',
  },
  {
    id: 'AUD-14-E6',
    level: 5,
    module: 'AUD-14',
    kind: 'multi',
    flavor: 'concept',
    prompt: {
      es: "¿Qué elementos son parte de un programa de cumplimiento eficaz? Selecciona todos los que apliquen.",
      en: "Which elements are part of an effective compliance program? Select all that apply.",
    },
    options: [
      { id: 'AUD-14-E6-a', text: { es: "Un inventario actualizado de las obligaciones que aplican a la empresa", en: "An up-to-date inventory of the obligations that apply to the company" } },
      { id: 'AUD-14-E6-b', text: { es: "Un oficial de cumplimiento con autoridad y acceso directo al consejo o comité", en: "A compliance officer with authority and direct access to the board or committee" } },
      { id: 'AUD-14-E6-c', text: { es: "Un manual aprobado una sola vez que no se vuelve a revisar", en: "A manual approved once and never reviewed again" } },
      { id: 'AUD-14-E6-d', text: { es: "Capacitación dirigida según el riesgo de cada área", en: "Targeted training according to each area's risk" } },
      { id: 'AUD-14-E6-e', text: { es: "Seguimiento a los cambios en leyes y reglas de las autoridades", en: "Tracking changes in laws and regulators' rules" } },
    ],
    correctOptionIds: ['AUD-14-E6-a', 'AUD-14-E6-b', 'AUD-14-E6-d', 'AUD-14-E6-e'],
    explanation: {
      es: "Un programa eficaz conoce sus obligaciones, tiene un responsable con autoridad, capacita según el riesgo y vigila los cambios regulatorios. Un manual que nunca se revisa es un programa «de papel»: las leyes cambian y el programa queda obsoleto. Error común: confundir tener políticas escritas con cumplir.",
      en: "An effective program knows its obligations, has a responsible person with authority, trains according to risk and watches regulatory change. A manual never reviewed is a \"paper\" program: laws change and the program becomes obsolete. Common mistake: confusing having written policies with complying.",
    },
    difficulty: 2,
    points: 15,
    competency: 'compliance-risk',
  },

  // ═════════════════════════ AUD-15 ═════════════════════════
  {
    id: 'AUD-15-E1',
    level: 5,
    module: 'AUD-15',
    kind: 'mcq',
    flavor: 'case',
    context: {
      es: "La materialidad global es $3,000,000. La empresa no quiere corregir una sobrevaluación de inventarios de $4,500,000. Todo lo demás en los estados financieros es correcto.",
      en: "Overall materiality is $3,000,000. The company refuses to correct a $4,500,000 inventory overstatement. Everything else in the financial statements is correct.",
    },
    prompt: {
      es: "¿Qué tipo de opinión corresponde ante esta sobrevaluación de inventarios no corregida?",
      en: "Which type of opinion fits this uncorrected inventory overstatement?",
    },
    options: [
      { id: 'AUD-15-E1-a', text: { es: "Opinión limpia con un párrafo de énfasis", en: "Clean opinion with an emphasis-of-matter paragraph" } },
      { id: 'AUD-15-E1-b', text: { es: "Opinión con salvedades", en: "Qualified opinion" } },
      { id: 'AUD-15-E1-c', text: { es: "Opinión desfavorable", en: "Adverse opinion" } },
      { id: 'AUD-15-E1-d', text: { es: "Abstención de opinión", en: "Disclaimer of opinion" } },
    ],
    correctOptionId: 'AUD-15-E1-b',
    explanation: {
      es: "Es una incorrección (no una falta de evidencia), es material (4.5 millones > 3 millones) y no es generalizada (afecta inventarios, costo y utilidad; el resto está bien): opinión con salvedades. La desfavorable requiere que sea generalizada; la abstención es para cuando no se obtuvo evidencia; el énfasis no corrige una incorrección. Error común: elegir desfavorable solo porque el monto supera la materialidad.",
      en: "It is a misstatement (not a lack of evidence), it is material (4.5 million > 3 million) and it is not pervasive (it affects inventory, cost and profit; the rest is fine): qualified opinion. Adverse requires pervasiveness; a disclaimer is for when evidence could not be obtained; an emphasis paragraph does not fix a misstatement. Common mistake: choosing adverse just because the amount exceeds materiality.",
    },
    difficulty: 2,
    points: 15,
    competency: 'audit-reporting',
  },
  {
    id: 'AUD-15-E2',
    level: 5,
    module: 'AUD-15',
    kind: 'classify',
    flavor: 'case',
    prompt: {
      es: "Clasifica cada situación de auditoría externa según la opinión que debe emitirse.",
      en: "Classify each external audit situation by the opinion that should be issued.",
    },
    categories: [
      { id: 'AUD-15-E2-c1', label: { es: "Limpia (no modificada)", en: "Clean (unmodified)" } },
      { id: 'AUD-15-E2-c2', label: { es: "Con salvedades", en: "Qualified" } },
      { id: 'AUD-15-E2-c3', label: { es: "Desfavorable", en: "Adverse" } },
      { id: 'AUD-15-E2-c4', label: { es: "Abstención", en: "Disclaimer" } },
    ],
    items: [
      { id: 'AUD-15-E2-i1', label: { es: "Se destruyeron casi todos los registros contables en un incendio y no hay forma de reconstruirlos", en: "Almost all accounting records were destroyed in a fire and cannot be rebuilt" }, correctCategoryId: 'AUD-15-E2-c4' },
      { id: 'AUD-15-E2-i2', label: { es: "Las incorrecciones encontradas fueron corregidas por la empresa y no queda nada material", en: "The misstatements found were corrected by the company and nothing material remains" }, correctCategoryId: 'AUD-15-E2-c1' },
      { id: 'AUD-15-E2-i3', label: { es: "La empresa no consolida a sus subsidiarias, que representan la mayor parte de sus activos e ingresos", en: "The company does not consolidate its subsidiaries, which make up most of its assets and revenue" }, correctCategoryId: 'AUD-15-E2-c3' },
      { id: 'AUD-15-E2-i4', label: { es: "No se pudo observar el conteo de un almacén que es material, pero el resto se auditó sin problemas", en: "The count of one material warehouse could not be observed, but the rest was audited without issues" }, correctCategoryId: 'AUD-15-E2-c2' },
      { id: 'AUD-15-E2-i5', label: { es: "Una demanda importante está bien revelada en las notas y el auditor la destaca con un párrafo de énfasis", en: "A major lawsuit is properly disclosed in the notes and the auditor highlights it with an emphasis paragraph" }, correctCategoryId: 'AUD-15-E2-c1' },
    ],
    explanation: {
      es: "Sin registros en casi todo: limitación material y generalizada → abstención. Todo corregido: limpia. No consolidar lo principal: incorrección material y generalizada → desfavorable. Un almacén sin observar: limitación material no generalizada → con salvedades. El énfasis no modifica la opinión → limpia. Error común: creer que el párrafo de énfasis convierte la opinión en «con salvedades».",
      en: "No records for almost everything: material and pervasive limitation → disclaimer. Everything corrected: clean. Not consolidating the core business: material and pervasive misstatement → adverse. One warehouse not observed: material, not pervasive limitation → qualified. Emphasis does not modify the opinion → clean. Common mistake: believing an emphasis paragraph turns the opinion into a qualified one.",
    },
    difficulty: 3,
    points: 20,
    competency: 'audit-reporting',
  },
  {
    id: 'AUD-15-E3',
    level: 5,
    module: 'AUD-15',
    kind: 'formula',
    flavor: 'concept',
    prompt: {
      es: "Completa la estructura de un hallazgo de auditoría interna: lo que encontraste, frente a lo que debería ser, por qué pasó y qué consecuencia tiene.",
      en: "Complete the structure of an internal audit finding: what you found, versus what should be, why it happened and what consequence it has.",
    },
    template: '{{b1}} vs. {{b2}} → {{b3}} → {{b4}} → Recomendación / Recommendation',
    blanks: [
      {
        id: 'b1',
        options: [
          { id: 'AUD-15-E3-b1-a', text: { es: "Efecto", en: "Effect" } },
          { id: 'AUD-15-E3-b1-b', text: { es: "Condición", en: "Condition" } },
          { id: 'AUD-15-E3-b1-c', text: { es: "Opinión", en: "Opinion" } },
        ],
        correctOptionId: 'AUD-15-E3-b1-b',
      },
      {
        id: 'b2',
        options: [
          { id: 'AUD-15-E3-b2-a', text: { es: "Criterio", en: "Criteria" } },
          { id: 'AUD-15-E3-b2-b', text: { es: "Causa", en: "Cause" } },
          { id: 'AUD-15-E3-b2-c', text: { es: "Materialidad", en: "Materiality" } },
        ],
        correctOptionId: 'AUD-15-E3-b2-a',
      },
      {
        id: 'b3',
        options: [
          { id: 'AUD-15-E3-b3-a', text: { es: "Condición", en: "Condition" } },
          { id: 'AUD-15-E3-b3-b', text: { es: "Efecto", en: "Effect" } },
          { id: 'AUD-15-E3-b3-c', text: { es: "Causa", en: "Cause" } },
        ],
        correctOptionId: 'AUD-15-E3-b3-c',
      },
      {
        id: 'b4',
        options: [
          { id: 'AUD-15-E3-b4-a', text: { es: "Efecto", en: "Effect" } },
          { id: 'AUD-15-E3-b4-b', text: { es: "Criterio", en: "Criteria" } },
          { id: 'AUD-15-E3-b4-c', text: { es: "Alcance", en: "Scope" } },
        ],
        correctOptionId: 'AUD-15-E3-b4-a',
      },
    ],
    explanation: {
      es: "Un hallazgo compara la condición (lo que es) con el criterio (lo que debería ser), explica la causa (por qué) y el efecto (la consecuencia), y termina en una recomendación que ataca la causa. Opinión, materialidad y alcance son conceptos del informe, no atributos del hallazgo. Error común: confundir causa con efecto; la causa explica por qué pasó, el efecto dice qué provocó.",
      en: "A finding compares the condition (what is) with the criteria (what should be), explains the cause (why) and the effect (the consequence), and ends in a recommendation that addresses the cause. Opinion, materiality and scope are report concepts, not finding attributes. Common mistake: confusing cause with effect; the cause explains why it happened, the effect says what it led to.",
    },
    difficulty: 1,
    points: 10,
    competency: 'audit-reporting',
  },
  {
    id: 'AUD-15-E4',
    level: 5,
    module: 'AUD-15',
    kind: 'fields',
    flavor: 'case',
    context: {
      es: "El auditor fija la materialidad global en 5 % de la utilidad antes de impuestos, que es de $50,000,000. Quedan sin corregir tres incorrecciones que inflan la utilidad: inventario sobrevaluado por $1,800,000, ventas registradas antes de tiempo por $900,000 y gastos no registrados por $400,000.",
      en: "The auditor sets overall materiality at 5% of pre-tax profit, which is $50,000,000. Three uncorrected misstatements remain, all inflating profit: inventory overstated by $1,800,000, sales recorded early for $900,000 and unrecorded expenses of $400,000.",
    },
    prompt: {
      es: "Calcula la materialidad global, el total de incorrecciones no corregidas y cuánto excede ese total a la materialidad.",
      en: "Compute overall materiality, the total of uncorrected misstatements and how much that total exceeds materiality.",
    },
    fields: [
      { id: 'f1', label: { es: "Materialidad global (MXN)", en: "Overall materiality (MXN)" }, answer: 2500000, unit: 'MXN', tolerance: { abs: 0.5 } },
      { id: 'f2', label: { es: "Total de incorrecciones no corregidas (MXN)", en: "Total uncorrected misstatements (MXN)" }, answer: 3100000, unit: 'MXN', tolerance: { abs: 0.5 } },
      { id: 'f3', label: { es: "Exceso sobre la materialidad (MXN)", en: "Excess over materiality (MXN)" }, answer: 600000, unit: 'MXN', tolerance: { abs: 0.5 } },
    ],
    explanation: {
      es: "Materialidad: 50,000,000 × 5 % = $2,500,000. Total: 1,800,000 + 900,000 + 400,000 = $3,100,000. Exceso: 3,100,000 − 2,500,000 = $600,000. Ninguna incorrección es material por sí sola, pero juntas sí; si la empresa no corrige y no son generalizadas, la opinión sería con salvedades. Error común: evaluar cada incorrección por separado y concluir que la opinión es limpia.",
      en: "Materiality: 50,000,000 × 5% = $2,500,000. Total: 1,800,000 + 900,000 + 400,000 = $3,100,000. Excess: 3,100,000 − 2,500,000 = $600,000. No single misstatement is material, but together they are; if the company does not correct and they are not pervasive, the opinion would be qualified. Common mistake: evaluating each misstatement separately and concluding the opinion is clean.",
    },
    difficulty: 3,
    points: 20,
    competency: 'audit-reporting',
  },
  {
    id: 'AUD-15-E5',
    level: 5,
    module: 'AUD-15',
    kind: 'truefalse',
    flavor: 'concept',
    prompt: {
      es: "Cuando el auditor agrega un párrafo de énfasis sobre un asunto bien revelado en las notas, su opinión pasa a ser una opinión con salvedades.",
      en: "When the auditor adds an emphasis-of-matter paragraph about an issue properly disclosed in the notes, the opinion becomes a qualified opinion.",
    },
    answer: false,
    explanation: {
      es: "Falso. El párrafo de énfasis (NIA 706) solo dirige la atención del lector a algo que ya está correctamente presentado; la opinión sigue siendo no modificada. Una salvedad surge cuando hay una incorrección o limitación material. Error común: pensar que cualquier párrafo adicional en el informe es una señal de opinión modificada.",
      en: "False. An emphasis-of-matter paragraph (ISA 706) only directs readers' attention to something already properly presented; the opinion remains unmodified. A qualification arises when there is a material misstatement or limitation. Common mistake: thinking any additional paragraph in the report signals a modified opinion.",
    },
    difficulty: 1,
    points: 10,
    competency: 'audit-reporting',
  },
  {
    id: 'AUD-15-E6',
    level: 5,
    module: 'AUD-15',
    kind: 'multi',
    flavor: 'concept',
    prompt: {
      es: "¿Qué elementos debe incluir el informe del auditor independiente sobre estados financieros? Selecciona todos los que apliquen.",
      en: "Which elements must the independent auditor's report on financial statements include? Select all that apply.",
    },
    options: [
      { id: 'AUD-15-E6-a', text: { es: "La opinión del auditor", en: "The auditor's opinion" } },
      { id: 'AUD-15-E6-b', text: { es: "El fundamento de la opinión, incluida la independencia del auditor", en: "The basis for opinion, including the auditor's independence" } },
      { id: 'AUD-15-E6-c', text: { es: "La lista detallada de todas las pruebas y muestras realizadas", en: "The detailed list of every test and sample performed" } },
      { id: 'AUD-15-E6-d', text: { es: "Las responsabilidades de la administración y las del auditor", en: "The responsibilities of management and of the auditor" } },
      { id: 'AUD-15-E6-e', text: { es: "Una garantía de que los estados financieros no contienen ningún error", en: "A guarantee that the financial statements contain no errors at all" } },
      { id: 'AUD-15-E6-f', text: { es: "La firma del auditor y la fecha del informe", en: "The auditor's signature and the report date" } },
    ],
    correctOptionIds: ['AUD-15-E6-a', 'AUD-15-E6-b', 'AUD-15-E6-d', 'AUD-15-E6-f'],
    explanation: {
      es: "El informe incluye opinión, fundamento, responsabilidades de ambas partes, firma y fecha. Las pruebas detalladas quedan en los papeles de trabajo, no en el informe, y el auditor da seguridad razonable, nunca una garantía absoluta. Error común: pensar que una opinión limpia certifica que no hay ningún error.",
      en: "The report includes the opinion, basis, both parties' responsibilities, signature and date. Detailed tests stay in the working papers, not in the report, and the auditor gives reasonable assurance, never an absolute guarantee. Common mistake: thinking a clean opinion certifies there are no errors at all.",
    },
    difficulty: 2,
    points: 15,
    competency: 'audit-reporting',
  },
]
