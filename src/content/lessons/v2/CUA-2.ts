import type { Exercise, Lesson } from '../../../types'

/**
 * FINCORE — Temario v2.0, área Finanzas Cuantitativas y Gestión de Riesgos (CUA.7 a CUA.12), etapa Intermedio.
 */

const NOTE_QUANT = {
  es: "Contenido educativo, no es una recomendación de inversión. Todos los precios, tasas, volatilidades y pesos de los ejemplos son hipotéticos. Los modelos cuantitativos son simplificaciones: sus resultados dependen de los datos y supuestos usados. Verifica datos vigentes (2026) en fuentes oficiales antes de decidir.",
  en: "Educational content, not investment advice. All prices, rates, volatilities and weights in the examples are hypothetical. Quantitative models are simplifications: their results depend on the data and assumptions used. Check current (2026) data from official sources before deciding.",
}

const NOTE_RISK_REG = {
  es: "Contenido educativo. Las referencias al Comité de Supervisión Bancaria de Basilea y a la regulación de administración de riesgos que la CNBV aplica a los bancos en México son generales; las reglas, métodos aceptados, niveles de confianza y requerimientos de capital cambian con el tiempo: verifica la versión vigente (2026) con la autoridad correspondiente. Las cifras de los ejemplos son hipotéticas.",
  en: "Educational content. References to the Basel Committee on Banking Supervision and to the risk management regulation that CNBV applies to banks in Mexico are general; rules, accepted methods, confidence levels and capital requirements change over time: verify the current version (2026) with the relevant authority. Figures in the examples are hypothetical.",
}

