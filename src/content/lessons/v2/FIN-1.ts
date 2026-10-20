import type { Exercise, Lesson } from '../../../types'

/**
 * FINCORE — Temario v2.0, área Finanzas Corporativas, parte 1 (Básico).
 * FIN-01 a FIN-06: fundamentos, matemáticas financieras, valor del dinero en el tiempo,
 * análisis de estados financieros, razones financieras y capital de trabajo.
 */

const t = (es: string, en: string) => ({ es, en })

const NOTE_RATES = t(
  "Contenido educativo. Las tasas y montos de esta lección son ejemplos hipotéticos. Las referencias a indicadores como el CAT o la GAT que publican las instituciones financieras en México son generales; las reglas de cálculo y difusión las fijan las autoridades financieras y pueden cambiar, así que verifica la versión vigente (2026).",
  "Educational content. The rates and amounts in this lesson are hypothetical examples. References to indicators such as the CAT (total annual cost) or the GAT (total annual yield) published by financial institutions in Mexico are general; the calculation and disclosure rules are set by the financial authorities and may change, so verify the current version (2026).",
)

const NOTE_TVM = t(
  "Contenido educativo. Las tasas usadas son ejemplos hipotéticos, no tasas reales del mercado ni del Banco de México. La inflación y las tasas de interés cambian con el tiempo: consulta datos vigentes (2026) antes de decidir.",
  "Educational content. The rates used are hypothetical examples, not real market or Banco de México rates. Inflation and interest rates change over time: check current data (2026) before deciding.",
)

const NOTE_NIF = t(
  "Contenido educativo. En México, los estados financieros se preparan con las Normas de Información Financiera (NIF) que emite el CINIF; las empresas que cotizan en bolsa usan además las NIIF (IFRS). Las normas se actualizan: verifica la versión vigente (2026).",
  "Educational content. In Mexico, financial statements are prepared under the Mexican Financial Reporting Standards (NIF) issued by CINIF; listed companies also use IFRS. Standards are updated: verify the current version (2026).",
)

const NOTE_RATIOS = t(
  "Contenido educativo. Las cifras son hipotéticas. No existe un valor \"correcto\" universal para cada razón: los rangos sanos dependen de la industria y del momento. Las convenciones (por ejemplo, año de 360 o 365 días, o saldos finales contra promedio) varían entre analistas; verifica la que use tu fuente.",
  "Educational content. Figures are hypothetical. There is no universal \"correct\" value for each ratio: healthy ranges depend on the industry and the moment. Conventions (for example, a 360- or 365-day year, or ending versus average balances) vary among analysts; check the one your source uses.",
)

