import type { Exercise, Lesson } from '../../../types'

/**
 * FINCORE — Temario v2.0, área Auditoría, Control Interno y Riesgos (nivel 5, etapa Básico):
 * AUD.1 a AUD.6 (fundamentos de auditoría, NIA, planeación y ejecución, evidencia y documentación,
 * control interno y marco COSO).
 */

const t = (es: string, en: string) => ({ es, en })

const NOTE_FUND = t(
  "Contenido educativo. Se mencionan de forma general las Normas Internacionales de Auditoría (NIA) del IAASB, que en México difunde el Instituto Mexicano de Contadores Públicos (IMCP), y el Código de Ética Profesional del IMCP. Los requisitos de independencia, las obligaciones de dictamen fiscal y las autoridades cambian con el tiempo: verifica la versión vigente (2026) con fuentes oficiales. Las cifras son ejemplos hipotéticos.",
  "Educational content. The International Standards on Auditing (ISA) issued by the IAASB, which in Mexico are disseminated by the Mexican Institute of Public Accountants (IMCP), and the IMCP Code of Professional Ethics are mentioned in general terms. Independence requirements, tax-audit obligations and authorities change over time: verify the current version (2026) with official sources. Figures are hypothetical examples.",
)

const NOTE_NIA = t(
  "Contenido educativo. Las NIA las emite el IAASB (Consejo de Normas Internacionales de Auditoría y Aseguramiento), dentro del ecosistema de la IFAC, y en México las adopta y difunde el IMCP. La numeración que se usa aquí es la conocida desde hace años, pero el IAASB revisa normas con frecuencia (por ejemplo, la gestión de la calidad sustituyó a la antigua norma de control de calidad). Verifica la versión vigente (2026) de cada norma antes de aplicarla.",
  "Educational content. ISAs are issued by the IAASB (International Auditing and Assurance Standards Board), within the IFAC ecosystem, and in Mexico they are adopted and disseminated by the IMCP. The numbering used here is the long-standing one, but the IAASB revises standards frequently (for example, quality management replaced the former quality control standard). Verify the current version (2026) of each standard before applying it.",
)

const NOTE_PLAN = t(
  "Contenido educativo basado en las NIA sobre planeación (NIA 300), identificación y valoración de riesgos (NIA 315), materialidad (NIA 320) y respuestas a riesgos (NIA 330). Las normas no fijan porcentajes obligatorios de materialidad: los porcentajes usados aquí son referencias ilustrativas y cada auditor aplica su juicio. Verifica la versión vigente (2026). Todas las cifras son hipotéticas.",
  "Educational content based on the ISAs on planning (ISA 300), identifying and assessing risks (ISA 315), materiality (ISA 320) and responses to risks (ISA 330). The standards do not set mandatory materiality percentages: the percentages used here are illustrative benchmarks and each auditor applies judgment. Verify the current version (2026). All figures are hypothetical.",
)

const NOTE_EVID = t(
  "Contenido educativo basado en las NIA sobre documentación (NIA 230), evidencia (NIA 500), confirmaciones externas (NIA 505), procedimientos analíticos (NIA 520) y muestreo (NIA 530). Los plazos para cerrar el archivo y para conservarlo dependen de la norma vigente, de las políticas de la firma y de las leyes locales: verifica la versión vigente (2026). Las cifras son ejemplos hipotéticos.",
  "Educational content based on the ISAs on documentation (ISA 230), evidence (ISA 500), external confirmations (ISA 505), analytical procedures (ISA 520) and sampling (ISA 530). Deadlines to assemble and retain the file depend on the current standard, firm policies and local laws: verify the current version (2026). Figures are hypothetical examples.",
)

const NOTE_CI = t(
  "Contenido educativo. Las ideas de control interno se apoyan en el marco COSO y en las NIA (por ejemplo, la NIA 265 sobre comunicar deficiencias de control). Las obligaciones específicas de control para ciertas entidades (emisoras de valores, entidades financieras, sector público) dependen de leyes y reguladores que cambian: verifica la versión vigente (2026). Las cifras son hipotéticas.",
  "Educational content. Internal control ideas rely on the COSO framework and the ISAs (for example, ISA 265 on communicating control deficiencies). Specific control obligations for certain entities (listed issuers, financial institutions, public sector) depend on laws and regulators that change: verify the current version (2026). Figures are hypothetical.",
)

const NOTE_COSO = t(
  "Contenido educativo basado en el Marco Integrado de Control Interno de COSO (Committee of Sponsoring Organizations of the Treadway Commission) en su versión de 2013, con 5 componentes y 17 principios, y mencionando de forma general el marco de Gestión de Riesgos Empresariales (ERM) de COSO. COSO puede publicar actualizaciones o guías nuevas: verifica la versión vigente (2026).",
  "Educational content based on the 2013 Internal Control–Integrated Framework of COSO (Committee of Sponsoring Organizations of the Treadway Commission), with 5 components and 17 principles, and mentioning COSO's Enterprise Risk Management (ERM) framework in general terms. COSO may publish updates or new guidance: verify the current version (2026).",
)

