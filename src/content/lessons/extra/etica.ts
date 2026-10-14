import type { Exercise, Lesson } from '../../../types'

/**
 * FINCORE — Tema complementario 2.13: Ética profesional del contador.
 */

const NOTE_ETHICS = {
  es: "Contenido educativo. Los principios descritos son los del Código Internacional de Ética para Profesionales de la Contabilidad del IESBA, al que se alinea en lo general el Código de Ética Profesional del IMCP en México. Los códigos se actualizan y sus reglas detalladas cambian: verifica la versión vigente (2026) con la fuente oficial o con un contador antes de aplicarlos en un caso real.",
  en: "Educational content. The principles described are those of the IESBA International Code of Ethics for Professional Accountants, with which the IMCP Code of Professional Ethics in Mexico is broadly aligned. Codes are updated and their detailed rules change: verify the current version (2026) with the official source or an accountant before applying them to a real case.",
}

export const lessons: Lesson[] = [
  {
    id: 'L2-07',
    level: 2,
    topicIds: ['2.13'],
    title: { es: "Ética profesional del contador", en: "Professional ethics for accountants" },
    summary: {
      es: "Los números solo sirven si la gente puede confiar en ellos: la ética le da al contador principios, señales de alerta y un método para decidir bien cuando lo presionan.",
      en: "Numbers are only useful if people can trust them: ethics gives accountants principles, warning signs and a method to decide well when they are under pressure.",
    },
    minutes: 16,
    objectives: [
      { es: "Explicar por qué la confianza pública depende de la ética del contador y qué pasa cuando los estados financieros son falsos.", en: "Explain why public trust depends on the accountant's ethics and what happens when financial statements are false." },
      { es: "Nombrar y describir los cinco principios fundamentales: integridad, objetividad, competencia y diligencia profesional, confidencialidad y comportamiento profesional.", en: "Name and describe the five fundamental principles: integrity, objectivity, professional competence and due care, confidentiality and professional behavior." },
      { es: "Reconocer las cinco amenazas (interés propio, autorrevisión, abogacía, familiaridad e intimidación) y proponer salvaguardas.", en: "Recognize the five threats (self-interest, self-review, advocacy, familiarity and intimidation) and propose safeguards." },
      { es: "Aplicar un método de pasos para resolver un dilema ético real.", en: "Apply a step-by-step method to resolve a real ethical dilemma." },
    ],
    theory: [
      {
        heading: { es: "Por qué la ética importa en la contabilidad", en: "Why ethics matters in accounting" },
        body: [
          {
            es: "Imagina que vas a prestarle $20,000 a un amigo para su taquería y te enseña una libreta que dice que gana mucho. Si esa libreta está inventada, perderás tu dinero. Con las empresas pasa lo mismo: bancos, proveedores, inversionistas, trabajadores y el gobierno toman decisiones con los **estados financieros**. Esa **confianza pública** es la razón de ser del contador.",
            en: "Imagine you are going to lend $20,000 to a friend for his taco stand and he shows you a notebook saying he earns a lot. If that notebook is made up, you will lose your money. Companies work the same way: banks, suppliers, investors, workers and the government make decisions with **financial statements**. That **public trust** is the accountant's reason for being.",
          },
          {
            es: "La **ética profesional** es el conjunto de principios que guían cómo debe actuar el contador: decir la verdad con los números, no dejarse comprar y cuidar la información de sus clientes. No es solo \"ser buena persona\": es parte del trabajo, igual que saber hacer una póliza.",
            en: "**Professional ethics** is the set of principles that guide how an accountant must act: tell the truth with the numbers, not be bought and protect clients' information. It is not just \"being a good person\": it is part of the job, just like knowing how to record a journal entry.",
          },
          {
            es: "Cuando los estados financieros son falsos, el daño es grande: inversionistas que pierden ahorros, bancos que prestan a quien no puede pagar, trabajadores que se quedan sin empleo cuando la empresa quiebra. Casos famosos de fraude contable en el mundo, como el de Enron a principios de los 2000, terminaron en quiebras, juicios y en reglas más estrictas para toda la profesión. Además, el contador involucrado puede perder su prestigio, su certificación y enfrentar sanciones legales.",
            en: "When financial statements are false, the damage is large: investors who lose savings, banks that lend to those who cannot repay, workers who lose their jobs when the company goes bankrupt. Famous accounting fraud cases around the world, such as Enron in the early 2000s, ended in bankruptcies, lawsuits and stricter rules for the whole profession. In addition, the accountant involved may lose their reputation, their certification and face legal penalties.",
          },
        ],
        bullets: [
          { es: "Los números ayudan a decidir solo si son confiables.", en: "Numbers help decisions only if they are reliable." },
          { es: "El contador sirve a su cliente, pero también al público que usa la información.", en: "Accountants serve their client, but also the public that uses the information." },
          { es: "Un engaño contable daña a muchas personas, no solo a la empresa.", en: "Accounting deception harms many people, not just the company." },
          { es: "La reputación del contador tarda años en construirse y un día en perderse.", en: "An accountant's reputation takes years to build and one day to lose." },
        ],
      },
      {
        heading: { es: "Los principios fundamentales", en: "The fundamental principles" },
        body: [
          {
            es: "A nivel internacional, el **IESBA** (el consejo que emite el Código Internacional de Ética para Profesionales de la Contabilidad) define **cinco principios fundamentales**. En México, el **Código de Ética Profesional del IMCP** (Instituto Mexicano de Contadores Públicos) se alinea en lo general con ese código internacional, así que los principios son los mismos.",
            en: "Internationally, **IESBA** (the board that issues the International Code of Ethics for Professional Accountants) defines **five fundamental principles**. In Mexico, the **IMCP Code of Professional Ethics** (Mexican Institute of Public Accountants) is broadly aligned with that international code, so the principles are the same.",
          },
          {
            es: "**Integridad**: ser honesto y directo; no firmar ni presentar información que sabes que es falsa o engañosa. **Objetividad**: no dejar que intereses, presiones o simpatías tuerzan tu juicio. **Competencia y diligencia profesional**: saber hacer bien el trabajo, mantenerte actualizado y hacerlo con cuidado y a tiempo.",
            en: "**Integrity**: be honest and straightforward; do not sign or present information you know is false or misleading. **Objectivity**: do not let interests, pressure or personal liking bend your judgment. **Professional competence and due care**: know how to do the job well, stay up to date and do it carefully and on time.",
          },
          {
            es: "**Confidencialidad**: no contar ni usar para tu beneficio la información de tus clientes o de tu empresa, salvo que tengas permiso o la ley te obligue. **Comportamiento profesional**: cumplir las leyes y no hacer nada que desprestigie a la profesión, por ejemplo, presumir que \"le bajas los impuestos a cualquiera\".",
            en: "**Confidentiality**: do not disclose or use for your own benefit the information of your clients or employer, unless you have permission or the law requires it. **Professional behavior**: comply with the law and do nothing that discredits the profession, for example, boasting that you \"can cut anyone's taxes\".",
          },
        ],
        bullets: [
          { es: "Integridad → honestidad.", en: "Integrity → honesty." },
          { es: "Objetividad → juicio sin sesgos ni presiones.", en: "Objectivity → judgment free of bias and pressure." },
          { es: "Competencia y diligencia → saber y hacerlo con cuidado.", en: "Competence and due care → know-how and doing it carefully." },
          { es: "Confidencialidad → guardar la información del cliente.", en: "Confidentiality → protect client information." },
          { es: "Comportamiento profesional → cumplir la ley y cuidar la imagen de la profesión.", en: "Professional behavior → obey the law and protect the profession's image." },
        ],
      },
      {
        heading: { es: "Amenazas y salvaguardas", en: "Threats and safeguards" },
        body: [
          {
            es: "Una **amenaza** es una situación que puede empujarte a romper un principio, aunque no quieras. Una **salvaguarda** es una acción que reduce esa amenaza a un nivel aceptable: pedir que otra persona revise, rotar al responsable, documentar, o en el extremo, rechazar el trabajo.",
            en: "A **threat** is a situation that can push you to break a principle, even if you do not want to. A **safeguard** is an action that reduces that threat to an acceptable level: having someone else review, rotating the person in charge, documenting, or at the extreme, declining the work.",
          },
          {
            es: "El código internacional describe cinco tipos de amenaza. **Interés propio**: ganas algo si el resultado sale de cierta forma (tu bono depende de las ventas que tú mismo registras). **Autorrevisión**: revisas tu propio trabajo y es difícil ver tus errores. **Abogacía**: defiendes tanto la postura del cliente que dejas de ser objetivo. **Familiaridad**: la cercanía o amistad te vuelve demasiado confiado. **Intimidación**: te presionan con amenazas, como perder el cliente o el empleo.",
            en: "The international code describes five types of threat. **Self-interest**: you gain something if the result comes out a certain way (your bonus depends on the sales you record yourself). **Self-review**: you review your own work and it is hard to see your mistakes. **Advocacy**: you defend the client's position so much that you stop being objective. **Familiarity**: closeness or friendship makes you too trusting. **Intimidation**: you are pressured with threats, such as losing the client or your job.",
          },
          {
            es: "Mini ejemplo: Ana lleva 10 años revisando las cuentas de la panadería de su compadre (familiaridad). Una salvaguarda sería que otro contador del despacho revise el trabajo o que la cuenta pase a otra persona.",
            en: "Mini example: Ana has reviewed the accounts of her close family friend's bakery for 10 years (familiarity). A safeguard would be to have another accountant at the firm review the work or to hand the account over to someone else.",
          },
        ],
        bullets: [
          { es: "Interés propio: tu bono depende de la cifra que registras.", en: "Self-interest: your bonus depends on the figure you record." },
          { es: "Autorrevisión: auditas el sistema que tú mismo diseñaste.", en: "Self-review: you audit the system you designed yourself." },
          { es: "Abogacía: promueves al cliente ante un banco o un juicio.", en: "Advocacy: you promote the client before a bank or in a lawsuit." },
          { es: "Familiaridad: el cliente es tu amigo o pariente de años.", en: "Familiarity: the client is a long-time friend or relative." },
          { es: "Intimidación: \"si no lo haces, te despido\".", en: "Intimidation: \"if you don't do it, you're fired\"." },
        ],
      },
      {
        heading: { es: "Dilemas reales y cómo decidir", en: "Real dilemmas and how to decide" },
        body: [
          {
            es: "Un **dilema ético** aparece cuando hay presión para hacer algo que choca con tus principios. Ejemplos cotidianos: un cliente te pide \"maquillar\" las ventas (subirlas) para que el banco le preste; tu jefe te pide no registrar un gasto de este mes para que la utilidad se vea mejor; un amigo te pregunta cuánto gana tu cliente.",
            en: "An **ethical dilemma** arises when there is pressure to do something that clashes with your principles. Everyday examples: a client asks you to \"dress up\" (inflate) sales so the bank will lend to them; your boss asks you not to record this month's expense so profit looks better; a friend asks you how much your client earns.",
          },
          {
            es: "Para decidir con calma, sigue estos pasos: **1) Identifica los hechos** (qué te piden exactamente y con qué cifras). **2) Ubica los principios en juego** y las amenazas. **3) Enumera tus opciones** y sus consecuencias para todos los afectados. **4) Consulta**: a un colega de confianza, a tu supervisor, al área legal o a tu colegio de contadores, sin revelar datos confidenciales innecesarios. **5) Decide y documenta** por escrito lo que pasó y por qué actuaste así.",
            en: "To decide calmly, follow these steps: **1) Identify the facts** (what exactly you are being asked and with what figures). **2) Locate the principles at stake** and the threats. **3) List your options** and their consequences for everyone affected. **4) Consult**: a trusted colleague, your supervisor, the legal department or your accountants' association, without revealing unnecessary confidential data. **5) Decide and document** in writing what happened and why you acted that way.",
          },
          {
            es: "Mini ejemplo: tu jefe te pide no registrar una factura de luz de $8,000 de marzo \"para que el mes cierre bonito\". Hechos: el gasto ocurrió en marzo. Principio: integridad (la utilidad saldría $8,000 más alta de lo real). Opción correcta: explicarle que el gasto debe registrarse en marzo; si insiste, escalarlo y documentarlo. Si la presión no para, el código contempla incluso dejar de participar en el trabajo.",
            en: "Mini example: your boss asks you not to record an $8,000 March electricity bill \"so the month closes nicely\". Facts: the expense happened in March. Principle: integrity (profit would be $8,000 higher than reality). Right option: explain that the expense must be recorded in March; if they insist, escalate and document it. If the pressure does not stop, the code even contemplates withdrawing from the work.",
          },
          {
            es: "En el paso 1 (hechos) conviene **poner en números** lo que te piden: cuánto se inflaría una cifra y en qué porcentaje. Así ves con claridad el tamaño del engaño y puedes explicarlo con datos, no con opiniones.",
            en: "In step 1 (facts) it helps to **put into numbers** what you are being asked: how much a figure would be inflated and by what percentage. That way you clearly see the size of the deception and can explain it with data, not opinions.",
          },
        ],
        formulas: [
          {
            name: { es: "Cuánto se infla una cifra (en pesos y en porcentaje)", en: "How much a figure is inflated (in pesos and as a percentage)" },
            expression: "Diferencia = Cifra pedida − Cifra real;  % inflado = Diferencia ÷ Cifra real × 100",
            variables: [
              { symbol: "Cifra pedida", meaning: { es: "La cantidad, en pesos, que te piden reportar (por ejemplo, las ventas que el cliente quiere mostrar al banco).", en: "The amount, in pesos, you are asked to report (for example, the sales the client wants to show the bank)." } },
              { symbol: "Cifra real", meaning: { es: "La cantidad verdadera, en pesos, según los registros y comprobantes.", en: "The true amount, in pesos, according to the records and supporting documents." } },
              { symbol: "Diferencia", meaning: { es: "Los pesos que se agregarían de más: el tamaño del engaño.", en: "The extra pesos that would be added: the size of the deception." } },
              { symbol: "% inflado", meaning: { es: "Qué tanto, en porcentaje, la cifra pedida es mayor que la real.", en: "How much, as a percentage, the requested figure is above the real one." } },
            ],
            steps: [
              { es: "Resta la cifra real a la cifra pedida: eso es la diferencia en pesos.", en: "Subtract the real figure from the requested figure: that is the difference in pesos." },
              { es: "Divide la diferencia entre la cifra real (no entre la pedida).", en: "Divide the difference by the real figure (not by the requested one)." },
              { es: "Multiplica por 100 para expresarlo en porcentaje.", en: "Multiply by 100 to express it as a percentage." },
            ],
            example: {
              es: "Una papelería vendió $250,000 y el dueño quiere reportar $300,000. Diferencia: $300,000 − $250,000 = $50,000. Divide: $50,000 ÷ $250,000 = 0.20. Porcentaje: 0.20 × 100 = **20%** más de lo real.",
              en: "A stationery store sold $250,000 and the owner wants to report $300,000. Difference: $300,000 − $250,000 = $50,000. Divide: $50,000 ÷ $250,000 = 0.20. Percentage: 0.20 × 100 = **20%** above reality.",
            },
            interpret: {
              es: "El número te ayuda a dimensionar el engaño, pero no lo vuelve aceptable: inflar 5% o 50% rompe igual la integridad.",
              en: "The number helps you size the deception, but it does not make it acceptable: inflating by 5% or 50% breaks integrity all the same.",
            },
            mistake: {
              es: "Dividir entre la cifra pedida. Con el ejemplo daría $50,000 ÷ $300,000 ≈ 16.7%, que subestima el engaño; la base siempre es la cifra real.",
              en: "Dividing by the requested figure. In the example it would give $50,000 ÷ $300,000 ≈ 16.7%, which understates the deception; the base is always the real figure.",
            },
          },
          {
            name: { es: "Utilidad real cuando alguien quiere esconder un gasto", en: "Real profit when someone wants to hide an expense" },
            expression: "Utilidad real = Ingresos − Gastos registrados − Gasto omitido",
            variables: [
              { symbol: "Utilidad real", meaning: { es: "Lo que de verdad ganó el negocio en el periodo, en pesos.", en: "What the business really earned in the period, in pesos." } },
              { symbol: "Ingresos", meaning: { es: "Lo que vendió o cobró por su actividad en el periodo, en pesos.", en: "What it sold or earned from its activity in the period, in pesos." } },
              { symbol: "Gastos registrados", meaning: { es: "Los gastos del periodo que ya están anotados, en pesos.", en: "The period's expenses that are already recorded, in pesos." } },
              { symbol: "Gasto omitido", meaning: { es: "El gasto que ya ocurrió en el periodo pero que te piden no anotar, en pesos.", en: "The expense that already happened in the period but that you are asked not to record, in pesos." } },
            ],
            steps: [
              { es: "Calcula la utilidad que se vería sin el gasto: Ingresos − Gastos registrados.", en: "Compute the profit that would show without the expense: Revenue − Recorded expenses." },
              { es: "Réstale el gasto omitido: eso es la utilidad real.", en: "Subtract the omitted expense: that is the real profit." },
              { es: "La utilidad se inflaría exactamente en el monto del gasto omitido.", en: "Profit would be inflated by exactly the amount of the omitted expense." },
            ],
            example: {
              es: "Un taller tiene ingresos de $200,000 y gastos registrados de $150,000; falta una compra de refacciones de $12,000 ya usada. Sin el gasto: $200,000 − $150,000 = $50,000. Utilidad real: $50,000 − $12,000 = **$38,000**. Esconderlo la inflaría $12,000.",
              en: "A repair shop has $200,000 in revenue and $150,000 in recorded expenses; a $12,000 purchase of spare parts already used is missing. Without the expense: $200,000 − $150,000 = $50,000. Real profit: $50,000 − $12,000 = **$38,000**. Hiding it would inflate profit by $12,000.",
            },
            mistake: {
              es: "Pensar que el gasto \"se compensa\" si se registra el mes siguiente. El gasto pertenece al mes en que ocurrió, no al mes en que se paga.",
              en: "Thinking the expense \"evens out\" if recorded next month. The expense belongs to the month it happened, not the month it is paid.",
            },
          },
        ],
        bullets: [
          { es: "1. Identificar los hechos.", en: "1. Identify the facts." },
          { es: "2. Ubicar principios y amenazas en juego.", en: "2. Locate the principles and threats at stake." },
          { es: "3. Enumerar opciones y consecuencias.", en: "3. List options and consequences." },
          { es: "4. Consultar a quien corresponda.", en: "4. Consult the appropriate people." },
          { es: "5. Decidir y documentar.", en: "5. Decide and document." },
        ],
      },
    ],
    examples: [
      {
        title: { es: "El cliente que quiere \"maquillar\" ventas", en: "The client who wants to \"dress up\" sales" },
        problem: {
          es: "La dueña de una estética vendió $480,000 en el año. Te pide reportar $600,000 al banco para conseguir un préstamo más grande. ¿Cuánto se inflarían las ventas y cómo resuelves el dilema?",
          en: "The owner of a beauty salon sold $480,000 this year. She asks you to report $600,000 to the bank to get a bigger loan. How much would sales be inflated and how do you resolve the dilemma?",
        },
        steps: [
          { es: "Hechos: ventas reales $480,000; cifra pedida $600,000; diferencia $600,000 − $480,000 = $120,000.", en: "Facts: actual sales $480,000; requested figure $600,000; difference $600,000 − $480,000 = $120,000." },
          { es: "En porcentaje: $120,000 ÷ $480,000 = 0.25, es decir, 25% más de lo real.", en: "As a percentage: $120,000 ÷ $480,000 = 0.25, that is, 25% more than reality." },
          { es: "Principios en juego: integridad (información falsa) y comportamiento profesional (engañar a un banco puede ser ilegal). Amenaza: interés propio e intimidación (miedo a perder la clienta).", en: "Principles at stake: integrity (false information) and professional behavior (deceiving a bank can be illegal). Threat: self-interest and intimidation (fear of losing the client)." },
          { es: "Opciones: aceptar (no es aceptable), negarse sin más, o negarse y ofrecer alternativas legítimas (pedir un monto menor, mostrar un plan de negocio).", en: "Options: accept (not acceptable), simply refuse, or refuse and offer legitimate alternatives (ask for a smaller amount, show a business plan)." },
          { es: "Decidir y documentar: se reportan $480,000 y se guarda por escrito la solicitud y la respuesta.", en: "Decide and document: report $480,000 and keep the request and the answer in writing." },
        ],
        result: {
          es: "Se reportan las ventas reales de $480,000. Inflarlas $120,000 (25%) engañaría al banco y violaría la integridad.",
          en: "Actual sales of $480,000 are reported. Inflating them by $120,000 (25%) would deceive the bank and breach integrity.",
        },
      },
      {
        title: { es: "El gasto que el jefe no quiere registrar", en: "The expense the boss does not want recorded" },
        problem: {
          es: "Una distribuidora tiene ingresos de $350,000 y gastos registrados de $290,000 en el mes. Falta registrar una reparación de $25,000 ya realizada, y el gerente pide dejarla \"para el mes que entra\" porque su bono depende de la utilidad. ¿Cuál es la utilidad real y qué amenaza existe?",
          en: "A distributor has $350,000 in revenue and $290,000 in recorded expenses for the month. A $25,000 repair already done is still unrecorded, and the manager asks to leave it \"for next month\" because his bonus depends on profit. What is the real profit and what threat exists?",
        },
        steps: [
          { es: "Utilidad sin la reparación: $350,000 − $290,000 = $60,000.", en: "Profit without the repair: $350,000 − $290,000 = $60,000." },
          { es: "Utilidad real: $60,000 − $25,000 = $35,000.", en: "Real profit: $60,000 − $25,000 = $35,000." },
          { es: "Amenaza: interés propio (el bono del gerente) e intimidación si presiona al contador.", en: "Threat: self-interest (the manager's bonus) and intimidation if he pressures the accountant." },
          { es: "Salvaguarda: registrar el gasto en el mes correcto, explicar la razón y, si insiste, escalar a la dirección y documentarlo.", en: "Safeguard: record the expense in the correct month, explain why and, if he insists, escalate to senior management and document it." },
        ],
        result: {
          es: "La utilidad real es $35,000, no $60,000. Ocultar el gasto la inflaría $25,000 y beneficiaría indebidamente al gerente.",
          en: "Real profit is $35,000, not $60,000. Hiding the expense would inflate it by $25,000 and improperly benefit the manager.",
        },
      },
    ],
    keyPoints: [
      { es: "La contabilidad vale por la confianza pública; información falsa daña a muchas personas.", en: "Accounting is valuable because of public trust; false information harms many people." },
      { es: "Cinco principios: integridad, objetividad, competencia y diligencia, confidencialidad y comportamiento profesional.", en: "Five principles: integrity, objectivity, competence and due care, confidentiality and professional behavior." },
      { es: "El Código de Ética del IMCP se alinea en lo general con el código internacional del IESBA.", en: "The IMCP Code of Ethics is broadly aligned with the IESBA international code." },
      { es: "Amenazas: interés propio, autorrevisión, abogacía, familiaridad e intimidación; las salvaguardas las reducen.", en: "Threats: self-interest, self-review, advocacy, familiarity and intimidation; safeguards reduce them." },
      { es: "Ante un dilema: hechos, principios, opciones, consulta, decisión documentada.", en: "Facing a dilemma: facts, principles, options, consultation, documented decision." },
    ],
    normativeNote: NOTE_ETHICS,
    exerciseIds: ['ET-001', 'ET-002', 'ET-003', 'ET-004', 'ET-005', 'ET-006', 'ET-007', 'ET-008'],
  },
]

