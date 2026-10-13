import type { Exercise, Lesson } from '../../../types'

/**
 * FINCORE — Temario v2.0, área Finanzas Corporativas (FIN.7 a FIN.12), etapa Intermedio.
 */

const NOTE_TAX_PROJECTS = {
  es: "Contenido educativo. La tasa de impuestos del 30% que se usa en los ejemplos es ilustrativa; las tasas, reglas de deducción de depreciación y requisitos fiscales cambian y dependen de cada caso. Todas las cifras son hipotéticas: verifica la legislación vigente (2026) antes de aplicarlas a un proyecto real.",
  en: "Educational content. The 30% tax rate used in the examples is illustrative; rates, depreciation deduction rules and tax requirements change and depend on each case. All figures are hypothetical: verify the current (2026) legislation before applying them to a real project.",
}

const NOTE_WACC = {
  es: "Contenido educativo. Las tasas libres de riesgo, primas de mercado, betas y tasas de impuestos de los ejemplos son hipotéticas. En la práctica se toman de datos de mercado vigentes (por ejemplo, rendimientos de bonos gubernamentales) que cambian constantemente: consulta fuentes oficiales y datos actualizados (2026) antes de usarlos.",
  en: "Educational content. The risk-free rates, market premiums, betas and tax rates in the examples are hypothetical. In practice they come from current market data (for example, government bond yields) that change constantly: check official sources and up-to-date (2026) data before using them.",
}

const NOTE_CAPITAL = {
  es: "Contenido educativo. La deducción de intereses para efectos fiscales tiene requisitos y límites que fija la ley y que cambian con el tiempo; la tasa del 30% de los ejemplos es ilustrativa. Las condiciones de créditos y emisiones dependen del mercado y de la autorización de las autoridades correspondientes: verifica la regulación vigente (2026).",
  en: "Educational content. The tax deduction of interest has requirements and limits set by law that change over time; the 30% rate in the examples is illustrative. The terms of loans and securities issues depend on the market and on authorization by the relevant authorities: verify current (2026) regulation.",
}