export const lessons: Lesson[] = [
  // ───────────────────────────── AUD-01 ─────────────────────────────
  {
    id: 'AUD-01',
    level: 5,
    topicIds: ['AUD.1'],
    title: t("Fundamentos de auditoría", "Auditing fundamentals"),
    summary: t(
      "Auditar es revisar de forma independiente y con evidencia si la información de alguien es confiable, para que un tercero pueda creer en ella; hay varios tipos de auditoría y todos se apoyan en independencia, escepticismo y juicio profesional.",
      "Auditing is independently reviewing, with evidence, whether someone's information is reliable so a third party can trust it; there are several types of audit and all rely on independence, skepticism and professional judgment.",
    ),
    minutes: 11,
    objectives: [
      t("Explicar qué es una auditoría y quiénes participan en ella.", "Explain what an audit is and who takes part in it."),
      t("Distinguir los principales tipos de auditoría por quién la hace y qué revisa.", "Distinguish the main types of audit by who performs it and what it reviews."),
      t("Diferenciar seguridad razonable de seguridad absoluta y de seguridad limitada.", "Differentiate reasonable assurance from absolute and limited assurance."),
      t("Reconocer amenazas a la independencia y aplicar el escepticismo profesional.", "Recognize threats to independence and apply professional skepticism."),
    ],
    theory: [
      {
        heading: t("¿Para qué sirve auditar?", "Why audit?"),
        body: [
          t(
            "**Auditar** es revisar algo de forma **independiente**, reuniendo **evidencia**, para dar una opinión sobre si cumple con un criterio. El criterio puede ser una norma contable, una ley o una política interna. La idea central: alguien que no preparó la información la revisa para que otros puedan confiar en ella.",
            "**Auditing** is reviewing something **independently**, gathering **evidence**, to give an opinion on whether it meets a criterion. The criterion may be an accounting standard, a law or an internal policy. The core idea: someone who did not prepare the information reviews it so others can trust it.",
          ),
          t(
            "Hay tres partes. La **administración** (los dueños o directivos) prepara la información y es responsable de ella. Los **usuarios** (bancos, inversionistas, el consejo, la autoridad) la usan para decidir. El **auditor** se pone en medio y da una opinión. El auditor no prepara la información: si lo hiciera, estaría revisando su propio trabajo.",
            "There are three parties. **Management** (owners or executives) prepares the information and is responsible for it. **Users** (banks, investors, the board, the authority) use it to make decisions. The **auditor** stands in between and gives an opinion. The auditor does not prepare the information: if it did, it would be reviewing its own work.",
          ),
          t(
            "¿Por qué hace falta? Porque quien prepara la información puede tener incentivos para que se vea mejor, y el usuario no puede revisar todo por sí mismo. La auditoría reduce esa desconfianza. Mini ejemplo: una panadería de Toluca pide un crédito de $2 millones. El banco no conoce a los dueños; unos estados financieros auditados le dan más confianza para prestar.",
            "Why is it needed? Because whoever prepares the information may have incentives to make it look better, and the user cannot check everything alone. An audit reduces that distrust. Mini example: a bakery in Toluca asks for a $2 million loan. The bank does not know the owners; audited financial statements give it more confidence to lend.",
          ),
        ],
        bullets: [
          t("Administración: prepara la información y responde por ella.", "Management: prepares the information and is responsible for it."),
          t("Auditor: reúne evidencia y opina de forma independiente.", "Auditor: gathers evidence and gives an independent opinion."),
          t("Usuarios: confían en la opinión para tomar decisiones.", "Users: rely on the opinion to make decisions."),
          t("Criterio: la regla contra la que se compara (normas, leyes, políticas).", "Criterion: the rule it is compared against (standards, laws, policies)."),
        ],
      },
      {
        heading: t("¿Qué tipos de auditoría hay?", "What kinds of audit exist?"),
        body: [
          t(
            "Las auditorías se distinguen por **quién** las hace y **qué** revisan. La **auditoría externa de estados financieros** la hace un contador público independiente, ajeno a la empresa, y opina si los estados financieros están bien presentados. La **auditoría interna** la hace un área de la propia organización que reporta al consejo o a un comité de auditoría y revisa riesgos, controles y procesos.",
            "Audits differ by **who** performs them and **what** they review. The **external financial statement audit** is performed by an independent public accountant from outside the company and gives an opinion on whether the financial statements are fairly presented. **Internal audit** is performed by a unit of the organization itself that reports to the board or an audit committee and reviews risks, controls and processes.",
          ),
          t(
            "Hay otros tipos según el objetivo. La **auditoría de cumplimiento** revisa si se siguen leyes, contratos o políticas. La **auditoría operacional** evalúa si un proceso es eficiente y eficaz (por ejemplo, cuánto tarda surtir un pedido). La **auditoría fiscal** revisa el cumplimiento de impuestos; en México existe la figura del dictamen fiscal de un contador público, cuyas reglas cambian con el tiempo. La **auditoría gubernamental** la hacen órganos de fiscalización sobre el uso de recursos públicos.",
            "There are other types by objective. A **compliance audit** checks whether laws, contracts or policies are followed. An **operational audit** assesses whether a process is efficient and effective (for example, how long it takes to fill an order). A **tax audit** reviews tax compliance; in Mexico there is the tax report (dictamen fiscal) issued by a public accountant, whose rules change over time. A **government audit** is performed by oversight bodies on the use of public funds.",
          ),
          t(
            "Mini ejemplo: en una cadena de farmacias, el despacho externo opina sobre los estados financieros anuales; auditoría interna revisa si las sucursales cuentan bien el inventario de medicamentos controlados; y una revisión operacional mide cuántos días tarda reabastecer una sucursal.",
            "Mini example: at a pharmacy chain, the external firm gives an opinion on the annual financial statements; internal audit checks whether branches count controlled-drug inventory correctly; and an operational review measures how many days it takes to restock a branch.",
          ),
        ],
        bullets: [
          t("Externa de estados financieros: opinión independiente para terceros.", "External financial statement audit: independent opinion for third parties."),
          t("Interna: aseguramiento y consultoría dentro de la organización.", "Internal: assurance and consulting within the organization."),
          t("Cumplimiento: ¿se siguen leyes, contratos y políticas?", "Compliance: are laws, contracts and policies followed?"),
          t("Operacional: ¿el proceso es eficiente y logra su objetivo?", "Operational: is the process efficient and does it achieve its goal?"),
          t("Fiscal y gubernamental: impuestos y recursos públicos.", "Tax and government: taxes and public funds."),
        ],
      },
      {
        heading: t("Confianza alta, pero no total", "High confidence, not total"),
        body: [
          t(
            "Una auditoría da **seguridad razonable**: un nivel alto de confianza, pero **no absoluta**. El auditor no revisa cada peso, usa muestras y juicio, y algunas cosas (como un fraude bien escondido con documentos falsos) pueden no detectarse. Una **revisión limitada** da todavía menos seguridad porque usa sobre todo preguntas y análisis, no pruebas detalladas.",
            "An audit gives **reasonable assurance**: a high level of confidence, but **not absolute**. The auditor does not check every peso, uses samples and judgment, and some things (such as fraud well hidden with fake documents) may go undetected. A **limited review** gives even less assurance because it mainly uses inquiries and analysis, not detailed tests.",
          ),
          t(
            "La **independencia** es lo que da valor a la opinión. Se ve amenazada por el **interés propio** (depender mucho de los honorarios de un cliente), la **autorrevisión** (auditar algo que uno mismo preparó), la **familiaridad** (años de amistad con el director) y la **intimidación** (amenazas de cambiar de auditor). Ante una amenaza, el auditor aplica salvaguardas o se retira.",
            "**Independence** is what gives the opinion its value. It is threatened by **self-interest** (depending heavily on one client's fees), **self-review** (auditing something one prepared), **familiarity** (years of friendship with the director) and **intimidation** (threats to change auditors). Facing a threat, the auditor applies safeguards or withdraws.",
          ),
          t(
            "El **escepticismo profesional** es una actitud de mente inquisitiva: no suponer que la administración es deshonesta, pero tampoco creer todo sin evidencia. El **juicio profesional** es decidir con conocimiento y experiencia qué revisar y cuánto. Mini ejemplo: el gerente dice «ese cliente ya pagó». El auditor escéptico pide el estado de cuenta bancario donde aparece el depósito.",
            "**Professional skepticism** is a questioning mindset: not assuming management is dishonest, but not believing everything without evidence either. **Professional judgment** is deciding, with knowledge and experience, what to review and how much. Mini example: the manager says \"that customer already paid.\" The skeptical auditor asks for the bank statement showing the deposit.",
          ),
        ],
        formulas: [
          {
            name: t("Dependencia de honorarios: cuánto pesa un cliente en los ingresos del despacho", "Fee dependence: how much one client weighs in the firm's revenue"),
            expression: "Dependencia (%) = Honorarios de un cliente ÷ Honorarios totales del despacho × 100",
            variables: [
              { symbol: "Dependencia (%)", meaning: t("Qué parte de todo lo que cobra el despacho viene de ese solo cliente, en porcentaje.", "What share of everything the firm bills comes from that single client, as a percentage.") },
              { symbol: "Honorarios de un cliente", meaning: t("Lo que ese cliente paga al despacho en el año por auditoría y otros servicios, en pesos.", "What that client pays the firm in the year for the audit and other services, in pesos.") },
              { symbol: "Honorarios totales del despacho", meaning: t("Todo lo que el despacho cobra en el año a todos sus clientes juntos, en pesos.", "Everything the firm bills in the year to all its clients together, in pesos.") },
              { symbol: "× 100", meaning: t("Convierte el resultado decimal en porcentaje.", "Turns the decimal result into a percentage.") },
            ],
            steps: [
              t("Identifica lo que paga el cliente (la parte) y lo que cobra el despacho en total (el todo).", "Identify what the client pays (the part) and what the firm bills in total (the whole)."),
              t("Divide la parte entre el todo: honorarios del cliente ÷ honorarios totales.", "Divide the part by the whole: client fees ÷ total fees."),
              t("Multiplica por 100 para expresarlo en porcentaje.", "Multiply by 100 to express it as a percentage."),
            ],
            example: t(
              "Un despacho de Puebla cobra $2,500,000 al año y un cliente le paga $450,000. División: 450,000 ÷ 2,500,000 = 0.18. Porcentaje: 0.18 × 100 = **18 %** de sus ingresos vienen de ese cliente.",
              "A firm in Puebla bills $2,500,000 a year and one client pays it $450,000. Division: 450,000 ÷ 2,500,000 = 0.18. Percentage: 0.18 × 100 = **18%** of its revenue comes from that client.",
            ),
            interpret: t(
              "Cuanto más alto el porcentaje, más le dolería al despacho perder al cliente y más fuerte es la **amenaza de interés propio**. No hay un número mágico en esta lección: el despacho lo evalúa con juicio y, si es alto, aplica salvaguardas.",
              "The higher the percentage, the more it would hurt the firm to lose the client and the stronger the **self-interest threat**. There is no magic number in this lesson: the firm assesses it with judgment and, if it is high, applies safeguards.",
            ),
            mistake: t(
              "Dividir al revés (honorarios totales ÷ honorarios del cliente). Eso da un número como 5.6, que no es un porcentaje de dependencia.",
              "Dividing the other way (total fees ÷ client fees). That gives a number like 5.6, which is not a dependence percentage.",
            ),
          },
        ],
      },
    ],
    examples: [
      {
        title: t("¿Quién hace qué en una auditoría?", "Who does what in an audit?"),
        problem: t(
          "Una distribuidora de abarrotes en Monterrey quiere ampliar su línea de crédito. El banco pide estados financieros auditados. El contador de la empresa prepara los estados y un despacho externo los audita. Identifica las tres partes y el tipo de seguridad que obtiene el banco.",
          "A grocery distributor in Monterrey wants to expand its credit line. The bank asks for audited financial statements. The company's accountant prepares the statements and an external firm audits them. Identify the three parties and the type of assurance the bank gets.",
        ),
        steps: [
          t("Administración: la distribuidora (y su contador), que prepara los estados y responde por ellos.", "Management: the distributor (and its accountant), which prepares the statements and is responsible for them."),
          t("Auditor: el despacho externo, que debe ser independiente de la distribuidora.", "Auditor: the external firm, which must be independent of the distributor."),
          t("Usuario: el banco, que decide si amplía el crédito.", "User: the bank, which decides whether to expand credit."),
          t("Tipo de trabajo: auditoría externa de estados financieros, que da seguridad razonable, no absoluta.", "Type of work: external financial statement audit, which gives reasonable, not absolute, assurance."),
        ],
        result: t(
          "El banco obtiene más confianza, pero la responsabilidad de las cifras sigue siendo de la distribuidora. Si el despacho hubiera preparado los estados, tendría una amenaza de autorrevisión.",
          "The bank gains more confidence, but responsibility for the figures remains with the distributor. If the firm had prepared the statements, it would face a self-review threat.",
        ),
      },
      {
        title: t("Medir una amenaza de interés propio", "Measuring a self-interest threat"),
        problem: t(
          "Un despacho pequeño cobra en total $4,000,000 al año. Un solo cliente, una constructora, le paga $1,400,000 por la auditoría y otros servicios. ¿Qué porcentaje representa y qué amenaza revela? (Cifras hipotéticas.)",
          "A small firm bills $4,000,000 per year in total. A single client, a construction company, pays $1,400,000 for the audit and other services. What percentage does it represent and what threat does it reveal? (Hypothetical figures.)",
        ),
        steps: [
          t("Dependencia = 1,400,000 ÷ 4,000,000 × 100 = 35 %.", "Dependence = 1,400,000 ÷ 4,000,000 × 100 = 35%."),
          t("Perder a ese cliente quitaría más de un tercio de los ingresos del despacho.", "Losing that client would remove more than a third of the firm's revenue."),
          t("Eso crea una amenaza de interés propio: el despacho podría evitar opiniones incómodas para no perderlo.", "That creates a self-interest threat: the firm might avoid uncomfortable opinions so as not to lose it."),
          t("Salvaguardas posibles: revisión del trabajo por un socio ajeno al cliente, informar al gobierno corporativo o reducir otros servicios.", "Possible safeguards: review of the work by a partner not involved with the client, informing those charged with governance or reducing other services."),
        ],
        result: t(
          "Un 35 % de dependencia es una amenaza seria a la independencia. El despacho debe evaluarla, aplicar salvaguardas y, si no bastan, no aceptar o no continuar el encargo.",
          "A 35% dependence is a serious threat to independence. The firm must assess it, apply safeguards and, if they are not enough, not accept or not continue the engagement.",
        ),
      },
    ],
    keyPoints: [
      t("Auditar es revisar con independencia y evidencia contra un criterio para que terceros confíen.", "Auditing is reviewing with independence and evidence against a criterion so third parties can trust."),
      t("La administración prepara la información; el auditor opina; los usuarios deciden.", "Management prepares the information; the auditor gives an opinion; users decide."),
      t("Tipos principales: externa de estados financieros, interna, cumplimiento, operacional, fiscal y gubernamental.", "Main types: external financial statement, internal, compliance, operational, tax and government."),
      t("La auditoría da seguridad razonable, no absoluta; una revisión limitada da menos.", "An audit gives reasonable, not absolute, assurance; a limited review gives less."),
      t("Amenazas a la independencia: interés propio, autorrevisión, familiaridad e intimidación.", "Threats to independence: self-interest, self-review, familiarity and intimidation."),
      t("Escepticismo: ni desconfiar de todo ni creer sin evidencia.", "Skepticism: neither distrust everything nor believe without evidence."),
    ],
    normativeNote: NOTE_FUND,
    exerciseIds: ['AUD-01-E1', 'AUD-01-E2', 'AUD-01-E3', 'AUD-01-E4', 'AUD-01-E6'],
  },

  // ───────────────────────────── AUD-02 ─────────────────────────────
  {
    id: 'AUD-02',
    level: 5,
    topicIds: ['AUD.2'],
    title: t("Normas Internacionales de Auditoría (NIA)", "International Standards on Auditing (ISA)"),
    summary: t(
      "Las NIA son las reglas comunes que sigue un auditor externo en casi todo el mundo, incluido México: se agrupan por número según la etapa de la auditoría y cada una combina un objetivo, requisitos obligatorios y guía de aplicación.",
      "ISAs are the common rules followed by external auditors in most of the world, including Mexico: they are grouped by number according to the audit stage and each combines an objective, mandatory requirements and application guidance.",
    ),
    minutes: 11,
    objectives: [
      t("Explicar quién emite las NIA y por qué existen normas comunes de auditoría.", "Explain who issues the ISAs and why common auditing standards exist."),
      t("Ubicar una NIA en su grupo según su numeración (200, 300-400, 500, 600, 700).", "Place an ISA in its group by its numbering (200, 300-400, 500, 600, 700)."),
      t("Distinguir objetivo, requisitos y material de aplicación dentro de una norma.", "Distinguish objective, requirements and application material within a standard."),
      t("Describir los principios generales de la NIA 200 y el papel de la gestión de la calidad.", "Describe the general principles of ISA 200 and the role of quality management."),
    ],
    theory: [
      {
        heading: t("¿Qué reglas sigue el auditor?", "What rules does the auditor follow?"),
        body: [
          t(
            "Las **Normas Internacionales de Auditoría (NIA)** son el «reglamento» que sigue el auditor externo de estados financieros. Dicen qué debe lograr, qué debe hacer sí o sí y cómo documentarlo. Gracias a ellas, una auditoría hecha en México se puede comparar con una hecha en España o en Colombia.",
            "The **International Standards on Auditing (ISA)** are the \"rulebook\" followed by the external financial statement auditor. They say what must be achieved, what must be done no matter what and how to document it. Thanks to them, an audit performed in Mexico can be compared with one performed in Spain or Colombia.",
          ),
          t(
            "Las emite el **IAASB** (Consejo de Normas Internacionales de Auditoría y Aseguramiento), un organismo independiente ligado a la **IFAC** (Federación Internacional de Contadores). En México, el **IMCP** (Instituto Mexicano de Contadores Públicos) las adopta, las traduce y las difunde como las normas que deben seguir sus miembros.",
            "They are issued by the **IAASB** (International Auditing and Assurance Standards Board), an independent body linked to **IFAC** (International Federation of Accountants). In Mexico, the **IMCP** (Mexican Institute of Public Accountants) adopts, translates and disseminates them as the standards its members must follow.",
          ),
          t(
            "Ojo con no confundir: las **NIF** (Normas de Información Financiera) dicen **cómo preparar** los estados financieros; las **NIA** dicen **cómo auditarlos**. Mini ejemplo: la NIF dice cómo valuar el inventario de una zapatería; la NIA dice cómo el auditor verifica que esa valuación sea correcta.",
            "Be careful not to confuse them: the **NIF** (Mexican Financial Reporting Standards) say **how to prepare** financial statements; the **ISAs** say **how to audit** them. Mini example: the NIF says how to value a shoe store's inventory; the ISA says how the auditor checks that valuation is correct.",
          ),
        ],
        bullets: [
          t("IAASB: emite las NIA a nivel internacional.", "IAASB: issues the ISAs internationally."),
          t("IFAC: federación mundial de organismos contables que respalda al IAASB.", "IFAC: global federation of accounting bodies that supports the IAASB."),
          t("IMCP: las adopta y difunde en México.", "IMCP: adopts and disseminates them in Mexico."),
          t("NIF = cómo se preparan los estados; NIA = cómo se auditan.", "NIF = how statements are prepared; ISA = how they are audited."),
        ],
      },
      {
        heading: t("¿Cómo se ordenan las NIA?", "How are the ISAs organized?"),
        body: [
          t(
            "Las NIA se numeran por grupos que siguen el orden de una auditoría. Si recuerdas el grupo, sabes de qué trata la norma aunque no conozcas su número exacto. Es como los pasillos de un supermercado: cada número de centena es un pasillo.",
            "ISAs are numbered in groups that follow the order of an audit. If you remember the group, you know what the standard is about even if you do not know its exact number. It is like supermarket aisles: each hundred is an aisle.",
          ),
          t(
            "Algunas normas que verás seguido: **NIA 200** (objetivos generales del auditor), **NIA 210** (acuerdo de los términos del encargo), **NIA 230** (documentación), **NIA 240** (fraude), **NIA 300** (planeación), **NIA 315** (identificar y valorar riesgos), **NIA 320** (materialidad), **NIA 330** (respuestas a los riesgos), **NIA 500** (evidencia), **NIA 530** (muestreo), **NIA 580** (manifestaciones escritas) y **NIA 700** (opinión e informe).",
            "Some standards you will see often: **ISA 200** (overall objectives of the auditor), **ISA 210** (agreeing the terms of the engagement), **ISA 230** (documentation), **ISA 240** (fraud), **ISA 300** (planning), **ISA 315** (identifying and assessing risks), **ISA 320** (materiality), **ISA 330** (responses to risks), **ISA 500** (evidence), **ISA 530** (sampling), **ISA 580** (written representations) and **ISA 700** (opinion and report).",
          ),
          t(
            "Mini ejemplo: un auditor junior duda cómo elegir una muestra de facturas. Como el muestreo es una forma de obtener evidencia, busca en el grupo 500 y encuentra la NIA 530.",
            "Mini example: a junior auditor is unsure how to choose a sample of invoices. Since sampling is a way to obtain evidence, she looks in the 500 group and finds ISA 530.",
          ),
        ],
        bullets: [
          t("200-299: principios generales y responsabilidades.", "200-299: general principles and responsibilities."),
          t("300-499: valoración de riesgos y respuesta a los riesgos.", "300-499: risk assessment and response to assessed risks."),
          t("500-599: evidencia de auditoría.", "500-599: audit evidence."),
          t("600-699: uso del trabajo de otros (otros auditores, auditoría interna, expertos).", "600-699: using the work of others (other auditors, internal audit, experts)."),
          t("700-799: conclusiones e informe del auditor.", "700-799: audit conclusions and reporting."),
        ],
      },
      {
        heading: t("¿Qué parte de una NIA obliga?", "Which part of an ISA is binding?"),
        body: [
          t(
            "Cada NIA tiene partes fijas: una **introducción**, un **objetivo** (lo que el auditor debe lograr), **definiciones**, **requisitos** (lo que el auditor **debe** hacer; suelen redactarse con «deberá») y **guía de aplicación y otras anotaciones explicativas** (ejemplos y explicaciones que ayudan a cumplir los requisitos). Solo los requisitos son obligatorios, pero la guía es necesaria para entenderlos bien.",
            "Each ISA has fixed parts: an **introduction**, an **objective** (what the auditor must achieve), **definitions**, **requirements** (what the auditor **shall** do) and **application and other explanatory material** (examples and explanations that help meet the requirements). Only the requirements are mandatory, but the guidance is needed to understand them properly.",
          ),
          t(
            "La **NIA 200** fija la base de todo: el objetivo es obtener **seguridad razonable** de que los estados no tienen **incorrecciones materiales** (errores importantes), por fraude o error, y emitir un informe. Pide cumplir requisitos de **ética** (incluida la independencia), aplicar **escepticismo** y **juicio profesional**, y obtener evidencia **suficiente y adecuada**. El auditor debe cumplir **todas** las NIA que sean relevantes para su encargo.",
            "**ISA 200** sets the foundation: the objective is to obtain **reasonable assurance** that the statements are free of **material misstatement** (significant errors), whether due to fraud or error, and to issue a report. It requires complying with **ethical** requirements (including independence), applying **skepticism** and **professional judgment**, and obtaining **sufficient appropriate** evidence. The auditor must comply with **all** ISAs relevant to the engagement.",
          ),
          t(
            "Además, cada despacho necesita un sistema de **gestión de la calidad** (normas ISQM del IAASB y, a nivel de cada auditoría, la NIA 220) para asegurar que sus equipos sigan las normas. Mini ejemplo: el despacho exige que un socio que no participó revise los encargos de mayor riesgo antes de firmar el informe.",
            "In addition, each firm needs a **quality management** system (the IAASB's ISQM standards and, at the level of each audit, ISA 220) to ensure its teams follow the standards. Mini example: the firm requires a partner who did not take part to review its highest-risk engagements before the report is signed.",
          ),
        ],
      },
    ],
    examples: [
      {
        title: t("Encontrar la norma correcta", "Finding the right standard"),
        problem: t(
          "Durante la auditoría de un hotel en Cancún te surgen tres dudas: (1) cómo pedir a un banco que confirme el saldo de la cuenta, (2) qué hacer con el trabajo del perito valuador del edificio y (3) cómo redactar la opinión final. ¿En qué grupo de NIA buscas cada una?",
          "During the audit of a hotel in Cancún you have three questions: (1) how to ask a bank to confirm the account balance, (2) what to do with the work of the building's appraisal expert and (3) how to word the final opinion. In which ISA group do you look for each?",
        ),
        steps: [
          t("Confirmar con el banco es obtener evidencia: grupo 500 (la NIA 505 trata las confirmaciones externas).", "Confirming with the bank is obtaining evidence: group 500 (ISA 505 covers external confirmations)."),
          t("Usar el trabajo de un experto es usar el trabajo de otros: grupo 600 (la NIA 620 trata los expertos del auditor).", "Using an expert's work is using the work of others: group 600 (ISA 620 covers auditor's experts)."),
          t("Redactar la opinión es concluir e informar: grupo 700 (NIA 700).", "Wording the opinion is concluding and reporting: group 700 (ISA 700)."),
        ],
        result: t(
          "Con el mapa por grupos ubicas rápido la norma, aunque no recuerdes el número exacto: 500 evidencia, 600 trabajo de otros, 700 informe.",
          "With the group map you quickly locate the standard, even if you don't remember the exact number: 500 evidence, 600 work of others, 700 reporting.",
        ),
      },
      {
        title: t("Requisito o guía", "Requirement or guidance"),
        problem: t(
          "Una auditora lee dos frases de una NIA: (A) «El auditor deberá documentar la naturaleza, el momento y la extensión de los procedimientos realizados.» (B) «Por ejemplo, en una entidad pequeña la documentación puede ser menos extensa.» ¿Cuál es obligatoria y qué hace la otra?",
          "An auditor reads two sentences of an ISA: (A) \"The auditor shall document the nature, timing and extent of the procedures performed.\" (B) \"For example, in a smaller entity documentation may be less extensive.\" Which one is mandatory and what does the other do?",
        ),
        steps: [
          t("La frase A usa «deberá»: es un requisito y se cumple siempre que la norma sea relevante.", "Sentence A uses \"shall\": it is a requirement and must be met whenever the standard is relevant."),
          t("La frase B da un ejemplo y explica cómo aplicar el requisito: es guía de aplicación.", "Sentence B gives an example and explains how to apply the requirement: it is application guidance."),
          t("La guía no crea obligaciones nuevas, pero ayuda a cumplir bien la obligación de la frase A.", "The guidance does not create new obligations, but helps properly meet the obligation in sentence A."),
        ],
        result: t(
          "A es requisito obligatorio; B es material de aplicación. Una entidad pequeña no queda exenta de documentar: solo puede hacerlo de forma más sencilla.",
          "A is a mandatory requirement; B is application material. A small entity is not exempt from documentation: it can only be done more simply.",
        ),
      },
    ],
    keyPoints: [
      t("Las NIA dicen cómo auditar; las NIF dicen cómo preparar los estados financieros.", "ISAs say how to audit; the NIF say how to prepare financial statements."),
      t("Las emite el IAASB y en México las adopta y difunde el IMCP.", "They are issued by the IAASB and adopted and disseminated in Mexico by the IMCP."),
      t("Grupos: 200 principios, 300-400 riesgos, 500 evidencia, 600 trabajo de otros, 700 informe.", "Groups: 200 principles, 300-400 risks, 500 evidence, 600 work of others, 700 reporting."),
      t("Solo los requisitos («deberá») son obligatorios; la guía de aplicación ayuda a cumplirlos.", "Only requirements (\"shall\") are mandatory; application guidance helps meet them."),
      t("La NIA 200 pide seguridad razonable, ética, escepticismo, juicio y evidencia suficiente y adecuada.", "ISA 200 requires reasonable assurance, ethics, skepticism, judgment and sufficient appropriate evidence."),
    ],
    normativeNote: NOTE_NIA,
    exerciseIds: ['AUD-02-E1', 'AUD-02-E2', 'AUD-02-E3', 'AUD-02-E4', 'AUD-02-E6'],
  },

  // ───────────────────────────── AUD-03 ─────────────────────────────
  {
    id: 'AUD-03',
    level: 5,
    topicIds: ['AUD.3'],
    title: t("Planeación y ejecución de auditorías", "Planning and performing audits"),
    summary: t(
      "Una auditoría avanza por etapas: aceptar el encargo, planear (conocer el negocio, fijar la materialidad y valorar riesgos), ejecutar pruebas de controles y sustantivas, y concluir; el modelo de riesgo de auditoría dice cuánto trabajo hacer.",
      "An audit moves through stages: accepting the engagement, planning (understanding the business, setting materiality and assessing risks), performing tests of controls and substantive tests, and concluding; the audit risk model tells how much work to do.",
    ),
    minutes: 11,
    objectives: [
      t("Ordenar las etapas de una auditoría, desde la aceptación hasta la conclusión.", "Order the stages of an audit, from acceptance to conclusion."),
      t("Calcular una materialidad ilustrativa y la materialidad de ejecución.", "Compute an illustrative materiality and performance materiality."),
      t("Usar el modelo de riesgo de auditoría para obtener el riesgo de detección aceptable.", "Use the audit risk model to obtain the acceptable detection risk."),
      t("Distinguir pruebas de controles de procedimientos sustantivos.", "Distinguish tests of controls from substantive procedures."),
    ],
    theory: [
      {
        heading: t("¿En qué pasos va una auditoría?", "What are the steps of an audit?"),
        body: [
          t(
            "Antes de empezar, el despacho decide si **acepta el encargo**: revisa si es independiente, si tiene gente capaz y si la administración es íntegra. Luego firma una **carta convenio** (carta de encargo) que deja por escrito el objetivo, las responsabilidades de cada parte y el informe que se entregará.",
            "Before starting, the firm decides whether to **accept the engagement**: it checks whether it is independent, has capable people and whether management has integrity. Then it signs an **engagement letter** that sets out in writing the objective, each party's responsibilities and the report to be delivered.",
          ),
          t(
            "Después viene la **planeación**: conocer el negocio y su entorno, fijar la materialidad, identificar dónde podría haber errores importantes y diseñar el plan. Sigue la **ejecución**: aplicar las pruebas planeadas. Al final, la **conclusión**: evaluar las diferencias encontradas, pedir manifestaciones escritas a la administración y emitir el informe.",
            "Then comes **planning**: understanding the business and its environment, setting materiality, identifying where significant errors could be and designing the plan. Next is **execution**: performing the planned tests. Finally, the **conclusion**: evaluating differences found, obtaining written representations from management and issuing the report.",
          ),
          t(
            "La planeación **no es un paso único**: si en la ejecución aparece algo nuevo (por ejemplo, un cliente importante que quebró), el auditor actualiza su plan. Mini ejemplo: en una empacadora de aguacate en Michoacán, el auditor visita la planta en la planeación y descubre que la empresa empezó a exportar; agrega pruebas sobre ventas en dólares.",
            "Planning is **not a one-off step**: if something new appears during execution (for example, a major customer went bankrupt), the auditor updates the plan. Mini example: at an avocado packer in Michoacán, the auditor visits the plant during planning and discovers the company started exporting; she adds tests on dollar sales.",
          ),
        ],
        bullets: [
          t("Aceptación: independencia, capacidad e integridad del cliente; carta convenio.", "Acceptance: independence, capability and client integrity; engagement letter."),
          t("Planeación: entender el negocio, materialidad, riesgos y plan.", "Planning: understand the business, materiality, risks and plan."),
          t("Ejecución: pruebas de controles y procedimientos sustantivos.", "Execution: tests of controls and substantive procedures."),
          t("Conclusión: evaluar diferencias, manifestaciones escritas e informe.", "Conclusion: evaluate differences, written representations and report."),
        ],
      },
      {
        heading: t("¿Qué error sí importa?", "Which error really matters?"),
        body: [
          t(
            "Una cifra es **material** cuando un error en ella podría cambiar la decisión de quien lee los estados. Como el auditor no revisa todo, fija un **monto de materialidad** para saber qué errores importan. Se calcula aplicando un porcentaje a una **base** (por ejemplo, utilidad antes de impuestos, ventas o activos totales).",
            "A figure is **material** when an error in it could change the decision of whoever reads the statements. Since the auditor does not review everything, it sets a **materiality amount** to know which errors matter. It is computed by applying a percentage to a **benchmark** (for example, profit before tax, revenue or total assets).",
          ),
          t(
            "Las NIA **no fijan porcentajes obligatorios**. En la práctica se usan referencias, como alrededor de **5 % de la utilidad antes de impuestos** en una empresa lucrativa estable, pero siempre con juicio. Luego se fija una **materialidad de ejecución** más baja (por ejemplo, 75 % de la materialidad) para dejar un colchón: errores pequeños no detectados pueden sumar.",
            "The ISAs **do not set mandatory percentages**. In practice benchmarks are used, such as about **5% of profit before tax** for a stable profit-oriented company, but always with judgment. Then a lower **performance materiality** is set (for example, 75% of materiality) to leave a cushion: small undetected errors can add up.",
          ),
          t(
            "También se fija un umbral de errores **claramente insignificantes**, por debajo del cual no se acumulan. Mini ejemplo ilustrativo: utilidad antes de impuestos de $2,000,000 × 5 % = materialidad de $100,000; materialidad de ejecución 75 % = $75,000. Un error de $150,000 en ventas sería material; uno de $800, no.",
            "A threshold for **clearly trivial** errors is also set, below which they are not accumulated. Illustrative mini example: profit before tax of $2,000,000 × 5% = materiality of $100,000; performance materiality at 75% = $75,000. A $150,000 error in sales would be material; an $800 one would not.",
          ),
        ],
        formulas: [
          {
            name: t("Materialidad: a partir de cuántos pesos un error importa", "Materiality: from how many pesos an error matters"),
            expression: "Materialidad = Base × % elegido",
            variables: [
              { symbol: "Materialidad", meaning: t("El monto en pesos a partir del cual un error podría cambiar la decisión de quien lee los estados.", "The peso amount from which an error could change the decision of whoever reads the statements.") },
              { symbol: "Base", meaning: t("La cifra de referencia elegida, en pesos: por ejemplo, la utilidad antes de impuestos, las ventas o los activos totales.", "The chosen reference figure, in pesos: for example, profit before tax, revenue or total assets.") },
              { symbol: "% elegido", meaning: t("El porcentaje que el auditor aplica con su juicio (por ejemplo, 5 % de la utilidad antes de impuestos; es una referencia, no una regla).", "The percentage the auditor applies with judgment (for example, 5% of profit before tax; it is a benchmark, not a rule).") },
            ],
            steps: [
              t("Elige la base que más le importa al lector (en una empresa con utilidades estables suele ser la utilidad antes de impuestos).", "Choose the benchmark that matters most to the reader (for a company with stable profits it is usually profit before tax)."),
              t("Convierte el porcentaje a decimal: 5 % = 0.05.", "Convert the percentage to a decimal: 5% = 0.05."),
              t("Multiplica la base por ese decimal: el resultado, en pesos, es la materialidad.", "Multiply the benchmark by that decimal: the result, in pesos, is materiality."),
            ],
            example: t(
              "Una taquería con varias sucursales tiene utilidad antes de impuestos de $1,200,000. Decimal: 5 % = 0.05. Materialidad: 1,200,000 × 0.05 = **$60,000**. Un error de $70,000 sería material; uno de $2,000, no.",
              "A taco chain with several branches has profit before tax of $1,200,000. Decimal: 5% = 0.05. Materiality: 1,200,000 × 0.05 = **$60,000**. A $70,000 error would be material; a $2,000 one would not.",
            ),
            mistake: t(
              "Creer que el porcentaje es obligatorio por norma. Las NIA no fijan porcentajes: el auditor los elige y justifica.",
              "Believing the percentage is mandatory under the standards. The ISAs do not set percentages: the auditor chooses and justifies them.",
            ),
          },
          {
            name: t("Materialidad de ejecución: el colchón de seguridad", "Performance materiality: the safety cushion"),
            expression: "Materialidad de ejecución = Materialidad × % (p. ej. 50 %-75 %)",
            variables: [
              { symbol: "Materialidad de ejecución", meaning: t("Un monto más bajo que la materialidad, en pesos, con el que se diseñan las pruebas para dejar margen a errores no detectados.", "An amount lower than materiality, in pesos, used to design the tests and leave room for undetected errors.") },
              { symbol: "Materialidad", meaning: t("El monto que calculaste en la fórmula anterior, en pesos.", "The amount you computed with the previous formula, in pesos.") },
              { symbol: "%", meaning: t("El porcentaje que elige el auditor, normalmente entre 50 % y 75 % (referencia ilustrativa).", "The percentage the auditor chooses, usually between 50% and 75% (illustrative benchmark).") },
            ],
            steps: [
              t("Calcula primero la materialidad.", "First compute materiality."),
              t("Convierte el porcentaje de ejecución a decimal: 60 % = 0.60.", "Convert the performance percentage to a decimal: 60% = 0.60."),
              t("Multiplica la **materialidad** (no la base) por ese decimal.", "Multiply **materiality** (not the benchmark) by that decimal."),
            ],
            example: t(
              "Con la materialidad de $60,000 de la taquería y un 60 %: 60,000 × 0.60 = **$36,000** de materialidad de ejecución.",
              "With the taco chain's $60,000 materiality and 60%: 60,000 × 0.60 = **$36,000** of performance materiality.",
            ),
            mistake: t(
              "Aplicar el porcentaje a la base (la utilidad) en lugar de a la materialidad: da un monto enorme y absurdo.",
              "Applying the percentage to the benchmark (profit) instead of materiality: it gives a huge, absurd amount.",
            ),
          },
          {
            name: t("Umbral de errores claramente insignificantes", "Clearly trivial threshold"),
            expression: "Claramente insignificante = Materialidad × %",
            variables: [
              { symbol: "Claramente insignificante", meaning: t("El monto en pesos por debajo del cual un error es tan pequeño que ni siquiera se anota para sumarlo con otros.", "The peso amount below which an error is so small it is not even recorded to add up with others.") },
              { symbol: "Materialidad", meaning: t("El monto de materialidad ya calculado, en pesos.", "The materiality amount already computed, in pesos.") },
              { symbol: "%", meaning: t("Un porcentaje pequeño que elige el auditor (tasa de ejemplo: entre 3 % y 5 % de la materialidad).", "A small percentage chosen by the auditor (example rate: between 3% and 5% of materiality).") },
            ],
            steps: [
              t("Toma la materialidad ya calculada.", "Take the materiality already computed."),
              t("Convierte el porcentaje a decimal: 3 % = 0.03.", "Convert the percentage to a decimal: 3% = 0.03."),
              t("Multiplica: el resultado es el umbral; los errores menores no se acumulan.", "Multiply: the result is the threshold; smaller errors are not accumulated."),
            ],
            example: t(
              "Con materialidad de $60,000 y un 3 % de ejemplo: 60,000 × 0.03 = **$1,800**. Un error de $900 no se acumula; uno de $5,000 sí se anota.",
              "With $60,000 materiality and an example 3%: 60,000 × 0.03 = **$1,800**. A $900 error is not accumulated; a $5,000 one is recorded.",
            ),
            mistake: t(
              "Calcularlo sobre la utilidad o sobre la materialidad de ejecución. Aquí se parte de la materialidad.",
              "Computing it on profit or on performance materiality. Here you start from materiality.",
            ),
          },
        ],
      },
      {
        heading: t("¿Cuánto debe probar el auditor?", "How much should the auditor test?"),
        body: [
          t(
            "En palabras sencillas: el auditor nunca está 100 % seguro, así que decide cuánta probabilidad de equivocarse acepta y, con eso, cuánto trabajo hacer. Los riesgos se expresan como porcentajes (probabilidades): 5 % quiere decir «5 de cada 100 veces». El **riesgo de auditoría** es el riesgo de dar una opinión limpia cuando los estados sí tienen un error material. Se descompone en tres: el **riesgo inherente** (qué tan propensa es la cuenta a errores antes de controles, como un inventario de joyería), el **riesgo de control** (que los controles de la empresa no prevengan o detecten el error) y el **riesgo de detección** (que las pruebas del auditor no lo encuentren).",
            "In simple words: the auditor is never 100% sure, so she decides how much probability of being wrong she accepts and, from that, how much work to do. Risks are expressed as percentages (probabilities): 5% means \"5 times out of 100\". **Audit risk** is the risk of giving a clean opinion when the statements do contain a material error. It breaks into three: **inherent risk** (how prone the account is to error before controls, such as jewelry inventory), **control risk** (that the company's controls do not prevent or detect the error) and **detection risk** (that the auditor's tests do not find it).",
          ),
          t(
            "El auditor no controla los dos primeros: solo los evalúa. Lo que sí controla es el **riesgo de detección**, ajustando cuánto y cómo prueba. Si el riesgo inherente y el de control son altos, el riesgo de detección aceptable debe ser **bajo**, y eso significa **más pruebas**, más grandes o más cerca del cierre.",
            "The auditor does not control the first two: it only assesses them. What it does control is **detection risk**, by adjusting how much and how it tests. If inherent and control risk are high, acceptable detection risk must be **low**, which means **more tests**, larger samples or testing closer to year-end.",
          ),
          t(
            "Hay dos familias de pruebas. Las **pruebas de controles** verifican que un control funcione (¿el gerente sí firmó las órdenes de compra?). Los **procedimientos sustantivos** buscan errores en las cifras: **pruebas de detalle** (revisar facturas, confirmar saldos) y **procedimientos analíticos** (comparar tendencias y razones). Mini ejemplo: si las ventas subieron 40 % pero los clientes no crecieron, el auditor investiga por qué.",
            "There are two families of tests. **Tests of controls** check that a control works (did the manager actually sign the purchase orders?). **Substantive procedures** look for errors in the figures: **tests of details** (reviewing invoices, confirming balances) and **analytical procedures** (comparing trends and ratios). Mini example: if sales rose 40% but customers did not grow, the auditor investigates why.",
          ),
        ],
        formulas: [
          {
            name: t("Riesgo de detección aceptable (modelo de riesgo de auditoría)", "Acceptable detection risk (audit risk model)"),
            expression: "RA = RI × RC × RD  →  RD = RA ÷ (RI × RC)",
            variables: [
              { symbol: "RA", meaning: t("Riesgo de auditoría: la probabilidad total de equivocarse que el auditor está dispuesto a aceptar, en % (por ejemplo, 5 %).", "Audit risk: the total probability of being wrong the auditor is willing to accept, in % (for example, 5%).") },
              { symbol: "RI", meaning: t("Riesgo inherente: qué tan propensa a errores es la cuenta por su naturaleza, antes de controles, en %.", "Inherent risk: how error-prone the account is by nature, before controls, in %.") },
              { symbol: "RC", meaning: t("Riesgo de control: probabilidad de que los controles de la empresa no frenen ni detecten el error, en %.", "Control risk: probability that the company's controls neither stop nor detect the error, in %.") },
              { symbol: "RD", meaning: t("Riesgo de detección: probabilidad de que las pruebas del auditor no encuentren el error, en %. Es lo que se despeja.", "Detection risk: probability that the auditor's tests do not find the error, in %. It is what you solve for.") },
            ],
            steps: [
              t("Convierte los tres porcentajes a decimal: 5 % = 0.05, 60 % = 0.60, 50 % = 0.50.", "Convert the three percentages to decimals: 5% = 0.05, 60% = 0.60, 50% = 0.50."),
              t("Multiplica RI × RC (los riesgos que el auditor solo evalúa).", "Multiply IR × CR (the risks the auditor only assesses)."),
              t("Divide RA entre ese producto: el resultado es RD en decimal.", "Divide AR by that product: the result is DR as a decimal."),
              t("Multiplica por 100 para expresarlo en porcentaje.", "Multiply by 100 to express it as a percentage."),
            ],
            example: t(
              "Un auditor quiere RA = 5 % y evalúa RI = 60 % y RC = 50 %. Decimales: 0.05, 0.60 y 0.50. Producto: 0.60 × 0.50 = 0.30. División: 0.05 ÷ 0.30 = 0.1667. Porcentaje: **16.7 %** de riesgo de detección aceptable.",
              "An auditor wants AR = 5% and assesses IR = 60% and CR = 50%. Decimals: 0.05, 0.60 and 0.50. Product: 0.60 × 0.50 = 0.30. Division: 0.05 ÷ 0.30 = 0.1667. Percentage: **16.7%** acceptable detection risk.",
            ),
            interpret: t(
              "Un RD **bajo** significa que el auditor casi no puede fallar en sus pruebas: necesita **más** pruebas sustantivas, muestras más grandes o pruebas cerca del cierre. Un RD **alto** permite hacer menos.",
              "A **low** DR means the auditor can hardly afford to miss anything: she needs **more** substantive tests, larger samples or testing near year-end. A **high** DR allows doing less.",
            ),
            mistake: t(
              "Multiplicar los tres valores (RA × RI × RC) en lugar de dividir RA entre RI × RC, o meter la materialidad (que es un monto en pesos, no una probabilidad).",
              "Multiplying all three values (AR × IR × CR) instead of dividing AR by IR × CR, or putting materiality in (it is a peso amount, not a probability).",
            ),
          },
        ],
      },
    ],
    examples: [
      {
        title: t("Fijar la materialidad de una mueblería", "Setting materiality for a furniture store"),
        problem: t(
          "Una mueblería de Guadalajara tiene utilidad antes de impuestos de $3,600,000 (cifra hipotética). El auditor elige 5 % sobre esa base, materialidad de ejecución de 75 % y un umbral de claramente insignificante de 5 % de la materialidad. Calcula los tres montos.",
          "A furniture store in Guadalajara has profit before tax of $3,600,000 (hypothetical figure). The auditor chooses 5% of that benchmark, performance materiality at 75% and a clearly-trivial threshold of 5% of materiality. Compute the three amounts.",
        ),
        steps: [
          t("Materialidad = 3,600,000 × 5 % = $180,000.", "Materiality = 3,600,000 × 5% = $180,000."),
          t("Materialidad de ejecución = 180,000 × 75 % = $135,000.", "Performance materiality = 180,000 × 75% = $135,000."),
          t("Claramente insignificante = 180,000 × 5 % = $9,000.", "Clearly trivial = 180,000 × 5% = $9,000."),
          t("Uso: las pruebas se diseñan con $135,000; diferencias menores a $9,000 no se acumulan.", "Use: tests are designed with $135,000; differences below $9,000 are not accumulated."),
        ],
        result: t(
          "Materialidad $180,000; ejecución $135,000; claramente insignificante $9,000. Los porcentajes son ilustrativos: el auditor los justifica con su juicio.",
          "Materiality $180,000; performance $135,000; clearly trivial $9,000. Percentages are illustrative: the auditor justifies them with judgment.",
        ),
      },
      {
        title: t("¿Cuánto riesgo de detección puedo aceptar?", "How much detection risk can I accept?"),
        problem: t(
          "El auditor quiere un riesgo de auditoría de 5 %. Evalúa el inventario de una ferretería con riesgo inherente de 80 % y riesgo de control de 50 %. ¿Cuál es el riesgo de detección aceptable y qué implica?",
          "The auditor wants 5% audit risk. She assesses a hardware store's inventory with 80% inherent risk and 50% control risk. What is the acceptable detection risk and what does it imply?",
        ),
        steps: [
          t("Fórmula: RD = RA ÷ (RI × RC).", "Formula: DR = AR ÷ (IR × CR)."),
          t("RI × RC = 0.80 × 0.50 = 0.40.", "IR × CR = 0.80 × 0.50 = 0.40."),
          t("RD = 0.05 ÷ 0.40 = 0.125 = 12.5 %.", "DR = 0.05 ÷ 0.40 = 0.125 = 12.5%."),
          t("Si los controles fueran mejores (RC = 25 %), RD sería 0.05 ÷ 0.20 = 25 %: se podrían hacer menos pruebas sustantivas.", "If controls were better (CR = 25%), DR would be 0.05 ÷ 0.20 = 25%: fewer substantive tests could be done."),
        ],
        result: t(
          "Riesgo de detección aceptable de 12.5 %: es bajo, así que el auditor necesita pruebas sustantivas amplias sobre el inventario (por ejemplo, observar el conteo al cierre con una muestra grande).",
          "Acceptable detection risk of 12.5%: it is low, so the auditor needs extensive substantive tests on inventory (for example, observing the year-end count with a large sample).",
        ),
      },
    ],
    keyPoints: [
      t("Etapas: aceptación y carta convenio, planeación, ejecución y conclusión.", "Stages: acceptance and engagement letter, planning, execution and conclusion."),
      t("La planeación se actualiza durante toda la auditoría.", "Planning is updated throughout the audit."),
      t("Materialidad = base × porcentaje con juicio; la de ejecución es menor para dejar colchón.", "Materiality = benchmark × percentage with judgment; performance materiality is lower to leave a cushion."),
      t("RA = RI × RC × RD; el auditor solo controla el riesgo de detección.", "AR = IR × CR × DR; the auditor only controls detection risk."),
      t("Más riesgo inherente y de control → menos riesgo de detección aceptable → más pruebas.", "Higher inherent and control risk → lower acceptable detection risk → more testing."),
      t("Pruebas de controles revisan controles; los sustantivos buscan errores en las cifras.", "Tests of controls check controls; substantive procedures look for errors in figures."),
    ],
    normativeNote: NOTE_PLAN,
    exerciseIds: ['AUD-03-E1', 'AUD-03-E2', 'AUD-03-E4', 'AUD-03-E5', 'AUD-03-E6'],
  },

  // ───────────────────────────── AUD-04 ─────────────────────────────
  {
    id: 'AUD-04',
    level: 5,
    topicIds: ['AUD.4'],
    title: t("Evidencia y documentación de auditoría", "Audit evidence and documentation"),
    summary: t(
      "La opinión del auditor vale lo que vale su evidencia: debe ser suficiente y adecuada, se obtiene con procedimientos como inspección, observación, confirmación o recálculo, y queda registrada en papeles de trabajo que otro auditor pueda entender.",
      "The auditor's opinion is only as good as its evidence: it must be sufficient and appropriate, is obtained through procedures such as inspection, observation, confirmation or recalculation, and is recorded in working papers that another auditor can understand.",
    ),
    minutes: 11,
    objectives: [
      t("Explicar qué hace que la evidencia sea suficiente y adecuada.", "Explain what makes evidence sufficient and appropriate."),
      t("Ordenar fuentes de evidencia según su confiabilidad.", "Rank sources of evidence by their reliability."),
      t("Identificar los procedimientos para obtener evidencia y proyectar el error de una muestra.", "Identify procedures to obtain evidence and project the error found in a sample."),
      t("Describir cómo se elaboran, organizan y conservan los papeles de trabajo.", "Describe how working papers are prepared, organized and retained."),
    ],
    theory: [
      {
        heading: t("¿Qué prueba sirve de verdad?", "Which evidence really counts?"),
        body: [
          t(
            "La **evidencia de auditoría** es toda la información que usa el auditor para llegar a su opinión: facturas, contratos, estados de cuenta, respuestas de terceros, conteos físicos, entrevistas. Debe ser **suficiente** (cantidad: ¿tengo bastante?) y **adecuada** (calidad: ¿es relevante y confiable?).",
            "**Audit evidence** is all the information the auditor uses to reach an opinion: invoices, contracts, statements, third-party replies, physical counts, interviews. It must be **sufficient** (quantity: do I have enough?) and **appropriate** (quality: is it relevant and reliable?).",
          ),
          t(
            "La cantidad y la calidad se compensan solo en parte: mucha evidencia mala **no** sustituye a poca evidencia buena. La **relevancia** depende de lo que se quiere probar: ver un camión en el patio prueba que existe, pero no que sea de la empresa; para eso se revisa la factura o la tarjeta de circulación.",
            "Quantity and quality only partly offset each other: a lot of poor evidence does **not** replace a little good evidence. **Relevance** depends on what you want to prove: seeing a truck in the yard proves it exists, but not that the company owns it; for that you check the invoice or registration card.",
          ),
          t(
            "Mini ejemplo: para el saldo bancario de una tortillería, el auditor tiene la conciliación hecha por el contador (interna) y además pide al banco que confirme el saldo directo a él (externa). La confirmación del banco pesa más porque viene de un tercero independiente.",
            "Mini example: for a tortilla shop's bank balance, the auditor has the reconciliation prepared by the accountant (internal) and also asks the bank to confirm the balance directly to her (external). The bank's confirmation weighs more because it comes from an independent third party.",
          ),
        ],
        bullets: [
          t("Externa e independiente es más confiable que la generada por la empresa.", "External and independent is more reliable than company-generated evidence."),
          t("Obtenida directamente por el auditor vale más que la obtenida de forma indirecta.", "Obtained directly by the auditor is worth more than evidence obtained indirectly."),
          t("Documental (papel o electrónica) vale más que la verbal.", "Documentary (paper or electronic) is worth more than oral."),
          t("Original vale más que una fotocopia o un escaneo.", "Originals are worth more than photocopies or scans."),
          t("La interna es más confiable cuando los controles de la empresa son buenos.", "Internal evidence is more reliable when the company's controls are good."),
        ],
      },
      {
        heading: t("¿Cómo junta pruebas el auditor?", "How does the auditor gather evidence?"),
        body: [
          t(
            "El auditor tiene una «caja de herramientas»: **inspección** (revisar documentos o activos), **observación** (ver un proceso mientras ocurre, como el conteo de inventario), **indagación** (preguntar), **confirmación externa** (un tercero responde directo al auditor), **recálculo** (rehacer una cuenta), **reejecución** (repetir un control por su cuenta) y **procedimientos analíticos** (comparar cifras y tendencias).",
            "The auditor has a \"toolbox\": **inspection** (examining documents or assets), **observation** (watching a process as it happens, like an inventory count), **inquiry** (asking), **external confirmation** (a third party replies directly to the auditor), **recalculation** (redoing a computation), **reperformance** (independently executing a control again) and **analytical procedures** (comparing figures and trends).",
          ),
          t(
            "La **indagación sola casi nunca basta**: lo que dice la administración se corrobora con otra evidencia. Como no se puede revisar todo, se usa el **muestreo**: elegir parte de una población (por ejemplo, 60 de 5,000 facturas) de forma que represente al total y luego **proyectar** el resultado.",
            "**Inquiry alone is almost never enough**: what management says is corroborated with other evidence. Since not everything can be reviewed, **sampling** is used: choosing part of a population (for example, 60 of 5,000 invoices) so that it represents the whole, then **projecting** the result.",
          ),
          t(
            "Una forma sencilla de proyectar es la **razón**: si en la muestra el error es 2 % del monto revisado, se estima que la población tiene un error parecido. Mini ejemplo: una muestra de facturas por $400,000 tiene $6,000 de error (1.5 %); si la población es de $8,000,000, el error proyectado es $120,000.",
            "A simple way to project is the **ratio**: if the error in the sample is 2% of the amount reviewed, the population is estimated to have a similar error. Mini example: a sample of invoices totaling $400,000 has $6,000 of error (1.5%); if the population is $8,000,000, the projected error is $120,000.",
          ),
        ],
        formulas: [
          {
            name: t("Error proyectado con el método de razón", "Projected error using the ratio method"),
            expression: "Error proyectado = (Error en la muestra ÷ Monto de la muestra) × Monto de la población",
            variables: [
              { symbol: "Error proyectado", meaning: t("El error que se estima que hay en toda la cuenta, en pesos.", "The error estimated to exist in the whole account, in pesos.") },
              { symbol: "Error en la muestra", meaning: t("La suma de los errores que el auditor encontró en las partidas que revisó, en pesos.", "The sum of the errors the auditor found in the items reviewed, in pesos.") },
              { symbol: "Monto de la muestra", meaning: t("El total en pesos de las partidas revisadas (por ejemplo, las facturas elegidas).", "The total in pesos of the items reviewed (for example, the invoices chosen).") },
              { symbol: "Monto de la población", meaning: t("El total en pesos de toda la cuenta de donde salió la muestra (por ejemplo, todas las ventas del año).", "The total in pesos of the whole account the sample came from (for example, all sales for the year).") },
            ],
            steps: [
              t("Calcula la tasa de error de la muestra: error en la muestra ÷ monto de la muestra.", "Compute the sample's error rate: error in the sample ÷ sample amount."),
              t("Multiplica esa tasa por el monto de la población.", "Multiply that rate by the population amount."),
              t("Compara el error proyectado con la materialidad de ejecución.", "Compare the projected error with performance materiality."),
            ],
            example: t(
              "Una papelería mayorista vende $6,000,000 en el año. El auditor revisa facturas por $200,000 y encuentra $3,000 de error. Tasa: 3,000 ÷ 200,000 = 0.015 (1.5 %). Proyección: 0.015 × 6,000,000 = **$90,000** de error estimado en todas las ventas.",
              "A wholesale stationery business sells $6,000,000 in the year. The auditor reviews invoices for $200,000 and finds $3,000 of error. Rate: 3,000 ÷ 200,000 = 0.015 (1.5%). Projection: 0.015 × 6,000,000 = **$90,000** estimated error in all sales.",
            ),
            interpret: t(
              "Si el error proyectado es menor que la materialidad de ejecución, la cuenta probablemente está bien; si es mayor, hace falta más trabajo (ampliar la muestra, buscar la causa o pedir un ajuste).",
              "If the projected error is below performance materiality, the account is probably fine; if it is higher, more work is needed (extend the sample, find the cause or request an adjustment).",
            ),
            mistake: t(
              "Quedarse con el error de la muestra ($3,000) y concluir que es pequeño. Lo que importa es cuánto error habría en toda la población.",
              "Stopping at the sample error ($3,000) and concluding it is small. What matters is how much error the whole population would have.",
            ),
          },
        ],
      },
      {
        heading: t("Si no se anota, no pasó", "Not written down, not done"),
        body: [
          t(
            "Los **papeles de trabajo** son el registro de lo que hizo el auditor: qué pruebas aplicó, cuándo, sobre qué partidas, qué encontró y qué concluyó. La regla de oro: un **auditor experimentado que no participó** debe poder entenderlos sin preguntar nada. Si no está documentado, para efectos prácticos no se hizo.",
            "**Working papers** are the record of what the auditor did: which tests were applied, when, on which items, what was found and what was concluded. The golden rule: an **experienced auditor who did not take part** must be able to understand them without asking anything. If it is not documented, for practical purposes it was not done.",
          ),
          t(
            "Se organizan con un **índice** (por ejemplo, A = efectivo, B = clientes), con **referencias cruzadas** entre cédulas y con **marcas de auditoría** (símbolos como ✓ que significan «cotejado contra factura»). Cada cédula dice quién la preparó, quién la revisó y en qué fecha. Hay un **archivo permanente** (escritura, contratos de largo plazo) y un **archivo del ejercicio**.",
            "They are organized with an **index** (for example, A = cash, B = receivables), **cross-references** between schedules and **tick marks** (symbols such as ✓ meaning \"agreed to invoice\"). Each schedule states who prepared it, who reviewed it and when. There is a **permanent file** (articles of incorporation, long-term contracts) and a **current-year file**.",
          ),
          t(
            "Los papeles son **propiedad del auditor**, son **confidenciales** y deben cerrarse y conservarse por el plazo que pidan las normas, las políticas de la firma y la ley. Después de cerrar el archivo no se borra ni se cambia nada; si hace falta agregar algo, se documenta quién lo hizo, cuándo y por qué. Mini ejemplo: la cédula B-1 suma los saldos de clientes y remite a B-2, donde están las confirmaciones recibidas.",
            "Working papers are **owned by the auditor**, are **confidential** and must be assembled and retained for the period required by standards, firm policy and law. After the file is closed nothing is deleted or changed; if something must be added, who did it, when and why are documented. Mini example: schedule B-1 totals customer balances and cross-references to B-2, where the confirmations received are filed.",
          ),
        ],
        bullets: [
          t("Objetivo de la prueba, partidas revisadas y criterio de selección.", "Objective of the test, items reviewed and selection criterion."),
          t("Resultados, excepciones y conclusión.", "Results, exceptions and conclusion."),
          t("Quién preparó, quién revisó y fechas.", "Who prepared, who reviewed and dates."),
          t("Índice, referencias cruzadas y significado de cada marca.", "Index, cross-references and meaning of each tick mark."),
        ],
      },
    ],
    examples: [
      {
        title: t("Proyectar el error de una muestra de compras", "Projecting the error from a purchases sample"),
        problem: t(
          "En una comercializadora de café en Veracruz, las compras del año suman $12,000,000. El auditor revisa una muestra de facturas por $600,000 y encuentra compras registradas de más por $9,000. La materialidad de ejecución es $150,000 (cifras hipotéticas). ¿Cuál es el error proyectado y qué concluye?",
          "At a coffee trader in Veracruz, purchases for the year total $12,000,000. The auditor reviews a sample of invoices totaling $600,000 and finds purchases overstated by $9,000. Performance materiality is $150,000 (hypothetical figures). What is the projected error and what does she conclude?",
        ),
        steps: [
          t("Tasa de error en la muestra = 9,000 ÷ 600,000 = 1.5 %.", "Error rate in the sample = 9,000 ÷ 600,000 = 1.5%."),
          t("Error proyectado = 1.5 % × 12,000,000 = $180,000.", "Projected error = 1.5% × 12,000,000 = $180,000."),
          t("Comparación: $180,000 es mayor que la materialidad de ejecución de $150,000.", "Comparison: $180,000 is greater than performance materiality of $150,000."),
          t("Respuesta: ampliar la muestra, buscar la causa del error y pedir a la empresa que revise la población.", "Response: extend the sample, find the cause of the error and ask the company to review the population."),
        ],
        result: t(
          "El error proyectado de $180,000 rebasa la materialidad de ejecución: la evidencia todavía no es suficiente para concluir que las compras están bien y se necesita más trabajo.",
          "The projected error of $180,000 exceeds performance materiality: the evidence is not yet sufficient to conclude that purchases are fairly stated, and more work is needed.",
        ),
      },
      {
        title: t("Elegir la mejor evidencia", "Choosing the best evidence"),
        problem: t(
          "Para comprobar que un cliente le debe $250,000 a una imprenta, el auditor tiene: (1) lo que dice el gerente de cobranza, (2) una copia de la factura en el archivo de la empresa y (3) la respuesta firmada del cliente enviada directo al auditor. Ordénalas de más a menos confiable.",
          "To verify that a customer owes a print shop $250,000, the auditor has: (1) what the collections manager says, (2) a copy of the invoice in the company's file and (3) the customer's signed reply sent directly to the auditor. Rank them from most to least reliable.",
        ),
        steps: [
          t("La confirmación del cliente es externa, independiente, documental y llegó directo al auditor: es la más confiable.", "The customer's confirmation is external, independent, documentary and came directly to the auditor: it is the most reliable."),
          t("La copia de la factura es documental, pero interna y es copia: confiabilidad media.", "The invoice copy is documentary, but internal and a copy: medium reliability."),
          t("Lo que dice el gerente es verbal e interno: la menos confiable y debe corroborarse.", "What the manager says is oral and internal: the least reliable and must be corroborated."),
        ],
        result: t(
          "Orden: confirmación del cliente > copia de factura > dicho del gerente. Lo ideal es combinarlas y documentarlas en la cédula de clientes con su referencia cruzada.",
          "Order: customer confirmation > invoice copy > manager's statement. Ideally they are combined and documented in the receivables schedule with cross-references.",
        ),
      },
    ],
    keyPoints: [
      t("La evidencia debe ser suficiente (cantidad) y adecuada (relevante y confiable).", "Evidence must be sufficient (quantity) and appropriate (relevant and reliable)."),
      t("Externa, directa, documental y original es más confiable.", "External, direct, documentary and original evidence is more reliable."),
      t("Procedimientos: inspección, observación, indagación, confirmación, recálculo, reejecución y analíticos.", "Procedures: inspection, observation, inquiry, confirmation, recalculation, reperformance and analytical."),
      t("La indagación sola casi nunca basta.", "Inquiry alone is almost never enough."),
      t("El error de una muestra se proyecta a la población antes de concluir.", "A sample's error is projected to the population before concluding."),
      t("Papeles de trabajo: claros para un auditor experimentado ajeno, propiedad del auditor y confidenciales.", "Working papers: clear to an experienced outside auditor, owned by the auditor and confidential."),
    ],
    normativeNote: NOTE_EVID,
    exerciseIds: ['AUD-04-E2', 'AUD-04-E3', 'AUD-04-E4', 'AUD-04-E5', 'AUD-04-E6'],
  },

  // ───────────────────────────── AUD-05 ─────────────────────────────
  {
    id: 'AUD-05',
    level: 5,
    topicIds: ['AUD.5'],
    title: t("Control interno", "Internal control"),
    summary: t(
      "El control interno es el conjunto de actividades que la propia empresa pone en marcha para lograr sus objetivos con menos sorpresas: hay controles preventivos, detectivos y correctivos, manuales y automáticos, y todos deben estar bien diseñados y funcionar en la práctica.",
      "Internal control is the set of activities a company puts in place to achieve its objectives with fewer surprises: there are preventive, detective and corrective controls, manual and automated, and all must be well designed and work in practice.",
    ),
    minutes: 11,
    objectives: [
      t("Definir control interno y explicar para qué le sirve a una empresa.", "Define internal control and explain what it does for a company."),
      t("Clasificar controles en preventivos, detectivos y correctivos, y en manuales o automáticos.", "Classify controls as preventive, detective and corrective, and as manual or automated."),
      t("Aplicar los controles básicos: segregación de funciones, autorizaciones, conciliaciones y resguardo físico.", "Apply basic controls: segregation of duties, authorizations, reconciliations and physical safeguards."),
      t("Distinguir diseño de operación de un control y calcular una tasa de desviación.", "Distinguish a control's design from its operation and compute a deviation rate."),
    ],
    theory: [
      {
        heading: t("¿Cómo cuida Marta su negocio?", "How does Marta protect her business?"),
        body: [
          t(
            "El **control interno** es un proceso que diseñan y ejecutan el consejo, la dirección y todo el personal para dar **seguridad razonable** de que la empresa logrará sus objetivos: operar bien, tener información confiable y cumplir leyes. No es un departamento ni un manual guardado en un cajón: es lo que la gente hace todos los días.",
            "**Internal control** is a process designed and carried out by the board, management and all personnel to provide **reasonable assurance** that the company will achieve its objectives: operate well, have reliable information and comply with laws. It is not a department or a manual kept in a drawer: it is what people do every day.",
          ),
          t(
            "Un **control** es una acción concreta que reduce un **riesgo** (algo que podría salir mal). Primero se piensa en el riesgo y luego en el control. Mini ejemplo: en una cafetería, el riesgo es que el cajero se quede con efectivo; el control es que cada venta se registre en la caja y que al cierre otra persona cuente el efectivo contra el reporte del sistema.",
            "A **control** is a specific action that reduces a **risk** (something that could go wrong). First you think of the risk, then of the control. Mini example: in a coffee shop, the risk is that the cashier keeps cash; the control is that every sale is rung up and at closing another person counts the cash against the system report.",
          ),
          t(
            "El control interno tiene **limitaciones**: las personas se equivocan o se cansan, dos empleados pueden ponerse de acuerdo para saltarse un control (**colusión**), un directivo puede ignorarlo (**elusión por la dirección**) y algunos controles cuestan más de lo que protegen. Por eso da seguridad razonable, nunca absoluta.",
            "Internal control has **limitations**: people make mistakes or get tired, two employees can agree to get around a control (**collusion**), an executive can ignore it (**management override**) and some controls cost more than what they protect. That is why it gives reasonable, never absolute, assurance.",
          ),
        ],
        bullets: [
          t("Lo hacen personas en todos los niveles, no solo contabilidad.", "It is performed by people at all levels, not just accounting."),
          t("Parte de un riesgo y responde con un control.", "It starts from a risk and responds with a control."),
          t("Da seguridad razonable, no absoluta.", "It gives reasonable, not absolute, assurance."),
          t("Su costo no debe superar el beneficio que da.", "Its cost should not exceed the benefit it provides."),
        ],
      },
      {
        heading: t("¿Evitar, detectar o reparar?", "Prevent, detect or fix?"),
        body: [
          t(
            "Por su momento, un control puede ser **preventivo** (evita que el error ocurra, como pedir dos firmas para un pago grande), **detectivo** (lo descubre después, como la conciliación bancaria mensual) o **correctivo** (repara el daño, como restaurar datos desde un respaldo). Por su forma, puede ser **manual** (lo hace una persona) o **automático** (lo hace el sistema, como bloquear una factura duplicada).",
            "By timing, a control can be **preventive** (stops the error from happening, such as requiring two signatures for a large payment), **detective** (discovers it afterward, such as the monthly bank reconciliation) or **corrective** (repairs the damage, such as restoring data from a backup). By form, it can be **manual** (done by a person) or **automated** (done by the system, such as blocking a duplicate invoice).",
          ),
          t(
            "La **segregación de funciones** es el control más importante en una pyme: separar **autorizar**, **registrar** y **custodiar** un mismo activo. Si una sola persona hace las tres, puede cometer y esconder un error o un robo. Otros controles clave: **autorizaciones** con límites, **conciliaciones**, **resguardo físico** (cajas fuertes, almacén con llave), **documentos prenumerados** y **conteos físicos** periódicos.",
            "**Segregation of duties** is the most important control in a small business: separating **authorizing**, **recording** and **custody** of the same asset. If a single person does all three, they can commit and hide an error or theft. Other key controls: **authorizations** with limits, **reconciliations**, **physical safeguards** (safes, locked warehouse), **prenumbered documents** and periodic **physical counts**.",
          ),
          t(
            "Mini ejemplo: en una tienda de materiales de construcción, el vendedor autoriza descuentos, el cajero cobra y registra, y el almacenista entrega la mercancía contra la nota pagada. Si el vendedor también cobrara y entregara, podría regalar material a un conocido sin que nadie lo note.",
            "Mini example: at a building-materials store, the salesperson approves discounts, the cashier collects and records, and the warehouse clerk releases goods against the paid ticket. If the salesperson also collected and released goods, he could give material away to a friend without anyone noticing.",
          ),
        ],
        bullets: [
          t("Preventivo: evita el error antes de que pase.", "Preventive: stops the error before it happens."),
          t("Detectivo: lo encuentra después de que pasó.", "Detective: finds it after it happened."),
          t("Correctivo: repara el efecto del error.", "Corrective: repairs the effect of the error."),
          t("Segregación: autorizar, registrar y custodiar por personas distintas.", "Segregation: authorizing, recording and custody by different people."),
        ],
      },
      {
        heading: t("¿El control sí se cumple?", "Is the control really applied?"),
        body: [
          t(
            "Un control se evalúa en dos pasos. **Diseño**: ¿si funcionara como está escrito, reduciría el riesgo? **Operación (eficacia operativa)**: ¿de verdad se aplica siempre, por la persona correcta y a tiempo? Un control puede estar muy bien diseñado en el papel y no aplicarse en la práctica.",
            "A control is assessed in two steps. **Design**: if it worked as written, would it reduce the risk? **Operation (operating effectiveness)**: is it really applied every time, by the right person and on time? A control can be very well designed on paper and not be applied in practice.",
          ),
          t(
            "Para probar la operación se revisa una muestra de casos y se cuentan las **desviaciones** (veces que el control no se aplicó). La **tasa de desviación** se compara con una **tasa tolerable** fijada de antemano. Si la rebasa, se concluye que el control no es confiable.",
            "To test operation, a sample of cases is reviewed and **deviations** (times the control was not applied) are counted. The **deviation rate** is compared with a **tolerable rate** set in advance. If it exceeds it, the control is concluded to be unreliable.",
          ),
          t(
            "Cuando un control falta, está mal diseñado o no opera, hay una **deficiencia de control**. Las más graves (**deficiencias significativas**) se comunican por escrito al gobierno de la entidad. Mini ejemplo: de 50 órdenes de compra revisadas, 3 no tienen la firma del gerente: tasa de desviación de 6 %; si la tolerable es 5 %, el control no es confiable.",
            "When a control is missing, poorly designed or not operating, there is a **control deficiency**. The most serious (**significant deficiencies**) are communicated in writing to those charged with governance. Mini example: of 50 purchase orders reviewed, 3 lack the manager's signature: a 6% deviation rate; if the tolerable rate is 5%, the control is not reliable.",
          ),
        ],
        formulas: [
          {
            name: t("Tasa de desviación de un control", "Deviation rate of a control"),
            expression: "Tasa de desviación (%) = Casos sin control aplicado ÷ Casos revisados × 100",
            variables: [
              { symbol: "Tasa de desviación (%)", meaning: t("Qué porcentaje de las veces el control no se aplicó.", "What percentage of the time the control was not applied.") },
              { symbol: "Casos sin control aplicado", meaning: t("Cuántos casos de la muestra no tenían el control (por ejemplo, órdenes sin firma). Se llaman desviaciones.", "How many cases in the sample lacked the control (for example, orders without a signature). They are called deviations.") },
              { symbol: "Casos revisados", meaning: t("El total de casos de la muestra, con y sin control.", "The total cases in the sample, with and without the control.") },
              { symbol: "× 100", meaning: t("Convierte el resultado decimal en porcentaje.", "Turns the decimal result into a percentage.") },
            ],
            steps: [
              t("Cuenta las desviaciones encontradas en la muestra.", "Count the deviations found in the sample."),
              t("Divídelas entre **todos** los casos revisados y multiplica por 100.", "Divide them by **all** cases reviewed and multiply by 100."),
              t("Compara con la tasa tolerable fijada de antemano: si la tasa de desviación es mayor, el control no es confiable.", "Compare with the tolerable rate set in advance: if the deviation rate is higher, the control is not reliable."),
            ],
            example: t(
              "Se revisan 60 notas de crédito y 4 no tienen la autorización del gerente. División: 4 ÷ 60 = 0.0667. Porcentaje: 0.0667 × 100 = **6.7 %**. Con una tasa tolerable de 5 %: 6.7 % > 5 %, el control no es confiable.",
              "60 credit notes are reviewed and 4 lack the manager's approval. Division: 4 ÷ 60 = 0.0667. Percentage: 0.0667 × 100 = **6.7%**. With a 5% tolerable rate: 6.7% > 5%, the control is not reliable.",
            ),
            interpret: t(
              "Tasa por debajo de la tolerable: el control opera y el auditor puede apoyarse en él. Por encima: no se confía en el control y se hacen más pruebas sustantivas.",
              "Rate below the tolerable rate: the control operates and the auditor can rely on it. Above it: the control is not relied on and more substantive tests are done.",
            ),
            mistake: t(
              "Dividir entre los casos correctos (4 ÷ 56) en lugar de entre todos los revisados (4 ÷ 60).",
              "Dividing by the correct cases (4 ÷ 56) instead of by all cases reviewed (4 ÷ 60).",
            ),
          },
        ],
      },
    ],
    examples: [
      {
        title: t("Separar funciones en una papelería", "Separating duties in a stationery store"),
        problem: t(
          "En una papelería de Mérida, la misma empleada recibe la mercancía, captura las facturas de proveedores y prepara los cheques que el dueño firma sin ver soporte. ¿Qué riesgo hay y cómo redistribuir las tareas si solo hay tres personas?",
          "At a stationery store in Mérida, the same employee receives goods, enters supplier invoices and prepares checks that the owner signs without seeing support. What is the risk and how can duties be redistributed if there are only three people?",
        ),
        steps: [
          t("Riesgo: puede registrar facturas de mercancía que nunca llegó y pagarlas, porque controla recepción, registro y pago.", "Risk: she can record invoices for goods that never arrived and pay them, because she controls receiving, recording and payment."),
          t("Custodia: el encargado de piso recibe la mercancía y firma la nota de entrada.", "Custody: the floor supervisor receives the goods and signs the receiving note."),
          t("Registro: la empleada captura la factura solo si tiene la nota de entrada firmada.", "Recording: the employee enters the invoice only if there is a signed receiving note."),
          t("Autorización: el dueño firma el cheque solo después de ver factura y nota de entrada juntas.", "Authorization: the owner signs the check only after seeing the invoice and receiving note together."),
        ],
        result: t(
          "Con tres personas se separan custodia, registro y autorización. El control preventivo (firma con soporte) se complementa con uno detectivo: el dueño revisa cada mes el estado de cuenta bancario.",
          "With three people, custody, recording and authorization are separated. The preventive control (signing with support) is complemented by a detective one: the owner reviews the bank statement each month.",
        ),
      },
      {
        title: t("Probar el control de autorización de créditos", "Testing the credit approval control"),
        problem: t(
          "Una distribuidora de electrodomésticos exige que el jefe de crédito autorice por escrito toda venta a crédito mayor de $20,000. El auditor revisa 80 ventas de ese tipo y encuentra 2 sin autorización. La tasa tolerable es de 5 % (cifras hipotéticas). ¿El control es confiable?",
          "An appliance distributor requires the credit manager to approve in writing every credit sale over $20,000. The auditor reviews 80 such sales and finds 2 without approval. The tolerable rate is 5% (hypothetical figures). Is the control reliable?",
        ),
        steps: [
          t("Diseño: exigir autorización previa para ventas grandes reduce el riesgo de clientes incobrables. Está bien diseñado.", "Design: requiring prior approval for large sales reduces the risk of uncollectible customers. It is well designed."),
          t("Tasa de desviación = 2 ÷ 80 × 100 = 2.5 %.", "Deviation rate = 2 ÷ 80 × 100 = 2.5%."),
          t("Comparación: 2.5 % es menor que la tolerable de 5 %.", "Comparison: 2.5% is below the tolerable 5%."),
          t("Aun así, se investigan las 2 excepciones para saber si fueron olvido o un intento de saltarse el control.", "Even so, the 2 exceptions are investigated to learn whether they were an oversight or an attempt to bypass the control."),
        ],
        result: t(
          "El control se considera confiable (2.5 % < 5 %), pero las excepciones se documentan y se comunican a la administración para que las corrija.",
          "The control is considered reliable (2.5% < 5%), but the exceptions are documented and communicated to management for correction.",
        ),
      },
    ],
    keyPoints: [
      t("El control interno es un proceso de toda la organización que da seguridad razonable.", "Internal control is an organization-wide process that gives reasonable assurance."),
      t("Primero se identifica el riesgo y luego el control que lo reduce.", "First identify the risk, then the control that reduces it."),
      t("Preventivo evita, detectivo descubre, correctivo repara.", "Preventive stops, detective finds, corrective repairs."),
      t("Segregación de funciones: autorizar, registrar y custodiar por personas distintas.", "Segregation of duties: authorizing, recording and custody by different people."),
      t("Un control debe estar bien diseñado y además operar; se prueba con la tasa de desviación.", "A control must be well designed and also operate; it is tested with the deviation rate."),
      t("Limitaciones: error humano, colusión, elusión por la dirección y costo-beneficio.", "Limitations: human error, collusion, management override and cost-benefit."),
    ],
    normativeNote: NOTE_CI,
    exerciseIds: ['AUD-05-E1', 'AUD-05-E2', 'AUD-05-E3', 'AUD-05-E4', 'AUD-05-E5'],
  },

  // ───────────────────────────── AUD-06 ─────────────────────────────
  {
    id: 'AUD-06',
    level: 5,
    topicIds: ['AUD.6'],
    title: t("Marco COSO", "The COSO framework"),
    summary: t(
      "El marco COSO organiza el control interno en tres categorías de objetivos, cinco componentes y diecisiete principios; un sistema es eficaz cuando los cinco componentes están presentes, funcionan y operan juntos.",
      "The COSO framework organizes internal control into three categories of objectives, five components and seventeen principles; a system is effective when all five components are present, functioning and operating together.",
    ),
    minutes: 11,
    objectives: [
      t("Explicar qué es COSO y para qué se usa su marco de control interno.", "Explain what COSO is and what its internal control framework is used for."),
      t("Nombrar las tres categorías de objetivos y los cinco componentes.", "Name the three categories of objectives and the five components."),
      t("Asignar situaciones y controles al componente que les corresponde.", "Assign situations and controls to the component they belong to."),
      t("Explicar cuándo un sistema de control interno es eficaz según COSO.", "Explain when an internal control system is effective under COSO."),
    ],
    theory: [
      {
        heading: t("¿Qué es el cubo COSO?", "What is the COSO cube?"),
        body: [
          t(
            "**COSO** es un comité formado por asociaciones profesionales de Estados Unidos (de contadores, auditores internos y directores de finanzas) que publicó el **Marco Integrado de Control Interno**. Es el marco de control interno más usado en el mundo, también en México, por empresas, auditores y entidades públicas. Su versión actualizada es de **2013**.",
            "**COSO** is a committee formed by U.S. professional associations (of accountants, internal auditors and financial executives) that published the **Internal Control–Integrated Framework**. It is the most widely used internal control framework in the world, including Mexico, by companies, auditors and public entities. Its updated version is from **2013**.",
          ),
          t(
            "COSO se dibuja como un **cubo**. En una cara están las **tres categorías de objetivos**: **operativos** (usar bien los recursos), **de información** (reportes confiables, financieros y no financieros, internos y externos) y **de cumplimiento** (seguir leyes y regulaciones). En otra cara, los **cinco componentes**. En la tercera, la **estructura** de la organización: entidad, división, unidad, función.",
            "COSO is drawn as a **cube**. One face shows the **three categories of objectives**: **operations** (using resources well), **reporting** (reliable reports, financial and non-financial, internal and external) and **compliance** (following laws and regulations). Another face shows the **five components**. The third shows the organization's **structure**: entity, division, unit, function.",
          ),
          t(
            "El cubo dice que los cinco componentes aplican a cada objetivo y a cada nivel de la empresa. Mini ejemplo: en una cadena de gimnasios, «cobrar todas las membresías» es objetivo operativo, «reportar bien los ingresos» es de información y «respetar la ley de protección de datos de los socios» es de cumplimiento.",
            "The cube says the five components apply to each objective and to every level of the company. Mini example: at a gym chain, \"collect all memberships\" is an operations objective, \"report revenue correctly\" is a reporting objective and \"respect the members' data protection law\" is a compliance objective.",
          ),
        ],
        bullets: [
          t("Operativos: eficacia y eficiencia, incluido proteger activos.", "Operations: effectiveness and efficiency, including safeguarding assets."),
          t("Información: reportes confiables, oportunos y transparentes.", "Reporting: reliable, timely and transparent reports."),
          t("Cumplimiento: apego a leyes y regulaciones aplicables.", "Compliance: adherence to applicable laws and regulations."),
        ],
      },
      {
        heading: t("Las cinco piezas de COSO", "The five pieces of COSO"),
        body: [
          t(
            "1) **Entorno de control**: la base. Es el «tono desde arriba»: integridad, valores, supervisión del consejo, estructura y responsabilidades claras, y gente competente. 2) **Evaluación de riesgos**: identificar y analizar lo que podría impedir los objetivos, incluido el riesgo de fraude y los cambios importantes.",
            "1) **Control environment**: the foundation. It is the \"tone at the top\": integrity, values, board oversight, clear structure and responsibilities, and competent people. 2) **Risk assessment**: identifying and analyzing what could prevent the objectives, including fraud risk and significant changes.",
          ),
          t(
            "3) **Actividades de control**: las acciones concretas que reducen riesgos (autorizaciones, conciliaciones, segregación, controles de sistemas), plasmadas en políticas y procedimientos. 4) **Información y comunicación**: que la información correcta llegue a la persona correcta a tiempo, dentro y fuera de la empresa. 5) **Actividades de supervisión** (monitoreo): revisar continuamente o de forma periódica que todo lo anterior funcione y corregir deficiencias.",
            "3) **Control activities**: the specific actions that reduce risks (approvals, reconciliations, segregation, system controls), set out in policies and procedures. 4) **Information and communication**: getting the right information to the right person on time, inside and outside the company. 5) **Monitoring activities**: reviewing, continuously or periodically, that all of the above works and correcting deficiencies.",
          ),
          t(
            "Mini ejemplo en un restaurante: el dueño despide a un gerente que maquillaba cortes de caja (entorno); detecta que los robos de insumos son el mayor riesgo (evaluación); exige inventario diario de carnes (actividad de control); el sistema manda un reporte de mermas cada noche (información); y cada mes un contador externo revisa que los inventarios diarios sí se hagan (supervisión).",
            "Mini example at a restaurant: the owner fires a manager who was falsifying cash counts (environment); finds that ingredient theft is the biggest risk (assessment); requires a daily meat inventory (control activity); the system sends a waste report every night (information); and each month an outside accountant checks that the daily counts are really done (monitoring).",
          ),
        ],
        bullets: [
          t("Entorno de control: tono desde arriba y cultura.", "Control environment: tone at the top and culture."),
          t("Evaluación de riesgos: qué podría salir mal.", "Risk assessment: what could go wrong."),
          t("Actividades de control: qué hacemos para evitarlo.", "Control activities: what we do to prevent it."),
          t("Información y comunicación: quién se entera y cuándo.", "Information and communication: who finds out and when."),
          t("Supervisión: ¿sigue funcionando todo?", "Monitoring: is everything still working?"),
        ],
      },
      {
        heading: t("¿Cuándo funciona el control interno?", "When does internal control work?"),
        body: [
          t(
            "La versión 2013 baja los componentes a **17 principios**: 5 del entorno de control (por ejemplo, compromiso con la integridad y valores éticos), 4 de evaluación de riesgos (incluido considerar el riesgo de fraude), 3 de actividades de control (incluidos los controles generales sobre la tecnología), 3 de información y comunicación y 2 de supervisión.",
            "The 2013 version breaks the components down into **17 principles**: 5 for the control environment (for example, commitment to integrity and ethical values), 4 for risk assessment (including considering fraud risk), 3 for control activities (including general controls over technology), 3 for information and communication and 2 for monitoring.",
          ),
          t(
            "Según COSO, un sistema de control interno es **eficaz** cuando los cinco componentes y sus principios están **presentes** (existen en el diseño), **funcionan** (operan en la práctica) y **operan juntos** de forma integrada. Si un componente tiene una **deficiencia grave**, el sistema no puede considerarse eficaz, aunque los demás estén muy bien.",
            "Under COSO, an internal control system is **effective** when the five components and their principles are **present** (exist in the design), **functioning** (operate in practice) and **operate together** in an integrated way. If a component has a **major deficiency**, the system cannot be considered effective, even if the others are very good.",
          ),
          t(
            "No hay que confundirlo con **COSO ERM** (gestión de riesgos empresariales), otro marco del mismo comité que liga el riesgo con la estrategia y el desempeño. El marco de control interno se enfoca en los controles para lograr objetivos ya definidos. Mini ejemplo: una empresa con excelentes conciliaciones pero con un director que ordena registrar ventas falsas tiene un entorno de control deficiente: su control interno no es eficaz.",
            "Do not confuse it with **COSO ERM** (enterprise risk management), another framework from the same committee that links risk with strategy and performance. The internal control framework focuses on controls to achieve already-defined objectives. Mini example: a company with excellent reconciliations but a director who orders fake sales to be recorded has a deficient control environment: its internal control is not effective.",
          ),
        ],
        formulas: [
          {
            name: t("Reparto de los 17 principios de COSO 2013", "Distribution of the 17 COSO 2013 principles"),
            expression: "17 principios = 5 (entorno) + 4 (riesgos) + 3 (actividades) + 3 (información) + 2 (supervisión)",
            variables: [
              { symbol: "5 (entorno)", meaning: t("Principios del entorno de control: integridad, supervisión del consejo, estructura, competencia y rendición de cuentas.", "Control environment principles: integrity, board oversight, structure, competence and accountability.") },
              { symbol: "4 (riesgos)", meaning: t("Principios de evaluación de riesgos, incluido considerar el fraude y los cambios importantes.", "Risk assessment principles, including considering fraud and significant changes.") },
              { symbol: "3 (actividades)", meaning: t("Principios de actividades de control, incluidos los controles sobre la tecnología.", "Control activities principles, including controls over technology.") },
              { symbol: "3 (información)", meaning: t("Principios de información y comunicación (interna y externa).", "Information and communication principles (internal and external).") },
              { symbol: "2 (supervisión)", meaning: t("Principios de actividades de supervisión: evaluar y comunicar deficiencias.", "Monitoring activities principles: evaluating and communicating deficiencies.") },
              { symbol: "17 principios", meaning: t("El total de principios del marco.", "The framework's total number of principles.") },
            ],
            steps: [
              t("Recuerda el orden de los componentes: entorno, riesgos, actividades, información, supervisión.", "Remember the order of the components: environment, risks, activities, information, monitoring."),
              t("Asigna la secuencia 5-4-3-3-2 en ese mismo orden: va bajando, con el 3 repetido.", "Assign the sequence 5-4-3-3-2 in that same order: it goes down, with the 3 repeated."),
              t("Comprueba sumando que el total da 17.", "Check by adding that the total is 17."),
            ],
            example: t(
              "Comprobación: 5 + 4 = 9; 9 + 3 = 12; 12 + 3 = 15; 15 + 2 = **17**. Si tu suma no da 17, algún componente quedó mal.",
              "Check: 5 + 4 = 9; 9 + 3 = 12; 12 + 3 = 15; 15 + 2 = **17**. If your sum is not 17, one component is wrong.",
            ),
            mistake: t(
              "Repartirlos en partes iguales o pensar que las actividades de control tienen más principios. El que más tiene es el entorno de control, porque es la base.",
              "Splitting them equally or thinking control activities have the most principles. The one with the most is the control environment, because it is the foundation.",
            ),
          },
        ],
      },
    ],
    examples: [
      {
        title: t("Ubicar controles de una farmacia en COSO", "Placing a pharmacy's controls in COSO"),
        problem: t(
          "Una farmacia independiente en Puebla tiene estas prácticas: (A) el dueño firmó y difunde un código de conducta, (B) cada trimestre identifica qué medicamentos son más propensos a robo, (C) el sistema no deja vender antibióticos sin capturar la receta, (D) el gerente recibe un reporte diario de diferencias de caja y (E) una vez al año un auditor revisa si los controles se cumplen. Ubica cada práctica en su componente.",
          "An independent pharmacy in Puebla has these practices: (A) the owner signed and promotes a code of conduct, (B) each quarter it identifies which medicines are most prone to theft, (C) the system does not allow selling antibiotics without entering the prescription, (D) the manager receives a daily report of cash differences and (E) once a year an auditor checks whether controls are complied with. Place each practice in its component.",
        ),
        steps: [
          t("A: código de conducta y tono del dueño → entorno de control.", "A: code of conduct and owner's tone → control environment."),
          t("B: identificar productos propensos a robo → evaluación de riesgos.", "B: identifying theft-prone products → risk assessment."),
          t("C: bloqueo automático sin receta → actividad de control.", "C: automatic block without prescription → control activity."),
          t("D: reporte diario que llega al gerente → información y comunicación.", "D: daily report reaching the manager → information and communication."),
          t("E: revisión anual de que los controles se cumplen → actividades de supervisión.", "E: annual review that controls are complied with → monitoring activities."),
        ],
        result: t(
          "Las cinco prácticas cubren los cinco componentes. Si faltara alguno, por ejemplo la supervisión, nadie se daría cuenta cuando los demás controles dejaran de funcionar.",
          "The five practices cover the five components. If one were missing, for example monitoring, nobody would notice when the other controls stopped working.",
        ),
      },
      {
        title: t("¿Es eficaz este control interno?", "Is this internal control effective?"),
        problem: t(
          "Una exportadora de artesanías tiene buenas conciliaciones, reportes oportunos y revisiones mensuales. Sin embargo, la dirección presiona para cerrar ventas a fin de mes con facturas anticipadas y castiga a quien lo cuestiona. ¿El control interno es eficaz según COSO?",
          "A handicraft exporter has good reconciliations, timely reports and monthly reviews. However, management pressures staff to close sales at month-end with early invoices and punishes anyone who questions it. Is internal control effective under COSO?",
        ),
        steps: [
          t("Actividades de control, información y supervisión parecen presentes y funcionando.", "Control activities, information and monitoring seem present and functioning."),
          t("La presión de la dirección y el castigo a quien cuestiona afectan la integridad y el tono desde arriba: es una deficiencia grave del entorno de control.", "Management pressure and punishing those who question it affect integrity and the tone at the top: it is a major deficiency in the control environment."),
          t("COSO exige que los cinco componentes estén presentes, funcionen y operen juntos.", "COSO requires all five components to be present, functioning and operating together."),
        ],
        result: t(
          "No es eficaz: una deficiencia grave en un componente impide concluir que el sistema es eficaz, aunque los otros cuatro funcionen bien.",
          "It is not effective: a major deficiency in one component prevents concluding the system is effective, even if the other four work well.",
        ),
      },
    ],
    keyPoints: [
      t("COSO 2013 es el marco de control interno más usado en el mundo.", "COSO 2013 is the most widely used internal control framework in the world."),
      t("Tres categorías de objetivos: operativos, de información y de cumplimiento.", "Three categories of objectives: operations, reporting and compliance."),
      t("Cinco componentes: entorno de control, evaluación de riesgos, actividades de control, información y comunicación, y supervisión.", "Five components: control environment, risk assessment, control activities, information and communication, and monitoring."),
      t("17 principios repartidos 5-4-3-3-2 entre los componentes.", "17 principles distributed 5-4-3-3-2 across the components."),
      t("Eficaz = componentes presentes, funcionando y operando juntos.", "Effective = components present, functioning and operating together."),
      t("COSO ERM es otro marco, enfocado en riesgo, estrategia y desempeño.", "COSO ERM is a different framework, focused on risk, strategy and performance."),
    ],
    normativeNote: NOTE_COSO,
    exerciseIds: ['AUD-06-E1', 'AUD-06-E2', 'AUD-06-E3', 'AUD-06-E4', 'AUD-06-E5'],
  },
]

