import type { Exercise, Lesson } from '../../types'

/**
 * FINCORE — Level 2: Contabilidad financiera / Financial Accounting.
 * Educational content. Mexican jurisdiction (NIF, issued by CINIF) with IFRS (IASB) references.
 */

export const lessons: Lesson[] = [
  // ───────────────────────────── L2-01 ─────────────────────────────
  {
    id: 'L2-01',
    level: 2,
    topicIds: ['2.1', '2.2'],
    title: { es: "Estado de situación financiera y estado de resultados", en: "Statement of financial position and income statement" },
    summary: {
      es: "Estructura, clasificación y lectura de los dos estados financieros básicos.",
      en: "Structure, classification and reading of the two basic financial statements.",
    },
    minutes: 18,
    objectives: [
      { es: "Presentar un estado de situación financiera clasificado en circulante y no circulante.", en: "Present a statement of financial position classified into current and non-current." },
      { es: "Construir el estado de resultados hasta la utilidad neta.", en: "Build the income statement down to net profit." },
      { es: "Distinguir información a una fecha (situación) de información por un periodo (resultados).", en: "Distinguish information at a date (position) from information for a period (results)." },
      { es: "Calcular el capital de trabajo.", en: "Compute working capital." },
    ],
    theory: [
      {
        heading: { es: "Estado de situación financiera", en: "Statement of financial position" },
        body: [
          {
            es: "En palabras sencillas: es una **foto** de lo que el negocio **tiene** y de lo que **debe** en un día concreto. Los **activos** son lo que tiene (dinero en el banco, lo que le deben los clientes, mercancía, maquinaria). Los **pasivos** son lo que debe a otros (proveedores, préstamos). El **capital contable** es lo que realmente pertenece a los dueños: lo que queda si con los activos se pagaran todas las deudas.",
            en: "In plain words: it is a **snapshot** of what the business **owns** and what it **owes** on a specific day. **Assets** are what it owns (money in the bank, what customers owe it, goods, machinery). **Liabilities** are what it owes others (suppliers, loans). **Equity** is what truly belongs to the owners: what would be left if all debts were paid with the assets.",
          },
          {
            es: "Muestra los **activos, pasivos y capital contable a una fecha determinada** (por ejemplo, al 31 de diciembre). Es una fotografía de los recursos de la entidad y de cómo se financian. En México se rige por la NIF B-6; internacionalmente, por IAS 1 (que será sustituida por IFRS 18 para periodos que inicien a partir del 1 de enero de 2027).",
            en: "It shows **assets, liabilities and equity at a specific date** (for example, December 31). It is a snapshot of the entity's resources and how they are financed. In Mexico it is governed by NIF B-6; internationally by IAS 1 (to be replaced by IFRS 18 for periods beginning on or after 1 January 2027).",
          },
          {
            es: "Lo habitual es clasificar activos y pasivos en **circulantes / a corto plazo** (se realizan o liquidan en 12 meses o en el ciclo normal de operación) y **no circulantes / a largo plazo**. La porción de un préstamo de largo plazo que vence en los próximos 12 meses se presenta como pasivo a corto plazo.",
            en: "Assets and liabilities are usually classified as **current** (realized or settled within 12 months or the normal operating cycle) and **non-current**. The portion of a long-term loan due within the next 12 months is presented as a current liability.",
          },
          {
            es: "¿Para qué sirve separar corto y largo plazo? Para saber si el negocio podrá pagar lo que vence pronto con lo que tiene a la mano. Esa comparación se llama **capital de trabajo**: el \"colchón\" que queda después de cubrir las deudas del próximo año.",
            en: "Why separate short and long term? To know whether the business can pay what falls due soon with what it has at hand. That comparison is called **working capital**: the \"cushion\" left after covering next year's debts.",
          },
        ],
        formulas: [
          {
            name: { es: "Ecuación contable: cuánto pertenece a los dueños", en: "Accounting equation: how much belongs to the owners" },
            expression: "Activo = Pasivo + Capital contable   →   Capital contable = Activo − Pasivo",
            variables: [
              { symbol: "Activo", meaning: { es: "Todo lo que el negocio tiene, en pesos (efectivo, clientes, inventarios, maquinaria).", en: "Everything the business owns, in pesos (cash, receivables, inventory, machinery)." } },
              { symbol: "Pasivo", meaning: { es: "Todo lo que el negocio debe a terceros, en pesos (proveedores, préstamos, impuestos por pagar).", en: "Everything the business owes to third parties, in pesos (suppliers, loans, taxes payable)." } },
              { symbol: "Capital contable", meaning: { es: "La parte de los activos que pertenece a los dueños, en pesos.", en: "The part of the assets that belongs to the owners, in pesos." } },
            ],
            steps: [
              { es: "Suma todos los activos (circulantes y no circulantes).", en: "Add up all assets (current and non-current)." },
              { es: "Suma todos los pasivos (a corto y a largo plazo).", en: "Add up all liabilities (current and non-current)." },
              { es: "Resta: Activo − Pasivo = Capital contable.", en: "Subtract: Assets − Liabilities = Equity." },
            ],
            example: {
              es: "Un negocio tiene activos por $400,000 y debe $150,000. Capital contable = $400,000 − $150,000 = **$250,000**. Comprobación: $150,000 + $250,000 = $400,000.",
              en: "A business has assets of $400,000 and owes $150,000. Equity = $400,000 − $150,000 = **$250,000**. Check: $150,000 + $250,000 = $400,000.",
            },
            interpret: {
              es: "Si el capital contable sale negativo, el negocio debe más de lo que tiene: es una señal de alerta.",
              en: "If equity comes out negative, the business owes more than it owns: a warning sign.",
            },
          },
          {
            name: { es: "Capital de trabajo", en: "Working capital" },
            expression: "Capital de trabajo = Activo circulante − Pasivo a corto plazo",
            variables: [
              { symbol: "Activo circulante", meaning: { es: "Lo que se convierte en dinero o se usa en los próximos 12 meses, en pesos: bancos, clientes, inventarios.", en: "What turns into cash or is used within the next 12 months, in pesos: bank, receivables, inventory." } },
              { symbol: "Pasivo a corto plazo", meaning: { es: "Lo que hay que pagar en los próximos 12 meses, en pesos: proveedores, sueldos por pagar, la parte de préstamos que vence en el año.", en: "What must be paid within the next 12 months, in pesos: suppliers, salaries payable, the part of loans due within the year." } },
            ],
            steps: [
              { es: "Suma solo los activos circulantes.", en: "Add up only the current assets." },
              { es: "Suma solo los pasivos que vencen en 12 meses o menos; deja fuera los préstamos de largo plazo.", en: "Add up only the liabilities due within 12 months; leave long-term loans out." },
              { es: "Resta: Activo circulante − Pasivo a corto plazo.", en: "Subtract: Current assets − Current liabilities." },
            ],
            example: {
              es: "Caja $25,000, clientes $35,000 e inventarios $40,000 → activo circulante = $100,000. Proveedores $30,000 e impuestos por pagar $8,000 → pasivo a corto plazo = $38,000 (un préstamo a 5 años de $90,000 no entra). Capital de trabajo = $100,000 − $38,000 = **$62,000**.",
              en: "Cash $25,000, receivables $35,000 and inventory $40,000 → current assets = $100,000. Payables $30,000 and taxes payable $8,000 → current liabilities = $38,000 (a $90,000 five-year loan is left out). Working capital = $100,000 − $38,000 = **$62,000**.",
            },
            interpret: {
              es: "Positivo: el negocio alcanza a cubrir sus deudas del año con lo que tiene a la mano. Negativo: podría tener problemas para pagar a tiempo.",
              en: "Positive: the business can cover the year's debts with what it has at hand. Negative: it may struggle to pay on time.",
            },
            mistake: {
              es: "Incluir préstamos de largo plazo o maquinaria. Solo cuentan partidas de 12 meses o menos.",
              en: "Including long-term loans or machinery. Only items of 12 months or less count.",
            },
          },
          {
            name: { es: "Separar un préstamo en corto y largo plazo", en: "Splitting a loan into current and non-current" },
            expression: "Porción a largo plazo = Saldo total del préstamo − Porción que vence en los próximos 12 meses",
            variables: [
              { symbol: "Saldo total del préstamo", meaning: { es: "Todo lo que se debe del préstamo a la fecha del balance, en pesos.", en: "The full amount owed on the loan at the balance-sheet date, in pesos." } },
              { symbol: "Porción que vence en los próximos 12 meses", meaning: { es: "Lo que se pagará dentro del año siguiente, en pesos; va en pasivo a corto plazo.", en: "What will be paid within the next year, in pesos; it goes in current liabilities." } },
              { symbol: "Porción a largo plazo", meaning: { es: "Lo que se pagará después de 12 meses, en pesos; va en pasivo a largo plazo.", en: "What will be paid after 12 months, in pesos; it goes in non-current liabilities." } },
            ],
            steps: [
              { es: "Identifica cuánto del préstamo se paga en los próximos 12 meses: eso es corto plazo.", en: "Identify how much of the loan is paid within the next 12 months: that is current." },
              { es: "Réstalo del saldo total: el resto es largo plazo.", en: "Subtract it from the total balance: the rest is non-current." },
            ],
            example: {
              es: "Préstamo de $500,000; en los próximos 12 meses se pagarán $80,000. Corto plazo = **$80,000**; largo plazo = $500,000 − $80,000 = **$420,000**.",
              en: "A $500,000 loan; $80,000 will be paid within the next 12 months. Current = **$80,000**; non-current = $500,000 − $80,000 = **$420,000**.",
            },
          },
        ],
      },
      {
        heading: { es: "Estado de resultados", en: "Income statement" },
        body: [
          {
            es: "En palabras sencillas: es la **película** de un periodo (un mes, un año). Responde: ¿cuánto vendí, cuánto me costó y cuánto gané o perdí? Se lee de arriba hacia abajo, como una escalera: empiezas con las ventas y en cada escalón restas un tipo de costo o gasto hasta llegar a la **utilidad neta**, lo que de verdad quedó para los dueños.",
            en: "In plain words: it is the **movie** of a period (a month, a year). It answers: how much did I sell, how much did it cost me and how much did I earn or lose? It reads top to bottom, like a staircase: you start with sales and at each step subtract one type of cost or expense until you reach **net profit**, what is truly left for the owners.",
          },
          {
            es: "Presenta los **ingresos, costos y gastos de un periodo** y su resultado: utilidad o pérdida. En México la NIF B-3 lo denomina estado de resultado integral, porque además de la utilidad neta puede incluir otros resultados integrales (ORI). Los costos y gastos se pueden clasificar por **función** (costo de ventas, gastos de venta y administración) o por **naturaleza** (sueldos, depreciación, etc.).",
            en: "It presents the **revenue, costs and expenses for a period** and the result: profit or loss. In Mexico, NIF B-3 calls it the statement of comprehensive income because, besides net profit, it may include other comprehensive income (OCI). Costs and expenses may be classified by **function** (cost of sales, selling and administrative expenses) or by **nature** (salaries, depreciation, etc.).",
          },
        ],
        formulas: [
          {
            name: { es: "La escalera del estado de resultados: de ventas a utilidad neta", en: "The income statement staircase: from sales to net profit" },
            expression: "Ventas netas = Ventas − Devoluciones y descuentos; Utilidad bruta = Ventas netas − Costo de ventas; Utilidad de operación = Utilidad bruta − Gastos de operación; Utilidad antes de impuestos = Utilidad de operación ± Resultado integral de financiamiento; ISR = Utilidad antes de impuestos × Tasa; Utilidad neta = Utilidad antes de impuestos − ISR",
            variables: [
              { symbol: "Ventas", meaning: { es: "Todo lo facturado a clientes en el periodo, en pesos.", en: "Everything billed to customers in the period, in pesos." } },
              { symbol: "Devoluciones y descuentos", meaning: { es: "Mercancía que los clientes regresaron y rebajas que se les dieron, en pesos.", en: "Goods customers returned and discounts given to them, in pesos." } },
              { symbol: "Costo de ventas", meaning: { es: "Lo que costó la mercancía que se vendió, en pesos.", en: "What the goods that were sold cost, in pesos." } },
              { symbol: "Gastos de operación", meaning: { es: "Gastos para funcionar y vender: sueldos de oficina, renta, publicidad, en pesos.", en: "Expenses to operate and sell: office salaries, rent, advertising, in pesos." } },
              { symbol: "Resultado integral de financiamiento", meaning: { es: "Intereses pagados (restan) o ganados (suman), en pesos.", en: "Interest paid (subtract) or earned (add), in pesos." } },
              { symbol: "Tasa", meaning: { es: "Tasa de impuesto sobre la utilidad, en %; en esta lección 30 % como supuesto educativo.", en: "Income tax rate, in %; in this lesson 30% as an educational assumption." } },
              { symbol: "ISR", meaning: { es: "Impuesto sobre la renta: el impuesto a la utilidad, en pesos.", en: "Income tax: the tax on profit, in pesos." } },
              { symbol: "Utilidad neta", meaning: { es: "Lo que queda al final para los dueños, en pesos.", en: "What is left at the end for the owners, in pesos." } },
            ],
            steps: [
              { es: "Resta devoluciones y descuentos a las ventas: obtienes ventas netas.", en: "Subtract returns and discounts from sales: you get net sales." },
              { es: "Resta el costo de ventas: obtienes la utilidad bruta.", en: "Subtract cost of goods sold: you get gross profit." },
              { es: "Resta los gastos de operación: obtienes la utilidad de operación.", en: "Subtract operating expenses: you get operating profit." },
              { es: "Resta los intereses pagados (o suma los ganados): obtienes la utilidad antes de impuestos.", en: "Subtract interest paid (or add interest earned): you get profit before tax." },
              { es: "Calcula el ISR: utilidad antes de impuestos × tasa (30 % = 0.30) y réstalo: obtienes la utilidad neta.", en: "Compute income tax: profit before tax × rate (30% = 0.30) and subtract it: you get net profit." },
            ],
            example: {
              es: "Ventas $300,000; devoluciones $10,000; costo de ventas $170,000; gastos de operación $50,000; intereses pagados $6,000; tasa 30 %. Ventas netas = 300,000 − 10,000 = $290,000. Utilidad bruta = 290,000 − 170,000 = $120,000. Utilidad de operación = 120,000 − 50,000 = $70,000. Antes de impuestos = 70,000 − 6,000 = $64,000. ISR = 64,000 × 0.30 = $19,200. Utilidad neta = 64,000 − 19,200 = **$44,800**.",
              en: "Sales $300,000; returns $10,000; COGS $170,000; operating expenses $50,000; interest paid $6,000; rate 30%. Net sales = 300,000 − 10,000 = $290,000. Gross profit = 290,000 − 170,000 = $120,000. Operating profit = 120,000 − 50,000 = $70,000. Before tax = 70,000 − 6,000 = $64,000. Tax = 64,000 × 0.30 = $19,200. Net profit = 64,000 − 19,200 = **$44,800**.",
            },
            interpret: {
              es: "Cada escalón dice algo: la utilidad bruta muestra si vendes por encima de lo que te cuesta la mercancía; la de operación, si el negocio en sí es rentable; la neta, cuánto ganaron los dueños.",
              en: "Each step says something: gross profit shows whether you sell above what the goods cost; operating profit, whether the business itself is profitable; net profit, how much the owners earned.",
            },
            mistake: {
              es: "Restar el costo de ventas a las ventas brutas, olvidando primero las devoluciones; o calcular el ISR sobre la utilidad de operación en lugar de la utilidad antes de impuestos.",
              en: "Subtracting COGS from gross sales, forgetting returns first; or computing tax on operating profit instead of profit before tax.",
            },
          },
        ],
      },
      {
        heading: { es: "Relación entre ambos estados", en: "How the two statements connect" },
        body: [
          {
            es: "La utilidad neta del estado de resultados se suma al **capital ganado** en el estado de situación financiera. Por eso un periodo con utilidades aumenta el capital contable y uno con pérdidas lo reduce. Las cuentas de resultados se 'cierran' al final del ejercicio y su saldo pasa a Utilidad del ejercicio.",
            en: "Net profit from the income statement is added to **earned capital** in the statement of financial position. So a profitable period increases equity and a loss reduces it. Income-statement accounts are 'closed' at year-end and their balance is transferred to Profit for the year.",
          },
        ],
      },
    ],
    examples: [
      {
        title: { es: "Estado de resultados por función", en: "Income statement by function" },
        problem: {
          es: "Ventas $800,000; devoluciones $30,000; costo de ventas $450,000; gastos de operación $180,000; gasto por intereses $20,000; tasa de ISR 30 % (supuesto educativo). Calcula la utilidad neta.",
          en: "Sales $800,000; returns $30,000; cost of goods sold $450,000; operating expenses $180,000; interest expense $20,000; income tax rate 30% (educational assumption). Compute net profit.",
        },
        steps: [
          { es: "Ventas netas = 800,000 − 30,000 = $770,000.", en: "Net sales = 800,000 − 30,000 = $770,000." },
          { es: "Utilidad bruta = 770,000 − 450,000 = $320,000.", en: "Gross profit = 770,000 − 450,000 = $320,000." },
          { es: "Utilidad de operación = 320,000 − 180,000 = $140,000.", en: "Operating profit = 320,000 − 180,000 = $140,000." },
          { es: "Utilidad antes de impuestos = 140,000 − 20,000 = $120,000.", en: "Profit before tax = 140,000 − 20,000 = $120,000." },
          { es: "ISR = 120,000 × 30 % = $36,000; utilidad neta = 120,000 − 36,000 = $84,000.", en: "Income tax = 120,000 × 30% = $36,000; net profit = 120,000 − 36,000 = $84,000." },
        ],
        result: { es: "Utilidad neta: $84,000.", en: "Net profit: $84,000." },
      },
      {
        title: { es: "Estado de situación financiera clasificado", en: "Classified statement of financial position" },
        problem: {
          es: "Bancos $90,000; Clientes $70,000; Inventarios $90,000; Maquinaria neta $400,000; Proveedores $120,000; Préstamo bancario a largo plazo $180,000. Determina totales y capital contable.",
          en: "Bank $90,000; Accounts receivable $70,000; Inventory $90,000; Machinery (net) $400,000; Accounts payable $120,000; Long-term bank loan $180,000. Determine totals and equity.",
        },
        steps: [
          { es: "Activo circulante = 90,000 + 70,000 + 90,000 = $250,000; no circulante = $400,000; activo total = $650,000.", en: "Current assets = 90,000 + 70,000 + 90,000 = $250,000; non-current = $400,000; total assets = $650,000." },
          { es: "Pasivo a corto plazo = $120,000; a largo plazo = $180,000; pasivo total = $300,000.", en: "Current liabilities = $120,000; non-current = $180,000; total liabilities = $300,000." },
          { es: "Capital contable = 650,000 − 300,000 = $350,000.", en: "Equity = 650,000 − 300,000 = $350,000." },
          { es: "Capital de trabajo = 250,000 − 120,000 = $130,000.", en: "Working capital = 250,000 − 120,000 = $130,000." },
        ],
        result: { es: "Activo $650,000 = Pasivo $300,000 + Capital $350,000; capital de trabajo $130,000.", en: "Assets $650,000 = Liabilities $300,000 + Equity $350,000; working capital $130,000." },
      },
    ],
    keyPoints: [
      { es: "Situación financiera: a una fecha. Resultados: por un periodo.", en: "Financial position: at a date. Results: for a period." },
      { es: "Activos y pasivos se clasifican en circulantes y no circulantes.", en: "Assets and liabilities are classified as current and non-current." },
      { es: "La utilidad neta incrementa el capital ganado.", en: "Net profit increases earned capital." },
      { es: "La porción circulante de la deuda de largo plazo es pasivo a corto plazo.", en: "The current portion of long-term debt is a current liability." },
    ],
    normativeNote: {
      es: "Jurisdicción: México (NIF B-6 y NIF B-3, emitidas por el CINIF) con referencia internacional a IAS 1 e IFRS 18 (IASB). Contenido educativo; la tasa de ISR de 30 % se usa sólo como supuesto de cálculo. Verifica las normas y la legislación fiscal vigentes (DOF) a la fecha de consulta (2026).",
      en: "Jurisdiction: Mexico (NIF B-6 and NIF B-3, issued by CINIF) with international reference to IAS 1 and IFRS 18 (IASB). Educational content; the 30% income tax rate is used only as a calculation assumption. Verify current standards and tax law (DOF) as of the date you consult them (2026).",
    },
    exerciseIds: ['N2-001', 'N2-002', 'N2-003', 'N2-005', 'N2-006', 'N2-004'],
  },

  // ───────────────────────────── L2-02 ─────────────────────────────
  {
    id: 'L2-02',
    level: 2,
    topicIds: ['2.3', '2.4'],
    title: { es: "Estado de flujos de efectivo y de cambios en el capital contable", en: "Statement of cash flows and statement of changes in equity" },
    summary: {
      es: "De dónde vino y a dónde fue el efectivo, y cómo se movieron las cuentas del capital contable.",
      en: "Where cash came from and went, and how equity accounts moved.",
    },
    minutes: 18,
    objectives: [
      { es: "Clasificar flujos en actividades de operación, inversión y financiamiento.", en: "Classify cash flows into operating, investing and financing activities." },
      { es: "Determinar el flujo de operación por el método indirecto.", en: "Determine operating cash flow using the indirect method." },
      { es: "Elaborar un estado de cambios en el capital contable sencillo.", en: "Prepare a simple statement of changes in equity." },
    ],
    theory: [
      {
        heading: { es: "Las tres actividades", en: "The three activities" },
        body: [
          {
            es: "El estado de flujos de efectivo (NIF B-2 / IAS 7) explica la variación del efectivo del periodo. Las **actividades de operación** son las principales generadoras de ingresos (cobros a clientes, pagos a proveedores y empleados). Las de **inversión** se refieren a la adquisición y venta de activos de largo plazo (maquinaria, terrenos, inversiones). Las de **financiamiento** cambian el tamaño y composición del capital y la deuda (préstamos recibidos o pagados, aportaciones, dividendos pagados).",
            en: "The statement of cash flows (NIF B-2 / IAS 7) explains the change in cash for the period. **Operating activities** are the main revenue-producing activities (collections from customers, payments to suppliers and employees). **Investing** activities relate to buying and selling long-term assets (machinery, land, investments). **Financing** activities change the size and composition of equity and debt (loans received or repaid, contributions, dividends paid).",
          },
          {
            es: "En palabras sencillas: es como revisar el estado de cuenta de tu tarjeta de débito y agrupar los movimientos en tres cajones: lo que entra y sale **por el negocio del día a día** (operación), lo que gastas o recibes **por comprar o vender cosas grandes** (inversión) y lo que te prestan, pagas de deudas o ponen o retiran los dueños (financiamiento). Importa porque un negocio puede tener utilidad y aun así quedarse sin efectivo.",
            en: "In plain words: it is like reviewing your debit card statement and sorting the movements into three drawers: what comes in and goes out **from day-to-day business** (operating), what you spend or receive **from buying or selling big things** (investing), and what you borrow, repay or what owners put in or take out (financing). It matters because a business can make a profit and still run out of cash.",
          },
        ],
        formulas: [
          {
            name: { es: "Conciliación del efectivo", en: "Cash reconciliation" },
            expression: "Efectivo final = Efectivo inicial + Flujo de operación + Flujo de inversión + Flujo de financiamiento",
            variables: [
              { symbol: "Efectivo inicial", meaning: { es: "El efectivo y bancos al inicio del periodo, en pesos.", en: "Cash and bank at the start of the period, in pesos." } },
              { symbol: "Flujo de operación", meaning: { es: "Entradas menos salidas de efectivo del negocio principal, en pesos (puede ser negativo).", en: "Cash inflows minus outflows from the main business, in pesos (may be negative)." } },
              { symbol: "Flujo de inversión", meaning: { es: "Entradas menos salidas por comprar o vender activos de largo plazo, en pesos (suele ser negativo cuando se compra maquinaria).", en: "Inflows minus outflows from buying or selling long-term assets, in pesos (usually negative when buying machinery)." } },
              { symbol: "Flujo de financiamiento", meaning: { es: "Préstamos recibidos y aportaciones (suman) menos pagos de deuda y dividendos (restan), en pesos.", en: "Loans received and contributions (add) minus debt repayments and dividends (subtract), in pesos." } },
              { symbol: "Efectivo final", meaning: { es: "El efectivo al cierre del periodo, en pesos; debe coincidir con Bancos del balance.", en: "Cash at the end of the period, in pesos; it must match Bank on the balance sheet." } },
            ],
            steps: [
              { es: "Suma los tres flujos, respetando su signo (+ si entró dinero, − si salió): eso es el aumento o disminución neto de efectivo.", en: "Add the three flows, keeping their sign (+ if money came in, − if it went out): that is the net increase or decrease in cash." },
              { es: "Súmale el efectivo inicial: el resultado es el efectivo final.", en: "Add the opening cash: the result is closing cash." },
            ],
            example: {
              es: "Efectivo inicial $40,000; operación +$85,000; inversión −$60,000 (compra de un horno); financiamiento +$15,000 (préstamo). Aumento neto = 85,000 − 60,000 + 15,000 = $40,000. Efectivo final = 40,000 + 40,000 = **$80,000**.",
              en: "Opening cash $40,000; operating +$85,000; investing −$60,000 (oven purchase); financing +$15,000 (loan). Net increase = 85,000 − 60,000 + 15,000 = $40,000. Closing cash = 40,000 + 40,000 = **$80,000**.",
            },
            mistake: {
              es: "Usar la utilidad neta como si fuera el aumento de efectivo. No son lo mismo: hay ventas a crédito, depreciación y otros movimientos que no son dinero.",
              en: "Using net profit as if it were the increase in cash. They differ: there are credit sales, depreciation and other non-cash items.",
            },
          },
        ],
      },
      {
        heading: { es: "Método indirecto", en: "Indirect method" },
        body: [
          {
            es: "Parte de la utilidad antes de impuestos o de la utilidad neta y la ajusta por partidas que no movieron efectivo (depreciación, estimaciones) y por cambios en el capital de trabajo. Un **aumento** en un activo circulante de operación (clientes, inventarios) **resta**, porque el efectivo quedó invertido ahí; un **aumento** en un pasivo de operación (proveedores) **suma**, porque se dejó de pagar.",
            en: "It starts from profit before tax or net profit and adjusts for items that did not move cash (depreciation, allowances) and for changes in working capital. An **increase** in an operating current asset (receivables, inventory) is **subtracted**, because cash was tied up there; an **increase** in an operating liability (payables) is **added**, because payment was deferred.",
          },
          {
            es: "Nota: la NIF B-2 parte de la utilidad antes de impuestos a la utilidad, mientras que en la práctica internacional es común partir de la utilidad neta. En los ejercicios de esta lección se parte de la utilidad neta para simplificar.",
            en: "Note: NIF B-2 starts from profit before income taxes, while international practice commonly starts from net profit. The exercises in this lesson start from net profit for simplicity.",
          },
          {
            es: "Una forma fácil de recordarlo: si un **cliente te debe más** que antes, ese dinero aún no llegó a tu bolsillo (resta). Si **tú le debes más al proveedor**, ese dinero sigue en tu bolsillo porque no lo has pagado (suma). Y la **depreciación** se suma porque fue un gasto \"en papel\": no salió ni un peso ese año.",
            en: "An easy way to remember it: if a **customer owes you more** than before, that money has not reached your pocket yet (subtract). If **you owe the supplier more**, that money is still in your pocket because you have not paid it (add). And **depreciation** is added back because it was a \"paper\" expense: not one peso left that year.",
          },
        ],
        formulas: [
          {
            name: { es: "Flujo de efectivo de operación (FEO), método indirecto", en: "Operating cash flow (OCF), indirect method" },
            expression: "FEO = Utilidad neta + Depreciación − ↑ Activos circulantes + ↓ Activos circulantes + ↑ Pasivos circulantes − ↓ Pasivos circulantes",
            variables: [
              { symbol: "FEO", meaning: { es: "Flujo neto de efectivo de las actividades de operación, en pesos.", en: "Net cash flow from operating activities, in pesos." } },
              { symbol: "Utilidad neta", meaning: { es: "La utilidad del estado de resultados, en pesos (punto de partida).", en: "The profit from the income statement, in pesos (starting point)." } },
              { symbol: "Depreciación", meaning: { es: "Gasto del periodo que no movió efectivo, en pesos; se suma de regreso.", en: "Period expense that moved no cash, in pesos; it is added back." } },
              { symbol: "↑ / ↓ Activos circulantes", meaning: { es: "Aumento (↑) o disminución (↓) en clientes o inventarios entre el inicio y el final del periodo, en pesos.", en: "Increase (↑) or decrease (↓) in receivables or inventory between the start and end of the period, in pesos." } },
              { symbol: "↑ / ↓ Pasivos circulantes", meaning: { es: "Aumento (↑) o disminución (↓) en proveedores u otras deudas de operación, en pesos.", en: "Increase (↑) or decrease (↓) in payables or other operating debts, in pesos." } },
            ],
            steps: [
              { es: "Parte de la utilidad neta.", en: "Start from net profit." },
              { es: "Suma la depreciación (y otros gastos que no usaron efectivo).", en: "Add depreciation (and other expenses that used no cash)." },
              { es: "Por cada activo circulante: si aumentó, resta el aumento; si disminuyó, suma la disminución.", en: "For each current asset: if it increased, subtract the increase; if it decreased, add the decrease." },
              { es: "Por cada pasivo circulante: si aumentó, suma el aumento; si disminuyó, resta la disminución.", en: "For each current liability: if it increased, add the increase; if it decreased, subtract the decrease." },
            ],
            example: {
              es: "Utilidad neta $80,000; depreciación $12,000; clientes aumentó $9,000; inventarios disminuyó $4,000; proveedores disminuyó $6,000. 80,000 + 12,000 = 92,000. 92,000 − 9,000 = 83,000. 83,000 + 4,000 = 87,000. 87,000 − 6,000 = **$81,000** de flujo de operación.",
              en: "Net profit $80,000; depreciation $12,000; receivables increased $9,000; inventory decreased $4,000; payables decreased $6,000. 80,000 + 12,000 = 92,000. 92,000 − 9,000 = 83,000. 83,000 + 4,000 = 87,000. 87,000 − 6,000 = **$81,000** operating cash flow.",
            },
            interpret: {
              es: "Si el FEO es mayor que la utilidad, el negocio convierte bien sus ventas en dinero. Si es mucho menor, revisa: quizá los clientes tardan en pagar o se acumuló inventario.",
              en: "If OCF is higher than profit, the business turns its sales into cash well. If it is much lower, check: customers may be slow to pay or inventory may have piled up.",
            },
            mistake: {
              es: "Invertir los signos: una disminución de un activo (por ejemplo, inventarios) **suma**, porque liberó efectivo.",
              en: "Flipping the signs: a decrease in an asset (for example, inventory) is **added**, because it released cash.",
            },
          },
        ],
      },
      {
        heading: { es: "Estado de cambios en el capital contable", en: "Statement of changes in equity" },
        body: [
          {
            es: "Muestra, por cada componente del capital (capital social, utilidades retenidas, otros resultados integrales), el saldo inicial, los movimientos del periodo y el saldo final (NIF B-4 / IAS 1). Los movimientos típicos son: aportaciones o reembolsos de capital, utilidad o pérdida integral del periodo y dividendos decretados.",
            en: "It shows, for each equity component (share capital, retained earnings, other comprehensive income), the opening balance, the period's movements and the closing balance (NIF B-4 / IAS 1). Typical movements are: capital contributions or repayments, comprehensive income or loss for the period and dividends declared.",
          },
          {
            es: "Glosario rápido: el **capital social** es el dinero que los socios pusieron para arrancar o hacer crecer el negocio. Las **utilidades retenidas** son las ganancias de años anteriores que se quedaron dentro de la empresa. Los **dividendos** son la parte de esas ganancias que se reparte a los socios; por eso salen de las utilidades retenidas, no del capital social.",
            en: "Quick glossary: **share capital** is the money partners put in to start or grow the business. **Retained earnings** are profits from prior years that stayed inside the company. **Dividends** are the part of those profits paid out to partners; that is why they come out of retained earnings, not share capital.",
          },
        ],
        formulas: [
          {
            name: { es: "Utilidades retenidas finales", en: "Closing retained earnings" },
            expression: "Utilidades retenidas finales = Utilidades retenidas iniciales + Utilidad neta − Dividendos decretados",
            variables: [
              { symbol: "Utilidades retenidas iniciales", meaning: { es: "Ganancias acumuladas no repartidas al inicio del año, en pesos.", en: "Accumulated undistributed profits at the start of the year, in pesos." } },
              { symbol: "Utilidad neta", meaning: { es: "La ganancia del año (si fue pérdida, se resta), en pesos.", en: "The year's profit (if a loss, it is subtracted), in pesos." } },
              { symbol: "Dividendos decretados", meaning: { es: "Ganancias que se acordó repartir a los socios, en pesos.", en: "Profits the partners agreed to distribute, in pesos." } },
            ],
            steps: [
              { es: "Toma el saldo inicial de utilidades retenidas.", en: "Take the opening retained earnings balance." },
              { es: "Suma la utilidad neta del año.", en: "Add the year's net profit." },
              { es: "Resta los dividendos decretados.", en: "Subtract dividends declared." },
            ],
            example: {
              es: "Iniciales $60,000; utilidad neta $35,000; dividendos $15,000. 60,000 + 35,000 = 95,000; 95,000 − 15,000 = **$80,000**.",
              en: "Opening $60,000; net profit $35,000; dividends $15,000. 60,000 + 35,000 = 95,000; 95,000 − 15,000 = **$80,000**.",
            },
            mistake: {
              es: "Restar los dividendos al capital social. Los dividendos reparten ganancias, así que se restan de las utilidades retenidas.",
              en: "Subtracting dividends from share capital. Dividends distribute profits, so they are subtracted from retained earnings.",
            },
          },
          {
            name: { es: "Capital contable total final", en: "Total closing equity" },
            expression: "Capital social final = Capital social inicial + Aportaciones − Reembolsos; Capital contable final = Capital social final + Utilidades retenidas finales",
            variables: [
              { symbol: "Capital social inicial", meaning: { es: "Lo aportado por los socios al inicio del año, en pesos.", en: "What partners had contributed at the start of the year, in pesos." } },
              { symbol: "Aportaciones", meaning: { es: "Dinero nuevo que los socios metieron en el año, en pesos.", en: "New money partners put in during the year, in pesos." } },
              { symbol: "Reembolsos", meaning: { es: "Capital que se devolvió a los socios en el año, en pesos (si no hubo, es 0).", en: "Capital returned to partners during the year, in pesos (0 if none)." } },
              { symbol: "Utilidades retenidas finales", meaning: { es: "El resultado de la fórmula anterior, en pesos.", en: "The result of the previous formula, in pesos." } },
            ],
            steps: [
              { es: "Calcula el capital social final: inicial + aportaciones − reembolsos.", en: "Compute closing share capital: opening + contributions − repayments." },
              { es: "Calcula las utilidades retenidas finales con la fórmula anterior.", en: "Compute closing retained earnings with the previous formula." },
              { es: "Suma ambos componentes: ése es el capital contable total.", en: "Add both components: that is total equity." },
            ],
            example: {
              es: "Capital social inicial $200,000 y aportación de $30,000 → 200,000 + 30,000 = $230,000. Utilidades retenidas finales $80,000. Capital contable final = 230,000 + 80,000 = **$310,000**.",
              en: "Opening share capital $200,000 and a $30,000 contribution → 200,000 + 30,000 = $230,000. Closing retained earnings $80,000. Closing equity = 230,000 + 80,000 = **$310,000**.",
            },
          },
        ],
      },
    ],
    examples: [
      {
        title: { es: "Flujo de operación por método indirecto", en: "Operating cash flow, indirect method" },
        problem: {
          es: "Utilidad neta $200,000; depreciación $40,000; Clientes aumentó $30,000; Inventarios aumentó $15,000; Proveedores aumentó $12,000. Calcula el flujo neto de operación.",
          en: "Net profit $200,000; depreciation $40,000; Receivables increased $30,000; Inventory increased $15,000; Payables increased $12,000. Compute net operating cash flow.",
        },
        steps: [
          { es: "Parte de la utilidad neta: $200,000.", en: "Start from net profit: $200,000." },
          { es: "Suma la depreciación (no es salida de efectivo): 200,000 + 40,000 = 240,000.", en: "Add back depreciation (not a cash outflow): 200,000 + 40,000 = 240,000." },
          { es: "Resta aumentos de clientes e inventarios: 240,000 − 30,000 − 15,000 = 195,000.", en: "Subtract increases in receivables and inventory: 240,000 − 30,000 − 15,000 = 195,000." },
          { es: "Suma el aumento de proveedores: 195,000 + 12,000 = $207,000.", en: "Add the increase in payables: 195,000 + 12,000 = $207,000." },
        ],
        result: { es: "Flujo neto de operación: $207,000.", en: "Net operating cash flow: $207,000." },
      },
      {
        title: { es: "Movimientos del capital contable", en: "Equity movements" },
        problem: {
          es: "Capital social inicial $400,000; aportación del año $50,000. Utilidades retenidas iniciales $120,000; utilidad neta $75,000; dividendos decretados $30,000. Determina saldos finales.",
          en: "Opening share capital $400,000; contribution during the year $50,000. Opening retained earnings $120,000; net profit $75,000; dividends declared $30,000. Determine closing balances.",
        },
        steps: [
          { es: "Capital social final = 400,000 + 50,000 = $450,000.", en: "Closing share capital = 400,000 + 50,000 = $450,000." },
          { es: "Utilidades retenidas finales = 120,000 + 75,000 − 30,000 = $165,000.", en: "Closing retained earnings = 120,000 + 75,000 − 30,000 = $165,000." },
          { es: "Capital contable total = 450,000 + 165,000 = $615,000.", en: "Total equity = 450,000 + 165,000 = $615,000." },
        ],
        result: { es: "Capital contable final: $615,000.", en: "Closing equity: $615,000." },
      },
    ],
    keyPoints: [
      { es: "Operación, inversión y financiamiento explican el cambio en el efectivo.", en: "Operating, investing and financing explain the change in cash." },
      { es: "La depreciación se suma en el método indirecto porque no usa efectivo.", en: "Depreciation is added back in the indirect method because it uses no cash." },
      { es: "↑ activos de operación restan; ↑ pasivos de operación suman.", en: "↑ operating assets subtract; ↑ operating liabilities add." },
      { es: "Los dividendos reducen las utilidades retenidas; las aportaciones aumentan el capital social.", en: "Dividends reduce retained earnings; contributions increase share capital." },
    ],
    normativeNote: {
      es: "Jurisdicción: México (NIF B-2 Estado de flujos de efectivo y NIF B-4 Estado de cambios en el capital contable, CINIF) con referencia a IAS 7 e IAS 1 (IASB). Contenido educativo y simplificado; las normas permiten ciertas opciones de clasificación (p. ej., intereses y dividendos). Verifica la versión vigente de las normas a la fecha de consulta (2026).",
      en: "Jurisdiction: Mexico (NIF B-2 Statement of cash flows and NIF B-4 Statement of changes in equity, CINIF) with reference to IAS 7 and IAS 1 (IASB). Educational, simplified content; the standards allow some classification choices (e.g. interest and dividends). Verify the current version of the standards as of the date you consult them (2026).",
    },
    exerciseIds: ['N2-007', 'N2-008', 'N2-009', 'N2-010', 'N2-011', 'N2-012'],
  },

  // ───────────────────────────── L2-03 ─────────────────────────────
  {
    id: 'L2-03',
    level: 2,
    topicIds: ['2.5', '2.6'],
    title: { es: "Ajustes contables y depreciación", en: "Adjusting entries and depreciation" },
    summary: {
      es: "Asientos de ajuste al cierre del periodo y cálculo de la depreciación en línea recta y por unidades producidas.",
      en: "Period-end adjusting entries and depreciation using the straight-line and units-of-production methods.",
    },
    minutes: 21,
    objectives: [
      { es: "Identificar los tipos de ajuste: anticipados, acumulados y estimaciones.", en: "Identify adjustment types: deferrals, accruals and estimates." },
      { es: "Registrar ajustes de pagos anticipados, sueldos devengados e ingresos cobrados por anticipado.", en: "Record adjustments for prepaid expenses, accrued salaries and unearned revenue." },
      { es: "Calcular la depreciación en línea recta y por unidades producidas.", en: "Compute straight-line and units-of-production depreciation." },
      { es: "Determinar el valor en libros de un activo fijo.", en: "Determine the carrying amount of a fixed asset." },
    ],
    theory: [
      {
        heading: { es: "¿Por qué se ajusta?", en: "Why adjust?" },
        body: [
          {
            es: "Por **devengación**, los ingresos y gastos deben reconocerse en el periodo en que ocurren. Al cierre, algunas cuentas no reflejan esa realidad porque el efectivo se movió antes o después. Los **asientos de ajuste** corrigen esto antes de preparar los estados financieros; casi siempre afectan una cuenta de resultados y una de balance, y nunca a Bancos.",
            en: "Under **accrual accounting**, revenue and expenses must be recognized in the period in which they occur. At period-end some accounts do not reflect that because cash moved earlier or later. **Adjusting entries** fix this before the financial statements are prepared; they almost always affect one income-statement account and one balance-sheet account, and never Bank.",
          },
          {
            es: "En palabras sencillas: **devengar** significa anotar algo en el mes en que realmente se usó o se ganó, no en el mes en que se pagó o se cobró. Ejemplo: si pagas en enero la renta de todo el semestre, en enero solo \"gastaste\" un mes; los otros cinco siguen siendo un derecho a favor (un activo). El ajuste mueve cada mes la parte que ya se usó.",
            en: "In plain words: **accrue** means recording something in the month it was actually used or earned, not the month it was paid or collected. Example: if you pay six months of rent in January, in January you only \"spent\" one month; the other five are still a right in your favour (an asset). The adjustment moves each month the part already used.",
          },
        ],
        formulas: [
          {
            name: { es: "Parte devengada de un pago o cobro anticipado", en: "Earned or used portion of an advance payment or collection" },
            expression: "Parte devengada = (Importe total ÷ Meses que cubre) × Meses transcurridos; Saldo pendiente = Importe total − Parte devengada",
            variables: [
              { symbol: "Importe total", meaning: { es: "Lo que se pagó (seguro, renta) o se cobró (servicio) por adelantado, en pesos.", en: "What was paid (insurance, rent) or collected (service) in advance, in pesos." } },
              { symbol: "Meses que cubre", meaning: { es: "Cuántos meses ampara ese pago o cobro (por ejemplo, 12 para un seguro anual).", en: "How many months that payment or collection covers (e.g. 12 for a one-year policy)." } },
              { symbol: "Meses transcurridos", meaning: { es: "Meses ya usados o ya prestados al cierre, contando el mes de inicio.", en: "Months already used or already provided at the close, counting the start month." } },
              { symbol: "Parte devengada", meaning: { es: "Lo que pasa a gasto (si pagaste) o a ingreso (si cobraste) con el ajuste, en pesos.", en: "What moves to expense (if you paid) or to revenue (if you collected) with the adjustment, in pesos." } },
              { symbol: "Saldo pendiente", meaning: { es: "Lo que sigue siendo activo (pagos anticipados) o pasivo (anticipos de clientes), en pesos.", en: "What remains an asset (prepaid) or a liability (customer advances), in pesos." } },
            ],
            steps: [
              { es: "Divide el importe total entre los meses que cubre: obtienes el importe de un mes.", en: "Divide the total amount by the months it covers: you get one month's amount." },
              { es: "Cuenta los meses transcurridos hasta el cierre, incluyendo el mes en que empezó.", en: "Count the months elapsed up to the close, including the start month." },
              { es: "Multiplica el importe mensual por esos meses: ésa es la cantidad del ajuste.", en: "Multiply the monthly amount by those months: that is the adjustment amount." },
              { es: "Lo que sobra del importe total queda como activo o pasivo para los meses siguientes.", en: "What is left of the total remains an asset or liability for the following months." },
            ],
            example: {
              es: "El 1 de septiembre se pagaron $30,000 de publicidad por 12 meses. Por mes: 30,000 ÷ 12 = $2,500. Al 31 de diciembre pasaron 4 meses (sep, oct, nov, dic): 2,500 × 4 = **$10,000** de gasto. Quedan 30,000 − 10,000 = $20,000 como pago anticipado.",
              en: "On September 1, $30,000 of advertising was paid for 12 months. Per month: 30,000 ÷ 12 = $2,500. By December 31, 4 months passed (Sep, Oct, Nov, Dec): 2,500 × 4 = **$10,000** of expense. 30,000 − 10,000 = $20,000 remains prepaid.",
            },
            mistake: {
              es: "Contar mal los meses (olvidar el mes de inicio) o pasar a gasto el importe completo.",
              en: "Miscounting the months (forgetting the start month) or expensing the full amount.",
            },
          },
        ],
        bullets: [
          { es: "Gastos pagados por anticipado: se reconoce la parte consumida (cargo a gasto, abono al activo).", en: "Prepaid expenses: recognize the consumed portion (debit expense, credit the asset)." },
          { es: "Ingresos cobrados por anticipado: se reconoce la parte ganada (cargo a Anticipos de clientes, abono a ingreso).", en: "Unearned revenue: recognize the earned portion (debit Customer advances, credit revenue)." },
          { es: "Gastos devengados no pagados: sueldos, intereses (cargo a gasto, abono a pasivo).", en: "Accrued expenses not yet paid: salaries, interest (debit expense, credit liability)." },
          { es: "Estimaciones: depreciación, cuentas incobrables.", en: "Estimates: depreciation, doubtful accounts." },
        ],
      },
      {
        heading: { es: "Depreciación", en: "Depreciation" },
        body: [
          {
            es: "La **depreciación** distribuye de forma sistemática el **monto depreciable** (costo menos valor residual) de un activo de propiedades, planta y equipo a lo largo de su vida útil (NIF C-6 / IAS 16). No pretende reflejar el valor de mercado del activo. Se registra con cargo a Gasto por depreciación y abono a Depreciación acumulada, cuenta complementaria que se resta del costo para obtener el **valor en libros**.",
            en: "**Depreciation** systematically allocates the **depreciable amount** (cost minus residual value) of a property, plant and equipment item over its useful life (NIF C-6 / IAS 16). It does not aim to reflect the asset's market value. It is recorded by debiting Depreciation expense and crediting Accumulated depreciation, a contra account deducted from cost to obtain the **carrying amount**.",
          },
          {
            es: "En palabras sencillas: si compras un horno de $100,000 que te durará 5 años, no sería justo cargar todo el gasto al primer año. La depreciación lo **reparte** entre los años en que lo usas. **Valor residual**: lo que esperas recibir al venderlo cuando ya no te sirva. **Vida útil**: cuántos años (o piezas, horas) piensas usarlo. **Depreciación acumulada**: la suma de toda la depreciación registrada hasta hoy.",
            en: "In plain words: if you buy a $100,000 oven that will last 5 years, it would not be fair to charge the whole cost to the first year. Depreciation **spreads** it over the years you use it. **Residual value**: what you expect to get when you sell it once it is no longer useful. **Useful life**: how many years (or pieces, hours) you plan to use it. **Accumulated depreciation**: the sum of all depreciation recorded so far.",
          },
        ],
        formulas: [
          {
            name: { es: "Depreciación en línea recta (anual y mensual)", en: "Straight-line depreciation (annual and monthly)" },
            expression: "Depreciación anual = (Costo − Valor residual) ÷ Vida útil; Depreciación mensual = Depreciación anual ÷ 12",
            variables: [
              { symbol: "Costo", meaning: { es: "Lo que costó el activo (precio más lo necesario para dejarlo listo para usarse), en pesos.", en: "What the asset cost (price plus what was needed to get it ready for use), in pesos." } },
              { symbol: "Valor residual", meaning: { es: "Lo que se espera recuperar al final de su vida, en pesos (puede ser 0).", en: "What is expected to be recovered at the end of its life, in pesos (may be 0)." } },
              { symbol: "Vida útil", meaning: { es: "Años que se usará el activo.", en: "Years the asset will be used." } },
            ],
            steps: [
              { es: "Resta el valor residual al costo: obtienes el monto depreciable.", en: "Subtract the residual value from cost: you get the depreciable amount." },
              { es: "Divide el monto depreciable entre los años de vida útil: depreciación anual.", en: "Divide the depreciable amount by the years of useful life: annual depreciation." },
              { es: "Si te piden un mes, divide la depreciación anual entre 12.", en: "If you are asked for one month, divide annual depreciation by 12." },
            ],
            example: {
              es: "Costo $240,000; valor residual $24,000; vida útil 4 años. Monto depreciable = 240,000 − 24,000 = $216,000. Anual = 216,000 ÷ 4 = **$54,000**. Mensual = 54,000 ÷ 12 = **$4,500**.",
              en: "Cost $240,000; residual value $24,000; useful life 4 years. Depreciable amount = 240,000 − 24,000 = $216,000. Annual = 216,000 ÷ 4 = **$54,000**. Monthly = 54,000 ÷ 12 = **$4,500**.",
            },
            mistake: {
              es: "Dividir el costo completo sin restar antes el valor residual.",
              en: "Dividing the full cost without first subtracting the residual value.",
            },
          },
          {
            name: { es: "Depreciación acumulada y valor en libros", en: "Accumulated depreciation and carrying amount" },
            expression: "Depreciación acumulada = Depreciación anual × Años transcurridos; Valor en libros = Costo − Depreciación acumulada",
            variables: [
              { symbol: "Depreciación anual", meaning: { es: "El resultado de la fórmula de línea recta, en pesos por año.", en: "The result of the straight-line formula, in pesos per year." } },
              { symbol: "Años transcurridos", meaning: { es: "Años completos que lleva usándose el activo.", en: "Full years the asset has been in use." } },
              { symbol: "Costo", meaning: { es: "El costo original del activo, en pesos.", en: "The asset's original cost, in pesos." } },
              { symbol: "Valor en libros", meaning: { es: "Lo que todavía falta por depreciar según la contabilidad, en pesos; no es su precio de venta.", en: "What remains undepreciated according to the books, in pesos; it is not its selling price." } },
            ],
            steps: [
              { es: "Multiplica la depreciación anual por los años transcurridos: depreciación acumulada.", en: "Multiply annual depreciation by the years elapsed: accumulated depreciation." },
              { es: "Resta la depreciación acumulada al costo original: valor en libros.", en: "Subtract accumulated depreciation from the original cost: carrying amount." },
            ],
            example: {
              es: "El activo anterior ($240,000; $54,000 al año) lleva 2 años. Acumulada = 54,000 × 2 = $108,000. Valor en libros = 240,000 − 108,000 = **$132,000**.",
              en: "The previous asset ($240,000; $54,000 per year) has 2 years of use. Accumulated = 54,000 × 2 = $108,000. Carrying amount = 240,000 − 108,000 = **$132,000**.",
            },
            mistake: {
              es: "Restar también el valor residual al calcular el valor en libros. El residual solo se usa para calcular la depreciación anual.",
              en: "Also subtracting the residual value when computing the carrying amount. The residual is only used to compute annual depreciation.",
            },
          },
        ],
      },
      {
        heading: { es: "Unidades producidas", en: "Units of production" },
        body: [
          {
            es: "Cuando el desgaste depende del uso, se calcula una cuota por unidad (pieza, hora máquina, kilómetro) y se multiplica por las unidades del periodo. El gasto varía con la actividad.",
            en: "When wear depends on usage, a rate per unit (piece, machine hour, kilometre) is computed and multiplied by the period's units. The expense varies with activity.",
          },
          {
            es: "La depreciación fiscal (deducción de inversiones conforme a la Ley del ISR) usa porcentajes máximos legales y puede diferir de la contable; esa diferencia se estudia en el nivel de fiscalidad.",
            en: "Tax depreciation (investment deductions under the Mexican Income Tax Law) uses maximum legal percentages and may differ from book depreciation; that difference is covered in the tax level.",
          },
        ],
        formulas: [
          {
            name: { es: "Depreciación por unidades producidas", en: "Units-of-production depreciation" },
            expression: "Cuota por unidad = (Costo − Valor residual) ÷ Unidades totales estimadas; Depreciación = Cuota por unidad × Unidades del periodo",
            variables: [
              { symbol: "Costo", meaning: { es: "Lo que costó el activo, en pesos.", en: "What the asset cost, in pesos." } },
              { symbol: "Valor residual", meaning: { es: "Lo que se espera recuperar al final, en pesos.", en: "What is expected to be recovered at the end, in pesos." } },
              { symbol: "Unidades totales estimadas", meaning: { es: "Todo lo que se espera que produzca o recorra en su vida: piezas, horas máquina o kilómetros.", en: "Everything it is expected to produce or run over its life: pieces, machine hours or kilometres." } },
              { symbol: "Cuota por unidad", meaning: { es: "Pesos de depreciación por cada pieza, hora o kilómetro.", en: "Pesos of depreciation per piece, hour or kilometre." } },
              { symbol: "Unidades del periodo", meaning: { es: "Lo que realmente produjo o recorrió en el periodo.", en: "What it actually produced or ran in the period." } },
            ],
            steps: [
              { es: "Resta el valor residual al costo: monto depreciable.", en: "Subtract the residual value from cost: depreciable amount." },
              { es: "Divide el monto depreciable entre las unidades totales estimadas: cuota por unidad.", en: "Divide the depreciable amount by total estimated units: rate per unit." },
              { es: "Multiplica la cuota por las unidades del periodo: depreciación del periodo.", en: "Multiply the rate by the period's units: depreciation for the period." },
            ],
            example: {
              es: "Un horno industrial cuesta $300,000, residual $20,000, y se estima que trabajará 70,000 horas. Cuota = (300,000 − 20,000) ÷ 70,000 = 280,000 ÷ 70,000 = $4.00 por hora. En el año trabajó 12,500 horas: 12,500 × 4.00 = **$50,000**.",
              en: "An industrial oven costs $300,000, residual $20,000, and is expected to run 70,000 hours. Rate = (300,000 − 20,000) ÷ 70,000 = 280,000 ÷ 70,000 = $4.00 per hour. This year it ran 12,500 hours: 12,500 × 4.00 = **$50,000**.",
            },
            interpret: {
              es: "Un año con mucha producción tendrá más depreciación; un año flojo, menos. Por eso se usa cuando el desgaste depende del uso.",
              en: "A year with heavy production will have more depreciation; a slow year, less. That is why it is used when wear depends on usage.",
            },
            mistake: {
              es: "Calcular la cuota con el costo completo, sin restar el valor residual.",
              en: "Computing the rate with full cost, without subtracting the residual value.",
            },
          },
        ],
      },
    ],
    examples: [
      {
        title: { es: "Línea recta anual y mensual", en: "Straight-line, annual and monthly" },
        problem: {
          es: "Maquinaria con costo de $600,000, valor residual de $60,000 y vida útil de 6 años. Calcula la depreciación anual y mensual.",
          en: "Machinery with a cost of $600,000, residual value of $60,000 and a useful life of 6 years. Compute annual and monthly depreciation.",
        },
        steps: [
          { es: "Monto depreciable = 600,000 − 60,000 = $540,000.", en: "Depreciable amount = 600,000 − 60,000 = $540,000." },
          { es: "Depreciación anual = 540,000 / 6 = $90,000.", en: "Annual depreciation = 540,000 / 6 = $90,000." },
          { es: "Depreciación mensual = 90,000 / 12 = $7,500.", en: "Monthly depreciation = 90,000 / 12 = $7,500." },
          { es: "Asiento mensual: cargo Gasto por depreciación $7,500 / abono Depreciación acumulada $7,500.", en: "Monthly entry: debit Depreciation expense $7,500 / credit Accumulated depreciation $7,500." },
        ],
        result: { es: "$90,000 por año; $7,500 por mes.", en: "$90,000 per year; $7,500 per month." },
      },
      {
        title: { es: "Unidades producidas (kilómetros)", en: "Units of production (kilometres)" },
        problem: {
          es: "Un camión cuesta $450,000, valor residual $50,000 y se estima que recorrerá 200,000 km. En el primer año recorre 45,000 km. Calcula la depreciación del año.",
          en: "A truck costs $450,000, residual value $50,000, and is expected to run 200,000 km. In the first year it runs 45,000 km. Compute the year's depreciation.",
        },
        steps: [
          { es: "Cuota por km = (450,000 − 50,000) / 200,000 = $2.00 por km.", en: "Rate per km = (450,000 − 50,000) / 200,000 = $2.00 per km." },
          { es: "Depreciación del año = 45,000 × 2.00 = $90,000.", en: "Year's depreciation = 45,000 × 2.00 = $90,000." },
          { es: "Valor en libros al cierre = 450,000 − 90,000 = $360,000.", en: "Carrying amount at year-end = 450,000 − 90,000 = $360,000." },
        ],
        result: { es: "Depreciación del primer año: $90,000.", en: "First-year depreciation: $90,000." },
      },
    ],
    keyPoints: [
      { es: "Los ajustes aplican devengación y casi nunca afectan efectivo.", en: "Adjustments apply accrual and almost never affect cash." },
      { es: "Depreciación = asignación del costo, no valuación a mercado.", en: "Depreciation = cost allocation, not market valuation." },
      { es: "Línea recta: (Costo − Residual) / Vida útil.", en: "Straight-line: (Cost − Residual) / Useful life." },
      { es: "Unidades producidas: cuota por unidad × unidades del periodo.", en: "Units of production: rate per unit × units for the period." },
      { es: "Valor en libros = Costo − Depreciación acumulada.", en: "Carrying amount = Cost − Accumulated depreciation." },
    ],
    normativeNote: {
      es: "Jurisdicción: México (NIF C-6 Propiedades, planta y equipo, CINIF) con referencia a IAS 16 (IASB). Contenido educativo. La depreciación fiscal se rige por la Ley del ISR y puede diferir de la contable. Verifica normas y legislación vigentes (DOF) a la fecha de consulta (2026).",
      en: "Jurisdiction: Mexico (NIF C-6 Property, plant and equipment, CINIF) with reference to IAS 16 (IASB). Educational content. Tax depreciation is governed by the Mexican Income Tax Law and may differ from book depreciation. Verify current standards and law (DOF) as of the date you consult them (2026).",
    },
    exerciseIds: ['N2-013', 'N2-014', 'N2-015', 'N2-020', 'N2-016', 'N2-017', 'N2-018', 'N2-019', 'N2-021'],
  },

  // ───────────────────────────── L2-04 ─────────────────────────────
  {
    id: 'L2-04',
    level: 2,
    topicIds: ['2.7', '2.8'],
    title: { es: "Inventarios y cuentas por cobrar", en: "Inventories and accounts receivable" },
    summary: {
      es: "Costeo de inventarios con PEPS y costo promedio, y estimación para cuentas incobrables.",
      en: "Inventory costing with FIFO and weighted average, and the allowance for doubtful accounts.",
    },
    minutes: 21,
    objectives: [
      { es: "Determinar qué costos forman parte del costo de los inventarios.", en: "Determine which costs form part of inventory cost." },
      { es: "Calcular costo de ventas e inventario final con PEPS y costo promedio.", en: "Compute cost of goods sold and ending inventory with FIFO and weighted average." },
      { es: "Explicar por qué UEPS no está permitido bajo NIF C-4 e IAS 2.", en: "Explain why LIFO is not permitted under NIF C-4 and IAS 2." },
      { es: "Registrar la estimación para cuentas incobrables y la cancelación de un saldo.", en: "Record the allowance for doubtful accounts and a write-off." },
    ],
    theory: [
      {
        heading: { es: "Costo de los inventarios", en: "Cost of inventories" },
        body: [
          {
            es: "El costo de adquisición incluye el precio de compra, los aranceles e impuestos **no recuperables**, los fletes y demás costos necesarios para dejar la mercancía en su ubicación y condición actuales, menos descuentos y rebajas. No se incluyen las mermas anormales, los gastos de venta ni el IVA acreditable (que es recuperable). Al cierre, los inventarios se valúan al **menor entre su costo y su valor neto de realización** (NIF C-4 / IAS 2).",
            en: "Purchase cost includes the purchase price, **non-recoverable** duties and taxes, freight and other costs needed to bring the goods to their present location and condition, less discounts and rebates. It excludes abnormal waste, selling costs and creditable VAT (which is recoverable). At period-end inventories are measured at the **lower of cost and net realizable value** (NIF C-4 / IAS 2).",
          },
        ],
      },
      {
        heading: { es: "Fórmulas de asignación del costo", en: "Cost formulas" },
        body: [
          {
            es: "**PEPS** (primeras entradas, primeras salidas; FIFO) supone que salen primero las unidades más antiguas: el inventario final queda a los costos más recientes. **Costo promedio** asigna a cada unidad el costo promedio ponderado de las unidades disponibles. Para artículos no intercambiables se usa el **costo identificado** de cada unidad.",
            en: "**FIFO** (first in, first out) assumes the oldest units leave first: ending inventory is valued at the most recent costs. **Weighted average** assigns each unit the weighted average cost of the units available. For non-interchangeable items the **specific identified cost** of each unit is used.",
          },
          {
            es: "**UEPS** (últimas entradas, primeras salidas; LIFO) **no está permitido** por la NIF C-4 ni por IAS 2, porque deja el inventario valuado a costos antiguos que no representan razonablemente su costo actual.",
            en: "**LIFO** (last in, first out) is **not permitted** by NIF C-4 or IAS 2, because it leaves inventory valued at old costs that do not fairly represent its current cost.",
          },
          {
            es: "En palabras sencillas: compraste la misma mercancía a precios distintos y ahora vendiste una parte. ¿A qué precio la sacas? **PEPS** es como el anaquel de leche del súper: se vende primero lo que llegó primero. **Costo promedio** mezcla todo en una sola \"olla\" y usa el precio promedio. El **costo de ventas** (lo que salió) más el **inventario final** (lo que quedó) siempre suman el costo total disponible.",
            en: "In plain words: you bought the same goods at different prices and now you sold part of them. At what price do you take them out? **FIFO** is like the milk shelf at the supermarket: what arrived first is sold first. **Weighted average** mixes everything in one \"pot\" and uses the average price. **Cost of goods sold** (what left) plus **ending inventory** (what remained) always add up to the total cost available.",
          },
        ],
        formulas: [
          {
            name: { es: "PEPS: costo de ventas e inventario final", en: "FIFO: cost of goods sold and ending inventory" },
            expression: "Costo de ventas (PEPS) = Σ (unidades vendidas tomadas de cada lote, del más antiguo al más reciente × costo de ese lote); Inventario final = Costo total disponible − Costo de ventas",
            variables: [
              { symbol: "Lote", meaning: { es: "Cada grupo de unidades compradas a un mismo costo (inventario inicial, compra 1, compra 2…).", en: "Each group of units bought at the same cost (opening inventory, purchase 1, purchase 2…)." } },
              { symbol: "Σ", meaning: { es: "\"Suma de\": sumas lo que sale de cada lote.", en: "\"Sum of\": you add what leaves each lot." } },
              { symbol: "Costo total disponible", meaning: { es: "Inventario inicial + compras, en pesos (unidades × costo de cada lote).", en: "Opening inventory + purchases, in pesos (units × cost of each lot)." } },
              { symbol: "Inventario final", meaning: { es: "Costo de las unidades que no se vendieron, en pesos.", en: "Cost of the units not sold, in pesos." } },
            ],
            steps: [
              { es: "Ordena los lotes del más antiguo al más reciente.", en: "Order the lots from oldest to newest." },
              { es: "Saca las unidades vendidas empezando por el lote más antiguo; cuando se acabe, sigue con el siguiente.", en: "Take the units sold starting from the oldest lot; when it runs out, continue with the next." },
              { es: "Multiplica las unidades tomadas de cada lote por su costo y suma: costo de ventas.", en: "Multiply the units taken from each lot by its cost and add: cost of goods sold." },
              { es: "Las unidades que quedan (las más recientes) × su costo = inventario final. Comprueba que CV + IF = costo disponible.", en: "The remaining units (the newest) × their cost = ending inventory. Check that COGS + EI = cost available." },
            ],
            example: {
              es: "Inicial 40 unidades a $20; compra 60 unidades a $25; se venden 70. Salen 40 × 20 = $800 y 30 × 25 = $750 → costo de ventas = **$1,550**. Quedan 30 × 25 = **$750** de inventario final. Comprobación: disponible 800 + 1,500 = 2,300 = 1,550 + 750.",
              en: "Opening 40 units at $20; purchase 60 units at $25; 70 are sold. Out go 40 × 20 = $800 and 30 × 25 = $750 → COGS = **$1,550**. Remaining 30 × 25 = **$750** ending inventory. Check: available 800 + 1,500 = 2,300 = 1,550 + 750.",
            },
            mistake: {
              es: "Tomar primero las unidades más recientes (eso sería UEPS, que no está permitido).",
              en: "Taking the newest units first (that would be LIFO, which is not allowed).",
            },
          },
          {
            name: { es: "Costo promedio ponderado", en: "Weighted average cost" },
            expression: "Costo promedio unitario = Costo total disponible ÷ Unidades disponibles; Costo de ventas = Unidades vendidas × Costo promedio; Inventario final = Unidades restantes × Costo promedio",
            variables: [
              { symbol: "Costo total disponible", meaning: { es: "Suma en pesos del inventario inicial y de todas las compras.", en: "Sum in pesos of opening inventory and all purchases." } },
              { symbol: "Unidades disponibles", meaning: { es: "Unidades del inventario inicial más las compradas.", en: "Opening inventory units plus units purchased." } },
              { symbol: "Costo promedio unitario", meaning: { es: "Costo de cada unidad después de mezclar todos los lotes, en pesos por unidad.", en: "Cost of each unit after mixing all lots, in pesos per unit." } },
              { symbol: "Unidades vendidas / restantes", meaning: { es: "Las que salieron y las que quedaron en el almacén.", en: "Those that left and those still in the warehouse." } },
            ],
            steps: [
              { es: "Multiplica unidades × costo de cada lote y suma todo: costo total disponible.", en: "Multiply units × cost of each lot and add it all: total cost available." },
              { es: "Suma todas las unidades disponibles.", en: "Add up all units available." },
              { es: "Divide costo total entre unidades: costo promedio unitario.", en: "Divide total cost by units: average unit cost." },
              { es: "Multiplica el promedio por las unidades vendidas (costo de ventas) y por las que quedan (inventario final).", en: "Multiply the average by units sold (COGS) and by units remaining (ending inventory)." },
            ],
            example: {
              es: "Mismos datos: 40 a $20 y 60 a $25. Costo disponible = 800 + 1,500 = $2,300 por 100 unidades. Promedio = 2,300 ÷ 100 = $23. Costo de ventas = 70 × 23 = **$1,610**. Inventario final = 30 × 23 = **$690**.",
              en: "Same data: 40 at $20 and 60 at $25. Cost available = 800 + 1,500 = $2,300 for 100 units. Average = 2,300 ÷ 100 = $23. COGS = 70 × 23 = **$1,610**. Ending inventory = 30 × 23 = **$690**.",
            },
            interpret: {
              es: "Con precios que suben, el promedio da un costo de ventas mayor que PEPS (aquí $1,610 contra $1,550) y, por tanto, menor utilidad bruta.",
              en: "With rising prices, the average gives higher COGS than FIFO (here $1,610 versus $1,550) and therefore lower gross profit.",
            },
            mistake: {
              es: "Promediar solo los precios ((20 + 25) ÷ 2 = 22.50) sin ponderar por cuántas unidades hay de cada lote.",
              en: "Averaging only the prices ((20 + 25) ÷ 2 = 22.50) without weighting by how many units are in each lot.",
            },
          },
        ],
      },
      {
        heading: { es: "Cuentas por cobrar e incobrables", en: "Receivables and doubtful accounts" },
        body: [
          {
            es: "Las cuentas por cobrar se reconocen por el importe de la transacción y se presentan netas de una **estimación para cuentas incobrables** (pérdidas crediticias esperadas, NIF C-16 / IFRS 9). La estimación se ajusta al cierre: se carga Gasto por cuentas incobrables y se abona la Estimación por la diferencia entre el saldo requerido y el saldo existente.",
            en: "Receivables are recognized at the transaction amount and presented net of an **allowance for doubtful accounts** (expected credit losses, NIF C-16 / IFRS 9). The allowance is adjusted at period-end: debit Bad debt expense and credit the Allowance for the difference between the required and the existing balance.",
          },
          {
            es: "Cuando un saldo específico se considera definitivamente incobrable, se **cancela** contra la estimación (cargo a Estimación, abono a Clientes). Esa cancelación no afecta resultados porque el gasto ya se reconoció al crear la estimación.",
            en: "When a specific balance is deemed definitely uncollectible, it is **written off** against the allowance (debit Allowance, credit Accounts receivable). The write-off does not affect profit because the expense was already recognized when the allowance was created.",
          },
          {
            es: "En palabras sencillas: si vendes fiado, sabes por experiencia que algunos clientes nunca pagarán, aunque todavía no sepas cuáles. La **estimación para cuentas incobrables** es un \"apartado\" para esa pérdida esperada. Es como una alcancía: al cierre solo pones lo que falta para llegar a la cantidad que debe tener, no la cantidad completa cada vez.",
            en: "In plain words: if you sell on credit, you know from experience that some customers will never pay, even if you do not know which ones yet. The **allowance for doubtful accounts** is a \"set-aside\" for that expected loss. It is like a piggy bank: at the close you only add what is missing to reach the amount it should hold, not the full amount each time.",
          },
        ],
        formulas: [
          {
            name: { es: "Ajuste a la estimación para cuentas incobrables", en: "Adjustment to the allowance for doubtful accounts" },
            expression: "Saldo requerido = Saldo de Clientes × % estimado incobrable; Ajuste (gasto) = Saldo requerido − Saldo existente; Clientes neto = Saldo de Clientes − Saldo requerido",
            variables: [
              { symbol: "Saldo de Clientes", meaning: { es: "Lo que los clientes deben al cierre, en pesos.", en: "What customers owe at the close, in pesos." } },
              { symbol: "% estimado incobrable", meaning: { es: "Porcentaje que se espera no cobrar, según experiencia; conviértelo a decimal (4 % = 0.04).", en: "Percentage expected not to be collected, based on experience; convert it to a decimal (4% = 0.04)." } },
              { symbol: "Saldo requerido", meaning: { es: "Lo que la estimación debe tener al cierre, en pesos.", en: "What the allowance must hold at the close, in pesos." } },
              { symbol: "Saldo existente", meaning: { es: "Lo que la estimación ya tiene antes del ajuste (saldo acreedor), en pesos.", en: "What the allowance already holds before the adjustment (credit balance), in pesos." } },
              { symbol: "Ajuste (gasto)", meaning: { es: "Gasto por cuentas incobrables que se registra en el periodo, en pesos.", en: "Bad debt expense recorded in the period, in pesos." } },
              { symbol: "Clientes neto", meaning: { es: "Lo que realmente se espera cobrar, en pesos.", en: "What is actually expected to be collected, in pesos." } },
            ],
            steps: [
              { es: "Convierte el porcentaje a decimal y multiplícalo por el saldo de Clientes: saldo requerido.", en: "Convert the percentage to a decimal and multiply it by the receivables balance: required balance." },
              { es: "Resta lo que la estimación ya tiene: ése es el ajuste (cargo a gasto, abono a la estimación).", en: "Subtract what the allowance already holds: that is the adjustment (debit expense, credit allowance)." },
              { es: "Para presentar el balance: Clientes − saldo requerido = Clientes neto.", en: "To present the balance sheet: Receivables − required balance = net receivables." },
            ],
            example: {
              es: "Clientes $120,000; se estima incobrable el 3 %; la estimación ya tiene $1,000. Requerido = 120,000 × 0.03 = $3,600. Ajuste = 3,600 − 1,000 = **$2,600** de gasto. Clientes neto = 120,000 − 3,600 = $116,400.",
              en: "Receivables $120,000; 3% estimated uncollectible; the allowance already holds $1,000. Required = 120,000 × 0.03 = $3,600. Adjustment = 3,600 − 1,000 = **$2,600** of expense. Net receivables = 120,000 − 3,600 = $116,400.",
            },
            mistake: {
              es: "Registrar como gasto el saldo requerido completo, olvidando lo que la estimación ya tenía. Y al cancelar un cliente concreto, no se vuelve a registrar gasto: se carga la estimación.",
              en: "Recording the full required balance as expense, forgetting what the allowance already held. And when writing off a specific customer, no new expense is recorded: the allowance is debited.",
            },
          },
        ],
      },
    ],
    examples: [
      {
        title: { es: "PEPS frente a costo promedio", en: "FIFO versus weighted average" },
        problem: {
          es: "Inventario inicial: 50 unidades a $100. Compra: 150 unidades a $120. Se venden 120 unidades. Calcula costo de ventas e inventario final con PEPS y con costo promedio.",
          en: "Opening inventory: 50 units at $100. Purchase: 150 units at $120. 120 units are sold. Compute COGS and ending inventory under FIFO and weighted average.",
        },
        steps: [
          { es: "Disponible: 50 × 100 + 150 × 120 = 5,000 + 18,000 = $23,000 por 200 unidades.", en: "Available: 50 × 100 + 150 × 120 = 5,000 + 18,000 = $23,000 for 200 units." },
          { es: "PEPS: costo de ventas = 50 × 100 + 70 × 120 = 5,000 + 8,400 = $13,400; inventario final = 80 × 120 = $9,600.", en: "FIFO: COGS = 50 × 100 + 70 × 120 = 5,000 + 8,400 = $13,400; ending inventory = 80 × 120 = $9,600." },
          { es: "Promedio: 23,000 / 200 = $115 por unidad; costo de ventas = 120 × 115 = $13,800; inventario final = 80 × 115 = $9,200.", en: "Average: 23,000 / 200 = $115 per unit; COGS = 120 × 115 = $13,800; ending inventory = 80 × 115 = $9,200." },
          { es: "Comprobación: 13,400 + 9,600 = 13,800 + 9,200 = 23,000.", en: "Check: 13,400 + 9,600 = 13,800 + 9,200 = 23,000." },
        ],
        result: { es: "PEPS: CV $13,400 / IF $9,600. Promedio: CV $13,800 / IF $9,200.", en: "FIFO: COGS $13,400 / EI $9,600. Average: COGS $13,800 / EI $9,200." },
      },
      {
        title: { es: "Ajuste de la estimación para incobrables", en: "Adjusting the allowance for doubtful accounts" },
        problem: {
          es: "Clientes tiene saldo de $180,000. Con base en la experiencia y expectativas, se estima incobrable el 5 %. La estimación tiene saldo acreedor de $2,000 antes del ajuste.",
          en: "Accounts receivable has a balance of $180,000. Based on experience and expectations, 5% is estimated uncollectible. The allowance has a $2,000 credit balance before adjustment.",
        },
        steps: [
          { es: "Saldo requerido = 180,000 × 5 % = $9,000.", en: "Required balance = 180,000 × 5% = $9,000." },
          { es: "Ajuste = 9,000 − 2,000 = $7,000: cargo Gasto por cuentas incobrables / abono Estimación.", en: "Adjustment = 9,000 − 2,000 = $7,000: debit Bad debt expense / credit Allowance." },
          { es: "Clientes neto = 180,000 − 9,000 = $171,000.", en: "Net receivables = 180,000 − 9,000 = $171,000." },
        ],
        result: { es: "Gasto del periodo $7,000; cuentas por cobrar netas $171,000.", en: "Expense for the period $7,000; net receivables $171,000." },
      },
    ],
    keyPoints: [
      { es: "NIF C-4 e IAS 2 permiten PEPS, costo promedio y costo identificado; UEPS no.", en: "NIF C-4 and IAS 2 allow FIFO, weighted average and specific identification; LIFO is not allowed." },
      { es: "Con precios al alza, PEPS da menor costo de ventas y mayor inventario final que el promedio.", en: "With rising prices, FIFO gives lower COGS and higher ending inventory than average cost." },
      { es: "Inventarios: menor entre costo y valor neto de realización.", en: "Inventories: lower of cost and net realizable value." },
      { es: "La estimación se ajusta por la diferencia entre saldo requerido y existente.", en: "The allowance is adjusted by the difference between required and existing balances." },
    ],
    normativeNote: {
      es: "Jurisdicción: México (NIF C-4 Inventarios; NIF C-3 Cuentas por cobrar y NIF C-16 Deterioro de instrumentos financieros por cobrar, CINIF) con referencia a IAS 2 e IFRS 9 (IASB). Contenido educativo: el porcentaje fijo sobre saldos simplifica el modelo de pérdidas crediticias esperadas. Verifica las normas vigentes a la fecha de consulta (2026).",
      en: "Jurisdiction: Mexico (NIF C-4 Inventories; NIF C-3 Accounts receivable and NIF C-16 Impairment of financial instruments receivable, CINIF) with reference to IAS 2 and IFRS 9 (IASB). Educational content: a fixed percentage of balances simplifies the expected-credit-loss model. Verify the current standards as of the date you consult them (2026).",
    },
    exerciseIds: ['N2-022', 'N2-023', 'N2-024', 'N2-025', 'N2-026', 'N2-027', 'N2-028', 'N2-029'],
  },

  // ───────────────────────────── L2-05 ─────────────────────────────
  {
    id: 'L2-05',
    level: 2,
    topicIds: ['2.9', '2.10'],
    title: { es: "Provisiones y marco normativo NIF e IFRS", en: "Provisions and the NIF and IFRS framework" },
    summary: {
      es: "Quién emite las normas contables en México y en el mundo, y cuándo reconocer una provisión o revelar un pasivo contingente.",
      en: "Who issues accounting standards in Mexico and worldwide, and when to recognize a provision or disclose a contingent liability.",
    },
    minutes: 17,
    objectives: [
      { es: "Identificar al CINIF y al IASB y la estructura de las NIF.", en: "Identify CINIF and the IASB and the structure of the NIF." },
      { es: "Aplicar los tres criterios de reconocimiento de una provisión.", en: "Apply the three recognition criteria for a provision." },
      { es: "Distinguir provisión, pasivo contingente y casos que no requieren ni reconocimiento ni revelación.", en: "Distinguish a provision, a contingent liability and cases needing neither recognition nor disclosure." },
      { es: "Medir una provisión con el valor esperado.", en: "Measure a provision using expected value." },
    ],
    theory: [
      {
        heading: { es: "NIF e IFRS: quién emite las normas", en: "NIF and IFRS: who issues the standards" },
        body: [
          {
            es: "En México, las **Normas de Información Financiera (NIF)** las emite el **CINIF** (Consejo Mexicano de Normas de Información Financiera), organismo independiente del sector privado. Las **IFRS** (Normas Internacionales de Información Financiera) las emite el **IASB**, bajo la IFRS Foundation. El CINIF busca la convergencia de las NIF con las IFRS, aunque subsisten diferencias.",
            en: "In Mexico, the **Financial Reporting Standards (NIF)** are issued by **CINIF** (Mexican Financial Reporting Standards Board), an independent private-sector body. **IFRS** (International Financial Reporting Standards) are issued by the **IASB**, under the IFRS Foundation. CINIF pursues convergence of NIF with IFRS, although differences remain.",
          },
          {
            es: "Las empresas que cotizan en bolsa en México, reguladas por la CNBV, por lo general reportan conforme a IFRS; la mayoría de las demás entidades aplican NIF.",
            en: "Companies listed on Mexican stock exchanges, regulated by the CNBV, generally report under IFRS; most other entities apply NIF.",
          },
        ],
        bullets: [
          { es: "Serie A: Marco Conceptual.", en: "Series A: Conceptual Framework." },
          { es: "Serie B: normas aplicables a los estados financieros en su conjunto.", en: "Series B: standards for the financial statements as a whole." },
          { es: "Serie C: normas aplicables a conceptos específicos de los estados financieros.", en: "Series C: standards for specific financial statement items." },
          { es: "Serie D: normas sobre problemas de determinación de resultados.", en: "Series D: standards on profit-determination issues." },
          { es: "Serie E: actividades especializadas de distintos sectores.", en: "Series E: specialized activities of particular sectors." },
        ],
      },
      {
        heading: { es: "Provisiones", en: "Provisions" },
        body: [
          {
            es: "Una **provisión** es un pasivo de cuantía o vencimiento inciertos. Según la NIF C-9 y IAS 37, se reconoce sólo si se cumplen **tres criterios**: (1) existe una **obligación presente** (legal o asumida) como resultado de un evento pasado; (2) es **probable** la salida de recursos económicos para liquidarla; y (3) puede hacerse una **estimación confiable** del monto.",
            en: "A **provision** is a liability of uncertain timing or amount. Under NIF C-9 and IAS 37 it is recognized only if **three criteria** are met: (1) there is a **present obligation** (legal or constructive) as a result of a past event; (2) an outflow of economic resources to settle it is **probable**; and (3) a **reliable estimate** of the amount can be made.",
          },
          {
            es: "Se mide con la **mejor estimación** del desembolso: para poblaciones grandes (garantías) se usa el **valor esperado** ponderado por probabilidades; para una obligación única (un juicio), normalmente el resultado individual más probable. Si el efecto del tiempo es importante, se descuenta a valor presente. No se reconocen provisiones por pérdidas de operación futuras.",
            en: "It is measured at the **best estimate** of the outflow: for large populations (warranties) the probability-weighted **expected value** is used; for a single obligation (a lawsuit), normally the individual most likely outcome. If the time value of money is material, it is discounted. No provisions are recognized for future operating losses.",
          },
          {
            es: "En palabras sencillas: una provisión es una deuda que **seguro** tienes, pero cuyo monto o fecha aún no conoces con exactitud. Ejemplo: vendiste licuadoras con garantía; sabes que algunas regresarán a reparación, pero no cuántas. **Probable** quiere decir \"es más fácil que pase a que no pase\" (más de 50 %).",
            en: "In plain words: a provision is a debt you **surely** have, but whose amount or date you do not know exactly yet. Example: you sold blenders with a warranty; you know some will come back for repair, but not how many. **Probable** means \"more likely to happen than not\" (over 50%).",
          },
        ],
        formulas: [
          {
            name: { es: "Valor esperado de una provisión (garantías)", en: "Expected value of a provision (warranties)" },
            expression: "Valor esperado = Σ (Probabilidad_i × Monto_i) = P₁ × M₁ + P₂ × M₂ + … + Pₙ × Mₙ",
            variables: [
              { symbol: "Σ", meaning: { es: "\"Suma de\": sumas el resultado de todos los escenarios.", en: "\"Sum of\": you add the result of every scenario." } },
              { symbol: "Probabilidad_i (Pᵢ)", meaning: { es: "Qué tan probable es cada escenario, en %; conviértelo a decimal. Todas deben sumar 100 %.", en: "How likely each scenario is, in %; convert it to a decimal. They must all add up to 100%." } },
              { symbol: "Monto_i (Mᵢ)", meaning: { es: "Lo que costaría si ocurriera ese escenario, en pesos (sin defectos = 0).", en: "What it would cost if that scenario happened, in pesos (no defects = 0)." } },
            ],
            steps: [
              { es: "Haz una lista de escenarios con su probabilidad y su costo.", en: "List the scenarios with their probability and cost." },
              { es: "Multiplica cada probabilidad (en decimal) por su costo.", en: "Multiply each probability (as a decimal) by its cost." },
              { es: "Suma todos los productos: ése es el monto de la provisión.", en: "Add all the products: that is the provision amount." },
            ],
            example: {
              es: "Se espera que 90 % de lo vendido no falle, 8 % tenga fallas menores ($50,000 si todo fallara así) y 2 % fallas mayores ($300,000). 0.90 × 0 = $0; 0.08 × 50,000 = $4,000; 0.02 × 300,000 = $6,000. Valor esperado = 0 + 4,000 + 6,000 = **$10,000**.",
              en: "90% of what was sold is expected not to fail, 8% to have minor faults ($50,000 if everything failed that way) and 2% major faults ($300,000). 0.90 × 0 = $0; 0.08 × 50,000 = $4,000; 0.02 × 300,000 = $6,000. Expected value = 0 + 4,000 + 6,000 = **$10,000**.",
            },
            interpret: {
              es: "Se usa para muchas partidas parecidas (garantías). Para un solo juicio se usa el resultado más probable, no el promedio.",
              en: "It is used for many similar items (warranties). For a single lawsuit the most likely outcome is used, not the average.",
            },
            mistake: {
              es: "Tomar solo el escenario más probable (sin defectos → $0) cuando hay muchas partidas: subestima la obligación.",
              en: "Using only the most likely scenario (no defects → $0) when there are many items: it understates the obligation.",
            },
          },
        ],
      },
      {
        heading: { es: "Pasivos y activos contingentes", en: "Contingent liabilities and assets" },
        body: [
          {
            es: "Un **pasivo contingente** es una obligación posible (cuya existencia depende de eventos futuros inciertos) o una obligación presente que no cumple los criterios de reconocimiento. **No se reconoce**: se **revela** en notas, salvo que la salida de recursos sea remota. Los **activos contingentes** no se reconocen; se revelan cuando la entrada de beneficios es probable.",
            en: "A **contingent liability** is a possible obligation (whose existence depends on uncertain future events) or a present obligation that does not meet the recognition criteria. It is **not recognized**: it is **disclosed** in the notes, unless the outflow is remote. **Contingent assets** are not recognized; they are disclosed when an inflow of benefits is probable.",
          },
        ],
      },
    ],
    examples: [
      {
        title: { es: "Juicio laboral", en: "Labour lawsuit" },
        problem: {
          es: "Al cierre, los abogados estiman 70 % de probabilidad de perder un juicio laboral iniciado por un despido del año, con un pago más probable de $350,000. ¿Se reconoce provisión?",
          en: "At year-end, lawyers estimate a 70% probability of losing a labour lawsuit arising from a dismissal during the year, with a most likely payment of $350,000. Is a provision recognized?",
        },
        steps: [
          { es: "Evento pasado: el despido ocurrió en el año → obligación presente.", en: "Past event: the dismissal occurred during the year → present obligation." },
          { es: "70 % > 50 %: la salida de recursos es probable.", en: "70% > 50%: the outflow is probable." },
          { es: "Existe estimación confiable: resultado más probable $350,000 (obligación única).", en: "A reliable estimate exists: most likely outcome $350,000 (single obligation)." },
          { es: "Asiento: cargo Gasto por provisiones $350,000 / abono Provisiones $350,000.", en: "Entry: debit Provision expense $350,000 / credit Provisions $350,000." },
        ],
        result: { es: "Se reconoce una provisión de $350,000.", en: "A provision of $350,000 is recognized." },
      },
      {
        title: { es: "Garantías: valor esperado", en: "Warranties: expected value" },
        problem: {
          es: "De los productos vendidos en el año, se espera que 80 % no tenga defectos, 15 % tenga defectos menores y 5 % defectos mayores. Si todos tuvieran defectos menores el costo sería $100,000; si todos tuvieran defectos mayores, $400,000.",
          en: "Of the products sold during the year, 80% are expected to have no defects, 15% minor defects and 5% major defects. If all had minor defects the cost would be $100,000; if all had major defects, $400,000.",
        },
        steps: [
          { es: "Sin defectos: 80 % × 0 = $0.", en: "No defects: 80% × 0 = $0." },
          { es: "Menores: 15 % × 100,000 = $15,000.", en: "Minor: 15% × 100,000 = $15,000." },
          { es: "Mayores: 5 % × 400,000 = $20,000.", en: "Major: 5% × 400,000 = $20,000." },
          { es: "Valor esperado = 0 + 15,000 + 20,000 = $35,000.", en: "Expected value = 0 + 15,000 + 20,000 = $35,000." },
        ],
        result: { es: "Provisión por garantías: $35,000.", en: "Warranty provision: $35,000." },
      },
    ],
    keyPoints: [
      { es: "NIF: CINIF. IFRS: IASB.", en: "NIF: CINIF. IFRS: IASB." },
      { es: "Provisión = obligación presente + salida probable + estimación confiable.", en: "Provision = present obligation + probable outflow + reliable estimate." },
      { es: "Pasivo contingente: se revela, no se reconoce (salvo remoto: nada).", en: "Contingent liability: disclosed, not recognized (if remote: nothing)." },
      { es: "Poblaciones grandes: valor esperado; obligación única: resultado más probable.", en: "Large populations: expected value; single obligation: most likely outcome." },
    ],
    normativeNote: {
      es: "Jurisdicción: México (NIF C-9 Provisiones, contingencias y compromisos, y Marco Conceptual de las NIF, CINIF) con referencia a IAS 37 (IASB). Contenido educativo. Verifica la estructura y la versión vigente de las NIF y de las IFRS a la fecha de consulta (2026).",
      en: "Jurisdiction: Mexico (NIF C-9 Provisions, contingencies and commitments, and the NIF Conceptual Framework, CINIF) with reference to IAS 37 (IASB). Educational content. Verify the structure and current version of the NIF and IFRS as of the date you consult them (2026).",
    },
    exerciseIds: ['N2-030', 'N2-031', 'N2-032', 'N2-033', 'N2-034', 'N2-035', 'N2-036'],
  },

  // ───────────────────────────── L2-06 ─────────────────────────────
  {
    id: 'L2-06',
    level: 2,
    topicIds: ['2.11', '2.12'],
    title: { es: "Arrendamientos y consolidación: introducción", en: "Leases and consolidation: an introduction" },
    summary: {
      es: "El modelo de activo por derecho de uso para el arrendatario y los fundamentos del control y la consolidación.",
      en: "The right-of-use model for lessees and the basics of control and consolidation.",
    },
    minutes: 23,
    objectives: [
      { es: "Reconocer inicialmente un arrendamiento como activo por derecho de uso y pasivo por arrendamiento.", en: "Initially recognize a lease as a right-of-use asset and a lease liability." },
      { es: "Calcular el interés y la depreciación del primer año de un arrendamiento.", en: "Compute first-year interest and depreciation on a lease." },
      { es: "Explicar el concepto de control para consolidar.", en: "Explain the concept of control for consolidation." },
      { es: "Eliminar saldos y operaciones entre compañías del grupo.", en: "Eliminate intercompany balances and transactions." },
    ],
    theory: [
      {
        heading: { es: "Arrendamientos: modelo del arrendatario", en: "Leases: the lessee model" },
        body: [
          {
            es: "Bajo la NIF D-5 e IFRS 16, el arrendatario reconoce en su balance casi todos los arrendamientos: un **activo por derecho de uso** y un **pasivo por arrendamiento**. El pasivo se mide inicialmente al **valor presente de los pagos** pendientes, descontados con la tasa implícita del arrendamiento o, si no se puede determinar, con la tasa incremental de financiamiento del arrendatario. El activo parte de ese mismo importe (más costos directos iniciales y pagos anticipados, entre otros ajustes).",
            en: "Under NIF D-5 and IFRS 16 the lessee recognizes almost all leases on balance sheet: a **right-of-use asset** and a **lease liability**. The liability is initially measured at the **present value of the outstanding payments**, discounted at the rate implicit in the lease or, if that cannot be determined, at the lessee's incremental borrowing rate. The asset starts from that same amount (plus initial direct costs and prepaid payments, among other adjustments).",
          },
          {
            es: "Existen exenciones opcionales para arrendamientos de **corto plazo** (12 meses o menos) y de **activos de bajo valor**, cuyos pagos pueden reconocerse como gasto en línea recta.",
            en: "There are optional exemptions for **short-term** leases (12 months or less) and leases of **low-value assets**, whose payments may be expensed on a straight-line basis.",
          },
          {
            es: "En palabras sencillas: si rentas un local por 4 años, ya te comprometiste a pagar todas esas rentas. La norma pide anotar esa **deuda** (pasivo) y, a cambio, el **derecho a usar el local** (activo). La deuda no se anota por la suma simple de las rentas, sino por su **valor presente**: lo que valen hoy pagos que harás en el futuro, porque un peso de dentro de 3 años vale menos que un peso hoy. La **tasa incremental de financiamiento** es la tasa que te cobraría un banco si pidieras prestado para algo parecido.",
            en: "In plain words: if you rent a store for 4 years, you have already committed to paying all those rents. The standard requires recording that **debt** (liability) and, in exchange, the **right to use the store** (asset). The debt is not recorded at the simple sum of the rents but at their **present value**: what payments you will make in the future are worth today, because a peso three years from now is worth less than a peso today. The **incremental borrowing rate** is the rate a bank would charge you to borrow for something similar.",
          },
        ],
        formulas: [
          {
            name: { es: "Pasivo inicial: valor presente de pagos iguales", en: "Initial liability: present value of equal payments" },
            expression: "Pasivo inicial = Pago × [1 − (1 + r)^−n] ÷ r   (pagos iguales al final de cada periodo)",
            variables: [
              { symbol: "Pago", meaning: { es: "La renta que se paga en cada periodo, en pesos.", en: "The rent paid each period, in pesos." } },
              { symbol: "r", meaning: { es: "Tasa de descuento por periodo, en decimal (8 % anual = 0.08 si los pagos son anuales).", en: "Discount rate per period, as a decimal (8% per year = 0.08 if payments are annual)." } },
              { symbol: "n", meaning: { es: "Número de pagos que faltan.", en: "Number of payments remaining." } },
              { symbol: "(1 + r)^−n", meaning: { es: "Significa 1 ÷ (1 + r)ⁿ: cuánto vale hoy un peso que recibirás dentro de n periodos.", en: "Means 1 ÷ (1 + r)ⁿ: what a peso received n periods from now is worth today." } },
            ],
            steps: [
              { es: "Convierte la tasa a decimal: 6 % = 0.06.", en: "Convert the rate to a decimal: 6% = 0.06." },
              { es: "Calcula (1 + r)ⁿ y luego 1 ÷ ese resultado.", en: "Compute (1 + r)ⁿ and then 1 ÷ that result." },
              { es: "Réstalo de 1 y divide entre r: obtienes el factor.", en: "Subtract it from 1 and divide by r: you get the factor." },
              { es: "Multiplica el pago por el factor: pasivo inicial (y monto inicial del activo por derecho de uso).", en: "Multiply the payment by the factor: initial liability (and initial right-of-use asset)." },
            ],
            example: {
              es: "Pago $20,000 al final de cada año durante 5 años; tasa 6 %. 1.06⁵ = 1.338226; 1 ÷ 1.338226 = 0.747258. Factor = (1 − 0.747258) ÷ 0.06 = 4.212364. Pasivo inicial = 20,000 × 4.212364 = **$84,247.28** (menos que la suma simple de $100,000).",
              en: "Payment $20,000 at the end of each year for 5 years; rate 6%. 1.06⁵ = 1.338226; 1 ÷ 1.338226 = 0.747258. Factor = (1 − 0.747258) ÷ 0.06 = 4.212364. Initial liability = 20,000 × 4.212364 = **$84,247.28** (less than the simple sum of $100,000).",
            },
            mistake: {
              es: "Sumar los pagos sin descontarlos, o usar una tasa anual con pagos mensuales sin convertirla.",
              en: "Adding the payments without discounting them, or using an annual rate with monthly payments without converting it.",
            },
          },
        ],
      },
      {
        heading: { es: "Medición posterior", en: "Subsequent measurement" },
        body: [
          {
            es: "El pasivo devenga **interés** (saldo × tasa) y disminuye con cada pago. El activo por derecho de uso se **deprecia**, normalmente en línea recta durante el plazo del arrendamiento (o la vida útil, si es menor). Así, en el estado de resultados aparecen gasto por intereses y gasto por depreciación, en lugar de un gasto de renta.",
            en: "The liability accrues **interest** (balance × rate) and decreases with each payment. The right-of-use asset is **depreciated**, usually straight-line over the lease term (or useful life, if shorter). Thus the income statement shows interest expense and depreciation expense instead of rent expense.",
          },
        ],
        formulas: [
          {
            name: { es: "Interés y saldo del pasivo por arrendamiento al final del año", en: "Interest and lease liability balance at year-end" },
            expression: "Interés = Pasivo inicial × r; Pasivo final = Pasivo inicial + Interés − Pago",
            variables: [
              { symbol: "Pasivo inicial", meaning: { es: "Saldo de la deuda al inicio del año, en pesos.", en: "Debt balance at the start of the year, in pesos." } },
              { symbol: "r", meaning: { es: "Tasa del arrendamiento por periodo, en decimal.", en: "Lease rate per period, as a decimal." } },
              { symbol: "Interés", meaning: { es: "Gasto por intereses del año, en pesos.", en: "Interest expense for the year, in pesos." } },
              { symbol: "Pago", meaning: { es: "La renta pagada en el año, en pesos.", en: "The rent paid during the year, in pesos." } },
              { symbol: "Pasivo final", meaning: { es: "Lo que se sigue debiendo al cierre, en pesos.", en: "What is still owed at year-end, in pesos." } },
            ],
            steps: [
              { es: "Multiplica el pasivo inicial por la tasa: interés del año.", en: "Multiply the opening liability by the rate: interest for the year." },
              { es: "Suma el interés al pasivo inicial.", en: "Add the interest to the opening liability." },
              { es: "Resta el pago: pasivo al final del año.", en: "Subtract the payment: liability at year-end." },
            ],
            example: {
              es: "Pasivo inicial $84,247.28; tasa 6 %; pago $20,000. Interés = 84,247.28 × 0.06 = **$5,054.84**. Pasivo final = 84,247.28 + 5,054.84 − 20,000 = **$69,302.12**.",
              en: "Opening liability $84,247.28; rate 6%; payment $20,000. Interest = 84,247.28 × 0.06 = **$5,054.84**. Closing liability = 84,247.28 + 5,054.84 − 20,000 = **$69,302.12**.",
            },
            mistake: {
              es: "Restar el pago completo sin sumar antes el interés: parte del pago cubre intereses y solo el resto reduce la deuda.",
              en: "Subtracting the full payment without first adding interest: part of the payment covers interest and only the rest reduces the debt.",
            },
          },
          {
            name: { es: "Depreciación del activo por derecho de uso", en: "Right-of-use asset depreciation" },
            expression: "Depreciación anual = Activo por derecho de uso ÷ Plazo del arrendamiento (años)",
            variables: [
              { symbol: "Activo por derecho de uso", meaning: { es: "El monto inicial del activo (igual al pasivo inicial si no hay otros costos), en pesos.", en: "The initial amount of the asset (equal to the initial liability if there are no other costs), in pesos." } },
              { symbol: "Plazo del arrendamiento", meaning: { es: "Años del contrato (o la vida útil, si es menor).", en: "Years of the contract (or useful life, if shorter)." } },
            ],
            steps: [
              { es: "Toma el monto inicial del activo por derecho de uso.", en: "Take the initial right-of-use asset amount." },
              { es: "Divídelo entre los años del plazo: depreciación de cada año (línea recta, sin valor residual).", en: "Divide it by the years of the term: depreciation for each year (straight-line, no residual value)." },
            ],
            example: {
              es: "Activo $84,247.28; plazo 5 años. Depreciación = 84,247.28 ÷ 5 = **$16,849.46** por año. Gasto total del año 1 = 5,054.84 de intereses + 16,849.46 de depreciación = $21,904.30.",
              en: "Asset $84,247.28; term 5 years. Depreciation = 84,247.28 ÷ 5 = **$16,849.46** per year. Total year-1 expense = 5,054.84 interest + 16,849.46 depreciation = $21,904.30.",
            },
          },
        ],
      },
      {
        heading: { es: "Control y consolidación", en: "Control and consolidation" },
        body: [
          {
            es: "En palabras sencillas: cuando una empresa (la **controladora**) manda sobre otra (la **subsidiaria**), presenta sus números como si fueran un solo negocio; a eso se le llama **consolidar**. La clave no es solo cuántas acciones tienes, sino si de verdad **decides** lo importante de la otra empresa y te beneficias de ello.",
            en: "In plain words: when one company (the **parent**) is in charge of another (the **subsidiary**), it presents their numbers as if they were a single business; that is called **consolidating**. The key is not only how many shares you hold, but whether you truly **decide** what matters in the other company and benefit from it.",
          },
          {
            es: "Una controladora consolida a sus subsidiarias (NIF B-8 / IFRS 10). Un inversionista tiene **control** cuando reúne tres elementos: (1) **poder** sobre las actividades relevantes de la participada; (2) **exposición o derecho a rendimientos variables**; y (3) **capacidad de usar su poder** para afectar esos rendimientos. Normalmente más del 50 % de los votos otorga control, pero puede haber control con menos (por acuerdos o derechos contractuales) y no haberlo con más.",
            en: "A parent consolidates its subsidiaries (NIF B-8 / IFRS 10). An investor has **control** when it has three elements: (1) **power** over the investee's relevant activities; (2) **exposure or rights to variable returns**; and (3) the **ability to use its power** to affect those returns. Usually more than 50% of the votes gives control, but control may exist with less (through agreements or contractual rights) and may be absent with more.",
          },
          {
            es: "Con influencia significativa (sin control) la inversión es una **asociada** y se reconoce por el **método de participación** (NIF C-7 / IAS 28); con control conjunto se trata de un **negocio conjunto**.",
            en: "With significant influence (without control) the investment is an **associate**, accounted for using the **equity method** (NIF C-7 / IAS 28); with joint control it is a **joint venture**.",
          },
        ],
      },
      {
        heading: { es: "Eliminaciones intercompañía", en: "Intercompany eliminations" },
        body: [
          {
            es: "Los estados consolidados presentan al grupo como **una sola entidad económica**. Se suman renglón por renglón los estados de la controladora y las subsidiarias y se **eliminan**: la inversión de la controladora contra el capital de la subsidiaria, los saldos por cobrar y por pagar entre ellas, las ventas y compras entre ellas y las utilidades no realizadas. La parte del capital de la subsidiaria que no pertenece a la controladora se presenta como **participación no controladora**.",
            en: "Consolidated statements present the group as **a single economic entity**. The parent's and subsidiaries' statements are added line by line and the following are **eliminated**: the parent's investment against the subsidiary's equity, receivables and payables between them, sales and purchases between them and unrealized profits. The part of the subsidiary's equity not owned by the parent is presented as **non-controlling interest**.",
          },
        ],
        formulas: [
          {
            name: { es: "Saldo consolidado de un renglón", en: "Consolidated balance of a line item" },
            expression: "Saldo consolidado = Saldo de la controladora + Saldo de la subsidiaria − Operaciones intercompañía",
            variables: [
              { symbol: "Saldo de la controladora", meaning: { es: "El importe del renglón (ventas, clientes, proveedores) en los estados de la controladora, en pesos.", en: "The line item amount (sales, receivables, payables) in the parent's statements, in pesos." } },
              { symbol: "Saldo de la subsidiaria", meaning: { es: "El mismo renglón en los estados de la subsidiaria, en pesos.", en: "The same line item in the subsidiary's statements, in pesos." } },
              { symbol: "Operaciones intercompañía", meaning: { es: "La parte de ese renglón que es entre empresas del mismo grupo (una le vende o le debe a la otra), en pesos.", en: "The part of that line that is between companies of the same group (one sells to or owes the other), in pesos." } },
            ],
            steps: [
              { es: "Suma el renglón de la controladora y el de la subsidiaria.", en: "Add the parent's and the subsidiary's line item." },
              { es: "Identifica cuánto de ese renglón es con la otra empresa del grupo.", en: "Identify how much of that line is with the other group company." },
              { es: "Réstalo. Si una empresa tiene la cuenta por cobrar, la otra tiene la misma cuenta por pagar: elimina las dos.", en: "Subtract it. If one company has the receivable, the other has the same payable: eliminate both." },
            ],
            example: {
              es: "Clientes: controladora $200,000 (incluye $20,000 que le debe la subsidiaria) y subsidiaria $70,000. Clientes consolidados = 200,000 + 70,000 − 20,000 = **$250,000**. Del lado de la subsidiaria, sus proveedores también bajan esos $20,000.",
              en: "Receivables: parent $200,000 (including $20,000 owed by the subsidiary) and subsidiary $70,000. Consolidated receivables = 200,000 + 70,000 − 20,000 = **$250,000**. On the subsidiary's side, its payables also drop by those $20,000.",
            },
            interpret: {
              es: "Piénsalo como una familia: si tu hermano te debe $500, la familia en conjunto no es más rica ni más pobre. El grupo no puede venderse ni deberse a sí mismo.",
              en: "Think of it as a family: if your brother owes you $500, the family as a whole is neither richer nor poorer. A group cannot sell to or owe itself.",
            },
            mistake: {
              es: "Eliminar el saldo intercompañía de un solo lado (solo clientes y no proveedores).",
              en: "Eliminating the intercompany balance on one side only (receivables but not payables).",
            },
          },
        ],
      },
    ],
    examples: [
      {
        title: { es: "Arrendamiento a 4 años", en: "Four-year lease" },
        problem: {
          es: "Un arrendatario pagará $50,000 al final de cada año durante 4 años. Tasa incremental de financiamiento: 8 % anual. Calcula el pasivo inicial y los importes del primer año.",
          en: "A lessee will pay $50,000 at the end of each year for 4 years. Incremental borrowing rate: 8% per year. Compute the initial liability and first-year amounts.",
        },
        steps: [
          { es: "Factor = [1 − 1.08^−4] / 0.08 = [1 − 0.73502985] / 0.08 = 3.31212684.", en: "Factor = [1 − 1.08^−4] / 0.08 = [1 − 0.73502985] / 0.08 = 3.31212684." },
          { es: "Pasivo inicial = 50,000 × 3.31212684 = $165,606.34 = activo por derecho de uso.", en: "Initial liability = 50,000 × 3.31212684 = $165,606.34 = right-of-use asset." },
          { es: "Interés año 1 = 165,606.34 × 8 % = $13,248.51.", en: "Year-1 interest = 165,606.34 × 8% = $13,248.51." },
          { es: "Pasivo al cierre = 165,606.34 + 13,248.51 − 50,000 = $128,854.85.", en: "Liability at year-end = 165,606.34 + 13,248.51 − 50,000 = $128,854.85." },
          { es: "Depreciación año 1 = 165,606.34 / 4 = $41,401.59.", en: "Year-1 depreciation = 165,606.34 / 4 = $41,401.59." },
        ],
        result: { es: "Pasivo inicial $165,606.34; gasto del año 1: intereses $13,248.51 + depreciación $41,401.59.", en: "Initial liability $165,606.34; year-1 expense: interest $13,248.51 + depreciation $41,401.59." },
      },
      {
        title: { es: "Eliminación de ventas y saldos intercompañía", en: "Eliminating intercompany sales and balances" },
        problem: {
          es: "La controladora vendió $80,000 a su subsidiaria, que revendió todo a terceros en el año; al cierre la subsidiaria aún le debe $30,000. Ventas: controladora $900,000 (incluye las $80,000); subsidiaria $400,000. Clientes: controladora $150,000 (incluye los $30,000); subsidiaria $60,000.",
          en: "The parent sold $80,000 to its subsidiary, which resold everything to third parties during the year; at year-end the subsidiary still owes it $30,000. Sales: parent $900,000 (including the $80,000); subsidiary $400,000. Receivables: parent $150,000 (including the $30,000); subsidiary $60,000.",
        },
        steps: [
          { es: "Ventas consolidadas = 900,000 + 400,000 − 80,000 = $1,220,000.", en: "Consolidated sales = 900,000 + 400,000 − 80,000 = $1,220,000." },
          { es: "Clientes consolidados = 150,000 + 60,000 − 30,000 = $180,000.", en: "Consolidated receivables = 150,000 + 60,000 − 30,000 = $180,000." },
          { es: "También se eliminan $30,000 de Proveedores de la subsidiaria y $80,000 del costo de ventas del grupo (la compra intercompañía).", en: "Also eliminate $30,000 from the subsidiary's payables and $80,000 from group cost of sales (the intercompany purchase)." },
        ],
        result: { es: "Ventas consolidadas $1,220,000; Clientes consolidados $180,000.", en: "Consolidated sales $1,220,000; consolidated receivables $180,000." },
      },
    ],
    keyPoints: [
      { es: "Arrendatario: activo por derecho de uso + pasivo por arrendamiento al valor presente de los pagos.", en: "Lessee: right-of-use asset + lease liability at the present value of payments." },
      { es: "El pasivo genera interés; el activo se deprecia.", en: "The liability accrues interest; the asset is depreciated." },
      { es: "Control = poder + rendimientos variables + capacidad de usar el poder.", en: "Control = power + variable returns + ability to use power." },
      { es: "Al consolidar se eliminan saldos, operaciones y utilidades no realizadas entre empresas del grupo.", en: "On consolidation, intercompany balances, transactions and unrealized profits are eliminated." },
    ],
    normativeNote: {
      es: "Jurisdicción: México (NIF D-5 Arrendamientos; NIF B-8 Estados financieros consolidados o combinados; NIF C-7 Inversiones en asociadas, CINIF) con referencia a IFRS 16, IFRS 10 e IAS 28 (IASB). Contenido educativo de nivel introductorio que omite casos especiales. Verifica las normas vigentes a la fecha de consulta (2026).",
      en: "Jurisdiction: Mexico (NIF D-5 Leases; NIF B-8 Consolidated or combined financial statements; NIF C-7 Investments in associates, CINIF) with reference to IFRS 16, IFRS 10 and IAS 28 (IASB). Introductory educational content that omits special cases. Verify the current standards as of the date you consult them (2026).",
    },
    exerciseIds: ['N2-037', 'N2-038', 'N2-039', 'N2-040', 'N2-041', 'N2-042', 'N2-043', 'N2-044'],
  },
]

