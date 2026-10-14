import type { Exercise, Lesson } from '../../../types'

/**
 * FINCORE — Temario v2.0, área Análisis de Datos, Tecnología e Inteligencia Artificial (TEC.13 a TEC.18),
 * etapa Intermedio.
 */

const NOTE_AI = {
  es: "Contenido educativo. Las reglas sobre inteligencia artificial y protección de datos personales cambian rápido en México y en el mundo (por ejemplo, la Ley de IA de la Unión Europea o la legislación mexicana de datos personales). Las cifras de los ejemplos son hipotéticas: verifica la normativa vigente (2026) antes de aplicar una solución real.",
  en: "Educational content. Rules on artificial intelligence and personal data protection change quickly in Mexico and worldwide (for example, the European Union's AI Act or Mexican personal data legislation). Figures in the examples are hypothetical: verify the current (2026) regulations before applying a real solution.",
}

const NOTE_FINTECH = {
  es: "Contenido educativo con información general sobre la Ley para Regular las Instituciones de Tecnología Financiera (Ley Fintech, 2018), la CNBV, el Banco de México y sistemas como SPEI y CoDi. Las autorizaciones, reglas, comisiones y listas de entidades autorizadas cambian: verifica la información vigente (2026) con la autoridad correspondiente. Las cifras de los ejemplos son hipotéticas.",
  en: "Educational content with general information about the Law to Regulate Financial Technology Institutions (Fintech Law, 2018), CNBV, Banco de México and systems such as SPEI and CoDi. Authorizations, rules, fees and lists of authorized entities change: verify current (2026) information with the relevant authority. Figures in the examples are hypothetical.",
}

const NOTE_CRYPTO = {
  es: "Contenido educativo, no es una recomendación de inversión. En México los activos virtuales no son moneda de curso legal y su uso por instituciones financieras está restringido por el Banco de México; la Ley Fintech y las reglas de prevención de lavado de dinero también aplican. Estas reglas cambian: verifica la versión vigente (2026). Los precios de los ejemplos son hipotéticos.",
  en: "Educational content, not investment advice. In Mexico virtual assets are not legal tender and their use by financial institutions is restricted by Banco de México; the Fintech Law and anti-money-laundering rules also apply. These rules change: verify the current version (2026). Prices in the examples are hypothetical.",
}

const NOTE_DATA = {
  es: "Contenido educativo. En México la protección de datos personales en manos de particulares la regula una ley federal específica; en 2025 se publicó una nueva versión y cambió la autoridad encargada de vigilarla. En Europa aplica el Reglamento General de Protección de Datos (RGPD/GDPR). Plazos, sanciones y autoridades cambian: verifica la versión vigente (2026) antes de aplicarla a un caso real.",
  en: "Educational content. In Mexico, protection of personal data held by private parties is governed by a specific federal law; a new version was published in 2025 and the supervising authority changed. In Europe the General Data Protection Regulation (GDPR) applies. Deadlines, penalties and authorities change: verify the current version (2026) before applying it to a real case.",
}

