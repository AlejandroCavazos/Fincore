import type { Exercise, Lesson } from '../../types'

/** Bilingual text helper (plain data). */
const t = (es: string, en: string) => ({ es, en })

const NOTE_TAX = (refs: string) =>
  t(
    "Jurisdicción: México. Contenido educativo, no constituye asesoría fiscal. Referencias: " +
      refs +
      ". Las tasas, plazos y requisitos deben verificarse contra la LISR, LIVA, CFF, la Resolución Miscelánea Fiscal (RMF) y el DOF vigentes a la fecha del contenido (2026). Las cifras de los ejemplos son ilustrativas y no representan contribuyentes reales.",
    "Jurisdiction: Mexico. Educational content, not tax advice. References: " +
      refs +
      ". Rates, deadlines and requirements must be verified against the LISR, LIVA, CFF, the Resolución Miscelánea Fiscal (RMF) and the DOF in force as of the content date (2026). Figures in the examples are illustrative and do not represent real taxpayers."
  )

const NOTE_AUDIT = (refs: string) =>
  t(
    "Jurisdicción: México (Normas Internacionales de Auditoría, NIA, emitidas por el IAASB y adoptadas en México a través del IMCP) y marco internacional. Contenido educativo. Referencias: " +
      refs +
      ". Verifica la versión vigente de las normas a la fecha del contenido (2026). Los porcentajes y cifras de los ejemplos son ilustrativos, no reglas obligatorias.",
    "Jurisdiction: Mexico (International Standards on Auditing, ISA/NIA, issued by the IAASB and adopted in Mexico through the IMCP) and international framework. Educational content. References: " +
      refs +
      ". Verify the version of the standards in force as of the content date (2026). Percentages and figures in the examples are illustrative, not mandatory rules."
  )