export const lessons: Lesson[] = [
  // ───────────────────────────── CUA-07 ─────────────────────────────
  {
    id: 'CUA-07',
    level: 6,
    topicIds: ['CUA.7'],
    title: { es: "Series de tiempo financieras", en: "Financial time series" },
    summary: {
      es: "Una serie de tiempo financiera es una lista ordenada de precios o rendimientos; para modelarla conviene trabajar con rendimientos, revisar si es estacionaria y usar modelos como AR para pronosticar.",
      en: "A financial time series is an ordered list of prices or returns; to model it you should work with returns, check whether it is stationary and use models such as AR to forecast.",
    },
    minutes: 16,
    objectives: [
      { es: "Calcular rendimientos simples y logarítmicos a partir de una serie de precios y explicar cuándo usar cada uno.", en: "Compute simple and log returns from a price series and explain when to use each." },
      { es: "Distinguir una serie estacionaria de una no estacionaria (tendencia, caminata aleatoria) y explicar la autocorrelación.", en: "Distinguish a stationary series from a non-stationary one (trend, random walk) and explain autocorrelation." },
      { es: "Pronosticar uno y dos periodos con un modelo AR(1) y obtener su media de largo plazo.", en: "Forecast one and two periods with an AR(1) model and obtain its long-run mean." },
    ],
    theory: [
      {
        heading: { es: "Precios, rendimientos simples y logarítmicos", en: "Prices, simple and log returns" },
        body: [
          {
            es: "Una **serie de tiempo** es una lista de datos ordenados en el tiempo: el precio de cierre diario de una acción, el tipo de cambio peso-dólar cada mañana o la tasa de interés de cada mes. Lo que la hace especial es que **el orden importa**: el dato de hoy suele tener relación con el de ayer.",
            en: "A **time series** is a list of data ordered in time: a stock's daily closing price, the peso-dollar exchange rate every morning or the interest rate each month. What makes it special is that **order matters**: today's data point is often related to yesterday's.",
          },
          {
            es: "En finanzas casi nunca se modelan los precios directamente, sino los **rendimientos**: cuánto cambió el precio en proporción. El **rendimiento simple** compara el precio nuevo con el anterior. El **rendimiento logarítmico** (o continuo) usa el logaritmo natural del cociente de precios; para cambios pequeños ambos dan casi lo mismo.",
            en: "In finance we almost never model prices directly, but **returns**: how much the price changed in proportion. The **simple return** compares the new price with the previous one. The **log (continuous) return** uses the natural logarithm of the price ratio; for small changes both give almost the same result.",
          },
          {
            es: "¿Por qué existen los dos? El rendimiento simple **se suma entre activos** (sirve para el rendimiento de un portafolio en un día). El logarítmico **se suma en el tiempo**: el rendimiento log de una semana es la suma de los cinco rendimientos log diarios. Mini ejemplo: un precio pasa de $100 a $105 y luego a $99.75. Los rendimientos simples son +5% y −5%, pero no regresas a $100: los log son +4.88% y −5.13%, y su suma (−0.25%) sí da el cambio total.",
            en: "Why do both exist? Simple returns **add across assets** (useful for a portfolio's return on one day). Log returns **add over time**: a week's log return is the sum of the five daily log returns. Mini example: a price goes from $100 to $105 and then to $99.75. Simple returns are +5% and −5%, but you do not get back to $100: log returns are +4.88% and −5.13%, and their sum (−0.25%) does give the total change.",
          },
        ],
        formula: "r simple = (P_t − P_(t−1)) / P_(t−1)   ·   r log = ln(P_t / P_(t−1))",
      },
      {
        heading: { es: "Estacionariedad, autocorrelación y caminata aleatoria", en: "Stationarity, autocorrelation and random walk" },
        body: [
          {
            es: "Una serie es **estacionaria** cuando su comportamiento promedio no cambia con el tiempo: su media, su varianza y la relación entre datos separados por el mismo número de periodos se mantienen estables. Es como el clima de tu ciudad: cada día es distinto, pero los promedios del año son parecidos. Los modelos clásicos necesitan series estacionarias para que lo aprendido del pasado sirva para el futuro.",
            en: "A series is **stationary** when its average behavior does not change over time: its mean, its variance and the relationship between data points separated by the same number of periods remain stable. It is like your city's weather: each day is different, but yearly averages are similar. Classic models need stationary series so that what is learned from the past is useful for the future.",
          },
          {
            es: "Los **precios** casi nunca son estacionarios: suelen comportarse como una **caminata aleatoria**, donde el precio de hoy es el de ayer más un choque impredecible, y se alejan sin regresar a un nivel fijo. Los **rendimientos**, en cambio, suelen tratarse como aproximadamente estacionarios. Por eso transformar precios en rendimientos (diferenciar) es el primer paso habitual.",
            en: "**Prices** are almost never stationary: they tend to behave like a **random walk**, where today's price is yesterday's plus an unpredictable shock, and they drift without returning to a fixed level. **Returns**, in contrast, are usually treated as approximately stationary. That is why turning prices into returns (differencing) is the usual first step.",
          },
          {
            es: "La **autocorrelación** mide cuánto se parece una serie a sí misma desplazada en el tiempo: si un día de alza tiende a seguirse de otro día de alza, hay autocorrelación positiva. El **ruido blanco** es el caso extremo sin memoria: media constante, varianza constante y cero autocorrelación. Mini ejemplo: si los rendimientos diarios de un índice tienen autocorrelación cercana a cero, el rendimiento de ayer casi no ayuda a predecir el de hoy.",
            en: "**Autocorrelation** measures how much a series resembles itself shifted in time: if an up day tends to be followed by another up day, there is positive autocorrelation. **White noise** is the extreme memoryless case: constant mean, constant variance and zero autocorrelation. Mini example: if an index's daily returns have autocorrelation close to zero, yesterday's return barely helps predict today's.",
          },
        ],
        bullets: [
          { es: "Estacionaria: media y varianza estables en el tiempo.", en: "Stationary: mean and variance stable over time." },
          { es: "Tendencia: la media sube o baja de forma sistemática (no estacionaria).", en: "Trend: the mean rises or falls systematically (non-stationary)." },
          { es: "Caminata aleatoria: precio de hoy = precio de ayer + choque (no estacionaria).", en: "Random walk: today's price = yesterday's price + shock (non-stationary)." },
          { es: "Ruido blanco: sin memoria, autocorrelación cero.", en: "White noise: no memory, zero autocorrelation." },
        ],
      },
      {
        heading: { es: "Modelos AR, MA y pronóstico", en: "AR and MA models and forecasting" },
        body: [
          {
            es: "Un modelo **autorregresivo de orden 1, AR(1)**, dice que el valor de hoy depende del de ayer más un choque: X_t = c + φ·X_(t−1) + ε_t. El coeficiente **φ (fi)** mide la memoria. Si |φ| < 1 la serie es estacionaria y **regresa a su media** de largo plazo, que vale c / (1 − φ). Si φ = 1 tenemos una caminata aleatoria.",
            en: "A **first-order autoregressive model, AR(1)**, says today's value depends on yesterday's plus a shock: X_t = c + φ·X_(t−1) + ε_t. The coefficient **φ (phi)** measures memory. If |φ| < 1 the series is stationary and **reverts to its long-run mean**, which equals c / (1 − φ). If φ = 1 we have a random walk.",
          },
          {
            es: "Un modelo de **medias móviles, MA(1)**, en cambio, hace depender el valor de hoy del **choque** de ayer, no del valor de ayer. Combinar ambos da los modelos **ARMA**. Para pronosticar con un AR(1) se sustituye el choque futuro por su promedio, que es cero, y se aplica la fórmula paso a paso.",
            en: "A **moving average model, MA(1)**, instead makes today's value depend on yesterday's **shock**, not on yesterday's value. Combining both gives **ARMA** models. To forecast with an AR(1) you replace the future shock with its average, which is zero, and apply the formula step by step.",
          },
          {
            es: "Mini ejemplo: el diferencial entre dos tasas sigue un AR(1) con c = 0.2 y φ = 0.6, y hoy vale 1.5. El pronóstico de mañana es 0.2 + 0.6 × 1.5 = 1.1; el de pasado mañana, 0.2 + 0.6 × 1.1 = 0.86. Cada paso se acerca a la media de largo plazo: 0.2 / (1 − 0.6) = 0.5.",
            en: "Mini example: the spread between two rates follows an AR(1) with c = 0.2 and φ = 0.6, and today it is 1.5. Tomorrow's forecast is 0.2 + 0.6 × 1.5 = 1.1; the day after, 0.2 + 0.6 × 1.1 = 0.86. Each step moves closer to the long-run mean: 0.2 / (1 − 0.6) = 0.5.",
          },
        ],
        formula: "AR(1): X_t = c + φ·X_(t−1) + ε_t   ·   media de largo plazo = c / (1 − φ)",
      },
    ],
    examples: [
      {
        title: { es: "Rendimientos simples contra logarítmicos", en: "Simple versus log returns" },
        problem: {
          es: "Una acción cierra en $100 el lunes, $105 el martes y $99.75 el miércoles (precios hipotéticos). Calcula los rendimientos simples y logarítmicos de cada día y el rendimiento total de los dos días.",
          en: "A stock closes at $100 on Monday, $105 on Tuesday and $99.75 on Wednesday (hypothetical prices). Compute the simple and log returns for each day and the total return over the two days.",
        },
        steps: [
          { es: "Martes, simple: (105 − 100) / 100 = 5%. Miércoles, simple: (99.75 − 105) / 105 = −5%.", en: "Tuesday, simple: (105 − 100) / 100 = 5%. Wednesday, simple: (99.75 − 105) / 105 = −5%." },
          { es: "Martes, log: ln(105/100) = ln(1.05) ≈ 4.88%. Miércoles, log: ln(99.75/105) = ln(0.95) ≈ −5.13%.", en: "Tuesday, log: ln(105/100) = ln(1.05) ≈ 4.88%. Wednesday, log: ln(99.75/105) = ln(0.95) ≈ −5.13%." },
          { es: "Total real: (99.75 − 100) / 100 = −0.25%. Suma de simples: 5% − 5% = 0%, no coincide.", en: "Actual total: (99.75 − 100) / 100 = −0.25%. Sum of simple returns: 5% − 5% = 0%, it does not match." },
          { es: "Suma de log: 4.88% − 5.13% ≈ −0.25%, que coincide con ln(99.75/100).", en: "Sum of log returns: 4.88% − 5.13% ≈ −0.25%, which matches ln(99.75/100)." },
        ],
        result: {
          es: "Los rendimientos log se suman en el tiempo; los simples no. Para acumular rendimientos de varios días conviene usar logaritmos.",
          en: "Log returns add over time; simple returns do not. To accumulate returns over several days, logs are convenient.",
        },
      },
      {
        title: { es: "Pronóstico con un AR(1)", en: "Forecasting with an AR(1)" },
        problem: {
          es: "Un analista estima que el diferencial de tasas (en puntos porcentuales) sigue X_t = 0.2 + 0.6·X_(t−1) + ε_t. Hoy X = 1.5. Pronostica los próximos dos periodos y la media de largo plazo.",
          en: "An analyst estimates that the rate spread (in percentage points) follows X_t = 0.2 + 0.6·X_(t−1) + ε_t. Today X = 1.5. Forecast the next two periods and the long-run mean.",
        },
        steps: [
          { es: "Choque futuro esperado = 0, así que se ignora en el pronóstico.", en: "Expected future shock = 0, so it is dropped from the forecast." },
          { es: "Periodo 1: 0.2 + 0.6 × 1.5 = 0.2 + 0.9 = 1.1.", en: "Period 1: 0.2 + 0.6 × 1.5 = 0.2 + 0.9 = 1.1." },
          { es: "Periodo 2: 0.2 + 0.6 × 1.1 = 0.2 + 0.66 = 0.86.", en: "Period 2: 0.2 + 0.6 × 1.1 = 0.2 + 0.66 = 0.86." },
          { es: "Media de largo plazo: 0.2 / (1 − 0.6) = 0.2 / 0.4 = 0.5.", en: "Long-run mean: 0.2 / (1 − 0.6) = 0.2 / 0.4 = 0.5." },
        ],
        result: {
          es: "Pronósticos: 1.1 y 0.86; la serie converge hacia 0.5. Como φ = 0.6 < 1, el modelo es estacionario y revierte a la media.",
          en: "Forecasts: 1.1 and 0.86; the series converges toward 0.5. Since φ = 0.6 < 1, the model is stationary and mean-reverting.",
        },
      },
    ],
    keyPoints: [
      { es: "En finanzas se modelan rendimientos, no precios, porque los precios rara vez son estacionarios.", en: "In finance we model returns, not prices, because prices are rarely stationary." },
      { es: "Rendimiento simple: se suma entre activos. Logarítmico: se suma en el tiempo.", en: "Simple return: adds across assets. Log return: adds over time." },
      { es: "Estacionaria = media y varianza estables; la caminata aleatoria y la tendencia no lo son.", en: "Stationary = stable mean and variance; random walks and trends are not." },
      { es: "La autocorrelación mide la memoria de la serie; el ruido blanco no tiene memoria.", en: "Autocorrelation measures the series' memory; white noise has none." },
      { es: "AR(1) con |φ| < 1 revierte a la media c / (1 − φ); los pronósticos se acercan a ella paso a paso.", en: "An AR(1) with |φ| < 1 reverts to the mean c / (1 − φ); forecasts approach it step by step." },
    ],
    normativeNote: NOTE_QUANT,
    exerciseIds: ['CUA-07-E1', 'CUA-07-E2', 'CUA-07-E3', 'CUA-07-E4', 'CUA-07-E5', 'CUA-07-E6'],
  },

  // ───────────────────────────── CUA-08 ─────────────────────────────
  {
    id: 'CUA-08',
    level: 6,
    topicIds: ['CUA.8'],
    title: { es: "Modelos de volatilidad", en: "Volatility models" },
    summary: {
      es: "La volatilidad mide qué tanto se mueven los rendimientos; como cambia con el tiempo y se agrupa en rachas, se estima con modelos como EWMA y GARCH que dan más peso a la información reciente.",
      en: "Volatility measures how much returns move; since it changes over time and clusters in streaks, it is estimated with models such as EWMA and GARCH that give more weight to recent information.",
    },
    minutes: 16,
    objectives: [
      { es: "Calcular la volatilidad histórica y anualizarla con la regla de la raíz del tiempo.", en: "Compute historical volatility and annualize it with the square-root-of-time rule." },
      { es: "Explicar el agrupamiento de volatilidad y actualizar una estimación EWMA.", en: "Explain volatility clustering and update an EWMA estimate." },
      { es: "Aplicar un GARCH(1,1): varianza de mañana, persistencia y varianza de largo plazo.", en: "Apply a GARCH(1,1): tomorrow's variance, persistence and long-run variance." },
      { es: "Distinguir la volatilidad histórica de la implícita.", en: "Distinguish historical from implied volatility." },
    ],
    theory: [
      {
        heading: { es: "Volatilidad histórica y su anualización", en: "Historical volatility and annualization" },
        body: [
          {
            es: "La **volatilidad** es la desviación estándar de los rendimientos: mide qué tanto se alejan, en promedio, de su media. Una acción con volatilidad diaria de 2% se mueve típicamente alrededor de ±2% en un día; una con 0.5% es mucho más tranquila. No dice hacia dónde se moverá el precio, solo **qué tan fuerte**.",
            en: "**Volatility** is the standard deviation of returns: it measures how far, on average, they move away from their mean. A stock with 2% daily volatility typically moves around ±2% in a day; one with 0.5% is much calmer. It does not say where the price will go, only **how strongly** it moves.",
          },
          {
            es: "La **volatilidad histórica** se calcula con rendimientos pasados (por ejemplo, de los últimos 60 días) dando el mismo peso a todos. Para compararla entre horizontes se usa la **regla de la raíz del tiempo**: si los rendimientos son independientes, la varianza crece en proporción al número de días, así que la volatilidad crece con su raíz cuadrada. Por convención se suelen usar unos 252 días hábiles al año.",
            en: "**Historical volatility** is computed from past returns (for example, the last 60 days) giving all of them the same weight. To compare it across horizons we use the **square-root-of-time rule**: if returns are independent, variance grows in proportion to the number of days, so volatility grows with its square root. By convention about 252 trading days per year are commonly used.",
          },
          {
            es: "Mini ejemplo: una volatilidad diaria de 1.2% equivale a 1.2% × √252 ≈ 1.2% × 15.87 ≈ 19.05% anual. Ojo: multiplicar por 252 en lugar de por √252 es un error frecuente que infla muchísimo el resultado.",
            en: "Mini example: a 1.2% daily volatility is equivalent to 1.2% × √252 ≈ 1.2% × 15.87 ≈ 19.05% per year. Watch out: multiplying by 252 instead of √252 is a frequent mistake that hugely inflates the result.",
          },
        ],
        formula: "σ anual = σ diaria × √252   ·   σ en T días = σ diaria × √T",
      },
      {
        heading: { es: "Agrupamiento de volatilidad y EWMA", en: "Volatility clustering and EWMA" },
        body: [
          {
            es: "En los mercados reales la volatilidad **no es constante**: hay rachas tranquilas y rachas agitadas. A esto se le llama **agrupamiento de volatilidad**: después de días con movimientos grandes suelen venir más días con movimientos grandes, aunque su dirección (alza o baja) sea impredecible. Piensa en una temporada de noticias económicas fuertes: el tipo de cambio se mueve mucho varios días seguidos.",
            en: "In real markets volatility is **not constant**: there are calm stretches and turbulent stretches. This is called **volatility clustering**: days with large moves tend to be followed by more days with large moves, even though their direction (up or down) is unpredictable. Think of a season of major economic news: the exchange rate moves a lot several days in a row.",
          },
          {
            es: "El modelo **EWMA** (promedio móvil ponderado exponencialmente) atiende esto dando más peso a lo reciente. La varianza de hoy es una mezcla: una parte λ (lambda) de la varianza de ayer y una parte (1 − λ) del rendimiento de ayer al cuadrado. Un λ cercano a 1 significa **mucha memoria** y reacción lenta; un λ menor reacciona más rápido a las noticias. La metodología RiskMetrics popularizó λ = 0.94 para datos diarios.",
            en: "The **EWMA** model (exponentially weighted moving average) addresses this by giving more weight to recent data. Today's variance is a mix: a share λ (lambda) of yesterday's variance and a share (1 − λ) of yesterday's squared return. A λ close to 1 means **long memory** and slow reaction; a lower λ reacts faster to news. The RiskMetrics methodology popularized λ = 0.94 for daily data.",
          },
          {
            es: "Mini ejemplo: con λ = 0.94, volatilidad de ayer de 1% (varianza 0.0001) y un rendimiento de ayer de 2% (al cuadrado 0.0004): σ² = 0.94 × 0.0001 + 0.06 × 0.0004 = 0.000118, así que σ ≈ 1.09%. El día movido hizo subir la estimación.",
            en: "Mini example: with λ = 0.94, yesterday's volatility of 1% (variance 0.0001) and yesterday's return of 2% (squared 0.0004): σ² = 0.94 × 0.0001 + 0.06 × 0.0004 = 0.000118, so σ ≈ 1.09%. The busy day pushed the estimate up.",
          },
        ],
        formula: "EWMA: σ²_t = λ·σ²_(t−1) + (1 − λ)·r²_(t−1)",
      },
      {
        heading: { es: "GARCH(1,1) y volatilidad implícita", en: "GARCH(1,1) and implied volatility" },
        body: [
          {
            es: "El modelo **GARCH(1,1)** agrega a EWMA un término constante **ω (omega)** que jala la varianza hacia un nivel de largo plazo. Tiene tres parámetros: ω, **α (alfa)**, que mide cuánto reacciona la varianza al último rendimiento, y **β (beta)**, que mide cuánto recuerda la varianza anterior. La suma **α + β es la persistencia**: si es cercana a 1, los choques de volatilidad tardan mucho en disiparse.",
            en: "The **GARCH(1,1)** model adds to EWMA a constant term **ω (omega)** that pulls variance toward a long-run level. It has three parameters: ω, **α (alpha)**, which measures how much variance reacts to the latest return, and **β (beta)**, which measures how much it remembers the previous variance. The sum **α + β is persistence**: if it is close to 1, volatility shocks take a long time to fade.",
          },
          {
            es: "Si α + β < 1, la varianza **revierte a su nivel de largo plazo** ω / (1 − α − β). EWMA es un caso especial de GARCH con ω = 0 y α + β = 1, por eso EWMA no tiene un nivel al cual regresar.",
            en: "If α + β < 1, variance **reverts to its long-run level** ω / (1 − α − β). EWMA is a special case of GARCH with ω = 0 and α + β = 1, which is why EWMA has no level to return to.",
          },
          {
            es: "Todo lo anterior mira **hacia atrás**. La **volatilidad implícita**, en cambio, se obtiene despejándola del precio de mercado de una opción: es la volatilidad que el mercado está \"cobrando\" hoy para el futuro. Mini ejemplo: con ω = 0.000002, α = 0.08 y β = 0.90, la persistencia es 0.98 y la varianza de largo plazo es 0.000002 / 0.02 = 0.0001, es decir, una volatilidad diaria de 1%.",
            en: "Everything above looks **backward**. **Implied volatility**, by contrast, is backed out from an option's market price: it is the volatility the market is \"charging\" today for the future. Mini example: with ω = 0.000002, α = 0.08 and β = 0.90, persistence is 0.98 and the long-run variance is 0.000002 / 0.02 = 0.0001, that is, a 1% daily volatility.",
          },
        ],
        formula: "GARCH(1,1): σ²_t = ω + α·r²_(t−1) + β·σ²_(t−1)   ·   varianza de largo plazo = ω / (1 − α − β)",
        bullets: [
          { es: "ω: constante que ancla la varianza de largo plazo.", en: "ω: constant that anchors the long-run variance." },
          { es: "α: reacción al último rendimiento al cuadrado (las noticias).", en: "α: reaction to the latest squared return (the news)." },
          { es: "β: memoria de la varianza anterior.", en: "β: memory of the previous variance." },
          { es: "α + β: persistencia; debe ser menor que 1 para revertir a la media.", en: "α + β: persistence; it must be below 1 to revert to the mean." },
        ],
      },
    ],
    examples: [
      {
        title: { es: "Anualizar la volatilidad de un fondo", en: "Annualizing a fund's volatility" },
        problem: {
          es: "Un fondo de acciones tuvo una volatilidad diaria de 1.2% (dato hipotético). Calcula su volatilidad anual con 252 días hábiles y su volatilidad a 10 días.",
          en: "A stock fund had a 1.2% daily volatility (hypothetical figure). Compute its annual volatility using 252 trading days and its 10-day volatility.",
        },
        steps: [
          { es: "√252 ≈ 15.875.", en: "√252 ≈ 15.875." },
          { es: "Anual: 1.2% × 15.875 ≈ 19.05%.", en: "Annual: 1.2% × 15.875 ≈ 19.05%." },
          { es: "√10 ≈ 3.162; a 10 días: 1.2% × 3.162 ≈ 3.79%.", en: "√10 ≈ 3.162; 10-day: 1.2% × 3.162 ≈ 3.79%." },
          { es: "Supuesto clave: rendimientos diarios independientes y con la misma volatilidad.", en: "Key assumption: daily returns are independent and share the same volatility." },
        ],
        result: {
          es: "Volatilidad anual ≈ 19.05% y a 10 días ≈ 3.79%. Si hay agrupamiento de volatilidad, la regla es solo una aproximación.",
          en: "Annual volatility ≈ 19.05% and 10-day ≈ 3.79%. If there is volatility clustering, the rule is only an approximation.",
        },
      },
      {
        title: { es: "Actualizar la varianza con EWMA", en: "Updating variance with EWMA" },
        problem: {
          es: "Con λ = 0.94, la volatilidad diaria estimada ayer era 1% y el rendimiento de ayer fue 2%. Calcula la volatilidad estimada para hoy.",
          en: "With λ = 0.94, yesterday's estimated daily volatility was 1% and yesterday's return was 2%. Compute today's estimated volatility.",
        },
        steps: [
          { es: "Pasa todo a decimales: σ²_(t−1) = 0.01² = 0.0001; r²_(t−1) = 0.02² = 0.0004.", en: "Convert to decimals: σ²_(t−1) = 0.01² = 0.0001; r²_(t−1) = 0.02² = 0.0004." },
          { es: "Peso a la varianza anterior: 0.94 × 0.0001 = 0.000094.", en: "Weight on the previous variance: 0.94 × 0.0001 = 0.000094." },
          { es: "Peso al rendimiento reciente: 0.06 × 0.0004 = 0.000024.", en: "Weight on the recent return: 0.06 × 0.0004 = 0.000024." },
          { es: "σ²_t = 0.000094 + 0.000024 = 0.000118; σ_t = √0.000118 ≈ 0.01086.", en: "σ²_t = 0.000094 + 0.000024 = 0.000118; σ_t = √0.000118 ≈ 0.01086." },
        ],
        result: {
          es: "La volatilidad estimada sube de 1% a ≈ 1.09%: un día movido aumenta la estimación, pero solo un poco por el peso de 6%.",
          en: "Estimated volatility rises from 1% to ≈ 1.09%: a busy day raises the estimate, but only slightly because of the 6% weight.",
        },
      },
    ],
    keyPoints: [
      { es: "Volatilidad = desviación estándar de los rendimientos; mide la intensidad, no la dirección.", en: "Volatility = standard deviation of returns; it measures intensity, not direction." },
      { es: "Para cambiar de horizonte se multiplica por la raíz del tiempo (√252 para anualizar datos diarios).", en: "To change horizon multiply by the square root of time (√252 to annualize daily data)." },
      { es: "La volatilidad se agrupa en rachas; EWMA y GARCH dan más peso a lo reciente.", en: "Volatility clusters in streaks; EWMA and GARCH give more weight to recent data." },
      { es: "En GARCH(1,1), α + β es la persistencia y ω / (1 − α − β) la varianza de largo plazo.", en: "In GARCH(1,1), α + β is persistence and ω / (1 − α − β) the long-run variance." },
      { es: "La volatilidad implícita sale de precios de opciones y refleja expectativas del mercado.", en: "Implied volatility comes from option prices and reflects market expectations." },
    ],
    normativeNote: NOTE_QUANT,
    exerciseIds: ['CUA-08-E1', 'CUA-08-E2', 'CUA-08-E3', 'CUA-08-E4', 'CUA-08-E5', 'CUA-08-E6'],
  },

  // ───────────────────────────── CUA-09 ─────────────────────────────
  {
    id: 'CUA-09',
    level: 6,
    topicIds: ['CUA.9'],
    title: { es: "Teoría moderna de portafolios", en: "Modern portfolio theory" },
    summary: {
      es: "La teoría de Markowitz muestra que el riesgo de un portafolio depende de cómo se mueven juntos sus activos, que la diversificación reduce riesgo y que los portafolios eficientes dan el mayor rendimiento para cada nivel de riesgo.",
      en: "Markowitz's theory shows that a portfolio's risk depends on how its assets move together, that diversification reduces risk and that efficient portfolios give the highest return for each level of risk.",
    },
    minutes: 17,
    objectives: [
      { es: "Calcular el rendimiento esperado y la volatilidad de un portafolio de dos activos.", en: "Compute the expected return and volatility of a two-asset portfolio." },
      { es: "Explicar con covarianza y correlación por qué la diversificación reduce el riesgo.", en: "Explain with covariance and correlation why diversification reduces risk." },
      { es: "Interpretar la frontera eficiente y comparar portafolios con el índice de Sharpe.", en: "Interpret the efficient frontier and compare portfolios with the Sharpe ratio." },
    ],
    theory: [
      {
        heading: { es: "Rendimiento y riesgo de un portafolio", en: "Portfolio return and risk" },
        body: [
          {
            es: "Harry Markowitz propuso en 1952 una idea que cambió la inversión: no basta con ver cada activo por separado; hay que ver el **portafolio completo**. Cada inversión se describe con dos números: su **rendimiento esperado** (lo que en promedio esperas ganar) y su **riesgo**, medido con la volatilidad (desviación estándar).",
            en: "Harry Markowitz proposed in 1952 an idea that changed investing: it is not enough to look at each asset separately; you must look at the **whole portfolio**. Each investment is described by two numbers: its **expected return** (what you expect to earn on average) and its **risk**, measured by volatility (standard deviation).",
          },
          {
            es: "El rendimiento esperado del portafolio es sencillo: el **promedio ponderado** de los rendimientos de cada activo, usando como pesos (w) el porcentaje de tu dinero en cada uno. Si pones 60% en un fondo que espera 10% y 40% en otro que espera 6%, esperas 0.6 × 10% + 0.4 × 6% = 8.4%.",
            en: "The portfolio's expected return is simple: the **weighted average** of each asset's returns, using as weights (w) the percentage of your money in each. If you put 60% in a fund expecting 10% and 40% in another expecting 6%, you expect 0.6 × 10% + 0.4 × 6% = 8.4%.",
          },
          {
            es: "El riesgo, en cambio, **no** es el promedio ponderado de las volatilidades. Depende también de cómo se mueven juntos los activos. Mini ejemplo: con los mismos fondos (volatilidades de 20% y 10%), el promedio ponderado sería 16%, pero si su correlación es baja el portafolio real resulta menos riesgoso, como verás enseguida.",
            en: "Risk, however, is **not** the weighted average of volatilities. It also depends on how the assets move together. Mini example: with the same funds (volatilities of 20% and 10%), the weighted average would be 16%, but if their correlation is low the actual portfolio turns out less risky, as you will see next.",
          },
        ],
        formula: "E(R_p) = w_A·E(R_A) + w_B·E(R_B),   con w_A + w_B = 1",
      },
      {
        heading: { es: "Covarianza, correlación y diversificación", en: "Covariance, correlation and diversification" },
        body: [
          {
            es: "La **covarianza** mide si dos activos tienden a subir y bajar al mismo tiempo. La **correlación (ρ, rho)** es la covarianza \"estandarizada\": va de −1 a +1. Con ρ = +1 se mueven siempre en la misma dirección; con ρ = 0 no tienen relación lineal; con ρ = −1 uno sube exactamente cuando el otro baja. Se relacionan así: Cov(A,B) = ρ × σ_A × σ_B.",
            en: "**Covariance** measures whether two assets tend to rise and fall at the same time. **Correlation (ρ, rho)** is \"standardized\" covariance: it ranges from −1 to +1. With ρ = +1 they always move in the same direction; with ρ = 0 they have no linear relationship; with ρ = −1 one rises exactly when the other falls. They relate as: Cov(A,B) = ρ × σ_A × σ_B.",
          },
          {
            es: "La varianza de un portafolio de dos activos suma la varianza de cada uno, ponderada, **más un término de covarianza**. Mientras la correlación sea menor que +1, la volatilidad del portafolio queda **por debajo** del promedio ponderado: ese ahorro de riesgo es la **diversificación**. Con ρ = −1 incluso se puede llegar a riesgo cero.",
            en: "A two-asset portfolio's variance adds each asset's weighted variance **plus a covariance term**. As long as correlation is below +1, portfolio volatility stays **below** the weighted average: that risk saving is **diversification**. With ρ = −1 you can even reach zero risk.",
          },
          {
            es: "La diversificación elimina el **riesgo específico** (o diversificable) de cada empresa, como una huelga o un producto fallido, pero no el **riesgo sistemático**, el que afecta a todo el mercado, como una recesión o un alza general de tasas. Mini ejemplo: 60% en A (σ 20%) y 40% en B (σ 10%) con ρ = 0.2 dan una volatilidad de ≈ 13.4%, menor que el 16% del promedio ponderado.",
            en: "Diversification removes each company's **specific** (diversifiable) risk, such as a strike or a failed product, but not **systematic risk**, which affects the whole market, such as a recession or a general rise in rates. Mini example: 60% in A (σ 20%) and 40% in B (σ 10%) with ρ = 0.2 give a volatility of ≈ 13.4%, lower than the 16% weighted average.",
          },
        ],
        formula: "σ²_p = w_A²·σ_A² + w_B²·σ_B² + 2·w_A·w_B·ρ·σ_A·σ_B",
      },
      {
        heading: { es: "Frontera eficiente e índice de Sharpe", en: "Efficient frontier and Sharpe ratio" },
        body: [
          {
            es: "Si combinas los activos de todas las formas posibles y grafica cada combinación (riesgo en el eje horizontal, rendimiento en el vertical), obtienes una nube de puntos. Su borde superior izquierdo es la **frontera eficiente**: los portafolios que dan el **mayor rendimiento esperado para cada nivel de riesgo**. Un portafolio debajo de la frontera es **ineficiente**: existe otro con el mismo riesgo y más rendimiento.",
            en: "If you combine the assets in every possible way and plot each combination (risk on the horizontal axis, return on the vertical), you get a cloud of points. Its upper-left edge is the **efficient frontier**: the portfolios that give the **highest expected return for each level of risk**. A portfolio below the frontier is **inefficient**: another one exists with the same risk and more return.",
          },
          {
            es: "Al agregar un **activo libre de riesgo** (en la práctica, algo muy seguro y de corto plazo, como un instrumento gubernamental) aparece una línea recta que sale de la tasa libre de riesgo y toca la frontera en el **portafolio tangente**. Esa línea mide el rendimiento extra que obtienes por cada unidad de riesgo.",
            en: "When you add a **risk-free asset** (in practice, something very safe and short-term, such as a government instrument) a straight line appears that starts at the risk-free rate and touches the frontier at the **tangency portfolio**. That line measures the extra return you get per unit of risk.",
          },
          {
            es: "Esa pendiente es el **índice de Sharpe**: rendimiento esperado menos tasa libre de riesgo, dividido entre la volatilidad. Más alto es mejor. Mini ejemplo con tasa libre de riesgo de 3%: un portafolio con 9% y σ 12% tiene Sharpe (9 − 3)/12 = 0.50; otro con 11% y σ 18% tiene (11 − 3)/18 ≈ 0.44. El primero paga más por cada punto de riesgo.",
            en: "That slope is the **Sharpe ratio**: expected return minus the risk-free rate, divided by volatility. Higher is better. Mini example with a 3% risk-free rate: a portfolio with 9% and σ 12% has Sharpe (9 − 3)/12 = 0.50; another with 11% and σ 18% has (11 − 3)/18 ≈ 0.44. The first pays more per point of risk.",
          },
        ],
        formula: "Sharpe = (E(R_p) − r_f) / σ_p",
        bullets: [
          { es: "Frontera eficiente: máximo rendimiento para cada nivel de riesgo.", en: "Efficient frontier: maximum return for each level of risk." },
          { es: "Portafolio de mínima varianza: el punto de menor riesgo de la frontera.", en: "Minimum-variance portfolio: the lowest-risk point of the frontier." },
          { es: "Portafolio tangente: el de mayor índice de Sharpe.", en: "Tangency portfolio: the one with the highest Sharpe ratio." },
          { es: "Los insumos (rendimientos, volatilidades, correlaciones) son estimaciones, no certezas.", en: "The inputs (returns, volatilities, correlations) are estimates, not certainties." },
        ],
      },
    ],
    examples: [
      {
        title: { es: "Riesgo de un portafolio 60/40", en: "Risk of a 60/40 portfolio" },
        problem: {
          es: "Activo A: rendimiento esperado 10%, volatilidad 20%. Activo B: 6% y 10%. Correlación 0.2. Inviertes 60% en A y 40% en B (datos hipotéticos). Calcula rendimiento esperado y volatilidad del portafolio.",
          en: "Asset A: expected return 10%, volatility 20%. Asset B: 6% and 10%. Correlation 0.2. You invest 60% in A and 40% in B (hypothetical data). Compute the portfolio's expected return and volatility.",
        },
        steps: [
          { es: "Rendimiento: 0.6 × 10% + 0.4 × 6% = 6% + 2.4% = 8.4%.", en: "Return: 0.6 × 10% + 0.4 × 6% = 6% + 2.4% = 8.4%." },
          { es: "Varianzas ponderadas: 0.6² × 0.20² = 0.36 × 0.04 = 0.0144; 0.4² × 0.10² = 0.16 × 0.01 = 0.0016.", en: "Weighted variances: 0.6² × 0.20² = 0.36 × 0.04 = 0.0144; 0.4² × 0.10² = 0.16 × 0.01 = 0.0016." },
          { es: "Término de covarianza: 2 × 0.6 × 0.4 × 0.2 × 0.20 × 0.10 = 0.00192.", en: "Covariance term: 2 × 0.6 × 0.4 × 0.2 × 0.20 × 0.10 = 0.00192." },
          { es: "σ²_p = 0.0144 + 0.0016 + 0.00192 = 0.01792; σ_p = √0.01792 ≈ 0.1339.", en: "σ²_p = 0.0144 + 0.0016 + 0.00192 = 0.01792; σ_p = √0.01792 ≈ 0.1339." },
        ],
        result: {
          es: "Rendimiento esperado 8.4% con volatilidad ≈ 13.39%, menor que el 16% del promedio ponderado: es el beneficio de diversificar.",
          en: "Expected return 8.4% with volatility ≈ 13.39%, below the 16% weighted average: that is the benefit of diversifying.",
        },
      },
      {
        title: { es: "Comparar dos portafolios con Sharpe", en: "Comparing two portfolios with Sharpe" },
        problem: {
          es: "Con una tasa libre de riesgo de 3% (hipotética): el portafolio P1 espera 9% con volatilidad 12% y el P2 espera 11% con volatilidad 18%. ¿Cuál ofrece mejor rendimiento por unidad de riesgo?",
          en: "With a 3% risk-free rate (hypothetical): portfolio P1 expects 9% with 12% volatility and P2 expects 11% with 18% volatility. Which offers a better return per unit of risk?",
        },
        steps: [
          { es: "Sharpe P1 = (9% − 3%) / 12% = 6 / 12 = 0.50.", en: "Sharpe P1 = (9% − 3%) / 12% = 6 / 12 = 0.50." },
          { es: "Sharpe P2 = (11% − 3%) / 18% = 8 / 18 ≈ 0.44.", en: "Sharpe P2 = (11% − 3%) / 18% = 8 / 18 ≈ 0.44." },
          { es: "Compara: 0.50 > 0.44.", en: "Compare: 0.50 > 0.44." },
        ],
        result: {
          es: "P1 es más eficiente. Si quieres más rendimiento, en teoría conviene apalancar P1 en lugar de elegir P2.",
          en: "P1 is more efficient. If you want more return, in theory it is better to lever up P1 than to choose P2.",
        },
      },
    ],
    keyPoints: [
      { es: "El rendimiento esperado del portafolio es el promedio ponderado de los rendimientos.", en: "The portfolio's expected return is the weighted average of returns." },
      { es: "El riesgo del portafolio depende de las covarianzas; no es el promedio de las volatilidades.", en: "Portfolio risk depends on covariances; it is not the average of volatilities." },
      { es: "Con correlación menor que +1, diversificar reduce riesgo; con −1 se puede llegar a cero.", en: "With correlation below +1, diversifying reduces risk; with −1 it can reach zero." },
      { es: "La diversificación elimina el riesgo específico, no el sistemático.", en: "Diversification removes specific risk, not systematic risk." },
      { es: "La frontera eficiente da el máximo rendimiento por nivel de riesgo; el Sharpe mide rendimiento extra por unidad de riesgo.", en: "The efficient frontier gives maximum return per level of risk; Sharpe measures extra return per unit of risk." },
    ],
    normativeNote: NOTE_QUANT,
    exerciseIds: ['CUA-09-E1', 'CUA-09-E2', 'CUA-09-E3', 'CUA-09-E4', 'CUA-09-E5', 'CUA-09-E6'],
  },

  // ───────────────────────────── CUA-10 ─────────────────────────────
  {
    id: 'CUA-10',
    level: 6,
    topicIds: ['CUA.10'],
    title: { es: "Optimización financiera", en: "Financial optimization" },
    summary: {
      es: "Optimizar es elegir la mejor decisión posible respetando reglas: se define qué se decide, qué se quiere maximizar o minimizar y qué restricciones hay, y se resuelve con programación lineal o con optimización media-varianza.",
      en: "Optimizing means choosing the best possible decision while respecting rules: you define what is decided, what you want to maximize or minimize and which constraints apply, and solve it with linear programming or mean-variance optimization.",
    },
    minutes: 16,
    objectives: [
      { es: "Identificar variables de decisión, función objetivo y restricciones en un problema financiero.", en: "Identify decision variables, objective function and constraints in a financial problem." },
      { es: "Resolver un problema sencillo de programación lineal para asignar un presupuesto de inversión.", en: "Solve a simple linear programming problem to allocate an investment budget." },
      { es: "Calcular los pesos del portafolio de mínima varianza de dos activos.", en: "Compute the weights of the two-asset minimum-variance portfolio." },
      { es: "Reconocer las limitaciones prácticas de la optimización media-varianza.", en: "Recognize the practical limitations of mean-variance optimization." },
    ],
    theory: [
      {
        heading: { es: "Las piezas de un problema de optimización", en: "The pieces of an optimization problem" },
        body: [
          {
            es: "Optimizar es buscar **la mejor opción posible** dentro de lo permitido. Lo haces a diario: con tu quincena quieres cubrir gastos y ahorrar lo más posible, pero sin dejar de pagar renta. En finanzas se escribe de forma ordenada con tres piezas.",
            en: "Optimizing means looking for **the best possible option** within what is allowed. You do it daily: with your paycheck you want to cover expenses and save as much as possible, without skipping rent. In finance it is written in an orderly way with three pieces.",
          },
          {
            es: "Las **variables de decisión** son lo que tú eliges (cuánto poner en cada fondo). La **función objetivo** es lo que quieres maximizar o minimizar (rendimiento esperado, riesgo, costo). Las **restricciones** son las reglas que no puedes romper (invertir exactamente el 100%, no más de 30% en un solo activo, no vender en corto). Las combinaciones que cumplen todas las restricciones forman la **región factible**.",
            en: "**Decision variables** are what you choose (how much to put in each fund). The **objective function** is what you want to maximize or minimize (expected return, risk, cost). **Constraints** are the rules you cannot break (invest exactly 100%, no more than 30% in one asset, no short selling). The combinations that satisfy every constraint form the **feasible region**.",
          },
          {
            es: "Mini ejemplo: una tesorería con $1,000,000 decide cuánto poner en un bono y cuánto en un fondo (variables), quiere maximizar el rendimiento esperado (objetivo) y tiene la regla de no poner más de 40% en el fondo (restricción).",
            en: "Mini example: a treasury with $1,000,000 decides how much to put in a bond and how much in a fund (variables), wants to maximize expected return (objective) and has a rule of no more than 40% in the fund (constraint).",
          },
        ],
        bullets: [
          { es: "Variables de decisión: lo que eliges.", en: "Decision variables: what you choose." },
          { es: "Función objetivo: lo que maximizas o minimizas.", en: "Objective function: what you maximize or minimize." },
          { es: "Restricciones: las reglas que debes respetar.", en: "Constraints: the rules you must respect." },
          { es: "Región factible: todas las decisiones que cumplen las reglas.", en: "Feasible region: all decisions that satisfy the rules." },
        ],
      },
      {
        heading: { es: "Programación lineal", en: "Linear programming" },
        body: [
          {
            es: "Cuando el objetivo y las restricciones son **lineales** (sumas de variables multiplicadas por números, sin cuadrados ni productos entre variables) se habla de **programación lineal**. Es muy usada para asignar presupuestos, armar carteras de bonos con límites o planear flujos de efectivo al menor costo.",
            en: "When the objective and constraints are **linear** (sums of variables multiplied by numbers, without squares or products between variables) we speak of **linear programming**. It is widely used to allocate budgets, build bond portfolios with limits or plan cash flows at the lowest cost.",
          },
          {
            es: "Un resultado clave: si el problema tiene solución óptima, **siempre hay una en un vértice** (esquina) de la región factible. Por eso, en problemas pequeños, basta revisar las esquinas y quedarse con la mejor. En problemas grandes se usan algoritmos como el **método símplex**, que salta de vértice en vértice mejorando el objetivo.",
            en: "A key result: if the problem has an optimal solution, **there is always one at a vertex** (corner) of the feasible region. So in small problems it is enough to check the corners and keep the best. In large problems algorithms such as the **simplex method** are used, which jumps from vertex to vertex improving the objective.",
          },
          {
            es: "Mini ejemplo: con el bono a 6% y el fondo a 10% esperado (hipotéticos) y el límite de 40% en el fondo, las esquinas son 0% o 40% en el fondo. Con 40%: 0.10 × 400,000 + 0.06 × 600,000 = $76,000; con 0%: $60,000. El óptimo es llenar el límite del activo que más rinde.",
            en: "Mini example: with the bond at 6% and the fund at an expected 10% (hypothetical) and the 40% fund limit, the corners are 0% or 40% in the fund. With 40%: 0.10 × 400,000 + 0.06 × 600,000 = $76,000; with 0%: $60,000. The optimum is to fill the limit of the higher-yielding asset.",
          },
        ],
      },
      {
        heading: { es: "Optimización media-varianza", en: "Mean-variance optimization" },
        body: [
          {
            es: "La teoría de portafolios se convierte en un problema de optimización: **minimizar la varianza** del portafolio sujeto a obtener cierto rendimiento esperado, o **maximizar el rendimiento** sujeto a un riesgo máximo. Como la varianza tiene términos al cuadrado, ya no es lineal: es un problema **cuadrático**, que se resuelve con software.",
            en: "Portfolio theory turns into an optimization problem: **minimize portfolio variance** subject to achieving a given expected return, or **maximize return** subject to a maximum risk. Since variance has squared terms, it is no longer linear: it is a **quadratic** problem, solved with software.",
          },
          {
            es: "Para dos activos existe una fórmula directa del **portafolio de mínima varianza**. Si los activos no están correlacionados (covarianza 0), la fórmula se simplifica: el peso de A es σ_B² / (σ_A² + σ_B²); es decir, se pone más dinero en el activo menos volátil, pero sin abandonar el otro.",
            en: "For two assets there is a direct formula for the **minimum-variance portfolio**. If the assets are uncorrelated (covariance 0), the formula simplifies: A's weight is σ_B² / (σ_A² + σ_B²); that is, more money goes to the less volatile asset, without abandoning the other.",
          },
          {
            es: "Cuidado en la práctica: el optimizador es **muy sensible a los rendimientos esperados**, que se estiman con mucho error; un pequeño cambio en ellos puede mover mucho los pesos y concentrar todo en pocos activos. Por eso se agregan restricciones (sin ventas en corto, límites por activo) que vuelven el resultado más razonable. Agregar una restricción **nunca mejora** el valor óptimo: lo deja igual o lo empeora. Mini ejemplo: con σ_A = 20%, σ_B = 10% y ρ = 0.2, el portafolio de mínima varianza tiene ≈ 14.3% en A y ≈ 85.7% en B, con volatilidad ≈ 9.56%, menor que la de B sola.",
            en: "Be careful in practice: the optimizer is **very sensitive to expected returns**, which are estimated with large error; a small change in them can shift the weights a lot and concentrate everything in a few assets. That is why constraints are added (no short selling, per-asset limits) to make the result more reasonable. Adding a constraint **never improves** the optimal value: it leaves it equal or makes it worse. Mini example: with σ_A = 20%, σ_B = 10% and ρ = 0.2, the minimum-variance portfolio has ≈ 14.3% in A and ≈ 85.7% in B, with volatility ≈ 9.56%, lower than B alone.",
          },
        ],
        formula: "Mínima varianza: w_A = (σ_B² − Cov_AB) / (σ_A² + σ_B² − 2·Cov_AB),   w_B = 1 − w_A",
      },
    ],
    examples: [
      {
        title: { es: "Asignar la tesorería con programación lineal", en: "Allocating the treasury with linear programming" },
        problem: {
          es: "Una tesorería invierte $1,000,000 entre un bono (6% esperado) y un fondo (10% esperado), cifras hipotéticas. Regla: máximo 40% en el fondo y todo el dinero debe invertirse. Encuentra la asignación que maximiza el rendimiento esperado.",
          en: "A treasury invests $1,000,000 between a bond (6% expected) and a fund (10% expected), hypothetical figures. Rule: at most 40% in the fund and all money must be invested. Find the allocation that maximizes expected return.",
        },
        steps: [
          { es: "Variables: x = monto en el fondo; el bono recibe 1,000,000 − x.", en: "Variables: x = amount in the fund; the bond gets 1,000,000 − x." },
          { es: "Objetivo: maximizar 0.10x + 0.06(1,000,000 − x) = 60,000 + 0.04x.", en: "Objective: maximize 0.10x + 0.06(1,000,000 − x) = 60,000 + 0.04x." },
          { es: "Restricción: 0 ≤ x ≤ 400,000. Vértices: x = 0 y x = 400,000.", en: "Constraint: 0 ≤ x ≤ 400,000. Vertices: x = 0 and x = 400,000." },
          { es: "x = 0 → $60,000; x = 400,000 → 60,000 + 16,000 = $76,000.", en: "x = 0 → $60,000; x = 400,000 → 60,000 + 16,000 = $76,000." },
        ],
        result: {
          es: "Óptimo: $400,000 en el fondo y $600,000 en el bono, con $76,000 de rendimiento esperado. El óptimo quedó en un vértice, como predice la teoría.",
          en: "Optimum: $400,000 in the fund and $600,000 in the bond, with $76,000 of expected return. The optimum sits at a vertex, as theory predicts.",
        },
      },
      {
        title: { es: "Portafolio de mínima varianza", en: "Minimum-variance portfolio" },
        problem: {
          es: "Activo A con volatilidad 20% y activo B con 10%, correlación 0.2 (hipotéticos). Calcula los pesos del portafolio de mínima varianza y su volatilidad.",
          en: "Asset A with 20% volatility and asset B with 10%, correlation 0.2 (hypothetical). Compute the minimum-variance portfolio weights and its volatility.",
        },
        steps: [
          { es: "σ_A² = 0.04; σ_B² = 0.01; Cov = 0.2 × 0.20 × 0.10 = 0.004.", en: "σ_A² = 0.04; σ_B² = 0.01; Cov = 0.2 × 0.20 × 0.10 = 0.004." },
          { es: "w_A = (0.01 − 0.004) / (0.04 + 0.01 − 0.008) = 0.006 / 0.042 ≈ 0.1429; w_B ≈ 0.8571.", en: "w_A = (0.01 − 0.004) / (0.04 + 0.01 − 0.008) = 0.006 / 0.042 ≈ 0.1429; w_B ≈ 0.8571." },
          { es: "σ²_p = 0.1429² × 0.04 + 0.8571² × 0.01 + 2 × 0.1429 × 0.8571 × 0.004 ≈ 0.000816 + 0.007347 + 0.000980 ≈ 0.009143.", en: "σ²_p = 0.1429² × 0.04 + 0.8571² × 0.01 + 2 × 0.1429 × 0.8571 × 0.004 ≈ 0.000816 + 0.007347 + 0.000980 ≈ 0.009143." },
          { es: "σ_p = √0.009143 ≈ 0.0956.", en: "σ_p = √0.009143 ≈ 0.0956." },
        ],
        result: {
          es: "≈ 14.3% en A y ≈ 85.7% en B, con volatilidad ≈ 9.56%: agregar un poco del activo más riesgoso reduce el riesgo total por debajo del 10% de B.",
          en: "≈ 14.3% in A and ≈ 85.7% in B, with volatility ≈ 9.56%: adding a little of the riskier asset lowers total risk below B's 10%.",
        },
      },
    ],
    keyPoints: [
      { es: "Todo problema de optimización tiene variables de decisión, función objetivo y restricciones.", en: "Every optimization problem has decision variables, an objective function and constraints." },
      { es: "En programación lineal, si hay óptimo, hay uno en un vértice de la región factible.", en: "In linear programming, if an optimum exists, there is one at a vertex of the feasible region." },
      { es: "La optimización media-varianza es cuadrática y busca el menor riesgo para un rendimiento dado.", en: "Mean-variance optimization is quadratic and seeks the lowest risk for a given return." },
      { es: "El portafolio de mínima varianza puede tener menos riesgo que el activo menos volátil.", en: "The minimum-variance portfolio can have less risk than the least volatile asset." },
      { es: "Los resultados son sensibles a errores de estimación; las restricciones los vuelven más razonables.", en: "Results are sensitive to estimation errors; constraints make them more reasonable." },
    ],
    normativeNote: NOTE_QUANT,
    exerciseIds: ['CUA-10-E1', 'CUA-10-E2', 'CUA-10-E3', 'CUA-10-E4', 'CUA-10-E5', 'CUA-10-E6'],
  },

  // ───────────────────────────── CUA-11 ─────────────────────────────
  {
    id: 'CUA-11',
    level: 6,
    topicIds: ['CUA.11'],
    title: { es: "Value at Risk (VaR)", en: "Value at Risk (VaR)" },
    summary: {
      es: "El VaR resume en un solo monto la pérdida que no debería superarse con cierta confianza y en cierto horizonte; se calcula por método paramétrico, histórico o Monte Carlo y se complementa con el Expected Shortfall.",
      en: "VaR summarizes in a single amount the loss that should not be exceeded with a given confidence over a given horizon; it is computed by the parametric, historical or Monte Carlo method and complemented with Expected Shortfall.",
    },
    minutes: 17,
    objectives: [
      { es: "Interpretar correctamente un VaR con su nivel de confianza y horizonte.", en: "Correctly interpret a VaR with its confidence level and horizon." },
      { es: "Calcular el VaR paramétrico y escalarlo a otros horizontes.", en: "Compute parametric VaR and scale it to other horizons." },
      { es: "Obtener un VaR histórico y un Expected Shortfall a partir de pérdidas ordenadas.", en: "Obtain a historical VaR and an Expected Shortfall from sorted losses." },
      { es: "Explicar las limitaciones del VaR.", en: "Explain the limitations of VaR." },
    ],
    theory: [
      {
        heading: { es: "Qué es el VaR y cómo se lee", en: "What VaR is and how to read it" },
        body: [
          {
            es: "El **Value at Risk (VaR)**, o valor en riesgo, responde a una pregunta muy práctica: **¿cuánto podría perder, como máximo, en un día normal?** Se expresa con tres datos: un **monto**, un **horizonte** (1 día, 10 días) y un **nivel de confianza** (95%, 99%).",
            en: "**Value at Risk (VaR)** answers a very practical question: **how much could I lose, at most, on a normal day?** It is expressed with three pieces of data: an **amount**, a **horizon** (1 day, 10 days) and a **confidence level** (95%, 99%).",
          },
          {
            es: "Un VaR de 1 día al 99% de $2,000,000 se lee así: **en 99 de cada 100 días, la pérdida no debería superar $2,000,000**; en el día restante (1%), puede ser mayor. Ojo: el VaR **no** es la peor pérdida posible ni dice cuánto se pierde en ese 1% de días malos.",
            en: "A 1-day 99% VaR of $2,000,000 reads like this: **on 99 out of 100 days, the loss should not exceed $2,000,000**; on the remaining day (1%), it may be larger. Careful: VaR is **not** the worst possible loss and does not say how much is lost on that 1% of bad days.",
          },
          {
            es: "Bancos, casas de bolsa y fondos lo usan para fijar **límites de riesgo** a sus mesas de operación y para comunicar el riesgo en un solo número. Mini ejemplo: si una mesa tiene un límite de VaR diario de $500,000 y su VaR calculado sube a $650,000, debe reducir posiciones.",
            en: "Banks, brokerage firms and funds use it to set **risk limits** for their trading desks and to communicate risk in a single number. Mini example: if a desk has a daily VaR limit of $500,000 and its computed VaR rises to $650,000, it must reduce positions.",
          },
        ],
      },
      {
        heading: { es: "Tres formas de calcularlo", en: "Three ways to compute it" },
        body: [
          {
            es: "**Paramétrico (varianza-covarianza)**: supone que los rendimientos siguen una distribución normal con media cercana a cero. Basta multiplicar el valor del portafolio por su volatilidad y por un factor **z** de la normal: 1.645 para 95% y 2.326 para 99%. Es rápido, pero subestima el riesgo si las pérdidas extremas son más frecuentes que en la normal (\"colas pesadas\").",
            en: "**Parametric (variance-covariance)**: assumes returns follow a normal distribution with mean close to zero. Just multiply the portfolio value by its volatility and by a normal **z** factor: 1.645 for 95% and 2.326 for 99%. It is fast, but underestimates risk if extreme losses are more frequent than under the normal (\"fat tails\").",
          },
          {
            es: "**Histórico**: toma lo que habría ganado o perdido el portafolio actual en cada día del pasado, ordena las pérdidas de mayor a menor y lee el percentil. No supone ninguna distribución, pero asume que **el pasado reciente representa el futuro**. **Monte Carlo**: simula miles de escenarios aleatorios con un modelo; es el más flexible (sirve para opciones y relaciones no lineales), pero el más costoso de calcular.",
            en: "**Historical**: takes what the current portfolio would have gained or lost on each past day, sorts the losses from largest to smallest and reads the percentile. It assumes no distribution, but assumes **the recent past represents the future**. **Monte Carlo**: simulates thousands of random scenarios with a model; it is the most flexible (works for options and non-linear relationships), but the most costly to compute.",
          },
          {
            es: "Para pasar de 1 día a T días se suele usar la **raíz del tiempo**, con los mismos supuestos que en volatilidad. Mini ejemplo: un portafolio de $10,000,000 con volatilidad diaria de 1.5% tiene un VaR paramétrico al 95% de 10,000,000 × 1.645 × 0.015 = $246,750 a 1 día, y ≈ $780,292 a 10 días (× √10).",
            en: "To go from 1 day to T days the **square root of time** is commonly used, with the same assumptions as for volatility. Mini example: a $10,000,000 portfolio with 1.5% daily volatility has a 95% parametric VaR of 10,000,000 × 1.645 × 0.015 = $246,750 over 1 day, and ≈ $780,292 over 10 days (× √10).",
          },
        ],
        formula: "VaR paramétrico = V × z × σ   ·   VaR(T días) = VaR(1 día) × √T",
      },
      {
        heading: { es: "Limitaciones y Expected Shortfall", en: "Limitations and Expected Shortfall" },
        body: [
          {
            es: "El VaR tiene puntos ciegos: **no dice qué pasa más allá** del umbral, depende de supuestos (normalidad, que el pasado se repita) y puede no premiar la diversificación en algunos casos (técnicamente, no siempre es \"subaditivo\"). Dos portafolios pueden tener el mismo VaR y pérdidas extremas muy distintas.",
            en: "VaR has blind spots: it **does not say what happens beyond** the threshold, it depends on assumptions (normality, the past repeating) and in some cases may not reward diversification (technically, it is not always \"subadditive\"). Two portfolios can have the same VaR and very different extreme losses.",
          },
          {
            es: "El **Expected Shortfall (ES)**, también llamado CVaR, responde: **si cae un día malo, ¿cuánto pierdo en promedio?** Es el promedio de las pérdidas en la cola, más allá del VaR. Por eso siempre es igual o mayor que el VaR. El Comité de Basilea adoptó el ES para medir el riesgo de mercado en su marco más reciente para bancos.",
            en: "**Expected Shortfall (ES)**, also called CVaR, answers: **if a bad day comes, how much do I lose on average?** It is the average of the losses in the tail, beyond VaR. That is why it is always equal to or greater than VaR. The Basel Committee adopted ES to measure market risk in its most recent framework for banks.",
          },
          {
            es: "Además, todo modelo de VaR se revisa comparando sus predicciones con lo que pasó: si con un VaR al 99% hay muchas más de 1 excepción por cada 100 días, el modelo subestima el riesgo. Mini ejemplo de ES histórico: con 100 días y convención de tomar como VaR al 95% la 5.ª mayor pérdida, si las cinco peores fueron 91, 74, 68, 60 y 55 mil pesos, el VaR es $55,000 y el ES, su promedio, $69,600.",
            en: "In addition, every VaR model is reviewed by comparing its predictions with what happened: if a 99% VaR shows many more than 1 exception per 100 days, the model underestimates risk. Historical ES mini example: with 100 days and the convention of taking the 5th largest loss as the 95% VaR, if the five worst were 91, 74, 68, 60 and 55 thousand pesos, VaR is $55,000 and ES, their average, is $69,600.",
          },
        ],
        bullets: [
          { es: "VaR: umbral de pérdida a cierta confianza; no describe la cola.", en: "VaR: loss threshold at a given confidence; it does not describe the tail." },
          { es: "ES: pérdida promedio en la cola; siempre ≥ VaR.", en: "ES: average tail loss; always ≥ VaR." },
          { es: "Paramétrico: rápido, pero sensible al supuesto de normalidad.", en: "Parametric: fast, but sensitive to the normality assumption." },
          { es: "Histórico y Monte Carlo: más flexibles, pero dependen de los datos o del modelo de simulación.", en: "Historical and Monte Carlo: more flexible, but depend on the data or the simulation model." },
        ],
      },
    ],
    examples: [
      {
        title: { es: "VaR paramétrico a 1 y 10 días", en: "Parametric VaR over 1 and 10 days" },
        problem: {
          es: "Un portafolio vale $10,000,000 y su volatilidad diaria es 1.5% (hipotética). Calcula el VaR paramétrico al 95% a 1 día y a 10 días, suponiendo media cero.",
          en: "A portfolio is worth $10,000,000 and its daily volatility is 1.5% (hypothetical). Compute the 95% parametric VaR over 1 day and 10 days, assuming zero mean.",
        },
        steps: [
          { es: "z al 95% (una cola) = 1.645.", en: "z at 95% (one tail) = 1.645." },
          { es: "VaR 1 día = 10,000,000 × 1.645 × 0.015 = $246,750.", en: "1-day VaR = 10,000,000 × 1.645 × 0.015 = $246,750." },
          { es: "√10 ≈ 3.1623; VaR 10 días = 246,750 × 3.1623 ≈ $780,292.", en: "√10 ≈ 3.1623; 10-day VaR = 246,750 × 3.1623 ≈ $780,292." },
        ],
        result: {
          es: "En 95 de cada 100 días la pérdida no debería superar $246,750; en 10 días, ≈ $780,292, siempre que los supuestos se cumplan.",
          en: "On 95 out of 100 days the loss should not exceed $246,750; over 10 days, ≈ $780,292, as long as the assumptions hold.",
        },
      },
      {
        title: { es: "VaR histórico y Expected Shortfall", en: "Historical VaR and Expected Shortfall" },
        problem: {
          es: "Se simuló el portafolio actual con los últimos 100 días. Las seis mayores pérdidas fueron (en pesos): 91,000; 74,000; 68,000; 60,000; 55,000 y 49,000. Usa la convención: VaR al 95% = 5.ª mayor pérdida; ES = promedio de las 5 mayores.",
          en: "The current portfolio was simulated over the last 100 days. The six largest losses were (in pesos): 91,000; 74,000; 68,000; 60,000; 55,000 and 49,000. Use the convention: 95% VaR = 5th largest loss; ES = average of the 5 largest.",
        },
        steps: [
          { es: "5% de 100 días = 5 días en la cola.", en: "5% of 100 days = 5 days in the tail." },
          { es: "VaR 95% = 5.ª mayor pérdida = $55,000.", en: "95% VaR = 5th largest loss = $55,000." },
          { es: "ES = (91 + 74 + 68 + 60 + 55) / 5 = 348 / 5 = 69.6 mil pesos.", en: "ES = (91 + 74 + 68 + 60 + 55) / 5 = 348 / 5 = 69.6 thousand pesos." },
        ],
        result: {
          es: "VaR 95% = $55,000 y ES = $69,600. El ES muestra que, cuando el día es malo, la pérdida promedio es bastante mayor que el VaR. Otras convenciones (interpolar, usar la 6.ª pérdida) dan cifras algo distintas.",
          en: "95% VaR = $55,000 and ES = $69,600. ES shows that, when the day is bad, the average loss is quite a bit larger than VaR. Other conventions (interpolating, using the 6th loss) give somewhat different figures.",
        },
      },
    ],
    keyPoints: [
      { es: "El VaR necesita tres datos: monto, horizonte y nivel de confianza.", en: "VaR needs three pieces: amount, horizon and confidence level." },
      { es: "VaR 99% a 1 día: en 99 de cada 100 días la pérdida no debería superarlo.", en: "1-day 99% VaR: on 99 out of 100 days the loss should not exceed it." },
      { es: "Paramétrico = V × z × σ (z = 1.645 al 95%, 2.326 al 99%); se escala con √T.", en: "Parametric = V × z × σ (z = 1.645 at 95%, 2.326 at 99%); it scales with √T." },
      { es: "El VaR no dice cuánto se pierde más allá del umbral; el Expected Shortfall sí.", en: "VaR does not say how much is lost beyond the threshold; Expected Shortfall does." },
      { es: "Un buen modelo de VaR se revisa contando cuántas veces lo superaron las pérdidas reales.", en: "A good VaR model is reviewed by counting how often actual losses exceeded it." },
    ],
    normativeNote: NOTE_RISK_REG,
    exerciseIds: ['CUA-11-E1', 'CUA-11-E2', 'CUA-11-E3', 'CUA-11-E4', 'CUA-11-E5', 'CUA-11-E6'],
  },

  // ───────────────────────────── CUA-12 ─────────────────────────────
  {
    id: 'CUA-12',
    level: 6,
    topicIds: ['CUA.12'],
    title: { es: "Riesgo de mercado, crédito y liquidez", en: "Market, credit and liquidity risk" },
    summary: {
      es: "Las instituciones financieras enfrentan tres riesgos financieros centrales: perder por movimientos de precios (mercado), porque alguien no paga (crédito) o por no poder vender o fondearse a tiempo (liquidez); cada uno se mide con herramientas propias.",
      en: "Financial institutions face three core financial risks: losing from price moves (market), because someone does not pay (credit) or from not being able to sell or fund in time (liquidity); each one is measured with its own tools.",
    },
    minutes: 17,
    objectives: [
      { es: "Distinguir riesgo de mercado, de crédito y de liquidez con ejemplos reales.", en: "Distinguish market, credit and liquidity risk with real examples." },
      { es: "Estimar el efecto de un cambio de tasas en un portafolio de bonos con la duración modificada.", en: "Estimate the effect of a rate change on a bond portfolio with modified duration." },
      { es: "Calcular la pérdida esperada de un crédito con PD, LGD y EAD.", en: "Compute a loan's expected loss with PD, LGD and EAD." },
      { es: "Calcular el costo de liquidar una posición por el diferencial compra-venta.", en: "Compute the cost of liquidating a position due to the bid-ask spread." },
    ],
    theory: [
      {
        heading: { es: "Riesgo de mercado", en: "Market risk" },
        body: [
          {
            es: "El **riesgo de mercado** es la posibilidad de perder porque cambian los **precios del mercado**. Sus fuentes principales son cuatro: **tasas de interés**, **tipo de cambio**, **precios de acciones** y **precios de materias primas** (petróleo, maíz, metales). Ejemplo cotidiano: si tienes una deuda en dólares y el peso se deprecia, necesitas más pesos para pagarla.",
            en: "**Market risk** is the possibility of losing because **market prices** change. Its four main sources are **interest rates**, **exchange rates**, **stock prices** and **commodity prices** (oil, corn, metals). Everyday example: if you have a debt in dollars and the peso depreciates, you need more pesos to pay it.",
          },
          {
            es: "Para los bonos, el factor clave son las tasas: cuando las tasas **suben**, el precio de los bonos que ya existen **baja**. La **duración modificada** mide esa sensibilidad: indica en qué porcentaje aproximado cambia el precio por cada punto porcentual que se mueve la tasa. Es una aproximación lineal que funciona bien para cambios pequeños.",
            en: "For bonds, the key factor is rates: when rates **rise**, the price of existing bonds **falls**. **Modified duration** measures that sensitivity: it indicates by roughly what percentage the price changes for each percentage point the rate moves. It is a linear approximation that works well for small changes.",
          },
          {
            es: "El riesgo de mercado del portafolio completo se resume con herramientas como el **VaR** y se complementa con **pruebas de estrés** (¿qué pasa si el peso se deprecia 20% de golpe?). Mini ejemplo: un portafolio de bonos de $10,000,000 con duración modificada de 4 pierde aproximadamente 4 × 0.5% × 10,000,000 = $200,000 si las tasas suben medio punto.",
            en: "Market risk for the whole portfolio is summarized with tools such as **VaR** and complemented with **stress tests** (what happens if the peso suddenly depreciates 20%?). Mini example: a $10,000,000 bond portfolio with modified duration of 4 loses about 4 × 0.5% × 10,000,000 = $200,000 if rates rise half a point.",
          },
        ],
        formula: "ΔP ≈ −D_mod × Δy × P",
      },
      {
        heading: { es: "Riesgo de crédito", en: "Credit risk" },
        body: [
          {
            es: "El **riesgo de crédito** es la posibilidad de perder porque **alguien no te paga** lo que te debe: un cliente que deja de pagar su préstamo, una empresa que no paga su bono o la contraparte de un contrato que incumple. También hay pérdida si la calidad crediticia del deudor **empeora** (por ejemplo, le bajan la calificación) y su deuda vale menos en el mercado.",
            en: "**Credit risk** is the possibility of losing because **someone does not pay** what they owe you: a customer who stops paying a loan, a company that does not pay its bond or a counterparty that defaults on a contract. There is also a loss if the debtor's credit quality **worsens** (for example, its rating is cut) and its debt is worth less in the market.",
          },
          {
            es: "Se mide con tres piezas. **PD** (probabilidad de incumplimiento): qué tan probable es que no pague en un periodo. **LGD** (pérdida dado el incumplimiento): qué porcentaje se pierde si no paga, después de recuperar algo con garantías; LGD = 1 − tasa de recuperación. **EAD** (exposición al incumplimiento): cuánto te debe en el momento del impago. Multiplicadas dan la **pérdida esperada (EL)**.",
            en: "It is measured with three pieces. **PD** (probability of default): how likely it is that the borrower does not pay within a period. **LGD** (loss given default): what percentage is lost if it does not pay, after recovering something through collateral; LGD = 1 − recovery rate. **EAD** (exposure at default): how much is owed at the time of default. Multiplied, they give the **expected loss (EL)**.",
          },
          {
            es: "La pérdida esperada es un **costo normal del negocio**: se cubre con **reservas (estimaciones preventivas)** y con la tasa que se cobra. El **capital** sirve para absorber la pérdida **no esperada**, la que excede el promedio en un año malo. Concentrar créditos en pocos deudores o en un solo sector aumenta ese riesgo. Mini ejemplo: un crédito de $1,000,000 con PD 3% y recuperación 40% (LGD 60%) tiene EL = 0.03 × 0.60 × 1,000,000 = $18,000.",
            en: "Expected loss is a **normal cost of business**: it is covered with **loan-loss reserves (allowances)** and through the interest rate charged. **Capital** serves to absorb **unexpected** loss, the amount beyond the average in a bad year. Concentrating loans in a few borrowers or a single sector increases that risk. Mini example: a $1,000,000 loan with PD 3% and 40% recovery (LGD 60%) has EL = 0.03 × 0.60 × 1,000,000 = $18,000.",
          },
        ],
        formula: "EL = PD × LGD × EAD,   LGD = 1 − tasa de recuperación",
      },
      {
        heading: { es: "Riesgo de liquidez y cómo se conectan", en: "Liquidity risk and how they connect" },
        body: [
          {
            es: "El **riesgo de liquidez** tiene dos caras. La **liquidez de mercado** es no poder vender un activo rápido **sin castigar su precio**: un bono poco operado o un terreno. La **liquidez de fondeo** es no tener efectivo para **pagar obligaciones a tiempo**, aunque el negocio sea rentable: como una empresa con muchas ventas a crédito que no tiene dinero para la nómina del viernes.",
            en: "**Liquidity risk** has two faces. **Market liquidity** means not being able to sell an asset quickly **without hurting its price**: a thinly traded bond or a plot of land. **Funding liquidity** means not having cash to **pay obligations on time**, even if the business is profitable: like a company with many credit sales that lacks cash for Friday's payroll.",
          },
          {
            es: "Una medida sencilla de liquidez de mercado es el **diferencial compra-venta (bid-ask)**: la diferencia entre el precio al que alguien te compra (bid) y al que te vende (ask). Si valúas tu posición al precio medio, liquidarla de inmediato cuesta aproximadamente **medio diferencial por título**. Para la liquidez de fondeo se proyectan entradas y salidas de efectivo por plazos (**brechas de liquidez**) y se mantiene un colchón de activos líquidos.",
            en: "A simple measure of market liquidity is the **bid-ask spread**: the difference between the price at which someone buys from you (bid) and the price at which they sell to you (ask). If you value your position at the mid price, liquidating it immediately costs roughly **half the spread per unit**. For funding liquidity, cash inflows and outflows are projected by maturity (**liquidity gaps**) and a buffer of liquid assets is kept.",
          },
          {
            es: "Los tres riesgos **se contagian**: una caída fuerte de precios (mercado) provoca llamadas de margen que exigen efectivo (fondeo), obligan a vender activos poco líquidos con descuento (mercado de liquidez) y debilitan a deudores (crédito). Mini ejemplo: vender 20,000 acciones con precio medio de $50 y diferencial de $0.40 cuesta unos 20,000 × 0.20 = $4,000 frente al precio medio.",
            en: "The three risks **spread to each other**: a sharp price drop (market) triggers margin calls that demand cash (funding), forces the sale of illiquid assets at a discount (market liquidity) and weakens borrowers (credit). Mini example: selling 20,000 shares with a $50 mid price and a $0.40 spread costs about 20,000 × 0.20 = $4,000 versus the mid price.",
          },
        ],
        formula: "Costo de liquidación ≈ ½ × (ask − bid) × número de títulos",
        bullets: [
          { es: "Mercado: tasas, tipo de cambio, acciones y materias primas.", en: "Market: rates, exchange rates, stocks and commodities." },
          { es: "Crédito: impago o deterioro del deudor; EL = PD × LGD × EAD.", en: "Credit: default or deterioration of the debtor; EL = PD × LGD × EAD." },
          { es: "Liquidez de mercado: vender sin castigar el precio.", en: "Market liquidity: selling without hurting the price." },
          { es: "Liquidez de fondeo: tener efectivo para pagar a tiempo.", en: "Funding liquidity: having cash to pay on time." },
        ],
      },
    ],
    examples: [
      {
        title: { es: "Pérdida esperada de un crédito", en: "Expected loss on a loan" },
        problem: {
          es: "Un banco otorga un crédito empresarial con saldo de $1,000,000. Estima una PD anual de 3% y una tasa de recuperación de 40% gracias a la garantía (datos hipotéticos). Calcula LGD y pérdida esperada.",
          en: "A bank grants a business loan with a $1,000,000 balance. It estimates an annual PD of 3% and a 40% recovery rate thanks to collateral (hypothetical data). Compute LGD and expected loss.",
        },
        steps: [
          { es: "EAD = $1,000,000 (lo que se debe hoy).", en: "EAD = $1,000,000 (what is owed today)." },
          { es: "LGD = 1 − 0.40 = 0.60, es decir, 60%.", en: "LGD = 1 − 0.40 = 0.60, that is, 60%." },
          { es: "EL = 0.03 × 0.60 × 1,000,000 = $18,000.", en: "EL = 0.03 × 0.60 × 1,000,000 = $18,000." },
        ],
        result: {
          es: "La pérdida esperada es $18,000 al año: el banco debe cubrirla con reservas y con la tasa que cobra; el capital queda para pérdidas no esperadas.",
          en: "Expected loss is $18,000 per year: the bank should cover it with reserves and the rate it charges; capital is left for unexpected losses.",
        },
      },
      {
        title: { es: "Liquidar una posición con prisa", en: "Liquidating a position in a hurry" },
        problem: {
          es: "Un fondo debe vender hoy 20,000 acciones. El mejor precio de compra (bid) es $49.80 y el de venta (ask) es $50.20 (hipotéticos). Calcula el precio medio, el diferencial y el costo aproximado de liquidación frente al precio medio.",
          en: "A fund must sell 20,000 shares today. The best bid is $49.80 and the ask is $50.20 (hypothetical). Compute the mid price, the spread and the approximate liquidation cost versus the mid price.",
        },
        steps: [
          { es: "Precio medio = (49.80 + 50.20) / 2 = $50.00.", en: "Mid price = (49.80 + 50.20) / 2 = $50.00." },
          { es: "Diferencial = 50.20 − 49.80 = $0.40; medio diferencial = $0.20.", en: "Spread = 50.20 − 49.80 = $0.40; half spread = $0.20." },
          { es: "Costo ≈ 20,000 × 0.20 = $4,000.", en: "Cost ≈ 20,000 × 0.20 = $4,000." },
        ],
        result: {
          es: "Vender de inmediato cuesta unos $4,000 frente al valor a precio medio. En activos menos líquidos el diferencial es mayor, y una venta grande puede además mover el precio.",
          en: "Selling immediately costs about $4,000 versus the mid-price value. In less liquid assets the spread is wider, and a large sale may also move the price.",
        },
      },
    ],
    keyPoints: [
      { es: "Riesgo de mercado: pérdidas por cambios en tasas, tipo de cambio, acciones o materias primas.", en: "Market risk: losses from changes in rates, exchange rates, stocks or commodities." },
      { es: "La duración modificada aproxima cuánto cae un bono cuando sube la tasa: ΔP ≈ −D_mod × Δy × P.", en: "Modified duration approximates how much a bond falls when rates rise: ΔP ≈ −D_mod × Δy × P." },
      { es: "Riesgo de crédito: EL = PD × LGD × EAD; las reservas cubren la EL y el capital la pérdida no esperada.", en: "Credit risk: EL = PD × LGD × EAD; reserves cover EL and capital covers unexpected loss." },
      { es: "Liquidez de mercado (vender sin castigar el precio) y de fondeo (pagar a tiempo) son riesgos distintos.", en: "Market liquidity (selling without hurting the price) and funding liquidity (paying on time) are different risks." },
      { es: "Los tres riesgos se contagian entre sí en momentos de estrés.", en: "The three risks spread to each other in times of stress." },
    ],
    normativeNote: NOTE_RISK_REG,
    exerciseIds: ['CUA-12-E1', 'CUA-12-E2', 'CUA-12-E3', 'CUA-12-E4', 'CUA-12-E5', 'CUA-12-E6'],
  },
]