export const exercises: Exercise[] = [
  // ═════════════════════════ L2-01 ═════════════════════════
  {
    id: 'N2-001',
    level: 2,
    module: 'L2-01',
    kind: 'mcq',
    flavor: 'concept',
    prompt: { es: "¿Cuál de estas partidas se presenta en el estado de resultados?", en: "Which of these items is presented in the income statement?" },
    options: [
      { id: 'N2-001-a', text: { es: "Inventarios", en: "Inventory" } },
      { id: 'N2-001-b', text: { es: "Depreciación acumulada", en: "Accumulated depreciation" } },
      { id: 'N2-001-c', text: { es: "Utilidades retenidas", en: "Retained earnings" } },
      { id: 'N2-001-d', text: { es: "Costo de ventas", en: "Cost of goods sold" } },
    ],
    correctOptionId: 'N2-001-d',
    explanation: {
      es: "Costo de ventas es un costo del periodo: va al estado de resultados. Inventarios (activo), Depreciación acumulada (complementaria de activo) y Utilidades retenidas (capital) son saldos a una fecha del estado de situación financiera. Ojo: el *gasto* por depreciación sí va a resultados, la depreciación *acumulada* no.",
      en: "Cost of goods sold is a period cost: it goes to the income statement. Inventory (asset), Accumulated depreciation (contra-asset) and Retained earnings (equity) are balances at a date in the statement of financial position. Note: depreciation *expense* goes to the income statement, *accumulated* depreciation does not.",
    },
    difficulty: 1,
    points: 10,
    competency: 'financial-statements',
  },
  {
    id: 'N2-002',
    level: 2,
    module: 'L2-01',
    kind: 'classify',
    flavor: 'concept',
    prompt: { es: "Clasifica cada cuenta según el estado financiero en que se presenta.", en: "Classify each account by the financial statement in which it is presented." },
    categories: [
      { id: 'N2-002-c1', label: { es: "Estado de situación financiera", en: "Statement of financial position" } },
      { id: 'N2-002-c2', label: { es: "Estado de resultados", en: "Income statement" } },
    ],
    items: [
      { id: 'N2-002-i1', label: { es: "Proveedores", en: "Accounts payable" }, correctCategoryId: 'N2-002-c1' },
      { id: 'N2-002-i2', label: { es: "Ventas", en: "Sales" }, correctCategoryId: 'N2-002-c2' },
      { id: 'N2-002-i3', label: { es: "Gasto por depreciación", en: "Depreciation expense" }, correctCategoryId: 'N2-002-c2' },
      { id: 'N2-002-i4', label: { es: "Estimación para cuentas incobrables", en: "Allowance for doubtful accounts" }, correctCategoryId: 'N2-002-c1' },
      { id: 'N2-002-i5', label: { es: "ISR del ejercicio", en: "Income tax expense" }, correctCategoryId: 'N2-002-c2' },
      { id: 'N2-002-i6', label: { es: "Anticipos de clientes", en: "Customer advances" }, correctCategoryId: 'N2-002-c1' },
    ],
    explanation: {
      es: "Activos, pasivos, capital y sus complementarias (Proveedores, Estimación, Anticipos de clientes) van al estado de situación financiera. Ingresos, costos y gastos (Ventas, Gasto por depreciación, ISR del ejercicio) van al estado de resultados. Error común: creer que Anticipos de clientes es ingreso.",
      en: "Assets, liabilities, equity and their contra accounts (Payables, Allowance, Customer advances) go to the statement of financial position. Revenue, costs and expenses (Sales, Depreciation expense, Income tax expense) go to the income statement. Common mistake: treating Customer advances as revenue.",
    },
    difficulty: 1,
    points: 10,
    competency: 'financial-statements',
  },
  {
    id: 'N2-003',
    level: 2,
    module: 'L2-01',
    kind: 'truefalse',
    flavor: 'concept',
    prompt: {
      es: "El estado de situación financiera muestra el desempeño de la entidad durante un periodo, por ejemplo del 1 de enero al 31 de diciembre.",
      en: "The statement of financial position shows the entity's performance over a period, for example from January 1 to December 31.",
    },
    answer: false,
    explanation: {
      es: "Falso. El estado de situación financiera presenta saldos **a una fecha** (p. ej. 'al 31 de diciembre'). El desempeño de un periodo lo muestra el estado de resultados ('del 1 de enero al 31 de diciembre').",
      en: "False. The statement of financial position presents balances **at a date** (e.g. 'as at December 31'). Performance over a period is shown by the income statement ('for the year January 1 to December 31').",
    },
    difficulty: 1,
    points: 10,
    competency: 'financial-statements',
  },
  {
    id: 'N2-004',
    level: 2,
    module: 'L2-01',
    kind: 'fields',
    flavor: 'statement',
    context: {
      es: "Datos del año de Distribuidora Norte: Ventas $500,000; Devoluciones sobre ventas $20,000; Costo de ventas $280,000; Gastos de operación $90,000; Gasto por intereses $10,000. Tasa de ISR: 30 % (supuesto educativo).",
      en: "Distribuidora Norte's data for the year: Sales $500,000; Sales returns $20,000; Cost of goods sold $280,000; Operating expenses $90,000; Interest expense $10,000. Income tax rate: 30% (educational assumption).",
    },
    prompt: { es: "Completa el estado de resultados, en pesos.", en: "Complete the income statement, in pesos." },
    fields: [
      { id: 'f1', label: { es: "Ventas netas", en: "Net sales" }, answer: 480000, unit: 'MXN', tolerance: { abs: 0.5 } },
      { id: 'f2', label: { es: "Utilidad bruta", en: "Gross profit" }, answer: 200000, unit: 'MXN', tolerance: { abs: 0.5 } },
      { id: 'f3', label: { es: "Utilidad de operación", en: "Operating profit" }, answer: 110000, unit: 'MXN', tolerance: { abs: 0.5 } },
      { id: 'f4', label: { es: "Utilidad antes de impuestos", en: "Profit before tax" }, answer: 100000, unit: 'MXN', tolerance: { abs: 0.5 } },
      { id: 'f5', label: { es: "Utilidad neta", en: "Net profit" }, answer: 70000, unit: 'MXN', tolerance: { abs: 0.5 } },
    ],
    explanation: {
      es: "Ventas netas = 500,000 − 20,000 = 480,000. Utilidad bruta = 480,000 − 280,000 = 200,000. Utilidad de operación = 200,000 − 90,000 = 110,000. Antes de impuestos = 110,000 − 10,000 = 100,000. ISR = 30 % × 100,000 = 30,000; utilidad neta = 70,000. Error común: restar el costo de ventas a las ventas brutas, olvidando las devoluciones.",
      en: "Net sales = 500,000 − 20,000 = 480,000. Gross profit = 480,000 − 280,000 = 200,000. Operating profit = 200,000 − 90,000 = 110,000. Before tax = 110,000 − 10,000 = 100,000. Tax = 30% × 100,000 = 30,000; net profit = 70,000. Common mistake: subtracting COGS from gross sales and forgetting returns.",
    },
    difficulty: 3,
    points: 20,
    competency: 'financial-statements',
  },
  {
    id: 'N2-005',
    level: 2,
    module: 'L2-01',
    kind: 'numeric',
    flavor: 'case',
    context: {
      es: "Saldos al 31 de diciembre: Bancos $60,000; Clientes $45,000; Inventarios $75,000; Proveedores $50,000; Sueldos por pagar $10,000; Préstamo bancario a largo plazo (vence en 2030) $100,000.",
      en: "Balances at December 31: Bank $60,000; Accounts receivable $45,000; Inventory $75,000; Accounts payable $50,000; Salaries payable $10,000; Long-term bank loan (due 2030) $100,000.",
    },
    prompt: { es: "Calcula el capital de trabajo, en pesos.", en: "Compute working capital, in pesos." },
    answer: 120000,
    unit: 'MXN',
    decimals: 0,
    tolerance: { abs: 0.5 },
    explanation: {
      es: "Activo circulante = 60,000 + 45,000 + 75,000 = 180,000. Pasivo a corto plazo = 50,000 + 10,000 = 60,000. Capital de trabajo = 180,000 − 60,000 = $120,000. El préstamo vence a largo plazo, así que no se incluye (si se incluyera daría 20,000).",
      en: "Current assets = 60,000 + 45,000 + 75,000 = 180,000. Current liabilities = 50,000 + 10,000 = 60,000. Working capital = 180,000 − 60,000 = $120,000. The loan is long-term, so it is excluded (including it would give 20,000).",
    },
    difficulty: 2,
    points: 15,
    competency: 'financial-statements',
  },
  {
    id: 'N2-006',
    level: 2,
    module: 'L2-01',
    kind: 'mcq',
    flavor: 'case',
    context: {
      es: "Una empresa tiene un préstamo bancario de $300,000; de ese monto, $60,000 se pagarán en los próximos 12 meses y el resto en años posteriores.",
      en: "A company has a $300,000 bank loan; $60,000 of it will be repaid within the next 12 months and the rest in later years.",
    },
    prompt: { es: "¿Cómo se presenta en el estado de situación financiera?", en: "How is it presented in the statement of financial position?" },
    options: [
      { id: 'N2-006-a', text: { es: "$300,000 como pasivo a largo plazo", en: "$300,000 as a non-current liability" } },
      { id: 'N2-006-b', text: { es: "$60,000 a corto plazo y $240,000 a largo plazo", en: "$60,000 current and $240,000 non-current" } },
      { id: 'N2-006-c', text: { es: "$300,000 como pasivo a corto plazo", en: "$300,000 as a current liability" } },
      { id: 'N2-006-d', text: { es: "$240,000 a corto plazo y $60,000 a largo plazo", en: "$240,000 current and $60,000 non-current" } },
    ],
    correctOptionId: 'N2-006-b',
    explanation: {
      es: "La porción que vence dentro de 12 meses ($60,000) es pasivo a corto plazo; el resto (300,000 − 60,000 = $240,000) es de largo plazo. Presentar todo a largo plazo subestima las obligaciones inmediatas y distorsiona el capital de trabajo.",
      en: "The portion due within 12 months ($60,000) is a current liability; the rest (300,000 − 60,000 = $240,000) is non-current. Presenting it all as non-current understates near-term obligations and distorts working capital.",
    },
    difficulty: 2,
    points: 15,
    competency: 'financial-statements',
  },

  // ═════════════════════════ L2-02 ═════════════════════════
  {
    id: 'N2-007',
    level: 2,
    module: 'L2-02',
    kind: 'classify',
    flavor: 'concept',
    prompt: { es: "Clasifica cada flujo de efectivo según la actividad a la que pertenece.", en: "Classify each cash flow by the activity it belongs to." },
    categories: [
      { id: 'N2-007-c1', label: { es: "Operación", en: "Operating" } },
      { id: 'N2-007-c2', label: { es: "Inversión", en: "Investing" } },
      { id: 'N2-007-c3', label: { es: "Financiamiento", en: "Financing" } },
    ],
    items: [
      { id: 'N2-007-i1', label: { es: "Cobros a clientes por ventas", en: "Collections from customers for sales" }, correctCategoryId: 'N2-007-c1' },
      { id: 'N2-007-i2', label: { es: "Compra de maquinaria", en: "Purchase of machinery" }, correctCategoryId: 'N2-007-c2' },
      { id: 'N2-007-i3', label: { es: "Préstamo bancario recibido", en: "Bank loan received" }, correctCategoryId: 'N2-007-c3' },
      { id: 'N2-007-i4', label: { es: "Pago de sueldos a empleados", en: "Salaries paid to employees" }, correctCategoryId: 'N2-007-c1' },
      { id: 'N2-007-i5', label: { es: "Venta de un terreno", en: "Sale of land" }, correctCategoryId: 'N2-007-c2' },
      { id: 'N2-007-i6', label: { es: "Pago de dividendos a los accionistas", en: "Dividends paid to shareholders" }, correctCategoryId: 'N2-007-c3' },
    ],
    explanation: {
      es: "Operación: actividades principales (cobros a clientes, sueldos). Inversión: compra y venta de activos de largo plazo (maquinaria, terreno). Financiamiento: deuda y capital (préstamo, dividendos pagados). Un error común es clasificar la venta del terreno como operación por generar dinero: no es la actividad principal.",
      en: "Operating: main activities (customer collections, salaries). Investing: buying and selling long-term assets (machinery, land). Financing: debt and equity (loan, dividends paid). A common mistake is classifying the land sale as operating because it brings in cash: it is not the main activity.",
    },
    difficulty: 1,
    points: 10,
    competency: 'cash-flow',
  },
  {
    id: 'N2-008',
    level: 2,
    module: 'L2-02',
    kind: 'numeric',
    flavor: 'case',
    context: {
      es: "Datos del año: utilidad neta $120,000; depreciación $25,000; Clientes aumentó $18,000; Inventarios disminuyó $7,000; Proveedores aumentó $10,000.",
      en: "Data for the year: net profit $120,000; depreciation $25,000; Receivables increased $18,000; Inventory decreased $7,000; Payables increased $10,000.",
    },
    prompt: {
      es: "Calcula el flujo neto de efectivo de actividades de operación por el método indirecto, en pesos.",
      en: "Compute net cash flow from operating activities using the indirect method, in pesos.",
    },
    answer: 144000,
    unit: 'MXN',
    decimals: 0,
    tolerance: { abs: 0.5 },
    explanation: {
      es: "120,000 + 25,000 (depreciación) − 18,000 (aumento de clientes) + 7,000 (disminución de inventarios) + 10,000 (aumento de proveedores) = $144,000. Error común: restar la disminución de inventarios; una disminución de un activo libera efectivo, por eso suma.",
      en: "120,000 + 25,000 (depreciation) − 18,000 (increase in receivables) + 7,000 (decrease in inventory) + 10,000 (increase in payables) = $144,000. Common mistake: subtracting the inventory decrease; a decrease in an asset releases cash, so it is added.",
    },
    difficulty: 2,
    points: 15,
    competency: 'cash-flow',
  },
  {
    id: 'N2-009',
    level: 2,
    module: 'L2-02',
    kind: 'truefalse',
    flavor: 'concept',
    prompt: {
      es: "En el método indirecto la depreciación se suma a la utilidad porque es un gasto que no implicó salida de efectivo en el periodo.",
      en: "In the indirect method depreciation is added to profit because it is an expense that involved no cash outflow in the period.",
    },
    answer: true,
    explanation: {
      es: "Verdadero. La depreciación redujo la utilidad pero no el efectivo (el desembolso ocurrió al comprar el activo, y se clasificó como inversión). Por eso se suma de regreso. No significa que la depreciación 'genere' efectivo.",
      en: "True. Depreciation reduced profit but not cash (the outflow happened when the asset was bought and was classified as investing). That is why it is added back. It does not mean depreciation 'generates' cash.",
    },
    difficulty: 1,
    points: 10,
    competency: 'cash-flow',
  },
  {
    id: 'N2-010',
    level: 2,
    module: 'L2-02',
    kind: 'fields',
    flavor: 'statement',
    context: {
      es: "Capital social inicial $500,000; aportación de socios en el año $100,000. Utilidades retenidas iniciales $180,000; utilidad neta del año $90,000; dividendos decretados $40,000.",
      en: "Opening share capital $500,000; partner contribution during the year $100,000. Opening retained earnings $180,000; net profit for the year $90,000; dividends declared $40,000.",
    },
    prompt: { es: "Completa el estado de cambios en el capital contable, en pesos.", en: "Complete the statement of changes in equity, in pesos." },
    fields: [
      { id: 'f1', label: { es: "Capital social final", en: "Closing share capital" }, answer: 600000, unit: 'MXN', tolerance: { abs: 0.5 } },
      { id: 'f2', label: { es: "Utilidades retenidas finales", en: "Closing retained earnings" }, answer: 230000, unit: 'MXN', tolerance: { abs: 0.5 } },
      { id: 'f3', label: { es: "Capital contable total final", en: "Total closing equity" }, answer: 830000, unit: 'MXN', tolerance: { abs: 0.5 } },
    ],
    explanation: {
      es: "Capital social = 500,000 + 100,000 = 600,000. Utilidades retenidas = 180,000 + 90,000 − 40,000 = 230,000. Total = 600,000 + 230,000 = $830,000. Error común: restar los dividendos del capital social en lugar de las utilidades retenidas.",
      en: "Share capital = 500,000 + 100,000 = 600,000. Retained earnings = 180,000 + 90,000 − 40,000 = 230,000. Total = 600,000 + 230,000 = $830,000. Common mistake: deducting dividends from share capital instead of retained earnings.",
    },
    difficulty: 2,
    points: 15,
    competency: 'equity-changes',
  },
  {
    id: 'N2-011',
    level: 2,
    module: 'L2-02',
    kind: 'mcq',
    flavor: 'concept',
    prompt: { es: "¿Qué partida **no** aparece en el estado de cambios en el capital contable?", en: "Which item does **not** appear in the statement of changes in equity?" },
    options: [
      { id: 'N2-011-a', text: { es: "Aportación de capital de los socios", en: "Capital contribution by partners" } },
      { id: 'N2-011-b', text: { es: "Dividendos decretados", en: "Dividends declared" } },
      { id: 'N2-011-c', text: { es: "Compra de inventario a crédito", en: "Purchase of inventory on credit" } },
      { id: 'N2-011-d', text: { es: "Utilidad integral del ejercicio", en: "Comprehensive income for the year" } },
    ],
    correctOptionId: 'N2-011-c',
    explanation: {
      es: "Comprar inventario a crédito aumenta un activo y un pasivo, sin afectar el capital, así que no aparece. Aportaciones, dividendos y la utilidad integral son precisamente los movimientos que explica este estado.",
      en: "Buying inventory on credit increases an asset and a liability without affecting equity, so it does not appear. Contributions, dividends and comprehensive income are exactly the movements this statement explains.",
    },
    difficulty: 1,
    points: 10,
    competency: 'equity-changes',
  },
  {
    id: 'N2-012',
    level: 2,
    module: 'L2-02',
    kind: 'formula',
    flavor: 'concept',
    prompt: { es: "Completa la conciliación del efectivo en el estado de flujos.", en: "Complete the cash reconciliation in the cash flow statement." },
    template: 'Efectivo al final del periodo = {{b1}} + {{b2}}',
    blanks: [
      {
        id: 'b1',
        options: [
          { id: 'N2-012-b1-a', text: { es: "Utilidad neta", en: "Net profit" } },
          { id: 'N2-012-b1-b', text: { es: "Efectivo al inicio del periodo", en: "Cash at the beginning of the period" } },
          { id: 'N2-012-b1-c', text: { es: "Capital social", en: "Share capital" } },
          { id: 'N2-012-b1-d', text: { es: "Activo circulante", en: "Current assets" } },
        ],
        correctOptionId: 'N2-012-b1-b',
      },
      {
        id: 'b2',
        options: [
          { id: 'N2-012-b2-a', text: { es: "Aumento (disminución) neto de efectivo", en: "Net increase (decrease) in cash" } },
          { id: 'N2-012-b2-b', text: { es: "Depreciación del periodo", en: "Depreciation for the period" } },
          { id: 'N2-012-b2-c', text: { es: "Ventas netas", en: "Net sales" } },
        ],
        correctOptionId: 'N2-012-b2-a',
      },
    ],
    explanation: {
      es: "El estado de flujos explica el cambio en el efectivo: efectivo inicial + aumento (o disminución) neto (suma de operación, inversión y financiamiento) = efectivo final. La utilidad neta no es igual al aumento de efectivo por la devengación.",
      en: "The cash flow statement explains the change in cash: opening cash + net increase (or decrease) (sum of operating, investing and financing) = closing cash. Net profit is not equal to the increase in cash because of accrual accounting.",
    },
    difficulty: 1,
    points: 10,
    competency: 'cash-flow',
  },

  // ═════════════════════════ L2-03 ═════════════════════════
  {
    id: 'N2-013',
    level: 2,
    module: 'L2-03',
    kind: 'formula',
    flavor: 'concept',
    prompt: { es: "Completa la fórmula de depreciación en línea recta.", en: "Complete the straight-line depreciation formula." },
    template: 'Depreciación anual = ({{b1}} − {{b2}}) / {{b3}}',
    blanks: [
      {
        id: 'b1',
        options: [
          { id: 'N2-013-b1-a', text: { es: "Valor de mercado", en: "Market value" } },
          { id: 'N2-013-b1-b', text: { es: "Valor residual", en: "Residual value" } },
          { id: 'N2-013-b1-c', text: { es: "Costo de adquisición", en: "Acquisition cost" } },
        ],
        correctOptionId: 'N2-013-b1-c',
      },
      {
        id: 'b2',
        options: [
          { id: 'N2-013-b2-a', text: { es: "Valor residual", en: "Residual value" } },
          { id: 'N2-013-b2-b', text: { es: "Depreciación acumulada", en: "Accumulated depreciation" } },
          { id: 'N2-013-b2-c', text: { es: "IVA acreditable", en: "Creditable VAT" } },
        ],
        correctOptionId: 'N2-013-b2-a',
      },
      {
        id: 'b3',
        options: [
          { id: 'N2-013-b3-a', text: { es: "Unidades producidas en el año", en: "Units produced in the year" } },
          { id: 'N2-013-b3-b', text: { es: "Vida útil estimada (años)", en: "Estimated useful life (years)" } },
          { id: 'N2-013-b3-c', text: { es: "Tasa de interés", en: "Interest rate" } },
        ],
        correctOptionId: 'N2-013-b3-b',
      },
    ],
    explanation: {
      es: "El monto depreciable es el costo menos el valor residual, y en línea recta se reparte en partes iguales entre los años de vida útil. El valor de mercado no interviene: la depreciación asigna costo, no mide valor razonable.",
      en: "The depreciable amount is cost minus residual value, and straight-line spreads it equally over the years of useful life. Market value plays no role: depreciation allocates cost, it does not measure fair value.",
    },
    difficulty: 1,
    points: 10,
    competency: 'depreciation',
  },
  {
    id: 'N2-014',
    level: 2,
    module: 'L2-03',
    kind: 'numeric',
    flavor: 'concept',
    prompt: {
      es: "Una máquina cuesta $480,000, tiene valor residual de $30,000 y vida útil de 5 años. ¿Cuál es la depreciación anual en línea recta? Responde en pesos.",
      en: "A machine costs $480,000, has a residual value of $30,000 and a useful life of 5 years. What is the annual straight-line depreciation? Answer in pesos.",
    },
    answer: 90000,
    unit: 'MXN',
    decimals: 0,
    tolerance: { abs: 0.5 },
    explanation: {
      es: "(480,000 − 30,000) / 5 = 450,000 / 5 = $90,000 por año. Error común: dividir el costo sin restar el residual (96,000).",
      en: "(480,000 − 30,000) / 5 = 450,000 / 5 = $90,000 per year. Common mistake: dividing cost without subtracting the residual value (96,000).",
    },
    difficulty: 1,
    points: 10,
    competency: 'depreciation',
  },
  {
    id: 'N2-015',
    level: 2,
    module: 'L2-03',
    kind: 'numeric',
    flavor: 'case',
    context: {
      es: "Una prensa industrial costó $900,000, con valor residual estimado de $100,000 y una capacidad total estimada de 400,000 piezas. En el primer año produjo 65,000 piezas.",
      en: "An industrial press cost $900,000, with an estimated residual value of $100,000 and an estimated total capacity of 400,000 pieces. In the first year it produced 65,000 pieces.",
    },
    prompt: {
      es: "Calcula la depreciación del primer año por el método de unidades producidas, en pesos.",
      en: "Compute first-year depreciation using the units-of-production method, in pesos.",
    },
    answer: 130000,
    unit: 'MXN',
    decimals: 0,
    tolerance: { abs: 0.5 },
    explanation: {
      es: "Cuota por pieza = (900,000 − 100,000) / 400,000 = $2.00. Depreciación = 65,000 × 2.00 = $130,000. Error común: usar el costo completo (900,000 / 400,000 = 2.25 → 146,250).",
      en: "Rate per piece = (900,000 − 100,000) / 400,000 = $2.00. Depreciation = 65,000 × 2.00 = $130,000. Common mistake: using full cost (900,000 / 400,000 = 2.25 → 146,250).",
    },
    difficulty: 2,
    points: 15,
    competency: 'depreciation',
  },
  {
    id: 'N2-016',
    level: 2,
    module: 'L2-03',
    kind: 'journal',
    flavor: 'concept',
    prompt: {
      es: "Se adquirió equipo de cómputo por $72,000, sin valor residual y con vida útil de 3 años (línea recta). Registra el ajuste por la depreciación de **un mes**.",
      en: "Computer equipment was bought for $72,000, with no residual value and a 3-year useful life (straight-line). Record the adjustment for **one month** of depreciation.",
    },
    accountChoices: ['1102', '1205', '1207', '2102', '5101', '6105', '6108'],
    expected: [
      { accountCode: '6105', side: 'D', amount: 2000 },
      { accountCode: '1207', side: 'C', amount: 2000 },
    ],
    explanation: {
      es: "Anual = 72,000 / 3 = 24,000; mensual = 24,000 / 12 = $2,000. Cargo a Gasto por depreciación y abono a Depreciación acumulada. No se abona Equipo de cómputo: el costo histórico se conserva y la complementaria acumula la depreciación.",
      en: "Annual = 72,000 / 3 = 24,000; monthly = 24,000 / 12 = $2,000. Debit Depreciation expense and credit Accumulated depreciation. Computer equipment is not credited: historical cost is kept and the contra account accumulates depreciation.",
    },
    difficulty: 2,
    points: 15,
    competency: 'adjusting-entries',
  },
  {
    id: 'N2-017',
    level: 2,
    module: 'L2-03',
    kind: 'journal',
    flavor: 'case',
    prompt: {
      es: "El 1 de octubre se pagó un seguro anual por $24,000 y se registró en Pagos anticipados (seguros). Registra el ajuste al 31 de diciembre por la parte devengada. (No consideres IVA.)",
      en: "On October 1 a one-year insurance policy was paid for $24,000 and recorded in Prepaid expenses (insurance). Record the December 31 adjustment for the portion used up. (Ignore VAT.)",
    },
    accountChoices: ['1102', '1110', '2102', '6102', '6106', '6109', '1207'],
    expected: [
      { accountCode: '6106', side: 'D', amount: 6000 },
      { accountCode: '1110', side: 'C', amount: 6000 },
    ],
    explanation: {
      es: "Costo mensual = 24,000 / 12 = 2,000. De octubre a diciembre transcurrieron 3 meses: 3 × 2,000 = $6,000. Cargo a Gasto por seguros y abono a Pagos anticipados; quedan $18,000 como activo. Bancos no interviene: el pago ya se registró.",
      en: "Monthly cost = 24,000 / 12 = 2,000. October to December is 3 months: 3 × 2,000 = $6,000. Debit Insurance expense and credit Prepaid expenses; $18,000 remains as an asset. Bank is not involved: the payment was already recorded.",
    },
    difficulty: 2,
    points: 15,
    competency: 'adjusting-entries',
  },
  {
    id: 'N2-018',
    level: 2,
    module: 'L2-03',
    kind: 'journal',
    flavor: 'case',
    prompt: {
      es: "Al 31 de diciembre los empleados trabajaron la última semana del año, devengando sueldos por $14,500 que se pagarán el 5 de enero. Registra el ajuste. (Ignora retenciones y cuotas.)",
      en: "At December 31 employees worked the last week of the year, earning salaries of $14,500 that will be paid on January 5. Record the adjustment. (Ignore withholdings and contributions.)",
    },
    accountChoices: ['1102', '1110', '2102', '2105', '2106', '3102', '6101'],
    expected: [
      { accountCode: '6101', side: 'D', amount: 14500 },
      { accountCode: '2106', side: 'C', amount: 14500 },
    ],
    explanation: {
      es: "El gasto pertenece a diciembre aunque se pague en enero (devengación): cargo a Sueldos y salarios $14,500 y abono a Sueldos por pagar $14,500. Error común: no registrar nada hasta el pago, lo que subestima gastos y pasivos de diciembre.",
      en: "The expense belongs to December even though it is paid in January (accrual): debit Salaries and wages $14,500 and credit Salaries payable $14,500. Common mistake: recording nothing until payment, understating December's expenses and liabilities.",
    },
    difficulty: 2,
    points: 15,
    competency: 'adjusting-entries',
  },
  {
    id: 'N2-019',
    level: 2,
    module: 'L2-03',
    kind: 'mcq',
    flavor: 'case',
    context: {
      es: "El 1 de noviembre una empresa cobró $36,000 por 6 meses de mantenimiento (noviembre a abril) y lo registró en Anticipos de clientes.",
      en: "On November 1 a company collected $36,000 for 6 months of maintenance service (November to April) and recorded it in Customer advances.",
    },
    prompt: { es: "¿Cuál es el ajuste correcto al 31 de diciembre?", en: "What is the correct adjustment at December 31?" },
    options: [
      { id: 'N2-019-a', text: { es: "Cargo Anticipos de clientes $12,000 / Abono Ingresos por servicios $12,000", en: "Debit Customer advances $12,000 / Credit Service revenue $12,000" } },
      { id: 'N2-019-b', text: { es: "Cargo Anticipos de clientes $36,000 / Abono Ingresos por servicios $36,000", en: "Debit Customer advances $36,000 / Credit Service revenue $36,000" } },
      { id: 'N2-019-c', text: { es: "Cargo Ingresos por servicios $24,000 / Abono Anticipos de clientes $24,000", en: "Debit Service revenue $24,000 / Credit Customer advances $24,000" } },
      { id: 'N2-019-d', text: { es: "Cargo Bancos $12,000 / Abono Ingresos por servicios $12,000", en: "Debit Bank $12,000 / Credit Service revenue $12,000" } },
    ],
    correctOptionId: 'N2-019-a',
    explanation: {
      es: "Ingreso mensual = 36,000 / 6 = 6,000. Al 31 de diciembre se prestaron 2 meses: 2 × 6,000 = $12,000 se trasladan del pasivo al ingreso. Quedan $24,000 como pasivo por los 4 meses pendientes. Bancos no se toca porque el cobro ya se registró.",
      en: "Monthly revenue = 36,000 / 6 = 6,000. By December 31, 2 months were provided: 2 × 6,000 = $12,000 moves from the liability to revenue. $24,000 remains as a liability for the 4 pending months. Bank is not touched because the collection was already recorded.",
    },
    difficulty: 2,
    points: 15,
    competency: 'adjusting-entries',
  },
  {
    id: 'N2-020',
    level: 2,
    module: 'L2-03',
    kind: 'truefalse',
    flavor: 'concept',
    prompt: {
      es: "La depreciación contable distribuye el costo de un activo durante su vida útil; no tiene como objetivo reflejar su valor de mercado.",
      en: "Book depreciation allocates an asset's cost over its useful life; it does not aim to reflect the asset's market value.",
    },
    answer: true,
    explanation: {
      es: "Verdadero. Según NIF C-6 / IAS 16, la depreciación es una asignación sistemática del monto depreciable. Por eso el valor en libros puede diferir mucho del precio al que se vendería el activo.",
      en: "True. Under NIF C-6 / IAS 16, depreciation is a systematic allocation of the depreciable amount. That is why the carrying amount can differ greatly from the price at which the asset would sell.",
    },
    difficulty: 1,
    points: 10,
    competency: 'depreciation',
  },
  {
    id: 'N2-021',
    level: 2,
    module: 'L2-03',
    kind: 'fields',
    flavor: 'tAccount',
    context: {
      es: "Un vehículo de reparto costó $350,000, con valor residual de $50,000 y vida útil de 5 años. Se deprecia en línea recta y han transcurrido 3 años completos.",
      en: "A delivery vehicle cost $350,000, with a residual value of $50,000 and a 5-year useful life. It is depreciated straight-line and 3 full years have passed.",
    },
    prompt: { es: "Completa los importes, en pesos.", en: "Complete the amounts, in pesos." },
    fields: [
      { id: 'f1', label: { es: "Depreciación anual", en: "Annual depreciation" }, answer: 60000, unit: 'MXN', tolerance: { abs: 0.5 } },
      { id: 'f2', label: { es: "Saldo de Depreciación acumulada", en: "Accumulated depreciation balance" }, answer: 180000, unit: 'MXN', tolerance: { abs: 0.5 } },
      { id: 'f3', label: { es: "Valor en libros", en: "Carrying amount" }, answer: 170000, unit: 'MXN', tolerance: { abs: 0.5 } },
    ],
    explanation: {
      es: "Anual = (350,000 − 50,000) / 5 = 60,000. Acumulada = 3 × 60,000 = 180,000 (saldo acreedor de la cuenta complementaria). Valor en libros = 350,000 − 180,000 = $170,000. Error común: restar el residual al calcular el valor en libros.",
      en: "Annual = (350,000 − 50,000) / 5 = 60,000. Accumulated = 3 × 60,000 = 180,000 (credit balance of the contra account). Carrying amount = 350,000 − 180,000 = $170,000. Common mistake: deducting the residual value when computing the carrying amount.",
    },
    difficulty: 3,
    points: 20,
    competency: 'depreciation',
  },

  // ═════════════════════════ L2-04 ═════════════════════════
  {
    id: 'N2-022',
    level: 2,
    module: 'L2-04',
    kind: 'truefalse',
    flavor: 'concept',
    prompt: {
      es: "Bajo la NIF C-4 y la IAS 2, una empresa puede elegir UEPS (últimas entradas, primeras salidas) para valuar su inventario.",
      en: "Under NIF C-4 and IAS 2, a company may choose LIFO (last in, first out) to value its inventory.",
    },
    answer: false,
    explanation: {
      es: "Falso. NIF C-4 e IAS 2 sólo permiten costo identificado, PEPS y costo promedio. UEPS está prohibido porque valúa el inventario a costos antiguos poco representativos. (Puede seguir apareciendo en otros marcos, como US GAAP.)",
      en: "False. NIF C-4 and IAS 2 only allow specific identification, FIFO and weighted average. LIFO is prohibited because it values inventory at old, unrepresentative costs. (It may still appear in other frameworks, such as US GAAP.)",
    },
    difficulty: 1,
    points: 10,
    competency: 'inventory',
  },
  {
    id: 'N2-023',
    level: 2,
    module: 'L2-04',
    kind: 'multi',
    flavor: 'concept',
    prompt: {
      es: "¿Qué conceptos forman parte del costo de adquisición del inventario? Selecciona todas las que apliquen.",
      en: "Which items form part of the purchase cost of inventory? Select all that apply.",
    },
    options: [
      { id: 'N2-023-a', text: { es: "Precio de compra neto de descuentos", en: "Purchase price net of discounts" } },
      { id: 'N2-023-b', text: { es: "Comisiones pagadas a vendedores por vender la mercancía", en: "Commissions paid to salespeople for selling the goods" } },
      { id: 'N2-023-c', text: { es: "Fletes para traer la mercancía al almacén", en: "Freight to bring the goods to the warehouse" } },
      { id: 'N2-023-d', text: { es: "Mermas anormales por un mal manejo", en: "Abnormal waste due to mishandling" } },
      { id: 'N2-023-e', text: { es: "Aranceles de importación no recuperables", en: "Non-recoverable import duties" } },
    ],
    correctOptionIds: ['N2-023-a', 'N2-023-c', 'N2-023-e'],
    explanation: {
      es: "El costo incluye todo lo necesario para dejar la mercancía en su ubicación y condición actuales: precio neto, fletes de compra y aranceles no recuperables. Las comisiones de venta son gastos de venta y las mermas anormales se reconocen como gasto del periodo.",
      en: "Cost includes everything needed to bring goods to their present location and condition: net price, freight-in and non-recoverable duties. Sales commissions are selling expenses and abnormal waste is expensed in the period.",
    },
    difficulty: 2,
    points: 15,
    competency: 'inventory',
  },
  {
    id: 'N2-024',
    level: 2,
    module: 'L2-04',
    kind: 'fields',
    flavor: 'case',
    context: {
      es: "Movimientos de enero: inventario inicial 100 unidades a $50; compra del día 10: 200 unidades a $55; compra del día 20: 150 unidades a $60; venta del día 25: 280 unidades.",
      en: "January movements: opening inventory 100 units at $50; purchase on day 10: 200 units at $55; purchase on day 20: 150 units at $60; sale on day 25: 280 units.",
    },
    prompt: { es: "Aplica PEPS y completa los importes, en pesos.", en: "Apply FIFO and complete the amounts, in pesos." },
    fields: [
      { id: 'f1', label: { es: "Costo de ventas (PEPS)", en: "Cost of goods sold (FIFO)" }, answer: 14900, unit: 'MXN', tolerance: { abs: 0.5 } },
      { id: 'f2', label: { es: "Inventario final (PEPS)", en: "Ending inventory (FIFO)" }, answer: 10100, unit: 'MXN', tolerance: { abs: 0.5 } },
    ],
    explanation: {
      es: "Salen primero las unidades más antiguas: 100 × 50 = 5,000 y 180 × 55 = 9,900 → costo de ventas $14,900. Quedan 20 × 55 = 1,100 y 150 × 60 = 9,000 → inventario final $10,100. Comprobación: disponible 5,000 + 11,000 + 9,000 = 25,000 = 14,900 + 10,100.",
      en: "Oldest units leave first: 100 × 50 = 5,000 and 180 × 55 = 9,900 → COGS $14,900. Remaining: 20 × 55 = 1,100 and 150 × 60 = 9,000 → ending inventory $10,100. Check: available 5,000 + 11,000 + 9,000 = 25,000 = 14,900 + 10,100.",
    },
    difficulty: 2,
    points: 15,
    competency: 'inventory',
  },
  {
    id: 'N2-025',
    level: 2,
    module: 'L2-04',
    kind: 'numeric',
    flavor: 'case',
    context: {
      es: "Mismos movimientos de enero: inventario inicial 100 unidades a $50; compra de 200 unidades a $55; compra de 150 unidades a $60; venta de 280 unidades (todas las compras ocurrieron antes de la venta).",
      en: "Same January movements: opening inventory 100 units at $50; purchase of 200 units at $55; purchase of 150 units at $60; sale of 280 units (all purchases occurred before the sale).",
    },
    prompt: {
      es: "Calcula el costo de ventas con costo promedio ponderado, en pesos. Redondea a 2 decimales.",
      en: "Compute cost of goods sold using weighted average cost, in pesos. Round to 2 decimals.",
    },
    answer: 15555.56,
    unit: 'MXN',
    decimals: 2,
    tolerance: { abs: 1.5 },
    explanation: {
      es: "Costo disponible = 5,000 + 11,000 + 9,000 = 25,000 por 450 unidades. Promedio = 25,000 / 450 = $55.5556. Costo de ventas = 280 × 55.5556 = $15,555.56 (inventario final 170 × 55.5556 = $9,444.44). Error común: promediar los precios sin ponderar ((50 + 55 + 60) / 3 = 55).",
      en: "Cost available = 5,000 + 11,000 + 9,000 = 25,000 for 450 units. Average = 25,000 / 450 = $55.5556. COGS = 280 × 55.5556 = $15,555.56 (ending inventory 170 × 55.5556 = $9,444.44). Common mistake: averaging prices without weighting ((50 + 55 + 60) / 3 = 55).",
    },
    difficulty: 2,
    points: 15,
    competency: 'inventory',
  },
  {
    id: 'N2-026',
    level: 2,
    module: 'L2-04',
    kind: 'mcq',
    flavor: 'interpret',
    prompt: {
      es: "En un periodo de precios de compra crecientes, ¿qué efecto tiene usar PEPS en lugar de costo promedio?",
      en: "In a period of rising purchase prices, what is the effect of using FIFO instead of weighted average?",
    },
    options: [
      { id: 'N2-026-a', text: { es: "Mayor costo de ventas y menor inventario final", en: "Higher COGS and lower ending inventory" } },
      { id: 'N2-026-b', text: { es: "No hay diferencia en ningún importe", en: "No difference in any amount" } },
      { id: 'N2-026-c', text: { es: "Menor costo de ventas y mayor utilidad bruta", en: "Lower COGS and higher gross profit" } },
      { id: 'N2-026-d', text: { es: "Menor inventario final y menor utilidad bruta", en: "Lower ending inventory and lower gross profit" } },
    ],
    correctOptionId: 'N2-026-c',
    explanation: {
      es: "Con PEPS salen primero las unidades más baratas (antiguas), así que el costo de ventas es menor, la utilidad bruta mayor y el inventario final queda a los costos más recientes (más altos). En el ejemplo de la lección: PEPS $13,400 frente a promedio $13,800.",
      en: "Under FIFO the cheaper (older) units leave first, so COGS is lower, gross profit higher and ending inventory is at the most recent (higher) costs. In the lesson example: FIFO $13,400 versus average $13,800.",
    },
    difficulty: 2,
    points: 15,
    competency: 'inventory',
  },
  {
    id: 'N2-027',
    level: 2,
    module: 'L2-04',
    kind: 'numeric',
    flavor: 'case',
    context: {
      es: "Al 31 de diciembre, Clientes tiene saldo de $250,000. Se estima incobrable el 4 % del saldo. Antes del ajuste, la Estimación para cuentas incobrables tiene saldo acreedor de $3,500.",
      en: "At December 31, Accounts receivable has a balance of $250,000. 4% of the balance is estimated uncollectible. Before adjustment, the Allowance for doubtful accounts has a credit balance of $3,500.",
    },
    prompt: {
      es: "¿Cuánto gasto por cuentas incobrables debe reconocerse en el ajuste? Responde en pesos.",
      en: "How much bad debt expense should the adjustment recognize? Answer in pesos.",
    },
    answer: 6500,
    unit: 'MXN',
    decimals: 0,
    tolerance: { abs: 0.5 },
    explanation: {
      es: "Saldo requerido = 250,000 × 4 % = 10,000. Ya existen 3,500, así que el ajuste es 10,000 − 3,500 = $6,500. Error común: registrar los $10,000 completos, lo que dejaría la estimación en $13,500.",
      en: "Required balance = 250,000 × 4% = 10,000. 3,500 already exists, so the adjustment is 10,000 − 3,500 = $6,500. Common mistake: recording the full $10,000, which would leave the allowance at $13,500.",
    },
    difficulty: 2,
    points: 15,
    competency: 'receivables',
  },
  {
    id: 'N2-028',
    level: 2,
    module: 'L2-04',
    kind: 'journal',
    flavor: 'case',
    prompt: {
      es: "Con los datos del ejercicio anterior (saldo requerido $10,000; saldo existente $3,500), registra el ajuste de la estimación para cuentas incobrables.",
      en: "Using the previous exercise's data (required balance $10,000; existing balance $3,500), record the adjustment to the allowance for doubtful accounts.",
    },
    accountChoices: ['1102', '1104', '1105', '2109', '4103', '6107', '6109'],
    expected: [
      { accountCode: '6107', side: 'D', amount: 6500 },
      { accountCode: '1105', side: 'C', amount: 6500 },
    ],
    explanation: {
      es: "Cargo a Gasto por cuentas incobrables $6,500 (afecta resultados) y abono a Estimación para cuentas incobrables $6,500 (complementaria de activo, aumenta con abono). No se abona Clientes porque aún no se identifica qué cliente no pagará; tampoco es una Provisión (pasivo).",
      en: "Debit Bad debt expense $6,500 (affects profit) and credit Allowance for doubtful accounts $6,500 (contra-asset, increases with a credit). Accounts receivable is not credited because the specific non-paying customer is not yet identified; nor is it a Provision (liability).",
    },
    difficulty: 2,
    points: 15,
    competency: 'receivables',
  },
  {
    id: 'N2-029',
    level: 2,
    module: 'L2-04',
    kind: 'journal',
    flavor: 'case',
    prompt: {
      es: "Un cliente que debía $2,800 se declara en quiebra y su saldo se considera definitivamente incobrable. La empresa usa el método de estimación. Registra la cancelación.",
      en: "A customer owing $2,800 goes bankrupt and the balance is deemed definitely uncollectible. The company uses the allowance method. Record the write-off.",
    },
    accountChoices: ['1102', '1104', '1105', '1106', '4103', '6107', '7101'],
    expected: [
      { accountCode: '1105', side: 'D', amount: 2800 },
      { accountCode: '1104', side: 'C', amount: 2800 },
    ],
    explanation: {
      es: "La cancelación se aplica contra la estimación: cargo a Estimación para cuentas incobrables $2,800 y abono a Clientes $2,800. No se carga gasto, porque ya se reconoció al crear la estimación; cargarlo otra vez duplicaría la pérdida. El valor neto de Clientes no cambia.",
      en: "The write-off is applied against the allowance: debit Allowance for doubtful accounts $2,800 and credit Accounts receivable $2,800. No expense is debited, because it was recognized when the allowance was created; debiting it again would double-count the loss. Net receivables do not change.",
    },
    difficulty: 3,
    points: 20,
    competency: 'receivables',
  },

  // ═════════════════════════ L2-05 ═════════════════════════
  {
    id: 'N2-030',
    level: 2,
    module: 'L2-05',
    kind: 'mcq',
    flavor: 'concept',
    prompt: { es: "¿Qué organismo emite las Normas de Información Financiera (NIF) en México?", en: "Which body issues the Financial Reporting Standards (NIF) in Mexico?" },
    options: [
      { id: 'N2-030-a', text: { es: "El SAT (Servicio de Administración Tributaria)", en: "The SAT (Tax Administration Service)" } },
      { id: 'N2-030-b', text: { es: "El IASB", en: "The IASB" } },
      { id: 'N2-030-c', text: { es: "La CNBV (Comisión Nacional Bancaria y de Valores)", en: "The CNBV (National Banking and Securities Commission)" } },
      { id: 'N2-030-d', text: { es: "El CINIF", en: "CINIF" } },
    ],
    correctOptionId: 'N2-030-d',
    explanation: {
      es: "El CINIF (Consejo Mexicano de Normas de Información Financiera) emite las NIF. El IASB emite las IFRS; el SAT administra impuestos; la CNBV regula al sector financiero y a las emisoras, pero no emite las NIF.",
      en: "CINIF (Mexican Financial Reporting Standards Board) issues the NIF. The IASB issues IFRS; the SAT administers taxes; the CNBV regulates the financial sector and listed issuers but does not issue the NIF.",
    },
    difficulty: 1,
    points: 10,
    competency: 'standards',
  },
  {
    id: 'N2-031',
    level: 2,
    module: 'L2-05',
    kind: 'mcq',
    flavor: 'concept',
    prompt: { es: "¿Qué contiene la serie A de las NIF?", en: "What does NIF series A contain?" },
    options: [
      { id: 'N2-031-a', text: { es: "Normas aplicables a conceptos específicos, como inventarios", en: "Standards for specific items, such as inventories" } },
      { id: 'N2-031-b', text: { es: "El Marco Conceptual", en: "The Conceptual Framework" } },
      { id: 'N2-031-c', text: { es: "Normas para actividades especializadas de ciertos sectores", en: "Standards for specialized activities of certain sectors" } },
      { id: 'N2-031-d', text: { es: "Normas sobre problemas de determinación de resultados, como arrendamientos", en: "Standards on profit-determination issues, such as leases" } },
    ],
    correctOptionId: 'N2-031-b',
    explanation: {
      es: "Serie A: Marco Conceptual. Serie B: estados financieros en su conjunto. Serie C: conceptos específicos (p. ej. NIF C-4 Inventarios). Serie D: problemas de determinación de resultados (p. ej. NIF D-5 Arrendamientos). Serie E: actividades especializadas.",
      en: "Series A: Conceptual Framework. Series B: financial statements as a whole. Series C: specific items (e.g. NIF C-4 Inventories). Series D: profit-determination issues (e.g. NIF D-5 Leases). Series E: specialized activities.",
    },
    difficulty: 2,
    points: 15,
    competency: 'standards',
  },
  {
    id: 'N2-032',
    level: 2,
    module: 'L2-05',
    kind: 'multi',
    flavor: 'concept',
    prompt: {
      es: "Según NIF C-9 / IAS 37, ¿qué condiciones deben cumplirse para reconocer una provisión? Selecciona todas las que apliquen.",
      en: "Under NIF C-9 / IAS 37, which conditions must be met to recognize a provision? Select all that apply.",
    },
    options: [
      { id: 'N2-032-a', text: { es: "Existe una obligación presente (legal o asumida) por un evento pasado", en: "There is a present obligation (legal or constructive) from a past event" } },
      { id: 'N2-032-b', text: { es: "Existe un contrato firmado con el acreedor", en: "There is a signed contract with the creditor" } },
      { id: 'N2-032-c', text: { es: "Es probable la salida de recursos económicos", en: "An outflow of economic resources is probable" } },
      { id: 'N2-032-d', text: { es: "El monto se conoce con exactitud", en: "The amount is known exactly" } },
      { id: 'N2-032-e', text: { es: "Puede estimarse el monto de forma confiable", en: "The amount can be estimated reliably" } },
    ],
    correctOptionIds: ['N2-032-a', 'N2-032-c', 'N2-032-e'],
    explanation: {
      es: "Los tres criterios son: obligación presente por un evento pasado, salida probable y estimación confiable. No se requiere contrato (la obligación puede ser asumida por prácticas o declaraciones públicas) ni un monto exacto: si se conociera con exactitud sería un pasivo ordinario, no una provisión.",
      en: "The three criteria are: present obligation from a past event, probable outflow and reliable estimate. No contract is required (the obligation may be constructive, from practice or public statements), nor an exact amount: if known exactly it would be an ordinary liability, not a provision.",
    },
    difficulty: 2,
    points: 15,
    competency: 'provisions',
  },
  {
    id: 'N2-033',
    level: 2,
    module: 'L2-05',
    kind: 'truefalse',
    flavor: 'concept',
    prompt: {
      es: "Si una demanda en contra de la empresa tiene una probabilidad de pérdida posible, pero no probable ni remota, no se reconoce provisión y se revela como pasivo contingente en las notas.",
      en: "If a lawsuit against the company has a possible, but neither probable nor remote, chance of loss, no provision is recognized and it is disclosed as a contingent liability in the notes.",
    },
    answer: true,
    explanation: {
      es: "Verdadero. Sin salida probable no se cumple el segundo criterio, así que no se reconoce provisión; como no es remota, se revela en notas como pasivo contingente. Si fuera remota, no se revelaría.",
      en: "True. Without a probable outflow the second criterion fails, so no provision is recognized; since it is not remote, it is disclosed in the notes as a contingent liability. If it were remote, no disclosure would be required.",
    },
    difficulty: 2,
    points: 15,
    competency: 'provisions',
  },
  {
    id: 'N2-034',
    level: 2,
    module: 'L2-05',
    kind: 'classify',
    flavor: 'case',
    prompt: { es: "Clasifica cada situación al cierre del ejercicio según su tratamiento contable.", en: "Classify each year-end situation according to its accounting treatment." },
    categories: [
      { id: 'N2-034-c1', label: { es: "Reconocer provisión", en: "Recognize a provision" } },
      { id: 'N2-034-c2', label: { es: "Revelar como pasivo contingente", en: "Disclose as a contingent liability" } },
      { id: 'N2-034-c3', label: { es: "Ni reconocer ni revelar", en: "Neither recognize nor disclose" } },
    ],
    items: [
      { id: 'N2-034-i1', label: { es: "Demanda con pérdida probable y monto estimable", en: "Lawsuit with a probable loss and an estimable amount" }, correctCategoryId: 'N2-034-c1' },
      { id: 'N2-034-i2', label: { es: "Garantías de productos vendidos en el año, con historial de reclamaciones", en: "Warranties on products sold in the year, with a history of claims" }, correctCategoryId: 'N2-034-c1' },
      { id: 'N2-034-i3', label: { es: "Demanda con pérdida posible pero no probable", en: "Lawsuit with a possible but not probable loss" }, correctCategoryId: 'N2-034-c2' },
      { id: 'N2-034-i4', label: { es: "Reclamación cuya probabilidad de pérdida es remota", en: "Claim whose probability of loss is remote" }, correctCategoryId: 'N2-034-c3' },
      { id: 'N2-034-i5', label: { es: "Pérdidas de operación esperadas para el próximo año", en: "Operating losses expected for next year" }, correctCategoryId: 'N2-034-c3' },
    ],
    explanation: {
      es: "Provisión: obligación presente + salida probable + estimación confiable (demanda probable, garantías). Pasivo contingente revelado: salida posible. Nada: probabilidad remota. Las pérdidas de operación futuras no son obligaciones presentes (no hay evento pasado), por lo que no se provisionan.",
      en: "Provision: present obligation + probable outflow + reliable estimate (probable lawsuit, warranties). Disclosed contingent liability: possible outflow. Nothing: remote probability. Future operating losses are not present obligations (no past event), so they are not provided for.",
    },
    difficulty: 3,
    points: 20,
    competency: 'provisions',
  },
  {
    id: 'N2-035',
    level: 2,
    module: 'L2-05',
    kind: 'numeric',
    flavor: 'case',
    context: {
      es: "Una empresa vende electrodomésticos con garantía de un año. De lo vendido en el año, espera que 85 % no presente defectos, 10 % presente defectos menores y 5 % defectos mayores. Si todos los productos tuvieran defectos menores, la reparación costaría $200,000; si todos tuvieran defectos mayores, $800,000.",
      en: "A company sells appliances with a one-year warranty. Of the year's sales, it expects 85% to have no defects, 10% minor defects and 5% major defects. If all products had minor defects, repairs would cost $200,000; if all had major defects, $800,000.",
    },
    prompt: { es: "Calcula la provisión por garantías con el método del valor esperado, en pesos.", en: "Compute the warranty provision using the expected value method, in pesos." },
    answer: 60000,
    unit: 'MXN',
    decimals: 0,
    tolerance: { abs: 0.5 },
    explanation: {
      es: "Valor esperado = 85 % × 0 + 10 % × 200,000 + 5 % × 800,000 = 0 + 20,000 + 40,000 = $60,000. Error común: tomar sólo el escenario más probable (sin defectos → 0), que no es adecuado para una población grande de partidas.",
      en: "Expected value = 85% × 0 + 10% × 200,000 + 5% × 800,000 = 0 + 20,000 + 40,000 = $60,000. Common mistake: using only the most likely scenario (no defects → 0), which is not appropriate for a large population of items.",
    },
    difficulty: 2,
    points: 15,
    competency: 'provisions',
  },
  {
    id: 'N2-036',
    level: 2,
    module: 'L2-05',
    kind: 'journal',
    flavor: 'case',
    prompt: {
      es: "Registra la provisión por garantías de $60,000 calculada en el ejercicio anterior.",
      en: "Record the $60,000 warranty provision computed in the previous exercise.",
    },
    accountChoices: ['1102', '1105', '2102', '2109', '5101', '6107', '6109'],
    expected: [
      { accountCode: '6109', side: 'D', amount: 60000 },
      { accountCode: '2109', side: 'C', amount: 60000 },
    ],
    explanation: {
      es: "Cargo a Gasto por provisiones $60,000 (se asocia con los ingresos de las ventas del año) y abono a Provisiones $60,000 (pasivo). No se usa Estimación para cuentas incobrables: ésa reduce un activo; la provisión es una obligación.",
      en: "Debit Provision expense $60,000 (matched with the year's sales revenue) and credit Provisions $60,000 (liability). The Allowance for doubtful accounts is not used: it reduces an asset; the provision is an obligation.",
    },
    difficulty: 1,
    points: 10,
    competency: 'provisions',
  },

  // ═════════════════════════ L2-06 ═════════════════════════
  {
    id: 'N2-037',
    level: 2,
    module: 'L2-06',
    kind: 'mcq',
    flavor: 'concept',
    prompt: {
      es: "Bajo NIF D-5 / IFRS 16, al inicio de un arrendamiento de 5 años de un edificio de oficinas, ¿qué reconoce el arrendatario?",
      en: "Under NIF D-5 / IFRS 16, at the start of a 5-year lease of an office building, what does the lessee recognize?",
    },
    options: [
      { id: 'N2-037-a', text: { es: "Sólo un gasto de renta cada vez que paga", en: "Only rent expense each time it pays" } },
      { id: 'N2-037-b', text: { es: "El edificio como activo propio a su valor de mercado", en: "The building as its own asset at market value" } },
      { id: 'N2-037-c', text: { es: "Un activo por derecho de uso y un pasivo por arrendamiento", en: "A right-of-use asset and a lease liability" } },
      { id: 'N2-037-d', text: { es: "Una provisión por las rentas futuras", en: "A provision for future rents" } },
    ],
    correctOptionId: 'N2-037-c',
    explanation: {
      es: "El modelo único del arrendatario reconoce el derecho a usar el bien (activo) y la obligación de pagar (pasivo), ambos al valor presente de los pagos. El gasto de renta sólo procede con las exenciones de corto plazo o bajo valor, que no aplican a un edificio a 5 años.",
      en: "The single lessee model recognizes the right to use the asset (asset) and the obligation to pay (liability), both at the present value of the payments. Rent expense applies only under the short-term or low-value exemptions, which do not apply to a 5-year building lease.",
    },
    difficulty: 1,
    points: 10,
    competency: 'leases',
  },
  {
    id: 'N2-038',
    level: 2,
    module: 'L2-06',
    kind: 'truefalse',
    flavor: 'concept',
    prompt: {
      es: "Un arrendatario puede optar por reconocer como gasto, en línea recta, los pagos de un arrendamiento de corto plazo (12 meses o menos) en lugar de reconocer activo y pasivo.",
      en: "A lessee may choose to expense, on a straight-line basis, the payments of a short-term lease (12 months or less) instead of recognizing an asset and a liability.",
    },
    answer: true,
    explanation: {
      es: "Verdadero. NIF D-5 e IFRS 16 permiten exenciones opcionales para arrendamientos de corto plazo y de activos de bajo valor. Si no se elige la exención, se aplica el modelo de derecho de uso.",
      en: "True. NIF D-5 and IFRS 16 allow optional exemptions for short-term leases and leases of low-value assets. If the exemption is not elected, the right-of-use model applies.",
    },
    difficulty: 1,
    points: 10,
    competency: 'leases',
  },
  {
    id: 'N2-039',
    level: 2,
    module: 'L2-06',
    kind: 'numeric',
    flavor: 'case',
    context: {
      es: "Un arrendatario pagará $100,000 al final de cada año durante 3 años. La tasa incremental de financiamiento es 10 % anual.",
      en: "A lessee will pay $100,000 at the end of each year for 3 years. The incremental borrowing rate is 10% per year.",
    },
    prompt: {
      es: "Calcula el pasivo por arrendamiento inicial (valor presente de los pagos), en pesos. Redondea a 2 decimales.",
      en: "Compute the initial lease liability (present value of the payments), in pesos. Round to 2 decimals.",
    },
    answer: 248685.2,
    unit: 'MXN',
    decimals: 2,
    tolerance: { rel: 0.005 },
    explanation: {
      es: "VP = 100,000 × [1 − 1.10^−3] / 0.10. 1.10^3 = 1.331; 1 / 1.331 = 0.751315; factor = (1 − 0.751315) / 0.10 = 2.486852. VP = $248,685.20. Equivale a 90,909.09 + 82,644.63 + 75,131.48. Error común: sumar los pagos sin descontar ($300,000).",
      en: "PV = 100,000 × [1 − 1.10^−3] / 0.10. 1.10^3 = 1.331; 1 / 1.331 = 0.751315; factor = (1 − 0.751315) / 0.10 = 2.486852. PV = $248,685.20. Equals 90,909.09 + 82,644.63 + 75,131.48. Common mistake: adding the payments without discounting ($300,000).",
    },
    difficulty: 2,
    points: 15,
    competency: 'leases',
  },
  {
    id: 'N2-040',
    level: 2,
    module: 'L2-06',
    kind: 'journal',
    flavor: 'case',
    prompt: {
      es: "Con los datos del ejercicio anterior, registra el reconocimiento inicial del arrendamiento por $248,685.20 (sin costos directos iniciales ni pagos anticipados; sin IVA).",
      en: "Using the previous exercise's data, record the initial recognition of the lease for $248,685.20 (no initial direct costs or prepayments; no VAT).",
    },
    accountChoices: ['1102', '1202', '1208', '2109', '2201', '2202', '6102', '7101'],
    expected: [
      { accountCode: '1208', side: 'D', amount: 248685.2 },
      { accountCode: '2202', side: 'C', amount: 248685.2 },
    ],
    explanation: {
      es: "Cargo a Activo por derecho de uso $248,685.20 y abono a Pasivo por arrendamiento $248,685.20. No se carga Edificios porque el arrendatario no es dueño; no se registra Renta porque el modelo reemplaza el gasto de renta por depreciación e intereses.",
      en: "Debit Right-of-use asset $248,685.20 and credit Lease liability $248,685.20. Buildings is not debited because the lessee does not own the asset; Rent expense is not recorded because the model replaces rent expense with depreciation and interest.",
    },
    difficulty: 2,
    points: 15,
    competency: 'leases',
  },
  {
    id: 'N2-041',
    level: 2,
    module: 'L2-06',
    kind: 'fields',
    flavor: 'case',
    context: {
      es: "Arrendamiento del ejercicio anterior: pasivo inicial $248,685.20; tasa 10 % anual; pago de $100,000 al final de cada uno de 3 años; el activo por derecho de uso se deprecia en línea recta en 3 años.",
      en: "Lease from the previous exercise: initial liability $248,685.20; rate 10% per year; payment of $100,000 at the end of each of 3 years; the right-of-use asset is depreciated straight-line over 3 years.",
    },
    prompt: { es: "Calcula los importes del primer año, en pesos (2 decimales).", en: "Compute the first-year amounts, in pesos (2 decimals)." },
    fields: [
      { id: 'f1', label: { es: "Gasto por intereses del año 1", en: "Year-1 interest expense" }, answer: 24868.52, unit: 'MXN', tolerance: { abs: 1 } },
      { id: 'f2', label: { es: "Pasivo por arrendamiento al final del año 1", en: "Lease liability at end of year 1" }, answer: 173553.72, unit: 'MXN', tolerance: { abs: 1 } },
      { id: 'f3', label: { es: "Depreciación del activo por derecho de uso del año 1", en: "Year-1 right-of-use asset depreciation" }, answer: 82895.07, unit: 'MXN', tolerance: { abs: 1 } },
    ],
    explanation: {
      es: "Interés = 248,685.20 × 10 % = 24,868.52. Pasivo final = 248,685.20 + 24,868.52 − 100,000 = 173,553.72. Depreciación = 248,685.20 / 3 = 82,895.07. Error común: restar el pago completo del pasivo sin sumar antes el interés.",
      en: "Interest = 248,685.20 × 10% = 24,868.52. Ending liability = 248,685.20 + 24,868.52 − 100,000 = 173,553.72. Depreciation = 248,685.20 / 3 = 82,895.07. Common mistake: deducting the full payment from the liability without first adding interest.",
    },
    difficulty: 3,
    points: 20,
    competency: 'leases',
  },
  {
    id: 'N2-042',
    level: 2,
    module: 'L2-06',
    kind: 'mcq',
    flavor: 'concept',
    prompt: {
      es: "Según NIF B-8 / IFRS 10, ¿cuándo tiene un inversionista control sobre una participada?",
      en: "Under NIF B-8 / IFRS 10, when does an investor control an investee?",
    },
    options: [
      { id: 'N2-042-a', text: { es: "Siempre que posea más del 50 % de las acciones, sin excepción", en: "Whenever it owns more than 50% of the shares, without exception" } },
      { id: 'N2-042-b', text: { es: "Cuando tiene poder, exposición a rendimientos variables y capacidad de usar ese poder para afectarlos", en: "When it has power, exposure to variable returns and the ability to use that power to affect them" } },
      { id: 'N2-042-c', text: { es: "Cuando tiene influencia significativa, generalmente entre 20 % y 50 % de los votos", en: "When it has significant influence, generally between 20% and 50% of the votes" } },
      { id: 'N2-042-d', text: { es: "Cuando comparte las decisiones relevantes por unanimidad con otro inversionista", en: "When it shares relevant decisions unanimously with another investor" } },
    ],
    correctOptionId: 'N2-042-b',
    explanation: {
      es: "El control exige los tres elementos: poder sobre las actividades relevantes, exposición a rendimientos variables y vínculo entre ambos. La mayoría de votos suele darlo, pero no siempre. La influencia significativa corresponde a una asociada y la decisión unánime compartida a un control conjunto.",
      en: "Control requires all three elements: power over relevant activities, exposure to variable returns and the link between them. A voting majority usually gives control, but not always. Significant influence indicates an associate and shared unanimous decisions indicate joint control.",
    },
    difficulty: 2,
    points: 15,
    competency: 'consolidation',
  },
  {
    id: 'N2-043',
    level: 2,
    module: 'L2-06',
    kind: 'classify',
    flavor: 'case',
    prompt: { es: "Clasifica cada inversión según la relación con la participada.", en: "Classify each investment by the relationship with the investee." },
    categories: [
      { id: 'N2-043-c1', label: { es: "Subsidiaria (se consolida)", en: "Subsidiary (consolidated)" } },
      { id: 'N2-043-c2', label: { es: "Asociada (método de participación)", en: "Associate (equity method)" } },
      { id: 'N2-043-c3', label: { es: "Negocio conjunto", en: "Joint venture" } },
    ],
    items: [
      { id: 'N2-043-i1', label: { es: "60 % de los votos y nombra a la mayoría del consejo", en: "60% of the votes and appoints most of the board" }, correctCategoryId: 'N2-043-c1' },
      { id: 'N2-043-i2', label: { es: "25 % de los votos y un consejero de siete, participa en decisiones de políticas", en: "25% of the votes and one of seven directors, participates in policy decisions" }, correctCategoryId: 'N2-043-c2' },
      { id: 'N2-043-i3', label: { es: "50 % con un socio; las decisiones relevantes requieren unanimidad y ambos tienen derecho a los activos netos", en: "50% with a partner; relevant decisions require unanimity and both have rights to the net assets" }, correctCategoryId: 'N2-043-c3' },
      { id: 'N2-043-i4', label: { es: "45 % de los votos más un contrato que le da derecho a dirigir las actividades relevantes", en: "45% of the votes plus a contract giving it the right to direct the relevant activities" }, correctCategoryId: 'N2-043-c1' },
      { id: 'N2-043-i5', label: { es: "30 % de los votos sin derecho a dirigir, pero con influencia en políticas financieras", en: "30% of the votes with no right to direct, but with influence over financial policies" }, correctCategoryId: 'N2-043-c2' },
    ],
    explanation: {
      es: "Lo decisivo es el poder, no sólo el porcentaje: con 45 % más un contrato que otorga la dirección de las actividades relevantes hay control (subsidiaria). La participación en políticas sin control es influencia significativa (asociada). El control compartido por unanimidad con derecho a activos netos es un negocio conjunto.",
      en: "What matters is power, not just the percentage: 45% plus a contract granting direction of relevant activities is control (subsidiary). Participation in policies without control is significant influence (associate). Control shared unanimously with rights to net assets is a joint venture.",
    },
    difficulty: 3,
    points: 20,
    competency: 'consolidation',
  },
  {
    id: 'N2-044',
    level: 2,
    module: 'L2-06',
    kind: 'fields',
    flavor: 'statement',
    context: {
      es: "Controladora: Clientes $300,000 (incluye $50,000 a cargo de su subsidiaria); Proveedores $150,000; Ventas $1,000,000 (incluye $200,000 vendidos a la subsidiaria). Subsidiaria (100 %): Clientes $80,000; Proveedores $120,000 (incluye $50,000 con la controladora); Ventas $600,000 a terceros. La subsidiaria revendió en el año toda la mercancía comprada a la controladora.",
      en: "Parent: Accounts receivable $300,000 (including $50,000 owed by its subsidiary); Accounts payable $150,000; Sales $1,000,000 (including $200,000 sold to the subsidiary). Subsidiary (100%): Accounts receivable $80,000; Accounts payable $120,000 (including $50,000 owed to the parent); Sales $600,000 to third parties. The subsidiary resold during the year all the goods bought from the parent.",
    },
    prompt: { es: "Determina los saldos consolidados, en pesos.", en: "Determine the consolidated balances, in pesos." },
    fields: [
      { id: 'f1', label: { es: "Clientes consolidados", en: "Consolidated accounts receivable" }, answer: 330000, unit: 'MXN', tolerance: { abs: 0.5 } },
      { id: 'f2', label: { es: "Proveedores consolidados", en: "Consolidated accounts payable" }, answer: 220000, unit: 'MXN', tolerance: { abs: 0.5 } },
      { id: 'f3', label: { es: "Ventas consolidadas", en: "Consolidated sales" }, answer: 1400000, unit: 'MXN', tolerance: { abs: 0.5 } },
    ],
    explanation: {
      es: "Clientes = 300,000 + 80,000 − 50,000 = 330,000. Proveedores = 150,000 + 120,000 − 50,000 = 220,000. Ventas = 1,000,000 + 600,000 − 200,000 = 1,400,000. El grupo no puede deberse ni venderse a sí mismo; como todo se revendió, no hay utilidad no realizada que eliminar. Error común: eliminar el saldo intercompañía sólo de un lado.",
      en: "Receivables = 300,000 + 80,000 − 50,000 = 330,000. Payables = 150,000 + 120,000 − 50,000 = 220,000. Sales = 1,000,000 + 600,000 − 200,000 = 1,400,000. A group cannot owe or sell to itself; since everything was resold, there is no unrealized profit to eliminate. Common mistake: eliminating the intercompany balance on one side only.",
    },
    difficulty: 3,
    points: 20,
    competency: 'consolidation',
  },
]
