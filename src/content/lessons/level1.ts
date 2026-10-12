import type { Exercise, Lesson } from '../../types'

/**
 * FINCORE — Level 1: Fundamentos contables / Accounting Fundamentals.
 * Educational content. Mexican jurisdiction (NIF) with IFRS references.
 */

const NOTE_FRAMEWORK = {
  es: "Jurisdicción: México. Contenido educativo basado en el Marco Conceptual de las Normas de Información Financiera (NIF, serie A) emitidas por el CINIF; a nivel internacional, el Marco Conceptual de las IFRS (IASB). Las normas cambian: verifica la versión vigente de las NIF y de la legislación aplicable (DOF) a la fecha de consulta (2026).",
  en: "Jurisdiction: Mexico. Educational content based on the Conceptual Framework of the Mexican Financial Reporting Standards (NIF, series A) issued by CINIF; internationally, the IFRS Conceptual Framework (IASB). Standards change: verify the current version of the NIF and of applicable law (DOF) as of the date you consult them (2026).",
}

export const lessons: Lesson[] = [
  // ───────────────────────────── L1-01 ─────────────────────────────
  {
    id: 'L1-01',
    level: 1,
    topicIds: ['1.1'],
    title: { es: "Introducción a la contabilidad", en: "Introduction to accounting" },
    summary: {
      es: "Qué es la contabilidad, para quién se prepara la información financiera y qué principios básicos la sostienen.",
      en: "What accounting is, who financial information is prepared for and which basic principles support it.",
    },
    minutes: 10,
    objectives: [
      { es: "Definir la contabilidad como sistema de información financiera.", en: "Define accounting as a financial information system." },
      { es: "Distinguir usuarios internos y externos de la información financiera.", en: "Distinguish internal and external users of financial information." },
      { es: "Diferenciar contabilidad financiera, administrativa y fiscal.", en: "Differentiate financial, managerial and tax accounting." },
      { es: "Aplicar los postulados de entidad económica y devengación contable en casos sencillos.", en: "Apply the economic entity and accrual postulates in simple cases." },
    ],
    theory: [
      {
        heading: { es: "¿Qué es la contabilidad?", en: "What is accounting?" },
        body: [
          {
            es: "La contabilidad es una técnica que **identifica, registra, clasifica y resume** las operaciones de una entidad económica para producir información financiera útil en la toma de decisiones. Su producto final son los **estados financieros**.",
            en: "Accounting is a technique that **identifies, records, classifies and summarizes** the transactions of an economic entity in order to produce financial information useful for decision-making. Its final product is the **financial statements**.",
          },
          {
            es: "Una operación sólo se registra si es cuantificable en dinero y afecta a la entidad. Por eso un contrato firmado pero aún no ejecutado, o la buena reputación del dueño, normalmente no generan un registro.",
            en: "A transaction is recorded only if it can be measured in money and affects the entity. That is why a signed contract not yet performed, or the owner's good reputation, normally do not produce an entry.",
          },
        ],
        bullets: [
          { es: "Identificar: detectar operaciones con efecto económico.", en: "Identify: detect transactions with an economic effect." },
          { es: "Registrar: anotarlas en pólizas y en el libro diario.", en: "Record: enter them in vouchers (pólizas) and the journal." },
          { es: "Clasificar: agruparlas por cuenta en el libro mayor.", en: "Classify: group them by account in the ledger." },
          { es: "Resumir: presentar estados financieros.", en: "Summarize: present financial statements." },
        ],
      },
      {
        heading: { es: "Usuarios de la información financiera", en: "Users of financial information" },
        body: [
          {
            es: "Los **usuarios internos** (dueños que administran, directores, gerentes) usan la información para planear y controlar. Los **usuarios externos** (inversionistas, bancos, proveedores, autoridades fiscales como el SAT) la usan para decidir si invierten, prestan, venden a crédito o verifican el cumplimiento de obligaciones.",
            en: "**Internal users** (owner-managers, directors, managers) use the information to plan and control. **External users** (investors, banks, suppliers, tax authorities such as Mexico's SAT) use it to decide whether to invest, lend, sell on credit or verify compliance with obligations.",
          },
        ],
      },
      {
        heading: { es: "Ramas de la contabilidad", en: "Branches of accounting" },
        body: [
          {
            es: "La **contabilidad financiera** prepara estados financieros de propósito general conforme a las NIF (o IFRS), principalmente para usuarios externos. La **contabilidad administrativa** (o de costos) genera información a la medida para decisiones internas: presupuestos, costos por producto, márgenes. La **contabilidad fiscal** determina y documenta las obligaciones tributarias (ISR, IVA) conforme a las leyes fiscales.",
            en: "**Financial accounting** prepares general-purpose financial statements under NIF (or IFRS), mainly for external users. **Managerial (or cost) accounting** produces tailored information for internal decisions: budgets, product costs, margins. **Tax accounting** determines and documents tax obligations (income tax, VAT) under tax laws.",
          },
        ],
      },
      {
        heading: { es: "Postulados básicos", en: "Basic postulates" },
        body: [
          {
            es: "El Marco Conceptual de las NIF establece postulados que sustentan el registro contable. Dos de los más usados al empezar son la **entidad económica**, que separa el patrimonio y las operaciones del negocio de las de sus dueños, y la **devengación contable**, que reconoce los efectos de una operación cuando ocurre, no cuando se cobra o se paga.",
            en: "The NIF Conceptual Framework sets postulates that underpin recording. Two of the most used at the start are the **economic entity**, which separates the business's resources and transactions from those of its owners, and **accrual**, which recognizes the effects of a transaction when it occurs, not when cash is collected or paid.",
          },
          {
            es: "Otros postulados son el **negocio en marcha** (se supone que la entidad seguirá operando), la **valuación**, la **dualidad económica** (recursos = fuentes de esos recursos), la **asociación de costos y gastos con ingresos** y la **consistencia**.",
            en: "Other postulates include **going concern** (the entity is assumed to continue operating), **measurement**, **economic duality** (resources = sources of those resources), **matching of costs and expenses with revenue** and **consistency**.",
          },
        ],
      },
    ],
    examples: [
      {
        title: { es: "Devengación: servicio prestado y cobrado en dos meses", en: "Accrual: service performed and collected over two months" },
        problem: {
          es: "Un despacho presta en marzo un servicio de consultoría por $25,000. El cliente paga $15,000 en marzo y $10,000 en abril. ¿Cuánto ingreso se reconoce en marzo?",
          en: "A firm performs a consulting service in March for $25,000. The client pays $15,000 in March and $10,000 in April. How much revenue is recognized in March?",
        },
        steps: [
          { es: "El servicio se terminó en marzo: el ingreso se devenga en marzo.", en: "The service was completed in March: the revenue is earned in March." },
          { es: "Ingreso de marzo = $25,000, sin importar cuánto se cobró.", en: "March revenue = $25,000, regardless of how much was collected." },
          { es: "Al 31 de marzo queda un derecho de cobro (Clientes) de $25,000 − $15,000 = $10,000.", en: "At March 31 there is a receivable (Accounts receivable) of $25,000 − $15,000 = $10,000." },
          { es: "En abril el cobro de $10,000 sólo cambia Clientes por Bancos; no genera nuevo ingreso.", en: "In April, collecting $10,000 only swaps Accounts receivable for Bank; it creates no new revenue." },
        ],
        result: { es: "Ingreso de marzo: $25,000; saldo de Clientes al 31 de marzo: $10,000.", en: "March revenue: $25,000; Accounts receivable at March 31: $10,000." },
      },
      {
        title: { es: "Entidad económica: gasto personal del dueño", en: "Economic entity: owner's personal expense" },
        problem: {
          es: "La dueña de una tienda paga con la cuenta bancaria del negocio $3,000 de su teléfono celular personal. El negocio tenía $50,000 en Bancos. ¿Es un gasto del negocio?",
          en: "A shop owner pays her personal mobile phone bill of $3,000 from the business bank account. The business had $50,000 in the bank. Is it a business expense?",
        },
        steps: [
          { es: "Por el postulado de entidad económica, los gastos personales del dueño no son gastos del negocio.", en: "Under the economic entity postulate, the owner's personal expenses are not business expenses." },
          { es: "El dinero sí salió del negocio: Bancos baja de $50,000 a $50,000 − $3,000 = $47,000.", en: "The money did leave the business: Bank falls from $50,000 to $50,000 − $3,000 = $47,000." },
          { es: "Se registra como un retiro del dueño (disminución de capital) o como un saldo a cargo de la dueña, no como gasto de operación.", en: "It is recorded as an owner withdrawal (reduction of equity) or as an amount owed by the owner, not as an operating expense." },
        ],
        result: { es: "No es gasto del negocio; los gastos de operación no cambian y los recursos del negocio disminuyen $3,000.", en: "It is not a business expense; operating expenses do not change and the business's resources decrease by $3,000." },
      },
    ],
    keyPoints: [
      { es: "La contabilidad convierte operaciones en información financiera útil para decidir.", en: "Accounting turns transactions into financial information useful for decisions." },
      { es: "Hay usuarios internos (administración) y externos (inversionistas, bancos, SAT).", en: "There are internal users (management) and external users (investors, banks, tax authority)." },
      { es: "Entidad económica: el negocio es distinto de sus dueños.", en: "Economic entity: the business is separate from its owners." },
      { es: "Devengación: se registra cuando ocurre la operación, no cuando se mueve el efectivo.", en: "Accrual: record when the transaction occurs, not when cash moves." },
    ],
    normativeNote: NOTE_FRAMEWORK,
    exerciseIds: ['N1-001', 'N1-002', 'N1-003', 'N1-004', 'N1-005', 'N1-006'],
  },

  // ───────────────────────────── L1-02 ─────────────────────────────
  {
    id: 'L1-02',
    level: 1,
    topicIds: ['1.2'],
    title: { es: "Activos, pasivos y capital", en: "Assets, liabilities and equity" },
    summary: {
      es: "Los tres elementos del estado de situación financiera: qué son, cómo se reconocen y cómo se clasifican.",
      en: "The three elements of the statement of financial position: what they are, how they are recognized and how they are classified.",
    },
    minutes: 12,
    objectives: [
      { es: "Definir activo, pasivo y capital contable.", en: "Define assets, liabilities and equity." },
      { es: "Clasificar cuentas comunes en activo, pasivo o capital.", en: "Classify common accounts as assets, liabilities or equity." },
      { es: "Distinguir partidas circulantes (corto plazo) y no circulantes (largo plazo).", en: "Distinguish current (short-term) and non-current (long-term) items." },
    ],
    theory: [
      {
        heading: { es: "Activo", en: "Assets" },
        body: [
          {
            es: "Un **activo** es un recurso económico **controlado** por la entidad, surgido de eventos pasados, del que se esperan beneficios económicos futuros. Lo importante es el control, no necesariamente la propiedad legal: un bien arrendado puede generar un activo por derecho de uso.",
            en: "An **asset** is an economic resource **controlled** by the entity, arising from past events, from which future economic benefits are expected. What matters is control, not necessarily legal ownership: a leased item can give rise to a right-of-use asset.",
          },
          {
            es: "Los activos se clasifican en **circulantes** (se convertirán en efectivo o se consumirán dentro de 12 meses o del ciclo de operación: Caja, Bancos, Clientes, Inventarios) y **no circulantes** (se usan por más de un año: Terrenos, Edificios, Maquinaria, Equipo de cómputo).",
            en: "Assets are classified as **current** (they will be turned into cash or consumed within 12 months or the operating cycle: Cash, Bank, Accounts receivable, Inventory) and **non-current** (used for more than one year: Land, Buildings, Machinery, Computer equipment).",
          },
        ],
      },
      {
        heading: { es: "Pasivo", en: "Liabilities" },
        body: [
          {
            es: "Un **pasivo** es una obligación presente de la entidad, surgida de eventos pasados, que se espera liquidar con una salida de recursos. Ejemplos: Proveedores, Documentos por pagar, Sueldos por pagar, Préstamos bancarios.",
            en: "A **liability** is a present obligation of the entity, arising from past events, expected to be settled by an outflow of resources. Examples: Accounts payable, Notes payable, Salaries payable, Bank loans.",
          },
          {
            es: "Un **anticipo de clientes** también es pasivo: la entidad recibió dinero y queda obligada a entregar bienes o servicios. Los pasivos se dividen en **corto plazo** (vencen en 12 meses o menos) y **largo plazo**.",
            en: "A **customer advance** is also a liability: the entity received money and is obliged to deliver goods or services. Liabilities are split into **current** (due within 12 months) and **non-current**.",
          },
        ],
      },
      {
        heading: { es: "Capital contable", en: "Equity" },
        body: [
          {
            es: "El **capital contable** es el valor residual de los activos una vez deducidos los pasivos. Se integra por el **capital contribuido** (aportaciones de los dueños, p. ej. Capital social) y el **capital ganado** (utilidades retenidas y utilidad del ejercicio).",
            en: "**Equity** is the residual interest in the assets after deducting liabilities. It comprises **contributed capital** (owners' contributions, e.g. Share capital) and **earned capital** (retained earnings and profit for the year).",
          },
        ],
        formula: "Capital contable = Activo − Pasivo",
      },
    ],
    examples: [
      {
        title: { es: "Totales de una papelería", en: "Totals for a stationery shop" },
        problem: {
          es: "Papelería La Pluma tiene: Bancos $40,000; Inventarios $60,000; Mobiliario y equipo $30,000; Proveedores $25,000; Préstamo bancario a largo plazo $35,000. Calcula activo, pasivo y capital.",
          en: "La Pluma stationery has: Bank $40,000; Inventory $60,000; Furniture and equipment $30,000; Accounts payable $25,000; Long-term bank loan $35,000. Compute assets, liabilities and equity.",
        },
        steps: [
          { es: "Activo = 40,000 + 60,000 + 30,000 = $130,000.", en: "Assets = 40,000 + 60,000 + 30,000 = $130,000." },
          { es: "Pasivo = 25,000 + 35,000 = $60,000.", en: "Liabilities = 25,000 + 35,000 = $60,000." },
          { es: "Capital = 130,000 − 60,000 = $70,000.", en: "Equity = 130,000 − 60,000 = $70,000." },
        ],
        result: { es: "Activo $130,000; Pasivo $60,000; Capital contable $70,000.", en: "Assets $130,000; Liabilities $60,000; Equity $70,000." },
      },
      {
        title: { es: "Circulante vs. no circulante", en: "Current vs. non-current" },
        problem: {
          es: "Una empresa tiene Caja $2,000; Clientes $18,000; Equipo de transporte $150,000 y Terrenos $300,000. Separa el activo circulante y el no circulante.",
          en: "A company has Cash $2,000; Accounts receivable $18,000; Vehicles $150,000 and Land $300,000. Separate current and non-current assets.",
        },
        steps: [
          { es: "Circulante (se realiza en ≤ 12 meses): Caja + Clientes = 2,000 + 18,000 = $20,000.", en: "Current (realized within 12 months): Cash + Receivables = 2,000 + 18,000 = $20,000." },
          { es: "No circulante (uso de largo plazo): Equipo de transporte + Terrenos = 150,000 + 300,000 = $450,000.", en: "Non-current (long-term use): Vehicles + Land = 150,000 + 300,000 = $450,000." },
          { es: "Activo total = 20,000 + 450,000 = $470,000.", en: "Total assets = 20,000 + 450,000 = $470,000." },
        ],
        result: { es: "Circulante $20,000; no circulante $450,000; total $470,000.", en: "Current $20,000; non-current $450,000; total $470,000." },
      },
    ],
    keyPoints: [
      { es: "Activo: recurso controlado que generará beneficios futuros.", en: "Asset: controlled resource that will generate future benefits." },
      { es: "Pasivo: obligación presente que implicará salida de recursos.", en: "Liability: present obligation that will require an outflow of resources." },
      { es: "Capital contable: lo que queda para los dueños (Activo − Pasivo).", en: "Equity: what remains for the owners (Assets − Liabilities)." },
      { es: "Los anticipos de clientes son pasivo, no ingreso.", en: "Customer advances are liabilities, not revenue." },
    ],
    normativeNote: NOTE_FRAMEWORK,
    exerciseIds: ['N1-007', 'N1-008', 'N1-009', 'N1-010', 'N1-011', 'N1-012'],
  },

  // ───────────────────────────── L1-03 ─────────────────────────────
  {
    id: 'L1-03',
    level: 1,
    topicIds: ['1.3'],
    title: { es: "La ecuación contable", en: "The accounting equation" },
    summary: {
      es: "Activo = Pasivo + Capital: cómo cada operación mantiene el equilibrio de la ecuación.",
      en: "Assets = Liabilities + Equity: how every transaction keeps the equation in balance.",
    },
    minutes: 12,
    objectives: [
      { es: "Enunciar la ecuación contable y sus variantes.", en: "State the accounting equation and its variants." },
      { es: "Calcular el elemento faltante de la ecuación.", en: "Compute the missing element of the equation." },
      { es: "Analizar el efecto de operaciones en activo, pasivo y capital.", en: "Analyze the effect of transactions on assets, liabilities and equity." },
    ],
    theory: [
      {
        heading: { es: "La ecuación fundamental", en: "The fundamental equation" },
        body: [
          {
            es: "Todo recurso de la entidad (activo) fue financiado por alguien: por acreedores (pasivo) o por los dueños (capital). Por eso, en todo momento, el activo es igual a la suma del pasivo y el capital. Este es el **postulado de dualidad económica**.",
            en: "Every resource of the entity (asset) was financed by someone: by creditors (liabilities) or by the owners (equity). Therefore, at all times, assets equal liabilities plus equity. This is the **economic duality** principle.",
          },
        ],
        formula: "Activo = Pasivo + Capital contable",
      },
      {
        heading: { es: "Ecuación ampliada", en: "Expanded equation" },
        body: [
          {
            es: "Los ingresos aumentan el capital y los gastos lo disminuyen. Por eso la ecuación puede escribirse de forma ampliada, separando las aportaciones de los dueños de los resultados del periodo.",
            en: "Revenue increases equity and expenses decrease it. So the equation can be written in expanded form, separating the owners' contributions from the period's results.",
          },
        ],
        formula: "Activo = Pasivo + Capital aportado + Ingresos − Gastos",
      },
      {
        heading: { es: "Análisis de operaciones", en: "Transaction analysis" },
        body: [
          {
            es: "Cada operación afecta al menos dos partidas y la igualdad siempre se mantiene. Hay sólo cuatro patrones posibles: aumentan activo y fuente (pasivo o capital); disminuyen activo y fuente; un activo sube y otro baja; o una fuente sube y otra baja.",
            en: "Each transaction affects at least two items and the equality always holds. There are only four possible patterns: assets and a source (liability or equity) both increase; both decrease; one asset rises and another falls; or one source rises and another falls.",
          },
        ],
        bullets: [
          { es: "Compra a crédito: ↑ Activo, ↑ Pasivo.", en: "Purchase on credit: ↑ Assets, ↑ Liabilities." },
          { es: "Pago a proveedor: ↓ Activo, ↓ Pasivo.", en: "Payment to a supplier: ↓ Assets, ↓ Liabilities." },
          { es: "Compra de contado: ↑ un activo, ↓ otro activo.", en: "Cash purchase: ↑ one asset, ↓ another asset." },
          { es: "Ingreso cobrado: ↑ Activo, ↑ Capital.", en: "Revenue collected: ↑ Assets, ↑ Equity." },
        ],
      },
    ],
    examples: [
      {
        title: { es: "Secuencia de operaciones", en: "Sequence of transactions" },
        problem: {
          es: "Un socio aporta $100,000 en efectivo; la empresa compra mercancía por $40,000 a crédito; paga $15,000 al proveedor; cobra $12,000 por servicios prestados. Determina A, P y C finales.",
          en: "A partner contributes $100,000 in cash; the company buys goods for $40,000 on credit; pays $15,000 to the supplier; collects $12,000 for services performed. Determine final A, L and E.",
        },
        steps: [
          { es: "Aportación: A = 100,000; P = 0; C = 100,000.", en: "Contribution: A = 100,000; L = 0; E = 100,000." },
          { es: "Compra a crédito: A = 140,000; P = 40,000; C = 100,000.", en: "Purchase on credit: A = 140,000; L = 40,000; E = 100,000." },
          { es: "Pago al proveedor: A = 125,000; P = 25,000; C = 100,000.", en: "Payment to supplier: A = 125,000; L = 25,000; E = 100,000." },
          { es: "Ingreso cobrado: A = 137,000; P = 25,000; C = 112,000.", en: "Revenue collected: A = 137,000; L = 25,000; E = 112,000." },
          { es: "Comprobación: 25,000 + 112,000 = 137,000.", en: "Check: 25,000 + 112,000 = 137,000." },
        ],
        result: { es: "A = $137,000; P = $25,000; C = $112,000.", en: "A = $137,000; L = $25,000; E = $112,000." },
      },
      {
        title: { es: "Elemento faltante", en: "Missing element" },
        problem: {
          es: "Una empresa tiene activos por $820,000 y capital contable de $510,000. Después paga $40,000 de un préstamo. ¿Cuál era el pasivo y cómo queda la ecuación?",
          en: "A company has assets of $820,000 and equity of $510,000. Then it repays $40,000 of a loan. What was the liability and how does the equation end up?",
        },
        steps: [
          { es: "Pasivo = Activo − Capital = 820,000 − 510,000 = $310,000.", en: "Liabilities = Assets − Equity = 820,000 − 510,000 = $310,000." },
          { es: "El pago reduce Bancos y el préstamo en $40,000.", en: "The payment reduces Bank and the loan by $40,000." },
          { es: "Nuevo activo = 820,000 − 40,000 = $780,000; nuevo pasivo = 310,000 − 40,000 = $270,000.", en: "New assets = 820,000 − 40,000 = $780,000; new liabilities = 310,000 − 40,000 = $270,000." },
          { es: "Comprobación: 270,000 + 510,000 = 780,000; el capital no cambia.", en: "Check: 270,000 + 510,000 = 780,000; equity does not change." },
        ],
        result: { es: "Pasivo inicial $310,000; después: A $780,000 = P $270,000 + C $510,000.", en: "Initial liabilities $310,000; afterwards: A $780,000 = L $270,000 + E $510,000." },
      },
    ],
    keyPoints: [
      { es: "Activo = Pasivo + Capital siempre se cumple.", en: "Assets = Liabilities + Equity always holds." },
      { es: "Los ingresos aumentan el capital; los gastos lo disminuyen.", en: "Revenue increases equity; expenses decrease it." },
      { es: "Pedir un préstamo o comprar a crédito no cambia el capital.", en: "Borrowing or buying on credit does not change equity." },
      { es: "Cada operación afecta al menos dos partidas.", en: "Each transaction affects at least two items." },
    ],
    normativeNote: NOTE_FRAMEWORK,
    exerciseIds: ['N1-013', 'N1-014', 'N1-015', 'N1-016', 'N1-017', 'N1-018'],
  },

  // ───────────────────────────── L1-04 ─────────────────────────────
  {
    id: 'L1-04',
    level: 1,
    topicIds: ['1.4', '1.5'],
    title: { es: "Naturaleza de las cuentas, cargos y abonos", en: "Normal balance, debits and credits" },
    summary: {
      es: "Cuándo una cuenta aumenta con cargo o con abono, y cómo se calcula su saldo.",
      en: "When an account increases with a debit or a credit, and how its balance is computed.",
    },
    minutes: 14,
    objectives: [
      { es: "Explicar qué significan cargo (debe) y abono (haber).", en: "Explain what debit (cargo) and credit (abono) mean." },
      { es: "Identificar la naturaleza deudora o acreedora de cada tipo de cuenta.", en: "Identify the debit or credit normal balance of each account type." },
      { es: "Determinar el saldo de una cuenta a partir de sus movimientos.", en: "Determine an account's balance from its movements." },
    ],
    theory: [
      {
        heading: { es: "Cargo y abono", en: "Debit and credit" },
        body: [
          {
            es: "**Cargar** es anotar un importe en el lado izquierdo (debe) de una cuenta; **abonar** es anotarlo en el lado derecho (haber). Cargo y abono no significan por sí mismos 'aumento' o 'disminución': el efecto depende de la naturaleza de la cuenta.",
            en: "To **debit** is to enter an amount on the left side of an account; to **credit** is to enter it on the right side. Debit and credit do not by themselves mean 'increase' or 'decrease': the effect depends on the account's nature.",
          },
        ],
      },
      {
        heading: { es: "Naturaleza de las cuentas", en: "Normal balance of accounts" },
        body: [
          {
            es: "Las cuentas de **naturaleza deudora** aumentan con cargos y disminuyen con abonos: activos, costos y gastos (y cuentas como Dividendos decretados o Devoluciones sobre ventas). Las de **naturaleza acreedora** aumentan con abonos y disminuyen con cargos: pasivos, capital e ingresos.",
            en: "Accounts with a **debit nature** increase with debits and decrease with credits: assets, costs and expenses (and accounts such as Dividends declared or Sales returns). Accounts with a **credit nature** increase with credits and decrease with debits: liabilities, equity and revenue.",
          },
          {
            es: "Las **cuentas complementarias de activo** (Depreciación acumulada, Estimación para cuentas incobrables) son de naturaleza acreedora aunque se presenten dentro del activo, porque restan valor a otra cuenta.",
            en: "**Contra-asset accounts** (Accumulated depreciation, Allowance for doubtful accounts) have a credit nature even though they are presented within assets, because they reduce another account.",
          },
        ],
        bullets: [
          { es: "Deudoras: Activo, Costos, Gastos.", en: "Debit nature: Assets, Costs, Expenses." },
          { es: "Acreedoras: Pasivo, Capital, Ingresos, complementarias de activo.", en: "Credit nature: Liabilities, Equity, Revenue, contra-assets." },
        ],
      },
      {
        heading: { es: "Saldo de una cuenta", en: "Account balance" },
        body: [
          {
            es: "El saldo es la diferencia entre la suma de cargos y la suma de abonos. Si los cargos son mayores, el saldo es **deudor**; si los abonos son mayores, es **acreedor**. Normalmente cada cuenta termina con saldo de su propia naturaleza; un saldo contrario (p. ej. Bancos acreedor) suele indicar un sobregiro o un error.",
            en: "The balance is the difference between total debits and total credits. If debits are larger, the balance is a **debit balance**; if credits are larger, a **credit balance**. Normally each account ends with a balance of its own nature; an opposite balance (e.g. a credit balance in Bank) usually signals an overdraft or an error.",
          },
        ],
        formula: "Saldo deudor = Σ cargos − Σ abonos ; Saldo acreedor = Σ abonos − Σ cargos",
      },
    ],
    examples: [
      {
        title: { es: "Saldo de Clientes", en: "Accounts receivable balance" },
        problem: {
          es: "Clientes tiene saldo inicial de $15,000; en el mes hubo ventas a crédito por $22,000 y cobros por $18,000. ¿Cuál es el saldo final?",
          en: "Accounts receivable has an opening balance of $15,000; during the month there were credit sales of $22,000 and collections of $18,000. What is the ending balance?",
        },
        steps: [
          { es: "Clientes es activo: naturaleza deudora (aumenta con cargos).", en: "Accounts receivable is an asset: debit nature (increases with debits)." },
          { es: "Cargos = 15,000 + 22,000 = $37,000; abonos (cobros) = $18,000.", en: "Debits = 15,000 + 22,000 = $37,000; credits (collections) = $18,000." },
          { es: "Saldo = 37,000 − 18,000 = $19,000 deudor.", en: "Balance = 37,000 − 18,000 = $19,000 debit." },
        ],
        result: { es: "Saldo final de Clientes: $19,000 deudor.", en: "Ending Accounts receivable: $19,000 debit balance." },
      },
      {
        title: { es: "Saldo de Proveedores", en: "Accounts payable balance" },
        problem: {
          es: "Proveedores inicia con $8,000; se compran mercancías a crédito por $12,000 y se pagan $9,500. ¿Saldo final?",
          en: "Accounts payable starts at $8,000; goods are bought on credit for $12,000 and $9,500 is paid. Ending balance?",
        },
        steps: [
          { es: "Proveedores es pasivo: naturaleza acreedora (aumenta con abonos).", en: "Accounts payable is a liability: credit nature (increases with credits)." },
          { es: "Abonos = 8,000 + 12,000 = $20,000; cargos (pagos) = $9,500.", en: "Credits = 8,000 + 12,000 = $20,000; debits (payments) = $9,500." },
          { es: "Saldo = 20,000 − 9,500 = $10,500 acreedor.", en: "Balance = 20,000 − 9,500 = $10,500 credit." },
        ],
        result: { es: "Saldo final de Proveedores: $10,500 acreedor.", en: "Ending Accounts payable: $10,500 credit balance." },
      },
    ],
    keyPoints: [
      { es: "Cargo = lado izquierdo; abono = lado derecho.", en: "Debit = left side; credit = right side." },
      { es: "Activos, costos y gastos aumentan con cargo.", en: "Assets, costs and expenses increase with a debit." },
      { es: "Pasivos, capital e ingresos aumentan con abono.", en: "Liabilities, equity and revenue increase with a credit." },
      { es: "Las cuentas complementarias de activo son acreedoras.", en: "Contra-asset accounts have a credit balance." },
    ],
    exerciseIds: ['N1-019', 'N1-020', 'N1-021', 'N1-022', 'N1-023', 'N1-024'],
  },

  // ───────────────────────────── L1-05 ─────────────────────────────
  {
    id: 'L1-05',
    level: 1,
    topicIds: ['1.6', '1.8'],
    title: { es: "Partida doble y asientos de diario", en: "Double entry and journal entries" },
    summary: {
      es: "Cómo registrar operaciones en pólizas de diario respetando la partida doble.",
      en: "How to record transactions as journal entries (pólizas) following double-entry bookkeeping.",
    },
    minutes: 16,
    objectives: [
      { es: "Enunciar el principio de partida doble.", en: "State the double-entry principle." },
      { es: "Elaborar asientos de diario simples y compuestos.", en: "Prepare simple and compound journal entries." },
      { es: "Verificar que cada asiento esté cuadrado (cargos = abonos).", en: "Verify that every entry balances (debits = credits)." },
      { es: "Registrar compras, ventas, préstamos y gastos frecuentes.", en: "Record common purchases, sales, loans and expenses." },
    ],
    theory: [
      {
        heading: { es: "Partida doble", en: "Double entry" },
        body: [
          {
            es: "La **partida doble** establece que toda operación se registra con al menos un cargo y al menos un abono por el mismo importe total: **a todo cargo corresponde un abono**. Es la forma contable de mantener la ecuación Activo = Pasivo + Capital.",
            en: "**Double entry** means that every transaction is recorded with at least one debit and at least one credit for the same total amount: **every debit has a matching credit**. It is how bookkeeping keeps Assets = Liabilities + Equity in balance.",
          },
        ],
        formula: "Σ Cargos = Σ Abonos (en cada asiento)",
      },
      {
        heading: { es: "El asiento de diario y la póliza", en: "The journal entry and the voucher" },
        body: [
          {
            es: "El **libro diario** registra las operaciones en orden cronológico. Cada **asiento** indica la fecha, las cuentas cargadas (primero), las cuentas abonadas y un concepto. En México los asientos se documentan en **pólizas** (de ingresos, egresos o diario), numeradas y respaldadas por comprobantes.",
            en: "The **journal** records transactions in chronological order. Each **entry** shows the date, the accounts debited (first), the accounts credited and a description. In Mexico entries are documented in **pólizas** (receipt, disbursement or journal vouchers), numbered and backed by supporting documents.",
          },
          {
            es: "Un asiento **simple** tiene una cuenta cargada y una abonada; uno **compuesto** tiene tres o más cuentas, por ejemplo una compra pagada parte al contado y parte a crédito.",
            en: "A **simple** entry has one debited and one credited account; a **compound** entry has three or more accounts, for example a purchase paid partly in cash and partly on credit.",
          },
        ],
      },
      {
        heading: { es: "Procedimiento para registrar", en: "Recording procedure" },
        body: [
          {
            es: "Para cada operación: (1) identifica las cuentas afectadas; (2) determina si cada una aumenta o disminuye; (3) aplica la naturaleza de la cuenta para decidir cargo o abono; (4) comprueba que la suma de cargos sea igual a la de abonos.",
            en: "For each transaction: (1) identify the accounts affected; (2) decide whether each increases or decreases; (3) apply the account's nature to choose debit or credit; (4) check that total debits equal total credits.",
          },
        ],
        bullets: [
          { es: "Venta de contado: cargo a Bancos, abono a Ventas o Ingresos por servicios.", en: "Cash sale: debit Bank, credit Sales or Service revenue." },
          { es: "Pago de gasto: cargo al gasto, abono a Bancos.", en: "Paying an expense: debit the expense, credit Bank." },
          { es: "Préstamo recibido: cargo a Bancos, abono al pasivo.", en: "Loan received: debit Bank, credit the liability." },
        ],
      },
      {
        heading: { es: "Inventario perpetuo", en: "Perpetual inventory" },
        body: [
          {
            es: "Con el **sistema perpetuo**, cada venta de mercancía genera dos registros: el ingreso (cargo a Clientes o Bancos, abono a Ventas) y el costo (cargo a Costo de ventas, abono a Inventarios). Así el inventario se mantiene actualizado en todo momento.",
            en: "Under the **perpetual system**, each sale of goods produces two records: the revenue (debit Receivables or Bank, credit Sales) and the cost (debit Cost of goods sold, credit Inventory). This keeps inventory up to date at all times.",
          },
        ],
      },
    ],
    examples: [
      {
        title: { es: "Compra mixta de mercancía", en: "Mixed purchase of goods" },
        problem: {
          es: "Se compran mercancías por $30,000: se pagan $10,000 por transferencia y el resto queda a crédito con el proveedor (sin IVA para simplificar). Registra el asiento.",
          en: "Goods are bought for $30,000: $10,000 is paid by bank transfer and the rest is on credit with the supplier (VAT ignored for simplicity). Record the entry.",
        },
        steps: [
          { es: "Inventarios (activo) aumenta $30,000 → cargo.", en: "Inventory (asset) increases $30,000 → debit." },
          { es: "Bancos (activo) disminuye $10,000 → abono.", en: "Bank (asset) decreases $10,000 → credit." },
          { es: "Proveedores (pasivo) aumenta 30,000 − 10,000 = $20,000 → abono.", en: "Accounts payable (liability) increases 30,000 − 10,000 = $20,000 → credit." },
          { es: "Cargos 30,000 = abonos 10,000 + 20,000 = 30,000. Asiento cuadrado.", en: "Debits 30,000 = credits 10,000 + 20,000 = 30,000. Entry balances." },
        ],
        result: { es: "Cargo Inventarios $30,000 / Abono Bancos $10,000 y Proveedores $20,000.", en: "Debit Inventory $30,000 / Credit Bank $10,000 and Accounts payable $20,000." },
      },
      {
        title: { es: "Préstamo y pago de intereses", en: "Loan and interest payment" },
        problem: {
          es: "La empresa recibe un préstamo bancario a largo plazo por $100,000 y un mes después paga intereses por $1,500. Registra ambos asientos.",
          en: "The company receives a long-term bank loan of $100,000 and one month later pays interest of $1,500. Record both entries.",
        },
        steps: [
          { es: "Asiento 1: cargo Bancos $100,000; abono Préstamos bancarios a largo plazo $100,000.", en: "Entry 1: debit Bank $100,000; credit Long-term bank loans $100,000." },
          { es: "Asiento 2: el interés es un gasto financiero → cargo Gasto por intereses $1,500.", en: "Entry 2: interest is a finance cost → debit Interest expense $1,500." },
          { es: "Sale dinero del banco → abono Bancos $1,500. El préstamo no cambia porque no se pagó capital.", en: "Cash leaves the bank → credit Bank $1,500. The loan does not change because no principal was repaid." },
        ],
        result: { es: "Dos asientos cuadrados; saldo del préstamo $100,000; gasto por intereses $1,500.", en: "Two balanced entries; loan balance $100,000; interest expense $1,500." },
      },
    ],
    keyPoints: [
      { es: "A todo cargo corresponde un abono por el mismo total.", en: "Every debit has a matching credit for the same total." },
      { es: "En el asiento se anotan primero los cargos y después los abonos.", en: "In an entry, debits are listed first, then credits." },
      { es: "Un asiento compuesto tiene tres o más cuentas y también debe cuadrar.", en: "A compound entry has three or more accounts and must also balance." },
      { es: "En inventario perpetuo, cada venta registra ingreso y costo.", en: "Under perpetual inventory, each sale records both revenue and cost." },
    ],
    exerciseIds: ['N1-025', 'N1-026', 'N1-027', 'N1-028', 'N1-029', 'N1-030', 'N1-031'],
  },

  // ───────────────────────────── L1-06 ─────────────────────────────
  {
    id: 'L1-06',
    level: 1,
    topicIds: ['1.7', '1.9', '1.10'],
    title: { es: "Cuentas T, libro mayor y balanza de comprobación", en: "T-accounts, general ledger and trial balance" },
    summary: {
      es: "Del diario al mayor y a la balanza: cómo se acumulan los saldos y cómo se comprueba la igualdad de cargos y abonos.",
      en: "From journal to ledger to trial balance: how balances accumulate and how the equality of debits and credits is checked.",
    },
    minutes: 16,
    objectives: [
      { es: "Pasar (traspasar) asientos del diario a cuentas T.", en: "Post journal entries to T-accounts." },
      { es: "Calcular movimientos y saldos en el libro mayor.", en: "Compute movements and balances in the general ledger." },
      { es: "Elaborar una balanza de comprobación y conocer sus límites.", en: "Prepare a trial balance and know its limits." },
    ],
    theory: [
      {
        heading: { es: "La cuenta T", en: "The T-account" },
        body: [
          {
            es: "La **cuenta T** es una representación simplificada de una cuenta: el nombre arriba, los cargos (debe) a la izquierda y los abonos (haber) a la derecha. Sirve para visualizar movimientos y calcular saldos rápidamente.",
            en: "The **T-account** is a simplified picture of an account: the name on top, debits on the left and credits on the right. It helps visualize movements and compute balances quickly.",
          },
          {
            es: "Los **movimientos deudores** son la suma de cargos y los **movimientos acreedores** la suma de abonos. El saldo inicial se anota del lado de la naturaleza de la cuenta.",
            en: "**Debit movements** are the sum of debits and **credit movements** the sum of credits. The opening balance is written on the side of the account's normal balance.",
          },
        ],
      },
      {
        heading: { es: "Libro mayor", en: "General ledger" },
        body: [
          {
            es: "El **libro mayor** agrupa todos los movimientos por cuenta. Cada cargo del diario se traspasa al debe de la cuenta correspondiente y cada abono al haber. Mientras el diario es cronológico, el mayor es **por cuenta**, y permite conocer el saldo de cada una en cualquier fecha.",
            en: "The **general ledger** groups all movements by account. Each debit in the journal is posted to the debit side of the corresponding account and each credit to the credit side. While the journal is chronological, the ledger is **by account**, giving each account's balance at any date.",
          },
        ],
      },
      {
        heading: { es: "Balanza de comprobación", en: "Trial balance" },
        body: [
          {
            es: "La **balanza de comprobación** lista todas las cuentas del mayor con sus saldos deudores y acreedores a una fecha. Si se respetó la partida doble, **la suma de saldos deudores es igual a la suma de saldos acreedores**.",
            en: "The **trial balance** lists every ledger account with its debit and credit balances at a date. If double entry was respected, **total debit balances equal total credit balances**.",
          },
          {
            es: "Que la balanza cuadre **no garantiza** que no haya errores: no detecta la omisión de un asiento completo, un registro duplicado, ni un cargo a la cuenta equivocada (del mismo lado). Sí detecta registros de un solo lado o importes distintos en cargo y abono.",
            en: "A balancing trial balance **does not guarantee** there are no errors: it does not detect an entirely omitted entry, a duplicated entry, or a debit to the wrong account (on the same side). It does detect one-sided postings or different amounts on the debit and credit sides.",
          },
        ],
        formula: "Σ Saldos deudores = Σ Saldos acreedores",
      },
    ],
    examples: [
      {
        title: { es: "Traspaso a cuentas T", en: "Posting to T-accounts" },
        problem: {
          es: "Bancos inicia con $20,000. Asientos del mes: cobro de servicios $8,000; pago de renta $5,000; pago a proveedores $6,000. Determina movimientos y saldo de Bancos.",
          en: "Bank starts at $20,000. Month's entries: service fees collected $8,000; rent paid $5,000; payment to suppliers $6,000. Determine Bank's movements and balance.",
        },
        steps: [
          { es: "Debe (cargos): saldo inicial 20,000 + cobro 8,000 = $28,000.", en: "Debit side: opening 20,000 + collection 8,000 = $28,000." },
          { es: "Haber (abonos): renta 5,000 + proveedores 6,000 = $11,000.", en: "Credit side: rent 5,000 + suppliers 6,000 = $11,000." },
          { es: "Saldo = 28,000 − 11,000 = $17,000 deudor.", en: "Balance = 28,000 − 11,000 = $17,000 debit." },
        ],
        result: { es: "Bancos: saldo deudor de $17,000.", en: "Bank: debit balance of $17,000." },
      },
      {
        title: { es: "Balanza de comprobación sencilla", en: "Simple trial balance" },
        problem: {
          es: "Saldos: Bancos $70,000; Mobiliario y equipo $25,000; Sueldos y salarios $15,000; Proveedores $20,000; Capital social $60,000; Ingresos por servicios $30,000. ¿Cuadra la balanza?",
          en: "Balances: Bank $70,000; Furniture and equipment $25,000; Salaries $15,000; Accounts payable $20,000; Share capital $60,000; Service revenue $30,000. Does the trial balance balance?",
        },
        steps: [
          { es: "Saldos deudores (activo y gasto): 70,000 + 25,000 + 15,000 = $110,000.", en: "Debit balances (assets and expense): 70,000 + 25,000 + 15,000 = $110,000." },
          { es: "Saldos acreedores (pasivo, capital, ingreso): 20,000 + 60,000 + 30,000 = $110,000.", en: "Credit balances (liability, equity, revenue): 20,000 + 60,000 + 30,000 = $110,000." },
          { es: "110,000 = 110,000: la balanza está cuadrada.", en: "110,000 = 110,000: the trial balance balances." },
        ],
        result: { es: "Totales iguales de $110,000.", en: "Equal totals of $110,000." },
      },
    ],
    keyPoints: [
      { es: "Cuenta T: cargos a la izquierda, abonos a la derecha.", en: "T-account: debits on the left, credits on the right." },
      { es: "El diario es cronológico; el mayor agrupa por cuenta.", en: "The journal is chronological; the ledger groups by account." },
      { es: "En la balanza, saldos deudores = saldos acreedores.", en: "In the trial balance, debit balances = credit balances." },
      { es: "Una balanza cuadrada no garantiza ausencia de errores.", en: "A balanced trial balance does not guarantee there are no errors." },
    ],
    exerciseIds: ['N1-032', 'N1-033', 'N1-034', 'N1-035', 'N1-036', 'N1-037', 'N1-038'],
  },
]

