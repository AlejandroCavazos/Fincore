import type { Exercise, Lesson } from '../../../types'

/**
 * FINCORE — Temario v2.0, área Finanzas Cuantitativas y Gestión de Riesgos, parte 3 (Avanzado, nivel 6).
 * CUA.13 Modelos de valuación de derivados · CUA.14 Simulación Monte Carlo
 * CUA.15 Programación cuantitativa con Python · CUA.16 Machine learning aplicado a finanzas
 * CUA.17 Backtesting y validación de modelos.
 */

const t = (es: string, en: string) => ({ es, en })

const NOTE_DERIVATIVES = t(
  "Contenido educativo. Los precios, tasas y volatilidades de esta lección son ejemplos hipotéticos para practicar. En México, los derivados listados se negocian en el Mercado Mexicano de Derivados (MexDer) y las autoridades financieras (como la CNBV y el Banco de México) regulan su operación; las reglas cambian con el tiempo: verifica la versión vigente (2026) antes de operar.",
  "Educational content. The prices, rates and volatilities in this lesson are hypothetical examples for practice. In Mexico, listed derivatives trade on the Mexican Derivatives Exchange (MexDer) and financial authorities (such as the CNBV and Banco de México) regulate their operation; rules change over time: verify the current version (2026) before trading.",
)

const NOTE_MC = t(
  "Contenido educativo. Los rendimientos, volatilidades, precios y tasas de los ejemplos son hipotéticos. Una simulación solo es tan buena como sus supuestos: no es un pronóstico garantizado ni una recomendación de inversión.",
  "Educational content. The returns, volatilities, prices and rates in the examples are hypothetical. A simulation is only as good as its assumptions: it is not a guaranteed forecast or an investment recommendation.",
)

const NOTE_PYTHON = t(
  "Contenido educativo. Las bibliotecas de Python (NumPy, pandas, matplotlib, SciPy) cambian entre versiones y algunas funciones se renombran o se vuelven obsoletas: consulta la documentación de la versión que instales (2026). Los datos de los ejemplos son hipotéticos.",
  "Educational content. Python libraries (NumPy, pandas, matplotlib, SciPy) change between versions and some functions get renamed or deprecated: check the documentation of the version you install (2026). The data in the examples are hypothetical.",
)

const NOTE_ML = t(
  "Contenido educativo. Los datos y resultados de los ejemplos son hipotéticos. Cuando un modelo se usa para decidir sobre personas (por ejemplo, otorgar crédito), aplican reglas de protección de datos personales, de no discriminación y de supervisión financiera, que en México y en otros países cambian con el tiempo: verifica la regulación vigente (2026).",
  "Educational content. The data and results in the examples are hypothetical. When a model is used to make decisions about people (for example, granting credit), personal data protection, non-discrimination and financial supervision rules apply, and in Mexico and other countries they change over time: verify current regulation (2026).",
)

const NOTE_BACKTEST = t(
  "Contenido educativo. El esquema de 'semáforo' para validar el VaR (zonas verde, amarilla y roja según el número de excepciones en 250 días) proviene del marco del Comité de Supervisión Bancaria de Basilea; los reguladores lo adaptan y actualizan. Los rendimientos y costos de los ejemplos son hipotéticos: un buen backtest no garantiza resultados futuros. Verifica la versión vigente (2026).",
  "Educational content. The 'traffic light' scheme for validating VaR (green, yellow and red zones by number of exceptions in 250 days) comes from the Basel Committee on Banking Supervision framework; regulators adapt and update it. The returns and costs in the examples are hypothetical: a good backtest does not guarantee future results. Verify the current version (2026).",
)

