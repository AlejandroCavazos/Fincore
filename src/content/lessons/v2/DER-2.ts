import type { Exercise, Lesson } from '../../../types'

/**
 * FINCORE — Temario v2.0 · Derecho Empresarial y Regulación (México) · Nivel 2 (Intermedio)
 * DER.7 a DER.12: derecho laboral, LFT, obligaciones patronales, propiedad intelectual,
 * marcas/patentes/derechos de autor y derecho financiero y bancario.
 */

const NOTE_LABOR = {
  es: "Contenido educativo basado en el artículo 123 de la Constitución y en la Ley Federal del Trabajo (LFT), incluidas sus reformas de justicia laboral (2019), subcontratación (2021) y vacaciones (2022, vigente desde 2023). Las leyes laborales cambian (por ejemplo, se ha discutido reducir la jornada semanal): verifica la versión vigente (2026) y consulta a un especialista antes de aplicarlo a un caso real. Las cifras de los ejemplos son hipotéticas.",
  en: "Educational content based on Article 123 of the Mexican Constitution and the Federal Labor Law (LFT), including its labor-justice (2019), subcontracting (2021) and vacation (2022, in force since 2023) reforms. Labor laws change (for example, reducing the weekly working hours has been discussed): verify the current version (2026) and consult a specialist before applying it to a real case. The figures in the examples are hypothetical.",
}

const NOTE_EMPLOYER = {
  es: "Contenido educativo. Las obligaciones ante el IMSS (Ley del Seguro Social), el INFONAVIT, el SAT y los gobiernos estatales se describen de forma general. Las cuotas, tasas, topes y plazos cambian con reformas y varían por estado (el impuesto sobre nóminas lo fija cada entidad): verifica la regulación vigente (2026). Las cifras y tasas de los ejemplos son hipotéticas o ilustrativas.",
  en: "Educational content. Obligations before IMSS (Social Security Law), INFONAVIT, SAT and state governments are described in general terms. Contributions, rates, caps and deadlines change with reforms and vary by state (each state sets its payroll tax): verify the current rules (2026). The figures and rates in the examples are hypothetical or illustrative.",
}

const NOTE_IP = {
  es: "Contenido educativo basado en la Ley Federal de Protección a la Propiedad Industrial (vigente desde 2020, administrada por el IMPI) y en la Ley Federal del Derecho de Autor (administrada por el INDAUTOR). Los plazos de protección, requisitos y trámites pueden cambiar: verifica la versión vigente (2026) y asesórate con un especialista antes de registrar o licenciar.",
  en: "Educational content based on the Federal Law for the Protection of Industrial Property (in force since 2020, administered by IMPI) and the Federal Copyright Law (administered by INDAUTOR). Protection terms, requirements and procedures may change: verify the current version (2026) and get specialist advice before filing or licensing.",
}

const NOTE_BANK = {
  es: "Contenido educativo basado en la Ley de Instituciones de Crédito y en la Ley General de Títulos y Operaciones de Crédito, descritas de forma general. Los porcentajes, límites del seguro de depósitos (IPAB) y reglas de transparencia cambian con el tiempo: verifica la versión vigente (2026). Las tasas de los ejemplos son hipotéticas.",
  en: "Educational content based on the Credit Institutions Law and the General Law of Negotiable Instruments and Credit Transactions, described in general terms. Percentages, deposit-insurance limits (IPAB) and transparency rules change over time: verify the current version (2026). The rates in the examples are hypothetical.",
}

