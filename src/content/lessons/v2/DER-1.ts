import type { Exercise, Lesson } from '../../../types'

/**
 * FINCORE — Temario v2.0 · Derecho Empresarial y Regulación (México) · Nivel 2 (Básico)
 * DER.1 a DER.6: introducción, marco jurídico, derecho mercantil, sociedades, constitución de empresas y contratos.
 */

const t = (es: string, en: string) => ({ es, en })

const NOTE_LAW = t(
  "Contenido educativo, no es asesoría legal. Las referencias a la Constitución y a las leyes mexicanas son generales; las leyes se reforman con frecuencia, así que verifica la versión vigente (2026) y consulta a un abogado antes de decidir en un caso real.",
  "Educational content, not legal advice. References to the Mexican Constitution and laws are general; laws are amended often, so verify the current version (2026) and consult a lawyer before deciding in a real case.",
)

const NOTE_COMMERCE = t(
  "Contenido educativo, no es asesoría legal. Las referencias al Código de Comercio y a la Ley General de Títulos y Operaciones de Crédito son generales y los montos de los ejemplos son hipotéticos. Las leyes se reforman: verifica la versión vigente (2026).",
  "Educational content, not legal advice. References to the Commercial Code and to the General Law of Negotiable Instruments and Credit Operations are general, and the amounts in the examples are hypothetical. Laws are amended: verify the current version (2026).",
)

const NOTE_COMPANIES = t(
  "Contenido educativo, no es asesoría legal. La descripción de la Ley General de Sociedades Mercantiles es general: requisitos como el número de socios, el capital o el tope de ingresos de la S.A.S. pueden cambiar o actualizarse. Verifica la versión vigente (2026) con un notario, corredor público o abogado.",
  "Educational content, not legal advice. The description of the General Law of Commercial Companies is general: requirements such as the number of partners, the capital or the S.A.S. revenue cap may change or be updated. Verify the current version (2026) with a notary, public broker or lawyer.",
)

const NOTE_FORMATION = t(
  "Contenido educativo, no es asesoría legal. Los trámites ante la Secretaría de Economía, el SAT, el IMSS y los municipios cambian de nombre, orden y plataforma con el tiempo, y varían por estado y municipio. Los montos de los ejemplos son hipotéticos: verifica los requisitos vigentes (2026).",
  "Educational content, not legal advice. Procedures before the Ministry of Economy, SAT, IMSS and municipalities change name, order and platform over time, and vary by state and municipality. The amounts in the examples are hypothetical: verify the current requirements (2026).",
)

const NOTE_CONTRACTS = t(
  "Contenido educativo, no es asesoría legal. Las reglas del Código de Comercio y del Código Civil Federal se explican en general y los montos y porcentajes de los ejemplos son hipotéticos. Para un contrato real, revisa la ley vigente (2026) y consulta a un abogado.",
  "Educational content, not legal advice. The rules of the Commercial Code and the Federal Civil Code are explained in general terms, and the amounts and percentages in the examples are hypothetical. For a real contract, check the current law (2026) and consult a lawyer.",
)