export const lessons: Lesson[] = [
  // ───────────────────────────── TEC-13 ─────────────────────────────
  {
    id: 'TEC-13',
    level: 2,
    topicIds: ['TEC.13'],
    title: { es: "Inteligencia artificial aplicada a negocios", en: "Artificial intelligence applied to business" },
    summary: {
      es: "La IA ayuda a un negocio a predecir, clasificar, generar y automatizar tareas, pero solo crea valor cuando resuelve un problema concreto, con buenos datos, supervisión humana y un beneficio medible.",
      en: "AI helps a business predict, classify, generate and automate tasks, but it only creates value when it solves a concrete problem, with good data, human oversight and a measurable benefit.",
    },
    minutes: 16,
    objectives: [
      { es: "Explicar qué es la inteligencia artificial y distinguir la IA predictiva de la IA generativa.", en: "Explain what artificial intelligence is and distinguish predictive AI from generative AI." },
      { es: "Identificar casos de uso de IA en finanzas, contabilidad, ventas y atención a clientes.", en: "Identify AI use cases in finance, accounting, sales and customer service." },
      { es: "Evaluar un proyecto de IA con su beneficio, su costo y sus riesgos antes de implementarlo.", en: "Evaluate an AI project by its benefit, its cost and its risks before implementing it." },
    ],
    theory: [
      {
        heading: { es: "¿Qué es la IA y qué tipos hay?", en: "What is AI and what types are there?" },
        body: [
          {
            es: "La **inteligencia artificial (IA)** es un conjunto de técnicas para que una computadora haga tareas que normalmente requieren criterio humano: reconocer una factura escaneada, entender una pregunta o estimar si un cliente pagará. No \"piensa\" como una persona: **aprende patrones de datos** y los aplica a casos nuevos.",
            en: "**Artificial intelligence (AI)** is a set of techniques that let a computer do tasks that normally require human judgment: recognizing a scanned invoice, understanding a question or estimating whether a customer will pay. It does not \"think\" like a person: it **learns patterns from data** and applies them to new cases.",
          },
          {
            es: "En negocios conviene distinguir dos grandes familias. La **IA predictiva** usa datos históricos para estimar algo: cuánto venderás en diciembre o qué cliente puede dejar de comprar. La **IA generativa** crea contenido nuevo (texto, imágenes, código) a partir de instrucciones, como un asistente que redacta un correo de cobranza.",
            en: "In business it helps to distinguish two large families. **Predictive AI** uses historical data to estimate something: how much you will sell in December or which customer may stop buying. **Generative AI** creates new content (text, images, code) from instructions, like an assistant that drafts a collection email.",
          },
          {
            es: "Mini ejemplo: una cadena de farmacias usa IA predictiva para calcular cuántas cajas de antigripal pedir en invierno, y IA generativa para responder dudas frecuentes en su chat de WhatsApp.",
            en: "Mini example: a pharmacy chain uses predictive AI to estimate how many boxes of cold medicine to order in winter, and generative AI to answer frequent questions in its WhatsApp chat.",
          },
        ],
        bullets: [
          { es: "Predecir: estimar un número futuro (ventas, demanda, flujo de efectivo).", en: "Predict: estimate a future number (sales, demand, cash flow)." },
          { es: "Clasificar: poner una etiqueta (gasto deducible o no, transacción normal o sospechosa).", en: "Classify: assign a label (deductible expense or not, normal or suspicious transaction)." },
          { es: "Generar: crear texto, resúmenes o imágenes.", en: "Generate: create text, summaries or images." },
          { es: "Extraer: leer datos de documentos, como el RFC y el total de una factura.", en: "Extract: read data from documents, such as the RFC and total of an invoice." },
        ],
      },
      {
        heading: { es: "Casos de uso en finanzas y operación", en: "Use cases in finance and operations" },
        body: [
          {
            es: "Un **caso de uso** es un problema concreto del negocio que la IA puede resolver. En **finanzas** destacan: pronóstico de flujo de efectivo, evaluación de riesgo de crédito y detección de **fraude** (operaciones raras, como una tarjeta usada en dos ciudades en minutos).",
            en: "A **use case** is a concrete business problem AI can solve. In **finance** the standouts are: cash-flow forecasting, credit-risk assessment and **fraud** detection (unusual transactions, like a card used in two cities within minutes).",
          },
          {
            es: "En **contabilidad**, la IA puede leer facturas y estados de cuenta, sugerir la cuenta contable de cada gasto y marcar diferencias en conciliaciones. En **ventas y atención**, recomienda productos y responde preguntas repetitivas para que el personal atienda los casos difíciles.",
            en: "In **accounting**, AI can read invoices and bank statements, suggest the ledger account for each expense and flag differences in reconciliations. In **sales and service**, it recommends products and answers repetitive questions so staff can handle the difficult cases.",
          },
          {
            es: "Para elegir por dónde empezar, muchas empresas usan una **matriz de valor contra facilidad**: califican cada idea de 1 a 5 en cuánto beneficio da y qué tan fácil es (datos disponibles, costo, tiempo) y empiezan por la de mayor puntaje. Mini ejemplo: leer facturas (valor 4, facilidad 5 = 20) gana a un robot de inversiones (valor 5, facilidad 1 = 5).",
            en: "To choose where to start, many companies use a **value-versus-ease matrix**: they score each idea from 1 to 5 on how much benefit it brings and how easy it is (available data, cost, time) and start with the highest score. Mini example: reading invoices (value 4, ease 5 = 20) beats an investment robot (value 5, ease 1 = 5).",
          },
        ],
        formulas: [
          {
            name: { es: "Prioridad en la matriz de valor contra facilidad", en: "Priority in the value-versus-ease matrix" },
            expression: "Prioridad = Valor (1–5) × Facilidad (1–5)",
            variables: [
              { symbol: "Valor", meaning: { es: "Calificación de 1 a 5 de cuánto beneficio da la idea (1 = poco, 5 = mucho).", en: "Score from 1 to 5 of how much benefit the idea brings (1 = little, 5 = a lot)." } },
              { symbol: "Facilidad", meaning: { es: "Calificación de 1 a 5 de qué tan fácil es hacerla: datos disponibles, costo y tiempo (5 = muy fácil).", en: "Score from 1 to 5 of how easy it is to do: available data, cost and time (5 = very easy)." } },
              { symbol: "Prioridad", meaning: { es: "Puntaje de 1 a 25; el más alto va primero.", en: "Score from 1 to 25; the highest goes first." } },
            ],
            steps: [
              { es: "Califica cada idea en valor y en facilidad.", en: "Score each idea on value and on ease." },
              { es: "Multiplica las dos calificaciones de cada idea.", en: "Multiply the two scores of each idea." },
              { es: "Ordena de mayor a menor y empieza por la de mayor puntaje.", en: "Rank from highest to lowest and start with the top score." },
            ],
            example: {
              es: "Idea 1: conciliar estados de cuenta (valor 3, facilidad 4) → 3 × 4 = 12. Idea 2: modelo de riesgo de crédito (valor 5, facilidad 2) → 5 × 2 = 10. Empieza por la idea 1 (**12 > 10**), aunque la 2 tenga más valor.",
              en: "Idea 1: reconciling bank statements (value 3, ease 4) → 3 × 4 = 12. Idea 2: credit-risk model (value 5, ease 2) → 5 × 2 = 10. Start with idea 1 (**12 > 10**), even though idea 2 has more value.",
            },
            mistake: {
              es: "Mirar solo el valor o solo la facilidad: la matriz combina las dos.",
              en: "Looking only at value or only at ease: the matrix combines both.",
            },
          },
        ],
      },
      {
        heading: { es: "Evaluar un proyecto de IA: beneficio, costo y riesgos", en: "Evaluating an AI project: benefit, cost and risks" },
        body: [
          {
            es: "Un proyecto de IA es una **inversión**: tiene costos (licencias, implementación, capacitación, revisión humana) y beneficios (ahorro de horas, más ventas, menos fraude). El **retorno sobre la inversión (ROI)** compara ambos: cuánto ganas por cada peso invertido.",
            en: "An AI project is an **investment**: it has costs (licenses, implementation, training, human review) and benefits (hours saved, more sales, less fraud). **Return on investment (ROI)** compares both: how much you earn for each peso invested.",
          },
          {
            es: "Los **riesgos** también cuentan. La IA puede equivocarse con seguridad aparente (en IA generativa se le llama **alucinación**: inventar un dato que suena creíble), puede repetir **sesgos** de los datos con los que aprendió y puede exponer información confidencial si se cargan datos de clientes sin cuidado. Por eso se usa el principio de **humano en el circuito**: una persona revisa las decisiones importantes.",
            en: "**Risks** count too. AI can be wrong while sounding confident (in generative AI this is called **hallucination**: inventing a believable-sounding fact), it can repeat **biases** from the data it learned from, and it can expose confidential information if customer data is loaded carelessly. That is why the **human-in-the-loop** principle is used: a person reviews important decisions.",
          },
          {
            es: "Mini ejemplo: un despacho contable gasta $100,000 en un sistema que le ahorra $150,000 al año en horas de captura. ROI = (150,000 − 100,000) ÷ 100,000 = 50%. Aun así, un contador revisa cada póliza sugerida antes de registrarla.",
            en: "Mini example: an accounting firm spends $100,000 on a system that saves it $150,000 a year in data-entry hours. ROI = (150,000 − 100,000) ÷ 100,000 = 50%. Even so, an accountant reviews each suggested entry before recording it.",
          },
        ],
        formulas: [
          {
            name: { es: "Retorno sobre la inversión (ROI)", en: "Return on investment (ROI)" },
            expression: "ROI = (Beneficio − Costo) ÷ Costo × 100",
            variables: [
              { symbol: "Beneficio", meaning: { es: "Ahorro o utilidad adicional que genera el proyecto en el periodo, en pesos.", en: "Savings or extra profit the project generates in the period, in pesos." } },
              { symbol: "Costo", meaning: { es: "Todo lo que cuesta el proyecto en ese periodo (licencias, implementación, capacitación), en pesos.", en: "Everything the project costs in that period (licenses, implementation, training), in pesos." } },
            ],
            steps: [
              { es: "Resta el costo al beneficio: es la ganancia neta.", en: "Subtract the cost from the benefit: that is the net gain." },
              { es: "Divide la ganancia neta entre el costo.", en: "Divide the net gain by the cost." },
              { es: "Multiplica por 100 para expresarlo en %.", en: "Multiply by 100 to express it in %." },
            ],
            example: {
              es: "Un sistema cuesta $80,000 y genera $116,000 de ahorro en el año. Ganancia neta = 116,000 − 80,000 = $36,000. ROI = 36,000 ÷ 80,000 = 0.45 → **45 %**.",
              en: "A system costs $80,000 and generates $116,000 in savings over the year. Net gain = 116,000 − 80,000 = $36,000. ROI = 36,000 ÷ 80,000 = 0.45 → **45 %**.",
            },
            interpret: {
              es: "45 % significa que por cada $1 invertido recuperas el peso y ganas 45 centavos extra. Un ROI negativo indica que el proyecto cuesta más de lo que deja.",
              en: "45 % means that for every $1 invested you get the peso back plus 45 extra cents. A negative ROI means the project costs more than it brings.",
            },
            mistake: {
              es: "Dividir el beneficio total entre el costo sin restar primero el costo: eso dice cuánto regresa, no cuánto ganas.",
              en: "Dividing the total benefit by the cost without first subtracting the cost: that tells how much comes back, not how much you gain.",
            },
          },
          {
            name: { es: "Tiempo de recuperación de la inversión", en: "Payback time of the investment" },
            expression: "Ahorro neto mensual = Ahorro bruto mensual − Costo mensual;   Meses de recuperación = Inversión inicial ÷ Ahorro neto mensual",
            variables: [
              { symbol: "Ahorro bruto mensual", meaning: { es: "Lo que dejas de gastar cada mes gracias al sistema, en pesos.", en: "What you stop spending each month thanks to the system, in pesos." } },
              { symbol: "Costo mensual", meaning: { es: "Lo que cuesta operar el sistema cada mes (suscripción, soporte), en pesos.", en: "What it costs to run the system each month (subscription, support), in pesos." } },
              { symbol: "Inversión inicial", meaning: { es: "Pago único para implementarlo, en pesos.", en: "One-off payment to implement it, in pesos." } },
            ],
            steps: [
              { es: "Calcula el ahorro bruto del mes (por ejemplo, casos resueltos × costo por caso).", en: "Compute the month's gross saving (for example, cases resolved × cost per case)." },
              { es: "Réstale el costo mensual del sistema: ahorro neto.", en: "Subtract the system's monthly cost: net saving." },
              { es: "Divide la inversión inicial entre el ahorro neto mensual.", en: "Divide the initial investment by the net monthly saving." },
            ],
            example: {
              es: "Un lector de facturas ahorra $22,000 al mes, su suscripción cuesta $4,000 al mes y la implementación $90,000. Ahorro neto = 22,000 − 4,000 = $18,000. Recuperación = 90,000 ÷ 18,000 = **5 meses**.",
              en: "An invoice reader saves $22,000 a month, its subscription costs $4,000 a month and implementation $90,000. Net saving = 22,000 − 4,000 = $18,000. Payback = 90,000 ÷ 18,000 = **5 months**.",
            },
            mistake: {
              es: "Olvidar restar el costo mensual del sistema: el plazo de recuperación sale más corto de lo real.",
              en: "Forgetting to subtract the system's monthly cost: the payback period comes out shorter than it really is.",
            },
          },
        ],
      },
    ],
    examples: [
      {
        title: { es: "¿Conviene un chatbot de atención?", en: "Is a customer-service chatbot worth it?" },
        problem: {
          es: "Una aseguradora recibe 6,000 consultas al mes; atender cada una con personal cuesta $25. Un chatbot resolvería el 40% de las consultas, cuesta $15,000 al mes y su implementación $180,000. ¿Cuánto ahorra al mes y en cuántos meses recupera la implementación? (Cifras hipotéticas.)",
          en: "An insurer receives 6,000 inquiries a month; handling each with staff costs $25. A chatbot would resolve 40% of inquiries, costs $15,000 a month and its implementation $180,000. How much does it save per month and in how many months does it recover the implementation? (Hypothetical figures.)",
        },
        steps: [
          { es: "Consultas que resuelve el chatbot: 6,000 × 40% = 2,400.", en: "Inquiries the chatbot resolves: 6,000 × 40% = 2,400." },
          { es: "Costo humano evitado: 2,400 × $25 = $60,000 al mes.", en: "Human cost avoided: 2,400 × $25 = $60,000 a month." },
          { es: "Ahorro neto: $60,000 − $15,000 = $45,000 al mes.", en: "Net saving: $60,000 − $15,000 = $45,000 a month." },
          { es: "Recuperación: $180,000 ÷ $45,000 = 4 meses.", en: "Payback: $180,000 ÷ $45,000 = 4 months." },
        ],
        result: {
          es: "Ahorra $45,000 netos al mes y recupera la implementación en 4 meses. Falta revisar riesgos: que el chatbot pase a una persona los casos complejos y no invente coberturas.",
          en: "It saves a net $45,000 a month and recovers the implementation in 4 months. Risks still need review: the chatbot should hand complex cases to a person and must not invent coverage.",
        },
      },
      {
        title: { es: "Priorizar tres ideas de IA", en: "Prioritizing three AI ideas" },
        problem: {
          es: "Una distribuidora evalúa: A) leer facturas de proveedores (valor 5, facilidad 4); B) pronosticar demanda por tienda (valor 4, facilidad 2); C) redactar descripciones de productos (valor 3, facilidad 5). ¿Por cuál empieza?",
          en: "A distributor evaluates: A) reading supplier invoices (value 5, ease 4); B) forecasting demand per store (value 4, ease 2); C) writing product descriptions (value 3, ease 5). Which should it start with?",
        },
        steps: [
          { es: "A: 5 × 4 = 20.", en: "A: 5 × 4 = 20." },
          { es: "B: 4 × 2 = 8.", en: "B: 4 × 2 = 8." },
          { es: "C: 3 × 5 = 15.", en: "C: 3 × 5 = 15." },
          { es: "Ordena de mayor a menor: A (20), C (15), B (8).", en: "Rank from highest to lowest: A (20), C (15), B (8)." },
        ],
        result: {
          es: "Empieza por A (leer facturas). B tiene buen valor, pero primero hay que ordenar los datos de ventas por tienda.",
          en: "Start with A (reading invoices). B has good value, but sales data per store must be organized first.",
        },
      },
    ],
    keyPoints: [
      { es: "La IA aprende patrones de datos; no razona como una persona.", en: "AI learns patterns from data; it does not reason like a person." },
      { es: "IA predictiva estima o clasifica; IA generativa crea contenido nuevo.", en: "Predictive AI estimates or classifies; generative AI creates new content." },
      { es: "Empieza por casos de uso concretos con alto valor y alta facilidad.", en: "Start with concrete use cases with high value and high ease." },
      { es: "Mide el proyecto con ROI y tiempo de recuperación.", en: "Measure the project with ROI and payback time." },
      { es: "Cuida alucinaciones, sesgos y confidencialidad con revisión humana.", en: "Guard against hallucinations, bias and confidentiality issues with human review." },
    ],
    normativeNote: NOTE_AI,
    exerciseIds: ['TEC-13-E1', 'TEC-13-E2', 'TEC-13-E3', 'TEC-13-E4', 'TEC-13-E5', 'TEC-13-E6'],
  },

  // ───────────────────────────── TEC-14 ─────────────────────────────
  {
    id: 'TEC-14',
    level: 2,
    topicIds: ['TEC.14'],
    title: { es: "Fundamentos de machine learning", en: "Machine learning fundamentals" },
    summary: {
      es: "El machine learning entrena modelos con ejemplos para que aprendan reglas por sí solos, y se evalúa con datos que el modelo nunca vio para saber si de verdad funciona.",
      en: "Machine learning trains models with examples so they learn rules on their own, and it is evaluated with data the model has never seen to know whether it really works.",
    },
    minutes: 17,
    objectives: [
      { es: "Explicar qué es un modelo de machine learning y sus partes: variables, etiqueta y entrenamiento.", en: "Explain what a machine learning model is and its parts: features, label and training." },
      { es: "Distinguir aprendizaje supervisado, no supervisado y por refuerzo, y regresión de clasificación.", en: "Distinguish supervised, unsupervised and reinforcement learning, and regression from classification." },
      { es: "Evaluar un clasificador con la matriz de confusión: exactitud, precisión y sensibilidad.", en: "Evaluate a classifier with the confusion matrix: accuracy, precision and recall." },
      { es: "Reconocer el sobreajuste y por qué se separan datos de entrenamiento y de prueba.", en: "Recognize overfitting and why training and test data are separated." },
    ],
    theory: [
      {
        heading: { es: "Aprender de ejemplos: datos, variables y etiqueta", en: "Learning from examples: data, features and label" },
        body: [
          {
            es: "En la programación tradicional, una persona escribe las reglas: \"si el cliente debe más de 90 días, no le prestes\". En **machine learning** (aprendizaje automático) le das a la computadora **muchos ejemplos** con su resultado y ella encuentra las reglas. Lo que aprende se guarda en un **modelo**: una fórmula que recibe datos y devuelve una respuesta.",
            en: "In traditional programming, a person writes the rules: \"if the customer is more than 90 days late, do not lend\". In **machine learning** you give the computer **many examples** with their outcome and it finds the rules. What it learns is stored in a **model**: a formula that takes data and returns an answer.",
          },
          {
            es: "Cada ejemplo tiene **variables** (también llamadas *features*): los datos de entrada, como ingreso, antigüedad laboral o número de atrasos. Y tiene una **etiqueta**: lo que queremos predecir, como \"pagó\" o \"no pagó\". **Entrenar** es el proceso en que el modelo ajusta su fórmula para acertar lo más posible en esos ejemplos.",
            en: "Each example has **features**: the input data, such as income, job tenure or number of late payments. And it has a **label**: what we want to predict, such as \"paid\" or \"did not pay\". **Training** is the process in which the model adjusts its formula to get those examples right as often as possible.",
          },
          {
            es: "Mini ejemplo: una caja popular tiene 5,000 créditos ya terminados. Con el ingreso, la edad y los atrasos de cada socio (variables) y si liquidó o no (etiqueta), entrena un modelo que estima el riesgo de solicitudes nuevas.",
            en: "Mini example: a savings cooperative has 5,000 completed loans. With each member's income, age and late payments (features) and whether they paid off or not (label), it trains a model that estimates the risk of new applications.",
          },
        ],
      },
      {
        heading: { es: "Tipos de aprendizaje y de problema", en: "Types of learning and of problem" },
        body: [
          {
            es: "En el **aprendizaje supervisado** los ejemplos traen etiqueta: el modelo aprende a predecirla. Si la etiqueta es un **número** (ventas, precio de una casa) se llama **regresión**; si es una **categoría** (fraude o no, cliente que se va o se queda) se llama **clasificación**.",
            en: "In **supervised learning** the examples come with a label: the model learns to predict it. If the label is a **number** (sales, a house price) it is called **regression**; if it is a **category** (fraud or not, customer who leaves or stays) it is called **classification**.",
          },
          {
            es: "En el **aprendizaje no supervisado** no hay etiqueta: el modelo busca grupos o patrones por sí solo. El uso más común es la **segmentación** (o *clustering*): agrupar clientes parecidos según cuánto y cada cuánto compran. En el **aprendizaje por refuerzo** un agente prueba acciones y recibe premios o castigos, como un sistema que aprende a fijar precios probando y midiendo ventas.",
            en: "In **unsupervised learning** there is no label: the model looks for groups or patterns on its own. The most common use is **segmentation** (or *clustering*): grouping similar customers by how much and how often they buy. In **reinforcement learning** an agent tries actions and receives rewards or penalties, like a system that learns to set prices by testing and measuring sales.",
          },
          {
            es: "Mini ejemplo: un banco que estima el saldo promedio del próximo mes resuelve una regresión; si decide si un cargo es fraude, una clasificación; si agrupa a sus clientes en perfiles sin etiquetas previas, un problema no supervisado.",
            en: "Mini example: a bank estimating next month's average balance solves a regression; if it decides whether a charge is fraud, a classification; if it groups customers into profiles with no prior labels, an unsupervised problem.",
          },
        ],
        bullets: [
          { es: "Supervisado + número = regresión.", en: "Supervised + number = regression." },
          { es: "Supervisado + categoría = clasificación.", en: "Supervised + category = classification." },
          { es: "No supervisado = segmentación o detección de patrones sin etiqueta.", en: "Unsupervised = segmentation or pattern detection without a label." },
          { es: "Por refuerzo = aprender probando acciones y recibiendo premios.", en: "Reinforcement = learning by trying actions and receiving rewards." },
        ],
      },
      {
        heading: { es: "Evaluar un modelo: matriz de confusión y sobreajuste", en: "Evaluating a model: confusion matrix and overfitting" },
        body: [
          {
            es: "Un modelo se evalúa con datos que **no usó para aprender**. Por eso se separan los datos: por ejemplo, 80% para **entrenamiento** y 20% para **prueba**. Si un modelo acierta 99% en entrenamiento pero solo 70% en prueba, sufre **sobreajuste**: se \"memorizó\" los ejemplos en lugar de aprender reglas generales, como el alumno que memoriza el examen pasado.",
            en: "A model is evaluated with data it **did not use to learn**. That is why data is split: for example, 80% for **training** and 20% for **testing**. If a model gets 99% right in training but only 70% in testing, it suffers from **overfitting**: it \"memorized\" the examples instead of learning general rules, like the student who memorizes last year's exam.",
          },
          {
            es: "En clasificación se usa la **matriz de confusión**, que cuenta cuatro casos: **verdaderos positivos (VP)** (dijo fraude y era fraude), **falsos positivos (FP)** (dijo fraude y no lo era), **falsos negativos (FN)** (dijo normal y era fraude) y **verdaderos negativos (VN)**. De ahí salen tres medidas clave.",
            en: "Classification uses the **confusion matrix**, which counts four cases: **true positives (TP)** (said fraud and it was fraud), **false positives (FP)** (said fraud and it was not), **false negatives (FN)** (said normal and it was fraud) and **true negatives (TN)**. Three key measures come from it.",
          },
          {
            es: "La **exactitud** mide aciertos totales, pero engaña cuando un caso es raro: si solo 1% de las compras es fraude, un modelo que siempre dice \"normal\" tiene 99% de exactitud y no sirve. La **precisión** dice qué tan confiables son sus alertas y la **sensibilidad** (*recall*) cuántos fraudes reales atrapa. Mini ejemplo: VP 30 y FN 10 → sensibilidad = 30 ÷ 40 = 75%.",
            en: "**Accuracy** measures total hits, but it misleads when a case is rare: if only 1% of purchases are fraud, a model that always says \"normal\" has 99% accuracy and is useless. **Precision** tells how reliable its alerts are and **recall** how many real frauds it catches. Mini example: TP 30 and FN 10 → recall = 30 ÷ 40 = 75%.",
          },
        ],
        formulas: [
          {
            name: { es: "División de datos en entrenamiento y prueba", en: "Splitting data into training and testing" },
            expression: "Registros de entrenamiento = Total × % entrenamiento;   Registros de prueba = Total × % prueba",
            variables: [
              { symbol: "Total", meaning: { es: "Número de ejemplos históricos disponibles.", en: "Number of historical examples available." } },
              { symbol: "% entrenamiento, % prueba", meaning: { es: "Proporciones de la división, en decimal (80 % = 0.80); suman 1.", en: "Split proportions, as decimals (80 % = 0.80); they add up to 1." } },
            ],
            steps: [
              { es: "Convierte los porcentajes a decimal.", en: "Convert the percentages to decimals." },
              { es: "Multiplica el total por cada proporción.", en: "Multiply the total by each proportion." },
              { es: "Comprueba que ambos grupos sumen el total.", en: "Check that both groups add up to the total." },
            ],
            example: {
              es: "3,000 registros con división 75/25: entrenamiento = 3,000 × 0.75 = **2,250**; prueba = 3,000 × 0.25 = **750**; 2,250 + 750 = 3,000.",
              en: "3,000 records with a 75/25 split: training = 3,000 × 0.75 = **2,250**; testing = 3,000 × 0.25 = **750**; 2,250 + 750 = 3,000.",
            },
            interpret: {
              es: "Compara el acierto en ambos grupos: una brecha pequeña indica que el modelo generaliza; una grande, sobreajuste.",
              en: "Compare the hit rate in both groups: a small gap shows the model generalizes; a large one, overfitting.",
            },
          },
          {
            name: { es: "Exactitud", en: "Accuracy" },
            expression: "Exactitud = (VP + VN) ÷ Total × 100",
            variables: [
              { symbol: "VP", meaning: { es: "Verdaderos positivos: dijo «sí» (por ejemplo, fraude) y era cierto.", en: "True positives: it said «yes» (for example, fraud) and it was true." } },
              { symbol: "VN", meaning: { es: "Verdaderos negativos: dijo «no» y era cierto.", en: "True negatives: it said «no» and it was true." } },
              { symbol: "Total", meaning: { es: "Todos los casos revisados: VP + FP + FN + VN.", en: "All cases reviewed: TP + FP + FN + TN." } },
            ],
            steps: [
              { es: "Suma los aciertos: VP + VN.", en: "Add the hits: TP + TN." },
              { es: "Divide entre el total de casos y multiplica por 100.", en: "Divide by the total cases and multiply by 100." },
            ],
            example: {
              es: "Un modelo revisó 500 casos: VP 45, FP 15, FN 5, VN 435. Exactitud = (45 + 435) ÷ 500 = 480 ÷ 500 = **96 %**.",
              en: "A model reviewed 500 cases: TP 45, FP 15, FN 5, TN 435. Accuracy = (45 + 435) ÷ 500 = 480 ÷ 500 = **96 %**.",
            },
            mistake: {
              es: "Confiar solo en la exactitud cuando el caso es raro: puede ser alta aunque el modelo no detecte casi nada.",
              en: "Relying only on accuracy when the case is rare: it can be high even if the model detects almost nothing.",
            },
          },
          {
            name: { es: "Precisión", en: "Precision" },
            expression: "Precisión = VP ÷ (VP + FP) × 100",
            variables: [
              { symbol: "VP", meaning: { es: "Alertas correctas: dijo «sí» y era cierto.", en: "Correct alerts: it said «yes» and it was true." } },
              { symbol: "FP", meaning: { es: "Falsos positivos: falsas alarmas (dijo «sí» y no lo era).", en: "False positives: false alarms (it said «yes» and it was not)." } },
            ],
            steps: [
              { es: "Suma todas las alertas que dio el modelo: VP + FP.", en: "Add up all the alerts the model gave: TP + FP." },
              { es: "Divide los VP entre esa suma y multiplica por 100.", en: "Divide TP by that sum and multiply by 100." },
            ],
            example: {
              es: "Con VP 45 y FP 15: 45 ÷ (45 + 15) = 45 ÷ 60 = **75 %**. De cada 4 alertas, 3 son reales.",
              en: "With TP 45 and FP 15: 45 ÷ (45 + 15) = 45 ÷ 60 = **75 %**. Out of every 4 alerts, 3 are real.",
            },
            mistake: {
              es: "Poner FN en el denominador: eso es la sensibilidad.",
              en: "Putting FN in the denominator: that is recall.",
            },
          },
          {
            name: { es: "Sensibilidad (recall)", en: "Recall (sensitivity)" },
            expression: "Sensibilidad = VP ÷ (VP + FN) × 100",
            variables: [
              { symbol: "VP", meaning: { es: "Casos reales que el modelo sí detectó.", en: "Real cases the model did detect." } },
              { symbol: "FN", meaning: { es: "Falsos negativos: casos reales que se le escaparon (dijo «no» y sí lo era).", en: "False negatives: real cases it missed (it said «no» and it was)." } },
            ],
            steps: [
              { es: "Suma todos los casos reales: VP + FN.", en: "Add up all real cases: TP + FN." },
              { es: "Divide los VP entre esa suma y multiplica por 100.", en: "Divide TP by that sum and multiply by 100." },
            ],
            example: {
              es: "Con VP 45 y FN 5: 45 ÷ (45 + 5) = 45 ÷ 50 = **90 %**. Atrapa 9 de cada 10 casos reales.",
              en: "With TP 45 and FN 5: 45 ÷ (45 + 5) = 45 ÷ 50 = **90 %**. It catches 9 out of 10 real cases.",
            },
            mistake: {
              es: "Intercambiar FP y FN: la sensibilidad usa los casos que se escaparon (FN), no las falsas alarmas.",
              en: "Swapping FP and FN: recall uses the cases that slipped through (FN), not the false alarms.",
            },
          },
        ],
      },
    ],
    examples: [
      {
        title: { es: "Separar datos para entrenar y probar", en: "Splitting data to train and test" },
        problem: {
          es: "Una financiera tiene 2,500 créditos históricos y usa una división 80/20. Su modelo acierta 96% en entrenamiento y 94% en prueba. ¿Cuántos registros van a cada grupo y hay sobreajuste?",
          en: "A lender has 2,500 historical loans and uses an 80/20 split. Its model is right 96% of the time in training and 94% in testing. How many records go to each group and is there overfitting?",
        },
        steps: [
          { es: "Entrenamiento: 2,500 × 0.80 = 2,000 registros.", en: "Training: 2,500 × 0.80 = 2,000 records." },
          { es: "Prueba: 2,500 × 0.20 = 500 registros.", en: "Testing: 2,500 × 0.20 = 500 records." },
          { es: "Diferencia de desempeño: 96% − 94% = 2 puntos.", en: "Performance gap: 96% − 94% = 2 points." },
          { es: "Una brecha pequeña indica que el modelo generaliza; una brecha grande (por ejemplo 99% contra 70%) indicaría sobreajuste.", en: "A small gap shows the model generalizes; a large gap (for example 99% vs 70%) would indicate overfitting." },
        ],
        result: {
          es: "2,000 registros para entrenar y 500 para probar; con solo 2 puntos de diferencia no hay señal clara de sobreajuste.",
          en: "2,000 records to train and 500 to test; with only a 2-point gap there is no clear sign of overfitting.",
        },
      },
      {
        title: { es: "Leer una matriz de confusión de fraude", en: "Reading a fraud confusion matrix" },
        problem: {
          es: "Un modelo revisó 1,000 compras con tarjeta: VP = 18, FP = 12, FN = 6 y VN = 964. Calcula exactitud, precisión y sensibilidad.",
          en: "A model reviewed 1,000 card purchases: TP = 18, FP = 12, FN = 6 and TN = 964. Compute accuracy, precision and recall.",
        },
        steps: [
          { es: "Exactitud = (18 + 964) ÷ 1,000 = 982 ÷ 1,000 = 98.2%.", en: "Accuracy = (18 + 964) ÷ 1,000 = 982 ÷ 1,000 = 98.2%." },
          { es: "Precisión = 18 ÷ (18 + 12) = 18 ÷ 30 = 60%.", en: "Precision = 18 ÷ (18 + 12) = 18 ÷ 30 = 60%." },
          { es: "Sensibilidad = 18 ÷ (18 + 6) = 18 ÷ 24 = 75%.", en: "Recall = 18 ÷ (18 + 6) = 18 ÷ 24 = 75%." },
          { es: "Interpreta: atrapa 3 de cada 4 fraudes, pero 4 de cada 10 alertas son falsas alarmas.", en: "Interpret: it catches 3 out of 4 frauds, but 4 out of 10 alerts are false alarms." },
        ],
        result: {
          es: "Exactitud 98.2%, precisión 60% y sensibilidad 75%. La exactitud alta oculta que el modelo todavía deja pasar fraudes y molesta a clientes con falsas alarmas.",
          en: "Accuracy 98.2%, precision 60% and recall 75%. The high accuracy hides that the model still lets frauds through and bothers customers with false alarms.",
        },
      },
    ],
    keyPoints: [
      { es: "Un modelo aprende reglas a partir de ejemplos con variables y, si es supervisado, una etiqueta.", en: "A model learns rules from examples with features and, if supervised, a label." },
      { es: "Regresión predice números; clasificación predice categorías; no supervisado agrupa sin etiqueta.", en: "Regression predicts numbers; classification predicts categories; unsupervised groups without a label." },
      { es: "Siempre evalúa con datos de prueba que el modelo no vio.", en: "Always evaluate with test data the model has not seen." },
      { es: "Gran diferencia entre entrenamiento y prueba = sobreajuste.", en: "Large gap between training and testing = overfitting." },
      { es: "Con casos raros, mira precisión y sensibilidad, no solo exactitud.", en: "With rare cases, look at precision and recall, not just accuracy." },
    ],
    exerciseIds: ['TEC-14-E1', 'TEC-14-E2', 'TEC-14-E3', 'TEC-14-E4', 'TEC-14-E5', 'TEC-14-E6'],
  },

  // ───────────────────────────── TEC-15 ─────────────────────────────
  {
    id: 'TEC-15',
    level: 2,
    topicIds: ['TEC.15'],
    title: { es: "Analítica predictiva", en: "Predictive analytics" },
    summary: {
      es: "La analítica predictiva usa datos históricos para pronosticar qué pasará, mide qué tanto se equivoca el pronóstico y lo convierte en decisiones concretas del negocio.",
      en: "Predictive analytics uses historical data to forecast what will happen, measures how wrong the forecast is and turns it into concrete business decisions.",
    },
    minutes: 16,
    objectives: [
      { es: "Ubicar la analítica predictiva frente a la descriptiva, la diagnóstica y la prescriptiva.", en: "Place predictive analytics alongside descriptive, diagnostic and prescriptive analytics." },
      { es: "Elaborar pronósticos sencillos con promedio móvil y con una recta de regresión.", en: "Build simple forecasts with a moving average and with a regression line." },
      { es: "Medir el error de un pronóstico con MAE y MAPE y usarlo para decidir.", en: "Measure a forecast's error with MAE and MAPE and use it to decide." },
    ],
    theory: [
      {
        heading: { es: "Del qué pasó al qué pasará", en: "From what happened to what will happen" },
        body: [
          {
            es: "La analítica de datos suele explicarse en cuatro escalones. La **descriptiva** responde *¿qué pasó?* (vendimos $2 millones en marzo). La **diagnóstica**, *¿por qué pasó?* (bajaron las ventas porque cerró una sucursal). La **predictiva**, *¿qué pasará?* (en abril venderemos alrededor de $2.1 millones). La **prescriptiva**, *¿qué debemos hacer?* (pedir 10% más inventario).",
            en: "Data analytics is usually explained in four steps. **Descriptive** answers *what happened?* (we sold $2 million in March). **Diagnostic**, *why did it happen?* (sales dropped because a branch closed). **Predictive**, *what will happen?* (in April we will sell around $2.1 million). **Prescriptive**, *what should we do?* (order 10% more inventory).",
          },
          {
            es: "Un **pronóstico** no es una certeza: es la mejor estimación con la información disponible. Por eso siempre va acompañado de una medida de **error** o de un rango. Funciona mejor cuando el futuro se parece al pasado; un evento inesperado, como una pandemia, puede romper cualquier patrón.",
            en: "A **forecast** is not a certainty: it is the best estimate with the available information. That is why it always comes with a measure of **error** or a range. It works best when the future resembles the past; an unexpected event, like a pandemic, can break any pattern.",
          },
          {
            es: "Mini ejemplo: una heladería ve en sus datos que vende más en abril y mayo (**estacionalidad**: un patrón que se repite cada año en las mismas fechas) y planea contratar personal temporal desde marzo.",
            en: "Mini example: an ice cream shop sees in its data that it sells more in April and May (**seasonality**: a pattern that repeats each year on the same dates) and plans to hire temporary staff starting in March.",
          },
        ],
        bullets: [
          { es: "Descriptiva: ¿qué pasó?", en: "Descriptive: what happened?" },
          { es: "Diagnóstica: ¿por qué pasó?", en: "Diagnostic: why did it happen?" },
          { es: "Predictiva: ¿qué pasará?", en: "Predictive: what will happen?" },
          { es: "Prescriptiva: ¿qué conviene hacer?", en: "Prescriptive: what should we do?" },
        ],
      },
      {
        heading: { es: "Técnicas básicas de pronóstico", en: "Basic forecasting techniques" },
        body: [
          {
            es: "El **promedio móvil** pronostica el siguiente periodo con el promedio de los últimos *n* periodos. Es sencillo y suaviza altibajos, pero reacciona tarde a cambios de tendencia. Mini ejemplo: ventas de $120,000, $130,000 y $140,000 en tres meses → pronóstico del cuarto = $130,000.",
            en: "The **moving average** forecasts the next period with the average of the last *n* periods. It is simple and smooths ups and downs, but reacts late to trend changes. Mini example: sales of $120,000, $130,000 and $140,000 over three months → fourth-month forecast = $130,000.",
          },
          {
            es: "La **regresión lineal** busca la recta que mejor relaciona una variable que explica (por ejemplo, gasto en publicidad) con la que quieres predecir (ventas). La recta tiene una **ordenada al origen** (*a*: el valor cuando la variable explicativa es cero) y una **pendiente** (*b*: cuánto cambia el resultado por cada unidad extra).",
            en: "**Linear regression** finds the line that best relates an explanatory variable (for example, advertising spending) to the one you want to predict (sales). The line has an **intercept** (*a*: the value when the explanatory variable is zero) and a **slope** (*b*: how much the result changes for each extra unit).",
          },
          {
            es: "Ojo: que dos cosas se muevan juntas (**correlación**) no prueba que una cause la otra. Las ventas de helado y de bloqueador suben juntas, pero ninguna causa a la otra: ambas dependen del calor.",
            en: "Careful: two things moving together (**correlation**) does not prove that one causes the other. Ice cream and sunscreen sales rise together, but neither causes the other: both depend on the heat.",
          },
        ],
        formulas: [
          {
            name: { es: "Pronóstico con promedio móvil", en: "Moving-average forecast" },
            expression: "Promedio móvil = (V₁ + V₂ + … + Vₙ) ÷ n",
            variables: [
              { symbol: "V₁ … Vₙ", meaning: { es: "Valores reales de los últimos n periodos (por ejemplo, ventas de cada mes en pesos).", en: "Actual values of the last n periods (for example, each month's sales in pesos)." } },
              { symbol: "n", meaning: { es: "Cuántos periodos promedias (por ejemplo, 3 meses).", en: "How many periods you average (for example, 3 months)." } },
            ],
            steps: [
              { es: "Toma los últimos n periodos, los más recientes.", en: "Take the last n periods, the most recent ones." },
              { es: "Súmalos.", en: "Add them up." },
              { es: "Divide la suma entre n: ese es el pronóstico del siguiente periodo.", en: "Divide the sum by n: that is the forecast for the next period." },
            ],
            example: {
              es: "Ventas de $52,000, $55,000 y $61,000 en tres meses. Suma = 168,000. Pronóstico del cuarto mes = 168,000 ÷ 3 = **$56,000**.",
              en: "Sales of $52,000, $55,000 and $61,000 over three months. Sum = 168,000. Fourth-month forecast = 168,000 ÷ 3 = **$56,000**.",
            },
            interpret: {
              es: "Si las ventas vienen subiendo, el promedio queda por debajo del último mes: reacciona tarde a la tendencia.",
              en: "If sales have been rising, the average ends up below the last month: it reacts late to the trend.",
            },
            mistake: {
              es: "Dividir entre un número distinto de los periodos sumados, o usar solo el último mes.",
              en: "Dividing by a number other than the periods added, or using only the last month.",
            },
          },
          {
            name: { es: "Pronóstico con una recta de regresión", en: "Forecast with a regression line" },
            expression: "y = a + b·x",
            variables: [
              { symbol: "y", meaning: { es: "Lo que quieres pronosticar (por ejemplo, ventas en pesos).", en: "What you want to forecast (for example, sales in pesos)." } },
              { symbol: "a", meaning: { es: "Ordenada al origen: el valor de y cuando x es cero.", en: "Intercept: the value of y when x is zero." } },
              { symbol: "b", meaning: { es: "Pendiente: cuánto cambia y por cada unidad extra de x.", en: "Slope: how much y changes for each extra unit of x." } },
              { symbol: "x", meaning: { es: "La variable que explica (por ejemplo, pesos gastados en publicidad).", en: "The explanatory variable (for example, pesos spent on advertising)." } },
            ],
            steps: [
              { es: "Identifica a y b en la recta que te dan.", en: "Identify a and b in the line you are given." },
              { es: "Multiplica la pendiente b por el valor de x.", en: "Multiply the slope b by the value of x." },
              { es: "Súmale la ordenada al origen a.", en: "Add the intercept a." },
            ],
            example: {
              es: "Recta: Ventas = 20,000 + 3 × (gasto en volantes). Con un gasto de $15,000: 3 × 15,000 = 45,000; 20,000 + 45,000 = **$65,000** de ventas pronosticadas.",
              en: "Line: Sales = 20,000 + 3 × (flyer spending). With $15,000 spent: 3 × 15,000 = 45,000; 20,000 + 45,000 = **$65,000** in forecast sales.",
            },
            mistake: {
              es: "Olvidar sumar la ordenada al origen y responder solo b × x.",
              en: "Forgetting to add the intercept and answering only b × x.",
            },
          },
        ],
      },
      {
        heading: { es: "Medir el error y decidir", en: "Measuring error and deciding" },
        body: [
          {
            es: "Para saber si un pronóstico sirve, compáralo con lo que realmente pasó. El **error absoluto medio (MAE)** promedia cuánto te equivocaste en pesos o unidades, sin importar si fue hacia arriba o hacia abajo. El **error porcentual absoluto medio (MAPE)** lo expresa en porcentaje del valor real, lo que permite comparar productos de distinto tamaño.",
            en: "To know whether a forecast is useful, compare it with what actually happened. The **mean absolute error (MAE)** averages how far off you were in pesos or units, regardless of direction. The **mean absolute percentage error (MAPE)** expresses it as a percentage of the actual value, which lets you compare products of different sizes.",
          },
          {
            es: "El pronóstico solo vale si cambia una decisión: cuánto inventario pedir, cuánta liquidez reservar, a qué clientes llamar antes de que se vayan (**predicción de abandono** o *churn*). Un modelo de abandono, por ejemplo, asigna a cada cliente una probabilidad de irse y el equipo de retención llama primero a los de mayor probabilidad y mayor valor.",
            en: "A forecast is only worth something if it changes a decision: how much inventory to order, how much liquidity to reserve, which customers to call before they leave (**churn prediction**). A churn model, for example, assigns each customer a probability of leaving and the retention team calls those with the highest probability and highest value first.",
          },
          {
            es: "Mini ejemplo: si pronosticaste 100 unidades y vendiste 80, el error absoluto es 20 y el porcentual es 20 ÷ 80 = 25%.",
            en: "Mini example: if you forecast 100 units and sold 80, the absolute error is 20 and the percentage error is 20 ÷ 80 = 25%.",
          },
        ],
        formulas: [
          {
            name: { es: "Error absoluto medio (MAE)", en: "Mean absolute error (MAE)" },
            expression: "MAE = promedio de |Real − Pronóstico|",
            variables: [
              { symbol: "Real", meaning: { es: "Lo que realmente pasó en cada periodo (pesos o unidades).", en: "What actually happened in each period (pesos or units)." } },
              { symbol: "Pronóstico", meaning: { es: "Lo que habías estimado para ese periodo.", en: "What you had estimated for that period." } },
              { symbol: "| |", meaning: { es: "Valor absoluto: se quita el signo, así los errores hacia arriba y hacia abajo no se cancelan.", en: "Absolute value: the sign is dropped, so errors up and down do not cancel out." } },
            ],
            steps: [
              { es: "Para cada periodo resta real − pronóstico y quítale el signo.", en: "For each period subtract actual − forecast and drop the sign." },
              { es: "Suma esos errores absolutos.", en: "Add up those absolute errors." },
              { es: "Divide entre el número de periodos.", en: "Divide by the number of periods." },
            ],
            example: {
              es: "Mes 1: real 200, pronóstico 180 → |200 − 180| = 20. Mes 2: real 250, pronóstico 270 → |250 − 270| = 20. MAE = (20 + 20) ÷ 2 = **20 unidades**.",
              en: "Month 1: actual 200, forecast 180 → |200 − 180| = 20. Month 2: actual 250, forecast 270 → |250 − 270| = 20. MAE = (20 + 20) ÷ 2 = **20 units**.",
            },
            mistake: {
              es: "Sumar los errores con signo: +20 y −20 darían 0, como si no te hubieras equivocado.",
              en: "Adding errors with their sign: +20 and −20 would give 0, as if you had not been wrong at all.",
            },
          },
          {
            name: { es: "Error porcentual absoluto medio (MAPE)", en: "Mean absolute percentage error (MAPE)" },
            expression: "MAPE = promedio de |Real − Pronóstico| ÷ Real × 100",
            variables: [
              { symbol: "Real", meaning: { es: "Valor real de cada periodo; es la base de cada porcentaje.", en: "Actual value of each period; it is the base of each percentage." } },
              { symbol: "Pronóstico", meaning: { es: "Valor estimado de ese periodo.", en: "Estimated value for that period." } },
            ],
            steps: [
              { es: "Calcula el error absoluto de cada periodo.", en: "Compute each period's absolute error." },
              { es: "Divídelo entre el valor real de ese periodo y multiplica por 100.", en: "Divide it by that period's actual value and multiply by 100." },
              { es: "Promedia esos porcentajes.", en: "Average those percentages." },
            ],
            example: {
              es: "Con los mismos datos: mes 1: 20 ÷ 200 = 10 %; mes 2: 20 ÷ 250 = 8 %. MAPE = (10 % + 8 %) ÷ 2 = **9 %**.",
              en: "With the same data: month 1: 20 ÷ 200 = 10 %; month 2: 20 ÷ 250 = 8 %. MAPE = (10 % + 8 %) ÷ 2 = **9 %**.",
            },
            interpret: {
              es: "Un MAPE de 9 % dice que, en promedio, el pronóstico se equivoca 9 % del valor real. Menor es mejor.",
              en: "A 9 % MAPE says that, on average, the forecast is off by 9 % of the actual value. Lower is better.",
            },
            mistake: {
              es: "Dividir entre el pronóstico en lugar del valor real.",
              en: "Dividing by the forecast instead of the actual value.",
            },
          },
          {
            name: { es: "Ingreso esperado en riesgo (para priorizar clientes)", en: "Expected revenue at risk (to prioritize customers)" },
            expression: "Ingreso en riesgo = Probabilidad de abandono × Pago anual del cliente",
            variables: [
              { symbol: "Probabilidad de abandono", meaning: { es: "Probabilidad de que el cliente se vaya, según el modelo, en decimal (70 % = 0.70).", en: "Probability that the customer leaves, according to the model, as a decimal (70 % = 0.70)." } },
              { symbol: "Pago anual del cliente", meaning: { es: "Lo que ese cliente paga al año, en pesos.", en: "What that customer pays per year, in pesos." } },
            ],
            steps: [
              { es: "Convierte cada probabilidad a decimal.", en: "Convert each probability to a decimal." },
              { es: "Multiplícala por el pago anual de ese cliente.", en: "Multiply it by that customer's annual payment." },
              { es: "Llama primero al cliente con el resultado más alto.", en: "Call the customer with the highest result first." },
            ],
            example: {
              es: "Cliente 1: 60 % y $8,000 → 0.60 × 8,000 = $4,800. Cliente 2: 25 % y $20,000 → 0.25 × 20,000 = $5,000. Va primero el **cliente 2** ($5,000 > $4,800), aunque tenga menor probabilidad de irse.",
              en: "Customer 1: 60 % and $8,000 → 0.60 × 8,000 = $4,800. Customer 2: 25 % and $20,000 → 0.25 × 20,000 = $5,000. **Customer 2** goes first ($5,000 > $4,800), even with a lower probability of leaving.",
            },
            mistake: {
              es: "Ordenar solo por probabilidad o solo por pago: la decisión combina ambos.",
              en: "Ranking only by probability or only by payment: the decision combines both.",
            },
          },
        ],
      },
    ],
    examples: [
      {
        title: { es: "Pronóstico con promedio móvil de 3 meses", en: "Three-month moving-average forecast" },
        problem: {
          es: "Una papelería vendió en mochilas: mayo $40,000, junio $46,000 y julio $58,000. Pronostica agosto con un promedio móvil de 3 meses y comenta el resultado.",
          en: "A stationery store sold in backpacks: May $40,000, June $46,000 and July $58,000. Forecast August with a 3-month moving average and comment on the result.",
        },
        steps: [
          { es: "Suma los tres meses: 40,000 + 46,000 + 58,000 = 144,000.", en: "Add the three months: 40,000 + 46,000 + 58,000 = 144,000." },
          { es: "Divide entre 3: 144,000 ÷ 3 = 48,000.", en: "Divide by 3: 144,000 ÷ 3 = 48,000." },
          { es: "Observa la tendencia: las ventas suben cada mes y agosto es regreso a clases.", en: "Notice the trend: sales rise every month and August is back-to-school season." },
        ],
        result: {
          es: "El pronóstico es $48,000, pero probablemente se queda corto: el promedio móvil reacciona tarde a una tendencia al alza y a la estacionalidad de regreso a clases.",
          en: "The forecast is $48,000, but it probably falls short: the moving average reacts late to an upward trend and to back-to-school seasonality.",
        },
      },
      {
        title: { es: "Usar una recta de regresión", en: "Using a regression line" },
        problem: {
          es: "Con datos históricos, una agencia estimó: Ventas = 30,000 + 4 × (gasto en anuncios digitales). Si planea gastar $12,000, ¿cuántas ventas pronostica? (Modelo hipotético.)",
          en: "With historical data, an agency estimated: Sales = 30,000 + 4 × (digital ad spending). If it plans to spend $12,000, what sales does it forecast? (Hypothetical model.)",
        },
        steps: [
          { es: "Identifica a = 30,000 (ventas sin anuncios) y b = 4 (cada peso en anuncios se asocia con $4 de ventas).", en: "Identify a = 30,000 (sales without ads) and b = 4 (each peso in ads is associated with $4 in sales)." },
          { es: "Sustituye x = 12,000: 4 × 12,000 = 48,000.", en: "Substitute x = 12,000: 4 × 12,000 = 48,000." },
          { es: "Suma: 30,000 + 48,000 = 78,000.", en: "Add: 30,000 + 48,000 = 78,000." },
        ],
        result: {
          es: "Pronostica $78,000 de ventas. Es una asociación histórica: si gasta mucho más de lo que ha gastado antes, la recta puede dejar de ser válida.",
          en: "It forecasts $78,000 in sales. It is a historical association: if it spends far more than it ever has, the line may no longer hold.",
        },
      },
    ],
    keyPoints: [
      { es: "Descriptiva, diagnóstica, predictiva y prescriptiva responden preguntas distintas.", en: "Descriptive, diagnostic, predictive and prescriptive answer different questions." },
      { es: "Un pronóstico es una estimación, no una certeza: siempre va con su error.", en: "A forecast is an estimate, not a certainty: it always comes with its error." },
      { es: "El promedio móvil suaviza, pero reacciona tarde a tendencias.", en: "The moving average smooths, but reacts late to trends." },
      { es: "En y = a + b·x, la pendiente b indica cuánto cambia y por cada unidad de x.", en: "In y = a + b·x, slope b shows how much y changes per unit of x." },
      { es: "Correlación no es causalidad.", en: "Correlation is not causation." },
      { es: "MAE mide el error en unidades; MAPE en porcentaje del valor real.", en: "MAE measures error in units; MAPE as a percentage of the actual value." },
    ],
    exerciseIds: ['TEC-15-E1', 'TEC-15-E2', 'TEC-15-E3', 'TEC-15-E4', 'TEC-15-E5', 'TEC-15-E6'],
  },

  // ───────────────────────────── TEC-16 ─────────────────────────────
  {
    id: 'TEC-16',
    level: 2,
    topicIds: ['TEC.16'],
    title: { es: "Fintech y transformación digital", en: "Fintech and digital transformation" },
    summary: {
      es: "Las fintech usan tecnología para ofrecer pagos, créditos e inversiones de forma más rápida y barata, y la transformación digital obliga a cualquier empresa a rediseñar sus procesos financieros, no solo a digitalizarlos.",
      en: "Fintechs use technology to offer payments, loans and investments faster and more cheaply, and digital transformation forces any company to redesign its financial processes, not just digitize them.",
    },
    minutes: 16,
    objectives: [
      { es: "Explicar qué es una fintech y reconocer sus principales segmentos.", en: "Explain what a fintech is and recognize its main segments." },
      { es: "Describir el marco general de las fintech en México: Ley Fintech, IFC, IFPE y supervisión.", en: "Describe the general framework for fintechs in Mexico: Fintech Law, IFC, IFPE and supervision." },
      { es: "Distinguir digitalizar de transformar un proceso y medir su beneficio.", en: "Distinguish digitizing from transforming a process and measure its benefit." },
    ],
    theory: [
      {
        heading: { es: "¿Qué es una fintech?", en: "What is a fintech?" },
        body: [
          {
            es: "**Fintech** viene de *financial technology* (tecnología financiera). Son empresas que usan apps, internet y datos para ofrecer servicios financieros: pagar, prestar, invertir, asegurar o enviar dinero, muchas veces sin sucursales y con trámites desde el celular.",
            en: "**Fintech** comes from *financial technology*. These are companies that use apps, the internet and data to offer financial services: paying, lending, investing, insuring or sending money, often without branches and with procedures done from a phone.",
          },
          {
            es: "Su ventaja suele estar en tres cosas: **costos más bajos** (no pagan renta de sucursales), **rapidez** (un crédito aprobado en minutos con datos alternativos) y **experiencia de usuario** sencilla. También ayudan a la **inclusión financiera**: llegar a personas y negocios que la banca tradicional no atendía.",
            en: "Their advantage usually lies in three things: **lower costs** (no branch rent), **speed** (a loan approved in minutes using alternative data) and a simple **user experience**. They also help **financial inclusion**: reaching people and businesses that traditional banking did not serve.",
          },
          {
            es: "Mini ejemplo: una fonda que antes solo aceptaba efectivo ahora cobra con una terminal conectada al celular y recibe el dinero en su cuenta al día siguiente.",
            en: "Mini example: a small diner that used to accept only cash now charges with a card reader connected to a phone and receives the money in its account the next day.",
          },
        ],
        bullets: [
          { es: "Pagos y transferencias: terminales móviles, carteras digitales, cobros con código QR.", en: "Payments and transfers: mobile card readers, digital wallets, QR-code payments." },
          { es: "Crédito digital: préstamos a personas y pymes evaluados con datos.", en: "Digital credit: loans to individuals and SMEs assessed with data." },
          { es: "Financiamiento colectivo (crowdfunding): muchas personas financian un proyecto o préstamo.", en: "Crowdfunding: many people fund a project or a loan." },
          { es: "Inversión digital y neobancos: invertir o tener cuenta desde una app.", en: "Digital investing and neobanks: investing or holding an account from an app." },
          { es: "Insurtech y regtech: seguros digitales y tecnología para cumplir regulación.", en: "Insurtech and regtech: digital insurance and technology to meet regulation." },
        ],
      },
      {
        heading: { es: "El marco de las fintech en México", en: "The fintech framework in Mexico" },
        body: [
          {
            es: "En 2018 México publicó la **Ley para Regular las Instituciones de Tecnología Financiera**, conocida como **Ley Fintech**. Creó dos figuras que necesitan autorización: las **Instituciones de Financiamiento Colectivo (IFC)**, que conectan a quienes buscan dinero con muchas personas que lo aportan, y las **Instituciones de Fondos de Pago Electrónico (IFPE)**, que manejan cuentas de dinero electrónico para pagar y transferir.",
            en: "In 2018 Mexico published the **Law to Regulate Financial Technology Institutions**, known as the **Fintech Law**. It created two figures that require authorization: **Crowdfunding Institutions (IFC)**, which connect those seeking money with many people who contribute it, and **Electronic Payment Fund Institutions (IFPE)**, which manage electronic money accounts to pay and transfer.",
          },
          {
            es: "La **CNBV** autoriza y supervisa a estas instituciones, y el **Banco de México** regula temas de pagos y activos virtuales. La ley también contempla los **modelos novedosos**: un espacio de pruebas controlado (*sandbox*) para probar servicios nuevos con permisos temporales. Además, el Banco de México opera **SPEI**, el sistema de transferencias electrónicas en tiempo real, y sobre él se construyó **CoDi** para cobrar con código QR.",
            en: "**CNBV** authorizes and supervises these institutions, and **Banco de México** regulates payments and virtual assets. The law also provides for **novel models**: a controlled test space (*sandbox*) to try new services with temporary permits. In addition, Banco de México operates **SPEI**, the real-time electronic transfer system, and **CoDi** was built on it for QR-code payments.",
          },
          {
            es: "Mini ejemplo práctico: antes de usar una app para invertir o prestar, revisa que la empresa aparezca en los padrones oficiales de entidades autorizadas. Una app sin autorización no tiene la supervisión que exige la ley.",
            en: "Practical mini example: before using an app to invest or lend, check that the company appears in the official registries of authorized entities. An unauthorized app lacks the supervision the law requires.",
          },
        ],
        formulas: [
          {
            name: { es: "Ganancia neta esperada en financiamiento colectivo", en: "Expected net gain in crowdfunding" },
            expression: "Rendimiento neto = Tasa anual − Comisión − Pérdida esperada por impago;   Ganancia neta = Monto invertido × Rendimiento neto",
            variables: [
              { symbol: "Tasa anual", meaning: { es: "Interés que pagan quienes reciben los préstamos, en % anual.", en: "Interest paid by borrowers, in % per year." } },
              { symbol: "Comisión", meaning: { es: "Lo que cobra la plataforma sobre lo invertido, en % anual.", en: "What the platform charges on the amount invested, in % per year." } },
              { symbol: "Pérdida esperada por impago", meaning: { es: "Parte de la inversión que se estima perder porque algunos no pagan, en %.", en: "Share of the investment expected to be lost because some borrowers do not pay, in %." } },
              { symbol: "Monto invertido", meaning: { es: "Pesos que pones en la plataforma.", en: "Pesos you put into the platform." } },
            ],
            steps: [
              { es: "Resta a la tasa anual la comisión y la pérdida esperada.", en: "Subtract the fee and the expected loss from the annual rate." },
              { es: "Convierte el resultado a decimal.", en: "Convert the result to a decimal." },
              { es: "Multiplícalo por el monto invertido.", en: "Multiply it by the amount invested." },
            ],
            example: {
              es: "Hipotético: inviertes $20,000; tasa 15 %, comisión 1.5 %, pérdida esperada 3.5 %. Rendimiento neto = 15 − 1.5 − 3.5 = 10 %. Ganancia = 20,000 × 0.10 = **$2,000**.",
              en: "Hypothetical: you invest $20,000; rate 15 %, fee 1.5 %, expected loss 3.5 %. Net return = 15 − 1.5 − 3.5 = 10 %. Gain = 20,000 × 0.10 = **$2,000**.",
            },
            mistake: {
              es: "Quedarte con la tasa bruta y olvidar comisiones y préstamos que no se pagan.",
              en: "Sticking with the gross rate and forgetting fees and loans that are not repaid.",
            },
          },
        ],
      },
      {
        heading: { es: "Transformación digital del área financiera", en: "Digital transformation of the finance function" },
        body: [
          {
            es: "**Digitalizar** es pasar algo de papel a digital: escanear facturas o mandar el mismo Excel por correo. **Transformar** es rediseñar el proceso aprovechando la tecnología: las facturas electrónicas entran solas al sistema, se concilian contra el banco y solo las diferencias llegan a una persona.",
            en: "**Digitizing** is moving something from paper to digital: scanning invoices or emailing the same spreadsheet. **Transforming** is redesigning the process to take advantage of technology: electronic invoices enter the system automatically, are reconciled against the bank, and only differences reach a person.",
          },
          {
            es: "Una transformación se mide con indicadores claros: **tiempo de ciclo** (días para cerrar el mes), **costo por transacción**, **errores** y **satisfacción** de clientes. Fracasa más por personas y procesos que por tecnología: hay que capacitar, cambiar responsabilidades y medir antes y después.",
            en: "A transformation is measured with clear indicators: **cycle time** (days to close the month), **cost per transaction**, **errors** and customer **satisfaction**. It fails more because of people and processes than technology: you must train, change responsibilities and measure before and after.",
          },
          {
            es: "Mini ejemplo: una empresa cerraba su mes en 10 días; tras conectar banco, facturación y contabilidad lo cierra en 4. Ganó 6 días para analizar en lugar de capturar.",
            en: "Mini example: a company used to close its month in 10 days; after connecting bank, invoicing and accounting it closes in 4. It gained 6 days to analyze instead of keying in data.",
          },
        ],
        formulas: [
          {
            name: { es: "Ahorro por automatizar y meses de recuperación", en: "Savings from automation and payback months" },
            expression: "Ahorro mensual = Transacciones al mes × (Costo antes − Costo después);   Meses de recuperación = Inversión ÷ Ahorro mensual",
            variables: [
              { symbol: "Transacciones al mes", meaning: { es: "Cuántas operaciones procesa el área cada mes (facturas, movimientos).", en: "How many transactions the team processes each month (invoices, bank movements)." } },
              { symbol: "Costo antes / Costo después", meaning: { es: "Costo por transacción sin y con la automatización, en pesos.", en: "Cost per transaction without and with automation, in pesos." } },
              { symbol: "Inversión", meaning: { es: "Lo que cuesta implementar la solución, en pesos.", en: "What it costs to implement the solution, in pesos." } },
            ],
            steps: [
              { es: "Calcula el ahorro por transacción: costo antes − costo después.", en: "Compute the saving per transaction: cost before − cost after." },
              { es: "Multiplícalo por las transacciones del mes: ahorro mensual.", en: "Multiply it by the month's transactions: monthly saving." },
              { es: "Divide la inversión entre el ahorro mensual.", en: "Divide the investment by the monthly saving." },
            ],
            example: {
              es: "3,000 movimientos al mes; costo de $20 a mano y $5 automatizado; inversión $180,000. Ahorro por movimiento = 20 − 5 = $15. Ahorro mensual = 3,000 × 15 = **$45,000**. Recuperación = 180,000 ÷ 45,000 = **4 meses**.",
              en: "3,000 movements a month; cost of $20 by hand and $5 automated; investment $180,000. Saving per movement = 20 − 5 = $15. Monthly saving = 3,000 × 15 = **$45,000**. Payback = 180,000 ÷ 45,000 = **4 months**.",
            },
            mistake: {
              es: "Tomar el costo nuevo completo (3,000 × 5) como si fuera el ahorro.",
              en: "Taking the full new cost (3,000 × 5) as if it were the saving.",
            },
          },
        ],
      },
    ],
    examples: [
      {
        title: { es: "Comparar costos de cobro", en: "Comparing collection costs" },
        problem: {
          es: "Una tienda de ropa cobra $80,000 al mes con tarjeta en una terminal que cobra 3% de comisión. Un proveedor le ofrece pasar la mitad de esos cobros a transferencias con código QR sin comisión. ¿Cuánto ahorraría al mes y al año? (Comisiones hipotéticas.)",
          en: "A clothing store collects $80,000 a month by card on a terminal that charges a 3% fee. A provider offers to move half of those collections to QR-code transfers with no fee. How much would it save per month and per year? (Hypothetical fees.)",
        },
        steps: [
          { es: "Comisión actual: 80,000 × 3% = $2,400 al mes.", en: "Current fee: 80,000 × 3% = $2,400 a month." },
          { es: "Cobros que siguen con tarjeta: 80,000 ÷ 2 = 40,000; comisión: 40,000 × 3% = $1,200.", en: "Collections still by card: 80,000 ÷ 2 = 40,000; fee: 40,000 × 3% = $1,200." },
          { es: "Ahorro mensual: 2,400 − 1,200 = $1,200.", en: "Monthly saving: 2,400 − 1,200 = $1,200." },
          { es: "Ahorro anual: 1,200 × 12 = $14,400.", en: "Annual saving: 1,200 × 12 = $14,400." },
        ],
        result: {
          es: "Ahorraría $1,200 al mes, $14,400 al año. Debe considerar también que algunos clientes prefieren tarjeta por sus meses sin intereses o puntos.",
          en: "It would save $1,200 a month, $14,400 a year. It should also consider that some customers prefer cards for interest-free installments or rewards.",
        },
      },
      {
        title: { es: "Medir la transformación de cuentas por pagar", en: "Measuring the transformation of accounts payable" },
        problem: {
          es: "Un área de cuentas por pagar procesaba 1,500 facturas al mes a un costo de $40 cada una. Tras automatizar la recepción y validación, el costo baja a $12 por factura y la inversión fue de $252,000. ¿En cuántos meses se recupera?",
          en: "An accounts payable team processed 1,500 invoices a month at a cost of $40 each. After automating receipt and validation, the cost drops to $12 per invoice and the investment was $252,000. In how many months is it recovered?",
        },
        steps: [
          { es: "Ahorro por factura: 40 − 12 = $28.", en: "Saving per invoice: 40 − 12 = $28." },
          { es: "Ahorro mensual: 1,500 × 28 = $42,000.", en: "Monthly saving: 1,500 × 28 = $42,000." },
          { es: "Recuperación: 252,000 ÷ 42,000 = 6 meses.", en: "Payback: 252,000 ÷ 42,000 = 6 months." },
        ],
        result: {
          es: "La inversión se recupera en 6 meses. El indicador costo por transacción muestra el beneficio con claridad.",
          en: "The investment is recovered in 6 months. The cost-per-transaction indicator shows the benefit clearly.",
        },
      },
    ],
    keyPoints: [
      { es: "Fintech = servicios financieros ofrecidos con tecnología, más rápidos y baratos.", en: "Fintech = financial services delivered with technology, faster and cheaper." },
      { es: "La Ley Fintech (2018) creó las IFC (financiamiento colectivo) y las IFPE (dinero electrónico).", en: "The Fintech Law (2018) created IFCs (crowdfunding) and IFPEs (electronic money)." },
      { es: "La CNBV autoriza y supervisa; Banxico regula pagos y opera SPEI.", en: "CNBV authorizes and supervises; Banxico regulates payments and operates SPEI." },
      { es: "Verifica que una fintech esté autorizada antes de confiarle tu dinero.", en: "Verify a fintech is authorized before trusting it with your money." },
      { es: "Transformar es rediseñar el proceso; digitalizar es solo cambiar el papel por archivo.", en: "Transforming is redesigning the process; digitizing is only swapping paper for files." },
    ],
    normativeNote: NOTE_FINTECH,
    exerciseIds: ['TEC-16-E1', 'TEC-16-E2', 'TEC-16-E3', 'TEC-16-E4', 'TEC-16-E5', 'TEC-16-E6'],
  },

  // ───────────────────────────── TEC-17 ─────────────────────────────
  {
    id: 'TEC-17',
    level: 2,
    topicIds: ['TEC.17'],
    title: { es: "Blockchain y contratos inteligentes", en: "Blockchain and smart contracts" },
    summary: {
      es: "Una blockchain es un registro compartido que casi no se puede alterar, y los contratos inteligentes son programas que se ejecutan solos en ella cuando se cumplen condiciones; sirven en algunos casos, pero no son la solución para todo.",
      en: "A blockchain is a shared record that is almost impossible to alter, and smart contracts are programs that run on it by themselves when conditions are met; they are useful in some cases, but they are not the answer to everything.",
    },
    minutes: 17,
    objectives: [
      { es: "Explicar qué es una blockchain, qué es un hash y por qué el registro es difícil de alterar.", en: "Explain what a blockchain is, what a hash is and why the record is hard to alter." },
      { es: "Describir cómo funciona un contrato inteligente y sus límites.", en: "Describe how a smart contract works and its limits." },
      { es: "Evaluar si un caso de negocio realmente necesita blockchain.", en: "Evaluate whether a business case really needs blockchain." },
    ],
    theory: [
      {
        heading: { es: "Un libro mayor compartido", en: "A shared ledger" },
        body: [
          {
            es: "Imagina un **libro mayor** (el cuaderno donde se anotan todas las operaciones) que no guarda una sola persona, sino **miles de computadoras** al mismo tiempo, y todas tienen la misma copia. Eso es una **blockchain** (cadena de bloques): un registro **distribuido** donde las operaciones se agrupan en **bloques** y cada bloque se encadena al anterior.",
            en: "Imagine a **ledger** (the book where all transactions are recorded) kept not by one person but by **thousands of computers** at once, all holding the same copy. That is a **blockchain**: a **distributed** record where transactions are grouped into **blocks** and each block is chained to the previous one.",
          },
          {
            es: "El \"candado\" es el **hash**: una huella digital que se calcula a partir del contenido. Si cambias una sola letra, el hash cambia por completo. Cada bloque guarda el hash del bloque anterior; si alguien altera un bloque viejo, su hash ya no coincide y la cadena delata el cambio. Para que se acepte un bloque nuevo, la red usa un **mecanismo de consenso**, como prueba de trabajo o prueba de participación.",
            en: "The \"lock\" is the **hash**: a digital fingerprint computed from the content. If you change a single letter, the hash changes completely. Each block stores the previous block's hash; if someone alters an old block, its hash no longer matches and the chain exposes the change. To accept a new block, the network uses a **consensus mechanism**, such as proof of work or proof of stake.",
          },
          {
            es: "Hay blockchains **públicas** (cualquiera participa, como la de Bitcoin) y **privadas o permisionadas** (solo participan miembros autorizados, como un grupo de empresas de una cadena de suministro). Mini ejemplo: si un empleado intenta cambiar un pago antiguo de $5,000 a $50,000, las demás copias no coinciden y el cambio se rechaza.",
            en: "There are **public** blockchains (anyone can take part, like Bitcoin's) and **private or permissioned** ones (only authorized members take part, like a group of supply-chain companies). Mini example: if an employee tries to change an old $5,000 payment to $50,000, the other copies do not match and the change is rejected.",
          },
        ],
        bullets: [
          { es: "Distribuido: muchas copias, nadie controla solo el registro.", en: "Distributed: many copies, no one controls the record alone." },
          { es: "Inmutable en la práctica: alterar el pasado es muy difícil y se nota.", en: "Practically immutable: altering the past is very hard and noticeable." },
          { es: "Transparente: los participantes pueden verificar las operaciones.", en: "Transparent: participants can verify transactions." },
          { es: "Consenso: reglas para que la red acepte bloques nuevos.", en: "Consensus: rules for the network to accept new blocks." },
        ],
      },
      {
        heading: { es: "Contratos inteligentes", en: "Smart contracts" },
        body: [
          {
            es: "Un **contrato inteligente** es un programa guardado en la blockchain que se ejecuta **automáticamente** cuando se cumple una condición: \"si llega la confirmación de entrega, paga al vendedor; si en 30 días no llega, devuelve el dinero al comprador\". Funciona como una máquina expendedora: metes la moneda, eliges y la máquina entrega sin que nadie intervenga.",
            en: "A **smart contract** is a program stored on the blockchain that runs **automatically** when a condition is met: \"if delivery confirmation arrives, pay the seller; if it does not arrive in 30 days, return the money to the buyer\". It works like a vending machine: you insert the coin, choose and the machine delivers without anyone stepping in.",
          },
          {
            es: "Sus ventajas: menos intermediarios, ejecución rápida y reglas visibles para todos. Sus límites son importantes: no \"sabe\" lo que pasa fuera de la cadena y depende de un **oráculo** (una fuente externa de datos, como un servicio de paquetería) que puede fallar; si el código tiene un error, el error también se ejecuta solo y puede ser difícil de revertir; y no sustituye por sí mismo a un contrato con validez legal.",
            en: "Its advantages: fewer intermediaries, fast execution and rules visible to all. Its limits are important: it does not \"know\" what happens off the chain and depends on an **oracle** (an external data source, such as a courier service) that can fail; if the code has a bug, the bug also runs by itself and can be hard to reverse; and it does not by itself replace a legally valid contract.",
          },
          {
            es: "Mini ejemplo: un contrato reparte automáticamente cada venta de una canción digital: 70% al artista, 20% a la productora y 10% a la plataforma, sin esperar liquidaciones trimestrales.",
            en: "Mini example: a contract automatically splits each sale of a digital song: 70% to the artist, 20% to the producer and 10% to the platform, without waiting for quarterly settlements.",
          },
        ],
        formulas: [
          {
            name: { es: "Reparto automático de un pago por porcentajes", en: "Automatic split of a payment by percentages" },
            expression: "Monto para cada parte = Pago total × % de esa parte",
            variables: [
              { symbol: "Pago total", meaning: { es: "Lo que pagó el cliente, en pesos.", en: "What the customer paid, in pesos." } },
              { symbol: "% de esa parte", meaning: { es: "Porcentaje pactado en el contrato para cada participante, en decimal; todos suman 100 %.", en: "Percentage agreed in the contract for each participant, as a decimal; they all add up to 100 %." } },
            ],
            steps: [
              { es: "Convierte cada porcentaje a decimal.", en: "Convert each percentage to a decimal." },
              { es: "Multiplica el pago total por el porcentaje de cada parte.", en: "Multiply the total payment by each party's percentage." },
              { es: "Comprueba que la suma de todas las partes dé el pago total.", en: "Check that the sum of all parts equals the total payment." },
            ],
            example: {
              es: "Venta de $4,000 con reparto 60 / 30 / 10. Autor: 4,000 × 0.60 = **$2,400**; editorial: 4,000 × 0.30 = **$1,200**; plataforma: 4,000 × 0.10 = **$400**. Suma: 2,400 + 1,200 + 400 = $4,000.",
              en: "A $4,000 sale split 60 / 30 / 10. Author: 4,000 × 0.60 = **$2,400**; publisher: 4,000 × 0.30 = **$1,200**; platform: 4,000 × 0.10 = **$400**. Sum: 2,400 + 1,200 + 400 = $4,000.",
            },
            mistake: {
              es: "Calcular un porcentaje sobre lo que queda tras pagar al primero: cada porcentaje se aplica al pago total.",
              en: "Computing a percentage on what is left after paying the first party: each percentage applies to the total payment.",
            },
          },
        ],
      },
      {
        heading: { es: "Aplicaciones en negocios y cuándo no usarla", en: "Business applications and when not to use it" },
        body: [
          {
            es: "Usos reales en negocios: **trazabilidad** en cadenas de suministro (seguir un lote de aguacate desde la huerta hasta el supermercado), **pagos internacionales**, **tokenización** (dividir un activo, como un inmueble, en partes digitales llamadas *tokens*) y **certificados** difíciles de falsificar, como diplomas.",
            en: "Real business uses: supply-chain **traceability** (following a batch of avocados from the orchard to the supermarket), **international payments**, **tokenization** (dividing an asset, like a property, into digital parts called *tokens*) and hard-to-forge **certificates**, such as diplomas.",
          },
          {
            es: "Pero blockchain no siempre conviene. Si **una sola empresa** controla los datos y todos confían en ella, una base de datos normal es más barata y rápida. Blockchain aporta valor cuando **varias partes que no confían plenamente entre sí** necesitan compartir un registro sin un intermediario central. Y recuerda: los **criptoactivos** (como bitcoin) son solo una aplicación, muy volátil, de esta tecnología.",
            en: "But blockchain is not always worth it. If **a single company** controls the data and everyone trusts it, a normal database is cheaper and faster. Blockchain adds value when **several parties that do not fully trust each other** need to share a record without a central intermediary. And remember: **crypto-assets** (like bitcoin) are just one, very volatile, application of this technology.",
          },
          {
            es: "Mini ejemplo: un inmueble de $5,000,000 tokenizado en 10,000 tokens da $500 por token; quien compra 30 tokens invierte $15,000 y posee 0.3% del inmueble.",
            en: "Mini example: a $5,000,000 property tokenized into 10,000 tokens gives $500 per token; whoever buys 30 tokens invests $15,000 and owns 0.3% of the property.",
          },
        ],
        formulas: [
          {
            name: { es: "Porcentaje de un activo tokenizado", en: "Percentage of a tokenized asset" },
            expression: "Precio por token = Valor del activo ÷ Número de tokens;   Tokens comprados = Monto invertido ÷ Precio por token;   % del activo = Tokens comprados ÷ Número de tokens × 100",
            variables: [
              { symbol: "Valor del activo", meaning: { es: "Valor total del inmueble o activo, en pesos.", en: "Total value of the property or asset, in pesos." } },
              { symbol: "Número de tokens", meaning: { es: "En cuántas partes iguales se dividió el activo.", en: "Into how many equal parts the asset was divided." } },
              { symbol: "Monto invertido", meaning: { es: "Pesos que pagaste por tus tokens.", en: "Pesos you paid for your tokens." } },
            ],
            steps: [
              { es: "Calcula el precio por token: valor del activo ÷ número de tokens.", en: "Compute the price per token: asset value ÷ number of tokens." },
              { es: "Calcula tus tokens: monto invertido ÷ precio por token.", en: "Compute your tokens: amount invested ÷ price per token." },
              { es: "Divide tus tokens entre el total y multiplica por 100 (atajo: monto invertido ÷ valor del activo × 100).", en: "Divide your tokens by the total and multiply by 100 (shortcut: amount invested ÷ asset value × 100)." },
            ],
            example: {
              es: "Un local de $3,000,000 dividido en 20,000 tokens: precio = 3,000,000 ÷ 20,000 = $150. Inviertes $45,000: 45,000 ÷ 150 = 300 tokens. Porcentaje = 300 ÷ 20,000 × 100 = **1.5 %** del local.",
              en: "A $3,000,000 store divided into 20,000 tokens: price = 3,000,000 ÷ 20,000 = $150. You invest $45,000: 45,000 ÷ 150 = 300 tokens. Percentage = 300 ÷ 20,000 × 100 = **1.5 %** of the store.",
            },
            mistake: {
              es: "Olvidar multiplicar por 100 y responder en decimal (0.015 en lugar de 1.5 %).",
              en: "Forgetting to multiply by 100 and answering as a decimal (0.015 instead of 1.5 %).",
            },
          },
        ],
        bullets: [
          { es: "¿Varias partes escriben en el mismo registro?", en: "Do several parties write to the same record?" },
          { es: "¿Desconfían entre sí o no quieren un intermediario central?", en: "Do they distrust each other or not want a central intermediary?" },
          { es: "¿Importa que el historial no se pueda alterar?", en: "Does it matter that history cannot be altered?" },
          { es: "Si respondes no a todo, una base de datos tradicional suele bastar.", en: "If you answer no to all, a traditional database is usually enough." },
        ],
      },
    ],
    examples: [
      {
        title: { es: "Un contrato de garantía (escrow)", en: "An escrow contract" },
        problem: {
          es: "Una empresa compra maquinaria por $100,000 a un proveedor extranjero. Acuerdan un contrato inteligente de garantía: el comprador deposita el dinero; si la paquetería confirma la entrega, se paga al proveedor; si en 30 días no hay confirmación, el dinero regresa. Describe qué pasa en cada escenario.",
          en: "A company buys $100,000 of machinery from a foreign supplier. They agree on an escrow smart contract: the buyer deposits the money; if the courier confirms delivery, the supplier is paid; if there is no confirmation within 30 days, the money returns. Describe what happens in each scenario.",
        },
        steps: [
          { es: "el comprador deposita $100,000; el contrato los retiene y nadie puede tomarlos a mano.", en: "the buyer deposits $100,000; the contract holds it and no one can take it manually." },
          { es: "Escenario A: el oráculo de la paquetería confirma la entrega el día 12 → el contrato paga $100,000 al proveedor.", en: "Scenario A: the courier's oracle confirms delivery on day 12 → the contract pays $100,000 to the supplier." },
          { es: "Escenario B: pasan 30 días sin confirmación → el contrato devuelve $100,000 al comprador.", en: "Scenario B: 30 days pass with no confirmation → the contract returns $100,000 to the buyer." },
          { es: "Riesgo: si el oráculo reporta mal (dice entregado cuando no lo fue), el contrato paga igual.", en: "Risk: if the oracle reports wrongly (says delivered when it was not), the contract pays anyway." },
        ],
        result: {
          es: "Ninguna parte necesita confiar en la otra ni en un banco intermediario, pero ambas dependen de que el oráculo y el código sean correctos.",
          en: "Neither party needs to trust the other or an intermediary bank, but both depend on the oracle and the code being correct.",
        },
      },
      {
        title: { es: "¿Blockchain o base de datos?", en: "Blockchain or database?" },
        problem: {
          es: "Caso 1: una panadería quiere registrar su inventario interno. Caso 2: productores, exportadores, aduanas y supermercados quieren registrar el origen de cada lote de café. ¿En cuál tiene sentido blockchain?",
          en: "Case 1: a bakery wants to record its internal inventory. Case 2: growers, exporters, customs and supermarkets want to record the origin of each coffee batch. In which one does blockchain make sense?",
        },
        steps: [
          { es: "Caso 1: una sola empresa escribe y controla los datos → base de datos o sistema de inventarios.", en: "Case 1: a single company writes and controls the data → database or inventory system." },
          { es: "Caso 2: varias partes independientes escriben en el mismo registro y necesitan que nadie lo altere.", en: "Case 2: several independent parties write to the same record and need no one to alter it." },
          { es: "Aplica la lista de preguntas: en el caso 2 la respuesta es sí a las tres.", en: "Apply the question checklist: in case 2 the answer is yes to all three." },
        ],
        result: {
          es: "Blockchain tiene sentido en el caso 2 (trazabilidad entre varias partes); en el caso 1 sería un gasto innecesario.",
          en: "Blockchain makes sense in case 2 (traceability among several parties); in case 1 it would be an unnecessary expense.",
        },
      },
    ],
    keyPoints: [
      { es: "Blockchain = registro distribuido de bloques encadenados con hashes.", en: "Blockchain = distributed record of blocks chained with hashes." },
      { es: "Cambiar un dato cambia su hash, por eso las alteraciones se detectan.", en: "Changing data changes its hash, which is why alterations are detected." },
      { es: "Un contrato inteligente se ejecuta solo cuando se cumple su condición.", en: "A smart contract runs by itself when its condition is met." },
      { es: "Depende de oráculos y de código sin errores; no sustituye por sí solo al contrato legal.", en: "It depends on oracles and bug-free code; it does not by itself replace the legal contract." },
      { es: "Úsala cuando varias partes sin confianza plena comparten un registro; si no, basta una base de datos.", en: "Use it when several parties without full trust share a record; otherwise a database is enough." },
    ],
    normativeNote: NOTE_CRYPTO,
    exerciseIds: ['TEC-17-E1', 'TEC-17-E2', 'TEC-17-E3', 'TEC-17-E4', 'TEC-17-E5', 'TEC-17-E6'],
  },

  // ───────────────────────────── TEC-18 ─────────────────────────────
  {
    id: 'TEC-18',
    level: 2,
    topicIds: ['TEC.18'],
    title: { es: "Gobernanza, privacidad y seguridad de datos", en: "Data governance, privacy and security" },
    summary: {
      es: "Gobernar los datos es definir quién responde por ellos y cómo se cuidan; la privacidad protege los datos personales de las personas, y la seguridad los defiende contra pérdidas, robos y ataques.",
      en: "Governing data means defining who is responsible for it and how it is cared for; privacy protects people's personal data, and security defends it against loss, theft and attacks.",
    },
    minutes: 17,
    objectives: [
      { es: "Explicar qué es la gobernanza de datos, sus roles y sus dimensiones de calidad.", en: "Explain what data governance is, its roles and its quality dimensions." },
      { es: "Distinguir datos personales y sensibles, y describir el aviso de privacidad y los derechos ARCO.", en: "Distinguish personal and sensitive data, and describe the privacy notice and ARCO rights." },
      { es: "Aplicar la tríada de seguridad y estimar el riesgo de un incidente.", en: "Apply the security triad and estimate the risk of an incident." },
    ],
    theory: [
      {
        heading: { es: "Gobernanza y calidad de datos", en: "Data governance and quality" },
        body: [
          {
            es: "La **gobernanza de datos** es el conjunto de reglas, roles y procesos que dicen **quién** es responsable de cada dato, **cómo** se define, **quién** puede verlo y **cuánto tiempo** se guarda. Sin gobernanza pasa lo típico: ventas y finanzas reportan cifras distintas de \"clientes activos\" porque cada área lo define a su modo.",
            en: "**Data governance** is the set of rules, roles and processes that say **who** is responsible for each piece of data, **how** it is defined, **who** can see it and **how long** it is kept. Without governance the usual happens: sales and finance report different \"active customers\" figures because each area defines it its own way.",
          },
          {
            es: "Dos roles clave: el **dueño del dato** (*data owner*), un directivo que decide sobre él y responde por él, y el **custodio o administrador del dato** (*data steward*), quien cuida su calidad día a día. Herramientas comunes: un **diccionario o catálogo de datos** con definiciones únicas y políticas de acceso y conservación.",
            en: "Two key roles: the **data owner**, a manager who decides about the data and is accountable for it, and the **data steward**, who looks after its quality day to day. Common tools: a **data dictionary or catalog** with single definitions, and access and retention policies.",
          },
          {
            es: "Mini ejemplo: si 300 de 2,000 clientes no tienen RFC capturado, la **completitud** del campo RFC es 1,700 ÷ 2,000 = 85%. El custodio fija una meta de 98% y corrige la captura.",
            en: "Mini example: if 300 out of 2,000 customers have no RFC recorded, the **completeness** of the RFC field is 1,700 ÷ 2,000 = 85%. The steward sets a 98% target and fixes data entry.",
          },
        ],
        formulas: [
          {
            name: { es: "Completitud de un campo", en: "Completeness of a field" },
            expression: "Completitud (%) = Registros con el dato ÷ Total de registros × 100",
            variables: [
              { symbol: "Registros con el dato", meaning: { es: "Registros donde el campo sí está capturado (total − vacíos).", en: "Records where the field is filled in (total − blanks)." } },
              { symbol: "Total de registros", meaning: { es: "Todos los registros revisados.", en: "All records reviewed." } },
            ],
            steps: [
              { es: "Resta los registros vacíos al total.", en: "Subtract the blank records from the total." },
              { es: "Divide entre el total y multiplica por 100.", en: "Divide by the total and multiply by 100." },
            ],
            example: {
              es: "De 4,000 proveedores, 200 no tienen correo. Con dato: 4,000 − 200 = 3,800. Completitud = 3,800 ÷ 4,000 × 100 = **95 %**.",
              en: "Out of 4,000 suppliers, 200 have no email. With data: 4,000 − 200 = 3,800. Completeness = 3,800 ÷ 4,000 × 100 = **95 %**.",
            },
            mistake: {
              es: "Dividir los vacíos entre el total: eso da el porcentaje que falta (5 %), no la completitud.",
              en: "Dividing the blanks by the total: that gives the missing percentage (5 %), not completeness.",
            },
          },
        ],
        bullets: [
          { es: "Exactitud: el dato refleja la realidad.", en: "Accuracy: the data reflects reality." },
          { es: "Completitud: no faltan datos obligatorios.", en: "Completeness: no required data is missing." },
          { es: "Consistencia: el mismo dato vale igual en todos los sistemas.", en: "Consistency: the same data has the same value in every system." },
          { es: "Oportunidad: el dato está disponible cuando se necesita.", en: "Timeliness: the data is available when needed." },
          { es: "Unicidad: no hay registros duplicados.", en: "Uniqueness: there are no duplicate records." },
        ],
      },
      {
        heading: { es: "Privacidad y datos personales", en: "Privacy and personal data" },
        body: [
          {
            es: "Un **dato personal** es cualquier información de una persona identificada o identificable: nombre, teléfono, correo, CURP, domicilio. Los **datos personales sensibles** son los que, mal usados, pueden causar discriminación o un daño grave, como el **estado de salud**, el **origen étnico**, las **creencias religiosas**, las **opiniones políticas** o la **preferencia sexual**; requieren más cuidado y, por regla general, consentimiento expreso.",
            en: "**Personal data** is any information about an identified or identifiable person: name, phone, email, CURP, address. **Sensitive personal data** is data that, if misused, can cause discrimination or serious harm, such as **health status**, **ethnic origin**, **religious beliefs**, **political opinions** or **sexual preference**; it requires more care and, as a general rule, express consent.",
          },
          {
            es: "En México, quien recaba datos personales debe informar mediante un **aviso de privacidad**: quién es el responsable, para qué usará los datos y cómo ejercer tus derechos. Esos derechos se conocen como **ARCO**: **Acceso** (saber qué datos tienen de ti), **Rectificación** (corregirlos), **Cancelación** (pedir que los borren) y **Oposición** (negarte a ciertos usos, como publicidad).",
            en: "In Mexico, whoever collects personal data must inform through a **privacy notice**: who is responsible, what the data will be used for and how to exercise your rights. Those rights are known as **ARCO**: **Access** (knowing what data they hold about you), **Rectification** (correcting it), **Cancellation** (asking for deletion) and **Opposition** (refusing certain uses, such as advertising).",
          },
          {
            es: "Un buen principio práctico es la **minimización**: pide solo los datos que necesitas para el fin declarado. Mini ejemplo: una tienda en línea no necesita la religión de sus clientes para enviar un pedido; pedirla sería un exceso y un riesgo.",
            en: "A good practical principle is **minimization**: ask only for the data you need for the stated purpose. Mini example: an online store does not need its customers' religion to ship an order; asking for it would be excessive and risky.",
          },
        ],
      },
      {
        heading: { es: "Seguridad de la información y riesgo", en: "Information security and risk" },
        body: [
          {
            es: "La seguridad de la información se resume en la **tríada CID**: **Confidencialidad** (solo quien debe ve el dato), **Integridad** (nadie lo altera sin permiso) y **Disponibilidad** (está accesible cuando se necesita). Un robo de base de datos rompe la confidencialidad; cambiar la CLABE de un proveedor, la integridad; un **ransomware** (programa que secuestra archivos y pide rescate), la disponibilidad.",
            en: "Information security is summarized in the **CIA triad**: **Confidentiality** (only those who should see the data do), **Integrity** (no one alters it without permission) and **Availability** (it is accessible when needed). A database theft breaks confidentiality; changing a supplier's bank account number, integrity; **ransomware** (a program that hijacks files and demands a ransom), availability.",
          },
          {
            es: "Controles básicos: **mínimo privilegio** (cada quien accede solo a lo que necesita), **autenticación de dos factores**, **cifrado** (codificar los datos para que no se puedan leer sin la clave), **respaldos** probados y capacitación contra el **phishing** (correos o mensajes falsos que buscan robar contraseñas). Muchas empresas siguen marcos como la norma internacional ISO/IEC 27001.",
            en: "Basic controls: **least privilege** (each person accesses only what they need), **two-factor authentication**, **encryption** (encoding data so it cannot be read without the key), tested **backups** and training against **phishing** (fake emails or messages that try to steal passwords). Many companies follow frameworks such as the international standard ISO/IEC 27001.",
          },
          {
            es: "Para priorizar, se estima el **riesgo**. Una forma cuantitativa es la **pérdida anual esperada**: costo de un incidente × veces que se espera al año. Mini ejemplo: un incidente de $200,000 que se espera una vez cada 4 años (0.25 al año) equivale a $50,000 al año; un control que lo evita y cuesta $20,000 anuales sí conviene.",
            en: "To prioritize, **risk** is estimated. One quantitative way is the **expected annual loss**: cost of an incident × times it is expected per year. Mini example: a $200,000 incident expected once every 4 years (0.25 per year) equals $50,000 a year; a control that prevents it and costs $20,000 a year is worth it.",
          },
        ],
        formulas: [
          {
            name: { es: "Pérdida anual esperada de un riesgo", en: "Expected annual loss of a risk" },
            expression: "Pérdida anual esperada = Costo por incidente × Frecuencia anual",
            variables: [
              { symbol: "Costo por incidente", meaning: { es: "Cuánto costaría cada vez que ocurre el problema, en pesos.", en: "How much each occurrence of the problem would cost, in pesos." } },
              { symbol: "Frecuencia anual", meaning: { es: "Veces que se espera al año. Si ocurre una vez cada N años, es 1 ÷ N (cada 4 años = 0.25).", en: "Times it is expected per year. If it happens once every N years, it is 1 ÷ N (every 4 years = 0.25)." } },
            ],
            steps: [
              { es: "Convierte la frecuencia a «veces por año»: una vez cada 2 años = 1 ÷ 2 = 0.5.", en: "Convert the frequency to «times per year»: once every 2 years = 1 ÷ 2 = 0.5." },
              { es: "Multiplica el costo por incidente por esa frecuencia.", en: "Multiply the cost per incident by that frequency." },
              { es: "Compara con el costo anual del control: si el control cuesta menos, conviene.", en: "Compare with the control's annual cost: if the control costs less, it is worth it." },
            ],
            example: {
              es: "Un ransomware costaría $150,000 y se espera una vez cada 2 años. Frecuencia = 1 ÷ 2 = 0.5. Pérdida anual esperada = 150,000 × 0.5 = **$75,000**. Un respaldo que cuesta $30,000 al año y lo evita sí conviene.",
              en: "A ransomware attack would cost $150,000 and is expected once every 2 years. Frequency = 1 ÷ 2 = 0.5. Expected annual loss = 150,000 × 0.5 = **$75,000**. A backup that costs $30,000 a year and prevents it is worth it.",
            },
            mistake: {
              es: "Multiplicar por el número de años (2) en lugar de por la frecuencia anual (0.5).",
              en: "Multiplying by the number of years (2) instead of by the annual frequency (0.5).",
            },
          },
        ],
      },
    ],
    examples: [
      {
        title: { es: "Correo falso de cambio de cuenta bancaria", en: "Fake bank-account change email" },
        problem: {
          es: "Cuentas por pagar recibe un correo, aparentemente del proveedor principal, que pide pagar la factura de $180,000 a una nueva CLABE. El dominio del correo tiene una letra distinta. ¿Qué principio de seguridad está en juego y qué debe hacer el equipo?",
          en: "Accounts payable receives an email, apparently from the main supplier, asking to pay the $180,000 invoice to a new bank account (CLABE). The email domain has one different letter. Which security principle is at stake and what should the team do?",
        },
        steps: [
          { es: "Identifica el ataque: phishing dirigido para desviar un pago.", en: "Identify the attack: targeted phishing to divert a payment." },
          { es: "Principio afectado: integridad del catálogo de proveedores (la CLABE correcta).", en: "Principle affected: integrity of the supplier master data (the correct CLABE)." },
          { es: "Control: confirmar el cambio por un canal distinto, con un teléfono ya registrado, nunca con el del correo.", en: "Control: confirm the change through a different channel, using a phone number already on file, never the one in the email." },
          { es: "Control adicional: que el cambio de CLABE lo apruebe una segunda persona (segregación de funciones).", en: "Additional control: have a second person approve the CLABE change (segregation of duties)." },
        ],
        result: {
          es: "Se protege la integridad de los datos de pago con verificación por otro canal y doble aprobación; así se evita perder $180,000.",
          en: "The integrity of payment data is protected with verification through another channel and dual approval; this avoids losing $180,000.",
        },
      },
      {
        title: { es: "Priorizar dos riesgos con pérdida esperada", en: "Prioritizing two risks with expected loss" },
        problem: {
          es: "Riesgo A: fuga de datos de clientes, costo estimado $1,200,000, frecuencia 0.1 al año. Riesgo B: caída del sistema de cobro, costo $60,000 por evento, frecuencia 3 veces al año. ¿Cuál atender primero? (Cifras hipotéticas.)",
          en: "Risk A: customer data leak, estimated cost $1,200,000, frequency 0.1 per year. Risk B: payment system outage, cost $60,000 per event, frequency 3 times a year. Which should be addressed first? (Hypothetical figures.)",
        },
        steps: [
          { es: "A: 1,200,000 × 0.1 = $120,000 al año.", en: "A: 1,200,000 × 0.1 = $120,000 a year." },
          { es: "B: 60,000 × 3 = $180,000 al año.", en: "B: 60,000 × 3 = $180,000 a year." },
          { es: "Compara: B tiene mayor pérdida esperada, aunque A tiene un impacto por evento mucho mayor.", en: "Compare: B has the higher expected loss, although A has a much larger impact per event." },
        ],
        result: {
          es: "Por pérdida esperada, B va primero ($180,000 contra $120,000). Pero A no se descuida: su impacto reputacional y legal puede ser grave, así que conviene tratar ambos.",
          en: "By expected loss, B goes first ($180,000 vs $120,000). But A is not neglected: its reputational and legal impact can be severe, so both should be treated.",
        },
      },
    ],
    keyPoints: [
      { es: "Gobernanza = reglas y roles: dueño del dato decide, custodio cuida la calidad.", en: "Governance = rules and roles: the data owner decides, the steward cares for quality." },
      { es: "Calidad: exactitud, completitud, consistencia, oportunidad y unicidad.", en: "Quality: accuracy, completeness, consistency, timeliness and uniqueness." },
      { es: "Datos sensibles (salud, religión, origen étnico…) requieren más protección.", en: "Sensitive data (health, religion, ethnic origin…) requires more protection." },
      { es: "Derechos ARCO: Acceso, Rectificación, Cancelación y Oposición.", en: "ARCO rights: Access, Rectification, Cancellation and Opposition." },
      { es: "Seguridad = Confidencialidad, Integridad y Disponibilidad.", en: "Security = Confidentiality, Integrity and Availability." },
      { es: "Pérdida anual esperada = costo por incidente × frecuencia anual.", en: "Expected annual loss = cost per incident × annual frequency." },
    ],
    normativeNote: NOTE_DATA,
    exerciseIds: ['TEC-18-E1', 'TEC-18-E2', 'TEC-18-E3', 'TEC-18-E4', 'TEC-18-E5', 'TEC-18-E6'],
  },
]