export const lessons: Lesson[] = [
  // ───────────────────────────── DER-07 ─────────────────────────────
  {
    id: 'DER-07',
    level: 2,
    topicIds: ['DER.7'],
    title: { es: "Derecho laboral", en: "Labor law" },
    summary: {
      es: "El derecho laboral protege a quien trabaja bajo las órdenes de otro a cambio de un salario, con principios que no se pueden renunciar y reglas para la relación individual, la colectiva y la solución de conflictos.",
      en: "Labor law protects whoever works under someone else's direction in exchange for a wage, with principles that cannot be waived and rules for the individual relationship, the collective one and dispute resolution.",
    },
    minutes: 15,
    objectives: [
      { es: "Explicar qué es el derecho laboral, sus fuentes en México y sus principios protectores.", en: "Explain what labor law is, its sources in Mexico and its protective principles." },
      { es: "Distinguir una relación de trabajo de un contrato de servicios profesionales por la subordinación.", en: "Distinguish an employment relationship from a professional services contract by subordination." },
      { es: "Diferenciar el derecho individual del colectivo y conocer las reglas básicas de la subcontratación.", en: "Tell individual from collective labor law and know the basic rules of subcontracting." },
      { es: "Describir cómo se resuelven hoy los conflictos laborales: conciliación primero y tribunales después.", en: "Describe how labor disputes are resolved today: conciliation first and courts afterwards." },
    ],
    theory: [
      {
        heading: { es: "Qué es el derecho laboral y de dónde viene", en: "What labor law is and where it comes from" },
        body: [
          {
            es: "El **derecho laboral** (o del trabajo) es el conjunto de reglas que ordena la relación entre quien **trabaja** y quien **paga** por ese trabajo. Nació porque las dos partes no negocian en igualdad: la empresa suele tener más poder que una persona que necesita el empleo para vivir. Por eso este derecho es **protector**: busca equilibrar la balanza a favor del trabajador.",
            en: "**Labor law** (or employment law) is the set of rules that governs the relationship between whoever **works** and whoever **pays** for that work. It was born because the two sides do not negotiate as equals: the company usually has more power than a person who needs the job to live. That is why this law is **protective**: it seeks to balance the scale in the worker's favor.",
          },
          {
            es: "En México su base está en el **artículo 123 de la Constitución**. Su **apartado A** cubre a los trabajadores de empresas privadas y su **apartado B** a quienes trabajan para el gobierno federal. El apartado A se desarrolla en la **Ley Federal del Trabajo (LFT)**. Otras fuentes son los **contratos colectivos**, los **reglamentos interiores de trabajo**, los tratados internacionales firmados por México y las decisiones de los tribunales.",
            en: "In Mexico its foundation is **Article 123 of the Constitution**. Its **Section A** covers private-company workers and its **Section B** covers those who work for the federal government. Section A is developed in the **Federal Labor Law (LFT)**. Other sources are **collective agreements**, **internal work regulations**, international treaties signed by Mexico and court decisions.",
          },
          {
            es: "Dos principios lo marcan todo. **Irrenunciabilidad**: el trabajador no puede renunciar a sus derechos mínimos, aunque lo firme; esa cláusula no vale. **In dubio pro operario**: si una norma admite dos lecturas, se aplica la más favorable al trabajador. Mini ejemplo: si un contrato dice que la empleada «acepta no tener vacaciones», esa parte es nula y conserva sus vacaciones de ley.",
            en: "Two principles shape everything. **Non-waivability**: workers cannot give up their minimum rights, even in writing; such a clause is void. **In dubio pro operario**: if a rule can be read two ways, the one most favorable to the worker applies. Mini example: if a contract says the employee «agrees to have no vacation», that part is void and she keeps her statutory vacation.",
          },
        ],
        bullets: [
          { es: "Constitución, artículo 123: la base de todos los derechos laborales.", en: "Constitution, Article 123: the basis of all labor rights." },
          { es: "LFT: la ley que detalla el apartado A (empresas privadas).", en: "LFT: the law that details Section A (private companies)." },
          { es: "Contratos colectivos y reglamentos internos: reglas de cada empresa o sector.", en: "Collective agreements and internal regulations: rules for each company or sector." },
          { es: "Principios: protección, irrenunciabilidad, estabilidad en el empleo y norma más favorable.", en: "Principles: protection, non-waivability, job stability and most favorable rule." },
        ],
      },
      {
        heading: { es: "La relación de trabajo: la clave es la subordinación", en: "The employment relationship: the key is subordination" },
        body: [
          {
            es: "Para la ley hay **relación de trabajo** cuando una persona presta un **trabajo personal**, **subordinado** y a cambio de un **salario**. **Subordinado** significa que trabaja bajo las órdenes de otro: el patrón le dice qué hacer, en qué horario y con qué herramientas. Si hay subordinación, hay relación laboral, **sin importar el nombre** que le pongan al contrato.",
            en: "Under the law there is an **employment relationship** when a person provides **personal work**, **subordinated** and in exchange for a **wage**. **Subordinated** means working under someone else's direction: the employer tells them what to do, at what hours and with what tools. If there is subordination, there is an employment relationship, **regardless of the name** given to the contract.",
          },
          {
            es: "Distinto es un **contrato de servicios profesionales** (por honorarios): un contador independiente que atiende a varios clientes, pone sus horarios, usa su propio equipo y entrega resultados. Ahí no hay jefe ni horario impuesto, así que no aplica la LFT sino el derecho civil o mercantil. A esta idea de mirar los hechos y no la etiqueta se le llama **primacía de la realidad**.",
            en: "A **professional services contract** (fee-based) is different: an independent accountant who serves several clients, sets her own hours, uses her own equipment and delivers results. There is no boss or imposed schedule, so the LFT does not apply but civil or commercial law does. This idea of looking at the facts rather than the label is called **primacy of reality**.",
          },
          {
            es: "La relación laboral puede ser **individual** (un trabajador y su patrón: contrato, salario, jornada) o **colectiva** (un **sindicato** frente a una o varias empresas: **contrato colectivo**, negociación y **huelga**). Mini ejemplo: Ana firma «honorarios» con una agencia, pero entra a las 9, tiene jefa y usa la computadora de la oficina: en los hechos es trabajadora y tiene derechos laborales.",
            en: "The employment relationship can be **individual** (one worker and their employer: contract, wage, working hours) or **collective** (a **union** facing one or several companies: **collective agreement**, bargaining and **strike**). Mini example: Ana signs a «fee-based» contract with an agency, but she clocks in at 9, has a boss and uses the office computer: in fact she is an employee and has labor rights.",
          },
        ],
      },
      {
        heading: { es: "Subcontratación y justicia laboral", en: "Subcontracting and labor justice" },
        body: [
          {
            es: "La **subcontratación** (outsourcing) es cuando otra empresa pone trabajadores para ti. Desde la **reforma de 2021**, en México está **prohibido subcontratar personal** para las actividades propias de tu negocio. Solo se permite contratar **servicios u obras especializadas** que no formen parte de tu objeto social ni de tu actividad principal, con un proveedor inscrito en el **registro de la Secretaría del Trabajo (REPSE)**. Las **agencias de colocación** pueden reclutar y seleccionar, pero no ser el patrón.",
            en: "**Subcontracting** (outsourcing) is when another company supplies workers for you. Since the **2021 reform**, Mexico **prohibits subcontracting personnel** for your business's core activities. You may only hire **specialized services or works** that are not part of your corporate purpose or main activity, from a provider listed in the **Labor Ministry's registry (REPSE)**. **Placement agencies** may recruit and select, but not be the employer.",
          },
          {
            es: "Para resolver conflictos, la **reforma de 2019** cambió el sistema: las antiguas Juntas de Conciliación y Arbitraje dieron paso a **tribunales laborales** del Poder Judicial. Antes de demandar, en la mayoría de los casos hay que pasar por una **conciliación prejudicial** obligatoria en un **Centro de Conciliación**, donde un tercero neutral ayuda a llegar a un acuerdo.",
            en: "To resolve disputes, the **2019 reform** changed the system: the old Conciliation and Arbitration Boards gave way to **labor courts** within the Judiciary. Before suing, in most cases you must go through a mandatory **pre-trial conciliation** at a **Conciliation Center**, where a neutral third party helps reach an agreement.",
          },
          {
            es: "Mini ejemplo: una fábrica de galletas puede contratar a una empresa especializada en mantenimiento de calderas registrada en el REPSE, porque eso no es hacer galletas. Pero no puede pedir a otra empresa que le «preste» a sus panaderos: hornear es su actividad principal.",
            en: "Mini example: a cookie factory can hire a boiler-maintenance company registered in REPSE, because that is not making cookies. But it cannot ask another company to «lend» it bakers: baking is its main activity.",
          },
        ],
        bullets: [
          { es: "Prohibido: subcontratar personal para tu actividad principal.", en: "Prohibited: subcontracting personnel for your main activity." },
          { es: "Permitido: servicios especializados ajenos a tu actividad, con proveedor en REPSE.", en: "Allowed: specialized services outside your activity, with a REPSE-registered provider." },
          { es: "Permitido: agencias que solo reclutan y seleccionan.", en: "Allowed: agencies that only recruit and select." },
          { es: "Conflictos: primero conciliación, después tribunal laboral.", en: "Disputes: conciliation first, then labor court." },
        ],
      },
    ],
    examples: [
      {
        title: { es: "¿Empleado o prestador de servicios?", en: "Employee or service provider?" },
        problem: {
          es: "Una tienda en línea contrata a Luis «por honorarios» para atender el chat de clientes. Debe conectarse de 9 a 6, recibe instrucciones diarias de una supervisora, usa la laptop de la empresa y cobra $12,000 al mes. ¿Qué relación existe?",
          en: "An online store hires Luis on a «fee basis» to handle the customer chat. He must log in from 9 to 6, receives daily instructions from a supervisor, uses the company laptop and is paid $12,000 a month. What relationship exists?",
        },
        steps: [
          { es: "¿Trabajo personal? Sí: lo hace Luis, no puede mandar a otra persona.", en: "Personal work? Yes: Luis does it himself, he cannot send someone else." },
          { es: "¿Subordinación? Sí: horario impuesto, supervisora que da órdenes y herramientas de la empresa.", en: "Subordination? Yes: imposed schedule, a supervisor giving orders and company tools." },
          { es: "¿Salario? Sí: recibe un pago fijo periódico de $12,000 al mes.", en: "Wage? Yes: he receives a fixed periodic payment of $12,000 a month." },
          { es: "Aplicamos la primacía de la realidad: el nombre «honorarios» no cambia los hechos.", en: "We apply primacy of reality: the «fee basis» label does not change the facts." },
        ],
        result: {
          es: "Existe una relación de trabajo. Luis tiene los derechos de la LFT (aguinaldo, vacaciones, seguridad social) y la tienda corre el riesgo de una demanda si no lo reconoce.",
          en: "There is an employment relationship. Luis has LFT rights (Christmas bonus, vacation, social security) and the store risks a lawsuit if it does not recognize it.",
        },
      },
      {
        title: { es: "¿Se puede subcontratar este servicio?", en: "Can this service be subcontracted?" },
        problem: {
          es: "Un hotel quiere contratar con terceros tres cosas: (1) recepcionistas, (2) el mantenimiento de sus elevadores y (3) una agencia que le ayude a reclutar camaristas que después contratará el propio hotel. ¿Qué está permitido?",
          en: "A hotel wants to outsource three things: (1) receptionists, (2) maintenance of its elevators and (3) an agency to help it recruit housekeepers whom the hotel itself will then hire. What is allowed?",
        },
        steps: [
          { es: "Recepcionistas: atender huéspedes es la actividad principal del hotel; subcontratarlos sería subcontratación de personal prohibida.", en: "Receptionists: serving guests is the hotel's main activity; outsourcing them would be prohibited subcontracting of personnel." },
          { es: "Elevadores: es un servicio especializado ajeno a hospedar; se permite si el proveedor está en el REPSE.", en: "Elevators: it is a specialized service unrelated to lodging; allowed if the provider is in REPSE." },
          { es: "Agencia de reclutamiento: solo recluta y selecciona; el patrón será el hotel. Está permitido.", en: "Recruitment agency: it only recruits and selects; the hotel will be the employer. It is allowed." },
        ],
        result: {
          es: "Permitido: elevadores (con REPSE) y la agencia de reclutamiento. Prohibido: subcontratar a los recepcionistas.",
          en: "Allowed: elevators (with REPSE) and the recruitment agency. Prohibited: outsourcing the receptionists.",
        },
      },
    ],
    keyPoints: [
      { es: "El derecho laboral protege al trabajador porque negocia con menos poder que el patrón.", en: "Labor law protects workers because they bargain with less power than the employer." },
      { es: "Su base es el artículo 123 constitucional; la LFT desarrolla el apartado A (sector privado).", en: "Its basis is Constitutional Article 123; the LFT develops Section A (private sector)." },
      { es: "Hay relación laboral si hay trabajo personal, subordinado y pagado, sin importar el nombre del contrato.", en: "There is an employment relationship if there is personal, subordinated and paid work, whatever the contract is called." },
      { es: "Los derechos mínimos son irrenunciables y en caso de duda se aplica lo más favorable al trabajador.", en: "Minimum rights cannot be waived and, when in doubt, the most favorable reading for the worker applies." },
      { es: "Desde 2021 solo se subcontratan servicios especializados con REPSE; desde 2019, primero se concilia.", en: "Since 2021 only specialized services with REPSE may be outsourced; since 2019, conciliation comes first." },
    ],
    normativeNote: NOTE_LABOR,
    exerciseIds: ['DER-07-E1', 'DER-07-E2', 'DER-07-E3', 'DER-07-E4', 'DER-07-E5', 'DER-07-E6'],
  },

  // ───────────────────────────── DER-08 ─────────────────────────────
  {
    id: 'DER-08',
    level: 2,
    topicIds: ['DER.8'],
    title: { es: "Ley Federal del Trabajo (LFT)", en: "Federal Labor Law (LFT)" },
    summary: {
      es: "La LFT fija los mínimos de cada empleo en México: tipos de contrato, jornada y horas extra, salario, aguinaldo, vacaciones y cómo termina la relación con finiquito o liquidación.",
      en: "The LFT sets the minimums of every job in Mexico: types of contract, working hours and overtime, wages, Christmas bonus, vacation and how the relationship ends with a final settlement or severance.",
    },
    minutes: 19,
    objectives: [
      { es: "Identificar los tipos de contrato individual y los límites del periodo de prueba.", en: "Identify the types of individual contract and the limits of the probation period." },
      { es: "Calcular horas extra, aguinaldo y prima vacacional con las reglas de la LFT.", en: "Compute overtime, Christmas bonus and vacation premium with the LFT rules." },
      { es: "Diferenciar un finiquito de una liquidación al terminar la relación de trabajo.", en: "Tell a final settlement from a severance payment when the employment relationship ends." },
    ],
    theory: [
      {
        heading: { es: "Contratos y jornada de trabajo", en: "Contracts and working hours" },
        body: [
          {
            es: "La LFT dice que las condiciones de trabajo deben constar **por escrito**. Si no hay contrato escrito, el trabajador no pierde derechos: la falta de documento se le reprocha al patrón. Por su duración, el contrato puede ser **por tiempo indeterminado** (la regla general), **por tiempo determinado** u **obra determinada** (solo si la naturaleza del trabajo lo justifica) o **por temporada**.",
            en: "The LFT says working conditions must be **in writing**. If there is no written contract, the worker does not lose rights: the missing document is held against the employer. By duration, the contract can be **for an indefinite term** (the general rule), **for a fixed term** or **for a specific job** (only if the nature of the work justifies it) or **seasonal**.",
          },
          {
            es: "Dentro de un contrato por tiempo indeterminado se puede pactar un **periodo de prueba** de hasta **30 días**, o hasta **180 días** para puestos de dirección, gerenciales o técnicos especializados. También existe el contrato de **capacitación inicial**, de hasta 3 meses (6 para esos puestos). Sirven para ver si la persona cumple, no para encadenar contratos cortos.",
            en: "Within an indefinite-term contract a **probation period** of up to **30 days** may be agreed, or up to **180 days** for managerial, executive or specialized technical positions. There is also the **initial training** contract, of up to 3 months (6 for those positions). They serve to see whether the person performs, not to chain short contracts.",
          },
          {
            es: "La **jornada máxima** depende del horario: **diurna** 8 horas, **nocturna** 7 horas y **mixta** 7 horas y media. Por cada 6 días de trabajo corresponde al menos **1 día de descanso** con goce de salario; si se trabaja en domingo se paga una **prima dominical** de al menos 25% adicional. Mini ejemplo: un vigilante de 10 p. m. a 5 a. m. cubre 7 horas: es jornada nocturna y está en el límite.",
            en: "The **maximum working day** depends on the schedule: **day shift** 8 hours, **night shift** 7 hours and **mixed shift** 7.5 hours. For every 6 days worked there is at least **1 paid rest day**; working on Sunday earns a **Sunday premium** of at least 25% extra. Mini example: a guard from 10 p.m. to 5 a.m. covers 7 hours: it is a night shift and is at the limit.",
          },
        ],
        bullets: [
          { es: "Diurna (6:00 a 20:00): máximo 8 horas.", en: "Day shift (6:00 to 20:00): maximum 8 hours." },
          { es: "Nocturna (20:00 a 6:00): máximo 7 horas.", en: "Night shift (20:00 to 6:00): maximum 7 hours." },
          { es: "Mixta: máximo 7.5 horas, con menos de 3.5 horas nocturnas.", en: "Mixed: maximum 7.5 hours, with less than 3.5 night hours." },
          { es: "Periodo de prueba: hasta 30 días (180 en puestos de dirección o técnicos especializados).", en: "Probation: up to 30 days (180 for managerial or specialized technical roles)." },
        ],
      },
      {
        heading: { es: "Horas extra, salario y aguinaldo", en: "Overtime, wages and Christmas bonus" },
        body: [
          {
            es: "Las **horas extra** son las que pasan de la jornada pactada. No pueden exceder de **3 horas diarias ni 3 veces por semana** (máximo 9 a la semana). Esas primeras 9 horas se pagan **al doble**. Si el patrón exige más de 9, las horas excedentes se pagan **al triple**, además de que viola el límite.",
            en: "**Overtime** hours are those beyond the agreed working day. They cannot exceed **3 hours a day or 3 times a week** (maximum 9 a week). Those first 9 hours are paid **double**. If the employer demands more than 9, the excess hours are paid **triple**, besides breaching the limit.",
          },
          {
            es: "El **salario** es lo que se paga por el trabajo y nunca puede ser menor al **salario mínimo** vigente. El **aguinaldo** es un pago anual de **al menos 15 días de salario**, que debe entregarse **antes del 20 de diciembre**. Si la persona no trabajó el año completo, recibe la **parte proporcional**.",
            en: "The **wage** is what is paid for the work and can never be lower than the current **minimum wage**. The **aguinaldo** (Christmas bonus) is an annual payment of **at least 15 days of wages**, due **before December 20**. If the person did not work the full year, they receive the **proportional part**.",
          },
          {
            es: "Mini ejemplo: con salario diario de $400 y jornada de 8 horas, la hora vale $50. Una hora extra dentro de las primeras 9 de la semana vale $100; una hora más allá de esas 9 vale $150.",
            en: "Mini example: with a daily wage of $400 and an 8-hour day, one hour is worth $50. An overtime hour within the first 9 of the week is worth $100; an hour beyond those 9 is worth $150.",
          },
        ],
        formulas: [
          {
            name: { es: "Pago de horas extra en una semana", en: "Overtime pay for one week" },
            expression: "Valor hora = Salario diario ÷ Horas de la jornada; Pago = (Horas hasta 9 × Valor hora × 2) + (Horas arriba de 9 × Valor hora × 3)",
            variables: [
              { symbol: "Salario diario", meaning: { es: "Lo que gana la persona por un día de trabajo, en pesos.", en: "What the person earns for one day of work, in pesos." } },
              { symbol: "Horas de la jornada", meaning: { es: "Horas de su jornada normal diaria (por ejemplo, 8 en jornada diurna).", en: "Hours of their normal daily shift (for example, 8 on a day shift)." } },
              { symbol: "Valor hora", meaning: { es: "Lo que vale una hora normal de trabajo, en pesos.", en: "What one normal hour of work is worth, in pesos." } },
              { symbol: "Horas hasta 9", meaning: { es: "Las primeras horas extra de la semana, hasta un máximo de 9; se pagan al doble (× 2).", en: "The week's first overtime hours, up to 9; paid double (× 2)." } },
              { symbol: "Horas arriba de 9", meaning: { es: "Las horas extra que pasan de 9 en la semana; se pagan al triple (× 3).", en: "Overtime hours beyond 9 in the week; paid triple (× 3)." } },
            ],
            steps: [
              { es: "Divide el salario diario entre las horas de la jornada: valor de una hora.", en: "Divide the daily wage by the shift hours: value of one hour." },
              { es: "Separa las horas extra de la semana: las primeras 9 y las que sobran.", en: "Split the week's overtime hours: the first 9 and the rest." },
              { es: "Multiplica las primeras (hasta 9) por el valor hora × 2.", en: "Multiply the first ones (up to 9) by the hourly value × 2." },
              { es: "Multiplica las que pasan de 9 por el valor hora × 3 y suma ambos resultados.", en: "Multiply those beyond 9 by the hourly value × 3 and add both results." },
            ],
            example: {
              es: "Salario $360 diarios, jornada de 8 horas, 10 horas extra en la semana. Valor hora = 360 ÷ 8 = $45. Primeras 9: 9 × 45 × 2 = $810. La hora 10: 1 × 45 × 3 = $135. Total = 810 + 135 = **$945**.",
              en: "Wage $360 a day, 8-hour shift, 10 overtime hours in the week. Hourly value = 360 ÷ 8 = $45. First 9: 9 × 45 × 2 = $810. Hour 10: 1 × 45 × 3 = $135. Total = 810 + 135 = **$945**.",
            },
            mistake: {
              es: "Pagar todas las horas al doble. Lo que pasa de 9 horas extra por semana se paga al triple.",
              en: "Paying every hour at double. Anything beyond 9 overtime hours a week is paid triple.",
            },
          },
          {
            name: { es: "Aguinaldo proporcional", en: "Proportional Christmas bonus" },
            expression: "Días de aguinaldo = 15 × Días trabajados ÷ 365; Aguinaldo = Días de aguinaldo × Salario diario",
            variables: [
              { symbol: "15", meaning: { es: "Los días mínimos de aguinaldo por un año completo según la LFT.", en: "The minimum bonus days for a full year under the LFT." } },
              { symbol: "Días trabajados", meaning: { es: "Días que la persona trabajó en el año.", en: "Days the person worked in the year." } },
              { symbol: "365", meaning: { es: "Los días de un año completo.", en: "The days in a full year." } },
              { symbol: "Salario diario", meaning: { es: "Lo que gana por día, en pesos.", en: "What they earn per day, in pesos." } },
            ],
            steps: [
              { es: "Multiplica 15 por los días trabajados y divide entre 365: días de aguinaldo que le tocan.", en: "Multiply 15 by the days worked and divide by 365: bonus days owed." },
              { es: "Multiplica esos días por el salario diario: monto del aguinaldo en pesos.", en: "Multiply those days by the daily wage: bonus amount in pesos." },
            ],
            example: {
              es: "Salario $280 diarios; trabajó 219 días. Días = 15 × 219 ÷ 365 = 3,285 ÷ 365 = 9 días. Monto = 9 × 280 = **$2,520**.",
              en: "Wage $280 a day; worked 219 days. Days = 15 × 219 ÷ 365 = 3,285 ÷ 365 = 9 days. Amount = 9 × 280 = **$2,520**.",
            },
            mistake: {
              es: "Creer que si no completó el año no hay aguinaldo: siempre se paga la parte proporcional.",
              en: "Thinking there is no bonus if the year was not completed: the proportional part is always paid.",
            },
          },
        ],
      },
      {
        heading: { es: "Vacaciones y terminación de la relación", en: "Vacation and ending the relationship" },
        body: [
          {
            es: "Desde 2023, al cumplir **1 año** de servicio se tienen **12 días** de vacaciones pagadas; suben **2 días por año** hasta llegar a 20 al quinto año, y a partir del sexto aumentan 2 días por cada 5 años. Sobre el salario de esos días se paga una **prima vacacional** de al menos **25%**.",
            en: "Since 2023, after **1 year** of service a worker gets **12 days** of paid vacation; they rise by **2 days per year** up to 20 in the fifth year, and from the sixth they increase by 2 days for every 5 years. On the wages for those days a **vacation premium** of at least **25%** is paid.",
          },
          {
            es: "Cuando la relación termina por cualquier causa (renuncia, fin del contrato, despido) se paga un **finiquito**: lo que ya se ganó y no se ha cobrado, como días trabajados, aguinaldo y vacaciones proporcionales y su prima. Si el patrón **despide sin causa justificada**, además debe una **indemnización** de **3 meses de salario** (más otros conceptos que fija la ley): a ese paquete completo se le llama **liquidación**.",
            en: "When the relationship ends for any reason (resignation, end of contract, dismissal) a **finiquito** (final settlement) is paid: what has been earned and not yet collected, such as days worked, proportional Christmas bonus and vacation and its premium. If the employer **dismisses without just cause**, it also owes **severance** of **3 months of wages** (plus other items set by law): that full package is called **liquidación**.",
          },
          {
            es: "La ley sí permite **rescindir** (terminar) la relación sin responsabilidad por causas graves, como faltar más de 3 veces en 30 días sin permiso o cometer actos de deshonestidad, pero el patrón debe **avisarlo por escrito** al trabajador. Mini ejemplo: con 3 años de antigüedad corresponden 16 días de vacaciones; con salario de $500, son $8,000 y la prima de 25% suma $2,000 más.",
            en: "The law does allow **rescission** (termination) without liability for serious causes, such as more than 3 unexcused absences in 30 days or acts of dishonesty, but the employer must **give written notice** to the worker. Mini example: with 3 years of service the worker gets 16 vacation days; with a $500 wage that is $8,000 and the 25% premium adds $2,000.",
          },
        ],
        formulas: [
          {
            name: { es: "Prima vacacional mínima", en: "Minimum vacation premium" },
            expression: "Prima vacacional = Días de vacaciones × Salario diario × 25%",
            variables: [
              { symbol: "Días de vacaciones", meaning: { es: "Los días que le tocan según su antigüedad (12 el primer año, 14 el segundo, etc.).", en: "The days owed by seniority (12 the first year, 14 the second, etc.)." } },
              { symbol: "Salario diario", meaning: { es: "Lo que gana por día, en pesos.", en: "What they earn per day, in pesos." } },
              { symbol: "25%", meaning: { es: "El porcentaje mínimo de la prima según la LFT (0.25 en decimal).", en: "The minimum premium percentage under the LFT (0.25 as a decimal)." } },
            ],
            steps: [
              { es: "Busca en la tabla cuántos días de vacaciones corresponden a su antigüedad.", en: "Look up in the table how many vacation days match their seniority." },
              { es: "Multiplica esos días por el salario diario: salario de las vacaciones.", en: "Multiply those days by the daily wage: vacation pay." },
              { es: "Multiplica ese resultado por 0.25: prima vacacional (se paga además del salario de las vacaciones).", en: "Multiply that result by 0.25: vacation premium (paid on top of the vacation pay)." },
            ],
            example: {
              es: "2 años de antigüedad → 14 días; salario $420. Salario de vacaciones = 14 × 420 = $5,880. Prima = 5,880 × 0.25 = **$1,470**.",
              en: "2 years of service → 14 days; wage $420. Vacation pay = 14 × 420 = $5,880. Premium = 5,880 × 0.25 = **$1,470**.",
            },
            mistake: {
              es: "Confundir el 25% de la prima con el 10% de la PTU o con los 15 días del aguinaldo: son derechos distintos.",
              en: "Confusing the 25% premium with the 10% PTU or the 15 bonus days: they are different rights.",
            },
          },
        ],
        bullets: [
          { es: "Año 1: 12 días · año 2: 14 · año 3: 16 · año 4: 18 · año 5: 20.", en: "Year 1: 12 days · year 2: 14 · year 3: 16 · year 4: 18 · year 5: 20." },
          { es: "Prima vacacional: al menos 25% del salario de los días de vacaciones.", en: "Vacation premium: at least 25% of the wages for the vacation days." },
          { es: "Finiquito: siempre que termina la relación; paga lo ya ganado.", en: "Final settlement: whenever the relationship ends; pays what was earned." },
          { es: "Liquidación: finiquito + indemnización cuando el despido es injustificado.", en: "Severance package: final settlement + severance when the dismissal is unjustified." },
        ],
      },
    ],
    examples: [
      {
        title: { es: "Pago de horas extra en una semana pesada", en: "Overtime pay in a heavy week" },
        problem: {
          es: "Marta gana $400 diarios con jornada de 8 horas. Por un pedido urgente, en una semana trabajó 12 horas extra. ¿Cuánto deben pagarle por ellas?",
          en: "Marta earns $400 a day with an 8-hour day. Because of an urgent order, she worked 12 overtime hours in one week. How much must she be paid for them?",
        },
        steps: [
          { es: "Valor de la hora: $400 ÷ 8 = $50.", en: "Hourly value: $400 ÷ 8 = $50." },
          { es: "Primeras 9 horas al doble: 9 × $50 × 2 = $900.", en: "First 9 hours at double: 9 × $50 × 2 = $900." },
          { es: "Las 3 horas restantes al triple: 3 × $50 × 3 = $450.", en: "The remaining 3 hours at triple: 3 × $50 × 3 = $450." },
          { es: "Total: $900 + $450 = $1,350.", en: "Total: $900 + $450 = $1,350." },
        ],
        result: {
          es: "Le corresponden $1,350. Además, la empresa rebasó el límite legal de 9 horas extra por semana, lo que puede generarle sanciones.",
          en: "She is owed $1,350. Also, the company exceeded the legal limit of 9 overtime hours a week, which may lead to penalties.",
        },
      },
      {
        title: { es: "Finiquito por renuncia", en: "Final settlement after resignation" },
        problem: {
          es: "Jorge gana $300 diarios y renuncia después de trabajar 73 días en el año, sin haber cobrado aguinaldo. ¿Cuánto aguinaldo proporcional entra en su finiquito? ¿Le toca indemnización?",
          en: "Jorge earns $300 a day and resigns after working 73 days in the year, without having received a Christmas bonus. How much proportional bonus goes into his final settlement? Is he owed severance?",
        },
        steps: [
          { es: "Días de aguinaldo proporcionales: 15 × 73 ÷ 365 = 3 días.", en: "Proportional bonus days: 15 × 73 ÷ 365 = 3 days." },
          { es: "Monto: 3 × $300 = $900.", en: "Amount: 3 × $300 = $900." },
          { es: "Renunció por voluntad propia: no hubo despido, así que no hay indemnización de 3 meses.", en: "He resigned voluntarily: there was no dismissal, so there is no 3-month severance." },
        ],
        result: {
          es: "Su finiquito incluye $900 de aguinaldo proporcional (más vacaciones y prima proporcionales y días pendientes). No le corresponde liquidación porque no lo despidieron.",
          en: "His settlement includes $900 of proportional Christmas bonus (plus proportional vacation and premium and unpaid days). He is not owed severance because he was not dismissed.",
        },
      },
    ],
    keyPoints: [
      { es: "La regla general es el contrato por tiempo indeterminado; el periodo de prueba tiene límites (30 o 180 días).", en: "The general rule is the indefinite-term contract; probation has limits (30 or 180 days)." },
      { es: "Jornada máxima: 8 horas diurna, 7 nocturna y 7.5 mixta, con al menos 1 día de descanso por cada 6.", en: "Maximum day: 8 hours day shift, 7 night, 7.5 mixed, with at least 1 rest day for every 6." },
      { es: "Horas extra: las primeras 9 semanales al doble; las que excedan, al triple.", en: "Overtime: the first 9 weekly hours at double; any excess at triple." },
      { es: "Aguinaldo mínimo de 15 días antes del 20 de diciembre, proporcional si no se trabajó el año completo.", en: "Minimum Christmas bonus of 15 days before December 20, proportional if the full year was not worked." },
      { es: "Vacaciones desde 12 días el primer año, con prima vacacional mínima de 25%.", en: "Vacation from 12 days in the first year, with a minimum 25% vacation premium." },
      { es: "Finiquito siempre; liquidación (con indemnización) solo si el despido es injustificado.", en: "Final settlement always; severance package (with indemnity) only if the dismissal is unjustified." },
    ],
    normativeNote: NOTE_LABOR,
    exerciseIds: ['DER-08-E1', 'DER-08-E2', 'DER-08-E3', 'DER-08-E4', 'DER-08-E5', 'DER-08-E6'],
  },

  // ───────────────────────────── DER-09 ─────────────────────────────
  {
    id: 'DER-09',
    level: 2,
    topicIds: ['DER.9'],
    title: { es: "Obligaciones patronales", en: "Employer obligations" },
    summary: {
      es: "Contratar a alguien obliga a la empresa ante varias autoridades: IMSS, INFONAVIT, SAT y gobierno estatal, además de repartir utilidades (PTU) y cuidar la seguridad y la salud en el trabajo.",
      en: "Hiring someone creates obligations for the company before several authorities: IMSS, INFONAVIT, SAT and the state government, plus sharing profits (PTU) and looking after workplace safety and health.",
    },
    minutes: 17,
    objectives: [
      { es: "Identificar ante qué autoridad se cumple cada obligación patronal principal.", en: "Identify before which authority each main employer obligation is met." },
      { es: "Explicar los seguros del IMSS, la aportación al INFONAVIT y el papel del patrón como retenedor de ISR.", en: "Explain IMSS insurance branches, the INFONAVIT contribution and the employer's role as ISR withholder." },
      { es: "Calcular la PTU de una empresa y su reparto básico entre los trabajadores.", en: "Compute a company's PTU and its basic split among workers." },
      { es: "Reconocer obligaciones de seguridad, salud y capacitación en el centro de trabajo.", en: "Recognize safety, health and training obligations at the workplace." },
    ],
    theory: [
      {
        heading: { es: "Seguridad social: IMSS, INFONAVIT y retiro", en: "Social security: IMSS, INFONAVIT and retirement" },
        body: [
          {
            es: "Todo patrón del sector privado debe **inscribirse ante el IMSS** y **dar de alta** a cada trabajador desde que empieza a trabajar, dentro del plazo corto que marca la Ley del Seguro Social (días hábiles). También debe avisar los cambios de salario y las bajas. El periodo de prueba **no** es excusa: desde el primer día ya hay relación laboral.",
            en: "Every private-sector employer must **register with IMSS** and **enroll** each worker from the start of work, within the short deadline set by the Social Security Law (business days). It must also report wage changes and terminations. The probation period is **not** an excuse: from day one there is an employment relationship.",
          },
          {
            es: "Las **cuotas obrero-patronales** se calculan sobre el **salario base de cotización (SBC)**: el salario diario más otras prestaciones que la ley integra. Cubren los cinco seguros del régimen obligatorio. La mayor parte la paga el patrón y una parte menor se **descuenta** al trabajador; el patrón la retiene y la entera.",
            en: "**Employer-employee contributions** are computed on the **contribution base wage (SBC)**: the daily wage plus other benefits the law adds in. They fund the five branches of the mandatory regime. Most is paid by the employer and a smaller part is **withheld** from the worker; the employer withholds and remits it.",
          },
          {
            es: "Además, el patrón aporta al **INFONAVIT** el **5% del salario base** de cada trabajador para su fondo de vivienda; esa aportación la paga **solo el patrón**. Si el trabajador tiene un crédito INFONAVIT, el patrón también le **descuenta** el pago y lo entrega. Mini ejemplo: con SBC de $400 diarios, en 30 días la aportación es 400 × 30 × 5% = $600.",
            en: "In addition, the employer contributes **5% of the base wage** of each worker to **INFONAVIT** for their housing fund; this contribution is paid **only by the employer**. If the worker has an INFONAVIT loan, the employer also **withholds** the payment and remits it. Mini example: with an SBC of $400 a day, over 30 days the contribution is 400 × 30 × 5% = $600.",
          },
        ],
        bullets: [
          { es: "Riesgos de trabajo (accidentes y enfermedades por el trabajo).", en: "Work risks (accidents and illnesses caused by work)." },
          { es: "Enfermedades y maternidad.", en: "Illness and maternity." },
          { es: "Invalidez y vida.", en: "Disability and life." },
          { es: "Retiro, cesantía en edad avanzada y vejez (va a la cuenta AFORE).", en: "Retirement, old-age unemployment and old age (goes to the AFORE account)." },
          { es: "Guarderías y prestaciones sociales.", en: "Daycare and social benefits." },
        ],
        formulas: [
          {
            name: { es: "Aportación patronal al INFONAVIT", en: "Employer INFONAVIT contribution" },
            expression: "Aportación INFONAVIT = Salario base diario × Días del periodo × 5%",
            variables: [
              { symbol: "Salario base diario", meaning: { es: "El salario base de cotización (SBC) del trabajador por día, en pesos.", en: "The worker's contribution base wage (SBC) per day, in pesos." } },
              { symbol: "Días del periodo", meaning: { es: "Días que abarca el pago (por ejemplo, 30 o 60).", en: "Days the payment covers (for example, 30 or 60)." } },
              { symbol: "5%", meaning: { es: "Porcentaje que aporta el patrón para vivienda (0.05 en decimal).", en: "Percentage the employer contributes for housing (0.05 as a decimal)." } },
            ],
            steps: [
              { es: "Multiplica el salario base diario por los días del periodo: salario del periodo.", en: "Multiply the daily base wage by the days in the period: wage for the period." },
              { es: "Multiplica ese resultado por 0.05: aportación al INFONAVIT.", en: "Multiply that result by 0.05: INFONAVIT contribution." },
            ],
            example: {
              es: "SBC $450 diarios, periodo de 15 días. Salario del periodo = 450 × 15 = $6,750. Aportación = 6,750 × 0.05 = **$337.50**, a cargo solo del patrón.",
              en: "SBC $450 a day, 15-day period. Wage for the period = 450 × 15 = $6,750. Contribution = 6,750 × 0.05 = **$337.50**, paid only by the employer.",
            },
            mistake: {
              es: "Descontar parte de la aportación al trabajador. El 5% lo paga completo el patrón.",
              en: "Withholding part of the contribution from the worker. The employer pays the full 5%.",
            },
          },
        ],
      },
      {
        heading: { es: "Obligaciones fiscales: ISR, CFDI de nómina e impuesto estatal", en: "Tax obligations: ISR, payroll CFDI and state tax" },
        body: [
          {
            es: "Ante el **SAT**, el patrón actúa como **retenedor**: calcula el **ISR** (impuesto sobre la renta) que le toca a cada trabajador por su sueldo, se lo **descuenta** y lo **entera** (paga) al SAT. El dinero retenido no es del patrón: si no lo entrega, la falta es grave.",
            en: "Before **SAT** (the tax authority), the employer acts as a **withholding agent**: it computes the **ISR** (income tax) each worker owes on their salary, **withholds** it and **remits** (pays) it to SAT. The withheld money is not the employer's: failing to remit it is a serious offense.",
          },
          {
            es: "Por cada pago de sueldo debe emitir un **CFDI de nómina**, que es el recibo electrónico oficial. Ahí aparecen el salario, las deducciones (ISR, cuota IMSS del trabajador) y el neto pagado. Además, los **estados** cobran un **impuesto sobre nóminas** al patrón, sobre el total de sueldos pagados; la **tasa la fija cada estado**, por lo que cambia según dónde estén tus trabajadores.",
            en: "For each salary payment it must issue a **payroll CFDI**, the official electronic receipt. It shows the wage, deductions (ISR, the worker's IMSS share) and net pay. In addition, **states** charge the employer a **payroll tax** on total wages paid; **each state sets the rate**, so it varies with where your workers are.",
          },
          {
            es: "Mini ejemplo (tasa hipotética): una empresa paga $200,000 de sueldos en el mes en un estado cuya tasa fuera 3%. Su impuesto sobre nóminas sería 200,000 × 3% = $6,000, que paga la empresa y **no** se descuenta al trabajador.",
            en: "Mini example (hypothetical rate): a company pays $200,000 in wages for the month in a state whose rate were 3%. Its payroll tax would be 200,000 × 3% = $6,000, paid by the company and **not** withheld from the worker.",
          },
        ],
      },
      {
        heading: { es: "PTU, seguridad y capacitación", en: "PTU, safety and training" },
        body: [
          {
            es: "La **PTU** (participación de los trabajadores en las utilidades) es el derecho de los trabajadores a recibir una parte de las ganancias. La empresa reparte el **10% de su renta gravable** (la utilidad que calcula para el ISR). La mitad se reparte en partes iguales según los **días trabajados** y la otra mitad en proporción a los **salarios** de cada quien. Desde 2021, lo que recibe cada trabajador tiene un **tope**: 3 meses de salario o el promedio de lo recibido en los últimos 3 años, lo que le convenga más.",
            en: "**PTU** (workers' profit sharing) is the workers' right to receive part of the profits. The company distributes **10% of its taxable income** (the profit it computes for ISR). Half is split equally according to **days worked** and the other half in proportion to each person's **wages**. Since 2021 each worker's share has a **cap**: 3 months of wages or the average received over the last 3 years, whichever is more favorable to them.",
          },
          {
            es: "No participan los directores, administradores y gerentes generales, y las empresas de nueva creación quedan exentas en su primer año. En la práctica, las empresas (personas morales) suelen pagarla en mayo y las personas físicas con negocio en junio, tras presentar su declaración anual.",
            en: "Directors, administrators and general managers do not participate, and newly created companies are exempt in their first year. In practice, companies (legal entities) usually pay it in May and individuals with businesses in June, after filing their annual return.",
          },
          {
            es: "El patrón también debe cuidar la **seguridad y salud**: formar una **comisión de seguridad e higiene**, dar equipo de protección, **capacitar** a su personal y prevenir los **riesgos psicosociales** (estrés, acoso, jornadas excesivas) conforme a la **NOM-035** de la Secretaría del Trabajo. Mini ejemplo: un taller que reparte guantes y lentes, capacita en manejo de herramientas y aplica una encuesta de clima laboral está cumpliendo estas obligaciones.",
            en: "The employer must also look after **safety and health**: set up a **safety and hygiene committee**, provide protective equipment, **train** its staff and prevent **psychosocial risks** (stress, harassment, excessive hours) under the Labor Ministry's **NOM-035** standard. Mini example: a workshop that hands out gloves and goggles, trains on tool handling and runs a workplace-climate survey is meeting these obligations.",
          },
        ],
        formulas: [
          {
            name: { es: "PTU: total a repartir y parte por días trabajados", en: "PTU: total to distribute and share by days worked" },
            expression: "PTU total = Renta gravable × 10%; Mitad por días = PTU total ÷ 2; Parte de cada trabajador (si todos trabajaron los mismos días) = Mitad por días ÷ Número de trabajadores",
            variables: [
              { symbol: "Renta gravable", meaning: { es: "La utilidad que la empresa calcula para pagar ISR, en pesos.", en: "The profit the company computes to pay income tax, in pesos." } },
              { symbol: "10%", meaning: { es: "Porcentaje de esa utilidad que se reparte a los trabajadores (0.10 en decimal).", en: "Percentage of that profit shared with workers (0.10 as a decimal)." } },
              { symbol: "Mitad por días", meaning: { es: "La mitad de la PTU, que se reparte según los días trabajados, en pesos.", en: "Half of the PTU, split by days worked, in pesos." } },
              { symbol: "Número de trabajadores", meaning: { es: "Trabajadores con derecho a PTU (no cuentan directores ni gerentes generales).", en: "Workers entitled to PTU (directors and general managers do not count)." } },
            ],
            steps: [
              { es: "Multiplica la renta gravable por 0.10: PTU total.", en: "Multiply taxable income by 0.10: total PTU." },
              { es: "Divide la PTU total entre 2: una mitad va por días trabajados y la otra por salarios.", en: "Divide total PTU by 2: one half goes by days worked and the other by wages." },
              { es: "Si todos trabajaron los mismos días, divide la mitad por días entre el número de trabajadores.", en: "If everyone worked the same days, divide the days half by the number of workers." },
              { es: "La otra mitad se reparte en proporción al salario de cada quien (quien gana más, recibe más), respetando el tope por trabajador.", en: "The other half is split in proportion to each person's wages (whoever earns more receives more), respecting the per-worker cap." },
            ],
            example: {
              es: "Renta gravable $900,000; 8 trabajadores que laboraron todo el año. PTU = 900,000 × 0.10 = $90,000. Mitad por días = 90,000 ÷ 2 = $45,000. Cada uno = 45,000 ÷ 8 = **$5,625**, más su parte de los otros $45,000 según su salario.",
              en: "Taxable income $900,000; 8 workers who worked all year. PTU = 900,000 × 0.10 = $90,000. Days half = 90,000 ÷ 2 = $45,000. Each = 45,000 ÷ 8 = **$5,625**, plus their share of the other $45,000 by wages.",
            },
            mistake: {
              es: "Dividir la PTU completa entre los trabajadores sin separar antes la mitad que va por salarios.",
              en: "Dividing the full PTU among workers without first separating the half that goes by wages.",
            },
          },
        ],
      },
    ],
    examples: [
      {
        title: { es: "Reparto de PTU en una empresa pequeña", en: "PTU distribution in a small company" },
        problem: {
          es: "Una imprenta tuvo una renta gravable de $600,000. Tiene 4 trabajadores que laboraron los 365 días del año. ¿Cuánto es la PTU total y cuánto recibe cada uno de la mitad que se reparte por días trabajados?",
          en: "A print shop had taxable income of $600,000. It has 4 workers who worked all 365 days of the year. What is the total PTU and how much does each receive from the half distributed by days worked?",
        },
        steps: [
          { es: "PTU total: $600,000 × 10% = $60,000.", en: "Total PTU: $600,000 × 10% = $60,000." },
          { es: "Mitad por días: $60,000 ÷ 2 = $30,000.", en: "Half by days: $60,000 ÷ 2 = $30,000." },
          { es: "Todos trabajaron los mismos días: $30,000 ÷ 4 = $7,500 cada uno.", en: "All worked the same days: $30,000 ÷ 4 = $7,500 each." },
          { es: "La otra mitad ($30,000) se reparte en proporción al salario de cada trabajador.", en: "The other half ($30,000) is split in proportion to each worker's wages." },
        ],
        result: {
          es: "La PTU total es de $60,000; por días trabajados cada trabajador recibe $7,500, más su parte por salarios (sujeta al tope legal).",
          en: "Total PTU is $60,000; by days worked each worker receives $7,500, plus their share by wages (subject to the legal cap).",
        },
      },
      {
        title: { es: "Lista de pendientes al contratar", en: "Checklist when hiring" },
        problem: {
          es: "Una cafetería en crecimiento contrata a su primer barista con salario base de $350 diarios. ¿Qué obligaciones debe cumplir y cuánto aporta al INFONAVIT en un periodo de 30 días?",
          en: "A growing coffee shop hires its first barista with a base wage of $350 a day. What obligations must it meet and how much does it contribute to INFONAVIT over a 30-day period?",
        },
        steps: [
          { es: "IMSS: inscribirse como patrón y dar de alta al barista desde su primer día.", en: "IMSS: register as an employer and enroll the barista from day one." },
          { es: "INFONAVIT: aportar el 5%: 350 × 30 × 5% = $525 en el periodo, pagados solo por la cafetería.", en: "INFONAVIT: contribute 5%: 350 × 30 × 5% = $525 for the period, paid only by the coffee shop." },
          { es: "SAT: retener el ISR que corresponda y emitir un CFDI de nómina en cada pago.", en: "SAT: withhold the applicable ISR and issue a payroll CFDI for each payment." },
          { es: "Estado: pagar el impuesto sobre nóminas con la tasa de su entidad.", en: "State: pay payroll tax at its state's rate." },
        ],
        result: {
          es: "Cuatro frentes: IMSS, INFONAVIT ($525 en 30 días), SAT y tesorería estatal, más PTU, seguridad y capacitación.",
          en: "Four fronts: IMSS, INFONAVIT ($525 over 30 days), SAT and the state treasury, plus PTU, safety and training.",
        },
      },
    ],
    keyPoints: [
      { es: "El alta en el IMSS es desde el primer día, incluso en periodo de prueba.", en: "IMSS enrollment starts on day one, even during probation." },
      { es: "El IMSS cubre cinco seguros; las cuotas se calculan sobre el salario base de cotización.", en: "IMSS covers five branches; contributions are computed on the contribution base wage." },
      { es: "INFONAVIT: 5% del salario base, pagado solo por el patrón.", en: "INFONAVIT: 5% of the base wage, paid only by the employer." },
      { es: "El patrón retiene y entera el ISR y emite CFDI de nómina; el impuesto sobre nóminas es estatal.", en: "The employer withholds and remits ISR and issues payroll CFDI; payroll tax is a state tax." },
      { es: "PTU: 10% de la renta gravable, mitad por días y mitad por salarios, con tope por trabajador.", en: "PTU: 10% of taxable income, half by days and half by wages, with a per-worker cap." },
    ],
    normativeNote: NOTE_EMPLOYER,
    exerciseIds: ['DER-09-E1', 'DER-09-E2', 'DER-09-E3', 'DER-09-E4', 'DER-09-E5', 'DER-09-E6'],
  },

  // ───────────────────────────── DER-10 ─────────────────────────────
  {
    id: 'DER-10',
    level: 2,
    topicIds: ['DER.10'],
    title: { es: "Propiedad intelectual", en: "Intellectual property" },
    summary: {
      es: "La propiedad intelectual protege las creaciones de la mente (inventos, marcas, obras, secretos) y en México se divide en propiedad industrial, a cargo del IMPI, y derecho de autor, a cargo del INDAUTOR.",
      en: "Intellectual property protects creations of the mind (inventions, brands, works, secrets) and in Mexico it is split into industrial property, handled by IMPI, and copyright, handled by INDAUTOR.",
    },
    minutes: 14,
    objectives: [
      { es: "Explicar qué es la propiedad intelectual y por qué es un activo valioso para una empresa.", en: "Explain what intellectual property is and why it is a valuable asset for a company." },
      { es: "Distinguir sus dos ramas en México y la autoridad que atiende cada una.", en: "Distinguish its two branches in Mexico and the authority in charge of each." },
      { es: "Reconocer el secreto industrial y las reglas de territorialidad y licencias.", en: "Recognize trade secrets and the rules of territoriality and licensing." },
    ],
    theory: [
      {
        heading: { es: "Qué es y por qué vale dinero", en: "What it is and why it is worth money" },
        body: [
          {
            es: "La **propiedad intelectual** es el conjunto de derechos que protege las **creaciones de la mente**: un invento, el nombre de un producto, una canción, un programa de cómputo o una receta secreta. Le da a su dueño un **derecho exclusivo**: solo él puede usarlo o autorizar a otros, y puede impedir que alguien lo copie.",
            en: "**Intellectual property** is the set of rights that protects **creations of the mind**: an invention, a product name, a song, a computer program or a secret recipe. It gives its owner an **exclusive right**: only they can use it or authorize others, and they can stop anyone from copying it.",
          },
          {
            es: "Para una empresa son **activos intangibles**: no se tocan, pero valen. Muchas veces el nombre de una marca vale más que sus edificios. Se pueden **vender**, **licenciar** (dar permiso de uso a cambio de una regalía) o usar como base de una **franquicia**, donde el dueño de la marca autoriza a otros a operar su modelo de negocio.",
            en: "For a company they are **intangible assets**: you cannot touch them, but they are valuable. Often a brand name is worth more than the company's buildings. They can be **sold**, **licensed** (permission to use in exchange for a royalty) or used as the basis of a **franchise**, where the brand owner authorizes others to run its business model.",
          },
          {
            es: "Mini ejemplo: una taquería famosa en Monterrey quiere abrir sucursales en otras ciudades sin poner todo el dinero. Si su marca está protegida, puede dar franquicias y cobrar una regalía mensual a cada franquiciatario.",
            en: "Mini example: a famous taquería in Monterrey wants to open branches in other cities without putting up all the money. If its brand is protected, it can grant franchises and charge each franchisee a monthly royalty.",
          },
        ],
      },
      {
        heading: { es: "Las dos ramas: propiedad industrial y derecho de autor", en: "The two branches: industrial property and copyright" },
        body: [
          {
            es: "La **propiedad industrial** protege creaciones con uso en el comercio y la industria: **patentes** (inventos), **modelos de utilidad** (mejoras prácticas a objetos), **diseños industriales** (la forma o apariencia de un producto), **marcas**, **avisos comerciales** (eslóganes), **nombres comerciales**, **secretos industriales** y **denominaciones de origen** (como el tequila). En México la atiende el **IMPI** (Instituto Mexicano de la Propiedad Industrial).",
            en: "**Industrial property** protects creations used in trade and industry: **patents** (inventions), **utility models** (practical improvements to objects), **industrial designs** (the shape or look of a product), **trademarks**, **commercial slogans**, **trade names**, **trade secrets** and **appellations of origin** (such as tequila). In Mexico it is handled by **IMPI** (Mexican Institute of Industrial Property).",
          },
          {
            es: "El **derecho de autor** protege **obras** literarias y artísticas: libros, música, fotografías, películas, dibujos y también **programas de cómputo**. Lo atiende el **INDAUTOR** (Instituto Nacional del Derecho de Autor). Una diferencia clave: el derecho de autor **nace al crear la obra** y fijarla (escribirla, grabarla), mientras que la mayoría de los derechos industriales, como patentes y marcas, **requieren registro** ante el IMPI.",
            en: "**Copyright** protects literary and artistic **works**: books, music, photographs, films, drawings and also **computer programs**. It is handled by **INDAUTOR** (National Copyright Institute). A key difference: copyright **arises when the work is created** and fixed (written, recorded), whereas most industrial rights, such as patents and trademarks, **require registration** with IMPI.",
          },
          {
            es: "Mini ejemplo: una marca de salsas tiene su nombre y logo (marca, IMPI), una máquina envasadora que inventó (patente, IMPI) y un libro de recetas que publicó (derecho de autor, INDAUTOR).",
            en: "Mini example: a salsa brand has its name and logo (trademark, IMPI), a filling machine it invented (patent, IMPI) and a recipe book it published (copyright, INDAUTOR).",
          },
        ],
        bullets: [
          { es: "IMPI: patentes, modelos de utilidad, diseños, marcas, avisos y nombres comerciales.", en: "IMPI: patents, utility models, designs, trademarks, slogans and trade names." },
          { es: "IMPI también vigila secretos industriales y denominaciones de origen.", en: "IMPI also oversees trade secrets and appellations of origin." },
          { es: "INDAUTOR: obras literarias, artísticas y programas de cómputo.", en: "INDAUTOR: literary and artistic works and computer programs." },
          { es: "Derecho de autor nace con la obra; patentes y marcas requieren registro.", en: "Copyright arises with the work; patents and trademarks require registration." },
        ],
      },
      {
        heading: { es: "Secretos, territorialidad y estrategia", en: "Secrets, territoriality and strategy" },
        body: [
          {
            es: "El **secreto industrial** es información confidencial que da ventaja competitiva: una receta, una lista de clientes, un proceso. **No se registra**: se protege mientras se mantenga en secreto, con medidas como **acuerdos de confidencialidad** y acceso restringido. Su ventaja es que **no vence**; su riesgo es que, si se filtra o alguien lo descubre por su cuenta, se pierde.",
            en: "A **trade secret** is confidential information that gives a competitive edge: a recipe, a client list, a process. **It is not registered**: it is protected as long as it stays secret, with measures such as **confidentiality agreements** and restricted access. Its advantage is that **it does not expire**; its risk is that if it leaks or someone discovers it independently, it is lost.",
          },
          {
            es: "Los derechos de propiedad industrial son **territoriales**: un registro en México protege **solo en México**. Si vas a vender en otros países, necesitas registrar también allá, directamente o mediante sistemas internacionales a los que México pertenece (como el Protocolo de Madrid para marcas y el PCT para patentes). Además, en marcas rige la regla de **«primero en el tiempo, primero en derecho»**: gana quien registra primero.",
            en: "Industrial property rights are **territorial**: a registration in Mexico protects **only in Mexico**. If you will sell in other countries, you must register there too, directly or through international systems Mexico belongs to (such as the Madrid Protocol for trademarks and the PCT for patents). In trademarks the rule **«first in time, first in right»** applies: whoever files first wins.",
          },
          {
            es: "Una buena estrategia empieza **antes de lanzar**: buscar que el nombre no esté registrado, registrar la marca, decidir si un invento conviene patentarlo o guardarlo como secreto, y dejar por escrito en los contratos quién es dueño de lo que crean empleados y proveedores. Mini ejemplo: una startup que contrata a un diseñador externo para su logo firma un contrato donde se le ceden los derechos; así evita pleitos futuros.",
            en: "A good strategy starts **before launch**: check the name is not registered, register the trademark, decide whether an invention is better patented or kept as a secret, and put in writing in contracts who owns what employees and suppliers create. Mini example: a startup that hires a freelance designer for its logo signs a contract assigning the rights to it; that way it avoids future disputes.",
          },
        ],
      },
    ],
    examples: [
      {
        title: { es: "¿Patente o secreto industrial?", en: "Patent or trade secret?" },
        problem: {
          es: "Una empresa de bebidas creó una fórmula de refresco difícil de descubrir analizando el producto, y también una tapa con un mecanismo nuevo que cualquiera entendería al desarmarla. ¿Cómo conviene proteger cada una?",
          en: "A beverage company created a soda formula that is hard to discover by analyzing the product, and also a cap with a new mechanism anyone would understand by taking it apart. How should each be protected?",
        },
        steps: [
          { es: "Una patente obliga a publicar el invento y dura un plazo limitado; después cualquiera puede usarlo.", en: "A patent requires publishing the invention and lasts a limited term; afterwards anyone can use it." },
          { es: "La fórmula es difícil de descubrir: guardarla como secreto industrial puede protegerla indefinidamente.", en: "The formula is hard to discover: keeping it as a trade secret can protect it indefinitely." },
          { es: "La tapa se entiende al desarmarla: un secreto no sirve, porque el competidor la copiaría al comprarla.", en: "The cap is understood by taking it apart: a secret does not work, because a competitor would copy it after buying it." },
        ],
        result: {
          es: "Fórmula: secreto industrial con contratos de confidencialidad. Tapa: solicitar patente (o modelo de utilidad si es una mejora práctica) ante el IMPI.",
          en: "Formula: trade secret with confidentiality agreements. Cap: file for a patent (or utility model if it is a practical improvement) with IMPI.",
        },
      },
      {
        title: { es: "Expansión internacional de una marca", en: "International expansion of a brand" },
        problem: {
          es: "«Café Sierra» tiene su marca registrada en México y quiere vender en Estados Unidos y Chile. Un distribuidor chileno le advierte que alguien podría registrar el nombre allá. ¿Qué debe hacer?",
          en: "«Café Sierra» has its trademark registered in Mexico and wants to sell in the United States and Chile. A Chilean distributor warns that someone could register the name there. What should it do?",
        },
        steps: [
          { es: "Recordar la territorialidad: el registro mexicano no protege en otros países.", en: "Remember territoriality: the Mexican registration does not protect in other countries." },
          { es: "Aplicar «primero en el tiempo»: si otro registra antes en Chile, podría impedirle usar su propio nombre allá.", en: "Apply «first in time»: if someone else files first in Chile, they could stop it from using its own name there." },
          { es: "Solicitar el registro en cada país, directamente o por la vía internacional de marcas, antes de entrar al mercado.", en: "File in each country, directly or through the international trademark route, before entering the market." },
        ],
        result: {
          es: "Debe registrar la marca en Estados Unidos y Chile cuanto antes; su registro en México no basta.",
          en: "It must register the trademark in the United States and Chile as soon as possible; its Mexican registration is not enough.",
        },
      },
    ],
    keyPoints: [
      { es: "La propiedad intelectual da derechos exclusivos sobre creaciones de la mente y es un activo intangible.", en: "Intellectual property grants exclusive rights over creations of the mind and is an intangible asset." },
      { es: "Propiedad industrial (IMPI): patentes, diseños, marcas, avisos, secretos y denominaciones de origen.", en: "Industrial property (IMPI): patents, designs, trademarks, slogans, secrets and appellations of origin." },
      { es: "Derecho de autor (INDAUTOR): obras y software; nace al crear la obra.", en: "Copyright (INDAUTOR): works and software; it arises when the work is created." },
      { es: "El secreto industrial no se registra y dura mientras sea confidencial.", en: "A trade secret is not registered and lasts as long as it stays confidential." },
      { es: "Los registros son territoriales: protege en cada país donde vendas.", en: "Registrations are territorial: protect in each country where you sell." },
    ],
    normativeNote: NOTE_IP,
    exerciseIds: ['DER-10-E1', 'DER-10-E2', 'DER-10-E3', 'DER-10-E4', 'DER-10-E5', 'DER-10-E6'],
  },

  // ───────────────────────────── DER-11 ─────────────────────────────
  {
    id: 'DER-11',
    level: 2,
    topicIds: ['DER.11'],
    title: { es: "Marcas, patentes y derechos de autor", en: "Trademarks, patents and copyright" },
    summary: {
      es: "Cada figura protege algo distinto y por un tiempo distinto: la marca identifica y se renueva cada 10 años, la patente protege un invento 20 años y el derecho de autor dura la vida del autor más 100 años.",
      en: "Each figure protects something different for a different time: a trademark identifies and is renewed every 10 years, a patent protects an invention for 20 years and copyright lasts the author's life plus 100 years.",
    },
    minutes: 17,
    objectives: [
      { es: "Describir qué es una marca, sus tipos y cómo se mantiene vigente.", en: "Describe what a trademark is, its types and how it is kept in force." },
      { es: "Explicar los requisitos de una patente y su plazo de protección.", en: "Explain the requirements for a patent and its term of protection." },
      { es: "Distinguir derechos morales y patrimoniales de autor y calcular su vigencia.", en: "Distinguish moral and economic copyright and compute its term." },
    ],
    theory: [
      {
        heading: { es: "Marcas: el nombre que te distingue", en: "Trademarks: the name that sets you apart" },
        body: [
          {
            es: "Una **marca** es cualquier signo que **distingue** tus productos o servicios de los de otros en el mercado. Puede ser **nominativa** (solo palabras), **innominada o figurativa** (solo un dibujo), **mixta** (palabras y dibujo) o **tridimensional** (la forma de un envase). La ley mexicana también admite marcas sonoras, olfativas y otras formas, siempre que distingan.",
            en: "A **trademark** is any sign that **distinguishes** your products or services from others' in the market. It can be **word** (words only), **figurative** (a drawing only), **combined** (words and drawing) or **three-dimensional** (the shape of a container). Mexican law also accepts sound, scent and other marks, as long as they distinguish.",
          },
          {
            es: "Se registra ante el **IMPI** para **clases** específicas de productos o servicios (según la Clasificación de Niza, con 45 clases). El registro dura **10 años** desde que se otorga y se puede **renovar indefinidamente** por periodos iguales. Además, a los **3 años** de otorgada hay que **declarar que se usa**: una marca que no se usa se puede perder.",
            en: "It is registered with **IMPI** for specific **classes** of goods or services (under the Nice Classification, with 45 classes). Registration lasts **10 years** from grant and can be **renewed indefinitely** for equal periods. Also, **3 years** after grant you must **declare that it is in use**: an unused mark can be lost.",
          },
          {
            es: "No se pueden registrar signos **genéricos o descriptivos** (llamar «Pan» a una panadería) ni los que confundan con una marca ya registrada. El símbolo **®** o **MR** solo debe usarse si la marca está registrada. Mini ejemplo: «Tortas La Güera» con su dibujo de una torta es una marca mixta que puede registrarse en la clase de servicios de restaurante.",
            en: "**Generic or descriptive** signs cannot be registered (calling a bakery «Bread») nor signs confusingly similar to a registered mark. The **®** or **MR** symbol should only be used if the mark is registered. Mini example: «Tortas La Güera» with its drawing of a sandwich is a combined mark that can be registered in the restaurant-services class.",
          },
        ],
        formulas: [
          {
            name: { es: "Fechas clave de una marca registrada", en: "Key dates of a registered trademark" },
            expression: "Año de declaración de uso = Año de otorgamiento + 3; Año de renovación = Año de otorgamiento + 10 (y luego cada 10 años)",
            variables: [
              { symbol: "Año de otorgamiento", meaning: { es: "El año en que el IMPI concedió el registro (no el año en que se pidió).", en: "The year IMPI granted the registration (not the year it was applied for)." } },
              { symbol: "3", meaning: { es: "Años después del otorgamiento en que hay que declarar que la marca se usa.", en: "Years after grant when you must declare the mark is in use." } },
              { symbol: "10", meaning: { es: "Años que dura cada periodo de registro; se renueva sin límite.", en: "Years each registration period lasts; it is renewed without limit." } },
            ],
            steps: [
              { es: "Identifica el año de otorgamiento del registro.", en: "Identify the year the registration was granted." },
              { es: "Súmale 3: año en que debe declararse el uso.", en: "Add 3: year in which use must be declared." },
              { es: "Súmale 10: año de la primera renovación; para las siguientes, suma 10 cada vez.", en: "Add 10: year of the first renewal; for the next ones, add 10 each time." },
            ],
            example: {
              es: "Marca otorgada en 2023. Declaración de uso: 2023 + 3 = **2026**. Primera renovación: 2023 + 10 = **2033**; la siguiente, 2033 + 10 = 2043.",
              en: "Trademark granted in 2023. Declaration of use: 2023 + 3 = **2026**. First renewal: 2023 + 10 = **2033**; the next, 2033 + 10 = 2043.",
            },
            mistake: {
              es: "Pensar que la marca vence para siempre a los 10 años: se puede renovar indefinidamente.",
              en: "Thinking the trademark ends for good after 10 years: it can be renewed indefinitely.",
            },
          },
        ],
        bullets: [
          { es: "Nominativa: solo palabras.", en: "Word mark: words only." },
          { es: "Innominada (figurativa): solo imagen.", en: "Figurative mark: image only." },
          { es: "Mixta: palabras + imagen.", en: "Combined mark: words + image." },
          { es: "Tridimensional: forma del producto o envase.", en: "Three-dimensional: shape of the product or container." },
        ],
      },
      {
        heading: { es: "Patentes: el invento a cambio de publicarlo", en: "Patents: the invention in exchange for publishing it" },
        body: [
          {
            es: "Una **patente** da a su titular el derecho exclusivo de explotar un **invento** por **20 años improrrogables** contados desde la **fecha de presentación** de la solicitud. A cambio, el invento se **publica**: al terminar el plazo pasa al **dominio público** y cualquiera puede usarlo.",
            en: "A **patent** gives its owner the exclusive right to exploit an **invention** for **20 non-extendable years** counted from the **filing date** of the application. In exchange, the invention is **published**: when the term ends it enters the **public domain** and anyone can use it.",
          },
          {
            es: "Para ser patentable, el invento debe cumplir tres requisitos: **novedad** (no existía ni se había dado a conocer), **actividad inventiva** (no es obvio para un experto en la materia) y **aplicación industrial** (se puede producir o usar en alguna industria). No se patentan descubrimientos, teorías científicas, métodos de negocio ni programas de cómputo **por sí mismos**.",
            en: "To be patentable, the invention must meet three requirements: **novelty** (it did not exist and had not been disclosed), **inventive step** (it is not obvious to an expert in the field) and **industrial application** (it can be produced or used in some industry). Discoveries, scientific theories, business methods and computer programs **as such** are not patented.",
          },
          {
            es: "Para mejoras prácticas a objetos existentes existe el **modelo de utilidad** (con requisitos más ligeros y plazo menor), y para la apariencia de un producto, el **diseño industrial**. Mini ejemplo: si solicitas en 2026 la patente de una licuadora que se limpia sola, tu protección termina en 2046, aunque te la concedan años después.",
            en: "For practical improvements to existing objects there is the **utility model** (with lighter requirements and a shorter term), and for a product's appearance, the **industrial design**. Mini example: if you file in 2026 for a patent on a self-cleaning blender, your protection ends in 2046, even if it is granted years later.",
          },
        ],
        formulas: [
          {
            name: { es: "Año de vencimiento de una patente", en: "Patent expiry year" },
            expression: "Año de vencimiento de la patente = Año de presentación + 20",
            variables: [
              { symbol: "Año de presentación", meaning: { es: "El año en que se presentó (pidió) la solicitud ante el IMPI, no el año en que se concedió.", en: "The year the application was filed with IMPI, not the year it was granted." } },
              { symbol: "20", meaning: { es: "Años de protección; no se pueden prorrogar.", en: "Years of protection; they cannot be extended." } },
            ],
            steps: [
              { es: "Busca el año de presentación de la solicitud.", en: "Find the year the application was filed." },
              { es: "Súmale 20: a partir de ahí el invento pasa al dominio público.", en: "Add 20: from then on the invention enters the public domain." },
            ],
            example: {
              es: "Solicitud presentada en 2024 y concedida en 2027. Vence en 2024 + 20 = **2044** (no en 2047).",
              en: "Application filed in 2024 and granted in 2027. It expires in 2024 + 20 = **2044** (not 2047).",
            },
            mistake: {
              es: "Contar los 20 años desde que se concede, o creer que se renueva como una marca.",
              en: "Counting the 20 years from grant, or thinking it renews like a trademark.",
            },
          },
        ],
      },
      {
        heading: { es: "Derechos de autor: morales y patrimoniales", en: "Copyright: moral and economic rights" },
        body: [
          {
            es: "El derecho de autor protege la **forma de expresar** una idea, no la idea en sí: puedes escribir otra novela de detectives, pero no copiar la de alguien más. Tiene dos tipos de derechos. Los **morales** son el vínculo personal del autor con su obra: que se le reconozca como autor y que no la deformen. Son **perpetuos, inalienables e irrenunciables**: no se venden.",
            en: "Copyright protects the **way an idea is expressed**, not the idea itself: you can write another detective novel, but not copy someone else's. It has two kinds of rights. **Moral** rights are the author's personal bond with the work: being credited as author and not having it distorted. They are **perpetual, inalienable and unwaivable**: they cannot be sold.",
          },
          {
            es: "Los **patrimoniales** son los derechos de **explotar** la obra y ganar dinero: reproducirla, distribuirla, comunicarla al público. Estos **sí se pueden transmitir** o licenciar (por ejemplo, a una editorial o a una disquera), por escrito. En México duran **toda la vida del autor y 100 años más** después de su muerte; luego la obra pasa al dominio público.",
            en: "**Economic** rights are the rights to **exploit** the work and earn money: reproduce, distribute and communicate it to the public. These **can be transferred** or licensed (for example, to a publisher or a record label), in writing. In Mexico they last **the author's whole life plus 100 years** after death; then the work enters the public domain.",
          },
          {
            es: "Registrar una obra ante el **INDAUTOR** no es obligatorio, pero sirve como **prueba** de autoría y fecha. Mini ejemplo: una compositora que murió en 1980 tiene sus canciones protegidas hasta 2080; mientras tanto, sus herederos o quien tenga los derechos cobran por su uso, y nadie puede quitarle el crédito de autora.",
            en: "Registering a work with **INDAUTOR** is not mandatory, but it serves as **evidence** of authorship and date. Mini example: a composer who died in 1980 has her songs protected until 2080; meanwhile her heirs or whoever holds the rights collect for their use, and no one can take away her authorship credit.",
          },
        ],
        formulas: [
          {
            name: { es: "Vigencia de los derechos patrimoniales de autor", en: "Term of economic copyright" },
            expression: "Año en que terminan los derechos patrimoniales = Año de muerte del autor + 100",
            variables: [
              { symbol: "Año de muerte del autor", meaning: { es: "El año en que falleció la persona que creó la obra.", en: "The year the person who created the work died." } },
              { symbol: "100", meaning: { es: "Años que, en México, siguen protegidos los derechos patrimoniales después de la muerte del autor.", en: "Years that, in Mexico, economic rights stay protected after the author's death." } },
            ],
            steps: [
              { es: "Identifica el año en que murió el autor (mientras vive, la obra está protegida).", en: "Identify the year the author died (while alive, the work is protected)." },
              { es: "Súmale 100: hasta ese año hay que pedir permiso a quien tenga los derechos; después la obra es de dominio público.", en: "Add 100: until that year you must ask permission from the rights holder; afterwards the work is in the public domain." },
            ],
            example: {
              es: "Un pintor murió en 1975. Sus derechos patrimoniales duran hasta 1975 + 100 = **2075**.",
              en: "A painter died in 1975. His economic rights last until 1975 + 100 = **2075**.",
            },
            mistake: {
              es: "Usar 50 o 70 años, que son plazos de otros países. Y recuerda: los derechos morales no vencen nunca.",
              en: "Using 50 or 70 years, which are other countries' terms. And remember: moral rights never expire.",
            },
          },
        ],
      },
    ],
    examples: [
      {
        title: { es: "Calendario de vencimientos de una empresa", en: "A company's expiry calendar" },
        problem: {
          es: "Una empresa de juguetes presentó una solicitud de patente en 2019, obtuvo el registro de su marca en 2022 y publicó un cuento ilustrado cuya autora murió en 2010. ¿Cuándo vence o debe renovarse cada derecho?",
          en: "A toy company filed a patent application in 2019, obtained its trademark registration in 2022 and published an illustrated story whose author died in 2010. When does each right expire or need renewal?",
        },
        steps: [
          { es: "Patente: 2019 + 20 = 2039; no se puede prorrogar.", en: "Patent: 2019 + 20 = 2039; it cannot be extended." },
          { es: "Marca: 2022 + 10 = 2032 para la primera renovación; antes, en 2025, debía declarar su uso.", en: "Trademark: 2022 + 10 = 2032 for the first renewal; before that, in 2025, it had to declare use." },
          { es: "Cuento: 2010 + 100 = 2110 para los derechos patrimoniales.", en: "Story: 2010 + 100 = 2110 for the economic rights." },
        ],
        result: {
          es: "Patente hasta 2039, marca a renovar en 2032 (y cada 10 años) y cuento protegido hasta 2110.",
          en: "Patent until 2039, trademark to renew in 2032 (and every 10 years) and story protected until 2110.",
        },
      },
      {
        title: { es: "¿Qué puede vender un fotógrafo?", en: "What can a photographer sell?" },
        problem: {
          es: "Un fotógrafo vende a una marca de ropa los derechos de usar sus fotos en campañas. Meses después, la marca publica las fotos con el nombre de otro fotógrafo. ¿Qué derechos se vendieron y cuál se violó?",
          en: "A photographer sells a clothing brand the rights to use his photos in campaigns. Months later, the brand publishes the photos under another photographer's name. Which rights were sold and which one was violated?",
        },
        steps: [
          { es: "Usar las fotos en campañas es explotarlas: son derechos patrimoniales, transmisibles por contrato.", en: "Using the photos in campaigns is exploiting them: these are economic rights, transferable by contract." },
          { es: "Ser reconocido como autor es un derecho moral: no se vende ni se renuncia.", en: "Being credited as author is a moral right: it cannot be sold or waived." },
          { es: "Atribuir las fotos a otra persona viola el derecho moral de paternidad.", en: "Attributing the photos to someone else violates the moral right of attribution." },
        ],
        result: {
          es: "Se transmitieron derechos patrimoniales; la marca violó el derecho moral del fotógrafo a ser reconocido como autor.",
          en: "Economic rights were transferred; the brand violated the photographer's moral right to be credited as author.",
        },
      },
    ],
    keyPoints: [
      { es: "La marca distingue productos o servicios; dura 10 años desde su otorgamiento y se renueva indefinidamente.", en: "A trademark distinguishes goods or services; it lasts 10 years from grant and is renewed indefinitely." },
      { es: "Una marca debe usarse y declararse su uso; los signos genéricos o descriptivos no se registran.", en: "A trademark must be used and its use declared; generic or descriptive signs are not registered." },
      { es: "La patente exige novedad, actividad inventiva y aplicación industrial; dura 20 años desde la solicitud.", en: "A patent requires novelty, inventive step and industrial application; it lasts 20 years from filing." },
      { es: "El derecho de autor protege la expresión, no la idea; registrarlo es opcional y sirve como prueba.", en: "Copyright protects expression, not the idea; registering is optional and serves as evidence." },
      { es: "Derechos morales: perpetuos e intransferibles; patrimoniales: transmisibles, vida + 100 años.", en: "Moral rights: perpetual and non-transferable; economic rights: transferable, life + 100 years." },
    ],
    normativeNote: NOTE_IP,
    exerciseIds: ['DER-11-E1', 'DER-11-E2', 'DER-11-E3', 'DER-11-E4', 'DER-11-E5', 'DER-11-E6'],
  },

  // ───────────────────────────── DER-12 ─────────────────────────────
  {
    id: 'DER-12',
    level: 2,
    topicIds: ['DER.12'],
    title: { es: "Derecho financiero y bancario", en: "Financial and banking law" },
    summary: {
      es: "El derecho financiero regula cómo el Estado obtiene, administra y gasta los recursos públicos, y el derecho bancario regula a los bancos, sus operaciones y los instrumentos como el cheque y el crédito.",
      en: "Financial law governs how the State obtains, manages and spends public resources, and banking law governs banks, their operations and instruments such as cheques and credit.",
    },
    minutes: 16,
    objectives: [
      { es: "Distinguir el derecho financiero público del derecho bancario.", en: "Distinguish public financial law from banking law." },
      { es: "Clasificar las operaciones bancarias en pasivas, activas y de servicios.", en: "Classify banking operations into liability, asset and service operations." },
      { es: "Aplicar reglas básicas del cheque y de los contratos de crédito bancario.", en: "Apply basic rules for cheques and bank credit contracts." },
    ],
    theory: [
      {
        heading: { es: "Derecho financiero: el dinero del Estado", en: "Financial law: the State's money" },
        body: [
          {
            es: "En México, el **derecho financiero** estudia la **actividad financiera del Estado**: cómo **obtiene** recursos (impuestos, derechos, deuda pública), cómo los **administra** y cómo los **gasta**. Es derecho **público**, porque una de las partes es el gobierno actuando con autoridad.",
            en: "In Mexico, **financial law** studies the **State's financial activity**: how it **obtains** resources (taxes, fees, public debt), how it **manages** them and how it **spends** them. It is **public** law, because one of the parties is the government acting with authority.",
          },
          {
            es: "Cada año el Congreso aprueba la **Ley de Ingresos**, que dice cuánto y de dónde espera recibir dinero la Federación, y la Cámara de Diputados aprueba el **Presupuesto de Egresos**, que dice en qué se gastará. El **derecho fiscal** (los impuestos) es una rama del derecho financiero, y las reglas de la **deuda pública** marcan cuánto y cómo puede endeudarse el gobierno.",
            en: "Each year Congress approves the **Revenue Law**, which states how much money the Federation expects and from where, and the Chamber of Deputies approves the **Expenditure Budget**, which states what it will be spent on. **Tax law** is a branch of financial law, and **public debt** rules set how much and how the government may borrow.",
          },
          {
            es: "Mini ejemplo: cuando pagas IVA en una compra, el dinero entra por la Ley de Ingresos; cuando ese dinero se usa para construir una clínica, sale conforme al Presupuesto de Egresos. Las dos puntas son derecho financiero.",
            en: "Mini example: when you pay VAT on a purchase, the money comes in under the Revenue Law; when it is used to build a clinic, it goes out under the Expenditure Budget. Both ends are financial law.",
          },
        ],
        bullets: [
          { es: "Obtener: impuestos, derechos, aprovechamientos y deuda.", en: "Obtain: taxes, fees, other charges and debt." },
          { es: "Administrar: tesorería y control de los fondos públicos.", en: "Manage: treasury and control of public funds." },
          { es: "Gastar: conforme al Presupuesto de Egresos aprobado.", en: "Spend: according to the approved Expenditure Budget." },
        ],
      },
      {
        heading: { es: "Derecho bancario: quién puede ser banco y qué hace", en: "Banking law: who can be a bank and what it does" },
        body: [
          {
            es: "El **derecho bancario** regula a los bancos y sus operaciones; su ley principal es la **Ley de Instituciones de Crédito**. Define el **servicio de banca y crédito** como **captar dinero del público** para **prestarlo** a otros. Solo pueden hacerlo instituciones **autorizadas**: recibir depósitos del público sin autorización es un delito.",
            en: "**Banking law** governs banks and their operations; its main statute is the **Credit Institutions Law**. It defines the **banking and credit service** as **raising money from the public** in order to **lend it** to others. Only **authorized** institutions may do this: taking deposits from the public without authorization is a crime.",
          },
          {
            es: "Las **operaciones pasivas** son aquellas en que el banco **recibe** dinero y queda debiéndolo: cuentas de ahorro, de cheques, depósitos a plazo. Las **activas** son las que el banco **presta**: créditos personales, hipotecarios, tarjetas de crédito. Las **de servicios** (o neutras) no implican prestar ni captar: transferencias, pago de servicios, cajas de seguridad.",
            en: "**Liability operations** are those where the bank **receives** money and owes it back: savings and checking accounts, term deposits. **Asset operations** are those where the bank **lends**: personal and mortgage loans, credit cards. **Service** (or neutral) operations neither lend nor raise money: transfers, bill payments, safe-deposit boxes.",
          },
          {
            es: "En México hay **banca múltiple** (bancos comerciales privados) y **banca de desarrollo** (bancos del gobierno que apoyan sectores como exportaciones o pequeñas empresas). La ley también protege al cliente con el **secreto bancario**: el banco no puede dar información de tus cuentas salvo a ti, a tu representante o a las autoridades por los cauces legales. Además, los depósitos tienen un **seguro del IPAB** hasta cierto límite fijado en UDIs. Mini ejemplo: tu cuenta de nómina es una operación pasiva para el banco, porque te debe ese dinero.",
            en: "Mexico has **multiple-service banking** (private commercial banks) and **development banking** (government banks that support sectors such as exports or small businesses). The law also protects clients with **bank secrecy**: the bank cannot disclose information on your accounts except to you, your representative or authorities through legal channels. Deposits also have **IPAB insurance** up to a limit set in UDIs. Mini example: your payroll account is a liability operation for the bank, because it owes you that money.",
          },
        ],
      },
      {
        heading: { es: "Cheques y crédito bancario", en: "Cheques and bank credit" },
        body: [
          {
            es: "El **cheque** está regulado en la **Ley General de Títulos y Operaciones de Crédito**. Solo se puede girar **contra un banco** donde tienes fondos, y **siempre es pagadero a la vista**: si le pones una fecha futura (cheque «posfechado»), el banco debe pagarlo cuando se presente, porque esa condición no vale. Si lo giras **sin fondos** y no se paga, debes indemnizar al beneficiario con al menos el **20%** del valor del cheque, y puede haber consecuencias penales.",
            en: "The **cheque** is governed by the **General Law of Negotiable Instruments and Credit Transactions**. It can only be drawn **on a bank** where you have funds, and it is **always payable on sight**: if you write a future date («post-dated» cheque), the bank must pay it when presented, because that condition is void. If you write it **without funds** and it bounces, you must compensate the payee with at least **20%** of the cheque's value, and there may be criminal consequences.",
          },
          {
            es: "En el **contrato de crédito**, el banco pone dinero a tu disposición y tú te obligas a devolverlo con **intereses**. Puede ser **simple** (recibes una suma y la pagas en plazos) o **revolvente** (como la tarjeta: pagas y vuelves a disponer). Los bancos deben informar el **CAT (Costo Anual Total)**, que suma intereses, comisiones y otros cargos para comparar créditos.",
            en: "In a **credit contract**, the bank places money at your disposal and you commit to repay it with **interest**. It can be **simple** (you receive a sum and repay it in installments) or **revolving** (like a card: you pay and can draw again). Banks must disclose the **CAT (Total Annual Cost)**, which adds up interest, fees and other charges so you can compare loans.",
          },
          {
            es: "Mini ejemplo (tasa hipotética): un crédito simple de $50,000 a 12% anual de interés simple por 6 meses genera 50,000 × 12% × 6 ÷ 12 = $3,000 de interés. El CAT será mayor si hay comisiones.",
            en: "Mini example (hypothetical rate): a simple loan of $50,000 at 12% annual simple interest for 6 months generates 50,000 × 12% × 6 ÷ 12 = $3,000 of interest. The CAT will be higher if there are fees.",
          },
        ],
        formulas: [
          {
            name: { es: "Interés simple y costo total de un crédito", en: "Simple interest and total cost of a loan" },
            expression: "Interés simple = Capital × Tasa anual × Meses ÷ 12; Costo total = Interés + Comisiones",
            variables: [
              { symbol: "Capital", meaning: { es: "El dinero que te presta el banco, en pesos.", en: "The money the bank lends you, in pesos." } },
              { symbol: "Tasa anual", meaning: { es: "La tasa de interés por año, en %; conviértela a decimal (15% = 0.15).", en: "The interest rate per year, in %; convert it to a decimal (15% = 0.15)." } },
              { symbol: "Meses", meaning: { es: "Cuántos meses dura el crédito.", en: "How many months the loan lasts." } },
              { symbol: "12", meaning: { es: "Meses de un año: sirve para tomar solo la parte del año que dura el crédito.", en: "Months in a year: used to take only the part of the year the loan lasts." } },
              { symbol: "Comisiones", meaning: { es: "Cargos extra como la comisión por apertura, en pesos.", en: "Extra charges such as an opening fee, in pesos." } },
            ],
            steps: [
              { es: "Convierte la tasa a decimal.", en: "Convert the rate to a decimal." },
              { es: "Multiplica capital × tasa: interés de un año completo.", en: "Multiply principal × rate: interest for a full year." },
              { es: "Multiplica por los meses y divide entre 12: interés del plazo real.", en: "Multiply by the months and divide by 12: interest for the actual term." },
              { es: "Para comparar ofertas, suma las comisiones: costo total.", en: "To compare offers, add the fees: total cost." },
            ],
            example: {
              es: "Crédito de $60,000 a 18% anual (tasa de ejemplo) por 4 meses, con comisión de $1,000. Un año: 60,000 × 0.18 = $10,800. Cuatro meses: 10,800 × 4 ÷ 12 = **$3,600** de interés. Costo total = 3,600 + 1,000 = **$4,600**.",
              en: "A $60,000 loan at 18% per year (example rate) for 4 months, with a $1,000 fee. One year: 60,000 × 0.18 = $10,800. Four months: 10,800 × 4 ÷ 12 = **$3,600** of interest. Total cost = 3,600 + 1,000 = **$4,600**.",
            },
            interpret: {
              es: "La oferta con menor costo total es la más barata, aunque su tasa sea más alta. Por eso existe el CAT.",
              en: "The offer with the lowest total cost is the cheapest, even if its rate is higher. That is why the CAT exists.",
            },
            mistake: {
              es: "Usar la tasa anual completa cuando el crédito dura menos de un año.",
              en: "Using the full annual rate when the loan lasts less than a year.",
            },
          },
          {
            name: { es: "Indemnización mínima por cheque sin fondos", en: "Minimum compensation for a bounced cheque" },
            expression: "Indemnización mínima = Valor del cheque × 20%",
            variables: [
              { symbol: "Valor del cheque", meaning: { es: "La cantidad escrita en el cheque, en pesos.", en: "The amount written on the cheque, in pesos." } },
              { symbol: "20%", meaning: { es: "Porcentaje mínimo que fija la ley como indemnización (0.20 en decimal).", en: "Minimum percentage the law sets as compensation (0.20 as a decimal)." } },
            ],
            steps: [
              { es: "Toma el valor del cheque que no se pagó por falta de fondos.", en: "Take the value of the cheque not paid for lack of funds." },
              { es: "Multiplícalo por 0.20: indemnización mínima.", en: "Multiply it by 0.20: minimum compensation." },
              { es: "Súmala al valor del cheque: eso es lo que se debe en total.", en: "Add it to the cheque's value: that is the total owed." },
            ],
            example: {
              es: "Cheque de $8,500 sin fondos. Indemnización = 8,500 × 0.20 = **$1,700**. Total adeudado = 8,500 + 1,700 = $10,200.",
              en: "An $8,500 cheque without funds. Compensation = 8,500 × 0.20 = **$1,700**. Total owed = 8,500 + 1,700 = $10,200.",
            },
            mistake: {
              es: "Creer que la indemnización sustituye al cheque: se paga además del valor del cheque.",
              en: "Thinking the compensation replaces the cheque: it is paid on top of the cheque's value.",
            },
          },
        ],
      },
    ],
    examples: [
      {
        title: { es: "Un cheque que rebota", en: "A bounced cheque" },
        problem: {
          es: "Una distribuidora recibe de un cliente un cheque por $25,000 fechado para el próximo mes. Lo presenta hoy y el banco lo devuelve porque la cuenta no tiene fondos. ¿Podía cobrarlo hoy? ¿Cuánto debe pagarle el cliente como indemnización mínima?",
          en: "A distributor receives a $25,000 cheque from a customer dated next month. It presents it today and the bank returns it because the account has no funds. Could it cash it today? How much must the customer pay as minimum compensation?",
        },
        steps: [
          { es: "El cheque siempre es pagadero a la vista: la fecha futura no impide presentarlo hoy.", en: "The cheque is always payable on sight: the future date does not stop presenting it today." },
          { es: "Al no pagarse por falta de fondos, el librador debe indemnizar con al menos el 20%.", en: "Since it was not paid for lack of funds, the drawer must compensate with at least 20%." },
          { es: "Cálculo: $25,000 × 20% = $5,000.", en: "Calculation: $25,000 × 20% = $5,000." },
        ],
        result: {
          es: "Sí podía presentarlo hoy. El cliente debe los $25,000 más una indemnización mínima de $5,000.",
          en: "Yes, it could present it today. The customer owes the $25,000 plus minimum compensation of $5,000.",
        },
      },
      {
        title: { es: "Comparar dos ofertas de crédito", en: "Comparing two loan offers" },
        problem: {
          es: "Un taller necesita $120,000 por 12 meses. El banco A ofrece 16% anual sin comisiones; el banco B ofrece 14% anual más una comisión por apertura de $4,800. Con interés simple, ¿cuál cuesta menos?",
          en: "A workshop needs $120,000 for 12 months. Bank A offers 16% annual with no fees; Bank B offers 14% annual plus a $4,800 opening fee. With simple interest, which costs less?",
        },
        steps: [
          { es: "Banco A: 120,000 × 16% = $19,200 de interés; costo total $19,200.", en: "Bank A: 120,000 × 16% = $19,200 interest; total cost $19,200." },
          { es: "Banco B: 120,000 × 14% = $16,800 de interés + $4,800 de comisión = $21,600.", en: "Bank B: 120,000 × 14% = $16,800 interest + $4,800 fee = $21,600." },
          { es: "Comparamos: $19,200 < $21,600.", en: "Compare: $19,200 < $21,600." },
        ],
        result: {
          es: "El banco A cuesta $2,400 menos aunque su tasa es mayor. Por eso la ley obliga a informar el CAT, que incluye comisiones.",
          en: "Bank A costs $2,400 less even though its rate is higher. That is why the law requires disclosing the CAT, which includes fees.",
        },
      },
    ],
    keyPoints: [
      { es: "El derecho financiero regula cómo el Estado obtiene, administra y gasta recursos públicos.", en: "Financial law governs how the State obtains, manages and spends public resources." },
      { es: "Solo instituciones autorizadas pueden captar dinero del público para prestarlo.", en: "Only authorized institutions may raise money from the public to lend it." },
      { es: "Operaciones pasivas: el banco recibe; activas: el banco presta; de servicios: ni capta ni presta.", en: "Liability operations: the bank receives; asset: the bank lends; service: neither." },
      { es: "El cheque siempre es pagadero a la vista; sin fondos, se indemniza con al menos 20%.", en: "A cheque is always payable on sight; without funds, at least 20% compensation is owed." },
      { es: "Para comparar créditos usa el CAT, no solo la tasa de interés.", en: "To compare loans use the CAT, not just the interest rate." },
    ],
    normativeNote: NOTE_BANK,
    exerciseIds: ['DER-12-E1', 'DER-12-E2', 'DER-12-E3', 'DER-12-E4', 'DER-12-E5', 'DER-12-E6'],
  },
]