export const lessons: Lesson[] = [
  // ───────────────────────────── DER-01 ─────────────────────────────
  {
    id: 'DER-01',
    level: 2,
    topicIds: ['DER.1'],
    title: t("Introducción al derecho empresarial", "Introduction to business law"),
    summary: t(
      "El derecho empresarial reúne las normas obligatorias que tocan a un negocio, desde quién es la persona que lo opera hasta sus impuestos, trabajadores y clientes, y conocerlas evita multas, juicios y pérdidas.",
      "Business law brings together the binding rules that affect a business, from who the person running it is to its taxes, workers and customers, and knowing them avoids fines, lawsuits and losses.",
    ),
    minutes: 15,
    objectives: [
      t("Explicar qué es una norma jurídica y en qué se distingue de una regla moral o de cortesía.", "Explain what a legal rule is and how it differs from a moral rule or a rule of courtesy."),
      t("Ubicar las ramas del derecho (público, privado y social) que afectan la vida de una empresa.", "Locate the branches of law (public, private and social) that affect a company's life."),
      t("Distinguir entre persona física y persona moral y lo que eso significa para el patrimonio del dueño.", "Distinguish between an individual and a legal entity and what that means for the owner's assets."),
    ],
    theory: [
      {
        heading: t("¿Qué es el derecho y por qué le importa a un negocio?", "What is law and why does it matter to a business?"),
        body: [
          t(
            "El **derecho** es el conjunto de reglas que organizan la vida en sociedad y que el Estado puede **hacer cumplir**. A cada regla se le llama **norma jurídica**. Si no pagas una deuda, un juez puede ordenar que se embarguen tus bienes: eso es lo que la hace distinta de un consejo.",
            "**Law** is the set of rules that organize life in society and that the State can **enforce**. Each rule is called a **legal rule**. If you do not pay a debt, a judge can order your property to be seized: that is what makes it different from advice.",
          ),
          t(
            "Una norma jurídica es **coercible** (se puede imponer por la fuerza del Estado), **externa** (importa lo que haces, no lo que piensas), **bilateral** (a un derecho de alguien le corresponde una obligación de otro) y **heterónoma** (la crea una autoridad, no tú). Una regla **moral**, como decir la verdad a un amigo, o de **cortesía**, como saludar, no tiene esa fuerza.",
            "A legal rule is **coercible** (it can be imposed by the force of the State), **external** (what matters is what you do, not what you think), **bilateral** (someone's right corresponds to another's obligation) and **heteronomous** (an authority creates it, not you). A **moral** rule, like telling a friend the truth, or a rule of **courtesy**, like greeting people, lacks that force.",
          ),
          t(
            "El **derecho empresarial** no es una sola ley: es la suma de normas que tocan a un negocio. Desde que eliges su forma legal hasta que contratas, vendes, pagas impuestos o cierras, siempre hay reglas de por medio. Ignorarlas sale caro: multas, clausuras, demandas o contratos que no te protegen.",
            "**Business law** is not a single law: it is the sum of the rules that affect a business. From the moment you choose its legal form until you hire, sell, pay taxes or close, there are always rules involved. Ignoring them is expensive: fines, closures, lawsuits or contracts that do not protect you.",
          ),
          t(
            "Mini ejemplo: dar las gracias a un cliente es cortesía; si no lo haces, nadie te sanciona. Entregar el producto que te pagó es una obligación jurídica; si no lo haces, el cliente puede reclamar ante una autoridad.",
            "Mini example: thanking a customer is courtesy; if you do not, nobody sanctions you. Delivering the product they paid for is a legal obligation; if you do not, the customer can complain to an authority.",
          ),
        ],
        bullets: [
          t("Coercible: el Estado puede obligarte a cumplir.", "Coercible: the State can force you to comply."),
          t("Externa: juzga la conducta, no las intenciones.", "External: it judges conduct, not intentions."),
          t("Bilateral: un derecho de uno es una obligación de otro.", "Bilateral: one person's right is another's obligation."),
          t("Heterónoma: la dicta una autoridad competente.", "Heteronomous: a competent authority issues it."),
        ],
      },
      {
        heading: t("Las ramas del derecho que tocan a la empresa", "The branches of law that touch a company"),
        body: [
          t(
            "En México el derecho se suele dividir en tres grandes grupos. El **derecho público** regula la relación entre el Estado y los particulares, como el derecho **constitucional**, el **administrativo** (permisos y licencias) y el **fiscal** (impuestos).",
            "In Mexico, law is usually divided into three large groups. **Public law** governs the relationship between the State and private parties, such as **constitutional** law, **administrative** law (permits and licenses) and **tax** law.",
          ),
          t(
            "El **derecho privado** regula las relaciones entre particulares en igualdad: el **civil** (personas, bienes, familia, contratos de la vida diaria) y el **mercantil** (comercio, sociedades, títulos de crédito). El **derecho social** protege a grupos que necesitan más protección, como el **laboral** y el de **seguridad social**.",
            "**Private law** governs relationships between private parties on an equal footing: **civil** law (persons, property, family, everyday contracts) and **commercial** law (trade, companies, negotiable instruments). **Social law** protects groups that need more protection, such as **labor** law and **social security** law.",
          ),
          t(
            "Una empresa vive al mismo tiempo en las tres zonas. Por eso el **derecho empresarial** toma pedazos de cada rama: lo mercantil para constituirse y contratar, lo fiscal para pagar impuestos, lo laboral para su personal y lo administrativo para operar con permisos.",
            "A company lives in all three zones at once. That is why **business law** takes pieces from each branch: commercial law to incorporate and contract, tax law to pay taxes, labor law for its staff and administrative law to operate with permits.",
          ),
          t(
            "Mini ejemplo: una cafetería en Puebla firma la renta del local (privado), tramita su licencia con el municipio (público, administrativo), declara impuestos al SAT (público, fiscal) y contrata a un barista (social, laboral).",
            "Mini example: a coffee shop in Puebla signs the lease for its premises (private), gets its license from the municipality (public, administrative), files taxes with SAT (public, tax) and hires a barista (social, labor).",
          ),
        ],
        bullets: [
          t("Público: constitucional, administrativo, fiscal, penal.", "Public: constitutional, administrative, tax, criminal."),
          t("Privado: civil y mercantil.", "Private: civil and commercial."),
          t("Social: laboral y seguridad social.", "Social: labor and social security."),
          t("Derecho empresarial: combina normas de las tres ramas.", "Business law: combines rules from all three branches."),
        ],
      },
      {
        heading: t("¿Quién es el dueño legal? Persona física y persona moral", "Who is the legal owner? Individual and legal entity"),
        body: [
          t(
            "Para el derecho, una **persona** es quien puede tener derechos y obligaciones. Hay dos tipos. La **persona física** es el ser humano: tú. La **persona moral** es una organización a la que la ley le da vida propia, como una **sociedad mercantil**, una asociación civil o un sindicato.",
            "For the law, a **person** is whoever can have rights and obligations. There are two types. An **individual** (persona física) is a human being: you. A **legal entity** (persona moral) is an organization the law gives a life of its own, such as a **commercial company**, a civil association or a union.",
          ),
          t(
            "La persona moral tiene **personalidad jurídica** propia: su nombre, su domicilio, su **patrimonio** (lo que tiene y lo que debe) y sus representantes. Su patrimonio está separado del de sus socios. Por eso, en una sociedad como la S.A., las deudas del negocio por lo general las paga el negocio, no la casa del socio.",
            "A legal entity has its own **legal personality**: its name, its address, its **estate** (what it owns and what it owes) and its representatives. Its estate is separate from its partners'. That is why, in a company such as an S.A., the business's debts are generally paid by the business, not by the partner's house.",
          ),
          t(
            "Si emprendes como **persona física con actividad empresarial**, tú y el negocio son la misma persona. Es más sencillo y barato de iniciar, pero respondes de las deudas del negocio con **todos tus bienes**, salvo los que la ley protege de embargo.",
            "If you start a business as an **individual with business activity**, you and the business are the same person. It is simpler and cheaper to start, but you answer for the business's debts with **all your property**, except what the law protects from seizure.",
          ),
          t(
            "Mini ejemplo: Marisol vende ropa como persona física y su negocio queda a deber $80,000 que no puede pagar con la mercancía. El proveedor puede ir contra su ahorro personal. Si hubiera vendido a través de una S.A., en principio el proveedor solo podría cobrar con los bienes de la sociedad.",
            "Mini example: Marisol sells clothes as an individual and her business owes $80,000 it cannot pay with the inventory. The supplier can go after her personal savings. Had she sold through an S.A., in principle the supplier could only collect from the company's assets.",
          ),
        ],
        bullets: [
          t("Persona física: el ser humano.", "Individual: the human being."),
          t("Persona moral: organización con personalidad jurídica propia.", "Legal entity: organization with its own legal personality."),
          t("Patrimonio: conjunto de bienes, derechos y obligaciones de una persona.", "Estate: set of property, rights and obligations of a person."),
          t("Patrimonio separado: protege al socio de las deudas del negocio (con excepciones).", "Separate estate: shields the partner from the business's debts (with exceptions)."),
        ],
        formulas: [
          {
            name: t("Faltante que puede cobrarse al dueño persona física", "Shortfall that can be collected from an individual owner"),
            expression: "Faltante = Deudas del negocio − Valor de los bienes del negocio",
            variables: [
              { symbol: "Faltante", meaning: t("Lo que queda sin pagar después de vender los bienes del negocio, en pesos.", "What remains unpaid after selling the business's assets, in pesos.") },
              { symbol: "Deudas del negocio", meaning: t("Todo lo que el negocio debe (a proveedores, bancos, etc.), en pesos.", "Everything the business owes (to suppliers, banks, etc.), in pesos.") },
              { symbol: "Valor de los bienes del negocio", meaning: t("Lo que se obtiene al vender lo que tiene el negocio (mercancía, herramienta, equipo), en pesos.", "What is obtained by selling what the business has (inventory, tools, equipment), in pesos.") },
            ],
            steps: [
              t("Suma todo lo que debe el negocio.", "Add up everything the business owes."),
              t("Resta lo que se obtiene por los bienes del negocio.", "Subtract what is obtained for the business's assets."),
              t("Revisa quién es el dueño legal: si es persona física, el faltante puede cobrarse de su patrimonio personal; si es una sociedad de responsabilidad limitada, en principio no.", "Check who the legal owner is: if it is an individual, the shortfall can be collected from their personal estate; if it is a limited-liability company, in principle it cannot."),
            ],
            example: t(
              "Una estética de persona física debe $120,000 y sus bienes se venden en $45,000. Faltante: 120,000 − 45,000 = **$75,000**, que el acreedor puede cobrar de los ahorros o bienes personales de la dueña.",
              "A hair salon run by an individual owes $120,000 and its assets sell for $45,000. Shortfall: 120,000 − 45,000 = **$75,000**, which the creditor can collect from the owner's personal savings or property.",
            ),
            mistake: t(
              "Pensar que la persona física solo arriesga lo que está en el negocio. Eso aplica (en principio) a los socios de una S.A., no a quien opera como persona física.",
              "Thinking an individual only risks what is in the business. That applies (in principle) to partners in an S.A., not to someone operating as an individual.",
            ),
          },
        ],
      },
    ],
    examples: [
      {
        title: t("Las ramas del derecho en una semana de una taquería", "The branches of law in a taquería's week"),
        problem: t(
          "Don Beto abre una taquería en Guadalajara. Esta semana: (1) firma la renta del local con el dueño, (2) contrata a dos taqueros, (3) se da de alta en el RFC, (4) tramita la licencia de funcionamiento y (5) compra 50 kg de carne a un proveedor para venderla en tacos. ¿Qué rama del derecho regula cada hecho?",
          "Don Beto opens a taquería in Guadalajara. This week he: (1) signs the lease for the premises with the owner, (2) hires two taco cooks, (3) registers with the RFC (tax ID), (4) applies for his operating license and (5) buys 50 kg of meat from a supplier to sell as tacos. Which branch of law governs each event?",
        ),
        steps: [
          t("Renta del local: acuerdo entre particulares sobre un inmueble → derecho privado (civil).", "Lease of the premises: agreement between private parties over real estate → private law (civil)."),
          t("Contratar taqueros: relación de trabajo con subordinación y salario → derecho social (laboral).", "Hiring cooks: an employment relationship with subordination and wages → social law (labor)."),
          t("Alta en el RFC: relación con la autoridad tributaria → derecho público (fiscal).", "RFC registration: relationship with the tax authority → public law (tax)."),
          t("Licencia de funcionamiento: permiso de la autoridad municipal → derecho público (administrativo).", "Operating license: a permit from the municipal authority → public law (administrative)."),
          t("Comprar carne para revender: compra con propósito de lucro → derecho privado (mercantil).", "Buying meat to resell: a purchase for profit → private law (commercial)."),
        ],
        result: t(
          "En solo una semana, la taquería toca el derecho privado, el público y el social. Por eso el derecho empresarial combina varias ramas.",
          "In just one week, the taquería touches private, public and social law. That is why business law combines several branches.",
        ),
      },
      {
        title: t("¿Cuánto arriesga el dueño según su forma legal?", "How much does the owner risk depending on the legal form?"),
        problem: t(
          "Dos negocios iguales deben $500,000 a proveedores y sus bienes del negocio valen $200,000. El negocio A es de Ana como persona física; el negocio B es una S.A. donde Ana aportó $100,000. Ana tiene $350,000 de ahorro personal. ¿Cuánto de su ahorro queda expuesto en cada caso? (Ejemplo hipotético y simplificado.)",
          "Two identical businesses owe $500,000 to suppliers and their business assets are worth $200,000. Business A belongs to Ana as an individual; business B is an S.A. in which Ana contributed $100,000. Ana has $350,000 in personal savings. How much of her savings is exposed in each case? (Hypothetical, simplified example.)",
        ),
        steps: [
          t("Faltante del negocio: 500,000 − 200,000 = $300,000 que los bienes del negocio no alcanzan a cubrir.", "Business shortfall: 500,000 − 200,000 = $300,000 that the business assets cannot cover."),
          t("Negocio A (persona física): Ana y el negocio son la misma persona, así que los $300,000 pueden cobrarse de su ahorro.", "Business A (individual): Ana and the business are the same person, so the $300,000 can be collected from her savings."),
          t("Negocio B (S.A.): la sociedad tiene patrimonio propio; Ana pierde lo que aportó ($100,000), pero su ahorro personal en principio no responde.", "Business B (S.A.): the company has its own estate; Ana loses what she contributed ($100,000), but her personal savings in principle are not liable."),
        ],
        result: t(
          "Como persona física, Ana arriesga $300,000 de su ahorro; con la S.A., $0 de su ahorro (solo pierde su aportación). La protección tiene excepciones, por ejemplo si ella firmó como aval o hubo fraude.",
          "As an individual, Ana risks $300,000 of her savings; with the S.A., $0 of her savings (she only loses her contribution). The protection has exceptions, for example if she signed as guarantor or there was fraud.",
        ),
      },
    ],
    keyPoints: [
      t("La norma jurídica es coercible: el Estado puede hacerla cumplir.", "A legal rule is coercible: the State can enforce it."),
      t("El derecho se agrupa en público, privado y social.", "Law is grouped into public, private and social."),
      t("El derecho empresarial combina lo mercantil, fiscal, laboral y administrativo.", "Business law combines commercial, tax, labor and administrative law."),
      t("Persona física = ser humano; persona moral = organización con personalidad propia.", "Individual = human being; legal entity = organization with its own personality."),
      t("En una persona moral, el patrimonio del negocio está separado del de los socios.", "In a legal entity, the business's estate is separate from the partners'."),
    ],
    normativeNote: NOTE_LAW,
    exerciseIds: ['DER-01-E1', 'DER-01-E2', 'DER-01-E3', 'DER-01-E4', 'DER-01-E5', 'DER-01-E6'],
  },

  // ───────────────────────────── DER-02 ─────────────────────────────
  {
    id: 'DER-02',
    level: 2,
    topicIds: ['DER.2'],
    title: t("Marco jurídico mexicano", "The Mexican legal framework"),
    summary: t(
      "En México las normas forman una pirámide con la Constitución en la cima, se crean en los tres niveles de gobierno y nacen de fuentes como la ley y la jurisprudencia; saber dónde está cada regla te dice cuál pesa más.",
      "In Mexico, rules form a pyramid with the Constitution at the top, are created at the three levels of government and come from sources such as statutes and case law; knowing where each rule sits tells you which one carries more weight.",
    ),
    minutes: 16,
    objectives: [
      t("Ordenar las normas mexicanas en la pirámide jurídica, de la Constitución a los contratos.", "Rank Mexican rules in the legal pyramid, from the Constitution to contracts."),
      t("Distinguir qué regula la Federación, qué los estados y qué los municipios.", "Distinguish what the Federation, the states and the municipalities regulate."),
      t("Describir cómo nace una ley federal y cuáles son las fuentes del derecho.", "Describe how a federal law is born and what the sources of law are."),
    ],
    theory: [
      {
        heading: t("La pirámide: qué norma pesa más", "The pyramid: which rule carries more weight"),
        body: [
          t(
            "Las normas no valen todas igual. Se ordenan en una **jerarquía**, como una pirámide. En la cima está la **Constitución Política de los Estados Unidos Mexicanos** (de 1917, con muchas reformas). Ninguna norma inferior puede contradecirla.",
            "Not all rules are worth the same. They are ranked in a **hierarchy**, like a pyramid. At the top is the **Political Constitution of the United Mexican States** (from 1917, with many amendments). No lower rule may contradict it.",
          ),
          t(
            "La propia Constitución (en su artículo 133) dice que ella, las leyes del Congreso que emanen de ella y los **tratados internacionales** celebrados conforme a ella son la **Ley Suprema de toda la Unión**. Debajo están las **leyes** (federales y locales), luego los **reglamentos**, que detallan cómo aplicar una ley, y después las **normas administrativas** (por ejemplo, Normas Oficiales Mexicanas o reglas de una dependencia).",
            "The Constitution itself (in its Article 133) says that it, the laws of Congress that derive from it and the **international treaties** made in accordance with it are the **Supreme Law of the whole Union**. Below are the **statutes** (federal and local), then the **regulations**, which detail how to apply a statute, and then **administrative rules** (for example, Official Mexican Standards or an agency's rules).",
          ),
          t(
            "En la base están los actos individuales, como un **contrato** o una sentencia: solo obligan a quienes participan. La regla de oro: la norma de abajo **no puede ir contra** la de arriba. Un reglamento que contradice su ley puede impugnarse ante los tribunales.",
            "At the base are individual acts, such as a **contract** or a court ruling: they only bind those involved. The golden rule: a lower rule **cannot go against** a higher one. A regulation that contradicts its statute can be challenged in court.",
          ),
          t(
            "Mini ejemplo: si un contrato de trabajo dice que el empleado renuncia a sus vacaciones, esa cláusula no vale, porque la ley laboral (que está más arriba) le reconoce ese derecho.",
            "Mini example: if an employment contract says the employee waives their vacation, that clause is void, because labor law (which ranks higher) grants that right.",
          ),
        ],
        bullets: [
          t("1. Constitución, leyes del Congreso que emanan de ella y tratados internacionales.", "1. Constitution, laws of Congress derived from it and international treaties."),
          t("2. Leyes federales y locales.", "2. Federal and local statutes."),
          t("3. Reglamentos: detallan cómo aplicar las leyes.", "3. Regulations: detail how to apply statutes."),
          t("4. Normas administrativas: NOM, reglas, lineamientos.", "4. Administrative rules: NOMs, rules, guidelines."),
          t("5. Actos individuales: contratos, sentencias, permisos.", "5. Individual acts: contracts, rulings, permits."),
        ],
      },
      {
        heading: t("Federación, estados y municipios", "Federation, states and municipalities"),
        body: [
          t(
            "México es una **república federal**. Hay tres niveles de gobierno: la **Federación**, las **32 entidades federativas** (31 estados y la Ciudad de México) y los **municipios** (en la CDMX, las alcaldías). Cada uno crea normas en los temas que la Constitución le asigna.",
            "Mexico is a **federal republic**. There are three levels of government: the **Federation**, the **32 federal entities** (31 states and Mexico City) and the **municipalities** (in Mexico City, the boroughs or alcaldías). Each one makes rules on the matters the Constitution assigns to it.",
          ),
          t(
            "Para un negocio, lo **federal** incluye el comercio (el Código de Comercio es uno solo para todo el país), el trabajo (la Ley Federal del Trabajo) y los impuestos federales como el ISR y el IVA. Lo **estatal** incluye, por ejemplo, el código civil de cada estado y el impuesto sobre nóminas. Lo **municipal** incluye el uso de suelo, las licencias de funcionamiento y el predial.",
            "For a business, **federal** matters include commerce (the Commercial Code is a single one for the whole country), labor (the Federal Labor Law) and federal taxes such as income tax (ISR) and VAT (IVA). **State** matters include, for example, each state's civil code and the payroll tax. **Municipal** matters include zoning, operating licenses and property tax (predial).",
          ),
          t(
            "El poder se divide además en tres: el **Legislativo** hace las leyes (a nivel federal, el Congreso de la Unión, con la Cámara de Diputados y el Senado), el **Ejecutivo** las aplica y emite reglamentos, y el **Judicial** resuelve conflictos e interpreta las leyes, con la **Suprema Corte de Justicia de la Nación** en la cima.",
            "Power is also split in three: the **Legislative** branch makes laws (at the federal level, the Congress of the Union, with the Chamber of Deputies and the Senate), the **Executive** applies them and issues regulations, and the **Judicial** branch resolves disputes and interprets laws, with the **Supreme Court of Justice of the Nation** at the top.",
          ),
          t(
            "Mini ejemplo: una tienda en Mérida paga ISR a la Federación, impuesto sobre nóminas a Yucatán y predial al municipio. Son tres autoridades distintas, cada una con sus propias reglas.",
            "Mini example: a store in Mérida pays income tax to the Federation, payroll tax to Yucatán and property tax to the municipality. They are three different authorities, each with its own rules.",
          ),
        ],
      },
      {
        heading: t("Cómo nace una ley y de dónde sale el derecho", "How a law is born and where law comes from"),
        body: [
          t(
            "Una ley federal sigue un **proceso legislativo**: alguien con facultad presenta una **iniciativa** (por ejemplo, el Presidente o un legislador); se **discute y aprueba** en las dos Cámaras; el Ejecutivo la **promulga** (o puede hacerle observaciones) y se **publica** en el **Diario Oficial de la Federación (DOF)**.",
            "A federal law follows a **legislative process**: someone with authority submits a **bill** (for example, the President or a legislator); it is **debated and approved** in both Chambers; the Executive **enacts** it (or may raise objections) and it is **published** in the **Official Gazette of the Federation (DOF)**.",
          ),
          t(
            "Publicar no siempre es lo mismo que empezar a aplicar. La propia ley dice desde cuándo **entra en vigor**; al tiempo entre la publicación y la entrada en vigor se le llama **vacatio legis**. Por eso, al revisar una regla, conviene ver su fecha de publicación y sus **artículos transitorios**.",
            "Publishing is not always the same as starting to apply. The law itself says when it **comes into force**; the time between publication and entry into force is called **vacatio legis**. That is why, when you check a rule, it helps to look at its publication date and its **transitional articles**.",
          ),
          t(
            "Las **fuentes formales** del derecho son los caminos por los que nacen las normas: la **legislación** (leyes y reglamentos), la **jurisprudencia** (criterios obligatorios que fijan ciertos tribunales al interpretar la ley) y la **costumbre** (prácticas repetidas que se consideran obligatorias, con un papel menor en México). La **doctrina** (lo que escriben los juristas) ayuda a entender, pero no obliga por sí misma.",
            "The **formal sources** of law are the ways rules are born: **legislation** (statutes and regulations), **case law** or jurisprudencia (binding criteria that certain courts set when interpreting the law) and **custom** (repeated practices considered binding, with a minor role in Mexico). **Legal doctrine** (what legal scholars write) helps understanding but is not binding by itself.",
          ),
          t(
            "Mini ejemplo: un contador se entera por redes sociales de un cambio en una ley. Antes de aplicarlo, lo busca en el DOF y revisa los transitorios para saber desde qué fecha cuenta.",
            "Mini example: an accountant hears about a change in a law on social media. Before applying it, they look it up in the DOF and check the transitional articles to know from what date it counts.",
          ),
        ],
        formulas: [
          {
            name: t("Ruta para crear una ley federal", "Route to create a federal law"),
            expression: "Iniciativa → Discusión y aprobación (ambas Cámaras) → Promulgación → Publicación en el DOF → Entrada en vigor",
            variables: [
              { symbol: "Iniciativa", meaning: t("La propuesta de ley que presenta alguien con facultad para hacerlo (por ejemplo, el Presidente o un legislador).", "The bill submitted by someone with authority to do so (for example, the President or a legislator).") },
              { symbol: "Discusión y aprobación (ambas Cámaras)", meaning: t("La Cámara de Diputados y el Senado la debaten y votan; debe aprobarse en las dos.", "The Chamber of Deputies and the Senate debate and vote on it; it must pass in both.") },
              { symbol: "Promulgación", meaning: t("El Presidente (el Ejecutivo) la firma y ordena que se publique.", "The President (the Executive) signs it and orders its publication.") },
              { symbol: "Publicación en el DOF", meaning: t("Se da a conocer en el Diario Oficial de la Federación, el periódico oficial del gobierno.", "It is made public in the Official Gazette of the Federation, the government's official newspaper.") },
              { symbol: "Entrada en vigor", meaning: t("El día desde el que la ley empieza a aplicarse, según lo que ella misma diga en sus transitorios.", "The day from which the law starts to apply, according to what its own transitional articles say.") },
            ],
            steps: [
              t("Se presenta la iniciativa.", "The bill is submitted."),
              t("Se discute y se aprueba en las dos Cámaras.", "It is debated and approved in both Chambers."),
              t("El Ejecutivo la promulga y se publica en el DOF.", "The Executive enacts it and it is published in the DOF."),
              t("Lee los artículos transitorios para saber desde qué fecha se aplica.", "Read the transitional articles to know from what date it applies."),
            ],
            example: t(
              "Una reforma hipotética se publica en el DOF el 10 de marzo y su transitorio dice que entra en vigor 30 días naturales después. Marzo tiene 31 días: del 10 al 31 de marzo van 21 días, y faltan 30 − 21 = 9. Entra en vigor el **9 de abril**. Entre el 10 de marzo y el 9 de abril corre la vacatio legis.",
              "A hypothetical reform is published in the DOF on March 10 and its transitional article says it comes into force 30 calendar days later. March has 31 days: from March 10 to 31 there are 21 days, leaving 30 − 21 = 9. It comes into force on **April 9**. Between March 10 and April 9 the vacatio legis runs.",
            ),
            mistake: t(
              "Creer que la Suprema Corte aprueba las leyes, o que una ley se aplica el mismo día que se publica. La Corte interpreta las leyes, y la fecha de aplicación la dicen los transitorios.",
              "Believing the Supreme Court approves laws, or that a law applies the same day it is published. The Court interprets laws, and the transitional articles state the date it applies.",
            ),
          },
        ],
      },
    ],
    examples: [
      {
        title: t("¿Qué norma aplica cuando chocan?", "Which rule applies when they clash?"),
        problem: t(
          "Una empresa revisa una regla: una ley federal le da 30 días para presentar un aviso, pero un reglamento de esa ley dice 10 días. ¿Cuál debe tomar como referencia y qué puede hacer si la autoridad le exige los 10 días? (Caso hipotético.)",
          "A company checks a rule: a federal statute gives it 30 days to file a notice, but a regulation of that statute says 10 days. Which should it use as reference, and what can it do if the authority demands the 10 days? (Hypothetical case.)",
        ),
        steps: [
          t("Ubica ambas normas en la pirámide: la ley está por encima del reglamento.", "Place both rules in the pyramid: the statute ranks above the regulation."),
          t("El reglamento solo puede detallar la ley, no reducir un plazo que la ley otorga.", "The regulation may only detail the statute, not shorten a period the statute grants."),
          t("Si la autoridad aplica los 10 días, la empresa puede impugnar ese acto con base en la ley (con apoyo de un abogado).", "If the authority applies the 10 days, the company can challenge that act based on the statute (with a lawyer's help)."),
        ],
        result: t(
          "Prevalece la ley: 30 días. El reglamento que la contradice puede combatirse ante los tribunales.",
          "The statute prevails: 30 days. The regulation that contradicts it can be challenged in court.",
        ),
      },
      {
        title: t("Tres niveles de gobierno en un solo local", "Three levels of government in a single shop"),
        problem: t(
          "Lucía abre una papelería en Querétaro con un empleado. Identifica qué nivel de gobierno regula: (a) el impuesto sobre nóminas, (b) la Ley Federal del Trabajo que protege a su empleado, (c) la licencia de funcionamiento y (d) el IVA que cobra en sus ventas.",
          "Lucía opens a stationery store in Querétaro with one employee. Identify which level of government regulates: (a) the payroll tax, (b) the Federal Labor Law protecting her employee, (c) the operating license and (d) the VAT she charges on sales.",
        ),
        steps: [
          t("(a) Impuesto sobre nóminas: lo establecen y cobran los estados → estatal.", "(a) Payroll tax: set and collected by the states → state."),
          t("(b) Ley Federal del Trabajo: el Congreso de la Unión legisla en materia laboral → federal.", "(b) Federal Labor Law: the Congress of the Union legislates on labor → federal."),
          t("(c) Licencia de funcionamiento: la otorga el municipio → municipal.", "(c) Operating license: granted by the municipality → municipal."),
          t("(d) IVA: impuesto federal que administra el SAT → federal.", "(d) VAT: a federal tax administered by SAT → federal."),
        ],
        result: t(
          "Lucía trata con los tres niveles: federal (b y d), estatal (a) y municipal (c).",
          "Lucía deals with all three levels: federal (b and d), state (a) and municipal (c).",
        ),
      },
    ],
    keyPoints: [
      t("La Constitución está en la cima: ninguna norma puede contradecirla.", "The Constitution is at the top: no rule may contradict it."),
      t("Orden básico: Constitución y tratados → leyes → reglamentos → normas administrativas → contratos.", "Basic order: Constitution and treaties → statutes → regulations → administrative rules → contracts."),
      t("Tres niveles de gobierno: federal, estatal y municipal; el comercio y el trabajo son federales.", "Three levels of government: federal, state and municipal; commerce and labor are federal."),
      t("Una ley federal se publica en el DOF y entra en vigor cuando ella misma lo indica.", "A federal law is published in the DOF and comes into force when it says so."),
      t("Fuentes formales: legislación, jurisprudencia y costumbre.", "Formal sources: legislation, case law and custom."),
    ],
    normativeNote: NOTE_LAW,
    exerciseIds: ['DER-02-E1', 'DER-02-E2', 'DER-02-E3', 'DER-02-E4', 'DER-02-E5', 'DER-02-E6'],
  },

  // ───────────────────────────── DER-03 ─────────────────────────────
  {
    id: 'DER-03',
    level: 2,
    topicIds: ['DER.3'],
    title: t("Derecho mercantil", "Commercial law"),
    summary: t(
      "El derecho mercantil regula los actos de comercio, a los comerciantes y los títulos de crédito como el pagaré y el cheque, con reglas pensadas para que los negocios sean rápidos y seguros.",
      "Commercial law governs commercial acts, merchants and negotiable instruments such as promissory notes and checks, with rules designed to make business fast and secure.",
    ),
    minutes: 16,
    objectives: [
      t("Distinguir un acto de comercio de un acto civil y reconocer un acto mixto.", "Distinguish a commercial act from a civil act and recognize a mixed act."),
      t("Identificar quién es comerciante y cuáles son sus obligaciones básicas.", "Identify who is a merchant and what their basic obligations are."),
      t("Explicar qué es un título de crédito y sus principales características.", "Explain what a negotiable instrument is and its main characteristics."),
    ],
    theory: [
      {
        heading: t("Actos de comercio: cuándo entra el derecho mercantil", "Commercial acts: when commercial law applies"),
        body: [
          t(
            "El **derecho mercantil** es la rama del derecho privado que regula el **comercio**. Su ley principal es el **Código de Comercio**, una ley federal de finales del siglo XIX que se ha reformado muchas veces. Para lo que no prevé, se aplica de forma **supletoria** el Código Civil Federal.",
            "**Commercial law** is the branch of private law that governs **trade**. Its main statute is the **Commercial Code**, a federal law from the late 19th century that has been amended many times. For what it does not cover, the Federal Civil Code applies **supplementarily**.",
          ),
          t(
            "La pieza clave es el **acto de comercio**. El Código de Comercio trae una lista: por ejemplo, comprar para **revender con ganancia** (especulación comercial), las operaciones de **bancos**, las **empresas** de suministro, transporte o construcción, y todo lo relacionado con **títulos de crédito** como pagarés y cheques.",
            "The key piece is the **commercial act**. The Commercial Code includes a list: for example, buying to **resell at a profit** (commercial speculation), **bank** operations, supply, transport or construction **enterprises**, and everything related to **negotiable instruments** such as promissory notes and checks.",
          ),
          t(
            "Si compras un refrigerador para tu casa, es un **acto civil**: no buscas revenderlo. Si una tienda lo compra para venderlo, es **acto de comercio**. Cuando un acto es mercantil para una parte y civil para la otra (la tienda vende y tú compras para tu casa), es un **acto mixto**, y los conflictos se resuelven con las leyes mercantiles.",
            "If you buy a fridge for your home, it is a **civil act**: you do not intend to resell it. If a store buys it to sell it, it is a **commercial act**. When an act is commercial for one party and civil for the other (the store sells and you buy for your home), it is a **mixed act**, and disputes are resolved under commercial law.",
          ),
          t(
            "Mini ejemplo: una abarrotera compra 300 cajas de galletas para surtir tienditas: acto de comercio. Doña Rosa compra una caja para su familia: acto civil para ella.",
            "Mini example: a grocery wholesaler buys 300 boxes of cookies to supply corner stores: a commercial act. Doña Rosa buys one box for her family: a civil act for her.",
          ),
        ],
        bullets: [
          t("Acto de comercio: compra para revender, operaciones bancarias, títulos de crédito, empresas.", "Commercial act: buying to resell, bank operations, negotiable instruments, enterprises."),
          t("Acto civil: uso o consumo personal, sin propósito de comerciar.", "Civil act: personal use or consumption, without a trading purpose."),
          t("Acto mixto: mercantil para una parte y civil para la otra.", "Mixed act: commercial for one party and civil for the other."),
        ],
      },
      {
        heading: t("El comerciante y sus obligaciones", "The merchant and their obligations"),
        body: [
          t(
            "Para el Código de Comercio son **comerciantes** las personas con capacidad legal que hacen del comercio su **ocupación ordinaria**, y las **sociedades** constituidas conforme a las leyes mercantiles. Vender una vez tu bici usada no te vuelve comerciante; tener una tienda abierta todos los días, sí.",
            "Under the Commercial Code, **merchants** are persons with legal capacity who make trade their **ordinary occupation**, and **companies** formed under commercial laws. Selling your used bike once does not make you a merchant; running a store that opens every day does.",
          ),
          t(
            "Ser comerciante trae obligaciones básicas: dar **publicidad** a ciertos actos inscribiéndolos en el **Registro Público de Comercio** (por ejemplo, la constitución de una sociedad), llevar **contabilidad** y **conservar** la correspondencia y documentos de su negocio durante el plazo que marca la ley.",
            "Being a merchant brings basic obligations: giving **publicity** to certain acts by registering them in the **Public Registry of Commerce** (for example, the incorporation of a company), keeping **accounting records** and **preserving** the business's correspondence and documents for the period the law sets.",
          ),
          t(
            "Una idea central del derecho mercantil es la **rapidez y la buena fe**: el comercio necesita reglas simples para que los tratos se cierren pronto y los terceros puedan confiar en lo que está registrado. Por eso el registro es público: cualquiera puede consultar quién representa a una sociedad.",
            "A central idea of commercial law is **speed and good faith**: trade needs simple rules so deals close quickly and third parties can rely on what is registered. That is why the registry is public: anyone can check who represents a company.",
          ),
          t(
            "Mini ejemplo: antes de vender a crédito a una empresa nueva, un proveedor revisa en el Registro Público de Comercio quién es su administrador y si sus poderes le permiten firmar.",
            "Mini example: before selling on credit to a new company, a supplier checks the Public Registry of Commerce to see who its manager is and whether their powers allow them to sign.",
          ),
        ],
      },
      {
        heading: t("Títulos de crédito: pagaré, letra de cambio y cheque", "Negotiable instruments: promissory note, bill of exchange and check"),
        body: [
          t(
            "Un **título de crédito** es un documento que **lleva dentro un derecho**: quien lo tiene legítimamente puede cobrarlo. Se regulan en la **Ley General de Títulos y Operaciones de Crédito**. Los más comunes son el **pagaré** (prometo pagarte), la **letra de cambio** (ordeno a otro que te pague) y el **cheque** (ordeno a mi banco que te pague).",
            "A **negotiable instrument** is a document that **carries a right within it**: whoever lawfully holds it can collect it. They are governed by the **General Law of Negotiable Instruments and Credit Operations**. The most common are the **promissory note** (I promise to pay you), the **bill of exchange** (I order someone else to pay you) and the **check** (I order my bank to pay you).",
          ),
          t(
            "Sus características: **incorporación** (el derecho va unido al papel), **literalidad** (vale lo que dice el texto, ni más ni menos), **autonomía** (cada nuevo tenedor adquiere un derecho propio), **legitimación** (para cobrar hay que presentarlo) y **circulación** (se puede transmitir, por ejemplo por endoso).",
            "Their characteristics: **incorporation** (the right is tied to the paper), **literalness** (it is worth what the text says, no more, no less), **autonomy** (each new holder acquires a right of their own), **legitimation** (you must present it to collect) and **circulation** (it can be transferred, for example by endorsement).",
          ),
          t(
            "Su ventaja práctica es enorme: si el deudor no paga, el título permite iniciar un **juicio ejecutivo mercantil**, más rápido que un juicio ordinario, porque el documento ya prueba la deuda. Por eso los negocios piden pagarés al vender a crédito.",
            "Their practical advantage is huge: if the debtor does not pay, the instrument allows filing a **commercial executive lawsuit**, faster than an ordinary lawsuit, because the document already proves the debt. That is why businesses ask for promissory notes when selling on credit.",
          ),
          t(
            "Mini ejemplo: una mueblería vende una sala a crédito y el cliente firma un pagaré por $12,000. Si el pagaré dice $12,000, eso es lo que se puede cobrar (más los intereses pactados en él), aunque después alguien diga que \"se habló de otra cantidad\".",
            "Mini example: a furniture store sells a sofa set on credit and the customer signs a promissory note for $12,000. If the note says $12,000, that is what can be collected (plus the interest agreed in it), even if someone later claims \"another amount was discussed\".",
          ),
        ],
        formulas: [
          {
            name: t("Interés simple y total a pagar de un pagaré", "Simple interest and total due on a promissory note"),
            expression: "Interés = Capital × Tasa del periodo × Número de periodos;  Total = Capital + Interés",
            variables: [
              { symbol: "Interés", meaning: t("Lo que se paga de más por usar el dinero prestado, en pesos.", "The extra paid for using the borrowed money, in pesos.") },
              { symbol: "Capital", meaning: t("La cantidad original escrita en el pagaré, en pesos.", "The original amount written on the note, in pesos.") },
              { symbol: "Tasa del periodo", meaning: t("El porcentaje de interés pactado por cada periodo (por ejemplo, 2% mensual), escrito en decimal.", "The agreed interest percentage per period (for example, 2% per month), written as a decimal.") },
              { symbol: "Número de periodos", meaning: t("Cuántos periodos pasan hasta el vencimiento, en la misma unidad que la tasa (meses si la tasa es mensual).", "How many periods pass until maturity, in the same unit as the rate (months if the rate is monthly).") },
              { symbol: "Total", meaning: t("Lo que se paga al vencimiento: capital más intereses, en pesos.", "What is paid at maturity: principal plus interest, in pesos.") },
            ],
            steps: [
              t("Convierte la tasa a decimal: 1.5% = 0.015.", "Convert the rate to a decimal: 1.5% = 0.015."),
              t("Revisa que la tasa y el plazo estén en la misma unidad (tasa mensual con meses).", "Check that the rate and the term are in the same unit (monthly rate with months)."),
              t("Multiplica Capital × Tasa × Número de periodos para obtener el interés.", "Multiply Principal × Rate × Number of periods to get the interest."),
              t("Suma el interés al capital para obtener el total a pagar.", "Add the interest to the principal to get the total due."),
            ],
            example: t(
              "Un pagaré de $30,000 con interés simple de 1.5% mensual a 4 meses: tasa = 0.015. Interés: 30,000 × 0.015 × 4 = $1,800. Total: 30,000 + 1,800 = **$31,800**.",
              "A $30,000 note with simple interest of 1.5% per month for 4 months: rate = 0.015. Interest: 30,000 × 0.015 × 4 = $1,800. Total: 30,000 + 1,800 = **$31,800**.",
            ),
            interpret: t(
              "En el interés simple el interés de cada periodo es igual, porque siempre se calcula sobre el capital original.",
              "With simple interest, each period's interest is the same, because it is always computed on the original principal.",
            ),
            mistake: t(
              "Dar solo el interés cuando se pide el total, u olvidar multiplicar por el número de periodos.",
              "Giving only the interest when the total is asked for, or forgetting to multiply by the number of periods.",
            ),
          },
        ],
      },
    ],
    examples: [
      {
        title: t("Civil, mercantil o mixto", "Civil, commercial or mixed"),
        problem: t(
          "Clasifica tres operaciones: (1) una farmacia compra 1,000 cajas de paracetamol al laboratorio para venderlas; (2) Jorge compra un celular en una tienda departamental para usarlo; (3) Jorge le vende ese celular usado a su prima, una sola vez.",
          "Classify three transactions: (1) a pharmacy buys 1,000 boxes of paracetamol from the laboratory to sell them; (2) Jorge buys a phone at a department store to use it; (3) Jorge sells that used phone to his cousin, a single time.",
        ),
        steps: [
          t("(1) Ambos son comerciantes y la farmacia compra para revender → acto de comercio para las dos partes.", "(1) Both are merchants and the pharmacy buys to resell → commercial act for both parties."),
          t("(2) Para la tienda es venta mercantil; para Jorge es consumo personal → acto mixto.", "(2) For the store it is a commercial sale; for Jorge it is personal consumption → mixed act."),
          t("(3) Dos particulares, sin propósito de lucro habitual → acto civil.", "(3) Two private parties, without a habitual profit purpose → civil act."),
        ],
        result: t(
          "(1) Mercantil, (2) mixto (se rige por la ley mercantil en caso de conflicto) y (3) civil.",
          "(1) Commercial, (2) mixed (governed by commercial law in case of dispute) and (3) civil.",
        ),
      },
      {
        title: t("¿Cuánto se cobra con un pagaré?", "How much is collected with a promissory note?"),
        problem: t(
          "Un taller firma un pagaré por $40,000 a favor de su proveedor, con interés simple de 1.5% mensual y vencimiento a 4 meses (tasa hipotética). ¿Cuánto debe pagar al vencimiento?",
          "A workshop signs a promissory note for $40,000 in favor of its supplier, with simple interest of 1.5% per month and maturity in 4 months (hypothetical rate). How much must it pay at maturity?",
        ),
        steps: [
          t("Interés = 40,000 × 0.015 × 4 = $2,400.", "Interest = 40,000 × 0.015 × 4 = $2,400."),
          t("Total = capital + interés = 40,000 + 2,400 = $42,400.", "Total = principal + interest = 40,000 + 2,400 = $42,400."),
          t("Por literalidad, se cobra lo que está escrito en el pagaré: el capital y la tasa pactada.", "By literalness, what is written in the note is collected: the principal and the agreed rate."),
        ],
        result: t(
          "Al vencimiento debe pagar $42,400. Si no paga, el proveedor puede demandar en la vía ejecutiva mercantil con el pagaré.",
          "At maturity it must pay $42,400. If it does not, the supplier can sue through the commercial executive procedure using the note.",
        ),
      },
    ],
    keyPoints: [
      t("El Código de Comercio es la ley mercantil principal; el Código Civil Federal es supletorio.", "The Commercial Code is the main commercial statute; the Federal Civil Code applies supplementarily."),
      t("Comprar para revender con ganancia es el acto de comercio típico.", "Buying to resell at a profit is the typical commercial act."),
      t("Acto mixto: mercantil para una parte, civil para la otra; se rige por la ley mercantil.", "Mixed act: commercial for one party, civil for the other; governed by commercial law."),
      t("El comerciante debe registrar ciertos actos, llevar contabilidad y conservar documentos.", "A merchant must register certain acts, keep accounting records and preserve documents."),
      t("Títulos de crédito: incorporación, literalidad, autonomía, legitimación y circulación.", "Negotiable instruments: incorporation, literalness, autonomy, legitimation and circulation."),
    ],
    normativeNote: NOTE_COMMERCE,
    exerciseIds: ['DER-03-E1', 'DER-03-E2', 'DER-03-E3', 'DER-03-E4', 'DER-03-E5', 'DER-03-E6'],
  },

  // ───────────────────────────── DER-04 ─────────────────────────────
  {
    id: 'DER-04',
    level: 2,
    topicIds: ['DER.4'],
    title: t("Sociedades mercantiles", "Commercial companies"),
    summary: t(
      "Una sociedad mercantil es un negocio con personalidad propia formado por socios; la ley mexicana ofrece varios tipos y la gran diferencia entre ellos es hasta dónde responde cada socio por las deudas.",
      "A commercial company is a business with its own legal personality formed by partners; Mexican law offers several types, and the big difference between them is how far each partner is liable for the debts.",
    ),
    minutes: 17,
    objectives: [
      t("Enumerar los tipos de sociedad que reconoce la Ley General de Sociedades Mercantiles.", "List the company types recognized by the General Law of Commercial Companies."),
      t("Comparar la responsabilidad de los socios en la S.A., la S. de R.L., la S.A.S. y la sociedad en nombre colectivo.", "Compare partners' liability in the S.A., S. de R.L., S.A.S. and general partnership."),
      t("Identificar los órganos de una S.A. y qué significa la modalidad de capital variable.", "Identify the bodies of an S.A. and what the variable-capital modality means."),
    ],
    theory: [
      {
        heading: t("Qué es una sociedad y qué tipos hay", "What a company is and what types exist"),
        body: [
          t(
            "Una **sociedad mercantil** nace cuando dos o más personas (o una sola, en algunos tipos) **aportan** dinero, bienes o trabajo para un fin común de negocio. Al constituirse conforme a la ley adquiere **personalidad jurídica**: puede firmar contratos, tener cuentas y deber dinero a su nombre.",
            "A **commercial company** is born when two or more persons (or a single one, in some types) **contribute** money, property or work toward a common business purpose. When formed under the law, it acquires **legal personality**: it can sign contracts, hold accounts and owe money in its own name.",
          ),
          t(
            "La **Ley General de Sociedades Mercantiles (LGSM)** reconoce estos tipos: sociedad en **nombre colectivo**, en **comandita simple**, de **responsabilidad limitada** (S. de R.L.), **anónima** (S.A.), en **comandita por acciones**, **cooperativa** y **por acciones simplificada** (S.A.S.). En la práctica, las más usadas son la S.A. y la S. de R.L.",
            "The **General Law of Commercial Companies (LGSM)** recognizes these types: **general partnership** (nombre colectivo), **limited partnership** (comandita simple), **limited liability company** (S. de R.L.), **corporation** (sociedad anónima, S.A.), **partnership limited by shares** (comandita por acciones), **cooperative** and **simplified stock company** (S.A.S.). In practice, the most used are the S.A. and the S. de R.L.",
          ),
          t(
            "La sociedad usa una **razón social** (formada con nombres de socios, típica de las sociedades de personas) o una **denominación** (un nombre de fantasía, típica de la S.A.), seguida de sus siglas. Así, quien lee \"Panadería La Espiga, S.A. de C.V.\" sabe de inmediato qué tipo de sociedad tiene enfrente.",
            "The company uses a **firm name** (built from partners' names, typical of partnerships) or a **corporate name** (an invented name, typical of the S.A.), followed by its acronym. So whoever reads \"Panadería La Espiga, S.A. de C.V.\" immediately knows what type of company they are dealing with.",
          ),
          t(
            "Mini ejemplo: tres amigos quieren abrir una agencia de viajes y prefieren que nadie arriesgue su casa. Por eso eligen una S.A. o una S. de R.L. en lugar de una sociedad en nombre colectivo.",
            "Mini example: three friends want to open a travel agency and prefer that nobody risk their house. That is why they choose an S.A. or an S. de R.L. instead of a general partnership.",
          ),
        ],
      },
      {
        heading: t("¿Hasta dónde responde cada socio?", "How far is each partner liable?"),
        body: [
          t(
            "En la **sociedad en nombre colectivo**, los socios responden de las deudas sociales de forma **subsidiaria, ilimitada y solidaria**: primero se cobra a la sociedad; si no alcanza, el acreedor puede cobrar **todo** lo que falte a **cualquiera** de los socios. Por ese riesgo hoy casi no se usa.",
            "In a **general partnership**, partners are liable for the company's debts on a **subsidiary, unlimited and joint and several** basis: the company is charged first; if that is not enough, the creditor can collect **everything** still owed from **any** of the partners. Because of that risk, it is rarely used today.",
          ),
          t(
            "En la **S.A.**, la **S. de R.L.** y la **S.A.S.**, la responsabilidad es **limitada**: cada socio responde solo hasta el monto de su **aportación**. En la S.A. el capital se divide en **acciones**; en la S. de R.L., en **partes sociales**, y la ley limita su número de socios (hasta 50).",
            "In the **S.A.**, the **S. de R.L.** and the **S.A.S.**, liability is **limited**: each partner is liable only up to the amount of their **contribution**. In the S.A., capital is divided into **shares**; in the S. de R.L., into **partnership interests**, and the law caps its number of partners (up to 50).",
          ),
          t(
            "La **S.A.S.** se creó para emprendedores pequeños: puede formarla **una sola persona física** o varias, se constituye por **medios electrónicos** ante la Secretaría de Economía, sin notario, y tiene un **tope de ingresos anuales** que se actualiza cada año. Si lo rebasa, debe transformarse en otro tipo de sociedad.",
            "The **S.A.S.** was created for small entrepreneurs: it can be formed by **a single individual** or several, it is incorporated **electronically** with the Ministry of Economy, without a notary, and it has an **annual revenue cap** that is updated every year. If it exceeds it, it must convert into another type of company.",
          ),
          t(
            "Mini ejemplo: Pablo compró acciones por $50,000 de una S.A. que quebró con deudas de $2 millones. Lo más que pierde es esos $50,000; los acreedores no pueden ir contra su coche ni su casa (salvo que él haya firmado como aval).",
            "Mini example: Pablo bought $50,000 of shares in an S.A. that went bankrupt owing $2 million. The most he loses is that $50,000; creditors cannot go after his car or house (unless he signed as a guarantor).",
          ),
        ],
        bullets: [
          t("Nombre colectivo: responsabilidad subsidiaria, ilimitada y solidaria.", "General partnership: subsidiary, unlimited and joint and several liability."),
          t("S.A.: limitada al pago de las acciones.", "S.A.: limited to paying for the shares."),
          t("S. de R.L.: limitada a las aportaciones; hasta 50 socios.", "S. de R.L.: limited to contributions; up to 50 partners."),
          t("S.A.S.: limitada; una o más personas físicas; tope de ingresos.", "S.A.S.: limited; one or more individuals; revenue cap."),
        ],
        formulas: [
          {
            name: t("Pérdida máxima de un socio con responsabilidad limitada", "Maximum loss of a partner with limited liability"),
            expression: "Pérdida máxima = Valor de su aportación = Número de acciones × Valor de cada acción",
            variables: [
              { symbol: "Pérdida máxima", meaning: t("Lo más que puede perder el socio si la sociedad quiebra, en pesos.", "The most the partner can lose if the company goes bankrupt, in pesos.") },
              { symbol: "Valor de su aportación", meaning: t("Lo que el socio puso en la sociedad, en pesos.", "What the partner put into the company, in pesos.") },
              { symbol: "Número de acciones", meaning: t("Cuántas acciones tiene el socio en una S.A.", "How many shares the partner holds in an S.A.") },
              { symbol: "Valor de cada acción", meaning: t("Lo que vale cada acción según los estatutos, en pesos.", "What each share is worth under the bylaws, in pesos.") },
            ],
            steps: [
              t("Confirma que la sociedad es de responsabilidad limitada (S.A., S. de R.L. o S.A.S.) y que el socio no firmó como aval.", "Confirm the company has limited liability (S.A., S. de R.L. or S.A.S.) and the partner did not sign as guarantor."),
              t("Calcula su aportación: número de acciones × valor de cada acción.", "Compute the contribution: number of shares × value of each share."),
              t("Esa aportación es su pérdida máxima; las deudas de la sociedad no cambian el resultado.", "That contribution is the maximum loss; the company's debts do not change the result."),
            ],
            example: t(
              "Rosa tiene 80 acciones de $500 cada una en una S.A. que quiebra debiendo $1,500,000. Aportación: 80 × 500 = $40,000. Su pérdida máxima es **$40,000**, sin importar el tamaño de la deuda.",
              "Rosa holds 80 shares of $500 each in an S.A. that goes bankrupt owing $1,500,000. Contribution: 80 × 500 = $40,000. Her maximum loss is **$40,000**, regardless of the size of the debt.",
            ),
            mistake: t(
              "Repartir la deuda total entre los socios según su porcentaje, como si la responsabilidad fuera ilimitada.",
              "Splitting the total debt among the partners by percentage, as if liability were unlimited.",
            ),
          },
        ],
      },
      {
        heading: t("Cómo se gobierna una S.A. y qué es el capital variable", "How an S.A. is governed and what variable capital is"),
        body: [
          t(
            "La S.A. tiene tres órganos. La **asamblea general de accionistas** es el órgano **supremo**: ahí los dueños votan las decisiones importantes, como aprobar los estados financieros o cambiar los estatutos. La **administración** (un administrador único o un consejo de administración) dirige el día a día.",
            "The S.A. has three bodies. The **general shareholders' meeting** is the **supreme** body: there the owners vote on important decisions, such as approving the financial statements or amending the bylaws. **Management** (a sole administrator or a board of directors) runs the day-to-day business.",
          ),
          t(
            "La **vigilancia** está a cargo de uno o varios **comisarios**, que revisan que la administración actúe bien y rinden un informe a la asamblea. En general, en la asamblea **cada acción da derecho a un voto**, así que manda quien tiene más acciones.",
            "**Oversight** is in the hands of one or more **statutory auditors** (comisarios), who check that management acts properly and report to the meeting. In general, at the meeting **each share carries one vote**, so whoever holds more shares has more say.",
          ),
          t(
            "Las siglas **\"de C.V.\"** significan **capital variable**. Es una **modalidad** que se suma a casi cualquier tipo de sociedad: permite **aumentar o disminuir** el capital (por encima de un mínimo fijo) con requisitos más sencillos, sin tener que reformar los estatutos cada vez. Por eso es tan común ver \"S.A. de C.V.\"",
            "The letters **\"de C.V.\"** mean **variable capital**. It is a **modality** added to almost any company type: it lets the company **increase or decrease** its capital (above a fixed minimum) with simpler requirements, without amending the bylaws each time. That is why \"S.A. de C.V.\" is so common.",
          ),
          t(
            "Mini ejemplo: una S.A. de C.V. con capital fijo de $100,000 recibe $300,000 de un nuevo inversionista. Lo registra como capital variable con un acuerdo de asamblea, en lugar de reformar sus estatutos ante notario.",
            "Mini example: an S.A. de C.V. with $100,000 of fixed capital receives $300,000 from a new investor. It records it as variable capital through a shareholders' resolution, instead of amending its bylaws before a notary.",
          ),
        ],
        bullets: [
          t("Asamblea de accionistas: órgano supremo, decide lo importante.", "Shareholders' meeting: supreme body, decides important matters."),
          t("Administración: administrador único o consejo; dirige la operación.", "Management: sole administrator or board; runs operations."),
          t("Comisario: vigila a la administración.", "Statutory auditor: oversees management."),
          t("C.V.: el capital puede variar sobre un mínimo fijo con menos trámites.", "C.V.: capital may vary above a fixed minimum with fewer formalities."),
        ],
      },
    ],
    examples: [
      {
        title: t("Responsabilidad en dos tipos de sociedad", "Liability in two company types"),
        problem: t(
          "Una sociedad debe $900,000 y sus bienes solo cubren $600,000. Tiene dos socios que aportaron $150,000 cada uno. Calcula cuánto podría cobrarle el acreedor a uno de los socios, de su patrimonio personal, si la sociedad es (a) una S. de R.L. o (b) una sociedad en nombre colectivo. (Caso hipotético.)",
          "A company owes $900,000 and its assets only cover $600,000. It has two partners who contributed $150,000 each. Compute how much the creditor could collect from one partner's personal estate if the company is (a) an S. de R.L. or (b) a general partnership. (Hypothetical case.)",
        ),
        steps: [
          t("Faltante: 900,000 − 600,000 = $300,000.", "Shortfall: 900,000 − 600,000 = $300,000."),
          t("(a) S. de R.L.: cada socio responde solo hasta su aportación, que ya está dentro de la sociedad → $0 adicionales de su patrimonio personal.", "(a) S. de R.L.: each partner is liable only up to their contribution, already inside the company → $0 extra from their personal estate."),
          t("(b) Nombre colectivo: responsabilidad subsidiaria, ilimitada y solidaria → el acreedor puede cobrar los $300,000 completos a cualquiera de los dos.", "(b) General partnership: subsidiary, unlimited, joint and several liability → the creditor can collect the full $300,000 from either partner."),
          t("El socio que pague todo puede después reclamar a su compañero la parte que le toca.", "The partner who pays everything can later claim their share from the other partner."),
        ],
        result: t(
          "(a) $0 de su patrimonio personal; (b) hasta $300,000. La forma de la sociedad cambia por completo el riesgo de los socios.",
          "(a) $0 from their personal estate; (b) up to $300,000. The company form completely changes the partners' risk.",
        ),
      },
      {
        title: t("¿Quién decide en la asamblea?", "Who decides at the meeting?"),
        problem: t(
          "Una S.A. tiene 2,000 acciones: Elena tiene 900, Raúl 700 y Sara 400. En una asamblea donde basta la mayoría de votos, Elena vota a favor de abrir una sucursal y Raúl y Sara en contra. ¿Se aprueba?",
          "An S.A. has 2,000 shares: Elena holds 900, Raúl 700 and Sara 400. At a meeting where a simple majority of votes is enough, Elena votes for opening a branch and Raúl and Sara vote against. Is it approved?",
        ),
        steps: [
          t("Cada acción vale un voto: a favor 900; en contra 700 + 400 = 1,100.", "Each share is one vote: for 900; against 700 + 400 = 1,100."),
          t("Porcentaje a favor: 900 ÷ 2,000 = 45%.", "Percentage in favor: 900 ÷ 2,000 = 45%."),
          t("45% no supera la mitad, así que no hay mayoría.", "45% does not exceed half, so there is no majority."),
        ],
        result: t(
          "No se aprueba: aunque Elena es la mayor accionista, no tiene más de la mitad de los votos. Los estatutos pueden exigir mayorías mayores para ciertos temas.",
          "It is not approved: although Elena is the largest shareholder, she does not have more than half of the votes. The bylaws may require larger majorities for certain matters.",
        ),
      },
    ],
    keyPoints: [
      t("La LGSM reconoce siete tipos; los más usados son la S.A. y la S. de R.L.", "The LGSM recognizes seven types; the most used are the S.A. and the S. de R.L."),
      t("En S.A., S. de R.L. y S.A.S. el socio arriesga solo su aportación.", "In the S.A., S. de R.L. and S.A.S., a partner risks only their contribution."),
      t("En nombre colectivo los socios responden de forma subsidiaria, ilimitada y solidaria.", "In a general partnership, partners are liable on a subsidiary, unlimited, joint and several basis."),
      t("Órganos de la S.A.: asamblea (suprema), administración y comisario.", "Bodies of the S.A.: meeting (supreme), management and statutory auditor."),
      t("\"de C.V.\" permite variar el capital sobre un mínimo fijo con menos trámites.", "\"de C.V.\" lets capital vary above a fixed minimum with fewer formalities."),
    ],
    normativeNote: NOTE_COMPANIES,
    exerciseIds: ['DER-04-E1', 'DER-04-E2', 'DER-04-E3', 'DER-04-E4', 'DER-04-E5', 'DER-04-E6'],
  },

  // ───────────────────────────── DER-05 ─────────────────────────────
  {
    id: 'DER-05',
    level: 2,
    topicIds: ['DER.5'],
    title: t("Constitución legal de empresas", "Legal incorporation of businesses"),
    summary: t(
      "Formalizar un negocio implica elegir cómo operar, redactar y firmar el acta constitutiva con sus estatutos, inscribirla en el Registro Público de Comercio y darse de alta ante el SAT, el IMSS y el municipio.",
      "Formalizing a business means choosing how to operate, drafting and signing the articles of incorporation with their bylaws, registering them in the Public Registry of Commerce and registering with SAT, IMSS and the municipality.",
    ),
    minutes: 17,
    objectives: [
      t("Decidir entre emprender como persona física o constituir una sociedad.", "Decide between starting as an individual or incorporating a company."),
      t("Ordenar los pasos para constituir una sociedad y reconocer el contenido de los estatutos.", "Order the steps to incorporate a company and recognize the content of the bylaws."),
      t("Identificar los registros y permisos posteriores ante SAT, IMSS y municipio.", "Identify the later registrations and permits with SAT, IMSS and the municipality."),
    ],
    theory: [
      {
        heading: t("Antes de firmar: ¿persona física o sociedad?", "Before signing: individual or company?"),
        body: [
          t(
            "La primera decisión es **quién será el titular** del negocio. Como **persona física con actividad empresarial** basta con darte de alta en el **RFC** ante el SAT y obtener los permisos del local: es rápido y barato, pero tu patrimonio personal queda expuesto a las deudas.",
            "The first decision is **who will own** the business. As an **individual with business activity**, you only need to register with the **RFC** at SAT and get the permits for the premises: it is fast and cheap, but your personal estate is exposed to the debts.",
          ),
          t(
            "Si hay **socios**, se busca **inversión** o se quiere separar el patrimonio, conviene una **sociedad**. Para crearla se piensa en: el **tipo** (S.A., S. de R.L., S.A.S.), los **socios** y cuánto aporta cada uno, el **objeto social** (a qué se dedicará) y quién la **administrará**.",
            "If there are **partners**, you are seeking **investment** or you want to separate the estate, a **company** is advisable. To create one you decide: the **type** (S.A., S. de R.L., S.A.S.), the **partners** and how much each contributes, the **corporate purpose** (what it will do) and who will **manage** it.",
          ),
          t(
            "Las **aportaciones** pueden ser **en efectivo** o **en especie** (bienes como un horno, un vehículo o una computadora, a los que se les asigna un valor). La suma de aportaciones forma el **capital social**, y el porcentaje que aporta cada socio suele definir su **participación**.",
            "**Contributions** can be **in cash** or **in kind** (property such as an oven, a vehicle or a computer, to which a value is assigned). The sum of contributions makes up the **share capital**, and each partner's percentage usually defines their **stake**.",
          ),
          t(
            "Mini ejemplo: Iván aporta $120,000 en efectivo y Carla una camioneta valuada en $80,000. Capital social: $200,000. Participación: Iván 60% y Carla 40%.",
            "Mini example: Iván contributes $120,000 in cash and Carla a van valued at $80,000. Share capital: $200,000. Stakes: Iván 60% and Carla 40%.",
          ),
        ],
        formulas: [
          {
            name: t("Capital social", "Share capital"),
            expression: "Capital social = Suma de las aportaciones de todos los socios (efectivo + especie)",
            variables: [
              { symbol: "Capital social", meaning: t("El total que los socios ponen para formar la sociedad, en pesos.", "The total the partners put in to form the company, in pesos.") },
              { symbol: "Aportaciones", meaning: t("Lo que pone cada socio, en pesos: dinero (efectivo) o bienes con un valor asignado (especie).", "What each partner puts in, in pesos: money (cash) or property with an assigned value (in kind).") },
            ],
            steps: [
              t("Anota la aportación de cada socio; si es un bien, usa el valor que se le asignó.", "Write down each partner's contribution; if it is property, use its assigned value."),
              t("Suma todas las aportaciones.", "Add up all the contributions."),
            ],
            example: t(
              "Ana aporta $90,000, Beto un horno valuado en $60,000 y Caro $50,000. Capital social: 90,000 + 60,000 + 50,000 = **$200,000**.",
              "Ana contributes $90,000, Beto an oven valued at $60,000 and Caro $50,000. Share capital: 90,000 + 60,000 + 50,000 = **$200,000**.",
            ),
            mistake: t(
              "Dejar fuera las aportaciones en especie por no ser dinero; cuentan igual que el efectivo por su valor asignado.",
              "Leaving out in-kind contributions because they are not money; they count like cash at their assigned value.",
            ),
          },
          {
            name: t("Participación de cada socio", "Each partner's stake"),
            expression: "Participación del socio (%) = Aportación del socio ÷ Capital social × 100",
            variables: [
              { symbol: "Participación del socio (%)", meaning: t("Qué parte de la sociedad le corresponde a ese socio, en porcentaje.", "What part of the company belongs to that partner, as a percentage.") },
              { symbol: "Aportación del socio", meaning: t("Lo que puso ese socio, en pesos.", "What that partner put in, in pesos.") },
              { symbol: "Capital social", meaning: t("La suma de todas las aportaciones, en pesos.", "The sum of all contributions, in pesos.") },
            ],
            steps: [
              t("Calcula primero el capital social total.", "First compute the total share capital."),
              t("Divide la aportación del socio entre el capital social.", "Divide the partner's contribution by the share capital."),
              t("Multiplica por 100 para expresarlo en porcentaje.", "Multiply by 100 to express it as a percentage."),
            ],
            example: t(
              "Con el capital de $200,000: Ana 90,000 ÷ 200,000 = 0.45 × 100 = **45%**; Beto 60,000 ÷ 200,000 = **30%**; Caro 50,000 ÷ 200,000 = **25%**.",
              "With capital of $200,000: Ana 90,000 ÷ 200,000 = 0.45 × 100 = **45%**; Beto 60,000 ÷ 200,000 = **30%**; Caro 50,000 ÷ 200,000 = **25%**.",
            ),
            interpret: t(
              "Las participaciones de todos los socios deben sumar 100%; si no, revisa tus cuentas.",
              "All partners' stakes must add up to 100%; if not, check your math.",
            ),
          },
        ],
      },
      {
        heading: t("El acta constitutiva y sus estatutos", "The articles of incorporation and their bylaws"),
        body: [
          t(
            "Para una S.A. o una S. de R.L., el camino típico es: (1) obtener la **autorización de uso de denominación o razón social** en el sistema de la **Secretaría de Economía**, para asegurar que el nombre no lo use otra empresa; (2) firmar el **acta constitutiva** ante un **fedatario público** (notario o corredor público); (3) **inscribirla** en el **Registro Público de Comercio**.",
            "For an S.A. or an S. de R.L., the typical path is: (1) obtain the **authorization to use the corporate or firm name** in the **Ministry of Economy** system, to make sure no other company uses it; (2) sign the **articles of incorporation** before a **public attestor** (notary or public broker); (3) **register** them in the **Public Registry of Commerce**.",
          ),
          t(
            "El acta contiene los **estatutos**: las reglas internas de la sociedad. Según la LGSM deben incluir, entre otros, los datos de los socios, el **objeto social**, la **denominación**, la **duración**, el **capital social** y lo que aporta cada socio, el **domicilio**, la forma de **administración** y cómo se reparten utilidades y pérdidas.",
            "The articles contain the **bylaws**: the company's internal rules. Under the LGSM they must include, among other things, the partners' details, the **corporate purpose**, the **name**, the **duration**, the **share capital** and what each partner contributes, the **registered address**, the form of **management** and how profits and losses are shared.",
          ),
          t(
            "La **S.A.S.** sigue un camino distinto y más corto: se constituye **en línea** en el sistema de la Secretaría de Economía con firma electrónica, sin notario. Es útil para emprendedores pequeños, siempre que respeten sus límites.",
            "The **S.A.S.** follows a different, shorter path: it is incorporated **online** in the Ministry of Economy system with an electronic signature, without a notary. It is useful for small entrepreneurs, as long as they respect its limits.",
          ),
          t(
            "Mini ejemplo: \"Tostadas El Güero\" ya estaba autorizada para otra empresa. Los socios piden \"Tostadas Doradas del Bajío\", la Secretaría de Economía la autoriza y con ese nombre el notario redacta el acta.",
            "Mini example: \"Tostadas El Güero\" was already authorized for another company. The partners request \"Tostadas Doradas del Bajío\", the Ministry of Economy authorizes it and the notary drafts the articles with that name.",
          ),
        ],
        bullets: [
          t("Denominación autorizada por la Secretaría de Economía.", "Name authorized by the Ministry of Economy."),
          t("Acta constitutiva ante notario o corredor público.", "Articles of incorporation before a notary or public broker."),
          t("Estatutos: objeto, nombre, duración, capital, domicilio, administración, utilidades.", "Bylaws: purpose, name, duration, capital, address, management, profits."),
          t("Inscripción en el Registro Público de Comercio.", "Registration in the Public Registry of Commerce."),
        ],
        formulas: [
          {
            name: t("Ruta típica para constituir una S.A. o S. de R.L.", "Typical route to incorporate an S.A. or S. de R.L."),
            expression: "Autorización de denominación (Secretaría de Economía) → Acta constitutiva ante notario o corredor público → Inscripción en el Registro Público de Comercio → Alta en el RFC",
            variables: [
              { symbol: "Autorización de denominación", meaning: t("El permiso de la Secretaría de Economía para usar el nombre de la sociedad, para que no lo tenga otra empresa.", "The Ministry of Economy's permission to use the company's name, so no other company has it.") },
              { symbol: "Acta constitutiva", meaning: t("El documento que crea la sociedad y contiene sus estatutos (reglas internas).", "The document that creates the company and contains its bylaws (internal rules).") },
              { symbol: "Notario o corredor público", meaning: t("El fedatario: profesional autorizado para dar fe de que el acta es válida.", "The attestor: a professional authorized to certify that the articles are valid.") },
              { symbol: "Registro Público de Comercio", meaning: t("El registro oficial donde se inscriben las sociedades para que cualquiera pueda consultarlas (no es el Registro Civil).", "The official registry where companies are recorded so anyone can look them up (it is not the Civil Registry).") },
              { symbol: "Alta en el RFC", meaning: t("La inscripción de la sociedad ante el SAT para facturar y pagar impuestos.", "The company's registration with the SAT to invoice and pay taxes.") },
            ],
            steps: [
              t("Pide y obtén la autorización del nombre en la Secretaría de Economía.", "Request and obtain the name authorization from the Ministry of Economy."),
              t("Firma el acta constitutiva ante notario o corredor público.", "Sign the articles of incorporation before a notary or public broker."),
              t("Inscribe el acta en el Registro Público de Comercio.", "Register the articles in the Public Registry of Commerce."),
              t("Da de alta a la sociedad en el RFC; después vienen los permisos y, si contratará, el registro patronal.", "Register the company in the RFC; permits come next and, if it will hire, the employer registration."),
            ],
            example: t(
              "Tres amigos quieren abrir \"Tostadas Doradas del Bajío, S.A.\": primero la Secretaría de Economía autoriza el nombre; luego firman el acta ante notario; el notario la inscribe en el Registro Público de Comercio; y al final la sociedad obtiene su RFC. Son **4 pasos** en ese orden.",
              "Three friends want to open \"Tostadas Doradas del Bajío, S.A.\": first the Ministry of Economy authorizes the name; then they sign the articles before a notary; the notary registers them in the Public Registry of Commerce; finally the company gets its RFC. That is **4 steps** in that order.",
            ),
            mistake: t(
              "Confundir el Registro Público de Comercio con el Registro Civil, o poner el registro patronal del IMSS antes del acta. Recuerda que la S.A.S. sigue otra ruta, en línea y sin notario.",
              "Confusing the Public Registry of Commerce with the Civil Registry, or placing the IMSS employer registration before the articles. Remember that the S.A.S. follows another route, online and without a notary.",
            ),
          },
        ],
      },
      {
        heading: t("Después del acta: registros y permisos para operar", "After the articles: registrations and permits to operate"),
        body: [
          t(
            "Tener acta no basta para abrir. La sociedad debe inscribirse en el **RFC** ante el **SAT**, tramitar su **e.firma** y elegir su régimen, para poder facturar y pagar impuestos. Si contratará personal, debe obtener su **registro patronal** ante el **IMSS** e inscribir a sus trabajadores, lo que también la conecta con el **Infonavit**.",
            "Having articles is not enough to open. The company must register with the **RFC** at **SAT**, obtain its **e.firma** (electronic signature) and choose its regime, so it can invoice and pay taxes. If it will hire staff, it must obtain its **employer registration** with **IMSS** and enroll its workers, which also links it to **Infonavit** (the housing fund).",
          ),
          t(
            "En lo local, el **municipio** (o la alcaldía en la CDMX) revisa el **uso de suelo** y otorga la **licencia o aviso de funcionamiento**; según el giro, pueden pedirse dictámenes de **protección civil** o permisos sanitarios. Muchos estados además cobran el impuesto sobre nóminas, que requiere su propio registro.",
            "Locally, the **municipality** (or the borough in Mexico City) checks **zoning** and grants the **operating license or notice**; depending on the line of business, **civil protection** reports or health permits may be required. Many states also charge the payroll tax, which requires its own registration.",
          ),
          t(
            "Un buen hábito es armar un **expediente corporativo**: acta, poderes, RFC, constancias y licencias. Bancos, clientes grandes y proveedores lo piden antes de abrir una cuenta o firmar un contrato.",
            "A good habit is to build a **corporate file**: articles, powers of attorney, RFC, certificates and licenses. Banks, large customers and suppliers ask for it before opening an account or signing a contract.",
          ),
          t(
            "Mini ejemplo: una panadería ya tiene acta y RFC, pero antes de que entre su primer empleado tramita el registro patronal en el IMSS, para que el trabajador quede asegurado desde el primer día.",
            "Mini example: a bakery already has its articles and RFC, but before its first employee starts it obtains its IMSS employer registration, so the worker is insured from day one.",
          ),
        ],
      },
    ],
    examples: [
      {
        title: t("Participación con aportaciones en efectivo y en especie", "Stakes with cash and in-kind contributions"),
        problem: t(
          "Tres socios constituyen una S.A. de C.V.: Diana aporta $250,000 en efectivo, Óscar un equipo de cómputo valuado en $150,000 y Mariana $100,000 en efectivo. Las acciones valen $1,000 cada una. ¿Cuál es el capital social, cuántas acciones recibe cada socio y qué porcentaje tiene cada uno? (Cifras hipotéticas.)",
          "Three partners incorporate an S.A. de C.V.: Diana contributes $250,000 in cash, Óscar computer equipment valued at $150,000 and Mariana $100,000 in cash. Shares are worth $1,000 each. What is the share capital, how many shares does each partner receive and what percentage does each hold? (Hypothetical figures.)",
        ),
        steps: [
          t("Capital social = 250,000 + 150,000 + 100,000 = $500,000.", "Share capital = 250,000 + 150,000 + 100,000 = $500,000."),
          t("Acciones: Diana 250, Óscar 150 y Mariana 100 (cada aportación ÷ $1,000); en total 500.", "Shares: Diana 250, Óscar 150 and Mariana 100 (each contribution ÷ $1,000); 500 in total."),
          t("Porcentajes: Diana 250 ÷ 500 = 50%; Óscar 150 ÷ 500 = 30%; Mariana 100 ÷ 500 = 20%.", "Percentages: Diana 250 ÷ 500 = 50%; Óscar 150 ÷ 500 = 30%; Mariana 100 ÷ 500 = 20%."),
          t("La aportación de Óscar es en especie: el acta debe describir el equipo y su valor.", "Óscar's contribution is in kind: the articles must describe the equipment and its value."),
        ],
        result: t(
          "Capital de $500,000; 250, 150 y 100 acciones; participaciones de 50%, 30% y 20%.",
          "Capital of $500,000; 250, 150 and 100 shares; stakes of 50%, 30% and 20%.",
        ),
      },
      {
        title: t("La ruta completa de una cafetería", "A coffee shop's complete route"),
        problem: t(
          "Dos amigos quieren abrir una cafetería con tres empleados como S. de R.L. Ordena sus trámites principales.",
          "Two friends want to open a coffee shop with three employees as an S. de R.L. Put their main procedures in order.",
        ),
        steps: [
          t("1. Autorización de la denominación en la Secretaría de Economía.", "1. Name authorization at the Ministry of Economy."),
          t("2. Firma del acta constitutiva con sus estatutos ante notario o corredor público.", "2. Signing the articles of incorporation with their bylaws before a notary or public broker."),
          t("3. Inscripción en el Registro Público de Comercio y alta en el RFC con e.firma ante el SAT.", "3. Registration in the Public Registry of Commerce and RFC registration with e.firma at SAT."),
          t("4. Uso de suelo y licencia de funcionamiento con el municipio (y permisos según el giro).", "4. Zoning and operating license with the municipality (and permits by line of business)."),
          t("5. Registro patronal en el IMSS antes de que los empleados empiecen a trabajar.", "5. IMSS employer registration before the employees start working."),
        ],
        result: t(
          "Primero se crea la persona moral (nombre, acta, registro), luego se da de alta ante el SAT y por último obtiene los permisos para operar y contratar. El orden exacto puede variar según el estado y el municipio.",
          "First the legal entity is created (name, articles, registration), then it registers with SAT, and finally it obtains the permits to operate and hire. The exact order may vary by state and municipality.",
        ),
      },
    ],
    keyPoints: [
      t("Persona física: arranque sencillo; sociedad: patrimonio separado y espacio para socios.", "Individual: simple start; company: separate estate and room for partners."),
      t("Las aportaciones pueden ser en efectivo o en especie y forman el capital social.", "Contributions can be in cash or in kind and make up the share capital."),
      t("Ruta típica: denominación → acta ante fedatario → Registro Público de Comercio.", "Typical route: name → articles before an attestor → Public Registry of Commerce."),
      t("Los estatutos fijan objeto, nombre, duración, capital, domicilio y administración.", "The bylaws set purpose, name, duration, capital, address and management."),
      t("Para operar: RFC y e.firma (SAT), registro patronal (IMSS) y licencias municipales.", "To operate: RFC and e.firma (SAT), employer registration (IMSS) and municipal licenses."),
    ],
    normativeNote: NOTE_FORMATION,
    exerciseIds: ['DER-05-E1', 'DER-05-E2', 'DER-05-E3', 'DER-05-E4', 'DER-05-E5', 'DER-05-E6'],
  },

  // ───────────────────────────── DER-06 ─────────────────────────────
  {
    id: 'DER-06',
    level: 2,
    topicIds: ['DER.6'],
    title: t("Contratos mercantiles", "Commercial contracts"),
    summary: t(
      "Un contrato mercantil es un acuerdo que crea obligaciones entre negocios; para que proteja de verdad necesita consentimiento libre, un objeto claro y cláusulas bien pensadas sobre precio, plazos, penas y solución de conflictos.",
      "A commercial contract is an agreement that creates obligations between businesses; to truly protect you it needs free consent, a clear object and well-designed clauses on price, deadlines, penalties and dispute resolution.",
    ),
    minutes: 16,
    objectives: [
      t("Identificar los elementos de existencia y de validez de un contrato.", "Identify the elements of existence and validity of a contract."),
      t("Reconocer los contratos mercantiles más comunes y para qué sirve cada uno.", "Recognize the most common commercial contracts and what each one is for."),
      t("Calcular una pena convencional y elegir cláusulas clave para proteger al negocio.", "Compute a liquidated-damages penalty and choose key clauses to protect the business."),
    ],
    theory: [
      {
        heading: t("Qué hace que un contrato exista y valga", "What makes a contract exist and be valid"),
        body: [
          t(
            "Un **contrato** es un acuerdo entre dos o más personas para **crear o transmitir** derechos y obligaciones. Para que **exista** necesita dos elementos: **consentimiento** (las partes dicen \"sí\" a lo mismo) y **objeto** (aquello que se obliga a dar, hacer o no hacer, que debe ser posible).",
            "A **contract** is an agreement between two or more persons to **create or transfer** rights and obligations. For it to **exist** it needs two elements: **consent** (the parties say \"yes\" to the same thing) and **object** (what one is bound to give, do or not do, which must be possible).",
          ),
          t(
            "Para que sea **válido** también se requiere: **capacidad** de las partes (por ejemplo, ser mayor de edad o actuar con poderes suficientes), que el consentimiento esté **libre de vicios** (sin **error**, **dolo** o engaño, ni **violencia** o amenazas), que el objeto y el fin sean **lícitos** y, cuando la ley lo pida, cierta **forma**.",
            "To be **valid** it also requires: **capacity** of the parties (for example, being of legal age or acting with sufficient powers), consent **free of defects** (no **mistake**, **fraud** or deception, nor **duress** or threats), a **lawful** object and purpose and, when the law requires it, a certain **form**.",
          ),
          t(
            "En materia mercantil rige una idea práctica: cada parte se obliga **en la manera y términos en que quiso obligarse**, y por regla general la validez no depende de formalidades especiales. Aun así, firmar por **escrito** es la mejor prueba de lo que se acordó; y hay contratos que la ley sí obliga a celebrar por escrito o ante fedatario.",
            "In commercial matters a practical idea applies: each party is bound **in the manner and terms in which it intended to be bound**, and as a general rule validity does not depend on special formalities. Even so, signing in **writing** is the best proof of what was agreed; and there are contracts that the law does require to be made in writing or before an attestor.",
          ),
          t(
            "Mini ejemplo: un gerente sin poderes firma la compra de una flotilla a nombre de su empresa. Faltó capacidad para representarla: la empresa puede no quedar obligada, y el vendedor debió revisar los poderes antes.",
            "Mini example: a manager without powers of attorney signs the purchase of a vehicle fleet on behalf of his company. Capacity to represent it was missing: the company may not be bound, and the seller should have checked the powers first.",
          ),
        ],
        bullets: [
          t("Existencia: consentimiento + objeto posible.", "Existence: consent + possible object."),
          t("Validez: capacidad, consentimiento sin vicios, licitud y forma cuando se exige.", "Validity: capacity, consent without defects, lawfulness and form when required."),
          t("Vicios del consentimiento: error, dolo, violencia.", "Defects of consent: mistake, fraud, duress."),
        ],
      },
      {
        heading: t("Los contratos mercantiles más usados", "The most used commercial contracts"),
        body: [
          t(
            "La **compraventa mercantil** es la reina: una parte entrega mercancía y la otra paga un precio, con el fin de comerciar. El **suministro** es parecido, pero con entregas **periódicas o continuas** durante un plazo, como el gas o la materia prima que llega cada semana.",
            "The **commercial sale** is the queen: one party delivers goods and the other pays a price, for trading purposes. **Supply** is similar, but with **periodic or continuous** deliveries over a period, such as gas or raw material arriving every week.",
          ),
          t(
            "En la **comisión mercantil**, un **comisionista** realiza actos de comercio **por cuenta de otro** (el comitente), normalmente a cambio de una comisión. En el **arrendamiento financiero**, una arrendadora compra un bien que la empresa usa a cambio de pagos periódicos, y al final suele haber **opción de compra**.",
            "In a **commercial agency** (comisión mercantil), an **agent** performs commercial acts **on behalf of another** (the principal), usually in exchange for a commission. In **financial leasing**, a leasing company buys an asset that the business uses in exchange for periodic payments, and at the end there is usually a **purchase option**.",
          ),
          t(
            "También son comunes el **transporte** de mercancías, la **franquicia** (usar una marca y un modelo de negocio probado a cambio de pagos), la **distribución** y los **acuerdos de confidencialidad**, que obligan a no revelar información del negocio.",
            "Also common are the **carriage** of goods, the **franchise** (using a brand and a proven business model in exchange for payments), **distribution** and **confidentiality agreements**, which require not disclosing business information.",
          ),
          t(
            "Mini ejemplo: una cadena de restaurantes firma con una lechería un contrato para recibir 200 litros de leche cada lunes durante un año: es suministro, no una simple compraventa.",
            "Mini example: a restaurant chain signs a contract with a dairy to receive 200 liters of milk every Monday for a year: it is supply, not a simple sale.",
          ),
        ],
      },
      {
        heading: t("Cláusulas que protegen al negocio", "Clauses that protect the business"),
        body: [
          t(
            "Un buen contrato deja claro: quiénes son las partes y con qué **poderes** firman, el **objeto** exacto, el **precio y la forma de pago**, los **plazos** de entrega, las **garantías**, la **confidencialidad**, las causas de **rescisión** (terminar el contrato por incumplimiento) y qué **tribunales o arbitraje** resolverán los conflictos.",
            "A good contract makes clear: who the parties are and with what **powers** they sign, the exact **object**, the **price and payment terms**, the delivery **deadlines**, the **guarantees**, **confidentiality**, the grounds for **termination** (ending the contract for breach) and which **courts or arbitration** will resolve disputes.",
          ),
          t(
            "La **pena convencional** es una cantidad que las partes fijan de antemano para el caso de incumplimiento o retraso. Así no hay que probar cuánto se perdió. En México, por regla general, la pena **no puede ser mayor** que el valor de la obligación principal, y en lo mercantil el afectado elige entre exigir el **cumplimiento** o la **pena**, según lo pactado.",
            "A **penalty clause** (pena convencional) is an amount the parties set in advance in case of breach or delay. That way there is no need to prove how much was lost. In Mexico, as a general rule, the penalty **cannot exceed** the value of the main obligation, and in commercial matters the affected party chooses between demanding **performance** or the **penalty**, as agreed.",
          ),
          t(
            "Por último, revisa con calma antes de firmar: lee las letras pequeñas, confirma los poderes de quien firma por la otra empresa, guarda una copia firmada y anota las fechas clave. Un contrato claro previene más conflictos de los que resuelve.",
            "Finally, review calmly before signing: read the fine print, confirm the powers of whoever signs for the other company, keep a signed copy and note the key dates. A clear contract prevents more conflicts than it resolves.",
          ),
          t(
            "Mini ejemplo: un contrato de $200,000 fija una pena de 1% del valor por día de retraso. Si el proveedor entrega 5 días tarde, la pena es 200,000 × 0.01 × 5 = $10,000.",
            "Mini example: a $200,000 contract sets a penalty of 1% of the value per day of delay. If the supplier delivers 5 days late, the penalty is 200,000 × 0.01 × 5 = $10,000.",
          ),
        ],
        formulas: [
          {
            name: t("Pena convencional por retraso", "Late-delivery penalty clause"),
            expression: "Pena por retraso = Valor del contrato × % diario pactado × Días de retraso (tope: valor de la obligación principal)",
            variables: [
              { symbol: "Pena por retraso", meaning: t("Lo que paga quien se retrasa, en pesos.", "What the late party pays, in pesos.") },
              { symbol: "Valor del contrato", meaning: t("El precio total pactado en el contrato, en pesos.", "The total price agreed in the contract, in pesos.") },
              { symbol: "% diario pactado", meaning: t("El porcentaje que se cobra por cada día de retraso, escrito en decimal (0.5% = 0.005).", "The percentage charged for each day of delay, written as a decimal (0.5% = 0.005).") },
              { symbol: "Días de retraso", meaning: t("Cuántos días tarde se cumplió.", "How many days late the obligation was met.") },
              { symbol: "Tope", meaning: t("El máximo: por regla general la pena no puede pasar del valor de la obligación principal.", "The maximum: as a general rule the penalty cannot exceed the value of the main obligation.") },
            ],
            steps: [
              t("Convierte el porcentaje diario a decimal: 0.8% = 0.008.", "Convert the daily percentage to a decimal: 0.8% = 0.008."),
              t("Calcula la pena de un día: Valor del contrato × % diario.", "Compute one day's penalty: Contract value × daily %."),
              t("Multiplica por los días de retraso.", "Multiply by the days of delay."),
              t("Compara con el tope: si el resultado lo rebasa, la pena se queda en el tope.", "Compare with the cap: if the result exceeds it, the penalty stays at the cap."),
            ],
            example: t(
              "Contrato de $150,000 con pena de 0.8% diario y entrega 9 días tarde. Un día: 150,000 × 0.008 = $1,200. Nueve días: 1,200 × 9 = **$10,800**, menor que el tope de $150,000.",
              "A $150,000 contract with a 0.8% daily penalty and delivery 9 days late. One day: 150,000 × 0.008 = $1,200. Nine days: 1,200 × 9 = **$10,800**, below the $150,000 cap.",
            ),
            mistake: t(
              "Convertir mal el porcentaje (usar 0.08 en lugar de 0.008 para 0.8%) o calcular un solo día.",
              "Converting the percentage wrongly (using 0.08 instead of 0.008 for 0.8%) or computing a single day.",
            ),
          },
        ],
      },
    ],
    examples: [
      {
        title: t("Pena convencional con tope", "Penalty clause with a cap"),
        problem: t(
          "Un contrato de suministro de uniformes vale $150,000. Fija una pena de 2% del valor por cada día de retraso, con tope igual al valor del contrato. El proveedor entrega 8 días tarde. ¿Cuánto es la pena? ¿Y si se retrasara 60 días? (Cifras hipotéticas.)",
          "A uniform supply contract is worth $150,000. It sets a penalty of 2% of the value per day of delay, capped at the contract value. The supplier delivers 8 days late. How much is the penalty? And if it were 60 days late? (Hypothetical figures.)",
        ),
        steps: [
          t("Pena diaria: 150,000 × 0.02 = $3,000.", "Daily penalty: 150,000 × 0.02 = $3,000."),
          t("8 días: 3,000 × 8 = $24,000 (por debajo del tope).", "8 days: 3,000 × 8 = $24,000 (below the cap)."),
          t("60 días: 3,000 × 60 = $180,000, que supera el valor del contrato.", "60 days: 3,000 × 60 = $180,000, which exceeds the contract value."),
          t("Se aplica el tope: la pena no puede pasar de $150,000.", "The cap applies: the penalty cannot exceed $150,000."),
        ],
        result: t(
          "Con 8 días de retraso la pena es $24,000; con 60 días se limita a $150,000.",
          "With 8 days of delay the penalty is $24,000; with 60 days it is limited to $150,000.",
        ),
      },
      {
        title: t("Revisar un contrato antes de firmar", "Reviewing a contract before signing"),
        problem: t(
          "Una tienda de bicicletas recibe un contrato de distribución de dos hojas. Dice el producto y el precio, pero no menciona plazos de entrega, qué pasa si la mercancía llega dañada ni dónde se resolverían los conflictos. ¿Qué debería pedir agregar?",
          "A bicycle store receives a two-page distribution contract. It states the product and the price, but does not mention delivery deadlines, what happens if the goods arrive damaged or where disputes would be resolved. What should it ask to add?",
        ),
        steps: [
          t("Plazos de entrega con fechas concretas y una pena convencional por retraso.", "Delivery deadlines with specific dates and a penalty for delay."),
          t("Garantías y procedimiento para mercancía dañada o defectuosa (devolución o reposición).", "Guarantees and a procedure for damaged or defective goods (return or replacement)."),
          t("Causas de rescisión si el proveedor incumple de forma repetida.", "Grounds for termination if the supplier repeatedly fails to perform."),
          t("Cláusula de jurisdicción (o arbitraje) y ley aplicable, y verificar los poderes de quien firma.", "A jurisdiction (or arbitration) clause and governing law, and verifying the signatory's powers."),
        ],
        result: t(
          "Con esas cláusulas el contrato pasa de describir un trato a proteger a la tienda cuando algo sale mal.",
          "With those clauses the contract goes from describing a deal to protecting the store when something goes wrong.",
        ),
      },
    ],
    keyPoints: [
      t("Existencia: consentimiento y objeto; validez: capacidad, sin vicios, licitud y forma.", "Existence: consent and object; validity: capacity, no defects, lawfulness and form."),
      t("En lo mercantil, cada parte se obliga en los términos en que quiso obligarse.", "In commercial matters, each party is bound on the terms it intended."),
      t("Compraventa: entrega única; suministro: entregas periódicas; comisión: actuar por cuenta de otro.", "Sale: single delivery; supply: periodic deliveries; agency: acting on behalf of another."),
      t("La pena convencional fija de antemano cuánto se paga por incumplir o retrasarse.", "A penalty clause sets in advance how much is paid for breach or delay."),
      t("Cláusulas clave: precio, plazos, garantías, rescisión, confidencialidad y jurisdicción.", "Key clauses: price, deadlines, guarantees, termination, confidentiality and jurisdiction."),
    ],
    normativeNote: NOTE_CONTRACTS,
    exerciseIds: ['DER-06-E1', 'DER-06-E2', 'DER-06-E3', 'DER-06-E4', 'DER-06-E5', 'DER-06-E6'],
  },
]