export const exercises: Exercise[] = [
  // ───────────────────────────── CUA-07 ─────────────────────────────
  {
    id: 'CUA-07-E1',
    level: 6,
    module: 'CUA-07',
    kind: 'mcq',
    flavor: 'concept',
    prompt: {
      es: "¿Por qué en finanzas cuantitativas se prefiere modelar rendimientos en lugar de precios?",
      en: "Why do quantitative finance practitioners prefer to model returns rather than prices?",
    },
    options: [
      { id: 'CUA-07-E1-a', text: { es: "Porque los precios suelen ser no estacionarios y los rendimientos se comportan de forma aproximadamente estacionaria", en: "Because prices are usually non-stationary and returns behave approximately as stationary" } },
      { id: 'CUA-07-E1-b', text: { es: "Porque los rendimientos siempre son positivos y los precios no", en: "Because returns are always positive and prices are not" } },
      { id: 'CUA-07-E1-c', text: { es: "Porque los rendimientos permiten predecir con exactitud el precio de mañana", en: "Because returns allow tomorrow's price to be predicted exactly" } },
      { id: 'CUA-07-E1-d', text: { es: "Porque los precios no se pueden graficar en el tiempo", en: "Because prices cannot be plotted over time" } },
    ],
    correctOptionId: 'CUA-07-E1-a',
    explanation: {
      es: "Los precios suelen comportarse como una caminata aleatoria (no estacionaria), mientras que los rendimientos tienen media y varianza más estables, que es lo que necesitan los modelos clásicos. Los rendimientos pueden ser negativos y no permiten predicciones exactas. Error común: creer que transformar a rendimientos elimina la incertidumbre; solo vuelve la serie modelable.",
      en: "Prices tend to behave like a random walk (non-stationary), while returns have a more stable mean and variance, which is what classic models need. Returns can be negative and do not allow exact predictions. Common mistake: believing that converting to returns removes uncertainty; it only makes the series modelable.",
    },
    difficulty: 1,
    points: 10,
    competency: 'financial-time-series',
  },
  {
    id: 'CUA-07-E2',
    level: 6,
    module: 'CUA-07',
    kind: 'numeric',
    flavor: 'concept',
    context: {
      es: "El precio de una acción pasa de $80.00 a $84.20 de un día a otro (precios hipotéticos).",
      en: "A stock's price goes from $80.00 to $84.20 from one day to the next (hypothetical prices).",
    },
    prompt: {
      es: "Calcula el rendimiento simple diario de la acción. Responde en porcentaje.",
      en: "Compute the stock's simple daily return. Answer as a percentage.",
    },
    answer: 5.25,
    unit: '%',
    decimals: 2,
    tolerance: { abs: 0.01 },
    explanation: {
      es: "r = (84.20 − 80.00) / 80.00 = 4.20 / 80 = 0.0525 = 5.25%. Error común: dividir entre el precio final (4.20 / 84.20 ≈ 4.99%); el rendimiento se mide contra el precio inicial.",
      en: "r = (84.20 − 80.00) / 80.00 = 4.20 / 80 = 0.0525 = 5.25%. Common mistake: dividing by the final price (4.20 / 84.20 ≈ 4.99%); the return is measured against the starting price.",
    },
    difficulty: 1,
    points: 10,
    competency: 'financial-time-series',
  },
  {
    id: 'CUA-07-E3',
    level: 6,
    module: 'CUA-07',
    kind: 'fields',
    flavor: 'case',
    context: {
      es: "Una analista modela la tasa de desempleo mensual (en %) de una región con un AR(1): X_t = 0.5 + 0.8·X_(t−1) + ε_t. El último dato observado es X = 4.0 (cifras hipotéticas).",
      en: "An analyst models a region's monthly unemployment rate (in %) with an AR(1): X_t = 0.5 + 0.8·X_(t−1) + ε_t. The last observed value is X = 4.0 (hypothetical figures).",
    },
    prompt: {
      es: "Calcula el pronóstico a un periodo, el pronóstico a dos periodos y la media de largo plazo del modelo.",
      en: "Compute the one-period forecast, the two-period forecast and the model's long-run mean.",
    },
    fields: [
      { id: 'f1', label: { es: "Pronóstico a 1 periodo", en: "1-period forecast" }, answer: 3.7, unit: 'none', tolerance: { abs: 0.005 } },
      { id: 'f2', label: { es: "Pronóstico a 2 periodos", en: "2-period forecast" }, answer: 3.46, unit: 'none', tolerance: { abs: 0.005 } },
      { id: 'f3', label: { es: "Media de largo plazo", en: "Long-run mean" }, answer: 2.5, unit: 'none', tolerance: { abs: 0.005 } },
    ],
    explanation: {
      es: "Con choque esperado cero: 0.5 + 0.8 × 4.0 = 3.7; luego 0.5 + 0.8 × 3.7 = 0.5 + 2.96 = 3.46. Media de largo plazo: 0.5 / (1 − 0.8) = 2.5. Los pronósticos bajan hacia 2.5 porque φ < 1. Error común: usar c / φ o c × φ para la media; la fórmula es c / (1 − φ).",
      en: "With zero expected shock: 0.5 + 0.8 × 4.0 = 3.7; then 0.5 + 0.8 × 3.7 = 0.5 + 2.96 = 3.46. Long-run mean: 0.5 / (1 − 0.8) = 2.5. Forecasts fall toward 2.5 because φ < 1. Common mistake: using c / φ or c × φ for the mean; the formula is c / (1 − φ).",
    },
    difficulty: 2,
    points: 15,
    competency: 'financial-time-series',
  },
  {
    id: 'CUA-07-E4',
    level: 6,
    module: 'CUA-07',
    kind: 'truefalse',
    flavor: 'concept',
    prompt: {
      es: "Una caminata aleatoria (precio de hoy = precio de ayer + un choque impredecible) es una serie estacionaria porque sus cambios son aleatorios.",
      en: "A random walk (today's price = yesterday's price + an unpredictable shock) is a stationary series because its changes are random.",
    },
    answer: false,
    explanation: {
      es: "Falso. En una caminata aleatoria los choques se acumulan: la varianza crece con el tiempo y la serie no regresa a un nivel fijo, así que no es estacionaria. Sus cambios (las diferencias) sí pueden ser estacionarios. Error común: confundir la serie con sus cambios.",
      en: "False. In a random walk shocks accumulate: variance grows over time and the series does not return to a fixed level, so it is not stationary. Its changes (the differences) can be stationary. Common mistake: confusing the series with its changes.",
    },
    difficulty: 1,
    points: 10,
    competency: 'financial-time-series',
  },
  {
    id: 'CUA-07-E5',
    level: 6,
    module: 'CUA-07',
    kind: 'classify',
    flavor: 'concept',
    prompt: {
      es: "Clasifica cada serie como estacionaria o no estacionaria.",
      en: "Classify each series as stationary or non-stationary.",
    },
    categories: [
      { id: 'CUA-07-E5-c1', label: { es: "Estacionaria", en: "Stationary" } },
      { id: 'CUA-07-E5-c2', label: { es: "No estacionaria", en: "Non-stationary" } },
    ],
    items: [
      { id: 'CUA-07-E5-i1', label: { es: "Ruido blanco: media cero, varianza constante y sin autocorrelación", en: "White noise: zero mean, constant variance and no autocorrelation" }, correctCategoryId: 'CUA-07-E5-c1' },
      { id: 'CUA-07-E5-i2', label: { es: "Un precio que sigue una caminata aleatoria", en: "A price that follows a random walk" }, correctCategoryId: 'CUA-07-E5-c2' },
      { id: 'CUA-07-E5-i3', label: { es: "Un AR(1) con φ = 0.5", en: "An AR(1) with φ = 0.5" }, correctCategoryId: 'CUA-07-E5-c1' },
      { id: 'CUA-07-E5-i4', label: { es: "Un AR(1) con φ = 1", en: "An AR(1) with φ = 1" }, correctCategoryId: 'CUA-07-E5-c2' },
      { id: 'CUA-07-E5-i5', label: { es: "Ventas que crecen cada año con una tendencia lineal", en: "Sales that grow each year along a linear trend" }, correctCategoryId: 'CUA-07-E5-c2' },
      { id: 'CUA-07-E5-i6', label: { es: "Un AR(1) con φ = −0.3", en: "An AR(1) with φ = −0.3" }, correctCategoryId: 'CUA-07-E5-c1' },
    ],
    explanation: {
      es: "Son estacionarios el ruido blanco y los AR(1) con |φ| < 1 (0.5 y −0.3), porque revierten a su media. No lo son la caminata aleatoria (equivale a un AR(1) con φ = 1) ni la serie con tendencia, cuya media cambia en el tiempo. Error común: pensar que un φ negativo vuelve inestable la serie; lo que importa es que |φ| sea menor que 1.",
      en: "White noise and AR(1) models with |φ| < 1 (0.5 and −0.3) are stationary because they revert to their mean. The random walk (equivalent to an AR(1) with φ = 1) and the trending series, whose mean changes over time, are not. Common mistake: thinking a negative φ makes the series unstable; what matters is that |φ| is below 1.",
    },
    difficulty: 2,
    points: 15,
    competency: 'financial-time-series',
  },
  {
    id: 'CUA-07-E6',
    level: 6,
    module: 'CUA-07',
    kind: 'numeric',
    flavor: 'case',
    context: {
      es: "Un índice accionario tuvo estos rendimientos logarítmicos diarios en tres días consecutivos: +1.2%, −0.5% y +0.8% (datos hipotéticos).",
      en: "A stock index had these daily log returns over three consecutive days: +1.2%, −0.5% and +0.8% (hypothetical data).",
    },
    prompt: {
      es: "¿Cuál fue el rendimiento logarítmico acumulado de los tres días? Responde en porcentaje.",
      en: "What was the cumulative log return over the three days? Answer as a percentage.",
    },
    answer: 1.5,
    unit: '%',
    decimals: 2,
    tolerance: { abs: 0.01 },
    explanation: {
      es: "Los rendimientos logarítmicos se suman en el tiempo: 1.2% − 0.5% + 0.8% = 1.5%. Error común: multiplicarlos o promediarlos (0.5%); el promedio es el rendimiento diario medio, no el acumulado.",
      en: "Log returns add over time: 1.2% − 0.5% + 0.8% = 1.5%. Common mistake: multiplying or averaging them (0.5%); the average is the mean daily return, not the cumulative one.",
    },
    difficulty: 1,
    points: 10,
    competency: 'financial-time-series',
  },

  // ───────────────────────────── CUA-08 ─────────────────────────────
  {
    id: 'CUA-08-E1',
    level: 6,
    module: 'CUA-08',
    kind: 'mcq',
    flavor: 'concept',
    prompt: {
      es: "¿Qué describe el fenómeno de agrupamiento de volatilidad (volatility clustering)?",
      en: "What does the volatility clustering phenomenon describe?",
    },
    options: [
      { id: 'CUA-08-E1-a', text: { es: "Que los precios siempre suben después de una racha de caídas", en: "That prices always rise after a streak of declines" } },
      { id: 'CUA-08-E1-b', text: { es: "Que a periodos de movimientos grandes suelen seguir más movimientos grandes, sin importar su dirección", en: "That periods of large moves tend to be followed by more large moves, regardless of their direction" } },
      { id: 'CUA-08-E1-c', text: { es: "Que todos los activos tienen la misma volatilidad en un mismo día", en: "That all assets have the same volatility on the same day" } },
      { id: 'CUA-08-E1-d', text: { es: "Que la volatilidad es constante y solo cambia el rendimiento promedio", en: "That volatility is constant and only the average return changes" } },
    ],
    correctOptionId: 'CUA-08-E1-b',
    explanation: {
      es: "El agrupamiento significa que la magnitud de los movimientos tiene memoria: tras días agitados vienen más días agitados, aunque no se sepa si serán alzas o bajas. Por eso la volatilidad no es constante y se usan EWMA o GARCH. Error común: confundirlo con una tendencia en la dirección del precio.",
      en: "Clustering means the size of moves has memory: turbulent days are followed by more turbulent days, even though you cannot tell whether they will be up or down. That is why volatility is not constant and EWMA or GARCH are used. Common mistake: confusing it with a trend in price direction.",
    },
    difficulty: 1,
    points: 10,
    competency: 'volatility-models',
  },
  {
    id: 'CUA-08-E2',
    level: 6,
    module: 'CUA-08',
    kind: 'numeric',
    flavor: 'concept',
    context: {
      es: "Un fondo tiene una volatilidad diaria de 1.5% (hipotética). Usa 252 días hábiles al año y supón rendimientos independientes.",
      en: "A fund has a 1.5% daily volatility (hypothetical). Use 252 trading days per year and assume independent returns.",
    },
    prompt: {
      es: "Calcula la volatilidad anualizada del fondo. Responde en porcentaje con dos decimales.",
      en: "Compute the fund's annualized volatility. Answer as a percentage with two decimals.",
    },
    answer: 23.81,
    unit: '%',
    decimals: 2,
    tolerance: { abs: 0.05 },
    explanation: {
      es: "σ anual = 1.5% × √252 ≈ 1.5% × 15.8745 ≈ 23.81%. Error común: multiplicar por 252 (378%); la que crece proporcionalmente con el tiempo es la varianza, no la volatilidad.",
      en: "Annual σ = 1.5% × √252 ≈ 1.5% × 15.8745 ≈ 23.81%. Common mistake: multiplying by 252 (378%); what grows in proportion to time is variance, not volatility.",
    },
    difficulty: 1,
    points: 10,
    competency: 'volatility-models',
  },
  {
    id: 'CUA-08-E3',
    level: 6,
    module: 'CUA-08',
    kind: 'fields',
    flavor: 'case',
    context: {
      es: "Una mesa de riesgos estimó un GARCH(1,1) para los rendimientos diarios del tipo de cambio: ω = 0.000003, α = 0.10 y β = 0.85. Ayer la varianza estimada fue 0.0001 (volatilidad de 1%) y el rendimiento fue de 2% (parámetros hipotéticos).",
      en: "A risk desk estimated a GARCH(1,1) for the exchange rate's daily returns: ω = 0.000003, α = 0.10 and β = 0.85. Yesterday the estimated variance was 0.0001 (1% volatility) and the return was 2% (hypothetical parameters).",
    },
    prompt: {
      es: "Calcula la persistencia del modelo, la volatilidad diaria estimada para hoy (en %) y la volatilidad diaria de largo plazo (en %).",
      en: "Compute the model's persistence, today's estimated daily volatility (in %) and the long-run daily volatility (in %).",
    },
    fields: [
      { id: 'f1', label: { es: "Persistencia (α + β)", en: "Persistence (α + β)" }, answer: 0.95, unit: 'none', tolerance: { abs: 0.001 } },
      { id: 'f2', label: { es: "Volatilidad de hoy (%)", en: "Today's volatility (%)" }, answer: 1.13, unit: '%', tolerance: { abs: 0.01 } },
      { id: 'f3', label: { es: "Volatilidad de largo plazo (%)", en: "Long-run volatility (%)" }, answer: 0.77, unit: '%', tolerance: { abs: 0.01 } },
    ],
    explanation: {
      es: "Persistencia = 0.10 + 0.85 = 0.95. Varianza de hoy = 0.000003 + 0.10 × 0.0004 + 0.85 × 0.0001 = 0.000003 + 0.00004 + 0.000085 = 0.000128; σ = √0.000128 ≈ 0.0113 = 1.13%. Varianza de largo plazo = 0.000003 / (1 − 0.95) = 0.00006; σ = √0.00006 ≈ 0.0077 = 0.77%. Error común: usar el rendimiento sin elevarlo al cuadrado (0.02 en vez de 0.0004) o reportar la varianza en lugar de su raíz.",
      en: "Persistence = 0.10 + 0.85 = 0.95. Today's variance = 0.000003 + 0.10 × 0.0004 + 0.85 × 0.0001 = 0.000003 + 0.00004 + 0.000085 = 0.000128; σ = √0.000128 ≈ 0.0113 = 1.13%. Long-run variance = 0.000003 / (1 − 0.95) = 0.00006; σ = √0.00006 ≈ 0.0077 = 0.77%. Common mistake: using the return without squaring it (0.02 instead of 0.0004) or reporting variance instead of its square root.",
    },
    difficulty: 2,
    points: 20,
    competency: 'volatility-models',
  },
  {
    id: 'CUA-08-E4',
    level: 6,
    module: 'CUA-08',
    kind: 'truefalse',
    flavor: 'concept',
    prompt: {
      es: "En un modelo EWMA, usar un λ más alto (por ejemplo 0.97 en lugar de 0.90) hace que la volatilidad estimada reaccione más rápido a las noticias del día.",
      en: "In an EWMA model, using a higher λ (for example 0.97 instead of 0.90) makes the estimated volatility react faster to the day's news.",
    },
    answer: false,
    explanation: {
      es: "Falso. λ es el peso de la varianza anterior; un λ más alto da más memoria y deja solo (1 − λ) al rendimiento reciente, así que la estimación reacciona más lento. Error común: pensar que λ es el peso de la información nueva.",
      en: "False. λ is the weight on the previous variance; a higher λ gives more memory and leaves only (1 − λ) for the recent return, so the estimate reacts more slowly. Common mistake: thinking λ is the weight on new information.",
    },
    difficulty: 1,
    points: 10,
    competency: 'volatility-models',
  },
  {
    id: 'CUA-08-E5',
    level: 6,
    module: 'CUA-08',
    kind: 'formula',
    flavor: 'concept',
    prompt: {
      es: "Completa la ecuación de varianza de un GARCH(1,1).",
      en: "Complete the variance equation of a GARCH(1,1).",
    },
    template: '{{b1}} = ω + α · {{b2}} + β · {{b3}}',
    blanks: [
      {
        id: 'b1',
        options: [
          { id: 'CUA-08-E5-b1-a', text: { es: "σ²_t (varianza de hoy)", en: "σ²_t (today's variance)" } },
          { id: 'CUA-08-E5-b1-b', text: { es: "r_t (rendimiento de hoy)", en: "r_t (today's return)" } },
          { id: 'CUA-08-E5-b1-c', text: { es: "P_t (precio de hoy)", en: "P_t (today's price)" } },
        ],
        correctOptionId: 'CUA-08-E5-b1-a',
      },
      {
        id: 'b2',
        options: [
          { id: 'CUA-08-E5-b2-a', text: { es: "σ_(t−1) (volatilidad de ayer)", en: "σ_(t−1) (yesterday's volatility)" } },
          { id: 'CUA-08-E5-b2-b', text: { es: "r²_(t−1) (rendimiento de ayer al cuadrado)", en: "r²_(t−1) (yesterday's squared return)" } },
          { id: 'CUA-08-E5-b2-c', text: { es: "P_(t−1) (precio de ayer)", en: "P_(t−1) (yesterday's price)" } },
        ],
        correctOptionId: 'CUA-08-E5-b2-b',
      },
      {
        id: 'b3',
        options: [
          { id: 'CUA-08-E5-b3-a', text: { es: "r_(t−1) (rendimiento de ayer)", en: "r_(t−1) (yesterday's return)" } },
          { id: 'CUA-08-E5-b3-b', text: { es: "μ (rendimiento promedio)", en: "μ (average return)" } },
          { id: 'CUA-08-E5-b3-c', text: { es: "σ²_(t−1) (varianza de ayer)", en: "σ²_(t−1) (yesterday's variance)" } },
        ],
        correctOptionId: 'CUA-08-E5-b3-c',
      },
    ],
    explanation: {
      es: "σ²_t = ω + α·r²_(t−1) + β·σ²_(t−1): la varianza de hoy combina una constante, la reacción al último rendimiento al cuadrado (las noticias) y la memoria de la varianza anterior. Error común: usar el rendimiento sin elevar al cuadrado, que podría dar varianzas negativas.",
      en: "σ²_t = ω + α·r²_(t−1) + β·σ²_(t−1): today's variance combines a constant, the reaction to the latest squared return (the news) and the memory of the previous variance. Common mistake: using the return without squaring it, which could produce negative variances.",
    },
    difficulty: 1,
    points: 10,
    competency: 'volatility-models',
  },
  {
    id: 'CUA-08-E6',
    level: 6,
    module: 'CUA-08',
    kind: 'multi',
    flavor: 'interpret',
    prompt: {
      es: "Selecciona TODAS las afirmaciones correctas sobre la volatilidad histórica, la implícita y su escalamiento.",
      en: "Select ALL the correct statements about historical volatility, implied volatility and their scaling.",
    },
    options: [
      { id: 'CUA-08-E6-a', text: { es: "La volatilidad histórica se calcula con rendimientos observados en el pasado", en: "Historical volatility is computed from returns observed in the past" } },
      { id: 'CUA-08-E6-b', text: { es: "La volatilidad implícita se obtiene a partir del precio de mercado de una opción", en: "Implied volatility is obtained from an option's market price" } },
      { id: 'CUA-08-E6-c', text: { es: "Una volatilidad implícita alta garantiza que el precio subirá", en: "A high implied volatility guarantees that the price will rise" } },
      { id: 'CUA-08-E6-d', text: { es: "Escalar con la raíz del tiempo supone rendimientos independientes de un día a otro", en: "Scaling with the square root of time assumes returns are independent from one day to the next" } },
    ],
    correctOptionIds: ['CUA-08-E6-a', 'CUA-08-E6-b', 'CUA-08-E6-d'],
    explanation: {
      es: "La histórica mira datos pasados, la implícita se despeja del precio de opciones y la regla de la raíz del tiempo requiere independencia. La volatilidad mide intensidad, no dirección: una implícita alta indica que el mercado espera movimientos fuertes, hacia arriba o hacia abajo. Error común: leer la volatilidad como señal de alza.",
      en: "Historical looks at past data, implied is backed out from option prices and the square-root-of-time rule requires independence. Volatility measures intensity, not direction: high implied volatility means the market expects strong moves, up or down. Common mistake: reading volatility as a signal of a rise.",
    },
    difficulty: 2,
    points: 15,
    competency: 'volatility-models',
  },

  // ───────────────────────────── CUA-09 ─────────────────────────────
  {
    id: 'CUA-09-E1',
    level: 6,
    module: 'CUA-09',
    kind: 'mcq',
    flavor: 'concept',
    prompt: {
      es: "En la teoría de Markowitz, ¿qué representa la frontera eficiente?",
      en: "In Markowitz's theory, what does the efficient frontier represent?",
    },
    options: [
      { id: 'CUA-09-E1-a', text: { es: "Los portafolios con el rendimiento más alto posible sin importar el riesgo", en: "The portfolios with the highest possible return regardless of risk" } },
      { id: 'CUA-09-E1-b', text: { es: "Los portafolios formados por un solo activo", en: "The portfolios made of a single asset" } },
      { id: 'CUA-09-E1-c', text: { es: "Los portafolios que ofrecen el mayor rendimiento esperado para cada nivel de riesgo", en: "The portfolios that offer the highest expected return for each level of risk" } },
      { id: 'CUA-09-E1-d', text: { es: "Los portafolios que nunca pierden dinero", en: "The portfolios that never lose money" } },
    ],
    correctOptionId: 'CUA-09-E1-c',
    explanation: {
      es: "La frontera eficiente es el borde superior de todas las combinaciones posibles: para cada nivel de riesgo, el mayor rendimiento esperado (o, para cada rendimiento, el menor riesgo). Cualquier portafolio debajo es ineficiente. Error común: pensar que eficiente significa sin riesgo o con el máximo rendimiento absoluto.",
      en: "The efficient frontier is the upper edge of all possible combinations: for each level of risk, the highest expected return (or, for each return, the lowest risk). Any portfolio below it is inefficient. Common mistake: thinking efficient means risk-free or the absolute maximum return.",
    },
    difficulty: 1,
    points: 10,
    competency: 'modern-portfolio-theory',
  },
  {
    id: 'CUA-09-E2',
    level: 6,
    module: 'CUA-09',
    kind: 'fields',
    flavor: 'case',
    context: {
      es: "Mariana arma un portafolio con 50% en un fondo de acciones (rendimiento esperado 12%, volatilidad 25%) y 50% en un fondo de deuda (rendimiento esperado 5%, volatilidad 10%). La correlación entre ambos es 0 (datos hipotéticos).",
      en: "Mariana builds a portfolio with 50% in a stock fund (expected return 12%, volatility 25%) and 50% in a bond fund (expected return 5%, volatility 10%). The correlation between them is 0 (hypothetical data).",
    },
    prompt: {
      es: "Calcula el rendimiento esperado y la volatilidad del portafolio de Mariana, en porcentaje.",
      en: "Compute the expected return and volatility of Mariana's portfolio, as percentages.",
    },
    fields: [
      { id: 'f1', label: { es: "Rendimiento esperado (%)", en: "Expected return (%)" }, answer: 8.5, unit: '%', tolerance: { abs: 0.01 } },
      { id: 'f2', label: { es: "Volatilidad del portafolio (%)", en: "Portfolio volatility (%)" }, answer: 13.46, unit: '%', tolerance: { abs: 0.02 } },
    ],
    explanation: {
      es: "Rendimiento: 0.5 × 12% + 0.5 × 5% = 8.5%. Varianza: 0.25 × 0.0625 + 0.25 × 0.01 + 0 = 0.015625 + 0.0025 = 0.018125; volatilidad = √0.018125 ≈ 13.46%. Error común: promediar las volatilidades (17.5%); con correlación 0 el término de covarianza desaparece y el riesgo baja.",
      en: "Return: 0.5 × 12% + 0.5 × 5% = 8.5%. Variance: 0.25 × 0.0625 + 0.25 × 0.01 + 0 = 0.015625 + 0.0025 = 0.018125; volatility = √0.018125 ≈ 13.46%. Common mistake: averaging the volatilities (17.5%); with zero correlation the covariance term vanishes and risk falls.",
    },
    difficulty: 2,
    points: 20,
    competency: 'modern-portfolio-theory',
  },
  {
    id: 'CUA-09-E3',
    level: 6,
    module: 'CUA-09',
    kind: 'numeric',
    flavor: 'concept',
    context: {
      es: "Un portafolio tiene rendimiento esperado de 10% y volatilidad de 15%. La tasa libre de riesgo es 4% (cifras hipotéticas).",
      en: "A portfolio has a 10% expected return and 15% volatility. The risk-free rate is 4% (hypothetical figures).",
    },
    prompt: {
      es: "Calcula el índice de Sharpe del portafolio.",
      en: "Compute the portfolio's Sharpe ratio.",
    },
    answer: 0.4,
    unit: 'none',
    decimals: 2,
    tolerance: { abs: 0.005 },
    explanation: {
      es: "Sharpe = (10% − 4%) / 15% = 6 / 15 = 0.40. Error común: dividir el rendimiento total entre la volatilidad (10 / 15 ≈ 0.67) sin restar la tasa libre de riesgo; el Sharpe mide solo el rendimiento extra por asumir riesgo.",
      en: "Sharpe = (10% − 4%) / 15% = 6 / 15 = 0.40. Common mistake: dividing the total return by volatility (10 / 15 ≈ 0.67) without subtracting the risk-free rate; Sharpe measures only the extra return for bearing risk.",
    },
    difficulty: 1,
    points: 10,
    competency: 'modern-portfolio-theory',
  },
  {
    id: 'CUA-09-E4',
    level: 6,
    module: 'CUA-09',
    kind: 'truefalse',
    flavor: 'concept',
    prompt: {
      es: "Con dos activos riesgosos cuya correlación es perfectamente negativa (−1), es posible armar un portafolio con riesgo cero.",
      en: "With two risky assets whose correlation is perfectly negative (−1), it is possible to build a zero-risk portfolio.",
    },
    answer: true,
    explanation: {
      es: "Verdadero. Con ρ = −1 los activos siempre se mueven en sentidos opuestos y en proporción fija; eligiendo bien los pesos, las ganancias de uno cancelan exactamente las pérdidas del otro y la varianza del portafolio es cero. Error común: pensar que la diversificación nunca puede eliminar todo el riesgo; en la práctica es raro encontrar ρ = −1, pero en teoría sí es posible.",
      en: "True. With ρ = −1 the assets always move in opposite directions and in fixed proportion; by choosing the weights well, one's gains exactly offset the other's losses and portfolio variance is zero. Common mistake: thinking diversification can never remove all risk; in practice ρ = −1 is rare, but in theory it is possible.",
    },
    difficulty: 2,
    points: 15,
    competency: 'modern-portfolio-theory',
  },
  {
    id: 'CUA-09-E5',
    level: 6,
    module: 'CUA-09',
    kind: 'classify',
    flavor: 'concept',
    prompt: {
      es: "Clasifica cada fuente de riesgo según si se puede reducir diversificando o no.",
      en: "Classify each source of risk by whether it can be reduced through diversification.",
    },
    categories: [
      { id: 'CUA-09-E5-c1', label: { es: "Riesgo específico (diversificable)", en: "Specific risk (diversifiable)" } },
      { id: 'CUA-09-E5-c2', label: { es: "Riesgo sistemático (no diversificable)", en: "Systematic risk (non-diversifiable)" } },
    ],
    items: [
      { id: 'CUA-09-E5-i1', label: { es: "Una huelga en la planta de una empresa", en: "A strike at one company's plant" }, correctCategoryId: 'CUA-09-E5-c1' },
      { id: 'CUA-09-E5-i2', label: { es: "Un alza general de las tasas de interés", en: "A general rise in interest rates" }, correctCategoryId: 'CUA-09-E5-c2' },
      { id: 'CUA-09-E5-i3', label: { es: "Una recesión económica en todo el país", en: "A nationwide economic recession" }, correctCategoryId: 'CUA-09-E5-c2' },
      { id: 'CUA-09-E5-i4', label: { es: "Un fraude descubierto en la contabilidad de una compañía", en: "Fraud discovered in one company's accounts" }, correctCategoryId: 'CUA-09-E5-c1' },
      { id: 'CUA-09-E5-i5', label: { es: "El retiro del mercado de un producto defectuoso de una marca", en: "The recall of one brand's defective product" }, correctCategoryId: 'CUA-09-E5-c1' },
      { id: 'CUA-09-E5-i6', label: { es: "Un aumento generalizado de la inflación", en: "A broad increase in inflation" }, correctCategoryId: 'CUA-09-E5-c2' },
    ],
    explanation: {
      es: "Los eventos de una sola empresa (huelga, fraude, retiro de producto) se compensan al tener muchas empresas: son diversificables. Las tasas, la recesión y la inflación afectan a casi todos los activos a la vez: son sistemáticos y la diversificación no los elimina. Error común: creer que tener muchas acciones protege de una recesión.",
      en: "Single-company events (strike, fraud, product recall) offset each other when you hold many companies: they are diversifiable. Rates, recession and inflation affect almost all assets at once: they are systematic and diversification does not remove them. Common mistake: believing that holding many stocks protects against a recession.",
    },
    difficulty: 1,
    points: 10,
    competency: 'modern-portfolio-theory',
  },
  {
    id: 'CUA-09-E6',
    level: 6,
    module: 'CUA-09',
    kind: 'numeric',
    flavor: 'concept',
    context: {
      es: "El activo A tiene volatilidad de 20% y el activo B de 30%. Su correlación es 0.5 (datos hipotéticos).",
      en: "Asset A has 20% volatility and asset B has 30%. Their correlation is 0.5 (hypothetical data).",
    },
    prompt: {
      es: "Calcula la covarianza entre A y B, expresada en decimal (por ejemplo, 0.0125).",
      en: "Compute the covariance between A and B, expressed as a decimal (for example, 0.0125).",
    },
    answer: 0.03,
    unit: 'none',
    decimals: 4,
    tolerance: { abs: 0.0001 },
    explanation: {
      es: "Cov(A,B) = ρ × σ_A × σ_B = 0.5 × 0.20 × 0.30 = 0.03. Error común: usar las volatilidades en porcentaje (0.5 × 20 × 30 = 300) o sumar en lugar de multiplicar; trabaja siempre en decimales.",
      en: "Cov(A,B) = ρ × σ_A × σ_B = 0.5 × 0.20 × 0.30 = 0.03. Common mistake: using volatilities in percent (0.5 × 20 × 30 = 300) or adding instead of multiplying; always work in decimals.",
    },
    difficulty: 1,
    points: 10,
    competency: 'modern-portfolio-theory',
  },

  // ───────────────────────────── CUA-10 ─────────────────────────────
  {
    id: 'CUA-10-E1',
    level: 6,
    module: 'CUA-10',
    kind: 'classify',
    flavor: 'concept',
    prompt: {
      es: "Clasifica cada elemento de un problema de optimización de portafolios.",
      en: "Classify each element of a portfolio optimization problem.",
    },
    categories: [
      { id: 'CUA-10-E1-c1', label: { es: "Variable de decisión", en: "Decision variable" } },
      { id: 'CUA-10-E1-c2', label: { es: "Función objetivo", en: "Objective function" } },
      { id: 'CUA-10-E1-c3', label: { es: "Restricción", en: "Constraint" } },
    ],
    items: [
      { id: 'CUA-10-E1-i1', label: { es: "Porcentaje del dinero que se invierte en cada fondo", en: "Percentage of money invested in each fund" }, correctCategoryId: 'CUA-10-E1-c1' },
      { id: 'CUA-10-E1-i2', label: { es: "Maximizar el rendimiento esperado del portafolio", en: "Maximize the portfolio's expected return" }, correctCategoryId: 'CUA-10-E1-c2' },
      { id: 'CUA-10-E1-i3', label: { es: "La suma de los pesos debe ser 100%", en: "The weights must add up to 100%" }, correctCategoryId: 'CUA-10-E1-c3' },
      { id: 'CUA-10-E1-i4', label: { es: "No invertir más de 30% en un solo activo", en: "Do not invest more than 30% in a single asset" }, correctCategoryId: 'CUA-10-E1-c3' },
      { id: 'CUA-10-E1-i5', label: { es: "Minimizar la varianza del portafolio", en: "Minimize the portfolio's variance" }, correctCategoryId: 'CUA-10-E1-c2' },
      { id: 'CUA-10-E1-i6', label: { es: "Monto que se asigna a cada sector económico", en: "Amount allocated to each economic sector" }, correctCategoryId: 'CUA-10-E1-c1' },
    ],
    explanation: {
      es: "Variables: lo que eliges (pesos o montos por fondo o sector). Objetivo: lo que maximizas o minimizas (rendimiento, varianza). Restricciones: reglas que se deben cumplir (sumar 100%, límite de 30%). Error común: confundir una restricción de riesgo o de límite con el objetivo; el objetivo es una sola cantidad a optimizar.",
      en: "Variables: what you choose (weights or amounts per fund or sector). Objective: what you maximize or minimize (return, variance). Constraints: rules that must hold (add up to 100%, 30% limit). Common mistake: confusing a risk or limit constraint with the objective; the objective is a single quantity to optimize.",
    },
    difficulty: 1,
    points: 10,
    competency: 'financial-optimization',
  },
  {
    id: 'CUA-10-E2',
    level: 6,
    module: 'CUA-10',
    kind: 'numeric',
    flavor: 'case',
    context: {
      es: "Una cooperativa invierte $500,000 entre un instrumento de deuda con rendimiento esperado de 7% anual y un fondo de acciones con 11% esperado (cifras hipotéticas). Su política exige invertir todo el dinero y no poner más de 35% en el fondo de acciones.",
      en: "A cooperative invests $500,000 between a debt instrument with a 7% expected annual return and a stock fund with 11% expected (hypothetical figures). Its policy requires investing all the money and putting no more than 35% in the stock fund.",
    },
    prompt: {
      es: "¿Cuál es el rendimiento esperado anual máximo, en pesos, que puede obtener respetando su política?",
      en: "What is the maximum expected annual return, in pesos, it can obtain while respecting its policy?",
    },
    answer: 42000,
    unit: 'MXN',
    decimals: 0,
    tolerance: { abs: 1 },
    explanation: {
      es: "Problema lineal: el óptimo está en un vértice. Como el fondo rinde más, se llena su límite: 35% × 500,000 = $175,000 en el fondo y $325,000 en deuda. Rendimiento: 0.11 × 175,000 + 0.07 × 325,000 = 19,250 + 22,750 = $42,000. Error común: poner todo en el fondo (55,000), que viola la restricción, o repartir 50/50 sin revisar los vértices.",
      en: "Linear problem: the optimum is at a vertex. Since the fund yields more, its limit is filled: 35% × 500,000 = $175,000 in the fund and $325,000 in debt. Return: 0.11 × 175,000 + 0.07 × 325,000 = 19,250 + 22,750 = $42,000. Common mistake: putting everything in the fund (55,000), which violates the constraint, or splitting 50/50 without checking the vertices.",
    },
    difficulty: 2,
    points: 15,
    competency: 'financial-optimization',
  },
  {
    id: 'CUA-10-E3',
    level: 6,
    module: 'CUA-10',
    kind: 'fields',
    flavor: 'case',
    context: {
      es: "Un gestor combina dos activos no correlacionados (correlación 0): el activo A con volatilidad de 30% y el activo B con volatilidad de 15% (datos hipotéticos). Busca el portafolio de mínima varianza, sin ventas en corto.",
      en: "A manager combines two uncorrelated assets (correlation 0): asset A with 30% volatility and asset B with 15% volatility (hypothetical data). He seeks the minimum-variance portfolio, without short selling.",
    },
    prompt: {
      es: "Calcula el peso de A, el peso de B y la volatilidad del portafolio de mínima varianza, en porcentaje.",
      en: "Compute A's weight, B's weight and the volatility of the minimum-variance portfolio, as percentages.",
    },
    fields: [
      { id: 'f1', label: { es: "Peso de A (%)", en: "Weight of A (%)" }, answer: 20, unit: '%', tolerance: { abs: 0.05 } },
      { id: 'f2', label: { es: "Peso de B (%)", en: "Weight of B (%)" }, answer: 80, unit: '%', tolerance: { abs: 0.05 } },
      { id: 'f3', label: { es: "Volatilidad del portafolio (%)", en: "Portfolio volatility (%)" }, answer: 13.42, unit: '%', tolerance: { abs: 0.02 } },
    ],
    explanation: {
      es: "Con covarianza 0: w_A = σ_B² / (σ_A² + σ_B²) = 0.0225 / (0.09 + 0.0225) = 0.0225 / 0.1125 = 0.20; w_B = 0.80. Varianza = 0.2² × 0.09 + 0.8² × 0.0225 = 0.0036 + 0.0144 = 0.018; volatilidad = √0.018 ≈ 13.42%, menor que el 15% de B solo. Error común: poner 100% en el activo menos volátil; agregar algo de A no correlacionado reduce el riesgo total.",
      en: "With zero covariance: w_A = σ_B² / (σ_A² + σ_B²) = 0.0225 / (0.09 + 0.0225) = 0.0225 / 0.1125 = 0.20; w_B = 0.80. Variance = 0.2² × 0.09 + 0.8² × 0.0225 = 0.0036 + 0.0144 = 0.018; volatility = √0.018 ≈ 13.42%, below B's 15% alone. Common mistake: putting 100% in the less volatile asset; adding some uncorrelated A lowers total risk.",
    },
    difficulty: 2,
    points: 20,
    competency: 'financial-optimization',
  },
  {
    id: 'CUA-10-E4',
    level: 6,
    module: 'CUA-10',
    kind: 'truefalse',
    flavor: 'concept',
    prompt: {
      es: "En un problema de programación lineal con solución óptima, siempre existe un óptimo en algún vértice (esquina) de la región factible.",
      en: "In a linear programming problem with an optimal solution, there is always an optimum at some vertex (corner) of the feasible region.",
    },
    answer: true,
    explanation: {
      es: "Verdadero. Es el resultado fundamental de la programación lineal y la base del método símplex: basta revisar los vértices. Puede haber varios óptimos (por ejemplo, todo un lado de la región), pero al menos uno está en una esquina. Error común: buscar el óptimo en el centro de la región factible.",
      en: "True. It is the fundamental result of linear programming and the basis of the simplex method: checking the vertices is enough. There may be several optima (for example, a whole edge of the region), but at least one is at a corner. Common mistake: looking for the optimum in the middle of the feasible region.",
    },
    difficulty: 1,
    points: 10,
    competency: 'financial-optimization',
  },
  {
    id: 'CUA-10-E5',
    level: 6,
    module: 'CUA-10',
    kind: 'mcq',
    flavor: 'interpret',
    prompt: {
      es: "Un gestor minimiza la varianza de su portafolio y luego agrega la restricción de no vender en corto. ¿Qué le pasa a la varianza mínima que obtiene?",
      en: "A manager minimizes his portfolio's variance and then adds a no-short-selling constraint. What happens to the minimum variance he obtains?",
    },
    options: [
      { id: 'CUA-10-E5-a', text: { es: "Siempre baja, porque el portafolio queda más ordenado", en: "It always falls, because the portfolio becomes more orderly" } },
      { id: 'CUA-10-E5-b', text: { es: "Se queda igual o sube, porque ahora hay menos combinaciones permitidas", en: "It stays the same or rises, because fewer combinations are now allowed" } },
      { id: 'CUA-10-E5-c', text: { es: "Siempre se vuelve cero", en: "It always becomes zero" } },
      { id: 'CUA-10-E5-d', text: { es: "No se puede saber si existe una solución factible", en: "It is impossible to know whether a feasible solution exists" } },
    ],
    correctOptionId: 'CUA-10-E5-b',
    explanation: {
      es: "Una restricción adicional reduce la región factible. Si el óptimo anterior ya cumplía la regla, la varianza queda igual; si no, hay que elegir otra combinación y la varianza mínima sube. Nunca mejora. Error común: pensar que más reglas siempre dan un mejor resultado; dan resultados más prudentes, no un mejor valor del objetivo.",
      en: "An additional constraint shrinks the feasible region. If the previous optimum already met the rule, variance stays the same; if not, another combination must be chosen and the minimum variance rises. It never improves. Common mistake: thinking more rules always give a better result; they give more prudent results, not a better objective value.",
    },
    difficulty: 2,
    points: 15,
    competency: 'financial-optimization',
  },
  {
    id: 'CUA-10-E6',
    level: 6,
    module: 'CUA-10',
    kind: 'multi',
    flavor: 'interpret',
    prompt: {
      es: "Selecciona TODOS los problemas o prácticas correctas al aplicar la optimización media-varianza en la vida real.",
      en: "Select ALL the correct problems or practices when applying mean-variance optimization in real life.",
    },
    options: [
      { id: 'CUA-10-E6-a', text: { es: "Es muy sensible a errores en los rendimientos esperados estimados", en: "It is very sensitive to errors in estimated expected returns" } },
      { id: 'CUA-10-E6-b', text: { es: "Sin restricciones tiende a concentrar el dinero en pocos activos", en: "Without constraints it tends to concentrate money in a few assets" } },
      { id: 'CUA-10-E6-c', text: { es: "Garantiza que el portafolio óptimo tendrá el rendimiento calculado", en: "It guarantees the optimal portfolio will earn the computed return" } },
      { id: 'CUA-10-E6-d', text: { es: "Agregar límites por activo ayuda a obtener portafolios más razonables", en: "Adding per-asset limits helps obtain more reasonable portfolios" } },
    ],
    correctOptionIds: ['CUA-10-E6-a', 'CUA-10-E6-b', 'CUA-10-E6-d'],
    explanation: {
      es: "El optimizador trata las estimaciones como si fueran exactas: pequeños errores en rendimientos esperados cambian mucho los pesos y llevan a carteras concentradas; los límites por activo lo moderan. Nada garantiza el rendimiento: los insumos son estimaciones. Error común: confiar en los pesos óptimos como si fueran una certeza.",
      en: "The optimizer treats estimates as if they were exact: small errors in expected returns shift the weights a lot and lead to concentrated portfolios; per-asset limits moderate this. Nothing guarantees the return: the inputs are estimates. Common mistake: trusting optimal weights as if they were a certainty.",
    },
    difficulty: 2,
    points: 15,
    competency: 'financial-optimization',
  },

  // ───────────────────────────── CUA-11 ─────────────────────────────
  {
    id: 'CUA-11-E1',
    level: 6,
    module: 'CUA-11',
    kind: 'mcq',
    flavor: 'interpret',
    prompt: {
      es: "Una mesa de operación reporta un VaR de 1 día al 99% de $2,000,000. ¿Cuál es la interpretación correcta?",
      en: "A trading desk reports a 1-day 99% VaR of $2,000,000. What is the correct interpretation?",
    },
    options: [
      { id: 'CUA-11-E1-a', text: { es: "La mesa nunca perderá más de $2,000,000 en un día", en: "The desk will never lose more than $2,000,000 in a day" } },
      { id: 'CUA-11-E1-b', text: { es: "La mesa perderá exactamente $2,000,000 uno de cada 100 días", en: "The desk will lose exactly $2,000,000 one day out of 100" } },
      { id: 'CUA-11-E1-c', text: { es: "En 99 de cada 100 días la pérdida no debería superar $2,000,000; en el 1% restante puede ser mayor", en: "On 99 out of 100 days the loss should not exceed $2,000,000; on the remaining 1% it may be larger" } },
      { id: 'CUA-11-E1-d', text: { es: "La pérdida promedio en los peores días es de $2,000,000", en: "The average loss on the worst days is $2,000,000" } },
    ],
    correctOptionId: 'CUA-11-E1-c',
    explanation: {
      es: "El VaR es un umbral: con 99% de confianza la pérdida diaria no lo supera, pero en 1% de los días sí, sin decir por cuánto. No es la pérdida máxima ni el promedio de la cola (eso sería el Expected Shortfall). Error común: leer el VaR como la peor pérdida posible.",
      en: "VaR is a threshold: with 99% confidence the daily loss does not exceed it, but on 1% of days it does, without saying by how much. It is neither the maximum loss nor the tail average (that would be Expected Shortfall). Common mistake: reading VaR as the worst possible loss.",
    },
    difficulty: 1,
    points: 10,
    competency: 'value-at-risk',
  },
  {
    id: 'CUA-11-E2',
    level: 6,
    module: 'CUA-11',
    kind: 'numeric',
    flavor: 'case',
    context: {
      es: "Un fondo tiene una posición de $5,000,000 en acciones con volatilidad diaria de 2% (hipotética). Usa el método paramétrico con media cero y z = 2.326 para 99% de confianza.",
      en: "A fund holds a $5,000,000 stock position with 2% daily volatility (hypothetical). Use the parametric method with zero mean and z = 2.326 for 99% confidence.",
    },
    prompt: {
      es: "Calcula el VaR paramétrico de 1 día al 99%, en pesos.",
      en: "Compute the 1-day 99% parametric VaR, in pesos.",
    },
    answer: 232600,
    unit: 'MXN',
    decimals: 0,
    tolerance: { abs: 1 },
    explanation: {
      es: "VaR = V × z × σ = 5,000,000 × 2.326 × 0.02 = $232,600. Error común: usar z = 1.645 (que corresponde a 95% y da $164,500) o escribir la volatilidad como 2 en lugar de 0.02.",
      en: "VaR = V × z × σ = 5,000,000 × 2.326 × 0.02 = $232,600. Common mistake: using z = 1.645 (which corresponds to 95% and gives $164,500) or writing volatility as 2 instead of 0.02.",
    },
    difficulty: 1,
    points: 10,
    competency: 'value-at-risk',
  },
  {
    id: 'CUA-11-E3',
    level: 6,
    module: 'CUA-11',
    kind: 'fields',
    flavor: 'concept',
    context: {
      es: "El VaR de 1 día al 95% de un portafolio es $300,000 (hipotético). Supón rendimientos independientes y aplica la regla de la raíz del tiempo.",
      en: "A portfolio's 1-day 95% VaR is $300,000 (hypothetical). Assume independent returns and apply the square-root-of-time rule.",
    },
    prompt: {
      es: "Calcula el VaR al 95% a 10 días y a 25 días, en pesos.",
      en: "Compute the 95% VaR over 10 days and over 25 days, in pesos.",
    },
    fields: [
      { id: 'f1', label: { es: "VaR a 10 días (pesos)", en: "10-day VaR (pesos)" }, answer: 948683.3, unit: 'MXN', tolerance: { rel: 0.001 } },
      { id: 'f2', label: { es: "VaR a 25 días (pesos)", en: "25-day VaR (pesos)" }, answer: 1500000, unit: 'MXN', tolerance: { rel: 0.001 } },
    ],
    explanation: {
      es: "VaR(T) = VaR(1) × √T. A 10 días: 300,000 × √10 ≈ 300,000 × 3.1623 ≈ $948,683. A 25 días: 300,000 × √25 = 300,000 × 5 = $1,500,000. Error común: multiplicar por T (3,000,000 y 7,500,000); el riesgo crece con la raíz del tiempo, no en proporción directa.",
      en: "VaR(T) = VaR(1) × √T. 10 days: 300,000 × √10 ≈ 300,000 × 3.1623 ≈ $948,683. 25 days: 300,000 × √25 = 300,000 × 5 = $1,500,000. Common mistake: multiplying by T (3,000,000 and 7,500,000); risk grows with the square root of time, not in direct proportion.",
    },
    difficulty: 1,
    points: 15,
    competency: 'value-at-risk',
  },
  {
    id: 'CUA-11-E4',
    level: 6,
    module: 'CUA-11',
    kind: 'fields',
    flavor: 'case',
    context: {
      es: "Una casa de bolsa simula su portafolio actual con los últimos 100 días de mercado. Las seis mayores pérdidas diarias fueron: $95,000; $82,000; $70,000; $64,000; $58,000 y $51,000 (cifras hipotéticas). Convención: VaR al 95% = 5.ª mayor pérdida; Expected Shortfall = promedio de las 5 mayores pérdidas.",
      en: "A brokerage firm simulates its current portfolio over the last 100 market days. The six largest daily losses were: $95,000; $82,000; $70,000; $64,000; $58,000 and $51,000 (hypothetical figures). Convention: 95% VaR = 5th largest loss; Expected Shortfall = average of the 5 largest losses.",
    },
    prompt: {
      es: "Calcula el VaR histórico al 95% y el Expected Shortfall al 95%, en pesos.",
      en: "Compute the 95% historical VaR and the 95% Expected Shortfall, in pesos.",
    },
    fields: [
      { id: 'f1', label: { es: "VaR histórico 95% (pesos)", en: "95% historical VaR (pesos)" }, answer: 58000, unit: 'MXN', tolerance: { abs: 1 } },
      { id: 'f2', label: { es: "Expected Shortfall 95% (pesos)", en: "95% Expected Shortfall (pesos)" }, answer: 73800, unit: 'MXN', tolerance: { abs: 1 } },
    ],
    explanation: {
      es: "5% de 100 días = 5 días en la cola. VaR = 5.ª mayor pérdida = $58,000. ES = (95,000 + 82,000 + 70,000 + 64,000 + 58,000) / 5 = 369,000 / 5 = $73,800. El ES es mayor que el VaR porque promedia la cola. Error común: incluir la 6.ª pérdida en el promedio o tomar la peor pérdida ($95,000) como VaR.",
      en: "5% of 100 days = 5 days in the tail. VaR = 5th largest loss = $58,000. ES = (95,000 + 82,000 + 70,000 + 64,000 + 58,000) / 5 = 369,000 / 5 = $73,800. ES is larger than VaR because it averages the tail. Common mistake: including the 6th loss in the average or taking the worst loss ($95,000) as VaR.",
    },
    difficulty: 2,
    points: 20,
    competency: 'value-at-risk',
  },
  {
    id: 'CUA-11-E5',
    level: 6,
    module: 'CUA-11',
    kind: 'truefalse',
    flavor: 'concept',
    prompt: {
      es: "El VaR al 99% indica cuánto se perderá en promedio durante el 1% de los peores días.",
      en: "The 99% VaR indicates how much will be lost on average during the worst 1% of days.",
    },
    answer: false,
    explanation: {
      es: "Falso. El VaR solo marca el umbral que separa el 99% de los días del 1% peor; no dice cuánto se pierde dentro de ese 1%. La pérdida promedio en la cola es el Expected Shortfall (CVaR), que siempre es igual o mayor que el VaR. Error común: usar VaR y ES como sinónimos.",
      en: "False. VaR only marks the threshold separating 99% of days from the worst 1%; it does not say how much is lost within that 1%. The average tail loss is Expected Shortfall (CVaR), which is always equal to or greater than VaR. Common mistake: using VaR and ES as synonyms.",
    },
    difficulty: 1,
    points: 10,
    competency: 'value-at-risk',
  },
  {
    id: 'CUA-11-E6',
    level: 6,
    module: 'CUA-11',
    kind: 'classify',
    flavor: 'concept',
    prompt: {
      es: "Clasifica cada característica según el método de cálculo de VaR al que corresponde.",
      en: "Classify each feature by the VaR calculation method it corresponds to.",
    },
    categories: [
      { id: 'CUA-11-E6-c1', label: { es: "Paramétrico", en: "Parametric" } },
      { id: 'CUA-11-E6-c2', label: { es: "Histórico", en: "Historical" } },
      { id: 'CUA-11-E6-c3', label: { es: "Monte Carlo", en: "Monte Carlo" } },
    ],
    items: [
      { id: 'CUA-11-E6-i1', label: { es: "Supone distribución normal y usa la volatilidad y un factor z", en: "Assumes a normal distribution and uses volatility and a z factor" }, correctCategoryId: 'CUA-11-E6-c1' },
      { id: 'CUA-11-E6-i2', label: { es: "Reordena las pérdidas que el portafolio actual habría tenido en días pasados", en: "Sorts the losses the current portfolio would have had on past days" }, correctCategoryId: 'CUA-11-E6-c2' },
      { id: 'CUA-11-E6-i3', label: { es: "Genera miles de escenarios aleatorios con un modelo", en: "Generates thousands of random scenarios with a model" }, correctCategoryId: 'CUA-11-E6-c3' },
      { id: 'CUA-11-E6-i4', label: { es: "Es el más rápido de calcular, con una sola fórmula", en: "It is the fastest to compute, with a single formula" }, correctCategoryId: 'CUA-11-E6-c1' },
      { id: 'CUA-11-E6-i5', label: { es: "No supone una distribución, pero asume que el pasado reciente se repetirá", en: "Assumes no distribution, but assumes the recent past will repeat" }, correctCategoryId: 'CUA-11-E6-c2' },
      { id: 'CUA-11-E6-i6', label: { es: "El más flexible para portafolios con opciones y relaciones no lineales", en: "The most flexible for portfolios with options and non-linear relationships" }, correctCategoryId: 'CUA-11-E6-c3' },
    ],
    explanation: {
      es: "Paramétrico: fórmula V × z × σ bajo normalidad, rápido. Histórico: usa pérdidas pasadas reales sin suponer distribución, pero depende de que el pasado represente el futuro. Monte Carlo: simula escenarios; es flexible para no linealidades, aunque costoso. Error común: creer que el histórico supone normalidad.",
      en: "Parametric: formula V × z × σ under normality, fast. Historical: uses actual past losses without assuming a distribution, but depends on the past representing the future. Monte Carlo: simulates scenarios; flexible for non-linearities, though costly. Common mistake: believing the historical method assumes normality.",
    },
    difficulty: 2,
    points: 15,
    competency: 'value-at-risk',
  },

  // ───────────────────────────── CUA-12 ─────────────────────────────
  {
    id: 'CUA-12-E1',
    level: 6,
    module: 'CUA-12',
    kind: 'classify',
    flavor: 'case',
    prompt: {
      es: "Clasifica cada situación según el tipo de riesgo financiero que representa.",
      en: "Classify each situation by the type of financial risk it represents.",
    },
    categories: [
      { id: 'CUA-12-E1-c1', label: { es: "Riesgo de mercado", en: "Market risk" } },
      { id: 'CUA-12-E1-c2', label: { es: "Riesgo de crédito", en: "Credit risk" } },
      { id: 'CUA-12-E1-c3', label: { es: "Riesgo de liquidez", en: "Liquidity risk" } },
    ],
    items: [
      { id: 'CUA-12-E1-i1', label: { es: "El peso se deprecia y sube el costo en pesos de una deuda en dólares", en: "The peso depreciates and the peso cost of a dollar debt rises" }, correctCategoryId: 'CUA-12-E1-c1' },
      { id: 'CUA-12-E1-i2', label: { es: "Un cliente deja de pagar su crédito empresarial", en: "A customer stops paying its business loan" }, correctCategoryId: 'CUA-12-E1-c2' },
      { id: 'CUA-12-E1-i3', label: { es: "No hay comprador para un bono poco operado sin bajar mucho su precio", en: "There is no buyer for a thinly traded bond without cutting its price sharply" }, correctCategoryId: 'CUA-12-E1-c3' },
      { id: 'CUA-12-E1-i4', label: { es: "Suben las tasas de interés y cae el precio de los bonos en cartera", en: "Interest rates rise and the price of bonds held falls" }, correctCategoryId: 'CUA-12-E1-c1' },
      { id: 'CUA-12-E1-i5', label: { es: "Le bajan la calificación a un emisor y su bono pierde valor", en: "An issuer's rating is cut and its bond loses value" }, correctCategoryId: 'CUA-12-E1-c2' },
      { id: 'CUA-12-E1-i6', label: { es: "Una empresa rentable no tiene efectivo para pagar la nómina del viernes", en: "A profitable company lacks cash to pay Friday's payroll" }, correctCategoryId: 'CUA-12-E1-c3' },
    ],
    explanation: {
      es: "Mercado: cambios en tipo de cambio y tasas. Crédito: impago o deterioro de la calidad crediticia del deudor (baja de calificación). Liquidez: no poder vender sin castigar el precio (de mercado) o no tener efectivo para pagar a tiempo (de fondeo). Error común: clasificar la baja de calificación como riesgo de mercado; su origen es la capacidad de pago del emisor.",
      en: "Market: changes in exchange rates and rates. Credit: default or deterioration of the debtor's credit quality (rating cut). Liquidity: not being able to sell without hurting the price (market) or lacking cash to pay on time (funding). Common mistake: classifying the rating cut as market risk; its source is the issuer's ability to pay.",
    },
    difficulty: 1,
    points: 10,
    competency: 'market-credit-liquidity-risk',
  },
  {
    id: 'CUA-12-E2',
    level: 6,
    module: 'CUA-12',
    kind: 'fields',
    flavor: 'case',
    context: {
      es: "Una sofipo otorga un crédito con saldo de $2,500,000. Estima una probabilidad de incumplimiento a un año de 2% y una tasa de recuperación de 35% gracias a la garantía (datos hipotéticos).",
      en: "A popular savings and loan company grants a loan with a $2,500,000 balance. It estimates a one-year probability of default of 2% and a 35% recovery rate thanks to collateral (hypothetical data).",
    },
    prompt: {
      es: "Calcula la LGD (en %) y la pérdida esperada anual del crédito (en pesos).",
      en: "Compute the LGD (in %) and the loan's expected annual loss (in pesos).",
    },
    fields: [
      { id: 'f1', label: { es: "LGD (%)", en: "LGD (%)" }, answer: 65, unit: '%', tolerance: { abs: 0.05 } },
      { id: 'f2', label: { es: "Pérdida esperada (pesos)", en: "Expected loss (pesos)" }, answer: 32500, unit: 'MXN', tolerance: { abs: 1 } },
    ],
    explanation: {
      es: "LGD = 1 − 0.35 = 0.65 = 65%. EL = PD × LGD × EAD = 0.02 × 0.65 × 2,500,000 = $32,500. Error común: usar la tasa de recuperación como si fuera la LGD (0.02 × 0.35 × 2,500,000 = $17,500); la LGD es lo que NO se recupera.",
      en: "LGD = 1 − 0.35 = 0.65 = 65%. EL = PD × LGD × EAD = 0.02 × 0.65 × 2,500,000 = $32,500. Common mistake: using the recovery rate as if it were LGD (0.02 × 0.35 × 2,500,000 = $17,500); LGD is what is NOT recovered.",
    },
    difficulty: 2,
    points: 15,
    competency: 'market-credit-liquidity-risk',
  },
  {
    id: 'CUA-12-E3',
    level: 6,
    module: 'CUA-12',
    kind: 'numeric',
    flavor: 'case',
    context: {
      es: "Un fondo necesita vender hoy 50,000 títulos de una emisora. El mejor precio de compra (bid) es $24.80 y el de venta (ask) es $25.20 (precios hipotéticos). La posición está valuada a precio medio.",
      en: "A fund needs to sell 50,000 shares of an issuer today. The best bid is $24.80 and the ask is $25.20 (hypothetical prices). The position is valued at the mid price.",
    },
    prompt: {
      es: "¿Cuál es el costo aproximado de liquidar la posición frente a su valor a precio medio, en pesos?",
      en: "What is the approximate cost of liquidating the position versus its mid-price value, in pesos?",
    },
    answer: 10000,
    unit: 'MXN',
    decimals: 0,
    tolerance: { abs: 1 },
    explanation: {
      es: "Precio medio = (24.80 + 25.20) / 2 = $25.00. Al vender recibes el bid, $0.20 menos por título (medio diferencial). Costo ≈ 50,000 × 0.20 = $10,000. Error común: usar el diferencial completo (0.40 × 50,000 = $20,000); frente al precio medio solo se pierde la mitad.",
      en: "Mid price = (24.80 + 25.20) / 2 = $25.00. When selling you receive the bid, $0.20 less per share (half the spread). Cost ≈ 50,000 × 0.20 = $10,000. Common mistake: using the full spread (0.40 × 50,000 = $20,000); versus the mid price you only lose half.",
    },
    difficulty: 1,
    points: 10,
    competency: 'market-credit-liquidity-risk',
  },
  {
    id: 'CUA-12-E4',
    level: 6,
    module: 'CUA-12',
    kind: 'numeric',
    flavor: 'case',
    context: {
      es: "Una aseguradora tiene un portafolio de bonos valuado en $10,000,000 con duración modificada de 4. Las tasas de mercado suben 0.5 puntos porcentuales (cifras hipotéticas).",
      en: "An insurer holds a bond portfolio valued at $10,000,000 with a modified duration of 4. Market rates rise by 0.5 percentage points (hypothetical figures).",
    },
    prompt: {
      es: "Usando la aproximación por duración, ¿cuánto pierde aproximadamente el portafolio? Responde la pérdida como número positivo, en pesos.",
      en: "Using the duration approximation, roughly how much does the portfolio lose? Give the loss as a positive number, in pesos.",
    },
    answer: 200000,
    unit: 'MXN',
    decimals: 0,
    tolerance: { abs: 1 },
    explanation: {
      es: "ΔP ≈ −D_mod × Δy × P = −4 × 0.005 × 10,000,000 = −$200,000; la pérdida es $200,000. Error común: usar Δy = 0.5 en lugar de 0.005 (daría una pérdida mayor que el portafolio) o pensar que el precio sube cuando suben las tasas.",
      en: "ΔP ≈ −D_mod × Δy × P = −4 × 0.005 × 10,000,000 = −$200,000; the loss is $200,000. Common mistake: using Δy = 0.5 instead of 0.005 (which would give a loss larger than the portfolio) or thinking the price rises when rates rise.",
    },
    difficulty: 2,
    points: 15,
    competency: 'market-credit-liquidity-risk',
  },
  {
    id: 'CUA-12-E5',
    level: 6,
    module: 'CUA-12',
    kind: 'truefalse',
    flavor: 'concept',
    prompt: {
      es: "La pérdida esperada de una cartera de créditos es la que el banco debe cubrir principalmente con su capital, no con reservas ni con la tasa de interés que cobra.",
      en: "A loan book's expected loss is what the bank should cover mainly with its capital, not with reserves or the interest rate it charges.",
    },
    answer: false,
    explanation: {
      es: "Falso. La pérdida esperada es un costo normal del negocio: se cubre con reservas (estimaciones preventivas) y se incorpora en la tasa. El capital está para absorber la pérdida no esperada, la que excede el promedio en un año malo. Error común: mezclar ambos conceptos y creer que el capital cubre todo.",
      en: "False. Expected loss is a normal cost of business: it is covered with reserves (loan-loss allowances) and built into the rate. Capital is there to absorb unexpected loss, the amount beyond the average in a bad year. Common mistake: mixing both concepts and believing capital covers everything.",
    },
    difficulty: 2,
    points: 15,
    competency: 'market-credit-liquidity-risk',
  },
  {
    id: 'CUA-12-E6',
    level: 6,
    module: 'CUA-12',
    kind: 'mcq',
    flavor: 'concept',
    prompt: {
      es: "En riesgo de crédito, ¿qué mide la LGD (Loss Given Default)?",
      en: "In credit risk, what does LGD (Loss Given Default) measure?",
    },
    options: [
      { id: 'CUA-12-E6-a', text: { es: "La probabilidad de que el deudor no pague en un año", en: "The probability that the borrower does not pay within a year" } },
      { id: 'CUA-12-E6-b', text: { es: "El saldo total que debe el cliente hoy", en: "The total balance the customer owes today" } },
      { id: 'CUA-12-E6-c', text: { es: "El porcentaje de la exposición que se pierde si el deudor incumple, después de recuperaciones", en: "The percentage of the exposure lost if the borrower defaults, after recoveries" } },
      { id: 'CUA-12-E6-d', text: { es: "La tasa de interés que se cobra al cliente", en: "The interest rate charged to the customer" } },
    ],
    correctOptionId: 'CUA-12-E6-c',
    explanation: {
      es: "La LGD es la fracción que se pierde si hay impago, una vez descontado lo que se recupera (por ejemplo, vendiendo la garantía): LGD = 1 − recuperación. La probabilidad de impago es la PD y el saldo expuesto es la EAD. Error común: confundir LGD con PD.",
      en: "LGD is the fraction lost if there is a default, after subtracting what is recovered (for example, by selling the collateral): LGD = 1 − recovery. The probability of default is PD and the exposed balance is EAD. Common mistake: confusing LGD with PD.",
    },
    difficulty: 1,
    points: 10,
    competency: 'market-credit-liquidity-risk',
  },
]
