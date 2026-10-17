import type { Exercise, Lesson } from '../../../types'

/**
 * FINCORE — Temario v2.0, área Auditoría, Control Interno y Riesgos, parte 2 (Intermedio).
 * AUD-07 a AUD-12: riesgos empresariales, auditoría de estados financieros, auditoría interna,
 * auditoría de sistemas ERP, auditoría de TI y auditoría forense.
 */

const t = (es: string, en: string) => ({ es, en })

const NOTE_ERM = t(
  "Contenido educativo. Las referencias al marco COSO de administración de riesgos empresariales y a la norma ISO 31000 son generales; estos marcos se actualizan, así que verifica la versión vigente (2026). Las escalas, umbrales y montos de los ejemplos son ilustrativos.",
  "Educational content. References to the COSO enterprise risk management framework and to the ISO 31000 standard are general; these frameworks are updated, so verify the current version (2026). The scales, thresholds and amounts in the examples are illustrative.",
)

const NOTE_FS_AUDIT = t(
  "Contenido educativo basado en las Normas Internacionales de Auditoría (NIA) emitidas por el IAASB y adoptadas en México por el Instituto Mexicano de Contadores Públicos (IMCP). Las normas cambian: verifica la versión vigente (2026). La materialidad y los montos de los ejemplos son hipotéticos.",
  "Educational content based on the International Standards on Auditing (ISA) issued by the IAASB and adopted in Mexico by the Mexican Institute of Public Accountants (IMCP). Standards change: verify the current version (2026). Materiality and amounts in the examples are hypothetical.",
)

const NOTE_IIA = t(
  "Contenido educativo basado en las Normas Globales de Auditoría Interna y el Modelo de las Tres Líneas del Instituto de Auditores Internos (IIA). Estas guías se revisan periódicamente: verifica la versión vigente (2026). Las cifras de los ejemplos son hipotéticas.",
  "Educational content based on the Global Internal Audit Standards and the Three Lines Model of the Institute of Internal Auditors (IIA). These guides are revised periodically: verify the current version (2026). Figures in the examples are hypothetical.",
)

const NOTE_ERP = t(
  "Contenido educativo y general: cada ERP nombra y configura sus módulos, roles y controles de forma distinta. Las tolerancias, umbrales y cifras de los ejemplos son hipotéticos; las prácticas de auditoría se basan en las NIA y en marcos de TI que se actualizan, así que verifica la versión vigente (2026).",
  "General educational content: each ERP names and configures its modules, roles and controls differently. The tolerances, thresholds and figures in the examples are hypothetical; audit practices are based on the ISA and on IT frameworks that are updated, so verify the current version (2026).",
)

const NOTE_IT = t(
  "Contenido educativo. Las referencias a COBIT (de ISACA) y a la norma ISO/IEC 27001 son generales; los marcos de TI y ciberseguridad se actualizan con frecuencia, así que verifica la versión vigente (2026). Las cifras de los ejemplos son hipotéticas.",
  "Educational content. References to COBIT (by ISACA) and to the ISO/IEC 27001 standard are general; IT and cybersecurity frameworks are updated often, so verify the current version (2026). Figures in the examples are hypothetical.",
)

const NOTE_FORENSIC = t(
  "Contenido educativo, no asesoría legal. En México, la cadena de custodia y el uso de pruebas en un juicio penal se rigen por la legislación procesal penal y por los criterios de las autoridades (Fiscalía, jueces); las reglas cambian, así que verifica la versión vigente (2026) y consulta a un abogado en un caso real. Las cifras de los ejemplos son hipotéticas.",
  "Educational content, not legal advice. In Mexico, chain of custody and the use of evidence in a criminal trial are governed by criminal procedure law and by the criteria of the authorities (prosecutors, judges); rules change, so verify the current version (2026) and consult a lawyer in a real case. Figures in the examples are hypothetical.",
)