export const exercises: Exercise[] = [
  // ═════════════════════════ TEC-13 ═════════════════════════
  {
    id: 'TEC-13-E1',
    level: 2,
    module: 'TEC-13',
    kind: 'mcq',
    flavor: 'concept',
    prompt: {
      es: "Un banco quiere un sistema que redacte en segundos respuestas personalizadas a las quejas de sus clientes. ¿Qué tipo de IA necesita principalmente?",
      en: "A bank wants a system that drafts personalized replies to customer complaints in seconds. What type of AI does it mainly need?",
    },
    options: [
      { id: 'TEC-13-E1-a', text: { es: "IA generativa, porque debe crear texto nuevo", en: "Generative AI, because it must create new text" } },
      { id: 'TEC-13-E1-b', text: { es: "IA predictiva de regresión, porque debe estimar un número", en: "Predictive regression AI, because it must estimate a number" } },
      { id: 'TEC-13-E1-c', text: { es: "Una hoja de cálculo con fórmulas fijas", en: "A spreadsheet with fixed formulas" } },
      { id: 'TEC-13-E1-d', text: { es: "Un modelo de segmentación de clientes", en: "A customer segmentation model" } },
    ],
    correctOptionId: 'TEC-13-E1-a',
    explanation: {
      es: "Redactar respuestas es crear contenido nuevo: eso hace la IA generativa. La regresión estima números y la segmentación agrupa clientes; ninguna redacta texto. Error común: llamar \"predictiva\" a cualquier IA; la predictiva estima o clasifica, no escribe.",
      en: "Drafting replies is creating new content: that is what generative AI does. Regression estimates numbers and segmentation groups customers; neither writes text. Common mistake: calling any AI \"predictive\"; predictive AI estimates or classifies, it does not write.",
    },
    difficulty: 1,
    points: 10,
    competency: 'ai-business',
  },
  {
    id: 'TEC-13-E2',
    level: 2,
    module: 'TEC-13',
    kind: 'classify',
    flavor: 'concept',
    prompt: {
      es: "Clasifica cada tarea empresarial según lo que hace la IA en ella: predecir, clasificar, generar o extraer.",
      en: "Classify each business task by what the AI does in it: predict, classify, generate or extract.",
    },
    categories: [
      { id: 'TEC-13-E2-c1', label: { es: "Predecir un número", en: "Predict a number" } },
      { id: 'TEC-13-E2-c2', label: { es: "Clasificar (poner etiqueta)", en: "Classify (assign a label)" } },
      { id: 'TEC-13-E2-c3', label: { es: "Generar contenido", en: "Generate content" } },
      { id: 'TEC-13-E2-c4', label: { es: "Extraer datos de documentos", en: "Extract data from documents" } },
    ],
    items: [
      { id: 'TEC-13-E2-i1', label: { es: "Estimar el flujo de efectivo de las próximas 8 semanas", en: "Estimate cash flow for the next 8 weeks" }, correctCategoryId: 'TEC-13-E2-c1' },
      { id: 'TEC-13-E2-i2', label: { es: "Marcar cada transferencia como normal o sospechosa", en: "Flag each transfer as normal or suspicious" }, correctCategoryId: 'TEC-13-E2-c2' },
      { id: 'TEC-13-E2-i3', label: { es: "Redactar el resumen ejecutivo del reporte mensual", en: "Draft the executive summary of the monthly report" }, correctCategoryId: 'TEC-13-E2-c3' },
      { id: 'TEC-13-E2-i4', label: { es: "Leer el RFC, la fecha y el total de facturas escaneadas", en: "Read the RFC, date and total from scanned invoices" }, correctCategoryId: 'TEC-13-E2-c4' },
      { id: 'TEC-13-E2-i5', label: { es: "Calcular cuántas unidades se venderán en el Buen Fin", en: "Estimate how many units will sell during Buen Fin" }, correctCategoryId: 'TEC-13-E2-c1' },
      { id: 'TEC-13-E2-i6', label: { es: "Decidir si un correo entrante es queja, pedido o factura", en: "Decide whether an incoming email is a complaint, an order or an invoice" }, correctCategoryId: 'TEC-13-E2-c2' },
    ],
    explanation: {
      es: "Flujo de efectivo y unidades del Buen Fin son números futuros (predecir). Marcar transferencias o tipos de correo es poner etiquetas (clasificar). El resumen ejecutivo es texto nuevo (generar). Leer datos de facturas es extraer. Error común: confundir extraer con clasificar; extraer copia datos que ya están en el documento.",
      en: "Cash flow and Buen Fin units are future numbers (predict). Flagging transfers or email types is assigning labels (classify). The executive summary is new text (generate). Reading invoice data is extracting. Common mistake: confusing extracting with classifying; extracting copies data already in the document.",
    },
    difficulty: 2,
    points: 15,
    competency: 'ai-business',
  },
  {
    id: 'TEC-13-E3',
    level: 2,
    module: 'TEC-13',
    kind: 'numeric',
    flavor: 'case',
    context: {
      es: "Una tienda en línea paga en total $200,000 el primer año por un sistema de recomendaciones con IA (licencia, implementación y capacitación). Ese año el sistema genera $320,000 de utilidad adicional. (Cifras hipotéticas.)",
      en: "An online store pays a total of $200,000 in the first year for an AI recommendation system (license, implementation and training). That year the system generates $320,000 of additional profit. (Hypothetical figures.)",
    },
    prompt: {
      es: "¿Cuál es el ROI del primer año del sistema de recomendaciones, en porcentaje?",
      en: "What is the recommendation system's first-year ROI, as a percentage?",
    },
    answer: 60,
    unit: '%',
    decimals: 0,
    tolerance: { abs: 0.01 },
    explanation: {
      es: "ROI = (320,000 − 200,000) ÷ 200,000 × 100 = 120,000 ÷ 200,000 × 100 = 60%. Error común: dividir el beneficio total entre el costo (320,000 ÷ 200,000 = 160%) sin restar primero el costo; eso da cuánto regresa, no cuánto se gana.",
      en: "ROI = (320,000 − 200,000) ÷ 200,000 × 100 = 120,000 ÷ 200,000 × 100 = 60%. Common mistake: dividing the total benefit by the cost (320,000 ÷ 200,000 = 160%) without first subtracting the cost; that shows how much comes back, not how much is earned.",
    },
    difficulty: 1,
    points: 10,
    competency: 'ai-business',
  },
  {
    id: 'TEC-13-E4',
    level: 2,
    module: 'TEC-13',
    kind: 'truefalse',
    flavor: 'concept',
    prompt: {
      es: "Si un asistente de IA generativa da una cifra fiscal con mucha seguridad y buena redacción, se puede usar sin verificarla porque los modelos no inventan datos.",
      en: "If a generative AI assistant gives a tax figure confidently and in well-written form, it can be used without checking because models do not invent data.",
    },
    answer: false,
    explanation: {
      es: "Falso. La IA generativa puede alucinar: inventar datos que suenan creíbles. Por eso una persona debe verificar cifras, leyes o montos en fuentes oficiales. Error común: confundir buena redacción con exactitud.",
      en: "False. Generative AI can hallucinate: invent data that sounds believable. That is why a person must check figures, laws or amounts against official sources. Common mistake: confusing good writing with accuracy.",
    },
    difficulty: 1,
    points: 10,
    competency: 'ai-business',
  },
  {
    id: 'TEC-13-E5',
    level: 2,
    module: 'TEC-13',
    kind: 'mcq',
    flavor: 'case',
    context: {
      es: "Una cadena de restaurantes califica de 1 a 5 cuatro ideas de IA (valor, facilidad): pronóstico de compras de insumos (4, 4); robot que negocia con proveedores (5, 1); chatbot de reservaciones (3, 5); análisis de reseñas en redes (2, 3).",
      en: "A restaurant chain scores four AI ideas from 1 to 5 (value, ease): forecasting ingredient purchases (4, 4); robot that negotiates with suppliers (5, 1); reservations chatbot (3, 5); social-media review analysis (2, 3).",
    },
    prompt: {
      es: "Con la matriz de valor contra facilidad, ¿qué idea de IA debe implementar primero la cadena de restaurantes?",
      en: "Using the value-versus-ease matrix, which AI idea should the restaurant chain implement first?",
    },
    options: [
      { id: 'TEC-13-E5-a', text: { es: "Pronóstico de compras de insumos (16 puntos)", en: "Ingredient purchase forecasting (16 points)" } },
      { id: 'TEC-13-E5-b', text: { es: "Robot que negocia con proveedores, porque tiene el mayor valor", en: "Supplier-negotiating robot, because it has the highest value" } },
      { id: 'TEC-13-E5-c', text: { es: "Chatbot de reservaciones, porque es el más fácil", en: "Reservations chatbot, because it is the easiest" } },
      { id: 'TEC-13-E5-d', text: { es: "Análisis de reseñas en redes (6 puntos)", en: "Social-media review analysis (6 points)" } },
    ],
    correctOptionId: 'TEC-13-E5-a',
    explanation: {
      es: "Puntajes: pronóstico 4 × 4 = 16; robot 5 × 1 = 5; chatbot 3 × 5 = 15; reseñas 2 × 3 = 6. Gana el pronóstico de insumos. Error común: mirar solo el valor (robot) o solo la facilidad (chatbot); la matriz combina ambos.",
      en: "Scores: forecasting 4 × 4 = 16; robot 5 × 1 = 5; chatbot 3 × 5 = 15; reviews 2 × 3 = 6. Ingredient forecasting wins. Common mistake: looking only at value (robot) or only at ease (chatbot); the matrix combines both.",
    },
    difficulty: 2,
    points: 15,
    competency: 'ai-business',
  },
  {
    id: 'TEC-13-E6',
    level: 2,
    module: 'TEC-13',
    kind: 'multi',
    flavor: 'case',
    context: {
      es: "Una financiera quiere usar IA para aprobar créditos personales de forma automática con el historial de sus clientes.",
      en: "A lender wants to use AI to approve personal loans automatically using its customers' history.",
    },
    prompt: {
      es: "¿Qué medidas reducen los riesgos de aprobar créditos con IA? Selecciona todas las que apliquen.",
      en: "Which measures reduce the risks of approving loans with AI? Select all that apply.",
    },
    options: [
      { id: 'TEC-13-E6-a', text: { es: "Revisar si el modelo rechaza más a ciertos grupos sin una razón de riesgo (sesgo)", en: "Check whether the model rejects certain groups more without a risk reason (bias)" } },
      { id: 'TEC-13-E6-b', text: { es: "Que una persona revise los rechazos dudosos y los montos altos", en: "Have a person review doubtful rejections and large amounts" } },
      { id: 'TEC-13-E6-c', text: { es: "Cargar datos de clientes en cualquier herramienta gratuita de internet para entrenar más rápido", en: "Load customer data into any free internet tool to train faster" } },
      { id: 'TEC-13-E6-d', text: { es: "Medir los resultados del modelo cada mes y compararlos con los pagos reales", en: "Measure the model's results every month and compare them with actual payments" } },
      { id: 'TEC-13-E6-e', text: { es: "Eliminar toda supervisión humana para que las decisiones sean más rápidas", en: "Remove all human oversight so decisions are faster" } },
    ],
    correctOptionIds: ['TEC-13-E6-a', 'TEC-13-E6-b', 'TEC-13-E6-d'],
    explanation: {
      es: "Revisar sesgos, mantener humano en el circuito y monitorear resultados reducen riesgos. Cargar datos en herramientas no autorizadas expone información confidencial, y quitar la supervisión deja errores sin detectar. Error común: pensar que más automatización siempre es mejor.",
      en: "Checking for bias, keeping a human in the loop and monitoring results reduce risks. Loading data into unauthorized tools exposes confidential information, and removing oversight leaves errors undetected. Common mistake: thinking more automation is always better.",
    },
    difficulty: 2,
    points: 15,
    competency: 'ai-business',
  },

  // ═════════════════════════ TEC-14 ═════════════════════════
  {
    id: 'TEC-14-E1',
    level: 2,
    module: 'TEC-14',
    kind: 'classify',
    flavor: 'concept',
    prompt: {
      es: "Clasifica cada problema de machine learning según su tipo: regresión, clasificación o no supervisado.",
      en: "Classify each machine learning problem by type: regression, classification or unsupervised.",
    },
    categories: [
      { id: 'TEC-14-E1-c1', label: { es: "Regresión (supervisado, número)", en: "Regression (supervised, number)" } },
      { id: 'TEC-14-E1-c2', label: { es: "Clasificación (supervisado, categoría)", en: "Classification (supervised, category)" } },
      { id: 'TEC-14-E1-c3', label: { es: "No supervisado (sin etiqueta)", en: "Unsupervised (no label)" } },
    ],
    items: [
      { id: 'TEC-14-E1-i1', label: { es: "Estimar el precio de venta de un departamento", en: "Estimate the sale price of an apartment" }, correctCategoryId: 'TEC-14-E1-c1' },
      { id: 'TEC-14-E1-i2', label: { es: "Predecir si un cliente pagará o no su crédito", en: "Predict whether a customer will repay a loan or not" }, correctCategoryId: 'TEC-14-E1-c2' },
      { id: 'TEC-14-E1-i3', label: { es: "Agrupar clientes en perfiles según sus compras, sin grupos definidos antes", en: "Group customers into profiles by their purchases, with no predefined groups" }, correctCategoryId: 'TEC-14-E1-c3' },
      { id: 'TEC-14-E1-i4', label: { es: "Estimar cuántos litros de gasolina venderá una estación mañana", en: "Estimate how many liters of gasoline a station will sell tomorrow" }, correctCategoryId: 'TEC-14-E1-c1' },
      { id: 'TEC-14-E1-i5', label: { es: "Decidir si una reseña es positiva, neutral o negativa", en: "Decide whether a review is positive, neutral or negative" }, correctCategoryId: 'TEC-14-E1-c2' },
      { id: 'TEC-14-E1-i6', label: { es: "Encontrar facturas con patrones raros sin ejemplos marcados de fraude", en: "Find invoices with unusual patterns without labeled fraud examples" }, correctCategoryId: 'TEC-14-E1-c3' },
    ],
    explanation: {
      es: "Precio y litros son números: regresión. Pagar o no y el tono de una reseña son categorías: clasificación. Agrupar clientes o hallar facturas raras sin etiquetas es no supervisado. Error común: creer que \"positiva, neutral, negativa\" es regresión por tener orden; siguen siendo categorías.",
      en: "Price and liters are numbers: regression. Repaying or not and a review's tone are categories: classification. Grouping customers or finding unusual invoices without labels is unsupervised. Common mistake: thinking \"positive, neutral, negative\" is regression because it has an order; they are still categories.",
    },
    difficulty: 1,
    points: 15,
    competency: 'machine-learning',
  },
  {
    id: 'TEC-14-E2',
    level: 2,
    module: 'TEC-14',
    kind: 'mcq',
    flavor: 'concept',
    context: {
      es: "Un modelo para predecir qué clientes cancelarán su tarjeta usa como datos de entrada la edad, el saldo y el número de quejas, y aprende con el dato histórico de si canceló o no.",
      en: "A model to predict which customers will cancel their card uses age, balance and number of complaints as inputs, and learns from the historical record of whether they canceled or not.",
    },
    prompt: {
      es: "En este modelo de cancelación de tarjetas, ¿cuál es la etiqueta?",
      en: "In this card-cancellation model, what is the label?",
    },
    options: [
      { id: 'TEC-14-E2-a', text: { es: "Si el cliente canceló o no", en: "Whether the customer canceled or not" } },
      { id: 'TEC-14-E2-b', text: { es: "La edad del cliente", en: "The customer's age" } },
      { id: 'TEC-14-E2-c', text: { es: "El número de quejas", en: "The number of complaints" } },
      { id: 'TEC-14-E2-d', text: { es: "El saldo de la tarjeta", en: "The card balance" } },
    ],
    correctOptionId: 'TEC-14-E2-a',
    explanation: {
      es: "La etiqueta es lo que se quiere predecir: si cancela o no. Edad, saldo y quejas son variables (features) que el modelo usa para predecirla. Error común: pensar que la variable más importante, como las quejas, es la etiqueta.",
      en: "The label is what you want to predict: whether the customer cancels or not. Age, balance and complaints are features the model uses to predict it. Common mistake: thinking the most important feature, such as complaints, is the label.",
    },
    difficulty: 1,
    points: 10,
    competency: 'machine-learning',
  },
  {
    id: 'TEC-14-E3',
    level: 2,
    module: 'TEC-14',
    kind: 'fields',
    flavor: 'case',
    context: {
      es: "Un modelo que detecta facturas apócrifas revisó 200 facturas de prueba: verdaderos positivos 40, falsos positivos 10, falsos negativos 20 y verdaderos negativos 130.",
      en: "A model that detects fake invoices reviewed 200 test invoices: true positives 40, false positives 10, false negatives 20 and true negatives 130.",
    },
    prompt: {
      es: "Calcula la exactitud, la precisión y la sensibilidad del detector de facturas apócrifas, en porcentaje con dos decimales.",
      en: "Compute the fake-invoice detector's accuracy, precision and recall, as percentages with two decimals.",
    },
    fields: [
      { id: 'f1', label: { es: "Exactitud (%)", en: "Accuracy (%)" }, answer: 85, unit: '%', tolerance: { abs: 0.01 } },
      { id: 'f2', label: { es: "Precisión (%)", en: "Precision (%)" }, answer: 80, unit: '%', tolerance: { abs: 0.01 } },
      { id: 'f3', label: { es: "Sensibilidad (%)", en: "Recall (%)" }, answer: 66.67, unit: '%', tolerance: { abs: 0.01 } },
    ],
    explanation: {
      es: "Exactitud = (40 + 130) ÷ 200 = 85%. Precisión = 40 ÷ (40 + 10) = 80%. Sensibilidad = 40 ÷ (40 + 20) = 66.67%. Error común: intercambiar FP y FN; la precisión usa los falsos positivos (alertas falsas) y la sensibilidad los falsos negativos (fraudes que se escaparon).",
      en: "Accuracy = (40 + 130) ÷ 200 = 85%. Precision = 40 ÷ (40 + 10) = 80%. Recall = 40 ÷ (40 + 20) = 66.67%. Common mistake: swapping FP and FN; precision uses false positives (false alerts) and recall uses false negatives (frauds that slipped through).",
    },
    difficulty: 2,
    points: 20,
    competency: 'machine-learning',
  },
  {
    id: 'TEC-14-E4',
    level: 2,
    module: 'TEC-14',
    kind: 'mcq',
    flavor: 'interpret',
    context: {
      es: "Un modelo de riesgo crediticio acierta 99% con los datos de entrenamiento, pero solo 68% con datos de prueba que nunca vio.",
      en: "A credit-risk model is right 99% of the time on training data, but only 68% on test data it never saw.",
    },
    prompt: {
      es: "¿Qué indica la gran diferencia entre el desempeño de entrenamiento y el de prueba del modelo de riesgo crediticio?",
      en: "What does the large gap between the credit-risk model's training and test performance indicate?",
    },
    options: [
      { id: 'TEC-14-E4-a', text: { es: "Sobreajuste: memorizó los ejemplos y no generaliza a casos nuevos", en: "Overfitting: it memorized the examples and does not generalize to new cases" } },
      { id: 'TEC-14-E4-b', text: { es: "Que el modelo es excelente, porque lo que importa es el 99%", en: "That the model is excellent, because the 99% is what matters" } },
      { id: 'TEC-14-E4-c', text: { es: "Que los datos de prueba están mal y deben eliminarse", en: "That the test data is wrong and should be discarded" } },
      { id: 'TEC-14-E4-d', text: { es: "Que es un problema no supervisado", en: "That it is an unsupervised problem" } },
    ],
    correctOptionId: 'TEC-14-E4-a',
    explanation: {
      es: "Una brecha grande entre entrenamiento y prueba es la señal clásica de sobreajuste. El desempeño que importa es el de prueba, porque refleja casos nuevos. Error común: presumir el resultado de entrenamiento o descartar la prueba porque \"salió mal\".",
      en: "A large gap between training and testing is the classic sign of overfitting. The performance that matters is the test one, because it reflects new cases. Common mistake: boasting about the training result or discarding the test because it \"went badly\".",
    },
    difficulty: 1,
    points: 10,
    competency: 'machine-learning',
  },
  {
    id: 'TEC-14-E5',
    level: 2,
    module: 'TEC-14',
    kind: 'truefalse',
    flavor: 'interpret',
    prompt: {
      es: "Si solo 1 de cada 100 compras con tarjeta es fraude, un modelo que siempre responde \"no es fraude\" tiene 99% de exactitud y aun así no sirve para detectar fraudes.",
      en: "If only 1 in 100 card purchases is fraud, a model that always answers \"not fraud\" has 99% accuracy and is still useless for detecting fraud.",
    },
    answer: true,
    explanation: {
      es: "Verdadero. Acierta las 99 compras normales (99% de exactitud), pero su sensibilidad es 0%: no atrapa ningún fraude. Con casos raros hay que mirar precisión y sensibilidad. Error común: juzgar un modelo solo por su exactitud.",
      en: "True. It gets the 99 normal purchases right (99% accuracy), but its recall is 0%: it catches no fraud. With rare cases you must look at precision and recall. Common mistake: judging a model only by its accuracy.",
    },
    difficulty: 1,
    points: 10,
    competency: 'machine-learning',
  },
  {
    id: 'TEC-14-E6',
    level: 2,
    module: 'TEC-14',
    kind: 'formula',
    flavor: 'concept',
    prompt: {
      es: "Completa la fórmula de la sensibilidad (recall) de un clasificador.",
      en: "Complete the formula for a classifier's recall.",
    },
    template: 'Sensibilidad / Recall = {{b1}} ÷ ({{b1}} + {{b2}})',
    blanks: [
      {
        id: 'b1',
        options: [
          { id: 'TEC-14-E6-b1-a', text: { es: "Verdaderos positivos (VP)", en: "True positives (TP)" } },
          { id: 'TEC-14-E6-b1-b', text: { es: "Verdaderos negativos (VN)", en: "True negatives (TN)" } },
          { id: 'TEC-14-E6-b1-c', text: { es: "Total de casos", en: "Total cases" } },
        ],
        correctOptionId: 'TEC-14-E6-b1-a',
      },
      {
        id: 'b2',
        options: [
          { id: 'TEC-14-E6-b2-a', text: { es: "Falsos positivos (FP)", en: "False positives (FP)" } },
          { id: 'TEC-14-E6-b2-b', text: { es: "Falsos negativos (FN)", en: "False negatives (FN)" } },
          { id: 'TEC-14-E6-b2-c', text: { es: "Verdaderos negativos (VN)", en: "True negatives (TN)" } },
        ],
        correctOptionId: 'TEC-14-E6-b2-b',
      },
    ],
    explanation: {
      es: "Sensibilidad = VP ÷ (VP + FN): de todos los positivos reales (los que atrapó más los que se le escaparon), qué parte detectó. Error común: poner FP en el denominador; eso es la precisión, que mide qué tan confiables son las alertas.",
      en: "Recall = TP ÷ (TP + FN): of all real positives (those caught plus those missed), what share it detected. Common mistake: putting FP in the denominator; that is precision, which measures how reliable the alerts are.",
    },
    difficulty: 2,
    points: 15,
    competency: 'machine-learning',
  },

  // ═════════════════════════ TEC-15 ═════════════════════════
  {
    id: 'TEC-15-E1',
    level: 2,
    module: 'TEC-15',
    kind: 'classify',
    flavor: 'concept',
    prompt: {
      es: "Clasifica cada pregunta de negocio según el tipo de analítica que responde.",
      en: "Classify each business question by the type of analytics it answers.",
    },
    categories: [
      { id: 'TEC-15-E1-c1', label: { es: "Descriptiva", en: "Descriptive" } },
      { id: 'TEC-15-E1-c2', label: { es: "Diagnóstica", en: "Diagnostic" } },
      { id: 'TEC-15-E1-c3', label: { es: "Predictiva", en: "Predictive" } },
      { id: 'TEC-15-E1-c4', label: { es: "Prescriptiva", en: "Prescriptive" } },
    ],
    items: [
      { id: 'TEC-15-E1-i1', label: { es: "¿Cuánto vendimos por sucursal el trimestre pasado?", en: "How much did we sell per branch last quarter?" }, correctCategoryId: 'TEC-15-E1-c1' },
      { id: 'TEC-15-E1-i2', label: { es: "¿Por qué aumentaron las devoluciones en junio?", en: "Why did returns increase in June?" }, correctCategoryId: 'TEC-15-E1-c2' },
      { id: 'TEC-15-E1-i3', label: { es: "¿Cuántos clientes es probable que cancelen el próximo mes?", en: "How many customers are likely to cancel next month?" }, correctCategoryId: 'TEC-15-E1-c3' },
      { id: 'TEC-15-E1-i4', label: { es: "¿Qué descuento conviene ofrecer a cada cliente para retenerlo con el menor costo?", en: "What discount should we offer each customer to retain them at the lowest cost?" }, correctCategoryId: 'TEC-15-E1-c4' },
      { id: 'TEC-15-E1-i5', label: { es: "¿Cuál será la demanda de uniformes escolares en agosto?", en: "What will the demand for school uniforms be in August?" }, correctCategoryId: 'TEC-15-E1-c3' },
    ],
    explanation: {
      es: "Ventas pasadas = descriptiva (qué pasó). Causa de devoluciones = diagnóstica (por qué). Cancelaciones y demanda futuras = predictiva (qué pasará). Elegir el descuento óptimo = prescriptiva (qué hacer). Error común: llamar predictiva a la pregunta del descuento; no solo estima, recomienda una acción.",
      en: "Past sales = descriptive (what happened). Cause of returns = diagnostic (why). Future cancellations and demand = predictive (what will happen). Choosing the optimal discount = prescriptive (what to do). Common mistake: calling the discount question predictive; it does not just estimate, it recommends an action.",
    },
    difficulty: 1,
    points: 15,
    competency: 'predictive-analytics',
  },
  {
    id: 'TEC-15-E2',
    level: 2,
    module: 'TEC-15',
    kind: 'numeric',
    flavor: 'case',
    context: {
      es: "Una ferretería registró ventas de pintura de $84,000 en julio, $90,000 en agosto y $96,000 en septiembre.",
      en: "A hardware store recorded paint sales of $84,000 in July, $90,000 in August and $96,000 in September.",
    },
    prompt: {
      es: "Con un promedio móvil de 3 meses, ¿cuál es el pronóstico de ventas de pintura para octubre, en pesos?",
      en: "Using a 3-month moving average, what is the paint sales forecast for October, in pesos?",
    },
    answer: 90000,
    unit: 'MXN',
    decimals: 0,
    tolerance: { abs: 0.5 },
    explanation: {
      es: "(84,000 + 90,000 + 96,000) ÷ 3 = 270,000 ÷ 3 = $90,000. Nota que, con ventas en ascenso, el promedio móvil queda por debajo del último mes: reacciona tarde a la tendencia. Error común: dividir entre 2 o tomar solo el último mes.",
      en: "(84,000 + 90,000 + 96,000) ÷ 3 = 270,000 ÷ 3 = $90,000. Note that, with rising sales, the moving average falls below the last month: it reacts late to the trend. Common mistake: dividing by 2 or taking only the last month.",
    },
    difficulty: 1,
    points: 10,
    competency: 'predictive-analytics',
  },
  {
    id: 'TEC-15-E3',
    level: 2,
    module: 'TEC-15',
    kind: 'numeric',
    flavor: 'case',
    context: {
      es: "Un analista estimó con datos históricos la recta: Ventas mensuales = 50,000 + 2.5 × (gasto en publicidad). El próximo mes se gastarán $20,000 en publicidad. (Modelo hipotético.)",
      en: "An analyst estimated with historical data the line: Monthly sales = 50,000 + 2.5 × (advertising spending). Next month $20,000 will be spent on advertising. (Hypothetical model.)",
    },
    prompt: {
      es: "Según la recta de regresión del analista, ¿cuántas ventas mensuales se pronostican, en pesos?",
      en: "According to the analyst's regression line, what monthly sales are forecast, in pesos?",
    },
    answer: 100000,
    unit: 'MXN',
    decimals: 0,
    tolerance: { abs: 0.5 },
    explanation: {
      es: "Ventas = 50,000 + 2.5 × 20,000 = 50,000 + 50,000 = $100,000. La pendiente 2.5 indica que cada peso en publicidad se asocia con $2.50 de ventas. Error común: olvidar sumar la ordenada al origen (50,000) y responder solo 50,000.",
      en: "Sales = 50,000 + 2.5 × 20,000 = 50,000 + 50,000 = $100,000. The slope 2.5 means each peso in advertising is associated with $2.50 in sales. Common mistake: forgetting to add the intercept (50,000) and answering only 50,000.",
    },
    difficulty: 1,
    points: 10,
    competency: 'predictive-analytics',
  },
  {
    id: 'TEC-15-E4',
    level: 2,
    module: 'TEC-15',
    kind: 'fields',
    flavor: 'case',
    context: {
      es: "Pronóstico contra ventas reales de tres meses de una distribuidora. Enero: pronóstico $110,000, real $100,000. Febrero: pronóstico $120,000, real $125,000. Marzo: pronóstico $80,000, real $80,000.",
      en: "Forecast versus actual sales for three months at a distributor. January: forecast $110,000, actual $100,000. February: forecast $120,000, actual $125,000. March: forecast $80,000, actual $80,000.",
    },
    prompt: {
      es: "Calcula el MAE (en pesos) y el MAPE (en porcentaje con dos decimales) del pronóstico trimestral de la distribuidora.",
      en: "Compute the MAE (in pesos) and the MAPE (as a percentage with two decimals) of the distributor's quarterly forecast.",
    },
    fields: [
      { id: 'f1', label: { es: "MAE (pesos)", en: "MAE (pesos)" }, answer: 5000, unit: 'MXN', tolerance: { abs: 0.5 } },
      { id: 'f2', label: { es: "MAPE (%)", en: "MAPE (%)" }, answer: 4.67, unit: '%', tolerance: { abs: 0.01 } },
    ],
    explanation: {
      es: "Errores absolutos: |100,000 − 110,000| = 10,000; |125,000 − 120,000| = 5,000; 0. MAE = 15,000 ÷ 3 = $5,000. Errores porcentuales sobre el real: 10,000 ÷ 100,000 = 10%; 5,000 ÷ 125,000 = 4%; 0%. MAPE = 14 ÷ 3 = 4.67%. Error común: dividir entre el pronóstico en vez del real, o dejar que errores positivos y negativos se cancelen.",
      en: "Absolute errors: |100,000 − 110,000| = 10,000; |125,000 − 120,000| = 5,000; 0. MAE = 15,000 ÷ 3 = $5,000. Percentage errors over actual: 10,000 ÷ 100,000 = 10%; 5,000 ÷ 125,000 = 4%; 0%. MAPE = 14 ÷ 3 = 4.67%. Common mistake: dividing by the forecast instead of the actual, or letting positive and negative errors cancel out.",
    },
    difficulty: 2,
    points: 20,
    competency: 'predictive-analytics',
  },
  {
    id: 'TEC-15-E5',
    level: 2,
    module: 'TEC-15',
    kind: 'truefalse',
    flavor: 'interpret',
    prompt: {
      es: "Si en una ciudad las ventas de helado y los casos de quemaduras de sol suben juntos, el análisis prueba que comer helado causa quemaduras.",
      en: "If in a city ice cream sales and sunburn cases rise together, the analysis proves that eating ice cream causes sunburn.",
    },
    answer: false,
    explanation: {
      es: "Falso. Es una correlación: ambas suben por una tercera causa, el calor y el sol. Correlación no es causalidad. Error común: usar una correlación para tomar decisiones como si fuera causa y efecto.",
      en: "False. It is a correlation: both rise because of a third cause, heat and sun. Correlation is not causation. Common mistake: using a correlation to make decisions as if it were cause and effect.",
    },
    difficulty: 1,
    points: 10,
    competency: 'predictive-analytics',
  },
  {
    id: 'TEC-15-E6',
    level: 2,
    module: 'TEC-15',
    kind: 'mcq',
    flavor: 'case',
    context: {
      es: "Un modelo de abandono asigna a cuatro clientes de un gimnasio su probabilidad de irse y lo que pagan al año: Ana 80% y $3,000; Beto 30% y $12,000; Carla 70% y $10,000; Dani 10% y $15,000. El equipo solo puede llamar a uno hoy.",
      en: "A churn model assigns four gym customers their probability of leaving and what they pay per year: Ana 80% and $3,000; Beto 30% and $12,000; Carla 70% and $10,000; Dani 10% and $15,000. The team can only call one today.",
    },
    prompt: {
      es: "Si se prioriza por ingreso esperado en riesgo (probabilidad × pago anual), ¿a qué cliente del gimnasio debe llamar primero el equipo de retención?",
      en: "If priority is given to expected revenue at risk (probability × annual payment), which gym customer should the retention team call first?",
    },
    options: [
      { id: 'TEC-15-E6-a', text: { es: "Carla ($7,000 en riesgo)", en: "Carla ($7,000 at risk)" } },
      { id: 'TEC-15-E6-b', text: { es: "Ana, porque tiene la probabilidad más alta", en: "Ana, because she has the highest probability" } },
      { id: 'TEC-15-E6-c', text: { es: "Dani, porque paga más", en: "Dani, because she pays the most" } },
      { id: 'TEC-15-E6-d', text: { es: "Beto ($3,600 en riesgo)", en: "Beto ($3,600 at risk)" } },
    ],
    correctOptionId: 'TEC-15-E6-a',
    explanation: {
      es: "Ingreso en riesgo: Ana 0.8 × 3,000 = $2,400; Beto 0.3 × 12,000 = $3,600; Carla 0.7 × 10,000 = $7,000; Dani 0.1 × 15,000 = $1,500. Carla va primero. Error común: mirar solo la probabilidad (Ana) o solo el pago (Dani); la decisión combina ambos.",
      en: "Revenue at risk: Ana 0.8 × 3,000 = $2,400; Beto 0.3 × 12,000 = $3,600; Carla 0.7 × 10,000 = $7,000; Dani 0.1 × 15,000 = $1,500. Carla goes first. Common mistake: looking only at probability (Ana) or only at payment (Dani); the decision combines both.",
    },
    difficulty: 2,
    points: 15,
    competency: 'predictive-analytics',
  },

  // ═════════════════════════ TEC-16 ═════════════════════════
  {
    id: 'TEC-16-E1',
    level: 2,
    module: 'TEC-16',
    kind: 'mcq',
    flavor: 'concept',
    prompt: {
      es: "Según la Ley Fintech de México, ¿qué tipo de institución conecta a quienes necesitan financiamiento con muchas personas que aportan dinero a través de una plataforma?",
      en: "Under Mexico's Fintech Law, what type of institution connects those who need financing with many people who contribute money through a platform?",
    },
    options: [
      { id: 'TEC-16-E1-a', text: { es: "Institución de Financiamiento Colectivo (IFC)", en: "Crowdfunding Institution (IFC)" } },
      { id: 'TEC-16-E1-b', text: { es: "Institución de Fondos de Pago Electrónico (IFPE)", en: "Electronic Payment Fund Institution (IFPE)" } },
      { id: 'TEC-16-E1-c', text: { es: "Afore", en: "Afore (retirement fund manager)" } },
      { id: 'TEC-16-E1-d', text: { es: "Casa de bolsa", en: "Brokerage firm" } },
    ],
    correctOptionId: 'TEC-16-E1-a',
    explanation: {
      es: "Las IFC (financiamiento colectivo o crowdfunding) reúnen a muchas personas que financian proyectos o préstamos. Las IFPE manejan cuentas de dinero electrónico para pagos; las afores administran ahorro para el retiro y las casas de bolsa intermedian valores. Error común: confundir IFC con IFPE porque ambas nacieron con la Ley Fintech.",
      en: "IFCs (crowdfunding institutions) gather many people who fund projects or loans. IFPEs manage electronic money accounts for payments; afores manage retirement savings and brokerage firms intermediate securities. Common mistake: confusing IFC with IFPE because both were created by the Fintech Law.",
    },
    difficulty: 1,
    points: 10,
    competency: 'fintech',
  },
  {
    id: 'TEC-16-E2',
    level: 2,
    module: 'TEC-16',
    kind: 'classify',
    flavor: 'concept',
    prompt: {
      es: "Clasifica cada servicio en el segmento fintech al que pertenece.",
      en: "Classify each service into the fintech segment it belongs to.",
    },
    categories: [
      { id: 'TEC-16-E2-c1', label: { es: "Pagos y transferencias", en: "Payments and transfers" } },
      { id: 'TEC-16-E2-c2', label: { es: "Crédito y financiamiento", en: "Credit and financing" } },
      { id: 'TEC-16-E2-c3', label: { es: "Insurtech y regtech", en: "Insurtech and regtech" } },
    ],
    items: [
      { id: 'TEC-16-E2-i1', label: { es: "Terminal que cobra con tarjeta conectada al celular", en: "Card reader connected to a phone" }, correctCategoryId: 'TEC-16-E2-c1' },
      { id: 'TEC-16-E2-i2', label: { es: "App que presta capital de trabajo a pymes analizando sus ventas", en: "App that lends working capital to SMEs by analyzing their sales" }, correctCategoryId: 'TEC-16-E2-c2' },
      { id: 'TEC-16-E2-i3', label: { es: "Seguro de auto que se contrata y cobra por kilómetro desde una app", en: "Car insurance bought and charged per kilometer from an app" }, correctCategoryId: 'TEC-16-E2-c3' },
      { id: 'TEC-16-E2-i4', label: { es: "Cobro con código QR en un puesto del mercado", en: "QR-code payment at a market stall" }, correctCategoryId: 'TEC-16-E2-c1' },
      { id: 'TEC-16-E2-i5', label: { es: "Plataforma donde muchas personas financian un proyecto inmobiliario", en: "Platform where many people fund a real-estate project" }, correctCategoryId: 'TEC-16-E2-c2' },
      { id: 'TEC-16-E2-i6', label: { es: "Software que valida identidad de clientes para cumplir reglas de prevención de lavado", en: "Software that verifies customer identity to meet anti-money-laundering rules" }, correctCategoryId: 'TEC-16-E2-c3' },
    ],
    explanation: {
      es: "Terminal y QR mueven dinero: pagos. Préstamos a pymes y crowdfunding inmobiliario dan financiamiento: crédito. El seguro por kilómetro es insurtech y la validación de identidad para cumplir reglas es regtech. Error común: poner el crowdfunding en pagos; su fin es financiar, no cobrar.",
      en: "The card reader and QR move money: payments. SME loans and real-estate crowdfunding provide financing: credit. Per-kilometer insurance is insurtech and identity verification for compliance is regtech. Common mistake: placing crowdfunding in payments; its purpose is financing, not collecting.",
    },
    difficulty: 1,
    points: 15,
    competency: 'fintech',
  },
  {
    id: 'TEC-16-E3',
    level: 2,
    module: 'TEC-16',
    kind: 'numeric',
    flavor: 'case',
    context: {
      es: "Laura invierte $10,000 durante un año en préstamos de una plataforma de financiamiento colectivo. La tasa anual que pagan los acreditados es 18%; la plataforma cobra una comisión de 2% anual sobre lo invertido, y Laura estima perder 4% de su inversión por préstamos que no se pagan. (Cifras hipotéticas.)",
      en: "Laura invests $10,000 for one year in loans on a crowdfunding platform. The annual rate paid by borrowers is 18%; the platform charges a 2% annual fee on the amount invested, and Laura estimates losing 4% of her investment to loans that are not repaid. (Hypothetical figures.)",
    },
    prompt: {
      es: "¿Cuál es la ganancia neta esperada de Laura en la plataforma de financiamiento colectivo al cabo del año, en pesos?",
      en: "What is Laura's expected net gain on the crowdfunding platform after one year, in pesos?",
    },
    answer: 1200,
    unit: 'MXN',
    decimals: 0,
    tolerance: { abs: 0.5 },
    explanation: {
      es: "Rendimiento neto = 18% − 2% − 4% = 12%; 10,000 × 12% = $1,200. Error común: quedarse con los $1,800 de la tasa bruta y olvidar comisiones y pérdidas por impago, que en crowdfunding son un riesgo real.",
      en: "Net return = 18% − 2% − 4% = 12%; 10,000 × 12% = $1,200. Common mistake: keeping the $1,800 from the gross rate and forgetting fees and default losses, which are a real risk in crowdfunding.",
    },
    difficulty: 2,
    points: 15,
    competency: 'fintech',
  },
  {
    id: 'TEC-16-E4',
    level: 2,
    module: 'TEC-16',
    kind: 'truefalse',
    flavor: 'concept',
    prompt: {
      es: "Escanear las facturas en papel y guardarlas como PDF en una carpeta compartida ya es una transformación digital completa del proceso de cuentas por pagar.",
      en: "Scanning paper invoices and saving them as PDFs in a shared folder is already a complete digital transformation of the accounts payable process.",
    },
    answer: false,
    explanation: {
      es: "Falso. Eso es digitalizar: el proceso sigue igual, solo cambia el papel por archivo. Transformar implica rediseñarlo: recepción automática de facturas electrónicas, validación, conciliación y revisión solo de excepciones. Error común: medir el avance por la cantidad de archivos digitales y no por tiempo, costo y errores.",
      en: "False. That is digitizing: the process stays the same, only paper becomes a file. Transforming means redesigning it: automatic receipt of electronic invoices, validation, reconciliation and review of exceptions only. Common mistake: measuring progress by the number of digital files rather than by time, cost and errors.",
    },
    difficulty: 1,
    points: 10,
    competency: 'fintech',
  },
  {
    id: 'TEC-16-E5',
    level: 2,
    module: 'TEC-16',
    kind: 'mcq',
    flavor: 'case',
    context: {
      es: "Pedro ve en redes una app que promete 8% de rendimiento mensual garantizado prestando a otras personas. No encuentra a la empresa en los padrones oficiales de entidades autorizadas.",
      en: "Pedro sees an app on social media promising a guaranteed 8% monthly return for lending to other people. He cannot find the company in the official registries of authorized entities.",
    },
    prompt: {
      es: "¿Qué es lo más prudente que puede hacer Pedro ante la app de préstamos que no aparece como autorizada?",
      en: "What is the most prudent thing Pedro can do about the lending app that does not appear as authorized?",
    },
    options: [
      { id: 'TEC-16-E5-a', text: { es: "No invertir: no está supervisada y un rendimiento alto garantizado es señal de alerta", en: "Not invest: it is unsupervised and a high guaranteed return is a red flag" } },
      { id: 'TEC-16-E5-b', text: { es: "Invertir poco para probar, porque la app se ve profesional", en: "Invest a little to test it, because the app looks professional" } },
      { id: 'TEC-16-E5-c', text: { es: "Invertir si tiene muchas reseñas positivas en la tienda de apps", en: "Invest if it has many positive reviews in the app store" } },
      { id: 'TEC-16-E5-d', text: { es: "Invertir, porque toda app de préstamos está automáticamente regulada por la Ley Fintech", en: "Invest, because every lending app is automatically regulated by the Fintech Law" } },
    ],
    correctOptionId: 'TEC-16-E5-a',
    explanation: {
      es: "Una plataforma de financiamiento colectivo necesita autorización; sin ella no hay supervisión de la CNBV. Además, ningún rendimiento alto puede garantizarse. Las reseñas y el diseño no sustituyen la autorización. Error común: creer que estar en una tienda de apps equivale a estar regulado.",
      en: "A crowdfunding platform needs authorization; without it there is no CNBV supervision. Moreover, no high return can be guaranteed. Reviews and design do not replace authorization. Common mistake: believing that being in an app store means being regulated.",
    },
    difficulty: 1,
    points: 10,
    competency: 'fintech',
  },
  {
    id: 'TEC-16-E6',
    level: 2,
    module: 'TEC-16',
    kind: 'fields',
    flavor: 'case',
    context: {
      es: "El área de tesorería de una empresa conciliaba a mano 2,000 movimientos bancarios al mes con un costo de $30 por movimiento. Con una conexión automática banco–ERP, el costo baja a $6 por movimiento. La implementación cuesta $144,000. (Cifras hipotéticas.)",
      en: "A company's treasury team manually reconciled 2,000 bank transactions a month at a cost of $30 per transaction. With an automatic bank–ERP connection, the cost drops to $6 per transaction. Implementation costs $144,000. (Hypothetical figures.)",
    },
    prompt: {
      es: "Calcula el ahorro mensual de la conciliación automática y los meses para recuperar la implementación.",
      en: "Compute the monthly saving from automatic reconciliation and the months to recover the implementation.",
    },
    fields: [
      { id: 'f1', label: { es: "Ahorro mensual (pesos)", en: "Monthly saving (pesos)" }, answer: 48000, unit: 'MXN', tolerance: { abs: 0.5 } },
      { id: 'f2', label: { es: "Meses de recuperación", en: "Payback months" }, answer: 3, unit: 'periods', tolerance: { abs: 0.01 } },
    ],
    explanation: {
      es: "Ahorro por movimiento: 30 − 6 = $24; ahorro mensual: 2,000 × 24 = $48,000. Recuperación: 144,000 ÷ 48,000 = 3 meses. Error común: usar el costo nuevo completo (2,000 × 6 = 12,000) como si fuera el ahorro.",
      en: "Saving per transaction: 30 − 6 = $24; monthly saving: 2,000 × 24 = $48,000. Payback: 144,000 ÷ 48,000 = 3 months. Common mistake: using the full new cost (2,000 × 6 = 12,000) as if it were the saving.",
    },
    difficulty: 2,
    points: 15,
    competency: 'fintech',
  },

  // ═════════════════════════ TEC-17 ═════════════════════════
  {
    id: 'TEC-17-E1',
    level: 2,
    module: 'TEC-17',
    kind: 'mcq',
    flavor: 'concept',
    prompt: {
      es: "En una blockchain, ¿por qué es tan difícil alterar un bloque antiguo sin que se note?",
      en: "In a blockchain, why is it so hard to alter an old block without it being noticed?",
    },
    options: [
      { id: 'TEC-17-E1-a', text: { es: "Porque cada bloque guarda el hash del anterior y muchas copias del registro delatarían el cambio", en: "Because each block stores the previous block's hash and many copies of the record would expose the change" } },
      { id: 'TEC-17-E1-b', text: { es: "Porque los bloques se imprimen en papel cada día", en: "Because blocks are printed on paper every day" } },
      { id: 'TEC-17-E1-c', text: { es: "Porque un banco central revisa cada operación", en: "Because a central bank reviews every transaction" } },
      { id: 'TEC-17-E1-d', text: { es: "Porque los datos están escritos en una hoja de cálculo protegida con contraseña", en: "Because the data is written in a password-protected spreadsheet" } },
    ],
    correctOptionId: 'TEC-17-E1-a',
    explanation: {
      es: "Al cambiar un dato cambia su hash; como el siguiente bloque guarda el hash anterior, la cadena se rompe, y las demás copias distribuidas no coinciden. Error común: creer que la seguridad viene de un intermediario central; la blockchain funciona justamente sin uno.",
      en: "Changing data changes its hash; since the next block stores the previous hash, the chain breaks, and the other distributed copies do not match. Common mistake: believing security comes from a central intermediary; blockchain works precisely without one.",
    },
    difficulty: 1,
    points: 10,
    competency: 'blockchain',
  },
  {
    id: 'TEC-17-E2',
    level: 2,
    module: 'TEC-17',
    kind: 'fields',
    flavor: 'case',
    context: {
      es: "Un contrato inteligente reparte cada venta de una canción digital así: 70% al artista, 20% a la productora y 10% a la plataforma. Un cliente paga $2,500 por una licencia de uso comercial.",
      en: "A smart contract splits each sale of a digital song as follows: 70% to the artist, 20% to the producer and 10% to the platform. A customer pays $2,500 for a commercial-use license.",
    },
    prompt: {
      es: "¿Cuánto transfiere el contrato inteligente de regalías a cada parte por la licencia de $2,500?",
      en: "How much does the royalty smart contract transfer to each party for the $2,500 license?",
    },
    fields: [
      { id: 'f1', label: { es: "Artista (pesos)", en: "Artist (pesos)" }, answer: 1750, unit: 'MXN', tolerance: { abs: 0.5 } },
      { id: 'f2', label: { es: "Productora (pesos)", en: "Producer (pesos)" }, answer: 500, unit: 'MXN', tolerance: { abs: 0.5 } },
      { id: 'f3', label: { es: "Plataforma (pesos)", en: "Platform (pesos)" }, answer: 250, unit: 'MXN', tolerance: { abs: 0.5 } },
    ],
    explanation: {
      es: "Artista: 2,500 × 70% = $1,750. Productora: 2,500 × 20% = $500. Plataforma: 2,500 × 10% = $250. Suman $2,500. El contrato reparte en automático, sin liquidaciones manuales. Error común: calcular el porcentaje de la productora sobre lo que queda tras pagar al artista.",
      en: "Artist: 2,500 × 70% = $1,750. Producer: 2,500 × 20% = $500. Platform: 2,500 × 10% = $250. They add up to $2,500. The contract splits automatically, with no manual settlements. Common mistake: computing the producer's percentage on what remains after paying the artist.",
    },
    difficulty: 1,
    points: 15,
    competency: 'blockchain',
  },
  {
    id: 'TEC-17-E3',
    level: 2,
    module: 'TEC-17',
    kind: 'multi',
    flavor: 'concept',
    prompt: {
      es: "¿Cuáles son límites o riesgos reales de los contratos inteligentes? Selecciona todas las que apliquen.",
      en: "Which are real limits or risks of smart contracts? Select all that apply.",
    },
    options: [
      { id: 'TEC-17-E3-a', text: { es: "Dependen de oráculos externos que pueden reportar datos equivocados", en: "They depend on external oracles that can report wrong data" } },
      { id: 'TEC-17-E3-b', text: { es: "Un error en el código se ejecuta igual y puede ser difícil de revertir", en: "A bug in the code runs anyway and can be hard to reverse" } },
      { id: 'TEC-17-E3-c', text: { es: "Por sí solos no sustituyen a un contrato con validez legal", en: "On their own they do not replace a legally valid contract" } },
      { id: 'TEC-17-E3-d', text: { es: "Necesitan que un notario apruebe cada ejecución", en: "They need a notary to approve each execution" } },
      { id: 'TEC-17-E3-e', text: { es: "Nunca pueden manejar dinero ni activos digitales", en: "They can never handle money or digital assets" } },
    ],
    correctOptionIds: ['TEC-17-E3-a', 'TEC-17-E3-b', 'TEC-17-E3-c'],
    explanation: {
      es: "Los contratos inteligentes dependen de oráculos, ejecutan su código aunque tenga errores y no reemplazan por sí solos el contrato legal. No necesitan un notario por ejecución (se ejecutan solos) y sí pueden manejar activos digitales, como en un escrow. Error común: pensar que, por estar en blockchain, el contrato no puede fallar.",
      en: "Smart contracts depend on oracles, run their code even if it has bugs, and do not by themselves replace the legal contract. They do not need a notary per execution (they run by themselves) and they can handle digital assets, as in an escrow. Common mistake: thinking that, because it is on a blockchain, the contract cannot fail.",
    },
    difficulty: 2,
    points: 15,
    competency: 'blockchain',
  },
  {
    id: 'TEC-17-E4',
    level: 2,
    module: 'TEC-17',
    kind: 'mcq',
    flavor: 'case',
    context: {
      es: "Cuatro proyectos piden presupuesto para blockchain: 1) el control de vacaciones de los empleados de una sola empresa; 2) la trazabilidad de lotes de mango entre productores, empacadoras, transportistas y aduanas de varios países; 3) la lista de precios interna de una tienda; 4) la agenda de citas de un consultorio.",
      en: "Four projects request a blockchain budget: 1) vacation tracking for the employees of a single company; 2) traceability of mango batches among growers, packers, carriers and customs in several countries; 3) a store's internal price list; 4) a clinic's appointment book.",
    },
    prompt: {
      es: "¿Cuál de los cuatro proyectos justifica mejor el uso de blockchain?",
      en: "Which of the four projects best justifies using blockchain?",
    },
    options: [
      { id: 'TEC-17-E4-a', text: { es: "La trazabilidad de lotes de mango entre varias empresas y países", en: "Mango batch traceability among several companies and countries" } },
      { id: 'TEC-17-E4-b', text: { es: "El control de vacaciones de una sola empresa", en: "Vacation tracking for a single company" } },
      { id: 'TEC-17-E4-c', text: { es: "La lista de precios interna de la tienda", en: "The store's internal price list" } },
      { id: 'TEC-17-E4-d', text: { es: "La agenda de citas del consultorio", en: "The clinic's appointment book" } },
    ],
    correctOptionId: 'TEC-17-E4-a',
    explanation: {
      es: "Blockchain aporta valor cuando varias partes independientes, sin confianza plena entre sí, escriben en un mismo registro que nadie debe alterar: es el caso del mango. Los otros tres los controla una sola organización y bastan sistemas tradicionales. Error común: usar blockchain por moda, aunque cueste más y sea más lenta.",
      en: "Blockchain adds value when several independent parties, without full trust in each other, write to the same record that no one should alter: that is the mango case. The other three are controlled by a single organization and traditional systems suffice. Common mistake: using blockchain because it is trendy, even if it costs more and is slower.",
    },
    difficulty: 1,
    points: 10,
    competency: 'blockchain',
  },
  {
    id: 'TEC-17-E5',
    level: 2,
    module: 'TEC-17',
    kind: 'numeric',
    flavor: 'case',
    context: {
      es: "Una bodega valuada en $8,000,000 se tokeniza en 40,000 tokens iguales. Marta compra tokens por $60,000. (Cifras hipotéticas.)",
      en: "A warehouse valued at $8,000,000 is tokenized into 40,000 equal tokens. Marta buys $60,000 worth of tokens. (Hypothetical figures.)",
    },
    prompt: {
      es: "¿Qué porcentaje de la bodega tokenizada representan los tokens de Marta?",
      en: "What percentage of the tokenized warehouse do Marta's tokens represent?",
    },
    answer: 0.75,
    unit: '%',
    decimals: 2,
    tolerance: { abs: 0.001 },
    explanation: {
      es: "Precio por token: 8,000,000 ÷ 40,000 = $200. Tokens de Marta: 60,000 ÷ 200 = 300. Porcentaje: 300 ÷ 40,000 × 100 = 0.75% (igual a 60,000 ÷ 8,000,000). Error común: olvidar multiplicar por 100 y responder 0.0075.",
      en: "Price per token: 8,000,000 ÷ 40,000 = $200. Marta's tokens: 60,000 ÷ 200 = 300. Percentage: 300 ÷ 40,000 × 100 = 0.75% (same as 60,000 ÷ 8,000,000). Common mistake: forgetting to multiply by 100 and answering 0.0075.",
    },
    difficulty: 2,
    points: 15,
    competency: 'blockchain',
  },
  {
    id: 'TEC-17-E6',
    level: 2,
    module: 'TEC-17',
    kind: 'truefalse',
    flavor: 'concept',
    prompt: {
      es: "Blockchain y bitcoin son lo mismo: si una empresa usa blockchain, necesariamente está invirtiendo en criptomonedas.",
      en: "Blockchain and bitcoin are the same thing: if a company uses blockchain, it is necessarily investing in cryptocurrencies.",
    },
    answer: false,
    explanation: {
      es: "Falso. Blockchain es la tecnología de registro; bitcoin es solo una de sus aplicaciones. Una empresa puede usar una blockchain privada para trazabilidad o certificados sin tener ninguna criptomoneda. Error común: rechazar o adoptar blockchain pensando solo en la volatilidad de las criptomonedas.",
      en: "False. Blockchain is the recording technology; bitcoin is just one of its applications. A company can use a private blockchain for traceability or certificates without holding any cryptocurrency. Common mistake: rejecting or adopting blockchain thinking only about cryptocurrency volatility.",
    },
    difficulty: 1,
    points: 10,
    competency: 'blockchain',
  },

  // ═════════════════════════ TEC-18 ═════════════════════════
  {
    id: 'TEC-18-E1',
    level: 2,
    module: 'TEC-18',
    kind: 'classify',
    flavor: 'concept',
    prompt: {
      es: "Clasifica cada dato que guarda una empresa: dato personal, dato personal sensible o no es dato personal.",
      en: "Classify each piece of data a company stores: personal data, sensitive personal data or not personal data.",
    },
    categories: [
      { id: 'TEC-18-E1-c1', label: { es: "Dato personal", en: "Personal data" } },
      { id: 'TEC-18-E1-c2', label: { es: "Dato personal sensible", en: "Sensitive personal data" } },
      { id: 'TEC-18-E1-c3', label: { es: "No es dato personal", en: "Not personal data" } },
    ],
    items: [
      { id: 'TEC-18-E1-i1', label: { es: "Correo electrónico y teléfono de un cliente", en: "A customer's email and phone number" }, correctCategoryId: 'TEC-18-E1-c1' },
      { id: 'TEC-18-E1-i2', label: { es: "Diagnóstico médico de un empleado", en: "An employee's medical diagnosis" }, correctCategoryId: 'TEC-18-E1-c2' },
      { id: 'TEC-18-E1-i3', label: { es: "Ventas totales de la empresa en el año", en: "The company's total sales for the year" }, correctCategoryId: 'TEC-18-E1-c3' },
      { id: 'TEC-18-E1-i4', label: { es: "CURP y domicilio de un proveedor persona física", en: "CURP and address of an individual supplier" }, correctCategoryId: 'TEC-18-E1-c1' },
      { id: 'TEC-18-E1-i5', label: { es: "Religión que declaró un candidato en una entrevista", en: "Religion a candidate stated in an interview" }, correctCategoryId: 'TEC-18-E1-c2' },
      { id: 'TEC-18-E1-i6', label: { es: "Precio de lista de un producto", en: "A product's list price" }, correctCategoryId: 'TEC-18-E1-c3' },
    ],
    explanation: {
      es: "Correo, teléfono, CURP y domicilio identifican a una persona: datos personales. Salud y religión son sensibles porque su mal uso puede discriminar. Ventas y precios son datos del negocio, no de una persona. Error común: creer que solo son datos personales los documentos oficiales; un correo o un teléfono también lo son.",
      en: "Email, phone, CURP and address identify a person: personal data. Health and religion are sensitive because misuse can lead to discrimination. Sales and prices are business data, not about a person. Common mistake: believing only official documents are personal data; an email or phone number also is.",
    },
    difficulty: 1,
    points: 15,
    competency: 'data-governance',
  },
  {
    id: 'TEC-18-E2',
    level: 2,
    module: 'TEC-18',
    kind: 'mcq',
    flavor: 'case',
    context: {
      es: "Sofía recibe cada semana promociones por mensaje de una tienda departamental donde compró una vez. Ya no quiere que usen su teléfono para publicidad, aunque sí acepta que lo usen para avisarle de su garantía.",
      en: "Sofía receives promotions by text every week from a department store where she bought once. She no longer wants her phone used for advertising, though she accepts it being used to notify her about her warranty.",
    },
    prompt: {
      es: "¿Qué derecho ARCO debe ejercer Sofía para dejar de recibir publicidad de la tienda departamental?",
      en: "Which ARCO right should Sofía exercise to stop receiving advertising from the department store?",
    },
    options: [
      { id: 'TEC-18-E2-a', text: { es: "Oposición, para negarse a ese uso específico", en: "Opposition, to refuse that specific use" } },
      { id: 'TEC-18-E2-b', text: { es: "Acceso, para saber qué datos tienen de ella", en: "Access, to know what data they hold about her" } },
      { id: 'TEC-18-E2-c', text: { es: "Rectificación, para corregir su número", en: "Rectification, to correct her number" } },
      { id: 'TEC-18-E2-d', text: { es: "Cancelación, aunque así también perdería los avisos de garantía", en: "Cancellation, even though she would also lose the warranty notices" } },
    ],
    correctOptionId: 'TEC-18-E2-a',
    explanation: {
      es: "La oposición permite negarse a un uso concreto (publicidad) sin pedir que se borren todos los datos. Acceso es consultar, rectificación es corregir y cancelación es pedir que los eliminen, lo que le quitaría también los avisos de garantía. Error común: pedir cancelación para todo cuando solo molesta un uso.",
      en: "Opposition lets her refuse a specific use (advertising) without asking for all data to be deleted. Access is consulting, rectification is correcting and cancellation is asking for deletion, which would also remove the warranty notices. Common mistake: requesting cancellation for everything when only one use is bothersome.",
    },
    difficulty: 1,
    points: 10,
    competency: 'data-governance',
  },
  {
    id: 'TEC-18-E3',
    level: 2,
    module: 'TEC-18',
    kind: 'classify',
    flavor: 'case',
    prompt: {
      es: "Clasifica cada incidente según el principio de la tríada CID que afecta principalmente.",
      en: "Classify each incident by the CIA-triad principle it mainly affects.",
    },
    categories: [
      { id: 'TEC-18-E3-c1', label: { es: "Confidencialidad", en: "Confidentiality" } },
      { id: 'TEC-18-E3-c2', label: { es: "Integridad", en: "Integrity" } },
      { id: 'TEC-18-E3-c3', label: { es: "Disponibilidad", en: "Availability" } },
    ],
    items: [
      { id: 'TEC-18-E3-i1', label: { es: "Un exempleado descarga la base de clientes y la vende", en: "A former employee downloads the customer database and sells it" }, correctCategoryId: 'TEC-18-E3-c1' },
      { id: 'TEC-18-E3-i2', label: { es: "Alguien cambia sin autorización la CLABE de un proveedor en el sistema", en: "Someone changes a supplier's bank account number in the system without authorization" }, correctCategoryId: 'TEC-18-E3-c2' },
      { id: 'TEC-18-E3-i3', label: { es: "Un ransomware cifra los servidores y nadie puede facturar por dos días", en: "Ransomware encrypts the servers and no one can invoice for two days" }, correctCategoryId: 'TEC-18-E3-c3' },
      { id: 'TEC-18-E3-i4', label: { es: "Se envía por error la nómina de toda la empresa a un cliente", en: "The whole company's payroll is emailed to a customer by mistake" }, correctCategoryId: 'TEC-18-E3-c1' },
      { id: 'TEC-18-E3-i5', label: { es: "Un empleado modifica montos de facturas ya registradas para ocultar un faltante", en: "An employee alters amounts on already-recorded invoices to hide a shortage" }, correctCategoryId: 'TEC-18-E3-c2' },
      { id: 'TEC-18-E3-i6', label: { es: "Un corte de energía sin respaldo deja fuera de línea la tienda en línea", en: "A power outage with no backup takes the online store offline" }, correctCategoryId: 'TEC-18-E3-c3' },
    ],
    explanation: {
      es: "Venta de la base y envío de la nómina exponen datos a quien no debe verlos: confidencialidad. Cambiar la CLABE o los montos altera los datos: integridad. Ransomware y apagón impiden usar los sistemas: disponibilidad. Error común: clasificar el ransomware como confidencialidad; su efecto principal es dejar sin acceso.",
      en: "Selling the database and emailing payroll expose data to those who should not see it: confidentiality. Changing the account number or amounts alters data: integrity. Ransomware and the outage prevent using the systems: availability. Common mistake: classifying ransomware as confidentiality; its main effect is loss of access.",
    },
    difficulty: 2,
    points: 15,
    competency: 'data-governance',
  },
  {
    id: 'TEC-18-E4',
    level: 2,
    module: 'TEC-18',
    kind: 'numeric',
    flavor: 'case',
    context: {
      es: "Una empresa estima que un fraude por suplantación de proveedor le costaría $400,000 por evento y que puede ocurrir en promedio una vez cada cuatro años (0.25 veces al año). (Cifras hipotéticas.)",
      en: "A company estimates that a supplier impersonation fraud would cost it $400,000 per event and that it can occur on average once every four years (0.25 times a year). (Hypothetical figures.)",
    },
    prompt: {
      es: "¿Cuál es la pérdida anual esperada por el fraude de suplantación de proveedor, en pesos?",
      en: "What is the expected annual loss from supplier impersonation fraud, in pesos?",
    },
    answer: 100000,
    unit: 'MXN',
    decimals: 0,
    tolerance: { abs: 0.5 },
    explanation: {
      es: "Pérdida anual esperada = 400,000 × 0.25 = $100,000. Con ese dato, un control que cueste menos de $100,000 al año y evite el fraude se justifica. Error común: multiplicar por 4 (los años) en lugar de por la frecuencia anual 0.25.",
      en: "Expected annual loss = 400,000 × 0.25 = $100,000. With that figure, a control costing less than $100,000 a year that prevents the fraud is justified. Common mistake: multiplying by 4 (the years) instead of by the annual frequency 0.25.",
    },
    difficulty: 1,
    points: 10,
    competency: 'data-governance',
  },
  {
    id: 'TEC-18-E5',
    level: 2,
    module: 'TEC-18',
    kind: 'multi',
    flavor: 'concept',
    prompt: {
      es: "¿Qué controles ayudan a proteger la información financiera de una empresa? Selecciona todas las que apliquen.",
      en: "Which controls help protect a company's financial information? Select all that apply.",
    },
    options: [
      { id: 'TEC-18-E5-a', text: { es: "Dar a cada empleado acceso solo a lo que necesita (mínimo privilegio)", en: "Give each employee access only to what they need (least privilege)" } },
      { id: 'TEC-18-E5-b', text: { es: "Activar autenticación de dos factores en banca electrónica y ERP", en: "Enable two-factor authentication on online banking and the ERP" } },
      { id: 'TEC-18-E5-c', text: { es: "Hacer respaldos y probar que se pueden restaurar", en: "Make backups and test that they can be restored" } },
      { id: 'TEC-18-E5-d', text: { es: "Compartir una sola contraseña de administrador entre todo el equipo", en: "Share a single administrator password across the whole team" } },
      { id: 'TEC-18-E5-e', text: { es: "Guardar todos los datos posibles por si algún día sirven", en: "Keep all possible data in case it is useful someday" } },
    ],
    correctOptionIds: ['TEC-18-E5-a', 'TEC-18-E5-b', 'TEC-18-E5-c'],
    explanation: {
      es: "Mínimo privilegio, dos factores y respaldos probados reducen accesos indebidos y pérdidas. Compartir una contraseña impide saber quién hizo qué, y guardar todo contradice la minimización: más datos, más riesgo. Error común: pensar que tener respaldos basta sin probar que se restauran.",
      en: "Least privilege, two-factor authentication and tested backups reduce improper access and losses. Sharing a password makes it impossible to know who did what, and keeping everything contradicts minimization: more data, more risk. Common mistake: thinking having backups is enough without testing that they restore.",
    },
    difficulty: 1,
    points: 15,
    competency: 'data-governance',
  },
  {
    id: 'TEC-18-E6',
    level: 2,
    module: 'TEC-18',
    kind: 'mcq',
    flavor: 'case',
    context: {
      es: "En una empresa, el reporte de ventas dice que hay 4,200 \"clientes activos\" y el de finanzas dice 3,100. Cada área usa su propia definición y nadie es responsable formal de ese dato.",
      en: "In a company, the sales report says there are 4,200 \"active customers\" and the finance report says 3,100. Each area uses its own definition and no one is formally responsible for that data.",
    },
    prompt: {
      es: "¿Qué medida de gobernanza de datos resuelve de raíz la diferencia en la cifra de clientes activos?",
      en: "Which data governance measure fixes the root of the difference in the active-customer figure?",
    },
    options: [
      { id: 'TEC-18-E6-a', text: { es: "Nombrar un dueño del dato y fijar una definición única en el catálogo de datos", en: "Appoint a data owner and set a single definition in the data catalog" } },
      { id: 'TEC-18-E6-b', text: { es: "Promediar ambas cifras y reportar 3,650", en: "Average both figures and report 3,650" } },
      { id: 'TEC-18-E6-c', text: { es: "Usar siempre la cifra más alta para que el reporte se vea mejor", en: "Always use the higher figure so the report looks better" } },
      { id: 'TEC-18-E6-d', text: { es: "Comprar un servidor más rápido", en: "Buy a faster server" } },
    ],
    correctOptionId: 'TEC-18-E6-a',
    explanation: {
      es: "El problema es de consistencia y de responsabilidad: sin definición única ni dueño, cada área calcula distinto. Un dueño del dato y un catálogo con una definición común lo corrigen. Promediar o elegir la cifra mayor solo esconde el problema, y la tecnología más rápida no cambia definiciones. Error común: tratar un problema de gobernanza como si fuera técnico.",
      en: "The issue is consistency and accountability: with no single definition or owner, each area calculates differently. A data owner and a catalog with a common definition fix it. Averaging or choosing the higher figure only hides the problem, and faster technology does not change definitions. Common mistake: treating a governance problem as a technical one.",
    },
    difficulty: 2,
    points: 15,
    competency: 'data-governance',
  },
]