export const exercises: Exercise[] = [
  // ═════════════════════════ DER-07 ═════════════════════════
  {
    id: 'DER-07-E1',
    level: 2,
    module: 'DER-07',
    kind: 'mcq',
    flavor: 'concept',
    prompt: {
      es: "¿Qué elemento es el que realmente distingue una relación de trabajo de un contrato de servicios profesionales por honorarios?",
      en: "Which element really distinguishes an employment relationship from a fee-based professional services contract?",
    },
    options: [
      { id: 'DER-07-E1-a', text: { es: "Que el pago sea mensual", en: "That payment is monthly" } },
      { id: 'DER-07-E1-b', text: { es: "La subordinación: trabajar bajo las órdenes, horario y herramientas de otro", en: "Subordination: working under someone else's orders, schedule and tools" } },
      { id: 'DER-07-E1-c', text: { es: "El nombre que se le pone al contrato firmado", en: "The name given to the signed contract" } },
      { id: 'DER-07-E1-d', text: { es: "Que la persona tenga título universitario", en: "That the person holds a university degree" } },
    ],
    correctOptionId: 'DER-07-E1-b',
    explanation: {
      es: "La subordinación es la clave: si alguien trabaja bajo la dirección de otro (órdenes, horario, herramientas), hay relación laboral. El nombre del contrato no importa por la primacía de la realidad, y la forma de pago o el título no definen la relación. Error común: creer que firmar «honorarios» elimina los derechos laborales.",
      en: "Subordination is the key: if someone works under another's direction (orders, schedule, tools), there is an employment relationship. The contract's name does not matter because of primacy of reality, and payment frequency or degrees do not define the relationship. Common mistake: believing that signing a «fee-based» contract removes labor rights.",
    },
    difficulty: 1,
    points: 10,
    competency: 'labor-law',
  },
  {
    id: 'DER-07-E2',
    level: 2,
    module: 'DER-07',
    kind: 'truefalse',
    flavor: 'concept',
    prompt: {
      es: "Si una trabajadora firma en su contrato que renuncia a su aguinaldo a cambio de un sueldo un poco mayor, esa renuncia es válida porque ella la aceptó.",
      en: "If a worker signs in her contract that she waives her Christmas bonus in exchange for a slightly higher salary, that waiver is valid because she accepted it.",
    },
    answer: false,
    explanation: {
      es: "Falso. Por el principio de irrenunciabilidad, los derechos mínimos de la ley no se pueden renunciar, aunque se firme. Esa cláusula es nula y la trabajadora conserva su aguinaldo. Error común: pensar que «lo firmado obliga» siempre; en derecho laboral, no por debajo de los mínimos.",
      en: "False. Under the non-waivability principle, statutory minimum rights cannot be waived, even in writing. That clause is void and the worker keeps her bonus. Common mistake: thinking «what is signed always binds»; in labor law, not below the minimums.",
    },
    difficulty: 1,
    points: 10,
    competency: 'labor-law',
  },
  {
    id: 'DER-07-E3',
    level: 2,
    module: 'DER-07',
    kind: 'classify',
    flavor: 'concept',
    prompt: {
      es: "Clasifica cada tema según pertenezca al derecho laboral individual o al colectivo.",
      en: "Classify each topic as belonging to individual or collective labor law.",
    },
    categories: [
      { id: 'DER-07-E3-c1', label: { es: "Derecho individual del trabajo", en: "Individual labor law" } },
      { id: 'DER-07-E3-c2', label: { es: "Derecho colectivo del trabajo", en: "Collective labor law" } },
    ],
    items: [
      { id: 'DER-07-E3-i1', label: { es: "El contrato de trabajo de una cajera con su tienda", en: "A cashier's employment contract with her store" }, correctCategoryId: 'DER-07-E3-c1' },
      { id: 'DER-07-E3-i2', label: { es: "La negociación de un contrato colectivo entre un sindicato y una fábrica", en: "Bargaining a collective agreement between a union and a factory" }, correctCategoryId: 'DER-07-E3-c2' },
      { id: 'DER-07-E3-i3', label: { es: "Una huelga para exigir revisión salarial", en: "A strike to demand a wage review" }, correctCategoryId: 'DER-07-E3-c2' },
      { id: 'DER-07-E3-i4', label: { es: "El periodo de prueba de un nuevo vendedor", en: "A new salesperson's probation period" }, correctCategoryId: 'DER-07-E3-c1' },
      { id: 'DER-07-E3-i5', label: { es: "La creación de un sindicato de trabajadores", en: "Setting up a workers' union" }, correctCategoryId: 'DER-07-E3-c2' },
      { id: 'DER-07-E3-i6', label: { es: "El reclamo de un chofer porque no le pagaron sus horas extra", en: "A driver's claim because his overtime was not paid" }, correctCategoryId: 'DER-07-E3-c1' },
    ],
    explanation: {
      es: "Lo individual regula la relación entre un trabajador y su patrón (contrato, prueba, horas extra). Lo colectivo involucra a grupos organizados: sindicatos, contratos colectivos y huelga. Error común: poner la huelga en lo individual porque «la hacen trabajadores»; es colectiva porque la ejerce una coalición o sindicato.",
      en: "Individual law governs the relationship between one worker and their employer (contract, probation, overtime). Collective law involves organized groups: unions, collective agreements and strikes. Common mistake: placing the strike under individual law because «workers do it»; it is collective because a coalition or union exercises it.",
    },
    difficulty: 1,
    points: 10,
    competency: 'labor-law',
  },
  {
    id: 'DER-07-E4',
    level: 2,
    module: 'DER-07',
    kind: 'mcq',
    flavor: 'case',
    context: {
      es: "Una agencia de publicidad contrata a Sofía como diseñadora «por honorarios». Tiene horario de 9 a 6, un jefe que le asigna tareas diarias, usa la computadora y el software de la agencia y no puede atender a otros clientes. Cobra $15,000 fijos al mes.",
      en: "An advertising agency hires Sofía as a designer on a «fee basis». She works 9 to 6, has a boss who assigns daily tasks, uses the agency's computer and software and may not serve other clients. She is paid a fixed $15,000 a month.",
    },
    prompt: {
      es: "Si Sofía reclamara sus derechos, ¿qué es lo más probable que concluya la autoridad laboral?",
      en: "If Sofía claimed her rights, what would the labor authority most likely conclude?",
    },
    options: [
      { id: 'DER-07-E4-a', text: { es: "Que no tiene derechos laborales porque firmó un contrato por honorarios", en: "That she has no labor rights because she signed a fee-based contract" } },
      { id: 'DER-07-E4-b', text: { es: "Que es socia de la agencia y le corresponden utilidades como dueña", en: "That she is a partner of the agency and is owed profits as an owner" } },
      { id: 'DER-07-E4-c', text: { es: "Que existe una relación de trabajo y le aplica la LFT", en: "That an employment relationship exists and the LFT applies" } },
      { id: 'DER-07-E4-d', text: { es: "Que solo tendría derechos si trabajara más de 5 años", en: "That she would only have rights if she worked more than 5 years" } },
    ],
    correctOptionId: 'DER-07-E4-c',
    explanation: {
      es: "Hay trabajo personal, subordinación (horario, jefe, herramientas, exclusividad) y salario fijo: es una relación de trabajo, sin importar el nombre del contrato (primacía de la realidad). Los derechos laborales existen desde el primer día, no tras años. Error común: dar más peso a la etiqueta del contrato que a los hechos.",
      en: "There is personal work, subordination (schedule, boss, tools, exclusivity) and a fixed wage: it is an employment relationship regardless of the contract's name (primacy of reality). Labor rights exist from day one, not after years. Common mistake: giving more weight to the contract's label than to the facts.",
    },
    difficulty: 2,
    points: 15,
    competency: 'labor-law',
  },
  {
    id: 'DER-07-E5',
    level: 2,
    module: 'DER-07',
    kind: 'multi',
    flavor: 'case',
    context: {
      es: "Una cadena de panaderías revisa sus contratos con terceros tras la reforma de subcontratación de 2021.",
      en: "A bakery chain reviews its third-party contracts after the 2021 subcontracting reform.",
    },
    prompt: {
      es: "¿Cuáles de estos acuerdos están permitidos? Selecciona todos los que apliquen.",
      en: "Which of these arrangements are allowed? Select all that apply.",
    },
    options: [
      { id: 'DER-07-E5-a', text: { es: "Contratar el mantenimiento de sus hornos industriales con una empresa especializada inscrita en el REPSE", en: "Hiring maintenance of its industrial ovens from a specialized company registered in REPSE" } },
      { id: 'DER-07-E5-b', text: { es: "Que otra empresa sea la patrona de todos sus panaderos y se los «preste»", en: "Having another company employ all its bakers and «lend» them" } },
      { id: 'DER-07-E5-c', text: { es: "Usar una agencia de colocación que solo recluta y selecciona candidatos que luego contrata la panadería", en: "Using a placement agency that only recruits and selects candidates the bakery then hires" } },
      { id: 'DER-07-E5-d', text: { es: "Contratar servicios especializados de fumigación con un proveedor que no está inscrito en el REPSE", en: "Hiring specialized pest-control services from a provider not registered in REPSE" } },
    ],
    correctOptionIds: ['DER-07-E5-a', 'DER-07-E5-c'],
    explanation: {
      es: "Se permite contratar servicios especializados ajenos a la actividad principal con proveedor en el REPSE (hornos) y usar agencias que solo reclutan. Está prohibido subcontratar personal para la actividad principal (panaderos) y contratar servicios especializados con quien no está registrado. Error común: creer que basta con que el servicio sea especializado, sin revisar el registro.",
      en: "It is allowed to hire specialized services outside the main activity from a REPSE-registered provider (ovens) and to use agencies that only recruit. Subcontracting personnel for the main activity (bakers) is prohibited, as is hiring specialized services from an unregistered provider. Common mistake: thinking it is enough for the service to be specialized, without checking the registration.",
    },
    difficulty: 2,
    points: 15,
    competency: 'labor-law',
  },
  {
    id: 'DER-07-E6',
    level: 2,
    module: 'DER-07',
    kind: 'mcq',
    flavor: 'concept',
    prompt: {
      es: "Con el sistema de justicia laboral surgido de la reforma de 2019, ¿qué debe hacer en la mayoría de los casos un trabajador despedido antes de demandar?",
      en: "Under the labor-justice system created by the 2019 reform, what must a dismissed worker do in most cases before suing?",
    },
    options: [
      { id: 'DER-07-E6-a', text: { es: "Acudir a la conciliación prejudicial en un Centro de Conciliación", en: "Attend pre-trial conciliation at a Conciliation Center" } },
      { id: 'DER-07-E6-b', text: { es: "Presentar su caso directamente ante la Junta de Conciliación y Arbitraje", en: "File directly with the Conciliation and Arbitration Board" } },
      { id: 'DER-07-E6-c', text: { es: "Pedir permiso al sindicato de la empresa", en: "Ask the company union for permission" } },
      { id: 'DER-07-E6-d', text: { es: "Esperar un año para que se calme el conflicto", en: "Wait one year for the dispute to cool down" } },
    ],
    correctOptionId: 'DER-07-E6-a',
    explanation: {
      es: "La reforma de 2019 hizo obligatoria, en la mayoría de los casos, una conciliación previa en los Centros de Conciliación; si no hay acuerdo, se demanda ante los tribunales laborales del Poder Judicial. Las Juntas de Conciliación y Arbitraje fueron sustituidas. Error común: seguir pensando en las Juntas como primera instancia.",
      en: "The 2019 reform made prior conciliation at Conciliation Centers mandatory in most cases; if there is no agreement, the claim goes to the Judiciary's labor courts. The Conciliation and Arbitration Boards were replaced. Common mistake: still thinking of the Boards as the first stop.",
    },
    difficulty: 1,
    points: 10,
    competency: 'labor-law',
  },

  // ═════════════════════════ DER-08 ═════════════════════════
  {
    id: 'DER-08-E1',
    level: 2,
    module: 'DER-08',
    kind: 'numeric',
    flavor: 'case',
    context: {
      es: "Raúl gana $480 diarios con una jornada diurna de 8 horas. En una semana de inventario trabajó 11 horas extra.",
      en: "Raúl earns $480 a day with an 8-hour day shift. In an inventory week he worked 11 overtime hours.",
    },
    prompt: {
      es: "Según la LFT, ¿cuánto deben pagarle en total por esas 11 horas extra? Responde en pesos.",
      en: "Under the LFT, how much must he be paid in total for those 11 overtime hours? Answer in pesos.",
    },
    answer: 1440,
    unit: 'MXN',
    decimals: 0,
    tolerance: { abs: 0.5 },
    explanation: {
      es: "Hora = 480 ÷ 8 = $60. Primeras 9 horas al doble: 9 × 120 = $1,080. Las 2 restantes al triple: 2 × 180 = $360. Total $1,440. Error común: pagar las 11 al doble ($1,320) olvidando que lo que excede de 9 a la semana se paga al triple.",
      en: "Hour = 480 ÷ 8 = $60. First 9 hours at double: 9 × 120 = $1,080. The remaining 2 at triple: 2 × 180 = $360. Total $1,440. Common mistake: paying all 11 at double ($1,320), forgetting that hours beyond 9 a week are paid triple.",
    },
    difficulty: 2,
    points: 15,
    competency: 'lft',
  },
  {
    id: 'DER-08-E2',
    level: 2,
    module: 'DER-08',
    kind: 'mcq',
    flavor: 'concept',
    prompt: {
      es: "Según la LFT, ¿cuál es la duración máxima de la jornada nocturna?",
      en: "Under the LFT, what is the maximum length of a night shift?",
    },
    options: [
      { id: 'DER-08-E2-a', text: { es: "8 horas", en: "8 hours" } },
      { id: 'DER-08-E2-b', text: { es: "7 horas y media", en: "7.5 hours" } },
      { id: 'DER-08-E2-c', text: { es: "7 horas", en: "7 hours" } },
      { id: 'DER-08-E2-d', text: { es: "6 horas", en: "6 hours" } },
    ],
    correctOptionId: 'DER-08-E2-c',
    explanation: {
      es: "La jornada nocturna (entre 20:00 y 6:00) es de máximo 7 horas, porque trabajar de noche desgasta más. La diurna es de 8 y la mixta de 7.5. Error común: confundir la nocturna con la mixta.",
      en: "The night shift (between 20:00 and 6:00) is at most 7 hours, because working at night is more draining. The day shift is 8 and the mixed shift 7.5. Common mistake: confusing the night shift with the mixed one.",
    },
    difficulty: 1,
    points: 10,
    competency: 'lft',
  },
  {
    id: 'DER-08-E3',
    level: 2,
    module: 'DER-08',
    kind: 'fields',
    flavor: 'case',
    context: {
      es: "Elena entró a trabajar a una farmacia y al llegar diciembre lleva 146 días laborados en el año. Su salario diario es de $350 y la empresa paga el aguinaldo mínimo de ley.",
      en: "Elena started working at a pharmacy and by December she has worked 146 days in the year. Her daily wage is $350 and the company pays the statutory minimum Christmas bonus.",
    },
    prompt: {
      es: "Calcula su aguinaldo proporcional: primero los días que le corresponden y luego el monto en pesos.",
      en: "Compute her proportional Christmas bonus: first the days she is owed and then the amount in pesos.",
    },
    fields: [
      { id: 'f1', label: { es: "Días de aguinaldo proporcionales", en: "Proportional bonus days" }, answer: 6, unit: 'days', tolerance: { abs: 0.01 } },
      { id: 'f2', label: { es: "Monto del aguinaldo", en: "Bonus amount" }, answer: 2100, unit: 'MXN', tolerance: { abs: 0.5 } },
    ],
    explanation: {
      es: "Días: 15 × 146 ÷ 365 = 6. Monto: 6 × $350 = $2,100. Debe pagarse antes del 20 de diciembre. Error común: pensar que si no se trabajó el año completo no hay aguinaldo; se paga la parte proporcional.",
      en: "Days: 15 × 146 ÷ 365 = 6. Amount: 6 × $350 = $2,100. It must be paid before December 20. Common mistake: thinking there is no bonus without a full year; the proportional part is paid.",
    },
    difficulty: 2,
    points: 15,
    competency: 'lft',
  },
  {
    id: 'DER-08-E4',
    level: 2,
    module: 'DER-08',
    kind: 'truefalse',
    flavor: 'concept',
    prompt: {
      es: "En un contrato por tiempo indeterminado, la LFT permite pactar un periodo de prueba de hasta 6 meses para cualquier puesto, incluido un ayudante general.",
      en: "In an indefinite-term contract, the LFT allows a probation period of up to 6 months for any position, including a general helper.",
    },
    answer: false,
    explanation: {
      es: "Falso. El periodo de prueba general es de hasta 30 días; solo puede llegar a 180 días en puestos de dirección, gerenciales o técnicos especializados. Un ayudante general no entra en esa excepción. Error común: aplicar el plazo largo a cualquier empleo.",
      en: "False. The general probation period is up to 30 days; it can reach 180 days only for managerial, executive or specialized technical positions. A general helper does not fall under that exception. Common mistake: applying the long term to any job.",
    },
    difficulty: 1,
    points: 10,
    competency: 'lft',
  },
  {
    id: 'DER-08-E5',
    level: 2,
    module: 'DER-08',
    kind: 'classify',
    flavor: 'concept',
    prompt: {
      es: "Clasifica cada concepto: ¿se paga en cualquier terminación (finiquito) o solo cuando el despido es injustificado?",
      en: "Classify each item: is it paid on any termination (final settlement) or only when the dismissal is unjustified?",
    },
    categories: [
      { id: 'DER-08-E5-c1', label: { es: "Finiquito: en cualquier terminación", en: "Final settlement: on any termination" } },
      { id: 'DER-08-E5-c2', label: { es: "Solo en despido injustificado", en: "Only for unjustified dismissal" } },
    ],
    items: [
      { id: 'DER-08-E5-i1', label: { es: "Días trabajados que aún no se han pagado", en: "Days worked not yet paid" }, correctCategoryId: 'DER-08-E5-c1' },
      { id: 'DER-08-E5-i2', label: { es: "Aguinaldo proporcional del año", en: "The year's proportional Christmas bonus" }, correctCategoryId: 'DER-08-E5-c1' },
      { id: 'DER-08-E5-i3', label: { es: "Vacaciones no disfrutadas y su prima vacacional", en: "Untaken vacation and its vacation premium" }, correctCategoryId: 'DER-08-E5-c1' },
      { id: 'DER-08-E5-i4', label: { es: "Indemnización de 3 meses de salario", en: "Severance of 3 months of wages" }, correctCategoryId: 'DER-08-E5-c2' },
      { id: 'DER-08-E5-i5', label: { es: "Salarios vencidos durante el juicio que gana el trabajador", en: "Back pay during the lawsuit the worker wins" }, correctCategoryId: 'DER-08-E5-c2' },
    ],
    explanation: {
      es: "El finiquito paga lo ya ganado (días, aguinaldo, vacaciones y prima proporcionales) sin importar por qué termina la relación. La indemnización de 3 meses y los salarios vencidos son consecuencia de un despido injustificado: junto con el finiquito forman la liquidación. Error común: creer que quien renuncia no recibe nada.",
      en: "The final settlement pays what was already earned (days, proportional bonus, vacation and premium) regardless of why the relationship ends. The 3-month severance and back pay result from an unjustified dismissal: together with the settlement they form the severance package. Common mistake: believing someone who resigns gets nothing.",
    },
    difficulty: 2,
    points: 15,
    competency: 'lft',
  },
  {
    id: 'DER-08-E6',
    level: 2,
    module: 'DER-08',
    kind: 'formula',
    flavor: 'concept',
    prompt: {
      es: "Completa la fórmula de la prima vacacional mínima que marca la LFT.",
      en: "Complete the formula for the minimum vacation premium set by the LFT.",
    },
    template: 'Prima vacacional = {{b1}} × {{b2}} × {{b3}}',
    blanks: [
      {
        id: 'b1',
        options: [
          { id: 'DER-08-E6-b1-a', text: { es: "Días de vacaciones que corresponden", en: "Vacation days owed" } },
          { id: 'DER-08-E6-b1-b', text: { es: "Días trabajados en el año", en: "Days worked in the year" } },
          { id: 'DER-08-E6-b1-c', text: { es: "Horas extra de la semana", en: "Overtime hours in the week" } },
        ],
        correctOptionId: 'DER-08-E6-b1-a',
      },
      {
        id: 'b2',
        options: [
          { id: 'DER-08-E6-b2-a', text: { es: "Salario mínimo", en: "Minimum wage" } },
          { id: 'DER-08-E6-b2-b', text: { es: "Salario diario del trabajador", en: "Worker's daily wage" } },
          { id: 'DER-08-E6-b2-c', text: { es: "Utilidad de la empresa", en: "Company profit" } },
        ],
        correctOptionId: 'DER-08-E6-b2-b',
      },
      {
        id: 'b3',
        options: [
          { id: 'DER-08-E6-b3-a', text: { es: "10%", en: "10%" } },
          { id: 'DER-08-E6-b3-b', text: { es: "15 días", en: "15 days" } },
          { id: 'DER-08-E6-b3-c', text: { es: "25%", en: "25%" } },
        ],
        correctOptionId: 'DER-08-E6-b3-c',
      },
    ],
    explanation: {
      es: "La prima vacacional es al menos 25% del salario que corresponde a los días de vacaciones: días de vacaciones × salario diario × 25%. Con 16 días y $500 diarios: 16 × 500 × 25% = $2,000. Error común: usar el 10% de la PTU o los 15 días del aguinaldo, que son otros derechos.",
      en: "The vacation premium is at least 25% of the wages for the vacation days: vacation days × daily wage × 25%. With 16 days and $500 a day: 16 × 500 × 25% = $2,000. Common mistake: using PTU's 10% or the bonus's 15 days, which are other rights.",
    },
    difficulty: 1,
    points: 10,
    competency: 'lft',
  },

  // ═════════════════════════ DER-09 ═════════════════════════
  {
    id: 'DER-09-E1',
    level: 2,
    module: 'DER-09',
    kind: 'multi',
    flavor: 'concept',
    prompt: {
      es: "¿Cuáles de estos son seguros del régimen obligatorio del IMSS? Selecciona todos los que apliquen.",
      en: "Which of these are branches of IMSS's mandatory regime? Select all that apply.",
    },
    options: [
      { id: 'DER-09-E1-a', text: { es: "Riesgos de trabajo", en: "Work risks" } },
      { id: 'DER-09-E1-b', text: { es: "Enfermedades y maternidad", en: "Illness and maternity" } },
      { id: 'DER-09-E1-c', text: { es: "Seguro del automóvil de la empresa", en: "The company's car insurance" } },
      { id: 'DER-09-E1-d', text: { es: "Guarderías y prestaciones sociales", en: "Daycare and social benefits" } },
      { id: 'DER-09-E1-e', text: { es: "Seguro contra robo de mercancía", en: "Merchandise theft insurance" } },
    ],
    correctOptionIds: ['DER-09-E1-a', 'DER-09-E1-b', 'DER-09-E1-d'],
    explanation: {
      es: "Los cinco seguros obligatorios son: riesgos de trabajo; enfermedades y maternidad; invalidez y vida; retiro, cesantía en edad avanzada y vejez; y guarderías y prestaciones sociales. Los seguros de auto o de robo son seguros privados que la empresa puede contratar, no seguridad social. Error común: pensar que el IMSS asegura los bienes de la empresa.",
      en: "The five mandatory branches are: work risks; illness and maternity; disability and life; retirement, old-age unemployment and old age; and daycare and social benefits. Car or theft insurance are private policies the company may buy, not social security. Common mistake: thinking IMSS insures the company's property.",
    },
    difficulty: 1,
    points: 10,
    competency: 'employer-obligations',
  },
  {
    id: 'DER-09-E2',
    level: 2,
    module: 'DER-09',
    kind: 'numeric',
    flavor: 'case',
    context: {
      es: "Una ferretería tiene un empleado con salario base diario de $500. Calcula la aportación de vivienda de un periodo de 30 días.",
      en: "A hardware store has an employee with a daily base wage of $500. Compute the housing contribution for a 30-day period.",
    },
    prompt: {
      es: "¿Cuánto debe aportar el patrón al INFONAVIT por ese trabajador en el periodo? Responde en pesos.",
      en: "How much must the employer contribute to INFONAVIT for that worker in the period? Answer in pesos.",
    },
    answer: 750,
    unit: 'MXN',
    decimals: 0,
    tolerance: { abs: 0.5 },
    explanation: {
      es: "Aportación = 500 × 30 × 5% = $750, que paga solo el patrón; no se descuenta al trabajador. Error común: descontar la mitad al empleado, como si fuera una cuota compartida.",
      en: "Contribution = 500 × 30 × 5% = $750, paid only by the employer; it is not withheld from the worker. Common mistake: deducting half from the employee, as if it were a shared contribution.",
    },
    difficulty: 1,
    points: 10,
    competency: 'employer-obligations',
  },
  {
    id: 'DER-09-E3',
    level: 2,
    module: 'DER-09',
    kind: 'fields',
    flavor: 'case',
    context: {
      es: "Una empresa de mensajería obtuvo una renta gravable de $1,800,000. Tiene 10 trabajadores con derecho a PTU y todos laboraron los 365 días del año.",
      en: "A courier company had taxable income of $1,800,000. It has 10 workers entitled to PTU and all worked the 365 days of the year.",
    },
    prompt: {
      es: "Calcula la PTU: el total a repartir, la mitad que se reparte por días trabajados y lo que recibe cada trabajador de esa mitad.",
      en: "Compute the PTU: the total to distribute, the half distributed by days worked and what each worker receives from that half.",
    },
    fields: [
      { id: 'f1', label: { es: "PTU total", en: "Total PTU" }, answer: 180000, unit: 'MXN', tolerance: { abs: 0.5 } },
      { id: 'f2', label: { es: "Mitad por días trabajados", en: "Half by days worked" }, answer: 90000, unit: 'MXN', tolerance: { abs: 0.5 } },
      { id: 'f3', label: { es: "Parte por días de cada trabajador", en: "Each worker's share by days" }, answer: 9000, unit: 'MXN', tolerance: { abs: 0.5 } },
    ],
    explanation: {
      es: "PTU = 1,800,000 × 10% = $180,000. Mitad por días = $90,000. Como los 10 trabajaron los mismos días: 90,000 ÷ 10 = $9,000 cada uno. La otra mitad se reparte según salarios. Error común: dividir los $180,000 completos entre 10 sin separar la parte por salarios.",
      en: "PTU = 1,800,000 × 10% = $180,000. Half by days = $90,000. Since all 10 worked the same days: 90,000 ÷ 10 = $9,000 each. The other half is split by wages. Common mistake: dividing the full $180,000 by 10 without separating the wage-based part.",
    },
    difficulty: 2,
    points: 20,
    competency: 'employer-obligations',
  },
  {
    id: 'DER-09-E4',
    level: 2,
    module: 'DER-09',
    kind: 'truefalse',
    flavor: 'concept',
    prompt: {
      es: "El impuesto sobre nóminas es un impuesto federal que cobra el IMSS con la misma tasa en todo el país.",
      en: "Payroll tax is a federal tax collected by IMSS at the same rate across the country.",
    },
    answer: false,
    explanation: {
      es: "Falso. El impuesto sobre nóminas es estatal: lo cobra cada entidad federativa y cada una fija su tasa. Lo paga el patrón sobre los sueldos pagados. Error común: confundirlo con las cuotas del IMSS, que son seguridad social federal.",
      en: "False. Payroll tax is a state tax: each state collects it and sets its own rate. The employer pays it on wages paid. Common mistake: confusing it with IMSS contributions, which are federal social security.",
    },
    difficulty: 1,
    points: 10,
    competency: 'employer-obligations',
  },
  {
    id: 'DER-09-E5',
    level: 2,
    module: 'DER-09',
    kind: 'classify',
    flavor: 'concept',
    prompt: {
      es: "Clasifica cada obligación del patrón según la autoridad ante la que se cumple.",
      en: "Classify each employer obligation by the authority before which it is met.",
    },
    categories: [
      { id: 'DER-09-E5-c1', label: { es: "IMSS", en: "IMSS" } },
      { id: 'DER-09-E5-c2', label: { es: "INFONAVIT", en: "INFONAVIT" } },
      { id: 'DER-09-E5-c3', label: { es: "SAT", en: "SAT" } },
      { id: 'DER-09-E5-c4', label: { es: "Gobierno estatal", en: "State government" } },
    ],
    items: [
      { id: 'DER-09-E5-i1', label: { es: "Dar de alta al trabajador el día que empieza", en: "Enroll the worker on the day they start" }, correctCategoryId: 'DER-09-E5-c1' },
      { id: 'DER-09-E5-i2', label: { es: "Pagar la cuota del seguro de riesgos de trabajo", en: "Pay the work-risk insurance contribution" }, correctCategoryId: 'DER-09-E5-c1' },
      { id: 'DER-09-E5-i3', label: { es: "Aportar el 5% del salario base para vivienda", en: "Contribute 5% of the base wage for housing" }, correctCategoryId: 'DER-09-E5-c2' },
      { id: 'DER-09-E5-i4', label: { es: "Retener y enterar el ISR del sueldo", en: "Withhold and remit ISR on the salary" }, correctCategoryId: 'DER-09-E5-c3' },
      { id: 'DER-09-E5-i5', label: { es: "Emitir el CFDI de nómina de cada pago", en: "Issue the payroll CFDI for each payment" }, correctCategoryId: 'DER-09-E5-c3' },
      { id: 'DER-09-E5-i6', label: { es: "Pagar el impuesto sobre nóminas", en: "Pay payroll tax" }, correctCategoryId: 'DER-09-E5-c4' },
    ],
    explanation: {
      es: "IMSS: alta y cuotas de los seguros. INFONAVIT: aportación de vivienda del 5%. SAT: retención de ISR y CFDI de nómina. Estado: impuesto sobre nóminas. Error común: mandar el CFDI de nómina al IMSS; es un comprobante fiscal, por eso es del SAT.",
      en: "IMSS: enrollment and insurance contributions. INFONAVIT: the 5% housing contribution. SAT: ISR withholding and payroll CFDI. State: payroll tax. Common mistake: assigning the payroll CFDI to IMSS; it is a tax receipt, so it belongs to SAT.",
    },
    difficulty: 2,
    points: 15,
    competency: 'employer-obligations',
  },
  {
    id: 'DER-09-E6',
    level: 2,
    module: 'DER-09',
    kind: 'mcq',
    flavor: 'case',
    context: {
      es: "Un restaurante contrata a un mesero el lunes con un periodo de prueba de 30 días. El gerente propone darlo de alta en el IMSS «hasta que pase la prueba, por si no se queda».",
      en: "A restaurant hires a waiter on Monday with a 30-day probation period. The manager proposes enrolling him with IMSS «once probation is over, in case he does not stay».",
    },
    prompt: {
      es: "¿Qué es lo correcto según la ley?",
      en: "What is correct under the law?",
    },
    options: [
      { id: 'DER-09-E6-a', text: { es: "Esperar los 30 días, porque en periodo de prueba no hay relación laboral", en: "Wait the 30 days, because there is no employment relationship during probation" } },
      { id: 'DER-09-E6-b', text: { es: "Darlo de alta desde su inicio, porque la relación laboral existe desde el primer día", en: "Enroll him from the start, because the employment relationship exists from day one" } },
      { id: 'DER-09-E6-c', text: { es: "No darlo de alta si cobra en efectivo", en: "Not enroll him if he is paid in cash" } },
      { id: 'DER-09-E6-d', text: { es: "Que el mesero se inscriba por su cuenta como trabajador independiente", en: "Have the waiter register on his own as self-employed" } },
    ],
    correctOptionId: 'DER-09-E6-b',
    explanation: {
      es: "El periodo de prueba forma parte de la relación de trabajo, así que el alta en el IMSS debe hacerse desde el inicio (dentro del plazo corto que marca la ley). Si el mesero se accidenta sin estar dado de alta, el patrón puede responder por los costos. Error común: tratar la prueba como un periodo «sin obligaciones».",
      en: "The probation period is part of the employment relationship, so IMSS enrollment must happen from the start (within the short deadline the law sets). If the waiter has an accident while not enrolled, the employer may bear the costs. Common mistake: treating probation as an «obligation-free» period.",
    },
    difficulty: 1,
    points: 10,
    competency: 'employer-obligations',
  },

  // ═════════════════════════ DER-10 ═════════════════════════
  {
    id: 'DER-10-E1',
    level: 2,
    module: 'DER-10',
    kind: 'classify',
    flavor: 'concept',
    prompt: {
      es: "Clasifica cada creación según la rama de la propiedad intelectual que la protege en México.",
      en: "Classify each creation by the branch of intellectual property that protects it in Mexico.",
    },
    categories: [
      { id: 'DER-10-E1-c1', label: { es: "Propiedad industrial (IMPI)", en: "Industrial property (IMPI)" } },
      { id: 'DER-10-E1-c2', label: { es: "Derecho de autor (INDAUTOR)", en: "Copyright (INDAUTOR)" } },
    ],
    items: [
      { id: 'DER-10-E1-i1', label: { es: "El nombre con el que se vende una crema de cacahuate", en: "The name under which a peanut butter is sold" }, correctCategoryId: 'DER-10-E1-c1' },
      { id: 'DER-10-E1-i2', label: { es: "Una válvula nueva que ahorra agua en regaderas", en: "A new valve that saves water in showers" }, correctCategoryId: 'DER-10-E1-c1' },
      { id: 'DER-10-E1-i3', label: { es: "La forma ornamental de una silla de diseño", en: "The ornamental shape of a designer chair" }, correctCategoryId: 'DER-10-E1-c1' },
      { id: 'DER-10-E1-i4', label: { es: "Una novela publicada por una escritora", en: "A novel published by a writer" }, correctCategoryId: 'DER-10-E1-c2' },
      { id: 'DER-10-E1-i5', label: { es: "Una canción grabada por un grupo", en: "A song recorded by a band" }, correctCategoryId: 'DER-10-E1-c2' },
      { id: 'DER-10-E1-i6', label: { es: "El programa de cómputo de una app de entregas", en: "The computer program of a delivery app" }, correctCategoryId: 'DER-10-E1-c2' },
    ],
    explanation: {
      es: "Marcas (el nombre del producto), invenciones (la válvula) y diseños industriales (la forma de la silla) son propiedad industrial a cargo del IMPI. Novelas, canciones y programas de cómputo son obras protegidas por el derecho de autor, a cargo del INDAUTOR. Error común: pensar que el software se patenta; en México se protege como obra.",
      en: "Trademarks (the product name), inventions (the valve) and industrial designs (the chair's shape) are industrial property handled by IMPI. Novels, songs and computer programs are works protected by copyright, handled by INDAUTOR. Common mistake: thinking software is patented; in Mexico it is protected as a work.",
    },
    difficulty: 1,
    points: 10,
    competency: 'intellectual-property',
  },
  {
    id: 'DER-10-E2',
    level: 2,
    module: 'DER-10',
    kind: 'truefalse',
    flavor: 'concept',
    prompt: {
      es: "En México, una fotografía solo queda protegida por el derecho de autor si su autor la registra ante el INDAUTOR.",
      en: "In Mexico, a photograph is only protected by copyright if its author registers it with INDAUTOR.",
    },
    answer: false,
    explanation: {
      es: "Falso. El derecho de autor nace desde que la obra se crea y se fija en un soporte; el registro es opcional y sirve como prueba de autoría y fecha. Error común: confundirlo con las marcas y patentes, que sí requieren registro ante el IMPI.",
      en: "False. Copyright arises as soon as the work is created and fixed in a medium; registration is optional and serves as evidence of authorship and date. Common mistake: confusing it with trademarks and patents, which do require registration with IMPI.",
    },
    difficulty: 1,
    points: 10,
    competency: 'intellectual-property',
  },
  {
    id: 'DER-10-E3',
    level: 2,
    module: 'DER-10',
    kind: 'mcq',
    flavor: 'concept',
    prompt: {
      es: "¿Cuál es la principal ventaja de proteger una receta como secreto industrial en lugar de patentarla?",
      en: "What is the main advantage of protecting a recipe as a trade secret instead of patenting it?",
    },
    options: [
      { id: 'DER-10-E3-a', text: { es: "Que el IMPI la publica para que todos sepan que es tuya", en: "That IMPI publishes it so everyone knows it is yours" } },
      { id: 'DER-10-E3-b', text: { es: "Que te protege aunque un competidor la descubra por su cuenta", en: "That it protects you even if a competitor discovers it on their own" } },
      { id: 'DER-10-E3-c', text: { es: "Que no vence mientras se mantenga confidencial", en: "That it does not expire as long as it stays confidential" } },
      { id: 'DER-10-E3-d', text: { es: "Que basta con registrarla una vez para siempre", en: "That registering it once is enough forever" } },
    ],
    correctOptionId: 'DER-10-E3-c',
    explanation: {
      es: "El secreto industrial no se registra ni se publica, y dura mientras se mantenga confidencial, sin plazo fijo. Su debilidad es que, si se filtra o alguien lo descubre de forma independiente, se pierde. Error común: creer que el secreto se registra o que protege contra el descubrimiento independiente.",
      en: "A trade secret is neither registered nor published, and it lasts as long as it stays confidential, with no fixed term. Its weakness is that if it leaks or someone discovers it independently, it is lost. Common mistake: believing a secret is registered or protects against independent discovery.",
    },
    difficulty: 1,
    points: 10,
    competency: 'intellectual-property',
  },
  {
    id: 'DER-10-E4',
    level: 2,
    module: 'DER-10',
    kind: 'mcq',
    flavor: 'case',
    context: {
      es: "«Mole Doña Chuy» tiene su marca registrada en México desde hace años. Empieza a exportar a Colombia y descubre que un empresario local acaba de solicitar allá el registro del mismo nombre.",
      en: "«Mole Doña Chuy» has had its trademark registered in Mexico for years. It starts exporting to Colombia and finds that a local businessman has just applied to register the same name there.",
    },
    prompt: {
      es: "¿Qué principio explica el riesgo y qué debió hacer la empresa?",
      en: "Which principle explains the risk and what should the company have done?",
    },
    options: [
      { id: 'DER-10-E4-a', text: { es: "Ninguno: el registro mexicano protege automáticamente en todo el mundo", en: "None: the Mexican registration automatically protects worldwide" } },
      { id: 'DER-10-E4-b', text: { es: "Territorialidad: debió registrar la marca en Colombia antes de entrar a ese mercado", en: "Territoriality: it should have registered the mark in Colombia before entering that market" } },
      { id: 'DER-10-E4-c', text: { es: "Derecho de autor: basta con demostrar que creó el nombre primero", en: "Copyright: it is enough to prove it created the name first" } },
      { id: 'DER-10-E4-d', text: { es: "Secreto industrial: debió mantener el nombre en secreto", en: "Trade secret: it should have kept the name secret" } },
    ],
    correctOptionId: 'DER-10-E4-b',
    explanation: {
      es: "Los registros de propiedad industrial son territoriales: protegen solo en el país donde se otorgan. Como en marcas suele ganar quien registra primero, la empresa debió solicitar el registro en Colombia (directamente o por la vía internacional) antes de exportar. Error común: suponer que un registro nacional vale en el extranjero.",
      en: "Industrial property registrations are territorial: they protect only in the country that grants them. Since in trademarks whoever files first usually wins, the company should have applied in Colombia (directly or via the international route) before exporting. Common mistake: assuming a national registration is valid abroad.",
    },
    difficulty: 2,
    points: 15,
    competency: 'intellectual-property',
  },
  {
    id: 'DER-10-E5',
    level: 2,
    module: 'DER-10',
    kind: 'multi',
    flavor: 'case',
    context: {
      es: "Una cadena de taquerías quiere conocer el valor de sus activos de propiedad intelectual antes de ofrecer franquicias.",
      en: "A taquería chain wants to know the value of its intellectual property assets before offering franchises.",
    },
    prompt: {
      es: "¿Cuáles de estos elementos son activos de propiedad intelectual? Selecciona todos los que apliquen.",
      en: "Which of these items are intellectual property assets? Select all that apply.",
    },
    options: [
      { id: 'DER-10-E5-a', text: { es: "La marca y el logotipo con los que la gente reconoce las taquerías", en: "The trademark and logo people recognize the taquerías by" } },
      { id: 'DER-10-E5-b', text: { es: "La receta confidencial de su salsa, que solo conocen dos personas", en: "The confidential salsa recipe, known only to two people" } },
      { id: 'DER-10-E5-c', text: { es: "Los trompos y refrigeradores de cada sucursal", en: "The spits and refrigerators in each branch" } },
      { id: 'DER-10-E5-d', text: { es: "El manual de operación que escribieron para capacitar a su personal", en: "The operations manual they wrote to train their staff" } },
      { id: 'DER-10-E5-e', text: { es: "Los locales que rentan en plazas comerciales", en: "The premises they rent in shopping centers" } },
    ],
    correctOptionIds: ['DER-10-E5-a', 'DER-10-E5-b', 'DER-10-E5-d'],
    explanation: {
      es: "La marca (propiedad industrial), la receta confidencial (secreto industrial) y el manual escrito (obra protegida por derecho de autor) son activos intangibles que se pueden licenciar en una franquicia. Trompos, refrigeradores y locales son bienes físicos o arrendados, no propiedad intelectual. Error común: valuar solo lo que se puede tocar.",
      en: "The trademark (industrial property), the confidential recipe (trade secret) and the written manual (a work protected by copyright) are intangible assets that can be licensed in a franchise. Spits, refrigerators and premises are physical or leased goods, not intellectual property. Common mistake: valuing only what can be touched.",
    },
    difficulty: 2,
    points: 15,
    competency: 'intellectual-property',
  },
  {
    id: 'DER-10-E6',
    level: 2,
    module: 'DER-10',
    kind: 'truefalse',
    flavor: 'concept',
    prompt: {
      es: "Si le cuentas a un inversionista tu idea para una app, el derecho de autor le impide usar esa misma idea aunque no hayas escrito nada.",
      en: "If you tell an investor your idea for an app, copyright prevents them from using that same idea even if you have written nothing down.",
    },
    answer: false,
    explanation: {
      es: "Falso. El derecho de autor protege la expresión concreta (textos, código, diseños), no las ideas. Para proteger una idea al compartirla conviene firmar un acuerdo de confidencialidad antes de presentarla. Error común: creer que una idea, por ser tuya, ya está protegida.",
      en: "False. Copyright protects the concrete expression (texts, code, designs), not ideas. To protect an idea when sharing it, sign a confidentiality agreement before presenting it. Common mistake: believing that an idea, because it is yours, is already protected.",
    },
    difficulty: 1,
    points: 10,
    competency: 'intellectual-property',
  },

  // ═════════════════════════ DER-11 ═════════════════════════
  {
    id: 'DER-11-E1',
    level: 2,
    module: 'DER-11',
    kind: 'fields',
    flavor: 'case',
    context: {
      es: "Una empresa de herramientas presentó su solicitud de patente en 2018, obtuvo el registro de su marca en 2021 y publicó un manual técnico cuyo autor falleció en 2005.",
      en: "A tool company filed its patent application in 2018, obtained its trademark registration in 2021 and published a technical manual whose author died in 2005.",
    },
    prompt: {
      es: "Escribe el año que corresponde a cada fecha clave de sus derechos.",
      en: "Enter the year for each key date of its rights.",
    },
    fields: [
      { id: 'f1', label: { es: "Año en que vence la patente", en: "Year the patent expires" }, answer: 2038, unit: 'none', tolerance: { abs: 0 } },
      { id: 'f2', label: { es: "Año de la primera renovación de la marca", en: "Year of the trademark's first renewal" }, answer: 2031, unit: 'none', tolerance: { abs: 0 } },
      { id: 'f3', label: { es: "Año hasta el que duran los derechos patrimoniales del manual", en: "Year until which the manual's economic rights last" }, answer: 2105, unit: 'none', tolerance: { abs: 0 } },
    ],
    explanation: {
      es: "Patente: 2018 + 20 = 2038, contados desde la solicitud. Marca: 2021 + 10 = 2031, contados desde el otorgamiento y renovable. Manual: 2005 + 100 = 2105 (vida del autor más 100 años). Error común: contar la patente desde que se concede o aplicarle renovaciones como a la marca.",
      en: "Patent: 2018 + 20 = 2038, counted from filing. Trademark: 2021 + 10 = 2031, counted from grant and renewable. Manual: 2005 + 100 = 2105 (author's life plus 100 years). Common mistake: counting the patent from grant or renewing it like a trademark.",
    },
    difficulty: 2,
    points: 20,
    competency: 'ip-registration',
  },
  {
    id: 'DER-11-E2',
    level: 2,
    module: 'DER-11',
    kind: 'numeric',
    flavor: 'case',
    context: {
      es: "Un poeta mexicano murió en 1990. Una editorial quiere publicar sus poemas sin pagar derechos a nadie.",
      en: "A Mexican poet died in 1990. A publisher wants to publish his poems without paying rights to anyone.",
    },
    prompt: {
      es: "¿Hasta qué año duran los derechos patrimoniales de sus poemas según la ley mexicana?",
      en: "Until what year do the economic rights to his poems last under Mexican law?",
    },
    answer: 2090,
    unit: 'none',
    decimals: 0,
    tolerance: { abs: 0 },
    explanation: {
      es: "En México los derechos patrimoniales duran la vida del autor y 100 años más: 1990 + 100 = 2090. Hasta entonces, la editorial debe obtener autorización de quien tenga los derechos (por ejemplo, sus herederos). Error común: usar 50 o 70 años, que son plazos de otros países.",
      en: "In Mexico economic rights last the author's life plus 100 years: 1990 + 100 = 2090. Until then, the publisher must obtain permission from whoever holds the rights (for example, his heirs). Common mistake: using 50 or 70 years, which are terms in other countries.",
    },
    difficulty: 1,
    points: 10,
    competency: 'ip-registration',
  },
  {
    id: 'DER-11-E3',
    level: 2,
    module: 'DER-11',
    kind: 'multi',
    flavor: 'concept',
    prompt: {
      es: "¿Cuáles son requisitos para que un invento sea patentable? Selecciona todos los que apliquen.",
      en: "Which are requirements for an invention to be patentable? Select all that apply.",
    },
    options: [
      { id: 'DER-11-E3-a', text: { es: "Novedad: que no se haya dado a conocer antes", en: "Novelty: it has not been disclosed before" } },
      { id: 'DER-11-E3-b', text: { es: "Actividad inventiva: que no sea obvio para un experto", en: "Inventive step: it is not obvious to an expert" } },
      { id: 'DER-11-E3-c', text: { es: "Que ya se esté vendiendo con éxito", en: "That it is already selling successfully" } },
      { id: 'DER-11-E3-d', text: { es: "Aplicación industrial: que pueda producirse o usarse en alguna industria", en: "Industrial application: it can be produced or used in some industry" } },
      { id: 'DER-11-E3-e', text: { es: "Que tenga un diseño atractivo", en: "That it has an attractive design" } },
    ],
    correctOptionIds: ['DER-11-E3-a', 'DER-11-E3-b', 'DER-11-E3-d'],
    explanation: {
      es: "Los tres requisitos son novedad, actividad inventiva y aplicación industrial. Venderlo antes de solicitar la patente puede incluso destruir su novedad, y la apariencia atractiva se protege con un diseño industrial, no con patente. Error común: creer que el éxito comercial es requisito.",
      en: "The three requirements are novelty, inventive step and industrial application. Selling it before filing can even destroy its novelty, and an attractive appearance is protected by an industrial design, not a patent. Common mistake: believing commercial success is a requirement.",
    },
    difficulty: 1,
    points: 10,
    competency: 'ip-registration',
  },
  {
    id: 'DER-11-E4',
    level: 2,
    module: 'DER-11',
    kind: 'mcq',
    flavor: 'concept',
    prompt: {
      es: "Una marca formada solo por un dibujo de un colibrí, sin ninguna palabra, ¿qué tipo de marca es?",
      en: "A trademark made only of a hummingbird drawing, with no words at all, is what type of mark?",
    },
    options: [
      { id: 'DER-11-E4-a', text: { es: "Nominativa", en: "Word mark" } },
      { id: 'DER-11-E4-b', text: { es: "Innominada o figurativa", en: "Figurative mark" } },
      { id: 'DER-11-E4-c', text: { es: "Mixta", en: "Combined mark" } },
      { id: 'DER-11-E4-d', text: { es: "Aviso comercial", en: "Commercial slogan" } },
    ],
    correctOptionId: 'DER-11-E4-b',
    explanation: {
      es: "Una marca solo con imagen es innominada o figurativa. Nominativa es solo palabras, mixta combina palabras e imagen, y el aviso comercial es una frase publicitaria. Error común: llamar mixta a cualquier logotipo, aunque no tenga texto.",
      en: "A mark with an image only is figurative. A word mark is words only, a combined mark mixes words and image, and a commercial slogan is an advertising phrase. Common mistake: calling any logo combined, even without text.",
    },
    difficulty: 1,
    points: 10,
    competency: 'ip-registration',
  },
  {
    id: 'DER-11-E5',
    level: 2,
    module: 'DER-11',
    kind: 'classify',
    flavor: 'case',
    context: {
      es: "«Jugos Valle Verde» es una pyme que quiere proteger todo lo que ha creado.",
      en: "«Jugos Valle Verde» is a small business that wants to protect everything it has created.",
    },
    prompt: {
      es: "Clasifica cada creación según la figura que mejor la protege.",
      en: "Classify each creation by the figure that best protects it.",
    },
    categories: [
      { id: 'DER-11-E5-c1', label: { es: "Marca", en: "Trademark" } },
      { id: 'DER-11-E5-c2', label: { es: "Patente", en: "Patent" } },
      { id: 'DER-11-E5-c3', label: { es: "Derecho de autor", en: "Copyright" } },
    ],
    items: [
      { id: 'DER-11-E5-i1', label: { es: "El nombre «Valle Verde» con el que se venden los jugos", en: "The name «Valle Verde» under which the juices are sold" }, correctCategoryId: 'DER-11-E5-c1' },
      { id: 'DER-11-E5-i2', label: { es: "Un exprimidor industrial con un mecanismo nuevo que inventaron", en: "An industrial juicer with a new mechanism they invented" }, correctCategoryId: 'DER-11-E5-c2' },
      { id: 'DER-11-E5-i3', label: { es: "Las fotografías de su catálogo", en: "The photographs in its catalog" }, correctCategoryId: 'DER-11-E5-c3' },
      { id: 'DER-11-E5-i4', label: { es: "El código fuente de su tienda en línea", en: "The source code of its online store" }, correctCategoryId: 'DER-11-E5-c3' },
      { id: 'DER-11-E5-i5', label: { es: "Un proceso químico nuevo para conservar jugo sin conservadores", en: "A new chemical process to preserve juice without preservatives" }, correctCategoryId: 'DER-11-E5-c2' },
    ],
    explanation: {
      es: "El nombre comercial del producto se protege como marca. El exprimidor y el proceso de conservación son invenciones: patente (si cumplen novedad, actividad inventiva y aplicación industrial). Las fotos y el código fuente son obras: derecho de autor. Error común: patentar el software; en México el código se protege como obra.",
      en: "The product's commercial name is protected as a trademark. The juicer and the preservation process are inventions: patent (if they meet novelty, inventive step and industrial application). Photos and source code are works: copyright. Common mistake: patenting software; in Mexico code is protected as a work.",
    },
    difficulty: 2,
    points: 15,
    competency: 'ip-registration',
  },
  {
    id: 'DER-11-E6',
    level: 2,
    module: 'DER-11',
    kind: 'truefalse',
    flavor: 'concept',
    prompt: {
      es: "Un escritor puede vender a una editorial su derecho moral a ser reconocido como autor de su novela.",
      en: "A writer can sell a publisher his moral right to be credited as the author of his novel.",
    },
    answer: false,
    explanation: {
      es: "Falso. Los derechos morales (ser reconocido como autor, que no se deforme la obra) son perpetuos, inalienables e irrenunciables. Lo que sí se transmite son los derechos patrimoniales, como publicar y vender ejemplares. Error común: pensar que al vender los derechos de explotación se vende también la autoría.",
      en: "False. Moral rights (being credited as author, the work not being distorted) are perpetual, inalienable and unwaivable. What can be transferred are economic rights, such as publishing and selling copies. Common mistake: thinking that selling exploitation rights also sells authorship.",
    },
    difficulty: 1,
    points: 10,
    competency: 'ip-registration',
  },

  // ═════════════════════════ DER-12 ═════════════════════════
  {
    id: 'DER-12-E1',
    level: 2,
    module: 'DER-12',
    kind: 'classify',
    flavor: 'concept',
    prompt: {
      es: "Clasifica cada operación desde el punto de vista del banco: pasiva, activa o de servicios.",
      en: "Classify each operation from the bank's point of view: liability, asset or service.",
    },
    categories: [
      { id: 'DER-12-E1-c1', label: { es: "Pasiva (el banco recibe y queda debiendo)", en: "Liability (the bank receives and owes)" } },
      { id: 'DER-12-E1-c2', label: { es: "Activa (el banco presta)", en: "Asset (the bank lends)" } },
      { id: 'DER-12-E1-c3', label: { es: "De servicios", en: "Service" } },
    ],
    items: [
      { id: 'DER-12-E1-i1', label: { es: "Una cuenta de ahorro de un cliente", en: "A customer's savings account" }, correctCategoryId: 'DER-12-E1-c1' },
      { id: 'DER-12-E1-i2', label: { es: "Un depósito a plazo fijo de 90 días", en: "A 90-day fixed-term deposit" }, correctCategoryId: 'DER-12-E1-c1' },
      { id: 'DER-12-E1-i3', label: { es: "Un crédito hipotecario para comprar casa", en: "A mortgage loan to buy a house" }, correctCategoryId: 'DER-12-E1-c2' },
      { id: 'DER-12-E1-i4', label: { es: "Una tarjeta de crédito", en: "A credit card" }, correctCategoryId: 'DER-12-E1-c2' },
      { id: 'DER-12-E1-i5', label: { es: "El pago del recibo de luz en ventanilla", en: "Paying the electricity bill at the counter" }, correctCategoryId: 'DER-12-E1-c3' },
      { id: 'DER-12-E1-i6', label: { es: "La renta de una caja de seguridad", en: "Renting a safe-deposit box" }, correctCategoryId: 'DER-12-E1-c3' },
    ],
    explanation: {
      es: "En las pasivas el banco capta dinero y se lo debe al cliente (ahorro, plazo fijo). En las activas el banco presta (hipoteca, tarjeta). Las de servicios no implican captar ni prestar (pagos, cajas de seguridad). Error común: clasificar desde el punto de vista del cliente: para ti tu ahorro es un activo, pero para el banco es pasivo.",
      en: "In liability operations the bank raises money and owes it to the client (savings, fixed term). In asset operations the bank lends (mortgage, card). Service operations neither raise nor lend (payments, safe-deposit boxes). Common mistake: classifying from the client's view: for you your savings are an asset, but for the bank they are a liability.",
    },
    difficulty: 1,
    points: 10,
    competency: 'banking-law',
  },
  {
    id: 'DER-12-E2',
    level: 2,
    module: 'DER-12',
    kind: 'truefalse',
    flavor: 'concept',
    prompt: {
      es: "Un cheque posfechado (con fecha futura) no puede cobrarse en el banco antes de la fecha escrita en él.",
      en: "A post-dated cheque (with a future date) cannot be cashed at the bank before the date written on it.",
    },
    answer: false,
    explanation: {
      es: "Falso. Por ley el cheque siempre es pagadero a la vista: cualquier indicación en contrario se tiene por no puesta, así que el banco debe pagarlo cuando se presente si hay fondos. Error común: usar el cheque posfechado como si fuera un pagaré con fecha de vencimiento.",
      en: "False. By law a cheque is always payable on sight: any contrary indication is treated as not written, so the bank must pay it when presented if there are funds. Common mistake: using a post-dated cheque as if it were a promissory note with a due date.",
    },
    difficulty: 1,
    points: 10,
    competency: 'banking-law',
  },
  {
    id: 'DER-12-E3',
    level: 2,
    module: 'DER-12',
    kind: 'numeric',
    flavor: 'case',
    context: {
      es: "Un proveedor recibe un cheque por $12,000. Al presentarlo, el banco lo devuelve porque la cuenta del cliente no tiene fondos suficientes.",
      en: "A supplier receives a $12,000 cheque. When presented, the bank returns it because the customer's account lacks sufficient funds.",
    },
    prompt: {
      es: "¿Cuál es la indemnización mínima que el cliente debe pagar al proveedor, además del valor del cheque? Responde en pesos.",
      en: "What is the minimum compensation the customer must pay the supplier, besides the cheque's value? Answer in pesos.",
    },
    answer: 2400,
    unit: 'MXN',
    decimals: 0,
    tolerance: { abs: 0.5 },
    explanation: {
      es: "La ley de títulos y operaciones de crédito fija una indemnización de al menos 20% del valor del cheque no pagado por causa del librador: 12,000 × 20% = $2,400. Se suma a los $12,000 que sigue debiendo. Error común: creer que la indemnización sustituye el pago del cheque.",
      en: "The negotiable instruments law sets compensation of at least 20% of the value of a cheque unpaid through the drawer's fault: 12,000 × 20% = $2,400. It is added to the $12,000 still owed. Common mistake: believing the compensation replaces paying the cheque.",
    },
    difficulty: 1,
    points: 10,
    competency: 'banking-law',
  },
  {
    id: 'DER-12-E4',
    level: 2,
    module: 'DER-12',
    kind: 'mcq',
    flavor: 'concept',
    prompt: {
      es: "En México, ¿qué estudia principalmente el derecho financiero en sentido público?",
      en: "In Mexico, what does financial law in the public sense mainly study?",
    },
    options: [
      { id: 'DER-12-E4-a', text: { es: "Cómo invertir en la bolsa para ganar más", en: "How to invest in the stock market to earn more" } },
      { id: 'DER-12-E4-b', text: { es: "La actividad del Estado para obtener, administrar y gastar recursos públicos", en: "The State's activity to obtain, manage and spend public resources" } },
      { id: 'DER-12-E4-c', text: { es: "Solo los contratos entre particulares y sus bancos", en: "Only contracts between individuals and their banks" } },
      { id: 'DER-12-E4-d', text: { es: "Las reglas para hacer el presupuesto personal de una familia", en: "The rules for a family's personal budget" } },
    ],
    correctOptionId: 'DER-12-E4-b',
    explanation: {
      es: "El derecho financiero público regula cómo el Estado obtiene ingresos (impuestos, deuda), los administra y los gasta conforme al presupuesto. Los contratos con bancos son materia del derecho bancario, y las inversiones o presupuestos personales son finanzas, no esta rama del derecho. Error común: confundir derecho financiero con derecho bancario.",
      en: "Public financial law governs how the State obtains revenue (taxes, debt), manages it and spends it according to the budget. Contracts with banks belong to banking law, and personal investing or budgeting is finance, not this branch of law. Common mistake: confusing financial law with banking law.",
    },
    difficulty: 1,
    points: 10,
    competency: 'banking-law',
  },
  {
    id: 'DER-12-E5',
    level: 2,
    module: 'DER-12',
    kind: 'numeric',
    flavor: 'case',
    context: {
      es: "Una tienda de ropa obtiene un crédito simple bancario de $80,000 a una tasa hipotética de 15% anual de interés simple, que liquidará en 9 meses. No hay comisiones.",
      en: "A clothing store takes a simple bank loan of $80,000 at a hypothetical 15% annual simple interest rate, to be repaid in 9 months. There are no fees.",
    },
    prompt: {
      es: "¿Cuánto pagará de intereses por el crédito? Responde en pesos.",
      en: "How much interest will it pay on the loan? Answer in pesos.",
    },
    answer: 9000,
    unit: 'MXN',
    decimals: 0,
    tolerance: { abs: 0.5 },
    explanation: {
      es: "Interés simple = 80,000 × 15% × 9 ÷ 12 = $9,000. Si hubiera comisiones, el costo real (reflejado en el CAT) sería mayor. Error común: usar la tasa anual completa (80,000 × 15% = $12,000) sin ajustar por los 9 meses.",
      en: "Simple interest = 80,000 × 15% × 9 ÷ 12 = $9,000. If there were fees, the real cost (reflected in the CAT) would be higher. Common mistake: using the full annual rate (80,000 × 15% = $12,000) without adjusting for the 9 months.",
    },
    difficulty: 2,
    points: 15,
    competency: 'banking-law',
  },
  {
    id: 'DER-12-E6',
    level: 2,
    module: 'DER-12',
    kind: 'mcq',
    flavor: 'case',
    context: {
      es: "Un conocido abre un negocio que recibe dinero de vecinos y amigos, promete devolverlo con 5% de rendimiento mensual y usa ese dinero para prestarlo a otras personas. No tiene ninguna autorización financiera.",
      en: "An acquaintance opens a business that takes money from neighbors and friends, promises to return it with 5% monthly returns and lends that money to other people. It has no financial authorization at all.",
    },
    prompt: {
      es: "Desde el derecho bancario, ¿qué está haciendo?",
      en: "From the banking-law perspective, what is he doing?",
    },
    options: [
      { id: 'DER-12-E6-a', text: { es: "Una operación legal, porque cualquiera puede recibir depósitos si paga intereses", en: "A legal operation, because anyone can take deposits if they pay interest" } },
      { id: 'DER-12-E6-b', text: { es: "Una tanda, que la ley bancaria regula igual que a un banco", en: "A rotating savings club, which banking law regulates like a bank" } },
      { id: 'DER-12-E6-c', text: { es: "Una operación de servicios, porque no cobra comisiones", en: "A service operation, because it charges no fees" } },
      { id: 'DER-12-E6-d', text: { es: "Captación de recursos del público sin autorización, que la ley prohíbe y castiga", en: "Raising funds from the public without authorization, which the law prohibits and punishes" } },
    ],
    correctOptionId: 'DER-12-E6-d',
    explanation: {
      es: "Captar dinero del público para prestarlo es el servicio de banca y crédito, y solo pueden hacerlo instituciones autorizadas; hacerlo sin autorización es delito y el dinero de los ahorradores no tiene la protección del seguro de depósitos. Error común: confiar en rendimientos muy altos de quien no está autorizado.",
      en: "Raising money from the public to lend it is the banking and credit service, and only authorized institutions may do it; doing it without authorization is a crime and savers' money lacks deposit-insurance protection. Common mistake: trusting very high returns from someone who is not authorized.",
    },
    difficulty: 2,
    points: 15,
    competency: 'banking-law',
  },
]