export const lessons: Lesson[] = [
  // ───────────────────────────── AUD-07 ─────────────────────────────
  {
    id: 'AUD-07',
    level: 5,
    topicIds: ['AUD.7'],
    title: t("Evaluación de riesgos empresariales", "Enterprise risk assessment"),
    summary: t(
      "Evaluar riesgos empresariales es identificar qué podría impedir que el negocio logre sus metas, medir qué tan probable y qué tan grave sería, y decidir qué hacer con cada riesgo según el apetito de riesgo de la empresa.",
      "Assessing enterprise risks means identifying what could stop the business from reaching its goals, measuring how likely and how serious it would be, and deciding what to do with each risk according to the company's risk appetite.",
    ),
    minutes: 11,
    objectives: [
      t("Explicar qué es un riesgo empresarial y reconocer sus tipos principales: estratégico, operativo, financiero, de cumplimiento y reputacional.", "Explain what an enterprise risk is and recognize its main types: strategic, operational, financial, compliance and reputational."),
      t("Calificar riesgos con probabilidad e impacto, ubicarlos en un mapa de calor y distinguir riesgo inherente de riesgo residual.", "Score risks by likelihood and impact, place them on a heat map and distinguish inherent risk from residual risk."),
      t("Elegir una respuesta al riesgo (evitar, reducir, compartir o aceptar) comparándola con el apetito de riesgo y su costo.", "Choose a risk response (avoid, reduce, share or accept) by comparing it with the risk appetite and its cost."),
    ],
    theory: [
      {
        heading: t("¿Qué puede salir mal?", "What could go wrong?"),
        body: [
          t(
            "Un **riesgo** es la posibilidad de que algo pase y afecte lo que quieres lograr. Si una panadería quiere vender 1,000 conchas diarias, un riesgo es que suba mucho el precio de la harina o que se descomponga el horno. La **administración de riesgos empresariales** (en inglés, ERM) mira **todos** los riesgos del negocio juntos, no cada área por separado.",
            "A **risk** is the possibility that something happens and affects what you want to achieve. If a bakery wants to sell 1,000 sweet buns a day, one risk is a big rise in flour prices or the oven breaking down. **Enterprise risk management** (ERM) looks at **all** the business's risks together, not each area separately.",
          ),
          t(
            "El punto de partida son los **objetivos**: no se evalúan riesgos en el aire, sino contra una meta concreta (crecer en ventas, abrir sucursales, cumplir con la ley). Para encontrar riesgos se usan **talleres** con los responsables de cada proceso, revisión de **pérdidas e incidentes pasados**, análisis de **escenarios** (¿qué pasa si...?) y comparación con empresas del mismo giro.",
            "The starting point is the **objectives**: risks are not assessed in a vacuum but against a concrete goal (growing sales, opening branches, complying with the law). To find risks people use **workshops** with the owners of each process, reviews of **past losses and incidents**, **scenario** analysis (what happens if...?) and comparison with companies in the same industry.",
          ),
          t(
            "Mini ejemplo: una cadena de farmacias que quiere abrir 10 sucursales identifica como riesgos que no consiga locales bien ubicados (estratégico), que falle su sistema de inventarios (operativo) y que reciba una multa sanitaria (cumplimiento).",
            "Mini example: a pharmacy chain that wants to open 10 branches identifies as risks not finding well-located stores (strategic), its inventory system failing (operational) and receiving a health-authority fine (compliance).",
          ),
        ],
        bullets: [
          t("Estratégico: decisiones o cambios del mercado que afectan el rumbo (un competidor nuevo).", "Strategic: decisions or market changes that affect direction (a new competitor)."),
          t("Operativo: fallas en procesos, personas o sistemas (un robo en bodega).", "Operational: failures in processes, people or systems (a warehouse theft)."),
          t("Financiero: tipo de cambio, tasas de interés, clientes que no pagan.", "Financial: exchange rates, interest rates, customers who do not pay."),
          t("Cumplimiento: incumplir leyes, contratos o normas (una multa).", "Compliance: breaching laws, contracts or rules (a fine)."),
          t("Reputacional: perder la confianza de clientes (una queja viral en redes).", "Reputational: losing customers' trust (a complaint going viral on social media)."),
        ],
      },
      {
        heading: t("¿Qué tan grave es un riesgo?", "How serious is a risk?"),
        body: [
          t(
            "Para comparar riesgos se califican con dos preguntas: **¿qué tan probable es?** (probabilidad) y **¿qué tan grave sería?** (impacto). Muchas empresas usan escalas de 1 a 5 y multiplican: así obtienen una **calificación** de 1 a 25. Con esas calificaciones se arma un **mapa de calor**: una cuadrícula con colores donde los riesgos rojos (altos) piden atención primero.",
            "To compare risks they are scored with two questions: **how likely is it?** (likelihood) and **how serious would it be?** (impact). Many companies use 1-to-5 scales and multiply them: that gives a **score** from 1 to 25. With those scores they build a **heat map**: a colored grid where red (high) risks get attention first.",
          ),
          t(
            "Hay dos momentos de medición. El **riesgo inherente** es el riesgo **antes** de cualquier control, como si nadie hiciera nada. El **riesgo residual** es el que **queda después** de los controles que ya existen. Si una tienda maneja mucho efectivo, el riesgo de robo es alto (inherente); con cámaras, cortes de caja y depósitos diarios baja (residual).",
            "There are two moments of measurement. **Inherent risk** is the risk **before** any control, as if nobody did anything. **Residual risk** is what **remains after** the controls already in place. If a store handles a lot of cash, the risk of theft is high (inherent); with cameras, cash counts and daily deposits it goes down (residual).",
          ),
          t(
            "Cuando hay datos, el riesgo también se puede expresar en pesos como **pérdida esperada**: probabilidad por impacto. Mini ejemplo: si hay 10% de probabilidad al año de perder $200,000 por una inundación, la pérdida esperada es 0.10 × $200,000 = $20,000 al año.",
            "When data exists, risk can also be expressed in pesos as an **expected loss**: likelihood times impact. Mini example: if there is a 10% yearly chance of losing $200,000 in a flood, the expected loss is 0.10 × $200,000 = $20,000 a year.",
          ),
        ],
        formulas: [
          {
            name: t("Calificación de un riesgo (para el mapa de calor)", "Risk score (for the heat map)"),
            expression: "Calificación = Probabilidad × Impacto",
            variables: [
              { symbol: "Calificación", meaning: t("Un número de 1 a 25 que dice qué tan grande es el riesgo; entre más alto, antes se atiende.", "A number from 1 to 25 that says how big the risk is; the higher it is, the sooner it gets attention.") },
              { symbol: "Probabilidad", meaning: t("Qué tan seguido podría pasar, en una escala de 1 (casi nunca) a 5 (casi seguro).", "How likely it is to happen, on a scale from 1 (almost never) to 5 (almost certain).") },
              { symbol: "Impacto", meaning: t("Qué tan grave sería si pasa, en una escala de 1 (casi nada) a 5 (muy grave).", "How serious it would be if it happens, on a scale from 1 (barely anything) to 5 (very serious).") },
            ],
            steps: [
              t("Asigna la probabilidad del riesgo en la escala de 1 a 5.", "Assign the risk's likelihood on the 1-to-5 scale."),
              t("Asigna el impacto en la misma escala de 1 a 5.", "Assign the impact on the same 1-to-5 scale."),
              t("Multiplica los dos números: esa es la calificación.", "Multiply the two numbers: that is the score."),
              t("Ubícala en la escala de la empresa (alto, medio o bajo). Para el riesgo residual repite el cálculo con la probabilidad o el impacto que quedan después de los controles.", "Place it on the company's scale (high, medium or low). For residual risk, repeat the calculation with the likelihood or impact that remain after the controls."),
            ],
            example: t(
              "Una papelería califica el riesgo de que se moje su bodega en temporada de lluvias: probabilidad 3 e impacto 5. Calificación inherente: 3 × 5 = **15** (alto, con la escala ilustrativa de 15 o más). Si sella el techo y la probabilidad baja a 1, la calificación residual es 1 × 5 = **5** (bajo).",
              "A stationery store scores the risk of its warehouse getting wet in the rainy season: likelihood 3 and impact 5. Inherent score: 3 × 5 = **15** (high, on the illustrative scale of 15 or more). If it seals the roof and the likelihood drops to 1, the residual score is 1 × 5 = **5** (low).",
            ),
            interpret: t(
              "Una calificación alta pide atención primero. Pero revisa también los riesgos con impacto 5 aunque su calificación sea media: si pasan, pueden ser muy dañinos.",
              "A high score calls for attention first. But also watch risks with impact 5 even if their score is medium: if they happen, they can be very damaging.",
            ),
            mistake: t(
              "Sumar probabilidad e impacto (3 + 5 = 8) en lugar de multiplicarlos.",
              "Adding likelihood and impact (3 + 5 = 8) instead of multiplying them.",
            ),
          },
          {
            name: t("Pérdida esperada en pesos", "Expected loss in pesos"),
            expression: "Pérdida esperada = Probabilidad (%) × Impacto ($)",
            variables: [
              { symbol: "Pérdida esperada", meaning: t("Lo que, en promedio, te costaría el riesgo cada año, en pesos.", "What the risk would cost you on average each year, in pesos.") },
              { symbol: "Probabilidad (%)", meaning: t("La posibilidad de que pase en un año, en porcentaje (por ejemplo, 10%).", "The chance it happens in a year, as a percentage (for example, 10%).") },
              { symbol: "Impacto ($)", meaning: t("Cuántos pesos perderías si sí pasa.", "How many pesos you would lose if it does happen.") },
            ],
            steps: [
              t("Convierte la probabilidad a decimal: divide entre 100 (20% = 0.20).", "Convert the likelihood to a decimal: divide by 100 (20% = 0.20)."),
              t("Multiplica ese decimal por el impacto en pesos.", "Multiply that decimal by the impact in pesos."),
              t("El resultado es la pérdida esperada al año; compárala con lo que cuesta un control.", "The result is the expected loss per year; compare it with what a control costs."),
            ],
            example: t(
              "Una tienda de celulares estima 20% de probabilidad al año de un robo que le costaría $300,000. Paso 1: 20% = 0.20. Paso 2: 0.20 × $300,000 = **$60,000** de pérdida esperada al año.",
              "A phone store estimates a 20% yearly chance of a theft that would cost it $300,000. Step 1: 20% = 0.20. Step 2: 0.20 × $300,000 = **$60,000** of expected loss per year.",
            ),
            interpret: t(
              "No es lo que vas a perder seguro, sino un promedio. Sirve para decidir cuánto vale la pena gastar en protegerte.",
              "It is not what you will surely lose, but an average. It helps decide how much is worth spending to protect yourself.",
            ),
            mistake: t(
              "Multiplicar por 20 en lugar de 0.20, o confundir la pérdida esperada con el impacto completo.",
              "Multiplying by 20 instead of 0.20, or confusing the expected loss with the full impact.",
            ),
          },
        ],
      },
      {
        heading: t("¿Qué hacemos con cada riesgo?", "What do we do with each risk?"),
        body: [
          t(
            "El **apetito de riesgo** es cuánto riesgo está dispuesta a aceptar la empresa para lograr sus metas; lo aprueba el consejo o los dueños. La **tolerancia** es el margen aceptable alrededor de una meta concreta (por ejemplo, que la merma de inventario no pase de cierto porcentaje). Si el riesgo residual queda por encima del apetito, hay que actuar o escalarlo.",
            "**Risk appetite** is how much risk the company is willing to accept to reach its goals; the board or the owners approve it. **Tolerance** is the acceptable margin around a specific goal (for example, inventory shrinkage not exceeding a certain percentage). If residual risk is above the appetite, the company must act or escalate it.",
          ),
          t(
            "Hay cuatro **respuestas** básicas: **evitar** (dejar la actividad que causa el riesgo), **reducir** (poner controles), **compartir o transferir** (seguros, contratos, subcontratar) y **aceptar** (vivir con él porque controlarlo cuesta más de lo que protege). Una respuesta tiene sentido si lo que ahorra en pérdida esperada es mayor que lo que cuesta.",
            "There are four basic **responses**: **avoid** (stop the activity causing the risk), **reduce** (add controls), **share or transfer** (insurance, contracts, outsourcing) and **accept** (live with it because controlling it costs more than it protects). A response makes sense if what it saves in expected loss is greater than what it costs.",
          ),
          t(
            "Todo se anota en un **registro de riesgos**: descripción, dueño del riesgo, calificaciones, respuesta y fecha de revisión. Para vigilarlos se usan **indicadores clave de riesgo** (KRI): señales tempranas que avisan que un riesgo está creciendo. Mini ejemplo: una distribuidora vigila el porcentaje de clientes con más de 90 días de atraso; si sube, su riesgo de cobranza está creciendo antes de que se vea en las pérdidas.",
            "Everything is written in a **risk register**: description, risk owner, scores, response and review date. To monitor them companies use **key risk indicators** (KRIs): early signals warning that a risk is growing. Mini example: a distributor tracks the percentage of customers more than 90 days late; if it rises, its collection risk is growing before it shows up in losses.",
          ),
        ],
        formulas: [
          {
            name: t("¿Conviene el control? (beneficio neto)", "Is the control worth it? (net benefit)"),
            expression: "Beneficio neto = (Pérdida esperada inherente − Pérdida esperada residual) − Costo del control",
            variables: [
              { symbol: "Beneficio neto", meaning: t("Lo que ganas al año por poner el control, en pesos.", "What you gain per year by putting the control in place, in pesos.") },
              { symbol: "Pérdida esperada inherente", meaning: t("Probabilidad × impacto **sin** el control, en pesos al año.", "Likelihood × impact **without** the control, in pesos per year.") },
              { symbol: "Pérdida esperada residual", meaning: t("Probabilidad × impacto **con** el control, en pesos al año.", "Likelihood × impact **with** the control, in pesos per year.") },
              { symbol: "Costo del control", meaning: t("Lo que cuesta al año el control (cámaras, personal, seguro), en pesos.", "What the control costs per year (cameras, staff, insurance), in pesos.") },
            ],
            steps: [
              t("Calcula la pérdida esperada sin control: probabilidad actual × impacto.", "Compute the expected loss without the control: current likelihood × impact."),
              t("Calcula la pérdida esperada con control: nueva probabilidad × impacto.", "Compute the expected loss with the control: new likelihood × impact."),
              t("Resta la segunda a la primera: eso es lo que el control ahorra.", "Subtract the second from the first: that is what the control saves."),
              t("Al ahorro réstale el costo del control.", "Subtract the control's cost from the savings."),
            ],
            example: t(
              "Un almacén tiene 25% de probabilidad al año de perder $600,000. Un sistema de alarmas cuesta $70,000 al año y baja la probabilidad a 5%. Sin control: 0.25 × $600,000 = $150,000. Con control: 0.05 × $600,000 = $30,000. Ahorro: $150,000 − $30,000 = $120,000. Beneficio neto: $120,000 − $70,000 = **$50,000** al año.",
              "A warehouse has a 25% yearly chance of losing $600,000. An alarm system costs $70,000 a year and lowers the likelihood to 5%. Without control: 0.25 × $600,000 = $150,000. With control: 0.05 × $600,000 = $30,000. Savings: $150,000 − $30,000 = $120,000. Net benefit: $120,000 − $70,000 = **$50,000** a year.",
            ),
            interpret: t(
              "Positivo: el control conviene (reducir). Negativo: cuesta más de lo que protege y quizá convenga aceptar o compartir el riesgo.",
              "Positive: the control is worth it (reduce). Negative: it costs more than it protects, and accepting or sharing the risk may be better.",
            ),
            mistake: t(
              "Comparar el costo del control contra el impacto total ($600,000) en lugar de contra el ahorro en pérdida esperada.",
              "Comparing the control's cost with the full impact ($600,000) instead of with the savings in expected loss.",
            ),
          },
        ],
        bullets: [
          t("Evitar: no entrar a un mercado muy inseguro.", "Avoid: not entering a very unsafe market."),
          t("Reducir: doble firma en pagos grandes.", "Reduce: dual signatures on large payments."),
          t("Compartir: contratar un seguro de daños.", "Share: buying property insurance."),
          t("Aceptar: asumir pérdidas menores que no vale la pena controlar.", "Accept: absorbing minor losses not worth controlling."),
        ],
      },
    ],
    examples: [
      {
        title: t("Mapa de calor de una taquería", "Heat map for a taco restaurant"),
        problem: t(
          "Una cadena de taquerías califica sus riesgos en escalas de 1 a 5. Corte de gas: probabilidad 3, impacto 4. Robo en caja: probabilidad 4, impacto 2. Demanda por intoxicación: probabilidad 2, impacto 5. Alza del precio de la carne: probabilidad 4, impacto 4. Considera (ilustrativo) alto 15 o más, medio de 8 a 14 y bajo 7 o menos. Ordena los riesgos.",
          "A taco restaurant chain scores its risks on 1-to-5 scales. Gas outage: likelihood 3, impact 4. Cash register theft: likelihood 4, impact 2. Food-poisoning lawsuit: likelihood 2, impact 5. Rise in meat prices: likelihood 4, impact 4. Assume (illustrative) high is 15 or more, medium 8 to 14 and low 7 or less. Rank the risks.",
        ),
        steps: [
          t("Corte de gas: 3 × 4 = 12 (medio).", "Gas outage: 3 × 4 = 12 (medium)."),
          t("Robo en caja: 4 × 2 = 8 (medio).", "Cash register theft: 4 × 2 = 8 (medium)."),
          t("Demanda por intoxicación: 2 × 5 = 10 (medio).", "Food-poisoning lawsuit: 2 × 5 = 10 (medium)."),
          t("Alza de la carne: 4 × 4 = 16 (alto).", "Meat price rise: 4 × 4 = 16 (high)."),
          t("Orden de mayor a menor: carne 16, gas 12, intoxicación 10, robo 8.", "Order from highest to lowest: meat 16, gas 12, food poisoning 10, theft 8."),
        ],
        result: t(
          "El alza de la carne es el único riesgo alto y se atiende primero (por ejemplo, con contratos de precio con proveedores). Ojo: la demanda tiene impacto máximo; aunque su calificación sea media, conviene vigilarla de cerca.",
          "The meat price rise is the only high risk and is addressed first (for example, with price contracts with suppliers). Note: the lawsuit has maximum impact; even though its score is medium, it should be watched closely.",
        ),
      },
      {
        title: t("¿Vale la pena el control?", "Is the control worth it?"),
        problem: t(
          "Una bodega estima 30% de probabilidad al año de sufrir un robo de mercancía por $400,000. Poner cámaras y conteos sorpresa cuesta $50,000 al año y bajaría la probabilidad a 10%. ¿Conviene?",
          "A warehouse estimates a 30% yearly chance of a $400,000 merchandise theft. Installing cameras and surprise counts costs $50,000 a year and would lower the likelihood to 10%. Is it worth it?",
        ),
        steps: [
          t("Pérdida esperada inherente: 0.30 × $400,000 = $120,000.", "Inherent expected loss: 0.30 × $400,000 = $120,000."),
          t("Pérdida esperada residual: 0.10 × $400,000 = $40,000.", "Residual expected loss: 0.10 × $400,000 = $40,000."),
          t("Ahorro: $120,000 − $40,000 = $80,000 al año.", "Savings: $120,000 − $40,000 = $80,000 a year."),
          t("Beneficio neto: $80,000 − $50,000 = $30,000.", "Net benefit: $80,000 − $50,000 = $30,000."),
        ],
        result: t(
          "Sí conviene reducir el riesgo: el control ahorra $80,000 de pérdida esperada y cuesta $50,000, un beneficio neto de $30,000 al año.",
          "Yes, reducing the risk is worth it: the control saves $80,000 of expected loss and costs $50,000, a net benefit of $30,000 a year.",
        ),
      },
    ],
    keyPoints: [
      t("Los riesgos se evalúan contra los objetivos del negocio, no en abstracto.", "Risks are assessed against business objectives, not in the abstract."),
      t("Calificación = probabilidad × impacto; el mapa de calor muestra qué atender primero.", "Score = likelihood × impact; the heat map shows what to address first."),
      t("Riesgo inherente es antes de controles; residual, después de ellos.", "Inherent risk is before controls; residual risk is after them."),
      t("Respuestas: evitar, reducir, compartir o aceptar, según apetito de riesgo y costo.", "Responses: avoid, reduce, share or accept, depending on risk appetite and cost."),
      t("El registro de riesgos y los KRI permiten dar seguimiento continuo.", "The risk register and KRIs allow continuous monitoring."),
    ],
    normativeNote: NOTE_ERM,
    exerciseIds: ['AUD-07-E1', 'AUD-07-E2', 'AUD-07-E3', 'AUD-07-E5', 'AUD-07-E6'],
  },

  // ───────────────────────────── AUD-08 ─────────────────────────────
  {
    id: 'AUD-08',
    level: 5,
    topicIds: ['AUD.8'],
    title: t("Auditoría de estados financieros", "Financial statement audit"),
    summary: t(
      "En una auditoría de estados financieros el auditor externo prueba, rubro por rubro, que las cifras existan, estén completas, bien valuadas y en el periodo correcto, y evalúa si las diferencias encontradas son materiales.",
      "In a financial statement audit the external auditor tests, line by line, that the figures exist, are complete, properly valued and in the right period, and evaluates whether the differences found are material.",
    ),
    minutes: 11,
    objectives: [
      t("Explicar el objetivo de la auditoría de estados financieros y las principales aseveraciones de la administración.", "Explain the objective of a financial statement audit and management's main assertions."),
      t("Relacionar procedimientos sustantivos típicos (confirmaciones, conteos, conciliaciones, corte) con la aseveración que prueban.", "Match typical substantive procedures (confirmations, counts, reconciliations, cutoff) with the assertion they test."),
      t("Proponer ajustes de auditoría y acumular diferencias para compararlas con la materialidad.", "Propose audit adjustments and accumulate differences to compare them with materiality."),
    ],
    theory: [
      {
        heading: t("¿Qué afirman los números?", "What do the numbers claim?"),
        body: [
          t(
            "Una **auditoría de estados financieros** la hace un contador público **independiente** (externo) para opinar si el balance, el estado de resultados y demás estados presentan razonablemente la situación de la empresa conforme al marco aplicable (en México, normalmente las **NIF**). **Razonablemente** significa sin errores importantes, no perfecto al último peso.",
            "A **financial statement audit** is performed by an **independent** (external) public accountant to give an opinion on whether the balance sheet, income statement and other statements fairly present the company's position under the applicable framework (in Mexico, usually the **NIF**). **Fairly** means without significant errors, not perfect to the last peso.",
          ),
          t(
            "Cuando la empresa presenta sus estados, en silencio está **afirmando** cosas sobre cada cifra. A esas afirmaciones se les llama **aseveraciones**. Si el balance dice \"Clientes $500,000\", la administración afirma que esos clientes existen, que son todos, que realmente se podrán cobrar y que pertenecen a la empresa.",
            "When a company presents its statements, it is silently **asserting** things about each figure. Those claims are called **assertions**. If the balance sheet says \"Accounts receivable $500,000\", management asserts that those customers exist, that they are all of them, that they can really be collected and that they belong to the company.",
          ),
          t(
            "El trabajo del auditor es elegir **procedimientos sustantivos** (pruebas sobre las cifras) que den evidencia sobre cada aseveración importante. Mini ejemplo: para Inventarios de $1 millón, el auditor observa el conteo físico (¿existe?) y compara costos con precios de venta recientes (¿está bien valuado?).",
            "The auditor's job is to choose **substantive procedures** (tests on the figures) that provide evidence for each significant assertion. Mini example: for Inventory of $1 million, the auditor observes the physical count (does it exist?) and compares costs with recent selling prices (is it properly valued?).",
          ),
        ],
        bullets: [
          t("Existencia u ocurrencia: lo registrado sí existe o sí pasó.", "Existence or occurrence: what is recorded does exist or did happen."),
          t("Integridad: no falta nada por registrar.", "Completeness: nothing is missing from the records."),
          t("Valuación y exactitud: los montos son correctos.", "Valuation and accuracy: the amounts are correct."),
          t("Derechos y obligaciones: los activos son de la empresa y los pasivos son suyos.", "Rights and obligations: assets belong to the company and liabilities are its own."),
          t("Corte: cada operación quedó en el periodo correcto.", "Cutoff: each transaction is in the right period."),
          t("Presentación: se clasifica y revela de forma adecuada.", "Presentation: properly classified and disclosed."),
        ],
      },
      {
        heading: t("¿Cómo se prueba cada cifra?", "How is each figure tested?"),
        body: [
          t(
            "En palabras sencillas: para cada cuenta importante el auditor elige la prueba que mejor contesta su duda. ¿El dinero en el banco existe? Le pregunta al banco. ¿Los clientes deben lo que dice la empresa? Les pregunta a los clientes. Una **conciliación bancaria** es la hoja que explica por qué el saldo del banco y el de tus libros no son iguales: casi siempre por movimientos que uno ya anotó y el otro todavía no.",
            "In plain words: for each significant account the auditor chooses the test that best answers its question. Does the money in the bank exist? Ask the bank. Do customers owe what the company says? Ask the customers. A **bank reconciliation** is the sheet that explains why the bank's balance and your books' balance are not equal: almost always because of transactions one side has already recorded and the other has not yet.",
          ),
          t(
            "**Efectivo y bancos:** el auditor obtiene las **conciliaciones bancarias** al cierre y **confirma** saldos directamente con el banco. Revisa partidas en conciliación: depósitos en tránsito (que deben aparecer en el banco en los primeros días del mes siguiente) y cheques en circulación.",
            "**Cash and banks:** the auditor obtains the year-end **bank reconciliations** and **confirms** balances directly with the bank. It reviews reconciling items: deposits in transit (which should appear at the bank in the first days of the next month) and outstanding checks.",
          ),
          t(
            "**Clientes:** envía **confirmaciones** a una muestra de clientes para que respondan directamente al auditor cuánto deben (NIA 505), y revisa la **antigüedad de saldos** y los **cobros posteriores** para juzgar si la estimación de incobrables es suficiente. **Inventarios:** **observa el conteo físico** (NIA 501), hace conteos de prueba y revisa que el costo no supere lo que se puede recuperar al venderlo.",
            "**Accounts receivable:** sends **confirmations** to a sample of customers so they reply directly to the auditor with how much they owe (ISA 505), and reviews the **aging** and **subsequent collections** to judge whether the bad-debt allowance is enough. **Inventory:** **observes the physical count** (ISA 501), performs test counts and checks that cost does not exceed what can be recovered by selling it.",
          ),
          t(
            "**Pasivos:** el riesgo típico es que **falten** (subestimarlos mejora las cifras). Por eso se hace la **búsqueda de pasivos no registrados**: revisar facturas recibidas y pagos hechos después del cierre para ver si correspondían al año auditado. **Ventas:** se hacen **pruebas de corte**, comparando la fecha de las últimas facturas del año con la fecha real de entrega. Mini ejemplo: una factura del 31 de diciembre cuya mercancía salió el 3 de enero es venta de enero, no de diciembre.",
            "**Liabilities:** the typical risk is that they are **missing** (understating them makes the figures look better). That is why auditors perform a **search for unrecorded liabilities**: reviewing invoices received and payments made after year-end to see whether they belonged to the audited year. **Sales:** auditors perform **cutoff tests**, comparing the date of the last invoices of the year with the actual delivery date. Mini example: a December 31 invoice whose goods left on January 3 is a January sale, not a December one.",
          ),
        ],
        formulas: [
          {
            name: t("Saldo conciliado según el banco y diferencia contra libros", "Reconciled balance per bank and difference versus the books"),
            expression: "Saldo conciliado = Saldo del banco + Depósitos en tránsito − Cheques en circulación  ·  Diferencia = Saldo en libros − Saldo conciliado",
            variables: [
              { symbol: "Saldo conciliado", meaning: t("Lo que de verdad debería haber en la cuenta al cierre, en pesos, ya corregido por lo que el banco aún no ve.", "What should really be in the account at year-end, in pesos, already corrected for what the bank does not see yet.") },
              { symbol: "Saldo del banco", meaning: t("El saldo que aparece en el estado de cuenta del banco, en pesos.", "The balance shown on the bank statement, in pesos.") },
              { symbol: "Depósitos en tránsito", meaning: t("Dinero que la empresa ya depositó y anotó, pero que el banco todavía no registra. Se **suma**.", "Money the company already deposited and recorded, but the bank has not registered yet. It is **added**.") },
              { symbol: "Cheques en circulación", meaning: t("Cheques que la empresa ya entregó y anotó, pero que nadie ha cobrado aún. Se **restan**.", "Checks the company already issued and recorded, but nobody has cashed yet. They are **subtracted**.") },
              { symbol: "Saldo en libros", meaning: t("El saldo de la cuenta Bancos en la contabilidad de la empresa, en pesos.", "The balance of the Banks account in the company's accounting records, in pesos.") },
              { symbol: "Diferencia", meaning: t("Lo que no se puede explicar con las partidas anteriores; el auditor la investiga.", "What cannot be explained by the items above; the auditor investigates it.") },
            ],
            steps: [
              t("Parte del saldo del estado de cuenta del banco.", "Start from the bank statement balance."),
              t("Súmale los depósitos en tránsito.", "Add the deposits in transit."),
              t("Réstale los cheques en circulación: ese es el saldo conciliado.", "Subtract the outstanding checks: that is the reconciled balance."),
              t("Resta el saldo conciliado al saldo en libros para ver si queda una diferencia sin explicar.", "Subtract the reconciled balance from the book balance to see whether an unexplained difference remains."),
            ],
            example: t(
              "Estado de cuenta: $80,000. Depósito en tránsito: $12,000. Cheques en circulación: $9,000. Libros: $84,500. Paso 2: $80,000 + $12,000 = $92,000. Paso 3: $92,000 − $9,000 = **$83,000** conciliado. Paso 4: $84,500 − $83,000 = **$1,500** sin explicar.",
              "Bank statement: $80,000. Deposit in transit: $12,000. Outstanding checks: $9,000. Books: $84,500. Step 2: $80,000 + $12,000 = $92,000. Step 3: $92,000 − $9,000 = **$83,000** reconciled. Step 4: $84,500 − $83,000 = **$1,500** unexplained.",
            ),
            interpret: t(
              "Diferencia cero: la cuenta cuadra. Si los libros tienen de más, puede faltar registrar una comisión o un cargo del banco; si tienen de menos, puede faltar un depósito o un cobro.",
              "Zero difference: the account balances. If the books show more, a bank fee or charge may be unrecorded; if they show less, a deposit or collection may be missing.",
            ),
            mistake: t(
              "Hacerlo al revés: restar el depósito en tránsito y sumar los cheques.",
              "Doing it backwards: subtracting the deposit in transit and adding the checks.",
            ),
          },
        ],
      },
      {
        heading: t("¿Y si el auditor halla errores?", "What if the auditor finds errors?"),
        body: [
          t(
            "Cuando una prueba encuentra un error, el auditor lo cuantifica y propone un **ajuste de auditoría**: un asiento que la empresa debería registrar para corregir. Por ejemplo, si encuentra un recibo de luz de diciembre que no se registró, propone cargar el gasto y abonar la cuenta por pagar.",
            "When a test finds an error, the auditor quantifies it and proposes an **audit adjustment**: an entry the company should record to correct it. For example, if it finds an unrecorded December electricity bill, it proposes debiting the expense and crediting the payable.",
          ),
          t(
            "Todas las diferencias se acumulan en una **cédula de diferencias** (NIA 450). Se suman por su efecto en la utilidad: las que la **inflan** (sobrestiman) y las que la **reducen** (subestiman) se compensan para ver el efecto neto. Luego se compara contra la **materialidad**: el monto a partir del cual un error podría cambiar la decisión de un usuario.",
            "All differences are accumulated in a **summary of misstatements** (ISA 450). They are added up by their effect on profit: those that **inflate** (overstate) it and those that **reduce** (understate) it offset each other to see the net effect. That is then compared against **materiality**: the amount above which an error could change a user's decision.",
          ),
          t(
            "El auditor pide a la administración corregir las diferencias. Las que no se corrijan se evalúan solas y en conjunto; si son materiales, afectan el tipo de opinión (que verás en el tema de informes). Mini ejemplo: con materialidad de $300,000 y diferencias netas no corregidas de $50,000, en principio no hay efecto en la opinión, aunque se comunican a la dirección.",
            "The auditor asks management to correct the differences. Those not corrected are evaluated individually and in aggregate; if they are material, they affect the type of opinion (which you will see in the reporting topic). Mini example: with materiality of $300,000 and net uncorrected differences of $50,000, in principle there is no effect on the opinion, although they are communicated to management.",
          ),
        ],
        formulas: [
          {
            name: t("Ajuste de auditoría por un gasto no registrado", "Audit adjustment for an unrecorded expense"),
            expression: "Cargo a la cuenta de gasto = Abono a la cuenta por pagar = Monto del gasto del periodo",
            variables: [
              { symbol: "Cuenta de gasto", meaning: t("La cuenta del gasto que faltó (por ejemplo, Luz, agua y teléfono). El **cargo** la aumenta.", "The account of the missing expense (for example, Electricity, water and phone). The **debit** increases it.") },
              { symbol: "Cuenta por pagar", meaning: t("La deuda que existía al cierre (por ejemplo, Acreedores diversos para servicios). El **abono** la aumenta.", "The debt that existed at year-end (for example, Sundry creditors for services). The **credit** increases it.") },
              { symbol: "Monto del gasto del periodo", meaning: t("Los pesos que corresponden al año auditado, aunque se paguen después.", "The pesos that belong to the audited year, even if paid later.") },
            ],
            steps: [
              t("Confirma que el gasto es del año auditado (por ejemplo, consumo de diciembre).", "Confirm the expense belongs to the audited year (for example, December usage)."),
              t("Carga la cuenta de gasto por el monto.", "Debit the expense account for the amount."),
              t("Abona la cuenta por pagar por el mismo monto (no Bancos, porque al cierre aún no se pagaba).", "Credit the payable account for the same amount (not Banks, because it had not been paid at year-end)."),
            ],
            example: t(
              "En enero llega un recibo de agua por $3,200 del consumo de diciembre que no se registró. Ajuste al 31 de diciembre: cargo a Luz, agua y teléfono **$3,200** y abono a Acreedores diversos **$3,200**. La utilidad baja $3,200.",
              "In January a $3,200 water bill for December usage arrives that was not recorded. Adjustment as of December 31: debit Electricity, water and phone **$3,200** and credit Sundry creditors **$3,200**. Profit goes down $3,200.",
            ),
            mistake: t(
              "Abonar Bancos (eso registra el pago de enero, no la deuda de diciembre) o usar Proveedores, que es para compras de mercancía.",
              "Crediting Banks (that records January's payment, not December's debt) or using Suppliers, which is for merchandise purchases.",
            ),
          },
          {
            name: t("Efecto neto de las diferencias en la utilidad", "Net effect of differences on profit"),
            expression: "Efecto neto en utilidad = Σ sobrestimaciones − Σ subestimaciones  →  comparar con materialidad",
            variables: [
              { symbol: "Efecto neto en utilidad", meaning: t("Cuántos pesos está inflada (o reducida) la utilidad por todos los errores juntos.", "How many pesos profit is inflated (or reduced) by all the errors together.") },
              { symbol: "Σ", meaning: t("Significa \"suma de\".", "Means \"sum of\".") },
              { symbol: "Sobrestimaciones", meaning: t("Errores que **inflan** la utilidad: ventas de más o gastos que faltan, en pesos.", "Errors that **inflate** profit: extra sales or missing expenses, in pesos.") },
              { symbol: "Subestimaciones", meaning: t("Errores que **reducen** la utilidad: gastos de más (duplicados) o ventas que faltan, en pesos.", "Errors that **reduce** profit: extra (duplicated) expenses or missing sales, in pesos.") },
              { symbol: "Materialidad", meaning: t("El monto a partir del cual un error ya es importante para quien lee los estados, en pesos.", "The amount above which an error matters to the readers of the statements, in pesos.") },
            ],
            steps: [
              t("Clasifica cada diferencia: ¿infla la utilidad o la reduce?", "Classify each difference: does it inflate profit or reduce it?"),
              t("Suma todas las que la inflan.", "Add up all the ones that inflate it."),
              t("Suma todas las que la reducen y réstalas a la suma anterior.", "Add up all the ones that reduce it and subtract them from the previous sum."),
              t("Compara el neto con la materialidad: si es mayor o igual, es material.", "Compare the net amount with materiality: if it is equal or higher, it is material."),
            ],
            example: t(
              "Materialidad: $100,000. Diferencias: ingresos registrados de más $30,000 (infla), gastos omitidos $18,000 (infla) y un gasto registrado dos veces $8,000 (reduce). Paso 2: $30,000 + $18,000 = $48,000. Paso 3: $48,000 − $8,000 = **$40,000** de sobrestimación. Paso 4: $40,000 es menor que $100,000, así que no es material en conjunto.",
              "Materiality: $100,000. Differences: income over-recorded $30,000 (inflates), omitted expenses $18,000 (inflate) and an expense recorded twice $8,000 (reduces). Step 2: $30,000 + $18,000 = $48,000. Step 3: $48,000 − $8,000 = **$40,000** overstatement. Step 4: $40,000 is below $100,000, so it is not material in aggregate.",
            ),
            interpret: t(
              "Positivo: la utilidad está inflada. Negativo: está reducida. Aunque no sea material, el auditor pide corregir y lo comunica a la dirección.",
              "Positive: profit is inflated. Negative: it is reduced. Even if not material, the auditor asks for corrections and tells management.",
            ),
            mistake: t(
              "Sumar todas las diferencias sin fijarse en su dirección; un gasto duplicado va en sentido contrario.",
              "Adding all the differences without looking at their direction; a duplicated expense goes the opposite way.",
            ),
          },
        ],
      },
    ],
    examples: [
      {
        title: t("Prueba de corte de ventas", "Sales cutoff test"),
        problem: t(
          "Al revisar las últimas facturas de diciembre, el auditor encuentra una venta a crédito por $40,000 fechada el 31 de diciembre cuya mercancía (costo $25,000) se embarcó el 3 de enero. La empresa registró la venta y dio de baja el inventario en diciembre. ¿Qué ajuste propone?",
          "Reviewing the last December invoices, the auditor finds a $40,000 credit sale dated December 31 whose goods (cost $25,000) shipped on January 3. The company recorded the sale and removed the inventory in December. What adjustment does the auditor propose?",
        ),
        steps: [
          t("La venta corresponde a enero: en diciembre las ventas están sobrestimadas $40,000.", "The sale belongs to January: December sales are overstated by $40,000."),
          t("Ajuste 1: cargo a Ventas $40,000 y abono a Clientes $40,000.", "Adjustment 1: debit Sales $40,000 and credit Accounts receivable $40,000."),
          t("La mercancía seguía en bodega al cierre: Ajuste 2: cargo a Inventarios $25,000 y abono a Costo de ventas $25,000.", "The goods were still in the warehouse at year-end: Adjustment 2: debit Inventory $25,000 and credit Cost of sales $25,000."),
          t("Efecto en utilidad antes de impuestos: −$40,000 + $25,000 = −$15,000.", "Effect on pre-tax profit: −$40,000 + $25,000 = −$15,000."),
        ],
        result: t(
          "La utilidad estaba sobrestimada $15,000 por un error de corte. El auditor propone ambos asientos y anota la diferencia en su cédula.",
          "Profit was overstated by $15,000 because of a cutoff error. The auditor proposes both entries and records the difference in the summary.",
        ),
      },
      {
        title: t("Cédula de diferencias contra materialidad", "Summary of misstatements against materiality"),
        problem: t(
          "Materialidad (hipotética): $200,000. Diferencias no corregidas: gastos no registrados $90,000; estimación de incobrables insuficiente por $70,000; depreciación registrada de más por $20,000. ¿Cuál es el efecto neto en la utilidad y qué concluye el auditor?",
          "Materiality (hypothetical): $200,000. Uncorrected differences: unrecorded expenses $90,000; bad-debt allowance short by $70,000; depreciation over-recorded by $20,000. What is the net effect on profit and what does the auditor conclude?",
        ),
        steps: [
          t("Gastos no registrados: la utilidad está inflada $90,000 (sobrestimación).", "Unrecorded expenses: profit is inflated by $90,000 (overstatement)."),
          t("Estimación insuficiente: falta gasto, utilidad inflada $70,000 (sobrestimación).", "Short allowance: missing expense, profit inflated by $70,000 (overstatement)."),
          t("Depreciación de más: sobra gasto, utilidad reducida $20,000 (subestimación).", "Excess depreciation: too much expense, profit reduced by $20,000 (understatement)."),
          t("Neto: $90,000 + $70,000 − $20,000 = $140,000 de sobrestimación.", "Net: $90,000 + $70,000 − $20,000 = $140,000 overstatement."),
        ],
        result: t(
          "$140,000 es menor que $200,000, así que en conjunto no es material. Aun así el auditor pide corregirlas, las comunica a la dirección y evalúa si alguna es importante por su naturaleza.",
          "$140,000 is below $200,000, so in aggregate it is not material. Even so, the auditor asks for them to be corrected, communicates them to management and evaluates whether any is significant by its nature.",
        ),
      },
    ],
    keyPoints: [
      t("La auditoría externa opina si los estados presentan razonablemente la situación, no si son perfectos.", "The external audit gives an opinion on whether the statements are fairly presented, not whether they are perfect."),
      t("Cada cifra contiene aseveraciones: existencia, integridad, valuación, derechos, corte y presentación.", "Each figure contains assertions: existence, completeness, valuation, rights, cutoff and presentation."),
      t("Confirmar, observar conteos, conciliar y probar el corte son pruebas sustantivas clave.", "Confirming, observing counts, reconciling and testing cutoff are key substantive tests."),
      t("En pasivos, el riesgo principal es la integridad: buscar pasivos no registrados.", "For liabilities, the main risk is completeness: search for unrecorded liabilities."),
      t("Las diferencias se acumulan, se netean por su efecto en utilidad y se comparan con la materialidad.", "Differences are accumulated, netted by their effect on profit and compared with materiality."),
    ],
    normativeNote: NOTE_FS_AUDIT,
    exerciseIds: ['AUD-08-E1', 'AUD-08-E2', 'AUD-08-E4', 'AUD-08-E5', 'AUD-08-E6'],
  },

  // ───────────────────────────── AUD-09 ─────────────────────────────
  {
    id: 'AUD-09',
    level: 5,
    topicIds: ['AUD.9'],
    title: t("Auditoría interna", "Internal auditing"),
    summary: t(
      "La auditoría interna es un equipo de la propia empresa, independiente de las áreas que revisa, que evalúa con un plan basado en riesgos si los controles y la gestión de riesgos funcionan, y da seguimiento a que se corrijan los hallazgos.",
      "Internal audit is a team within the company, independent from the areas it reviews, that uses a risk-based plan to evaluate whether controls and risk management work, and follows up to make sure findings are corrected.",
    ),
    minutes: 11,
    objectives: [
      t("Explicar qué hace la auditoría interna y en qué se diferencia de la auditoría externa.", "Explain what internal audit does and how it differs from external audit."),
      t("Ubicar a la auditoría interna en el Modelo de las Tres Líneas y explicar cómo protege su independencia.", "Place internal audit in the Three Lines Model and explain how it protects its independence."),
      t("Construir un plan anual basado en riesgos y redactar un hallazgo con condición, criterio, causa y efecto.", "Build a risk-based annual plan and write a finding with condition, criteria, cause and effect."),
    ],
    theory: [
      {
        heading: t("¿Quién revisa por dentro?", "Who checks from the inside?"),
        body: [
          t(
            "La **auditoría interna** es un área de la propia empresa que da **aseguramiento** independiente y objetivo (le dice al consejo y a la dirección si los procesos funcionan como deben) y también **asesoría** (ayuda a mejorar procesos sin tomar decisiones por la administración). Su guía internacional son las normas del **Instituto de Auditores Internos (IIA)**.",
            "**Internal audit** is a function inside the company that provides independent, objective **assurance** (it tells the board and management whether processes work as they should) and also **advisory** services (it helps improve processes without making decisions for management). Its international guidance is the standards of the **Institute of Internal Auditors (IIA)**.",
          ),
          t(
            "Se parece a la auditoría externa, pero no es lo mismo. El **auditor externo** es un despacho ajeno a la empresa que opina sobre los **estados financieros** una vez al año para usuarios externos. El **auditor interno** trabaja todo el año para la empresa y revisa **cualquier proceso**: compras, nómina, sistemas, cumplimiento, ventas, sucursales.",
            "It resembles external audit, but it is not the same. The **external auditor** is a firm outside the company that gives an opinion on the **financial statements** once a year for external users. The **internal auditor** works all year for the company and reviews **any process**: purchasing, payroll, systems, compliance, sales, branches.",
          ),
          t(
            "Mini ejemplo: una cadena de tiendas de autoservicio tiene 200 sucursales. Auditoría interna visita cada año las de mayor riesgo, revisa arqueos de caja, mermas y descuentos, y reporta los resultados al comité de auditoría.",
            "Mini example: a supermarket chain has 200 branches. Internal audit visits the highest-risk ones every year, reviews cash counts, shrinkage and discounts, and reports results to the audit committee.",
          ),
        ],
        bullets: [
          t("Externa: independiente de la empresa; opina sobre estados financieros.", "External: independent from the company; opines on financial statements."),
          t("Interna: parte de la empresa; evalúa riesgos, controles y procesos.", "Internal: part of the company; evaluates risks, controls and processes."),
          t("Externa: usuarios externos (accionistas, bancos). Interna: consejo y dirección.", "External: external users (shareholders, banks). Internal: board and management."),
          t("Ambas se coordinan para no duplicar trabajo.", "Both coordinate so as not to duplicate work."),
        ],
      },
      {
        heading: t("¿Por qué debe ser independiente?", "Why must it be independent?"),
        body: [
          t(
            "El **Modelo de las Tres Líneas** del IIA ordena quién hace qué con los riesgos. La **primera línea** son las áreas operativas que dan el servicio y manejan sus riesgos día a día (el gerente de ventas que revisa descuentos). La **segunda línea** apoya y vigila: administración de riesgos, cumplimiento, control interno. La **tercera línea** es auditoría interna, que evalúa de forma independiente a las dos primeras.",
            "The IIA's **Three Lines Model** organizes who does what with risks. The **first line** is the operating areas that deliver the service and manage their risks day to day (the sales manager reviewing discounts). The **second line** supports and monitors: risk management, compliance, internal control. The **third line** is internal audit, which independently evaluates the first two.",
          ),
          t(
            "Para ser objetiva, auditoría interna necesita **independencia**. Por eso su director reporta **funcionalmente al comité de auditoría** del consejo (que aprueba su plan, su presupuesto y recibe sus informes) y solo **administrativamente** a la dirección general (vacaciones, oficina, trámites). Así nadie a quien audita puede frenar un hallazgo incómodo.",
            "To be objective, internal audit needs **independence**. That is why its head reports **functionally to the board's audit committee** (which approves its plan and budget and receives its reports) and only **administratively** to the CEO (vacations, office, paperwork). That way nobody it audits can block an uncomfortable finding.",
          ),
          t(
            "La **objetividad** también se cuida en lo individual: un auditor no debe revisar un proceso que él mismo diseñó u operó hace poco, ni asumir responsabilidades de la administración. Mini ejemplo: si una auditora acaba de pasar de Tesorería a Auditoría Interna, no debería auditar Tesorería durante un tiempo razonable.",
            "**Objectivity** is also protected individually: an auditor should not review a process he or she designed or operated recently, nor take on management responsibilities. Mini example: if an auditor just moved from Treasury to Internal Audit, she should not audit Treasury for a reasonable period.",
          ),
        ],
      },
      {
        heading: t("¿Qué revisa y cómo reporta?", "What does it review and report?"),
        body: [
          t(
            "Como no se puede revisar todo, auditoría interna arma un **plan anual basado en riesgos**: lista los procesos de la empresa (el **universo auditable**), califica el riesgo de cada uno y asigna más horas a los de mayor riesgo. El comité de auditoría aprueba el plan.",
            "Since not everything can be reviewed, internal audit builds a **risk-based annual plan**: it lists the company's processes (the **audit universe**), scores the risk of each one and assigns more hours to the riskiest. The audit committee approves the plan.",
          ),
          t(
            "Cada revisión termina en **hallazgos** u observaciones. Un buen hallazgo tiene cuatro partes: **condición** (lo que encontraste), **criterio** (lo que debería ser: política, ley o contrato), **causa** (por qué pasó) y **efecto** (qué riesgo o pérdida provoca). Con eso se acuerda un **plan de acción** con responsable y fecha.",
            "Each review ends in **findings** or observations. A good finding has four parts: **condition** (what you found), **criteria** (what it should be: policy, law or contract), **cause** (why it happened) and **effect** (what risk or loss it causes). With that, an **action plan** is agreed with an owner and a date.",
          ),
          t(
            "El trabajo no acaba con el informe: auditoría interna hace **seguimiento** para verificar que los planes de acción se cumplan y reporta al comité los que están vencidos. Mini ejemplo: de 20 observaciones, 15 se cerraron a tiempo; el comité pide explicación a los dueños de las 5 restantes.",
            "The work does not end with the report: internal audit **follows up** to verify that action plans are completed and reports overdue ones to the committee. Mini example: of 20 observations, 15 were closed on time; the committee asks the owners of the remaining 5 for an explanation.",
          ),
        ],
        formulas: [
          {
            name: t("Horas de auditoría para cada área según su riesgo", "Audit hours for each area based on its risk"),
            expression: "Horas del área = Horas disponibles × (Riesgo del área ÷ Suma de riesgos)",
            variables: [
              { symbol: "Horas del área", meaning: t("Las horas del plan que le tocan a esa área.", "The plan hours that area gets.") },
              { symbol: "Horas disponibles", meaning: t("Todas las horas que tiene el equipo de auditoría interna en el año.", "All the hours the internal audit team has in the year.") },
              { symbol: "Riesgo del área", meaning: t("La calificación de riesgo de esa área (un número; más alto = más riesgo).", "That area's risk score (a number; higher = more risk).") },
              { symbol: "Suma de riesgos", meaning: t("La suma de las calificaciones de todas las áreas del plan.", "The sum of the scores of all areas in the plan.") },
            ],
            steps: [
              t("Suma las calificaciones de riesgo de todas las áreas.", "Add up the risk scores of all the areas."),
              t("Divide la calificación del área entre esa suma: es la parte que le toca (por ejemplo, 50 ÷ 100 = 0.50).", "Divide the area's score by that sum: that is its share (for example, 50 ÷ 100 = 0.50)."),
              t("Multiplica esa parte por las horas disponibles.", "Multiply that share by the available hours."),
              t("Comprueba: las horas de todas las áreas deben sumar las horas disponibles.", "Check: the hours of all areas must add up to the available hours."),
            ],
            example: t(
              "Hay 2,000 horas. Calificaciones: Ventas 50, Nómina 30 y Sistemas 20. Paso 1: 50 + 30 + 20 = 100. Ventas: 50 ÷ 100 = 0.50; 0.50 × 2,000 = **1,000 horas**. Nómina: 0.30 × 2,000 = 600. Sistemas: 0.20 × 2,000 = 400. Comprobación: 1,000 + 600 + 400 = 2,000.",
              "There are 2,000 hours. Scores: Sales 50, Payroll 30 and Systems 20. Step 1: 50 + 30 + 20 = 100. Sales: 50 ÷ 100 = 0.50; 0.50 × 2,000 = **1,000 hours**. Payroll: 0.30 × 2,000 = 600. Systems: 0.20 × 2,000 = 400. Check: 1,000 + 600 + 400 = 2,000.",
            ),
            mistake: t(
              "Repartir las horas por partes iguales entre las áreas, ignorando que unas son más riesgosas que otras.",
              "Splitting the hours equally among the areas, ignoring that some are riskier than others.",
            ),
          },
          {
            name: t("Avance del seguimiento de observaciones", "Progress in following up on observations"),
            expression: "% atendidas = Observaciones atendidas ÷ Observaciones totales × 100  ·  Pendientes = Observaciones totales − Observaciones atendidas",
            variables: [
              { symbol: "% atendidas", meaning: t("Qué porcentaje de las observaciones ya se corrigió.", "What percentage of the observations has already been fixed.") },
              { symbol: "Observaciones atendidas", meaning: t("Las que ya se corrigieron **y** auditoría interna verificó.", "Those already fixed **and** verified by internal audit.") },
              { symbol: "Observaciones totales", meaning: t("Todas las observaciones que se están revisando (por ejemplo, las que ya vencieron).", "All the observations being reviewed (for example, the ones already past due).") },
              { symbol: "Pendientes", meaning: t("Las que faltan por corregir y se reportan al comité.", "Those still to be fixed, which are reported to the committee.") },
            ],
            steps: [
              t("Cuenta las observaciones totales y las atendidas (solo las verificadas).", "Count the total observations and the addressed ones (only verified ones)."),
              t("Divide atendidas entre totales y multiplica por 100.", "Divide addressed by total and multiply by 100."),
              t("Resta atendidas a totales para saber cuántas siguen pendientes.", "Subtract addressed from total to know how many remain open."),
            ],
            example: t(
              "Hay 32 observaciones vencidas y 24 se atendieron. Paso 2: 24 ÷ 32 = 0.75; 0.75 × 100 = **75%**. Paso 3: 32 − 24 = **8 pendientes**.",
              "There are 32 overdue observations and 24 were addressed. Step 2: 24 ÷ 32 = 0.75; 0.75 × 100 = **75%**. Step 3: 32 − 24 = **8 open**.",
            ),
            mistake: t(
              "Contar como atendida una observación solo porque el área dice que la corrigió, sin que auditoría lo verifique.",
              "Counting an observation as addressed just because the area says it fixed it, without audit verifying it.",
            ),
          },
        ],
      },
    ],
    examples: [
      {
        title: t("Repartir horas según el riesgo", "Allocating hours by risk"),
        problem: t(
          "Auditoría interna tiene 1,600 horas al año. Calificó su universo así: Compras 40, Nómina 25, Tesorería 20 y TI 15 (suma 100). ¿Cuántas horas le toca a cada área si se reparten en proporción al riesgo?",
          "Internal audit has 1,600 hours a year. It scored its universe as follows: Purchasing 40, Payroll 25, Treasury 20 and IT 15 (total 100). How many hours does each area get if they are allocated in proportion to risk?",
        ),
        steps: [
          t("Compras: 1,600 × 40/100 = 640 horas.", "Purchasing: 1,600 × 40/100 = 640 hours."),
          t("Nómina: 1,600 × 25/100 = 400 horas.", "Payroll: 1,600 × 25/100 = 400 hours."),
          t("Tesorería: 1,600 × 20/100 = 320 horas.", "Treasury: 1,600 × 20/100 = 320 hours."),
          t("TI: 1,600 × 15/100 = 240 horas. Comprobación: 640 + 400 + 320 + 240 = 1,600.", "IT: 1,600 × 15/100 = 240 hours. Check: 640 + 400 + 320 + 240 = 1,600."),
        ],
        result: t(
          "Compras 640, Nómina 400, Tesorería 320 y TI 240 horas. El plan se presenta al comité de auditoría para su aprobación.",
          "Purchasing 640, Payroll 400, Treasury 320 and IT 240 hours. The plan is presented to the audit committee for approval.",
        ),
      },
      {
        title: t("Redactar un hallazgo completo", "Writing a complete finding"),
        problem: t(
          "En una muestra de 30 órdenes de compra mayores a $20,000, el auditor encuentra 9 sin autorización del gerente. La política exige esa autorización. El sistema permite liberar órdenes sin aprobación y el personal nuevo no conocía la regla. Redacta el hallazgo.",
          "In a sample of 30 purchase orders above $20,000, the auditor finds 9 without the manager's approval. Policy requires that approval. The system lets orders be released without approval and new staff did not know the rule. Write the finding.",
        ),
        steps: [
          t("Condición: 9 de 30 órdenes (30%) se liberaron sin autorización.", "Condition: 9 of 30 orders (30%) were released without approval."),
          t("Criterio: la política de compras exige autorización del gerente arriba de $20,000.", "Criteria: the purchasing policy requires manager approval above $20,000."),
          t("Causa: el sistema no bloquea la liberación y faltó capacitación al personal nuevo.", "Cause: the system does not block release and new staff lacked training."),
          t("Efecto: riesgo de compras innecesarias, sobreprecios o a proveedores no aprobados.", "Effect: risk of unnecessary purchases, overpricing or purchases from unapproved suppliers."),
          t("Plan de acción: configurar el bloqueo en el sistema y capacitar; responsable: gerente de compras; fecha comprometida.", "Action plan: configure the system block and train staff; owner: purchasing manager; committed date."),
        ],
        result: t(
          "Un hallazgo con sus cuatro partes permite atacar la causa (no solo el síntoma) y dar seguimiento al plan de acción.",
          "A finding with its four parts makes it possible to address the cause (not just the symptom) and to follow up on the action plan.",
        ),
      },
    ],
    keyPoints: [
      t("Auditoría interna da aseguramiento y asesoría sobre riesgos, controles y procesos de toda la empresa.", "Internal audit provides assurance and advice on risks, controls and processes across the company."),
      t("Es la tercera línea: evalúa de forma independiente a la primera y a la segunda.", "It is the third line: it independently evaluates the first and the second."),
      t("Reporta funcionalmente al comité de auditoría para proteger su independencia.", "It reports functionally to the audit committee to protect its independence."),
      t("El plan anual asigna más horas a los procesos de mayor riesgo.", "The annual plan assigns more hours to the highest-risk processes."),
      t("Un hallazgo completo tiene condición, criterio, causa y efecto, y se le da seguimiento.", "A complete finding has condition, criteria, cause and effect, and is followed up."),
    ],
    normativeNote: NOTE_IIA,
    exerciseIds: ['AUD-09-E1', 'AUD-09-E2', 'AUD-09-E3', 'AUD-09-E4', 'AUD-09-E5'],
  },

  // ───────────────────────────── AUD-10 ─────────────────────────────
  {
    id: 'AUD-10',
    level: 5,
    topicIds: ['AUD.10'],
    title: t("Auditoría de sistemas ERP", "ERP systems auditing"),
    summary: t(
      "Auditar un ERP es revisar cómo el sistema integrado de la empresa ejecuta los procesos de negocio: sus controles configurados, sus datos maestros y quién tiene permiso de hacer qué, para asegurar que las transacciones sean válidas y estén bien separadas las funciones.",
      "Auditing an ERP means reviewing how the company's integrated system runs business processes: its configured controls, its master data and who is allowed to do what, to ensure transactions are valid and duties are properly segregated.",
    ),
    minutes: 11,
    objectives: [
      t("Explicar qué es un ERP y por qué cambia la forma de auditar los procesos de negocio.", "Explain what an ERP is and why it changes how business processes are audited."),
      t("Evaluar controles de aplicación configurados, como el cotejo de tres vías, y los riesgos de los datos maestros.", "Evaluate configured application controls, such as the three-way match, and master data risks."),
      t("Identificar conflictos de segregación de funciones en roles del ERP y proponer cómo mitigarlos.", "Identify segregation-of-duties conflicts in ERP roles and propose how to mitigate them."),
    ],
    theory: [
      {
        heading: t("¿Un solo sistema para todo?", "One system for everything?"),
        body: [
          t(
            "Un **ERP** (planeación de recursos empresariales) es un sistema que reúne en **una sola base de datos** las áreas de la empresa: compras, almacén, ventas, cobranza, nómina y contabilidad. Cuando el almacén registra que llegó mercancía, el dato queda disponible al instante para cuentas por pagar y para la contabilidad, sin volver a capturarlo.",
            "An **ERP** (enterprise resource planning) is a system that brings the company's areas together in **a single database**: purchasing, warehouse, sales, collections, payroll and accounting. When the warehouse records that goods arrived, the data is instantly available to accounts payable and to accounting, without re-entering it.",
          ),
          t(
            "Para el auditor esto cambia todo. Las operaciones fluyen por **ciclos** completos, como **compra-pago** (pedido, recepción, factura, pago) y **venta-cobro** (pedido, entrega, factura, cobro), y muchos asientos contables se generan **automáticamente**. Ya no basta con revisar pólizas: hay que entender **cómo está configurado** el sistema.",
            "For the auditor this changes everything. Transactions flow through complete **cycles**, such as **procure-to-pay** (order, receipt, invoice, payment) and **order-to-cash** (order, delivery, invoice, collection), and many journal entries are generated **automatically**. Reviewing entries is no longer enough: you must understand **how the system is configured**.",
          ),
          t(
            "Ventaja: como todo está en una base de datos, el auditor puede **analizar el 100% de las transacciones** en lugar de una muestra. Riesgo: un error de configuración se repite **en miles de operaciones**. Mini ejemplo: si alguien configura mal el porcentaje de descuento máximo, todas las ventas del año podrían salir con descuentos indebidos.",
            "Advantage: since everything is in one database, the auditor can **analyze 100% of transactions** instead of a sample. Risk: a configuration error repeats **across thousands of transactions**. Mini example: if someone misconfigures the maximum discount percentage, every sale of the year could go out with improper discounts.",
          ),
        ],
      },
      {
        heading: t("¿Qué reglas revisan cada operación?", "Which rules check each transaction?"),
        body: [
          t(
            "Los **controles de aplicación** son reglas dentro del ERP que revisan cada transacción. Pueden ser **automáticos** (el sistema bloquea o calcula solo) o **manuales apoyados en reportes** del sistema. El más conocido en compras es el **cotejo de tres vías**: el ERP compara la **orden de compra**, la **recepción en almacén** y la **factura del proveedor**, y solo libera el pago si coinciden dentro de una tolerancia.",
            "**Application controls** are rules inside the ERP that check each transaction. They can be **automated** (the system blocks or calculates on its own) or **manual controls that rely on system reports**. The best known in purchasing is the **three-way match**: the ERP compares the **purchase order**, the **warehouse receipt** and the **supplier invoice**, and only releases payment if they match within a tolerance.",
          ),
          t(
            "Un control automático tiene una ventaja: si está bien configurado y nadie puede cambiarlo sin autorización (eso lo aseguran los **controles generales de TI**, tema siguiente), funciona igual siempre. Por eso el auditor puede probarlo con **pocas transacciones** por cada variante, en vez de una muestra grande.",
            "An automated control has an advantage: if it is properly configured and nobody can change it without authorization (which **IT general controls** ensure, next topic), it works the same way every time. That is why the auditor can test it with **a few transactions** per variant, instead of a large sample.",
          ),
          t(
            "Los **datos maestros** son la información fija que usan todas las transacciones: catálogo de proveedores, clientes, empleados, precios. Un cambio indebido aquí es peligroso: si alguien cambia la cuenta bancaria de un proveedor por la suya, todos los pagos se desvían. Mini ejemplo: el auditor cruza las cuentas bancarias de proveedores con las de empleados y encuentra una coincidencia que hay que investigar.",
            "**Master data** is the fixed information all transactions use: supplier, customer and employee files, prices. An improper change here is dangerous: if someone changes a supplier's bank account to their own, every payment is diverted. Mini example: the auditor matches supplier bank accounts against employee accounts and finds a match that must be investigated.",
          ),
        ],
        formulas: [
          {
            name: t("Monto que se puede pagar en el cotejo de tres vías", "Amount that can be paid in the three-way match"),
            expression: "Monto pagable = Cantidad recibida × Precio de la orden  ·  Diferencia = Monto facturado − Monto pagable",
            variables: [
              { symbol: "Monto pagable", meaning: t("Lo que sí se debe pagar al proveedor, en pesos.", "What should actually be paid to the supplier, in pesos.") },
              { symbol: "Cantidad recibida", meaning: t("Las piezas que el almacén registró que llegaron.", "The pieces the warehouse recorded as received.") },
              { symbol: "Precio de la orden", meaning: t("El precio por pieza acordado en la orden de compra, en pesos.", "The price per piece agreed on the purchase order, in pesos.") },
              { symbol: "Monto facturado", meaning: t("Lo que cobra el proveedor en su factura, en pesos.", "What the supplier charges on its invoice, in pesos.") },
              { symbol: "Diferencia", meaning: t("Lo cobrado de más; el ERP bloquea la factura hasta aclararlo.", "The amount overcharged; the ERP blocks the invoice until it is cleared up.") },
            ],
            steps: [
              t("Compara cantidades: orden, recepción y factura.", "Compare quantities: order, receipt and invoice."),
              t("Compara el precio de la factura con el de la orden.", "Compare the invoice price with the order price."),
              t("Multiplica lo realmente recibido por el precio de la orden: eso es lo pagable.", "Multiply what was actually received by the order price: that is the payable amount."),
              t("Resta lo pagable a lo facturado para ver la diferencia que hay que aclarar.", "Subtract the payable amount from the invoiced amount to see the difference to clear up."),
            ],
            example: t(
              "Orden: 200 cajas a $30. Llegan 190. El proveedor factura 200 cajas por $6,000. Paso 3: 190 × $30 = **$5,700** pagables. Paso 4: $6,000 − $5,700 = **$300** de diferencia, que requiere nota de crédito o la entrega faltante.",
              "Order: 200 boxes at $30. 190 arrive. The supplier invoices 200 boxes for $6,000. Step 3: 190 × $30 = **$5,700** payable. Step 4: $6,000 − $5,700 = **$300** difference, which requires a credit note or the missing delivery.",
            ),
          },
          {
            name: t("Monto máximo de factura con tolerancia", "Maximum invoice amount with a tolerance"),
            expression: "Monto máximo = Cantidad × Precio unitario × (1 + Tolerancia %)",
            variables: [
              { symbol: "Monto máximo", meaning: t("La factura más alta que el ERP acepta sin bloquearla, en pesos.", "The highest invoice the ERP accepts without blocking it, in pesos.") },
              { symbol: "Cantidad", meaning: t("Las unidades de la orden de compra.", "The units on the purchase order.") },
              { symbol: "Precio unitario", meaning: t("El precio de cada unidad en la orden, en pesos.", "The price of each unit on the order, in pesos.") },
              { symbol: "Tolerancia %", meaning: t("Cuánto puede pasarse la factura del valor de la orden, en porcentaje (en decimal: 3% = 0.03).", "How much the invoice may exceed the order value, as a percentage (as a decimal: 3% = 0.03).") },
            ],
            steps: [
              t("Calcula el valor de la orden: cantidad × precio unitario.", "Compute the order value: quantity × unit price."),
              t("Convierte la tolerancia a decimal y multiplícala por el valor de la orden: es el margen permitido en pesos.", "Convert the tolerance to a decimal and multiply it by the order value: that is the allowed margin in pesos."),
              t("Suma el margen al valor de la orden: ese es el monto máximo.", "Add the margin to the order value: that is the maximum amount."),
            ],
            example: t(
              "Orden: 40 sillas a $500, tolerancia 3%. Paso 1: 40 × $500 = $20,000. Paso 2: 0.03 × $20,000 = $600. Paso 3: $20,000 + $600 = **$20,600**. Una factura de $20,900 se bloquearía.",
              "Order: 40 chairs at $500, 3% tolerance. Step 1: 40 × $500 = $20,000. Step 2: 0.03 × $20,000 = $600. Step 3: $20,000 + $600 = **$20,600**. A $20,900 invoice would be blocked.",
            ),
            mistake: t(
              "Calcular el porcentaje sobre el precio de una sola unidad y olvidar multiplicar por la cantidad.",
              "Computing the percentage on a single unit's price and forgetting to multiply by the quantity.",
            ),
          },
        ],
        bullets: [
          t("Cotejo de tres vías: orden de compra, recepción y factura.", "Three-way match: purchase order, receipt and invoice."),
          t("Campos obligatorios y validaciones (RFC con formato válido).", "Mandatory fields and validations (properly formatted tax ID)."),
          t("Bloqueo de facturas duplicadas (mismo proveedor, folio y monto).", "Blocking duplicate invoices (same supplier, number and amount)."),
          t("Límites de crédito y de descuento por cliente.", "Credit and discount limits per customer."),
          t("Bitácora de cambios a datos maestros revisada por alguien independiente.", "Change log of master data reviewed by someone independent."),
        ],
      },
      {
        heading: t("¿Quién puede hacer qué?", "Who can do what?"),
        body: [
          t(
            "En un ERP cada usuario recibe **roles** que le dan permisos (crear proveedores, aprobar pedidos, emitir pagos). La **segregación de funciones** dice que una sola persona no debe controlar todos los pasos de una operación sensible, porque podría cometer y ocultar un error o un fraude.",
            "In an ERP each user receives **roles** that grant permissions (create suppliers, approve orders, issue payments). **Segregation of duties** says a single person should not control every step of a sensitive transaction, because they could commit and hide an error or a fraud.",
          ),
          t(
            "El auditor usa una **matriz de conflictos**: una lista de combinaciones de permisos incompatibles. Luego revisa los roles reales de cada usuario y detecta quién tiene combinaciones prohibidas. Los conflictos se **eliminan** (quitando permisos) o, si el equipo es pequeño, se **mitigan** con un control compensatorio, como una revisión mensual independiente.",
            "The auditor uses a **conflict matrix**: a list of incompatible permission combinations. Then it reviews each user's actual roles and detects who has prohibited combinations. Conflicts are **removed** (by taking away permissions) or, if the team is small, **mitigated** with a compensating control, such as an independent monthly review.",
          ),
          t(
            "También revisa **usuarios genéricos** (\"almacen1\", que usan varios y no permite saber quién hizo qué) y **superusuarios** con acceso total, que deben ser pocos, temporales y vigilados. Mini ejemplo: de 150 usuarios, 9 tienen conflictos (6%); al quitar permisos a 6, quedan 3 (2%) con control compensatorio documentado.",
            "It also reviews **generic users** (\"warehouse1\", shared by several people so you cannot tell who did what) and **superusers** with full access, who must be few, temporary and monitored. Mini example: of 150 users, 9 have conflicts (6%); after removing permissions from 6, 3 remain (2%) with a documented compensating control.",
          ),
        ],
        formulas: [
          {
            name: t("Porcentaje de usuarios con conflicto de funciones", "Percentage of users with a duties conflict"),
            expression: "% usuarios con conflicto = Usuarios con conflicto ÷ Usuarios activos × 100",
            variables: [
              { symbol: "% usuarios con conflicto", meaning: t("Qué parte de todos los usuarios tiene permisos incompatibles, en porcentaje.", "What share of all users has incompatible permissions, as a percentage.") },
              { symbol: "Usuarios con conflicto", meaning: t("Cuántas personas tienen al menos una combinación prohibida de permisos.", "How many people have at least one prohibited combination of permissions.") },
              { symbol: "Usuarios activos", meaning: t("Todas las cuentas activas del ERP.", "All active ERP accounts.") },
            ],
            steps: [
              t("Cuenta los usuarios activos y los que tienen conflicto.", "Count the active users and those with conflicts."),
              t("Divide los que tienen conflicto entre los activos y multiplica por 100.", "Divide those with conflicts by the active users and multiply by 100."),
              t("Para el \"después\", resta primero a quienes se les quitaron permisos y repite la división con el mismo total de usuarios activos.", "For the \"after\" figure, first subtract those whose permissions were removed and repeat the division with the same total of active users."),
            ],
            example: t(
              "Hay 400 usuarios activos y 24 con conflicto. Antes: 24 ÷ 400 = 0.06 = **6%**. Se quitan permisos a 18: quedan 24 − 18 = 6. Después: 6 ÷ 400 = 0.015 = **1.5%**.",
              "There are 400 active users and 24 with conflicts. Before: 24 ÷ 400 = 0.06 = **6%**. Permissions are removed from 18: 24 − 18 = 6 remain. After: 6 ÷ 400 = 0.015 = **1.5%**.",
            ),
            interpret: t(
              "Lo ideal es acercarse a 0%. Los que queden necesitan un control compensatorio documentado y probado.",
              "The goal is to get close to 0%. Those remaining need a documented and tested compensating control.",
            ),
            mistake: t(
              "Dividir los que quedan entre los que tenían conflicto (6 ÷ 24) en lugar de entre todos los usuarios activos.",
              "Dividing the remaining ones by those who had conflicts (6 ÷ 24) instead of by all active users.",
            ),
          },
        ],
      },
    ],
    examples: [
      {
        title: t("Cotejo de tres vías con faltante", "Three-way match with a shortage"),
        problem: t(
          "Orden de compra: 500 piezas a $80 = $40,000. El almacén registra la recepción de 480 piezas. El proveedor factura 500 piezas por $40,000. ¿Qué debe hacer el ERP si el cotejo está bien configurado?",
          "Purchase order: 500 pieces at $80 = $40,000. The warehouse records receipt of 480 pieces. The supplier invoices 500 pieces for $40,000. What should the ERP do if the match is properly configured?",
        ),
        steps: [
          t("Compara cantidades: factura 500 contra recepción 480; hay 20 piezas facturadas que no llegaron.", "Compare quantities: invoice 500 versus receipt 480; 20 invoiced pieces did not arrive."),
          t("Compara precios: $80 en orden y factura; coinciden.", "Compare prices: $80 on order and invoice; they match."),
          t("Bloquea la factura por diferencia de cantidad.", "Blocks the invoice for a quantity difference."),
          t("Monto pagable: 480 × $80 = $38,400; la diferencia de $1,600 requiere nota de crédito o la entrega faltante.", "Payable amount: 480 × $80 = $38,400; the $1,600 difference requires a credit note or the missing delivery."),
        ],
        result: t(
          "El ERP no debe pagar $40,000. Para probar el control, el auditor procesa o localiza una factura con diferencia y verifica que el sistema la bloquee.",
          "The ERP should not pay $40,000. To test the control, the auditor processes or finds an invoice with a difference and verifies that the system blocks it.",
        ),
      },
      {
        title: t("Conflicto alta de proveedores y pagos", "Supplier creation and payments conflict"),
        problem: t(
          "Un análisis de roles muestra que una analista de cuentas por pagar puede dar de alta proveedores y también emitir pagos. ¿Por qué es un conflicto y cómo se atiende?",
          "A role analysis shows that an accounts payable analyst can create suppliers and also issue payments. Why is this a conflict and how is it addressed?",
        ),
        steps: [
          t("Riesgo: podría crear un proveedor ficticio con su propia cuenta bancaria y pagarle.", "Risk: she could create a fictitious supplier with her own bank account and pay it."),
          t("Solución preferida: quitarle el permiso de alta de proveedores y asignarlo a otra área.", "Preferred solution: remove the supplier-creation permission and assign it to another area."),
          t("Si no es posible: control compensatorio, por ejemplo, que un tercero revise cada mes la bitácora de altas y cambios de proveedores.", "If not possible: a compensating control, for example a third party reviewing the log of supplier creations and changes every month."),
          t("El auditor revisa también si ya ocurrió: busca pagos a proveedores creados por la misma usuaria.", "The auditor also checks whether it already happened: it looks for payments to suppliers created by the same user."),
        ],
        result: t(
          "Es un conflicto clásico porque permite crear y aprovechar un proveedor falso. Se elimina o se mitiga, y se revisan las transacciones pasadas.",
          "It is a classic conflict because it allows creating and exploiting a fake supplier. It is removed or mitigated, and past transactions are reviewed.",
        ),
      },
    ],
    keyPoints: [
      t("El ERP integra procesos en una sola base de datos y genera asientos automáticamente.", "The ERP integrates processes in a single database and generates entries automatically."),
      t("Un error de configuración se repite en miles de transacciones; un buen control también.", "A configuration error repeats across thousands of transactions; so does a good control."),
      t("El cotejo de tres vías compara orden de compra, recepción y factura antes de pagar.", "The three-way match compares purchase order, receipt and invoice before paying."),
      t("Los datos maestros (proveedores, cuentas bancarias, precios) son un punto crítico de fraude.", "Master data (suppliers, bank accounts, prices) is a critical fraud point."),
      t("Los conflictos de segregación de funciones se eliminan o se mitigan con controles compensatorios.", "Segregation-of-duties conflicts are removed or mitigated with compensating controls."),
    ],
    normativeNote: NOTE_ERP,
    exerciseIds: ['AUD-10-E1', 'AUD-10-E2', 'AUD-10-E3', 'AUD-10-E4', 'AUD-10-E5'],
  },

  // ───────────────────────────── AUD-11 ─────────────────────────────
  {
    id: 'AUD-11',
    level: 5,
    topicIds: ['AUD.11'],
    title: t("Auditoría de tecnologías de información", "Information technology auditing"),
    summary: t(
      "La auditoría de TI revisa los controles generales que mantienen confiables a todos los sistemas: quién entra y con qué permisos, cómo se aprueban los cambios a los programas y cómo se respaldan y recuperan los datos.",
      "IT auditing reviews the general controls that keep all systems reliable: who gets in and with what permissions, how program changes are approved and how data is backed up and recovered.",
    ),
    minutes: 11,
    objectives: [
      t("Explicar qué son los controles generales de TI y por qué sostienen a los controles automáticos.", "Explain what IT general controls are and why they support automated controls."),
      t("Evaluar controles de acceso y de administración de cambios con pruebas concretas.", "Evaluate access and change management controls with concrete tests."),
      t("Revisar respaldos, continuidad (RPO y RTO) y medidas básicas de ciberseguridad.", "Review backups, continuity (RPO and RTO) and basic cybersecurity measures."),
    ],
    theory: [
      {
        heading: t("Los cimientos de los sistemas", "The foundations of the systems"),
        body: [
          t(
            "Los **controles generales de TI** (ITGC, por sus siglas en inglés) no revisan una transacción en particular; protegen el **ambiente** donde corren todos los sistemas. Son como los cimientos de una casa: si fallan, no puedes confiar en nada de lo que está arriba, incluidos los controles automáticos del ERP.",
            "**IT general controls** (ITGC) do not check a particular transaction; they protect the **environment** where all systems run. They are like the foundation of a house: if they fail, you cannot rely on anything above them, including the ERP's automated controls.",
          ),
          t(
            "Se agrupan en tres dominios principales: **acceso a programas y datos** (quién puede entrar y qué puede hacer), **cambios a programas** (cómo se modifican los sistemas) y **operaciones de cómputo** (procesos automáticos, respaldos, atención de fallas). Algunas guías agregan el **desarrollo o adquisición** de sistemas nuevos.",
            "They are grouped into three main domains: **access to programs and data** (who can get in and what they can do), **program changes** (how systems are modified) and **computer operations** (automated jobs, backups, incident handling). Some guides add the **development or acquisition** of new systems.",
          ),
          t(
            "Para ordenar el trabajo, los auditores de TI suelen apoyarse en marcos como **COBIT** (de ISACA, para el gobierno y la gestión de TI) e **ISO/IEC 27001** (para sistemas de gestión de seguridad de la información). Mini ejemplo: si cualquier programador puede cambiar el cálculo de intereses en producción sin aprobación, el auditor no puede confiar en que ese cálculo automático funcionó igual todo el año.",
            "To organize the work, IT auditors often rely on frameworks such as **COBIT** (by ISACA, for IT governance and management) and **ISO/IEC 27001** (for information security management systems). Mini example: if any programmer can change the interest calculation in production without approval, the auditor cannot rely on that automated calculation having worked the same way all year.",
          ),
        ],
      },
      {
        heading: t("¿Quién entra y quién cambia?", "Who gets in, who changes?"),
        body: [
          t(
            "En **accesos**, el auditor revisa el ciclo completo de un usuario: **alta** (con solicitud y aprobación del jefe), **modificación** de permisos, **baja** oportuna cuando la persona se va, y **revisiones periódicas** en las que cada jefe confirma que su equipo tiene solo lo necesario (**mínimo privilegio**). También revisa contraseñas robustas, autenticación de dos factores y las cuentas **privilegiadas** (administradores).",
            "For **access**, the auditor reviews a user's full life cycle: **creation** (with a request and the manager's approval), **modification** of permissions, timely **removal** when the person leaves, and **periodic reviews** in which each manager confirms the team has only what it needs (**least privilege**). It also reviews strong passwords, two-factor authentication and **privileged** (administrator) accounts.",
          ),
          t(
            "Una prueba típica de bajas: se toma la lista de empleados que salieron según Recursos Humanos, se elige una muestra y se compara la **fecha de salida** con la **fecha en que se desactivó** su cuenta. Si alguien siguió entrando después de irse, es una excepción grave que hay que investigar.",
            "A typical removal test: take the list of employees who left according to Human Resources, choose a sample and compare the **exit date** with the **date the account was disabled**. If someone kept logging in after leaving, it is a serious exception that must be investigated.",
          ),
          t(
            "En **cambios**, todo ajuste a un programa debe tener **solicitud aprobada**, **pruebas** en un ambiente separado, **aprobación del usuario** y paso a **producción** hecho por alguien distinto al programador. Mini ejemplo: si el mismo programador escribe el código y lo sube a producción él solo, nadie verifica que no haya metido algo indebido.",
            "For **changes**, every program modification must have an **approved request**, **testing** in a separate environment, **user approval** and migration to **production** done by someone other than the programmer. Mini example: if the same programmer writes the code and deploys it to production alone, nobody verifies that nothing improper was slipped in.",
          ),
        ],
        formulas: [
          {
            name: t("Tasa de excepción de una prueba de control", "Exception rate of a control test"),
            expression: "Tasa de excepción = Excepciones ÷ Tamaño de la muestra × 100  ·  Casos que cumplieron = Tamaño de la muestra − Excepciones",
            variables: [
              { symbol: "Tasa de excepción", meaning: t("Qué porcentaje de los casos revisados falló el control.", "What percentage of the cases reviewed failed the control.") },
              { symbol: "Excepciones", meaning: t("Casos en los que el control no se cumplió (por ejemplo, cuentas desactivadas tarde).", "Cases where the control was not met (for example, accounts disabled late).") },
              { symbol: "Tamaño de la muestra", meaning: t("Cuántos casos revisó el auditor en total.", "How many cases the auditor reviewed in total.") },
              { symbol: "Casos que cumplieron", meaning: t("Los casos revisados en los que el control sí funcionó.", "The cases reviewed where the control did work.") },
            ],
            steps: [
              t("Cuenta cuántos casos revisaste (la muestra) y cuántos fallaron.", "Count how many cases you reviewed (the sample) and how many failed."),
              t("Divide las excepciones entre el total de la muestra y multiplica por 100.", "Divide the exceptions by the full sample and multiply by 100."),
              t("Resta las excepciones a la muestra para saber cuántos cumplieron.", "Subtract the exceptions from the sample to know how many complied."),
            ],
            example: t(
              "El auditor revisa 30 bajas y en 6 la cuenta se desactivó tarde. Paso 2: 6 ÷ 30 = 0.20; 0.20 × 100 = **20%**. Paso 3: 30 − 6 = **24** casos cumplieron.",
              "The auditor reviews 30 removals and in 6 the account was disabled late. Step 2: 6 ÷ 30 = 0.20; 0.20 × 100 = **20%**. Step 3: 30 − 6 = **24** cases complied.",
            ),
            interpret: t(
              "En una prueba de control se esperan pocas o ninguna excepción. Una tasa alta normalmente indica que el control no es efectivo.",
              "In a control test few or no exceptions are expected. A high rate usually means the control is not effective.",
            ),
            mistake: t(
              "Dividir las excepciones entre los que cumplieron (6 ÷ 24) en lugar de entre toda la muestra.",
              "Dividing the exceptions by those that complied (6 ÷ 24) instead of by the whole sample.",
            ),
          },
        ],
        bullets: [
          t("Alta con aprobación; baja el mismo día de la salida.", "Creation with approval; removal on the exit day."),
          t("Revisión periódica de accesos por los jefes.", "Periodic access review by managers."),
          t("Mínimo privilegio y pocas cuentas de administrador.", "Least privilege and few administrator accounts."),
          t("Ambientes separados: desarrollo, pruebas y producción.", "Separate environments: development, testing and production."),
          t("Quien programa no pasa sus cambios a producción.", "Whoever programs does not deploy their own changes to production."),
        ],
      },
      {
        heading: t("¿Y si el sistema falla?", "What if the system fails?"),
        body: [
          t(
            "En **operaciones**, el auditor revisa que los procesos automáticos (cierres nocturnos, interfaces entre sistemas) se monitoreen y que sus fallas se atiendan. También revisa los **respaldos**: que se hagan con la frecuencia definida, que se guarden en un lugar separado y, sobre todo, que se **pruebe restaurarlos**; un respaldo que nunca se ha probado puede no servir.",
            "In **operations**, the auditor checks that automated jobs (nightly closings, interfaces between systems) are monitored and that their failures are handled. It also reviews **backups**: that they run at the defined frequency, are stored in a separate place and, above all, that **restores are tested**; a backup that has never been tested may not work.",
          ),
          t(
            "Dos medidas guían la **continuidad del negocio**. El **RPO** (objetivo de punto de recuperación) es cuántos datos, medidos en tiempo, puedes darte el lujo de perder: si respaldas cada 4 horas, podrías perder hasta 4 horas de información. El **RTO** (objetivo de tiempo de recuperación) es en cuánto tiempo debes volver a operar. El auditor compara lo que el negocio necesita con lo que realmente se logra en las pruebas.",
            "Two measures guide **business continuity**. The **RPO** (recovery point objective) is how much data, measured in time, you can afford to lose: if you back up every 4 hours, you could lose up to 4 hours of information. The **RTO** (recovery time objective) is how quickly you must be operating again. The auditor compares what the business needs with what is actually achieved in tests.",
          ),
          t(
            "En **ciberseguridad**, revisa lo básico: parches al día, antivirus, autenticación de dos factores, capacitación contra correos falsos (phishing) y un plan de respuesta a incidentes. Mini ejemplo: un sistema que estuvo caído 18 horas en un mes de 720 horas tuvo una **disponibilidad** de (720 − 18) ÷ 720 = 97.5%.",
            "In **cybersecurity**, it reviews the basics: up-to-date patches, antivirus, two-factor authentication, training against fake emails (phishing) and an incident response plan. Mini example: a system that was down 18 hours in a 720-hour month had **availability** of (720 − 18) ÷ 720 = 97.5%.",
          ),
        ],
        formulas: [
          {
            name: t("Disponibilidad de un sistema", "System availability"),
            expression: "Disponibilidad (%) = (Horas totales − Horas caído) ÷ Horas totales × 100",
            variables: [
              { symbol: "Disponibilidad (%)", meaning: t("Qué porcentaje del tiempo el sistema sí funcionó.", "What percentage of the time the system did work.") },
              { symbol: "Horas totales", meaning: t("Las horas del periodo (un día tiene 24; un mes de 30 días, 720).", "The hours in the period (a day has 24; a 30-day month, 720).") },
              { symbol: "Horas caído", meaning: t("Las horas en que el sistema estuvo fuera de servicio.", "The hours the system was out of service.") },
            ],
            steps: [
              t("Calcula las horas totales del periodo.", "Compute the total hours in the period."),
              t("Réstales las horas caído: son las horas que sí funcionó.", "Subtract the downtime hours: those are the hours it did work."),
              t("Divide ese resultado entre las horas totales y multiplica por 100.", "Divide that result by the total hours and multiply by 100."),
            ],
            example: t(
              "Un sistema estuvo caído 87.6 horas en un año de 8,760 horas. Paso 2: 8,760 − 87.6 = 8,672.4 horas. Paso 3: 8,672.4 ÷ 8,760 = 0.99; 0.99 × 100 = **99%**.",
              "A system was down 87.6 hours in an 8,760-hour year. Step 2: 8,760 − 87.6 = 8,672.4 hours. Step 3: 8,672.4 ÷ 8,760 = 0.99; 0.99 × 100 = **99%**.",
            ),
            interpret: t(
              "Se compara con el nivel de servicio comprometido. Si se prometió más de lo logrado, es una deficiencia.",
              "It is compared with the committed service level. If more was promised than achieved, it is a deficiency.",
            ),
            mistake: t(
              "Calcular solo Horas caído ÷ Horas totales; eso da el porcentaje de tiempo caído, no la disponibilidad.",
              "Computing only Downtime hours ÷ Total hours; that gives the percentage of downtime, not availability.",
            ),
          },
          {
            name: t("Brecha contra el RPO y el RTO", "Gap against the RPO and RTO"),
            expression: "Brecha RPO = Horas entre respaldos − RPO  ·  Brecha RTO = Tiempo real de restauración − RTO",
            variables: [
              { symbol: "Brecha RPO", meaning: t("Cuántas horas de datos de más podrías perder respecto a lo permitido.", "How many more hours of data you could lose than allowed.") },
              { symbol: "Horas entre respaldos", meaning: t("Cada cuánto se respalda; es lo máximo que podrías perder.", "How often backups run; it is the most you could lose.") },
              { symbol: "RPO", meaning: t("Las horas de datos que el negocio acepta perder como máximo.", "The maximum hours of data the business accepts losing.") },
              { symbol: "Brecha RTO", meaning: t("Cuántas horas de más tardas en volver a operar respecto a la meta.", "How many more hours it takes to get running again than the target.") },
              { symbol: "Tiempo real de restauración", meaning: t("Lo que tardó de verdad la última prueba de restauración, en horas.", "How long the last restore test actually took, in hours.") },
              { symbol: "RTO", meaning: t("Las horas máximas en que el negocio debe volver a operar.", "The maximum hours within which the business must be running again.") },
            ],
            steps: [
              t("Resta el RPO a las horas entre respaldos.", "Subtract the RPO from the hours between backups."),
              t("Resta el RTO al tiempo real que tardó la prueba de restauración.", "Subtract the RTO from the actual time the restore test took."),
              t("Si alguna brecha es mayor que cero, esa meta no se cumple.", "If any gap is greater than zero, that target is not met."),
            ],
            example: t(
              "RPO = 2 h y se respalda cada 12 h: 12 − 2 = **10 h** de brecha. RTO = 4 h y la prueba tardó 9 h: 9 − 4 = **5 h** de brecha. Ninguna meta se cumple.",
              "RPO = 2 h and backups run every 12 h: 12 − 2 = **10 h** gap. RTO = 4 h and the test took 9 h: 9 − 4 = **5 h** gap. Neither target is met.",
            ),
            interpret: t(
              "Cero o negativo: la meta se cumple. Positivo: hay que respaldar más seguido o acelerar la restauración.",
              "Zero or negative: the target is met. Positive: back up more often or speed up the restore.",
            ),
          },
        ],
      },
    ],
    examples: [
      {
        title: t("Prueba de bajas de usuarios", "User removal test"),
        problem: t(
          "Recursos Humanos reporta 40 bajas en el año. El auditor toma una muestra de 20 y compara la fecha de salida con la fecha de desactivación. Encuentra 2 cuentas desactivadas más de 10 días tarde y 1 cuenta todavía activa que registró un acceso una semana después de la salida. ¿Qué concluye?",
          "Human Resources reports 40 departures in the year. The auditor samples 20 and compares the exit date with the deactivation date. It finds 2 accounts disabled more than 10 days late and 1 account still active that logged in a week after the exit. What does it conclude?",
        ),
        steps: [
          t("Excepciones: 2 + 1 = 3 de 20.", "Exceptions: 2 + 1 = 3 out of 20."),
          t("Tasa de excepción: 3 ÷ 20 = 15%.", "Exception rate: 3 ÷ 20 = 15%."),
          t("La cuenta activa con acceso posterior es grave: se investiga qué hizo esa sesión y se desactiva de inmediato.", "The active account with a later login is serious: investigate what that session did and disable it immediately."),
          t("Se busca la causa: por ejemplo, Recursos Humanos no avisa a TI el día de la salida.", "Find the cause: for example, Human Resources does not notify IT on the exit day."),
        ],
        result: t(
          "El control de bajas no es efectivo (15% de excepciones y un acceso indebido). Se reporta la deficiencia y se recomienda un aviso automático de Recursos Humanos a TI.",
          "The removal control is not effective (15% exceptions and one improper access). The deficiency is reported and an automatic notice from Human Resources to IT is recommended.",
        ),
      },
      {
        title: t("¿Cumplen los respaldos con lo que pide el negocio?", "Do backups meet business needs?"),
        problem: t(
          "La dirección definió que puede perder como máximo 1 hora de ventas (RPO = 1 h) y que debe volver a operar en 2 horas (RTO = 2 h). Hoy se respalda cada 4 horas y la última prueba de restauración tardó 6 horas. Evalúa.",
          "Management defined that it can lose at most 1 hour of sales (RPO = 1 h) and must be operating again within 2 hours (RTO = 2 h). Backups currently run every 4 hours and the last restore test took 6 hours. Evaluate.",
        ),
        steps: [
          t("Pérdida máxima posible de datos: hasta 4 horas, contra 1 hora permitida: brecha de 3 horas en RPO.", "Maximum possible data loss: up to 4 hours, versus 1 hour allowed: 3-hour RPO gap."),
          t("Tiempo de recuperación real: 6 horas, contra 2 horas requeridas: brecha de 4 horas en RTO.", "Actual recovery time: 6 hours, versus 2 hours required: 4-hour RTO gap."),
          t("Recomendación: respaldos o réplicas más frecuentes y un procedimiento de restauración más rápido, probado periódicamente.", "Recommendation: more frequent backups or replication and a faster restore procedure, tested periodically."),
        ],
        result: t(
          "Ninguna de las dos metas se cumple. Sin la prueba de restauración, la empresa habría creído que estaba protegida.",
          "Neither target is met. Without the restore test, the company would have believed it was protected.",
        ),
      },
    ],
    keyPoints: [
      t("Los ITGC protegen el ambiente de TI y son la base para confiar en controles automáticos.", "ITGCs protect the IT environment and are the basis for relying on automated controls."),
      t("Tres dominios clave: accesos, cambios a programas y operaciones de cómputo.", "Three key domains: access, program changes and computer operations."),
      t("Las bajas oportunas y la revisión periódica de accesos evitan accesos indebidos.", "Timely removals and periodic access reviews prevent improper access."),
      t("Quien programa no debe pasar sus propios cambios a producción.", "Whoever programs should not deploy their own changes to production."),
      t("Un respaldo solo sirve si se prueba restaurarlo y cumple el RPO y el RTO.", "A backup is only useful if restores are tested and meet the RPO and RTO."),
    ],
    normativeNote: NOTE_IT,
    exerciseIds: ['AUD-11-E1', 'AUD-11-E2', 'AUD-11-E3', 'AUD-11-E4', 'AUD-11-E6'],
  },

  // ───────────────────────────── AUD-12 ─────────────────────────────
  {
    id: 'AUD-12',
    level: 5,
    topicIds: ['AUD.12'],
    title: t("Auditoría forense", "Forensic auditing"),
    summary: t(
      "La auditoría forense investiga posibles fraudes o irregularidades reuniendo evidencia que pueda sostenerse ante un juez, cuidando la cadena de custodia y usando técnicas como el análisis de datos, la ley de Benford y el método de patrimonio.",
      "Forensic auditing investigates possible frauds or irregularities by gathering evidence that can stand up before a judge, protecting the chain of custody and using techniques such as data analytics, Benford's law and the net worth method.",
    ),
    minutes: 11,
    objectives: [
      t("Explicar qué distingue a la auditoría forense de una auditoría financiera y cuándo se inicia una investigación.", "Explain what distinguishes forensic auditing from a financial audit and when an investigation starts."),
      t("Aplicar los principios de cadena de custodia y preservación de evidencia física y digital.", "Apply chain-of-custody principles and the preservation of physical and digital evidence."),
      t("Usar técnicas forenses básicas: análisis de datos, ley de Benford y método de patrimonio.", "Use basic forensic techniques: data analytics, Benford's law and the net worth method."),
    ],
    theory: [
      {
        heading: t("¿Qué hace un auditor forense?", "What does a forensic auditor do?"),
        body: [
          t(
            "La palabra **forense** viene de \"foro\", el lugar donde se hacían los juicios. La **auditoría forense** aplica conocimientos contables, de auditoría y de investigación para **aclarar hechos** que pueden terminar en un proceso legal: un desfalco, un soborno, una quiebra sospechosa o un pleito entre socios.",
            "The word **forensic** comes from \"forum\", the place where trials were held. **Forensic auditing** applies accounting, auditing and investigative knowledge to **clarify facts** that may end up in legal proceedings: an embezzlement, a bribe, a suspicious bankruptcy or a dispute between partners.",
          ),
          t(
            "A diferencia de la auditoría de estados financieros, que busca errores **materiales** con muestras, la forense se enfoca en un **asunto concreto**, examina el detalle de las transacciones relevantes y busca evidencia que pueda **presentarse ante una autoridad**. No empieza por rutina: empieza por una **predicación**, es decir, una base razonable para sospechar (una denuncia, una alerta del sistema, una diferencia que no se explica).",
            "Unlike a financial statement audit, which looks for **material** errors using samples, forensic work focuses on a **specific matter**, examines the detail of the relevant transactions and seeks evidence that can be **presented to an authority**. It does not start as routine: it starts with **predication**, that is, a reasonable basis to suspect (a whistleblower report, a system alert, an unexplained difference).",
          ),
          t(
            "El auditor forense **reporta hechos** documentados; **no declara culpable a nadie**. Esa decisión le corresponde a un juez. Mini ejemplo: un informe forense dice \"se identificaron 14 pagos por $820,000 a un proveedor cuyo domicilio coincide con el del jefe de compras\", no \"el jefe de compras robó\".",
            "The forensic auditor **reports documented facts**; it **does not declare anyone guilty**. That decision belongs to a judge. Mini example: a forensic report says \"14 payments totaling $820,000 were identified to a supplier whose address matches the purchasing manager's\", not \"the purchasing manager stole\".",
          ),
        ],
        bullets: [
          t("Planear: evaluar la predicación, definir alcance e hipótesis.", "Plan: assess predication, define scope and hypotheses."),
          t("Reunir y preservar evidencia documental, digital y testimonial.", "Gather and preserve documentary, digital and testimonial evidence."),
          t("Analizar: reconstruir los hechos y seguir el dinero.", "Analyze: reconstruct the facts and follow the money."),
          t("Entrevistar, por lo general de lo general a lo particular, dejando al sospechoso al final.", "Interview, usually from the general to the specific, leaving the suspect for last."),
          t("Reportar hechos, sin opinar sobre culpabilidad.", "Report facts, without opining on guilt."),
        ],
      },
      {
        heading: t("¿Cómo cuidar una prueba?", "How do you protect evidence?"),
        body: [
          t(
            "La **cadena de custodia** es el registro que demuestra que una prueba es **la misma** que se obtuvo y que **nadie la alteró**. Anota quién la recogió, cuándo, dónde, quién la ha tenido después y en qué condiciones se guardó. Si hay huecos en ese registro, la contraparte puede alegar que la prueba fue manipulada y perder su valor.",
            "The **chain of custody** is the record that shows a piece of evidence is **the same** one obtained and that **nobody altered it**. It notes who collected it, when, where, who has held it since and under what conditions it was stored. If there are gaps in that record, the other side can claim the evidence was tampered with and it may lose its value.",
          ),
          t(
            "Con evidencia **digital** (correos, computadoras, celulares, bases de datos) no se trabaja sobre el original. Se hace una **copia forense** (una imagen exacta, bit por bit) y se calcula su **hash**: una especie de huella digital matemática del archivo. Si después alguien cambia un solo carácter, el hash cambia y se nota.",
            "With **digital** evidence (emails, computers, phones, databases) you do not work on the original. You make a **forensic copy** (an exact, bit-by-bit image) and compute its **hash**: a kind of mathematical fingerprint of the file. If someone later changes a single character, the hash changes and it shows.",
          ),
          t(
            "También importa **cómo** se obtiene la evidencia: respetando la ley, la privacidad y las políticas de la empresa, porque una prueba obtenida de forma ilícita puede ser descartada. Mini ejemplo: antes de revisar la laptop de un empleado, el equipo confirma con el área legal que el equipo es de la empresa y que la política de uso lo permite.",
            "**How** evidence is obtained also matters: respecting the law, privacy and company policies, because evidence obtained unlawfully can be thrown out. Mini example: before examining an employee's laptop, the team confirms with the legal department that the device belongs to the company and that the usage policy allows it.",
          ),
        ],
      },
      {
        heading: t("¿Cómo se rastrea el dinero?", "How do you trace the money?"),
        body: [
          t(
            "El **análisis de datos** revisa poblaciones completas en busca de patrones raros: facturas duplicadas, pagos en fin de semana, montos justo por debajo del límite de autorización, proveedores que comparten domicilio o cuenta bancaria con empleados. Cada alerta no prueba un fraude, pero dice **dónde buscar**.",
            "**Data analytics** reviews entire populations looking for unusual patterns: duplicate invoices, weekend payments, amounts just under the approval limit, suppliers sharing an address or bank account with employees. Each alert does not prove fraud, but it tells you **where to look**.",
          ),
          t(
            "La **ley de Benford** dice que en muchos conjuntos de cifras naturales (facturas, pagos) el primer dígito no aparece por igual: el **1** aparece cerca del **30.1%** de las veces y el 9 solo cerca del 4.6%. Cuando alguien inventa cifras suele repartirlas de forma \"pareja\" y la distribución se desvía. Una desviación es una señal para investigar, no una prueba.",
            "**Benford's law** says that in many sets of naturally occurring figures (invoices, payments) the first digit does not appear equally: **1** appears about **30.1%** of the time and 9 only about 4.6%. When someone makes up figures they tend to spread them \"evenly\" and the distribution deviates. A deviation is a signal to investigate, not proof.",
          ),
          t(
            "El **método de patrimonio** sirve para estimar ingresos ocultos: si el patrimonio de una persona más lo que gastó creció más que sus ingresos conocidos, la diferencia queda **sin explicar**. Mini ejemplo: patrimonio inicial $500,000, final $900,000, gastos $200,000 e ingresos conocidos $350,000: (900,000 − 500,000) + 200,000 − 350,000 = $250,000 sin explicar.",
            "The **net worth method** is used to estimate hidden income: if a person's net worth plus what they spent grew more than their known income, the difference is **unexplained**. Mini example: opening net worth $500,000, closing $900,000, expenses $200,000 and known income $350,000: (900,000 − 500,000) + 200,000 − 350,000 = $250,000 unexplained.",
          ),
        ],
        formulas: [
          {
            name: t("Ingreso no explicado (método de patrimonio)", "Unexplained income (net worth method)"),
            expression: "Ingreso no explicado = (Patrimonio final − Patrimonio inicial) + Gastos − Ingresos conocidos",
            variables: [
              { symbol: "Ingreso no explicado", meaning: t("Dinero que la persona tuvo que recibir pero que no aparece en sus ingresos conocidos, en pesos.", "Money the person must have received but that does not appear in their known income, in pesos.") },
              { symbol: "Patrimonio final", meaning: t("Lo que la persona tiene al final del año (casa, autos, cuentas) menos lo que debe, en pesos.", "What the person owns at year-end (house, cars, accounts) minus what they owe, in pesos.") },
              { symbol: "Patrimonio inicial", meaning: t("Lo mismo, pero al inicio del año.", "The same, but at the start of the year.") },
              { symbol: "Gastos", meaning: t("Lo que gastó en el año para vivir (comida, escuelas, viajes), en pesos.", "What they spent during the year to live (food, schools, trips), in pesos.") },
              { symbol: "Ingresos conocidos", meaning: t("Lo que se sabe que ganó: sueldo, prestaciones, otros ingresos comprobables, en pesos.", "What they are known to have earned: salary, benefits, other provable income, in pesos.") },
            ],
            steps: [
              t("Resta el patrimonio inicial al final: es cuánto creció.", "Subtract the opening net worth from the closing one: that is how much it grew."),
              t("Súmale los gastos del año: es todo lo que tuvo que recibir.", "Add the year's expenses: that is everything they must have received."),
              t("Réstale los ingresos conocidos: lo que queda es el ingreso sin explicar.", "Subtract the known income: what remains is the unexplained income."),
            ],
            example: t(
              "Patrimonio inicial $700,000, final $1,000,000, gastos $250,000 e ingresos conocidos $400,000. Paso 1: $1,000,000 − $700,000 = $300,000. Paso 2: $300,000 + $250,000 = $550,000. Paso 3: $550,000 − $400,000 = **$150,000** sin explicar.",
              "Opening net worth $700,000, closing $1,000,000, expenses $250,000 and known income $400,000. Step 1: $1,000,000 − $700,000 = $300,000. Step 2: $300,000 + $250,000 = $550,000. Step 3: $550,000 − $400,000 = **$150,000** unexplained.",
            ),
            interpret: t(
              "Cero o negativo: sus ingresos conocidos alcanzan. Positivo: hay una diferencia que investigar, pero no prueba fraude; primero busca explicaciones legítimas (herencia, premio, venta de un bien).",
              "Zero or negative: known income is enough. Positive: there is a gap to investigate, but it does not prove fraud; first look for legitimate explanations (inheritance, prize, sale of an asset).",
            ),
            mistake: t(
              "Olvidar sumar los gastos de vida: también se pagaron con algún ingreso.",
              "Forgetting to add living expenses: they were also paid with some income.",
            ),
          },
          {
            name: t("Cantidad esperada según la ley de Benford", "Expected count under Benford's law"),
            expression: "Esperado = Total de registros × P(d)  ·  P(d) = log10(1 + 1/d)",
            variables: [
              { symbol: "Esperado", meaning: t("Cuántos registros deberían empezar con ese dígito si las cifras son naturales.", "How many records should start with that digit if the figures are natural.") },
              { symbol: "Total de registros", meaning: t("Cuántas facturas o pagos se analizan.", "How many invoices or payments are analyzed.") },
              { symbol: "P(d)", meaning: t("La proporción que Benford espera para el primer dígito d (por ejemplo, 30.1% para el 1, 17.6% para el 2).", "The share Benford expects for first digit d (for example, 30.1% for 1, 17.6% for 2).") },
              { symbol: "d", meaning: t("El primer dígito que revisas, del 1 al 9.", "The first digit you are checking, from 1 to 9.") },
              { symbol: "log10", meaning: t("Logaritmo base 10; con calculadora: tecla \"log\". No necesitas calcularlo si el porcentaje ya te lo dan.", "Base-10 logarithm; on a calculator, the \"log\" key. You do not need to compute it if the percentage is given.") },
            ],
            steps: [
              t("Obtén P(d) para el dígito que revisas (si te dan el porcentaje, pásalo a decimal: 17.6% = 0.176).", "Get P(d) for the digit you are checking (if the percentage is given, convert it to a decimal: 17.6% = 0.176)."),
              t("Multiplica el total de registros por ese decimal.", "Multiply the total records by that decimal."),
              t("Compara con cuántos registros empiezan realmente con ese dígito.", "Compare with how many records actually start with that digit."),
            ],
            example: t(
              "Se analizan 3,000 facturas y se revisa el dígito 2. P(2) = log10(1 + 1/2) = log10(1.5) ≈ 0.176. Esperado: 3,000 × 0.176 = **528** facturas. Si aparecen 900, la desviación es grande y conviene revisar esas facturas.",
              "3,000 invoices are analyzed and digit 2 is checked. P(2) = log10(1 + 1/2) = log10(1.5) ≈ 0.176. Expected: 3,000 × 0.176 = **528** invoices. If 900 appear, the deviation is large and those invoices should be reviewed.",
            ),
            interpret: t(
              "Una desviación grande es una bandera roja que dice dónde buscar, no una prueba de fraude.",
              "A large deviation is a red flag that says where to look, not proof of fraud.",
            ),
            mistake: t(
              "Suponer que cada dígito del 1 al 9 aparece por igual (total ÷ 9).",
              "Assuming each digit from 1 to 9 appears equally (total ÷ 9).",
            ),
          },
        ],
      },
    ],
    examples: [
      {
        title: t("Método de patrimonio de un empleado", "Net worth method for an employee"),
        problem: t(
          "Un gerente de almacén gana $480,000 al año (ingresos conocidos). Su patrimonio (casa, autos, cuentas, menos deudas) pasó de $900,000 a $1,700,000 en el año y sus gastos de vida se estiman en $350,000. ¿Cuánto ingreso queda sin explicar?",
          "A warehouse manager earns $480,000 a year (known income). His net worth (house, cars, accounts, minus debts) went from $900,000 to $1,700,000 during the year and his living expenses are estimated at $350,000. How much income is unexplained?",
        ),
        steps: [
          t("Aumento de patrimonio: $1,700,000 − $900,000 = $800,000.", "Increase in net worth: $1,700,000 − $900,000 = $800,000."),
          t("Más gastos: $800,000 + $350,000 = $1,150,000 (lo que tuvo que recibir en total).", "Plus expenses: $800,000 + $350,000 = $1,150,000 (what he must have received in total)."),
          t("Menos ingresos conocidos: $1,150,000 − $480,000 = $670,000.", "Minus known income: $1,150,000 − $480,000 = $670,000."),
          t("Se buscan explicaciones legítimas (herencia, premio, venta de un bien) antes de concluir nada.", "Look for legitimate explanations (inheritance, prize, sale of an asset) before concluding anything."),
        ],
        result: t(
          "Quedan $670,000 sin explicar. Es una línea de investigación fuerte, pero no prueba por sí sola un fraude: hay que ligarla con evidencia de las operaciones del almacén.",
          "$670,000 remains unexplained. It is a strong line of inquiry, but it does not prove fraud on its own: it must be linked to evidence from the warehouse's transactions.",
        ),
      },
      {
        title: t("Benford y pagos fraccionados", "Benford and split payments"),
        problem: t(
          "Una empresa tiene 5,000 pagos en el año. Los pagos de $50,000 o más requieren autorización del director. El análisis muestra 900 pagos cuyo primer dígito es 4, casi todos entre $45,000 y $49,999. Según Benford, el dígito 4 debería aparecer cerca de 9.7% de las veces. ¿Qué indica?",
          "A company has 5,000 payments in the year. Payments of $50,000 or more require the director's approval. The analysis shows 900 payments whose first digit is 4, almost all between $45,000 and $49,999. According to Benford, digit 4 should appear about 9.7% of the time. What does it indicate?",
        ),
        steps: [
          t("Esperado: 5,000 × 9.7% = 485 pagos con primer dígito 4.", "Expected: 5,000 × 9.7% = 485 payments with first digit 4."),
          t("Observado: 900, casi el doble (415 más de lo esperado).", "Observed: 900, almost double (415 more than expected)."),
          t("Se concentran justo debajo del límite de $50,000: posible fraccionamiento para evitar la autorización.", "They cluster just below the $50,000 limit: possible splitting to avoid approval."),
          t("Siguiente paso: agrupar por proveedor, fecha y usuario que capturó para ver si una compra se partió en varias.", "Next step: group by supplier, date and entering user to see whether one purchase was split into several."),
        ],
        result: t(
          "La desviación es una bandera roja de fraccionamiento de pagos. Se investiga con el detalle de las transacciones antes de concluir.",
          "The deviation is a red flag for payment splitting. It is investigated with transaction detail before concluding.",
        ),
      },
    ],
    keyPoints: [
      t("La auditoría forense investiga un asunto concreto con evidencia apta para un proceso legal.", "Forensic auditing investigates a specific matter with evidence fit for legal proceedings."),
      t("Inicia con una predicación: una base razonable para sospechar.", "It starts with predication: a reasonable basis to suspect."),
      t("La cadena de custodia y el hash demuestran que la evidencia no se alteró.", "Chain of custody and hashing show that evidence was not altered."),
      t("Análisis de datos y Benford señalan dónde buscar; no prueban fraude por sí solos.", "Data analytics and Benford point to where to look; they do not prove fraud on their own."),
      t("El auditor forense reporta hechos; la culpabilidad la decide un juez.", "The forensic auditor reports facts; guilt is decided by a judge."),
    ],
    normativeNote: NOTE_FORENSIC,
    exerciseIds: ['AUD-12-E1', 'AUD-12-E2', 'AUD-12-E3', 'AUD-12-E5', 'AUD-12-E6'],
  },
]

