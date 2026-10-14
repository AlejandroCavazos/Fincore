import type { Exercise, Lesson } from '../../../types'

/**
 * FINCORE — Temario v2.0, área Finanzas Corporativas (Avanzado, nivel 4):
 * FIN.13 Valuación de empresas · FIN.14 Modelación financiera · FIN.15 Fusiones y adquisiciones (M&A)
 * FIN.16 Finanzas internacionales · FIN.17 Reestructuración financiera.
 */

const t = (es: string, en: string) => ({ es, en })

const NOTE_VALUATION = t(
  "Contenido educativo. Las tasas de impuestos, de descuento y de crecimiento que aparecen aquí son ejemplos ilustrativos e hipotéticos. Una valuación real depende de datos de mercado y de la regulación aplicable (por ejemplo, reglas de información financiera y de valores en México), que cambian con el tiempo: verifica la versión vigente (2026).",
  "Educational content. The tax, discount and growth rates shown here are illustrative, hypothetical examples. A real valuation depends on market data and on applicable regulation (for example, financial reporting and securities rules in Mexico), which change over time: verify the current version (2026).",
)

const NOTE_MA = t(
  "Contenido educativo. En México, las concentraciones que superan ciertos umbrales deben notificarse a la autoridad de competencia económica antes de cerrarse, y las ofertas públicas sobre empresas listadas siguen la regulación del mercado de valores (Ley del Mercado de Valores y supervisión de la CNBV). Las autoridades, umbrales y procedimientos cambian: verifica la versión vigente (2026).",
  "Educational content. In Mexico, mergers above certain thresholds must be notified to the economic competition authority before closing, and public tender offers for listed companies follow securities regulation (Securities Market Law and CNBV supervision). Authorities, thresholds and procedures change: verify the current version (2026).",
)

const NOTE_FX = t(
  "Contenido educativo. El peso mexicano opera bajo un régimen de tipo de cambio flexible y el Banco de México publica tipos de cambio de referencia. Los tipos de cambio y tasas de interés de los ejemplos son hipotéticos; los valores reales cambian a diario. Verifica la información y las reglas vigentes (2026).",
  "Educational content. The Mexican peso operates under a flexible exchange-rate regime and Banco de México publishes reference exchange rates. The exchange and interest rates in the examples are hypothetical; real values change daily. Verify current information and rules (2026).",
)

const NOTE_RESTRUCTURING = t(
  "Contenido educativo. En México, la insolvencia de comerciantes se rige por la Ley de Concursos Mercantiles, con una etapa de conciliación y, si no hay acuerdo, una de quiebra; en Estados Unidos existe el Capítulo 11 del Código de Quiebras. El orden de pago real incluye créditos con trato especial (por ejemplo, laborales y fiscales) que aquí se simplifican. Las reglas cambian: verifica la versión vigente (2026).",
  "Educational content. In Mexico, merchant insolvency is governed by the Commercial Insolvency Law (Ley de Concursos Mercantiles), with a conciliation stage and, if no agreement is reached, a bankruptcy stage; in the United States there is Chapter 11 of the Bankruptcy Code. The real payment order includes claims with special treatment (for example, labor and tax claims) that are simplified here. Rules change: verify the current version (2026).",
)

