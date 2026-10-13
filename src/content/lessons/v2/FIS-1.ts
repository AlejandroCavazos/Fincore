import type { Exercise, Lesson } from '../../../types'

/**
 * FINCORE — Temario v2.0, área Fiscalidad y Tributación (México), parte 1 (Básico).
 * FIS-01 a FIS-06: fundamentos, SAT, CFF, ISR, LISR e IVA.
 */

const t = (es: string, en: string) => ({ es, en })

export const lessons: Lesson[] = [
  // ───────────────────────────── FIS-01 ─────────────────────────────
  {
    id: 'FIS-01',
    level: 5,
    topicIds: ['FIS.1'],
    title: t("Fundamentos del sistema tributario mexicano", "Foundations of the Mexican tax system"),
    summary: t(
      "En México todos contribuimos al gasto público mediante impuestos, aportaciones de seguridad social, contribuciones de mejoras y derechos, que cobran la Federación, los estados y los municipios según lo que dicen las leyes.",
      "In Mexico we all contribute to public spending through taxes, social security contributions, improvement contributions and fees, collected by the Federation, the states and the municipalities according to the law.",
    ),
    minutes: 14,
    objectives: [
      t("Explicar por qué existe la obligación de pagar contribuciones y qué principios la limitan.", "Explain why the obligation to pay contributions exists and which principles limit it."),
      t("Distinguir los cuatro tipos de contribuciones: impuestos, aportaciones de seguridad social, contribuciones de mejoras y derechos.", "Distinguish the four types of contributions: taxes, social security contributions, improvement contributions and fees."),
      t("Identificar los elementos de un impuesto (sujeto, objeto, base, tasa y época de pago) y qué nivel de gobierno lo cobra.", "Identify the elements of a tax (subject, object, base, rate and payment period) and which level of government collects it."),
    ],
    theory: [
      {
        heading: t("¿Por qué pagamos impuestos?", "Why do we pay taxes?"),
        body: [
          t(
            "Las calles, las escuelas públicas, los hospitales y la seguridad cuestan dinero. El gobierno obtiene la mayor parte de ese dinero de las **contribuciones**: pagos obligatorios que hacemos personas y empresas. Al conjunto de leyes, autoridades y contribuciones se le llama **sistema tributario**.",
            "Streets, public schools, hospitals and security cost money. The government gets most of that money from **contributions**: mandatory payments made by people and companies. The set of laws, authorities and contributions is called the **tax system**.",
          ),
          t(
            "La base está en la **Constitución** (artículo 31, fracción IV): los mexicanos deben contribuir a los gastos públicos de la Federación, del estado y del municipio donde viven, de forma **proporcional y equitativa** como lo digan las leyes.",
            "The foundation is in the **Constitution** (article 31, section IV): Mexicans must contribute to the public expenses of the Federation, the state and the municipality where they live, in a **proportional and equitable** way as the laws provide.",
          ),
          t(
            "Mini ejemplo: el municipio de tu ciudad usa lo que cobra de predial para arreglar baches y pagar el alumbrado de tu colonia.",
            "Mini example: your city's municipality uses what it collects in property tax to fix potholes and pay for street lighting in your neighborhood.",
          ),
        ],
        bullets: [
          t("**Legalidad**: solo se cobra una contribución si una ley la establece; ninguna autoridad la puede inventar.", "**Legality**: a contribution can only be charged if a law establishes it; no authority can make it up."),
          t("**Proporcionalidad**: quien tiene más capacidad económica aporta más.", "**Proportionality**: whoever has more economic capacity contributes more."),
          t("**Equidad**: personas en la misma situación reciben el mismo trato.", "**Equity**: people in the same situation receive the same treatment."),
          t("**Gasto público**: lo recaudado debe destinarse a necesidades colectivas.", "**Public spending**: what is collected must go to collective needs."),
        ],
      },
      {
        heading: t("Los cuatro tipos de contribuciones", "The four types of contributions"),
        body: [
          t(
            "El Código Fiscal de la Federación clasifica las contribuciones en cuatro tipos. Los **impuestos** se pagan por estar en una situación que la ley señala (ganar dinero, comprar algo), sin recibir algo directo a cambio. Las **aportaciones de seguridad social** son las cuotas al IMSS o al INFONAVIT, que financian servicios de seguridad social.",
            "The Federal Tax Code classifies contributions into four types. **Taxes** are paid for being in a situation the law sets out (earning money, buying something), without getting something direct in return. **Social security contributions** are the payments to IMSS or INFONAVIT, which fund social security services.",
          ),
          t(
            "Las **contribuciones de mejoras** las pagas cuando una obra pública te beneficia directamente, como la pavimentación de tu calle. Los **derechos** son lo que pagas por un servicio del gobierno o por usar un bien público: sacar tu pasaporte, el servicio de agua potable o una copia certificada de tu acta.",
            "**Improvement contributions** are paid when a public work benefits you directly, such as paving your street. **Fees** (derechos) are what you pay for a government service or for using a public asset: getting your passport, drinking water service or a certified copy of your birth certificate.",
          ),
          t(
            "Si pagas tarde aparecen los **accesorios**: recargos y multas, entre otros. No son una contribución nueva; siguen a la que debías.",
            "If you pay late, **accessories** appear: surcharges and fines, among others. They are not a new contribution; they follow the one you owed.",
          ),
          t(
            "Mini ejemplo: en un mes, Rosa paga ISR (impuesto), su cuota del IMSS (aportación de seguridad social) y el trámite de su pasaporte (derecho).",
            "Mini example: in one month, Rosa pays income tax (tax), her IMSS payment (social security contribution) and her passport fee (fee).",
          ),
        ],
      },
      {
        heading: t("Elementos del impuesto y niveles de gobierno", "Elements of a tax and levels of government"),
        body: [
          t(
            "Todo impuesto tiene cinco piezas. El **sujeto** es quien paga. El **objeto** es lo que se grava (el ingreso, el consumo, la propiedad). La **base** es la cantidad sobre la que se calcula. La **tasa o tarifa** es el porcentaje o la tabla que se aplica. La **época de pago** es cuándo se entrega.",
            "Every tax has five pieces. The **subject** is who pays. The **object** is what is taxed (income, consumption, property). The **base** is the amount on which it is computed. The **rate or schedule** is the percentage or table applied. The **payment period** is when it is paid.",
          ),
          t(
            "Hay tres niveles de gobierno que cobran. La **Federación** cobra, por ejemplo, ISR, IVA e IEPS. Los **estados** cobran impuestos como el impuesto sobre nóminas. Los **municipios** cobran el predial. También se distinguen impuestos **directos** (los paga quien obtiene el ingreso, como el ISR) e **indirectos** (se trasladan en el precio al consumidor, como el IVA).",
            "Three levels of government collect. The **Federation** collects, for example, income tax (ISR), VAT (IVA) and the special tax on production and services (IEPS). The **states** collect taxes such as the payroll tax. The **municipalities** collect property tax (predial). Taxes are also classed as **direct** (paid by whoever earns the income, like ISR) or **indirect** (passed on to the consumer in the price, like VAT).",
          ),
          t(
            "Mini ejemplo con números hipotéticos: si la base es $50,000 y la tasa 2 %, el impuesto es 50,000 × 0.02 = $1,000.",
            "Mini example with hypothetical numbers: if the base is $50,000 and the rate is 2 %, the tax is 50,000 × 0.02 = $1,000.",
          ),
        ],
        formula: "Impuesto / Tax = Base × Tasa / Rate",
      },
    ],
    examples: [
      {
        title: t("Los elementos del predial", "The elements of property tax"),
        problem: t(
          "Don Ernesto es dueño de una casa con valor catastral de $800,000. Supón que su municipio aplica una tasa hipotética de 0.2 % anual. Identifica los elementos y calcula el impuesto.",
          "Don Ernesto owns a house with an assessed (cadastral) value of $800,000. Suppose his municipality applies a hypothetical rate of 0.2 % a year. Identify the elements and compute the tax.",
        ),
        steps: [
          t("Sujeto: Don Ernesto, el propietario.", "Subject: Don Ernesto, the owner."),
          t("Objeto: la propiedad de la casa.", "Object: ownership of the house."),
          t("Base: el valor catastral, $800,000.", "Base: the assessed value, $800,000."),
          t("Tasa: 0.2 % → 800,000 × 0.002 = $1,600.", "Rate: 0.2 % → 800,000 × 0.002 = $1,600."),
          t("Época de pago: una vez al año (muchos municipios dan descuento si pagas al inicio del año).", "Payment period: once a year (many municipalities give a discount if you pay early in the year)."),
        ],
        result: t("Predial anual = $1,600, pagado al municipio.", "Annual property tax = $1,600, paid to the municipality."),
      },
      {
        title: t("Clasificar los pagos de una familia", "Classifying a family's payments"),
        problem: t(
          "La familia López hizo estos pagos: ISR retenido de su sueldo, cuota obrera del IMSS, pasaporte, cooperación por pavimentar su calle y predial. Clasifícalos.",
          "The López family made these payments: income tax withheld from salary, the worker's IMSS payment, a passport, a contribution to pave their street and property tax. Classify them.",
        ),
        steps: [
          t("ISR retenido → impuesto federal.", "Withheld income tax → federal tax."),
          t("Cuota obrera del IMSS → aportación de seguridad social.", "Worker's IMSS payment → social security contribution."),
          t("Pasaporte → derecho (pago por un servicio del gobierno).", "Passport → fee (payment for a government service)."),
          t("Pavimentación → contribución de mejoras (obra que los beneficia directamente).", "Paving → improvement contribution (a work that benefits them directly)."),
          t("Predial → impuesto municipal.", "Property tax → municipal tax."),
        ],
        result: t("Dos impuestos, una aportación de seguridad social, un derecho y una contribución de mejoras.", "Two taxes, one social security contribution, one fee and one improvement contribution."),
      },
    ],
    keyPoints: [
      t("La obligación de contribuir nace en la Constitución y debe ser proporcional, equitativa y establecida en ley.", "The obligation to contribute comes from the Constitution and must be proportional, equitable and set by law."),
      t("Hay cuatro contribuciones: impuestos, aportaciones de seguridad social, contribuciones de mejoras y derechos.", "There are four contributions: taxes, social security contributions, improvement contributions and fees."),
      t("Recargos y multas son accesorios: aparecen cuando no cumples a tiempo.", "Surcharges and fines are accessories: they appear when you do not comply on time."),
      t("Todo impuesto tiene sujeto, objeto, base, tasa o tarifa y época de pago.", "Every tax has a subject, object, base, rate or schedule and payment period."),
      t("Federación, estados y municipios cobran contribuciones distintas.", "The Federation, states and municipalities collect different contributions."),
    ],
    normativeNote: t(
      "Contenido educativo basado en la Constitución Política de los Estados Unidos Mexicanos y en el Código Fiscal de la Federación. Los impuestos estatales y municipales, sus tasas y descuentos varían por entidad y cambian con el tiempo; las tasas de los ejemplos son hipotéticas. Verifica la versión vigente (2026).",
      "Educational content based on the Mexican Constitution and the Federal Tax Code. State and municipal taxes, their rates and discounts vary by state and change over time; the rates in the examples are hypothetical. Verify the current version (2026).",
    ),
    exerciseIds: ['FIS-01-E1', 'FIS-01-E2', 'FIS-01-E3', 'FIS-01-E4', 'FIS-01-E5', 'FIS-01-E6'],
  },

  // ───────────────────────────── FIS-02 ─────────────────────────────
  {
    id: 'FIS-02',
    level: 5,
    topicIds: ['FIS.2'],
    title: t("Introducción al Servicio de Administración Tributaria (SAT)", "Introduction to the Tax Administration Service (SAT)"),
    summary: t(
      "El SAT es la autoridad que recauda y vigila los impuestos federales; para tratar con él necesitas tu RFC, tu Contraseña o e.firma y tu buzón tributario.",
      "The SAT is the authority that collects and oversees federal taxes; to deal with it you need your RFC, your Password or e.firma and your tax mailbox.",
    ),
    minutes: 13,
    objectives: [
      t("Describir qué es el SAT, qué hace y qué contribuciones no le corresponden.", "Describe what the SAT is, what it does and which contributions are not its responsibility."),
      t("Explicar cómo se forma el RFC y para qué sirve la Constancia de situación fiscal.", "Explain how the RFC is built and what the Tax Status Certificate is for."),
      t("Distinguir la Contraseña, la e.firma, el buzón tributario y la opinión de cumplimiento.", "Distinguish the Password, the e.firma, the tax mailbox and the compliance opinion."),
    ],
    theory: [
      {
        heading: t("¿Qué es el SAT y qué hace?", "What is the SAT and what does it do?"),
        body: [
          t(
            "El **Servicio de Administración Tributaria (SAT)** es un **órgano desconcentrado** de la Secretaría de Hacienda y Crédito Público (SHCP). \"Desconcentrado\" significa que depende de Hacienda, pero tiene cierta autonomía técnica para operar.",
            "The **Tax Administration Service (SAT)** is a **deconcentrated body** of the Ministry of Finance and Public Credit (SHCP). \"Deconcentrated\" means it depends on the Ministry of Finance but has some technical autonomy to operate.",
          ),
          t(
            "Su trabajo es **recaudar** los impuestos federales (como ISR, IVA e IEPS), **fiscalizar** que se paguen bien (revisiones, auditorías) y **asistir** a los contribuyentes para que cumplan: orientación, portal en internet, citas y aplicaciones.",
            "Its job is to **collect** federal taxes (such as ISR, VAT and IEPS), **audit** that they are paid correctly (reviews, audits) and **assist** taxpayers to comply: guidance, a web portal, appointments and apps.",
          ),
          t(
            "Ojo: el SAT **no** cobra el predial (lo cobra tu municipio) ni las cuotas del IMSS (las cobra el propio IMSS). Mini ejemplo: si debes tu predial, no lo arreglas en el SAT sino en la tesorería municipal.",
            "Careful: the SAT does **not** collect property tax (your municipality does) or IMSS payments (IMSS itself does). Mini example: if you owe property tax, you do not settle it at the SAT but at the municipal treasury.",
          ),
        ],
      },
      {
        heading: t("El RFC y la Constancia de situación fiscal", "The RFC and the Tax Status Certificate"),
        body: [
          t(
            "El **Registro Federal de Contribuyentes (RFC)** es tu clave ante el SAT, como una \"matrícula\" fiscal. Para una **persona física** (tú, como individuo) tiene **13 caracteres**; para una **persona moral** (una empresa o asociación) tiene **12**.",
            "The **Federal Taxpayer Registry (RFC)** is your key with the SAT, like a tax \"ID number\". For an **individual** (you, as a person) it has **13 characters**; for a **legal entity** (a company or association) it has **12**.",
          ),
          t(
            "En persona física: 4 letras (inicial y primera vocal interna del primer apellido, inicial del segundo apellido, inicial del nombre), 6 dígitos de la fecha de nacimiento (AAMMDD) y 3 caracteres de **homoclave**, que asigna el SAT para evitar claves repetidas.",
            "For an individual: 4 letters (initial and first internal vowel of the first surname, initial of the second surname, initial of the first name), 6 digits of the date of birth (YYMMDD) and a 3-character **homoclave**, assigned by the SAT to avoid duplicate keys.",
          ),
          t(
            "La **Constancia de situación fiscal** es el documento que muestra tu RFC, nombre, domicilio fiscal, régimen y obligaciones. Te la piden para facturarte o para darte de alta en un trabajo. Mini ejemplo: un cliente te pide tu constancia para emitir correctamente tu factura.",
            "The **Tax Status Certificate** (Constancia de situación fiscal) shows your RFC, name, tax address, regime and obligations. People ask for it to invoice you or to register you at a job. Mini example: a client asks for your certificate to issue your invoice correctly.",
          ),
        ],
      },
      {
        heading: t("Tus herramientas para tratar con el SAT", "Your tools for dealing with the SAT"),
        body: [
          t(
            "La **Contraseña** (antes CIEC) es una clave para entrar al portal del SAT y hacer muchos trámites. La **e.firma** (antes FIEL) es un certificado digital con archivos .cer y .key más una contraseña de clave privada: tiene la misma validez que tu firma autógrafa y caduca, así que hay que renovarla.",
            "The **Password** (Contraseña, formerly CIEC) is a key to log into the SAT portal and do many procedures. The **e.firma** (formerly FIEL) is a digital certificate with .cer and .key files plus a private-key password: it has the same validity as your handwritten signature and it expires, so it must be renewed.",
          ),
          t(
            "El **buzón tributario** es el canal oficial de comunicación: ahí el SAT te notifica y te avisa, y tú puedes enviar promociones. Debes registrar un correo y un teléfono para recibir alertas. La **opinión de cumplimiento** dice si estás al corriente (positiva) o no (negativa); la piden gobiernos y empresas antes de contratar contigo.",
            "The **tax mailbox** (buzón tributario) is the official communication channel: the SAT notifies and alerts you there, and you can submit filings. You must register an email and a phone to get alerts. The **compliance opinion** says whether you are up to date (positive) or not (negative); governments and companies ask for it before contracting with you.",
          ),
          t(
            "Mini ejemplo: Laura, diseñadora, entra con su Contraseña a descargar su constancia; para firmar una solicitud usa su e.firma; y revisa su buzón cada semana.",
            "Mini example: Laura, a designer, logs in with her Password to download her certificate; to sign a request she uses her e.firma; and she checks her mailbox every week.",
          ),
        ],
        bullets: [
          t("RFC: tu clave de contribuyente.", "RFC: your taxpayer key."),
          t("Contraseña: acceso al portal.", "Password: portal access."),
          t("e.firma: firma electrónica con validez legal.", "e.firma: electronic signature with legal validity."),
          t("Buzón tributario: notificaciones oficiales.", "Tax mailbox: official notices."),
          t("Opinión de cumplimiento: prueba de que estás al corriente.", "Compliance opinion: proof that you are up to date."),
        ],
      },
    ],
    examples: [
      {
        title: t("Las primeras 10 posiciones de un RFC", "The first 10 positions of an RFC"),
        problem: t(
          "Pedro Ramírez Luna nació el 3 de noviembre de 1985. Arma las primeras 10 posiciones de su RFC (sin homoclave).",
          "Pedro Ramírez Luna was born on November 3, 1985. Build the first 10 positions of his RFC (without the homoclave).",
        ),
        steps: [
          t("Primer apellido Ramírez: inicial R y primera vocal interna A → RA.", "First surname Ramírez: initial R and first internal vowel A → RA."),
          t("Segundo apellido Luna: inicial L → RAL.", "Second surname Luna: initial L → RAL."),
          t("Nombre Pedro: inicial P → RALP.", "First name Pedro: initial P → RALP."),
          t("Fecha AAMMDD: 85, 11, 03 → 851103.", "Date YYMMDD: 85, 11, 03 → 851103."),
          t("La homoclave de 3 caracteres la asigna el SAT.", "The 3-character homoclave is assigned by the SAT."),
        ],
        result: t("RALP851103 + homoclave = 13 caracteres.", "RALP851103 + homoclave = 13 characters."),
      },
      {
        title: t("¿Qué herramienta uso?", "Which tool do I use?"),
        problem: t(
          "Mario abrió un taller y quiere venderle a una dependencia de gobierno. Le piden documento que pruebe que está al corriente, y además tiene que firmar electrónicamente un trámite. ¿Qué necesita?",
          "Mario opened a workshop and wants to sell to a government agency. They ask for a document proving he is up to date, and he also must sign a procedure electronically. What does he need?",
        ),
        steps: [
          t("Para probar que está al corriente → opinión de cumplimiento positiva.", "To prove he is up to date → a positive compliance opinion."),
          t("Para firmar con validez legal → e.firma vigente.", "To sign with legal validity → a valid e.firma."),
          t("Para recibir avisos del SAT sobre su situación → buzón tributario con correo y teléfono registrados.", "To receive SAT notices about his status → tax mailbox with email and phone registered."),
        ],
        result: t("Opinión de cumplimiento positiva, e.firma vigente y buzón tributario activo.", "Positive compliance opinion, valid e.firma and active tax mailbox."),
      },
    ],
    keyPoints: [
      t("El SAT es un órgano desconcentrado de la SHCP que recauda, fiscaliza y asiste en impuestos federales.", "The SAT is a deconcentrated body of the SHCP that collects, audits and assists with federal taxes."),
      t("Predial y cuotas del IMSS no los cobra el SAT.", "Property tax and IMSS payments are not collected by the SAT."),
      t("RFC: 13 caracteres para personas físicas y 12 para personas morales; la homoclave la asigna el SAT.", "RFC: 13 characters for individuals and 12 for legal entities; the homoclave is assigned by the SAT."),
      t("La e.firma equivale a tu firma autógrafa y caduca: renuévala a tiempo.", "The e.firma is equivalent to your handwritten signature and expires: renew it in time."),
      t("Revisa tu buzón tributario: es el canal oficial por el que el SAT te notifica.", "Check your tax mailbox: it is the official channel the SAT uses to notify you."),
    ],
    normativeNote: t(
      "Contenido educativo. Los nombres de trámites, la vigencia de la e.firma, los requisitos para obtenerla y las funciones del portal del SAT cambian con el tiempo; los datos de los ejemplos son ficticios. Verifica la información vigente (2026) en los canales oficiales del SAT.",
      "Educational content. Procedure names, the e.firma's validity period, the requirements to obtain it and the SAT portal's features change over time; the data in the examples is fictitious. Verify current information (2026) through the SAT's official channels.",
    ),
    exerciseIds: ['FIS-02-E1', 'FIS-02-E2', 'FIS-02-E3', 'FIS-02-E4', 'FIS-02-E5', 'FIS-02-E6'],
  },

  // ───────────────────────────── FIS-03 ─────────────────────────────
  {
    id: 'FIS-03',
    level: 5,
    topicIds: ['FIS.3'],
    title: t("Código Fiscal de la Federación (CFF)", "Federal Tax Code (CFF)"),
    summary: t(
      "El CFF es la ley de reglas comunes para todos los impuestos federales: cómo registrarte, plazos, qué pasa si pagas tarde y cómo defenderte.",
      "The CFF is the law of common rules for all federal taxes: how to register, deadlines, what happens if you pay late and how to defend yourself.",
    ),
    minutes: 15,
    objectives: [
      t("Explicar el papel del CFF frente a las leyes de cada impuesto.", "Explain the role of the CFF compared with the laws of each tax."),
      t("Enumerar las obligaciones básicas que marca el CFF y cómo se cuentan los plazos.", "List the basic obligations set by the CFF and how deadlines are counted."),
      t("Calcular la actualización y los recargos de un pago tardío con datos hipotéticos.", "Compute the inflation adjustment and surcharges on a late payment with hypothetical data."),
      t("Reconocer tus derechos como contribuyente y los medios básicos de defensa.", "Recognize your rights as a taxpayer and the basic means of defense."),
    ],
    theory: [
      {
        heading: t("La ley de reglas comunes", "The law of common rules"),
        body: [
          t(
            "Cada impuesto tiene su propia ley: la Ley del ISR dice quién paga ISR y cuánto; la Ley del IVA hace lo mismo con el IVA. Pero hay reglas que sirven para **todos**: cómo inscribirte, cómo se notifica, cuándo vence un plazo, qué pasa si no pagas. Esas reglas están en el **Código Fiscal de la Federación (CFF)**.",
            "Each tax has its own law: the Income Tax Law says who pays ISR and how much; the VAT Law does the same for VAT. But some rules apply to **all** of them: how to register, how notices are served, when a deadline expires, what happens if you do not pay. Those rules are in the **Federal Tax Code (CFF)**.",
          ),
          t(
            "Piensa en el CFF como el **reglamento general de una escuela**, y en cada ley de impuesto como el reglamento de una materia. Si la ley del impuesto no dice algo de procedimiento, normalmente se acude al CFF.",
            "Think of the CFF as a **school's general rulebook**, and each tax law as the rules for one subject. If the tax law says nothing about a procedure, you usually turn to the CFF.",
          ),
          t(
            "Una regla clave: las normas que imponen cargas (quién paga, qué se grava, la base y la tasa) se aplican de forma **estricta**, sin ampliarlas por analogía. Mini ejemplo: si la ley grava \"la venta de bienes\", la autoridad no puede extenderla a algo que la ley no menciona solo porque se parece.",
            "A key rule: provisions that impose burdens (who pays, what is taxed, the base and the rate) are applied **strictly**, without extending them by analogy. Mini example: if the law taxes \"the sale of goods\", the authority cannot extend it to something the law does not mention just because it is similar.",
          ),
        ],
      },
      {
        heading: t("Obligaciones básicas y plazos", "Basic obligations and deadlines"),
        body: [
          t(
            "El CFF establece obligaciones que casi todo contribuyente tiene. Además de pagar, debes cumplir **obligaciones formales**: trámites y registros que permiten al SAT saber quién eres y qué haces.",
            "The CFF sets obligations that almost every taxpayer has. Besides paying, you must meet **formal obligations**: procedures and records that let the SAT know who you are and what you do.",
          ),
          t(
            "Sobre los **plazos**: cuando se fijan en días, por regla general cuentan solo los **días hábiles** (no fines de semana ni días festivos oficiales). Si un plazo vence en un día inhábil, se recorre al siguiente día hábil.",
            "About **deadlines**: when they are set in days, as a general rule only **business days** count (not weekends or official holidays). If a deadline falls on a non-business day, it moves to the next business day.",
          ),
          t(
            "Mini ejemplo: los pagos mensuales de muchos impuestos vencen el día 17 del mes siguiente. Si el 17 cae en domingo, puedes pagar el lunes 18 sin atraso.",
            "Mini example: monthly payments of many taxes are due on the 17th of the following month. If the 17th falls on a Sunday, you can pay on Monday the 18th without being late.",
          ),
        ],
        bullets: [
          t("Inscribirte en el RFC y avisar cambios (domicilio, actividades).", "Register in the RFC and report changes (address, activities)."),
          t("Llevar contabilidad cuando la ley te lo pida.", "Keep accounting records when the law requires it."),
          t("Emitir y pedir comprobantes fiscales (CFDI).", "Issue and request tax receipts (CFDI)."),
          t("Presentar declaraciones en tiempo.", "File returns on time."),
          t("Conservar tu documentación el plazo legal (por regla general, cinco años).", "Keep your records for the legal period (as a general rule, five years)."),
        ],
      },
      {
        heading: t("Pagos tardíos, derechos y defensa", "Late payments, rights and defense"),
        body: [
          t(
            "Si pagas tarde, el monto se **actualiza** por inflación: se multiplica por un **factor de actualización** que sale del Índice Nacional de Precios al Consumidor (INPC). Así el gobierno recibe el mismo poder de compra que debió recibir.",
            "If you pay late, the amount is **adjusted** for inflation: it is multiplied by an **adjustment factor** derived from the National Consumer Price Index (INPC). That way the government receives the same purchasing power it should have received.",
          ),
          t(
            "Además pagas **recargos**, una especie de interés por no entregar el dinero a tiempo. Se calculan sobre la **contribución ya actualizada**, por cada mes o fracción de atraso. Y puede haber **multas**; pero si corriges **de forma espontánea**, antes de que el SAT te lo pida, por regla general no te multan.",
            "You also pay **surcharges**, a kind of interest for not handing over the money on time. They are computed on the **already adjusted contribution**, for each month or fraction of delay. There may also be **fines**; but if you correct **voluntarily**, before the SAT asks you to, as a general rule you are not fined.",
          ),
          t(
            "Tú también tienes **derechos**: recibir orientación gratuita, ser tratado con respeto, conocer el estado de tus trámites y defenderte. Puedes acudir a la **PRODECON** (Procuraduría de la Defensa del Contribuyente), presentar un **recurso de revocación** ante el propio SAT o un **juicio** ante el Tribunal Federal de Justicia Administrativa. Mini ejemplo: si te llega un cobro que crees equivocado, puedes impugnarlo dentro del plazo que marca la ley.",
            "You also have **rights**: free guidance, respectful treatment, knowing the status of your procedures and defending yourself. You can go to **PRODECON** (Taxpayer Ombudsman), file an **appeal for revocation** with the SAT itself, or a **lawsuit** before the Federal Court of Administrative Justice. Mini example: if you receive a charge you believe is wrong, you can challenge it within the period set by law.",
          ),
        ],
        formula: "Contribución actualizada = Contribución × Factor · Recargos = Contribución actualizada × tasa mensual × meses",
      },
    ],
    examples: [
      {
        title: t("ISR pagado con 4 meses de atraso", "Income tax paid 4 months late"),
        problem: t(
          "Sofía debía $20,000 de ISR y paga 4 meses tarde. Supón un factor de actualización de 1.0250 y una tasa de recargos hipotética de 1.5 % mensual. ¿Cuánto paga en total?",
          "Sofía owed $20,000 of income tax and pays 4 months late. Assume an adjustment factor of 1.0250 and a hypothetical surcharge rate of 1.5 % a month. How much does she pay in total?",
        ),
        steps: [
          t("Actualización: 20,000 × 1.0250 = $20,500.", "Adjustment: 20,000 × 1.0250 = $20,500."),
          t("Tasa acumulada de recargos: 1.5 % × 4 = 6 %.", "Accumulated surcharge rate: 1.5 % × 4 = 6 %."),
          t("Recargos sobre lo actualizado: 20,500 × 0.06 = $1,230.", "Surcharges on the adjusted amount: 20,500 × 0.06 = $1,230."),
          t("Total: 20,500 + 1,230 = $21,730 (sin multa si pagó de forma espontánea).", "Total: 20,500 + 1,230 = $21,730 (no fine if she paid voluntarily)."),
        ],
        result: t("Sofía paga $21,730: $1,730 más por pagar tarde.", "Sofía pays $21,730: $1,730 more for paying late."),
      },
      {
        title: t("Un plazo que cae en día inhábil", "A deadline that falls on a non-business day"),
        problem: t(
          "El SAT le da a una empresa un plazo que vence el sábado. ¿Hasta cuándo puede cumplir?",
          "The SAT gives a company a deadline that expires on a Saturday. Until when can it comply?",
        ),
        steps: [
          t("Sábado y domingo son días inhábiles.", "Saturday and Sunday are non-business days."),
          t("Cuando el último día es inhábil, el plazo se recorre al siguiente día hábil.", "When the last day is a non-business day, the deadline moves to the next business day."),
          t("Si el lunes no es festivo oficial, ese es el último día.", "If Monday is not an official holiday, that is the last day."),
        ],
        result: t("Puede cumplir hasta el lunes siguiente (si es hábil).", "It can comply until the following Monday (if it is a business day)."),
      },
    ],
    keyPoints: [
      t("El CFF da las reglas comunes; cada ley de impuesto dice qué se grava y cuánto.", "The CFF gives the common rules; each tax law says what is taxed and how much."),
      t("Las normas que imponen cargas se aplican de forma estricta.", "Provisions that impose burdens are applied strictly."),
      t("Los plazos en días cuentan días hábiles; si vencen en inhábil, se recorren.", "Deadlines in days count business days; if they fall on a non-business day, they move forward."),
      t("Pagar tarde cuesta actualización más recargos, y los recargos se calculan sobre lo actualizado.", "Paying late costs the inflation adjustment plus surcharges, and surcharges are computed on the adjusted amount."),
      t("Corregir de forma espontánea, por regla general, evita multas.", "Correcting voluntarily generally avoids fines."),
      t("Tienes derechos y medios de defensa: PRODECON, recurso de revocación y juicio ante el TFJA.", "You have rights and means of defense: PRODECON, appeal for revocation and a lawsuit before the TFJA."),
    ],
    normativeNote: t(
      "Contenido educativo basado en el Código Fiscal de la Federación. La tasa de recargos se fija periódicamente (normalmente en la Ley de Ingresos de la Federación), el INPC lo publica el INEGI y los plazos para conservar documentos o impugnar pueden tener excepciones y cambiar con reformas. Los factores y tasas de los ejemplos son hipotéticos. Verifica la versión vigente (2026).",
      "Educational content based on the Federal Tax Code. The surcharge rate is set periodically (usually in the Federal Revenue Law), the INPC is published by INEGI, and the periods to keep records or challenge acts may have exceptions and change with reforms. The factors and rates in the examples are hypothetical. Verify the current version (2026).",
    ),
    exerciseIds: ['FIS-03-E1', 'FIS-03-E2', 'FIS-03-E3', 'FIS-03-E4', 'FIS-03-E5', 'FIS-03-E6'],
  },

  // ───────────────────────────── FIS-04 ─────────────────────────────
  {
    id: 'FIS-04',
    level: 5,
    topicIds: ['FIS.4'],
    title: t("Impuesto sobre la Renta (ISR)", "Income Tax (ISR)"),
    summary: t(
      "El ISR grava lo que ganas: se calcula sobre tus ingresos menos las deducciones permitidas, con tasa fija para empresas y tarifa progresiva para personas, y se paga por retención, pagos provisionales y declaración anual.",
      "ISR taxes what you earn: it is computed on your income minus allowed deductions, with a flat rate for companies and a progressive schedule for individuals, and it is paid through withholding, provisional payments and the annual return.",
    ),
    minutes: 15,
    objectives: [
      t("Explicar qué grava el ISR y quién lo paga.", "Explain what ISR taxes and who pays it."),
      t("Calcular la base y el impuesto con una tarifa progresiva hipotética, distinguiendo tasa marginal y efectiva.", "Compute the base and the tax with a hypothetical progressive schedule, distinguishing marginal and effective rates."),
      t("Distinguir retención, pago provisional y declaración anual.", "Distinguish withholding, provisional payment and annual return."),
    ],
    theory: [
      {
        heading: t("¿Qué grava el ISR?", "What does ISR tax?"),
        body: [
          t(
            "El **Impuesto sobre la Renta (ISR)** es un impuesto **federal y directo** sobre los **ingresos** que aumentan tu patrimonio: sueldo, honorarios, rentas, ventas de un negocio, intereses, premios, entre otros. Lo pagan las **personas físicas** (individuos) y las **personas morales** (empresas).",
            "**Income Tax (ISR)** is a **federal, direct** tax on **income** that increases your wealth: salary, professional fees, rent, business sales, interest, prizes, among others. It is paid by **individuals** and **legal entities** (companies).",
          ),
          t(
            "Si eres **residente en México**, pagas ISR por tus ingresos de cualquier parte del mundo. Si eres **residente en el extranjero**, pagas en México solo por ingresos cuya fuente está en México.",
            "If you are a **Mexican resident**, you pay ISR on income from anywhere in the world. If you are a **foreign resident**, you pay in Mexico only on income whose source is in Mexico.",
          ),
          t(
            "Mini ejemplo: Ana vive en Monterrey y cobra en dólares por diseñar logos para una empresa de Canadá. Como reside en México, ese ingreso también causa ISR aquí.",
            "Mini example: Ana lives in Monterrey and is paid in dollars to design logos for a Canadian company. Since she resides in Mexico, that income is also subject to ISR here.",
          ),
        ],
      },
      {
        heading: t("Base, tasa fija y tarifa progresiva", "Base, flat rate and progressive schedule"),
        body: [
          t(
            "No se paga sobre todo lo que entra. La **base gravable** es, en general, ingresos menos **deducciones autorizadas** (gastos que la ley permite restar). Algunos ingresos son **exentos**: no pagan, a veces solo hasta un límite.",
            "You do not pay on everything that comes in. The **taxable base** is generally income minus **authorized deductions** (expenses the law lets you subtract). Some income is **exempt**: it is not taxed, sometimes only up to a limit.",
          ),
          t(
            "Las **personas morales** usan, por regla general, una **tasa fija** del 30 %. Las **personas físicas** usan una **tarifa progresiva**: una tabla por renglones. Buscas el renglón de tu base, restas el **límite inferior**, al excedente le aplicas su porcentaje y sumas la **cuota fija** del renglón.",
            "**Legal entities** generally use a **flat rate** of 30 %. **Individuals** use a **progressive schedule**: a table with brackets. You find the bracket for your base, subtract the **lower limit**, apply the bracket's percentage to the excess and add the bracket's **fixed fee**.",
          ),
          t(
            "La **tasa marginal** es el porcentaje que paga tu último peso; la **tasa efectiva** es ISR ÷ base. Mini ejemplo con una tarifa hipotética: base $30,000, límite inferior $25,000, cuota fija $2,500 y 20 % sobre excedente → 2,500 + 5,000 × 0.20 = $3,500. Tasa efectiva: 3,500 ÷ 30,000 ≈ 11.67 %, mucho menor que la marginal de 20 %.",
            "The **marginal rate** is the percentage your last peso pays; the **effective rate** is ISR ÷ base. Mini example with a hypothetical schedule: base $30,000, lower limit $25,000, fixed fee $2,500 and 20 % on the excess → 2,500 + 5,000 × 0.20 = $3,500. Effective rate: 3,500 ÷ 30,000 ≈ 11.67 %, much lower than the 20 % marginal rate.",
          ),
        ],
        formula: "ISR = Cuota fija + (Base − Límite inferior) × % sobre excedente",
      },
      {
        heading: t("Cómo se paga: retención, pagos provisionales y anual", "How it is paid: withholding, provisional payments and annual return"),
        body: [
          t(
            "El ISR se va pagando durante el año. En la **retención**, otro descuenta el impuesto y lo entrega al SAT por ti: tu patrón lo descuenta de tu nómina; un banco, de tus intereses.",
            "ISR is paid throughout the year. In **withholding**, someone else deducts the tax and pays it to the SAT for you: your employer deducts it from your payroll; a bank, from your interest.",
          ),
          t(
            "Los **pagos provisionales** son anticipos (por lo general mensuales) que hacen empresas y personas con negocio o actividad profesional, a cuenta del impuesto del año.",
            "**Provisional payments** are advances (usually monthly) made by companies and individuals with a business or professional activity, on account of the year's tax.",
          ),
          t(
            "En la **declaración anual** calculas el ISR de todo el año y le restas lo ya retenido y los pagos provisionales. Si pagaste de menos, sale **saldo a cargo**; si pagaste de más, **saldo a favor**, que puedes pedir que te devuelvan. Mini ejemplo: ISR anual $40,000 y retenciones $43,500 → saldo a favor de $3,500.",
            "In the **annual return** you compute the ISR for the whole year and subtract what was already withheld and the provisional payments. If you paid too little, there is a **balance due**; if you paid too much, a **refundable balance**, which you can ask to have returned. Mini example: annual ISR $40,000 and withholdings $43,500 → $3,500 refundable balance.",
          ),
        ],
        formula: "Saldo = ISR anual − retenciones − pagos provisionales",
      },
    ],
    examples: [
      {
        title: t("ISR con tarifa progresiva hipotética", "ISR with a hypothetical progressive schedule"),
        problem: t(
          "Un renglón de tarifa hipotética: límite inferior $40,000, cuota fija $4,800 y 25 % sobre el excedente. Calcula el ISR de una base de $52,000 y su tasa efectiva.",
          "A hypothetical schedule bracket: lower limit $40,000, fixed fee $4,800 and 25 % on the excess. Compute the ISR for a $52,000 base and its effective rate.",
        ),
        steps: [
          t("Excedente: 52,000 − 40,000 = $12,000.", "Excess: 52,000 − 40,000 = $12,000."),
          t("Impuesto marginal: 12,000 × 0.25 = $3,000.", "Marginal tax: 12,000 × 0.25 = $3,000."),
          t("ISR: 4,800 + 3,000 = $7,800.", "ISR: 4,800 + 3,000 = $7,800."),
          t("Tasa efectiva: 7,800 ÷ 52,000 = 15 %.", "Effective rate: 7,800 ÷ 52,000 = 15 %."),
        ],
        result: t("ISR = $7,800; tasa efectiva 15 %, aunque la marginal sea 25 %.", "ISR = $7,800; effective rate 15 %, although the marginal rate is 25 %."),
      },
      {
        title: t("Declaración anual con pagos provisionales", "Annual return with provisional payments"),
        problem: t(
          "Jorge, arquitecto independiente, calcula un ISR anual de $48,000. Durante el año hizo pagos provisionales por $39,000 y sus clientes empresa le retuvieron $5,000. ¿Cuál es su saldo?",
          "Jorge, a freelance architect, computes an annual ISR of $48,000. During the year he made provisional payments of $39,000 and his corporate clients withheld $5,000. What is his balance?",
        ),
        steps: [
          t("Total ya pagado: 39,000 + 5,000 = $44,000.", "Total already paid: 39,000 + 5,000 = $44,000."),
          t("Saldo: 48,000 − 44,000 = $4,000.", "Balance: 48,000 − 44,000 = $4,000."),
          t("Como el resultado es positivo, es saldo a cargo.", "Since the result is positive, it is a balance due."),
        ],
        result: t("Jorge debe pagar $4,000 en su declaración anual.", "Jorge must pay $4,000 in his annual return."),
      },
    ],
    keyPoints: [
      t("El ISR es federal y directo: grava los ingresos que aumentan tu patrimonio.", "ISR is federal and direct: it taxes income that increases your wealth."),
      t("Residentes en México pagan por ingresos de todo el mundo; no residentes, solo por fuente mexicana.", "Mexican residents pay on worldwide income; non-residents only on Mexican-source income."),
      t("Base = ingresos − deducciones autorizadas; algunos ingresos están exentos.", "Base = income − authorized deductions; some income is exempt."),
      t("Empresas: tasa fija general de 30 %; personas físicas: tarifa progresiva.", "Companies: general flat rate of 30 %; individuals: progressive schedule."),
      t("La tasa efectiva siempre es menor o igual que la marginal.", "The effective rate is always less than or equal to the marginal rate."),
      t("Retenciones y pagos provisionales son anticipos; la anual hace el ajuste final.", "Withholdings and provisional payments are advances; the annual return makes the final adjustment."),
    ],
    normativeNote: t(
      "Contenido educativo basado en la Ley del Impuesto sobre la Renta. Las tarifas de personas físicas, los límites de ingresos exentos y las fechas de las declaraciones se actualizan; las tarifas de esta lección son hipotéticas y no deben usarse para un cálculo real. Verifica la versión vigente (2026).",
      "Educational content based on the Income Tax Law. Individual tax schedules, exempt-income limits and filing dates are updated; the schedules in this lesson are hypothetical and must not be used for a real calculation. Verify the current version (2026).",
    ),
    exerciseIds: ['FIS-04-E1', 'FIS-04-E2', 'FIS-04-E3', 'FIS-04-E4', 'FIS-04-E5', 'FIS-04-E6'],
  },

  // ───────────────────────────── FIS-05 ─────────────────────────────
  {
    id: 'FIS-05',
    level: 5,
    topicIds: ['FIS.5'],
    title: t("Ley del Impuesto sobre la Renta (LISR)", "Income Tax Law (LISR)"),
    summary: t(
      "La LISR se organiza por títulos y capítulos según quién eres y de dónde viene tu ingreso, fija los requisitos para deducir gastos y el camino de los ingresos al resultado fiscal.",
      "The LISR is organized in titles and chapters according to who you are and where your income comes from, and it sets the requirements to deduct expenses and the path from income to taxable result.",
    ),
    minutes: 16,
    objectives: [
      t("Ubicar en la LISR el título y el capítulo que corresponden a un tipo de contribuyente e ingreso.", "Locate in the LISR the title and chapter that correspond to a type of taxpayer and income."),
      t("Aplicar los requisitos generales para que un gasto sea deducible.", "Apply the general requirements for an expense to be deductible."),
      t("Calcular utilidad fiscal, resultado fiscal e ISR de una persona moral con datos hipotéticos.", "Compute taxable profit, taxable result and ISR of a legal entity with hypothetical data."),
      t("Reconocer qué son las deducciones personales de las personas físicas.", "Recognize what personal deductions for individuals are."),
    ],
    theory: [
      {
        heading: t("Cómo está organizada la ley", "How the law is organized"),
        body: [
          t(
            "La **LISR** no se lee de corrido: se consulta como un mapa. Está dividida en **títulos** según el tipo de contribuyente: Título I, disposiciones generales; Título II, personas morales; Título III, personas morales con fines no lucrativos; **Título IV, personas físicas**; Título V, residentes en el extranjero; Título VI, regímenes fiscales preferentes y empresas multinacionales; Título VII, estímulos fiscales.",
            "The **LISR** is not read straight through: it is consulted like a map. It is divided into **titles** by type of taxpayer: Title I, general provisions; Title II, legal entities; Title III, non-profit legal entities; **Title IV, individuals**; Title V, foreign residents; Title VI, preferential tax regimes and multinational companies; Title VII, tax incentives.",
          ),
          t(
            "El Título IV se divide en **capítulos por tipo de ingreso**: salarios, actividades empresariales y profesionales (aquí está el RESICO de personas físicas), arrendamiento, enajenación (venta) de bienes, adquisición de bienes, intereses, premios, dividendos y demás ingresos. Si sabes **de dónde viene tu dinero**, sabes qué capítulo leer.",
            "Title IV is divided into **chapters by type of income**: wages, business and professional activities (individuals' RESICO is here), leasing, disposal (sale) of goods, acquisition of goods, interest, prizes, dividends and other income. If you know **where your money comes from**, you know which chapter to read.",
          ),
          t(
            "La ley se complementa con su **Reglamento** y con la **Resolución Miscelánea Fiscal (RMF)**, que el SAT publica cada año y modifica durante el año con reglas prácticas. Mini ejemplo: una maestra que además renta un cuarto revisa el capítulo de salarios y el de arrendamiento.",
            "The law is complemented by its **Regulations** and by the **Miscellaneous Tax Resolution (RMF)**, which the SAT publishes every year and amends during the year with practical rules. Mini example: a teacher who also rents out a room checks the wages chapter and the leasing chapter.",
          ),
        ],
      },
      {
        heading: t("Deducciones autorizadas: qué gastos sí cuentan", "Authorized deductions: which expenses count"),
        body: [
          t(
            "Una **deducción autorizada** es un gasto que la ley te deja restar de tus ingresos para pagar menos ISR. Pero no cualquier gasto: debe cumplir **requisitos**. Si falta uno, el gasto no se deduce aunque sí lo hayas pagado.",
            "An **authorized deduction** is an expense the law lets you subtract from your income to pay less ISR. But not any expense: it must meet **requirements**. If one is missing, the expense cannot be deducted even though you did pay it.",
          ),
          t(
            "Hay gastos que **no** se deducen, como las multas, el propio ISR o los gastos personales del dueño pagados por el negocio. Las **inversiones** (equipo, vehículos, maquinaria) se deducen poco a poco con porcentajes anuales, como una depreciación fiscal.",
            "Some expenses are **not** deductible, such as fines, the ISR itself or the owner's personal expenses paid by the business. **Investments** (equipment, vehicles, machinery) are deducted gradually with annual percentages, like a tax depreciation.",
          ),
          t(
            "Mini ejemplo: una papelería compra $3,000 de mercancía con CFDI, pero paga en efectivo. Como el pago supera $2,000 y no se hizo por medio electrónico, el gasto no es deducible.",
            "Mini example: a stationery shop buys $3,000 of merchandise with a CFDI, but pays in cash. Since the payment exceeds $2,000 and was not made electronically, the expense is not deductible.",
          ),
        ],
        bullets: [
          t("**Estrictamente indispensable** para la actividad.", "**Strictly indispensable** for the activity."),
          t("Respaldado con **CFDI** (factura electrónica) a tu nombre y RFC.", "Backed by a **CFDI** (electronic invoice) in your name and RFC."),
          t("Pagos de más de **$2,000** con transferencia, tarjeta o cheque nominativo, no en efectivo.", "Payments over **$2,000** by transfer, card or nominative check, not in cash."),
          t("Registrado en tu contabilidad.", "Recorded in your accounting."),
        ],
      },
      {
        heading: t("Del ingreso al resultado fiscal", "From income to taxable result"),
        body: [
          t(
            "Para una **persona moral**, la ley marca un camino. Primero, la **utilidad fiscal**: ingresos acumulables menos deducciones autorizadas y menos la PTU pagada (reparto de utilidades a trabajadores). Luego, el **resultado fiscal**: utilidad fiscal menos **pérdidas fiscales** de años anteriores pendientes de aplicar. A ese resultado se le aplica el 30 %.",
            "For a **legal entity**, the law sets a path. First, **taxable profit**: accruable income minus authorized deductions minus profit sharing paid to workers (PTU). Then, the **taxable result**: taxable profit minus prior years' **tax losses** still to be applied. The 30 % rate is applied to that result.",
          ),
          t(
            "Para **personas físicas**, en la declaración anual se pueden restar **deducciones personales**: gastos médicos, dentales y hospitalarios, gastos funerarios, donativos, intereses reales de crédito hipotecario, primas de seguros de gastos médicos, aportaciones voluntarias para el retiro, entre otras. Tienen un **tope global** y requisitos (CFDI y pago no en efectivo).",
            "For **individuals**, personal deductions can be subtracted in the annual return: medical, dental and hospital expenses, funeral expenses, donations, real interest on mortgage loans, health insurance premiums, voluntary retirement contributions, among others. They have an **overall cap** and requirements (CFDI and non-cash payment).",
          ),
          t(
            "Mini ejemplo: ingresos $1,000,000, deducciones $700,000 → utilidad fiscal $300,000; sin PTU ni pérdidas, el ISR del año es 300,000 × 0.30 = $90,000, menos los pagos provisionales hechos.",
            "Mini example: income $1,000,000, deductions $700,000 → taxable profit $300,000; with no PTU or losses, the year's ISR is 300,000 × 0.30 = $90,000, minus the provisional payments made.",
          ),
        ],
        formula: "Resultado fiscal = Ingresos acumulables − Deducciones autorizadas − PTU pagada − Pérdidas fiscales · ISR = Resultado × 30 %",
      },
    ],
    examples: [
      {
        title: t("ISR anual de una persona moral", "Annual ISR of a legal entity"),
        problem: t(
          "Muebles del Bajío, S.A. de C.V. tuvo ingresos acumulables de $2,000,000, deducciones autorizadas de $1,450,000, PTU pagada de $50,000 y pérdidas fiscales pendientes de $100,000. Hizo pagos provisionales por $95,000. Datos hipotéticos.",
          "Muebles del Bajío, S.A. de C.V. had accruable income of $2,000,000, authorized deductions of $1,450,000, PTU paid of $50,000 and pending tax losses of $100,000. It made provisional payments of $95,000. Hypothetical data.",
        ),
        steps: [
          t("Utilidad fiscal: 2,000,000 − 1,450,000 − 50,000 = $500,000.", "Taxable profit: 2,000,000 − 1,450,000 − 50,000 = $500,000."),
          t("Resultado fiscal: 500,000 − 100,000 = $400,000.", "Taxable result: 500,000 − 100,000 = $400,000."),
          t("ISR del ejercicio: 400,000 × 0.30 = $120,000.", "Year's ISR: 400,000 × 0.30 = $120,000."),
          t("A cargo: 120,000 − 95,000 = $25,000.", "Balance due: 120,000 − 95,000 = $25,000."),
        ],
        result: t("La empresa paga $25,000 en su declaración anual.", "The company pays $25,000 in its annual return."),
      },
      {
        title: t("¿Es deducible o no?", "Deductible or not?"),
        problem: t(
          "Un despacho contable revisa cuatro gastos: renta de oficina pagada por transferencia con CFDI; papelería por $3,000 pagada en efectivo con CFDI; una multa de tránsito del auto de la empresa; y una cena familiar del dueño.",
          "An accounting firm reviews four expenses: office rent paid by transfer with a CFDI; $3,000 of stationery paid in cash with a CFDI; a traffic fine on the company car; and the owner's family dinner.",
        ),
        steps: [
          t("Renta: indispensable, con CFDI y pagada por transferencia → deducible.", "Rent: indispensable, with CFDI and paid by transfer → deductible."),
          t("Papelería: más de $2,000 en efectivo → no deducible.", "Stationery: over $2,000 in cash → not deductible."),
          t("Multa: la ley no permite deducir multas → no deducible.", "Fine: the law does not allow fines to be deducted → not deductible."),
          t("Cena familiar: gasto personal, no indispensable → no deducible.", "Family dinner: personal expense, not indispensable → not deductible."),
        ],
        result: t("Solo la renta de oficina es deducible.", "Only the office rent is deductible."),
      },
    ],
    keyPoints: [
      t("La LISR se consulta por títulos (tipo de contribuyente) y capítulos (tipo de ingreso).", "The LISR is consulted by titles (type of taxpayer) and chapters (type of income)."),
      t("Las personas físicas están en el Título IV y las personas morales en el Título II.", "Individuals are in Title IV and legal entities in Title II."),
      t("La RMF se publica cada año y se modifica durante el año: revisa la versión vigente.", "The RMF is published each year and amended during the year: check the current version."),
      t("Un gasto deducible debe ser indispensable, tener CFDI y, si supera $2,000, pagarse por medio electrónico.", "A deductible expense must be indispensable, have a CFDI and, if over $2,000, be paid electronically."),
      t("Resultado fiscal = ingresos − deducciones − PTU pagada − pérdidas; ISR de personas morales = 30 % del resultado.", "Taxable result = income − deductions − PTU paid − losses; legal entities' ISR = 30 % of the result."),
    ],
    normativeNote: t(
      "Contenido educativo basado en la Ley del Impuesto sobre la Renta, su Reglamento y la Resolución Miscelánea Fiscal. Los requisitos de deducción (incluido el monto a partir del cual se exige pago no en efectivo), las excepciones y el tope global de deducciones personales (que por regla general se expresa en UMA y en un porcentaje del ingreso) cambian con reformas. Los datos de los ejemplos son hipotéticos. Verifica la versión vigente (2026).",
      "Educational content based on the Income Tax Law, its Regulations and the Miscellaneous Tax Resolution. Deduction requirements (including the amount above which non-cash payment is required), exceptions and the overall cap on personal deductions (generally expressed in UMA and as a percentage of income) change with reforms. The data in the examples is hypothetical. Verify the current version (2026).",
    ),
    exerciseIds: ['FIS-05-E1', 'FIS-05-E2', 'FIS-05-E3', 'FIS-05-E4', 'FIS-05-E5', 'FIS-05-E6'],
  },

  // ───────────────────────────── FIS-06 ─────────────────────────────
  {
    id: 'FIS-06',
    level: 5,
    topicIds: ['FIS.6'],
    title: t("Impuesto al Valor Agregado (IVA)", "Value Added Tax (IVA)"),
    summary: t(
      "El IVA es un impuesto indirecto al consumo que se cobra en cada etapa de la cadena; cada mes pagas el IVA que cobraste menos el que pagaste.",
      "VAT is an indirect consumption tax charged at every stage of the chain; each month you pay the VAT you charged minus the VAT you paid.",
    ),
    minutes: 15,
    objectives: [
      t("Explicar cómo funciona el IVA en la cadena y quién lo carga al final.", "Explain how VAT works along the chain and who ultimately bears it."),
      t("Distinguir actos gravados al 16 %, a tasa 0 % y exentos.", "Distinguish transactions taxed at 16 %, at the 0 % rate and exempt."),
      t("Calcular el IVA mensual a pagar o a favor y desglosar el IVA incluido en un precio.", "Compute monthly VAT payable or in favor and break out the VAT included in a price."),
    ],
    theory: [
      {
        heading: t("Un impuesto al consumo que viaja en la cadena", "A consumption tax that travels along the chain"),
        body: [
          t(
            "El **IVA** es un impuesto **federal e indirecto**: el negocio lo cobra en el precio, pero quien realmente lo carga es el **consumidor final**. Se causa por cuatro actos: **vender bienes**, **prestar servicios independientes**, **rentar bienes** (uso o goce temporal) e **importar** bienes o servicios.",
            "**VAT (IVA)** is a **federal, indirect** tax: the business charges it in the price, but whoever really bears it is the **final consumer**. It is triggered by four acts: **selling goods**, **providing independent services**, **renting goods** (temporary use or enjoyment) and **importing** goods or services.",
          ),
          t(
            "Cada negocio **traslada** (cobra) IVA a sus clientes y **acredita** (resta) el IVA que le cobraron sus proveedores. Así, cada etapa solo entrega al SAT el IVA de lo que **agregó** de valor.",
            "Each business **passes on** (charges) VAT to its customers and **credits** (subtracts) the VAT its suppliers charged it. Thus, each stage only pays the SAT the VAT on the value it **added**.",
          ),
          t(
            "Mini ejemplo: un fabricante vende una mesa a una mueblería en $1,000 + $160 de IVA. La mueblería la vende en $1,500 + $240. La mueblería entrega al SAT 240 − 160 = $80, que es el 16 % de los $500 que agregó.",
            "Mini example: a manufacturer sells a table to a furniture store for $1,000 + $160 VAT. The store sells it for $1,500 + $240. The store pays the SAT 240 − 160 = $80, which is 16 % of the $500 it added.",
          ),
        ],
      },
      {
        heading: t("Tasa general, tasa 0 % y exentos", "General rate, 0 % rate and exempt"),
        body: [
          t(
            "La **tasa general** es del **16 %**: aplica a la mayoría de bienes y servicios, como electrodomésticos, ropa, restaurantes o servicios de un plomero.",
            "The **general rate** is **16 %**: it applies to most goods and services, such as appliances, clothing, restaurants or a plumber's services.",
          ),
          t(
            "La **tasa 0 %** aplica a ciertos actos, como la venta de muchos alimentos básicos no procesados (tortillas, carne, fruta) y medicinas de patente. Se cobra 0, pero el negocio **sí puede acreditar** el IVA de sus compras, e incluso tener saldo a favor.",
            "The **0 % rate** applies to certain acts, such as the sale of many basic unprocessed foods (tortillas, meat, fruit) and patent medicines. Zero is charged, but the business **can credit** the VAT on its purchases, and may even have a balance in its favor.",
          ),
          t(
            "Los actos **exentos** no causan IVA, como la venta o renta de casa habitación o la colegiatura de escuelas con reconocimiento oficial. A diferencia del 0 %, quien realiza actos exentos **no puede acreditar** el IVA que pagó: ese IVA se vuelve un costo. Mini ejemplo: un casero que renta departamentos para vivir no cobra IVA, pero tampoco recupera el IVA de la pintura que compra.",
            "**Exempt** acts do not trigger VAT, such as selling or renting a dwelling or tuition at officially recognized schools. Unlike the 0 % rate, whoever performs exempt acts **cannot credit** the VAT they paid: that VAT becomes a cost. Mini example: a landlord renting apartments as homes does not charge VAT, but also does not recover the VAT on the paint he buys.",
          ),
        ],
        bullets: [
          t("16 %: se cobra y se acredita.", "16 %: charged and credited."),
          t("0 %: no se cobra, pero sí se acredita.", "0 %: not charged, but credited."),
          t("Exento: no se cobra y no se acredita.", "Exempt: not charged and not credited."),
        ],
      },
      {
        heading: t("El cálculo mensual", "The monthly calculation"),
        body: [
          t(
            "Cada mes restas al **IVA trasladado** (el que cobraste) el **IVA acreditable** (el que pagaste en compras y gastos del negocio). Si el resultado es positivo, es **IVA a pagar**; si es negativo, **saldo a favor**.",
            "Each month you subtract **creditable (input) VAT** (what you paid on business purchases and expenses) from **output VAT** (what you charged). If the result is positive, it is **VAT payable**; if negative, a **balance in your favor**.",
          ),
          t(
            "El IVA funciona, en general, con **flujo de efectivo**: se cuenta cuando efectivamente cobras o pagas, no cuando facturas. Para acreditar, por regla general el gasto debe ser deducible para ISR, tener CFDI con el IVA desglosado y estar efectivamente pagado.",
            "VAT generally works on a **cash basis**: it counts when you actually collect or pay, not when you invoice. To credit it, as a general rule the expense must be deductible for ISR, have a CFDI with the VAT itemized and be actually paid.",
          ),
          t(
            "Para **desglosar** el IVA de un precio que ya lo incluye, divide entre 1.16. Mini ejemplo: un ticket de $2,900 → base 2,900 ÷ 1.16 = $2,500 e IVA $400.",
            "To **break out** the VAT from a price that already includes it, divide by 1.16. Mini example: a $2,900 receipt → base 2,900 ÷ 1.16 = $2,500 and VAT $400.",
          ),
        ],
        formula: "IVA a pagar = IVA trasladado − IVA acreditable · Base = Precio con IVA ÷ 1.16",
      },
    ],
    examples: [
      {
        title: t("IVA del mes de una cafetería", "A coffee shop's VAT for the month"),
        problem: t(
          "En marzo, una cafetería cobró ventas por $250,000 más IVA. Pagó compras y gastos del negocio por $150,000 más IVA, todos con CFDI. Todo a tasa 16 %.",
          "In March, a coffee shop collected sales of $250,000 plus VAT. It paid business purchases and expenses of $150,000 plus VAT, all with CFDI. Everything at the 16 % rate.",
        ),
        steps: [
          t("IVA trasladado: 250,000 × 0.16 = $40,000.", "Output VAT: 250,000 × 0.16 = $40,000."),
          t("IVA acreditable: 150,000 × 0.16 = $24,000.", "Input VAT: 150,000 × 0.16 = $24,000."),
          t("IVA a pagar: 40,000 − 24,000 = $16,000.", "VAT payable: 40,000 − 24,000 = $16,000."),
        ],
        result: t("La cafetería paga $16,000 de IVA por marzo.", "The coffee shop pays $16,000 of VAT for March."),
      },
      {
        title: t("Tasa 0 % frente a exento", "0 % rate versus exempt"),
        problem: t(
          "Dos negocios compran insumos por $10,000 + $1,600 de IVA. Uno vende fruta (tasa 0 %); el otro renta casas habitación (exento). ¿Qué pasa con los $1,600?",
          "Two businesses buy supplies for $10,000 + $1,600 VAT. One sells fruit (0 % rate); the other rents homes (exempt). What happens to the $1,600?",
        ),
        steps: [
          t("Frutería: trasladado $0, acreditable $1,600 → saldo a favor de $1,600.", "Fruit shop: output $0, input $1,600 → $1,600 balance in its favor."),
          t("Arrendador exento: no puede acreditar; los $1,600 se suman a su costo.", "Exempt landlord: cannot credit; the $1,600 is added to its cost."),
        ],
        result: t("La tasa 0 % permite recuperar el IVA; el exento no.", "The 0 % rate lets you recover VAT; exempt does not."),
      },
    ],
    keyPoints: [
      t("El IVA es federal e indirecto: lo carga el consumidor final.", "VAT is federal and indirect: the final consumer bears it."),
      t("Se causa por vender bienes, prestar servicios, rentar bienes e importar.", "It is triggered by selling goods, providing services, renting goods and importing."),
      t("Tasa general 16 %; la tasa 0 % permite acreditar y el exento no.", "General rate 16 %; the 0 % rate allows crediting and exempt does not."),
      t("IVA a pagar = trasladado − acreditable; si sale negativo, es saldo a favor.", "VAT payable = output − input; if negative, it is a balance in your favor."),
      t("Para desglosar el IVA incluido en un precio, divide entre 1.16.", "To break out VAT included in a price, divide by 1.16."),
    ],
    normativeNote: t(
      "Contenido educativo basado en la Ley del Impuesto al Valor Agregado. Qué bienes y servicios van a tasa 0 % o están exentos tiene matices y excepciones, y ha existido un estímulo con tasa reducida en la región fronteriza cuya vigencia depende de decretos. Los montos de los ejemplos son hipotéticos. Verifica la versión vigente (2026).",
      "Educational content based on the Value Added Tax Law. Which goods and services are 0 %-rated or exempt has nuances and exceptions, and there has been a reduced-rate incentive in the border region whose validity depends on decrees. The amounts in the examples are hypothetical. Verify the current version (2026).",
    ),
    exerciseIds: ['FIS-06-E1', 'FIS-06-E2', 'FIS-06-E3', 'FIS-06-E4', 'FIS-06-E5', 'FIS-06-E6'],
  },
]

