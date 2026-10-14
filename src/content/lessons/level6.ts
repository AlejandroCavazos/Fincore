import type { Exercise, Lesson } from '../../types'

/** Bilingual text helper (plain data). */
const t = (es: string, en: string) => ({ es, en })

export const lessons: Lesson[] = [
  // ───────────────────────────── L6-01 ─────────────────────────────
  {
    id: "L6-01",
    level: 6,
    topicIds: ["6.1", "6.2"],
    title: t("Análisis financiero y razones financieras", "Financial analysis and financial ratios"),
    summary: t(
      "Calcula e interpreta razones de liquidez, apalancamiento, rentabilidad y eficiencia, y descompón el ROE con el modelo DuPont para entender de dónde viene el rendimiento.",
      "Compute and interpret liquidity, leverage, profitability and efficiency ratios, and break down ROE with the DuPont model to understand where returns come from."
    ),
    minutes: 18,
    objectives: [
      t("Calcular razones de liquidez y apalancamiento a partir del balance.", "Compute liquidity and leverage ratios from the balance sheet."),
      t("Calcular ROA, ROE y márgenes de rentabilidad.", "Compute ROA, ROE and profitability margins."),
      t("Descomponer el ROE con DuPont en margen, rotación y apalancamiento.", "Break ROE down with DuPont into margin, turnover and leverage."),
      t("Interpretar las razones con contexto (tendencia, industria) y no de forma aislada.", "Interpret ratios in context (trend, industry) rather than in isolation."),
    ],
    theory: [
      {
        heading: t("Para qué sirve el análisis de razones", "What ratio analysis is for"),
        body: [
          t(
            "En palabras sencillas: una **razón financiera** es una división entre dos números de los estados financieros que te dice algo útil. Es como el «kilómetros por litro» de un coche: saber que gastó 40 litros no dice mucho, pero saber que rinde 12 km por litro sí te permite compararlo con otros coches.",
            "In simple words: a **financial ratio** is a division between two numbers from the financial statements that tells you something useful. It is like a car's «miles per gallon»: knowing it used 40 liters says little, but knowing it gets 12 km per liter lets you compare it with other cars."
          ),
          t(
            "Una razón financiera relaciona dos cifras de los estados financieros para hacerlas comparables entre periodos y empresas. Por sí sola no es «buena» ni «mala»: se interpreta con su **tendencia**, contra el **promedio de la industria** y considerando el modelo de negocio. Por ejemplo, un supermercado opera con poca liquidez y alta rotación, y eso es normal en su giro.",
            "A financial ratio relates two figures from the financial statements to make them comparable across periods and companies. On its own it is neither «good» nor «bad»: it is interpreted by its **trend**, against the **industry average** and in light of the business model. For example, a supermarket operates with low liquidity and high turnover, which is normal for its industry."
          ),
        ],
      },
      {
        heading: t("Liquidez y apalancamiento", "Liquidity and leverage"),
        body: [
          t(
            "La **liquidez** mide la capacidad de cubrir obligaciones de corto plazo: ¿te alcanza para pagar lo que vence este año? El **activo circulante** es lo que tienes o cobrarás en menos de un año (efectivo, clientes, inventarios) y el **pasivo circulante** es lo que debes pagar en menos de un año (proveedores, préstamos cortos). La razón circulante compara ambos; la **prueba ácida** excluye los inventarios, que son el activo circulante menos líquido (primero hay que venderlos para tener dinero).",
            "**Liquidity** measures the ability to meet short-term obligations: can you pay what falls due this year? **Current assets** are what you have or will collect within a year (cash, receivables, inventory) and **current liabilities** are what you must pay within a year (suppliers, short-term loans). The current ratio compares the two; the **quick (acid-test) ratio** excludes inventory, the least liquid current asset (you first have to sell it to get cash)."
          ),
          t(
            "El **apalancamiento** mide cuánto se financia la empresa con deuda en vez de con dinero de los dueños. Más deuda puede elevar el ROE, pero también el riesgo financiero, igual que una persona muy endeudada con tarjetas: si bajan sus ingresos, le cuesta pagar. La cobertura de intereses (EBIT ÷ gasto por intereses) indica cuántas veces la utilidad operativa cubre los intereses; el **EBIT** es la utilidad de la operación antes de intereses e impuestos.",
            "**Leverage** measures how much the company is financed with debt instead of the owners' money. More debt can raise ROE but also financial risk, just like a person with heavy credit-card debt: if income drops, paying gets hard. Interest coverage (EBIT ÷ interest expense) shows how many times operating profit covers interest; **EBIT** is operating profit before interest and taxes."
          ),
        ],
        formulas: [
          {
            name: t("Razón circulante (liquidez)", "Current ratio (liquidity)"),
            expression: "Razón circulante = Activo circulante ÷ Pasivo circulante",
            variables: [
              { symbol: "Activo circulante", meaning: t("Pesos en efectivo, clientes, inventarios y otros bienes que se vuelven dinero en menos de un año.", "Pesos in cash, receivables, inventory and other items that turn into money within a year.") },
              { symbol: "Pasivo circulante", meaning: t("Pesos que la empresa debe pagar en menos de un año.", "Pesos the company must pay within a year.") },
            ],
            steps: [
              t("Toma el activo circulante del balance.", "Take current assets from the balance sheet."),
              t("Divídelo entre el pasivo circulante. El resultado se expresa en «veces».", "Divide it by current liabilities. The result is expressed in «times»."),
            ],
            example: t(
              "Activo circulante $640,000 y pasivo circulante $400,000: $640,000 ÷ $400,000 = **1.60 veces**.",
              "Current assets $640,000 and current liabilities $400,000: $640,000 ÷ $400,000 = **1.60 times**."
            ),
            interpret: t(
              "1.60 veces significa que por cada $1 que debes a corto plazo tienes $1.60 para pagarlo. Menos de 1 es una señal de alerta; un número muy alto puede indicar dinero ocioso.",
              "1.60 times means that for every $1 you owe short term you have $1.60 to pay it. Below 1 is a warning sign; a very high number may point to idle money."
            ),
          },
          {
            name: t("Prueba ácida (liquidez sin inventarios)", "Quick ratio (liquidity without inventory)"),
            expression: "Prueba ácida = (Activo circulante − Inventarios) ÷ Pasivo circulante",
            variables: [
              { symbol: "Activo circulante", meaning: t("Pesos de bienes que se vuelven dinero en menos de un año.", "Pesos of items that turn into money within a year.") },
              { symbol: "Inventarios", meaning: t("Pesos de mercancía en bodega que aún no se vende.", "Pesos of goods in stock not yet sold.") },
              { symbol: "Pasivo circulante", meaning: t("Pesos que se deben pagar en menos de un año.", "Pesos that must be paid within a year.") },
            ],
            steps: [
              t("Resta los inventarios al activo circulante.", "Subtract inventory from current assets."),
              t("Divide ese resultado entre el pasivo circulante.", "Divide that result by current liabilities."),
            ],
            example: t(
              "Activo circulante $640,000, inventarios $160,000, pasivo circulante $400,000. Resta: $640,000 − $160,000 = $480,000. Divide: $480,000 ÷ $400,000 = **1.20 veces**.",
              "Current assets $640,000, inventory $160,000, current liabilities $400,000. Subtract: $640,000 − $160,000 = $480,000. Divide: $480,000 ÷ $400,000 = **1.20 times**."
            ),
            mistake: t(
              "Olvidar restar los inventarios: entonces calculas la razón circulante, no la prueba ácida.",
              "Forgetting to subtract inventory: then you are computing the current ratio, not the quick ratio."
            ),
          },
          {
            name: t("Razón de endeudamiento", "Debt ratio"),
            expression: "Endeudamiento = Pasivo total ÷ Activo total × 100",
            variables: [
              { symbol: "Pasivo total", meaning: t("Todo lo que la empresa debe, en pesos (corto y largo plazo).", "Everything the company owes, in pesos (short and long term).") },
              { symbol: "Activo total", meaning: t("Todo lo que la empresa tiene, en pesos.", "Everything the company owns, in pesos.") },
              { symbol: "× 100", meaning: t("Convierte el resultado decimal a porcentaje.", "Turns the decimal result into a percentage.") },
            ],
            steps: [
              t("Divide el pasivo total entre el activo total.", "Divide total liabilities by total assets."),
              t("Multiplica por 100 para expresarlo en %.", "Multiply by 100 to express it in %."),
            ],
            example: t(
              "Pasivo total $1,950,000 y activo total $3,000,000: $1,950,000 ÷ $3,000,000 = 0.65; 0.65 × 100 = **65 %**.",
              "Total liabilities $1,950,000 and total assets $3,000,000: $1,950,000 ÷ $3,000,000 = 0.65; 0.65 × 100 = **65 %**."
            ),
            interpret: t(
              "65 % quiere decir que 65 centavos de cada peso de activos se pagaron con deuda y 35 con dinero de los dueños.",
              "65 % means 65 cents of every peso of assets were paid for with debt and 35 with the owners' money."
            ),
            mistake: t(
              "Dividir el pasivo entre el capital contable: eso es la razón deuda a capital, otra medida distinta.",
              "Dividing liabilities by equity: that is the debt-to-equity ratio, a different measure."
            ),
          },
        ],
        bullets: [
          t("Razón circulante = Activo circulante ÷ Pasivo circulante", "Current ratio = Current assets ÷ Current liabilities"),
          t("Prueba ácida = (Activo circulante − Inventarios) ÷ Pasivo circulante", "Quick ratio = (Current assets − Inventory) ÷ Current liabilities"),
          t("Razón de endeudamiento = Pasivo total ÷ Activo total", "Debt ratio = Total liabilities ÷ Total assets"),
          t("Deuda a capital = Pasivo total ÷ Capital contable", "Debt-to-equity = Total liabilities ÷ Equity"),
        ],
      },
      {
        heading: t("Rentabilidad y eficiencia", "Profitability and efficiency"),
        body: [
          t(
            "La **rentabilidad** relaciona utilidades con ventas o con la inversión: margen neto (utilidad neta ÷ ventas), **ROA** (utilidad neta ÷ activo total) y **ROE** (utilidad neta ÷ capital contable). La **eficiencia** mide qué tan bien se usan los activos: rotación de activos (ventas ÷ activo total), rotación de inventarios (costo de ventas ÷ inventario) y **días de cobranza** (clientes ÷ ventas × 365).",
            "**Profitability** relates profit to sales or investment: net margin (net income ÷ sales), **ROA** (net income ÷ total assets) and **ROE** (net income ÷ equity). **Efficiency** measures how well assets are used: asset turnover (sales ÷ total assets), inventory turnover (cost of sales ÷ inventory) and **days sales outstanding** (receivables ÷ sales × 365)."
          ),
          t(
            "En palabras sencillas: la rentabilidad responde «¿cuánto gano?» y la eficiencia «¿qué tan bien uso lo que tengo?». El **capital contable** es el dinero que pusieron los dueños más las utilidades que dejaron en la empresa. **Clientes** son las ventas a crédito que aún no te pagan; los días de cobranza dicen cuánto tardas, en promedio, en cobrarlas.",
            "In simple words: profitability answers «how much do I earn?» and efficiency «how well do I use what I have?». **Equity** is the money the owners put in plus the profits they left in the company. **Receivables** are credit sales not yet paid; days sales outstanding tells you how long, on average, it takes you to collect them."
          ),
        ],
        formulas: [
          {
            name: t("Margen neto", "Net margin"),
            expression: "Margen neto = Utilidad neta ÷ Ventas × 100",
            variables: [
              { symbol: "Utilidad neta", meaning: t("Lo que queda en pesos después de todos los gastos e impuestos.", "What is left in pesos after all expenses and taxes.") },
              { symbol: "Ventas", meaning: t("Ingresos por ventas del periodo, en pesos.", "Sales revenue for the period, in pesos.") },
            ],
            steps: [
              t("Divide la utilidad neta entre las ventas.", "Divide net income by sales."),
              t("Multiplica por 100 para obtener el %.", "Multiply by 100 to get the %."),
            ],
            example: t(
              "Utilidad neta $180,000 y ventas $2,400,000: $180,000 ÷ $2,400,000 = 0.075; × 100 = **7.5 %**. De cada $100 vendidos quedan $7.50 de ganancia.",
              "Net income $180,000 and sales $2,400,000: $180,000 ÷ $2,400,000 = 0.075; × 100 = **7.5 %**. Of every $100 sold, $7.50 is profit."
            ),
          },
          {
            name: t("ROA y ROE (rendimiento sobre activos y sobre capital)", "ROA and ROE (return on assets and on equity)"),
            expression: "ROA = Utilidad neta ÷ Activo total × 100;   ROE = Utilidad neta ÷ Capital contable × 100",
            variables: [
              { symbol: "Utilidad neta", meaning: t("Ganancia final del periodo, en pesos.", "Final profit for the period, in pesos.") },
              { symbol: "Activo total", meaning: t("Todo lo que tiene la empresa, en pesos.", "Everything the company owns, in pesos.") },
              { symbol: "Capital contable", meaning: t("El dinero de los dueños dentro de la empresa, en pesos (activo total − pasivo total).", "The owners' money in the company, in pesos (total assets − total liabilities).") },
            ],
            steps: [
              t("Para el ROA, divide la utilidad neta entre el activo total y multiplica por 100.", "For ROA, divide net income by total assets and multiply by 100."),
              t("Para el ROE, divide la misma utilidad neta entre el capital contable y multiplica por 100.", "For ROE, divide the same net income by equity and multiply by 100."),
            ],
            example: t(
              "Utilidad neta $180,000, activo total $1,500,000 y capital $600,000. ROA = $180,000 ÷ $1,500,000 = 0.12 = **12 %**. ROE = $180,000 ÷ $600,000 = 0.30 = **30 %**.",
              "Net income $180,000, total assets $1,500,000 and equity $600,000. ROA = $180,000 ÷ $1,500,000 = 0.12 = **12 %**. ROE = $180,000 ÷ $600,000 = 0.30 = **30 %**."
            ),
            interpret: t(
              "El ROA dice cuánto rinde cada peso invertido en activos; el ROE, cuánto rinde cada peso de los dueños. Si el ROE es mucho mayor que el ROA, la empresa usa bastante deuda.",
              "ROA tells how much each peso invested in assets earns; ROE, how much each peso of the owners earns. If ROE is much higher than ROA, the company uses a lot of debt."
            ),
          },
          {
            name: t("Días de cobranza", "Days sales outstanding"),
            expression: "Días de cobranza = Clientes ÷ Ventas × 365",
            variables: [
              { symbol: "Clientes", meaning: t("Pesos que los clientes todavía te deben al cierre.", "Pesos customers still owe you at year end.") },
              { symbol: "Ventas", meaning: t("Ventas anuales a crédito, en pesos.", "Annual credit sales, in pesos.") },
              { symbol: "365", meaning: t("Días del año, para pasar el resultado a días.", "Days in the year, to turn the result into days.") },
            ],
            steps: [
              t("Divide el saldo de clientes entre las ventas del año.", "Divide receivables by the year's sales."),
              t("Multiplica el resultado por 365.", "Multiply the result by 365."),
            ],
            example: t(
              "Clientes $250,000 y ventas $3,650,000: $250,000 ÷ $3,650,000 = 0.0685; 0.0685 × 365 = **25 días**.",
              "Receivables $250,000 and sales $3,650,000: $250,000 ÷ $3,650,000 = 0.0685; 0.0685 × 365 = **25 days**."
            ),
            interpret: t(
              "Menos días es mejor: cobras más rápido y tienes el dinero antes. Compáralo con el plazo de crédito que das (por ejemplo, 30 días).",
              "Fewer days is better: you collect faster and have the money sooner. Compare it with the credit term you give (for example, 30 days)."
            ),
            mistake: t(
              "Invertir la división (Ventas ÷ Clientes × 365), que da un número sin sentido.",
              "Inverting the division (Sales ÷ Receivables × 365), which gives a meaningless number."
            ),
          },
        ],
      },
      {
        heading: t("El modelo DuPont", "The DuPont model"),
        body: [
          t(
            "DuPont descompone el ROE en tres palancas: **margen neto** (rentabilidad de cada peso vendido), **rotación de activos** (eficiencia) y **multiplicador de capital** (activo total ÷ capital, es decir, apalancamiento). Dos empresas con el mismo ROE pueden lograrlo de forma muy distinta: una con alto margen, otra con alta rotación y otra con mucha deuda.",
            "DuPont splits ROE into three levers: **net margin** (profit per peso of sales), **asset turnover** (efficiency) and **equity multiplier** (total assets ÷ equity, i.e. leverage). Two companies with the same ROE can get there very differently: one through high margin, another through high turnover and another through heavy debt."
          ),
          t(
            "Piénsalo como un taquero: puede ganar mucho por taco (margen), vender muchísimos tacos con el mismo puesto (rotación) o poner un puesto más grande con dinero prestado (apalancamiento). DuPont te dice cuál de las tres palancas explica su ganancia.",
            "Think of a taco stand: it can earn a lot per taco (margin), sell lots of tacos with the same stand (turnover) or set up a bigger stand with borrowed money (leverage). DuPont tells you which of the three levers explains its profit."
          ),
        ],
        formulas: [
          {
            name: t("ROE con el modelo DuPont", "ROE with the DuPont model"),
            expression: "ROE = (Utilidad neta ÷ Ventas) × (Ventas ÷ Activo total) × (Activo total ÷ Capital contable)",
            variables: [
              { symbol: "Utilidad neta ÷ Ventas", meaning: t("Margen neto: cuánta ganancia deja cada peso vendido (en %).", "Net margin: how much profit each peso of sales leaves (in %).") },
              { symbol: "Ventas ÷ Activo total", meaning: t("Rotación de activos: cuántos pesos vendes por cada peso de activos (en veces).", "Asset turnover: how many pesos you sell per peso of assets (in times).") },
              { symbol: "Activo total ÷ Capital contable", meaning: t("Multiplicador de capital: cuántos pesos de activos hay por cada peso de los dueños; mide el uso de deuda.", "Equity multiplier: how many pesos of assets there are per peso of the owners; it measures the use of debt.") },
            ],
            steps: [
              t("Calcula el margen neto: utilidad neta ÷ ventas.", "Compute net margin: net income ÷ sales."),
              t("Calcula la rotación: ventas ÷ activo total. Margen × rotación = ROA.", "Compute turnover: sales ÷ total assets. Margin × turnover = ROA."),
              t("Calcula el multiplicador: activo total ÷ capital contable.", "Compute the multiplier: total assets ÷ equity."),
              t("Multiplica los tres factores (no los sumes) y comprueba con utilidad neta ÷ capital.", "Multiply the three factors (do not add them) and check with net income ÷ equity."),
            ],
            example: t(
              "Utilidad neta $100,000, ventas $2,000,000, activo $1,000,000, capital $400,000. Margen = 100,000 ÷ 2,000,000 = 5 %. Rotación = 2,000,000 ÷ 1,000,000 = 2 veces; ROA = 5 % × 2 = 10 %. Multiplicador = 1,000,000 ÷ 400,000 = 2.5. ROE = 10 % × 2.5 = **25 %** (comprobación: 100,000 ÷ 400,000 = 25 %).",
              "Net income $100,000, sales $2,000,000, assets $1,000,000, equity $400,000. Margin = 100,000 ÷ 2,000,000 = 5 %. Turnover = 2,000,000 ÷ 1,000,000 = 2 times; ROA = 5 % × 2 = 10 %. Multiplier = 1,000,000 ÷ 400,000 = 2.5. ROE = 10 % × 2.5 = **25 %** (check: 100,000 ÷ 400,000 = 25 %)."
            ),
            interpret: t(
              "Como ROE = ROA × multiplicador, si conoces ROE y ROA puedes despejar el multiplicador: multiplicador = ROE ÷ ROA. Un multiplicador alto indica mucha deuda: más ROE, pero también más riesgo.",
              "Since ROE = ROA × multiplier, if you know ROE and ROA you can solve for the multiplier: multiplier = ROE ÷ ROA. A high multiplier means heavy debt: more ROE, but also more risk."
            ),
            mistake: t(
              "Usar pasivo ÷ activo como tercer factor (esa es la razón de endeudamiento) o sumar los factores en vez de multiplicarlos.",
              "Using liabilities ÷ assets as the third factor (that is the debt ratio) or adding the factors instead of multiplying them."
            ),
          },
        ],
      },
    ],
    examples: [
      {
        title: t("Liquidez y endeudamiento", "Liquidity and leverage"),
        problem: t(
          "Una empresa tiene activo circulante $1,200,000 (incluye inventarios por $280,000), pasivo circulante $800,000, activo total $5,000,000 y pasivo total $3,000,000. Calcula la razón circulante, la prueba ácida y la razón de endeudamiento.",
          "A company has current assets of $1,200,000 (including inventory of $280,000), current liabilities of $800,000, total assets of $5,000,000 and total liabilities of $3,000,000. Compute the current ratio, the quick ratio and the debt ratio."
        ),
        steps: [
          t("Razón circulante = $1,200,000 ÷ $800,000 = 1.50 veces.", "Current ratio = $1,200,000 ÷ $800,000 = 1.50 times."),
          t("Prueba ácida = ($1,200,000 − $280,000) ÷ $800,000 = $920,000 ÷ $800,000 = 1.15 veces.", "Quick ratio = ($1,200,000 − $280,000) ÷ $800,000 = $920,000 ÷ $800,000 = 1.15 times."),
          t("Endeudamiento = $3,000,000 ÷ $5,000,000 = 60 %.", "Debt ratio = $3,000,000 ÷ $5,000,000 = 60 %."),
        ],
        result: t("1.50x de liquidez, 1.15x sin inventarios y 60 % de los activos financiados con pasivo.", "1.50x liquidity, 1.15x excluding inventory, and 60 % of assets financed with liabilities."),
      },
      {
        title: t("ROE con DuPont", "ROE with DuPont"),
        problem: t(
          "La misma empresa tiene ventas de $6,000,000, utilidad neta de $400,000 y capital contable de $2,000,000. Descompón el ROE.",
          "The same company has sales of $6,000,000, net income of $400,000 and equity of $2,000,000. Break down ROE."
        ),
        steps: [
          t("Margen neto = $400,000 ÷ $6,000,000 = 6.67 %.", "Net margin = $400,000 ÷ $6,000,000 = 6.67 %."),
          t("Rotación de activos = $6,000,000 ÷ $5,000,000 = 1.2 veces; ROA = 6.67 % × 1.2 = 8 %.", "Asset turnover = $6,000,000 ÷ $5,000,000 = 1.2 times; ROA = 6.67 % × 1.2 = 8 %."),
          t("Multiplicador de capital = $5,000,000 ÷ $2,000,000 = 2.5.", "Equity multiplier = $5,000,000 ÷ $2,000,000 = 2.5."),
          t("ROE = 8 % × 2.5 = 20 % (comprobación: $400,000 ÷ $2,000,000 = 20 %).", "ROE = 8 % × 2.5 = 20 % (check: $400,000 ÷ $2,000,000 = 20 %)."),
        ],
        result: t("ROE de 20 %, impulsado en buena parte por el apalancamiento (2.5x).", "ROE of 20 %, driven to a large extent by leverage (2.5x)."),
      },
    ],
    keyPoints: [
      t("Interpreta cada razón contra su tendencia y su industria.", "Interpret each ratio against its trend and its industry."),
      t("La prueba ácida excluye inventarios; es más estricta que la razón circulante.", "The quick ratio excludes inventory; it is stricter than the current ratio."),
      t("ROE = margen × rotación × multiplicador de capital.", "ROE = margin × turnover × equity multiplier."),
      t("Un ROE alto puede venir de más deuda, lo que también eleva el riesgo.", "A high ROE can come from more debt, which also raises risk."),
    ],
    exerciseIds: ["N6-001", "N6-002", "N6-003", "N6-004", "N6-005", "N6-006", "N6-007"],
  },
  // ───────────────────────────── L6-02 ─────────────────────────────
  {
    id: "L6-02",
    level: 6,
    topicIds: ["6.3", "6.4", "6.14", "6.15"],
    title: t("Forecasting, DCF y análisis de sensibilidad", "Forecasting, DCF and sensitivity analysis"),
    summary: t(
      "Proyecta estados financieros, calcula el flujo libre de efectivo de la empresa (FCFF), estima un valor terminal con el modelo de Gordon y valúa la empresa descontando al WACC, revisando cómo cambia el valor ante los supuestos.",
      "Project financial statements, compute free cash flow to the firm (FCFF), estimate a terminal value with the Gordon model and value the company by discounting at WACC, checking how value changes with the assumptions."
    ),
    minutes: 22,
    objectives: [
      t("Proyectar ventas y partidas clave con supuestos explícitos.", "Project sales and key line items with explicit assumptions."),
      t("Calcular el FCFF a partir del EBIT.", "Compute FCFF starting from EBIT."),
      t("Estimar el valor terminal con Gordon y reconocer que requiere r > g.", "Estimate terminal value with Gordon and recognize it requires r > g."),
      t("Descontar flujos para obtener el Enterprise Value y hacer sensibilidad.", "Discount cash flows to get Enterprise Value and run sensitivities."),
    ],
    theory: [
      {
        heading: t("Forecasting y modelos integrados", "Forecasting and integrated models"),
        body: [
          t(
            "El pronóstico parte de **impulsores (drivers)**: crecimiento de ventas, márgenes, días de capital de trabajo y CapEx como % de ventas. En un **modelo integrado**, los tres estados se conectan: la utilidad neta pasa a utilidades retenidas; la depreciación reduce el activo fijo y se suma en el flujo de operación; el efectivo final del flujo de efectivo debe coincidir con el efectivo del balance, y el balance debe cuadrar.",
            "Forecasting starts from **drivers**: sales growth, margins, working-capital days and CapEx as % of sales. In an **integrated model** the three statements are linked: net income flows to retained earnings; depreciation reduces fixed assets and is added back in operating cash flow; ending cash in the cash flow statement must equal balance-sheet cash, and the balance sheet must balance."
          ),
          t(
            "En palabras sencillas: proyectar es estimar los números de los próximos años a partir de unos pocos supuestos. Un **impulsor (driver)** es un supuesto que mueve todo lo demás, como «las ventas crecerán 8 % al año». El **CapEx** es lo que se invierte en maquinaria, equipo o locales. Cuando las ventas crecen cada año sobre lo del año anterior, el crecimiento es **compuesto**, igual que los intereses de una cuenta de ahorro.",
            "In simple words: forecasting means estimating the next years' numbers from a few assumptions. A **driver** is an assumption that moves everything else, such as «sales will grow 8 % a year». **CapEx** is what is invested in machinery, equipment or premises. When sales grow each year on top of the previous year, growth is **compound**, just like interest in a savings account."
          ),
        ],
        formulas: [
          {
            name: t("Ventas proyectadas con crecimiento compuesto", "Projected sales with compound growth"),
            expression: "Ventas_n = Ventas_0 × (1 + g)^n",
            variables: [
              { symbol: "Ventas_n", meaning: t("Ventas estimadas del año n, en pesos.", "Estimated sales for year n, in pesos.") },
              { symbol: "Ventas_0", meaning: t("Ventas del año base (el último real), en pesos.", "Sales of the base year (the last actual one), in pesos.") },
              { symbol: "g", meaning: t("Tasa de crecimiento anual, en decimal (8 % = 0.08).", "Annual growth rate, as a decimal (8 % = 0.08).") },
              { symbol: "n", meaning: t("Número de años que proyectas hacia adelante.", "Number of years you project forward.") },
            ],
            steps: [
              t("Convierte la tasa a decimal y súmale 1: 6 % → 1.06.", "Convert the rate to a decimal and add 1: 6 % → 1.06."),
              t("Eleva ese número a la potencia n (los años).", "Raise that number to the power n (the years)."),
              t("Multiplica el resultado por las ventas del año base.", "Multiply the result by base-year sales."),
            ],
            example: t(
              "Ventas año 0 $5,000,000, crecimiento 6 %, año 3. Factor: 1.06³ = 1.06 × 1.06 × 1.06 = 1.191016. Ventas año 3 = $5,000,000 × 1.191016 = **$5,955,080**.",
              "Year-0 sales $5,000,000, growth 6 %, year 3. Factor: 1.06³ = 1.06 × 1.06 × 1.06 = 1.191016. Year-3 sales = $5,000,000 × 1.191016 = **$5,955,080**."
            ),
            mistake: t(
              "Usar crecimiento simple (6 % × 3 = 18 %, es decir × 1.18): olvida que cada año crece sobre el año anterior, ya crecido.",
              "Using simple growth (6 % × 3 = 18 %, i.e. × 1.18): it forgets that each year grows on the previous, already grown year."
            ),
          },
        ],
      },
      {
        heading: t("Flujo libre de efectivo de la empresa (FCFF)", "Free cash flow to the firm (FCFF)"),
        body: [
          t(
            "El FCFF es el efectivo disponible para **todos** los proveedores de capital (acreedores y accionistas) después de impuestos operativos, inversiones en activo fijo y en capital de trabajo. Como incluye a los acreedores, se descuenta al **WACC** y el resultado es el **Enterprise Value**.",
            "FCFF is the cash available to **all** capital providers (lenders and shareholders) after operating taxes, fixed-asset investment and working-capital investment. Because it includes lenders, it is discounted at **WACC** and the result is **Enterprise Value**."
          ),
          t(
            "En palabras sencillas: es el dinero que el negocio genera y que podría repartirse entre bancos y dueños sin frenar la operación. El **WACC** es el costo promedio de ese dinero (lo que exigen bancos y dueños juntos). La **depreciación y amortización (D&A)** se suma porque es un gasto en papel: reduce la utilidad, pero no sale dinero de la caja.",
            "In simple words: it is the money the business generates that could be shared among banks and owners without slowing operations. **WACC** is the average cost of that money (what banks and owners require together). **Depreciation and amortization (D&A)** is added back because it is a paper expense: it lowers profit, but no money leaves the till."
          ),
        ],
        formulas: [
          {
            name: t("Flujo libre de efectivo de la empresa (FCFF)", "Free cash flow to the firm (FCFF)"),
            expression: "FCFF = EBIT × (1 − T) + D&A − CapEx − ΔCapital de trabajo",
            variables: [
              { symbol: "EBIT", meaning: t("Utilidad de operación antes de intereses e impuestos, en pesos.", "Operating profit before interest and taxes, in pesos.") },
              { symbol: "T", meaning: t("Tasa de impuestos, en decimal (30 % = 0.30).", "Tax rate, as a decimal (30 % = 0.30).") },
              { symbol: "EBIT × (1 − T)", meaning: t("NOPAT: utilidad de operación después de impuestos.", "NOPAT: operating profit after taxes.") },
              { symbol: "D&A", meaning: t("Depreciación y amortización del año, en pesos; se suma porque no es salida de dinero.", "Depreciation and amortization for the year, in pesos; added back because it is not a cash outflow.") },
              { symbol: "CapEx", meaning: t("Inversión del año en activo fijo (maquinaria, equipo), en pesos.", "The year's investment in fixed assets (machinery, equipment), in pesos.") },
              { symbol: "ΔCapital de trabajo", meaning: t("Aumento del dinero atrapado en clientes e inventarios menos proveedores, en pesos.", "Increase in money tied up in receivables and inventory minus payables, in pesos.") },
            ],
            steps: [
              t("Calcula el NOPAT: multiplica el EBIT por (1 − T).", "Compute NOPAT: multiply EBIT by (1 − T)."),
              t("Súmale la D&A.", "Add D&A."),
              t("Réstale el CapEx y el aumento de capital de trabajo.", "Subtract CapEx and the increase in working capital."),
            ],
            example: t(
              "EBIT $800,000, impuestos 30 %, D&A $120,000, CapEx $180,000, aumento de capital de trabajo $40,000. NOPAT = $800,000 × 0.70 = $560,000. Más D&A: $560,000 + $120,000 = $680,000. Menos inversiones: $680,000 − $180,000 − $40,000 = **$460,000**.",
              "EBIT $800,000, tax 30 %, D&A $120,000, CapEx $180,000, increase in working capital $40,000. NOPAT = $800,000 × 0.70 = $560,000. Plus D&A: $560,000 + $120,000 = $680,000. Minus investments: $680,000 − $180,000 − $40,000 = **$460,000**."
            ),
            mistake: t(
              "Restar los intereses: el FCFF es antes de pagar a bancos y dueños; el costo de la deuda ya va dentro del WACC.",
              "Subtracting interest: FCFF is before paying banks and owners; the cost of debt is already inside WACC."
            ),
          },
        ],
      },
      {
        heading: t("Valor terminal con Gordon", "Terminal value with Gordon"),
        body: [
          t(
            "Después del periodo explícito (por ejemplo 5 años) se supone crecimiento constante g a perpetuidad. El modelo de Gordon solo tiene sentido si **r > g**: si g ≥ r el denominador es cero o negativo y el valor sería infinito o negativo. Además, g de largo plazo no debería superar el crecimiento nominal de la economía.",
            "After the explicit period (e.g. 5 years) a constant perpetual growth g is assumed. The Gordon model only makes sense if **r > g**: if g ≥ r the denominator is zero or negative and value would be infinite or negative. Also, long-run g should not exceed the economy's nominal growth."
          ),
          t(
            "El valor terminal está fechado al final del año n, así que también se descuenta n periodos. Con frecuencia representa más de la mitad del valor total, por eso se revisa con cuidado.",
            "The terminal value is dated at the end of year n, so it is also discounted n periods. It often represents more than half of total value, which is why it deserves careful review."
          ),
          t(
            "En palabras sencillas: no puedes proyectar año por año para siempre, así que después de unos años resumes «todo lo que sigue» en un solo número: el **valor terminal**. **Descontar** es traer dinero futuro a pesos de hoy: $100 dentro de un año valen menos que $100 hoy, porque hoy podrías invertirlos. Sumando los flujos descontados y el valor terminal descontado obtienes el **Enterprise Value**, el valor del negocio completo.",
            "In simple words: you cannot project year by year forever, so after a few years you summarize «everything that follows» in one number: the **terminal value**. **Discounting** means bringing future money to today's pesos: $100 a year from now is worth less than $100 today, because today you could invest it. Adding the discounted flows and the discounted terminal value gives **Enterprise Value**, the value of the whole business."
          ),
        ],
        formulas: [
          {
            name: t("Valor terminal con el modelo de Gordon", "Terminal value with the Gordon model"),
            expression: "VT_n = FCFF_n × (1 + g) ÷ (WACC − g)",
            variables: [
              { symbol: "VT_n", meaning: t("Valor, al cierre del año n, de todos los flujos posteriores, en pesos.", "Value, at the end of year n, of all later flows, in pesos.") },
              { symbol: "FCFF_n", meaning: t("Flujo libre del último año proyectado, en pesos.", "Free cash flow of the last projected year, in pesos.") },
              { symbol: "g", meaning: t("Crecimiento anual constante a perpetuidad (para siempre), en decimal.", "Constant annual growth in perpetuity (forever), as a decimal.") },
              { symbol: "WACC", meaning: t("Tasa de descuento: costo promedio del capital, en decimal.", "Discount rate: average cost of capital, as a decimal.") },
            ],
            steps: [
              t("Calcula el flujo del año siguiente: FCFF_n × (1 + g).", "Compute next year's flow: FCFF_n × (1 + g)."),
              t("Resta las tasas: WACC − g (en decimal). Debe ser positivo.", "Subtract the rates: WACC − g (as decimals). It must be positive."),
              t("Divide el flujo del año siguiente entre esa diferencia.", "Divide next year's flow by that difference."),
            ],
            example: t(
              "FCFF del año 4 $500,000, g 2 %, WACC 9 %. Flujo siguiente: $500,000 × 1.02 = $510,000. Diferencia: 0.09 − 0.02 = 0.07. VT₄ = $510,000 ÷ 0.07 = **$7,285,714.29** (valor al cierre del año 4, todavía no es valor de hoy).",
              "Year-4 FCFF $500,000, g 2 %, WACC 9 %. Next flow: $500,000 × 1.02 = $510,000. Difference: 0.09 − 0.02 = 0.07. TV₄ = $510,000 ÷ 0.07 = **$7,285,714.29** (value at the end of year 4, not yet today's value)."
            ),
            mistake: t(
              "Olvidar multiplicar por (1 + g), sumar las tasas en el denominador o usar g mayor o igual que el WACC (el resultado deja de tener sentido).",
              "Forgetting to multiply by (1 + g), adding the rates in the denominator or using g equal to or above WACC (the result stops making sense)."
            ),
          },
          {
            name: t("Enterprise Value por flujos descontados (DCF)", "Enterprise Value by discounted cash flows (DCF)"),
            expression: "EV = Σ FCFF_t ÷ (1 + WACC)^t + VT_n ÷ (1 + WACC)^n",
            variables: [
              { symbol: "EV", meaning: t("Enterprise Value: valor hoy del negocio, en pesos.", "Enterprise Value: today's value of the business, in pesos.") },
              { symbol: "Σ", meaning: t("«Suma de»: sumas el resultado de cada año.", "«Sum of»: you add up each year's result.") },
              { symbol: "FCFF_t", meaning: t("Flujo libre del año t, en pesos.", "Free cash flow of year t, in pesos.") },
              { symbol: "t", meaning: t("Número del año (1, 2, 3…): es el exponente del descuento.", "Year number (1, 2, 3…): it is the discount exponent.") },
              { symbol: "WACC", meaning: t("Tasa de descuento, en decimal.", "Discount rate, as a decimal.") },
              { symbol: "VT_n", meaning: t("Valor terminal al cierre del último año n, en pesos.", "Terminal value at the end of the last year n, in pesos.") },
            ],
            steps: [
              t("Divide cada flujo entre (1 + WACC) elevado a su año.", "Divide each flow by (1 + WACC) raised to its year."),
              t("Suma esos valores presentes.", "Add up those present values."),
              t("Divide el valor terminal entre (1 + WACC)^n, con n = último año proyectado.", "Divide the terminal value by (1 + WACC)^n, with n = last projected year."),
              t("Suma los dos resultados: eso es el EV.", "Add the two results: that is EV."),
            ],
            example: t(
              "FCFF: año 1 $300,000, año 2 $330,000; WACC 12 %; VT₂ $3,000,000. Año 1: 300,000 ÷ 1.12 = 267,857.14. Año 2: 330,000 ÷ 1.2544 = 263,073.98. Suma = 530,931.12. VP del VT = 3,000,000 ÷ 1.2544 = 2,391,581.63. EV = 530,931.12 + 2,391,581.63 = **$2,922,512.75**.",
              "FCFF: year 1 $300,000, year 2 $330,000; WACC 12 %; TV₂ $3,000,000. Year 1: 300,000 ÷ 1.12 = 267,857.14. Year 2: 330,000 ÷ 1.2544 = 263,073.98. Sum = 530,931.12. PV of TV = 3,000,000 ÷ 1.2544 = 2,391,581.63. EV = 530,931.12 + 2,391,581.63 = **$2,922,512.75**."
            ),
            mistake: t(
              "No descontar el valor terminal, o descontarlo un año de más: se descuenta los mismos n años que el último flujo.",
              "Not discounting the terminal value, or discounting it one year too many: it is discounted the same n years as the last flow."
            ),
          },
        ],
      },
      {
        heading: t("Análisis de sensibilidad", "Sensitivity analysis"),
        body: [
          t(
            "Un DCF es tan bueno como sus supuestos. La **sensibilidad** cambia un supuesto a la vez (WACC, g, margen) y muestra el efecto en el valor; una tabla de doble entrada WACC × g es lo más común. Los escenarios (base, optimista, pesimista) cambian varios supuestos a la vez de forma coherente.",
            "A DCF is only as good as its assumptions. **Sensitivity** changes one assumption at a time (WACC, g, margin) and shows the effect on value; a two-way WACC × g table is the most common. Scenarios (base, upside, downside) change several assumptions together consistently."
          ),
          t(
            "En palabras sencillas: es preguntarte «¿y si me equivoqué un poquito?». Como el denominador WACC − g suele ser pequeño, un solo punto de cambio en la tasa mueve mucho el valor terminal.",
            "In simple words: it is asking yourself «what if I was a little off?». Because the WACC − g denominator is usually small, a single point of change in the rate moves terminal value a lot."
          ),
        ],
        formulas: [
          {
            name: t("Cambio porcentual del valor en una sensibilidad", "Percentage change in value in a sensitivity"),
            expression: "Cambio % = (Valor nuevo ÷ Valor base − 1) × 100",
            variables: [
              { symbol: "Valor base", meaning: t("Valor calculado con los supuestos originales, en pesos.", "Value computed with the original assumptions, in pesos.") },
              { symbol: "Valor nuevo", meaning: t("Valor recalculado tras cambiar un supuesto, en pesos.", "Value recalculated after changing one assumption, in pesos.") },
            ],
            steps: [
              t("Calcula el valor con el supuesto original (valor base).", "Compute value with the original assumption (base value)."),
              t("Cambia solo un supuesto y recalcula (valor nuevo).", "Change just one assumption and recalculate (new value)."),
              t("Divide nuevo ÷ base, resta 1 y multiplica por 100.", "Divide new ÷ base, subtract 1 and multiply by 100."),
            ],
            example: t(
              "Flujo del año siguiente $1,020,000 y g 2 %. Con WACC 11 %: $1,020,000 ÷ 0.09 = $11,333,333.33. Con WACC 12 %: $1,020,000 ÷ 0.10 = $10,200,000. Cambio = (10,200,000 ÷ 11,333,333.33 − 1) × 100 = **−10 %**. Atajo con Gordon: 0.09 ÷ 0.10 − 1 = −10 %.",
              "Next-year flow $1,020,000 and g 2 %. With WACC 11 %: $1,020,000 ÷ 0.09 = $11,333,333.33. With WACC 12 %: $1,020,000 ÷ 0.10 = $10,200,000. Change = (10,200,000 ÷ 11,333,333.33 − 1) × 100 = **−10 %**. Gordon shortcut: 0.09 ÷ 0.10 − 1 = −10 %."
            ),
            interpret: t(
              "Un punto más de WACC bajó el valor 10 %: si el valor es tan sensible, conviene presentar un rango y no un solo número.",
              "One more point of WACC cut value by 10 %: when value is this sensitive, it is better to present a range rather than a single number."
            ),
            mistake: t(
              "Confundir el cambio en la tasa (1 punto) con el cambio en el valor (que puede ser de 10 % o más).",
              "Confusing the change in the rate (1 point) with the change in value (which can be 10 % or more)."
            ),
          },
        ],
      },
    ],
    examples: [
      {
        title: t("Cálculo del FCFF", "Computing FCFF"),
        problem: t(
          "EBIT $2,000,000; tasa de impuestos 30 %; depreciación y amortización $300,000; CapEx $450,000; aumento de capital de trabajo $100,000.",
          "EBIT $2,000,000; tax rate 30 %; depreciation and amortization $300,000; CapEx $450,000; increase in working capital $100,000."
        ),
        steps: [
          t("NOPAT = $2,000,000 × (1 − 0.30) = $1,400,000.", "NOPAT = $2,000,000 × (1 − 0.30) = $1,400,000."),
          t("Sumar D&A: $1,400,000 + $300,000 = $1,700,000.", "Add D&A: $1,400,000 + $300,000 = $1,700,000."),
          t("Restar CapEx y ΔCT: $1,700,000 − $450,000 − $100,000 = $1,150,000.", "Subtract CapEx and ΔWC: $1,700,000 − $450,000 − $100,000 = $1,150,000."),
        ],
        result: t("FCFF = $1,150,000.", "FCFF = $1,150,000."),
      },
      {
        title: t("DCF de tres años con valor terminal", "Three-year DCF with terminal value"),
        problem: t(
          "FCFF proyectados: año 1 $200,000; año 2 $220,000; año 3 $240,000. WACC 10 %, g a perpetuidad 3 %. Calcula el Enterprise Value.",
          "Projected FCFF: year 1 $200,000; year 2 $220,000; year 3 $240,000. WACC 10 %, perpetual g 3 %. Compute Enterprise Value."
        ),
        steps: [
          t("VP de los flujos: 200,000 ÷ 1.1 = 181,818.18; 220,000 ÷ 1.21 = 181,818.18; 240,000 ÷ 1.331 = 180,315.55; suma $543,951.92.", "PV of flows: 200,000 ÷ 1.1 = 181,818.18; 220,000 ÷ 1.21 = 181,818.18; 240,000 ÷ 1.331 = 180,315.55; sum $543,951.92."),
          t("VT al año 3 = 240,000 × 1.03 ÷ (0.10 − 0.03) = $3,531,428.57.", "TV at year 3 = 240,000 × 1.03 ÷ (0.10 − 0.03) = $3,531,428.57."),
          t("VP del VT = 3,531,428.57 ÷ 1.331 = $2,653,214.55.", "PV of TV = 3,531,428.57 ÷ 1.331 = $2,653,214.55."),
          t("EV = 543,951.92 + 2,653,214.55 = $3,197,166.47.", "EV = 543,951.92 + 2,653,214.55 = $3,197,166.47."),
        ],
        result: t("EV ≈ $3,197,166; el valor terminal aporta cerca del 83 % del total.", "EV ≈ $3,197,166; the terminal value contributes about 83 % of the total."),
      },
    ],
    keyPoints: [
      t("FCFF = EBIT(1 − T) + D&A − CapEx − ΔCT; se descuenta al WACC.", "FCFF = EBIT(1 − T) + D&A − CapEx − ΔWC; discount it at WACC."),
      t("Gordon exige WACC > g; el VT se descuenta n periodos.", "Gordon requires WACC > g; the TV is discounted n periods."),
      t("El valor terminal suele dominar el valor: haz sensibilidad sobre WACC y g.", "Terminal value often dominates value: run sensitivities on WACC and g."),
      t("En un modelo integrado, el efectivo del flujo debe igualar al del balance.", "In an integrated model, cash-flow cash must equal balance-sheet cash."),
    ],
    exerciseIds: ["N6-008", "N6-009", "N6-010", "N6-011", "N6-012", "N6-013", "N6-014", "N6-015"],
  },
  // ───────────────────────────── L6-03 ─────────────────────────────
  {
    id: "L6-03",
    level: 6,
    topicIds: ["6.5", "6.6", "6.7"],
    title: t("Enterprise Value, Equity Value y valuación por múltiplos", "Enterprise Value, Equity Value and multiples valuation"),
    summary: t(
      "Construye el puente entre Enterprise Value y Equity Value y valúa una empresa con múltiplos comparables como EV/EBITDA y P/E, cuidando la consistencia entre numerador y denominador.",
      "Build the bridge between Enterprise Value and Equity Value and value a company with comparable multiples such as EV/EBITDA and P/E, keeping numerator and denominator consistent."
    ),
    minutes: 17,
    objectives: [
      t("Calcular el Enterprise Value a partir de la capitalización de mercado.", "Compute Enterprise Value from market capitalization."),
      t("Pasar de EV a valor del capital y a valor por acción.", "Move from EV to equity value and value per share."),
      t("Aplicar múltiplos EV/EBITDA y P/E de comparables.", "Apply EV/EBITDA and P/E multiples from comparables."),
      t("Elegir múltiplos consistentes (EV con métricas antes de intereses; precio con métricas después de intereses).", "Choose consistent multiples (EV with pre-interest metrics; price with post-interest metrics)."),
    ],
    theory: [
      {
        heading: t("Dos formas de medir el valor", "Two ways to measure value"),
        body: [
          t(
            "El **Equity Value** (valor del capital) es lo que vale la empresa para sus accionistas; en una empresa pública es la **capitalización de mercado** (acciones en circulación × precio). El **Enterprise Value (EV)** es el valor del negocio operativo para todos los proveedores de capital: accionistas, acreedores, accionistas preferentes y participación no controladora (minoritarios).",
            "**Equity Value** is what the company is worth to its shareholders; for a listed company it is **market capitalization** (shares outstanding × price). **Enterprise Value (EV)** is the value of the operating business to all capital providers: shareholders, lenders, preferred shareholders and non-controlling (minority) interests."
          ),
          t(
            "Piensa en una casa de $2,000,000 con una hipoteca pendiente de $500,000. La casa completa vale $2,000,000 (como el EV), pero lo que realmente es tuyo son $1,500,000 (como el equity value). La **participación no controladora** es la parte de una filial que pertenece a otros socios, y las **acciones preferentes** son acciones con derechos especiales de cobro; ambas son «dueños» que no son los accionistas comunes.",
            "Think of a $2,000,000 house with a $500,000 mortgage still owed. The whole house is worth $2,000,000 (like EV), but what is really yours is $1,500,000 (like equity value). **Non-controlling interest** is the part of a subsidiary owned by other partners, and **preferred shares** are shares with special payment rights; both are «owners» other than common shareholders."
          ),
        ],
        formulas: [
          {
            name: t("Enterprise Value desde el valor de mercado", "Enterprise Value from market value"),
            expression: "EV = Equity Value + Deuda − Efectivo + Participación no controladora + Acciones preferentes",
            variables: [
              { symbol: "Equity Value", meaning: t("Valor del capital; en empresa listada = acciones en circulación × precio por acción, en pesos.", "Equity value; for a listed company = shares outstanding × price per share, in pesos.") },
              { symbol: "Deuda", meaning: t("Préstamos y bonos que cobran intereses, en pesos.", "Interest-bearing loans and bonds, in pesos.") },
              { symbol: "Efectivo", meaning: t("Caja, bancos e inversiones de fácil venta, en pesos.", "Cash, bank balances and easily sold investments, in pesos.") },
              { symbol: "Participación no controladora", meaning: t("Parte de las filiales que pertenece a otros socios, en pesos.", "Part of subsidiaries owned by other partners, in pesos.") },
              { symbol: "Acciones preferentes", meaning: t("Valor de las acciones preferentes, en pesos.", "Value of preferred shares, in pesos.") },
            ],
            steps: [
              t("Calcula la capitalización: número de acciones × precio.", "Compute market cap: number of shares × price."),
              t("Súmale la deuda y réstale el efectivo (eso es sumar la deuda neta).", "Add debt and subtract cash (that is adding net debt)."),
              t("Suma la participación no controladora y las preferentes, si existen.", "Add non-controlling interest and preferred shares, if any."),
            ],
            example: t(
              "8,000,000 acciones a $25, deuda $90,000,000, efectivo $30,000,000, participación no controladora $10,000,000, sin preferentes. Capitalización = 8,000,000 × $25 = $200,000,000. Deuda neta = $90,000,000 − $30,000,000 = $60,000,000. EV = $200,000,000 + $60,000,000 + $10,000,000 = **$270,000,000**.",
              "8,000,000 shares at $25, debt $90,000,000, cash $30,000,000, non-controlling interest $10,000,000, no preferred. Market cap = 8,000,000 × $25 = $200,000,000. Net debt = $90,000,000 − $30,000,000 = $60,000,000. EV = $200,000,000 + $60,000,000 + $10,000,000 = **$270,000,000**."
            ),
            mistake: t(
              "Sumar el efectivo en lugar de restarlo, u olvidar la participación no controladora.",
              "Adding cash instead of subtracting it, or forgetting non-controlling interest."
            ),
          },
        ],
      },
      {
        heading: t("Por qué se resta el efectivo", "Why cash is subtracted"),
        body: [
          t(
            "El efectivo excedente no es parte del negocio operativo: quien compra la empresa «recupera» ese efectivo. Por eso se usa **deuda neta** (deuda − efectivo). Una consecuencia: pagar deuda con efectivo no cambia el EV (baja la deuda y baja el efectivo en la misma cantidad) ni el equity value.",
            "Excess cash is not part of the operating business: whoever buys the company «gets back» that cash. That is why **net debt** (debt − cash) is used. A consequence: repaying debt with cash changes neither EV (debt and cash fall by the same amount) nor equity value."
          ),
        ],
      },
      {
        heading: t("Valuación por múltiplos", "Multiples valuation"),
        body: [
          t(
            "La valuación relativa aplica a la empresa objetivo el múltiplo típico (mediana) de **comparables** del mismo sector, tamaño y crecimiento. La regla de oro es la **consistencia**: si el numerador es EV (todos los inversionistas), el denominador debe ser una métrica antes de intereses (ventas, EBITDA, EBIT). Si el numerador es el precio o equity value, el denominador es una métrica para el accionista (utilidad neta, valor en libros).",
            "Relative valuation applies to the target the typical (median) multiple of **comparables** in the same sector, size and growth. The golden rule is **consistency**: if the numerator is EV (all investors), the denominator must be a pre-interest metric (sales, EBITDA, EBIT). If the numerator is price or equity value, the denominator is a shareholder metric (net income, book value)."
          ),
          t(
            "EV/EBITDA es útil para comparar empresas con distinta estructura de capital porque el EBITDA es anterior a intereses. El P/E es intuitivo pero se ve afectado por el apalancamiento, los impuestos y partidas no recurrentes.",
            "EV/EBITDA is useful for comparing companies with different capital structures because EBITDA comes before interest. P/E is intuitive but is affected by leverage, taxes and non-recurring items."
          ),
          t(
            "En palabras sencillas: es como valuar tu casa viendo a cuánto se vendieron casas parecidas de tu colonia. Un **múltiplo** dice «cuántas veces» una medida vale la empresa (7x EBITDA = 7 veces su EBITDA). El **EBITDA** es la utilidad de operación antes de intereses, impuestos, depreciación y amortización. La **mediana** es el valor de en medio cuando ordenas los comparables de menor a mayor.",
            "In simple words: it is like valuing your house by looking at what similar houses in your neighborhood sold for. A **multiple** says «how many times» a measure the company is worth (7x EBITDA = 7 times its EBITDA). **EBITDA** is operating profit before interest, taxes, depreciation and amortization. The **median** is the middle value when you sort the comparables from lowest to highest."
          ),
        ],
        formulas: [
          {
            name: t("Valor por acción con EV/EBITDA", "Value per share with EV/EBITDA"),
            expression: "EV implícito = Múltiplo EV/EBITDA × EBITDA;   Equity = EV − Deuda neta;   Valor por acción = Equity ÷ Acciones",
            variables: [
              { symbol: "Múltiplo EV/EBITDA", meaning: t("Mediana de los comparables, en veces (x).", "Median of the comparables, in times (x).") },
              { symbol: "EBITDA", meaning: t("Utilidad de operación antes de intereses, impuestos, depreciación y amortización de la empresa objetivo, en pesos.", "The target's operating profit before interest, taxes, depreciation and amortization, in pesos.") },
              { symbol: "Deuda neta", meaning: t("Deuda − efectivo, en pesos.", "Debt − cash, in pesos.") },
              { symbol: "Acciones", meaning: t("Número de acciones en circulación.", "Number of shares outstanding.") },
            ],
            steps: [
              t("Ordena los múltiplos de los comparables y toma la mediana.", "Sort the comparables' multiples and take the median."),
              t("Multiplica la mediana por el EBITDA: es el EV implícito.", "Multiply the median by EBITDA: that is the implied EV."),
              t("Resta la deuda neta para llegar al equity value.", "Subtract net debt to reach equity value."),
              t("Divide entre el número de acciones.", "Divide by the number of shares."),
            ],
            example: t(
              "Comparables a 5x, 6x y 9x; mediana 6x. EBITDA $50,000,000, deuda neta $70,000,000, 10,000,000 acciones. EV = 6 × $50,000,000 = $300,000,000. Equity = $300,000,000 − $70,000,000 = $230,000,000. Por acción = $230,000,000 ÷ 10,000,000 = **$23.00**.",
              "Comparables at 5x, 6x and 9x; median 6x. EBITDA $50,000,000, net debt $70,000,000, 10,000,000 shares. EV = 6 × $50,000,000 = $300,000,000. Equity = $300,000,000 − $70,000,000 = $230,000,000. Per share = $230,000,000 ÷ 10,000,000 = **$23.00**."
            ),
            mistake: t(
              "Dividir el EV directamente entre las acciones sin restar la deuda neta: la deuda pertenece a los bancos, no a los accionistas.",
              "Dividing EV directly by shares without subtracting net debt: the debt belongs to the banks, not the shareholders."
            ),
          },
          {
            name: t("Valuación con P/E (precio/utilidad)", "Valuation with P/E (price/earnings)"),
            expression: "Equity = P/E × Utilidad neta;   Valor por acción = Equity ÷ Acciones;   EV = Equity + Deuda neta",
            variables: [
              { symbol: "P/E", meaning: t("Múltiplo precio/utilidad de los comparables, en veces (x).", "Comparables' price/earnings multiple, in times (x).") },
              { symbol: "Utilidad neta", meaning: t("Ganancia final de la empresa objetivo, en pesos.", "The target's final profit, in pesos.") },
              { symbol: "Acciones", meaning: t("Número de acciones en circulación.", "Number of shares outstanding.") },
              { symbol: "Deuda neta", meaning: t("Deuda − efectivo, en pesos.", "Debt − cash, in pesos.") },
            ],
            steps: [
              t("Multiplica el P/E por la utilidad neta: da directamente el equity value.", "Multiply P/E by net income: it gives equity value directly."),
              t("Divide el equity value entre las acciones para el valor por acción.", "Divide equity value by shares for value per share."),
              t("Si te piden el EV, suma la deuda neta al equity value.", "If asked for EV, add net debt to equity value."),
            ],
            example: t(
              "P/E 15x, utilidad neta $8,000,000, deuda neta $20,000,000, 5,000,000 acciones. Equity = 15 × $8,000,000 = $120,000,000. Por acción = $120,000,000 ÷ 5,000,000 = **$24.00**. EV = $120,000,000 + $20,000,000 = **$140,000,000**.",
              "P/E 15x, net income $8,000,000, net debt $20,000,000, 5,000,000 shares. Equity = 15 × $8,000,000 = $120,000,000. Per share = $120,000,000 ÷ 5,000,000 = **$24.00**. EV = $120,000,000 + $20,000,000 = **$140,000,000**."
            ),
            mistake: t(
              "Restar la deuda neta al resultado del P/E: la utilidad neta ya es después de intereses, así que el P/E da valor del capital, no EV.",
              "Subtracting net debt from the P/E result: net income is already after interest, so P/E gives equity value, not EV."
            ),
          },
        ],
        bullets: [
          t("Múltiplos de EV: EV/Ventas, EV/EBITDA, EV/EBIT.", "EV multiples: EV/Sales, EV/EBITDA, EV/EBIT."),
          t("Múltiplos de capital: P/E (precio/utilidad), P/VL (precio/valor en libros).", "Equity multiples: P/E (price/earnings), P/B (price/book)."),
        ],
      },
    ],
    examples: [
      {
        title: t("Puente de equity value a EV", "Bridge from equity value to EV"),
        problem: t(
          "Una empresa tiene 50,000,000 de acciones a $30, deuda de $600,000,000, efectivo de $200,000,000 y participación no controladora de $50,000,000. Calcula su EV.",
          "A company has 50,000,000 shares at $30, debt of $600,000,000, cash of $200,000,000 and non-controlling interest of $50,000,000. Compute its EV."
        ),
        steps: [
          t("Capitalización de mercado = 50,000,000 × $30 = $1,500,000,000.", "Market cap = 50,000,000 × $30 = $1,500,000,000."),
          t("Deuda neta = $600,000,000 − $200,000,000 = $400,000,000.", "Net debt = $600,000,000 − $200,000,000 = $400,000,000."),
          t("EV = $1,500,000,000 + $400,000,000 + $50,000,000 = $1,950,000,000.", "EV = $1,500,000,000 + $400,000,000 + $50,000,000 = $1,950,000,000."),
        ],
        result: t("EV = $1,950,000,000.", "EV = $1,950,000,000."),
      },
      {
        title: t("Valor por acción con EV/EBITDA", "Value per share with EV/EBITDA"),
        problem: t(
          "Los comparables cotizan a 6x, 7x y 8x EV/EBITDA. La empresa objetivo tiene EBITDA de $300,000,000, deuda neta de $400,000,000 y 100,000,000 de acciones.",
          "Comparables trade at 6x, 7x and 8x EV/EBITDA. The target has EBITDA of $300,000,000, net debt of $400,000,000 and 100,000,000 shares."
        ),
        steps: [
          t("Mediana de comparables: 7x.", "Median of comparables: 7x."),
          t("EV implícito = 7 × $300,000,000 = $2,100,000,000.", "Implied EV = 7 × $300,000,000 = $2,100,000,000."),
          t("Equity value = $2,100,000,000 − $400,000,000 = $1,700,000,000.", "Equity value = $2,100,000,000 − $400,000,000 = $1,700,000,000."),
          t("Por acción = $1,700,000,000 ÷ 100,000,000 = $17.00.", "Per share = $1,700,000,000 ÷ 100,000,000 = $17.00."),
        ],
        result: t("Valor implícito de $17.00 por acción.", "Implied value of $17.00 per share."),
      },
    ],
    keyPoints: [
      t("EV = equity value + deuda neta + minoritarios + preferentes.", "EV = equity value + net debt + minorities + preferred."),
      t("Del EV al precio: resta deuda neta (y otros derechos) y divide entre acciones.", "From EV to price: subtract net debt (and other claims) and divide by shares."),
      t("Usa múltiplos consistentes: EV con EBITDA/EBIT/ventas; precio con utilidad neta.", "Use consistent multiples: EV with EBITDA/EBIT/sales; price with net income."),
      t("Pagar deuda con efectivo no cambia el EV.", "Repaying debt with cash does not change EV."),
    ],
    exerciseIds: ["N6-016", "N6-017", "N6-018", "N6-019", "N6-020", "N6-021", "N6-022"],
  },
  // ───────────────────────────── L6-04 ─────────────────────────────
  {
    id: "L6-04",
    level: 6,
    topicIds: ["6.8", "6.9"],
    title: t("Fusiones, adquisiciones y LBO", "Mergers, acquisitions and LBOs"),
    summary: t(
      "Evalúa sinergias, analiza si una adquisición pagada con acciones es acretiva o dilutiva para la UPA y mide los rendimientos de un LBO con MOIC y TIR.",
      "Evaluate synergies, analyze whether a stock-financed acquisition is accretive or dilutive to EPS, and measure LBO returns with MOIC and IRR."
    ),
    minutes: 20,
    objectives: [
      t("Distinguir sinergias de costos, de ingresos y financieras.", "Distinguish cost, revenue and financial synergies."),
      t("Calcular la UPA pro forma y el efecto de acreción o dilución.", "Compute pro forma EPS and the accretion or dilution effect."),
      t("Describir la estructura de un LBO y qué empresas son buenas candidatas.", "Describe the structure of an LBO and which companies are good candidates."),
      t("Calcular MOIC y TIR de una inversión de capital privado.", "Compute MOIC and IRR for a private equity investment."),
    ],
    theory: [
      {
        heading: t("Por qué se compran empresas", "Why companies are acquired"),
        body: [
          t(
            "Una adquisición crea valor si el valor combinado supera la suma de las partes más la prima pagada. La diferencia viene de las **sinergias**: de **costos** (eliminar duplicidades, economías de escala en compras), de **ingresos** (venta cruzada, nuevos canales) y **financieras** (menor costo de deuda). Las sinergias de costos suelen ser más confiables que las de ingresos.",
            "An acquisition creates value if the combined value exceeds the sum of the parts plus the premium paid. The difference comes from **synergies**: **cost** (removing duplication, purchasing scale), **revenue** (cross-selling, new channels) and **financial** (lower cost of debt). Cost synergies are usually more reliable than revenue synergies."
          ),
          t(
            "En palabras sencillas: una **sinergia** es cuando 1 + 1 da más de 2. Si dos panaderías se juntan, pueden compartir un solo horno y comprar harina más barata por volumen. La **prima** es lo que el comprador paga por encima del valor de la empresa comprada; si la prima es mayor que las sinergias, el comprador pierde.",
            "In simple words: a **synergy** is when 1 + 1 makes more than 2. If two bakeries merge, they can share one oven and buy flour more cheaply in bulk. The **premium** is what the acquirer pays above the target's value; if the premium is larger than the synergies, the acquirer loses."
          ),
        ],
        formulas: [
          {
            name: t("Valor creado por una adquisición", "Value created by an acquisition"),
            expression: "Valor creado = (V_combinada − V_comprador − V_objetivo) − Prima pagada",
            variables: [
              { symbol: "V_combinada", meaning: t("Valor de las dos empresas juntas después de la compra, en pesos.", "Value of both companies together after the deal, in pesos.") },
              { symbol: "V_comprador", meaning: t("Valor del comprador por sí solo, en pesos.", "Value of the acquirer on its own, in pesos.") },
              { symbol: "V_objetivo", meaning: t("Valor de la empresa comprada por sí sola, en pesos.", "Value of the target on its own, in pesos.") },
              { symbol: "Prima pagada", meaning: t("Lo que se pagó por encima de V_objetivo, en pesos.", "What was paid above V_target, in pesos.") },
            ],
            steps: [
              t("Calcula las sinergias: V_combinada − V_comprador − V_objetivo.", "Compute synergies: V_combined − V_acquirer − V_target."),
              t("Réstale la prima pagada.", "Subtract the premium paid."),
            ],
            example: t(
              "Valor combinado $1,300 millones; comprador $800 millones; objetivo $400 millones; prima $60 millones. Sinergias = 1,300 − 800 − 400 = $100 millones. Valor creado = 100 − 60 = **$40 millones**.",
              "Combined value $1,300 million; acquirer $800 million; target $400 million; premium $60 million. Synergies = 1,300 − 800 − 400 = $100 million. Value created = 100 − 60 = **$40 million**."
            ),
            interpret: t(
              "Positivo: los accionistas del comprador ganan. Negativo: pagaron de más y el valor se fue a los vendedores.",
              "Positive: the acquirer's shareholders gain. Negative: they overpaid and the value went to the sellers."
            ),
          },
        ],
      },
      {
        heading: t("Acreción y dilución", "Accretion and dilution"),
        body: [
          t(
            "Una operación es **acretiva** si la UPA (utilidad por acción) pro forma del comprador sube, y **dilutiva** si baja. En una compra pagada con acciones y sin sinergias, una regla rápida: si el P/E del comprador es **mayor** que el P/E pagado por el objetivo, la operación es acretiva; si es menor, dilutiva. La acreción no garantiza creación de valor: es un indicador contable de corto plazo.",
            "A deal is **accretive** if the acquirer's pro forma EPS (earnings per share) rises, and **dilutive** if it falls. In an all-stock deal without synergies, a quick rule: if the acquirer's P/E is **higher** than the P/E paid for the target, the deal is accretive; if lower, dilutive. Accretion does not guarantee value creation: it is a short-term accounting indicator."
          ),
          t(
            "En palabras sencillas: la **UPA** es la ganancia que le toca a cada acción, como repartir una pizza entre los dueños. Si el comprador paga con acciones nuevas, entran más comensales; la pregunta es si la pizza (utilidad) crece más que el número de comensales. **Pro forma** significa «como si la compra ya hubiera ocurrido».",
            "In simple words: **EPS** is the profit that belongs to each share, like splitting a pizza among the owners. If the acquirer pays with new shares, more diners join; the question is whether the pizza (earnings) grows more than the number of diners. **Pro forma** means «as if the deal had already happened»."
          ),
        ],
        formulas: [
          {
            name: t("UPA pro forma y efecto de acreción o dilución", "Pro forma EPS and accretion or dilution effect"),
            expression: "Acciones nuevas = Precio pagado ÷ Precio de la acción;   UPA pro forma = (UN comprador + UN objetivo + Sinergias después de impuestos) ÷ (Acciones comprador + Acciones nuevas);   Cambio % = (UPA pro forma ÷ UPA actual − 1) × 100",
            variables: [
              { symbol: "Precio pagado", meaning: t("Lo que se paga por el objetivo con acciones nuevas, en pesos.", "What is paid for the target with new shares, in pesos.") },
              { symbol: "Precio de la acción", meaning: t("Precio al que el comprador emite cada acción nueva, en pesos.", "Price at which the acquirer issues each new share, in pesos.") },
              { symbol: "UN comprador / UN objetivo", meaning: t("Utilidad neta de cada empresa, en pesos.", "Net income of each company, in pesos.") },
              { symbol: "Sinergias después de impuestos", meaning: t("Ahorro o ingreso extra por la unión, ya sin impuestos, en pesos (0 si no hay).", "Extra savings or income from the merger, after tax, in pesos (0 if none).") },
              { symbol: "Acciones comprador", meaning: t("Acciones que el comprador ya tenía en circulación.", "Shares the acquirer already had outstanding.") },
              { symbol: "UPA actual", meaning: t("UN comprador ÷ acciones comprador, en pesos por acción.", "Acquirer NI ÷ acquirer shares, in pesos per share.") },
            ],
            steps: [
              t("Calcula las acciones nuevas: precio pagado ÷ precio de la acción.", "Compute new shares: price paid ÷ share price."),
              t("Calcula la UPA actual: UN comprador ÷ acciones comprador.", "Compute current EPS: acquirer NI ÷ acquirer shares."),
              t("Suma las utilidades (y sinergias) y divide entre el total de acciones: UPA pro forma.", "Add the earnings (and synergies) and divide by total shares: pro forma EPS."),
              t("Compara: UPA pro forma ÷ UPA actual − 1, por 100. Positivo = acretiva; negativo = dilutiva.", "Compare: pro forma EPS ÷ current EPS − 1, times 100. Positive = accretive; negative = dilutive."),
            ],
            example: t(
              "Comprador: UN $60,000,000, 30,000,000 acciones, precio $30. Objetivo: UN $10,000,000; se pagan $120,000,000 en acciones a $30. Acciones nuevas = 120,000,000 ÷ 30 = 4,000,000. UPA actual = 60,000,000 ÷ 30,000,000 = $2.00. UPA pro forma = 70,000,000 ÷ 34,000,000 = $2.06. Cambio = 2.0588 ÷ 2.00 − 1 = **+2.94 %** (acretiva). Regla rápida: P/E comprador 15x (30 ÷ 2) > P/E pagado 12x (120 ÷ 10).",
              "Acquirer: NI $60,000,000, 30,000,000 shares, price $30. Target: NI $10,000,000; $120,000,000 is paid in shares at $30. New shares = 120,000,000 ÷ 30 = 4,000,000. Current EPS = 60,000,000 ÷ 30,000,000 = $2.00. Pro forma EPS = 70,000,000 ÷ 34,000,000 = $2.06. Change = 2.0588 ÷ 2.00 − 1 = **+2.94 %** (accretive). Quick rule: acquirer P/E 15x (30 ÷ 2) > P/E paid 12x (120 ÷ 10)."
            ),
            mistake: t(
              "Olvidar sumar las acciones nuevas en el denominador: así la UPA siempre parece subir.",
              "Forgetting to add the new shares to the denominator: then EPS always seems to rise."
            ),
          },
        ],
      },
      {
        heading: t("Leveraged buyout (LBO)", "Leveraged buyout (LBO)"),
        body: [
          t(
            "En un LBO, un fondo de capital privado compra una empresa financiando gran parte del precio con **deuda** que se paga con los flujos de la propia empresa. Los rendimientos vienen de tres fuentes: crecimiento del EBITDA, **pago de deuda** (desapalancamiento) y posible expansión del múltiplo de salida.",
            "In an LBO, a private equity fund buys a company financing a large part of the price with **debt** that is repaid from the company's own cash flows. Returns come from three sources: EBITDA growth, **debt paydown** (deleveraging) and possible exit multiple expansion."
          ),
          t(
            "Buenas candidatas: flujos estables y predecibles, bajo CapEx, posición de mercado sólida y poca deuda inicial. Se miden con el **MOIC** (múltiplo del capital invertido) y la **TIR**, que considera el tiempo.",
            "Good candidates: stable, predictable cash flows, low CapEx, a strong market position and little existing debt. Returns are measured with **MOIC** (multiple on invested capital) and **IRR**, which accounts for time."
          ),
          t(
            "Es parecido a comprar un departamento para rentar con un crédito hipotecario: pones un enganche (el capital del fondo), la renta va pagando la deuda y, al vender, lo que queda después de liquidar el crédito es tuyo. La **TIR** es el rendimiento anual equivalente; el MOIC solo dice cuántas veces recuperaste tu dinero, sin importar si tardaste 2 o 10 años.",
            "It is similar to buying an apartment to rent out with a mortgage: you put down a deposit (the fund's equity), the rent pays down the debt and, when you sell, what remains after paying off the loan is yours. **IRR** is the equivalent annual return; MOIC only says how many times you got your money back, regardless of whether it took 2 or 10 years."
          ),
        ],
        formulas: [
          {
            name: t("Capital del fondo en un LBO y MOIC", "Fund equity in an LBO and MOIC"),
            expression: "Capital invertido = Precio de entrada − Deuda inicial;   Capital a la salida = EV de salida − Deuda remanente;   MOIC = Capital a la salida ÷ Capital invertido",
            variables: [
              { symbol: "Precio de entrada", meaning: t("EV pagado al comprar = múltiplo de entrada × EBITDA, en pesos.", "EV paid at purchase = entry multiple × EBITDA, in pesos.") },
              { symbol: "Deuda inicial", meaning: t("Parte del precio financiada con préstamos, en pesos (por ejemplo, 60 % del precio).", "Part of the price financed with loans, in pesos (for example, 60 % of the price).") },
              { symbol: "EV de salida", meaning: t("Precio al vender = múltiplo de salida × EBITDA de ese año, en pesos.", "Sale price = exit multiple × that year's EBITDA, in pesos.") },
              { symbol: "Deuda remanente", meaning: t("Deuda que todavía falta pagar al vender, en pesos.", "Debt still owed at the sale, in pesos.") },
              { symbol: "MOIC", meaning: t("Cuántas veces recupera el fondo su dinero (x).", "How many times the fund gets its money back (x).") },
            ],
            steps: [
              t("Precio de entrada = múltiplo × EBITDA inicial; resta la deuda para obtener el capital invertido.", "Entry price = multiple × initial EBITDA; subtract the debt to get equity invested."),
              t("EV de salida = múltiplo × EBITDA final; resta la deuda remanente para obtener el capital a la salida.", "Exit EV = multiple × final EBITDA; subtract remaining debt to get exit equity."),
              t("Divide capital a la salida ÷ capital invertido.", "Divide exit equity ÷ equity invested."),
            ],
            example: t(
              "EBITDA $40 millones comprado a 7x, con 50 % de deuda. Precio = 7 × 40 = $280 millones; deuda = $140 millones; capital invertido = 280 − 140 = $140 millones. Salida: EBITDA $55 millones a 7x = $385 millones; deuda remanente $105 millones; capital a la salida = 385 − 105 = $280 millones. MOIC = 280 ÷ 140 = **2.0x**.",
              "EBITDA $40 million bought at 7x, with 50 % debt. Price = 7 × 40 = $280 million; debt = $140 million; equity invested = 280 − 140 = $140 million. Exit: EBITDA $55 million at 7x = $385 million; remaining debt $105 million; exit equity = 385 − 105 = $280 million. MOIC = 280 ÷ 140 = **2.0x**."
            ),
            mistake: t(
              "Olvidar restar la deuda remanente a la salida, o calcular solo la ganancia (MOIC − 1) en lugar del múltiplo total.",
              "Forgetting to subtract remaining debt at exit, or computing only the gain (MOIC − 1) instead of the total multiple."
            ),
          },
          {
            name: t("TIR a partir del MOIC (sin flujos intermedios)", "IRR from MOIC (no interim flows)"),
            expression: "TIR = MOIC^(1/n) − 1",
            variables: [
              { symbol: "MOIC", meaning: t("Múltiplo del capital invertido, en veces.", "Multiple on invested capital, in times.") },
              { symbol: "n", meaning: t("Años que dura la inversión.", "Years the investment lasts.") },
              { symbol: "^(1/n)", meaning: t("Raíz n-ésima: «reparte» el crecimiento total en n años iguales.", "n-th root: «spreads» the total growth over n equal years.") },
            ],
            steps: [
              t("Divide 1 entre el número de años: 1/n.", "Divide 1 by the number of years: 1/n."),
              t("Eleva el MOIC a esa potencia (en calculadora: MOIC ^ (1/n)).", "Raise MOIC to that power (on a calculator: MOIC ^ (1/n))."),
              t("Réstale 1 y multiplica por 100 para tener el % anual.", "Subtract 1 and multiply by 100 to get the annual %."),
            ],
            example: t(
              "MOIC 2.0x en 4 años: 1/4 = 0.25; 2.0^0.25 = 1.1892; 1.1892 − 1 = 0.1892 → **18.92 % anual**.",
              "MOIC 2.0x over 4 years: 1/4 = 0.25; 2.0^0.25 = 1.1892; 1.1892 − 1 = 0.1892 → **18.92 % per year**."
            ),
            mistake: t(
              "Dividir la ganancia entre los años (100 % ÷ 4 = 25 %): ignora que el rendimiento se acumula año con año.",
              "Dividing the gain by the years (100 % ÷ 4 = 25 %): it ignores that returns compound year after year."
            ),
          },
        ],
      },
    ],
    examples: [
      {
        title: t("¿Cuántas sinergias evitan la dilución?", "How much synergy avoids dilution?"),
        problem: t(
          "El comprador tiene utilidad neta de $200,000,000 y 100,000,000 de acciones (UPA $2.00, precio $25). Compra un objetivo con utilidad neta de $30,000,000 pagando $450,000,000 en acciones nuevas a $25.",
          "The acquirer has net income of $200,000,000 and 100,000,000 shares (EPS $2.00, price $25). It buys a target with net income of $30,000,000, paying $450,000,000 in new shares at $25."
        ),
        steps: [
          t("Acciones nuevas = $450,000,000 ÷ $25 = 18,000,000.", "New shares = $450,000,000 ÷ $25 = 18,000,000."),
          t("UPA pro forma sin sinergias = $230,000,000 ÷ 118,000,000 = $1.949 → dilución de 2.54 %.", "Pro forma EPS without synergies = $230,000,000 ÷ 118,000,000 = $1.949 → 2.54 % dilution."),
          t("Para UPA de $2.00 se requiere utilidad de 2.00 × 118,000,000 = $236,000,000, es decir, $6,000,000 de sinergias después de impuestos.", "EPS of $2.00 requires earnings of 2.00 × 118,000,000 = $236,000,000, i.e. $6,000,000 of after-tax synergies."),
          t("Consistente con la regla: P/E del comprador 12.5x (25 ÷ 2) < P/E pagado 15x (450 ÷ 30) → dilutiva sin sinergias.", "Consistent with the rule: acquirer P/E 12.5x (25 ÷ 2) < P/E paid 15x (450 ÷ 30) → dilutive without synergies."),
        ],
        result: t("Dilutiva en 2.54 % sin sinergias; neutral con $6,000,000 de sinergias después de impuestos.", "2.54 % dilutive without synergies; neutral with $6,000,000 of after-tax synergies."),
      },
      {
        title: t("Rendimiento de un LBO", "LBO returns"),
        problem: t(
          "Un fondo compra una empresa con EBITDA de $100,000,000 a 8x (EV $800,000,000), con $500,000,000 de deuda y $300,000,000 de capital. En el año 5 el EBITDA es $140,000,000, sale a 8x y la deuda remanente es $250,000,000.",
          "A fund buys a company with EBITDA of $100,000,000 at 8x (EV $800,000,000), using $500,000,000 of debt and $300,000,000 of equity. In year 5 EBITDA is $140,000,000, the exit is at 8x and remaining debt is $250,000,000."
        ),
        steps: [
          t("EV de salida = 8 × $140,000,000 = $1,120,000,000.", "Exit EV = 8 × $140,000,000 = $1,120,000,000."),
          t("Capital a la salida = $1,120,000,000 − $250,000,000 = $870,000,000.", "Exit equity = $1,120,000,000 − $250,000,000 = $870,000,000."),
          t("MOIC = $870,000,000 ÷ $300,000,000 = 2.9x.", "MOIC = $870,000,000 ÷ $300,000,000 = 2.9x."),
          t("TIR = 2.9^(1/5) − 1 ≈ 23.73 % anual.", "IRR = 2.9^(1/5) − 1 ≈ 23.73 % per year."),
        ],
        result: t("MOIC 2.9x y TIR ≈ 23.7 %, sin expansión de múltiplo: el valor viene del crecimiento del EBITDA y del pago de deuda.", "MOIC 2.9x and IRR ≈ 23.7 % with no multiple expansion: value comes from EBITDA growth and debt paydown."),
      },
    ],
    keyPoints: [
      t("Las sinergias de costos son más confiables que las de ingresos.", "Cost synergies are more reliable than revenue synergies."),
      t("Compra con acciones: P/E del comprador > P/E pagado → acretiva (sin sinergias).", "All-stock deal: acquirer P/E > P/E paid → accretive (without synergies)."),
      t("En un LBO el pago de deuda transfiere valor a los accionistas.", "In an LBO, debt paydown transfers value to shareholders."),
      t("MOIC ignora el tiempo; la TIR lo incorpora.", "MOIC ignores time; IRR incorporates it."),
    ],
    exerciseIds: ["N6-023", "N6-024", "N6-025", "N6-026", "N6-027", "N6-028", "N6-029"],
  },
  // ───────────────────────────── L6-05 ─────────────────────────────
  {
    id: "L6-05",
    level: 6,
    topicIds: ["6.10", "6.11"],
    title: t("Bonos y derivados", "Bonds and derivatives"),
    summary: t(
      "Valúa un bono descontando sus cupones, entiende el rendimiento al vencimiento y la relación inversa precio-tasa, y calcula los pagos de forwards, futuros y opciones.",
      "Value a bond by discounting its coupons, understand yield to maturity and the inverse price-yield relationship, and compute the payoffs of forwards, futures and options."
    ),
    minutes: 20,
    objectives: [
      t("Calcular el precio de un bono con cupón fijo.", "Compute the price of a fixed-coupon bond."),
      t("Explicar el rendimiento al vencimiento (YTM) y por qué precio y tasa se mueven en sentido contrario.", "Explain yield to maturity (YTM) and why price and yield move in opposite directions."),
      t("Diferenciar forwards, futuros y opciones.", "Differentiate forwards, futures and options."),
      t("Calcular el pago y la utilidad de posiciones en forwards y opciones al vencimiento.", "Compute the payoff and profit of forward and option positions at expiry."),
    ],
    theory: [
      {
        heading: t("Precio de un bono", "Bond pricing"),
        body: [
          t(
            "Un bono paga cupones periódicos (tasa cupón × valor nominal) y devuelve el **valor nominal** al vencimiento. Su precio es el valor presente de esos flujos descontados al rendimiento que exige el mercado.",
            "A bond pays periodic coupons (coupon rate × face value) and returns the **face value** at maturity. Its price is the present value of those flows discounted at the yield the market requires."
          ),
          t(
            "En palabras sencillas: un **bono** es un préstamo que tú le haces a una empresa o al gobierno. A cambio, te paga intereses fijos cada año (el **cupón**) y al final te devuelve lo prestado (el **valor nominal**). ¿Cuánto pagarías hoy por esos pagos futuros? Eso es el precio: la suma de cada pago traído a pesos de hoy.",
            "In simple words: a **bond** is a loan you make to a company or the government. In return it pays you fixed interest every year (the **coupon**) and at the end gives back what you lent (the **face value**). How much would you pay today for those future payments? That is the price: the sum of each payment brought to today's pesos."
          ),
        ],
        formulas: [
          {
            name: t("Precio de un bono con cupón fijo", "Price of a fixed-coupon bond"),
            expression: "P = Σ C ÷ (1 + y)^t + VN ÷ (1 + y)^n",
            variables: [
              { symbol: "P", meaning: t("Precio justo del bono hoy, en pesos.", "Fair price of the bond today, in pesos.") },
              { symbol: "C", meaning: t("Cupón de cada año = tasa cupón × VN, en pesos.", "Each year's coupon = coupon rate × FV, in pesos.") },
              { symbol: "y", meaning: t("Rendimiento que exige el mercado, en decimal (no la tasa cupón).", "Yield the market requires, as a decimal (not the coupon rate).") },
              { symbol: "t", meaning: t("Año en que llega cada cupón (1, 2, 3…).", "Year each coupon arrives (1, 2, 3…).") },
              { symbol: "VN", meaning: t("Valor nominal que se devuelve al vencimiento, en pesos.", "Face value repaid at maturity, in pesos.") },
              { symbol: "n", meaning: t("Años hasta el vencimiento.", "Years to maturity.") },
              { symbol: "Σ", meaning: t("«Suma de» los cupones descontados de todos los años.", "«Sum of» the discounted coupons of every year.") },
            ],
            steps: [
              t("Calcula el cupón: tasa cupón × valor nominal.", "Compute the coupon: coupon rate × face value."),
              t("Descuenta cada cupón: C ÷ (1 + y)^t.", "Discount each coupon: C ÷ (1 + y)^t."),
              t("En el último año suma cupón + valor nominal y descuéntalo con (1 + y)^n.", "In the last year add coupon + face value and discount it with (1 + y)^n."),
              t("Suma todos los valores presentes.", "Add up all the present values."),
            ],
            example: t(
              "VN $1,000, cupón 5 %, 3 años, rendimiento 4 %. Cupón = 5 % × 1,000 = $50. Año 1: 50 ÷ 1.04 = 48.08. Año 2: 50 ÷ 1.0816 = 46.23. Año 3: 1,050 ÷ 1.124864 = 933.45. Precio = 48.08 + 46.23 + 933.45 = **$1,027.76** (sobre la par, porque el cupón 5 % es mayor que el rendimiento 4 %).",
              "FV $1,000, 5 % coupon, 3 years, 4 % yield. Coupon = 5 % × 1,000 = $50. Year 1: 50 ÷ 1.04 = 48.08. Year 2: 50 ÷ 1.0816 = 46.23. Year 3: 1,050 ÷ 1.124864 = 933.45. Price = 48.08 + 46.23 + 933.45 = **$1,027.76** (above par, because the 5 % coupon exceeds the 4 % yield)."
            ),
            interpret: t(
              "Precio mayor que el VN = sobre la par (cupón > y); igual = a la par (cupón = y); menor = bajo la par (cupón < y).",
              "Price above FV = above par (coupon > y); equal = at par (coupon = y); below = below par (coupon < y)."
            ),
            mistake: t(
              "Descontar con la tasa cupón en lugar del rendimiento de mercado: siempre te daría el valor nominal.",
              "Discounting at the coupon rate instead of the market yield: it would always give you the face value."
            ),
          },
        ],
      },
      {
        heading: t("Rendimiento al vencimiento y relación precio-tasa", "Yield to maturity and the price-yield relationship"),
        body: [
          t(
            "El **YTM** es la tasa que iguala el valor presente de los flujos del bono con su precio de mercado; es la TIR del bono si se mantiene al vencimiento y los cupones se reinvierten a esa misma tasa. Se obtiene por iteración o con calculadora financiera.",
            "**YTM** is the rate that equates the present value of the bond's flows with its market price; it is the bond's IRR if held to maturity with coupons reinvested at that same rate. It is found by iteration or with a financial calculator."
          ),
          t(
            "Precio y rendimiento se mueven en **sentido inverso**: si las tasas suben, el precio baja. Si cupón = YTM, el bono cotiza **a la par**; si cupón < YTM, **bajo la par** (descuento); si cupón > YTM, **sobre la par** (prima). Los bonos de mayor plazo son más sensibles a las tasas (mayor duración).",
            "Price and yield move **inversely**: if rates rise, the price falls. If coupon = YTM the bond trades **at par**; if coupon < YTM, **below par** (discount); if coupon > YTM, **above par** (premium). Longer bonds are more sensitive to rates (higher duration)."
          ),
          t(
            "¿Por qué se mueven al revés? Imagina que tienes un bono que paga 6 % y hoy salen bonos nuevos que pagan 8 %. Nadie te pagará el precio completo por el tuyo: para venderlo tendrás que bajarle el precio hasta que rinda lo mismo que los nuevos. **A la par** significa que el precio es igual al valor nominal.",
            "Why do they move in opposite directions? Imagine you hold a bond paying 6 % and today new bonds come out paying 8 %. Nobody will pay you full price for yours: to sell it you will have to lower its price until it yields the same as the new ones. **At par** means the price equals the face value."
          ),
        ],
      },
      {
        heading: t("Forwards y futuros", "Forwards and futures"),
        body: [
          t(
            "Un **forward** es un contrato privado (OTC), hecho a la medida, para comprar o vender un activo a un precio pactado en una fecha futura; se liquida al vencimiento y tiene riesgo de contraparte. Un **futuro** es similar pero estandarizado, se negocia en bolsa (en México, MexDer), pasa por una cámara de compensación y se **liquida diariamente** (marcado a mercado con márgenes).",
            "A **forward** is a private (OTC), customized contract to buy or sell an asset at an agreed price on a future date; it settles at maturity and carries counterparty risk. A **future** is similar but standardized, exchange-traded (in Mexico, MexDer), cleared through a clearinghouse and **settled daily** (marked to market with margins)."
          ),
          t(
            "En palabras sencillas: es como apartar hoy el precio del dólar para una compra que harás en 3 meses. Si el dólar sube, ganaste porque compras más barato; si baja, pierdes porque estás obligado a pagar el precio pactado. **Largo** = te comprometes a comprar; **corto** = te comprometes a vender. **OTC** significa que se negocia directamente entre las partes, fuera de bolsa, y el **riesgo de contraparte** es que la otra parte no cumpla.",
            "In simple words: it is like locking in today the dollar price for a purchase you will make in 3 months. If the dollar rises, you gained because you buy cheaper; if it falls, you lose because you must pay the agreed price. **Long** = you commit to buy; **short** = you commit to sell. **OTC** means it is traded directly between the parties, off-exchange, and **counterparty risk** is the risk that the other side does not deliver."
          ),
        ],
        formulas: [
          {
            name: t("Resultado de un forward al vencimiento", "Forward payoff at maturity"),
            expression: "Pago forward largo = (S_T − F) × Cantidad;   corto = (F − S_T) × Cantidad",
            variables: [
              { symbol: "S_T", meaning: t("Precio de mercado (spot) del activo el día del vencimiento; por ejemplo, pesos por dólar.", "Market (spot) price of the asset on maturity day; for example, pesos per dollar.") },
              { symbol: "F", meaning: t("Precio pactado en el forward.", "Price agreed in the forward.") },
              { symbol: "Cantidad", meaning: t("Unidades del contrato (dólares, toneladas, acciones).", "Contract units (dollars, tons, shares).") },
            ],
            steps: [
              t("Identifica si eres largo (compras) o corto (vendes).", "Identify whether you are long (buy) or short (sell)."),
              t("Largo: resta S_T − F. Corto: resta F − S_T.", "Long: subtract S_T − F. Short: subtract F − S_T."),
              t("Multiplica la diferencia por la cantidad. Positivo = ganancia; negativo = pérdida.", "Multiply the difference by the quantity. Positive = gain; negative = loss."),
            ],
            example: t(
              "Forward largo por USD 20,000 a 17.80 MXN/USD; al vencimiento el spot es 17.50. (17.50 − 17.80) × 20,000 = −0.30 × 20,000 = **−$6,000**: el comprador paga $6,000 más que si hubiera comprado al spot.",
              "Long forward for USD 20,000 at 17.80 MXN/USD; at maturity spot is 17.50. (17.50 − 17.80) × 20,000 = −0.30 × 20,000 = **−$6,000**: the buyer pays $6,000 more than if it had bought at spot."
            ),
            mistake: t(
              "Usar la fórmula del corto (F − S_T) para una posición larga: el signo sale al revés.",
              "Using the short formula (F − S_T) for a long position: the sign comes out backwards."
            ),
          },
        ],
      },
      {
        heading: t("Opciones", "Options"),
        body: [
          t(
            "Una **opción** da al comprador el **derecho, no la obligación**, de comprar (call) o vender (put) a un precio de ejercicio K; por ese derecho paga una **prima** por adelantado. El vendedor de la opción recibe la prima y asume la obligación.",
            "An **option** gives the buyer the **right, not the obligation**, to buy (call) or sell (put) at a strike price K; for that right the buyer pays a **premium** up front. The option writer receives the premium and takes on the obligation."
          ),
          t(
            "En palabras sencillas: es como dejar un anticipo no reembolsable para apartar un coche a un precio fijo. Si el coche sube de precio, ejerces tu derecho y ganas; si baja, no lo compras y solo pierdes el anticipo (la prima). Un **call** es el derecho a comprar; un **put**, el derecho a vender.",
            "In simple words: it is like leaving a non-refundable deposit to reserve a car at a fixed price. If the car's price rises, you exercise your right and gain; if it falls, you do not buy and only lose the deposit (the premium). A **call** is the right to buy; a **put**, the right to sell."
          ),
        ],
        formulas: [
          {
            name: t("Pago y utilidad de una opción comprada", "Payoff and profit of a bought option"),
            expression: "Pago call = máx(S_T − K, 0);   Pago put = máx(K − S_T, 0);   Utilidad = Pago − Prima",
            variables: [
              { symbol: "S_T", meaning: t("Precio del activo al vencimiento, en pesos.", "Asset price at expiry, in pesos.") },
              { symbol: "K", meaning: t("Precio de ejercicio: el precio pactado para comprar (call) o vender (put), en pesos.", "Strike price: the agreed price to buy (call) or sell (put), in pesos.") },
              { symbol: "máx( , 0)", meaning: t("Toma el mayor de los dos números: si la resta sale negativa, el pago es 0 porque no ejerces.", "Take the larger of the two numbers: if the subtraction is negative, the payoff is 0 because you do not exercise.") },
              { symbol: "Prima", meaning: t("Lo que pagaste por la opción al inicio, en pesos.", "What you paid for the option up front, in pesos.") },
            ],
            steps: [
              t("Call: calcula S_T − K. Put: calcula K − S_T.", "Call: compute S_T − K. Put: compute K − S_T."),
              t("Si el resultado es negativo, el pago es 0.", "If the result is negative, the payoff is 0."),
              t("Resta la prima al pago para obtener la utilidad.", "Subtract the premium from the payoff to get the profit."),
            ],
            example: t(
              "Put con K = $60 y prima $2.50; al vencimiento la acción vale $52. Pago = máx(60 − 52, 0) = $8. Utilidad = 8 − 2.50 = **$5.50**. Un call con K = $60 y prima $3: pago = máx(52 − 60, 0) = 0; utilidad = 0 − 3 = **−$3**.",
              "Put with K = $60 and premium $2.50; at expiry the stock is worth $52. Payoff = max(60 − 52, 0) = $8. Profit = 8 − 2.50 = **$5.50**. A call with K = $60 and premium $3: payoff = max(52 − 60, 0) = 0; profit = 0 − 3 = **−$3**."
            ),
            interpret: t(
              "La peor pérdida del comprador es la prima; el pago nunca es negativo.",
              "The buyer's worst loss is the premium; the payoff is never negative."
            ),
            mistake: t(
              "Confundir pago con utilidad (olvidar restar la prima) o anotar un pago negativo cuando la opción no se ejerce.",
              "Confusing payoff with profit (forgetting to subtract the premium) or recording a negative payoff when the option is not exercised."
            ),
          },
        ],
      },
    ],
    examples: [
      {
        title: t("Bono sobre la par", "A premium bond"),
        problem: t(
          "Bono con valor nominal $1,000, cupón anual 6 %, vence en 2 años. El rendimiento de mercado es 5 %. Calcula su precio.",
          "Bond with $1,000 face value, 6 % annual coupon, maturing in 2 years. The market yield is 5 %. Compute its price."
        ),
        steps: [
          t("Cupón = 6 % × $1,000 = $60.", "Coupon = 6 % × $1,000 = $60."),
          t("Año 1: 60 ÷ 1.05 = 57.14.", "Year 1: 60 ÷ 1.05 = 57.14."),
          t("Año 2: 1,060 ÷ 1.05² = 1,060 ÷ 1.1025 = 961.45.", "Year 2: 1,060 ÷ 1.05² = 1,060 ÷ 1.1025 = 961.45."),
          t("Precio = 57.14 + 961.45 = $1,018.59.", "Price = 57.14 + 961.45 = $1,018.59."),
        ],
        result: t("$1,018.59: cotiza sobre la par porque el cupón (6 %) supera el rendimiento (5 %).", "$1,018.59: it trades above par because the coupon (6 %) exceeds the yield (5 %)."),
      },
      {
        title: t("Cobertura cambiaria con forward y una opción call", "FX hedge with a forward and a call option"),
        problem: t(
          "Un importador pacta comprar USD 50,000 a 18.40 MXN/USD en 3 meses. Al vencimiento el tipo de cambio spot es 18.90. Por separado, un inversionista compró un call con K = $50 y prima $3; al vencimiento la acción vale $58.",
          "An importer agrees to buy USD 50,000 at 18.40 MXN/USD in 3 months. At maturity the spot rate is 18.90. Separately, an investor bought a call with K = $50 and premium $3; at expiry the stock is worth $58."
        ),
        steps: [
          t("Forward largo: (18.90 − 18.40) × 50,000 = $25,000 MXN a favor del importador frente a comprar al spot.", "Long forward: (18.90 − 18.40) × 50,000 = $25,000 MXN in the importer's favor versus buying at spot."),
          t("Call: pago = máx(58 − 50, 0) = $8.", "Call: payoff = max(58 − 50, 0) = $8."),
          t("Utilidad del call = $8 − $3 = $5. Si la acción hubiera terminado en $45, el pago sería 0 y la pérdida se limitaría a la prima de $3.", "Call profit = $8 − $3 = $5. Had the stock ended at $45, the payoff would be 0 and the loss limited to the $3 premium."),
        ],
        result: t("Forward: ahorro de $25,000; call: utilidad de $5 por acción.", "Forward: $25,000 saved; call: $5 profit per share."),
      },
    ],
    keyPoints: [
      t("Precio del bono = VP de cupones + VP del nominal al YTM.", "Bond price = PV of coupons + PV of face value at the YTM."),
      t("Tasas arriba, precios abajo; cupón = YTM implica precio a la par.", "Rates up, prices down; coupon = YTM means price at par."),
      t("Forward: OTC y a la medida; futuro: en bolsa, estandarizado y con liquidación diaria.", "Forward: OTC and customized; future: exchange-traded, standardized and settled daily."),
      t("El comprador de una opción paga prima y su pérdida máxima es esa prima.", "An option buyer pays a premium and the maximum loss is that premium."),
    ],
    exerciseIds: ["N6-030", "N6-031", "N6-032", "N6-033", "N6-034", "N6-035", "N6-036"],
  },
  // ───────────────────────────── L6-06 ─────────────────────────────
  {
    id: "L6-06",
    level: 6,
    topicIds: ["6.12", "6.13"],
    title: t("Gestión de portafolios y administración de riesgos", "Portfolio management and risk management"),
    summary: t(
      "Calcula el rendimiento esperado y el riesgo de un portafolio de dos activos, entiende cómo la correlación genera diversificación y da tus primeros pasos con el VaR paramétrico.",
      "Compute the expected return and risk of a two-asset portfolio, understand how correlation drives diversification and take your first steps with parametric VaR."
    ),
    minutes: 20,
    objectives: [
      t("Calcular el rendimiento esperado de un portafolio.", "Compute a portfolio's expected return."),
      t("Calcular la desviación estándar de un portafolio de dos activos con correlación.", "Compute the standard deviation of a two-asset portfolio with correlation."),
      t("Explicar la diversificación y la diferencia entre riesgo sistemático y no sistemático.", "Explain diversification and the difference between systematic and unsystematic risk."),
      t("Calcular e interpretar correctamente un VaR paramétrico.", "Compute and correctly interpret a parametric VaR."),
    ],
    theory: [
      {
        heading: t("Rendimiento esperado del portafolio", "Portfolio expected return"),
        body: [
          t(
            "El rendimiento esperado de un portafolio es el **promedio ponderado** de los rendimientos esperados de sus activos, con ponderaciones iguales a la proporción invertida en cada uno (que suman 100 %).",
            "A portfolio's expected return is the **weighted average** of its assets' expected returns, with weights equal to the share invested in each (summing to 100 %)."
          ),
          t(
            "En palabras sencillas: un **portafolio** es el conjunto de tus inversiones, como tener dinero en CETES y en acciones a la vez. «Ponderado» significa que pesa más la inversión donde pusiste más dinero, igual que en tu promedio escolar un examen final cuenta más que una tarea.",
            "In simple words: a **portfolio** is the set of your investments, like having money in CETES and in stocks at the same time. «Weighted» means the investment where you put more money counts more, just as in your school average a final exam counts more than homework."
          ),
        ],
        formulas: [
          {
            name: t("Rendimiento esperado de un portafolio", "Expected return of a portfolio"),
            expression: "E(Rp) = wA × E(RA) + wB × E(RB)",
            variables: [
              { symbol: "E(Rp)", meaning: t("Rendimiento esperado del portafolio, en %.", "Expected return of the portfolio, in %.") },
              { symbol: "wA, wB", meaning: t("Proporción del dinero en cada activo, en decimal (60 % = 0.6); deben sumar 1.", "Share of money in each asset, as a decimal (60 % = 0.6); they must add up to 1.") },
              { symbol: "E(RA), E(RB)", meaning: t("Rendimiento esperado de cada activo, en %.", "Expected return of each asset, in %.") },
            ],
            steps: [
              t("Convierte las proporciones a decimal y verifica que sumen 1.", "Convert the weights to decimals and check they add up to 1."),
              t("Multiplica cada peso por el rendimiento de su activo.", "Multiply each weight by its asset's return."),
              t("Suma los resultados.", "Add up the results."),
            ],
            example: t(
              "70 % en A (9 %) y 30 % en B (4 %): 0.7 × 9 % = 6.3 %; 0.3 × 4 % = 1.2 %; 6.3 % + 1.2 % = **7.5 %**.",
              "70 % in A (9 %) and 30 % in B (4 %): 0.7 × 9 % = 6.3 %; 0.3 × 4 % = 1.2 %; 6.3 % + 1.2 % = **7.5 %**."
            ),
            mistake: t(
              "Promediar sin ponderar ((9 + 4) ÷ 2 = 6.5 %): ignora cuánto dinero pusiste en cada activo.",
              "Averaging without weights ((9 + 4) ÷ 2 = 6.5 %): it ignores how much money you put in each asset."
            ),
          },
        ],
      },
      {
        heading: t("Riesgo de dos activos y correlación", "Two-asset risk and correlation"),
        body: [
          t(
            "El riesgo (desviación estándar) del portafolio **no** es el promedio ponderado de los riesgos, salvo que la correlación sea +1. El término de covarianza depende de la **correlación ρ** (entre −1 y +1): cuanto más baja, menor el riesgo del portafolio para el mismo rendimiento esperado. Con ρ = −1 es posible, en teoría, eliminar por completo el riesgo con las ponderaciones adecuadas.",
            "Portfolio risk (standard deviation) is **not** the weighted average of the risks, unless correlation is +1. The covariance term depends on **correlation ρ** (between −1 and +1): the lower it is, the lower the portfolio risk for the same expected return. With ρ = −1 it is theoretically possible to eliminate risk entirely with the right weights."
          ),
          t(
            "En palabras sencillas: la **desviación estándar (σ)** mide qué tanto sube y baja una inversión; más σ = más sobresaltos. La **correlación** dice si dos inversiones se mueven juntas (+1), sin relación (0) o en sentido contrario (−1). Es como vender paraguas y lentes de sol: cuando a uno le va mal, al otro le va bien, y juntos tus ventas son más estables.",
            "In simple words: **standard deviation (σ)** measures how much an investment goes up and down; more σ = more bumps. **Correlation** says whether two investments move together (+1), unrelated (0) or in opposite directions (−1). It is like selling umbrellas and sunglasses: when one does badly, the other does well, and together your sales are steadier."
          ),
        ],
        formulas: [
          {
            name: t("Riesgo (desviación estándar) de un portafolio de dos activos", "Risk (standard deviation) of a two-asset portfolio"),
            expression: "σp² = wA²σA² + wB²σB² + 2·wA·wB·ρAB·σA·σB;   σp = √σp²",
            variables: [
              { symbol: "σp", meaning: t("Desviación estándar (riesgo) del portafolio, en %.", "Standard deviation (risk) of the portfolio, in %.") },
              { symbol: "σp²", meaning: t("Varianza del portafolio: el riesgo al cuadrado.", "Portfolio variance: risk squared.") },
              { symbol: "wA, wB", meaning: t("Proporción invertida en cada activo, en decimal.", "Share invested in each asset, as a decimal.") },
              { symbol: "σA, σB", meaning: t("Desviación estándar de cada activo, en decimal (20 % = 0.20).", "Standard deviation of each asset, as a decimal (20 % = 0.20).") },
              { symbol: "ρAB", meaning: t("Correlación entre A y B, de −1 a +1.", "Correlation between A and B, from −1 to +1.") },
            ],
            steps: [
              t("Pasa todo a decimal: pesos y desviaciones.", "Convert everything to decimals: weights and standard deviations."),
              t("Calcula los dos primeros términos: wA² × σA² y wB² × σB².", "Compute the first two terms: wA² × σA² and wB² × σB²."),
              t("Calcula el término de correlación: 2 × wA × wB × ρ × σA × σB.", "Compute the correlation term: 2 × wA × wB × ρ × σA × σB."),
              t("Suma los tres términos (varianza) y saca raíz cuadrada; multiplica por 100 para tener %.", "Add the three terms (variance) and take the square root; multiply by 100 to get %."),
            ],
            example: t(
              "70 % en A (σ 18 %) y 30 % en B (σ 6 %), ρ = 0.4. Términos: 0.49 × 0.0324 = 0.015876; 0.09 × 0.0036 = 0.000324; 2 × 0.7 × 0.3 × 0.4 × 0.18 × 0.06 = 0.0018144. Varianza = 0.0180144. σp = √0.0180144 = 0.1342 = **13.42 %**.",
              "70 % in A (σ 18 %) and 30 % in B (σ 6 %), ρ = 0.4. Terms: 0.49 × 0.0324 = 0.015876; 0.09 × 0.0036 = 0.000324; 2 × 0.7 × 0.3 × 0.4 × 0.18 × 0.06 = 0.0018144. Variance = 0.0180144. σp = √0.0180144 = 0.1342 = **13.42 %**."
            ),
            interpret: t(
              "Casos extremos (atajo): con ρ = +1, σp = wA·σA + wB·σB (0.7 × 18 + 0.3 × 6 = 14.4 %, sin beneficio); con ρ = −1, σp = |wA·σA − wB·σB| (|12.6 − 1.8| = 10.8 %). Cualquier otra correlación da un resultado entre ambos.",
              "Extreme cases (shortcut): with ρ = +1, σp = wA·σA + wB·σB (0.7 × 18 + 0.3 × 6 = 14.4 %, no benefit); with ρ = −1, σp = |wA·σA − wB·σB| (|12.6 − 1.8| = 10.8 %). Any other correlation gives a result in between."
            ),
            mistake: t(
              "Promediar las σ como si fueran rendimientos (solo vale con ρ = +1), u olvidar sacar la raíz cuadrada al final.",
              "Averaging the σ's as if they were returns (only valid with ρ = +1), or forgetting to take the square root at the end."
            ),
          },
        ],
      },
      {
        heading: t("Diversificación y medidas de desempeño", "Diversification and performance measures"),
        body: [
          t(
            "La diversificación reduce el **riesgo no sistemático** (específico de cada empresa), pero no elimina el **riesgo sistemático** (de mercado: tasas, recesiones), que es el que el mercado remunera (beta en CAPM). Para comparar portafolios con distinto riesgo se usa el **índice de Sharpe**: exceso de rendimiento sobre la tasa libre de riesgo por unidad de volatilidad.",
            "Diversification reduces **unsystematic risk** (company-specific) but does not eliminate **systematic risk** (market-wide: rates, recessions), which is the risk the market rewards (beta in CAPM). To compare portfolios with different risk, use the **Sharpe ratio**: excess return over the risk-free rate per unit of volatility."
          ),
          t(
            "En palabras sencillas: «no pongas todos los huevos en la misma canasta» protege si una empresa quiebra, pero no si cae toda la economía. La **tasa libre de riesgo** es lo que ganarías casi sin riesgo (por ejemplo, en bonos del gobierno); el Sharpe pregunta cuánto rendimiento extra recibes por cada unidad de riesgo que aceptas.",
            "In simple words: «do not put all your eggs in one basket» protects you if one company fails, but not if the whole economy falls. The **risk-free rate** is what you would earn with almost no risk (for example, in government bonds); Sharpe asks how much extra return you get per unit of risk you accept."
          ),
        ],
        formulas: [
          {
            name: t("Índice de Sharpe", "Sharpe ratio"),
            expression: "Sharpe = (E(Rp) − rf) ÷ σp",
            variables: [
              { symbol: "E(Rp)", meaning: t("Rendimiento esperado del portafolio, en %.", "Expected return of the portfolio, in %.") },
              { symbol: "rf", meaning: t("Tasa libre de riesgo, en %.", "Risk-free rate, in %.") },
              { symbol: "σp", meaning: t("Desviación estándar del portafolio, en %.", "Standard deviation of the portfolio, in %.") },
            ],
            steps: [
              t("Resta la tasa libre de riesgo al rendimiento esperado (exceso de rendimiento).", "Subtract the risk-free rate from the expected return (excess return)."),
              t("Divide ese exceso entre la desviación estándar.", "Divide that excess by the standard deviation."),
              t("Compara: el portafolio con Sharpe más alto es mejor ajustado por riesgo.", "Compare: the portfolio with the higher Sharpe is better on a risk-adjusted basis."),
            ],
            example: t(
              "Rendimiento esperado 9 %, tasa libre de riesgo 5 % y σ 10 %: (9 − 5) ÷ 10 = 4 ÷ 10 = **0.40**.",
              "Expected return 9 %, risk-free rate 5 % and σ 10 %: (9 − 5) ÷ 10 = 4 ÷ 10 = **0.40**."
            ),
            mistake: t(
              "Olvidar restar la tasa libre de riesgo, o elegir el portafolio solo por su rendimiento sin ver el riesgo.",
              "Forgetting to subtract the risk-free rate, or choosing a portfolio only by its return without looking at risk."
            ),
          },
        ],
      },
      {
        heading: t("Introducción al Valor en Riesgo (VaR)", "Introduction to Value at Risk (VaR)"),
        body: [
          t(
            "El **VaR** estima la pérdida que no debería superarse con cierto **nivel de confianza** en un horizonte dado. En el método paramétrico, suponiendo rendimientos normales con media cercana a cero: VaR = Valor × σ del horizonte × z (z ≈ 1.645 al 95 %, ≈ 2.326 al 99 %).",
            "**VaR** estimates the loss that should not be exceeded at a given **confidence level** over a given horizon. In the parametric method, assuming normal returns with mean close to zero: VaR = Value × horizon σ × z (z ≈ 1.645 at 95 %, ≈ 2.326 at 99 %)."
          ),
          t(
            "Un VaR diario al 95 % de $100,000 significa que en 95 de cada 100 días se espera perder menos de $100,000; **no** es la pérdida máxima posible: en el 5 % restante la pérdida puede ser mucho mayor. Por eso se complementa con pruebas de estrés y medidas como el Expected Shortfall.",
            "A 95 % daily VaR of $100,000 means that on 95 out of 100 days losses are expected to be below $100,000; it is **not** the maximum possible loss: on the remaining 5 % of days the loss can be much larger. That is why it is complemented with stress tests and measures such as Expected Shortfall."
          ),
        ],
        formulas: [
          {
            name: t("Valor en Riesgo (VaR) paramétrico", "Parametric Value at Risk (VaR)"),
            expression: "VaR = Valor del portafolio × σ × z",
            variables: [
              { symbol: "Valor del portafolio", meaning: t("Cuánto vale hoy la inversión, en pesos.", "What the investment is worth today, in pesos.") },
              { symbol: "σ", meaning: t("Volatilidad del horizonte (por ejemplo, diaria), en decimal (1.2 % = 0.012).", "Volatility for the horizon (for example, daily), as a decimal (1.2 % = 0.012).") },
              { symbol: "z", meaning: t("Número fijo según la confianza: 1.645 al 95 % y 2.326 al 99 %.", "Fixed number by confidence level: 1.645 at 95 % and 2.326 at 99 %.") },
            ],
            steps: [
              t("Convierte la volatilidad a decimal.", "Convert volatility to a decimal."),
              t("Multiplica el valor del portafolio por la volatilidad: es la σ en pesos.", "Multiply the portfolio value by volatility: that is σ in pesos."),
              t("Multiplica por la z del nivel de confianza.", "Multiply by the z for the confidence level."),
            ],
            example: t(
              "Portafolio $2,000,000, volatilidad diaria 2 %, confianza 99 %. σ en pesos = $2,000,000 × 0.02 = $40,000. VaR = $40,000 × 2.326 = **$93,040**.",
              "Portfolio $2,000,000, daily volatility 2 %, 99 % confidence. σ in pesos = $2,000,000 × 0.02 = $40,000. VaR = $40,000 × 2.326 = **$93,040**."
            ),
            interpret: t(
              "En 99 de cada 100 días se espera perder menos de $93,040; en el día restante la pérdida puede ser mayor. No es la pérdida máxima.",
              "On 99 out of 100 days losses are expected to be below $93,040; on the remaining day the loss can be larger. It is not the maximum loss."
            ),
            mistake: t(
              "Usar z = 1.96 para el 95 %: ese valor es para un intervalo de dos colas; el VaR mira solo la cola de pérdidas (1.645).",
              "Using z = 1.96 for 95 %: that value is for a two-tailed interval; VaR looks only at the loss tail (1.645)."
            ),
          },
        ],
      },
    ],
    examples: [
      {
        title: t("Portafolio 50/50", "A 50/50 portfolio"),
        problem: t(
          "Activo A: rendimiento esperado 10 %, σ 15 %. Activo B: rendimiento esperado 6 %, σ 8 %. Correlación 0.3. Inviertes 50 % en cada uno.",
          "Asset A: expected return 10 %, σ 15 %. Asset B: expected return 6 %, σ 8 %. Correlation 0.3. You invest 50 % in each."
        ),
        steps: [
          t("E(Rp) = 0.5 × 10 % + 0.5 × 6 % = 8 %.", "E(Rp) = 0.5 × 10 % + 0.5 × 6 % = 8 %."),
          t("σp² = 0.25 × 0.0225 + 0.25 × 0.0064 + 2 × 0.5 × 0.5 × 0.3 × 0.15 × 0.08 = 0.005625 + 0.0016 + 0.0018 = 0.009025.", "σp² = 0.25 × 0.0225 + 0.25 × 0.0064 + 2 × 0.5 × 0.5 × 0.3 × 0.15 × 0.08 = 0.005625 + 0.0016 + 0.0018 = 0.009025."),
          t("σp = √0.009025 = 0.095 = 9.5 %.", "σp = √0.009025 = 0.095 = 9.5 %."),
          t("El promedio ponderado de los riesgos sería 11.5 %; la diferencia (2 puntos) es el beneficio de diversificar.", "The weighted average of risks would be 11.5 %; the difference (2 points) is the diversification benefit."),
        ],
        result: t("Rendimiento esperado 8 % con riesgo de 9.5 %.", "Expected return 8 % with 9.5 % risk."),
      },
      {
        title: t("VaR paramétrico diario", "Daily parametric VaR"),
        problem: t(
          "Un portafolio de $5,000,000 tiene volatilidad diaria de 1.5 %. Calcula el VaR de un día al 95 % (z = 1.645) y al 99 % (z = 2.326).",
          "A $5,000,000 portfolio has daily volatility of 1.5 %. Compute the one-day VaR at 95 % (z = 1.645) and at 99 % (z = 2.326)."
        ),
        steps: [
          t("σ en pesos = $5,000,000 × 1.5 % = $75,000.", "σ in pesos = $5,000,000 × 1.5 % = $75,000."),
          t("VaR 95 % = $75,000 × 1.645 = $123,375.", "VaR 95 % = $75,000 × 1.645 = $123,375."),
          t("VaR 99 % = $75,000 × 2.326 = $174,450.", "VaR 99 % = $75,000 × 2.326 = $174,450."),
        ],
        result: t("VaR diario: $123,375 (95 %) y $174,450 (99 %); a mayor confianza, mayor VaR.", "Daily VaR: $123,375 (95 %) and $174,450 (99 %); higher confidence means higher VaR."),
      },
    ],
    keyPoints: [
      t("El rendimiento del portafolio es un promedio ponderado; el riesgo no lo es (salvo ρ = 1).", "Portfolio return is a weighted average; risk is not (unless ρ = 1)."),
      t("A menor correlación, mayor beneficio de diversificación.", "The lower the correlation, the greater the diversification benefit."),
      t("La diversificación elimina riesgo no sistemático, no el sistemático.", "Diversification removes unsystematic risk, not systematic risk."),
      t("El VaR no es la pérdida máxima; es un umbral con cierto nivel de confianza.", "VaR is not the maximum loss; it is a threshold at a given confidence level."),
    ],
    exerciseIds: ["N6-037", "N6-038", "N6-039", "N6-040", "N6-041", "N6-042", "N6-043"],
  },
]