export const lessons: Lesson[] = [
  // ───────────────────────────── FIN-13 ─────────────────────────────
  {
    id: 'FIN-13',
    level: 4,
    topicIds: ['FIN.13'],
    title: t("Valuación de empresas", "Business valuation"),
    summary: t(
      "Valuar una empresa es estimar cuánto vale hoy por el efectivo que generará en el futuro, con flujos descontados o comparándola con empresas parecidas.",
      "Valuing a business means estimating what it is worth today based on the cash it will generate in the future, using discounted cash flows or comparing it with similar companies.",
    ),
    minutes: 19,
    objectives: [
      t("Distinguir valor contable, valor de mercado y valor intrínseco, y el valor de la empresa (EV) del valor del capital.", "Distinguish book value, market value and intrinsic value, and enterprise value (EV) from equity value."),
      t("Calcular el flujo libre de efectivo de la empresa y el valor terminal con el modelo de crecimiento perpetuo.", "Compute free cash flow to the firm and terminal value with the perpetual growth model."),
      t("Estimar el valor de una empresa con un DCF y con múltiplos de comparables.", "Estimate a company's value with a DCF and with comparable-company multiples."),
      t("Pasar del valor de la empresa al valor por acción restando la deuda neta.", "Move from enterprise value to value per share by subtracting net debt."),
    ],
    theory: [
      {
        heading: t("¿Qué significa que una empresa \"valga\" algo?", "What does it mean for a company to be \"worth\" something?"),
        body: [
          t(
            "Imagina que quieres comprar la **taquería** de tu vecino. Él dice que vale $2 millones porque eso costaron el local, la plancha y las mesas. Tú piensas distinto: lo que te importa es **cuánto dinero te dejará** en los próximos años. Esa diferencia es el corazón de la valuación.",
            "Imagine you want to buy your neighbor's **taco shop**. He says it is worth $2 million because that is what the premises, the griddle and the tables cost. You think differently: what matters to you is **how much money it will leave you** in the coming years. That difference is the heart of valuation.",
          ),
          t(
            "Hay tres ideas de valor. El **valor contable** es lo que dicen los libros (activos menos pasivos). El **valor de mercado** es lo que hoy pagan otros, por ejemplo el precio de la acción en bolsa por el número de acciones. El **valor intrínseco** es lo que tú estimas que vale por el efectivo futuro que generará. Un buen analista busca el intrínseco y lo compara con el precio.",
            "There are three ideas of value. **Book value** is what the books say (assets minus liabilities). **Market value** is what others pay today, for example the share price on the exchange times the number of shares. **Intrinsic value** is what you estimate it is worth based on the future cash it will generate. A good analyst looks for intrinsic value and compares it with the price.",
          ),
          t(
            "Otra distinción clave: el **valor de la empresa** (EV, enterprise value) es lo que vale el negocio completo para todos los que lo financian, accionistas y acreedores. El **valor del capital** (equity value) es solo la parte de los accionistas. Se conectan con la **deuda neta**: deuda con costo menos efectivo.",
            "Another key distinction: **enterprise value** (EV) is what the whole business is worth to everyone who finances it, shareholders and lenders. **Equity value** is only the shareholders' part. They are linked by **net debt**: interest-bearing debt minus cash.",
          ),
          t(
            "Mini ejemplo: si una empresa vale $1,000 millones como negocio completo, debe $300 millones al banco y tiene $50 millones en caja, la deuda neta es $250 millones y a los accionistas les corresponden $750 millones.",
            "Mini example: if a company is worth $1,000 million as a whole business, owes the bank $300 million and has $50 million in cash, net debt is $250 million and $750 million belongs to the shareholders.",
          ),
        ],
        formulas: [
          {
            name: t("Del valor de la empresa (EV) al valor del capital", "From enterprise value (EV) to equity value"),
            expression: "Valor del capital = EV − Deuda neta;  Deuda neta = Deuda con costo − Efectivo",
            variables: [
              { symbol: "Valor del capital", meaning: t("Lo que vale la parte de los accionistas (dueños), en pesos.", "What the shareholders' (owners') part is worth, in pesos.") },
              { symbol: "EV", meaning: t("Valor de la empresa: lo que vale el negocio completo para dueños y acreedores, en pesos.", "Enterprise value: what the whole business is worth to owners and lenders, in pesos.") },
              { symbol: "Deuda neta", meaning: t("Lo que se debe a bancos y bonistas menos el efectivo que ya se tiene, en pesos.", "What is owed to banks and bondholders minus the cash already on hand, in pesos.") },
              { symbol: "Deuda con costo", meaning: t("Préstamos y bonos que cobran intereses (no incluye proveedores), en pesos.", "Loans and bonds that charge interest (suppliers not included), in pesos.") },
              { symbol: "Efectivo", meaning: t("Dinero en caja y bancos, en pesos.", "Cash on hand and in banks, in pesos.") },
            ],
            steps: [
              t("Calcula la deuda neta: deuda con costo − efectivo.", "Compute net debt: interest-bearing debt − cash."),
              t("Resta la deuda neta al EV: lo que queda es para los accionistas.", "Subtract net debt from EV: what is left belongs to the shareholders."),
            ],
            example: t(
              "EV $600 millones, deuda bancaria $200 millones y efectivo $50 millones. Deuda neta: 200 − 50 = $150 millones. Valor del capital: 600 − 150 = **$450 millones**.",
              "EV $600 million, bank debt $200 million and cash $50 million. Net debt: 200 − 50 = $150 million. Equity value: 600 − 150 = **$450 million**.",
            ),
            interpret: t(
              "Es como vender una casa con hipoteca: el precio de la casa es el EV, pero a ti te queda el precio menos lo que debes al banco.",
              "It is like selling a house with a mortgage: the house price is the EV, but you keep the price minus what you owe the bank.",
            ),
            mistake: t(
              "Restar la deuda bruta (sin quitar el efectivo) o tomar el EV como si fuera el valor de los accionistas.",
              "Subtracting gross debt (without taking out cash) or treating EV as if it were the shareholders' value.",
            ),
          },
          {
            name: t("Valor por acción", "Value per share"),
            expression: "Valor por acción = Valor del capital ÷ Número de acciones",
            variables: [
              { symbol: "Valor por acción", meaning: t("Lo que vale cada acción, en pesos.", "What each share is worth, in pesos.") },
              { symbol: "Valor del capital", meaning: t("Lo que vale la parte de los accionistas (EV − deuda neta), en pesos.", "What the shareholders' part is worth (EV − net debt), in pesos.") },
              { symbol: "Número de acciones", meaning: t("Cuántas acciones existen; usa las mismas unidades que el valor (millones con millones).", "How many shares exist; use the same units as the value (millions with millions).") },
            ],
            steps: [
              t("Obtén primero el valor del capital (ya sin deuda neta).", "First get equity value (net debt already removed)."),
              t("Divide entre el número de acciones, cuidando que ambos estén en millones.", "Divide by the number of shares, making sure both are in millions."),
            ],
            example: t(
              "Valor del capital $450 millones y 30 millones de acciones: 450 ÷ 30 = **$15 por acción**.",
              "Equity value $450 million and 30 million shares: 450 ÷ 30 = **$15 per share**.",
            ),
            mistake: t(
              "Dividir el EV entre las acciones sin restar antes la deuda neta; sobrevalúa la acción.",
              "Dividing EV by the shares without first subtracting net debt; it overvalues the share.",
            ),
          },
        ],
        bullets: [
          t("Valor contable: activos menos pasivos según los libros.", "Book value: assets minus liabilities per the books."),
          t("Valor de mercado: precio por acción × número de acciones.", "Market value: share price × number of shares."),
          t("Valor intrínseco: valor presente del efectivo futuro.", "Intrinsic value: present value of future cash."),
          t("EV: el negocio completo; valor del capital: solo los accionistas.", "EV: the whole business; equity value: shareholders only."),
        ],
      },
      {
        heading: t("Flujos descontados (DCF) y valor terminal", "Discounted cash flows (DCF) and terminal value"),
        body: [
          t(
            "En palabras sencillas: un DCF suma todo el dinero que el negocio te dará en el futuro, pero antes \"lo encoge\" a valor de hoy, porque un peso que recibirás en 5 años vale menos que un peso en tu mano hoy (no lo puedes usar ni invertir mientras tanto, y hay riesgo de que no llegue). A ese \"encoger\" se le llama **descontar**.",
            "In plain words: a DCF adds up all the money the business will give you in the future, but first \"shrinks\" it to today's value, because a peso you will receive in 5 years is worth less than a peso in your hand today (you cannot use or invest it meanwhile, and it might not arrive). That \"shrinking\" is called **discounting**.",
          ),
          t(
            "El método de **flujos de efectivo descontados** (DCF) proyecta el efectivo que generará la empresa y lo trae a valor de hoy con el **WACC** (el costo promedio de financiarse, que viste en su propia materia). El flujo que se usa es el **flujo libre de efectivo de la empresa** (FCFF): lo que queda después de pagar impuestos operativos e invertir en activos y capital de trabajo, disponible para accionistas y acreedores.",
            "The **discounted cash flow** (DCF) method projects the cash the company will generate and brings it to today's value with the **WACC** (the average cost of financing, which you saw in its own subject). The flow used is **free cash flow to the firm** (FCFF): what is left after paying operating taxes and investing in assets and working capital, available to shareholders and lenders.",
          ),
          t(
            "Nadie puede proyectar año por año para siempre. Por eso se proyectan unos 5 a 10 años con detalle y después se calcula un **valor terminal**: un solo número que resume todos los años siguientes. La forma más común es el **modelo de Gordon** o de crecimiento perpetuo, que supone que el flujo crece a una tasa constante **g** para siempre.",
            "No one can project year by year forever. So about 5 to 10 years are projected in detail and then a **terminal value** is computed: a single number summarizing all following years. The most common form is the **Gordon** or perpetual growth model, which assumes cash flow grows at a constant rate **g** forever.",
          ),
          t(
            "Regla de oro: **g debe ser menor que el WACC** y razonable a largo plazo (una empresa no puede crecer para siempre más que toda la economía). Ojo: el valor terminal suele ser la mayor parte del valor total, así que pequeños cambios en g o en el WACC mueven mucho el resultado.",
            "Golden rule: **g must be lower than the WACC** and reasonable in the long run (a company cannot grow faster than the whole economy forever). Watch out: terminal value is usually the largest part of total value, so small changes in g or the WACC move the result a lot.",
          ),
          t(
            "Mini ejemplo: si el flujo del último año proyectado es $100, g = 3 % y WACC = 10 %, el valor terminal es 100 × 1.03 / (0.10 − 0.03) = $1,471.43, valuado al final de ese último año.",
            "Mini example: if the last projected year's flow is $100, g = 3 % and WACC = 10 %, terminal value is 100 × 1.03 / (0.10 − 0.03) = $1,471.43, valued at the end of that last year.",
          ),
        ],
        formulas: [
          {
            name: t("Flujo libre de efectivo de la empresa (FCFF)", "Free cash flow to the firm (FCFF)"),
            expression: "FCFF = EBIT × (1 − t) + D&A − CapEx − ΔCT",
            variables: [
              { symbol: "FCFF", meaning: t("El efectivo que sobra en el año para dueños y acreedores, en pesos.", "The cash left over in the year for owners and lenders, in pesos.") },
              { symbol: "EBIT", meaning: t("Utilidad de operación: ventas menos costos y gastos de operación, antes de intereses e impuestos, en pesos.", "Operating profit: sales minus operating costs and expenses, before interest and taxes, in pesos.") },
              { symbol: "t", meaning: t("Tasa de impuestos, en decimal (30 % = 0.30; tasa ilustrativa).", "Tax rate, as a decimal (30% = 0.30; illustrative rate).") },
              { symbol: "D&A", meaning: t("Depreciación y amortización: gasto contable que no saca dinero de la caja, en pesos.", "Depreciation and amortization: an accounting expense that takes no money out of the till, in pesos.") },
              { symbol: "CapEx", meaning: t("Inversión en activos fijos (maquinaria, locales, equipo), en pesos.", "Investment in fixed assets (machinery, premises, equipment), in pesos.") },
              { symbol: "ΔCT", meaning: t("Aumento del capital de trabajo (más clientes por cobrar o más inventario), en pesos; si aumenta, consume efectivo.", "Increase in working capital (more receivables or more inventory), in pesos; if it rises, it uses up cash.") },
            ],
            steps: [
              t("Quita impuestos al EBIT: EBIT × (1 − t). Con 30 %: EBIT × 0.70.", "Take taxes off EBIT: EBIT × (1 − t). With 30%: EBIT × 0.70."),
              t("Suma la depreciación y amortización (no es salida de dinero).", "Add back depreciation and amortization (it is not a cash outflow)."),
              t("Resta el CapEx y el aumento de capital de trabajo.", "Subtract CapEx and the increase in working capital."),
            ],
            example: t(
              "EBIT 300, impuesto 30 %, D&A 50, CapEx 80 y aumento de capital de trabajo 20 (millones). 300 × 0.70 = 210; 210 + 50 = 260; 260 − 80 − 20 = **160 millones de FCFF**.",
              "EBIT 300, tax 30%, D&A 50, CapEx 80 and working capital increase 20 (millions). 300 × 0.70 = 210; 210 + 50 = 260; 260 − 80 − 20 = **160 million of FCFF**.",
            ),
            mistake: t(
              "Restar la depreciación en lugar de sumarla, o usar el EBIT sin quitarle impuestos.",
              "Subtracting depreciation instead of adding it back, or using EBIT without taking taxes off.",
            ),
          },
          {
            name: t("Valor terminal (modelo de Gordon)", "Terminal value (Gordon model)"),
            expression: "VT = FCF(n) × (1 + g) ÷ (WACC − g)",
            variables: [
              { symbol: "VT", meaning: t("Lo que valen, juntos, todos los años después del último año proyectado, medido al final de ese año, en pesos.", "What all the years after the last projected year are worth together, measured at the end of that year, in pesos.") },
              { symbol: "FCF(n)", meaning: t("El flujo libre del último año proyectado (año n), en pesos.", "The free cash flow of the last projected year (year n), in pesos.") },
              { symbol: "g", meaning: t("Crecimiento anual perpetuo del flujo, en decimal (3 % = 0.03); debe ser modesto.", "Perpetual annual growth of the flow, as a decimal (3% = 0.03); it must be modest.") },
              { symbol: "WACC", meaning: t("Costo promedio de financiarse, en decimal (10 % = 0.10); es la tasa de descuento.", "Average cost of financing, as a decimal (10% = 0.10); it is the discount rate.") },
            ],
            steps: [
              t("Convierte g y el WACC a decimales y revisa que g sea menor que el WACC.", "Convert g and WACC to decimals and check that g is lower than WACC."),
              t("Haz crecer un año el último flujo: FCF(n) × (1 + g).", "Grow the last flow by one year: FCF(n) × (1 + g)."),
              t("Calcula el denominador: WACC − g.", "Compute the denominator: WACC − g."),
              t("Divide el flujo crecido entre ese denominador.", "Divide the grown flow by that denominator."),
            ],
            example: t(
              "Último flujo $80 millones, g = 2 % y WACC = 9 %. 80 × 1.02 = 81.6; 0.09 − 0.02 = 0.07; 81.6 ÷ 0.07 = **$1,165.71 millones** al final del último año.",
              "Last flow $80 million, g = 2% and WACC = 9%. 80 × 1.02 = 81.6; 0.09 − 0.02 = 0.07; 81.6 ÷ 0.07 = **$1,165.71 million** at the end of the last year.",
            ),
            interpret: t(
              "El VT suele ser la mayor parte del valor, así que un pequeño cambio en g o en el WACC lo mueve mucho. Si g fuera igual o mayor que el WACC, el resultado no tendría sentido.",
              "TV is usually the largest part of value, so a small change in g or WACC moves it a lot. If g were equal to or higher than WACC, the result would make no sense.",
            ),
            mistake: t(
              "Olvidar multiplicar por (1 + g), o dividir entre el WACC completo en lugar de WACC − g.",
              "Forgetting to multiply by (1 + g), or dividing by the full WACC instead of WACC − g.",
            ),
          },
          {
            name: t("Valor de la empresa con DCF", "Enterprise value with a DCF"),
            expression: "EV = FCF₁ ÷ (1 + WACC)¹ + FCF₂ ÷ (1 + WACC)² + … + (FCFₙ + VT) ÷ (1 + WACC)ⁿ",
            variables: [
              { symbol: "EV", meaning: t("Valor de la empresa hoy, en pesos.", "Enterprise value today, in pesos.") },
              { symbol: "FCF₁, FCF₂ … FCFₙ", meaning: t("El flujo libre proyectado de cada año, en pesos.", "The projected free cash flow of each year, in pesos.") },
              { symbol: "VT", meaning: t("Valor terminal, que está medido al final del año n, en pesos.", "Terminal value, measured at the end of year n, in pesos.") },
              { symbol: "WACC", meaning: t("Tasa de descuento en decimal.", "Discount rate as a decimal.") },
              { symbol: "¹, ², ⁿ", meaning: t("El número de años que faltan para recibir ese flujo (exponente).", "The number of years until that flow is received (exponent).") },
            ],
            steps: [
              t("Divide cada flujo entre (1 + WACC) elevado al número de su año.", "Divide each flow by (1 + WACC) raised to its year number."),
              t("Divide también el valor terminal entre (1 + WACC) elevado al último año.", "Also divide the terminal value by (1 + WACC) raised to the last year."),
              t("Suma todos esos valores presentes: ese es el EV.", "Add up all those present values: that is the EV."),
              t("Si te piden el valor del capital, resta la deuda neta.", "If asked for equity value, subtract net debt."),
            ],
            example: t(
              "Flujos de $50 y $60 millones en los años 1 y 2, VT de $700 millones al final del año 2 y WACC 10 %. 50 ÷ 1.10 = 45.45; 60 ÷ 1.10² = 60 ÷ 1.21 = 49.59; 700 ÷ 1.21 = 578.51. EV = 45.45 + 49.59 + 578.51 = **$673.55 millones**.",
              "Flows of $50 and $60 million in years 1 and 2, TV of $700 million at the end of year 2 and WACC 10%. 50 ÷ 1.10 = 45.45; 60 ÷ 1.10² = 60 ÷ 1.21 = 49.59; 700 ÷ 1.21 = 578.51. EV = 45.45 + 49.59 + 578.51 = **$673.55 million**.",
            ),
            mistake: t(
              "Sumar el valor terminal sin descontarlo; está medido en el futuro y también hay que traerlo a hoy.",
              "Adding the terminal value without discounting it; it is measured in the future and must also be brought to today.",
            ),
          },
        ],
      },
      {
        heading: t("Valuación por múltiplos (comparables)", "Valuation by multiples (comparables)"),
        body: [
          t(
            "Cuando vendes un departamento, el agente mira cuánto se vendieron otros parecidos **por metro cuadrado**. La valuación por **múltiplos** hace lo mismo con empresas: busca negocios comparables (mismo giro, tamaño y riesgo) y aplica su razón precio/indicador a la empresa que valúas.",
            "When you sell an apartment, the agent looks at how much similar ones sold for **per square meter**. Valuation by **multiples** does the same with companies: it looks for comparable businesses (same industry, size and risk) and applies their price/metric ratio to the company being valued.",
          ),
          t(
            "Los más usados: **EV/EBITDA** (valor de la empresa entre utilidad antes de intereses, impuestos, depreciación y amortización), que da un EV y luego se resta la deuda neta; y **P/U** (precio entre utilidad por acción, en inglés P/E), que da directamente el valor del capital. Se pueden tomar de empresas listadas o de **transacciones precedentes** (compras recientes de empresas similares).",
            "The most used: **EV/EBITDA** (enterprise value over earnings before interest, taxes, depreciation and amortization), which gives an EV from which net debt is then subtracted; and **P/E** (price over earnings per share), which gives equity value directly. They can be taken from listed companies or from **precedent transactions** (recent purchases of similar companies).",
          ),
          t(
            "Los múltiplos son rápidos y reflejan el ánimo del mercado, pero copian también sus excesos. Por eso los analistas comparan el DCF con los múltiplos y presentan un **rango** de valor, no un número exacto.",
            "Multiples are fast and reflect market sentiment, but they also copy its excesses. That is why analysts compare the DCF with multiples and present a value **range**, not an exact number.",
          ),
          t(
            "Mini ejemplo: una cadena de farmacias tiene EBITDA de $40 millones y sus comparables cotizan a 8 veces EV/EBITDA. Su EV estimado es 40 × 8 = $320 millones.",
            "Mini example: a pharmacy chain has EBITDA of $40 million and its comparables trade at 8 times EV/EBITDA. Its estimated EV is 40 × 8 = $320 million.",
          ),
        ],
        formulas: [
          {
            name: t("Valor de la empresa con el múltiplo EV/EBITDA", "Enterprise value with the EV/EBITDA multiple"),
            expression: "EV = EBITDA × Múltiplo EV/EBITDA de comparables",
            variables: [
              { symbol: "EV", meaning: t("Valor estimado del negocio completo, en pesos.", "Estimated value of the whole business, in pesos.") },
              { symbol: "EBITDA", meaning: t("Utilidad antes de intereses, impuestos, depreciación y amortización de la empresa que valúas, en pesos.", "Earnings before interest, taxes, depreciation and amortization of the company being valued, in pesos.") },
              { symbol: "Múltiplo EV/EBITDA", meaning: t("Cuántas veces su EBITDA valen las empresas parecidas (por ejemplo, 8 veces).", "How many times their EBITDA similar companies are worth (for example, 8 times).") },
            ],
            steps: [
              t("Busca el múltiplo EV/EBITDA de empresas comparables.", "Find the EV/EBITDA multiple of comparable companies."),
              t("Multiplica el EBITDA de tu empresa por ese múltiplo: obtienes el EV.", "Multiply your company's EBITDA by that multiple: you get the EV."),
              t("Para llegar al capital, resta la deuda neta; para el valor por acción, divide entre las acciones.", "To reach equity, subtract net debt; for value per share, divide by the shares."),
            ],
            example: t(
              "EBITDA de $25 millones y comparables a 9 veces: 25 × 9 = **$225 millones de EV**. Si la deuda neta fuera $45 millones, el capital valdría 225 − 45 = $180 millones.",
              "EBITDA of $25 million and comparables at 9 times: 25 × 9 = **$225 million of EV**. If net debt were $45 million, equity would be worth 225 − 45 = $180 million.",
            ),
            mistake: t(
              "Tomar el resultado de EV/EBITDA como valor de los accionistas sin restar la deuda neta.",
              "Taking the EV/EBITDA result as the shareholders' value without subtracting net debt.",
            ),
          },
        ],
        bullets: [
          t("EV/EBITDA → valor de la empresa; resta deuda neta para llegar al capital.", "EV/EBITDA → enterprise value; subtract net debt to reach equity."),
          t("P/U (P/E) → valor del capital directamente.", "P/E → equity value directly."),
          t("Comparables listados o transacciones precedentes.", "Listed comparables or precedent transactions."),
          t("Usa varios métodos y presenta un rango.", "Use several methods and present a range."),
        ],
      },
    ],
    examples: [
      {
        title: t("DCF de tres años con valor terminal", "Three-year DCF with terminal value"),
        problem: t(
          "Una empresa hipotética proyecta FCFF de $100, $110 y $120 millones para los años 1 a 3. Después crecerá 4 % anual para siempre. Su WACC es 12 % y su deuda neta es $300 millones. ¿Cuánto vale su capital?",
          "A hypothetical company projects FCFF of $100, $110 and $120 million for years 1 to 3. Afterwards it will grow 4 % a year forever. Its WACC is 12 % and its net debt is $300 million. What is its equity worth?",
        ),
        steps: [
          t("Valor terminal al final del año 3: 120 × 1.04 / (0.12 − 0.04) = 124.8 / 0.08 = $1,560 millones.", "Terminal value at the end of year 3: 120 × 1.04 / (0.12 − 0.04) = 124.8 / 0.08 = $1,560 million."),
          t("Valor presente de los flujos: 100/1.12 = 89.29; 110/1.12² = 87.69; 120/1.12³ = 85.41. Suma = $262.39 millones.", "Present value of the flows: 100/1.12 = 89.29; 110/1.12² = 87.69; 120/1.12³ = 85.41. Sum = $262.39 million."),
          t("Valor presente del valor terminal: 1,560 / 1.12³ = 1,560 / 1.404928 = $1,110.38 millones.", "Present value of terminal value: 1,560 / 1.12³ = 1,560 / 1.404928 = $1,110.38 million."),
          t("EV = 262.39 + 1,110.38 = $1,372.77 millones.", "EV = 262.39 + 1,110.38 = $1,372.77 million."),
          t("Valor del capital = 1,372.77 − 300 = $1,072.77 millones.", "Equity value = 1,372.77 − 300 = $1,072.77 million."),
        ],
        result: t(
          "El capital vale unos $1,072.77 millones. Nota que el valor terminal aporta cerca del 81 % del EV: por eso hay que elegir g y WACC con cuidado.",
          "Equity is worth about $1,072.77 million. Note that terminal value contributes about 81 % of EV: that is why g and WACC must be chosen carefully.",
        ),
      },
      {
        title: t("Valor por acción con EV/EBITDA", "Value per share with EV/EBITDA"),
        problem: t(
          "Una cadena de gimnasios tiene EBITDA de $50 millones, deuda neta de $80 millones y 10 millones de acciones. Empresas comparables cotizan a 7 veces EV/EBITDA. ¿Cuál es el valor estimado por acción?",
          "A gym chain has EBITDA of $50 million, net debt of $80 million and 10 million shares. Comparable companies trade at 7 times EV/EBITDA. What is the estimated value per share?",
        ),
        steps: [
          t("EV = 50 × 7 = $350 millones.", "EV = 50 × 7 = $350 million."),
          t("Valor del capital = 350 − 80 = $270 millones.", "Equity value = 350 − 80 = $270 million."),
          t("Valor por acción = 270 / 10 = $27.", "Value per share = 270 / 10 = $27."),
        ],
        result: t(
          "Cada acción valdría unos $27. Error típico: dividir el EV entre las acciones sin restar la deuda neta, lo que daría $35 y sobrevaluaría la acción.",
          "Each share would be worth about $27. Typical mistake: dividing EV by the shares without subtracting net debt, which would give $35 and overvalue the share.",
        ),
      },
    ],
    keyPoints: [
      t("Valor contable, de mercado e intrínseco no son lo mismo; la valuación busca el intrínseco.", "Book, market and intrinsic value are not the same; valuation looks for intrinsic value."),
      t("EV es el negocio completo; valor del capital = EV − deuda neta.", "EV is the whole business; equity value = EV − net debt."),
      t("DCF: descuenta el FCFF con el WACC y agrega un valor terminal.", "DCF: discount FCFF at the WACC and add a terminal value."),
      t("En el modelo de Gordon, g debe ser menor que el WACC.", "In the Gordon model, g must be lower than the WACC."),
      t("Los múltiplos (EV/EBITDA, P/U) comparan con empresas parecidas; presenta siempre un rango.", "Multiples (EV/EBITDA, P/E) compare with similar companies; always present a range."),
    ],
    normativeNote: NOTE_VALUATION,
    exerciseIds: ['FIN-13-E1', 'FIN-13-E2', 'FIN-13-E3', 'FIN-13-E4', 'FIN-13-E5', 'FIN-13-E6'],
  },

  // ───────────────────────────── FIN-14 ─────────────────────────────
  {
    id: 'FIN-14',
    level: 4,
    topicIds: ['FIN.14'],
    title: t("Modelación financiera", "Financial modeling"),
    summary: t(
      "Un modelo financiero es una hoja de cálculo ordenada que, a partir de supuestos claros, proyecta los tres estados financieros conectados y permite probar escenarios.",
      "A financial model is an organized spreadsheet that, starting from clear assumptions, projects the three linked financial statements and lets you test scenarios.",
    ),
    minutes: 18,
    objectives: [
      t("Organizar un modelo en supuestos, cálculos y resultados siguiendo buenas prácticas.", "Organize a model into assumptions, calculations and outputs following good practices."),
      t("Proyectar estado de resultados y partidas de balance con generadores (drivers) como crecimiento, márgenes y días.", "Project the income statement and balance sheet items with drivers such as growth, margins and days."),
      t("Explicar cómo se conectan los tres estados financieros y cómo se comprueba que el balance cuadre.", "Explain how the three financial statements link and how to check that the balance sheet balances."),
      t("Usar escenarios y análisis de sensibilidad para medir el riesgo de una proyección.", "Use scenarios and sensitivity analysis to measure the risk of a projection."),
    ],
    theory: [
      {
        heading: t("Anatomía de un buen modelo", "Anatomy of a good model"),
        body: [
          t(
            "Un **modelo financiero** es como una receta de cocina en una hoja de cálculo: los **ingredientes** son los supuestos (cuánto crecerán las ventas, qué margen tendrás), el **procedimiento** son los cálculos y el **platillo** son los resultados (utilidad, flujo de efectivo, valor). Sirve para decidir: abrir una sucursal, pedir un crédito o valuar una empresa.",
            "A **financial model** is like a cooking recipe in a spreadsheet: the **ingredients** are the assumptions (how much sales will grow, what margin you will have), the **procedure** is the calculations and the **dish** is the outputs (profit, cash flow, value). It is used to decide: opening a branch, applying for a loan or valuing a company.",
          ),
          t(
            "La regla número uno: **separa los supuestos de los cálculos**. Todos los datos que tecleas a mano van en una sección de supuestos; las fórmulas solo hacen referencia a esas celdas. Si escribes un número fijo dentro de una fórmula (\"hardcode\"), nadie sabrá de dónde salió y al cambiar el supuesto el modelo quedará mal.",
            "Rule number one: **separate assumptions from calculations**. Every figure you type by hand goes into an assumptions section; formulas only reference those cells. If you type a fixed number inside a formula (a \"hardcode\"), no one will know where it came from and when the assumption changes the model will be wrong.",
          ),
          t(
            "Mini ejemplo: en lugar de escribir =B5*1.08 para proyectar ventas, escribe el 8 % en una celda de supuestos llamada \"Crecimiento de ventas\" y usa =B5*(1+$C$2). Si mañana el director pide probar 6 %, cambias una sola celda.",
            "Mini example: instead of typing =B5*1.08 to project sales, type 8 % in an assumptions cell called \"Sales growth\" and use =B5*(1+$C$2). If tomorrow the director asks to test 6 %, you change a single cell.",
          ),
        ],
        bullets: [
          t("Supuestos (inputs) en un solo lugar, bien etiquetados y con su fuente.", "Assumptions (inputs) in one place, clearly labeled and sourced."),
          t("Sin números fijos dentro de las fórmulas.", "No fixed numbers inside formulas."),
          t("Un código de colores: por ejemplo, azul para datos capturados y negro para fórmulas.", "A color code: for example, blue for typed inputs and black for formulas."),
          t("Flujo de izquierda a derecha y de arriba hacia abajo, con unidades claras.", "Flow left to right and top to bottom, with clear units."),
          t("Comprobaciones (checks) que avisen si algo no cuadra.", "Checks that warn you if something does not tie."),
        ],
      },
      {
        heading: t("Los tres estados conectados", "The three linked statements"),
        body: [
          t(
            "Un modelo completo proyecta el **estado de resultados**, el **balance general** y el **estado de flujos de efectivo**, y los conecta como engranes. Primero proyectas con **generadores** (drivers): ventas con una tasa de crecimiento, costos como **porcentaje de ventas** y cuentas de capital de trabajo con **días** (por ejemplo, cuántos días tardan en pagarte los clientes).",
            "A complete model projects the **income statement**, the **balance sheet** and the **cash flow statement**, and links them like gears. First you project with **drivers**: sales with a growth rate, costs as a **percentage of sales** and working capital accounts with **days** (for example, how many days customers take to pay you).",
          ),
          t(
            "Las conexiones clave: la **utilidad neta** del estado de resultados arranca el flujo de efectivo y se suma a las **utilidades retenidas** del balance (las ganancias que el negocio ha guardado en lugar de repartirlas), menos los **dividendos** (la parte de la utilidad que se reparte a los dueños). La **depreciación** se resta en resultados, se vuelve a sumar en el flujo (no es salida de dinero) y reduce el activo fijo. El **efectivo final** del flujo es el efectivo del balance.",
            "The key links: **net income** from the income statement starts the cash flow and is added to **retained earnings** on the balance sheet (the profits the business has kept instead of distributing them), minus **dividends** (the part of profit paid out to the owners). **Depreciation** is subtracted in the income statement, added back in the cash flow (it is not a cash outflow) and reduces fixed assets. The cash flow's **ending cash** is the balance sheet's cash.",
          ),
          t(
            "Al final, un **check** confirma que activos = pasivos + capital en cada año. Si da diferente de cero, hay un error de conexión. Mini ejemplo: si las ventas proyectadas son $3,650 y los clientes pagan a 30 días, las cuentas por cobrar serán 3,650 × 30 / 365 = $300.",
            "Finally, a **check** confirms that assets = liabilities + equity every year. If it is not zero, there is a linking error. Mini example: if projected sales are $3,650 and customers pay in 30 days, accounts receivable will be 3,650 × 30 / 365 = $300.",
          ),
        ],
        formulas: [
          {
            name: t("Proyectar ventas, utilidad de operación y utilidad neta", "Projecting sales, operating profit and net income"),
            expression: "Ventas proyectadas = Ventas actuales × (1 + Crecimiento);  EBIT = Ventas proyectadas × Margen bruto − Gastos de operación;  Utilidad neta = (EBIT − Intereses) × (1 − t)",
            variables: [
              { symbol: "Ventas actuales", meaning: t("Lo vendido en el año actual, en pesos.", "What was sold in the current year, in pesos.") },
              { symbol: "Crecimiento", meaning: t("Cuánto se espera que crezcan las ventas, en decimal (8 % = 0.08).", "How much sales are expected to grow, as a decimal (8% = 0.08).") },
              { symbol: "Margen bruto", meaning: t("Porcentaje de las ventas que queda después del costo de ventas, en decimal (40 % = 0.40).", "Percentage of sales left after cost of sales, as a decimal (40% = 0.40).") },
              { symbol: "Gastos de operación", meaning: t("Renta, sueldos de oficina, publicidad, etc., en pesos.", "Rent, office salaries, advertising, etc., in pesos.") },
              { symbol: "EBIT", meaning: t("Utilidad de operación, antes de intereses e impuestos, en pesos.", "Operating profit, before interest and taxes, in pesos.") },
              { symbol: "Intereses", meaning: t("Lo que se paga por la deuda en el año, en pesos (0 si no hay deuda).", "What is paid on debt in the year, in pesos (0 if there is no debt).") },
              { symbol: "t", meaning: t("Tasa de impuestos, en decimal (30 % = 0.30; tasa ilustrativa).", "Tax rate, as a decimal (30% = 0.30; illustrative rate).") },
            ],
            steps: [
              t("Proyecta las ventas: ventas actuales × (1 + crecimiento).", "Project sales: current sales × (1 + growth)."),
              t("Calcula la utilidad bruta: ventas proyectadas × margen bruto.", "Compute gross profit: projected sales × gross margin."),
              t("Resta los gastos de operación: obtienes el EBIT.", "Subtract operating expenses: you get EBIT."),
              t("Resta los intereses y quita impuestos: × (1 − t). El resultado es la utilidad neta.", "Subtract interest and take off taxes: × (1 − t). The result is net income."),
            ],
            example: t(
              "Ventas actuales 5,000, crecimiento 6 %, margen bruto 35 %, gastos de operación 1,000, intereses 55, impuesto 30 % (miles). Ventas: 5,000 × 1.06 = 5,300. Utilidad bruta: 5,300 × 0.35 = 1,855. EBIT: 1,855 − 1,000 = 855. Antes de impuestos: 855 − 55 = 800. Utilidad neta: 800 × 0.70 = **560 mil**.",
              "Current sales 5,000, growth 6%, gross margin 35%, operating expenses 1,000, interest 55, tax 30% (thousands). Sales: 5,000 × 1.06 = 5,300. Gross profit: 5,300 × 0.35 = 1,855. EBIT: 1,855 − 1,000 = 855. Before taxes: 855 − 55 = 800. Net income: 800 × 0.70 = **560 thousand**.",
            ),
            mistake: t(
              "Aplicar el margen a las ventas del año actual en lugar de a las proyectadas.",
              "Applying the margin to current-year sales instead of projected sales.",
            ),
          },
          {
            name: t("Cuentas por cobrar e inventario con días", "Receivables and inventory with days"),
            expression: "Cuentas por cobrar = Ventas × Días de cobro ÷ 365;  Inventario = Costo de ventas × Días de inventario ÷ 365",
            variables: [
              { symbol: "Cuentas por cobrar", meaning: t("Lo que los clientes te deben al cierre del año, en pesos.", "What customers owe you at year-end, in pesos.") },
              { symbol: "Ventas", meaning: t("Ventas (a crédito) proyectadas del año, en pesos.", "Projected (credit) sales for the year, in pesos.") },
              { symbol: "Días de cobro", meaning: t("Cuántos días tardan en promedio los clientes en pagarte.", "How many days customers take on average to pay you.") },
              { symbol: "Inventario", meaning: t("La mercancía en bodega al cierre, en pesos.", "The goods in the warehouse at year-end, in pesos.") },
              { symbol: "Costo de ventas", meaning: t("Lo que te costó la mercancía vendida en el año, en pesos.", "What the goods sold in the year cost you, in pesos.") },
              { symbol: "Días de inventario", meaning: t("Cuántos días dura la mercancía en bodega antes de venderse.", "How many days goods stay in the warehouse before being sold.") },
              { symbol: "365", meaning: t("Los días del año.", "The days in a year.") },
            ],
            steps: [
              t("Divide las ventas entre 365 para saber cuánto vendes en un día.", "Divide sales by 365 to know how much you sell in a day."),
              t("Multiplica por los días de cobro: eso es lo que los clientes todavía te deben.", "Multiply by the collection days: that is what customers still owe you."),
              t("Para inventario, haz lo mismo pero con el costo de ventas y los días de inventario.", "For inventory, do the same but with cost of sales and inventory days."),
            ],
            example: t(
              "Ventas 7,300 y cobras a 25 días: 7,300 ÷ 365 = 20 por día; 20 × 25 = **500 de cuentas por cobrar**. Costo de ventas 4,380 y 50 días de inventario: 4,380 ÷ 365 = 12; 12 × 50 = **600 de inventario**.",
              "Sales 7,300 and you collect in 25 days: 7,300 ÷ 365 = 20 per day; 20 × 25 = **500 of receivables**. Cost of sales 4,380 and 50 inventory days: 4,380 ÷ 365 = 12; 12 × 50 = **600 of inventory**.",
            ),
            interpret: t(
              "Más días = más dinero atorado en clientes o en bodega y menos efectivo disponible.",
              "More days = more money tied up in customers or in the warehouse and less cash available.",
            ),
            mistake: t(
              "Dividir entre 12 (meses) en lugar de 365, o calcular el inventario sobre las ventas en vez del costo de ventas.",
              "Dividing by 12 (months) instead of 365, or computing inventory on sales instead of cost of sales.",
            ),
          },
          {
            name: t("Utilidades retenidas al final del año", "Retained earnings at year-end"),
            expression: "Utilidades retenidas finales = Utilidades retenidas iniciales + Utilidad neta − Dividendos;  Dividendos = Utilidad neta × % de reparto",
            variables: [
              { symbol: "Utilidades retenidas iniciales", meaning: t("Las ganancias acumuladas que había al inicio del año, en pesos.", "The accumulated profits at the start of the year, in pesos.") },
              { symbol: "Utilidad neta", meaning: t("La ganancia del año, en pesos.", "The year's profit, in pesos.") },
              { symbol: "Dividendos", meaning: t("La parte de la utilidad que se reparte a los dueños, en pesos.", "The part of profit paid out to owners, in pesos.") },
              { symbol: "% de reparto", meaning: t("Qué porcentaje de la utilidad se reparte, en decimal (40 % = 0.40).", "What percentage of profit is paid out, as a decimal (40% = 0.40).") },
            ],
            steps: [
              t("Si te dan un porcentaje, calcula los dividendos: utilidad neta × % de reparto.", "If you are given a percentage, compute dividends: net income × payout %."),
              t("Suma la utilidad neta a las utilidades retenidas iniciales.", "Add net income to opening retained earnings."),
              t("Resta los dividendos.", "Subtract dividends."),
            ],
            example: t(
              "Iniciales 900, utilidad neta 250 y se reparte 30 % (miles). Dividendos: 250 × 0.30 = 75. Finales: 900 + 250 − 75 = **1,075 mil**.",
              "Opening 900, net income 250 and 30% is paid out (thousands). Dividends: 250 × 0.30 = 75. Ending: 900 + 250 − 75 = **1,075 thousand**.",
            ),
            mistake: t(
              "Aplicar el porcentaje de reparto a las utilidades retenidas totales en lugar de a la utilidad del año, o tratar los dividendos como un gasto.",
              "Applying the payout percentage to total retained earnings instead of the year's profit, or treating dividends as an expense.",
            ),
          },
        ],
      },
      {
        heading: t("Escenarios y sensibilidad", "Scenarios and sensitivity"),
        body: [
          t(
            "Un modelo con un solo resultado da una falsa sensación de certeza. Por eso se arman **escenarios**: base (lo más probable), optimista y pesimista, cada uno con su propio juego de supuestos. Así el director ve no solo cuánto se espera ganar, sino cuánto se podría perder.",
            "A model with a single result gives a false sense of certainty. That is why **scenarios** are built: base (most likely), optimistic and pessimistic, each with its own set of assumptions. That way the director sees not only how much is expected to be earned, but how much could be lost.",
          ),
          t(
            "El **análisis de sensibilidad** cambia **una variable a la vez** (o dos, en una tabla de doble entrada) manteniendo las demás fijas, para ver cuál mueve más el resultado. Si una variación pequeña en el precio cambia mucho la utilidad, el precio es un supuesto crítico que conviene investigar más.",
            "**Sensitivity analysis** changes **one variable at a time** (or two, in a two-way table) while holding the others fixed, to see which one moves the result most. If a small change in price changes profit a lot, price is a critical assumption worth researching further.",
          ),
          t(
            "Cuidado con las **referencias circulares**: los intereses dependen de la deuda, la deuda depende del efectivo y el efectivo depende de los intereses. Se resuelven calculando intereses sobre el saldo inicial o con un interruptor (switch) controlado. Mini ejemplo: si con ventas 5 % menores la utilidad cae 20 %, el negocio es muy sensible al volumen.",
            "Beware of **circular references**: interest depends on debt, debt depends on cash and cash depends on interest. They are solved by computing interest on the opening balance or with a controlled switch. Mini example: if with 5 % lower sales profit drops 20 %, the business is very sensitive to volume.",
          ),
        ],
        bullets: [
          t("Escenario: cambia varios supuestos juntos con una historia coherente.", "Scenario: changes several assumptions together with a coherent story."),
          t("Sensibilidad: cambia una o dos variables y deja fijas las demás.", "Sensitivity: changes one or two variables and holds the rest fixed."),
          t("Identifica los supuestos críticos y documenta de dónde salen.", "Identify critical assumptions and document their source."),
        ],
      },
    ],
    examples: [
      {
        title: t("Proyectar el estado de resultados y las utilidades retenidas", "Projecting the income statement and retained earnings"),
        problem: t(
          "Una distribuidora vendió $1,000 (miles) este año. Supuestos: ventas +10 %, costo de ventas 60 % de ventas, gastos de operación $200, intereses $20, impuesto 30 % (ilustrativo), dividendos $50. Utilidades retenidas iniciales: $500. Proyecta la utilidad neta y las utilidades retenidas finales.",
          "A distributor sold $1,000 (thousands) this year. Assumptions: sales +10 %, cost of sales 60 % of sales, operating expenses $200, interest $20, tax 30 % (illustrative), dividends $50. Opening retained earnings: $500. Project net income and ending retained earnings.",
        ),
        steps: [
          t("Ventas: 1,000 × 1.10 = $1,100.", "Sales: 1,000 × 1.10 = $1,100."),
          t("Costo de ventas: 1,100 × 0.60 = $660; utilidad bruta = $440.", "Cost of sales: 1,100 × 0.60 = $660; gross profit = $440."),
          t("Utilidad de operación: 440 − 200 = $240; antes de impuestos: 240 − 20 = $220.", "Operating profit: 440 − 200 = $240; before taxes: 240 − 20 = $220."),
          t("Impuesto: 220 × 0.30 = $66; utilidad neta = $154.", "Tax: 220 × 0.30 = $66; net income = $154."),
          t("Utilidades retenidas finales: 500 + 154 − 50 = $604.", "Ending retained earnings: 500 + 154 − 50 = $604."),
        ],
        result: t(
          "Utilidad neta $154 y utilidades retenidas $604: así se conecta el estado de resultados con el balance.",
          "Net income $154 and retained earnings $604: this is how the income statement links to the balance sheet.",
        ),
      },
      {
        title: t("Capital de trabajo con días", "Working capital with days"),
        problem: t(
          "Con ventas proyectadas de $1,100 y costo de ventas de $660 (miles), los clientes pagan en 45 días y el inventario dura 60 días sobre el costo de ventas. Proyecta cuentas por cobrar e inventario (año de 365 días).",
          "With projected sales of $1,100 and cost of sales of $660 (thousands), customers pay in 45 days and inventory lasts 60 days of cost of sales. Project accounts receivable and inventory (365-day year).",
        ),
        steps: [
          t("Cuentas por cobrar = 1,100 × 45 / 365 = $135.62.", "Accounts receivable = 1,100 × 45 / 365 = $135.62."),
          t("Inventario = 660 × 60 / 365 = $108.49.", "Inventory = 660 × 60 / 365 = $108.49."),
          t("Observa que el inventario se calcula sobre el costo de ventas, no sobre las ventas.", "Note that inventory is computed on cost of sales, not on sales."),
        ],
        result: t(
          "Cuentas por cobrar ≈ $135.62 e inventario ≈ $108.49. Si los días suben, se atora más efectivo en el negocio y el flujo baja.",
          "Accounts receivable ≈ $135.62 and inventory ≈ $108.49. If days go up, more cash gets tied up in the business and cash flow falls.",
        ),
      },
    ],
    keyPoints: [
      t("Separa supuestos, cálculos y resultados; evita números fijos dentro de fórmulas.", "Separate assumptions, calculations and outputs; avoid fixed numbers inside formulas."),
      t("Proyecta con generadores: crecimiento, porcentaje de ventas y días.", "Project with drivers: growth, percentage of sales and days."),
      t("La utilidad neta alimenta las utilidades retenidas; el efectivo final del flujo es el del balance.", "Net income feeds retained earnings; the cash flow's ending cash is the balance sheet's cash."),
      t("Un check de balance en cero confirma que el modelo está bien conectado.", "A balance check at zero confirms the model is properly linked."),
      t("Escenarios y sensibilidad muestran qué supuestos son críticos.", "Scenarios and sensitivity show which assumptions are critical."),
    ],
    exerciseIds: ['FIN-14-E1', 'FIN-14-E2', 'FIN-14-E3', 'FIN-14-E4', 'FIN-14-E5', 'FIN-14-E6'],
  },

  // ───────────────────────────── FIN-15 ─────────────────────────────
  {
    id: 'FIN-15',
    level: 4,
    topicIds: ['FIN.15'],
    title: t("Fusiones y adquisiciones (M&A)", "Mergers and acquisitions (M&A)"),
    summary: t(
      "Una fusión o adquisición crea valor solo si las sinergias superan la prima pagada; el tipo de operación, el precio y la forma de pago deciden quién se queda con ese valor.",
      "A merger or acquisition creates value only if synergies exceed the premium paid; the type of deal, the price and the form of payment decide who keeps that value.",
    ),
    minutes: 18,
    objectives: [
      t("Distinguir fusión de adquisición y clasificar operaciones en horizontales, verticales y de conglomerado.", "Distinguish a merger from an acquisition and classify deals as horizontal, vertical and conglomerate."),
      t("Calcular la prima de control y el valor neto que obtiene el comprador considerando sinergias.", "Compute the control premium and the net value the buyer obtains considering synergies."),
      t("Evaluar si una compra pagada con acciones aumenta o diluye la utilidad por acción.", "Assess whether a stock-paid acquisition increases or dilutes earnings per share."),
      t("Describir las etapas del proceso, incluida la debida diligencia.", "Describe the stages of the process, including due diligence."),
    ],
    theory: [
      {
        heading: t("Tipos de operaciones", "Types of deals"),
        body: [
          t(
            "En una **adquisición**, una empresa (la **compradora**) toma el control de otra (la **objetivo**) comprando sus acciones o sus activos; la objetivo puede seguir existiendo como subsidiaria. En una **fusión**, dos empresas se unen y al menos una deja de existir legalmente porque se integra en la otra o en una nueva.",
            "In an **acquisition**, one company (the **acquirer**) takes control of another (the **target**) by buying its shares or its assets; the target may keep existing as a subsidiary. In a **merger**, two companies combine and at least one ceases to exist legally because it is absorbed into the other or into a new one.",
          ),
          t(
            "Según la relación entre los negocios: **horizontal** cuando compiten en lo mismo (dos cadenas de cines), **vertical** cuando una es proveedora o cliente de la otra (una cervecera compra una fábrica de latas) y de **conglomerado** cuando no tienen relación (una cementera compra hoteles).",
            "By the relationship between the businesses: **horizontal** when they compete in the same thing (two cinema chains), **vertical** when one is a supplier or customer of the other (a brewery buys a can factory) and **conglomerate** when they are unrelated (a cement company buys hotels).",
          ),
          t(
            "También importa el **tono**: una operación **amistosa** se negocia con el consejo de la objetivo; una **hostil** se dirige directo a los accionistas, por ejemplo con una oferta pública de compra. Mini ejemplo: si una cadena de farmacias compra a otra cadena de farmacias rival con acuerdo de su consejo, es una adquisición horizontal y amistosa.",
            "The **tone** also matters: a **friendly** deal is negotiated with the target's board; a **hostile** one goes straight to shareholders, for example with a public tender offer. Mini example: if a pharmacy chain buys a rival pharmacy chain with its board's agreement, it is a horizontal, friendly acquisition.",
          ),
        ],
        bullets: [
          t("Horizontal: mismo giro; busca escala y participación de mercado.", "Horizontal: same industry; seeks scale and market share."),
          t("Vertical: proveedor o cliente; busca controlar la cadena de suministro.", "Vertical: supplier or customer; seeks to control the supply chain."),
          t("Conglomerado: giros sin relación; busca diversificar.", "Conglomerate: unrelated industries; seeks diversification."),
          t("Compra de acciones (te quedas con todo, incluidas deudas ocultas) o de activos (eliges qué compras).", "Share purchase (you get everything, including hidden liabilities) or asset purchase (you choose what you buy)."),
        ],
      },
      {
        heading: t("Sinergias, prima y quién gana", "Synergies, premium and who wins"),
        body: [
          t(
            "Una **sinergia** es el valor extra que aparece al juntar dos empresas: \"1 + 1 = 3\". Puede venir de **costos** (cerrar oficinas duplicadas, comprar en mayor volumen) o de **ingresos** (vender los productos de una a los clientes de la otra). Las de costos suelen ser más fáciles de lograr que las de ingresos.",
            "A **synergy** is the extra value that appears when two companies combine: \"1 + 1 = 3\". It can come from **costs** (closing duplicate offices, buying in larger volume) or from **revenue** (selling one's products to the other's customers). Cost synergies are usually easier to achieve than revenue synergies.",
          ),
          t(
            "Para convencer a los accionistas de la objetivo, el comprador casi siempre paga una **prima de control**: un precio por encima del valor de mercado. La prima es el regalo que se lleva el vendedor; las sinergias son lo que gana el conjunto. El comprador solo crea valor para sus accionistas si **las sinergias son mayores que la prima**.",
            "To persuade the target's shareholders, the acquirer almost always pays a **control premium**: a price above market value. The premium is the gift the seller takes; synergies are what the combination gains. The acquirer only creates value for its shareholders if **synergies are greater than the premium**.",
          ),
          t(
            "Mini ejemplo: la objetivo vale $500 millones sola, las sinergias valen $120 millones y el comprador paga $580 millones. La prima es $80 millones y el valor neto para el comprador es 500 + 120 − 580 = $40 millones. Si pagara $650 millones, perdería $30 millones aunque la operación \"tenga sinergias\": a esto se le llama la **maldición del ganador**.",
            "Mini example: the target is worth $500 million on its own, synergies are worth $120 million and the acquirer pays $580 million. The premium is $80 million and the net value for the acquirer is 500 + 120 − 580 = $40 million. If it paid $650 million, it would lose $30 million even though the deal \"has synergies\": this is called the **winner's curse**.",
          ),
        ],
        formulas: [
          {
            name: t("Prima de control (en pesos y en porcentaje)", "Control premium (in pesos and as a percentage)"),
            expression: "Prima = Precio pagado − Valor de mercado;  Prima % = (Precio pagado − Valor de mercado) ÷ Valor de mercado × 100",
            variables: [
              { symbol: "Prima", meaning: t("Lo que el comprador paga de más sobre el valor de mercado, en pesos.", "What the acquirer pays above market value, in pesos.") },
              { symbol: "Precio pagado", meaning: t("El precio ofrecido o acordado (total o por acción), en pesos.", "The price offered or agreed (total or per share), in pesos.") },
              { symbol: "Valor de mercado", meaning: t("Lo que valía la objetivo (o su acción) antes de la oferta, en pesos.", "What the target (or its share) was worth before the offer, in pesos.") },
              { symbol: "Prima %", meaning: t("La prima expresada como porcentaje del valor de mercado.", "The premium expressed as a percentage of market value.") },
            ],
            steps: [
              t("Resta: precio pagado − valor de mercado. Esa es la prima en pesos.", "Subtract: price paid − market value. That is the premium in pesos."),
              t("Para el porcentaje, divide la prima entre el valor de mercado (no entre el precio pagado).", "For the percentage, divide the premium by market value (not by the price paid)."),
              t("Multiplica por 100.", "Multiply by 100."),
            ],
            example: t(
              "La acción cotiza a $80 y el comprador ofrece $96. Prima: 96 − 80 = $16 por acción. Prima %: 16 ÷ 80 = 0.20; 0.20 × 100 = **20 %**.",
              "The share trades at $80 and the acquirer offers $96. Premium: 96 − 80 = $16 per share. Premium %: 16 ÷ 80 = 0.20; 0.20 × 100 = **20%**.",
            ),
            mistake: t(
              "Dividir entre el precio ofrecido; la base siempre es el precio de mercado antes de la oferta.",
              "Dividing by the offered price; the base is always the market price before the offer.",
            ),
          },
          {
            name: t("VPN de la compra para el comprador", "NPV of the deal for the acquirer"),
            expression: "VPN del comprador = Valor de la objetivo + Sinergias − Precio pagado  (= Sinergias − Prima)",
            variables: [
              { symbol: "VPN del comprador", meaning: t("Lo que ganan (o pierden) los accionistas del comprador con la operación, en pesos.", "What the acquirer's shareholders gain (or lose) from the deal, in pesos.") },
              { symbol: "Valor de la objetivo", meaning: t("Lo que vale la empresa comprada por sí sola, en pesos.", "What the target is worth on its own, in pesos.") },
              { symbol: "Sinergias", meaning: t("Valor presente del valor extra por juntar las empresas (ahorros o más ventas), en pesos.", "Present value of the extra value from combining the companies (savings or more sales), in pesos.") },
              { symbol: "Precio pagado", meaning: t("Lo que paga el comprador, en pesos.", "What the acquirer pays, in pesos.") },
            ],
            steps: [
              t("Suma el valor de la objetivo y las sinergias: es lo que realmente obtienes.", "Add the target's value and the synergies: that is what you really get."),
              t("Resta el precio pagado: el resultado es el VPN del comprador.", "Subtract the price paid: the result is the acquirer's NPV."),
              t("Comprueba: la prima (para el vendedor) + el VPN del comprador = sinergias, el valor total creado.", "Check: the premium (to the seller) + the acquirer's NPV = synergies, the total value created."),
            ],
            example: t(
              "Objetivo vale $1,000 millones, sinergias $200 millones y se paga $1,150 millones. Prima: 1,150 − 1,000 = 150. VPN: 1,000 + 200 − 1,150 = **$50 millones**. Comprobación: 150 + 50 = 200 = sinergias.",
              "Target worth $1,000 million, synergies $200 million and $1,150 million paid. Premium: 1,150 − 1,000 = 150. NPV: 1,000 + 200 − 1,150 = **$50 million**. Check: 150 + 50 = 200 = synergies.",
            ),
            interpret: t(
              "VPN positivo: el comprador crea valor. Negativo: pagó una prima mayor que las sinergias y el vendedor se llevó todo (la maldición del ganador).",
              "Positive NPV: the acquirer creates value. Negative: it paid a premium larger than the synergies and the seller took everything (the winner's curse).",
            ),
            mistake: t(
              "Pensar que el comprador se queda con todas las sinergias; la prima es la parte que se lleva el vendedor.",
              "Thinking the acquirer keeps all the synergies; the premium is the part the seller takes.",
            ),
          },
        ],
      },
      {
        heading: t("Proceso, forma de pago y efecto en la UPA", "Process, form of payment and EPS effect"),
        body: [
          t(
            "El proceso típico: estrategia y búsqueda de objetivos, primeros acercamientos y acuerdo de confidencialidad, **carta de intención** (precio y condiciones preliminares), **debida diligencia** (due diligence: revisión a fondo de finanzas, impuestos, contratos, juicios y asuntos laborales), contrato definitivo, **autorizaciones** (por ejemplo, de la autoridad de competencia) y cierre. Después viene la parte más difícil: la **integración**.",
            "The typical process: strategy and target search, first approaches and a confidentiality agreement, **letter of intent** (preliminary price and terms), **due diligence** (a thorough review of finances, taxes, contracts, lawsuits and labor matters), definitive agreement, **approvals** (for example, from the competition authority) and closing. Then comes the hardest part: **integration**.",
          ),
          t(
            "Se puede pagar en **efectivo** (el vendedor recibe dinero seguro y el comprador asume todo el riesgo) o en **acciones** (el vendedor se vuelve socio y comparte el riesgo, pero los accionistas del comprador se diluyen). Con acciones conviene revisar si la **utilidad por acción (UPA)** del comprador sube (**acreción**) o baja (**dilución**).",
            "Payment can be in **cash** (the seller gets certain money and the acquirer bears all the risk) or in **shares** (the seller becomes a partner and shares the risk, but the acquirer's shareholders are diluted). With shares it is worth checking whether the acquirer's **earnings per share (EPS)** goes up (**accretion**) or down (**dilution**).",
          ),
          t(
            "Regla rápida sin sinergias: si pagas con acciones y el múltiplo P/U que pagas por la objetivo es **menor** que el P/U de tus propias acciones, la UPA sube; si es mayor, baja. Mini ejemplo: tu acción cotiza a 15 veces utilidad y compras una empresa pagando 12 veces su utilidad: la operación es acretiva. Ojo: acretiva no significa que cree valor; eso lo deciden sinergias y prima.",
            "Quick rule without synergies: if you pay with shares and the P/E you pay for the target is **lower** than the P/E of your own shares, EPS goes up; if it is higher, it goes down. Mini example: your stock trades at 15 times earnings and you buy a company paying 12 times its earnings: the deal is accretive. Careful: accretive does not mean it creates value; synergies and premium decide that.",
          ),
        ],
        formulas: [
          {
            name: t("Utilidad por acción (UPA) después de pagar con acciones", "Earnings per share (EPS) after paying with shares"),
            expression: "UPA combinada = (Utilidad comprador + Utilidad objetivo + Sinergias después de impuestos) ÷ (Acciones comprador + Acciones nuevas);  Acciones nuevas = Monto pagado en acciones ÷ Precio de la acción del comprador",
            variables: [
              { symbol: "UPA combinada", meaning: t("Cuánta utilidad le toca a cada acción después de la compra, en pesos.", "How much profit each share gets after the deal, in pesos.") },
              { symbol: "Utilidad comprador", meaning: t("Utilidad neta anual de la compradora, en pesos.", "The acquirer's annual net income, in pesos.") },
              { symbol: "Utilidad objetivo", meaning: t("Utilidad neta anual de la empresa comprada, en pesos.", "The target's annual net income, in pesos.") },
              { symbol: "Sinergias después de impuestos", meaning: t("Utilidad extra anual por juntar las empresas, ya sin impuestos, en pesos (0 si no hay).", "Extra annual profit from combining, after taxes, in pesos (0 if none).") },
              { symbol: "Acciones comprador", meaning: t("Las acciones que ya existían antes de la compra.", "The shares that existed before the deal.") },
              { symbol: "Acciones nuevas", meaning: t("Las acciones que se emiten para pagar a los vendedores.", "The shares issued to pay the sellers.") },
              { symbol: "Precio de la acción del comprador", meaning: t("A cuánto se entregan las acciones nuevas, en pesos por acción.", "The price at which new shares are delivered, in pesos per share.") },
            ],
            steps: [
              t("Calcula la UPA de antes: utilidad comprador ÷ acciones comprador.", "Compute EPS before: acquirer earnings ÷ acquirer shares."),
              t("Calcula las acciones nuevas: monto pagado ÷ precio por acción.", "Compute new shares: amount paid ÷ price per share."),
              t("Suma las utilidades (comprador + objetivo + sinergias).", "Add the earnings (acquirer + target + synergies)."),
              t("Divide entre el total de acciones (viejas + nuevas) y compara con la UPA de antes.", "Divide by total shares (old + new) and compare with EPS before."),
            ],
            example: t(
              "Compradora: utilidad $120 millones, 60 millones de acciones a $25. Objetivo: utilidad $40 millones; se paga $300 millones en acciones. Sinergias $6 millones. UPA antes: 120 ÷ 60 = $2.00. Acciones nuevas: 300 ÷ 25 = 12 millones; total 60 + 12 = 72. Utilidad: 120 + 40 + 6 = 166. UPA: 166 ÷ 72 = **$2.31**: sube, es acretiva.",
              "Acquirer: earnings $120 million, 60 million shares at $25. Target: earnings $40 million; $300 million is paid in shares. Synergies $6 million. EPS before: 120 ÷ 60 = $2.00. New shares: 300 ÷ 25 = 12 million; total 60 + 12 = 72. Earnings: 120 + 40 + 6 = 166. EPS: 166 ÷ 72 = **$2.31**: it rises, it is accretive.",
            ),
            interpret: t(
              "Si la UPA sube es acretiva; si baja, dilutiva. Atajo sin sinergias: compara el P/U que pagas (precio ÷ utilidad de la objetivo, aquí 300 ÷ 40 = 7.5) con el P/U de tu acción (25 ÷ 2 = 12.5); si pagas menos, la UPA sube.",
              "If EPS rises it is accretive; if it falls, dilutive. Shortcut without synergies: compare the P/E you pay (price ÷ target earnings, here 300 ÷ 40 = 7.5) with your own share's P/E (25 ÷ 2 = 12.5); if you pay less, EPS rises.",
            ),
            mistake: t(
              "Olvidar sumar las acciones nuevas y dividir solo entre las acciones viejas.",
              "Forgetting to add the new shares and dividing only by the old shares.",
            ),
          },
        ],
      },
    ],
    examples: [
      {
        title: t("¿Cuánto gana cada parte?", "How much does each party gain?"),
        problem: t(
          "Una cadena de supermercados compra a una rival. La objetivo vale $500 millones en bolsa. Se estiman sinergias con valor presente de $120 millones. El precio acordado es $580 millones. Calcula la prima, la ganancia del vendedor y el VPN para el comprador.",
          "A supermarket chain buys a rival. The target is worth $500 million on the exchange. Synergies with a present value of $120 million are estimated. The agreed price is $580 million. Compute the premium, the seller's gain and the acquirer's NPV.",
        ),
        steps: [
          t("Prima = 580 − 500 = $80 millones (16 % sobre el valor de mercado).", "Premium = 580 − 500 = $80 million (16 % over market value)."),
          t("Los accionistas de la objetivo ganan la prima: $80 millones.", "The target's shareholders gain the premium: $80 million."),
          t("VPN del comprador = 500 + 120 − 580 = $40 millones.", "Acquirer NPV = 500 + 120 − 580 = $40 million."),
          t("Comprobación: 80 + 40 = 120, el total de sinergias se reparte entre ambos.", "Check: 80 + 40 = 120, the total synergies are split between both."),
        ],
        result: t(
          "La operación crea $120 millones; el vendedor se lleva $80 y el comprador $40. Si la prima superara $120 millones, el comprador destruiría valor.",
          "The deal creates $120 million; the seller takes $80 and the acquirer $40. If the premium exceeded $120 million, the acquirer would destroy value.",
        ),
      },
      {
        title: t("Acreción o dilución con pago en acciones", "Accretion or dilution with a stock payment"),
        problem: t(
          "La compradora tiene utilidad neta de $100 millones, 50 millones de acciones y su acción vale $30 (P/U = 15). La objetivo gana $30 millones y se paga $360 millones en acciones nuevas de la compradora a $30 cada una. Sin sinergias, ¿sube o baja la UPA?",
          "The acquirer has net income of $100 million, 50 million shares and its stock is worth $30 (P/E = 15). The target earns $30 million and $360 million is paid in new acquirer shares at $30 each. Without synergies, does EPS go up or down?",
        ),
        steps: [
          t("UPA antes: 100 / 50 = $2.00.", "EPS before: 100 / 50 = $2.00."),
          t("Acciones nuevas: 360 / 30 = 12 millones; total = 62 millones.", "New shares: 360 / 30 = 12 million; total = 62 million."),
          t("Utilidad combinada: 100 + 30 = $130 millones.", "Combined earnings: 100 + 30 = $130 million."),
          t("UPA después: 130 / 62 = $2.10 (aprox. 2.0968).", "EPS after: 130 / 62 = $2.10 (approx. 2.0968)."),
          t("P/U pagado: 360 / 30 = 12, menor que 15 de la compradora.", "P/E paid: 360 / 30 = 12, lower than the acquirer's 15."),
        ],
        result: t(
          "La UPA sube de $2.00 a unos $2.10: la operación es acretiva porque se pagó un P/U menor que el propio.",
          "EPS rises from $2.00 to about $2.10: the deal is accretive because the P/E paid was lower than the acquirer's own.",
        ),
      },
    ],
    keyPoints: [
      t("Adquisición: una toma el control de otra; fusión: se unen y al menos una desaparece legalmente.", "Acquisition: one takes control of another; merger: they combine and at least one disappears legally."),
      t("Horizontal (mismo giro), vertical (proveedor o cliente) y conglomerado (sin relación).", "Horizontal (same industry), vertical (supplier or customer) and conglomerate (unrelated)."),
      t("El comprador crea valor solo si las sinergias superan la prima pagada.", "The acquirer creates value only if synergies exceed the premium paid."),
      t("La debida diligencia revisa riesgos ocultos antes de firmar.", "Due diligence reviews hidden risks before signing."),
      t("Con pago en acciones, pagar un P/U menor que el propio es acretivo (sin sinergias), pero acreción no es lo mismo que crear valor.", "With stock payment, paying a P/E lower than your own is accretive (without synergies), but accretion is not the same as creating value."),
    ],
    normativeNote: NOTE_MA,
    exerciseIds: ['FIN-15-E1', 'FIN-15-E2', 'FIN-15-E3', 'FIN-15-E4', 'FIN-15-E5', 'FIN-15-E6'],
  },

  // ───────────────────────────── FIN-16 ─────────────────────────────
  {
    id: 'FIN-16',
    level: 4,
    topicIds: ['FIN.16'],
    title: t("Finanzas internacionales", "International finance"),
    summary: t(
      "Las empresas que compran, venden o invierten en otras monedas deben entender el tipo de cambio, sus paridades y cómo cubrirse del riesgo cambiario.",
      "Companies that buy, sell or invest in other currencies must understand the exchange rate, its parity relationships and how to hedge currency risk.",
    ),
    minutes: 18,
    objectives: [
      t("Leer cotizaciones de tipo de cambio e identificar apreciación y depreciación del peso.", "Read exchange-rate quotes and identify appreciation and depreciation of the peso."),
      t("Calcular un tipo de cambio a plazo con la paridad de tasas de interés y uno esperado con la paridad del poder de compra relativa.", "Compute a forward exchange rate with interest rate parity and an expected one with relative purchasing power parity."),
      t("Clasificar los riesgos cambiarios de transacción, de traducción y económico.", "Classify transaction, translation and economic currency risk."),
      t("Evaluar el resultado de cubrir una operación en dólares con un forward.", "Evaluate the result of hedging a dollar transaction with a forward."),
    ],
    theory: [
      {
        heading: t("El tipo de cambio: spot y forward", "The exchange rate: spot and forward"),
        body: [
          t(
            "El **tipo de cambio** es el precio de una moneda en otra. En México solemos verlo como **pesos por dólar**: si el dólar está en 18, necesitas $18 para comprar un dólar. Si pasa de 18 a 20, cada dólar cuesta más pesos: el **peso se depreció** (perdió valor). Si baja de 20 a 18, el **peso se apreció**.",
            "The **exchange rate** is the price of one currency in another. In Mexico we usually see it as **pesos per dollar**: if the dollar is at 18, you need $18 to buy one dollar. If it goes from 18 to 20, each dollar costs more pesos: the **peso depreciated** (lost value). If it falls from 20 to 18, the **peso appreciated**.",
          ),
          t(
            "¿A quién le conviene cada caso? Un peso depreciado ayuda al **exportador** (sus dólares se convierten en más pesos) y al turismo extranjero, y perjudica al **importador** y a quien tiene deudas en dólares. Un peso apreciado hace lo contrario.",
            "Who benefits in each case? A depreciated peso helps the **exporter** (its dollars convert into more pesos) and foreign tourism, and hurts the **importer** and anyone with dollar debts. An appreciated peso does the opposite.",
          ),
          t(
            "El tipo de cambio **spot** es el de hoy, para entrega inmediata. El **forward** (a plazo) es un precio que se pacta hoy para comprar o vender divisas en una fecha futura. Mini ejemplo: una agencia de viajes pacta hoy comprar USD 10,000 dentro de tres meses a 18.50; pase lo que pase con el spot, pagará $185,000.",
            "The **spot** rate is today's, for immediate delivery. The **forward** rate is a price agreed today to buy or sell currency on a future date. Mini example: a travel agency agrees today to buy USD 10,000 in three months at 18.50; whatever happens to the spot rate, it will pay $185,000.",
          ),
        ],
        bullets: [
          t("Más pesos por dólar = peso depreciado; menos pesos por dólar = peso apreciado.", "More pesos per dollar = depreciated peso; fewer pesos per dollar = appreciated peso."),
          t("Peso depreciado: gana el exportador, pierde el importador.", "Depreciated peso: the exporter wins, the importer loses."),
          t("Spot: hoy. Forward: precio fijado hoy para una fecha futura.", "Spot: today. Forward: price fixed today for a future date."),
        ],
      },
      {
        heading: t("Paridades: tasas de interés y poder de compra", "Parities: interest rates and purchasing power"),
        body: [
          t(
            "En palabras sencillas: una **paridad** es una regla que conecta el tipo de cambio con otra cosa. La de tasas dice que el dólar \"a plazo\" se ajusta para que dé igual ahorrar en pesos o en dólares. La del poder de compra dice que, con los años, la moneda del país con más inflación pierde valor, porque con ella compras menos.",
            "In plain words: a **parity** is a rule linking the exchange rate to something else. The interest rate one says the forward dollar adjusts so that saving in pesos or in dollars ends up the same. The purchasing power one says that, over the years, the currency of the country with more inflation loses value, because it buys less.",
          ),
          t(
            "La **paridad de tasas de interés cubierta** dice que no puedes ganar dinero gratis invirtiendo en el país con tasa más alta y cubriéndote con un forward. Por eso el forward refleja la diferencia de tasas: si la tasa en pesos es mayor que en dólares, el forward en pesos por dólar es **mayor** que el spot.",
            "**Covered interest rate parity** says you cannot make free money by investing in the higher-rate country and hedging with a forward. That is why the forward reflects the rate difference: if the peso rate is higher than the dollar rate, the forward in pesos per dollar is **higher** than the spot.",
          ),
          t(
            "La **paridad del poder de compra (PPC) relativa** dice que, a largo plazo, el tipo de cambio se ajusta por la diferencia de inflaciones. Si en México los precios suben más rápido que en Estados Unidos, el peso tiende a depreciarse. A corto plazo puede fallar mucho, porque influyen las tasas, el riesgo y los flujos de capital.",
            "**Relative purchasing power parity (PPP)** says that, in the long run, the exchange rate adjusts for the inflation difference. If prices in Mexico rise faster than in the United States, the peso tends to depreciate. In the short run it can fail badly, because rates, risk and capital flows also matter.",
          ),
          t(
            "Mini ejemplo (hipotético): spot 18.00, tasa a un año en pesos 9 % y en dólares 4 %. El forward a un año es 18 × 1.09 / 1.04 = 18.87. Ese dólar \"más caro\" a plazo no es una predicción: es el resultado de la diferencia de tasas.",
            "Mini example (hypothetical): spot 18.00, one-year peso rate 9 % and dollar rate 4 %. The one-year forward is 18 × 1.09 / 1.04 = 18.87. That \"more expensive\" forward dollar is not a forecast: it is the result of the rate difference.",
          ),
        ],
        formulas: [
          {
            name: t("Tipo de cambio forward (paridad de tasas de interés cubierta)", "Forward exchange rate (covered interest rate parity)"),
            expression: "F = S × (1 + i_MXN) ÷ (1 + i_USD)",
            variables: [
              { symbol: "F", meaning: t("Tipo de cambio forward: pesos por dólar pactados hoy para una fecha futura.", "Forward rate: pesos per dollar agreed today for a future date.") },
              { symbol: "S", meaning: t("Tipo de cambio spot (de hoy), en pesos por dólar.", "Spot (today's) rate, in pesos per dollar.") },
              { symbol: "i_MXN", meaning: t("Tasa de interés en pesos para ese plazo, en decimal (9 % = 0.09).", "Peso interest rate for that term, as a decimal (9% = 0.09).") },
              { symbol: "i_USD", meaning: t("Tasa de interés en dólares para ese plazo, en decimal (4 % = 0.04).", "Dollar interest rate for that term, as a decimal (4% = 0.04).") },
            ],
            steps: [
              t("Convierte las dos tasas a decimales.", "Convert both rates to decimals."),
              t("Multiplica el spot por (1 + tasa en pesos): arriba va la moneda en que está la cotización (pesos).", "Multiply the spot by (1 + peso rate): the quoting currency (pesos) goes on top."),
              t("Divide entre (1 + tasa en dólares).", "Divide by (1 + dollar rate)."),
            ],
            example: t(
              "Spot 19.00, tasa en pesos 8 % y en dólares 3 % (hipotéticas). 19 × 1.08 = 20.52; 20.52 ÷ 1.03 = **19.92 pesos por dólar** a un año.",
              "Spot 19.00, peso rate 8% and dollar rate 3% (hypothetical). 19 × 1.08 = 20.52; 20.52 ÷ 1.03 = **19.92 pesos per dollar** in one year.",
            ),
            interpret: t(
              "Si la tasa en pesos es mayor, el forward sale mayor que el spot. No es un pronóstico: solo refleja la diferencia de tasas.",
              "If the peso rate is higher, the forward comes out higher than the spot. It is not a forecast: it only reflects the rate difference.",
            ),
            mistake: t(
              "Invertir la fracción (tasa en dólares arriba), lo que daría un forward menor que el spot.",
              "Flipping the fraction (dollar rate on top), which would give a forward lower than the spot.",
            ),
          },
          {
            name: t("Tipo de cambio esperado (paridad del poder de compra relativa)", "Expected exchange rate (relative purchasing power parity)"),
            expression: "S₁ = S₀ × (1 + π_MXN) ÷ (1 + π_USD)",
            variables: [
              { symbol: "S₁", meaning: t("Tipo de cambio esperado dentro de un año, en pesos por dólar.", "Expected exchange rate in one year, in pesos per dollar.") },
              { symbol: "S₀", meaning: t("Tipo de cambio de hoy, en pesos por dólar.", "Today's exchange rate, in pesos per dollar.") },
              { symbol: "π_MXN", meaning: t("Inflación esperada en México (cuánto suben los precios), en decimal (5 % = 0.05).", "Expected inflation in Mexico (how much prices rise), as a decimal (5% = 0.05).") },
              { symbol: "π_USD", meaning: t("Inflación esperada en Estados Unidos, en decimal (3 % = 0.03).", "Expected inflation in the United States, as a decimal (3% = 0.03).") },
            ],
            steps: [
              t("Convierte las inflaciones a decimales.", "Convert the inflation rates to decimals."),
              t("Multiplica el tipo de cambio de hoy por (1 + inflación de México).", "Multiply today's rate by (1 + Mexico's inflation)."),
              t("Divide entre (1 + inflación de Estados Unidos).", "Divide by (1 + US inflation)."),
            ],
            example: t(
              "Hoy 18.50, inflación en México 5 % y en Estados Unidos 3 % (hipotéticas). 18.50 × 1.05 = 19.425; 19.425 ÷ 1.03 = **18.86 pesos por dólar** esperados en un año.",
              "Today 18.50, inflation in Mexico 5% and in the US 3% (hypothetical). 18.50 × 1.05 = 19.425; 19.425 ÷ 1.03 = **18.86 pesos per dollar** expected in one year.",
            ),
            interpret: t(
              "Si México tiene más inflación, S₁ sale mayor: el peso tiende a depreciarse. Funciona mejor a largo plazo que a corto.",
              "If Mexico has more inflation, S₁ comes out higher: the peso tends to depreciate. It works better in the long run than in the short run.",
            ),
            mistake: t(
              "Restar las inflaciones y aplicar la diferencia (solo es una aproximación) o invertir la fracción.",
              "Subtracting the inflation rates and applying the difference (only an approximation) or flipping the fraction.",
            ),
          },
        ],
      },
      {
        heading: t("Riesgo cambiario y coberturas", "Currency risk and hedging"),
        body: [
          t(
            "Hay tres tipos de **riesgo cambiario**. El de **transacción**: una cuenta por pagar o cobrar en otra moneda cuyo valor en pesos cambia antes de liquidarse. El de **traducción** (o conversión): al consolidar los estados financieros de una subsidiaria extranjera, sus cifras en pesos cambian con el tipo de cambio. El **económico**: el tipo de cambio altera a largo plazo tu competitividad, tus precios y tus ventas, aunque no tengas operaciones en dólares.",
            "There are three types of **currency risk**. **Transaction** risk: a payable or receivable in another currency whose peso value changes before it is settled. **Translation** risk: when consolidating a foreign subsidiary's financial statements, its figures in pesos change with the exchange rate. **Economic** risk: the exchange rate changes your long-term competitiveness, prices and sales, even if you have no dollar transactions.",
          ),
          t(
            "Las herramientas de cobertura más comunes: **forwards** (fijan el precio, a la medida, con un banco), **futuros** (como forwards pero estandarizados y en bolsa), **opciones** (pagas una prima por el derecho, no la obligación, de cambiar a un precio) y la **cobertura natural** (tener ingresos y gastos en la misma moneda, como deudas en dólares si vendes en dólares).",
            "The most common hedging tools: **forwards** (they fix the price, tailor-made, with a bank), **futures** (like forwards but standardized and exchange-traded), **options** (you pay a premium for the right, not the obligation, to exchange at a price) and the **natural hedge** (having revenue and costs in the same currency, such as dollar debt if you sell in dollars).",
          ),
          t(
            "Cubrirse no es para ganar más, sino para **quitar incertidumbre**. Mini ejemplo: un importador debe USD 100,000 en 90 días y pacta un forward a 18.50: pagará $1,850,000 seguro. Si el spot termina en 19.20 se ahorró $70,000; si termina en 17.80, habría pagado $70,000 menos sin cobertura, pero durmió tranquilo.",
            "Hedging is not about earning more but about **removing uncertainty**. Mini example: an importer owes USD 100,000 in 90 days and agrees a forward at 18.50: it will surely pay $1,850,000. If the spot ends at 19.20 it saved $70,000; if it ends at 17.80, it would have paid $70,000 less without a hedge, but it slept soundly.",
          ),
        ],
        formulas: [
          {
            name: t("Resultado de cubrirse con un forward", "Result of hedging with a forward"),
            expression: "Pesos con forward = USD × F;  Pesos sin cobertura = USD × Spot al vencimiento;  Diferencia = Pesos con forward − Pesos sin cobertura",
            variables: [
              { symbol: "USD", meaning: t("Los dólares que vas a cobrar o a pagar en la fecha futura.", "The dollars you will collect or pay on the future date.") },
              { symbol: "F", meaning: t("Tipo de cambio forward pactado hoy, en pesos por dólar.", "Forward rate agreed today, in pesos per dollar.") },
              { symbol: "Spot al vencimiento", meaning: t("El tipo de cambio que realmente hay ese día, en pesos por dólar.", "The exchange rate actually prevailing that day, in pesos per dollar.") },
              { symbol: "Diferencia", meaning: t("Cuántos pesos de más o de menos te dejó la cobertura frente a no cubrirte.", "How many more or fewer pesos the hedge left you compared with not hedging.") },
            ],
            steps: [
              t("Multiplica los dólares por el forward: son los pesos fijos que recibes o pagas con cobertura.", "Multiply the dollars by the forward: those are the fixed pesos you receive or pay with the hedge."),
              t("Multiplica los dólares por el spot del vencimiento: lo que habría pasado sin cobertura.", "Multiply the dollars by the spot at maturity: what would have happened without a hedge."),
              t("Resta y lee el resultado según tu caso: si **cobras** dólares (exportador), te conviene recibir más pesos; si **pagas** dólares (importador), te conviene pagar menos pesos.", "Subtract and read the result for your case: if you **collect** dollars (exporter), you want to receive more pesos; if you **pay** dollars (importer), you want to pay fewer pesos."),
            ],
            example: t(
              "Un exportador cobrará USD 50,000 y pacta un forward a 19.10. Al vencimiento el spot es 19.40. Con forward: 50,000 × 19.10 = $955,000. Sin cobertura: 50,000 × 19.40 = $970,000. Diferencia: 955,000 − 970,000 = −$15,000: esta vez la cobertura **dejó de ganar $15,000**, pero le dio un ingreso seguro.",
              "An exporter will collect USD 50,000 and agrees a forward at 19.10. At maturity the spot is 19.40. With forward: 50,000 × 19.10 = $955,000. Without hedge: 50,000 × 19.40 = $970,000. Difference: 955,000 − 970,000 = −$15,000: this time the hedge **missed out on $15,000**, but it gave a certain income.",
            ),
            interpret: t(
              "La cobertura no busca ganar: a veces ahorra y a veces deja de ganar. Lo que compras es certeza para presupuestar.",
              "Hedging does not aim to win: sometimes it saves and sometimes it misses out. What you buy is certainty for budgeting.",
            ),
            mistake: t(
              "Decir que el forward \"perdió\" sin fijarte si cobras o pagas dólares; el mismo movimiento del spot es bueno para uno y malo para el otro.",
              "Saying the forward \"lost\" without checking whether you collect or pay dollars; the same spot move is good for one and bad for the other.",
            ),
          },
        ],
        bullets: [
          t("Transacción: operaciones pendientes en otra moneda.", "Transaction: pending deals in another currency."),
          t("Traducción: conversión de estados de subsidiarias extranjeras.", "Translation: conversion of foreign subsidiaries' statements."),
          t("Económico: efecto de largo plazo en competitividad.", "Economic: long-term effect on competitiveness."),
          t("Forward, futuro, opción o cobertura natural.", "Forward, future, option or natural hedge."),
        ],
      },
    ],
    examples: [
      {
        title: t("Tipo de cambio forward por paridad de tasas", "Forward rate by interest rate parity"),
        problem: t(
          "Datos hipotéticos: spot 18.00 pesos por dólar, tasa a un año en pesos 9 % y en dólares 4 %. ¿Cuál es el forward a un año?",
          "Hypothetical data: spot 18.00 pesos per dollar, one-year peso rate 9 % and dollar rate 4 %. What is the one-year forward?",
        ),
        steps: [
          t("Aplica F = S × (1 + i_MXN) / (1 + i_USD).", "Apply F = S × (1 + i_MXN) / (1 + i_USD)."),
          t("F = 18 × 1.09 / 1.04 = 19.62 / 1.04 = 18.8654.", "F = 18 × 1.09 / 1.04 = 19.62 / 1.04 = 18.8654."),
          t("Comprueba: $18 en pesos al 9 % dan $19.62; 1 dólar al 4 % da USD 1.04; 19.62 / 1.04 = 18.87.", "Check: $18 in pesos at 9 % gives $19.62; 1 dollar at 4 % gives USD 1.04; 19.62 / 1.04 = 18.87."),
        ],
        result: t(
          "El forward es ≈ 18.87 pesos por dólar: mayor que el spot porque la tasa en pesos es más alta.",
          "The forward is ≈ 18.87 pesos per dollar: higher than the spot because the peso rate is higher.",
        ),
      },
      {
        title: t("Importador cubierto con forward", "Importer hedged with a forward"),
        problem: t(
          "Un importador de maquinaria debe pagar USD 100,000 en 90 días. Pacta un forward a 18.50. Compara su costo en pesos si al vencimiento el spot es 19.20 o 17.80.",
          "A machinery importer must pay USD 100,000 in 90 days. It agrees a forward at 18.50. Compare its peso cost if at maturity the spot is 19.20 or 17.80.",
        ),
        steps: [
          t("Con forward: 100,000 × 18.50 = $1,850,000 en cualquier caso.", "With the forward: 100,000 × 18.50 = $1,850,000 in any case."),
          t("Sin cobertura y spot 19.20: 100,000 × 19.20 = $1,920,000 (la cobertura ahorra $70,000).", "Unhedged with spot 19.20: 100,000 × 19.20 = $1,920,000 (the hedge saves $70,000)."),
          t("Sin cobertura y spot 17.80: 100,000 × 17.80 = $1,780,000 (la cobertura cuesta $70,000 de oportunidad).", "Unhedged with spot 17.80: 100,000 × 17.80 = $1,780,000 (the hedge has a $70,000 opportunity cost)."),
        ],
        result: t(
          "El forward fija el costo en $1,850,000. A veces se gana y a veces se deja de ganar; lo que se compra es certeza para presupuestar.",
          "The forward fixes the cost at $1,850,000. Sometimes you win and sometimes you miss out; what you buy is certainty for budgeting.",
        ),
      },
    ],
    keyPoints: [
      t("Si suben los pesos por dólar, el peso se deprecia: gana el exportador, pierde el importador.", "If pesos per dollar go up, the peso depreciates: the exporter wins, the importer loses."),
      t("Forward = spot × (1 + i_MXN) / (1 + i_USD): refleja la diferencia de tasas, no un pronóstico.", "Forward = spot × (1 + i_MXN) / (1 + i_USD): it reflects the rate difference, not a forecast."),
      t("La PPC relativa explica tendencias de largo plazo por diferencias de inflación.", "Relative PPP explains long-term trends through inflation differences."),
      t("Riesgos: transacción, traducción y económico.", "Risks: transaction, translation and economic."),
      t("Cubrirse elimina incertidumbre; no garantiza ganar más.", "Hedging removes uncertainty; it does not guarantee earning more."),
    ],
    normativeNote: NOTE_FX,
    exerciseIds: ['FIN-16-E1', 'FIN-16-E2', 'FIN-16-E3', 'FIN-16-E4', 'FIN-16-E5', 'FIN-16-E6'],
  },

  // ───────────────────────────── FIN-17 ─────────────────────────────
  {
    id: 'FIN-17',
    level: 4,
    topicIds: ['FIN.17'],
    title: t("Reestructuración financiera", "Financial restructuring"),
    summary: t(
      "Cuando una empresa ya no puede con su deuda, la reestructuración ajusta plazos, montos y dueños para salvar el negocio viable, por acuerdo privado o por un proceso judicial.",
      "When a company can no longer carry its debt, restructuring adjusts maturities, amounts and owners to save the viable business, through a private agreement or a court process.",
    ),
    minutes: 18,
    objectives: [
      t("Distinguir un problema de liquidez de uno de solvencia y reconocer señales de alerta.", "Distinguish a liquidity problem from a solvency problem and recognize warning signs."),
      t("Calcular razones de apalancamiento y cobertura que usan acreedores y covenants.", "Compute leverage and coverage ratios used by lenders and covenants."),
      t("Explicar herramientas de reestructuración extrajudicial, como ampliación de plazos, quitas y capitalización de deuda.", "Explain out-of-court restructuring tools, such as maturity extensions, haircuts and debt-for-equity swaps."),
      t("Aplicar el orden de prelación simplificado para estimar cuánto recupera cada acreedor.", "Apply the simplified priority order to estimate how much each creditor recovers."),
    ],
    theory: [
      {
        heading: t("Señales de dificultad financiera", "Signs of financial distress"),
        body: [
          t(
            "No es lo mismo no tener efectivo hoy que no poder pagar nunca. Un problema de **liquidez** es como una familia con buen sueldo que se quedó sin dinero a mitad de quincena: el negocio es sano, pero el efectivo no llega a tiempo. Un problema de **solvencia** es más grave: lo que la empresa debe es mayor que lo que vale o que lo que puede generar.",
            "Not having cash today is not the same as never being able to pay. A **liquidity** problem is like a family with a good salary that ran out of money in the middle of the pay period: the business is healthy, but cash does not arrive in time. A **solvency** problem is more serious: what the company owes is more than it is worth or more than it can generate.",
          ),
          t(
            "Los acreedores vigilan razones como **deuda neta/EBITDA** (cuántos años de EBITDA harían falta para pagar la deuda) y **cobertura de intereses** (EBIT/intereses: cuántas veces alcanza la utilidad operativa para pagar intereses). Los contratos de crédito incluyen **covenants**: límites a esas razones que, si se rompen, permiten al banco exigir el pago anticipado.",
            "Lenders watch ratios such as **net debt/EBITDA** (how many years of EBITDA it would take to repay the debt) and **interest coverage** (EBIT/interest: how many times operating profit covers interest). Loan agreements include **covenants**: limits on those ratios which, if breached, allow the bank to demand early repayment.",
          ),
          t(
            "Otras señales: pagos atrasados a proveedores, uso constante de la línea de crédito al tope, pérdidas recurrentes y vencimientos grandes de deuda sin plan de refinanciamiento. Mini ejemplo: con EBIT de $90 y intereses de $60, la cobertura es 1.5 veces; una caída de un tercio en el EBIT dejaría a la empresa sin margen para pagar.",
            "Other signs: late payments to suppliers, a credit line constantly maxed out, recurring losses and large debt maturities with no refinancing plan. Mini example: with EBIT of $90 and interest of $60, coverage is 1.5 times; a one-third drop in EBIT would leave the company with no margin to pay.",
          ),
        ],
        formulas: [
          {
            name: t("Apalancamiento: deuda neta / EBITDA", "Leverage: net debt / EBITDA"),
            expression: "Apalancamiento = Deuda neta ÷ EBITDA",
            variables: [
              { symbol: "Apalancamiento", meaning: t("Cuántos años de EBITDA harían falta para pagar la deuda, en \"veces\".", "How many years of EBITDA it would take to repay the debt, in \"times\".") },
              { symbol: "Deuda neta", meaning: t("Deuda con costo menos efectivo, en pesos.", "Interest-bearing debt minus cash, in pesos.") },
              { symbol: "EBITDA", meaning: t("Utilidad de operación antes de depreciación y amortización: una medida del efectivo que genera la operación en un año, en pesos.", "Operating profit before depreciation and amortization: a measure of the cash the operation generates in a year, in pesos.") },
            ],
            steps: [
              t("Calcula la deuda neta: deuda con costo − efectivo.", "Compute net debt: interest-bearing debt − cash."),
              t("Divídela entre el EBITDA del año.", "Divide it by the year's EBITDA."),
              t("Compara con el límite del covenant: si lo supera, lo incumple.", "Compare with the covenant limit: if it is above it, it is in breach."),
            ],
            example: t(
              "Deuda neta $750 millones y EBITDA $250 millones: 750 ÷ 250 = **3.0 veces**. Con un covenant de máximo 3.5 veces, cumple.",
              "Net debt $750 million and EBITDA $250 million: 750 ÷ 250 = **3.0 times**. With a covenant of at most 3.5 times, it complies.",
            ),
            interpret: t(
              "Entre más alto, más endeudada está la empresa. Aquí lo malo es pasarse del máximo.",
              "The higher it is, the more indebted the company. Here the problem is going above the maximum.",
            ),
          },
          {
            name: t("Cobertura de intereses", "Interest coverage"),
            expression: "Cobertura = EBIT ÷ Intereses",
            variables: [
              { symbol: "Cobertura", meaning: t("Cuántas veces alcanza la utilidad de operación para pagar los intereses, en \"veces\".", "How many times operating profit covers interest, in \"times\".") },
              { symbol: "EBIT", meaning: t("Utilidad de operación, antes de intereses e impuestos, en pesos.", "Operating profit, before interest and taxes, in pesos.") },
              { symbol: "Intereses", meaning: t("Gasto por intereses de la deuda en el año, en pesos.", "Interest expense on debt for the year, in pesos.") },
            ],
            steps: [
              t("Toma el EBIT (no la utilidad neta).", "Take EBIT (not net income)."),
              t("Divídelo entre los intereses del año.", "Divide it by the year's interest."),
              t("Compara con el mínimo del covenant: si queda abajo, lo incumple.", "Compare with the covenant minimum: if it is below, it is in breach."),
            ],
            example: t(
              "EBIT $150 millones e intereses $60 millones: 150 ÷ 60 = **2.5 veces**. Si el contrato pide mínimo 3.0, incumple.",
              "EBIT $150 million and interest $60 million: 150 ÷ 60 = **2.5 times**. If the contract requires at least 3.0, it is in breach.",
            ),
            interpret: t(
              "Entre más alta, más holgura para pagar. Cerca de 1 vez significa que casi toda la utilidad se va en intereses.",
              "The higher it is, the more room to pay. Close to 1 time means almost all profit goes to interest.",
            ),
            mistake: t(
              "Dividir al revés (intereses ÷ EBIT) o usar la utilidad neta en lugar del EBIT.",
              "Dividing the other way around (interest ÷ EBIT) or using net income instead of EBIT.",
            ),
          },
        ],
        bullets: [
          t("Liquidez: falta efectivo a corto plazo, pero el negocio es viable.", "Liquidity: short-term cash shortage, but the business is viable."),
          t("Solvencia: la deuda supera lo que el negocio vale o puede generar.", "Solvency: debt exceeds what the business is worth or can generate."),
          t("Covenants: límites contractuales a razones financieras.", "Covenants: contractual limits on financial ratios."),
        ],
      },
      {
        heading: t("Reestructuración extrajudicial", "Out-of-court restructuring"),
        body: [
          t(
            "Si el negocio es viable, lo más rápido y barato suele ser negociar en privado con los acreedores. Del lado de la **deuda**: ampliar plazos o dar periodos de gracia (refinanciar), bajar la tasa, aplicar una **quita** (perdonar parte del saldo) o una **capitalización de deuda** (los acreedores cambian deuda por acciones y se vuelven socios).",
            "If the business is viable, the fastest and cheapest path is usually to negotiate privately with creditors. On the **debt** side: extending maturities or granting grace periods (refinancing), lowering the rate, applying a **haircut** (forgiving part of the balance) or a **debt-for-equity swap** (creditors exchange debt for shares and become partners).",
          ),
          t(
            "Del lado **operativo y de activos**: vender activos que no son clave para el negocio, recortar costos, cerrar unidades que pierden dinero y, si hace falta, conseguir **nuevo capital** de los accionistas. Los acreedores aceptan sacrificios cuando esperan recuperar más así que en una liquidación.",
            "On the **operating and asset** side: selling non-core assets, cutting costs, closing loss-making units and, if needed, raising **new equity** from shareholders. Creditors accept sacrifices when they expect to recover more this way than in a liquidation.",
          ),
          t(
            "Mini ejemplo: una empresa con deuda neta de $900 y EBITDA de $150 está en 6 veces, pero su covenant pide máximo 4 veces. Para cumplir necesita bajar la deuda a 4 × 150 = $600: puede vender activos, capitalizar $300 de deuda o combinar ambas.",
            "Mini example: a company with net debt of $900 and EBITDA of $150 is at 6 times, but its covenant requires at most 4 times. To comply it must cut debt to 4 × 150 = $600: it can sell assets, swap $300 of debt for equity or combine both.",
          ),
        ],
        formulas: [
          {
            name: t("Apalancamiento después de vender un activo", "Leverage after selling an asset"),
            expression: "Nueva razón = (Deuda neta − Dinero de la venta) ÷ (EBITDA − EBITDA del activo vendido)",
            variables: [
              { symbol: "Nueva razón", meaning: t("Deuda neta/EBITDA después de la venta, en \"veces\".", "Net debt/EBITDA after the sale, in \"times\".") },
              { symbol: "Deuda neta", meaning: t("La deuda neta antes de la venta, en pesos.", "Net debt before the sale, in pesos.") },
              { symbol: "Dinero de la venta", meaning: t("Lo que se recibe por el activo y se usa para pagar deuda, en pesos.", "What is received for the asset and used to repay debt, in pesos.") },
              { symbol: "EBITDA del activo vendido", meaning: t("El EBITDA que aportaba el activo y que se pierde al venderlo, en pesos.", "The EBITDA the asset contributed, which is lost when it is sold, in pesos.") },
            ],
            steps: [
              t("Resta a la deuda neta el dinero de la venta.", "Subtract the sale proceeds from net debt."),
              t("Resta al EBITDA lo que aportaba el activo vendido.", "Subtract the sold asset's contribution from EBITDA."),
              t("Divide la nueva deuda entre el nuevo EBITDA y compara con el covenant.", "Divide the new debt by the new EBITDA and compare with the covenant."),
            ],
            example: t(
              "Deuda neta $1,200 y EBITDA $240 (5.0 veces). Se vende un activo en $400 que aportaba $40 de EBITDA. Deuda: 1,200 − 400 = 800. EBITDA: 240 − 40 = 200. Razón: 800 ÷ 200 = **4.0 veces**.",
              "Net debt $1,200 and EBITDA $240 (5.0 times). An asset is sold for $400 that contributed $40 of EBITDA. Debt: 1,200 − 400 = 800. EBITDA: 240 − 40 = 200. Ratio: 800 ÷ 200 = **4.0 times**.",
            ),
            mistake: t(
              "Olvidar restar el EBITDA del activo vendido; exagera la mejora.",
              "Forgetting to subtract the sold asset's EBITDA; it exaggerates the improvement.",
            ),
          },
          {
            name: t("Capitalización de deuda: cuánto de la empresa reciben los acreedores", "Debt-for-equity swap: how much of the company creditors receive"),
            expression: "Acciones nuevas = Deuda convertida ÷ Precio por acción;  % acreedores = Acciones nuevas ÷ (Acciones existentes + Acciones nuevas) × 100",
            variables: [
              { symbol: "Deuda convertida", meaning: t("La deuda que los acreedores cambian por acciones, en pesos.", "The debt creditors exchange for shares, in pesos.") },
              { symbol: "Precio por acción", meaning: t("A cuánto se valúa cada acción nueva en el canje, en pesos.", "The value given to each new share in the swap, in pesos.") },
              { symbol: "Acciones existentes", meaning: t("Las acciones que ya tenían los dueños actuales.", "The shares the current owners already had.") },
              { symbol: "% acreedores", meaning: t("El porcentaje de la empresa que pasa a manos de los acreedores.", "The percentage of the company that passes to the creditors.") },
            ],
            steps: [
              t("Si no te dan las acciones nuevas, calcúlalas: deuda convertida ÷ precio por acción.", "If you are not given the new shares, compute them: debt converted ÷ price per share."),
              t("Suma acciones existentes + nuevas para obtener el total.", "Add existing + new shares to get the total."),
              t("Divide las acciones nuevas entre el total y multiplica por 100.", "Divide the new shares by the total and multiply by 100."),
            ],
            example: t(
              "Hay 40 millones de acciones; los acreedores convierten $300 millones a $10 por acción. Nuevas: 300 ÷ 10 = 30 millones. Total: 40 + 30 = 70 millones. Acreedores: 30 ÷ 70 = 0.4286 → **42.86 %**. Si esa deuda pagaba 10 % anual, se ahorran 300 × 0.10 = $30 millones de intereses al año.",
              "There are 40 million shares; creditors convert $300 million at $10 per share. New: 300 ÷ 10 = 30 million. Total: 40 + 30 = 70 million. Creditors: 30 ÷ 70 = 0.4286 → **42.86%**. If that debt paid 10% a year, $30 million of interest a year is saved.",
            ),
            mistake: t(
              "Dividir las acciones nuevas solo entre las acciones viejas en lugar del total.",
              "Dividing the new shares by the old shares only instead of the total.",
            ),
          },
        ],
        bullets: [
          t("Refinanciar: más plazo, periodo de gracia o menor tasa.", "Refinance: longer term, grace period or lower rate."),
          t("Quita: el acreedor perdona parte del saldo.", "Haircut: the creditor forgives part of the balance."),
          t("Capitalización: deuda a cambio de acciones; los accionistas actuales se diluyen.", "Debt-for-equity: debt in exchange for shares; existing shareholders are diluted."),
          t("Vender activos no estratégicos y recortar costos.", "Sell non-core assets and cut costs."),
        ],
      },
      {
        heading: t("Procesos judiciales y orden de pago", "Court processes and payment order"),
        body: [
          t(
            "Cuando no hay acuerdo privado, entra un juez. En México existe el **concurso mercantil**, con una etapa de **conciliación**, en la que un conciliador ayuda a que la empresa y sus acreedores firmen un convenio para seguir operando, y, si fracasa, una etapa de **quiebra**, en la que se venden los bienes para pagar. En Estados Unidos, el **Capítulo 11** permite reorganizarse con protección judicial.",
            "When there is no private agreement, a judge steps in. In Mexico there is the **concurso mercantil** (commercial insolvency proceeding), with a **conciliation** stage, in which a conciliator helps the company and its creditors sign an agreement to keep operating, and, if it fails, a **bankruptcy** stage, in which assets are sold to pay. In the United States, **Chapter 11** allows reorganization under court protection.",
          ),
          t(
            "Si se reparte lo que queda, se sigue un **orden de prelación**: primero cobran los acreedores con **garantía** (por ejemplo, un banco con hipoteca, hasta el valor de su garantía), luego los **quirografarios** (sin garantía, como muchos proveedores) y al final los **accionistas**, que normalmente reciben poco o nada. En la vida real hay créditos con trato especial, como los laborales y fiscales; aquí lo simplificamos.",
            "If what remains is distributed, a **priority order** is followed: first **secured** creditors are paid (for example, a bank with a mortgage, up to the value of its collateral), then **unsecured** creditors (with no collateral, such as many suppliers) and finally **shareholders**, who usually receive little or nothing. In real life there are claims with special treatment, such as labor and tax claims; here we simplify.",
          ),
          t(
            "Mini ejemplo: los bienes se venden en $500; la deuda garantizada es $300 y la quirografaria $400. Los garantizados cobran $300 completos; quedan $200 para $400 de quirografarios, que recuperan 50 %; los accionistas, $0.",
            "Mini example: the assets are sold for $500; secured debt is $300 and unsecured debt $400. Secured creditors collect the full $300; $200 is left for $400 of unsecured claims, which recover 50 %; shareholders get $0.",
          ),
        ],
        formulas: [
          {
            name: t("Reparto por orden de prelación (simplificado)", "Distribution by priority order (simplified)"),
            expression: "% Recuperación quirografarios = (Valor disponible − Deuda garantizada pagada) ÷ Deuda quirografaria × 100",
            variables: [
              { symbol: "Valor disponible", meaning: t("Lo que se obtiene al vender los bienes, en pesos.", "What is obtained from selling the assets, in pesos.") },
              { symbol: "Deuda garantizada pagada", meaning: t("Lo que cobran primero los acreedores con garantía (hasta lo que se les debe), en pesos.", "What secured creditors collect first (up to what they are owed), in pesos.") },
              { symbol: "Deuda quirografaria", meaning: t("Deuda sin garantía, como la de muchos proveedores, en pesos.", "Unsecured debt, such as many suppliers', in pesos.") },
              { symbol: "% Recuperación quirografarios", meaning: t("Qué porcentaje de lo que se les debe cobran los acreedores sin garantía (máximo 100 %).", "What percentage of what they are owed unsecured creditors collect (100% at most).") },
            ],
            steps: [
              t("Paga primero a los garantizados: lo que se les debe, si alcanza el valor disponible.", "First pay secured creditors: what they are owed, if the available value is enough."),
              t("Calcula lo que sobra: valor disponible − deuda garantizada pagada.", "Compute what is left: available value − secured debt paid."),
              t("Divide lo que sobra entre la deuda quirografaria y multiplica por 100 (si sobra más de lo que se debe, cobran 100 %).", "Divide what is left by the unsecured debt and multiply by 100 (if more is left than owed, they collect 100%)."),
              t("Lo que quede después de pagar todas las deudas es para los accionistas; casi siempre es $0.", "Whatever remains after paying all debts goes to shareholders; it is almost always $0."),
            ],
            example: t(
              "Los bienes se venden en $900; deuda garantizada $500 y quirografaria $1,000. Garantizados cobran $500. Sobran 900 − 500 = $400. Quirografarios: 400 ÷ 1,000 = 0.40 → **40 %**. Accionistas: $0.",
              "Assets are sold for $900; secured debt $500 and unsecured debt $1,000. Secured creditors collect $500. Left: 900 − 500 = $400. Unsecured: 400 ÷ 1,000 = 0.40 → **40%**. Shareholders: $0.",
            ),
            mistake: t(
              "Repartir todo a prorrata entre todas las deudas, ignorando que los garantizados cobran primero.",
              "Splitting everything pro rata across all debts, ignoring that secured creditors are paid first.",
            ),
          },
        ],
      },
    ],
    examples: [
      {
        title: t("Volver al covenant con venta de activos", "Getting back within the covenant with an asset sale"),
        problem: t(
          "Una empresa tiene deuda neta de $1,000 y EBITDA de $200. Su covenant exige deuda neta/EBITDA máximo de 4.5 veces. Vende una planta no estratégica en $300, usa todo para pagar deuda, y la planta generaba $30 de EBITDA. ¿Cumple ahora?",
          "A company has net debt of $1,000 and EBITDA of $200. Its covenant requires net debt/EBITDA of at most 4.5 times. It sells a non-core plant for $300, uses all of it to repay debt, and the plant generated $30 of EBITDA. Does it comply now?",
        ),
        steps: [
          t("Antes: 1,000 / 200 = 5.0 veces (incumple).", "Before: 1,000 / 200 = 5.0 times (breach)."),
          t("Deuda nueva: 1,000 − 300 = $700.", "New debt: 1,000 − 300 = $700."),
          t("EBITDA nuevo: 200 − 30 = $170 (se pierde el EBITDA de la planta).", "New EBITDA: 200 − 30 = $170 (the plant's EBITDA is lost)."),
          t("Después: 700 / 170 = 4.12 veces.", "After: 700 / 170 = 4.12 times."),
        ],
        result: t(
          "Con 4.12 veces ya cumple el límite de 4.5. Error común: olvidar restar el EBITDA del activo vendido y calcular 700 / 200 = 3.5.",
          "At 4.12 times it now meets the 4.5 limit. Common mistake: forgetting to subtract the sold asset's EBITDA and computing 700 / 200 = 3.5.",
        ),
      },
      {
        title: t("Capitalización de deuda", "Debt-for-equity swap"),
        problem: t(
          "Una empresa tiene 10 millones de acciones. Sus acreedores aceptan convertir $400 millones de deuda que pagaba 12 % anual en 15 millones de acciones nuevas. ¿Qué porcentaje de la empresa tendrán los acreedores y cuánto interés anual se ahorra?",
          "A company has 10 million shares. Its creditors agree to convert $400 million of debt that paid 12 % a year into 15 million new shares. What percentage of the company will the creditors own and how much annual interest is saved?",
        ),
        steps: [
          t("Acciones totales: 10 + 15 = 25 millones.", "Total shares: 10 + 15 = 25 million."),
          t("Participación de acreedores: 15 / 25 = 60 %.", "Creditors' stake: 15 / 25 = 60 %."),
          t("Interés ahorrado: 400 × 0.12 = $48 millones al año.", "Interest saved: 400 × 0.12 = $48 million a year."),
        ],
        result: t(
          "Los acreedores pasan a ser dueños del 60 % y la empresa se ahorra $48 millones de intereses al año; los accionistas originales bajan al 40 %.",
          "Creditors become owners of 60 % and the company saves $48 million of interest a year; the original shareholders drop to 40 %.",
        ),
      },
    ],
    keyPoints: [
      t("Liquidez es falta de efectivo a tiempo; solvencia es deuda mayor que la capacidad del negocio.", "Liquidity is a lack of timely cash; solvency is debt larger than the business's capacity."),
      t("Deuda neta/EBITDA y EBIT/intereses son las razones clave de los covenants.", "Net debt/EBITDA and EBIT/interest are the key covenant ratios."),
      t("Herramientas privadas: refinanciar, quita, capitalización de deuda y venta de activos.", "Private tools: refinancing, haircut, debt-for-equity swap and asset sales."),
      t("En México, el concurso mercantil tiene conciliación y, si falla, quiebra.", "In Mexico, the concurso mercantil has conciliation and, if it fails, bankruptcy."),
      t("Orden simplificado: garantizados, quirografarios y al final accionistas.", "Simplified order: secured, unsecured and shareholders last."),
    ],
    normativeNote: NOTE_RESTRUCTURING,
    exerciseIds: ['FIN-17-E1', 'FIN-17-E2', 'FIN-17-E3', 'FIN-17-E4', 'FIN-17-E5', 'FIN-17-E6'],
  },
]