export const lessons: Lesson[] = [
  // ───────────────────────────── CUA-13 ─────────────────────────────
  {
    id: 'CUA-13',
    level: 6,
    topicIds: ['CUA.13'],
    title: t("Modelos de valuación de derivados", "Derivative pricing models"),
    summary: t(
      "Un derivado se valúa por no arbitraje: se replica con el activo subyacente y dinero prestado, y eso lleva al forward, al árbol binomial y a Black-Scholes.",
      "A derivative is priced by no-arbitrage: it is replicated with the underlying asset and borrowed money, which leads to the forward price, the binomial tree and Black-Scholes.",
    ),
    minutes: 11,
    objectives: [
      t("Calcular el precio justo de un forward con el argumento de no arbitraje.", "Compute the fair price of a forward using the no-arbitrage argument."),
      t("Valuar una opción con un árbol binomial de un paso y la probabilidad neutral al riesgo.", "Price an option with a one-step binomial tree and the risk-neutral probability."),
      t("Interpretar los insumos y la fórmula de Black-Scholes-Merton y la paridad put-call.", "Interpret the inputs and formula of Black-Scholes-Merton and put-call parity."),
    ],
    theory: [
      {
        heading: t("Pactar hoy, comprar después", "Agree today, buy later"),
        body: [
          t(
            "Un **derivado** es un contrato cuyo valor depende de otro activo, llamado **subyacente** (una acción, el dólar, el maíz). Un **forward** es un acuerdo hoy para comprar o vender ese activo en una fecha futura a un precio fijado hoy. Por ejemplo, una empresa que importará maquinaria pacta hoy el tipo de cambio al que comprará dólares en seis meses.",
            "A **derivative** is a contract whose value depends on another asset, called the **underlying** (a stock, the dollar, corn). A **forward** is an agreement today to buy or sell that asset on a future date at a price set today. For example, a company that will import machinery agrees today on the exchange rate at which it will buy dollars in six months.",
          ),
          t(
            "La idea clave es el **no arbitraje**: no puede existir una ganancia segura sin invertir dinero. Si alguien puede comprar el activo hoy con dinero prestado y guardarlo hasta la fecha, el forward debe costar exactamente lo que cuesta esa estrategia: el precio de hoy más el costo del financiamiento (menos los dividendos que pague el activo).",
            "The key idea is **no-arbitrage**: there cannot be a sure profit without investing money. If someone can buy the asset today with borrowed money and hold it until the date, the forward must cost exactly what that strategy costs: today's price plus the financing cost (minus any dividends the asset pays).",
          ),
          t(
            "Mini ejemplo: una acción vale $100, no paga dividendos y la tasa es 10% anual simple. Un forward a un año debe valer 100 × 1.10 = $110. Si el mercado lo ofrece en $115, vendes el forward, pides prestados $100, compras la acción y al año ganas $5 sin riesgo.",
            "Mini example: a stock is worth $100, pays no dividends and the rate is 10% simple per year. A one-year forward must be worth 100 × 1.10 = $110. If the market quotes it at $115, you sell the forward, borrow $100, buy the stock and in a year earn $5 risk-free.",
          ),
        ],
        formulas: [
          {
            name: t("Precio forward justo (tasa simple) y ganancia de arbitraje", "Fair forward price (simple rate) and arbitrage profit"),
            expression: "F = S₀ × (1 + r × T)   ·   Ganancia de arbitraje = |F de mercado − F justo|",
            variables: [
              { symbol: "F", meaning: t("Precio forward justo: lo que debería costar hoy pactar la compra futura, en pesos.", "Fair forward price: what agreeing today on the future purchase should cost, in pesos.") },
              { symbol: "S₀", meaning: t("Precio de hoy del subyacente (la acción, el dólar…), en pesos.", "Today's price of the underlying (the stock, the dollar…), in pesos.") },
              { symbol: "r", meaning: t("Tasa libre de riesgo anual simple, en decimal (8% = 0.08).", "Annual simple risk-free rate, as a decimal (8% = 0.08).") },
              { symbol: "T", meaning: t("Plazo hasta la entrega, en años (6 meses = 0.5; 3 meses = 0.25).", "Time to delivery, in years (6 months = 0.5; 3 months = 0.25).") },
              { symbol: "F de mercado", meaning: t("El precio forward que alguien cotiza en el mercado, en pesos.", "The forward price someone quotes in the market, in pesos.") },
            ],
            steps: [
              t("Convierte la tasa a decimal y el plazo a años: 6% = 0.06; 3 meses = 3 ÷ 12 = 0.25.", "Convert the rate to a decimal and the time to years: 6% = 0.06; 3 months = 3 ÷ 12 = 0.25."),
              t("Calcula el factor de financiamiento: 1 + r × T.", "Compute the financing factor: 1 + r × T."),
              t("Multiplica el precio de hoy por ese factor: eso es F justo.", "Multiply today's price by that factor: that is the fair F."),
              t("Compara con el F de mercado: si está más caro, vendes el forward y compras el activo con dinero prestado; si está más barato, haces lo contrario. La diferencia es tu ganancia sin riesgo por unidad.", "Compare with the market F: if it is more expensive, sell the forward and buy the asset with borrowed money; if cheaper, do the opposite. The difference is your risk-free profit per unit."),
            ],
            example: t(
              "Una acción vale $300, no paga dividendos, la tasa es 6% anual simple y el plazo es 3 meses. T = 3 ÷ 12 = 0.25. Factor: 1 + 0.06 × 0.25 = 1.015. F = 300 × 1.015 = **$304.50**. Si el mercado cotiza $308: 308 − 304.50 = **$3.50** de ganancia sin riesgo por acción.",
              "A stock is worth $300, pays no dividends, the rate is 6% simple per year and the term is 3 months. T = 3 ÷ 12 = 0.25. Factor: 1 + 0.06 × 0.25 = 1.015. F = 300 × 1.015 = **$304.50**. If the market quotes $308: 308 − 304.50 = **$3.50** of risk-free profit per share.",
            ),
            interpret: t(
              "F mayor que S₀ no es una predicción de que el precio subirá: solo refleja el costo de pedir prestado para comprar hoy y guardar el activo.",
              "F above S₀ is not a prediction that the price will rise: it only reflects the cost of borrowing to buy today and hold the asset.",
            ),
            mistake: t(
              "Usar el plazo en meses (T = 6) en lugar de años (T = 0.5), o capitalizar un año completo cuando el plazo es menor.",
              "Using the term in months (T = 6) instead of years (T = 0.5), or compounding a full year when the term is shorter.",
            ),
          },
          {
            name: t("Precio forward con capitalización continua y dividendos", "Forward price with continuous compounding and dividends"),
            expression: "F = S₀ × e^((r − q) × T)",
            variables: [
              { symbol: "F", meaning: t("Precio forward justo, en pesos.", "Fair forward price, in pesos.") },
              { symbol: "S₀", meaning: t("Precio de hoy del subyacente, en pesos.", "Today's price of the underlying, in pesos.") },
              { symbol: "e", meaning: t("Número fijo ≈ 2.71828 que se usa cuando el interés se capitaliza de forma continua; en calculadora o Excel es la función EXP.", "Fixed number ≈ 2.71828 used when interest compounds continuously; on a calculator or in Excel it is the EXP function.") },
              { symbol: "r", meaning: t("Tasa libre de riesgo anual continua, en decimal.", "Annual continuous risk-free rate, as a decimal.") },
              { symbol: "q", meaning: t("Rendimiento anual por dividendos del subyacente, en decimal (0 si no paga).", "Annual dividend yield of the underlying, as a decimal (0 if it pays none).") },
              { symbol: "T", meaning: t("Plazo en años.", "Time in years.") },
            ],
            steps: [
              t("Resta los dividendos a la tasa: r − q.", "Subtract the dividends from the rate: r − q."),
              t("Multiplica por el plazo en años: (r − q) × T.", "Multiply by the time in years: (r − q) × T."),
              t("Saca la exponencial de ese número (EXP en Excel) y multiplícala por S₀.", "Take the exponential of that number (EXP in Excel) and multiply it by S₀."),
            ],
            example: t(
              "S₀ = $100, r = 6%, q = 2%, T = 0.5 años. r − q = 0.06 − 0.02 = 0.04. × 0.5 = 0.02. e^0.02 ≈ 1.0202. F = 100 × 1.0202 ≈ **$102.02**.",
              "S₀ = $100, r = 6%, q = 2%, T = 0.5 years. r − q = 0.06 − 0.02 = 0.04. × 0.5 = 0.02. e^0.02 ≈ 1.0202. F = 100 × 1.0202 ≈ **$102.02**.",
            ),
            mistake: t(
              "Sumar los dividendos en lugar de restarlos. Quien tiene el forward no cobra dividendos, por eso el forward vale menos.",
              "Adding the dividends instead of subtracting them. The forward holder does not receive dividends, so the forward is worth less.",
            ),
          },
        ],
        bullets: [
          t("S₀: precio de hoy del subyacente.", "S₀: today's price of the underlying."),
          t("r: tasa libre de riesgo; T: plazo en años.", "r: risk-free rate; T: time in years."),
          t("q: rendimiento por dividendos del subyacente (si paga).", "q: dividend yield of the underlying (if any)."),
          t("Si F de mercado ≠ F justo, existe una estrategia de arbitraje.", "If the market F ≠ fair F, an arbitrage strategy exists."),
        ],
      },
      {
        heading: t("¿Cuánto vale una opción?", "What is an option worth?"),
        body: [
          t(
            "Una **opción call** da el derecho, no la obligación, de comprar el subyacente a un precio fijo llamado **precio de ejercicio** (K). Si al vencimiento el precio S es mayor que K, ganas S − K; si no, no la ejerces y vale 0. Una **put** es el derecho a vender.",
            "A **call option** gives the right, not the obligation, to buy the underlying at a fixed price called the **strike price** (K). If at expiry the price S is above K, you earn S − K; otherwise you do not exercise and it is worth 0. A **put** is the right to sell.",
          ),
          t(
            "El **árbol binomial** simplifica el futuro: en un periodo el precio solo puede subir (multiplicar por u) o bajar (multiplicar por d). Con esos dos escenarios se puede formar una cartera de acción + préstamo que copia exactamente la opción. El resultado se resume en la **probabilidad neutral al riesgo** p: no es la probabilidad real, sino un peso que hace que el activo rinda la tasa libre de riesgo.",
            "The **binomial tree** simplifies the future: in one period the price can only go up (multiply by u) or down (multiply by d). With those two scenarios you can build a stock + loan portfolio that exactly copies the option. The result is summarized in the **risk-neutral probability** p: it is not the real probability, but a weight that makes the asset earn the risk-free rate.",
          ),
          t(
            "Mini ejemplo: S = 100, u = 1.2, d = 0.9 y tasa por periodo 5%. Entonces p = (1.05 − 0.9) / (1.2 − 0.9) = 0.5. Una call con K = 100 paga 20 si sube y 0 si baja, así que vale 0.5 × 20 / 1.05 = $9.52.",
            "Mini example: S = 100, u = 1.2, d = 0.9 and a 5% rate per period. Then p = (1.05 − 0.9) / (1.2 − 0.9) = 0.5. A call with K = 100 pays 20 if it goes up and 0 if it goes down, so it is worth 0.5 × 20 / 1.05 = $9.52.",
          ),
        ],
        formulas: [
          {
            name: t("Valor de una opción con árbol binomial de un paso", "Option value with a one-step binomial tree"),
            expression: "p = (1 + r − d) ÷ (u − d)   ·   V₀ = [p × Vᵤ + (1 − p) × V_d] ÷ (1 + r)",
            variables: [
              { symbol: "p", meaning: t("Probabilidad neutral al riesgo: un peso entre 0 y 1 para el escenario de subida (no es la probabilidad real).", "Risk-neutral probability: a weight between 0 and 1 for the up scenario (not the real probability).") },
              { symbol: "r", meaning: t("Tasa libre de riesgo del periodo, en decimal (2% = 0.02).", "Risk-free rate for the period, as a decimal (2% = 0.02).") },
              { symbol: "u", meaning: t("Factor de subida: por cuánto se multiplica el precio si sube (sube 10% → u = 1.10).", "Up factor: what the price is multiplied by if it rises (rises 10% → u = 1.10).") },
              { symbol: "d", meaning: t("Factor de bajada: por cuánto se multiplica si baja (baja 5% → d = 0.95).", "Down factor: what the price is multiplied by if it falls (falls 5% → d = 0.95).") },
              { symbol: "Vᵤ", meaning: t("Pago de la opción si el precio sube, en pesos. Call: máx(S × u − K, 0). Put: máx(K − S × u, 0).", "Option payoff if the price goes up, in pesos. Call: max(S × u − K, 0). Put: max(K − S × u, 0).") },
              { symbol: "V_d", meaning: t("Pago de la opción si el precio baja, en pesos. Call: máx(S × d − K, 0).", "Option payoff if the price goes down, in pesos. Call: max(S × d − K, 0).") },
              { symbol: "V₀", meaning: t("Valor justo de la opción hoy, en pesos.", "Fair value of the option today, in pesos.") },
              { symbol: "K", meaning: t("Precio de ejercicio de la opción, en pesos.", "Strike price of the option, in pesos.") },
            ],
            steps: [
              t("Calcula los dos precios futuros: S × u y S × d.", "Compute the two future prices: S × u and S × d."),
              t("Calcula el pago de la opción en cada uno (para una call, máx(precio − K, 0)): Vᵤ y V_d.", "Compute the option payoff in each (for a call, max(price − K, 0)): Vᵤ and V_d."),
              t("Calcula p = (1 + r − d) ÷ (u − d).", "Compute p = (1 + r − d) ÷ (u − d)."),
              t("Promedia los pagos con esos pesos: p × Vᵤ + (1 − p) × V_d.", "Average the payoffs with those weights: p × Vᵤ + (1 − p) × V_d."),
              t("Trae ese promedio a hoy dividiendo entre (1 + r).", "Bring that average to today by dividing by (1 + r)."),
            ],
            example: t(
              "S = $80, u = 1.25, d = 0.90, r = 3% por periodo, call con K = $80. Precios: 80 × 1.25 = $100 y 80 × 0.90 = $72. Pagos: máx(100 − 80, 0) = 20 y máx(72 − 80, 0) = 0. p = (1.03 − 0.90) ÷ (1.25 − 0.90) = 0.13 ÷ 0.35 ≈ 0.3714. Promedio: 0.3714 × 20 + 0.6286 × 0 ≈ 7.43. Valor hoy: 7.43 ÷ 1.03 ≈ **$7.21**.",
              "S = $80, u = 1.25, d = 0.90, r = 3% per period, call with K = $80. Prices: 80 × 1.25 = $100 and 80 × 0.90 = $72. Payoffs: max(100 − 80, 0) = 20 and max(72 − 80, 0) = 0. p = (1.03 − 0.90) ÷ (1.25 − 0.90) = 0.13 ÷ 0.35 ≈ 0.3714. Average: 0.3714 × 20 + 0.6286 × 0 ≈ 7.43. Value today: 7.43 ÷ 1.03 ≈ **$7.21**.",
            ),
            interpret: t(
              "p siempre debe quedar entre 0 y 1 (eso pasa si d < 1 + r < u). Si sale fuera de ese rango, los datos permiten arbitraje o hay un error de captura.",
              "p must always fall between 0 and 1 (this happens if d < 1 + r < u). If it falls outside that range, the data allow arbitrage or there is an input error.",
            ),
            mistake: t(
              "Olvidar dividir entre (1 + r) al final, o suponer que p = 0.5 sin calcularla.",
              "Forgetting to divide by (1 + r) at the end, or assuming p = 0.5 without computing it.",
            ),
          },
        ],
      },
      {
        heading: t("La calculadora de opciones", "The option calculator"),
        body: [
          t(
            "En palabras sencillas: Black-Scholes es una 'calculadora' que da el precio justo de una opción a partir de cinco datos que puedes observar o estimar. Es el mismo razonamiento del árbol binomial, pero con el tiempo dividido en pasos tan pequeños que el precio se mueve de forma continua.",
            "In simple words: Black-Scholes is a 'calculator' that gives the fair price of an option from five inputs you can observe or estimate. It is the same reasoning as the binomial tree, but with time split into steps so small that the price moves continuously.",
          ),
          t(
            "Si el árbol tiene muchísimos pasos muy cortos, se llega al modelo de **Black-Scholes-Merton** para opciones europeas (solo se ejercen al vencimiento). Usa cinco insumos: precio S, ejercicio K, plazo T, tasa r y **volatilidad** σ (qué tanto se mueve el precio). Curiosamente, **no** necesita el rendimiento esperado de la acción: el no arbitraje lo elimina.",
            "If the tree has a huge number of very short steps, you reach the **Black-Scholes-Merton** model for European options (exercised only at expiry). It uses five inputs: price S, strike K, time T, rate r and **volatility** σ (how much the price moves). Interestingly, it does **not** need the stock's expected return: no-arbitrage removes it.",
          ),
          t(
            "Sus supuestos son fuertes: volatilidad y tasa constantes, sin costos de transacción y precios que se mueven de forma continua. Por eso en la práctica se ajusta (por ejemplo, con la volatilidad implícita). N(d₂) se interpreta como la probabilidad neutral al riesgo de que la call termine dentro del dinero, y N(d₁) es la **delta**: cuánto cambia la call si S sube $1.",
            "Its assumptions are strong: constant volatility and rate, no transaction costs and prices that move continuously. That is why in practice it is adjusted (for example, with implied volatility). N(d₂) is read as the risk-neutral probability that the call ends in the money, and N(d₁) is the **delta**: how much the call changes if S rises by $1.",
          ),
          t(
            "La **paridad put-call** liga call y put europeas con el mismo K y T: C − P = S − VP(K). Mini ejemplo: C = $8, S = $50 y el valor presente de K = $48. Entonces P = 8 − 50 + 48 = $6. Si la put cotizara en $7, habría arbitraje.",
            "**Put-call parity** links European calls and puts with the same K and T: C − P = S − PV(K). Mini example: C = $8, S = $50 and the present value of K = $48. Then P = 8 − 50 + 48 = $6. If the put traded at $7, there would be arbitrage.",
          ),
        ],
        formulas: [
          {
            name: t("Precio de una call europea con Black-Scholes-Merton", "European call price with Black-Scholes-Merton"),
            expression: "C = S·N(d₁) − K·e^(−rT)·N(d₂);  d₁ = [ln(S/K) + (r + σ²/2)T] ÷ (σ√T);  d₂ = d₁ − σ√T",
            variables: [
              { symbol: "C", meaning: t("Precio justo de la call hoy, en pesos.", "Fair price of the call today, in pesos.") },
              { symbol: "S", meaning: t("Precio actual de la acción, en pesos.", "Current stock price, in pesos.") },
              { symbol: "K", meaning: t("Precio de ejercicio, en pesos.", "Strike price, in pesos.") },
              { symbol: "T", meaning: t("Tiempo al vencimiento, en años.", "Time to expiry, in years.") },
              { symbol: "r", meaning: t("Tasa libre de riesgo anual continua, en decimal.", "Annual continuous risk-free rate, as a decimal.") },
              { symbol: "σ", meaning: t("Volatilidad anual de la acción, en decimal (20% = 0.20): qué tanto se mueve su precio.", "Annual volatility of the stock, as a decimal (20% = 0.20): how much its price moves.") },
              { symbol: "ln", meaning: t("Logaritmo natural (LN en Excel). ln(S/K) mide qué tan arriba o abajo está S respecto de K.", "Natural logarithm (LN in Excel). ln(S/K) measures how far above or below K the price S is.") },
              { symbol: "N( )", meaning: t("Probabilidad acumulada de la normal estándar: un número entre 0 y 1 que se busca en tabla o con DISTR.NORM.ESTAND.N(x; VERDADERO) en Excel.", "Cumulative standard normal probability: a number between 0 and 1 looked up in a table or with NORM.S.DIST(x, TRUE) in Excel.") },
              { symbol: "e^(−rT)", meaning: t("Factor de descuento continuo: convierte K, que se paga al vencimiento, a valor de hoy.", "Continuous discount factor: converts K, paid at expiry, into today's value.") },
              { symbol: "d₁, d₂", meaning: t("Números auxiliares; N(d₂) ≈ probabilidad neutral al riesgo de ejercer y N(d₁) es la delta.", "Helper numbers; N(d₂) ≈ risk-neutral probability of exercise and N(d₁) is the delta.") },
            ],
            steps: [
              t("Convierte tasa y volatilidad a decimales y el plazo a años.", "Convert rate and volatility to decimals and the time to years."),
              t("Calcula σ√T y ln(S/K).", "Compute σ√T and ln(S/K)."),
              t("Calcula d₁ = [ln(S/K) + (r + σ²/2) × T] ÷ (σ√T) y luego d₂ = d₁ − σ√T.", "Compute d₁ = [ln(S/K) + (r + σ²/2) × T] ÷ (σ√T) and then d₂ = d₁ − σ√T."),
              t("Busca N(d₁) y N(d₂) en tabla o Excel.", "Look up N(d₁) and N(d₂) in a table or Excel."),
              t("Calcula C = S × N(d₁) − K × e^(−rT) × N(d₂).", "Compute C = S × N(d₁) − K × e^(−rT) × N(d₂)."),
            ],
            example: t(
              "S = $100, K = $100, T = 1 año, r = 5%, σ = 20%. σ√T = 0.20 × 1 = 0.20; ln(100/100) = 0. d₁ = [0 + (0.05 + 0.02) × 1] ÷ 0.20 = 0.35; d₂ = 0.35 − 0.20 = 0.15. N(0.35) ≈ 0.6368; N(0.15) ≈ 0.5596. K × e^(−0.05) ≈ 95.12. C = 100 × 0.6368 − 95.12 × 0.5596 ≈ 63.68 − 53.23 ≈ **$10.45**.",
              "S = $100, K = $100, T = 1 year, r = 5%, σ = 20%. σ√T = 0.20 × 1 = 0.20; ln(100/100) = 0. d₁ = [0 + (0.05 + 0.02) × 1] ÷ 0.20 = 0.35; d₂ = 0.35 − 0.20 = 0.15. N(0.35) ≈ 0.6368; N(0.15) ≈ 0.5596. K × e^(−0.05) ≈ 95.12. C = 100 × 0.6368 − 95.12 × 0.5596 ≈ 63.68 − 53.23 ≈ **$10.45**.",
            ),
            interpret: t(
              "Fíjate que el rendimiento esperado de la acción no aparece en ningún lado: solo S, K, T, r y σ.",
              "Notice that the stock's expected return does not appear anywhere: only S, K, T, r and σ.",
            ),
            mistake: t(
              "Usar σ² en lugar de σ²/2 en d₁, o poner la volatilidad en porcentaje (20) en lugar de decimal (0.20).",
              "Using σ² instead of σ²/2 in d₁, or entering volatility as a percentage (20) instead of a decimal (0.20).",
            ),
          },
          {
            name: t("Paridad put-call (opciones europeas sin dividendos)", "Put-call parity (European options, no dividends)"),
            expression: "C − P = S − K·e^(−rT)   →   P = C − S + K·e^(−rT)",
            variables: [
              { symbol: "C", meaning: t("Precio de la call, en pesos.", "Call price, in pesos.") },
              { symbol: "P", meaning: t("Precio de la put con el mismo K y T, en pesos.", "Price of the put with the same K and T, in pesos.") },
              { symbol: "S", meaning: t("Precio actual de la acción, en pesos.", "Current stock price, in pesos.") },
              { symbol: "K·e^(−rT)", meaning: t("Valor presente del precio de ejercicio, VP(K): lo que vale hoy pagar K al vencimiento.", "Present value of the strike, PV(K): what paying K at expiry is worth today.") },
            ],
            steps: [
              t("Trae K a valor presente: K × e^(−rT) (o usa el VP(K) que te den).", "Bring K to present value: K × e^(−rT) (or use the PV(K) you are given)."),
              t("Despeja la opción que buscas; para la put: P = C − S + VP(K).", "Solve for the option you need; for the put: P = C − S + PV(K)."),
              t("Compara con el precio de mercado: si difiere, hay arbitraje por la diferencia.", "Compare with the market price: if they differ, there is arbitrage for the difference."),
            ],
            example: t(
              "C = $12, S = $100, K = $105, r = 5%, T = 1 año. VP(K) = 105 × e^(−0.05) ≈ 99.88. P = 12 − 100 + 99.88 ≈ **$11.88**. Si la put cotiza en $13, está cara por 13 − 11.88 = $1.12.",
              "C = $12, S = $100, K = $105, r = 5%, T = 1 year. PV(K) = 105 × e^(−0.05) ≈ 99.88. P = 12 − 100 + 99.88 ≈ **$11.88**. If the put trades at $13, it is $1.12 too expensive (13 − 11.88).",
            ),
            mistake: t(
              "Usar K sin descontar o capitalizarlo (K × e^(rT)). K se paga en el futuro, así que se trae a hoy.",
              "Using K undiscounted or compounding it (K × e^(rT)). K is paid in the future, so it is brought to today.",
            ),
          },
        ],
        bullets: [
          t("Sube S → la call vale más y la put menos.", "S rises → the call is worth more and the put less."),
          t("Sube σ → calls y puts valen más (más chance de terminar muy dentro del dinero).", "σ rises → calls and puts are worth more (more chance of ending deep in the money)."),
          t("Sube K → la call vale menos y la put más.", "K rises → the call is worth less and the put more."),
          t("Dividendos esperados más altos → la call vale menos.", "Higher expected dividends → the call is worth less."),
        ],
      },
    ],
    examples: [
      {
        title: t("Call con árbol binomial de un paso", "Call with a one-step binomial tree"),
        problem: t(
          "Una acción vale $100. En un periodo puede subir a $120 (u = 1.2) o bajar a $90 (d = 0.9). La tasa libre de riesgo del periodo es 5%. Valúa una call europea con K = $100 que vence al final del periodo.",
          "A stock is worth $100. In one period it can go up to $120 (u = 1.2) or down to $90 (d = 0.9). The risk-free rate for the period is 5%. Price a European call with K = $100 expiring at the end of the period.",
        ),
        steps: [
          t("Pagos al vencimiento: si sube, máx(120 − 100, 0) = 20; si baja, máx(90 − 100, 0) = 0.", "Payoffs at expiry: if up, max(120 − 100, 0) = 20; if down, max(90 − 100, 0) = 0."),
          t("Probabilidad neutral al riesgo: p = (1.05 − 0.9) / (1.2 − 0.9) = 0.15 / 0.30 = 0.5.", "Risk-neutral probability: p = (1.05 − 0.9) / (1.2 − 0.9) = 0.15 / 0.30 = 0.5."),
          t("Valor esperado neutral al riesgo: 0.5 × 20 + 0.5 × 0 = 10.", "Risk-neutral expected value: 0.5 × 20 + 0.5 × 0 = 10."),
          t("Descontamos un periodo: 10 / 1.05 = 9.5238.", "Discount one period: 10 / 1.05 = 9.5238."),
        ],
        result: t(
          "La call vale aproximadamente $9.52. Cualquier otro precio permitiría una ganancia sin riesgo replicando la opción con acciones y préstamo.",
          "The call is worth about $9.52. Any other price would allow a risk-free profit by replicating the option with stock and a loan.",
        ),
      },
      {
        title: t("Detectar arbitraje con la paridad put-call", "Spotting arbitrage with put-call parity"),
        problem: t(
          "Opciones europeas sobre la misma acción, mismo K = $50 y plazo. Datos: S = $50, call = $8, valor presente de K = $48. La put cotiza en $7. ¿Está bien valuada?",
          "European options on the same stock, same K = $50 and maturity. Data: S = $50, call = $8, present value of K = $48. The put trades at $7. Is it fairly priced?",
        ),
        steps: [
          t("Paridad: C − P = S − VP(K), así que P = C − S + VP(K).", "Parity: C − P = S − PV(K), so P = C − S + PV(K)."),
          t("P justa = 8 − 50 + 48 = $6.", "Fair P = 8 − 50 + 48 = $6."),
          t("La put de mercado ($7) está cara por $1.", "The market put ($7) is $1 too expensive."),
          t("Estrategia: vender la put cara y comprar la 'put sintética' (comprar call, vender acción, invertir VP(K)): ganas $1 hoy sin riesgo.", "Strategy: sell the expensive put and buy the 'synthetic put' (buy call, short stock, invest PV(K)): you earn $1 today risk-free."),
        ],
        result: t(
          "La put debería valer $6; a $7 hay arbitraje de $1 por opción, antes de costos de transacción.",
          "The put should be worth $6; at $7 there is a $1 arbitrage per option, before transaction costs.",
        ),
      },
    ],
    keyPoints: [
      t("Los derivados se valúan por no arbitraje: su precio es el costo de replicarlos.", "Derivatives are priced by no-arbitrage: their price is the cost of replicating them."),
      t("Forward justo: precio de hoy capitalizado a la tasa libre de riesgo, menos dividendos.", "Fair forward: today's price grown at the risk-free rate, minus dividends."),
      t("En el árbol binomial, p = (1 + r − d)/(u − d) y se descuenta a la tasa libre de riesgo.", "In the binomial tree, p = (1 + r − d)/(u − d) and you discount at the risk-free rate."),
      t("Black-Scholes usa S, K, T, r y σ; no usa el rendimiento esperado de la acción.", "Black-Scholes uses S, K, T, r and σ; it does not use the stock's expected return."),
      t("Paridad put-call: C − P = S − VP(K) para opciones europeas.", "Put-call parity: C − P = S − PV(K) for European options."),
    ],
    normativeNote: NOTE_DERIVATIVES,
    exerciseIds: ['CUA-13-E1', 'CUA-13-E3', 'CUA-13-E4', 'CUA-13-E5', 'CUA-13-E6'],
  },
  // ───────────────────────────── CUA-14 ─────────────────────────────
  {
    id: 'CUA-14',
    level: 6,
    topicIds: ['CUA.14'],
    title: t("Simulación Monte Carlo", "Monte Carlo simulation"),
    summary: t(
      "La simulación Monte Carlo genera miles de escenarios aleatorios con un modelo y promedia sus resultados para estimar precios, riesgos y probabilidades difíciles de calcular a mano.",
      "Monte Carlo simulation generates thousands of random scenarios with a model and averages their results to estimate prices, risks and probabilities that are hard to compute by hand.",
    ),
    minutes: 11,
    objectives: [
      t("Describir los pasos de una simulación Monte Carlo y por qué funciona.", "Describe the steps of a Monte Carlo simulation and why it works."),
      t("Simular un paso del precio de una acción con movimiento browniano geométrico.", "Simulate one step of a stock price with geometric Brownian motion."),
      t("Valuar una opción por simulación y medir la precisión con el error estándar.", "Price an option by simulation and measure precision with the standard error."),
    ],
    theory: [
      {
        heading: t("Jugar el futuro miles de veces", "Play the future thousands of times"),
        body: [
          t(
            "**Monte Carlo** es una técnica que resuelve problemas con números aleatorios. En lugar de buscar una fórmula exacta, le pides a la computadora que 'juegue' el futuro miles de veces siguiendo un modelo, y luego miras qué pasó en promedio y qué tan seguido ocurrió lo malo.",
            "**Monte Carlo** is a technique that solves problems with random numbers. Instead of looking for an exact formula, you ask the computer to 'play' the future thousands of times following a model, and then look at what happened on average and how often the bad outcome occurred.",
          ),
          t(
            "Funciona por la **ley de los grandes números**: el promedio de muchas repeticiones independientes se acerca al valor esperado verdadero. Es como lanzar una moneda: con 10 lanzamientos puedes sacar 70% águilas, pero con 10,000 te acercarás mucho a 50%.",
            "It works because of the **law of large numbers**: the average of many independent repetitions gets close to the true expected value. It is like flipping a coin: with 10 flips you can get 70% heads, but with 10,000 you will get very close to 50%.",
          ),
          t(
            "Mini ejemplo: quieres saber la probabilidad de que tu ahorro para el retiro no alcance. Simulas 10,000 trayectorias de rendimientos; si en 1,200 se agota el dinero antes de tiempo, estimas un 12% de probabilidad de quedarte corto (con esos supuestos).",
            "Mini example: you want the probability that your retirement savings fall short. You simulate 10,000 return paths; if the money runs out early in 1,200 of them, you estimate a 12% probability of falling short (under those assumptions).",
          ),
        ],
        formulas: [
          {
            name: t("Precio de una opción por Monte Carlo", "Option price by Monte Carlo"),
            expression: "Precio ≈ [Σ máx(Sᵢ − K, 0) ÷ N] × Factor de descuento",
            variables: [
              { symbol: "Sᵢ", meaning: t("Precio final simulado en el escenario i, en pesos.", "Simulated final price in scenario i, in pesos.") },
              { symbol: "K", meaning: t("Precio de ejercicio de la call, en pesos.", "Strike price of the call, in pesos.") },
              { symbol: "máx(Sᵢ − K, 0)", meaning: t("Pago de la call en ese escenario: lo que sobra sobre K, o cero si no conviene ejercer.", "Call payoff in that scenario: the excess over K, or zero if exercising does not pay.") },
              { symbol: "Σ", meaning: t("Suma de los pagos de todos los escenarios.", "Sum of the payoffs of all scenarios.") },
              { symbol: "N", meaning: t("Número de escenarios simulados.", "Number of simulated scenarios.") },
              { symbol: "Factor de descuento", meaning: t("Número menor que 1 que trae un peso del vencimiento a hoy (por ejemplo, 0.95).", "Number below 1 that brings one peso from expiry to today (for example, 0.95).") },
            ],
            steps: [
              t("Calcula el pago de la opción en cada escenario, uno por uno.", "Compute the option payoff in each scenario, one by one."),
              t("Suma los pagos y divide entre N: es el pago promedio al vencimiento.", "Add the payoffs and divide by N: that is the average payoff at expiry."),
              t("Multiplica el promedio por el factor de descuento para tenerlo en pesos de hoy.", "Multiply the average by the discount factor to get it in today's pesos."),
            ],
            example: t(
              "Precios simulados: $70, $85, $96 y $110; call con K = $80; factor de descuento 0.95. Pagos: 0, 5, 16 y 30. Suma: 51. Promedio: 51 ÷ 4 = 12.75. Precio: 12.75 × 0.95 ≈ **$12.11**.",
              "Simulated prices: $70, $85, $96 and $110; call with K = $80; discount factor 0.95. Payoffs: 0, 5, 16 and 30. Sum: 51. Average: 51 ÷ 4 = 12.75. Price: 12.75 × 0.95 ≈ **$12.11**.",
            ),
            interpret: t(
              "La misma lógica sirve para probabilidades: escenarios donde pasa el evento ÷ N (1,200 ÷ 10,000 = 12%).",
              "The same logic works for probabilities: scenarios where the event happens ÷ N (1,200 ÷ 10,000 = 12%).",
            ),
            mistake: t(
              "Promediar primero los precios y luego restar K. El pago no es lineal (nunca es negativo), así que se calcula escenario por escenario.",
              "Averaging the prices first and then subtracting K. The payoff is not linear (it is never negative), so it is computed scenario by scenario.",
            ),
          },
        ],
        bullets: [
          t("1. Define el modelo y sus supuestos (distribución, parámetros).", "1. Define the model and its assumptions (distribution, parameters)."),
          t("2. Genera números aleatorios y construye escenarios.", "2. Generate random numbers and build scenarios."),
          t("3. Calcula el resultado de interés en cada escenario.", "3. Compute the outcome of interest in each scenario."),
          t("4. Resume: promedio, percentiles, probabilidades.", "4. Summarize: average, percentiles, probabilities."),
          t("5. Mide la precisión y revisa la sensibilidad a los supuestos.", "5. Measure precision and check sensitivity to assumptions."),
        ],
      },
      {
        heading: t("¿Cómo se simula un precio?", "How is a price simulated?"),
        body: [
          t(
            "El modelo más usado para simular precios de acciones es el **movimiento browniano geométrico** (MBG). Dice que el precio crece a un ritmo promedio μ (la **deriva**) y recibe choques aleatorios cuyo tamaño depende de la volatilidad σ. Al trabajar con exponenciales, el precio nunca se vuelve negativo.",
            "The most widely used model to simulate stock prices is **geometric Brownian motion** (GBM). It says the price grows at an average pace μ (the **drift**) and receives random shocks whose size depends on volatility σ. Because it works with exponentials, the price never becomes negative.",
          ),
          t(
            "Cada choque usa un número Z sacado de una **normal estándar** (promedio 0, desviación 1). El término −σ²/2 es una corrección para que el promedio del precio crezca a μ. Para valuar derivados se usa r en lugar de μ (mundo neutral al riesgo) y se descuenta a r.",
            "Each shock uses a number Z drawn from a **standard normal** (mean 0, deviation 1). The −σ²/2 term is a correction so that the average price grows at μ. To price derivatives you use r instead of μ (risk-neutral world) and discount at r.",
          ),
          t(
            "Mini ejemplo: S₀ = $100, μ = 8%, σ = 20%, Δt = 1 año y sale Z = 0.5. El exponente es (0.08 − 0.02) × 1 + 0.20 × 0.5 = 0.16, así que S₁ = 100 × e^0.16 ≈ $117.35.",
            "Mini example: S₀ = $100, μ = 8%, σ = 20%, Δt = 1 year and Z = 0.5 is drawn. The exponent is (0.08 − 0.02) × 1 + 0.20 × 0.5 = 0.16, so S₁ = 100 × e^0.16 ≈ $117.35.",
          ),
        ],
        formulas: [
          {
            name: t("Un paso de precio con movimiento browniano geométrico", "One price step with geometric Brownian motion"),
            expression: "S(t+Δt) = S(t) × exp[(μ − σ²/2)·Δt + σ·√Δt·Z],  Z ~ N(0, 1)",
            variables: [
              { symbol: "S(t)", meaning: t("Precio de partida, en pesos.", "Starting price, in pesos.") },
              { symbol: "S(t+Δt)", meaning: t("Precio simulado al final del paso, en pesos.", "Simulated price at the end of the step, in pesos.") },
              { symbol: "μ", meaning: t("Deriva: rendimiento promedio anual esperado, en decimal (para valuar derivados se usa r).", "Drift: expected average annual return, as a decimal (to price derivatives use r).") },
              { symbol: "σ", meaning: t("Volatilidad anual, en decimal.", "Annual volatility, as a decimal.") },
              { symbol: "Δt", meaning: t("Tamaño del paso, en años (un mes = 1/12).", "Step size, in years (one month = 1/12).") },
              { symbol: "Z", meaning: t("Número al azar de una normal estándar (promedio 0, desviación 1); es el 'choque' del escenario.", "Random number from a standard normal (mean 0, deviation 1); it is the scenario's 'shock'.") },
              { symbol: "exp[ ]", meaning: t("Función exponencial, e elevado a lo que está entre corchetes (EXP en Excel).", "Exponential function, e raised to what is in the brackets (EXP in Excel).") },
            ],
            steps: [
              t("Calcula la parte fija: (μ − σ²/2) × Δt.", "Compute the fixed part: (μ − σ²/2) × Δt."),
              t("Calcula la parte aleatoria: σ × √Δt × Z.", "Compute the random part: σ × √Δt × Z."),
              t("Suma ambas partes para obtener el exponente.", "Add both parts to get the exponent."),
              t("Saca la exponencial del exponente y multiplícala por el precio de partida.", "Take the exponential of the exponent and multiply it by the starting price."),
            ],
            example: t(
              "S(t) = $40, μ = 12%, σ = 25%, Δt = 0.5 años, Z = 1.2. Parte fija: σ²/2 = 0.0625 ÷ 2 = 0.03125; (0.12 − 0.03125) × 0.5 ≈ 0.0444. Parte aleatoria: 0.25 × √0.5 × 1.2 ≈ 0.25 × 0.7071 × 1.2 ≈ 0.2121. Exponente ≈ 0.2565. e^0.2565 ≈ 1.2924. Precio: 40 × 1.2924 ≈ **$51.70**.",
              "S(t) = $40, μ = 12%, σ = 25%, Δt = 0.5 years, Z = 1.2. Fixed part: σ²/2 = 0.0625 ÷ 2 = 0.03125; (0.12 − 0.03125) × 0.5 ≈ 0.0444. Random part: 0.25 × √0.5 × 1.2 ≈ 0.25 × 0.7071 × 1.2 ≈ 0.2121. Exponent ≈ 0.2565. e^0.2565 ≈ 1.2924. Price: 40 × 1.2924 ≈ **$51.70**.",
            ),
            interpret: t(
              "Z positivo empuja el precio hacia arriba y Z negativo hacia abajo; como se usa la exponencial, el precio nunca queda negativo.",
              "A positive Z pushes the price up and a negative Z pushes it down; because the exponential is used, the price never goes negative.",
            ),
            mistake: t(
              "Omitir la corrección −σ²/2, u olvidar sacar la raíz de Δt en la parte aleatoria.",
              "Omitting the −σ²/2 correction, or forgetting to take the square root of Δt in the random part.",
            ),
          },
        ],
      },
      {
        heading: t("¿Cuánto confiar en el resultado?", "How much to trust the result?"),
        body: [
          t(
            "Una estimación Monte Carlo tiene error por azar. Se mide con el **error estándar**: la desviación estándar de los resultados simulados dividida entre la raíz del número de simulaciones N. Como depende de √N, para **reducir el error a la mitad necesitas 4 veces más** simulaciones.",
            "A Monte Carlo estimate has random error. It is measured with the **standard error**: the standard deviation of the simulated results divided by the square root of the number of simulations N. Because it depends on √N, to **cut the error in half you need 4 times as many** simulations.",
          ),
          t(
            "Una **semilla** (seed) fija el punto de partida del generador de números aleatorios: con la misma semilla obtienes los mismos números, lo que permite repetir y revisar resultados. Las técnicas de **reducción de varianza**, como las **variables antitéticas** (usar Z y también −Z), bajan el error sin aumentar tanto N.",
            "A **seed** fixes the starting point of the random number generator: with the same seed you get the same numbers, which lets you repeat and review results. **Variance reduction** techniques, such as **antithetic variates** (using Z and also −Z), lower the error without increasing N as much.",
          ),
          t(
            "Mini ejemplo: con 10,000 simulaciones, los pagos de una opción tienen desviación estándar de $30. El error estándar es 30 / 100 = $0.30, y un intervalo de 95% es la estimación ± 1.96 × 0.30 = ± $0.59.",
            "Mini example: with 10,000 simulations, an option's payoffs have a standard deviation of $30. The standard error is 30 / 100 = $0.30, and a 95% interval is the estimate ± 1.96 × 0.30 = ± $0.59.",
          ),
        ],
        formulas: [
          {
            name: t("Error estándar de Monte Carlo y simulaciones necesarias", "Monte Carlo standard error and simulations needed"),
            expression: "Error estándar = s ÷ √N   ·   N necesario = (s ÷ Error objetivo)²",
            variables: [
              { symbol: "s", meaning: t("Desviación estándar de los resultados simulados (por ejemplo, de los pagos descontados), en pesos.", "Standard deviation of the simulated results (for example, of the discounted payoffs), in pesos.") },
              { symbol: "N", meaning: t("Número de simulaciones.", "Number of simulations.") },
              { symbol: "√N", meaning: t("Raíz cuadrada de N.", "Square root of N.") },
              { symbol: "Error objetivo", meaning: t("El error estándar máximo que quieres aceptar, en pesos.", "The maximum standard error you want to accept, in pesos.") },
            ],
            steps: [
              t("Saca la raíz cuadrada del número de simulaciones.", "Take the square root of the number of simulations."),
              t("Divide la desviación estándar entre esa raíz: es el error estándar.", "Divide the standard deviation by that root: that is the standard error."),
              t("Si quieres un intervalo de 95%, usa estimación ± 1.96 × error estándar.", "If you want a 95% interval, use estimate ± 1.96 × standard error."),
              t("Para saber cuántas simulaciones necesitas, divide s entre el error que quieres y eleva al cuadrado.", "To know how many simulations you need, divide s by the error you want and square it."),
            ],
            example: t(
              "s = $18 y N = 3,600. √3,600 = 60. Error estándar = 18 ÷ 60 = **$0.30**. Intervalo de 95%: ± 1.96 × 0.30 ≈ ± $0.59. Para bajar a $0.10: (18 ÷ 0.10)² = 180² = 32,400 simulaciones.",
              "s = $18 and N = 3,600. √3,600 = 60. Standard error = 18 ÷ 60 = **$0.30**. 95% interval: ± 1.96 × 0.30 ≈ ± $0.59. To get down to $0.10: (18 ÷ 0.10)² = 180² = 32,400 simulations.",
            ),
            interpret: t(
              "Por la raíz, dividir el error entre 2 exige 4 veces más simulaciones, y entre 3 exige 9 veces más.",
              "Because of the square root, dividing the error by 2 requires 4 times more simulations, and by 3 requires 9 times more.",
            ),
            mistake: t(
              "Dividir entre N en lugar de entre √N, o creer que duplicar simulaciones parte el error a la mitad.",
              "Dividing by N instead of by √N, or believing that doubling simulations halves the error.",
            ),
          },
        ],
        bullets: [
          t("Ventaja: maneja problemas con muchas variables o pagos complicados.", "Advantage: handles problems with many variables or complicated payoffs."),
          t("Limitación: es lento si necesitas mucha precisión.", "Limitation: it is slow if you need high precision."),
          t("Limitación: 'basura entra, basura sale': depende de los supuestos.", "Limitation: 'garbage in, garbage out': it depends on the assumptions."),
        ],
      },
    ],
    examples: [
      {
        title: t("Valuar una call con cinco escenarios", "Pricing a call with five scenarios"),
        problem: t(
          "Simulaste (en mundo neutral al riesgo) cinco precios finales de una acción: $92, $105, $118, $99 y $110. La call tiene K = $100 y el factor de descuento al vencimiento es 0.97. Estima el precio de la call.",
          "You simulated (in a risk-neutral world) five final prices of a stock: $92, $105, $118, $99 and $110. The call has K = $100 and the discount factor to expiry is 0.97. Estimate the call price.",
        ),
        steps: [
          t("Pago de cada escenario, máx(S − 100, 0): 0, 5, 18, 0 y 10.", "Payoff in each scenario, max(S − 100, 0): 0, 5, 18, 0 and 10."),
          t("Promedio de pagos: (0 + 5 + 18 + 0 + 10) / 5 = 33 / 5 = 6.6.", "Average payoff: (0 + 5 + 18 + 0 + 10) / 5 = 33 / 5 = 6.6."),
          t("Valor presente: 6.6 × 0.97 = 6.402.", "Present value: 6.6 × 0.97 = 6.402."),
          t("Con solo 5 escenarios el error es enorme; en la práctica se usan decenas de miles.", "With only 5 scenarios the error is huge; in practice tens of thousands are used."),
        ],
        result: t(
          "Estimación ≈ $6.40. El método es correcto, pero se necesitan muchas más simulaciones para confiar en el número.",
          "Estimate ≈ $6.40. The method is right, but many more simulations are needed to trust the number.",
        ),
      },
      {
        title: t("¿Cuántas simulaciones necesito?", "How many simulations do I need?"),
        problem: t(
          "Con 10,000 simulaciones obtuviste un error estándar de $0.30. Tu jefe quiere un error de $0.10. ¿Cuántas simulaciones necesitas?",
          "With 10,000 simulations you got a standard error of $0.30. Your boss wants an error of $0.10. How many simulations do you need?",
        ),
        steps: [
          t("Quieres dividir el error entre 3 (0.30 / 0.10 = 3).", "You want to divide the error by 3 (0.30 / 0.10 = 3)."),
          t("Como el error depende de 1/√N, hay que multiplicar N por 3² = 9.", "Since the error depends on 1/√N, you must multiply N by 3² = 9."),
          t("N nuevo = 10,000 × 9 = 90,000.", "New N = 10,000 × 9 = 90,000."),
        ],
        result: t(
          "Necesitas unas 90,000 simulaciones (o usar reducción de varianza para lograrlo con menos).",
          "You need about 90,000 simulations (or use variance reduction to get there with fewer).",
        ),
      },
    ],
    keyPoints: [
      t("Monte Carlo estima valores promediando muchos escenarios aleatorios generados con un modelo.", "Monte Carlo estimates values by averaging many random scenarios generated by a model."),
      t("El MBG simula precios con deriva, volatilidad y choques normales; el precio nunca es negativo.", "GBM simulates prices with drift, volatility and normal shocks; the price is never negative."),
      t("Para valuar derivados se simula con r y se descuenta a r.", "To price derivatives you simulate with r and discount at r."),
      t("Error estándar = s/√N: reducirlo a la mitad cuesta 4 veces más simulaciones.", "Standard error = s/√N: halving it costs 4 times more simulations."),
      t("La semilla hace reproducible la simulación; los supuestos determinan la calidad.", "The seed makes the simulation reproducible; the assumptions determine its quality."),
    ],
    normativeNote: NOTE_MC,
    exerciseIds: ['CUA-14-E1', 'CUA-14-E2', 'CUA-14-E4', 'CUA-14-E5', 'CUA-14-E6'],
  },
  // ───────────────────────────── CUA-15 ─────────────────────────────
  {
    id: 'CUA-15',
    level: 6,
    topicIds: ['CUA.15'],
    title: t("Programación cuantitativa con Python", "Quantitative programming with Python"),
    summary: t(
      "Python, con NumPy y pandas, permite cargar datos financieros, calcular rendimientos e indicadores de forma vectorizada y hacer análisis reproducibles.",
      "Python, with NumPy and pandas, lets you load financial data, compute returns and indicators in a vectorized way and run reproducible analyses.",
    ),
    minutes: 11,
    objectives: [
      t("Identificar para qué sirven NumPy, pandas, matplotlib y SciPy en finanzas.", "Identify what NumPy, pandas, matplotlib and SciPy are used for in finance."),
      t("Calcular rendimientos y promedios móviles con pandas (pct_change, rolling, shift).", "Compute returns and moving averages with pandas (pct_change, rolling, shift)."),
      t("Aplicar buenas prácticas: vectorizar, fijar semillas, versionar y probar el código.", "Apply good practices: vectorize, set seeds, version and test code."),
    ],
    theory: [
      {
        heading: t("¿Por qué Python en finanzas?", "Why Python in finance?"),
        body: [
          t(
            "**Python** es un lenguaje de programación gratuito y fácil de leer. En finanzas se volvió popular porque tiene **bibliotecas** (paquetes de código ya hecho) para casi todo: cálculo numérico, tablas de datos, gráficas, estadística y machine learning. Una biblioteca es como una caja de herramientas: no fabricas el martillo, lo usas.",
            "**Python** is a free, easy-to-read programming language. It became popular in finance because it has **libraries** (packages of ready-made code) for almost everything: numerical computing, data tables, charts, statistics and machine learning. A library is like a toolbox: you do not build the hammer, you use it.",
          ),
          t(
            "Las cuatro más usadas: **NumPy** maneja arreglos (listas de números) y hace matemáticas rápidas con ellos; **pandas** maneja tablas con fechas (el **DataFrame**, parecido a una hoja de cálculo); **matplotlib** dibuja gráficas; **SciPy** agrega estadística, optimización y distribuciones. Muchos analistas trabajan en **Jupyter**, un cuaderno donde mezclas código, resultados y notas.",
            "The four most used: **NumPy** handles arrays (lists of numbers) and does fast math with them; **pandas** handles tables with dates (the **DataFrame**, similar to a spreadsheet); **matplotlib** draws charts; **SciPy** adds statistics, optimization and distributions. Many analysts work in **Jupyter**, a notebook where you mix code, results and notes.",
          ),
          t(
            "Mini ejemplo: con NumPy, `np.mean(np.array([2, 4, 9]))` devuelve 5.0, el promedio de los tres números, sin escribir un ciclo.",
            "Mini example: with NumPy, `np.mean(np.array([2, 4, 9]))` returns 5.0, the average of the three numbers, without writing a loop.",
          ),
        ],
        bullets: [
          t("NumPy: arreglos y álgebra lineal rápida.", "NumPy: arrays and fast linear algebra."),
          t("pandas: series de tiempo y tablas (DataFrame).", "pandas: time series and tables (DataFrame)."),
          t("matplotlib: gráficas de precios, rendimientos y distribuciones.", "matplotlib: charts of prices, returns and distributions."),
          t("SciPy: estadística, distribuciones y optimización.", "SciPy: statistics, distributions and optimization."),
        ],
      },
      {
        heading: t("Rendimientos en un solo paso", "Returns in a single step"),
        body: [
          t(
            "En pandas, una **Serie** es una columna de datos con índice (normalmente fechas) y un **DataFrame** es una tabla de varias Series. Con unas pocas funciones haces lo que en una hoja de cálculo tomaría muchas fórmulas copiadas hacia abajo.",
            "In pandas, a **Series** is a column of data with an index (usually dates) and a **DataFrame** is a table of several Series. With a few functions you do what would take many copied-down formulas in a spreadsheet.",
          ),
          t(
            "`pct_change()` calcula el rendimiento simple de cada día respecto al anterior (el primero queda vacío, NaN, porque no tiene día previo). `rolling(n).mean()` saca el promedio móvil de las últimas n observaciones. `shift(1)` recorre los datos un día hacia adelante, para que cada fila vea el valor de **ayer** y no el de hoy. `dropna()` elimina valores faltantes.",
            "`pct_change()` computes each day's simple return versus the previous one (the first stays empty, NaN, because it has no prior day). `rolling(n).mean()` takes the moving average of the last n observations. `shift(1)` moves the data one day forward, so each row sees **yesterday's** value and not today's. `dropna()` removes missing values.",
          ),
          t(
            "Mini ejemplo: precios 100, 102 y 99.96. `pct_change()` devuelve NaN, 0.02 y −0.02: subió 2% y luego bajó 2% (102 × 0.98 = 99.96).",
            "Mini example: prices 100, 102 and 99.96. `pct_change()` returns NaN, 0.02 and −0.02: it rose 2% and then fell 2% (102 × 0.98 = 99.96).",
          ),
        ],
        formulas: [
          {
            name: t("Rendimiento simple diario (lo que hace pct_change)", "Simple daily return (what pct_change does)"),
            expression: "ret = Precio de hoy ÷ Precio de ayer − 1   ·   en pandas: ret = precios.pct_change()",
            variables: [
              { symbol: "ret", meaning: t("Rendimiento del día, en decimal (0.05 = subió 5%; −0.10 = bajó 10%).", "The day's return, as a decimal (0.05 = rose 5%; −0.10 = fell 10%).") },
              { symbol: "Precio de hoy", meaning: t("Cierre del día que estás calculando, en pesos.", "Close of the day you are computing, in pesos.") },
              { symbol: "Precio de ayer", meaning: t("Cierre del día inmediato anterior (no el primero de la serie), en pesos.", "Close of the immediately previous day (not the first of the series), in pesos.") },
            ],
            steps: [
              t("Divide cada precio entre el precio del día anterior.", "Divide each price by the previous day's price."),
              t("Resta 1 al resultado: queda el rendimiento en decimal.", "Subtract 1 from the result: you get the return as a decimal."),
              t("El primer día no tiene precio anterior, por eso pandas pone NaN (vacío).", "The first day has no previous price, so pandas puts NaN (empty)."),
            ],
            example: t(
              "Precios: 40, 44 y 41.8. Día 2: 44 ÷ 40 = 1.10; 1.10 − 1 = **0.10**. Día 3: 41.8 ÷ 44 = 0.95; 0.95 − 1 = **−0.05**. pandas devuelve NaN, 0.10, −0.05.",
              "Prices: 40, 44 and 41.8. Day 2: 44 ÷ 40 = 1.10; 1.10 − 1 = **0.10**. Day 3: 41.8 ÷ 44 = 0.95; 0.95 − 1 = **−0.05**. pandas returns NaN, 0.10, −0.05.",
            ),
            mistake: t(
              "Comparar contra el primer precio de la serie en lugar del día anterior, o escribir 10 en lugar de 0.10 (pandas da decimales, no porcentajes).",
              "Comparing against the first price of the series instead of the previous day, or writing 10 instead of 0.10 (pandas gives decimals, not percentages).",
            ),
          },
          {
            name: t("Promedio móvil de n días (lo que hace rolling(n).mean())", "n-day moving average (what rolling(n).mean() does)"),
            expression: "mm_n = (suma de los últimos n precios) ÷ n   ·   en pandas: precios.rolling(n).mean()",
            variables: [
              { symbol: "mm_n", meaning: t("Promedio móvil de n días en cada fecha, en pesos.", "n-day moving average on each date, in pesos.") },
              { symbol: "n", meaning: t("Tamaño de la ventana: cuántos días recientes se promedian (por ejemplo, 3 o 20).", "Window size: how many recent days are averaged (for example, 3 or 20).") },
              { symbol: "últimos n precios", meaning: t("El precio de ese día y los n − 1 anteriores.", "That day's price and the n − 1 before it.") },
            ],
            steps: [
              t("Ubica la fila que quieres calcular y toma ese precio junto con los n − 1 anteriores.", "Find the row you want and take that price together with the n − 1 before it."),
              t("Súmalos y divide entre n.", "Add them and divide by n."),
              t("Las primeras n − 1 filas salen NaN porque todavía no hay n datos.", "The first n − 1 rows come out NaN because there are not yet n data points."),
            ],
            example: t(
              "Precios 20, 23, 26 y 29 con n = 3. Fila 3: (20 + 23 + 26) ÷ 3 = 69 ÷ 3 = **23**. Fila 4: (23 + 26 + 29) ÷ 3 = 78 ÷ 3 = **26**. Resultado: NaN, NaN, 23, 26.",
              "Prices 20, 23, 26 and 29 with n = 3. Row 3: (20 + 23 + 26) ÷ 3 = 69 ÷ 3 = **23**. Row 4: (23 + 26 + 29) ÷ 3 = 78 ÷ 3 = **26**. Result: NaN, NaN, 23, 26.",
            ),
            interpret: t(
              "Si quieres usar una señal (por ejemplo, precio > promedio móvil) para operar, recórrela un día con `senal.shift(1)`: así cada día usa solo lo que sabías ayer.",
              "If you want to use a signal (for example, price > moving average) to trade, shift it one day with `signal.shift(1)`: that way each day uses only what you knew yesterday.",
            ),
            mistake: t(
              "Promediar toda la serie o los primeros n precios en lugar de los n más recientes de cada fila.",
              "Averaging the whole series or the first n prices instead of the n most recent ones for each row.",
            ),
          },
        ],
      },
      {
        heading: t("Rápido y fácil de repetir", "Fast and easy to repeat"),
        body: [
          t(
            "**Vectorizar** es aplicar una operación a todo un arreglo de una vez en lugar de recorrerlo con un ciclo `for`. Por ejemplo, `precios * 1.1` multiplica toda la columna. Es más corto, más claro y mucho más rápido, porque NumPy y pandas hacen el trabajo pesado en código optimizado.",
            "**Vectorizing** means applying an operation to a whole array at once instead of walking through it with a `for` loop. For example, `prices * 1.1` multiplies the whole column. It is shorter, clearer and much faster, because NumPy and pandas do the heavy lifting in optimized code.",
          ),
          t(
            "Un análisis cuantitativo debe poder **repetirse** y dar lo mismo. Para eso: fija la **semilla** de números aleatorios, guarda el código en un **control de versiones** (como git), escribe **pruebas** pequeñas que revisen tus funciones con casos conocidos y **nunca sobrescribas los datos originales**: trabaja sobre copias.",
            "A quantitative analysis must be **repeatable** and give the same result. To do this: set the random **seed**, keep the code under **version control** (such as git), write small **tests** that check your functions against known cases and **never overwrite the raw data**: work on copies.",
          ),
          t(
            "Mini ejemplo: `rng = np.random.default_rng(42)` crea un generador con semilla 42. Si tu colega corre el mismo código con la misma semilla, obtiene exactamente las mismas simulaciones y puede revisar tu resultado.",
            "Mini example: `rng = np.random.default_rng(42)` creates a generator with seed 42. If your colleague runs the same code with the same seed, they get exactly the same simulations and can review your result.",
          ),
        ],
        bullets: [
          t("Prefiere operaciones vectorizadas a ciclos.", "Prefer vectorized operations to loops."),
          t("Fija semillas para simulaciones.", "Set seeds for simulations."),
          t("Versiona el código y escribe pruebas.", "Version the code and write tests."),
          t("Revisa faltantes (NaN), fechas y unidades antes de calcular.", "Check missing values (NaN), dates and units before computing."),
        ],
      },
    ],
    examples: [
      {
        title: t("Rendimientos y volatilidad en pocas líneas", "Returns and volatility in a few lines"),
        problem: t(
          "Tienes una Serie `precios` con 4 cierres hipotéticos: 50, 55, 44 y 46.2. Calcula con pandas los rendimientos diarios y su promedio.",
          "You have a Series `prices` with 4 hypothetical closes: 50, 55, 44 and 46.2. Compute the daily returns and their average with pandas.",
        ),
        steps: [
          t("`ret = precios.pct_change()` → NaN, 0.10, −0.20, 0.05.", "`ret = prices.pct_change()` → NaN, 0.10, −0.20, 0.05."),
          t("Revisa: 55/50 − 1 = 0.10; 44/55 − 1 = −0.20; 46.2/44 − 1 = 0.05.", "Check: 55/50 − 1 = 0.10; 44/55 − 1 = −0.20; 46.2/44 − 1 = 0.05."),
          t("`ret.dropna().mean()` → (0.10 − 0.20 + 0.05) / 3 = −0.05 / 3 ≈ −0.0167.", "`ret.dropna().mean()` → (0.10 − 0.20 + 0.05) / 3 = −0.05 / 3 ≈ −0.0167."),
          t("`ret.std()` daría la volatilidad diaria muestral, sin escribir la fórmula.", "`ret.std()` would give the sample daily volatility, without writing the formula."),
        ],
        result: t(
          "Rendimientos: 10%, −20% y 5%; promedio ≈ −1.67% diario. Todo sin un solo ciclo for.",
          "Returns: 10%, −20% and 5%; average ≈ −1.67% per day. All without a single for loop.",
        ),
      },
      {
        title: t("Señal de cruce sin ver el futuro", "Crossover signal without peeking into the future"),
        problem: t(
          "Quieres comprar cuando el precio cierra por encima de su promedio móvil de 3 días. Los cierres son 10, 11, 12 y 13. ¿Cómo construyes la señal sin usar información que aún no tendrías?",
          "You want to buy when the price closes above its 3-day moving average. The closes are 10, 11, 12 and 13. How do you build the signal without using information you would not yet have?",
        ),
        steps: [
          t("`mm3 = precios.rolling(3).mean()` → NaN, NaN, 11, 12.", "`ma3 = prices.rolling(3).mean()` → NaN, NaN, 11, 12."),
          t("`senal = precios > mm3` → en los días 3 y 4 es verdadero (12 > 11 y 13 > 12).", "`signal = prices > ma3` → on days 3 and 4 it is true (12 > 11 and 13 > 12)."),
          t("La señal se conoce al cierre, así que solo puedes operar al día siguiente: `posicion = senal.shift(1)`.", "The signal is known at the close, so you can only trade the next day: `position = signal.shift(1)`."),
          t("El rendimiento de la estrategia es `posicion * ret`.", "The strategy return is `position * ret`."),
        ],
        result: t(
          "Usar `shift(1)` evita el sesgo de anticipación: cada día operas solo con lo que sabías el día anterior.",
          "Using `shift(1)` avoids look-ahead bias: each day you trade only with what you knew the day before.",
        ),
      },
    ],
    keyPoints: [
      t("NumPy (arreglos), pandas (tablas y fechas), matplotlib (gráficas) y SciPy (estadística) son la base.", "NumPy (arrays), pandas (tables and dates), matplotlib (charts) and SciPy (statistics) are the foundation."),
      t("pct_change calcula rendimientos; rolling, promedios móviles; shift, valores rezagados.", "pct_change computes returns; rolling, moving averages; shift, lagged values."),
      t("Vectorizar es más rápido y claro que los ciclos.", "Vectorizing is faster and clearer than loops."),
      t("Semillas, control de versiones y pruebas hacen el trabajo reproducible.", "Seeds, version control and tests make the work reproducible."),
      t("Revisa NaN, fechas y unidades antes de confiar en un resultado.", "Check NaN, dates and units before trusting a result."),
    ],
    normativeNote: NOTE_PYTHON,
    exerciseIds: ['CUA-15-E2', 'CUA-15-E3', 'CUA-15-E4', 'CUA-15-E5', 'CUA-15-E6'],
  },
  // ───────────────────────────── CUA-16 ─────────────────────────────
  {
    id: 'CUA-16',
    level: 6,
    topicIds: ['CUA.16'],
    title: t("Machine learning aplicado a finanzas", "Machine learning applied to finance"),
    summary: t(
      "El machine learning aprende patrones de datos para predecir o agrupar; en finanzas sirve para crédito, fraude y señales, siempre que se valide bien y se cuide el sobreajuste y el sesgo.",
      "Machine learning learns patterns from data to predict or group; in finance it is used for credit, fraud and signals, as long as it is properly validated and overfitting and bias are controlled.",
    ),
    minutes: 11,
    objectives: [
      t("Distinguir aprendizaje supervisado (regresión, clasificación) y no supervisado (agrupamiento).", "Distinguish supervised learning (regression, classification) from unsupervised learning (clustering)."),
      t("Reconocer el sobreajuste y separar datos de entrenamiento y prueba respetando el tiempo.", "Recognize overfitting and split training and test data respecting time order."),
      t("Evaluar un clasificador con matriz de confusión, exactitud, precisión y sensibilidad.", "Evaluate a classifier with a confusion matrix, accuracy, precision and recall."),
    ],
    theory: [
      {
        heading: t("Aprender de ejemplos pasados", "Learning from past examples"),
        body: [
          t(
            "El **machine learning** (aprendizaje automático) son métodos que **aprenden reglas a partir de ejemplos** en lugar de que alguien las programe a mano. Le das datos del pasado y el algoritmo encuentra patrones que luego aplica a casos nuevos.",
            "**Machine learning** is a set of methods that **learn rules from examples** instead of someone programming them by hand. You give it past data and the algorithm finds patterns it then applies to new cases.",
          ),
          t(
            "En el **aprendizaje supervisado** cada ejemplo trae la respuesta correcta, llamada **etiqueta**. Si la etiqueta es un número (el rendimiento de mañana), es **regresión**; si es una categoría (paga / no paga), es **clasificación**. Las columnas que usa para predecir se llaman **variables** o **features** (ingreso, antigüedad laboral, deudas). En el **no supervisado** no hay etiqueta: el algoritmo busca grupos parecidos, por ejemplo **segmentar clientes** de un banco por sus hábitos de gasto.",
            "In **supervised learning** each example comes with the right answer, called the **label**. If the label is a number (tomorrow's return), it is **regression**; if it is a category (pays / does not pay), it is **classification**. The columns used to predict are called **variables** or **features** (income, job tenure, debts). In **unsupervised** learning there is no label: the algorithm looks for similar groups, for example **segmenting customers** of a bank by their spending habits.",
          ),
          t(
            "Mini ejemplo: una financiera en México tiene 50,000 créditos pasados con la etiqueta 'pagó' o 'no pagó'. Entrena un modelo de clasificación (como un árbol de decisión o una regresión logística) para estimar la probabilidad de impago de un nuevo solicitante.",
            "Mini example: a lender in Mexico has 50,000 past loans labeled 'paid' or 'did not pay'. It trains a classification model (such as a decision tree or a logistic regression) to estimate a new applicant's probability of default.",
          ),
        ],
        bullets: [
          t("Regresión: predecir un número (rendimiento, precio de una casa).", "Regression: predict a number (return, house price)."),
          t("Clasificación: predecir una clase (fraude sí/no, impago sí/no).", "Classification: predict a class (fraud yes/no, default yes/no)."),
          t("Agrupamiento (clustering): formar segmentos sin etiqueta.", "Clustering: form segments without labels."),
        ],
      },
      {
        heading: t("¿Memorizó o aprendió?", "Did it memorize or learn?"),
        body: [
          t(
            "Un modelo se **entrena** con una parte de los datos y se **prueba** con otra que nunca vio. Si se equivoca muy poco en entrenamiento pero mucho en prueba, hay **sobreajuste** (overfitting): memorizó el ruido del pasado en vez de aprender el patrón, como el alumno que se aprende de memoria el examen del año pasado.",
            "A model is **trained** on one part of the data and **tested** on another it never saw. If it makes very few mistakes in training but many in testing, there is **overfitting**: it memorized past noise instead of learning the pattern, like the student who memorizes last year's exam.",
          ),
          t(
            "En finanzas el riesgo es mayor porque los datos tienen mucho **ruido** y poca señal, y los mercados cambian. Por eso: separa los datos **por fecha** (entrena con el pasado, prueba con lo más reciente), nunca los revuelvas al azar en series de tiempo, prefiere modelos sencillos y usa **regularización** (una penalización que castiga la complejidad).",
            "In finance the risk is higher because data have a lot of **noise** and little signal, and markets change. Therefore: split the data **by date** (train on the past, test on the most recent), never shuffle them randomly in time series, prefer simple models and use **regularization** (a penalty that punishes complexity).",
          ),
          t(
            "Mini ejemplo: un modelo que predice si el índice sube mañana acierta 95% en 2015–2022 (entrenamiento) pero 51% en 2023–2024 (prueba). Eso es casi lanzar una moneda: está sobreajustado.",
            "Mini example: a model predicting whether the index rises tomorrow is right 95% of the time in 2015–2022 (training) but 51% in 2023–2024 (test). That is almost a coin flip: it is overfitted.",
          ),
        ],
      },
      {
        heading: t("¿Qué tan bueno es el detector?", "How good is the detector?"),
        body: [
          t(
            "La **matriz de confusión** cuenta aciertos y errores: **verdaderos positivos** (VP, detectó un fraude real), **falsos positivos** (FP, alarma en una compra legítima), **falsos negativos** (FN, fraude que se escapó) y **verdaderos negativos** (VN). De ahí salen tres métricas: **exactitud** = (VP + VN) / total; **precisión** = VP / (VP + FP), de las alarmas, cuántas eran reales; **sensibilidad** (recall) = VP / (VP + FN), de los fraudes reales, cuántos atrapó.",
            "The **confusion matrix** counts hits and errors: **true positives** (TP, caught a real fraud), **false positives** (FP, alarm on a legitimate purchase), **false negatives** (FN, fraud that slipped through) and **true negatives** (TN). Three metrics come from it: **accuracy** = (TP + TN) / total; **precision** = TP / (TP + FP), of the alarms, how many were real; **recall** = TP / (TP + FN), of the real frauds, how many it caught.",
          ),
          t(
            "Cuidado con las **clases desbalanceadas**: si solo 2% de las compras son fraude, un modelo que dice 'nunca hay fraude' tiene 98% de exactitud y es inútil. Además, un modelo de crédito debe ser **explicable** y no discriminar: si aprende de datos históricos sesgados, repite el sesgo.",
            "Beware of **imbalanced classes**: if only 2% of purchases are fraud, a model that says 'there is never fraud' has 98% accuracy and is useless. Also, a credit model must be **explainable** and not discriminate: if it learns from biased historical data, it repeats the bias.",
          ),
          t(
            "Mini ejemplo: de 1,000 compras, 20 son fraude. El modelo marca 30 y 15 de ellas son fraude real. Precisión = 15/30 = 50% y sensibilidad = 15/20 = 75%.",
            "Mini example: out of 1,000 purchases, 20 are fraud. The model flags 30, and 15 of them are real fraud. Precision = 15/30 = 50% and recall = 15/20 = 75%.",
          ),
        ],
        formulas: [
          {
            name: t("Exactitud, precisión y sensibilidad de un clasificador", "Accuracy, precision and recall of a classifier"),
            expression: "Exactitud = (VP + VN) ÷ Total × 100   ·   Precisión = VP ÷ (VP + FP) × 100   ·   Sensibilidad = VP ÷ (VP + FN) × 100",
            variables: [
              { symbol: "VP", meaning: t("Verdaderos positivos: casos que el modelo marcó y sí eran (fraude o impago real).", "True positives: cases the model flagged that really were (actual fraud or default).") },
              { symbol: "FP", meaning: t("Falsos positivos: alarmas en casos que no eran (cliente bueno marcado como malo).", "False positives: alarms on cases that were not (a good customer flagged as bad).") },
              { symbol: "FN", meaning: t("Falsos negativos: casos reales que el modelo dejó escapar.", "False negatives: real cases the model let slip through.") },
              { symbol: "VN", meaning: t("Verdaderos negativos: casos normales que el modelo dejó pasar correctamente.", "True negatives: normal cases the model correctly let through.") },
              { symbol: "Total", meaning: t("Todos los casos evaluados: VP + FP + FN + VN.", "All cases evaluated: TP + FP + FN + TN.") },
            ],
            steps: [
              t("Arma la matriz: si te dan alertas y casos reales, FP = alertas − VP y FN = casos reales − VP; VN = Total − VP − FP − FN.", "Build the matrix: if you are given alerts and real cases, FP = alerts − TP and FN = real cases − TP; TN = Total − TP − FP − FN."),
              t("Exactitud: suma los aciertos (VP + VN), divide entre el total y multiplica por 100.", "Accuracy: add the hits (TP + TN), divide by the total and multiply by 100."),
              t("Precisión: divide VP entre todas las alertas (VP + FP) y multiplica por 100.", "Precision: divide TP by all the alerts (TP + FP) and multiply by 100."),
              t("Sensibilidad: divide VP entre todos los casos reales (VP + FN) y multiplica por 100.", "Recall: divide TP by all the real cases (TP + FN) and multiply by 100."),
            ],
            example: t(
              "2,000 clientes: VP = 30, FP = 20, FN = 10, VN = 1,940. Exactitud = (30 + 1,940) ÷ 2,000 = 0.985 → **98.5%**. Precisión = 30 ÷ (30 + 20) = 30 ÷ 50 = 0.60 → **60%**. Sensibilidad = 30 ÷ (30 + 10) = 30 ÷ 40 = 0.75 → **75%**.",
              "2,000 customers: TP = 30, FP = 20, FN = 10, TN = 1,940. Accuracy = (30 + 1,940) ÷ 2,000 = 0.985 → **98.5%**. Precision = 30 ÷ (30 + 20) = 30 ÷ 50 = 0.60 → **60%**. Recall = 30 ÷ (30 + 10) = 30 ÷ 40 = 0.75 → **75%**.",
            ),
            interpret: t(
              "Precisión alta: pocas falsas alarmas. Sensibilidad alta: se escapan pocos casos. Si los casos reales son pocos, un modelo que 'nunca alerta' tiene exactitud = casos normales ÷ total, alta pero inútil (su sensibilidad es 0%).",
              "High precision: few false alarms. High recall: few cases slip through. If real cases are rare, a model that 'never alerts' has accuracy = normal cases ÷ total, high but useless (its recall is 0%).",
            ),
            mistake: t(
              "Intercambiar precisión y sensibilidad: la precisión se divide entre las alertas; la sensibilidad, entre los casos reales.",
              "Swapping precision and recall: precision is divided by the alerts; recall, by the real cases.",
            ),
          },
        ],
      },
    ],
    examples: [
      {
        title: t("Matriz de confusión de un detector de fraude", "Confusion matrix of a fraud detector"),
        problem: t(
          "Un banco prueba un modelo con 1,000 compras con tarjeta. Hubo 20 fraudes reales. El modelo levantó 30 alertas, de las cuales 15 fueron fraude real. Calcula exactitud, precisión y sensibilidad.",
          "A bank tests a model on 1,000 card purchases. There were 20 real frauds. The model raised 30 alerts, 15 of which were real fraud. Compute accuracy, precision and recall.",
        ),
        steps: [
          t("VP = 15; FP = 30 − 15 = 15; FN = 20 − 15 = 5.", "TP = 15; FP = 30 − 15 = 15; FN = 20 − 15 = 5."),
          t("VN = 1,000 − 15 − 15 − 5 = 965.", "TN = 1,000 − 15 − 15 − 5 = 965."),
          t("Exactitud = (15 + 965) / 1,000 = 98%.", "Accuracy = (15 + 965) / 1,000 = 98%."),
          t("Precisión = 15 / 30 = 50%; sensibilidad = 15 / 20 = 75%.", "Precision = 15 / 30 = 50%; recall = 15 / 20 = 75%."),
        ],
        result: t(
          "Exactitud 98%, precisión 50% y sensibilidad 75%. Ojo: un modelo que nunca alerta también tendría 98% de exactitud, por eso precisión y sensibilidad dicen más.",
          "Accuracy 98%, precision 50% and recall 75%. Note: a model that never alerts would also have 98% accuracy, which is why precision and recall say more.",
        ),
      },
      {
        title: t("Elegir entre dos modelos de crédito", "Choosing between two credit models"),
        problem: t(
          "Modelo A (sencillo): acierta 78% en entrenamiento y 76% en prueba. Modelo B (muy complejo): acierta 97% en entrenamiento y 69% en prueba. Ambos usan datos separados por fecha. ¿Cuál conviene?",
          "Model A (simple): 78% correct in training and 76% in testing. Model B (very complex): 97% correct in training and 69% in testing. Both use data split by date. Which is better?",
        ),
        steps: [
          t("Lo que importa es el desempeño en datos nuevos (prueba).", "What matters is performance on new data (test)."),
          t("A pierde solo 2 puntos al pasar a prueba: generaliza bien.", "A loses only 2 points when moving to test: it generalizes well."),
          t("B pierde 28 puntos: memorizó el entrenamiento (sobreajuste).", "B loses 28 points: it memorized the training data (overfitting)."),
          t("Además, A es más fácil de explicar a clientes y supervisores.", "Also, A is easier to explain to customers and supervisors."),
        ],
        result: t(
          "Conviene el modelo A: mejor resultado fuera de muestra (76% vs. 69%) y más explicable.",
          "Model A is better: higher out-of-sample result (76% vs. 69%) and more explainable.",
        ),
      },
    ],
    keyPoints: [
      t("Supervisado: con etiqueta (regresión o clasificación); no supervisado: sin etiqueta (agrupamiento).", "Supervised: with labels (regression or classification); unsupervised: without labels (clustering)."),
      t("Sobreajuste: gran desempeño en entrenamiento y pobre en datos nuevos.", "Overfitting: great performance in training and poor on new data."),
      t("En series de tiempo se separa por fecha, nunca al azar.", "In time series, split by date, never randomly."),
      t("Con clases desbalanceadas la exactitud engaña: mira precisión y sensibilidad.", "With imbalanced classes accuracy misleads: look at precision and recall."),
      t("Un modelo financiero debe ser explicable y vigilarse contra sesgos.", "A financial model must be explainable and monitored for bias."),
    ],
    normativeNote: NOTE_ML,
    exerciseIds: ['CUA-16-E2', 'CUA-16-E3', 'CUA-16-E4', 'CUA-16-E5', 'CUA-16-E6'],
  },
  // ───────────────────────────── CUA-17 ─────────────────────────────
  {
    id: 'CUA-17',
    level: 6,
    topicIds: ['CUA.17'],
    title: t("Backtesting y validación de modelos", "Backtesting and model validation"),
    summary: t(
      "El backtesting prueba una estrategia o un modelo con datos históricos, y solo es útil si evita sesgos, incluye costos y se valida fuera de muestra.",
      "Backtesting tests a strategy or model on historical data, and it is only useful if it avoids biases, includes costs and is validated out of sample.",
    ),
    minutes: 11,
    objectives: [
      t("Explicar qué es un backtest y calcular métricas como la caída máxima (drawdown).", "Explain what a backtest is and compute metrics such as maximum drawdown."),
      t("Identificar sesgos de anticipación, supervivencia y sobreoptimización, y el efecto de los costos.", "Identify look-ahead, survivorship and over-optimization biases, and the effect of costs."),
      t("Validar modelos fuera de muestra, con ventanas móviles y contando excepciones del VaR.", "Validate models out of sample, with rolling windows and by counting VaR exceptions."),
    ],
    theory: [
      {
        heading: t("Probar la receta con el pasado", "Test the recipe on the past"),
        body: [
          t(
            "Un **backtest** es simular cómo le habría ido a una estrategia si la hubieras aplicado en el pasado, con reglas fijas: cuándo comprar, cuándo vender y cuánto. Es como probar una receta nueva con los ingredientes de la semana pasada antes de venderla en tu restaurante.",
            "A **backtest** simulates how a strategy would have done if you had applied it in the past, with fixed rules: when to buy, when to sell and how much. It is like testing a new recipe with last week's ingredients before selling it in your restaurant.",
          ),
          t(
            "Las métricas típicas: el **rendimiento anual compuesto**; la **volatilidad**; el **índice de Sharpe** (rendimiento extra sobre la tasa libre de riesgo por cada unidad de volatilidad); y la **caída máxima** o **max drawdown**: la mayor pérdida desde un pico hasta el punto más bajo posterior. Esta última dice cuánto dolor habrías aguantado.",
            "Typical metrics: the **compound annual return**; **volatility**; the **Sharpe ratio** (extra return over the risk-free rate per unit of volatility); and the **maximum drawdown**: the largest loss from a peak to the lowest later point. The latter tells you how much pain you would have endured.",
          ),
          t(
            "Mini ejemplo: el valor de una cartera fue 100, 120, 90, 110, 130 y 104. Caídas: de 120 a 90 = −25%; de 130 a 104 = −20%. La caída máxima es 25%.",
            "Mini example: a portfolio's value was 100, 120, 90, 110, 130 and 104. Drops: from 120 to 90 = −25%; from 130 to 104 = −20%. The maximum drawdown is 25%.",
          ),
        ],
        formulas: [
          {
            name: t("Caída máxima (max drawdown)", "Maximum drawdown"),
            expression: "Drawdown = (Valor − Pico previo) ÷ Pico previo × 100   ·   Caída máxima = el drawdown más negativo",
            variables: [
              { symbol: "Valor", meaning: t("Valor de la cartera en esa fecha, en pesos.", "Portfolio value on that date, in pesos.") },
              { symbol: "Pico previo", meaning: t("El valor más alto que había alcanzado la cartera hasta esa fecha (incluida), en pesos.", "The highest value the portfolio had reached up to that date (inclusive), in pesos.") },
              { symbol: "Drawdown", meaning: t("Qué tan abajo del pico está la cartera en esa fecha, en %; es 0 si está en un pico nuevo.", "How far below the peak the portfolio is on that date, in %; it is 0 at a new peak.") },
            ],
            steps: [
              t("Recorre los valores y anota el pico acumulado: el máximo visto hasta cada fecha.", "Go through the values and write down the running peak: the maximum seen up to each date."),
              t("En cada fecha calcula (Valor − Pico previo) ÷ Pico previo × 100.", "On each date compute (Value − Previous peak) ÷ Previous peak × 100."),
              t("La caída máxima es el resultado más negativo; se suele reportar como número positivo.", "The maximum drawdown is the most negative result; it is usually reported as a positive number."),
            ],
            example: t(
              "Valores: 80, 100, 85, 120, 96 y 110. Picos: 80, 100, 100, 120, 120, 120. Drawdowns: 0%, 0%, (85 − 100) ÷ 100 = −15%, 0%, (96 − 120) ÷ 120 = −20%, (110 − 120) ÷ 120 ≈ −8.3%. Caída máxima: **20%**.",
              "Values: 80, 100, 85, 120, 96 and 110. Peaks: 80, 100, 100, 120, 120, 120. Drawdowns: 0%, 0%, (85 − 100) ÷ 100 = −15%, 0%, (96 − 120) ÷ 120 = −20%, (110 − 120) ÷ 120 ≈ −8.3%. Maximum drawdown: **20%**.",
            ),
            interpret: t(
              "Es la peor racha que habrías aguantado. Una caída máxima de 20% significa que en algún momento viste desaparecer una quinta parte de lo que llevabas ganado.",
              "It is the worst stretch you would have endured. A 20% maximum drawdown means that at some point you saw a fifth of your accumulated value disappear.",
            ),
            mistake: t(
              "Medir contra el primer valor o contra el último, en lugar de contra el pico más alto alcanzado antes de la caída.",
              "Measuring against the first or last value instead of against the highest peak reached before the drop.",
            ),
          },
          {
            name: t("Índice de Sharpe", "Sharpe ratio"),
            expression: "Sharpe = (Rp − Rf) ÷ σp",
            variables: [
              { symbol: "Rp", meaning: t("Rendimiento anual de la estrategia o cartera, en %.", "Annual return of the strategy or portfolio, in %.") },
              { symbol: "Rf", meaning: t("Tasa libre de riesgo anual (por ejemplo, la de un bono gubernamental de corto plazo), en %.", "Annual risk-free rate (for example, a short-term government bond), in %.") },
              { symbol: "σp", meaning: t("Volatilidad anual de la estrategia (desviación estándar de sus rendimientos), en %.", "Annual volatility of the strategy (standard deviation of its returns), in %.") },
            ],
            steps: [
              t("Resta la tasa libre de riesgo al rendimiento: es el rendimiento extra por tomar riesgo.", "Subtract the risk-free rate from the return: that is the extra return for taking risk."),
              t("Divide ese rendimiento extra entre la volatilidad.", "Divide that extra return by the volatility."),
            ],
            example: t(
              "Rp = 11%, Rf = 5% (tasa de ejemplo), σp = 15%. Rendimiento extra: 11% − 5% = 6%. Sharpe = 6 ÷ 15 = **0.4**.",
              "Rp = 11%, Rf = 5% (example rate), σp = 15%. Extra return: 11% − 5% = 6%. Sharpe = 6 ÷ 15 = **0.4**.",
            ),
            interpret: t(
              "Más alto es mejor: más premio por cada unidad de riesgo. Un Sharpe negativo significa que la estrategia rindió menos que la inversión sin riesgo.",
              "Higher is better: more reward per unit of risk. A negative Sharpe means the strategy earned less than the risk-free investment.",
            ),
            mistake: t(
              "Olvidar restar Rf, o mezclar rendimientos mensuales con volatilidad anual.",
              "Forgetting to subtract Rf, or mixing monthly returns with annual volatility.",
            ),
          },
        ],
      },
      {
        heading: t("¿Por qué el pasado engaña?", "Why the past deceives"),
        body: [
          t(
            "Un backtest casi siempre se ve mejor que la realidad. El **sesgo de anticipación** (look-ahead) ocurre cuando la estrategia usa información que aún no existía en esa fecha, como resultados anuales publicados meses después. El **sesgo de supervivencia** ocurre al probar solo con empresas que siguen existiendo hoy, ignorando las que quebraron o salieron de la bolsa.",
            "A backtest almost always looks better than reality. **Look-ahead bias** happens when the strategy uses information that did not yet exist on that date, such as annual results published months later. **Survivorship bias** happens when you test only with companies that still exist today, ignoring those that went bankrupt or delisted.",
          ),
          t(
            "La **sobreoptimización** (data snooping) aparece al probar cientos de combinaciones de parámetros y quedarte con la mejor: por azar alguna saldrá brillante. Y los **costos** reales (comisiones, diferencial compra-venta, impacto en precio o **slippage**) pueden borrar la ganancia de una estrategia que opera mucho.",
            "**Over-optimization** (data snooping) appears when you test hundreds of parameter combinations and keep the best one: by chance one will look brilliant. And real **costs** (commissions, bid-ask spread, price impact or **slippage**) can wipe out the profit of a strategy that trades a lot.",
          ),
          t(
            "Mini ejemplo: una estrategia rinde 12% anual bruto, pero hace 50 operaciones al año con un costo de 0.1% cada una. Los costos suman 5%, y el rendimiento neto baja a 7%.",
            "Mini example: a strategy earns 12% per year gross, but makes 50 trades a year at a cost of 0.1% each. Costs add up to 5%, and the net return drops to 7%.",
          ),
        ],
        formulas: [
          {
            name: t("Rendimiento neto después de costos de operación", "Net return after trading costs"),
            expression: "Costo anual = Número de operaciones × Costo por operación   ·   Rendimiento neto = Rendimiento bruto − Costo anual",
            variables: [
              { symbol: "Número de operaciones", meaning: t("Cuántas compras o ventas hace la estrategia en un año.", "How many buys or sells the strategy makes in a year.") },
              { symbol: "Costo por operación", meaning: t("Lo que cuesta cada operación como % del capital (comisión + diferencial compra-venta).", "What each trade costs as a % of capital (commission + bid-ask spread).") },
              { symbol: "Costo anual", meaning: t("Total de costos del año, en % del capital.", "Total costs for the year, in % of capital.") },
              { symbol: "Rendimiento bruto", meaning: t("Lo que rinde la estrategia en el backtest antes de costos, en % anual.", "What the strategy earns in the backtest before costs, in % per year.") },
              { symbol: "Rendimiento neto", meaning: t("Lo que de verdad te quedaría después de costos, en % anual.", "What you would really keep after costs, in % per year.") },
            ],
            steps: [
              t("Multiplica el número de operaciones al año por el costo de cada una.", "Multiply the number of trades per year by the cost of each one."),
              t("Resta ese costo anual al rendimiento bruto.", "Subtract that annual cost from the gross return."),
            ],
            example: t(
              "Rendimiento bruto 14% anual; 60 operaciones al año a 0.05% cada una. Costo anual: 60 × 0.05% = **3%**. Neto: 14% − 3% = **11%**.",
              "Gross return 14% per year; 60 trades a year at 0.05% each. Annual cost: 60 × 0.05% = **3%**. Net: 14% − 3% = **11%**.",
            ),
            mistake: t(
              "Pensar que un costo pequeño por operación no importa: lo que pesa es cuántas veces lo pagas. Además, el slippage puede hacer el costo real aún mayor.",
              "Thinking a small cost per trade does not matter: what counts is how many times you pay it. Also, slippage can make the real cost even higher.",
            ),
          },
        ],
        bullets: [
          t("Anticipación: usar datos del futuro.", "Look-ahead: using data from the future."),
          t("Supervivencia: olvidar a los que desaparecieron.", "Survivorship: forgetting those that disappeared."),
          t("Sobreoptimización: elegir lo mejor de muchos intentos.", "Over-optimization: picking the best of many attempts."),
          t("Costos y slippage omitidos.", "Omitted costs and slippage."),
        ],
      },
      {
        heading: t("Probar con datos que no viste", "Test on data you did not see"),
        body: [
          t(
            "La defensa principal es la **validación fuera de muestra**: diseñas y ajustas con un periodo y pruebas en otro que no tocaste. El **análisis walk-forward** repite esto en ventanas móviles: ajustas con 2015–2019 y pruebas en 2020; luego ajustas con 2016–2020 y pruebas en 2021, y así sucesivamente.",
            "The main defense is **out-of-sample validation**: you design and tune on one period and test on another you did not touch. **Walk-forward analysis** repeats this in rolling windows: tune on 2015–2019 and test on 2020; then tune on 2016–2020 and test on 2021, and so on.",
          ),
          t(
            "Los modelos de riesgo también se validan. En un **backtest del VaR** cuentas las **excepciones**: días en que la pérdida real superó el VaR. Con un VaR de 99%, esperas excepciones en 1% de los días. En el esquema de Basilea, con 250 días se esperan unas 2.5; de 0 a 4 es zona verde, de 5 a 9 amarilla y 10 o más roja (el modelo probablemente subestima el riesgo).",
            "Risk models are validated too. In a **VaR backtest** you count **exceptions**: days when the actual loss exceeded VaR. With a 99% VaR, you expect exceptions on 1% of days. Under the Basel scheme, with 250 days about 2.5 are expected; 0 to 4 is the green zone, 5 to 9 yellow and 10 or more red (the model probably underestimates risk).",
          ),
          t(
            "Mini ejemplo: un banco tiene 7 excepciones de su VaR de 99% en 250 días. Esperaba 2.5, así que cae en zona amarilla: debe revisar el modelo.",
            "Mini example: a bank has 7 exceptions of its 99% VaR in 250 days. It expected 2.5, so it falls in the yellow zone: it must review the model.",
          ),
        ],
        formulas: [
          {
            name: t("Excepciones esperadas en un backtest del VaR", "Expected exceptions in a VaR backtest"),
            expression: "Excepciones esperadas = (1 − nivel de confianza) × N días",
            variables: [
              { symbol: "Excepciones esperadas", meaning: t("Cuántos días se espera que la pérdida real supere el VaR si el modelo es correcto.", "How many days the actual loss is expected to exceed VaR if the model is correct.") },
              { symbol: "nivel de confianza", meaning: t("El nivel del VaR, en decimal (99% = 0.99; 95% = 0.95).", "The VaR level, as a decimal (99% = 0.99; 95% = 0.95).") },
              { symbol: "N días", meaning: t("Número de días hábiles revisados (por ejemplo, 250 ≈ un año).", "Number of business days reviewed (for example, 250 ≈ one year).") },
            ],
            steps: [
              t("Calcula la probabilidad de excepción: 1 − nivel de confianza (99% → 0.01).", "Compute the exception probability: 1 − confidence level (99% → 0.01)."),
              t("Multiplícala por el número de días.", "Multiply it by the number of days."),
              t("Compara con las excepciones reales: muchas más indican que el modelo subestima el riesgo; muchas menos, que es demasiado conservador.", "Compare with the actual exceptions: many more mean the model underestimates risk; many fewer, that it is too conservative."),
            ],
            example: t(
              "VaR de 97.5% revisado en 400 días. Probabilidad de excepción: 1 − 0.975 = 0.025. Esperadas: 0.025 × 400 = **10 excepciones**.",
              "97.5% VaR reviewed over 400 days. Exception probability: 1 − 0.975 = 0.025. Expected: 0.025 × 400 = **10 exceptions**.",
            ),
            interpret: t(
              "Para un VaR de 99% con 250 días, el esquema de Basilea usa zonas: 0 a 4 excepciones verde, 5 a 9 amarilla y 10 o más roja.",
              "For a 99% VaR over 250 days, the Basel scheme uses zones: 0 to 4 exceptions green, 5 to 9 yellow and 10 or more red.",
            ),
            mistake: t(
              "Multiplicar por el nivel de confianza (0.975 × 400 = 390) en lugar de por su complemento (0.025 × 400).",
              "Multiplying by the confidence level (0.975 × 400 = 390) instead of by its complement (0.025 × 400).",
            ),
          },
        ],
      },
    ],
    examples: [
      {
        title: t("Caída máxima de una estrategia", "Maximum drawdown of a strategy"),
        problem: t(
          "El valor de una cuenta que sigue una estrategia fue, mes a mes: $100, $120, $90, $110, $130 y $104 (miles). Calcula la caída máxima.",
          "The value of an account following a strategy was, month by month: $100, $120, $90, $110, $130 and $104 (thousands). Compute the maximum drawdown.",
        ),
        steps: [
          t("Lleva el pico acumulado: 100, 120, 120, 120, 130, 130.", "Track the running peak: 100, 120, 120, 120, 130, 130."),
          t("Drawdown de cada mes: 0%, 0%, (90 − 120)/120 = −25%, (110 − 120)/120 ≈ −8.3%, 0%, (104 − 130)/130 = −20%.", "Each month's drawdown: 0%, 0%, (90 − 120)/120 = −25%, (110 − 120)/120 ≈ −8.3%, 0%, (104 − 130)/130 = −20%."),
          t("La caída máxima es el drawdown más negativo: −25%.", "The maximum drawdown is the most negative drawdown: −25%."),
        ],
        result: t(
          "Caída máxima de 25%: en el peor momento, un inversionista habría visto perder una cuarta parte de lo acumulado.",
          "Maximum drawdown of 25%: at the worst moment, an investor would have seen a quarter of the accumulated value lost.",
        ),
      },
      {
        title: t("Semáforo del VaR", "VaR traffic light"),
        problem: t(
          "Un banco calcula un VaR diario de 99%. En los últimos 250 días hábiles, la pérdida real superó el VaR en 7 días. ¿Qué concluye?",
          "A bank computes a 99% daily VaR. Over the last 250 business days, the actual loss exceeded VaR on 7 days. What does it conclude?",
        ),
        steps: [
          t("Excepciones esperadas: 1% × 250 = 2.5.", "Expected exceptions: 1% × 250 = 2.5."),
          t("Observadas: 7, casi el triple de lo esperado.", "Observed: 7, almost three times the expected number."),
          t("Esquema de Basilea: 0–4 verde, 5–9 amarilla, 10+ roja → 7 cae en amarilla.", "Basel scheme: 0–4 green, 5–9 yellow, 10+ red → 7 falls in yellow."),
          t("Acción: investigar si el modelo subestima la volatilidad o las colas.", "Action: investigate whether the model underestimates volatility or the tails."),
        ],
        result: t(
          "Zona amarilla: el modelo es dudoso y debe revisarse; si siguiera así, el supervisor podría exigir más capital.",
          "Yellow zone: the model is questionable and must be reviewed; if it continued, the supervisor could require more capital.",
        ),
      },
    ],
    keyPoints: [
      t("Un backtest simula una estrategia con reglas fijas sobre datos históricos.", "A backtest simulates a strategy with fixed rules on historical data."),
      t("La caída máxima mide la peor pérdida desde un pico; el Sharpe, rendimiento por unidad de riesgo.", "Maximum drawdown measures the worst loss from a peak; Sharpe, return per unit of risk."),
      t("Sesgos clave: anticipación, supervivencia y sobreoptimización.", "Key biases: look-ahead, survivorship and over-optimization."),
      t("Incluye costos y slippage: pueden borrar la ganancia.", "Include costs and slippage: they can wipe out the profit."),
      t("Valida fuera de muestra (walk-forward) y cuenta excepciones para validar el VaR.", "Validate out of sample (walk-forward) and count exceptions to validate VaR."),
    ],
    normativeNote: NOTE_BACKTEST,
    exerciseIds: ['CUA-17-E1', 'CUA-17-E2', 'CUA-17-E3', 'CUA-17-E4', 'CUA-17-E6'],
  },
]