export const exercises: Exercise[] = [
  // ═════════════════════════════ L6-01 ═════════════════════════════
  {
    id: "N6-001",
    level: 6,
    module: "L6-01",
    kind: "fields",
    flavor: "statement",
    context: t(
      "Balance resumido: activo circulante $900,000 (incluye inventarios por $240,000); pasivo circulante $500,000; activo total $4,000,000; pasivo total $2,200,000.",
      "Summary balance sheet: current assets $900,000 (including inventory of $240,000); current liabilities $500,000; total assets $4,000,000; total liabilities $2,200,000."
    ),
    prompt: t(
      "Calcula las razones. Las de liquidez en veces con 2 decimales; el endeudamiento en %.",
      "Compute the ratios. Liquidity ratios in times with 2 decimals; the debt ratio in %."
    ),
    fields: [
      { id: "f1", label: t("Razón circulante (veces)", "Current ratio (times)"), answer: 1.8, unit: "times", tolerance: { abs: 0.01 } },
      { id: "f2", label: t("Prueba ácida (veces)", "Quick ratio (times)"), answer: 1.32, unit: "times", tolerance: { abs: 0.01 } },
      { id: "f3", label: t("Razón de endeudamiento (%)", "Debt ratio (%)"), answer: 55, unit: "%", tolerance: { abs: 0.1 } },
    ],
    explanation: t(
      "Circulante = 900,000 ÷ 500,000 = 1.80. Prueba ácida = (900,000 − 240,000) ÷ 500,000 = 660,000 ÷ 500,000 = 1.32. Endeudamiento = 2,200,000 ÷ 4,000,000 = 55 %. Error común: olvidar restar inventarios en la prueba ácida o dividir el pasivo entre el capital (eso es deuda a capital).",
      "Current = 900,000 ÷ 500,000 = 1.80. Quick = (900,000 − 240,000) ÷ 500,000 = 660,000 ÷ 500,000 = 1.32. Debt ratio = 2,200,000 ÷ 4,000,000 = 55 %. Common mistake: forgetting to subtract inventory in the quick ratio, or dividing liabilities by equity (that is debt-to-equity)."
    ),
    difficulty: 1,
    points: 10,
    competency: "financial-ratios",
  },
  {
    id: "N6-002",
    level: 6,
    module: "L6-01",
    kind: "classify",
    flavor: "concept",
    prompt: t("Clasifica cada razón en su familia.", "Classify each ratio into its family."),
    categories: [
      { id: "N6-002-c1", label: t("Liquidez", "Liquidity") },
      { id: "N6-002-c2", label: t("Apalancamiento", "Leverage") },
      { id: "N6-002-c3", label: t("Rentabilidad", "Profitability") },
      { id: "N6-002-c4", label: t("Eficiencia", "Efficiency") },
    ],
    items: [
      { id: "N6-002-i1", label: t("Prueba ácida", "Quick ratio"), correctCategoryId: "N6-002-c1" },
      { id: "N6-002-i2", label: t("Deuda a capital", "Debt-to-equity"), correctCategoryId: "N6-002-c2" },
      { id: "N6-002-i3", label: t("Margen neto", "Net margin"), correctCategoryId: "N6-002-c3" },
      { id: "N6-002-i4", label: t("Rotación de inventarios", "Inventory turnover"), correctCategoryId: "N6-002-c4" },
      { id: "N6-002-i5", label: t("ROA", "ROA"), correctCategoryId: "N6-002-c3" },
      { id: "N6-002-i6", label: t("Cobertura de intereses (EBIT ÷ intereses)", "Interest coverage (EBIT ÷ interest)"), correctCategoryId: "N6-002-c2" },
    ],
    explanation: t(
      "Liquidez: capacidad de pago a corto plazo (prueba ácida). Apalancamiento: uso y carga de la deuda (deuda a capital, cobertura de intereses). Rentabilidad: utilidad respecto a ventas o inversión (margen neto, ROA). Eficiencia: uso de activos (rotación de inventarios).",
      "Liquidity: short-term ability to pay (quick ratio). Leverage: use and burden of debt (debt-to-equity, interest coverage). Profitability: profit relative to sales or investment (net margin, ROA). Efficiency: asset usage (inventory turnover)."
    ),
    difficulty: 1,
    points: 10,
    competency: "financial-ratios",
  },
  {
    id: "N6-003",
    level: 6,
    module: "L6-01",
    kind: "truefalse",
    flavor: "interpret",
    prompt: t(
      "Una razón circulante muy alta (por ejemplo, 6 veces) siempre indica una gestión financiera eficiente.",
      "A very high current ratio (e.g. 6 times) always indicates efficient financial management."
    ),
    answer: false,
    explanation: t(
      "Falso. Una liquidez excesiva puede reflejar efectivo ocioso, inventarios lentos o cobranza deficiente, lo que reduce la rentabilidad. Las razones se interpretan contra la industria y la tendencia, no con la regla «más es mejor».",
      "False. Excess liquidity may reflect idle cash, slow-moving inventory or poor collections, which lowers profitability. Ratios are interpreted against the industry and the trend, not with a «more is better» rule."
    ),
    difficulty: 1,
    points: 10,
    competency: "ratio-interpretation",
  },
  {
    id: "N6-004",
    level: 6,
    module: "L6-01",
    kind: "formula",
    flavor: "concept",
    prompt: t("Completa la identidad DuPont de tres factores.", "Complete the three-factor DuPont identity."),
    template: "ROE = {{b1}} × {{b2}} × {{b3}}",
    blanks: [
      {
        id: "b1",
        options: [
          { id: "N6-004-b1-a", text: t("Utilidad neta ÷ Ventas", "Net income ÷ Sales") },
          { id: "N6-004-b1-b", text: t("EBITDA ÷ Intereses", "EBITDA ÷ Interest") },
          { id: "N6-004-b1-c", text: t("Activo circulante ÷ Pasivo circulante", "Current assets ÷ Current liabilities") },
        ],
        correctOptionId: "N6-004-b1-a",
      },
      {
        id: "b2",
        options: [
          { id: "N6-004-b2-a", text: t("Capital ÷ Activo total", "Equity ÷ Total assets") },
          { id: "N6-004-b2-b", text: t("Ventas ÷ Activo total", "Sales ÷ Total assets") },
          { id: "N6-004-b2-c", text: t("Costo de ventas ÷ Inventario", "Cost of sales ÷ Inventory") },
        ],
        correctOptionId: "N6-004-b2-b",
      },
      {
        id: "b3",
        options: [
          { id: "N6-004-b3-a", text: t("Pasivo total ÷ Activo total", "Total liabilities ÷ Total assets") },
          { id: "N6-004-b3-b", text: t("Utilidad neta ÷ Capital", "Net income ÷ Equity") },
          { id: "N6-004-b3-c", text: t("Activo total ÷ Capital contable", "Total assets ÷ Equity") },
          { id: "N6-004-b3-d", text: t("Ventas ÷ Capital contable", "Sales ÷ Equity") },
        ],
        correctOptionId: "N6-004-b3-c",
      },
    ],
    explanation: t(
      "ROE = margen neto (UN ÷ Ventas) × rotación de activos (Ventas ÷ Activo) × multiplicador de capital (Activo ÷ Capital). Al multiplicar, ventas y activo se cancelan y queda UN ÷ Capital. Usar Pasivo ÷ Activo como tercer factor es un error común: esa es la razón de endeudamiento, no el multiplicador.",
      "ROE = net margin (NI ÷ Sales) × asset turnover (Sales ÷ Assets) × equity multiplier (Assets ÷ Equity). Multiplying them, sales and assets cancel, leaving NI ÷ Equity. Using Liabilities ÷ Assets as the third factor is a common mistake: that is the debt ratio, not the multiplier."
    ),
    difficulty: 2,
    points: 15,
    competency: "dupont",
  },
  {
    id: "N6-005",
    level: 6,
    module: "L6-01",
    kind: "numeric",
    flavor: "case",
    context: t(
      "Una cadena comercial tiene margen neto de 8 %, rotación de activos de 1.5 veces y multiplicador de capital de 2.0.",
      "A retail chain has a net margin of 8 %, asset turnover of 1.5 times and an equity multiplier of 2.0."
    ),
    prompt: t("Calcula su ROE en %. Redondea a 1 decimal.", "Compute its ROE in %. Round to 1 decimal."),
    answer: 24,
    unit: "%",
    decimals: 1,
    tolerance: { abs: 0.05 },
    explanation: t(
      "ROE = 8 % × 1.5 × 2.0 = 24 %. Paso intermedio: ROA = 8 % × 1.5 = 12 %; el apalancamiento lo duplica. Error común: sumar los factores en lugar de multiplicarlos.",
      "ROE = 8 % × 1.5 × 2.0 = 24 %. Intermediate step: ROA = 8 % × 1.5 = 12 %; leverage doubles it. Common mistake: adding the factors instead of multiplying them."
    ),
    difficulty: 2,
    points: 15,
    competency: "dupont",
  },
  {
    id: "N6-006",
    level: 6,
    module: "L6-01",
    kind: "numeric",
    flavor: "case",
    context: t(
      "Ventas anuales a crédito: $6,000,000. Saldo de clientes al cierre: $600,000. Usa un año de 365 días.",
      "Annual credit sales: $6,000,000. Year-end accounts receivable: $600,000. Use a 365-day year."
    ),
    prompt: t("Calcula los días de cobranza. Redondea a 1 decimal.", "Compute days sales outstanding. Round to 1 decimal."),
    answer: 36.5,
    unit: "days",
    decimals: 1,
    tolerance: { abs: 0.05 },
    explanation: t(
      "Días de cobranza = Clientes ÷ Ventas × 365 = 600,000 ÷ 6,000,000 × 365 = 0.10 × 365 = 36.5 días. Equivale a una rotación de clientes de 10 veces (365 ÷ 10 = 36.5). Error común: invertir el cociente (Ventas ÷ Clientes × 365).",
      "DSO = Receivables ÷ Sales × 365 = 600,000 ÷ 6,000,000 × 365 = 0.10 × 365 = 36.5 days. It equals a receivables turnover of 10 times (365 ÷ 10 = 36.5). Common mistake: inverting the ratio (Sales ÷ Receivables × 365)."
    ),
    difficulty: 2,
    points: 15,
    competency: "efficiency-ratios",
  },
  {
    id: "N6-007",
    level: 6,
    module: "L6-01",
    kind: "mcq",
    flavor: "interpret",
    context: t(
      "Las empresas Norte y Sur tienen ROA de 8 %. Norte tiene ROE de 24 % y Sur de 10 %.",
      "Companies Norte and Sur both have an ROA of 8 %. Norte has an ROE of 24 % and Sur 10 %."
    ),
    prompt: t("¿Cuál es la interpretación más adecuada?", "What is the most appropriate interpretation?"),
    options: [
      { id: "N6-007-a", text: t("Norte es más eficiente en el uso de sus activos", "Norte is more efficient in using its assets") },
      { id: "N6-007-b", text: t("Norte tiene mayor margen neto que Sur", "Norte has a higher net margin than Sur") },
      { id: "N6-007-c", text: t("Norte tiene menos riesgo financiero que Sur", "Norte has less financial risk than Sur") },
      { id: "N6-007-d", text: t("Norte usa mucho más apalancamiento (multiplicador 3.0 vs 1.25), lo que eleva su ROE y también su riesgo", "Norte uses much more leverage (multiplier 3.0 vs 1.25), which raises its ROE and also its risk") },
    ],
    correctOptionId: "N6-007-d",
    explanation: t(
      "ROE = ROA × multiplicador. Norte: 24 % ÷ 8 % = 3.0; Sur: 10 % ÷ 8 % = 1.25. Con el mismo ROA, la diferencia viene del apalancamiento, no de margen ni de rotación. Más deuda implica más riesgo financiero, no menos.",
      "ROE = ROA × multiplier. Norte: 24 % ÷ 8 % = 3.0; Sur: 10 % ÷ 8 % = 1.25. With the same ROA, the difference comes from leverage, not margin or turnover. More debt means more financial risk, not less."
    ),
    difficulty: 3,
    points: 20,
    competency: "ratio-interpretation",
  },
  // ═════════════════════════════ L6-02 ═════════════════════════════
  {
    id: "N6-008",
    level: 6,
    module: "L6-02",
    kind: "formula",
    flavor: "concept",
    prompt: t("Completa la fórmula del flujo libre de efectivo de la empresa.", "Complete the free cash flow to the firm formula."),
    template: "FCFF = EBIT × {{b1}} + {{b2}} − {{b3}} − ΔCapital de trabajo",
    blanks: [
      {
        id: "b1",
        options: [
          { id: "N6-008-b1-a", text: t("(1 + T)", "(1 + T)") },
          { id: "N6-008-b1-b", text: t("(1 − T)", "(1 − T)") },
          { id: "N6-008-b1-c", text: t("T", "T") },
        ],
        correctOptionId: "N6-008-b1-b",
      },
      {
        id: "b2",
        options: [
          { id: "N6-008-b2-a", text: t("Gasto por intereses", "Interest expense") },
          { id: "N6-008-b2-b", text: t("Dividendos", "Dividends") },
          { id: "N6-008-b2-c", text: t("Depreciación y amortización", "Depreciation and amortization") },
        ],
        correctOptionId: "N6-008-b2-c",
      },
      {
        id: "b3",
        options: [
          { id: "N6-008-b3-a", text: t("CapEx (inversión en activo fijo)", "CapEx (fixed-asset investment)") },
          { id: "N6-008-b3-b", text: t("Pago de deuda", "Debt repayment") },
          { id: "N6-008-b3-c", text: t("Utilidad neta", "Net income") },
        ],
        correctOptionId: "N6-008-b3-a",
      },
    ],
    explanation: t(
      "FCFF = EBIT(1 − T) + D&A − CapEx − ΔCT. La D&A se suma porque no es salida de efectivo. Intereses, dividendos y pagos de deuda no se restan: el FCFF es el flujo disponible para todos los proveedores de capital, antes de pagarles.",
      "FCFF = EBIT(1 − T) + D&A − CapEx − ΔWC. D&A is added back because it is not a cash outflow. Interest, dividends and debt repayments are not subtracted: FCFF is the flow available to all capital providers, before paying them."
    ),
    difficulty: 1,
    points: 10,
    competency: "fcff",
  },
  {
    id: "N6-009",
    level: 6,
    module: "L6-02",
    kind: "numeric",
    flavor: "case",
    prompt: t(
      "Las ventas del año 0 son $10,000,000 y se proyecta un crecimiento de 8 % anual. ¿Cuáles son las ventas proyectadas del año 2? Responde en pesos.",
      "Year-0 sales are $10,000,000 and growth of 8 % per year is projected. What are projected sales for year 2? Answer in pesos."
    ),
    answer: 11664000,
    unit: "MXN",
    decimals: 0,
    tolerance: { abs: 0.5 },
    explanation: t(
      "Ventas año 2 = 10,000,000 × 1.08² = 10,000,000 × 1.1664 = $11,664,000. Error común: crecimiento simple (10,000,000 × 1.16 = $11,600,000), que ignora que el año 2 crece sobre la base del año 1.",
      "Year-2 sales = 10,000,000 × 1.08² = 10,000,000 × 1.1664 = $11,664,000. Common mistake: simple growth (10,000,000 × 1.16 = $11,600,000), which ignores that year 2 grows on year 1's base."
    ),
    difficulty: 1,
    points: 10,
    competency: "forecasting",
  },
  {
    id: "N6-010",
    level: 6,
    module: "L6-02",
    kind: "numeric",
    flavor: "case",
    context: t(
      "EBIT $1,000,000; tasa de impuestos 30 %; depreciación y amortización $150,000; CapEx $200,000; aumento de capital de trabajo $50,000; gasto por intereses $80,000.",
      "EBIT $1,000,000; tax rate 30 %; depreciation and amortization $150,000; CapEx $200,000; increase in working capital $50,000; interest expense $80,000."
    ),
    prompt: t("Calcula el FCFF en pesos.", "Compute FCFF in pesos."),
    answer: 600000,
    unit: "MXN",
    decimals: 0,
    tolerance: { abs: 0.5 },
    explanation: t(
      "NOPAT = 1,000,000 × 0.70 = 700,000. FCFF = 700,000 + 150,000 − 200,000 − 50,000 = $600,000. Los intereses ($80,000) no se restan: su efecto se captura en el WACC. Restarlos es el error más común.",
      "NOPAT = 1,000,000 × 0.70 = 700,000. FCFF = 700,000 + 150,000 − 200,000 − 50,000 = $600,000. Interest ($80,000) is not subtracted: its effect is captured in WACC. Subtracting it is the most common mistake."
    ),
    difficulty: 2,
    points: 15,
    competency: "fcff",
  },
  {
    id: "N6-011",
    level: 6,
    module: "L6-02",
    kind: "truefalse",
    flavor: "concept",
    prompt: t(
      "El modelo de Gordon para el valor terminal puede usarse aunque la tasa de crecimiento g sea igual o mayor que la tasa de descuento.",
      "The Gordon model for terminal value can be used even if the growth rate g equals or exceeds the discount rate."
    ),
    answer: false,
    explanation: t(
      "Falso. VT = FCFF × (1 + g) ÷ (r − g) requiere r > g. Si g = r el denominador es cero (valor infinito) y si g > r el valor es negativo; ambos resultados carecen de sentido económico. Además, ninguna empresa puede crecer para siempre más rápido que la economía.",
      "False. TV = FCFF × (1 + g) ÷ (r − g) requires r > g. If g = r the denominator is zero (infinite value) and if g > r the value is negative; neither makes economic sense. Also, no company can grow faster than the economy forever."
    ),
    difficulty: 1,
    points: 10,
    competency: "terminal-value",
  },
  {
    id: "N6-012",
    level: 6,
    module: "L6-02",
    kind: "numeric",
    flavor: "case",
    prompt: t(
      "El FCFF del año 5 es $1,000,000. Con WACC de 10 % y crecimiento a perpetuidad de 3 %, calcula el valor terminal al cierre del año 5 (sin descontarlo a hoy). Responde en pesos con 2 decimales.",
      "Year-5 FCFF is $1,000,000. With a 10 % WACC and 3 % perpetual growth, compute the terminal value at the end of year 5 (not discounted to today). Answer in pesos with 2 decimals."
    ),
    answer: 14714285.71,
    unit: "MXN",
    decimals: 2,
    tolerance: { rel: 0.005 },
    explanation: t(
      "VT₅ = 1,000,000 × 1.03 ÷ (0.10 − 0.03) = 1,030,000 ÷ 0.07 = $14,714,285.71. Error común: no multiplicar por (1 + g) —se necesita el flujo del año 6— o usar 0.10 + 0.03 en el denominador.",
      "TV₅ = 1,000,000 × 1.03 ÷ (0.10 − 0.03) = 1,030,000 ÷ 0.07 = $14,714,285.71. Common mistake: not multiplying by (1 + g) —the year-6 flow is needed— or using 0.10 + 0.03 in the denominator."
    ),
    difficulty: 2,
    points: 15,
    competency: "terminal-value",
  },
  {
    id: "N6-013",
    level: 6,
    module: "L6-02",
    kind: "fields",
    flavor: "case",
    context: t(
      "FCFF proyectados: año 1 $100,000; año 2 $110,000; año 3 $120,000. WACC 10 %. Valor terminal al cierre del año 3: $1,500,000.",
      "Projected FCFF: year 1 $100,000; year 2 $110,000; year 3 $120,000. WACC 10 %. Terminal value at the end of year 3: $1,500,000."
    ),
    prompt: t("Calcula cada concepto en pesos, con 2 decimales.", "Compute each item in pesos, with 2 decimals."),
    fields: [
      { id: "f1", label: t("Suma del VP de los FCFF (años 1–3)", "Sum of PV of FCFF (years 1–3)"), answer: 271975.96, unit: "MXN", tolerance: { rel: 0.005 } },
      { id: "f2", label: t("VP del valor terminal", "PV of terminal value"), answer: 1126972.2, unit: "MXN", tolerance: { rel: 0.005 } },
      { id: "f3", label: t("Enterprise Value", "Enterprise Value"), answer: 1398948.16, unit: "MXN", tolerance: { rel: 0.005 } },
    ],
    explanation: t(
      "VP: 100,000 ÷ 1.1 = 90,909.09; 110,000 ÷ 1.21 = 90,909.09; 120,000 ÷ 1.331 = 90,157.78; suma = 271,975.96. VP del VT = 1,500,000 ÷ 1.331 = 1,126,972.20. EV = 271,975.96 + 1,126,972.20 = 1,398,948.16. Error común: no descontar el valor terminal o descontarlo 4 periodos.",
      "PV: 100,000 ÷ 1.1 = 90,909.09; 110,000 ÷ 1.21 = 90,909.09; 120,000 ÷ 1.331 = 90,157.78; sum = 271,975.96. PV of TV = 1,500,000 ÷ 1.331 = 1,126,972.20. EV = 271,975.96 + 1,126,972.20 = 1,398,948.16. Common mistake: not discounting the terminal value or discounting it 4 periods."
    ),
    difficulty: 3,
    points: 20,
    competency: "dcf",
  },
  {
    id: "N6-014",
    level: 6,
    module: "L6-02",
    kind: "mcq",
    flavor: "interpret",
    prompt: t(
      "En un análisis de sensibilidad, el WACC sube de 9 % a 10 % y g se mantiene en 3 %. ¿Qué le ocurre al valor terminal calculado con Gordon (mismo FCFF)?",
      "In a sensitivity analysis, WACC rises from 9 % to 10 % while g stays at 3 %. What happens to the Gordon terminal value (same FCFF)?"
    ),
    options: [
      { id: "N6-014-a", text: t("Aumenta alrededor de 14 %", "It increases by about 14 %") },
      { id: "N6-014-b", text: t("Disminuye alrededor de 14 %", "It decreases by about 14 %") },
      { id: "N6-014-c", text: t("Disminuye alrededor de 1 %", "It decreases by about 1 %") },
      { id: "N6-014-d", text: t("No cambia, porque g es la misma", "It does not change, because g is the same") },
    ],
    correctOptionId: "N6-014-b",
    explanation: t(
      "El VT es proporcional a 1 ÷ (WACC − g): pasa de 1 ÷ 0.06 a 1 ÷ 0.07. Cambio = 0.06 ÷ 0.07 − 1 = −14.3 %. Un solo punto de WACC mueve mucho el valor porque el denominador (r − g) es pequeño; por eso se hacen tablas de sensibilidad. Pensar que baja 1 % confunde el cambio en la tasa con el cambio en el valor.",
      "TV is proportional to 1 ÷ (WACC − g): it goes from 1 ÷ 0.06 to 1 ÷ 0.07. Change = 0.06 ÷ 0.07 − 1 = −14.3 %. A single WACC point moves value a lot because the denominator (r − g) is small; that is why sensitivity tables are used. Thinking it falls 1 % confuses the change in the rate with the change in value."
    ),
    difficulty: 3,
    points: 20,
    competency: "sensitivity-analysis",
  },
  {
    id: "N6-015",
    level: 6,
    module: "L6-02",
    kind: "multi",
    flavor: "concept",
    prompt: t(
      "¿Qué vínculos son correctos en un modelo financiero integrado de tres estados? Selecciona todas las que apliquen.",
      "Which links are correct in an integrated three-statement financial model? Select all that apply."
    ),
    options: [
      { id: "N6-015-a", text: t("La utilidad neta incrementa las utilidades retenidas del balance", "Net income increases retained earnings on the balance sheet") },
      { id: "N6-015-b", text: t("El CapEx se registra como gasto en el estado de resultados del año", "CapEx is recorded as an expense in the year's income statement") },
      { id: "N6-015-c", text: t("El efectivo final del estado de flujos de efectivo es igual al efectivo del balance", "Ending cash in the cash flow statement equals cash on the balance sheet") },
      { id: "N6-015-d", text: t("La depreciación reduce el activo fijo neto y se suma en el flujo de operación", "Depreciation reduces net fixed assets and is added back in operating cash flow") },
      { id: "N6-015-e", text: t("Los dividendos pagados se restan como gasto para llegar a la utilidad neta", "Dividends paid are subtracted as an expense to arrive at net income") },
    ],
    correctOptionIds: ["N6-015-a", "N6-015-c", "N6-015-d"],
    explanation: t(
      "Utilidad neta → utilidades retenidas; efectivo del flujo = efectivo del balance; depreciación → baja el activo fijo y se suma en operación. El CapEx se capitaliza (activo fijo) y aparece en actividades de inversión, no como gasto. Los dividendos son distribución de utilidades: reducen utilidades retenidas, no la utilidad neta.",
      "Net income → retained earnings; cash-flow cash = balance-sheet cash; depreciation → reduces fixed assets and is added back in operations. CapEx is capitalized (fixed assets) and appears in investing activities, not as an expense. Dividends are a distribution of profit: they reduce retained earnings, not net income."
    ),
    difficulty: 2,
    points: 15,
    competency: "integrated-models",
  },
  // ═════════════════════════════ L6-03 ═════════════════════════════
  {
    id: "N6-016",
    level: 6,
    module: "L6-03",
    kind: "formula",
    flavor: "concept",
    prompt: t("Completa el puente de Equity Value a Enterprise Value.", "Complete the bridge from Equity Value to Enterprise Value."),
    template: "EV = Equity Value + {{b1}} − {{b2}} + {{b3}} + Acciones preferentes",
    blanks: [
      {
        id: "b1",
        options: [
          { id: "N6-016-b1-a", text: t("Deuda", "Debt") },
          { id: "N6-016-b1-b", text: t("Proveedores", "Accounts payable") },
          { id: "N6-016-b1-c", text: t("Utilidad neta", "Net income") },
        ],
        correctOptionId: "N6-016-b1-a",
      },
      {
        id: "b2",
        options: [
          { id: "N6-016-b2-a", text: t("Inventarios", "Inventory") },
          { id: "N6-016-b2-b", text: t("Efectivo y equivalentes", "Cash and equivalents") },
          { id: "N6-016-b2-c", text: t("Participación no controladora", "Non-controlling interest") },
        ],
        correctOptionId: "N6-016-b2-b",
      },
      {
        id: "b3",
        options: [
          { id: "N6-016-b3-a", text: t("Capital social", "Share capital") },
          { id: "N6-016-b3-b", text: t("EBITDA", "EBITDA") },
          { id: "N6-016-b3-c", text: t("Participación no controladora", "Non-controlling interest") },
          { id: "N6-016-b3-d", text: t("Depreciación acumulada", "Accumulated depreciation") },
        ],
        correctOptionId: "N6-016-b3-c",
      },
    ],
    explanation: t(
      "EV = Equity value + deuda − efectivo + participación no controladora + preferentes. Se suman todos los derechos de otros proveedores de capital y se resta el efectivo, que no es parte del negocio operativo. Proveedores es pasivo operativo y ya está reflejado en el capital de trabajo.",
      "EV = Equity value + debt − cash + non-controlling interest + preferred. All claims of other capital providers are added and cash, which is not part of the operating business, is subtracted. Accounts payable is an operating liability already reflected in working capital."
    ),
    difficulty: 1,
    points: 10,
    competency: "enterprise-value",
  },
  {
    id: "N6-017",
    level: 6,
    module: "L6-03",
    kind: "truefalse",
    flavor: "concept",
    prompt: t(
      "Si una empresa usa $100,000,000 de su efectivo para pagar deuda, sin ningún otro efecto, su Enterprise Value no cambia.",
      "If a company uses $100,000,000 of its cash to repay debt, with no other effect, its Enterprise Value does not change."
    ),
    answer: true,
    explanation: t(
      "Verdadero. La deuda baja $100,000,000 y el efectivo también: la deuda neta no cambia, el equity value tampoco, y por lo tanto el EV se mantiene. El EV mide el negocio operativo, que no se modificó.",
      "True. Debt falls by $100,000,000 and so does cash: net debt is unchanged, equity value too, so EV stays the same. EV measures the operating business, which did not change."
    ),
    difficulty: 1,
    points: 10,
    competency: "enterprise-value",
  },
  {
    id: "N6-018",
    level: 6,
    module: "L6-03",
    kind: "numeric",
    flavor: "case",
    context: t(
      "Empresa listada: 10,000,000 de acciones a $45; deuda $200,000,000; efectivo $50,000,000; participación no controladora $20,000,000; sin acciones preferentes.",
      "Listed company: 10,000,000 shares at $45; debt $200,000,000; cash $50,000,000; non-controlling interest $20,000,000; no preferred shares."
    ),
    prompt: t("Calcula el Enterprise Value en pesos.", "Compute Enterprise Value in pesos."),
    answer: 620000000,
    unit: "MXN",
    decimals: 0,
    tolerance: { abs: 0.5 },
    explanation: t(
      "Capitalización = 10,000,000 × 45 = $450,000,000. EV = 450,000,000 + 200,000,000 − 50,000,000 + 20,000,000 = $620,000,000. Errores comunes: sumar el efectivo u olvidar la participación no controladora.",
      "Market cap = 10,000,000 × 45 = $450,000,000. EV = 450,000,000 + 200,000,000 − 50,000,000 + 20,000,000 = $620,000,000. Common mistakes: adding cash or forgetting the non-controlling interest."
    ),
    difficulty: 2,
    points: 15,
    competency: "enterprise-value",
  },
  {
    id: "N6-019",
    level: 6,
    module: "L6-03",
    kind: "classify",
    flavor: "concept",
    prompt: t(
      "Clasifica cada múltiplo según su numerador: valor de la empresa (EV) o valor del capital (precio).",
      "Classify each multiple by its numerator: firm value (EV) or equity value (price)."
    ),
    categories: [
      { id: "N6-019-c1", label: t("Múltiplo de Enterprise Value", "Enterprise Value multiple") },
      { id: "N6-019-c2", label: t("Múltiplo de Equity Value", "Equity Value multiple") },
    ],
    items: [
      { id: "N6-019-i1", label: t("EV/EBITDA", "EV/EBITDA"), correctCategoryId: "N6-019-c1" },
      { id: "N6-019-i2", label: t("Precio/Utilidad (P/E)", "Price/Earnings (P/E)"), correctCategoryId: "N6-019-c2" },
      { id: "N6-019-i3", label: t("EV/Ventas", "EV/Sales"), correctCategoryId: "N6-019-c1" },
      { id: "N6-019-i4", label: t("Precio/Valor en libros (P/VL)", "Price/Book value (P/B)"), correctCategoryId: "N6-019-c2" },
      { id: "N6-019-i5", label: t("EV/EBIT", "EV/EBIT"), correctCategoryId: "N6-019-c1" },
    ],
    explanation: t(
      "Los múltiplos de EV usan métricas antes de intereses que pertenecen a todos los inversionistas (ventas, EBITDA, EBIT). Los de capital usan métricas del accionista (utilidad neta, valor en libros del capital). Mezclarlos —por ejemplo, EV/Utilidad neta— es inconsistente.",
      "EV multiples use pre-interest metrics that belong to all investors (sales, EBITDA, EBIT). Equity multiples use shareholder metrics (net income, book value of equity). Mixing them —e.g. EV/Net income— is inconsistent."
    ),
    difficulty: 1,
    points: 10,
    competency: "multiples",
  },
  {
    id: "N6-020",
    level: 6,
    module: "L6-03",
    kind: "mcq",
    flavor: "concept",
    prompt: t(
      "¿Por qué EV/EBITDA suele preferirse a P/E para comparar empresas con estructuras de capital muy distintas?",
      "Why is EV/EBITDA usually preferred over P/E to compare companies with very different capital structures?"
    ),
    options: [
      { id: "N6-020-a", text: t("Porque el EBITDA siempre es mayor que la utilidad neta", "Because EBITDA is always larger than net income") },
      { id: "N6-020-b", text: t("Porque el EBITDA es una métrica obligatoria según las NIF", "Because EBITDA is a mandatory metric under NIF") },
      { id: "N6-020-c", text: t("Porque EV y EBITDA consideran a todos los proveedores de capital y el EBITDA es anterior a intereses, lo que neutraliza el efecto del apalancamiento", "Because EV and EBITDA consider all capital providers and EBITDA is before interest, which neutralizes the effect of leverage") },
      { id: "N6-020-d", text: t("Porque el P/E no puede calcularse para empresas listadas", "Because P/E cannot be computed for listed companies") },
    ],
    correctOptionId: "N6-020-c",
    explanation: t(
      "El EBITDA no se ve afectado por los intereses y el EV incluye deuda y capital, así que ambos lados son independientes de cómo se financie la empresa. El P/E cambia con el apalancamiento. El EBITDA no es una métrica de NIF/IFRS obligatoria, y que sea mayor no es la razón.",
      "EBITDA is unaffected by interest and EV includes both debt and equity, so both sides are independent of how the company is financed. P/E changes with leverage. EBITDA is not a mandatory NIF/IFRS measure, and being larger is not the reason."
    ),
    difficulty: 2,
    points: 15,
    competency: "multiples",
  },
  {
    id: "N6-021",
    level: 6,
    module: "L6-03",
    kind: "numeric",
    flavor: "case",
    context: t(
      "Empresa objetivo: EBITDA $80,000,000; deuda neta $150,000,000; 20,000,000 de acciones. Los comparables cotizan a una mediana de 7.5x EV/EBITDA.",
      "Target company: EBITDA $80,000,000; net debt $150,000,000; 20,000,000 shares. Comparables trade at a median of 7.5x EV/EBITDA."
    ),
    prompt: t("Calcula el valor implícito por acción, en pesos con 2 decimales.", "Compute the implied value per share, in pesos with 2 decimals."),
    answer: 22.5,
    unit: "MXN",
    decimals: 2,
    tolerance: { abs: 0.01 },
    explanation: t(
      "EV = 7.5 × 80,000,000 = $600,000,000. Equity = 600,000,000 − 150,000,000 = $450,000,000. Por acción = 450,000,000 ÷ 20,000,000 = $22.50. Error común: dividir el EV entre las acciones sin restar la deuda neta ($30.00).",
      "EV = 7.5 × 80,000,000 = $600,000,000. Equity = 600,000,000 − 150,000,000 = $450,000,000. Per share = 450,000,000 ÷ 20,000,000 = $22.50. Common mistake: dividing EV by shares without subtracting net debt ($30.00)."
    ),
    difficulty: 2,
    points: 15,
    competency: "multiples",
  },
  {
    id: "N6-022",
    level: 6,
    module: "L6-03",
    kind: "fields",
    flavor: "case",
    context: t(
      "Valuación por P/E: la mediana de comparables es 12x. La empresa objetivo tiene utilidad neta de $25,000,000, deuda neta de $60,000,000 y 10,000,000 de acciones.",
      "P/E valuation: the comparables' median is 12x. The target has net income of $25,000,000, net debt of $60,000,000 and 10,000,000 shares."
    ),
    prompt: t("Calcula en pesos.", "Compute in pesos."),
    fields: [
      { id: "f1", label: t("Equity value implícito", "Implied equity value"), answer: 300000000, unit: "MXN", tolerance: { abs: 0.5 } },
      { id: "f2", label: t("Valor por acción", "Value per share"), answer: 30, unit: "MXN", tolerance: { abs: 0.01 } },
      { id: "f3", label: t("Enterprise Value implícito", "Implied Enterprise Value"), answer: 360000000, unit: "MXN", tolerance: { abs: 0.5 } },
    ],
    explanation: t(
      "Equity = 12 × 25,000,000 = $300,000,000 (el P/E da directamente valor del capital, no se resta deuda). Por acción = 300,000,000 ÷ 10,000,000 = $30.00. EV = 300,000,000 + 60,000,000 = $360,000,000. Error común: restar la deuda neta al resultado del P/E.",
      "Equity = 12 × 25,000,000 = $300,000,000 (P/E gives equity value directly; debt is not subtracted). Per share = 300,000,000 ÷ 10,000,000 = $30.00. EV = 300,000,000 + 60,000,000 = $360,000,000. Common mistake: subtracting net debt from the P/E result."
    ),
    difficulty: 3,
    points: 20,
    competency: "multiples",
  },
  // ═════════════════════════════ L6-04 ═════════════════════════════
  {
    id: "N6-023",
    level: 6,
    module: "L6-04",
    kind: "classify",
    flavor: "concept",
    prompt: t("Clasifica cada fuente de sinergia.", "Classify each source of synergy."),
    categories: [
      { id: "N6-023-c1", label: t("Sinergia de costos", "Cost synergy") },
      { id: "N6-023-c2", label: t("Sinergia de ingresos", "Revenue synergy") },
      { id: "N6-023-c3", label: t("Sinergia financiera", "Financial synergy") },
    ],
    items: [
      { id: "N6-023-i1", label: t("Cerrar uno de los dos corporativos duplicados", "Closing one of two duplicate head offices"), correctCategoryId: "N6-023-c1" },
      { id: "N6-023-i2", label: t("Vender productos del objetivo a los clientes del comprador", "Selling the target's products to the acquirer's customers"), correctCategoryId: "N6-023-c2" },
      { id: "N6-023-i3", label: t("Obtener una tasa de interés menor por el mayor tamaño combinado", "Getting a lower interest rate thanks to the larger combined size"), correctCategoryId: "N6-023-c3" },
      { id: "N6-023-i4", label: t("Descuentos por volumen en compras de materia prima", "Volume discounts on raw-material purchases"), correctCategoryId: "N6-023-c1" },
      { id: "N6-023-i5", label: t("Acceso a la red de distribución del objetivo en otra región", "Access to the target's distribution network in another region"), correctCategoryId: "N6-023-c2" },
    ],
    explanation: t(
      "Costos: eliminar duplicidades y ganar escala (corporativo, compras). Ingresos: vender más gracias a la combinación (venta cruzada, nuevos canales). Financieras: mejores condiciones de financiamiento. Las de costos suelen ser más controlables y confiables.",
      "Cost: removing duplication and gaining scale (head office, purchasing). Revenue: selling more thanks to the combination (cross-selling, new channels). Financial: better financing terms. Cost synergies are usually more controllable and reliable."
    ),
    difficulty: 1,
    points: 10,
    competency: "synergies",
  },
  {
    id: "N6-024",
    level: 6,
    module: "L6-04",
    kind: "numeric",
    flavor: "case",
    prompt: t(
      "Un fondo invirtió $250,000,000 de capital en un LBO y a la salida recibe $900,000,000. Calcula el MOIC en veces con 2 decimales.",
      "A fund invested $250,000,000 of equity in an LBO and receives $900,000,000 at exit. Compute the MOIC in times with 2 decimals."
    ),
    answer: 3.6,
    unit: "times",
    decimals: 2,
    tolerance: { abs: 0.01 },
    explanation: t(
      "MOIC = Capital a la salida ÷ Capital invertido = 900,000,000 ÷ 250,000,000 = 3.60x. Error común: calcular la ganancia (650,000,000 ÷ 250,000,000 = 2.6) en lugar del múltiplo total.",
      "MOIC = Exit equity ÷ Equity invested = 900,000,000 ÷ 250,000,000 = 3.60x. Common mistake: computing the gain (650,000,000 ÷ 250,000,000 = 2.6) instead of the total multiple."
    ),
    difficulty: 1,
    points: 10,
    competency: "lbo",
  },
  {
    id: "N6-025",
    level: 6,
    module: "L6-04",
    kind: "truefalse",
    flavor: "concept",
    prompt: t(
      "En una adquisición pagada 100 % con acciones y sin sinergias, si el P/E del comprador es mayor que el P/E que paga por el objetivo, la operación tiende a ser acretiva para la UPA del comprador.",
      "In an all-stock acquisition without synergies, if the acquirer's P/E is higher than the P/E paid for the target, the deal tends to be accretive to the acquirer's EPS."
    ),
    answer: true,
    explanation: t(
      "Verdadero. Un P/E alto significa que el comprador «paga» con acciones caras: emite pocas acciones por cada peso de utilidad que adquiere, así que la UPA combinada sube. Si el P/E pagado supera al del comprador, la operación es dilutiva.",
      "True. A high P/E means the acquirer «pays» with expensive stock: it issues few shares per peso of earnings acquired, so combined EPS rises. If the P/E paid exceeds the acquirer's, the deal is dilutive."
    ),
    difficulty: 2,
    points: 15,
    competency: "accretion-dilution",
  },
  {
    id: "N6-026",
    level: 6,
    module: "L6-04",
    kind: "fields",
    flavor: "case",
    context: t(
      "Comprador: utilidad neta $100,000,000; 50,000,000 de acciones; precio $40. Objetivo: utilidad neta $20,000,000. El comprador paga $500,000,000, 100 % con acciones nuevas emitidas a $40. Sin sinergias.",
      "Acquirer: net income $100,000,000; 50,000,000 shares; price $40. Target: net income $20,000,000. The acquirer pays $500,000,000, entirely in new shares issued at $40. No synergies."
    ),
    prompt: t(
      "Calcula: acciones nuevas emitidas, UPA pro forma (pesos con 2 decimales) y el cambio en UPA en % (negativo si es dilución).",
      "Compute: new shares issued, pro forma EPS (pesos with 2 decimals) and the change in EPS in % (negative if dilution)."
    ),
    fields: [
      { id: "f1", label: t("Acciones nuevas emitidas", "New shares issued"), answer: 12500000, unit: "units", tolerance: { abs: 0.5 } },
      { id: "f2", label: t("UPA pro forma", "Pro forma EPS"), answer: 1.92, unit: "MXN", tolerance: { abs: 0.005 } },
      { id: "f3", label: t("Cambio en UPA (%)", "Change in EPS (%)"), answer: -4, unit: "%", tolerance: { abs: 0.05 } },
    ],
    explanation: t(
      "Acciones nuevas = 500,000,000 ÷ 40 = 12,500,000. UPA actual = 100,000,000 ÷ 50,000,000 = $2.00. UPA pro forma = 120,000,000 ÷ 62,500,000 = $1.92. Cambio = 1.92 ÷ 2.00 − 1 = −4 % (dilutiva). Consistente con la regla: P/E del comprador 20x (40 ÷ 2) < P/E pagado 25x (500 ÷ 20).",
      "New shares = 500,000,000 ÷ 40 = 12,500,000. Current EPS = 100,000,000 ÷ 50,000,000 = $2.00. Pro forma EPS = 120,000,000 ÷ 62,500,000 = $1.92. Change = 1.92 ÷ 2.00 − 1 = −4 % (dilutive). Consistent with the rule: acquirer P/E 20x (40 ÷ 2) < P/E paid 25x (500 ÷ 20)."
    ),
    difficulty: 2,
    points: 15,
    competency: "accretion-dilution",
  },
  {
    id: "N6-027",
    level: 6,
    module: "L6-04",
    kind: "multi",
    flavor: "concept",
    prompt: t(
      "¿Qué características hacen a una empresa buena candidata para un LBO? Selecciona todas las que apliquen.",
      "Which characteristics make a company a good LBO candidate? Select all that apply."
    ),
    options: [
      { id: "N6-027-a", text: t("Flujos de efectivo estables y predecibles", "Stable, predictable cash flows") },
      { id: "N6-027-b", text: t("Ventas muy cíclicas y volátiles", "Highly cyclical, volatile sales") },
      { id: "N6-027-c", text: t("Necesidades de CapEx bajas", "Low CapEx needs") },
      { id: "N6-027-d", text: t("Poca deuda existente antes de la compra", "Little existing debt before the deal") },
      { id: "N6-027-e", text: t("Necesidad de grandes inversiones continuas en investigación sin ingresos asegurados", "Need for large ongoing research spending with no assured revenue") },
    ],
    correctOptionIds: ["N6-027-a", "N6-027-c", "N6-027-d"],
    explanation: t(
      "Un LBO necesita flujos para pagar la deuda: estabilidad, bajo CapEx y capacidad de endeudamiento disponible (poca deuda previa). Ventas volátiles o inversiones grandes e inciertas ponen en riesgo el servicio de la deuda.",
      "An LBO needs cash flows to service debt: stability, low CapEx and available debt capacity (little prior debt). Volatile sales or large, uncertain investments put debt service at risk."
    ),
    difficulty: 2,
    points: 15,
    competency: "lbo",
  },
  {
    id: "N6-028",
    level: 6,
    module: "L6-04",
    kind: "numeric",
    flavor: "interpret",
    prompt: t(
      "Un LBO logra un MOIC de 2.5x en 5 años, sin flujos intermedios para el fondo. Calcula la TIR anual en % con 2 decimales.",
      "An LBO achieves a 2.5x MOIC in 5 years, with no interim cash flows to the fund. Compute the annual IRR in % with 2 decimals."
    ),
    answer: 20.11,
    unit: "%",
    decimals: 2,
    tolerance: { abs: 0.02 },
    explanation: t(
      "TIR = MOIC^(1/n) − 1 = 2.5^(1/5) − 1 = 1.2011 − 1 = 20.11 %. Error común: dividir la ganancia entre los años (150 % ÷ 5 = 30 %), que ignora la capitalización compuesta.",
      "IRR = MOIC^(1/n) − 1 = 2.5^(1/5) − 1 = 1.2011 − 1 = 20.11 %. Common mistake: dividing the gain by the years (150 % ÷ 5 = 30 %), which ignores compounding."
    ),
    difficulty: 3,
    points: 20,
    competency: "lbo",
  },
  {
    id: "N6-029",
    level: 6,
    module: "L6-04",
    kind: "fields",
    flavor: "case",
    context: t(
      "Un fondo compra una empresa con EBITDA de $125,000,000 a 8x. Financia 60 % del precio con deuda y el resto con capital. En el año 5 el EBITDA es $180,000,000, se vende a 8x y la deuda remanente es $340,000,000. Cifras en millones de pesos.",
      "A fund buys a company with EBITDA of $125,000,000 at 8x. It finances 60 % of the price with debt and the rest with equity. In year 5 EBITDA is $180,000,000, it sells at 8x and remaining debt is $340,000,000. Figures in millions of pesos."
    ),
    prompt: t(
      "Calcula el capital invertido y el capital a la salida (en millones de pesos) y el MOIC (en veces, 2 decimales).",
      "Compute equity invested and exit equity (in millions of pesos) and the MOIC (in times, 2 decimals)."
    ),
    fields: [
      { id: "f1", label: t("Capital invertido (millones)", "Equity invested (millions)"), answer: 400, unit: "MXN", tolerance: { abs: 0.5 } },
      { id: "f2", label: t("Capital a la salida (millones)", "Exit equity (millions)"), answer: 1100, unit: "MXN", tolerance: { abs: 0.5 } },
      { id: "f3", label: t("MOIC (veces)", "MOIC (times)"), answer: 2.75, unit: "times", tolerance: { abs: 0.01 } },
    ],
    explanation: t(
      "Precio de entrada = 8 × 125 = 1,000 millones; deuda 60 % = 600; capital = 400. EV de salida = 8 × 180 = 1,440; capital a la salida = 1,440 − 340 = 1,100. MOIC = 1,100 ÷ 400 = 2.75x (TIR ≈ 22.4 % a 5 años). Error común: olvidar restar la deuda remanente a la salida.",
      "Entry price = 8 × 125 = 1,000 million; debt 60 % = 600; equity = 400. Exit EV = 8 × 180 = 1,440; exit equity = 1,440 − 340 = 1,100. MOIC = 1,100 ÷ 400 = 2.75x (IRR ≈ 22.4 % over 5 years). Common mistake: forgetting to subtract remaining debt at exit."
    ),
    difficulty: 3,
    points: 20,
    competency: "lbo",
  },
  // ═════════════════════════════ L6-05 ═════════════════════════════
  {
    id: "N6-030",
    level: 6,
    module: "L6-05",
    kind: "formula",
    flavor: "concept",
    prompt: t("Completa la fórmula del precio de un bono con cupón fijo.", "Complete the price formula for a fixed-coupon bond."),
    template: "P = Σ {{b1}} ÷ {{b2}} + {{b3}} ÷ (1 + y)^n",
    blanks: [
      {
        id: "b1",
        options: [
          { id: "N6-030-b1-a", text: t("C (cupón)", "C (coupon)") },
          { id: "N6-030-b1-b", text: t("y (rendimiento)", "y (yield)") },
          { id: "N6-030-b1-c", text: t("VN × n", "FV × n") },
        ],
        correctOptionId: "N6-030-b1-a",
      },
      {
        id: "b2",
        options: [
          { id: "N6-030-b2-a", text: t("(1 + y) × t", "(1 + y) × t") },
          { id: "N6-030-b2-b", text: t("(1 + y)^t", "(1 + y)^t") },
          { id: "N6-030-b2-c", text: t("(1 + tasa cupón)^t", "(1 + coupon rate)^t") },
        ],
        correctOptionId: "N6-030-b2-b",
      },
      {
        id: "b3",
        options: [
          { id: "N6-030-b3-a", text: t("Precio de compra", "Purchase price") },
          { id: "N6-030-b3-b", text: t("Último cupón", "Last coupon") },
          { id: "N6-030-b3-c", text: t("VN (valor nominal)", "FV (face value)") },
          { id: "N6-030-b3-d", text: t("Prima", "Premium") },
        ],
        correctOptionId: "N6-030-b3-c",
      },
    ],
    explanation: t(
      "Cada cupón C se descuenta a (1 + y)^t y el valor nominal se descuenta a (1 + y)^n. Se descuenta al rendimiento de mercado y, no a la tasa cupón; ese es el error más frecuente.",
      "Each coupon C is discounted at (1 + y)^t and the face value at (1 + y)^n. Discount at the market yield y, not at the coupon rate; that is the most frequent mistake."
    ),
    difficulty: 1,
    points: 10,
    competency: "bond-pricing",
  },
  {
    id: "N6-031",
    level: 6,
    module: "L6-05",
    kind: "truefalse",
    flavor: "concept",
    prompt: t(
      "Cuando la tasa cupón de un bono es igual a su rendimiento al vencimiento, el bono cotiza a la par (precio = valor nominal).",
      "When a bond's coupon rate equals its yield to maturity, the bond trades at par (price = face value)."
    ),
    answer: true,
    explanation: t(
      "Verdadero. Si los cupones pagan exactamente lo que exige el mercado, el valor presente de los flujos es igual al nominal. Con cupón < YTM cotiza con descuento; con cupón > YTM, con prima.",
      "True. If the coupons pay exactly what the market requires, the present value of the flows equals face value. With coupon < YTM it trades at a discount; with coupon > YTM, at a premium."
    ),
    difficulty: 1,
    points: 10,
    competency: "bond-pricing",
  },
  {
    id: "N6-032",
    level: 6,
    module: "L6-05",
    kind: "numeric",
    flavor: "case",
    prompt: t(
      "Calcula el precio de un bono con valor nominal $1,000, cupón anual de 8 %, vencimiento en 3 años y rendimiento de mercado de 10 %. Responde en pesos con 2 decimales.",
      "Compute the price of a bond with $1,000 face value, 8 % annual coupon, 3-year maturity and 10 % market yield. Answer in pesos with 2 decimals."
    ),
    answer: 950.26,
    unit: "MXN",
    decimals: 2,
    tolerance: { abs: 0.05 },
    explanation: t(
      "Cupón = $80. P = 80 ÷ 1.1 + 80 ÷ 1.21 + 1,080 ÷ 1.331 = 72.73 + 66.12 + 811.42 = $950.26. Cotiza con descuento porque el cupón (8 %) es menor que el rendimiento (10 %). Error común: descontar al 8 % (daría $1,000).",
      "Coupon = $80. P = 80 ÷ 1.1 + 80 ÷ 1.21 + 1,080 ÷ 1.331 = 72.73 + 66.12 + 811.42 = $950.26. It trades at a discount because the coupon (8 %) is below the yield (10 %). Common mistake: discounting at 8 % (which gives $1,000)."
    ),
    difficulty: 2,
    points: 15,
    competency: "bond-pricing",
  },
  {
    id: "N6-033",
    level: 6,
    module: "L6-05",
    kind: "mcq",
    flavor: "interpret",
    prompt: t(
      "Tienes un bono a 10 años con cupón de 6 %. Las tasas de mercado para bonos similares suben de 6 % a 8 %. ¿Qué ocurre con su precio?",
      "You hold a 10-year bond with a 6 % coupon. Market rates for similar bonds rise from 6 % to 8 %. What happens to its price?"
    ),
    options: [
      { id: "N6-033-a", text: t("Sube por encima de la par porque el bono paga ahora menos que el mercado", "It rises above par because the bond now pays less than the market") },
      { id: "N6-033-b", text: t("No cambia, porque el cupón está fijo en el contrato", "It does not change, because the coupon is fixed by contract") },
      { id: "N6-033-c", text: t("Sube, porque el YTM es mayor", "It rises, because the YTM is higher") },
      { id: "N6-033-d", text: t("Baja por debajo de la par, porque su cupón de 6 % es menor que el 8 % que exige el mercado", "It falls below par, because its 6 % coupon is lower than the 8 % the market requires") },
    ],
    correctOptionId: "N6-033-d",
    explanation: t(
      "Precio y rendimiento se mueven en sentido inverso. Al subir la tasa exigida, los flujos fijos se descuentan más y el precio cae por debajo de la par. El cupón fijo es justamente la razón por la que el precio debe ajustarse.",
      "Price and yield move inversely. When the required rate rises, the fixed flows are discounted more heavily and the price falls below par. The fixed coupon is precisely why the price must adjust."
    ),
    difficulty: 1,
    points: 10,
    competency: "price-yield",
  },
  {
    id: "N6-034",
    level: 6,
    module: "L6-05",
    kind: "classify",
    flavor: "concept",
    prompt: t("Asigna cada característica al instrumento derivado que la describe mejor.", "Assign each feature to the derivative it best describes."),
    categories: [
      { id: "N6-034-c1", label: t("Forward", "Forward") },
      { id: "N6-034-c2", label: t("Futuro", "Future") },
      { id: "N6-034-c3", label: t("Opción", "Option") },
    ],
    items: [
      { id: "N6-034-i1", label: t("Contrato privado (OTC) con monto y fecha a la medida", "Private (OTC) contract with customized amount and date"), correctCategoryId: "N6-034-c1" },
      { id: "N6-034-i2", label: t("Liquidación diaria de pérdidas y ganancias con márgenes", "Daily settlement of gains and losses with margins"), correctCategoryId: "N6-034-c2" },
      { id: "N6-034-i3", label: t("El comprador paga una prima por un derecho, no una obligación", "The buyer pays a premium for a right, not an obligation"), correctCategoryId: "N6-034-c3" },
      { id: "N6-034-i4", label: t("Estandarizado y negociado en bolsa con cámara de compensación", "Standardized and exchange-traded with a clearinghouse"), correctCategoryId: "N6-034-c2" },
      { id: "N6-034-i5", label: t("Pérdida máxima del comprador limitada a lo pagado al inicio", "Buyer's maximum loss limited to the amount paid up front"), correctCategoryId: "N6-034-c3" },
      { id: "N6-034-i6", label: t("Mayor riesgo de contraparte al liquidarse solo al vencimiento", "Greater counterparty risk as it settles only at maturity"), correctCategoryId: "N6-034-c1" },
    ],
    explanation: t(
      "Forward: OTC, a la medida, se liquida al vencimiento (más riesgo de contraparte). Futuro: estandarizado, en bolsa, cámara de compensación y marcado a mercado diario. Opción: derecho sin obligación a cambio de una prima, que es la pérdida máxima del comprador.",
      "Forward: OTC, customized, settles at maturity (more counterparty risk). Future: standardized, exchange-traded, clearinghouse and daily marking to market. Option: a right without obligation in exchange for a premium, which is the buyer's maximum loss."
    ),
    difficulty: 2,
    points: 15,
    competency: "derivatives",
  },
  {
    id: "N6-035",
    level: 6,
    module: "L6-05",
    kind: "numeric",
    flavor: "case",
    prompt: t(
      "Una empresa toma un forward largo para comprar USD 100,000 a 18.50 MXN/USD. Al vencimiento, el tipo de cambio spot es 19.20 MXN/USD. ¿Cuál es el resultado del forward en pesos (positivo si es ganancia)?",
      "A company enters a long forward to buy USD 100,000 at 18.50 MXN/USD. At maturity the spot rate is 19.20 MXN/USD. What is the forward's result in pesos (positive if a gain)?"
    ),
    answer: 70000,
    unit: "MXN",
    decimals: 0,
    tolerance: { abs: 0.5 },
    explanation: t(
      "Pago largo = (S_T − F) × cantidad = (19.20 − 18.50) × 100,000 = 0.70 × 100,000 = $70,000. La empresa compra dólares 0.70 pesos más baratos que en el mercado. Error común: usar (F − S_T), que es el resultado de la posición corta.",
      "Long payoff = (S_T − F) × quantity = (19.20 − 18.50) × 100,000 = 0.70 × 100,000 = $70,000. The company buys dollars 0.70 pesos cheaper than the market. Common mistake: using (F − S_T), which is the short position's result."
    ),
    difficulty: 2,
    points: 15,
    competency: "derivatives",
  },
  {
    id: "N6-036",
    level: 6,
    module: "L6-05",
    kind: "fields",
    flavor: "case",
    context: t(
      "Un inversionista compra un call con precio de ejercicio $100 y prima $5, y un put con precio de ejercicio $100 y prima $4, sobre la misma acción. Al vencimiento la acción vale $120.",
      "An investor buys a call with a $100 strike and $5 premium, and a put with a $100 strike and $4 premium, on the same stock. At expiry the stock is worth $120."
    ),
    prompt: t("Calcula por acción, en pesos (las pérdidas con signo negativo).", "Compute per share, in pesos (losses with a negative sign)."),
    fields: [
      { id: "f1", label: t("Pago del call", "Call payoff"), answer: 20, unit: "MXN", tolerance: { abs: 0.01 } },
      { id: "f2", label: t("Utilidad del call", "Call profit"), answer: 15, unit: "MXN", tolerance: { abs: 0.01 } },
      { id: "f3", label: t("Pago del put", "Put payoff"), answer: 0, unit: "MXN", tolerance: { abs: 0.01 } },
      { id: "f4", label: t("Utilidad del put", "Put profit"), answer: -4, unit: "MXN", tolerance: { abs: 0.01 } },
    ],
    explanation: t(
      "Call: máx(120 − 100, 0) = 20; utilidad = 20 − 5 = 15. Put: máx(100 − 120, 0) = 0; no se ejerce y la utilidad es −4 (la prima). Error común: confundir pago con utilidad u olvidar que el put sin valor no genera pagos negativos más allá de la prima.",
      "Call: max(120 − 100, 0) = 20; profit = 20 − 5 = 15. Put: max(100 − 120, 0) = 0; it is not exercised and profit is −4 (the premium). Common mistake: confusing payoff with profit, or forgetting that a worthless put loses nothing beyond the premium."
    ),
    difficulty: 3,
    points: 20,
    competency: "options",
  },
  // ═════════════════════════════ L6-06 ═════════════════════════════
  {
    id: "N6-037",
    level: 6,
    module: "L6-06",
    kind: "numeric",
    flavor: "case",
    prompt: t(
      "Inviertes 60 % en el activo A (rendimiento esperado 12 %) y 40 % en el activo B (rendimiento esperado 7 %). Calcula el rendimiento esperado del portafolio en %, con 1 decimal.",
      "You invest 60 % in asset A (expected return 12 %) and 40 % in asset B (expected return 7 %). Compute the portfolio's expected return in %, with 1 decimal."
    ),
    answer: 10,
    unit: "%",
    decimals: 1,
    tolerance: { abs: 0.05 },
    explanation: t(
      "E(Rp) = 0.6 × 12 % + 0.4 × 7 % = 7.2 % + 2.8 % = 10.0 %. Error común: promediar sin ponderar ((12 + 7) ÷ 2 = 9.5 %).",
      "E(Rp) = 0.6 × 12 % + 0.4 × 7 % = 7.2 % + 2.8 % = 10.0 %. Common mistake: averaging without weights ((12 + 7) ÷ 2 = 9.5 %)."
    ),
    difficulty: 1,
    points: 10,
    competency: "portfolio-return",
  },
  {
    id: "N6-038",
    level: 6,
    module: "L6-06",
    kind: "multi",
    flavor: "concept",
    prompt: t(
      "¿Cuáles afirmaciones sobre la diversificación son correctas? Selecciona todas las que apliquen.",
      "Which statements about diversification are correct? Select all that apply."
    ),
    options: [
      { id: "N6-038-a", text: t("Reduce el riesgo no sistemático (específico de cada empresa)", "It reduces unsystematic (company-specific) risk") },
      { id: "N6-038-b", text: t("Con suficientes activos elimina todo el riesgo, incluido el de mercado", "With enough assets it eliminates all risk, including market risk") },
      { id: "N6-038-c", text: t("Su beneficio es mayor cuanto menor es la correlación entre los activos", "Its benefit is greater the lower the correlation between assets") },
      { id: "N6-038-d", text: t("Con correlación +1 se obtiene el máximo beneficio de diversificación", "With +1 correlation the maximum diversification benefit is obtained") },
      { id: "N6-038-e", text: t("No elimina el riesgo sistemático", "It does not eliminate systematic risk") },
    ],
    correctOptionIds: ["N6-038-a", "N6-038-c", "N6-038-e"],
    explanation: t(
      "La diversificación elimina riesgo específico, no el sistemático. El beneficio crece al bajar la correlación; con ρ = +1 no hay beneficio (el riesgo es el promedio ponderado).",
      "Diversification removes specific risk, not systematic risk. The benefit grows as correlation falls; with ρ = +1 there is no benefit (risk is the weighted average)."
    ),
    difficulty: 1,
    points: 10,
    competency: "diversification",
  },
  {
    id: "N6-039",
    level: 6,
    module: "L6-06",
    kind: "numeric",
    flavor: "case",
    context: t(
      "Portafolio: 60 % en A (σ = 20 %) y 40 % en B (σ = 10 %). Correlación entre A y B: 0.2.",
      "Portfolio: 60 % in A (σ = 20 %) and 40 % in B (σ = 10 %). Correlation between A and B: 0.2."
    ),
    prompt: t("Calcula la desviación estándar del portafolio en %, con 2 decimales.", "Compute the portfolio standard deviation in %, with 2 decimals."),
    answer: 13.39,
    unit: "%",
    decimals: 2,
    tolerance: { abs: 0.02 },
    explanation: t(
      "σp² = 0.36 × 0.04 + 0.16 × 0.01 + 2 × 0.6 × 0.4 × 0.2 × 0.20 × 0.10 = 0.0144 + 0.0016 + 0.00192 = 0.01792. σp = √0.01792 = 0.13387 = 13.39 %. Error común: promediar las σ (0.6 × 20 + 0.4 × 10 = 16 %), lo que solo es válido con ρ = 1.",
      "σp² = 0.36 × 0.04 + 0.16 × 0.01 + 2 × 0.6 × 0.4 × 0.2 × 0.20 × 0.10 = 0.0144 + 0.0016 + 0.00192 = 0.01792. σp = √0.01792 = 0.13387 = 13.39 %. Common mistake: averaging the σ's (0.6 × 20 + 0.4 × 10 = 16 %), which is only valid with ρ = 1."
    ),
    difficulty: 2,
    points: 15,
    competency: "portfolio-risk",
  },
  {
    id: "N6-040",
    level: 6,
    module: "L6-06",
    kind: "fields",
    flavor: "interpret",
    context: t(
      "Mismo portafolio: 60 % en A (σ = 20 %) y 40 % en B (σ = 10 %). Analiza dos correlaciones extremas.",
      "Same portfolio: 60 % in A (σ = 20 %) and 40 % in B (σ = 10 %). Analyze two extreme correlations."
    ),
    prompt: t("Calcula la desviación estándar del portafolio en % para cada caso.", "Compute the portfolio standard deviation in % for each case."),
    fields: [
      { id: "f1", label: t("σp con ρ = +1 (%)", "σp with ρ = +1 (%)"), answer: 16, unit: "%", tolerance: { abs: 0.05 } },
      { id: "f2", label: t("σp con ρ = −1 (%)", "σp with ρ = −1 (%)"), answer: 8, unit: "%", tolerance: { abs: 0.05 } },
    ],
    explanation: t(
      "Con ρ = +1: σp = 0.6 × 20 + 0.4 × 10 = 16 % (sin diversificación). Con ρ = −1: σp = |0.6 × 20 − 0.4 × 10| = |12 − 4| = 8 %. Con ρ = 0.2 el resultado (13.39 %) queda entre ambos: a menor correlación, menor riesgo.",
      "With ρ = +1: σp = 0.6 × 20 + 0.4 × 10 = 16 % (no diversification). With ρ = −1: σp = |0.6 × 20 − 0.4 × 10| = |12 − 4| = 8 %. With ρ = 0.2 the result (13.39 %) lies between them: lower correlation, lower risk."
    ),
    difficulty: 2,
    points: 15,
    competency: "diversification",
  },
  {
    id: "N6-041",
    level: 6,
    module: "L6-06",
    kind: "mcq",
    flavor: "interpret",
    context: t(
      "Tasa libre de riesgo: 4 %. Portafolio X: rendimiento esperado 10 %, σ 12 %. Portafolio Y: rendimiento esperado 13 %, σ 20 %.",
      "Risk-free rate: 4 %. Portfolio X: expected return 10 %, σ 12 %. Portfolio Y: expected return 13 %, σ 20 %."
    ),
    prompt: t("Según el índice de Sharpe, ¿qué portafolio ofrece mejor rendimiento ajustado por riesgo?", "According to the Sharpe ratio, which portfolio offers the better risk-adjusted return?"),
    options: [
      { id: "N6-041-a", text: t("Y, porque tiene mayor rendimiento esperado", "Y, because it has the higher expected return") },
      { id: "N6-041-b", text: t("X, con Sharpe de 0.50 contra 0.45 de Y", "X, with a Sharpe of 0.50 versus 0.45 for Y") },
      { id: "N6-041-c", text: t("Son equivalentes, ambos tienen Sharpe de 0.50", "They are equivalent; both have a Sharpe of 0.50") },
      { id: "N6-041-d", text: t("Y, con Sharpe de 0.65 contra 0.83 de X", "Y, with a Sharpe of 0.65 versus 0.83 for X") },
    ],
    correctOptionId: "N6-041-b",
    explanation: t(
      "Sharpe X = (10 − 4) ÷ 12 = 0.50; Sharpe Y = (13 − 4) ÷ 20 = 0.45. X da más exceso de rendimiento por unidad de riesgo. Elegir Y por su rendimiento ignora el riesgo; la opción d olvida restar la tasa libre de riesgo (10 ÷ 12 = 0.83; 13 ÷ 20 = 0.65).",
      "Sharpe X = (10 − 4) ÷ 12 = 0.50; Sharpe Y = (13 − 4) ÷ 20 = 0.45. X delivers more excess return per unit of risk. Choosing Y for its return ignores risk; option d forgets to subtract the risk-free rate (10 ÷ 12 = 0.83; 13 ÷ 20 = 0.65)."
    ),
    difficulty: 2,
    points: 15,
    competency: "risk-adjusted-return",
  },
  {
    id: "N6-042",
    level: 6,
    module: "L6-06",
    kind: "numeric",
    flavor: "case",
    prompt: t(
      "Un portafolio de $10,000,000 tiene volatilidad diaria de 1.2 %. Con el método paramétrico (media cero, z = 1.645), calcula el VaR de 1 día al 95 % en pesos.",
      "A $10,000,000 portfolio has 1.2 % daily volatility. Using the parametric method (zero mean, z = 1.645), compute the 1-day 95 % VaR in pesos."
    ),
    answer: 197400,
    unit: "MXN",
    decimals: 0,
    tolerance: { abs: 0.5 },
    explanation: t(
      "VaR = 10,000,000 × 0.012 × 1.645 = 120,000 × 1.645 = $197,400. Error común: usar z = 1.96 (que corresponde a un intervalo de dos colas al 95 %); el VaR es una cola, por eso z = 1.645.",
      "VaR = 10,000,000 × 0.012 × 1.645 = 120,000 × 1.645 = $197,400. Common mistake: using z = 1.96 (a two-tailed 95 % interval); VaR is one-tailed, hence z = 1.645."
    ),
    difficulty: 2,
    points: 15,
    competency: "var",
  },
  {
    id: "N6-043",
    level: 6,
    module: "L6-06",
    kind: "truefalse",
    flavor: "interpret",
    prompt: t(
      "Un VaR diario al 95 % de $197,400 significa que la pérdida máxima posible del portafolio en un día es $197,400.",
      "A 95 % daily VaR of $197,400 means the portfolio's maximum possible loss in one day is $197,400."
    ),
    answer: false,
    explanation: t(
      "Falso. Significa que en 95 % de los días se espera perder menos de $197,400; en el 5 % restante la pérdida puede ser mayor, incluso mucho mayor. El VaR no describe la magnitud de esas pérdidas extremas; para eso se usan el Expected Shortfall y las pruebas de estrés.",
      "False. It means that on 95 % of days losses are expected to be below $197,400; on the other 5 % the loss can be larger, even much larger. VaR does not describe the size of those extreme losses; Expected Shortfall and stress tests are used for that."
    ),
    difficulty: 2,
    points: 15,
    competency: "var",
  },
]