export const lessons: Lesson[] = [
  // ───────────────────────────── L5-01 ─────────────────────────────
  {
    id: "L5-01",
    level: 5,
    topicIds: ["5.1", "5.5"],
    title: t("Sistema fiscal mexicano y obligaciones fiscales", "The Mexican tax system and tax obligations"),
    summary: t(
      "Conoce quién recauda los impuestos federales en México, qué leyes los regulan y cuáles son las obligaciones básicas de un contribuyente: RFC, e.firma, declaraciones y contabilidad electrónica.",
      "Learn who collects federal taxes in Mexico, which laws govern them and the basic obligations of a taxpayer: RFC, e.firma, tax returns and electronic accounting."
    ),
    minutes: 15,
    objectives: [
      t("Identificar a las autoridades y ordenamientos del sistema fiscal federal mexicano.", "Identify the authorities and legal instruments of Mexico's federal tax system."),
      t("Distinguir obligaciones sustantivas (pagar) de obligaciones formales (hacer o informar).", "Distinguish substantive obligations (paying) from formal obligations (doing or reporting)."),
      t("Explicar la función del RFC, la e.firma y el certificado de sello digital.", "Explain the purpose of the RFC, the e.firma and the digital seal certificate."),
      t("Describir de forma general qué es la contabilidad electrónica y las declaraciones periódicas.", "Describe in general terms what electronic accounting and periodic tax returns are."),
    ],
    theory: [
      {
        heading: t("Fundamento y autoridades", "Legal basis and authorities"),
        body: [
          t(
            "En palabras sencillas: los **impuestos** son la parte de tus ingresos que la ley te pide entregar al gobierno para pagar escuelas, hospitales, carreteras y demás gastos públicos. Aquí verás de dónde sale esa obligación y quién cobra.",
            "In plain words: **taxes** are the part of your income that the law asks you to hand over to the government to pay for schools, hospitals, roads and other public spending. Here you will see where that obligation comes from and who collects it."
          ),
          t(
            "La obligación de contribuir al gasto público nace de la **Constitución** (art. 31, fracción IV), que exige que las contribuciones sean proporcionales y equitativas y que estén establecidas en ley. Cada año la **Ley de Ingresos de la Federación** enumera los ingresos que el gobierno federal espera recaudar.",
            "The obligation to contribute to public spending comes from the **Constitution** (art. 31, section IV), which requires taxes to be proportional, equitable and established by law. Each year the **Federal Revenue Law** (Ley de Ingresos de la Federación) lists the revenue the federal government expects to collect."
          ),
          t(
            "La Secretaría de Hacienda y Crédito Público (SHCP) diseña la política fiscal (decide qué impuestos conviene cobrar y cómo) y el **Servicio de Administración Tributaria (SAT)**, órgano desconcentrado de la SHCP (una oficina que depende de ella pero opera por su cuenta), recauda los impuestos federales, **fiscaliza** a los contribuyentes (revisa que paguen bien) y emite reglas operativas. Piensa en la SHCP como quien escribe las reglas del juego y en el SAT como el árbitro que cobra y vigila.",
            "The Ministry of Finance (SHCP) designs tax policy (decides which taxes to charge and how), and the **Tax Administration Service (SAT)**, a decentralized body of the SHCP (an office that reports to it but runs on its own), collects federal taxes, **audits** taxpayers (checks that they pay correctly) and issues operating rules. Think of the SHCP as the one who writes the rules of the game and the SAT as the referee who collects and watches."
          ),
        ],
      },
      {
        heading: t("Las leyes que debes ubicar", "The laws you need to know"),
        body: [
          t(
            "Las leyes de cada impuesto definen cinco cosas: **sujeto** (quién paga), **objeto** (por qué paga: vender, ganar dinero…), **base** (la cantidad sobre la que se calcula), **tasa** (el porcentaje que se aplica) y **época de pago** (cuándo se paga). El **Código Fiscal de la Federación (CFF)** contiene las reglas comunes a todos los impuestos federales: inscripción en el RFC, contabilidad, comprobantes fiscales, facultades de comprobación de la autoridad, infracciones y medios de defensa.",
            "Each tax law defines five things: the **taxpayer** (who pays), the **taxable event** (why they pay: selling, earning money…), the **base** (the amount the tax is calculated on), the **rate** (the percentage applied) and the **payment timing** (when it is paid). The **Federal Tax Code (CFF)** contains rules common to all federal taxes: RFC registration, accounting records, tax receipts, the authority's audit powers, penalties and appeals."
          ),
        ],
        bullets: [
          t("**LISR**: Ley del Impuesto sobre la Renta.", "**LISR**: Income Tax Law."),
          t("**LIVA**: Ley del Impuesto al Valor Agregado.", "**LIVA**: Value Added Tax Law."),
          t("**CFF**: disposiciones generales y procedimientos.", "**CFF**: general provisions and procedures."),
          t("**RMF**: Resolución Miscelánea Fiscal; reglas de carácter general emitidas por el SAT y publicadas en el DOF.", "**RMF**: Resolución Miscelánea Fiscal; general rules issued by the SAT and published in the DOF (Official Gazette)."),
        ],
      },
      {
        heading: t("Obligaciones sustantivas y formales", "Substantive and formal obligations"),
        body: [
          t(
            "En palabras sencillas: con el SAT tienes dos tipos de deberes, **pagar** y **cumplir trámites**. La **obligación sustantiva** es la de pagar el impuesto (dar). Las **obligaciones formales** son de hacer, no hacer o tolerar: inscribirse en el RFC, expedir comprobantes, llevar contabilidad, presentar declaraciones (incluso informativas o en ceros) y atender requerimientos.",
            "In plain words: with the SAT you have two kinds of duties, **paying** and **doing paperwork**. The **substantive obligation** is to pay the tax (to give). **Formal obligations** require doing, refraining or allowing: registering with the RFC, issuing receipts, keeping accounting records, filing returns (including informational or nil returns) and responding to requests from the authority."
          ),
          t(
            "Incumplir una obligación formal puede generar multas aunque no exista impuesto por pagar. Por eso el contador lleva un calendario de obligaciones: pagos provisionales mensuales de ISR, declaración mensual de IVA, declaración anual y declaraciones informativas.",
            "Failing a formal obligation can trigger penalties even when no tax is due. That is why accountants keep a compliance calendar: monthly ISR prepayments, the monthly IVA return, the annual return and informational returns."
          ),
        ],
      },
      {
        heading: t("RFC, e.firma, CSD y contabilidad electrónica", "RFC, e.firma, CSD and electronic accounting"),
        body: [
          t(
            "El **RFC** (Registro Federal de Contribuyentes) es la clave que identifica al contribuyente: 12 caracteres para **personas morales** (empresas y sociedades) y 13 para **personas físicas** (individuos). La **e.firma** es un certificado digital con validez de firma autógrafa para trámites y declaraciones; el **certificado de sello digital (CSD)** es distinto y se usa para sellar los CFDI (las facturas electrónicas) que la empresa emite. Dicho fácil: el RFC es tu \"CURP fiscal\", la e.firma es tu firma para trámites y el CSD es el \"sello\" que va en cada factura.",
            "The **RFC** (Federal Taxpayer Registry) is the code that identifies a taxpayer: 12 characters for **legal entities** (personas morales: companies) and 13 for **individuals** (personas físicas). The **e.firma** is a digital certificate equivalent to a handwritten signature for filings and procedures; the **digital seal certificate (CSD)** is different and is used to seal the CFDI (electronic invoices) the company issues. Put simply: the RFC is your \"tax ID\", the e.firma is your signature for procedures and the CSD is the \"stamp\" that goes on every invoice."
          ),
          t(
            "La **contabilidad electrónica** obliga, por regla general, a enviar al SAT por medios electrónicos el catálogo de cuentas (la lista de cuentas que usa la empresa, con el código agrupador del SAT) y la balanza de comprobación (un resumen de los saldos de todas las cuentas), y a tener las pólizas disponibles cuando la autoridad las solicite. El **buzón tributario** es el canal oficial de notificaciones electrónicas.",
            "**Electronic accounting** generally requires sending the SAT the chart of accounts (the list of accounts the company uses, mapped to the SAT grouping code) and the trial balance (a summary of every account's balance) electronically, and keeping journal entries available when the authority requests them. The **buzón tributario** (tax mailbox) is the official channel for electronic notices."
          ),
        ],
      },
    ],
    examples: [
      {
        title: t("Leer la parte de fecha de un RFC", "Reading the date segment of an RFC"),
        problem: t(
          "Una persona moral ficticia, «Comercial Arce, S.A. de C.V.», se constituyó el 15 de marzo de 2019. ¿Cuántos caracteres tiene su RFC y cómo se forma el segmento de fecha?",
          "A fictitious legal entity, «Comercial Arce, S.A. de C.V.», was incorporated on 15 March 2019. How many characters does its RFC have and how is the date segment built?"
        ),
        steps: [
          t("Persona moral: 3 letras derivadas de la denominación + 6 dígitos de fecha + 3 caracteres de homoclave = 12 caracteres.", "Legal entity: 3 letters from the name + 6 date digits + 3 homoclave characters = 12 characters."),
          t("La fecha se escribe AAMMDD: año 19, mes 03, día 15.", "The date is written YYMMDD: year 19, month 03, day 15."),
          t("Segmento de fecha: 190315. La homoclave la asigna el SAT.", "Date segment: 190315. The homoclave is assigned by the SAT."),
        ],
        result: t("RFC de 12 caracteres con fecha 190315 (una persona física tendría 13 caracteres).", "A 12-character RFC with date 190315 (an individual would have 13 characters)."),
      },
      {
        title: t("Armar un calendario básico de obligaciones", "Building a basic compliance calendar"),
        problem: t(
          "La misma empresa cierra su ejercicio el 31 de diciembre de 2025. Ubica, de forma ilustrativa, el plazo del pago provisional de ISR de octubre de 2025 y de la declaración anual de 2025.",
          "The same company closes its fiscal year on 31 December 2025. Illustratively, locate the deadline for the October 2025 ISR prepayment and for the 2025 annual return."
        ),
        steps: [
          t("Pagos provisionales mensuales: a más tardar el día 17 del mes siguiente → octubre 2025 se presenta a más tardar el 17 de noviembre de 2025.", "Monthly prepayments: no later than the 17th of the following month → October 2025 is filed by 17 November 2025."),
          t("Declaración anual de personas morales: dentro de los tres meses siguientes al cierre → a más tardar el 31 de marzo de 2026.", "Annual return for legal entities: within the three months after year-end → no later than 31 March 2026."),
          t("En un año hay 12 pagos provisionales de ISR, 12 declaraciones mensuales de IVA y 1 declaración anual: 25 declaraciones de estos tipos.", "In a year there are 12 ISR prepayments, 12 monthly IVA returns and 1 annual return: 25 returns of these types."),
        ],
        result: t("17 de noviembre de 2025 y 31 de marzo de 2026 (plazos a verificar contra la ley y la RMF vigentes; si vencen en día inhábil se recorren).", "17 November 2025 and 31 March 2026 (deadlines to be verified against current law and RMF; if they fall on a non-business day they move forward)."),
      },
    ],
    keyPoints: [
      t("El SAT recauda y fiscaliza; la SHCP diseña la política fiscal.", "The SAT collects and audits; the SHCP designs tax policy."),
      t("El CFF contiene las reglas comunes; LISR y LIVA regulan cada impuesto; la RMF detalla reglas operativas.", "The CFF holds common rules; LISR and LIVA govern each tax; the RMF details operating rules."),
      t("Pagar es la obligación sustantiva; inscribirse, facturar, llevar contabilidad y declarar son obligaciones formales.", "Paying is the substantive obligation; registering, invoicing, keeping records and filing are formal obligations."),
      t("e.firma y CSD son certificados distintos con usos distintos.", "The e.firma and the CSD are different certificates with different uses."),
    ],
    normativeNote: NOTE_TAX("Constitución Política (art. 31, fr. IV), Código Fiscal de la Federación, LISR, LIVA y RMF"),
    exerciseIds: ["N5-001", "N5-002", "N5-003", "N5-004", "N5-005", "N5-006"],
  },
  // ───────────────────────────── L5-02 ─────────────────────────────
  {
    id: "L5-02",
    level: 5,
    topicIds: ["5.2", "5.3", "5.4", "5.6"],
    title: t("ISR, IVA, CFDI y diferencias contables-fiscales", "ISR, IVA, CFDI and book-tax differences"),
    summary: t(
      "Calcula de forma simplificada el IVA a cargo y el ISR de una persona moral, entiende el papel del CFDI y distingue diferencias temporales de permanentes entre la utilidad contable y la fiscal.",
      "Compute, in simplified form, the IVA payable and the income tax of a legal entity, understand the role of the CFDI and distinguish temporary from permanent differences between book and taxable income."
    ),
    minutes: 20,
    objectives: [
      t("Calcular el IVA a cargo como IVA trasladado menos IVA acreditable.", "Compute IVA payable as output VAT minus creditable input VAT."),
      t("Registrar contablemente una operación con IVA.", "Record a transaction that includes IVA."),
      t("Estimar el ISR anual simplificado de una persona moral sobre su resultado fiscal.", "Estimate the simplified annual income tax of a legal entity on its taxable result."),
      t("Explicar qué es un CFDI y quién lo certifica.", "Explain what a CFDI is and who certifies it."),
      t("Clasificar diferencias contables-fiscales en temporales y permanentes.", "Classify book-tax differences as temporary or permanent."),
    ],
    theory: [
      {
        heading: t("IVA: un impuesto al consumo que la empresa traslada", "IVA: a consumption tax the business passes on"),
        body: [
          t(
            "En palabras sencillas: el IVA lo paga quien **consume**. La empresa solo funciona como intermediaria: le **cobra** el IVA a sus clientes, **resta** el IVA que ella misma pagó a sus proveedores y entrega la diferencia al SAT. Por eso, en un ticket de la tienda, verás \"subtotal\", \"IVA\" y \"total\".",
            "In plain words: IVA is paid by whoever **consumes**. The business only acts as a middleman: it **charges** IVA to its customers, **subtracts** the IVA it paid to its own suppliers and hands the difference to the SAT. That is why a store receipt shows \"subtotal\", \"IVA\" and \"total\"."
          ),
          t(
            "El IVA grava la enajenación de bienes, la prestación de servicios, el uso o goce temporal de bienes y la importación. La tasa general es **16 %**; ciertos bienes (por ejemplo, la mayoría de los alimentos) tributan a **0 %**, y existe un estímulo por decreto de 8 % en la región fronteriza. La empresa **traslada** el IVA a sus clientes y **acredita** el IVA que le trasladaron sus proveedores, siempre que cumpla requisitos (entre ellos, contar con CFDI y que el gasto sea deducible para ISR).",
            "IVA taxes sales of goods, services, temporary use of goods and imports. The general rate is **16 %**; certain goods (e.g. most food) are taxed at **0 %**, and an 8 % stimulus by decree applies in the border region. The business **charges** IVA to its customers and **credits** the IVA charged by its suppliers, provided it meets requirements (among them, holding a CFDI and the expense being deductible for income tax)."
          ),
          t(
            "Contablemente, el IVA no es ingreso ni gasto: el IVA trasladado es un **pasivo** (2104) y el IVA acreditable un **activo** (1109). Al final del mes se compensan; si queda saldo acreedor, hay IVA a cargo; si queda deudor, hay saldo a favor.",
            "For accounting purposes IVA is neither revenue nor expense: output VAT is a **liability** (2104) and creditable input VAT an **asset** (1109). At month-end they are offset; a credit balance means IVA payable, a debit balance means a VAT credit (saldo a favor)."
          ),
        ],
        formulas: [
          {
            name: t("IVA de una operación y total de la factura", "IVA on a transaction and invoice total"),
            expression: "IVA = Base × 16 %;  Total = Base + IVA",
            variables: [
              { symbol: "Base", meaning: t("El precio de la venta o compra sin IVA, en pesos (el \"subtotal\").", "The price of the sale or purchase before IVA, in pesos (the \"subtotal\").") },
              { symbol: "16 %", meaning: t("La tasa general de IVA; en decimal es 0.16.", "The general IVA rate; as a decimal it is 0.16.") },
              { symbol: "IVA", meaning: t("Los pesos de impuesto que se agregan al precio. En una venta es IVA trasladado; en una compra, IVA acreditable.", "The pesos of tax added to the price. On a sale it is output VAT; on a purchase, input (creditable) VAT.") },
              { symbol: "Total", meaning: t("Lo que realmente se cobra o se paga, en pesos: base más IVA.", "What is actually collected or paid, in pesos: base plus IVA.") },
            ],
            steps: [
              t("Identifica la base: el importe sin IVA.", "Identify the base: the amount before IVA."),
              t("Multiplica la base por 0.16 para obtener el IVA.", "Multiply the base by 0.16 to get the IVA."),
              t("Suma base + IVA para obtener el total de la factura.", "Add base + IVA to get the invoice total."),
              t("Al registrar una venta: cargo a Bancos o Clientes por el total; abono a Ventas por la base; abono a IVA trasladado por el IVA.", "When recording a sale: debit Bank or Accounts receivable for the total; credit Sales for the base; credit Output VAT for the IVA."),
            ],
            example: t(
              "Vendes mercancía por $40,000 + IVA y te pagan por transferencia. IVA: $40,000 × 0.16 = $6,400. Total: $40,000 + $6,400 = **$46,400**. Póliza: cargo Bancos $46,400; abono Ventas $40,000; abono IVA trasladado $6,400 (cargos $46,400 = abonos $46,400).",
              "You sell goods for $40,000 + IVA and are paid by transfer. IVA: $40,000 × 0.16 = $6,400. Total: $40,000 + $6,400 = **$46,400**. Entry: debit Bank $46,400; credit Sales $40,000; credit Output VAT $6,400 (debits $46,400 = credits $46,400)."
            ),
            mistake: t(
              "Registrar la venta por el total con IVA. La venta (ingreso) es solo la base; el IVA es dinero que le debes al SAT.",
              "Recording the sale at the total including IVA. The sale (revenue) is only the base; the IVA is money you owe the SAT."
            ),
          },
          {
            name: t("IVA a cargo del mes", "Monthly IVA payable"),
            expression: "IVA a cargo = IVA trasladado − IVA acreditable",
            variables: [
              { symbol: "IVA a cargo", meaning: t("Los pesos de IVA que debes pagar al SAT por el mes.", "The pesos of IVA you must pay the SAT for the month.") },
              { symbol: "IVA trasladado", meaning: t("El IVA que cobraste a tus clientes en el mes: ventas sin IVA × 16 %.", "The IVA you charged your customers during the month: sales before IVA × 16 %.") },
              { symbol: "IVA acreditable", meaning: t("El IVA que pagaste a tus proveedores en el mes (con CFDI y gasto deducible): compras sin IVA × 16 %.", "The IVA you paid your suppliers during the month (with CFDI and a deductible expense): purchases before IVA × 16 %.") },
            ],
            steps: [
              t("Calcula el IVA trasladado: ventas del mes sin IVA × 0.16.", "Compute output VAT: the month's sales before IVA × 0.16."),
              t("Calcula el IVA acreditable: compras y gastos del mes sin IVA × 0.16.", "Compute input VAT: the month's purchases and expenses before IVA × 0.16."),
              t("Resta: IVA trasladado − IVA acreditable.", "Subtract: output VAT − input VAT."),
            ],
            example: t(
              "En un mes vendes $250,000 y compras $170,000 (ambos sin IVA). IVA trasladado: $250,000 × 0.16 = $40,000. IVA acreditable: $170,000 × 0.16 = $27,200. IVA a cargo: $40,000 − $27,200 = **$12,800**.",
              "In a month you sell $250,000 and buy $170,000 (both before IVA). Output VAT: $250,000 × 0.16 = $40,000. Input VAT: $170,000 × 0.16 = $27,200. IVA payable: $40,000 − $27,200 = **$12,800**."
            ),
            interpret: t(
              "Si el resultado es positivo, pagas esa cantidad al SAT. Si es negativo, tienes un **saldo a favor**: no pagas IVA ese mes y puedes usar ese saldo en meses siguientes o pedir su devolución.",
              "If the result is positive, you pay that amount to the SAT. If it is negative, you have a **VAT credit** (saldo a favor): you pay no IVA that month and can use the credit in later months or request a refund."
            ),
            mistake: t(
              "Restar ventas menos compras y luego aplicar 16 % sin calcular cada IVA por separado. A veces coincide, pero falla cuando hay operaciones a tasa 0 % o compras sin CFDI.",
              "Subtracting sales minus purchases and then applying 16 % without computing each IVA separately. Sometimes it matches, but it fails when there are 0 % transactions or purchases without CFDI."
            ),
          },
        ],
      },
      {
        heading: t("ISR de personas morales (simplificado)", "Corporate income tax (simplified)"),
        body: [
          t(
            "En el régimen general, la persona moral determina su **utilidad fiscal** restando las deducciones autorizadas a los ingresos acumulables (y, en el cálculo real, la PTU pagada). A la utilidad fiscal se le restan las **pérdidas fiscales** de ejercicios anteriores pendientes de amortizar para obtener el **resultado fiscal**, al cual se aplica la tasa de **30 %**.",
            "Under the general regime, a legal entity computes its **taxable profit** by subtracting authorized deductions from taxable income (and, in the full calculation, profit sharing paid). Unused **tax losses** from prior years are then subtracted to get the **taxable result** (resultado fiscal), to which the **30 %** rate is applied."
          ),
          t(
            "Durante el año se hacen **pagos provisionales** mensuales que se acreditan contra el impuesto anual. En esta lección usamos un modelo simplificado con fines educativos: no incluye ajuste anual por inflación, PTU ni otros conceptos.",
            "During the year the company makes monthly **prepayments** that are credited against the annual tax. In this lesson we use a simplified educational model that excludes the annual inflation adjustment, profit sharing and other items."
          ),
        ],
        formulas: [
          {
            name: t("ISR anual simplificado de una persona moral", "Simplified annual income tax of a legal entity"),
            expression: "Utilidad fiscal = Ingresos acumulables − Deducciones autorizadas;  Resultado fiscal = Utilidad fiscal − Pérdidas fiscales por amortizar;  ISR = 30 % × Resultado fiscal;  ISR a cargo = ISR − Pagos provisionales",
            variables: [
              { symbol: "Ingresos acumulables", meaning: t("Todo lo que la empresa ganó en el año y que la ley dice que paga impuesto, en pesos (sin IVA).", "Everything the company earned in the year that the law says is taxable, in pesos (without IVA).") },
              { symbol: "Deducciones autorizadas", meaning: t("Los gastos que la ley permite restar (con CFDI y requisitos), en pesos.", "The expenses the law allows you to subtract (with CFDI and requirements), in pesos.") },
              { symbol: "Utilidad fiscal", meaning: t("La ganancia del año según las reglas fiscales, en pesos.", "The year's profit under tax rules, in pesos.") },
              { symbol: "Pérdidas fiscales por amortizar", meaning: t("Pérdidas de años anteriores que todavía no se han restado, en pesos. \"Amortizar\" aquí significa irlas restando a las utilidades futuras.", "Losses from prior years not yet used, in pesos. \"Amortizing\" here means subtracting them from future profits.") },
              { symbol: "Resultado fiscal", meaning: t("La base sobre la que se calcula el impuesto, en pesos.", "The base the tax is calculated on, in pesos.") },
              { symbol: "30 %", meaning: t("La tasa de ISR de personas morales; en decimal 0.30.", "The corporate income tax rate; as a decimal 0.30.") },
              { symbol: "Pagos provisionales", meaning: t("Los anticipos de ISR que la empresa ya pagó mes a mes durante el año, en pesos.", "The income tax advances the company already paid month by month during the year, in pesos.") },
              { symbol: "ISR a cargo", meaning: t("Lo que falta pagar en la declaración anual, en pesos.", "What is still due on the annual return, in pesos.") },
            ],
            steps: [
              t("Resta las deducciones autorizadas a los ingresos acumulables: obtienes la utilidad fiscal.", "Subtract authorized deductions from taxable income: you get taxable profit."),
              t("Resta las pérdidas fiscales pendientes: obtienes el resultado fiscal.", "Subtract the unused tax losses: you get the taxable result."),
              t("Multiplica el resultado fiscal por 0.30: es el ISR del ejercicio.", "Multiply the taxable result by 0.30: that is the annual income tax."),
              t("Resta los pagos provisionales al ISR: es lo que queda a cargo (si sale negativo, es saldo a favor).", "Subtract the prepayments from the tax: that is the balance due (if negative, it is a credit in your favor)."),
            ],
            example: t(
              "Ingresos $3,000,000; deducciones $2,200,000; pérdida pendiente $150,000; pagos provisionales $160,000. Utilidad fiscal: $3,000,000 − $2,200,000 = $800,000. Resultado fiscal: $800,000 − $150,000 = $650,000. ISR: $650,000 × 0.30 = $195,000. A cargo: $195,000 − $160,000 = **$35,000**.",
              "Income $3,000,000; deductions $2,200,000; unused loss $150,000; prepayments $160,000. Taxable profit: $3,000,000 − $2,200,000 = $800,000. Taxable result: $800,000 − $150,000 = $650,000. Tax: $650,000 × 0.30 = $195,000. Due: $195,000 − $160,000 = **$35,000**."
            ),
            mistake: t(
              "Restar los pagos provisionales antes de aplicar el 30 %. Los pagos provisionales se restan al impuesto ya calculado, no a la base. Tampoco confundas el 30 % (ISR) con el 16 % (IVA).",
              "Subtracting prepayments before applying 30 %. Prepayments are subtracted from the computed tax, not from the base. Also do not confuse 30 % (income tax) with 16 % (IVA)."
            ),
          },
        ],
      },
      {
        heading: t("CFDI: el comprobante fiscal", "CFDI: the electronic tax receipt"),
        body: [
          t(
            "El **CFDI** (Comprobante Fiscal Digital por Internet), actualmente en versión **4.0**, ampara ingresos, egresos (notas de crédito), pagos (complemento de pago) y traslados. El emisor lo genera y sella con su **CSD**, y un **Proveedor de Certificación (PAC)** autorizado por el SAT lo valida y le asigna el folio fiscal (UUID) mediante el **timbrado**.",
            "The **CFDI** (Digital Tax Receipt via Internet), currently version **4.0**, supports income, expenses (credit notes), payments (payment complement) and transfers of goods. The issuer generates and seals it with its **CSD**, and a SAT-authorized **Certification Provider (PAC)** validates it and assigns the fiscal folio (UUID) through **stamping** (timbrado)."
          ),
          t(
            "Sin CFDI que cumpla requisitos, por regla general un gasto no es deducible para ISR ni su IVA es acreditable. En la versión 4.0 se exigen, entre otros, nombre, RFC, régimen fiscal y código postal del domicilio fiscal del receptor.",
            "Without a compliant CFDI, as a general rule an expense is not deductible for income tax and its IVA cannot be credited. Version 4.0 requires, among other data, the recipient's name, RFC, tax regime and tax-address postal code."
          ),
        ],
      },
      {
        heading: t("Diferencias entre utilidad contable y fiscal", "Differences between book and taxable income"),
        body: [
          t(
            "En palabras sencillas: la empresa calcula su ganancia **dos veces**, una con las reglas contables (para saber cómo le fue de verdad) y otra con las reglas fiscales (para saber cuánto impuesto paga). Casi nunca salen iguales, y aquí aprendes a clasificar por qué.",
            "In plain words: the company computes its profit **twice**, once under accounting rules (to know how it really did) and once under tax rules (to know how much tax it pays). They almost never match, and here you learn to classify why."
          ),
          t(
            "La contabilidad (NIF) busca reflejar la realidad económica; la ley fiscal busca recaudar con reglas propias. Por eso la utilidad contable y la fiscal difieren. Las **diferencias permanentes** nunca se revierten (por ejemplo, multas no deducibles). Las **diferencias temporales** se revierten con el tiempo: la partida se reconoce en ambos lados, pero en periodos distintos (por ejemplo, depreciación a tasas diferentes o estimaciones de incobrables).",
            "Accounting (NIF) aims to reflect economic reality; tax law aims to collect revenue under its own rules. That is why book and taxable income differ. **Permanent differences** never reverse (e.g. non-deductible fines). **Temporary differences** reverse over time: the item is recognized on both sides but in different periods (e.g. depreciation at different rates or bad-debt allowances)."
          ),
          t(
            "Las diferencias temporales originan **impuestos diferidos** (NIF D-4; IAS 12): diferencia temporal × tasa. Si hoy se deduce más de lo que se reconoce como gasto contable, se pagará más impuesto en el futuro: **pasivo por impuesto diferido**. Si hoy se deduce menos, surge un **activo por impuesto diferido**.",
            "Temporary differences give rise to **deferred taxes** (NIF D-4; IAS 12): temporary difference × rate. If today you deduct more than the book expense, more tax will be paid later: a **deferred tax liability**. If today you deduct less, a **deferred tax asset** arises."
          ),
        ],
        formulas: [
          {
            name: t("Impuesto diferido de una diferencia temporal", "Deferred tax on a temporary difference"),
            expression: "Diferencia temporal = Deducción fiscal − Gasto contable;  Impuesto diferido = Diferencia temporal × 30 %",
            variables: [
              { symbol: "Deducción fiscal", meaning: t("Lo que la ley te deja restar este año por la partida (por ejemplo, depreciación fiscal), en pesos.", "What the law lets you subtract this year for the item (e.g. tax depreciation), in pesos.") },
              { symbol: "Gasto contable", meaning: t("Lo que la contabilidad (NIF) registra como gasto este año por la misma partida, en pesos.", "What the books (NIF) record as expense this year for the same item, in pesos.") },
              { symbol: "Diferencia temporal", meaning: t("La diferencia entre ambos importes, en pesos; se revertirá en años futuros.", "The difference between both amounts, in pesos; it will reverse in future years.") },
              { symbol: "30 %", meaning: t("La tasa de ISR; en decimal 0.30.", "The income tax rate; as a decimal 0.30.") },
              { symbol: "Impuesto diferido", meaning: t("El impuesto que se pagará de más (pasivo) o de menos (activo) en el futuro, en pesos.", "The tax that will be paid more (liability) or less (asset) in the future, in pesos.") },
            ],
            steps: [
              t("Confirma que la partida es temporal (se reconoce en ambos lados, en años distintos). Si es permanente, no hay impuesto diferido.", "Confirm the item is temporary (recognized on both sides, in different years). If it is permanent, there is no deferred tax."),
              t("Resta: deducción fiscal − gasto contable.", "Subtract: tax deduction − book expense."),
              t("Multiplica la diferencia por 0.30.", "Multiply the difference by 0.30."),
              t("Si hoy deduces más que el gasto contable, es pasivo por impuesto diferido; si deduces menos, es activo.", "If today you deduct more than the book expense, it is a deferred tax liability; if you deduct less, it is an asset."),
            ],
            example: t(
              "La depreciación contable de una camioneta es $80,000 y la fiscal $120,000. Diferencia: $120,000 − $80,000 = $40,000. Impuesto diferido: $40,000 × 0.30 = **$12,000**. Como hoy se deduce más, es un pasivo por impuesto diferido.",
              "Book depreciation on a van is $80,000 and tax depreciation $120,000. Difference: $120,000 − $80,000 = $40,000. Deferred tax: $40,000 × 0.30 = **$12,000**. Since more is deducted today, it is a deferred tax liability."
            ),
            interpret: t(
              "Un pasivo diferido es como un impuesto \"pospuesto\": hoy pagas menos, pero en años futuros la deducción será menor y pagarás más.",
              "A deferred liability is like a \"postponed\" tax: today you pay less, but in future years the deduction will be smaller and you will pay more."
            ),
            mistake: t(
              "Multiplicar toda la depreciación por la tasa. Solo la **diferencia** entre lo fiscal y lo contable genera impuesto diferido.",
              "Multiplying the whole depreciation by the rate. Only the **difference** between tax and book amounts creates deferred tax."
            ),
          },
        ],
      },
    ],
    examples: [
      {
        title: t("Compra de mercancía con IVA y cálculo del IVA del mes", "Inventory purchase with IVA and monthly IVA calculation"),
        problem: t(
          "En junio, una empresa compra mercancía a crédito por $50,000 + IVA 16 %. En el mes vende $120,000 + IVA (todas las operaciones a 16 % y con CFDI). Registra la compra y determina el IVA a cargo.",
          "In June a company buys inventory on credit for $50,000 + 16 % IVA. During the month it sells $120,000 + IVA (all transactions at 16 % with CFDI). Record the purchase and determine the IVA payable."
        ),
        steps: [
          t("IVA de la compra: $50,000 × 16 % = $8,000; total a pagar al proveedor $58,000.", "IVA on the purchase: $50,000 × 16 % = $8,000; total owed to the supplier $58,000."),
          t("Póliza: cargo 1108 Inventarios $50,000; cargo 1109 IVA acreditable $8,000; abono 2101 Proveedores $58,000.", "Entry: debit 1108 Inventory $50,000; debit 1109 Input VAT $8,000; credit 2101 Accounts payable $58,000."),
          t("IVA trasladado: $120,000 × 16 % = $19,200.", "Output VAT: $120,000 × 16 % = $19,200."),
          t("IVA a cargo: $19,200 − $8,000 = $11,200.", "IVA payable: $19,200 − $8,000 = $11,200."),
        ],
        result: t("La póliza cuadra ($58,000 = $58,000) y el IVA a cargo de junio es $11,200.", "The entry balances ($58,000 = $58,000) and June's IVA payable is $11,200."),
      },
      {
        title: t("ISR anual simplificado con pérdida por amortizar", "Simplified annual income tax with a loss carryforward"),
        problem: t(
          "Una persona moral tiene ingresos acumulables de $8,000,000, deducciones autorizadas de $6,500,000 y una pérdida fiscal de años anteriores por amortizar de $300,000. Pagó $250,000 de pagos provisionales. Calcula el ISR del ejercicio y el saldo a pagar (modelo simplificado).",
          "A legal entity has taxable income of $8,000,000, authorized deductions of $6,500,000 and a prior-year tax loss carryforward of $300,000. It made $250,000 in prepayments. Compute the annual income tax and the balance due (simplified model)."
        ),
        steps: [
          t("Utilidad fiscal: $8,000,000 − $6,500,000 = $1,500,000.", "Taxable profit: $8,000,000 − $6,500,000 = $1,500,000."),
          t("Resultado fiscal: $1,500,000 − $300,000 = $1,200,000.", "Taxable result: $1,500,000 − $300,000 = $1,200,000."),
          t("ISR del ejercicio: $1,200,000 × 30 % = $360,000.", "Annual income tax: $1,200,000 × 30 % = $360,000."),
          t("Saldo a pagar: $360,000 − $250,000 de pagos provisionales = $110,000.", "Balance due: $360,000 − $250,000 of prepayments = $110,000."),
        ],
        result: t("ISR del ejercicio $360,000; saldo a cargo en la declaración anual $110,000.", "Annual income tax $360,000; balance due on the annual return $110,000."),
      },
    ],
    keyPoints: [
      t("El IVA trasladado es pasivo y el acreditable es activo; no afectan resultados.", "Output VAT is a liability and input VAT an asset; neither hits profit or loss."),
      t("IVA a cargo = trasladado − acreditable; si es negativo hay saldo a favor.", "IVA payable = output − input; if negative there is a VAT credit."),
      t("ISR de personas morales (simplificado): 30 % sobre el resultado fiscal, menos pagos provisionales.", "Corporate income tax (simplified): 30 % of the taxable result, less prepayments."),
      t("El CFDI 4.0 lo sella el emisor con su CSD y lo timbra un PAC.", "The CFDI 4.0 is sealed by the issuer with its CSD and stamped by a PAC."),
      t("Diferencias temporales generan impuestos diferidos; las permanentes no.", "Temporary differences create deferred taxes; permanent ones do not."),
    ],
    normativeNote: NOTE_TAX("LISR (art. 9, tasa de personas morales), LIVA (art. 1, tasa general), CFF (arts. 29 y 29-A, CFDI), RMF, y para impuestos diferidos NIF D-4 / IAS 12"),
    exerciseIds: ["N5-007", "N5-008", "N5-009", "N5-010", "N5-011", "N5-012", "N5-013", "N5-014"],
  },
  // ───────────────────────────── L5-03 ─────────────────────────────
  {
    id: "L5-03",
    level: 5,
    topicIds: ["5.7", "5.8"],
    title: t("Auditoría financiera y control interno", "Financial audit and internal control"),
    summary: t(
      "Entiende el objetivo de una auditoría de estados financieros bajo NIA, los tipos de opinión y cómo el marco COSO 2013 y la segregación de funciones sostienen un control interno eficaz.",
      "Understand the objective of a financial statement audit under ISA, the types of opinion, and how the COSO 2013 framework and segregation of duties support effective internal control."
    ),
    minutes: 14,
    objectives: [
      t("Explicar el objetivo de la auditoría financiera y la responsabilidad de la administración.", "Explain the objective of a financial audit and management's responsibility."),
      t("Distinguir los tipos de opinión del auditor.", "Distinguish the types of auditor's opinion."),
      t("Nombrar los cinco componentes del marco COSO 2013.", "Name the five components of the COSO 2013 framework."),
      t("Diseñar controles preventivos y detectivos, incluida la segregación de funciones.", "Design preventive and detective controls, including segregation of duties."),
    ],
    theory: [
      {
        heading: t("¿Qué hace un auditor?", "What does an auditor do?"),
        body: [
          t(
            "En palabras sencillas: una auditoría es una **revisión de un experto externo** que dice si puedes creerle a los números de una empresa. Es como cuando un mecánico independiente revisa un auto usado antes de que lo compres: no garantiza que nunca fallará, pero te dice si lo importante está bien. **Material** significa \"lo bastante grande o importante como para cambiar la decisión de quien lee los números\".",
            "In plain words: an audit is a **review by an outside expert** that says whether you can trust a company's numbers. It is like an independent mechanic checking a used car before you buy it: it does not guarantee it will never fail, but it tells you whether the important parts are fine. **Material** means \"large or important enough to change the decision of whoever reads the numbers\"."
          ),
          t(
            "Es un examen independiente cuyo objetivo es obtener **seguridad razonable** (alta, pero no absoluta) de que los estados financieros en su conjunto están libres de **errores materiales**, debidos a fraude o error, y emitir una **opinión** sobre si están preparados, en todos sus aspectos materiales, conforme al marco aplicable (NIF o IFRS). Se rige por las **Normas Internacionales de Auditoría (NIA)**, por ejemplo la NIA 200 (objetivos globales).",
            "It is an independent examination whose objective is to obtain **reasonable assurance** (high, but not absolute) that the financial statements as a whole are free from **material misstatement**, whether due to fraud or error, and to issue an **opinion** on whether they are prepared, in all material respects, in accordance with the applicable framework (NIF or IFRS). It is governed by the **International Standards on Auditing (ISA/NIA)**, e.g. ISA 200 (overall objectives)."
          ),
          t(
            "La **administración** es responsable de preparar los estados financieros y de diseñar y mantener el control interno; el auditor es responsable de su opinión. La auditoría no sustituye al control interno de la empresa.",
            "**Management** is responsible for preparing the financial statements and for designing and maintaining internal control; the auditor is responsible for the opinion. The audit does not replace the company's internal control."
          ),
        ],
      },
      {
        heading: t("La calificación final del auditor", "The auditor's final grade"),
        body: [
          t(
            "La opinión **no modificada (limpia)** se emite cuando los estados financieros están razonablemente presentados (NIA 700). Las opiniones modificadas (NIA 705) dependen de si el problema es material y de si es **generalizado** (pervasive), es decir, si afecta a muchas partes de los estados financieros y no solo a una cuenta:",
            "An **unmodified (clean)** opinion is issued when the financial statements are fairly presented (ISA 700). Modified opinions (ISA 705) depend on whether the issue is material and whether it is **pervasive**, meaning it affects many parts of the financial statements rather than a single account:"
          ),
        ],
        bullets: [
          t("**Con salvedades**: error material pero no generalizado, o limitación al alcance material no generalizada.", "**Qualified**: misstatement material but not pervasive, or a material but not pervasive scope limitation."),
          t("**Desfavorable (adversa)**: errores materiales y generalizados.", "**Adverse**: misstatements that are material and pervasive."),
          t("**Abstención de opinión**: no se obtuvo evidencia suficiente y los posibles efectos son materiales y generalizados.", "**Disclaimer of opinion**: sufficient evidence could not be obtained and possible effects are material and pervasive."),
        ],
      },
      {
        heading: t("Las cinco piezas del control", "The five parts of control"),
        body: [
          t(
            "COSO define el control interno como un proceso llevado a cabo por el consejo, la administración y el personal para dar seguridad razonable sobre objetivos de operación, información y cumplimiento. Tiene **cinco componentes** (y 17 principios):",
            "COSO defines internal control as a process carried out by the board, management and personnel to provide reasonable assurance about operations, reporting and compliance objectives. It has **five components** (and 17 principles):"
          ),
        ],
        bullets: [
          t("Entorno de control (tono desde la dirección, integridad, estructura).", "Control environment (tone at the top, integrity, structure)."),
          t("Evaluación de riesgos.", "Risk assessment."),
          t("Actividades de control (autorizaciones, conciliaciones, segregación).", "Control activities (authorizations, reconciliations, segregation)."),
          t("Información y comunicación.", "Information and communication."),
          t("Actividades de supervisión (monitoreo).", "Monitoring activities."),
        ],
      },
      {
        heading: t("Que nadie haga todo solo", "No one should do everything alone"),
        body: [
          t(
            "La **segregación de funciones** separa cuatro funciones incompatibles: **autorizar**, **custodiar** activos, **registrar** y **conciliar/revisar**. Si una sola persona concentra dos o más, puede cometer y ocultar un error o fraude.",
            "**Segregation of duties** separates four incompatible functions: **authorizing**, **custody** of assets, **recording** and **reconciling/reviewing**. If one person holds two or more, they can both commit and conceal an error or fraud."
          ),
          t(
            "Los controles **preventivos** evitan que el problema ocurra (límites de autorización, contraseñas, segregación). Los **detectivos** lo descubren después (conciliaciones bancarias, arqueos, conteos físicos, revisión de reportes de excepción). Un buen sistema combina ambos.",
            "**Preventive** controls stop the problem from happening (approval limits, passwords, segregation). **Detective** controls find it afterwards (bank reconciliations, cash counts, physical counts, exception report reviews). A good system combines both."
          ),
        ],
        formulas: [
          {
            name: t("Arqueo de un fondo fijo de caja chica", "Count of an imprest petty cash fund"),
            expression: "Diferencia = Fondo fijo − (Comprobantes + Efectivo)",
            variables: [
              { symbol: "Fondo fijo", meaning: t("El monto autorizado de la caja chica, en pesos; siempre debe estar completo entre papeles y dinero.", "The authorized petty cash amount, in pesos; it must always be complete between receipts and cash.") },
              { symbol: "Comprobantes", meaning: t("La suma de los recibos o facturas autorizados de lo que ya se gastó, en pesos.", "The sum of approved receipts or invoices for what was already spent, in pesos.") },
              { symbol: "Efectivo", meaning: t("El dinero que se cuenta físicamente en la caja, en pesos.", "The money physically counted in the box, in pesos.") },
              { symbol: "Diferencia", meaning: t("Positiva = faltante; negativa = sobrante; cero = la caja cuadra.", "Positive = shortage; negative = overage; zero = the fund balances.") },
            ],
            steps: [
              t("Suma los comprobantes autorizados.", "Add up the approved receipts."),
              t("Cuenta el efectivo y súmalo a los comprobantes.", "Count the cash and add it to the receipts."),
              t("Resta ese total al fondo fijo.", "Subtract that total from the imprest amount."),
            ],
            example: t(
              "Fondo de $3,000; comprobantes $1,900; efectivo contado $1,040. Total: $1,900 + $1,040 = $2,940. Diferencia: $3,000 − $2,940 = **$60 de faltante**.",
              "Fund of $3,000; receipts $1,900; cash counted $1,040. Total: $1,900 + $1,040 = $2,940. Difference: $3,000 − $2,940 = **$60 short**."
            ),
            interpret: t(
              "Cualquier diferencia se investiga y se documenta; el arqueo es un control detectivo.",
              "Any difference is investigated and documented; the count is a detective control."
            ),
          },
          {
            name: t("Tasa de desviación al probar un control", "Deviation rate when testing a control"),
            expression: "Tasa de desviación = Casos con falla ÷ Tamaño de la muestra × 100",
            variables: [
              { symbol: "Casos con falla", meaning: t("Cuántos documentos de la muestra no cumplieron el control (por ejemplo, sin firma de autorización).", "How many documents in the sample failed the control (e.g. missing approval signature).") },
              { symbol: "Tamaño de la muestra", meaning: t("Cuántos documentos revisó el auditor.", "How many documents the auditor reviewed.") },
              { symbol: "Tasa de desviación", meaning: t("El porcentaje de fallas, en %. Se compara con la tasa tolerable que fijó el auditor.", "The percentage of failures, in %. It is compared with the tolerable rate the auditor set.") },
            ],
            steps: [
              t("Cuenta los casos con falla en la muestra.", "Count the failures in the sample."),
              t("Divide entre el tamaño de la muestra y multiplica por 100.", "Divide by the sample size and multiply by 100."),
              t("Compara con la tasa tolerable: si es mayor, el control no es eficaz.", "Compare with the tolerable rate: if higher, the control is not effective."),
            ],
            example: t(
              "Se revisan 40 pagos y 3 no tienen autorización; tasa tolerable 6 %. Tasa: 3 ÷ 40 = 0.075 × 100 = **7.5 %**. Como 7.5 % > 6 %, el control no opera eficazmente.",
              "40 payments are reviewed and 3 lack approval; tolerable rate 6 %. Rate: 3 ÷ 40 = 0.075 × 100 = **7.5 %**. Since 7.5 % > 6 %, the control is not operating effectively."
            ),
            interpret: t(
              "Si la tasa supera la tolerable, el auditor no confía en el control y hace más pruebas sustantivas.",
              "If the rate exceeds the tolerable rate, the auditor does not rely on the control and does more substantive testing."
            ),
          },
        ],
      },
    ],
    examples: [
      {
        title: t("Arqueo de un fondo fijo de caja chica", "Petty cash count"),
        problem: t(
          "El fondo fijo de caja chica es de $5,000. En un arqueo sorpresa se encuentran comprobantes autorizados por $3,200 y efectivo por $1,650. ¿Hay diferencia?",
          "The imprest petty cash fund is $5,000. A surprise count finds approved receipts for $3,200 and cash of $1,650. Is there a difference?"
        ),
        steps: [
          t("Lo que debería haber: comprobantes + efectivo = $5,000.", "What should be there: receipts + cash = $5,000."),
          t("Lo que hay: $3,200 + $1,650 = $4,850.", "What is there: $3,200 + $1,650 = $4,850."),
          t("Faltante: $5,000 − $4,850 = $150.", "Shortage: $5,000 − $4,850 = $150."),
          t("El arqueo es un control detectivo; el faltante se investiga y se documenta.", "The count is a detective control; the shortage is investigated and documented."),
        ],
        result: t("Faltante de $150 que debe investigarse.", "A $150 shortage that must be investigated."),
      },
      {
        title: t("Prueba de un control de autorización", "Testing an approval control"),
        problem: t(
          "El auditor revisa una muestra de 25 órdenes de compra para verificar que tengan autorización del gerente. Encuentra 2 sin firma. La tasa de desviación tolerable fijada es 5 %.",
          "The auditor inspects a sample of 25 purchase orders to verify manager approval. Two have no signature. The tolerable deviation rate set is 5 %."
        ),
        steps: [
          t("Tasa de desviación de la muestra: 2 ÷ 25 = 0.08 = 8 %.", "Sample deviation rate: 2 ÷ 25 = 0.08 = 8 %."),
          t("8 % > 5 % tolerable: el control no opera eficazmente.", "8 % > 5 % tolerable: the control is not operating effectively."),
          t("Respuesta: no confiar en el control, aumentar pruebas sustantivas en compras y comunicar la deficiencia.", "Response: do not rely on the control, increase substantive testing of purchases and communicate the deficiency."),
        ],
        result: t("Desviación del 8 %; el control se considera no eficaz para efectos de la auditoría.", "An 8 % deviation rate; the control is considered ineffective for audit purposes."),
      },
    ],
    keyPoints: [
      t("La auditoría da seguridad razonable, no absoluta.", "An audit provides reasonable, not absolute, assurance."),
      t("La administración prepara los estados financieros y mantiene el control interno.", "Management prepares the financial statements and maintains internal control."),
      t("Opinión con salvedades: material no generalizado; adversa: material y generalizado.", "Qualified: material, not pervasive; adverse: material and pervasive."),
      t("COSO 2013: entorno de control, evaluación de riesgos, actividades de control, información y comunicación, supervisión.", "COSO 2013: control environment, risk assessment, control activities, information and communication, monitoring."),
      t("Separar autorizar, custodiar, registrar y conciliar.", "Separate authorizing, custody, recording and reconciling."),
    ],
    normativeNote: NOTE_AUDIT("NIA 200, NIA 700 y NIA 705; COSO Internal Control — Integrated Framework (2013)"),
    exerciseIds: ["N5-015", "N5-017", "N5-018", "N5-020", "N5-021"],
  },
  // ───────────────────────────── L5-04 ─────────────────────────────
  {
    id: "L5-04",
    level: 5,
    topicIds: ["5.9", "5.10", "5.11"],
    title: t("Riesgo de auditoría, materialidad y evidencia", "Audit risk, materiality and evidence"),
    summary: t(
      "Aplica el modelo de riesgo de auditoría, determina una materialidad ilustrativa y evalúa si la evidencia obtenida es suficiente y adecuada.",
      "Apply the audit risk model, determine an illustrative materiality and evaluate whether the evidence obtained is sufficient and appropriate."
    ),
    minutes: 14,
    objectives: [
      t("Usar el modelo RA = RI × RC × RD para despejar el riesgo de detección.", "Use the model AR = IR × CR × DR to solve for detection risk."),
      t("Calcular materialidad global y de ejecución con referencias ilustrativas.", "Compute overall and performance materiality using illustrative benchmarks."),
      t("Distinguir suficiencia (cantidad) de adecuación (calidad) de la evidencia.", "Distinguish sufficiency (quantity) from appropriateness (quality) of evidence."),
      t("Jerarquizar la confiabilidad de distintos tipos de evidencia.", "Rank the reliability of different types of evidence."),
    ],
    theory: [
      {
        heading: t("¿Cómo se cuela un error?", "How does an error slip through?"),
        body: [
          t(
            "En palabras sencillas: un error puede \"colarse\" hasta los estados financieros solo si pasa tres filtros: que ocurra (**riesgo inherente**), que los controles de la empresa no lo atrapen (**riesgo de control**) y que el auditor tampoco lo encuentre (**riesgo de detección**). El auditor no puede cambiar los dos primeros, pero sí decide cuánto revisar para que el tercero sea lo bastante bajo.",
            "In plain words: an error can \"slip\" into the financial statements only if it passes three filters: it happens (**inherent risk**), the company's controls do not catch it (**control risk**) and the auditor does not find it either (**detection risk**). The auditor cannot change the first two, but does decide how much to test so that the third is low enough."
          ),
          t(
            "El **riesgo de auditoría (RA)** es el riesgo de emitir una opinión inapropiada cuando los estados financieros contienen errores materiales. Se descompone en el **riesgo de error material** (riesgo inherente × riesgo de control), que pertenece a la entidad, y el **riesgo de detección**, que controla el auditor con la naturaleza, oportunidad y alcance de sus pruebas.",
            "**Audit risk (AR)** is the risk of issuing an inappropriate opinion when the financial statements are materially misstated. It breaks down into the **risk of material misstatement** (inherent risk × control risk), which belongs to the entity, and **detection risk**, which the auditor controls through the nature, timing and extent of procedures."
          ),
          t(
            "Si el auditor fija un RA aceptable bajo y evalúa RI y RC altos, el RD planeado debe ser **bajo**: más pruebas sustantivas, más cercanas al cierre y con muestras mayores (NIA 315 y NIA 330).",
            "If the auditor sets a low acceptable AR and assesses IR and CR as high, planned DR must be **low**: more substantive testing, closer to year-end and with larger samples (ISA 315 and ISA 330)."
          ),
        ],
        formulas: [
          {
            name: t("Riesgo de detección planeado (modelo de riesgo de auditoría)", "Planned detection risk (audit risk model)"),
            expression: "RA = RI × RC × RD   →   RD = RA ÷ (RI × RC)",
            variables: [
              { symbol: "RA", meaning: t("Riesgo de auditoría: la probabilidad máxima que el auditor acepta de dar una opinión equivocada, en %.", "Audit risk: the maximum chance the auditor accepts of giving a wrong opinion, in %.") },
              { symbol: "RI", meaning: t("Riesgo inherente: qué tan propensa a errores es la cuenta por sí misma, antes de cualquier control, en %.", "Inherent risk: how error-prone the account is by itself, before any control, in %.") },
              { symbol: "RC", meaning: t("Riesgo de control: la probabilidad de que los controles de la empresa no detecten o eviten el error, en %.", "Control risk: the chance that the company's controls fail to prevent or catch the error, in %.") },
              { symbol: "RD", meaning: t("Riesgo de detección: la probabilidad de que las pruebas del auditor no encuentren el error, en %.", "Detection risk: the chance that the auditor's tests miss the error, in %.") },
            ],
            steps: [
              t("Convierte cada porcentaje a decimal: 5 % = 0.05, 80 % = 0.80.", "Convert each percentage to a decimal: 5 % = 0.05, 80 % = 0.80."),
              t("Multiplica RI × RC: es el riesgo de error material.", "Multiply IR × CR: that is the risk of material misstatement."),
              t("Divide RA entre ese producto: el resultado es el RD.", "Divide AR by that product: the result is DR."),
              t("Multiplica por 100 para expresarlo en %.", "Multiply by 100 to express it in %."),
            ],
            example: t(
              "RA = 6 %, RI = 60 %, RC = 50 %. RI × RC: 0.60 × 0.50 = 0.30. RD: 0.06 ÷ 0.30 = 0.20 → **20 %**.",
              "AR = 6 %, IR = 60 %, CR = 50 %. IR × CR: 0.60 × 0.50 = 0.30. DR: 0.06 ÷ 0.30 = 0.20 → **20 %**."
            ),
            interpret: t(
              "Un RD bajo significa que el auditor casi no puede permitirse fallar: debe hacer más pruebas sustantivas, con muestras más grandes y más cerca del cierre. Un RD alto permite menos pruebas.",
              "A low DR means the auditor can barely afford to miss anything: more substantive tests, larger samples and closer to year-end. A high DR allows fewer tests."
            ),
            mistake: t(
              "Multiplicar los tres riesgos o restar en lugar de dividir. Para despejar el RD siempre se divide RA entre (RI × RC).",
              "Multiplying all three risks or subtracting instead of dividing. To solve for DR you always divide AR by (IR × CR)."
            ),
          },
        ],
      },
      {
        heading: t("¿Qué error sí importa?", "Which error really matters?"),
        body: [
          t(
            "Un error es **material** si, individualmente o en conjunto, podría influir en las decisiones económicas de los usuarios (NIA 320). La materialidad es un juicio profesional; en la práctica se parte de una **referencia (benchmark)** y un porcentaje. Ejemplo cotidiano: si tu recibo de nómina trae $5 de error no te importa, pero si trae $5,000 sí; lo \"material\" depende del tamaño de las cifras. Los rangos siguientes son **ilustrativos**, no reglas de la norma:",
            "A misstatement is **material** if, individually or in aggregate, it could influence users' economic decisions (ISA 320). Materiality is a matter of professional judgment; in practice it starts from a **benchmark** and a percentage. Everyday example: a $5 error on your payslip does not matter to you, but a $5,000 one does; what is \"material\" depends on the size of the figures. The ranges below are **illustrative**, not rules from the standard:"
          ),
          t(
            "La **materialidad de ejecución** es menor que la global (por ejemplo 50 %–75 % de ella) para reducir el riesgo de que errores no detectados sumen más que la materialidad. También se fija un umbral de errores **claramente insignificantes** (por ejemplo, 5 % de la materialidad).",
            "**Performance materiality** is set below overall materiality (e.g. 50 %–75 % of it) to reduce the risk that undetected misstatements add up to more than materiality. A **clearly trivial** threshold is also set (e.g. 5 % of materiality)."
          ),
        ],
        bullets: [
          t("Utilidad antes de impuestos: alrededor de 5 %.", "Profit before tax: around 5 %."),
          t("Ingresos: alrededor de 0.5 %–1 %.", "Revenue: around 0.5 %–1 %."),
          t("Activos totales: alrededor de 1 %–2 %.", "Total assets: around 1 %–2 %."),
        ],
        formulas: [
          {
            name: t("Materialidad global, de ejecución y umbral insignificante", "Overall materiality, performance materiality and clearly trivial threshold"),
            expression: "Materialidad global = Referencia × % de referencia;  Materialidad de ejecución = Materialidad global × % de ejecución;  Umbral insignificante = Materialidad global × % de umbral",
            variables: [
              { symbol: "Referencia", meaning: t("La cifra base elegida (por ejemplo, utilidad antes de impuestos), en pesos.", "The chosen base figure (e.g. profit before tax), in pesos.") },
              { symbol: "% de referencia", meaning: t("El porcentaje que se aplica a la referencia (ilustrativo, por ejemplo 5 % de la utilidad).", "The percentage applied to the benchmark (illustrative, e.g. 5 % of profit).") },
              { symbol: "Materialidad global", meaning: t("El monto a partir del cual un error se considera importante para los estados financieros en conjunto, en pesos.", "The amount above which a misstatement is considered important for the financial statements as a whole, in pesos.") },
              { symbol: "% de ejecución", meaning: t("Qué parte de la materialidad global se usa para trabajar (por ejemplo 50 %–75 %).", "What share of overall materiality is used to do the work (e.g. 50 %–75 %).") },
              { symbol: "Materialidad de ejecución", meaning: t("Un límite más bajo que la global, para dejar un margen de seguridad, en pesos.", "A limit lower than overall materiality, to leave a safety margin, in pesos.") },
              { symbol: "% de umbral", meaning: t("Porcentaje de la materialidad global debajo del cual un error es claramente insignificante (por ejemplo 5 %).", "Percentage of overall materiality below which a misstatement is clearly trivial (e.g. 5 %).") },
              { symbol: "Umbral insignificante", meaning: t("Errores menores a este monto no se acumulan, en pesos.", "Misstatements below this amount are not accumulated, in pesos.") },
            ],
            steps: [
              t("Multiplica la referencia por su porcentaje: es la materialidad global.", "Multiply the benchmark by its percentage: that is overall materiality."),
              t("Multiplica la materialidad **global** por el % de ejecución.", "Multiply **overall** materiality by the performance %."),
              t("Multiplica la materialidad **global** por el % del umbral.", "Multiply **overall** materiality by the threshold %."),
            ],
            example: t(
              "Utilidad antes de impuestos $4,000,000; referencia 5 %; ejecución 60 %; umbral 5 %. Global: $4,000,000 × 0.05 = $200,000. Ejecución: $200,000 × 0.60 = **$120,000**. Umbral: $200,000 × 0.05 = **$10,000**.",
              "Profit before tax $4,000,000; benchmark 5 %; performance 60 %; threshold 5 %. Overall: $4,000,000 × 0.05 = $200,000. Performance: $200,000 × 0.60 = **$120,000**. Threshold: $200,000 × 0.05 = **$10,000**."
            ),
            interpret: t(
              "Siempre debe cumplirse: umbral insignificante < materialidad de ejecución < materialidad global.",
              "It must always hold: clearly trivial threshold < performance materiality < overall materiality."
            ),
            mistake: t(
              "Calcular la de ejecución o el umbral sobre la utilidad en lugar de sobre la materialidad global.",
              "Computing performance materiality or the threshold on profit instead of on overall materiality."
            ),
          },
        ],
      },
      {
        heading: t("¿Qué prueba vale más?", "Which evidence counts more?"),
        body: [
          t(
            "La NIA 500 exige evidencia **suficiente** (cantidad) y **adecuada** (calidad: relevante y confiable). Más cantidad **no compensa** evidencia de mala calidad. Los procedimientos incluyen inspección, observación, confirmación externa (NIA 505), recálculo, reejecución, procedimientos analíticos e indagación.",
            "ISA 500 requires **sufficient** (quantity) and **appropriate** (quality: relevant and reliable) evidence. More quantity **does not compensate** for poor quality. Procedures include inspection, observation, external confirmation (ISA 505), recalculation, reperformance, analytical procedures and inquiry."
          ),
        ],
        bullets: [
          t("Externa e independiente > interna de la entidad.", "External and independent > internal to the entity."),
          t("Obtenida directamente por el auditor > obtenida de forma indirecta o por inferencia.", "Obtained directly by the auditor > obtained indirectly or by inference."),
          t("Documental > verbal; original > copia o fotocopia.", "Documentary > oral; original > copy or photocopy."),
          t("Interna con controles eficaces > interna con controles débiles.", "Internal with effective controls > internal with weak controls."),
        ],
      },
      {
        heading: t("Tres tipos de revisión", "Three kinds of checks"),
        body: [
          t(
            "Los **procedimientos de evaluación de riesgos** (indagación, analíticos preliminares, entendimiento del negocio) identifican riesgos. Las **pruebas de controles** verifican si un control opera eficazmente. Las **pruebas sustantivas** (pruebas de detalle y analíticos sustantivos) detectan errores materiales en saldos y transacciones.",
            "**Risk assessment procedures** (inquiry, preliminary analytics, understanding the business) identify risks. **Tests of controls** check whether a control operates effectively. **Substantive procedures** (tests of details and substantive analytics) detect material misstatements in balances and transactions."
          ),
        ],
      },
    ],
    examples: [
      {
        title: t("Despejar el riesgo de detección", "Solving for detection risk"),
        problem: t(
          "El auditor acepta un riesgo de auditoría de 5 %, evalúa el riesgo inherente en 80 % y el de control en 50 %. ¿Qué riesgo de detección puede aceptar?",
          "The auditor accepts 5 % audit risk, assesses inherent risk at 80 % and control risk at 50 %. What detection risk can be accepted?"
        ),
        steps: [
          t("Riesgo de error material: 0.80 × 0.50 = 0.40.", "Risk of material misstatement: 0.80 × 0.50 = 0.40."),
          t("RD = 0.05 ÷ 0.40 = 0.125.", "DR = 0.05 ÷ 0.40 = 0.125."),
          t("Interpretación: el auditor puede aceptar 12.5 % de riesgo de no detectar un error material con sus pruebas sustantivas.", "Interpretation: the auditor can accept a 12.5 % risk that substantive procedures miss a material misstatement."),
        ],
        result: t("Riesgo de detección planeado: 12.5 %.", "Planned detection risk: 12.5 %."),
      },
      {
        title: t("Materialidad ilustrativa", "Illustrative materiality"),
        problem: t(
          "Una empresa ficticia tiene utilidad antes de impuestos de $6,000,000. El equipo usa 5 % como referencia, materialidad de ejecución al 70 % y umbral de insignificancia al 5 % de la materialidad.",
          "A fictitious company has profit before tax of $6,000,000. The team uses a 5 % benchmark, performance materiality at 70 % and a clearly trivial threshold at 5 % of materiality."
        ),
        steps: [
          t("Materialidad global: $6,000,000 × 5 % = $300,000.", "Overall materiality: $6,000,000 × 5 % = $300,000."),
          t("Materialidad de ejecución: $300,000 × 70 % = $210,000.", "Performance materiality: $300,000 × 70 % = $210,000."),
          t("Umbral claramente insignificante: $300,000 × 5 % = $15,000.", "Clearly trivial threshold: $300,000 × 5 % = $15,000."),
        ],
        result: t("Materialidad $300,000; de ejecución $210,000; errores menores de $15,000 no se acumulan.", "Materiality $300,000; performance $210,000; misstatements under $15,000 are not accumulated."),
      },
    ],
    keyPoints: [
      t("RA = RI × RC × RD; el auditor solo controla el RD.", "AR = IR × CR × DR; the auditor controls only DR."),
      t("A mayor riesgo de error material, menor RD aceptable y más pruebas sustantivas.", "The higher the risk of material misstatement, the lower the acceptable DR and the more substantive testing."),
      t("La materialidad es juicio profesional; los porcentajes de referencia son guías ilustrativas.", "Materiality is professional judgment; benchmark percentages are illustrative guides."),
      t("Evidencia suficiente (cantidad) y adecuada (calidad); la cantidad no compensa la mala calidad.", "Evidence must be sufficient (quantity) and appropriate (quality); quantity does not compensate for poor quality."),
    ],
    normativeNote: NOTE_AUDIT("NIA 200, NIA 315, NIA 320, NIA 330, NIA 500 y NIA 505"),
    exerciseIds: ["N5-023", "N5-024", "N5-025", "N5-026", "N5-028"],
  },
  // ───────────────────────────── L5-05 ─────────────────────────────
  {
    id: "L5-05",
    level: 5,
    topicIds: ["5.12", "5.13"],
    title: t("Fraude financiero y auditoría forense", "Financial fraud and forensic audit"),
    summary: t(
      "Analiza por qué ocurre el fraude, cómo distinguir una señal de alerta de un fraude probado y qué técnicas forenses básicas (cadena de custodia, ley de Benford, pagos duplicados) se usan para investigarlo.",
      "Analyze why fraud happens, how to tell a red flag from proven fraud, and which basic forensic techniques (chain of custody, Benford's law, duplicate payments) are used to investigate it."
    ),
    minutes: 14,
    objectives: [
      t("Explicar los tres elementos del triángulo del fraude.", "Explain the three elements of the fraud triangle."),
      t("Clasificar esquemas en apropiación indebida, información financiera fraudulenta y corrupción.", "Classify schemes as asset misappropriation, fraudulent financial reporting and corruption."),
      t("Diferenciar señales de alerta de un fraude probado.", "Differentiate red flags from proven fraud."),
      t("Aplicar la ley de Benford y la búsqueda de pagos duplicados como pruebas exploratorias.", "Apply Benford's law and duplicate-payment searches as exploratory tests."),
    ],
    theory: [
      {
        heading: t("¿Qué empuja a alguien al fraude?", "What pushes someone to fraud?"),
        body: [
          t(
            "Según el modelo de Cressey, el fraude suele aparecer cuando coinciden tres elementos: **presión o incentivo** (metas agresivas, deudas personales), **oportunidad** (controles débiles, falta de supervisión) y **racionalización** (la persona se justifica: «lo devolveré», «la empresa me lo debe»). La organización influye sobre todo en la oportunidad, mediante control interno.",
            "Under Cressey's model, fraud tends to appear when three elements coincide: **pressure or incentive** (aggressive targets, personal debts), **opportunity** (weak controls, lack of supervision) and **rationalization** (the person justifies it: «I will pay it back», «the company owes me»). The organization mainly influences opportunity, through internal control."
          ),
          t(
            "La NIA 240 distingue dos tipos de fraude relevantes para la auditoría: **información financiera fraudulenta** y **apropiación indebida de activos**. La clasificación de la ACFE añade la **corrupción** (sobornos, conflictos de interés, comisiones ilegales).",
            "ISA 240 distinguishes two types of fraud relevant to the audit: **fraudulent financial reporting** and **misappropriation of assets**. The ACFE classification adds **corruption** (bribery, conflicts of interest, kickbacks)."
          ),
        ],
      },
      {
        heading: t("Una señal no es prueba", "A red flag is not proof"),
        body: [
          t(
            "Una **señal de alerta** (red flag) es una circunstancia inusual que aumenta la probabilidad de fraude: asientos manuales redondos al cierre, proveedores con la misma dirección que un empleado, empleados que nunca toman vacaciones, conciliaciones atrasadas. Una señal **justifica investigar**, pero no prueba nada por sí misma; puede tener una explicación legítima.",
            "A **red flag** is an unusual circumstance that raises the likelihood of fraud: round manual entries at period-end, suppliers sharing an employee's address, employees who never take vacation, overdue reconciliations. A red flag **justifies investigating**, but proves nothing by itself; it may have a legitimate explanation."
          ),
          t(
            "Determinar si hubo fraude (y quién es responsable) corresponde, en última instancia, a las autoridades competentes. El auditor forense reúne y analiza evidencia y reporta **hechos**, sin acusar sin sustento.",
            "Deciding whether fraud occurred (and who is responsible) ultimately belongs to the competent authorities. The forensic auditor gathers and analyzes evidence and reports **facts**, without unsupported accusations."
          ),
        ],
      },
      {
        heading: t("Cuidar la evidencia", "Protecting the evidence"),
        body: [
          t(
            "La auditoría forense aplica técnicas contables, de auditoría e informáticas con el fin de que la evidencia sea útil en un proceso legal. La **cadena de custodia** documenta quién obtuvo cada evidencia, cuándo, cómo se conservó y quién tuvo acceso, para demostrar que no fue alterada. En evidencia digital se usan copias forenses y valores hash para verificar integridad.",
            "Forensic auditing applies accounting, audit and IT techniques so that evidence can be used in legal proceedings. The **chain of custody** documents who obtained each piece of evidence, when, how it was preserved and who had access, to show it was not altered. For digital evidence, forensic copies and hash values are used to verify integrity."
          ),
        ],
      },
      {
        heading: t("Números que delatan", "Numbers that give it away"),
        body: [
          t(
            "La **ley de Benford** establece que en muchos conjuntos de datos naturales (montos de facturas, pagos) el primer dígito no se distribuye de manera uniforme: el 1 aparece cerca del 30.1 % de las veces y el 9 solo cerca del 4.6 %. Desviaciones grandes pueden indicar datos inventados o montos fraccionados para evadir límites de autorización. Es una prueba **exploratoria**: no aplica a números asignados (folios, precios fijos) ni prueba fraude.",
            "**Benford's law** states that in many natural data sets (invoice amounts, payments) the first digit is not uniformly distributed: 1 appears about 30.1 % of the time and 9 only about 4.6 %. Large deviations may indicate fabricated data or amounts split to avoid approval limits. It is an **exploratory** test: it does not apply to assigned numbers (folios, fixed prices) and does not prove fraud."
          ),
          t(
            "La prueba de **pagos duplicados** busca pagos con el mismo proveedor, monto y número de factura (o variantes casi idénticas). Un mismo monto con **factura distinta** no es necesariamente duplicado.",
            "The **duplicate payments** test looks for payments with the same supplier, amount and invoice number (or near-identical variants). The same amount with a **different invoice** is not necessarily a duplicate."
          ),
        ],
        formulas: [
          {
            name: t("Cantidad esperada según la ley de Benford", "Expected count under Benford's law"),
            expression: "P(d) = log10(1 + 1/d);  Esperados = N × P(d)",
            variables: [
              { symbol: "d", meaning: t("El primer dígito que analizas (del 1 al 9).", "The first digit you analyze (1 to 9).") },
              { symbol: "log10", meaning: t("Logaritmo base 10; en la calculadora es la tecla \"log\".", "Base-10 logarithm; on a calculator it is the \"log\" key.") },
              { symbol: "P(d)", meaning: t("La proporción esperada de montos que empiezan con d (en decimal; × 100 para %).", "The expected share of amounts starting with d (as a decimal; × 100 for %).") },
              { symbol: "N", meaning: t("El número total de montos analizados (facturas, pagos).", "The total number of amounts analyzed (invoices, payments).") },
              { symbol: "Esperados", meaning: t("Cuántos montos deberían empezar con d, redondeado al entero.", "How many amounts should start with d, rounded to a whole number.") },
            ],
            steps: [
              t("Calcula 1 + 1/d. Para d = 2: 1 + 0.5 = 1.5.", "Compute 1 + 1/d. For d = 2: 1 + 0.5 = 1.5."),
              t("Saca el logaritmo base 10 de ese número: es P(d).", "Take the base-10 logarithm of that number: that is P(d)."),
              t("Multiplica P(d) por el total N y redondea.", "Multiply P(d) by the total N and round."),
              t("Compara con los observados: una diferencia grande es una señal para investigar, no una prueba.", "Compare with the observed count: a large gap is a signal to investigate, not proof."),
            ],
            example: t(
              "¿Cuántos de 3,000 pagos deberían empezar con 2? 1 + 1/2 = 1.5. P(2) = log10(1.5) = 0.17609 (≈ 17.6 %). Esperados: 3,000 × 0.17609 = 528.27 ≈ **528 pagos**.",
              "How many of 3,000 payments should start with 2? 1 + 1/2 = 1.5. P(2) = log10(1.5) = 0.17609 (≈ 17.6 %). Expected: 3,000 × 0.17609 = 528.27 ≈ **528 payments**."
            ),
            interpret: t(
              "Muchos más o muchos menos montos de los esperados con algún dígito sugieren revisar esas transacciones (por ejemplo, montos justo debajo de un límite de autorización).",
              "Many more or far fewer amounts than expected for a digit suggest reviewing those transactions (e.g. amounts just below an approval limit)."
            ),
            mistake: t(
              "Suponer que cada dígito aparece igual (1/9 ≈ 11.1 %). Con Benford, el 1 aparece cerca de 30 % y el 9 cerca de 4.6 %.",
              "Assuming every digit appears equally often (1/9 ≈ 11.1 %). Under Benford, 1 appears about 30 % of the time and 9 about 4.6 %."
            ),
          },
          {
            name: t("Pagos duplicados e importe por recuperar", "Duplicate payments and amount to recover"),
            expression: "Importe por recuperar = Suma de los pagos repetidos (sin contar el pago original)",
            variables: [
              { symbol: "Pago repetido", meaning: t("Un pago que repite proveedor, monto y número de factura de un pago anterior.", "A payment that repeats the supplier, amount and invoice number of an earlier payment.") },
              { symbol: "Pago original", meaning: t("El primer pago de cada grupo; es legítimo y no se recupera.", "The first payment in each group; it is legitimate and is not recovered.") },
              { symbol: "Importe por recuperar", meaning: t("Los pesos pagados de más que hay que reclamar al proveedor.", "The pesos overpaid that must be claimed back from the supplier.") },
            ],
            steps: [
              t("Agrupa los pagos por proveedor + monto + número de factura.", "Group payments by supplier + amount + invoice number."),
              t("En cada grupo con más de un pago, el primero es el original; los demás son duplicados.", "In each group with more than one payment, the first is the original; the rest are duplicates."),
              t("Cuenta los duplicados y suma sus montos.", "Count the duplicates and add up their amounts."),
            ],
            example: t(
              "Pagos: #1 A $6,300 F-7; #2 B $2,100 F-3; #3 A $6,300 F-7; #4 B $2,100 F-4; #5 B $2,100 F-3. Duplicados: #3 (repite a #1) y #5 (repite a #2) = 2. #4 tiene otra factura, no cuenta. Importe: $6,300 + $2,100 = **$8,400**.",
              "Payments: #1 A $6,300 F-7; #2 B $2,100 F-3; #3 A $6,300 F-7; #4 B $2,100 F-4; #5 B $2,100 F-3. Duplicates: #3 (repeats #1) and #5 (repeats #2) = 2. #4 has another invoice, it does not count. Amount: $6,300 + $2,100 = **$8,400**."
            ),
            mistake: t(
              "Contar los dos pagos de cada par (el original también) o incluir pagos del mismo monto pero con otra factura.",
              "Counting both payments of each pair (including the original) or including payments with the same amount but a different invoice."
            ),
          },
        ],
      },
    ],
    examples: [
      {
        title: t("Benford en una muestra de pagos", "Benford on a sample of payments"),
        problem: t(
          "Se analizan 5,000 pagos a proveedores. ¿Cuántos esperarías que empiecen con el dígito 1? Se observan 1,020. ¿Qué concluyes?",
          "5,000 supplier payments are analyzed. How many would you expect to start with digit 1? 1,020 are observed. What do you conclude?"
        ),
        steps: [
          t("P(1) = log10(2) = 0.30103.", "P(1) = log10(2) = 0.30103."),
          t("Esperados: 5,000 × 0.30103 = 1,505.15 ≈ 1,505 pagos.", "Expected: 5,000 × 0.30103 = 1,505.15 ≈ 1,505 payments."),
          t("Observados 1,020: hay un faltante notable de montos que empiezan con 1.", "Observed 1,020: there is a notable shortfall of amounts starting with 1."),
          t("Siguiente paso: revisar qué dígitos están sobrerrepresentados y analizar esas transacciones, sin concluir fraude todavía.", "Next step: check which digits are over-represented and examine those transactions, without concluding fraud yet."),
        ],
        result: t("Se esperaban ≈ 1,505; la desviación es una señal de alerta que amerita pruebas adicionales.", "About 1,505 were expected; the deviation is a red flag that warrants further testing."),
      },
      {
        title: t("Detección de un pago duplicado", "Detecting a duplicate payment"),
        problem: t(
          "En el reporte de pagos aparecen: #201 Proveedor Delta $32,480 factura D-55; #202 Proveedor Delta $32,480 factura D-55; #203 Proveedor Delta $32,480 factura D-56.",
          "The payment report shows: #201 Supplier Delta $32,480 invoice D-55; #202 Supplier Delta $32,480 invoice D-55; #203 Supplier Delta $32,480 invoice D-56."
        ),
        steps: [
          t("Agrupar por proveedor + monto + número de factura.", "Group by supplier + amount + invoice number."),
          t("#201 y #202 comparten las tres claves: el segundo es un pago duplicado.", "#201 and #202 share all three keys: the second is a duplicate payment."),
          t("#203 tiene el mismo monto pero otra factura: se verifica con el CFDI y la recepción de mercancía, pero no es duplicado por sí mismo.", "#203 has the same amount but another invoice: verify against the CFDI and goods receipt, but it is not a duplicate by itself."),
        ],
        result: t("Un pago duplicado de $32,480 por recuperar.", "One duplicate payment of $32,480 to recover."),
      },
    ],
    keyPoints: [
      t("Triángulo del fraude: presión, oportunidad y racionalización.", "Fraud triangle: pressure, opportunity and rationalization."),
      t("Una señal de alerta justifica investigar; no es prueba de fraude.", "A red flag justifies investigation; it is not proof of fraud."),
      t("La cadena de custodia protege la integridad y validez de la evidencia.", "The chain of custody protects the integrity and validity of evidence."),
      t("Benford: P(d) = log10(1 + 1/d); es una prueba exploratoria.", "Benford: P(d) = log10(1 + 1/d); it is an exploratory test."),
    ],
    normativeNote: NOTE_AUDIT("NIA 240 (responsabilidades del auditor respecto al fraude) y la clasificación de fraude ocupacional de la ACFE; los aspectos penales y procesales dependen de la legislación mexicana vigente"),
    exerciseIds: ["N5-029", "N5-030", "N5-031", "N5-033", "N5-034"],
  },
]

