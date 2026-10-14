import type { Exercise, Lesson } from '../../../types'

/**
 * FINCORE — Temario v2.0, área Finanzas Cuantitativas y Gestión de Riesgos, parte 1 (Básico).
 * CUA-01 a CUA-06: matemáticas para finanzas cuantitativas, álgebra lineal y cálculo,
 * probabilidad y estadística, estadística inferencial, econometría financiera y modelos de regresión.
 */

const t = (es: string, en: string) => ({ es, en })

const NOTE_HYPO_MATH = t(
  "Contenido educativo. Todas las tasas, precios y montos de esta lección son ejemplos hipotéticos para practicar los cálculos; no son tasas reales del mercado ni del Banco de México. Las convenciones (por ejemplo, días por año o tipo de capitalización) varían entre instituciones: verifica la que use tu fuente.",
  "Educational content. All rates, prices and amounts in this lesson are hypothetical examples to practice the calculations; they are not real market or Banco de México rates. Conventions (for example, days per year or compounding type) vary across institutions: check the one your source uses.",
)

const NOTE_HYPO_STATS = t(
  "Contenido educativo. Los rendimientos, probabilidades y datos de esta lección son hipotéticos. Los valores críticos usados (como 1.96 para 95 %) son aproximaciones estándar de la distribución normal; con muestras pequeñas se usan tablas t. Ningún resultado estadístico garantiza rendimientos futuros.",
  "Educational content. The returns, probabilities and data in this lesson are hypothetical. The critical values used (such as 1.96 for 95%) are standard approximations from the normal distribution; with small samples t tables are used. No statistical result guarantees future returns.",
)

const NOTE_HYPO_ECON = t(
  "Contenido educativo. Los coeficientes, betas y rendimientos de esta lección son ejemplos hipotéticos, no estimaciones de empresas o índices reales. Un modelo estimado con datos pasados puede dejar de funcionar cuando cambian las condiciones del mercado.",
  "Educational content. The coefficients, betas and returns in this lesson are hypothetical examples, not estimates for real companies or indices. A model estimated with past data can stop working when market conditions change.",
)

