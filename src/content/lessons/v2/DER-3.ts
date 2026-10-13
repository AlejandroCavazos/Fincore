import type { Exercise, Lesson } from '../../../types'

/**
 * FINCORE — Temario v2.0, área Derecho Empresarial y Regulación (México), DER.13 a DER.17.
 * Nivel 2, etapa Avanzado.
 */

const NOTE_FIN_REG = {
  es: "Contenido educativo con referencias generales a la SHCP, el Banco de México, la CNBV, la CNSF, la CONSAR, la CONDUSEF, el IPAB, la Ley de Instituciones de Crédito, la Ley para Regular las Instituciones de Tecnología Financiera y los estándares de Basilea. Los requisitos de capital, los límites de cobertura y el valor de la UDI cambian con el tiempo; los porcentajes y montos de los ejemplos son ilustrativos. Verifica la versión vigente (2026) antes de aplicarlos.",
  en: "Educational content with general references to SHCP, Banco de México, CNBV, CNSF, CONSAR, CONDUSEF, IPAB, the Credit Institutions Law, the Law to Regulate Financial Technology Institutions and the Basel standards. Capital requirements, coverage limits and the UDI value change over time; the percentages and amounts in the examples are illustrative. Verify the current version (2026) before applying them.",
}

const NOTE_GOV = {
  es: "Contenido educativo con referencias generales a la Ley General de Sociedades Mercantiles, la Ley del Mercado de Valores, el Código de Mejores Prácticas Corporativas del Consejo Coordinador Empresarial y los Principios de Gobierno Corporativo del G20/OCDE. Los requisitos legales cambian: verifica la versión vigente (2026) antes de aplicarlos a un caso real.",
  en: "Educational content with general references to the General Law of Commercial Companies, the Securities Market Law, the Business Coordinating Council's Code of Best Corporate Practices and the G20/OECD Principles of Corporate Governance. Legal requirements change: verify the current version (2026) before applying them to a real case.",
}

const NOTE_AML = {
  es: "Contenido educativo con referencias generales a la Ley Federal para la Prevención e Identificación de Operaciones con Recursos de Procedencia Ilícita, a las disposiciones de PLD para entidades financieras, a la Unidad de Inteligencia Financiera (UIF) y a las Recomendaciones del GAFI. Esta ley se ha reformado (incluida una reforma en 2025) y los umbrales, plazos y listas de actividades cambian; los montos de los ejemplos son hipotéticos. Verifica la versión vigente (2026).",
  en: "Educational content with general references to the Federal Law for the Prevention and Identification of Transactions with Illicit Proceeds, the AML rules for financial entities, the Financial Intelligence Unit (UIF) and the FATF Recommendations. This law has been amended (including a 2025 reform) and thresholds, deadlines and activity lists change; the amounts in the examples are hypothetical. Verify the current version (2026).",
}

const NOTE_DATA = {
  es: "Contenido educativo. En 2025 México publicó una nueva Ley Federal de Protección de Datos Personales en Posesión de los Particulares y desapareció el INAI; sus funciones de supervisión pasaron a una dependencia del gobierno federal. Los plazos, requisitos de consentimiento y sanciones pueden haber cambiado. Las referencias al RGPD europeo son generales. Verifica la versión vigente (2026) antes de aplicarlas.",
  en: "Educational content. In 2025 Mexico published a new Federal Law on the Protection of Personal Data Held by Private Parties and INAI was dissolved; its oversight functions moved to a federal government agency. Deadlines, consent requirements and penalties may have changed. References to the European GDPR are general. Verify the current version (2026) before applying them.",
}

const NOTE_COMPLIANCE = {
  es: "Contenido educativo con referencias generales a la Ley General de Responsabilidades Administrativas, al Código Nacional de Procedimientos Penales, al modelo de las tres líneas del IIA y a leyes extranjeras como la FCPA de Estados Unidos. Las fórmulas de riesgo y los porcentajes de los ejemplos son modelos ilustrativos, no reglas legales. Verifica la versión vigente (2026).",
  en: "Educational content with general references to the General Law of Administrative Responsibilities, the National Code of Criminal Procedure, the IIA Three Lines Model and foreign laws such as the US FCPA. The risk formulas and percentages in the examples are illustrative models, not legal rules. Verify the current version (2026).",
}

