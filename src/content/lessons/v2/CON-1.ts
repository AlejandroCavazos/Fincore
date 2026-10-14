import type { Exercise, Lesson } from '../../../types'

/**
 * FINCORE — Temario v2.0, área Contabilidad Financiera, parte 1 (Básico).
 * CON-04 a CON-09: niveles de la contabilidad financiera, NIF, NIIF, estados financieros,
 * activos/pasivos/capital y consolidación.
 */

const t = (es: string, en: string) => ({ es, en })

const NOTE_NIF = t(
  "Contenido educativo basado en las Normas de Información Financiera (NIF) del CINIF y, cuando se mencionan, en las NIIF del IASB. Las normas se actualizan y cambian de número o de contenido: verifica la versión vigente (2026) antes de aplicarlas en un caso real. Los montos y tipos de cambio de los ejemplos son hipotéticos.",
  "Educational content based on CINIF's Mexican Financial Reporting Standards (NIF) and, when mentioned, the IASB's IFRS. Standards are updated and change numbering or content: verify the current version (2026) before applying them to a real case. Amounts and exchange rates in the examples are hypothetical.",
)

const NOTE_IFRS = t(
  "Contenido educativo basado en las NIIF (IFRS) emitidas por el IASB y en referencias generales a la regulación mexicana (CNBV) y a las NIF del CINIF. Las normas y sus fechas de vigencia cambian: verifica la versión vigente (2026) antes de aplicarlas. Los montos de los ejemplos son hipotéticos.",
  "Educational content based on the IFRS issued by the IASB and on general references to Mexican regulation (CNBV) and CINIF's NIF. Standards and their effective dates change: verify the current version (2026) before applying them. Amounts in the examples are hypothetical.",
)

const NOTE_EQUITY = t(
  "Contenido educativo basado en las NIF del CINIF y en referencias generales a la Ley General de Sociedades Mercantiles (reserva legal). Las tasas de impuestos y porcentajes de los ejemplos son ilustrativos; las leyes y normas cambian, así que verifica la versión vigente (2026).",
  "Educational content based on CINIF's NIF and general references to Mexico's General Law of Commercial Companies (legal reserve). Tax rates and percentages in the examples are illustrative; laws and standards change, so verify the current version (2026).",
)