export const exercises: Exercise[] = [
  // ═════════════════════════ AUD-07 ═════════════════════════
  {
    id: 'AUD-07-E1',
    level: 5,
    module: 'AUD-07',
    kind: 'mcq',
    flavor: 'concept',
    prompt: t(
      "En la evaluación de riesgos empresariales, ¿qué es el riesgo residual?",
      "In enterprise risk assessment, what is residual risk?",
    ),
    options: [
      { id: 'AUD-07-E1-a', text: t("El riesgo antes de aplicar cualquier control", "The risk before applying any control") },
      { id: 'AUD-07-E1-b', text: t("El riesgo que queda después de considerar los controles existentes", "The risk that remains after considering existing controls") },
      { id: 'AUD-07-E1-c', text: t("El riesgo que ya se materializó y causó una pérdida", "The risk that already materialized and caused a loss") },
      { id: 'AUD-07-E1-d', text: t("El riesgo que se transfirió por completo a una aseguradora", "The risk that was fully transferred to an insurer") },
    ],
    correctOptionId: 'AUD-07-E1-b',
    explanation: t(
      "El riesgo residual es el que queda después de los controles; el inherente es el de antes de cualquier control. Un riesgo que ya ocurrió es un incidente o pérdida, no un riesgo residual. Error común: confundir residual con inherente o creer que un seguro deja el riesgo en cero.",
      "Residual risk is what remains after controls; inherent risk is the risk before any control. A risk that already happened is an incident or loss, not residual risk. Common mistake: confusing residual with inherent risk or thinking insurance brings the risk to zero.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'enterprise-risk',
  },
  {
    id: 'AUD-07-E2',
    level: 5,
    module: 'AUD-07',
    kind: 'classify',
    flavor: 'case',
    prompt: t(
      "Clasifica cada decisión según la respuesta al riesgo que representa.",
      "Classify each decision by the risk response it represents.",
    ),
    categories: [
      { id: 'AUD-07-E2-c1', label: t("Evitar", "Avoid") },
      { id: 'AUD-07-E2-c2', label: t("Reducir", "Reduce") },
      { id: 'AUD-07-E2-c3', label: t("Compartir o transferir", "Share or transfer") },
      { id: 'AUD-07-E2-c4', label: t("Aceptar", "Accept") },
    ],
    items: [
      { id: 'AUD-07-E2-i1', label: t("Una empresa decide no abrir una sucursal en una zona con inseguridad muy alta", "A company decides not to open a branch in a very unsafe area"), correctCategoryId: 'AUD-07-E2-c1' },
      { id: 'AUD-07-E2-i2', label: t("Contrata un seguro contra incendio para su bodega", "It buys fire insurance for its warehouse"), correctCategoryId: 'AUD-07-E2-c3' },
      { id: 'AUD-07-E2-i3', label: t("Exige doble firma en pagos mayores a $50,000", "It requires dual signatures on payments above $50,000"), correctCategoryId: 'AUD-07-E2-c2' },
      { id: 'AUD-07-E2-i4', label: t("Una papelería asume la pérdida de plumas pequeñas porque vigilarlas cuesta más", "A stationery store absorbs the loss of small pens because monitoring them costs more"), correctCategoryId: 'AUD-07-E2-c4' },
      { id: 'AUD-07-E2-i5', label: t("Subcontrata el transporte con una empresa que responde por daños a la mercancía", "It outsources transport to a company that is liable for damage to the goods"), correctCategoryId: 'AUD-07-E2-c3' },
      { id: 'AUD-07-E2-i6', label: t("Da mantenimiento preventivo mensual a sus hornos", "It performs monthly preventive maintenance on its ovens"), correctCategoryId: 'AUD-07-E2-c2' },
    ],
    explanation: t(
      "Evitar es dejar la actividad (no abrir la sucursal). Reducir es poner controles (doble firma, mantenimiento). Compartir es pasar parte del impacto a otro (seguro, transportista responsable). Aceptar es asumirlo porque controlarlo cuesta más. Error común: pensar que el seguro reduce la probabilidad; en realidad solo traslada parte del impacto económico.",
      "Avoiding is dropping the activity (not opening the branch). Reducing is adding controls (dual signatures, maintenance). Sharing is passing part of the impact to someone else (insurance, a liable carrier). Accepting is absorbing it because controlling it costs more. Common mistake: thinking insurance lowers the likelihood; it only shifts part of the financial impact.",
    ),
    difficulty: 1,
    points: 15,
    competency: 'enterprise-risk',
  },
  {
    id: 'AUD-07-E3',
    level: 5,
    module: 'AUD-07',
    kind: 'numeric',
    flavor: 'case',
    context: t(
      "Una empresa de logística estima que hay 15% de probabilidad al año de que un ciberataque detenga su operación, con un impacto estimado de $800,000.",
      "A logistics company estimates a 15% yearly probability that a cyberattack halts its operations, with an estimated impact of $800,000.",
    ),
    prompt: t(
      "¿Cuál es la pérdida esperada anual de este riesgo, en pesos?",
      "What is the annual expected loss of this risk, in pesos?",
    ),
    answer: 120000,
    unit: 'MXN',
    decimals: 0,
    tolerance: { abs: 1 },
    explanation: t(
      "Pérdida esperada = probabilidad × impacto = 0.15 × $800,000 = $120,000 al año. Sirve para comparar contra el costo de un control. Error común: multiplicar por 15 en lugar de 0.15, o confundir la pérdida esperada con el impacto total.",
      "Expected loss = likelihood × impact = 0.15 × $800,000 = $120,000 a year. It is used to compare against the cost of a control. Common mistake: multiplying by 15 instead of 0.15, or confusing expected loss with the full impact.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'enterprise-risk',
  },
  {
    id: 'AUD-07-E4',
    level: 5,
    module: 'AUD-07',
    kind: 'fields',
    flavor: 'case',
    context: t(
      "Una distribuidora califica sus riesgos en escalas de 1 a 5. Riesgo A (clientes que no pagan): probabilidad 4, impacto 5. Riesgo B (falla de un montacargas): probabilidad 2, impacto 3. Después de implantar un análisis de crédito, la probabilidad del riesgo A baja a 2 y su impacto sigue en 5.",
      "A distributor scores its risks on 1-to-5 scales. Risk A (customers who do not pay): likelihood 4, impact 5. Risk B (forklift breakdown): likelihood 2, impact 3. After implementing credit analysis, risk A's likelihood drops to 2 and its impact stays at 5.",
    ),
    prompt: t(
      "Calcula la calificación inherente de A, la calificación de B y la calificación residual de A.",
      "Compute A's inherent score, B's score and A's residual score.",
    ),
    fields: [
      { id: 'f1', label: t("Calificación inherente de A", "A's inherent score"), answer: 20, unit: 'none', tolerance: { abs: 0.01 } },
      { id: 'f2', label: t("Calificación de B", "B's score"), answer: 6, unit: 'none', tolerance: { abs: 0.01 } },
      { id: 'f3', label: t("Calificación residual de A", "A's residual score"), answer: 10, unit: 'none', tolerance: { abs: 0.01 } },
    ],
    explanation: t(
      "A inherente: 4 × 5 = 20. B: 2 × 3 = 6. A residual: 2 × 5 = 10. El análisis de crédito bajó la probabilidad, no el impacto: si un cliente grande no paga, la pérdida sigue siendo igual de grave. Error común: sumar probabilidad e impacto en lugar de multiplicarlos.",
      "A inherent: 4 × 5 = 20. B: 2 × 3 = 6. A residual: 2 × 5 = 10. Credit analysis lowered the likelihood, not the impact: if a large customer does not pay, the loss is just as serious. Common mistake: adding likelihood and impact instead of multiplying them.",
    ),
    difficulty: 2,
    points: 15,
    competency: 'enterprise-risk',
  },
  {
    id: 'AUD-07-E5',
    level: 5,
    module: 'AUD-07',
    kind: 'truefalse',
    flavor: 'concept',
    prompt: t(
      "Si el riesgo residual de un proceso queda por encima del apetito de riesgo aprobado por el consejo, la dirección debe tomar acciones adicionales o escalar el tema.",
      "If a process's residual risk remains above the risk appetite approved by the board, management must take additional action or escalate the matter.",
    ),
    answer: true,
    explanation: t(
      "Verdadero. El apetito de riesgo marca cuánto riesgo acepta la empresa; si el residual lo supera, hay que reforzar la respuesta (reducir, compartir o evitar) o llevarlo al consejo para que decida. Error común: creer que basta con anotarlo en el registro de riesgos y no hacer nada más.",
      "True. Risk appetite sets how much risk the company accepts; if residual risk exceeds it, the response must be strengthened (reduce, share or avoid) or taken to the board to decide. Common mistake: believing it is enough to write it in the risk register and do nothing else.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'enterprise-risk',
  },
  {
    id: 'AUD-07-E6',
    level: 5,
    module: 'AUD-07',
    kind: 'multi',
    flavor: 'concept',
    prompt: t(
      "¿Qué técnicas sirven para identificar riesgos empresariales? Selecciona todas las que apliquen.",
      "Which techniques help identify enterprise risks? Select all that apply.",
    ),
    options: [
      { id: 'AUD-07-E6-a', text: t("Talleres con los responsables de cada proceso", "Workshops with the owners of each process") },
      { id: 'AUD-07-E6-b', text: t("Revisar incidentes y pérdidas de años anteriores", "Reviewing incidents and losses from prior years") },
      { id: 'AUD-07-E6-c', text: t("Esperar a que ocurra un evento para registrarlo como riesgo", "Waiting for an event to happen before recording it as a risk") },
      { id: 'AUD-07-E6-d', text: t("Analizar escenarios del tipo \"¿qué pasa si...?\"", "Analyzing \"what if...?\" scenarios") },
      { id: 'AUD-07-E6-e', text: t("Eliminar del análisis los riesgos con impacto alto pero baja probabilidad", "Removing from the analysis risks with high impact but low likelihood") },
    ],
    correctOptionIds: ['AUD-07-E6-a', 'AUD-07-E6-b', 'AUD-07-E6-d'],
    explanation: t(
      "Talleres, historia de pérdidas y escenarios ayudan a anticipar riesgos. Esperar a que ocurran es reaccionar, no identificar. Descartar riesgos de baja probabilidad y alto impacto es peligroso: pueden ser los más dañinos. Error común: identificar solo los riesgos que ya pasaron.",
      "Workshops, loss history and scenarios help anticipate risks. Waiting for them to happen is reacting, not identifying. Discarding low-likelihood, high-impact risks is dangerous: they can be the most damaging. Common mistake: identifying only risks that already happened.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'enterprise-risk',
  },

  // ═════════════════════════ AUD-08 ═════════════════════════
  {
    id: 'AUD-08-E1',
    level: 5,
    module: 'AUD-08',
    kind: 'mcq',
    flavor: 'concept',
    prompt: t(
      "¿Sobre qué aseveración da evidencia principalmente la búsqueda de pasivos no registrados (revisar facturas recibidas y pagos hechos después del cierre)?",
      "The search for unrecorded liabilities (reviewing invoices received and payments made after year-end) mainly provides evidence about which assertion?",
    ),
    options: [
      { id: 'AUD-08-E1-a', text: t("Existencia", "Existence") },
      { id: 'AUD-08-E1-b', text: t("Integridad", "Completeness") },
      { id: 'AUD-08-E1-c', text: t("Derechos y obligaciones sobre activos", "Rights and obligations over assets") },
      { id: 'AUD-08-E1-d', text: t("Presentación de los ingresos", "Presentation of revenue") },
    ],
    correctOptionId: 'AUD-08-E1-b',
    explanation: t(
      "En pasivos el riesgo típico es que falten, porque omitirlos mejora las cifras; buscar facturas y pagos posteriores al cierre detecta deudas del año que no se registraron: eso es integridad. Error común: elegir existencia; probar que los pasivos registrados existen no detecta los que faltan.",
      "For liabilities the typical risk is that they are missing, because omitting them makes the figures look better; looking at invoices and payments after year-end detects debts from the year that were not recorded: that is completeness. Common mistake: choosing existence; proving recorded liabilities exist does not detect missing ones.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'fs-audit',
  },
  {
    id: 'AUD-08-E2',
    level: 5,
    module: 'AUD-08',
    kind: 'classify',
    flavor: 'concept',
    prompt: t(
      "Clasifica cada procedimiento de auditoría según la aseveración que prueba principalmente.",
      "Classify each audit procedure by the assertion it mainly tests.",
    ),
    categories: [
      { id: 'AUD-08-E2-c1', label: t("Existencia", "Existence") },
      { id: 'AUD-08-E2-c2', label: t("Integridad", "Completeness") },
      { id: 'AUD-08-E2-c3', label: t("Valuación", "Valuation") },
      { id: 'AUD-08-E2-c4', label: t("Corte", "Cutoff") },
    ],
    items: [
      { id: 'AUD-08-E2-i1', label: t("Observar el conteo físico de inventarios al cierre", "Observing the year-end physical inventory count"), correctCategoryId: 'AUD-08-E2-c1' },
      { id: 'AUD-08-E2-i2', label: t("Enviar confirmaciones de saldo a una muestra de clientes", "Sending balance confirmations to a sample of customers"), correctCategoryId: 'AUD-08-E2-c1' },
      { id: 'AUD-08-E2-i3', label: t("Revisar la antigüedad de saldos y los cobros posteriores para evaluar la estimación de incobrables", "Reviewing the aging and subsequent collections to evaluate the bad-debt allowance"), correctCategoryId: 'AUD-08-E2-c3' },
      { id: 'AUD-08-E2-i4', label: t("Revisar facturas de proveedores recibidas en enero por servicios de diciembre", "Reviewing supplier invoices received in January for December services"), correctCategoryId: 'AUD-08-E2-c2' },
      { id: 'AUD-08-E2-i5', label: t("Comparar la fecha de embarque de las últimas ventas de diciembre y las primeras de enero", "Comparing the shipping dates of the last December sales and the first January sales"), correctCategoryId: 'AUD-08-E2-c4' },
      { id: 'AUD-08-E2-i6', label: t("Comparar el costo del inventario con su precio de venta menos gastos de venta", "Comparing inventory cost with its selling price less selling costs"), correctCategoryId: 'AUD-08-E2-c3' },
    ],
    explanation: t(
      "Conteo y confirmaciones prueban que lo registrado existe. Antigüedad, cobros posteriores y comparación con el valor de realización prueban valuación. Facturas recibidas después del cierre buscan lo que falta (integridad). Comparar fechas alrededor del cierre prueba el corte. Error común: pensar que el conteo físico prueba valuación; ver la mercancía no dice cuánto vale.",
      "Counts and confirmations test that recorded items exist. Aging, subsequent collections and comparison with realizable value test valuation. Invoices received after year-end look for what is missing (completeness). Comparing dates around year-end tests cutoff. Common mistake: thinking the physical count tests valuation; seeing the goods does not tell you what they are worth.",
    ),
    difficulty: 2,
    points: 15,
    competency: 'fs-audit',
  },
  {
    id: 'AUD-08-E3',
    level: 5,
    module: 'AUD-08',
    kind: 'journal',
    flavor: 'case',
    context: t(
      "En la búsqueda de pasivos no registrados, el auditor encuentra un recibo de luz por $6,500 correspondiente al consumo de diciembre, que la empresa no registró y pagó hasta enero. La empresa registra los servicios por pagar en Acreedores diversos. Para simplificar, ignora los impuestos.",
      "In the search for unrecorded liabilities, the auditor finds a $6,500 electricity bill for December consumption that the company did not record and paid only in January. The company records services payable in Sundry creditors. For simplicity, ignore taxes.",
    ),
    prompt: t(
      "Registra el ajuste de auditoría que se propone al 31 de diciembre.",
      "Record the audit adjustment proposed as of December 31.",
    ),
    accountChoices: ['6103', '2102', '2101', '1102', '6102', '2109'],
    expected: [
      { accountCode: '6103', side: 'D', amount: 6500 },
      { accountCode: '2102', side: 'C', amount: 6500 },
    ],
    explanation: t(
      "El gasto de luz es de diciembre, así que se carga Luz, agua y teléfono $6,500 y se abona Acreedores diversos $6,500 (la deuda existía al cierre). No se abona Bancos porque el pago ocurrió en enero. Error común: usar Proveedores, que se reserva para compras de mercancía, o registrar el pago en lugar de la obligación.",
      "The electricity expense belongs to December, so debit Electricity, water and phone $6,500 and credit Sundry creditors $6,500 (the debt existed at year-end). Banks is not credited because payment happened in January. Common mistake: using Suppliers, which is reserved for merchandise purchases, or recording the payment instead of the obligation.",
    ),
    difficulty: 2,
    points: 15,
    competency: 'fs-audit',
  },
  {
    id: 'AUD-08-E4',
    level: 5,
    module: 'AUD-08',
    kind: 'numeric',
    flavor: 'case',
    context: t(
      "La cédula de diferencias de una auditoría muestra: ventas registradas de más por $60,000; gastos de diciembre no registrados por $25,000; un gasto de publicidad registrado dos veces por $10,000.",
      "An audit's summary of misstatements shows: sales over-recorded by $60,000; unrecorded December expenses of $25,000; an advertising expense recorded twice for $10,000.",
    ),
    prompt: t(
      "¿En cuántos pesos está sobrestimada, en neto, la utilidad antes de impuestos?",
      "By how many pesos is pre-tax profit overstated, on a net basis?",
    ),
    answer: 75000,
    unit: 'MXN',
    decimals: 0,
    tolerance: { abs: 1 },
    explanation: t(
      "Ventas de más inflan la utilidad $60,000; gastos omitidos la inflan $25,000; el gasto duplicado la reduce $10,000. Neto: 60,000 + 25,000 − 10,000 = $75,000 de sobrestimación. Error común: sumar las tres diferencias ($95,000) sin considerar que el gasto duplicado va en sentido contrario.",
      "Over-recorded sales inflate profit by $60,000; omitted expenses inflate it by $25,000; the duplicated expense reduces it by $10,000. Net: 60,000 + 25,000 − 10,000 = $75,000 overstatement. Common mistake: adding all three differences ($95,000) without noticing that the duplicated expense goes the opposite way.",
    ),
    difficulty: 2,
    points: 15,
    competency: 'fs-audit',
  },
  {
    id: 'AUD-08-E5',
    level: 5,
    module: 'AUD-08',
    kind: 'truefalse',
    flavor: 'concept',
    prompt: t(
      "Observar el conteo físico de inventarios da buena evidencia de que la mercancía existe, pero no demuestra por sí solo que pertenece a la empresa ni cuánto vale.",
      "Observing the physical inventory count gives good evidence that the goods exist, but does not by itself prove that they belong to the company or what they are worth.",
    ),
    answer: true,
    explanation: t(
      "Verdadero. La mercancía puede estar en consignación (ser de otro) o estar obsoleta. Para derechos se revisan facturas y contratos; para valuación, costos y precios de venta. Error común: creer que un solo procedimiento cubre todas las aseveraciones de un rubro.",
      "True. The goods may be on consignment (belong to someone else) or be obsolete. For rights, auditors review invoices and contracts; for valuation, costs and selling prices. Common mistake: believing a single procedure covers every assertion for a line item.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'fs-audit',
  },
  {
    id: 'AUD-08-E6',
    level: 5,
    module: 'AUD-08',
    kind: 'fields',
    flavor: 'statement',
    context: t(
      "Al 31 de diciembre, el estado de cuenta bancario muestra un saldo de $150,000. Hay un depósito en tránsito de $20,000 y cheques en circulación por $35,000. Según los libros de la empresa, el saldo de Bancos es $140,000.",
      "As of December 31, the bank statement shows a balance of $150,000. There is a $20,000 deposit in transit and $35,000 in outstanding checks. According to the company's books, the Banks balance is $140,000.",
    ),
    prompt: t(
      "Calcula el saldo conciliado según el banco y la diferencia no explicada contra libros que el auditor debe investigar.",
      "Compute the reconciled balance per bank and the unexplained difference versus the books that the auditor must investigate.",
    ),
    fields: [
      { id: 'f1', label: t("Saldo conciliado según banco", "Reconciled balance per bank"), answer: 135000, unit: 'MXN', tolerance: { abs: 0.5 } },
      { id: 'f2', label: t("Diferencia no explicada (libros − conciliado)", "Unexplained difference (books − reconciled)"), answer: 5000, unit: 'MXN', tolerance: { abs: 0.5 } },
    ],
    explanation: t(
      "Saldo conciliado: 150,000 + 20,000 (depósito que el banco aún no registra) − 35,000 (cheques que aún no cobran) = $135,000. Libros: $140,000, así que hay $5,000 de más en libros sin explicar (por ejemplo, una comisión bancaria no registrada). Error común: restar el depósito en tránsito y sumar los cheques, al revés.",
      "Reconciled balance: 150,000 + 20,000 (deposit the bank has not recorded yet) − 35,000 (checks not yet cashed) = $135,000. Books: $140,000, so there is an unexplained $5,000 excess in the books (for example, an unrecorded bank fee). Common mistake: subtracting the deposit in transit and adding the checks, the other way around.",
    ),
    difficulty: 2,
    points: 20,
    competency: 'fs-audit',
  },

  // ═════════════════════════ AUD-09 ═════════════════════════
  {
    id: 'AUD-09-E1',
    level: 5,
    module: 'AUD-09',
    kind: 'classify',
    flavor: 'concept',
    prompt: t(
      "Ubica cada función en el Modelo de las Tres Líneas.",
      "Place each function in the Three Lines Model.",
    ),
    categories: [
      { id: 'AUD-09-E1-c1', label: t("Primera línea", "First line") },
      { id: 'AUD-09-E1-c2', label: t("Segunda línea", "Second line") },
      { id: 'AUD-09-E1-c3', label: t("Tercera línea", "Third line") },
    ],
    items: [
      { id: 'AUD-09-E1-i1', label: t("Gerente de ventas que revisa a diario los descuentos otorgados", "Sales manager who reviews discounts granted every day"), correctCategoryId: 'AUD-09-E1-c1' },
      { id: 'AUD-09-E1-i2', label: t("Área de cumplimiento que vigila las políticas contra lavado de dinero", "Compliance department that monitors anti-money-laundering policies"), correctCategoryId: 'AUD-09-E1-c2' },
      { id: 'AUD-09-E1-i3', label: t("Equipo que evalúa de forma independiente la gestión de riesgos y reporta al comité de auditoría", "Team that independently evaluates risk management and reports to the audit committee"), correctCategoryId: 'AUD-09-E1-c3' },
      { id: 'AUD-09-E1-i4', label: t("Área de administración de riesgos que define la metodología de calificación", "Risk management department that defines the scoring methodology"), correctCategoryId: 'AUD-09-E1-c2' },
      { id: 'AUD-09-E1-i5', label: t("Cajero que cuadra su caja al cierre del turno", "Cashier who balances the register at the end of the shift"), correctCategoryId: 'AUD-09-E1-c1' },
      { id: 'AUD-09-E1-i6', label: t("Auditoría interna revisando los controles de TI", "Internal audit reviewing IT controls"), correctCategoryId: 'AUD-09-E1-c3' },
    ],
    explanation: t(
      "Primera línea: quienes operan y manejan su riesgo en el día a día (ventas, caja). Segunda línea: apoyo y vigilancia especializada (riesgos, cumplimiento). Tercera línea: auditoría interna, independiente, que evalúa a las otras dos y reporta al comité de auditoría. Error común: poner a administración de riesgos en la tercera línea; define y vigila, pero no es independiente de la administración.",
      "First line: those who operate and manage their risk day to day (sales, cashier). Second line: specialized support and monitoring (risk, compliance). Third line: internal audit, independent, which evaluates the other two and reports to the audit committee. Common mistake: placing risk management in the third line; it defines and monitors, but it is not independent from management.",
    ),
    difficulty: 1,
    points: 15,
    competency: 'internal-audit',
  },
  {
    id: 'AUD-09-E2',
    level: 5,
    module: 'AUD-09',
    kind: 'mcq',
    flavor: 'concept',
    prompt: t(
      "Para proteger su independencia, ¿a quién debe reportar funcionalmente el director de auditoría interna?",
      "To protect its independence, to whom should the head of internal audit report functionally?",
    ),
    options: [
      { id: 'AUD-09-E2-a', text: t("Al director de finanzas, porque entiende mejor las cifras", "To the CFO, because he understands the figures best") },
      { id: 'AUD-09-E2-b', text: t("Al comité de auditoría del consejo de administración", "To the board's audit committee") },
      { id: 'AUD-09-E2-c', text: t("Al auditor externo de la empresa", "To the company's external auditor") },
      { id: 'AUD-09-E2-d', text: t("Al gerente de cada área que se audita", "To the manager of each area being audited") },
    ],
    correctOptionId: 'AUD-09-E2-b',
    explanation: t(
      "El comité de auditoría aprueba el plan y el presupuesto de auditoría interna y recibe sus informes, así ninguna área auditada puede frenar hallazgos. Administrativamente puede reportar a la dirección general. Error común: reportar al director de finanzas, cuyas áreas son justamente de las más auditadas.",
      "The audit committee approves internal audit's plan and budget and receives its reports, so no audited area can block findings. Administratively it may report to the CEO. Common mistake: reporting to the CFO, whose areas are precisely among the most audited.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'internal-audit',
  },
  {
    id: 'AUD-09-E3',
    level: 5,
    module: 'AUD-09',
    kind: 'multi',
    flavor: 'concept',
    prompt: t(
      "¿Qué elementos debe contener un hallazgo de auditoría interna bien redactado? Selecciona todos los que apliquen.",
      "Which elements should a well-written internal audit finding contain? Select all that apply.",
    ),
    options: [
      { id: 'AUD-09-E3-a', text: t("Condición: lo que se encontró", "Condition: what was found") },
      { id: 'AUD-09-E3-b', text: t("Criterio: la política, ley o regla que debía cumplirse", "Criteria: the policy, law or rule that should have been met") },
      { id: 'AUD-09-E3-c', text: t("Causa: por qué ocurrió", "Cause: why it happened") },
      { id: 'AUD-09-E3-d', text: t("Efecto: el riesgo o la pérdida que provoca", "Effect: the risk or loss it causes") },
      { id: 'AUD-09-E3-e', text: t("La opinión del auditor sobre la personalidad del responsable", "The auditor's opinion on the personality of the person responsible") },
    ],
    correctOptionIds: ['AUD-09-E3-a', 'AUD-09-E3-b', 'AUD-09-E3-c', 'AUD-09-E3-d'],
    explanation: t(
      "Condición, criterio, causa y efecto permiten entender el problema, compararlo con lo que debía ser, atacar su origen y dimensionar su gravedad. Las opiniones personales sobre la gente no tienen lugar: el hallazgo se basa en hechos. Error común: omitir la causa, lo que lleva a corregir el síntoma y que el problema vuelva.",
      "Condition, criteria, cause and effect make it possible to understand the problem, compare it with what should be, address its origin and size its seriousness. Personal opinions about people have no place: the finding rests on facts. Common mistake: omitting the cause, which leads to fixing the symptom and the problem coming back.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'internal-audit',
  },
  {
    id: 'AUD-09-E4',
    level: 5,
    module: 'AUD-09',
    kind: 'numeric',
    flavor: 'case',
    context: t(
      "Un área de auditoría interna tiene 1,200 horas para su plan anual y las reparte en proporción al riesgo. Calificaciones: Compras 30, Inventarios 20 y Viáticos 10.",
      "An internal audit function has 1,200 hours for its annual plan and allocates them in proportion to risk. Scores: Purchasing 30, Inventory 20 and Travel expenses 10.",
    ),
    prompt: t(
      "¿Cuántas horas le corresponden a Compras?",
      "How many hours does Purchasing get?",
    ),
    answer: 600,
    unit: 'units',
    decimals: 0,
    tolerance: { abs: 0.5 },
    explanation: t(
      "Suma de riesgos: 30 + 20 + 10 = 60. Compras: 1,200 × 30/60 = 600 horas (Inventarios 400 y Viáticos 200). Error común: dividir 1,200 entre 3 áreas por igual (400), lo que ignora que Compras es el área de mayor riesgo.",
      "Sum of risks: 30 + 20 + 10 = 60. Purchasing: 1,200 × 30/60 = 600 hours (Inventory 400 and Travel 200). Common mistake: splitting 1,200 equally among 3 areas (400), which ignores that Purchasing is the riskiest area.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'internal-audit',
  },
  {
    id: 'AUD-09-E5',
    level: 5,
    module: 'AUD-09',
    kind: 'truefalse',
    flavor: 'concept',
    prompt: t(
      "Un auditor interno puede diseñar e implantar los controles de un área y, unos meses después, auditar esa misma área sin afectar su objetividad.",
      "An internal auditor can design and implement an area's controls and, a few months later, audit that same area without affecting their objectivity.",
    ),
    answer: false,
    explanation: t(
      "Falso. Si el auditor diseñó e implantó los controles, estaría revisando su propio trabajo y asumiendo una responsabilidad de la administración. Puede asesorar (recomendar mejoras), pero la decisión y la implantación son del área. Error común: pensar que conocer bien el control hace al auditor más objetivo.",
      "False. If the auditor designed and implemented the controls, they would be reviewing their own work and taking on a management responsibility. They can advise (recommend improvements), but the decision and the implementation belong to the area. Common mistake: thinking that knowing the control well makes the auditor more objective.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'internal-audit',
  },
  {
    id: 'AUD-09-E6',
    level: 5,
    module: 'AUD-09',
    kind: 'fields',
    flavor: 'case',
    context: t(
      "En su reporte de seguimiento, auditoría interna tiene 40 observaciones con fecha compromiso vencida al cierre del trimestre. De ellas, 26 ya se atendieron y se verificaron.",
      "In its follow-up report, internal audit has 40 observations whose committed date expired by quarter-end. Of them, 26 have been addressed and verified.",
    ),
    prompt: t(
      "Calcula el porcentaje de observaciones atendidas y cuántas siguen pendientes para reportar al comité.",
      "Compute the percentage of observations addressed and how many remain open to report to the committee.",
    ),
    fields: [
      { id: 'f1', label: t("Observaciones atendidas (%)", "Observations addressed (%)"), answer: 65, unit: '%', tolerance: { abs: 0.1 } },
      { id: 'f2', label: t("Observaciones pendientes", "Open observations"), answer: 14, unit: 'units', tolerance: { abs: 0.01 } },
    ],
    explanation: t(
      "Atendidas: 26 ÷ 40 = 0.65 = 65%. Pendientes: 40 − 26 = 14, que se reportan al comité con su responsable y la nueva fecha. Error común: dar por atendida una observación solo porque el área dice que la corrigió; auditoría interna debe verificarlo.",
      "Addressed: 26 ÷ 40 = 0.65 = 65%. Open: 40 − 26 = 14, reported to the committee with their owner and the new date. Common mistake: treating an observation as addressed just because the area says it fixed it; internal audit must verify it.",
    ),
    difficulty: 1,
    points: 15,
    competency: 'internal-audit',
  },

  // ═════════════════════════ AUD-10 ═════════════════════════
  {
    id: 'AUD-10-E1',
    level: 5,
    module: 'AUD-10',
    kind: 'mcq',
    flavor: 'concept',
    prompt: t(
      "En el ciclo compra-pago de un ERP, ¿qué documentos compara el control de cotejo de tres vías antes de liberar un pago?",
      "In an ERP's procure-to-pay cycle, which documents does the three-way match control compare before releasing a payment?",
    ),
    options: [
      { id: 'AUD-10-E1-a', text: t("Orden de compra, recepción en almacén y factura del proveedor", "Purchase order, warehouse receipt and supplier invoice") },
      { id: 'AUD-10-E1-b', text: t("Cotización, contrato y estado de cuenta bancario", "Quote, contract and bank statement") },
      { id: 'AUD-10-E1-c', text: t("Factura, póliza contable y declaración de impuestos", "Invoice, journal entry and tax return") },
      { id: 'AUD-10-E1-d', text: t("Requisición, presupuesto anual y nómina", "Requisition, annual budget and payroll") },
    ],
    correctOptionId: 'AUD-10-E1-a',
    explanation: t(
      "El cotejo de tres vías verifica que se pague solo lo que se pidió (orden de compra), lo que realmente llegó (recepción) y al precio facturado correcto (factura). Error común: pensar que basta con la factura; sin la recepción se podría pagar mercancía que nunca llegó.",
      "The three-way match checks that you only pay for what was ordered (purchase order), what actually arrived (receipt) and at the correct invoiced price (invoice). Common mistake: thinking the invoice is enough; without the receipt you could pay for goods that never arrived.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'erp-audit',
  },
  {
    id: 'AUD-10-E2',
    level: 5,
    module: 'AUD-10',
    kind: 'classify',
    flavor: 'case',
    prompt: t(
      "Un análisis de roles del ERP encontró estas combinaciones de permisos en un mismo usuario. Clasifícalas.",
      "An ERP role analysis found these permission combinations in a single user. Classify them.",
    ),
    categories: [
      { id: 'AUD-10-E2-c1', label: t("Conflicto de segregación de funciones", "Segregation-of-duties conflict") },
      { id: 'AUD-10-E2-c2', label: t("Combinación aceptable", "Acceptable combination") },
    ],
    items: [
      { id: 'AUD-10-E2-i1', label: t("Dar de alta proveedores y emitir pagos", "Create suppliers and issue payments"), correctCategoryId: 'AUD-10-E2-c1' },
      { id: 'AUD-10-E2-i2', label: t("Crear órdenes de compra y aprobar esas mismas órdenes", "Create purchase orders and approve those same orders"), correctCategoryId: 'AUD-10-E2-c1' },
      { id: 'AUD-10-E2-i3', label: t("Modificar sueldos en el maestro de empleados y dispersar la nómina", "Change salaries in the employee master file and disburse payroll"), correctCategoryId: 'AUD-10-E2-c1' },
      { id: 'AUD-10-E2-i4', label: t("Consultar reportes de ventas y consultar existencias de inventario", "View sales reports and view inventory levels"), correctCategoryId: 'AUD-10-E2-c2' },
      { id: 'AUD-10-E2-i5', label: t("Capturar pedidos de venta y consultar existencias", "Enter sales orders and view stock levels"), correctCategoryId: 'AUD-10-E2-c2' },
      { id: 'AUD-10-E2-i6', label: t("Registrar recepciones en almacén y consultar órdenes de compra", "Record warehouse receipts and view purchase orders"), correctCategoryId: 'AUD-10-E2-c2' },
    ],
    explanation: t(
      "Hay conflicto cuando una persona puede iniciar, aprobar o pagar y además ocultar el resultado: alta de proveedor + pago (proveedor ficticio), crear + aprobar órdenes (compras sin control), cambiar sueldos + pagar nómina (aumentos indebidos). Los permisos de solo consulta junto a una función operativa no permiten cometer y ocultar un fraude. Error común: marcar como conflicto cualquier combinación de dos permisos.",
      "There is a conflict when one person can initiate, approve or pay and also hide the result: supplier creation + payment (fictitious supplier), create + approve orders (uncontrolled purchases), change salaries + pay payroll (improper raises). View-only permissions combined with one operating function do not allow committing and hiding a fraud. Common mistake: flagging any combination of two permissions as a conflict.",
    ),
    difficulty: 2,
    points: 15,
    competency: 'erp-audit',
  },
  {
    id: 'AUD-10-E3',
    level: 5,
    module: 'AUD-10',
    kind: 'numeric',
    flavor: 'case',
    context: t(
      "Una orden de compra es por 100 unidades a $250 cada una. El ERP está configurado para aceptar facturas que excedan la orden hasta en 2%; arriba de eso, la factura se bloquea.",
      "A purchase order is for 100 units at $250 each. The ERP is configured to accept invoices exceeding the order by up to 2%; above that, the invoice is blocked.",
    ),
    prompt: t(
      "¿Cuál es el monto máximo de factura que el ERP aceptará sin bloquearla, en pesos?",
      "What is the maximum invoice amount the ERP will accept without blocking it, in pesos?",
    ),
    answer: 25500,
    unit: 'MXN',
    decimals: 0,
    tolerance: { abs: 1 },
    explanation: t(
      "Orden: 100 × $250 = $25,000. Tolerancia: 2% × 25,000 = $500. Máximo: $25,500; una factura de $25,800, por ejemplo, se bloquearía. El auditor revisa que la tolerancia configurada coincida con la política aprobada. Error común: calcular el 2% sobre el precio unitario y olvidar multiplicar por las unidades.",
      "Order: 100 × $250 = $25,000. Tolerance: 2% × 25,000 = $500. Maximum: $25,500; a $25,800 invoice, for example, would be blocked. The auditor checks that the configured tolerance matches the approved policy. Common mistake: computing 2% on the unit price and forgetting to multiply by the units.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'erp-audit',
  },
  {
    id: 'AUD-10-E4',
    level: 5,
    module: 'AUD-10',
    kind: 'truefalse',
    flavor: 'concept',
    prompt: t(
      "Un control automático configurado en el ERP puede probarse con pocas transacciones por cada variante, siempre que los controles generales de TI sobre accesos y cambios hayan sido efectivos en el periodo.",
      "An automated control configured in the ERP can be tested with a few transactions per variant, provided that IT general controls over access and changes were effective during the period.",
    ),
    answer: true,
    explanation: t(
      "Verdadero. Un sistema hace siempre lo mismo mientras nadie cambie su configuración; si los controles de accesos y cambios funcionaron, basta comprobar que la regla opera correctamente en cada caso (por ejemplo, factura dentro y fuera de tolerancia). Error común: olvidar la condición: si los ITGC fallan, ya no se puede confiar en que el control funcionó igual todo el año.",
      "True. A system always does the same thing as long as nobody changes its configuration; if access and change controls worked, it is enough to verify that the rule works correctly in each case (for example, an invoice within and outside tolerance). Common mistake: forgetting the condition: if ITGCs fail, you can no longer rely on the control having worked the same way all year.",
    ),
    difficulty: 2,
    points: 15,
    competency: 'erp-audit',
  },
  {
    id: 'AUD-10-E5',
    level: 5,
    module: 'AUD-10',
    kind: 'multi',
    flavor: 'interpret',
    prompt: t(
      "Al analizar el catálogo maestro de proveedores del ERP, ¿cuáles hallazgos son señales de alerta? Selecciona todas las que apliquen.",
      "When analyzing the ERP's supplier master file, which findings are red flags? Select all that apply.",
    ),
    options: [
      { id: 'AUD-10-E5-a', text: t("Un proveedor con la misma cuenta bancaria que un empleado", "A supplier with the same bank account as an employee") },
      { id: 'AUD-10-E5-b', text: t("Dos proveedores dados de alta con el mismo RFC", "Two suppliers created with the same tax ID (RFC)") },
      { id: 'AUD-10-E5-c', text: t("Un proveedor sin RFC ni domicilio registrados que recibió pagos", "A supplier with no tax ID or address on file that received payments") },
      { id: 'AUD-10-E5-d', text: t("Un proveedor con años de relación, contrato vigente y facturas consistentes", "A supplier with years of relationship, a current contract and consistent invoices") },
      { id: 'AUD-10-E5-e', text: t("Un proveedor dado de alta con solicitud y aprobación completas", "A supplier created with a complete request and approval") },
    ],
    correctOptionIds: ['AUD-10-E5-a', 'AUD-10-E5-b', 'AUD-10-E5-c'],
    explanation: t(
      "Cuenta bancaria compartida con un empleado sugiere un proveedor ficticio; RFC duplicado permite pagar dos veces la misma factura; un proveedor sin datos básicos no se puede verificar. Los otros dos casos muestran datos completos y aprobados. Error común: revisar solo las transacciones y no los datos maestros, donde muchos fraudes empiezan.",
      "A bank account shared with an employee suggests a fictitious supplier; a duplicated tax ID allows paying the same invoice twice; a supplier without basic data cannot be verified. The other two cases show complete and approved data. Common mistake: reviewing only transactions and not master data, where many frauds start.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'erp-audit',
  },
  {
    id: 'AUD-10-E6',
    level: 5,
    module: 'AUD-10',
    kind: 'fields',
    flavor: 'case',
    context: t(
      "Una empresa tiene 250 usuarios activos en su ERP. El análisis de segregación de funciones detecta 20 usuarios con al menos un conflicto. Tras la depuración, se retiran los permisos en conflicto a 15 de ellos; los demás quedan con un control compensatorio.",
      "A company has 250 active users in its ERP. The segregation-of-duties analysis detects 20 users with at least one conflict. After clean-up, the conflicting permissions are removed from 15 of them; the rest keep a compensating control.",
    ),
    prompt: t(
      "Calcula el porcentaje de usuarios con conflicto antes de la depuración y el porcentaje que queda después.",
      "Compute the percentage of users with conflicts before the clean-up and the percentage remaining afterward.",
    ),
    fields: [
      { id: 'f1', label: t("Usuarios con conflicto antes (%)", "Users with conflicts before (%)"), answer: 8, unit: '%', tolerance: { abs: 0.05 } },
      { id: 'f2', label: t("Usuarios con conflicto después (%)", "Users with conflicts after (%)"), answer: 2, unit: '%', tolerance: { abs: 0.05 } },
    ],
    explanation: t(
      "Antes: 20 ÷ 250 = 0.08 = 8%. Después: quedan 20 − 15 = 5 usuarios; 5 ÷ 250 = 0.02 = 2%. Esos 5 deben tener un control compensatorio documentado y probado. Error común: dividir los 5 restantes entre los 20 con conflicto (25%) en lugar de entre todos los usuarios activos.",
      "Before: 20 ÷ 250 = 0.08 = 8%. After: 20 − 15 = 5 users remain; 5 ÷ 250 = 0.02 = 2%. Those 5 must have a documented and tested compensating control. Common mistake: dividing the 5 remaining by the 20 with conflicts (25%) instead of by all active users.",
    ),
    difficulty: 2,
    points: 15,
    competency: 'erp-audit',
  },

  // ═════════════════════════ AUD-11 ═════════════════════════
  {
    id: 'AUD-11-E1',
    level: 5,
    module: 'AUD-11',
    kind: 'classify',
    flavor: 'concept',
    prompt: t(
      "Clasifica cada control en su dominio de controles generales de TI.",
      "Classify each control into its IT general controls domain.",
    ),
    categories: [
      { id: 'AUD-11-E1-c1', label: t("Acceso a programas y datos", "Access to programs and data") },
      { id: 'AUD-11-E1-c2', label: t("Cambios a programas", "Program changes") },
      { id: 'AUD-11-E1-c3', label: t("Operaciones de cómputo", "Computer operations") },
    ],
    items: [
      { id: 'AUD-11-E1-i1', label: t("Revisión trimestral de usuarios y permisos por parte de los jefes", "Quarterly review of users and permissions by managers"), correctCategoryId: 'AUD-11-E1-c1' },
      { id: 'AUD-11-E1-i2', label: t("Aprobación del usuario a las pruebas antes de pasar un cambio a producción", "User sign-off on testing before moving a change to production"), correctCategoryId: 'AUD-11-E1-c2' },
      { id: 'AUD-11-E1-i3', label: t("Monitoreo de los procesos automáticos nocturnos y atención de sus fallas", "Monitoring nightly automated jobs and handling their failures"), correctCategoryId: 'AUD-11-E1-c3' },
      { id: 'AUD-11-E1-i4', label: t("Desactivar la cuenta de un empleado el día que deja la empresa", "Disabling an employee's account on the day they leave the company"), correctCategoryId: 'AUD-11-E1-c1' },
      { id: 'AUD-11-E1-i5', label: t("Mantener separados los ambientes de desarrollo y producción", "Keeping development and production environments separate"), correctCategoryId: 'AUD-11-E1-c2' },
      { id: 'AUD-11-E1-i6', label: t("Pruebas periódicas de restauración de respaldos", "Periodic backup restore tests"), correctCategoryId: 'AUD-11-E1-c3' },
    ],
    explanation: t(
      "Acceso: quién entra y con qué permisos (revisiones, bajas). Cambios: cómo se modifican los programas (pruebas, aprobación, ambientes separados). Operaciones: que los sistemas corran y se recuperen (procesos nocturnos, respaldos). Error común: poner la separación de ambientes en acceso; su fin es que los cambios no lleguen a producción sin probarse.",
      "Access: who gets in and with what permissions (reviews, removals). Changes: how programs are modified (testing, approval, separate environments). Operations: that systems run and recover (nightly jobs, backups). Common mistake: placing environment separation under access; its purpose is that changes do not reach production untested.",
    ),
    difficulty: 1,
    points: 15,
    competency: 'it-audit',
  },
  {
    id: 'AUD-11-E2',
    level: 5,
    module: 'AUD-11',
    kind: 'mcq',
    flavor: 'case',
    context: t(
      "En una prueba de bajas, el auditor de TI descubre que la cuenta de un excontador sigue activa y registró accesos al sistema contable dos semanas después de su salida.",
      "In a removal test, the IT auditor discovers that a former accountant's account is still active and logged into the accounting system two weeks after he left.",
    ),
    prompt: t(
      "¿Cuál es la respuesta más adecuada del auditor ante esta cuenta de un exempleado?",
      "What is the auditor's most appropriate response to this former employee's account?",
    ),
    options: [
      { id: 'AUD-11-E2-a', text: t("Ignorarlo porque solo es una cuenta de muchas", "Ignore it because it is just one account among many") },
      { id: 'AUD-11-E2-b', text: t("Desactivar él mismo la cuenta y cerrar el tema sin reportarlo", "Disable the account himself and close the matter without reporting it") },
      { id: 'AUD-11-E2-c', text: t("Reportarlo como deficiencia, pedir que se desactive de inmediato e investigar qué se hizo con esos accesos", "Report it as a deficiency, request immediate deactivation and investigate what was done with those logins") },
      { id: 'AUD-11-E2-d', text: t("Pedir al excontador que no vuelva a entrar", "Ask the former accountant not to log in again") },
    ],
    correctOptionId: 'AUD-11-E2-c',
    explanation: t(
      "Un acceso posterior a la salida es una excepción grave: la administración debe desactivar la cuenta, revisar qué transacciones se hicieron con ella y corregir la causa del control. El auditor no ejecuta controles por la administración (perdería objetividad). Error común: tratarlo como un simple retraso administrativo sin revisar las operaciones hechas.",
      "A login after departure is a serious exception: management must disable the account, review which transactions were made with it and fix the root cause of the control. The auditor does not perform controls for management (it would lose objectivity). Common mistake: treating it as a mere administrative delay without reviewing the transactions made.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'it-audit',
  },
  {
    id: 'AUD-11-E3',
    level: 5,
    module: 'AUD-11',
    kind: 'numeric',
    flavor: 'case',
    context: t(
      "El sistema de ventas en línea de una empresa estuvo fuera de servicio un total de 18 horas durante un mes de 30 días (720 horas).",
      "A company's online sales system was out of service for a total of 18 hours during a 30-day month (720 hours).",
    ),
    prompt: t(
      "¿Cuál fue la disponibilidad del sistema ese mes, en porcentaje?",
      "What was the system's availability that month, as a percentage?",
    ),
    answer: 97.5,
    unit: '%',
    decimals: 1,
    tolerance: { abs: 0.05 },
    explanation: t(
      "Disponibilidad = (720 − 18) ÷ 720 = 702 ÷ 720 = 0.975 = 97.5%. El auditor la compara con el nivel de servicio comprometido. Error común: calcular 18 ÷ 720 = 2.5% y reportarlo como disponibilidad; eso es el tiempo caído.",
      "Availability = (720 − 18) ÷ 720 = 702 ÷ 720 = 0.975 = 97.5%. The auditor compares it with the committed service level. Common mistake: computing 18 ÷ 720 = 2.5% and reporting it as availability; that is the downtime.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'it-audit',
  },
  {
    id: 'AUD-11-E4',
    level: 5,
    module: 'AUD-11',
    kind: 'truefalse',
    flavor: 'concept',
    prompt: t(
      "Es una buena práctica que el mismo programador que escribe un cambio lo pase directamente a producción, siempre que el cambio sea urgente.",
      "It is good practice for the same programmer who writes a change to move it directly to production, as long as the change is urgent.",
    ),
    answer: false,
    explanation: t(
      "Falso. Quien programa no debe pasar su propio cambio a producción, porque nadie verificaría que no incluyó algo indebido. Los cambios urgentes existen, pero siguen un procedimiento de emergencia con registro y aprobación posterior documentada. Error común: creer que la urgencia elimina la segregación de funciones.",
      "False. Whoever programs should not deploy their own change to production, because nobody would verify that nothing improper was included. Urgent changes exist, but they follow an emergency procedure with logging and documented after-the-fact approval. Common mistake: believing urgency eliminates segregation of duties.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'it-audit',
  },
  {
    id: 'AUD-11-E5',
    level: 5,
    module: 'AUD-11',
    kind: 'multi',
    flavor: 'interpret',
    prompt: t(
      "Al revisar una muestra de cambios a programas, ¿qué evidencia indica una buena administración de cambios? Selecciona todas las que apliquen.",
      "When reviewing a sample of program changes, which evidence indicates good change management? Select all that apply.",
    ),
    options: [
      { id: 'AUD-11-E5-a', text: t("Una solicitud de cambio aprobada antes de empezar", "A change request approved before starting") },
      { id: 'AUD-11-E5-b', text: t("Evidencia de pruebas aprobadas por el usuario", "Evidence of testing approved by the user") },
      { id: 'AUD-11-E5-c', text: t("Paso a producción hecho por una persona distinta al programador", "Migration to production done by someone other than the programmer") },
      { id: 'AUD-11-E5-d', text: t("El programador tiene acceso permanente de administrador en producción", "The programmer has permanent administrator access in production") },
      { id: 'AUD-11-E5-e', text: t("Los cambios se acuerdan solo de palabra para ahorrar tiempo", "Changes are agreed only verbally to save time") },
    ],
    correctOptionIds: ['AUD-11-E5-a', 'AUD-11-E5-b', 'AUD-11-E5-c'],
    explanation: t(
      "Solicitud aprobada, pruebas aceptadas por el usuario y migración por alguien distinto son la evidencia clásica de un cambio controlado. El acceso permanente del programador a producción y los acuerdos verbales son debilidades. Error común: aceptar que el cambio funciona en producción como prueba suficiente de que fue autorizado.",
      "An approved request, user-accepted testing and migration by a different person are the classic evidence of a controlled change. The programmer's permanent production access and verbal agreements are weaknesses. Common mistake: accepting that the change works in production as sufficient proof it was authorized.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'it-audit',
  },
  {
    id: 'AUD-11-E6',
    level: 5,
    module: 'AUD-11',
    kind: 'fields',
    flavor: 'case',
    context: t(
      "Para probar el control de bajas, el auditor selecciona 25 empleados que dejaron la empresa. En 3 casos, la cuenta se desactivó varios días después de la salida; en los demás, el mismo día.",
      "To test the removal control, the auditor selects 25 employees who left the company. In 3 cases, the account was disabled several days after the exit; in the rest, on the same day.",
    ),
    prompt: t(
      "Calcula la tasa de excepción de la muestra y el número de casos que cumplieron el control.",
      "Compute the sample's exception rate and the number of cases that met the control.",
    ),
    fields: [
      { id: 'f1', label: t("Tasa de excepción (%)", "Exception rate (%)"), answer: 12, unit: '%', tolerance: { abs: 0.05 } },
      { id: 'f2', label: t("Casos que cumplieron", "Compliant cases"), answer: 22, unit: 'units', tolerance: { abs: 0.01 } },
    ],
    explanation: t(
      "Tasa de excepción: 3 ÷ 25 = 0.12 = 12%. Cumplieron: 25 − 3 = 22. Con ese nivel de excepciones, normalmente el control no se considera efectivo y se revisa si esas cuentas se usaron después de la salida. Error común: dividir 3 entre 22 (13.6%) en lugar de entre el total de la muestra.",
      "Exception rate: 3 ÷ 25 = 0.12 = 12%. Compliant: 25 − 3 = 22. With that level of exceptions, the control is normally not considered effective and auditors check whether those accounts were used after the exit. Common mistake: dividing 3 by 22 (13.6%) instead of by the full sample.",
    ),
    difficulty: 1,
    points: 15,
    competency: 'it-audit',
  },

  // ═════════════════════════ AUD-12 ═════════════════════════
  {
    id: 'AUD-12-E1',
    level: 5,
    module: 'AUD-12',
    kind: 'mcq',
    flavor: 'concept',
    prompt: t(
      "En una investigación forense, ¿para qué sirve la cadena de custodia?",
      "In a forensic investigation, what is the chain of custody for?",
    ),
    options: [
      { id: 'AUD-12-E1-a', text: t("Para demostrar que la evidencia es la misma que se obtuvo y que nadie la alteró", "To show that the evidence is the same as was obtained and that nobody altered it") },
      { id: 'AUD-12-E1-b', text: t("Para decidir quién es culpable del fraude", "To decide who is guilty of the fraud") },
      { id: 'AUD-12-E1-c', text: t("Para calcular el monto de la pérdida", "To calculate the amount of the loss") },
      { id: 'AUD-12-E1-d', text: t("Para elegir la muestra de transacciones a revisar", "To choose the sample of transactions to review") },
    ],
    correctOptionId: 'AUD-12-E1-a',
    explanation: t(
      "La cadena de custodia registra quién obtuvo cada prueba, cuándo, dónde y quién la ha tenido, para demostrar que no se manipuló. Sin ella, una prueba puede perder valor ante un juez. Error común: pensar que sirve para determinar culpables; eso lo decide la autoridad judicial.",
      "The chain of custody records who obtained each piece of evidence, when, where and who has held it, to prove it was not tampered with. Without it, evidence can lose value before a judge. Common mistake: thinking it determines who is guilty; that is decided by the judicial authority.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'forensic-audit',
  },
  {
    id: 'AUD-12-E2',
    level: 5,
    module: 'AUD-12',
    kind: 'numeric',
    flavor: 'case',
    context: t(
      "Una investigación revisa a un jefe de compras. Su patrimonio neto pasó de $1,200,000 a $2,000,000 en el año. Sus gastos de vida estimados fueron $300,000 y sus ingresos conocidos (sueldo y prestaciones) $600,000.",
      "An investigation reviews a purchasing manager. His net worth went from $1,200,000 to $2,000,000 during the year. His estimated living expenses were $300,000 and his known income (salary and benefits) $600,000.",
    ),
    prompt: t(
      "Con el método de patrimonio, ¿cuánto ingreso queda sin explicar, en pesos?",
      "Using the net worth method, how much income is unexplained, in pesos?",
    ),
    answer: 500000,
    unit: 'MXN',
    decimals: 0,
    tolerance: { abs: 1 },
    explanation: t(
      "Aumento de patrimonio: 2,000,000 − 1,200,000 = $800,000. Más gastos: 800,000 + 300,000 = $1,100,000. Menos ingresos conocidos: 1,100,000 − 600,000 = $500,000 sin explicar. Error común: olvidar sumar los gastos de vida, que también se pagaron con algún ingreso; eso daría solo $200,000.",
      "Increase in net worth: 2,000,000 − 1,200,000 = $800,000. Plus expenses: 800,000 + 300,000 = $1,100,000. Minus known income: 1,100,000 − 600,000 = $500,000 unexplained. Common mistake: forgetting to add living expenses, which were also paid with some income; that would give only $200,000.",
    ),
    difficulty: 2,
    points: 15,
    competency: 'forensic-audit',
  },
  {
    id: 'AUD-12-E3',
    level: 5,
    module: 'AUD-12',
    kind: 'truefalse',
    flavor: 'concept',
    prompt: t(
      "En su informe, el auditor forense debe declarar quién es culpable del fraude investigado.",
      "In the report, the forensic auditor must declare who is guilty of the fraud investigated.",
    ),
    answer: false,
    explanation: t(
      "Falso. El auditor forense reporta hechos documentados y su análisis (montos, fechas, personas involucradas en las operaciones), pero la culpabilidad la determina un juez. Error común: redactar conclusiones como \"X robó\", lo que puede exponer a la empresa y al auditor a problemas legales.",
      "False. The forensic auditor reports documented facts and its analysis (amounts, dates, people involved in the transactions), but guilt is determined by a judge. Common mistake: writing conclusions such as \"X stole\", which can expose the company and the auditor to legal problems.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'forensic-audit',
  },
  {
    id: 'AUD-12-E4',
    level: 5,
    module: 'AUD-12',
    kind: 'classify',
    flavor: 'case',
    prompt: t(
      "Clasifica cada actividad de una investigación forense según su etapa.",
      "Classify each activity of a forensic investigation by its stage.",
    ),
    categories: [
      { id: 'AUD-12-E4-c1', label: t("Planeación", "Planning") },
      { id: 'AUD-12-E4-c2', label: t("Obtención y preservación de evidencia", "Obtaining and preserving evidence") },
      { id: 'AUD-12-E4-c3', label: t("Análisis y reporte", "Analysis and reporting") },
    ],
    items: [
      { id: 'AUD-12-E4-i1', label: t("Evaluar la denuncia recibida para decidir si hay base suficiente para investigar", "Assessing the report received to decide whether there is enough basis to investigate"), correctCategoryId: 'AUD-12-E4-c1' },
      { id: 'AUD-12-E4-i2', label: t("Definir el alcance y las hipótesis que se van a probar", "Defining the scope and the hypotheses to be tested"), correctCategoryId: 'AUD-12-E4-c1' },
      { id: 'AUD-12-E4-i3', label: t("Obtener una copia forense del disco duro y calcular su hash", "Obtaining a forensic copy of the hard drive and computing its hash"), correctCategoryId: 'AUD-12-E4-c2' },
      { id: 'AUD-12-E4-i4', label: t("Resguardar documentos originales y registrar quién los recibe", "Securing original documents and recording who receives them"), correctCategoryId: 'AUD-12-E4-c2' },
      { id: 'AUD-12-E4-i5', label: t("Cruzar la base de proveedores con la de empleados para encontrar coincidencias", "Matching the supplier database against the employee database to find matches"), correctCategoryId: 'AUD-12-E4-c3' },
      { id: 'AUD-12-E4-i6', label: t("Redactar el informe con hechos documentados, sin calificar culpabilidad", "Writing the report with documented facts, without judging guilt"), correctCategoryId: 'AUD-12-E4-c3' },
    ],
    explanation: t(
      "Planeación: evaluar la predicación y definir alcance e hipótesis. Evidencia: obtenerla y preservarla con cadena de custodia (copias forenses, hash, resguardo de originales). Análisis y reporte: cruzar datos, reconstruir hechos y documentarlos. Error común: empezar a recolectar evidencia sin una hipótesis clara, lo que dispersa la investigación.",
      "Planning: assess predication and define scope and hypotheses. Evidence: obtain and preserve it with chain of custody (forensic copies, hashing, securing originals). Analysis and reporting: match data, reconstruct facts and document them. Common mistake: starting to collect evidence without a clear hypothesis, which scatters the investigation.",
    ),
    difficulty: 1,
    points: 15,
    competency: 'forensic-audit',
  },
  {
    id: 'AUD-12-E5',
    level: 5,
    module: 'AUD-12',
    kind: 'numeric',
    flavor: 'interpret',
    context: t(
      "Un auditor forense aplica la ley de Benford a 2,000 facturas de un proveedor. Según Benford, el primer dígito 1 aparece en cerca del 30.1% de los casos.",
      "A forensic auditor applies Benford's law to 2,000 invoices from a supplier. According to Benford, the first digit 1 appears in about 30.1% of cases.",
    ),
    prompt: t(
      "¿Cuántas facturas se esperaría que empezaran con el dígito 1? Redondea al entero.",
      "How many invoices would be expected to start with the digit 1? Round to the nearest whole number.",
    ),
    answer: 602,
    unit: 'units',
    decimals: 0,
    tolerance: { abs: 1 },
    explanation: t(
      "Esperado: 2,000 × 0.301 = 602 facturas. Si el número real se aleja mucho (por ejemplo, 250), es una señal para revisar esas facturas a detalle, no una prueba de fraude. Error común: suponer que cada dígito del 1 al 9 aparece por igual (2,000 ÷ 9 ≈ 222).",
      "Expected: 2,000 × 0.301 = 602 invoices. If the actual number is far off (for example, 250), it is a signal to review those invoices in detail, not proof of fraud. Common mistake: assuming each digit from 1 to 9 appears equally (2,000 ÷ 9 ≈ 222).",
    ),
    difficulty: 1,
    points: 10,
    competency: 'forensic-audit',
  },
  {
    id: 'AUD-12-E6',
    level: 5,
    module: 'AUD-12',
    kind: 'multi',
    flavor: 'interpret',
    prompt: t(
      "¿Qué patrones en un análisis de pagos a proveedores son banderas rojas que justifican revisar a detalle? Selecciona todas las que apliquen.",
      "Which patterns in an analysis of supplier payments are red flags that justify a detailed review? Select all that apply.",
    ),
    options: [
      { id: 'AUD-12-E6-a', text: t("Facturas con el mismo proveedor, folio y monto pagadas dos veces", "Invoices with the same supplier, number and amount paid twice") },
      { id: 'AUD-12-E6-b', text: t("Un proveedor cuyo domicilio coincide con el de un empleado de compras", "A supplier whose address matches that of a purchasing employee") },
      { id: 'AUD-12-E6-c', text: t("Muchos pagos justo por debajo del límite que requiere autorización del director", "Many payments just below the limit that requires the director's approval") },
      { id: 'AUD-12-E6-d', text: t("Pagos aprobados conforme a la política y con soporte completo", "Payments approved under the policy and with complete support") },
      { id: 'AUD-12-E6-e', text: t("Pagos mensuales de renta por el mismo monto pactado en el contrato vigente", "Monthly rent payments for the same amount agreed in the current contract") },
    ],
    correctOptionIds: ['AUD-12-E6-a', 'AUD-12-E6-b', 'AUD-12-E6-c'],
    explanation: t(
      "Pagos duplicados, proveedores ligados a empleados y montos que esquivan el límite de autorización son patrones típicos de fraude o error. Pagos con soporte completo o rentas iguales a lo pactado son normales. Error común: tomar cualquier monto repetido como sospechoso; una renta fija se repite por naturaleza.",
      "Duplicate payments, suppliers linked to employees and amounts that dodge the approval limit are typical patterns of fraud or error. Payments with complete support or rent matching the contract are normal. Common mistake: treating any repeated amount as suspicious; fixed rent repeats by nature.",
    ),
    difficulty: 2,
    points: 15,
    competency: 'forensic-audit',
  },
]