export const lessons: Lesson[] = [
  // ───────────────────────────── FIN-07 ─────────────────────────────
  {
    id: 'FIN-07',
    level: 4,
    topicIds: ['FIN.7'],
    title: { es: "Planeación y presupuestación financiera", en: "Financial planning and budgeting" },
    summary: {
      es: "Planear es decidir hoy a dónde quiere llegar la empresa y presupuestar es poner ese plan en pesos, mes por mes, para saber si alcanza el dinero y corregir a tiempo.",
      en: "Planning is deciding today where the company wants to go, and budgeting is putting that plan into pesos, month by month, to know whether the money will be enough and to correct course in time.",
    },
    minutes: 17,
    objectives: [
      { es: "Distinguir la planeación financiera estratégica (largo plazo) de la operativa (corto plazo).", en: "Distinguish strategic (long-term) from operating (short-term) financial planning." },
      { es: "Describir las piezas del presupuesto maestro y el orden en que se preparan.", en: "Describe the pieces of the master budget and the order in which they are prepared." },
      { es: "Elaborar un presupuesto de efectivo sencillo y calcular el financiamiento necesario.", en: "Build a simple cash budget and compute the financing needed." },
      { es: "Interpretar variaciones entre lo presupuestado y lo real.", en: "Interpret variances between budgeted and actual figures." },
    ],
    theory: [
      {
        heading: { es: "Planear: a dónde vamos y con qué dinero", en: "Planning: where we are going and with what money" },
        body: [
          {
            es: "La **planeación financiera** es decidir por adelantado cuánto dinero necesitará la empresa, de dónde saldrá y en qué se usará para cumplir sus metas. Es como planear un viaje: primero eliges el destino y luego calculas gasolina, casetas y hospedaje.",
            en: "**Financial planning** is deciding in advance how much money the company will need, where it will come from and what it will be used for in order to meet its goals. It is like planning a trip: first you choose the destination and then you work out fuel, tolls and lodging.",
          },
          {
            es: "Hay dos horizontes. La **planeación estratégica** mira de 3 a 5 años: abrir una planta, entrar a otro estado, cambiar de giro. La **planeación operativa** mira de meses a un año y baja la estrategia a cifras concretas. Ese documento con cifras es el **presupuesto**.",
            en: "There are two horizons. **Strategic planning** looks 3 to 5 years ahead: opening a plant, entering another state, changing line of business. **Operating planning** looks months to one year ahead and turns the strategy into concrete figures. That document with figures is the **budget**.",
          },
          {
            es: "Un buen plan parte de **supuestos** claros (cuánto crecerán las ventas, cuánto subirán los costos) y se revisa con frecuencia. Mini ejemplo: una panadería en Puebla quiere abrir una segunda sucursal en dos años (estrategia); su presupuesto de este año debe incluir el ahorro mensual para lograrlo (operación).",
            en: "A good plan starts from clear **assumptions** (how much sales will grow, how much costs will rise) and is reviewed often. Mini example: a bakery in Puebla wants to open a second branch in two years (strategy); this year's budget must include the monthly savings to achieve it (operations).",
          },
        ],
        bullets: [
          { es: "Estratégica: largo plazo, grandes decisiones.", en: "Strategic: long term, big decisions." },
          { es: "Operativa: corto plazo, cifras mes por mes.", en: "Operating: short term, month-by-month figures." },
          { es: "Supuestos: las hipótesis sobre ventas, costos y precios.", en: "Assumptions: the hypotheses about sales, costs and prices." },
          { es: "Revisión: comparar lo real contra el plan y corregir.", en: "Review: compare actual results against the plan and correct." },
        ],
      },
      {
        heading: { es: "El presupuesto maestro, pieza por pieza", en: "The master budget, piece by piece" },
        body: [
          {
            es: "El **presupuesto maestro** es el conjunto de todos los presupuestos de la empresa para un periodo. Se divide en dos bloques: el **presupuesto operativo** (lo que pasa en la operación diaria) y el **presupuesto financiero** (el efecto en dinero y en los estados financieros).",
            en: "The **master budget** is the set of all the company's budgets for a period. It splits into two blocks: the **operating budget** (what happens in day-to-day operations) and the **financial budget** (the effect on cash and on the financial statements).",
          },
          {
            es: "Todo **empieza por el presupuesto de ventas**, porque de cuánto vas a vender depende cuánto producir, cuánto comprar y cuánta gente contratar. Después vienen producción, compras, mano de obra y gastos. Con eso se arma el bloque financiero: presupuesto de efectivo, de inversiones y los **estados financieros proforma** (estados proyectados, como si el futuro ya hubiera pasado).",
            en: "Everything **starts with the sales budget**, because how much you will sell determines how much to produce, how much to buy and how many people to hire. Then come production, purchases, labor and expenses. With that the financial block is built: cash budget, capital expenditure budget and **pro forma financial statements** (projected statements, as if the future had already happened).",
          },
          {
            es: "Mini ejemplo: una fábrica de huaraches espera vender 5,000 pares, quiere terminar con 800 en bodega y empieza con 600. Debe producir 5,000 + 800 − 600 = 5,200 pares.",
            en: "Mini example: a huarache factory expects to sell 5,000 pairs, wants to end with 800 in the warehouse and starts with 600. It must produce 5,000 + 800 − 600 = 5,200 pairs.",
          },
        ],
        formulas: [
          {
            name: { es: "Unidades a producir", en: "Units to produce" },
            expression: "Producción = Ventas esperadas + Inventario final deseado − Inventario inicial",
            variables: [
              { symbol: "Producción", meaning: { es: "Piezas que debes fabricar en el periodo (unidades).", en: "Units you must make in the period (units)." } },
              { symbol: "Ventas esperadas", meaning: { es: "Piezas que planeas vender en el periodo, según el presupuesto de ventas (unidades).", en: "Units you plan to sell in the period, from the sales budget (units)." } },
              { symbol: "Inventario final deseado", meaning: { es: "Piezas que quieres tener guardadas al terminar el periodo, como reserva (unidades).", en: "Units you want to have in stock at the end of the period, as a reserve (units)." } },
              { symbol: "Inventario inicial", meaning: { es: "Piezas terminadas que ya tienes en bodega al empezar (unidades).", en: "Finished units already in the warehouse at the start (units)." } },
            ],
            steps: [
              { es: "Toma las ventas esperadas del presupuesto de ventas.", en: "Take expected sales from the sales budget." },
              { es: "Súmale el inventario final que quieres tener al cierre.", en: "Add the ending inventory you want at the close." },
              { es: "Réstale el inventario inicial, porque esas piezas ya están hechas.", en: "Subtract the beginning inventory, because those units are already made." },
            ],
            example: {
              es: "Una fábrica de cajas espera vender 8,000 cajas, quiere cerrar con 1,000 y tiene 700 al inicio. Paso 1: 8,000. Paso 2: 8,000 + 1,000 = 9,000. Paso 3: 9,000 − 700 = 8,300 cajas a producir.",
              en: "A box factory expects to sell 8,000 boxes, wants to close with 1,000 and has 700 at the start. Step 1: 8,000. Step 2: 8,000 + 1,000 = 9,000. Step 3: 9,000 − 700 = 8,300 boxes to produce.",
            },
            mistake: {
              es: "Sumar el inventario inicial en lugar de restarlo. Lo que ya tienes en bodega reduce lo que debes fabricar.",
              en: "Adding the beginning inventory instead of subtracting it. What you already have in stock reduces what you must make.",
            },
          },
        ],
        bullets: [
          { es: "Operativo: ventas, producción, compras, mano de obra, gastos.", en: "Operating: sales, production, purchases, labor, expenses." },
          { es: "Financiero: efectivo, inversiones de capital, estados proforma.", en: "Financial: cash, capital expenditures, pro forma statements." },
          { es: "Orden: siempre se empieza por ventas.", en: "Order: always start with sales." },
        ],
      },
      {
        heading: { es: "Presupuesto de efectivo y control", en: "Cash budget and control" },
        body: [
          {
            es: "El **presupuesto de efectivo** proyecta el dinero que entra y sale cada mes. Ojo: vender no es cobrar. Si vendes a crédito, el dinero llega después, así que la **cobranza** se calcula según la política de cobro (por ejemplo, 40% de contado y 60% al mes siguiente).",
            en: "The **cash budget** projects the money coming in and going out each month. Careful: selling is not collecting. If you sell on credit, the money arrives later, so **collections** are computed according to the collection policy (for example, 40% cash and 60% the following month).",
          },
          {
            es: "Al saldo inicial le sumas cobros y le restas pagos. Si el resultado queda por debajo del **saldo mínimo** (el colchón que la empresa quiere tener siempre), la diferencia es el **financiamiento necesario**: un préstamo de corto plazo que conviene negociar antes de que falte el dinero.",
            en: "To the opening balance you add collections and subtract payments. If the result falls below the **minimum balance** (the cushion the company always wants to keep), the difference is the **financing needed**: a short-term loan that is best negotiated before the money runs out.",
          },
          {
            es: "El presupuesto también sirve para **controlar**. Una **variación** es la diferencia entre lo real y lo presupuestado. Es **favorable** si ayuda a la utilidad (más ingresos o menos gastos) y **desfavorable** si la reduce. Mini ejemplo: presupuestaste $40,000 de luz y gastaste $46,000: variación desfavorable de $6,000.",
            en: "The budget is also used to **control**. A **variance** is the difference between actual and budgeted figures. It is **favorable** if it helps profit (more revenue or lower expenses) and **unfavorable** if it reduces it. Mini example: you budgeted $40,000 for electricity and spent $46,000: an unfavorable variance of $6,000.",
          },
        ],
        formulas: [
          {
            name: { es: "Cobranza del mes", en: "Collections for the month" },
            expression: "Cobros del mes = % de contado × Ventas del mes + % a crédito × Ventas del mes anterior",
            variables: [
              { symbol: "Cobros del mes", meaning: { es: "Dinero que de verdad entra al banco en el mes (pesos).", en: "Money that actually reaches the bank in the month (pesos)." } },
              { symbol: "% de contado", meaning: { es: "Parte de las ventas que se cobra en el mismo mes de la venta (%).", en: "Share of sales collected in the same month as the sale (%)." } },
              { symbol: "Ventas del mes", meaning: { es: "Lo que se vende en el mes que estás calculando (pesos).", en: "What is sold in the month you are computing (pesos)." } },
              { symbol: "% a crédito", meaning: { es: "Parte de las ventas que se cobra hasta el mes siguiente (%).", en: "Share of sales collected the following month (%)." } },
              { symbol: "Ventas del mes anterior", meaning: { es: "Lo que se vendió el mes pasado y todavía se debía (pesos).", en: "What was sold last month and was still owed (pesos)." } },
            ],
            steps: [
              { es: "Convierte los porcentajes a decimal: 30% = 0.30.", en: "Convert the percentages to decimals: 30% = 0.30." },
              { es: "Multiplica el % de contado por las ventas de este mes.", en: "Multiply the cash % by this month's sales." },
              { es: "Multiplica el % a crédito por las ventas del mes anterior.", en: "Multiply the credit % by last month's sales." },
              { es: "Suma los dos resultados.", en: "Add the two results." },
            ],
            example: {
              es: "Una tienda vendió $150,000 en abril y $180,000 en mayo; cobra 30% de contado y 70% al mes siguiente. Mayo: 0.30 × 180,000 = $54,000; 0.70 × 150,000 = $105,000; cobros de mayo = 54,000 + 105,000 = $159,000.",
              en: "A store sold $150,000 in April and $180,000 in May; it collects 30% cash and 70% the next month. May: 0.30 × 180,000 = $54,000; 0.70 × 150,000 = $105,000; May collections = 54,000 + 105,000 = $159,000.",
            },
            mistake: {
              es: "Poner como cobro todas las ventas del mes. Vender no es cobrar: la parte a crédito llega el mes siguiente.",
              en: "Counting all of the month's sales as collected. Selling is not collecting: the credit part arrives the next month.",
            },
          },
          {
            name: { es: "Saldo final antes de financiamiento", en: "Ending balance before financing" },
            expression: "Saldo final = Saldo inicial + Cobros − Pagos",
            variables: [
              { symbol: "Saldo final", meaning: { es: "Dinero que quedaría en el banco al cerrar el periodo, antes de pedir préstamos (pesos).", en: "Money that would be left in the bank at the end of the period, before borrowing (pesos)." } },
              { symbol: "Saldo inicial", meaning: { es: "Dinero en el banco al empezar el periodo (pesos).", en: "Money in the bank at the start of the period (pesos)." } },
              { symbol: "Cobros", meaning: { es: "Dinero que entra en el periodo (pesos).", en: "Money coming in during the period (pesos)." } },
              { symbol: "Pagos", meaning: { es: "Dinero que sale en el periodo: proveedores, sueldos, renta, impuestos (pesos).", en: "Money going out during the period: suppliers, wages, rent, taxes (pesos)." } },
            ],
            steps: [
              { es: "Empieza con el saldo inicial en bancos.", en: "Start with the opening bank balance." },
              { es: "Súmale los cobros esperados.", en: "Add the expected collections." },
              { es: "Réstale los pagos esperados.", en: "Subtract the expected payments." },
            ],
            example: {
              es: "Saldo inicial $20,000, cobros $90,000, pagos $100,000. Paso 2: 20,000 + 90,000 = $110,000. Paso 3: 110,000 − 100,000 = $10,000 de saldo final.",
              en: "Opening balance $20,000, collections $90,000, payments $100,000. Step 2: 20,000 + 90,000 = $110,000. Step 3: 110,000 − 100,000 = $10,000 ending balance.",
            },
            interpret: {
              es: "Si el saldo final es menor que el saldo mínimo (o negativo), vas a necesitar financiamiento.",
              en: "If the ending balance is below the minimum balance (or negative), you will need financing.",
            },
          },
          {
            name: { es: "Financiamiento necesario", en: "Financing needed" },
            expression: "Financiamiento = Saldo mínimo − Saldo final (solo si el resultado es positivo)",
            variables: [
              { symbol: "Financiamiento", meaning: { es: "Préstamo que necesitas para no quedar por debajo de tu colchón (pesos).", en: "Loan you need so you do not fall below your cushion (pesos)." } },
              { symbol: "Saldo mínimo", meaning: { es: "Cantidad que la empresa decidió tener siempre en el banco (pesos).", en: "Amount the company decided to always keep in the bank (pesos)." } },
              { symbol: "Saldo final", meaning: { es: "Lo que quedaría en el banco antes del préstamo (pesos).", en: "What would be left in the bank before the loan (pesos)." } },
            ],
            steps: [
              { es: "Calcula primero el saldo final antes de financiamiento.", en: "First compute the ending balance before financing." },
              { es: "Réstalo del saldo mínimo.", en: "Subtract it from the minimum balance." },
              { es: "Si sale positivo, esa es la cantidad a pedir; si sale cero o negativo, no necesitas préstamo.", en: "If positive, that is the amount to borrow; if zero or negative, you do not need a loan." },
            ],
            example: {
              es: "Con el saldo final de $10,000 del ejemplo anterior y un saldo mínimo de $18,000: 18,000 − 10,000 = $8,000 de financiamiento necesario.",
              en: "With the $10,000 ending balance from the previous example and an $18,000 minimum balance: 18,000 − 10,000 = $8,000 of financing needed.",
            },
            mistake: {
              es: "Pedir prestado todo el saldo mínimo, olvidando el dinero que ya queda en el banco.",
              en: "Borrowing the whole minimum balance, forgetting the money already left in the bank.",
            },
          },
          {
            name: { es: "Variación presupuestal", en: "Budget variance" },
            expression: "Variación = Real − Presupuestado",
            variables: [
              { symbol: "Variación", meaning: { es: "Diferencia entre lo que pasó y lo que planeaste (pesos).", en: "Difference between what happened and what you planned (pesos)." } },
              { symbol: "Real", meaning: { es: "Cifra que de verdad ocurrió (pesos).", en: "Figure that actually happened (pesos)." } },
              { symbol: "Presupuestado", meaning: { es: "Cifra que estaba en el plan (pesos).", en: "Figure that was in the plan (pesos)." } },
            ],
            steps: [
              { es: "Resta lo presupuestado a lo real.", en: "Subtract the budgeted figure from the actual one." },
              { es: "Fíjate si es un ingreso o un gasto.", en: "Check whether it is a revenue or an expense." },
              { es: "Califícala: si sube la utilidad es favorable; si la baja, desfavorable.", en: "Label it: if it raises profit it is favorable; if it lowers it, unfavorable." },
            ],
            example: {
              es: "Ventas: presupuesto $300,000, real $320,000: 320,000 − 300,000 = +$20,000, más ingreso, favorable. Gasto de renta: presupuesto $50,000, real $55,000: 55,000 − 50,000 = +$5,000, más gasto, desfavorable.",
              en: "Sales: budget $300,000, actual $320,000: 320,000 − 300,000 = +$20,000, more revenue, favorable. Rent expense: budget $50,000, actual $55,000: 55,000 − 50,000 = +$5,000, more expense, unfavorable.",
            },
            interpret: {
              es: "En ingresos, real mayor que el plan es favorable. En gastos es al revés: real menor que el plan es favorable.",
              en: "For revenue, actual above plan is favorable. For expenses it is the opposite: actual below plan is favorable.",
            },
            mistake: {
              es: "Llamar desfavorable a cualquier diferencia contra el plan. Gastar menos de lo presupuestado es favorable.",
              en: "Calling any difference from plan unfavorable. Spending less than budgeted is favorable.",
            },
          },
        ],
      },
    ],
    examples: [
      {
        title: { es: "Presupuesto de efectivo de un trimestre", en: "Cash budget for a quarter" },
        problem: {
          es: "Comercial Del Bajío inicia el trimestre con $50,000 en bancos. Espera cobrar $320,000 y pagar $345,000. Su política es tener siempre al menos $40,000. ¿Necesita financiamiento? ¿De cuánto?",
          en: "Comercial Del Bajío starts the quarter with $50,000 in the bank. It expects to collect $320,000 and pay $345,000. Its policy is to always hold at least $40,000. Does it need financing? How much?",
        },
        steps: [
          { es: "Saldo inicial + cobros: 50,000 + 320,000 = $370,000.", en: "Opening balance + collections: 50,000 + 320,000 = $370,000." },
          { es: "Menos pagos: 370,000 − 345,000 = $25,000 de saldo final antes de financiamiento.", en: "Less payments: 370,000 − 345,000 = $25,000 ending balance before financing." },
          { es: "Comparar con el mínimo: 40,000 − 25,000 = $15,000 de faltante.", en: "Compare with the minimum: 40,000 − 25,000 = $15,000 shortfall." },
        ],
        result: {
          es: "Debe conseguir $15,000 de financiamiento (por ejemplo, una línea de crédito) para cerrar con el saldo mínimo de $40,000.",
          en: "It must obtain $15,000 of financing (for example, a credit line) to close with the $40,000 minimum balance.",
        },
      },
      {
        title: { es: "Análisis de variaciones", en: "Variance analysis" },
        problem: {
          es: "Una cadena de tortillerías presupuestó ventas por $500,000 y gastos de operación por $120,000. Las ventas reales fueron $470,000 y los gastos reales $112,000. Analiza las variaciones.",
          en: "A chain of tortilla shops budgeted sales of $500,000 and operating expenses of $120,000. Actual sales were $470,000 and actual expenses $112,000. Analyze the variances.",
        },
        steps: [
          { es: "Ventas: 470,000 − 500,000 = −$30,000. Vendió menos de lo planeado: desfavorable (−6%).", en: "Sales: 470,000 − 500,000 = −$30,000. It sold less than planned: unfavorable (−6%)." },
          { es: "Gastos: 112,000 − 120,000 = −$8,000. Gastó menos: favorable.", en: "Expenses: 112,000 − 120,000 = −$8,000. It spent less: favorable." },
          { es: "Efecto neto en la utilidad: −30,000 + 8,000 = −$22,000.", en: "Net effect on profit: −30,000 + 8,000 = −$22,000." },
        ],
        result: {
          es: "La utilidad quedó $22,000 abajo del plan. La prioridad es investigar por qué cayeron las ventas; el ahorro en gastos no compensó la caída.",
          en: "Profit came in $22,000 below plan. The priority is to investigate why sales fell; the savings on expenses did not offset the drop.",
        },
      },
    ],
    keyPoints: [
      { es: "Planear es decidir el destino; presupuestar es ponerle cifras al camino.", en: "Planning decides the destination; budgeting puts figures on the road." },
      { es: "El presupuesto maestro tiene un bloque operativo y uno financiero.", en: "The master budget has an operating block and a financial block." },
      { es: "Todo presupuesto empieza por las ventas esperadas.", en: "Every budget starts with expected sales." },
      { es: "Vender no es cobrar: el presupuesto de efectivo usa la política de cobranza.", en: "Selling is not collecting: the cash budget uses the collection policy." },
      { es: "Si el saldo final queda bajo el mínimo, la diferencia es el financiamiento necesario.", en: "If the ending balance falls below the minimum, the difference is the financing needed." },
      { es: "Variación favorable sube la utilidad; desfavorable la baja.", en: "A favorable variance raises profit; an unfavorable one lowers it." },
    ],
    exerciseIds: ['FIN-07-E1', 'FIN-07-E2', 'FIN-07-E3', 'FIN-07-E4', 'FIN-07-E5', 'FIN-07-E6'],
  },

  // ───────────────────────────── FIN-08 ─────────────────────────────
  {
    id: 'FIN-08',
    level: 4,
    topicIds: ['FIN.8'],
    title: { es: "Evaluación de proyectos de inversión", en: "Capital project evaluation" },
    summary: {
      es: "Evaluar un proyecto es estimar los flujos de efectivo adicionales que genera y medir, con criterios como el periodo de recuperación, si vale la pena arriesgar el dinero.",
      en: "Evaluating a project means estimating the additional cash flows it generates and measuring, with criteria such as the payback period, whether it is worth risking the money.",
    },
    minutes: 18,
    objectives: [
      { es: "Reconocer los tipos de proyectos y la diferencia entre independientes y mutuamente excluyentes.", en: "Recognize project types and the difference between independent and mutually exclusive projects." },
      { es: "Identificar qué flujos son relevantes (incrementales) y cuáles no, como los costos hundidos.", en: "Identify which cash flows are relevant (incremental) and which are not, such as sunk costs." },
      { es: "Calcular el flujo de efectivo operativo de un proyecto.", en: "Compute a project's operating cash flow." },
      { es: "Calcular e interpretar el periodo de recuperación.", en: "Compute and interpret the payback period." },
    ],
    theory: [
      {
        heading: { es: "¿Qué es un proyecto de inversión?", en: "What is a capital project?" },
        body: [
          {
            es: "Un **proyecto de inversión** es gastar dinero hoy esperando recibir más dinero en el futuro: comprar una máquina, abrir una sucursal o lanzar un producto. Como el dinero es limitado, la empresa debe elegir los mejores. A esto se le llama **presupuesto de capital**.",
            en: "A **capital project** means spending money today expecting to receive more money in the future: buying a machine, opening a branch or launching a product. Since money is limited, the company must pick the best ones. This is called **capital budgeting**.",
          },
          {
            es: "Los proyectos pueden ser de **expansión** (crecer), de **reemplazo** (cambiar un equipo viejo) u **obligatorios** (cumplir una norma ambiental o de seguridad). Además, pueden ser **independientes** (aceptar uno no impide aceptar otro) o **mutuamente excluyentes** (si eliges uno, descartas el otro, como dos terrenos distintos para la misma bodega).",
            en: "Projects can be **expansion** (growing), **replacement** (changing old equipment) or **mandatory** (meeting an environmental or safety rule). They can also be **independent** (accepting one does not prevent accepting another) or **mutually exclusive** (choosing one rules out the other, like two different plots for the same warehouse).",
          },
          {
            es: "Mini ejemplo: una lavandería en Monterrey duda entre comprar una secadora industrial o una de gas para el mismo espacio. Solo cabe una: son mutuamente excluyentes.",
            en: "Mini example: a laundromat in Monterrey is deciding between an industrial dryer and a gas dryer for the same space. Only one fits: they are mutually exclusive.",
          },
        ],
        bullets: [
          { es: "Idea: detectar la oportunidad.", en: "Idea: spot the opportunity." },
          { es: "Estimación: proyectar inversión y flujos.", en: "Estimation: project the investment and cash flows." },
          { es: "Evaluación: aplicar criterios de decisión.", en: "Evaluation: apply decision criteria." },
          { es: "Seguimiento: comparar lo real con lo proyectado.", en: "Follow-up: compare actual results with projections." },
        ],
      },
      {
        heading: { es: "Flujos relevantes: solo lo que cambia", en: "Relevant cash flows: only what changes" },
        body: [
          {
            es: "Un proyecto se evalúa con **flujos de efectivo**, no con utilidades contables, y solo con los **flujos incrementales**: los que existen **por hacer** el proyecto. La pregunta clave es: ¿este dinero entra o sale solo si acepto el proyecto?",
            en: "A project is evaluated with **cash flows**, not accounting profits, and only with **incremental cash flows**: those that exist **because of** the project. The key question is: does this money come in or go out only if I accept the project?",
          },
          {
            es: "Un **costo hundido** ya se gastó y no se recupera decidas lo que decidas (por ejemplo, el estudio de mercado del año pasado): **no** se incluye. En cambio, el **costo de oportunidad** sí: si usas un terreno propio que podrías rentar en $10,000 al mes, esa renta que dejas de cobrar es un costo del proyecto. También cuenta el **capital de trabajo** adicional (inventario y cuentas por cobrar que necesitas) y los efectos en otros productos de la empresa.",
            en: "A **sunk cost** has already been spent and is not recovered whatever you decide (for example, last year's market study): it is **not** included. By contrast, the **opportunity cost** is: if you use your own land that you could rent for $10,000 a month, the rent you give up is a cost of the project. Additional **working capital** (inventory and receivables you need) and effects on the company's other products also count.",
          },
          {
            es: "La **depreciación** no es salida de dinero, pero reduce impuestos. Por eso el **flujo de efectivo operativo** (FEO) se calcula así: utilidad de operación después de impuestos más la depreciación. Mini ejemplo: ventas $500,000, costos $300,000, depreciación $50,000, impuestos 30%: utilidad de operación $150,000, impuestos $45,000, FEO = 105,000 + 50,000 = $155,000.",
            en: "**Depreciation** is not a cash outflow, but it reduces taxes. That is why **operating cash flow** (OCF) is computed as operating profit after taxes plus depreciation. Mini example: sales $500,000, costs $300,000, depreciation $50,000, taxes 30%: operating profit $150,000, taxes $45,000, OCF = 105,000 + 50,000 = $155,000.",
          },
        ],
        formulas: [
          {
            name: { es: "Flujo de efectivo operativo (FEO)", en: "Operating cash flow (OCF)" },
            expression: "FEO = (Ventas − Costos − Depreciación) × (1 − t) + Depreciación",
            variables: [
              { symbol: "FEO", meaning: { es: "Dinero que la operación del proyecto deja cada año, ya pagados los impuestos (pesos por año).", en: "Money the project's operations leave each year, after taxes (pesos per year)." } },
              { symbol: "Ventas", meaning: { es: "Ingresos anuales que genera el proyecto (pesos).", en: "Annual revenue the project generates (pesos)." } },
              { symbol: "Costos", meaning: { es: "Costos y gastos que sí se pagan en efectivo cada año (pesos).", en: "Costs and expenses actually paid in cash each year (pesos)." } },
              { symbol: "Depreciación", meaning: { es: "Parte del costo del equipo que se reconoce como gasto cada año; no sale dinero, pero baja los impuestos (pesos).", en: "Part of the equipment cost recognized as an expense each year; no money leaves, but it lowers taxes (pesos)." } },
              { symbol: "Ventas − Costos − Depreciación", meaning: { es: "Utilidad de operación: lo que gana el proyecto antes de impuestos (pesos).", en: "Operating profit: what the project earns before taxes (pesos)." } },
              { symbol: "t", meaning: { es: "Tasa de impuestos, en decimal (30% = 0.30).", en: "Tax rate, as a decimal (30% = 0.30)." } },
              { symbol: "(1 − t)", meaning: { es: "La parte de la utilidad que te queda después de impuestos (0.70 si t = 30%).", en: "The share of profit you keep after taxes (0.70 if t = 30%)." } },
            ],
            steps: [
              { es: "Utilidad de operación = Ventas − Costos − Depreciación.", en: "Operating profit = Sales − Costs − Depreciation." },
              { es: "Impuestos = Utilidad de operación × t.", en: "Taxes = Operating profit × t." },
              { es: "Utilidad después de impuestos = Utilidad de operación − Impuestos (es lo mismo que multiplicar por 1 − t).", en: "After-tax profit = Operating profit − Taxes (the same as multiplying by 1 − t)." },
              { es: "FEO = Utilidad después de impuestos + Depreciación, porque la depreciación no fue salida de dinero.", en: "OCF = After-tax profit + Depreciation, because depreciation was not a cash outflow." },
            ],
            example: {
              es: "Ventas $600,000, costos $350,000, depreciación $80,000, t = 30% (ilustrativa). Paso 1: 600,000 − 350,000 − 80,000 = $170,000. Paso 2: 170,000 × 0.30 = $51,000. Paso 3: 170,000 − 51,000 = $119,000. Paso 4: 119,000 + 80,000 = $199,000 de FEO al año.",
              en: "Sales $600,000, costs $350,000, depreciation $80,000, t = 30% (illustrative). Step 1: 600,000 − 350,000 − 80,000 = $170,000. Step 2: 170,000 × 0.30 = $51,000. Step 3: 170,000 − 51,000 = $119,000. Step 4: 119,000 + 80,000 = $199,000 of OCF per year.",
            },
            mistake: {
              es: "Olvidar sumar de vuelta la depreciación al final. Se resta para calcular impuestos, pero no es dinero que salga.",
              en: "Forgetting to add depreciation back at the end. It is subtracted to compute taxes, but it is not money that leaves.",
            },
          },
        ],
      },
      {
        heading: { es: "Criterios sencillos: recuperación y rendimiento contable", en: "Simple criteria: payback and accounting return" },
        body: [
          {
            es: "El **periodo de recuperación** (payback) dice en cuánto tiempo se recupera la inversión con los flujos del proyecto. Se acumulan los flujos año por año hasta igualar la inversión. Es fácil de entender y mide **liquidez y riesgo**: entre más rápido recuperas, menos tiempo estás expuesto.",
            en: "The **payback period** tells how long it takes to recover the investment from the project's cash flows. You accumulate the flows year by year until they match the investment. It is easy to understand and measures **liquidity and risk**: the faster you recover, the less time you are exposed.",
          },
          {
            es: "Su gran defecto: **ignora los flujos después** de la recuperación y no considera el valor del dinero en el tiempo. El **periodo de recuperación descontado** corrige lo segundo usando flujos traídos a valor presente. La **tasa de rendimiento contable** (utilidad neta promedio ÷ inversión promedio) usa utilidades, no flujos, y tampoco descuenta.",
            en: "Its big flaw: it **ignores the flows after** payback and does not consider the time value of money. The **discounted payback period** fixes the second issue by using flows brought to present value. The **accounting rate of return** (average net income ÷ average investment) uses profits, not cash flows, and does not discount either.",
          },
          {
            es: "Por eso estos criterios se usan como **filtro complementario**; los criterios principales son el VPN y la TIR, que verás en los siguientes temas. Mini ejemplo: inviertes $90,000 y recibes $30,000 al año: recuperas en 90,000 ÷ 30,000 = 3 años.",
            en: "That is why these criteria are used as a **complementary screen**; the main criteria are NPV and IRR, which you will see in the next topics. Mini example: you invest $90,000 and receive $30,000 a year: you recover it in 90,000 ÷ 30,000 = 3 years.",
          },
        ],
        formulas: [
          {
            name: { es: "Periodo de recuperación (payback)", en: "Payback period" },
            expression: "Recuperación = Años completos antes de recuperar + (Monto pendiente ÷ Flujo del año siguiente)",
            variables: [
              { symbol: "Recuperación", meaning: { es: "Tiempo que tardas en recuperar lo invertido (años).", en: "Time it takes to get back what you invested (years)." } },
              { symbol: "Años completos antes de recuperar", meaning: { es: "Último año en que el acumulado todavía no alcanza la inversión (años).", en: "Last year in which the cumulative total still falls short of the investment (years)." } },
              { symbol: "Monto pendiente", meaning: { es: "Lo que falta por recuperar al terminar esos años completos: inversión − flujos acumulados (pesos).", en: "What is still to be recovered after those full years: investment − cumulative flows (pesos)." } },
              { symbol: "Flujo del año siguiente", meaning: { es: "Flujo del año en que por fin se completa la recuperación (pesos).", en: "Flow of the year in which recovery is finally completed (pesos)." } },
            ],
            steps: [
              { es: "Suma los flujos año por año (flujo acumulado).", en: "Add up the flows year by year (cumulative flow)." },
              { es: "Identifica el último año en que el acumulado es menor que la inversión.", en: "Find the last year in which the cumulative total is below the investment." },
              { es: "Calcula el monto pendiente: inversión − acumulado de ese año.", en: "Compute the amount still pending: investment − cumulative total of that year." },
              { es: "Divide el monto pendiente entre el flujo del año siguiente y súmalo a los años completos.", en: "Divide the pending amount by the next year's flow and add it to the full years." },
            ],
            example: {
              es: "Inversión $300,000; flujos $100,000, $120,000 y $150,000. Paso 1: acumulado 100,000 y 100,000 + 120,000 = 220,000. Paso 2: 2 años completos. Paso 3: 300,000 − 220,000 = $80,000. Paso 4: 80,000 ÷ 150,000 = 0.53; recuperación = 2 + 0.53 = 2.53 años (unos 2 años y 6 meses). Si los flujos son iguales cada año, basta con inversión ÷ flujo anual.",
              en: "Investment $300,000; flows $100,000, $120,000 and $150,000. Step 1: cumulative 100,000 and 100,000 + 120,000 = 220,000. Step 2: 2 full years. Step 3: 300,000 − 220,000 = $80,000. Step 4: 80,000 ÷ 150,000 = 0.53; payback = 2 + 0.53 = 2.53 years (about 2 years and 6 months). If the flows are equal every year, investment ÷ annual flow is enough.",
            },
            interpret: {
              es: "Menos años significa que recuperas tu dinero más rápido y estás menos tiempo expuesto al riesgo. No dice si el proyecto crea valor.",
              en: "Fewer years means you get your money back faster and are exposed to risk for less time. It does not say whether the project creates value.",
            },
            mistake: {
              es: "Dividir la inversión entre el flujo promedio cuando los flujos son desiguales. Hay que acumular año por año.",
              en: "Dividing the investment by the average flow when the flows are uneven. You must accumulate year by year.",
            },
          },
        ],
      },
    ],
    examples: [
      {
        title: { es: "Periodo de recuperación con flujos desiguales", en: "Payback period with uneven cash flows" },
        problem: {
          es: "Una imprenta invierte $400,000 en una máquina nueva. Espera flujos de $120,000, $150,000, $180,000 y $200,000 en los años 1 a 4. ¿En cuánto tiempo recupera la inversión?",
          en: "A print shop invests $400,000 in a new machine. It expects flows of $120,000, $150,000, $180,000 and $200,000 in years 1 to 4. How long does it take to recover the investment?",
        },
        steps: [
          { es: "Acumulado año 1: $120,000. Año 2: 120,000 + 150,000 = $270,000.", en: "Cumulative year 1: $120,000. Year 2: 120,000 + 150,000 = $270,000." },
          { es: "Falta por recuperar al final del año 2: 400,000 − 270,000 = $130,000.", en: "Still to recover at the end of year 2: 400,000 − 270,000 = $130,000." },
          { es: "Fracción del año 3: 130,000 ÷ 180,000 = 0.72.", en: "Fraction of year 3: 130,000 ÷ 180,000 = 0.72." },
        ],
        result: {
          es: "Recupera en 2.72 años, aproximadamente 2 años y 9 meses. Nota que el flujo del año 4 no influye en este criterio.",
          en: "It recovers in 2.72 years, about 2 years and 9 months. Note that the year-4 flow does not affect this criterion.",
        },
      },
      {
        title: { es: "Flujos relevantes de una nueva línea de producto", en: "Relevant flows of a new product line" },
        problem: {
          es: "Una fábrica de salsas evalúa lanzar una salsa de habanero. Ya pagó $25,000 por una prueba de sabor. Usaría una bodega propia que hoy renta a un tercero en $8,000 al mes. Necesitaría $60,000 extra en inventario. ¿Qué flujos se incluyen?",
          en: "A salsa factory is evaluating a habanero sauce launch. It already paid $25,000 for a taste test. It would use its own warehouse that it currently rents to a third party for $8,000 a month. It would need $60,000 of extra inventory. Which flows are included?",
        },
        steps: [
          { es: "Prueba de sabor de $25,000: ya se pagó y no cambia con la decisión. Es costo hundido: no se incluye.", en: "$25,000 taste test: already paid and does not change with the decision. It is a sunk cost: not included." },
          { es: "Renta de $8,000 mensuales que se dejaría de cobrar: costo de oportunidad, se incluye ($96,000 al año).", en: "$8,000 monthly rent that would be given up: opportunity cost, included ($96,000 a year)." },
          { es: "Inventario adicional de $60,000: inversión en capital de trabajo al inicio; se recupera al final del proyecto.", en: "Extra $60,000 inventory: working capital investment at the start; recovered at the end of the project." },
        ],
        result: {
          es: "Se incluyen la renta perdida y el capital de trabajo; se excluye el costo hundido.",
          en: "The forgone rent and the working capital are included; the sunk cost is excluded.",
        },
      },
    ],
    keyPoints: [
      { es: "Un proyecto se evalúa con flujos de efectivo incrementales, no con utilidades.", en: "A project is evaluated with incremental cash flows, not profits." },
      { es: "Los costos hundidos no cuentan; los costos de oportunidad sí.", en: "Sunk costs do not count; opportunity costs do." },
      { es: "El capital de trabajo adicional es una inversión que se recupera al final.", en: "Additional working capital is an investment recovered at the end." },
      { es: "FEO = utilidad de operación después de impuestos + depreciación.", en: "OCF = after-tax operating profit + depreciation." },
      { es: "El periodo de recuperación mide liquidez pero ignora los flujos posteriores y el valor del dinero en el tiempo.", en: "Payback measures liquidity but ignores later flows and the time value of money." },
    ],
    normativeNote: NOTE_TAX_PROJECTS,
    exerciseIds: ['FIN-08-E1', 'FIN-08-E2', 'FIN-08-E3', 'FIN-08-E4', 'FIN-08-E5', 'FIN-08-E6'],
  },

  // ───────────────────────────── FIN-09 ─────────────────────────────
  {
    id: 'FIN-09',
    level: 4,
    topicIds: ['FIN.9'],
    title: { es: "Valor presente neto (VPN)", en: "Net present value (NPV)" },
    summary: {
      es: "El VPN trae a pesos de hoy todos los flujos de un proyecto, descontados a la tasa que exige la empresa, y le resta la inversión: si queda positivo, el proyecto crea valor.",
      en: "NPV brings all of a project's cash flows into today's pesos, discounted at the rate the company requires, and subtracts the investment: if the result is positive, the project creates value.",
    },
    minutes: 18,
    objectives: [
      { es: "Explicar qué mide el VPN y por qué se usa una tasa de descuento.", en: "Explain what NPV measures and why a discount rate is used." },
      { es: "Calcular el VPN de un proyecto con flujos desiguales.", en: "Compute the NPV of a project with uneven cash flows." },
      { es: "Aplicar la regla de decisión del VPN a proyectos independientes y mutuamente excluyentes.", en: "Apply the NPV decision rule to independent and mutually exclusive projects." },
      { es: "Describir cómo cambia el VPN cuando cambia la tasa de descuento.", en: "Describe how NPV changes when the discount rate changes." },
    ],
    theory: [
      {
        heading: { es: "La idea: comparar en pesos de hoy", en: "The idea: compare in today's pesos" },
        body: [
          {
            es: "Un peso hoy vale más que un peso dentro de un año, porque hoy lo puedes invertir y porque el futuro es incierto. Por eso no puedes sumar flujos de años distintos como si fueran iguales. El **valor presente neto (VPN)** resuelve esto: convierte cada flujo futuro a pesos de hoy y luego resta la inversión.",
            en: "A peso today is worth more than a peso a year from now, because today you can invest it and because the future is uncertain. That is why you cannot add up flows from different years as if they were equal. **Net present value (NPV)** solves this: it converts each future flow into today's pesos and then subtracts the investment.",
          },
          {
            es: "Para convertir se usa una **tasa de descuento**: el rendimiento mínimo que la empresa exige por el riesgo del proyecto. Se le llama también **costo de capital** o **TREMA** (tasa de rendimiento mínima aceptable). Si tus inversionistas podrían ganar 12% en otro proyecto de riesgo parecido, ese 12% es tu vara de medir.",
            en: "To convert, a **discount rate** is used: the minimum return the company requires for the project's risk. It is also called the **cost of capital** or **hurdle rate** (TREMA in Spanish). If your investors could earn 12% on another project of similar risk, that 12% is your yardstick.",
          },
          {
            es: "Mini ejemplo: con una tasa del 10%, recibir $11,000 dentro de un año equivale hoy a 11,000 ÷ 1.10 = $10,000.",
            en: "Mini example: at a 10% rate, receiving $11,000 a year from now is worth 11,000 ÷ 1.10 = $10,000 today.",
          },
        ],
        formulas: [
          {
            name: { es: "Valor presente de un flujo futuro", en: "Present value of a future flow" },
            expression: "VP = FE ÷ (1 + k)ᵗ",
            variables: [
              { symbol: "VP", meaning: { es: "Cuánto vale hoy ese dinero futuro (pesos de hoy).", en: "What that future money is worth today (today's pesos)." } },
              { symbol: "FE", meaning: { es: "Flujo de efectivo: el dinero que recibirás en el futuro (pesos).", en: "Cash flow: the money you will receive in the future (pesos)." } },
              { symbol: "k", meaning: { es: "Tasa de descuento o rendimiento exigido, en decimal (10% = 0.10).", en: "Discount rate or required return, as a decimal (10% = 0.10)." } },
              { symbol: "t", meaning: { es: "Número de años que faltan para recibir el flujo (años).", en: "Number of years until you receive the flow (years)." } },
              { symbol: "(1 + k)ᵗ", meaning: { es: "1 + k multiplicado por sí mismo t veces; por ejemplo, (1.10)² = 1.10 × 1.10 = 1.21.", en: "1 + k multiplied by itself t times; for example, (1.10)² = 1.10 × 1.10 = 1.21." } },
            ],
            steps: [
              { es: "Convierte la tasa a decimal y súmale 1: 8% → 1.08.", en: "Convert the rate to a decimal and add 1: 8% → 1.08." },
              { es: "Eleva ese número a t (multiplícalo por sí mismo t veces).", en: "Raise that number to t (multiply it by itself t times)." },
              { es: "Divide el flujo futuro entre ese resultado.", en: "Divide the future flow by that result." },
            ],
            example: {
              es: "Recibirás $25,000 dentro de 2 años y exiges 8%. Paso 1: 1.08. Paso 2: 1.08 × 1.08 = 1.1664. Paso 3: 25,000 ÷ 1.1664 = $21,433.47 de hoy.",
              en: "You will receive $25,000 in 2 years and require 8%. Step 1: 1.08. Step 2: 1.08 × 1.08 = 1.1664. Step 3: 25,000 ÷ 1.1664 = $21,433.47 today.",
            },
            interpret: {
              es: "El VP siempre es menor que el flujo futuro (si k es positiva). Entre más lejos o más alta la tasa, menos vale hoy.",
              en: "PV is always smaller than the future flow (if k is positive). The farther away or the higher the rate, the less it is worth today.",
            },
          },
        ],
      },
      {
        heading: { es: "Cómo se calcula y cómo se lee", en: "How to compute and read it" },
        body: [
          {
            es: "Divides cada flujo entre (1 + k) elevado al número de años que faltan para recibirlo, sumas todos esos valores presentes y restas la inversión inicial (I₀). El resultado es el VPN.",
            en: "You divide each flow by (1 + k) raised to the number of years until you receive it, add up all those present values and subtract the initial investment (I₀). The result is the NPV.",
          },
          {
            es: "La lectura es directa: un **VPN positivo** significa que el proyecto paga la tasa exigida **y además** deja un excedente en pesos de hoy: crea valor para los dueños. Un **VPN de cero** significa que gana justo la tasa exigida. Un **VPN negativo** significa que no alcanza a pagar esa tasa (aunque pueda tener utilidad contable).",
            en: "The reading is straightforward: a **positive NPV** means the project pays the required rate **and also** leaves a surplus in today's pesos: it creates value for the owners. An **NPV of zero** means it earns exactly the required rate. A **negative NPV** means it does not manage to pay that rate (even though it may show an accounting profit).",
          },
          {
            es: "Mini ejemplo: inviertes $100,000 y recibes $40,000, $50,000 y $60,000 en tres años, con k = 10%. Valores presentes: $36,363.64 + $41,322.31 + $45,078.89 = $122,764.84. VPN = 122,764.84 − 100,000 = $22,764.84.",
            en: "Mini example: you invest $100,000 and receive $40,000, $50,000 and $60,000 over three years, with k = 10%. Present values: $36,363.64 + $41,322.31 + $45,078.89 = $122,764.84. NPV = 122,764.84 − 100,000 = $22,764.84.",
          },
        ],
        formulas: [
          {
            name: { es: "Valor presente neto (VPN)", en: "Net present value (NPV)" },
            expression: "VPN = −I₀ + FE₁ ÷ (1 + k)¹ + FE₂ ÷ (1 + k)² + … + FEₙ ÷ (1 + k)ⁿ",
            variables: [
              { symbol: "VPN", meaning: { es: "Valor que el proyecto agrega (o quita) en pesos de hoy (pesos).", en: "Value the project adds (or destroys) in today's pesos (pesos)." } },
              { symbol: "I₀", meaning: { es: "Inversión inicial, el dinero que pones hoy (año 0); por eso lleva signo menos (pesos).", en: "Initial investment, the money you put in today (year 0); that is why it has a minus sign (pesos)." } },
              { symbol: "FE₁, FE₂, …, FEₙ", meaning: { es: "Flujos de efectivo que recibes al final de los años 1, 2, …, n (pesos).", en: "Cash flows you receive at the end of years 1, 2, …, n (pesos)." } },
              { symbol: "k", meaning: { es: "Tasa de descuento: rendimiento mínimo exigido, en decimal (%).", en: "Discount rate: minimum required return, as a decimal (%)." } },
              { symbol: "n", meaning: { es: "Último año del proyecto (años).", en: "Last year of the project (years)." } },
              { symbol: "Σ", meaning: { es: "Letra griega sigma; significa sumar todos los términos (a veces la fórmula se escribe VPN = −I₀ + Σ FEₜ ÷ (1 + k)ᵗ).", en: "Greek letter sigma; it means add up all the terms (the formula is sometimes written NPV = −I₀ + Σ CFₜ ÷ (1 + k)ᵗ)." } },
            ],
            steps: [
              { es: "Calcula (1 + k) elevado a cada año: año 1, año 2, año 3…", en: "Compute (1 + k) raised to each year: year 1, year 2, year 3…" },
              { es: "Divide cada flujo entre el factor de su año: ese es su valor presente.", en: "Divide each flow by its year's factor: that is its present value." },
              { es: "Suma todos los valores presentes.", en: "Add up all the present values." },
              { es: "Resta la inversión inicial.", en: "Subtract the initial investment." },
            ],
            example: {
              es: "Inviertes $50,000 y recibes $20,000, $25,000 y $15,000 en los años 1 a 3, con k = 8%. Paso 1: 1.08, 1.1664 y 1.259712. Paso 2: 20,000 ÷ 1.08 = 18,518.52; 25,000 ÷ 1.1664 = 21,433.47; 15,000 ÷ 1.259712 = 11,907.48. Paso 3: suma = $51,859.47. Paso 4: VPN = 51,859.47 − 50,000 = $1,859.47.",
              en: "You invest $50,000 and receive $20,000, $25,000 and $15,000 in years 1 to 3, with k = 8%. Step 1: 1.08, 1.1664 and 1.259712. Step 2: 20,000 ÷ 1.08 = 18,518.52; 25,000 ÷ 1.1664 = 21,433.47; 15,000 ÷ 1.259712 = 11,907.48. Step 3: sum = $51,859.47. Step 4: NPV = 51,859.47 − 50,000 = $1,859.47.",
            },
            interpret: {
              es: "VPN > 0: el proyecto paga la tasa exigida y además crea valor; aceptar. VPN = 0: gana justo la tasa exigida. VPN < 0: no alcanza a pagarla; rechazar.",
              en: "NPV > 0: the project pays the required rate and also creates value; accept. NPV = 0: it earns exactly the required rate. NPV < 0: it does not cover it; reject.",
            },
            mistake: {
              es: "Sumar los flujos sin descontarlos, o usar el mismo exponente para todos los años.",
              en: "Adding the flows without discounting them, or using the same exponent for every year.",
            },
          },
        ],
        bullets: [
          { es: "VPN > 0: aceptar, crea valor.", en: "NPV > 0: accept, it creates value." },
          { es: "VPN = 0: indiferente, gana justo lo exigido.", en: "NPV = 0: indifferent, it earns exactly what is required." },
          { es: "VPN < 0: rechazar, destruye valor.", en: "NPV < 0: reject, it destroys value." },
        ],
      },
      {
        heading: { es: "Usar el VPN para decidir", en: "Using NPV to decide" },
        body: [
          {
            es: "Con **proyectos independientes** aceptas todos los que tengan VPN positivo (si hay dinero para todos). Con **proyectos mutuamente excluyentes** eliges el de **mayor VPN**, porque es el que más riqueza agrega en pesos de hoy.",
            en: "With **independent projects** you accept all those with a positive NPV (if there is money for all). With **mutually exclusive projects** you choose the one with the **highest NPV**, because it adds the most wealth in today's pesos.",
          },
          {
            es: "El VPN depende mucho de la tasa: **si la tasa sube, el VPN baja**, porque los flujos futuros valen menos hoy. El proyecto del ejemplo anterior tiene VPN de $22,764.84 al 10%, pero solo $2,777.78 al 20%. La gráfica del VPN contra distintas tasas se llama **perfil del VPN**.",
            en: "NPV depends heavily on the rate: **if the rate rises, NPV falls**, because future flows are worth less today. The project in the previous example has an NPV of $22,764.84 at 10%, but only $2,777.78 at 20%. The chart of NPV against different rates is called the **NPV profile**.",
          },
          {
            es: "Su límite es que depende de **estimaciones**: si los flujos están inflados, el VPN también. Por eso conviene probar escenarios (pesimista, base, optimista). Mini ejemplo: si en el escenario pesimista el VPN sigue positivo, el proyecto es más sólido.",
            en: "Its limitation is that it depends on **estimates**: if the flows are inflated, so is the NPV. That is why it is wise to test scenarios (pessimistic, base, optimistic). Mini example: if the NPV stays positive in the pessimistic scenario, the project is more robust.",
          },
        ],
      },
    ],
    examples: [
      {
        title: { es: "VPN de un proyecto a tres años", en: "NPV of a three-year project" },
        problem: {
          es: "Una agencia de viajes en Cancún invierte $100,000 en una plataforma de reservas que generará $40,000, $50,000 y $60,000 en los años 1, 2 y 3. Su tasa exigida es 10%. ¿Conviene?",
          en: "A travel agency in Cancún invests $100,000 in a booking platform that will generate $40,000, $50,000 and $60,000 in years 1, 2 and 3. Its required rate is 10%. Is it worth it?",
        },
        steps: [
          { es: "Año 1: 40,000 ÷ 1.10 = $36,363.64.", en: "Year 1: 40,000 ÷ 1.10 = $36,363.64." },
          { es: "Año 2: 50,000 ÷ 1.21 = $41,322.31.", en: "Year 2: 50,000 ÷ 1.21 = $41,322.31." },
          { es: "Año 3: 60,000 ÷ 1.331 = $45,078.89.", en: "Year 3: 60,000 ÷ 1.331 = $45,078.89." },
          { es: "Suma: $122,764.84. VPN = 122,764.84 − 100,000 = $22,764.84.", en: "Sum: $122,764.84. NPV = 122,764.84 − 100,000 = $22,764.84." },
        ],
        result: {
          es: "VPN positivo de $22,764.84: el proyecto paga el 10% exigido y además crea ese valor adicional. Se acepta.",
          en: "Positive NPV of $22,764.84: the project pays the required 10% and also creates that extra value. Accept.",
        },
      },
      {
        title: { es: "El mismo proyecto con una tasa más alta", en: "The same project at a higher rate" },
        problem: {
          es: "Si el riesgo de la plataforma fuera mayor y la agencia exigiera 20%, ¿cuál sería el VPN?",
          en: "If the platform were riskier and the agency required 20%, what would the NPV be?",
        },
        steps: [
          { es: "Año 1: 40,000 ÷ 1.20 = $33,333.33.", en: "Year 1: 40,000 ÷ 1.20 = $33,333.33." },
          { es: "Año 2: 50,000 ÷ 1.44 = $34,722.22.", en: "Year 2: 50,000 ÷ 1.44 = $34,722.22." },
          { es: "Año 3: 60,000 ÷ 1.728 = $34,722.22.", en: "Year 3: 60,000 ÷ 1.728 = $34,722.22." },
          { es: "Suma: $102,777.78. VPN = $2,777.78.", en: "Sum: $102,777.78. NPV = $2,777.78." },
        ],
        result: {
          es: "Sigue siendo positivo, pero mucho menor: a mayor tasa exigida, menor VPN. Un poco más de riesgo podría volverlo negativo.",
          en: "Still positive, but much smaller: the higher the required rate, the lower the NPV. A bit more risk could turn it negative.",
        },
      },
    ],
    keyPoints: [
      { es: "El VPN convierte todos los flujos a pesos de hoy y resta la inversión.", en: "NPV converts all flows into today's pesos and subtracts the investment." },
      { es: "La tasa de descuento es el rendimiento mínimo exigido por el riesgo del proyecto.", en: "The discount rate is the minimum return required for the project's risk." },
      { es: "VPN positivo crea valor; negativo lo destruye.", en: "Positive NPV creates value; negative NPV destroys it." },
      { es: "Entre proyectos mutuamente excluyentes, se elige el de mayor VPN.", en: "Among mutually exclusive projects, choose the highest NPV." },
      { es: "Si la tasa sube, el VPN baja.", en: "If the rate rises, NPV falls." },
    ],
    exerciseIds: ['FIN-09-E1', 'FIN-09-E2', 'FIN-09-E3', 'FIN-09-E4', 'FIN-09-E5', 'FIN-09-E6'],
  },

  // ───────────────────────────── FIN-10 ─────────────────────────────
  {
    id: 'FIN-10',
    level: 4,
    topicIds: ['FIN.10'],
    title: { es: "Tasa interna de retorno (TIR)", en: "Internal rate of return (IRR)" },
    summary: {
      es: "La TIR es la tasa de rendimiento que genera el propio proyecto, es decir, la tasa que hace su VPN igual a cero; se acepta si supera el costo de capital, cuidando sus trampas.",
      en: "IRR is the rate of return generated by the project itself, that is, the rate that makes its NPV equal to zero; it is accepted if it exceeds the cost of capital, while watching out for its pitfalls.",
    },
    minutes: 18,
    objectives: [
      { es: "Definir la TIR como la tasa que hace el VPN igual a cero.", en: "Define IRR as the rate that makes NPV equal to zero." },
      { es: "Calcular la TIR en casos sencillos y estimarla por interpolación.", en: "Compute IRR in simple cases and estimate it by interpolation." },
      { es: "Aplicar la regla de decisión de la TIR frente al costo de capital.", en: "Apply the IRR decision rule against the cost of capital." },
      { es: "Reconocer las limitaciones de la TIR y cuándo preferir el VPN.", en: "Recognize IRR's limitations and when to prefer NPV." },
    ],
    theory: [
      {
        heading: { es: "La tasa que rinde el proyecto", en: "The rate the project earns" },
        body: [
          {
            es: "La **tasa interna de retorno (TIR)** es el rendimiento anual que da el proyecto por sí mismo. Técnicamente, es la tasa de descuento con la que el **VPN es exactamente cero**: los flujos futuros, traídos a hoy, igualan justo la inversión.",
            en: "The **internal rate of return (IRR)** is the annual return the project provides on its own. Technically, it is the discount rate at which **NPV is exactly zero**: future flows, brought to today, exactly match the investment.",
          },
          {
            es: "Se llama \"interna\" porque solo depende de los flujos del proyecto, no de tasas del mercado. Es popular porque se expresa en porcentaje y es fácil de comparar: \"este proyecto rinde 18%\".",
            en: "It is called \"internal\" because it depends only on the project's flows, not on market rates. It is popular because it is expressed as a percentage and is easy to compare: \"this project yields 18%\".",
          },
          {
            es: "La regla: si la **TIR es mayor que el costo de capital** (la tasa exigida), el proyecto se acepta; si es menor, se rechaza. Mini ejemplo: inviertes $100,000 y en un año recibes $115,000: la TIR es 15%. Si tu costo de capital es 11%, conviene.",
            en: "The rule: if **IRR is higher than the cost of capital** (the required rate), the project is accepted; if lower, it is rejected. Mini example: you invest $100,000 and in one year receive $115,000: IRR is 15%. If your cost of capital is 11%, it is worth it.",
          },
        ],
        formulas: [
          {
            name: { es: "Definición de la TIR (la tasa que hace VPN = 0)", en: "Definition of IRR (the rate that makes NPV = 0)" },
            expression: "0 = −I₀ + Σ FEₜ ÷ (1 + TIR)ᵗ",
            variables: [
              { symbol: "TIR", meaning: { es: "Tasa interna de retorno: el rendimiento anual del propio proyecto (%).", en: "Internal rate of return: the project's own annual return (%)." } },
              { symbol: "I₀", meaning: { es: "Inversión inicial, hoy (pesos).", en: "Initial investment, today (pesos)." } },
              { symbol: "FEₜ", meaning: { es: "Flujo de efectivo del año t (pesos).", en: "Cash flow of year t (pesos)." } },
              { symbol: "t", meaning: { es: "Año en que llega cada flujo: 1, 2, 3… (años).", en: "Year in which each flow arrives: 1, 2, 3… (years)." } },
              { symbol: "Σ", meaning: { es: "Suma de todos los flujos ya descontados.", en: "Sum of all the discounted flows." } },
            ],
            steps: [
              { es: "Es la misma fórmula del VPN, pero en lugar de usar k buscas la tasa que deja el resultado en cero.", en: "It is the same NPV formula, but instead of using k you look for the rate that leaves the result at zero." },
              { es: "Para comprobar una TIR, calcula el VPN con esa tasa: si da 0 (o casi), es la TIR.", en: "To check an IRR, compute NPV at that rate: if it gives 0 (or nearly), it is the IRR." },
              { es: "Compara la TIR con el costo de capital para decidir.", en: "Compare the IRR with the cost of capital to decide." },
            ],
            example: {
              es: "Inviertes $100,000 y recibes $55,000 en el año 1 y $60,500 en el año 2. Prueba con 10%: 55,000 ÷ 1.10 = 50,000; 60,500 ÷ 1.21 = 50,000; VPN = −100,000 + 50,000 + 50,000 = 0. La TIR es 10%.",
              en: "You invest $100,000 and receive $55,000 in year 1 and $60,500 in year 2. Try 10%: 55,000 ÷ 1.10 = 50,000; 60,500 ÷ 1.21 = 50,000; NPV = −100,000 + 50,000 + 50,000 = 0. The IRR is 10%.",
            },
            interpret: {
              es: "TIR mayor que el costo de capital: aceptar. TIR menor: rechazar.",
              en: "IRR above the cost of capital: accept. IRR below: reject.",
            },
          },
        ],
      },
      {
        heading: { es: "Cómo se calcula", en: "How to compute it" },
        body: [
          {
            es: "Con un solo flujo es fácil: TIR = (flujo final ÷ inversión)^(1/n) − 1. Por ejemplo, invertir $100,000 y recibir $121,000 en el año 2 da (1.21)^(1/2) − 1 = 10%. Si el proyecto paga lo mismo para siempre (una **perpetuidad**), TIR = flujo anual ÷ inversión.",
            en: "With a single flow it is easy: IRR = (final flow ÷ investment)^(1/n) − 1. For example, investing $100,000 and receiving $121,000 in year 2 gives (1.21)^(1/2) − 1 = 10%. If the project pays the same amount forever (a **perpetuity**), IRR = annual flow ÷ investment.",
          },
          {
            es: "Con varios flujos no hay una fórmula directa: se busca por **prueba y error**. Calculas el VPN con una tasa; si sale positivo, subes la tasa; si sale negativo, la bajas. En la práctica se usa la función TIR (IRR) de una hoja de cálculo.",
            en: "With several flows there is no direct formula: you search by **trial and error**. You compute NPV at one rate; if it is positive, raise the rate; if negative, lower it. In practice the IRR function of a spreadsheet is used.",
          },
          {
            es: "A mano, se puede estimar con **interpolación lineal** entre una tasa con VPN positivo y otra con VPN negativo. El resultado es una aproximación: entre más cercanas las dos tasas, mejor.",
            en: "By hand, you can estimate it with **linear interpolation** between a rate with positive NPV and another with negative NPV. The result is an approximation: the closer the two rates, the better.",
          },
        ],
        formulas: [
          {
            name: { es: "TIR con un solo flujo futuro", en: "IRR with a single future flow" },
            expression: "TIR = (Flujo final ÷ Inversión)^(1/n) − 1",
            variables: [
              { symbol: "Flujo final", meaning: { es: "Dinero que recibes una sola vez al final (pesos).", en: "Money you receive once at the end (pesos)." } },
              { symbol: "Inversión", meaning: { es: "Dinero que pones hoy (pesos).", en: "Money you put in today (pesos)." } },
              { symbol: "n", meaning: { es: "Años que pasan entre la inversión y el cobro (años).", en: "Years between the investment and the payoff (years)." } },
              { symbol: "^(1/n)", meaning: { es: "Sacar raíz n: con n = 1 no cambia nada; con n = 2 es raíz cuadrada.", en: "Take the n-th root: with n = 1 nothing changes; with n = 2 it is the square root." } },
            ],
            steps: [
              { es: "Divide el flujo final entre la inversión.", en: "Divide the final flow by the investment." },
              { es: "Saca la raíz n de ese resultado (si n = 1, déjalo igual).", en: "Take the n-th root of that result (if n = 1, leave it as is)." },
              { es: "Réstale 1 y multiplica por 100 para tenerlo en porcentaje.", en: "Subtract 1 and multiply by 100 to get a percentage." },
            ],
            example: {
              es: "A un año: inviertes $20,000 y recibes $23,000. 23,000 ÷ 20,000 = 1.15; 1.15 − 1 = 0.15 = 15%. A dos años: inviertes $50,000 y recibes $72,000. 72,000 ÷ 50,000 = 1.44; √1.44 = 1.20; 1.20 − 1 = 0.20 = 20% anual.",
              en: "One year: you invest $20,000 and receive $23,000. 23,000 ÷ 20,000 = 1.15; 1.15 − 1 = 0.15 = 15%. Two years: you invest $50,000 and receive $72,000. 72,000 ÷ 50,000 = 1.44; √1.44 = 1.20; 1.20 − 1 = 0.20 = 20% a year.",
            },
            mistake: {
              es: "Con varios años, olvidar sacar la raíz: 44% sería el rendimiento de los dos años juntos, no el anual. Y medir la ganancia sobre lo recibido en vez de sobre lo invertido.",
              en: "With several years, forgetting to take the root: 44% would be the return over both years together, not per year. And measuring the gain over what you receive instead of over what you invested.",
            },
          },
          {
            name: { es: "TIR aproximada por interpolación lineal", en: "IRR approximated by linear interpolation" },
            expression: "TIR ≈ r₁ + (r₂ − r₁) × VPN₁ ÷ (VPN₁ − VPN₂)",
            variables: [
              { symbol: "r₁", meaning: { es: "Tasa más baja que probaste, con VPN positivo (%).", en: "Lower rate you tried, with a positive NPV (%)." } },
              { symbol: "r₂", meaning: { es: "Tasa más alta que probaste, con VPN negativo (%).", en: "Higher rate you tried, with a negative NPV (%)." } },
              { symbol: "VPN₁", meaning: { es: "VPN calculado con r₁ (pesos, positivo).", en: "NPV computed at r₁ (pesos, positive)." } },
              { symbol: "VPN₂", meaning: { es: "VPN calculado con r₂ (pesos, negativo).", en: "NPV computed at r₂ (pesos, negative)." } },
              { symbol: "≈", meaning: { es: "Aproximadamente igual: el resultado es una estimación.", en: "Approximately equal: the result is an estimate." } },
            ],
            steps: [
              { es: "Calcula el VPN con una tasa r₁ y comprueba que sale positivo.", en: "Compute NPV at a rate r₁ and check that it is positive." },
              { es: "Calcula el VPN con una tasa mayor r₂ y comprueba que sale negativo.", en: "Compute NPV at a higher rate r₂ and check that it is negative." },
              { es: "Denominador: VPN₁ − VPN₂. Como VPN₂ es negativo, restar un negativo es sumar: es la distancia total entre ambos.", en: "Denominator: NPV₁ − NPV₂. Since NPV₂ is negative, subtracting a negative means adding: it is the total distance between them." },
              { es: "Divide VPN₁ entre esa distancia, multiplica por (r₂ − r₁) y súmalo a r₁.", en: "Divide NPV₁ by that distance, multiply by (r₂ − r₁) and add it to r₁." },
            ],
            example: {
              es: "Inviertes $50,000 y recibes $32,000 al final de cada uno de 2 años. Paso 1 (15%): 32,000 ÷ 1.15 + 32,000 ÷ 1.3225 − 50,000 = 27,826.09 + 24,196.60 − 50,000 = $2,022.69. Paso 2 (20%): 26,666.67 + 22,222.22 − 50,000 = −$1,111.11. Paso 3: 2,022.69 − (−1,111.11) = 3,133.80. Paso 4: 2,022.69 ÷ 3,133.80 = 0.6454; 5% × 0.6454 = 3.23%; TIR ≈ 15% + 3.23% = 18.23% (la exacta es 18.16%).",
              en: "You invest $50,000 and receive $32,000 at the end of each of 2 years. Step 1 (15%): 32,000 ÷ 1.15 + 32,000 ÷ 1.3225 − 50,000 = 27,826.09 + 24,196.60 − 50,000 = $2,022.69. Step 2 (20%): 26,666.67 + 22,222.22 − 50,000 = −$1,111.11. Step 3: 2,022.69 − (−1,111.11) = 3,133.80. Step 4: 2,022.69 ÷ 3,133.80 = 0.6454; 5% × 0.6454 = 3.23%; IRR ≈ 15% + 3.23% = 18.23% (the exact one is 18.16%).",
            },
            interpret: {
              es: "La TIR siempre queda entre r₁ y r₂. Entre más cercanas las dos tasas, más exacta la estimación.",
              en: "The IRR always lies between r₁ and r₂. The closer the two rates, the more accurate the estimate.",
            },
            mistake: {
              es: "Sumar los dos VPN con sus signos en el denominador (2,022.69 − 1,111.11). Se usa la distancia total entre ellos.",
              en: "Adding the two NPVs with their signs in the denominator (2,022.69 − 1,111.11). Use the total distance between them.",
            },
          },
        ],
      },
      {
        heading: { es: "Trampas de la TIR", en: "IRR pitfalls" },
        body: [
          {
            es: "**Flujos no convencionales.** Si los signos de los flujos cambian más de una vez (por ejemplo, inversión, ingresos y luego un gran costo de cierre de una mina), puede haber **varias TIR** o ninguna. Ahí la TIR no sirve para decidir.",
            en: "**Non-conventional flows.** If the signs of the flows change more than once (for example, investment, income and then a large mine closure cost), there may be **several IRRs** or none. Then IRR is useless for deciding.",
          },
          {
            es: "**Problema de escala.** La TIR mide porcentaje, no pesos. Ganar 50% sobre $10,000 es menos riqueza que ganar 20% sobre $1,000,000. Entre proyectos **mutuamente excluyentes**, si la TIR y el VPN se contradicen, manda el **VPN**.",
            en: "**Scale problem.** IRR measures percentage, not pesos. Earning 50% on $10,000 is less wealth than earning 20% on $1,000,000. Between **mutually exclusive** projects, if IRR and NPV disagree, **NPV** rules.",
          },
          {
            es: "**Supuesto de reinversión.** La TIR supone implícitamente que los flujos intermedios se reinvierten a la misma TIR, lo cual puede ser optimista. La **TIR modificada (TIRM)** corrige esto reinvirtiendo al costo de capital. Mini ejemplo: un proyecto con TIR de 40% rara vez encuentra otras inversiones que también rindan 40%.",
            en: "**Reinvestment assumption.** IRR implicitly assumes intermediate flows are reinvested at the same IRR, which may be optimistic. The **modified IRR (MIRR)** fixes this by reinvesting at the cost of capital. Mini example: a project with a 40% IRR rarely finds other investments that also yield 40%.",
          },
        ],
        bullets: [
          { es: "TIR > costo de capital: aceptar.", en: "IRR > cost of capital: accept." },
          { es: "Varios cambios de signo: cuidado, puede haber varias TIR.", en: "Several sign changes: careful, there may be several IRRs." },
          { es: "Excluyentes con conflicto: decide con el VPN.", en: "Mutually exclusive with conflict: decide with NPV." },
        ],
      },
    ],
    examples: [
      {
        title: { es: "TIR por interpolación", en: "IRR by interpolation" },
        problem: {
          es: "Un consultorio dental invierte $100,000 en un equipo de rayos X que generará $60,000 al año durante 2 años. Estima su TIR interpolando entre 10% y 15%.",
          en: "A dental office invests $100,000 in X-ray equipment that will generate $60,000 a year for 2 years. Estimate its IRR by interpolating between 10% and 15%.",
        },
        steps: [
          { es: "VPN al 10%: 60,000 ÷ 1.10 + 60,000 ÷ 1.21 − 100,000 = 54,545.45 + 49,586.78 − 100,000 = $4,132.23.", en: "NPV at 10%: 60,000 ÷ 1.10 + 60,000 ÷ 1.21 − 100,000 = 54,545.45 + 49,586.78 − 100,000 = $4,132.23." },
          { es: "VPN al 15%: 52,173.91 + 45,368.62 − 100,000 = −$2,457.47.", en: "NPV at 15%: 52,173.91 + 45,368.62 − 100,000 = −$2,457.47." },
          { es: "Interpolación: 10% + 5% × 4,132.23 ÷ (4,132.23 + 2,457.47) = 10% + 5% × 0.627 = 13.14%.", en: "Interpolation: 10% + 5% × 4,132.23 ÷ (4,132.23 + 2,457.47) = 10% + 5% × 0.627 = 13.14%." },
        ],
        result: {
          es: "La TIR estimada es 13.14% (la exacta es 13.07%; la interpolación lineal la sobreestima un poco). Si el costo de capital fuera 12%, se aceptaría.",
          en: "The estimated IRR is 13.14% (the exact one is 13.07%; linear interpolation slightly overestimates it). If the cost of capital were 12%, it would be accepted.",
        },
      },
      {
        title: { es: "Cuando la TIR y el VPN no coinciden", en: "When IRR and NPV disagree" },
        problem: {
          es: "Un restaurante solo puede hacer una remodelación. La opción A cuesta $20,000, tiene TIR de 35% y VPN de $6,000. La opción B cuesta $200,000, tiene TIR de 18% y VPN de $25,000. Su costo de capital es 12%. ¿Cuál elegir?",
          en: "A restaurant can only do one remodel. Option A costs $20,000, has a 35% IRR and an NPV of $6,000. Option B costs $200,000, has an 18% IRR and an NPV of $25,000. Its cost of capital is 12%. Which to choose?",
        },
        steps: [
          { es: "Ambas superan el 12%: las dos serían aceptables por separado.", en: "Both exceed 12%: both would be acceptable on their own." },
          { es: "Son mutuamente excluyentes: solo una se puede hacer.", en: "They are mutually exclusive: only one can be done." },
          { es: "A tiene mejor TIR, pero B agrega más riqueza: $25,000 contra $6,000 en pesos de hoy.", en: "A has the better IRR, but B adds more wealth: $25,000 versus $6,000 in today's pesos." },
        ],
        result: {
          es: "Se elige B, la de mayor VPN. La diferencia viene del tamaño (escala) de cada proyecto.",
          en: "Choose B, the one with the higher NPV. The difference comes from the size (scale) of each project.",
        },
      },
    ],
    keyPoints: [
      { es: "La TIR es la tasa que hace el VPN igual a cero.", en: "IRR is the rate that makes NPV equal to zero." },
      { es: "Se acepta el proyecto si la TIR supera el costo de capital.", en: "Accept the project if IRR exceeds the cost of capital." },
      { es: "Con varios flujos se calcula por prueba y error, interpolación o con una hoja de cálculo.", en: "With several flows it is computed by trial and error, interpolation or a spreadsheet." },
      { es: "Flujos con varios cambios de signo pueden tener varias TIR.", en: "Flows with several sign changes can have several IRRs." },
      { es: "Si TIR y VPN se contradicen en proyectos excluyentes, manda el VPN.", en: "If IRR and NPV disagree on mutually exclusive projects, NPV rules." },
    ],
    exerciseIds: ['FIN-10-E1', 'FIN-10-E2', 'FIN-10-E3', 'FIN-10-E4', 'FIN-10-E5', 'FIN-10-E6'],
  },

  // ───────────────────────────── FIN-11 ─────────────────────────────
  {
    id: 'FIN-11',
    level: 4,
    topicIds: ['FIN.11'],
    title: { es: "Costo promedio ponderado de capital (WACC)", en: "Weighted average cost of capital (WACC)" },
    summary: {
      es: "El WACC es el costo promedio de todo el dinero que usa la empresa, mezclando lo que cuesta la deuda después de impuestos y lo que exigen los accionistas, según cuánto pesa cada fuente.",
      en: "WACC is the average cost of all the money the company uses, blending the after-tax cost of debt and what shareholders require, according to how much each source weighs.",
    },
    minutes: 18,
    objectives: [
      { es: "Explicar qué es el costo de capital y por qué se pondera.", en: "Explain what the cost of capital is and why it is weighted." },
      { es: "Calcular el costo de la deuda después de impuestos.", en: "Compute the after-tax cost of debt." },
      { es: "Estimar el costo del capital propio con el modelo CAPM.", en: "Estimate the cost of equity with the CAPM model." },
      { es: "Calcular el WACC y usarlo como tasa de descuento.", en: "Compute WACC and use it as a discount rate." },
    ],
    theory: [
      {
        heading: { es: "¿Cuánto le cuesta el dinero a la empresa?", en: "How much does money cost the company?" },
        body: [
          {
            es: "Una empresa se financia con dos tipos de dinero: el de los **acreedores** (bancos, tenedores de bonos), que prestan y cobran intereses, y el de los **accionistas** (dueños), que ponen capital y esperan un rendimiento. Ninguno de los dos es gratis.",
            en: "A company is financed with two kinds of money: that of **creditors** (banks, bondholders), who lend and charge interest, and that of **shareholders** (owners), who put in capital and expect a return. Neither is free.",
          },
          {
            es: "El **costo de capital** es el rendimiento que exigen quienes ponen el dinero. Como la empresa usa una mezcla, se calcula un **promedio ponderado**: cada costo pesa según la proporción de esa fuente. Es como calcular tu calificación final cuando el examen vale 60% y las tareas 40%.",
            en: "The **cost of capital** is the return required by those who provide the money. Since the company uses a mix, a **weighted average** is computed: each cost weighs according to that source's share. It is like computing your final grade when the exam is worth 60% and homework 40%.",
          },
          {
            es: "Ese promedio es el **WACC** (por sus siglas en inglés; en español, CPPC). Es la tasa mínima que un proyecto de riesgo similar al de la empresa debe rendir para dejar contentos a todos. Mini ejemplo: si el WACC es 12% y un proyecto rinde 10%, no alcanza a pagar a quienes lo financian.",
            en: "That average is the **WACC** (CPPC in Spanish). It is the minimum rate a project with risk similar to the company's must earn to satisfy everyone. Mini example: if WACC is 12% and a project yields 10%, it does not cover those who finance it.",
          },
        ],
      },
      {
        heading: { es: "El costo de cada fuente", en: "The cost of each source" },
        body: [
          {
            es: "**Costo de la deuda (kd).** Es la tasa que cobra el acreedor. Como los intereses en general son **deducibles de impuestos**, el costo real para la empresa es menor: kd × (1 − t). Mini ejemplo: un crédito al 10% con tasa de impuestos de 30% cuesta en realidad 10% × 0.70 = 7%.",
            en: "**Cost of debt (kd).** It is the rate the creditor charges. Since interest is generally **tax deductible**, the real cost to the company is lower: kd × (1 − t). Mini example: a loan at 10% with a 30% tax rate actually costs 10% × 0.70 = 7%.",
          },
          {
            es: "**Costo del capital propio (ke).** Lo que esperan los accionistas no está escrito en ningún contrato, así que se estima. El método más usado es el **CAPM**: una tasa libre de riesgo (rf, lo que paga una inversión casi segura, como un bono del gobierno) más una **prima por riesgo**: lo extra que paga el mercado de acciones sobre esa tasa (rm − rf, donde rm es el rendimiento esperado del mercado). La **beta (β)** mide qué tanto se mueve la acción frente al mercado: β = 1 se mueve igual, β mayor a 1 es más volátil.",
            en: "**Cost of equity (ke).** What shareholders expect is not written in any contract, so it is estimated. The most used method is **CAPM**: a risk-free rate (rf, what an almost safe investment pays, such as a government bond) plus a **risk premium**: the extra the stock market pays over that rate (rm − rf, where rm is the expected market return). **Beta (β)** measures how much the stock moves relative to the market: β = 1 moves the same, β above 1 is more volatile.",
          },
          {
            es: "El capital propio **cuesta más que la deuda**: el accionista cobra al último (después de los acreedores) y sus dividendos no son deducibles. Mini ejemplo: rf = 8%, β = 1.2 y prima de mercado (rm − rf) = 6%: ke = 8% + 1.2 × 6% = 15.2%.",
            en: "Equity **costs more than debt**: shareholders get paid last (after creditors) and their dividends are not deductible. Mini example: rf = 8%, β = 1.2 and market premium (rm − rf) = 6%: ke = 8% + 1.2 × 6% = 15.2%.",
          },
        ],
        formulas: [
          {
            name: { es: "Costo de la deuda después de impuestos", en: "After-tax cost of debt" },
            expression: "kd después de impuestos = kd × (1 − t)",
            variables: [
              { symbol: "kd", meaning: { es: "Tasa de interés que cobra el acreedor, antes de impuestos (% anual).", en: "Interest rate the creditor charges, before taxes (% per year)." } },
              { symbol: "t", meaning: { es: "Tasa de impuestos de la empresa, en decimal (30% = 0.30).", en: "Company tax rate, as a decimal (30% = 0.30)." } },
              { symbol: "(1 − t)", meaning: { es: "La parte del interés que la empresa sí carga después del ahorro en impuestos.", en: "The part of the interest the company actually bears after the tax saving." } },
            ],
            steps: [
              { es: "Convierte la tasa de impuestos a decimal y réstala de 1: 1 − 0.30 = 0.70.", en: "Convert the tax rate to a decimal and subtract it from 1: 1 − 0.30 = 0.70." },
              { es: "Multiplica la tasa de la deuda por ese resultado.", en: "Multiply the debt rate by that result." },
            ],
            example: {
              es: "Un crédito al 9% con t = 30% (tasa de ejemplo). Paso 1: 1 − 0.30 = 0.70. Paso 2: 9% × 0.70 = 6.3%.",
              en: "A loan at 9% with t = 30% (example rate). Step 1: 1 − 0.30 = 0.70. Step 2: 9% × 0.70 = 6.3%.",
            },
            mistake: {
              es: "Restar los porcentajes (9% − 30%) o multiplicar por t (9% × 0.30 = 2.7%, que es solo el ahorro).",
              en: "Subtracting the percentages (9% − 30%) or multiplying by t (9% × 0.30 = 2.7%, which is only the saving).",
            },
          },
          {
            name: { es: "Costo del capital propio con CAPM", en: "Cost of equity with CAPM" },
            expression: "ke = rf + β × (rm − rf)",
            variables: [
              { symbol: "ke", meaning: { es: "Rendimiento que exigen los accionistas (% anual).", en: "Return shareholders require (% per year)." } },
              { symbol: "rf", meaning: { es: "Tasa libre de riesgo: lo que paga una inversión casi segura, como un bono del gobierno (%).", en: "Risk-free rate: what an almost safe investment pays, such as a government bond (%)." } },
              { symbol: "rm", meaning: { es: "Rendimiento esperado del mercado de acciones en general (%).", en: "Expected return of the stock market as a whole (%)." } },
              { symbol: "(rm − rf)", meaning: { es: "Prima de riesgo de mercado: lo extra que paga el mercado por arriesgarse (%).", en: "Market risk premium: the extra the market pays for taking risk (%)." } },
              { symbol: "β", meaning: { es: "Beta: qué tanto se mueve la acción frente al mercado (1 = igual; más de 1 = más volátil; menos de 1 = menos volátil). No tiene unidades.", en: "Beta: how much the stock moves relative to the market (1 = the same; above 1 = more volatile; below 1 = less volatile). It has no units." } },
            ],
            steps: [
              { es: "Si te dan rm, calcula la prima: rm − rf. Si te dan la prima directamente, úsala tal cual.", en: "If you are given rm, compute the premium: rm − rf. If you are given the premium directly, use it as is." },
              { es: "Multiplica la beta por la prima.", en: "Multiply beta by the premium." },
              { es: "Súmale la tasa libre de riesgo.", en: "Add the risk-free rate." },
            ],
            example: {
              es: "Datos de ejemplo: rf = 6%, rm = 11%, β = 1.5. Paso 1: 11% − 6% = 5%. Paso 2: 1.5 × 5% = 7.5%. Paso 3: ke = 6% + 7.5% = 13.5%.",
              en: "Example data: rf = 6%, rm = 11%, β = 1.5. Step 1: 11% − 6% = 5%. Step 2: 1.5 × 5% = 7.5%. Step 3: ke = 6% + 7.5% = 13.5%.",
            },
            interpret: {
              es: "A mayor beta, mayor riesgo y mayor ke. El capital propio suele costar más que la deuda.",
              en: "The higher the beta, the higher the risk and the higher ke. Equity usually costs more than debt.",
            },
            mistake: {
              es: "Multiplicar la beta por todo rm en lugar de solo por la prima (rm − rf).",
              en: "Multiplying beta by the whole rm instead of only by the premium (rm − rf).",
            },
          },
        ],
      },
      {
        heading: { es: "Juntar todo: el WACC", en: "Putting it together: WACC" },
        body: [
          {
            es: "Se multiplica cada costo por su peso y se suman. Los pesos son D ÷ (D + E) para la deuda y E ÷ (D + E) para el capital, donde D es la deuda y E el capital propio. Lo ideal es usar **valores de mercado** (lo que valen hoy), no los valores en libros.",
            en: "Each cost is multiplied by its weight and they are added. The weights are D ÷ (D + E) for debt and E ÷ (D + E) for equity, where D is debt and E is equity. Ideally, use **market values** (what they are worth today), not book values.",
          },
          {
            es: "El WACC se usa como **tasa de descuento** en el VPN de proyectos con riesgo parecido al promedio de la empresa. Si un proyecto es mucho más riesgoso (por ejemplo, entrar a un negocio nuevo), conviene usar una tasa más alta.",
            en: "WACC is used as the **discount rate** in the NPV of projects with risk similar to the company's average. If a project is much riskier (for example, entering a new business), a higher rate should be used.",
          },
          {
            es: "Mini ejemplo: con 40% deuda a 7% después de impuestos y 60% capital a 15.2%: WACC = 0.40 × 7% + 0.60 × 15.2% = 2.8% + 9.12% = 11.92%.",
            en: "Mini example: with 40% debt at 7% after taxes and 60% equity at 15.2%: WACC = 0.40 × 7% + 0.60 × 15.2% = 2.8% + 9.12% = 11.92%.",
          },
        ],
        formulas: [
          {
            name: { es: "Peso de cada fuente", en: "Weight of each source" },
            expression: "Peso de la deuda = D ÷ (D + E);  Peso del capital = E ÷ (D + E)",
            variables: [
              { symbol: "D", meaning: { es: "Deuda a valor de mercado (pesos).", en: "Debt at market value (pesos)." } },
              { symbol: "E", meaning: { es: "Capital propio a valor de mercado (pesos).", en: "Equity at market value (pesos)." } },
              { symbol: "D + E", meaning: { es: "Todo el dinero con que se financia la empresa (pesos).", en: "All the money financing the company (pesos)." } },
            ],
            steps: [
              { es: "Suma deuda y capital: D + E.", en: "Add debt and equity: D + E." },
              { es: "Divide la deuda entre ese total y multiplica por 100.", en: "Divide debt by that total and multiply by 100." },
              { es: "Haz lo mismo con el capital. Los dos pesos deben sumar 100%.", en: "Do the same with equity. The two weights must add up to 100%." },
            ],
            example: {
              es: "Deuda $1,500,000 y capital $3,500,000. Paso 1: 1,500,000 + 3,500,000 = $5,000,000. Paso 2: 1,500,000 ÷ 5,000,000 = 0.30 = 30%. Paso 3: 3,500,000 ÷ 5,000,000 = 0.70 = 70%; 30% + 70% = 100%.",
              en: "Debt $1,500,000 and equity $3,500,000. Step 1: 1,500,000 + 3,500,000 = $5,000,000. Step 2: 1,500,000 ÷ 5,000,000 = 0.30 = 30%. Step 3: 3,500,000 ÷ 5,000,000 = 0.70 = 70%; 30% + 70% = 100%.",
            },
            mistake: {
              es: "Usar D ÷ E como peso. El peso se mide contra el total, D + E.",
              en: "Using D ÷ E as the weight. The weight is measured against the total, D + E.",
            },
          },
          {
            name: { es: "Costo promedio ponderado de capital (WACC)", en: "Weighted average cost of capital (WACC)" },
            expression: "WACC = D/(D+E) × kd × (1 − t) + E/(D+E) × ke",
            variables: [
              { symbol: "WACC", meaning: { es: "Costo promedio de todo el dinero de la empresa (% anual).", en: "Average cost of all the company's money (% per year)." } },
              { symbol: "D/(D+E)", meaning: { es: "Peso de la deuda (%).", en: "Weight of debt (%)." } },
              { symbol: "kd × (1 − t)", meaning: { es: "Costo de la deuda después de impuestos (%).", en: "After-tax cost of debt (%)." } },
              { symbol: "E/(D+E)", meaning: { es: "Peso del capital propio (%).", en: "Weight of equity (%)." } },
              { symbol: "ke", meaning: { es: "Costo del capital propio, lo que exigen los accionistas (%).", en: "Cost of equity, what shareholders require (%)." } },
            ],
            steps: [
              { es: "Calcula los pesos de deuda y capital.", en: "Compute the weights of debt and equity." },
              { es: "Calcula el costo de la deuda después de impuestos: kd × (1 − t).", en: "Compute the after-tax cost of debt: kd × (1 − t)." },
              { es: "Multiplica cada costo por su peso.", en: "Multiply each cost by its weight." },
              { es: "Suma los dos resultados.", en: "Add the two results." },
            ],
            example: {
              es: "Con los datos anteriores: deuda 30% a 9% antes de impuestos (t = 30%, tasa de ejemplo) y capital 70% a ke = 13.5%. Paso 2: 9% × 0.70 = 6.3%. Paso 3: 0.30 × 6.3% = 1.89%; 0.70 × 13.5% = 9.45%. Paso 4: WACC = 1.89% + 9.45% = 11.34%.",
              en: "With the data above: debt 30% at 9% before taxes (t = 30%, example rate) and equity 70% at ke = 13.5%. Step 2: 9% × 0.70 = 6.3%. Step 3: 0.30 × 6.3% = 1.89%; 0.70 × 13.5% = 9.45%. Step 4: WACC = 1.89% + 9.45% = 11.34%.",
            },
            interpret: {
              es: "Es la tasa mínima que debe rendir un proyecto de riesgo promedio. Si rinde menos, no alcanza a pagar a quienes lo financian.",
              en: "It is the minimum rate an average-risk project must earn. If it earns less, it does not cover those who finance it.",
            },
            mistake: {
              es: "Aplicar el (1 − t) también al costo del capital propio. Solo la deuda tiene ahorro de impuestos.",
              en: "Applying (1 − t) to the cost of equity too. Only debt has a tax saving.",
            },
          },
        ],
        bullets: [
          { es: "Usa pesos a valor de mercado.", en: "Use market-value weights." },
          { es: "La deuda entra después de impuestos.", en: "Debt enters after taxes." },
          { es: "El WACC sirve para proyectos de riesgo promedio.", en: "WACC suits average-risk projects." },
        ],
      },
    ],
    examples: [
      {
        title: { es: "WACC de una cadena de farmacias", en: "WACC of a pharmacy chain" },
        problem: {
          es: "Farmacias del Norte tiene deuda con valor de mercado de $3,000,000 a una tasa de 12% y capital propio con valor de mercado de $7,000,000. Los accionistas exigen 16% y la tasa de impuestos es 30%. Calcula el WACC.",
          en: "Farmacias del Norte has debt with a market value of $3,000,000 at a 12% rate and equity with a market value of $7,000,000. Shareholders require 16% and the tax rate is 30%. Compute WACC.",
        },
        steps: [
          { es: "Total: 3,000,000 + 7,000,000 = $10,000,000. Pesos: deuda 30%, capital 70%.", en: "Total: 3,000,000 + 7,000,000 = $10,000,000. Weights: debt 30%, equity 70%." },
          { es: "Costo de la deuda después de impuestos: 12% × (1 − 0.30) = 8.4%.", en: "After-tax cost of debt: 12% × (1 − 0.30) = 8.4%." },
          { es: "Ponderar: 0.30 × 8.4% = 2.52%; 0.70 × 16% = 11.2%.", en: "Weight: 0.30 × 8.4% = 2.52%; 0.70 × 16% = 11.2%." },
        ],
        result: {
          es: "WACC = 2.52% + 11.2% = 13.72%. Un proyecto de riesgo promedio debe rendir más de 13.72% para crear valor.",
          en: "WACC = 2.52% + 11.2% = 13.72%. An average-risk project must yield more than 13.72% to create value.",
        },
      },
      {
        title: { es: "Costo del capital propio con CAPM y WACC", en: "Cost of equity with CAPM and WACC" },
        problem: {
          es: "Una empresa de logística tiene β = 1.2. La tasa libre de riesgo es 8% y la prima de mercado 6%. Su deuda cuesta 10% antes de impuestos (t = 30%). Se financia con 40% deuda y 60% capital. Calcula ke y el WACC.",
          en: "A logistics company has β = 1.2. The risk-free rate is 8% and the market premium 6%. Its debt costs 10% before taxes (t = 30%). It is financed with 40% debt and 60% equity. Compute ke and WACC.",
        },
        steps: [
          { es: "ke = 8% + 1.2 × 6% = 8% + 7.2% = 15.2%.", en: "ke = 8% + 1.2 × 6% = 8% + 7.2% = 15.2%." },
          { es: "kd después de impuestos = 10% × 0.70 = 7%.", en: "After-tax kd = 10% × 0.70 = 7%." },
          { es: "WACC = 0.40 × 7% + 0.60 × 15.2% = 2.8% + 9.12%.", en: "WACC = 0.40 × 7% + 0.60 × 15.2% = 2.8% + 9.12%." },
        ],
        result: {
          es: "ke = 15.2% y WACC = 11.92%. Observa que la deuda (7%) es mucho más barata que el capital (15.2%).",
          en: "ke = 15.2% and WACC = 11.92%. Notice that debt (7%) is much cheaper than equity (15.2%).",
        },
      },
    ],
    keyPoints: [
      { es: "El WACC es el costo promedio ponderado de la deuda y del capital propio.", en: "WACC is the weighted average cost of debt and equity." },
      { es: "La deuda se toma después de impuestos: kd × (1 − t).", en: "Debt is taken after taxes: kd × (1 − t)." },
      { es: "El costo del capital propio se estima con CAPM: rf + β × (rm − rf).", en: "The cost of equity is estimated with CAPM: rf + β × (rm − rf)." },
      { es: "El capital propio cuesta más que la deuda porque tiene más riesgo.", en: "Equity costs more than debt because it carries more risk." },
      { es: "Los pesos se calculan idealmente a valor de mercado.", en: "Weights are ideally computed at market value." },
      { es: "El WACC es la tasa de descuento para proyectos de riesgo promedio.", en: "WACC is the discount rate for average-risk projects." },
    ],
    normativeNote: NOTE_WACC,
    exerciseIds: ['FIN-11-E1', 'FIN-11-E2', 'FIN-11-E3', 'FIN-11-E4', 'FIN-11-E5', 'FIN-11-E6'],
  },

  // ───────────────────────────── FIN-12 ─────────────────────────────
  {
    id: 'FIN-12',
    level: 4,
    topicIds: ['FIN.12'],
    title: { es: "Estructura de capital y financiamiento", en: "Capital structure and financing" },
    summary: {
      es: "La estructura de capital es la mezcla de deuda y capital propio con la que se financia la empresa; la deuda puede multiplicar el rendimiento de los dueños, pero también su riesgo.",
      en: "Capital structure is the mix of debt and equity used to finance the company; debt can multiply the owners' return, but also their risk.",
    },
    minutes: 18,
    objectives: [
      { es: "Clasificar las fuentes de financiamiento en deuda y capital, internas y externas.", en: "Classify financing sources into debt and equity, internal and external." },
      { es: "Calcular el efecto del apalancamiento financiero en el rendimiento sobre el capital (ROE).", en: "Compute the effect of financial leverage on return on equity (ROE)." },
      { es: "Calcular el escudo fiscal de los intereses.", en: "Compute the interest tax shield." },
      { es: "Explicar las principales teorías sobre la estructura de capital.", en: "Explain the main capital structure theories." },
    ],
    theory: [
      {
        heading: { es: "Fuentes de financiamiento", en: "Sources of financing" },
        body: [
          {
            es: "La **estructura de capital** es la proporción de **deuda** y **capital propio** con que la empresa paga sus activos. Es como comprar una casa: una parte la pones tú (enganche) y otra la pide prestada al banco (hipoteca).",
            en: "**Capital structure** is the proportion of **debt** and **equity** the company uses to pay for its assets. It is like buying a house: you put in part (the down payment) and borrow the rest from the bank (the mortgage).",
          },
          {
            es: "La **deuda** obliga a pagar intereses y devolver el dinero en fechas fijas: créditos bancarios, emisión de bonos o certificados bursátiles, arrendamientos. El **capital propio** no tiene fecha de pago, pero los nuevos socios comparten las ganancias y el control: aportaciones de los dueños, **utilidades retenidas** (ganancias que no se reparten) o emisión de acciones.",
            en: "**Debt** requires paying interest and returning the money on fixed dates: bank loans, bond or note issues, leases. **Equity** has no repayment date, but new partners share the profits and control: owner contributions, **retained earnings** (profits not distributed) or share issues.",
          },
          {
            es: "Además, las fuentes pueden ser **internas** (generadas por la propia empresa, como las utilidades retenidas) o **externas** (de terceros, como un banco o nuevos inversionistas). Mini ejemplo: una purificadora de agua que reinvierte sus ganancias en una nueva ruta se financia con capital interno.",
            en: "Sources can also be **internal** (generated by the company itself, such as retained earnings) or **external** (from third parties, such as a bank or new investors). Mini example: a water purification business that reinvests its profits in a new delivery route is financed with internal equity.",
          },
        ],
        bullets: [
          { es: "Deuda: intereses obligatorios, plazo fijo, no diluye el control.", en: "Debt: mandatory interest, fixed term, does not dilute control." },
          { es: "Capital: sin pago obligatorio, pero comparte ganancias y control.", en: "Equity: no mandatory payment, but shares profits and control." },
          { es: "Razón deuda/capital (D/E): cuánta deuda hay por cada peso de los dueños.", en: "Debt-to-equity ratio (D/E): how much debt per peso of the owners." },
        ],
      },
      {
        heading: { es: "Apalancamiento financiero: la lupa de los resultados", en: "Financial leverage: the magnifying glass of results" },
        body: [
          {
            es: "El **apalancamiento financiero** es usar deuda para financiar activos. Si los activos rinden más que lo que cuesta la deuda, la diferencia queda para los dueños y su **ROE** (utilidad neta ÷ capital propio) sube. Si rinden menos, el ROE cae más de lo que caería sin deuda.",
            en: "**Financial leverage** is using debt to finance assets. If the assets earn more than the debt costs, the difference goes to the owners and their **ROE** (net income ÷ equity) rises. If they earn less, ROE falls more than it would without debt.",
          },
          {
            es: "Los intereses también generan un **escudo fiscal**: al ser deducibles, reducen los impuestos. El ahorro anual es intereses × t. Mini ejemplo: intereses de $240,000 con t = 30% ahorran $72,000 de impuestos.",
            en: "Interest also generates a **tax shield**: being deductible, it lowers taxes. The annual saving is interest × t. Mini example: $240,000 of interest with t = 30% saves $72,000 in taxes.",
          },
          {
            es: "Mini ejemplo de año malo: activos de $1,000,000 y utilidad de operación de solo $60,000 (t = 30%). Sin deuda: utilidad neta $42,000, ROE 4.2%. Con $500,000 de deuda al 10%: intereses $50,000, utilidad neta $7,000 sobre $500,000 de capital, ROE 1.4%. La deuda amplifica en ambos sentidos.",
            en: "Bad-year mini example: assets of $1,000,000 and operating profit of only $60,000 (t = 30%). Without debt: net income $42,000, ROE 4.2%. With $500,000 of debt at 10%: interest $50,000, net income $7,000 on $500,000 of equity, ROE 1.4%. Debt amplifies in both directions.",
          },
        ],
        formulas: [
          {
            name: { es: "Utilidad neta (con o sin deuda)", en: "Net income (with or without debt)" },
            expression: "Utilidad neta = (Utilidad de operación − Intereses) × (1 − t)",
            variables: [
              { symbol: "Utilidad neta", meaning: { es: "Lo que les queda a los dueños después de intereses e impuestos (pesos).", en: "What is left for the owners after interest and taxes (pesos)." } },
              { symbol: "Utilidad de operación", meaning: { es: "Lo que ganan los activos con el negocio, antes de intereses e impuestos (pesos).", en: "What the assets earn from the business, before interest and taxes (pesos)." } },
              { symbol: "Intereses", meaning: { es: "Deuda × tasa de interés; si no hay deuda, valen cero (pesos).", en: "Debt × interest rate; with no debt they are zero (pesos)." } },
              { symbol: "Utilidad de operación − Intereses", meaning: { es: "Utilidad antes de impuestos, UAI (pesos).", en: "Pre-tax income (pesos)." } },
              { symbol: "t", meaning: { es: "Tasa de impuestos, en decimal (30% = 0.30).", en: "Tax rate, as a decimal (30% = 0.30)." } },
            ],
            steps: [
              { es: "Intereses = Deuda × tasa de interés.", en: "Interest = Debt × interest rate." },
              { es: "Utilidad antes de impuestos = Utilidad de operación − Intereses.", en: "Pre-tax income = Operating profit − Interest." },
              { es: "Impuestos = Utilidad antes de impuestos × t.", en: "Taxes = Pre-tax income × t." },
              { es: "Utilidad neta = Utilidad antes de impuestos − Impuestos.", en: "Net income = Pre-tax income − Taxes." },
            ],
            example: {
              es: "Utilidad de operación $240,000, deuda $500,000 al 8%, t = 30% (ilustrativa). Paso 1: 500,000 × 0.08 = $40,000. Paso 2: 240,000 − 40,000 = $200,000. Paso 3: 200,000 × 0.30 = $60,000. Paso 4: 200,000 − 60,000 = $140,000. Sin deuda: 240,000 × 0.70 = $168,000.",
              en: "Operating profit $240,000, debt $500,000 at 8%, t = 30% (illustrative). Step 1: 500,000 × 0.08 = $40,000. Step 2: 240,000 − 40,000 = $200,000. Step 3: 200,000 × 0.30 = $60,000. Step 4: 200,000 − 60,000 = $140,000. Without debt: 240,000 × 0.70 = $168,000.",
            },
          },
          {
            name: { es: "Rendimiento sobre el capital (ROE)", en: "Return on equity (ROE)" },
            expression: "ROE = Utilidad neta ÷ Capital propio × 100",
            variables: [
              { symbol: "ROE", meaning: { es: "Cuánto ganan los dueños por cada peso que pusieron (%).", en: "How much the owners earn per peso they put in (%)." } },
              { symbol: "Utilidad neta", meaning: { es: "Ganancia después de intereses e impuestos (pesos).", en: "Profit after interest and taxes (pesos)." } },
              { symbol: "Capital propio", meaning: { es: "Dinero de los dueños: activos − deuda; sin deuda es igual a los activos (pesos).", en: "Owners' money: assets − debt; with no debt it equals the assets (pesos)." } },
            ],
            steps: [
              { es: "Calcula la utilidad neta (con o sin intereses, según el caso).", en: "Compute net income (with or without interest, as the case may be)." },
              { es: "Calcula el capital propio: activos − deuda.", en: "Compute equity: assets − debt." },
              { es: "Divide la utilidad neta entre el capital propio y multiplica por 100.", en: "Divide net income by equity and multiply by 100." },
            ],
            example: {
              es: "Activos $1,500,000. Sin deuda: 168,000 ÷ 1,500,000 = 0.112 = 11.2%. Con $500,000 de deuda: capital = 1,500,000 − 500,000 = $1,000,000; ROE = 140,000 ÷ 1,000,000 = 0.14 = 14%.",
              en: "Assets $1,500,000. Without debt: 168,000 ÷ 1,500,000 = 0.112 = 11.2%. With $500,000 of debt: equity = 1,500,000 − 500,000 = $1,000,000; ROE = 140,000 ÷ 1,000,000 = 0.14 = 14%.",
            },
            interpret: {
              es: "Si el ROE con deuda es mayor que sin deuda, el apalancamiento ayudó; en un año malo puede pasar lo contrario.",
              en: "If ROE with debt is higher than without debt, leverage helped; in a bad year the opposite can happen.",
            },
            mistake: {
              es: "Dividir la utilidad entre los activos totales en lugar de entre el capital de los dueños.",
              en: "Dividing profit by total assets instead of by the owners' equity.",
            },
          },
          {
            name: { es: "Escudo fiscal de los intereses", en: "Interest tax shield" },
            expression: "Escudo fiscal = Intereses × t",
            variables: [
              { symbol: "Escudo fiscal", meaning: { es: "Impuestos que dejas de pagar porque los intereses se deducen (pesos por año).", en: "Taxes you stop paying because interest is deducted (pesos per year)." } },
              { symbol: "Intereses", meaning: { es: "Intereses deducibles pagados en el año (pesos).", en: "Deductible interest paid in the year (pesos)." } },
              { symbol: "t", meaning: { es: "Tasa de impuestos, en decimal (%).", en: "Tax rate, as a decimal (%)." } },
            ],
            steps: [
              { es: "Convierte la tasa de impuestos a decimal: 30% = 0.30.", en: "Convert the tax rate to a decimal: 30% = 0.30." },
              { es: "Multiplica los intereses por esa tasa: ese es el ahorro.", en: "Multiply the interest by that rate: that is the saving." },
              { es: "Si quieres el costo neto: intereses − escudo fiscal.", en: "If you want the net cost: interest − tax shield." },
            ],
            example: {
              es: "Intereses de $90,000 con t = 30% (ilustrativa). Paso 2: 90,000 × 0.30 = $27,000 de ahorro. Paso 3: 90,000 − 27,000 = $63,000 de costo neto.",
              en: "Interest of $90,000 with t = 30% (illustrative). Step 2: 90,000 × 0.30 = $27,000 saved. Step 3: 90,000 − 27,000 = $63,000 net cost.",
            },
            mistake: {
              es: "Confundir el escudo fiscal (el ahorro) con el costo neto de los intereses. Además, sin utilidades no hay impuestos que reducir.",
              en: "Confusing the tax shield (the saving) with the net interest cost. Also, without profits there are no taxes to reduce.",
            },
          },
        ],
      },
      {
        heading: { es: "¿Existe una mezcla ideal?", en: "Is there an ideal mix?" },
        body: [
          {
            es: "**Modigliani y Miller** demostraron que, en un mundo ideal sin impuestos ni costos de quiebra, la mezcla de deuda y capital **no cambia** el valor de la empresa. Con impuestos, la deuda agrega valor por el escudo fiscal. Son un punto de partida teórico.",
            en: "**Modigliani and Miller** showed that, in an ideal world without taxes or bankruptcy costs, the mix of debt and equity **does not change** the firm's value. With taxes, debt adds value through the tax shield. They are a theoretical starting point.",
          },
          {
            es: "La **teoría del equilibrio (trade-off)** agrega la realidad: más deuda da más escudo fiscal, pero también más riesgo de **dificultades financieras** (no poder pagar, perder clientes y proveedores, quiebra). La estructura óptima está donde esos dos efectos se equilibran.",
            en: "The **trade-off theory** adds reality: more debt gives more tax shield, but also more risk of **financial distress** (being unable to pay, losing customers and suppliers, bankruptcy). The optimal structure lies where those two effects balance.",
          },
          {
            es: "La **teoría del orden jerárquico (pecking order)** observa que las empresas prefieren primero **fondos internos**, luego **deuda** y al final **emitir acciones**, porque emitir acciones puede mandar la señal de que los dueños creen que la acción está cara. Mini ejemplo: una empresa con flujos estables (como una distribuidora de gas) puede cargar más deuda que una startup con ingresos inciertos.",
            en: "The **pecking order theory** observes that companies prefer **internal funds** first, then **debt** and lastly **issuing shares**, because issuing shares may signal that the owners think the stock is overpriced. Mini example: a company with stable cash flows (such as a gas distributor) can carry more debt than a startup with uncertain revenue.",
          },
        ],
        bullets: [
          { es: "MM sin impuestos: la estructura es irrelevante.", en: "MM without taxes: structure is irrelevant." },
          { es: "MM con impuestos: la deuda agrega valor por el escudo fiscal.", en: "MM with taxes: debt adds value through the tax shield." },
          { es: "Trade-off: escudo fiscal contra costo de dificultades financieras.", en: "Trade-off: tax shield versus cost of financial distress." },
          { es: "Pecking order: internos, luego deuda, al final acciones.", en: "Pecking order: internal funds, then debt, lastly shares." },
        ],
      },
    ],
    examples: [
      {
        title: { es: "Efecto del apalancamiento en un buen año", en: "Effect of leverage in a good year" },
        problem: {
          es: "Una embotelladora tiene activos por $1,000,000 y una utilidad de operación de $200,000 (t = 30%). Compara el ROE si se financia 100% con capital o con 50% de deuda al 10%.",
          en: "A bottling company has $1,000,000 in assets and operating profit of $200,000 (t = 30%). Compare ROE if it is financed 100% with equity or with 50% debt at 10%.",
        },
        steps: [
          { es: "Sin deuda: impuestos 200,000 × 0.30 = 60,000; utilidad neta $140,000; ROE = 140,000 ÷ 1,000,000 = 14%.", en: "No debt: taxes 200,000 × 0.30 = 60,000; net income $140,000; ROE = 140,000 ÷ 1,000,000 = 14%." },
          { es: "Con deuda de $500,000: intereses 50,000; utilidad antes de impuestos 150,000; impuestos 45,000; utilidad neta $105,000.", en: "With $500,000 debt: interest 50,000; pre-tax income 150,000; taxes 45,000; net income $105,000." },
          { es: "ROE con deuda = 105,000 ÷ 500,000 = 21%.", en: "ROE with debt = 105,000 ÷ 500,000 = 21%." },
        ],
        result: {
          es: "La deuda sube el ROE de 14% a 21%, porque los activos rinden 14% después de impuestos y la deuda cuesta 7% después de impuestos. Pero en un año malo el efecto se invierte.",
          en: "Debt raises ROE from 14% to 21%, because assets yield 14% after taxes and debt costs 7% after taxes. But in a bad year the effect reverses.",
        },
      },
      {
        title: { es: "Escudo fiscal de un crédito", en: "Tax shield of a loan" },
        problem: {
          es: "Una constructora tiene un crédito de $2,000,000 al 12% anual. Con una tasa de impuestos de 30%, ¿cuánto se ahorra en impuestos cada año y cuál es el costo neto de los intereses?",
          en: "A construction company has a $2,000,000 loan at 12% a year. With a 30% tax rate, how much does it save in taxes each year and what is the net interest cost?",
        },
        steps: [
          { es: "Intereses anuales: 2,000,000 × 0.12 = $240,000.", en: "Annual interest: 2,000,000 × 0.12 = $240,000." },
          { es: "Escudo fiscal: 240,000 × 0.30 = $72,000.", en: "Tax shield: 240,000 × 0.30 = $72,000." },
          { es: "Costo neto: 240,000 − 72,000 = $168,000 (equivale a 8.4% sobre el crédito).", en: "Net cost: 240,000 − 72,000 = $168,000 (equivalent to 8.4% on the loan)." },
        ],
        result: {
          es: "Ahorra $72,000 al año en impuestos; el crédito le cuesta en realidad $168,000, siempre que los intereses sean deducibles en su caso.",
          en: "It saves $72,000 a year in taxes; the loan really costs $168,000, provided the interest is deductible in its case.",
        },
      },
    ],
    keyPoints: [
      { es: "La estructura de capital es la mezcla de deuda y capital propio.", en: "Capital structure is the mix of debt and equity." },
      { es: "La deuda obliga a pagar; el capital comparte ganancias y control.", en: "Debt requires payment; equity shares profits and control." },
      { es: "El apalancamiento amplifica el ROE hacia arriba y hacia abajo.", en: "Leverage amplifies ROE both up and down." },
      { es: "El escudo fiscal es intereses × tasa de impuestos.", en: "The tax shield is interest × tax rate." },
      { es: "Trade-off: más deuda da más escudo fiscal, pero más riesgo de dificultades financieras.", en: "Trade-off: more debt gives more tax shield, but more risk of financial distress." },
      { es: "Pecking order: fondos internos, luego deuda, al final acciones.", en: "Pecking order: internal funds, then debt, lastly shares." },
    ],
    normativeNote: NOTE_CAPITAL,
    exerciseIds: ['FIN-12-E1', 'FIN-12-E2', 'FIN-12-E3', 'FIN-12-E4', 'FIN-12-E5', 'FIN-12-E6'],
  },
]