export const exercises: Exercise[] = [
  // ═════════════════════════ DER-01 ═════════════════════════
  {
    id: 'DER-01-E1',
    level: 2,
    module: 'DER-01',
    kind: 'mcq',
    flavor: 'concept',
    prompt: t(
      "¿Qué característica distingue a una norma jurídica de una regla de cortesía, como saludar al llegar a una junta?",
      "Which characteristic distinguishes a legal rule from a rule of courtesy, such as greeting people when arriving at a meeting?",
    ),
    options: [
      { id: 'DER-01-E1-a', text: t("Que la mayoría de la gente la conoce", "That most people know it") },
      { id: 'DER-01-E1-b', text: t("Que el Estado puede obligar a cumplirla e imponer sanciones", "That the State can force compliance and impose sanctions") },
      { id: 'DER-01-E1-c', text: t("Que depende de las intenciones de cada persona", "That it depends on each person's intentions") },
      { id: 'DER-01-E1-d', text: t("Que cada persona la crea para sí misma", "That each person creates it for themselves") },
    ],
    correctOptionId: 'DER-01-E1-b',
    explanation: t(
      "La norma jurídica es coercible: si no la cumples, el Estado puede imponerla o sancionarte. La cortesía no tiene esa fuerza. Además, el derecho es externo (juzga conductas, no intenciones) y heterónomo (lo crea una autoridad, no uno mismo). Error común: pensar que una regla es jurídica solo porque es muy conocida.",
      "A legal rule is coercible: if you do not comply, the State can enforce it or sanction you. Courtesy lacks that force. Law is also external (it judges conduct, not intentions) and heteronomous (an authority creates it, not oneself). Common mistake: thinking a rule is legal just because it is widely known.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'business-law-basics',
  },
  {
    id: 'DER-01-E2',
    level: 2,
    module: 'DER-01',
    kind: 'classify',
    flavor: 'concept',
    prompt: t(
      "Clasifica cada situación de una empresa según el gran grupo del derecho que la regula.",
      "Classify each company situation by the major group of law that governs it.",
    ),
    categories: [
      { id: 'DER-01-E2-c1', label: t("Derecho público", "Public law") },
      { id: 'DER-01-E2-c2', label: t("Derecho privado", "Private law") },
      { id: 'DER-01-E2-c3', label: t("Derecho social", "Social law") },
    ],
    items: [
      { id: 'DER-01-E2-i1', label: t("Presentar la declaración de impuestos ante el SAT", "Filing the tax return with SAT"), correctCategoryId: 'DER-01-E2-c1' },
      { id: 'DER-01-E2-i2', label: t("Comprar mercancía a un proveedor para revenderla", "Buying goods from a supplier to resell them"), correctCategoryId: 'DER-01-E2-c2' },
      { id: 'DER-01-E2-i3', label: t("Pagar el aguinaldo a los trabajadores", "Paying the year-end bonus to workers"), correctCategoryId: 'DER-01-E2-c3' },
      { id: 'DER-01-E2-i4', label: t("Tramitar con el municipio el permiso para poner un anuncio", "Applying to the municipality for a permit to put up a sign"), correctCategoryId: 'DER-01-E2-c1' },
      { id: 'DER-01-E2-i5', label: t("Firmar la renta de una bodega con su dueño", "Signing a warehouse lease with its owner"), correctCategoryId: 'DER-01-E2-c2' },
      { id: 'DER-01-E2-i6', label: t("Inscribir a una empleada en la seguridad social", "Enrolling an employee in social security"), correctCategoryId: 'DER-01-E2-c3' },
    ],
    explanation: t(
      "Público: la relación es con el Estado como autoridad (impuestos, permisos). Privado: acuerdos entre particulares en igualdad (compra mercantil, renta). Social: protege a los trabajadores (aguinaldo, seguridad social). Error común: poner la seguridad social en derecho público solo porque interviene una institución del gobierno; su fin es proteger al trabajador.",
      "Public: the relationship is with the State as an authority (taxes, permits). Private: agreements between private parties on equal footing (commercial purchase, lease). Social: protects workers (year-end bonus, social security). Common mistake: placing social security in public law just because a government institution is involved; its purpose is to protect the worker.",
    ),
    difficulty: 1,
    points: 15,
    competency: 'business-law-basics',
  },
  {
    id: 'DER-01-E3',
    level: 2,
    module: 'DER-01',
    kind: 'truefalse',
    flavor: 'concept',
    prompt: t(
      "Una sociedad mercantil constituida conforme a la ley tiene un patrimonio propio, separado del patrimonio personal de sus socios.",
      "A commercial company formed under the law has its own estate, separate from its partners' personal estates.",
    ),
    answer: true,
    explanation: t(
      "Verdadero. Al ser persona moral, la sociedad tiene personalidad jurídica: sus bienes y deudas son suyos. Por eso, en tipos como la S.A., las deudas del negocio por lo general no alcanzan la casa del socio. Error común: creer que la sociedad y el dueño son la misma persona, como ocurre con la persona física con actividad empresarial.",
      "True. As a legal entity, the company has legal personality: its property and debts are its own. That is why, in types like the S.A., the business's debts generally do not reach the partner's house. Common mistake: believing the company and the owner are the same person, as happens with an individual with business activity.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'business-law-basics',
  },
  {
    id: 'DER-01-E4',
    level: 2,
    module: 'DER-01',
    kind: 'multi',
    flavor: 'case',
    context: t(
      "Doña Lupita abre una tortillería en Toluca. Va a contratar a un ayudante, darse de alta ante el SAT, pedir la licencia de funcionamiento y comprar harina a un molino para vender tortillas.",
      "Doña Lupita opens a tortilla shop in Toluca. She will hire an assistant, register with SAT, apply for an operating license and buy flour from a mill to sell tortillas.",
    ),
    prompt: t(
      "¿Qué ramas del derecho intervienen directamente en lo que hará Doña Lupita? Selecciona todas las que apliquen.",
      "Which branches of law are directly involved in what Doña Lupita will do? Select all that apply.",
    ),
    options: [
      { id: 'DER-01-E4-a', text: t("Derecho laboral", "Labor law") },
      { id: 'DER-01-E4-b', text: t("Derecho fiscal", "Tax law") },
      { id: 'DER-01-E4-c', text: t("Derecho administrativo", "Administrative law") },
      { id: 'DER-01-E4-d', text: t("Derecho mercantil", "Commercial law") },
      { id: 'DER-01-E4-e', text: t("Derecho familiar", "Family law") },
    ],
    correctOptionIds: ['DER-01-E4-a', 'DER-01-E4-b', 'DER-01-E4-c', 'DER-01-E4-d'],
    explanation: t(
      "Contratar al ayudante es laboral; el alta ante el SAT es fiscal; la licencia es administrativa; comprar harina para producir y vender es mercantil. El derecho familiar (matrimonio, pensiones alimenticias, tutela) no interviene en estos pasos. Error común: pensar que un negocio pequeño solo tiene que ver con impuestos.",
      "Hiring the assistant is labor law; registering with SAT is tax law; the license is administrative law; buying flour to produce and sell is commercial law. Family law (marriage, child support, guardianship) is not involved in these steps. Common mistake: thinking a small business only deals with taxes.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'business-law-basics',
  },
  {
    id: 'DER-01-E5',
    level: 2,
    module: 'DER-01',
    kind: 'mcq',
    flavor: 'case',
    context: t(
      "Sofía tiene una estética como persona física con actividad empresarial. Su negocio quedó a deber dinero a un proveedor de tintes y lo que hay en el local no alcanza para pagar.",
      "Sofía runs a beauty salon as an individual with business activity. Her business owes money to a dye supplier and what is in the salon is not enough to pay.",
    ),
    prompt: t(
      "¿Qué afirmación describe mejor su situación jurídica?",
      "Which statement best describes her legal situation?",
    ),
    options: [
      { id: 'DER-01-E5-a', text: t("El proveedor solo puede cobrar con lo que hay en el local", "The supplier can only collect from what is in the salon") },
      { id: 'DER-01-E5-b', text: t("La deuda desaparece porque el negocio no tiene con qué pagar", "The debt disappears because the business cannot pay") },
      { id: 'DER-01-E5-c', text: t("Sofía responde con sus bienes personales, salvo los que la ley protege de embargo", "Sofía is liable with her personal property, except what the law protects from seizure") },
      { id: 'DER-01-E5-d', text: t("El proveedor debe cobrarle al SAT", "The supplier must collect from SAT") },
    ],
    correctOptionId: 'DER-01-E5-c',
    explanation: t(
      "Como persona física, Sofía y su negocio son la misma persona, con un solo patrimonio. El proveedor puede reclamar sobre sus bienes personales, salvo los que la ley declara inembargables. Error común: creer que el negocio de una persona física tiene un patrimonio separado, como una sociedad.",
      "As an individual, Sofía and her business are the same person, with a single estate. The supplier can claim against her personal property, except what the law declares exempt from seizure. Common mistake: believing an individual's business has a separate estate, like a company.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'business-law-basics',
  },
  {
    id: 'DER-01-E6',
    level: 2,
    module: 'DER-01',
    kind: 'numeric',
    flavor: 'case',
    context: t(
      "Ramiro opera una carpintería como persona física. El negocio debe $260,000 y sus bienes (herramienta y madera) se venden en $95,000 para pagar. Ramiro no firmó nada más ni tiene bienes inembargables relevantes. (Caso hipotético.)",
      "Ramiro runs a carpentry shop as an individual. The business owes $260,000 and its assets (tools and wood) are sold for $95,000 to pay. Ramiro signed nothing else and has no relevant seizure-exempt property. (Hypothetical case.)",
    ),
    prompt: t(
      "¿Cuánto de la deuda queda pendiente y podría cobrarse del patrimonio personal de Ramiro?",
      "How much of the debt remains outstanding and could be collected from Ramiro's personal estate?",
    ),
    answer: 165000,
    unit: 'MXN',
    decimals: 0,
    tolerance: { abs: 0.5 },
    explanation: t(
      "Faltante = 260,000 − 95,000 = $165,000. Como persona física no hay separación entre sus bienes y los del negocio, así que ese faltante puede cobrarse de su patrimonio personal. Error común: responder $0 pensando que solo responde lo que está en el taller; eso aplicaría (en principio) a un socio de una sociedad de responsabilidad limitada.",
      "Shortfall = 260,000 − 95,000 = $165,000. As an individual there is no separation between his property and the business's, so that shortfall can be collected from his personal estate. Common mistake: answering $0 thinking only what is in the shop is liable; that would apply (in principle) to a partner in a limited-liability company.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'business-law-basics',
  },

  // ═════════════════════════ DER-02 ═════════════════════════
  {
    id: 'DER-02-E1',
    level: 2,
    module: 'DER-02',
    kind: 'mcq',
    flavor: 'concept',
    prompt: t(
      "En la jerarquía de normas mexicanas, ¿cuál está en la cima, junto con los tratados internacionales celebrados conforme a ella?",
      "In the hierarchy of Mexican rules, which one sits at the top, together with the international treaties made in accordance with it?",
    ),
    options: [
      { id: 'DER-02-E1-a', text: t("El Código de Comercio", "The Commercial Code") },
      { id: 'DER-02-E1-b', text: t("Los reglamentos del Presidente", "The President's regulations") },
      { id: 'DER-02-E1-c', text: t("La Constitución Política de los Estados Unidos Mexicanos", "The Political Constitution of the United Mexican States") },
      { id: 'DER-02-E1-d', text: t("Las Normas Oficiales Mexicanas", "The Official Mexican Standards") },
    ],
    correctOptionId: 'DER-02-E1-c',
    explanation: t(
      "La Constitución es la norma suprema; con las leyes del Congreso que emanan de ella y los tratados forma la Ley Suprema de toda la Unión. Códigos y leyes están debajo, y reglamentos y NOM más abajo todavía. Error común: pensar que un código muy usado, como el de Comercio, está al nivel de la Constitución.",
      "The Constitution is the supreme rule; with the laws of Congress derived from it and treaties, it forms the Supreme Law of the whole Union. Codes and statutes are below, and regulations and NOMs lower still. Common mistake: thinking a widely used code, like the Commercial Code, ranks with the Constitution.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'mexican-legal-framework',
  },
  {
    id: 'DER-02-E2',
    level: 2,
    module: 'DER-02',
    kind: 'classify',
    flavor: 'concept',
    prompt: t(
      "Clasifica cada norma o trámite según el nivel de gobierno que lo establece.",
      "Classify each rule or procedure by the level of government that establishes it.",
    ),
    categories: [
      { id: 'DER-02-E2-c1', label: t("Federal", "Federal") },
      { id: 'DER-02-E2-c2', label: t("Estatal", "State") },
      { id: 'DER-02-E2-c3', label: t("Municipal", "Municipal") },
    ],
    items: [
      { id: 'DER-02-E2-i1', label: t("Ley Federal del Trabajo", "Federal Labor Law"), correctCategoryId: 'DER-02-E2-c1' },
      { id: 'DER-02-E2-i2', label: t("Impuesto sobre nóminas", "Payroll tax"), correctCategoryId: 'DER-02-E2-c2' },
      { id: 'DER-02-E2-i3', label: t("Licencia de funcionamiento de un local", "Operating license for a shop"), correctCategoryId: 'DER-02-E2-c3' },
      { id: 'DER-02-E2-i4', label: t("Código de Comercio", "Commercial Code"), correctCategoryId: 'DER-02-E2-c1' },
      { id: 'DER-02-E2-i5', label: t("Impuesto predial", "Property tax (predial)"), correctCategoryId: 'DER-02-E2-c3' },
      { id: 'DER-02-E2-i6', label: t("Código civil de Jalisco", "Civil code of Jalisco"), correctCategoryId: 'DER-02-E2-c2' },
    ],
    explanation: t(
      "Trabajo y comercio son materias federales: hay una sola LFT y un solo Código de Comercio para todo el país. El impuesto sobre nóminas y los códigos civiles son estatales. Las licencias de funcionamiento y el predial son municipales. Error común: creer que cada estado tiene su propio Código de Comercio porque cada uno tiene su propio código civil.",
      "Labor and commerce are federal matters: there is a single LFT and a single Commercial Code for the whole country. Payroll tax and civil codes are state matters. Operating licenses and property tax are municipal. Common mistake: believing each state has its own Commercial Code because each has its own civil code.",
    ),
    difficulty: 1,
    points: 15,
    competency: 'mexican-legal-framework',
  },
  {
    id: 'DER-02-E3',
    level: 2,
    module: 'DER-02',
    kind: 'formula',
    flavor: 'concept',
    prompt: t(
      "Completa la secuencia del proceso para crear una ley federal.",
      "Complete the sequence of the process to create a federal law.",
    ),
    template: 'Iniciativa → {{b1}} → {{b2}} → Publicación en el {{b3}} → Entrada en vigor',
    blanks: [
      {
        id: 'b1',
        options: [
          { id: 'DER-02-E3-b1-a', text: t("Discusión y aprobación en ambas Cámaras", "Debate and approval in both Chambers") },
          { id: 'DER-02-E3-b1-b', text: t("Sentencia de la Suprema Corte", "Supreme Court ruling") },
          { id: 'DER-02-E3-b1-c', text: t("Consulta en redes sociales", "Social media poll") },
        ],
        correctOptionId: 'DER-02-E3-b1-a',
      },
      {
        id: 'b2',
        options: [
          { id: 'DER-02-E3-b2-a', text: t("Inscripción en el Registro Público de Comercio", "Registration in the Public Registry of Commerce") },
          { id: 'DER-02-E3-b2-b', text: t("Promulgación por el Ejecutivo", "Enactment by the Executive") },
          { id: 'DER-02-E3-b2-c', text: t("Firma ante notario", "Signing before a notary") },
        ],
        correctOptionId: 'DER-02-E3-b2-b',
      },
      {
        id: 'b3',
        options: [
          { id: 'DER-02-E3-b3-a', text: t("Periódico de mayor circulación", "Newspaper with the largest circulation") },
          { id: 'DER-02-E3-b3-b', text: t("Portal de la empresa afectada", "Website of the affected company") },
          { id: 'DER-02-E3-b3-c', text: t("Diario Oficial de la Federación", "Official Gazette of the Federation") },
        ],
        correctOptionId: 'DER-02-E3-b3-c',
      },
    ],
    explanation: t(
      "Una ley federal se presenta como iniciativa, se discute y aprueba en la Cámara de Diputados y el Senado, el Ejecutivo la promulga y se publica en el Diario Oficial de la Federación; entra en vigor cuando ella misma lo indica. Error común: pensar que la Suprema Corte aprueba las leyes; su papel es interpretarlas y resolver conflictos.",
      "A federal law is submitted as a bill, debated and approved in the Chamber of Deputies and the Senate, enacted by the Executive and published in the Official Gazette of the Federation; it comes into force when it says so. Common mistake: thinking the Supreme Court approves laws; its role is to interpret them and resolve disputes.",
    ),
    difficulty: 1,
    points: 15,
    competency: 'mexican-legal-framework',
  },
  {
    id: 'DER-02-E4',
    level: 2,
    module: 'DER-02',
    kind: 'truefalse',
    flavor: 'concept',
    prompt: t(
      "Cada estado de la República puede expedir su propio Código de Comercio con reglas distintas para los comerciantes de su territorio.",
      "Each Mexican state may issue its own Commercial Code with different rules for the merchants in its territory.",
    ),
    answer: false,
    explanation: t(
      "Falso. La Constitución da al Congreso de la Unión la facultad de legislar en materia de comercio, así que hay un solo Código de Comercio federal para todo el país. Los estados sí tienen sus propios códigos civiles. Error común: confundir la materia civil (estatal) con la mercantil (federal).",
      "False. The Constitution gives the Congress of the Union the power to legislate on commerce, so there is a single federal Commercial Code for the whole country. The states do have their own civil codes. Common mistake: confusing civil matters (state) with commercial matters (federal).",
    ),
    difficulty: 1,
    points: 10,
    competency: 'mexican-legal-framework',
  },
  {
    id: 'DER-02-E5',
    level: 2,
    module: 'DER-02',
    kind: 'multi',
    flavor: 'concept',
    prompt: t(
      "¿Cuáles son fuentes formales del derecho en México? Selecciona todas las que apliquen.",
      "Which are formal sources of law in Mexico? Select all that apply.",
    ),
    options: [
      { id: 'DER-02-E5-a', text: t("La legislación (leyes y reglamentos)", "Legislation (statutes and regulations)") },
      { id: 'DER-02-E5-b', text: t("La jurisprudencia de los tribunales facultados", "Case law from authorized courts") },
      { id: 'DER-02-E5-c', text: t("La costumbre", "Custom") },
      { id: 'DER-02-E5-d', text: t("Un comunicado de prensa de una empresa", "A company's press release") },
      { id: 'DER-02-E5-e', text: t("La opinión de un influencer sobre impuestos", "An influencer's opinion on taxes") },
    ],
    correctOptionIds: ['DER-02-E5-a', 'DER-02-E5-b', 'DER-02-E5-c'],
    explanation: t(
      "Las fuentes formales son los procesos por los que nacen normas obligatorias: legislación, jurisprudencia y costumbre (esta con un papel menor). Un comunicado de una empresa o una opinión en redes no crean derecho, aunque informen. Error común: tomar como regla obligatoria lo que se difunde en internet sin verificarlo en la fuente oficial.",
      "Formal sources are the processes by which binding rules are born: legislation, case law and custom (the latter with a minor role). A company statement or a social media opinion does not create law, even if it informs. Common mistake: treating what circulates online as a binding rule without checking the official source.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'mexican-legal-framework',
  },
  {
    id: 'DER-02-E6',
    level: 2,
    module: 'DER-02',
    kind: 'mcq',
    flavor: 'case',
    context: t(
      "Una empresa de transporte revisa un tema: una ley federal le permite operar con cierto requisito, pero el reglamento de esa misma ley le exige un requisito adicional que la ley no prevé y que la contradice. (Caso hipotético.)",
      "A transport company reviews an issue: a federal statute allows it to operate with a certain requirement, but that statute's regulation demands an additional requirement the statute does not provide for and that contradicts it. (Hypothetical case.)",
    ),
    prompt: t(
      "Según la jerarquía de normas, ¿qué es lo correcto?",
      "According to the hierarchy of rules, what is correct?",
    ),
    options: [
      { id: 'DER-02-E6-a', text: t("Prevalece el reglamento porque es más reciente y más detallado", "The regulation prevails because it is more recent and more detailed") },
      { id: 'DER-02-E6-b', text: t("Prevalece la ley; el reglamento no puede contradecirla y puede impugnarse", "The statute prevails; the regulation cannot contradict it and can be challenged") },
      { id: 'DER-02-E6-c', text: t("La empresa elige libremente cuál de las dos cumplir", "The company freely chooses which of the two to follow") },
      { id: 'DER-02-E6-d', text: t("Ninguna aplica hasta que lo decida el municipio", "Neither applies until the municipality decides") },
    ],
    correctOptionId: 'DER-02-E6-b',
    explanation: t(
      "El reglamento está por debajo de la ley: solo puede detallarla, no ir contra ella. Si la contradice, la empresa puede impugnarlo ante los tribunales, con apoyo legal. Error común: pensar que la norma más detallada o más nueva siempre gana; ese criterio solo sirve entre normas del mismo nivel.",
      "The regulation ranks below the statute: it can only detail it, not go against it. If it contradicts it, the company can challenge it in court, with legal support. Common mistake: thinking the more detailed or newer rule always wins; that criterion only works between rules of the same rank.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'mexican-legal-framework',
  },

  // ═════════════════════════ DER-03 ═════════════════════════
  {
    id: 'DER-03-E1',
    level: 2,
    module: 'DER-03',
    kind: 'mcq',
    flavor: 'concept',
    prompt: t(
      "Según el Código de Comercio, ¿quién se considera comerciante?",
      "According to the Commercial Code, who is considered a merchant?",
    ),
    options: [
      { id: 'DER-03-E1-a', text: t("Cualquier persona que alguna vez vendió algo usado", "Anyone who has ever sold something used") },
      { id: 'DER-03-E1-b', text: t("Solo quien tiene un local físico abierto al público", "Only someone with a physical shop open to the public") },
      { id: 'DER-03-E1-c', text: t("Solo las empresas que cotizan en bolsa", "Only companies listed on the stock exchange") },
      { id: 'DER-03-E1-d', text: t("Quien con capacidad legal hace del comercio su ocupación ordinaria, y las sociedades mercantiles", "Whoever, with legal capacity, makes trade their ordinary occupation, and commercial companies") },
    ],
    correctOptionId: 'DER-03-E1-d',
    explanation: t(
      "Son comerciantes las personas con capacidad que se dedican al comercio de forma habitual y las sociedades constituidas conforme a las leyes mercantiles. Una venta aislada no basta, y no se exige tener local: una tienda en línea habitual también cuenta. Error común: pensar que vender una vez algo usado te convierte en comerciante.",
      "Merchants are persons with capacity who engage in trade habitually and companies formed under commercial laws. A one-off sale is not enough, and a physical shop is not required: a habitual online store also counts. Common mistake: thinking that selling something used once makes you a merchant.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'commercial-law',
  },
  {
    id: 'DER-03-E2',
    level: 2,
    module: 'DER-03',
    kind: 'classify',
    flavor: 'concept',
    prompt: t(
      "Clasifica cada operación como acto de comercio o acto civil desde el punto de vista de quien la realiza.",
      "Classify each transaction as a commercial act or a civil act from the point of view of the person doing it.",
    ),
    categories: [
      { id: 'DER-03-E2-c1', label: t("Acto de comercio", "Commercial act") },
      { id: 'DER-03-E2-c2', label: t("Acto civil", "Civil act") },
    ],
    items: [
      { id: 'DER-03-E2-i1', label: t("Una tienda compra 500 botellas de agua para revenderlas", "A store buys 500 bottles of water to resell them"), correctCategoryId: 'DER-03-E2-c1' },
      { id: 'DER-03-E2-i2', label: t("Compras un refrigerador para tu casa", "You buy a fridge for your home"), correctCategoryId: 'DER-03-E2-c2' },
      { id: 'DER-03-E2-i3', label: t("Firmas un pagaré por un préstamo", "You sign a promissory note for a loan"), correctCategoryId: 'DER-03-E2-c1' },
      { id: 'DER-03-E2-i4', label: t("Le vendes una sola vez tu bicicleta usada a un vecino", "You sell your used bike to a neighbor a single time"), correctCategoryId: 'DER-03-E2-c2' },
      { id: 'DER-03-E2-i5', label: t("Un banco otorga un crédito a una empresa", "A bank grants a loan to a company"), correctCategoryId: 'DER-03-E2-c1' },
      { id: 'DER-03-E2-i6', label: t("Rentas a un particular el departamento donde vives", "You rent the apartment you live in from a private individual"), correctCategoryId: 'DER-03-E2-c2' },
    ],
    explanation: t(
      "Comprar para revender, las operaciones bancarias y todo lo relacionado con títulos de crédito (como el pagaré) son actos de comercio por ley, aunque los haga alguien que no es comerciante. Comprar para tu uso, una venta aislada entre particulares o rentar tu vivienda son actos civiles. Error común: pensar que firmar un pagaré es civil porque lo firma una persona común.",
      "Buying to resell, bank operations and everything related to negotiable instruments (such as a promissory note) are commercial acts by law, even if done by a non-merchant. Buying for your own use, a one-off sale between individuals or renting your home are civil acts. Common mistake: thinking signing a promissory note is civil because an ordinary person signs it.",
    ),
    difficulty: 1,
    points: 15,
    competency: 'commercial-law',
  },
  {
    id: 'DER-03-E3',
    level: 2,
    module: 'DER-03',
    kind: 'multi',
    flavor: 'concept',
    prompt: t(
      "¿Cuáles son obligaciones básicas de los comerciantes? Selecciona todas las que apliquen.",
      "Which are basic obligations of merchants? Select all that apply.",
    ),
    options: [
      { id: 'DER-03-E3-a', text: t("Inscribir ciertos actos en el Registro Público de Comercio", "Registering certain acts in the Public Registry of Commerce") },
      { id: 'DER-03-E3-b', text: t("Llevar contabilidad", "Keeping accounting records") },
      { id: 'DER-03-E3-c', text: t("Conservar la correspondencia y documentos del negocio", "Preserving the business's correspondence and documents") },
      { id: 'DER-03-E3-d', text: t("Publicar sus ventas diarias en un periódico", "Publishing their daily sales in a newspaper") },
      { id: 'DER-03-E3-e', text: t("Pedir permiso a sus competidores para fijar precios", "Asking competitors for permission to set prices") },
    ],
    correctOptionIds: ['DER-03-E3-a', 'DER-03-E3-b', 'DER-03-E3-c'],
    explanation: t(
      "El comerciante debe dar publicidad a ciertos actos mediante el Registro Público de Comercio, llevar contabilidad y conservar su correspondencia y documentos durante el plazo legal. No debe publicar sus ventas diarias, y ponerse de acuerdo con competidores para fijar precios sería una práctica prohibida por las leyes de competencia. Error común: pensar que la contabilidad solo es un asunto fiscal; también es una obligación mercantil.",
      "A merchant must publicize certain acts through the Public Registry of Commerce, keep accounting records and preserve correspondence and documents for the legal period. They need not publish daily sales, and agreeing with competitors to set prices would be a practice banned by competition laws. Common mistake: thinking accounting is only a tax matter; it is also a commercial obligation.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'commercial-law',
  },
  {
    id: 'DER-03-E4',
    level: 2,
    module: 'DER-03',
    kind: 'truefalse',
    flavor: 'concept',
    prompt: t(
      "Por la característica de literalidad, un pagaré vale por lo que dice su texto, aunque después alguien asegure que de palabra se acordó otra cantidad.",
      "Due to the literalness characteristic, a promissory note is worth what its text says, even if someone later claims a different amount was agreed verbally.",
    ),
    answer: true,
    explanation: t(
      "Verdadero. La literalidad significa que el derecho del título se mide por lo escrito en él. Por eso hay que revisar montos, fechas e intereses antes de firmar. Error común: confundir literalidad con autonomía; la autonomía significa que cada nuevo tenedor adquiere un derecho propio, independiente de los anteriores.",
      "True. Literalness means the instrument's right is measured by what is written on it. That is why amounts, dates and interest must be checked before signing. Common mistake: confusing literalness with autonomy; autonomy means each new holder acquires a right of their own, independent of previous holders.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'commercial-law',
  },
  {
    id: 'DER-03-E5',
    level: 2,
    module: 'DER-03',
    kind: 'numeric',
    flavor: 'case',
    context: t(
      "Una ferretería firma un pagaré por $50,000 a favor de su proveedor, con interés simple de 2% mensual y vencimiento a 6 meses. Todo está escrito en el pagaré. (Tasa hipotética.)",
      "A hardware store signs a promissory note for $50,000 in favor of its supplier, with simple interest of 2% per month and maturity in 6 months. Everything is written on the note. (Hypothetical rate.)",
    ),
    prompt: t(
      "¿Cuánto debe pagar la ferretería al vencimiento del pagaré, sumando capital e intereses?",
      "How much must the hardware store pay when the note matures, adding principal and interest?",
    ),
    answer: 56000,
    unit: 'MXN',
    decimals: 0,
    tolerance: { abs: 0.5 },
    explanation: t(
      "Interés = 50,000 × 0.02 × 6 = $6,000. Total = 50,000 + 6,000 = $56,000. Como es interés simple, se calcula siempre sobre el capital original. Error común: responder solo los $6,000 de interés u olvidar multiplicar por los 6 meses.",
      "Interest = 50,000 × 0.02 × 6 = $6,000. Total = 50,000 + 6,000 = $56,000. Since it is simple interest, it is always computed on the original principal. Common mistake: answering only the $6,000 of interest or forgetting to multiply by the 6 months.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'commercial-law',
  },
  {
    id: 'DER-03-E6',
    level: 2,
    module: 'DER-03',
    kind: 'mcq',
    flavor: 'case',
    context: t(
      "Una tienda departamental vende una pantalla a Ana, que la quiere para ver películas en su casa. Para la tienda es una venta de su giro; para Ana es una compra de consumo.",
      "A department store sells a TV to Ana, who wants it to watch movies at home. For the store it is a sale in its line of business; for Ana it is a consumer purchase.",
    ),
    prompt: t(
      "¿Cómo se llama este tipo de acto y qué ley rige si hay un conflicto entre ellas?",
      "What is this type of act called, and which law governs if there is a dispute between them?",
    ),
    options: [
      { id: 'DER-03-E6-a', text: t("Acto mixto; se rige por las leyes mercantiles", "Mixed act; governed by commercial law") },
      { id: 'DER-03-E6-b', text: t("Acto civil puro; se rige solo por el código civil", "Purely civil act; governed only by the civil code") },
      { id: 'DER-03-E6-c', text: t("Acto administrativo; lo resuelve el municipio", "Administrative act; the municipality resolves it") },
      { id: 'DER-03-E6-d', text: t("Acto laboral; lo resuelve un tribunal del trabajo", "Labor act; a labor court resolves it") },
    ],
    correctOptionId: 'DER-03-E6-a',
    explanation: t(
      "Es un acto mixto: mercantil para la tienda y civil para Ana. En caso de conflicto se aplican las leyes mercantiles. Además, como consumidora, Ana cuenta con la protección de las normas de protección al consumidor. Error común: pensar que, como Ana no es comerciante, todo el acto es civil.",
      "It is a mixed act: commercial for the store and civil for Ana. In case of dispute, commercial law applies. Also, as a consumer, Ana is protected by consumer protection rules. Common mistake: thinking that because Ana is not a merchant, the whole act is civil.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'commercial-law',
  },

  // ═════════════════════════ DER-04 ═════════════════════════
  {
    id: 'DER-04-E1',
    level: 2,
    module: 'DER-04',
    kind: 'classify',
    flavor: 'concept',
    prompt: t(
      "Clasifica cada tipo de sociedad según cómo responden sus socios por las deudas de la sociedad.",
      "Classify each company type by how its partners are liable for the company's debts.",
    ),
    categories: [
      { id: 'DER-04-E1-c1', label: t("Responden solo hasta su aportación", "Liable only up to their contribution") },
      { id: 'DER-04-E1-c2', label: t("Responden de forma subsidiaria, ilimitada y solidaria", "Liable on a subsidiary, unlimited, joint and several basis") },
    ],
    items: [
      { id: 'DER-04-E1-i1', label: t("Sociedad anónima (S.A.)", "Corporation (S.A.)"), correctCategoryId: 'DER-04-E1-c1' },
      { id: 'DER-04-E1-i2', label: t("Sociedad de responsabilidad limitada (S. de R.L.)", "Limited liability company (S. de R.L.)"), correctCategoryId: 'DER-04-E1-c1' },
      { id: 'DER-04-E1-i3', label: t("Sociedad en nombre colectivo", "General partnership (nombre colectivo)"), correctCategoryId: 'DER-04-E1-c2' },
      { id: 'DER-04-E1-i4', label: t("Sociedad por acciones simplificada (S.A.S.)", "Simplified stock company (S.A.S.)"), correctCategoryId: 'DER-04-E1-c1' },
    ],
    explanation: t(
      "En la S.A., la S. de R.L. y la S.A.S., cada socio arriesga solo lo que aportó. En la sociedad en nombre colectivo, si la sociedad no alcanza a pagar, el acreedor puede cobrar todo lo que falte a cualquier socio. Error común: creer que la S. de R.L. tiene responsabilidad ilimitada por tener pocos socios; su propio nombre dice que es limitada.",
      "In the S.A., the S. de R.L. and the S.A.S., each partner risks only what they contributed. In a general partnership, if the company cannot pay, the creditor can collect everything still owed from any partner. Common mistake: believing the S. de R.L. has unlimited liability because it has few partners; its very name says it is limited.",
    ),
    difficulty: 1,
    points: 15,
    competency: 'business-entities',
  },
  {
    id: 'DER-04-E2',
    level: 2,
    module: 'DER-04',
    kind: 'mcq',
    flavor: 'concept',
    prompt: t(
      "En una sociedad anónima, ¿cuál es el órgano supremo, donde los dueños votan las decisiones más importantes?",
      "In a corporation (S.A.), which is the supreme body, where the owners vote on the most important decisions?",
    ),
    options: [
      { id: 'DER-04-E2-a', text: t("El comisario", "The statutory auditor") },
      { id: 'DER-04-E2-b', text: t("El director general", "The CEO") },
      { id: 'DER-04-E2-c', text: t("La asamblea general de accionistas", "The general shareholders' meeting") },
      { id: 'DER-04-E2-d', text: t("El contador externo", "The external accountant") },
    ],
    correctOptionId: 'DER-04-E2-c',
    explanation: t(
      "La asamblea general de accionistas es el órgano supremo de la S.A.: aprueba estados financieros, nombra administradores y reforma estatutos. La administración dirige el día a día y el comisario vigila. Error común: pensar que el director general es la máxima autoridad; él responde ante la administración y, al final, ante la asamblea.",
      "The general shareholders' meeting is the S.A.'s supreme body: it approves financial statements, appoints managers and amends bylaws. Management runs day-to-day operations and the statutory auditor oversees. Common mistake: thinking the CEO is the highest authority; the CEO answers to management and, ultimately, to the meeting.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'business-entities',
  },
  {
    id: 'DER-04-E3',
    level: 2,
    module: 'DER-04',
    kind: 'numeric',
    flavor: 'case',
    context: t(
      "Una S.A. tiene capital de $1,000,000 dividido en 1,000 acciones de $1,000 cada una, todas pagadas. Laura tiene 150 acciones. La sociedad quiebra con deudas por $3,000,000 y no firmó Laura como aval de nada. (Caso hipotético.)",
      "An S.A. has $1,000,000 of capital divided into 1,000 shares of $1,000 each, all paid up. Laura holds 150 shares. The company goes bankrupt owing $3,000,000, and Laura did not sign as guarantor for anything. (Hypothetical case.)",
    ),
    prompt: t(
      "¿Cuál es la pérdida máxima que puede sufrir Laura como accionista?",
      "What is the maximum loss Laura can suffer as a shareholder?",
    ),
    answer: 150000,
    unit: 'MXN',
    decimals: 0,
    tolerance: { abs: 0.5 },
    explanation: t(
      "En la S.A. la responsabilidad se limita al pago de las acciones: 150 × $1,000 = $150,000. Los acreedores no pueden cobrarle a Laura el resto de los $3,000,000 con su patrimonio personal. Error común: repartir la deuda total entre los accionistas (15% × 3,000,000 = $450,000), como si la responsabilidad fuera ilimitada.",
      "In the S.A., liability is limited to paying for the shares: 150 × $1,000 = $150,000. Creditors cannot collect the rest of the $3,000,000 from Laura's personal estate. Common mistake: splitting the total debt among shareholders (15% × 3,000,000 = $450,000), as if liability were unlimited.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'business-entities',
  },
  {
    id: 'DER-04-E4',
    level: 2,
    module: 'DER-04',
    kind: 'truefalse',
    flavor: 'concept',
    prompt: t(
      "Una sociedad de responsabilidad limitada puede tener hasta 200 socios.",
      "A limited liability company (S. de R.L.) may have up to 200 partners.",
    ),
    answer: false,
    explanation: t(
      "Falso. La ley limita a la S. de R.L. a un máximo de 50 socios; está pensada para grupos pequeños que se conocen. Si se necesitan muchos inversionistas, la S.A. es más adecuada porque sus acciones circulan con más facilidad. Error común: pensar que todas las sociedades mercantiles tienen las mismas reglas sobre el número de socios.",
      "False. The law caps the S. de R.L. at a maximum of 50 partners; it is designed for small groups who know each other. If many investors are needed, the S.A. is more suitable because its shares circulate more easily. Common mistake: thinking all commercial companies have the same rules on the number of partners.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'business-entities',
  },
  {
    id: 'DER-04-E5',
    level: 2,
    module: 'DER-04',
    kind: 'multi',
    flavor: 'concept',
    prompt: t(
      "¿Qué características tiene la sociedad por acciones simplificada (S.A.S.)? Selecciona todas las que apliquen.",
      "What characteristics does the simplified stock company (S.A.S.) have? Select all that apply.",
    ),
    options: [
      { id: 'DER-04-E5-a', text: t("Puede constituirla una sola persona física", "A single individual can form it") },
      { id: 'DER-04-E5-b', text: t("Se constituye por medios electrónicos ante la Secretaría de Economía", "It is formed electronically with the Ministry of Economy") },
      { id: 'DER-04-E5-c', text: t("Tiene un tope de ingresos anuales que se actualiza cada año", "It has an annual revenue cap updated every year") },
      { id: 'DER-04-E5-d', text: t("Sus accionistas pueden ser otras sociedades mercantiles", "Its shareholders can be other commercial companies") },
      { id: 'DER-04-E5-e', text: t("Necesita al menos 25 socios fundadores", "It needs at least 25 founding partners") },
    ],
    correctOptionIds: ['DER-04-E5-a', 'DER-04-E5-b', 'DER-04-E5-c'],
    explanation: t(
      "La S.A.S. puede formarla una o más personas físicas, se crea en línea sin notario y tiene un tope de ingresos anuales; si lo rebasa debe transformarse. Sus accionistas deben ser personas físicas, no otras sociedades. Error común: pensar que, por ser \"anónima\", funciona igual que la S.A. tradicional.",
      "The S.A.S. can be formed by one or more individuals, is created online without a notary and has an annual revenue cap; if it exceeds it, it must convert. Its shareholders must be individuals, not other companies. Common mistake: thinking that, being a \"stock\" company, it works just like the traditional S.A.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'business-entities',
  },
  {
    id: 'DER-04-E6',
    level: 2,
    module: 'DER-04',
    kind: 'mcq',
    flavor: 'case',
    context: t(
      "\"Muebles Sierra, S.A. de C.V.\" tiene un capital mínimo fijo y quiere recibir dinero de un nuevo inversionista este año, y quizá devolver parte el próximo.",
      "\"Muebles Sierra, S.A. de C.V.\" has a fixed minimum capital and wants to receive money from a new investor this year, and perhaps return part of it next year.",
    ),
    prompt: t(
      "¿Qué le permite la modalidad \"de C.V.\" en esta situación?",
      "What does the \"de C.V.\" modality allow it to do in this situation?",
    ),
    options: [
      { id: 'DER-04-E6-a', text: t("No pagar impuestos sobre el nuevo capital", "Not paying taxes on the new capital") },
      { id: 'DER-04-E6-b', text: t("Que los socios respondan con todo su patrimonio", "Making partners liable with all their property") },
      { id: 'DER-04-E6-c', text: t("Cambiar su capital mínimo fijo sin ningún acuerdo de los socios", "Changing its fixed minimum capital without any partner resolution") },
      { id: 'DER-04-E6-d', text: t("Aumentar o disminuir el capital por encima del mínimo fijo con trámites más sencillos, sin reformar estatutos", "Increasing or decreasing capital above the fixed minimum with simpler steps, without amending the bylaws") },
    ],
    correctOptionId: 'DER-04-E6-d',
    explanation: t(
      "Capital variable significa que la parte variable del capital puede subir o bajar con requisitos más simples (por ejemplo, un acuerdo de asamblea), sin reformar los estatutos cada vez. El mínimo fijo sí requiere reforma estatutaria para cambiar. No tiene nada que ver con impuestos ni con ampliar la responsabilidad. Error común: creer que C.V. significa \"con ventajas\" fiscales.",
      "Variable capital means the variable portion of capital can go up or down with simpler requirements (for example, a shareholders' resolution), without amending the bylaws each time. The fixed minimum does require a bylaw amendment to change. It has nothing to do with taxes or with widening liability. Common mistake: believing C.V. means some tax \"advantage\".",
    ),
    difficulty: 1,
    points: 10,
    competency: 'business-entities',
  },

  // ═════════════════════════ DER-05 ═════════════════════════
  {
    id: 'DER-05-E1',
    level: 2,
    module: 'DER-05',
    kind: 'formula',
    flavor: 'concept',
    prompt: t(
      "Completa la ruta típica para constituir una S.A. ante fedatario.",
      "Complete the typical route to incorporate an S.A. before an attestor.",
    ),
    template: '{{b1}} → Acta constitutiva ante {{b2}} → Inscripción en el {{b3}} → Alta en el RFC',
    blanks: [
      {
        id: 'b1',
        options: [
          { id: 'DER-05-E1-b1-a', text: t("Autorización de uso de denominación (Secretaría de Economía)", "Authorization to use the name (Ministry of Economy)") },
          { id: 'DER-05-E1-b1-b', text: t("Registro patronal en el IMSS", "IMSS employer registration") },
          { id: 'DER-05-E1-b1-c', text: t("Primera declaración anual", "First annual tax return") },
        ],
        correctOptionId: 'DER-05-E1-b1-a',
      },
      {
        id: 'b2',
        options: [
          { id: 'DER-05-E1-b2-a', text: t("Un juez laboral", "A labor judge") },
          { id: 'DER-05-E1-b2-b', text: t("Notario o corredor público", "Notary or public broker") },
          { id: 'DER-05-E1-b2-c', text: t("El presidente municipal", "The municipal mayor") },
        ],
        correctOptionId: 'DER-05-E1-b2-b',
      },
      {
        id: 'b3',
        options: [
          { id: 'DER-05-E1-b3-a', text: t("Registro Civil", "Civil Registry") },
          { id: 'DER-05-E1-b3-b', text: t("Buró de crédito", "Credit bureau") },
          { id: 'DER-05-E1-b3-c', text: t("Registro Público de Comercio", "Public Registry of Commerce") },
        ],
        correctOptionId: 'DER-05-E1-b3-c',
      },
    ],
    explanation: t(
      "Primero se asegura el nombre con la autorización de la Secretaría de Economía; luego se firma el acta ante notario o corredor público y se inscribe en el Registro Público de Comercio; después se da de alta en el RFC. El registro patronal viene cuando se va a contratar personal. Error común: confundir el Registro Público de Comercio con el Registro Civil, que es para nacimientos y matrimonios.",
      "First the name is secured with the Ministry of Economy authorization; then the articles are signed before a notary or public broker and registered in the Public Registry of Commerce; then the RFC registration follows. The employer registration comes when staff will be hired. Common mistake: confusing the Public Registry of Commerce with the Civil Registry, which handles births and marriages.",
    ),
    difficulty: 1,
    points: 15,
    competency: 'company-formation',
  },
  {
    id: 'DER-05-E2',
    level: 2,
    module: 'DER-05',
    kind: 'fields',
    flavor: 'case',
    context: t(
      "Tres socios constituyen una S. de R.L.: Arturo aporta $300,000 en efectivo, Beatriz una máquina valuada en $150,000 y Ciro $50,000 en efectivo. La participación se fija en proporción a lo aportado. (Cifras hipotéticas.)",
      "Three partners form an S. de R.L.: Arturo contributes $300,000 in cash, Beatriz a machine valued at $150,000 and Ciro $50,000 in cash. Stakes are set in proportion to contributions. (Hypothetical figures.)",
    ),
    prompt: t(
      "Calcula el capital social y el porcentaje de participación de Arturo y de Ciro.",
      "Compute the share capital and the ownership percentage of Arturo and of Ciro.",
    ),
    fields: [
      { id: 'f1', label: t("Capital social (MXN)", "Share capital (MXN)"), answer: 500000, unit: 'MXN', tolerance: { abs: 0.5 } },
      { id: 'f2', label: t("Participación de Arturo (%)", "Arturo's stake (%)"), answer: 60, unit: '%', tolerance: { abs: 0.05 } },
      { id: 'f3', label: t("Participación de Ciro (%)", "Ciro's stake (%)"), answer: 10, unit: '%', tolerance: { abs: 0.05 } },
    ],
    explanation: t(
      "Capital = 300,000 + 150,000 + 50,000 = $500,000. Arturo: 300,000 ÷ 500,000 = 60%. Ciro: 50,000 ÷ 500,000 = 10% (Beatriz queda con 30%). La aportación en especie de Beatriz cuenta igual que el efectivo por su valor asignado. Error común: excluir la máquina del capital por no ser dinero, lo que daría a Arturo 85.71%.",
      "Capital = 300,000 + 150,000 + 50,000 = $500,000. Arturo: 300,000 ÷ 500,000 = 60%. Ciro: 50,000 ÷ 500,000 = 10% (Beatriz holds 30%). Beatriz's in-kind contribution counts like cash at its assigned value. Common mistake: leaving the machine out of capital because it is not money, which would give Arturo 85.71%.",
    ),
    difficulty: 1,
    points: 15,
    competency: 'company-formation',
  },
  {
    id: 'DER-05-E3',
    level: 2,
    module: 'DER-05',
    kind: 'multi',
    flavor: 'concept',
    prompt: t(
      "¿Qué datos deben incluirse en los estatutos de una sociedad mercantil? Selecciona todos los que apliquen.",
      "Which details must be included in a commercial company's bylaws? Select all that apply.",
    ),
    options: [
      { id: 'DER-05-E3-a', text: t("El objeto social (a qué se dedicará)", "The corporate purpose (what it will do)") },
      { id: 'DER-05-E3-b', text: t("La denominación o razón social y el domicilio", "The corporate or firm name and the registered address") },
      { id: 'DER-05-E3-c', text: t("El capital social y lo que aporta cada socio", "The share capital and what each partner contributes") },
      { id: 'DER-05-E3-d', text: t("La lista de clientes que tendrá el primer año", "The list of customers it will have in the first year") },
      { id: 'DER-05-E3-e', text: t("La forma de administración", "The form of management") },
    ],
    correctOptionIds: ['DER-05-E3-a', 'DER-05-E3-b', 'DER-05-E3-c', 'DER-05-E3-e'],
    explanation: t(
      "Los estatutos son las reglas internas: incluyen objeto, nombre, domicilio, duración, capital y aportaciones, administración y reparto de utilidades y pérdidas, entre otros. Los clientes futuros no forman parte del acta: son información del negocio, que además cambia todo el tiempo. Error común: redactar un objeto social demasiado estrecho que después impida realizar actividades nuevas.",
      "The bylaws are the internal rules: they include purpose, name, address, duration, capital and contributions, management and sharing of profits and losses, among others. Future customers are not part of the articles: they are business information that changes constantly. Common mistake: drafting a corporate purpose so narrow that it later prevents new activities.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'company-formation',
  },
  {
    id: 'DER-05-E4',
    level: 2,
    module: 'DER-05',
    kind: 'truefalse',
    flavor: 'concept',
    prompt: t(
      "Para emprender como persona física con actividad empresarial no se necesita acta constitutiva: basta con darse de alta en el RFC y obtener los permisos que pida el giro.",
      "To start a business as an individual with business activity no articles of incorporation are needed: registering with the RFC and obtaining the permits the line of business requires is enough.",
    ),
    answer: true,
    explanation: t(
      "Verdadero. El acta constitutiva crea una persona moral; la persona física ya existe, así que solo se registra ante el SAT y tramita licencias y, si contrata, el registro patronal. La desventaja es que no hay patrimonio separado. Error común: pensar que todo negocio formal requiere ir al notario.",
      "True. The articles of incorporation create a legal entity; the individual already exists, so they only register with SAT and obtain licenses and, if hiring, the employer registration. The downside is there is no separate estate. Common mistake: thinking every formal business requires going to a notary.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'company-formation',
  },
  {
    id: 'DER-05-E5',
    level: 2,
    module: 'DER-05',
    kind: 'classify',
    flavor: 'concept',
    prompt: t(
      "Relaciona cada trámite para formalizar una empresa con la autoridad que lo atiende.",
      "Match each procedure to formalize a company with the authority that handles it.",
    ),
    categories: [
      { id: 'DER-05-E5-c1', label: t("Secretaría de Economía", "Ministry of Economy") },
      { id: 'DER-05-E5-c2', label: t("SAT", "SAT (tax authority)") },
      { id: 'DER-05-E5-c3', label: t("IMSS", "IMSS (social security)") },
      { id: 'DER-05-E5-c4', label: t("Municipio o alcaldía", "Municipality or borough") },
    ],
    items: [
      { id: 'DER-05-E5-i1', label: t("Autorización de uso de denominación", "Authorization to use the corporate name"), correctCategoryId: 'DER-05-E5-c1' },
      { id: 'DER-05-E5-i2', label: t("Inscripción en el RFC", "RFC registration"), correctCategoryId: 'DER-05-E5-c2' },
      { id: 'DER-05-E5-i3', label: t("Obtener la e.firma de la sociedad", "Obtaining the company's e.firma"), correctCategoryId: 'DER-05-E5-c2' },
      { id: 'DER-05-E5-i4', label: t("Registro patronal", "Employer registration"), correctCategoryId: 'DER-05-E5-c3' },
      { id: 'DER-05-E5-i5', label: t("Licencia de funcionamiento", "Operating license"), correctCategoryId: 'DER-05-E5-c4' },
      { id: 'DER-05-E5-i6', label: t("Constancia de uso de suelo", "Zoning certificate"), correctCategoryId: 'DER-05-E5-c4' },
    ],
    explanation: t(
      "La Secretaría de Economía autoriza el nombre (y opera el sistema de la S.A.S.). El SAT da el RFC y la e.firma. El IMSS otorga el registro patronal. El municipio revisa el uso de suelo y da la licencia de funcionamiento. Error común: pensar que el SAT da el registro patronal porque también se relaciona con la nómina.",
      "The Ministry of Economy authorizes the name (and runs the S.A.S. system). SAT issues the RFC and e.firma. IMSS grants the employer registration. The municipality reviews zoning and issues the operating license. Common mistake: thinking SAT issues the employer registration because it is also related to payroll.",
    ),
    difficulty: 1,
    points: 15,
    competency: 'company-formation',
  },
  {
    id: 'DER-05-E6',
    level: 2,
    module: 'DER-05',
    kind: 'mcq',
    flavor: 'case',
    context: t(
      "Al constituir una panadería S.A. de C.V., Carlos no aporta dinero: entrega un horno industrial que se valúa en $90,000 y a cambio recibe acciones por ese valor.",
      "When incorporating a bakery S.A. de C.V., Carlos does not contribute money: he hands over an industrial oven valued at $90,000 and receives shares for that value in exchange.",
    ),
    prompt: t(
      "¿Cómo se llama la aportación de Carlos y qué debe cuidarse en el acta?",
      "What is Carlos's contribution called, and what must be addressed in the articles?",
    ),
    options: [
      { id: 'DER-05-E6-a', text: t("Préstamo; debe fijarse la tasa de interés", "A loan; the interest rate must be set") },
      { id: 'DER-05-E6-b', text: t("Donación; no se registra en el capital", "A donation; it is not recorded in capital") },
      { id: 'DER-05-E6-c', text: t("Aportación en especie; deben describirse el bien y su valor", "In-kind contribution; the asset and its value must be described") },
      { id: 'DER-05-E6-d', text: t("Renta; Carlos cobrará una mensualidad por el horno", "Rent; Carlos will charge a monthly fee for the oven") },
    ],
    correctOptionId: 'DER-05-E6-c',
    explanation: t(
      "Aportar un bien en lugar de dinero es una aportación en especie: el horno pasa a ser de la sociedad y Carlos recibe acciones. El acta debe describirlo y señalar el valor asignado para que el capital quede claro. Error común: tratarlo como préstamo o renta, que serían contratos distintos donde el bien no forma parte del capital.",
      "Contributing an asset instead of money is an in-kind contribution: the oven becomes the company's property and Carlos receives shares. The articles must describe it and state the assigned value so capital is clear. Common mistake: treating it as a loan or rent, which would be different contracts where the asset is not part of capital.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'company-formation',
  },

  // ═════════════════════════ DER-06 ═════════════════════════
  {
    id: 'DER-06-E1',
    level: 2,
    module: 'DER-06',
    kind: 'mcq',
    flavor: 'concept',
    prompt: t(
      "¿Cuáles son los dos elementos sin los cuales un contrato ni siquiera existe?",
      "What are the two elements without which a contract does not even exist?",
    ),
    options: [
      { id: 'DER-06-E1-a', text: t("Consentimiento y objeto", "Consent and object") },
      { id: 'DER-06-E1-b', text: t("Firma ante notario y testigos", "Signature before a notary and witnesses") },
      { id: 'DER-06-E1-c', text: t("Precio alto y plazo largo", "High price and long term") },
      { id: 'DER-06-E1-d', text: t("Factura y comprobante de pago", "Invoice and proof of payment") },
    ],
    correctOptionId: 'DER-06-E1-a',
    explanation: t(
      "Sin acuerdo de voluntades (consentimiento) y sin algo posible que dar, hacer o no hacer (objeto), no hay contrato. La forma, como la firma ante notario, solo es requisito de validez cuando la ley la exige. Error común: pensar que todo contrato necesita notario para existir; en lo mercantil, por regla general, no se exigen formalidades especiales.",
      "Without a meeting of minds (consent) and without something possible to give, do or not do (object), there is no contract. Form, such as signing before a notary, is only a validity requirement when the law demands it. Common mistake: thinking every contract needs a notary to exist; in commercial matters, as a general rule, no special formalities are required.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'commercial-contracts',
  },
  {
    id: 'DER-06-E2',
    level: 2,
    module: 'DER-06',
    kind: 'classify',
    flavor: 'concept',
    prompt: t(
      "Clasifica cada situación según el contrato mercantil que describe.",
      "Classify each situation by the commercial contract it describes.",
    ),
    categories: [
      { id: 'DER-06-E2-c1', label: t("Compraventa mercantil", "Commercial sale") },
      { id: 'DER-06-E2-c2', label: t("Suministro", "Supply") },
      { id: 'DER-06-E2-c3', label: t("Comisión mercantil", "Commercial agency (comisión)") },
      { id: 'DER-06-E2-c4', label: t("Arrendamiento financiero", "Financial leasing") },
    ],
    items: [
      { id: 'DER-06-E2-i1', label: t("Una tienda compra de una vez 200 cajas de refresco para revender", "A store buys 200 cases of soda in a single purchase to resell"), correctCategoryId: 'DER-06-E2-c1' },
      { id: 'DER-06-E2-i2', label: t("Un restaurante recibe gas cada semana durante un año a precio pactado", "A restaurant receives gas every week for a year at an agreed price"), correctCategoryId: 'DER-06-E2-c2' },
      { id: 'DER-06-E2-i3', label: t("Un agente vende productos por cuenta de una fábrica a cambio de un porcentaje", "An agent sells products on behalf of a factory in exchange for a percentage"), correctCategoryId: 'DER-06-E2-c3' },
      { id: 'DER-06-E2-i4', label: t("Una empresa usa un camión que compró una arrendadora, paga mensualidades y al final puede comprarlo", "A company uses a truck bought by a leasing firm, pays monthly and can buy it at the end"), correctCategoryId: 'DER-06-E2-c4' },
      { id: 'DER-06-E2-i5', label: t("Una panadería recibe harina cada lunes durante seis meses", "A bakery receives flour every Monday for six months"), correctCategoryId: 'DER-06-E2-c2' },
    ],
    explanation: t(
      "Compraventa: una entrega a cambio de un precio. Suministro: entregas periódicas durante un plazo. Comisión: alguien actúa por cuenta de otro a cambio de una comisión. Arrendamiento financiero: usas un bien de la arrendadora con pagos periódicos y opción de compra. Error común: llamar compraventa a las entregas periódicas; cuando la relación es continua, es suministro.",
      "Sale: one delivery in exchange for a price. Supply: periodic deliveries over a term. Agency: someone acts on behalf of another for a commission. Financial leasing: you use the leasing firm's asset with periodic payments and a purchase option. Common mistake: calling periodic deliveries a sale; when the relationship is ongoing, it is supply.",
    ),
    difficulty: 1,
    points: 15,
    competency: 'commercial-contracts',
  },
  {
    id: 'DER-06-E3',
    level: 2,
    module: 'DER-06',
    kind: 'numeric',
    flavor: 'case',
    context: t(
      "Un contrato de compraventa de equipo de oficina vale $400,000. Pacta una pena convencional de 0.5% del valor del contrato por cada día de retraso en la entrega, con tope igual al valor del contrato. El vendedor entrega 12 días tarde. (Cifras hipotéticas.)",
      "A contract for the sale of office equipment is worth $400,000. It sets a penalty of 0.5% of the contract value for each day of late delivery, capped at the contract value. The seller delivers 12 days late. (Hypothetical figures.)",
    ),
    prompt: t(
      "¿Cuánto es la pena convencional que corresponde por el retraso?",
      "How much is the contractual penalty owed for the delay?",
    ),
    answer: 24000,
    unit: 'MXN',
    decimals: 0,
    tolerance: { abs: 0.5 },
    explanation: t(
      "Pena diaria = 400,000 × 0.005 = $2,000. Por 12 días: 2,000 × 12 = $24,000, muy por debajo del tope de $400,000. Error común: usar 5% en lugar de 0.5% (lo que daría $240,000) o calcular un solo día.",
      "Daily penalty = 400,000 × 0.005 = $2,000. For 12 days: 2,000 × 12 = $24,000, well below the $400,000 cap. Common mistake: using 5% instead of 0.5% (which would give $240,000) or computing a single day.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'commercial-contracts',
  },
  {
    id: 'DER-06-E4',
    level: 2,
    module: 'DER-06',
    kind: 'truefalse',
    flavor: 'concept',
    prompt: t(
      "En los contratos mercantiles, por regla general, cada parte se obliga en los términos en que quiso obligarse y la validez no depende de formalidades especiales, salvo que la ley exija alguna.",
      "In commercial contracts, as a general rule, each party is bound on the terms it intended and validity does not depend on special formalities, unless the law requires one.",
    ),
    answer: true,
    explanation: t(
      "Verdadero. El derecho mercantil busca rapidez, por eso no exige formas especiales salvo en los casos que la ley señala. Aun así, conviene tenerlo por escrito: es la mejor prueba de lo acordado. Error común: concluir que un acuerdo verbal no obliga; sí obliga, aunque probarlo es más difícil.",
      "True. Commercial law seeks speed, so it does not require special forms except where the law says so. Even so, it is wise to have it in writing: it is the best proof of what was agreed. Common mistake: concluding that a verbal agreement is not binding; it is, although proving it is harder.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'commercial-contracts',
  },
  {
    id: 'DER-06-E5',
    level: 2,
    module: 'DER-06',
    kind: 'multi',
    flavor: 'concept',
    prompt: t(
      "¿Cuáles son vicios del consentimiento que pueden afectar la validez de un contrato? Selecciona todos los que apliquen.",
      "Which are defects of consent that can affect a contract's validity? Select all that apply.",
    ),
    options: [
      { id: 'DER-06-E5-a', text: t("Error: una parte firmó creyendo algo equivocado sobre lo esencial", "Mistake: a party signed believing something wrong about an essential point") },
      { id: 'DER-06-E5-b', text: t("Dolo: una parte engañó a la otra para que firmara", "Fraud: one party deceived the other into signing") },
      { id: 'DER-06-E5-c', text: t("Violencia: una parte firmó bajo amenazas", "Duress: one party signed under threats") },
      { id: 'DER-06-E5-d', text: t("Que el contrato se haya firmado un domingo", "That the contract was signed on a Sunday") },
      { id: 'DER-06-E5-e', text: t("Que una parte después se arrepienta del trato", "That one party later regrets the deal") },
    ],
    correctOptionIds: ['DER-06-E5-a', 'DER-06-E5-b', 'DER-06-E5-c'],
    explanation: t(
      "El consentimiento debe ser libre e informado; el error, el dolo y la violencia lo vician y pueden llevar a anular el contrato. El día de la firma no importa, y arrepentirse después no es un vicio: lo pactado obliga. Error común: creer que basta con arrepentirse para deshacer un contrato.",
      "Consent must be free and informed; mistake, fraud and duress taint it and can lead to the contract being annulled. The signing day does not matter, and regretting it later is not a defect: what was agreed is binding. Common mistake: believing regret alone is enough to undo a contract.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'commercial-contracts',
  },
  {
    id: 'DER-06-E6',
    level: 2,
    module: 'DER-06',
    kind: 'mcq',
    flavor: 'case',
    context: t(
      "Una empresa de Monterrey firma un contrato de distribución con un proveedor de Guadalajara. El contrato no dice qué tribunales ni qué mecanismo resolverán un posible desacuerdo.",
      "A Monterrey company signs a distribution contract with a Guadalajara supplier. The contract does not say which courts or mechanism will resolve a possible disagreement.",
    ),
    prompt: t(
      "¿Qué cláusula conviene agregar para saber de antemano dónde y cómo se resolverá un conflicto?",
      "Which clause should be added to know in advance where and how a dispute will be resolved?",
    ),
    options: [
      { id: 'DER-06-E6-a', text: t("Cláusula de confidencialidad", "Confidentiality clause") },
      { id: 'DER-06-E6-b', text: t("Cláusula de jurisdicción (o de arbitraje) y ley aplicable", "Jurisdiction (or arbitration) and governing law clause") },
      { id: 'DER-06-E6-c', text: t("Cláusula de precio y forma de pago", "Price and payment terms clause") },
      { id: 'DER-06-E6-d', text: t("Cláusula de vigencia del contrato", "Contract term clause") },
    ],
    correctOptionId: 'DER-06-E6-b',
    explanation: t(
      "La cláusula de jurisdicción fija qué tribunales conocerán de un conflicto (o, si se pacta arbitraje, quién lo resolverá) y qué ley se aplica. Evita discusiones costosas sobre dónde demandar. La confidencialidad, el precio y la vigencia son importantes, pero no responden esa pregunta. Error común: dejar este punto en blanco por pensar que \"nunca habrá problemas\".",
      "The jurisdiction clause sets which courts will hear a dispute (or, if arbitration is agreed, who will resolve it) and which law applies. It avoids costly arguments about where to sue. Confidentiality, price and term are important but do not answer that question. Common mistake: leaving this point blank thinking \"there will never be problems\".",
    ),
    difficulty: 1,
    points: 10,
    competency: 'commercial-contracts',
  },
]