export const exercises: Exercise[] = [
  // ═════════════════════════ FIS-01 ═════════════════════════
  {
    id: 'FIS-01-E1',
    level: 5,
    module: 'FIS-01',
    kind: 'mcq',
    flavor: 'concept',
    prompt: t(
      "¿Qué principio tributario exige que una contribución solo pueda cobrarse si una ley la establece?",
      "Which tax principle requires that a contribution can only be charged if a law establishes it?",
    ),
    options: [
      { id: 'FIS-01-E1-a', text: t("Proporcionalidad", "Proportionality") },
      { id: 'FIS-01-E1-b', text: t("Legalidad", "Legality") },
      { id: 'FIS-01-E1-c', text: t("Equidad", "Equity") },
      { id: 'FIS-01-E1-d', text: t("Destino al gasto público", "Allocation to public spending") },
    ],
    correctOptionId: 'FIS-01-E1-b',
    explanation: t(
      "Legalidad: sin ley no hay contribución, y ninguna autoridad puede inventar un cobro. La proporcionalidad mide la capacidad económica y la equidad pide trato igual a iguales. Error común: confundir legalidad con equidad porque ambas suenan a \"justicia\".",
      "Legality: no law, no contribution, and no authority can invent a charge. Proportionality measures economic capacity and equity requires equal treatment of equals. Common mistake: confusing legality with equity because both sound like \"fairness\".",
    ),
    difficulty: 1,
    points: 10,
    competency: 'tax-system-basics',
  },
  {
    id: 'FIS-01-E2',
    level: 5,
    module: 'FIS-01',
    kind: 'classify',
    flavor: 'concept',
    prompt: t(
      "Clasifica cada pago según el tipo de contribución.",
      "Classify each payment by type of contribution.",
    ),
    categories: [
      { id: 'FIS-01-E2-c1', label: t("Impuesto", "Tax") },
      { id: 'FIS-01-E2-c2', label: t("Aportación de seguridad social", "Social security contribution") },
      { id: 'FIS-01-E2-c3', label: t("Contribución de mejoras", "Improvement contribution") },
      { id: 'FIS-01-E2-c4', label: t("Derecho", "Fee (derecho)") },
    ],
    items: [
      { id: 'FIS-01-E2-i1', label: t("IVA incluido en la compra de un celular", "VAT included in the purchase of a cell phone"), correctCategoryId: 'FIS-01-E2-c1' },
      { id: 'FIS-01-E2-i2', label: t("Cuotas obrero-patronales al IMSS", "Employer-employee payments to IMSS"), correctCategoryId: 'FIS-01-E2-c2' },
      { id: 'FIS-01-E2-i3', label: t("Pago por la expedición de un pasaporte", "Payment to issue a passport"), correctCategoryId: 'FIS-01-E2-c4' },
      { id: 'FIS-01-E2-i4', label: t("Cobro a los vecinos por una obra pública que pavimentó su calle", "Charge to neighbors for a public work that paved their street"), correctCategoryId: 'FIS-01-E2-c3' },
      { id: 'FIS-01-E2-i5', label: t("Recibo bimestral del servicio municipal de agua potable", "Bimonthly bill for the municipal drinking water service"), correctCategoryId: 'FIS-01-E2-c4' },
      { id: 'FIS-01-E2-i6', label: t("ISR retenido en tu recibo de nómina", "ISR withheld on your payslip"), correctCategoryId: 'FIS-01-E2-c1' },
    ],
    explanation: t(
      "IVA e ISR son impuestos: se pagan por estar en la situación que marca la ley, sin servicio directo a cambio. Las cuotas del IMSS son aportaciones de seguridad social. Pasaporte y agua son derechos: pagas por un servicio público. La pavimentación es contribución de mejoras porque la obra te beneficia directamente. Error común: llamar \"impuesto\" al pago del agua.",
      "VAT and ISR are taxes: paid for being in the situation the law sets, with no direct service in return. IMSS payments are social security contributions. Passport and water are fees: you pay for a public service. Paving is an improvement contribution because the work benefits you directly. Common mistake: calling the water bill a \"tax\".",
    ),
    difficulty: 1,
    points: 15,
    competency: 'tax-system-basics',
  },
  {
    id: 'FIS-01-E3',
    level: 5,
    module: 'FIS-01',
    kind: 'multi',
    flavor: 'concept',
    prompt: t(
      "¿Cuáles de estos impuestos son federales? Selecciona todas las que apliquen.",
      "Which of these taxes are federal? Select all that apply.",
    ),
    options: [
      { id: 'FIS-01-E3-a', text: t("Impuesto sobre la Renta (ISR)", "Income Tax (ISR)") },
      { id: 'FIS-01-E3-b', text: t("Predial", "Property tax (predial)") },
      { id: 'FIS-01-E3-c', text: t("Impuesto al Valor Agregado (IVA)", "Value Added Tax (IVA)") },
      { id: 'FIS-01-E3-d', text: t("Impuesto sobre nóminas", "Payroll tax") },
      { id: 'FIS-01-E3-e', text: t("Impuesto Especial sobre Producción y Servicios (IEPS)", "Special Tax on Production and Services (IEPS)") },
    ],
    correctOptionIds: ['FIS-01-E3-a', 'FIS-01-E3-c', 'FIS-01-E3-e'],
    explanation: t(
      "ISR, IVA e IEPS los establece la Federación y los administra el SAT. El predial es municipal y el impuesto sobre nóminas es estatal. Error común: pensar que todo impuesto lo cobra el SAT.",
      "ISR, VAT and IEPS are set by the Federation and administered by the SAT. Property tax is municipal and payroll tax is a state tax. Common mistake: thinking the SAT collects every tax.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'tax-system-basics',
  },
  {
    id: 'FIS-01-E4',
    level: 5,
    module: 'FIS-01',
    kind: 'numeric',
    flavor: 'case',
    context: t(
      "Una panadería en un estado que cobra un impuesto sobre nóminas con tasa hipotética de 3 % pagó $120,000 de sueldos en el mes. La base es el total de sueldos.",
      "A bakery in a state that levies a payroll tax at a hypothetical 3 % rate paid $120,000 in wages during the month. The base is total wages.",
    ),
    prompt: t(
      "¿Cuánto impuesto sobre nóminas paga la panadería ese mes? Responde en pesos.",
      "How much payroll tax does the bakery pay that month? Answer in pesos.",
    ),
    answer: 3600,
    unit: 'MXN',
    decimals: 0,
    tolerance: { abs: 0.5 },
    explanation: t(
      "Impuesto = base × tasa = 120,000 × 0.03 = $3,600. Error común: usar 3 en lugar de 0.03 y obtener 360,000; los porcentajes se dividen entre 100 antes de multiplicar.",
      "Tax = base × rate = 120,000 × 0.03 = $3,600. Common mistake: using 3 instead of 0.03 and getting 360,000; percentages are divided by 100 before multiplying.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'tax-system-basics',
  },
  {
    id: 'FIS-01-E5',
    level: 5,
    module: 'FIS-01',
    kind: 'truefalse',
    flavor: 'concept',
    prompt: t(
      "El IVA es un impuesto directo porque lo paga quien obtiene el ingreso por la venta.",
      "VAT is a direct tax because it is paid by whoever earns the income from the sale.",
    ),
    answer: false,
    explanation: t(
      "Falso. El IVA es indirecto: el negocio lo cobra en el precio y lo traslada, y quien lo carga al final es el consumidor. El ISR sí es directo. Error común: pensar que como el negocio lo entrega al SAT, es el negocio quien lo soporta.",
      "False. VAT is indirect: the business charges it in the price and passes it on, and the consumer ultimately bears it. ISR is direct. Common mistake: thinking that because the business remits it to the SAT, the business bears it.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'tax-system-basics',
  },
  {
    id: 'FIS-01-E6',
    level: 5,
    module: 'FIS-01',
    kind: 'mcq',
    flavor: 'case',
    context: t(
      "Para calcular el predial de una casa, el municipio aplica su tasa al valor catastral del inmueble.",
      "To compute a house's property tax, the municipality applies its rate to the property's assessed (cadastral) value.",
    ),
    prompt: t(
      "¿Qué elemento del impuesto es el valor catastral?",
      "Which element of the tax is the assessed value?",
    ),
    options: [
      { id: 'FIS-01-E6-a', text: t("El sujeto", "The subject") },
      { id: 'FIS-01-E6-b', text: t("El objeto", "The object") },
      { id: 'FIS-01-E6-c', text: t("La base", "The base") },
      { id: 'FIS-01-E6-d', text: t("La época de pago", "The payment period") },
    ],
    correctOptionId: 'FIS-01-E6-c',
    explanation: t(
      "La base es la cantidad sobre la que se aplica la tasa: aquí, el valor catastral. El sujeto es el propietario y el objeto es la propiedad del inmueble. Error común: confundir objeto (lo que se grava) con base (cuánto vale para el cálculo).",
      "The base is the amount to which the rate is applied: here, the assessed value. The subject is the owner and the object is ownership of the property. Common mistake: confusing the object (what is taxed) with the base (how much it is worth for the calculation).",
    ),
    difficulty: 2,
    points: 15,
    competency: 'tax-system-basics',
  },

  // ═════════════════════════ FIS-02 ═════════════════════════
  {
    id: 'FIS-02-E1',
    level: 5,
    module: 'FIS-02',
    kind: 'mcq',
    flavor: 'concept',
    prompt: t(
      "¿Qué tipo de organismo es el SAT?",
      "What type of body is the SAT?",
    ),
    options: [
      { id: 'FIS-02-E1-a', text: t("Un organismo constitucional autónomo, como el Banco de México", "An autonomous constitutional body, like Banco de México") },
      { id: 'FIS-02-E1-b', text: t("Una empresa privada concesionada para cobrar impuestos", "A private company licensed to collect taxes") },
      { id: 'FIS-02-E1-c', text: t("Un órgano desconcentrado de la Secretaría de Hacienda y Crédito Público", "A deconcentrated body of the Ministry of Finance and Public Credit") },
      { id: 'FIS-02-E1-d', text: t("Una dependencia del gobierno de cada estado", "An agency of each state government") },
    ],
    correctOptionId: 'FIS-02-E1-c',
    explanation: t(
      "El SAT depende de la SHCP, con autonomía técnica para operar: es un órgano desconcentrado. No es autónomo como Banxico, no es privado y no es estatal (administra impuestos federales). Error común: creer que el SAT es independiente del gobierno federal.",
      "The SAT depends on the SHCP, with technical autonomy to operate: it is a deconcentrated body. It is not autonomous like Banxico, not private and not a state agency (it administers federal taxes). Common mistake: believing the SAT is independent from the federal government.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'sat-basics',
  },
  {
    id: 'FIS-02-E2',
    level: 5,
    module: 'FIS-02',
    kind: 'fields',
    flavor: 'concept',
    prompt: t(
      "Completa cuántos caracteres tiene cada parte del RFC.",
      "Fill in how many characters each part of the RFC has.",
    ),
    fields: [
      { id: 'f1', label: t("RFC completo de una persona física", "Full RFC of an individual"), answer: 13, unit: 'units', tolerance: { abs: 0 } },
      { id: 'f2', label: t("RFC completo de una persona moral", "Full RFC of a legal entity"), answer: 12, unit: 'units', tolerance: { abs: 0 } },
      { id: 'f3', label: t("Dígitos de la fecha (AAMMDD)", "Digits of the date (YYMMDD)"), answer: 6, unit: 'units', tolerance: { abs: 0 } },
      { id: 'f4', label: t("Caracteres de la homoclave", "Characters of the homoclave"), answer: 3, unit: 'units', tolerance: { abs: 0 } },
    ],
    explanation: t(
      "Persona física: 4 letras + 6 de fecha + 3 de homoclave = 13. Persona moral: 3 letras de la razón social + 6 de fecha de constitución + 3 de homoclave = 12. Error común: decir que ambos tienen 13 y olvidar que la persona moral usa solo 3 letras.",
      "Individual: 4 letters + 6 date digits + 3 homoclave = 13. Legal entity: 3 letters of the company name + 6 digits of incorporation date + 3 homoclave = 12. Common mistake: saying both have 13 and forgetting that legal entities use only 3 letters.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'sat-basics',
  },
  {
    id: 'FIS-02-E3',
    level: 5,
    module: 'FIS-02',
    kind: 'multi',
    flavor: 'concept',
    prompt: t(
      "¿Cuáles de estas contribuciones administra el SAT? Selecciona todas las que apliquen.",
      "Which of these contributions does the SAT administer? Select all that apply.",
    ),
    options: [
      { id: 'FIS-02-E3-a', text: t("ISR de una empresa", "A company's ISR") },
      { id: 'FIS-02-E3-b', text: t("Predial de tu casa", "Your home's property tax") },
      { id: 'FIS-02-E3-c', text: t("IVA de las ventas de una tienda", "VAT on a store's sales") },
      { id: 'FIS-02-E3-d', text: t("Cuotas obrero-patronales al IMSS", "Employer-employee IMSS payments") },
      { id: 'FIS-02-E3-e', text: t("IEPS de una refresquera", "A soft drink maker's IEPS") },
    ],
    correctOptionIds: ['FIS-02-E3-a', 'FIS-02-E3-c', 'FIS-02-E3-e'],
    explanation: t(
      "El SAT administra impuestos federales: ISR, IVA e IEPS. El predial lo cobra el municipio y las cuotas del IMSS las cobra el propio IMSS. Error común: pagar o reclamar en el SAT algo que corresponde a otra autoridad.",
      "The SAT administers federal taxes: ISR, VAT and IEPS. Property tax is collected by the municipality and IMSS payments by IMSS itself. Common mistake: paying or complaining to the SAT about something that belongs to another authority.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'sat-basics',
  },
  {
    id: 'FIS-02-E4',
    level: 5,
    module: 'FIS-02',
    kind: 'classify',
    flavor: 'concept',
    prompt: t(
      "Relaciona cada descripción con la herramienta del SAT a la que se refiere.",
      "Match each description with the SAT tool it refers to.",
    ),
    categories: [
      { id: 'FIS-02-E4-c1', label: t("e.firma", "e.firma") },
      { id: 'FIS-02-E4-c2', label: t("Buzón tributario", "Tax mailbox") },
      { id: 'FIS-02-E4-c3', label: t("Opinión de cumplimiento", "Compliance opinion") },
    ],
    items: [
      { id: 'FIS-02-E4-i1', label: t("Certificado digital formado por archivos .cer y .key", "Digital certificate made of .cer and .key files"), correctCategoryId: 'FIS-02-E4-c1' },
      { id: 'FIS-02-E4-i2', label: t("Canal donde el SAT te hace notificaciones oficiales", "Channel where the SAT serves official notices"), correctCategoryId: 'FIS-02-E4-c2' },
      { id: 'FIS-02-E4-i3', label: t("Documento que sale positivo o negativo según estés al corriente", "Document that comes out positive or negative depending on whether you are up to date"), correctCategoryId: 'FIS-02-E4-c3' },
      { id: 'FIS-02-E4-i4', label: t("Tiene la misma validez que tu firma autógrafa", "Has the same validity as your handwritten signature"), correctCategoryId: 'FIS-02-E4-c1' },
      { id: 'FIS-02-E4-i5', label: t("Te lo piden empresas o gobiernos antes de contratarte", "Companies or governments ask for it before hiring you"), correctCategoryId: 'FIS-02-E4-c3' },
      { id: 'FIS-02-E4-i6', label: t("Debes registrar en él un correo y un teléfono para recibir avisos", "You must register an email and a phone in it to receive alerts"), correctCategoryId: 'FIS-02-E4-c2' },
    ],
    explanation: t(
      "La e.firma es el certificado digital (.cer y .key) con validez de firma autógrafa. El buzón tributario es el canal de notificaciones, con correo y teléfono registrados. La opinión de cumplimiento muestra si estás al corriente y la piden terceros. Error común: confundir la e.firma con la Contraseña, que solo sirve para entrar al portal y algunos trámites.",
      "The e.firma is the digital certificate (.cer and .key) with the validity of a handwritten signature. The tax mailbox is the notification channel, with email and phone registered. The compliance opinion shows whether you are up to date and third parties ask for it. Common mistake: confusing the e.firma with the Password, which only serves to log in and for some procedures.",
    ),
    difficulty: 2,
    points: 15,
    competency: 'sat-basics',
  },
  {
    id: 'FIS-02-E5',
    level: 5,
    module: 'FIS-02',
    kind: 'truefalse',
    flavor: 'concept',
    prompt: t(
      "Al inscribirte en el RFC tú eliges los tres caracteres de la homoclave.",
      "When you register in the RFC you choose the three characters of the homoclave.",
    ),
    answer: false,
    explanation: t(
      "Falso. La homoclave la asigna el SAT para que no haya dos RFC iguales, por ejemplo entre personas con mismos apellidos, nombre y fecha de nacimiento. Error común: inventar la homoclave al llenar un formato; usa siempre la que aparece en tu constancia.",
      "False. The SAT assigns the homoclave so that no two RFCs are the same, for example between people with the same surnames, name and birth date. Common mistake: making up the homoclave when filling out a form; always use the one shown on your certificate.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'sat-basics',
  },
  {
    id: 'FIS-02-E6',
    level: 5,
    module: 'FIS-02',
    kind: 'mcq',
    flavor: 'case',
    context: t(
      "Ana es fotógrafa independiente. Un cliente le pide un documento con su RFC, nombre, domicilio fiscal y régimen para registrarla como proveedora.",
      "Ana is a freelance photographer. A client asks her for a document with her RFC, name, tax address and regime to register her as a supplier.",
    ),
    prompt: t(
      "¿Qué documento del SAT debe entregar Ana?",
      "Which SAT document should Ana provide?",
    ),
    options: [
      { id: 'FIS-02-E6-a', text: t("La Constancia de situación fiscal", "The Tax Status Certificate") },
      { id: 'FIS-02-E6-b', text: t("La opinión de cumplimiento", "The compliance opinion") },
      { id: 'FIS-02-E6-c', text: t("El acuse de su última declaración anual", "The receipt of her last annual return") },
      { id: 'FIS-02-E6-d', text: t("Un recibo de luz como comprobante de domicilio", "An electricity bill as proof of address") },
    ],
    correctOptionId: 'FIS-02-E6-a',
    explanation: t(
      "La Constancia de situación fiscal reúne RFC, nombre, domicilio fiscal, régimen y obligaciones. La opinión de cumplimiento solo dice si está al corriente; el acuse prueba que presentó una declaración; el recibo de luz no muestra datos fiscales. Error común: entregar la opinión de cumplimiento cuando piden datos para facturar.",
      "The Tax Status Certificate gathers RFC, name, tax address, regime and obligations. The compliance opinion only says whether she is up to date; the receipt proves she filed a return; an electricity bill shows no tax data. Common mistake: providing the compliance opinion when invoicing data is requested.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'sat-basics',
  },

  // ═════════════════════════ FIS-03 ═════════════════════════
  {
    id: 'FIS-03-E1',
    level: 5,
    module: 'FIS-03',
    kind: 'mcq',
    flavor: 'concept',
    prompt: t(
      "¿Cuál es el papel principal del Código Fiscal de la Federación?",
      "What is the main role of the Federal Tax Code?",
    ),
    options: [
      { id: 'FIS-03-E1-a', text: t("Fijar la tasa del IVA y las tarifas del ISR", "Set the VAT rate and the ISR schedules") },
      { id: 'FIS-03-E1-b', text: t("Dar reglas comunes para los impuestos federales: registro, plazos, sanciones y defensa", "Provide common rules for federal taxes: registration, deadlines, penalties and defense") },
      { id: 'FIS-03-E1-c', text: t("Regular solo los impuestos que cobran los municipios", "Regulate only the taxes collected by municipalities") },
      { id: 'FIS-03-E1-d', text: t("Sustituir a todas las demás leyes fiscales", "Replace all other tax laws") },
    ],
    correctOptionId: 'FIS-03-E1-b',
    explanation: t(
      "El CFF es la ley marco con reglas comunes para los impuestos federales. Las tasas y tarifas están en cada ley (LIVA, LISR); el CFF no regula impuestos municipales ni sustituye a las demás leyes. Error común: buscar la tasa de un impuesto en el CFF.",
      "The CFF is the framework law with common rules for federal taxes. Rates and schedules are in each law (VAT Law, Income Tax Law); the CFF does not regulate municipal taxes or replace the other laws. Common mistake: looking for a tax rate in the CFF.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'tax-code',
  },
  {
    id: 'FIS-03-E2',
    level: 5,
    module: 'FIS-03',
    kind: 'fields',
    flavor: 'case',
    context: t(
      "Raúl dejó de pagar $8,000 de un impuesto federal y lo paga 3 meses tarde, de forma espontánea. Usa un factor de actualización de 1.0400 y una tasa de recargos hipotética de 2 % mensual.",
      "Raúl failed to pay $8,000 of a federal tax and pays it 3 months late, voluntarily. Use an adjustment factor of 1.0400 and a hypothetical surcharge rate of 2 % a month.",
    ),
    prompt: t(
      "Calcula la contribución actualizada, los recargos y el total a pagar (en pesos, 2 decimales).",
      "Compute the adjusted contribution, the surcharges and the total to pay (in pesos, 2 decimals).",
    ),
    fields: [
      { id: 'f1', label: t("Contribución actualizada ($)", "Adjusted contribution ($)"), answer: 8320, unit: 'MXN', tolerance: { abs: 0.5 } },
      { id: 'f2', label: t("Recargos ($)", "Surcharges ($)"), answer: 499.2, unit: 'MXN', tolerance: { abs: 0.5 } },
      { id: 'f3', label: t("Total a pagar ($)", "Total to pay ($)"), answer: 8819.2, unit: 'MXN', tolerance: { abs: 0.5 } },
    ],
    explanation: t(
      "Actualizada: 8,000 × 1.04 = $8,320. Recargos: 8,320 × (2 % × 3) = 8,320 × 0.06 = $499.20. Total: 8,320 + 499.20 = $8,819.20. Error común: calcular los recargos sobre $8,000 (480) en vez de sobre lo actualizado.",
      "Adjusted: 8,000 × 1.04 = $8,320. Surcharges: 8,320 × (2 % × 3) = 8,320 × 0.06 = $499.20. Total: 8,320 + 499.20 = $8,819.20. Common mistake: computing surcharges on $8,000 (480) instead of the adjusted amount.",
    ),
    difficulty: 2,
    points: 15,
    competency: 'tax-code',
  },
  {
    id: 'FIS-03-E3',
    level: 5,
    module: 'FIS-03',
    kind: 'truefalse',
    flavor: 'concept',
    prompt: t(
      "Los recargos por pago tardío se calculan sobre la contribución original, sin actualizar.",
      "Late-payment surcharges are computed on the original contribution, without adjustment.",
    ),
    answer: false,
    explanation: t(
      "Falso. Primero se actualiza la contribución por inflación y los recargos se calculan sobre esa cantidad actualizada. Error común: sumar actualización y recargos calculados ambos sobre el monto original, lo que da un total menor al correcto.",
      "False. The contribution is first adjusted for inflation and surcharges are computed on that adjusted amount. Common mistake: adding an adjustment and surcharges both computed on the original amount, which gives a total lower than the correct one.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'tax-code',
  },
  {
    id: 'FIS-03-E4',
    level: 5,
    module: 'FIS-03',
    kind: 'formula',
    flavor: 'concept',
    prompt: t(
      "Completa la fórmula de los recargos por pagar tarde una contribución federal.",
      "Complete the formula for surcharges when paying a federal contribution late.",
    ),
    template: 'Recargos / Surcharges = {{b1}} × {{b2}} × {{b3}}',
    blanks: [
      {
        id: 'b1',
        options: [
          { id: 'FIS-03-E4-b1-a', text: t("Contribución original sin actualizar", "Original contribution without adjustment") },
          { id: 'FIS-03-E4-b1-b', text: t("Contribución actualizada", "Adjusted contribution") },
          { id: 'FIS-03-E4-b1-c', text: t("Ingresos del año", "Year's income") },
        ],
        correctOptionId: 'FIS-03-E4-b1-b',
      },
      {
        id: 'b2',
        options: [
          { id: 'FIS-03-E4-b2-a', text: t("Tasa mensual de recargos", "Monthly surcharge rate") },
          { id: 'FIS-03-E4-b2-b', text: t("Tasa del IVA", "VAT rate") },
          { id: 'FIS-03-E4-b2-c', text: t("Factor de actualización", "Adjustment factor") },
        ],
        correctOptionId: 'FIS-03-E4-b2-a',
      },
      {
        id: 'b3',
        options: [
          { id: 'FIS-03-E4-b3-a', text: t("Días hábiles del año", "Business days in the year") },
          { id: 'FIS-03-E4-b3-b', text: t("Meses (o fracción) de atraso", "Months (or fraction) of delay") },
          { id: 'FIS-03-E4-b3-c', text: t("Número de declaraciones presentadas", "Number of returns filed") },
        ],
        correctOptionId: 'FIS-03-E4-b3-b',
      },
    ],
    explanation: t(
      "Recargos = contribución actualizada × tasa mensual de recargos × meses (o fracción) de atraso. El factor de actualización ya se usó para obtener la contribución actualizada; no se vuelve a multiplicar. Error común: usar la contribución sin actualizar.",
      "Surcharges = adjusted contribution × monthly surcharge rate × months (or fraction) of delay. The adjustment factor was already used to get the adjusted contribution; it is not multiplied again. Common mistake: using the unadjusted contribution.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'tax-code',
  },
  {
    id: 'FIS-03-E5',
    level: 5,
    module: 'FIS-03',
    kind: 'classify',
    flavor: 'concept',
    prompt: t(
      "Clasifica cada enunciado como obligación o como derecho del contribuyente.",
      "Classify each statement as a taxpayer obligation or a taxpayer right.",
    ),
    categories: [
      { id: 'FIS-03-E5-c1', label: t("Obligación", "Obligation") },
      { id: 'FIS-03-E5-c2', label: t("Derecho", "Right") },
    ],
    items: [
      { id: 'FIS-03-E5-i1', label: t("Presentar tus declaraciones en tiempo", "File your returns on time"), correctCategoryId: 'FIS-03-E5-c1' },
      { id: 'FIS-03-E5-i2', label: t("Recibir orientación gratuita de la autoridad", "Receive free guidance from the authority"), correctCategoryId: 'FIS-03-E5-c2' },
      { id: 'FIS-03-E5-i3', label: t("Conservar tu documentación fiscal durante el plazo legal", "Keep your tax records for the legal period"), correctCategoryId: 'FIS-03-E5-c1' },
      { id: 'FIS-03-E5-i4', label: t("Impugnar una resolución con la que no estás de acuerdo", "Challenge a decision you disagree with"), correctCategoryId: 'FIS-03-E5-c2' },
      { id: 'FIS-03-E5-i5', label: t("Avisar al SAT cuando cambias tu domicilio fiscal", "Notify the SAT when you change your tax address"), correctCategoryId: 'FIS-03-E5-c1' },
      { id: 'FIS-03-E5-i6', label: t("Acudir a la PRODECON con una queja contra la autoridad", "Go to PRODECON with a complaint against the authority"), correctCategoryId: 'FIS-03-E5-c2' },
    ],
    explanation: t(
      "Declarar, conservar documentos y avisar cambios son obligaciones que el CFF te impone. Recibir orientación, impugnar y acudir a PRODECON son derechos que te protegen. Error común: creer que el contribuyente solo tiene obligaciones y no puede defenderse.",
      "Filing, keeping records and reporting changes are obligations the CFF imposes. Receiving guidance, challenging decisions and going to PRODECON are rights that protect you. Common mistake: believing taxpayers only have obligations and cannot defend themselves.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'tax-code',
  },
  {
    id: 'FIS-03-E6',
    level: 5,
    module: 'FIS-03',
    kind: 'mcq',
    flavor: 'case',
    context: t(
      "Luis, carpintero, descubre que olvidó pagar un impuesto mensual de hace dos meses. El SAT todavía no le ha enviado ningún requerimiento.",
      "Luis, a carpenter, finds out he forgot to pay a monthly tax from two months ago. The SAT has not yet sent him any request.",
    ),
    prompt: t(
      "¿Qué le conviene hacer a Luis?",
      "What is Luis's best course of action?",
    ),
    options: [
      { id: 'FIS-03-E6-a', text: t("Esperar a que el SAT lo detecte, porque así no paga recargos", "Wait for the SAT to detect it, because then he pays no surcharges") },
      { id: 'FIS-03-E6-b', text: t("Pagar solo el impuesto original, sin actualización ni recargos", "Pay only the original tax, without adjustment or surcharges") },
      { id: 'FIS-03-E6-c', text: t("Pagar cuanto antes y de forma espontánea, con actualización y recargos", "Pay as soon as possible and voluntarily, with adjustment and surcharges") },
      { id: 'FIS-03-E6-d', text: t("Dar de baja su RFC para que el adeudo desaparezca", "Cancel his RFC so the debt disappears") },
    ],
    correctOptionId: 'FIS-03-E6-c',
    explanation: t(
      "Si paga espontáneamente, antes de que el SAT lo requiera, por regla general evita la multa y solo paga actualización y recargos, que crecen cada mes. Esperar aumenta el costo y puede traer multa; pagar sin accesorios deja un adeudo; el RFC no borra deudas. Error común: pensar que esperar es gratis.",
      "If he pays voluntarily, before the SAT asks, he generally avoids a fine and only pays the adjustment and surcharges, which grow every month. Waiting increases the cost and may bring a fine; paying without accessories leaves a debt; the RFC does not erase debts. Common mistake: thinking waiting is free.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'tax-code',
  },

  // ═════════════════════════ FIS-04 ═════════════════════════
  {
    id: 'FIS-04-E1',
    level: 5,
    module: 'FIS-04',
    kind: 'mcq',
    flavor: 'concept',
    prompt: t(
      "¿Qué grava el Impuesto sobre la Renta?",
      "What does Income Tax (ISR) tax?",
    ),
    options: [
      { id: 'FIS-04-E1-a', text: t("El consumo de bienes y servicios", "Consumption of goods and services") },
      { id: 'FIS-04-E1-b', text: t("La propiedad de casas y terrenos", "Ownership of houses and land") },
      { id: 'FIS-04-E1-c', text: t("Los ingresos que aumentan el patrimonio de personas y empresas", "Income that increases the wealth of people and companies") },
      { id: 'FIS-04-E1-d', text: t("Los sueldos que paga una empresa, con cargo a la empresa", "Wages a company pays, charged to the company") },
    ],
    correctOptionId: 'FIS-04-E1-c',
    explanation: t(
      "El ISR grava los ingresos: sueldos, honorarios, rentas, ganancias de negocio, intereses, premios. El consumo lo grava el IVA, la propiedad el predial y la nómina a cargo del patrón el impuesto estatal sobre nóminas. Error común: confundir ISR con impuesto sobre nóminas.",
      "ISR taxes income: wages, professional fees, rent, business profits, interest, prizes. Consumption is taxed by VAT, property by predial, and payroll charged to the employer by the state payroll tax. Common mistake: confusing ISR with payroll tax.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'income-tax',
  },
  {
    id: 'FIS-04-E2',
    level: 5,
    module: 'FIS-04',
    kind: 'numeric',
    flavor: 'case',
    context: t(
      "Una empresa (persona moral) tiene una base gravable de $400,000 en el año. Aplica la tasa general de ISR para personas morales.",
      "A company (legal entity) has a taxable base of $400,000 for the year. Apply the general ISR rate for legal entities.",
    ),
    prompt: t(
      "¿Cuánto ISR anual le corresponde, antes de restar pagos provisionales? Responde en pesos.",
      "How much annual ISR does it owe, before subtracting provisional payments? Answer in pesos.",
    ),
    answer: 120000,
    unit: 'MXN',
    decimals: 0,
    tolerance: { abs: 0.5 },
    explanation: t(
      "Las personas morales aplican por regla general una tasa fija de 30 %: 400,000 × 0.30 = $120,000. Error común: usar una tarifa progresiva, que es para personas físicas, o aplicar 16 %, que es la tasa general de IVA.",
      "Legal entities generally apply a flat 30 % rate: 400,000 × 0.30 = $120,000. Common mistake: using a progressive schedule, which is for individuals, or applying 16 %, which is the general VAT rate.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'income-tax',
  },
  {
    id: 'FIS-04-E3',
    level: 5,
    module: 'FIS-04',
    kind: 'fields',
    flavor: 'case',
    context: t(
      "Tarifa hipotética. Renglón aplicable: límite inferior $15,000, cuota fija $1,200 y 15 % sobre el excedente. La base gravable de Carmen es $18,000.",
      "Hypothetical schedule. Applicable bracket: lower limit $15,000, fixed fee $1,200 and 15 % on the excess. Carmen's taxable base is $18,000.",
    ),
    prompt: t(
      "Calcula el excedente, el impuesto marginal, el ISR y la tasa efectiva (en %, 2 decimales).",
      "Compute the excess, the marginal tax, the ISR and the effective rate (in %, 2 decimals).",
    ),
    fields: [
      { id: 'f1', label: t("Excedente sobre el límite inferior ($)", "Excess over the lower limit ($)"), answer: 3000, unit: 'MXN', tolerance: { abs: 0.5 } },
      { id: 'f2', label: t("Impuesto marginal ($)", "Marginal tax ($)"), answer: 450, unit: 'MXN', tolerance: { abs: 0.5 } },
      { id: 'f3', label: t("ISR ($)", "ISR ($)"), answer: 1650, unit: 'MXN', tolerance: { abs: 0.5 } },
      { id: 'f4', label: t("Tasa efectiva (%)", "Effective rate (%)"), answer: 9.17, unit: '%', tolerance: { abs: 0.01 } },
    ],
    explanation: t(
      "Excedente: 18,000 − 15,000 = $3,000. Marginal: 3,000 × 0.15 = $450. ISR: 1,200 + 450 = $1,650. Tasa efectiva: 1,650 ÷ 18,000 = 9.17 %. Error común: aplicar el 15 % a toda la base (2,700) y olvidar la cuota fija.",
      "Excess: 18,000 − 15,000 = $3,000. Marginal: 3,000 × 0.15 = $450. ISR: 1,200 + 450 = $1,650. Effective rate: 1,650 ÷ 18,000 = 9.17 %. Common mistake: applying 15 % to the whole base (2,700) and forgetting the fixed fee.",
    ),
    difficulty: 2,
    points: 15,
    competency: 'income-tax',
  },
  {
    id: 'FIS-04-E4',
    level: 5,
    module: 'FIS-04',
    kind: 'truefalse',
    flavor: 'concept',
    prompt: t(
      "Con una tarifa progresiva, si tu ingreso sube al siguiente renglón, todo tu ingreso pasa a pagar el porcentaje más alto.",
      "With a progressive schedule, if your income moves up to the next bracket, all your income starts paying the higher percentage.",
    ),
    answer: false,
    explanation: t(
      "Falso. El porcentaje más alto solo se aplica al excedente sobre el límite inferior del nuevo renglón; lo de abajo ya está cubierto por la cuota fija. Por eso un aumento de sueldo nunca reduce tu ingreso después de ISR. Error común: rechazar un aumento por miedo a \"brincar de tasa\".",
      "False. The higher percentage only applies to the excess over the new bracket's lower limit; the lower part is already covered by the fixed fee. That is why a raise never reduces your after-tax income. Common mistake: turning down a raise for fear of \"jumping brackets\".",
    ),
    difficulty: 1,
    points: 10,
    competency: 'income-tax',
  },
  {
    id: 'FIS-04-E5',
    level: 5,
    module: 'FIS-04',
    kind: 'classify',
    flavor: 'concept',
    prompt: t(
      "Clasifica cada situación según la forma en que se paga el ISR.",
      "Classify each situation by how the ISR is paid.",
    ),
    categories: [
      { id: 'FIS-04-E5-c1', label: t("Retención", "Withholding") },
      { id: 'FIS-04-E5-c2', label: t("Pago provisional", "Provisional payment") },
      { id: 'FIS-04-E5-c3', label: t("Declaración anual", "Annual return") },
    ],
    items: [
      { id: 'FIS-04-E5-i1', label: t("El patrón descuenta ISR de tu nómina quincenal", "Your employer deducts ISR from your biweekly payroll"), correctCategoryId: 'FIS-04-E5-c1' },
      { id: 'FIS-04-E5-i2', label: t("El banco descuenta ISR de los intereses de tu cuenta", "The bank deducts ISR from your account's interest"), correctCategoryId: 'FIS-04-E5-c1' },
      { id: 'FIS-04-E5-i3', label: t("Una empresa entera cada mes un anticipo a cuenta del ISR del año", "A company pays a monthly advance on account of the year's ISR"), correctCategoryId: 'FIS-04-E5-c2' },
      { id: 'FIS-04-E5-i4', label: t("Una traductora independiente paga cada mes un anticipo de ISR por sus honorarios", "A freelance translator pays a monthly ISR advance on her fees"), correctCategoryId: 'FIS-04-E5-c2' },
      { id: 'FIS-04-E5-i5', label: t("Se calcula el ISR de todo el año y se resta lo ya pagado", "The whole year's ISR is computed and what was already paid is subtracted"), correctCategoryId: 'FIS-04-E5-c3' },
      { id: 'FIS-04-E5-i6', label: t("Momento en que puede resultar un saldo a favor para devolución", "Moment when a refundable balance may result"), correctCategoryId: 'FIS-04-E5-c3' },
    ],
    explanation: t(
      "Retención: otro (patrón, banco) descuenta y entera por ti. Pago provisional: tú mismo adelantas cada mes, como empresa o persona con actividad. Anual: el ajuste final que puede dar saldo a cargo o a favor. Error común: creer que la retención es un impuesto adicional, cuando es un anticipo del mismo ISR.",
      "Withholding: someone else (employer, bank) deducts and remits for you. Provisional payment: you advance it yourself each month, as a company or person with an activity. Annual: the final adjustment that may give a balance due or in your favor. Common mistake: believing withholding is an extra tax, when it is an advance of the same ISR.",
    ),
    difficulty: 1,
    points: 15,
    competency: 'income-tax',
  },
  {
    id: 'FIS-04-E6',
    level: 5,
    module: 'FIS-04',
    kind: 'mcq',
    flavor: 'case',
    context: t(
      "En su declaración anual, Martha calcula un ISR del año de $35,000. Su patrón le retuvo durante el año $38,200 y no hizo pagos provisionales.",
      "In her annual return, Martha computes a year's ISR of $35,000. Her employer withheld $38,200 during the year and she made no provisional payments.",
    ),
    prompt: t(
      "¿Cuál es el resultado de la declaración anual de Martha?",
      "What is the result of Martha's annual return?",
    ),
    options: [
      { id: 'FIS-04-E6-a', text: t("Saldo a cargo de $3,200", "Balance due of $3,200") },
      { id: 'FIS-04-E6-b', text: t("Saldo a favor de $3,200", "Refundable balance of $3,200") },
      { id: 'FIS-04-E6-c', text: t("Saldo a favor de $73,200", "Refundable balance of $73,200") },
      { id: 'FIS-04-E6-d', text: t("Ni a cargo ni a favor, porque ya le retuvieron", "Neither due nor refundable, because tax was already withheld") },
    ],
    correctOptionId: 'FIS-04-E6-b',
    explanation: t(
      "Saldo = 35,000 − 38,200 = −3,200. Como le retuvieron más de lo que debía, tiene saldo a favor de $3,200 que puede solicitar en devolución. Error común: invertir el signo y pensar que debe pagar, o sumar ambas cantidades.",
      "Balance = 35,000 − 38,200 = −3,200. Since more was withheld than she owed, she has a $3,200 refundable balance she can request back. Common mistake: flipping the sign and thinking she owes, or adding both amounts.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'income-tax',
  },

  // ═════════════════════════ FIS-05 ═════════════════════════
  {
    id: 'FIS-05-E1',
    level: 5,
    module: 'FIS-05',
    kind: 'classify',
    flavor: 'concept',
    prompt: t(
      "Clasifica cada ingreso de una persona física en el capítulo de la LISR que le corresponde.",
      "Classify each individual's income into the LISR chapter it belongs to.",
    ),
    categories: [
      { id: 'FIS-05-E1-c1', label: t("Salarios", "Wages") },
      { id: 'FIS-05-E1-c2', label: t("Actividades empresariales y profesionales", "Business and professional activities") },
      { id: 'FIS-05-E1-c3', label: t("Arrendamiento", "Leasing") },
      { id: 'FIS-05-E1-c4', label: t("Intereses", "Interest") },
    ],
    items: [
      { id: 'FIS-05-E1-i1', label: t("Sueldo de un contador empleado en un despacho", "Salary of an accountant employed at a firm"), correctCategoryId: 'FIS-05-E1-c1' },
      { id: 'FIS-05-E1-i2', label: t("Aguinaldo que paga el patrón en diciembre", "Christmas bonus paid by the employer in December"), correctCategoryId: 'FIS-05-E1-c1' },
      { id: 'FIS-05-E1-i3', label: t("Renta mensual que cobra el dueño de un local comercial", "Monthly rent collected by the owner of a commercial unit"), correctCategoryId: 'FIS-05-E1-c3' },
      { id: 'FIS-05-E1-i4', label: t("Honorarios de una diseñadora gráfica independiente", "Fees of a freelance graphic designer"), correctCategoryId: 'FIS-05-E1-c2' },
      { id: 'FIS-05-E1-i5', label: t("Rendimientos de un pagaré bancario", "Returns on a bank promissory note"), correctCategoryId: 'FIS-05-E1-c4' },
      { id: 'FIS-05-E1-i6', label: t("Ventas de un taller de herrería propio", "Sales of one's own ironwork shop"), correctCategoryId: 'FIS-05-E1-c2' },
    ],
    explanation: t(
      "Sueldo y aguinaldo vienen de una relación laboral: salarios. Honorarios y ventas de un negocio propio: actividades empresariales y profesionales. La renta del local: arrendamiento. El pagaré: intereses. Error común: poner los honorarios en salarios; quien trabaja por su cuenta no es asalariado.",
      "Salary and Christmas bonus come from an employment relationship: wages. Fees and sales of one's own business: business and professional activities. Rent on the unit: leasing. The promissory note: interest. Common mistake: placing professional fees under wages; a self-employed person is not an employee.",
    ),
    difficulty: 1,
    points: 15,
    competency: 'income-tax-law',
  },
  {
    id: 'FIS-05-E2',
    level: 5,
    module: 'FIS-05',
    kind: 'multi',
    flavor: 'concept',
    prompt: t(
      "¿Cuáles son requisitos generales para que un gasto de negocio sea deducible de ISR? Selecciona todas las que apliquen.",
      "Which are general requirements for a business expense to be deductible for ISR? Select all that apply.",
    ),
    options: [
      { id: 'FIS-05-E2-a', text: t("Ser estrictamente indispensable para la actividad", "Being strictly indispensable for the activity") },
      { id: 'FIS-05-E2-b', text: t("Estar respaldado con un CFDI a nombre del contribuyente", "Being backed by a CFDI in the taxpayer's name") },
      { id: 'FIS-05-E2-c', text: t("Pagarse siempre en efectivo para que quede comprobado", "Always being paid in cash so it is proven") },
      { id: 'FIS-05-E2-d', text: t("Si supera $2,000, pagarse por transferencia, tarjeta o cheque nominativo", "If over $2,000, being paid by transfer, card or nominative check") },
      { id: 'FIS-05-E2-e', text: t("Ser un gasto personal del dueño pagado con la cuenta del negocio", "Being the owner's personal expense paid from the business account") },
    ],
    correctOptionIds: ['FIS-05-E2-a', 'FIS-05-E2-b', 'FIS-05-E2-d'],
    explanation: t(
      "Indispensable, con CFDI y, arriba de $2,000, pagado por medio electrónico o cheque nominativo. El efectivo arriba de ese monto impide deducir, y los gastos personales del dueño no son del negocio. Error común: creer que con tener factura basta.",
      "Indispensable, with a CFDI and, above $2,000, paid electronically or by nominative check. Cash above that amount prevents the deduction, and the owner's personal expenses are not business expenses. Common mistake: believing having an invoice is enough.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'income-tax-law',
  },
  {
    id: 'FIS-05-E3',
    level: 5,
    module: 'FIS-05',
    kind: 'fields',
    flavor: 'case',
    context: t(
      "Datos hipotéticos de Distribuidora Norte, S.A. de C.V.: ingresos acumulables $3,200,000; deducciones autorizadas $2,500,000; PTU pagada $40,000; pérdidas fiscales de años anteriores pendientes $160,000.",
      "Hypothetical data for Distribuidora Norte, S.A. de C.V.: accruable income $3,200,000; authorized deductions $2,500,000; PTU paid $40,000; pending prior-year tax losses $160,000.",
    ),
    prompt: t(
      "Calcula la utilidad fiscal, el resultado fiscal y el ISR del ejercicio (tasa 30 %).",
      "Compute the taxable profit, the taxable result and the year's ISR (30 % rate).",
    ),
    fields: [
      { id: 'f1', label: t("Utilidad fiscal ($)", "Taxable profit ($)"), answer: 660000, unit: 'MXN', tolerance: { abs: 0.5 } },
      { id: 'f2', label: t("Resultado fiscal ($)", "Taxable result ($)"), answer: 500000, unit: 'MXN', tolerance: { abs: 0.5 } },
      { id: 'f3', label: t("ISR del ejercicio ($)", "Year's ISR ($)"), answer: 150000, unit: 'MXN', tolerance: { abs: 0.5 } },
    ],
    explanation: t(
      "Utilidad fiscal: 3,200,000 − 2,500,000 − 40,000 = $660,000. Resultado fiscal: 660,000 − 160,000 = $500,000. ISR: 500,000 × 0.30 = $150,000. Error común: aplicar el 30 % a la utilidad fiscal sin restar las pérdidas (198,000).",
      "Taxable profit: 3,200,000 − 2,500,000 − 40,000 = $660,000. Taxable result: 660,000 − 160,000 = $500,000. ISR: 500,000 × 0.30 = $150,000. Common mistake: applying 30 % to taxable profit without subtracting losses (198,000).",
    ),
    difficulty: 2,
    points: 15,
    competency: 'income-tax-law',
  },
  {
    id: 'FIS-05-E4',
    level: 5,
    module: 'FIS-05',
    kind: 'truefalse',
    flavor: 'concept',
    prompt: t(
      "La Resolución Miscelánea Fiscal se publica una sola vez y sus reglas no cambian durante el año.",
      "The Miscellaneous Tax Resolution is published only once and its rules do not change during the year.",
    ),
    answer: false,
    explanation: t(
      "Falso. La RMF se publica cada año y suele modificarse varias veces durante el año. Por eso hay que revisar la versión vigente al aplicar una regla. Error común: usar una regla de un año anterior sin verificar si sigue vigente.",
      "False. The RMF is published every year and is usually amended several times during the year. That is why you must check the current version when applying a rule. Common mistake: using a prior year's rule without checking whether it still applies.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'income-tax-law',
  },
  {
    id: 'FIS-05-E5',
    level: 5,
    module: 'FIS-05',
    kind: 'mcq',
    flavor: 'concept',
    prompt: t(
      "¿En qué título de la LISR se regulan los ingresos de las personas físicas?",
      "In which title of the LISR is the income of individuals regulated?",
    ),
    options: [
      { id: 'FIS-05-E5-a', text: t("Título II", "Title II") },
      { id: 'FIS-05-E5-b', text: t("Título III", "Title III") },
      { id: 'FIS-05-E5-c', text: t("Título IV", "Title IV") },
      { id: 'FIS-05-E5-d', text: t("Título V", "Title V") },
    ],
    correctOptionId: 'FIS-05-E5-c',
    explanation: t(
      "Las personas físicas están en el Título IV. El Título II es de personas morales, el III de personas morales con fines no lucrativos y el V de residentes en el extranjero. Error común: buscar en el Título II las reglas de un trabajador independiente.",
      "Individuals are in Title IV. Title II is for legal entities, Title III for non-profit legal entities and Title V for foreign residents. Common mistake: looking in Title II for the rules of a self-employed worker.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'income-tax-law',
  },
  {
    id: 'FIS-05-E6',
    level: 5,
    module: 'FIS-05',
    kind: 'mcq',
    flavor: 'case',
    context: t(
      "Un taller mecánico compra refacciones por $4,500. El proveedor le da CFDI correcto, pero el taller paga en efectivo.",
      "A car repair shop buys spare parts for $4,500. The supplier gives a correct CFDI, but the shop pays in cash.",
    ),
    prompt: t(
      "¿Puede el taller deducir esa compra para ISR?",
      "Can the shop deduct that purchase for ISR?",
    ),
    options: [
      { id: 'FIS-05-E6-a', text: t("Sí, porque tiene CFDI", "Yes, because it has a CFDI") },
      { id: 'FIS-05-E6-b', text: t("Sí, porque las refacciones son indispensables", "Yes, because the parts are indispensable") },
      { id: 'FIS-05-E6-c', text: t("Solo la mitad, por haber pagado en efectivo", "Only half, because it was paid in cash") },
      { id: 'FIS-05-E6-d', text: t("No, porque pagó más de $2,000 en efectivo", "No, because it paid more than $2,000 in cash") },
    ],
    correctOptionId: 'FIS-05-E6-d',
    explanation: t(
      "Los requisitos se cumplen todos o el gasto no se deduce. Aunque es indispensable y tiene CFDI, un pago mayor a $2,000 debe hacerse por transferencia, tarjeta o cheque nominativo. No existe deducción \"a la mitad\". Error común: pensar que la factura sola basta para deducir.",
      "Requirements must all be met or the expense is not deductible. Although it is indispensable and has a CFDI, a payment over $2,000 must be made by transfer, card or nominative check. There is no \"half\" deduction. Common mistake: thinking the invoice alone is enough to deduct.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'income-tax-law',
  },

  // ═════════════════════════ FIS-06 ═════════════════════════
  {
    id: 'FIS-06-E1',
    level: 5,
    module: 'FIS-06',
    kind: 'mcq',
    flavor: 'concept',
    prompt: t(
      "En la cadena de producción y venta, ¿quién soporta económicamente el IVA al final?",
      "Along the production and sales chain, who ultimately bears the economic cost of VAT?",
    ),
    options: [
      { id: 'FIS-06-E1-a', text: t("El fabricante que inició la cadena", "The manufacturer that started the chain") },
      { id: 'FIS-06-E1-b', text: t("El consumidor final", "The final consumer") },
      { id: 'FIS-06-E1-c', text: t("La tienda que hace la última venta", "The store that makes the last sale") },
      { id: 'FIS-06-E1-d', text: t("El SAT, que lo devuelve a todos", "The SAT, which refunds it to everyone") },
    ],
    correctOptionId: 'FIS-06-E1-b',
    explanation: t(
      "Cada negocio cobra IVA y acredita el que pagó, así que solo entrega el IVA de su valor agregado. El consumidor final no puede acreditar: él carga el impuesto. Error común: pensar que la tienda lo paga de su bolsillo; solo lo recauda y lo entrega.",
      "Each business charges VAT and credits what it paid, so it only remits VAT on its added value. The final consumer cannot credit: they bear the tax. Common mistake: thinking the store pays it out of pocket; it only collects and remits it.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'vat',
  },
  {
    id: 'FIS-06-E2',
    level: 5,
    module: 'FIS-06',
    kind: 'fields',
    flavor: 'case',
    context: t(
      "En el mes, una ferretería cobró ventas por $180,000 más IVA y pagó compras y gastos del negocio por $95,000 más IVA, todos con CFDI y gravados al 16 %.",
      "During the month, a hardware store collected sales of $180,000 plus VAT and paid business purchases and expenses of $95,000 plus VAT, all with CFDI and taxed at 16 %.",
    ),
    prompt: t(
      "Calcula el IVA trasladado, el IVA acreditable y el IVA a pagar del mes.",
      "Compute the month's output VAT, input VAT and VAT payable.",
    ),
    fields: [
      { id: 'f1', label: t("IVA trasladado ($)", "Output VAT ($)"), answer: 28800, unit: 'MXN', tolerance: { abs: 0.5 } },
      { id: 'f2', label: t("IVA acreditable ($)", "Input VAT ($)"), answer: 15200, unit: 'MXN', tolerance: { abs: 0.5 } },
      { id: 'f3', label: t("IVA a pagar ($)", "VAT payable ($)"), answer: 13600, unit: 'MXN', tolerance: { abs: 0.5 } },
    ],
    explanation: t(
      "Trasladado: 180,000 × 0.16 = $28,800. Acreditable: 95,000 × 0.16 = $15,200. A pagar: 28,800 − 15,200 = $13,600. Error común: aplicar el 16 % a la diferencia de ventas menos compras y llamarlo \"utilidad\"; el IVA se calcula sobre cada flujo por separado.",
      "Output: 180,000 × 0.16 = $28,800. Input: 95,000 × 0.16 = $15,200. Payable: 28,800 − 15,200 = $13,600. Common mistake: treating sales minus purchases as \"profit\"; VAT is computed on each flow separately.",
    ),
    difficulty: 1,
    points: 15,
    competency: 'vat',
  },
  {
    id: 'FIS-06-E3',
    level: 5,
    module: 'FIS-06',
    kind: 'classify',
    flavor: 'concept',
    prompt: t(
      "Clasifica cada operación según su tratamiento general en IVA.",
      "Classify each transaction by its general VAT treatment.",
    ),
    categories: [
      { id: 'FIS-06-E3-c1', label: t("Tasa 16 %", "16 % rate") },
      { id: 'FIS-06-E3-c2', label: t("Tasa 0 %", "0 % rate") },
      { id: 'FIS-06-E3-c3', label: t("Exento", "Exempt") },
    ],
    items: [
      { id: 'FIS-06-E3-i1', label: t("Venta de un refrigerador", "Sale of a refrigerator"), correctCategoryId: 'FIS-06-E3-c1' },
      { id: 'FIS-06-E3-i2', label: t("Venta de tortillas en una tortillería", "Sale of tortillas at a tortilla shop"), correctCategoryId: 'FIS-06-E3-c2' },
      { id: 'FIS-06-E3-i3', label: t("Venta de medicinas de patente en una farmacia", "Sale of patent medicines at a pharmacy"), correctCategoryId: 'FIS-06-E3-c2' },
      { id: 'FIS-06-E3-i4', label: t("Renta de un departamento para vivir", "Renting an apartment to live in"), correctCategoryId: 'FIS-06-E3-c3' },
      { id: 'FIS-06-E3-i5', label: t("Colegiatura de una escuela con reconocimiento oficial", "Tuition at an officially recognized school"), correctCategoryId: 'FIS-06-E3-c3' },
      { id: 'FIS-06-E3-i6', label: t("Servicio de un plomero que arregla una fuga", "A plumber's service fixing a leak"), correctCategoryId: 'FIS-06-E3-c1' },
    ],
    explanation: t(
      "Refrigerador y servicio de plomería: tasa general de 16 %. Tortillas y medicinas de patente: tasa 0 %. Renta de casa habitación y colegiaturas con reconocimiento oficial: exentos. Error común: poner la renta de vivienda en 0 %; está exenta, y quien la renta no puede acreditar su IVA.",
      "Refrigerator and plumbing service: general 16 % rate. Tortillas and patent medicines: 0 % rate. Renting a dwelling and officially recognized tuition: exempt. Common mistake: placing home rental at 0 %; it is exempt, and the landlord cannot credit their VAT.",
    ),
    difficulty: 2,
    points: 15,
    competency: 'vat',
  },
  {
    id: 'FIS-06-E4',
    level: 5,
    module: 'FIS-06',
    kind: 'numeric',
    flavor: 'case',
    context: t(
      "Compras una impresora por $3,480 con IVA incluido a la tasa del 16 %.",
      "You buy a printer for $3,480 with VAT included at the 16 % rate.",
    ),
    prompt: t(
      "¿Cuánto IVA viene incluido en el precio de la impresora? Responde en pesos.",
      "How much VAT is included in the printer's price? Answer in pesos.",
    ),
    answer: 480,
    unit: 'MXN',
    decimals: 0,
    tolerance: { abs: 0.5 },
    explanation: t(
      "Base: 3,480 ÷ 1.16 = $3,000. IVA: 3,480 − 3,000 = $480 (o 3,000 × 0.16). Error común: multiplicar 3,480 × 0.16 = $556.80, que calcula IVA sobre un precio que ya lo trae.",
      "Base: 3,480 ÷ 1.16 = $3,000. VAT: 3,480 − 3,000 = $480 (or 3,000 × 0.16). Common mistake: multiplying 3,480 × 0.16 = $556.80, which computes VAT on a price that already includes it.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'vat',
  },
  {
    id: 'FIS-06-E5',
    level: 5,
    module: 'FIS-06',
    kind: 'truefalse',
    flavor: 'concept',
    prompt: t(
      "Vender a tasa 0 % de IVA y realizar actos exentos tiene el mismo efecto para el negocio.",
      "Selling at the 0 % VAT rate and carrying out exempt acts have the same effect for the business.",
    ),
    answer: false,
    explanation: t(
      "Falso. En ambos casos el cliente no paga IVA, pero con tasa 0 % el negocio sí acredita el IVA de sus compras (y puede tener saldo a favor), mientras que con actos exentos no puede acreditarlo y se vuelve costo. Error común: tratar \"0 %\" y \"exento\" como sinónimos.",
      "False. In both cases the customer pays no VAT, but at the 0 % rate the business can credit the VAT on its purchases (and may have a balance in its favor), while with exempt acts it cannot credit it and it becomes a cost. Common mistake: treating \"0 %\" and \"exempt\" as synonyms.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'vat',
  },
  {
    id: 'FIS-06-E6',
    level: 5,
    module: 'FIS-06',
    kind: 'multi',
    flavor: 'case',
    context: t(
      "Una estética (gravada al 16 %) revisa sus pagos del mes para saber de cuáles puede acreditar el IVA.",
      "A hair salon (taxed at 16 %) reviews its payments for the month to see which ones allow it to credit VAT.",
    ),
    prompt: t(
      "¿De cuáles pagos puede acreditar el IVA, por regla general? Selecciona todas las que apliquen.",
      "On which payments can it generally credit VAT? Select all that apply.",
    ),
    options: [
      { id: 'FIS-06-E6-a', text: t("Tintes y shampoo para el negocio, con CFDI y pagados por transferencia", "Dyes and shampoo for the business, with CFDI and paid by transfer") },
      { id: 'FIS-06-E6-b', text: t("Unas vacaciones familiares de la dueña, con CFDI", "The owner's family vacation, with CFDI") },
      { id: 'FIS-06-E6-c', text: t("Una secadora profesional sin CFDI, comprada en un tianguis", "A professional hair dryer without CFDI, bought at a street market") },
      { id: 'FIS-06-E6-d', text: t("Una computadora para las citas del negocio, con CFDI y pagada con tarjeta", "A computer for the business's appointments, with CFDI and paid by card") },
      { id: 'FIS-06-E6-e', text: t("Una factura de toallas que el negocio aún no ha pagado", "An invoice for towels the business has not yet paid") },
    ],
    correctOptionIds: ['FIS-06-E6-a', 'FIS-06-E6-d'],
    explanation: t(
      "Para acreditar, el gasto debe ser del negocio (deducible para ISR), tener CFDI con IVA desglosado y estar efectivamente pagado. Las vacaciones son personales, la secadora no tiene CFDI y las toallas aún no se pagan (el IVA se acredita cuando se paga). Error común: acreditar el IVA de una factura recibida pero no pagada.",
      "To credit, the expense must belong to the business (deductible for ISR), have a CFDI with itemized VAT and be actually paid. The vacation is personal, the dryer has no CFDI and the towels are not yet paid (VAT is credited when paid). Common mistake: crediting VAT on an invoice received but not paid.",
    ),
    difficulty: 2,
    points: 15,
    competency: 'vat',
  },
]