export const lessons: Lesson[] = [
  // ═════════════════════════ CUA-01 ═════════════════════════
  {
    id: 'CUA-01',
    level: 6,
    topicIds: ['CUA.1'],
    title: t("Matemáticas para finanzas cuantitativas", "Mathematics for quantitative finance"),
    summary: t(
      "Las finanzas cuantitativas se apoyan en tres herramientas básicas: medir rendimientos (simples y logarítmicos), usar la función exponencial y el logaritmo para el crecimiento continuo, y sumar muchos términos con sumatorias y series geométricas.",
      "Quantitative finance relies on three basic tools: measuring returns (simple and logarithmic), using the exponential function and the logarithm for continuous growth, and adding many terms with summations and geometric series.",
    ),
    minutes: 17,
    objectives: [
      t("Calcular e interpretar rendimientos simples y logarítmicos, y convertir uno en otro.", "Compute and interpret simple and log returns, and convert one into the other."),
      t("Usar la función exponencial y el logaritmo natural para la capitalización continua.", "Use the exponential function and the natural logarithm for continuous compounding."),
      t("Leer la notación de sumatoria y sumar una serie geométrica con su fórmula.", "Read summation notation and add up a geometric series with its formula."),
    ],
    theory: [
      {
        heading: t("Rendimiento simple y rendimiento logarítmico", "Simple return and log return"),
        body: [
          t(
            "Un **rendimiento** dice cuánto creció tu dinero en proporción a lo que pusiste. El **rendimiento simple** es el que usas todos los días: si una acción pasa de $100 a $110, ganaste $10 sobre $100, es decir **10 %**.",
            "A **return** tells how much your money grew in proportion to what you put in. The **simple return** is the one you use every day: if a share goes from $100 to $110, you gained $10 on $100, that is **10%**.",
          ),
          t(
            "En finanzas cuantitativas también se usa el **rendimiento logarítmico** (o continuo): el logaritmo natural del cociente de precios, ln(P1 / P0). Para el mismo caso, ln(1.10) ≈ 0.0953, o sea **9.53 %**. Es un poco menor que el simple, y la diferencia crece cuando los movimientos son grandes.",
            "Quantitative finance also uses the **log return** (or continuous return): the natural logarithm of the price ratio, ln(P1 / P0). For the same case, ln(1.10) ≈ 0.0953, or **9.53%**. It is a bit smaller than the simple return, and the gap grows when moves are large.",
          ),
          t(
            "¿Por qué usar logaritmos? Porque los rendimientos logarítmicos **se suman en el tiempo**: el rendimiento log de una semana es la suma de los cinco días. Los simples, en cambio, se **multiplican**: (1 + R1)(1 + R2) − 1. Por eso los modelos prefieren los log, y los reportes para personas prefieren los simples.",
            "Why use logarithms? Because log returns **add up over time**: the log return for a week is the sum of the five days. Simple returns, instead, **multiply**: (1 + R1)(1 + R2) − 1. That is why models prefer log returns, and reports for people prefer simple ones.",
          ),
          t(
            "Mini ejemplo: un precio sube de $50 a $55 (+10 %) y luego baja a $49.50 (−10 %). No regresas a $50: el rendimiento total simple es 1.10 × 0.90 − 1 = **−1 %**.",
            "Mini example: a price rises from $50 to $55 (+10%) and then falls to $49.50 (−10%). You do not get back to $50: the total simple return is 1.10 × 0.90 − 1 = **−1%**.",
          ),
        ],
        formulas: [
          {
            name: t("Rendimiento simple", "Simple return"),
            expression: "R = P1 ÷ P0 − 1",
            variables: [
              { symbol: "R", meaning: t("Rendimiento simple del periodo; multiplícalo por 100 para verlo en %.", "Simple return for the period; multiply by 100 to see it in %.") },
              { symbol: "P0", meaning: t("Precio inicial (al empezar el periodo), en pesos.", "Starting price (at the beginning of the period), in pesos.") },
              { symbol: "P1", meaning: t("Precio final (al terminar el periodo), en pesos.", "Ending price (at the end of the period), in pesos.") },
            ],
            steps: [
              t("Divide el precio final entre el precio inicial: P1 ÷ P0.", "Divide the ending price by the starting price: P1 ÷ P0."),
              t("Réstale 1 al resultado.", "Subtract 1 from the result."),
              t("Multiplica por 100 para expresarlo en porcentaje.", "Multiply by 100 to express it as a percentage."),
            ],
            example: t("Una acción pasa de $200 a $230. 230 ÷ 200 = 1.15; 1.15 − 1 = 0.15; 0.15 × 100 = **15 %**.", "A share goes from $200 to $230. 230 ÷ 200 = 1.15; 1.15 − 1 = 0.15; 0.15 × 100 = **15%**."),
            interpret: t("Positivo = ganaste; negativo = perdiste. Nunca puede ser menor que −100 % (perder todo).", "Positive = you gained; negative = you lost. It can never be below −100% (losing everything)."),
            mistake: t("Dividir entre el precio final en vez del inicial. Siempre comparas contra el punto de partida (P0).", "Dividing by the ending price instead of the starting one. You always compare against the starting point (P0)."),
          },
          {
            name: t("Rendimiento logarítmico y conversión entre ambos", "Log return and converting between both"),
            expression: "r = ln(P1 ÷ P0) = ln(1 + R)     R = e^r − 1",
            variables: [
              { symbol: "r", meaning: t("Rendimiento logarítmico (continuo), en decimal; × 100 para verlo en %.", "Log (continuous) return, as a decimal; × 100 to see it in %.") },
              { symbol: "ln", meaning: t("Logaritmo natural: la tecla \"ln\" de la calculadora.", "Natural logarithm: the \"ln\" key on a calculator.") },
              { symbol: "R", meaning: t("Rendimiento simple, en decimal (10 % = 0.10).", "Simple return, as a decimal (10% = 0.10).") },
              { symbol: "e", meaning: t("Número fijo ≈ 2.71828; la tecla \"e^x\" de la calculadora.", "Fixed number ≈ 2.71828; the \"e^x\" key on a calculator.") },
              { symbol: "P0", meaning: t("Precio inicial (al empezar el periodo), en pesos.", "Starting price (at the beginning of the period), in pesos.") },
              { symbol: "P1", meaning: t("Precio final (al terminar el periodo), en pesos.", "Ending price (at the end of the period), in pesos.") },
            ],
            steps: [
              t("De precios a log: divide P1 ÷ P0 (o escribe 1 + R con R en decimal).", "From prices to log: divide P1 ÷ P0 (or write 1 + R with R as a decimal)."),
              t("Aplica ln a ese número: el resultado es r en decimal.", "Apply ln to that number: the result is r as a decimal."),
              t("De log a simple: calcula e^r y réstale 1.", "From log to simple: compute e^r and subtract 1."),
              t("Multiplica por 100 para leerlo en porcentaje.", "Multiply by 100 to read it as a percentage."),
            ],
            example: t("Precio de $200 a $230: 230 ÷ 200 = 1.15; ln(1.15) ≈ 0.1398 → **13.98 %** log (el simple era 15 %). De regreso: e^0.1398 ≈ 1.15; 1.15 − 1 = 0.15 → 15 % simple.", "Price from $200 to $230: 230 ÷ 200 = 1.15; ln(1.15) ≈ 0.1398 → **13.98%** log (the simple one was 15%). Back again: e^0.1398 ≈ 1.15; 1.15 − 1 = 0.15 → 15% simple."),
            interpret: t("Cuando el precio sube, el log es un poco menor que el simple; para movimientos pequeños casi coinciden.", "When the price rises, the log return is a bit smaller than the simple one; for small moves they almost coincide."),
            mistake: t("Meter el porcentaje dentro del ln, como ln(15). Va ln(1.15): uno más el rendimiento en decimal.", "Putting the percentage inside the ln, as ln(15). It is ln(1.15): one plus the return as a decimal."),
          },
          {
            name: t("Rendimiento total de varios periodos", "Total return over several periods"),
            expression: "R total = (1 + R1) × (1 + R2) × … − 1 = P final ÷ P inicial − 1     r total = r1 + r2 + …",
            variables: [
              { symbol: "R total", meaning: t("Rendimiento simple acumulado de todo el tramo, en decimal.", "Accumulated simple return over the whole stretch, as a decimal.") },
              { symbol: "R1, R2, …", meaning: t("Rendimiento simple de cada periodo (día, mes), en decimal.", "Simple return of each period (day, month), as a decimal.") },
              { symbol: "P final, P inicial", meaning: t("Último y primer precio del tramo, en pesos.", "Last and first price of the stretch, in pesos.") },
              { symbol: "r total, r1, r2, …", meaning: t("Rendimientos logarítmicos: el total es la suma de los de cada periodo.", "Log returns: the total is the sum of each period's.") },
            ],
            steps: [
              t("Convierte cada rendimiento a factor: 1 + R (por ejemplo, +8 % → 1.08 y −8 % → 0.92).", "Turn each return into a factor: 1 + R (for example, +8% → 1.08 and −8% → 0.92)."),
              t("Multiplica todos los factores entre sí.", "Multiply all the factors together."),
              t("Réstale 1 y multiplica por 100 para tenerlo en %.", "Subtract 1 and multiply by 100 to get it in %."),
              t("Comprueba con precios: P final ÷ P inicial − 1 debe dar lo mismo.", "Check with prices: P final ÷ P initial − 1 must give the same."),
            ],
            example: t("Un activo sube 8 % y luego baja 8 %. 1.08 × 0.92 = 0.9936; 0.9936 − 1 = −0.0064 → **−0.64 %**. Si empezó en $100: 100 × 1.08 = $108; 108 × 0.92 = $99.36, y 99.36 ÷ 100 − 1 = −0.64 %.", "An asset rises 8% and then falls 8%. 1.08 × 0.92 = 0.9936; 0.9936 − 1 = −0.0064 → **−0.64%**. If it started at $100: 100 × 1.08 = $108; 108 × 0.92 = $99.36, and 99.36 ÷ 100 − 1 = −0.64%."),
            interpret: t("Subir y bajar el mismo porcentaje te deja abajo: la bajada se aplica sobre un precio más alto.", "Rising and falling by the same percentage leaves you lower: the drop is applied to a higher price."),
            mistake: t("Sumar los rendimientos simples (+8 % − 8 % = 0 %). Los simples se multiplican; solo los log se suman.", "Adding the simple returns (+8% − 8% = 0%). Simple returns multiply; only log returns add up."),
          },
        ],
        bullets: [
          t("Simple: fácil de explicar; se combinan multiplicando (1 + R).", "Simple: easy to explain; combined by multiplying (1 + R)."),
          t("Logarítmico: se suma día con día; cómodo para modelos.", "Logarithmic: adds day by day; convenient for models."),
          t("Para movimientos pequeños (±1 %) ambos casi coinciden.", "For small moves (±1%) both almost coincide."),
          t("Un rendimiento simple nunca baja de −100 %; uno log puede ir de menos infinito a más infinito.", "A simple return never falls below −100%; a log return can range from minus infinity to plus infinity."),
        ],
      },
      {
        heading: t("Exponencial, logaritmo y capitalización continua", "Exponential, logarithm and continuous compounding"),
        body: [
          t(
            "La **función exponencial** e^x (e ≈ 2.71828) describe algo que crece en proporción a su tamaño, como una deuda que genera intereses sobre intereses. El **logaritmo natural** ln(x) es su operación inversa: responde \"¿a qué potencia debo elevar e para obtener x?\".",
            "The **exponential function** e^x (e ≈ 2.71828) describes something that grows in proportion to its size, like a debt that earns interest on interest. The **natural logarithm** ln(x) is its inverse: it answers \"to what power must I raise e to get x?\".",
          ),
          t(
            "**Capitalizar** significa sumar los intereses ganados al capital para que, a partir de ahí, también generen intereses. Si un banco capitaliza intereses cada año, cada mes, cada día… cada vez más seguido, en el límite llegas a la **capitalización continua**: el monto es M = C × e^(i·t). Es la convención estándar en muchos modelos, por ejemplo en la valuación de opciones.",
            "**Compounding** means adding the interest earned to the principal so that, from then on, it also earns interest. If a bank compounds interest every year, every month, every day… more and more often, in the limit you reach **continuous compounding**: the amount is M = C × e^(i·t). It is the standard convention in many models, for example in option pricing.",
          ),
          t(
            "Dos reglas del logaritmo que usarás siempre: **ln(a × b) = ln a + ln b** (por eso los log returns se suman) y **ln(a^n) = n × ln a** (útil para despejar el tiempo).",
            "Two logarithm rules you will always use: **ln(a × b) = ln a + ln b** (that is why log returns add up) and **ln(a^n) = n × ln a** (useful to solve for time).",
          ),
          t(
            "Mini ejemplo hipotético: $10,000 al 8 % anual con capitalización continua durante 2 años dan 10,000 × e^0.16 ≈ **$11,735.11**. Con capitalización anual serían 10,000 × 1.08² = $11,664: lo continuo siempre da un poco más.",
            "Hypothetical mini example: $10,000 at 8% a year with continuous compounding for 2 years gives 10,000 × e^0.16 ≈ **$11,735.11**. With annual compounding it would be 10,000 × 1.08² = $11,664: continuous always gives a bit more.",
          ),
        ],
        formulas: [
          {
            name: t("Monto con capitalización continua", "Amount with continuous compounding"),
            expression: "M = C × e^(i·t)",
            variables: [
              { symbol: "M", meaning: t("Monto final: lo que tendrás al terminar, en pesos.", "Final amount: what you will have at the end, in pesos.") },
              { symbol: "C", meaning: t("Capital: lo que inviertes hoy, en pesos.", "Principal: what you invest today, in pesos.") },
              { symbol: "e", meaning: t("Número fijo ≈ 2.71828 (tecla \"e^x\").", "Fixed number ≈ 2.71828 (\"e^x\" key).") },
              { symbol: "i", meaning: t("Tasa anual en decimal (6 % = 0.06).", "Annual rate as a decimal (6% = 0.06).") },
              { symbol: "t", meaning: t("Tiempo en años (18 meses = 1.5 años).", "Time in years (18 months = 1.5 years).") },
            ],
            steps: [
              t("Convierte la tasa a decimal: 6 % = 0.06.", "Convert the rate to a decimal: 6% = 0.06."),
              t("Multiplica tasa por tiempo: i × t.", "Multiply rate by time: i × t."),
              t("Calcula e elevado a ese resultado con la tecla e^x.", "Compute e raised to that result with the e^x key."),
              t("Multiplica por el capital C.", "Multiply by the principal C."),
            ],
            example: t("$5,000 al 6 % anual (tasa de ejemplo) durante 3 años: i × t = 0.06 × 3 = 0.18; e^0.18 ≈ 1.197217; 5,000 × 1.197217 ≈ **$5,986.09**.", "$5,000 at 6% a year (example rate) for 3 years: i × t = 0.06 × 3 = 0.18; e^0.18 ≈ 1.197217; 5,000 × 1.197217 ≈ **$5,986.09**."),
            interpret: t("Siempre da un poco más que capitalizar una vez al año, porque los intereses se suman al capital sin pausa.", "It always gives a bit more than compounding once a year, because interest is added to the principal nonstop."),
            mistake: t("Escribir la tasa como 6 en lugar de 0.06 en el exponente, o usar (1 + i)^t, que es capitalización anual.", "Writing the rate as 6 instead of 0.06 in the exponent, or using (1 + i)^t, which is annual compounding."),
          },
          {
            name: t("Tiempo necesario con capitalización continua", "Time needed with continuous compounding"),
            expression: "t = ln(M ÷ C) ÷ i",
            variables: [
              { symbol: "t", meaning: t("Años que tarda C en convertirse en M.", "Years it takes C to become M.") },
              { symbol: "ln", meaning: t("Logaritmo natural (tecla \"ln\"): deshace la exponencial.", "Natural logarithm (\"ln\" key): it undoes the exponential.") },
              { symbol: "M", meaning: t("Monto que quieres alcanzar, en pesos.", "Amount you want to reach, in pesos.") },
              { symbol: "C", meaning: t("Capital inicial, en pesos.", "Starting principal, in pesos.") },
              { symbol: "i", meaning: t("Tasa anual en decimal.", "Annual rate as a decimal.") },
            ],
            steps: [
              t("Divide la meta entre el capital: M ÷ C.", "Divide the target by the principal: M ÷ C."),
              t("Aplica ln a ese cociente.", "Apply ln to that ratio."),
              t("Divide entre la tasa en decimal: el resultado está en años.", "Divide by the rate as a decimal: the result is in years."),
            ],
            example: t("¿Cuánto tarda en duplicarse un dinero al 5 % continuo (tasa de ejemplo)? M ÷ C = 2; ln(2) ≈ 0.6931; 0.6931 ÷ 0.05 ≈ **13.86 años**.", "How long does money take to double at 5% continuous (example rate)? M ÷ C = 2; ln(2) ≈ 0.6931; 0.6931 ÷ 0.05 ≈ **13.86 years**."),
            mistake: t("Dividir entre 5 en vez de 0.05: darías 0.14 años en lugar de casi 14.", "Dividing by 5 instead of 0.05: you would get 0.14 years instead of almost 14."),
          },
        ],
      },
      {
        heading: t("Sumatorias y series geométricas", "Summations and geometric series"),
        body: [
          t(
            "La **sumatoria** Σ es una forma corta de escribir \"suma todos estos términos\". Por ejemplo, Σ (de k = 1 a 3) x_k significa x1 + x2 + x3. La verás en promedios, varianzas y valores presentes.",
            "The **summation** Σ is a short way to write \"add all these terms\". For example, Σ (from k = 1 to 3) x_k means x1 + x2 + x3. You will see it in averages, variances and present values.",
          ),
          t(
            "Una **serie geométrica** es una suma donde cada término es el anterior multiplicado por la misma **razón** r: a + a·r + a·r² + … Es muy común en finanzas: los factores de descuento 1/(1+i), 1/(1+i)², … forman justo una serie así.",
            "A **geometric series** is a sum where each term is the previous one multiplied by the same **ratio** r: a + a·r + a·r² + … It is very common in finance: the discount factors 1/(1+i), 1/(1+i)², … form exactly such a series.",
          ),
          t(
            "En vez de sumar término por término, usas una fórmula cerrada: S = a × (1 − r^n) / (1 − r), con a = primer término y n = número de términos. Si |r| < 1 y n crece sin límite, la suma se acerca a **a / (1 − r)**.",
            "Instead of adding term by term, you use a closed formula: S = a × (1 − r^n) / (1 − r), with a = first term and n = number of terms. If |r| < 1 and n grows without limit, the sum approaches **a / (1 − r)**.",
          ),
          t(
            "Mini ejemplo: 1 + 0.5 + 0.25 + 0.125 tiene a = 1, r = 0.5 y n = 4: S = (1 − 0.0625) / 0.5 = **1.875**. Si siguieras sumando para siempre, llegarías a 1 / 0.5 = 2.",
            "Mini example: 1 + 0.5 + 0.25 + 0.125 has a = 1, r = 0.5 and n = 4: S = (1 − 0.0625) / 0.5 = **1.875**. If you kept adding forever, you would reach 1 / 0.5 = 2.",
          ),
        ],
        formulas: [
          {
            name: t("Suma de una serie geométrica (n términos)", "Sum of a geometric series (n terms)"),
            expression: "S = a × (1 − r^n) ÷ (1 − r)",
            variables: [
              { symbol: "S", meaning: t("Suma de todos los términos.", "Sum of all the terms.") },
              { symbol: "a", meaning: t("Primer término de la serie.", "First term of the series.") },
              { symbol: "r", meaning: t("Razón: el número por el que se multiplica cada término para obtener el siguiente.", "Ratio: the number each term is multiplied by to get the next one.") },
              { symbol: "n", meaning: t("Cuántos términos sumas.", "How many terms you add.") },
              { symbol: "r^n", meaning: t("La razón multiplicada por sí misma n veces.", "The ratio multiplied by itself n times.") },
            ],
            steps: [
              t("Identifica a (el primer término), r (siguiente ÷ anterior) y n (cuántos términos).", "Identify a (the first term), r (next ÷ previous) and n (how many terms)."),
              t("Calcula r^n y réstalo de 1.", "Compute r^n and subtract it from 1."),
              t("Divide ese resultado entre (1 − r).", "Divide that result by (1 − r)."),
              t("Multiplica por a.", "Multiply by a."),
            ],
            example: t("100 + 80 + 64: a = 100, r = 80 ÷ 100 = 0.8, n = 3. r³ = 0.512; 1 − 0.512 = 0.488; 1 − 0.8 = 0.2; 0.488 ÷ 0.2 = 2.44; 100 × 2.44 = **244**. Comprobación: 100 + 80 + 64 = 244.", "100 + 80 + 64: a = 100, r = 80 ÷ 100 = 0.8, n = 3. r³ = 0.512; 1 − 0.512 = 0.488; 1 − 0.8 = 0.2; 0.488 ÷ 0.2 = 2.44; 100 × 2.44 = **244**. Check: 100 + 80 + 64 = 244."),
            mistake: t("Escribir n × r en vez de r^n. La razón se multiplica por sí misma n veces, no se multiplica por n.", "Writing n × r instead of r^n. The ratio is multiplied by itself n times, not multiplied by n."),
          },
          {
            name: t("Suma de una serie geométrica infinita", "Sum of an infinite geometric series"),
            expression: "S∞ = a ÷ (1 − r), solo si |r| < 1",
            variables: [
              { symbol: "S∞", meaning: t("Hacia dónde se acerca la suma si sumas términos para siempre.", "Where the sum heads if you keep adding terms forever.") },
              { symbol: "a", meaning: t("Primer término.", "First term.") },
              { symbol: "r", meaning: t("Razón; debe estar entre −1 y 1 (|r| < 1) para que la suma no crezca sin fin.", "Ratio; it must be between −1 and 1 (|r| < 1) so the sum does not grow forever.") },
            ],
            steps: [
              t("Revisa que |r| < 1; si no, la suma no tiene límite.", "Check that |r| < 1; if not, the sum has no limit."),
              t("Calcula 1 − r.", "Compute 1 − r."),
              t("Divide el primer término entre ese número.", "Divide the first term by that number."),
            ],
            example: t("100 + 80 + 64 + … para siempre: a = 100, r = 0.8. 1 − 0.8 = 0.2; 100 ÷ 0.2 = **500**.", "100 + 80 + 64 + … forever: a = 100, r = 0.8. 1 − 0.8 = 0.2; 100 ÷ 0.2 = **500**."),
            interpret: t("Es la idea detrás de valuar un pago que nunca termina (una perpetuidad).", "It is the idea behind valuing a payment that never ends (a perpetuity)."),
          },
        ],
      },
    ],
    examples: [
      {
        title: t("Convertir rendimientos simples y logarítmicos", "Converting simple and log returns"),
        problem: t(
          "Un fondo hipotético reporta un rendimiento simple de 5 % en el año. Otro modelo te da un rendimiento logarítmico de 3 %. Convierte cada uno al otro tipo.",
          "A hypothetical fund reports a simple return of 5% for the year. Another model gives you a log return of 3%. Convert each one into the other type.",
        ),
        steps: [
          t("De simple a log: r = ln(1 + 0.05) = ln(1.05) ≈ 0.04879.", "From simple to log: r = ln(1 + 0.05) = ln(1.05) ≈ 0.04879."),
          t("Expresado en porcentaje: ≈ 4.88 % (un poco menos que 5 %).", "As a percentage: ≈ 4.88% (a bit less than 5%)."),
          t("De log a simple: R = e^0.03 − 1 ≈ 1.030455 − 1 = 0.030455.", "From log to simple: R = e^0.03 − 1 ≈ 1.030455 − 1 = 0.030455."),
          t("Expresado en porcentaje: ≈ 3.05 % (un poco más que 3 %).", "As a percentage: ≈ 3.05% (a bit more than 3%)."),
        ],
        result: t(
          "5 % simple ≈ 4.88 % log, y 3 % log ≈ 3.05 % simple. El log siempre es menor o igual que el simple equivalente.",
          "5% simple ≈ 4.88% log, and 3% log ≈ 3.05% simple. The log return is always less than or equal to the equivalent simple return.",
        ),
      },
      {
        title: t("Suma de factores de descuento con serie geométrica", "Adding discount factors with a geometric series"),
        problem: t(
          "Calcula la suma de los factores de descuento 1/1.1 + 1/1.1² + 1/1.1³ con la fórmula de la serie geométrica (tasa hipotética de 10 %).",
          "Compute the sum of the discount factors 1/1.1 + 1/1.1² + 1/1.1³ with the geometric series formula (hypothetical 10% rate).",
        ),
        steps: [
          t("Identifica: primer término a = 1/1.1 ≈ 0.909091; razón r = 1/1.1; n = 3.", "Identify: first term a = 1/1.1 ≈ 0.909091; ratio r = 1/1.1; n = 3."),
          t("r³ = 1/1.331 ≈ 0.751315, y 1 − r = 1 − 0.909091 = 0.090909.", "r³ = 1/1.331 ≈ 0.751315, and 1 − r = 1 − 0.909091 = 0.090909."),
          t("S = 0.909091 × (1 − 0.751315) / 0.090909 = 0.909091 × 2.73554 ≈ 2.48685.", "S = 0.909091 × (1 − 0.751315) / 0.090909 = 0.909091 × 2.73554 ≈ 2.48685."),
          t("Comprobación término por término: 0.909091 + 0.826446 + 0.751315 = 2.486852.", "Term-by-term check: 0.909091 + 0.826446 + 0.751315 = 2.486852."),
        ],
        result: t(
          "La suma es ≈ 2.4869: recibir $1 al final de cada uno de 3 años vale hoy ≈ $2.49 a esa tasa.",
          "The sum is ≈ 2.4869: receiving $1 at the end of each of 3 years is worth ≈ $2.49 today at that rate.",
        ),
      },
    ],
    keyPoints: [
      t("Rendimiento simple: R = P1/P0 − 1. Logarítmico: r = ln(P1/P0).", "Simple return: R = P1/P0 − 1. Log return: r = ln(P1/P0)."),
      t("Los rendimientos log se suman en el tiempo; los simples se multiplican como (1 + R).", "Log returns add up over time; simple returns multiply as (1 + R)."),
      t("Subir y luego bajar el mismo porcentaje te deja abajo del punto de partida.", "Rising and then falling by the same percentage leaves you below your starting point."),
      t("Capitalización continua: M = C × e^(i·t); el logaritmo sirve para despejar tiempo o tasa.", "Continuous compounding: M = C × e^(i·t); the logarithm helps you solve for time or rate."),
      t("Serie geométrica: S = a(1 − r^n)/(1 − r), y tiende a a/(1 − r) si |r| < 1.", "Geometric series: S = a(1 − r^n)/(1 − r), and it tends to a/(1 − r) if |r| < 1."),
    ],
    normativeNote: NOTE_HYPO_MATH,
    exerciseIds: ['CUA-01-E1', 'CUA-01-E2', 'CUA-01-E3', 'CUA-01-E4', 'CUA-01-E5', 'CUA-01-E6'],
  },

  // ═════════════════════════ CUA-02 ═════════════════════════
  {
    id: 'CUA-02',
    level: 6,
    topicIds: ['CUA.2'],
    title: t("Álgebra lineal y cálculo aplicado", "Applied linear algebra and calculus"),
    summary: t(
      "Los vectores y matrices permiten manejar muchos activos a la vez, y la derivada mide qué tan sensible es un resultado financiero a un cambio pequeño, lo que ayuda a encontrar máximos y mínimos.",
      "Vectors and matrices let you handle many assets at once, and the derivative measures how sensitive a financial result is to a small change, which helps you find maxima and minima.",
    ),
    minutes: 18,
    objectives: [
      t("Representar un portafolio como vector y calcular su rendimiento con el producto punto.", "Represent a portfolio as a vector and compute its return with the dot product."),
      t("Multiplicar matrices, revisar sus dimensiones y resolver un sistema 2×2 con la inversa.", "Multiply matrices, check their dimensions and solve a 2×2 system with the inverse."),
      t("Interpretar la derivada como sensibilidad y usarla para encontrar un óptimo.", "Interpret the derivative as sensitivity and use it to find an optimum."),
    ],
    theory: [
      {
        heading: t("Vectores y producto punto: el portafolio en una línea", "Vectors and the dot product: the portfolio in one line"),
        body: [
          t(
            "Un **vector** es una lista ordenada de números. En finanzas, el vector de **pesos** w = (0.5, 0.3, 0.2) dice qué parte de tu dinero está en cada activo: 50 % en el primero, 30 % en el segundo y 20 % en el tercero. Los pesos suman 1.",
            "A **vector** is an ordered list of numbers. In finance, the **weights** vector w = (0.5, 0.3, 0.2) says what share of your money is in each asset: 50% in the first, 30% in the second and 20% in the third. The weights add up to 1.",
          ),
          t(
            "El **producto punto** multiplica elemento por elemento y suma todo: w · R = w1·R1 + w2·R2 + … Si R es el vector de rendimientos de cada activo, el producto punto te da el **rendimiento del portafolio** en una sola operación.",
            "The **dot product** multiplies element by element and adds everything: w · R = w1·R1 + w2·R2 + … If R is the vector of each asset's returns, the dot product gives you the **portfolio return** in a single operation.",
          ),
          t(
            "Mini ejemplo: pesos (0.6, 0.4) y rendimientos (10 %, 5 %): 0.6 × 10 + 0.4 × 5 = 6 + 2 = **8 %**. Con 500 acciones la idea es la misma; la computadora solo hace más multiplicaciones.",
            "Mini example: weights (0.6, 0.4) and returns (10%, 5%): 0.6 × 10 + 0.4 × 5 = 6 + 2 = **8%**. With 500 stocks the idea is the same; the computer just does more multiplications.",
          ),
        ],
        formulas: [
          {
            name: t("Rendimiento del portafolio (producto punto)", "Portfolio return (dot product)"),
            expression: "Rp = w · R = w1 × R1 + w2 × R2 + … + wn × Rn",
            variables: [
              { symbol: "Rp", meaning: t("Rendimiento del portafolio, en %.", "Portfolio return, in %.") },
              { symbol: "w1, w2, …", meaning: t("Pesos: qué parte de tu dinero está en cada activo, en decimal; deben sumar 1.", "Weights: what share of your money is in each asset, as decimals; they must add up to 1.") },
              { symbol: "R1, R2, …", meaning: t("Rendimiento de cada activo, en %.", "Return of each asset, in %.") },
            ],
            steps: [
              t("Revisa que los pesos sumen 1 (o 100 %).", "Check that the weights add up to 1 (or 100%)."),
              t("Multiplica cada peso por el rendimiento de su activo, respetando los signos negativos.", "Multiply each weight by its asset's return, keeping negative signs."),
              t("Suma todos los productos.", "Add up all the products."),
            ],
            example: t("Pesos (0.7, 0.3) y rendimientos (12 %, −2 %): 0.7 × 12 = 8.4; 0.3 × (−2) = −0.6; 8.4 − 0.6 = **7.8 %**.", "Weights (0.7, 0.3) and returns (12%, −2%): 0.7 × 12 = 8.4; 0.3 × (−2) = −0.6; 8.4 − 0.6 = **7.8%**."),
            mistake: t("Promediar los rendimientos sin pesos: (12 − 2) ÷ 2 = 5 % ignora que tienes más dinero en el primer activo.", "Averaging the returns without weights: (12 − 2) ÷ 2 = 5% ignores that you have more money in the first asset."),
          },
        ],
      },
      {
        heading: t("Matrices, multiplicación e inversa", "Matrices, multiplication and the inverse"),
        body: [
          t(
            "Una **matriz** es una tabla de números con filas y columnas; su tamaño se escribe filas × columnas. Por ejemplo, una tabla con 250 días (filas) y 3 acciones (columnas) es una matriz de 250 × 3.",
            "A **matrix** is a table of numbers with rows and columns; its size is written rows × columns. For example, a table with 250 days (rows) and 3 stocks (columns) is a 250 × 3 matrix.",
          ),
          t(
            "Para multiplicar A × B, el número de **columnas de A** debe ser igual al de **filas de B**. Si A es m × n y B es n × p, el resultado es m × p. Ojo: en general **A × B ≠ B × A**; el orden importa.",
            "To multiply A × B, the number of **columns of A** must equal the number of **rows of B**. If A is m × n and B is n × p, the result is m × p. Careful: in general **A × B ≠ B × A**; order matters.",
          ),
          t(
            "La **inversa** A⁻¹ es la matriz que \"deshace\" a A: A × A⁻¹ = I (la identidad, el \"1\" de las matrices). Sirve para resolver sistemas de ecuaciones A·x = b como x = A⁻¹·b. Para una 2 × 2 [[a, b], [c, d]], solo existe si el **determinante** ad − bc no es cero.",
            "The **inverse** A⁻¹ is the matrix that \"undoes\" A: A × A⁻¹ = I (the identity, the \"1\" of matrices). It is used to solve systems of equations A·x = b as x = A⁻¹·b. For a 2 × 2 [[a, b], [c, d]], it only exists if the **determinant** ad − bc is not zero.",
          ),
          t(
            "Mini ejemplo: [[2, 1], [1, 1]] tiene determinante 2 × 1 − 1 × 1 = 1, así que su inversa es [[1, −1], [−1, 2]]. Puedes comprobar que al multiplicarlas da la identidad.",
            "Mini example: [[2, 1], [1, 1]] has determinant 2 × 1 − 1 × 1 = 1, so its inverse is [[1, −1], [−1, 2]]. You can check that multiplying them gives the identity.",
          ),
        ],
        formulas: [
          {
            name: t("Tamaño del producto de dos matrices", "Size of the product of two matrices"),
            expression: "(m × n) × (n × p) = (m × p)",
            variables: [
              { symbol: "m", meaning: t("Filas de la primera matriz.", "Rows of the first matrix.") },
              { symbol: "n", meaning: t("Columnas de la primera = filas de la segunda; deben ser iguales.", "Columns of the first = rows of the second; they must be equal.") },
              { symbol: "p", meaning: t("Columnas de la segunda matriz.", "Columns of the second matrix.") },
            ],
            steps: [
              t("Escribe los tamaños en orden: (filas × columnas) de A y luego de B.", "Write the sizes in order: (rows × columns) of A and then of B."),
              t("Compara los números de en medio: si no son iguales, no se puede multiplicar.", "Compare the middle numbers: if they are not equal, you cannot multiply."),
              t("Si coinciden, el resultado toma los números de las orillas: filas de A × columnas de B.", "If they match, the result takes the outer numbers: rows of A × columns of B."),
            ],
            example: t("A es 2 × 3 y B es 3 × 5: los de en medio (3 y 3) coinciden, así que A × B es **2 × 5**. Si B fuera 4 × 5, no se podría (3 ≠ 4).", "A is 2 × 3 and B is 3 × 5: the middle ones (3 and 3) match, so A × B is **2 × 5**. If B were 4 × 5, it would not work (3 ≠ 4)."),
            mistake: t("Pensar que el resultado conserva el número que coincide, o cambiar el orden: B × A puede no existir aunque A × B sí.", "Thinking the result keeps the matching number, or swapping the order: B × A may not exist even if A × B does."),
          },
          {
            name: t("Determinante e inversa de una matriz 2 × 2", "Determinant and inverse of a 2 × 2 matrix"),
            expression: "A = [[a, b], [c, d]]     det = a·d − b·c     A⁻¹ = (1 ÷ det) × [[d, −b], [−c, a]]",
            variables: [
              { symbol: "a, b, c, d", meaning: t("Los cuatro números de la matriz: a y b en la fila de arriba, c y d en la de abajo.", "The four numbers of the matrix: a and b in the top row, c and d in the bottom row.") },
              { symbol: "det", meaning: t("Determinante: un solo número que dice si la matriz tiene inversa (si es 0, no la tiene).", "Determinant: a single number that tells whether the matrix has an inverse (if it is 0, it does not).") },
              { symbol: "A⁻¹", meaning: t("Inversa: la matriz que \"deshace\" a A.", "Inverse: the matrix that \"undoes\" A.") },
            ],
            steps: [
              t("Calcula det = a × d − b × c (diagonal principal menos la otra diagonal).", "Compute det = a × d − b × c (main diagonal minus the other diagonal)."),
              t("Si det = 0, detente: no hay inversa.", "If det = 0, stop: there is no inverse."),
              t("Intercambia a y d de lugar y cambia el signo de b y c.", "Swap a and d and change the sign of b and c."),
              t("Divide cada número entre det.", "Divide each number by det."),
            ],
            example: t("A = [[3, 1], [2, 4]]: det = 3 × 4 − 1 × 2 = 12 − 2 = 10. Intercambiar y cambiar signos: [[4, −1], [−2, 3]]. Entre 10: A⁻¹ = **[[0.4, −0.1], [−0.2, 0.3]]**.", "A = [[3, 1], [2, 4]]: det = 3 × 4 − 1 × 2 = 12 − 2 = 10. Swap and change signs: [[4, −1], [−2, 3]]. Divided by 10: A⁻¹ = **[[0.4, −0.1], [−0.2, 0.3]]**."),
            mistake: t("Calcular el determinante como a·d + b·c, u olvidar cambiar el signo de b y c.", "Computing the determinant as a·d + b·c, or forgetting to change the sign of b and c."),
          },
          {
            name: t("Resolver un sistema 2 × 2 con la inversa", "Solving a 2 × 2 system with the inverse"),
            expression: "A·x = b  →  x = A⁻¹·b",
            variables: [
              { symbol: "A", meaning: t("Matriz con los coeficientes de las incógnitas.", "Matrix with the coefficients of the unknowns.") },
              { symbol: "x", meaning: t("Vector de incógnitas (x, y) que buscas.", "Vector of unknowns (x, y) you are looking for.") },
              { symbol: "b", meaning: t("Vector con los resultados de cada ecuación (lo que va después del =).", "Vector with each equation's result (what comes after the =).") },
              { symbol: "A⁻¹", meaning: t("Inversa de A, calculada con la fórmula anterior.", "Inverse of A, computed with the previous formula.") },
            ],
            steps: [
              t("Escribe las ecuaciones como matriz A y vector b.", "Write the equations as a matrix A and a vector b."),
              t("Calcula det y A⁻¹.", "Compute det and A⁻¹."),
              t("Multiplica cada fila de A⁻¹ por b (fila × columna) para obtener x y luego y.", "Multiply each row of A⁻¹ by b (row × column) to get x and then y."),
              t("Comprueba sustituyendo x y y en las ecuaciones originales.", "Check by plugging x and y into the original equations."),
            ],
            example: t("3x + y = 11 y 2x + 4y = 14. A = [[3, 1], [2, 4]], det = 10, b = (11, 14). x = (4 × 11 − 1 × 14) ÷ 10 = 30 ÷ 10 = **3**; y = (−2 × 11 + 3 × 14) ÷ 10 = 20 ÷ 10 = **2**. Comprobación: 3(3) + 2 = 11 y 2(3) + 4(2) = 14.", "3x + y = 11 and 2x + 4y = 14. A = [[3, 1], [2, 4]], det = 10, b = (11, 14). x = (4 × 11 − 1 × 14) ÷ 10 = 30 ÷ 10 = **3**; y = (−2 × 11 + 3 × 14) ÷ 10 = 20 ÷ 10 = **2**. Check: 3(3) + 2 = 11 and 2(3) + 4(2) = 14."),
            mistake: t("Multiplicar b × A⁻¹ en vez de A⁻¹ × b: con matrices el orden importa.", "Multiplying b × A⁻¹ instead of A⁻¹ × b: with matrices order matters."),
          },
        ],
        bullets: [
          t("Dimensiones compatibles: (m × n) × (n × p) = (m × p).", "Compatible dimensions: (m × n) × (n × p) = (m × p)."),
          t("La identidad I tiene 1 en la diagonal y 0 en lo demás.", "The identity I has 1s on the diagonal and 0s elsewhere."),
          t("Determinante cero = no hay inversa (el sistema no tiene solución única).", "Zero determinant = no inverse (the system has no unique solution)."),
          t("La matriz de covarianzas de varios activos es cuadrada y simétrica.", "The covariance matrix of several assets is square and symmetric."),
        ],
      },
      {
        heading: t("Derivadas: sensibilidad y óptimos", "Derivatives: sensitivity and optima"),
        body: [
          t(
            "La **derivada** f'(x) mide cuánto cambia una función cuando x cambia un poquito: es la **pendiente** en ese punto. En finanzas se usa como **sensibilidad**: cuánto cambia el precio de un bono si la tasa sube un poco, o cuánto cambia la ganancia si vendes una unidad más.",
            "The **derivative** f'(x) measures how much a function changes when x changes a tiny bit: it is the **slope** at that point. In finance it is used as **sensitivity**: how much a bond's price changes if the rate rises a little, or how much profit changes if you sell one more unit.",
          ),
          t(
            "Reglas básicas: la derivada de una constante es 0; la de x^n es n·x^(n−1); la de e^x es e^x; la de ln x es 1/x. Con eso resuelves la mayoría de los casos iniciales.",
            "Basic rules: the derivative of a constant is 0; that of x^n is n·x^(n−1); that of e^x is e^x; that of ln x is 1/x. With these you can solve most introductory cases.",
          ),
          t(
            "Para **maximizar o minimizar**, buscas donde la pendiente es cero: f'(x) = 0. Si la función tiene forma de montaña (como una ganancia que primero sube y luego baja), ese punto es el **máximo**. La **integral** es la operación inversa: acumula cambios, como sumar flujos a lo largo del tiempo.",
            "To **maximize or minimize**, you look for where the slope is zero: f'(x) = 0. If the function is hill-shaped (like a profit that first rises and then falls), that point is the **maximum**. The **integral** is the inverse operation: it accumulates changes, like adding flows over time.",
          ),
          t(
            "Mini ejemplo: f(x) = x², f'(x) = 2x. En x = 3 la pendiente es 6: si x pasa de 3 a 3.1, f sube aproximadamente 6 × 0.1 = **0.6** (el cambio exacto es 9.61 − 9 = 0.61).",
            "Mini example: f(x) = x², f'(x) = 2x. At x = 3 the slope is 6: if x goes from 3 to 3.1, f rises approximately 6 × 0.1 = **0.6** (the exact change is 9.61 − 9 = 0.61).",
          ),
        ],
        formulas: [
          {
            name: t("Cambio aproximado con la derivada", "Approximate change with the derivative"),
            expression: "Δf ≈ f'(x) × Δx",
            variables: [
              { symbol: "Δf", meaning: t("Cuánto cambia el resultado (Δ se lee \"cambio en\").", "How much the result changes (Δ reads \"change in\").") },
              { symbol: "f'(x)", meaning: t("Derivada: la pendiente o sensibilidad en el punto x.", "Derivative: the slope or sensitivity at point x.") },
              { symbol: "Δx", meaning: t("Cambio pequeño en x.", "Small change in x.") },
            ],
            steps: [
              t("Deriva la función con las reglas básicas (por ejemplo, x^n → n·x^(n−1)).", "Differentiate the function with the basic rules (for example, x^n → n·x^(n−1))."),
              t("Evalúa la derivada en el punto actual x.", "Evaluate the derivative at the current point x."),
              t("Multiplícala por el cambio pequeño Δx.", "Multiply it by the small change Δx."),
            ],
            example: t("f(x) = x³, x = 2, Δx = 0.1. f'(x) = 3x² → 3 × 2² = 12. Δf ≈ 12 × 0.1 = **1.2**. El cambio exacto es 2.1³ − 2³ = 9.261 − 8 = 1.261: muy parecido.", "f(x) = x³, x = 2, Δx = 0.1. f'(x) = 3x² → 3 × 2² = 12. Δf ≈ 12 × 0.1 = **1.2**. The exact change is 2.1³ − 2³ = 9.261 − 8 = 1.261: very close."),
            interpret: t("Funciona bien para cambios pequeños; con cambios grandes el error crece.", "It works well for small changes; with large changes the error grows."),
          },
          {
            name: t("Encontrar el óptimo (máximo o mínimo)", "Finding the optimum (maximum or minimum)"),
            expression: "f'(x) = 0     derivada de k·x^n = n·k·x^(n−1)",
            variables: [
              { symbol: "f'(x)", meaning: t("Derivada de la función (la pendiente).", "Derivative of the function (the slope).") },
              { symbol: "k", meaning: t("Número que multiplica a x (coeficiente).", "Number multiplying x (coefficient).") },
              { symbol: "n", meaning: t("Exponente de x; la derivada de una constante es 0.", "Exponent of x; the derivative of a constant is 0.") },
            ],
            steps: [
              t("Deriva término por término: baja el exponente a multiplicar y réstale 1.", "Differentiate term by term: bring the exponent down to multiply and subtract 1 from it."),
              t("Iguala la derivada a cero y despeja x.", "Set the derivative to zero and solve for x."),
              t("Si el término con x² es negativo, la curva es una montaña y el punto es un máximo; si es positivo, es un valle (mínimo).", "If the x² term is negative, the curve is a hill and the point is a maximum; if positive, it is a valley (minimum)."),
              t("Sustituye x en la función original para obtener el valor óptimo.", "Plug x into the original function to get the optimal value."),
            ],
            example: t("Ganancia G(q) = −3q² + 60q − 100. G'(q) = −6q + 60. −6q + 60 = 0 → q = 60 ÷ 6 = **10**. Como −3q² es negativo, es máximo: G(10) = −300 + 600 − 100 = **200**.", "Profit G(q) = −3q² + 60q − 100. G'(q) = −6q + 60. −6q + 60 = 0 → q = 60 ÷ 6 = **10**. Since −3q² is negative, it is a maximum: G(10) = −300 + 600 − 100 = **200**."),
            mistake: t("Derivar −3q² como −3q, sin multiplicar por el exponente 2.", "Differentiating −3q² as −3q, without multiplying by the exponent 2."),
          },
        ],
      },
    ],
    examples: [
      {
        title: t("Rendimiento del portafolio en dos escenarios con una matriz", "Portfolio return in two scenarios with a matrix"),
        problem: t(
          "Un portafolio hipotético tiene pesos w = (0.6, 0.4). La matriz de rendimientos tiene una fila por escenario: escenario 1 = (8 %, 2 %) y escenario 2 = (−4 %, 3 %). ¿Cuánto rinde el portafolio en cada escenario?",
          "A hypothetical portfolio has weights w = (0.6, 0.4). The returns matrix has one row per scenario: scenario 1 = (8%, 2%) and scenario 2 = (−4%, 3%). What does the portfolio return in each scenario?",
        ),
        steps: [
          t("La matriz es 2 × 2 (escenarios × activos) y w es un vector de 2: la multiplicación R × w da un vector de 2 resultados.", "The matrix is 2 × 2 (scenarios × assets) and w is a 2-vector: the product R × w gives a vector of 2 results."),
          t("Escenario 1: 0.6 × 8 + 0.4 × 2 = 4.8 + 0.8 = 5.6 %.", "Scenario 1: 0.6 × 8 + 0.4 × 2 = 4.8 + 0.8 = 5.6%."),
          t("Escenario 2: 0.6 × (−4) + 0.4 × 3 = −2.4 + 1.2 = −1.2 %.", "Scenario 2: 0.6 × (−4) + 0.4 × 3 = −2.4 + 1.2 = −1.2%."),
        ],
        result: t(
          "El portafolio rinde 5.6 % en el escenario 1 y −1.2 % en el escenario 2. Cada fila de la matriz se multiplica por el vector de pesos.",
          "The portfolio returns 5.6% in scenario 1 and −1.2% in scenario 2. Each row of the matrix is multiplied by the weights vector.",
        ),
      },
      {
        title: t("Precio que maximiza el ingreso", "Price that maximizes revenue"),
        problem: t(
          "Una tienda en línea estima que vende q = 1,000 − 20p unidades al precio p (datos hipotéticos). Su ingreso es I(p) = p × q = 1,000p − 20p². ¿Qué precio maximiza el ingreso?",
          "An online store estimates it sells q = 1,000 − 20p units at price p (hypothetical data). Its revenue is I(p) = p × q = 1,000p − 20p². What price maximizes revenue?",
        ),
        steps: [
          t("Deriva: I'(p) = 1,000 − 40p.", "Differentiate: I'(p) = 1,000 − 40p."),
          t("Iguala a cero: 1,000 − 40p = 0 → p = 25.", "Set it to zero: 1,000 − 40p = 0 → p = 25."),
          t("Unidades vendidas: q = 1,000 − 20 × 25 = 500.", "Units sold: q = 1,000 − 20 × 25 = 500."),
          t("Ingreso máximo: 25 × 500 = $12,500. Como el término −20p² es negativo, la curva tiene forma de montaña y es un máximo.", "Maximum revenue: 25 × 500 = $12,500. Since the −20p² term is negative, the curve is hill-shaped and it is a maximum."),
        ],
        result: t("El precio óptimo es $25 y el ingreso máximo, $12,500.", "The optimal price is $25 and the maximum revenue is $12,500."),
      },
    ],
    keyPoints: [
      t("El rendimiento de un portafolio es el producto punto de pesos y rendimientos.", "A portfolio's return is the dot product of weights and returns."),
      t("Solo puedes multiplicar A × B si columnas de A = filas de B; el orden importa.", "You can only multiply A × B if columns of A = rows of B; order matters."),
      t("Una matriz 2 × 2 tiene inversa solo si su determinante ad − bc es distinto de cero.", "A 2 × 2 matrix has an inverse only if its determinant ad − bc is nonzero."),
      t("La derivada es la sensibilidad: cambio aproximado = derivada × cambio pequeño.", "The derivative is sensitivity: approximate change = derivative × small change."),
      t("Los óptimos se buscan donde la derivada es cero.", "Optima are found where the derivative is zero."),
    ],
    exerciseIds: ['CUA-02-E1', 'CUA-02-E2', 'CUA-02-E3', 'CUA-02-E4', 'CUA-02-E5', 'CUA-02-E6'],
  },

  // ═════════════════════════ CUA-03 ═════════════════════════
  {
    id: 'CUA-03',
    level: 6,
    topicIds: ['CUA.3'],
    title: t("Probabilidad y estadística avanzada", "Advanced probability and statistics"),
    summary: t(
      "Para medir riesgo describes los rendimientos como variables aleatorias: su valor esperado, su dispersión, cómo se mueven juntos dos activos y qué tan bien (o mal) los describe la distribución normal.",
      "To measure risk you describe returns as random variables: their expected value, their dispersion, how two assets move together and how well (or poorly) the normal distribution describes them.",
    ),
    minutes: 18,
    objectives: [
      t("Calcular valor esperado, varianza y desviación estándar de un rendimiento con escenarios.", "Compute the expected value, variance and standard deviation of a return using scenarios."),
      t("Interpretar covarianza y correlación entre dos activos.", "Interpret covariance and correlation between two assets."),
      t("Usar la distribución normal, el puntaje z y la regla 68-95-99.7, y reconocer sus límites (colas pesadas).", "Use the normal distribution, the z-score and the 68-95-99.7 rule, and recognize their limits (fat tails)."),
    ],
    theory: [
      {
        heading: t("Variables aleatorias: valor esperado y dispersión", "Random variables: expected value and dispersion"),
        body: [
          t(
            "Una **variable aleatoria** es un número cuyo valor todavía no conoces porque depende del azar, como el rendimiento de una acción el próximo año. La describes con sus posibles valores y la **probabilidad** de cada uno.",
            "A **random variable** is a number whose value you do not know yet because it depends on chance, like a stock's return next year. You describe it with its possible values and the **probability** of each one.",
          ),
          t(
            "El **valor esperado** E[X] es el promedio ponderado por probabilidad: lo que obtendrías \"en promedio\" si repitieras la situación muchas veces. La **varianza** mide qué tan lejos caen los resultados del promedio (promedio de las distancias al cuadrado) y la **desviación estándar** σ es su raíz cuadrada, en las mismas unidades que el rendimiento.",
            "The **expected value** E[X] is the probability-weighted average: what you would get \"on average\" if you repeated the situation many times. The **variance** measures how far outcomes fall from the average (average squared distance) and the **standard deviation** σ is its square root, in the same units as the return.",
          ),
          t(
            "En finanzas, σ es la medida más usada de **volatilidad** o riesgo total: dos inversiones con el mismo rendimiento esperado no son iguales si una brinca mucho más que la otra.",
            "In finance, σ is the most used measure of **volatility** or total risk: two investments with the same expected return are not equal if one jumps around much more than the other.",
          ),
          t(
            "Mini ejemplo: una apuesta paga +20 % con probabilidad 0.6 y −10 % con 0.4. E = 0.6 × 20 + 0.4 × (−10) = **8 %**.",
            "Mini example: a bet pays +20% with probability 0.6 and −10% with 0.4. E = 0.6 × 20 + 0.4 × (−10) = **8%**.",
          ),
        ],
        formulas: [
          {
            name: t("Valor esperado", "Expected value"),
            expression: "E[X] = p1 × x1 + p2 × x2 + … = Σ pi × xi",
            variables: [
              { symbol: "E[X]", meaning: t("Rendimiento promedio que esperas, en %.", "Average return you expect, in %.") },
              { symbol: "pi", meaning: t("Probabilidad de cada escenario, en decimal; todas suman 1.", "Probability of each scenario, as a decimal; they all add up to 1.") },
              { symbol: "xi", meaning: t("Rendimiento en cada escenario, en %.", "Return in each scenario, in %.") },
              { symbol: "Σ", meaning: t("\"Suma todos\".", "\"Add them all\".") },
            ],
            steps: [
              t("Revisa que las probabilidades sumen 1.", "Check that the probabilities add up to 1."),
              t("Multiplica cada rendimiento por su probabilidad.", "Multiply each return by its probability."),
              t("Suma los resultados.", "Add up the results."),
            ],
            example: t("Escenarios: 15 % con 0.3, 4 % con 0.5 y −10 % con 0.2. 0.3 × 15 = 4.5; 0.5 × 4 = 2; 0.2 × (−10) = −2. E = 4.5 + 2 − 2 = **4.5 %**.", "Scenarios: 15% with 0.3, 4% with 0.5 and −10% with 0.2. 0.3 × 15 = 4.5; 0.5 × 4 = 2; 0.2 × (−10) = −2. E = 4.5 + 2 − 2 = **4.5%**."),
            mistake: t("Sacar un promedio simple sin probabilidades: (15 + 4 − 10) ÷ 3 = 3 % no es el valor esperado.", "Taking a plain average without probabilities: (15 + 4 − 10) ÷ 3 = 3% is not the expected value."),
          },
          {
            name: t("Varianza y desviación estándar", "Variance and standard deviation"),
            expression: "Var(X) = Σ pi × (xi − E[X])²     σ = √Var(X)",
            variables: [
              { symbol: "Var(X)", meaning: t("Varianza: promedio ponderado de las distancias al cuadrado; queda en %².", "Variance: weighted average of the squared distances; it is in %².") },
              { symbol: "σ", meaning: t("Desviación estándar (volatilidad), en %; es la raíz de la varianza.", "Standard deviation (volatility), in %; it is the square root of the variance.") },
              { symbol: "pi, xi", meaning: t("Probabilidad y rendimiento de cada escenario.", "Probability and return of each scenario.") },
              { symbol: "E[X]", meaning: t("Valor esperado calculado antes.", "Expected value computed before.") },
            ],
            steps: [
              t("Calcula primero E[X].", "First compute E[X]."),
              t("Resta E[X] a cada rendimiento: xi − E[X].", "Subtract E[X] from each return: xi − E[X]."),
              t("Eleva cada distancia al cuadrado y multiplícala por su probabilidad.", "Square each distance and multiply it by its probability."),
              t("Suma todo: esa es la varianza.", "Add everything up: that is the variance."),
              t("Saca raíz cuadrada para obtener σ en %.", "Take the square root to get σ in %."),
            ],
            example: t("Con los escenarios anteriores (E = 4.5 %): distancias 10.5, −0.5 y −14.5. Al cuadrado: 110.25, 0.25 y 210.25. Por probabilidad: 0.3 × 110.25 = 33.075; 0.5 × 0.25 = 0.125; 0.2 × 210.25 = 42.05. Var = 33.075 + 0.125 + 42.05 = 75.25; σ = √75.25 ≈ **8.67 %**.", "With the scenarios above (E = 4.5%): distances 10.5, −0.5 and −14.5. Squared: 110.25, 0.25 and 210.25. Times probability: 0.3 × 110.25 = 33.075; 0.5 × 0.25 = 0.125; 0.2 × 210.25 = 42.05. Var = 33.075 + 0.125 + 42.05 = 75.25; σ = √75.25 ≈ **8.67%**."),
            interpret: t("Mayor σ = resultados más dispersos = más riesgo.", "Higher σ = more spread-out outcomes = more risk."),
            mistake: t("Olvidar multiplicar cada distancia al cuadrado por su probabilidad, o reportar la varianza (75.25) como si fuera σ.", "Forgetting to multiply each squared distance by its probability, or reporting the variance (75.25) as if it were σ."),
          },
        ],
      },
      {
        heading: t("Covarianza y correlación", "Covariance and correlation"),
        body: [
          t(
            "La **covarianza** dice si dos variables tienden a moverse en la misma dirección (positiva) o en direcciones opuestas (negativa). El problema es que su tamaño depende de las unidades, así que es difícil decir si es \"mucha\" o \"poca\".",
            "**Covariance** tells whether two variables tend to move in the same direction (positive) or in opposite directions (negative). The problem is that its size depends on the units, so it is hard to say whether it is \"a lot\" or \"a little\".",
          ),
          t(
            "La **correlación** ρ resuelve eso: divide la covarianza entre el producto de las desviaciones estándar y siempre queda entre **−1 y +1**. +1 es movimiento idéntico, −1 es movimiento exactamente opuesto y 0 es **ninguna relación lineal**.",
            "**Correlation** ρ solves that: it divides the covariance by the product of the standard deviations and always lies between **−1 and +1**. +1 is identical movement, −1 is exactly opposite movement and 0 is **no linear relationship**.",
          ),
          t(
            "Cuidado: correlación cero no significa que las variables sean independientes; puede haber una relación no lineal. Y en crisis, muchas correlaciones entre activos de riesgo tienden a subir justo cuando más necesitas diversificar.",
            "Careful: zero correlation does not mean the variables are independent; there can be a nonlinear relationship. And in crises, many correlations between risky assets tend to rise just when you most need diversification.",
          ),
          t(
            "Mini ejemplo hipotético: σA = 20 %, σB = 10 % y ρ = −0.3. La covarianza es −0.3 × 0.20 × 0.10 = **−0.006**.",
            "Hypothetical mini example: σA = 20%, σB = 10% and ρ = −0.3. The covariance is −0.3 × 0.20 × 0.10 = **−0.006**.",
          ),
        ],
        formulas: [
          {
            name: t("Correlación y covarianza", "Correlation and covariance"),
            expression: "ρ = Cov(A, B) ÷ (σA × σB)     Cov(A, B) = ρ × σA × σB",
            variables: [
              { symbol: "ρ", meaning: t("Correlación (letra \"ro\"): de −1 a +1, sin unidades.", "Correlation (letter \"rho\"): from −1 to +1, no units.") },
              { symbol: "Cov(A, B)", meaning: t("Covarianza: si A y B se mueven juntos (+) u opuestos (−).", "Covariance: whether A and B move together (+) or opposite (−).") },
              { symbol: "σA, σB", meaning: t("Desviación estándar de cada activo, en decimal (4 % = 0.04).", "Standard deviation of each asset, as a decimal (4% = 0.04).") },
            ],
            steps: [
              t("Escribe las desviaciones estándar en decimal, igual que la covarianza.", "Write the standard deviations as decimals, the same as the covariance."),
              t("Multiplica σA × σB.", "Multiply σA × σB."),
              t("Divide la covarianza entre ese producto (o, al revés, multiplica ρ × σA × σB para obtener la covarianza).", "Divide the covariance by that product (or, the other way, multiply ρ × σA × σB to get the covariance)."),
            ],
            example: t("Cov = 0.0009, σA = 3 % = 0.03 y σB = 6 % = 0.06. 0.03 × 0.06 = 0.0018; ρ = 0.0009 ÷ 0.0018 = **0.5**.", "Cov = 0.0009, σA = 3% = 0.03 and σB = 6% = 0.06. 0.03 × 0.06 = 0.0018; ρ = 0.0009 ÷ 0.0018 = **0.5**."),
            interpret: t("Cerca de +1: se mueven casi igual. Cerca de −1: opuestos. Cerca de 0: sin relación lineal.", "Near +1: they move almost the same. Near −1: opposite. Near 0: no linear relationship."),
            mistake: t("Mezclar unidades (σ en % y covarianza en decimal). Si te da un número fuera de −1 y +1, revisa las unidades.", "Mixing units (σ in % and covariance as a decimal). If you get a number outside −1 and +1, check the units."),
          },
        ],
      },
      {
        heading: t("Distribución normal, puntaje z y colas pesadas", "Normal distribution, z-score and fat tails"),
        body: [
          t(
            "La **distribución normal** es la famosa \"campana\": simétrica alrededor de su media μ y definida solo por μ y σ. Es el punto de partida de muchos modelos porque es fácil de usar.",
            "The **normal distribution** is the famous \"bell curve\": symmetric around its mean μ and defined only by μ and σ. It is the starting point of many models because it is easy to use.",
          ),
          t(
            "La **regla 68-95-99.7** dice que, en una normal, cerca del 68 % de los datos cae a ±1σ de la media, cerca del 95 % a ±2σ y cerca del 99.7 % a ±3σ. El **puntaje z** = (x − μ) / σ dice a cuántas desviaciones estándar está un dato de la media.",
            "The **68-95-99.7 rule** says that, in a normal, about 68% of the data falls within ±1σ of the mean, about 95% within ±2σ and about 99.7% within ±3σ. The **z-score** = (x − μ) / σ tells how many standard deviations a data point is from the mean.",
          ),
          t(
            "Los rendimientos reales suelen tener **colas pesadas** (curtosis alta): las caídas extremas pasan más seguido de lo que la normal predice. También pueden tener **asimetría** (sesgo), por ejemplo caídas más bruscas que las subidas. Usar la normal sin revisar esto **subestima** el riesgo extremo.",
            "Real returns usually have **fat tails** (high kurtosis): extreme drops happen more often than the normal predicts. They can also have **skewness**, for example sharper drops than rises. Using the normal without checking this **underestimates** extreme risk.",
          ),
          t(
            "Mini ejemplo: si un rendimiento mensual tiene μ = 1 % y σ = 4 %, un mes de −11 % tiene z = (−11 − 1) / 4 = **−3**: en una normal sería rarísimo; en mercados reales ocurre con más frecuencia.",
            "Mini example: if a monthly return has μ = 1% and σ = 4%, a month of −11% has z = (−11 − 1) / 4 = **−3**: under a normal it would be very rare; in real markets it happens more often.",
          ),
        ],
        formulas: [
          {
            name: t("Puntaje z", "z-score"),
            expression: "z = (x − μ) ÷ σ",
            variables: [
              { symbol: "z", meaning: t("A cuántas desviaciones estándar está el dato de la media (sin unidades).", "How many standard deviations the data point is from the mean (no units).") },
              { symbol: "x", meaning: t("El dato que quieres evaluar, en %.", "The data point you want to evaluate, in %.") },
              { symbol: "μ", meaning: t("Media o promedio (letra \"mu\"), en %.", "Mean or average (letter \"mu\"), in %.") },
              { symbol: "σ", meaning: t("Desviación estándar, en %.", "Standard deviation, in %.") },
            ],
            steps: [
              t("Resta la media al dato: x − μ.", "Subtract the mean from the data point: x − μ."),
              t("Divide entre σ.", "Divide by σ."),
              t("Conserva el signo: negativo = por debajo del promedio.", "Keep the sign: negative = below average."),
            ],
            example: t("μ = 0.5 %, σ = 3 % y un mes de −4 %: −4 − 0.5 = −4.5; −4.5 ÷ 3 = **−1.5**: quedó 1.5 desviaciones estándar abajo del promedio.", "μ = 0.5%, σ = 3% and a month of −4%: −4 − 0.5 = −4.5; −4.5 ÷ 3 = **−1.5**: it was 1.5 standard deviations below average."),
            interpret: t("|z| > 2 ya es poco común en una normal; |z| > 3 es rarísimo (aunque en mercados reales pasa más seguido).", "|z| > 2 is already uncommon under a normal; |z| > 3 is very rare (though in real markets it happens more often)."),
            mistake: t("Olvidar restar la media y dividir solo x ÷ σ.", "Forgetting to subtract the mean and just dividing x ÷ σ."),
          },
          {
            name: t("Rangos con la regla 68-95-99.7", "Ranges with the 68-95-99.7 rule"),
            expression: "Rango = μ ± k × σ     k = 1 → 68 %,  k = 2 → 95 %,  k = 3 → 99.7 %",
            variables: [
              { symbol: "μ", meaning: t("Media, en %.", "Mean, in %.") },
              { symbol: "σ", meaning: t("Desviación estándar, en %.", "Standard deviation, in %.") },
              { symbol: "k", meaning: t("Cuántas desviaciones estándar te alejas (1, 2 o 3).", "How many standard deviations you move away (1, 2 or 3).") },
              { symbol: "68 %, 95 %, 99.7 %", meaning: t("Parte aproximada de los datos que cae dentro del rango, si los datos son normales.", "Approximate share of the data inside the range, if the data are normal.") },
            ],
            steps: [
              t("Elige k según el porcentaje: 68 % → 1, 95 % → 2, 99.7 % → 3.", "Choose k by the percentage: 68% → 1, 95% → 2, 99.7% → 3."),
              t("Calcula k × σ.", "Compute k × σ."),
              t("Réstalo y súmalo a la media para tener los límites.", "Subtract it from and add it to the mean to get the bounds."),
              t("Lo que queda fuera se reparte por igual en las dos colas: (100 − porcentaje) ÷ 2.", "What falls outside splits equally into the two tails: (100 − percentage) ÷ 2."),
            ],
            example: t("μ = 0.5 % y σ = 3 %, al 95 %: 2 × 3 = 6; 0.5 − 6 = −5.5 % y 0.5 + 6 = 6.5 %. Cerca del 95 % de los meses cae **entre −5.5 % y 6.5 %**; la cola de abajo es (100 − 95) ÷ 2 = 2.5 %.", "μ = 0.5% and σ = 3%, at 95%: 2 × 3 = 6; 0.5 − 6 = −5.5% and 0.5 + 6 = 6.5%. About 95% of months fall **between −5.5% and 6.5%**; the lower tail is (100 − 95) ÷ 2 = 2.5%."),
            mistake: t("Confundir los niveles: 68 % es ±1σ, no ±2σ.", "Mixing up the levels: 68% is ±1σ, not ±2σ."),
          },
        ],
        bullets: [
          t("±1σ ≈ 68 % de los datos.", "±1σ ≈ 68% of the data."),
          t("±2σ ≈ 95 % de los datos.", "±2σ ≈ 95% of the data."),
          t("±3σ ≈ 99.7 % de los datos.", "±3σ ≈ 99.7% of the data."),
          t("Curtosis alta = colas pesadas = más eventos extremos de lo \"normal\".", "High kurtosis = fat tails = more extreme events than \"normal\"."),
        ],
      },
    ],
    examples: [
      {
        title: t("Valor esperado y desviación estándar de una apuesta", "Expected value and standard deviation of a bet"),
        problem: t(
          "Una inversión hipotética rinde +20 % con probabilidad 0.6 y −10 % con probabilidad 0.4. Calcula su valor esperado y su desviación estándar.",
          "A hypothetical investment returns +20% with probability 0.6 and −10% with probability 0.4. Compute its expected value and its standard deviation.",
        ),
        steps: [
          t("E = 0.6 × 20 + 0.4 × (−10) = 12 − 4 = 8 %.", "E = 0.6 × 20 + 0.4 × (−10) = 12 − 4 = 8%."),
          t("Distancias a la media: 20 − 8 = 12 y −10 − 8 = −18.", "Distances to the mean: 20 − 8 = 12 and −10 − 8 = −18."),
          t("Varianza = 0.6 × 12² + 0.4 × (−18)² = 0.6 × 144 + 0.4 × 324 = 86.4 + 129.6 = 216 (en %²).", "Variance = 0.6 × 12² + 0.4 × (−18)² = 0.6 × 144 + 0.4 × 324 = 86.4 + 129.6 = 216 (in %²)."),
          t("σ = √216 ≈ 14.70 %.", "σ = √216 ≈ 14.70%."),
        ],
        result: t(
          "Rendimiento esperado de 8 % con una desviación estándar de ≈ 14.70 %: en promedio gana, pero con bastante variación.",
          "Expected return of 8% with a standard deviation of ≈ 14.70%: on average it gains, but with considerable variation.",
        ),
      },
      {
        title: t("Rangos con la regla 68-95-99.7", "Ranges with the 68-95-99.7 rule"),
        problem: t(
          "Supón que el rendimiento mensual de un índice hipotético es normal con μ = 1 % y σ = 4 %. ¿Entre qué valores cae cerca del 95 % de los meses y qué probabilidad aproximada hay de un mes peor que −7 %?",
          "Suppose a hypothetical index's monthly return is normal with μ = 1% and σ = 4%. Between which values do about 95% of months fall, and what is the approximate probability of a month worse than −7%?",
        ),
        steps: [
          t("95 % ≈ ±2σ: 1 − 2 × 4 = −7 % y 1 + 2 × 4 = 9 %.", "95% ≈ ±2σ: 1 − 2 × 4 = −7% and 1 + 2 × 4 = 9%."),
          t("Fuera de ese rango queda ≈ 5 %, repartido en dos colas iguales (la normal es simétrica).", "About 5% falls outside that range, split into two equal tails (the normal is symmetric)."),
          t("La cola de abajo (peor que −7 %) es ≈ 5 % ÷ 2 = 2.5 %.", "The lower tail (worse than −7%) is ≈ 5% ÷ 2 = 2.5%."),
        ],
        result: t(
          "≈ 95 % de los meses cae entre −7 % y 9 %, y la probabilidad de un mes peor que −7 % es ≈ 2.5 % según la normal. Con colas pesadas, la probabilidad real podría ser mayor.",
          "≈ 95% of months fall between −7% and 9%, and the probability of a month worse than −7% is ≈ 2.5% under the normal. With fat tails, the real probability could be higher.",
        ),
      },
    ],
    keyPoints: [
      t("Valor esperado = promedio ponderado por probabilidad.", "Expected value = probability-weighted average."),
      t("La desviación estándar (raíz de la varianza) es la medida básica de volatilidad.", "The standard deviation (square root of variance) is the basic measure of volatility."),
      t("La correlación va de −1 a +1 y solo mide relación lineal.", "Correlation ranges from −1 to +1 and only measures linear relationship."),
      t("El puntaje z dice a cuántas σ de la media está un dato.", "The z-score tells how many σ a data point is from the mean."),
      t("Los rendimientos reales suelen tener colas más pesadas que la normal: cuidado con subestimar extremos.", "Real returns usually have fatter tails than the normal: beware of underestimating extremes."),
    ],
    normativeNote: NOTE_HYPO_STATS,
    exerciseIds: ['CUA-03-E1', 'CUA-03-E2', 'CUA-03-E3', 'CUA-03-E4', 'CUA-03-E5', 'CUA-03-E6'],
  },

  // ═════════════════════════ CUA-04 ═════════════════════════
  {
    id: 'CUA-04',
    level: 6,
    topicIds: ['CUA.4'],
    title: t("Estadística inferencial", "Inferential statistics"),
    summary: t(
      "La estadística inferencial usa una muestra de datos para sacar conclusiones sobre algo que no puedes observar completo, como el rendimiento promedio verdadero de una estrategia, midiendo cuánta incertidumbre hay en esa conclusión.",
      "Inferential statistics uses a sample of data to draw conclusions about something you cannot fully observe, like the true average return of a strategy, measuring how much uncertainty there is in that conclusion.",
    ),
    minutes: 18,
    objectives: [
      t("Distinguir población y muestra, y calcular el error estándar de la media.", "Distinguish population and sample, and compute the standard error of the mean."),
      t("Construir e interpretar un intervalo de confianza del 95 %.", "Build and interpret a 95% confidence interval."),
      t("Plantear una prueba de hipótesis, calcular el estadístico t e interpretar el valor p y los errores tipo I y II.", "Set up a hypothesis test, compute the t statistic and interpret the p-value and type I and II errors."),
    ],
    theory: [
      {
        heading: t("Población, muestra y error estándar", "Population, sample and standard error"),
        body: [
          t(
            "La **población** es todo lo que te interesa (por ejemplo, todos los rendimientos posibles de una estrategia, incluidos los futuros). La **muestra** es lo que sí tienes: digamos 60 meses de historia. Con la muestra **estimas** características de la población.",
            "The **population** is everything you care about (for example, all possible returns of a strategy, including future ones). The **sample** is what you actually have: say 60 months of history. With the sample you **estimate** features of the population.",
          ),
          t(
            "La **media muestral** x̄ es tu mejor estimación del promedio verdadero μ, pero cambiaría si tuvieras otros 60 meses. El **error estándar** (EE) mide cuánto variaría: EE = s / √n, donde s es la desviación estándar de la muestra y n el número de datos.",
            "The **sample mean** x̄ is your best estimate of the true average μ, but it would change if you had a different 60 months. The **standard error** (SE) measures how much it would vary: SE = s / √n, where s is the sample standard deviation and n the number of data points.",
          ),
          t(
            "Fíjate en la raíz: para reducir el error estándar a la **mitad**, necesitas **cuatro veces** más datos. Por eso estimar rendimientos promedio con precisión es tan difícil en finanzas: la volatilidad es grande comparada con el promedio.",
            "Notice the square root: to cut the standard error in **half**, you need **four times** more data. That is why estimating average returns precisely is so hard in finance: volatility is large compared with the average.",
          ),
          t(
            "Mini ejemplo: s = 6 % mensual y n = 36 meses: EE = 6 / √36 = 6 / 6 = **1 %**.",
            "Mini example: s = 6% monthly and n = 36 months: SE = 6 / √36 = 6 / 6 = **1%**.",
          ),
        ],
        formulas: [
          {
            name: t("Error estándar de la media", "Standard error of the mean"),
            expression: "EE = s ÷ √n",
            variables: [
              { symbol: "EE", meaning: t("Error estándar: cuánto podría variar el promedio de la muestra, en las mismas unidades que los datos (%).", "Standard error: how much the sample average could vary, in the same units as the data (%).") },
              { symbol: "s", meaning: t("Desviación estándar de la muestra, en %.", "Sample standard deviation, in %.") },
              { symbol: "n", meaning: t("Número de datos (por ejemplo, meses).", "Number of data points (for example, months).") },
              { symbol: "√n", meaning: t("Raíz cuadrada de n.", "Square root of n.") },
            ],
            steps: [
              t("Saca la raíz cuadrada del número de datos: √n.", "Take the square root of the number of data points: √n."),
              t("Divide la desviación estándar entre ese número.", "Divide the standard deviation by that number."),
            ],
            example: t("s = 3 % y n = 25 meses: √25 = 5; 3 ÷ 5 = **0.6 %**.", "s = 3% and n = 25 months: √25 = 5; 3 ÷ 5 = **0.6%**."),
            interpret: t("EE pequeño = promedio más confiable. Para reducirlo a la mitad necesitas cuatro veces más datos.", "Small SE = more reliable average. To cut it in half you need four times more data."),
            mistake: t("Dividir entre n en vez de entre √n.", "Dividing by n instead of by √n."),
          },
        ],
      },
      {
        heading: t("Intervalos de confianza", "Confidence intervals"),
        body: [
          t(
            "Un **intervalo de confianza** da un rango de valores plausibles para el parámetro verdadero, no un solo número. Para la media, con muestras grandes, el de **95 %** es x̄ ± 1.96 × EE.",
            "A **confidence interval** gives a range of plausible values for the true parameter, not a single number. For the mean, with large samples, the **95%** interval is x̄ ± 1.96 × SE.",
          ),
          t(
            "¿Qué significa \"95 %\"? Que si repitieras el muestreo muchas veces y construyeras un intervalo cada vez, cerca del 95 % de esos intervalos contendría el valor verdadero. Es una afirmación sobre el **método**, no una garantía sobre un intervalo en particular.",
            "What does \"95%\" mean? That if you repeated the sampling many times and built an interval each time, about 95% of those intervals would contain the true value. It is a statement about the **method**, not a guarantee about one particular interval.",
          ),
          t(
            "Más confianza (99 %) = intervalo más **ancho**. Más datos = intervalo más **angosto**. Si el intervalo incluye el 0, los datos no permiten descartar que el rendimiento promedio verdadero sea cero.",
            "More confidence (99%) = a **wider** interval. More data = a **narrower** interval. If the interval includes 0, the data cannot rule out that the true average return is zero.",
          ),
          t(
            "Mini ejemplo: x̄ = 2 % y EE = 0.5 %: el intervalo del 95 % es 2 ± 0.98, es decir **de 1.02 % a 2.98 %**.",
            "Mini example: x̄ = 2% and SE = 0.5%: the 95% interval is 2 ± 0.98, that is **from 1.02% to 2.98%**.",
          ),
        ],
        formulas: [
          {
            name: t("Intervalo de confianza del 95 % para la media", "95% confidence interval for the mean"),
            expression: "IC 95 % = x̄ ± 1.96 × EE",
            variables: [
              { symbol: "x̄", meaning: t("Promedio de la muestra (se lee \"x barra\"), en %.", "Sample average (read \"x bar\"), in %.") },
              { symbol: "1.96", meaning: t("Valor fijo de la normal para 95 % de confianza (muestras grandes).", "Fixed normal value for 95% confidence (large samples).") },
              { symbol: "EE", meaning: t("Error estándar = s ÷ √n, en %.", "Standard error = s ÷ √n, in %.") },
            ],
            steps: [
              t("Calcula el error estándar: EE = s ÷ √n.", "Compute the standard error: SE = s ÷ √n."),
              t("Calcula el margen: 1.96 × EE.", "Compute the margin: 1.96 × SE."),
              t("Límite inferior = x̄ − margen; límite superior = x̄ + margen.", "Lower bound = x̄ − margin; upper bound = x̄ + margin."),
            ],
            example: t("x̄ = 1.5 % y EE = 0.6 %: margen = 1.96 × 0.6 = 1.176. 1.5 − 1.176 = 0.324 % y 1.5 + 1.176 = 2.676 %. IC 95 % ≈ **de 0.32 % a 2.68 %**.", "x̄ = 1.5% and SE = 0.6%: margin = 1.96 × 0.6 = 1.176. 1.5 − 1.176 = 0.324% and 1.5 + 1.176 = 2.676%. 95% CI ≈ **from 0.32% to 2.68%**."),
            interpret: t("Si el intervalo no incluye el 0, hay evidencia de que el promedio verdadero no es cero; si lo incluye, no puedes descartarlo.", "If the interval does not include 0, there is evidence the true average is not zero; if it does, you cannot rule it out."),
            mistake: t("Usar la desviación estándar s en lugar del error estándar para el margen: el intervalo sale enorme.", "Using the standard deviation s instead of the standard error for the margin: the interval comes out huge."),
          },
        ],
      },
      {
        heading: t("Pruebas de hipótesis y valor p", "Hypothesis tests and p-value"),
        body: [
          t(
            "Una **prueba de hipótesis** es como un juicio: la **hipótesis nula** H0 es la postura \"inocente\" (por ejemplo, \"la estrategia no gana nada en promedio\", μ = 0) y la **alternativa** H1 es lo que quieres demostrar (μ ≠ 0 o μ > 0).",
            "A **hypothesis test** is like a trial: the **null hypothesis** H0 is the \"innocent\" position (for example, \"the strategy earns nothing on average\", μ = 0) and the **alternative** H1 is what you want to show (μ ≠ 0 or μ > 0).",
          ),
          t(
            "Calculas el **estadístico t** = (x̄ − valor de H0) / EE: cuántos errores estándar te alejas de lo que dice H0. El **valor p** es la probabilidad de ver un resultado así de extremo **si H0 fuera cierta**. Si p es menor que tu **nivel de significancia** α (típicamente 5 %), **rechazas H0**.",
            "You compute the **t statistic** = (x̄ − H0 value) / SE: how many standard errors you are away from what H0 says. The **p-value** is the probability of seeing a result this extreme **if H0 were true**. If p is below your **significance level** α (typically 5%), you **reject H0**.",
          ),
          t(
            "Hay dos formas de equivocarse. **Error tipo I**: rechazar H0 siendo cierta (creer que una estrategia funciona cuando fue suerte). **Error tipo II**: no rechazar H0 siendo falsa (descartar una estrategia que sí funcionaba). No rechazar H0 **no prueba** que sea cierta; solo dice que no hubo evidencia suficiente.",
            "There are two ways to be wrong. **Type I error**: rejecting H0 when it is true (believing a strategy works when it was luck). **Type II error**: not rejecting H0 when it is false (discarding a strategy that did work). Not rejecting H0 **does not prove** it is true; it only says there was not enough evidence.",
          ),
          t(
            "Mini ejemplo: con muestras grandes y prueba de **dos colas** (te importa si el resultado se aleja hacia arriba o hacia abajo) al 5 %, el valor crítico es ≈ 1.96. Un t = 2.5 rechaza H0; un t = 1.2 no la rechaza.",
            "Mini example: with large samples and a **two-tailed** test (you care whether the result moves away upward or downward) at 5%, the critical value is ≈ 1.96. A t = 2.5 rejects H0; a t = 1.2 does not.",
          ),
        ],
        formulas: [
          {
            name: t("Estadístico t de una prueba de hipótesis", "t statistic of a hypothesis test"),
            expression: "t = (x̄ − μ0) ÷ EE     rechaza H0 si |t| > 1.96 (o si valor p < α)",
            variables: [
              { symbol: "t", meaning: t("Cuántos errores estándar se aleja tu promedio de lo que dice H0.", "How many standard errors your average is from what H0 says.") },
              { symbol: "x̄", meaning: t("Promedio de la muestra, en %.", "Sample average, in %.") },
              { symbol: "μ0", meaning: t("Valor que afirma la hipótesis nula (muchas veces 0).", "Value the null hypothesis claims (often 0).") },
              { symbol: "EE", meaning: t("Error estándar = s ÷ √n.", "Standard error = s ÷ √n.") },
              { symbol: "|t|", meaning: t("Valor absoluto: t sin signo.", "Absolute value: t without its sign.") },
              { symbol: "valor p, α", meaning: t("Valor p: probabilidad de un resultado así de extremo si H0 fuera cierta. α: nivel de significancia, típicamente 5 % (0.05).", "p-value: probability of a result this extreme if H0 were true. α: significance level, typically 5% (0.05).") },
            ],
            steps: [
              t("Calcula el error estándar: EE = s ÷ √n.", "Compute the standard error: SE = s ÷ √n."),
              t("Resta el valor de H0 al promedio: x̄ − μ0.", "Subtract the H0 value from the average: x̄ − μ0."),
              t("Divide entre EE para obtener t.", "Divide by SE to get t."),
              t("Compara |t| con 1.96 (5 %, dos colas). Si es mayor, rechazas H0. Si te dan el valor p, recházala cuando p < α.", "Compare |t| with 1.96 (5%, two tails). If it is larger, you reject H0. If you are given the p-value, reject it when p < α."),
            ],
            example: t("x̄ = 1.5 %, μ0 = 0 y EE = 0.6 %: 1.5 − 0 = 1.5; t = 1.5 ÷ 0.6 = **2.5**. Como 2.5 > 1.96, rechazas H0 al 5 %.", "x̄ = 1.5%, μ0 = 0 and SE = 0.6%: 1.5 − 0 = 1.5; t = 1.5 ÷ 0.6 = **2.5**. Since 2.5 > 1.96, you reject H0 at 5%."),
            interpret: t("Rechazar H0 = evidencia de un efecto real. No rechazarla no prueba que H0 sea cierta: puede faltar información.", "Rejecting H0 = evidence of a real effect. Not rejecting it does not prove H0 is true: there may not be enough data."),
            mistake: t("Dividir entre la desviación estándar s en vez del error estándar EE.", "Dividing by the standard deviation s instead of the standard error SE."),
          },
        ],
        bullets: [
          t("H0: la postura por defecto que intentas refutar.", "H0: the default position you try to refute."),
          t("Valor p pequeño = evidencia contra H0.", "Small p-value = evidence against H0."),
          t("Error tipo I = falso positivo; su probabilidad es α.", "Type I error = false positive; its probability is α."),
          t("Error tipo II = falso negativo.", "Type II error = false negative."),
          t("Probar muchas estrategias y quedarte con la \"mejor\" infla los falsos positivos.", "Testing many strategies and keeping the \"best\" inflates false positives."),
        ],
      },
    ],
    examples: [
      {
        title: t("Intervalo de confianza para el rendimiento de un fondo", "Confidence interval for a fund's return"),
        problem: t(
          "Un fondo hipotético tiene 49 meses de historia, con rendimiento promedio de 0.9 % mensual y desviación estándar muestral de 2.8 %. Construye el intervalo de confianza del 95 % para su rendimiento promedio verdadero.",
          "A hypothetical fund has 49 months of history, with an average return of 0.9% a month and a sample standard deviation of 2.8%. Build the 95% confidence interval for its true average return.",
        ),
        steps: [
          t("EE = 2.8 / √49 = 2.8 / 7 = 0.4 %.", "SE = 2.8 / √49 = 2.8 / 7 = 0.4%."),
          t("Margen = 1.96 × 0.4 = 0.784 %.", "Margin = 1.96 × 0.4 = 0.784%."),
          t("Límites: 0.9 − 0.784 = 0.116 % y 0.9 + 0.784 = 1.684 %.", "Bounds: 0.9 − 0.784 = 0.116% and 0.9 + 0.784 = 1.684%."),
        ],
        result: t(
          "El IC 95 % va de ≈ 0.12 % a ≈ 1.68 % mensual. Como no incluye el 0, hay evidencia de un promedio positivo, aunque el rango es amplio.",
          "The 95% CI runs from ≈ 0.12% to ≈ 1.68% a month. Since it does not include 0, there is evidence of a positive average, although the range is wide.",
        ),
      },
      {
        title: t("¿La estrategia gana de verdad?", "Does the strategy really win?"),
        problem: t(
          "Una estrategia hipotética de trading tiene 400 días de resultados: exceso de rendimiento promedio de 0.05 % diario y desviación estándar de 1 %. Prueba H0: μ = 0 contra H1: μ ≠ 0 al 5 %.",
          "A hypothetical trading strategy has 400 days of results: average excess return of 0.05% a day and a standard deviation of 1%. Test H0: μ = 0 against H1: μ ≠ 0 at 5%.",
        ),
        steps: [
          t("EE = 1 / √400 = 1 / 20 = 0.05 %.", "SE = 1 / √400 = 1 / 20 = 0.05%."),
          t("t = (0.05 − 0) / 0.05 = 1.0.", "t = (0.05 − 0) / 0.05 = 1.0."),
          t("Compara: |1.0| < 1.96, así que no se rechaza H0.", "Compare: |1.0| < 1.96, so H0 is not rejected."),
        ],
        result: t(
          "No hay evidencia estadística suficiente de que la estrategia gane: su resultado es compatible con suerte. Eso no prueba que no funcione; harían falta más datos.",
          "There is not enough statistical evidence that the strategy wins: its result is compatible with luck. That does not prove it fails; more data would be needed.",
        ),
      },
    ],
    keyPoints: [
      t("Con una muestra estimas la población; el error estándar s/√n mide la precisión de la media.", "With a sample you estimate the population; the standard error s/√n measures the mean's precision."),
      t("IC 95 % ≈ media ± 1.96 × EE; más datos lo hacen más angosto.", "95% CI ≈ mean ± 1.96 × SE; more data makes it narrower."),
      t("t = (x̄ − μ0)/EE; con |t| > 1.96 rechazas H0 al 5 % (dos colas, muestra grande).", "t = (x̄ − μ0)/SE; with |t| > 1.96 you reject H0 at 5% (two tails, large sample)."),
      t("Valor p < α → rechazas H0; no rechazar no prueba que H0 sea cierta.", "p-value < α → reject H0; not rejecting does not prove H0 is true."),
      t("Error tipo I = falso positivo; error tipo II = falso negativo.", "Type I error = false positive; type II error = false negative."),
    ],
    normativeNote: NOTE_HYPO_STATS,
    exerciseIds: ['CUA-04-E1', 'CUA-04-E2', 'CUA-04-E3', 'CUA-04-E4', 'CUA-04-E5', 'CUA-04-E6'],
  },

  // ═════════════════════════ CUA-05 ═════════════════════════
  {
    id: 'CUA-05',
    level: 6,
    topicIds: ['CUA.5'],
    title: t("Econometría financiera", "Financial econometrics"),
    summary: t(
      "La econometría financiera usa datos reales y modelos estadísticos para medir relaciones en los mercados, como la beta de una acción, cuidando los tipos de datos y las trampas que pueden llevar a conclusiones falsas.",
      "Financial econometrics uses real data and statistical models to measure relationships in markets, such as a stock's beta, paying attention to data types and the traps that can lead to false conclusions.",
    ),
    minutes: 16,
    objectives: [
      t("Distinguir datos de corte transversal, series de tiempo y panel.", "Distinguish cross-sectional, time-series and panel data."),
      t("Estimar e interpretar la beta y el alfa del modelo de mercado.", "Estimate and interpret the beta and alpha of the market model."),
      t("Reconocer problemas comunes: correlación sin causalidad, sesgos de datos, heterocedasticidad y autocorrelación.", "Recognize common problems: correlation without causation, data biases, heteroskedasticity and autocorrelation."),
    ],
    theory: [
      {
        heading: t("Qué es la econometría y qué datos usa", "What econometrics is and what data it uses"),
        body: [
          t(
            "La **econometría** junta economía, matemáticas y estadística para **medir** relaciones con datos: ¿cuánto se mueve una acción cuando se mueve el mercado? ¿qué tanto influye la tasa de interés en el precio de los bonos? La versión **financiera** se enfoca en precios, rendimientos y riesgos.",
            "**Econometrics** combines economics, mathematics and statistics to **measure** relationships with data: how much does a stock move when the market moves? how much does the interest rate affect bond prices? The **financial** version focuses on prices, returns and risks.",
          ),
          t(
            "Hay tres tipos de datos. **Corte transversal**: muchas unidades en un mismo momento (las utilidades de 35 empresas en 2025). **Serie de tiempo**: una unidad a lo largo del tiempo (el tipo de cambio diario durante 5 años). **Panel**: muchas unidades a lo largo del tiempo (los rendimientos mensuales de 35 empresas durante 10 años).",
            "There are three data types. **Cross-section**: many units at one moment (the earnings of 35 companies in 2025). **Time series**: one unit over time (the daily exchange rate over 5 years). **Panel**: many units over time (the monthly returns of 35 companies over 10 years).",
          ),
          t(
            "La regla de oro: **correlación no es causalidad**. Que dos series se muevan juntas puede deberse a una tercera variable o a la pura casualidad. La econometría da herramientas para acercarse a relaciones causales, pero siempre con supuestos.",
            "The golden rule: **correlation is not causation**. Two series moving together may be due to a third variable or pure chance. Econometrics provides tools to get closer to causal relationships, but always with assumptions.",
          ),
          t(
            "Mini ejemplo: las ventas de paraguas y los accidentes viales suben juntos en temporada de lluvias. Los paraguas no causan accidentes: la **lluvia** es la tercera variable que mueve ambas.",
            "Mini example: umbrella sales and road accidents rise together in the rainy season. Umbrellas do not cause accidents: **rain** is the third variable driving both.",
          ),
        ],
      },
      {
        heading: t("El modelo de mercado: alfa y beta", "The market model: alpha and beta"),
        body: [
          t(
            "El modelo más famoso de la econometría financiera relaciona el rendimiento de una acción con el del mercado: **Ri = α + β × Rm + ε**. La **beta** β mide la sensibilidad: si β = 1.2, cuando el mercado sube 1 % la acción tiende a subir 1.2 %.",
            "The most famous model in financial econometrics relates a stock's return to the market's: **Ri = α + β × Rm + ε**. **Beta** β measures sensitivity: if β = 1.2, when the market rises 1% the stock tends to rise 1.2%.",
          ),
          t(
            "El **alfa** α es la parte del rendimiento que no explica el mercado (en promedio). El **residual** ε es la sorpresa de cada periodo: lo que pasó de verdad menos lo que el modelo esperaba. Representa el riesgo **específico** de la empresa (una noticia propia, un buen reporte).",
            "**Alpha** α is the part of the return the market does not explain (on average). The **residual** ε is each period's surprise: what actually happened minus what the model expected. It represents the company's **specific** risk (its own news, a good report).",
          ),
          t(
            "La beta se estima con datos históricos: **β = Cov(Ri, Rm) / Var(Rm)**, o de forma equivalente β = ρ × σi / σm. Una beta mayor que 1 es \"agresiva\", menor que 1 es \"defensiva\" y cercana a 0 casi no responde al mercado.",
            "Beta is estimated with historical data: **β = Cov(Ri, Rm) / Var(Rm)**, or equivalently β = ρ × σi / σm. A beta above 1 is \"aggressive\", below 1 is \"defensive\" and close to 0 barely responds to the market.",
          ),
          t(
            "Mini ejemplo hipotético: una empresa de alimentos con β = 0.6. Si el índice cae 5 %, el modelo espera que ella caiga cerca de 0.6 × 5 = **3 %** (más el alfa y la sorpresa del mes).",
            "Hypothetical mini example: a food company with β = 0.6. If the index falls 5%, the model expects it to fall about 0.6 × 5 = **3%** (plus alpha and the month's surprise).",
          ),
        ],
        formulas: [
          {
            name: t("Beta de una acción", "Beta of a stock"),
            expression: "β = Cov(Ri, Rm) ÷ Var(Rm) = ρ × σi ÷ σm",
            variables: [
              { symbol: "β", meaning: t("Beta: cuánto se mueve la acción por cada 1 % que se mueve el mercado.", "Beta: how much the stock moves for each 1% the market moves.") },
              { symbol: "Cov(Ri, Rm)", meaning: t("Covarianza entre el rendimiento de la acción y el del mercado.", "Covariance between the stock's return and the market's.") },
              { symbol: "Var(Rm)", meaning: t("Varianza del rendimiento del mercado (no de la acción).", "Variance of the market's return (not the stock's).") },
              { symbol: "ρ", meaning: t("Correlación entre acción y mercado (de −1 a +1).", "Correlation between stock and market (from −1 to +1).") },
              { symbol: "σi, σm", meaning: t("Volatilidad (desviación estándar) de la acción y del mercado, en %.", "Volatility (standard deviation) of the stock and the market, in %.") },
            ],
            steps: [
              t("Si tienes covarianza: divide Cov(Ri, Rm) entre la varianza del mercado.", "If you have the covariance: divide Cov(Ri, Rm) by the market's variance."),
              t("Si tienes correlación: multiplica ρ por σi y divide entre σm.", "If you have the correlation: multiply ρ by σi and divide by σm."),
              t("Lee el resultado: mayor que 1 = agresiva, menor que 1 = defensiva.", "Read the result: above 1 = aggressive, below 1 = defensive."),
            ],
            example: t("Cov = 0.0006 y Var(Rm) = 0.0008: β = 0.0006 ÷ 0.0008 = **0.75**. Con la otra fórmula, ρ = 0.5, σi = 30 % y σm = 20 %: 0.5 × 30 ÷ 20 = 0.75.", "Cov = 0.0006 and Var(Rm) = 0.0008: β = 0.0006 ÷ 0.0008 = **0.75**. With the other formula, ρ = 0.5, σi = 30% and σm = 20%: 0.5 × 30 ÷ 20 = 0.75."),
            interpret: t("β = 0.75: si el mercado sube 2 %, la acción tiende a subir 0.75 × 2 = 1.5 %.", "β = 0.75: if the market rises 2%, the stock tends to rise 0.75 × 2 = 1.5%."),
            mistake: t("Invertir la división o dividir entre la varianza de la acción en lugar de la del mercado.", "Flipping the division or dividing by the stock's variance instead of the market's."),
          },
          {
            name: t("Rendimiento esperado y residual (modelo de mercado)", "Expected return and residual (market model)"),
            expression: "Esperado = α + β × Rm     ε = Ri real − Esperado",
            variables: [
              { symbol: "α", meaning: t("Alfa: parte del rendimiento que no explica el mercado, en %.", "Alpha: the part of the return the market does not explain, in %.") },
              { symbol: "β", meaning: t("Beta de la acción.", "The stock's beta.") },
              { symbol: "Rm", meaning: t("Rendimiento del mercado en el periodo, en %.", "Market return for the period, in %.") },
              { symbol: "Ri real", meaning: t("Lo que de verdad rindió la acción, en %.", "What the stock actually returned, in %.") },
              { symbol: "ε", meaning: t("Residual: la sorpresa propia de la empresa, en %.", "Residual: the company's own surprise, in %.") },
            ],
            steps: [
              t("Multiplica β por el rendimiento del mercado.", "Multiply β by the market return."),
              t("Súmale α: ese es el rendimiento esperado.", "Add α: that is the expected return."),
              t("Resta: real − esperado. Ese es el residual.", "Subtract: actual − expected. That is the residual."),
            ],
            example: t("α = 0.3 %, β = 0.8 y el mercado cae 2 %: 0.8 × (−2) = −1.6; esperado = 0.3 − 1.6 = **−1.3 %**. Si la acción rindió −0.5 %: ε = −0.5 − (−1.3) = **+0.8 %**.", "α = 0.3%, β = 0.8 and the market falls 2%: 0.8 × (−2) = −1.6; expected = 0.3 − 1.6 = **−1.3%**. If the stock returned −0.5%: ε = −0.5 − (−1.3) = **+0.8%**."),
            interpret: t("Residual positivo = a la empresa le fue mejor de lo que el mercado explicaba; negativo = peor.", "Positive residual = the company did better than the market explained; negative = worse."),
            mistake: t("Olvidar sumar α, o restar al revés (esperado − real), lo que invierte el signo.", "Forgetting to add α, or subtracting the other way (expected − actual), which flips the sign."),
          },
        ],
      },
      {
        heading: t("Trampas comunes en datos financieros", "Common traps in financial data"),
        body: [
          t(
            "En palabras sencillas: el **error** de un modelo es lo que el modelo no logra explicar en cada dato, y el **error estándar** de un coeficiente dice qué tan preciso es. Los datos financieros tienen problemas típicos. **Heterocedasticidad**: la varianza de los errores no es constante (hay épocas tranquilas y épocas turbulentas). **Autocorrelación**: los errores de un periodo se parecen a los del anterior. Ambas no necesariamente sesgan los coeficientes, pero sí hacen que los errores estándar \"normales\" engañen.",
            "In plain words: a model's **error** is what the model fails to explain in each data point, and a coefficient's **standard error** tells how precise it is. Financial data have typical problems. **Heteroskedasticity**: the error variance is not constant (there are calm and turbulent periods). **Autocorrelation**: errors in one period resemble those of the previous one. Neither necessarily biases the coefficients, but both make \"ordinary\" standard errors misleading.",
          ),
          t(
            "Otros problemas sí distorsionan las conclusiones. **Sesgo de supervivencia**: estudiar solo empresas o fondos que siguen vivos y olvidar los que quebraron o cerraron. **Sesgo de anticipación** (*look-ahead*): usar un dato que todavía no se conocía en esa fecha. **Variable omitida**: dejar fuera un factor importante que mueve a ambas variables.",
            "Other problems do distort conclusions. **Survivorship bias**: studying only companies or funds still alive and forgetting those that went bankrupt or closed. **Look-ahead bias**: using a data point that was not yet known on that date. **Omitted variable**: leaving out an important factor that drives both variables.",
          ),
          t(
            "Mini ejemplo: si mides el rendimiento promedio de los fondos que existen hoy, dejas fuera a los que cerraron por malos resultados. El promedio sale **más alto** de lo que realmente obtuvieron los inversionistas.",
            "Mini example: if you measure the average return of funds that exist today, you leave out those that closed due to poor results. The average comes out **higher** than what investors actually earned.",
          ),
        ],
        bullets: [
          t("Heterocedasticidad: varianza del error cambiante.", "Heteroskedasticity: changing error variance."),
          t("Autocorrelación: errores relacionados en el tiempo.", "Autocorrelation: errors related over time."),
          t("Supervivencia: solo ves a los ganadores que sobrevivieron.", "Survivorship: you only see the winners that survived."),
          t("Look-ahead: usar información del futuro sin darte cuenta.", "Look-ahead: using future information without noticing."),
          t("Variable omitida: un factor oculto que explica la relación.", "Omitted variable: a hidden factor that explains the relationship."),
        ],
      },
    ],
    examples: [
      {
        title: t("Estimar la beta de dos formas", "Estimating beta two ways"),
        problem: t(
          "Con datos mensuales hipotéticos, la covarianza entre una acción y el mercado es 0.0010 y la varianza del mercado es 0.0008. Además, la correlación es 0.8, la volatilidad de la acción es 25 % y la del mercado 16 %. Calcula la beta con ambas fórmulas.",
          "With hypothetical monthly data, the covariance between a stock and the market is 0.0010 and the market variance is 0.0008. Also, the correlation is 0.8, the stock's volatility is 25% and the market's is 16%. Compute beta with both formulas.",
        ),
        steps: [
          t("Con covarianza: β = 0.0010 / 0.0008 = 1.25.", "With covariance: β = 0.0010 / 0.0008 = 1.25."),
          t("Con correlación: β = 0.8 × 25 / 16 = 0.8 × 1.5625 = 1.25.", "With correlation: β = 0.8 × 25 / 16 = 0.8 × 1.5625 = 1.25."),
          t("Interpretación: si el mercado sube 2 %, la acción tiende a subir 1.25 × 2 = 2.5 %.", "Interpretation: if the market rises 2%, the stock tends to rise 1.25 × 2 = 2.5%."),
        ],
        result: t("β = 1.25 por ambos caminos: es una acción más sensible que el mercado.", "β = 1.25 both ways: it is a stock more sensitive than the market."),
      },
      {
        title: t("Rendimiento esperado y residual de un mes", "Expected return and residual for one month"),
        problem: t(
          "Un modelo de mercado estimado da α = 0.1 % mensual y β = 0.9 para una acción hipotética. Este mes el mercado subió 2 % y la acción subió 1.5 %. ¿Cuánto esperaba el modelo y cuál fue la sorpresa (residual)?",
          "An estimated market model gives α = 0.1% a month and β = 0.9 for a hypothetical stock. This month the market rose 2% and the stock rose 1.5%. How much did the model expect and what was the surprise (residual)?",
        ),
        steps: [
          t("Esperado = α + β × Rm = 0.1 + 0.9 × 2 = 0.1 + 1.8 = 1.9 %.", "Expected = α + β × Rm = 0.1 + 0.9 × 2 = 0.1 + 1.8 = 1.9%."),
          t("Residual = real − esperado = 1.5 − 1.9 = −0.4 %.", "Residual = actual − expected = 1.5 − 1.9 = −0.4%."),
        ],
        result: t(
          "El modelo esperaba 1.9 % y la acción quedó 0.4 puntos por debajo: un residual de −0.4 %, atribuible a factores propios de la empresa ese mes.",
          "The model expected 1.9% and the stock came in 0.4 points below: a residual of −0.4%, attributable to company-specific factors that month.",
        ),
      },
    ],
    keyPoints: [
      t("Tipos de datos: corte transversal, series de tiempo y panel.", "Data types: cross-section, time series and panel."),
      t("Correlación no es causalidad: busca terceras variables.", "Correlation is not causation: look for third variables."),
      t("Modelo de mercado: Ri = α + β·Rm + ε; β = Cov/Var del mercado.", "Market model: Ri = α + β·Rm + ε; β = Cov / market Var."),
      t("El residual es la sorpresa específica de la empresa en cada periodo.", "The residual is the company-specific surprise each period."),
      t("Cuida sesgos de supervivencia, look-ahead y variable omitida, y errores con heterocedasticidad o autocorrelación.", "Watch for survivorship, look-ahead and omitted-variable biases, and errors with heteroskedasticity or autocorrelation."),
    ],
    normativeNote: NOTE_HYPO_ECON,
    exerciseIds: ['CUA-05-E1', 'CUA-05-E2', 'CUA-05-E3', 'CUA-05-E4', 'CUA-05-E5', 'CUA-05-E6'],
  },

  // ═════════════════════════ CUA-06 ═════════════════════════
  {
    id: 'CUA-06',
    level: 6,
    topicIds: ['CUA.6'],
    title: t("Modelos de regresión", "Regression models"),
    summary: t(
      "Una regresión traza la línea que mejor resume cómo cambia una variable cuando cambian otras; aprenderás a estimarla por mínimos cuadrados, a medir qué tan bien ajusta y a interpretar regresiones con varias variables.",
      "A regression draws the line that best summarizes how one variable changes when others change; you will learn to estimate it by least squares, measure how well it fits and interpret regressions with several variables.",
    ),
    minutes: 19,
    objectives: [
      t("Estimar la pendiente y la ordenada de una regresión lineal simple por MCO.", "Estimate the slope and intercept of a simple linear regression by OLS."),
      t("Calcular e interpretar el R² y la significancia de un coeficiente con su estadístico t.", "Compute and interpret R² and a coefficient's significance with its t statistic."),
      t("Interpretar coeficientes de una regresión múltiple, incluidas variables dummy, y reconocer el sobreajuste.", "Interpret coefficients of a multiple regression, including dummy variables, and recognize overfitting."),
    ],
    theory: [
      {
        heading: t("Regresión lineal simple y mínimos cuadrados", "Simple linear regression and least squares"),
        body: [
          t(
            "Una **regresión lineal simple** explica una variable **dependiente** Y con una **independiente** X mediante una recta: Y = a + b·X + e. La **ordenada** a es el valor de Y cuando X = 0, la **pendiente** b dice cuánto cambia Y por cada unidad de X, y **e** es el error.",
            "A **simple linear regression** explains a **dependent** variable Y with an **independent** one X through a line: Y = a + b·X + e. The **intercept** a is the value of Y when X = 0, the **slope** b says how much Y changes per unit of X, and **e** is the error.",
          ),
          t(
            "¿Cuál recta es la \"mejor\"? El método de **mínimos cuadrados ordinarios** (MCO, u OLS en inglés) elige a y b para que la suma de los errores al cuadrado sea lo más pequeña posible. Elevar al cuadrado evita que errores positivos y negativos se cancelen y castiga más los errores grandes.",
            "Which line is the \"best\"? **Ordinary least squares** (OLS) chooses a and b so that the sum of squared errors is as small as possible. Squaring keeps positive and negative errors from canceling out and penalizes large errors more.",
          ),
          t(
            "Las fórmulas son sencillas: **b = Cov(X, Y) / Var(X)** y **a = ȳ − b·x̄**. La recta siempre pasa por el punto de promedios (x̄, ȳ), y los residuales de MCO suman cero.",
            "The formulas are simple: **b = Cov(X, Y) / Var(X)** and **a = ȳ − b·x̄**. The line always passes through the point of averages (x̄, ȳ), and OLS residuals add up to zero.",
          ),
          t(
            "Mini ejemplo hipotético: una cadena de cafeterías estima ventas = 20 + 3 × (clientes por hora). Con 10 clientes por hora, la predicción es 20 + 30 = **50** mil pesos al día.",
            "Hypothetical mini example: a coffee chain estimates sales = 20 + 3 × (customers per hour). With 10 customers per hour, the prediction is 20 + 30 = **50** thousand pesos a day.",
          ),
        ],
        formulas: [
          {
            name: t("Recta de mínimos cuadrados: pendiente, ordenada y predicción", "Least-squares line: slope, intercept and prediction"),
            expression: "b = Cov(X, Y) ÷ Var(X)     a = ȳ − b × x̄     Ŷ = a + b × X",
            variables: [
              { symbol: "b", meaning: t("Pendiente: cuánto cambia Y por cada unidad que sube X.", "Slope: how much Y changes for each unit X rises.") },
              { symbol: "a", meaning: t("Ordenada: el valor de Y cuando X = 0.", "Intercept: the value of Y when X = 0.") },
              { symbol: "Cov(X, Y)", meaning: t("Covarianza entre X y Y.", "Covariance between X and Y.") },
              { symbol: "Var(X)", meaning: t("Varianza de X (la variable que explica), no de Y.", "Variance of X (the explaining variable), not of Y.") },
              { symbol: "x̄, ȳ", meaning: t("Promedios de X y de Y.", "Averages of X and Y.") },
              { symbol: "Ŷ", meaning: t("Valor de Y que predice la recta (se lee \"Y gorro\").", "Value of Y the line predicts (read \"Y hat\").") },
              { symbol: "X", meaning: t("Valor de la variable explicativa para el que quieres predecir.", "Value of the explaining variable you want to predict for.") },
            ],
            steps: [
              t("Calcula la pendiente: b = Cov(X, Y) ÷ Var(X).", "Compute the slope: b = Cov(X, Y) ÷ Var(X)."),
              t("Calcula la ordenada: multiplica b × x̄ y réstalo a ȳ.", "Compute the intercept: multiply b × x̄ and subtract it from ȳ."),
              t("Para predecir, sustituye X en Ŷ = a + b × X.", "To predict, plug X into Ŷ = a + b × X."),
            ],
            example: t("Cov(X, Y) = 8, Var(X) = 4, x̄ = 5 y ȳ = 15. b = 8 ÷ 4 = 2; a = 15 − 2 × 5 = 15 − 10 = 5. Con X = 7: Ŷ = 5 + 2 × 7 = 5 + 14 = **19**.", "Cov(X, Y) = 8, Var(X) = 4, x̄ = 5 and ȳ = 15. b = 8 ÷ 4 = 2; a = 15 − 2 × 5 = 15 − 10 = 5. With X = 7: Ŷ = 5 + 2 × 7 = 5 + 14 = **19**."),
            mistake: t("Calcular a como ȳ − b (sin multiplicar por x̄), o dividir entre Var(Y) en vez de Var(X).", "Computing a as ȳ − b (without multiplying by x̄), or dividing by Var(Y) instead of Var(X)."),
          },
        ],
      },
      {
        heading: t("Bondad de ajuste y significancia", "Goodness of fit and significance"),
        body: [
          t(
            "En palabras sencillas: el **R²** es la \"calificación\" de qué tan bien la recta sigue a los datos. Dice qué parte de la variación de Y explica el modelo, de 0 a 1 (o 0 % a 100 %). Se calcula como 1 − SCR / SCT, donde SCR es la suma de cuadrados de los residuales y SCT la suma de cuadrados total (las desviaciones de Y respecto a su promedio).",
            "In plain words: **R²** is the \"grade\" for how well the line follows the data. It tells what share of Y's variation the model explains, from 0 to 1 (or 0% to 100%). It is computed as 1 − SSR / SST, where SSR is the sum of squared residuals and SST the total sum of squares (Y's deviations from its average).",
          ),
          t(
            "Un R² alto no significa que el modelo sea correcto ni causal, y uno bajo no siempre es malo: en rendimientos diarios de acciones, R² modestos son comunes porque hay mucho ruido.",
            "A high R² does not mean the model is correct or causal, and a low one is not always bad: in daily stock returns, modest R² values are common because there is a lot of noise.",
          ),
          t(
            "Para saber si un coeficiente es distinto de cero, usas su **estadístico t** = coeficiente / error estándar del coeficiente. Con muestras grandes, |t| > 1.96 indica significancia al 5 %. Un coeficiente puede ser **significativo** pero **pequeño**: revisa también si importa económicamente.",
            "To know whether a coefficient is different from zero, you use its **t statistic** = coefficient / coefficient's standard error. With large samples, |t| > 1.96 indicates significance at 5%. A coefficient can be **significant** but **small**: also check whether it matters economically.",
          ),
          t(
            "Mini ejemplo: SCT = 200 y SCR = 50 → R² = 1 − 50/200 = **0.75**: el modelo explica 75 % de la variación.",
            "Mini example: SST = 200 and SSR = 50 → R² = 1 − 50/200 = **0.75**: the model explains 75% of the variation.",
          ),
        ],
        formulas: [
          {
            name: t("Coeficiente de determinación R²", "Coefficient of determination R²"),
            expression: "R² = 1 − SCR ÷ SCT",
            variables: [
              { symbol: "R²", meaning: t("Parte de la variación de Y que explica el modelo, de 0 a 1 (× 100 para %).", "Share of Y's variation the model explains, from 0 to 1 (× 100 for %).") },
              { symbol: "SCR", meaning: t("Suma de cuadrados de los residuales: lo que el modelo NO explica.", "Sum of squared residuals: what the model does NOT explain.") },
              { symbol: "SCT", meaning: t("Suma de cuadrados total: cuánto varía Y en total respecto a su promedio.", "Total sum of squares: how much Y varies in total around its average.") },
            ],
            steps: [
              t("Divide SCR entre SCT: es la parte no explicada.", "Divide SSR by SST: that is the unexplained share."),
              t("Réstale ese resultado a 1.", "Subtract that result from 1."),
              t("Multiplica por 100 para leerlo en %.", "Multiply by 100 to read it in %."),
            ],
            example: t("SCR = 36 y SCT = 90: 36 ÷ 90 = 0.4; 1 − 0.4 = 0.6 → **60 %** de la variación explicada.", "SSR = 36 and SST = 90: 36 ÷ 90 = 0.4; 1 − 0.4 = 0.6 → **60%** of the variation explained."),
            interpret: t("Más cerca de 1 = mejor ajuste. Un R² alto no prueba causalidad.", "Closer to 1 = better fit. A high R² does not prove causation."),
            mistake: t("Quedarte con SCR ÷ SCT, que es la parte NO explicada.", "Stopping at SSR ÷ SST, which is the share NOT explained."),
          },
          {
            name: t("Estadístico t de un coeficiente", "t statistic of a coefficient"),
            expression: "t = b ÷ EE(b)     significativo al 5 % si |t| > 1.96",
            variables: [
              { symbol: "b", meaning: t("Coeficiente estimado (por ejemplo, la pendiente).", "Estimated coefficient (for example, the slope).") },
              { symbol: "EE(b)", meaning: t("Error estándar del coeficiente: qué tan impreciso es.", "Standard error of the coefficient: how imprecise it is.") },
              { symbol: "|t|", meaning: t("Valor de t sin signo.", "Value of t without its sign.") },
            ],
            steps: [
              t("Divide el coeficiente entre su error estándar.", "Divide the coefficient by its standard error."),
              t("Compara |t| con 1.96: si es mayor, el coeficiente es significativo al 5 % (muestras grandes).", "Compare |t| with 1.96: if larger, the coefficient is significant at 5% (large samples)."),
            ],
            example: t("b = 0.45 y EE(b) = 0.30: t = 0.45 ÷ 0.30 = **1.5**. Como 1.5 < 1.96, no es significativo al 5 %.", "b = 0.45 and SE(b) = 0.30: t = 0.45 ÷ 0.30 = **1.5**. Since 1.5 < 1.96, it is not significant at 5%."),
            interpret: t("Significativo = probablemente distinto de cero; revisa además si el tamaño importa en la práctica.", "Significant = probably different from zero; also check whether the size matters in practice."),
            mistake: t("Multiplicar en vez de dividir.", "Multiplying instead of dividing."),
          },
        ],
      },
      {
        heading: t("Regresión múltiple, variables dummy y sobreajuste", "Multiple regression, dummy variables and overfitting"),
        body: [
          t(
            "La **regresión múltiple** usa varias X a la vez: Y = a + b1·X1 + b2·X2 + … Cada coeficiente se interpreta **ceteris paribus**: cuánto cambia Y si sube una unidad esa X, **manteniendo constantes las demás**.",
            "**Multiple regression** uses several X at once: Y = a + b1·X1 + b2·X2 + … Each coefficient is interpreted **ceteris paribus**: how much Y changes if that X rises by one unit, **holding the others constant**.",
          ),
          t(
            "Una **variable dummy** vale 1 o 0 para capturar una característica sí/no, como \"es diciembre\" o \"la empresa es del sector bancario\". Su coeficiente es la diferencia promedio entre el grupo con 1 y el grupo con 0. Por ejemplo, ventas = 100 + 20 × Diciembre dice que en diciembre se vende 20 más.",
            "A **dummy variable** takes 1 or 0 to capture a yes/no feature, such as \"it is December\" or \"the company is in the banking sector\". Its coefficient is the average difference between the group with 1 and the group with 0. For example, sales = 100 + 20 × December says that 20 more is sold in December.",
          ),
          t(
            "Ojo con el **sobreajuste**: al agregar variables, el R² dentro de la muestra **nunca baja**, aunque las variables sean basura. Por eso se usa el **R² ajustado**, que penaliza variables extra, y se prueba el modelo con datos que no usó para estimarse. También cuida la **multicolinealidad**: si dos X se mueven casi igual, sus coeficientes se vuelven inestables.",
            "Beware of **overfitting**: when you add variables, the in-sample R² **never falls**, even if the variables are junk. That is why the **adjusted R²**, which penalizes extra variables, is used, and the model is tested on data not used to estimate it. Also watch for **multicollinearity**: if two X move almost identically, their coefficients become unstable.",
          ),
          t(
            "Mini ejemplo hipotético: rendimiento = 0.5 + 1.1 × Mercado − 0.3 × Dummy(crisis). Con mercado de 2 % en un mes sin crisis: 0.5 + 2.2 = **2.7 %**; el mismo mes con crisis: 2.7 − 0.3 = 2.4 %.",
            "Hypothetical mini example: return = 0.5 + 1.1 × Market − 0.3 × Dummy(crisis). With a 2% market in a non-crisis month: 0.5 + 2.2 = **2.7%**; the same month with crisis: 2.7 − 0.3 = 2.4%.",
          ),
        ],
        formulas: [
          {
            name: t("Predicción con regresión múltiple y variable dummy", "Prediction with multiple regression and a dummy variable"),
            expression: "Ŷ = a + b1 × X1 + b2 × X2 + … + c × D",
            variables: [
              { symbol: "Ŷ", meaning: t("Valor de Y que predice el modelo.", "Value of Y the model predicts.") },
              { symbol: "a", meaning: t("Ordenada: valor de Y cuando todas las X y D valen 0.", "Intercept: value of Y when all X and D are 0.") },
              { symbol: "b1, b2, …", meaning: t("Coeficientes: efecto de subir 1 unidad esa X, dejando las demás fijas.", "Coefficients: effect of raising that X by 1 unit, holding the others fixed.") },
              { symbol: "X1, X2, …", meaning: t("Valores de las variables explicativas.", "Values of the explaining variables.") },
              { symbol: "D", meaning: t("Variable dummy: 1 si se cumple la característica (sí), 0 si no.", "Dummy variable: 1 if the feature applies (yes), 0 if not.") },
              { symbol: "c", meaning: t("Coeficiente de la dummy: diferencia promedio entre el grupo con 1 y el grupo con 0.", "Dummy coefficient: average difference between the group with 1 and the group with 0.") },
            ],
            steps: [
              t("Multiplica cada coeficiente por el valor de su variable (respeta signos).", "Multiply each coefficient by its variable's value (keep the signs)."),
              t("Para la dummy pon 1 o 0 según el caso.", "For the dummy put 1 or 0 as the case may be."),
              t("Suma la ordenada y todos los productos.", "Add the intercept and all the products."),
            ],
            example: t("Ventas = 50 + 2 × Publicidad + 15 × Diciembre (miles de pesos, datos hipotéticos). Publicidad = 10 en diciembre: 50 + 2 × 10 + 15 × 1 = 50 + 20 + 15 = **85**. En otro mes: 50 + 20 + 15 × 0 = 70. La diferencia (15) es justo el coeficiente de la dummy.", "Sales = 50 + 2 × Advertising + 15 × December (thousands of pesos, hypothetical data). Advertising = 10 in December: 50 + 2 × 10 + 15 × 1 = 50 + 20 + 15 = **85**. In another month: 50 + 20 + 15 × 0 = 70. The difference (15) is exactly the dummy's coefficient."),
            mistake: t("Leer el coeficiente de la dummy como un porcentaje del grupo; es una diferencia en las unidades de Y.", "Reading the dummy coefficient as a percentage of the group; it is a difference in Y's units."),
          },
        ],
        bullets: [
          t("Coeficiente = efecto de una X manteniendo las demás constantes.", "Coefficient = effect of one X holding the others constant."),
          t("Dummy: 1 o 0; su coeficiente es una diferencia entre grupos.", "Dummy: 1 or 0; its coefficient is a difference between groups."),
          t("R² ajustado: penaliza agregar variables inútiles.", "Adjusted R²: penalizes adding useless variables."),
          t("Valida fuera de muestra para detectar sobreajuste.", "Validate out of sample to detect overfitting."),
        ],
      },
    ],
    examples: [
      {
        title: t("Regresión simple con cuatro datos", "Simple regression with four data points"),
        problem: t(
          "Con datos hipotéticos X = (1, 2, 3, 4) y Y = (3, 5, 4, 8), estima la recta de MCO y su R².",
          "With hypothetical data X = (1, 2, 3, 4) and Y = (3, 5, 4, 8), estimate the OLS line and its R².",
        ),
        steps: [
          t("Promedios: x̄ = 2.5 y ȳ = 5.", "Averages: x̄ = 2.5 and ȳ = 5."),
          t("Desviaciones de X: −1.5, −0.5, 0.5, 1.5; de Y: −2, 0, −1, 3.", "X deviations: −1.5, −0.5, 0.5, 1.5; Y deviations: −2, 0, −1, 3."),
          t("Suma de productos = 3 + 0 − 0.5 + 4.5 = 7; suma de cuadrados de X = 2.25 + 0.25 + 0.25 + 2.25 = 5.", "Sum of products = 3 + 0 − 0.5 + 4.5 = 7; sum of squares of X = 2.25 + 0.25 + 0.25 + 2.25 = 5."),
          t("b = 7 / 5 = 1.4; a = 5 − 1.4 × 2.5 = 1.5.", "b = 7 / 5 = 1.4; a = 5 − 1.4 × 2.5 = 1.5."),
          t("Predicciones: 2.9, 4.3, 5.7, 7.1; residuales: 0.1, 0.7, −1.7, 0.9 (suman 0).", "Predictions: 2.9, 4.3, 5.7, 7.1; residuals: 0.1, 0.7, −1.7, 0.9 (they add to 0)."),
          t("SCR = 0.01 + 0.49 + 2.89 + 0.81 = 4.2; SCT = 4 + 0 + 1 + 9 = 14; R² = 1 − 4.2/14 = 0.70.", "SSR = 0.01 + 0.49 + 2.89 + 0.81 = 4.2; SST = 4 + 0 + 1 + 9 = 14; R² = 1 − 4.2/14 = 0.70."),
        ],
        result: t("Ŷ = 1.5 + 1.4·X, con R² = 0.70: la recta explica 70 % de la variación de Y.", "Ŷ = 1.5 + 1.4·X, with R² = 0.70: the line explains 70% of Y's variation."),
      },
      {
        title: t("Predicción con una regresión múltiple", "Prediction with a multiple regression"),
        problem: t(
          "Un analista estima: rendimiento de la acción = 0.2 + 1.1 × Mercado + 0.4 × Tamaño, todo en % mensual (coeficientes hipotéticos). Este mes, Mercado = 2 % y el factor Tamaño = −1 %. ¿Qué rendimiento predice el modelo y qué significa el 0.4?",
          "An analyst estimates: stock return = 0.2 + 1.1 × Market + 0.4 × Size, all in % per month (hypothetical coefficients). This month, Market = 2% and the Size factor = −1%. What return does the model predict and what does the 0.4 mean?",
        ),
        steps: [
          t("Parte del mercado: 1.1 × 2 = 2.2.", "Market part: 1.1 × 2 = 2.2."),
          t("Parte del tamaño: 0.4 × (−1) = −0.4.", "Size part: 0.4 × (−1) = −0.4."),
          t("Predicción: 0.2 + 2.2 − 0.4 = 2.0 %.", "Prediction: 0.2 + 2.2 − 0.4 = 2.0%."),
          t("El 0.4 significa: si el factor Tamaño sube 1 punto, manteniendo fijo el Mercado, el rendimiento esperado sube 0.4 puntos.", "The 0.4 means: if the Size factor rises 1 point, holding Market fixed, the expected return rises 0.4 points."),
        ],
        result: t("El modelo predice 2.0 % este mes; cada coeficiente es un efecto \"manteniendo lo demás constante\".", "The model predicts 2.0% this month; each coefficient is a \"holding everything else constant\" effect."),
      },
    ],
    keyPoints: [
      t("MCO elige la recta que minimiza la suma de errores al cuadrado.", "OLS chooses the line that minimizes the sum of squared errors."),
      t("b = Cov(X, Y)/Var(X) y a = ȳ − b·x̄; la recta pasa por los promedios.", "b = Cov(X, Y)/Var(X) and a = ȳ − b·x̄; the line passes through the averages."),
      t("R² = 1 − SCR/SCT mide ajuste, no causalidad.", "R² = 1 − SSR/SST measures fit, not causation."),
      t("t = coeficiente / su error estándar; |t| > 1.96 ≈ significativo al 5 % con muestras grandes.", "t = coefficient / its standard error; |t| > 1.96 ≈ significant at 5% with large samples."),
      t("En regresión múltiple cada coeficiente es ceteris paribus; usa R² ajustado y validación fuera de muestra.", "In multiple regression each coefficient is ceteris paribus; use adjusted R² and out-of-sample validation."),
    ],
    normativeNote: NOTE_HYPO_ECON,
    exerciseIds: ['CUA-06-E1', 'CUA-06-E2', 'CUA-06-E3', 'CUA-06-E4', 'CUA-06-E5', 'CUA-06-E6'],
  },
]