export const exercises: Exercise[] = [
  {
    id: 'ET-001',
    level: 2,
    module: 'L2-07',
    kind: 'mcq',
    flavor: 'concept',
    prompt: {
      es: "¿Por qué la ética es especialmente importante en la profesión contable?",
      en: "Why is ethics especially important in the accounting profession?",
    },
    options: [
      { id: 'ET-001-a', text: { es: "Porque muchas personas toman decisiones confiando en los estados financieros", en: "Because many people make decisions relying on financial statements" } },
      { id: 'ET-001-b', text: { es: "Porque así el contador puede cobrar honorarios más altos", en: "Because that way the accountant can charge higher fees" } },
      { id: 'ET-001-c', text: { es: "Porque la ética sustituye la necesidad de conocer las normas contables", en: "Because ethics replaces the need to know accounting standards" } },
      { id: 'ET-001-d', text: { es: "Porque solo importa en empresas que cotizan en bolsa", en: "Because it only matters in publicly listed companies" } },
    ],
    correctOptionId: 'ET-001-a',
    explanation: {
      es: "Bancos, proveedores, inversionistas, trabajadores y el gobierno deciden con la información contable: si no es confiable, todos pueden salir dañados. La ética no reemplaza el conocimiento técnico (también hay que ser competente) y aplica en cualquier negocio, no solo en los que cotizan en bolsa.",
      en: "Banks, suppliers, investors, workers and the government decide with accounting information: if it is not reliable, everyone can be harmed. Ethics does not replace technical knowledge (you must also be competent) and it applies to any business, not only listed companies.",
    },
    difficulty: 1,
    points: 10,
    competency: 'professional-ethics',
  },
  {
    id: 'ET-002',
    level: 2,
    module: 'L2-07',
    kind: 'classify',
    flavor: 'case',
    prompt: {
      es: "Clasifica cada situación según el principio fundamental que está en riesgo o que se está aplicando.",
      en: "Classify each situation by the fundamental principle that is at risk or being applied.",
    },
    categories: [
      { id: 'ET-002-c1', label: { es: "Integridad", en: "Integrity" } },
      { id: 'ET-002-c2', label: { es: "Objetividad", en: "Objectivity" } },
      { id: 'ET-002-c3', label: { es: "Competencia y diligencia profesional", en: "Professional competence and due care" } },
      { id: 'ET-002-c4', label: { es: "Confidencialidad", en: "Confidentiality" } },
      { id: 'ET-002-c5', label: { es: "Comportamiento profesional", en: "Professional behavior" } },
    ],
    items: [
      { id: 'ET-002-i1', label: { es: "Firmar un reporte con ventas que sabes que están infladas", en: "Signing a report with sales you know are inflated" }, correctCategoryId: 'ET-002-c1' },
      { id: 'ET-002-i2', label: { es: "Comentar en una fiesta cuánto gana la empresa de tu cliente", en: "Mentioning at a party how much your client's company earns" }, correctCategoryId: 'ET-002-c4' },
      { id: 'ET-002-i3', label: { es: "Aceptar llevar la contabilidad de una constructora sin conocer las reglas del sector y sin capacitarte", en: "Agreeing to keep a construction company's books without knowing the sector's rules and without training" }, correctCategoryId: 'ET-002-c3' },
      { id: 'ET-002-i4', label: { es: "Aceptar un viaje pagado por un cliente justo antes de revisar sus cuentas", en: "Accepting a paid trip from a client right before reviewing their accounts" }, correctCategoryId: 'ET-002-c2' },
      { id: 'ET-002-i5', label: { es: "Anunciarte en redes como \"el contador que hace que no pagues impuestos\"", en: "Advertising yourself online as \"the accountant who makes you pay no taxes\"" }, correctCategoryId: 'ET-002-c5' },
    ],
    explanation: {
      es: "Firmar cifras falsas rompe la integridad (honestidad). Contar datos del cliente rompe la confidencialidad. Aceptar trabajo sin saber hacerlo afecta la competencia y diligencia. Un regalo del cliente puede torcer tu juicio: objetividad. Un anuncio que promete evadir impuestos desprestigia a la profesión: comportamiento profesional. Error común: confundir integridad con objetividad; la primera es no mentir, la segunda es no dejarse influir.",
      en: "Signing false figures breaks integrity (honesty). Revealing client data breaks confidentiality. Taking on work you do not know how to do affects competence and due care. A gift from the client can bend your judgment: objectivity. An ad promising tax evasion discredits the profession: professional behavior. Common mistake: confusing integrity with objectivity; the first is not lying, the second is not being influenced.",
    },
    difficulty: 2,
    points: 15,
    competency: 'professional-ethics',
  },
  {
    id: 'ET-003',
    level: 2,
    module: 'L2-07',
    kind: 'classify',
    flavor: 'case',
    prompt: {
      es: "Clasifica cada situación según el tipo de amenaza a los principios éticos.",
      en: "Classify each situation by the type of threat to ethical principles.",
    },
    categories: [
      { id: 'ET-003-c1', label: { es: "Interés propio", en: "Self-interest" } },
      { id: 'ET-003-c2', label: { es: "Autorrevisión", en: "Self-review" } },
      { id: 'ET-003-c3', label: { es: "Abogacía", en: "Advocacy" } },
      { id: 'ET-003-c4', label: { es: "Familiaridad", en: "Familiarity" } },
      { id: 'ET-003-c5', label: { es: "Intimidación", en: "Intimidation" } },
    ],
    items: [
      { id: 'ET-003-i1', label: { es: "Tu bono anual depende de la utilidad que tú mismo calculas", en: "Your annual bonus depends on the profit you calculate yourself" }, correctCategoryId: 'ET-003-c1' },
      { id: 'ET-003-i2', label: { es: "Te piden auditar el sistema de inventarios que tú diseñaste el año pasado", en: "You are asked to audit the inventory system you designed last year" }, correctCategoryId: 'ET-003-c2' },
      { id: 'ET-003-i3', label: { es: "Representas a tu cliente ante el banco promoviendo que le presten", en: "You represent your client before the bank, promoting that they get the loan" }, correctCategoryId: 'ET-003-c3' },
      { id: 'ET-003-i4', label: { es: "El dueño de la empresa que revisas es tu cuñado", en: "The owner of the company you review is your brother-in-law" }, correctCategoryId: 'ET-003-c4' },
      { id: 'ET-003-i5', label: { es: "El director te dice que si no aceptas su cifra, contratará a otro despacho", en: "The director tells you that if you do not accept his figure, he will hire another firm" }, correctCategoryId: 'ET-003-c5' },
      { id: 'ET-003-i6', label: { es: "Tienes acciones de la empresa cuyas cuentas revisas", en: "You own shares in the company whose accounts you review" }, correctCategoryId: 'ET-003-c1' },
    ],
    explanation: {
      es: "Interés propio: ganas algo según el resultado (bono, acciones). Autorrevisión: evalúas tu propio trabajo. Abogacía: defiendes la postura del cliente frente a terceros. Familiaridad: lazo cercano con el cliente. Intimidación: presión o amenaza. Error común: confundir intimidación con interés propio; en la intimidación alguien te presiona, en el interés propio el beneficio es tuyo.",
      en: "Self-interest: you gain something depending on the result (bonus, shares). Self-review: you evaluate your own work. Advocacy: you defend the client's position before third parties. Familiarity: close tie with the client. Intimidation: pressure or threat. Common mistake: confusing intimidation with self-interest; in intimidation someone pressures you, in self-interest the benefit is yours.",
    },
    difficulty: 2,
    points: 15,
    competency: 'professional-ethics',
  },
  {
    id: 'ET-004',
    level: 2,
    module: 'L2-07',
    kind: 'mcq',
    flavor: 'case',
    context: {
      es: "Eres contador de una mueblería. Tu jefe te pide no registrar en diciembre una factura de fletes de $15,000 que ya se usaron, \"para que el año cierre con mejor utilidad\".",
      en: "You are the accountant at a furniture store. Your boss asks you not to record in December a $15,000 freight invoice for services already used, \"so the year closes with better profit\".",
    },
    prompt: {
      es: "¿Cuál es la mejor respuesta?",
      en: "What is the best response?",
    },
    options: [
      { id: 'ET-004-a', text: { es: "Hacerle caso, porque el jefe es responsable de la decisión", en: "Do as told, because the boss is responsible for the decision" } },
      { id: 'ET-004-b', text: { es: "Registrar el gasto en diciembre, explicarle por qué y, si insiste, escalarlo y documentarlo", en: "Record the expense in December, explain why and, if he insists, escalate and document it" } },
      { id: 'ET-004-c', text: { es: "Registrar solo la mitad del gasto como punto medio", en: "Record only half the expense as a compromise" } },
      { id: 'ET-004-d', text: { es: "Registrarlo en enero, ya que de todos modos se paga en enero", en: "Record it in January, since it is paid in January anyway" } },
    ],
    correctOptionId: 'ET-004-b',
    explanation: {
      es: "El gasto ocurrió en diciembre y debe registrarse ahí; no hacerlo inflaría la utilidad $15,000 y rompería la integridad. Obedecer no te libera de responsabilidad, registrar la mitad sigue siendo falso, y la fecha de pago no cambia cuándo ocurrió el gasto. Error común: pensar que la culpa es solo de quien da la orden.",
      en: "The expense occurred in December and must be recorded there; not doing so would inflate profit by $15,000 and break integrity. Obeying does not free you from responsibility, recording half is still false, and the payment date does not change when the expense occurred. Common mistake: thinking only the person giving the order is to blame.",
    },
    difficulty: 1,
    points: 10,
    competency: 'professional-ethics',
  },
  {
    id: 'ET-005',
    level: 2,
    module: 'L2-07',
    kind: 'truefalse',
    flavor: 'concept',
    prompt: {
      es: "El principio de confidencialidad significa que el contador nunca, bajo ninguna circunstancia, puede revelar información de su cliente.",
      en: "The confidentiality principle means the accountant can never, under any circumstances, disclose client information.",
    },
    answer: false,
    explanation: {
      es: "Falso. La confidencialidad prohíbe revelar o usar la información del cliente sin permiso, pero tiene excepciones: cuando el cliente lo autoriza o cuando la ley obliga a entregarla (por ejemplo, a una autoridad). Error común: pensar que la confidencialidad está por encima de la ley.",
      en: "False. Confidentiality prohibits disclosing or using client information without permission, but it has exceptions: when the client authorizes it or when the law requires it to be provided (for example, to an authority). Common mistake: thinking confidentiality is above the law.",
    },
    difficulty: 1,
    points: 10,
    competency: 'professional-ethics',
  },
  {
    id: 'ET-006',
    level: 2,
    module: 'L2-07',
    kind: 'multi',
    flavor: 'case',
    context: {
      es: "Llevas 12 años revisando las cuentas de la ferretería de tu mejor amigo y ya casi no revisas los documentos porque \"él nunca se equivoca\".",
      en: "You have reviewed your best friend's hardware store accounts for 12 years and you barely check the documents anymore because \"he never makes mistakes\".",
    },
    prompt: {
      es: "¿Qué salvaguardas reducen esta amenaza de familiaridad? Selecciona todas las que apliquen.",
      en: "Which safeguards reduce this familiarity threat? Select all that apply.",
    },
    options: [
      { id: 'ET-006-a', text: { es: "Pedir que otro contador revise tu trabajo", en: "Ask another accountant to review your work" } },
      { id: 'ET-006-b', text: { es: "Rotar la cuenta a otra persona del despacho", en: "Rotate the account to someone else at the firm" } },
      { id: 'ET-006-c', text: { es: "Seguir igual, porque la confianza ahorra tiempo", en: "Carry on the same, because trust saves time" } },
      { id: 'ET-006-d', text: { es: "Volver a revisar los documentos de soporte como con cualquier cliente", en: "Go back to checking supporting documents as with any client" } },
      { id: 'ET-006-e', text: { es: "Aceptar un regalo de agradecimiento para mantener la relación", en: "Accept a thank-you gift to keep the relationship" } },
    ],
    correctOptionIds: ['ET-006-a', 'ET-006-b', 'ET-006-d'],
    explanation: {
      es: "Una segunda revisión, la rotación del responsable y volver a revisar con el mismo cuidado que a cualquier cliente reducen la amenaza. Seguir igual la mantiene, y aceptar regalos la empeora (agrega interés propio). Error común: creer que la amistad garantiza que no habrá errores.",
      en: "A second review, rotating the person in charge and going back to checking with the same care as any client reduce the threat. Carrying on keeps it, and accepting gifts makes it worse (it adds self-interest). Common mistake: believing friendship guarantees there will be no mistakes.",
    },
    difficulty: 2,
    points: 15,
    competency: 'professional-ethics',
  },
  {
    id: 'ET-007',
    level: 2,
    module: 'L2-07',
    kind: 'mcq',
    flavor: 'concept',
    prompt: {
      es: "Al enfrentar un dilema ético, ¿cuál es el primer paso del método que estudiaste?",
      en: "When facing an ethical dilemma, what is the first step of the method you studied?",
    },
    options: [
      { id: 'ET-007-a', text: { es: "Renunciar de inmediato", en: "Resign immediately" } },
      { id: 'ET-007-b', text: { es: "Hacer lo que pida quien tenga más autoridad", en: "Do what the person with most authority asks" } },
      { id: 'ET-007-c', text: { es: "Identificar los hechos: qué te piden y con qué cifras", en: "Identify the facts: what you are being asked and with what figures" } },
      { id: 'ET-007-d', text: { es: "Publicar el caso en redes sociales", en: "Post the case on social media" } },
    ],
    correctOptionId: 'ET-007-c',
    explanation: {
      es: "Primero se identifican los hechos; después los principios y amenazas, las opciones, la consulta y, al final, decidir y documentar. Renunciar puede ser la última opción, no la primera; obedecer sin pensar ignora los principios, y publicar el caso rompería la confidencialidad.",
      en: "First you identify the facts; then the principles and threats, the options, consultation and, finally, decide and document. Resigning may be the last option, not the first; obeying without thinking ignores the principles, and posting the case would break confidentiality.",
    },
    difficulty: 1,
    points: 10,
    competency: 'professional-ethics',
  },
  {
    id: 'ET-008',
    level: 2,
    module: 'L2-07',
    kind: 'mcq',
    flavor: 'case',
    context: {
      es: "Un cliente con una cafetería vendió $300,000 en el año y te pide reportar $390,000 para que el banco le apruebe un crédito. Te dice: \"Si no lo haces, me voy con otro contador\".",
      en: "A client with a coffee shop sold $300,000 this year and asks you to report $390,000 so the bank will approve a loan. He tells you: \"If you don't do it, I'll go to another accountant\".",
    },
    prompt: {
      es: "¿Qué describe mejor la situación y la respuesta adecuada?",
      en: "What best describes the situation and the right response?",
    },
    options: [
      { id: 'ET-008-a', text: { es: "Es una amenaza de autorrevisión; basta con que otro contador revise la cifra de $390,000", en: "It is a self-review threat; it is enough for another accountant to review the $390,000 figure" } },
      { id: 'ET-008-b', text: { es: "No hay problema ético porque el cliente es el responsable de lo que pida al banco", en: "There is no ethical problem because the client is responsible for what he asks the bank" } },
      { id: 'ET-008-c', text: { es: "Es aceptable si se infla menos, por ejemplo a $330,000", en: "It is acceptable if the inflation is smaller, for example to $330,000" } },
      { id: 'ET-008-d', text: { es: "Hay intimidación y se pide inflar las ventas un 30%: se reportan $300,000 aunque se pierda el cliente", en: "There is intimidation and a request to inflate sales by 30%: report $300,000 even if the client is lost" } },
    ],
    correctOptionId: 'ET-008-d',
    explanation: {
      es: "La amenaza de irse con otro contador es intimidación. La diferencia es $390,000 − $300,000 = $90,000, y $90,000 ÷ $300,000 = 30%. Reportar una cifra falsa rompe la integridad sin importar si se infla mucho o poco, y el contador que la firma también es responsable. Ninguna salvaguarda hace aceptable una cifra falsa.",
      en: "The threat to go to another accountant is intimidation. The difference is $390,000 − $300,000 = $90,000, and $90,000 ÷ $300,000 = 30%. Reporting a false figure breaks integrity whether the inflation is large or small, and the accountant who signs it is also responsible. No safeguard makes a false figure acceptable.",
    },
    difficulty: 2,
    points: 15,
    competency: 'professional-ethics',
  },
]