export const lessons: Lesson[] = [
  // ───────────────────────────── DER-13 ─────────────────────────────
  {
    id: 'DER-13',
    level: 2,
    topicIds: ['DER.13'],
    title: { es: "Regulación de instituciones financieras", en: "Regulation of financial institutions" },
    summary: {
      es: "Las instituciones financieras necesitan permiso para operar, deben tener capital y liquidez suficientes y están vigiladas por autoridades que protegen el ahorro del público.",
      en: "Financial institutions need a license to operate, must hold enough capital and liquidity, and are overseen by authorities that protect the public's savings.",
    },
    minutes: 16,
    objectives: [
      { es: "Explicar por qué se regula a las instituciones financieras y qué autoridad supervisa a cada tipo de entidad en México.", en: "Explain why financial institutions are regulated and which authority supervises each type of entity in Mexico." },
      { es: "Calcular e interpretar el índice de capitalización y relacionarlo con las acciones correctivas del supervisor.", en: "Compute and interpret the capital adequacy ratio and relate it to the supervisor's corrective actions." },
      { es: "Determinar qué parte de los depósitos de una persona protege el seguro de depósitos del IPAB.", en: "Determine what part of a person's deposits is protected by IPAB deposit insurance." },
    ],
    theory: [
      {
        heading: { es: "Por qué se regula y quién supervisa", en: "Why regulate and who supervises" },
        body: [
          {
            es: "Un banco trabaja con **dinero ajeno**: recibe tus depósitos y los presta a otros. Si quiebra, no solo pierden sus dueños: pierden miles de ahorradores y puede contagiar a otros bancos. A ese peligro de efecto dominó se le llama **riesgo sistémico**. Por eso las instituciones financieras tienen reglas más estrictas que una tienda o una fábrica.",
            en: "A bank works with **other people's money**: it takes your deposits and lends them to others. If it fails, not only its owners lose: thousands of savers lose and other banks may be dragged down. That domino danger is called **systemic risk**. That is why financial institutions face stricter rules than a store or a factory.",
          },
          {
            es: "La regulación tiene tres pasos: **autorización** (nadie puede captar dinero del público sin permiso), **regulación prudencial** (reglas de capital, liquidez y riesgos para que la entidad aguante golpes) y **supervisión** (la autoridad revisa, pide correcciones y sanciona). En México la **SHCP** dirige la política del sistema y cada sector tiene su supervisor.",
            en: "Regulation has three steps: **licensing** (no one may take money from the public without permission), **prudential regulation** (capital, liquidity and risk rules so the entity can absorb shocks) and **supervision** (the authority reviews, orders corrections and imposes penalties). In Mexico **SHCP** (the Finance Ministry) leads system policy and each sector has its own supervisor.",
          },
          {
            es: "Mini ejemplo: una app que promete \"rendimientos garantizados\" y recibe depósitos sin autorización está captando ilegalmente. Antes de invertir, revisa en los padrones de las autoridades si la entidad está autorizada.",
            en: "Mini example: an app that promises \"guaranteed returns\" and takes deposits without a license is taking money illegally. Before investing, check the authorities' registries to see whether the entity is licensed.",
          },
        ],
        bullets: [
          { es: "CNBV: bancos, casas de bolsa, cooperativas de ahorro, instituciones fintech y otras entidades de crédito.", en: "CNBV: banks, brokerage firms, savings cooperatives, fintech institutions and other credit entities." },
          { es: "CNSF: aseguradoras y afianzadoras.", en: "CNSF: insurers and surety companies." },
          { es: "CONSAR: afores y el sistema de ahorro para el retiro.", en: "CONSAR: pension fund managers (afores) and the retirement savings system." },
          { es: "Banco de México: política monetaria, sistemas de pago y reglas sobre tasas y comisiones en ciertas operaciones.", en: "Banco de México: monetary policy, payment systems and rules on rates and fees in certain transactions." },
          { es: "CONDUSEF: protege y orienta a los usuarios; IPAB: seguro de depósitos bancarios.", en: "CONDUSEF: protects and advises users; IPAB: bank deposit insurance." },
        ],
      },
      {
        heading: { es: "Regulación prudencial: capital y liquidez", en: "Prudential regulation: capital and liquidity" },
        body: [
          {
            es: "El **capital** es el dinero propio de los dueños que funciona como colchón: si algunos préstamos no se pagan, la pérdida se cubre primero con ese capital y no con los depósitos. Las reglas internacionales del **Comité de Basilea** (que México adopta) piden que el capital sea proporcional al riesgo de lo que el banco tiene.",
            en: "**Capital** is the owners' own money and works as a cushion: if some loans are not repaid, the loss is absorbed first by that capital, not by deposits. The international rules of the **Basel Committee** (which Mexico adopts) require capital to be proportional to the risk of what the bank holds.",
          },
          {
            es: "Para medirlo se usan los **activos ponderados por riesgo** (APR): cada activo cuenta según su peligro. Un bono del gobierno federal pesa poco; un crédito a una empresa pesa más. Se suman los requerimientos por **riesgo de crédito, de mercado y operacional**. El **índice de capitalización** (ICAP) compara el capital con esos APR.",
            en: "To measure it we use **risk-weighted assets** (RWA): each asset counts according to its danger. A federal government bond weighs little; a corporate loan weighs more. Requirements for **credit, market and operational risk** are added up. The **capital adequacy ratio** (ICAP) compares capital to those RWA.",
          },
          {
            es: "Si el ICAP baja de los mínimos, la ley prevé **acciones correctivas tempranas**: el supervisor puede prohibir pagar dividendos, frenar el crecimiento o exigir un plan de restauración de capital. También hay reglas de **liquidez** (tener activos fáciles de vender para cubrir salidas de dinero de unos 30 días de estrés). Mini ejemplo: con capital de $1,200 millones y APR de $10,000 millones, el ICAP es 12%.",
            en: "If ICAP falls below the minimums, the law provides **early corrective actions**: the supervisor may ban dividends, curb growth or require a capital restoration plan. There are also **liquidity** rules (holding easy-to-sell assets to cover about 30 days of stressed outflows). Mini example: with $1,200 million of capital and $10,000 million of RWA, ICAP is 12%.",
          },
        ],
        formula: 'ICAP = Capital neto ÷ Activos ponderados por riesgo × 100',
      },
      {
        heading: { es: "Protección al ahorrador y nuevas figuras (fintech)", en: "Saver protection and new entities (fintech)" },
        body: [
          {
            es: "El **IPAB** (Instituto para la Protección al Ahorro Bancario) garantiza los depósitos en bancos hasta un tope de **400,000 UDIs por persona, por banco**. La **UDI** es una unidad que sube con la inflación; su valor en pesos cambia cada día. Protege cuentas de cheques, ahorro y depósitos a plazo, pero **no** inversiones como acciones o fondos de inversión.",
            en: "**IPAB** (Bank Savings Protection Institute) guarantees bank deposits up to a cap of **400,000 UDIs per person, per bank**. The **UDI** is a unit that rises with inflation; its peso value changes daily. It protects checking, savings and time deposits, but **not** investments such as stocks or investment funds.",
          },
          {
            es: "La **Ley Fintech** (2018) creó las **instituciones de tecnología financiera**: las de **fondos de pago electrónico** (monederos digitales) y las de **financiamiento colectivo** (crowdfunding). Requieren autorización de la CNBV, cumplen reglas de capital, seguridad informática y PLD, y deben advertir que sus recursos **no** están garantizados por el gobierno.",
            en: "The **Fintech Law** (2018) created **financial technology institutions**: **electronic payment funds** institutions (digital wallets) and **crowdfunding** institutions. They need CNBV authorization, follow capital, cybersecurity and AML rules, and must warn that their funds are **not** government-guaranteed.",
          },
          {
            es: "Mini ejemplo: si el valor hipotético de la UDI es $8.50, la cobertura máxima es 400,000 × 8.50 = $3,400,000. Quien tiene $3,800,000 en un solo banco tendría $400,000 sin protección; repartir entre bancos distintos amplía la cobertura.",
            en: "Mini example: if the hypothetical UDI value is $8.50, the maximum coverage is 400,000 × 8.50 = $3,400,000. Someone with $3,800,000 in a single bank would have $400,000 unprotected; spreading across different banks widens coverage.",
          },
        ],
        formula: 'Cobertura IPAB = mín(depósitos en el banco, 400,000 UDIs × valor UDI)',
      },
    ],
    examples: [
      {
        title: { es: "¿Cumple el banco con su capital?", en: "Does the bank meet its capital requirement?" },
        problem: {
          es: "Un banco hipotético tiene capital neto de $900 millones. Sus requerimientos equivalen a APR de $6,000 millones por riesgo de crédito, $1,000 millones por mercado y $1,000 millones operacional. Supón un mínimo ilustrativo de 10.5%. ¿Cumple?",
          en: "A hypothetical bank has net capital of $900 million. Its requirements equal RWA of $6,000 million for credit risk, $1,000 million for market risk and $1,000 million for operational risk. Assume an illustrative minimum of 10.5%. Does it comply?",
        },
        steps: [
          { es: "Suma los APR: 6,000 + 1,000 + 1,000 = $8,000 millones.", en: "Add the RWA: 6,000 + 1,000 + 1,000 = $8,000 million." },
          { es: "ICAP = 900 ÷ 8,000 × 100 = 11.25%.", en: "ICAP = 900 ÷ 8,000 × 100 = 11.25%." },
          { es: "Capital mínimo: 8,000 × 10.5% = $840 millones.", en: "Minimum capital: 8,000 × 10.5% = $840 million." },
          { es: "Excedente: 900 − 840 = $60 millones.", en: "Surplus: 900 − 840 = $60 million." },
        ],
        result: {
          es: "Sí cumple, con ICAP de 11.25% y $60 millones de holgura. Si crece su cartera de crédito sin sumar capital, el ICAP bajará.",
          en: "Yes, it complies, with an ICAP of 11.25% and $60 million of headroom. If its loan book grows without adding capital, ICAP will fall.",
        },
      },
      {
        title: { es: "Cobertura del IPAB en dos bancos", en: "IPAB coverage across two banks" },
        problem: {
          es: "Lucía tiene $2,000,000 en cheques y $1,800,000 en un pagaré en el Banco A, y $1,000,000 en el Banco B. Valor hipotético de la UDI: $8.50. ¿Cuánto está protegido?",
          en: "Lucía has $2,000,000 in checking and $1,800,000 in a time deposit at Bank A, and $1,000,000 at Bank B. Hypothetical UDI value: $8.50. How much is protected?",
        },
        steps: [
          { es: "Tope por banco: 400,000 × 8.50 = $3,400,000.", en: "Cap per bank: 400,000 × 8.50 = $3,400,000." },
          { es: "Banco A: 2,000,000 + 1,800,000 = $3,800,000 → protegido $3,400,000.", en: "Bank A: 2,000,000 + 1,800,000 = $3,800,000 → protected $3,400,000." },
          { es: "Banco B: $1,000,000, por debajo del tope → protegido completo.", en: "Bank B: $1,000,000, below the cap → fully protected." },
          { es: "Total protegido: 3,400,000 + 1,000,000 = $4,400,000; sin protección: $400,000.", en: "Total protected: 3,400,000 + 1,000,000 = $4,400,000; unprotected: $400,000." },
        ],
        result: {
          es: "Están protegidos $4,400,000. Si moviera $400,000 del Banco A al B, quedaría todo cubierto.",
          en: "$4,400,000 is protected. If she moved $400,000 from Bank A to Bank B, everything would be covered.",
        },
      },
    ],
    keyPoints: [
      { es: "Las instituciones financieras se regulan más porque usan dinero del público y generan riesgo sistémico.", en: "Financial institutions are regulated more because they use the public's money and create systemic risk." },
      { es: "Autorización, regulación prudencial y supervisión son las tres capas del marco.", en: "Licensing, prudential regulation and supervision are the three layers of the framework." },
      { es: "Cada sector tiene su supervisor: CNBV, CNSF y CONSAR; Banxico regula pagos y la CONDUSEF protege usuarios.", en: "Each sector has its supervisor: CNBV, CNSF and CONSAR; Banxico regulates payments and CONDUSEF protects users." },
      { es: "ICAP = capital neto ÷ activos ponderados por riesgo; si cae, llegan las acciones correctivas.", en: "ICAP = net capital ÷ risk-weighted assets; if it falls, corrective actions follow." },
      { es: "El IPAB cubre depósitos bancarios hasta 400,000 UDIs por persona y por banco; no cubre inversiones ni fintech.", en: "IPAB covers bank deposits up to 400,000 UDIs per person per bank; it does not cover investments or fintech." },
    ],
    normativeNote: NOTE_FIN_REG,
    exerciseIds: ['DER-13-E1', 'DER-13-E2', 'DER-13-E3', 'DER-13-E4', 'DER-13-E5', 'DER-13-E6'],
  },

  // ───────────────────────────── DER-14 ─────────────────────────────
  {
    id: 'DER-14',
    level: 2,
    topicIds: ['DER.14'],
    title: { es: "Gobierno corporativo", en: "Corporate governance" },
    summary: {
      es: "El gobierno corporativo es el conjunto de reglas y órganos que deciden cómo se dirige y vigila una empresa para que los directivos trabajen a favor de los accionistas y no de sí mismos.",
      en: "Corporate governance is the set of rules and bodies that decide how a company is run and overseen so managers work for the shareholders and not for themselves.",
    },
    minutes: 15,
    objectives: [
      { es: "Explicar el problema de agencia y cómo el gobierno corporativo lo reduce.", en: "Explain the agency problem and how corporate governance reduces it." },
      { es: "Distinguir las funciones de la asamblea, el consejo, sus comités y la dirección general.", en: "Distinguish the roles of the shareholders' meeting, the board, its committees and the CEO." },
      { es: "Aplicar los deberes de diligencia y lealtad a casos de conflicto de interés y operaciones con partes relacionadas.", en: "Apply the duties of care and loyalty to conflict-of-interest and related-party cases." },
    ],
    theory: [
      {
        heading: { es: "El problema de agencia", en: "The agency problem" },
        body: [
          {
            es: "Cuando una empresa crece, los **dueños** (accionistas) ya no la manejan día a día: contratan **directivos**. El directivo es un **agente** que actúa por cuenta de otro. El problema es que sus intereses pueden chocar: el director quiere un bono alto o un coche de lujo; los dueños quieren utilidades sostenibles. A esto se le llama **problema de agencia**.",
            en: "When a company grows, the **owners** (shareholders) no longer run it day to day: they hire **managers**. The manager is an **agent** acting on someone else's behalf. The problem is that their interests may clash: the CEO wants a big bonus or a luxury car; the owners want sustainable profits. This is the **agency problem**.",
          },
          {
            es: "También hay conflicto entre **accionistas mayoritarios y minoritarios**. En México muchas empresas son familiares o tienen un grupo de control; el riesgo es que ese grupo use la empresa en su beneficio, por ejemplo comprándole caro a una empresa de un pariente.",
            en: "There is also conflict between **majority and minority shareholders**. In Mexico many companies are family-owned or have a controlling group; the risk is that the group uses the company for its own benefit, for instance by buying at inflated prices from a relative's company.",
          },
          {
            es: "El **gobierno corporativo** responde con reglas de **transparencia, rendición de cuentas, equidad y responsabilidad**. Mini ejemplo: una cadena de restaurantes familiar que busca socio inversionista crea un consejo con externos y publica estados financieros auditados; eso le da confianza al inversionista y baja su costo de financiamiento.",
            en: "**Corporate governance** responds with rules of **transparency, accountability, fairness and responsibility**. Mini example: a family restaurant chain seeking an investor creates a board with outside members and publishes audited financial statements; that gives the investor confidence and lowers its cost of funding.",
          },
        ],
        bullets: [
          { es: "Transparencia: informar a tiempo y con datos confiables.", en: "Transparency: report on time with reliable data." },
          { es: "Rendición de cuentas: quien decide responde por sus decisiones.", en: "Accountability: whoever decides answers for the decisions." },
          { es: "Equidad: trato justo a todos los accionistas, incluidos los minoritarios.", en: "Fairness: fair treatment of all shareholders, including minority ones." },
          { es: "Responsabilidad: cumplir la ley y considerar a empleados, clientes y comunidad.", en: "Responsibility: obey the law and consider employees, customers and community." },
        ],
      },
      {
        heading: { es: "Órganos: asamblea, consejo, comités y dirección", en: "Bodies: shareholders' meeting, board, committees and management" },
        body: [
          {
            es: "La **asamblea de accionistas** es el órgano supremo: nombra al consejo, aprueba los estados financieros y decide dividendos y cambios importantes. El **consejo de administración** define la estrategia y vigila a la dirección. La **dirección general** (el CEO) ejecuta el día a día.",
            en: "The **shareholders' meeting** is the supreme body: it appoints the board, approves the financial statements and decides dividends and major changes. The **board of directors** sets strategy and oversees management. The **CEO** runs day-to-day operations.",
          },
          {
            es: "Un **consejero independiente** es alguien sin vínculos que le resten objetividad: no es empleado, pariente, cliente o proveedor importante. Para las sociedades que cotizan en bolsa (**SAB**), la Ley del Mercado de Valores fija un consejo de **máximo 21 miembros**, con **al menos 25% independientes**, y comités de **auditoría** y de **prácticas societarias** formados por independientes.",
            en: "An **independent director** is someone with no ties that reduce objectivity: not an employee, relative, or major customer or supplier. For listed companies (**SAB**), the Securities Market Law sets a board of **at most 21 members**, with **at least 25% independent**, and **audit** and **corporate practices** committees made up of independent members.",
          },
          {
            es: "El comité de **auditoría** vigila la información financiera, el control interno y al auditor externo. El de **prácticas societarias** revisa la paga de directivos y las operaciones con **partes relacionadas**. Mini ejemplo: con 10 consejeros, 25% son 2.5, así que se necesitan al menos 3 independientes (siempre se redondea hacia arriba).",
            en: "The **audit** committee oversees financial reporting, internal control and the external auditor. The **corporate practices** committee reviews executive pay and **related-party** transactions. Mini example: with 10 directors, 25% is 2.5, so at least 3 independents are needed (always round up).",
          },
        ],
        formula: 'Independientes mínimos = redondear hacia arriba (consejeros totales × 25%)',
      },
      {
        heading: { es: "Deberes de los consejeros y partes relacionadas", en: "Directors' duties and related parties" },
        body: [
          {
            es: "Los consejeros tienen dos deberes centrales. El **deber de diligencia** es decidir informado y con cuidado: pedir datos, leer los reportes, asistir a las sesiones. El **deber de lealtad** es anteponer el interés de la sociedad al propio: no usar información privilegiada ni aprovechar negocios que son de la empresa.",
            en: "Directors have two core duties. The **duty of care** means deciding in an informed, careful way: asking for data, reading reports, attending meetings. The **duty of loyalty** means putting the company's interest ahead of one's own: not using inside information or taking business opportunities that belong to the company.",
          },
          {
            es: "Una **parte relacionada** es alguien cercano a quien decide: un accionista de control, un consejero, sus parientes o las empresas que controlan. Operar con ellas no está prohibido, pero hay que hacerlo a **valor de mercado**, revelarlo, que el interesado **no vote** y que lo apruebe un órgano independiente.",
            en: "A **related party** is someone close to the decision-maker: a controlling shareholder, a director, their relatives or companies they control. Dealing with them is not forbidden, but it must be at **market value**, disclosed, the interested person must **not vote**, and an independent body must approve it.",
          },
          {
            es: "Mini ejemplo: un consejero propone rentar a la empresa una bodega que es suya. Lo correcto: declarar su conflicto, salir de la votación, pedir un avalúo de renta de mercado y que el comité de prácticas societarias lo revise.",
            en: "Mini example: a director proposes renting a warehouse he owns to the company. The right path: disclose the conflict, step out of the vote, get a market rent appraisal and have the corporate practices committee review it.",
          },
        ],
      },
    ],
    examples: [
      {
        title: { es: "Diseñar un consejo que cumpla", en: "Designing a compliant board" },
        problem: {
          es: "Una empresa que prepara su salida a bolsa quiere un consejo de 14 miembros. ¿Cuántos independientes necesita como mínimo y cómo integraría el comité de auditoría?",
          en: "A company preparing to go public wants a 14-member board. How many independents does it need at minimum and how would it form the audit committee?",
        },
        steps: [
          { es: "Verifica el tope: 14 ≤ 21, está permitido.", en: "Check the cap: 14 ≤ 21, it is allowed." },
          { es: "Calcula 25%: 14 × 0.25 = 3.5.", en: "Compute 25%: 14 × 0.25 = 3.5." },
          { es: "Redondea hacia arriba: 4 independientes (3 no alcanzan el 25%).", en: "Round up: 4 independents (3 do not reach 25%)." },
          { es: "El comité de auditoría se integra solo con consejeros independientes, idealmente con al menos uno experto en finanzas.", en: "The audit committee is made up only of independent directors, ideally with at least one finance expert." },
        ],
        result: {
          es: "Mínimo 4 consejeros independientes; elegir más mejora la vigilancia y la confianza de los inversionistas.",
          en: "At least 4 independent directors; choosing more improves oversight and investor confidence.",
        },
      },
      {
        title: { es: "Una compra a la empresa del hermano", en: "A purchase from the brother's company" },
        problem: {
          es: "El director general quiere comprar uniformes por $3,000,000 a una empresa de su hermano. Una cotización independiente ofrece lo mismo por $2,400,000. ¿Qué debe hacer el consejo?",
          en: "The CEO wants to buy uniforms for $3,000,000 from his brother's company. An independent quote offers the same for $2,400,000. What should the board do?",
        },
        steps: [
          { es: "Identifica la parte relacionada: la empresa es de un pariente del director.", en: "Identify the related party: the company belongs to the CEO's relative." },
          { es: "Compara con mercado: 3,000,000 − 2,400,000 = $600,000 de sobreprecio (25% más caro).", en: "Compare with market: 3,000,000 − 2,400,000 = $600,000 overpricing (25% more expensive)." },
          { es: "El director debe revelar el conflicto y no participar en la decisión.", en: "The CEO must disclose the conflict and not take part in the decision." },
          { es: "El comité de prácticas societarias revisa y, salvo razones de calidad documentadas, recomienda rechazar o renegociar a precio de mercado.", en: "The corporate practices committee reviews it and, unless there are documented quality reasons, recommends rejecting or renegotiating at market price." },
        ],
        result: {
          es: "Aprobarla sin más dañaría a los accionistas en $600,000 y violaría el deber de lealtad; debe rechazarse o ajustarse a valor de mercado.",
          en: "Approving it as is would harm shareholders by $600,000 and breach the duty of loyalty; it should be rejected or adjusted to market value.",
        },
      },
    ],
    keyPoints: [
      { es: "El gobierno corporativo existe para reducir el problema de agencia y proteger a los minoritarios.", en: "Corporate governance exists to reduce the agency problem and protect minority shareholders." },
      { es: "Asamblea decide lo esencial, consejo define estrategia y vigila, dirección ejecuta.", en: "The shareholders' meeting decides essentials, the board sets strategy and oversees, management executes." },
      { es: "En una SAB: máximo 21 consejeros y al menos 25% independientes, redondeando hacia arriba.", en: "In an SAB: at most 21 directors and at least 25% independent, rounding up." },
      { es: "Diligencia = decidir informado; lealtad = no anteponer el interés propio.", en: "Care = decide informed; loyalty = do not put self-interest first." },
      { es: "Las operaciones con partes relacionadas se revelan, se hacen a valor de mercado y no las vota el interesado.", en: "Related-party transactions are disclosed, done at market value and not voted on by the interested party." },
    ],
    normativeNote: NOTE_GOV,
    exerciseIds: ['DER-14-E1', 'DER-14-E2', 'DER-14-E3', 'DER-14-E4', 'DER-14-E5', 'DER-14-E6'],
  },

  // ───────────────────────────── DER-15 ─────────────────────────────
  {
    id: 'DER-15',
    level: 2,
    topicIds: ['DER.15'],
    title: { es: "Prevención de lavado de dinero (PLD)", en: "Anti-money laundering (AML)" },
    summary: {
      es: "La PLD obliga a bancos y a ciertos negocios a conocer a sus clientes, detectar operaciones sospechosas y reportarlas para que el dinero ilícito no entre a la economía formal.",
      en: "AML requires banks and certain businesses to know their customers, detect suspicious transactions and report them so illicit money does not enter the formal economy.",
    },
    minutes: 17,
    objectives: [
      { es: "Describir las tres etapas del lavado de dinero y reconocer señales de alerta.", en: "Describe the three stages of money laundering and recognize red flags." },
      { es: "Explicar las obligaciones de PLD de entidades financieras y de quienes realizan actividades vulnerables.", en: "Explain the AML obligations of financial entities and of those carrying out vulnerable activities." },
      { es: "Aplicar el enfoque basado en riesgo para clasificar clientes y decidir qué reportar.", en: "Apply the risk-based approach to classify customers and decide what to report." },
    ],
    theory: [
      {
        heading: { es: "Qué es el lavado de dinero y sus etapas", en: "What money laundering is and its stages" },
        body: [
          {
            es: "**Lavar dinero** es hacer que dinero que viene de un delito (extorsión, narcotráfico, fraude, corrupción) parezca ganado legalmente. Es un delito en sí mismo y también lo es el **financiamiento al terrorismo**, que puede usar dinero lícito para fines ilícitos.",
            en: "**Money laundering** is making money that comes from a crime (extortion, drug trafficking, fraud, corruption) look legally earned. It is a crime in itself, and so is **terrorist financing**, which can use lawful money for unlawful ends.",
          },
          {
            es: "Se describe en tres etapas. **Colocación**: meter el efectivo al sistema (depósitos, compra de bienes). **Estratificación** u ocultamiento: mover el dinero muchas veces para borrar su rastro (transferencias entre cuentas, empresas fachada, otros países). **Integración**: el dinero regresa \"limpio\" como si fuera una ganancia normal (venta de un inmueble, dividendos de una empresa).",
            en: "It is described in three stages. **Placement**: putting cash into the system (deposits, buying goods). **Layering**: moving money many times to erase its trail (transfers between accounts, shell companies, other countries). **Integration**: the money returns \"clean\" as if it were normal income (sale of a property, dividends from a company).",
          },
          {
            es: "Mini ejemplo: alguien deposita efectivo en varias sucursales en montos pequeños (colocación), lo transfiere a cuentas de tres empresas sin empleados (estratificación) y luego compra un departamento a nombre de una de ellas (integración).",
            en: "Mini example: someone deposits cash at several branches in small amounts (placement), transfers it to accounts of three companies with no employees (layering) and then buys an apartment in the name of one of them (integration).",
          },
        ],
        bullets: [
          { es: "Fraccionar depósitos para no llegar a un umbral (\"pitufeo\").", en: "Splitting deposits to stay under a threshold (\"smurfing\")." },
          { es: "Movimientos que no cuadran con la actividad o el ingreso declarado.", en: "Movements that do not match the declared activity or income." },
          { es: "Empresas fachada sin empleados ni operaciones reales.", en: "Shell companies with no employees or real operations." },
          { es: "Negarse a dar datos o usar prestanombres.", en: "Refusing to provide data or using front persons." },
          { es: "Pagos en efectivo grandes por bienes de alto valor.", en: "Large cash payments for high-value goods." },
        ],
      },
      {
        heading: { es: "Quién tiene obligaciones y cuáles son", en: "Who has obligations and what they are" },
        body: [
          {
            es: "Las **entidades financieras** (bancos, casas de bolsa, fintech, SOFOM, casas de cambio, entre otras) siguen disposiciones de PLD supervisadas por su regulador. Deben **identificar al cliente** (política \"conoce a tu cliente\" o KYC), conocer al **beneficiario controlador** (la persona física que en realidad controla o se beneficia), designar un **oficial de cumplimiento** y capacitar al personal.",
            en: "**Financial entities** (banks, brokerages, fintechs, SOFOMs, currency exchanges, among others) follow AML rules supervised by their regulator. They must **identify the customer** (\"know your customer\" or KYC policy), know the **beneficial owner** (the individual who really controls or benefits), appoint a **compliance officer** and train staff.",
          },
          {
            es: "Además envían reportes a la **UIF** (Unidad de Inteligencia Financiera de la SHCP): de **operaciones relevantes** (efectivo arriba de cierto monto), **inusuales** (no cuadran con el perfil del cliente) e **internas preocupantes** (conductas de empleados). La UIF analiza y, si encuentra indicios, da vista a la Fiscalía.",
            en: "They also file reports with the **UIF** (SHCP's Financial Intelligence Unit): **relevant transactions** (cash above a certain amount), **unusual** ones (not matching the customer's profile) and **internal concerning** ones (employee conduct). The UIF analyzes them and, if it finds evidence, refers them to the Prosecutor's Office.",
          },
          {
            es: "La Ley Federal para la Prevención e Identificación de Operaciones con Recursos de Procedencia Ilícita alcanza también a negocios no financieros que realizan **actividades vulnerables**: venta de inmuebles, autos, joyas y obras de arte; préstamos no bancarios; arrendamiento de inmuebles; servicios notariales; activos virtuales, entre otras. Deben identificar al cliente, presentar **avisos** a la autoridad hacendaria al pasar ciertos montos y, en algunos casos, **no aceptar efectivo** arriba de un límite. Mini ejemplo: una agencia de autos que vende una camioneta de lujo debe integrar el expediente del comprador.",
            en: "The Federal Law for the Prevention and Identification of Transactions with Illicit Proceeds also covers non-financial businesses performing **vulnerable activities**: selling real estate, cars, jewelry and art; non-bank lending; property leasing; notary services; virtual assets, among others. They must identify the customer, file **notices** with the tax authority above certain amounts and, in some cases, **refuse cash** above a limit. Mini example: a car dealer selling a luxury SUV must build the buyer's file.",
          },
        ],
      },
      {
        heading: { es: "Enfoque basado en riesgo", en: "Risk-based approach" },
        body: [
          {
            es: "Las **Recomendaciones del GAFI** (Grupo de Acción Financiera Internacional, el organismo que fija los estándares mundiales) piden un **enfoque basado en riesgo**: dedicar más controles a lo más riesgoso en lugar de tratar igual a todos.",
            en: "The **FATF Recommendations** (Financial Action Task Force, the body that sets global standards) call for a **risk-based approach**: devote more controls to what is riskiest instead of treating everyone the same.",
          },
          {
            es: "Se evalúan factores como el **cliente** (actividad, origen de recursos, si es **persona políticamente expuesta** o PEP, es decir, alguien con un cargo público relevante o su familia cercana), el **producto** (efectivo, transferencias internacionales), el **canal** (presencial o digital) y la **geografía**. A los clientes de **alto riesgo** se les aplica **debida diligencia reforzada**: más documentos, aprobación de un directivo y monitoreo más frecuente.",
            en: "Factors assessed include the **customer** (activity, source of funds, whether a **politically exposed person** or PEP, meaning someone with a prominent public role or close family), the **product** (cash, international transfers), the **channel** (in person or digital) and **geography**. **High-risk** customers get **enhanced due diligence**: more documents, senior approval and more frequent monitoring.",
          },
          {
            es: "Regla de oro: el empleado **no debe avisar al cliente** que fue reportado (eso se llama \"alertar\" o tipping-off). Mini ejemplo: una estudiante con ingreso declarado de $8,000 al mes que recibe $600,000 en transferencias desde el extranjero en una semana amerita análisis y, si no hay explicación, un reporte de operación inusual.",
            en: "Golden rule: the employee **must not tell the customer** they were reported (that is called tipping-off). Mini example: a student with declared income of $8,000 a month who receives $600,000 in foreign transfers in one week warrants analysis and, if there is no explanation, an unusual transaction report.",
          },
        ],
        formula: 'Puntaje de riesgo = cliente + producto + canal + geografía (modelo ilustrativo)',
      },
    ],
    examples: [
      {
        title: { es: "Clasificar a un cliente con un modelo de puntaje", en: "Classifying a customer with a scoring model" },
        problem: {
          es: "Un banco usa un modelo interno hipotético: cada factor vale de 1 (bajo) a 3 (alto); PEP suma 3 puntos extra; 10 o más = alto riesgo. Nuevo cliente: cambista de divisas (actividad 3), usa mucho efectivo (producto 3), abre cuenta en sucursal (canal 1), opera en zona fronteriza (geografía 2) y es hermano de un senador (PEP).",
          en: "A bank uses a hypothetical internal model: each factor scores 1 (low) to 3 (high); PEP adds 3 extra points; 10 or more = high risk. New customer: currency changer (activity 3), uses a lot of cash (product 3), opens the account at a branch (channel 1), operates in a border zone (geography 2) and is a senator's brother (PEP).",
        },
        steps: [
          { es: "Suma factores: 3 + 3 + 1 + 2 = 9.", en: "Add factors: 3 + 3 + 1 + 2 = 9." },
          { es: "Suma PEP: 9 + 3 = 12.", en: "Add PEP: 9 + 3 = 12." },
          { es: "Compara: 12 ≥ 10 → alto riesgo.", en: "Compare: 12 ≥ 10 → high risk." },
          { es: "Aplica debida diligencia reforzada: origen de recursos, aprobación de un directivo y monitoreo frecuente.", en: "Apply enhanced due diligence: source of funds, senior approval and frequent monitoring." },
        ],
        result: {
          es: "Cliente de alto riesgo (12 puntos). Puede aceptarse, pero con controles reforzados; sin PEP también estaría cerca del umbral.",
          en: "High-risk customer (12 points). He can be accepted, but with enhanced controls; even without PEP he would be close to the threshold.",
        },
      },
      {
        title: { es: "Detectar un fraccionamiento", en: "Spotting structuring" },
        problem: {
          es: "Con un umbral interno hipotético de alerta de $50,000 por depósito, un cliente con ingreso declarado de $15,000 mensuales hace en tres días depósitos en efectivo de $49,000, $48,500 y $49,800 en distintas sucursales. ¿Qué hace el banco?",
          en: "With a hypothetical internal alert threshold of $50,000 per deposit, a customer with declared income of $15,000 a month makes cash deposits of $49,000, $48,500 and $49,800 at different branches over three days. What does the bank do?",
        },
        steps: [
          { es: "Suma: 49,000 + 48,500 + 49,800 = $147,300.", en: "Add: 49,000 + 48,500 + 49,800 = $147,300." },
          { es: "Compara con su perfil: casi 10 veces su ingreso mensual (147,300 ÷ 15,000 ≈ 9.8).", en: "Compare with profile: almost 10 times monthly income (147,300 ÷ 15,000 ≈ 9.8)." },
          { es: "Patrón: cada depósito queda justo debajo del umbral y en sucursales distintas → señal de fraccionamiento.", en: "Pattern: each deposit sits just under the threshold at different branches → structuring red flag." },
          { es: "El área de cumplimiento analiza y, sin explicación razonable, envía reporte de operación inusual sin avisar al cliente.", en: "Compliance analyzes and, absent a reasonable explanation, files an unusual transaction report without telling the customer." },
        ],
        result: {
          es: "Se trata como posible operación inusual por $147,300; evitar el umbral no evita el reporte.",
          en: "It is treated as a possible unusual transaction of $147,300; avoiding the threshold does not avoid the report.",
        },
      },
    ],
    keyPoints: [
      { es: "Lavado: colocación, estratificación e integración.", en: "Laundering: placement, layering and integration." },
      { es: "Las entidades financieras identifican al cliente y al beneficiario controlador y reportan a la UIF.", en: "Financial entities identify the customer and beneficial owner and report to the UIF." },
      { es: "Reportes: operaciones relevantes, inusuales e internas preocupantes.", en: "Reports: relevant, unusual and internal concerning transactions." },
      { es: "Los negocios con actividades vulnerables también identifican clientes, presentan avisos y limitan el efectivo.", en: "Businesses with vulnerable activities also identify customers, file notices and limit cash." },
      { es: "Enfoque basado en riesgo: más controles para PEP, efectivo y perfiles que no cuadran; nunca alertar al cliente.", en: "Risk-based approach: more controls for PEPs, cash and mismatched profiles; never tip off the customer." },
    ],
    normativeNote: NOTE_AML,
    exerciseIds: ['DER-15-E1', 'DER-15-E2', 'DER-15-E3', 'DER-15-E4', 'DER-15-E5', 'DER-15-E6'],
  },

  // ───────────────────────────── DER-16 ─────────────────────────────
  {
    id: 'DER-16',
    level: 2,
    topicIds: ['DER.16'],
    title: { es: "Protección de datos personales", en: "Personal data protection" },
    summary: {
      es: "Las empresas que reciben datos personales deben avisar para qué los usan, pedir consentimiento cuando corresponde, cuidarlos y respetar los derechos ARCO de sus titulares.",
      en: "Companies that receive personal data must say what they use it for, get consent when required, safeguard it and respect the ARCO rights of the data owners.",
    },
    minutes: 15,
    objectives: [
      { es: "Distinguir datos personales, datos sensibles, titular, responsable y encargado.", en: "Distinguish personal data, sensitive data, data subject, controller and processor." },
      { es: "Explicar los principios del tratamiento, el aviso de privacidad y los tipos de consentimiento.", en: "Explain the processing principles, the privacy notice and the types of consent." },
      { es: "Aplicar los derechos ARCO y las medidas de seguridad ante una vulneración de datos.", en: "Apply ARCO rights and security measures when a data breach occurs." },
    ],
    theory: [
      {
        heading: { es: "Conceptos clave: quién es quién", en: "Key concepts: who is who" },
        body: [
          {
            es: "Un **dato personal** es cualquier información que identifica a una persona física o permite identificarla: nombre, CURP, teléfono, correo, domicilio, foto o la ubicación de tu celular. Los **datos sensibles** son los que, si se usan mal, pueden causar discriminación o un daño grave: salud, origen étnico, creencias religiosas, opiniones políticas, preferencia sexual o datos genéticos y biométricos (según la ley).",
            en: "**Personal data** is any information that identifies an individual or makes them identifiable: name, CURP (national ID code), phone, email, address, photo or your phone's location. **Sensitive data** is data that, if misused, can cause discrimination or serious harm: health, ethnic origin, religious beliefs, political opinions, sexual preference or genetic and biometric data (as the law defines).",
          },
          {
            es: "El **titular** es la persona a quien pertenecen los datos. El **responsable** es la empresa que decide para qué y cómo se usan. El **encargado** es un tercero que los trata **por cuenta** del responsable, por ejemplo el proveedor de la nube o un centro de llamadas. Tratar datos significa obtenerlos, usarlos, guardarlos, compartirlos o borrarlos.",
            en: "The **data subject** is the person the data belongs to. The **controller** is the company that decides why and how it is used. The **processor** is a third party processing it **on behalf of** the controller, for example the cloud provider or a call center. Processing means collecting, using, storing, sharing or deleting data.",
          },
          {
            es: "Mini ejemplo: un gimnasio pide tu nombre, teléfono y huella digital para entrar. El gimnasio es responsable; la empresa del software de acceso es encargada; tu huella es un dato biométrico que exige más cuidado.",
            en: "Mini example: a gym asks for your name, phone and fingerprint to get in. The gym is the controller; the access-software company is the processor; your fingerprint is biometric data requiring extra care.",
          },
        ],
      },
      {
        heading: { es: "Principios, aviso de privacidad y consentimiento", en: "Principles, privacy notice and consent" },
        body: [
          {
            es: "La ley mexicana fija **principios** para todo tratamiento. Los más prácticos: **finalidad** (usar los datos solo para lo que se avisó), **proporcionalidad** (pedir solo los necesarios), **calidad** (que estén correctos y actualizados) y **responsabilidad** (la empresa debe poder demostrar que cumple).",
            en: "Mexican law sets **principles** for all processing. The most practical: **purpose** (use data only for what was disclosed), **proportionality** (ask only for what is needed), **quality** (keep it correct and up to date) and **accountability** (the company must be able to prove it complies).",
          },
          {
            es: "El **aviso de privacidad** es el documento que informa quién es el responsable, qué datos recaba, para qué, con quién los comparte y cómo ejercer tus derechos. Debe estar disponible **antes o al momento** de recabar los datos. El **consentimiento** puede ser **tácito** (no te opones tras ver el aviso) o **expreso** (marcas una casilla, firmas). Para datos sensibles se exige consentimiento **expreso y por escrito** (firma autógrafa o electrónica).",
            en: "The **privacy notice** is the document stating who the controller is, what data it collects, why, with whom it shares it and how to exercise your rights. It must be available **before or at the time** data is collected. **Consent** can be **tacit** (you do not object after seeing the notice) or **express** (you tick a box, you sign). Sensitive data requires **express written** consent (handwritten or electronic signature).",
          },
          {
            es: "Mini ejemplo: una tienda en línea quiere usar tu correo para enviarte promociones, que no es necesario para entregarte el pedido. Esa es una **finalidad secundaria**: el aviso debe separarla y darte forma de negarte sin perder la compra.",
            en: "Mini example: an online store wants to use your email for promotions, which is not needed to deliver your order. That is a **secondary purpose**: the notice must list it separately and let you refuse without losing the purchase.",
          },
        ],
        bullets: [
          { es: "Finalidad: solo para lo que se informó.", en: "Purpose: only for what was disclosed." },
          { es: "Proporcionalidad: los datos mínimos necesarios.", en: "Proportionality: the minimum necessary data." },
          { es: "Calidad: exactos y actualizados; se borran cuando ya no se necesitan.", en: "Quality: accurate and current; deleted when no longer needed." },
          { es: "Responsabilidad: políticas, capacitación y evidencia de cumplimiento.", en: "Accountability: policies, training and evidence of compliance." },
        ],
      },
      {
        heading: { es: "Derechos ARCO, seguridad y vulneraciones", en: "ARCO rights, security and breaches" },
        body: [
          {
            es: "El titular tiene derechos **ARCO**: **Acceso** (saber qué datos tuyos tiene la empresa), **Rectificación** (corregirlos), **Cancelación** (pedir que se borren cuando ya no hay razón para tenerlos) y **Oposición** (negarte a un uso específico, como publicidad). El responsable debe tener un medio sencillo para ejercerlos y responder en el plazo legal.",
            en: "The data subject has **ARCO** rights: **Access** (know what data the company holds about you), **Rectification** (correct it), **Cancellation** (ask for deletion when there is no longer a reason to keep it) and **Objection** (refuse a specific use, such as advertising). The controller must offer a simple channel to exercise them and answer within the legal deadline.",
          },
          {
            es: "El responsable debe aplicar **medidas de seguridad** administrativas (políticas, capacitación), físicas (archiveros con llave, control de acceso) y técnicas (contraseñas fuertes, cifrado, respaldos). Una **vulneración** es un robo, pérdida, acceso o uso no autorizado. Si afecta de forma significativa a los titulares, hay que **informarles** para que se protejan.",
            en: "The controller must apply administrative (policies, training), physical (locked cabinets, access control) and technical (strong passwords, encryption, backups) **security measures**. A **breach** is theft, loss, or unauthorized access or use. If it significantly affects data subjects, they must be **informed** so they can protect themselves.",
          },
          {
            es: "Si la empresa opera con clientes en la Unión Europea puede aplicarle también el **RGPD** (Reglamento General de Protección de Datos), con multas que se calculan sobre la facturación mundial. Mini ejemplo: roban la laptop sin cifrar de un ejecutivo con la base de clientes; la empresa debe contener el daño, avisar a los afectados y revisar por qué no estaba cifrada.",
            en: "If the company deals with customers in the European Union, the **GDPR** (General Data Protection Regulation) may also apply, with fines calculated on worldwide turnover. Mini example: an executive's unencrypted laptop with the customer database is stolen; the company must contain the damage, notify those affected and review why it was not encrypted.",
          },
        ],
      },
    ],
    examples: [
      {
        title: { es: "Revisar un formulario con el principio de proporcionalidad", en: "Reviewing a form with the proportionality principle" },
        problem: {
          es: "Una cafetería con programa de lealtad pide: nombre, correo, fecha de cumpleaños, religión, estado de salud y número de tarjeta de crédito. Solo da puntos y un regalo de cumpleaños. ¿Qué datos sobran?",
          en: "A coffee shop with a loyalty program asks for: name, email, birthday, religion, health status and credit card number. It only gives points and a birthday gift. Which data is excessive?",
        },
        steps: [
          { es: "Necesarios para la finalidad: nombre, correo (identificar la cuenta) y cumpleaños (regalo).", en: "Needed for the purpose: name, email (identify the account) and birthday (gift)." },
          { es: "Religión y salud son datos sensibles sin relación con los puntos: sobran.", en: "Religion and health are sensitive data unrelated to points: excessive." },
          { es: "La tarjeta de crédito no se usa para acumular puntos: sobra y aumenta el riesgo si hay robo.", en: "The credit card is not used to earn points: excessive and increases risk if stolen." },
          { es: "Ajusta el formulario y el aviso de privacidad a 3 datos.", en: "Adjust the form and privacy notice to 3 data fields." },
        ],
        result: {
          es: "Sobran 3 de los 6 datos (religión, salud y tarjeta). Pedir menos reduce el riesgo legal y el daño en caso de vulneración.",
          en: "3 of the 6 fields are excessive (religion, health and card). Asking for less reduces legal risk and harm in case of a breach.",
        },
      },
      {
        title: { es: "Responder una solicitud ARCO", en: "Answering an ARCO request" },
        problem: {
          es: "Un excliente de una aseguradora pide: saber qué datos tienen de él, corregir su domicilio y dejar de recibir llamadas de venta. ¿Qué derechos ejerce y qué hace la empresa?",
          en: "A former customer of an insurer asks to: know what data they hold on him, correct his address and stop receiving sales calls. Which rights is he exercising and what does the company do?",
        },
        steps: [
          { es: "Saber qué datos tienen → Acceso: se le entrega la información.", en: "Know what data they hold → Access: the information is delivered." },
          { es: "Corregir domicilio → Rectificación: se actualiza.", en: "Correct address → Rectification: it is updated." },
          { es: "Dejar de recibir llamadas → Oposición a la finalidad de mercadotecnia.", en: "Stop the calls → Objection to the marketing purpose." },
          { es: "Verifica la identidad del solicitante antes de entregar datos y responde dentro del plazo legal.", en: "Verify the requester's identity before delivering data and answer within the legal deadline." },
        ],
        result: {
          es: "Ejerce Acceso, Rectificación y Oposición. La empresa conserva solo lo que la ley le obliga a guardar de la póliza anterior.",
          en: "He exercises Access, Rectification and Objection. The company keeps only what the law requires it to retain from the former policy.",
        },
      },
    ],
    keyPoints: [
      { es: "Dato personal = identifica a una persona; dato sensible = puede causar discriminación o daño grave.", en: "Personal data = identifies a person; sensitive data = can cause discrimination or serious harm." },
      { es: "Titular es dueño del dato, responsable decide su uso, encargado lo trata por cuenta del responsable.", en: "Data subject owns the data, controller decides its use, processor handles it on the controller's behalf." },
      { es: "El aviso de privacidad va antes o al recabar; los datos sensibles piden consentimiento expreso y por escrito.", en: "The privacy notice comes before or at collection; sensitive data needs express written consent." },
      { es: "ARCO: Acceso, Rectificación, Cancelación y Oposición.", en: "ARCO: Access, Rectification, Cancellation and Objection." },
      { es: "Pide solo lo necesario y protégelo con medidas administrativas, físicas y técnicas.", en: "Ask only for what is needed and protect it with administrative, physical and technical measures." },
    ],
    normativeNote: NOTE_DATA,
    exerciseIds: ['DER-16-E1', 'DER-16-E2', 'DER-16-E3', 'DER-16-E4', 'DER-16-E5', 'DER-16-E6'],
  },

  // ───────────────────────────── DER-17 ─────────────────────────────
  {
    id: 'DER-17',
    level: 2,
    topicIds: ['DER.17'],
    title: { es: "Cumplimiento regulatorio y ética empresarial", en: "Regulatory compliance and business ethics" },
    summary: {
      es: "Un programa de cumplimiento convierte la ética en controles concretos para que la empresa identifique sus riesgos legales, los prevenga, los detecte y corrija a tiempo.",
      en: "A compliance program turns ethics into concrete controls so the company identifies its legal risks, prevents them, detects them and corrects them in time.",
    },
    minutes: 16,
    objectives: [
      { es: "Explicar qué es el cumplimiento regulatorio y por qué una empresa responde por actos de sus empleados.", en: "Explain what regulatory compliance is and why a company answers for its employees' acts." },
      { es: "Identificar los elementos de un programa de integridad y el modelo de las tres líneas.", en: "Identify the elements of an integrity program and the three lines model." },
      { es: "Evaluar y priorizar riesgos de cumplimiento con una matriz de probabilidad e impacto.", en: "Assess and prioritize compliance risks with a likelihood-impact matrix." },
    ],
    theory: [
      {
        heading: { es: "Qué es cumplir y por qué importa", en: "What compliance is and why it matters" },
        body: [
          {
            es: "**Cumplimiento** (compliance) es asegurar que la empresa respete las leyes, reglas de sus autoridades y sus propias políticas. La **ética empresarial** va un paso más allá: hacer lo correcto aunque la ley no lo pida. El cumplimiento es el \"piso\"; la ética, la cultura que lo sostiene.",
            en: "**Compliance** means ensuring the company obeys laws, its regulators' rules and its own policies. **Business ethics** goes one step further: doing the right thing even when the law does not require it. Compliance is the \"floor\"; ethics is the culture that sustains it.",
          },
          {
            es: "Una empresa puede ser sancionada por lo que hacen sus empleados o intermediarios. En México, la **Ley General de Responsabilidades Administrativas** sanciona a personas morales por faltas como el **soborno** a servidores públicos, y toma en cuenta si tenían una **política de integridad**. En materia penal, ciertos delitos pueden generar responsabilidad de la persona moral. Y si la empresa opera con EE. UU., leyes como la **FCPA** (contra el soborno en el extranjero) pueden alcanzarla.",
            en: "A company can be penalized for what its employees or intermediaries do. In Mexico, the **General Law of Administrative Responsibilities** penalizes legal entities for misconduct such as **bribing** public officials, and takes into account whether they had an **integrity policy**. In criminal matters, certain crimes may give rise to the legal entity's liability. And if the company deals with the US, laws such as the **FCPA** (against foreign bribery) may reach it.",
          },
          {
            es: "Mini ejemplo: un gestor contratado para tramitar un permiso ofrece \"una ayudita\" a un inspector. Aunque el director no lo supiera, la empresa puede responder. Un buen programa habría revisado al gestor antes de contratarlo y prohibido pagos de facilitación.",
            en: "Mini example: an agent hired to process a permit offers \"a little help\" to an inspector. Even if the CEO did not know, the company may be liable. A good program would have vetted the agent before hiring and banned facilitation payments.",
          },
        ],
      },
      {
        heading: { es: "Elementos de un programa de integridad", en: "Elements of an integrity program" },
        body: [
          {
            es: "Un programa eficaz no es un manual guardado en un cajón. Empieza con el **tono desde arriba**: el consejo y la dirección dan el ejemplo y asignan recursos. Luego se hace una **evaluación de riesgos** para saber dónde puede fallar la empresa (permisos, compras públicas, datos, competencia, PLD).",
            en: "An effective program is not a manual kept in a drawer. It starts with **tone at the top**: the board and management lead by example and allocate resources. Then a **risk assessment** shows where the company could fail (permits, public procurement, data, competition, AML).",
          },
          {
            es: "Con eso se escriben un **código de ética** y políticas claras (regalos, conflictos de interés, terceros), se **capacita** al personal, se abre una **línea de denuncia** confidencial y sin represalias, se **monitorea** y audita, se **investiga** y sanciona de forma pareja, y se **mejora** el programa con lo aprendido.",
            en: "Then a **code of ethics** and clear policies are written (gifts, conflicts of interest, third parties), staff are **trained**, a confidential **whistleblower hotline** without retaliation is opened, controls are **monitored** and audited, cases are **investigated** and sanctioned consistently, and the program is **improved** with lessons learned.",
          },
          {
            es: "El **modelo de las tres líneas** reparte papeles: la **primera línea** (áreas operativas) es dueña del riesgo y aplica controles; la **segunda** (cumplimiento, riesgos) fija reglas y vigila; la **tercera** (auditoría interna) da una opinión independiente al consejo. Mini ejemplo: ventas aplica la política de regalos, cumplimiento la diseña y auditoría interna revisa si se respeta.",
            en: "The **three lines model** splits roles: the **first line** (operating areas) owns the risk and applies controls; the **second** (compliance, risk) sets rules and monitors; the **third** (internal audit) gives an independent opinion to the board. Mini example: sales applies the gifts policy, compliance designs it and internal audit checks whether it is followed.",
          },
        ],
        bullets: [
          { es: "Tono desde arriba y recursos suficientes.", en: "Tone at the top and adequate resources." },
          { es: "Evaluación de riesgos periódica.", en: "Periodic risk assessment." },
          { es: "Código de ética, políticas y debida diligencia de terceros.", en: "Code of ethics, policies and third-party due diligence." },
          { es: "Capacitación y comunicación.", en: "Training and communication." },
          { es: "Línea de denuncia sin represalias e investigación.", en: "Retaliation-free hotline and investigation." },
          { es: "Monitoreo, auditoría y mejora continua.", en: "Monitoring, audit and continuous improvement." },
        ],
      },
      {
        heading: { es: "Matriz de riesgos: priorizar con números", en: "Risk matrix: prioritizing with numbers" },
        body: [
          {
            es: "No se puede vigilar todo con la misma intensidad. Una **matriz de riesgos** califica cada riesgo por **probabilidad** (qué tan seguido podría pasar, de 1 a 5) e **impacto** (qué tan grave sería, de 1 a 5). Su producto es el **riesgo inherente**, es decir, el riesgo antes de controles.",
            en: "You cannot watch everything with the same intensity. A **risk matrix** scores each risk by **likelihood** (how often it could happen, 1 to 5) and **impact** (how serious it would be, 1 to 5). Their product is the **inherent risk**, meaning the risk before controls.",
          },
          {
            es: "Después se mide qué tanto lo reducen los controles. En un modelo ilustrativo, si un control es 60% efectivo, el **riesgo residual** es el 40% del inherente. Se atiende primero lo que tenga mayor riesgo residual, porque es lo que sigue \"descubierto\".",
            en: "Next you measure how much controls reduce it. In an illustrative model, if a control is 60% effective, the **residual risk** is 40% of the inherent risk. You address first whatever has the highest residual risk, because that is what remains \"uncovered\".",
          },
          {
            es: "Mini ejemplo: el riesgo de soborno en permisos tiene probabilidad 4 e impacto 5 → inherente 20. Con un control 50% efectivo, el residual es 20 × 0.5 = 10.",
            en: "Mini example: bribery risk in permits has likelihood 4 and impact 5 → inherent 20. With a 50% effective control, residual is 20 × 0.5 = 10.",
          },
        ],
        formula: 'Riesgo inherente = Probabilidad × Impacto;  Riesgo residual = Inherente × (1 − efectividad del control)',
      },
    ],
    examples: [
      {
        title: { es: "Priorizar tres riesgos", en: "Prioritizing three risks" },
        problem: {
          es: "Una constructora evalúa: A) soborno en permisos: P 4, I 5, control 25% efectivo; B) fuga de datos de clientes: P 3, I 4, control 50%; C) multa laboral: P 2, I 3, control 0%. ¿Cuál atiende primero?",
          en: "A construction firm assesses: A) bribery in permits: L 4, I 5, control 25% effective; B) customer data leak: L 3, I 4, control 50%; C) labor fine: L 2, I 3, control 0%. Which does it address first?",
        },
        steps: [
          { es: "Inherentes: A = 4 × 5 = 20; B = 3 × 4 = 12; C = 2 × 3 = 6.", en: "Inherent: A = 4 × 5 = 20; B = 3 × 4 = 12; C = 2 × 3 = 6." },
          { es: "Residual A = 20 × (1 − 0.25) = 15.", en: "Residual A = 20 × (1 − 0.25) = 15." },
          { es: "Residual B = 12 × (1 − 0.50) = 6.", en: "Residual B = 12 × (1 − 0.50) = 6." },
          { es: "Residual C = 6 × (1 − 0) = 6.", en: "Residual C = 6 × (1 − 0) = 6." },
        ],
        result: {
          es: "Primero el soborno (residual 15): reforzar debida diligencia de gestores y prohibir pagos en efectivo. B y C empatan en 6.",
          en: "Bribery first (residual 15): strengthen due diligence on agents and ban cash payments. B and C tie at 6.",
        },
      },
      {
        title: { es: "Una denuncia anónima", en: "An anonymous report" },
        problem: {
          es: "Por la línea de denuncia llega un reporte: un gerente de compras recibe regalos caros de un proveedor que acaba de ganar un contrato. ¿Qué pasos sigue el programa?",
          en: "A report comes in through the hotline: a purchasing manager receives expensive gifts from a supplier that just won a contract. What steps does the program follow?",
        },
        steps: [
          { es: "Registrar la denuncia y proteger la confidencialidad del denunciante.", en: "Log the report and protect the whistleblower's confidentiality." },
          { es: "Asignar una investigación independiente del área de compras (segunda o tercera línea).", en: "Assign an investigation independent of purchasing (second or third line)." },
          { es: "Revisar la política de regalos, el proceso de licitación y si el gerente declaró el conflicto.", en: "Review the gifts policy, the bidding process and whether the manager disclosed the conflict." },
          { es: "Si se confirma: sanción conforme al código, revisar el contrato y corregir el control que falló.", en: "If confirmed: sanction per the code, review the contract and fix the failed control." },
        ],
        result: {
          es: "La denuncia se investiga sin represalias y termina con sanción y una mejora del control, no solo con castigar a una persona.",
          en: "The report is investigated without retaliation and ends with a sanction and a control improvement, not just punishing one person.",
        },
      },
    ],
    keyPoints: [
      { es: "Cumplimiento es el piso legal; la ética es la cultura que lo hace funcionar.", en: "Compliance is the legal floor; ethics is the culture that makes it work." },
      { es: "La empresa puede responder por sobornos de empleados o intermediarios; una política de integridad cuenta a su favor.", en: "The company may be liable for bribes by employees or intermediaries; an integrity policy counts in its favor." },
      { es: "Un programa eficaz: tono desde arriba, riesgos, políticas, capacitación, denuncia, monitoreo y mejora.", en: "An effective program: tone at the top, risks, policies, training, hotline, monitoring and improvement." },
      { es: "Tres líneas: operación es dueña del riesgo, cumplimiento vigila, auditoría interna opina con independencia.", en: "Three lines: operations own the risk, compliance monitors, internal audit opines independently." },
      { es: "Riesgo inherente = probabilidad × impacto; prioriza por riesgo residual.", en: "Inherent risk = likelihood × impact; prioritize by residual risk." },
    ],
    normativeNote: NOTE_COMPLIANCE,
    exerciseIds: ['DER-17-E1', 'DER-17-E2', 'DER-17-E3', 'DER-17-E4', 'DER-17-E5', 'DER-17-E6'],
  },
]