export const exercises: Exercise[] = [
  // ═════════════════════════ CUA-01 ═════════════════════════
  {
    id: 'CUA-01-E1',
    level: 6,
    module: 'CUA-01',
    kind: 'mcq',
    flavor: 'concept',
    prompt: t(
      "¿Por qué los modelos cuantitativos suelen preferir los rendimientos logarítmicos sobre los simples?",
      "Why do quantitative models usually prefer log returns over simple returns?",
    ),
    options: [
      { id: 'CUA-01-E1-a', text: t("Porque siempre son mayores que los simples", "Because they are always larger than simple returns") },
      { id: 'CUA-01-E1-b', text: t("Porque se suman a lo largo del tiempo: el de varios días es la suma de los diarios", "Because they add up over time: the multi-day return is the sum of the daily ones") },
      { id: 'CUA-01-E1-c', text: t("Porque no pueden ser negativos", "Because they cannot be negative") },
      { id: 'CUA-01-E1-d', text: t("Porque eliminan el riesgo de la inversión", "Because they eliminate the investment's risk") },
    ],
    correctOptionId: 'CUA-01-E1-b',
    explanation: t(
      "Como ln(a × b) = ln a + ln b, el rendimiento log de un periodo largo es la suma de los rendimientos log de los subperiodos, lo que simplifica los modelos. Error común: creer que son mayores que los simples; en realidad son menores o iguales, y sí pueden ser negativos.",
      "Since ln(a × b) = ln a + ln b, the log return over a long period is the sum of the sub-period log returns, which simplifies models. Common mistake: believing they are larger than simple returns; they are actually smaller or equal, and they can be negative.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'quant-math',
  },
  {
    id: 'CUA-01-E2',
    level: 6,
    module: 'CUA-01',
    kind: 'numeric',
    flavor: 'case',
    context: t(
      "Una acción hipotética cierra ayer en $100 y hoy en $110.",
      "A hypothetical stock closes yesterday at $100 and today at $110.",
    ),
    prompt: t(
      "¿Cuál es el rendimiento logarítmico del día, en porcentaje (dos decimales)?",
      "What is the day's log return, as a percentage (two decimals)?",
    ),
    answer: 9.53,
    unit: '%',
    decimals: 2,
    tolerance: { abs: 0.01 },
    explanation: t(
      "r = ln(110 / 100) = ln(1.10) ≈ 0.09531 = 9.53 %. Error común: responder 10 %, que es el rendimiento simple; el logarítmico siempre es un poco menor cuando el precio sube.",
      "r = ln(110 / 100) = ln(1.10) ≈ 0.09531 = 9.53%. Common mistake: answering 10%, which is the simple return; the log return is always a bit smaller when the price rises.",
    ),
    difficulty: 1,
    points: 15,
    competency: 'quant-math',
  },
  {
    id: 'CUA-01-E3',
    level: 6,
    module: 'CUA-01',
    kind: 'numeric',
    flavor: 'case',
    context: t(
      "Inviertes $10,000 a una tasa hipotética de 8 % anual con capitalización continua durante 2 años.",
      "You invest $10,000 at a hypothetical 8% annual rate with continuous compounding for 2 years.",
    ),
    prompt: t(
      "¿Cuál es el monto final con capitalización continua? Redondea a centavos.",
      "What is the final amount with continuous compounding? Round to cents.",
    ),
    answer: 11735.11,
    unit: 'MXN',
    decimals: 2,
    tolerance: { abs: 0.5 },
    explanation: t(
      "M = C × e^(i·t) = 10,000 × e^(0.08 × 2) = 10,000 × e^0.16 ≈ 10,000 × 1.173511 = $11,735.11. Error común: usar la fórmula de capitalización anual (1.08² → $11,664) o escribir la tasa como 8 en vez de 0.08 en el exponente.",
      "M = C × e^(i·t) = 10,000 × e^(0.08 × 2) = 10,000 × e^0.16 ≈ 10,000 × 1.173511 = $11,735.11. Common mistake: using the annual compounding formula (1.08² → $11,664) or writing the rate as 8 instead of 0.08 in the exponent.",
    ),
    difficulty: 2,
    points: 15,
    competency: 'quant-math',
  },
  {
    id: 'CUA-01-E4',
    level: 6,
    module: 'CUA-01',
    kind: 'truefalse',
    flavor: 'concept',
    prompt: t(
      "Si el precio de un activo sube 20 % un día y baja 20 % al día siguiente, el activo termina exactamente en su precio inicial.",
      "If an asset's price rises 20% one day and falls 20% the next day, the asset ends up exactly at its initial price.",
    ),
    answer: false,
    explanation: t(
      "Los rendimientos simples se combinan multiplicando: 1.20 × 0.80 = 0.96, así que el activo termina 4 % abajo. La bajada de 20 % se aplica sobre un precio más alto. Error común: sumar +20 % y −20 % y concluir que el resultado es 0 %.",
      "Simple returns combine by multiplying: 1.20 × 0.80 = 0.96, so the asset ends 4% lower. The 20% drop is applied to a higher price. Common mistake: adding +20% and −20% and concluding the result is 0%.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'quant-math',
  },
  {
    id: 'CUA-01-E5',
    level: 6,
    module: 'CUA-01',
    kind: 'fields',
    flavor: 'case',
    context: t(
      "Un ETF hipotético cotiza en $80 el lunes, $84 el martes y $79.80 el miércoles.",
      "A hypothetical ETF trades at $80 on Monday, $84 on Tuesday and $79.80 on Wednesday.",
    ),
    prompt: t(
      "Calcula el rendimiento simple del martes, el del miércoles y el rendimiento simple total de lunes a miércoles, en porcentaje.",
      "Compute Tuesday's simple return, Wednesday's simple return and the total simple return from Monday to Wednesday, as percentages.",
    ),
    fields: [
      { id: 'f1', label: t("Rendimiento del martes", "Tuesday's return"), answer: 5, unit: '%', tolerance: { abs: 0.01 } },
      { id: 'f2', label: t("Rendimiento del miércoles", "Wednesday's return"), answer: -5, unit: '%', tolerance: { abs: 0.01 } },
      { id: 'f3', label: t("Rendimiento total lunes a miércoles", "Total return Monday to Wednesday"), answer: -0.25, unit: '%', tolerance: { abs: 0.01 } },
    ],
    explanation: t(
      "Martes: 84/80 − 1 = 5 %. Miércoles: 79.80/84 − 1 = 0.95 − 1 = −5 %. Total: 79.80/80 − 1 = −0.25 %, igual a 1.05 × 0.95 − 1. Error común: sumar 5 % y −5 % y responder 0 % para el total.",
      "Tuesday: 84/80 − 1 = 5%. Wednesday: 79.80/84 − 1 = 0.95 − 1 = −5%. Total: 79.80/80 − 1 = −0.25%, equal to 1.05 × 0.95 − 1. Common mistake: adding 5% and −5% and answering 0% for the total.",
    ),
    difficulty: 2,
    points: 20,
    competency: 'quant-math',
  },
  {
    id: 'CUA-01-E6',
    level: 6,
    module: 'CUA-01',
    kind: 'formula',
    flavor: 'concept',
    prompt: t(
      "Completa la fórmula de la suma de los primeros n términos de una serie geométrica.",
      "Complete the formula for the sum of the first n terms of a geometric series.",
    ),
    template: 'S = {{b1}} × (1 − {{b2}}) / (1 − {{b3}})',
    blanks: [
      {
        id: 'b1',
        options: [
          { id: 'CUA-01-E6-b1-a', text: t("a (primer término)", "a (first term)") },
          { id: 'CUA-01-E6-b1-b', text: t("n (número de términos)", "n (number of terms)") },
          { id: 'CUA-01-E6-b1-c', text: t("e (base del logaritmo natural)", "e (base of the natural logarithm)") },
        ],
        correctOptionId: 'CUA-01-E6-b1-a',
      },
      {
        id: 'b2',
        options: [
          { id: 'CUA-01-E6-b2-a', text: t("n × r", "n × r") },
          { id: 'CUA-01-E6-b2-b', text: t("r^n (razón elevada a n)", "r^n (ratio raised to n)") },
          { id: 'CUA-01-E6-b2-c', text: t("a^n", "a^n") },
        ],
        correctOptionId: 'CUA-01-E6-b2-b',
      },
      {
        id: 'b3',
        options: [
          { id: 'CUA-01-E6-b3-a', text: t("a (primer término)", "a (first term)") },
          { id: 'CUA-01-E6-b3-b', text: t("n (número de términos)", "n (number of terms)") },
          { id: 'CUA-01-E6-b3-c', text: t("r (razón)", "r (ratio)") },
        ],
        correctOptionId: 'CUA-01-E6-b3-c',
      },
    ],
    explanation: t(
      "S = a × (1 − r^n) / (1 − r): primer término por (1 menos la razón elevada a n) entre (1 menos la razón). Error común: escribir n × r en lugar de r^n; la razón se multiplica por sí misma n veces, no se multiplica por n.",
      "S = a × (1 − r^n) / (1 − r): first term times (1 minus the ratio raised to n) divided by (1 minus the ratio). Common mistake: writing n × r instead of r^n; the ratio is multiplied by itself n times, not multiplied by n.",
    ),
    difficulty: 1,
    points: 15,
    competency: 'quant-math',
  },

  // ═════════════════════════ CUA-02 ═════════════════════════
  {
    id: 'CUA-02-E1',
    level: 6,
    module: 'CUA-02',
    kind: 'numeric',
    flavor: 'case',
    context: t(
      "Un portafolio hipotético tiene pesos w = (0.5, 0.3, 0.2) en tres activos. Este año los rendimientos fueron R = (10 %, 4 %, −5 %).",
      "A hypothetical portfolio has weights w = (0.5, 0.3, 0.2) in three assets. This year the returns were R = (10%, 4%, −5%).",
    ),
    prompt: t(
      "Calcula el rendimiento del portafolio como el producto punto w · R, en porcentaje.",
      "Compute the portfolio return as the dot product w · R, as a percentage.",
    ),
    answer: 5.2,
    unit: '%',
    decimals: 2,
    tolerance: { abs: 0.01 },
    explanation: t(
      "w · R = 0.5 × 10 + 0.3 × 4 + 0.2 × (−5) = 5 + 1.2 − 1 = 5.2 %. Error común: promediar los rendimientos sin pesos ((10 + 4 − 5)/3 = 3 %) u olvidar el signo negativo del tercer activo.",
      "w · R = 0.5 × 10 + 0.3 × 4 + 0.2 × (−5) = 5 + 1.2 − 1 = 5.2%. Common mistake: averaging returns without weights ((10 + 4 − 5)/3 = 3%) or forgetting the third asset's negative sign.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'linear-algebra-calculus',
  },
  {
    id: 'CUA-02-E2',
    level: 6,
    module: 'CUA-02',
    kind: 'mcq',
    flavor: 'concept',
    prompt: t(
      "La matriz A es de 3 × 2 y la matriz B es de 2 × 4. ¿Qué tamaño tiene el producto A × B?",
      "Matrix A is 3 × 2 and matrix B is 2 × 4. What size is the product A × B?",
    ),
    options: [
      { id: 'CUA-02-E2-a', text: t("2 × 2", "2 × 2") },
      { id: 'CUA-02-E2-b', text: t("3 × 4", "3 × 4") },
      { id: 'CUA-02-E2-c', text: t("4 × 3", "4 × 3") },
      { id: 'CUA-02-E2-d', text: t("No se puede multiplicar", "It cannot be multiplied") },
    ],
    correctOptionId: 'CUA-02-E2-b',
    explanation: t(
      "Las columnas de A (2) coinciden con las filas de B (2), así que sí se pueden multiplicar; el resultado toma las filas de A y las columnas de B: 3 × 4. Error común: pensar que el resultado conserva la dimensión que coincide (2 × 2) o invertir el orden (4 × 3).",
      "A's columns (2) match B's rows (2), so they can be multiplied; the result takes A's rows and B's columns: 3 × 4. Common mistake: thinking the result keeps the matching dimension (2 × 2) or reversing the order (4 × 3).",
    ),
    difficulty: 1,
    points: 10,
    competency: 'linear-algebra-calculus',
  },
  {
    id: 'CUA-02-E3',
    level: 6,
    module: 'CUA-02',
    kind: 'fields',
    flavor: 'case',
    context: t(
      "Un analista arma dos ecuaciones para encontrar cuántas unidades x y y de dos bonos hipotéticos replican ciertos flujos: 4x + 2y = 20 y x + 3y = 15. En forma matricial, A = [[4, 2], [1, 3]] y b = (20, 15).",
      "An analyst sets up two equations to find how many units x and y of two hypothetical bonds replicate certain cash flows: 4x + 2y = 20 and x + 3y = 15. In matrix form, A = [[4, 2], [1, 3]] and b = (20, 15).",
    ),
    prompt: t(
      "Calcula el determinante de A y resuelve el sistema para x y y.",
      "Compute the determinant of A and solve the system for x and y.",
    ),
    fields: [
      { id: 'f1', label: t("Determinante de A", "Determinant of A"), answer: 10, unit: 'none', tolerance: { abs: 0.001 } },
      { id: 'f2', label: t("x", "x"), answer: 3, unit: 'units', tolerance: { abs: 0.001 } },
      { id: 'f3', label: t("y", "y"), answer: 4, unit: 'units', tolerance: { abs: 0.001 } },
    ],
    explanation: t(
      "det = 4 × 3 − 2 × 1 = 10. A⁻¹ = (1/10) × [[3, −2], [−1, 4]]. x = (3 × 20 − 2 × 15)/10 = 30/10 = 3; y = (−1 × 20 + 4 × 15)/10 = 40/10 = 4. Comprobación: 4(3) + 2(4) = 20 y 3 + 3(4) = 15. Error común: calcular el determinante como ad + bc o no cambiar los signos de b y c en la inversa.",
      "det = 4 × 3 − 2 × 1 = 10. A⁻¹ = (1/10) × [[3, −2], [−1, 4]]. x = (3 × 20 − 2 × 15)/10 = 30/10 = 3; y = (−1 × 20 + 4 × 15)/10 = 40/10 = 4. Check: 4(3) + 2(4) = 20 and 3 + 3(4) = 15. Common mistake: computing the determinant as ad + bc or not flipping the signs of b and c in the inverse.",
    ),
    difficulty: 2,
    points: 20,
    competency: 'linear-algebra-calculus',
  },
  {
    id: 'CUA-02-E4',
    level: 6,
    module: 'CUA-02',
    kind: 'numeric',
    flavor: 'case',
    context: t(
      "Un pequeño fabricante estima que su utilidad mensual, en miles de pesos, es U(q) = −2q² + 80q − 300, donde q son las unidades producidas (modelo hipotético).",
      "A small manufacturer estimates its monthly profit, in thousands of pesos, is U(q) = −2q² + 80q − 300, where q is the units produced (hypothetical model).",
    ),
    prompt: t(
      "Usando la derivada, ¿cuántas unidades maximizan la utilidad?",
      "Using the derivative, how many units maximize profit?",
    ),
    answer: 20,
    unit: 'units',
    decimals: 0,
    tolerance: { abs: 0.01 },
    explanation: t(
      "U'(q) = −4q + 80. Igualando a cero: q = 80/4 = 20. Como el término −2q² es negativo, es un máximo (utilidad de −800 + 1,600 − 300 = 500 mil). Error común: derivar −2q² como −2q (olvidar multiplicar por el exponente) y obtener q = 40.",
      "U'(q) = −4q + 80. Setting it to zero: q = 80/4 = 20. Since the −2q² term is negative, it is a maximum (profit of −800 + 1,600 − 300 = 500 thousand). Common mistake: differentiating −2q² as −2q (forgetting to multiply by the exponent) and getting q = 40.",
    ),
    difficulty: 2,
    points: 15,
    competency: 'linear-algebra-calculus',
  },
  {
    id: 'CUA-02-E5',
    level: 6,
    module: 'CUA-02',
    kind: 'truefalse',
    flavor: 'concept',
    prompt: t(
      "Para dos matrices cuadradas del mismo tamaño, A × B siempre es igual a B × A.",
      "For two square matrices of the same size, A × B always equals B × A.",
    ),
    answer: false,
    explanation: t(
      "La multiplicación de matrices en general no es conmutativa: el orden cambia el resultado. Solo en casos especiales (por ejemplo, con la identidad) coinciden. Error común: trasladar la regla de los números (3 × 5 = 5 × 3) a las matrices.",
      "Matrix multiplication is generally not commutative: order changes the result. Only in special cases (for example, with the identity) do they match. Common mistake: carrying over the rule for numbers (3 × 5 = 5 × 3) to matrices.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'linear-algebra-calculus',
  },
  {
    id: 'CUA-02-E6',
    level: 6,
    module: 'CUA-02',
    kind: 'classify',
    flavor: 'concept',
    prompt: t(
      "Clasifica cada tarea cuantitativa según la herramienta matemática principal que usa: álgebra lineal o cálculo.",
      "Classify each quantitative task by the main mathematical tool it uses: linear algebra or calculus.",
    ),
    categories: [
      { id: 'CUA-02-E6-c1', label: t("Álgebra lineal", "Linear algebra") },
      { id: 'CUA-02-E6-c2', label: t("Cálculo", "Calculus") },
    ],
    items: [
      { id: 'CUA-02-E6-i1', label: t("Calcular el rendimiento de 50 activos ponderados con un producto punto", "Computing the weighted return of 50 assets with a dot product"), correctCategoryId: 'CUA-02-E6-c1' },
      { id: 'CUA-02-E6-i2', label: t("Medir cuánto cambia el precio de un bono si la tasa sube un poco", "Measuring how much a bond's price changes if the rate rises slightly"), correctCategoryId: 'CUA-02-E6-c2' },
      { id: 'CUA-02-E6-i3', label: t("Resolver un sistema de ecuaciones con la inversa de una matriz", "Solving a system of equations with a matrix inverse"), correctCategoryId: 'CUA-02-E6-c1' },
      { id: 'CUA-02-E6-i4', label: t("Encontrar el precio que maximiza el ingreso igualando la derivada a cero", "Finding the price that maximizes revenue by setting the derivative to zero"), correctCategoryId: 'CUA-02-E6-c2' },
      { id: 'CUA-02-E6-i5', label: t("Organizar las covarianzas de 10 activos en una tabla cuadrada", "Organizing the covariances of 10 assets in a square table"), correctCategoryId: 'CUA-02-E6-c1' },
      { id: 'CUA-02-E6-i6', label: t("Acumular un flujo continuo de ingresos a lo largo del tiempo con una integral", "Accumulating a continuous income flow over time with an integral"), correctCategoryId: 'CUA-02-E6-c2' },
    ],
    explanation: t(
      "Vectores, matrices, inversas y la matriz de covarianzas son álgebra lineal: organizan y combinan muchos números a la vez. Sensibilidades, óptimos (derivada = 0) e integrales son cálculo: estudian cambios y acumulaciones. Error común: clasificar la matriz de covarianzas como cálculo por ser \"estadística\"; su manejo es matricial.",
      "Vectors, matrices, inverses and the covariance matrix are linear algebra: they organize and combine many numbers at once. Sensitivities, optima (derivative = 0) and integrals are calculus: they study changes and accumulations. Common mistake: classifying the covariance matrix as calculus because it is \"statistics\"; it is handled with matrices.",
    ),
    difficulty: 1,
    points: 15,
    competency: 'linear-algebra-calculus',
  },

  // ═════════════════════════ CUA-03 ═════════════════════════
  {
    id: 'CUA-03-E1',
    level: 6,
    module: 'CUA-03',
    kind: 'fields',
    flavor: 'case',
    context: t(
      "Un analista asigna escenarios hipotéticos al rendimiento anual de una acción: recesión (probabilidad 0.2) con −10 %, normal (0.5) con 5 % y auge (0.3) con 20 %.",
      "An analyst assigns hypothetical scenarios to a stock's annual return: recession (probability 0.2) with −10%, normal (0.5) with 5% and boom (0.3) with 20%.",
    ),
    prompt: t(
      "Calcula el rendimiento esperado (%), la varianza (en %²) y la desviación estándar (%) de la acción.",
      "Compute the stock's expected return (%), variance (in %²) and standard deviation (%).",
    ),
    fields: [
      { id: 'f1', label: t("Rendimiento esperado", "Expected return"), answer: 6.5, unit: '%', tolerance: { abs: 0.01 } },
      { id: 'f2', label: t("Varianza (%²)", "Variance (%²)"), answer: 110.25, unit: 'none', tolerance: { abs: 0.05 } },
      { id: 'f3', label: t("Desviación estándar", "Standard deviation"), answer: 10.5, unit: '%', tolerance: { abs: 0.01 } },
    ],
    explanation: t(
      "E = 0.2(−10) + 0.5(5) + 0.3(20) = −2 + 2.5 + 6 = 6.5 %. Varianza = 0.2(−16.5)² + 0.5(−1.5)² + 0.3(13.5)² = 54.45 + 1.125 + 54.675 = 110.25. σ = √110.25 = 10.5 %. Error común: olvidar ponderar cada distancia al cuadrado por su probabilidad, o reportar la varianza como si fuera la desviación estándar.",
      "E = 0.2(−10) + 0.5(5) + 0.3(20) = −2 + 2.5 + 6 = 6.5%. Variance = 0.2(−16.5)² + 0.5(−1.5)² + 0.3(13.5)² = 54.45 + 1.125 + 54.675 = 110.25. σ = √110.25 = 10.5%. Common mistake: forgetting to weight each squared distance by its probability, or reporting the variance as if it were the standard deviation.",
    ),
    difficulty: 2,
    points: 20,
    competency: 'probability-statistics',
  },
  {
    id: 'CUA-03-E2',
    level: 6,
    module: 'CUA-03',
    kind: 'numeric',
    flavor: 'case',
    context: t(
      "Con datos hipotéticos, la covarianza entre los rendimientos mensuales de dos acciones es 0.0012. Sus desviaciones estándar mensuales son 4 % (0.04) y 5 % (0.05).",
      "With hypothetical data, the covariance between two stocks' monthly returns is 0.0012. Their monthly standard deviations are 4% (0.04) and 5% (0.05).",
    ),
    prompt: t(
      "¿Cuál es la correlación entre ambas acciones?",
      "What is the correlation between the two stocks?",
    ),
    answer: 0.6,
    unit: 'none',
    decimals: 2,
    tolerance: { abs: 0.005 },
    explanation: t(
      "ρ = Cov / (σA × σB) = 0.0012 / (0.04 × 0.05) = 0.0012 / 0.002 = 0.6: se mueven juntas con fuerza moderada. Error común: mezclar unidades (usar 4 y 5 en vez de 0.04 y 0.05) y obtener 0.00006, o dividir solo entre una desviación estándar.",
      "ρ = Cov / (σA × σB) = 0.0012 / (0.04 × 0.05) = 0.0012 / 0.002 = 0.6: they move together with moderate strength. Common mistake: mixing units (using 4 and 5 instead of 0.04 and 0.05) and getting 0.00006, or dividing by only one standard deviation.",
    ),
    difficulty: 1,
    points: 15,
    competency: 'probability-statistics',
  },
  {
    id: 'CUA-03-E3',
    level: 6,
    module: 'CUA-03',
    kind: 'mcq',
    flavor: 'concept',
    prompt: t(
      "Según la regla empírica de la distribución normal, ¿qué porcentaje aproximado de los datos cae dentro de ±2 desviaciones estándar de la media?",
      "According to the empirical rule of the normal distribution, roughly what percentage of the data falls within ±2 standard deviations of the mean?",
    ),
    options: [
      { id: 'CUA-03-E3-a', text: t("50 %", "50%") },
      { id: 'CUA-03-E3-b', text: t("68 %", "68%") },
      { id: 'CUA-03-E3-c', text: t("95 %", "95%") },
      { id: 'CUA-03-E3-d', text: t("99.7 %", "99.7%") },
    ],
    correctOptionId: 'CUA-03-E3-c',
    explanation: t(
      "Regla 68-95-99.7: ±1σ ≈ 68 %, ±2σ ≈ 95 %, ±3σ ≈ 99.7 %. Error común: confundir el nivel y responder 68 % (que corresponde a ±1σ) o 99.7 % (±3σ).",
      "68-95-99.7 rule: ±1σ ≈ 68%, ±2σ ≈ 95%, ±3σ ≈ 99.7%. Common mistake: mixing up the levels and answering 68% (which is ±1σ) or 99.7% (±3σ).",
    ),
    difficulty: 1,
    points: 10,
    competency: 'probability-statistics',
  },
  {
    id: 'CUA-03-E4',
    level: 6,
    module: 'CUA-03',
    kind: 'numeric',
    flavor: 'case',
    context: t(
      "El rendimiento mensual de un fondo hipotético tiene media de 2 % y desviación estándar de 5 %. Un mes, el fondo rindió −8 %.",
      "A hypothetical fund's monthly return has a mean of 2% and a standard deviation of 5%. One month, the fund returned −8%.",
    ),
    prompt: t(
      "¿Cuál es el puntaje z de ese mes?",
      "What is that month's z-score?",
    ),
    answer: -2,
    unit: 'none',
    decimals: 2,
    tolerance: { abs: 0.01 },
    explanation: t(
      "z = (x − μ) / σ = (−8 − 2) / 5 = −10 / 5 = −2: el mes quedó 2 desviaciones estándar por debajo del promedio. Error común: olvidar restar la media y calcular −8 / 5 = −1.6, o perder el signo negativo.",
      "z = (x − μ) / σ = (−8 − 2) / 5 = −10 / 5 = −2: the month was 2 standard deviations below average. Common mistake: forgetting to subtract the mean and computing −8 / 5 = −1.6, or dropping the negative sign.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'probability-statistics',
  },
  {
    id: 'CUA-03-E5',
    level: 6,
    module: 'CUA-03',
    kind: 'truefalse',
    flavor: 'concept',
    prompt: t(
      "Si la correlación entre dos variables financieras es exactamente cero, entonces las variables son necesariamente independientes.",
      "If the correlation between two financial variables is exactly zero, then the variables are necessarily independent.",
    ),
    answer: false,
    explanation: t(
      "La correlación solo mide relación lineal. Dos variables pueden tener correlación cero y aun así depender una de la otra de forma no lineal (por ejemplo, Y = X² con X simétrica alrededor de cero). Error común: tratar \"sin correlación\" como sinónimo de \"sin relación\".",
      "Correlation only measures linear relationship. Two variables can have zero correlation and still depend on each other nonlinearly (for example, Y = X² with X symmetric around zero). Common mistake: treating \"uncorrelated\" as a synonym for \"unrelated\".",
    ),
    difficulty: 2,
    points: 15,
    competency: 'probability-statistics',
  },
  {
    id: 'CUA-03-E6',
    level: 6,
    module: 'CUA-03',
    kind: 'multi',
    flavor: 'interpret',
    prompt: t(
      "¿Cuáles afirmaciones sobre las colas de los rendimientos financieros son correctas? Selecciona todas las que apliquen.",
      "Which statements about the tails of financial returns are correct? Select all that apply.",
    ),
    options: [
      { id: 'CUA-03-E6-a', text: t("Los rendimientos reales suelen tener colas más pesadas que la normal", "Real returns usually have fatter tails than the normal") },
      { id: 'CUA-03-E6-b', text: t("Suponer normalidad cuando hay colas pesadas tiende a subestimar la probabilidad de caídas extremas", "Assuming normality when there are fat tails tends to underestimate the probability of extreme drops") },
      { id: 'CUA-03-E6-c', text: t("Una curtosis alta indica que los eventos extremos son menos frecuentes que en la normal", "High kurtosis indicates extreme events are less frequent than in the normal") },
      { id: 'CUA-03-E6-d', text: t("La distribución normal es asimétrica por definición", "The normal distribution is asymmetric by definition") },
    ],
    correctOptionIds: ['CUA-03-E6-a', 'CUA-03-E6-b'],
    explanation: t(
      "Los mercados muestran colas pesadas (curtosis alta): los extremos ocurren más seguido de lo que predice la normal, así que usarla sin ajustes subestima el riesgo extremo. La curtosis alta significa más extremos, no menos, y la normal es simétrica. Error común: confundir curtosis alta con una distribución \"más concentrada\" y por tanto más segura.",
      "Markets show fat tails (high kurtosis): extremes occur more often than the normal predicts, so using it without adjustments underestimates extreme risk. High kurtosis means more extremes, not fewer, and the normal is symmetric. Common mistake: confusing high kurtosis with a \"more concentrated\" and therefore safer distribution.",
    ),
    difficulty: 2,
    points: 15,
    competency: 'probability-statistics',
  },

  // ═════════════════════════ CUA-04 ═════════════════════════
  {
    id: 'CUA-04-E1',
    level: 6,
    module: 'CUA-04',
    kind: 'numeric',
    flavor: 'case',
    context: t(
      "Tienes 36 meses de rendimientos hipotéticos de una estrategia, con desviación estándar muestral de 6 % mensual.",
      "You have 36 months of hypothetical returns from a strategy, with a sample standard deviation of 6% a month.",
    ),
    prompt: t(
      "¿Cuál es el error estándar de la media muestral, en porcentaje?",
      "What is the standard error of the sample mean, as a percentage?",
    ),
    answer: 1,
    unit: '%',
    decimals: 2,
    tolerance: { abs: 0.01 },
    explanation: t(
      "EE = s / √n = 6 / √36 = 6 / 6 = 1 %. Error común: dividir entre n (6/36 ≈ 0.17 %) en lugar de entre la raíz de n.",
      "SE = s / √n = 6 / √36 = 6 / 6 = 1%. Common mistake: dividing by n (6/36 ≈ 0.17%) instead of by the square root of n.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'statistical-inference',
  },
  {
    id: 'CUA-04-E2',
    level: 6,
    module: 'CUA-04',
    kind: 'fields',
    flavor: 'case',
    context: t(
      "Un fondo hipotético tiene 100 meses de historia, con rendimiento promedio de 1.2 % mensual y desviación estándar muestral de 5 %.",
      "A hypothetical fund has 100 months of history, with an average return of 1.2% a month and a sample standard deviation of 5%.",
    ),
    prompt: t(
      "Calcula el error estándar y los límites inferior y superior del intervalo de confianza del 95 % (usa 1.96), en porcentaje.",
      "Compute the standard error and the lower and upper bounds of the 95% confidence interval (use 1.96), as percentages.",
    ),
    fields: [
      { id: 'f1', label: t("Error estándar", "Standard error"), answer: 0.5, unit: '%', tolerance: { abs: 0.005 } },
      { id: 'f2', label: t("Límite inferior", "Lower bound"), answer: 0.22, unit: '%', tolerance: { abs: 0.005 } },
      { id: 'f3', label: t("Límite superior", "Upper bound"), answer: 2.18, unit: '%', tolerance: { abs: 0.005 } },
    ],
    explanation: t(
      "EE = 5 / √100 = 0.5 %. Margen = 1.96 × 0.5 = 0.98 %. Intervalo: 1.2 − 0.98 = 0.22 % y 1.2 + 0.98 = 2.18 %. Como no incluye el 0, hay evidencia de un promedio positivo. Error común: usar la desviación estándar (5 %) en vez del error estándar para el margen, lo que da un intervalo enorme.",
      "SE = 5 / √100 = 0.5%. Margin = 1.96 × 0.5 = 0.98%. Interval: 1.2 − 0.98 = 0.22% and 1.2 + 0.98 = 2.18%. Since it does not include 0, there is evidence of a positive average. Common mistake: using the standard deviation (5%) instead of the standard error for the margin, which gives a huge interval.",
    ),
    difficulty: 2,
    points: 20,
    competency: 'statistical-inference',
  },
  {
    id: 'CUA-04-E3',
    level: 6,
    module: 'CUA-04',
    kind: 'numeric',
    flavor: 'case',
    context: t(
      "Una estrategia hipotética tiene 64 meses de exceso de rendimiento, con promedio de 0.8 % y desviación estándar de 4 %. Quieres probar H0: μ = 0.",
      "A hypothetical strategy has 64 months of excess returns, with an average of 0.8% and a standard deviation of 4%. You want to test H0: μ = 0.",
    ),
    prompt: t(
      "¿Cuál es el estadístico t de la prueba?",
      "What is the test's t statistic?",
    ),
    answer: 1.6,
    unit: 'none',
    decimals: 2,
    tolerance: { abs: 0.01 },
    explanation: t(
      "EE = 4 / √64 = 4 / 8 = 0.5. t = (0.8 − 0) / 0.5 = 1.6. Como 1.6 < 1.96, no se rechaza H0 al 5 % (dos colas). Error común: dividir el promedio entre la desviación estándar (0.8 / 4 = 0.2) en vez de entre el error estándar.",
      "SE = 4 / √64 = 4 / 8 = 0.5. t = (0.8 − 0) / 0.5 = 1.6. Since 1.6 < 1.96, H0 is not rejected at 5% (two tails). Common mistake: dividing the average by the standard deviation (0.8 / 4 = 0.2) instead of by the standard error.",
    ),
    difficulty: 2,
    points: 15,
    competency: 'statistical-inference',
  },
  {
    id: 'CUA-04-E4',
    level: 6,
    module: 'CUA-04',
    kind: 'mcq',
    flavor: 'interpret',
    prompt: t(
      "Una prueba sobre el rendimiento promedio de un fondo da un valor p de 0.03 y tu nivel de significancia es 5 %. ¿Qué concluyes?",
      "A test on a fund's average return gives a p-value of 0.03 and your significance level is 5%. What do you conclude?",
    ),
    options: [
      { id: 'CUA-04-E4-a', text: t("Rechazas H0: hay evidencia estadística contra ella al 5 %", "You reject H0: there is statistical evidence against it at 5%") },
      { id: 'CUA-04-E4-b', text: t("Aceptas H0 como verdadera", "You accept H0 as true") },
      { id: 'CUA-04-E4-c', text: t("Hay 3 % de probabilidad de que H1 sea cierta", "There is a 3% probability that H1 is true") },
      { id: 'CUA-04-E4-d', text: t("No se puede concluir nada sin conocer el R²", "Nothing can be concluded without knowing R²") },
    ],
    correctOptionId: 'CUA-04-E4-a',
    explanation: t(
      "Como 0.03 < 0.05, rechazas H0. El valor p es la probabilidad de ver un resultado así de extremo si H0 fuera cierta, no la probabilidad de que H1 (o H0) sea verdadera. Error común: leer el valor p como \"probabilidad de que la hipótesis sea cierta\".",
      "Since 0.03 < 0.05, you reject H0. The p-value is the probability of seeing a result this extreme if H0 were true, not the probability that H1 (or H0) is true. Common mistake: reading the p-value as \"the probability that the hypothesis is true\".",
    ),
    difficulty: 1,
    points: 10,
    competency: 'statistical-inference',
  },
  {
    id: 'CUA-04-E5',
    level: 6,
    module: 'CUA-04',
    kind: 'classify',
    flavor: 'case',
    prompt: t(
      "Clasifica cada situación como error tipo I (falso positivo) o error tipo II (falso negativo).",
      "Classify each situation as a type I error (false positive) or a type II error (false negative).",
    ),
    categories: [
      { id: 'CUA-04-E5-c1', label: t("Error tipo I", "Type I error") },
      { id: 'CUA-04-E5-c2', label: t("Error tipo II", "Type II error") },
    ],
    items: [
      { id: 'CUA-04-E5-i1', label: t("Concluyes que una estrategia gana, pero en realidad sus resultados fueron pura suerte", "You conclude a strategy wins, but its results were actually pure luck"), correctCategoryId: 'CUA-04-E5-c1' },
      { id: 'CUA-04-E5-i2', label: t("Descartas un indicador que sí predecía rendimientos porque la prueba no fue significativa", "You discard an indicator that did predict returns because the test was not significant"), correctCategoryId: 'CUA-04-E5-c2' },
      { id: 'CUA-04-E5-i3', label: t("Declaras que un gestor tiene habilidad cuando su alfa verdadero es cero", "You declare a manager is skilled when their true alpha is zero"), correctCategoryId: 'CUA-04-E5-c1' },
      { id: 'CUA-04-E5-i4', label: t("Con pocos datos, no detectas que un fondo realmente tiene un rendimiento promedio positivo", "With little data, you fail to detect that a fund really has a positive average return"), correctCategoryId: 'CUA-04-E5-c2' },
    ],
    explanation: t(
      "Tipo I: rechazar H0 cuando es cierta (ver un efecto que no existe: estrategia o gestor \"ganador\" por suerte). Tipo II: no rechazar H0 cuando es falsa (no ver un efecto que sí existe, a menudo por falta de datos). Error común: invertirlos; recuerda que H0 suele ser \"no hay efecto\".",
      "Type I: rejecting H0 when it is true (seeing an effect that does not exist: a \"winning\" strategy or manager by luck). Type II: not rejecting H0 when it is false (missing an effect that does exist, often for lack of data). Common mistake: swapping them; remember H0 is usually \"no effect\".",
    ),
    difficulty: 2,
    points: 15,
    competency: 'statistical-inference',
  },
  {
    id: 'CUA-04-E6',
    level: 6,
    module: 'CUA-04',
    kind: 'truefalse',
    flavor: 'concept',
    prompt: t(
      "Si una prueba estadística no rechaza la hipótesis nula, queda demostrado que la hipótesis nula es verdadera.",
      "If a statistical test does not reject the null hypothesis, it is proven that the null hypothesis is true.",
    ),
    answer: false,
    explanation: t(
      "No rechazar H0 solo significa que los datos no dieron evidencia suficiente en su contra; puede deberse a pocos datos o mucho ruido (riesgo de error tipo II). Error común: decir \"aceptamos H0\" como si fuera una prueba de que es cierta.",
      "Not rejecting H0 only means the data did not provide enough evidence against it; it may be due to little data or a lot of noise (risk of a type II error). Common mistake: saying \"we accept H0\" as if it proved it true.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'statistical-inference',
  },

  // ═════════════════════════ CUA-05 ═════════════════════════
  {
    id: 'CUA-05-E1',
    level: 6,
    module: 'CUA-05',
    kind: 'classify',
    flavor: 'concept',
    prompt: t(
      "Clasifica cada base de datos según su tipo: corte transversal, serie de tiempo o panel.",
      "Classify each dataset by its type: cross-section, time series or panel.",
    ),
    categories: [
      { id: 'CUA-05-E1-c1', label: t("Corte transversal", "Cross-section") },
      { id: 'CUA-05-E1-c2', label: t("Serie de tiempo", "Time series") },
      { id: 'CUA-05-E1-c3', label: t("Panel", "Panel") },
    ],
    items: [
      { id: 'CUA-05-E1-i1', label: t("La razón de deuda de 40 empresas al cierre de un mismo año", "The debt ratio of 40 companies at the close of the same year"), correctCategoryId: 'CUA-05-E1-c1' },
      { id: 'CUA-05-E1-i2', label: t("El tipo de cambio peso-dólar diario durante 10 años", "The daily peso-dollar exchange rate over 10 years"), correctCategoryId: 'CUA-05-E1-c2' },
      { id: 'CUA-05-E1-i3', label: t("Los rendimientos mensuales de 30 acciones durante 5 años", "The monthly returns of 30 stocks over 5 years"), correctCategoryId: 'CUA-05-E1-c3' },
      { id: 'CUA-05-E1-i4', label: t("El nivel trimestral de un índice bursátil desde hace 20 años", "A stock index's quarterly level over the past 20 years"), correctCategoryId: 'CUA-05-E1-c2' },
      { id: 'CUA-05-E1-i5', label: t("Las calificaciones crediticias de 200 municipios en una fecha", "The credit ratings of 200 municipalities on one date"), correctCategoryId: 'CUA-05-E1-c1' },
      { id: 'CUA-05-E1-i6', label: t("Las ventas anuales de 50 cadenas de tiendas entre 2015 y 2024", "The annual sales of 50 store chains between 2015 and 2024"), correctCategoryId: 'CUA-05-E1-c3' },
    ],
    explanation: t(
      "Corte transversal: muchas unidades en un momento. Serie de tiempo: una unidad a lo largo del tiempo. Panel: muchas unidades a lo largo del tiempo. Error común: clasificar como serie de tiempo un panel solo porque incluye varios años; si también hay varias unidades, es panel.",
      "Cross-section: many units at one moment. Time series: one unit over time. Panel: many units over time. Common mistake: classifying a panel as a time series just because it covers several years; if there are also several units, it is a panel.",
    ),
    difficulty: 1,
    points: 15,
    competency: 'financial-econometrics',
  },
  {
    id: 'CUA-05-E2',
    level: 6,
    module: 'CUA-05',
    kind: 'numeric',
    flavor: 'case',
    context: t(
      "Con rendimientos mensuales hipotéticos, la covarianza entre una acción y el índice de mercado es 0.0018 y la varianza del índice es 0.0012.",
      "With hypothetical monthly returns, the covariance between a stock and the market index is 0.0018 and the index variance is 0.0012.",
    ),
    prompt: t(
      "Estima la beta de la acción respecto al mercado.",
      "Estimate the stock's beta relative to the market.",
    ),
    answer: 1.5,
    unit: 'none',
    decimals: 2,
    tolerance: { abs: 0.005 },
    explanation: t(
      "β = Cov(Ri, Rm) / Var(Rm) = 0.0018 / 0.0012 = 1.5: la acción tiende a moverse 1.5 veces lo que se mueve el mercado. Error común: invertir la división (0.0012 / 0.0018 ≈ 0.67) o dividir entre la varianza de la acción en lugar de la del mercado.",
      "β = Cov(Ri, Rm) / Var(Rm) = 0.0018 / 0.0012 = 1.5: the stock tends to move 1.5 times as much as the market. Common mistake: inverting the division (0.0012 / 0.0018 ≈ 0.67) or dividing by the stock's variance instead of the market's.",
    ),
    difficulty: 1,
    points: 15,
    competency: 'financial-econometrics',
  },
  {
    id: 'CUA-05-E3',
    level: 6,
    module: 'CUA-05',
    kind: 'fields',
    flavor: 'case',
    context: t(
      "Para una acción hipotética, el modelo de mercado estimado es Ri = 0.2 % + 1.2 × Rm. Este mes el mercado subió 3 % y la acción subió 5 %.",
      "For a hypothetical stock, the estimated market model is Ri = 0.2% + 1.2 × Rm. This month the market rose 3% and the stock rose 5%.",
    ),
    prompt: t(
      "Calcula el rendimiento que esperaba el modelo y el residual del mes, en porcentaje.",
      "Compute the return the model expected and the month's residual, as percentages.",
    ),
    fields: [
      { id: 'f1', label: t("Rendimiento esperado por el modelo", "Return expected by the model"), answer: 3.8, unit: '%', tolerance: { abs: 0.01 } },
      { id: 'f2', label: t("Residual (real − esperado)", "Residual (actual − expected)"), answer: 1.2, unit: '%', tolerance: { abs: 0.01 } },
    ],
    explanation: t(
      "Esperado = 0.2 + 1.2 × 3 = 0.2 + 3.6 = 3.8 %. Residual = 5 − 3.8 = 1.2 %: una sorpresa positiva propia de la empresa. Error común: olvidar el alfa (esperado 3.6 %) o calcular el residual como esperado − real, lo que invierte el signo.",
      "Expected = 0.2 + 1.2 × 3 = 0.2 + 3.6 = 3.8%. Residual = 5 − 3.8 = 1.2%: a company-specific positive surprise. Common mistake: forgetting alpha (expected 3.6%) or computing the residual as expected − actual, which flips the sign.",
    ),
    difficulty: 2,
    points: 20,
    competency: 'financial-econometrics',
  },
  {
    id: 'CUA-05-E4',
    level: 6,
    module: 'CUA-05',
    kind: 'mcq',
    flavor: 'concept',
    prompt: t(
      "En una regresión con rendimientos diarios, ¿qué significa que haya heterocedasticidad?",
      "In a regression with daily returns, what does it mean that there is heteroskedasticity?",
    ),
    options: [
      { id: 'CUA-05-E4-a', text: t("Que la beta cambia de signo cada día", "That beta changes sign every day") },
      { id: 'CUA-05-E4-b', text: t("Que la varianza de los errores no es constante: hay periodos tranquilos y turbulentos", "That the error variance is not constant: there are calm and turbulent periods") },
      { id: 'CUA-05-E4-c', text: t("Que faltan datos de algunos días", "That data are missing for some days") },
      { id: 'CUA-05-E4-d', text: t("Que el modelo explica el 100 % de la variación", "That the model explains 100% of the variation") },
    ],
    correctOptionId: 'CUA-05-E4-b',
    explanation: t(
      "Heterocedasticidad = varianza del error que cambia en el tiempo o entre observaciones. Es típica de los mercados, que alternan calma y turbulencia, y hace que los errores estándar ordinarios engañen. Error común: confundirla con autocorrelación, que es cuando los errores de un periodo se parecen a los del anterior.",
      "Heteroskedasticity = error variance that changes over time or across observations. It is typical of markets, which alternate calm and turbulence, and it makes ordinary standard errors misleading. Common mistake: confusing it with autocorrelation, which is when errors in one period resemble those of the previous one.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'financial-econometrics',
  },
  {
    id: 'CUA-05-E5',
    level: 6,
    module: 'CUA-05',
    kind: 'truefalse',
    flavor: 'interpret',
    prompt: t(
      "En econometría financiera, una correlación alta y estadísticamente significativa entre dos series basta para concluir que una causa a la otra.",
      "In financial econometrics, a high and statistically significant correlation between two series is enough to conclude that one causes the other.",
    ),
    answer: false,
    explanation: t(
      "Correlación no es causalidad: la relación puede venir de una tercera variable (por ejemplo, el ciclo económico mueve ambas), de causalidad inversa o de coincidencia. Error común: confundir \"significativo\" con \"causal\"; la significancia solo dice que la relación probablemente no es cero en los datos.",
      "Correlation is not causation: the relationship may come from a third variable (for example, the business cycle drives both), reverse causality or coincidence. Common mistake: confusing \"significant\" with \"causal\"; significance only says the relationship is probably not zero in the data.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'financial-econometrics',
  },
  {
    id: 'CUA-05-E6',
    level: 6,
    module: 'CUA-05',
    kind: 'multi',
    flavor: 'case',
    context: t(
      "Un analista quiere probar que \"comprar acciones de empresas pequeñas rinde más\". Usa solo las empresas que hoy cotizan en bolsa, toma las utilidades anuales reportadas en marzo como si se conocieran desde enero y no controla por el sector de cada empresa.",
      "An analyst wants to show that \"buying shares of small companies pays more\". He uses only companies listed today, takes annual earnings reported in March as if they were known since January and does not control for each company's sector.",
    ),
    prompt: t(
      "¿Qué problemas tiene el estudio de este analista? Selecciona todos los que apliquen.",
      "What problems does this analyst's study have? Select all that apply.",
    ),
    options: [
      { id: 'CUA-05-E6-a', text: t("Sesgo de supervivencia", "Survivorship bias") },
      { id: 'CUA-05-E6-b', text: t("Sesgo de anticipación (look-ahead)", "Look-ahead bias") },
      { id: 'CUA-05-E6-c', text: t("Posible variable omitida (el sector)", "Possible omitted variable (sector)") },
      { id: 'CUA-05-E6-d', text: t("Usar demasiadas empresas en la muestra", "Using too many companies in the sample") },
    ],
    correctOptionIds: ['CUA-05-E6-a', 'CUA-05-E6-b', 'CUA-05-E6-c'],
    explanation: t(
      "Solo empresas vivas hoy = supervivencia (faltan las que quebraron, a menudo pequeñas). Usar utilidades de marzo en enero = look-ahead (información que aún no existía). No controlar el sector = variable omitida que puede explicar la relación. Tener muchas empresas no es un problema; ayuda a la precisión. Error común: pensar que más datos siempre son el problema.",
      "Only companies alive today = survivorship (missing those that went bankrupt, often small ones). Using March earnings in January = look-ahead (information that did not yet exist). Not controlling for sector = omitted variable that may explain the relationship. Having many companies is not a problem; it helps precision. Common mistake: thinking more data is always the problem.",
    ),
    difficulty: 2,
    points: 20,
    competency: 'financial-econometrics',
  },

  // ═════════════════════════ CUA-06 ═════════════════════════
  {
    id: 'CUA-06-E1',
    level: 6,
    module: 'CUA-06',
    kind: 'fields',
    flavor: 'case',
    context: t(
      "Una cadena de gimnasios estudia la relación entre su gasto en publicidad X (miles de pesos por semana) y las nuevas inscripciones Y (datos hipotéticos). Resumen: x̄ = 4, ȳ = 10, Cov(X, Y) = 6 y Var(X) = 2.",
      "A gym chain studies the relationship between its advertising spending X (thousands of pesos per week) and new sign-ups Y (hypothetical data). Summary: x̄ = 4, ȳ = 10, Cov(X, Y) = 6 and Var(X) = 2.",
    ),
    prompt: t(
      "Calcula la pendiente b, la ordenada a de la recta de MCO y la predicción de Y cuando X = 5.",
      "Compute the slope b, the intercept a of the OLS line and the prediction of Y when X = 5.",
    ),
    fields: [
      { id: 'f1', label: t("Pendiente b", "Slope b"), answer: 3, unit: 'none', tolerance: { abs: 0.001 } },
      { id: 'f2', label: t("Ordenada a", "Intercept a"), answer: -2, unit: 'none', tolerance: { abs: 0.001 } },
      { id: 'f3', label: t("Predicción de Y con X = 5", "Prediction of Y with X = 5"), answer: 13, unit: 'none', tolerance: { abs: 0.001 } },
    ],
    explanation: t(
      "b = Cov/Var = 6/2 = 3. a = ȳ − b·x̄ = 10 − 3 × 4 = −2. Ŷ(5) = −2 + 3 × 5 = 13. Error común: calcular a como ȳ − b (olvidar multiplicar por x̄) o dividir la varianza entre la covarianza.",
      "b = Cov/Var = 6/2 = 3. a = ȳ − b·x̄ = 10 − 3 × 4 = −2. Ŷ(5) = −2 + 3 × 5 = 13. Common mistake: computing a as ȳ − b (forgetting to multiply by x̄) or dividing the variance by the covariance.",
    ),
    difficulty: 2,
    points: 20,
    competency: 'regression-models',
  },
  {
    id: 'CUA-06-E2',
    level: 6,
    module: 'CUA-06',
    kind: 'numeric',
    flavor: 'case',
    context: t(
      "En una regresión hipotética, la suma de cuadrados total (SCT) es 120 y la suma de cuadrados de los residuales (SCR) es 30.",
      "In a hypothetical regression, the total sum of squares (SST) is 120 and the sum of squared residuals (SSR) is 30.",
    ),
    prompt: t(
      "¿Cuál es el R² del modelo, en porcentaje?",
      "What is the model's R², as a percentage?",
    ),
    answer: 75,
    unit: '%',
    decimals: 1,
    tolerance: { abs: 0.05 },
    explanation: t(
      "R² = 1 − SCR/SCT = 1 − 30/120 = 1 − 0.25 = 0.75 = 75 %: el modelo explica tres cuartas partes de la variación de Y. Error común: responder SCR/SCT = 25 %, que es la parte no explicada.",
      "R² = 1 − SSR/SST = 1 − 30/120 = 1 − 0.25 = 0.75 = 75%: the model explains three quarters of Y's variation. Common mistake: answering SSR/SST = 25%, which is the unexplained part.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'regression-models',
  },
  {
    id: 'CUA-06-E3',
    level: 6,
    module: 'CUA-06',
    kind: 'numeric',
    flavor: 'case',
    context: t(
      "Una regresión hipotética del rendimiento de una acción sobre el cambio en el precio del petróleo da un coeficiente de 0.84 con error estándar de 0.28 (muestra grande).",
      "A hypothetical regression of a stock's return on the change in oil prices gives a coefficient of 0.84 with a standard error of 0.28 (large sample).",
    ),
    prompt: t(
      "¿Cuál es el estadístico t del coeficiente del petróleo?",
      "What is the t statistic of the oil coefficient?",
    ),
    answer: 3,
    unit: 'none',
    decimals: 2,
    tolerance: { abs: 0.01 },
    explanation: t(
      "t = coeficiente / EE = 0.84 / 0.28 = 3. Como |3| > 1.96, el coeficiente es significativo al 5 %. Error común: multiplicar en vez de dividir (0.84 × 0.28 ≈ 0.24) y concluir que no es significativo.",
      "t = coefficient / SE = 0.84 / 0.28 = 3. Since |3| > 1.96, the coefficient is significant at 5%. Common mistake: multiplying instead of dividing (0.84 × 0.28 ≈ 0.24) and concluding it is not significant.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'regression-models',
  },
  {
    id: 'CUA-06-E4',
    level: 6,
    module: 'CUA-06',
    kind: 'mcq',
    flavor: 'interpret',
    context: t(
      "Un banco hipotético estima: tasa de incumplimiento (%) = 1.5 + 0.3 × Desempleo (%) + 0.8 × Dummy(crédito sin aval).",
      "A hypothetical bank estimates: default rate (%) = 1.5 + 0.3 × Unemployment (%) + 0.8 × Dummy(loan without guarantor).",
    ),
    prompt: t(
      "¿Cómo se interpreta el coeficiente 0.8 de la variable dummy?",
      "How is the dummy variable's 0.8 coefficient interpreted?",
    ),
    options: [
      { id: 'CUA-06-E4-a', text: t("Los créditos sin aval tienen, en promedio, 0.8 puntos más de incumplimiento que los créditos con aval, con el mismo desempleo", "Loans without a guarantor have, on average, 0.8 points more default than loans with a guarantor, at the same unemployment") },
      { id: 'CUA-06-E4-b', text: t("El 80 % de los créditos no tiene aval", "80% of loans have no guarantor") },
      { id: 'CUA-06-E4-c', text: t("Cada punto de desempleo sube 0.8 puntos el incumplimiento", "Each point of unemployment raises default by 0.8 points") },
      { id: 'CUA-06-E4-d', text: t("No tener aval causa con certeza un incumplimiento de 0.8 %", "Having no guarantor causes a default of exactly 0.8% with certainty") },
    ],
    correctOptionId: 'CUA-06-E4-a',
    explanation: t(
      "El coeficiente de una dummy es la diferencia promedio entre el grupo con 1 (sin aval) y el grupo con 0 (con aval), manteniendo constantes las demás variables. El efecto del desempleo es 0.3, no 0.8. Error común: leer el coeficiente como proporción del grupo o como efecto causal seguro.",
      "A dummy's coefficient is the average difference between the group with 1 (no guarantor) and the group with 0 (with guarantor), holding the other variables constant. The unemployment effect is 0.3, not 0.8. Common mistake: reading the coefficient as the group's share or as a certain causal effect.",
    ),
    difficulty: 2,
    points: 15,
    competency: 'regression-models',
  },
  {
    id: 'CUA-06-E5',
    level: 6,
    module: 'CUA-06',
    kind: 'formula',
    flavor: 'concept',
    prompt: t(
      "Completa las fórmulas de mínimos cuadrados para la pendiente y la ordenada de una regresión lineal simple.",
      "Complete the least-squares formulas for the slope and intercept of a simple linear regression.",
    ),
    template: 'b = {{b1}} / {{b2}}     a = {{b3}} − b·x̄',
    blanks: [
      {
        id: 'b1',
        options: [
          { id: 'CUA-06-E5-b1-a', text: t("Cov(X, Y)", "Cov(X, Y)") },
          { id: 'CUA-06-E5-b1-b', text: t("Var(Y)", "Var(Y)") },
          { id: 'CUA-06-E5-b1-c', text: t("R²", "R²") },
        ],
        correctOptionId: 'CUA-06-E5-b1-a',
      },
      {
        id: 'b2',
        options: [
          { id: 'CUA-06-E5-b2-a', text: t("Cov(X, Y)", "Cov(X, Y)") },
          { id: 'CUA-06-E5-b2-b', text: t("Var(X)", "Var(X)") },
          { id: 'CUA-06-E5-b2-c', text: t("n (número de datos)", "n (number of data points)") },
        ],
        correctOptionId: 'CUA-06-E5-b2-b',
      },
      {
        id: 'b3',
        options: [
          { id: 'CUA-06-E5-b3-a', text: t("x̄ (promedio de X)", "x̄ (average of X)") },
          { id: 'CUA-06-E5-b3-b', text: t("ȳ (promedio de Y)", "ȳ (average of Y)") },
          { id: 'CUA-06-E5-b3-c', text: t("SCR (suma de residuales al cuadrado)", "SSR (sum of squared residuals)") },
        ],
        correctOptionId: 'CUA-06-E5-b3-b',
      },
    ],
    explanation: t(
      "b = Cov(X, Y) / Var(X) y a = ȳ − b·x̄, porque la recta de MCO pasa por el punto de promedios (x̄, ȳ). Error común: dividir entre Var(Y), que es la varianza de la variable que quieres explicar, no la de la explicativa.",
      "b = Cov(X, Y) / Var(X) and a = ȳ − b·x̄, because the OLS line passes through the point of averages (x̄, ȳ). Common mistake: dividing by Var(Y), which is the variance of the variable you want to explain, not of the explanatory one.",
    ),
    difficulty: 1,
    points: 15,
    competency: 'regression-models',
  },
  {
    id: 'CUA-06-E6',
    level: 6,
    module: 'CUA-06',
    kind: 'truefalse',
    flavor: 'concept',
    prompt: t(
      "Al agregar una variable explicativa más a una regresión estimada por MCO, el R² calculado dentro de la muestra nunca disminuye, aunque la variable no tenga relación real con Y.",
      "When one more explanatory variable is added to a regression estimated by OLS, the in-sample R² never decreases, even if the variable has no real relationship with Y.",
    ),
    answer: true,
    explanation: t(
      "MCO siempre puede ignorar la nueva variable poniendo su coeficiente en cero, así que el ajuste dentro de la muestra no empeora; casi siempre mejora un poco por puro azar. Por eso se usa el R² ajustado y la validación fuera de muestra. Error común: creer que un R² más alto al agregar variables prueba que el modelo es mejor.",
      "OLS can always ignore the new variable by setting its coefficient to zero, so the in-sample fit does not get worse; it almost always improves a little by pure chance. That is why adjusted R² and out-of-sample validation are used. Common mistake: believing a higher R² after adding variables proves the model is better.",
    ),
    difficulty: 2,
    points: 15,
    competency: 'regression-models',
  },
]