export const lessons: Lesson[] = [
  // ───────────────────────────── CON-04 ─────────────────────────────
  {
    id: 'CON-04',
    level: 2,
    topicIds: ['CON.4'],
    title: t("Contabilidad financiera básica, intermedia y avanzada", "Basic, intermediate and advanced financial accounting"),
    summary: t(
      "La contabilidad financiera se aprende por capas: la básica registra y resume operaciones sencillas, la intermedia valúa cada partida con más detalle y la avanzada resuelve casos complejos como grupos de empresas y moneda extranjera.",
      "Financial accounting is learned in layers: basic accounting records and summarizes simple transactions, intermediate accounting measures each item in more detail and advanced accounting solves complex cases such as groups of companies and foreign currency.",
    ),
    minutes: 15,
    objectives: [
      t("Distinguir qué temas corresponden a la contabilidad financiera básica, intermedia y avanzada.", "Distinguish which topics belong to basic, intermediate and advanced financial accounting."),
      t("Aplicar un método de valuación de inventarios (PEPS) como ejemplo de contabilidad intermedia.", "Apply an inventory costing method (FIFO) as an example of intermediate accounting."),
      t("Calcular una diferencia cambiaria sencilla como ejemplo de contabilidad avanzada.", "Compute a simple foreign exchange difference as an example of advanced accounting."),
    ],
    theory: [
      {
        heading: t("Básica: registrar y resumir", "Basic: record and summarize"),
        body: [
          t(
            "La **contabilidad financiera** prepara información para personas de fuera del negocio: bancos, socios, inversionistas. Se aprende en tres capas, como las matemáticas: primero sumas, luego ecuaciones, luego cálculo.",
            "**Financial accounting** prepares information for people outside the business: banks, partners, investors. It is learned in three layers, like math: first addition, then equations, then calculus.",
          ),
          t(
            "La capa **básica** enseña el lenguaje: la ecuación **Activo = Pasivo + Capital**, las cuentas, el **cargo** (lado izquierdo) y el **abono** (lado derecho), el registro de compras y ventas y los estados financieros sencillos. Su meta es que cada operación quede anotada y cuadrada.",
            "The **basic** layer teaches the language: the equation **Assets = Liabilities + Equity**, accounts, the **debit** (left side) and the **credit** (right side), recording purchases and sales and simple financial statements. Its goal is that every transaction is recorded and balanced.",
          ),
          t(
            "Mini ejemplo: una paletería compra un congelador de $15,000 en efectivo. En contabilidad básica solo cambias un activo por otro: sube Mobiliario y equipo y baja Caja por $15,000. El total de activos no cambia.",
            "Mini example: an ice-pop shop buys a $15,000 freezer in cash. In basic accounting you just swap one asset for another: Furniture and equipment goes up and Cash goes down by $15,000. Total assets do not change.",
          ),
        ],
        formulas: [
          {
            name: t("Ecuación contable: lo que tienes, lo que debes y lo que es tuyo", "Accounting equation: what you have, what you owe and what is yours"),
            expression: "Activo = Pasivo + Capital",
            variables: [
              { symbol: "Activo", meaning: t("Todo lo que el negocio tiene y le sirve: dinero, mercancía, equipo, lo que le deben. En pesos.", "Everything the business has and uses: money, goods, equipment, what it is owed. In pesos.") },
              { symbol: "Pasivo", meaning: t("Todo lo que el negocio debe a otros: proveedores, bancos, impuestos. En pesos.", "Everything the business owes others: suppliers, banks, taxes. In pesos.") },
              { symbol: "Capital", meaning: t("Lo que realmente es de los dueños: lo que queda si con los activos se pagaran todas las deudas. En pesos.", "What really belongs to the owners: what is left if all debts were paid with the assets. In pesos.") },
            ],
            steps: [
              t("Suma todos los activos del negocio.", "Add up all the business's assets."),
              t("Suma todos los pasivos (todas las deudas).", "Add up all the liabilities (all the debts)."),
              t("Despeja el dato que falta. Por ejemplo, Capital = Activo − Pasivo.", "Solve for the missing figure. For example, Equity = Assets − Liabilities."),
              t("Comprueba: Pasivo + Capital debe dar exactamente el total de activos.", "Check: Liabilities + Equity must equal total assets exactly."),
            ],
            example: t(
              "Una tiendita tiene $80,000 en activos (caja, mercancía y refrigerador) y debe $30,000 al proveedor. Capital = $80,000 − $30,000 = $50,000. Comprobación: $30,000 + $50,000 = $80,000.",
              "A corner store has $80,000 in assets (cash, goods and a fridge) and owes $30,000 to the supplier. Equity = $80,000 − $30,000 = $50,000. Check: $30,000 + $50,000 = $80,000.",
            ),
            interpret: t(
              "Si después de registrar una operación los dos lados no son iguales, hay un error de registro. Cambiar un activo por otro (comprar un congelador en efectivo) no mueve el total.",
              "If after recording a transaction both sides are not equal, there is a recording error. Swapping one asset for another (buying a freezer in cash) does not change the total.",
            ),
            mistake: t(
              "Pensar que todo el dinero en caja es \"del dueño\". Parte de lo que tiene el negocio está financiado con deudas.",
              "Thinking all the cash is \"the owner's\". Part of what the business has is financed with debt.",
            ),
          },
        ],
        bullets: [
          t("Cuentas, cargos y abonos.", "Accounts, debits and credits."),
          t("Registro de compras, ventas, cobros y pagos.", "Recording purchases, sales, collections and payments."),
          t("Balanza de comprobación y estados financieros sencillos.", "Trial balance and simple financial statements."),
        ],
      },
      {
        heading: t("Intermedia: valuar cada partida con detalle", "Intermediate: measure each item in detail"),
        body: [
          t(
            "En la capa **intermedia** ya no basta con anotar: hay que decidir **cuánto vale** cada cosa. A esto se le llama **valuación**: elegir con qué monto aparece una partida en los estados financieros.",
            "In the **intermediate** layer, recording is not enough: you must decide **how much each thing is worth**. This is called **measurement**: choosing the amount at which an item appears in the financial statements.",
          ),
          t(
            "Temas típicos: métodos de costeo de inventarios como **PEPS** (primeras entradas, primeras salidas) o **costo promedio**, la **depreciación** de máquinas y edificios, la **estimación de cuentas incobrables** (clientes que tal vez no paguen), las **provisiones** y los préstamos con intereses.",
            "Typical topics: inventory costing methods such as **FIFO** (first in, first out) or **average cost**, **depreciation** of machines and buildings, the **allowance for doubtful accounts** (customers who may not pay), **provisions** and loans with interest.",
          ),
          t(
            "Mini ejemplo con PEPS: una ferretería tiene 10 martillos de $100 y luego compra 10 de $120. Si vende 12, con PEPS salen primero los 10 de $100 y después 2 de $120: costo de ventas = $1,000 + $240 = $1,240.",
            "Mini FIFO example: a hardware store has 10 hammers at $100 and then buys 10 at $120. If it sells 12, under FIFO the 10 at $100 go out first and then 2 at $120: cost of sales = $1,000 + $240 = $1,240.",
          ),
        ],
        formulas: [
          {
            name: t("Costo de ventas e inventario final con PEPS", "Cost of sales and ending inventory under FIFO"),
            expression: "Costo de ventas (PEPS) = unidades del lote más antiguo × su costo + unidades del siguiente lote × su costo + …   ·   Inventario final = unidades que quedan × costo de su lote",
            variables: [
              { symbol: "Costo de ventas", meaning: t("Lo que te costó la mercancía que vendiste, en pesos.", "What the goods you sold cost you, in pesos.") },
              { symbol: "Lote", meaning: t("Cada compra que hiciste a un mismo precio (por ejemplo, 10 martillos a $100).", "Each purchase made at one price (for example, 10 hammers at $100).") },
              { symbol: "Unidades", meaning: t("Piezas de mercancía (cubetas, cascos, martillos).", "Pieces of merchandise (buckets, helmets, hammers).") },
              { symbol: "Costo", meaning: t("Lo que pagaste por cada pieza de ese lote, en pesos.", "What you paid for each piece of that lot, in pesos.") },
              { symbol: "Inventario final", meaning: t("El valor de la mercancía que sigue en bodega al terminar, en pesos.", "The value of the goods still in stock at the end, in pesos.") },
            ],
            steps: [
              t("Ordena los lotes del más antiguo al más nuevo.", "Order the lots from oldest to newest."),
              t("Saca primero todas las piezas del lote más antiguo y multiplica piezas × costo.", "Take out all pieces of the oldest lot first and multiply pieces × cost."),
              t("Si aún faltan piezas por vender, sácalas del siguiente lote y multiplica de nuevo.", "If pieces are still left to sell, take them from the next lot and multiply again."),
              t("Suma los resultados: ese es el costo de ventas.", "Add the results: that is the cost of sales."),
              t("Lo que queda en bodega se valúa con el costo de los lotes más nuevos: piezas que quedan × su costo.", "What remains in stock is valued at the cost of the newest lots: pieces left × their cost."),
            ],
            example: t(
              "Una papelería tiene 50 cuadernos a $20 y compra 100 a $24. Vende 90. Primero salen los 50 de $20: 50 × $20 = $1,000. Faltan 40, del lote de $24: 40 × $24 = $960. Costo de ventas: $1,000 + $960 = $1,960. Quedan 60 × $24 = $1,440. Comprobación: compras totales $1,000 + $2,400 = $3,400 = $1,960 + $1,440.",
              "A stationery shop has 50 notebooks at $20 and buys 100 at $24. It sells 90. The 50 at $20 go first: 50 × $20 = $1,000. 40 are still missing, from the $24 lot: 40 × $24 = $960. Cost of sales: $1,000 + $960 = $1,960. 60 × $24 = $1,440 remain. Check: total goods $1,000 + $2,400 = $3,400 = $1,960 + $1,440.",
            ),
            interpret: t(
              "Con precios que suben, PEPS da un costo de ventas más bajo y un inventario final más alto, porque lo vendido se costea con los precios viejos.",
              "When prices rise, FIFO gives a lower cost of sales and a higher ending inventory, because what is sold is costed at the old prices.",
            ),
            mistake: t(
              "Costear todas las piezas vendidas con el precio más reciente. En PEPS salen primero las más antiguas.",
              "Costing all pieces sold at the latest price. Under FIFO the oldest go out first.",
            ),
          },
        ],
        bullets: [
          t("Inventarios: PEPS y costo promedio.", "Inventories: FIFO and average cost."),
          t("Activo fijo y depreciación.", "Fixed assets and depreciation."),
          t("Cuentas por cobrar y su estimación de incobrables.", "Receivables and their allowance for doubtful accounts."),
          t("Pasivos con intereses y provisiones.", "Interest-bearing liabilities and provisions."),
        ],
      },
      {
        heading: t("Avanzada: casos complejos", "Advanced: complex cases"),
        body: [
          t(
            "La capa **avanzada** atiende situaciones que no caben en una sola empresa sencilla: **grupos de empresas** que se presentan como una sola (consolidación), **fusiones y adquisiciones**, operaciones en **moneda extranjera**, **instrumentos financieros** y **arrendamientos** de largo plazo.",
            "The **advanced** layer deals with situations that do not fit a single simple company: **groups of companies** presented as one (consolidation), **mergers and acquisitions**, **foreign currency** transactions, **financial instruments** and long-term **leases**.",
          ),
          t(
            "Un ejemplo frecuente en México es comprar a un proveedor de Estados Unidos en dólares. La deuda se registra en pesos con el **tipo de cambio** del día (cuántos pesos cuesta un dólar). Si al pagar el dólar está más caro, pagas más pesos: esa diferencia es una **pérdida cambiaria**; si está más barato, es una **utilidad cambiaria**.",
            "A common example in Mexico is buying from a US supplier in dollars. The debt is recorded in pesos at the day's **exchange rate** (how many pesos one dollar costs). If the dollar is more expensive when you pay, you pay more pesos: that difference is a **foreign exchange loss**; if it is cheaper, it is a **foreign exchange gain**.",
          ),
          t(
            "Mini ejemplo hipotético: debes USD 1,000 registrados a $18.00 ($18,000). Pagas cuando el dólar está en $18.50: entregas $18,500. Pérdida cambiaria: $500.",
            "Hypothetical mini example: you owe USD 1,000 recorded at $18.00 ($18,000). You pay when the dollar is at $18.50: you hand over $18,500. Foreign exchange loss: $500.",
          ),
        ],
        formulas: [
          {
            name: t("Diferencia cambiaria al pagar una deuda en dólares", "Exchange difference when paying a dollar debt"),
            expression: "Diferencia cambiaria = USD × (TC de pago − TC de registro)",
            variables: [
              { symbol: "USD", meaning: t("Los dólares que debes.", "The dollars you owe.") },
              { symbol: "TC de registro", meaning: t("Tipo de cambio (pesos por dólar) del día en que anotaste la deuda.", "Exchange rate (pesos per dollar) on the day you recorded the debt.") },
              { symbol: "TC de pago", meaning: t("Tipo de cambio del día en que pagas.", "Exchange rate on the day you pay.") },
              { symbol: "Diferencia cambiaria", meaning: t("Los pesos de más (o de menos) que pagas por el cambio en el precio del dólar.", "The extra (or fewer) pesos you pay because the dollar's price changed.") },
            ],
            steps: [
              t("Calcula la deuda en pesos al registrarla: USD × TC de registro.", "Compute the debt in pesos when recorded: USD × recording rate."),
              t("Calcula los pesos que realmente pagas: USD × TC de pago.", "Compute the pesos you actually pay: USD × payment rate."),
              t("Resta: pesos pagados − pesos registrados.", "Subtract: pesos paid − pesos recorded."),
              t("Si da positivo, pagaste más: es pérdida cambiaria. Si da negativo, pagaste menos: es utilidad cambiaria.", "If positive, you paid more: it is a foreign exchange loss. If negative, you paid less: it is a foreign exchange gain."),
            ],
            example: t(
              "Debes USD 3,000 registrados a $19.00 (dato hipotético): 3,000 × $19.00 = $57,000. Pagas con el dólar a $18.60: 3,000 × $18.60 = $55,800. Diferencia: $55,800 − $57,000 = −$1,200. Pagaste menos: **utilidad cambiaria de $1,200**.",
              "You owe USD 3,000 recorded at $19.00 (hypothetical): 3,000 × $19.00 = $57,000. You pay with the dollar at $18.60: 3,000 × $18.60 = $55,800. Difference: $55,800 − $57,000 = −$1,200. You paid less: **foreign exchange gain of $1,200**.",
            ),
            interpret: t(
              "Para quien debe dólares, un dólar más caro es pérdida y un dólar más barato es ganancia. Para quien tiene que cobrar dólares, es al revés.",
              "For someone who owes dollars, a more expensive dollar is a loss and a cheaper dollar is a gain. For someone who must collect dollars, it is the opposite.",
            ),
            mistake: t(
              "Responder solo la diferencia del tipo de cambio (por ejemplo, $0.40) sin multiplicarla por los dólares que debes.",
              "Answering only the exchange-rate difference (for example, $0.40) without multiplying it by the dollars owed.",
            ),
          },
        ],
      },
    ],
    examples: [
      {
        title: t("Costo de ventas con PEPS", "Cost of sales under FIFO"),
        problem: t(
          "Una tienda de bicicletas inicia con 100 cascos a $50 cada uno y compra 200 más a $56. En el mes vende 250 cascos. Con PEPS, ¿cuál es el costo de ventas y cuánto vale el inventario final?",
          "A bicycle shop starts with 100 helmets at $50 each and buys 200 more at $56. During the month it sells 250 helmets. Under FIFO, what is the cost of sales and what is ending inventory worth?",
        ),
        steps: [
          t("Salen primero los más antiguos: 100 × $50 = $5,000.", "The oldest go out first: 100 × $50 = $5,000."),
          t("Faltan 150 cascos, que salen de la compra: 150 × $56 = $8,400.", "150 helmets remain to be costed, from the purchase: 150 × $56 = $8,400."),
          t("Costo de ventas: $5,000 + $8,400 = $13,400.", "Cost of sales: $5,000 + $8,400 = $13,400."),
          t("Quedan 50 cascos de la compra: 50 × $56 = $2,800. Comprobación: $5,000 + $11,200 − $13,400 = $2,800.", "50 helmets remain from the purchase: 50 × $56 = $2,800. Check: $5,000 + $11,200 − $13,400 = $2,800."),
        ],
        result: t("Costo de ventas $13,400 e inventario final $2,800.", "Cost of sales $13,400 and ending inventory $2,800."),
      },
      {
        title: t("Pérdida cambiaria al pagar a un proveedor extranjero", "Foreign exchange loss when paying a foreign supplier"),
        problem: t(
          "Un taller compra refacciones a crédito por USD 2,000 cuando el tipo de cambio es $18.00 (dato hipotético). Paga un mes después con el tipo de cambio en $18.30. ¿Cuál es la diferencia cambiaria?",
          "A repair shop buys parts on credit for USD 2,000 when the exchange rate is $18.00 (hypothetical). It pays a month later with the rate at $18.30. What is the exchange difference?",
        ),
        steps: [
          t("Deuda registrada: 2,000 × $18.00 = $36,000.", "Recorded debt: 2,000 × $18.00 = $36,000."),
          t("Pesos que se pagan: 2,000 × $18.30 = $36,600.", "Pesos paid: 2,000 × $18.30 = $36,600."),
          t("Diferencia: $36,600 − $36,000 = $600 de más.", "Difference: $36,600 − $36,000 = $600 more."),
        ],
        result: t("Pérdida cambiaria de $600, porque el dólar se encareció entre el registro y el pago.", "Foreign exchange loss of $600, because the dollar became more expensive between recording and payment."),
      },
    ],
    keyPoints: [
      t("La contabilidad financiera se estudia en tres capas: básica, intermedia y avanzada.", "Financial accounting is studied in three layers: basic, intermediate and advanced."),
      t("Básica: lenguaje contable, registro y estados sencillos.", "Basic: accounting language, recording and simple statements."),
      t("Intermedia: valuación detallada de inventarios, activo fijo, cuentas por cobrar y pasivos.", "Intermediate: detailed measurement of inventories, fixed assets, receivables and liabilities."),
      t("Avanzada: consolidación, adquisiciones, moneda extranjera, instrumentos financieros y arrendamientos.", "Advanced: consolidation, acquisitions, foreign currency, financial instruments and leases."),
      t("Cada capa usa todo lo de la anterior: no se salta ninguna.", "Each layer uses everything from the previous one: none is skipped."),
    ],
    normativeNote: NOTE_NIF,
    exerciseIds: ['CON-04-E1', 'CON-04-E2', 'CON-04-E3', 'CON-04-E4', 'CON-04-E5', 'CON-04-E6'],
  },

  // ───────────────────────────── CON-05 ─────────────────────────────
  {
    id: 'CON-05',
    level: 2,
    topicIds: ['CON.5'],
    title: t("Normas de Información Financiera mexicanas (NIF)", "Mexican Financial Reporting Standards (NIF)"),
    summary: t(
      "Las NIF son las reglas que emite el CINIF para que todas las empresas en México preparen sus estados financieros de la misma forma, a partir de un marco conceptual con postulados básicos.",
      "The NIF are the rules issued by CINIF so that all companies in Mexico prepare their financial statements in the same way, based on a conceptual framework with basic postulates.",
    ),
    minutes: 16,
    objectives: [
      t("Explicar qué son las NIF, quién las emite y cómo se organizan en series.", "Explain what the NIF are, who issues them and how they are organized in series."),
      t("Identificar los postulados básicos del marco conceptual en situaciones cotidianas.", "Identify the basic postulates of the conceptual framework in everyday situations."),
      t("Aplicar la devengación contable para reconocer ingresos cobrados por adelantado.", "Apply accrual accounting to recognize revenue collected in advance."),
    ],
    theory: [
      {
        heading: t("Qué son las NIF y quién las emite", "What the NIF are and who issues them"),
        body: [
          t(
            "Imagina que cada empresa midiera sus ganancias a su manera. Sería imposible comparar dos negocios. Por eso existen las **Normas de Información Financiera (NIF)**: un reglamento común para preparar y presentar estados financieros en México.",
            "Imagine every company measured its profit its own way. Comparing two businesses would be impossible. That is why the **Mexican Financial Reporting Standards (NIF)** exist: a common rulebook for preparing and presenting financial statements in Mexico.",
          ),
          t(
            "Las emite el **CINIF** (Consejo Mexicano de Normas de Información Financiera), un organismo **independiente y privado**, no el gobierno ni el SAT. Antes de él, las reglas las emitía el Instituto Mexicano de Contadores Públicos (los antiguos \"Principios de Contabilidad Generalmente Aceptados\").",
            "They are issued by **CINIF** (Mexican Financial Reporting Standards Board), an **independent private** body, not the government or the SAT. Before it, the rules were issued by the Mexican Institute of Public Accountants (the former \"Generally Accepted Accounting Principles\").",
          ),
          t(
            "Las NIF buscan **converger** con las normas internacionales (NIIF), aunque conservan diferencias. Si una NIF no resuelve un caso, se aplica la **supletoriedad**: usar otra norma reconocida, primero las NIIF.",
            "The NIF seek to **converge** with international standards (IFRS), although differences remain. If no NIF covers a case, **supplementary application** is used: apply another recognized standard, IFRS first.",
          ),
          t(
            "Mini ejemplo: una cadena de farmacias en Puebla y otra en Monterrey usan las mismas NIF. Así, un banco puede comparar sus utilidades con la misma regla.",
            "Mini example: a pharmacy chain in Puebla and another in Monterrey use the same NIF. So a bank can compare their profits under the same rule.",
          ),
        ],
      },
      {
        heading: t("Cómo se organizan: las series", "How they are organized: the series"),
        body: [
          t(
            "Las NIF se agrupan en **series** identificadas con letras. Piensa en ellas como los capítulos de un manual: primero las ideas generales y luego los temas específicos.",
            "The NIF are grouped into **series** identified by letters. Think of them as the chapters of a manual: general ideas first, then specific topics.",
          ),
          t(
            "Además de las normas, el CINIF publica **interpretaciones** (INIF) para aclarar dudas y **orientaciones** (ONIF) para temas nuevos. Cada norma lleva letra y número, por ejemplo la norma de inventarios está en la serie C.",
            "Besides the standards, CINIF publishes **interpretations** (INIF) to clarify doubts and **guidance** (ONIF) for new topics. Each standard has a letter and number; for example, the inventories standard is in series C.",
          ),
          t(
            "Mini ejemplo: si tu duda es cómo presentar el estado de flujos de efectivo, buscas en la serie B; si es cómo valuar tus inventarios, en la serie C.",
            "Mini example: if your question is how to present the cash flow statement, you look in series B; if it is how to measure your inventories, in series C.",
          ),
        ],
        bullets: [
          t("Serie A: marco conceptual (las ideas base de todo).", "Series A: conceptual framework (the base ideas of everything)."),
          t("Serie B: normas sobre los estados financieros en conjunto (resultados, flujos, cambios en el capital).", "Series B: standards on the financial statements as a whole (results, cash flows, changes in equity)."),
          t("Serie C: normas de partidas específicas (efectivo, inventarios, propiedades, pasivos).", "Series C: standards on specific items (cash, inventories, property, liabilities)."),
          t("Serie D: problemas para determinar resultados (ingresos, beneficios a empleados, impuestos a la utilidad).", "Series D: issues in determining results (revenue, employee benefits, income taxes)."),
          t("Serie E: actividades especializadas (por ejemplo, agricultura o entidades sin fines de lucro).", "Series E: specialized activities (for example, agriculture or non-profit entities)."),
        ],
      },
      {
        heading: t("Marco conceptual y postulados básicos", "Conceptual framework and basic postulates"),
        body: [
          t(
            "El **marco conceptual** (serie A) es la base de todas las NIF. Incluye los **postulados básicos**: ideas fundamentales que se dan por ciertas al registrar. También define las **características** que debe tener la información: ser **confiable, relevante, comprensible y comparable**.",
            "The **conceptual framework** (series A) is the foundation of all the NIF. It includes the **basic postulates**: fundamental ideas taken as true when recording. It also defines the **characteristics** information must have: being **reliable, relevant, understandable and comparable**.",
          ),
          t(
            "Tres postulados muy usados: **entidad económica** (el negocio es distinto de su dueño), **negocio en marcha** (se supone que seguirá operando) y **devengación contable** (los ingresos y gastos se registran cuando ocurren, no cuando se cobra o paga). Otros son sustancia económica, asociación de costos y gastos con ingresos, valuación, dualidad económica y consistencia.",
            "Three widely used postulates: **economic entity** (the business is separate from its owner), **going concern** (it is assumed it will keep operating) and **accrual accounting** (revenue and expenses are recorded when they occur, not when cash is collected or paid). Others are economic substance, matching of costs and expenses with revenue, measurement, economic duality and consistency.",
          ),
          t(
            "Mini ejemplo de devengación: un gimnasio cobra en noviembre $6,000 por seis meses. En diciembre solo ha \"ganado\" dos meses, $2,000. Los otros $4,000 siguen siendo un **pasivo**: le debe el servicio al cliente.",
            "Accrual mini example: a gym collects $6,000 in November for six months. By December it has only \"earned\" two months, $2,000. The other $4,000 is still a **liability**: it owes the service to the customer.",
          ),
        ],
        formulas: [
          {
            name: t("Ingreso ya ganado de un cobro por adelantado", "Revenue already earned from an advance collection"),
            expression: "Ingreso devengado = Cobro anticipado × (meses transcurridos ÷ meses totales)",
            variables: [
              { symbol: "Ingreso devengado", meaning: t("La parte del cobro que ya ganaste porque ya diste el servicio, en pesos.", "The part of the collection you have already earned because you already provided the service, in pesos.") },
              { symbol: "Cobro anticipado", meaning: t("Lo que el cliente te pagó por adelantado, en pesos.", "What the customer paid you in advance, in pesos.") },
              { symbol: "meses transcurridos", meaning: t("Los meses de servicio que ya prestaste hasta la fecha de corte (contando el mes en que empezó).", "The months of service already provided up to the cut-off date (counting the starting month).") },
              { symbol: "meses totales", meaning: t("Todos los meses que cubre el pago.", "All the months the payment covers.") },
            ],
            steps: [
              t("Divide el cobro entre los meses totales: eso ganas cada mes.", "Divide the collection by the total months: that is what you earn each month."),
              t("Cuenta los meses ya prestados hasta la fecha de corte, incluyendo el mes de inicio.", "Count the months already provided up to the cut-off date, including the starting month."),
              t("Multiplica el ingreso mensual por esos meses: es el ingreso devengado.", "Multiply the monthly revenue by those months: that is the earned revenue."),
              t("Lo que sobra (cobro − ingreso devengado) sigue siendo un pasivo: anticipo de clientes.", "The rest (collection − earned revenue) is still a liability: customer advances."),
            ],
            example: t(
              "Una escuela de idiomas cobra el 1 de agosto $18,000 por 12 meses. Por mes: $18,000 ÷ 12 = $1,500. Al 31 de diciembre van 5 meses (agosto a diciembre): 5 × $1,500 = **$7,500 de ingreso**. Pasivo: $18,000 − $7,500 = $10,500.",
              "A language school collects $18,000 on August 1 for 12 months. Per month: $18,000 ÷ 12 = $1,500. By December 31, 5 months have passed (August to December): 5 × $1,500 = **$7,500 of revenue**. Liability: $18,000 − $7,500 = $10,500.",
            ),
            mistake: t(
              "Reconocer todo el cobro como ingreso solo porque el dinero ya entró. Cobrar no es lo mismo que ganar.",
              "Recognizing the whole collection as revenue just because the money came in. Collecting is not the same as earning.",
            ),
          },
        ],
      },
    ],
    examples: [
      {
        title: t("Ingreso devengado de una membresía", "Earned revenue from a membership"),
        problem: t(
          "Un gimnasio cobra el 1 de noviembre $6,000 por una membresía de noviembre a abril. ¿Cuánto ingreso reconoce al 31 de diciembre y cuánto queda como pasivo?",
          "A gym collects $6,000 on November 1 for a membership from November to April. How much revenue does it recognize at December 31 and how much remains a liability?",
        ),
        steps: [
          t("Ingreso por mes: $6,000 ÷ 6 = $1,000.", "Revenue per month: $6,000 ÷ 6 = $1,000."),
          t("Meses ya prestados al 31 de diciembre: noviembre y diciembre = 2.", "Months already provided by December 31: November and December = 2."),
          t("Ingreso devengado: 2 × $1,000 = $2,000.", "Earned revenue: 2 × $1,000 = $2,000."),
          t("Pasivo (anticipo de clientes): $6,000 − $2,000 = $4,000.", "Liability (customer advances): $6,000 − $2,000 = $4,000."),
        ],
        result: t("Ingreso de $2,000 y pasivo de $4,000. El cobro no es igual al ingreso: eso es la devengación contable.", "Revenue of $2,000 and a liability of $4,000. Collection is not the same as revenue: that is accrual accounting."),
      },
      {
        title: t("¿Qué postulado se aplica?", "Which postulate applies?"),
        problem: t(
          "La dueña de una estética paga con la tarjeta del negocio $3,000 de la colegiatura de su hijo. ¿Es gasto del negocio? ¿Qué postulado lo resuelve?",
          "The owner of a beauty salon pays $3,000 of her son's school tuition with the business card. Is it a business expense? Which postulate settles it?",
        ),
        steps: [
          t("La colegiatura es un gasto personal de la dueña, no del negocio.", "The tuition is a personal expense of the owner, not of the business."),
          t("El postulado de entidad económica separa al negocio de su dueña.", "The economic entity postulate separates the business from its owner."),
          t("Se registra como un retiro o cuenta por cobrar a la dueña, no como gasto de operación.", "It is recorded as a withdrawal or a receivable from the owner, not as an operating expense."),
        ],
        result: t("No es gasto del negocio. Aplica el postulado de entidad económica.", "It is not a business expense. The economic entity postulate applies."),
      },
    ],
    keyPoints: [
      t("Las NIF son las reglas comunes para preparar estados financieros en México.", "The NIF are the common rules for preparing financial statements in Mexico."),
      t("Las emite el CINIF, organismo independiente; no las emite el SAT.", "They are issued by CINIF, an independent body; the SAT does not issue them."),
      t("Se organizan en series: A marco conceptual, B estados en conjunto, C partidas específicas, D determinación de resultados, E actividades especializadas.", "They are organized in series: A conceptual framework, B statements as a whole, C specific items, D determination of results, E specialized activities."),
      t("Postulados clave: entidad económica, negocio en marcha y devengación contable.", "Key postulates: economic entity, going concern and accrual accounting."),
      t("Si una NIF no cubre un caso, se aplican normas supletorias, empezando por las NIIF.", "If no NIF covers a case, supplementary standards apply, starting with IFRS."),
    ],
    normativeNote: NOTE_NIF,
    exerciseIds: ['CON-05-E1', 'CON-05-E2', 'CON-05-E3', 'CON-05-E4', 'CON-05-E5', 'CON-05-E6'],
  },

  // ───────────────────────────── CON-06 ─────────────────────────────
  {
    id: 'CON-06',
    level: 2,
    topicIds: ['CON.6'],
    title: t("Normas Internacionales de Información Financiera (NIIF/IFRS)", "International Financial Reporting Standards (IFRS)"),
    summary: t(
      "Las NIIF son normas contables que emite el IASB para que empresas de muchos países presenten estados financieros comparables; en México las usan sobre todo las empresas que cotizan en bolsa.",
      "IFRS are accounting standards issued by the IASB so that companies in many countries present comparable financial statements; in Mexico they are used mainly by listed companies.",
    ),
    minutes: 16,
    objectives: [
      t("Explicar qué son las NIIF, quién las emite y quién las usa en México.", "Explain what IFRS are, who issues them and who uses them in Mexico."),
      t("Relacionar normas clave (NIIF 15, NIIF 16, NIC 2) con el tema que regulan.", "Match key standards (IFRS 15, IFRS 16, IAS 2) with the topic they regulate."),
      t("Aplicar la asignación del precio de NIIF 15 y la regla de costo o valor neto de realización de NIC 2.", "Apply IFRS 15 price allocation and the IAS 2 lower of cost and net realizable value rule."),
    ],
    theory: [
      {
        heading: t("Un idioma contable para todo el mundo", "One accounting language for the whole world"),
        body: [
          t(
            "Si una empresa mexicana quiere dinero de inversionistas en Europa, ellos deben entender sus números. Las **NIIF** (en inglés **IFRS**) son un conjunto de normas contables pensado para que los estados financieros se lean igual en muchos países.",
            "If a Mexican company wants money from investors in Europe, they must understand its numbers. **IFRS** (in Spanish **NIIF**) are a set of accounting standards designed so financial statements read the same in many countries.",
          ),
          t(
            "Las emite el **IASB** (Consejo de Normas Internacionales de Contabilidad), que forma parte de la **Fundación IFRS**. Las normas más antiguas se llaman **NIC** (IAS) y siguen vigentes si no se han sustituido; las nuevas se llaman **NIIF**. Las dudas se resuelven con **interpretaciones** de su comité.",
            "They are issued by the **IASB** (International Accounting Standards Board), part of the **IFRS Foundation**. The oldest standards are called **IAS** (NIC) and remain in force unless replaced; the newer ones are called **IFRS**. Questions are settled through **interpretations** from its committee.",
          ),
          t(
            "En México, la **CNBV** (Comisión Nacional Bancaria y de Valores) pide, en general, que las empresas que cotizan en la Bolsa presenten sus estados con NIIF. Las empresas privadas pequeñas y medianas suelen usar las **NIF** mexicanas.",
            "In Mexico, the **CNBV** (National Banking and Securities Commission) generally requires companies listed on the stock exchange to present their statements under IFRS. Small and medium private companies usually use the Mexican **NIF**.",
          ),
          t(
            "Mini ejemplo: una cadena de autoservicio que cotiza en bolsa publica sus reportes con NIIF; la panadería de tu colonia, si lleva contabilidad formal, normalmente usa NIF.",
            "Mini example: a listed supermarket chain publishes its reports under IFRS; your neighborhood bakery, if it keeps formal accounts, normally uses NIF.",
          ),
        ],
      },
      {
        heading: t("Normas clave y su enfoque", "Key standards and their approach"),
        body: [
          t(
            "Las NIIF se basan en **principios**, no en recetas detalladas: piden entender la **sustancia** de la operación y usar juicio profesional. Por eso las notas a los estados financieros explican mucho cómo se decidió cada cifra.",
            "IFRS are **principles-based**, not detailed recipes: they ask you to understand the **substance** of the transaction and use professional judgment. That is why the notes to the financial statements explain a lot about how each figure was decided.",
          ),
          t(
            "Algunas normas que verás seguido: la **NIIF 15** (ingresos de contratos con clientes), la **NIIF 16** (arrendamientos: casi toda renta de largo plazo se reconoce como activo y pasivo), la **NIIF 9** (instrumentos financieros), la **NIC 2** (inventarios) y la **NIC 16** (propiedades, planta y equipo).",
            "Some standards you will see often: **IFRS 15** (revenue from contracts with customers), **IFRS 16** (leases: almost every long-term rental is recognized as an asset and a liability), **IFRS 9** (financial instruments), **IAS 2** (inventories) and **IAS 16** (property, plant and equipment).",
          ),
          t(
            "Mini ejemplo de NIC 2: el inventario se presenta al **menor** entre su costo y su **valor neto de realización** (lo que esperas cobrar al venderlo, menos lo que te cuesta venderlo). Además, NIC 2 no permite el método UEPS (últimas entradas, primeras salidas).",
            "IAS 2 mini example: inventory is presented at the **lower** of its cost and its **net realizable value** (what you expect to get when selling it, minus what it costs you to sell it). Also, IAS 2 does not allow the LIFO method (last in, first out).",
          ),
        ],
        formulas: [
          {
            name: t("Valor neto de realización y baja de valor del inventario (NIC 2)", "Net realizable value and inventory write-down (IAS 2)"),
            expression: "VNR = Precio estimado de venta − Costos para vender   ·   Baja de valor = Costo − VNR (solo si el VNR es menor que el costo)",
            variables: [
              { symbol: "VNR", meaning: t("Valor neto de realización: lo que de verdad te quedará al vender la mercancía, en pesos.", "Net realizable value: what you will really keep when selling the goods, in pesos.") },
              { symbol: "Precio estimado de venta", meaning: t("En cuánto esperas vender la mercancía hoy, en pesos.", "How much you expect to sell the goods for today, in pesos.") },
              { symbol: "Costos para vender", meaning: t("Lo que gastarás para lograr la venta: comisiones, envío, empaque. En pesos.", "What you will spend to make the sale: commissions, shipping, packaging. In pesos.") },
              { symbol: "Costo", meaning: t("Lo que te costó la mercancía, en pesos.", "What the goods cost you, in pesos.") },
              { symbol: "Baja de valor", meaning: t("Lo que se pierde de valor y se reconoce como gasto, en pesos.", "The value lost, recognized as an expense, in pesos.") },
            ],
            steps: [
              t("Calcula el VNR: precio estimado de venta − costos para vender.", "Compute NRV: estimated selling price − costs to sell."),
              t("Compara el VNR con el costo y elige el menor: ese es el valor del inventario.", "Compare NRV with cost and choose the lower: that is the inventory value."),
              t("Si el VNR es menor, la baja de valor es Costo − VNR y se registra como gasto. Si el costo es menor, no hay baja.", "If NRV is lower, the write-down is Cost − NRV and is recorded as an expense. If cost is lower, there is no write-down."),
            ],
            example: t(
              "Unos tenis pasados de moda costaron $80,000. Se espera venderlos en $75,000 pagando $4,000 de comisiones. VNR: $75,000 − $4,000 = $71,000. El menor entre $80,000 y $71,000 es $71,000. Baja de valor: $80,000 − $71,000 = **$9,000**.",
              "Out-of-fashion sneakers cost $80,000. They are expected to sell for $75,000, paying $4,000 in commissions. NRV: $75,000 − $4,000 = $71,000. The lower of $80,000 and $71,000 is $71,000. Write-down: $80,000 − $71,000 = **$9,000**.",
            ),
            interpret: t(
              "Si el VNR es mayor que el costo, el inventario se queda a su costo: no se sube su valor por esperar ganar más.",
              "If NRV is higher than cost, inventory stays at cost: its value is not raised because you expect to earn more.",
            ),
            mistake: t(
              "Olvidar restar los costos para vender y comparar el costo directo contra el precio de venta.",
              "Forgetting to subtract the costs to sell and comparing cost directly with the selling price.",
            ),
          },
        ],
        bullets: [
          t("NIIF 15: ingresos de contratos con clientes.", "IFRS 15: revenue from contracts with customers."),
          t("NIIF 16: arrendamientos.", "IFRS 16: leases."),
          t("NIIF 9: instrumentos financieros.", "IFRS 9: financial instruments."),
          t("NIC 2: inventarios.", "IAS 2: inventories."),
          t("NIC 16: propiedades, planta y equipo.", "IAS 16: property, plant and equipment."),
        ],
      },
      {
        heading: t("NIIF 15: el modelo de cinco pasos", "IFRS 15: the five-step model"),
        body: [
          t(
            "La NIIF 15 responde **cuándo y por cuánto** reconocer un ingreso. Lo hace con cinco pasos que sirven igual para una tienda que para una constructora.",
            "IFRS 15 answers **when and for how much** to recognize revenue. It does so with five steps that work the same for a store as for a construction company.",
          ),
          t(
            "Una **obligación de desempeño** es cada promesa distinta que haces al cliente: entregar un celular es una; darle servicio de datos por un año es otra. Si vendes un paquete, el precio total se **reparte** entre las promesas según su **precio de venta independiente** (lo que cobrarías por cada una por separado).",
            "A **performance obligation** is each distinct promise you make to the customer: delivering a phone is one; providing a year of data service is another. If you sell a bundle, the total price is **allocated** among the promises based on their **standalone selling price** (what you would charge for each separately).",
          ),
          t(
            "Mini ejemplo: un paquete de $1,000 incluye dos promesas que por separado valen $600 y $600. Cada una recibe la mitad: $500 y $500.",
            "Mini example: a $1,000 bundle includes two promises that separately are worth $600 and $600. Each gets half: $500 and $500.",
          ),
        ],
        formulas: [
          {
            name: t("Repartir el precio de un paquete entre sus promesas (NIIF 15)", "Allocating a bundle's price among its promises (IFRS 15)"),
            expression: "Ingreso de una promesa = Precio del paquete × (Precio independiente de esa promesa ÷ Suma de precios independientes)",
            variables: [
              { symbol: "Precio del paquete", meaning: t("Lo que el cliente paga por todo junto, en pesos.", "What the customer pays for everything together, in pesos.") },
              { symbol: "Precio independiente", meaning: t("Lo que cobrarías por esa promesa si la vendieras sola, en pesos.", "What you would charge for that promise if you sold it alone, in pesos.") },
              { symbol: "Suma de precios independientes", meaning: t("Lo que costaría todo si se comprara por separado, en pesos.", "What everything would cost if bought separately, in pesos.") },
            ],
            steps: [
              t("Suma los precios independientes de todas las promesas.", "Add the standalone prices of all the promises."),
              t("Para cada promesa, divide su precio independiente entre esa suma: es su proporción.", "For each promise, divide its standalone price by that sum: that is its share."),
              t("Multiplica el precio del paquete por esa proporción.", "Multiply the bundle price by that share."),
              t("Comprueba que lo asignado sume exactamente el precio del paquete.", "Check that the amounts allocated add up exactly to the bundle price."),
            ],
            example: t(
              "Un paquete de consola + videojuego cuesta $5,400. Por separado: consola $4,800 y juego $1,200; suma $6,000. Consola: $5,400 × 4,800 ÷ 6,000 = $4,320. Juego: $5,400 × 1,200 ÷ 6,000 = $1,080. Comprobación: $4,320 + $1,080 = $5,400.",
              "A console + video game bundle costs $5,400. Separately: console $4,800 and game $1,200; total $6,000. Console: $5,400 × 4,800 ÷ 6,000 = $4,320. Game: $5,400 × 1,200 ÷ 6,000 = $1,080. Check: $4,320 + $1,080 = $5,400.",
            ),
            interpret: t(
              "El descuento del paquete se reparte entre todas las promesas en proporción a su valor, no se le carga a una sola.",
              "The bundle discount is spread across all promises in proportion to their value, not charged to just one.",
            ),
            mistake: t(
              "Dejar una promesa a su precio completo y darle a la otra solo lo que sobra.",
              "Keeping one promise at its full price and giving the other only what is left.",
            ),
          },
        ],
        bullets: [
          t("1. Identificar el contrato con el cliente.", "1. Identify the contract with the customer."),
          t("2. Identificar las obligaciones de desempeño.", "2. Identify the performance obligations."),
          t("3. Determinar el precio de la transacción.", "3. Determine the transaction price."),
          t("4. Asignar el precio a cada obligación.", "4. Allocate the price to each obligation."),
          t("5. Reconocer el ingreso cuando se cumple cada obligación.", "5. Recognize revenue when each obligation is satisfied."),
        ],
      },
    ],
    examples: [
      {
        title: t("Asignar el precio de un paquete celular + plan", "Allocating the price of a phone + plan bundle"),
        problem: t(
          "Una telefónica vende por $12,000 un paquete con un celular y un año de servicio. Por separado cobraría $9,000 por el celular y $6,000 por el servicio. ¿Cuánto ingreso corresponde a cada promesa?",
          "A phone company sells for $12,000 a bundle with a phone and one year of service. Separately it would charge $9,000 for the phone and $6,000 for the service. How much revenue belongs to each promise?",
        ),
        steps: [
          t("Suma de precios independientes: $9,000 + $6,000 = $15,000.", "Sum of standalone prices: $9,000 + $6,000 = $15,000."),
          t("Celular: $12,000 × 9,000/15,000 = $7,200.", "Phone: $12,000 × 9,000/15,000 = $7,200."),
          t("Servicio: $12,000 × 6,000/15,000 = $4,800.", "Service: $12,000 × 6,000/15,000 = $4,800."),
          t("Los $7,200 se reconocen al entregar el celular; los $4,800 se reparten a lo largo del año.", "The $7,200 is recognized on delivering the phone; the $4,800 is spread over the year."),
        ],
        result: t("Celular $7,200 y servicio $4,800 (suman $12,000).", "Phone $7,200 and service $4,800 (total $12,000)."),
      },
      {
        title: t("Inventario al menor de costo o valor neto de realización", "Inventory at the lower of cost and net realizable value"),
        problem: t(
          "Una tienda tiene ropa de temporada con costo de $50,000. Ya pasó la moda: espera venderla en $48,000 y gastar $3,000 en comisiones para venderla. ¿Con qué valor la presenta según NIC 2?",
          "A store has seasonal clothing with a cost of $50,000. The trend has passed: it expects to sell it for $48,000 and spend $3,000 in commissions to sell it. At what value does it present it under IAS 2?",
        ),
        steps: [
          t("Valor neto de realización: $48,000 − $3,000 = $45,000.", "Net realizable value: $48,000 − $3,000 = $45,000."),
          t("Comparar: costo $50,000 contra VNR $45,000; el menor es $45,000.", "Compare: cost $50,000 vs NRV $45,000; the lower is $45,000."),
          t("Baja de valor: $50,000 − $45,000 = $5,000, que se reconoce como gasto.", "Write-down: $50,000 − $45,000 = $5,000, recognized as an expense."),
        ],
        result: t("Se presenta en $45,000, con una baja de valor de $5,000.", "It is presented at $45,000, with a $5,000 write-down."),
      },
    ],
    keyPoints: [
      t("Las NIIF (IFRS) las emite el IASB; las normas antiguas se llaman NIC (IAS).", "IFRS are issued by the IASB; the older standards are called IAS."),
      t("En México las usan principalmente las empresas que cotizan en bolsa, por disposición de la CNBV.", "In Mexico they are used mainly by listed companies, as required by the CNBV."),
      t("Se basan en principios y en juicio profesional, explicados en las notas.", "They are principles-based and rely on professional judgment, explained in the notes."),
      t("NIIF 15 reconoce ingresos con cinco pasos y reparte paquetes por precio de venta independiente.", "IFRS 15 recognizes revenue in five steps and allocates bundles by standalone selling price."),
      t("NIC 2: inventario al menor entre costo y valor neto de realización; sin UEPS.", "IAS 2: inventory at the lower of cost and net realizable value; no LIFO."),
    ],
    normativeNote: NOTE_IFRS,
    exerciseIds: ['CON-06-E1', 'CON-06-E2', 'CON-06-E3', 'CON-06-E4', 'CON-06-E5', 'CON-06-E6'],
  },

  // ───────────────────────────── CON-07 ─────────────────────────────
  {
    id: 'CON-07',
    level: 2,
    topicIds: ['CON.7'],
    title: t("Elaboración y presentación de estados financieros", "Preparing and presenting financial statements"),
    summary: t(
      "Los estados financieros básicos —situación financiera, resultado integral, cambios en el capital contable y flujos de efectivo, junto con sus notas— se arman a partir de los saldos contables y se presentan con un orden que facilita leerlos.",
      "The basic financial statements —financial position, comprehensive income, changes in equity and cash flows, together with their notes— are built from account balances and presented in an order that makes them easy to read.",
    ),
    minutes: 18,
    objectives: [
      t("Identificar los cuatro estados financieros básicos, qué muestra cada uno y el papel de las notas.", "Identify the four basic financial statements, what each shows and the role of the notes."),
      t("Elaborar un estado de resultados por niveles de utilidad a partir de saldos.", "Prepare an income statement by profit levels from balances."),
      t("Calcular el flujo de efectivo de operación con el método indirecto.", "Compute operating cash flow with the indirect method."),
    ],
    theory: [
      {
        heading: t("El juego completo de estados financieros", "The complete set of financial statements"),
        body: [
          t(
            "Un **estado financiero** es un reporte que resume una parte de la vida del negocio. Igual que un chequeo médico tiene varios estudios (presión, sangre, peso), la empresa tiene varios estados que juntos dan el diagnóstico completo.",
            "A **financial statement** is a report that summarizes one part of the business's life. Just as a medical check-up has several tests (blood pressure, blood, weight), a company has several statements that together give the full diagnosis.",
          ),
          t(
            "El **estado de situación financiera** (balance general) es una **foto en una fecha**: lo que se tiene, lo que se debe y el capital. Los otros tres cubren un **periodo**, como una película: el **estado de resultado integral** (ingresos, gastos y utilidad), el **estado de cambios en el capital contable** (cómo cambió el capital de los dueños) y el **estado de flujos de efectivo** (de dónde vino y a dónde fue el dinero).",
            "The **statement of financial position** (balance sheet) is a **snapshot at a date**: what is owned, what is owed and equity. The other three cover a **period**, like a movie: the **statement of comprehensive income** (revenue, expenses and profit), the **statement of changes in equity** (how the owners' equity changed) and the **cash flow statement** (where money came from and where it went).",
          ),
          t(
            "Las **notas** forman parte de los estados financieros: explican políticas contables, detalles y riesgos. Sin ellas, los números quedan incompletos.",
            "The **notes** are part of the financial statements: they explain accounting policies, details and risks. Without them, the numbers are incomplete.",
          ),
          t(
            "Mini ejemplo: \"al 31 de diciembre\" va en el balance; \"del 1 de enero al 31 de diciembre\" va en el estado de resultados.",
            "Mini example: \"as of December 31\" goes on the balance sheet; \"from January 1 to December 31\" goes on the income statement.",
          ),
        ],
        bullets: [
          t("Situación financiera: en una fecha.", "Financial position: at a date."),
          t("Resultado integral: por un periodo.", "Comprehensive income: for a period."),
          t("Cambios en el capital contable: por un periodo.", "Changes in equity: for a period."),
          t("Flujos de efectivo: por un periodo.", "Cash flows: for a period."),
          t("Notas: parte integral de todos.", "Notes: an integral part of all of them."),
        ],
      },
      {
        heading: t("De los saldos al estado de resultados", "From balances to the income statement"),
        body: [
          t(
            "Para elaborar los estados se parte de la **balanza de comprobación** ya ajustada: la lista de todas las cuentas con su saldo final. Cada cuenta se lleva a su estado: activos, pasivos y capital al balance; ingresos y gastos al estado de resultados.",
            "Statements are prepared from the adjusted **trial balance**: the list of all accounts with their final balance. Each account goes to its statement: assets, liabilities and equity to the balance sheet; revenue and expenses to the income statement.",
          ),
          t(
            "El estado de resultados se presenta por **niveles de utilidad**, para ver dónde se gana o se pierde. Restar paso a paso permite saber si el problema está en el costo del producto, en los gastos o en la deuda.",
            "The income statement is presented by **profit levels**, to see where money is made or lost. Subtracting step by step tells you whether the problem is in product cost, expenses or debt.",
          ),
          t(
            "Mini ejemplo: una tortillería vende $100,000, su costo de ventas es $60,000 y sus gastos de operación $25,000. Utilidad bruta $40,000; utilidad de operación $15,000.",
            "Mini example: a tortilla shop sells $100,000, its cost of sales is $60,000 and its operating expenses $25,000. Gross profit $40,000; operating profit $15,000.",
          ),
        ],
        formulas: [
          {
            name: t("Niveles de utilidad del estado de resultados", "Profit levels of the income statement"),
            expression: "Ventas netas = Ventas − Devoluciones · Utilidad bruta = Ventas netas − Costo de ventas · Utilidad de operación = Utilidad bruta − Gastos de operación · Utilidad antes de impuestos = Utilidad de operación − Gastos financieros · Utilidad neta = Utilidad antes de impuestos − Impuestos",
            variables: [
              { symbol: "Ventas", meaning: t("Todo lo que se facturó a clientes en el periodo, en pesos.", "Everything invoiced to customers in the period, in pesos.") },
              { symbol: "Devoluciones", meaning: t("Ventas que los clientes regresaron; se restan porque al final no fueron venta.", "Sales customers returned; they are subtracted because in the end they were not sales.") },
              { symbol: "Costo de ventas", meaning: t("Lo que costó la mercancía que se vendió, en pesos.", "What the goods sold cost, in pesos.") },
              { symbol: "Gastos de operación", meaning: t("Gastos de mantener el negocio andando: sueldos, renta, luz, publicidad.", "Costs of keeping the business running: salaries, rent, electricity, advertising.") },
              { symbol: "Gastos financieros", meaning: t("Intereses de préstamos y otros costos de deudas, en pesos.", "Interest on loans and other debt costs, in pesos.") },
              { symbol: "Impuestos", meaning: t("Impuestos a la utilidad del periodo, en pesos.", "Income taxes for the period, in pesos.") },
              { symbol: "Utilidad neta", meaning: t("Lo que de verdad ganó el negocio al final, después de todo.", "What the business really earned in the end, after everything.") },
            ],
            steps: [
              t("Calcula las ventas netas: ventas − devoluciones.", "Compute net sales: sales − returns."),
              t("Resta el costo de ventas: obtienes la utilidad bruta.", "Subtract cost of sales: you get gross profit."),
              t("Resta los gastos de operación: obtienes la utilidad de operación.", "Subtract operating expenses: you get operating profit."),
              t("Resta los gastos financieros (intereses): obtienes la utilidad antes de impuestos.", "Subtract financial expenses (interest): you get profit before taxes."),
              t("Resta los impuestos: obtienes la utilidad neta.", "Subtract taxes: you get net profit."),
            ],
            example: t(
              "Una zapatería vende $600,000, le devuelven $20,000, su costo de ventas es $350,000, gastos de operación $150,000, intereses $15,000 e impuestos $18,000. Ventas netas: $600,000 − $20,000 = $580,000. Bruta: $580,000 − $350,000 = $230,000. Operación: $230,000 − $150,000 = $80,000. Antes de impuestos: $80,000 − $15,000 = $65,000. Neta: $65,000 − $18,000 = **$47,000**.",
              "A shoe store sells $600,000, gets $20,000 in returns, its cost of sales is $350,000, operating expenses $150,000, interest $15,000 and taxes $18,000. Net sales: $600,000 − $20,000 = $580,000. Gross: $580,000 − $350,000 = $230,000. Operating: $230,000 − $150,000 = $80,000. Before taxes: $80,000 − $15,000 = $65,000. Net: $65,000 − $18,000 = **$47,000**.",
            ),
            interpret: t(
              "Cada nivel te dice dónde se va el dinero: una utilidad bruta baja apunta al costo del producto; una de operación baja, a los gastos; una neta baja con buena operación, a la deuda o los impuestos.",
              "Each level tells you where money goes: a low gross profit points to product cost; a low operating profit, to expenses; a low net profit with good operations, to debt or taxes.",
            ),
            mistake: t(
              "Empezar con las ventas totales sin restar las devoluciones.",
              "Starting from total sales without subtracting returns.",
            ),
          },
        ],
      },
      {
        heading: t("Balance clasificado y flujo de efectivo", "Classified balance sheet and cash flow"),
        body: [
          t(
            "En el balance, activos y pasivos se separan en **circulantes** (a corto plazo: se cobran, venden o pagan dentro de un año o del ciclo normal del negocio) y **no circulantes** (largo plazo). Así un banco ve rápido si la empresa puede pagar sus deudas próximas.",
            "On the balance sheet, assets and liabilities are split into **current** (short term: collected, sold or paid within a year or the normal business cycle) and **non-current** (long term). That way a bank quickly sees whether the company can pay its upcoming debts.",
          ),
          t(
            "El **estado de flujos de efectivo** separa el dinero en tres actividades: **operación** (el día a día), **inversión** (comprar o vender activos de largo plazo) y **financiamiento** (préstamos y aportaciones de dueños). Ganar dinero no es lo mismo que tener efectivo: puedes vender mucho a crédito y quedarte sin caja.",
            "The **cash flow statement** splits money into three activities: **operating** (day-to-day), **investing** (buying or selling long-term assets) and **financing** (loans and owner contributions). Making a profit is not the same as having cash: you can sell a lot on credit and run out of cash.",
          ),
          t(
            "En palabras sencillas, el **método indirecto** convierte la utilidad (lo que ganaste \"en papel\") en efectivo (lo que de verdad entró a la caja). Si vendiste a crédito, la venta cuenta como utilidad, pero el dinero todavía no llega; si le quedaste a deber al proveedor, el gasto ya está registrado, pero el dinero sigue en tu caja.",
            "In plain words, the **indirect method** turns profit (what you earned \"on paper\") into cash (what really came into the till). If you sold on credit, the sale counts as profit but the money has not arrived yet; if you still owe the supplier, the expense is recorded but the money is still in your till.",
          ),
          t(
            "Con el **método indirecto** se parte de la utilidad neta, se suman gastos que no usaron efectivo (como la depreciación) y se ajustan los cambios en clientes, inventarios y proveedores. Mini ejemplo: utilidad $50,000 + depreciación $10,000 − aumento en clientes $8,000 = $52,000 de flujo de operación.",
            "With the **indirect method** you start from net profit, add back expenses that used no cash (such as depreciation) and adjust for changes in receivables, inventories and payables. Mini example: profit $50,000 + depreciation $10,000 − increase in receivables $8,000 = $52,000 operating cash flow.",
          ),
        ],
        formulas: [
          {
            name: t("Flujo de efectivo de operación (método indirecto)", "Operating cash flow (indirect method)"),
            expression: "Flujo de operación = Utilidad neta + Depreciación − Aumentos de activos circulantes + Disminuciones de activos circulantes + Aumentos de pasivos circulantes − Disminuciones de pasivos circulantes",
            variables: [
              { symbol: "Utilidad neta", meaning: t("La ganancia del estado de resultados, en pesos.", "The profit from the income statement, in pesos.") },
              { symbol: "Depreciación", meaning: t("Gasto por desgaste de activos; se registró como gasto pero no salió dinero.", "Expense for asset wear; recorded as an expense but no money left.") },
              { symbol: "Activos circulantes", meaning: t("Clientes (lo que te deben) e inventarios (mercancía en bodega).", "Receivables (what you are owed) and inventories (goods in stock).") },
              { symbol: "Pasivos circulantes", meaning: t("Proveedores y otras deudas de corto plazo.", "Payables and other short-term debts.") },
              { symbol: "Flujo de operación", meaning: t("El efectivo que de verdad dejó el día a día del negocio, en pesos.", "The cash the business's day-to-day really left, in pesos.") },
            ],
            steps: [
              t("Parte de la utilidad neta.", "Start from net profit."),
              t("Suma la depreciación y otros gastos que no usaron efectivo.", "Add depreciation and other expenses that used no cash."),
              t("Si clientes o inventarios aumentaron, resta el aumento (dinero que quedó atorado). Si bajaron, suma la baja.", "If receivables or inventories increased, subtract the increase (money that got stuck). If they decreased, add the decrease."),
              t("Si proveedores aumentaron, suma el aumento (compraste sin pagar todavía). Si bajaron, resta la baja (pagaste).", "If payables increased, add the increase (you bought without paying yet). If they decreased, subtract the decrease (you paid)."),
              t("El total es el flujo de efectivo de operación.", "The total is the operating cash flow."),
            ],
            example: t(
              "Una panadería tuvo utilidad de $70,000 y depreciación de $12,000. Sus clientes aumentaron $9,000, sus inventarios bajaron $4,000 y sus proveedores aumentaron $6,000. $70,000 + $12,000 = $82,000; − $9,000 = $73,000; + $4,000 = $77,000; + $6,000 = **$83,000**.",
              "A bakery had profit of $70,000 and depreciation of $12,000. Its receivables increased $9,000, its inventories decreased $4,000 and its payables increased $6,000. $70,000 + $12,000 = $82,000; − $9,000 = $73,000; + $4,000 = $77,000; + $6,000 = **$83,000**.",
            ),
            interpret: t(
              "Si el flujo de operación es mucho menor que la utilidad, el negocio gana \"en papel\" pero el dinero se le queda en clientes o en bodega.",
              "If operating cash flow is much lower than profit, the business earns \"on paper\" but its money gets stuck in receivables or in stock.",
            ),
            mistake: t(
              "Sumar un aumento de inventarios como si fuera dinero que entró. Más inventario significa que salió efectivo para comprarlo.",
              "Adding an increase in inventories as if money came in. More inventory means cash went out to buy it.",
            ),
          },
        ],
        bullets: [
          t("Aumento de un activo circulante (clientes, inventarios): se resta.", "Increase in a current asset (receivables, inventories): subtract."),
          t("Disminución de un activo circulante: se suma.", "Decrease in a current asset: add."),
          t("Aumento de un pasivo circulante (proveedores): se suma.", "Increase in a current liability (payables): add."),
          t("Disminución de un pasivo circulante: se resta.", "Decrease in a current liability: subtract."),
        ],
      },
    ],
    examples: [
      {
        title: t("Estado de resultados por niveles", "Income statement by levels"),
        problem: t(
          "Una distribuidora tiene: ventas $500,000; costo de ventas $300,000; gastos de operación $120,000; gasto por intereses $10,000; impuestos a la utilidad 30% (tasa ilustrativa). Elabora sus niveles de utilidad.",
          "A distributor has: sales $500,000; cost of sales $300,000; operating expenses $120,000; interest expense $10,000; income taxes 30% (illustrative rate). Prepare its profit levels.",
        ),
        steps: [
          t("Utilidad bruta: $500,000 − $300,000 = $200,000.", "Gross profit: $500,000 − $300,000 = $200,000."),
          t("Utilidad de operación: $200,000 − $120,000 = $80,000.", "Operating profit: $200,000 − $120,000 = $80,000."),
          t("Utilidad antes de impuestos: $80,000 − $10,000 = $70,000.", "Profit before taxes: $80,000 − $10,000 = $70,000."),
          t("Impuestos: 30% × $70,000 = $21,000; utilidad neta: $70,000 − $21,000 = $49,000.", "Taxes: 30% × $70,000 = $21,000; net profit: $70,000 − $21,000 = $49,000."),
        ],
        result: t("Utilidad neta de $49,000.", "Net profit of $49,000."),
      },
      {
        title: t("Flujo de operación con el método indirecto", "Operating cash flow with the indirect method"),
        problem: t(
          "Una empresa tuvo utilidad neta de $80,000 y depreciación de $15,000. En el año, sus clientes aumentaron $10,000 y sus proveedores aumentaron $5,000. ¿Cuál fue su flujo de efectivo de operación?",
          "A company had net profit of $80,000 and depreciation of $15,000. During the year, its receivables increased by $10,000 and its payables increased by $5,000. What was its operating cash flow?",
        ),
        steps: [
          t("Parte de la utilidad neta: $80,000.", "Start from net profit: $80,000."),
          t("Suma la depreciación (no salió efectivo): $80,000 + $15,000 = $95,000.", "Add depreciation (no cash left): $80,000 + $15,000 = $95,000."),
          t("Resta el aumento en clientes (vendiste sin cobrar): $95,000 − $10,000 = $85,000.", "Subtract the increase in receivables (sold without collecting): $95,000 − $10,000 = $85,000."),
          t("Suma el aumento en proveedores (compraste sin pagar): $85,000 + $5,000 = $90,000.", "Add the increase in payables (bought without paying): $85,000 + $5,000 = $90,000."),
        ],
        result: t("Flujo de efectivo de operación: $90,000.", "Operating cash flow: $90,000."),
      },
    ],
    keyPoints: [
      t("Estados básicos: situación financiera, resultado integral, cambios en el capital contable y flujos de efectivo.", "Basic statements: financial position, comprehensive income, changes in equity and cash flows."),
      t("El balance es una foto en una fecha; los demás cubren un periodo.", "The balance sheet is a snapshot at a date; the others cover a period."),
      t("Las notas son parte integral de los estados financieros.", "The notes are an integral part of the financial statements."),
      t("El estado de resultados se presenta por niveles: bruta, de operación, antes de impuestos y neta.", "The income statement is presented by levels: gross, operating, before taxes and net."),
      t("Flujo de efectivo: operación, inversión y financiamiento; utilidad no es lo mismo que efectivo.", "Cash flow: operating, investing and financing; profit is not the same as cash."),
    ],
    normativeNote: NOTE_NIF,
    exerciseIds: ['CON-07-E1', 'CON-07-E2', 'CON-07-E3', 'CON-07-E4', 'CON-07-E5', 'CON-07-E6'],
  },

  // ───────────────────────────── CON-08 ─────────────────────────────
  {
    id: 'CON-08',
    level: 2,
    topicIds: ['CON.8'],
    title: t("Contabilidad de activos, pasivos y capital", "Accounting for assets, liabilities and equity"),
    summary: t(
      "Cada activo, pasivo y partida de capital tiene reglas para reconocerse y valuarse: los activos se ajustan por desgaste o incobrabilidad, los pasivos incluyen obligaciones estimadas y el capital separa lo aportado de lo ganado.",
      "Each asset, liability and equity item has rules for recognition and measurement: assets are adjusted for wear or uncollectibility, liabilities include estimated obligations and equity separates what was contributed from what was earned.",
    ),
    minutes: 18,
    objectives: [
      t("Valuar cuentas por cobrar con su estimación de incobrables y activo fijo con depreciación en línea recta.", "Measure receivables with their allowance for doubtful accounts and fixed assets with straight-line depreciation."),
      t("Reconocer cuándo una obligación estimada se registra como provisión.", "Recognize when an estimated obligation is recorded as a provision."),
      t("Distinguir capital contribuido de capital ganado y calcular la reserva legal.", "Distinguish contributed capital from earned capital and compute the legal reserve."),
    ],
    theory: [
      {
        heading: t("Activos: lo que vale de verdad", "Assets: what they are really worth"),
        body: [
          t(
            "Un **activo** es un recurso que controla el negocio y del que espera obtener beneficios: dinero, lo que le deben, mercancía, máquinas. La contabilidad pide presentarlo por lo que **realmente vale**, no por lo que costó o lo que dice la factura.",
            "An **asset** is a resource the business controls and from which it expects benefits: money, what it is owed, goods, machines. Accounting asks you to present it at what it is **really worth**, not just at what it cost or what the invoice says.",
          ),
          t(
            "**Cuentas por cobrar** (lo que te deben tus clientes): no todos pagan. Como en la tiendita que fía, siempre hay quien no regresa. Por eso se crea una **estimación para cuentas incobrables**, una cuenta que resta a Clientes lo que probablemente no se cobrará.",
            "**Receivables** (what your customers owe you): not everyone pays. Like a corner store that sells on credit, someone always fails to come back. That is why an **allowance for doubtful accounts** is created, an account that subtracts from Accounts receivable what probably will not be collected.",
          ),
          t(
            "**Activo fijo** (máquinas, vehículos, equipo que usas varios años): se desgasta con el uso. En lugar de mandar todo su costo a gasto el año en que lo compras, se reparte entre los años que lo usarás; a eso se le llama **depreciación**. El método de **línea recta** reparte la misma cantidad cada año.",
            "**Fixed assets** (machines, vehicles, equipment you use for several years): they wear out with use. Instead of expensing their whole cost in the year you buy them, it is spread over the years you will use them; this is called **depreciation**. The **straight-line** method spreads the same amount each year.",
          ),
          t(
            "Mini ejemplo: una camioneta de reparto cuesta $400,000, se espera venderla en $40,000 al final (valor residual) y durará 5 años. Depreciación anual: ($400,000 − $40,000) ÷ 5 = $72,000.",
            "Mini example: a delivery van costs $400,000, is expected to sell for $40,000 at the end (residual value) and will last 5 years. Annual depreciation: ($400,000 − $40,000) ÷ 5 = $72,000.",
          ),
        ],
        formulas: [
          {
            name: t("Depreciación anual en línea recta", "Straight-line annual depreciation"),
            expression: "Depreciación anual = (Costo − Valor residual) ÷ Vida útil",
            variables: [
              { symbol: "Costo", meaning: t("Lo que pagaste por el activo (máquina, camioneta), en pesos.", "What you paid for the asset (machine, van), in pesos.") },
              { symbol: "Valor residual", meaning: t("En cuánto esperas venderlo cuando ya no lo uses, en pesos.", "How much you expect to sell it for when you stop using it, in pesos.") },
              { symbol: "Vida útil", meaning: t("Cuántos años esperas usarlo.", "How many years you expect to use it.") },
              { symbol: "Depreciación anual", meaning: t("La parte del costo que se vuelve gasto cada año, en pesos.", "The part of the cost that becomes an expense each year, in pesos.") },
            ],
            steps: [
              t("Resta el valor residual al costo: es el monto que se va a desgastar.", "Subtract the residual value from the cost: that is the amount that will wear out."),
              t("Divide ese monto entre los años de vida útil.", "Divide that amount by the years of useful life."),
            ],
            example: t(
              "Un horno industrial cuesta $120,000, se espera venderlo en $20,000 y durará 4 años. Monto a depreciar: $120,000 − $20,000 = $100,000. Depreciación anual: $100,000 ÷ 4 = **$25,000 por año**.",
              "An industrial oven costs $120,000, is expected to sell for $20,000 and will last 4 years. Depreciable amount: $120,000 − $20,000 = $100,000. Annual depreciation: $100,000 ÷ 4 = **$25,000 per year**.",
            ),
            mistake: t(
              "Dividir el costo completo entre la vida útil sin restar antes el valor residual.",
              "Dividing the full cost by the useful life without first subtracting the residual value.",
            ),
          },
          {
            name: t("Valor en libros de un activo fijo", "Book value of a fixed asset"),
            expression: "Valor en libros = Costo − Depreciación acumulada   ·   Depreciación acumulada = Depreciación anual × años transcurridos",
            variables: [
              { symbol: "Valor en libros", meaning: t("Lo que vale el activo en tu contabilidad hoy, en pesos.", "What the asset is worth in your books today, in pesos.") },
              { symbol: "Costo", meaning: t("Lo que pagaste por el activo, en pesos.", "What you paid for the asset, in pesos.") },
              { symbol: "Depreciación acumulada", meaning: t("Todo el desgaste registrado desde que lo compraste, en pesos.", "All the wear recorded since you bought it, in pesos.") },
              { symbol: "años transcurridos", meaning: t("Los años que llevas usándolo.", "The years you have been using it.") },
            ],
            steps: [
              t("Calcula la depreciación anual con la fórmula de línea recta.", "Compute the annual depreciation with the straight-line formula."),
              t("Multiplícala por los años transcurridos: es la depreciación acumulada.", "Multiply it by the years elapsed: that is the accumulated depreciation."),
              t("Resta la depreciación acumulada al costo.", "Subtract the accumulated depreciation from the cost."),
            ],
            example: t(
              "Con el horno anterior ($25,000 por año), al final del año 3: acumulada 3 × $25,000 = $75,000. Valor en libros: $120,000 − $75,000 = **$45,000**.",
              "With the oven above ($25,000 per year), at the end of year 3: accumulated 3 × $25,000 = $75,000. Book value: $120,000 − $75,000 = **$45,000**.",
            ),
            mistake: t(
              "Restar otra vez el valor residual al final. El residual ya se descontó al calcular la depreciación.",
              "Subtracting the residual value again at the end. It was already deducted when computing depreciation.",
            ),
          },
          {
            name: t("Estimación para cuentas incobrables y clientes netos", "Allowance for doubtful accounts and net receivables"),
            expression: "Estimación = Clientes × % que no se cobrará   ·   Clientes netos = Clientes − Estimación",
            variables: [
              { symbol: "Clientes", meaning: t("Lo que te deben tus clientes, en pesos.", "What your customers owe you, in pesos.") },
              { symbol: "% que no se cobrará", meaning: t("El porcentaje que, por experiencia, esperas no cobrar.", "The percentage you expect, from experience, not to collect.") },
              { symbol: "Estimación", meaning: t("Lo que probablemente no se cobrará; se registra como gasto, en pesos.", "What will probably not be collected; recorded as an expense, in pesos.") },
              { symbol: "Clientes netos", meaning: t("Lo que de verdad esperas cobrar, en pesos.", "What you really expect to collect, in pesos.") },
            ],
            steps: [
              t("Convierte el porcentaje a decimal: 4% = 0.04.", "Convert the percentage to a decimal: 4% = 0.04."),
              t("Multiplica el saldo de clientes por ese decimal: es la estimación.", "Multiply the receivables balance by that decimal: that is the allowance."),
              t("Resta la estimación al saldo de clientes para obtener clientes netos.", "Subtract the allowance from receivables to get net receivables."),
            ],
            example: t(
              "Una refaccionaria tiene clientes por $180,000 y estima no cobrar el 4%. Estimación: $180,000 × 0.04 = $7,200. Clientes netos: $180,000 − $7,200 = **$172,800**.",
              "An auto-parts store has receivables of $180,000 and estimates it will not collect 4%. Allowance: $180,000 × 0.04 = $7,200. Net receivables: $180,000 − $7,200 = **$172,800**.",
            ),
            mistake: t(
              "Restar directo a Clientes. Como aún no sabes qué cliente no pagará, se usa la cuenta Estimación para cuentas incobrables.",
              "Subtracting directly from Receivables. Since you do not yet know which customer will not pay, the Allowance for doubtful accounts is used.",
            ),
          },
        ],
        bullets: [
          t("Clientes netos = Clientes − Estimación para incobrables.", "Net receivables = Receivables − Allowance for doubtful accounts."),
          t("Valor en libros = Costo − Depreciación acumulada.", "Book value = Cost − Accumulated depreciation."),
          t("Los terrenos no se deprecian.", "Land is not depreciated."),
        ],
      },
      {
        heading: t("Pasivos: lo que se debe, aunque sea estimado", "Liabilities: what is owed, even if estimated"),
        body: [
          t(
            "Un **pasivo** es una obligación presente que hará salir recursos del negocio: pagar a proveedores, sueldos, impuestos o un préstamo. Se separan en **corto plazo** (hasta un año) y **largo plazo**.",
            "A **liability** is a present obligation that will make resources leave the business: paying suppliers, salaries, taxes or a loan. They are split into **short term** (up to one year) and **long term**.",
          ),
          t(
            "Algunas deudas no tienen monto exacto. Una **provisión** es un pasivo de monto o fecha **incierta**, como las garantías que darás por productos ya vendidos. Se registra cuando hay una **obligación presente** por algo que ya pasó, es **probable** que salga dinero y el monto se puede **estimar** razonablemente.",
            "Some debts have no exact amount. A **provision** is a liability of **uncertain** amount or timing, such as warranties you will honor on products already sold. It is recorded when there is a **present obligation** from a past event, an outflow of money is **probable** and the amount can be reasonably **estimated**.",
          ),
          t(
            "Mini ejemplo: una tienda de electrodomésticos vendió lavadoras con un año de garantía. Su experiencia indica que gastará unos $15,000 en reparaciones. Registra hoy un gasto por provisiones y una provisión (pasivo) por $15,000.",
            "Mini example: an appliance store sold washing machines with a one-year warranty. Its experience indicates it will spend about $15,000 on repairs. It records today a provision expense and a provision (liability) of $15,000.",
          ),
        ],
        bullets: [
          t("Obligación presente por un evento pasado.", "Present obligation from a past event."),
          t("Salida de recursos probable.", "Probable outflow of resources."),
          t("Monto estimable de forma confiable.", "Amount reliably estimable."),
        ],
      },
      {
        heading: t("Capital: lo aportado y lo ganado", "Equity: what was contributed and what was earned"),
        body: [
          t(
            "El **capital contable** es lo que les pertenece a los dueños: activos menos pasivos. Se divide en dos partes. El **capital contribuido** es lo que los socios **pusieron**: capital social, aportaciones para futuros aumentos de capital y prima en venta de acciones (lo que pagaron de más sobre el valor nominal).",
            "**Equity** is what belongs to the owners: assets minus liabilities. It is split into two parts. **Contributed capital** is what the partners **put in**: share capital, contributions for future capital increases and share premium (what they paid above par value).",
          ),
          t(
            "El **capital ganado** es lo que el negocio **generó** y no repartió: utilidades retenidas, utilidad del ejercicio y **reservas**. En México, la Ley General de Sociedades Mercantiles pide separar cada año al menos el **5%** de las utilidades para la **reserva legal**, hasta que esta llegue a la quinta parte del capital social.",
            "**Earned capital** is what the business **generated** and did not distribute: retained earnings, profit for the year and **reserves**. In Mexico, the General Law of Commercial Companies requires setting aside each year at least **5%** of profits for the **legal reserve**, until it reaches one fifth of share capital.",
          ),
          t(
            "Cuando la asamblea **decreta dividendos**, el capital ganado baja y nace una deuda con los socios. Mini ejemplo: utilidad de $200,000; reserva legal mínima 5% = $10,000.",
            "When the shareholders' meeting **declares dividends**, earned capital goes down and a debt to the partners arises. Mini example: profit of $200,000; minimum legal reserve 5% = $10,000.",
          ),
        ],
        formulas: [
          {
            name: t("Capital contable y sus dos partes", "Equity and its two parts"),
            expression: "Capital contable = Activo − Pasivo = Capital contribuido + Capital ganado",
            variables: [
              { symbol: "Activo", meaning: t("Todo lo que tiene el negocio, en pesos.", "Everything the business has, in pesos.") },
              { symbol: "Pasivo", meaning: t("Todo lo que debe el negocio, en pesos.", "Everything the business owes, in pesos.") },
              { symbol: "Capital contribuido", meaning: t("Lo que los socios pusieron de su bolsa, en pesos.", "What the partners put in from their own pockets, in pesos.") },
              { symbol: "Capital ganado", meaning: t("Utilidades que el negocio generó y no repartió, más reservas, en pesos.", "Profits the business generated and did not distribute, plus reserves, in pesos.") },
            ],
            steps: [
              t("Calcula el capital contable: activo − pasivo.", "Compute equity: assets − liabilities."),
              t("Si conoces el capital contribuido, réstalo para obtener el capital ganado (o al revés).", "If you know contributed capital, subtract it to get earned capital (or the other way around)."),
            ],
            example: t(
              "Una empresa tiene activos de $900,000 y pasivos de $350,000. Capital contable: $900,000 − $350,000 = $550,000. Si los socios aportaron $400,000, el capital ganado es $550,000 − $400,000 = **$150,000**.",
              "A company has assets of $900,000 and liabilities of $350,000. Equity: $900,000 − $350,000 = $550,000. If the partners contributed $400,000, earned capital is $550,000 − $400,000 = **$150,000**.",
            ),
          },
          {
            name: t("Reserva legal mínima del año", "Minimum legal reserve for the year"),
            expression: "Reserva legal del año = Utilidad neta × 5%",
            variables: [
              { symbol: "Utilidad neta", meaning: t("La ganancia del año, en pesos.", "The year's profit, in pesos.") },
              { symbol: "5%", meaning: t("El mínimo que la ley pide separar cada año, mientras la reserva no llegue a la quinta parte (20%) del capital social.", "The minimum the law requires setting aside each year, while the reserve has not reached one fifth (20%) of share capital.") },
            ],
            steps: [
              t("Revisa si la reserva ya llegó a la quinta parte del capital social. Si ya llegó, no hace falta separar más.", "Check whether the reserve has already reached one fifth of share capital. If it has, nothing more is required."),
              t("Si no, multiplica la utilidad neta por 0.05.", "If not, multiply net profit by 0.05."),
            ],
            example: t(
              "Una sociedad gana $240,000 y su reserva aún no llega al tope. Reserva del año: $240,000 × 0.05 = **$12,000**.",
              "A company earns $240,000 and its reserve has not reached the cap. Reserve for the year: $240,000 × 0.05 = **$12,000**.",
            ),
            mistake: t(
              "Usar el 20%. Ese es el tope total de la reserva (la quinta parte del capital social), no lo que se separa cada año.",
              "Using 20%. That is the reserve's total cap (one fifth of share capital), not what is set aside each year.",
            ),
          },
        ],
      },
    ],
    examples: [
      {
        title: t("Depreciación y valor en libros de una camioneta", "Depreciation and book value of a van"),
        problem: t(
          "Una mueblería compra una camioneta de $400,000, con valor residual de $40,000 y vida útil de 5 años. Con línea recta, ¿cuál es la depreciación anual y el valor en libros al final del año 2?",
          "A furniture store buys a $400,000 van, with a $40,000 residual value and a 5-year useful life. Using straight line, what is the annual depreciation and the book value at the end of year 2?",
        ),
        steps: [
          t("Monto a depreciar: $400,000 − $40,000 = $360,000.", "Depreciable amount: $400,000 − $40,000 = $360,000."),
          t("Depreciación anual: $360,000 ÷ 5 = $72,000.", "Annual depreciation: $360,000 ÷ 5 = $72,000."),
          t("Depreciación acumulada a 2 años: 2 × $72,000 = $144,000.", "Accumulated depreciation after 2 years: 2 × $72,000 = $144,000."),
          t("Valor en libros: $400,000 − $144,000 = $256,000.", "Book value: $400,000 − $144,000 = $256,000."),
        ],
        result: t("Depreciación anual $72,000; valor en libros al año 2: $256,000.", "Annual depreciation $72,000; book value at year 2: $256,000."),
      },
      {
        title: t("Estimación para cuentas incobrables", "Allowance for doubtful accounts"),
        problem: t(
          "Una papelería mayorista tiene clientes por $250,000. Por su experiencia, estima que no cobrará el 5%. ¿Cuánto registra de estimación y cómo se presenta Clientes?",
          "A wholesale stationery company has receivables of $250,000. Based on experience, it estimates it will not collect 5%. How much allowance does it record and how are receivables presented?",
        ),
        steps: [
          t("Estimación: 5% × $250,000 = $12,500.", "Allowance: 5% × $250,000 = $12,500."),
          t("Asiento: cargo a Gasto por cuentas incobrables $12,500; abono a Estimación para cuentas incobrables $12,500.", "Entry: debit Bad debt expense $12,500; credit Allowance for doubtful accounts $12,500."),
          t("Clientes netos: $250,000 − $12,500 = $237,500.", "Net receivables: $250,000 − $12,500 = $237,500."),
        ],
        result: t("Estimación de $12,500; Clientes se presenta neto en $237,500.", "Allowance of $12,500; receivables are presented net at $237,500."),
      },
    ],
    keyPoints: [
      t("Los activos se presentan por lo que realmente valen: clientes netos de estimación y activo fijo neto de depreciación.", "Assets are presented at what they are really worth: receivables net of allowance and fixed assets net of depreciation."),
      t("Línea recta: (costo − valor residual) ÷ vida útil.", "Straight line: (cost − residual value) ÷ useful life."),
      t("Una provisión se registra si hay obligación presente, salida probable y monto estimable.", "A provision is recorded if there is a present obligation, a probable outflow and an estimable amount."),
      t("Capital contribuido = lo que pusieron los socios; capital ganado = lo que generó el negocio.", "Contributed capital = what partners put in; earned capital = what the business generated."),
      t("La reserva legal toma al menos 5% de la utilidad anual hasta llegar a la quinta parte del capital social.", "The legal reserve takes at least 5% of annual profit until it reaches one fifth of share capital."),
    ],
    normativeNote: NOTE_EQUITY,
    exerciseIds: ['CON-08-E1', 'CON-08-E2', 'CON-08-E3', 'CON-08-E4', 'CON-08-E5', 'CON-08-E6'],
  },

  // ───────────────────────────── CON-09 ─────────────────────────────
  {
    id: 'CON-09',
    level: 2,
    topicIds: ['CON.9'],
    title: t("Consolidación de estados financieros", "Consolidation of financial statements"),
    summary: t(
      "Cuando una empresa controla a otras, presenta estados financieros consolidados: suma las cifras del grupo como si fuera una sola empresa, elimina las operaciones entre ellas y muestra aparte la parte que pertenece a otros socios.",
      "When a company controls others, it presents consolidated financial statements: it adds up the group's figures as if it were a single company, eliminates transactions between them and shows separately the part that belongs to other shareholders.",
    ),
    minutes: 17,
    objectives: [
      t("Explicar qué es el control y cuándo una empresa debe consolidar a otra.", "Explain what control is and when a company must consolidate another."),
      t("Eliminar saldos y operaciones entre empresas del mismo grupo.", "Eliminate balances and transactions between companies in the same group."),
      t("Calcular la participación no controladora y un crédito mercantil sencillo.", "Compute the non-controlling interest and a simple goodwill."),
    ],
    theory: [
      {
        heading: t("Control: quién manda en el grupo", "Control: who is in charge of the group"),
        body: [
          t(
            "Muchas empresas grandes son **grupos**: una **controladora** (la empresa \"mamá\") y una o varias **subsidiarias** (las \"hijas\") que ella controla. Por ejemplo, una cadena de restaurantes puede tener una subsidiaria que hace las tortillas y otra que reparte.",
            "Many large companies are **groups**: a **parent** (the \"mother\" company) and one or more **subsidiaries** (the \"daughters\") it controls. For example, a restaurant chain may have a subsidiary that makes tortillas and another that delivers.",
          ),
          t(
            "En palabras sencillas: controlas una empresa cuando eres tú quien decide cómo se maneja y te va bien o mal según le vaya a ella. Formalmente, el **control** es tener **poder** para dirigir las actividades importantes de la otra empresa, estar **expuesto a sus rendimientos** (ganar o perder con ella) y poder **usar ese poder** para influir en esos rendimientos. Lo usual es que tener más del 50% de los votos dé control, pero no siempre: importa la realidad, no solo el porcentaje.",
            "In plain words: you control a company when you are the one who decides how it is run and you do well or badly depending on how it does. Formally, **control** is having **power** to direct the other company's important activities, being **exposed to its returns** (gaining or losing with it) and being able to **use that power** to affect those returns. Usually holding more than 50% of the votes gives control, but not always: reality matters, not just the percentage.",
          ),
          t(
            "Si solo hay **influencia significativa** (opinar e influir, sin mandar; se presume en general desde el 20% de los votos), la inversión es una **asociada** y no se consolida: se usa el **método de participación** (la inversión se registra en un solo renglón que sube o baja con tu parte de las utilidades de la asociada). Mini ejemplo: con 85% de las acciones y mayoría en el consejo, consolidas; con 30% y un consejero, normalmente es asociada.",
            "If there is only **significant influence** (having a say without being in charge; generally presumed from 20% of the votes), the investment is an **associate** and is not consolidated: the **equity method** is used (the investment is recorded as one line that grows or shrinks with your share of the associate's profits). Mini example: with 85% of the shares and a board majority, you consolidate; with 30% and one board member, it is normally an associate.",
          ),
        ],
        bullets: [
          t("Control → subsidiaria → se consolida.", "Control → subsidiary → consolidated."),
          t("Influencia significativa → asociada → método de participación.", "Significant influence → associate → equity method."),
          t("Sin control ni influencia → inversión financiera.", "Neither control nor influence → financial investment."),
        ],
      },
      {
        heading: t("Sumar y eliminar: el grupo como una sola empresa", "Add and eliminate: the group as a single company"),
        body: [
          t(
            "Consolidar es presentar al grupo **como si fuera una sola empresa**. El primer paso es **sumar** renglón por renglón: caja con caja, clientes con clientes, ventas con ventas.",
            "Consolidating means presenting the group **as if it were a single company**. The first step is to **add** line by line: cash with cash, receivables with receivables, sales with sales.",
          ),
          t(
            "El segundo paso es **eliminar** lo que pasó **dentro** del grupo, porque una empresa no puede deberse ni venderse a sí misma. Si la subsidiaria le vendió a crédito a la controladora, se eliminan esa venta, esa compra y la cuenta por cobrar y por pagar entre ellas. También se elimina la **inversión** de la controladora contra el capital de la subsidiaria, para no contar dos veces el mismo patrimonio.",
            "The second step is to **eliminate** what happened **inside** the group, because a company cannot owe or sell to itself. If the subsidiary sold on credit to the parent, that sale, that purchase and the receivable and payable between them are eliminated. The parent's **investment** is also eliminated against the subsidiary's equity, so the same net worth is not counted twice.",
          ),
          t(
            "Mini ejemplo: la controladora tiene clientes por $300,000 y la subsidiaria por $120,000, de los cuales $40,000 se los debe la controladora. Clientes consolidados: $300,000 + $120,000 − $40,000 = $380,000.",
            "Mini example: the parent has receivables of $300,000 and the subsidiary $120,000, of which $40,000 is owed by the parent. Consolidated receivables: $300,000 + $120,000 − $40,000 = $380,000.",
          ),
        ],
        formulas: [
          {
            name: t("Saldo consolidado de un renglón", "Consolidated balance of a line item"),
            expression: "Saldo consolidado = Controladora + Subsidiaria − Operaciones entre ellas",
            variables: [
              { symbol: "Controladora", meaning: t("El saldo de ese renglón (ventas, clientes…) en la empresa \"mamá\", en pesos.", "That line's balance (sales, receivables…) in the \"mother\" company, in pesos.") },
              { symbol: "Subsidiaria", meaning: t("El saldo del mismo renglón en la empresa controlada, en pesos.", "The same line's balance in the controlled company, in pesos.") },
              { symbol: "Operaciones entre ellas", meaning: t("Ventas, compras, cuentas por cobrar o por pagar entre empresas del mismo grupo, en pesos.", "Sales, purchases, receivables or payables between companies of the same group, in pesos.") },
            ],
            steps: [
              t("Suma el renglón de la controladora y el de la subsidiaria.", "Add the parent's and the subsidiary's line."),
              t("Identifica qué parte de ese saldo es con la otra empresa del grupo.", "Identify which part of that balance is with the other group company."),
              t("Réstala: solo queda lo que se hizo con gente de fuera del grupo.", "Subtract it: only what was done with people outside the group remains."),
            ],
            example: t(
              "La controladora vende $900,000 y la subsidiaria $300,000; de estas, $80,000 fueron ventas a la controladora. Suma: $900,000 + $300,000 = $1,200,000. Ventas consolidadas: $1,200,000 − $80,000 = **$1,120,000**.",
              "The parent sells $900,000 and the subsidiary $300,000; of the latter, $80,000 were sales to the parent. Sum: $900,000 + $300,000 = $1,200,000. Consolidated sales: $1,200,000 − $80,000 = **$1,120,000**.",
            ),
            mistake: t(
              "Sumar sin eliminar las operaciones internas: el grupo se vería más grande de lo que es.",
              "Adding without eliminating internal transactions: the group would look bigger than it is.",
            ),
          },
        ],
      },
      {
        heading: t("Participación no controladora y crédito mercantil", "Non-controlling interest and goodwill"),
        body: [
          t(
            "Si la controladora tiene el 80% de la subsidiaria, igual suma el **100%** de sus activos y pasivos, porque los controla todos. Pero el 20% de su capital pertenece a otros socios: esa parte se llama **participación no controladora** y se muestra por separado dentro del capital contable consolidado.",
            "If the parent owns 80% of the subsidiary, it still adds **100%** of its assets and liabilities, because it controls all of them. But 20% of its equity belongs to other shareholders: that part is called the **non-controlling interest** and is shown separately within consolidated equity.",
          ),
          t(
            "Cuando la controladora paga por la subsidiaria **más** que el valor razonable de su parte de los activos netos (activos menos pasivos a valor de mercado), la diferencia es el **crédito mercantil**: lo que pagó por marca, clientes, equipo humano y otros beneficios futuros que no aparecen por separado.",
            "When the parent pays for the subsidiary **more** than the fair value of its share of net assets (assets minus liabilities at market value), the difference is **goodwill**: what it paid for brand, customers, people and other future benefits that do not appear separately.",
          ),
          t(
            "Mini ejemplo sencillo (valuando la participación no controladora por su parte proporcional): capital de la subsidiaria $500,000 y la controladora tiene 80%. Participación no controladora: 20% × $500,000 = $100,000.",
            "Simple mini example (measuring the non-controlling interest at its proportionate share): subsidiary equity $500,000 and the parent owns 80%. Non-controlling interest: 20% × $500,000 = $100,000.",
          ),
        ],
        formulas: [
          {
            name: t("Participación no controladora", "Non-controlling interest"),
            expression: "Participación no controladora = (100% − % de la controladora) × Capital de la subsidiaria",
            variables: [
              { symbol: "% de la controladora", meaning: t("El porcentaje de acciones de la subsidiaria que tiene la controladora.", "The percentage of the subsidiary's shares the parent owns.") },
              { symbol: "100% − % de la controladora", meaning: t("La parte que pertenece a otros socios.", "The part that belongs to other shareholders.") },
              { symbol: "Capital de la subsidiaria", meaning: t("Activos menos pasivos de la subsidiaria, en pesos.", "The subsidiary's assets minus liabilities, in pesos.") },
            ],
            steps: [
              t("Calcula el porcentaje de los otros socios: 100% − % de la controladora.", "Compute the other shareholders' percentage: 100% − parent's %."),
              t("Conviértelo a decimal y multiplícalo por el capital de la subsidiaria.", "Convert it to a decimal and multiply it by the subsidiary's equity."),
            ],
            example: t(
              "Una controladora tiene el 90% de una subsidiaria con capital de $600,000. Otros socios: 100% − 90% = 10%. Participación no controladora: 0.10 × $600,000 = **$60,000**.",
              "A parent owns 90% of a subsidiary with $600,000 of equity. Other shareholders: 100% − 90% = 10%. Non-controlling interest: 0.10 × $600,000 = **$60,000**.",
            ),
            mistake: t(
              "Multiplicar por el porcentaje de la controladora. Eso da su propia parte, no la de los otros socios.",
              "Multiplying by the parent's percentage. That gives its own share, not the other shareholders'.",
            ),
          },
          {
            name: t("Crédito mercantil", "Goodwill"),
            expression: "Crédito mercantil = Precio pagado − (% adquirido × Activos netos a valor razonable)",
            variables: [
              { symbol: "Precio pagado", meaning: t("Lo que la controladora pagó por las acciones, en pesos.", "What the parent paid for the shares, in pesos.") },
              { symbol: "% adquirido", meaning: t("El porcentaje de la subsidiaria que se compró.", "The percentage of the subsidiary that was bought.") },
              { symbol: "Activos netos a valor razonable", meaning: t("Activos menos pasivos de la subsidiaria, medidos a precio de mercado, en pesos.", "The subsidiary's assets minus liabilities, measured at market price, in pesos.") },
            ],
            steps: [
              t("Calcula la parte comprada de los activos netos: % adquirido × activos netos a valor razonable.", "Compute the share of net assets bought: % acquired × net assets at fair value."),
              t("Resta esa parte al precio pagado.", "Subtract that share from the price paid."),
              t("Si sale positivo, es crédito mercantil (un activo).", "If positive, it is goodwill (an asset)."),
            ],
            example: t(
              "Una empresa paga $680,000 por el 60% de otra con activos netos a valor razonable de $1,000,000. Parte comprada: 0.60 × $1,000,000 = $600,000. Crédito mercantil: $680,000 − $600,000 = **$80,000**.",
              "A company pays $680,000 for 60% of another with net assets at fair value of $1,000,000. Share bought: 0.60 × $1,000,000 = $600,000. Goodwill: $680,000 − $600,000 = **$80,000**.",
            ),
            interpret: t(
              "El crédito mercantil es lo que se pagó de más por cosas que no se ven por separado: marca, clientes, equipo humano.",
              "Goodwill is the extra paid for things not seen separately: brand, customers, people.",
            ),
            mistake: t(
              "Comparar el precio con el 100% de los activos netos cuando solo se compró una parte.",
              "Comparing the price with 100% of net assets when only part was bought.",
            ),
          },
        ],
        bullets: [
          t("Participación no controladora = % de otros socios × capital de la subsidiaria.", "Non-controlling interest = other shareholders' % × subsidiary equity."),
          t("Se consolidan el 100% de activos y pasivos de la subsidiaria, no solo el % propio.", "100% of the subsidiary's assets and liabilities are consolidated, not just the owned %."),
          t("El crédito mercantil no se amortiza, pero se revisa cada año por deterioro.", "Goodwill is not amortized, but it is tested for impairment every year."),
        ],
      },
    ],
    examples: [
      {
        title: t("Ventas consolidadas con operaciones entre empresas", "Consolidated sales with intercompany transactions"),
        problem: t(
          "Grupo Cocina tiene una controladora que vende comida ($1,000,000 de ventas) y una subsidiaria que produce salsas ($400,000 de ventas). De las ventas de la subsidiaria, $150,000 fueron salsas vendidas a la controladora, que las usó en platillos vendidos a clientes. ¿Cuáles son las ventas consolidadas?",
          "Grupo Cocina has a parent that sells food ($1,000,000 in sales) and a subsidiary that makes sauces ($400,000 in sales). Of the subsidiary's sales, $150,000 were sauces sold to the parent, which used them in dishes sold to customers. What are consolidated sales?",
        ),
        steps: [
          t("Suma simple: $1,000,000 + $400,000 = $1,400,000.", "Simple sum: $1,000,000 + $400,000 = $1,400,000."),
          t("Identifica la venta interna: $150,000 de la subsidiaria a la controladora.", "Identify the internal sale: $150,000 from the subsidiary to the parent."),
          t("Elimínala: $1,400,000 − $150,000 = $1,250,000. También se elimina la misma cantidad del costo de ventas.", "Eliminate it: $1,400,000 − $150,000 = $1,250,000. The same amount is also eliminated from cost of sales."),
        ],
        result: t("Ventas consolidadas: $1,250,000, solo lo vendido a clientes de fuera del grupo.", "Consolidated sales: $1,250,000, only what was sold to customers outside the group."),
      },
      {
        title: t("Crédito mercantil y participación no controladora", "Goodwill and non-controlling interest"),
        problem: t(
          "Una controladora paga $450,000 por el 80% de una subsidiaria cuyos activos netos a valor razonable son $500,000. Calcula el crédito mercantil y la participación no controladora (por su parte proporcional).",
          "A parent pays $450,000 for 80% of a subsidiary whose net assets at fair value are $500,000. Compute goodwill and the non-controlling interest (at its proportionate share).",
        ),
        steps: [
          t("Parte adquirida de los activos netos: 80% × $500,000 = $400,000.", "Acquired share of net assets: 80% × $500,000 = $400,000."),
          t("Crédito mercantil: $450,000 − $400,000 = $50,000.", "Goodwill: $450,000 − $400,000 = $50,000."),
          t("Participación no controladora: 20% × $500,000 = $100,000.", "Non-controlling interest: 20% × $500,000 = $100,000."),
        ],
        result: t("Crédito mercantil $50,000; participación no controladora $100,000.", "Goodwill $50,000; non-controlling interest $100,000."),
      },
    ],
    keyPoints: [
      t("Se consolida cuando hay control: poder, exposición a rendimientos y capacidad de usar ese poder.", "You consolidate when there is control: power, exposure to returns and the ability to use that power."),
      t("Consolidar = sumar renglón por renglón y eliminar todo lo que pasó dentro del grupo.", "Consolidating = adding line by line and eliminating everything that happened inside the group."),
      t("Se suma el 100% de la subsidiaria; la parte de otros socios es la participación no controladora.", "100% of the subsidiary is added; other shareholders' part is the non-controlling interest."),
      t("Crédito mercantil = precio pagado − parte adquirida de los activos netos a valor razonable.", "Goodwill = price paid − acquired share of net assets at fair value."),
      t("Con influencia significativa (sin control) la inversión es asociada y usa el método de participación.", "With significant influence (no control) the investment is an associate and uses the equity method."),
    ],
    normativeNote: t(
      "Contenido educativo basado en las NIF del CINIF sobre estados financieros consolidados e inversiones en asociadas, y en las NIIF equivalentes del IASB. Los porcentajes de referencia (como el 20% para influencia significativa) son presunciones generales, no reglas automáticas. Verifica la versión vigente (2026) de las normas; los montos de los ejemplos son hipotéticos.",
      "Educational content based on CINIF's NIF on consolidated financial statements and investments in associates, and on the IASB's equivalent IFRS. Reference percentages (such as 20% for significant influence) are general presumptions, not automatic rules. Verify the current version (2026) of the standards; amounts in the examples are hypothetical.",
    ),
    exerciseIds: ['CON-09-E1', 'CON-09-E2', 'CON-09-E3', 'CON-09-E4', 'CON-09-E5', 'CON-09-E6'],
  },
]