export const exercises: Exercise[] = [
  // ═════════════════════════ FIN-07 ═════════════════════════
  {
    id: 'FIN-07-E1',
    level: 4,
    module: 'FIN-07',
    kind: 'mcq',
    flavor: 'concept',
    prompt: {
      es: "Al armar el presupuesto maestro de una empresa, ¿con cuál presupuesto se debe empezar?",
      en: "When building a company's master budget, which budget should you start with?",
    },
    options: [
      { id: 'FIN-07-E1-a', text: { es: "El presupuesto de efectivo", en: "The cash budget" } },
      { id: 'FIN-07-E1-b', text: { es: "El presupuesto de ventas", en: "The sales budget" } },
      { id: 'FIN-07-E1-c', text: { es: "El estado de resultados proforma", en: "The pro forma income statement" } },
      { id: 'FIN-07-E1-d', text: { es: "El presupuesto de gastos de administración", en: "The administrative expense budget" } },
    ],
    correctOptionId: 'FIN-07-E1-b',
    explanation: {
      es: "Las ventas esperadas determinan cuánto producir, comprar, contratar y cobrar; por eso todo empieza ahí. El presupuesto de efectivo y los estados proforma se arman al final, con los datos de los operativos. Error común: empezar por el efectivo, que depende de todo lo demás.",
      en: "Expected sales determine how much to produce, buy, hire and collect; that is why everything starts there. The cash budget and pro forma statements are built at the end, using data from the operating budgets. Common mistake: starting with cash, which depends on everything else.",
    },
    difficulty: 1,
    points: 10,
    competency: 'financial-planning',
  },
  {
    id: 'FIN-07-E2',
    level: 4,
    module: 'FIN-07',
    kind: 'classify',
    flavor: 'concept',
    prompt: {
      es: "Clasifica cada presupuesto según el bloque del presupuesto maestro al que pertenece.",
      en: "Classify each budget according to the master budget block it belongs to.",
    },
    categories: [
      { id: 'FIN-07-E2-c1', label: { es: "Presupuesto operativo", en: "Operating budget" } },
      { id: 'FIN-07-E2-c2', label: { es: "Presupuesto financiero", en: "Financial budget" } },
    ],
    items: [
      { id: 'FIN-07-E2-i1', label: { es: "Presupuesto de producción en unidades", en: "Production budget in units" }, correctCategoryId: 'FIN-07-E2-c1' },
      { id: 'FIN-07-E2-i2', label: { es: "Presupuesto de efectivo mensual", en: "Monthly cash budget" }, correctCategoryId: 'FIN-07-E2-c2' },
      { id: 'FIN-07-E2-i3', label: { es: "Presupuesto de compras de materia prima", en: "Raw material purchases budget" }, correctCategoryId: 'FIN-07-E2-c1' },
      { id: 'FIN-07-E2-i4', label: { es: "Balance general proforma al cierre del año", en: "Pro forma balance sheet at year end" }, correctCategoryId: 'FIN-07-E2-c2' },
      { id: 'FIN-07-E2-i5', label: { es: "Presupuesto de gastos de venta", en: "Selling expense budget" }, correctCategoryId: 'FIN-07-E2-c1' },
      { id: 'FIN-07-E2-i6', label: { es: "Presupuesto de inversiones en maquinaria (de capital)", en: "Machinery (capital expenditure) budget" }, correctCategoryId: 'FIN-07-E2-c2' },
    ],
    explanation: {
      es: "Operativo: lo que pasa en la operación diaria (producción, compras, gastos de venta). Financiero: el efecto en el dinero y en los estados (efectivo, inversiones de capital, balance proforma). Error común: poner las inversiones en maquinaria en el operativo; son decisiones de inversión de largo plazo que se presupuestan en el bloque financiero.",
      en: "Operating: what happens in daily operations (production, purchases, selling expenses). Financial: the effect on money and on the statements (cash, capital expenditures, pro forma balance sheet). Common mistake: placing machinery investments in the operating block; they are long-term investment decisions budgeted in the financial block.",
    },
    difficulty: 2,
    points: 15,
    competency: 'financial-planning',
  },
  {
    id: 'FIN-07-E3',
    level: 4,
    module: 'FIN-07',
    kind: 'numeric',
    flavor: 'case',
    context: {
      es: "Distribuidora La Huasteca vendió $200,000 en mayo y espera vender $240,000 en junio. Cobra 40% de contado en el mes de la venta y el 60% restante al mes siguiente.",
      en: "Distribuidora La Huasteca sold $200,000 in May and expects to sell $240,000 in June. It collects 40% in cash in the month of the sale and the remaining 60% the following month.",
    },
    prompt: {
      es: "¿Cuánto cobrará Distribuidora La Huasteca en junio? Responde en pesos.",
      en: "How much will Distribuidora La Huasteca collect in June? Answer in pesos.",
    },
    answer: 216000,
    unit: 'MXN',
    decimals: 0,
    tolerance: { abs: 0.5 },
    explanation: {
      es: "Junio cobra el 40% de sus propias ventas (0.40 × 240,000 = 96,000) más el 60% de las ventas de mayo (0.60 × 200,000 = 120,000): $216,000. Error común: responder $240,000, confundiendo vender con cobrar.",
      en: "June collects 40% of its own sales (0.40 × 240,000 = 96,000) plus 60% of May's sales (0.60 × 200,000 = 120,000): $216,000. Common mistake: answering $240,000, confusing selling with collecting.",
    },
    difficulty: 2,
    points: 15,
    competency: 'financial-planning',
  },
  {
    id: 'FIN-07-E4',
    level: 4,
    module: 'FIN-07',
    kind: 'fields',
    flavor: 'case',
    context: {
      es: "Taller de Muebles Robles empieza julio con $30,000 en bancos. Espera cobrar $180,000 y pagar $195,000 en el mes. Su política es mantener un saldo mínimo de $25,000.",
      en: "Taller de Muebles Robles starts July with $30,000 in the bank. It expects to collect $180,000 and pay $195,000 during the month. Its policy is to keep a minimum balance of $25,000.",
    },
    prompt: {
      es: "Calcula el saldo de julio antes de financiamiento y el préstamo que necesita el taller Robles para respetar su saldo mínimo, en pesos.",
      en: "Compute Robles's July balance before financing and the loan the shop needs to respect its minimum balance, in pesos.",
    },
    fields: [
      { id: 'f1', label: { es: "Saldo final antes de financiamiento", en: "Ending balance before financing" }, answer: 15000, unit: 'MXN', tolerance: { abs: 0.5 } },
      { id: 'f2', label: { es: "Financiamiento necesario", en: "Financing needed" }, answer: 10000, unit: 'MXN', tolerance: { abs: 0.5 } },
    ],
    explanation: {
      es: "Saldo final: 30,000 + 180,000 − 195,000 = $15,000. Como el mínimo es $25,000, faltan 25,000 − 15,000 = $10,000. Error común: pedir $15,000 o $25,000, sin considerar el dinero que ya hay en bancos.",
      en: "Ending balance: 30,000 + 180,000 − 195,000 = $15,000. Since the minimum is $25,000, it is short 25,000 − 15,000 = $10,000. Common mistake: borrowing $15,000 or $25,000, ignoring the money already in the bank.",
    },
    difficulty: 2,
    points: 15,
    competency: 'financial-planning',
  },
  {
    id: 'FIN-07-E5',
    level: 4,
    module: 'FIN-07',
    kind: 'mcq',
    flavor: 'interpret',
    context: {
      es: "Un hotel en Oaxaca presupuestó $85,000 de gasto en lavandería para el trimestre. El gasto real fue $78,000.",
      en: "A hotel in Oaxaca budgeted $85,000 of laundry expense for the quarter. The actual expense was $78,000.",
    },
    prompt: {
      es: "¿Cómo se describe la variación del gasto de lavandería del hotel?",
      en: "How is the hotel's laundry expense variance described?",
    },
    options: [
      { id: 'FIN-07-E5-a', text: { es: "Desfavorable de $7,000, porque lo real fue distinto al plan", en: "Unfavorable by $7,000, because actual differed from plan" } },
      { id: 'FIN-07-E5-b', text: { es: "Favorable de $7,000, porque se gastó menos de lo presupuestado", en: "Favorable by $7,000, because less was spent than budgeted" } },
      { id: 'FIN-07-E5-c', text: { es: "Favorable de $78,000", en: "Favorable by $78,000" } },
      { id: 'FIN-07-E5-d', text: { es: "No hay variación, porque el gasto sigue siendo positivo", en: "There is no variance, because the expense is still positive" } },
    ],
    correctOptionId: 'FIN-07-E5-b',
    explanation: {
      es: "La variación es 78,000 − 85,000 = −$7,000 en gasto: gastar menos sube la utilidad, así que es favorable. Aun así conviene revisar la causa (¿hubo menos huéspedes o bajó la calidad?). Error común: llamar desfavorable a toda diferencia contra el plan.",
      en: "The variance is 78,000 − 85,000 = −$7,000 in expense: spending less raises profit, so it is favorable. Still, it is worth checking the cause (were there fewer guests or did quality drop?). Common mistake: calling every difference from plan unfavorable.",
    },
    difficulty: 1,
    points: 10,
    competency: 'financial-planning',
  },
  {
    id: 'FIN-07-E6',
    level: 4,
    module: 'FIN-07',
    kind: 'numeric',
    flavor: 'case',
    context: {
      es: "Una fábrica de mochilas espera vender 12,000 piezas el próximo semestre. Tiene 1,500 piezas terminadas en bodega y quiere cerrar el semestre con 2,000.",
      en: "A backpack factory expects to sell 12,000 units next semester. It has 1,500 finished units in the warehouse and wants to close the semester with 2,000.",
    },
    prompt: {
      es: "¿Cuántas mochilas debe producir la fábrica en el semestre?",
      en: "How many backpacks must the factory produce in the semester?",
    },
    answer: 12500,
    unit: 'units',
    decimals: 0,
    tolerance: { abs: 0.5 },
    explanation: {
      es: "Producción = ventas + inventario final deseado − inventario inicial = 12,000 + 2,000 − 1,500 = 12,500 piezas. Error común: sumar el inventario inicial en lugar de restarlo (15,500); esas piezas ya están hechas.",
      en: "Production = sales + desired ending inventory − beginning inventory = 12,000 + 2,000 − 1,500 = 12,500 units. Common mistake: adding the beginning inventory instead of subtracting it (15,500); those units are already made.",
    },
    difficulty: 1,
    points: 10,
    competency: 'financial-planning',
  },

  // ═════════════════════════ FIN-08 ═════════════════════════
  {
    id: 'FIN-08-E1',
    level: 4,
    module: 'FIN-08',
    kind: 'mcq',
    flavor: 'case',
    context: {
      es: "Una cadena de gimnasios pagó hace seis meses $40,000 a una consultora para estudiar si abre una sucursal en Querétaro. Ahora debe decidir si la abre.",
      en: "A gym chain paid a consultancy $40,000 six months ago to study whether to open a branch in Querétaro. Now it must decide whether to open it.",
    },
    prompt: {
      es: "¿Cómo debe tratarse el pago de $40,000 del estudio del gimnasio al evaluar la nueva sucursal?",
      en: "How should the gym's $40,000 study payment be treated when evaluating the new branch?",
    },
    options: [
      { id: 'FIN-08-E1-a', text: { es: "Como parte de la inversión inicial del proyecto", en: "As part of the project's initial investment" } },
      { id: 'FIN-08-E1-b', text: { es: "Como un flujo negativo del primer año", en: "As a negative flow in the first year" } },
      { id: 'FIN-08-E1-c', text: { es: "No se incluye: es un costo hundido", en: "It is not included: it is a sunk cost" } },
      { id: 'FIN-08-E1-d', text: { es: "Como un costo de oportunidad", en: "As an opportunity cost" } },
    ],
    correctOptionId: 'FIN-08-E1-c',
    explanation: {
      es: "El estudio ya se pagó y no se recupera, se abra o no la sucursal: es un costo hundido y no es incremental. Error común: querer \"recuperarlo\" sumándolo a la inversión, lo que puede hacer rechazar un proyecto bueno.",
      en: "The study is already paid and is not recovered whether or not the branch opens: it is a sunk cost and is not incremental. Common mistake: trying to \"recover\" it by adding it to the investment, which can lead to rejecting a good project.",
    },
    difficulty: 1,
    points: 10,
    competency: 'capital-budgeting',
  },
  {
    id: 'FIN-08-E2',
    level: 4,
    module: 'FIN-08',
    kind: 'classify',
    flavor: 'case',
    context: {
      es: "Una fábrica de galletas evalúa una nueva línea de galletas integrales.",
      en: "A cookie factory is evaluating a new whole-wheat cookie line.",
    },
    prompt: {
      es: "Clasifica cada concepto de la línea de galletas integrales como flujo relevante o no relevante para la decisión.",
      en: "Classify each item of the whole-wheat cookie line as a relevant or non-relevant flow for the decision.",
    },
    categories: [
      { id: 'FIN-08-E2-c1', label: { es: "Relevante (se incluye)", en: "Relevant (included)" } },
      { id: 'FIN-08-E2-c2', label: { es: "No relevante (se excluye)", en: "Not relevant (excluded)" } },
    ],
    items: [
      { id: 'FIN-08-E2-i1', label: { es: "Compra de un horno nuevo para la línea", en: "Purchase of a new oven for the line" }, correctCategoryId: 'FIN-08-E2-c1' },
      { id: 'FIN-08-E2-i2', label: { es: "Renta que se deja de cobrar por usar una nave propia que hoy se arrienda", en: "Rent given up by using an owned building that is currently leased out" }, correctCategoryId: 'FIN-08-E2-c1' },
      { id: 'FIN-08-E2-i3', label: { es: "Investigación de mercado pagada el año pasado", en: "Market research paid last year" }, correctCategoryId: 'FIN-08-E2-c2' },
      { id: 'FIN-08-E2-i4', label: { es: "Inventario adicional de harina y empaques", en: "Extra inventory of flour and packaging" }, correctCategoryId: 'FIN-08-E2-c1' },
      { id: 'FIN-08-E2-i5', label: { es: "Sueldo del director general, que se paga igual con o sin la línea", en: "The CEO's salary, paid the same with or without the line" }, correctCategoryId: 'FIN-08-E2-c2' },
      { id: 'FIN-08-E2-i6', label: { es: "Ventas que perderán las galletas tradicionales porque algunos clientes cambiarán a las integrales", en: "Sales the traditional cookies will lose because some customers will switch to whole-wheat" }, correctCategoryId: 'FIN-08-E2-c1' },
    ],
    explanation: {
      es: "Relevante es lo que cambia por hacer el proyecto: el horno, la renta perdida (costo de oportunidad), el capital de trabajo extra y la canibalización de otras ventas. La investigación pasada es costo hundido y el sueldo del director no cambia. Error común: olvidar la canibalización, que hace ver el proyecto mejor de lo que es.",
      en: "Relevant is whatever changes because of the project: the oven, the forgone rent (opportunity cost), the extra working capital and the cannibalization of other sales. Past research is a sunk cost and the CEO's salary does not change. Common mistake: forgetting cannibalization, which makes the project look better than it is.",
    },
    difficulty: 2,
    points: 15,
    competency: 'capital-budgeting',
  },
  {
    id: 'FIN-08-E3',
    level: 4,
    module: 'FIN-08',
    kind: 'numeric',
    flavor: 'case',
    context: {
      es: "Una clínica veterinaria invierte $250,000 en un equipo de ultrasonido. Espera flujos de $80,000, $90,000, $100,000 y $110,000 en los años 1 a 4.",
      en: "A veterinary clinic invests $250,000 in ultrasound equipment. It expects flows of $80,000, $90,000, $100,000 and $110,000 in years 1 to 4.",
    },
    prompt: {
      es: "¿Cuál es el periodo de recuperación del equipo de ultrasonido, en años con un decimal?",
      en: "What is the ultrasound equipment's payback period, in years with one decimal?",
    },
    answer: 2.8,
    unit: 'years',
    decimals: 1,
    tolerance: { abs: 0.05 },
    explanation: {
      es: "Acumulado: 80,000 al año 1 y 170,000 al año 2. Faltan 250,000 − 170,000 = 80,000, que se cubren con 80,000 ÷ 100,000 = 0.8 del año 3. Recuperación: 2.8 años. Error común: dividir la inversión entre el flujo promedio (250,000 ÷ 95,000 = 2.63), que solo sirve si los flujos son iguales.",
      en: "Cumulative: 80,000 at year 1 and 170,000 at year 2. Still 250,000 − 170,000 = 80,000 to go, covered by 80,000 ÷ 100,000 = 0.8 of year 3. Payback: 2.8 years. Common mistake: dividing the investment by the average flow (250,000 ÷ 95,000 = 2.63), which only works when flows are equal.",
    },
    difficulty: 2,
    points: 15,
    competency: 'capital-budgeting',
  },
  {
    id: 'FIN-08-E4',
    level: 4,
    module: 'FIN-08',
    kind: 'fields',
    flavor: 'case',
    context: {
      es: "Un proyecto de una empresa de paquetería genera ventas anuales de $800,000, costos en efectivo de $450,000 y depreciación de $100,000. La tasa de impuestos es 30% (ilustrativa).",
      en: "A parcel company project generates annual sales of $800,000, cash costs of $450,000 and depreciation of $100,000. The tax rate is 30% (illustrative).",
    },
    prompt: {
      es: "Calcula para el proyecto de paquetería la utilidad de operación, los impuestos y el flujo de efectivo operativo anual, en pesos.",
      en: "For the parcel project, compute the operating profit, the taxes and the annual operating cash flow, in pesos.",
    },
    fields: [
      { id: 'f1', label: { es: "Utilidad de operación", en: "Operating profit" }, answer: 250000, unit: 'MXN', tolerance: { abs: 0.5 } },
      { id: 'f2', label: { es: "Impuestos", en: "Taxes" }, answer: 75000, unit: 'MXN', tolerance: { abs: 0.5 } },
      { id: 'f3', label: { es: "Flujo de efectivo operativo", en: "Operating cash flow" }, answer: 275000, unit: 'MXN', tolerance: { abs: 0.5 } },
    ],
    explanation: {
      es: "Utilidad de operación: 800,000 − 450,000 − 100,000 = $250,000. Impuestos: 250,000 × 0.30 = $75,000. FEO: 250,000 − 75,000 + 100,000 = $275,000. Error común: no sumar de vuelta la depreciación (respondiendo $175,000), aunque no es salida de dinero.",
      en: "Operating profit: 800,000 − 450,000 − 100,000 = $250,000. Taxes: 250,000 × 0.30 = $75,000. OCF: 250,000 − 75,000 + 100,000 = $275,000. Common mistake: not adding depreciation back (answering $175,000), even though it is not a cash outflow.",
    },
    difficulty: 2,
    points: 15,
    competency: 'capital-budgeting',
  },
  {
    id: 'FIN-08-E5',
    level: 4,
    module: 'FIN-08',
    kind: 'truefalse',
    flavor: 'concept',
    prompt: {
      es: "Si dos proyectos de inversión son mutuamente excluyentes, la empresa puede aceptar ambos siempre que los dos sean rentables.",
      en: "If two capital projects are mutually exclusive, the company can accept both as long as both are profitable.",
    },
    answer: false,
    explanation: {
      es: "Falso. Mutuamente excluyentes significa que elegir uno descarta al otro (por ejemplo, dos usos para el mismo terreno). Aunque ambos sean rentables, se elige solo el mejor. Error común: confundirlos con proyectos independientes, donde sí se aceptan todos los rentables.",
      en: "False. Mutually exclusive means choosing one rules out the other (for example, two uses for the same plot of land). Even if both are profitable, only the best one is chosen. Common mistake: confusing them with independent projects, where all profitable ones are accepted.",
    },
    difficulty: 1,
    points: 10,
    competency: 'capital-budgeting',
  },
  {
    id: 'FIN-08-E6',
    level: 4,
    module: 'FIN-08',
    kind: 'multi',
    flavor: 'concept',
    prompt: {
      es: "¿Cuáles son limitaciones del periodo de recuperación simple? Selecciona todas las que apliquen.",
      en: "Which are limitations of the simple payback period? Select all that apply.",
    },
    options: [
      { id: 'FIN-08-E6-a', text: { es: "Ignora los flujos que llegan después de recuperar la inversión", en: "It ignores flows that arrive after the investment is recovered" } },
      { id: 'FIN-08-E6-b', text: { es: "No considera el valor del dinero en el tiempo", en: "It does not consider the time value of money" } },
      { id: 'FIN-08-E6-c', text: { es: "Es muy difícil de calcular y explicar", en: "It is very hard to compute and explain" } },
      { id: 'FIN-08-E6-d', text: { es: "El plazo máximo aceptable se fija de forma arbitraria", en: "The maximum acceptable period is set arbitrarily" } },
      { id: 'FIN-08-E6-e', text: { es: "No da ninguna información sobre liquidez", en: "It gives no information about liquidity" } },
    ],
    correctOptionIds: ['FIN-08-E6-a', 'FIN-08-E6-b', 'FIN-08-E6-d'],
    explanation: {
      es: "El payback ignora lo que pasa después de recuperar, trata igual un peso de hoy que uno futuro y el límite (\"menos de 3 años\") es arbitrario. En cambio, es fácil de calcular y justamente informa sobre liquidez. Error común: descartarlo por completo; sirve como filtro complementario al VPN.",
      en: "Payback ignores what happens after recovery, treats a peso today the same as a future peso, and the cutoff (\"under 3 years\") is arbitrary. On the other hand, it is easy to compute and precisely informs about liquidity. Common mistake: discarding it entirely; it works as a screen complementing NPV.",
    },
    difficulty: 2,
    points: 15,
    competency: 'capital-budgeting',
  },

  // ═════════════════════════ FIN-09 ═════════════════════════
  {
    id: 'FIN-09-E1',
    level: 4,
    module: 'FIN-09',
    kind: 'mcq',
    flavor: 'interpret',
    prompt: {
      es: "Un proyecto evaluado con un costo de capital de 12% tiene un VPN exactamente igual a cero. ¿Qué significa?",
      en: "A project evaluated at a 12% cost of capital has an NPV of exactly zero. What does it mean?",
    },
    options: [
      { id: 'FIN-09-E1-a', text: { es: "Que el proyecto no genera ningún flujo de efectivo", en: "That the project generates no cash flow" } },
      { id: 'FIN-09-E1-b', text: { es: "Que el proyecto pierde dinero y debe rechazarse siempre", en: "That the project loses money and must always be rejected" } },
      { id: 'FIN-09-E1-c', text: { es: "Que el proyecto rinde justo el 12% exigido, sin crear valor adicional", en: "That the project earns exactly the required 12%, without creating extra value" } },
      { id: 'FIN-09-E1-d', text: { es: "Que el proyecto rinde 0% anual", en: "That the project earns 0% a year" } },
    ],
    correctOptionId: 'FIN-09-E1-c',
    explanation: {
      es: "VPN = 0 significa que los flujos, descontados al 12%, igualan justo la inversión: el proyecto paga exactamente lo exigido y no deja excedente. Error común: pensar que rinde 0%; en realidad rinde 12%, que es mucho más que cero.",
      en: "NPV = 0 means the flows, discounted at 12%, exactly match the investment: the project pays exactly what is required and leaves no surplus. Common mistake: thinking it earns 0%; it actually earns 12%, far more than zero.",
    },
    difficulty: 1,
    points: 10,
    competency: 'npv',
  },
  {
    id: 'FIN-09-E2',
    level: 4,
    module: 'FIN-09',
    kind: 'numeric',
    flavor: 'case',
    context: {
      es: "Una escuela de idiomas invierte $60,000 en tabletas para sus alumnos. Las tabletas generarán flujos de $35,000 al final de cada uno de los próximos 2 años. La tasa exigida es 10%.",
      en: "A language school invests $60,000 in tablets for its students. The tablets will generate flows of $35,000 at the end of each of the next 2 years. The required rate is 10%.",
    },
    prompt: {
      es: "¿Cuál es el VPN de las tabletas de la escuela de idiomas? Responde en pesos con dos decimales.",
      en: "What is the NPV of the language school's tablets? Answer in pesos with two decimals.",
    },
    answer: 743.8,
    unit: 'MXN',
    decimals: 2,
    tolerance: { abs: 1 },
    explanation: {
      es: "Año 1: 35,000 ÷ 1.10 = 31,818.18. Año 2: 35,000 ÷ 1.21 = 28,925.62. Suma: 60,743.80. VPN = 60,743.80 − 60,000 = $743.80: positivo, se acepta por poco. Error común: sumar 35,000 + 35,000 − 60,000 = $10,000 sin descontar.",
      en: "Year 1: 35,000 ÷ 1.10 = 31,818.18. Year 2: 35,000 ÷ 1.21 = 28,925.62. Sum: 60,743.80. NPV = 60,743.80 − 60,000 = $743.80: positive, accepted by a small margin. Common mistake: adding 35,000 + 35,000 − 60,000 = $10,000 without discounting.",
    },
    difficulty: 2,
    points: 15,
    competency: 'npv',
  },
  {
    id: 'FIN-09-E3',
    level: 4,
    module: 'FIN-09',
    kind: 'fields',
    flavor: 'case',
    context: {
      es: "Una empresa agrícola de Sinaloa evalúa un sistema de riego que cuesta $200,000. Generará ahorros de $60,000, $80,000 y $100,000 en los años 1, 2 y 3. Su costo de capital es 12%.",
      en: "A farming company in Sinaloa is evaluating an irrigation system that costs $200,000. It will generate savings of $60,000, $80,000 and $100,000 in years 1, 2 and 3. Its cost of capital is 12%.",
    },
    prompt: {
      es: "Calcula la suma de los valores presentes de los ahorros del sistema de riego y su VPN, en pesos con dos decimales.",
      en: "Compute the sum of the present values of the irrigation system's savings and its NPV, in pesos with two decimals.",
    },
    fields: [
      { id: 'f1', label: { es: "Suma de valores presentes", en: "Sum of present values" }, answer: 188524.96, unit: 'MXN', tolerance: { abs: 1 } },
      { id: 'f2', label: { es: "VPN", en: "NPV" }, answer: -11475.04, unit: 'MXN', tolerance: { abs: 1 } },
    ],
    explanation: {
      es: "VP: 60,000 ÷ 1.12 = 53,571.43; 80,000 ÷ 1.2544 = 63,775.51; 100,000 ÷ 1.404928 = 71,178.02. Suma: $188,524.96. VPN = 188,524.96 − 200,000 = −$11,475.04: se rechaza, aunque sin descontar los ahorros suman $240,000. Error común: ver que los ahorros superan la inversión y aceptar sin descontar.",
      en: "PV: 60,000 ÷ 1.12 = 53,571.43; 80,000 ÷ 1.2544 = 63,775.51; 100,000 ÷ 1.404928 = 71,178.02. Sum: $188,524.96. NPV = 188,524.96 − 200,000 = −$11,475.04: reject, even though undiscounted savings add up to $240,000. Common mistake: seeing that savings exceed the investment and accepting without discounting.",
    },
    difficulty: 2,
    points: 20,
    competency: 'npv',
  },
  {
    id: 'FIN-09-E4',
    level: 4,
    module: 'FIN-09',
    kind: 'truefalse',
    flavor: 'concept',
    prompt: {
      es: "En un proyecto con una inversión inicial seguida solo de flujos positivos, si la tasa de descuento sube, el VPN disminuye.",
      en: "In a project with an initial investment followed only by positive flows, if the discount rate rises, NPV decreases.",
    },
    answer: true,
    explanation: {
      es: "Verdadero. Al subir la tasa, cada flujo futuro se divide entre un número mayor y vale menos hoy, mientras la inversión inicial no cambia. Por eso el perfil del VPN baja conforme sube la tasa. Error común: creer que una tasa mayor \"rinde más\" y sube el VPN.",
      en: "True. When the rate rises, each future flow is divided by a larger number and is worth less today, while the initial investment does not change. That is why the NPV profile slopes down as the rate rises. Common mistake: believing a higher rate \"yields more\" and raises NPV.",
    },
    difficulty: 1,
    points: 10,
    competency: 'npv',
  },
  {
    id: 'FIN-09-E5',
    level: 4,
    module: 'FIN-09',
    kind: 'mcq',
    flavor: 'case',
    context: {
      es: "Una cadena de cafeterías tiene un local disponible y tres opciones para usarlo, evaluadas con su costo de capital: Opción A, VPN $45,000; Opción B, VPN $62,000; Opción C, VPN −$5,000.",
      en: "A coffee chain has one available location and three options to use it, evaluated at its cost of capital: Option A, NPV $45,000; Option B, NPV $62,000; Option C, NPV −$5,000.",
    },
    prompt: {
      es: "Si solo puede usar el local para una opción, ¿cuál debe elegir la cadena de cafeterías?",
      en: "If it can use the location for only one option, which should the coffee chain choose?",
    },
    options: [
      { id: 'FIN-09-E5-a', text: { es: "La opción A", en: "Option A" } },
      { id: 'FIN-09-E5-b', text: { es: "La opción B", en: "Option B" } },
      { id: 'FIN-09-E5-c', text: { es: "Las opciones A y B", en: "Options A and B" } },
      { id: 'FIN-09-E5-d', text: { es: "Ninguna, porque una tiene VPN negativo", en: "None, because one has a negative NPV" } },
    ],
    correctOptionId: 'FIN-09-E5-b',
    explanation: {
      es: "Son mutuamente excluyentes (un solo local), así que se elige la de mayor VPN: B, con $62,000. A también crea valor, pero menos; C destruye valor. Error común: aceptar A y B como si fueran independientes.",
      en: "They are mutually exclusive (a single location), so choose the highest NPV: B, at $62,000. A also creates value, but less; C destroys value. Common mistake: accepting A and B as if they were independent.",
    },
    difficulty: 1,
    points: 10,
    competency: 'npv',
  },
  {
    id: 'FIN-09-E6',
    level: 4,
    module: 'FIN-09',
    kind: 'formula',
    flavor: 'concept',
    prompt: {
      es: "Completa la fórmula del valor presente neto de un proyecto.",
      en: "Complete the formula for a project's net present value.",
    },
    template: '{{b1}} = −I₀ + Σ [ FEₜ ÷ (1 + {{b2}})^{{b3}} ]',
    blanks: [
      {
        id: 'b1',
        options: [
          { id: 'FIN-09-E6-b1-a', text: { es: "TIR", en: "IRR" } },
          { id: 'FIN-09-E6-b1-b', text: { es: "VPN", en: "NPV" } },
          { id: 'FIN-09-E6-b1-c', text: { es: "Periodo de recuperación", en: "Payback period" } },
        ],
        correctOptionId: 'FIN-09-E6-b1-b',
      },
      {
        id: 'b2',
        options: [
          { id: 'FIN-09-E6-b2-a', text: { es: "k (tasa de descuento)", en: "k (discount rate)" } },
          { id: 'FIN-09-E6-b2-b', text: { es: "t (tasa de impuestos)", en: "t (tax rate)" } },
          { id: 'FIN-09-E6-b2-c', text: { es: "g (crecimiento de ventas)", en: "g (sales growth)" } },
        ],
        correctOptionId: 'FIN-09-E6-b2-a',
      },
      {
        id: 'b3',
        options: [
          { id: 'FIN-09-E6-b3-a', text: { es: "2 (siempre al cuadrado)", en: "2 (always squared)" } },
          { id: 'FIN-09-E6-b3-b', text: { es: "t (año en que llega el flujo)", en: "t (year the flow arrives)" } },
          { id: 'FIN-09-E6-b3-c', text: { es: "1 (siempre)", en: "1 (always)" } },
        ],
        correctOptionId: 'FIN-09-E6-b3-b',
      },
    ],
    explanation: {
      es: "VPN = −I₀ + Σ FEₜ ÷ (1 + k)ᵗ: cada flujo se descuenta con la tasa exigida k, elevada al año t en que se recibe. Error común: usar el mismo exponente para todos los flujos, lo que trata igual un peso del año 1 que uno del año 5.",
      en: "NPV = −I₀ + Σ CFₜ ÷ (1 + k)ᵗ: each flow is discounted at the required rate k, raised to the year t in which it is received. Common mistake: using the same exponent for every flow, which treats a peso in year 1 the same as one in year 5.",
    },
    difficulty: 1,
    points: 10,
    competency: 'npv',
  },

  // ═════════════════════════ FIN-10 ═════════════════════════
  {
    id: 'FIN-10-E1',
    level: 4,
    module: 'FIN-10',
    kind: 'numeric',
    flavor: 'case',
    context: {
      es: "Un productor de aguacate invierte hoy $80,000 en fertilizante especial y espera recibir $90,000 extra en ventas dentro de un año. No hay más flujos.",
      en: "An avocado grower invests $80,000 today in special fertilizer and expects to receive $90,000 extra in sales one year from now. There are no other flows.",
    },
    prompt: {
      es: "¿Cuál es la TIR de la inversión en fertilizante del productor de aguacate, en porcentaje?",
      en: "What is the IRR of the avocado grower's fertilizer investment, as a percentage?",
    },
    answer: 12.5,
    unit: '%',
    decimals: 2,
    tolerance: { abs: 0.01 },
    explanation: {
      es: "Con un solo flujo a un año: TIR = 90,000 ÷ 80,000 − 1 = 0.125 = 12.5%. Comprobación: 90,000 ÷ 1.125 = 80,000, VPN = 0. Error común: dividir la ganancia entre lo recibido (10,000 ÷ 90,000 = 11.11%); el rendimiento se mide sobre lo invertido.",
      en: "With a single one-year flow: IRR = 90,000 ÷ 80,000 − 1 = 0.125 = 12.5%. Check: 90,000 ÷ 1.125 = 80,000, NPV = 0. Common mistake: dividing the gain by the amount received (10,000 ÷ 90,000 = 11.11%); return is measured on what was invested.",
    },
    difficulty: 1,
    points: 10,
    competency: 'irr',
  },
  {
    id: 'FIN-10-E2',
    level: 4,
    module: 'FIN-10',
    kind: 'numeric',
    flavor: 'case',
    context: {
      es: "Un desarrollador compra hoy un terreno en $100,000. No recibe nada el primer año y espera venderlo en $121,000 al final del segundo año.",
      en: "A developer buys a plot of land today for $100,000. It receives nothing in the first year and expects to sell it for $121,000 at the end of the second year.",
    },
    prompt: {
      es: "¿Cuál es la TIR anual del terreno del desarrollador, en porcentaje?",
      en: "What is the annual IRR of the developer's land, as a percentage?",
    },
    answer: 10,
    unit: '%',
    decimals: 2,
    tolerance: { abs: 0.01 },
    explanation: {
      es: "TIR = (121,000 ÷ 100,000)^(1/2) − 1 = √1.21 − 1 = 1.10 − 1 = 10% anual. Error común: responder 21%, que es el rendimiento de los dos años juntos, no el anual.",
      en: "IRR = (121,000 ÷ 100,000)^(1/2) − 1 = √1.21 − 1 = 1.10 − 1 = 10% a year. Common mistake: answering 21%, which is the return over both years combined, not the annual one.",
    },
    difficulty: 2,
    points: 15,
    competency: 'irr',
  },
  {
    id: 'FIN-10-E3',
    level: 4,
    module: 'FIN-10',
    kind: 'mcq',
    flavor: 'case',
    context: {
      es: "Una empresa de autotransporte evalúa renovar 5 tractocamiones. El proyecto tiene una TIR de 14% y flujos convencionales. El costo de capital de la empresa es 11%.",
      en: "A trucking company is evaluating renewing 5 tractor-trailers. The project has a 14% IRR and conventional flows. The company's cost of capital is 11%.",
    },
    prompt: {
      es: "¿Qué decisión indica la regla de la TIR para la renovación de los tractocamiones?",
      en: "What decision does the IRR rule indicate for the tractor-trailer renewal?",
    },
    options: [
      { id: 'FIN-10-E3-a', text: { es: "Aceptar, porque la TIR supera el costo de capital", en: "Accept, because IRR exceeds the cost of capital" } },
      { id: 'FIN-10-E3-b', text: { es: "Rechazar, porque la TIR es mayor que el costo de capital", en: "Reject, because IRR is higher than the cost of capital" } },
      { id: 'FIN-10-E3-c', text: { es: "Rechazar, porque una TIR menor a 15% no es atractiva", en: "Reject, because an IRR below 15% is not attractive" } },
      { id: 'FIN-10-E3-d', text: { es: "No se puede decidir sin conocer el periodo de recuperación", en: "It cannot be decided without knowing the payback period" } },
    ],
    correctOptionId: 'FIN-10-E3-a',
    explanation: {
      es: "La regla es aceptar si TIR > costo de capital: 14% > 11%, así que el proyecto rinde más de lo que cuesta financiarlo y su VPN al 11% es positivo. Error común: fijar un umbral arbitrario (\"al menos 15%\") en lugar de compararlo con el costo de capital.",
      en: "The rule is to accept if IRR > cost of capital: 14% > 11%, so the project earns more than it costs to finance and its NPV at 11% is positive. Common mistake: setting an arbitrary threshold (\"at least 15%\") instead of comparing with the cost of capital.",
    },
    difficulty: 1,
    points: 10,
    competency: 'irr',
  },
  {
    id: 'FIN-10-E4',
    level: 4,
    module: 'FIN-10',
    kind: 'truefalse',
    flavor: 'concept',
    prompt: {
      es: "Un proyecto minero con flujos negativo, positivos y al final un gran flujo negativo por el cierre de la mina puede tener más de una TIR.",
      en: "A mining project with a negative flow, then positive flows and finally a large negative flow for closing the mine can have more than one IRR.",
    },
    answer: true,
    explanation: {
      es: "Verdadero. Cuando los signos de los flujos cambian más de una vez (−, +, −), la ecuación VPN = 0 puede tener varias soluciones, o ninguna. En esos casos se decide con el VPN. Error común: confiar en la primera TIR que da la hoja de cálculo sin revisar los signos.",
      en: "True. When the signs of the flows change more than once (−, +, −), the equation NPV = 0 can have several solutions, or none. In those cases, decide with NPV. Common mistake: trusting the first IRR the spreadsheet returns without checking the signs.",
    },
    difficulty: 2,
    points: 15,
    competency: 'irr',
  },
  {
    id: 'FIN-10-E5',
    level: 4,
    module: 'FIN-10',
    kind: 'mcq',
    flavor: 'case',
    context: {
      es: "Una imprenta solo puede comprar una máquina. La máquina X cuesta $30,000, tiene TIR de 40% y VPN de $9,000. La máquina Y cuesta $300,000, tiene TIR de 22% y VPN de $48,000. El costo de capital es 13%.",
      en: "A print shop can only buy one machine. Machine X costs $30,000, has a 40% IRR and an NPV of $9,000. Machine Y costs $300,000, has a 22% IRR and an NPV of $48,000. The cost of capital is 13%.",
    },
    prompt: {
      es: "¿Qué máquina debe comprar la imprenta y por qué?",
      en: "Which machine should the print shop buy and why?",
    },
    options: [
      { id: 'FIN-10-E5-a', text: { es: "La X, porque su TIR es casi el doble", en: "X, because its IRR is almost double" } },
      { id: 'FIN-10-E5-b', text: { es: "La Y, porque agrega más valor en pesos de hoy (mayor VPN)", en: "Y, because it adds more value in today's pesos (higher NPV)" } },
      { id: 'FIN-10-E5-c', text: { es: "La X, porque es más barata", en: "X, because it is cheaper" } },
      { id: 'FIN-10-E5-d', text: { es: "Ninguna, porque TIR y VPN se contradicen", en: "Neither, because IRR and NPV contradict each other" } },
    ],
    correctOptionId: 'FIN-10-E5-b',
    explanation: {
      es: "Ambas superan el 13%, pero son mutuamente excluyentes. La TIR mide porcentaje y no considera el tamaño: Y crea $48,000 de valor contra $9,000 de X. Cuando TIR y VPN chocan en proyectos excluyentes, manda el VPN. Error común: elegir siempre la TIR más alta.",
      en: "Both exceed 13%, but they are mutually exclusive. IRR measures percentage and ignores size: Y creates $48,000 of value versus $9,000 for X. When IRR and NPV clash on mutually exclusive projects, NPV rules. Common mistake: always choosing the highest IRR.",
    },
    difficulty: 2,
    points: 15,
    competency: 'irr',
  },
  {
    id: 'FIN-10-E6',
    level: 4,
    module: 'FIN-10',
    kind: 'fields',
    flavor: 'case',
    context: {
      es: "Una panificadora invierte $80,000 en un horno que generará $50,000 al final de cada uno de los próximos 2 años.",
      en: "A bakery invests $80,000 in an oven that will generate $50,000 at the end of each of the next 2 years.",
    },
    prompt: {
      es: "Calcula el VPN del horno de la panificadora al 15% y al 20% (en pesos) y estima su TIR por interpolación lineal (en porcentaje con dos decimales).",
      en: "Compute the bakery oven's NPV at 15% and at 20% (in pesos) and estimate its IRR by linear interpolation (as a percentage with two decimals).",
    },
    fields: [
      { id: 'f1', label: { es: "VPN al 15%", en: "NPV at 15%" }, answer: 1285.44, unit: 'MXN', tolerance: { abs: 1 } },
      { id: 'f2', label: { es: "VPN al 20%", en: "NPV at 20%" }, answer: -3611.11, unit: 'MXN', tolerance: { abs: 1 } },
      { id: 'f3', label: { es: "TIR estimada (%)", en: "Estimated IRR (%)" }, answer: 16.31, unit: '%', tolerance: { abs: 0.02 } },
    ],
    explanation: {
      es: "Al 15%: 50,000 ÷ 1.15 + 50,000 ÷ 1.3225 − 80,000 = 43,478.26 + 37,807.18 − 80,000 = $1,285.44. Al 20%: 41,666.67 + 34,722.22 − 80,000 = −$3,611.11. Interpolación: 15% + 5% × 1,285.44 ÷ (1,285.44 + 3,611.11) = 15% + 5% × 0.2625 = 16.31% (la TIR exacta es 16.26%). Error común: escribir en el denominador VPN₁ + VPN₂ con sus signos (1,285.44 − 3,611.11), lo que da un número negativo y un resultado sin sentido; se usa la distancia total entre ambos VPN.",
      en: "At 15%: 50,000 ÷ 1.15 + 50,000 ÷ 1.3225 − 80,000 = 43,478.26 + 37,807.18 − 80,000 = $1,285.44. At 20%: 41,666.67 + 34,722.22 − 80,000 = −$3,611.11. Interpolation: 15% + 5% × 1,285.44 ÷ (1,285.44 + 3,611.11) = 15% + 5% × 0.2625 = 16.31% (the exact IRR is 16.26%). Common mistake: writing NPV₁ + NPV₂ with their signs in the denominator (1,285.44 − 3,611.11), which gives a negative number and a meaningless result; use the total distance between both NPVs.",
    },
    difficulty: 2,
    points: 20,
    competency: 'irr',
  },

  // ═════════════════════════ FIN-11 ═════════════════════════
  {
    id: 'FIN-11-E1',
    level: 4,
    module: 'FIN-11',
    kind: 'numeric',
    flavor: 'case',
    context: {
      es: "Una cadena de ferreterías paga 11% anual por su crédito bancario. Su tasa de impuestos es 30% (ilustrativa) y los intereses son deducibles.",
      en: "A hardware store chain pays 11% a year on its bank loan. Its tax rate is 30% (illustrative) and the interest is deductible.",
    },
    prompt: {
      es: "¿Cuál es el costo de la deuda después de impuestos de la cadena de ferreterías, en porcentaje?",
      en: "What is the hardware chain's after-tax cost of debt, as a percentage?",
    },
    answer: 7.7,
    unit: '%',
    decimals: 2,
    tolerance: { abs: 0.01 },
    explanation: {
      es: "kd × (1 − t) = 11% × 0.70 = 7.7%. El escudo fiscal reduce el costo real del crédito. Error común: restar la tasa de impuestos directamente (11% − 30%) o multiplicar por 0.30 (3.3%), que es solo el ahorro.",
      en: "kd × (1 − t) = 11% × 0.70 = 7.7%. The tax shield lowers the loan's real cost. Common mistake: subtracting the tax rate directly (11% − 30%) or multiplying by 0.30 (3.3%), which is only the saving.",
    },
    difficulty: 1,
    points: 10,
    competency: 'wacc',
  },
  {
    id: 'FIN-11-E2',
    level: 4,
    module: 'FIN-11',
    kind: 'numeric',
    flavor: 'case',
    context: {
      es: "Una empresa de alimentos tiene una beta de 0.9. La tasa libre de riesgo es 7% y la prima de riesgo de mercado (rm − rf) es 5%. Datos hipotéticos.",
      en: "A food company has a beta of 0.9. The risk-free rate is 7% and the market risk premium (rm − rf) is 5%. Hypothetical data.",
    },
    prompt: {
      es: "Con CAPM, ¿cuál es el costo del capital propio de la empresa de alimentos, en porcentaje?",
      en: "Using CAPM, what is the food company's cost of equity, as a percentage?",
    },
    answer: 11.5,
    unit: '%',
    decimals: 2,
    tolerance: { abs: 0.01 },
    explanation: {
      es: "ke = rf + β × (rm − rf) = 7% + 0.9 × 5% = 7% + 4.5% = 11.5%. Con β menor a 1, la acción es menos volátil que el mercado y su prima es menor. Error común: multiplicar la beta por toda la tasa (0.9 × 12%) en lugar de solo por la prima.",
      en: "ke = rf + β × (rm − rf) = 7% + 0.9 × 5% = 7% + 4.5% = 11.5%. With β below 1, the stock is less volatile than the market and its premium is smaller. Common mistake: multiplying beta by the whole rate (0.9 × 12%) instead of only by the premium.",
    },
    difficulty: 1,
    points: 10,
    competency: 'wacc',
  },
  {
    id: 'FIN-11-E3',
    level: 4,
    module: 'FIN-11',
    kind: 'fields',
    flavor: 'case',
    context: {
      es: "Hoteles Pacífico tiene deuda con valor de mercado de $2,000,000 y capital propio con valor de mercado de $6,000,000. La deuda cuesta 10% antes de impuestos, los accionistas exigen 14% y la tasa de impuestos es 30%.",
      en: "Hoteles Pacífico has debt with a market value of $2,000,000 and equity with a market value of $6,000,000. Debt costs 10% before taxes, shareholders require 14% and the tax rate is 30%.",
    },
    prompt: {
      es: "Calcula para Hoteles Pacífico el peso de la deuda, el costo de la deuda después de impuestos y el WACC, todo en porcentaje.",
      en: "For Hoteles Pacífico, compute the weight of debt, the after-tax cost of debt and the WACC, all as percentages.",
    },
    fields: [
      { id: 'f1', label: { es: "Peso de la deuda (%)", en: "Weight of debt (%)" }, answer: 25, unit: '%', tolerance: { abs: 0.01 } },
      { id: 'f2', label: { es: "Costo de la deuda después de impuestos (%)", en: "After-tax cost of debt (%)" }, answer: 7, unit: '%', tolerance: { abs: 0.01 } },
      { id: 'f3', label: { es: "WACC (%)", en: "WACC (%)" }, answer: 12.25, unit: '%', tolerance: { abs: 0.01 } },
    ],
    explanation: {
      es: "Peso de la deuda: 2,000,000 ÷ 8,000,000 = 25% (capital 75%). kd después de impuestos: 10% × 0.70 = 7%. WACC = 0.25 × 7% + 0.75 × 14% = 1.75% + 10.5% = 12.25%. Error común: usar D ÷ E (2 ÷ 6 = 33.3%) como peso, en lugar de D ÷ (D + E).",
      en: "Weight of debt: 2,000,000 ÷ 8,000,000 = 25% (equity 75%). After-tax kd: 10% × 0.70 = 7%. WACC = 0.25 × 7% + 0.75 × 14% = 1.75% + 10.5% = 12.25%. Common mistake: using D ÷ E (2 ÷ 6 = 33.3%) as the weight instead of D ÷ (D + E).",
    },
    difficulty: 2,
    points: 20,
    competency: 'wacc',
  },
  {
    id: 'FIN-11-E4',
    level: 4,
    module: 'FIN-11',
    kind: 'mcq',
    flavor: 'concept',
    prompt: {
      es: "¿Por qué, en general, el costo del capital propio es mayor que el costo de la deuda de una misma empresa?",
      en: "Why is the cost of equity generally higher than the cost of debt for the same company?",
    },
    options: [
      { id: 'FIN-11-E4-a', text: { es: "Porque los accionistas cobran después de los acreedores y sus dividendos no son deducibles", en: "Because shareholders are paid after creditors and their dividends are not deductible" } },
      { id: 'FIN-11-E4-b', text: { es: "Porque la ley obliga a pagar a los accionistas una tasa mayor", en: "Because the law requires paying shareholders a higher rate" } },
      { id: 'FIN-11-E4-c', text: { es: "Porque el capital propio tiene fecha de vencimiento más corta", en: "Because equity has a shorter maturity" } },
      { id: 'FIN-11-E4-d', text: { es: "Porque los bancos nunca cobran intereses altos", en: "Because banks never charge high interest" } },
    ],
    correctOptionId: 'FIN-11-E4-a',
    explanation: {
      es: "El accionista asume más riesgo: cobra al último y no tiene pago garantizado, así que exige más. Además, los intereses son en general deducibles y los dividendos no, lo que abarata la deuda. Error común: pensar que el capital propio es \"gratis\" porque no tiene pagos obligatorios.",
      en: "Shareholders bear more risk: they are paid last and have no guaranteed payment, so they require more. Also, interest is generally deductible and dividends are not, which makes debt cheaper. Common mistake: thinking equity is \"free\" because it has no mandatory payments.",
    },
    difficulty: 1,
    points: 10,
    competency: 'wacc',
  },
  {
    id: 'FIN-11-E5',
    level: 4,
    module: 'FIN-11',
    kind: 'truefalse',
    flavor: 'concept',
    prompt: {
      es: "Para calcular el WACC lo ideal es ponderar la deuda y el capital con sus valores en libros, aunque el valor de mercado de las acciones sea muy distinto.",
      en: "To compute WACC, it is ideal to weight debt and equity at their book values, even if the market value of the shares is very different.",
    },
    answer: false,
    explanation: {
      es: "Falso. Los pesos deben reflejar lo que valen hoy las fuentes de financiamiento, es decir, su valor de mercado; es lo que los inversionistas tienen en juego. Los valores en libros son históricos y pueden distorsionar el WACC. Error común: tomar el capital contable del balance sin ajustarlo.",
      en: "False. The weights should reflect what the financing sources are worth today, that is, their market value; that is what investors have at stake. Book values are historical and can distort WACC. Common mistake: taking equity from the balance sheet without adjusting it.",
    },
    difficulty: 1,
    points: 10,
    competency: 'wacc',
  },
  {
    id: 'FIN-11-E6',
    level: 4,
    module: 'FIN-11',
    kind: 'formula',
    flavor: 'concept',
    prompt: {
      es: "Completa la fórmula del costo promedio ponderado de capital.",
      en: "Complete the weighted average cost of capital formula.",
    },
    template: 'WACC = {{b1}} × kd × (1 − {{b2}}) + {{b3}} × ke',
    blanks: [
      {
        id: 'b1',
        options: [
          { id: 'FIN-11-E6-b1-a', text: { es: "D ÷ (D + E)", en: "D ÷ (D + E)" } },
          { id: 'FIN-11-E6-b1-b', text: { es: "E ÷ (D + E)", en: "E ÷ (D + E)" } },
          { id: 'FIN-11-E6-b1-c', text: { es: "D ÷ E", en: "D ÷ E" } },
        ],
        correctOptionId: 'FIN-11-E6-b1-a',
      },
      {
        id: 'b2',
        options: [
          { id: 'FIN-11-E6-b2-a', text: { es: "β (beta)", en: "β (beta)" } },
          { id: 'FIN-11-E6-b2-b', text: { es: "t (tasa de impuestos)", en: "t (tax rate)" } },
          { id: 'FIN-11-E6-b2-c', text: { es: "rf (tasa libre de riesgo)", en: "rf (risk-free rate)" } },
        ],
        correctOptionId: 'FIN-11-E6-b2-b',
      },
      {
        id: 'b3',
        options: [
          { id: 'FIN-11-E6-b3-a', text: { es: "D ÷ (D + E)", en: "D ÷ (D + E)" } },
          { id: 'FIN-11-E6-b3-b', text: { es: "β (beta)", en: "β (beta)" } },
          { id: 'FIN-11-E6-b3-c', text: { es: "E ÷ (D + E)", en: "E ÷ (D + E)" } },
        ],
        correctOptionId: 'FIN-11-E6-b3-c',
      },
    ],
    explanation: {
      es: "WACC = D/(D+E) × kd × (1 − t) + E/(D+E) × ke. La deuda pesa según su proporción y entra después de impuestos; el capital pesa según la suya. Error común: aplicar el (1 − t) también al costo del capital propio; los dividendos no son deducibles.",
      en: "WACC = D/(D+E) × kd × (1 − t) + E/(D+E) × ke. Debt weighs by its share and enters after taxes; equity weighs by its own share. Common mistake: also applying (1 − t) to the cost of equity; dividends are not deductible.",
    },
    difficulty: 1,
    points: 10,
    competency: 'wacc',
  },

  // ═════════════════════════ FIN-12 ═════════════════════════
  {
    id: 'FIN-12-E1',
    level: 4,
    module: 'FIN-12',
    kind: 'classify',
    flavor: 'concept',
    prompt: {
      es: "Clasifica cada fuente de financiamiento de una empresa como deuda o como capital propio.",
      en: "Classify each of a company's financing sources as debt or equity.",
    },
    categories: [
      { id: 'FIN-12-E1-c1', label: { es: "Deuda", en: "Debt" } },
      { id: 'FIN-12-E1-c2', label: { es: "Capital propio", en: "Equity" } },
    ],
    items: [
      { id: 'FIN-12-E1-i1', label: { es: "Crédito bancario a 5 años", en: "5-year bank loan" }, correctCategoryId: 'FIN-12-E1-c1' },
      { id: 'FIN-12-E1-i2', label: { es: "Utilidades retenidas que no se repartieron como dividendos", en: "Retained earnings not paid out as dividends" }, correctCategoryId: 'FIN-12-E1-c2' },
      { id: 'FIN-12-E1-i3', label: { es: "Emisión de certificados bursátiles con intereses", en: "Issue of interest-bearing notes (certificados bursátiles)" }, correctCategoryId: 'FIN-12-E1-c1' },
      { id: 'FIN-12-E1-i4', label: { es: "Aportación de un nuevo socio a cambio de acciones", en: "Contribution by a new partner in exchange for shares" }, correctCategoryId: 'FIN-12-E1-c2' },
      { id: 'FIN-12-E1-i5', label: { es: "Arrendamiento financiero de montacargas", en: "Finance lease of forklifts" }, correctCategoryId: 'FIN-12-E1-c1' },
      { id: 'FIN-12-E1-i6', label: { es: "Colocación de acciones en la bolsa", en: "Share offering on the stock exchange" }, correctCategoryId: 'FIN-12-E1-c2' },
    ],
    explanation: {
      es: "Deuda: obliga a pagar intereses y devolver el dinero (crédito, certificados bursátiles, arrendamiento financiero). Capital: no tiene pago obligatorio y da participación en ganancias (utilidades retenidas, aportaciones, acciones). Error común: creer que las utilidades retenidas no son una fuente de financiamiento; son capital interno de los dueños.",
      en: "Debt: requires paying interest and returning the money (loan, notes, finance lease). Equity: no mandatory payment and gives a share in profits (retained earnings, contributions, shares). Common mistake: thinking retained earnings are not a financing source; they are the owners' internal equity.",
    },
    difficulty: 1,
    points: 10,
    competency: 'capital-structure',
  },
  {
    id: 'FIN-12-E2',
    level: 4,
    module: 'FIN-12',
    kind: 'numeric',
    flavor: 'case',
    context: {
      es: "Una empresa textil paga $150,000 de intereses al año por sus créditos. Su tasa de impuestos es 30% (ilustrativa) y los intereses son deducibles.",
      en: "A textile company pays $150,000 of interest a year on its loans. Its tax rate is 30% (illustrative) and the interest is deductible.",
    },
    prompt: {
      es: "¿De cuánto es el escudo fiscal anual de los intereses de la empresa textil? Responde en pesos.",
      en: "How large is the textile company's annual interest tax shield? Answer in pesos.",
    },
    answer: 45000,
    unit: 'MXN',
    decimals: 0,
    tolerance: { abs: 0.5 },
    explanation: {
      es: "Escudo fiscal = intereses × t = 150,000 × 0.30 = $45,000 de impuestos que se dejan de pagar. El costo neto de los intereses es 150,000 − 45,000 = $105,000. Error común: responder $105,000, que es el costo neto, no el ahorro.",
      en: "Tax shield = interest × t = 150,000 × 0.30 = $45,000 of taxes not paid. The net interest cost is 150,000 − 45,000 = $105,000. Common mistake: answering $105,000, which is the net cost, not the saving.",
    },
    difficulty: 1,
    points: 10,
    competency: 'capital-structure',
  },
  {
    id: 'FIN-12-E3',
    level: 4,
    module: 'FIN-12',
    kind: 'fields',
    flavor: 'case',
    context: {
      es: "Plásticos del Centro tiene activos por $2,000,000 y una utilidad de operación de $300,000; la tasa de impuestos es 30%. Compara financiarse 100% con capital contra financiarse con $800,000 de deuda al 10% y $1,200,000 de capital.",
      en: "Plásticos del Centro has $2,000,000 in assets and operating profit of $300,000; the tax rate is 30%. Compare financing 100% with equity against financing with $800,000 of debt at 10% and $1,200,000 of equity.",
    },
    prompt: {
      es: "Calcula para Plásticos del Centro el ROE sin deuda, la utilidad neta con deuda y el ROE con deuda.",
      en: "For Plásticos del Centro, compute ROE without debt, net income with debt and ROE with debt.",
    },
    fields: [
      { id: 'f1', label: { es: "ROE sin deuda (%)", en: "ROE without debt (%)" }, answer: 10.5, unit: '%', tolerance: { abs: 0.01 } },
      { id: 'f2', label: { es: "Utilidad neta con deuda", en: "Net income with debt" }, answer: 154000, unit: 'MXN', tolerance: { abs: 0.5 } },
      { id: 'f3', label: { es: "ROE con deuda (%)", en: "ROE with debt (%)" }, answer: 12.83, unit: '%', tolerance: { abs: 0.01 } },
    ],
    explanation: {
      es: "Sin deuda: 300,000 × 0.70 = 210,000; ROE = 210,000 ÷ 2,000,000 = 10.5%. Con deuda: intereses 80,000; UAI 220,000; impuestos 66,000; utilidad neta $154,000; ROE = 154,000 ÷ 1,200,000 = 12.83%. Error común: dividir la utilidad con deuda entre los activos totales ($2,000,000) en lugar de entre el capital de los dueños.",
      en: "No debt: 300,000 × 0.70 = 210,000; ROE = 210,000 ÷ 2,000,000 = 10.5%. With debt: interest 80,000; pre-tax income 220,000; taxes 66,000; net income $154,000; ROE = 154,000 ÷ 1,200,000 = 12.83%. Common mistake: dividing the leveraged net income by total assets ($2,000,000) instead of by the owners' equity.",
    },
    difficulty: 2,
    points: 20,
    competency: 'capital-structure',
  },
  {
    id: 'FIN-12-E4',
    level: 4,
    module: 'FIN-12',
    kind: 'mcq',
    flavor: 'concept',
    prompt: {
      es: "Según la teoría del orden jerárquico (pecking order), ¿en qué orden prefieren financiarse las empresas?",
      en: "According to the pecking order theory, in what order do companies prefer to finance themselves?",
    },
    options: [
      { id: 'FIN-12-E4-a', text: { es: "Emisión de acciones, deuda y fondos internos", en: "Share issues, debt and internal funds" } },
      { id: 'FIN-12-E4-b', text: { es: "Deuda, fondos internos y emisión de acciones", en: "Debt, internal funds and share issues" } },
      { id: 'FIN-12-E4-c', text: { es: "Fondos internos, deuda y emisión de acciones", en: "Internal funds, debt and share issues" } },
      { id: 'FIN-12-E4-d', text: { es: "Les da igual el orden, porque la estructura es irrelevante", en: "The order does not matter, because structure is irrelevant" } },
    ],
    correctOptionId: 'FIN-12-E4-c',
    explanation: {
      es: "Primero usan sus propios fondos (no requieren explicar nada al mercado), luego deuda y al final emiten acciones, porque emitir puede mandar la señal de que la acción está cara. Error común: confundir esta teoría con Modigliani-Miller sin impuestos, que es la que dice que la estructura es irrelevante.",
      en: "First they use their own funds (no need to explain anything to the market), then debt and lastly issue shares, because issuing may signal that the stock is overpriced. Common mistake: confusing this theory with Modigliani-Miller without taxes, which is the one saying structure is irrelevant.",
    },
    difficulty: 1,
    points: 10,
    competency: 'capital-structure',
  },
  {
    id: 'FIN-12-E5',
    level: 4,
    module: 'FIN-12',
    kind: 'truefalse',
    flavor: 'interpret',
    prompt: {
      es: "Según la teoría del equilibrio (trade-off), a una empresa siempre le conviene financiarse casi al 100% con deuda para aprovechar al máximo el escudo fiscal.",
      en: "According to the trade-off theory, a company is always better off financing itself almost 100% with debt to make the most of the tax shield.",
    },
    answer: false,
    explanation: {
      es: "Falso. El trade-off compara el beneficio del escudo fiscal contra el costo de las dificultades financieras, que crece mucho con niveles altos de deuda (riesgo de impago, pérdida de clientes, quiebra). La estructura óptima está en un punto intermedio. Error común: quedarse solo con la versión de Modigliani-Miller con impuestos, que ignora los costos de quiebra.",
      en: "False. The trade-off weighs the tax shield benefit against the cost of financial distress, which grows sharply at high debt levels (default risk, lost customers, bankruptcy). The optimal structure lies at an intermediate point. Common mistake: sticking only to the Modigliani-Miller version with taxes, which ignores bankruptcy costs.",
    },
    difficulty: 2,
    points: 15,
    competency: 'capital-structure',
  },
  {
    id: 'FIN-12-E6',
    level: 4,
    module: 'FIN-12',
    kind: 'multi',
    flavor: 'case',
    context: {
      es: "Una startup de software con ingresos muy variables y pocos activos físicos analiza pedir un crédito grande para crecer más rápido.",
      en: "A software startup with highly variable revenue and few physical assets is considering taking out a large loan to grow faster.",
    },
    prompt: {
      es: "¿Qué riesgos o desventajas debe considerar la startup de software antes de endeudarse mucho? Selecciona todas las que apliquen.",
      en: "Which risks or drawbacks should the software startup consider before taking on a lot of debt? Select all that apply.",
    },
    options: [
      { id: 'FIN-12-E6-a', text: { es: "En un mes de ventas bajas debe pagar intereses de todos modos", en: "In a low-sales month it must pay interest anyway" } },
      { id: 'FIN-12-E6-b', text: { es: "El apalancamiento amplifica las pérdidas sobre el capital de los dueños", en: "Leverage amplifies losses on the owners' equity" } },
      { id: 'FIN-12-E6-c', text: { es: "Tiene pocos activos que ofrecer como garantía, así que el crédito puede ser caro", en: "It has few assets to offer as collateral, so the loan may be expensive" } },
      { id: 'FIN-12-E6-d', text: { es: "La deuda obliga a ceder acciones y control al banco", en: "Debt forces it to hand over shares and control to the bank" } },
      { id: 'FIN-12-E6-e', text: { es: "Si tiene pérdidas, puede no aprovechar el escudo fiscal", en: "If it has losses, it may not benefit from the tax shield" } },
    ],
    correctOptionIds: ['FIN-12-E6-a', 'FIN-12-E6-b', 'FIN-12-E6-c', 'FIN-12-E6-e'],
    explanation: {
      es: "Con ingresos inciertos, los intereses fijos aumentan el riesgo de no pagar; la deuda amplifica pérdidas; sin garantías el crédito es caro; y sin utilidades no hay impuestos que reducir, así que el escudo fiscal se pierde. La deuda, en cambio, no cede acciones ni control: eso es propio del capital. Error común: pensar que la deuda diluye a los dueños.",
      en: "With uncertain revenue, fixed interest raises the risk of default; debt amplifies losses; without collateral the loan is expensive; and with no profits there are no taxes to reduce, so the tax shield is lost. Debt, by contrast, does not hand over shares or control: that is a feature of equity. Common mistake: thinking debt dilutes the owners.",
    },
    difficulty: 2,
    points: 15,
    competency: 'capital-structure',
  },
]