export const lessons: Lesson[] = [
  // ───────────────────────────── FIN-01 ─────────────────────────────
  {
    id: 'FIN-01',
    level: 4,
    topicIds: ['FIN.1'],
    title: t("Fundamentos de finanzas", "Foundations of finance"),
    summary: t(
      "Las finanzas corporativas deciden en qué invertir, cómo pagarlo y qué hacer con las ganancias, buscando crear valor sin perder de vista el riesgo ni el efectivo.",
      "Corporate finance decides what to invest in, how to pay for it and what to do with profits, aiming to create value without losing sight of risk or cash.",
    ),
    minutes: 11,
    objectives: [
      t("Explicar qué son las finanzas corporativas y cuál es su objetivo principal.", "Explain what corporate finance is and what its main objective is."),
      t("Distinguir las decisiones de inversión, de financiamiento y de dividendos.", "Distinguish investment, financing and dividend decisions."),
      t("Relacionar riesgo con rendimiento y calcular un rendimiento simple.", "Relate risk to return and compute a simple return."),
      t("Diferenciar la utilidad contable del flujo de efectivo.", "Tell accounting profit apart from cash flow."),
    ],
    theory: [
      {
        heading: t("¿Para qué sirven las finanzas?", "What is finance for?"),
        body: [
          t(
            "Las **finanzas** estudian cómo se consigue, se usa y se cuida el dinero. Las **finanzas corporativas** aplican esa idea a una empresa: desde una taquería con dos sucursales hasta una cadena de autoservicio.",
            "**Finance** studies how money is raised, used and protected. **Corporate finance** applies that idea to a company: from a taco shop with two branches to a supermarket chain.",
          ),
          t(
            "Su objetivo principal es **crear valor**: que el negocio valga más con el tiempo para sus dueños (los **accionistas** o socios). No basta con vender mucho; hay que ganar más de lo que cuesta el dinero que se usa, y hacerlo de forma sostenible.",
            "Its main objective is to **create value**: to make the business worth more over time for its owners (the **shareholders** or partners). Selling a lot is not enough; you must earn more than the money you use costs, and do it sustainably.",
          ),
          t(
            "Mini ejemplo: una panadería gana $200,000 al año, pero sus socios aportaron $2,000,000 que en otra opción igual de segura les darían $240,000. Aunque tiene utilidad, **no está creando valor**: sus dueños estarían mejor en la otra opción.",
            "Mini example: a bakery earns $200,000 a year, but its partners put in $2,000,000 that in an equally safe alternative would give them $240,000. Even though it makes a profit, **it is not creating value**: its owners would be better off in the alternative.",
          ),
        ],
      },
      {
        heading: t("Tres preguntas sobre el dinero", "Three questions about money"),
        body: [
          t(
            "Casi todo lo que hace el área de finanzas cae en tres preguntas. La **decisión de inversión**: ¿en qué gastamos el dinero para que produzca más? Por ejemplo, comprar un horno nuevo o abrir otra sucursal.",
            "Almost everything the finance area does falls into three questions. The **investment decision**: what do we spend money on so it produces more? For example, buying a new oven or opening another branch.",
          ),
          t(
            "La **decisión de financiamiento**: ¿de dónde sale ese dinero? Puede ser **deuda** (un préstamo bancario, crédito de proveedores) o **capital** (dinero de los socios). La **decisión de dividendos**: cuando hay ganancias, ¿se reparten a los socios o se **reinvierten** en el negocio?",
            "The **financing decision**: where does that money come from? It can be **debt** (a bank loan, supplier credit) or **equity** (money from the partners). The **dividend decision**: when there are profits, are they paid out to the partners or **reinvested** in the business?",
          ),
          t(
            "Mini ejemplo: una purificadora decide comprar una camioneta de reparto (inversión), pagarla con un crédito a 3 años (financiamiento) y este año no repartir utilidades para tener un colchón (dividendos).",
            "Mini example: a water purification business decides to buy a delivery van (investment), pay for it with a 3-year loan (financing) and not distribute profits this year to keep a cushion (dividends).",
          ),
        ],
        bullets: [
          t("Inversión: en qué usar el dinero (activos, proyectos).", "Investment: what to use money on (assets, projects)."),
          t("Financiamiento: de dónde sale el dinero (deuda o capital).", "Financing: where the money comes from (debt or equity)."),
          t("Dividendos: repartir o reinvertir las utilidades.", "Dividends: pay out or reinvest profits."),
          t("En el día a día se suma la gestión del capital de trabajo: inventarios, cobranza y pagos.", "Day to day, working capital management is added: inventory, collections and payments."),
        ],
      },
      {
        heading: t("Ganancia, riesgo y efectivo", "Return, risk and cash"),
        body: [
          t(
            "El **rendimiento** es lo que ganas con una inversión, medido en porcentaje de lo que pusiste. El **riesgo** es la posibilidad de que el resultado sea distinto (sobre todo peor) de lo esperado. Regla básica: **a mayor riesgo, se exige mayor rendimiento**. Nadie presta a un negocio nuevo y desconocido a la misma tasa que al gobierno.",
            "**Return** is what you earn on an investment, measured as a percentage of what you put in. **Risk** is the chance that the outcome will differ (especially for the worse) from what was expected. Basic rule: **the higher the risk, the higher the return demanded**. Nobody lends to a new, unknown business at the same rate as to the government.",
          ),
          t(
            "Otra idea clave: **utilidad no es lo mismo que efectivo**. La contabilidad registra una venta cuando se hace, aunque el cliente pague después. Por eso un negocio puede tener utilidad en papel y aun así **quedarse sin dinero** para pagar la nómina. En finanzas se vigila siempre el **flujo de efectivo**: el dinero que de verdad entra y sale.",
            "Another key idea: **profit is not the same as cash**. Accounting records a sale when it is made, even if the customer pays later. That is why a business can show a profit on paper and still **run out of money** to pay payroll. Finance always watches **cash flow**: the money that actually comes in and goes out.",
          ),
          t(
            "Mini ejemplo: compras una acción en $100, recibes $3 de dividendo y la vendes en $112. Ganaste $12 + $3 = $15, es decir, un rendimiento de 15 %.",
            "Mini example: you buy a share for $100, receive a $3 dividend and sell it for $112. You earned $12 + $3 = $15, that is, a 15% return.",
          ),
        ],
        formulas: [
          {
            name: t("Rendimiento total de una inversión", "Total return on an investment"),
            expression: "Rendimiento = (Precio final − Precio inicial + Ingresos recibidos) ÷ Precio inicial × 100",
            variables: [
              { symbol: "Precio inicial", meaning: t("Lo que pagaste al invertir, en pesos.", "What you paid when investing, in pesos.") },
              { symbol: "Precio final", meaning: t("En cuánto vendiste (o vale hoy) la inversión, en pesos.", "What you sold the investment for (or what it is worth today), in pesos.") },
              { symbol: "Ingresos recibidos", meaning: t("Dinero que te dio la inversión mientras la tenías: dividendos, rentas, ganancias parciales. En pesos.", "Money the investment paid you while you held it: dividends, rent, partial gains. In pesos.") },
              { symbol: "Rendimiento", meaning: t("Lo que ganaste por cada $100 invertidos, en %.", "What you earned per $100 invested, in %.") },
            ],
            steps: [
              t("Calcula la ganancia por precio: precio final − precio inicial.", "Compute the price gain: final price − initial price."),
              t("Súmale los ingresos recibidos (dividendos, rentas): es la ganancia total.", "Add the income received (dividends, rent): that is the total gain."),
              t("Divide la ganancia total entre el precio inicial y multiplica por 100 para tenerlo en %.", "Divide the total gain by the initial price and multiply by 100 to get it in %."),
            ],
            example: t(
              "Compras una acción en $200, recibes $4 de dividendo y la vendes en $214. Ganancia por precio: $214 − $200 = $14. Ganancia total: $14 + $4 = $18. Rendimiento: $18 ÷ $200 = 0.09 × 100 = **9 %**.",
              "You buy a share for $200, receive a $4 dividend and sell it for $214. Price gain: $214 − $200 = $14. Total gain: $14 + $4 = $18. Return: $18 ÷ $200 = 0.09 × 100 = **9%**.",
            ),
            interpret: t(
              "Compáralo con lo que te daría otra opción de riesgo parecido: si otra te da más, esta inversión no fue la mejor.",
              "Compare it with what another option of similar risk would give: if the other gives more, this investment was not the best.",
            ),
            mistake: t(
              "Olvidar los dividendos o dividir entre el precio de venta en lugar del precio de compra.",
              "Forgetting the dividends or dividing by the selling price instead of the purchase price.",
            ),
          },
          {
            name: t("Utilidad contra flujo de efectivo del periodo", "Profit versus cash flow for the period"),
            expression: "Utilidad = Ventas − Gastos   ·   Flujo de efectivo neto = Efectivo cobrado − Efectivo pagado",
            variables: [
              { symbol: "Ventas", meaning: t("Todo lo vendido en el periodo, se haya cobrado o no, en pesos.", "Everything sold in the period, collected or not, in pesos.") },
              { symbol: "Gastos", meaning: t("Todos los gastos del periodo, en pesos.", "All expenses for the period, in pesos.") },
              { symbol: "Efectivo cobrado", meaning: t("Solo el dinero que de verdad entró, en pesos (por ejemplo, el % de las ventas que se cobró).", "Only the money that actually came in, in pesos (for example, the % of sales collected).") },
              { symbol: "Efectivo pagado", meaning: t("Solo el dinero que de verdad salió, en pesos.", "Only the money that actually went out, in pesos.") },
            ],
            steps: [
              t("Calcula la utilidad: ventas − gastos.", "Compute profit: sales − expenses."),
              t("Calcula lo cobrado. Si te dan un porcentaje, conviértelo a decimal y multiplícalo por las ventas.", "Compute what was collected. If you are given a percentage, convert it to a decimal and multiply it by sales."),
              t("Calcula el flujo neto: cobrado − pagado. Si sale negativo, ponle signo menos: la caja bajó.", "Compute net cash flow: collected − paid. If it is negative, keep the minus sign: cash went down."),
            ],
            example: t(
              "Una florería vende $90,000, cobra el 70 % y paga en efectivo $75,000 de gastos. Utilidad: $90,000 − $75,000 = $15,000. Cobrado: 0.70 × $90,000 = $63,000. Flujo neto: $63,000 − $75,000 = **−$12,000**.",
              "A flower shop sells $90,000, collects 70% and pays $75,000 of expenses in cash. Profit: $90,000 − $75,000 = $15,000. Collected: 0.70 × $90,000 = $63,000. Net cash flow: $63,000 − $75,000 = **−$12,000**.",
            ),
            interpret: t(
              "Utilidad positiva con flujo negativo significa que el negocio gana en papel, pero su caja baja: necesita cobrar o tener un colchón para pagar a tiempo.",
              "Positive profit with negative cash flow means the business earns on paper but its cash drops: it needs to collect or have a cushion to pay on time.",
            ),
            mistake: t(
              "Suponer que el flujo de efectivo es igual a la utilidad.",
              "Assuming cash flow equals profit.",
            ),
          },
        ],
      },
    ],
    examples: [
      {
        title: t("Rendimiento de una inversión", "Return on an investment"),
        problem: t(
          "Ana invierte $40,000 en un pequeño lote de mercancía para revender. En un año recibe $2,000 de ganancias parciales y al final vende todo lo que queda en $43,000. ¿Cuál fue su rendimiento?",
          "Ana invests $40,000 in a small lot of goods to resell. Over a year she receives $2,000 in partial gains and at the end sells everything left for $43,000. What was her return?",
        ),
        steps: [
          t("Ganancia por precio: $43,000 − $40,000 = $3,000.", "Price gain: $43,000 − $40,000 = $3,000."),
          t("Sumamos lo recibido en el año: $3,000 + $2,000 = $5,000.", "Add what was received during the year: $3,000 + $2,000 = $5,000."),
          t("Dividimos entre lo invertido: $5,000 ÷ $40,000 = 0.125.", "Divide by the amount invested: $5,000 ÷ $40,000 = 0.125."),
        ],
        result: t("Su rendimiento fue de 12.5 % en el año.", "Her return was 12.5% for the year."),
      },
      {
        title: t("Utilidad positiva, caja negativa", "Positive profit, negative cash"),
        problem: t(
          "Un taller de herrería vende $150,000 en el mes, pero solo cobra $60,000; el resto se lo pagarán en 60 días. Sus gastos del mes son $110,000 y todos se pagan en efectivo. ¿Cuál es su utilidad y cuánto efectivo ganó o perdió?",
          "An ironwork shop sells $150,000 in the month but only collects $60,000; the rest will be paid in 60 days. Its expenses for the month are $110,000, all paid in cash. What is its profit and how much cash did it gain or lose?",
        ),
        steps: [
          t("Utilidad = ventas − gastos = $150,000 − $110,000 = $40,000.", "Profit = sales − expenses = $150,000 − $110,000 = $40,000."),
          t("Efectivo que entró: $60,000 (lo cobrado).", "Cash that came in: $60,000 (what was collected)."),
          t("Flujo de efectivo = $60,000 − $110,000 = −$50,000.", "Cash flow = $60,000 − $110,000 = −$50,000."),
        ],
        result: t(
          "Gana $40,000 en papel pero su caja baja $50,000. Si no tiene ahorros o crédito, podría no pagar a tiempo aunque sea rentable.",
          "It earns $40,000 on paper but its cash drops by $50,000. Without savings or credit it might not pay on time even though it is profitable.",
        ),
      },
    ],
    keyPoints: [
      t("El objetivo de las finanzas corporativas es crear valor para los dueños de forma sostenible.", "The objective of corporate finance is to create value for the owners sustainably."),
      t("Tres decisiones: inversión (en qué), financiamiento (con qué) y dividendos (repartir o reinvertir).", "Three decisions: investment (in what), financing (with what) and dividends (pay out or reinvest)."),
      t("A mayor riesgo, mayor rendimiento exigido.", "Higher risk, higher required return."),
      t("Rendimiento = ganancia total ÷ lo invertido.", "Return = total gain ÷ amount invested."),
      t("Utilidad no es efectivo: un negocio rentable puede quedarse sin liquidez.", "Profit is not cash: a profitable business can run out of liquidity."),
    ],
    exerciseIds: ['FIN-01-E1', 'FIN-01-E2', 'FIN-01-E3', 'FIN-01-E4', 'FIN-01-E5'],
  },

  // ───────────────────────────── FIN-02 ─────────────────────────────
  {
    id: 'FIN-02',
    level: 4,
    topicIds: ['FIN.2'],
    title: t("Matemáticas financieras", "Financial mathematics"),
    summary: t(
      "Las matemáticas financieras te enseñan a calcular intereses: el simple, que se cobra solo sobre el capital, y el compuesto, que también genera intereses sobre los intereses.",
      "Financial mathematics teaches you to compute interest: simple interest, charged only on the principal, and compound interest, which also earns interest on interest.",
    ),
    minutes: 11,
    objectives: [
      t("Usar porcentajes y expresar tasas y plazos en la misma unidad de tiempo.", "Use percentages and express rates and terms in the same time unit."),
      t("Calcular interés simple y monto final.", "Compute simple interest and final amount."),
      t("Calcular interés compuesto y compararlo con el simple.", "Compute compound interest and compare it with simple interest."),
      t("Distinguir tasa nominal de tasa efectiva.", "Distinguish nominal rate from effective rate."),
    ],
    theory: [
      {
        heading: t("¿Cuánto cuesta usar dinero ajeno?", "What does borrowed money cost?"),
        body: [
          t(
            "El **interés** es el precio de usar dinero ajeno. Si pides prestado, lo pagas; si ahorras o prestas, lo cobras. El dinero que prestas o pides se llama **capital** o **principal** (P).",
            "**Interest** is the price of using someone else's money. If you borrow, you pay it; if you save or lend, you earn it. The money you lend or borrow is called **capital** or **principal** (P).",
          ),
          t(
            "La **tasa de interés** (i) dice cuánto se paga por cada $100 en un periodo. \"12 % anual\" significa $12 por cada $100 en un año. Para calcular, el porcentaje se escribe en decimal: 12 % = 0.12.",
            "The **interest rate** (i) says how much is paid per $100 in a period. \"12% per year\" means $12 per $100 in a year. To compute, the percentage is written as a decimal: 12% = 0.12.",
          ),
          t(
            "Regla de oro: **tasa y plazo en la misma unidad**. Si la tasa es anual y el plazo es de 6 meses, usa t = 6/12 = 0.5 años. Mini ejemplo: 2 % mensual durante 1 año son 12 periodos mensuales, no 1.",
            "Golden rule: **rate and term in the same unit**. If the rate is annual and the term is 6 months, use t = 6/12 = 0.5 years. Mini example: 2% per month for 1 year is 12 monthly periods, not 1.",
          ),
        ],
        formulas: [
          {
            name: t("Poner tasa y plazo en la misma unidad", "Putting rate and term in the same unit"),
            expression: "i (decimal) = tasa en % ÷ 100   ·   t en años = meses ÷ 12   ·   tasa por periodo = tasa anual ÷ periodos por año",
            variables: [
              { symbol: "i", meaning: t("La tasa de interés escrita en decimal (12 % = 0.12).", "The interest rate written as a decimal (12% = 0.12).") },
              { symbol: "t", meaning: t("El plazo, medido en la misma unidad que la tasa (si la tasa es anual, en años).", "The term, measured in the same unit as the rate (if the rate is annual, in years).") },
              { symbol: "periodos por año", meaning: t("Cuántas veces cabe el periodo en un año: 12 meses, 4 trimestres, 2 semestres.", "How many times the period fits in a year: 12 months, 4 quarters, 2 half-years.") },
            ],
            steps: [
              t("Convierte la tasa a decimal dividiendo entre 100: 18 % = 0.18.", "Convert the rate to a decimal by dividing by 100: 18% = 0.18."),
              t("Fíjate en qué unidad está la tasa (anual, mensual…).", "Check what unit the rate is in (annual, monthly…)."),
              t("Pasa el plazo a esa misma unidad: si la tasa es anual y el plazo son meses, divide los meses entre 12.", "Convert the term to that same unit: if the rate is annual and the term is in months, divide the months by 12."),
              t("Si prefieres trabajar por mes, divide la tasa anual entre 12.", "If you prefer to work by month, divide the annual rate by 12."),
            ],
            example: t(
              "Una tasa de 18 % anual por 3 meses: i = 18 ÷ 100 = 0.18; t = 3 ÷ 12 = 0.25 años. O, por mes: 18 % ÷ 12 = 1.5 % mensual = 0.015, durante 3 periodos.",
              "An 18% annual rate for 3 months: i = 18 ÷ 100 = 0.18; t = 3 ÷ 12 = 0.25 years. Or, by month: 18% ÷ 12 = 1.5% monthly = 0.015, for 3 periods.",
            ),
            mistake: t(
              "Usar el plazo en meses (por ejemplo, t = 6) con una tasa anual: el interés sale 12 veces más grande.",
              "Using the term in months (for example, t = 6) with an annual rate: interest comes out 12 times too large.",
            ),
          },
        ],
        bullets: [
          t("P: capital o principal.", "P: principal."),
          t("i: tasa por periodo, en decimal.", "i: rate per period, as a decimal."),
          t("t o n: número de periodos, en la misma unidad que la tasa.", "t or n: number of periods, in the same unit as the rate."),
          t("I: interés ganado o pagado; M o VF: monto final.", "I: interest earned or paid; M or FV: final amount."),
        ],
      },
      {
        heading: t("Interés simple: siempre igual", "Simple interest: always the same"),
        body: [
          t(
            "En el **interés simple** los intereses se calculan siempre sobre el **capital original**. Los intereses no se suman al capital para generar más intereses. Se usa en préstamos de corto plazo, pagarés y algunos créditos entre comercios.",
            "With **simple interest**, interest is always computed on the **original principal**. Interest is not added to the principal to earn more interest. It is used in short-term loans, promissory notes and some credit between businesses.",
          ),
          t(
            "El interés crece en **línea recta**: si un año genera $1,000, dos años generan $2,000. El monto final es el capital más los intereses: M = P + I.",
            "Interest grows in a **straight line**: if one year generates $1,000, two years generate $2,000. The final amount is principal plus interest: M = P + I.",
          ),
          t(
            "Mini ejemplo: prestas $50,000 a 12 % anual simple durante 9 meses. I = 50,000 × 0.12 × (9/12) = $4,500, y te devuelven $54,500.",
            "Mini example: you lend $50,000 at 12% simple annual interest for 9 months. I = 50,000 × 0.12 × (9/12) = $4,500, and you get back $54,500.",
          ),
        ],
        formulas: [
          {
            name: t("Interés simple y monto final", "Simple interest and final amount"),
            expression: "I = P × i × t   ·   M = P + I = P × (1 + i × t)",
            variables: [
              { symbol: "I", meaning: t("El interés: lo que se cobra o paga por usar el dinero, en pesos.", "Interest: what is charged or paid for using the money, in pesos.") },
              { symbol: "P", meaning: t("El capital: el dinero prestado o invertido al inicio, en pesos.", "Principal: the money lent or invested at the start, in pesos.") },
              { symbol: "i", meaning: t("La tasa de interés en decimal (15 % = 0.15).", "The interest rate as a decimal (15% = 0.15).") },
              { symbol: "t", meaning: t("El tiempo, en la misma unidad que la tasa (años si la tasa es anual).", "Time, in the same unit as the rate (years if the rate is annual).") },
              { symbol: "M", meaning: t("El monto final: capital más intereses, en pesos.", "Final amount: principal plus interest, in pesos.") },
            ],
            steps: [
              t("Convierte la tasa a decimal.", "Convert the rate to a decimal."),
              t("Pasa el plazo a la unidad de la tasa (meses ÷ 12 si la tasa es anual).", "Convert the term to the rate's unit (months ÷ 12 if the rate is annual)."),
              t("Multiplica P × i × t: es el interés.", "Multiply P × i × t: that is the interest."),
              t("Para el monto final, súmale el interés al capital.", "For the final amount, add the interest to the principal."),
            ],
            example: t(
              "Prestas $40,000 a 18 % anual simple por 3 meses. i = 0.18; t = 3 ÷ 12 = 0.25. I = $40,000 × 0.18 × 0.25 = **$1,800**. M = $40,000 + $1,800 = $41,800.",
              "You lend $40,000 at 18% simple annual interest for 3 months. i = 0.18; t = 3 ÷ 12 = 0.25. I = $40,000 × 0.18 × 0.25 = **$1,800**. M = $40,000 + $1,800 = $41,800.",
            ),
            mistake: t(
              "Calcular el interés sobre el monto final en lugar del capital original, o dejar el plazo en meses con una tasa anual.",
              "Computing interest on the final amount instead of the original principal, or leaving the term in months with an annual rate.",
            ),
          },
        ],
      },
      {
        heading: t("Interés sobre interés", "Interest on interest"),
        body: [
          t(
            "En el **interés compuesto**, al final de cada periodo los intereses se **suman al capital** (se \"capitalizan\") y el siguiente periodo ganan intereses también. Es \"interés sobre interés\" y hace que el dinero crezca cada vez más rápido. Así funcionan casi todas las inversiones y créditos de largo plazo.",
            "With **compound interest**, at the end of each period interest is **added to the principal** (it is \"capitalized\") and earns interest in the next period too. It is \"interest on interest\" and makes money grow faster and faster. Almost all long-term investments and loans work this way.",
          ),
          t(
            "En palabras sencillas: la tasa \"de anuncio\" y la que de verdad pagas pueden ser distintas. La **tasa nominal** es la tasa anual que se anuncia, por ejemplo \"12 % anual capitalizable mensualmente\": en realidad cobra 1 % cada mes. La **tasa efectiva** es lo que de verdad ganas o pagas en el año con esa capitalización, y es **mayor** que la nominal cuando se capitaliza más de una vez al año.",
            "In plain words: the \"advertised\" rate and the one you really pay can differ. The **nominal rate** is the annual rate announced, for example \"12% per year compounded monthly\": in reality it charges 1% each month. The **effective rate** is what you really earn or pay over the year with that compounding, and it is **higher** than the nominal rate when compounding happens more than once a year.",
          ),
          t(
            "Mini ejemplo: con 12 % nominal capitalizable mensualmente, la tasa efectiva anual es (1.01)¹² − 1 ≈ 12.68 %. Por eso en México los bancos informan indicadores anuales que permiten comparar productos, como el **CAT** en créditos o la **GAT** en ahorros.",
            "Mini example: with 12% nominal compounded monthly, the effective annual rate is (1.01)¹² − 1 ≈ 12.68%. That is why banks in Mexico report annual indicators that make products comparable, such as the **CAT** for loans or the **GAT** for savings.",
          ),
        ],
        formulas: [
          {
            name: t("Monto con interés compuesto", "Amount with compound interest"),
            expression: "M = P × (1 + i)ⁿ",
            variables: [
              { symbol: "M", meaning: t("El monto final después de todos los periodos, en pesos.", "The final amount after all periods, in pesos.") },
              { symbol: "P", meaning: t("El capital inicial, en pesos.", "The initial principal, in pesos.") },
              { symbol: "i", meaning: t("La tasa por periodo, en decimal.", "The rate per period, as a decimal.") },
              { symbol: "n", meaning: t("El número de periodos (años, meses…) en la misma unidad que la tasa.", "The number of periods (years, months…) in the same unit as the rate.") },
              { symbol: "(1 + i)ⁿ", meaning: t("Multiplicar (1 + i) por sí mismo n veces. Por ejemplo, (1.07)² = 1.07 × 1.07.", "Multiplying (1 + i) by itself n times. For example, (1.07)² = 1.07 × 1.07.") },
            ],
            steps: [
              t("Convierte la tasa a decimal y súmale 1: 7 % → 1.07.", "Convert the rate to a decimal and add 1: 7% → 1.07."),
              t("Eleva ese número a n: multiplícalo por sí mismo tantas veces como periodos haya.", "Raise that number to n: multiply it by itself as many times as there are periods."),
              t("Multiplica el resultado por el capital.", "Multiply the result by the principal."),
            ],
            example: t(
              "Inviertes $25,000 a 7 % anual compuesto por 2 años. 1.07 × 1.07 = 1.1449. M = $25,000 × 1.1449 = **$28,622.50**. Con interés simple serían $25,000 × (1 + 0.07 × 2) = $28,500: el compuesto da $122.50 más.",
              "You invest $25,000 at 7% compounded annually for 2 years. 1.07 × 1.07 = 1.1449. M = $25,000 × 1.1449 = **$28,622.50**. With simple interest it would be $25,000 × (1 + 0.07 × 2) = $28,500: compound gives $122.50 more.",
            ),
            mistake: t(
              "Elevar solo la tasa (0.07²) en lugar de (1 + 0.07)², o usar la fórmula del interés simple.",
              "Raising only the rate (0.07²) instead of (1 + 0.07)², or using the simple interest formula.",
            ),
          },
          {
            name: t("Tasa efectiva anual", "Effective annual rate"),
            expression: "Tasa efectiva = (1 + i_nominal ÷ m)ᵐ − 1",
            variables: [
              { symbol: "i_nominal", meaning: t("La tasa anual anunciada, en decimal.", "The advertised annual rate, as a decimal.") },
              { symbol: "m", meaning: t("Cuántas veces al año se capitalizan los intereses: 12 si es mensual, 4 si es trimestral.", "How many times a year interest is compounded: 12 if monthly, 4 if quarterly.") },
              { symbol: "Tasa efectiva", meaning: t("Lo que de verdad ganas o pagas en un año, en %.", "What you really earn or pay in a year, in %.") },
            ],
            steps: [
              t("Divide la tasa nominal entre m: es la tasa de cada periodo.", "Divide the nominal rate by m: that is the rate for each period."),
              t("Súmale 1 y elévalo a la m.", "Add 1 and raise it to the power m."),
              t("Réstale 1 y multiplica por 100 para expresarlo en %.", "Subtract 1 and multiply by 100 to express it in %."),
            ],
            example: t(
              "12 % anual capitalizable cada trimestre: 0.12 ÷ 4 = 0.03 por trimestre. (1.03)⁴ = 1.125509. Tasa efectiva: 1.125509 − 1 = 0.125509 ≈ **12.55 %**.",
              "12% per year compounded quarterly: 0.12 ÷ 4 = 0.03 per quarter. (1.03)⁴ = 1.125509. Effective rate: 1.125509 − 1 = 0.125509 ≈ **12.55%**.",
            ),
            interpret: t(
              "Entre más veces al año se capitaliza, más se aleja la efectiva de la nominal. Para comparar dos ofertas, compara siempre tasas efectivas.",
              "The more times a year interest compounds, the further the effective rate moves from the nominal one. To compare two offers, always compare effective rates.",
            ),
            mistake: t(
              "Comparar tasas nominales con distinta capitalización como si fueran iguales.",
              "Comparing nominal rates with different compounding as if they were the same.",
            ),
          },
        ],
      },
    ],
    examples: [
      {
        title: t("Interés compuesto paso a paso", "Compound interest step by step"),
        problem: t(
          "Depositas $20,000 en una inversión hipotética que paga 10 % anual compuesto. ¿Cuánto tendrás en 3 años?",
          "You deposit $20,000 in a hypothetical investment paying 10% compounded annually. How much will you have in 3 years?",
        ),
        steps: [
          t("Año 1: 20,000 × 1.10 = $22,000.", "Year 1: 20,000 × 1.10 = $22,000."),
          t("Año 2: 22,000 × 1.10 = $24,200.", "Year 2: 22,000 × 1.10 = $24,200."),
          t("Año 3: 24,200 × 1.10 = $26,620.", "Year 3: 24,200 × 1.10 = $26,620."),
          t("Con la fórmula: 20,000 × (1.10)³ = 20,000 × 1.331 = $26,620.", "With the formula: 20,000 × (1.10)³ = 20,000 × 1.331 = $26,620."),
        ],
        result: t(
          "Tendrás $26,620. Con interés simple serían 20,000 × (1 + 0.10 × 3) = $26,000: el compuesto da $620 más.",
          "You will have $26,620. With simple interest it would be 20,000 × (1 + 0.10 × 3) = $26,000: compound gives $620 more.",
        ),
      },
      {
        title: t("¿Cuál tasa es mejor?", "Which rate is better?"),
        problem: t(
          "Un banco A ofrece 12 % anual capitalizable mensualmente y un banco B 12.5 % anual capitalizable una vez al año. ¿Cuál paga más a un ahorrador?",
          "Bank A offers 12% per year compounded monthly and bank B offers 12.5% per year compounded once a year. Which pays a saver more?",
        ),
        steps: [
          t("Banco A: tasa mensual = 12 % ÷ 12 = 1 % = 0.01.", "Bank A: monthly rate = 12% ÷ 12 = 1% = 0.01."),
          t("Tasa efectiva A = (1.01)¹² − 1 = 1.126825 − 1 ≈ 12.68 %.", "Effective rate A = (1.01)¹² − 1 = 1.126825 − 1 ≈ 12.68%."),
          t("Banco B capitaliza una vez: su tasa efectiva es 12.50 %.", "Bank B compounds once: its effective rate is 12.50%."),
        ],
        result: t(
          "El banco A paga más (≈ 12.68 % efectivo contra 12.50 %), aunque su tasa anunciada parezca menor. Compara siempre tasas efectivas.",
          "Bank A pays more (≈ 12.68% effective versus 12.50%), even though its advertised rate looks lower. Always compare effective rates.",
        ),
      },
    ],
    keyPoints: [
      t("Tasa y plazo deben estar en la misma unidad de tiempo.", "Rate and term must be in the same time unit."),
      t("Interés simple: I = P × i × t; crece en línea recta.", "Simple interest: I = P × i × t; it grows in a straight line."),
      t("Interés compuesto: M = P × (1 + i)ⁿ; genera interés sobre interés.", "Compound interest: M = P × (1 + i)ⁿ; it earns interest on interest."),
      t("La tasa efectiva supera a la nominal cuando se capitaliza más de una vez al año.", "The effective rate exceeds the nominal rate when compounding more than once a year."),
      t("Para comparar opciones, usa tasas efectivas anuales.", "To compare options, use effective annual rates."),
    ],
    normativeNote: NOTE_RATES,
    exerciseIds: ['FIN-02-E1', 'FIN-02-E2', 'FIN-02-E3', 'FIN-02-E4', 'FIN-02-E6'],
  },

  // ───────────────────────────── FIN-03 ─────────────────────────────
  {
    id: 'FIN-03',
    level: 4,
    topicIds: ['FIN.3'],
    title: t("Valor del dinero en el tiempo", "Time value of money"),
    summary: t(
      "Un peso hoy vale más que un peso mañana; por eso, para comparar cantidades de fechas distintas, se llevan todas a la misma fecha con valor futuro o valor presente.",
      "A peso today is worth more than a peso tomorrow; so, to compare amounts on different dates, you bring them all to the same date using future value or present value.",
    ),
    minutes: 11,
    objectives: [
      t("Explicar por qué el dinero tiene un valor distinto según la fecha.", "Explain why money has a different value depending on the date."),
      t("Calcular el valor futuro y el valor presente de una cantidad.", "Compute the future value and the present value of an amount."),
      t("Calcular el valor presente de una serie de pagos iguales (anualidad).", "Compute the present value of a series of equal payments (annuity)."),
      t("Comparar alternativas con montos en fechas diferentes.", "Compare alternatives with amounts on different dates."),
    ],
    theory: [
      {
        heading: t("¿Hoy o dentro de un año?", "Today or in a year?"),
        body: [
          t(
            "Si te ofrecen $10,000 hoy o $10,000 dentro de un año, casi todos elegimos hoy. Esa intuición tiene nombre: **valor del dinero en el tiempo**. Hay tres razones.",
            "If you are offered $10,000 today or $10,000 a year from now, almost everyone picks today. That intuition has a name: the **time value of money**. There are three reasons.",
          ),
          t(
            "Primero, el **costo de oportunidad**: el dinero que tienes hoy puedes invertirlo y tener más dentro de un año. Segundo, la **inflación**: con el tiempo los precios suben y el mismo billete compra menos tortillas. Tercero, el **riesgo**: una promesa de pago futuro puede no cumplirse.",
            "First, **opportunity cost**: money you have today can be invested so you have more in a year. Second, **inflation**: over time prices rise and the same bill buys fewer tortillas. Third, **risk**: a promise of future payment may not be kept.",
          ),
          t(
            "Por eso **no se pueden sumar ni comparar directamente** pesos de fechas distintas. Antes hay que moverlos a una misma fecha usando una tasa, llamada **tasa de descuento** o costo de oportunidad. Mini ejemplo: si puedes ganar 10 % anual, $10,000 hoy equivalen a $11,000 dentro de un año.",
            "That is why pesos from different dates **cannot be added or compared directly**. First you must move them to the same date using a rate, called the **discount rate** or opportunity cost. Mini example: if you can earn 10% a year, $10,000 today is equivalent to $11,000 a year from now.",
          ),
        ],
        bullets: [
          t("Costo de oportunidad: lo que dejas de ganar por no invertir.", "Opportunity cost: what you give up by not investing."),
          t("Inflación: pérdida del poder de compra.", "Inflation: loss of purchasing power."),
          t("Riesgo: incertidumbre de recibir el pago futuro.", "Risk: uncertainty about receiving the future payment."),
        ],
      },
      {
        heading: t("Llevar y traer dinero", "Moving money through time"),
        body: [
          t(
            "El **valor futuro** (VF) responde: \"si invierto esto hoy, ¿cuánto tendré después?\". Es el interés compuesto que ya conoces: VF = VP × (1 + i)ⁿ. Llevar dinero hacia adelante se llama **capitalizar**.",
            "**Future value** (FV) answers: \"if I invest this today, how much will I have later?\". It is the compound interest you already know: FV = PV × (1 + i)ⁿ. Moving money forward is called **compounding**.",
          ),
          t(
            "El **valor presente** (VP) hace lo contrario: \"¿cuánto vale hoy un monto que recibiré después?\". Se divide en lugar de multiplicar: VP = VF ÷ (1 + i)ⁿ. Traer dinero hacia hoy se llama **descontar**.",
            "**Present value** (PV) does the opposite: \"how much is an amount I will receive later worth today?\". You divide instead of multiply: PV = FV ÷ (1 + i)ⁿ. Bringing money back to today is called **discounting**.",
          ),
          t(
            "Dos reglas útiles: a **mayor tasa** de descuento, **menor** valor presente; y a **más años** de espera, también **menor** valor presente. Mini ejemplo: $11,000 dentro de un año, a 10 %, valen hoy 11,000 ÷ 1.10 = $10,000.",
            "Two useful rules: the **higher the discount rate**, the **lower** the present value; and the **more years** of waiting, the **lower** the present value too. Mini example: $11,000 a year from now, at 10%, is worth 11,000 ÷ 1.10 = $10,000 today.",
          ),
        ],
        formulas: [
          {
            name: t("Valor futuro (llevar dinero hacia adelante)", "Future value (moving money forward)"),
            expression: "VF = VP × (1 + i)ⁿ",
            variables: [
              { symbol: "VF", meaning: t("Valor futuro: cuánto tendrás al final, en pesos.", "Future value: how much you will have at the end, in pesos.") },
              { symbol: "VP", meaning: t("Valor presente: el dinero que tienes hoy, en pesos.", "Present value: the money you have today, in pesos.") },
              { symbol: "i", meaning: t("La tasa por periodo, en decimal.", "The rate per period, as a decimal.") },
              { symbol: "n", meaning: t("El número de periodos (por ejemplo, años).", "The number of periods (for example, years).") },
            ],
            steps: [
              t("Súmale 1 a la tasa en decimal: 5 % → 1.05.", "Add 1 to the rate as a decimal: 5% → 1.05."),
              t("Elévalo a n multiplicándolo por sí mismo n veces.", "Raise it to n by multiplying it by itself n times."),
              t("Multiplica el resultado por el valor presente.", "Multiply the result by the present value."),
            ],
            example: t(
              "Ahorras $8,000 a 5 % anual compuesto por 3 años. 1.05 × 1.05 × 1.05 = 1.157625. VF = $8,000 × 1.157625 = **$9,261.00**.",
              "You save $8,000 at 5% compounded annually for 3 years. 1.05 × 1.05 × 1.05 = 1.157625. FV = $8,000 × 1.157625 = **$9,261.00**.",
            ),
            mistake: t(
              "Usar interés simple (sumar 5 % tres veces = 15 %) en lugar de compuesto.",
              "Using simple interest (adding 5% three times = 15%) instead of compound.",
            ),
          },
          {
            name: t("Valor presente (traer dinero a hoy)", "Present value (bringing money to today)"),
            expression: "VP = VF ÷ (1 + i)ⁿ",
            variables: [
              { symbol: "VP", meaning: t("Lo que vale hoy un monto que recibirás después, en pesos.", "What an amount you will receive later is worth today, in pesos.") },
              { symbol: "VF", meaning: t("El monto que recibirás en el futuro, en pesos.", "The amount you will receive in the future, in pesos.") },
              { symbol: "i", meaning: t("La tasa de descuento por periodo (lo que podrías ganar en otra opción), en decimal.", "The discount rate per period (what you could earn elsewhere), as a decimal.") },
              { symbol: "n", meaning: t("Cuántos periodos faltan para recibir el dinero.", "How many periods remain until you receive the money.") },
            ],
            steps: [
              t("Calcula el factor (1 + i)ⁿ.", "Compute the factor (1 + i)ⁿ."),
              t("Divide el monto futuro entre ese factor.", "Divide the future amount by that factor."),
              t("Si comparas opciones, compara los valores presentes, ya en la misma fecha (hoy).", "If comparing options, compare the present values, now on the same date (today)."),
            ],
            example: t(
              "Te pagarán $15,000 dentro de 3 años y tu tasa es 8 % anual. (1.08)³ = 1.259712. VP = $15,000 ÷ 1.259712 ≈ **$11,907.48**.",
              "You will be paid $15,000 in 3 years and your rate is 8% a year. (1.08)³ = 1.259712. PV = $15,000 ÷ 1.259712 ≈ **$11,907.48**.",
            ),
            interpret: t(
              "El valor presente siempre es menor que el monto futuro (con tasa positiva). Entre más alta la tasa o más lejos el pago, menor el valor presente.",
              "Present value is always less than the future amount (with a positive rate). The higher the rate or the further away the payment, the lower the present value.",
            ),
            mistake: t(
              "Multiplicar en lugar de dividir, o restar un porcentaje simple (por ejemplo, quitar 24 %) en vez de dividir entre el factor.",
              "Multiplying instead of dividing, or subtracting a simple percentage (for example, removing 24%) instead of dividing by the factor.",
            ),
          },
        ],
      },
      {
        heading: t("Pagos iguales cada periodo", "Equal payments every period"),
        body: [
          t(
            "Una **anualidad** es una serie de pagos **iguales** hechos cada periodo durante un plazo fijo: las mensualidades de un auto, la renta de un local o un ahorro mensual fijo. Aunque se llame \"anualidad\", el periodo puede ser mes, bimestre o año.",
            "An **annuity** is a series of **equal** payments made each period for a fixed term: car installments, a store's rent or a fixed monthly saving. Although it is called an \"annuity\", the period can be a month, two months or a year.",
          ),
          t(
            "Para saber cuánto vale hoy toda la serie, podrías descontar cada pago por separado y sumarlos. La fórmula de la anualidad hace eso de un solo golpe (para pagos al **final** de cada periodo, que es el caso más común).",
            "To know what the whole series is worth today, you could discount each payment separately and add them up. The annuity formula does that in one step (for payments at the **end** of each period, the most common case).",
          ),
          t(
            "Mini ejemplo: 3 pagos de $10,000 al final de cada año, a 10 %: 9,090.91 + 8,264.46 + 7,513.15 = $24,868.52. Fíjate que vale menos que los $30,000 que suman los pagos sin descontar.",
            "Mini example: 3 payments of $10,000 at the end of each year, at 10%: 9,090.91 + 8,264.46 + 7,513.15 = $24,868.52. Note it is worth less than the $30,000 the undiscounted payments add up to.",
          ),
        ],
        formulas: [
          {
            name: t("Valor presente de una anualidad (pagos iguales al final de cada periodo)", "Present value of an annuity (equal payments at the end of each period)"),
            expression: "VP anualidad = Pago × [1 − (1 + i)⁻ⁿ] ÷ i",
            variables: [
              { symbol: "Pago", meaning: t("El monto de cada pago igual, en pesos.", "The amount of each equal payment, in pesos.") },
              { symbol: "i", meaning: t("La tasa por periodo, en decimal (mismo periodo que los pagos).", "The rate per period, as a decimal (same period as the payments).") },
              { symbol: "n", meaning: t("El número de pagos.", "The number of payments.") },
              { symbol: "(1 + i)⁻ⁿ", meaning: t("Es 1 ÷ (1 + i)ⁿ: lo que vale hoy $1 que recibirás en el último periodo.", "It is 1 ÷ (1 + i)ⁿ: what $1 received in the last period is worth today.") },
            ],
            steps: [
              t("Calcula (1 + i)ⁿ y luego 1 ÷ ese número: es (1 + i)⁻ⁿ.", "Compute (1 + i)ⁿ and then 1 ÷ that number: that is (1 + i)⁻ⁿ."),
              t("Réstale ese resultado a 1 y divide entre i: es el factor de anualidad.", "Subtract that result from 1 and divide by i: that is the annuity factor."),
              t("Multiplica el pago por el factor.", "Multiply the payment by the factor."),
            ],
            example: t(
              "5 pagos anuales de $2,000 al 6 %. (1.06)⁵ ≈ 1.338226, así que (1.06)⁻⁵ ≈ 0.747258. Factor: (1 − 0.747258) ÷ 0.06 ≈ 4.212364. VP = $2,000 × 4.212364 ≈ **$8,424.73**.",
              "5 annual payments of $2,000 at 6%. (1.06)⁵ ≈ 1.338226, so (1.06)⁻⁵ ≈ 0.747258. Factor: (1 − 0.747258) ÷ 0.06 ≈ 4.212364. PV = $2,000 × 4.212364 ≈ **$8,424.73**.",
            ),
            interpret: t(
              "El resultado siempre es menor que la suma simple de los pagos ($10,000 en el ejemplo), porque los pagos lejanos valen menos hoy.",
              "The result is always less than the simple sum of the payments ($10,000 in the example), because distant payments are worth less today.",
            ),
            mistake: t(
              "Usar una tasa anual con pagos mensuales. Si los pagos son mensuales, la tasa y n también deben ser mensuales.",
              "Using an annual rate with monthly payments. If the payments are monthly, the rate and n must be monthly too.",
            ),
          },
        ],
      },
    ],
    examples: [
      {
        title: t("¿Contado hoy o más dinero después?", "Cash today or more money later?"),
        problem: t(
          "Te ofrecen por tu camioneta $50,000 hoy o $60,000 dentro de 2 años. Si puedes invertir a 9 % anual compuesto (tasa hipotética), ¿qué conviene?",
          "You are offered $50,000 today for your van or $60,000 in 2 years. If you can invest at 9% compounded annually (hypothetical rate), which is better?",
        ),
        steps: [
          t("Factor: (1.09)² = 1.1881.", "Factor: (1.09)² = 1.1881."),
          t("VP de la oferta futura: 60,000 ÷ 1.1881 ≈ $50,500.80.", "PV of the future offer: 60,000 ÷ 1.1881 ≈ $50,500.80."),
          t("Comparamos en la misma fecha (hoy): $50,500.80 contra $50,000.", "Compare on the same date (today): $50,500.80 versus $50,000."),
        ],
        result: t(
          "La oferta a 2 años vale unos $500.80 más en pesos de hoy, pero la ventaja es pequeña: si hay riesgo de que no te paguen, el contado puede ser mejor.",
          "The 2-year offer is worth about $500.80 more in today's pesos, but the advantage is small: if there is a risk of not being paid, cash today may be better.",
        ),
      },
      {
        title: t("Valor hoy de unas mensualidades", "Today's value of some installments"),
        problem: t(
          "Un cliente te pagará 4 pagos anuales de $5,000 al final de cada año. Con una tasa de 8 % anual, ¿cuánto vale hoy esa cobranza?",
          "A customer will pay you 4 annual payments of $5,000 at the end of each year. At an 8% annual rate, what is that collection worth today?",
        ),
        steps: [
          t("(1.08)⁴ = 1.36048896, así que (1.08)⁻⁴ ≈ 0.735030.", "(1.08)⁴ = 1.36048896, so (1.08)⁻⁴ ≈ 0.735030."),
          t("Factor de anualidad: (1 − 0.735030) ÷ 0.08 ≈ 3.312127.", "Annuity factor: (1 − 0.735030) ÷ 0.08 ≈ 3.312127."),
          t("VP = 5,000 × 3.312127 ≈ $16,560.63.", "PV = 5,000 × 3.312127 ≈ $16,560.63."),
        ],
        result: t(
          "Los $20,000 que suman los pagos valen hoy unos $16,560.63.",
          "The $20,000 the payments add up to is worth about $16,560.63 today.",
        ),
      },
    ],
    keyPoints: [
      t("Un peso hoy vale más por costo de oportunidad, inflación y riesgo.", "A peso today is worth more because of opportunity cost, inflation and risk."),
      t("Solo se comparan montos llevados a la misma fecha.", "Only amounts brought to the same date can be compared."),
      t("VF = VP × (1 + i)ⁿ; VP = VF ÷ (1 + i)ⁿ.", "FV = PV × (1 + i)ⁿ; PV = FV ÷ (1 + i)ⁿ."),
      t("Más tasa o más plazo implican menor valor presente.", "A higher rate or longer term means a lower present value."),
      t("Una anualidad es una serie de pagos iguales; su VP es menor que la suma simple de los pagos.", "An annuity is a series of equal payments; its PV is less than the simple sum of the payments."),
    ],
    normativeNote: NOTE_TVM,
    exerciseIds: ['FIN-03-E1', 'FIN-03-E2', 'FIN-03-E3', 'FIN-03-E4', 'FIN-03-E5'],
  },

  // ───────────────────────────── FIN-04 ─────────────────────────────
  {
    id: 'FIN-04',
    level: 4,
    topicIds: ['FIN.4'],
    title: t("Análisis e interpretación de estados financieros", "Financial statement analysis and interpretation"),
    summary: t(
      "Analizar estados financieros es convertir sus cifras en historias: con el análisis vertical ves el peso de cada partida y con el horizontal cómo cambió de un año a otro.",
      "Analyzing financial statements turns their figures into stories: vertical analysis shows the weight of each item and horizontal analysis shows how it changed from one year to the next.",
    ),
    minutes: 11,
    objectives: [
      t("Identificar qué pregunta responde cada estado financiero básico.", "Identify which question each basic financial statement answers."),
      t("Aplicar el análisis vertical (porcentajes integrales).", "Apply vertical analysis (common-size percentages)."),
      t("Aplicar el análisis horizontal (variaciones entre periodos).", "Apply horizontal analysis (changes between periods)."),
      t("Interpretar señales de alerta en los resultados del análisis.", "Interpret warning signs in the analysis results."),
    ],
    theory: [
      {
        heading: t("Cuatro reportes, cuatro preguntas", "Four reports, four questions"),
        body: [
          t(
            "Los **estados financieros** son los reportes que resumen la vida económica de una empresa. Para el análisis importan sobre todo cuatro, y cada uno responde una pregunta distinta.",
            "**Financial statements** are the reports that summarize a company's economic life. For analysis four matter most, and each answers a different question.",
          ),
          t(
            "El **estado de situación financiera** (balance general) es una \"foto\" en una fecha: qué tiene la empresa (**activos**), qué debe (**pasivos**) y qué es de los dueños (**capital contable**). El **estado de resultados** es una \"película\" de un periodo: ingresos, costos, gastos y la utilidad o pérdida.",
            "The **statement of financial position** (balance sheet) is a \"photo\" at a date: what the company has (**assets**), what it owes (**liabilities**) and what belongs to the owners (**equity**). The **income statement** is a \"movie\" of a period: revenue, costs, expenses and the profit or loss.",
          ),
          t(
            "El **estado de flujos de efectivo** muestra de dónde vino y a dónde fue el dinero (operación, inversión y financiamiento). El **estado de cambios en el capital contable** explica por qué cambió lo que es de los dueños: aportaciones, utilidades, dividendos. Mini ejemplo: para saber si una papelería puede pagar su deuda bancaria del próximo mes, empiezas por el balance y el flujo de efectivo, no solo por la utilidad.",
            "The **cash flow statement** shows where money came from and where it went (operating, investing and financing). The **statement of changes in equity** explains why the owners' part changed: contributions, profits, dividends. Mini example: to know whether a stationery store can pay next month's bank debt, you start with the balance sheet and the cash flow statement, not just profit.",
          ),
        ],
        bullets: [
          t("Situación financiera: ¿qué tengo y qué debo hoy?", "Financial position: what do I have and owe today?"),
          t("Resultados: ¿gané o perdí en el periodo?", "Income statement: did I earn or lose in the period?"),
          t("Flujos de efectivo: ¿de dónde vino y a dónde fue el dinero?", "Cash flows: where did money come from and go?"),
          t("Cambios en el capital: ¿por qué cambió la parte de los dueños?", "Changes in equity: why did the owners' part change?"),
        ],
      },
      {
        heading: t("¿En qué se va cada peso?", "Where does each peso go?"),
        body: [
          t(
            "El **análisis vertical** compara cada partida contra una **cifra base del mismo estado y del mismo periodo**. En el estado de resultados la base suele ser las **ventas** (100 %); en el balance, el **activo total** (100 %). El resultado se llama **porcentaje integral**.",
            "**Vertical analysis** compares each item against a **base figure from the same statement and period**. In the income statement the base is usually **sales** (100%); in the balance sheet, **total assets** (100%). The result is called a **common-size percentage**.",
          ),
          t(
            "Sirve para ver la **estructura**: qué parte de cada peso vendido se va en costo, cuánto en gastos y cuánto queda como utilidad. También permite comparar empresas de tamaños distintos, porque todo queda en porcentajes.",
            "It shows the **structure**: how much of each peso sold goes to cost, how much to expenses and how much is left as profit. It also lets you compare companies of different sizes, because everything is in percentages.",
          ),
          t(
            "Mini ejemplo: ventas $500,000, costo de ventas $300,000. Costo / ventas = 60 %: de cada peso vendido, 60 centavos se van en el costo de la mercancía.",
            "Mini example: sales $500,000, cost of sales $300,000. Cost / sales = 60%: of each peso sold, 60 cents go to the cost of the goods.",
          ),
        ],
        formulas: [
          {
            name: t("Porcentaje integral (análisis vertical)", "Common-size percentage (vertical analysis)"),
            expression: "Porcentaje integral = Partida ÷ Cifra base × 100",
            variables: [
              { symbol: "Partida", meaning: t("La cifra que quieres analizar (costo de ventas, inventarios, utilidad bruta…), en pesos.", "The figure you want to analyze (cost of sales, inventory, gross profit…), in pesos.") },
              { symbol: "Cifra base", meaning: t("Ventas, si es el estado de resultados; activo total, si es el balance. En pesos.", "Sales, for the income statement; total assets, for the balance sheet. In pesos.") },
              { symbol: "Porcentaje integral", meaning: t("Qué parte de la base representa la partida, en %.", "What share of the base the item represents, in %.") },
            ],
            steps: [
              t("Elige la base: ventas en el estado de resultados o activo total en el balance.", "Choose the base: sales on the income statement or total assets on the balance sheet."),
              t("Si la partida es una utilidad, calcúlala primero (por ejemplo, utilidad bruta = ventas − costo de ventas).", "If the item is a profit, compute it first (for example, gross profit = sales − cost of sales)."),
              t("Divide la partida entre la base y multiplica por 100.", "Divide the item by the base and multiply by 100."),
            ],
            example: t(
              "Una tienda de mascotas vende $360,000 y tiene gastos de operación de $72,000. $72,000 ÷ $360,000 = 0.20 × 100 = **20 %**: de cada peso vendido, 20 centavos se van en gastos de operación.",
              "A pet store sells $360,000 and has operating expenses of $72,000. $72,000 ÷ $360,000 = 0.20 × 100 = **20%**: of each peso sold, 20 cents go to operating expenses.",
            ),
            mistake: t(
              "Dividir al revés (base ÷ partida) o usar como base el costo de ventas en lugar de las ventas.",
              "Dividing the other way around (base ÷ item) or using cost of sales as the base instead of sales.",
            ),
          },
        ],
      },
      {
        heading: t("¿Qué creció más rápido?", "What grew faster?"),
        body: [
          t(
            "El **análisis horizontal** compara **la misma partida en dos o más periodos** y mide cuánto cambió, en pesos y en porcentaje. Responde: ¿qué creció, qué bajó y a qué ritmo?",
            "**Horizontal analysis** compares **the same item across two or more periods** and measures how much it changed, in pesos and in percentage. It answers: what grew, what fell and at what pace?",
          ),
          t(
            "Lo valioso es **comparar ritmos**. Si las ventas crecen 10 % pero las cuentas por cobrar crecen 40 %, los clientes están tardando más en pagar. Si los gastos crecen más rápido que las ventas, el margen se está comiendo. Los números no dan la respuesta final: **generan preguntas** que hay que investigar.",
            "The value lies in **comparing paces**. If sales grow 10% but accounts receivable grow 40%, customers are taking longer to pay. If expenses grow faster than sales, the margin is being eaten. The numbers do not give the final answer: they **raise questions** to investigate.",
          ),
          t(
            "Mini ejemplo: ventas de $400,000 a $460,000 (+15 %) y gastos de operación de $80,000 a $100,000 (+25 %). Los gastos crecen más rápido que las ventas: conviene revisar en qué se está gastando.",
            "Mini example: sales from $400,000 to $460,000 (+15%) and operating expenses from $80,000 to $100,000 (+25%). Expenses grow faster than sales: it is worth reviewing what the money is being spent on.",
          ),
        ],
        formulas: [
          {
            name: t("Variación entre años (análisis horizontal)", "Year-over-year change (horizontal analysis)"),
            expression: "Variación en pesos = Año actual − Año anterior   ·   Variación % = (Año actual − Año anterior) ÷ Año anterior × 100",
            variables: [
              { symbol: "Año actual", meaning: t("El valor de la partida en el periodo más reciente, en pesos.", "The item's value in the most recent period, in pesos.") },
              { symbol: "Año anterior", meaning: t("El valor de la misma partida en el periodo anterior (la base), en pesos.", "The same item's value in the previous period (the base), in pesos.") },
              { symbol: "Variación %", meaning: t("Cuánto creció (positivo) o bajó (negativo), en %.", "How much it grew (positive) or fell (negative), in %.") },
            ],
            steps: [
              t("Resta: año actual − año anterior. Es la variación en pesos.", "Subtract: current year − previous year. That is the change in pesos."),
              t("Divide esa diferencia entre el año anterior.", "Divide that difference by the previous year."),
              t("Multiplica por 100 para tenerlo en %.", "Multiply by 100 to get it in %."),
            ],
            example: t(
              "Las ventas de una tortillería pasaron de $250,000 a $290,000. Variación: $290,000 − $250,000 = $40,000. $40,000 ÷ $250,000 = 0.16 × 100 = **16 %** de aumento.",
              "A tortilla shop's sales went from $250,000 to $290,000. Change: $290,000 − $250,000 = $40,000. $40,000 ÷ $250,000 = 0.16 × 100 = **16%** increase.",
            ),
            interpret: t(
              "Compara ritmos: si una partida de riesgo (clientes, gastos) crece más rápido que las ventas, es una señal para investigar.",
              "Compare paces: if a risky item (receivables, expenses) grows faster than sales, it is a sign to investigate.",
            ),
            mistake: t(
              "Dividir entre el año actual en lugar del año anterior.",
              "Dividing by the current year instead of the previous year.",
            ),
          },
        ],
      },
    ],
    examples: [
      {
        title: t("Estado de resultados en porcentajes", "Income statement in percentages"),
        problem: t(
          "Una distribuidora de abarrotes tiene ventas por $500,000, costo de ventas de $300,000 y gastos de operación de $120,000. Haz el análisis vertical.",
          "A grocery distributor has sales of $500,000, cost of sales of $300,000 and operating expenses of $120,000. Do the vertical analysis.",
        ),
        steps: [
          t("Ventas = base = 100 %.", "Sales = base = 100%."),
          t("Costo de ventas: 300,000 ÷ 500,000 = 60 %. Utilidad bruta: 500,000 − 300,000 = $200,000 = 40 %.", "Cost of sales: 300,000 ÷ 500,000 = 60%. Gross profit: 500,000 − 300,000 = $200,000 = 40%."),
          t("Gastos de operación: 120,000 ÷ 500,000 = 24 %.", "Operating expenses: 120,000 ÷ 500,000 = 24%."),
          t("Utilidad de operación: 200,000 − 120,000 = $80,000 = 16 %.", "Operating profit: 200,000 − 120,000 = $80,000 = 16%."),
        ],
        result: t(
          "De cada peso vendido, 60 centavos son costo, 24 son gastos y quedan 16 centavos de utilidad de operación.",
          "Of each peso sold, 60 cents are cost, 24 are expenses and 16 cents remain as operating profit.",
        ),
      },
      {
        title: t("Ventas contra cuentas por cobrar", "Sales versus accounts receivable"),
        problem: t(
          "Una empresa vendió $1,000,000 el año pasado y $1,100,000 este año. Sus cuentas por cobrar pasaron de $150,000 a $210,000. ¿Qué indica el análisis horizontal?",
          "A company sold $1,000,000 last year and $1,100,000 this year. Its accounts receivable went from $150,000 to $210,000. What does horizontal analysis indicate?",
        ),
        steps: [
          t("Ventas: (1,100,000 − 1,000,000) ÷ 1,000,000 = 10 %.", "Sales: (1,100,000 − 1,000,000) ÷ 1,000,000 = 10%."),
          t("Cuentas por cobrar: (210,000 − 150,000) ÷ 150,000 = 40 %.", "Accounts receivable: (210,000 − 150,000) ÷ 150,000 = 40%."),
          t("Comparamos ritmos: lo que falta por cobrar crece 4 veces más rápido que las ventas.", "Compare paces: what is still to be collected grows 4 times faster than sales."),
        ],
        result: t(
          "Señal de alerta: los clientes pagan más lento o se dio crédito con poco control. Hay que revisar la cobranza.",
          "Warning sign: customers are paying more slowly or credit was granted with little control. Collections must be reviewed.",
        ),
      },
    ],
    keyPoints: [
      t("Balance = foto en una fecha; resultados = película de un periodo.", "Balance sheet = photo at a date; income statement = movie of a period."),
      t("El flujo de efectivo muestra el dinero real; el estado de cambios en el capital, la parte de los dueños.", "The cash flow statement shows real money; the statement of changes in equity, the owners' part."),
      t("Vertical: cada partida contra una base del mismo periodo (ventas o activo total).", "Vertical: each item against a base from the same period (sales or total assets)."),
      t("Horizontal: la misma partida entre periodos, en pesos y en porcentaje.", "Horizontal: the same item across periods, in pesos and in percentage."),
      t("Interpretar es comparar ritmos y hacer preguntas, no solo calcular.", "Interpreting means comparing paces and asking questions, not just computing."),
    ],
    normativeNote: NOTE_NIF,
    exerciseIds: ['FIN-04-E1', 'FIN-04-E2', 'FIN-04-E3', 'FIN-04-E4', 'FIN-04-E5'],
  },

  // ───────────────────────────── FIN-05 ─────────────────────────────
  {
    id: 'FIN-05',
    level: 4,
    topicIds: ['FIN.5'],
    title: t("Razones financieras", "Financial ratios"),
    summary: t(
      "Las razones financieras dividen una cifra entre otra para medir, de forma rápida, la liquidez, el endeudamiento, la eficiencia y la rentabilidad de una empresa.",
      "Financial ratios divide one figure by another to quickly measure a company's liquidity, leverage, efficiency and profitability.",
    ),
    minutes: 11,
    objectives: [
      t("Calcular e interpretar razones de liquidez: circulante y prueba ácida.", "Compute and interpret liquidity ratios: current ratio and quick ratio."),
      t("Calcular e interpretar razones de endeudamiento.", "Compute and interpret leverage ratios."),
      t("Calcular margen neto, ROA, ROE y días de cobro.", "Compute net margin, ROA, ROE and days sales outstanding."),
      t("Interpretar una razón comparándola con la industria y con años anteriores.", "Interpret a ratio by comparing it with the industry and prior years."),
    ],
    theory: [
      {
        heading: t("¿Alcanza para pagar pronto?", "Enough to pay soon?"),
        body: [
          t(
            "Una **razón financiera** es una división entre dos cifras de los estados financieros que dice algo útil. Solo, un número como \"$300,000 de deuda\" dice poco; dividido entre lo que la empresa tiene para pagarla, dice mucho.",
            "A **financial ratio** is a division between two figures from the financial statements that tells something useful. Alone, a number like \"$300,000 of debt\" says little; divided by what the company has to pay it, it says a lot.",
          ),
          t(
            "La **liquidez** es la capacidad de pagar lo que vence pronto. La **razón circulante** divide el **activo circulante** (efectivo, clientes, inventarios: lo que se vuelve dinero en menos de un año) entre el **pasivo circulante** (lo que se debe pagar en menos de un año). Un resultado de 2 significa $2 disponibles por cada $1 que vence.",
            "**Liquidity** is the ability to pay what comes due soon. The **current ratio** divides **current assets** (cash, receivables, inventory: what turns into money within a year) by **current liabilities** (what must be paid within a year). A result of 2 means $2 available for each $1 coming due.",
          ),
          t(
            "La **prueba ácida** es más estricta: quita los **inventarios**, porque venderlos puede tardar. Mini ejemplo: activo circulante $300,000, inventario $120,000, pasivo circulante $150,000. Circulante = 2.0; prueba ácida = (300,000 − 120,000) ÷ 150,000 = 1.2.",
            "The **quick ratio** (acid test) is stricter: it removes **inventory**, because selling it may take time. Mini example: current assets $300,000, inventory $120,000, current liabilities $150,000. Current ratio = 2.0; quick ratio = (300,000 − 120,000) ÷ 150,000 = 1.2.",
          ),
        ],
        formulas: [
          {
            name: t("Razón circulante", "Current ratio"),
            expression: "Razón circulante = AC ÷ PC",
            variables: [
              { symbol: "AC", meaning: t("Activo circulante: efectivo, clientes e inventarios (lo que se vuelve dinero en menos de un año), en pesos.", "Current assets: cash, receivables and inventory (what turns into money within a year), in pesos.") },
              { symbol: "PC", meaning: t("Pasivo circulante: lo que se debe pagar en menos de un año, en pesos.", "Current liabilities: what must be paid within a year, in pesos.") },
            ],
            steps: [
              t("Toma el activo circulante total.", "Take total current assets."),
              t("Divídelo entre el pasivo circulante. El resultado se lee en \"veces\".", "Divide it by current liabilities. The result is read in \"times\"."),
            ],
            example: t(
              "Una farmacia tiene AC de $360,000 y PC de $200,000. Razón circulante: $360,000 ÷ $200,000 = **1.8 veces**: $1.80 por cada $1 que vence pronto.",
              "A pharmacy has CA of $360,000 and CL of $200,000. Current ratio: $360,000 ÷ $200,000 = **1.8 times**: $1.80 for each $1 coming due soon.",
            ),
            interpret: t(
              "Menor que 1: no alcanza para pagar lo que vence pronto. Muy alto tampoco es siempre bueno: puede haber dinero o inventario ocioso.",
              "Below 1: not enough to pay what comes due soon. Very high is not always good either: there may be idle cash or inventory.",
            ),
          },
          {
            name: t("Prueba ácida", "Quick ratio (acid test)"),
            expression: "Prueba ácida = (AC − Inventarios) ÷ PC",
            variables: [
              { symbol: "AC", meaning: t("Activo circulante, en pesos.", "Current assets, in pesos.") },
              { symbol: "Inventarios", meaning: t("Mercancía en bodega; se quita porque venderla puede tardar. En pesos.", "Goods in stock; removed because selling them may take time. In pesos.") },
              { symbol: "PC", meaning: t("Pasivo circulante, en pesos.", "Current liabilities, in pesos.") },
            ],
            steps: [
              t("Resta los inventarios al activo circulante.", "Subtract inventory from current assets."),
              t("Divide el resultado entre el pasivo circulante.", "Divide the result by current liabilities."),
            ],
            example: t(
              "La misma farmacia tiene $150,000 de inventario. ($360,000 − $150,000) ÷ $200,000 = $210,000 ÷ $200,000 = **1.05 veces**.",
              "The same pharmacy has $150,000 of inventory. ($360,000 − $150,000) ÷ $200,000 = $210,000 ÷ $200,000 = **1.05 times**.",
            ),
            interpret: t(
              "Si es menor que 1, la empresa depende de vender su mercancía para pagar sus deudas próximas.",
              "If it is below 1, the company depends on selling its goods to pay its upcoming debts.",
            ),
            mistake: t(
              "Restar el inventario al pasivo en lugar de al activo circulante.",
              "Subtracting inventory from liabilities instead of from current assets.",
            ),
          },
        ],
      },
      {
        heading: t("¿Quién pagó lo que tienes?", "Who paid for what you own?"),
        body: [
          t(
            "Las **razones de endeudamiento** (o apalancamiento) miden qué parte de la empresa se financia con dinero prestado. La más común es **pasivo total ÷ activo total**: si da 40 %, de cada $100 de activos, $40 se pagaron con deuda y $60 con dinero de los dueños.",
            "**Leverage ratios** measure what part of the company is financed with borrowed money. The most common is **total liabilities ÷ total assets**: if it is 40%, of every $100 of assets, $40 was paid with debt and $60 with owners' money.",
          ),
          t(
            "Otra es **pasivo total ÷ capital contable**, que compara directamente lo que aportan los acreedores contra lo que aportan los dueños. La deuda no es mala en sí: puede impulsar el crecimiento. Pero **más deuda = más riesgo**, porque los intereses y pagos se deben cubrir aunque las ventas bajen.",
            "Another is **total liabilities ÷ equity**, which directly compares what creditors provide against what owners provide. Debt is not bad in itself: it can fuel growth. But **more debt = more risk**, because interest and payments must be covered even if sales fall.",
          ),
          t(
            "Mini ejemplo: activo total $800,000 y pasivo total $320,000. Endeudamiento = 320,000 ÷ 800,000 = 40 %; pasivo/capital = 320,000 ÷ 480,000 ≈ 0.67.",
            "Mini example: total assets $800,000 and total liabilities $320,000. Debt ratio = 320,000 ÷ 800,000 = 40%; liabilities/equity = 320,000 ÷ 480,000 ≈ 0.67.",
          ),
        ],
        formulas: [
          {
            name: t("Razón de endeudamiento", "Debt ratio"),
            expression: "Endeudamiento = Pasivo total ÷ Activo total × 100",
            variables: [
              { symbol: "Pasivo total", meaning: t("Todo lo que la empresa debe, a corto y largo plazo, en pesos.", "Everything the company owes, short and long term, in pesos.") },
              { symbol: "Activo total", meaning: t("Todo lo que la empresa tiene, en pesos.", "Everything the company has, in pesos.") },
              { symbol: "Endeudamiento", meaning: t("Qué parte de los activos se pagó con deuda, en %.", "What share of the assets was paid for with debt, in %.") },
            ],
            steps: [
              t("Divide el pasivo total entre el activo total.", "Divide total liabilities by total assets."),
              t("Multiplica por 100 para tenerlo en %.", "Multiply by 100 to get it in %."),
            ],
            example: t(
              "Una constructora tiene activo total de $1,000,000 y pasivo total de $550,000. $550,000 ÷ $1,000,000 = 0.55 × 100 = **55 %**: de cada $100 de activos, $55 se financiaron con deuda.",
              "A builder has total assets of $1,000,000 and total liabilities of $550,000. $550,000 ÷ $1,000,000 = 0.55 × 100 = **55%**: of every $100 of assets, $55 was financed with debt.",
            ),
            interpret: t(
              "Entre más alto, más riesgo: hay que pagar intereses aunque bajen las ventas. Lo que falta para 100 % es lo que pusieron los dueños.",
              "The higher it is, the more risk: interest must be paid even if sales fall. What is left to 100% is what the owners put in.",
            ),
            mistake: t(
              "Dividir entre el capital contable: eso es otra razón (pasivo ÷ capital), no el endeudamiento sobre activos.",
              "Dividing by equity: that is a different ratio (liabilities ÷ equity), not the debt-to-assets ratio.",
            ),
          },
        ],
      },
      {
        heading: t("¿Cuánto gana y qué tan rápido?", "How much it earns, how fast"),
        body: [
          t(
            "Las **razones de rentabilidad** miden cuánto gana la empresa en relación con lo que vende o con lo que usa. El **margen neto** = utilidad neta ÷ ventas. El **ROA** (rendimiento sobre activos) = utilidad neta ÷ activo total. El **ROE** (rendimiento sobre capital) = utilidad neta ÷ capital contable: lo que ganan los dueños por cada peso que tienen invertido.",
            "**Profitability ratios** measure how much the company earns relative to what it sells or uses. **Net margin** = net income ÷ sales. **ROA** (return on assets) = net income ÷ total assets. **ROE** (return on equity) = net income ÷ equity: what owners earn for each peso they have invested.",
          ),
          t(
            "Las **razones de actividad** miden qué tan rápido se mueven los recursos. Los **días de cobro** dicen en cuántos días, en promedio, pagan los clientes: cuentas por cobrar ÷ ventas a crédito × 360. La **rotación de inventario** dice cuántas veces al año se vende y repone: costo de ventas ÷ inventario.",
            "**Activity ratios** measure how fast resources move. **Days sales outstanding** tell how many days, on average, customers take to pay: accounts receivable ÷ credit sales × 360. **Inventory turnover** tells how many times a year inventory is sold and replaced: cost of sales ÷ inventory.",
          ),
          t(
            "Una razón sola no basta: compárala con **años anteriores** y con **empresas del mismo giro**. Mini ejemplo: utilidad neta $60,000, ventas $600,000, activo $500,000, capital $300,000 → margen 10 %, ROA 12 %, ROE 20 %.",
            "A ratio alone is not enough: compare it with **prior years** and with **companies in the same line of business**. Mini example: net income $60,000, sales $600,000, assets $500,000, equity $300,000 → margin 10%, ROA 12%, ROE 20%.",
          ),
        ],
        formulas: [
          {
            name: t("Margen neto, ROA y ROE", "Net margin, ROA and ROE"),
            expression: "Margen neto = Utilidad neta ÷ Ventas × 100   ·   ROA = Utilidad neta ÷ Activo total × 100   ·   ROE = Utilidad neta ÷ Capital contable × 100",
            variables: [
              { symbol: "Utilidad neta", meaning: t("Lo que ganó la empresa al final, después de todo, en pesos.", "What the company earned in the end, after everything, in pesos.") },
              { symbol: "Ventas", meaning: t("Lo vendido en el periodo, en pesos.", "What was sold in the period, in pesos.") },
              { symbol: "Activo total", meaning: t("Todo lo que tiene la empresa, en pesos.", "Everything the company has, in pesos.") },
              { symbol: "Capital contable", meaning: t("Lo que pusieron y han dejado los dueños en la empresa, en pesos.", "What the owners have put and left in the company, in pesos.") },
              { symbol: "ROA / ROE", meaning: t("Rendimiento sobre activos / rendimiento sobre capital, en %.", "Return on assets / return on equity, in %.") },
            ],
            steps: [
              t("Usa siempre la utilidad neta arriba de la división.", "Always put net income on top of the division."),
              t("Divide entre la base que corresponde: ventas para el margen, activo total para el ROA, capital contable para el ROE.", "Divide by the matching base: sales for margin, total assets for ROA, equity for ROE."),
              t("Multiplica cada resultado por 100 para tenerlo en %.", "Multiply each result by 100 to get it in %."),
            ],
            example: t(
              "Una cafetería: utilidad neta $54,000, ventas $900,000, activo $600,000, capital $360,000. Margen: $54,000 ÷ $900,000 = **6 %**. ROA: $54,000 ÷ $600,000 = **9 %**. ROE: $54,000 ÷ $360,000 = **15 %**.",
              "A coffee shop: net income $54,000, sales $900,000, assets $600,000, equity $360,000. Margin: $54,000 ÷ $900,000 = **6%**. ROA: $54,000 ÷ $600,000 = **9%**. ROE: $54,000 ÷ $360,000 = **15%**.",
            ),
            interpret: t(
              "Margen: cuántos centavos quedan de cada peso vendido. ROA: cuánto rinden todos los recursos. ROE: cuánto ganan los dueños por su dinero; si es mayor que el ROA, parte de los activos se financia con deuda.",
              "Margin: how many cents remain from each peso sold. ROA: how much all the resources yield. ROE: how much owners earn on their money; if it is higher than ROA, part of the assets is financed with debt.",
            ),
            mistake: t(
              "Calcular el ROE dividiendo entre el activo total en lugar del capital contable.",
              "Computing ROE by dividing by total assets instead of equity.",
            ),
          },
          {
            name: t("Días de cobro", "Days sales outstanding"),
            expression: "Días de cobro = Cuentas por cobrar ÷ Ventas a crédito × 360",
            variables: [
              { symbol: "Cuentas por cobrar", meaning: t("Lo que te deben tus clientes al cierre, en pesos.", "What your customers owe you at the close, in pesos.") },
              { symbol: "Ventas a crédito", meaning: t("Las ventas del año que se hicieron a crédito, en pesos.", "The year's sales made on credit, in pesos.") },
              { symbol: "360", meaning: t("Los días del año que se usan por convención (algunos analistas usan 365).", "The days in the year used by convention (some analysts use 365).") },
            ],
            steps: [
              t("Divide las cuentas por cobrar entre las ventas a crédito.", "Divide accounts receivable by credit sales."),
              t("Multiplica el resultado por 360: son los días que en promedio tardan en pagarte.", "Multiply the result by 360: that is the average number of days customers take to pay you."),
            ],
            example: t(
              "Una imprenta tiene $60,000 por cobrar y vendió $600,000 a crédito en el año. $60,000 ÷ $600,000 = 0.10; 0.10 × 360 = **36 días**.",
              "A print shop has $60,000 receivable and sold $600,000 on credit during the year. $60,000 ÷ $600,000 = 0.10; 0.10 × 360 = **36 days**.",
            ),
            interpret: t(
              "Compáralo con el plazo que das: si das 30 días de crédito y el resultado es 36, tus clientes se están atrasando.",
              "Compare it with the term you give: if you give 30 days of credit and the result is 36, your customers are paying late.",
            ),
            mistake: t(
              "Dividir al revés (ventas ÷ cuentas por cobrar): eso da la rotación de cuentas por cobrar, no los días.",
              "Dividing the other way (sales ÷ receivables): that gives receivables turnover, not days.",
            ),
          },
        ],
        bullets: [
          t("Margen neto = Utilidad neta ÷ Ventas.", "Net margin = Net income ÷ Sales."),
          t("ROA = Utilidad neta ÷ Activo total.", "ROA = Net income ÷ Total assets."),
          t("ROE = Utilidad neta ÷ Capital contable.", "ROE = Net income ÷ Equity."),
          t("Días de cobro = Cuentas por cobrar ÷ Ventas a crédito × 360.", "Days sales outstanding = Accounts receivable ÷ Credit sales × 360."),
          t("Rotación de inventario = Costo de ventas ÷ Inventario.", "Inventory turnover = Cost of sales ÷ Inventory."),
        ],
      },
    ],
    examples: [
      {
        title: t("Liquidez de una ferretería", "A hardware store's liquidity"),
        problem: t(
          "Una ferretería tiene activo circulante de $300,000 (de los cuales $120,000 son inventario) y pasivo circulante de $150,000. Calcula e interpreta su liquidez.",
          "A hardware store has current assets of $300,000 (of which $120,000 is inventory) and current liabilities of $150,000. Compute and interpret its liquidity.",
        ),
        steps: [
          t("Razón circulante: 300,000 ÷ 150,000 = 2.0 veces.", "Current ratio: 300,000 ÷ 150,000 = 2.0 times."),
          t("Prueba ácida: (300,000 − 120,000) ÷ 150,000 = 180,000 ÷ 150,000 = 1.2 veces.", "Quick ratio: (300,000 − 120,000) ÷ 150,000 = 180,000 ÷ 150,000 = 1.2 times."),
          t("Interpretación: aun sin vender inventario, tiene $1.20 por cada $1 que vence pronto.", "Interpretation: even without selling inventory, it has $1.20 for each $1 coming due soon."),
        ],
        result: t("Liquidez cómoda: circulante 2.0 y prueba ácida 1.2.", "Comfortable liquidity: current ratio 2.0 and quick ratio 1.2."),
      },
      {
        title: t("Rentabilidad para los dueños", "Profitability for the owners"),
        problem: t(
          "Un restaurante tuvo utilidad neta de $60,000, ventas de $600,000, activo total de $500,000 y capital contable de $300,000. Calcula margen neto, ROA y ROE.",
          "A restaurant had net income of $60,000, sales of $600,000, total assets of $500,000 and equity of $300,000. Compute net margin, ROA and ROE.",
        ),
        steps: [
          t("Margen neto: 60,000 ÷ 600,000 = 10 %.", "Net margin: 60,000 ÷ 600,000 = 10%."),
          t("ROA: 60,000 ÷ 500,000 = 12 %.", "ROA: 60,000 ÷ 500,000 = 12%."),
          t("ROE: 60,000 ÷ 300,000 = 20 %.", "ROE: 60,000 ÷ 300,000 = 20%."),
        ],
        result: t(
          "El ROE (20 %) es mayor que el ROA (12 %) porque parte de los activos se financia con deuda: los dueños ganan sobre una base más chica.",
          "ROE (20%) is higher than ROA (12%) because part of the assets is financed with debt: the owners earn on a smaller base.",
        ),
      },
    ],
    keyPoints: [
      t("Las razones se agrupan en liquidez, endeudamiento, actividad y rentabilidad.", "Ratios are grouped into liquidity, leverage, activity and profitability."),
      t("Razón circulante = AC ÷ PC; la prueba ácida quita los inventarios.", "Current ratio = CA ÷ CL; the quick ratio removes inventory."),
      t("Endeudamiento = pasivo total ÷ activo total: más deuda, más riesgo.", "Debt ratio = total liabilities ÷ total assets: more debt, more risk."),
      t("ROE mide lo que ganan los dueños; ROA, lo que rinden todos los activos.", "ROE measures what owners earn; ROA, what all the assets yield."),
      t("Una razón solo tiene sentido comparada con años previos y con el sector.", "A ratio only makes sense compared with prior years and the industry."),
    ],
    normativeNote: NOTE_RATIOS,
    exerciseIds: ['FIN-05-E1', 'FIN-05-E2', 'FIN-05-E3', 'FIN-05-E4', 'FIN-05-E6'],
  },

  // ───────────────────────────── FIN-06 ─────────────────────────────
  {
    id: 'FIN-06',
    level: 4,
    topicIds: ['FIN.6'],
    title: t("Administración del capital de trabajo", "Working capital management"),
    summary: t(
      "Administrar el capital de trabajo es manejar efectivo, cobranza, inventarios y proveedores para que el negocio opere sin quedarse sin dinero y sin tener recursos ociosos.",
      "Managing working capital means handling cash, collections, inventory and suppliers so the business operates without running out of money and without idle resources.",
    ),
    minutes: 11,
    objectives: [
      t("Calcular el capital de trabajo y explicar qué significa.", "Compute working capital and explain what it means."),
      t("Calcular el ciclo de conversión del efectivo.", "Compute the cash conversion cycle."),
      t("Proponer acciones sobre cobranza, inventarios y proveedores para liberar efectivo.", "Propose actions on collections, inventory and suppliers to free up cash."),
    ],
    theory: [
      {
        heading: t("El colchón del día a día", "The day-to-day cushion"),
        body: [
          t(
            "El **capital de trabajo** son los recursos de corto plazo con los que la empresa opera día a día: efectivo, cuentas por cobrar a clientes e inventarios, menos lo que debe pagar pronto, como proveedores y sueldos por pagar.",
            "**Working capital** is the short-term resources the company uses to operate day to day: cash, accounts receivable and inventory, minus what it must pay soon, such as suppliers and wages payable.",
          ),
          t(
            "El **capital de trabajo neto** = activo circulante − pasivo circulante. Si es positivo, hay un colchón para operar. Si es negativo, la empresa depende de cobrar o vender muy rápido, o de conseguir financiamiento, para pagar lo que vence.",
            "**Net working capital** = current assets − current liabilities. If it is positive, there is a cushion to operate. If it is negative, the company depends on collecting or selling very fast, or on getting financing, to pay what comes due.",
          ),
          t(
            "Ojo: **más no siempre es mejor**. Un capital de trabajo enorme puede significar inventario que no se vende o clientes que no pagan: dinero \"dormido\" que no rinde. Mini ejemplo: activo circulante $500,000 y pasivo circulante $320,000 → capital de trabajo de $180,000.",
            "Careful: **more is not always better**. A huge working capital may mean inventory that does not sell or customers who do not pay: \"sleeping\" money that earns nothing. Mini example: current assets $500,000 and current liabilities $320,000 → working capital of $180,000.",
          ),
        ],
        formulas: [
          {
            name: t("Capital de trabajo neto", "Net working capital"),
            expression: "Capital de trabajo neto = Activo circulante − Pasivo circulante",
            variables: [
              { symbol: "Activo circulante", meaning: t("Efectivo, clientes e inventarios, en pesos.", "Cash, receivables and inventory, in pesos.") },
              { symbol: "Pasivo circulante", meaning: t("Lo que se debe pagar en menos de un año: proveedores, sueldos por pagar, préstamos que vencen este año. En pesos.", "What must be paid within a year: suppliers, wages payable, loans due this year. In pesos.") },
            ],
            steps: [
              t("Suma todo el activo circulante.", "Add up all current assets."),
              t("Suma todo el pasivo circulante.", "Add up all current liabilities."),
              t("Resta: activo circulante − pasivo circulante. El resultado va en pesos.", "Subtract: current assets − current liabilities. The result is in pesos."),
            ],
            example: t(
              "Una lavandería tiene activo circulante de $420,000 y pasivo circulante de $300,000. Capital de trabajo neto: $420,000 − $300,000 = **$120,000**.",
              "A laundry has current assets of $420,000 and current liabilities of $300,000. Net working capital: $420,000 − $300,000 = **$120,000**.",
            ),
            interpret: t(
              "Positivo: hay colchón para operar. Negativo: la empresa depende de cobrar o vender rápido, o de pedir prestado.",
              "Positive: there is a cushion to operate. Negative: the company depends on collecting or selling fast, or on borrowing.",
            ),
            mistake: t(
              "Dividir en lugar de restar: la división es la razón circulante (en veces), no el capital de trabajo (en pesos).",
              "Dividing instead of subtracting: the division is the current ratio (in times), not working capital (in pesos).",
            ),
          },
        ],
      },
      {
        heading: t("Los días del dinero atrapado", "Days your cash is stuck"),
        body: [
          t(
            "Imagina una tienda de ropa: compra prendas, las tiene en el aparador unos días, las vende a crédito y después cobra. Mientras tanto, también debe pagar al proveedor. El **ciclo de conversión del efectivo** (CCE) mide cuántos días pasa el dinero \"atrapado\" en la operación.",
            "Picture a clothing store: it buys garments, keeps them on display for some days, sells them on credit and then collects. Meanwhile, it must also pay the supplier. The **cash conversion cycle** (CCC) measures how many days money stays \"trapped\" in operations.",
          ),
          t(
            "Se suman los **días de inventario** (cuánto tarda en venderse la mercancía) y los **días de cobro** (cuánto tardan en pagar los clientes), y se restan los **días de pago** (cuánto tarda la empresa en pagar a proveedores). Ese tiempo que el proveedor te da es financiamiento gratuito.",
            "You add **days of inventory** (how long goods take to sell) and **days of collection** (how long customers take to pay), and subtract **days of payment** (how long the company takes to pay suppliers). The time the supplier gives you is free financing.",
          ),
          t(
            "Entre **más corto** el ciclo, menos dinero necesitas para operar. Mini ejemplo: 60 días de inventario + 45 de cobro − 30 de pago = 75 días que la empresa debe financiar con su propio dinero o con préstamos.",
            "The **shorter** the cycle, the less money you need to operate. Mini example: 60 days of inventory + 45 of collection − 30 of payment = 75 days the company must finance with its own money or with loans.",
          ),
        ],
        formulas: [
          {
            name: t("Días de inventario, de cobro y de pago", "Days of inventory, collection and payment"),
            expression: "Días de inventario = Inventario ÷ Costo de ventas × 360   ·   Días de cobro = Cuentas por cobrar ÷ Ventas a crédito × 360   ·   Días de pago = Proveedores ÷ Compras (o costo de ventas) × 360",
            variables: [
              { symbol: "Inventario", meaning: t("Mercancía en bodega al cierre, en pesos.", "Goods in stock at the close, in pesos.") },
              { symbol: "Costo de ventas", meaning: t("Lo que costó la mercancía vendida en el año, en pesos.", "What the goods sold during the year cost, in pesos.") },
              { symbol: "Cuentas por cobrar", meaning: t("Lo que te deben los clientes, en pesos.", "What customers owe you, in pesos.") },
              { symbol: "Ventas a crédito", meaning: t("Ventas del año hechas a crédito, en pesos.", "The year's credit sales, in pesos.") },
              { symbol: "Proveedores", meaning: t("Lo que tú debes a tus proveedores, en pesos.", "What you owe your suppliers, in pesos.") },
              { symbol: "Compras", meaning: t("Lo que compraste en el año; si no se da, se usa el costo de ventas. En pesos.", "What you bought during the year; if not given, cost of sales is used. In pesos.") },
              { symbol: "360", meaning: t("Días del año por convención.", "Days in the year by convention.") },
            ],
            steps: [
              t("Para cada uno, divide el saldo (inventario, clientes o proveedores) entre su cifra anual que le corresponde.", "For each one, divide the balance (inventory, receivables or payables) by its matching annual figure."),
              t("Multiplica por 360 para pasarlo a días.", "Multiply by 360 to turn it into days."),
              t("Usa costo de ventas para inventario y proveedores, y ventas a crédito para clientes.", "Use cost of sales for inventory and payables, and credit sales for receivables."),
            ],
            example: t(
              "Una zapatería: inventario $45,000, costo de ventas $540,000, clientes $80,000, ventas a crédito $720,000, proveedores $60,000. Inventario: $45,000 ÷ $540,000 × 360 = **30 días**. Cobro: $80,000 ÷ $720,000 × 360 = **40 días**. Pago: $60,000 ÷ $540,000 × 360 = **40 días**.",
              "A shoe store: inventory $45,000, cost of sales $540,000, receivables $80,000, credit sales $720,000, payables $60,000. Inventory: $45,000 ÷ $540,000 × 360 = **30 days**. Collection: $80,000 ÷ $720,000 × 360 = **40 days**. Payment: $60,000 ÷ $540,000 × 360 = **40 days**.",
            ),
            mistake: t(
              "Calcular los días de inventario con las ventas en lugar del costo de ventas: salen menos días de los reales.",
              "Computing inventory days with sales instead of cost of sales: you get fewer days than the real ones.",
            ),
          },
          {
            name: t("Ciclo de conversión del efectivo (CCE)", "Cash conversion cycle (CCC)"),
            expression: "CCE = Días de inventario + Días de cobro − Días de pago",
            variables: [
              { symbol: "Días de inventario", meaning: t("Cuánto tarda en venderse la mercancía.", "How long goods take to sell.") },
              { symbol: "Días de cobro", meaning: t("Cuánto tardan los clientes en pagarte.", "How long customers take to pay you.") },
              { symbol: "Días de pago", meaning: t("Cuánto tardas tú en pagar a tus proveedores.", "How long you take to pay your suppliers.") },
              { symbol: "CCE", meaning: t("Días que tu dinero pasa \"atrapado\" en la operación.", "Days your money stays \"trapped\" in operations.") },
            ],
            steps: [
              t("Suma los días de inventario y los días de cobro.", "Add days of inventory and days of collection."),
              t("Resta los días de pago: es el tiempo que el proveedor te financia gratis.", "Subtract days of payment: that is the time the supplier finances you for free."),
            ],
            example: t(
              "Una tienda tarda 50 días en vender, 30 en cobrar y paga a 20 días. CCE = 50 + 30 − 20 = **60 días**.",
              "A store takes 50 days to sell, 30 to collect and pays in 20 days. CCC = 50 + 30 − 20 = **60 days**.",
            ),
            interpret: t(
              "Entre más corto, menos dinero propio o prestado necesitas para operar. Si es negativo, tus proveedores financian toda tu operación.",
              "The shorter it is, the less own or borrowed money you need to operate. If it is negative, your suppliers finance your whole operation.",
            ),
            mistake: t(
              "Sumar los días de pago en lugar de restarlos.",
              "Adding the days of payment instead of subtracting them.",
            ),
          },
        ],
        bullets: [
          t("Días de inventario = Inventario ÷ Costo de ventas × 360.", "Days of inventory = Inventory ÷ Cost of sales × 360."),
          t("Días de cobro = Cuentas por cobrar ÷ Ventas a crédito × 360.", "Days of collection = Accounts receivable ÷ Credit sales × 360."),
          t("Días de pago = Proveedores ÷ Compras (o costo de ventas) × 360.", "Days of payment = Accounts payable ÷ Purchases (or cost of sales) × 360."),
        ],
      },
      {
        heading: t("Palancas para liberar efectivo", "Levers to free up cash"),
        body: [
          t(
            "Cada parte del ciclo tiene palancas. En **cobranza**: definir a quién dar crédito, recordar pagos antes del vencimiento y ofrecer un pequeño descuento por pronto pago. En **inventarios**: comprar según lo que realmente se vende y liquidar lo que no se mueve.",
            "Each part of the cycle has levers. In **collections**: decide who gets credit, remind customers before due dates and offer a small early-payment discount. In **inventory**: buy according to what actually sells and clear out what does not move.",
          ),
          t(
            "En **proveedores**: negociar plazos más largos sin dañar la relación ni perder descuentos que convengan. En **efectivo**: tener un presupuesto de caja semanal y un saldo mínimo para imprevistos, e invertir los excedentes temporales.",
            "With **suppliers**: negotiate longer terms without harming the relationship or losing worthwhile discounts. In **cash**: keep a weekly cash budget and a minimum balance for emergencies, and invest temporary surpluses.",
          ),
          t(
            "El reto es el **equilibrio entre liquidez y rentabilidad**: demasiado efectivo e inventario dan seguridad pero rinden poco; muy poco puede dejarte sin mercancía o sin dinero para pagar. Mini ejemplo: si una tienda baja sus días de cobro de 45 a 30, libera dinero equivalente a 15 días de ventas a crédito.",
            "The challenge is the **balance between liquidity and profitability**: too much cash and inventory give safety but earn little; too little can leave you without goods or without money to pay. Mini example: if a store cuts its collection days from 45 to 30, it frees money equivalent to 15 days of credit sales.",
          ),
        ],
      },
    ],
    examples: [
      {
        title: t("Capital de trabajo de una papelería", "A stationery store's working capital"),
        problem: t(
          "Una papelería tiene efectivo $80,000, clientes $170,000 e inventario $250,000. Debe $220,000 a proveedores y $100,000 de un préstamo que vence este año. ¿Cuál es su capital de trabajo neto?",
          "A stationery store has cash of $80,000, receivables of $170,000 and inventory of $250,000. It owes $220,000 to suppliers and $100,000 on a loan due this year. What is its net working capital?",
        ),
        steps: [
          t("Activo circulante: 80,000 + 170,000 + 250,000 = $500,000.", "Current assets: 80,000 + 170,000 + 250,000 = $500,000."),
          t("Pasivo circulante: 220,000 + 100,000 = $320,000.", "Current liabilities: 220,000 + 100,000 = $320,000."),
          t("Capital de trabajo neto: 500,000 − 320,000 = $180,000.", "Net working capital: 500,000 − 320,000 = $180,000."),
        ],
        result: t(
          "Tiene $180,000 de colchón, pero la mitad de su activo circulante es inventario: si no lo vende, el colchón es más frágil de lo que parece.",
          "It has a $180,000 cushion, but half of its current assets is inventory: if it does not sell, the cushion is more fragile than it seems.",
        ),
      },
      {
        title: t("Acortar el ciclo de conversión", "Shortening the conversion cycle"),
        problem: t(
          "Una tienda tiene 60 días de inventario, 45 de cobro y 30 de pago. Negocia con su proveedor pagar a 45 días y mejora su cobranza a 35 días. ¿Cuánto cambia su ciclo?",
          "A store has 60 days of inventory, 45 of collection and 30 of payment. It negotiates paying its supplier in 45 days and improves collections to 35 days. How much does its cycle change?",
        ),
        steps: [
          t("Ciclo inicial: 60 + 45 − 30 = 75 días.", "Initial cycle: 60 + 45 − 30 = 75 days."),
          t("Ciclo nuevo: 60 + 35 − 45 = 50 días.", "New cycle: 60 + 35 − 45 = 50 days."),
          t("Diferencia: 75 − 50 = 25 días menos.", "Difference: 75 − 50 = 25 fewer days."),
        ],
        result: t(
          "El dinero queda atrapado 25 días menos, así que la tienda necesita menos financiamiento para operar.",
          "Money stays trapped 25 fewer days, so the store needs less financing to operate.",
        ),
      },
    ],
    keyPoints: [
      t("Capital de trabajo neto = activo circulante − pasivo circulante.", "Net working capital = current assets − current liabilities."),
      t("Más capital de trabajo no siempre es mejor: puede haber recursos ociosos.", "More working capital is not always better: there may be idle resources."),
      t("CCE = días de inventario + días de cobro − días de pago.", "CCC = days of inventory + days of collection − days of payment."),
      t("Un ciclo más corto requiere menos financiamiento.", "A shorter cycle requires less financing."),
      t("Las palancas son cobranza, inventarios, proveedores y presupuesto de efectivo.", "The levers are collections, inventory, suppliers and the cash budget."),
    ],
    exerciseIds: ['FIN-06-E1', 'FIN-06-E2', 'FIN-06-E3', 'FIN-06-E4', 'FIN-06-E5'],
  },
]