export const exercises: Exercise[] = [
  // ═════════════════════════ FIN-13 ═════════════════════════
  {
    id: 'FIN-13-E1',
    level: 4,
    module: 'FIN-13',
    kind: 'mcq',
    flavor: 'concept',
    prompt: t(
      "Ya calculaste el valor de la empresa (EV) de una compañía con un DCF descontado al WACC. ¿Qué haces para obtener el valor que corresponde a los accionistas?",
      "You have computed a company's enterprise value (EV) with a DCF discounted at the WACC. What do you do to get the value that belongs to shareholders?",
    ),
    options: [
      { id: 'FIN-13-E1-a', text: t("Restar la deuda neta (deuda con costo menos efectivo)", "Subtract net debt (interest-bearing debt minus cash)") },
      { id: 'FIN-13-E1-b', text: t("Sumar la deuda, porque también es financiamiento", "Add debt, because it is also financing") },
      { id: 'FIN-13-E1-c', text: t("Restar el capital contable de los libros", "Subtract book equity") },
      { id: 'FIN-13-E1-d', text: t("Nada: el EV ya es el valor de los accionistas", "Nothing: EV is already the shareholders' value") },
    ],
    correctOptionId: 'FIN-13-E1-a',
    explanation: t(
      "El FCFF descontado al WACC da el valor para todos los financiadores (EV). A los accionistas les queda lo que sobra después de los acreedores: EV − deuda neta. Error común: tomar el EV como si fuera el valor del capital, lo que sobrevalúa la acción en empresas endeudadas.",
      "FCFF discounted at the WACC gives the value for all providers of capital (EV). Shareholders keep what remains after lenders: EV − net debt. Common mistake: treating EV as if it were equity value, which overvalues the share in indebted companies.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'business-valuation',
  },
  {
    id: 'FIN-13-E2',
    level: 4,
    module: 'FIN-13',
    kind: 'numeric',
    flavor: 'case',
    context: t(
      "Datos de un año proyectado (millones de pesos): EBIT 200, tasa de impuestos ilustrativa 30 %, depreciación y amortización 40, inversión en activos fijos (CapEx) 60 y aumento de capital de trabajo 10.",
      "Data for a projected year (millions of pesos): EBIT 200, illustrative tax rate 30 %, depreciation and amortization 40, capital expenditure (CapEx) 60 and increase in working capital 10.",
    ),
    prompt: t(
      "Calcula el flujo libre de efectivo de la empresa (FCFF) de ese año, en millones de pesos.",
      "Compute the free cash flow to the firm (FCFF) for that year, in millions of pesos.",
    ),
    answer: 110,
    unit: 'MXN',
    decimals: 0,
    tolerance: { abs: 0.5 },
    explanation: t(
      "FCFF = EBIT × (1 − t) + D&A − CapEx − ΔCT = 200 × 0.70 + 40 − 60 − 10 = 140 + 40 − 70 = 110. Error común: restar la depreciación en lugar de sumarla (no es salida de efectivo) o usar el EBIT sin quitar impuestos.",
      "FCFF = EBIT × (1 − t) + D&A − CapEx − ΔWC = 200 × 0.70 + 40 − 60 − 10 = 140 + 40 − 70 = 110. Common mistake: subtracting depreciation instead of adding it back (it is not a cash outflow) or using EBIT without taking out taxes.",
    ),
    difficulty: 2,
    points: 15,
    competency: 'business-valuation',
  },
  {
    id: 'FIN-13-E3',
    level: 4,
    module: 'FIN-13',
    kind: 'numeric',
    flavor: 'case',
    context: t(
      "El FCFF del último año proyectado (año 5) es de $50 millones. Se supone que después crecerá 3 % anual para siempre y el WACC es 10 %.",
      "FCFF for the last projected year (year 5) is $50 million. It is assumed to grow 3 % a year forever afterwards and the WACC is 10 %.",
    ),
    prompt: t(
      "Calcula el valor terminal al final del año 5 con el modelo de crecimiento perpetuo (millones de pesos, 2 decimales).",
      "Compute the terminal value at the end of year 5 with the perpetual growth model (millions of pesos, 2 decimals).",
    ),
    answer: 735.71,
    unit: 'MXN',
    decimals: 2,
    tolerance: { abs: 0.05 },
    explanation: t(
      "VT = FCF₅ × (1 + g) / (WACC − g) = 50 × 1.03 / (0.10 − 0.03) = 51.5 / 0.07 = 735.71. Error común: olvidar crecer el flujo un año (50 / 0.07 = 714.29) o dividir entre el WACC completo en lugar de WACC − g.",
      "TV = FCF₅ × (1 + g) / (WACC − g) = 50 × 1.03 / (0.10 − 0.03) = 51.5 / 0.07 = 735.71. Common mistake: forgetting to grow the flow one year (50 / 0.07 = 714.29) or dividing by the full WACC instead of WACC − g.",
    ),
    difficulty: 2,
    points: 15,
    competency: 'business-valuation',
  },
  {
    id: 'FIN-13-E4',
    level: 4,
    module: 'FIN-13',
    kind: 'truefalse',
    flavor: 'concept',
    prompt: t(
      "En el modelo de Gordon para el valor terminal, una empresa que crece muy rápido puede usar una tasa de crecimiento perpetuo mayor que su WACC.",
      "In the Gordon model for terminal value, a fast-growing company can use a perpetual growth rate higher than its WACC.",
    ),
    answer: false,
    explanation: t(
      "Falso. Si g ≥ WACC, el denominador (WACC − g) es cero o negativo y la fórmula da un valor infinito o sin sentido. Además, nadie crece para siempre más rápido que la economía. El crecimiento alto se modela en los años explícitos; la perpetuidad usa una g modesta. Error común: copiar el crecimiento de los primeros años a la perpetuidad.",
      "False. If g ≥ WACC, the denominator (WACC − g) is zero or negative and the formula gives an infinite or meaningless value. Besides, no one grows faster than the economy forever. High growth is modeled in the explicit years; the perpetuity uses a modest g. Common mistake: copying early-year growth into the perpetuity.",
    ),
    difficulty: 2,
    points: 10,
    competency: 'business-valuation',
  },
  {
    id: 'FIN-13-E5',
    level: 4,
    module: 'FIN-13',
    kind: 'fields',
    flavor: 'case',
    context: t(
      "Una cadena de restaurantes tiene EBITDA de $80 millones, deuda con costo de $150 millones, efectivo de $30 millones y 20 millones de acciones. Empresas comparables cotizan a 6 veces EV/EBITDA.",
      "A restaurant chain has EBITDA of $80 million, interest-bearing debt of $150 million, cash of $30 million and 20 million shares. Comparable companies trade at 6 times EV/EBITDA.",
    ),
    prompt: t(
      "Estima el valor de la empresa (EV), el valor del capital y el valor por acción de la cadena de restaurantes.",
      "Estimate the restaurant chain's enterprise value (EV), equity value and value per share.",
    ),
    fields: [
      { id: 'f1', label: t("Valor de la empresa, EV (millones $)", "Enterprise value, EV ($ millions)"), answer: 480, unit: 'MXN', tolerance: { abs: 0.5 } },
      { id: 'f2', label: t("Valor del capital (millones $)", "Equity value ($ millions)"), answer: 360, unit: 'MXN', tolerance: { abs: 0.5 } },
      { id: 'f3', label: t("Valor por acción ($)", "Value per share ($)"), answer: 18, unit: 'MXN', tolerance: { abs: 0.01 } },
    ],
    explanation: t(
      "EV = 80 × 6 = 480. Deuda neta = 150 − 30 = 120. Capital = 480 − 120 = 360. Por acción = 360 / 20 = $18. Error común: restar la deuda bruta (150) en vez de la neta, lo que da 330 y $16.50 por acción.",
      "EV = 80 × 6 = 480. Net debt = 150 − 30 = 120. Equity = 480 − 120 = 360. Per share = 360 / 20 = $18. Common mistake: subtracting gross debt (150) instead of net debt, giving 330 and $16.50 per share.",
    ),
    difficulty: 2,
    points: 20,
    competency: 'business-valuation',
  },
  {
    id: 'FIN-13-E6',
    level: 4,
    module: 'FIN-13',
    kind: 'classify',
    flavor: 'concept',
    prompt: t(
      "Clasifica cada procedimiento según el enfoque de valuación al que pertenece.",
      "Classify each procedure by the valuation approach it belongs to.",
    ),
    categories: [
      { id: 'FIN-13-E6-c1', label: t("Intrínseco (flujos descontados)", "Intrinsic (discounted cash flows)") },
      { id: 'FIN-13-E6-c2', label: t("Relativo (múltiplos)", "Relative (multiples)") },
      { id: 'FIN-13-E6-c3', label: t("Basado en activos", "Asset-based") },
    ],
    items: [
      { id: 'FIN-13-E6-i1', label: t("Aplicar el EV/EBITDA promedio de empresas listadas del mismo sector", "Apply the average EV/EBITDA of listed companies in the same sector"), correctCategoryId: 'FIN-13-E6-c2' },
      { id: 'FIN-13-E6-i2', label: t("Proyectar el FCFF cinco años y descontarlo al WACC", "Project FCFF for five years and discount it at the WACC"), correctCategoryId: 'FIN-13-E6-c1' },
      { id: 'FIN-13-E6-i3', label: t("Sumar el valor de mercado de cada activo y restar todos los pasivos", "Add up the market value of each asset and subtract all liabilities"), correctCategoryId: 'FIN-13-E6-c3' },
      { id: 'FIN-13-E6-i4', label: t("Calcular un valor terminal con crecimiento perpetuo", "Compute a terminal value with perpetual growth"), correctCategoryId: 'FIN-13-E6-c1' },
      { id: 'FIN-13-E6-i5', label: t("Usar el precio pagado en compras recientes de empresas similares", "Use the price paid in recent purchases of similar companies"), correctCategoryId: 'FIN-13-E6-c2' },
      { id: 'FIN-13-E6-i6', label: t("Estimar cuánto se obtendría al vender por separado los bienes de una empresa que cerrará", "Estimate how much would be obtained by selling separately the assets of a company that will close"), correctCategoryId: 'FIN-13-E6-c3' },
    ],
    explanation: t(
      "Intrínseco: proyectar y descontar flujos, incluido el valor terminal. Relativo: múltiplos de comparables listados o de transacciones precedentes. Basado en activos: valor de los bienes menos pasivos, útil en liquidaciones o empresas de activos. Error común: poner las transacciones precedentes en \"intrínseco\" porque son precios reales; siguen siendo una comparación.",
      "Intrinsic: projecting and discounting flows, including terminal value. Relative: multiples from listed comparables or precedent transactions. Asset-based: value of assets less liabilities, useful in liquidations or asset-heavy companies. Common mistake: putting precedent transactions under \"intrinsic\" because they are real prices; they are still a comparison.",
    ),
    difficulty: 2,
    points: 15,
    competency: 'business-valuation',
  },

  // ═════════════════════════ FIN-14 ═════════════════════════
  {
    id: 'FIN-14-E1',
    level: 4,
    module: 'FIN-14',
    kind: 'mcq',
    flavor: 'concept',
    prompt: t(
      "En un modelo financiero, ¿cuál es la mejor manera de incluir el supuesto de que las ventas crecerán 8 % anual?",
      "In a financial model, what is the best way to include the assumption that sales will grow 8 % a year?",
    ),
    options: [
      { id: 'FIN-14-E1-a', text: t("Escribir =B5*1.08 directamente en cada celda de ventas proyectadas", "Type =B5*1.08 directly in each projected sales cell") },
      { id: 'FIN-14-E1-b', text: t("Capturar 8 % en una celda de supuestos etiquetada y hacer que las fórmulas la referencien", "Enter 8 % in a labeled assumptions cell and have formulas reference it") },
      { id: 'FIN-14-E1-c', text: t("Calcular las ventas a mano y pegarlas como valores", "Compute sales by hand and paste them as values") },
      { id: 'FIN-14-E1-d', text: t("Anotarlo en un comentario y ajustar cada año manualmente", "Write it in a comment and adjust each year manually") },
    ],
    correctOptionId: 'FIN-14-E1-b',
    explanation: t(
      "Los supuestos van en un solo lugar, etiquetados, y las fórmulas los referencian: así puedes cambiar el 8 % en una celda y todo el modelo se actualiza. Escribir 1.08 dentro de la fórmula (hardcode) o pegar valores esconde el supuesto y provoca errores cuando cambia. Error común: pensar que el hardcode es más rápido; lo es solo la primera vez.",
      "Assumptions go in one place, labeled, and formulas reference them: that way you can change 8 % in one cell and the whole model updates. Typing 1.08 inside the formula (a hardcode) or pasting values hides the assumption and causes errors when it changes. Common mistake: thinking a hardcode is faster; it is only the first time.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'financial-modeling',
  },
  {
    id: 'FIN-14-E2',
    level: 4,
    module: 'FIN-14',
    kind: 'fields',
    flavor: 'statement',
    context: t(
      "Supuestos de un modelo (miles de pesos): ventas del año actual 2,000; crecimiento 8 %; margen bruto 40 % de ventas; gastos de operación 500; sin deuda; impuesto ilustrativo 30 %.",
      "Model assumptions (thousands of pesos): current-year sales 2,000; growth 8 %; gross margin 40 % of sales; operating expenses 500; no debt; illustrative tax 30 %.",
    ),
    prompt: t(
      "Proyecta para el año siguiente las ventas, la utilidad de operación (EBIT) y la utilidad neta.",
      "Project next year's sales, operating profit (EBIT) and net income.",
    ),
    fields: [
      { id: 'f1', label: t("Ventas proyectadas (miles $)", "Projected sales ($ thousands)"), answer: 2160, unit: 'MXN', tolerance: { abs: 0.5 } },
      { id: 'f2', label: t("Utilidad de operación, EBIT (miles $)", "Operating profit, EBIT ($ thousands)"), answer: 364, unit: 'MXN', tolerance: { abs: 0.5 } },
      { id: 'f3', label: t("Utilidad neta (miles $)", "Net income ($ thousands)"), answer: 254.8, unit: 'MXN', tolerance: { abs: 0.5 } },
    ],
    explanation: t(
      "Ventas = 2,000 × 1.08 = 2,160. Utilidad bruta = 2,160 × 0.40 = 864. EBIT = 864 − 500 = 364. Sin intereses, impuesto = 364 × 0.30 = 109.2 y utilidad neta = 254.8. Error común: aplicar el margen bruto a las ventas del año actual (2,000) en vez de a las proyectadas.",
      "Sales = 2,000 × 1.08 = 2,160. Gross profit = 2,160 × 0.40 = 864. EBIT = 864 − 500 = 364. With no interest, tax = 364 × 0.30 = 109.2 and net income = 254.8. Common mistake: applying the gross margin to current-year sales (2,000) instead of projected sales.",
    ),
    difficulty: 2,
    points: 15,
    competency: 'financial-modeling',
  },
  {
    id: 'FIN-14-E3',
    level: 4,
    module: 'FIN-14',
    kind: 'numeric',
    flavor: 'case',
    context: t(
      "Las ventas a crédito proyectadas de una empresa para el próximo año son $3,650 (miles) y se espera que los clientes paguen en promedio a 40 días. Usa un año de 365 días.",
      "A company's projected credit sales for next year are $3,650 (thousands) and customers are expected to pay in 40 days on average. Use a 365-day year.",
    ),
    prompt: t(
      "¿Qué saldo de cuentas por cobrar debe proyectar el modelo al cierre del año? Responde en miles de pesos.",
      "What accounts receivable balance should the model project at year-end? Answer in thousands of pesos.",
    ),
    answer: 400,
    unit: 'MXN',
    decimals: 0,
    tolerance: { abs: 0.5 },
    explanation: t(
      "Cuentas por cobrar = Ventas × Días de cobro / 365 = 3,650 × 40 / 365 = 400. Error común: dividir entre 12 (meses) o multiplicar ventas por 40 % en lugar de usar días.",
      "Accounts receivable = Sales × Collection days / 365 = 3,650 × 40 / 365 = 400. Common mistake: dividing by 12 (months) or multiplying sales by 40 % instead of using days.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'financial-modeling',
  },
  {
    id: 'FIN-14-E4',
    level: 4,
    module: 'FIN-14',
    kind: 'multi',
    flavor: 'concept',
    prompt: t(
      "¿Cuáles de estas conexiones entre los tres estados financieros de un modelo son correctas? Selecciona todas las que apliquen.",
      "Which of these links between a model's three financial statements are correct? Select all that apply.",
    ),
    options: [
      { id: 'FIN-14-E4-a', text: t("La utilidad neta se suma a las utilidades retenidas del balance", "Net income is added to retained earnings on the balance sheet") },
      { id: 'FIN-14-E4-b', text: t("El efectivo final del estado de flujos es el efectivo del balance", "The cash flow statement's ending cash is the balance sheet's cash") },
      { id: 'FIN-14-E4-c', text: t("La depreciación se vuelve a sumar en el flujo de efectivo y reduce el activo fijo neto", "Depreciation is added back in the cash flow and reduces net fixed assets") },
      { id: 'FIN-14-E4-d', text: t("Los dividendos pagados se restan como gasto en el estado de resultados", "Dividends paid are subtracted as an expense on the income statement") },
      { id: 'FIN-14-E4-e', text: t("Si las fórmulas están bien escritas, no hace falta revisar que el balance cuadre", "If formulas are well written, there is no need to check that the balance sheet balances") },
    ],
    correctOptionIds: ['FIN-14-E4-a', 'FIN-14-E4-b', 'FIN-14-E4-c'],
    explanation: t(
      "La utilidad neta alimenta las utilidades retenidas, el efectivo final conecta flujo y balance, y la depreciación se suma en el flujo (no es salida de dinero) y reduce el activo fijo. Los dividendos no son gasto: se restan de utilidades retenidas y salen en el flujo de financiamiento. Y el check de balance siempre se incluye. Error común: tratar los dividendos como gasto.",
      "Net income feeds retained earnings, ending cash links cash flow and balance sheet, and depreciation is added back in the cash flow (it is not a cash outflow) and reduces fixed assets. Dividends are not an expense: they are subtracted from retained earnings and appear in financing cash flow. And the balance check is always included. Common mistake: treating dividends as an expense.",
    ),
    difficulty: 2,
    points: 15,
    competency: 'financial-modeling',
  },
  {
    id: 'FIN-14-E5',
    level: 4,
    module: 'FIN-14',
    kind: 'truefalse',
    flavor: 'concept',
    prompt: t(
      "Un análisis de sensibilidad cambia una variable (o dos, en una tabla) mientras mantiene fijas las demás, para ver cuánto se mueve el resultado del modelo.",
      "A sensitivity analysis changes one variable (or two, in a table) while holding the others fixed, to see how much the model's result moves.",
    ),
    answer: true,
    explanation: t(
      "Verdadero. Así se detectan los supuestos críticos. Un escenario, en cambio, mueve varios supuestos a la vez con una historia coherente (por ejemplo, recesión: menos ventas y más días de cobro). Error común: confundir sensibilidad con escenarios.",
      "True. This is how critical assumptions are detected. A scenario, by contrast, moves several assumptions at once with a coherent story (for example, recession: lower sales and more collection days). Common mistake: confusing sensitivity with scenarios.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'financial-modeling',
  },
  {
    id: 'FIN-14-E6',
    level: 4,
    module: 'FIN-14',
    kind: 'numeric',
    flavor: 'case',
    context: t(
      "En el balance proyectado, las utilidades retenidas iniciales son $1,200 (miles). La utilidad neta proyectada es $300 y la política es repartir 40 % de la utilidad como dividendos.",
      "In the projected balance sheet, opening retained earnings are $1,200 (thousands). Projected net income is $300 and the policy is to pay out 40 % of earnings as dividends.",
    ),
    prompt: t(
      "¿Cuál es el saldo final proyectado de utilidades retenidas? Responde en miles de pesos.",
      "What is the projected ending balance of retained earnings? Answer in thousands of pesos.",
    ),
    answer: 1380,
    unit: 'MXN',
    decimals: 0,
    tolerance: { abs: 0.5 },
    explanation: t(
      "Dividendos = 300 × 0.40 = 120. Utilidades retenidas finales = 1,200 + 300 − 120 = 1,380. Error común: restar 40 % de las utilidades retenidas totales o sumar la utilidad completa sin descontar dividendos (1,500).",
      "Dividends = 300 × 0.40 = 120. Ending retained earnings = 1,200 + 300 − 120 = 1,380. Common mistake: subtracting 40 % of total retained earnings or adding the full profit without deducting dividends (1,500).",
    ),
    difficulty: 1,
    points: 10,
    competency: 'financial-modeling',
  },

  // ═════════════════════════ FIN-15 ═════════════════════════
  {
    id: 'FIN-15-E1',
    level: 4,
    module: 'FIN-15',
    kind: 'classify',
    flavor: 'concept',
    prompt: t(
      "Clasifica cada operación como fusión o adquisición horizontal, vertical o de conglomerado.",
      "Classify each deal as a horizontal, vertical or conglomerate merger or acquisition.",
    ),
    categories: [
      { id: 'FIN-15-E1-c1', label: t("Horizontal", "Horizontal") },
      { id: 'FIN-15-E1-c2', label: t("Vertical", "Vertical") },
      { id: 'FIN-15-E1-c3', label: t("Conglomerado", "Conglomerate") },
    ],
    items: [
      { id: 'FIN-15-E1-i1', label: t("Una cadena de panaderías compra otra cadena de panaderías", "A bakery chain buys another bakery chain"), correctCategoryId: 'FIN-15-E1-c1' },
      { id: 'FIN-15-E1-i2', label: t("Una cervecera compra la fábrica que le hace las latas", "A brewery buys the factory that makes its cans"), correctCategoryId: 'FIN-15-E1-c2' },
      { id: 'FIN-15-E1-i3', label: t("Una cementera compra una cadena de hoteles de playa", "A cement company buys a beach hotel chain"), correctCategoryId: 'FIN-15-E1-c3' },
      { id: 'FIN-15-E1-i4', label: t("Un banco se fusiona con otro banco", "A bank merges with another bank"), correctCategoryId: 'FIN-15-E1-c1' },
      { id: 'FIN-15-E1-i5', label: t("Una cadena de supermercados compra la empresa de camiones que le distribuye", "A supermarket chain buys the trucking company that distributes for it"), correctCategoryId: 'FIN-15-E1-c2' },
      { id: 'FIN-15-E1-i6', label: t("Una telefónica compra una empresa de alimentos empacados", "A telecom company buys a packaged food company"), correctCategoryId: 'FIN-15-E1-c3' },
    ],
    explanation: t(
      "Horizontal: competidores del mismo giro (panaderías, bancos). Vertical: proveedor o eslabón de la cadena (latas para la cervecera, transporte para el súper). Conglomerado: giros sin relación (cemento y hoteles, telefonía y alimentos). Error común: llamar horizontal a la compra del distribuidor porque \"son del mismo grupo\".",
      "Horizontal: competitors in the same industry (bakeries, banks). Vertical: supplier or link in the chain (cans for the brewery, transport for the supermarket). Conglomerate: unrelated industries (cement and hotels, telecom and food). Common mistake: calling the purchase of the distributor horizontal because \"they are in the same group\".",
    ),
    difficulty: 1,
    points: 10,
    competency: 'mergers-acquisitions',
  },
  {
    id: 'FIN-15-E2',
    level: 4,
    module: 'FIN-15',
    kind: 'numeric',
    flavor: 'case',
    context: t(
      "La acción de una empresa objetivo cotiza a $40. Un comprador lanza una oferta pública de $50 por acción.",
      "A target company's stock trades at $40. An acquirer launches a public tender offer of $50 per share.",
    ),
    prompt: t(
      "¿Qué prima de control, en porcentaje sobre el precio de mercado, ofrece el comprador?",
      "What control premium, as a percentage over the market price, is the acquirer offering?",
    ),
    answer: 25,
    unit: '%',
    decimals: 0,
    tolerance: { abs: 0.1 },
    explanation: t(
      "Prima = (50 − 40) / 40 = 10 / 40 = 25 %. La base es el precio de mercado antes de la oferta. Error común: dividir entre el precio ofrecido (10 / 50 = 20 %).",
      "Premium = (50 − 40) / 40 = 10 / 40 = 25 %. The base is the market price before the offer. Common mistake: dividing by the offer price (10 / 50 = 20 %).",
    ),
    difficulty: 1,
    points: 10,
    competency: 'mergers-acquisitions',
  },
  {
    id: 'FIN-15-E3',
    level: 4,
    module: 'FIN-15',
    kind: 'fields',
    flavor: 'case',
    context: t(
      "Una empresa de software vale $800 millones por sí sola. Su comprador estima sinergias con valor presente de $150 millones y acuerda pagar $880 millones.",
      "A software company is worth $800 million on its own. Its acquirer estimates synergies with a present value of $150 million and agrees to pay $880 million.",
    ),
    prompt: t(
      "Calcula la prima pagada, el VPN de la compra para el comprador y el valor total creado por la operación (millones de pesos).",
      "Compute the premium paid, the acquisition's NPV for the acquirer and the total value created by the deal (millions of pesos).",
    ),
    fields: [
      { id: 'f1', label: t("Prima pagada (millones $)", "Premium paid ($ millions)"), answer: 80, unit: 'MXN', tolerance: { abs: 0.5 } },
      { id: 'f2', label: t("VPN para el comprador (millones $)", "NPV for the acquirer ($ millions)"), answer: 70, unit: 'MXN', tolerance: { abs: 0.5 } },
      { id: 'f3', label: t("Valor total creado (millones $)", "Total value created ($ millions)"), answer: 150, unit: 'MXN', tolerance: { abs: 0.5 } },
    ],
    explanation: t(
      "Prima = 880 − 800 = 80. VPN comprador = 800 + 150 − 880 = 70. Valor total creado = sinergias = 150, que se reparten 80 al vendedor (prima) y 70 al comprador. Error común: pensar que el valor creado es 880 − 800 o que el comprador se queda con todas las sinergias.",
      "Premium = 880 − 800 = 80. Acquirer NPV = 800 + 150 − 880 = 70. Total value created = synergies = 150, split 80 to the seller (premium) and 70 to the acquirer. Common mistake: thinking the value created is 880 − 800 or that the acquirer keeps all synergies.",
    ),
    difficulty: 2,
    points: 15,
    competency: 'mergers-acquisitions',
  },
  {
    id: 'FIN-15-E4',
    level: 4,
    module: 'FIN-15',
    kind: 'mcq',
    flavor: 'concept',
    prompt: t(
      "Un comprador cuya acción cotiza a 18 veces utilidad paga una adquisición solo con acciones nuevas. Sin sinergias, ¿en qué caso aumenta su utilidad por acción (operación acretiva)?",
      "An acquirer whose stock trades at 18 times earnings pays for an acquisition only with new shares. Without synergies, in which case does its earnings per share increase (accretive deal)?",
    ),
    options: [
      { id: 'FIN-15-E4-a', text: t("Cuando paga por la objetivo un múltiplo P/U mayor que 18", "When it pays a P/E multiple above 18 for the target") },
      { id: 'FIN-15-E4-b', text: t("Cuando paga por la objetivo un múltiplo P/U menor que 18", "When it pays a P/E multiple below 18 for the target") },
      { id: 'FIN-15-E4-c', text: t("Siempre, porque la utilidad combinada es mayor", "Always, because combined earnings are higher") },
      { id: 'FIN-15-E4-d', text: t("Nunca: pagar con acciones siempre diluye la UPA", "Never: paying with shares always dilutes EPS") },
    ],
    correctOptionId: 'FIN-15-E4-b',
    explanation: t(
      "Al pagar con acciones, el comprador \"cambia\" sus utilidades valuadas a 18 veces por utilidades de la objetivo. Si las compra más baratas (P/U menor que 18), recibe más utilidad por cada acción emitida y la UPA sube. Error común: creer que más utilidad total siempre sube la UPA; también aumentan las acciones.",
      "When paying with shares, the acquirer \"swaps\" its earnings valued at 18 times for the target's earnings. If it buys them cheaper (P/E below 18), it gets more earnings per share issued and EPS rises. Common mistake: believing more total earnings always raise EPS; the number of shares also grows.",
    ),
    difficulty: 2,
    points: 15,
    competency: 'mergers-acquisitions',
  },
  {
    id: 'FIN-15-E5',
    level: 4,
    module: 'FIN-15',
    kind: 'numeric',
    flavor: 'case',
    context: t(
      "La compradora tiene utilidad neta de $200 millones, 100 millones de acciones y su acción vale $40. La objetivo gana $50 millones. Se pagan $600 millones con acciones nuevas de la compradora a $40 cada una, y se esperan sinergias de $10 millones después de impuestos al año.",
      "The acquirer has net income of $200 million, 100 million shares and its stock is worth $40. The target earns $50 million. $600 million is paid with new acquirer shares at $40 each, and synergies of $10 million after tax per year are expected.",
    ),
    prompt: t(
      "Calcula la utilidad por acción (UPA) de la empresa combinada, en pesos con 2 decimales.",
      "Compute the combined company's earnings per share (EPS), in pesos with 2 decimals.",
    ),
    answer: 2.26,
    unit: 'MXN',
    decimals: 2,
    tolerance: { abs: 0.006 },
    explanation: t(
      "Acciones nuevas = 600 / 40 = 15 millones; total = 115 millones. Utilidad combinada = 200 + 50 + 10 = 260. UPA = 260 / 115 = $2.26 (antes era 200 / 100 = $2.00): acretiva. Error común: olvidar las acciones nuevas y dividir entre 100 (da $2.60).",
      "New shares = 600 / 40 = 15 million; total = 115 million. Combined earnings = 200 + 50 + 10 = 260. EPS = 260 / 115 = $2.26 (it was 200 / 100 = $2.00): accretive. Common mistake: forgetting the new shares and dividing by 100 (gives $2.60).",
    ),
    difficulty: 3,
    points: 20,
    competency: 'mergers-acquisitions',
  },
  {
    id: 'FIN-15-E6',
    level: 4,
    module: 'FIN-15',
    kind: 'truefalse',
    flavor: 'interpret',
    prompt: t(
      "Aunque una adquisición genere sinergias reales, los accionistas del comprador pueden perder valor si la prima pagada es mayor que esas sinergias.",
      "Even if an acquisition generates real synergies, the acquirer's shareholders can lose value if the premium paid is greater than those synergies.",
    ),
    answer: true,
    explanation: t(
      "Verdadero. VPN del comprador = valor de la objetivo + sinergias − precio = sinergias − prima. Si la prima supera las sinergias, el VPN es negativo: el vendedor se queda con todo el valor y algo más. Es la \"maldición del ganador\" de las subastas competidas. Error común: aprobar una compra solo porque \"tiene sinergias\".",
      "True. Acquirer NPV = target value + synergies − price = synergies − premium. If the premium exceeds synergies, NPV is negative: the seller takes all the value and more. It is the \"winner's curse\" of competitive auctions. Common mistake: approving a deal just because it \"has synergies\".",
    ),
    difficulty: 1,
    points: 10,
    competency: 'mergers-acquisitions',
  },

  // ═════════════════════════ FIN-16 ═════════════════════════
  {
    id: 'FIN-16-E1',
    level: 4,
    module: 'FIN-16',
    kind: 'mcq',
    flavor: 'interpret',
    context: t(
      "En unos meses, el tipo de cambio pasa de 18 a 20 pesos por dólar.",
      "Over a few months, the exchange rate goes from 18 to 20 pesos per dollar.",
    ),
    prompt: t(
      "¿Qué ocurrió con el peso y quién se beneficia directamente de ese movimiento?",
      "What happened to the peso and who benefits directly from that move?",
    ),
    options: [
      { id: 'FIN-16-E1-a', text: t("El peso se apreció; se beneficia quien importa maquinaria pagada en dólares", "The peso appreciated; whoever imports machinery paid in dollars benefits") },
      { id: 'FIN-16-E1-b', text: t("El peso se depreció; se beneficia quien tiene deudas en dólares", "The peso depreciated; whoever has dollar debts benefits") },
      { id: 'FIN-16-E1-c', text: t("El peso se depreció; se beneficia el exportador que cobra en dólares", "The peso depreciated; the exporter that collects in dollars benefits") },
      { id: 'FIN-16-E1-d', text: t("El peso se apreció; se beneficia el exportador que cobra en dólares", "The peso appreciated; the exporter that collects in dollars benefits") },
    ],
    correctOptionId: 'FIN-16-E1-c',
    explanation: t(
      "Si cada dólar cuesta más pesos, el peso perdió valor: se depreció. El exportador convierte sus dólares en más pesos y gana; el importador y quien debe dólares necesitan más pesos para pagar y pierden. Error común: ver que \"el número subió\" y pensar que el peso se fortaleció.",
      "If each dollar costs more pesos, the peso lost value: it depreciated. The exporter converts its dollars into more pesos and wins; the importer and whoever owes dollars need more pesos to pay and lose. Common mistake: seeing that \"the number went up\" and thinking the peso strengthened.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'international-finance',
  },
  {
    id: 'FIN-16-E2',
    level: 4,
    module: 'FIN-16',
    kind: 'numeric',
    flavor: 'case',
    context: t(
      "Datos hipotéticos: spot 17.50 pesos por dólar; tasa de interés a un año en pesos 10 % y en dólares 5 %.",
      "Hypothetical data: spot 17.50 pesos per dollar; one-year interest rate in pesos 10 % and in dollars 5 %.",
    ),
    prompt: t(
      "Con la paridad de tasas de interés cubierta, calcula el tipo de cambio forward a un año (pesos por dólar, 2 decimales).",
      "Using covered interest rate parity, compute the one-year forward exchange rate (pesos per dollar, 2 decimals).",
    ),
    answer: 18.33,
    unit: 'none',
    decimals: 2,
    tolerance: { abs: 0.01 },
    explanation: t(
      "F = S × (1 + i_MXN) / (1 + i_USD) = 17.50 × 1.10 / 1.05 = 19.25 / 1.05 = 18.33. El forward es mayor que el spot porque la tasa en pesos es más alta. Error común: invertir la fracción (17.50 × 1.05 / 1.10 = 16.70), lo que daría un peso más fuerte a plazo.",
      "F = S × (1 + i_MXN) / (1 + i_USD) = 17.50 × 1.10 / 1.05 = 19.25 / 1.05 = 18.33. The forward is above the spot because the peso rate is higher. Common mistake: inverting the fraction (17.50 × 1.05 / 1.10 = 16.70), which would give a stronger forward peso.",
    ),
    difficulty: 2,
    points: 15,
    competency: 'international-finance',
  },
  {
    id: 'FIN-16-E3',
    level: 4,
    module: 'FIN-16',
    kind: 'fields',
    flavor: 'case',
    context: t(
      "Un exportador de aguacate cobrará USD 200,000 dentro de 6 meses. Hoy pacta con su banco un forward de venta a 18.40 pesos por dólar. Al vencimiento, el spot resulta ser 17.90.",
      "An avocado exporter will collect USD 200,000 in 6 months. Today it agrees with its bank a forward sale at 18.40 pesos per dollar. At maturity, the spot turns out to be 17.90.",
    ),
    prompt: t(
      "Calcula los pesos que recibe con la cobertura, los que habría recibido sin cobertura y la diferencia a favor de cubrirse.",
      "Compute the pesos received with the hedge, those it would have received without it and the difference in favor of hedging.",
    ),
    fields: [
      { id: 'f1', label: t("Pesos con forward ($)", "Pesos with forward ($)"), answer: 3680000, unit: 'MXN', tolerance: { abs: 1 } },
      { id: 'f2', label: t("Pesos sin cobertura ($)", "Pesos without hedge ($)"), answer: 3580000, unit: 'MXN', tolerance: { abs: 1 } },
      { id: 'f3', label: t("Diferencia a favor de la cobertura ($)", "Difference in favor of the hedge ($)"), answer: 100000, unit: 'MXN', tolerance: { abs: 1 } },
    ],
    explanation: t(
      "Con forward: 200,000 × 18.40 = $3,680,000. Sin cobertura: 200,000 × 17.90 = $3,580,000. Diferencia: $100,000. El peso se apreció y el exportador, que vende dólares, habría recibido menos sin cubrirse. Error común: pensar que el forward \"pierde\" porque el spot cambió; su función es fijar el ingreso.",
      "With forward: 200,000 × 18.40 = $3,680,000. Unhedged: 200,000 × 17.90 = $3,580,000. Difference: $100,000. The peso appreciated and the exporter, who sells dollars, would have received less unhedged. Common mistake: thinking the forward \"loses\" because the spot changed; its job is to lock in revenue.",
    ),
    difficulty: 2,
    points: 15,
    competency: 'international-finance',
  },
  {
    id: 'FIN-16-E4',
    level: 4,
    module: 'FIN-16',
    kind: 'classify',
    flavor: 'concept',
    prompt: t(
      "Clasifica cada situación según el tipo de riesgo cambiario que representa para una empresa mexicana.",
      "Classify each situation by the type of currency risk it represents for a Mexican company.",
    ),
    categories: [
      { id: 'FIN-16-E4-c1', label: t("Riesgo de transacción", "Transaction risk") },
      { id: 'FIN-16-E4-c2', label: t("Riesgo de traducción", "Translation risk") },
      { id: 'FIN-16-E4-c3', label: t("Riesgo económico", "Economic risk") },
    ],
    items: [
      { id: 'FIN-16-E4-i1', label: t("Una factura de un proveedor chino en dólares que se pagará en 60 días", "An invoice from a Chinese supplier in dollars to be paid in 60 days"), correctCategoryId: 'FIN-16-E4-c1' },
      { id: 'FIN-16-E4-i2', label: t("Consolidar el balance de la subsidiaria en Texas, cuyas cifras en pesos cambian al cierre", "Consolidating the Texas subsidiary's balance sheet, whose peso figures change at closing"), correctCategoryId: 'FIN-16-E4-c2' },
      { id: 'FIN-16-E4-i3', label: t("Un fabricante local de calzado pierde clientes porque un peso fuerte abarata los zapatos importados", "A local shoe maker loses customers because a strong peso makes imported shoes cheaper"), correctCategoryId: 'FIN-16-E4-c3' },
      { id: 'FIN-16-E4-i4', label: t("Un cobro pendiente de USD 50,000 a un cliente en Canadá", "A pending USD 50,000 collection from a customer in Canada"), correctCategoryId: 'FIN-16-E4-c1' },
      { id: 'FIN-16-E4-i5', label: t("Convertir a pesos los estados financieros de una filial en Colombia para el reporte anual", "Converting a Colombian affiliate's financial statements into pesos for the annual report"), correctCategoryId: 'FIN-16-E4-c2' },
      { id: 'FIN-16-E4-i6', label: t("Un hotel de playa recibe menos turistas extranjeros durante años porque el peso se mantiene caro", "A beach hotel receives fewer foreign tourists for years because the peso stays expensive"), correctCategoryId: 'FIN-16-E4-c3' },
    ],
    explanation: t(
      "Transacción: cobros y pagos concretos pendientes en otra moneda. Traducción: efecto contable al convertir estados de subsidiarias extranjeras. Económico: impacto de largo plazo en competitividad, clientes y precios, aunque no haya una factura en dólares. Error común: clasificar el caso del zapatero como transacción; no tiene operaciones en dólares pendientes.",
      "Transaction: specific pending collections and payments in another currency. Translation: accounting effect of converting foreign subsidiaries' statements. Economic: long-term impact on competitiveness, customers and prices, even without a dollar invoice. Common mistake: classifying the shoe maker as transaction risk; it has no pending dollar deals.",
    ),
    difficulty: 2,
    points: 15,
    competency: 'international-finance',
  },
  {
    id: 'FIN-16-E5',
    level: 4,
    module: 'FIN-16',
    kind: 'formula',
    flavor: 'concept',
    prompt: t(
      "Completa la fórmula de la paridad de tasas de interés cubierta, con el tipo de cambio expresado en pesos por dólar.",
      "Complete the covered interest rate parity formula, with the exchange rate expressed in pesos per dollar.",
    ),
    template: 'F = {{b1}} × (1 + {{b2}}) / (1 + {{b3}})',
    blanks: [
      {
        id: 'b1',
        options: [
          { id: 'FIN-16-E5-b1-a', text: t("S (tipo de cambio spot)", "S (spot exchange rate)") },
          { id: 'FIN-16-E5-b1-b', text: t("Inflación de México", "Mexican inflation") },
          { id: 'FIN-16-E5-b1-c', text: t("1", "1") },
        ],
        correctOptionId: 'FIN-16-E5-b1-a',
      },
      {
        id: 'b2',
        options: [
          { id: 'FIN-16-E5-b2-a', text: t("i_USD (tasa en dólares)", "i_USD (dollar rate)") },
          { id: 'FIN-16-E5-b2-b', text: t("i_MXN (tasa en pesos)", "i_MXN (peso rate)") },
          { id: 'FIN-16-E5-b2-c', text: t("g (crecimiento)", "g (growth)") },
        ],
        correctOptionId: 'FIN-16-E5-b2-b',
      },
      {
        id: 'b3',
        options: [
          { id: 'FIN-16-E5-b3-a', text: t("i_MXN (tasa en pesos)", "i_MXN (peso rate)") },
          { id: 'FIN-16-E5-b3-b', text: t("WACC", "WACC") },
          { id: 'FIN-16-E5-b3-c', text: t("i_USD (tasa en dólares)", "i_USD (dollar rate)") },
        ],
        correctOptionId: 'FIN-16-E5-b3-c',
      },
    ],
    explanation: t(
      "F = S × (1 + i_MXN) / (1 + i_USD): la moneda del numerador de la cotización (pesos) va arriba y la de la unidad (dólar) abajo. Así, si la tasa en pesos es mayor, el forward es mayor que el spot. Error común: invertir las tasas, lo que haría que la moneda con tasa alta se apreciara a plazo.",
      "F = S × (1 + i_MXN) / (1 + i_USD): the quote's pricing currency (pesos) goes on top and the unit currency (dollar) at the bottom. So if the peso rate is higher, the forward is above the spot. Common mistake: swapping the rates, which would make the high-rate currency appreciate forward.",
    ),
    difficulty: 2,
    points: 15,
    competency: 'international-finance',
  },
  {
    id: 'FIN-16-E6',
    level: 4,
    module: 'FIN-16',
    kind: 'numeric',
    flavor: 'case',
    context: t(
      "Datos hipotéticos: hoy el tipo de cambio es 20.00 pesos por dólar. Se espera inflación anual de 6 % en México y de 2 % en Estados Unidos.",
      "Hypothetical data: today the exchange rate is 20.00 pesos per dollar. Annual inflation of 6 % is expected in Mexico and 2 % in the United States.",
    ),
    prompt: t(
      "Según la paridad del poder de compra relativa, ¿qué tipo de cambio se esperaría dentro de un año? (pesos por dólar, 2 decimales)",
      "According to relative purchasing power parity, what exchange rate would be expected in one year? (pesos per dollar, 2 decimals)",
    ),
    answer: 20.78,
    unit: 'none',
    decimals: 2,
    tolerance: { abs: 0.01 },
    explanation: t(
      "S₁ = S₀ × (1 + π_MXN) / (1 + π_USD) = 20 × 1.06 / 1.02 = 21.20 / 1.02 = 20.78. Como en México los precios suben más, el peso tiende a depreciarse. Error común: restar inflaciones y aplicar 4 % (20.80), una aproximación, o invertir la fracción (19.25).",
      "S₁ = S₀ × (1 + π_MXN) / (1 + π_USD) = 20 × 1.06 / 1.02 = 21.20 / 1.02 = 20.78. Because prices rise faster in Mexico, the peso tends to depreciate. Common mistake: subtracting inflations and applying 4 % (20.80), an approximation, or inverting the fraction (19.25).",
    ),
    difficulty: 2,
    points: 15,
    competency: 'international-finance',
  },

  // ═════════════════════════ FIN-17 ═════════════════════════
  {
    id: 'FIN-17-E1',
    level: 4,
    module: 'FIN-17',
    kind: 'mcq',
    flavor: 'case',
    context: t(
      "Una constructora tiene contratos rentables firmados y su valor supera con holgura su deuda, pero un cliente gubernamental se atrasó tres meses en pagarle y no le alcanza para la nómina ni para un pago de crédito de este mes.",
      "A construction company has profitable signed contracts and its value comfortably exceeds its debt, but a government client is three months late paying it and it cannot cover payroll or a loan payment this month.",
    ),
    prompt: t(
      "¿Qué tipo de problema tiene la constructora y cuál es la respuesta más adecuada?",
      "What kind of problem does the construction company have and what is the most suitable response?",
    ),
    options: [
      { id: 'FIN-17-E1-a', text: t("Solvencia; debe solicitar de inmediato la quiebra", "Solvency; it should file for bankruptcy immediately") },
      { id: 'FIN-17-E1-b', text: t("Liquidez; negociar más plazo o un crédito puente mientras cobra", "Liquidity; negotiate more time or a bridge loan while it collects") },
      { id: 'FIN-17-E1-c', text: t("Solvencia; los accionistas deben perder la empresa con una capitalización de toda la deuda", "Solvency; shareholders must lose the company through a full debt-for-equity swap") },
      { id: 'FIN-17-E1-d', text: t("Ninguno; puede dejar de pagar sin consecuencias", "None; it can stop paying with no consequences") },
    ],
    correctOptionId: 'FIN-17-E1-b',
    explanation: t(
      "El negocio vale más que su deuda y es rentable: el problema es de liquidez (el efectivo llega tarde). Basta con refinanciar plazos o un crédito puente. Las medidas drásticas (quiebra, capitalización total) son para problemas de solvencia. Error común: confundir falta de efectivo temporal con quiebra.",
      "The business is worth more than its debt and is profitable: the problem is liquidity (cash arrives late). Refinancing maturities or a bridge loan is enough. Drastic measures (bankruptcy, full debt-for-equity) are for solvency problems. Common mistake: confusing a temporary cash shortage with bankruptcy.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'financial-restructuring',
  },
  {
    id: 'FIN-17-E2',
    level: 4,
    module: 'FIN-17',
    kind: 'numeric',
    flavor: 'case',
    context: t(
      "Una cadena de tiendas de muebles reporta EBIT de $120 millones y gastos por intereses de $80 millones. Su contrato de crédito exige una cobertura de intereses mínima de 2.0 veces.",
      "A furniture store chain reports EBIT of $120 million and interest expense of $80 million. Its loan agreement requires minimum interest coverage of 2.0 times.",
    ),
    prompt: t(
      "Calcula la cobertura de intereses de la cadena de muebles (veces, 1 decimal).",
      "Compute the furniture chain's interest coverage (times, 1 decimal).",
    ),
    answer: 1.5,
    unit: 'times',
    decimals: 1,
    tolerance: { abs: 0.05 },
    explanation: t(
      "Cobertura = EBIT / Intereses = 120 / 80 = 1.5 veces, por debajo del mínimo de 2.0: incumple el covenant y el banco podría exigir pago anticipado. Error común: dividir intereses entre EBIT (0.67) o usar la utilidad neta en lugar del EBIT.",
      "Coverage = EBIT / Interest = 120 / 80 = 1.5 times, below the 2.0 minimum: it breaches the covenant and the bank could demand early repayment. Common mistake: dividing interest by EBIT (0.67) or using net income instead of EBIT.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'financial-restructuring',
  },
  {
    id: 'FIN-17-E3',
    level: 4,
    module: 'FIN-17',
    kind: 'fields',
    flavor: 'case',
    context: t(
      "En una liquidación simplificada (sin créditos laborales ni fiscales), los bienes de una empresa se venden en $700 millones. Tiene deuda garantizada de $400 millones y deuda quirografaria (sin garantía) de $600 millones.",
      "In a simplified liquidation (no labor or tax claims), a company's assets are sold for $700 million. It has secured debt of $400 million and unsecured debt of $600 million.",
    ),
    prompt: t(
      "Aplica el orden de prelación: ¿cuánto cobran los acreedores garantizados, qué porcentaje recuperan los quirografarios y cuánto reciben los accionistas?",
      "Apply the priority order: how much do secured creditors collect, what percentage do unsecured creditors recover and how much do shareholders receive?",
    ),
    fields: [
      { id: 'f1', label: t("Cobro de garantizados (millones $)", "Secured creditors' collection ($ millions)"), answer: 400, unit: 'MXN', tolerance: { abs: 0.5 } },
      { id: 'f2', label: t("Recuperación de quirografarios (%)", "Unsecured recovery (%)"), answer: 50, unit: '%', tolerance: { abs: 0.1 } },
      { id: 'f3', label: t("Pago a accionistas (millones $)", "Payment to shareholders ($ millions)"), answer: 0, unit: 'MXN', tolerance: { abs: 0.5 } },
    ],
    explanation: t(
      "Garantizados cobran primero: $400 completos. Quedan 700 − 400 = $300 para $600 de quirografarios: 300 / 600 = 50 %. A los accionistas no les queda nada: $0. Error común: repartir los $700 a prorrata entre todas las deudas (70 % para todos), ignorando la prelación.",
      "Secured creditors are paid first: the full $400. That leaves 700 − 400 = $300 for $600 of unsecured claims: 300 / 600 = 50 %. Nothing is left for shareholders: $0. Common mistake: splitting the $700 pro rata among all debts (70 % for everyone), ignoring priority.",
    ),
    difficulty: 2,
    points: 15,
    competency: 'financial-restructuring',
  },
  {
    id: 'FIN-17-E4',
    level: 4,
    module: 'FIN-17',
    kind: 'numeric',
    flavor: 'case',
    context: t(
      "Una empresa de autopartes tiene deuda neta de $1,000 millones y EBITDA de $200 millones. Vende una planta no estratégica en $300 millones, usa todo para pagar deuda, y esa planta aportaba $30 millones de EBITDA.",
      "An auto parts company has net debt of $1,000 million and EBITDA of $200 million. It sells a non-core plant for $300 million, uses all of it to repay debt, and that plant contributed $30 million of EBITDA.",
    ),
    prompt: t(
      "Calcula la razón deuda neta/EBITDA de la empresa de autopartes después de la venta (veces, 2 decimales).",
      "Compute the auto parts company's net debt/EBITDA ratio after the sale (times, 2 decimals).",
    ),
    answer: 4.12,
    unit: 'times',
    decimals: 2,
    tolerance: { abs: 0.006 },
    explanation: t(
      "Deuda: 1,000 − 300 = 700. EBITDA: 200 − 30 = 170. Razón: 700 / 170 = 4.12 veces (antes 5.0). Error común: no restar el EBITDA de la planta vendida y obtener 700 / 200 = 3.50, que exagera la mejora.",
      "Debt: 1,000 − 300 = 700. EBITDA: 200 − 30 = 170. Ratio: 700 / 170 = 4.12 times (5.0 before). Common mistake: not subtracting the sold plant's EBITDA and getting 700 / 200 = 3.50, which overstates the improvement.",
    ),
    difficulty: 3,
    points: 20,
    competency: 'financial-restructuring',
  },
  {
    id: 'FIN-17-E5',
    level: 4,
    module: 'FIN-17',
    kind: 'multi',
    flavor: 'concept',
    prompt: t(
      "¿Cuáles son herramientas legítimas de una reestructuración extrajudicial? Selecciona todas las que apliquen.",
      "Which are legitimate tools of an out-of-court restructuring? Select all that apply.",
    ),
    options: [
      { id: 'FIN-17-E5-a', text: t("Ampliar el plazo de los créditos o pactar un periodo de gracia", "Extend loan maturities or agree a grace period") },
      { id: 'FIN-17-E5-b', text: t("Pactar una quita: que el acreedor perdone parte del saldo", "Agree a haircut: the creditor forgives part of the balance") },
      { id: 'FIN-17-E5-c', text: t("Cambiar deuda por acciones (capitalización)", "Exchange debt for shares (debt-for-equity swap)") },
      { id: 'FIN-17-E5-d', text: t("Vender activos no estratégicos para pagar deuda", "Sell non-core assets to repay debt") },
      { id: 'FIN-17-E5-e', text: t("Ocultar pasivos en los estados financieros para cumplir los covenants", "Hide liabilities in the financial statements to meet covenants") },
      { id: 'FIN-17-E5-f', text: t("Pagar un dividendo extraordinario antes de negociar con los bancos", "Pay a special dividend before negotiating with the banks") },
    ],
    correctOptionIds: ['FIN-17-E5-a', 'FIN-17-E5-b', 'FIN-17-E5-c', 'FIN-17-E5-d'],
    explanation: t(
      "Refinanciar, quitas, capitalización y venta de activos son herramientas reconocidas para recuperar viabilidad. Ocultar pasivos es fraude, y pagar dividendos mientras no se puede cubrir la deuda saca recursos que pertenecen, en la práctica, a los acreedores y destruye la confianza. Error común: pensar que todo lo que \"mejora la razón\" es válido.",
      "Refinancing, haircuts, debt-for-equity swaps and asset sales are recognized tools to restore viability. Hiding liabilities is fraud, and paying dividends while debt cannot be covered takes out resources that in practice belong to creditors and destroys trust. Common mistake: thinking anything that \"improves the ratio\" is valid.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'financial-restructuring',
  },
  {
    id: 'FIN-17-E6',
    level: 4,
    module: 'FIN-17',
    kind: 'numeric',
    flavor: 'case',
    context: t(
      "Una aerolínea regional tiene 20 millones de acciones. Sus acreedores aceptan convertir $600 millones de deuda en acciones nuevas a un precio de $20 por acción.",
      "A regional airline has 20 million shares. Its creditors agree to convert $600 million of debt into new shares at a price of $20 per share.",
    ),
    prompt: t(
      "¿Qué porcentaje de la aerolínea tendrán los acreedores después de la capitalización?",
      "What percentage of the airline will the creditors own after the debt-for-equity swap?",
    ),
    answer: 60,
    unit: '%',
    decimals: 0,
    tolerance: { abs: 0.1 },
    explanation: t(
      "Acciones nuevas = 600 / 20 = 30 millones. Total = 20 + 30 = 50 millones. Acreedores = 30 / 50 = 60 %; los accionistas originales bajan a 40 %. Error común: dividir 30 entre 20 (las acciones viejas) y obtener 150 %.",
      "New shares = 600 / 20 = 30 million. Total = 20 + 30 = 50 million. Creditors = 30 / 50 = 60 %; original shareholders drop to 40 %. Common mistake: dividing 30 by 20 (the old shares) and getting 150 %.",
    ),
    difficulty: 2,
    points: 15,
    competency: 'financial-restructuring',
  },
]