export const exercises: Exercise[] = [
  // ───────────────────────────── CON-04 ─────────────────────────────
  {
    id: 'CON-04-E1',
    level: 2,
    module: 'CON-04',
    kind: 'classify',
    flavor: 'concept',
    prompt: t(
      "Ubica cada tema en la capa de contabilidad financiera donde normalmente se estudia: básica, intermedia o avanzada.",
      "Place each topic in the layer of financial accounting where it is normally studied: basic, intermediate or advanced.",
    ),
    categories: [
      { id: 'CON-04-E1-c1', label: t("Básica", "Basic") },
      { id: 'CON-04-E1-c2', label: t("Intermedia", "Intermediate") },
      { id: 'CON-04-E1-c3', label: t("Avanzada", "Advanced") },
    ],
    items: [
      { id: 'CON-04-E1-i1', label: t("Registrar con cargo y abono la compra de mercancía en efectivo", "Record with debit and credit a cash purchase of goods"), correctCategoryId: 'CON-04-E1-c1' },
      { id: 'CON-04-E1-i2', label: t("Aplicar la ecuación Activo = Pasivo + Capital", "Apply the equation Assets = Liabilities + Equity"), correctCategoryId: 'CON-04-E1-c1' },
      { id: 'CON-04-E1-i3', label: t("Costear inventarios con PEPS o costo promedio", "Cost inventories with FIFO or average cost"), correctCategoryId: 'CON-04-E1-c2' },
      { id: 'CON-04-E1-i4', label: t("Calcular la estimación para cuentas incobrables", "Compute the allowance for doubtful accounts"), correctCategoryId: 'CON-04-E1-c2' },
      { id: 'CON-04-E1-i5', label: t("Presentar a una controladora y sus subsidiarias como un solo grupo", "Present a parent and its subsidiaries as a single group"), correctCategoryId: 'CON-04-E1-c3' },
      { id: 'CON-04-E1-i6', label: t("Registrar la compra de otra empresa (combinación de negocios)", "Record the purchase of another company (business combination)"), correctCategoryId: 'CON-04-E1-c3' },
    ],
    explanation: t(
      "Básica: el lenguaje contable (ecuación, cargos y abonos). Intermedia: valuación detallada de partidas (inventarios, incobrables). Avanzada: grupos y adquisiciones de empresas. Error común: poner los inventarios en básica; registrar una compra es básico, pero elegir y aplicar un método de costeo es intermedio.",
      "Basic: accounting language (equation, debits and credits). Intermediate: detailed measurement of items (inventories, doubtful accounts). Advanced: groups and acquisitions of companies. Common mistake: placing inventories in basic; recording a purchase is basic, but choosing and applying a costing method is intermediate.",
    ),
    difficulty: 1,
    points: 15,
    competency: 'financial-accounting-levels',
  },
  {
    id: 'CON-04-E2',
    level: 2,
    module: 'CON-04',
    kind: 'mcq',
    flavor: 'concept',
    prompt: t(
      "¿Qué distingue principalmente a la contabilidad financiera intermedia de la básica?",
      "What mainly distinguishes intermediate financial accounting from basic financial accounting?",
    ),
    options: [
      { id: 'CON-04-E2-a', text: t("Que en la intermedia ya no se usa la partida doble", "In intermediate accounting double entry is no longer used") },
      { id: 'CON-04-E2-b', text: t("Que se enfoca en cómo valuar con detalle cada activo y pasivo", "It focuses on how to measure each asset and liability in detail") },
      { id: 'CON-04-E2-c', text: t("Que solo sirve para calcular impuestos", "It is only used to compute taxes") },
      { id: 'CON-04-E2-d', text: t("Que se dedica a consolidar grupos de empresas", "It is devoted to consolidating groups of companies") },
    ],
    correctOptionId: 'CON-04-E2-b',
    explanation: t(
      "La intermedia profundiza en la valuación: inventarios, depreciación, incobrables, provisiones. La partida doble se sigue usando en todas las capas, los impuestos son tema de la contabilidad fiscal y la consolidación es avanzada. Error común: creer que cada capa reemplaza a la anterior; en realidad se construye sobre ella.",
      "Intermediate accounting goes deeper into measurement: inventories, depreciation, doubtful accounts, provisions. Double entry is used in every layer, taxes belong to tax accounting and consolidation is advanced. Common mistake: believing each layer replaces the previous one; it actually builds on it.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'financial-accounting-levels',
  },
  {
    id: 'CON-04-E3',
    level: 2,
    module: 'CON-04',
    kind: 'truefalse',
    flavor: 'concept',
    prompt: t(
      "Las operaciones en moneda extranjera, como una deuda en dólares con un proveedor, suelen estudiarse dentro de la contabilidad financiera avanzada.",
      "Foreign currency transactions, such as a dollar debt with a supplier, are usually studied within advanced financial accounting.",
    ),
    answer: true,
    explanation: t(
      "Verdadero. La moneda extranjera, la consolidación, las combinaciones de negocios, los instrumentos financieros y los arrendamientos son temas típicos de la capa avanzada. Error común: pensar que como el pago es una operación cotidiana es un tema básico; lo complejo es medir la diferencia cambiaria.",
      "True. Foreign currency, consolidation, business combinations, financial instruments and leases are typical topics of the advanced layer. Common mistake: thinking that because the payment is an everyday transaction it is a basic topic; the complex part is measuring the exchange difference.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'financial-accounting-levels',
  },
  {
    id: 'CON-04-E4',
    level: 2,
    module: 'CON-04',
    kind: 'fields',
    flavor: 'case',
    context: t(
      "Una tienda de pinturas tiene 80 cubetas a $30 cada una y compra 120 cubetas más a $35. En el mes vende 150 cubetas.",
      "A paint store has 80 buckets at $30 each and buys 120 more buckets at $35. During the month it sells 150 buckets.",
    ),
    prompt: t(
      "Con el método PEPS, calcula el costo de ventas de las 150 cubetas y el inventario final, en pesos.",
      "Using FIFO, compute the cost of sales of the 150 buckets and the ending inventory, in pesos.",
    ),
    fields: [
      { id: 'f1', label: t("Costo de ventas", "Cost of sales"), answer: 4850, unit: 'MXN', tolerance: { abs: 0.5 } },
      { id: 'f2', label: t("Inventario final", "Ending inventory"), answer: 1750, unit: 'MXN', tolerance: { abs: 0.5 } },
    ],
    explanation: t(
      "PEPS: salen primero las 80 de $30 = $2,400 y luego 70 de $35 = $2,450; costo de ventas $4,850. Quedan 50 × $35 = $1,750. Comprobación: $2,400 + $4,200 = $6,600 = $4,850 + $1,750. Error común: costear las 150 al precio más reciente ($5,250), que sería tratar como si salieran primero las últimas.",
      "FIFO: the 80 at $30 go first = $2,400, then 70 at $35 = $2,450; cost of sales $4,850. 50 × $35 = $1,750 remain. Check: $2,400 + $4,200 = $6,600 = $4,850 + $1,750. Common mistake: costing all 150 at the latest price ($5,250), which treats the last ones as going out first.",
    ),
    difficulty: 2,
    points: 15,
    competency: 'financial-accounting-levels',
  },
  {
    id: 'CON-04-E5',
    level: 2,
    module: 'CON-04',
    kind: 'numeric',
    flavor: 'case',
    context: t(
      "Una importadora de juguetes registra una deuda de USD 5,000 con un proveedor cuando el tipo de cambio es $17.00 por dólar (dato hipotético). La paga cuando el tipo de cambio es $17.40.",
      "A toy importer records a USD 5,000 debt with a supplier when the exchange rate is $17.00 per dollar (hypothetical). It pays it when the exchange rate is $17.40.",
    ),
    prompt: t(
      "¿De cuántos pesos es la pérdida cambiaria al pagar esa deuda en dólares?",
      "How many pesos is the foreign exchange loss when paying that dollar debt?",
    ),
    answer: 2000,
    unit: 'MXN',
    decimals: 0,
    tolerance: { abs: 0.5 },
    explanation: t(
      "Registrada: 5,000 × $17.00 = $85,000. Pagada: 5,000 × $17.40 = $87,000. Pérdida: $87,000 − $85,000 = $2,000 (o 5,000 × $0.40). Error común: responder solo la diferencia del tipo de cambio ($0.40) sin multiplicar por los dólares adeudados.",
      "Recorded: 5,000 × $17.00 = $85,000. Paid: 5,000 × $17.40 = $87,000. Loss: $87,000 − $85,000 = $2,000 (or 5,000 × $0.40). Common mistake: answering only the exchange-rate difference ($0.40) without multiplying by the dollars owed.",
    ),
    difficulty: 2,
    points: 15,
    competency: 'financial-accounting-levels',
  },
  {
    id: 'CON-04-E6',
    level: 2,
    module: 'CON-04',
    kind: 'multi',
    flavor: 'concept',
    prompt: t(
      "¿Cuáles de estos temas pertenecen a la contabilidad financiera intermedia? Selecciona todos los que apliquen.",
      "Which of these topics belong to intermediate financial accounting? Select all that apply.",
    ),
    options: [
      { id: 'CON-04-E6-a', text: t("Depreciación de maquinaria y edificios", "Depreciation of machinery and buildings") },
      { id: 'CON-04-E6-b', text: t("Provisiones por garantías", "Warranty provisions") },
      { id: 'CON-04-E6-c', text: t("Eliminación de ventas entre empresas de un grupo", "Elimination of sales between companies in a group") },
      { id: 'CON-04-E6-d', text: t("Préstamos bancarios con intereses", "Interest-bearing bank loans") },
      { id: 'CON-04-E6-e', text: t("Qué es una cuenta y qué es un cargo", "What an account is and what a debit is") },
    ],
    correctOptionIds: ['CON-04-E6-a', 'CON-04-E6-b', 'CON-04-E6-d'],
    explanation: t(
      "Depreciación, provisiones y préstamos con intereses son valuación detallada: capa intermedia. Eliminar ventas entre empresas del grupo es consolidación (avanzada) y qué es una cuenta o un cargo es básico. Error común: marcar la eliminación entre empresas por parecer un simple ajuste.",
      "Depreciation, provisions and interest-bearing loans are detailed measurement: the intermediate layer. Eliminating sales between group companies is consolidation (advanced), and what an account or a debit is belongs to basic. Common mistake: ticking the intercompany elimination because it looks like a simple adjustment.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'financial-accounting-levels',
  },

  // ───────────────────────────── CON-05 ─────────────────────────────
  {
    id: 'CON-05-E1',
    level: 2,
    module: 'CON-05',
    kind: 'mcq',
    flavor: 'concept',
    prompt: t(
      "Una empresa no sabe cómo valuar sus inventarios al cierre del año. ¿En qué serie de las NIF debe buscar la norma?",
      "A company does not know how to measure its inventories at year-end. In which NIF series should it look for the standard?",
    ),
    options: [
      { id: 'CON-05-E1-a', text: t("Serie A: marco conceptual", "Series A: conceptual framework") },
      { id: 'CON-05-E1-b', text: t("Serie B: normas sobre los estados financieros en conjunto", "Series B: standards on the financial statements as a whole") },
      { id: 'CON-05-E1-c', text: t("Serie C: normas de partidas específicas", "Series C: standards on specific items") },
      { id: 'CON-05-E1-d', text: t("Serie E: actividades especializadas", "Series E: specialized activities") },
    ],
    correctOptionId: 'CON-05-E1-c',
    explanation: t(
      "Los inventarios son una partida específica del balance, como el efectivo o las propiedades: serie C. La serie A da las ideas base, la B trata los estados completos y la E sectores especiales. Error común: elegir la serie A porque \"todo empieza ahí\"; el marco conceptual no detalla cómo valuar inventarios.",
      "Inventories are a specific balance sheet item, like cash or property: series C. Series A gives the base ideas, B deals with complete statements and E with special sectors. Common mistake: choosing series A because \"everything starts there\"; the conceptual framework does not detail how to measure inventories.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'mexican-gaap-nif',
  },
  {
    id: 'CON-05-E2',
    level: 2,
    module: 'CON-05',
    kind: 'classify',
    flavor: 'concept',
    prompt: t(
      "Relaciona cada situación con el postulado básico de las NIF que aplica.",
      "Match each situation with the NIF basic postulate that applies.",
    ),
    categories: [
      { id: 'CON-05-E2-c1', label: t("Entidad económica", "Economic entity") },
      { id: 'CON-05-E2-c2', label: t("Negocio en marcha", "Going concern") },
      { id: 'CON-05-E2-c3', label: t("Devengación contable", "Accrual accounting") },
    ],
    items: [
      { id: 'CON-05-E2-i1', label: t("El dueño paga su viaje de vacaciones con dinero de la empresa y no se registra como gasto del negocio", "The owner pays for his vacation with company money and it is not recorded as a business expense"), correctCategoryId: 'CON-05-E2-c1' },
      { id: 'CON-05-E2-i2', label: t("La casa de la socia no aparece entre los activos de su despacho", "The partner's house does not appear among her firm's assets"), correctCategoryId: 'CON-05-E2-c1' },
      { id: 'CON-05-E2-i3', label: t("Las máquinas se deprecian en 10 años porque se supone que la fábrica seguirá operando", "Machines are depreciated over 10 years because the factory is assumed to keep operating"), correctCategoryId: 'CON-05-E2-c2' },
      { id: 'CON-05-E2-i4', label: t("Los activos no se valúan a precio de remate, porque nada indica que la empresa vaya a cerrar", "Assets are not measured at liquidation prices, because nothing indicates the company will close"), correctCategoryId: 'CON-05-E2-c2' },
      { id: 'CON-05-E2-i5', label: t("Los sueldos de diciembre se registran en diciembre aunque se paguen en enero", "December salaries are recorded in December even though they are paid in January"), correctCategoryId: 'CON-05-E2-c3' },
      { id: 'CON-05-E2-i6', label: t("Una venta a crédito se registra como ingreso al entregar la mercancía, no al cobrar", "A credit sale is recorded as revenue on delivering the goods, not on collecting"), correctCategoryId: 'CON-05-E2-c3' },
    ],
    explanation: t(
      "Entidad económica: separar lo del negocio de lo del dueño. Negocio en marcha: suponer que la empresa seguirá operando, por eso se reparte el costo de los activos en años y no se valúan como remate. Devengación: registrar cuando ocurre, no cuando se cobra o paga. Error común: confundir devengación con el momento del pago.",
      "Economic entity: separating the business from the owner. Going concern: assuming the company will keep operating, which is why asset costs are spread over years and not measured as a liquidation. Accrual: recording when it happens, not when cash is collected or paid. Common mistake: confusing accrual with the moment of payment.",
    ),
    difficulty: 2,
    points: 15,
    competency: 'mexican-gaap-nif',
  },
  {
    id: 'CON-05-E3',
    level: 2,
    module: 'CON-05',
    kind: 'truefalse',
    flavor: 'concept',
    prompt: t(
      "Si ninguna NIF resuelve un caso, la empresa puede aplicar de forma supletoria otra norma reconocida, empezando por las NIIF.",
      "If no NIF resolves a case, the company may apply another recognized standard on a supplementary basis, starting with IFRS.",
    ),
    answer: true,
    explanation: t(
      "Verdadero. La supletoriedad permite llenar huecos de las NIF con otras normas reconocidas, en primer lugar las NIIF, mientras no contradigan el marco conceptual. Error común: creer que si no hay norma la empresa puede registrar como quiera.",
      "True. Supplementary application lets NIF gaps be filled with other recognized standards, IFRS first, as long as they do not contradict the conceptual framework. Common mistake: believing that if there is no standard the company may record however it likes.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'mexican-gaap-nif',
  },
  {
    id: 'CON-05-E4',
    level: 2,
    module: 'CON-05',
    kind: 'numeric',
    flavor: 'case',
    context: t(
      "Una empresa de software cobra el 1 de septiembre $24,000 por 12 meses de soporte técnico, de septiembre a agosto del año siguiente.",
      "A software company collects $24,000 on September 1 for 12 months of technical support, from September to August of the following year.",
    ),
    prompt: t(
      "Aplicando la devengación contable, ¿cuánto ingreso debe reconocer al 31 de diciembre? Responde en pesos.",
      "Applying accrual accounting, how much revenue should it recognize by December 31? Answer in pesos.",
    ),
    answer: 8000,
    unit: 'MXN',
    decimals: 0,
    tolerance: { abs: 0.5 },
    explanation: t(
      "Ingreso mensual: $24,000 ÷ 12 = $2,000. De septiembre a diciembre son 4 meses: 4 × $2,000 = $8,000. Los $16,000 restantes siguen siendo un anticipo de clientes (pasivo). Error común: reconocer los $24,000 completos porque ya se cobraron.",
      "Monthly revenue: $24,000 ÷ 12 = $2,000. September through December is 4 months: 4 × $2,000 = $8,000. The remaining $16,000 is still a customer advance (liability). Common mistake: recognizing the full $24,000 because it was already collected.",
    ),
    difficulty: 2,
    points: 15,
    competency: 'mexican-gaap-nif',
  },
  {
    id: 'CON-05-E5',
    level: 2,
    module: 'CON-05',
    kind: 'journal',
    flavor: 'case',
    prompt: t(
      "Esa empresa de software recibe en su cuenta bancaria los $24,000 por el soporte de 12 meses que todavía no presta. Registra el asiento del cobro (sin IVA).",
      "That software company receives in its bank account the $24,000 for 12 months of support it has not yet provided. Record the collection entry (no VAT).",
    ),
    accountChoices: ['1102', '1104', '2107', '4102', '3101', '2101'],
    expected: [
      { accountCode: '1102', side: 'D', amount: 24000 },
      { accountCode: '2107', side: 'C', amount: 24000 },
    ],
    explanation: t(
      "Bancos (activo) aumenta → cargo $24,000. Como el servicio aún no se presta, la empresa le debe el soporte al cliente: abono a Anticipos de clientes (pasivo) $24,000. El ingreso se reconoce mes a mes conforme se presta. Error común: abonar a Ingresos por servicios en el momento del cobro, lo que viola la devengación.",
      "Bank (asset) increases → debit $24,000. Since the service has not been provided yet, the company owes the support to the customer: credit Customer advances (liability) $24,000. Revenue is recognized month by month as it is provided. Common mistake: crediting Service revenue at collection, which violates accrual accounting.",
    ),
    difficulty: 2,
    points: 15,
    competency: 'mexican-gaap-nif',
  },
  {
    id: 'CON-05-E6',
    level: 2,
    module: 'CON-05',
    kind: 'multi',
    flavor: 'concept',
    prompt: t(
      "Según el marco conceptual de las NIF, ¿qué características debe tener la información financiera para ser útil? Selecciona todas las que apliquen.",
      "Under the NIF conceptual framework, which characteristics must financial information have to be useful? Select all that apply.",
    ),
    options: [
      { id: 'CON-05-E6-a', text: t("Confiabilidad", "Reliability") },
      { id: 'CON-05-E6-b', text: t("Relevancia", "Relevance") },
      { id: 'CON-05-E6-c', text: t("Rentabilidad", "Profitability") },
      { id: 'CON-05-E6-d', text: t("Comprensibilidad", "Understandability") },
      { id: 'CON-05-E6-e', text: t("Comparabilidad", "Comparability") },
      { id: 'CON-05-E6-f', text: t("Que siempre muestre utilidades", "Always showing a profit") },
    ],
    correctOptionIds: ['CON-05-E6-a', 'CON-05-E6-b', 'CON-05-E6-d', 'CON-05-E6-e'],
    explanation: t(
      "Las características de la información útil son confiabilidad, relevancia, comprensibilidad y comparabilidad. La rentabilidad es un resultado del negocio, no una cualidad de la información, y la información debe mostrar pérdidas cuando las hay. Error común: marcar rentabilidad por confundir la calidad del reporte con la del negocio.",
      "The characteristics of useful information are reliability, relevance, understandability and comparability. Profitability is a business outcome, not a quality of information, and information must show losses when there are any. Common mistake: ticking profitability by confusing the quality of the report with that of the business.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'mexican-gaap-nif',
  },

  // ───────────────────────────── CON-06 ─────────────────────────────
  {
    id: 'CON-06-E1',
    level: 2,
    module: 'CON-06',
    kind: 'mcq',
    flavor: 'concept',
    prompt: t(
      "¿Qué organismo emite las Normas Internacionales de Información Financiera (NIIF/IFRS)?",
      "Which body issues the International Financial Reporting Standards (IFRS)?",
    ),
    options: [
      { id: 'CON-06-E1-a', text: t("El IASB (Consejo de Normas Internacionales de Contabilidad)", "The IASB (International Accounting Standards Board)") },
      { id: 'CON-06-E1-b', text: t("El CINIF", "CINIF") },
      { id: 'CON-06-E1-c', text: t("El FASB de Estados Unidos", "The US FASB") },
      { id: 'CON-06-E1-d', text: t("La CNBV", "The CNBV") },
    ],
    correctOptionId: 'CON-06-E1-a',
    explanation: t(
      "Las NIIF las emite el IASB, parte de la Fundación IFRS. El CINIF emite las NIF mexicanas, el FASB emite las normas de Estados Unidos (US GAAP) y la CNBV es la autoridad mexicana que exige NIIF a las emisoras, pero no las escribe. Error común: confundir a quien exige usar una norma con quien la emite.",
      "IFRS are issued by the IASB, part of the IFRS Foundation. CINIF issues the Mexican NIF, the FASB issues US standards (US GAAP) and the CNBV is the Mexican authority that requires IFRS from listed issuers, but does not write them. Common mistake: confusing who requires a standard with who issues it.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'ifrs',
  },
  {
    id: 'CON-06-E2',
    level: 2,
    module: 'CON-06',
    kind: 'truefalse',
    flavor: 'concept',
    prompt: t(
      "En México, todas las empresas, incluso una pequeña tlapalería, están obligadas a preparar sus estados financieros con NIIF.",
      "In Mexico, every company, even a small hardware store, is required to prepare its financial statements under IFRS.",
    ),
    answer: false,
    explanation: t(
      "Falso. La CNBV exige, en general, NIIF a las empresas que cotizan en bolsa. La mayoría de las empresas privadas, sobre todo pequeñas y medianas, usan las NIF mexicanas. Error común: pensar que por ser \"internacionales\" las NIIF aplican a todos.",
      "False. The CNBV generally requires IFRS from listed companies. Most private companies, especially small and medium ones, use the Mexican NIF. Common mistake: thinking that because they are \"international\" IFRS apply to everyone.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'ifrs',
  },
  {
    id: 'CON-06-E3',
    level: 2,
    module: 'CON-06',
    kind: 'classify',
    flavor: 'concept',
    prompt: t(
      "Indica qué norma internacional regula principalmente cada situación.",
      "Indicate which international standard mainly governs each situation.",
    ),
    categories: [
      { id: 'CON-06-E3-c1', label: t("NIIF 15: ingresos de contratos con clientes", "IFRS 15: revenue from contracts with customers") },
      { id: 'CON-06-E3-c2', label: t("NIIF 16: arrendamientos", "IFRS 16: leases") },
      { id: 'CON-06-E3-c3', label: t("NIC 2: inventarios", "IAS 2: inventories") },
    ],
    items: [
      { id: 'CON-06-E3-i1', label: t("Un gimnasio decide cuándo reconocer el ingreso de membresías anuales", "A gym decides when to recognize revenue from annual memberships"), correctCategoryId: 'CON-06-E3-c1' },
      { id: 'CON-06-E3-i2', label: t("Un fabricante vende una máquina con instalación incluida y reparte el precio", "A manufacturer sells a machine with installation included and allocates the price"), correctCategoryId: 'CON-06-E3-c1' },
      { id: 'CON-06-E3-i3', label: t("Una empresa renta una bodega por 5 años", "A company rents a warehouse for 5 years"), correctCategoryId: 'CON-06-E3-c2' },
      { id: 'CON-06-E3-i4', label: t("Una aerolínea renta aviones por 10 años", "An airline rents aircraft for 10 years"), correctCategoryId: 'CON-06-E3-c2' },
      { id: 'CON-06-E3-i5', label: t("Una ferretería compara el costo de sus tornillos con su valor neto de realización", "A hardware store compares the cost of its screws with their net realizable value"), correctCategoryId: 'CON-06-E3-c3' },
      { id: 'CON-06-E3-i6', label: t("Una tienda elige entre PEPS y costo promedio para su mercancía", "A store chooses between FIFO and average cost for its goods"), correctCategoryId: 'CON-06-E3-c3' },
    ],
    explanation: t(
      "NIIF 15 decide cuándo y por cuánto reconocer ingresos (membresías, paquetes). NIIF 16 trata las rentas de largo plazo (bodega, aviones). NIC 2 trata el costo y la valuación de la mercancía. Error común: poner la renta de la bodega en ingresos; para quien renta, NIIF 16 la convierte en activo y pasivo.",
      "IFRS 15 decides when and for how much to recognize revenue (memberships, bundles). IFRS 16 deals with long-term rentals (warehouse, aircraft). IAS 2 deals with the cost and measurement of goods. Common mistake: placing the warehouse rental under revenue; for the lessee, IFRS 16 turns it into an asset and a liability.",
    ),
    difficulty: 2,
    points: 15,
    competency: 'ifrs',
  },
  {
    id: 'CON-06-E4',
    level: 2,
    module: 'CON-06',
    kind: 'fields',
    flavor: 'case',
    context: t(
      "Una tienda de tecnología vende por $18,000 un paquete con una laptop y 2 años de soporte. Por separado cobraría $16,000 por la laptop y $4,000 por el soporte.",
      "A tech store sells for $18,000 a bundle with a laptop and 2 years of support. Separately it would charge $16,000 for the laptop and $4,000 for the support.",
    ),
    prompt: t(
      "Según la NIIF 15, asigna el precio del paquete a cada obligación de desempeño, en pesos.",
      "Under IFRS 15, allocate the bundle price to each performance obligation, in pesos.",
    ),
    fields: [
      { id: 'f1', label: t("Ingreso asignado a la laptop", "Revenue allocated to the laptop"), answer: 14400, unit: 'MXN', tolerance: { abs: 0.5 } },
      { id: 'f2', label: t("Ingreso asignado al soporte", "Revenue allocated to the support"), answer: 3600, unit: 'MXN', tolerance: { abs: 0.5 } },
    ],
    explanation: t(
      "Precios independientes: $16,000 + $4,000 = $20,000. Laptop: $18,000 × 16/20 = $14,400. Soporte: $18,000 × 4/20 = $3,600. Suman $18,000. Error común: dejar la laptop en $16,000 y el soporte en $2,000, cargando todo el descuento a una sola promesa.",
      "Standalone prices: $16,000 + $4,000 = $20,000. Laptop: $18,000 × 16/20 = $14,400. Support: $18,000 × 4/20 = $3,600. Total $18,000. Common mistake: keeping the laptop at $16,000 and the support at $2,000, putting the whole discount on one promise.",
    ),
    difficulty: 2,
    points: 20,
    competency: 'ifrs',
  },
  {
    id: 'CON-06-E5',
    level: 2,
    module: 'CON-06',
    kind: 'numeric',
    flavor: 'case',
    context: t(
      "Una distribuidora tiene celulares de un modelo anterior con costo de $120,000. Espera venderlos en $110,000 y pagar $6,000 de comisiones y envío para venderlos.",
      "A distributor has previous-model phones with a cost of $120,000. It expects to sell them for $110,000 and pay $6,000 in commissions and shipping to sell them.",
    ),
    prompt: t(
      "Según la NIC 2, ¿de cuánto es la baja de valor del inventario que debe reconocer? Responde en pesos.",
      "Under IAS 2, how much is the inventory write-down it must recognize? Answer in pesos.",
    ),
    answer: 16000,
    unit: 'MXN',
    decimals: 0,
    tolerance: { abs: 0.5 },
    explanation: t(
      "Valor neto de realización: $110,000 − $6,000 = $104,000. El menor entre costo ($120,000) y VNR ($104,000) es $104,000. Baja de valor: $120,000 − $104,000 = $16,000. Error común: olvidar restar los costos para vender y responder $10,000.",
      "Net realizable value: $110,000 − $6,000 = $104,000. The lower of cost ($120,000) and NRV ($104,000) is $104,000. Write-down: $120,000 − $104,000 = $16,000. Common mistake: forgetting to subtract the costs to sell and answering $10,000.",
    ),
    difficulty: 2,
    points: 15,
    competency: 'ifrs',
  },
  {
    id: 'CON-06-E6',
    level: 2,
    module: 'CON-06',
    kind: 'mcq',
    flavor: 'concept',
    prompt: t(
      "¿Cuál es el primer paso del modelo de cinco pasos de la NIIF 15?",
      "What is the first step of the IFRS 15 five-step model?",
    ),
    options: [
      { id: 'CON-06-E6-a', text: t("Identificar el contrato con el cliente", "Identify the contract with the customer") },
      { id: 'CON-06-E6-b', text: t("Asignar el precio a cada obligación de desempeño", "Allocate the price to each performance obligation") },
      { id: 'CON-06-E6-c', text: t("Reconocer el ingreso cuando se cobra el dinero", "Recognize revenue when the money is collected") },
      { id: 'CON-06-E6-d', text: t("Determinar el precio de la transacción", "Determine the transaction price") },
    ],
    correctOptionId: 'CON-06-E6-a',
    explanation: t(
      "El orden es: 1) identificar el contrato, 2) identificar las obligaciones de desempeño, 3) determinar el precio, 4) asignarlo y 5) reconocer el ingreso al cumplir cada obligación. Reconocer al cobrar no es ningún paso: el ingreso depende de cumplir la promesa, no del cobro. Error común: empezar por el precio sin haber confirmado que existe un contrato.",
      "The order is: 1) identify the contract, 2) identify the performance obligations, 3) determine the price, 4) allocate it and 5) recognize revenue when each obligation is satisfied. Recognizing on collection is not a step: revenue depends on fulfilling the promise, not on collection. Common mistake: starting with the price before confirming a contract exists.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'ifrs',
  },

  // ───────────────────────────── CON-07 ─────────────────────────────
  {
    id: 'CON-07-E1',
    level: 2,
    module: 'CON-07',
    kind: 'classify',
    flavor: 'statement',
    prompt: t(
      "Al elaborar los estados financieros desde la balanza, ¿a qué estado se lleva el saldo de cada cuenta?",
      "When preparing the financial statements from the trial balance, to which statement does each account balance go?",
    ),
    categories: [
      { id: 'CON-07-E1-c1', label: t("Estado de situación financiera", "Statement of financial position") },
      { id: 'CON-07-E1-c2', label: t("Estado de resultado integral", "Statement of comprehensive income") },
    ],
    items: [
      { id: 'CON-07-E1-i1', label: t("Clientes", "Accounts receivable"), correctCategoryId: 'CON-07-E1-c1' },
      { id: 'CON-07-E1-i2', label: t("Proveedores", "Accounts payable"), correctCategoryId: 'CON-07-E1-c1' },
      { id: 'CON-07-E1-i3', label: t("Depreciación acumulada", "Accumulated depreciation"), correctCategoryId: 'CON-07-E1-c1' },
      { id: 'CON-07-E1-i4', label: t("Costo de ventas", "Cost of goods sold"), correctCategoryId: 'CON-07-E1-c2' },
      { id: 'CON-07-E1-i5', label: t("Gasto por depreciación", "Depreciation expense"), correctCategoryId: 'CON-07-E1-c2' },
      { id: 'CON-07-E1-i6', label: t("Ingreso por intereses", "Interest income"), correctCategoryId: 'CON-07-E1-c2' },
    ],
    explanation: t(
      "Activos, pasivos y capital (incluida la depreciación acumulada, que resta al activo fijo) van al balance. Ingresos, costos y gastos del periodo (incluido el gasto por depreciación del año) van al estado de resultados. Error común: mandar las dos cuentas de depreciación al mismo estado; la acumulada es saldo de balance y el gasto es del periodo.",
      "Assets, liabilities and equity (including accumulated depreciation, which reduces fixed assets) go to the balance sheet. Revenue, costs and expenses for the period (including the year's depreciation expense) go to the income statement. Common mistake: sending both depreciation accounts to the same statement; accumulated depreciation is a balance sheet balance and the expense belongs to the period.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'financial-statements-presentation',
  },
  {
    id: 'CON-07-E2',
    level: 2,
    module: 'CON-07',
    kind: 'fields',
    flavor: 'statement',
    context: t(
      "Datos del año de una comercializadora: ventas $850,000; devoluciones sobre ventas $50,000; costo de ventas $480,000; gastos de operación $190,000; gasto por intereses $20,000; impuestos a la utilidad $33,000.",
      "A trading company's figures for the year: sales $850,000; sales returns $50,000; cost of sales $480,000; operating expenses $190,000; interest expense $20,000; income taxes $33,000.",
    ),
    prompt: t(
      "Elabora los niveles del estado de resultados de la comercializadora, en pesos.",
      "Prepare the trading company's income statement levels, in pesos.",
    ),
    fields: [
      { id: 'f1', label: t("Utilidad bruta", "Gross profit"), answer: 320000, unit: 'MXN', tolerance: { abs: 0.5 } },
      { id: 'f2', label: t("Utilidad de operación", "Operating profit"), answer: 130000, unit: 'MXN', tolerance: { abs: 0.5 } },
      { id: 'f3', label: t("Utilidad neta", "Net profit"), answer: 77000, unit: 'MXN', tolerance: { abs: 0.5 } },
    ],
    explanation: t(
      "Ventas netas: 850,000 − 50,000 = 800,000. Utilidad bruta: 800,000 − 480,000 = 320,000. De operación: 320,000 − 190,000 = 130,000. Antes de impuestos: 130,000 − 20,000 = 110,000. Neta: 110,000 − 33,000 = 77,000. Error común: olvidar las devoluciones y obtener una utilidad bruta de 370,000.",
      "Net sales: 850,000 − 50,000 = 800,000. Gross profit: 800,000 − 480,000 = 320,000. Operating: 320,000 − 190,000 = 130,000. Before taxes: 130,000 − 20,000 = 110,000. Net: 110,000 − 33,000 = 77,000. Common mistake: forgetting the returns and getting a gross profit of 370,000.",
    ),
    difficulty: 2,
    points: 20,
    competency: 'financial-statements-presentation',
  },
  {
    id: 'CON-07-E3',
    level: 2,
    module: 'CON-07',
    kind: 'numeric',
    flavor: 'case',
    context: t(
      "Una fábrica de muebles tuvo en el año: utilidad neta $120,000; depreciación $30,000; aumento de inventarios $25,000; disminución de clientes $10,000; disminución de proveedores $8,000.",
      "A furniture factory had during the year: net profit $120,000; depreciation $30,000; increase in inventories $25,000; decrease in receivables $10,000; decrease in payables $8,000.",
    ),
    prompt: t(
      "Con el método indirecto, ¿cuál fue el flujo de efectivo de las actividades de operación de la fábrica? Responde en pesos.",
      "Using the indirect method, what was the factory's cash flow from operating activities? Answer in pesos.",
    ),
    answer: 127000,
    unit: 'MXN',
    decimals: 0,
    tolerance: { abs: 0.5 },
    explanation: t(
      "120,000 + 30,000 (depreciación, no usó efectivo) − 25,000 (más inventario: salió dinero) + 10,000 (clientes bajaron: se cobró) − 8,000 (proveedores bajaron: se pagó) = 127,000. Error común: sumar el aumento de inventarios como si fuera una entrada de efectivo.",
      "120,000 + 30,000 (depreciation, used no cash) − 25,000 (more inventory: cash went out) + 10,000 (receivables fell: cash collected) − 8,000 (payables fell: cash paid) = 127,000. Common mistake: adding the inventory increase as if it were a cash inflow.",
    ),
    difficulty: 2,
    points: 20,
    competency: 'financial-statements-presentation',
  },
  {
    id: 'CON-07-E4',
    level: 2,
    module: 'CON-07',
    kind: 'mcq',
    flavor: 'concept',
    prompt: t(
      "¿Cuál de los estados financieros básicos presenta la situación de la empresa en una fecha determinada, y no por un periodo?",
      "Which of the basic financial statements presents the company's position at a specific date, rather than for a period?",
    ),
    options: [
      { id: 'CON-07-E4-a', text: t("Estado de resultado integral", "Statement of comprehensive income") },
      { id: 'CON-07-E4-b', text: t("Estado de flujos de efectivo", "Cash flow statement") },
      { id: 'CON-07-E4-c', text: t("Estado de situación financiera", "Statement of financial position") },
      { id: 'CON-07-E4-d', text: t("Estado de cambios en el capital contable", "Statement of changes in equity") },
    ],
    correctOptionId: 'CON-07-E4-c',
    explanation: t(
      "El estado de situación financiera es una foto \"al 31 de diciembre\": saldos de activos, pasivos y capital en ese día. Los otros tres explican qué pasó \"del 1 de enero al 31 de diciembre\". Error común: elegir el de cambios en el capital porque muestra el capital, pero lo hace como movimientos del periodo.",
      "The statement of financial position is a snapshot \"as of December 31\": balances of assets, liabilities and equity on that day. The other three explain what happened \"from January 1 to December 31\". Common mistake: choosing changes in equity because it shows equity, but it does so as movements over the period.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'financial-statements-presentation',
  },
  {
    id: 'CON-07-E5',
    level: 2,
    module: 'CON-07',
    kind: 'truefalse',
    flavor: 'concept',
    prompt: t(
      "Las notas a los estados financieros son un anexo opcional que la empresa puede omitir sin que sus estados queden incompletos.",
      "The notes to the financial statements are an optional appendix the company may omit without its statements being incomplete.",
    ),
    answer: false,
    explanation: t(
      "Falso. Las notas son parte integral de los estados financieros: explican políticas contables, el detalle de cifras importantes y riesgos. Sin ellas, el usuario no puede interpretar bien los números. Error común: verlas como \"letra chiquita\" sin importancia.",
      "False. The notes are an integral part of the financial statements: they explain accounting policies, the detail of significant figures and risks. Without them, users cannot properly interpret the numbers. Common mistake: seeing them as unimportant \"fine print\".",
    ),
    difficulty: 1,
    points: 10,
    competency: 'financial-statements-presentation',
  },
  {
    id: 'CON-07-E6',
    level: 2,
    module: 'CON-07',
    kind: 'multi',
    flavor: 'statement',
    prompt: t(
      "En un balance clasificado, ¿cuáles de estas cuentas se presentan como activo circulante? Selecciona todas las que apliquen.",
      "In a classified balance sheet, which of these accounts are presented as current assets? Select all that apply.",
    ),
    options: [
      { id: 'CON-07-E6-a', text: t("Bancos", "Bank") },
      { id: 'CON-07-E6-b', text: t("Inventarios", "Inventory") },
      { id: 'CON-07-E6-c', text: t("Edificios", "Buildings") },
      { id: 'CON-07-E6-d', text: t("Clientes", "Accounts receivable") },
      { id: 'CON-07-E6-e', text: t("Proveedores", "Accounts payable") },
      { id: 'CON-07-E6-f', text: t("Equipo de transporte", "Vehicles") },
    ],
    correctOptionIds: ['CON-07-E6-a', 'CON-07-E6-b', 'CON-07-E6-d'],
    explanation: t(
      "Bancos, inventarios y clientes se convierten en efectivo o se usan dentro de un año o del ciclo normal: son circulantes. Edificios y equipo de transporte son activos no circulantes, y Proveedores es un pasivo, no un activo. Error común: marcar Proveedores porque es \"de corto plazo\"; es corto plazo, pero del lado del pasivo.",
      "Bank, inventory and receivables turn into cash or are used within a year or the normal cycle: they are current. Buildings and vehicles are non-current assets, and Accounts payable is a liability, not an asset. Common mistake: ticking Accounts payable because it is \"short term\"; it is short term, but on the liability side.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'financial-statements-presentation',
  },

  // ───────────────────────────── CON-08 ─────────────────────────────
  {
    id: 'CON-08-E1',
    level: 2,
    module: 'CON-08',
    kind: 'journal',
    flavor: 'case',
    prompt: t(
      "Al cierre del año, una distribuidora de abarrotes estima que $8,000 de sus cuentas de clientes no se cobrarán. Registra el asiento de la estimación.",
      "At year-end, a grocery distributor estimates that $8,000 of its customer accounts will not be collected. Record the allowance entry.",
    ),
    accountChoices: ['1101', '1104', '1105', '2109', '4101', '6107'],
    expected: [
      { accountCode: '6107', side: 'D', amount: 8000 },
      { accountCode: '1105', side: 'C', amount: 8000 },
    ],
    explanation: t(
      "Se reconoce el gasto del periodo: cargo a Gasto por cuentas incobrables $8,000. Como aún no se sabe qué cliente no pagará, no se abona a Clientes sino a Estimación para cuentas incobrables (cuenta que resta al activo) $8,000. Error común: abonar directamente a Clientes, como si ya se supiera exactamente quién no pagará.",
      "The period's expense is recognized: debit Bad debt expense $8,000. Since it is not yet known which customer will not pay, Accounts receivable is not credited; instead credit Allowance for doubtful accounts (an account that reduces the asset) $8,000. Common mistake: crediting Accounts receivable directly, as if it were already known exactly who will not pay.",
    ),
    difficulty: 2,
    points: 15,
    competency: 'assets-liabilities-equity',
  },
  {
    id: 'CON-08-E2',
    level: 2,
    module: 'CON-08',
    kind: 'numeric',
    flavor: 'case',
    context: t(
      "Una imprenta compra una máquina de $250,000. Estima un valor residual de $25,000 y una vida útil de 9 años. Usa línea recta.",
      "A print shop buys a $250,000 machine. It estimates a $25,000 residual value and a 9-year useful life. It uses straight line.",
    ),
    prompt: t(
      "¿Cuál es el valor en libros de la máquina de la imprenta al final del tercer año? Responde en pesos.",
      "What is the print shop machine's book value at the end of the third year? Answer in pesos.",
    ),
    answer: 175000,
    unit: 'MXN',
    decimals: 0,
    tolerance: { abs: 0.5 },
    explanation: t(
      "Depreciación anual: (250,000 − 25,000) ÷ 9 = 25,000. Acumulada a 3 años: 75,000. Valor en libros: 250,000 − 75,000 = 175,000. Error común: restar el valor residual al final (175,000 − 25,000 = 150,000); el residual ya se descontó al calcular la depreciación.",
      "Annual depreciation: (250,000 − 25,000) ÷ 9 = 25,000. Accumulated after 3 years: 75,000. Book value: 250,000 − 75,000 = 175,000. Common mistake: subtracting the residual value again at the end (175,000 − 25,000 = 150,000); the residual was already taken out when computing depreciation.",
    ),
    difficulty: 2,
    points: 15,
    competency: 'assets-liabilities-equity',
  },
  {
    id: 'CON-08-E3',
    level: 2,
    module: 'CON-08',
    kind: 'journal',
    flavor: 'case',
    prompt: t(
      "Una mueblería vendió este año salas con garantía de un año. Por experiencia, estima que gastará $15,000 en reparaciones por esas garantías. Registra la provisión al cierre.",
      "A furniture store sold living-room sets this year with a one-year warranty. Based on experience, it estimates it will spend $15,000 on repairs under those warranties. Record the provision at year-end.",
    ),
    accountChoices: ['1102', '2101', '2109', '6106', '6109', '4103'],
    expected: [
      { accountCode: '6109', side: 'D', amount: 15000 },
      { accountCode: '2109', side: 'C', amount: 15000 },
    ],
    explanation: t(
      "Hay obligación presente (garantías de ventas ya hechas), salida probable y monto estimable: se reconoce la provisión. Cargo a Gasto por provisiones $15,000 y abono a Provisiones (pasivo) $15,000. Error común: esperar a pagar las reparaciones para registrar el gasto, lo que deja el gasto en un año distinto al de la venta.",
      "There is a present obligation (warranties on sales already made), a probable outflow and an estimable amount: the provision is recognized. Debit Provision expense $15,000 and credit Provisions (liability) $15,000. Common mistake: waiting until repairs are paid to record the expense, which puts the expense in a different year from the sale.",
    ),
    difficulty: 2,
    points: 15,
    competency: 'assets-liabilities-equity',
  },
  {
    id: 'CON-08-E4',
    level: 2,
    module: 'CON-08',
    kind: 'classify',
    flavor: 'concept',
    prompt: t(
      "Clasifica cada partida del capital contable como capital contribuido o capital ganado.",
      "Classify each equity item as contributed capital or earned capital.",
    ),
    categories: [
      { id: 'CON-08-E4-c1', label: t("Capital contribuido", "Contributed capital") },
      { id: 'CON-08-E4-c2', label: t("Capital ganado", "Earned capital") },
    ],
    items: [
      { id: 'CON-08-E4-i1', label: t("Capital social", "Share capital"), correctCategoryId: 'CON-08-E4-c1' },
      { id: 'CON-08-E4-i2', label: t("Aportaciones para futuros aumentos de capital", "Contributions for future capital increases"), correctCategoryId: 'CON-08-E4-c1' },
      { id: 'CON-08-E4-i3', label: t("Prima en venta de acciones", "Share premium"), correctCategoryId: 'CON-08-E4-c1' },
      { id: 'CON-08-E4-i4', label: t("Utilidades retenidas", "Retained earnings"), correctCategoryId: 'CON-08-E4-c2' },
      { id: 'CON-08-E4-i5', label: t("Reserva legal", "Legal reserve"), correctCategoryId: 'CON-08-E4-c2' },
      { id: 'CON-08-E4-i6', label: t("Utilidad del ejercicio", "Profit for the year"), correctCategoryId: 'CON-08-E4-c2' },
    ],
    explanation: t(
      "Contribuido: lo que pusieron los socios (capital social, aportaciones para futuros aumentos, prima en venta de acciones). Ganado: lo que generó el negocio y no repartió (utilidades retenidas, utilidad del ejercicio y reservas que salen de ellas). Error común: poner la reserva legal como contribuida; se forma separando utilidades, no con nuevas aportaciones.",
      "Contributed: what the partners put in (share capital, contributions for future increases, share premium). Earned: what the business generated and did not distribute (retained earnings, profit for the year and reserves set aside from them). Common mistake: classifying the legal reserve as contributed; it is formed by setting aside profits, not by new contributions.",
    ),
    difficulty: 1,
    points: 15,
    competency: 'assets-liabilities-equity',
  },
  {
    id: 'CON-08-E5',
    level: 2,
    module: 'CON-08',
    kind: 'numeric',
    flavor: 'case',
    context: t(
      "Una sociedad anónima obtuvo una utilidad neta de $360,000 en el año. Su reserva legal todavía no llega a la quinta parte del capital social.",
      "A corporation earned a net profit of $360,000 for the year. Its legal reserve has not yet reached one fifth of share capital.",
    ),
    prompt: t(
      "¿Cuál es el monto mínimo que debe separar para la reserva legal, considerando el 5% de la utilidad? Responde en pesos.",
      "What is the minimum amount it must set aside for the legal reserve, using 5% of profit? Answer in pesos.",
    ),
    answer: 18000,
    unit: 'MXN',
    decimals: 0,
    tolerance: { abs: 0.5 },
    explanation: t(
      "5% × 360,000 = 18,000. Se separa cada año hasta que la reserva alcance la quinta parte del capital social. Error común: calcular el 20% (72,000), confundiendo el tope de la reserva con el porcentaje anual.",
      "5% × 360,000 = 18,000. It is set aside every year until the reserve reaches one fifth of share capital. Common mistake: computing 20% (72,000), confusing the reserve's cap with the annual percentage.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'assets-liabilities-equity',
  },
  {
    id: 'CON-08-E6',
    level: 2,
    module: 'CON-08',
    kind: 'mcq',
    flavor: 'concept',
    prompt: t(
      "¿En qué caso debe una empresa reconocer una provisión en su balance?",
      "In which case must a company recognize a provision on its balance sheet?",
    ),
    options: [
      { id: 'CON-08-E6-a', text: t("Cuando quiere apartar dinero por si algún día hay una crisis", "When it wants to set money aside in case there is a crisis someday") },
      { id: 'CON-08-E6-b', text: t("Cuando hay una obligación presente por un hecho pasado, la salida de recursos es probable y el monto se puede estimar", "When there is a present obligation from a past event, the outflow of resources is probable and the amount can be estimated") },
      { id: 'CON-08-E6-c', text: t("Solo cuando ya recibió la factura del proveedor", "Only when it has already received the supplier's invoice") },
      { id: 'CON-08-E6-d', text: t("Cuando un juicio en su contra es posible pero poco probable", "When a lawsuit against it is possible but unlikely") },
    ],
    correctOptionId: 'CON-08-E6-b',
    explanation: t(
      "Las tres condiciones juntas (obligación presente por un hecho pasado, salida probable y monto estimable) obligan a registrar la provisión. Apartar dinero \"por si acaso\" no es una obligación; si ya hay factura, es un pasivo normal; y un juicio poco probable solo se revela en notas. Error común: usar las provisiones como colchón para suavizar utilidades.",
      "The three conditions together (present obligation from a past event, probable outflow and estimable amount) require recording the provision. Setting money aside \"just in case\" is not an obligation; if there is already an invoice, it is an ordinary liability; and an unlikely lawsuit is only disclosed in the notes. Common mistake: using provisions as a cushion to smooth profits.",
    ),
    difficulty: 2,
    points: 15,
    competency: 'assets-liabilities-equity',
  },

  // ───────────────────────────── CON-09 ─────────────────────────────
  {
    id: 'CON-09-E1',
    level: 2,
    module: 'CON-09',
    kind: 'mcq',
    flavor: 'concept',
    prompt: t(
      "¿Qué determina que una empresa deba consolidar a otra en sus estados financieros?",
      "What determines that a company must consolidate another in its financial statements?",
    ),
    options: [
      { id: 'CON-09-E1-a', text: t("Que le venda mucha mercancía", "That it sells it a lot of goods") },
      { id: 'CON-09-E1-b', text: t("Que tenga el mismo domicilio fiscal", "That it has the same tax address") },
      { id: 'CON-09-E1-c', text: t("Que tenga control sobre ella", "That it has control over it") },
      { id: 'CON-09-E1-d', text: t("Que tenga cualquier porcentaje de sus acciones", "That it holds any percentage of its shares") },
    ],
    correctOptionId: 'CON-09-E1-c',
    explanation: t(
      "Se consolida cuando hay control: poder sobre las actividades relevantes, exposición a sus rendimientos y capacidad de usar ese poder. Ser cliente importante o compartir domicilio no da control, y un porcentaje pequeño de acciones tampoco. Error común: pensar que tener cualquier inversión en acciones obliga a consolidar.",
      "You consolidate when there is control: power over the relevant activities, exposure to its returns and the ability to use that power. Being a major customer or sharing an address does not give control, nor does a small percentage of shares. Common mistake: thinking any shareholding requires consolidation.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'consolidation',
  },
  {
    id: 'CON-09-E2',
    level: 2,
    module: 'CON-09',
    kind: 'truefalse',
    flavor: 'concept',
    prompt: t(
      "Al consolidar, una cuenta por cobrar de la controladora a su subsidiaria se elimina junto con la cuenta por pagar correspondiente de la subsidiaria.",
      "When consolidating, a receivable the parent holds from its subsidiary is eliminated together with the subsidiary's corresponding payable.",
    ),
    answer: true,
    explanation: t(
      "Verdadero. El grupo se presenta como una sola empresa, y nadie puede deberse a sí mismo: la cuenta por cobrar y la por pagar entre ellas se eliminan por el mismo monto. Error común: eliminar solo uno de los dos lados, lo que descuadra el balance consolidado.",
      "True. The group is presented as a single company, and no one can owe itself: the receivable and payable between them are eliminated for the same amount. Common mistake: eliminating only one of the two sides, which unbalances the consolidated balance sheet.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'consolidation',
  },
  {
    id: 'CON-09-E3',
    level: 2,
    module: 'CON-09',
    kind: 'numeric',
    flavor: 'case',
    context: t(
      "Una controladora tiene el 70% de las acciones de una subsidiaria. El capital contable de la subsidiaria es de $800,000.",
      "A parent owns 70% of a subsidiary's shares. The subsidiary's equity is $800,000.",
    ),
    prompt: t(
      "¿Cuánto se presenta como participación no controladora en el capital consolidado (por su parte proporcional)? Responde en pesos.",
      "How much is presented as non-controlling interest in consolidated equity (at its proportionate share)? Answer in pesos.",
    ),
    answer: 240000,
    unit: 'MXN',
    decimals: 0,
    tolerance: { abs: 0.5 },
    explanation: t(
      "La parte de otros socios es 100% − 70% = 30%. Participación no controladora: 30% × 800,000 = 240,000. Error común: responder 560,000, que es la parte de la controladora (70%), no la de los otros socios.",
      "Other shareholders' part is 100% − 70% = 30%. Non-controlling interest: 30% × 800,000 = 240,000. Common mistake: answering 560,000, which is the parent's share (70%), not the other shareholders'.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'consolidation',
  },
  {
    id: 'CON-09-E4',
    level: 2,
    module: 'CON-09',
    kind: 'fields',
    flavor: 'case',
    context: t(
      "Controladora: ventas $2,000,000 y clientes $350,000. Subsidiaria: ventas $600,000 y clientes $90,000. De las ventas de la subsidiaria, $200,000 fueron a la controladora (que ya revendió todo a terceros) y de sus clientes, $30,000 son lo que todavía le debe la controladora.",
      "Parent: sales $2,000,000 and receivables $350,000. Subsidiary: sales $600,000 and receivables $90,000. Of the subsidiary's sales, $200,000 went to the parent (which has already resold everything to third parties), and of its receivables, $30,000 is what the parent still owes it.",
    ),
    prompt: t(
      "Calcula las ventas consolidadas y los clientes consolidados del grupo, en pesos.",
      "Compute the group's consolidated sales and consolidated receivables, in pesos.",
    ),
    fields: [
      { id: 'f1', label: t("Ventas consolidadas", "Consolidated sales"), answer: 2400000, unit: 'MXN', tolerance: { abs: 0.5 } },
      { id: 'f2', label: t("Clientes consolidados", "Consolidated receivables"), answer: 410000, unit: 'MXN', tolerance: { abs: 0.5 } },
    ],
    explanation: t(
      "Ventas: 2,000,000 + 600,000 − 200,000 (venta interna) = 2,400,000. Clientes: 350,000 + 90,000 − 30,000 (saldo interno) = 410,000. Error común: sumar sin eliminar (2,600,000 y 440,000), lo que infla las cifras con operaciones del grupo consigo mismo.",
      "Sales: 2,000,000 + 600,000 − 200,000 (internal sale) = 2,400,000. Receivables: 350,000 + 90,000 − 30,000 (internal balance) = 410,000. Common mistake: adding without eliminating (2,600,000 and 440,000), which inflates figures with the group's transactions with itself.",
    ),
    difficulty: 2,
    points: 20,
    competency: 'consolidation',
  },
  {
    id: 'CON-09-E5',
    level: 2,
    module: 'CON-09',
    kind: 'numeric',
    flavor: 'case',
    context: t(
      "Una cadena de cafeterías paga $1,000,000 por el 75% de una tostadora de café. Los activos netos de la tostadora a valor razonable son $1,200,000.",
      "A coffee shop chain pays $1,000,000 for 75% of a coffee roaster. The roaster's net assets at fair value are $1,200,000.",
    ),
    prompt: t(
      "¿Cuánto crédito mercantil surge en esta adquisición? Responde en pesos.",
      "How much goodwill arises from this acquisition? Answer in pesos.",
    ),
    answer: 100000,
    unit: 'MXN',
    decimals: 0,
    tolerance: { abs: 0.5 },
    explanation: t(
      "Parte adquirida de los activos netos: 75% × 1,200,000 = 900,000. Crédito mercantil: 1,000,000 − 900,000 = 100,000. Error común: comparar el precio con el 100% de los activos netos y concluir que no hay crédito mercantil (1,000,000 < 1,200,000).",
      "Acquired share of net assets: 75% × 1,200,000 = 900,000. Goodwill: 1,000,000 − 900,000 = 100,000. Common mistake: comparing the price with 100% of net assets and concluding there is no goodwill (1,000,000 < 1,200,000).",
    ),
    difficulty: 2,
    points: 15,
    competency: 'consolidation',
  },
  {
    id: 'CON-09-E6',
    level: 2,
    module: 'CON-09',
    kind: 'classify',
    flavor: 'case',
    prompt: t(
      "Grupo Norteño tiene varias inversiones en acciones. Indica cómo se trata contablemente cada una.",
      "Grupo Norteño holds several share investments. Indicate how each one is treated in the accounts.",
    ),
    categories: [
      { id: 'CON-09-E6-c1', label: t("Subsidiaria: se consolida", "Subsidiary: consolidated") },
      { id: 'CON-09-E6-c2', label: t("Asociada: método de participación", "Associate: equity method") },
      { id: 'CON-09-E6-c3', label: t("Inversión financiera: sin control ni influencia", "Financial investment: no control or influence") },
    ],
    items: [
      { id: 'CON-09-E6-i1', label: t("85% de las acciones con voto y mayoría en el consejo", "85% of voting shares and a board majority"), correctCategoryId: 'CON-09-E6-c1' },
      { id: 'CON-09-E6-i2', label: t("60% de las acciones con voto; nombra al director general", "60% of voting shares; appoints the CEO"), correctCategoryId: 'CON-09-E6-c1' },
      { id: 'CON-09-E6-i3', label: t("30% de las acciones y un lugar en el consejo, sin control", "30% of the shares and one board seat, without control"), correctCategoryId: 'CON-09-E6-c2' },
      { id: 'CON-09-E6-i4', label: t("25% de las acciones; participa en decisiones de precios, sin mandar", "25% of the shares; takes part in pricing decisions without being in charge"), correctCategoryId: 'CON-09-E6-c2' },
      { id: 'CON-09-E6-i5', label: t("2% de las acciones de una empresa que cotiza en bolsa", "2% of the shares of a listed company"), correctCategoryId: 'CON-09-E6-c3' },
      { id: 'CON-09-E6-i6', label: t("5% de las acciones, sin consejero ni influencia en decisiones", "5% of the shares, with no board seat or influence on decisions"), correctCategoryId: 'CON-09-E6-c3' },
    ],
    explanation: t(
      "Con control (mayoría de votos y poder de dirigir) es subsidiaria y se consolida. Con influencia significativa sin control (en general desde 20%, con voz en el consejo o en decisiones) es asociada y usa el método de participación. Con porcentajes pequeños y sin influencia es una inversión financiera. Error común: consolidar al 30% por tener un consejero; opinar no es mandar.",
      "With control (voting majority and power to direct) it is a subsidiary and is consolidated. With significant influence but no control (generally from 20%, with a say on the board or in decisions) it is an associate using the equity method. With small percentages and no influence it is a financial investment. Common mistake: consolidating the 30% holding because of one board seat; having a say is not being in charge.",
    ),
    difficulty: 2,
    points: 15,
    competency: 'consolidation',
  },
]