export const exercises: Exercise[] = [
  // ═════════════════════════ L1-01 ═════════════════════════
  {
    id: 'N1-001',
    level: 1,
    module: 'L1-01',
    kind: 'mcq',
    flavor: 'concept',
    prompt: { es: "¿Cuál es el producto final del proceso contable?", en: "What is the final product of the accounting process?" },
    options: [
      { id: 'N1-001-a', text: { es: "La declaración anual de impuestos", en: "The annual tax return" } },
      { id: 'N1-001-b', text: { es: "El catálogo de cuentas", en: "The chart of accounts" } },
      { id: 'N1-001-c', text: { es: "Los estados financieros", en: "The financial statements" } },
      { id: 'N1-001-d', text: { es: "Las facturas de venta", en: "The sales invoices" } },
    ],
    correctOptionId: 'N1-001-c',
    explanation: {
      es: "La contabilidad identifica, registra, clasifica y **resume** operaciones; el resumen son los estados financieros. El catálogo es una herramienta de registro, las facturas son documentos fuente y la declaración fiscal es un producto de la contabilidad fiscal, no el fin del proceso contable general.",
      en: "Accounting identifies, records, classifies and **summarizes** transactions; the summary is the financial statements. The chart of accounts is a recording tool, invoices are source documents and the tax return is a product of tax accounting, not the end of the general accounting process.",
    },
    difficulty: 1,
    points: 10,
    competency: 'accounting-basics',
  },
  {
    id: 'N1-002',
    level: 1,
    module: 'L1-01',
    kind: 'truefalse',
    flavor: 'concept',
    prompt: {
      es: "La contabilidad financiera se prepara principalmente para usuarios internos, como los gerentes de producción.",
      en: "Financial accounting is prepared mainly for internal users, such as production managers.",
    },
    answer: false,
    explanation: {
      es: "Falso. La contabilidad financiera genera estados financieros de propósito general dirigidos sobre todo a **usuarios externos** (inversionistas, bancos, proveedores). La información a la medida para gerentes es tarea de la contabilidad administrativa o de costos.",
      en: "False. Financial accounting produces general-purpose financial statements aimed mainly at **external users** (investors, banks, suppliers). Tailored information for managers is the job of managerial or cost accounting.",
    },
    difficulty: 1,
    points: 10,
    competency: 'accounting-basics',
  },
  {
    id: 'N1-003',
    level: 1,
    module: 'L1-01',
    kind: 'multi',
    flavor: 'concept',
    prompt: {
      es: "¿Cuáles son usuarios **externos** de la información financiera de una empresa? Selecciona todas las que apliquen.",
      en: "Which are **external** users of a company's financial information? Select all that apply.",
    },
    options: [
      { id: 'N1-003-a', text: { es: "Un banco que analiza otorgarle un crédito", en: "A bank considering granting it a loan" } },
      { id: 'N1-003-b', text: { es: "El gerente de ventas de la propia empresa", en: "The company's own sales manager" } },
      { id: 'N1-003-c', text: { es: "La autoridad fiscal (SAT)", en: "The tax authority (SAT)" } },
      { id: 'N1-003-d', text: { es: "Un inversionista que evalúa comprar acciones", en: "An investor evaluating buying shares" } },
      { id: 'N1-003-e', text: { es: "El director de finanzas de la empresa", en: "The company's chief financial officer" } },
    ],
    correctOptionIds: ['N1-003-a', 'N1-003-c', 'N1-003-d'],
    explanation: {
      es: "Banco, SAT e inversionista están fuera de la administración y dependen de la información publicada: son externos. El gerente de ventas y el director de finanzas trabajan dentro de la empresa y tienen acceso a información interna: son usuarios internos.",
      en: "The bank, the SAT and the investor are outside management and rely on published information: they are external. The sales manager and the CFO work inside the company with access to internal information: they are internal users.",
    },
    difficulty: 1,
    points: 10,
    competency: 'accounting-basics',
  },
  {
    id: 'N1-004',
    level: 1,
    module: 'L1-01',
    kind: 'classify',
    flavor: 'concept',
    prompt: {
      es: "Clasifica cada actividad en la rama de la contabilidad a la que pertenece.",
      en: "Classify each activity into the branch of accounting it belongs to.",
    },
    categories: [
      { id: 'N1-004-c1', label: { es: "Contabilidad financiera", en: "Financial accounting" } },
      { id: 'N1-004-c2', label: { es: "Contabilidad administrativa / de costos", en: "Managerial / cost accounting" } },
      { id: 'N1-004-c3', label: { es: "Contabilidad fiscal", en: "Tax accounting" } },
    ],
    items: [
      { id: 'N1-004-i1', label: { es: "Preparar el estado de situación financiera anual conforme a NIF para un banco", en: "Prepare the annual statement of financial position under NIF for a bank" }, correctCategoryId: 'N1-004-c1' },
      { id: 'N1-004-i2', label: { es: "Calcular el costo unitario de cada producto para fijar precios", en: "Compute each product's unit cost to set prices" }, correctCategoryId: 'N1-004-c2' },
      { id: 'N1-004-i3', label: { es: "Determinar el ISR del ejercicio para la declaración anual", en: "Determine the year's income tax for the annual return" }, correctCategoryId: 'N1-004-c3' },
      { id: 'N1-004-i4', label: { es: "Elaborar el presupuesto de gastos por departamento", en: "Prepare the expense budget by department" }, correctCategoryId: 'N1-004-c2' },
      { id: 'N1-004-i5', label: { es: "Calcular el IVA a pagar del mes", en: "Compute the month's VAT payable" }, correctCategoryId: 'N1-004-c3' },
      { id: 'N1-004-i6', label: { es: "Emitir estados financieros dictaminados para inversionistas", en: "Issue audited financial statements for investors" }, correctCategoryId: 'N1-004-c1' },
    ],
    explanation: {
      es: "Financiera: estados de propósito general bajo NIF para terceros (banco, inversionistas). Administrativa: información interna para decidir (costos unitarios, presupuestos). Fiscal: cálculo y cumplimiento de impuestos (ISR, IVA). Un error común es poner el presupuesto en financiera: no es un estado de propósito general.",
      en: "Financial: general-purpose statements under NIF for third parties (bank, investors). Managerial: internal information for decisions (unit costs, budgets). Tax: computing and complying with taxes (income tax, VAT). A common mistake is placing the budget in financial accounting: it is not a general-purpose statement.",
    },
    difficulty: 2,
    points: 15,
    competency: 'accounting-basics',
  },
  {
    id: 'N1-005',
    level: 1,
    module: 'L1-01',
    kind: 'mcq',
    flavor: 'case',
    context: {
      es: "El dueño de un taller mecánico paga con la tarjeta de débito del negocio $4,800 de la colegiatura de su hijo y pide registrarlo como 'gasto de capacitación'.",
      en: "The owner of a repair shop pays $4,800 of his son's school tuition with the business debit card and asks to record it as a 'training expense'.",
    },
    prompt: { es: "¿Qué postulado básico impide registrarlo como gasto del negocio?", en: "Which basic postulate prevents recording it as a business expense?" },
    options: [
      { id: 'N1-005-a', text: { es: "Negocio en marcha", en: "Going concern" } },
      { id: 'N1-005-b', text: { es: "Consistencia", en: "Consistency" } },
      { id: 'N1-005-c', text: { es: "Devengación contable", en: "Accrual" } },
      { id: 'N1-005-d', text: { es: "Entidad económica", en: "Economic entity" } },
    ],
    correctOptionId: 'N1-005-d',
    explanation: {
      es: "La **entidad económica** separa las operaciones del negocio de las de sus dueños. La colegiatura es un gasto personal: debe registrarse como retiro del dueño o cuenta por cobrar a él, no como gasto de operación. Devengación trata del momento de reconocimiento, no de a quién pertenece la operación.",
      en: "The **economic entity** postulate separates business transactions from those of its owners. The tuition is a personal expense: it should be recorded as an owner withdrawal or a receivable from him, not as an operating expense. Accrual deals with timing of recognition, not with whose transaction it is.",
    },
    difficulty: 1,
    points: 10,
    competency: 'accounting-basics',
  },
  {
    id: 'N1-006',
    level: 1,
    module: 'L1-01',
    kind: 'truefalse',
    flavor: 'concept',
    prompt: {
      es: "Según la devengación contable, un servicio prestado en diciembre y cobrado en enero se reconoce como ingreso de diciembre.",
      en: "Under accrual accounting, a service performed in December and collected in January is recognized as December revenue.",
    },
    answer: true,
    explanation: {
      es: "Verdadero. El ingreso se reconoce cuando se gana (al prestar el servicio), no cuando se cobra. En diciembre se registra el ingreso contra Clientes; en enero el cobro sólo cambia Clientes por Bancos.",
      en: "True. Revenue is recognized when earned (when the service is performed), not when collected. In December revenue is recorded against Accounts receivable; in January the collection only swaps Receivables for Bank.",
    },
    difficulty: 2,
    points: 15,
    competency: 'accounting-basics',
  },

  // ═════════════════════════ L1-02 ═════════════════════════
  {
    id: 'N1-007',
    level: 1,
    module: 'L1-02',
    kind: 'mcq',
    flavor: 'concept',
    prompt: { es: "¿Cuál de las siguientes cuentas es un pasivo?", en: "Which of the following accounts is a liability?" },
    options: [
      { id: 'N1-007-a', text: { es: "Clientes", en: "Accounts receivable" } },
      { id: 'N1-007-b', text: { es: "Proveedores", en: "Accounts payable" } },
      { id: 'N1-007-c', text: { es: "Inventarios", en: "Inventory" } },
      { id: 'N1-007-d', text: { es: "Capital social", en: "Share capital" } },
    ],
    correctOptionId: 'N1-007-b',
    explanation: {
      es: "Proveedores es una obligación de pagar por bienes recibidos: pasivo. Clientes es un derecho de cobro (activo), Inventarios es un recurso (activo) y Capital social es aportación de los dueños (capital). Es común confundir Clientes con pasivo porque 'involucra a terceros'.",
      en: "Accounts payable is an obligation to pay for goods received: a liability. Accounts receivable is a right to collect (asset), Inventory is a resource (asset) and Share capital is the owners' contribution (equity). People often mistake receivables for liabilities because they 'involve third parties'.",
    },
    difficulty: 1,
    points: 10,
    competency: 'elements',
  },
  {
    id: 'N1-008',
    level: 1,
    module: 'L1-02',
    kind: 'classify',
    flavor: 'concept',
    prompt: { es: "Clasifica cada cuenta como activo, pasivo o capital contable.", en: "Classify each account as asset, liability or equity." },
    categories: [
      { id: 'N1-008-c1', label: { es: "Activo", en: "Asset" } },
      { id: 'N1-008-c2', label: { es: "Pasivo", en: "Liability" } },
      { id: 'N1-008-c3', label: { es: "Capital contable", en: "Equity" } },
    ],
    items: [
      { id: 'N1-008-i1', label: { es: "Bancos", en: "Bank" }, correctCategoryId: 'N1-008-c1' },
      { id: 'N1-008-i2', label: { es: "Documentos por pagar", en: "Notes payable" }, correctCategoryId: 'N1-008-c2' },
      { id: 'N1-008-i3', label: { es: "Utilidades retenidas", en: "Retained earnings" }, correctCategoryId: 'N1-008-c3' },
      { id: 'N1-008-i4', label: { es: "Equipo de transporte", en: "Vehicles" }, correctCategoryId: 'N1-008-c1' },
      { id: 'N1-008-i5', label: { es: "Sueldos por pagar", en: "Salaries payable" }, correctCategoryId: 'N1-008-c2' },
      { id: 'N1-008-i6', label: { es: "Capital social", en: "Share capital" }, correctCategoryId: 'N1-008-c3' },
    ],
    explanation: {
      es: "Activos: recursos controlados (Bancos, Equipo de transporte). Pasivos: obligaciones (Documentos y Sueldos por pagar; la palabra 'por pagar' es una pista). Capital: aportaciones (Capital social) y resultados acumulados (Utilidades retenidas), que pertenecen a los dueños.",
      en: "Assets: controlled resources (Bank, Vehicles). Liabilities: obligations (Notes and Salaries payable; the word 'payable' is a clue). Equity: contributions (Share capital) and accumulated results (Retained earnings), which belong to the owners.",
    },
    difficulty: 1,
    points: 10,
    competency: 'elements',
  },
  {
    id: 'N1-009',
    level: 1,
    module: 'L1-02',
    kind: 'truefalse',
    flavor: 'concept',
    prompt: {
      es: "Para que un recurso se reconozca como activo, la entidad debe ser su propietaria legal.",
      en: "For a resource to be recognized as an asset, the entity must be its legal owner.",
    },
    answer: false,
    explanation: {
      es: "Falso. La definición de activo se basa en el **control** del recurso y en los beneficios económicos futuros esperados, no en la propiedad legal. Por ejemplo, en un arrendamiento el arrendatario reconoce un activo por derecho de uso sin ser dueño del bien.",
      en: "False. The definition of an asset is based on **control** of the resource and expected future economic benefits, not legal ownership. For example, in a lease the lessee recognizes a right-of-use asset without owning the item.",
    },
    difficulty: 2,
    points: 15,
    competency: 'elements',
  },
  {
    id: 'N1-010',
    level: 1,
    module: 'L1-02',
    kind: 'multi',
    flavor: 'concept',
    prompt: { es: "¿Cuáles son activos **circulantes**? Selecciona todas las que apliquen.", en: "Which are **current** assets? Select all that apply." },
    options: [
      { id: 'N1-010-a', text: { es: "Edificios", en: "Buildings" } },
      { id: 'N1-010-b', text: { es: "Clientes", en: "Accounts receivable" } },
      { id: 'N1-010-c', text: { es: "Terrenos", en: "Land" } },
      { id: 'N1-010-d', text: { es: "Inventarios", en: "Inventory" } },
      { id: 'N1-010-e', text: { es: "Bancos", en: "Bank" } },
    ],
    correctOptionIds: ['N1-010-b', 'N1-010-d', 'N1-010-e'],
    explanation: {
      es: "Son circulantes los activos que se convierten en efectivo o se consumen en 12 meses o en el ciclo de operación: Bancos, Clientes e Inventarios. Edificios y Terrenos se usan por varios años: son no circulantes.",
      en: "Current assets are those turned into cash or consumed within 12 months or the operating cycle: Bank, Accounts receivable and Inventory. Buildings and Land are used for several years: they are non-current.",
    },
    difficulty: 1,
    points: 10,
    competency: 'elements',
  },
  {
    id: 'N1-011',
    level: 1,
    module: 'L1-02',
    kind: 'numeric',
    flavor: 'case',
    context: {
      es: "Saldos de Comercial Sierra: Bancos $45,000; Clientes $30,000; Inventarios $25,000; Mobiliario y equipo de oficina $50,000; Proveedores $20,000; Capital social $130,000.",
      en: "Balances of Comercial Sierra: Bank $45,000; Accounts receivable $30,000; Inventory $25,000; Office furniture and equipment $50,000; Accounts payable $20,000; Share capital $130,000.",
    },
    prompt: { es: "Calcula el activo total, en pesos.", en: "Compute total assets, in pesos." },
    answer: 150000,
    unit: 'MXN',
    decimals: 0,
    tolerance: { abs: 0.5 },
    explanation: {
      es: "Suma sólo los activos: 45,000 + 30,000 + 25,000 + 50,000 = $150,000. Proveedores (pasivo) y Capital social (capital) no se suman. Comprobación: 20,000 + 130,000 = 150,000.",
      en: "Add only the assets: 45,000 + 30,000 + 25,000 + 50,000 = $150,000. Accounts payable (liability) and Share capital (equity) are not added. Check: 20,000 + 130,000 = 150,000.",
    },
    difficulty: 1,
    points: 10,
    competency: 'elements',
  },
  {
    id: 'N1-012',
    level: 1,
    module: 'L1-02',
    kind: 'mcq',
    flavor: 'case',
    context: {
      es: "Una empresa de banquetes recibe hoy $20,000 de un cliente como anticipo por un evento que se realizará dentro de dos meses.",
      en: "A catering company receives $20,000 today from a client as an advance for an event to be held in two months.",
    },
    prompt: { es: "¿Cómo se clasifica hoy el anticipo recibido?", en: "How is the advance received classified today?" },
    options: [
      { id: 'N1-012-a', text: { es: "Ingreso del periodo", en: "Revenue for the period" } },
      { id: 'N1-012-b', text: { es: "Capital contable", en: "Equity" } },
      { id: 'N1-012-c', text: { es: "Pasivo (Anticipos de clientes)", en: "Liability (Customer advances)" } },
      { id: 'N1-012-d', text: { es: "Activo (Clientes)", en: "Asset (Accounts receivable)" } },
    ],
    correctOptionId: 'N1-012-c',
    explanation: {
      es: "Al cobrar por anticipado la empresa adquiere la **obligación** de prestar el servicio: es un pasivo. Será ingreso cuando se realice el evento (devengación). El efectivo recibido sí es activo (Bancos), pero la contrapartida es pasivo, no Clientes ni ingreso.",
      en: "By collecting in advance the company takes on the **obligation** to provide the service: it is a liability. It becomes revenue when the event takes place (accrual). The cash received is an asset (Bank), but the other side is a liability, not receivables or revenue.",
    },
    difficulty: 2,
    points: 15,
    competency: 'elements',
  },

  // ═════════════════════════ L1-03 ═════════════════════════
  {
    id: 'N1-013',
    level: 1,
    module: 'L1-03',
    kind: 'formula',
    flavor: 'concept',
    prompt: { es: "Completa la ecuación contable fundamental.", en: "Complete the fundamental accounting equation." },
    template: 'Activo = {{b1}} + {{b2}}',
    blanks: [
      {
        id: 'b1',
        options: [
          { id: 'N1-013-b1-a', text: { es: "Ingresos", en: "Revenue" } },
          { id: 'N1-013-b1-b', text: { es: "Pasivo", en: "Liabilities" } },
          { id: 'N1-013-b1-c', text: { es: "Gastos", en: "Expenses" } },
        ],
        correctOptionId: 'N1-013-b1-b',
      },
      {
        id: 'b2',
        options: [
          { id: 'N1-013-b2-a', text: { es: "Capital contable", en: "Equity" } },
          { id: 'N1-013-b2-b', text: { es: "Utilidad bruta", en: "Gross profit" } },
          { id: 'N1-013-b2-c', text: { es: "Costo de ventas", en: "Cost of goods sold" } },
        ],
        correctOptionId: 'N1-013-b2-a',
      },
    ],
    explanation: {
      es: "Activo = Pasivo + Capital contable: los recursos se financian con deuda (pasivo) o con recursos de los dueños (capital). Ingresos y gastos no aparecen en la ecuación básica porque se acumulan dentro del capital.",
      en: "Assets = Liabilities + Equity: resources are financed by debt (liabilities) or by the owners (equity). Revenue and expenses do not appear in the basic equation because they accumulate within equity.",
    },
    difficulty: 1,
    points: 10,
    competency: 'accounting-equation',
  },
  {
    id: 'N1-014',
    level: 1,
    module: 'L1-03',
    kind: 'numeric',
    flavor: 'concept',
    prompt: {
      es: "Una empresa tiene activos por $500,000 y pasivos por $180,000. ¿Cuál es su capital contable? Responde en pesos.",
      en: "A company has assets of $500,000 and liabilities of $180,000. What is its equity? Answer in pesos.",
    },
    answer: 320000,
    unit: 'MXN',
    decimals: 0,
    tolerance: { abs: 0.5 },
    explanation: {
      es: "Capital = Activo − Pasivo = 500,000 − 180,000 = $320,000. Error común: sumar ambos (680,000).",
      en: "Equity = Assets − Liabilities = 500,000 − 180,000 = $320,000. Common mistake: adding them (680,000).",
    },
    difficulty: 1,
    points: 10,
    competency: 'accounting-equation',
  },
  {
    id: 'N1-015',
    level: 1,
    module: 'L1-03',
    kind: 'mcq',
    flavor: 'concept',
    prompt: {
      es: "La empresa compra equipo de cómputo por $35,000 a crédito con un proveedor. ¿Qué efecto tiene en la ecuación contable?",
      en: "The company buys computer equipment for $35,000 on credit from a supplier. What is the effect on the accounting equation?",
    },
    options: [
      { id: 'N1-015-a', text: { es: "Activo ↑ y Capital ↑", en: "Assets ↑ and Equity ↑" } },
      { id: 'N1-015-b', text: { es: "Un activo ↑ y otro activo ↓", en: "One asset ↑ and another asset ↓" } },
      { id: 'N1-015-c', text: { es: "Pasivo ↑ y Capital ↓", en: "Liabilities ↑ and Equity ↓" } },
      { id: 'N1-015-d', text: { es: "Activo ↑ y Pasivo ↑", en: "Assets ↑ and Liabilities ↑" } },
    ],
    correctOptionId: 'N1-015-d',
    explanation: {
      es: "Aumenta un activo (Equipo de cómputo +35,000) y nace una deuda (pasivo +35,000). No hay ingreso ni gasto, así que el capital no cambia. Sería 'un activo sube y otro baja' sólo si se pagara de contado.",
      en: "An asset increases (Computer equipment +35,000) and a debt arises (liability +35,000). There is no revenue or expense, so equity does not change. It would be 'one asset up, another down' only if paid in cash.",
    },
    difficulty: 1,
    points: 10,
    competency: 'accounting-equation',
  },
  {
    id: 'N1-016',
    level: 1,
    module: 'L1-03',
    kind: 'truefalse',
    flavor: 'concept',
    prompt: {
      es: "Pagar en efectivo una deuda con un proveedor disminuye tanto el activo como el pasivo, y el capital no cambia.",
      en: "Paying a supplier debt in cash decreases both assets and liabilities, and equity does not change.",
    },
    answer: true,
    explanation: {
      es: "Verdadero. Sale efectivo (activo ↓) y se extingue la obligación (pasivo ↓) por el mismo importe. No es un gasto: el gasto, si lo hubo, se reconoció al recibir el bien o servicio.",
      en: "True. Cash leaves (assets ↓) and the obligation is extinguished (liabilities ↓) by the same amount. It is not an expense: any expense was recognized when the goods or service were received.",
    },
    difficulty: 1,
    points: 10,
    competency: 'accounting-equation',
  },
  {
    id: 'N1-017',
    level: 1,
    module: 'L1-03',
    kind: 'fields',
    flavor: 'case',
    context: {
      es: "Operaciones de Servicios Delta en su primer mes: (1) los socios aportan $200,000 en efectivo; (2) compra papelería y útiles por $50,000 a crédito; (3) paga $20,000 al proveedor; (4) presta servicios y cobra $30,000 en efectivo.",
      en: "Transactions of Servicios Delta in its first month: (1) partners contribute $200,000 in cash; (2) buys office supplies for $50,000 on credit; (3) pays $20,000 to the supplier; (4) performs services and collects $30,000 in cash.",
    },
    prompt: {
      es: "Determina los totales al final del mes, en pesos.",
      en: "Determine the totals at month end, in pesos.",
    },
    fields: [
      { id: 'f1', label: { es: "Activo total", en: "Total assets" }, answer: 260000, unit: 'MXN', tolerance: { abs: 0.5 } },
      { id: 'f2', label: { es: "Pasivo total", en: "Total liabilities" }, answer: 30000, unit: 'MXN', tolerance: { abs: 0.5 } },
      { id: 'f3', label: { es: "Capital contable", en: "Equity" }, answer: 230000, unit: 'MXN', tolerance: { abs: 0.5 } },
    ],
    explanation: {
      es: "Activo: 200,000 + 50,000 − 20,000 + 30,000 = $260,000. Pasivo: 50,000 − 20,000 = $30,000. Capital: aportación 200,000 + ingreso 30,000 = $230,000. Comprobación: 30,000 + 230,000 = 260,000. Error común: tratar el pago al proveedor como gasto y restarlo del capital.",
      en: "Assets: 200,000 + 50,000 − 20,000 + 30,000 = $260,000. Liabilities: 50,000 − 20,000 = $30,000. Equity: contribution 200,000 + revenue 30,000 = $230,000. Check: 30,000 + 230,000 = 260,000. Common mistake: treating the supplier payment as an expense and deducting it from equity.",
    },
    difficulty: 2,
    points: 15,
    competency: 'accounting-equation',
  },
  {
    id: 'N1-018',
    level: 1,
    module: 'L1-03',
    kind: 'multi',
    flavor: 'concept',
    prompt: {
      es: "¿Cuáles operaciones **aumentan** el capital contable? Selecciona todas las que apliquen.",
      en: "Which transactions **increase** equity? Select all that apply.",
    },
    options: [
      { id: 'N1-018-a', text: { es: "Un préstamo bancario recibido", en: "A bank loan received" } },
      { id: 'N1-018-b', text: { es: "Una aportación de capital de los socios", en: "A capital contribution by the partners" } },
      { id: 'N1-018-c', text: { es: "Una compra de mercancía a crédito", en: "A purchase of goods on credit" } },
      { id: 'N1-018-d', text: { es: "Un servicio prestado y cobrado", en: "A service performed and collected" } },
      { id: 'N1-018-e', text: { es: "El pago de la renta del local", en: "Payment of the store rent" } },
    ],
    correctOptionIds: ['N1-018-b', 'N1-018-d'],
    explanation: {
      es: "El capital aumenta con aportaciones de los dueños y con ingresos. El préstamo y la compra a crédito aumentan activo y pasivo, no el capital. El pago de renta es un gasto: disminuye el capital.",
      en: "Equity increases with owner contributions and revenue. The loan and the credit purchase increase assets and liabilities, not equity. Paying rent is an expense: it decreases equity.",
    },
    difficulty: 2,
    points: 15,
    competency: 'accounting-equation',
  },

  // ═════════════════════════ L1-04 ═════════════════════════
  {
    id: 'N1-019',
    level: 1,
    module: 'L1-04',
    kind: 'mcq',
    flavor: 'concept',
    prompt: { es: "¿Cuál es la naturaleza de la cuenta Proveedores?", en: "What is the normal balance of Accounts payable?" },
    options: [
      { id: 'N1-019-a', text: { es: "Acreedora: aumenta con abonos", en: "Credit: increases with credits" } },
      { id: 'N1-019-b', text: { es: "Deudora: aumenta con cargos", en: "Debit: increases with debits" } },
      { id: 'N1-019-c', text: { es: "Deudora: aumenta con abonos", en: "Debit: increases with credits" } },
      { id: 'N1-019-d', text: { es: "No tiene naturaleza definida", en: "It has no defined normal balance" } },
    ],
    correctOptionId: 'N1-019-a',
    explanation: {
      es: "Proveedores es pasivo y los pasivos son de naturaleza acreedora: aumentan con abonos (nueva compra a crédito) y disminuyen con cargos (pagos).",
      en: "Accounts payable is a liability, and liabilities have a credit nature: they increase with credits (new credit purchase) and decrease with debits (payments).",
    },
    difficulty: 1,
    points: 10,
    competency: 'debits-credits',
  },
  {
    id: 'N1-020',
    level: 1,
    module: 'L1-04',
    kind: 'classify',
    flavor: 'concept',
    prompt: { es: "Clasifica cada cuenta según su naturaleza.", en: "Classify each account by its normal balance." },
    categories: [
      { id: 'N1-020-c1', label: { es: "Deudora", en: "Debit" } },
      { id: 'N1-020-c2', label: { es: "Acreedora", en: "Credit" } },
    ],
    items: [
      { id: 'N1-020-i1', label: { es: "Caja", en: "Cash on hand" }, correctCategoryId: 'N1-020-c1' },
      { id: 'N1-020-i2', label: { es: "Ventas", en: "Sales" }, correctCategoryId: 'N1-020-c2' },
      { id: 'N1-020-i3', label: { es: "Costo de ventas", en: "Cost of goods sold" }, correctCategoryId: 'N1-020-c1' },
      { id: 'N1-020-i4', label: { es: "Depreciación acumulada", en: "Accumulated depreciation" }, correctCategoryId: 'N1-020-c2' },
      { id: 'N1-020-i5', label: { es: "Renta (gasto)", en: "Rent expense" }, correctCategoryId: 'N1-020-c1' },
      { id: 'N1-020-i6', label: { es: "Capital social", en: "Share capital" }, correctCategoryId: 'N1-020-c2' },
    ],
    explanation: {
      es: "Deudoras: activos (Caja), costos (Costo de ventas) y gastos (Renta). Acreedoras: ingresos (Ventas), capital (Capital social) y cuentas complementarias de activo (Depreciación acumulada). El error más frecuente es marcar Depreciación acumulada como deudora por estar en el activo.",
      en: "Debit nature: assets (Cash), costs (COGS) and expenses (Rent). Credit nature: revenue (Sales), equity (Share capital) and contra-assets (Accumulated depreciation). The most frequent mistake is marking Accumulated depreciation as debit because it sits within assets.",
    },
    difficulty: 2,
    points: 15,
    competency: 'debits-credits',
  },
  {
    id: 'N1-021',
    level: 1,
    module: 'L1-04',
    kind: 'truefalse',
    flavor: 'concept',
    prompt: { es: "Cargar una cuenta siempre significa aumentar su saldo.", en: "Debiting an account always means increasing its balance." },
    answer: false,
    explanation: {
      es: "Falso. Un cargo aumenta las cuentas deudoras (activos, costos, gastos) pero **disminuye** las acreedoras (pasivos, capital, ingresos). Por ejemplo, pagar a un proveedor es un cargo que reduce Proveedores.",
      en: "False. A debit increases debit-nature accounts (assets, costs, expenses) but **decreases** credit-nature accounts (liabilities, equity, revenue). For example, paying a supplier is a debit that reduces Accounts payable.",
    },
    difficulty: 1,
    points: 10,
    competency: 'debits-credits',
  },
  {
    id: 'N1-022',
    level: 1,
    module: 'L1-04',
    kind: 'formula',
    flavor: 'concept',
    prompt: { es: "Completa la fórmula del saldo de una cuenta de naturaleza deudora.", en: "Complete the balance formula for a debit-nature account." },
    template: 'Saldo deudor = {{b1}} − {{b2}}',
    blanks: [
      {
        id: 'b1',
        options: [
          { id: 'N1-022-b1-a', text: { es: "Suma de abonos", en: "Total credits" } },
          { id: 'N1-022-b1-b', text: { es: "Saldo acreedor", en: "Credit balance" } },
          { id: 'N1-022-b1-c', text: { es: "Suma de cargos", en: "Total debits" } },
        ],
        correctOptionId: 'N1-022-b1-c',
      },
      {
        id: 'b2',
        options: [
          { id: 'N1-022-b2-a', text: { es: "Suma de abonos", en: "Total credits" } },
          { id: 'N1-022-b2-b', text: { es: "Suma de cargos", en: "Total debits" } },
          { id: 'N1-022-b2-c', text: { es: "Saldo inicial", en: "Opening balance" } },
        ],
        correctOptionId: 'N1-022-b2-a',
      },
    ],
    explanation: {
      es: "Saldo deudor = Σ cargos − Σ abonos (el saldo inicial deudor ya forma parte de los cargos). Si el resultado fuera negativo, la cuenta tendría saldo acreedor.",
      en: "Debit balance = Σ debits − Σ credits (a debit opening balance is already part of the debits). If the result were negative, the account would have a credit balance.",
    },
    difficulty: 1,
    points: 10,
    competency: 'debits-credits',
  },
  {
    id: 'N1-023',
    level: 1,
    module: 'L1-04',
    kind: 'multi',
    flavor: 'concept',
    prompt: {
      es: "¿Cuáles movimientos se registran con un **cargo**? Selecciona todas las que apliquen.",
      en: "Which movements are recorded with a **debit**? Select all that apply.",
    },
    options: [
      { id: 'N1-023-a', text: { es: "Aumento en Bancos", en: "Increase in Bank" } },
      { id: 'N1-023-b', text: { es: "Aumento en Ventas", en: "Increase in Sales" } },
      { id: 'N1-023-c', text: { es: "Disminución en Proveedores", en: "Decrease in Accounts payable" } },
      { id: 'N1-023-d', text: { es: "Aumento en Capital social", en: "Increase in Share capital" } },
      { id: 'N1-023-e', text: { es: "Aumento en Sueldos y salarios (gasto)", en: "Increase in Salaries and wages (expense)" } },
    ],
    correctOptionIds: ['N1-023-a', 'N1-023-c', 'N1-023-e'],
    explanation: {
      es: "Se carga para aumentar cuentas deudoras (Bancos, gastos) y para disminuir cuentas acreedoras (Proveedores). Los aumentos de Ventas y Capital social se registran con abono porque son de naturaleza acreedora.",
      en: "You debit to increase debit-nature accounts (Bank, expenses) and to decrease credit-nature accounts (Accounts payable). Increases in Sales and Share capital are credits because they have a credit nature.",
    },
    difficulty: 2,
    points: 15,
    competency: 'debits-credits',
  },
  {
    id: 'N1-024',
    level: 1,
    module: 'L1-04',
    kind: 'numeric',
    flavor: 'tAccount',
    context: {
      es: "Bancos: saldo inicial $12,000. Cargos del mes: $35,000 y $8,500. Abonos del mes: $22,000 y $4,300.",
      en: "Bank: opening balance $12,000. Debits during the month: $35,000 and $8,500. Credits during the month: $22,000 and $4,300.",
    },
    prompt: { es: "¿Cuál es el saldo final de Bancos? Responde en pesos.", en: "What is the ending Bank balance? Answer in pesos." },
    answer: 29200,
    unit: 'MXN',
    decimals: 0,
    tolerance: { abs: 0.5 },
    explanation: {
      es: "Cargos totales = 12,000 + 35,000 + 8,500 = 55,500. Abonos = 22,000 + 4,300 = 26,300. Saldo = 55,500 − 26,300 = $29,200 deudor. Error común: olvidar el saldo inicial (resultado 17,200).",
      en: "Total debits = 12,000 + 35,000 + 8,500 = 55,500. Credits = 22,000 + 4,300 = 26,300. Balance = 55,500 − 26,300 = $29,200 debit. Common mistake: forgetting the opening balance (result 17,200).",
    },
    difficulty: 2,
    points: 15,
    competency: 'debits-credits',
  },

  // ═════════════════════════ L1-05 ═════════════════════════
  {
    id: 'N1-025',
    level: 1,
    module: 'L1-05',
    kind: 'truefalse',
    flavor: 'concept',
    prompt: {
      es: "En todo asiento de diario la suma de los cargos debe ser igual a la suma de los abonos, aunque intervengan más de dos cuentas.",
      en: "In every journal entry total debits must equal total credits, even when more than two accounts are involved.",
    },
    answer: true,
    explanation: {
      es: "Verdadero. Es el principio de partida doble. En un asiento compuesto puede haber un cargo y dos abonos (o al revés), pero los totales deben coincidir.",
      en: "True. This is the double-entry principle. A compound entry may have one debit and two credits (or vice versa), but totals must match.",
    },
    difficulty: 1,
    points: 10,
    competency: 'journal-entries',
  },
  {
    id: 'N1-026',
    level: 1,
    module: 'L1-05',
    kind: 'mcq',
    flavor: 'concept',
    prompt: {
      es: "Un despacho cobra por transferencia $8,000 por un servicio prestado hoy. ¿Qué asiento es correcto? (Sin IVA.)",
      en: "A firm collects $8,000 by bank transfer for a service performed today. Which entry is correct? (No VAT.)",
    },
    options: [
      { id: 'N1-026-a', text: { es: "Cargo Ingresos por servicios / Abono Bancos", en: "Debit Service revenue / Credit Bank" } },
      { id: 'N1-026-b', text: { es: "Cargo Bancos / Abono Capital social", en: "Debit Bank / Credit Share capital" } },
      { id: 'N1-026-c', text: { es: "Cargo Clientes / Abono Ingresos por servicios", en: "Debit Accounts receivable / Credit Service revenue" } },
      { id: 'N1-026-d', text: { es: "Cargo Bancos / Abono Ingresos por servicios", en: "Debit Bank / Credit Service revenue" } },
    ],
    correctOptionId: 'N1-026-d',
    explanation: {
      es: "Bancos (activo) aumenta → cargo. Ingresos por servicios (naturaleza acreedora) aumenta → abono. La opción invertida es el error más común; Clientes sólo procede si el servicio se cobra después, y Capital social sólo con aportaciones de socios.",
      en: "Bank (asset) increases → debit. Service revenue (credit nature) increases → credit. The reversed option is the most common mistake; Accounts receivable applies only if collected later, and Share capital only for owner contributions.",
    },
    difficulty: 1,
    points: 10,
    competency: 'journal-entries',
  },
  {
    id: 'N1-027',
    level: 1,
    module: 'L1-05',
    kind: 'journal',
    flavor: 'concept',
    prompt: {
      es: "Los socios constituyen la empresa aportando $150,000 que se depositan en la cuenta bancaria. Registra el asiento. (No aplica IVA.)",
      en: "The partners set up the company by contributing $150,000, deposited in the bank account. Record the entry. (No VAT applies.)",
    },
    accountChoices: ['1101', '1102', '1104', '2201', '3101', '3102', '4102'],
    expected: [
      { accountCode: '1102', side: 'D', amount: 150000 },
      { accountCode: '3101', side: 'C', amount: 150000 },
    ],
    explanation: {
      es: "Bancos aumenta (cargo $150,000) y nace el capital aportado por los socios (abono a Capital social $150,000). No es un ingreso ni un préstamo: es aportación de los dueños. Se usa Bancos, no Caja, porque el dinero se depositó.",
      en: "Bank increases (debit $150,000) and the partners' contributed capital arises (credit Share capital $150,000). It is neither revenue nor a loan: it is an owner contribution. Bank, not Cash on hand, is used because the money was deposited.",
    },
    difficulty: 1,
    points: 10,
    competency: 'journal-entries',
  },
  {
    id: 'N1-028',
    level: 1,
    module: 'L1-05',
    kind: 'journal',
    flavor: 'case',
    prompt: {
      es: "Se compra mobiliario de oficina por $36,000: se pagan $12,000 por transferencia y por el resto se firma un pagaré (documento por pagar) a 6 meses. Registra el asiento. (No consideres IVA.)",
      en: "Office furniture is bought for $36,000: $12,000 is paid by transfer and a 6-month promissory note (note payable) is signed for the rest. Record the entry. (Ignore VAT.)",
    },
    accountChoices: ['1102', '1108', '1203', '1205', '2101', '2103', '2201', '6102'],
    expected: [
      { accountCode: '1203', side: 'D', amount: 36000 },
      { accountCode: '1102', side: 'C', amount: 12000 },
      { accountCode: '2103', side: 'C', amount: 24000 },
    ],
    explanation: {
      es: "Asiento compuesto: cargo a Mobiliario y equipo de oficina $36,000 (activo que aumenta); abono a Bancos $12,000 (sale dinero) y a Documentos por pagar 36,000 − 12,000 = $24,000 (obligación con pagaré). Cargos 36,000 = abonos 36,000. No es Proveedores porque existe un documento formal, ni es Inventarios porque el mobiliario no se venderá.",
      en: "Compound entry: debit Office furniture and equipment $36,000 (asset increases); credit Bank $12,000 (cash leaves) and Notes payable 36,000 − 12,000 = $24,000 (obligation under a promissory note). Debits 36,000 = credits 36,000. It is not Accounts payable because there is a formal note, nor Inventory because the furniture will not be resold.",
    },
    difficulty: 2,
    points: 15,
    competency: 'journal-entries',
  },
  {
    id: 'N1-029',
    level: 1,
    module: 'L1-05',
    kind: 'journal',
    flavor: 'concept',
    prompt: {
      es: "Se paga por transferencia la renta del local del mes en curso por $9,500. Registra el asiento. (No consideres IVA.)",
      en: "The current month's store rent of $9,500 is paid by bank transfer. Record the entry. (Ignore VAT.)",
    },
    accountChoices: ['1101', '1102', '1110', '2102', '6101', '6102', '6103'],
    expected: [
      { accountCode: '6102', side: 'D', amount: 9500 },
      { accountCode: '1102', side: 'C', amount: 9500 },
    ],
    explanation: {
      es: "La renta del mes en curso ya se consumió: es un gasto (cargo a Renta $9,500). El pago sale del banco (abono a Bancos $9,500). Sólo si se pagaran meses futuros se usaría un pago anticipado (activo).",
      en: "The current month's rent has been consumed: it is an expense (debit Rent expense $9,500). The payment leaves the bank (credit Bank $9,500). Only if future months were paid would a prepaid (asset) account be used.",
    },
    difficulty: 1,
    points: 10,
    competency: 'journal-entries',
  },
  {
    id: 'N1-030',
    level: 1,
    module: 'L1-05',
    kind: 'journal',
    flavor: 'case',
    prompt: {
      es: "Con inventario perpetuo, se venden a crédito mercancías por $40,000 cuyo costo fue de $25,000. Registra el ingreso y el costo de la venta. (No consideres IVA.)",
      en: "Under perpetual inventory, goods are sold on credit for $40,000; their cost was $25,000. Record both the revenue and the cost of the sale. (Ignore VAT.)",
    },
    accountChoices: ['1102', '1104', '1108', '2101', '4101', '4103', '5101', '6104'],
    expected: [
      { accountCode: '1104', side: 'D', amount: 40000 },
      { accountCode: '4101', side: 'C', amount: 40000 },
      { accountCode: '5101', side: 'D', amount: 25000 },
      { accountCode: '1108', side: 'C', amount: 25000 },
    ],
    explanation: {
      es: "Ingreso: cargo a Clientes $40,000 y abono a Ventas $40,000 (precio de venta). Costo: cargo a Costo de ventas $25,000 y abono a Inventarios $25,000 (sale la mercancía al costo). Total cargos 65,000 = total abonos 65,000. Error común: abonar Inventarios por el precio de venta.",
      en: "Revenue: debit Accounts receivable $40,000 and credit Sales $40,000 (selling price). Cost: debit COGS $25,000 and credit Inventory $25,000 (goods leave at cost). Total debits 65,000 = total credits 65,000. Common mistake: crediting Inventory at the selling price.",
    },
    difficulty: 3,
    points: 20,
    competency: 'journal-entries',
  },
  {
    id: 'N1-031',
    level: 1,
    module: 'L1-05',
    kind: 'mcq',
    flavor: 'interpret',
    context: {
      es: "En el diario aparece el asiento: Cargo Proveedores $5,000 / Abono Bancos $5,000.",
      en: "The journal shows the entry: Debit Accounts payable $5,000 / Credit Bank $5,000.",
    },
    prompt: { es: "¿Qué operación se registró?", en: "What transaction was recorded?" },
    options: [
      { id: 'N1-031-a', text: { es: "Una compra de mercancía a crédito", en: "A purchase of goods on credit" } },
      { id: 'N1-031-b', text: { es: "Un pago a un proveedor por transferencia", en: "A payment to a supplier by transfer" } },
      { id: 'N1-031-c', text: { es: "Un cobro a un cliente", en: "A collection from a customer" } },
      { id: 'N1-031-d', text: { es: "Un préstamo recibido de un proveedor", en: "A loan received from a supplier" } },
    ],
    correctOptionId: 'N1-031-b',
    explanation: {
      es: "Cargar Proveedores (pasivo) lo disminuye: se liquidó una deuda. Abonar Bancos (activo) lo disminuye: salió dinero. Es un pago a proveedor. Una compra a crédito sería el inverso: abono a Proveedores.",
      en: "Debiting Accounts payable (liability) decreases it: a debt was settled. Crediting Bank (asset) decreases it: money left. It is a supplier payment. A credit purchase would be the opposite: a credit to Accounts payable.",
    },
    difficulty: 2,
    points: 15,
    competency: 'journal-entries',
  },

  // ═════════════════════════ L1-06 ═════════════════════════
  {
    id: 'N1-032',
    level: 1,
    module: 'L1-06',
    kind: 'mcq',
    flavor: 'concept',
    prompt: { es: "¿Cuál es el propósito principal de la balanza de comprobación?", en: "What is the main purpose of the trial balance?" },
    options: [
      { id: 'N1-032-a', text: { es: "Mostrar la utilidad neta del periodo", en: "Show the net profit for the period" } },
      { id: 'N1-032-b', text: { es: "Registrar las operaciones en orden cronológico", en: "Record transactions in chronological order" } },
      { id: 'N1-032-c', text: { es: "Comprobar que la suma de saldos deudores sea igual a la de saldos acreedores", en: "Check that total debit balances equal total credit balances" } },
      { id: 'N1-032-d', text: { es: "Garantizar que no existan errores contables", en: "Guarantee there are no accounting errors" } },
    ],
    correctOptionId: 'N1-032-c',
    explanation: {
      es: "La balanza lista los saldos del mayor y verifica la igualdad deudor = acreedor. No calcula la utilidad (eso es el estado de resultados), no es cronológica (eso es el diario) y no garantiza ausencia de errores.",
      en: "The trial balance lists ledger balances and checks debit = credit. It does not compute profit (that is the income statement), is not chronological (that is the journal) and does not guarantee the absence of errors.",
    },
    difficulty: 1,
    points: 10,
    competency: 'trial-balance',
  },
  {
    id: 'N1-033',
    level: 1,
    module: 'L1-06',
    kind: 'truefalse',
    flavor: 'concept',
    prompt: {
      es: "Si la balanza de comprobación cuadra, se puede asegurar que todas las operaciones se registraron correctamente.",
      en: "If the trial balance balances, we can be sure all transactions were recorded correctly.",
    },
    answer: false,
    explanation: {
      es: "Falso. La balanza sólo prueba la igualdad aritmética. No detecta asientos omitidos, duplicados ni cargos a la cuenta equivocada del mismo lado, porque esos errores afectan por igual a cargos y abonos.",
      en: "False. The trial balance only proves arithmetic equality. It does not detect omitted or duplicated entries, or postings to the wrong account on the same side, because those errors affect debits and credits equally.",
    },
    difficulty: 1,
    points: 10,
    competency: 'trial-balance',
  },
  {
    id: 'N1-034',
    level: 1,
    module: 'L1-06',
    kind: 'fields',
    flavor: 'tAccount',
    context: {
      es: "Cuenta T de Bancos. Saldo inicial: $20,000. Cargos del periodo: $15,000 y $7,500. Abonos del periodo: $9,000, $3,200 y $11,000.",
      en: "Bank T-account. Opening balance: $20,000. Debits for the period: $15,000 and $7,500. Credits for the period: $9,000, $3,200 and $11,000.",
    },
    prompt: { es: "Completa la cuenta T de Bancos en pesos.", en: "Complete the Bank T-account in pesos." },
    fields: [
      { id: 'f1', label: { es: "Suma de cargos (incluye saldo inicial)", en: "Total debits (including opening balance)" }, answer: 42500, unit: 'MXN', tolerance: { abs: 0.5 } },
      { id: 'f2', label: { es: "Suma de abonos", en: "Total credits" }, answer: 23200, unit: 'MXN', tolerance: { abs: 0.5 } },
      { id: 'f3', label: { es: "Saldo final deudor", en: "Ending debit balance" }, answer: 19300, unit: 'MXN', tolerance: { abs: 0.5 } },
    ],
    explanation: {
      es: "Cargos: 20,000 + 15,000 + 7,500 = $42,500. Abonos: 9,000 + 3,200 + 11,000 = $23,200. Saldo: 42,500 − 23,200 = $19,300 deudor (Bancos es de naturaleza deudora).",
      en: "Debits: 20,000 + 15,000 + 7,500 = $42,500. Credits: 9,000 + 3,200 + 11,000 = $23,200. Balance: 42,500 − 23,200 = $19,300 debit (Bank has a debit nature).",
    },
    difficulty: 1,
    points: 10,
    competency: 't-accounts',
  },
  {
    id: 'N1-035',
    level: 1,
    module: 'L1-06',
    kind: 'fields',
    flavor: 'tAccount',
    context: {
      es: "Cuenta T de Proveedores. Saldo inicial: $30,000. Compras a crédito del periodo: $18,000 y $12,500. Pagos a proveedores: $25,000.",
      en: "Accounts payable T-account. Opening balance: $30,000. Credit purchases for the period: $18,000 and $12,500. Payments to suppliers: $25,000.",
    },
    prompt: { es: "Completa la cuenta T de Proveedores en pesos.", en: "Complete the Accounts payable T-account in pesos." },
    fields: [
      { id: 'f1', label: { es: "Suma de abonos (incluye saldo inicial)", en: "Total credits (including opening balance)" }, answer: 60500, unit: 'MXN', tolerance: { abs: 0.5 } },
      { id: 'f2', label: { es: "Suma de cargos", en: "Total debits" }, answer: 25000, unit: 'MXN', tolerance: { abs: 0.5 } },
      { id: 'f3', label: { es: "Saldo final acreedor", en: "Ending credit balance" }, answer: 35500, unit: 'MXN', tolerance: { abs: 0.5 } },
    ],
    explanation: {
      es: "Proveedores es acreedora: el saldo inicial y las compras a crédito van al haber: 30,000 + 18,000 + 12,500 = $60,500. Los pagos van al debe: $25,000. Saldo = 60,500 − 25,000 = $35,500 acreedor. Error común: anotar las compras en el debe.",
      en: "Accounts payable has a credit nature: the opening balance and credit purchases go on the credit side: 30,000 + 18,000 + 12,500 = $60,500. Payments go on the debit side: $25,000. Balance = 60,500 − 25,000 = $35,500 credit. Common mistake: posting purchases on the debit side.",
    },
    difficulty: 2,
    points: 15,
    competency: 't-accounts',
  },
  {
    id: 'N1-036',
    level: 1,
    module: 'L1-06',
    kind: 'fields',
    flavor: 'statement',
    context: {
      es: "Saldos del mayor al 31 de enero: Bancos $85,000; Clientes $42,000; Inventarios $63,000; Equipo de cómputo $30,000; Sueldos y salarios $25,000; Renta $8,000; Proveedores $38,000; Documentos por pagar $20,000; Ventas $95,000; Capital social: dato faltante.",
      en: "Ledger balances at January 31: Bank $85,000; Accounts receivable $42,000; Inventory $63,000; Computer equipment $30,000; Salaries and wages $25,000; Rent expense $8,000; Accounts payable $38,000; Notes payable $20,000; Sales $95,000; Share capital: missing.",
    },
    prompt: {
      es: "Elabora la balanza de comprobación y determina el saldo de Capital social para que cuadre. Responde en pesos.",
      en: "Prepare the trial balance and determine the Share capital balance needed for it to balance. Answer in pesos.",
    },
    fields: [
      { id: 'f1', label: { es: "Total de saldos deudores", en: "Total debit balances" }, answer: 253000, unit: 'MXN', tolerance: { abs: 0.5 } },
      { id: 'f2', label: { es: "Capital social", en: "Share capital" }, answer: 100000, unit: 'MXN', tolerance: { abs: 0.5 } },
      { id: 'f3', label: { es: "Total de saldos acreedores", en: "Total credit balances" }, answer: 253000, unit: 'MXN', tolerance: { abs: 0.5 } },
    ],
    explanation: {
      es: "Deudores (activos y gastos): 85,000 + 42,000 + 63,000 + 30,000 + 25,000 + 8,000 = $253,000. Acreedores conocidos: 38,000 + 20,000 + 95,000 = 153,000. Capital social = 253,000 − 153,000 = $100,000, y el total acreedor queda en $253,000. Error común: colocar los gastos del lado acreedor.",
      en: "Debit balances (assets and expenses): 85,000 + 42,000 + 63,000 + 30,000 + 25,000 + 8,000 = $253,000. Known credits: 38,000 + 20,000 + 95,000 = 153,000. Share capital = 253,000 − 153,000 = $100,000, so total credits are $253,000. Common mistake: placing expenses on the credit side.",
    },
    difficulty: 3,
    points: 20,
    competency: 'trial-balance',
  },
  {
    id: 'N1-037',
    level: 1,
    module: 'L1-06',
    kind: 'multi',
    flavor: 'concept',
    prompt: {
      es: "¿Qué errores **no** detecta la balanza de comprobación? Selecciona todas las que apliquen.",
      en: "Which errors does the trial balance **not** detect? Select all that apply.",
    },
    options: [
      { id: 'N1-037-a', text: { es: "Omitir por completo el registro de una operación", en: "Completely omitting a transaction" } },
      { id: 'N1-037-b', text: { es: "Traspasar al mayor sólo el cargo de un asiento, sin su abono", en: "Posting only the debit of an entry to the ledger, without its credit" } },
      { id: 'N1-037-c', text: { es: "Cargar a Renta un gasto que correspondía a Publicidad", en: "Debiting Rent for an expense that belonged to Advertising" } },
      { id: 'N1-037-d', text: { es: "Registrar dos veces el mismo asiento completo", en: "Recording the same complete entry twice" } },
      { id: 'N1-037-e', text: { es: "Anotar $5,400 en el cargo y $4,500 en el abono", en: "Entering $5,400 as the debit and $4,500 as the credit" } },
    ],
    correctOptionIds: ['N1-037-a', 'N1-037-c', 'N1-037-d'],
    explanation: {
      es: "Omisión total, duplicado y cuenta equivocada del mismo lado afectan igual a cargos y abonos, así que la balanza sigue cuadrando. Traspasar sólo un lado o anotar importes distintos (transposición 5,400 vs 4,500) sí descuadran la balanza.",
      en: "Total omission, duplication and the wrong account on the same side affect debits and credits equally, so the trial balance still balances. Posting only one side or entering different amounts (transposition 5,400 vs 4,500) do unbalance it.",
    },
    difficulty: 2,
    points: 15,
    competency: 'trial-balance',
  },
  {
    id: 'N1-038',
    level: 1,
    module: 'L1-06',
    kind: 'classify',
    flavor: 'concept',
    prompt: { es: "Asocia cada característica con el registro contable correspondiente.", en: "Match each feature with the corresponding accounting record." },
    categories: [
      { id: 'N1-038-c1', label: { es: "Libro diario", en: "Journal" } },
      { id: 'N1-038-c2', label: { es: "Libro mayor", en: "General ledger" } },
      { id: 'N1-038-c3', label: { es: "Balanza de comprobación", en: "Trial balance" } },
    ],
    items: [
      { id: 'N1-038-i1', label: { es: "Registra las operaciones en orden cronológico", en: "Records transactions in chronological order" }, correctCategoryId: 'N1-038-c1' },
      { id: 'N1-038-i2', label: { es: "Agrupa todos los movimientos de cada cuenta", en: "Groups all movements of each account" }, correctCategoryId: 'N1-038-c2' },
      { id: 'N1-038-i3', label: { es: "Lista los saldos de todas las cuentas a una fecha", en: "Lists the balances of all accounts at a date" }, correctCategoryId: 'N1-038-c3' },
      { id: 'N1-038-i4', label: { es: "Cada asiento se respalda con una póliza numerada", en: "Each entry is backed by a numbered voucher (póliza)" }, correctCategoryId: 'N1-038-c1' },
      { id: 'N1-038-i5', label: { es: "Permite conocer el saldo de una cuenta en cualquier momento", en: "Shows an account's balance at any time" }, correctCategoryId: 'N1-038-c2' },
      { id: 'N1-038-i6', label: { es: "Verifica que total deudor = total acreedor", en: "Checks that total debits = total credits" }, correctCategoryId: 'N1-038-c3' },
    ],
    explanation: {
      es: "El flujo es diario → mayor → balanza. El diario es cronológico y se documenta en pólizas; el mayor clasifica por cuenta y da saldos; la balanza resume todos los saldos y comprueba la igualdad deudor = acreedor.",
      en: "The flow is journal → ledger → trial balance. The journal is chronological and documented in vouchers; the ledger classifies by account and gives balances; the trial balance summarizes all balances and checks debit = credit.",
    },
    difficulty: 2,
    points: 15,
    competency: 'trial-balance',
  },
]