export const exercises: Exercise[] = [
  // ═════════════════════════════ DER-13 ═════════════════════════════
  {
    id: 'DER-13-E1',
    level: 2,
    module: 'DER-13',
    kind: 'mcq',
    flavor: 'concept',
    prompt: {
      es: "¿Cuál es la razón principal por la que un banco está más regulado que una fábrica de muebles?",
      en: "What is the main reason a bank is more heavily regulated than a furniture factory?",
    },
    options: [
      { id: 'DER-13-E1-a', text: { es: "Porque los bancos pagan más impuestos que otras empresas.", en: "Because banks pay more taxes than other companies." } },
      { id: 'DER-13-E1-b', text: { es: "Porque opera con dinero del público y su quiebra puede contagiar a otras entidades.", en: "Because it operates with the public's money and its failure can spread to other entities." } },
      { id: 'DER-13-E1-c', text: { es: "Porque el gobierno es dueño de todos los bancos en México.", en: "Because the government owns all banks in Mexico." } },
      { id: 'DER-13-E1-d', text: { es: "Porque los bancos no pueden tener accionistas privados.", en: "Because banks cannot have private shareholders." } },
    ],
    correctOptionId: 'DER-13-E1-b',
    explanation: {
      es: "Correcta la b: el banco capta ahorro del público y su caída genera riesgo sistémico, por eso se exigen autorización, capital y supervisión. Error común: pensar que la regulación es por impuestos o por propiedad estatal; en México la mayoría de los bancos son privados.",
      en: "Option b is correct: the bank takes public savings and its failure creates systemic risk, hence licensing, capital and supervision. Common mistake: thinking regulation is about taxes or state ownership; in Mexico most banks are private.",
    },
    difficulty: 1,
    points: 10,
    competency: 'financial-regulation',
  },
  {
    id: 'DER-13-E2',
    level: 2,
    module: 'DER-13',
    kind: 'classify',
    flavor: 'concept',
    prompt: {
      es: "Relaciona cada entidad con la autoridad que la supervisa principalmente.",
      en: "Match each entity with the authority that mainly supervises it.",
    },
    categories: [
      { id: 'DER-13-E2-c1', label: { es: "CNBV", en: "CNBV" } },
      { id: 'DER-13-E2-c2', label: { es: "CNSF", en: "CNSF" } },
      { id: 'DER-13-E2-c3', label: { es: "CONSAR", en: "CONSAR" } },
    ],
    items: [
      { id: 'DER-13-E2-i1', label: { es: "Un banco múltiple", en: "A commercial bank" }, correctCategoryId: 'DER-13-E2-c1' },
      { id: 'DER-13-E2-i2', label: { es: "Una aseguradora de autos", en: "A car insurer" }, correctCategoryId: 'DER-13-E2-c2' },
      { id: 'DER-13-E2-i3', label: { es: "Una afore", en: "A pension fund manager (afore)" }, correctCategoryId: 'DER-13-E2-c3' },
      { id: 'DER-13-E2-i4', label: { es: "Una institución de fondos de pago electrónico", en: "An electronic payment funds institution" }, correctCategoryId: 'DER-13-E2-c1' },
      { id: 'DER-13-E2-i5', label: { es: "Una afianzadora", en: "A surety company" }, correctCategoryId: 'DER-13-E2-c2' },
      { id: 'DER-13-E2-i6', label: { es: "Una casa de bolsa", en: "A brokerage firm" }, correctCategoryId: 'DER-13-E2-c1' },
    ],
    explanation: {
      es: "La CNBV supervisa bancos, casas de bolsa y fintech; la CNSF, seguros y fianzas; la CONSAR, las afores. Error común: creer que las fintech no tienen supervisor o que las fianzas van con la CNBV.",
      en: "CNBV supervises banks, brokerages and fintechs; CNSF, insurance and surety; CONSAR, afores. Common mistake: believing fintechs have no supervisor or that surety goes to CNBV.",
    },
    difficulty: 2,
    points: 15,
    competency: 'financial-regulation',
  },
  {
    id: 'DER-13-E3',
    level: 2,
    module: 'DER-13',
    kind: 'truefalse',
    flavor: 'concept',
    prompt: {
      es: "El seguro del IPAB protege el dinero que tienes en un fondo de inversión o en acciones compradas a través de tu banco.",
      en: "IPAB insurance protects the money you hold in an investment fund or in stocks bought through your bank.",
    },
    answer: false,
    explanation: {
      es: "Falso: el IPAB protege depósitos bancarios (cheques, ahorro, plazo) hasta 400,000 UDIs por persona y banco; las inversiones en valores o fondos asumen su propio riesgo de mercado. Error común: suponer que todo lo que contratas en un banco está garantizado.",
      en: "False: IPAB protects bank deposits (checking, savings, time) up to 400,000 UDIs per person per bank; investments in securities or funds bear their own market risk. Common mistake: assuming everything you buy at a bank is guaranteed.",
    },
    difficulty: 1,
    points: 10,
    competency: 'financial-regulation',
  },
  {
    id: 'DER-13-E4',
    level: 2,
    module: 'DER-13',
    kind: 'formula',
    flavor: 'concept',
    prompt: {
      es: "Completa la fórmula del índice de capitalización de un banco.",
      en: "Complete the formula for a bank's capital adequacy ratio.",
    },
    template: 'ICAP = {{b1}} ÷ {{b2}} × 100',
    blanks: [
      {
        id: 'b1',
        options: [
          { id: 'DER-13-E4-b1-a', text: { es: "Depósitos del público", en: "Public deposits" } },
          { id: 'DER-13-E4-b1-b', text: { es: "Capital neto", en: "Net capital" } },
          { id: 'DER-13-E4-b1-c', text: { es: "Utilidad neta", en: "Net income" } },
        ],
        correctOptionId: 'DER-13-E4-b1-b',
      },
      {
        id: 'b2',
        options: [
          { id: 'DER-13-E4-b2-a', text: { es: "Activos ponderados por riesgo", en: "Risk-weighted assets" } },
          { id: 'DER-13-E4-b2-b', text: { es: "Activos totales sin ponderar", en: "Total unweighted assets" } },
          { id: 'DER-13-E4-b2-c', text: { es: "Pasivo total", en: "Total liabilities" } },
        ],
        correctOptionId: 'DER-13-E4-b2-a',
      },
    ],
    explanation: {
      es: "El ICAP divide el capital neto (el colchón propio) entre los activos ponderados por riesgo, que suman riesgo de crédito, mercado y operacional. Error común: usar activos totales sin ponderar; así un bono del gobierno pesaría igual que un crédito riesgoso.",
      en: "ICAP divides net capital (the own cushion) by risk-weighted assets, which add credit, market and operational risk. Common mistake: using unweighted total assets; then a government bond would weigh the same as a risky loan.",
    },
    difficulty: 2,
    points: 15,
    competency: 'financial-regulation',
  },
  {
    id: 'DER-13-E5',
    level: 2,
    module: 'DER-13',
    kind: 'fields',
    flavor: 'case',
    context: {
      es: "Banco hipotético Altiplano: capital neto $1,440 millones. Activos ponderados por riesgo: crédito $9,000 millones, mercado $1,500 millones, operacional $1,500 millones. Usa un mínimo ilustrativo de 10.5%.",
      en: "Hypothetical Altiplano Bank: net capital $1,440 million. Risk-weighted assets: credit $9,000 million, market $1,500 million, operational $1,500 million. Use an illustrative minimum of 10.5%.",
    },
    prompt: {
      es: "Calcula los APR totales, el ICAP y el capital excedente sobre el mínimo del Banco Altiplano.",
      en: "Compute Altiplano Bank's total RWA, ICAP and capital surplus over the minimum.",
    },
    fields: [
      { id: 'f1', label: { es: "APR totales (millones de pesos)", en: "Total RWA (millions of pesos)" }, answer: 12000, unit: 'MXN', tolerance: { abs: 0.5 } },
      { id: 'f2', label: { es: "ICAP (%)", en: "ICAP (%)" }, answer: 12, unit: '%', tolerance: { abs: 0.01 } },
      { id: 'f3', label: { es: "Capital excedente sobre el mínimo (millones de pesos)", en: "Capital surplus over the minimum (millions of pesos)" }, answer: 180, unit: 'MXN', tolerance: { abs: 0.5 } },
    ],
    explanation: {
      es: "APR = 9,000 + 1,500 + 1,500 = 12,000. ICAP = 1,440 ÷ 12,000 × 100 = 12%. Mínimo = 12,000 × 10.5% = 1,260; excedente = 1,440 − 1,260 = 180. Error común: calcular el ICAP solo con el riesgo de crédito (1,440 ÷ 9,000 = 16%), lo que sobreestima la solvencia.",
      en: "RWA = 9,000 + 1,500 + 1,500 = 12,000. ICAP = 1,440 ÷ 12,000 × 100 = 12%. Minimum = 12,000 × 10.5% = 1,260; surplus = 1,440 − 1,260 = 180. Common mistake: computing ICAP with credit risk only (1,440 ÷ 9,000 = 16%), which overstates solvency.",
    },
    difficulty: 2,
    points: 20,
    competency: 'financial-regulation',
  },
  {
    id: 'DER-13-E6',
    level: 2,
    module: 'DER-13',
    kind: 'numeric',
    flavor: 'case',
    context: {
      es: "Ramiro tiene $2,500,000 en cuenta de cheques y $1,500,000 en cuenta de ahorro en el Banco A, y $3,000,000 en un depósito a plazo en el Banco B. Valor hipotético de la UDI: $8.00. Tope del IPAB: 400,000 UDIs por persona y por banco.",
      en: "Ramiro has $2,500,000 in checking and $1,500,000 in savings at Bank A, and $3,000,000 in a time deposit at Bank B. Hypothetical UDI value: $8.00. IPAB cap: 400,000 UDIs per person per bank.",
    },
    prompt: {
      es: "¿Cuántos pesos de Ramiro, en total, quedan protegidos por el IPAB en ambos bancos?",
      en: "How many of Ramiro's pesos, in total, are protected by IPAB across both banks?",
    },
    answer: 6200000,
    unit: 'MXN',
    decimals: 0,
    tolerance: { abs: 1 },
    explanation: {
      es: "Tope por banco = 400,000 × 8 = $3,200,000. Banco A: 2,500,000 + 1,500,000 = 4,000,000 → protegido 3,200,000. Banco B: 3,000,000 → protegido completo. Total = 6,200,000 (quedan 800,000 sin cobertura). Error común: aplicar el tope por cuenta y no por banco, o aplicar un solo tope a la suma de ambos bancos.",
      en: "Cap per bank = 400,000 × 8 = $3,200,000. Bank A: 2,500,000 + 1,500,000 = 4,000,000 → protected 3,200,000. Bank B: 3,000,000 → fully protected. Total = 6,200,000 (800,000 uncovered). Common mistake: applying the cap per account instead of per bank, or a single cap to the sum of both banks.",
    },
    difficulty: 3,
    points: 20,
    competency: 'financial-regulation',
  },

  // ═════════════════════════════ DER-14 ═════════════════════════════
  {
    id: 'DER-14-E1',
    level: 2,
    module: 'DER-14',
    kind: 'mcq',
    flavor: 'concept',
    prompt: {
      es: "¿Qué describe mejor el \"problema de agencia\" en una empresa?",
      en: "What best describes the \"agency problem\" in a company?",
    },
    options: [
      { id: 'DER-14-E1-a', text: { es: "Que la empresa contrate una agencia de publicidad cara.", en: "That the company hires an expensive advertising agency." } },
      { id: 'DER-14-E1-b', text: { es: "Que los directivos puedan actuar en su propio interés y no en el de los accionistas.", en: "That managers may act in their own interest rather than the shareholders'." } },
      { id: 'DER-14-E1-c', text: { es: "Que la empresa no tenga suficientes agentes de ventas.", en: "That the company lacks enough sales agents." } },
      { id: 'DER-14-E1-d', text: { es: "Que los accionistas no puedan vender sus acciones.", en: "That shareholders cannot sell their shares." } },
    ],
    correctOptionId: 'DER-14-E1-b',
    explanation: {
      es: "Correcta la b: el agente (directivo) actúa por cuenta del principal (accionistas) y sus intereses pueden chocar. Error común: tomar \"agencia\" en sentido comercial (agencias o agentes de ventas) y no como relación de representación.",
      en: "Option b is correct: the agent (manager) acts on behalf of the principal (shareholders) and their interests may clash. Common mistake: reading \"agency\" in a commercial sense (agencies or sales agents) rather than as a relationship of representation.",
    },
    difficulty: 1,
    points: 10,
    competency: 'corporate-governance',
  },
  {
    id: 'DER-14-E2',
    level: 2,
    module: 'DER-14',
    kind: 'classify',
    flavor: 'concept',
    prompt: {
      es: "Asigna cada decisión al órgano de gobierno que normalmente la toma.",
      en: "Assign each decision to the governance body that normally makes it.",
    },
    categories: [
      { id: 'DER-14-E2-c1', label: { es: "Asamblea de accionistas", en: "Shareholders' meeting" } },
      { id: 'DER-14-E2-c2', label: { es: "Consejo de administración", en: "Board of directors" } },
      { id: 'DER-14-E2-c3', label: { es: "Dirección general", en: "CEO / management" } },
    ],
    items: [
      { id: 'DER-14-E2-i1', label: { es: "Nombrar a los consejeros", en: "Appoint the directors" }, correctCategoryId: 'DER-14-E2-c1' },
      { id: 'DER-14-E2-i2', label: { es: "Aprobar el plan estratégico a cinco años", en: "Approve the five-year strategic plan" }, correctCategoryId: 'DER-14-E2-c2' },
      { id: 'DER-14-E2-i3', label: { es: "Decidir el turno de producción de la próxima semana", en: "Decide next week's production shift" }, correctCategoryId: 'DER-14-E2-c3' },
      { id: 'DER-14-E2-i4', label: { es: "Decretar el pago de dividendos", en: "Declare dividend payments" }, correctCategoryId: 'DER-14-E2-c1' },
      { id: 'DER-14-E2-i5', label: { es: "Nombrar y evaluar al director general", en: "Appoint and evaluate the CEO" }, correctCategoryId: 'DER-14-E2-c2' },
      { id: 'DER-14-E2-i6', label: { es: "Contratar a un nuevo vendedor de mostrador", en: "Hire a new counter salesperson" }, correctCategoryId: 'DER-14-E2-c3' },
    ],
    explanation: {
      es: "La asamblea decide lo esencial (nombrar consejo, dividendos), el consejo define estrategia y vigila al director, y la dirección ejecuta la operación diaria. Error común: pensar que el director general aprueba la estrategia o que el consejo contrata personal operativo.",
      en: "The shareholders' meeting decides essentials (appointing the board, dividends), the board sets strategy and oversees the CEO, and management runs daily operations. Common mistake: thinking the CEO approves the strategy or the board hires operating staff.",
    },
    difficulty: 2,
    points: 15,
    competency: 'corporate-governance',
  },
  {
    id: 'DER-14-E3',
    level: 2,
    module: 'DER-14',
    kind: 'numeric',
    flavor: 'case',
    context: {
      es: "Una sociedad anónima bursátil (SAB) tendrá un consejo de administración de 15 miembros. La regla aplicable exige al menos 25% de consejeros independientes.",
      en: "A listed company (SAB) will have a 15-member board of directors. The applicable rule requires at least 25% independent directors.",
    },
    prompt: {
      es: "¿Cuántos consejeros independientes necesita como mínimo ese consejo de 15 miembros?",
      en: "What is the minimum number of independent directors that 15-member board needs?",
    },
    answer: 4,
    unit: 'units',
    decimals: 0,
    tolerance: { abs: 0 },
    explanation: {
      es: "15 × 25% = 3.75; como no hay consejeros fraccionarios y 3 no alcanza el 25% (3 ÷ 15 = 20%), se redondea hacia arriba a 4. Error común: redondear hacia abajo a 3 o al entero más cercano.",
      en: "15 × 25% = 3.75; since there are no fractional directors and 3 falls short of 25% (3 ÷ 15 = 20%), round up to 4. Common mistake: rounding down to 3 or to the nearest integer.",
    },
    difficulty: 2,
    points: 15,
    competency: 'corporate-governance',
  },
  {
    id: 'DER-14-E4',
    level: 2,
    module: 'DER-14',
    kind: 'multi',
    flavor: 'concept',
    prompt: {
      es: "Selecciona las prácticas correctas para aprobar una operación con una parte relacionada.",
      en: "Select the correct practices for approving a related-party transaction.",
    },
    options: [
      { id: 'DER-14-E4-a', text: { es: "Que el consejero interesado revele su conflicto y no vote.", en: "The interested director discloses the conflict and does not vote." } },
      { id: 'DER-14-E4-b', text: { es: "Comparar el precio con el valor de mercado.", en: "Compare the price with market value." } },
      { id: 'DER-14-E4-c', text: { es: "Mantener la operación en secreto para no inquietar a los inversionistas.", en: "Keep the transaction secret so as not to worry investors." } },
      { id: 'DER-14-E4-d', text: { es: "Que la revise un comité integrado por consejeros independientes.", en: "Have it reviewed by a committee of independent directors." } },
      { id: 'DER-14-E4-e', text: { es: "Aprobarla automáticamente si la propone el accionista de control.", en: "Approve it automatically if the controlling shareholder proposes it." } },
    ],
    correctOptionIds: ['DER-14-E4-a', 'DER-14-E4-b', 'DER-14-E4-d'],
    explanation: {
      es: "Revelar, abstenerse, comparar con mercado y la revisión independiente protegen a los minoritarios. Error común: creer que estas operaciones están prohibidas o, al revés, que el accionista de control puede aprobarlas solo; ocultarlas viola la transparencia.",
      en: "Disclosure, abstention, market comparison and independent review protect minority shareholders. Common mistake: believing these transactions are banned or, conversely, that the controlling shareholder can approve them alone; hiding them breaches transparency.",
    },
    difficulty: 2,
    points: 15,
    competency: 'corporate-governance',
  },
  {
    id: 'DER-14-E5',
    level: 2,
    module: 'DER-14',
    kind: 'mcq',
    flavor: 'case',
    context: {
      es: "Una consejera de una cadena de farmacias se entera en sesión de que la empresa negocia comprar un terreno. Antes de que se cierre el trato, ella lo compra por su cuenta para revenderlo después a la empresa con ganancia.",
      en: "A director of a pharmacy chain learns in a board meeting that the company is negotiating to buy a plot of land. Before the deal closes, she buys it herself to resell it later to the company at a profit.",
    },
    prompt: {
      es: "¿Qué deber incumple principalmente la consejera que compró el terreno antes que la empresa?",
      en: "Which duty does the director who bought the land ahead of the company mainly breach?",
    },
    options: [
      { id: 'DER-14-E5-a', text: { es: "El deber de diligencia, porque no leyó los reportes.", en: "The duty of care, because she did not read the reports." } },
      { id: 'DER-14-E5-b', text: { es: "El deber de lealtad, porque usó información de la empresa y le quitó un negocio en su beneficio.", en: "The duty of loyalty, because she used company information and took a business opportunity for her own benefit." } },
      { id: 'DER-14-E5-c', text: { es: "Ninguno, porque compró con su propio dinero.", en: "None, because she bought with her own money." } },
      { id: 'DER-14-E5-d', text: { es: "El deber de confidencialidad laboral de la Ley Federal del Trabajo.", en: "The labor confidentiality duty under the Federal Labor Law." } },
    ],
    correctOptionId: 'DER-14-E5-b',
    explanation: {
      es: "Correcta la b: aprovechar información privilegiada y una oportunidad de negocio de la sociedad viola el deber de lealtad. Error común: confundirlo con diligencia (que es decidir informado y con cuidado) o creer que usar dinero propio lo vuelve válido.",
      en: "Option b is correct: exploiting inside information and a company business opportunity breaches the duty of loyalty. Common mistake: confusing it with care (deciding informed and carefully) or believing using her own money makes it valid.",
    },
    difficulty: 2,
    points: 15,
    competency: 'corporate-governance',
  },
  {
    id: 'DER-14-E6',
    level: 2,
    module: 'DER-14',
    kind: 'truefalse',
    flavor: 'concept',
    prompt: {
      es: "Un proveedor que vende a la empresa una parte importante de sus insumos puede considerarse consejero independiente de esa misma empresa.",
      en: "A supplier that sells the company a significant share of its inputs can be considered an independent director of that same company.",
    },
    answer: false,
    explanation: {
      es: "Falso: la independencia exige no tener vínculos económicos o personales que resten objetividad, y un proveedor importante depende del negocio con la empresa. Error común: pensar que basta con no ser empleado ni accionista.",
      en: "False: independence requires having no economic or personal ties that reduce objectivity, and a major supplier depends on business with the company. Common mistake: thinking it is enough not to be an employee or shareholder.",
    },
    difficulty: 1,
    points: 10,
    competency: 'corporate-governance',
  },

  // ═════════════════════════════ DER-15 ═════════════════════════════
  {
    id: 'DER-15-E1',
    level: 2,
    module: 'DER-15',
    kind: 'classify',
    flavor: 'concept',
    prompt: {
      es: "Clasifica cada acción según la etapa del lavado de dinero que representa.",
      en: "Classify each action by the money-laundering stage it represents.",
    },
    categories: [
      { id: 'DER-15-E1-c1', label: { es: "Colocación", en: "Placement" } },
      { id: 'DER-15-E1-c2', label: { es: "Estratificación", en: "Layering" } },
      { id: 'DER-15-E1-c3', label: { es: "Integración", en: "Integration" } },
    ],
    items: [
      { id: 'DER-15-E1-i1', label: { es: "Depositar efectivo de una extorsión en varias cuentas", en: "Depositing extortion cash into several accounts" }, correctCategoryId: 'DER-15-E1-c1' },
      { id: 'DER-15-E1-i2', label: { es: "Transferir el dinero entre empresas fachada de distintos países", en: "Transferring the money between shell companies in different countries" }, correctCategoryId: 'DER-15-E1-c2' },
      { id: 'DER-15-E1-i3', label: { es: "Cobrar \"dividendos\" de un hotel comprado con esos recursos", en: "Collecting \"dividends\" from a hotel bought with those funds" }, correctCategoryId: 'DER-15-E1-c3' },
      { id: 'DER-15-E1-i4', label: { es: "Comprar fichas en un casino con billetes y cambiarlas por un cheque", en: "Buying casino chips with cash and exchanging them for a check" }, correctCategoryId: 'DER-15-E1-c1' },
      { id: 'DER-15-E1-i5', label: { es: "Simular préstamos entre empresas para justificar movimientos", en: "Faking loans between companies to justify movements" }, correctCategoryId: 'DER-15-E1-c2' },
      { id: 'DER-15-E1-i6', label: { es: "Vender un departamento y presentar la ganancia como ingreso legal", en: "Selling an apartment and presenting the gain as legal income" }, correctCategoryId: 'DER-15-E1-c3' },
    ],
    explanation: {
      es: "Colocación mete el efectivo al sistema; estratificación mueve y disfraza el rastro; integración devuelve el dinero como ganancia aparente. Error común: confundir la compra de fichas (primer contacto del efectivo con el sistema) con integración.",
      en: "Placement puts cash into the system; layering moves and disguises the trail; integration returns the money as apparent income. Common mistake: confusing buying chips (the cash's first contact with the system) with integration.",
    },
    difficulty: 2,
    points: 15,
    competency: 'aml-compliance',
  },
  {
    id: 'DER-15-E2',
    level: 2,
    module: 'DER-15',
    kind: 'mcq',
    flavor: 'concept',
    prompt: {
      es: "¿Qué es el \"beneficiario controlador\" en materia de PLD?",
      en: "What is the \"beneficial owner\" in AML terms?",
    },
    options: [
      { id: 'DER-15-E2-a', text: { es: "La persona física que en última instancia controla o se beneficia de una cuenta o empresa.", en: "The individual who ultimately controls or benefits from an account or company." } },
      { id: 'DER-15-E2-b', text: { es: "El empleado del banco que autoriza la apertura de la cuenta.", en: "The bank employee who authorizes opening the account." } },
      { id: 'DER-15-E2-c', text: { es: "La persona que aparece como apoderado legal en el acta constitutiva.", en: "The person listed as legal representative in the articles of incorporation." } },
      { id: 'DER-15-E2-d', text: { es: "El beneficiario designado en un seguro de vida.", en: "The beneficiary named in a life insurance policy." } },
    ],
    correctOptionId: 'DER-15-E2-a',
    explanation: {
      es: "Correcta la a: se busca a la persona real detrás de la estructura, aunque no firme ni aparezca como apoderado. Error común: quedarse con el apoderado o con el nombre en papeles, que puede ser un prestanombres.",
      en: "Option a is correct: the goal is the real person behind the structure, even if they do not sign or appear as representative. Common mistake: stopping at the representative or the name on paper, who may be a front person.",
    },
    difficulty: 1,
    points: 10,
    competency: 'aml-compliance',
  },
  {
    id: 'DER-15-E3',
    level: 2,
    module: 'DER-15',
    kind: 'multi',
    flavor: 'interpret',
    prompt: {
      es: "¿Cuáles de estas situaciones son señales de alerta de posible lavado de dinero?",
      en: "Which of these situations are red flags of possible money laundering?",
    },
    options: [
      { id: 'DER-15-E3-a', text: { es: "Un cliente hace varios depósitos en efectivo justo por debajo del umbral de alerta.", en: "A customer makes several cash deposits just below the alert threshold." } },
      { id: 'DER-15-E3-b', text: { es: "Una empleada recibe su nómina quincenal por transferencia de su patrón.", en: "An employee receives her biweekly payroll by transfer from her employer." } },
      { id: 'DER-15-E3-c', text: { es: "Una empresa sin empleados mueve millones al mes hacia el extranjero.", en: "A company with no employees moves millions a month abroad." } },
      { id: 'DER-15-E3-d', text: { es: "Un comprador quiere pagar una casa en efectivo y pide que se escriture a nombre de un tercero.", en: "A buyer wants to pay cash for a house and asks for the deed in a third party's name." } },
      { id: 'DER-15-E3-e', text: { es: "Un jubilado retira de su cuenta de ahorro una cantidad similar cada mes.", en: "A retiree withdraws a similar amount from his savings account each month." } },
    ],
    correctOptionIds: ['DER-15-E3-a', 'DER-15-E3-c', 'DER-15-E3-d'],
    explanation: {
      es: "Fraccionar depósitos, empresas fachada con grandes flujos y efectivo con prestanombres son señales típicas. La nómina y los retiros regulares cuadran con el perfil. Error común: ver como sospechoso todo movimiento frecuente; lo que importa es que no cuadre con el perfil.",
      en: "Splitting deposits, shell companies with large flows and cash with front persons are typical red flags. Payroll and regular withdrawals match the profile. Common mistake: treating every frequent movement as suspicious; what matters is a mismatch with the profile.",
    },
    difficulty: 2,
    points: 15,
    competency: 'aml-compliance',
  },
  {
    id: 'DER-15-E4',
    level: 2,
    module: 'DER-15',
    kind: 'truefalse',
    flavor: 'concept',
    prompt: {
      es: "Si un ejecutivo de banco envía un reporte de operación inusual sobre un cliente, debe avisarle al cliente para darle oportunidad de explicarse.",
      en: "If a bank officer files an unusual transaction report on a customer, he must tell the customer so they can explain themselves.",
    },
    answer: false,
    explanation: {
      es: "Falso: los reportes a la UIF son confidenciales y avisar al cliente (tipping-off) está prohibido, porque le permitiría ocultar o mover los recursos. Error común: confundir la confidencialidad del reporte con falta de transparencia hacia el cliente; el banco sí puede pedirle documentos como parte de su debida diligencia sin revelar el reporte.",
      en: "False: reports to the UIF are confidential and tipping off the customer is prohibited, because it would let them hide or move the funds. Common mistake: confusing report confidentiality with lack of transparency; the bank may still request documents as part of due diligence without revealing the report.",
    },
    difficulty: 1,
    points: 10,
    competency: 'aml-compliance',
  },
  {
    id: 'DER-15-E5',
    level: 2,
    module: 'DER-15',
    kind: 'numeric',
    flavor: 'case',
    context: {
      es: "Un banco tiene un umbral interno hipotético de alerta de $50,000 por depósito en efectivo. Un cliente con ingreso declarado de $20,000 mensuales deposita en cuatro días, en sucursales distintas: $48,000, $49,500, $47,800 y $49,900.",
      en: "A bank has a hypothetical internal alert threshold of $50,000 per cash deposit. A customer with declared income of $20,000 a month deposits over four days, at different branches: $48,000, $49,500, $47,800 and $49,900.",
    },
    prompt: {
      es: "¿Por cuánto dinero en total analizará el oficial de cumplimiento este posible fraccionamiento?",
      en: "For what total amount will the compliance officer analyze this possible structuring?",
    },
    answer: 195200,
    unit: 'MXN',
    decimals: 0,
    tolerance: { abs: 1 },
    explanation: {
      es: "48,000 + 49,500 + 47,800 + 49,900 = 195,200, casi 10 veces el ingreso mensual declarado. Cada depósito queda bajo el umbral, pero el patrón conjunto es la señal. Error común: revisar cada depósito por separado y concluir que ninguno amerita análisis.",
      en: "48,000 + 49,500 + 47,800 + 49,900 = 195,200, almost 10 times declared monthly income. Each deposit is under the threshold, but the combined pattern is the red flag. Common mistake: reviewing each deposit separately and concluding none warrants analysis.",
    },
    difficulty: 1,
    points: 10,
    competency: 'aml-compliance',
  },
  {
    id: 'DER-15-E6',
    level: 2,
    module: 'DER-15',
    kind: 'fields',
    flavor: 'case',
    context: {
      es: "Una casa de bolsa usa un modelo interno hipotético: cliente, producto, canal y geografía valen de 1 a 3 cada uno; ser PEP suma 3 puntos; 10 o más es alto riesgo. Nueva clienta: dueña de una joyería (cliente 3), quiere invertir con transferencias internacionales (producto 2), contrata en línea (canal 2), reside en una ciudad de riesgo medio (geografía 2) y es esposa de un gobernador en funciones.",
      en: "A brokerage uses a hypothetical internal model: customer, product, channel and geography score 1 to 3 each; being a PEP adds 3 points; 10 or more is high risk. New client: jewelry store owner (customer 3), wants to invest via international transfers (product 2), signs up online (channel 2), lives in a medium-risk city (geography 2) and is the wife of a sitting governor.",
    },
    prompt: {
      es: "Calcula el puntaje de la clienta joyera sin el factor PEP y con él.",
      en: "Compute the jeweler client's score without and with the PEP factor.",
    },
    fields: [
      { id: 'f1', label: { es: "Puntaje sin PEP", en: "Score without PEP" }, answer: 9, unit: 'none', tolerance: { abs: 0 } },
      { id: 'f2', label: { es: "Puntaje total con PEP", en: "Total score with PEP" }, answer: 12, unit: 'none', tolerance: { abs: 0 } },
    ],
    explanation: {
      es: "Sin PEP: 3 + 2 + 2 + 2 = 9 (riesgo medio en este modelo). Como cónyuge de un gobernador es PEP: 9 + 3 = 12 ≥ 10, alto riesgo, lo que exige debida diligencia reforzada y aprobación de un directivo. Error común: no considerar PEP a los familiares cercanos del funcionario.",
      en: "Without PEP: 3 + 2 + 2 + 2 = 9 (medium risk in this model). As a governor's spouse she is a PEP: 9 + 3 = 12 ≥ 10, high risk, requiring enhanced due diligence and senior approval. Common mistake: not treating the official's close relatives as PEPs.",
    },
    difficulty: 3,
    points: 20,
    competency: 'aml-compliance',
  },

  // ═════════════════════════════ DER-16 ═════════════════════════════
  {
    id: 'DER-16-E1',
    level: 2,
    module: 'DER-16',
    kind: 'classify',
    flavor: 'concept',
    prompt: {
      es: "Clasifica cada dato como dato personal común o dato personal sensible.",
      en: "Classify each item as ordinary personal data or sensitive personal data.",
    },
    categories: [
      { id: 'DER-16-E1-c1', label: { es: "Dato personal común", en: "Ordinary personal data" } },
      { id: 'DER-16-E1-c2', label: { es: "Dato personal sensible", en: "Sensitive personal data" } },
    ],
    items: [
      { id: 'DER-16-E1-i1', label: { es: "Correo electrónico de trabajo", en: "Work email address" }, correctCategoryId: 'DER-16-E1-c1' },
      { id: 'DER-16-E1-i2', label: { es: "Diagnóstico de diabetes", en: "Diabetes diagnosis" }, correctCategoryId: 'DER-16-E1-c2' },
      { id: 'DER-16-E1-i3', label: { es: "Afiliación a un partido político", en: "Political party membership" }, correctCategoryId: 'DER-16-E1-c2' },
      { id: 'DER-16-E1-i4', label: { es: "Domicilio particular", en: "Home address" }, correctCategoryId: 'DER-16-E1-c1' },
      { id: 'DER-16-E1-i5', label: { es: "Creencias religiosas", en: "Religious beliefs" }, correctCategoryId: 'DER-16-E1-c2' },
      { id: 'DER-16-E1-i6', label: { es: "Número de teléfono celular", en: "Mobile phone number" }, correctCategoryId: 'DER-16-E1-c1' },
    ],
    explanation: {
      es: "Salud, opiniones políticas y religión pueden causar discriminación si se usan mal: son sensibles. Correo, domicilio y teléfono identifican, pero son datos comunes. Error común: creer que \"sensible\" es todo lo privado o valioso, como el domicilio.",
      en: "Health, political opinions and religion can cause discrimination if misused: they are sensitive. Email, address and phone identify a person but are ordinary data. Common mistake: thinking \"sensitive\" means anything private or valuable, like an address.",
    },
    difficulty: 1,
    points: 10,
    competency: 'data-protection',
  },
  {
    id: 'DER-16-E2',
    level: 2,
    module: 'DER-16',
    kind: 'mcq',
    flavor: 'case',
    context: {
      es: "Una tienda departamental contrata a una empresa de centro de llamadas para cobrar a sus clientes con crédito. La tienda decide qué datos se usan y para qué; el centro de llamadas solo sigue sus instrucciones.",
      en: "A department store hires a call-center company to collect from its credit customers. The store decides what data is used and why; the call center only follows its instructions.",
    },
    prompt: {
      es: "En ese esquema de cobranza, ¿qué papel tiene el centro de llamadas frente a los datos de los clientes?",
      en: "In that collection setup, what role does the call center play regarding the customers' data?",
    },
    options: [
      { id: 'DER-16-E2-a', text: { es: "Titular", en: "Data subject" } },
      { id: 'DER-16-E2-b', text: { es: "Responsable", en: "Controller" } },
      { id: 'DER-16-E2-c', text: { es: "Encargado", en: "Processor" } },
      { id: 'DER-16-E2-d', text: { es: "Autoridad garante", en: "Supervisory authority" } },
    ],
    correctOptionId: 'DER-16-E2-c',
    explanation: {
      es: "Correcta la c: el encargado trata los datos por cuenta del responsable (la tienda), que es quien decide fines y medios. Error común: llamarlo responsable solo porque tiene acceso a los datos; si empezara a usarlos para fines propios, pasaría a ser responsable y violaría el contrato.",
      en: "Option c is correct: the processor handles data on behalf of the controller (the store), which decides purposes and means. Common mistake: calling it the controller just because it has access; if it began using the data for its own purposes it would become a controller and breach the contract.",
    },
    difficulty: 2,
    points: 15,
    competency: 'data-protection',
  },
  {
    id: 'DER-16-E3',
    level: 2,
    module: 'DER-16',
    kind: 'formula',
    flavor: 'concept',
    prompt: {
      es: "Completa el significado de cada letra de los derechos ARCO.",
      en: "Complete the meaning of each letter of the ARCO rights.",
    },
    template: 'A = {{b1}} · R = {{b2}} · C = {{b3}} · O = {{b4}}',
    blanks: [
      {
        id: 'b1',
        options: [
          { id: 'DER-16-E3-b1-a', text: { es: "Acceso", en: "Access" } },
          { id: 'DER-16-E3-b1-b', text: { es: "Autorización", en: "Authorization" } },
          { id: 'DER-16-E3-b1-c', text: { es: "Auditoría", en: "Audit" } },
        ],
        correctOptionId: 'DER-16-E3-b1-a',
      },
      {
        id: 'b2',
        options: [
          { id: 'DER-16-E3-b2-a', text: { es: "Reembolso", en: "Refund" } },
          { id: 'DER-16-E3-b2-b', text: { es: "Rectificación", en: "Rectification" } },
          { id: 'DER-16-E3-b2-c', text: { es: "Registro", en: "Registration" } },
        ],
        correctOptionId: 'DER-16-E3-b2-b',
      },
      {
        id: 'b3',
        options: [
          { id: 'DER-16-E3-b3-a', text: { es: "Consentimiento", en: "Consent" } },
          { id: 'DER-16-E3-b3-b', text: { es: "Copia", en: "Copy" } },
          { id: 'DER-16-E3-b3-c', text: { es: "Cancelación", en: "Cancellation" } },
        ],
        correctOptionId: 'DER-16-E3-b3-c',
      },
      {
        id: 'b4',
        options: [
          { id: 'DER-16-E3-b4-a', text: { es: "Oposición", en: "Objection" } },
          { id: 'DER-16-E3-b4-b', text: { es: "Olvido", en: "Erasure (forgetting)" } },
          { id: 'DER-16-E3-b4-c', text: { es: "Omisión", en: "Omission" } },
        ],
        correctOptionId: 'DER-16-E3-b4-a',
      },
    ],
    explanation: {
      es: "ARCO = Acceso, Rectificación, Cancelación y Oposición. Error común: poner \"Consentimiento\" en la C; el consentimiento es un principio del tratamiento, no uno de los cuatro derechos ARCO.",
      en: "ARCO = Access, Rectification, Cancellation and Objection. Common mistake: putting \"Consent\" for C; consent is a processing principle, not one of the four ARCO rights.",
    },
    difficulty: 1,
    points: 10,
    competency: 'data-protection',
  },
  {
    id: 'DER-16-E4',
    level: 2,
    module: 'DER-16',
    kind: 'truefalse',
    flavor: 'concept',
    prompt: {
      es: "Para tratar datos sensibles, como el historial médico de un empleado, basta con el consentimiento tácito: que no se oponga después de ver el aviso de privacidad.",
      en: "To process sensitive data, such as an employee's medical history, tacit consent is enough: that they do not object after seeing the privacy notice.",
    },
    answer: false,
    explanation: {
      es: "Falso: los datos sensibles requieren consentimiento expreso y por escrito (firma autógrafa o electrónica), salvo excepciones legales. Error común: aplicar a los sensibles la misma regla que a datos comunes, donde el consentimiento tácito puede bastar.",
      en: "False: sensitive data requires express written consent (handwritten or electronic signature), except for legal exceptions. Common mistake: applying to sensitive data the same rule as ordinary data, where tacit consent may suffice.",
    },
    difficulty: 1,
    points: 10,
    competency: 'data-protection',
  },
  {
    id: 'DER-16-E5',
    level: 2,
    module: 'DER-16',
    kind: 'multi',
    flavor: 'case',
    context: {
      es: "Una fintech de préstamos descubre que un atacante descargó nombres, teléfonos y estados de cuenta de miles de clientes desde un servidor sin contraseña.",
      en: "A lending fintech discovers that an attacker downloaded names, phones and account statements of thousands of customers from a server with no password.",
    },
    prompt: {
      es: "¿Qué acciones debe tomar la fintech de préstamos tras descubrir la descarga de datos?",
      en: "What actions should the lending fintech take after discovering the data download?",
    },
    options: [
      { id: 'DER-16-E5-a', text: { es: "Contener el incidente: cerrar el acceso y proteger el servidor.", en: "Contain the incident: close the access and secure the server." } },
      { id: 'DER-16-E5-b', text: { es: "Informar a los clientes afectados para que tomen medidas de protección.", en: "Inform the affected customers so they can take protective measures." } },
      { id: 'DER-16-E5-c', text: { es: "Borrar los registros del incidente para evitar responsabilidad.", en: "Delete the incident logs to avoid liability." } },
      { id: 'DER-16-E5-d', text: { es: "Analizar la causa y corregir las medidas de seguridad que fallaron.", en: "Analyze the cause and fix the security measures that failed." } },
      { id: 'DER-16-E5-e', text: { es: "Esperar a ver si los datos aparecen publicados antes de hacer algo.", en: "Wait to see whether the data gets published before doing anything." } },
    ],
    correctOptionIds: ['DER-16-E5-a', 'DER-16-E5-b', 'DER-16-E5-d'],
    explanation: {
      es: "Ante una vulneración significativa se contiene, se informa a los titulares y se corrige la causa (aquí, un servidor sin contraseña: falla de medida técnica). Error común: ocultar evidencia o esperar; eso agrava el daño a los clientes y la responsabilidad de la empresa.",
      en: "In a significant breach you contain, inform data subjects and fix the cause (here, a passwordless server: a technical-measure failure). Common mistake: hiding evidence or waiting; that worsens harm to customers and the company's liability.",
    },
    difficulty: 2,
    points: 15,
    competency: 'data-protection',
  },
  {
    id: 'DER-16-E6',
    level: 2,
    module: 'DER-16',
    kind: 'mcq',
    flavor: 'case',
    context: {
      es: "Una app de transporte pide, para abrir una cuenta de pasajero: nombre, celular, correo, método de pago, ubicación durante los viajes y el número de seguridad social del usuario.",
      en: "A ride-hailing app asks, to open a passenger account: name, mobile number, email, payment method, location during trips and the user's social security number.",
    },
    prompt: {
      es: "¿Qué principio incumple la app de transporte al pedir el número de seguridad social a sus pasajeros?",
      en: "Which principle does the ride-hailing app breach by asking passengers for their social security number?",
    },
    options: [
      { id: 'DER-16-E6-a', text: { es: "Calidad, porque el dato puede estar desactualizado.", en: "Quality, because the data may be outdated." } },
      { id: 'DER-16-E6-b', text: { es: "Proporcionalidad, porque pide un dato que no necesita para dar el servicio.", en: "Proportionality, because it asks for data it does not need to provide the service." } },
      { id: 'DER-16-E6-c', text: { es: "Ninguno, si lo menciona en su aviso de privacidad.", en: "None, if it mentions it in its privacy notice." } },
      { id: 'DER-16-E6-d', text: { es: "Lealtad, porque la ubicación es un dato sensible.", en: "Loyalty, because location is sensitive data." } },
    ],
    correctOptionId: 'DER-16-E6-b',
    explanation: {
      es: "Correcta la b: para trasladar a un pasajero no se necesita su número de seguridad social; pedirlo excede la finalidad. Error común: creer que mencionar un dato en el aviso de privacidad lo vuelve legítimo; el aviso informa, pero no justifica pedir datos innecesarios.",
      en: "Option b is correct: transporting a passenger does not require their social security number; asking for it exceeds the purpose. Common mistake: believing that listing data in the privacy notice makes it legitimate; the notice informs but does not justify collecting unnecessary data.",
    },
    difficulty: 2,
    points: 15,
    competency: 'data-protection',
  },

  // ═════════════════════════════ DER-17 ═════════════════════════════
  {
    id: 'DER-17-E1',
    level: 2,
    module: 'DER-17',
    kind: 'mcq',
    flavor: 'concept',
    prompt: {
      es: "¿Cuál es la diferencia principal entre cumplimiento regulatorio y ética empresarial?",
      en: "What is the main difference between regulatory compliance and business ethics?",
    },
    options: [
      { id: 'DER-17-E1-a', text: { es: "Son lo mismo con distinto nombre.", en: "They are the same thing under different names." } },
      { id: 'DER-17-E1-b', text: { es: "El cumplimiento solo aplica a bancos y la ética a las demás empresas.", en: "Compliance only applies to banks and ethics to all other companies." } },
      { id: 'DER-17-E1-c', text: { es: "El cumplimiento asegura respetar leyes y políticas; la ética busca hacer lo correcto aunque la ley no lo exija.", en: "Compliance ensures obeying laws and policies; ethics seeks to do the right thing even when the law does not require it." } },
      { id: 'DER-17-E1-d', text: { es: "La ética es obligatoria por ley y el cumplimiento es voluntario.", en: "Ethics is legally mandatory and compliance is voluntary." } },
    ],
    correctOptionId: 'DER-17-E1-c',
    explanation: {
      es: "Correcta la c: el cumplimiento es el piso legal y la ética es la cultura que va más allá y lo sostiene. Error común: pensar que el cumplimiento es solo para el sector financiero; toda empresa tiene obligaciones fiscales, laborales, de datos, anticorrupción y más.",
      en: "Option c is correct: compliance is the legal floor and ethics is the culture that goes beyond and sustains it. Common mistake: thinking compliance is only for the financial sector; every company has tax, labor, data, anti-corruption and other obligations.",
    },
    difficulty: 1,
    points: 10,
    competency: 'regulatory-compliance',
  },
  {
    id: 'DER-17-E2',
    level: 2,
    module: 'DER-17',
    kind: 'classify',
    flavor: 'concept',
    prompt: {
      es: "Ubica cada actividad en la línea que le corresponde según el modelo de las tres líneas.",
      en: "Place each activity in its line according to the three lines model.",
    },
    categories: [
      { id: 'DER-17-E2-c1', label: { es: "Primera línea (operación)", en: "First line (operations)" } },
      { id: 'DER-17-E2-c2', label: { es: "Segunda línea (cumplimiento y riesgos)", en: "Second line (compliance and risk)" } },
      { id: 'DER-17-E2-c3', label: { es: "Tercera línea (auditoría interna)", en: "Third line (internal audit)" } },
    ],
    items: [
      { id: 'DER-17-E2-i1', label: { es: "El gerente de compras pide tres cotizaciones antes de contratar", en: "The purchasing manager gets three quotes before contracting" }, correctCategoryId: 'DER-17-E2-c1' },
      { id: 'DER-17-E2-i2', label: { es: "Diseñar la política de regalos y conflictos de interés", en: "Design the gifts and conflicts-of-interest policy" }, correctCategoryId: 'DER-17-E2-c2' },
      { id: 'DER-17-E2-i3', label: { es: "Opinar ante el comité de auditoría si los controles funcionan", en: "Give the audit committee an opinion on whether controls work" }, correctCategoryId: 'DER-17-E2-c3' },
      { id: 'DER-17-E2-i4', label: { es: "Monitorear alertas de operaciones con terceros de alto riesgo", en: "Monitor alerts on transactions with high-risk third parties" }, correctCategoryId: 'DER-17-E2-c2' },
      { id: 'DER-17-E2-i5', label: { es: "Un vendedor registra los regalos que recibe de clientes", en: "A salesperson logs the gifts received from customers" }, correctCategoryId: 'DER-17-E2-c1' },
      { id: 'DER-17-E2-i6', label: { es: "Revisar con independencia una muestra de pagos a gestores", en: "Independently review a sample of payments to agents" }, correctCategoryId: 'DER-17-E2-c3' },
    ],
    explanation: {
      es: "La primera línea aplica controles en su trabajo diario, la segunda diseña reglas y vigila, y la tercera evalúa con independencia y reporta al consejo. Error común: poner a auditoría interna a diseñar políticas; eso le restaría independencia para luego evaluarlas.",
      en: "The first line applies controls in daily work, the second designs rules and monitors, and the third evaluates independently and reports to the board. Common mistake: having internal audit design policies; that would undermine its independence to later assess them.",
    },
    difficulty: 2,
    points: 15,
    competency: 'regulatory-compliance',
  },
  {
    id: 'DER-17-E3',
    level: 2,
    module: 'DER-17',
    kind: 'formula',
    flavor: 'concept',
    prompt: {
      es: "Completa la fórmula del riesgo residual en una matriz de riesgos de cumplimiento.",
      en: "Complete the residual risk formula in a compliance risk matrix.",
    },
    template: 'Riesgo residual = ({{b1}} × {{b2}}) × (1 − {{b3}})',
    blanks: [
      {
        id: 'b1',
        options: [
          { id: 'DER-17-E3-b1-a', text: { es: "Probabilidad", en: "Likelihood" } },
          { id: 'DER-17-E3-b1-b', text: { es: "Número de empleados", en: "Number of employees" } },
          { id: 'DER-17-E3-b1-c', text: { es: "Ventas anuales", en: "Annual sales" } },
        ],
        correctOptionId: 'DER-17-E3-b1-a',
      },
      {
        id: 'b2',
        options: [
          { id: 'DER-17-E3-b2-a', text: { es: "Costo del control", en: "Cost of the control" } },
          { id: 'DER-17-E3-b2-b', text: { es: "Impacto", en: "Impact" } },
          { id: 'DER-17-E3-b2-c', text: { es: "Antigüedad del riesgo", en: "Age of the risk" } },
        ],
        correctOptionId: 'DER-17-E3-b2-b',
      },
      {
        id: 'b3',
        options: [
          { id: 'DER-17-E3-b3-a', text: { es: "Probabilidad", en: "Likelihood" } },
          { id: 'DER-17-E3-b3-b', text: { es: "Multa máxima", en: "Maximum fine" } },
          { id: 'DER-17-E3-b3-c', text: { es: "Efectividad del control", en: "Control effectiveness" } },
        ],
        correctOptionId: 'DER-17-E3-b3-c',
      },
    ],
    explanation: {
      es: "Probabilidad × impacto da el riesgo inherente; multiplicar por (1 − efectividad del control) deja lo que sigue descubierto. Error común: restar la efectividad directamente al inherente (20 − 0.5) en lugar de usarla como porcentaje.",
      en: "Likelihood × impact gives inherent risk; multiplying by (1 − control effectiveness) leaves what remains uncovered. Common mistake: subtracting effectiveness directly from inherent risk (20 − 0.5) instead of using it as a percentage.",
    },
    difficulty: 2,
    points: 15,
    competency: 'regulatory-compliance',
  },
  {
    id: 'DER-17-E4',
    level: 2,
    module: 'DER-17',
    kind: 'fields',
    flavor: 'case',
    context: {
      es: "Una distribuidora de medicamentos que vende al sector salud evalúa dos riesgos con escalas de 1 a 5. Riesgo 1, soborno en licitaciones públicas: probabilidad 4, impacto 5, control 50% efectivo. Riesgo 2, mal uso de datos de pacientes: probabilidad 3, impacto 4, control 75% efectivo.",
      en: "A drug distributor selling to the public health sector assesses two risks on 1-to-5 scales. Risk 1, bribery in public tenders: likelihood 4, impact 5, control 50% effective. Risk 2, misuse of patient data: likelihood 3, impact 4, control 75% effective.",
    },
    prompt: {
      es: "Calcula el riesgo inherente y residual de los dos riesgos de la distribuidora de medicamentos.",
      en: "Compute the inherent and residual risk of the drug distributor's two risks.",
    },
    fields: [
      { id: 'f1', label: { es: "Riesgo 1: inherente", en: "Risk 1: inherent" }, answer: 20, unit: 'none', tolerance: { abs: 0.01 } },
      { id: 'f2', label: { es: "Riesgo 1: residual", en: "Risk 1: residual" }, answer: 10, unit: 'none', tolerance: { abs: 0.01 } },
      { id: 'f3', label: { es: "Riesgo 2: inherente", en: "Risk 2: inherent" }, answer: 12, unit: 'none', tolerance: { abs: 0.01 } },
      { id: 'f4', label: { es: "Riesgo 2: residual", en: "Risk 2: residual" }, answer: 3, unit: 'none', tolerance: { abs: 0.01 } },
    ],
    explanation: {
      es: "Riesgo 1: 4 × 5 = 20; 20 × (1 − 0.50) = 10. Riesgo 2: 3 × 4 = 12; 12 × (1 − 0.75) = 3. Se prioriza el soborno (residual 10). Error común: multiplicar por la efectividad (20 × 0.50 sí da 10 por coincidencia, pero 12 × 0.75 = 9 es incorrecto); hay que usar (1 − efectividad).",
      en: "Risk 1: 4 × 5 = 20; 20 × (1 − 0.50) = 10. Risk 2: 3 × 4 = 12; 12 × (1 − 0.75) = 3. Bribery is prioritized (residual 10). Common mistake: multiplying by effectiveness (20 × 0.50 gives 10 by coincidence, but 12 × 0.75 = 9 is wrong); you must use (1 − effectiveness).",
    },
    difficulty: 3,
    points: 20,
    competency: 'regulatory-compliance',
  },
  {
    id: 'DER-17-E5',
    level: 2,
    module: 'DER-17',
    kind: 'multi',
    flavor: 'concept',
    prompt: {
      es: "¿Cuáles son elementos de un programa de integridad eficaz?",
      en: "Which are elements of an effective integrity program?",
    },
    options: [
      { id: 'DER-17-E5-a', text: { es: "Línea de denuncia confidencial con protección contra represalias.", en: "Confidential hotline with protection against retaliation." } },
      { id: 'DER-17-E5-b', text: { es: "Evaluación periódica de riesgos.", en: "Periodic risk assessment." } },
      { id: 'DER-17-E5-c', text: { es: "Un código de ética firmado una vez y archivado sin capacitación.", en: "A code of ethics signed once and filed away without training." } },
      { id: 'DER-17-E5-d', text: { es: "Debida diligencia de terceros como gestores y distribuidores.", en: "Due diligence on third parties such as agents and distributors." } },
      { id: 'DER-17-E5-e', text: { es: "Sanciones solo para empleados de nivel bajo, nunca para directivos.", en: "Sanctions only for junior staff, never for executives." } },
    ],
    correctOptionIds: ['DER-17-E5-a', 'DER-17-E5-b', 'DER-17-E5-d'],
    explanation: {
      es: "Denuncia segura, evaluación de riesgos y revisión de terceros hacen que el programa funcione en la práctica. Un código archivado o sanciones disparejas son programas \"de papel\" que no protegen a la empresa. Error común: creer que tener el documento basta para demostrar una política de integridad.",
      en: "A safe hotline, risk assessment and third-party review make the program work in practice. A filed-away code or uneven sanctions are \"paper\" programs that do not protect the company. Common mistake: believing that having the document is enough to prove an integrity policy.",
    },
    difficulty: 2,
    points: 15,
    competency: 'regulatory-compliance',
  },
  {
    id: 'DER-17-E6',
    level: 2,
    module: 'DER-17',
    kind: 'truefalse',
    flavor: 'case',
    context: {
      es: "Una constructora contrata a un gestor externo para obtener una licencia municipal. Sin que la dirección lo sepa, el gestor paga un soborno al funcionario y la licencia sale en dos días.",
      en: "A construction firm hires an outside agent to obtain a municipal permit. Without management knowing, the agent bribes the official and the permit is issued in two days.",
    },
    prompt: {
      es: "Como la dirección de la constructora no sabía del soborno pagado por el gestor, la empresa no puede ser sancionada.",
      en: "Since the construction firm's management did not know about the bribe paid by the agent, the company cannot be penalized.",
    },
    answer: false,
    explanation: {
      es: "Falso: la empresa puede responder por actos de intermediarios que actúan en su nombre y en su beneficio; contar con una política de integridad y debida diligencia de terceros puede atenuar, pero no desconocer no la exime. Error común: pensar que tercerizar un trámite traslada todo el riesgo al gestor.",
      en: "False: the company can be liable for intermediaries acting on its behalf and for its benefit; having an integrity policy and third-party due diligence may mitigate, but ignorance does not exempt it. Common mistake: thinking outsourcing a procedure shifts all the risk to the agent.",
    },
    difficulty: 2,
    points: 15,
    competency: 'regulatory-compliance',
  },
]