export const exercises: Exercise[] = [
  // ═════════════════════════ FIN-01 ═════════════════════════
  {
    id: 'FIN-01-E1',
    level: 4,
    module: 'FIN-01',
    kind: 'mcq',
    flavor: 'concept',
    prompt: t(
      "¿Cuál es el objetivo principal de las finanzas corporativas?",
      "What is the main objective of corporate finance?",
    ),
    options: [
      { id: 'FIN-01-E1-a', text: t("Vender lo más posible cada año", "Sell as much as possible every year") },
      { id: 'FIN-01-E1-b', text: t("Pagar la menor cantidad de impuestos posible", "Pay as little tax as possible") },
      { id: 'FIN-01-E1-c', text: t("Crear valor para los dueños de forma sostenible", "Create value for the owners sustainably") },
      { id: 'FIN-01-E1-d', text: t("Evitar por completo cualquier deuda", "Avoid all debt completely") },
    ],
    correctOptionId: 'FIN-01-E1-c',
    explanation: t(
      "El objetivo es crear valor: que el negocio valga más para sus dueños ganando más de lo que cuesta el dinero que usa. Vender mucho no basta si no hay ganancia suficiente, y la deuda bien usada puede ayudar. Error común: confundir crecer en ventas con crear valor.",
      "The objective is to create value: make the business worth more for its owners by earning more than the money it uses costs. Selling a lot is not enough without sufficient profit, and well-used debt can help. Common mistake: confusing sales growth with value creation.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'finance-foundations',
  },
  {
    id: 'FIN-01-E2',
    level: 4,
    module: 'FIN-01',
    kind: 'classify',
    flavor: 'concept',
    prompt: t(
      "Clasifica cada acción según el tipo de decisión financiera que representa.",
      "Classify each action by the type of financial decision it represents.",
    ),
    categories: [
      { id: 'FIN-01-E2-c1', label: t("Inversión", "Investment") },
      { id: 'FIN-01-E2-c2', label: t("Financiamiento", "Financing") },
      { id: 'FIN-01-E2-c3', label: t("Dividendos", "Dividends") },
    ],
    items: [
      { id: 'FIN-01-E2-i1', label: t("Comprar un horno industrial para la panadería", "Buy an industrial oven for the bakery"), correctCategoryId: 'FIN-01-E2-c1' },
      { id: 'FIN-01-E2-i2', label: t("Pedir un crédito bancario a 3 años", "Take out a 3-year bank loan"), correctCategoryId: 'FIN-01-E2-c2' },
      { id: 'FIN-01-E2-i3', label: t("Repartir a los socios la mitad de la utilidad del año", "Pay the partners half of the year's profit"), correctCategoryId: 'FIN-01-E2-c3' },
      { id: 'FIN-01-E2-i4', label: t("Abrir una nueva sucursal", "Open a new branch"), correctCategoryId: 'FIN-01-E2-c1' },
      { id: 'FIN-01-E2-i5', label: t("Invitar a un nuevo socio que aporte dinero", "Bring in a new partner who contributes money"), correctCategoryId: 'FIN-01-E2-c2' },
      { id: 'FIN-01-E2-i6', label: t("Reinvertir toda la utilidad en vez de repartirla", "Reinvest all profit instead of paying it out"), correctCategoryId: 'FIN-01-E2-c3' },
    ],
    explanation: t(
      "Inversión es en qué se usa el dinero (horno, sucursal). Financiamiento es de dónde sale (crédito, nuevo socio). Dividendos es qué hacer con la utilidad: repartirla o reinvertirla. Error común: clasificar \"reinvertir la utilidad\" como inversión; la decisión de fondo es no repartir, por eso es de dividendos.",
      "Investment is what money is used on (oven, branch). Financing is where it comes from (loan, new partner). Dividends is what to do with profit: pay it out or reinvest it. Common mistake: classifying \"reinvest profit\" as investment; the underlying decision is not to pay out, so it is a dividend decision.",
    ),
    difficulty: 1,
    points: 15,
    competency: 'finance-foundations',
  },
  {
    id: 'FIN-01-E3',
    level: 4,
    module: 'FIN-01',
    kind: 'truefalse',
    flavor: 'concept',
    prompt: t(
      "Verdadero o falso: si una empresa reporta utilidad en el mes, necesariamente tiene más efectivo que al inicio del mes.",
      "True or false: if a company reports a profit for the month, it necessarily has more cash than at the start of the month.",
    ),
    answer: false,
    explanation: t(
      "Falso. La utilidad registra ventas aunque no se hayan cobrado, y puede haber pagos que no son gasto del mes (como abonar a un préstamo o comprar equipo). Por eso una empresa con utilidad puede tener menos efectivo. Error común: usar \"utilidad\" y \"dinero en caja\" como sinónimos.",
      "False. Profit records sales even if not yet collected, and there may be payments that are not expenses of the month (like paying down a loan or buying equipment). So a profitable company can have less cash. Common mistake: using \"profit\" and \"cash on hand\" as synonyms.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'finance-foundations',
  },
  {
    id: 'FIN-01-E4',
    level: 4,
    module: 'FIN-01',
    kind: 'numeric',
    flavor: 'case',
    context: t(
      "Luis compra una acción en $250. Durante el año recibe $5 de dividendo y al final la vende en $270.",
      "Luis buys a share for $250. During the year he receives a $5 dividend and at the end sells it for $270.",
    ),
    prompt: t(
      "¿Cuál fue el rendimiento total de Luis en el año, en porcentaje?",
      "What was Luis's total return for the year, as a percentage?",
    ),
    answer: 10,
    unit: '%',
    decimals: 2,
    tolerance: { abs: 0.05 },
    explanation: t(
      "Ganancia por precio: 270 − 250 = $20. Más dividendo: 20 + 5 = $25. Rendimiento: 25 ÷ 250 = 0.10 = 10 %. Error común: olvidar el dividendo y responder 8 %, o dividir entre el precio de venta.",
      "Price gain: 270 − 250 = $20. Plus dividend: 20 + 5 = $25. Return: 25 ÷ 250 = 0.10 = 10%. Common mistake: forgetting the dividend and answering 8%, or dividing by the selling price.",
    ),
    difficulty: 1,
    points: 15,
    competency: 'finance-foundations',
  },
  {
    id: 'FIN-01-E5',
    level: 4,
    module: 'FIN-01',
    kind: 'multi',
    flavor: 'concept',
    prompt: t(
      "¿Cuáles de estas opciones son fuentes de financiamiento para una empresa? Selecciona todas las correctas.",
      "Which of these options are sources of financing for a company? Select all that apply.",
    ),
    options: [
      { id: 'FIN-01-E5-a', text: t("Un préstamo bancario", "A bank loan") },
      { id: 'FIN-01-E5-b', text: t("Aportaciones de dinero de los socios", "Money contributed by the partners") },
      { id: 'FIN-01-E5-c', text: t("Comprar una máquina nueva", "Buying a new machine") },
      { id: 'FIN-01-E5-d', text: t("Crédito que otorga un proveedor para pagar a 30 días", "Credit granted by a supplier to pay in 30 days") },
      { id: 'FIN-01-E5-e', text: t("Pagar la nómina de la quincena", "Paying the biweekly payroll") },
    ],
    correctOptionIds: ['FIN-01-E5-a', 'FIN-01-E5-b', 'FIN-01-E5-d'],
    explanation: t(
      "El préstamo bancario y el crédito de proveedor son deuda; las aportaciones de los socios son capital. Comprar una máquina es una inversión (un uso del dinero) y pagar la nómina es un gasto de operación. Error común: pensar que solo los bancos financian; los proveedores también lo hacen al dar plazo.",
      "The bank loan and supplier credit are debt; partner contributions are equity. Buying a machine is an investment (a use of money) and paying payroll is an operating expense. Common mistake: thinking only banks provide financing; suppliers do too when they give payment terms.",
    ),
    difficulty: 1,
    points: 15,
    competency: 'finance-foundations',
  },
  {
    id: 'FIN-01-E6',
    level: 4,
    module: 'FIN-01',
    kind: 'fields',
    flavor: 'case',
    context: t(
      "Una imprenta vende $100,000 en el mes, pero solo cobra el 40 %; el resto lo cobrará el mes siguiente. Sus gastos del mes suman $70,000 y los paga todos en efectivo.",
      "A print shop sells $100,000 in the month but only collects 40%; it will collect the rest next month. Its expenses for the month total $70,000 and it pays them all in cash.",
    ),
    prompt: t(
      "Calcula la utilidad del mes, el efectivo cobrado y el flujo de efectivo neto del mes (usa signo negativo si el efectivo baja).",
      "Compute the month's profit, the cash collected and the month's net cash flow (use a negative sign if cash goes down).",
    ),
    fields: [
      { id: 'f1', label: t("Utilidad del mes", "Profit for the month"), answer: 30000, unit: 'MXN', tolerance: { abs: 0.5 } },
      { id: 'f2', label: t("Efectivo cobrado", "Cash collected"), answer: 40000, unit: 'MXN', tolerance: { abs: 0.5 } },
      { id: 'f3', label: t("Flujo de efectivo neto", "Net cash flow"), answer: -30000, unit: 'MXN', tolerance: { abs: 0.5 } },
    ],
    explanation: t(
      "Utilidad = 100,000 − 70,000 = $30,000. Cobrado = 40 % × 100,000 = $40,000. Flujo neto = 40,000 − 70,000 = −$30,000. Gana en papel, pero su caja baja. Error común: suponer que el flujo de efectivo es igual a la utilidad.",
      "Profit = 100,000 − 70,000 = $30,000. Collected = 40% × 100,000 = $40,000. Net flow = 40,000 − 70,000 = −$30,000. It earns on paper, but its cash drops. Common mistake: assuming cash flow equals profit.",
    ),
    difficulty: 2,
    points: 20,
    competency: 'finance-foundations',
  },

  // ═════════════════════════ FIN-02 ═════════════════════════
  {
    id: 'FIN-02-E1',
    level: 4,
    module: 'FIN-02',
    kind: 'numeric',
    flavor: 'case',
    context: t(
      "Una tienda de materiales presta $80,000 a un cliente a una tasa de 15 % anual simple, por 6 meses.",
      "A building supply store lends $80,000 to a customer at a 15% simple annual rate, for 6 months.",
    ),
    prompt: t(
      "¿Cuánto interés, en pesos, cobrará la tienda al final del plazo?",
      "How much interest, in pesos, will the store collect at the end of the term?",
    ),
    answer: 6000,
    unit: 'MXN',
    decimals: 2,
    tolerance: { abs: 0.5 },
    explanation: t(
      "I = P × i × t = 80,000 × 0.15 × (6/12) = 80,000 × 0.15 × 0.5 = $6,000. Error común: usar t = 6 en lugar de 0.5 años, lo que daría $72,000 de interés: la tasa es anual, así que el plazo debe ir en años.",
      "I = P × i × t = 80,000 × 0.15 × (6/12) = 80,000 × 0.15 × 0.5 = $6,000. Common mistake: using t = 6 instead of 0.5 years, which would give $72,000 of interest: the rate is annual, so the term must be in years.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'financial-math',
  },
  {
    id: 'FIN-02-E2',
    level: 4,
    module: 'FIN-02',
    kind: 'numeric',
    flavor: 'case',
    context: t(
      "Inviertes $10,000 a una tasa hipotética de 8 % anual con capitalización anual, durante 2 años.",
      "You invest $10,000 at a hypothetical 8% annual rate compounded annually, for 2 years.",
    ),
    prompt: t(
      "¿Cuál será el monto final de tu inversión, en pesos?",
      "What will the final amount of your investment be, in pesos?",
    ),
    answer: 11664,
    unit: 'MXN',
    decimals: 2,
    tolerance: { abs: 0.5 },
    explanation: t(
      "M = P × (1 + i)ⁿ = 10,000 × (1.08)² = 10,000 × 1.1664 = $11,664. Error común: calcular con interés simple (10,000 × 1.16 = $11,600) y olvidar el interés que ganan los intereses del primer año ($64).",
      "M = P × (1 + i)ⁿ = 10,000 × (1.08)² = 10,000 × 1.1664 = $11,664. Common mistake: computing with simple interest (10,000 × 1.16 = $11,600) and forgetting the interest earned by the first year's interest ($64).",
    ),
    difficulty: 1,
    points: 15,
    competency: 'financial-math',
  },
  {
    id: 'FIN-02-E3',
    level: 4,
    module: 'FIN-02',
    kind: 'formula',
    flavor: 'concept',
    prompt: t(
      "Completa la fórmula del interés simple.",
      "Complete the simple interest formula.",
    ),
    template: 'I = {{b1}} × {{b2}} × {{b3}}',
    blanks: [
      {
        id: 'b1',
        options: [
          { id: 'FIN-02-E3-b1-a', text: t("Capital (P)", "Principal (P)") },
          { id: 'FIN-02-E3-b1-b', text: t("Monto final (M)", "Final amount (M)") },
          { id: 'FIN-02-E3-b1-c', text: t("Inflación", "Inflation") },
        ],
        correctOptionId: 'FIN-02-E3-b1-a',
      },
      {
        id: 'b2',
        options: [
          { id: 'FIN-02-E3-b2-a', text: t("Número de pagos", "Number of payments") },
          { id: 'FIN-02-E3-b2-b', text: t("Tasa de interés en decimal (i)", "Interest rate as a decimal (i)") },
          { id: 'FIN-02-E3-b2-c', text: t("Utilidad neta", "Net income") },
        ],
        correctOptionId: 'FIN-02-E3-b2-b',
      },
      {
        id: 'b3',
        options: [
          { id: 'FIN-02-E3-b3-a', text: t("Tasa efectiva", "Effective rate") },
          { id: 'FIN-02-E3-b3-b', text: t("Capital al cuadrado", "Principal squared") },
          { id: 'FIN-02-E3-b3-c', text: t("Tiempo en la misma unidad que la tasa (t)", "Time in the same unit as the rate (t)") },
        ],
        correctOptionId: 'FIN-02-E3-b3-c',
      },
    ],
    explanation: t(
      "Interés simple = capital × tasa × tiempo, con la tasa en decimal y el tiempo en la misma unidad que la tasa. Se multiplica por el capital original, no por el monto final. Error común: usar el monto final como base, lo que cobraría interés sobre interés.",
      "Simple interest = principal × rate × time, with the rate as a decimal and time in the same unit as the rate. It is multiplied by the original principal, not the final amount. Common mistake: using the final amount as the base, which would charge interest on interest.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'financial-math',
  },
  {
    id: 'FIN-02-E4',
    level: 4,
    module: 'FIN-02',
    kind: 'mcq',
    flavor: 'interpret',
    prompt: t(
      "Una inversión anuncia 12 % anual capitalizable mensualmente. ¿Qué pasa con su tasa efectiva anual?",
      "An investment advertises 12% per year compounded monthly. What happens to its effective annual rate?",
    ),
    options: [
      { id: 'FIN-02-E4-a', text: t("Es exactamente 12 %", "It is exactly 12%") },
      { id: 'FIN-02-E4-b', text: t("Es mayor que 12 %", "It is higher than 12%") },
      { id: 'FIN-02-E4-c', text: t("Es menor que 12 %", "It is lower than 12%") },
      { id: 'FIN-02-E4-d', text: t("Es 1 %, porque se paga cada mes", "It is 1%, because it is paid every month") },
    ],
    correctOptionId: 'FIN-02-E4-b',
    explanation: t(
      "Cada mes se gana 1 % y ese interés se suma al capital, así que el año siguiente gana interés sobre interés: (1.01)¹² − 1 ≈ 12.68 %, más que 12 %. El 1 % es la tasa mensual, no la anual. Error común: creer que la tasa anunciada (nominal) es lo que realmente se gana en el año.",
      "Each month 1% is earned and that interest is added to the principal, so it then earns interest on interest: (1.01)¹² − 1 ≈ 12.68%, more than 12%. The 1% is the monthly rate, not the annual one. Common mistake: believing the advertised (nominal) rate is what is really earned in the year.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'financial-math',
  },
  {
    id: 'FIN-02-E5',
    level: 4,
    module: 'FIN-02',
    kind: 'truefalse',
    flavor: 'concept',
    prompt: t(
      "Verdadero o falso: con la misma tasa y el mismo plazo de varios años, el interés compuesto produce un monto final mayor que el interés simple.",
      "True or false: with the same rate and the same multi-year term, compound interest produces a higher final amount than simple interest.",
    ),
    answer: true,
    explanation: t(
      "Verdadero. Desde el segundo periodo, el compuesto calcula intereses sobre el capital más los intereses ya ganados, mientras que el simple siempre usa el capital original. En un solo periodo dan lo mismo; después, el compuesto siempre queda arriba. Error común: pensar que la diferencia es mínima en plazos largos; en realidad crece cada año.",
      "True. From the second period on, compound interest is computed on principal plus interest already earned, while simple interest always uses the original principal. In a single period they are equal; after that, compound is always higher. Common mistake: thinking the difference is minimal over long terms; it actually grows every year.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'financial-math',
  },
  {
    id: 'FIN-02-E6',
    level: 4,
    module: 'FIN-02',
    kind: 'fields',
    flavor: 'case',
    context: t(
      "Marta tiene $30,000 para invertir 2 años. Le ofrecen dos opciones con la misma tasa hipotética de 12 % anual: una con interés simple y otra con interés compuesto anual.",
      "Marta has $30,000 to invest for 2 years. She is offered two options with the same hypothetical 12% annual rate: one with simple interest and one with annual compound interest.",
    ),
    prompt: t(
      "Calcula el monto final de cada opción y la diferencia entre ambas, en pesos.",
      "Compute the final amount of each option and the difference between them, in pesos.",
    ),
    fields: [
      { id: 'f1', label: t("Monto final con interés simple", "Final amount with simple interest"), answer: 37200, unit: 'MXN', tolerance: { abs: 0.5 } },
      { id: 'f2', label: t("Monto final con interés compuesto", "Final amount with compound interest"), answer: 37632, unit: 'MXN', tolerance: { abs: 0.5 } },
      { id: 'f3', label: t("Diferencia a favor del compuesto", "Difference in favor of compound"), answer: 432, unit: 'MXN', tolerance: { abs: 0.5 } },
    ],
    explanation: t(
      "Simple: 30,000 × (1 + 0.12 × 2) = 30,000 × 1.24 = $37,200. Compuesto: 30,000 × (1.12)² = 30,000 × 1.2544 = $37,632. Diferencia: 37,632 − 37,200 = $432, que es el interés del segundo año sobre los $3,600 del primero (3,600 × 0.12). Error común: elevar al cuadrado solo la tasa (0.12²) en vez de (1 + 0.12)².",
      "Simple: 30,000 × (1 + 0.12 × 2) = 30,000 × 1.24 = $37,200. Compound: 30,000 × (1.12)² = 30,000 × 1.2544 = $37,632. Difference: 37,632 − 37,200 = $432, which is the second year's interest on the first year's $3,600 (3,600 × 0.12). Common mistake: squaring only the rate (0.12²) instead of (1 + 0.12)².",
    ),
    difficulty: 2,
    points: 20,
    competency: 'financial-math',
  },

  // ═════════════════════════ FIN-03 ═════════════════════════
  {
    id: 'FIN-03-E1',
    level: 4,
    module: 'FIN-03',
    kind: 'multi',
    flavor: 'concept',
    prompt: t(
      "¿Por qué $10,000 hoy valen más que $10,000 dentro de un año? Selecciona todas las razones correctas.",
      "Why is $10,000 today worth more than $10,000 a year from now? Select all correct reasons.",
    ),
    options: [
      { id: 'FIN-03-E1-a', text: t("Puedes invertir el dinero de hoy y tener más después", "You can invest today's money and have more later") },
      { id: 'FIN-03-E1-b', text: t("La inflación reduce lo que compra el dinero con el tiempo", "Inflation reduces what money buys over time") },
      { id: 'FIN-03-E1-c', text: t("Existe el riesgo de que el pago futuro no se cumpla", "There is a risk the future payment will not be made") },
      { id: 'FIN-03-E1-d', text: t("Los billetes pierden validez legal cada año", "Banknotes lose legal validity every year") },
    ],
    correctOptionIds: ['FIN-03-E1-a', 'FIN-03-E1-b', 'FIN-03-E1-c'],
    explanation: t(
      "Las tres razones del valor del dinero en el tiempo son costo de oportunidad (invertir), inflación (poder de compra) y riesgo (incertidumbre de cobrar). Los billetes no caducan cada año. Error común: pensar solo en la inflación y olvidar el costo de oportunidad, que existe aunque los precios no suban.",
      "The three reasons for the time value of money are opportunity cost (investing), inflation (purchasing power) and risk (uncertainty of collecting). Banknotes do not expire every year. Common mistake: thinking only of inflation and forgetting opportunity cost, which exists even if prices do not rise.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'time-value-of-money',
  },
  {
    id: 'FIN-03-E2',
    level: 4,
    module: 'FIN-03',
    kind: 'numeric',
    flavor: 'case',
    context: t(
      "Un cliente promete pagarte $12,100 dentro de 2 años. Tu tasa de descuento es 10 % anual compuesto.",
      "A customer promises to pay you $12,100 in 2 years. Your discount rate is 10% compounded annually.",
    ),
    prompt: t(
      "¿Cuál es el valor presente de esa promesa de pago, en pesos?",
      "What is the present value of that promised payment, in pesos?",
    ),
    answer: 10000,
    unit: 'MXN',
    decimals: 2,
    tolerance: { abs: 0.5 },
    explanation: t(
      "VP = VF ÷ (1 + i)ⁿ = 12,100 ÷ (1.10)² = 12,100 ÷ 1.21 = $10,000. Error común: restar 20 % (12,100 × 0.80 = $9,680) en vez de dividir entre el factor compuesto.",
      "PV = FV ÷ (1 + i)ⁿ = 12,100 ÷ (1.10)² = 12,100 ÷ 1.21 = $10,000. Common mistake: subtracting 20% (12,100 × 0.80 = $9,680) instead of dividing by the compound factor.",
    ),
    difficulty: 1,
    points: 15,
    competency: 'time-value-of-money',
  },
  {
    id: 'FIN-03-E3',
    level: 4,
    module: 'FIN-03',
    kind: 'numeric',
    flavor: 'case',
    context: t(
      "Ahorras hoy $5,000 en un instrumento hipotético que paga 6 % anual compuesto y no retiras nada durante 3 años.",
      "You save $5,000 today in a hypothetical instrument paying 6% compounded annually and withdraw nothing for 3 years.",
    ),
    prompt: t(
      "¿Cuál será el valor futuro de tu ahorro al cabo de 3 años, en pesos?",
      "What will the future value of your savings be after 3 years, in pesos?",
    ),
    answer: 5955.08,
    unit: 'MXN',
    decimals: 2,
    tolerance: { abs: 0.5 },
    explanation: t(
      "VF = 5,000 × (1.06)³. (1.06)² = 1.1236 y 1.1236 × 1.06 = 1.191016. VF = 5,000 × 1.191016 = $5,955.08. Error común: usar interés simple, 5,000 × 1.18 = $5,900.",
      "FV = 5,000 × (1.06)³. (1.06)² = 1.1236 and 1.1236 × 1.06 = 1.191016. FV = 5,000 × 1.191016 = $5,955.08. Common mistake: using simple interest, 5,000 × 1.18 = $5,900.",
    ),
    difficulty: 1,
    points: 15,
    competency: 'time-value-of-money',
  },
  {
    id: 'FIN-03-E4',
    level: 4,
    module: 'FIN-03',
    kind: 'formula',
    flavor: 'concept',
    prompt: t(
      "Completa la fórmula para traer a valor presente un monto que recibirás en el futuro.",
      "Complete the formula to bring an amount you will receive in the future to present value.",
    ),
    template: 'VP = {{b1}} {{b2}} (1 + i)^{{b3}}',
    blanks: [
      {
        id: 'b1',
        options: [
          { id: 'FIN-03-E4-b1-a', text: t("VF (monto futuro)", "FV (future amount)") },
          { id: 'FIN-03-E4-b1-b', text: t("i (tasa)", "i (rate)") },
          { id: 'FIN-03-E4-b1-c', text: t("Pago de la anualidad", "Annuity payment") },
        ],
        correctOptionId: 'FIN-03-E4-b1-a',
      },
      {
        id: 'b2',
        options: [
          { id: 'FIN-03-E4-b2-a', text: t("×", "×") },
          { id: 'FIN-03-E4-b2-b', text: t("÷", "÷") },
          { id: 'FIN-03-E4-b2-c', text: t("+", "+") },
        ],
        correctOptionId: 'FIN-03-E4-b2-b',
      },
      {
        id: 'b3',
        options: [
          { id: 'FIN-03-E4-b3-a', text: t("n (número de periodos)", "n (number of periods)") },
          { id: 'FIN-03-E4-b3-b', text: t("2, siempre", "2, always") },
          { id: 'FIN-03-E4-b3-c', text: t("i (tasa)", "i (rate)") },
        ],
        correctOptionId: 'FIN-03-E4-b3-a',
      },
    ],
    explanation: t(
      "VP = VF ÷ (1 + i)ⁿ: para traer dinero del futuro a hoy se divide entre el factor de interés compuesto elevado al número de periodos. Multiplicar sería calcular un valor futuro. Error común: multiplicar en lugar de dividir y obtener un \"valor presente\" mayor que el monto futuro.",
      "PV = FV ÷ (1 + i)ⁿ: to bring money from the future to today you divide by the compound interest factor raised to the number of periods. Multiplying would compute a future value. Common mistake: multiplying instead of dividing and getting a \"present value\" larger than the future amount.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'time-value-of-money',
  },
  {
    id: 'FIN-03-E5',
    level: 4,
    module: 'FIN-03',
    kind: 'truefalse',
    flavor: 'interpret',
    prompt: t(
      "Verdadero o falso: si sube la tasa de descuento, el valor presente de un pago futuro fijo disminuye.",
      "True or false: if the discount rate rises, the present value of a fixed future payment decreases.",
    ),
    answer: true,
    explanation: t(
      "Verdadero. La tasa está en el denominador: VP = VF ÷ (1 + i)ⁿ. Si i sube, el divisor crece y el VP baja. Por ejemplo, $11,000 en un año valen $10,000 al 10 % pero solo unos $9,565.22 al 15 %. Error común: pensar que una tasa más alta \"hace valer más\" el dinero futuro.",
      "True. The rate is in the denominator: PV = FV ÷ (1 + i)ⁿ. If i rises, the divisor grows and PV falls. For example, $11,000 in one year is worth $10,000 at 10% but only about $9,565.22 at 15%. Common mistake: thinking a higher rate \"makes\" future money worth more.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'time-value-of-money',
  },
  {
    id: 'FIN-03-E6',
    level: 4,
    module: 'FIN-03',
    kind: 'fields',
    flavor: 'case',
    context: t(
      "Vendes un equipo usado. Opción A: un comprador paga $50,000 hoy. Opción B: otro comprador ofrece $60,000 dentro de 2 años. Puedes invertir a una tasa hipotética de 9 % anual compuesto.",
      "You are selling used equipment. Option A: a buyer pays $50,000 today. Option B: another buyer offers $60,000 in 2 years. You can invest at a hypothetical 9% compounded annually.",
    ),
    prompt: t(
      "Calcula el valor presente de la opción B y cuánto más vale B que A en pesos de hoy (redondea a centavos).",
      "Compute the present value of option B and how much more B is worth than A in today's pesos (round to cents).",
    ),
    fields: [
      { id: 'f1', label: t("Valor presente de la opción B", "Present value of option B"), answer: 50500.8, unit: 'MXN', tolerance: { abs: 1 } },
      { id: 'f2', label: t("Ventaja de B sobre A en pesos de hoy", "Advantage of B over A in today's pesos"), answer: 500.8, unit: 'MXN', tolerance: { abs: 1 } },
    ],
    explanation: t(
      "(1.09)² = 1.1881. VP de B = 60,000 ÷ 1.1881 ≈ $50,500.80. Ventaja: 50,500.80 − 50,000 = $500.80. B conviene un poco, siempre que el pago futuro sea seguro. Error común: comparar $60,000 contra $50,000 directamente y concluir que B vale $10,000 más.",
      "(1.09)² = 1.1881. PV of B = 60,000 ÷ 1.1881 ≈ $50,500.80. Advantage: 50,500.80 − 50,000 = $500.80. B is slightly better, as long as the future payment is safe. Common mistake: comparing $60,000 with $50,000 directly and concluding B is worth $10,000 more.",
    ),
    difficulty: 2,
    points: 20,
    competency: 'time-value-of-money',
  },

  // ═════════════════════════ FIN-04 ═════════════════════════
  {
    id: 'FIN-04-E1',
    level: 4,
    module: 'FIN-04',
    kind: 'classify',
    flavor: 'concept',
    prompt: t(
      "¿En qué estado financiero buscarías la respuesta a cada pregunta?",
      "In which financial statement would you look for the answer to each question?",
    ),
    categories: [
      { id: 'FIN-04-E1-c1', label: t("Estado de situación financiera", "Statement of financial position") },
      { id: 'FIN-04-E1-c2', label: t("Estado de resultados", "Income statement") },
      { id: 'FIN-04-E1-c3', label: t("Estado de flujos de efectivo", "Cash flow statement") },
      { id: 'FIN-04-E1-c4', label: t("Estado de cambios en el capital contable", "Statement of changes in equity") },
    ],
    items: [
      { id: 'FIN-04-E1-i1', label: t("¿Cuánto debe la empresa al 31 de diciembre?", "How much does the company owe as of December 31?"), correctCategoryId: 'FIN-04-E1-c1' },
      { id: 'FIN-04-E1-i2', label: t("¿Cuánto ganó o perdió en el año?", "How much did it earn or lose in the year?"), correctCategoryId: 'FIN-04-E1-c2' },
      { id: 'FIN-04-E1-i3', label: t("¿Cuánto dinero se usó para comprar maquinaria en el año?", "How much cash was used to buy machinery during the year?"), correctCategoryId: 'FIN-04-E1-c3' },
      { id: 'FIN-04-E1-i4', label: t("¿Cuántos dividendos se decretaron a los accionistas y cómo cambió su patrimonio?", "How much in dividends was declared to shareholders and how did their equity change?"), correctCategoryId: 'FIN-04-E1-c4' },
      { id: 'FIN-04-E1-i5', label: t("¿Cuál fue el costo de la mercancía vendida?", "What was the cost of goods sold?"), correctCategoryId: 'FIN-04-E1-c2' },
      { id: 'FIN-04-E1-i6', label: t("¿Cuánto inventario tiene en el almacén al cierre?", "How much inventory is in the warehouse at year-end?"), correctCategoryId: 'FIN-04-E1-c1' },
    ],
    explanation: t(
      "Saldos a una fecha (deudas, inventario) van en el estado de situación financiera. Ingresos, costos y utilidad del periodo, en el de resultados. El dinero pagado por maquinaria es una salida de efectivo de inversión, en el de flujos. Los dividendos y cambios en el patrimonio, en el de cambios en el capital. Error común: buscar el efectivo pagado en el estado de resultados, que no muestra compras de activos.",
      "Balances at a date (debts, inventory) go in the statement of financial position. Revenue, costs and profit for the period, in the income statement. Cash paid for machinery is an investing cash outflow, in the cash flow statement. Dividends and changes in equity, in the statement of changes in equity. Common mistake: looking for cash paid in the income statement, which does not show asset purchases.",
    ),
    difficulty: 1,
    points: 15,
    competency: 'statement-analysis',
  },
  {
    id: 'FIN-04-E2',
    level: 4,
    module: 'FIN-04',
    kind: 'numeric',
    flavor: 'case',
    context: t(
      "En el estado de situación financiera de una mueblería, el activo total es de $600,000 y los inventarios suman $150,000.",
      "In a furniture store's statement of financial position, total assets are $600,000 and inventory totals $150,000.",
    ),
    prompt: t(
      "Con análisis vertical, ¿qué porcentaje del activo total representan los inventarios?",
      "Using vertical analysis, what percentage of total assets does inventory represent?",
    ),
    answer: 25,
    unit: '%',
    decimals: 2,
    tolerance: { abs: 0.05 },
    explanation: t(
      "Porcentaje integral = 150,000 ÷ 600,000 × 100 = 25 %. En el balance, la base del análisis vertical es el activo total. Error común: dividir al revés (600,000 ÷ 150,000 = 4) y confundirlo con un porcentaje.",
      "Common-size percentage = 150,000 ÷ 600,000 × 100 = 25%. In the balance sheet, the base for vertical analysis is total assets. Common mistake: dividing the other way (600,000 ÷ 150,000 = 4) and confusing it with a percentage.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'statement-analysis',
  },
  {
    id: 'FIN-04-E3',
    level: 4,
    module: 'FIN-04',
    kind: 'numeric',
    flavor: 'case',
    context: t(
      "Las cuentas por cobrar de una agencia de publicidad pasaron de $200,000 el año pasado a $260,000 este año.",
      "An advertising agency's accounts receivable went from $200,000 last year to $260,000 this year.",
    ),
    prompt: t(
      "Con análisis horizontal, ¿en qué porcentaje aumentaron las cuentas por cobrar?",
      "Using horizontal analysis, by what percentage did accounts receivable increase?",
    ),
    answer: 30,
    unit: '%',
    decimals: 2,
    tolerance: { abs: 0.05 },
    explanation: t(
      "Variación % = (260,000 − 200,000) ÷ 200,000 × 100 = 60,000 ÷ 200,000 × 100 = 30 %. Se divide entre el año anterior (la base). Error común: dividir entre el año actual y obtener ≈ 23.08 %.",
      "Change % = (260,000 − 200,000) ÷ 200,000 × 100 = 60,000 ÷ 200,000 × 100 = 30%. You divide by the prior year (the base). Common mistake: dividing by the current year and getting ≈ 23.08%.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'statement-analysis',
  },
  {
    id: 'FIN-04-E4',
    level: 4,
    module: 'FIN-04',
    kind: 'mcq',
    flavor: 'interpret',
    context: t(
      "Análisis horizontal de un mayorista: ventas +10 %, cuentas por cobrar +40 %, inventarios +8 %, proveedores +9 %.",
      "Horizontal analysis of a wholesaler: sales +10%, accounts receivable +40%, inventory +8%, suppliers +9%.",
    ),
    prompt: t(
      "¿Cuál es la interpretación más razonable de estos cambios?",
      "What is the most reasonable interpretation of these changes?",
    ),
    options: [
      { id: 'FIN-04-E4-a', text: t("La empresa está vendiendo de más y debería subir precios", "The company is selling too much and should raise prices") },
      { id: 'FIN-04-E4-b', text: t("Los clientes están pagando más lento o se otorgó crédito con poco control", "Customers are paying more slowly or credit was granted with little control") },
      { id: 'FIN-04-E4-c', text: t("El inventario está creciendo fuera de control", "Inventory is growing out of control") },
      { id: 'FIN-04-E4-d', text: t("No hay nada que revisar porque las ventas crecieron", "There is nothing to review because sales grew") },
    ],
    correctOptionId: 'FIN-04-E4-b',
    explanation: t(
      "Lo que se debe cobrar crece cuatro veces más rápido que las ventas: los clientes tardan más en pagar o se dio crédito de más. El inventario (+8 %) y los proveedores (+9 %) crecen a un ritmo parecido a las ventas. Error común: quedarse tranquilo porque las ventas suben, sin comparar ritmos.",
      "What must be collected grows four times faster than sales: customers take longer to pay or too much credit was granted. Inventory (+8%) and suppliers (+9%) grow at a pace similar to sales. Common mistake: feeling reassured because sales are rising, without comparing paces.",
    ),
    difficulty: 2,
    points: 15,
    competency: 'statement-analysis',
  },
  {
    id: 'FIN-04-E5',
    level: 4,
    module: 'FIN-04',
    kind: 'truefalse',
    flavor: 'concept',
    prompt: t(
      "Verdadero o falso: el análisis vertical consiste en comparar una misma partida a lo largo de varios años.",
      "True or false: vertical analysis consists of comparing the same item over several years.",
    ),
    answer: false,
    explanation: t(
      "Falso. Eso es el análisis horizontal. El vertical compara cada partida contra una base del mismo estado y del mismo periodo (ventas o activo total). Error común: confundir los nombres; piensa que el vertical \"baja\" por una sola columna y el horizontal \"cruza\" de un año a otro.",
      "False. That is horizontal analysis. Vertical analysis compares each item against a base from the same statement and period (sales or total assets). Common mistake: mixing up the names; think of vertical as going \"down\" one column and horizontal as going \"across\" from one year to another.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'statement-analysis',
  },
  {
    id: 'FIN-04-E6',
    level: 4,
    module: 'FIN-04',
    kind: 'fields',
    flavor: 'statement',
    context: t(
      "Estado de resultados de una fábrica de dulces: ventas $800,000; costo de ventas $520,000; gastos de operación $200,000.",
      "Income statement of a candy factory: sales $800,000; cost of sales $520,000; operating expenses $200,000.",
    ),
    prompt: t(
      "Calcula la utilidad bruta y la de operación, y sus porcentajes integrales respecto a las ventas.",
      "Compute gross profit and operating profit, and their common-size percentages relative to sales.",
    ),
    fields: [
      { id: 'f1', label: t("Utilidad bruta", "Gross profit"), answer: 280000, unit: 'MXN', tolerance: { abs: 0.5 } },
      { id: 'f2', label: t("Utilidad bruta como % de ventas", "Gross profit as % of sales"), answer: 35, unit: '%', tolerance: { abs: 0.05 } },
      { id: 'f3', label: t("Utilidad de operación", "Operating profit"), answer: 80000, unit: 'MXN', tolerance: { abs: 0.5 } },
      { id: 'f4', label: t("Utilidad de operación como % de ventas", "Operating profit as % of sales"), answer: 10, unit: '%', tolerance: { abs: 0.05 } },
    ],
    explanation: t(
      "Utilidad bruta = 800,000 − 520,000 = $280,000 → 280,000 ÷ 800,000 = 35 %. Utilidad de operación = 280,000 − 200,000 = $80,000 → 80,000 ÷ 800,000 = 10 %. De cada peso vendido quedan 10 centavos de utilidad de operación. Error común: calcular el porcentaje sobre el costo de ventas en lugar de sobre las ventas.",
      "Gross profit = 800,000 − 520,000 = $280,000 → 280,000 ÷ 800,000 = 35%. Operating profit = 280,000 − 200,000 = $80,000 → 80,000 ÷ 800,000 = 10%. Of each peso sold, 10 cents remain as operating profit. Common mistake: computing the percentage over cost of sales instead of over sales.",
    ),
    difficulty: 2,
    points: 20,
    competency: 'statement-analysis',
  },

  // ═════════════════════════ FIN-05 ═════════════════════════
  {
    id: 'FIN-05-E1',
    level: 4,
    module: 'FIN-05',
    kind: 'classify',
    flavor: 'concept',
    prompt: t(
      "Clasifica cada razón financiera en su grupo.",
      "Classify each financial ratio into its group.",
    ),
    categories: [
      { id: 'FIN-05-E1-c1', label: t("Liquidez", "Liquidity") },
      { id: 'FIN-05-E1-c2', label: t("Endeudamiento", "Leverage") },
      { id: 'FIN-05-E1-c3', label: t("Rentabilidad", "Profitability") },
      { id: 'FIN-05-E1-c4', label: t("Actividad", "Activity") },
    ],
    items: [
      { id: 'FIN-05-E1-i1', label: t("Prueba ácida", "Quick ratio"), correctCategoryId: 'FIN-05-E1-c1' },
      { id: 'FIN-05-E1-i2', label: t("Pasivo total ÷ activo total", "Total liabilities ÷ total assets"), correctCategoryId: 'FIN-05-E1-c2' },
      { id: 'FIN-05-E1-i3', label: t("ROE (rendimiento sobre capital)", "ROE (return on equity)"), correctCategoryId: 'FIN-05-E1-c3' },
      { id: 'FIN-05-E1-i4', label: t("Días de cobro", "Days sales outstanding"), correctCategoryId: 'FIN-05-E1-c4' },
      { id: 'FIN-05-E1-i5', label: t("Margen neto", "Net margin"), correctCategoryId: 'FIN-05-E1-c3' },
      { id: 'FIN-05-E1-i6', label: t("Rotación de inventario", "Inventory turnover"), correctCategoryId: 'FIN-05-E1-c4' },
    ],
    explanation: t(
      "Prueba ácida = liquidez (pagar a corto plazo). Pasivo ÷ activo = endeudamiento (cuánto se financia con deuda). ROE y margen neto = rentabilidad (cuánto se gana). Días de cobro y rotación de inventario = actividad (qué tan rápido se mueven los recursos). Error común: poner los días de cobro en liquidez; influyen en ella, pero miden velocidad, no capacidad de pago.",
      "Quick ratio = liquidity (paying in the short term). Liabilities ÷ assets = leverage (how much is debt-financed). ROE and net margin = profitability (how much is earned). Days sales outstanding and inventory turnover = activity (how fast resources move). Common mistake: placing days sales outstanding under liquidity; it affects it, but measures speed, not ability to pay.",
    ),
    difficulty: 1,
    points: 15,
    competency: 'financial-ratios',
  },
  {
    id: 'FIN-05-E2',
    level: 4,
    module: 'FIN-05',
    kind: 'fields',
    flavor: 'case',
    context: t(
      "Una distribuidora de refacciones tiene activo circulante de $450,000, de los cuales $210,000 son inventario. Su pasivo circulante es de $300,000.",
      "An auto parts distributor has current assets of $450,000, of which $210,000 is inventory. Its current liabilities are $300,000.",
    ),
    prompt: t(
      "Calcula la razón circulante y la prueba ácida de la distribuidora (en veces).",
      "Compute the distributor's current ratio and quick ratio (in times).",
    ),
    fields: [
      { id: 'f1', label: t("Razón circulante", "Current ratio"), answer: 1.5, unit: 'times', tolerance: { abs: 0.005 } },
      { id: 'f2', label: t("Prueba ácida", "Quick ratio"), answer: 0.8, unit: 'times', tolerance: { abs: 0.005 } },
    ],
    explanation: t(
      "Circulante = 450,000 ÷ 300,000 = 1.5. Prueba ácida = (450,000 − 210,000) ÷ 300,000 = 240,000 ÷ 300,000 = 0.8. Sin vender inventario solo tiene 80 centavos por cada peso que vence pronto: depende mucho de vender su mercancía. Error común: restar el inventario del pasivo en vez del activo circulante.",
      "Current = 450,000 ÷ 300,000 = 1.5. Quick ratio = (450,000 − 210,000) ÷ 300,000 = 240,000 ÷ 300,000 = 0.8. Without selling inventory it only has 80 cents for each peso coming due soon: it depends heavily on selling its goods. Common mistake: subtracting inventory from liabilities instead of from current assets.",
    ),
    difficulty: 1,
    points: 15,
    competency: 'financial-ratios',
  },
  {
    id: 'FIN-05-E3',
    level: 4,
    module: 'FIN-05',
    kind: 'numeric',
    flavor: 'case',
    context: t(
      "Un despacho de diseño tiene cuentas por cobrar de $90,000 al cierre del año. Sus ventas a crédito anuales fueron de $720,000. Usa un año de 360 días.",
      "A design firm has accounts receivable of $90,000 at year-end. Its annual credit sales were $720,000. Use a 360-day year.",
    ),
    prompt: t(
      "¿Cuántos días tardan en promedio sus clientes en pagar (días de cobro)?",
      "How many days do its customers take on average to pay (days sales outstanding)?",
    ),
    answer: 45,
    unit: 'days',
    decimals: 0,
    tolerance: { abs: 0.5 },
    explanation: t(
      "Días de cobro = 90,000 ÷ 720,000 × 360 = 0.125 × 360 = 45 días. Si el despacho da crédito a 30 días, sus clientes se están atrasando. Error común: dividir ventas entre cuentas por cobrar (= 8, que es la rotación de cuentas por cobrar, no los días).",
      "Days sales outstanding = 90,000 ÷ 720,000 × 360 = 0.125 × 360 = 45 days. If the firm gives 30-day credit, its customers are paying late. Common mistake: dividing sales by receivables (= 8, which is receivables turnover, not days).",
    ),
    difficulty: 1,
    points: 15,
    competency: 'financial-ratios',
  },
  {
    id: 'FIN-05-E4',
    level: 4,
    module: 'FIN-05',
    kind: 'mcq',
    flavor: 'concept',
    prompt: t(
      "¿Qué mide el ROE (rendimiento sobre el capital contable)?",
      "What does ROE (return on equity) measure?",
    ),
    options: [
      { id: 'FIN-05-E4-a', text: t("Cuánto ganan los dueños por cada peso que tienen invertido en la empresa", "How much the owners earn for each peso they have invested in the company") },
      { id: 'FIN-05-E4-b', text: t("Cuántos pesos de activo circulante hay por cada peso de deuda a corto plazo", "How many pesos of current assets there are per peso of short-term debt") },
      { id: 'FIN-05-E4-c', text: t("Qué parte de los activos se pagó con deuda", "What part of the assets was paid with debt") },
      { id: 'FIN-05-E4-d', text: t("Cuántos días tarda la empresa en vender su inventario", "How many days the company takes to sell its inventory") },
    ],
    correctOptionId: 'FIN-05-E4-a',
    explanation: t(
      "ROE = utilidad neta ÷ capital contable: lo que rinde el dinero de los dueños. La opción de activo circulante describe la razón circulante; la de deuda, el endeudamiento; la de días, una razón de actividad. Error común: confundir ROE con ROA, que divide entre todos los activos, no solo el capital.",
      "ROE = net income ÷ equity: what the owners' money yields. The current-assets option describes the current ratio; the debt one, the debt ratio; the days one, an activity ratio. Common mistake: confusing ROE with ROA, which divides by all assets, not just equity.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'financial-ratios',
  },
  {
    id: 'FIN-05-E5',
    level: 4,
    module: 'FIN-05',
    kind: 'truefalse',
    flavor: 'interpret',
    prompt: t(
      "Verdadero o falso: entre más alta sea la razón circulante, siempre es mejor para la empresa.",
      "True or false: the higher the current ratio, the better it always is for the company.",
    ),
    answer: false,
    explanation: t(
      "Falso. Una razón circulante muy alta puede indicar efectivo ocioso, inventario que no se vende o clientes que no pagan: recursos que no rinden. Lo sano depende del giro y se compara con el sector. Error común: creer que \"más liquidez\" nunca tiene costo; el dinero parado deja de ganar.",
      "False. A very high current ratio may signal idle cash, inventory that does not sell or customers who do not pay: resources that earn nothing. What is healthy depends on the industry and is compared with peers. Common mistake: believing \"more liquidity\" never has a cost; idle money stops earning.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'financial-ratios',
  },
  {
    id: 'FIN-05-E6',
    level: 4,
    module: 'FIN-05',
    kind: 'fields',
    flavor: 'case',
    context: t(
      "Datos anuales de una cadena de gimnasios: ventas $1,200,000; utilidad neta $96,000; activo total $800,000; pasivo total $320,000; capital contable $480,000.",
      "Annual data for a gym chain: sales $1,200,000; net income $96,000; total assets $800,000; total liabilities $320,000; equity $480,000.",
    ),
    prompt: t(
      "Calcula, en porcentaje, el margen neto, el ROA, el ROE y la razón de endeudamiento (pasivo total ÷ activo total).",
      "Compute, as percentages, net margin, ROA, ROE and the debt ratio (total liabilities ÷ total assets).",
    ),
    fields: [
      { id: 'f1', label: t("Margen neto", "Net margin"), answer: 8, unit: '%', tolerance: { abs: 0.05 } },
      { id: 'f2', label: t("ROA", "ROA"), answer: 12, unit: '%', tolerance: { abs: 0.05 } },
      { id: 'f3', label: t("ROE", "ROE"), answer: 20, unit: '%', tolerance: { abs: 0.05 } },
      { id: 'f4', label: t("Endeudamiento", "Debt ratio"), answer: 40, unit: '%', tolerance: { abs: 0.05 } },
    ],
    explanation: t(
      "Margen neto = 96,000 ÷ 1,200,000 = 8 %. ROA = 96,000 ÷ 800,000 = 12 %. ROE = 96,000 ÷ 480,000 = 20 %. Endeudamiento = 320,000 ÷ 800,000 = 40 %. El ROE supera al ROA porque 40 % de los activos se financia con deuda. Error común: calcular el ROE dividiendo entre el activo total.",
      "Net margin = 96,000 ÷ 1,200,000 = 8%. ROA = 96,000 ÷ 800,000 = 12%. ROE = 96,000 ÷ 480,000 = 20%. Debt ratio = 320,000 ÷ 800,000 = 40%. ROE exceeds ROA because 40% of assets is debt-financed. Common mistake: computing ROE by dividing by total assets.",
    ),
    difficulty: 2,
    points: 20,
    competency: 'financial-ratios',
  },

  // ═════════════════════════ FIN-06 ═════════════════════════
  {
    id: 'FIN-06-E1',
    level: 4,
    module: 'FIN-06',
    kind: 'numeric',
    flavor: 'case',
    context: t(
      "Una empacadora de frutas tiene activo circulante por $750,000 y pasivo circulante por $480,000.",
      "A fruit packer has current assets of $750,000 and current liabilities of $480,000.",
    ),
    prompt: t(
      "¿Cuál es su capital de trabajo neto, en pesos?",
      "What is its net working capital, in pesos?",
    ),
    answer: 270000,
    unit: 'MXN',
    decimals: 0,
    tolerance: { abs: 0.5 },
    explanation: t(
      "Capital de trabajo neto = 750,000 − 480,000 = $270,000. Es una resta, no una división: la división (≈ 1.56) sería la razón circulante. Error común: confundir capital de trabajo (pesos) con razón circulante (veces).",
      "Net working capital = 750,000 − 480,000 = $270,000. It is a subtraction, not a division: the division (≈ 1.56) would be the current ratio. Common mistake: confusing working capital (pesos) with the current ratio (times).",
    ),
    difficulty: 1,
    points: 10,
    competency: 'working-capital',
  },
  {
    id: 'FIN-06-E2',
    level: 4,
    module: 'FIN-06',
    kind: 'formula',
    flavor: 'concept',
    prompt: t(
      "Completa la fórmula del ciclo de conversión del efectivo.",
      "Complete the cash conversion cycle formula.",
    ),
    template: 'CCE = {{b1}} + {{b2}} − {{b3}}',
    blanks: [
      {
        id: 'b1',
        options: [
          { id: 'FIN-06-E2-b1-a', text: t("Días de inventario", "Days of inventory") },
          { id: 'FIN-06-E2-b1-b', text: t("Capital contable", "Equity") },
          { id: 'FIN-06-E2-b1-c', text: t("Días de pago a proveedores", "Days payable to suppliers") },
        ],
        correctOptionId: 'FIN-06-E2-b1-a',
      },
      {
        id: 'b2',
        options: [
          { id: 'FIN-06-E2-b2-a', text: t("Margen neto", "Net margin") },
          { id: 'FIN-06-E2-b2-b', text: t("Días de cobro a clientes", "Days to collect from customers") },
          { id: 'FIN-06-E2-b2-c', text: t("Días de pago a proveedores", "Days payable to suppliers") },
        ],
        correctOptionId: 'FIN-06-E2-b2-b',
      },
      {
        id: 'b3',
        options: [
          { id: 'FIN-06-E2-b3-a', text: t("Días de cobro a clientes", "Days to collect from customers") },
          { id: 'FIN-06-E2-b3-b', text: t("Días de inventario", "Days of inventory") },
          { id: 'FIN-06-E2-b3-c', text: t("Días de pago a proveedores", "Days payable to suppliers") },
        ],
        correctOptionId: 'FIN-06-E2-b3-c',
      },
    ],
    explanation: t(
      "CCE = días de inventario + días de cobro − días de pago. El dinero se atrapa mientras la mercancía espera venderse y mientras el cliente paga; el plazo del proveedor lo libera, por eso se resta. Error común: sumar los días de pago, como si pagar después alargara el ciclo.",
      "CCC = days of inventory + days of collection − days of payment. Money is trapped while goods wait to be sold and while the customer pays; the supplier's term frees it, which is why it is subtracted. Common mistake: adding the days of payment, as if paying later lengthened the cycle.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'working-capital',
  },
  {
    id: 'FIN-06-E3',
    level: 4,
    module: 'FIN-06',
    kind: 'mcq',
    flavor: 'interpret',
    prompt: t(
      "¿Cuál de estas acciones acorta el ciclo de conversión del efectivo de una tienda?",
      "Which of these actions shortens a store's cash conversion cycle?",
    ),
    options: [
      { id: 'FIN-06-E3-a', text: t("Dar a los clientes 60 días para pagar en lugar de 30", "Give customers 60 days to pay instead of 30") },
      { id: 'FIN-06-E3-b', text: t("Comprar el doble de mercancía \"por si acaso\"", "Buy twice as much merchandise \"just in case\"") },
      { id: 'FIN-06-E3-c', text: t("Pagar a los proveedores antes de lo que piden, sin ningún descuento", "Pay suppliers earlier than they ask, without any discount") },
      { id: 'FIN-06-E3-d', text: t("Negociar con el proveedor pagar a 45 días en lugar de 30", "Negotiate with the supplier to pay in 45 days instead of 30") },
    ],
    correctOptionId: 'FIN-06-E3-d',
    explanation: t(
      "Más días de pago se restan en el ciclo, así que pagar a 45 días lo acorta 15 días. Dar más plazo a clientes y acumular inventario lo alargan, y pagar antes sin descuento reduce los días de pago y también lo alarga. Error común: pensar que pagar rápido siempre es buena gestión; sin un descuento que lo compense, solo consume efectivo antes.",
      "More days of payment are subtracted in the cycle, so paying in 45 days shortens it by 15 days. Giving customers more time and piling up inventory lengthen it, and paying early without a discount reduces payment days and lengthens it too. Common mistake: thinking paying fast is always good management; without a discount to offset it, it just uses cash sooner.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'working-capital',
  },
  {
    id: 'FIN-06-E4',
    level: 4,
    module: 'FIN-06',
    kind: 'multi',
    flavor: 'case',
    context: t(
      "Una distribuidora de productos de limpieza vende bien, pero cada fin de mes le falta efectivo para pagar la nómina.",
      "A cleaning products distributor sells well, but every month-end it lacks cash to pay payroll.",
    ),
    prompt: t(
      "¿Qué medidas de capital de trabajo le ayudarían a liberar efectivo? Selecciona todas las correctas.",
      "Which working capital measures would help it free up cash? Select all that apply.",
    ),
    options: [
      { id: 'FIN-06-E4-a', text: t("Enviar recordatorios de pago a clientes antes del vencimiento", "Send payment reminders to customers before the due date") },
      { id: 'FIN-06-E4-b', text: t("Liquidar con descuento los productos que casi no se venden", "Clear out at a discount the products that barely sell") },
      { id: 'FIN-06-E4-c', text: t("Ampliar el crédito a clientes que ya pagan tarde", "Extend more credit to customers who already pay late") },
      { id: 'FIN-06-E4-d', text: t("Hacer un presupuesto de efectivo semanal para anticipar faltantes", "Prepare a weekly cash budget to anticipate shortfalls") },
      { id: 'FIN-06-E4-e', text: t("Comprar inventario para seis meses para asegurar precio", "Buy six months of inventory to lock in prices") },
    ],
    correctOptionIds: ['FIN-06-E4-a', 'FIN-06-E4-b', 'FIN-06-E4-d'],
    explanation: t(
      "Recordatorios de cobro bajan los días de cobro; liquidar mercancía lenta convierte inventario en dinero; el presupuesto semanal permite anticipar y planear. Dar más crédito a morosos y comprar inventario de más atrapan todavía más efectivo. Error común: creer que vender más resuelve todo; si se vende a crédito y se cobra lento, la falta de efectivo empeora.",
      "Collection reminders lower collection days; clearing slow goods turns inventory into money; the weekly budget lets you anticipate and plan. Giving more credit to late payers and overbuying inventory trap even more cash. Common mistake: believing selling more solves everything; if you sell on credit and collect slowly, the cash shortage worsens.",
    ),
    difficulty: 2,
    points: 15,
    competency: 'working-capital',
  },
  {
    id: 'FIN-06-E5',
    level: 4,
    module: 'FIN-06',
    kind: 'truefalse',
    flavor: 'concept',
    prompt: t(
      "Verdadero o falso: si el capital de trabajo neto es positivo, la empresa nunca tendrá problemas para pagar sus deudas de corto plazo.",
      "True or false: if net working capital is positive, the company will never have trouble paying its short-term debts.",
    ),
    answer: false,
    explanation: t(
      "Falso. Un capital de trabajo positivo puede estar formado sobre todo por inventario que no se vende o por cuentas de clientes que no pagan; entonces no hay efectivo cuando vencen las deudas. Importa la calidad de los activos y el momento en que se convierten en dinero. Error común: ver solo el total y no su composición.",
      "False. Positive working capital may consist mostly of inventory that does not sell or customer accounts that are not paid; then there is no cash when debts come due. The quality of the assets and when they turn into money matter. Common mistake: looking only at the total and not its composition.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'working-capital',
  },
  {
    id: 'FIN-06-E6',
    level: 4,
    module: 'FIN-06',
    kind: 'fields',
    flavor: 'case',
    context: t(
      "Datos anuales de una tienda de electrónica: inventario $120,000; costo de ventas $720,000; cuentas por cobrar $150,000; ventas a crédito $1,080,000; proveedores $80,000. Usa el costo de ventas como base de las compras y un año de 360 días.",
      "Annual data for an electronics store: inventory $120,000; cost of sales $720,000; accounts receivable $150,000; credit sales $1,080,000; accounts payable $80,000. Use cost of sales as the purchases base and a 360-day year.",
    ),
    prompt: t(
      "Calcula los días de inventario, los días de cobro, los días de pago y el ciclo de conversión del efectivo.",
      "Compute days of inventory, days of collection, days of payment and the cash conversion cycle.",
    ),
    fields: [
      { id: 'f1', label: t("Días de inventario", "Days of inventory"), answer: 60, unit: 'days', tolerance: { abs: 0.5 } },
      { id: 'f2', label: t("Días de cobro", "Days of collection"), answer: 50, unit: 'days', tolerance: { abs: 0.5 } },
      { id: 'f3', label: t("Días de pago", "Days of payment"), answer: 40, unit: 'days', tolerance: { abs: 0.5 } },
      { id: 'f4', label: t("Ciclo de conversión del efectivo", "Cash conversion cycle"), answer: 70, unit: 'days', tolerance: { abs: 0.5 } },
    ],
    explanation: t(
      "Días de inventario = 120,000 ÷ 720,000 × 360 = 60. Días de cobro = 150,000 ÷ 1,080,000 × 360 = 50. Días de pago = 80,000 ÷ 720,000 × 360 = 40. CCE = 60 + 50 − 40 = 70 días. Error común: calcular los días de inventario con las ventas en lugar del costo de ventas, lo que da 40 días y subestima el ciclo.",
      "Days of inventory = 120,000 ÷ 720,000 × 360 = 60. Days of collection = 150,000 ÷ 1,080,000 × 360 = 50. Days of payment = 80,000 ÷ 720,000 × 360 = 40. CCC = 60 + 50 − 40 = 70 days. Common mistake: computing days of inventory with sales instead of cost of sales, which gives 40 days and understates the cycle.",
    ),
    difficulty: 2,
    points: 20,
    competency: 'working-capital',
  },
]