export const exercises: Exercise[] = [
  // ───────────────────────────── CUA-13 ─────────────────────────────
  {
    id: 'CUA-13-E1',
    level: 6,
    module: 'CUA-13',
    kind: 'mcq',
    flavor: 'concept',
    prompt: t(
      "En el árbol binomial, ¿qué es la probabilidad neutral al riesgo p?",
      "In the binomial tree, what is the risk-neutral probability p?",
    ),
    options: [
      { id: 'CUA-13-E1-a', text: t("La probabilidad real de que la acción suba, estimada con datos históricos", "The real probability that the stock rises, estimated from historical data") },
      { id: 'CUA-13-E1-b', text: t("Un peso que hace que el activo rinda la tasa libre de riesgo y permite valuar descontando a esa tasa", "A weight that makes the asset earn the risk-free rate and allows pricing by discounting at that rate") },
      { id: 'CUA-13-E1-c', text: t("La probabilidad de que el comprador ejerza la opción, según su aversión al riesgo", "The probability that the buyer exercises the option, based on their risk aversion") },
      { id: 'CUA-13-E1-d', text: t("Siempre 50%, porque el precio solo puede subir o bajar", "Always 50%, because the price can only go up or down") },
    ],
    correctOptionId: 'CUA-13-E1-b',
    explanation: t(
      "p = (1 + r − d)/(u − d) es un peso artificial que hace que el valor esperado del activo crezca a la tasa libre de riesgo; con él, cualquier derivado se valúa como valor esperado descontado a r. Error común: confundirla con la probabilidad real o suponer que siempre es 50% (solo lo es con ciertos u, d y r).",
      "p = (1 + r − d)/(u − d) is an artificial weight that makes the asset's expected value grow at the risk-free rate; with it, any derivative is priced as an expected value discounted at r. Common mistake: confusing it with the real probability or assuming it is always 50% (it is only for certain u, d and r).",
    ),
    difficulty: 2,
    points: 10,
    competency: 'derivatives-pricing',
  },
  {
    id: 'CUA-13-E2',
    level: 6,
    module: 'CUA-13',
    kind: 'numeric',
    flavor: 'case',
    context: t(
      "Una acción vale $200. En un periodo puede subir 10% (u = 1.10) o bajar 5% (d = 0.95). La tasa libre de riesgo del periodo es 2%. Hay una call europea con K = $200 que vence al final del periodo.",
      "A stock is worth $200. In one period it can rise 10% (u = 1.10) or fall 5% (d = 0.95). The risk-free rate for the period is 2%. There is a European call with K = $200 expiring at the end of the period.",
    ),
    prompt: t(
      "Con un árbol binomial de un paso, ¿cuánto vale hoy la call? Responde en pesos con dos decimales.",
      "Using a one-step binomial tree, what is the call worth today? Answer in pesos with two decimals.",
    ),
    answer: 9.15,
    unit: 'MXN',
    decimals: 2,
    tolerance: { abs: 0.02 },
    explanation: t(
      "Pagos: si sube, 220 − 200 = 20; si baja, 0. p = (1.02 − 0.95)/(1.10 − 0.95) = 0.07/0.15 ≈ 0.4667. Valor = 0.4667 × 20 / 1.02 ≈ 9.3333/1.02 ≈ $9.15. Error común: olvidar descontar (9.33) o usar p = 0.5 (9.80).",
      "Payoffs: if up, 220 − 200 = 20; if down, 0. p = (1.02 − 0.95)/(1.10 − 0.95) = 0.07/0.15 ≈ 0.4667. Value = 0.4667 × 20 / 1.02 ≈ 9.3333/1.02 ≈ $9.15. Common mistake: forgetting to discount (9.33) or using p = 0.5 (9.80).",
    ),
    difficulty: 3,
    points: 20,
    competency: 'derivatives-pricing',
  },
  {
    id: 'CUA-13-E3',
    level: 6,
    module: 'CUA-13',
    kind: 'fields',
    flavor: 'case',
    context: t(
      "Una acción que no paga dividendos vale hoy $500. La tasa libre de riesgo es 8% anual simple. Un banco cotiza un forward a 6 meses sobre la acción en $530.",
      "A stock that pays no dividends is worth $500 today. The risk-free rate is 8% simple per year. A bank quotes a 6-month forward on the stock at $530.",
    ),
    prompt: t(
      "Calcula el precio forward justo y la ganancia sin riesgo por acción de la estrategia de arbitraje (vender el forward caro, pedir prestado y comprar la acción).",
      "Compute the fair forward price and the risk-free profit per share of the arbitrage strategy (sell the expensive forward, borrow and buy the stock).",
    ),
    fields: [
      { id: 'f1', label: t("Precio forward justo ($)", "Fair forward price ($)"), answer: 520, unit: 'MXN', tolerance: { abs: 0.5 } },
      { id: 'f2', label: t("Ganancia de arbitraje al vencimiento por acción ($)", "Arbitrage profit at maturity per share ($)"), answer: 10, unit: 'MXN', tolerance: { abs: 0.5 } },
    ],
    explanation: t(
      "F = 500 × (1 + 0.08 × 0.5) = 500 × 1.04 = $520. Al vencimiento entregas la acción por $530 y pagas el préstamo de $520: ganas $10 sin riesgo. Error común: usar T = 6 en lugar de 0.5 años, o capitalizar el año completo (540).",
      "F = 500 × (1 + 0.08 × 0.5) = 500 × 1.04 = $520. At maturity you deliver the stock for $530 and repay the $520 loan: you earn $10 risk-free. Common mistake: using T = 6 instead of 0.5 years, or compounding a full year (540).",
    ),
    difficulty: 2,
    points: 15,
    competency: 'derivatives-pricing',
  },
  {
    id: 'CUA-13-E4',
    level: 6,
    module: 'CUA-13',
    kind: 'truefalse',
    flavor: 'concept',
    prompt: t(
      "Para valuar una call europea con Black-Scholes-Merton es indispensable estimar el rendimiento esperado de la acción.",
      "To price a European call with Black-Scholes-Merton it is essential to estimate the stock's expected return.",
    ),
    answer: false,
    explanation: t(
      "Falso. Black-Scholes usa S, K, T, r y σ. Como la opción se puede replicar con la acción y un préstamo, el rendimiento esperado (μ) desaparece y se valúa en un mundo neutral al riesgo con r. Error común: pensar que una acción con mejor perspectiva tiene calls más caras según el modelo.",
      "False. Black-Scholes uses S, K, T, r and σ. Because the option can be replicated with the stock and a loan, the expected return (μ) drops out and pricing happens in a risk-neutral world with r. Common mistake: thinking a stock with better prospects has more expensive calls according to the model.",
    ),
    difficulty: 2,
    points: 10,
    competency: 'derivatives-pricing',
  },
  {
    id: 'CUA-13-E5',
    level: 6,
    module: 'CUA-13',
    kind: 'formula',
    flavor: 'concept',
    prompt: t(
      "Completa la paridad put-call para opciones europeas sobre una acción sin dividendos.",
      "Complete put-call parity for European options on a non-dividend stock.",
    ),
    template: 'C − {{b1}} = {{b2}} − {{b3}}',
    blanks: [
      {
        id: 'b1',
        options: [
          { id: 'CUA-13-E5-b1-a', text: t("P (precio de la put)", "P (put price)") },
          { id: 'CUA-13-E5-b1-b', text: t("K (precio de ejercicio)", "K (strike price)") },
          { id: 'CUA-13-E5-b1-c', text: t("σ (volatilidad)", "σ (volatility)") },
        ],
        correctOptionId: 'CUA-13-E5-b1-a',
      },
      {
        id: 'b2',
        options: [
          { id: 'CUA-13-E5-b2-a', text: t("K", "K") },
          { id: 'CUA-13-E5-b2-b', text: t("S (precio actual de la acción)", "S (current stock price)") },
          { id: 'CUA-13-E5-b2-c', text: t("F (precio forward)", "F (forward price)") },
        ],
        correctOptionId: 'CUA-13-E5-b2-b',
      },
      {
        id: 'b3',
        options: [
          { id: 'CUA-13-E5-b3-a', text: t("K × e^(rT)", "K × e^(rT)") },
          { id: 'CUA-13-E5-b3-b', text: t("K", "K") },
          { id: 'CUA-13-E5-b3-c', text: t("K × e^(−rT)", "K × e^(−rT)") },
        ],
        correctOptionId: 'CUA-13-E5-b3-c',
      },
    ],
    explanation: t(
      "C − P = S − K·e^(−rT): una call comprada y una put vendida equivalen a tener la acción y deber el valor presente de K. Error común: usar K sin descontar o capitalizarlo (K·e^(rT)); el pago de K ocurre en el futuro, así que se trae a valor presente.",
      "C − P = S − K·e^(−rT): a long call and a short put are equivalent to owning the stock and owing the present value of K. Common mistake: using K undiscounted or compounding it (K·e^(rT)); K is paid in the future, so it is brought to present value.",
    ),
    difficulty: 2,
    points: 15,
    competency: 'derivatives-pricing',
  },
  {
    id: 'CUA-13-E6',
    level: 6,
    module: 'CUA-13',
    kind: 'multi',
    flavor: 'interpret',
    prompt: t(
      "Manteniendo todo lo demás igual, ¿qué cambios aumentan el valor de una call europea? Marca todas las correctas.",
      "Holding everything else equal, which changes increase the value of a European call? Select all that apply.",
    ),
    options: [
      { id: 'CUA-13-E6-a', text: t("Sube el precio actual del subyacente", "The current price of the underlying rises") },
      { id: 'CUA-13-E6-b', text: t("Sube la volatilidad del subyacente", "The volatility of the underlying rises") },
      { id: 'CUA-13-E6-c', text: t("Sube el precio de ejercicio K", "The strike price K rises") },
      { id: 'CUA-13-E6-d', text: t("Se anuncian dividendos más altos antes del vencimiento", "Higher dividends are announced before expiry") },
    ],
    correctOptionIds: ['CUA-13-E6-a', 'CUA-13-E6-b'],
    explanation: t(
      "Un S más alto acerca la call a estar dentro del dinero, y más volatilidad aumenta la posibilidad de pagos grandes sin aumentar la pérdida máxima (la prima). Un K más alto reduce el pago, y los dividendos bajan el precio de la acción al pagarse, lo que perjudica a la call. Error común: creer que más volatilidad siempre es mala; para el dueño de una opción es favorable.",
      "A higher S brings the call closer to being in the money, and more volatility increases the chance of large payoffs without increasing the maximum loss (the premium). A higher K reduces the payoff, and dividends lower the stock price when paid, which hurts the call. Common mistake: believing more volatility is always bad; for an option holder it is favorable.",
    ),
    difficulty: 2,
    points: 15,
    competency: 'derivatives-pricing',
  },
  // ───────────────────────────── CUA-14 ─────────────────────────────
  {
    id: 'CUA-14-E1',
    level: 6,
    module: 'CUA-14',
    kind: 'mcq',
    flavor: 'concept',
    prompt: t(
      "En una simulación Monte Carlo, ¿por cuánto debes multiplicar el número de simulaciones para reducir el error estándar a la mitad?",
      "In a Monte Carlo simulation, by how much must you multiply the number of simulations to cut the standard error in half?",
    ),
    options: [
      { id: 'CUA-14-E1-a', text: t("Por 2", "By 2") },
      { id: 'CUA-14-E1-b', text: t("Por 4", "By 4") },
      { id: 'CUA-14-E1-c', text: t("Por √2", "By √2") },
      { id: 'CUA-14-E1-d', text: t("Por 10", "By 10") },
    ],
    correctOptionId: 'CUA-14-E1-b',
    explanation: t(
      "El error estándar es s/√N. Para que baje a la mitad, √N debe duplicarse, así que N se multiplica por 2² = 4. Error común: pensar que duplicar simulaciones divide el error entre dos; en realidad solo lo divide entre √2 ≈ 1.41.",
      "The standard error is s/√N. For it to halve, √N must double, so N is multiplied by 2² = 4. Common mistake: thinking that doubling simulations halves the error; it actually only divides it by √2 ≈ 1.41.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'monte-carlo',
  },
  {
    id: 'CUA-14-E2',
    level: 6,
    module: 'CUA-14',
    kind: 'numeric',
    flavor: 'case',
    context: t(
      "Un analista valúa un derivado con 2,500 simulaciones. La desviación estándar de los pagos descontados es $24.",
      "An analyst prices a derivative with 2,500 simulations. The standard deviation of the discounted payoffs is $24.",
    ),
    prompt: t(
      "¿Cuál es el error estándar de la estimación Monte Carlo? Responde en pesos con dos decimales.",
      "What is the standard error of the Monte Carlo estimate? Answer in pesos with two decimals.",
    ),
    answer: 0.48,
    unit: 'MXN',
    decimals: 2,
    tolerance: { abs: 0.005 },
    explanation: t(
      "Error estándar = s/√N = 24/√2,500 = 24/50 = $0.48. Un intervalo de 95% sería ± 1.96 × 0.48 ≈ ± $0.94. Error común: dividir entre N (0.0096) en lugar de entre √N.",
      "Standard error = s/√N = 24/√2,500 = 24/50 = $0.48. A 95% interval would be ± 1.96 × 0.48 ≈ ± $0.94. Common mistake: dividing by N (0.0096) instead of by √N.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'monte-carlo',
  },
  {
    id: 'CUA-14-E3',
    level: 6,
    module: 'CUA-14',
    kind: 'numeric',
    flavor: 'case',
    context: t(
      "Simulas el precio de una acción con movimiento browniano geométrico. Datos hipotéticos: S₀ = $50, μ = 10% anual, σ = 30% anual, Δt = 1 año. El generador entrega Z = −1.",
      "You simulate a stock price with geometric Brownian motion. Hypothetical data: S₀ = $50, μ = 10% per year, σ = 30% per year, Δt = 1 year. The generator returns Z = −1.",
    ),
    prompt: t(
      "¿Cuál es el precio simulado al final del año? Responde en pesos con dos decimales.",
      "What is the simulated price at year end? Answer in pesos with two decimals.",
    ),
    answer: 39.14,
    unit: 'MXN',
    decimals: 2,
    tolerance: { abs: 0.02 },
    explanation: t(
      "Exponente = (μ − σ²/2)·Δt + σ·√Δt·Z = (0.10 − 0.045) × 1 + 0.30 × 1 × (−1) = 0.055 − 0.30 = −0.245. S₁ = 50 × e^(−0.245) ≈ 50 × 0.7827 ≈ $39.14. Error común: omitir la corrección −σ²/2 (exponente −0.20 → $40.94).",
      "Exponent = (μ − σ²/2)·Δt + σ·√Δt·Z = (0.10 − 0.045) × 1 + 0.30 × 1 × (−1) = 0.055 − 0.30 = −0.245. S₁ = 50 × e^(−0.245) ≈ 50 × 0.7827 ≈ $39.14. Common mistake: omitting the −σ²/2 correction (exponent −0.20 → $40.94).",
    ),
    difficulty: 3,
    points: 20,
    competency: 'monte-carlo',
  },
  {
    id: 'CUA-14-E4',
    level: 6,
    module: 'CUA-14',
    kind: 'fields',
    flavor: 'case',
    context: t(
      "Simulaste en mundo neutral al riesgo cuatro precios finales de una acción: $88, $104, $121 y $97. Quieres valuar una call europea con K = $95. El factor de descuento al vencimiento es 0.98.",
      "You simulated in a risk-neutral world four final stock prices: $88, $104, $121 and $97. You want to price a European call with K = $95. The discount factor to expiry is 0.98.",
    ),
    prompt: t(
      "Completa el pago promedio y el precio estimado de la call (valor presente).",
      "Fill in the average payoff and the estimated call price (present value).",
    ),
    fields: [
      { id: 'f1', label: t("Pago promedio al vencimiento ($)", "Average payoff at expiry ($)"), answer: 9.75, unit: 'MXN', tolerance: { abs: 0.01 } },
      { id: 'f2', label: t("Precio estimado de la call hoy ($)", "Estimated call price today ($)"), answer: 9.555, unit: 'MXN', tolerance: { abs: 0.01 } },
    ],
    explanation: t(
      "Pagos máx(S − 95, 0): 0, 9, 26 y 2; suman 37 y el promedio es 37/4 = $9.75. Valor presente: 9.75 × 0.98 = $9.555 ≈ $9.56. Error común: promediar los precios y luego restar K (102.5 − 95 = 7.5); el pago es no lineal y debe calcularse escenario por escenario.",
      "Payoffs max(S − 95, 0): 0, 9, 26 and 2; they add to 37 and the average is 37/4 = $9.75. Present value: 9.75 × 0.98 = $9.555 ≈ $9.56. Common mistake: averaging the prices and then subtracting K (102.5 − 95 = 7.5); the payoff is non-linear and must be computed scenario by scenario.",
    ),
    difficulty: 2,
    points: 15,
    competency: 'monte-carlo',
  },
  {
    id: 'CUA-14-E5',
    level: 6,
    module: 'CUA-14',
    kind: 'truefalse',
    flavor: 'concept',
    prompt: t(
      "Si dos analistas corren el mismo código de simulación con la misma semilla aleatoria, obtienen exactamente los mismos escenarios.",
      "If two analysts run the same simulation code with the same random seed, they get exactly the same scenarios.",
    ),
    answer: true,
    explanation: t(
      "Verdadero. Los generadores de una computadora son pseudoaleatorios: la semilla fija el punto de partida, y con el mismo código y la misma semilla la secuencia se repite, lo que permite auditar resultados. Error común: creer que fijar la semilla hace el resultado 'más exacto'; solo lo hace reproducible.",
      "True. Computer generators are pseudo-random: the seed fixes the starting point, and with the same code and the same seed the sequence repeats, which allows results to be audited. Common mistake: believing a fixed seed makes the result 'more accurate'; it only makes it reproducible.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'monte-carlo',
  },
  {
    id: 'CUA-14-E6',
    level: 6,
    module: 'CUA-14',
    kind: 'classify',
    flavor: 'concept',
    prompt: t(
      "Clasifica cada afirmación sobre la simulación Monte Carlo como ventaja o limitación.",
      "Classify each statement about Monte Carlo simulation as an advantage or a limitation.",
    ),
    categories: [
      { id: 'CUA-14-E6-c1', label: t("Ventaja", "Advantage") },
      { id: 'CUA-14-E6-c2', label: t("Limitación", "Limitation") },
    ],
    items: [
      { id: 'CUA-14-E6-i1', label: t("Valúa derivados con pagos complicados que no tienen fórmula cerrada", "Prices derivatives with complicated payoffs that have no closed-form formula"), correctCategoryId: 'CUA-14-E6-c1' },
      { id: 'CUA-14-E6-i2', label: t("Si los supuestos de volatilidad son malos, los resultados también lo son", "If the volatility assumptions are bad, the results are too"), correctCategoryId: 'CUA-14-E6-c2' },
      { id: 'CUA-14-E6-i3', label: t("Maneja carteras con muchos activos y factores de riesgo a la vez", "Handles portfolios with many assets and risk factors at once"), correctCategoryId: 'CUA-14-E6-c1' },
      { id: 'CUA-14-E6-i4', label: t("Lograr mucha precisión puede requerir millones de escenarios y mucho tiempo de cómputo", "Achieving high precision may require millions of scenarios and a lot of computing time"), correctCategoryId: 'CUA-14-E6-c2' },
      { id: 'CUA-14-E6-i5', label: t("Entrega toda la distribución de resultados, no solo un promedio", "Delivers the whole distribution of outcomes, not just an average"), correctCategoryId: 'CUA-14-E6-c1' },
    ],
    explanation: t(
      "Ventajas: flexibilidad para pagos complejos, muchas variables y obtener la distribución completa (útil para percentiles como el VaR). Limitaciones: depende de los supuestos ('basura entra, basura sale') y converge lento (error ∝ 1/√N). Error común: pensar que más simulaciones corrigen un modelo mal especificado; solo reducen el error por azar.",
      "Advantages: flexibility for complex payoffs, many variables and getting the full distribution (useful for percentiles such as VaR). Limitations: it depends on the assumptions ('garbage in, garbage out') and converges slowly (error ∝ 1/√N). Common mistake: thinking more simulations fix a misspecified model; they only reduce random error.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'monte-carlo',
  },
  // ───────────────────────────── CUA-15 ─────────────────────────────
  {
    id: 'CUA-15-E1',
    level: 6,
    module: 'CUA-15',
    kind: 'mcq',
    flavor: 'concept',
    prompt: t(
      "¿Qué biblioteca de Python ofrece el DataFrame, la tabla con índice de fechas más usada para series de tiempo financieras?",
      "Which Python library provides the DataFrame, the date-indexed table most used for financial time series?",
    ),
    options: [
      { id: 'CUA-15-E1-a', text: t("matplotlib", "matplotlib") },
      { id: 'CUA-15-E1-b', text: t("SciPy", "SciPy") },
      { id: 'CUA-15-E1-c', text: t("pandas", "pandas") },
      { id: 'CUA-15-E1-d', text: t("Jupyter", "Jupyter") },
    ],
    correctOptionId: 'CUA-15-E1-c',
    explanation: t(
      "pandas define Series y DataFrame, con índices de fechas y funciones como pct_change, rolling y resample. matplotlib dibuja gráficas, SciPy aporta estadística y optimización, y Jupyter es el entorno de cuadernos, no una biblioteca de datos. Error común: confundir el entorno (Jupyter) con la herramienta de datos.",
      "pandas defines Series and DataFrame, with date indexes and functions such as pct_change, rolling and resample. matplotlib draws charts, SciPy adds statistics and optimization, and Jupyter is the notebook environment, not a data library. Common mistake: confusing the environment (Jupyter) with the data tool.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'quant-python',
  },
  {
    id: 'CUA-15-E2',
    level: 6,
    module: 'CUA-15',
    kind: 'multi',
    flavor: 'concept',
    prompt: t(
      "¿Qué prácticas hacen que un análisis cuantitativo en Python sea reproducible y confiable? Marca todas las correctas.",
      "Which practices make a quantitative analysis in Python reproducible and reliable? Select all that apply.",
    ),
    options: [
      { id: 'CUA-15-E2-a', text: t("Fijar la semilla del generador de números aleatorios", "Setting the random number generator seed") },
      { id: 'CUA-15-E2-b', text: t("Guardar el código en un control de versiones como git", "Keeping the code in version control such as git") },
      { id: 'CUA-15-E2-c', text: t("Corregir a mano el archivo de datos original y sobrescribirlo", "Fixing the raw data file by hand and overwriting it") },
      { id: 'CUA-15-E2-d', text: t("Escribir pruebas que revisen las funciones con casos de resultado conocido", "Writing tests that check functions against cases with known results") },
    ],
    correctOptionIds: ['CUA-15-E2-a', 'CUA-15-E2-b', 'CUA-15-E2-d'],
    explanation: t(
      "Semilla, control de versiones y pruebas permiten que otra persona (o tú en seis meses) obtenga lo mismo y confíe en el código. Sobrescribir los datos originales destruye la evidencia y hace imposible repetir el análisis; los ajustes deben hacerse en código, sobre una copia. Error común: limpiar datos a mano 'solo esta vez'.",
      "Seed, version control and tests let someone else (or you in six months) get the same result and trust the code. Overwriting raw data destroys the evidence and makes repeating the analysis impossible; adjustments should be made in code, on a copy. Common mistake: cleaning data by hand 'just this once'.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'quant-python',
  },
  {
    id: 'CUA-15-E3',
    level: 6,
    module: 'CUA-15',
    kind: 'fields',
    flavor: 'case',
    context: t(
      "Tienes en pandas la Serie `precios` con tres cierres consecutivos hipotéticos: 80, 84 y 63. Ejecutas `precios.pct_change()`.",
      "In pandas you have the Series `prices` with three hypothetical consecutive closes: 80, 84 and 63. You run `prices.pct_change()`.",
    ),
    prompt: t(
      "Escribe en decimal (como los devuelve pandas) el segundo y el tercer valor del resultado; el primero es NaN.",
      "Write as decimals (as pandas returns them) the second and third values of the result; the first is NaN.",
    ),
    fields: [
      { id: 'f1', label: t("Segundo valor (día 2)", "Second value (day 2)"), answer: 0.05, unit: 'none', tolerance: { abs: 0.0005 } },
      { id: 'f2', label: t("Tercer valor (día 3)", "Third value (day 3)"), answer: -0.25, unit: 'none', tolerance: { abs: 0.0005 } },
    ],
    explanation: t(
      "pct_change calcula precio_hoy/precio_ayer − 1: 84/80 − 1 = 0.05 y 63/84 − 1 = −0.25. Lo devuelve en decimal, no en porcentaje. Error común: calcular el tercero contra el primer precio (63/80 − 1 = −0.2125) o escribir 5 en lugar de 0.05.",
      "pct_change computes price_today/price_yesterday − 1: 84/80 − 1 = 0.05 and 63/84 − 1 = −0.25. It returns decimals, not percentages. Common mistake: computing the third against the first price (63/80 − 1 = −0.2125) or writing 5 instead of 0.05.",
    ),
    difficulty: 2,
    points: 15,
    competency: 'quant-python',
  },
  {
    id: 'CUA-15-E4',
    level: 6,
    module: 'CUA-15',
    kind: 'truefalse',
    flavor: 'concept',
    prompt: t(
      "En un backtest con pandas, aplicar `senal.shift(1)` antes de multiplicar por los rendimientos ayuda a evitar usar información del mismo día que todavía no conocías.",
      "In a pandas backtest, applying `signal.shift(1)` before multiplying by returns helps avoid using same-day information you did not yet know.",
    ),
    answer: true,
    explanation: t(
      "Verdadero. Una señal calculada con el cierre de hoy solo puede ejecutarse después; shift(1) hace que el rendimiento de cada día use la señal del día anterior. Error común: multiplicar la señal de hoy por el rendimiento de hoy, lo que crea sesgo de anticipación e infla el resultado.",
      "True. A signal computed with today's close can only be executed afterward; shift(1) makes each day's return use the previous day's signal. Common mistake: multiplying today's signal by today's return, which creates look-ahead bias and inflates the result.",
    ),
    difficulty: 2,
    points: 10,
    competency: 'quant-python',
  },
  {
    id: 'CUA-15-E5',
    level: 6,
    module: 'CUA-15',
    kind: 'classify',
    flavor: 'concept',
    prompt: t(
      "Clasifica cada tarea según la biblioteca de Python más adecuada para hacerla.",
      "Classify each task by the most suitable Python library to do it.",
    ),
    categories: [
      { id: 'CUA-15-E5-c1', label: t("NumPy", "NumPy") },
      { id: 'CUA-15-E5-c2', label: t("pandas", "pandas") },
      { id: 'CUA-15-E5-c3', label: t("matplotlib", "matplotlib") },
    ],
    items: [
      { id: 'CUA-15-E5-i1', label: t("Multiplicar una matriz de covarianzas por un vector de pesos", "Multiply a covariance matrix by a weight vector"), correctCategoryId: 'CUA-15-E5-c1' },
      { id: 'CUA-15-E5-i2', label: t("Leer un CSV de precios diarios y pasar los datos a frecuencia mensual", "Read a CSV of daily prices and convert the data to monthly frequency"), correctCategoryId: 'CUA-15-E5-c2' },
      { id: 'CUA-15-E5-i3', label: t("Dibujar el histograma de los rendimientos diarios", "Draw the histogram of daily returns"), correctCategoryId: 'CUA-15-E5-c3' },
      { id: 'CUA-15-E5-i4', label: t("Generar 10,000 números aleatorios normales para una simulación", "Generate 10,000 normal random numbers for a simulation"), correctCategoryId: 'CUA-15-E5-c1' },
      { id: 'CUA-15-E5-i5', label: t("Calcular el promedio móvil de 20 días de una serie con fechas", "Compute the 20-day moving average of a dated series"), correctCategoryId: 'CUA-15-E5-c2' },
      { id: 'CUA-15-E5-i6', label: t("Graficar la evolución del valor de una cartera en el tiempo", "Plot the evolution of a portfolio's value over time"), correctCategoryId: 'CUA-15-E5-c3' },
    ],
    explanation: t(
      "NumPy: álgebra con arreglos y números aleatorios. pandas: leer archivos, manejar fechas, cambiar frecuencia y ventanas móviles. matplotlib: histogramas y gráficas de líneas. Error común: asignar el promedio móvil a NumPy; se puede, pero pandas lo hace directo con rolling y respeta el índice de fechas.",
      "NumPy: algebra with arrays and random numbers. pandas: reading files, handling dates, changing frequency and rolling windows. matplotlib: histograms and line charts. Common mistake: assigning the moving average to NumPy; it is possible, but pandas does it directly with rolling and keeps the date index.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'quant-python',
  },
  {
    id: 'CUA-15-E6',
    level: 6,
    module: 'CUA-15',
    kind: 'numeric',
    flavor: 'case',
    context: t(
      "La Serie `precios` tiene cuatro cierres hipotéticos en este orden: 10, 12, 14 y 19. Ejecutas `precios.rolling(3).mean()`.",
      "The Series `prices` has four hypothetical closes in this order: 10, 12, 14 and 19. You run `prices.rolling(3).mean()`.",
    ),
    prompt: t(
      "¿Qué valor aparece en la última posición del resultado?",
      "What value appears in the last position of the result?",
    ),
    answer: 15,
    unit: 'none',
    decimals: 0,
    tolerance: { abs: 0.01 },
    explanation: t(
      "rolling(3) usa las tres observaciones más recientes de cada fila; para la última: (12 + 14 + 19)/3 = 45/3 = 15. Las dos primeras posiciones salen NaN porque aún no hay tres datos. Error común: promediar los cuatro precios (13.75) o tomar los tres primeros (12).",
      "rolling(3) uses the three most recent observations for each row; for the last one: (12 + 14 + 19)/3 = 45/3 = 15. The first two positions are NaN because there are not yet three data points. Common mistake: averaging all four prices (13.75) or taking the first three (12).",
    ),
    difficulty: 1,
    points: 10,
    competency: 'quant-python',
  },
  // ───────────────────────────── CUA-16 ─────────────────────────────
  {
    id: 'CUA-16-E1',
    level: 6,
    module: 'CUA-16',
    kind: 'mcq',
    flavor: 'concept',
    prompt: t(
      "Una financiera quiere predecir, con datos históricos etiquetados, si un nuevo solicitante pagará o no su crédito. ¿Qué tipo de problema de machine learning es?",
      "A lender wants to predict, using labeled historical data, whether a new applicant will repay their loan or not. What type of machine learning problem is it?",
    ),
    options: [
      { id: 'CUA-16-E1-a', text: t("Aprendizaje supervisado de clasificación", "Supervised classification learning") },
      { id: 'CUA-16-E1-b', text: t("Aprendizaje supervisado de regresión", "Supervised regression learning") },
      { id: 'CUA-16-E1-c', text: t("Aprendizaje no supervisado de agrupamiento", "Unsupervised clustering learning") },
      { id: 'CUA-16-E1-d', text: t("Simulación Monte Carlo", "Monte Carlo simulation") },
    ],
    correctOptionId: 'CUA-16-E1-a',
    explanation: t(
      "Hay etiquetas (pagó / no pagó), así que es supervisado, y la respuesta es una categoría, así que es clasificación. Sería regresión si se predijera un número, como el monto que se recuperará. Error común: llamar 'regresión' a la regresión logística por su nombre; aunque se llama así, se usa para clasificar.",
      "There are labels (paid / did not pay), so it is supervised, and the answer is a category, so it is classification. It would be regression if a number were predicted, such as the amount to be recovered. Common mistake: calling logistic regression 'regression' because of its name; despite that, it is used to classify.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'ml-finance',
  },
  {
    id: 'CUA-16-E2',
    level: 6,
    module: 'CUA-16',
    kind: 'fields',
    flavor: 'case',
    context: t(
      "Un modelo de alerta de impago se probó con 1,000 clientes. Resultados: 40 verdaderos positivos, 10 falsos positivos, 20 falsos negativos y 930 verdaderos negativos.",
      "A default alert model was tested on 1,000 customers. Results: 40 true positives, 10 false positives, 20 false negatives and 930 true negatives.",
    ),
    prompt: t(
      "Calcula exactitud, precisión y sensibilidad en porcentaje (dos decimales).",
      "Compute accuracy, precision and recall as percentages (two decimals).",
    ),
    fields: [
      { id: 'f1', label: t("Exactitud (%)", "Accuracy (%)"), answer: 97, unit: '%', tolerance: { abs: 0.05 } },
      { id: 'f2', label: t("Precisión (%)", "Precision (%)"), answer: 80, unit: '%', tolerance: { abs: 0.05 } },
      { id: 'f3', label: t("Sensibilidad (%)", "Recall (%)"), answer: 66.67, unit: '%', tolerance: { abs: 0.05 } },
    ],
    explanation: t(
      "Exactitud = (40 + 930)/1,000 = 97%. Precisión = 40/(40 + 10) = 80%: 8 de cada 10 alertas fueron reales. Sensibilidad = 40/(40 + 20) ≈ 66.67%: se escapó un tercio de los impagos. Error común: intercambiar precisión y sensibilidad; la precisión mira las alertas, la sensibilidad mira los casos reales.",
      "Accuracy = (40 + 930)/1,000 = 97%. Precision = 40/(40 + 10) = 80%: 8 out of 10 alerts were real. Recall = 40/(40 + 20) ≈ 66.67%: a third of the defaults slipped through. Common mistake: swapping precision and recall; precision looks at the alerts, recall looks at the real cases.",
    ),
    difficulty: 2,
    points: 15,
    competency: 'ml-finance',
  },
  {
    id: 'CUA-16-E3',
    level: 6,
    module: 'CUA-16',
    kind: 'truefalse',
    flavor: 'concept',
    prompt: t(
      "Para evaluar un modelo que predice rendimientos diarios, lo mejor es revolver al azar todas las fechas antes de separar entrenamiento y prueba.",
      "To evaluate a model that predicts daily returns, it is best to randomly shuffle all dates before splitting training and test sets.",
    ),
    answer: false,
    explanation: t(
      "Falso. En series de tiempo, revolver mezcla el futuro en el entrenamiento: el modelo 've' días posteriores a los que luego predice y el resultado sale inflado. Se separa por fecha (entrenar con el pasado, probar con lo más reciente) o con ventanas walk-forward. Error común: aplicar la validación aleatoria que funciona con datos independientes.",
      "False. In time series, shuffling mixes the future into training: the model 'sees' days after the ones it later predicts and the result is inflated. Split by date (train on the past, test on the most recent) or with walk-forward windows. Common mistake: applying the random validation that works with independent data.",
    ),
    difficulty: 2,
    points: 10,
    competency: 'ml-finance',
  },
  {
    id: 'CUA-16-E4',
    level: 6,
    module: 'CUA-16',
    kind: 'classify',
    flavor: 'concept',
    prompt: t(
      "Clasifica cada aplicación financiera según el tipo de aprendizaje que usa.",
      "Classify each financial application by the type of learning it uses.",
    ),
    categories: [
      { id: 'CUA-16-E4-c1', label: t("Supervisado: clasificación", "Supervised: classification") },
      { id: 'CUA-16-E4-c2', label: t("Supervisado: regresión", "Supervised: regression") },
      { id: 'CUA-16-E4-c3', label: t("No supervisado: agrupamiento", "Unsupervised: clustering") },
    ],
    items: [
      { id: 'CUA-16-E4-i1', label: t("Marcar una compra con tarjeta como fraude o no fraude, con historial etiquetado", "Flag a card purchase as fraud or not fraud, with labeled history"), correctCategoryId: 'CUA-16-E4-c1' },
      { id: 'CUA-16-E4-i2', label: t("Estimar el precio de venta de un departamento a partir de sus metros y ubicación", "Estimate an apartment's sale price from its square meters and location"), correctCategoryId: 'CUA-16-E4-c2' },
      { id: 'CUA-16-E4-i3', label: t("Formar segmentos de clientes según sus hábitos de gasto, sin categorías previas", "Form customer segments by spending habits, without predefined categories"), correctCategoryId: 'CUA-16-E4-c3' },
      { id: 'CUA-16-E4-i4', label: t("Predecir el porcentaje de rendimiento del próximo mes de una acción", "Predict a stock's next-month return percentage"), correctCategoryId: 'CUA-16-E4-c2' },
      { id: 'CUA-16-E4-i5', label: t("Decidir si una solicitud de crédito se aprueba o se rechaza", "Decide whether a credit application is approved or rejected"), correctCategoryId: 'CUA-16-E4-c1' },
      { id: 'CUA-16-E4-i6', label: t("Agrupar acciones que se mueven parecido sin decirle al algoritmo los sectores", "Group stocks that move alike without telling the algorithm the sectors"), correctCategoryId: 'CUA-16-E4-c3' },
    ],
    explanation: t(
      "Clasificación: respuestas por categoría con etiqueta (fraude, aprobación). Regresión: respuestas numéricas (precio, rendimiento). Agrupamiento: formar grupos sin etiquetas (segmentos de clientes, acciones parecidas). Error común: poner la predicción del rendimiento en clasificación; sería clasificación solo si se predijera 'sube / baja'.",
      "Classification: categorical answers with labels (fraud, approval). Regression: numeric answers (price, return). Clustering: forming groups without labels (customer segments, similar stocks). Common mistake: putting return prediction under classification; it would be classification only if predicting 'up / down'.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'ml-finance',
  },
  {
    id: 'CUA-16-E5',
    level: 6,
    module: 'CUA-16',
    kind: 'mcq',
    flavor: 'interpret',
    context: t(
      "Un modelo de trading acierta la dirección del mercado 94% de las veces en el periodo de entrenamiento, pero solo 52% en el periodo de prueba posterior.",
      "A trading model gets the market direction right 94% of the time in the training period, but only 52% in the later test period.",
    ),
    prompt: t(
      "¿Cuál es el diagnóstico más probable?",
      "What is the most likely diagnosis?",
    ),
    options: [
      { id: 'CUA-16-E5-a', text: t("Subajuste: el modelo es demasiado simple", "Underfitting: the model is too simple") },
      { id: 'CUA-16-E5-b', text: t("Sobreajuste: memorizó el ruido del entrenamiento y no generaliza", "Overfitting: it memorized training noise and does not generalize") },
      { id: 'CUA-16-E5-c', text: t("El modelo es excelente y conviene operarlo con más capital", "The model is excellent and should be traded with more capital") },
      { id: 'CUA-16-E5-d', text: t("El periodo de prueba tiene errores y debe descartarse", "The test period has errors and should be discarded") },
    ],
    correctOptionId: 'CUA-16-E5-b',
    explanation: t(
      "Una brecha enorme entre entrenamiento (94%) y prueba (52%, casi azar) es la firma del sobreajuste. Se corrige con modelos más simples, regularización y más datos fuera de muestra. El subajuste daría resultados pobres en ambos periodos. Error común: descartar la prueba porque 'salió mal'; eso es justamente sobreoptimizar.",
      "A huge gap between training (94%) and test (52%, nearly chance) is the signature of overfitting. It is fixed with simpler models, regularization and more out-of-sample data. Underfitting would give poor results in both periods. Common mistake: discarding the test because it 'went badly'; that is precisely over-optimizing.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'ml-finance',
  },
  {
    id: 'CUA-16-E6',
    level: 6,
    module: 'CUA-16',
    kind: 'numeric',
    flavor: 'case',
    context: t(
      "Una cartera tiene 5,000 créditos; 150 cayeron en impago. Un analista presume un 'modelo' que siempre responde 'este cliente sí pagará'.",
      "A portfolio has 5,000 loans; 150 defaulted. An analyst boasts about a 'model' that always answers 'this customer will repay'.",
    ),
    prompt: t(
      "¿Qué exactitud (en %) tiene ese modelo trivial?",
      "What accuracy (in %) does that trivial model have?",
    ),
    answer: 97,
    unit: '%',
    decimals: 2,
    tolerance: { abs: 0.05 },
    explanation: t(
      "Acierta en todos los que pagaron: 5,000 − 150 = 4,850. Exactitud = 4,850/5,000 = 97%. Pero su sensibilidad es 0%: no detecta ningún impago. Con clases desbalanceadas, la exactitud sola engaña. Error común: responder 3% (la tasa de impago) en lugar de la exactitud.",
      "It is right on everyone who repaid: 5,000 − 150 = 4,850. Accuracy = 4,850/5,000 = 97%. But its recall is 0%: it detects no defaults. With imbalanced classes, accuracy alone misleads. Common mistake: answering 3% (the default rate) instead of the accuracy.",
    ),
    difficulty: 2,
    points: 15,
    competency: 'ml-finance',
  },
  // ───────────────────────────── CUA-17 ─────────────────────────────
  {
    id: 'CUA-17-E1',
    level: 6,
    module: 'CUA-17',
    kind: 'mcq',
    flavor: 'concept',
    prompt: t(
      "Un backtest de una estrategia de acciones usa solo las empresas que hoy forman parte del índice y prueba con ellas los últimos 15 años. ¿Qué sesgo tiene principalmente?",
      "A backtest of a stock strategy uses only the companies currently in the index and tests them over the last 15 years. What bias does it mainly have?",
    ),
    options: [
      { id: 'CUA-17-E1-a', text: t("Sesgo de anticipación", "Look-ahead bias") },
      { id: 'CUA-17-E1-b', text: t("Sesgo de supervivencia", "Survivorship bias") },
      { id: 'CUA-17-E1-c', text: t("Sesgo de costos de transacción", "Transaction cost bias") },
      { id: 'CUA-17-E1-d', text: t("Ninguno: usar las empresas actuales es lo correcto", "None: using current companies is correct") },
    ],
    correctOptionId: 'CUA-17-E1-b',
    explanation: t(
      "Las empresas que siguen en el índice sobrevivieron y muchas crecieron; las que quebraron o salieron no aparecen, así que el resultado se infla. Lo correcto es usar la composición que existía en cada fecha. Error común: confundirlo con anticipación; aunque saber qué empresas sobrevivieron es información del futuro, el nombre específico de este sesgo es supervivencia.",
      "The companies still in the index survived and many grew; those that went bankrupt or left are missing, so the result is inflated. The right approach is to use the composition that existed on each date. Common mistake: confusing it with look-ahead; although knowing which companies survived is future information, the specific name of this bias is survivorship.",
    ),
    difficulty: 2,
    points: 10,
    competency: 'backtesting',
  },
  {
    id: 'CUA-17-E2',
    level: 6,
    module: 'CUA-17',
    kind: 'numeric',
    flavor: 'case',
    context: t(
      "El valor de una cartera simulada en un backtest fue, al cierre de cada trimestre (miles de pesos, hipotético): 200, 250, 225, 300, 210 y 240.",
      "The value of a simulated portfolio in a backtest was, at each quarter end (thousands of pesos, hypothetical): 200, 250, 225, 300, 210 and 240.",
    ),
    prompt: t(
      "¿Cuál es la caída máxima (max drawdown) en porcentaje? Escríbela como número positivo.",
      "What is the maximum drawdown as a percentage? Write it as a positive number.",
    ),
    answer: 30,
    unit: '%',
    decimals: 2,
    tolerance: { abs: 0.05 },
    explanation: t(
      "Picos acumulados: 200, 250, 250, 300, 300, 300. Caídas: de 250 a 225 = 10%; de 300 a 210 = (300 − 210)/300 = 30%; 240 sigue 20% abajo del pico. La mayor es 30%. Error común: medir desde el primer valor (200 → 210 no es caída) o desde el máximo al último valor (20%).",
      "Running peaks: 200, 250, 250, 300, 300, 300. Drops: from 250 to 225 = 10%; from 300 to 210 = (300 − 210)/300 = 30%; 240 is still 20% below the peak. The largest is 30%. Common mistake: measuring from the first value (200 → 210 is not a drop) or from the maximum to the last value (20%).",
    ),
    difficulty: 2,
    points: 15,
    competency: 'backtesting',
  },
  {
    id: 'CUA-17-E3',
    level: 6,
    module: 'CUA-17',
    kind: 'numeric',
    flavor: 'case',
    context: t(
      "Una casa de bolsa valida su VaR diario de 95% con los últimos 500 días hábiles.",
      "A brokerage validates its 95% daily VaR using the last 500 business days.",
    ),
    prompt: t(
      "¿Cuántas excepciones (días con pérdida mayor al VaR) esperaría si el modelo es correcto?",
      "How many exceptions (days with a loss larger than VaR) would it expect if the model is correct?",
    ),
    answer: 25,
    unit: 'days',
    decimals: 0,
    tolerance: { abs: 0.5 },
    explanation: t(
      "Con 95% de confianza, el VaR se supera en 5% de los días: 0.05 × 500 = 25. Muchas más excepciones indican que el modelo subestima el riesgo; muchas menos, que es demasiado conservador. Error común: usar 95% en vez de 5% (475) o confundir con el 1% de un VaR de 99% (5).",
      "At 95% confidence, VaR is exceeded on 5% of days: 0.05 × 500 = 25. Many more exceptions mean the model underestimates risk; many fewer, that it is too conservative. Common mistake: using 95% instead of 5% (475) or confusing it with the 1% of a 99% VaR (5).",
    ),
    difficulty: 1,
    points: 10,
    competency: 'backtesting',
  },
  {
    id: 'CUA-17-E4',
    level: 6,
    module: 'CUA-17',
    kind: 'fields',
    flavor: 'case',
    context: t(
      "Un backtest muestra que una estrategia rinde 12% anual antes de costos. Hace 50 operaciones al año y cada una cuesta en promedio 0.1% del capital (comisión más diferencial). Supón que los costos se restan de forma simple.",
      "A backtest shows a strategy earns 12% per year before costs. It makes 50 trades a year and each one costs on average 0.1% of capital (commission plus spread). Assume costs are subtracted simply.",
    ),
    prompt: t(
      "Completa el costo anual total y el rendimiento neto, en porcentaje.",
      "Fill in the total annual cost and the net return, as percentages.",
    ),
    fields: [
      { id: 'f1', label: t("Costo anual total (%)", "Total annual cost (%)"), answer: 5, unit: '%', tolerance: { abs: 0.01 } },
      { id: 'f2', label: t("Rendimiento neto anual (%)", "Net annual return (%)"), answer: 7, unit: '%', tolerance: { abs: 0.01 } },
    ],
    explanation: t(
      "Costo = 50 × 0.1% = 5% al año; neto = 12% − 5% = 7%. Casi la mitad de la ganancia se va en costos, y con slippage podría ser peor. Error común: ignorar los costos porque cada operación 'cuesta poco'; lo que importa es cuántas veces se paga.",
      "Cost = 50 × 0.1% = 5% per year; net = 12% − 5% = 7%. Almost half the profit goes to costs, and with slippage it could be worse. Common mistake: ignoring costs because each trade 'costs little'; what matters is how many times you pay.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'backtesting',
  },
  {
    id: 'CUA-17-E5',
    level: 6,
    module: 'CUA-17',
    kind: 'multi',
    flavor: 'case',
    prompt: t(
      "¿Cuáles de estas decisiones de diseño introducen sesgo de anticipación (look-ahead) en un backtest? Marca todas las correctas.",
      "Which of these design choices introduce look-ahead bias into a backtest? Select all that apply.",
    ),
    options: [
      { id: 'CUA-17-E5-a', text: t("Usar las utilidades del año fechadas el 31 de diciembre, aunque se publicaron meses después", "Using annual earnings dated December 31, even though they were published months later") },
      { id: 'CUA-17-E5-b', text: t("Calcular la señal con el cierre de hoy y suponer que compraste en la apertura de hoy", "Computing the signal with today's close and assuming you bought at today's open") },
      { id: 'CUA-17-E5-c', text: t("Calcular la señal con el cierre de ayer y comprar en la apertura de hoy", "Computing the signal with yesterday's close and buying at today's open") },
      { id: 'CUA-17-E5-d', text: t("Excluir del universo las empresas que salieron de la bolsa", "Excluding from the universe the companies that delisted") },
    ],
    correctOptionIds: ['CUA-17-E5-a', 'CUA-17-E5-b'],
    explanation: t(
      "(a) y (b) usan datos que no existían en el momento de decidir: utilidades aún no publicadas y un cierre que ocurre después de la apertura. (c) es correcto: decides con lo que ya sabías. (d) es un problema real, pero se llama sesgo de supervivencia, no de anticipación. Error común: fechar los datos contables por el periodo que cubren y no por su fecha de publicación.",
      "(a) and (b) use data that did not exist at decision time: earnings not yet published and a close that happens after the open. (c) is correct: you decide with what you already knew. (d) is a real problem, but it is called survivorship bias, not look-ahead. Common mistake: dating accounting data by the period they cover rather than by their publication date.",
    ),
    difficulty: 3,
    points: 20,
    competency: 'backtesting',
  },
  {
    id: 'CUA-17-E6',
    level: 6,
    module: 'CUA-17',
    kind: 'truefalse',
    flavor: 'interpret',
    prompt: t(
      "Si pruebas 1,000 combinaciones de parámetros con los mismos datos y te quedas con la de mayor índice de Sharpe, ese Sharpe es una buena estimación de lo que ganarás en el futuro.",
      "If you test 1,000 parameter combinations on the same data and keep the one with the highest Sharpe ratio, that Sharpe is a good estimate of what you will earn in the future.",
    ),
    answer: false,
    explanation: t(
      "Falso. Entre tantas pruebas, alguna saldrá brillante por pura suerte (sobreoptimización o data snooping); su Sharpe está inflado. Hay que validarla en datos fuera de muestra o con walk-forward y descontar el número de intentos. Error común: reportar solo el mejor resultado sin decir cuántas variantes se probaron.",
      "False. Among so many tests, one will look brilliant by pure luck (over-optimization or data snooping); its Sharpe is inflated. It must be validated on out-of-sample data or walk-forward and adjusted for the number of attempts. Common mistake: reporting only the best result without saying how many variants were tried.",
    ),
    difficulty: 2,
    points: 10,
    competency: 'backtesting',
  },
]