export const exercises: Exercise[] = [
  // ═════════════════════════════ L5-01 ═════════════════════════════
  {
    id: "N5-001",
    level: 5,
    module: "L5-01",
    kind: "mcq",
    flavor: "concept",
    prompt: t(
      "¿Qué órgano se encarga de recaudar los impuestos federales y de fiscalizar a los contribuyentes en México?",
      "Which body is in charge of collecting federal taxes and auditing taxpayers in Mexico?"
    ),
    options: [
      { id: "N5-001-a", text: t("El Banco de México", "Banco de México (the central bank)") },
      { id: "N5-001-b", text: t("La Cámara de Diputados", "The Chamber of Deputies") },
      { id: "N5-001-c", text: t("El Servicio de Administración Tributaria (SAT)", "The Tax Administration Service (SAT)") },
      { id: "N5-001-d", text: t("El Instituto Mexicano de Contadores Públicos (IMCP)", "The Mexican Institute of Public Accountants (IMCP)") },
    ],
    correctOptionId: "N5-001-c",
    explanation: t(
      "El SAT, órgano desconcentrado de la SHCP, recauda y fiscaliza los impuestos federales. El Congreso aprueba las leyes fiscales, Banxico conduce la política monetaria y el IMCP es un organismo profesional que no recauda impuestos.",
      "The SAT, a decentralized body of the SHCP, collects and audits federal taxes. Congress passes tax laws, Banxico runs monetary policy and the IMCP is a professional body that does not collect taxes."
    ),
    difficulty: 1,
    points: 10,
    competency: "tax-system",
  },
  {
    id: "N5-002",
    level: 5,
    module: "L5-01",
    kind: "truefalse",
    flavor: "concept",
    prompt: t(
      "La e.firma y el certificado de sello digital (CSD) son el mismo certificado; la empresa usa la e.firma para sellar cada CFDI que emite.",
      "The e.firma and the digital seal certificate (CSD) are the same certificate; the company uses its e.firma to seal each CFDI it issues."
    ),
    answer: false,
    explanation: t(
      "Falso. La e.firma equivale a una firma autógrafa para trámites y declaraciones. Para sellar los CFDI se usa el CSD, un certificado distinto que se tramita con la e.firma. Confundirlos es un error común.",
      "False. The e.firma is equivalent to a handwritten signature for filings and procedures. CFDI are sealed with the CSD, a different certificate that is requested using the e.firma. Confusing them is a common mistake."
    ),
    difficulty: 1,
    points: 10,
    competency: "tax-obligations",
  },
  {
    id: "N5-003",
    level: 5,
    module: "L5-01",
    kind: "mcq",
    flavor: "concept",
    prompt: t(
      "¿Qué ordenamiento contiene las disposiciones comunes a los impuestos federales, como la inscripción en el RFC, la obligación de llevar contabilidad y las facultades de comprobación de la autoridad?",
      "Which legal instrument contains the provisions common to federal taxes, such as RFC registration, the duty to keep accounting records and the authority's audit powers?"
    ),
    options: [
      { id: "N5-003-a", text: t("La Ley del Impuesto al Valor Agregado", "The Value Added Tax Law") },
      { id: "N5-003-b", text: t("El Código Fiscal de la Federación", "The Federal Tax Code (CFF)") },
      { id: "N5-003-c", text: t("Las Normas de Información Financiera (NIF)", "Mexican Financial Reporting Standards (NIF)") },
      { id: "N5-003-d", text: t("La Ley de Ingresos de la Federación", "The Federal Revenue Law") },
    ],
    correctOptionId: "N5-003-b",
    explanation: t(
      "El CFF reúne las reglas generales y de procedimiento aplicables a todas las contribuciones federales. La LIVA regula solo el IVA, la Ley de Ingresos enumera los ingresos estimados del año y las NIF son normas contables, no fiscales.",
      "The CFF gathers the general and procedural rules that apply to all federal taxes. The LIVA governs only IVA, the Revenue Law lists the year's estimated revenue and NIF are accounting standards, not tax law."
    ),
    difficulty: 1,
    points: 10,
    competency: "tax-system",
  },
  {
    id: "N5-004",
    level: 5,
    module: "L5-01",
    kind: "classify",
    flavor: "concept",
    prompt: t(
      "Clasifica cada obligación como sustantiva (pagar) o formal (hacer, informar).",
      "Classify each obligation as substantive (paying) or formal (doing, reporting)."
    ),
    categories: [
      { id: "N5-004-c1", label: t("Obligación sustantiva", "Substantive obligation") },
      { id: "N5-004-c2", label: t("Obligación formal", "Formal obligation") },
    ],
    items: [
      { id: "N5-004-i1", label: t("Pagar el ISR anual del ejercicio", "Pay the annual income tax for the year"), correctCategoryId: "N5-004-c1" },
      { id: "N5-004-i2", label: t("Inscribirse en el RFC", "Register with the RFC"), correctCategoryId: "N5-004-c2" },
      { id: "N5-004-i3", label: t("Expedir CFDI por las ventas", "Issue CFDI for sales"), correctCategoryId: "N5-004-c2" },
      { id: "N5-004-i4", label: t("Enterar el IVA a cargo del mes", "Pay the month's IVA payable"), correctCategoryId: "N5-004-c1" },
      { id: "N5-004-i5", label: t("Enviar la balanza de comprobación al SAT (contabilidad electrónica)", "Send the trial balance to the SAT (electronic accounting)"), correctCategoryId: "N5-004-c2" },
      { id: "N5-004-i6", label: t("Presentar una declaración informativa", "File an informational return"), correctCategoryId: "N5-004-c2" },
    ],
    explanation: t(
      "La obligación sustantiva es entregar el impuesto (pagar ISR, enterar IVA). Todo lo demás —inscribirse, facturar, enviar contabilidad, informar— son obligaciones formales, que pueden generar multas aunque no haya impuesto a pagar.",
      "The substantive obligation is handing over the tax (paying ISR, paying IVA). Everything else —registering, invoicing, sending accounting data, reporting— are formal obligations, which can trigger penalties even when no tax is due."
    ),
    difficulty: 1,
    points: 10,
    competency: "tax-obligations",
  },
  {
    id: "N5-005",
    level: 5,
    module: "L5-01",
    kind: "truefalse",
    flavor: "concept",
    prompt: t(
      "La Resolución Miscelánea Fiscal (RMF) contiene reglas de carácter general emitidas por el SAT que se publican en el Diario Oficial de la Federación.",
      "The Resolución Miscelánea Fiscal (RMF) contains general rules issued by the SAT that are published in the Diario Oficial de la Federación (Official Gazette)."
    ),
    answer: true,
    explanation: t(
      "Verdadero. La RMF se publica en el DOF (por lo general con modificaciones durante el año) y detalla la aplicación operativa de las leyes fiscales. Por eso, además de la ley, siempre debes revisar la RMF vigente.",
      "True. The RMF is published in the DOF (usually with amendments during the year) and details how tax laws are applied in practice. That is why, besides the law, you should always check the current RMF."
    ),
    difficulty: 1,
    points: 10,
    competency: "tax-system",
  },
  {
    id: "N5-006",
    level: 5,
    module: "L5-01",
    kind: "multi",
    flavor: "case",
    context: t(
      "«Servicios Arce, S.A. de C.V.» (ficticia) acaba de constituirse y tributará en el régimen general de personas morales.",
      "«Servicios Arce, S.A. de C.V.» (fictitious) has just been incorporated and will be taxed under the general regime for legal entities."
    ),
    prompt: t(
      "¿Cuáles son obligaciones fiscales básicas de esta empresa? Selecciona todas las que apliquen.",
      "Which are basic tax obligations of this company? Select all that apply."
    ),
    options: [
      { id: "N5-006-a", text: t("Inscribirse en el RFC", "Register with the RFC") },
      { id: "N5-006-b", text: t("Pedir autorización al SAT antes de cada venta", "Request SAT authorization before each sale") },
      { id: "N5-006-c", text: t("Llevar contabilidad y enviar su información electrónica al SAT", "Keep accounting records and send the electronic data to the SAT") },
      { id: "N5-006-d", text: t("Presentar declaraciones periódicas (pagos provisionales, mensual de IVA y anual)", "File periodic returns (prepayments, monthly IVA and annual)") },
      { id: "N5-006-e", text: t("Registrar cada factura ante notario público", "Register every invoice before a notary public") },
    ],
    correctOptionIds: ["N5-006-a", "N5-006-c", "N5-006-d"],
    explanation: t(
      "Inscribirse en el RFC, llevar contabilidad (incluida la contabilidad electrónica) y presentar declaraciones son obligaciones básicas. No existe una autorización previa por cada venta ni registro notarial de facturas: los CFDI se validan mediante el timbrado de un PAC.",
      "Registering with the RFC, keeping accounting records (including electronic accounting) and filing returns are basic obligations. There is no prior authorization per sale nor notarial registration of invoices: CFDI are validated through stamping by a PAC."
    ),
    difficulty: 2,
    points: 15,
    competency: "tax-obligations",
  },
  // ═════════════════════════════ L5-02 ═════════════════════════════
  {
    id: "N5-007",
    level: 5,
    module: "L5-02",
    kind: "numeric",
    flavor: "case",
    context: t(
      "En marzo una empresa vendió $500,000 + IVA y compró insumos y servicios deducibles por $300,000 + IVA. Todas las operaciones están gravadas a 16 % y cuentan con CFDI.",
      "In March a company sold $500,000 + IVA and bought deductible inputs and services for $300,000 + IVA. All transactions are taxed at 16 % and supported by CFDI."
    ),
    prompt: t("Calcula el IVA a cargo del mes, en pesos.", "Compute the month's IVA payable, in pesos."),
    answer: 32000,
    unit: "MXN",
    decimals: 0,
    tolerance: { abs: 0.5 },
    explanation: t(
      "IVA trasladado = $500,000 × 16 % = $80,000. IVA acreditable = $300,000 × 16 % = $48,000. IVA a cargo = $80,000 − $48,000 = $32,000. Error común: aplicar 16 % a la diferencia de ventas menos compras sin distinguir ambos conceptos (aquí coincide, pero no cuando hay tasas o requisitos distintos).",
      "Output VAT = $500,000 × 16 % = $80,000. Input VAT = $300,000 × 16 % = $48,000. IVA payable = $80,000 − $48,000 = $32,000. Common mistake: applying 16 % to sales minus purchases without separating both concepts (it matches here, but not when rates or requirements differ)."
    ),
    difficulty: 1,
    points: 10,
    competency: "iva",
  },
  {
    id: "N5-008",
    level: 5,
    module: "L5-02",
    kind: "truefalse",
    flavor: "concept",
    prompt: t(
      "Si en un mes el IVA acreditable es mayor que el IVA trasladado, el resultado es un saldo a favor y no un IVA a cargo.",
      "If in a month input VAT exceeds output VAT, the result is a VAT credit (saldo a favor), not IVA payable."
    ),
    answer: true,
    explanation: t(
      "Verdadero. IVA trasladado − IVA acreditable < 0 significa saldo a favor, que puede acreditarse en meses siguientes o solicitarse en devolución conforme a los requisitos vigentes.",
      "True. Output VAT − input VAT < 0 means a VAT credit, which can be carried forward to later months or claimed as a refund subject to current requirements."
    ),
    difficulty: 1,
    points: 10,
    competency: "iva",
  },
  {
    id: "N5-009",
    level: 5,
    module: "L5-02",
    kind: "journal",
    flavor: "case",
    prompt: t(
      "Registra la venta de mercancía por $100,000 + IVA 16 %, cobrada mediante transferencia a la cuenta bancaria. (No registres el costo de ventas.)",
      "Record a sale of goods for $100,000 + 16 % IVA, collected by bank transfer. (Do not record cost of goods sold.)"
    ),
    accountChoices: ["1101", "1102", "1104", "1109", "2104", "2105", "4101", "4102"],
    expected: [
      { accountCode: "1102", side: "D", amount: 116000 },
      { accountCode: "4101", side: "C", amount: 100000 },
      { accountCode: "2104", side: "C", amount: 16000 },
    ],
    explanation: t(
      "Se carga Bancos por el total cobrado ($116,000), se abona Ventas por el valor sin IVA ($100,000) y se abona IVA trasladado por $16,000, que es un pasivo con el fisco. Errores comunes: abonar el IVA a IVA acreditable (ese es de compras) o registrar la venta por $116,000.",
      "Debit Bank for the total collected ($116,000), credit Sales for the amount before IVA ($100,000) and credit Output VAT for $16,000, a liability to the tax authority. Common mistakes: crediting Input VAT (that is for purchases) or recording sales at $116,000."
    ),
    difficulty: 2,
    points: 15,
    competency: "iva",
  },
  {
    id: "N5-010",
    level: 5,
    module: "L5-02",
    kind: "mcq",
    flavor: "concept",
    prompt: t(
      "En el esquema del CFDI 4.0, ¿quién valida el comprobante y le asigna el folio fiscal (UUID) mediante el timbrado?",
      "Under the CFDI 4.0 scheme, who validates the receipt and assigns the fiscal folio (UUID) through stamping?"
    ),
    options: [
      { id: "N5-010-a", text: t("El cliente que recibe la factura", "The customer who receives the invoice") },
      { id: "N5-010-b", text: t("El auditor externo de la empresa", "The company's external auditor") },
      { id: "N5-010-c", text: t("Un notario público", "A notary public") },
      { id: "N5-010-d", text: t("Un Proveedor de Certificación (PAC) autorizado por el SAT", "A SAT-authorized Certification Provider (PAC)") },
    ],
    correctOptionId: "N5-010-d",
    explanation: t(
      "El emisor sella el CFDI con su CSD y lo envía a un PAC, que lo valida, le asigna el UUID y lo reporta al SAT. El receptor solo puede verificarlo; ni auditores ni notarios intervienen en el timbrado.",
      "The issuer seals the CFDI with its CSD and sends it to a PAC, which validates it, assigns the UUID and reports it to the SAT. The recipient can only verify it; neither auditors nor notaries take part in stamping."
    ),
    difficulty: 1,
    points: 10,
    competency: "cfdi",
  },
  {
    id: "N5-011",
    level: 5,
    module: "L5-02",
    kind: "formula",
    flavor: "concept",
    prompt: t(
      "Completa el cálculo simplificado del ISR anual de una persona moral del régimen general.",
      "Complete the simplified annual income tax calculation for a legal entity under the general regime."
    ),
    template: "Resultado fiscal = {{b1}} − {{b2}};  ISR = {{b3}} × Resultado fiscal",
    blanks: [
      {
        id: "b1",
        options: [
          { id: "N5-011-b1-a", text: t("Ventas totales con IVA", "Total sales including IVA") },
          { id: "N5-011-b1-b", text: t("Utilidad fiscal", "Taxable profit") },
          { id: "N5-011-b1-c", text: t("Utilidad neta contable", "Accounting net income") },
        ],
        correctOptionId: "N5-011-b1-b",
      },
      {
        id: "b2",
        options: [
          { id: "N5-011-b2-a", text: t("Pagos provisionales", "Prepayments") },
          { id: "N5-011-b2-b", text: t("IVA acreditable", "Input VAT") },
          { id: "N5-011-b2-c", text: t("Pérdidas fiscales pendientes de amortizar", "Unused tax loss carryforwards") },
        ],
        correctOptionId: "N5-011-b2-c",
      },
      {
        id: "b3",
        options: [
          { id: "N5-011-b3-a", text: t("16 %", "16 %") },
          { id: "N5-011-b3-b", text: t("30 %", "30 %") },
          { id: "N5-011-b3-c", text: t("35 %", "35 %") },
          { id: "N5-011-b3-d", text: t("10 %", "10 %") },
        ],
        correctOptionId: "N5-011-b3-b",
      },
    ],
    explanation: t(
      "Resultado fiscal = utilidad fiscal − pérdidas fiscales por amortizar; ISR = 30 % × resultado fiscal. Los pagos provisionales se restan después, al ISR ya calculado, no a la base. El 16 % es la tasa general de IVA, no de ISR.",
      "Taxable result = taxable profit − unused tax losses; ISR = 30 % × taxable result. Prepayments are subtracted afterwards from the computed tax, not from the base. 16 % is the general IVA rate, not the income tax rate."
    ),
    difficulty: 2,
    points: 15,
    competency: "isr",
  },
  {
    id: "N5-012",
    level: 5,
    module: "L5-02",
    kind: "fields",
    flavor: "case",
    context: t(
      "Persona moral ficticia (modelo simplificado): ingresos acumulables $5,000,000; deducciones autorizadas $3,800,000; pérdida fiscal de años anteriores por amortizar $200,000; pagos provisionales efectuados $240,000.",
      "Fictitious legal entity (simplified model): taxable income $5,000,000; authorized deductions $3,800,000; prior-year tax loss carryforward $200,000; prepayments made $240,000."
    ),
    prompt: t("Calcula cada concepto en pesos.", "Compute each item in pesos."),
    fields: [
      { id: "f1", label: t("Utilidad fiscal", "Taxable profit"), answer: 1200000, unit: "MXN", tolerance: { abs: 0.5 } },
      { id: "f2", label: t("Resultado fiscal", "Taxable result"), answer: 1000000, unit: "MXN", tolerance: { abs: 0.5 } },
      { id: "f3", label: t("ISR del ejercicio (30 %)", "Annual income tax (30 %)"), answer: 300000, unit: "MXN", tolerance: { abs: 0.5 } },
      { id: "f4", label: t("ISR a cargo después de pagos provisionales", "Tax due after prepayments"), answer: 60000, unit: "MXN", tolerance: { abs: 0.5 } },
    ],
    explanation: t(
      "Utilidad fiscal = $5,000,000 − $3,800,000 = $1,200,000. Resultado fiscal = $1,200,000 − $200,000 = $1,000,000. ISR = $1,000,000 × 30 % = $300,000. A cargo = $300,000 − $240,000 = $60,000. Error común: restar los pagos provisionales antes de aplicar la tasa.",
      "Taxable profit = $5,000,000 − $3,800,000 = $1,200,000. Taxable result = $1,200,000 − $200,000 = $1,000,000. ISR = $1,000,000 × 30 % = $300,000. Due = $300,000 − $240,000 = $60,000. Common mistake: subtracting prepayments before applying the rate."
    ),
    difficulty: 2,
    points: 15,
    competency: "isr",
  },
  {
    id: "N5-013",
    level: 5,
    module: "L5-02",
    kind: "classify",
    flavor: "concept",
    prompt: t(
      "Clasifica cada partida como diferencia temporal o permanente entre la utilidad contable y la fiscal.",
      "Classify each item as a temporary or permanent difference between book and taxable income."
    ),
    categories: [
      { id: "N5-013-c1", label: t("Diferencia temporal", "Temporary difference") },
      { id: "N5-013-c2", label: t("Diferencia permanente", "Permanent difference") },
    ],
    items: [
      { id: "N5-013-i1", label: t("Depreciación contable a una tasa distinta de la fiscal", "Book depreciation at a rate different from the tax rate"), correctCategoryId: "N5-013-c1" },
      { id: "N5-013-i2", label: t("Multas y recargos pagados que no son deducibles", "Fines and surcharges paid that are not deductible"), correctCategoryId: "N5-013-c2" },
      { id: "N5-013-i3", label: t("Estimación para cuentas incobrables (fiscalmente se deduce hasta que la cuenta es incobrable conforme a la ley)", "Allowance for doubtful accounts (deducted for tax only when the account is uncollectible under the law)"), correctCategoryId: "N5-013-c1" },
      { id: "N5-013-i4", label: t("Gastos sin comprobante fiscal que nunca serán deducibles", "Expenses without a tax receipt that will never be deductible"), correctCategoryId: "N5-013-c2" },
      { id: "N5-013-i5", label: t("Provisión de garantías reconocida como gasto hoy y deducible cuando se paga", "Warranty provision expensed today and deductible when paid"), correctCategoryId: "N5-013-c1" },
    ],
    explanation: t(
      "Es temporal si la partida se reconoce en ambos lados pero en periodos distintos (depreciación, estimaciones, provisiones). Es permanente si un lado nunca la reconocerá (multas no deducibles, gastos sin requisitos fiscales). Solo las temporales generan impuestos diferidos.",
      "It is temporary if the item is recognized on both sides but in different periods (depreciation, allowances, provisions). It is permanent if one side will never recognize it (non-deductible fines, expenses lacking tax requirements). Only temporary differences create deferred taxes."
    ),
    difficulty: 2,
    points: 15,
    competency: "book-tax-differences",
  },
  {
    id: "N5-014",
    level: 5,
    module: "L5-02",
    kind: "numeric",
    flavor: "interpret",
    context: t(
      "En el año, la depreciación contable de una maquinaria es $200,000 y la deducción fiscal por la misma maquinaria es $300,000. Tasa de ISR: 30 %.",
      "This year, book depreciation on a machine is $200,000 and the tax deduction for the same machine is $300,000. Income tax rate: 30 %."
    ),
    prompt: t(
      "¿Qué importe de impuesto diferido se origina por esta diferencia temporal en el año? (Es un pasivo por impuesto diferido.) Responde en pesos.",
      "What amount of deferred tax arises from this temporary difference this year? (It is a deferred tax liability.) Answer in pesos."
    ),
    answer: 30000,
    unit: "MXN",
    decimals: 0,
    tolerance: { abs: 0.5 },
    explanation: t(
      "Diferencia temporal = $300,000 − $200,000 = $100,000. Impuesto diferido = $100,000 × 30 % = $30,000. Como hoy se deduce más de lo que se reconoce como gasto contable, en el futuro la deducción fiscal será menor y se pagará más impuesto: pasivo por impuesto diferido (NIF D-4 / IAS 12). Error común: multiplicar la depreciación total por la tasa.",
      "Temporary difference = $300,000 − $200,000 = $100,000. Deferred tax = $100,000 × 30 % = $30,000. Because more is deducted today than is expensed in the books, future tax deductions will be lower and more tax will be paid: a deferred tax liability (NIF D-4 / IAS 12). Common mistake: multiplying total depreciation by the rate."
    ),
    difficulty: 3,
    points: 20,
    competency: "deferred-tax",
  },
  // ═════════════════════════════ L5-03 ═════════════════════════════
  {
    id: "N5-015",
    level: 5,
    module: "L5-03",
    kind: "mcq",
    flavor: "concept",
    prompt: t(
      "¿Cuál es el objetivo principal de una auditoría de estados financieros bajo las NIA?",
      "What is the main objective of a financial statement audit under ISA?"
    ),
    options: [
      { id: "N5-015-a", text: t("Garantizar que no existe ningún fraude en la empresa", "Guarantee that there is no fraud at all in the company") },
      { id: "N5-015-b", text: t("Emitir una opinión, con seguridad razonable, sobre si los estados financieros están libres de errores materiales conforme al marco aplicable", "Issue an opinion, with reasonable assurance, on whether the financial statements are free from material misstatement under the applicable framework") },
      { id: "N5-015-c", text: t("Preparar los estados financieros de la empresa", "Prepare the company's financial statements") },
      { id: "N5-015-d", text: t("Calcular los impuestos que la empresa debe pagar", "Compute the taxes the company must pay") },
    ],
    correctOptionId: "N5-015-b",
    explanation: t(
      "La auditoría busca seguridad razonable —no absoluta— para opinar sobre errores materiales. No garantiza la ausencia total de fraude; preparar los estados financieros es responsabilidad de la administración, y el cálculo de impuestos no es el objetivo de la auditoría financiera.",
      "The audit seeks reasonable —not absolute— assurance to give an opinion on material misstatement. It does not guarantee zero fraud; preparing the financial statements is management's responsibility, and computing taxes is not the objective of a financial audit."
    ),
    difficulty: 1,
    points: 10,
    competency: "audit-objective",
  },
  {
    id: "N5-016",
    level: 5,
    module: "L5-03",
    kind: "truefalse",
    flavor: "concept",
    prompt: t(
      "La responsabilidad de preparar los estados financieros y de diseñar el control interno recae en la administración de la entidad, no en el auditor externo.",
      "Responsibility for preparing the financial statements and designing internal control lies with the entity's management, not with the external auditor."
    ),
    answer: true,
    explanation: t(
      "Verdadero. Es una premisa de toda auditoría (NIA 200 y NIA 210): la administración reconoce su responsabilidad; el auditor solo responde por su opinión.",
      "True. It is a premise of every audit (ISA 200 and ISA 210): management acknowledges its responsibility; the auditor is responsible only for the opinion."
    ),
    difficulty: 1,
    points: 10,
    competency: "audit-objective",
  },
  {
    id: "N5-017",
    level: 5,
    module: "L5-03",
    kind: "multi",
    flavor: "concept",
    prompt: t(
      "¿Cuáles son componentes del marco de control interno COSO 2013? Selecciona todas las que apliquen.",
      "Which are components of the COSO 2013 internal control framework? Select all that apply."
    ),
    options: [
      { id: "N5-017-a", text: t("Entorno de control", "Control environment") },
      { id: "N5-017-b", text: t("Maximización de utilidades", "Profit maximization") },
      { id: "N5-017-c", text: t("Evaluación de riesgos", "Risk assessment") },
      { id: "N5-017-d", text: t("Auditoría fiscal anual", "Annual tax audit") },
      { id: "N5-017-e", text: t("Actividades de supervisión", "Monitoring activities") },
    ],
    correctOptionIds: ["N5-017-a", "N5-017-c", "N5-017-e"],
    explanation: t(
      "Los cinco componentes son: entorno de control, evaluación de riesgos, actividades de control, información y comunicación, y actividades de supervisión. La maximización de utilidades es un objetivo de negocio y la auditoría fiscal no es un componente de COSO.",
      "The five components are: control environment, risk assessment, control activities, information and communication, and monitoring activities. Profit maximization is a business goal and a tax audit is not a COSO component."
    ),
    difficulty: 1,
    points: 10,
    competency: "internal-control",
  },
  {
    id: "N5-018",
    level: 5,
    module: "L5-03",
    kind: "classify",
    flavor: "concept",
    prompt: t("Clasifica cada control como preventivo o detectivo.", "Classify each control as preventive or detective."),
    categories: [
      { id: "N5-018-c1", label: t("Preventivo", "Preventive") },
      { id: "N5-018-c2", label: t("Detectivo", "Detective") },
    ],
    items: [
      { id: "N5-018-i1", label: t("Límite de autorización: pagos mayores de $50,000 requieren firma del director", "Approval limit: payments over $50,000 require the director's signature"), correctCategoryId: "N5-018-c1" },
      { id: "N5-018-i2", label: t("Conciliación bancaria mensual revisada por un supervisor", "Monthly bank reconciliation reviewed by a supervisor"), correctCategoryId: "N5-018-c2" },
      { id: "N5-018-i3", label: t("Contraseñas y perfiles de acceso al sistema contable", "Passwords and access profiles in the accounting system"), correctCategoryId: "N5-018-c1" },
      { id: "N5-018-i4", label: t("Conteo físico de inventarios comparado contra registros", "Physical inventory count compared with records"), correctCategoryId: "N5-018-c2" },
      { id: "N5-018-i5", label: t("Separar a quien autoriza compras de quien paga a proveedores", "Separating who approves purchases from who pays suppliers"), correctCategoryId: "N5-018-c1" },
      { id: "N5-018-i6", label: t("Revisión del reporte de asientos manuales registrados al cierre", "Review of the report of manual entries posted at period-end"), correctCategoryId: "N5-018-c2" },
    ],
    explanation: t(
      "Los preventivos actúan antes de que ocurra el problema (autorizaciones, accesos, segregación). Los detectivos lo identifican después comparando o revisando (conciliaciones, conteos, revisión de reportes).",
      "Preventive controls act before the problem happens (approvals, access, segregation). Detective controls identify it afterwards by comparing or reviewing (reconciliations, counts, report reviews)."
    ),
    difficulty: 2,
    points: 15,
    competency: "internal-control",
  },
  {
    id: "N5-019",
    level: 5,
    module: "L5-03",
    kind: "truefalse",
    flavor: "concept",
    prompt: t(
      "Una adecuada segregación de funciones permite que la misma persona autorice los pagos, los registre en contabilidad y concilie la cuenta bancaria, siempre que sea de confianza.",
      "Proper segregation of duties allows the same person to approve payments, record them and reconcile the bank account, provided that person is trusted."
    ),
    answer: false,
    explanation: t(
      "Falso. Autorizar, registrar y conciliar son funciones incompatibles; concentrarlas permite cometer y ocultar errores o fraudes. La confianza en una persona no sustituye un control.",
      "False. Approving, recording and reconciling are incompatible duties; combining them allows someone to commit and conceal errors or fraud. Trust in a person is not a substitute for a control."
    ),
    difficulty: 1,
    points: 10,
    competency: "segregation-of-duties",
  },
  {
    id: "N5-020",
    level: 5,
    module: "L5-03",
    kind: "mcq",
    flavor: "case",
    context: t(
      "En una distribuidora, la misma empleada recibe los cheques y depósitos de clientes, registra los cobros en la cuenta de Clientes y autoriza las notas de crédito y cancelaciones de saldos.",
      "At a distributor, the same employee receives customer checks and deposits, records collections in Accounts receivable and approves credit notes and write-offs."
    ),
    prompt: t("¿Cuál es la mejor medida para corregir la debilidad?", "What is the best measure to fix the weakness?"),
    options: [
      { id: "N5-020-a", text: t("Pedirle que firme una carta de confidencialidad", "Ask her to sign a confidentiality letter") },
      { id: "N5-020-b", text: t("Aumentar su sueldo para reducir la presión económica", "Raise her salary to reduce financial pressure") },
      { id: "N5-020-c", text: t("Separar la custodia del efectivo del registro de cobranza y asignar a otra persona la autorización de notas de crédito", "Separate custody of cash from recording collections, and assign approval of credit notes to someone else") },
      { id: "N5-020-d", text: t("Contratar una auditoría externa cada cinco años", "Hire an external audit every five years") },
    ],
    correctOptionId: "N5-020-c",
    explanation: t(
      "La empleada concentra custodia, registro y autorización, lo que permite esquemas como el «jineteo» (lapping) o cancelar saldos para ocultar faltantes. La solución es segregar funciones. Las otras opciones no eliminan la oportunidad; una auditoría esporádica no es un control interno.",
      "The employee holds custody, recording and authorization, which enables schemes such as lapping or writing off balances to hide shortages. The fix is segregating duties. The other options do not remove the opportunity; an occasional audit is not an internal control."
    ),
    difficulty: 2,
    points: 15,
    competency: "segregation-of-duties",
  },
  {
    id: "N5-021",
    level: 5,
    module: "L5-03",
    kind: "mcq",
    flavor: "interpret",
    context: t(
      "El auditor detecta que los inventarios están sobrevaluados en un importe material. La administración se niega a corregirlo. El error afecta solo a inventarios y al costo de ventas; el resto de los estados financieros está razonablemente presentado.",
      "The auditor finds inventory overstated by a material amount. Management refuses to correct it. The misstatement affects only inventory and cost of sales; the rest of the financial statements is fairly presented."
    ),
    prompt: t("¿Qué tipo de opinión corresponde?", "Which type of opinion applies?"),
    options: [
      { id: "N5-021-a", text: t("Opinión no modificada (limpia)", "Unmodified (clean) opinion") },
      { id: "N5-021-b", text: t("Abstención de opinión", "Disclaimer of opinion") },
      { id: "N5-021-c", text: t("Opinión desfavorable (adversa)", "Adverse opinion") },
      { id: "N5-021-d", text: t("Opinión con salvedades", "Qualified opinion") },
    ],
    correctOptionId: "N5-021-d",
    explanation: t(
      "Es un error material pero no generalizado (afecta rubros específicos): opinión con salvedades (NIA 705). La adversa aplica si el error es material y generalizado; la abstención, cuando no se obtiene evidencia suficiente. La limpia no procede porque hay un error material sin corregir.",
      "It is a material but not pervasive misstatement (it affects specific line items): qualified opinion (ISA 705). Adverse applies when the misstatement is material and pervasive; a disclaimer, when sufficient evidence cannot be obtained. A clean opinion is not possible because a material misstatement remains uncorrected."
    ),
    difficulty: 3,
    points: 20,
    competency: "audit-opinion",
  },
  // ═════════════════════════════ L5-04 ═════════════════════════════
  {
    id: "N5-022",
    level: 5,
    module: "L5-04",
    kind: "formula",
    flavor: "concept",
    prompt: t("Completa el modelo de riesgo de auditoría.", "Complete the audit risk model."),
    template: "Riesgo de auditoría = {{b1}} × {{b2}} × {{b3}}",
    blanks: [
      {
        id: "b1",
        options: [
          { id: "N5-022-b1-a", text: t("Riesgo inherente", "Inherent risk") },
          { id: "N5-022-b1-b", text: t("Riesgo de mercado", "Market risk") },
          { id: "N5-022-b1-c", text: t("Materialidad", "Materiality") },
        ],
        correctOptionId: "N5-022-b1-a",
      },
      {
        id: "b2",
        options: [
          { id: "N5-022-b2-a", text: t("Riesgo de liquidez", "Liquidity risk") },
          { id: "N5-022-b2-b", text: t("Riesgo de control", "Control risk") },
          { id: "N5-022-b2-c", text: t("Riesgo de fraude", "Fraud risk") },
        ],
        correctOptionId: "N5-022-b2-b",
      },
      {
        id: "b3",
        options: [
          { id: "N5-022-b3-a", text: t("Riesgo de negocio", "Business risk") },
          { id: "N5-022-b3-b", text: t("Riesgo de muestreo", "Sampling risk") },
          { id: "N5-022-b3-c", text: t("Riesgo de detección", "Detection risk") },
          { id: "N5-022-b3-d", text: t("Riesgo fiscal", "Tax risk") },
        ],
        correctOptionId: "N5-022-b3-c",
      },
    ],
    explanation: t(
      "RA = RI × RC × RD. RI y RC (juntos, el riesgo de error material) son de la entidad; el RD depende de los procedimientos del auditor. El riesgo de muestreo es solo una parte del RD, no un factor separado del modelo.",
      "AR = IR × CR × DR. IR and CR (together, the risk of material misstatement) belong to the entity; DR depends on the auditor's procedures. Sampling risk is only part of DR, not a separate factor in the model."
    ),
    difficulty: 1,
    points: 10,
    competency: "audit-risk",
  },
  {
    id: "N5-023",
    level: 5,
    module: "L5-04",
    kind: "numeric",
    flavor: "case",
    context: t(
      "Para la cuenta de Clientes, el auditor acepta un riesgo de auditoría de 4 %. Evalúa el riesgo inherente en 80 % y el riesgo de control en 40 %.",
      "For Accounts receivable, the auditor accepts audit risk of 4 %. Inherent risk is assessed at 80 % and control risk at 40 %."
    ),
    prompt: t("Calcula el riesgo de detección planeado, en %. Redondea a 1 decimal.", "Compute the planned detection risk, in %. Round to 1 decimal."),
    answer: 12.5,
    unit: "%",
    decimals: 1,
    tolerance: { abs: 0.05 },
    explanation: t(
      "RD = RA ÷ (RI × RC) = 0.04 ÷ (0.80 × 0.40) = 0.04 ÷ 0.32 = 0.125 = 12.5 %. Error común: restar en lugar de dividir, o multiplicar los tres riesgos.",
      "DR = AR ÷ (IR × CR) = 0.04 ÷ (0.80 × 0.40) = 0.04 ÷ 0.32 = 0.125 = 12.5 %. Common mistake: subtracting instead of dividing, or multiplying all three risks."
    ),
    difficulty: 2,
    points: 15,
    competency: "audit-risk",
  },
  {
    id: "N5-024",
    level: 5,
    module: "L5-04",
    kind: "mcq",
    flavor: "interpret",
    prompt: t(
      "Tras probar los controles de ventas, el auditor eleva su evaluación del riesgo de control de bajo a alto. Manteniendo el mismo riesgo de auditoría aceptable, ¿qué debe hacer?",
      "After testing sales controls, the auditor raises control risk from low to high. Keeping the same acceptable audit risk, what should the auditor do?"
    ),
    options: [
      { id: "N5-024-a", text: t("Aumentar el riesgo de detección y reducir las pruebas sustantivas", "Increase detection risk and reduce substantive testing") },
      { id: "N5-024-b", text: t("Mantener el plan original, porque el riesgo de control no afecta el trabajo del auditor", "Keep the original plan, because control risk does not affect the auditor's work") },
      { id: "N5-024-c", text: t("Reducir el riesgo de detección planeado: más pruebas sustantivas, muestras mayores y más cerca del cierre", "Lower planned detection risk: more substantive testing, larger samples and closer to year-end") },
      { id: "N5-024-d", text: t("Elevar la materialidad para compensar", "Raise materiality to compensate") },
    ],
    correctOptionId: "N5-024-c",
    explanation: t(
      "Con RA fijo, si RC sube, RD = RA ÷ (RI × RC) baja. Un RD menor exige pruebas sustantivas más extensas y persuasivas. Elevar la materialidad para «compensar» el riesgo es una práctica incorrecta.",
      "With AR fixed, if CR rises, DR = AR ÷ (IR × CR) falls. A lower DR requires more extensive and persuasive substantive testing. Raising materiality to «compensate» for risk is improper."
    ),
    difficulty: 2,
    points: 15,
    competency: "audit-risk",
  },
  {
    id: "N5-025",
    level: 5,
    module: "L5-04",
    kind: "fields",
    flavor: "case",
    context: t(
      "Una empresa ficticia reporta utilidad antes de impuestos de $8,400,000. El equipo de auditoría decide (de forma ilustrativa): materialidad global = 5 % de la utilidad antes de impuestos; materialidad de ejecución = 75 % de la global; umbral claramente insignificante = 5 % de la global.",
      "A fictitious company reports profit before tax of $8,400,000. The audit team decides (illustratively): overall materiality = 5 % of profit before tax; performance materiality = 75 % of overall; clearly trivial threshold = 5 % of overall."
    ),
    prompt: t("Calcula cada importe en pesos.", "Compute each amount in pesos."),
    fields: [
      { id: "f1", label: t("Materialidad global", "Overall materiality"), answer: 420000, unit: "MXN", tolerance: { abs: 0.5 } },
      { id: "f2", label: t("Materialidad de ejecución", "Performance materiality"), answer: 315000, unit: "MXN", tolerance: { abs: 0.5 } },
      { id: "f3", label: t("Umbral claramente insignificante", "Clearly trivial threshold"), answer: 21000, unit: "MXN", tolerance: { abs: 0.5 } },
    ],
    explanation: t(
      "Global: $8,400,000 × 5 % = $420,000. Ejecución: $420,000 × 75 % = $315,000. Insignificante: $420,000 × 5 % = $21,000. Error común: calcular la de ejecución y el umbral sobre la utilidad en lugar de sobre la materialidad global. Los porcentajes son juicio profesional, no fijados por la NIA 320.",
      "Overall: $8,400,000 × 5 % = $420,000. Performance: $420,000 × 75 % = $315,000. Trivial: $420,000 × 5 % = $21,000. Common mistake: computing performance materiality and the threshold on profit instead of on overall materiality. The percentages are professional judgment, not set by ISA 320."
    ),
    difficulty: 2,
    points: 15,
    competency: "materiality",
  },
  {
    id: "N5-026",
    level: 5,
    module: "L5-04",
    kind: "multi",
    flavor: "concept",
    prompt: t(
      "¿Cuáles de estas evidencias son, en general, MÁS confiables? Selecciona todas las que apliquen.",
      "Which of these items of evidence are generally MORE reliable? Select all that apply."
    ),
    options: [
      { id: "N5-026-a", text: t("Confirmación de saldo enviada por el banco directamente al auditor", "Balance confirmation sent by the bank directly to the auditor") },
      { id: "N5-026-b", text: t("Declaración verbal del gerente de ventas", "Oral statement from the sales manager") },
      { id: "N5-026-c", text: t("Recálculo de la depreciación hecho por el propio auditor", "Recalculation of depreciation performed by the auditor") },
      { id: "N5-026-d", text: t("Fotocopia de un contrato proporcionada por el cliente", "Photocopy of a contract provided by the client") },
      { id: "N5-026-e", text: t("Contrato original firmado, inspeccionado por el auditor", "Original signed contract inspected by the auditor") },
    ],
    correctOptionIds: ["N5-026-a", "N5-026-c", "N5-026-e"],
    explanation: t(
      "Es más confiable la evidencia externa e independiente (confirmación bancaria), la obtenida directamente por el auditor (recálculo) y la documental original. La indagación verbal y las copias proporcionadas por la entidad son menos confiables y suelen requerir corroboración (NIA 500).",
      "Evidence is more reliable when external and independent (bank confirmation), obtained directly by the auditor (recalculation) and documentary in original form. Oral inquiry and copies provided by the entity are less reliable and usually need corroboration (ISA 500)."
    ),
    difficulty: 2,
    points: 15,
    competency: "audit-evidence",
  },
  {
    id: "N5-027",
    level: 5,
    module: "L5-04",
    kind: "truefalse",
    flavor: "concept",
    prompt: t(
      "Si la evidencia obtenida es de baja calidad, el auditor puede compensarla simplemente obteniendo una mayor cantidad de la misma evidencia.",
      "If the evidence obtained is of low quality, the auditor can compensate simply by obtaining a larger quantity of the same evidence."
    ),
    answer: false,
    explanation: t(
      "Falso. Suficiencia (cantidad) y adecuación (calidad) están relacionadas, pero obtener más evidencia no compensa su mala calidad. Se necesita evidencia más relevante o confiable (por ejemplo, confirmaciones externas en lugar de más indagaciones).",
      "False. Sufficiency (quantity) and appropriateness (quality) are related, but more evidence does not compensate for poor quality. More relevant or reliable evidence is needed (e.g. external confirmations instead of more inquiries)."
    ),
    difficulty: 1,
    points: 10,
    competency: "audit-evidence",
  },
  {
    id: "N5-028",
    level: 5,
    module: "L5-04",
    kind: "classify",
    flavor: "concept",
    prompt: t("Clasifica cada procedimiento según su propósito.", "Classify each procedure by its purpose."),
    categories: [
      { id: "N5-028-c1", label: t("Evaluación de riesgos", "Risk assessment") },
      { id: "N5-028-c2", label: t("Prueba de controles", "Test of controls") },
      { id: "N5-028-c3", label: t("Procedimiento sustantivo", "Substantive procedure") },
    ],
    items: [
      { id: "N5-028-i1", label: t("Indagar con la dirección sobre cambios en el negocio y la industria", "Inquire of management about changes in the business and industry"), correctCategoryId: "N5-028-c1" },
      { id: "N5-028-i2", label: t("Inspeccionar en una muestra de órdenes de compra la firma de autorización", "Inspect a sample of purchase orders for the approval signature"), correctCategoryId: "N5-028-c2" },
      { id: "N5-028-i3", label: t("Enviar confirmaciones de saldo a clientes", "Send balance confirmations to customers"), correctCategoryId: "N5-028-c3" },
      { id: "N5-028-i4", label: t("Reejecutar la conciliación bancaria que prepara el control para verificar que opera", "Reperform the bank reconciliation control to verify it operates"), correctCategoryId: "N5-028-c2" },
      { id: "N5-028-i5", label: t("Cotejar ventas registradas contra remisiones y CFDI", "Vouch recorded sales to shipping documents and CFDI"), correctCategoryId: "N5-028-c3" },
      { id: "N5-028-i6", label: t("Analítica preliminar: comparar márgenes contra el año anterior para detectar áreas de riesgo", "Preliminary analytics: compare margins with the prior year to spot risk areas"), correctCategoryId: "N5-028-c1" },
    ],
    explanation: t(
      "La evaluación de riesgos identifica dónde pueden estar los errores (indagación, analítica preliminar). Las pruebas de controles verifican que un control opera (inspección de autorizaciones, reejecución). Las sustantivas buscan errores en saldos y transacciones (confirmaciones, cotejo con documentación).",
      "Risk assessment identifies where misstatements may be (inquiry, preliminary analytics). Tests of controls verify that a control operates (inspecting approvals, reperformance). Substantive procedures look for misstatements in balances and transactions (confirmations, vouching)."
    ),
    difficulty: 3,
    points: 20,
    competency: "audit-procedures",
  },
  // ═════════════════════════════ L5-05 ═════════════════════════════
  {
    id: "N5-029",
    level: 5,
    module: "L5-05",
    kind: "mcq",
    flavor: "case",
    context: t(
      "Un cajero toma dinero del fondo y piensa: «Solo es un préstamo; lo devolveré con mi aguinaldo, y además la empresa me debe horas extra».",
      "A cashier takes money from the fund and thinks: «It is just a loan; I will repay it with my year-end bonus, and besides the company owes me overtime»."
    ),
    prompt: t("¿Qué elemento del triángulo del fraude ilustra este pensamiento?", "Which element of the fraud triangle does this thought illustrate?"),
    options: [
      { id: "N5-029-a", text: t("Oportunidad", "Opportunity") },
      { id: "N5-029-b", text: t("Presión", "Pressure") },
      { id: "N5-029-c", text: t("Capacidad técnica", "Technical capability") },
      { id: "N5-029-d", text: t("Racionalización", "Rationalization") },
    ],
    correctOptionId: "N5-029-d",
    explanation: t(
      "La justificación interna («es un préstamo», «me lo deben») es la racionalización. La presión sería la necesidad económica y la oportunidad, el acceso al fondo sin controles. La capacidad no forma parte del triángulo clásico (aparece en el «diamante» del fraude).",
      "The internal justification («it is a loan», «they owe me») is rationalization. Pressure would be the financial need and opportunity the uncontrolled access to the fund. Capability is not part of the classic triangle (it appears in the fraud «diamond»)."
    ),
    difficulty: 1,
    points: 10,
    competency: "fraud-triangle",
  },
  {
    id: "N5-030",
    level: 5,
    module: "L5-05",
    kind: "truefalse",
    flavor: "concept",
    prompt: t(
      "Encontrar una señal de alerta, como un proveedor con la misma dirección que un empleado, es prueba suficiente para afirmar que ese empleado cometió fraude.",
      "Finding a red flag, such as a supplier with the same address as an employee, is sufficient proof to state that the employee committed fraud."
    ),
    answer: false,
    explanation: t(
      "Falso. Una señal de alerta solo justifica investigar: puede existir una explicación legítima (por ejemplo, un familiar proveedor declarado y autorizado). Se requiere evidencia suficiente y adecuada, y la determinación de responsabilidad corresponde a las autoridades.",
      "False. A red flag only justifies investigating: there may be a legitimate explanation (e.g. a disclosed and approved related-party supplier). Sufficient appropriate evidence is required, and determining responsibility belongs to the authorities."
    ),
    difficulty: 1,
    points: 10,
    competency: "red-flags",
  },
  {
    id: "N5-031",
    level: 5,
    module: "L5-05",
    kind: "classify",
    flavor: "concept",
    prompt: t(
      "Clasifica cada esquema según el árbol del fraude ocupacional (ACFE).",
      "Classify each scheme according to the occupational fraud tree (ACFE)."
    ),
    categories: [
      { id: "N5-031-c1", label: t("Apropiación indebida de activos", "Asset misappropriation") },
      { id: "N5-031-c2", label: t("Información financiera fraudulenta", "Fraudulent financial reporting") },
      { id: "N5-031-c3", label: t("Corrupción", "Corruption") },
    ],
    items: [
      { id: "N5-031-i1", label: t("Registrar ventas ficticias al cierre para alcanzar la meta", "Recording fictitious sales at period-end to hit the target"), correctCategoryId: "N5-031-c2" },
      { id: "N5-031-i2", label: t("Quedarse con cobros en efectivo antes de registrarlos", "Pocketing cash receipts before they are recorded (skimming)"), correctCategoryId: "N5-031-c1" },
      { id: "N5-031-i3", label: t("Recibir una comisión de un proveedor a cambio de adjudicarle contratos", "Receiving a kickback from a supplier in exchange for contracts"), correctCategoryId: "N5-031-c3" },
      { id: "N5-031-i4", label: t("Pagar nómina a «empleados fantasma»", "Paying payroll to «ghost employees»"), correctCategoryId: "N5-031-c1" },
      { id: "N5-031-i5", label: t("Omitir pasivos para mostrar menor endeudamiento", "Omitting liabilities to show lower leverage"), correctCategoryId: "N5-031-c2" },
      { id: "N5-031-i6", label: t("Ofrecer un soborno a un funcionario para agilizar un permiso", "Offering a bribe to an official to speed up a permit"), correctCategoryId: "N5-031-c3" },
    ],
    explanation: t(
      "Apropiación indebida: robar o usar indebidamente activos (skimming, empleados fantasma). Información fraudulenta: manipular los estados financieros (ventas ficticias, pasivos omitidos). Corrupción: usar la influencia en una transacción para obtener un beneficio (comisiones ilegales, sobornos).",
      "Asset misappropriation: stealing or misusing assets (skimming, ghost employees). Fraudulent reporting: manipulating the financial statements (fictitious sales, omitted liabilities). Corruption: misusing influence in a transaction for a benefit (kickbacks, bribes)."
    ),
    difficulty: 2,
    points: 15,
    competency: "fraud-types",
  },
  {
    id: "N5-032",
    level: 5,
    module: "L5-05",
    kind: "multi",
    flavor: "concept",
    prompt: t(
      "¿Cuáles de las siguientes son señales de alerta de posible fraude? Selecciona todas las que apliquen.",
      "Which of the following are red flags of possible fraud? Select all that apply."
    ),
    options: [
      { id: "N5-032-a", text: t("Asientos manuales por importes redondos registrados por un directivo el último día del ejercicio", "Round-amount manual entries posted by a senior executive on the last day of the year") },
      { id: "N5-032-b", text: t("Conciliaciones bancarias al día y revisadas por un supervisor independiente", "Up-to-date bank reconciliations reviewed by an independent supervisor") },
      { id: "N5-032-c", text: t("Un empleado de cuentas por pagar que nunca toma vacaciones ni permite que otros revisen su trabajo", "An accounts payable clerk who never takes vacation or lets others review their work") },
      { id: "N5-032-d", text: t("Rotación periódica de puestos en tesorería", "Periodic job rotation in treasury") },
      { id: "N5-032-e", text: t("Pagos a un proveedor nuevo sin alta formal, con cuenta bancaria igual a la de un empleado", "Payments to a new supplier without formal onboarding, sharing an employee's bank account"), },
    ],
    correctOptionIds: ["N5-032-a", "N5-032-c", "N5-032-e"],
    explanation: t(
      "Son señales de alerta los asientos manuales inusuales al cierre, el empleado que evita que se revise su trabajo y los datos de proveedores que coinciden con los de empleados. Las conciliaciones al día y la rotación de puestos son controles que reducen la oportunidad de fraude.",
      "Red flags are unusual manual entries at year-end, the employee who avoids having their work reviewed, and supplier data matching an employee's. Up-to-date reconciliations and job rotation are controls that reduce the opportunity for fraud."
    ),
    difficulty: 2,
    points: 15,
    competency: "red-flags",
  },
  {
    id: "N5-033",
    level: 5,
    module: "L5-05",
    kind: "numeric",
    flavor: "interpret",
    prompt: t(
      "Según la ley de Benford, ¿cuántos de 2,000 importes de facturas esperarías que comiencen con el dígito 1? Redondea al entero más cercano.",
      "According to Benford's law, how many of 2,000 invoice amounts would you expect to begin with digit 1? Round to the nearest whole number."
    ),
    answer: 602,
    unit: "units",
    decimals: 0,
    tolerance: { abs: 1 },
    explanation: t(
      "P(1) = log10(1 + 1/1) = log10(2) = 0.30103. Esperados = 2,000 × 0.30103 = 602.06 ≈ 602. Error común: suponer distribución uniforme (1/9 ≈ 11.1 % → 222). Una desviación grande respecto de 602 sería una señal para profundizar, no una prueba de fraude.",
      "P(1) = log10(1 + 1/1) = log10(2) = 0.30103. Expected = 2,000 × 0.30103 = 602.06 ≈ 602. Common mistake: assuming a uniform distribution (1/9 ≈ 11.1 % → 222). A large deviation from 602 would be a signal to dig deeper, not proof of fraud."
    ),
    difficulty: 2,
    points: 15,
    competency: "forensic-analytics",
  },
  {
    id: "N5-034",
    level: 5,
    module: "L5-05",
    kind: "fields",
    flavor: "case",
    context: t(
      "Reporte de pagos a proveedores: #101 Proveedor A $45,200 factura F-881; #102 Proveedor B $12,300 factura F-120; #103 Proveedor A $45,200 factura F-881; #104 Proveedor C $8,750 factura F-55; #105 Proveedor B $12,300 factura F-121; #106 Proveedor C $8,750 factura F-55.",
      "Supplier payment report: #101 Supplier A $45,200 invoice F-881; #102 Supplier B $12,300 invoice F-120; #103 Supplier A $45,200 invoice F-881; #104 Supplier C $8,750 invoice F-55; #105 Supplier B $12,300 invoice F-121; #106 Supplier C $8,750 invoice F-55."
    ),
    prompt: t(
      "Un pago es duplicado si repite proveedor, monto y número de factura de un pago anterior. Indica cuántos pagos duplicados hay y el importe total por recuperar en pesos.",
      "A payment is a duplicate if it repeats the supplier, amount and invoice number of an earlier payment. State how many duplicate payments there are and the total amount to recover in pesos."
    ),
    fields: [
      { id: "f1", label: t("Número de pagos duplicados", "Number of duplicate payments"), answer: 2, unit: "units", tolerance: { abs: 0 } },
      { id: "f2", label: t("Importe total por recuperar", "Total amount to recover"), answer: 53950, unit: "MXN", tolerance: { abs: 0.5 } },
    ],
    explanation: t(
      "#103 duplica a #101 (A, $45,200, F-881) y #106 duplica a #104 (C, $8,750, F-55): 2 duplicados. Importe = $45,200 + $8,750 = $53,950. #105 tiene el mismo monto que #102 pero otra factura (F-121): no es duplicado por sí mismo. Error común: contar ambos pagos de cada par o incluir a #105.",
      "#103 duplicates #101 (A, $45,200, F-881) and #106 duplicates #104 (C, $8,750, F-55): 2 duplicates. Amount = $45,200 + $8,750 = $53,950. #105 has the same amount as #102 but a different invoice (F-121): it is not a duplicate by itself. Common mistake: counting both payments of each pair or including #105."
    ),
    difficulty: 3,
    points: 20,
    competency: "forensic-analytics",
  },
]