export const exercises: Exercise[] = [
  // ═════════════════════════ AUD-01 ═════════════════════════
  {
    id: 'AUD-01-E1',
    level: 5,
    module: 'AUD-01',
    kind: 'mcq',
    flavor: 'concept',
    prompt: t(
      "En una auditoría de estados financieros, ¿quién es responsable de preparar las cifras que se auditan?",
      "In a financial statement audit, who is responsible for preparing the figures being audited?",
    ),
    options: [
      { id: 'AUD-01-E1-a', text: t("El auditor externo", "The external auditor") },
      { id: 'AUD-01-E1-b', text: t("La administración de la entidad", "The entity's management") },
      { id: 'AUD-01-E1-c', text: t("El banco que pidió los estados auditados", "The bank that requested the audited statements") },
      { id: 'AUD-01-E1-d', text: t("El auditor y la administración por partes iguales", "The auditor and management in equal parts") },
    ],
    correctOptionId: 'AUD-01-E1-b',
    explanation: t(
      "La administración prepara la información y responde por ella; el auditor solo opina sobre ella y el usuario la utiliza para decidir. Error común: pensar que el auditor «hace» los estados financieros; si los preparara, estaría auditando su propio trabajo (amenaza de autorrevisión).",
      "Management prepares the information and is responsible for it; the auditor only gives an opinion on it and the user relies on it to decide. Common mistake: thinking the auditor \"makes\" the financial statements; if it prepared them, it would be auditing its own work (self-review threat).",
    ),
    difficulty: 1,
    points: 10,
    competency: 'audit-fundamentals',
  },
  {
    id: 'AUD-01-E2',
    level: 5,
    module: 'AUD-01',
    kind: 'classify',
    flavor: 'concept',
    prompt: t(
      "Clasifica cada trabajo según el tipo de auditoría que describe.",
      "Classify each engagement by the type of audit it describes.",
    ),
    categories: [
      { id: 'AUD-01-E2-c1', label: t("Externa de estados financieros", "External financial statement audit") },
      { id: 'AUD-01-E2-c2', label: t("Operacional", "Operational audit") },
      { id: 'AUD-01-E2-c3', label: t("De cumplimiento", "Compliance audit") },
    ],
    items: [
      { id: 'AUD-01-E2-i1', label: t("Un despacho independiente opina si el balance de una embotelladora está razonablemente presentado", "An independent firm gives an opinion on whether a bottler's balance sheet is fairly presented"), correctCategoryId: 'AUD-01-E2-c1' },
      { id: 'AUD-01-E2-i2', label: t("Se mide cuántos días tarda una paquetería en entregar y cómo reducirlos", "Measuring how many days a courier takes to deliver and how to reduce them"), correctCategoryId: 'AUD-01-E2-c2' },
      { id: 'AUD-01-E2-i3', label: t("Se revisa si una escuela respeta las cláusulas de su contrato de arrendamiento", "Checking whether a school complies with the clauses of its lease contract"), correctCategoryId: 'AUD-01-E2-c3' },
      { id: 'AUD-01-E2-i4', label: t("Se evalúa si el área de compras usa bien su presupuesto y su personal", "Assessing whether the purchasing area uses its budget and staff well"), correctCategoryId: 'AUD-01-E2-c2' },
      { id: 'AUD-01-E2-i5', label: t("Se verifica que una planta cumpla los permisos ambientales que le exige la ley", "Verifying that a plant complies with the environmental permits required by law"), correctCategoryId: 'AUD-01-E2-c3' },
      { id: 'AUD-01-E2-i6', label: t("Un contador público ajeno emite su opinión anual para los accionistas de una cadena hotelera", "An outside public accountant issues an annual opinion for a hotel chain's shareholders"), correctCategoryId: 'AUD-01-E2-c1' },
    ],
    explanation: t(
      "La externa opina sobre estados financieros para terceros; la operacional mide eficiencia y eficacia de un proceso; la de cumplimiento compara contra leyes, contratos o políticas. Error común: clasificar como operacional la revisión de permisos ambientales; ahí la pregunta es «¿se cumple la regla?», no «¿es eficiente?».",
      "The external audit gives an opinion on financial statements for third parties; the operational audit measures a process's efficiency and effectiveness; the compliance audit compares against laws, contracts or policies. Common mistake: classifying the environmental permit review as operational; the question there is \"is the rule complied with?\", not \"is it efficient?\".",
    ),
    difficulty: 1,
    points: 15,
    competency: 'audit-fundamentals',
  },
  {
    id: 'AUD-01-E3',
    level: 5,
    module: 'AUD-01',
    kind: 'truefalse',
    flavor: 'concept',
    prompt: t(
      "Una auditoría de estados financieros bien hecha garantiza que no existe ningún error ni fraude en las cifras.",
      "A well-performed financial statement audit guarantees that there is no error or fraud at all in the figures.",
    ),
    answer: false,
    explanation: t(
      "Falso. La auditoría da seguridad razonable, no absoluta: se usan muestras y juicio, y un fraude bien ocultado puede no detectarse. Además, solo busca errores materiales, no cada peso. Error común: confundir «razonable» con «total»; a esa diferencia entre lo que el público espera y lo que la auditoría da se le llama brecha de expectativas.",
      "False. An audit gives reasonable, not absolute, assurance: samples and judgment are used, and well-hidden fraud may go undetected. It also only looks for material errors, not every peso. Common mistake: confusing \"reasonable\" with \"total\"; the gap between what the public expects and what an audit provides is called the expectation gap.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'audit-fundamentals',
  },
  {
    id: 'AUD-01-E4',
    level: 5,
    module: 'AUD-01',
    kind: 'multi',
    flavor: 'case',
    prompt: t(
      "¿Cuáles de estas situaciones amenazan la independencia del auditor de una constructora? Selecciona todas las que apliquen.",
      "Which of these situations threaten the independence of a construction company's auditor? Select all that apply.",
    ),
    options: [
      { id: 'AUD-01-E4-a', text: t("El socio del encargo lleva 15 años auditando a la empresa y es compadre del director general", "The engagement partner has audited the company for 15 years and is a close family friend of the CEO") },
      { id: 'AUD-01-E4-b', text: t("El mismo despacho llevó la contabilidad del año que ahora audita", "The same firm kept the books for the year it is now auditing") },
      { id: 'AUD-01-E4-c', text: t("El director amenaza con cambiar de auditor si la opinión no es limpia", "The CEO threatens to change auditors if the opinion is not clean") },
      { id: 'AUD-01-E4-d', text: t("El auditor pide al banco que confirme directamente los saldos de la empresa", "The auditor asks the bank to confirm the company's balances directly") },
      { id: 'AUD-01-E4-e', text: t("El auditor firmó una carta convenio con las responsabilidades de cada parte", "The auditor signed an engagement letter setting out each party's responsibilities") },
    ],
    correctOptionIds: ['AUD-01-E4-a', 'AUD-01-E4-b', 'AUD-01-E4-c'],
    explanation: t(
      "La relación larga y personal es familiaridad; auditar la contabilidad que uno llevó es autorrevisión; la amenaza de cambiar de auditor es intimidación. Confirmar con el banco y firmar la carta convenio son buenas prácticas, no amenazas. Error común: creer que solo el dinero (interés propio) amenaza la independencia.",
      "A long, personal relationship is familiarity; auditing books one kept is self-review; the threat to change auditors is intimidation. Confirming with the bank and signing the engagement letter are good practices, not threats. Common mistake: believing only money (self-interest) threatens independence.",
    ),
    difficulty: 2,
    points: 15,
    competency: 'audit-fundamentals',
  },
  {
    id: 'AUD-01-E5',
    level: 5,
    module: 'AUD-01',
    kind: 'numeric',
    flavor: 'case',
    context: t(
      "Un despacho de Saltillo factura $5,000,000 al año en total. Una sola cadena de autoservicio le paga $1,150,000 por auditoría y otros servicios. Cifras hipotéticas.",
      "A firm in Saltillo bills $5,000,000 per year in total. A single supermarket chain pays it $1,150,000 for the audit and other services. Hypothetical figures.",
    ),
    prompt: t(
      "¿Qué porcentaje de los honorarios totales del despacho representa la cadena de autoservicio?",
      "What percentage of the firm's total fees does the supermarket chain represent?",
    ),
    answer: 23,
    unit: '%',
    decimals: 1,
    tolerance: { abs: 0.05 },
    explanation: t(
      "Dependencia = 1,150,000 ÷ 5,000,000 × 100 = 23 %. Casi una cuarta parte de los ingresos depende de un cliente: es una amenaza de interés propio que pide salvaguardas, como la revisión por un socio ajeno al encargo. Error común: dividir al revés (5,000,000 ÷ 1,150,000 ≈ 4.35), que no es un porcentaje de dependencia.",
      "Dependence = 1,150,000 ÷ 5,000,000 × 100 = 23%. Almost a quarter of revenue depends on one client: it is a self-interest threat calling for safeguards, such as review by a partner not involved in the engagement. Common mistake: dividing the other way (5,000,000 ÷ 1,150,000 ≈ 4.35), which is not a dependence percentage.",
    ),
    difficulty: 1,
    points: 15,
    competency: 'audit-fundamentals',
  },
  {
    id: 'AUD-01-E6',
    level: 5,
    module: 'AUD-01',
    kind: 'mcq',
    flavor: 'case',
    context: t(
      "Al revisar las cuentas por cobrar de una fábrica de muebles, el contador te dice que un saldo de $380,000 de un cliente ya se cobró en enero y que no hace falta revisarlo.",
      "While reviewing a furniture factory's receivables, the accountant tells you that a $380,000 customer balance was already collected in January and there is no need to review it.",
    ),
    prompt: t(
      "¿Qué respuesta muestra escepticismo profesional ante lo que dice el contador sobre el cobro?",
      "Which response shows professional skepticism toward what the accountant says about the collection?",
    ),
    options: [
      { id: 'AUD-01-E6-a', text: t("Aceptar su palabra, porque el contador conoce mejor a sus clientes", "Accept his word, since the accountant knows his customers better") },
      { id: 'AUD-01-E6-b', text: t("Concluir que el contador miente y reportar un fraude", "Conclude that the accountant is lying and report fraud") },
      { id: 'AUD-01-E6-c', text: t("Pedir el estado de cuenta bancario de enero y verificar el depósito de ese cliente", "Ask for the January bank statement and verify that customer's deposit") },
      { id: 'AUD-01-E6-d', text: t("Eliminar ese saldo de la revisión para ahorrar tiempo", "Remove that balance from the review to save time") },
    ],
    correctOptionId: 'AUD-01-E6-c',
    explanation: t(
      "El escepticismo no es desconfiar de todo ni creer todo: es corroborar con evidencia. El estado de cuenta muestra si el depósito existe. Aceptar sin evidencia es ingenuo; acusar sin evidencia es injusto. Error común: pensar que escepticismo significa suponer mala fe.",
      "Skepticism is neither distrusting everything nor believing everything: it is corroborating with evidence. The bank statement shows whether the deposit exists. Accepting without evidence is naive; accusing without evidence is unfair. Common mistake: thinking skepticism means assuming bad faith.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'audit-fundamentals',
  },

  // ═════════════════════════ AUD-02 ═════════════════════════
  {
    id: 'AUD-02-E1',
    level: 5,
    module: 'AUD-02',
    kind: 'mcq',
    flavor: 'concept',
    prompt: t(
      "¿Qué organismo emite las Normas Internacionales de Auditoría que en México adopta y difunde el IMCP?",
      "Which body issues the International Standards on Auditing that the IMCP adopts and disseminates in Mexico?",
    ),
    options: [
      { id: 'AUD-02-E1-a', text: t("El IASB, que emite las NIIF", "The IASB, which issues IFRS") },
      { id: 'AUD-02-E1-b', text: t("El IAASB, ligado a la IFAC", "The IAASB, linked to IFAC") },
      { id: 'AUD-02-E1-c', text: t("El CINIF, que emite las NIF", "CINIF, which issues the NIF") },
      { id: 'AUD-02-E1-d', text: t("El comité COSO", "The COSO committee") },
    ],
    correctOptionId: 'AUD-02-E1-b',
    explanation: t(
      "El IAASB (Consejo de Normas Internacionales de Auditoría y Aseguramiento), dentro del ecosistema de la IFAC, emite las NIA. El IASB emite normas contables (NIIF), el CINIF emite las NIF mexicanas y COSO publica marcos de control. Error común: confundir IASB con IAASB por la sigla tan parecida; la «A» extra es de auditoría y aseguramiento.",
      "The IAASB (International Auditing and Assurance Standards Board), within the IFAC ecosystem, issues the ISAs. The IASB issues accounting standards (IFRS), CINIF issues the Mexican NIF and COSO publishes control frameworks. Common mistake: confusing IASB with IAASB because the acronyms are so similar; the extra \"A\" stands for auditing and assurance.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'auditing-standards',
  },
  {
    id: 'AUD-02-E2',
    level: 5,
    module: 'AUD-02',
    kind: 'classify',
    flavor: 'concept',
    prompt: t(
      "Clasifica cada NIA en el grupo de normas al que pertenece por su número.",
      "Classify each ISA into the group of standards it belongs to by its number.",
    ),
    categories: [
      { id: 'AUD-02-E2-c1', label: t("Principios generales (200)", "General principles (200)") },
      { id: 'AUD-02-E2-c2', label: t("Riesgos y respuesta (300-400)", "Risks and response (300-400)") },
      { id: 'AUD-02-E2-c3', label: t("Evidencia (500)", "Evidence (500)") },
      { id: 'AUD-02-E2-c4', label: t("Conclusiones e informe (700)", "Conclusions and reporting (700)") },
    ],
    items: [
      { id: 'AUD-02-E2-i1', label: t("NIA 230: documentación de auditoría", "ISA 230: audit documentation"), correctCategoryId: 'AUD-02-E2-c1' },
      { id: 'AUD-02-E2-i2', label: t("NIA 320: materialidad en la planeación y ejecución", "ISA 320: materiality in planning and performing"), correctCategoryId: 'AUD-02-E2-c2' },
      { id: 'AUD-02-E2-i3', label: t("NIA 530: muestreo de auditoría", "ISA 530: audit sampling"), correctCategoryId: 'AUD-02-E2-c3' },
      { id: 'AUD-02-E2-i4', label: t("NIA 700: formación de la opinión e informe", "ISA 700: forming an opinion and reporting"), correctCategoryId: 'AUD-02-E2-c4' },
      { id: 'AUD-02-E2-i5', label: t("NIA 315: identificación y valoración de riesgos", "ISA 315: identifying and assessing risks"), correctCategoryId: 'AUD-02-E2-c2' },
      { id: 'AUD-02-E2-i6', label: t("NIA 505: confirmaciones externas", "ISA 505: external confirmations"), correctCategoryId: 'AUD-02-E2-c3' },
      { id: 'AUD-02-E2-i7', label: t("NIA 240: responsabilidades del auditor respecto al fraude", "ISA 240: the auditor's responsibilities relating to fraud"), correctCategoryId: 'AUD-02-E2-c1' },
    ],
    explanation: t(
      "La centena indica el grupo: 200 principios y responsabilidades (documentación, fraude), 300-400 riesgos y respuesta (materialidad, valoración de riesgos), 500 evidencia (muestreo, confirmaciones) y 700 informe. Error común: poner la NIA 240 de fraude en riesgos por su tema; aunque trata riesgos, está en el grupo 200 de responsabilidades generales.",
      "The hundred indicates the group: 200 principles and responsibilities (documentation, fraud), 300-400 risks and response (materiality, risk assessment), 500 evidence (sampling, confirmations) and 700 reporting. Common mistake: placing ISA 240 on fraud under risks because of its topic; although it deals with risks, it sits in the 200 group of general responsibilities.",
    ),
    difficulty: 2,
    points: 15,
    competency: 'auditing-standards',
  },
  {
    id: 'AUD-02-E3',
    level: 5,
    module: 'AUD-02',
    kind: 'truefalse',
    flavor: 'concept',
    prompt: t(
      "Dentro de una NIA, la guía de aplicación y otras anotaciones explicativas crea obligaciones adicionales a los requisitos.",
      "Within an ISA, the application and other explanatory material creates obligations in addition to the requirements.",
    ),
    answer: false,
    explanation: t(
      "Falso. Las obligaciones están en los requisitos (redactados con «deberá»); la guía explica y da ejemplos para cumplirlos bien, sin crear obligaciones nuevas. Aun así, el auditor debe conocerla para aplicar correctamente los requisitos. Error común: ignorar la guía porque «no es obligatoria».",
      "False. Obligations are in the requirements (written with \"shall\"); the guidance explains and gives examples to meet them properly, without creating new obligations. Even so, the auditor must know it to apply the requirements correctly. Common mistake: ignoring the guidance because it \"isn't mandatory\".",
    ),
    difficulty: 1,
    points: 10,
    competency: 'auditing-standards',
  },
  {
    id: 'AUD-02-E4',
    level: 5,
    module: 'AUD-02',
    kind: 'multi',
    flavor: 'concept',
    prompt: t(
      "¿Qué exige la NIA 200 como base de toda auditoría de estados financieros? Selecciona todas las que apliquen.",
      "What does ISA 200 require as the basis of every financial statement audit? Select all that apply.",
    ),
    options: [
      { id: 'AUD-02-E4-a', text: t("Cumplir los requisitos de ética, incluida la independencia", "Comply with ethical requirements, including independence") },
      { id: 'AUD-02-E4-b', text: t("Planear y ejecutar con escepticismo profesional", "Plan and perform with professional skepticism") },
      { id: 'AUD-02-E4-c', text: t("Obtener evidencia suficiente y adecuada", "Obtain sufficient appropriate evidence") },
      { id: 'AUD-02-E4-d', text: t("Revisar el 100 % de las operaciones del ejercicio", "Review 100% of the year's transactions") },
      { id: 'AUD-02-E4-e', text: t("Dar seguridad absoluta de que no hay fraude", "Give absolute assurance that there is no fraud") },
    ],
    correctOptionIds: ['AUD-02-E4-a', 'AUD-02-E4-b', 'AUD-02-E4-c'],
    explanation: t(
      "La NIA 200 pide ética e independencia, escepticismo, juicio profesional y evidencia suficiente y adecuada para obtener seguridad razonable. No exige revisar todo ni da seguridad absoluta. Error común: pensar que más cobertura (el 100 %) es un requisito; el auditor usa muestras y juicio.",
      "ISA 200 requires ethics and independence, skepticism, professional judgment and sufficient appropriate evidence to obtain reasonable assurance. It does not require reviewing everything nor give absolute assurance. Common mistake: thinking full coverage (100%) is a requirement; the auditor uses samples and judgment.",
    ),
    difficulty: 1,
    points: 15,
    competency: 'auditing-standards',
  },
  {
    id: 'AUD-02-E5',
    level: 5,
    module: 'AUD-02',
    kind: 'mcq',
    flavor: 'case',
    context: t(
      "Un auditor audita a una cadena de cines. Una subsidiaria en Guatemala la audita otro despacho, y el auditor necesita decidir cómo usar ese trabajo en su opinión del grupo.",
      "An auditor audits a movie theater chain. A subsidiary in Guatemala is audited by another firm, and the auditor needs to decide how to use that work in his group opinion.",
    ),
    prompt: t(
      "¿En qué grupo de NIA debe buscar la guía para usar el trabajo de los auditores de la subsidiaria?",
      "In which ISA group should he look for guidance on using the work of the subsidiary's auditors?",
    ),
    options: [
      { id: 'AUD-02-E5-a', text: t("Grupo 200: principios generales", "Group 200: general principles") },
      { id: 'AUD-02-E5-b', text: t("Grupo 500: evidencia", "Group 500: evidence") },
      { id: 'AUD-02-E5-c', text: t("Grupo 600: uso del trabajo de otros", "Group 600: using the work of others") },
      { id: 'AUD-02-E5-d', text: t("Grupo 700: informe", "Group 700: reporting") },
    ],
    correctOptionId: 'AUD-02-E5-c',
    explanation: t(
      "El grupo 600 trata el uso del trabajo de otros: auditorías de grupos y otros auditores (NIA 600), auditoría interna (NIA 610) y expertos (NIA 620). Error común: buscar en el grupo 500 porque el trabajo de otros «es evidencia»; la norma específica para esta situación está en el 600.",
      "Group 600 covers using the work of others: group audits and other auditors (ISA 600), internal audit (ISA 610) and experts (ISA 620). Common mistake: looking in group 500 because the work of others \"is evidence\"; the specific standard for this situation is in the 600s.",
    ),
    difficulty: 2,
    points: 10,
    competency: 'auditing-standards',
  },
  {
    id: 'AUD-02-E6',
    level: 5,
    module: 'AUD-02',
    kind: 'mcq',
    flavor: 'interpret',
    prompt: t(
      "Un compañero dice: «Como auditamos con las NIA, el cliente debe preparar sus estados con las NIA». ¿Qué corrección le haces?",
      "A colleague says: \"Since we audit under the ISAs, the client must prepare its statements under the ISAs.\" What correction do you make?",
    ),
    options: [
      { id: 'AUD-02-E6-a', text: t("Ninguna: las NIA sirven para preparar y para auditar", "None: the ISAs are used both to prepare and to audit") },
      { id: 'AUD-02-E6-b', text: t("El cliente prepara con un marco contable (como las NIF) y el auditor audita con las NIA", "The client prepares under an accounting framework (such as the NIF) and the auditor audits under the ISAs") },
      { id: 'AUD-02-E6-c', text: t("El cliente prepara con COSO y el auditor con las NIF", "The client prepares under COSO and the auditor under the NIF") },
      { id: 'AUD-02-E6-d', text: t("En México no se usan las NIA, solo las NIF", "The ISAs are not used in Mexico, only the NIF") },
    ],
    correctOptionId: 'AUD-02-E6-b',
    explanation: t(
      "Las NIF (o las NIIF) dicen cómo preparar y presentar los estados; las NIA dicen cómo auditarlos. Son dos juegos de reglas distintos para dos personas distintas. COSO es un marco de control interno, no contable. Error común: mezclar normas de información financiera con normas de auditoría.",
      "The NIF (or IFRS) say how to prepare and present the statements; the ISAs say how to audit them. They are two different sets of rules for two different parties. COSO is an internal control framework, not an accounting one. Common mistake: mixing financial reporting standards with auditing standards.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'auditing-standards',
  },

  // ═════════════════════════ AUD-03 ═════════════════════════
  {
    id: 'AUD-03-E1',
    level: 5,
    module: 'AUD-03',
    kind: 'classify',
    flavor: 'concept',
    prompt: t(
      "Clasifica cada actividad en la etapa de la auditoría en la que normalmente ocurre.",
      "Classify each activity into the audit stage in which it normally takes place.",
    ),
    categories: [
      { id: 'AUD-03-E1-c1', label: t("Aceptación", "Acceptance") },
      { id: 'AUD-03-E1-c2', label: t("Planeación", "Planning") },
      { id: 'AUD-03-E1-c3', label: t("Ejecución", "Execution") },
      { id: 'AUD-03-E1-c4', label: t("Conclusión", "Conclusion") },
    ],
    items: [
      { id: 'AUD-03-E1-i1', label: t("Verificar la independencia del equipo y firmar la carta convenio", "Verifying the team's independence and signing the engagement letter"), correctCategoryId: 'AUD-03-E1-c1' },
      { id: 'AUD-03-E1-i2', label: t("Fijar la materialidad y entender el negocio del cliente", "Setting materiality and understanding the client's business"), correctCategoryId: 'AUD-03-E1-c2' },
      { id: 'AUD-03-E1-i3', label: t("Observar el conteo físico de inventario al cierre", "Observing the year-end physical inventory count"), correctCategoryId: 'AUD-03-E1-c3' },
      { id: 'AUD-03-E1-i4', label: t("Obtener la carta de manifestaciones de la administración y emitir el informe", "Obtaining management's representation letter and issuing the report"), correctCategoryId: 'AUD-03-E1-c4' },
      { id: 'AUD-03-E1-i5', label: t("Identificar las cuentas con mayor riesgo de error", "Identifying the accounts with the highest risk of error"), correctCategoryId: 'AUD-03-E1-c2' },
      { id: 'AUD-03-E1-i6', label: t("Enviar confirmaciones de saldo a una muestra de clientes", "Sending balance confirmations to a sample of customers"), correctCategoryId: 'AUD-03-E1-c3' },
    ],
    explanation: t(
      "Aceptación: decidir si se puede tomar el trabajo y formalizarlo. Planeación: entender, fijar materialidad y valorar riesgos. Ejecución: aplicar pruebas (conteos, confirmaciones). Conclusión: manifestaciones escritas e informe. Error común: poner la identificación de riesgos en ejecución; los riesgos se valoran antes para decidir qué pruebas hacer.",
      "Acceptance: deciding whether the work can be taken on and formalizing it. Planning: understanding, setting materiality and assessing risks. Execution: performing tests (counts, confirmations). Conclusion: written representations and report. Common mistake: placing risk identification in execution; risks are assessed beforehand to decide which tests to perform.",
    ),
    difficulty: 1,
    points: 15,
    competency: 'audit-planning',
  },
  {
    id: 'AUD-03-E2',
    level: 5,
    module: 'AUD-03',
    kind: 'fields',
    flavor: 'case',
    context: t(
      "Una empresa de transporte de carga en Querétaro tiene utilidad antes de impuestos de $4,800,000. El auditor decide: materialidad = 5 % de esa base; materialidad de ejecución = 70 % de la materialidad; umbral claramente insignificante = 4 % de la materialidad. Cifras y porcentajes ilustrativos.",
      "A freight transport company in Querétaro has profit before tax of $4,800,000. The auditor decides: materiality = 5% of that benchmark; performance materiality = 70% of materiality; clearly trivial threshold = 4% of materiality. Illustrative figures and percentages.",
    ),
    prompt: t(
      "Calcula la materialidad, la materialidad de ejecución y el umbral claramente insignificante de la empresa de transporte.",
      "Compute the transport company's materiality, performance materiality and clearly trivial threshold.",
    ),
    fields: [
      { id: 'f1', label: t("Materialidad (MXN)", "Materiality (MXN)"), answer: 240000, unit: 'MXN', tolerance: { abs: 0.5 } },
      { id: 'f2', label: t("Materialidad de ejecución (MXN)", "Performance materiality (MXN)"), answer: 168000, unit: 'MXN', tolerance: { abs: 0.5 } },
      { id: 'f3', label: t("Claramente insignificante (MXN)", "Clearly trivial (MXN)"), answer: 9600, unit: 'MXN', tolerance: { abs: 0.5 } },
    ],
    explanation: t(
      "Materialidad: 4,800,000 × 5 % = $240,000. Ejecución: 240,000 × 70 % = $168,000. Claramente insignificante: 240,000 × 4 % = $9,600. Los dos últimos se calculan sobre la materialidad, no sobre la utilidad. Error común: aplicar el 70 % a la utilidad (4,800,000 × 70 % = 3,360,000), lo que da un monto absurdo.",
      "Materiality: 4,800,000 × 5% = $240,000. Performance: 240,000 × 70% = $168,000. Clearly trivial: 240,000 × 4% = $9,600. The last two are computed on materiality, not on profit. Common mistake: applying 70% to profit (4,800,000 × 70% = 3,360,000), which gives an absurd amount.",
    ),
    difficulty: 2,
    points: 20,
    competency: 'audit-planning',
  },
  {
    id: 'AUD-03-E3',
    level: 5,
    module: 'AUD-03',
    kind: 'formula',
    flavor: 'concept',
    prompt: t(
      "Completa la fórmula para despejar el riesgo de detección aceptable a partir del modelo de riesgo de auditoría.",
      "Complete the formula to solve for acceptable detection risk from the audit risk model.",
    ),
    template: '{{b1}} = {{b2}} ÷ ({{b3}} × {{b4}})',
    blanks: [
      {
        id: 'b1',
        options: [
          { id: 'AUD-03-E3-b1-a', text: t("Riesgo de detección", "Detection risk") },
          { id: 'AUD-03-E3-b1-b', text: t("Materialidad", "Materiality") },
          { id: 'AUD-03-E3-b1-c', text: t("Riesgo de negocio", "Business risk") },
        ],
        correctOptionId: 'AUD-03-E3-b1-a',
      },
      {
        id: 'b2',
        options: [
          { id: 'AUD-03-E3-b2-a', text: t("Tasa de desviación", "Deviation rate") },
          { id: 'AUD-03-E3-b2-b', text: t("Riesgo de auditoría", "Audit risk") },
          { id: 'AUD-03-E3-b2-c', text: t("Utilidad antes de impuestos", "Profit before tax") },
        ],
        correctOptionId: 'AUD-03-E3-b2-b',
      },
      {
        id: 'b3',
        options: [
          { id: 'AUD-03-E3-b3-a', text: t("Riesgo inherente", "Inherent risk") },
          { id: 'AUD-03-E3-b3-b', text: t("Riesgo de muestreo", "Sampling risk") },
          { id: 'AUD-03-E3-b3-c', text: t("Materialidad de ejecución", "Performance materiality") },
        ],
        correctOptionId: 'AUD-03-E3-b3-a',
      },
      {
        id: 'b4',
        options: [
          { id: 'AUD-03-E3-b4-a', text: t("Tasa tolerable", "Tolerable rate") },
          { id: 'AUD-03-E3-b4-b', text: t("Error proyectado", "Projected error") },
          { id: 'AUD-03-E3-b4-c', text: t("Riesgo de control", "Control risk") },
        ],
        correctOptionId: 'AUD-03-E3-b4-c',
      },
    ],
    explanation: t(
      "Como RA = RI × RC × RD, al despejar queda RD = RA ÷ (RI × RC). El riesgo de detección es el único que el auditor controla con sus pruebas. Error común: meter la materialidad en el modelo de riesgo; la materialidad es un monto en pesos, no una probabilidad.",
      "Since AR = IR × CR × DR, solving gives DR = AR ÷ (IR × CR). Detection risk is the only one the auditor controls through testing. Common mistake: putting materiality into the risk model; materiality is a peso amount, not a probability.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'audit-planning',
  },
  {
    id: 'AUD-03-E4',
    level: 5,
    module: 'AUD-03',
    kind: 'numeric',
    flavor: 'case',
    context: t(
      "Para las cuentas por cobrar de un laboratorio dental, el auditor quiere un riesgo de auditoría de 4 %. Evalúa el riesgo inherente en 80 % y el riesgo de control en 25 %. Cifras hipotéticas.",
      "For a dental lab's receivables, the auditor wants 4% audit risk. She assesses inherent risk at 80% and control risk at 25%. Hypothetical figures.",
    ),
    prompt: t(
      "¿Cuál es el riesgo de detección aceptable (en %) para las cuentas por cobrar del laboratorio?",
      "What is the acceptable detection risk (in %) for the lab's receivables?",
    ),
    answer: 20,
    unit: '%',
    decimals: 1,
    tolerance: { abs: 0.05 },
    explanation: t(
      "RD = RA ÷ (RI × RC) = 0.04 ÷ (0.80 × 0.25) = 0.04 ÷ 0.20 = 0.20 = 20 %. Como los controles son buenos (RC bajo), el auditor puede aceptar más riesgo de detección y hacer menos pruebas sustantivas que si RC fuera alto. Error común: multiplicar los tres valores (0.04 × 0.80 × 0.25 = 0.8 %) en lugar de despejar.",
      "DR = AR ÷ (IR × CR) = 0.04 ÷ (0.80 × 0.25) = 0.04 ÷ 0.20 = 0.20 = 20%. Since controls are good (low CR), the auditor can accept more detection risk and perform fewer substantive tests than if CR were high. Common mistake: multiplying all three values (0.04 × 0.80 × 0.25 = 0.8%) instead of solving.",
    ),
    difficulty: 2,
    points: 15,
    competency: 'audit-planning',
  },
  {
    id: 'AUD-03-E5',
    level: 5,
    module: 'AUD-03',
    kind: 'mcq',
    flavor: 'interpret',
    prompt: t(
      "Si el auditor sube su evaluación del riesgo inherente y del riesgo de control de una cuenta, ¿qué debe hacer con sus pruebas sustantivas?",
      "If the auditor raises its assessment of an account's inherent and control risk, what should it do with its substantive tests?",
    ),
    options: [
      { id: 'AUD-03-E5-a', text: t("Reducirlas, porque ya sabe que hay riesgo", "Reduce them, since it already knows there is risk") },
      { id: 'AUD-03-E5-b', text: t("Mantenerlas igual; el riesgo no cambia las pruebas", "Keep them the same; risk does not change the tests") },
      { id: 'AUD-03-E5-c', text: t("Ampliarlas: más partidas, pruebas más fuertes o más cerca del cierre", "Extend them: more items, stronger tests or closer to year-end") },
      { id: 'AUD-03-E5-d', text: t("Sustituirlas solo por preguntas a la administración", "Replace them only with inquiries of management") },
    ],
    correctOptionId: 'AUD-03-E5-c',
    explanation: t(
      "Más riesgo inherente y de control obliga a aceptar menos riesgo de detección, y eso se logra con más y mejores pruebas sustantivas. Las preguntas a la administración solas no bastan. Error común: pensar que el riesgo alto se «compensa» haciendo menos trabajo.",
      "Higher inherent and control risk forces accepting less detection risk, which is achieved with more and better substantive tests. Inquiries of management alone are not enough. Common mistake: thinking high risk is \"offset\" by doing less work.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'audit-planning',
  },
  {
    id: 'AUD-03-E6',
    level: 5,
    module: 'AUD-03',
    kind: 'truefalse',
    flavor: 'concept',
    prompt: t(
      "Una vez aprobado el plan de auditoría, el auditor ya no puede modificarlo aunque descubra hechos nuevos durante la ejecución.",
      "Once the audit plan is approved, the auditor can no longer modify it even if new facts are discovered during execution.",
    ),
    answer: false,
    explanation: t(
      "Falso. La planeación es continua: si aparece algo nuevo (un cliente quebrado, una operación inusual, controles que no funcionan), el auditor actualiza materialidad, riesgos y pruebas. Error común: tratar el plan como un documento cerrado que solo se cumple al pie de la letra.",
      "False. Planning is continuous: if something new appears (a bankrupt customer, an unusual transaction, controls that do not work), the auditor updates materiality, risks and tests. Common mistake: treating the plan as a closed document that is simply followed to the letter.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'audit-planning',
  },

  // ═════════════════════════ AUD-04 ═════════════════════════
  {
    id: 'AUD-04-E1',
    level: 5,
    module: 'AUD-04',
    kind: 'classify',
    flavor: 'concept',
    prompt: t(
      "Clasifica cada acción del auditor según el procedimiento para obtener evidencia que representa.",
      "Classify each auditor action by the evidence-gathering procedure it represents.",
    ),
    categories: [
      { id: 'AUD-04-E1-c1', label: t("Inspección", "Inspection") },
      { id: 'AUD-04-E1-c2', label: t("Observación", "Observation") },
      { id: 'AUD-04-E1-c3', label: t("Confirmación externa", "External confirmation") },
      { id: 'AUD-04-E1-c4', label: t("Recálculo", "Recalculation") },
    ],
    items: [
      { id: 'AUD-04-E1-i1', label: t("Revisar el contrato de arrendamiento firmado de una bodega", "Examining the signed lease contract for a warehouse"), correctCategoryId: 'AUD-04-E1-c1' },
      { id: 'AUD-04-E1-i2', label: t("Presenciar cómo el personal cuenta el inventario de refacciones", "Watching staff count the spare-parts inventory"), correctCategoryId: 'AUD-04-E1-c2' },
      { id: 'AUD-04-E1-i3', label: t("Pedir a un proveedor que responda directo al auditor cuánto se le debe", "Asking a supplier to reply directly to the auditor with how much it is owed"), correctCategoryId: 'AUD-04-E1-c3' },
      { id: 'AUD-04-E1-i4', label: t("Volver a calcular la depreciación anual de la flotilla de camionetas", "Recomputing the annual depreciation of the van fleet"), correctCategoryId: 'AUD-04-E1-c4' },
      { id: 'AUD-04-E1-i5', label: t("Verificar físicamente una máquina nueva y su placa de serie", "Physically examining a new machine and its serial plate"), correctCategoryId: 'AUD-04-E1-c1' },
      { id: 'AUD-04-E1-i6', label: t("Sumar de nuevo la relación de saldos de clientes", "Re-adding the customer balance listing"), correctCategoryId: 'AUD-04-E1-c4' },
    ],
    explanation: t(
      "Inspección es examinar documentos o activos; observación es ver un proceso mientras ocurre; confirmación externa es la respuesta directa de un tercero; recálculo es rehacer operaciones aritméticas. Error común: confundir observación con inspección; ver el conteo en marcha es observar un proceso, mientras que examinar la máquina es inspeccionar un activo.",
      "Inspection is examining documents or assets; observation is watching a process as it happens; external confirmation is a third party's direct reply; recalculation is redoing arithmetic. Common mistake: confusing observation with inspection; watching the count in progress is observing a process, while examining the machine is inspecting an asset.",
    ),
    difficulty: 1,
    points: 15,
    competency: 'audit-evidence',
  },
  {
    id: 'AUD-04-E2',
    level: 5,
    module: 'AUD-04',
    kind: 'mcq',
    flavor: 'concept',
    prompt: t(
      "Para comprobar el saldo en bancos de una agencia de viajes, ¿cuál de estas evidencias es, en general, la más confiable?",
      "To verify a travel agency's bank balance, which of these pieces of evidence is generally the most reliable?",
    ),
    options: [
      { id: 'AUD-04-E2-a', text: t("Lo que dice la tesorera en una entrevista", "What the treasurer says in an interview") },
      { id: 'AUD-04-E2-b', text: t("Una fotocopia del estado de cuenta entregada por la empresa", "A photocopy of the bank statement provided by the company") },
      { id: 'AUD-04-E2-c', text: t("La conciliación bancaria hecha por el contador", "The bank reconciliation prepared by the accountant") },
      { id: 'AUD-04-E2-d', text: t("La confirmación del saldo que el banco envía directamente al auditor", "The balance confirmation the bank sends directly to the auditor") },
    ],
    correctOptionId: 'AUD-04-E2-d',
    explanation: t(
      "La confirmación es externa, independiente, documental y llega directo al auditor, sin pasar por la empresa. La fotocopia podría alterarse, la conciliación es interna y la entrevista es verbal. Error común: preferir la conciliación porque «es más completa»; puede serlo, pero la preparó la misma empresa auditada.",
      "The confirmation is external, independent, documentary and reaches the auditor directly, without passing through the company. The photocopy could be altered, the reconciliation is internal and the interview is oral. Common mistake: preferring the reconciliation because it is \"more complete\"; it may be, but it was prepared by the audited company itself.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'audit-evidence',
  },
  {
    id: 'AUD-04-E3',
    level: 5,
    module: 'AUD-04',
    kind: 'numeric',
    flavor: 'case',
    context: t(
      "Las ventas a crédito de una distribuidora de llantas suman $9,500,000 en el año. El auditor revisa una muestra de facturas por $250,000 y encuentra ventas registradas de más por $5,000. Cifras hipotéticas.",
      "A tire distributor's credit sales total $9,500,000 for the year. The auditor reviews a sample of invoices totaling $250,000 and finds sales overstated by $5,000. Hypothetical figures.",
    ),
    prompt: t(
      "Usando el método de razón, ¿cuál es el error proyectado en las ventas a crédito de la distribuidora de llantas?",
      "Using the ratio method, what is the projected error in the tire distributor's credit sales?",
    ),
    answer: 190000,
    unit: 'MXN',
    decimals: 0,
    tolerance: { abs: 0.5 },
    explanation: t(
      "Tasa de error = 5,000 ÷ 250,000 = 2 %. Error proyectado = 2 % × 9,500,000 = $190,000. Ese monto, no los $5,000 encontrados, es el que se compara con la materialidad. Error común: quedarse con el error de la muestra y concluir que es insignificante.",
      "Error rate = 5,000 ÷ 250,000 = 2%. Projected error = 2% × 9,500,000 = $190,000. That amount, not the $5,000 found, is what is compared with materiality. Common mistake: stopping at the sample error and concluding it is trivial.",
    ),
    difficulty: 2,
    points: 15,
    competency: 'audit-evidence',
  },
  {
    id: 'AUD-04-E4',
    level: 5,
    module: 'AUD-04',
    kind: 'multi',
    flavor: 'concept',
    prompt: t(
      "¿Qué debe contener una cédula de papeles de trabajo bien hecha? Selecciona todas las que apliquen.",
      "What should a well-prepared working paper schedule contain? Select all that apply.",
    ),
    options: [
      { id: 'AUD-04-E4-a', text: t("El objetivo de la prueba y cómo se eligieron las partidas", "The objective of the test and how the items were selected") },
      { id: 'AUD-04-E4-b', text: t("Quién la preparó, quién la revisó y en qué fechas", "Who prepared it, who reviewed it and on which dates") },
      { id: 'AUD-04-E4-c', text: t("El significado de las marcas de auditoría usadas", "The meaning of the tick marks used") },
      { id: 'AUD-04-E4-d', text: t("La conclusión sobre lo que se probó", "The conclusion on what was tested") },
      { id: 'AUD-04-E4-e', text: t("Solo los números finales, sin explicar qué se hizo", "Only the final numbers, without explaining what was done") },
    ],
    correctOptionIds: ['AUD-04-E4-a', 'AUD-04-E4-b', 'AUD-04-E4-c', 'AUD-04-E4-d'],
    explanation: t(
      "La cédula debe permitir que un auditor experimentado ajeno entienda qué se hizo, sobre qué, quién lo hizo, qué se encontró y qué se concluyó. Números sin explicación no prueban que el trabajo se hizo. Error común: pensar que la documentación es solo «el resultado»; sin el procedimiento, para efectos prácticos no se hizo.",
      "The schedule must let an experienced outside auditor understand what was done, on what, by whom, what was found and what was concluded. Numbers without explanation do not prove the work was done. Common mistake: thinking documentation is only \"the result\"; without the procedure, for practical purposes it was not done.",
    ),
    difficulty: 1,
    points: 15,
    competency: 'audit-evidence',
  },
  {
    id: 'AUD-04-E5',
    level: 5,
    module: 'AUD-04',
    kind: 'truefalse',
    flavor: 'concept',
    prompt: t(
      "Los papeles de trabajo de una auditoría externa son propiedad del cliente auditado, por lo que el auditor debe entregárselos al terminar.",
      "The working papers of an external audit belong to the audited client, so the auditor must hand them over when finished.",
    ),
    answer: false,
    explanation: t(
      "Falso. Los papeles de trabajo son propiedad del auditor y son confidenciales; el auditor los conserva por el plazo que exijan las normas, las políticas de su firma y la ley. El cliente recibe el informe, no el archivo. Error común: pensar que, como el cliente paga, los papeles le pertenecen.",
      "False. Working papers are owned by the auditor and are confidential; the auditor retains them for the period required by standards, firm policy and law. The client receives the report, not the file. Common mistake: thinking that because the client pays, the papers belong to it.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'audit-evidence',
  },
  {
    id: 'AUD-04-E6',
    level: 5,
    module: 'AUD-04',
    kind: 'mcq',
    flavor: 'case',
    context: t(
      "Para probar que existe el inventario de una tienda de electrónica, el auditor solo pregunta al gerente de almacén, quien asegura que hay $1,200,000 en mercancía.",
      "To test that an electronics store's inventory exists, the auditor only asks the warehouse manager, who assures there is $1,200,000 in merchandise.",
    ),
    prompt: t(
      "¿Qué problema tiene la evidencia del inventario de la tienda de electrónica y qué debe hacer el auditor?",
      "What is wrong with the electronics store's inventory evidence and what should the auditor do?",
    ),
    options: [
      { id: 'AUD-04-E6-a', text: t("Ninguno: la palabra del gerente basta si es una persona de confianza", "Nothing: the manager's word is enough if he is trustworthy") },
      { id: 'AUD-04-E6-b', text: t("La indagación sola no basta; debe observar el conteo y hacer conteos de prueba", "Inquiry alone is not enough; he should observe the count and perform test counts") },
      { id: 'AUD-04-E6-c', text: t("Debe pedir al gerente que lo diga por escrito y con eso concluir", "He should ask the manager to put it in writing and conclude with that") },
      { id: 'AUD-04-E6-d', text: t("Debe recalcular el saldo contable de inventarios y con eso concluir", "He should recompute the inventory book balance and conclude with that") },
    ],
    correctOptionId: 'AUD-04-E6-b',
    explanation: t(
      "Preguntar es evidencia verbal e interna: casi nunca basta sola. Para la existencia del inventario, lo adecuado es observar el conteo físico y contar una muestra. Pasarlo a escrito sigue siendo la palabra del gerente, y recalcular el saldo contable no prueba que la mercancía exista. Error común: creer que un procedimiento de exactitud prueba la existencia.",
      "Asking is oral, internal evidence: it is almost never enough alone. For inventory existence, the appropriate step is observing the physical count and counting a sample. Putting it in writing is still the manager's word, and recomputing the book balance does not prove the goods exist. Common mistake: believing an accuracy procedure proves existence.",
    ),
    difficulty: 2,
    points: 15,
    competency: 'audit-evidence',
  },

  // ═════════════════════════ AUD-05 ═════════════════════════
  {
    id: 'AUD-05-E1',
    level: 5,
    module: 'AUD-05',
    kind: 'classify',
    flavor: 'concept',
    prompt: t(
      "Clasifica cada control según su momento: preventivo, detectivo o correctivo.",
      "Classify each control by its timing: preventive, detective or corrective.",
    ),
    categories: [
      { id: 'AUD-05-E1-c1', label: t("Preventivo", "Preventive") },
      { id: 'AUD-05-E1-c2', label: t("Detectivo", "Detective") },
      { id: 'AUD-05-E1-c3', label: t("Correctivo", "Corrective") },
    ],
    items: [
      { id: 'AUD-05-E1-i1', label: t("El sistema no permite registrar dos veces el mismo folio de factura", "The system does not allow recording the same invoice number twice"), correctCategoryId: 'AUD-05-E1-c1' },
      { id: 'AUD-05-E1-i2', label: t("Conciliación bancaria mensual hecha por alguien que no maneja efectivo", "Monthly bank reconciliation by someone who does not handle cash"), correctCategoryId: 'AUD-05-E1-c2' },
      { id: 'AUD-05-E1-i3', label: t("Restaurar la base de clientes desde el respaldo tras una falla", "Restoring the customer database from backup after a failure"), correctCategoryId: 'AUD-05-E1-c3' },
      { id: 'AUD-05-E1-i4', label: t("Se requieren dos firmas para pagos mayores a $100,000", "Two signatures are required for payments over $100,000"), correctCategoryId: 'AUD-05-E1-c1' },
      { id: 'AUD-05-E1-i5', label: t("Conteo físico sorpresa del inventario comparado con el kárdex", "Surprise physical inventory count compared with the stock ledger"), correctCategoryId: 'AUD-05-E1-c2' },
      { id: 'AUD-05-E1-i6', label: t("Emitir una nota de crédito para reponer un cobro de más a un cliente", "Issuing a credit note to reverse an overcharge to a customer"), correctCategoryId: 'AUD-05-E1-c3' },
    ],
    explanation: t(
      "Preventivos: actúan antes (bloqueo de duplicados, doble firma). Detectivos: descubren después (conciliación, conteo sorpresa). Correctivos: reparan el efecto (restaurar respaldo, nota de crédito). Error común: llamar preventivo al conteo sorpresa porque «disuade»; aunque disuade, su función principal es encontrar diferencias que ya ocurrieron.",
      "Preventive: act beforehand (duplicate block, dual signature). Detective: discover afterward (reconciliation, surprise count). Corrective: repair the effect (restore backup, credit note). Common mistake: calling the surprise count preventive because it \"deters\"; although it deters, its main function is finding differences that already happened.",
    ),
    difficulty: 1,
    points: 15,
    competency: 'internal-control',
  },
  {
    id: 'AUD-05-E2',
    level: 5,
    module: 'AUD-05',
    kind: 'mcq',
    flavor: 'case',
    context: t(
      "En una clínica veterinaria, la recepcionista cobra las consultas, registra los cobros en el sistema y prepara la ficha de depósito bancario. Nadie más revisa esos movimientos.",
      "At a veterinary clinic, the receptionist collects for appointments, records the collections in the system and prepares the bank deposit slip. Nobody else reviews these transactions.",
    ),
    prompt: t(
      "¿Cuál es la principal debilidad de control en el manejo del efectivo de la clínica veterinaria?",
      "What is the main control weakness in the veterinary clinic's cash handling?",
    ),
    options: [
      { id: 'AUD-05-E2-a', text: t("Falta de segregación de funciones: una persona custodia y registra el efectivo", "Lack of segregation of duties: one person has custody of and records the cash") },
      { id: 'AUD-05-E2-b', text: t("La clínica no tiene un manual de bienvenida para clientes", "The clinic has no welcome manual for customers") },
      { id: 'AUD-05-E2-c', text: t("El sistema de cobro no es suficientemente moderno", "The billing system is not modern enough") },
      { id: 'AUD-05-E2-d', text: t("La recepcionista no tiene suficientes tareas asignadas", "The receptionist does not have enough assigned tasks") },
    ],
    correctOptionId: 'AUD-05-E2-a',
    explanation: t(
      "Al cobrar (custodia), registrar y depositar la misma persona sin revisión, podría quedarse con efectivo y ajustar el registro. Soluciones: que otra persona concilie cobros contra depósitos o que el dueño revise el corte diario. Error común: buscar la solución en tecnología; un sistema moderno no corrige que una sola persona controle todo el ciclo.",
      "With the same person collecting (custody), recording and depositing without review, she could keep cash and adjust the record. Solutions: have another person reconcile collections to deposits, or have the owner review the daily cash count. Common mistake: looking for the fix in technology; a modern system does not fix one person controlling the whole cycle.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'internal-control',
  },
  {
    id: 'AUD-05-E3',
    level: 5,
    module: 'AUD-05',
    kind: 'numeric',
    flavor: 'case',
    context: t(
      "Una política exige que cada pago a proveedores tenga la firma del gerente de finanzas. El auditor revisa 120 pagos y encuentra 9 sin firma. La tasa tolerable es de 5 %. Cifras hipotéticas.",
      "A policy requires every supplier payment to bear the finance manager's signature. The auditor reviews 120 payments and finds 9 unsigned. The tolerable rate is 5%. Hypothetical figures.",
    ),
    prompt: t(
      "¿Cuál es la tasa de desviación (en %) del control de firma en pagos a proveedores?",
      "What is the deviation rate (in %) of the supplier payment signature control?",
    ),
    answer: 7.5,
    unit: '%',
    decimals: 1,
    tolerance: { abs: 0.05 },
    explanation: t(
      "Tasa de desviación = 9 ÷ 120 × 100 = 7.5 %. Supera la tolerable de 5 %, así que el control no es confiable en la práctica aunque esté bien diseñado; el auditor debe hacer más pruebas sustantivas sobre los pagos. Error común: dividir entre los pagos correctos (9 ÷ 111 ≈ 8.1 %) en lugar de entre el total revisado.",
      "Deviation rate = 9 ÷ 120 × 100 = 7.5%. It exceeds the 5% tolerable rate, so the control is not reliable in practice even if well designed; the auditor must perform more substantive tests on payments. Common mistake: dividing by the correct payments (9 ÷ 111 ≈ 8.1%) instead of the total reviewed.",
    ),
    difficulty: 2,
    points: 15,
    competency: 'internal-control',
  },
  {
    id: 'AUD-05-E4',
    level: 5,
    module: 'AUD-05',
    kind: 'multi',
    flavor: 'concept',
    prompt: t(
      "¿Cuáles son limitaciones propias de cualquier sistema de control interno? Selecciona todas las que apliquen.",
      "Which are inherent limitations of any internal control system? Select all that apply.",
    ),
    options: [
      { id: 'AUD-05-E4-a', text: t("Dos o más empleados pueden ponerse de acuerdo para saltarse un control", "Two or more employees can collude to get around a control") },
      { id: 'AUD-05-E4-b', text: t("Un directivo puede ordenar que se ignore un control", "An executive can order a control to be ignored") },
      { id: 'AUD-05-E4-c', text: t("Las personas pueden equivocarse por cansancio o descuido", "People can make mistakes through fatigue or carelessness") },
      { id: 'AUD-05-E4-d', text: t("Algunos controles costarían más de lo que protegen", "Some controls would cost more than what they protect") },
      { id: 'AUD-05-E4-e', text: t("Un buen control interno garantiza que nunca habrá pérdidas", "Good internal control guarantees there will never be losses") },
    ],
    correctOptionIds: ['AUD-05-E4-a', 'AUD-05-E4-b', 'AUD-05-E4-c', 'AUD-05-E4-d'],
    explanation: t(
      "Colusión, elusión por la dirección, error humano y costo-beneficio son las limitaciones clásicas; por eso el control interno da seguridad razonable. La última opción es falsa: ningún control garantiza cero pérdidas. Error común: creer que la colusión solo es un problema de fraude externo; ocurre entre empleados de la propia empresa.",
      "Collusion, management override, human error and cost-benefit are the classic limitations; that is why internal control gives reasonable assurance. The last option is false: no control guarantees zero losses. Common mistake: believing collusion is only an external-fraud problem; it happens among the company's own employees.",
    ),
    difficulty: 1,
    points: 15,
    competency: 'internal-control',
  },
  {
    id: 'AUD-05-E5',
    level: 5,
    module: 'AUD-05',
    kind: 'truefalse',
    flavor: 'interpret',
    prompt: t(
      "Si un control está bien diseñado y escrito en el manual de políticas, el auditor puede confiar en él sin probar si se aplica en la práctica.",
      "If a control is well designed and written in the policy manual, the auditor can rely on it without testing whether it is applied in practice.",
    ),
    answer: false,
    explanation: t(
      "Falso. El diseño dice si el control podría reducir el riesgo; la operación dice si de verdad se aplica siempre, a tiempo y por la persona correcta. Para confiar en un control, el auditor prueba su operación con una muestra. Error común: confundir «existe en el papel» con «funciona».",
      "False. Design says whether the control could reduce the risk; operation says whether it is really applied every time, on time and by the right person. To rely on a control, the auditor tests its operation with a sample. Common mistake: confusing \"exists on paper\" with \"works\".",
    ),
    difficulty: 1,
    points: 10,
    competency: 'internal-control',
  },
  {
    id: 'AUD-05-E6',
    level: 5,
    module: 'AUD-05',
    kind: 'mcq',
    flavor: 'case',
    context: t(
      "En una tienda de ropa con tres empleados, el encargado autoriza compras, recibe la mercancía en bodega y lleva el registro del inventario. El dueño quiere mejorar el control sin contratar a nadie.",
      "At a clothing store with three employees, the supervisor authorizes purchases, receives goods in the stockroom and keeps the inventory records. The owner wants to improve control without hiring anyone.",
    ),
    prompt: t(
      "¿Qué cambio separa mejor las funciones incompatibles en la tienda de ropa?",
      "Which change best separates the incompatible duties at the clothing store?",
    ),
    options: [
      { id: 'AUD-05-E6-a', text: t("Que el encargado siga igual, pero firme un compromiso de honestidad", "The supervisor keeps doing the same, but signs an honesty pledge") },
      { id: 'AUD-05-E6-b', text: t("Que el dueño autorice las compras, un vendedor reciba la mercancía y el encargado lleve el registro", "The owner authorizes purchases, a salesperson receives the goods and the supervisor keeps the records") },
      { id: 'AUD-05-E6-c', text: t("Que el encargado haga además los pagos a proveedores", "The supervisor also makes supplier payments") },
      { id: 'AUD-05-E6-d', text: t("Que se elimine el registro de inventario para ahorrar tiempo", "Inventory records are eliminated to save time") },
    ],
    correctOptionId: 'AUD-05-E6-b',
    explanation: t(
      "Separar autorización (dueño), custodia (vendedor que recibe) y registro (encargado) evita que una sola persona pueda comprar de más, quedarse con mercancía y ajustar el registro. Un compromiso firmado ayuda al entorno, pero no separa funciones; agregar pagos concentra todavía más. Error común: pensar que en una empresa pequeña no se puede segregar nada.",
      "Separating authorization (owner), custody (salesperson receiving) and recording (supervisor) keeps one person from overbuying, keeping goods and adjusting the records. A signed pledge helps the environment but does not separate duties; adding payments concentrates them even more. Common mistake: thinking nothing can be segregated in a small business.",
    ),
    difficulty: 2,
    points: 15,
    competency: 'internal-control',
  },

  // ═════════════════════════ AUD-06 ═════════════════════════
  {
    id: 'AUD-06-E1',
    level: 5,
    module: 'AUD-06',
    kind: 'classify',
    flavor: 'case',
    prompt: t(
      "Una cadena de lavanderías aplica estas prácticas. Clasifica cada una en el componente de COSO que le corresponde.",
      "A laundromat chain applies these practices. Classify each one into the COSO component it belongs to.",
    ),
    categories: [
      { id: 'AUD-06-E1-c1', label: t("Entorno de control", "Control environment") },
      { id: 'AUD-06-E1-c2', label: t("Evaluación de riesgos", "Risk assessment") },
      { id: 'AUD-06-E1-c3', label: t("Actividades de control", "Control activities") },
      { id: 'AUD-06-E1-c4', label: t("Información y comunicación", "Information and communication") },
      { id: 'AUD-06-E1-c5', label: t("Actividades de supervisión", "Monitoring activities") },
    ],
    items: [
      { id: 'AUD-06-E1-i1', label: t("El consejo aprueba un código de ética y lo aplica también a los directivos", "The board approves a code of ethics and applies it to executives too"), correctCategoryId: 'AUD-06-E1-c1' },
      { id: 'AUD-06-E1-i2', label: t("Se analiza qué pasaría si sube mucho el precio del gas para las secadoras", "Analyzing what would happen if gas prices for the dryers rose sharply"), correctCategoryId: 'AUD-06-E1-c2' },
      { id: 'AUD-06-E1-i3', label: t("El encargado concilia cada día las fichas vendidas contra el efectivo", "The supervisor reconciles tokens sold against cash every day"), correctCategoryId: 'AUD-06-E1-c3' },
      { id: 'AUD-06-E1-i4', label: t("Un tablero envía a cada gerente sus ventas y quejas de la semana", "A dashboard sends each manager their week's sales and complaints"), correctCategoryId: 'AUD-06-E1-c4' },
      { id: 'AUD-06-E1-i5', label: t("Auditoría interna visita sucursales para verificar que las conciliaciones se hagan", "Internal audit visits branches to verify that reconciliations are performed"), correctCategoryId: 'AUD-06-E1-c5' },
    ],
    explanation: t(
      "Código de ética y tono de dirección: entorno de control. Analizar lo que podría salir mal: evaluación de riesgos. Conciliar diario: actividad de control. Hacer llegar la información a quien decide: información y comunicación. Revisar que los controles sigan funcionando: supervisión. Error común: confundir la supervisión con la actividad de control; la supervisión revisa que los controles funcionen, no es el control en sí.",
      "Code of ethics and leadership tone: control environment. Analyzing what could go wrong: risk assessment. Daily reconciliation: control activity. Getting information to decision-makers: information and communication. Checking that controls keep working: monitoring. Common mistake: confusing monitoring with the control activity; monitoring checks that controls work, it is not the control itself.",
    ),
    difficulty: 1,
    points: 15,
    competency: 'coso-framework',
  },
  {
    id: 'AUD-06-E2',
    level: 5,
    module: 'AUD-06',
    kind: 'mcq',
    flavor: 'concept',
    prompt: t(
      "¿A qué componente de COSO pertenece el «tono desde arriba» que marca la dirección con su ejemplo de integridad?",
      "Which COSO component does the \"tone at the top\" set by leadership's example of integrity belong to?",
    ),
    options: [
      { id: 'AUD-06-E2-a', text: t("Actividades de control", "Control activities") },
      { id: 'AUD-06-E2-b', text: t("Información y comunicación", "Information and communication") },
      { id: 'AUD-06-E2-c', text: t("Entorno de control", "Control environment") },
      { id: 'AUD-06-E2-d', text: t("Actividades de supervisión", "Monitoring activities") },
    ],
    correctOptionId: 'AUD-06-E2-c',
    explanation: t(
      "El entorno de control es la base de COSO: integridad, valores, supervisión del consejo, estructura y competencia del personal. El tono desde arriba es su corazón. Error común: ubicarlo en información y comunicación porque la dirección «comunica» valores; lo que se evalúa es la cultura misma, no el canal.",
      "The control environment is COSO's foundation: integrity, values, board oversight, structure and staff competence. The tone at the top is its heart. Common mistake: placing it under information and communication because leadership \"communicates\" values; what is assessed is the culture itself, not the channel.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'coso-framework',
  },
  {
    id: 'AUD-06-E3',
    level: 5,
    module: 'AUD-06',
    kind: 'multi',
    flavor: 'concept',
    prompt: t(
      "¿Cuáles son las tres categorías de objetivos del Marco Integrado de Control Interno de COSO? Selecciona todas las que apliquen.",
      "What are the three categories of objectives in COSO's Internal Control–Integrated Framework? Select all that apply.",
    ),
    options: [
      { id: 'AUD-06-E3-a', text: t("Operativos", "Operations") },
      { id: 'AUD-06-E3-b', text: t("De información (reporte)", "Reporting") },
      { id: 'AUD-06-E3-c', text: t("De cumplimiento", "Compliance") },
      { id: 'AUD-06-E3-d', text: t("De maximización del precio de la acción", "Share price maximization") },
      { id: 'AUD-06-E3-e', text: t("De mercadotecnia", "Marketing") },
    ],
    correctOptionIds: ['AUD-06-E3-a', 'AUD-06-E3-b', 'AUD-06-E3-c'],
    explanation: t(
      "COSO agrupa los objetivos en operativos (eficacia y eficiencia), de información (reportes confiables) y de cumplimiento (leyes y regulaciones). Las otras opciones son metas de negocio, no categorías del marco. Error común: limitar los objetivos de información a los estados financieros; incluyen reportes internos y no financieros.",
      "COSO groups objectives into operations (effectiveness and efficiency), reporting (reliable reports) and compliance (laws and regulations). The other options are business goals, not categories of the framework. Common mistake: limiting reporting objectives to financial statements; they include internal and non-financial reports.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'coso-framework',
  },
  {
    id: 'AUD-06-E4',
    level: 5,
    module: 'AUD-06',
    kind: 'truefalse',
    flavor: 'interpret',
    prompt: t(
      "Según COSO, si cuatro de los cinco componentes funcionan muy bien, el sistema de control interno puede considerarse eficaz aunque el quinto tenga una deficiencia grave.",
      "Under COSO, if four of the five components work very well, the internal control system can be considered effective even if the fifth has a major deficiency.",
    ),
    answer: false,
    explanation: t(
      "Falso. COSO exige que los cinco componentes y sus principios estén presentes, funcionen y operen juntos. Una deficiencia grave en cualquier componente impide concluir que el sistema es eficaz. Error común: «promediar» los componentes, como si uno muy bueno compensara a otro que falla.",
      "False. COSO requires all five components and their principles to be present, functioning and operating together. A major deficiency in any component prevents concluding the system is effective. Common mistake: \"averaging\" components, as if a very good one offset another that fails.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'coso-framework',
  },
  {
    id: 'AUD-06-E5',
    level: 5,
    module: 'AUD-06',
    kind: 'mcq',
    flavor: 'case',
    context: t(
      "Una empresa de seguridad privada tiene buenos controles de nómina, pero nadie revisa si se siguen aplicando. Durante un año, el control de altas de guardias dejó de hacerse y nadie lo notó.",
      "A private security company has good payroll controls, but nobody checks whether they are still being applied. For a year, the control over adding new guards stopped being performed and nobody noticed.",
    ),
    prompt: t(
      "¿Qué componente de COSO falló principalmente en la empresa de seguridad privada?",
      "Which COSO component mainly failed at the private security company?",
    ),
    options: [
      { id: 'AUD-06-E5-a', text: t("Evaluación de riesgos", "Risk assessment") },
      { id: 'AUD-06-E5-b', text: t("Actividades de supervisión", "Monitoring activities") },
      { id: 'AUD-06-E5-c', text: t("Entorno de control", "Control environment") },
      { id: 'AUD-06-E5-d', text: t("Información y comunicación", "Information and communication") },
    ],
    correctOptionId: 'AUD-06-E5-b',
    explanation: t(
      "El control existía y estaba bien diseñado, pero nadie verificaba que siguiera operando: esa es la función de las actividades de supervisión (revisiones continuas o periódicas). Error común: responder «actividades de control»; el control sí estaba definido, lo que faltó fue detectar que se dejó de aplicar.",
      "The control existed and was well designed, but nobody verified that it kept operating: that is the role of monitoring activities (ongoing or periodic reviews). Common mistake: answering \"control activities\"; the control was defined, what was missing was detecting that it stopped being applied.",
    ),
    difficulty: 2,
    points: 15,
    competency: 'coso-framework',
  },
  {
    id: 'AUD-06-E6',
    level: 5,
    module: 'AUD-06',
    kind: 'fields',
    flavor: 'concept',
    prompt: t(
      "Indica cuántos de los 17 principios de COSO 2013 corresponden a cada componente.",
      "State how many of the 17 COSO 2013 principles belong to each component.",
    ),
    fields: [
      { id: 'f1', label: t("Entorno de control", "Control environment"), answer: 5, unit: 'units', tolerance: { abs: 0 } },
      { id: 'f2', label: t("Evaluación de riesgos", "Risk assessment"), answer: 4, unit: 'units', tolerance: { abs: 0 } },
      { id: 'f3', label: t("Actividades de control", "Control activities"), answer: 3, unit: 'units', tolerance: { abs: 0 } },
      { id: 'f4', label: t("Información y comunicación", "Information and communication"), answer: 3, unit: 'units', tolerance: { abs: 0 } },
      { id: 'f5', label: t("Actividades de supervisión", "Monitoring activities"), answer: 2, unit: 'units', tolerance: { abs: 0 } },
    ],
    explanation: t(
      "La distribución es 5-4-3-3-2, que suma 17. El entorno de control tiene más principios porque es la base de todo el sistema (integridad, supervisión del consejo, estructura, competencia y rendición de cuentas). Error común: repartirlos en partes iguales o pensar que las actividades de control, por ser «los controles», tienen más principios.",
      "The distribution is 5-4-3-3-2, which adds up to 17. The control environment has the most principles because it is the foundation of the whole system (integrity, board oversight, structure, competence and accountability). Common mistake: splitting them equally or thinking control activities, being \"the controls\", have the most principles.",
    ),
    difficulty: 2,
    points: 15,
    competency: 'coso-framework',
  },
]
