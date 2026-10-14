import type { Exercise, Lesson } from '../../../types'

/**
 * FINCORE — Temario v2.0, área Inversiones y Mercados Financieros (INV.1 a INV.6), etapa Básico.
 */

const NOTE_INVEST = {
  es: "Contenido educativo, no es una recomendación de inversión. Las cifras de los ejemplos son hipotéticas. Rendimientos pasados no garantizan rendimientos futuros, y las tasas e inflación cambian constantemente: consulta datos vigentes (2026) en fuentes oficiales antes de decidir.",
  en: "Educational content, not investment advice. Figures in the examples are hypothetical. Past returns do not guarantee future returns, and rates and inflation change constantly: check current (2026) data from official sources before deciding.",
}

const NOTE_SFM = {
  es: "Contenido educativo con información general sobre las autoridades e intermediarios del sistema financiero mexicano (SHCP, Banxico, CNBV, CNSF, CONSAR, CONDUSEF, IPAB). Las leyes, facultades, montos de protección y listas de entidades autorizadas cambian: verifica la versión vigente (2026) con la autoridad correspondiente.",
  en: "Educational content with general information about the authorities and intermediaries of the Mexican financial system (SHCP, Banxico, CNBV, CNSF, CONSAR, CONDUSEF, IPAB). Laws, powers, protection amounts and lists of authorized entities change: verify the current version (2026) with the relevant authority.",
}

const NOTE_MARKETS = {
  es: "Contenido educativo. Las referencias a la Bolsa Mexicana de Valores (BMV), a la Bolsa Institucional de Valores (BIVA), al Indeval y a la CNBV son generales; horarios, comisiones y reglas de operación cambian: verifica la versión vigente (2026). Los precios de los ejemplos son hipotéticos.",
  en: "Educational content. References to the Mexican Stock Exchange (BMV), the Institutional Stock Exchange (BIVA), Indeval and CNBV are general; hours, fees and trading rules change: verify the current version (2026). Prices in the examples are hypothetical.",
}

const NOTE_GOV_DEBT = {
  es: "Contenido educativo. Los CETES, Bonos M, Udibonos y Bondes los emite el Gobierno Federal y el Banco de México actúa como su agente; los plazos, montos mínimos, tasas, reglas fiscales y condiciones de plataformas como Cetesdirecto cambian. Las tasas de los ejemplos son hipotéticas: verifica la información vigente (2026) en fuentes oficiales.",
  en: "Educational content. CETES, Bonos M, Udibonos and Bondes are issued by the Federal Government and Banco de México acts as its agent; terms, minimum amounts, rates, tax rules and conditions of platforms such as Cetesdirecto change. Rates in the examples are hypothetical: verify current (2026) information from official sources.",
}

const NOTE_BONDS = {
  es: "Contenido educativo. Las calificaciones crediticias las asignan agencias calificadoras autorizadas y pueden cambiar en cualquier momento; una buena calificación no es garantía de pago. Las tasas y precios de los ejemplos son hipotéticos: verifica la información vigente (2026) del instrumento antes de invertir.",
  en: "Educational content. Credit ratings are assigned by authorized rating agencies and can change at any time; a good rating is not a guarantee of payment. Rates and prices in the examples are hypothetical: verify current (2026) information about the instrument before investing.",
}

export const lessons: Lesson[] = [
  // ───────────────────────────── INV-01 ─────────────────────────────
  {
    id: 'INV-01',
    level: 4,
    topicIds: ['INV.1'],
    title: { es: "Fundamentos de inversión", en: "Investing fundamentals" },
    summary: {
      es: "Invertir es poner tu dinero a trabajar para que crezca más que la inflación, entendiendo siempre la relación entre rendimiento, riesgo, liquidez y plazo.",
      en: "Investing is putting your money to work so it grows faster than inflation, always understanding the relationship between return, risk, liquidity and time horizon.",
    },
    minutes: 17,
    objectives: [
      { es: "Distinguir entre ahorrar e invertir y explicar por qué el dinero guardado pierde valor con la inflación.", en: "Distinguish saving from investing and explain why idle money loses value to inflation." },
      { es: "Describir las cuatro características de toda inversión: rendimiento, riesgo, liquidez y plazo.", en: "Describe the four features of every investment: return, risk, liquidity and time horizon." },
      { es: "Calcular el rendimiento de una inversión y estimar su rendimiento real descontando la inflación.", en: "Compute an investment's return and estimate its real return after inflation." },
    ],
    theory: [
      {
        heading: { es: "Ahorrar no es lo mismo que invertir", en: "Saving is not the same as investing" },
        body: [
          {
            es: "**Ahorrar** es apartar una parte de tu ingreso en lugar de gastarla, como guardar billetes en un sobre o en el colchón. **Invertir** es dar un paso más: poner ese dinero ahorrado en algo que pueda **generar más dinero**, como prestarlo al gobierno, comprar una parte de una empresa o un inmueble que se renta.",
            en: "**Saving** is setting aside part of your income instead of spending it, like keeping bills in an envelope or under the mattress. **Investing** goes one step further: putting that saved money into something that can **generate more money**, such as lending it to the government, buying part of a company or a property you rent out.",
          },
          {
            es: "¿Por qué no basta con ahorrar? Por la **inflación**: el aumento general de los precios con el tiempo. Si hoy una torta cuesta $50 y en un año cuesta $53, tus $50 guardados ya no alcanzan para la misma torta. El dinero quieto **pierde poder de compra**, es decir, compra menos cosas cada año.",
            en: "Why is saving not enough? Because of **inflation**: the general rise in prices over time. If a torta costs $50 today and $53 in a year, your saved $50 no longer buys the same torta. Idle money **loses purchasing power**, that is, it buys fewer things each year.",
          },
          {
            es: "Mini ejemplo: Ana guarda $10,000 en un cajón y Luis los invierte en un instrumento que paga 7% al año. Al año, Ana sigue con $10,000 y Luis tiene $10,700. Si los precios subieron 4%, Ana puede comprar menos que antes y Luis un poco más.",
            en: "Mini example: Ana keeps $10,000 in a drawer and Luis invests it in an instrument paying 7% a year. After a year, Ana still has $10,000 and Luis has $10,700. If prices rose 4%, Ana can buy less than before and Luis a bit more.",
          },
        ],
        bullets: [
          { es: "Ahorrar: no gastar una parte del ingreso.", en: "Saving: not spending part of your income." },
          { es: "Invertir: usar ese ahorro para que genere más dinero.", en: "Investing: using those savings to generate more money." },
          { es: "Primero un fondo para emergencias; después, invertir lo que no necesitarás pronto.", en: "First an emergency fund; then invest what you will not need soon." },
        ],
      },
      {
        heading: { es: "Rendimiento, riesgo, liquidez y plazo", en: "Return, risk, liquidity and time horizon" },
        body: [
          {
            es: "Toda inversión se describe con cuatro rasgos. El **rendimiento** es lo que ganas, normalmente en porcentaje del dinero que pusiste. El **riesgo** es la posibilidad de que el resultado sea distinto al esperado, incluso de perder parte de tu dinero.",
            en: "Every investment is described by four features. **Return** is what you earn, usually as a percentage of the money you put in. **Risk** is the possibility that the result differs from what you expected, even that you lose part of your money.",
          },
          {
            es: "La **liquidez** es qué tan rápido y fácil conviertes la inversión en efectivo sin perder valor: una cuenta de débito es muy líquida; una casa, poco. El **plazo** es cuánto tiempo planeas dejar el dinero invertido.",
            en: "**Liquidity** is how quickly and easily you can turn the investment into cash without losing value: a debit account is very liquid; a house, not very. The **time horizon** is how long you plan to keep the money invested.",
          },
          {
            es: "La regla de oro: **a mayor rendimiento esperado, mayor riesgo**. Nadie te paga más \"porque sí\". Si alguien promete ganancias altas, rápidas y sin riesgo, es una señal clásica de **fraude**. Por eso eliges según tu objetivo: dinero para el enganche de un coche en seis meses no debe estar en algo que puede bajar mucho en ese tiempo.",
            en: "The golden rule: **the higher the expected return, the higher the risk**. Nobody pays you more \"just because\". If someone promises high, quick and risk-free gains, that is a classic sign of **fraud**. That is why you choose according to your goal: money for a car down payment in six months should not be in something that can fall a lot in that time.",
          },
        ],
        bullets: [
          { es: "Rendimiento: cuánto ganas.", en: "Return: how much you earn." },
          { es: "Riesgo: qué tan seguro es ese resultado.", en: "Risk: how certain that result is." },
          { es: "Liquidez: qué tan rápido lo recuperas en efectivo.", en: "Liquidity: how fast you get it back in cash." },
          { es: "Plazo: cuánto tiempo lo dejarás invertido.", en: "Time horizon: how long you will leave it invested." },
        ],
      },
      {
        heading: { es: "Cómo medir lo que ganas: rendimiento nominal y real", en: "How to measure what you earn: nominal and real return" },
        body: [
          {
            es: "El **rendimiento** de un periodo compara lo que tienes al final, más lo que te pagaron en el camino (intereses o dividendos), contra lo que pusiste al inicio. Ese porcentaje es el **rendimiento nominal**: el que ves en tu estado de cuenta.",
            en: "The **return** for a period compares what you have at the end, plus what you were paid along the way (interest or dividends), against what you put in at the start. That percentage is the **nominal return**: the one you see on your statement.",
          },
          {
            es: "El **rendimiento real** descuenta la inflación y te dice si de verdad puedes comprar más cosas. Una aproximación rápida es restar: rendimiento nominal − inflación. La fórmula exacta divide: (1 + nominal) ÷ (1 + inflación) − 1.",
            en: "The **real return** removes inflation and tells you whether you can truly buy more things. A quick approximation is to subtract: nominal return − inflation. The exact formula divides: (1 + nominal) ÷ (1 + inflation) − 1.",
          },
          {
            es: "Además, el tiempo multiplica: con el **interés compuesto** ganas rendimiento también sobre lo que ya ganaste. Mini ejemplo: $10,000 al 10% anual se vuelven $11,000 el primer año y $12,100 el segundo, porque el segundo año el 10% se calcula sobre $11,000.",
            en: "On top of that, time multiplies: with **compound interest** you also earn a return on what you already earned. Mini example: $10,000 at 10% a year becomes $11,000 in the first year and $12,100 in the second, because in year two the 10% is computed on $11,000.",
          },
        ],
        formulas: [
          {
            name: { es: "Rendimiento total (nominal) de una inversión", en: "Total (nominal) return of an investment" },
            expression: "Rendimiento = (Valor final − Valor inicial + Ingresos recibidos) ÷ Valor inicial",
            variables: [
              { symbol: "Rendimiento", meaning: { es: "Lo que ganaste en proporción a lo que pusiste; × 100 para verlo en %.", en: "What you earned in proportion to what you put in; × 100 to see it in %." } },
              { symbol: "Valor final", meaning: { es: "Lo que vale tu inversión al terminar el periodo, en pesos.", en: "What your investment is worth at the end of the period, in pesos." } },
              { symbol: "Valor inicial", meaning: { es: "Lo que pagaste o invertiste al empezar, en pesos.", en: "What you paid or invested at the start, in pesos." } },
              { symbol: "Ingresos recibidos", meaning: { es: "Lo que te pagaron en el camino (intereses o dividendos), en pesos.", en: "What you were paid along the way (interest or dividends), in pesos." } },
            ],
            steps: [
              { es: "Resta: valor final − valor inicial (cuánto subió o bajó).", en: "Subtract: ending value − starting value (how much it rose or fell)." },
              { es: "Súmale los intereses o dividendos que cobraste.", en: "Add the interest or dividends you collected." },
              { es: "Divide entre el valor inicial y multiplica por 100.", en: "Divide by the starting value and multiply by 100." },
            ],
            example: { es: "Compras acciones por $8,000; al año valen $8,500 y cobraste $140 de dividendos. $8,500 − $8,000 = $500; $500 + $140 = $640; $640 ÷ $8,000 = 0.08 → **8%**.", en: "You buy shares for $8,000; a year later they are worth $8,500 and you collected $140 in dividends. $8,500 − $8,000 = $500; $500 + $140 = $640; $640 ÷ $8,000 = 0.08 → **8%**." },
            interpret: { es: "Es el rendimiento nominal: el que ves en tu estado de cuenta, antes de descontar la inflación.", en: "It is the nominal return: the one you see on your statement, before removing inflation." },
            mistake: { es: "Olvidar los dividendos o intereses cobrados: también son parte de lo que ganaste.", en: "Forgetting the dividends or interest collected: they are also part of what you earned." },
          },
          {
            name: { es: "Rendimiento real (después de inflación)", en: "Real return (after inflation)" },
            expression: "Aproximado: Real ≈ Nominal − Inflación     Exacto: Real = (1 + Nominal) ÷ (1 + Inflación) − 1",
            variables: [
              { symbol: "Real", meaning: { es: "Cuánto creció de verdad tu poder de compra, en %.", en: "How much your purchasing power truly grew, in %." } },
              { symbol: "Nominal", meaning: { es: "Rendimiento que te pagó la inversión, en decimal (8% = 0.08).", en: "Return the investment paid you, as a decimal (8% = 0.08)." } },
              { symbol: "Inflación", meaning: { es: "Cuánto subieron los precios en el mismo periodo, en decimal.", en: "How much prices rose in the same period, as a decimal." } },
            ],
            steps: [
              { es: "Para la aproximación, resta: nominal − inflación.", en: "For the approximation, subtract: nominal − inflation." },
              { es: "Para el exacto, convierte ambos a decimal y súmales 1 (12% → 1.12).", en: "For the exact one, convert both to decimals and add 1 (12% → 1.12)." },
              { es: "Divide (1 + nominal) entre (1 + inflación) y réstale 1.", en: "Divide (1 + nominal) by (1 + inflation) and subtract 1." },
              { es: "Multiplica por 100 para leerlo en %.", en: "Multiply by 100 to read it in %." },
            ],
            example: { es: "Nominal 12% e inflación 4% (cifras hipotéticas). Aproximado: 12% − 4% = 8%. Exacto: 1.12 ÷ 1.04 = 1.076923; 1.076923 − 1 = 0.076923 → **7.69%**.", en: "Nominal 12% and inflation 4% (hypothetical figures). Approximate: 12% − 4% = 8%. Exact: 1.12 ÷ 1.04 = 1.076923; 1.076923 − 1 = 0.076923 → **7.69%**." },
            interpret: { es: "Positivo: puedes comprar más que antes. Negativo: aunque tengas más pesos, compras menos cosas.", en: "Positive: you can buy more than before. Negative: even with more pesos, you buy fewer things." },
            mistake: { es: "Creer que el rendimiento nominal es lo que creció tu poder de compra. La resta rápida exagera un poco el resultado.", en: "Believing the nominal return is how much your purchasing power grew. The quick subtraction slightly overstates the result." },
          },
          {
            name: { es: "Interés compuesto", en: "Compound interest" },
            expression: "Monto final = Capital × (1 + Tasa)^Años",
            variables: [
              { symbol: "Monto final", meaning: { es: "Lo que tendrás al terminar, en pesos.", en: "What you will have at the end, in pesos." } },
              { symbol: "Capital", meaning: { es: "Lo que inviertes al inicio, en pesos.", en: "What you invest at the start, in pesos." } },
              { symbol: "Tasa", meaning: { es: "Tasa anual en decimal (8% = 0.08).", en: "Annual rate as a decimal (8% = 0.08)." } },
              { symbol: "Años", meaning: { es: "Cuántos años reinviertes todo lo que ganas.", en: "How many years you reinvest everything you earn." } },
              { symbol: "^", meaning: { es: "\"Elevado a\": multiplicar (1 + Tasa) por sí mismo tantas veces como años.", en: "\"Raised to\": multiply (1 + Rate) by itself as many times as there are years." } },
            ],
            steps: [
              { es: "Convierte la tasa a decimal y súmale 1: 8% → 1.08.", en: "Convert the rate to a decimal and add 1: 8% → 1.08." },
              { es: "Multiplica el capital por 1.08 una vez por cada año (o usa la potencia).", en: "Multiply the principal by 1.08 once per year (or use the power)." },
              { es: "Para saber lo ganado, resta el capital al monto final.", en: "To know what you earned, subtract the principal from the final amount." },
            ],
            example: { es: "$20,000 al 8% anual (tasa de ejemplo) por 3 años: año 1: 20,000 × 1.08 = $21,600; año 2: 21,600 × 1.08 = $23,328; año 3: 23,328 × 1.08 = **$25,194.24**. Ganaste $5,194.24.", en: "$20,000 at 8% a year (example rate) for 3 years: year 1: 20,000 × 1.08 = $21,600; year 2: 21,600 × 1.08 = $23,328; year 3: 23,328 × 1.08 = **$25,194.24**. You earned $5,194.24." },
            interpret: { es: "Con interés simple ganarías $1,600 × 3 = $4,800; lo extra viene de ganar intereses sobre intereses.", en: "With simple interest you would earn $1,600 × 3 = $4,800; the extra comes from earning interest on interest." },
            mistake: { es: "Multiplicar tasa × años (8% × 3 = 24%) en lugar de multiplicar el factor 1.08 tres veces.", en: "Multiplying rate × years (8% × 3 = 24%) instead of multiplying the 1.08 factor three times." },
          },
        ],
      },
    ],
    examples: [
      {
        title: { es: "¿Cuánto ganó realmente Sofía?", en: "How much did Sofía really earn?" },
        problem: {
          es: "Sofía invirtió $20,000 y un año después su inversión vale $21,600. No recibió otros pagos. Suponiendo una inflación hipotética de 4% en ese año, ¿cuál fue su rendimiento nominal y su rendimiento real?",
          en: "Sofía invested $20,000 and a year later her investment is worth $21,600. She received no other payments. Assuming a hypothetical 4% inflation that year, what were her nominal and real returns?",
        },
        steps: [
          { es: "Ganancia: $21,600 − $20,000 = $1,600.", en: "Gain: $21,600 − $20,000 = $1,600." },
          { es: "Rendimiento nominal: $1,600 ÷ $20,000 = 0.08 = 8%.", en: "Nominal return: $1,600 ÷ $20,000 = 0.08 = 8%." },
          { es: "Aproximación real: 8% − 4% = 4%.", en: "Approximate real return: 8% − 4% = 4%." },
          { es: "Real exacto: 1.08 ÷ 1.04 − 1 = 0.0385 ≈ 3.85%.", en: "Exact real return: 1.08 ÷ 1.04 − 1 = 0.0385 ≈ 3.85%." },
        ],
        result: {
          es: "Sofía ganó 8% nominal, pero su poder de compra solo creció alrededor de 3.85%. La resta rápida (4%) es una buena aproximación cuando las tasas son bajas.",
          en: "Sofía earned 8% nominal, but her purchasing power grew only about 3.85%. The quick subtraction (4%) is a good approximation when rates are low.",
        },
      },
      {
        title: { es: "El efecto del interés compuesto", en: "The effect of compound interest" },
        problem: {
          es: "Jorge invierte $10,000 a una tasa hipotética de 9% anual y reinvierte todo lo que gana. ¿Cuánto tendrá al cabo de 3 años?",
          en: "Jorge invests $10,000 at a hypothetical 9% annual rate and reinvests everything he earns. How much will he have after 3 years?",
        },
        steps: [
          { es: "Año 1: $10,000 × 1.09 = $10,900.", en: "Year 1: $10,000 × 1.09 = $10,900." },
          { es: "Año 2: $10,900 × 1.09 = $11,881.", en: "Year 2: $10,900 × 1.09 = $11,881." },
          { es: "Año 3: $11,881 × 1.09 = $12,950.29.", en: "Year 3: $11,881 × 1.09 = $12,950.29." },
          { es: "Con interés simple solo habría ganado $900 × 3 = $2,700; con compuesto gana $2,950.29.", en: "With simple interest he would have earned only $900 × 3 = $2,700; with compound interest he earns $2,950.29." },
        ],
        result: {
          es: "Jorge tendrá $12,950.29. La diferencia de $250.29 frente al interés simple viene de ganar intereses sobre intereses, y crece mientras más largo sea el plazo.",
          en: "Jorge will have $12,950.29. The $250.29 difference versus simple interest comes from earning interest on interest, and it grows the longer the horizon.",
        },
      },
    ],
    keyPoints: [
      { es: "Ahorrar es apartar dinero; invertir es ponerlo a generar más dinero.", en: "Saving is setting money aside; investing is putting it to generate more money." },
      { es: "La inflación hace que el dinero quieto pierda poder de compra.", en: "Inflation makes idle money lose purchasing power." },
      { es: "Toda inversión tiene rendimiento, riesgo, liquidez y plazo.", en: "Every investment has return, risk, liquidity and time horizon." },
      { es: "A mayor rendimiento esperado, mayor riesgo; desconfía de promesas sin riesgo.", en: "Higher expected return means higher risk; distrust risk-free promises." },
      { es: "El rendimiento real descuenta la inflación: (1 + nominal) ÷ (1 + inflación) − 1.", en: "Real return removes inflation: (1 + nominal) ÷ (1 + inflation) − 1." },
    ],
    normativeNote: NOTE_INVEST,
    exerciseIds: ['INV-01-E1', 'INV-01-E2', 'INV-01-E3', 'INV-01-E4', 'INV-01-E5', 'INV-01-E6'],
  },

  // ───────────────────────────── INV-02 ─────────────────────────────
  {
    id: 'INV-02',
    level: 4,
    topicIds: ['INV.2'],
    title: { es: "Sistema financiero mexicano", en: "The Mexican financial system" },
    summary: {
      es: "El sistema financiero mexicano conecta a quienes tienen dinero con quienes lo necesitan, a través de intermediarios vigilados por autoridades que regulan, supervisan y protegen al usuario.",
      en: "The Mexican financial system connects those who have money with those who need it, through intermediaries overseen by authorities that regulate, supervise and protect users.",
    },
    minutes: 16,
    objectives: [
      { es: "Explicar la función del sistema financiero: canalizar el ahorro hacia la inversión.", en: "Explain the role of the financial system: channeling savings into investment." },
      { es: "Identificar a las principales autoridades financieras de México y qué vigila cada una.", en: "Identify Mexico's main financial authorities and what each one oversees." },
      { es: "Reconocer los tipos de intermediarios y cómo se protege el dinero de los usuarios.", en: "Recognize the types of intermediaries and how users' money is protected." },
    ],
    theory: [
      {
        heading: { es: "Para qué sirve el sistema financiero", en: "What the financial system is for" },
        body: [
          {
            es: "En cualquier país hay personas y empresas a las que **les sobra dinero** por un tiempo (ahorradores) y otras a las que **les falta** para un proyecto (una familia que quiere casa, una empresa que quiere una fábrica). El **sistema financiero** es el conjunto de instituciones, mercados y reglas que **conecta a unos con otros**.",
            en: "In any country there are people and companies with **spare money** for a while (savers) and others who **need money** for a project (a family wanting a home, a company wanting a factory). The **financial system** is the set of institutions, markets and rules that **connects one group with the other**.",
          },
          {
            es: "Ese puente se llama **intermediación**. Cuando depositas en un banco, el banco usa parte de esos depósitos para prestar a otros; te paga un interés a ti y cobra uno mayor al que pide prestado. Otra vía es directa: una empresa vende títulos en la bolsa y tú los compras a través de una casa de bolsa.",
            en: "That bridge is called **intermediation**. When you deposit at a bank, the bank uses part of those deposits to lend to others; it pays you interest and charges a higher rate to the borrower. Another route is direct: a company sells securities on the stock exchange and you buy them through a brokerage firm.",
          },
          {
            es: "Mini ejemplo: los ahorros de miles de personas en una afore se invierten, entre otras cosas, en bonos del gobierno y de empresas. Así, tu ahorro para el retiro termina financiando carreteras o fábricas mientras crece para ti.",
            en: "Mini example: the savings of thousands of people in an afore (retirement fund manager) are invested, among other things, in government and corporate bonds. That way, your retirement savings end up financing roads or factories while growing for you.",
          },
        ],
        bullets: [
          { es: "Autoridades: hacen las reglas y vigilan.", en: "Authorities: make the rules and supervise." },
          { es: "Intermediarios: bancos, casas de bolsa, aseguradoras, afores y otros.", en: "Intermediaries: banks, brokerage firms, insurers, afores and others." },
          { es: "Mercados e infraestructura: bolsas de valores y depósito de valores.", en: "Markets and infrastructure: stock exchanges and securities depository." },
          { es: "Usuarios: tú, las familias, las empresas y el gobierno.", en: "Users: you, households, companies and the government." },
        ],
      },
      {
        heading: { es: "Las autoridades: quién vigila a quién", en: "The authorities: who oversees whom" },
        body: [
          {
            es: "La **SHCP** (Secretaría de Hacienda y Crédito Público) encabeza el sistema: diseña la política financiera y coordina a los órganos supervisores. El **Banco de México (Banxico)** es autónomo; su objetivo prioritario es mantener el **poder adquisitivo de la moneda** (controlar la inflación) y para ello usa la tasa de interés objetivo. También vela por el buen funcionamiento de los sistemas de pagos.",
            en: "The **SHCP** (Ministry of Finance and Public Credit) heads the system: it designs financial policy and coordinates the supervisory bodies. **Banco de México (Banxico)** is autonomous; its priority objective is to preserve the **purchasing power of the currency** (control inflation), and it uses the target interest rate for that. It also oversees the proper functioning of payment systems.",
          },
          {
            es: "Luego vienen las **comisiones supervisoras**, cada una con su sector. La **CNBV** vigila bancos, casas de bolsa, fondos de inversión y otras entidades de crédito y valores. La **CNSF** supervisa aseguradoras y afianzadoras. La **CONSAR** regula el sistema de ahorro para el retiro (las afores).",
            en: "Next come the **supervisory commissions**, each with its sector. **CNBV** oversees banks, brokerage firms, investment funds and other credit and securities entities. **CNSF** supervises insurers and surety companies. **CONSAR** regulates the retirement savings system (the afores).",
          },
          {
            es: "Para el usuario hay dos piezas clave. La **CONDUSEF** defiende a los usuarios: recibe quejas, orienta y publica información para comparar productos. El **IPAB** administra el seguro de depósitos bancarios: si un banco quiebra, paga a los ahorradores hasta un límite.",
            en: "For users there are two key pieces. **CONDUSEF** defends users: it receives complaints, gives guidance and publishes information to compare products. **IPAB** manages bank deposit insurance: if a bank fails, it pays depositors up to a limit.",
          },
        ],
        bullets: [
          { es: "SHCP: cabeza del sistema y política financiera.", en: "SHCP: head of the system and financial policy." },
          { es: "Banxico: inflación baja, tasa objetivo y sistemas de pagos.", en: "Banxico: low inflation, target rate and payment systems." },
          { es: "CNBV: bancos y mercado de valores. CNSF: seguros y fianzas. CONSAR: afores.", en: "CNBV: banks and securities market. CNSF: insurance and bonds. CONSAR: afores." },
          { es: "CONDUSEF: defensa del usuario. IPAB: seguro de depósitos bancarios.", en: "CONDUSEF: user protection. IPAB: bank deposit insurance." },
        ],
      },
      {
        heading: { es: "Intermediarios y cómo se protege tu dinero", en: "Intermediaries and how your money is protected" },
        body: [
          {
            es: "Los **intermediarios** son las instituciones con las que tratas directamente. Los **bancos** (banca múltiple, y la banca de desarrollo del gobierno) captan depósitos y prestan. Las **casas de bolsa** compran y venden valores por cuenta de sus clientes. Las **operadoras de fondos de inversión** administran fondos donde muchas personas juntan su dinero. También existen **aseguradoras**, **afores** y entidades de ahorro y crédito popular como **SOFIPOs** y **cooperativas**.",
            en: "**Intermediaries** are the institutions you deal with directly. **Banks** (commercial banks, and the government's development banks) take deposits and lend. **Brokerage firms** buy and sell securities on behalf of their clients. **Investment fund managers** run funds where many people pool their money. There are also **insurers**, **afores** and popular savings and credit entities such as **SOFIPOs** and **cooperatives**.",
          },
          {
            es: "La protección cambia según el intermediario. Los **depósitos bancarios** están cubiertos por el IPAB hasta **400,000 UDIS por persona y por banco** (las UDIS son una unidad que sube con la inflación, así que el monto en pesos cambia con el tiempo). Las inversiones en **valores** a través de una casa de bolsa no tienen ese seguro: los títulos están **en custodia a tu nombre** y su valor depende del mercado.",
            en: "Protection depends on the intermediary. **Bank deposits** are covered by IPAB up to **400,000 UDIS per person per bank** (UDIS are a unit that rises with inflation, so the peso amount changes over time). Investments in **securities** through a brokerage firm do not have that insurance: the securities are **held in custody in your name** and their value depends on the market.",
          },
          {
            es: "La regla práctica: **antes de entregar tu dinero, verifica que la entidad esté autorizada y supervisada**. Las listas de entidades autorizadas las publican las autoridades. Mini ejemplo: un \"club de inversión\" en redes sociales que no aparece en ningún registro y promete 10% mensual no es parte del sistema financiero regulado.",
            en: "The practical rule: **before handing over your money, check that the entity is authorized and supervised**. Authorities publish the lists of authorized entities. Mini example: an \"investment club\" on social media that appears in no registry and promises 10% a month is not part of the regulated financial system.",
          },
        ],
        formulas: [
          {
            name: { es: "Depósitos protegidos por el IPAB", en: "Deposits protected by IPAB" },
            expression: "Protegido en cada banco = el menor entre (tus depósitos en ese banco) y (400,000 UDIS)     Total protegido = suma de todos los bancos",
            variables: [
              { symbol: "Depósitos en ese banco", meaning: { es: "Lo que tienes en un solo banco, medido en UDIS.", en: "What you have at a single bank, measured in UDIS." } },
              { symbol: "400,000 UDIS", meaning: { es: "Límite de protección por persona y por banco que usa esta lección.", en: "Protection limit per person per bank used in this lesson." } },
              { symbol: "Sin cobertura", meaning: { es: "Lo que pasa del límite en cada banco: depósitos − 400,000 (si es positivo).", en: "What exceeds the limit at each bank: deposits − 400,000 (if positive)." } },
            ],
            steps: [
              { es: "Revisa cada banco por separado: el límite aplica por banco, no a la suma.", en: "Check each bank separately: the limit applies per bank, not to the sum." },
              { es: "Si tus depósitos en ese banco pasan de 400,000 UDIS, protegido = 400,000 y el resto queda sin cobertura; si no, todo está protegido.", en: "If your deposits at that bank exceed 400,000 UDIS, protected = 400,000 and the rest is uncovered; if not, everything is protected." },
              { es: "Suma lo protegido de todos los bancos y, aparte, lo que quedó sin cobertura.", en: "Add the protected amounts of all banks and, separately, what was left uncovered." },
            ],
            example: { es: "450,000 UDIS en el banco A y 300,000 en el banco B. A: protegidas 400,000; sin cobertura 450,000 − 400,000 = 50,000. B: 300,000 protegidas (bajo el límite). Total protegido: 400,000 + 300,000 = **700,000 UDIS**; sin cobertura: 50,000.", en: "450,000 UDIS at bank A and 300,000 at bank B. A: 400,000 protected; uncovered 450,000 − 400,000 = 50,000. B: 300,000 protected (under the limit). Total protected: 400,000 + 300,000 = **700,000 UDIS**; uncovered: 50,000." },
            mistake: { es: "Aplicar un solo límite de 400,000 UDIS a la suma de todos los bancos.", en: "Applying a single 400,000 UDIS limit to the sum of all banks." },
          },
        ],
      },
    ],
    examples: [
      {
        title: { es: "¿A quién acudir?", en: "Whom should you turn to?" },
        problem: {
          es: "Mariana tiene tres situaciones: (1) su banco le cobró una comisión que no reconoce; (2) quiere saber quién supervisa a la casa de bolsa donde invertirá; (3) quiere cambiarse de afore y conocer las reglas. ¿Qué autoridad corresponde a cada caso?",
          en: "Mariana has three situations: (1) her bank charged a fee she does not recognize; (2) she wants to know who supervises the brokerage firm where she will invest; (3) she wants to switch afores and learn the rules. Which authority fits each case?",
        },
        steps: [
          { es: "Caso 1: es una queja de usuario contra una institución → CONDUSEF (primero puede reclamar a la unidad de atención del banco).", en: "Case 1: a user complaint against an institution → CONDUSEF (she can first complain to the bank's customer unit)." },
          { es: "Caso 2: las casas de bolsa son entidades del mercado de valores → CNBV.", en: "Case 2: brokerage firms are securities-market entities → CNBV." },
          { es: "Caso 3: el sistema de ahorro para el retiro → CONSAR.", en: "Case 3: the retirement savings system → CONSAR." },
        ],
        result: {
          es: "CONDUSEF para la queja, CNBV para la casa de bolsa y CONSAR para la afore. Saber quién vigila qué te ahorra tiempo y te protege.",
          en: "CONDUSEF for the complaint, CNBV for the brokerage firm and CONSAR for the afore. Knowing who oversees what saves you time and protects you.",
        },
      },
      {
        title: { es: "Cuánto cubre el seguro de depósitos", en: "How much deposit insurance covers" },
        problem: {
          es: "Don Pedro tiene en un solo banco depósitos equivalentes a 520,000 UDIS y en otro banco 150,000 UDIS. Si ambos bancos quebraran, ¿cuánto estaría protegido por el IPAB, medido en UDIS?",
          en: "Don Pedro has deposits worth 520,000 UDIS in one bank and 150,000 UDIS in another bank. If both banks failed, how much would IPAB protect, measured in UDIS?",
        },
        steps: [
          { es: "El límite se aplica por persona y por banco: 400,000 UDIS en cada uno.", en: "The limit applies per person per bank: 400,000 UDIS at each." },
          { es: "Banco 1: tiene 520,000 → protegido 400,000; quedan 120,000 sin cobertura.", en: "Bank 1: has 520,000 → 400,000 protected; 120,000 uncovered." },
          { es: "Banco 2: tiene 150,000 → protegido completo, 150,000.", en: "Bank 2: has 150,000 → fully protected, 150,000." },
          { es: "Total protegido: 400,000 + 150,000 = 550,000 UDIS.", en: "Total protected: 400,000 + 150,000 = 550,000 UDIS." },
        ],
        result: {
          es: "Estarían protegidas 550,000 UDIS y 120,000 quedarían expuestas. Repartir depósitos grandes entre bancos distintos aumenta la protección.",
          en: "550,000 UDIS would be protected and 120,000 would be exposed. Spreading large deposits across different banks increases protection.",
        },
      },
    ],
    keyPoints: [
      { es: "El sistema financiero canaliza el ahorro de unos hacia la inversión de otros.", en: "The financial system channels some people's savings into others' investment." },
      { es: "La SHCP encabeza; Banxico es autónomo y cuida la inflación.", en: "SHCP leads; Banxico is autonomous and guards against inflation." },
      { es: "CNBV, CNSF y CONSAR supervisan sectores distintos: bancos y valores, seguros, y afores.", en: "CNBV, CNSF and CONSAR supervise different sectors: banks and securities, insurance, and afores." },
      { es: "CONDUSEF defiende al usuario; el IPAB protege depósitos bancarios hasta un límite en UDIS.", en: "CONDUSEF defends users; IPAB protects bank deposits up to a limit in UDIS." },
      { es: "Antes de invertir, verifica que la entidad esté autorizada.", en: "Before investing, check that the entity is authorized." },
    ],
    normativeNote: NOTE_SFM,
    exerciseIds: ['INV-02-E1', 'INV-02-E2', 'INV-02-E3', 'INV-02-E4', 'INV-02-E5', 'INV-02-E6'],
  },

  // ───────────────────────────── INV-03 ─────────────────────────────
  {
    id: 'INV-03',
    level: 4,
    topicIds: ['INV.3'],
    title: { es: "Mercados financieros y bursátiles", en: "Financial and stock markets" },
    summary: {
      es: "Los mercados financieros son los lugares donde se compran y venden instrumentos financieros; en la bolsa, los precios se forman por oferta y demanda a través de órdenes de compra y venta.",
      en: "Financial markets are the places where financial instruments are bought and sold; on the stock exchange, prices are set by supply and demand through buy and sell orders.",
    },
    minutes: 16,
    objectives: [
      { es: "Explicar qué es un mercado financiero y qué funciones cumple.", en: "Explain what a financial market is and what functions it serves." },
      { es: "Distinguir el mercado primario del secundario y el bursátil del extrabursátil.", en: "Distinguish the primary from the secondary market and exchange-traded from over-the-counter." },
      { es: "Describir cómo se forma un precio en bolsa con posturas, órdenes y diferencial (spread).", en: "Describe how a price forms on an exchange with bids, asks, orders and spread." },
    ],
    theory: [
      {
        heading: { es: "Qué es un mercado financiero", en: "What a financial market is" },
        body: [
          {
            es: "Un **mercado** es cualquier lugar, físico o electrónico, donde compradores y vendedores se encuentran. En un tianguis se intercambian jitomates; en un **mercado financiero** se intercambian **instrumentos financieros**: acciones, bonos, divisas (monedas de otros países) o contratos.",
            en: "A **market** is any place, physical or electronic, where buyers and sellers meet. At a tianguis (street market) tomatoes are traded; in a **financial market**, **financial instruments** are traded: stocks, bonds, foreign currencies or contracts.",
          },
          {
            es: "Los mercados cumplen tres funciones. Primero, **financiar**: permiten que empresas y gobiernos consigan dinero. Segundo, **dar liquidez**: si compraste un título, puedes venderlo después a otra persona. Tercero, **descubrir precios**: el precio que resulta de muchas compras y ventas resume lo que el mercado cree que vale algo.",
            en: "Markets serve three functions. First, **funding**: they let companies and governments raise money. Second, **providing liquidity**: if you bought a security, you can later sell it to someone else. Third, **price discovery**: the price that results from many purchases and sales summarizes what the market believes something is worth.",
          },
          {
            es: "Mini ejemplo: una cadena de restaurantes quiere abrir 50 sucursales. En lugar de pedir todo a un banco, puede vender acciones o bonos a miles de inversionistas en el mercado financiero.",
            en: "Mini example: a restaurant chain wants to open 50 branches. Instead of borrowing it all from a bank, it can sell stocks or bonds to thousands of investors in the financial market.",
          },
        ],
        bullets: [
          { es: "Financiar a empresas y gobiernos.", en: "Fund companies and governments." },
          { es: "Dar liquidez a los inversionistas.", en: "Give investors liquidity." },
          { es: "Descubrir precios mediante oferta y demanda.", en: "Discover prices through supply and demand." },
        ],
      },
      {
        heading: { es: "Mercado primario, secundario y la bolsa", en: "Primary market, secondary market and the exchange" },
        body: [
          {
            es: "En el **mercado primario** un título se vende **por primera vez**: el dinero va directo al emisor (la empresa o el gobierno). Cuando una empresa vende acciones al público por primera vez se llama **oferta pública inicial**. En el **mercado secundario**, los inversionistas **se revenden** esos títulos entre sí; el emisor ya no recibe dinero, pero ese mercado da liquidez.",
            en: "In the **primary market** a security is sold **for the first time**: the money goes straight to the issuer (the company or the government). When a company sells shares to the public for the first time it is called an **initial public offering**. In the **secondary market**, investors **resell** those securities to each other; the issuer receives no money, but this market provides liquidity.",
          },
          {
            es: "Una **bolsa de valores** es un mercado **organizado y regulado** donde se negocian valores con reglas comunes. En México operan la **Bolsa Mexicana de Valores (BMV)** y la **Bolsa Institucional de Valores (BIVA)**. Tú no compras directo en la bolsa: lo haces a través de un **intermediario**, como una casa de bolsa, y los títulos quedan en custodia en el **Indeval**, el depósito central de valores.",
            en: "A **stock exchange** is an **organized and regulated** market where securities trade under common rules. In Mexico the **Mexican Stock Exchange (BMV)** and the **Institutional Stock Exchange (BIVA)** operate. You do not buy directly on the exchange: you do it through an **intermediary**, such as a brokerage firm, and the securities are held in custody at **Indeval**, the central securities depository.",
          },
          {
            es: "Lo que se negocia fuera de una bolsa, directamente entre las partes, se llama mercado **extrabursátil** u **OTC** (*over the counter*). Mini ejemplo: cuando cambias dólares en una casa de cambio, la operación ocurre fuera de la bolsa.",
            en: "What trades outside an exchange, directly between the parties, is called the **over-the-counter** or **OTC** market. Mini example: when you exchange dollars at a currency exchange office, the transaction happens off-exchange.",
          },
        ],
      },
      {
        heading: { es: "Cómo se forma un precio en bolsa", en: "How a price forms on the exchange" },
        body: [
          {
            es: "En la bolsa, quien quiere comprar pone una **postura de compra** (cuánto está dispuesto a pagar) y quien quiere vender una **postura de venta** (cuánto pide). La mejor postura de compra es el precio más alto que alguien ofrece; la mejor de venta, el precio más bajo que alguien acepta. La diferencia entre ambas es el **diferencial** o **spread**.",
            en: "On the exchange, whoever wants to buy places a **bid** (how much they are willing to pay) and whoever wants to sell places an **ask** (how much they want). The best bid is the highest price someone offers; the best ask, the lowest price someone accepts. The difference between them is the **spread**.",
          },
          {
            es: "Puedes enviar una **orden de mercado**, que se ejecuta de inmediato al mejor precio disponible (si compras, pagas el precio de venta), o una **orden limitada**, en la que fijas el precio máximo al que compras o el mínimo al que vendes; puede tardar o no ejecutarse. Un spread pequeño suele indicar que el título es **muy líquido**.",
            en: "You can send a **market order**, which executes immediately at the best available price (if you buy, you pay the ask), or a **limit order**, where you set the maximum price to buy or the minimum to sell; it may take time or not execute at all. A narrow spread usually indicates the security is **very liquid**.",
          },
          {
            es: "Para ver cómo va el mercado en general se usan **índices**, que resumen el comportamiento de un grupo de acciones. En México el más conocido es el **S&P/BMV IPC**. Mini ejemplo: si la mejor compra es $50.20 y la mejor venta $50.35, el spread es $0.15.",
            en: "To see how the market is doing overall, **indices** are used, summarizing the behavior of a group of stocks. In Mexico the best known is the **S&P/BMV IPC**. Mini example: if the best bid is $50.20 and the best ask $50.35, the spread is $0.15.",
          },
        ],
        formulas: [
          {
            name: { es: "Diferencial (spread)", en: "Spread" },
            expression: "Spread = Mejor precio de venta (ask) − Mejor precio de compra (bid)",
            variables: [
              { symbol: "Mejor precio de venta (ask)", meaning: { es: "El precio más bajo que algún vendedor acepta, en pesos.", en: "The lowest price some seller accepts, in pesos." } },
              { symbol: "Mejor precio de compra (bid)", meaning: { es: "El precio más alto que algún comprador ofrece, en pesos.", en: "The highest price some buyer offers, in pesos." } },
              { symbol: "Spread", meaning: { es: "La diferencia entre ambos, en pesos por acción.", en: "The difference between them, in pesos per share." } },
            ],
            steps: [
              { es: "Busca en la pantalla la mejor postura de venta y la mejor de compra.", en: "Find the best ask and the best bid on the screen." },
              { es: "Resta: venta − compra.", en: "Subtract: ask − bid." },
            ],
            example: { es: "Mejor compra $30.40 y mejor venta $30.50: 30.50 − 30.40 = **$0.10** por acción.", en: "Best bid $30.40 and best ask $30.50: 30.50 − 30.40 = **$0.10** per share." },
            interpret: { es: "Spread pequeño = la acción es muy líquida y entrar y salir cuesta poco. Spread grande = costo mayor.", en: "Narrow spread = the share is very liquid and getting in and out is cheap. Wide spread = higher cost." },
          },
          {
            name: { es: "Costo de una compra con orden de mercado", en: "Cost of a purchase with a market order" },
            expression: "Monto = Número de acciones × Mejor precio de venta     Total = Monto + Monto × Comisión",
            variables: [
              { symbol: "Número de acciones", meaning: { es: "Cuántos títulos compras.", en: "How many shares you buy." } },
              { symbol: "Mejor precio de venta", meaning: { es: "El ask: al comprar con orden de mercado pagas lo que piden los vendedores, en pesos.", en: "The ask: buying with a market order you pay what sellers ask, in pesos." } },
              { symbol: "Comisión", meaning: { es: "Porcentaje que cobra la casa de bolsa, en decimal (0.25% = 0.0025).", en: "Percentage the brokerage charges, as a decimal (0.25% = 0.0025)." } },
            ],
            steps: [
              { es: "Toma el mejor precio de venta (no el de compra).", en: "Take the best ask (not the bid)." },
              { es: "Multiplícalo por el número de acciones: ese es el monto.", en: "Multiply it by the number of shares: that is the amount." },
              { es: "Si hay comisión, calcula monto × comisión y súmala.", en: "If there is a fee, compute amount × fee and add it." },
            ],
            example: { es: "Compras 300 acciones con bid $30.40 y ask $30.50, comisión de ejemplo 0.25%. Monto: 300 × 30.50 = $9,150. Comisión: 9,150 × 0.0025 = $22.875 ≈ $22.88. Total: 9,150 + 22.88 = **$9,172.88**.", en: "You buy 300 shares with bid $30.40 and ask $30.50, example fee 0.25%. Amount: 300 × 30.50 = $9,150. Fee: 9,150 × 0.0025 = $22.875 ≈ $22.88. Total: 9,150 + 22.88 = **$9,172.88**." },
            mistake: { es: "Usar el precio de compra (bid). Como comprador, tomas el precio que piden los vendedores.", en: "Using the bid. As a buyer, you take the price sellers ask." },
          },
        ],
      },
    ],
    examples: [
      {
        title: { es: "Comprar con orden de mercado", en: "Buying with a market order" },
        problem: {
          es: "En la pantalla de una acción hipotética aparece: mejor compra $50.20, mejor venta $50.35. Lucía envía una orden de mercado para comprar 200 acciones y su casa de bolsa cobra una comisión hipotética de 0.25% sobre el monto. ¿Cuánto paga en total?",
          en: "A hypothetical stock's screen shows: best bid $50.20, best ask $50.35. Lucía sends a market order to buy 200 shares and her brokerage charges a hypothetical 0.25% fee on the amount. How much does she pay in total?",
        },
        steps: [
          { es: "Una orden de mercado de compra se ejecuta al mejor precio de venta: $50.35.", en: "A market buy order executes at the best ask: $50.35." },
          { es: "Monto: 200 × $50.35 = $10,070.", en: "Amount: 200 × $50.35 = $10,070." },
          { es: "Comisión: $10,070 × 0.0025 = $25.175 ≈ $25.18.", en: "Fee: $10,070 × 0.0025 = $25.175 ≈ $25.18." },
          { es: "Total: $10,070 + $25.18 = $10,095.18 (algunos intermediarios también cobran IVA sobre la comisión).", en: "Total: $10,070 + $25.18 = $10,095.18 (some intermediaries also charge VAT on the fee)." },
        ],
        result: {
          es: "Lucía paga alrededor de $10,095.18. Si vendiera de inmediato a $50.20, recibiría menos: el spread y la comisión son costos de entrar y salir.",
          en: "Lucía pays about $10,095.18. If she sold right away at $50.20 she would receive less: the spread and the fee are costs of getting in and out.",
        },
      },
      {
        title: { es: "¿Primario o secundario?", en: "Primary or secondary?" },
        problem: {
          es: "Una empresa coloca por primera vez acciones en bolsa y recauda $500 millones. Un mes después, Raúl compra 100 de esas acciones a otra inversionista, Carmen. ¿En qué mercado ocurre cada operación y quién recibe el dinero?",
          en: "A company lists shares on the exchange for the first time and raises $500 million. A month later, Raúl buys 100 of those shares from another investor, Carmen. In which market does each transaction happen and who receives the money?",
        },
        steps: [
          { es: "La colocación inicial es una venta por primera vez → mercado primario; el dinero va a la empresa.", en: "The initial placement is a first-time sale → primary market; the money goes to the company." },
          { es: "La compra de Raúl es entre inversionistas → mercado secundario.", en: "Raúl's purchase is between investors → secondary market." },
          { es: "En el secundario el dinero de Raúl va a Carmen, no a la empresa.", en: "In the secondary market Raúl's money goes to Carmen, not to the company." },
        ],
        result: {
          es: "Primario: la empresa recibe $500 millones. Secundario: Carmen recibe el pago de Raúl. El secundario no financia a la empresa, pero hace que sus acciones sean fáciles de vender.",
          en: "Primary: the company receives $500 million. Secondary: Carmen receives Raúl's payment. The secondary market does not fund the company, but it makes its shares easy to sell.",
        },
      },
    ],
    keyPoints: [
      { es: "Un mercado financiero sirve para financiar, dar liquidez y descubrir precios.", en: "A financial market serves to fund, provide liquidity and discover prices." },
      { es: "Primario: el emisor vende por primera vez. Secundario: los inversionistas se revenden títulos.", en: "Primary: the issuer sells for the first time. Secondary: investors resell securities." },
      { es: "En México operan la BMV y BIVA; inviertes a través de un intermediario y el Indeval custodia los valores.", en: "In Mexico the BMV and BIVA operate; you invest through an intermediary and Indeval holds the securities." },
      { es: "Spread = mejor venta − mejor compra; un spread pequeño suele indicar alta liquidez.", en: "Spread = best ask − best bid; a narrow spread usually indicates high liquidity." },
      { es: "Orden de mercado: ejecución inmediata; orden limitada: tú fijas el precio.", en: "Market order: immediate execution; limit order: you set the price." },
    ],
    normativeNote: NOTE_MARKETS,
    exerciseIds: ['INV-03-E1', 'INV-03-E2', 'INV-03-E3', 'INV-03-E4', 'INV-03-E5', 'INV-03-E6'],
  },

  // ───────────────────────────── INV-04 ─────────────────────────────
  {
    id: 'INV-04',
    level: 4,
    topicIds: ['INV.4'],
    title: { es: "Mercado de dinero y mercado de capitales", en: "Money market and capital market" },
    summary: {
      es: "El mercado de dinero negocia deuda de corto plazo, líquida y de bajo riesgo; el mercado de capitales financia proyectos de largo plazo con acciones y deuda a varios años.",
      en: "The money market trades short-term, liquid, low-risk debt; the capital market funds long-term projects with stocks and multi-year debt.",
    },
    minutes: 15,
    objectives: [
      { es: "Distinguir el mercado de dinero del de capitales por plazo, riesgo y propósito.", en: "Distinguish the money market from the capital market by term, risk and purpose." },
      { es: "Reconocer instrumentos típicos de cada mercado.", en: "Recognize typical instruments of each market." },
      { es: "Calcular el interés de un instrumento de corto plazo y elegir mercado según un objetivo.", en: "Compute the interest of a short-term instrument and choose a market according to a goal." },
    ],
    theory: [
      {
        heading: { es: "Dos mercados según el plazo", en: "Two markets by term" },
        body: [
          {
            es: "Los mercados financieros se suelen dividir por **plazo**. El **mercado de dinero** es donde se negocian instrumentos de **deuda de corto plazo**, en general de **un año o menos**. Sirve para que gobiernos, bancos y empresas cubran necesidades de efectivo inmediatas, y para que los inversionistas estacionen dinero con poco riesgo.",
            en: "Financial markets are often divided by **term**. The **money market** is where **short-term debt** instruments trade, generally **one year or less**. It lets governments, banks and companies cover immediate cash needs, and lets investors park money with little risk.",
          },
          {
            es: "El **mercado de capitales** es donde se financian proyectos de **largo plazo** (más de un año): construir una planta, una carretera o una red de tiendas. Ahí se negocian **acciones** (partes de la propiedad de una empresa) y **deuda de largo plazo** (bonos a varios años).",
            en: "The **capital market** is where **long-term** projects (more than a year) are funded: building a plant, a highway or a chain of stores. **Stocks** (pieces of ownership of a company) and **long-term debt** (multi-year bonds) trade there.",
          },
          {
            es: "Ojo con los nombres: en México también es común hablar de **mercado de deuda** (todos los bonos, cortos y largos) y **mercado accionario** o de capitales (las acciones). Lo importante es la idea: **corto plazo y liquidez** contra **largo plazo y crecimiento**.",
            en: "Watch the names: in Mexico it is also common to speak of the **debt market** (all bonds, short and long) and the **equity** or capital market (stocks). What matters is the idea: **short term and liquidity** versus **long term and growth**.",
          },
        ],
        bullets: [
          { es: "Mercado de dinero: deuda a 1 año o menos, alta liquidez, bajo riesgo, rendimiento modesto.", en: "Money market: debt of 1 year or less, high liquidity, low risk, modest return." },
          { es: "Mercado de capitales: acciones y deuda a más de 1 año, mayor riesgo y mayor potencial.", en: "Capital market: stocks and debt over 1 year, higher risk and higher potential." },
        ],
      },
      {
        heading: { es: "Instrumentos del mercado de dinero", en: "Money-market instruments" },
        body: [
          {
            es: "Los más conocidos en México son los **CETES** (deuda del gobierno federal a corto plazo, que verás a detalle en el siguiente tema), los **pagarés bancarios** (un banco te paga un interés fijo por prestarle a un plazo, como 28 o 91 días) y el **papel comercial** (deuda de corto plazo de empresas).",
            en: "The best known in Mexico are **CETES** (short-term federal government debt, covered in detail in the next topic), **bank promissory notes** (a bank pays you fixed interest for lending to it for a term, such as 28 or 91 days) and **commercial paper** (short-term company debt).",
          },
          {
            es: "Otra operación frecuente es el **reporto**: compras títulos de deuda hoy con el acuerdo de que te los recomprarán en una fecha cercana a un precio mayor; la diferencia es tu ganancia. Es muy usado para invertir a muy pocos días.",
            en: "Another common transaction is the **repo** (reporto): you buy debt securities today under an agreement that they will be bought back from you on a near date at a higher price; the difference is your gain. It is widely used to invest for very few days.",
          },
          {
            es: "En el mercado de dinero el interés suele calcularse como **interés simple** (se calcula solo sobre el dinero que pusiste, sin sumar los intereses ya ganados) con años de **360 días**. Mini ejemplo: $5,000 en un pagaré a 91 días con tasa anual hipotética de 10% ganan $5,000 × 0.10 × 91 ÷ 360 = $126.39.",
            en: "In the money market interest is usually computed as **simple interest** (computed only on the money you put in, without adding interest already earned) on a **360-day** year. Mini example: $5,000 in a 91-day note at a hypothetical 10% annual rate earns $5,000 × 0.10 × 91 ÷ 360 = $126.39.",
          },
        ],
        formulas: [
          {
            name: { es: "Interés simple del mercado de dinero (año de 360 días)", en: "Money-market simple interest (360-day year)" },
            expression: "Interés = Capital × Tasa anual × Días ÷ 360     Monto al vencimiento = Capital + Interés",
            variables: [
              { symbol: "Interés", meaning: { es: "Lo que ganas en el plazo, en pesos.", en: "What you earn over the term, in pesos." } },
              { symbol: "Capital", meaning: { es: "Lo que inviertes, en pesos.", en: "What you invest, in pesos." } },
              { symbol: "Tasa anual", meaning: { es: "Tasa por un año completo, en decimal (8% = 0.08).", en: "Rate for a full year, as a decimal (8% = 0.08)." } },
              { symbol: "Días", meaning: { es: "Plazo de la inversión en días (por ejemplo, 28, 91 o 182).", en: "Investment term in days (for example, 28, 91 or 182)." } },
              { symbol: "360", meaning: { es: "Días del año según la convención del mercado de dinero.", en: "Days in the year under the money-market convention." } },
            ],
            steps: [
              { es: "Convierte la tasa a decimal: 8% = 0.08.", en: "Convert the rate to a decimal: 8% = 0.08." },
              { es: "Calcula la fracción del año: días ÷ 360.", en: "Compute the fraction of the year: days ÷ 360." },
              { es: "Multiplica capital × tasa × esa fracción: ese es el interés.", en: "Multiply principal × rate × that fraction: that is the interest." },
              { es: "Súmale el capital para saber cuánto recibes al vencimiento.", en: "Add the principal to know how much you receive at maturity." },
            ],
            example: { es: "$30,000 a 182 días con tasa anual de ejemplo de 8%: 182 ÷ 360 = 0.505556; 30,000 × 0.08 = 2,400; 2,400 × 0.505556 ≈ **$1,213.33** de interés. Al vencimiento: 30,000 + 1,213.33 = $31,213.33.", en: "$30,000 for 182 days at an example 8% annual rate: 182 ÷ 360 = 0.505556; 30,000 × 0.08 = 2,400; 2,400 × 0.505556 ≈ **$1,213.33** interest. At maturity: 30,000 + 1,213.33 = $31,213.33." },
            mistake: { es: "Aplicar la tasa anual completa como si el plazo fuera un año, o dividir entre 12 cuando el plazo está en días.", en: "Applying the full annual rate as if the term were a year, or dividing by 12 when the term is in days." },
          },
        ],
      },
      {
        heading: { es: "Mercado de capitales y cómo elegir", en: "Capital market and how to choose" },
        body: [
          {
            es: "En el mercado de capitales, al comprar **acciones** te vuelves socio: ganas si la empresa crece (sube el precio o reparte dividendos) y pierdes si le va mal. Con **bonos de largo plazo** prestas a varios años a cambio de intereses periódicos. Ambos pueden subir y bajar de precio antes de su vencimiento o de que vendas.",
            en: "In the capital market, buying **stocks** makes you a partner: you gain if the company grows (the price rises or it pays dividends) and you lose if it does poorly. With **long-term bonds** you lend for several years in exchange for periodic interest. Both can rise and fall in price before maturity or before you sell.",
          },
          {
            es: "¿Cuál elegir? Depende de **cuándo necesitas el dinero**. Dinero para emergencias o para una meta en meses → mercado de dinero, por su liquidez y estabilidad. Dinero que no tocarás en muchos años, como el retiro → el mercado de capitales tiene más potencial de crecer por encima de la inflación, aunque con altibajos.",
            en: "Which to choose? It depends on **when you need the money**. Emergency money or a goal months away → money market, for its liquidity and stability. Money you will not touch for many years, like retirement → the capital market has more potential to grow above inflation, though with ups and downs.",
          },
          {
            es: "Mini ejemplo: Rosa necesita $30,000 para la inscripción de su hija en 4 meses: le conviene el mercado de dinero. Su hermano, de 25 años, ahorra para dentro de 30 años: puede tolerar las subidas y bajadas del mercado de capitales.",
            en: "Mini example: Rosa needs $30,000 for her daughter's school enrollment in 4 months: the money market suits her. Her 25-year-old brother saves for 30 years from now: he can tolerate the capital market's ups and downs.",
          },
        ],
      },
    ],
    examples: [
      {
        title: { es: "Interés de un pagaré bancario", en: "Interest on a bank promissory note" },
        problem: {
          es: "Elena invierte $50,000 en un pagaré bancario a 28 días con una tasa anual hipotética de 9%. ¿Cuánto interés gana y cuánto recibe al vencimiento (antes de impuestos)?",
          en: "Elena invests $50,000 in a 28-day bank promissory note at a hypothetical 9% annual rate. How much interest does she earn and how much does she receive at maturity (before taxes)?",
        },
        steps: [
          { es: "Fórmula: Interés = Capital × Tasa × Días ÷ 360.", en: "Formula: Interest = Principal × Rate × Days ÷ 360." },
          { es: "Interés = $50,000 × 0.09 × 28 ÷ 360 = $350.", en: "Interest = $50,000 × 0.09 × 28 ÷ 360 = $350." },
          { es: "Al vencimiento: $50,000 + $350 = $50,350.", en: "At maturity: $50,000 + $350 = $50,350." },
        ],
        result: {
          es: "Elena gana $350 en 28 días y recibe $50,350. El 9% es anual: por solo 28 días gana una fracción de ese porcentaje.",
          en: "Elena earns $350 in 28 days and receives $50,350. The 9% is annual: for only 28 days she earns a fraction of that percentage.",
        },
      },
      {
        title: { es: "Elegir mercado según la meta", en: "Choosing a market by goal" },
        problem: {
          es: "Tomás tiene tres metas: (1) un fondo de emergencia de $40,000; (2) pagar el seguro del coche en 6 meses; (3) complementar su retiro en 25 años. ¿Qué mercado encaja mejor con cada una?",
          en: "Tomás has three goals: (1) a $40,000 emergency fund; (2) paying his car insurance in 6 months; (3) supplementing his retirement in 25 years. Which market fits each best?",
        },
        steps: [
          { es: "Meta 1: necesita disponibilidad inmediata y estabilidad → mercado de dinero.", en: "Goal 1: needs immediate availability and stability → money market." },
          { es: "Meta 2: plazo menor a un año y fecha fija → mercado de dinero (por ejemplo, un instrumento que venza antes del pago).", en: "Goal 2: under one year with a fixed date → money market (for example, an instrument maturing before the payment)." },
          { es: "Meta 3: plazo muy largo y busca crecer por encima de la inflación → mercado de capitales.", en: "Goal 3: very long horizon and seeks to grow above inflation → capital market." },
        ],
        result: {
          es: "Metas 1 y 2: mercado de dinero. Meta 3: mercado de capitales. El plazo de la meta manda sobre el rendimiento que \"se ve atractivo\".",
          en: "Goals 1 and 2: money market. Goal 3: capital market. The goal's horizon rules over the return that \"looks attractive\".",
        },
      },
    ],
    keyPoints: [
      { es: "Mercado de dinero: deuda de corto plazo (1 año o menos), líquida y de bajo riesgo.", en: "Money market: short-term debt (1 year or less), liquid and low risk." },
      { es: "Mercado de capitales: acciones y deuda de largo plazo para proyectos de varios años.", en: "Capital market: stocks and long-term debt for multi-year projects." },
      { es: "Instrumentos de dinero: CETES, pagarés bancarios, papel comercial y reportos.", en: "Money-market instruments: CETES, bank notes, commercial paper and repos." },
      { es: "En el mercado de dinero el interés suele ser simple con año de 360 días.", en: "In the money market interest is usually simple on a 360-day year." },
      { es: "Elige el mercado según cuándo necesitas el dinero.", en: "Choose the market according to when you need the money." },
    ],
    normativeNote: NOTE_INVEST,
    exerciseIds: ['INV-04-E1', 'INV-04-E2', 'INV-04-E3', 'INV-04-E4', 'INV-04-E5', 'INV-04-E6'],
  },

  // ───────────────────────────── INV-05 ─────────────────────────────
  {
    id: 'INV-05',
    level: 4,
    topicIds: ['INV.5'],
    title: { es: "CETES y deuda gubernamental", en: "CETES and government debt" },
    summary: {
      es: "Los CETES son préstamos de corto plazo que le haces al Gobierno Federal: los compras con descuento y al vencimiento recibes $10 por título; junto con Bonos M, Udibonos y Bondes forman la deuda gubernamental.",
      en: "CETES are short-term loans you make to the Federal Government: you buy them at a discount and at maturity you receive $10 per security; together with Bonos M, Udibonos and Bondes they make up government debt.",
    },
    minutes: 18,
    objectives: [
      { es: "Explicar qué son los CETES, quién los emite y cómo funcionan a descuento.", en: "Explain what CETES are, who issues them and how they work at a discount." },
      { es: "Calcular el precio de un CETE a partir de su tasa y su ganancia al vencimiento.", en: "Compute a CETE's price from its rate and its gain at maturity." },
      { es: "Distinguir CETES, Bonos M, Udibonos y Bondes por plazo y tipo de tasa.", en: "Distinguish CETES, Bonos M, Udibonos and Bondes by term and type of rate." },
    ],
    theory: [
      {
        heading: { es: "Qué son los CETES y cómo funcionan", en: "What CETES are and how they work" },
        body: [
          {
            es: "Los **CETES** (Certificados de la Tesorería de la Federación) son títulos de deuda que emite el **Gobierno Federal** para conseguir dinero a corto plazo. Cuando compras CETES, **le prestas al gobierno**. Se consideran de los instrumentos de **menor riesgo en pesos** en México, porque el emisor es el propio gobierno.",
            en: "**CETES** (Federal Treasury Certificates) are debt securities issued by the **Federal Government** to raise short-term money. When you buy CETES, **you lend to the government**. They are considered among the **lowest-risk peso instruments** in Mexico, because the issuer is the government itself.",
          },
          {
            es: "Cada CETE tiene un **valor nominal de $10**: es lo que te pagan al vencimiento. Funcionan **a descuento**: no pagan intereses periódicos; los compras **por menos de $10** y la diferencia es tu ganancia. Los plazos más comunes son **28, 91, 182 y 364 días**.",
            en: "Each CETE has a **face value of $10**: that is what you are paid at maturity. They work **at a discount**: they pay no periodic interest; you buy them **for less than $10** and the difference is your gain. The most common terms are **28, 91, 182 and 364 days**.",
          },
          {
            es: "Se colocan en **subastas** periódicas en las que el **Banco de México** actúa como agente del gobierno; ahí se determina la tasa. Las personas pueden comprarlos con montos pequeños a través de bancos, casas de bolsa o de **Cetesdirecto**, el programa del gobierno para invertir directamente. Mini ejemplo: con unos cientos de pesos ya puedes comprar algunos CETES.",
            en: "They are placed in periodic **auctions** where **Banco de México** acts as the government's agent; the rate is set there. Individuals can buy them with small amounts through banks, brokerage firms or **Cetesdirecto**, the government's program for investing directly. Mini example: with a few hundred pesos you can already buy some CETES.",
          },
        ],
        bullets: [
          { es: "Emisor: Gobierno Federal.", en: "Issuer: Federal Government." },
          { es: "Valor nominal: $10 por título.", en: "Face value: $10 per security." },
          { es: "Se compran a descuento; no pagan cupones.", en: "Bought at a discount; no coupons." },
          { es: "Plazos comunes: 28, 91, 182 y 364 días.", en: "Common terms: 28, 91, 182 and 364 days." },
        ],
      },
      {
        heading: { es: "Precio y rendimiento de un CETE", en: "Price and return of a CETE" },
        body: [
          {
            es: "En palabras sencillas: el precio de hoy es la cantidad que, sumándole los intereses del plazo, se convierte justo en $10 al vencimiento. La **tasa de rendimiento** de un CETE es anual y se calcula con año de 360 días. Para saber cuánto pagas hoy, divides los $10 que recibirás entre uno más la parte de la tasa que corresponde al plazo. Entre **más alta la tasa** o **más largo el plazo**, **más bajo** es el precio de hoy.",
            en: "In plain words: today's price is the amount that, after adding the interest for the term, turns into exactly $10 at maturity. A CETE's **yield** is annual and computed on a 360-day year. To know what you pay today, divide the $10 you will receive by one plus the part of the rate that corresponds to the term. The **higher the rate** or the **longer the term**, the **lower** today's price.",
          },
          {
            es: "Al revés, si conoces el precio, puedes obtener la tasa: cuánto ganas por cada peso invertido, llevado a un año. La ganancia de un CETE se considera interés y está sujeta a impuestos; las reglas fiscales cambian, así que revisa la retención vigente.",
            en: "Conversely, if you know the price, you can get the rate: how much you earn per peso invested, annualized. A CETE's gain is treated as interest and is subject to tax; tax rules change, so check the current withholding.",
          },
          {
            es: "Mini ejemplo con tasa hipotética de 10% a 91 días: precio = 10 ÷ (1 + 0.10 × 91 ÷ 360) = $9.7535. Ganas $10 − $9.7535 = $0.2465 por título en 91 días.",
            en: "Mini example with a hypothetical 10% rate for 91 days: price = 10 ÷ (1 + 0.10 × 91 ÷ 360) = $9.7535. You earn $10 − $9.7535 = $0.2465 per security in 91 days.",
          },
        ],
        formulas: [
          {
            name: { es: "Precio de un CETE", en: "Price of a CETE" },
            expression: "Precio = 10 ÷ (1 + Tasa × Días ÷ 360)",
            variables: [
              { symbol: "Precio", meaning: { es: "Lo que pagas hoy por cada CETE, en pesos.", en: "What you pay today for each CETE, in pesos." } },
              { symbol: "10", meaning: { es: "Valor nominal: los $10 que recibes por título al vencimiento.", en: "Face value: the $10 you receive per security at maturity." } },
              { symbol: "Tasa", meaning: { es: "Tasa de rendimiento anual, en decimal (9% = 0.09).", en: "Annual yield, as a decimal (9% = 0.09)." } },
              { symbol: "Días", meaning: { es: "Plazo del CETE (28, 91, 182 o 364).", en: "CETE term (28, 91, 182 or 364)." } },
            ],
            steps: [
              { es: "Calcula la parte de la tasa del plazo: tasa × días ÷ 360.", en: "Compute the rate for the term: rate × days ÷ 360." },
              { es: "Súmale 1.", en: "Add 1." },
              { es: "Divide 10 entre ese número.", en: "Divide 10 by that number." },
            ],
            example: { es: "Tasa de ejemplo 9% a 182 días: 0.09 × 182 ÷ 360 = 0.0455; 1 + 0.0455 = 1.0455; 10 ÷ 1.0455 ≈ **$9.5648** por CETE.", en: "Example rate 9% for 182 days: 0.09 × 182 ÷ 360 = 0.0455; 1 + 0.0455 = 1.0455; 10 ÷ 1.0455 ≈ **$9.5648** per CETE." },
            interpret: { es: "A mayor tasa o mayor plazo, el divisor crece y el precio de hoy baja.", en: "The higher the rate or the longer the term, the bigger the divisor and the lower today's price." },
            mistake: { es: "Restar la tasa completa a los $10 (10 − 0.9 = $9.10) como si fuera un descuento directo de un año.", en: "Subtracting the full rate from the $10 (10 − 0.9 = $9.10) as if it were a direct one-year discount." },
          },
          {
            name: { es: "Inversión, ganancia y rendimiento del periodo", en: "Investment, gain and period return" },
            expression: "Inversión = Títulos × Precio     Ganancia = Títulos × 10 − Inversión     Rendimiento del periodo = Ganancia ÷ Inversión",
            variables: [
              { symbol: "Títulos", meaning: { es: "Número de CETES que compras.", en: "Number of CETES you buy." } },
              { symbol: "Precio", meaning: { es: "Lo que pagas por cada CETE, en pesos.", en: "What you pay for each CETE, in pesos." } },
              { symbol: "Inversión", meaning: { es: "Lo que pagas en total hoy, en pesos.", en: "What you pay in total today, in pesos." } },
              { symbol: "Ganancia", meaning: { es: "Lo que recibes de más al vencimiento, en pesos (antes de impuestos).", en: "What you receive on top at maturity, in pesos (before taxes)." } },
              { symbol: "Rendimiento del periodo", meaning: { es: "Ganancia en proporción a lo que pagaste, solo por ese plazo (no es anual).", en: "Gain in proportion to what you paid, for that term only (not annual)." } },
            ],
            steps: [
              { es: "Multiplica títulos × precio: lo que inviertes.", en: "Multiply securities × price: what you invest." },
              { es: "Multiplica títulos × $10: lo que recibes al vencimiento.", en: "Multiply securities × $10: what you receive at maturity." },
              { es: "Resta para obtener la ganancia.", en: "Subtract to get the gain." },
              { es: "Divide la ganancia entre la inversión y multiplica por 100.", en: "Divide the gain by the investment and multiply by 100." },
            ],
            example: { es: "2,000 CETES a $9.85: inversión 2,000 × 9.85 = $19,700; recibes 2,000 × 10 = $20,000; ganancia 20,000 − 19,700 = $300; rendimiento 300 ÷ 19,700 = 0.015228 → **1.52%** en el plazo.", en: "2,000 CETES at $9.85: investment 2,000 × 9.85 = $19,700; you receive 2,000 × 10 = $20,000; gain 20,000 − 19,700 = $300; return 300 ÷ 19,700 = 0.015228 → **1.52%** for the term." },
            mistake: { es: "Dividir la ganancia entre lo que recibes ($20,000) en vez de entre lo que pagaste ($19,700).", en: "Dividing the gain by what you receive ($20,000) instead of by what you paid ($19,700)." },
          },
          {
            name: { es: "Tasa anual a partir del precio", en: "Annual rate from the price" },
            expression: "Tasa = (10 ÷ Precio − 1) × 360 ÷ Días",
            variables: [
              { symbol: "Tasa", meaning: { es: "Rendimiento anual equivalente, en decimal; × 100 para %.", en: "Equivalent annual yield, as a decimal; × 100 for %." } },
              { symbol: "Precio", meaning: { es: "Lo que pagaste por cada CETE, en pesos.", en: "What you paid for each CETE, in pesos." } },
              { symbol: "Días", meaning: { es: "Plazo del CETE.", en: "CETE term." } },
              { symbol: "360 ÷ Días", meaning: { es: "Cuántas veces cabe el plazo en un año: sirve para anualizar.", en: "How many times the term fits in a year: used to annualize." } },
            ],
            steps: [
              { es: "Divide 10 entre el precio y réstale 1: es el rendimiento del periodo.", en: "Divide 10 by the price and subtract 1: that is the period return." },
              { es: "Multiplícalo por 360 ÷ días para llevarlo a un año.", en: "Multiply it by 360 ÷ days to scale it to a year." },
              { es: "Multiplica por 100 para leerlo en %.", en: "Multiply by 100 to read it in %." },
            ],
            example: { es: "CETE a 91 días en $9.85: 10 ÷ 9.85 = 1.015228; − 1 = 0.015228; × 360 ÷ 91 = 0.015228 × 3.956 ≈ 0.0602 → **6.02%** anual.", en: "91-day CETE at $9.85: 10 ÷ 9.85 = 1.015228; − 1 = 0.015228; × 360 ÷ 91 = 0.015228 × 3.956 ≈ 0.0602 → **6.02%** annual." },
            mistake: { es: "Comparar el rendimiento del periodo (1.52%) con tasas anuales sin anualizarlo.", en: "Comparing the period return (1.52%) with annual rates without annualizing it." },
          },
        ],
      },
      {
        heading: { es: "Otros bonos del gobierno: Bonos M, Udibonos y Bondes", en: "Other government bonds: Bonos M, Udibonos and Bondes" },
        body: [
          {
            es: "Para plazos más largos, el gobierno emite otros instrumentos. Los **Bonos M** son de **tasa fija**: pagan un **cupón** (un interés periódico, cada seis meses) siempre igual, y devuelven su valor nominal al final, a varios años. Si la inflación sube mucho, ese pago fijo pierde poder de compra.",
            en: "For longer terms, the government issues other instruments. **Bonos M** are **fixed-rate**: they pay a **coupon** (periodic interest, every six months) that is always the same, and return their face value at the end, after several years. If inflation rises a lot, that fixed payment loses purchasing power.",
          },
          {
            es: "Los **Udibonos** están denominados en **UDIS**, una unidad de valor que sube con la inflación. Así, tu inversión y sus cupones **se ajustan por inflación** y te protegen de ella. Los **Bondes** son de **tasa variable**: su interés se ajusta según una tasa de referencia del mercado, por lo que acompañan los movimientos de las tasas.",
            en: "**Udibonos** are denominated in **UDIS**, a unit of value that rises with inflation. So your investment and its coupons **adjust for inflation** and protect you from it. **Bondes** are **floating-rate**: their interest adjusts according to a market reference rate, so they follow interest-rate movements.",
          },
          {
            es: "Mini ejemplo: si temes que la inflación suba en los próximos años, un Udibono protege mejor tu poder de compra que un Bono M de tasa fija.",
            en: "Mini example: if you fear inflation will rise in the coming years, an Udibono protects your purchasing power better than a fixed-rate Bono M.",
          },
        ],
        bullets: [
          { es: "CETES: corto plazo, a descuento.", en: "CETES: short term, at a discount." },
          { es: "Bonos M: largo plazo, tasa fija, cupón semestral.", en: "Bonos M: long term, fixed rate, semiannual coupon." },
          { es: "Udibonos: en UDIS, protegen contra la inflación.", en: "Udibonos: in UDIS, protect against inflation." },
          { es: "Bondes: tasa variable que sigue al mercado.", en: "Bondes: floating rate that follows the market." },
        ],
      },
    ],
    examples: [
      {
        title: { es: "Comprar 1,000 CETES a 28 días", en: "Buying 1,000 CETES at 28 days" },
        problem: {
          es: "Valeria compra 1,000 CETES a 28 días con una tasa hipotética de 11% anual. ¿Cuánto paga por cada uno, cuánto invierte y cuánto gana al vencimiento (antes de impuestos)?",
          en: "Valeria buys 1,000 CETES at 28 days with a hypothetical 11% annual rate. How much does she pay for each, how much does she invest and how much does she earn at maturity (before taxes)?",
        },
        steps: [
          { es: "Parte de la tasa del periodo: 0.11 × 28 ÷ 360 = 0.008556.", en: "Rate for the period: 0.11 × 28 ÷ 360 = 0.008556." },
          { es: "Precio: 10 ÷ 1.008556 = $9.91517 por CETE.", en: "Price: 10 ÷ 1.008556 = $9.91517 per CETE." },
          { es: "Inversión: 1,000 × $9.91517 = $9,915.17.", en: "Investment: 1,000 × $9.91517 = $9,915.17." },
          { es: "Al vencimiento recibe 1,000 × $10 = $10,000; ganancia = $10,000 − $9,915.17 = $84.83.", en: "At maturity she receives 1,000 × $10 = $10,000; gain = $10,000 − $9,915.17 = $84.83." },
        ],
        result: {
          es: "Paga $9.91517 por CETE, invierte $9,915.17 y gana $84.83 en 28 días. Puede reinvertir al vencimiento para aprovechar el interés compuesto.",
          en: "She pays $9.91517 per CETE, invests $9,915.17 and earns $84.83 in 28 days. She can reinvest at maturity to benefit from compounding.",
        },
      },
      {
        title: { es: "De precio a tasa", en: "From price to rate" },
        problem: {
          es: "Un CETE a 91 días se vende en $9.80. ¿Cuál es su ganancia por título, su rendimiento en el periodo y su tasa anual equivalente?",
          en: "A 91-day CETE sells for $9.80. What is its gain per security, its return for the period and its equivalent annual rate?",
        },
        steps: [
          { es: "Ganancia: $10 − $9.80 = $0.20 por título.", en: "Gain: $10 − $9.80 = $0.20 per security." },
          { es: "Rendimiento del periodo: 0.20 ÷ 9.80 = 0.020408 = 2.04%.", en: "Return for the period: 0.20 ÷ 9.80 = 0.020408 = 2.04%." },
          { es: "Anualizado: 0.020408 × 360 ÷ 91 = 0.0807 ≈ 8.07%.", en: "Annualized: 0.020408 × 360 ÷ 91 = 0.0807 ≈ 8.07%." },
        ],
        result: {
          es: "Gana $0.20 por CETE: 2.04% en 91 días, equivalente a una tasa anual de alrededor de 8.07%.",
          en: "It earns $0.20 per CETE: 2.04% in 91 days, equivalent to an annual rate of about 8.07%.",
        },
      },
    ],
    keyPoints: [
      { es: "Comprar CETES es prestarle al Gobierno Federal a corto plazo.", en: "Buying CETES is lending to the Federal Government for a short term." },
      { es: "Valor nominal de $10; se compran con descuento y la diferencia es la ganancia.", en: "Face value of $10; bought at a discount and the difference is the gain." },
      { es: "Precio = 10 ÷ (1 + tasa × días ÷ 360): a mayor tasa o plazo, menor precio.", en: "Price = 10 ÷ (1 + rate × days ÷ 360): higher rate or term, lower price." },
      { es: "Bonos M: tasa fija; Udibonos: ajustados por inflación; Bondes: tasa variable.", en: "Bonos M: fixed rate; Udibonos: inflation-adjusted; Bondes: floating rate." },
      { es: "La ganancia paga impuestos; revisa la regla fiscal vigente.", en: "The gain is taxed; check the current tax rule." },
    ],
    normativeNote: NOTE_GOV_DEBT,
    exerciseIds: ['INV-05-E1', 'INV-05-E2', 'INV-05-E3', 'INV-05-E4', 'INV-05-E5', 'INV-05-E6'],
  },

  // ───────────────────────────── INV-06 ─────────────────────────────
  {
    id: 'INV-06',
    level: 4,
    topicIds: ['INV.6'],
    title: { es: "Bonos e instrumentos de renta fija", en: "Bonds and fixed-income instruments" },
    summary: {
      es: "Un bono es un préstamo que le haces a un emisor a cambio de cupones y la devolución del valor nominal; su precio se mueve al revés que las tasas y su riesgo depende de quién lo emite.",
      en: "A bond is a loan you make to an issuer in exchange for coupons and the return of the face value; its price moves opposite to rates and its risk depends on who issues it.",
    },
    minutes: 18,
    objectives: [
      { es: "Identificar las partes de un bono: emisor, valor nominal, cupón y vencimiento.", en: "Identify a bond's parts: issuer, face value, coupon and maturity." },
      { es: "Explicar por qué el precio de un bono baja cuando suben las tasas y calcular su rendimiento corriente.", en: "Explain why a bond's price falls when rates rise and compute its current yield." },
      { es: "Reconocer los riesgos de la renta fija y el papel de las calificaciones crediticias.", en: "Recognize fixed-income risks and the role of credit ratings." },
    ],
    theory: [
      {
        heading: { es: "Anatomía de un bono", en: "Anatomy of a bond" },
        body: [
          {
            es: "Un **bono** es un título de deuda: cuando lo compras, **le prestas dinero al emisor** (un gobierno o una empresa). A cambio, el emisor se compromete a pagarte **intereses** periódicos y a devolverte el dinero en una fecha fija. Se llama **renta fija** porque los pagos están **definidos desde el inicio**, no porque no tenga riesgo.",
            en: "A **bond** is a debt security: when you buy it, **you lend money to the issuer** (a government or a company). In exchange, the issuer promises to pay you periodic **interest** and to return the money on a fixed date. It is called **fixed income** because the payments are **defined from the start**, not because it is risk-free.",
          },
          {
            es: "Sus partes: el **valor nominal** (lo que se devuelve al final, por ejemplo $100), la **tasa cupón** (el porcentaje anual del valor nominal que se paga como interés), la **periodicidad** (cada cuánto se paga el cupón) y el **vencimiento** (la fecha en que se devuelve el valor nominal).",
            en: "Its parts: the **face value** (what is returned at the end, for example $100), the **coupon rate** (the annual percentage of face value paid as interest), the **frequency** (how often the coupon is paid) and the **maturity** (the date the face value is repaid).",
          },
          {
            es: "En México, además de los bonos del gobierno, las empresas emiten deuda en bolsa, comúnmente como **certificados bursátiles**. Mini ejemplo: un bono con valor nominal de $100 y cupón de 8% anual paga $8 al año; si el pago es semestral, recibes $4 cada seis meses.",
            en: "In Mexico, besides government bonds, companies issue debt on the exchange, commonly as **certificados bursátiles** (exchange-traded debt certificates). Mini example: a bond with a $100 face value and an 8% annual coupon pays $8 a year; if paid semiannually, you get $4 every six months.",
          },
        ],
        formulas: [
          {
            name: { es: "Cupón anual y pagos de cupón", en: "Annual coupon and coupon payments" },
            expression: "Cupón anual = Valor nominal × Tasa cupón     Pago por periodo = Cupón anual ÷ Pagos al año     Total de cupones = Pago por periodo × Número de pagos",
            variables: [
              { symbol: "Valor nominal", meaning: { es: "Lo que te devuelven al final, en pesos (por ejemplo, $100 o $1,000).", en: "What you get back at the end, in pesos (for example, $100 or $1,000)." } },
              { symbol: "Tasa cupón", meaning: { es: "Porcentaje anual que paga el bono, en decimal (8% = 0.08).", en: "Annual percentage the bond pays, as a decimal (8% = 0.08)." } },
              { symbol: "Pagos al año", meaning: { es: "1 si es anual, 2 si es semestral, 4 si es trimestral.", en: "1 if annual, 2 if semiannual, 4 if quarterly." } },
              { symbol: "Número de pagos", meaning: { es: "Pagos al año × años hasta el vencimiento.", en: "Payments per year × years to maturity." } },
            ],
            steps: [
              { es: "Multiplica valor nominal × tasa cupón: cupón anual.", en: "Multiply face value × coupon rate: annual coupon." },
              { es: "Divide entre los pagos al año: lo que recibes cada vez.", en: "Divide by payments per year: what you receive each time." },
              { es: "Cuenta los pagos (pagos al año × años) y multiplica por el pago de cada periodo.", en: "Count the payments (payments per year × years) and multiply by each period's payment." },
            ],
            example: { es: "Bono de $1,000, cupón 8% semestral, a 4 años: cupón anual 1,000 × 0.08 = $80; cada semestre 80 ÷ 2 = $40; pagos 2 × 4 = 8; total 8 × 40 = **$320** (más los $1,000 al final).", en: "$1,000 bond, 8% coupon paid semiannually, 4 years: annual coupon 1,000 × 0.08 = $80; each half-year 80 ÷ 2 = $40; payments 2 × 4 = 8; total 8 × 40 = **$320** (plus the $1,000 at the end)." },
            mistake: { es: "Pagar la tasa anual completa cada semestre, lo que duplica los intereses.", en: "Paying the full annual rate every half-year, which doubles the interest." },
          },
        ],
      },
      {
        heading: { es: "Precio y tasas: el sube y baja", en: "Price and rates: the seesaw" },
        body: [
          {
            es: "El **valor presente** es cuánto vale hoy un pago que recibirás en el futuro: un peso de dentro de un año vale menos que uno de hoy, porque el de hoy lo podrías invertir. El precio de un bono es el valor presente de todo lo que te pagará: cada cupón y el valor nominal, \"traídos a hoy\" con la tasa que el mercado exige. Si el precio es igual al valor nominal se dice que cotiza **a la par**; si es menor, **bajo par**; si es mayor, **sobre par**.",
            en: "**Present value** is what a payment you will receive in the future is worth today: a peso a year from now is worth less than one today, because today's peso could be invested. A bond's price is the present value of everything it will pay you: each coupon and the face value, \"brought to today\" with the rate the market demands. If the price equals the face value it trades **at par**; if lower, **below par** (at a discount); if higher, **above par** (at a premium).",
          },
          {
            es: "Regla clave: **cuando las tasas del mercado suben, el precio de los bonos que ya existen baja**, y al revés. ¿Por qué? Si tu bono paga 8% y ahora salen bonos nuevos que pagan 10%, nadie te pagará $100 por el tuyo; tendrás que venderlo más barato para que al comprador le rinda lo mismo. Entre **más largo el plazo**, más fuerte es ese efecto.",
            en: "Key rule: **when market rates rise, the price of existing bonds falls**, and vice versa. Why? If your bond pays 8% and new bonds now pay 10%, nobody will pay you $100 for yours; you will have to sell it cheaper so the buyer earns the same. The **longer the maturity**, the stronger that effect.",
          },
          {
            es: "Dos medidas sencillas: el **rendimiento corriente** = cupón anual ÷ precio, y el **rendimiento al vencimiento**, la tasa que ganas si compras al precio actual y conservas el bono hasta el final cobrando todo. Mini ejemplo: un bono de cupón $8 que compras en $95 tiene un rendimiento corriente de 8 ÷ 95 = 8.42%.",
            en: "Two simple measures: **current yield** = annual coupon ÷ price, and **yield to maturity**, the rate you earn if you buy at today's price and hold the bond to the end, collecting everything. Mini example: a bond with an $8 coupon bought at $95 has a current yield of 8 ÷ 95 = 8.42%.",
          },
        ],
        formulas: [
          {
            name: { es: "Precio de un bono (valor presente)", en: "Bond price (present value)" },
            expression: "Precio = C ÷ (1 + y) + C ÷ (1 + y)² + … + (C + VN) ÷ (1 + y)ⁿ",
            variables: [
              { symbol: "C", meaning: { es: "Cupón de cada periodo, en pesos.", en: "Coupon each period, in pesos." } },
              { symbol: "VN", meaning: { es: "Valor nominal que te devuelven al final, en pesos.", en: "Face value returned at the end, in pesos." } },
              { symbol: "y", meaning: { es: "Tasa que exige hoy el mercado por periodo, en decimal (10% = 0.10).", en: "Rate the market demands today per period, as a decimal (10% = 0.10)." } },
              { symbol: "n", meaning: { es: "Número de periodos hasta el vencimiento.", en: "Number of periods until maturity." } },
              { symbol: "(1 + y)², (1 + y)ⁿ", meaning: { es: "(1 + y) multiplicado por sí mismo 2 o n veces: \"trae a hoy\" pagos más lejanos.", en: "(1 + y) multiplied by itself 2 or n times: it \"brings to today\" payments further away." } },
            ],
            steps: [
              { es: "Calcula el cupón: VN × tasa cupón.", en: "Compute the coupon: FV × coupon rate." },
              { es: "Divide cada cupón entre (1 + y) elevado al número de su periodo.", en: "Divide each coupon by (1 + y) raised to its period number." },
              { es: "En el último periodo suma cupón + valor nominal antes de dividir.", en: "In the last period add coupon + face value before dividing." },
              { es: "Suma todos los valores traídos a hoy: ese es el precio.", en: "Add all the values brought to today: that is the price." },
            ],
            example: { es: "VN $100, cupón 6% anual, 2 años, mercado exige 5% (tasa de ejemplo). Cupón = $6. Año 1: 6 ÷ 1.05 = $5.7143. Año 2: 106 ÷ 1.05² = 106 ÷ 1.1025 = $96.1451. Precio: 5.7143 + 96.1451 = **$101.86**.", en: "FV $100, 6% annual coupon, 2 years, market demands 5% (example rate). Coupon = $6. Year 1: 6 ÷ 1.05 = $5.7143. Year 2: 106 ÷ 1.05² = 106 ÷ 1.1025 = $96.1451. Price: 5.7143 + 96.1451 = **$101.86**." },
            interpret: { es: "Si el cupón es mayor que la tasa del mercado, cotiza sobre par (más de $100); si es menor, bajo par.", en: "If the coupon is above the market rate, it trades above par (over $100); if below, below par." },
            mistake: { es: "Olvidar sumar el valor nominal en el último periodo, o dividir todos los pagos entre (1 + y) sin elevar al periodo.", en: "Forgetting to add the face value in the last period, or dividing every payment by (1 + y) without raising it to the period." },
          },
          {
            name: { es: "Rendimiento corriente", en: "Current yield" },
            expression: "Rendimiento corriente = Cupón anual ÷ Precio",
            variables: [
              { symbol: "Cupón anual", meaning: { es: "Intereses que paga el bono en un año, en pesos.", en: "Interest the bond pays in a year, in pesos." } },
              { symbol: "Precio", meaning: { es: "Lo que pagas hoy por el bono, en pesos (no el valor nominal).", en: "What you pay today for the bond, in pesos (not the face value)." } },
            ],
            steps: [
              { es: "Calcula el cupón anual: valor nominal × tasa cupón.", en: "Compute the annual coupon: face value × coupon rate." },
              { es: "Divide entre el precio que pagas y multiplica por 100.", en: "Divide by the price you pay and multiply by 100." },
            ],
            example: { es: "Cupón anual de $5 y compras el bono en $104: 5 ÷ 104 = 0.0481 → **4.81%**.", en: "Annual coupon of $5 and you buy the bond at $104: 5 ÷ 104 = 0.0481 → **4.81%**." },
            interpret: { es: "Si compras bajo par, el rendimiento corriente supera al cupón; si compras sobre par, queda abajo.", en: "If you buy below par, current yield is above the coupon; if you buy above par, it is below." },
            mistake: { es: "Dividir entre el valor nominal en lugar del precio que pagas.", en: "Dividing by the face value instead of the price you pay." },
          },
        ],
      },
      {
        heading: { es: "Riesgos y calificaciones de la renta fija", en: "Fixed-income risks and ratings" },
        body: [
          {
            es: "La renta fija tiene riesgos. El **riesgo de crédito** es que el emisor no pague completo o a tiempo. El **riesgo de tasa** es que suban las tasas y baje el precio si necesitas vender antes del vencimiento. El **riesgo de inflación** es que los pagos fijos compren menos. El **riesgo de liquidez** es no encontrar comprador rápido a buen precio.",
            en: "Fixed income has risks. **Credit risk** is that the issuer does not pay in full or on time. **Interest-rate risk** is that rates rise and the price falls if you need to sell before maturity. **Inflation risk** is that fixed payments buy less. **Liquidity risk** is not finding a buyer quickly at a good price.",
          },
          {
            es: "Para medir el riesgo de crédito existen las **calificaciones crediticias**, que emiten **agencias calificadoras**. Usan letras: las más altas (como **AAA**) indican emisores muy capaces de pagar; mientras más baja la letra, mayor el riesgo. A mayor riesgo, el emisor tiene que **pagar una tasa más alta** para que alguien le preste.",
            en: "To measure credit risk there are **credit ratings**, issued by **rating agencies**. They use letters: the highest (such as **AAA**) indicate issuers very able to pay; the lower the letter, the higher the risk. The riskier the issuer, the **higher the rate** it must pay for someone to lend to it.",
          },
          {
            es: "Mini ejemplo: una empresa grande y sólida y una empresa pequeña con muchas deudas emiten bonos a 3 años. La segunda tendrá que ofrecer una tasa mayor. Ese extra no es un regalo: es el **pago por el riesgo** de que no cumpla.",
            en: "Mini example: a large, solid company and a small, heavily indebted company issue 3-year bonds. The second must offer a higher rate. That extra is not a gift: it is the **payment for the risk** that it will not pay.",
          },
        ],
        bullets: [
          { es: "Crédito: que el emisor no pague.", en: "Credit: the issuer does not pay." },
          { es: "Tasa: suben las tasas y baja el precio.", en: "Rate: rates rise and the price falls." },
          { es: "Inflación: los pagos fijos compran menos.", en: "Inflation: fixed payments buy less." },
          { es: "Liquidez: difícil vender rápido a buen precio.", en: "Liquidity: hard to sell quickly at a good price." },
        ],
      },
    ],
    examples: [
      {
        title: { es: "Precio de un bono a 2 años", en: "Price of a 2-year bond" },
        problem: {
          es: "Un bono tiene valor nominal de $100, cupón anual de 8% (paga una vez al año) y vence en 2 años. Si el mercado exige hoy un rendimiento hipotético de 10%, ¿cuánto vale?",
          en: "A bond has a $100 face value, an 8% annual coupon (paid once a year) and matures in 2 years. If the market now demands a hypothetical 10% yield, what is it worth?",
        },
        steps: [
          { es: "Cupón anual: $100 × 0.08 = $8.", en: "Annual coupon: $100 × 0.08 = $8." },
          { es: "Año 1 trae a hoy el cupón: 8 ÷ 1.10 = $7.2727.", en: "Year 1 coupon brought to today: 8 ÷ 1.10 = $7.2727." },
          { es: "Año 2 trae a hoy cupón + nominal: 108 ÷ 1.10² = 108 ÷ 1.21 = $89.2562.", en: "Year 2 coupon + face brought to today: 108 ÷ 1.10² = 108 ÷ 1.21 = $89.2562." },
          { es: "Precio: $7.2727 + $89.2562 = $96.5289.", en: "Price: $7.2727 + $89.2562 = $96.5289." },
        ],
        result: {
          es: "El bono vale alrededor de $96.53: cotiza bajo par porque su cupón (8%) es menor que la tasa que exige el mercado (10%).",
          en: "The bond is worth about $96.53: it trades below par because its coupon (8%) is lower than the rate the market demands (10%).",
        },
      },
      {
        title: { es: "Cupones y rendimiento corriente", en: "Coupons and current yield" },
        problem: {
          es: "Andrés compra un certificado bursátil con valor nominal de $100 y cupón de 9% anual pagadero cada seis meses. Lo compra en $102. ¿Cuánto recibe cada seis meses y cuál es su rendimiento corriente?",
          en: "Andrés buys a certificado bursátil with a $100 face value and a 9% annual coupon paid every six months. He buys it at $102. How much does he receive every six months and what is his current yield?",
        },
        steps: [
          { es: "Cupón anual: $100 × 0.09 = $9.", en: "Annual coupon: $100 × 0.09 = $9." },
          { es: "Pago semestral: $9 ÷ 2 = $4.50.", en: "Semiannual payment: $9 ÷ 2 = $4.50." },
          { es: "Rendimiento corriente: $9 ÷ $102 = 0.0882 ≈ 8.82%.", en: "Current yield: $9 ÷ $102 = 0.0882 ≈ 8.82%." },
        ],
        result: {
          es: "Recibe $4.50 cada seis meses y su rendimiento corriente es de 8.82%, menor que el cupón de 9% porque pagó sobre par ($102).",
          en: "He receives $4.50 every six months and his current yield is 8.82%, below the 9% coupon because he paid above par ($102).",
        },
      },
    ],
    keyPoints: [
      { es: "Un bono es un préstamo: recibes cupones y al final el valor nominal.", en: "A bond is a loan: you receive coupons and, at the end, the face value." },
      { es: "Renta fija significa pagos definidos, no ausencia de riesgo.", en: "Fixed income means defined payments, not absence of risk." },
      { es: "Si las tasas suben, el precio de los bonos existentes baja (y más si el plazo es largo).", en: "If rates rise, existing bond prices fall (more so for long maturities)." },
      { es: "Rendimiento corriente = cupón anual ÷ precio.", en: "Current yield = annual coupon ÷ price." },
      { es: "Riesgos: crédito, tasa, inflación y liquidez; las calificaciones miden el de crédito.", en: "Risks: credit, rate, inflation and liquidity; ratings measure credit risk." },
    ],
    normativeNote: NOTE_BONDS,
    exerciseIds: ['INV-06-E1', 'INV-06-E2', 'INV-06-E3', 'INV-06-E4', 'INV-06-E5', 'INV-06-E6'],
  },
]

export const exercises: Exercise[] = [
  // ═════════════════════════ INV-01 ═════════════════════════
  {
    id: 'INV-01-E1',
    level: 4,
    module: 'INV-01',
    kind: 'mcq',
    flavor: 'concept',
    prompt: {
      es: "¿Cuál es la principal diferencia entre ahorrar e invertir?",
      en: "What is the main difference between saving and investing?",
    },
    options: [
      { id: 'INV-01-E1-a', text: { es: "Ahorrar es apartar dinero; invertir es ponerlo en algo que pueda generar más dinero", en: "Saving is setting money aside; investing is putting it into something that can generate more money" } },
      { id: 'INV-01-E1-b', text: { es: "Ahorrar es solo para personas y invertir solo para empresas", en: "Saving is only for individuals and investing only for companies" } },
      { id: 'INV-01-E1-c', text: { es: "Invertir garantiza ganancias y ahorrar no", en: "Investing guarantees gains and saving does not" } },
      { id: 'INV-01-E1-d', text: { es: "No hay diferencia: son dos nombres para lo mismo", en: "There is no difference: they are two names for the same thing" } },
    ],
    correctOptionId: 'INV-01-E1-a',
    explanation: {
      es: "Ahorrar es no gastar una parte del ingreso; invertir es poner ese ahorro a generar rendimiento. Invertir no garantiza ganancias: siempre hay algún riesgo. Error común: creer que toda inversión es segura o que son sinónimos.",
      en: "Saving is not spending part of your income; investing is putting those savings to earn a return. Investing does not guarantee gains: there is always some risk. Common mistake: believing every investment is safe or that the two are synonyms.",
    },
    difficulty: 1,
    points: 10,
    competency: 'investing-basics',
  },
  {
    id: 'INV-01-E2',
    level: 4,
    module: 'INV-01',
    kind: 'truefalse',
    flavor: 'concept',
    prompt: {
      es: "Una oferta que promete rendimientos muy altos, rápidos y sin ningún riesgo es coherente con la relación normal entre rendimiento y riesgo.",
      en: "An offer promising very high, quick and completely risk-free returns is consistent with the normal relationship between return and risk.",
    },
    answer: false,
    explanation: {
      es: "Falso. A mayor rendimiento esperado, mayor riesgo. Una promesa de ganancias altas sin riesgo contradice esa regla y es una señal típica de fraude. Error común: dejarse convencer por testimonios o por la urgencia de \"entrar ya\".",
      en: "False. Higher expected return comes with higher risk. A promise of high gains with no risk contradicts that rule and is a typical sign of fraud. Common mistake: being persuaded by testimonials or by the urgency to \"get in now\".",
    },
    difficulty: 1,
    points: 10,
    competency: 'investing-basics',
  },
  {
    id: 'INV-01-E3',
    level: 4,
    module: 'INV-01',
    kind: 'classify',
    flavor: 'concept',
    prompt: {
      es: "Clasifica cada afirmación según la característica de la inversión que describe.",
      en: "Classify each statement by the investment feature it describes.",
    },
    categories: [
      { id: 'INV-01-E3-c1', label: { es: "Rendimiento", en: "Return" } },
      { id: 'INV-01-E3-c2', label: { es: "Riesgo", en: "Risk" } },
      { id: 'INV-01-E3-c3', label: { es: "Liquidez", en: "Liquidity" } },
      { id: 'INV-01-E3-c4', label: { es: "Plazo", en: "Time horizon" } },
    ],
    items: [
      { id: 'INV-01-E3-i1', label: { es: "La inversión pagó 7% en el año", en: "The investment paid 7% for the year" }, correctCategoryId: 'INV-01-E3-c1' },
      { id: 'INV-01-E3-i2', label: { es: "El valor puede bajar si a la empresa le va mal", en: "The value may fall if the company does poorly" }, correctCategoryId: 'INV-01-E3-c2' },
      { id: 'INV-01-E3-i3', label: { es: "Puedo retirar mi dinero el mismo día sin penalización", en: "I can withdraw my money the same day with no penalty" }, correctCategoryId: 'INV-01-E3-c3' },
      { id: 'INV-01-E3-i4', label: { es: "Planeo dejar el dinero invertido 10 años", en: "I plan to keep the money invested for 10 years" }, correctCategoryId: 'INV-01-E3-c4' },
      { id: 'INV-01-E3-i5', label: { es: "Vender un terreno puede tardar meses", en: "Selling a plot of land can take months" }, correctCategoryId: 'INV-01-E3-c3' },
      { id: 'INV-01-E3-i6', label: { es: "Existe la posibilidad de que el emisor no me pague", en: "There is a chance the issuer will not pay me" }, correctCategoryId: 'INV-01-E3-c2' },
    ],
    explanation: {
      es: "Rendimiento es cuánto ganas; riesgo, la posibilidad de un resultado distinto o de perder; liquidez, qué tan rápido lo vuelves efectivo (retirar el mismo día es alta liquidez; un terreno, baja); plazo, cuánto tiempo lo dejas. Error común: confundir liquidez con plazo: una inversión a 10 años puede ser líquida si puedes venderla fácil.",
      en: "Return is how much you earn; risk, the chance of a different outcome or a loss; liquidity, how fast you turn it into cash (same-day withdrawal is high liquidity; land, low); horizon, how long you keep it. Common mistake: confusing liquidity with horizon: a 10-year investment can be liquid if you can sell it easily.",
    },
    difficulty: 1,
    points: 15,
    competency: 'investing-basics',
  },
  {
    id: 'INV-01-E4',
    level: 4,
    module: 'INV-01',
    kind: 'numeric',
    flavor: 'case',
    context: {
      es: "Martín compró acciones por $5,000. Un año después valen $5,400 y en ese tiempo recibió $100 de dividendos.",
      en: "Martín bought shares for $5,000. A year later they are worth $5,400 and during that time he received $100 in dividends.",
    },
    prompt: {
      es: "¿Cuál fue el rendimiento total de Martín en el año, en porcentaje?",
      en: "What was Martín's total return for the year, as a percentage?",
    },
    answer: 10,
    unit: '%',
    decimals: 2,
    tolerance: { abs: 0.01 },
    explanation: {
      es: "Rendimiento = (5,400 − 5,000 + 100) ÷ 5,000 = 500 ÷ 5,000 = 0.10 = 10%. Error común: olvidar el dividendo y responder 8%; lo que te pagan en el camino también es parte del rendimiento.",
      en: "Return = (5,400 − 5,000 + 100) ÷ 5,000 = 500 ÷ 5,000 = 0.10 = 10%. Common mistake: forgetting the dividend and answering 8%; what you are paid along the way is also part of the return.",
    },
    difficulty: 1,
    points: 15,
    competency: 'investing-basics',
  },
  {
    id: 'INV-01-E5',
    level: 4,
    module: 'INV-01',
    kind: 'fields',
    flavor: 'case',
    context: {
      es: "Una inversión rindió 10% nominal en un año en el que la inflación fue de 5% (cifras hipotéticas).",
      en: "An investment returned 10% nominal in a year when inflation was 5% (hypothetical figures).",
    },
    prompt: {
      es: "Calcula el rendimiento real aproximado (resta) y el exacto (división), en porcentaje con dos decimales.",
      en: "Compute the approximate real return (subtraction) and the exact one (division), as a percentage with two decimals.",
    },
    fields: [
      { id: 'f1', label: { es: "Rendimiento real aproximado (%)", en: "Approximate real return (%)" }, answer: 5, unit: '%', tolerance: { abs: 0.01 } },
      { id: 'f2', label: { es: "Rendimiento real exacto (%)", en: "Exact real return (%)" }, answer: 4.76, unit: '%', tolerance: { abs: 0.01 } },
    ],
    explanation: {
      es: "Aproximado: 10% − 5% = 5%. Exacto: 1.10 ÷ 1.05 − 1 = 0.047619 ≈ 4.76%. La resta exagera un poco el resultado. Error común: pensar que el 10% nominal es lo que creció tu poder de compra.",
      en: "Approximate: 10% − 5% = 5%. Exact: 1.10 ÷ 1.05 − 1 = 0.047619 ≈ 4.76%. Subtraction slightly overstates the result. Common mistake: thinking the 10% nominal is how much your purchasing power grew.",
    },
    difficulty: 2,
    points: 15,
    competency: 'investing-basics',
  },
  {
    id: 'INV-01-E6',
    level: 4,
    module: 'INV-01',
    kind: 'mcq',
    flavor: 'case',
    context: {
      es: "Paola necesita $25,000 dentro de 5 meses para el enganche de una moto. Compara cuatro opciones.",
      en: "Paola needs $25,000 in 5 months for a motorcycle down payment. She compares four options.",
    },
    prompt: {
      es: "¿Qué opción encaja mejor con la meta de Paola?",
      en: "Which option best fits Paola's goal?",
    },
    options: [
      { id: 'INV-01-E6-a', text: { es: "Acciones de una empresa nueva que podrían duplicarse o caer a la mitad en meses", en: "Shares of a new company that could double or halve in months" } },
      { id: 'INV-01-E6-b', text: { es: "Un instrumento de deuda de bajo riesgo que vence antes de los 5 meses", en: "A low-risk debt instrument maturing before the 5 months" } },
      { id: 'INV-01-E6-c', text: { es: "Un terreno que tardaría tiempo en venderse", en: "A plot of land that would take time to sell" } },
      { id: 'INV-01-E6-d', text: { es: "Un esquema que promete 15% mensual garantizado", en: "A scheme promising a guaranteed 15% per month" } },
    ],
    correctOptionId: 'INV-01-E6-b',
    explanation: {
      es: "Con un plazo corto y una fecha fija, Paola necesita bajo riesgo y liquidez: un instrumento de deuda que venza antes de la fecha. Las acciones pueden caer justo cuando las necesita, el terreno es poco líquido y el 15% mensual garantizado es señal de fraude. Error común: elegir por el rendimiento más alto sin mirar el plazo.",
      en: "With a short horizon and a fixed date, Paola needs low risk and liquidity: a debt instrument maturing before the date. Stocks may fall just when she needs the money, land is illiquid and a guaranteed 15% per month is a fraud signal. Common mistake: choosing the highest return without looking at the horizon.",
    },
    difficulty: 1,
    points: 10,
    competency: 'investing-basics',
  },

  // ═════════════════════════ INV-02 ═════════════════════════
  {
    id: 'INV-02-E1',
    level: 4,
    module: 'INV-02',
    kind: 'mcq',
    flavor: 'concept',
    prompt: {
      es: "¿Cuál es la función principal del sistema financiero?",
      en: "What is the main function of the financial system?",
    },
    options: [
      { id: 'INV-02-E1-a', text: { es: "Imprimir billetes para que haya más dinero", en: "Print banknotes so there is more money" } },
      { id: 'INV-02-E1-b', text: { es: "Cobrar los impuestos de las personas", en: "Collect people's taxes" } },
      { id: 'INV-02-E1-c', text: { es: "Canalizar el dinero de quienes ahorran hacia quienes lo necesitan para invertir o consumir", en: "Channel money from those who save to those who need it to invest or spend" } },
      { id: 'INV-02-E1-d', text: { es: "Fijar los precios de los productos en las tiendas", en: "Set product prices in stores" } },
    ],
    correctOptionId: 'INV-02-E1-c',
    explanation: {
      es: "El sistema financiero conecta a ahorradores con quienes necesitan financiamiento, mediante intermediarios y mercados. Cobrar impuestos es tarea del SAT y los precios de las tiendas los fija el mercado de bienes. Error común: reducir el sistema financiero a \"los bancos\" o al Banco de México.",
      en: "The financial system connects savers with those who need funding, through intermediaries and markets. Collecting taxes is the SAT's job and store prices are set by the goods market. Common mistake: reducing the financial system to \"the banks\" or to Banco de México.",
    },
    difficulty: 1,
    points: 10,
    competency: 'mx-financial-system',
  },
  {
    id: 'INV-02-E2',
    level: 4,
    module: 'INV-02',
    kind: 'classify',
    flavor: 'concept',
    prompt: {
      es: "Relaciona cada situación con la autoridad financiera mexicana que corresponde.",
      en: "Match each situation with the corresponding Mexican financial authority.",
    },
    categories: [
      { id: 'INV-02-E2-c1', label: { es: "CNBV", en: "CNBV" } },
      { id: 'INV-02-E2-c2', label: { es: "CNSF", en: "CNSF" } },
      { id: 'INV-02-E2-c3', label: { es: "CONSAR", en: "CONSAR" } },
      { id: 'INV-02-E2-c4', label: { es: "CONDUSEF", en: "CONDUSEF" } },
    ],
    items: [
      { id: 'INV-02-E2-i1', label: { es: "Supervisar a un banco y a una casa de bolsa", en: "Supervise a bank and a brokerage firm" }, correctCategoryId: 'INV-02-E2-c1' },
      { id: 'INV-02-E2-i2', label: { es: "Vigilar a una aseguradora de autos", en: "Oversee a car insurer" }, correctCategoryId: 'INV-02-E2-c2' },
      { id: 'INV-02-E2-i3', label: { es: "Regular cómo invierten las afores el ahorro para el retiro", en: "Regulate how afores invest retirement savings" }, correctCategoryId: 'INV-02-E2-c3' },
      { id: 'INV-02-E2-i4', label: { es: "Recibir la queja de un usuario por un cargo no reconocido", en: "Receive a user's complaint about an unrecognized charge" }, correctCategoryId: 'INV-02-E2-c4' },
      { id: 'INV-02-E2-i5', label: { es: "Supervisar a una operadora de fondos de inversión", en: "Supervise an investment fund manager" }, correctCategoryId: 'INV-02-E2-c1' },
      { id: 'INV-02-E2-i6', label: { es: "Publicar información para comparar comisiones de tarjetas", en: "Publish information to compare card fees" }, correctCategoryId: 'INV-02-E2-c4' },
    ],
    explanation: {
      es: "CNBV: bancos, casas de bolsa y fondos de inversión. CNSF: seguros y fianzas. CONSAR: afores. CONDUSEF: defensa y orientación del usuario. Error común: llevar una queja a la CNBV; la vía para el usuario es la CONDUSEF (después de reclamar a la institución).",
      en: "CNBV: banks, brokerage firms and investment funds. CNSF: insurance and surety. CONSAR: afores. CONDUSEF: user defense and guidance. Common mistake: taking a complaint to CNBV; the user's channel is CONDUSEF (after complaining to the institution).",
    },
    difficulty: 1,
    points: 15,
    competency: 'mx-financial-system',
  },
  {
    id: 'INV-02-E3',
    level: 4,
    module: 'INV-02',
    kind: 'truefalse',
    flavor: 'concept',
    prompt: {
      es: "El objetivo prioritario del Banco de México es mantener el poder adquisitivo de la moneda nacional, es decir, procurar una inflación baja y estable.",
      en: "Banco de México's priority objective is to preserve the purchasing power of the national currency, that is, to seek low and stable inflation.",
    },
    answer: true,
    explanation: {
      es: "Verdadero. Banxico es autónomo y su mandato prioritario es la estabilidad del poder adquisitivo; su herramienta principal es la tasa de interés objetivo. Error común: pensar que Banxico supervisa a cada banco o atiende quejas; eso corresponde a la CNBV y a la CONDUSEF.",
      en: "True. Banxico is autonomous and its priority mandate is the stability of purchasing power; its main tool is the target interest rate. Common mistake: thinking Banxico supervises each bank or handles complaints; that falls to CNBV and CONDUSEF.",
    },
    difficulty: 1,
    points: 10,
    competency: 'mx-financial-system',
  },
  {
    id: 'INV-02-E4',
    level: 4,
    module: 'INV-02',
    kind: 'multi',
    flavor: 'concept',
    prompt: {
      es: "¿Cuáles de estas instituciones son intermediarios financieros? Selecciona todas las que apliquen.",
      en: "Which of these institutions are financial intermediaries? Select all that apply.",
    },
    options: [
      { id: 'INV-02-E4-a', text: { es: "Un banco comercial", en: "A commercial bank" } },
      { id: 'INV-02-E4-b', text: { es: "Una casa de bolsa", en: "A brokerage firm" } },
      { id: 'INV-02-E4-c', text: { es: "La CONDUSEF", en: "CONDUSEF" } },
      { id: 'INV-02-E4-d', text: { es: "Una afore", en: "An afore" } },
      { id: 'INV-02-E4-e', text: { es: "La CNBV", en: "CNBV" } },
    ],
    correctOptionIds: ['INV-02-E4-a', 'INV-02-E4-b', 'INV-02-E4-d'],
    explanation: {
      es: "Bancos, casas de bolsa y afores reciben o administran dinero del público y lo canalizan: son intermediarios. La CONDUSEF y la CNBV son autoridades: protegen y supervisan, no captan ni invierten tu dinero. Error común: confundir a quien vigila con quien opera.",
      en: "Banks, brokerage firms and afores receive or manage the public's money and channel it: they are intermediaries. CONDUSEF and CNBV are authorities: they protect and supervise, they do not take or invest your money. Common mistake: confusing the supervisor with the operator.",
    },
    difficulty: 1,
    points: 10,
    competency: 'mx-financial-system',
  },
  {
    id: 'INV-02-E5',
    level: 4,
    module: 'INV-02',
    kind: 'fields',
    flavor: 'case',
    context: {
      es: "Laura tiene depósitos equivalentes a 600,000 UDIS en el Banco A y 250,000 UDIS en el Banco B. Considera un límite de protección del IPAB de 400,000 UDIS por persona y por banco.",
      en: "Laura has deposits worth 600,000 UDIS at Bank A and 250,000 UDIS at Bank B. Consider an IPAB protection limit of 400,000 UDIS per person per bank.",
    },
    prompt: {
      es: "Si ambos bancos quebraran, ¿cuántas UDIS estarían protegidas en total y cuántas quedarían sin cobertura?",
      en: "If both banks failed, how many UDIS would be protected in total and how many would be uncovered?",
    },
    fields: [
      { id: 'f1', label: { es: "UDIS protegidas en total", en: "Total protected UDIS" }, answer: 650000, unit: 'units', tolerance: { abs: 0.5 } },
      { id: 'f2', label: { es: "UDIS sin cobertura", en: "Uncovered UDIS" }, answer: 200000, unit: 'units', tolerance: { abs: 0.5 } },
    ],
    explanation: {
      es: "El límite aplica por banco. Banco A: 400,000 protegidas y 200,000 sin cobertura. Banco B: 250,000 protegidas (está bajo el límite). Total protegido: 400,000 + 250,000 = 650,000; sin cobertura: 200,000. Error común: aplicar un solo límite de 400,000 a la suma de ambos bancos.",
      en: "The limit applies per bank. Bank A: 400,000 protected and 200,000 uncovered. Bank B: 250,000 protected (under the limit). Total protected: 400,000 + 250,000 = 650,000; uncovered: 200,000. Common mistake: applying a single 400,000 limit to the sum of both banks.",
    },
    difficulty: 2,
    points: 15,
    competency: 'mx-financial-system',
  },
  {
    id: 'INV-02-E6',
    level: 4,
    module: 'INV-02',
    kind: 'mcq',
    flavor: 'case',
    context: {
      es: "Por mensaje, a Diego le ofrecen entrar a un \"club de inversión\" que promete 8% mensual. No le dan nombre de ninguna institución autorizada.",
      en: "By text message, Diego is offered to join an \"investment club\" that promises 8% per month. He is not given the name of any authorized institution.",
    },
    prompt: {
      es: "¿Qué debería hacer Diego antes de entregar cualquier dinero?",
      en: "What should Diego do before handing over any money?",
    },
    options: [
      { id: 'INV-02-E6-a', text: { es: "Invertir poco para probar si pagan", en: "Invest a little to test whether they pay" } },
      { id: 'INV-02-E6-b', text: { es: "Confiar si un amigo ya recibió pagos", en: "Trust it if a friend has already received payments" } },
      { id: 'INV-02-E6-c', text: { es: "Pedir que le firmen un contrato privado", en: "Ask them to sign a private contract" } },
      { id: 'INV-02-E6-d', text: { es: "Verificar en los registros de las autoridades que la entidad esté autorizada y supervisada", en: "Check the authorities' registries to confirm the entity is authorized and supervised" } },
    ],
    correctOptionId: 'INV-02-E6-d',
    explanation: {
      es: "El primer filtro es confirmar que la entidad esté autorizada y supervisada. Que un amigo haya cobrado no prueba nada: los esquemas fraudulentos pagan a los primeros con dinero de los nuevos. Un contrato privado no sustituye la autorización. Error común: \"probar con poquito\".",
      en: "The first filter is confirming the entity is authorized and supervised. A friend getting paid proves nothing: fraudulent schemes pay early members with newcomers' money. A private contract does not replace authorization. Common mistake: \"testing with a little\".",
    },
    difficulty: 1,
    points: 10,
    competency: 'mx-financial-system',
  },

  // ═════════════════════════ INV-03 ═════════════════════════
  {
    id: 'INV-03-E1',
    level: 4,
    module: 'INV-03',
    kind: 'multi',
    flavor: 'concept',
    prompt: {
      es: "¿Qué funciones cumplen los mercados financieros? Selecciona todas las que apliquen.",
      en: "What functions do financial markets serve? Select all that apply.",
    },
    options: [
      { id: 'INV-03-E1-a', text: { es: "Permitir que empresas y gobiernos obtengan financiamiento", en: "Let companies and governments obtain funding" } },
      { id: 'INV-03-E1-b', text: { es: "Dar liquidez a quien quiere vender sus títulos", en: "Give liquidity to those who want to sell their securities" } },
      { id: 'INV-03-E1-c', text: { es: "Garantizar que todas las inversiones ganen", en: "Guarantee that every investment makes money" } },
      { id: 'INV-03-E1-d', text: { es: "Formar precios a partir de la oferta y la demanda", en: "Form prices from supply and demand" } },
    ],
    correctOptionIds: ['INV-03-E1-a', 'INV-03-E1-b', 'INV-03-E1-d'],
    explanation: {
      es: "Los mercados financian, dan liquidez y descubren precios. Ningún mercado garantiza ganancias: los precios suben y bajan. Error común: creer que estar en una bolsa regulada elimina el riesgo de pérdida.",
      en: "Markets fund, provide liquidity and discover prices. No market guarantees gains: prices rise and fall. Common mistake: believing that trading on a regulated exchange removes the risk of loss.",
    },
    difficulty: 1,
    points: 10,
    competency: 'financial-markets',
  },
  {
    id: 'INV-03-E2',
    level: 4,
    module: 'INV-03',
    kind: 'classify',
    flavor: 'concept',
    prompt: {
      es: "Clasifica cada operación según ocurra en el mercado primario o en el secundario.",
      en: "Classify each transaction as primary-market or secondary-market.",
    },
    categories: [
      { id: 'INV-03-E2-c1', label: { es: "Mercado primario", en: "Primary market" } },
      { id: 'INV-03-E2-c2', label: { es: "Mercado secundario", en: "Secondary market" } },
    ],
    items: [
      { id: 'INV-03-E2-i1', label: { es: "Una empresa hace su oferta pública inicial de acciones", en: "A company makes its initial public offering of shares" }, correctCategoryId: 'INV-03-E2-c1' },
      { id: 'INV-03-E2-i2', label: { es: "Ana vende en bolsa acciones que compró hace dos años", en: "Ana sells on the exchange shares she bought two years ago" }, correctCategoryId: 'INV-03-E2-c2' },
      { id: 'INV-03-E2-i3', label: { es: "El gobierno coloca CETES nuevos en su subasta", en: "The government places new CETES at its auction" }, correctCategoryId: 'INV-03-E2-c1' },
      { id: 'INV-03-E2-i4', label: { es: "Un fondo compra a otro inversionista bonos ya emitidos", en: "A fund buys already-issued bonds from another investor" }, correctCategoryId: 'INV-03-E2-c2' },
      { id: 'INV-03-E2-i5', label: { es: "Una empresa emite por primera vez certificados bursátiles para financiar una planta", en: "A company issues debt certificates for the first time to fund a plant" }, correctCategoryId: 'INV-03-E2-c1' },
    ],
    explanation: {
      es: "Primario: el emisor vende títulos nuevos y recibe el dinero (oferta inicial, subasta de CETES, emisión de deuda). Secundario: los inversionistas se revenden títulos ya existentes y el emisor no recibe nada. Error común: pensar que toda compra en bolsa financia a la empresa.",
      en: "Primary: the issuer sells new securities and receives the money (IPO, CETES auction, debt issue). Secondary: investors resell existing securities and the issuer receives nothing. Common mistake: thinking every exchange purchase funds the company.",
    },
    difficulty: 1,
    points: 15,
    competency: 'financial-markets',
  },
  {
    id: 'INV-03-E3',
    level: 4,
    module: 'INV-03',
    kind: 'truefalse',
    flavor: 'concept',
    prompt: {
      es: "En México, una persona puede comprar acciones directamente a la bolsa de valores sin usar ningún intermediario.",
      en: "In Mexico, an individual can buy shares directly from the stock exchange without using any intermediary.",
    },
    answer: false,
    explanation: {
      es: "Falso. Las personas operan en bolsa a través de intermediarios autorizados, como una casa de bolsa, y los valores quedan en custodia en el Indeval. Error común: pensar que la bolsa es una tienda donde se compra en ventanilla.",
      en: "False. Individuals trade on the exchange through authorized intermediaries, such as a brokerage firm, and the securities are held in custody at Indeval. Common mistake: thinking the exchange is a store where you buy at a counter.",
    },
    difficulty: 1,
    points: 10,
    competency: 'financial-markets',
  },
  {
    id: 'INV-03-E4',
    level: 4,
    module: 'INV-03',
    kind: 'fields',
    flavor: 'case',
    context: {
      es: "Una acción hipotética muestra: mejor postura de compra $84.10 y mejor postura de venta $84.30. Iván envía una orden de mercado para comprar 150 acciones.",
      en: "A hypothetical stock shows: best bid $84.10 and best ask $84.30. Iván sends a market order to buy 150 shares.",
    },
    prompt: {
      es: "Calcula el spread por acción y el monto que paga Iván antes de comisiones, en pesos.",
      en: "Compute the spread per share and the amount Iván pays before fees, in pesos.",
    },
    fields: [
      { id: 'f1', label: { es: "Spread por acción", en: "Spread per share" }, answer: 0.2, unit: 'MXN', tolerance: { abs: 0.005 } },
      { id: 'f2', label: { es: "Monto de la compra", en: "Purchase amount" }, answer: 12645, unit: 'MXN', tolerance: { abs: 0.5 } },
    ],
    explanation: {
      es: "Spread = 84.30 − 84.10 = $0.20. Una orden de mercado de compra se ejecuta al mejor precio de venta: 150 × 84.30 = $12,645. Error común: usar el precio de compra ($84.10) y obtener $12,615; como comprador, tomas lo que piden los vendedores.",
      en: "Spread = 84.30 − 84.10 = $0.20. A market buy order executes at the best ask: 150 × 84.30 = $12,645. Common mistake: using the bid ($84.10) and getting $12,615; as a buyer you take what sellers are asking.",
    },
    difficulty: 2,
    points: 15,
    competency: 'financial-markets',
  },
  {
    id: 'INV-03-E5',
    level: 4,
    module: 'INV-03',
    kind: 'mcq',
    flavor: 'case',
    context: {
      es: "Fernanda quiere vender sus acciones, pero solo si obtiene al menos $120 por cada una. Hoy la mejor postura de compra es $118.",
      en: "Fernanda wants to sell her shares, but only if she gets at least $120 each. Today the best bid is $118.",
    },
    prompt: {
      es: "¿Qué tipo de orden le conviene a Fernanda?",
      en: "Which type of order suits Fernanda?",
    },
    options: [
      { id: 'INV-03-E5-a', text: { es: "Una orden de mercado, para vender de inmediato", en: "A market order, to sell immediately" } },
      { id: 'INV-03-E5-b', text: { es: "Una orden de compra a $120", en: "A buy order at $120" } },
      { id: 'INV-03-E5-c', text: { es: "Una orden limitada de venta a $120", en: "A limit sell order at $120" } },
      { id: 'INV-03-E5-d', text: { es: "No puede hacer nada hasta que el precio llegue a $120", en: "She can do nothing until the price reaches $120" } },
    ],
    correctOptionId: 'INV-03-E5-c',
    explanation: {
      es: "La orden limitada de venta le permite fijar un precio mínimo de $120; solo se ejecuta si alguien paga eso o más. Una orden de mercado vendería hoy a $118. Error común: pensar que hay que esperar frente a la pantalla; la orden limitada queda registrada y puede ejecutarse después.",
      en: "A limit sell order lets her set a minimum price of $120; it only executes if someone pays that or more. A market order would sell today at $118. Common mistake: thinking you must wait in front of the screen; the limit order stays on the book and may execute later.",
    },
    difficulty: 1,
    points: 10,
    competency: 'financial-markets',
  },
  {
    id: 'INV-03-E6',
    level: 4,
    module: 'INV-03',
    kind: 'mcq',
    flavor: 'interpret',
    prompt: {
      es: "La acción X tiene un spread de $0.02 y la acción Y uno de $1.50, con precios parecidos. ¿Qué indica esto normalmente?",
      en: "Stock X has a $0.02 spread and stock Y a $1.50 spread, at similar prices. What does this usually indicate?",
    },
    options: [
      { id: 'INV-03-E6-a', text: { es: "La acción X es más líquida: hay muchos compradores y vendedores", en: "Stock X is more liquid: there are many buyers and sellers" } },
      { id: 'INV-03-E6-b', text: { es: "La acción Y es más segura", en: "Stock Y is safer" } },
      { id: 'INV-03-E6-c', text: { es: "La acción X va a subir de precio", en: "Stock X's price is going to rise" } },
      { id: 'INV-03-E6-d', text: { es: "La acción Y paga más dividendos", en: "Stock Y pays more dividends" } },
    ],
    correctOptionId: 'INV-03-E6-a',
    explanation: {
      es: "Un spread pequeño suele reflejar mucha actividad y, por lo tanto, más liquidez: entrar y salir cuesta menos. El spread no predice si el precio subirá ni dice nada de los dividendos. Error común: confundir spread grande con \"más ganancia\"; en realidad es un costo mayor.",
      en: "A narrow spread usually reflects heavy activity and therefore more liquidity: getting in and out costs less. The spread does not predict price moves or say anything about dividends. Common mistake: confusing a wide spread with \"more profit\"; it is actually a higher cost.",
    },
    difficulty: 2,
    points: 15,
    competency: 'financial-markets',
  },

  // ═════════════════════════ INV-04 ═════════════════════════
  {
    id: 'INV-04-E1',
    level: 4,
    module: 'INV-04',
    kind: 'classify',
    flavor: 'concept',
    prompt: {
      es: "Clasifica cada instrumento según el mercado al que pertenece normalmente.",
      en: "Classify each instrument by the market it normally belongs to.",
    },
    categories: [
      { id: 'INV-04-E1-c1', label: { es: "Mercado de dinero", en: "Money market" } },
      { id: 'INV-04-E1-c2', label: { es: "Mercado de capitales", en: "Capital market" } },
    ],
    items: [
      { id: 'INV-04-E1-i1', label: { es: "CETES a 28 días", en: "28-day CETES" }, correctCategoryId: 'INV-04-E1-c1' },
      { id: 'INV-04-E1-i2', label: { es: "Acciones de una empresa que cotiza en bolsa", en: "Shares of a listed company" }, correctCategoryId: 'INV-04-E1-c2' },
      { id: 'INV-04-E1-i3', label: { es: "Pagaré bancario a 91 días", en: "91-day bank promissory note" }, correctCategoryId: 'INV-04-E1-c1' },
      { id: 'INV-04-E1-i4', label: { es: "Bono corporativo a 10 años", en: "10-year corporate bond" }, correctCategoryId: 'INV-04-E1-c2' },
      { id: 'INV-04-E1-i5', label: { es: "Papel comercial de una empresa a 60 días", en: "60-day corporate commercial paper" }, correctCategoryId: 'INV-04-E1-c1' },
      { id: 'INV-04-E1-i6', label: { es: "Bono del gobierno a 20 años", en: "20-year government bond" }, correctCategoryId: 'INV-04-E1-c2' },
    ],
    explanation: {
      es: "El criterio es el plazo: deuda a un año o menos (CETES, pagarés, papel comercial) va al mercado de dinero; acciones y deuda a más de un año, al de capitales. Error común: poner un bono del gobierno siempre en el mercado de dinero por ser de bajo riesgo; a 20 años es financiamiento de largo plazo.",
      en: "The criterion is term: debt of one year or less (CETES, notes, commercial paper) belongs to the money market; stocks and debt over one year, to the capital market. Common mistake: always placing a government bond in the money market because it is low risk; at 20 years it is long-term funding.",
    },
    difficulty: 1,
    points: 15,
    competency: 'money-capital-markets',
  },
  {
    id: 'INV-04-E2',
    level: 4,
    module: 'INV-04',
    kind: 'mcq',
    flavor: 'concept',
    prompt: {
      es: "¿Qué característica describe mejor al mercado de dinero?",
      en: "Which feature best describes the money market?",
    },
    options: [
      { id: 'INV-04-E2-a', text: { es: "Instrumentos de largo plazo con alto potencial de crecimiento", en: "Long-term instruments with high growth potential" } },
      { id: 'INV-04-E2-b', text: { es: "Deuda de corto plazo, alta liquidez y bajo riesgo", en: "Short-term debt, high liquidity and low risk" } },
      { id: 'INV-04-E2-c', text: { es: "Solo se negocian acciones de empresas grandes", en: "Only shares of large companies trade there" } },
      { id: 'INV-04-E2-d', text: { es: "Es donde se cambian monedas extranjeras en efectivo", en: "It is where foreign cash currencies are exchanged" } },
    ],
    correctOptionId: 'INV-04-E2-b',
    explanation: {
      es: "El mercado de dinero negocia deuda a un año o menos, fácil de convertir en efectivo y de bajo riesgo. Las acciones y el largo plazo son del mercado de capitales, y el cambio de divisas es otro mercado. Error común: pensar que \"mercado de dinero\" significa cambiar billetes.",
      en: "The money market trades debt of one year or less, easy to turn into cash and low risk. Stocks and long term belong to the capital market, and currency exchange is a different market. Common mistake: thinking \"money market\" means exchanging banknotes.",
    },
    difficulty: 1,
    points: 10,
    competency: 'money-capital-markets',
  },
  {
    id: 'INV-04-E3',
    level: 4,
    module: 'INV-04',
    kind: 'numeric',
    flavor: 'case',
    context: {
      es: "Carlos invierte $80,000 en un pagaré bancario a 91 días con una tasa anual hipotética de 9%. El interés se calcula como interés simple con año de 360 días.",
      en: "Carlos invests $80,000 in a 91-day bank promissory note at a hypothetical 9% annual rate. Interest is simple, on a 360-day year.",
    },
    prompt: {
      es: "¿Cuántos pesos de interés gana Carlos al vencimiento (antes de impuestos)?",
      en: "How many pesos of interest does Carlos earn at maturity (before taxes)?",
    },
    answer: 1820,
    unit: 'MXN',
    decimals: 2,
    tolerance: { abs: 0.5 },
    explanation: {
      es: "Interés = 80,000 × 0.09 × 91 ÷ 360 = 80,000 × 0.02275 = $1,820. Error común: aplicar el 9% completo ($7,200) como si el plazo fuera un año.",
      en: "Interest = 80,000 × 0.09 × 91 ÷ 360 = 80,000 × 0.02275 = $1,820. Common mistake: applying the full 9% ($7,200) as if the term were one year.",
    },
    difficulty: 1,
    points: 15,
    competency: 'money-capital-markets',
  },
  {
    id: 'INV-04-E4',
    level: 4,
    module: 'INV-04',
    kind: 'formula',
    flavor: 'concept',
    prompt: {
      es: "Completa la fórmula del interés de un instrumento del mercado de dinero.",
      en: "Complete the interest formula for a money-market instrument.",
    },
    template: 'Interés = {{b1}} × Tasa anual × {{b2}} ÷ {{b3}}',
    blanks: [
      {
        id: 'b1',
        options: [
          { id: 'INV-04-E4-b1-a', text: { es: "Capital invertido", en: "Principal invested" } },
          { id: 'INV-04-E4-b1-b', text: { es: "Inflación", en: "Inflation" } },
          { id: 'INV-04-E4-b1-c', text: { es: "Valor de mercado de la acción", en: "Stock market value" } },
        ],
        correctOptionId: 'INV-04-E4-b1-a',
      },
      {
        id: 'b2',
        options: [
          { id: 'INV-04-E4-b2-a', text: { es: "Años", en: "Years" } },
          { id: 'INV-04-E4-b2-b', text: { es: "Días del plazo", en: "Days in the term" } },
          { id: 'INV-04-E4-b2-c', text: { es: "Número de cupones", en: "Number of coupons" } },
        ],
        correctOptionId: 'INV-04-E4-b2-b',
      },
      {
        id: 'b3',
        options: [
          { id: 'INV-04-E4-b3-a', text: { es: "12", en: "12" } },
          { id: 'INV-04-E4-b3-b', text: { es: "100", en: "100" } },
          { id: 'INV-04-E4-b3-c', text: { es: "360", en: "360" } },
        ],
        correctOptionId: 'INV-04-E4-b3-c',
      },
    ],
    explanation: {
      es: "Interés = Capital × Tasa anual × Días ÷ 360. Como la tasa es anual, se toma la fracción del año que dura la inversión; en el mercado de dinero se usa la convención de 360 días. Error común: dividir entre 12 meses cuando el plazo está en días.",
      en: "Interest = Principal × Annual rate × Days ÷ 360. Since the rate is annual, you take the fraction of the year the investment lasts; the money market uses the 360-day convention. Common mistake: dividing by 12 months when the term is in days.",
    },
    difficulty: 1,
    points: 10,
    competency: 'money-capital-markets',
  },
  {
    id: 'INV-04-E5',
    level: 4,
    module: 'INV-04',
    kind: 'truefalse',
    flavor: 'concept',
    prompt: {
      es: "En un reporto, el inversionista compra títulos de deuda con el acuerdo de que se los recomprarán en una fecha cercana a un precio mayor.",
      en: "In a repo, the investor buys debt securities under an agreement that they will be bought back on a near date at a higher price.",
    },
    answer: true,
    explanation: {
      es: "Verdadero. El reporto es una compra con pacto de recompra: la diferencia entre el precio de recompra y el de compra es la ganancia del inversionista. Se usa mucho para plazos muy cortos. Error común: confundirlo con comprar acciones.",
      en: "True. A repo is a purchase with a repurchase agreement: the difference between the buyback price and the purchase price is the investor's gain. It is widely used for very short terms. Common mistake: confusing it with buying stocks.",
    },
    difficulty: 1,
    points: 10,
    competency: 'money-capital-markets',
  },
  {
    id: 'INV-04-E6',
    level: 4,
    module: 'INV-04',
    kind: 'mcq',
    flavor: 'case',
    context: {
      es: "Gabriela tiene 28 años y quiere apartar dinero que no piensa tocar hasta su retiro, dentro de más de 30 años. Acepta que su inversión suba y baje en el camino.",
      en: "Gabriela is 28 and wants to set aside money she will not touch until retirement, more than 30 years away. She accepts that her investment will rise and fall along the way.",
    },
    prompt: {
      es: "¿Qué mercado tiene más sentido para la mayor parte de ese dinero?",
      en: "Which market makes the most sense for most of that money?",
    },
    options: [
      { id: 'INV-04-E6-a', text: { es: "Solo mercado de dinero, renovando CETES a 28 días por 30 años", en: "Money market only, rolling 28-day CETES for 30 years" } },
      { id: 'INV-04-E6-b', text: { es: "Efectivo guardado en casa", en: "Cash kept at home" } },
      { id: 'INV-04-E6-c', text: { es: "El mercado de capitales, por su mayor potencial de crecer por encima de la inflación a largo plazo", en: "The capital market, for its greater potential to outgrow inflation over the long run" } },
      { id: 'INV-04-E6-d', text: { es: "Papel comercial a 60 días de una sola empresa", en: "60-day commercial paper from a single company" } },
    ],
    correctOptionId: 'INV-04-E6-c',
    explanation: {
      es: "Con un plazo muy largo y tolerancia a los altibajos, el mercado de capitales ofrece más potencial de crecimiento real. El mercado de dinero es estable pero de rendimiento modesto, y el efectivo pierde contra la inflación. Error común: usar para el retiro solo instrumentos pensados para el corto plazo.",
      en: "With a very long horizon and tolerance for ups and downs, the capital market offers more real-growth potential. The money market is stable but modest in return, and cash loses to inflation. Common mistake: using only short-term instruments for retirement.",
    },
    difficulty: 1,
    points: 10,
    competency: 'money-capital-markets',
  },

  // ═════════════════════════ INV-05 ═════════════════════════
  {
    id: 'INV-05-E1',
    level: 4,
    module: 'INV-05',
    kind: 'mcq',
    flavor: 'concept',
    prompt: {
      es: "¿Cuál es el valor nominal de un CETE, es decir, lo que recibes por cada título al vencimiento?",
      en: "What is a CETE's face value, that is, what you receive per security at maturity?",
    },
    options: [
      { id: 'INV-05-E1-a', text: { es: "$1", en: "$1" } },
      { id: 'INV-05-E1-b', text: { es: "$10", en: "$10" } },
      { id: 'INV-05-E1-c', text: { es: "$100", en: "$100" } },
      { id: 'INV-05-E1-d', text: { es: "Depende de la tasa de la subasta", en: "It depends on the auction rate" } },
    ],
    correctOptionId: 'INV-05-E1-b',
    explanation: {
      es: "Cada CETE vale $10 al vencimiento. La tasa de la subasta cambia el precio que pagas hoy (menos de $10), no el valor nominal. Error común: confundirlo con el valor nominal de $100 que usan otros bonos, como los Bonos M.",
      en: "Each CETE is worth $10 at maturity. The auction rate changes the price you pay today (less than $10), not the face value. Common mistake: confusing it with the $100 face value used by other bonds, such as Bonos M.",
    },
    difficulty: 1,
    points: 10,
    competency: 'cetes-government-debt',
  },
  {
    id: 'INV-05-E2',
    level: 4,
    module: 'INV-05',
    kind: 'numeric',
    flavor: 'case',
    context: {
      es: "Un CETE a 91 días se coloca con una tasa de rendimiento anual hipotética de 10%.",
      en: "A 91-day CETE is placed at a hypothetical 10% annual yield.",
    },
    prompt: {
      es: "¿Cuál es el precio de un CETE, en pesos, con cuatro decimales? Usa Precio = 10 ÷ (1 + tasa × días ÷ 360).",
      en: "What is the price of one CETE, in pesos, to four decimals? Use Price = 10 ÷ (1 + rate × days ÷ 360).",
    },
    answer: 9.7535,
    unit: 'MXN',
    decimals: 4,
    tolerance: { abs: 0.0005 },
    explanation: {
      es: "0.10 × 91 ÷ 360 = 0.025278; 10 ÷ 1.025278 = 9.7535. Error común: restar el 10% completo a los $10 ($9.00), como si el plazo fuera un año y la tasa se aplicara como descuento directo.",
      en: "0.10 × 91 ÷ 360 = 0.025278; 10 ÷ 1.025278 = 9.7535. Common mistake: subtracting the full 10% from $10 ($9.00), as if the term were one year and the rate were a direct discount.",
    },
    difficulty: 2,
    points: 15,
    competency: 'cetes-government-debt',
  },
  {
    id: 'INV-05-E3',
    level: 4,
    module: 'INV-05',
    kind: 'fields',
    flavor: 'case',
    context: {
      es: "Héctor compra 1,000 CETES a 91 días a un precio de $9.80 cada uno.",
      en: "Héctor buys 1,000 91-day CETES at a price of $9.80 each.",
    },
    prompt: {
      es: "Completa: cuánto invierte, cuánto gana al vencimiento (antes de impuestos) y su rendimiento en el periodo (%, dos decimales).",
      en: "Fill in: how much he invests, how much he earns at maturity (before taxes) and his return for the period (%, two decimals).",
    },
    fields: [
      { id: 'f1', label: { es: "Monto invertido", en: "Amount invested" }, answer: 9800, unit: 'MXN', tolerance: { abs: 0.5 } },
      { id: 'f2', label: { es: "Ganancia al vencimiento", en: "Gain at maturity" }, answer: 200, unit: 'MXN', tolerance: { abs: 0.5 } },
      { id: 'f3', label: { es: "Rendimiento del periodo (%)", en: "Return for the period (%)" }, answer: 2.04, unit: '%', tolerance: { abs: 0.01 } },
    ],
    explanation: {
      es: "Invierte 1,000 × 9.80 = $9,800. Al vencimiento recibe 1,000 × 10 = $10,000; gana $200. Rendimiento del periodo: 200 ÷ 9,800 = 0.020408 ≈ 2.04%. Error común: dividir la ganancia entre $10,000 (2.00%); el rendimiento se mide sobre lo que realmente pagaste.",
      en: "He invests 1,000 × 9.80 = $9,800. At maturity he receives 1,000 × 10 = $10,000; he earns $200. Return for the period: 200 ÷ 9,800 = 0.020408 ≈ 2.04%. Common mistake: dividing the gain by $10,000 (2.00%); return is measured on what you actually paid.",
    },
    difficulty: 2,
    points: 20,
    competency: 'cetes-government-debt',
  },
  {
    id: 'INV-05-E4',
    level: 4,
    module: 'INV-05',
    kind: 'classify',
    flavor: 'concept',
    prompt: {
      es: "Relaciona cada descripción con el instrumento de deuda gubernamental que corresponde.",
      en: "Match each description with the corresponding government debt instrument.",
    },
    categories: [
      { id: 'INV-05-E4-c1', label: { es: "CETES", en: "CETES" } },
      { id: 'INV-05-E4-c2', label: { es: "Bonos M", en: "Bonos M" } },
      { id: 'INV-05-E4-c3', label: { es: "Udibonos", en: "Udibonos" } },
      { id: 'INV-05-E4-c4', label: { es: "Bondes", en: "Bondes" } },
    ],
    items: [
      { id: 'INV-05-E4-i1', label: { es: "Se compra a descuento y no paga cupones", en: "Bought at a discount and pays no coupons" }, correctCategoryId: 'INV-05-E4-c1' },
      { id: 'INV-05-E4-i2', label: { es: "Paga un cupón fijo cada seis meses durante varios años", en: "Pays a fixed coupon every six months for several years" }, correctCategoryId: 'INV-05-E4-c2' },
      { id: 'INV-05-E4-i3', label: { es: "Su valor se expresa en UDIS y se ajusta con la inflación", en: "Its value is expressed in UDIS and adjusts with inflation" }, correctCategoryId: 'INV-05-E4-c3' },
      { id: 'INV-05-E4-i4', label: { es: "Su interés cambia según una tasa de referencia del mercado", en: "Its interest changes according to a market reference rate" }, correctCategoryId: 'INV-05-E4-c4' },
      { id: 'INV-05-E4-i5', label: { es: "Plazos comunes de 28 a 364 días", en: "Common terms from 28 to 364 days" }, correctCategoryId: 'INV-05-E4-c1' },
    ],
    explanation: {
      es: "CETES: corto plazo, a descuento. Bonos M: tasa fija con cupón semestral. Udibonos: en UDIS, protegen contra la inflación. Bondes: tasa variable. Error común: pensar que los Bonos M protegen contra la inflación; su cupón es fijo y pierde poder de compra si la inflación sube.",
      en: "CETES: short term, at a discount. Bonos M: fixed rate with a semiannual coupon. Udibonos: in UDIS, protect against inflation. Bondes: floating rate. Common mistake: thinking Bonos M protect against inflation; their coupon is fixed and loses purchasing power if inflation rises.",
    },
    difficulty: 1,
    points: 15,
    competency: 'cetes-government-debt',
  },
  {
    id: 'INV-05-E5',
    level: 4,
    module: 'INV-05',
    kind: 'truefalse',
    flavor: 'concept',
    prompt: {
      es: "Si dos CETES tienen el mismo plazo, el que se coloca con una tasa más alta tiene un precio más bajo.",
      en: "If two CETES have the same term, the one placed at a higher rate has a lower price.",
    },
    answer: true,
    explanation: {
      es: "Verdadero. Como al final ambos pagan $10, una tasa mayor significa más ganancia, y eso solo es posible si hoy pagas menos. En la fórmula, una tasa mayor agranda el divisor y baja el precio. Error común: pensar que una tasa alta encarece el título.",
      en: "True. Since both pay $10 at the end, a higher rate means more gain, which is only possible if you pay less today. In the formula, a higher rate enlarges the divisor and lowers the price. Common mistake: thinking a high rate makes the security more expensive.",
    },
    difficulty: 1,
    points: 10,
    competency: 'cetes-government-debt',
  },
  {
    id: 'INV-05-E6',
    level: 4,
    module: 'INV-05',
    kind: 'mcq',
    flavor: 'case',
    context: {
      es: "Daniela invertirá a 5 años y su mayor preocupación es que la inflación suba y se coma su ganancia.",
      en: "Daniela will invest for 5 years and her biggest concern is that inflation rises and eats her gain.",
    },
    prompt: {
      es: "Entre la deuda del gobierno, ¿qué instrumento atiende mejor esa preocupación?",
      en: "Among government debt, which instrument best addresses that concern?",
    },
    options: [
      { id: 'INV-05-E6-a', text: { es: "Bonos M de tasa fija", en: "Fixed-rate Bonos M" } },
      { id: 'INV-05-E6-b', text: { es: "CETES a 28 días sin reinvertir", en: "28-day CETES without reinvesting" } },
      { id: 'INV-05-E6-c', text: { es: "Efectivo en una cuenta sin intereses", en: "Cash in a non-interest account" } },
      { id: 'INV-05-E6-d', text: { es: "Udibonos", en: "Udibonos" } },
    ],
    correctOptionId: 'INV-05-E6-d',
    explanation: {
      es: "Los Udibonos están en UDIS, que suben con la inflación, así que el valor y los cupones se ajustan. Un Bono M paga un cupón fijo que pierde valor si la inflación sube, y los CETES sin reinvertir no cubren los 5 años. Error común: elegir solo por la tasa nominal más alta.",
      en: "Udibonos are in UDIS, which rise with inflation, so value and coupons adjust. A Bono M pays a fixed coupon that loses value if inflation rises, and CETES without reinvesting do not cover the 5 years. Common mistake: choosing only by the highest nominal rate.",
    },
    difficulty: 1,
    points: 10,
    competency: 'cetes-government-debt',
  },

  // ═════════════════════════ INV-06 ═════════════════════════
  {
    id: 'INV-06-E1',
    level: 4,
    module: 'INV-06',
    kind: 'mcq',
    flavor: 'concept',
    prompt: {
      es: "¿Qué significa que un bono sea de \"renta fija\"?",
      en: "What does it mean for a bond to be \"fixed income\"?",
    },
    options: [
      { id: 'INV-06-E1-a', text: { es: "Que su precio en el mercado nunca cambia", en: "That its market price never changes" } },
      { id: 'INV-06-E1-b', text: { es: "Que no tiene ningún riesgo", en: "That it has no risk at all" } },
      { id: 'INV-06-E1-c', text: { es: "Que sus pagos (cupones y valor nominal) están definidos desde la emisión", en: "That its payments (coupons and face value) are defined at issuance" } },
      { id: 'INV-06-E1-d', text: { es: "Que solo lo puede emitir el gobierno", en: "That only the government can issue it" } },
    ],
    correctOptionId: 'INV-06-E1-c',
    explanation: {
      es: "Renta fija significa que las reglas de pago se conocen desde el inicio. Su precio sí cambia con las tasas y existe riesgo de crédito, tasa, inflación y liquidez; también lo emiten empresas. Error común: creer que \"fija\" quiere decir \"segura\".",
      en: "Fixed income means the payment rules are known from the start. Its price does change with rates and there is credit, rate, inflation and liquidity risk; companies issue it too. Common mistake: believing \"fixed\" means \"safe\".",
    },
    difficulty: 1,
    points: 10,
    competency: 'fixed-income-bonds',
  },
  {
    id: 'INV-06-E2',
    level: 4,
    module: 'INV-06',
    kind: 'fields',
    flavor: 'case',
    context: {
      es: "Un bono tiene valor nominal de $1,000, tasa cupón de 7% anual pagadera cada seis meses y vence en 5 años. Lo conservas hasta el vencimiento.",
      en: "A bond has a $1,000 face value, a 7% annual coupon paid every six months and matures in 5 years. You hold it to maturity.",
    },
    prompt: {
      es: "Calcula el cupón anual, el pago de cada semestre y el total de cupones que recibirás en los 5 años, en pesos.",
      en: "Compute the annual coupon, each semiannual payment and the total coupons you will receive over the 5 years, in pesos.",
    },
    fields: [
      { id: 'f1', label: { es: "Cupón anual", en: "Annual coupon" }, answer: 70, unit: 'MXN', tolerance: { abs: 0.01 } },
      { id: 'f2', label: { es: "Pago semestral", en: "Semiannual payment" }, answer: 35, unit: 'MXN', tolerance: { abs: 0.01 } },
      { id: 'f3', label: { es: "Total de cupones en 5 años", en: "Total coupons over 5 years" }, answer: 350, unit: 'MXN', tolerance: { abs: 0.01 } },
    ],
    explanation: {
      es: "Cupón anual: 1,000 × 0.07 = $70. Semestral: 70 ÷ 2 = $35. En 5 años hay 10 pagos: 10 × 35 = $350 (además, al final te devuelven los $1,000). Error común: pagar el 7% cada semestre ($70) y duplicar los intereses.",
      en: "Annual coupon: 1,000 × 0.07 = $70. Semiannual: 70 ÷ 2 = $35. Over 5 years there are 10 payments: 10 × 35 = $350 (plus the $1,000 returned at the end). Common mistake: paying 7% every half-year ($70) and doubling the interest.",
    },
    difficulty: 1,
    points: 15,
    competency: 'fixed-income-bonds',
  },
  {
    id: 'INV-06-E3',
    level: 4,
    module: 'INV-06',
    kind: 'mcq',
    flavor: 'interpret',
    context: {
      es: "Tienes un bono que paga un cupón de 8% anual. Después de comprarlo, las tasas del mercado para bonos parecidos suben a 10%.",
      en: "You hold a bond paying an 8% annual coupon. After you buy it, market rates for similar bonds rise to 10%.",
    },
    prompt: {
      es: "¿Qué le pasa normalmente al precio de tu bono en el mercado?",
      en: "What normally happens to your bond's market price?",
    },
    options: [
      { id: 'INV-06-E3-a', text: { es: "Baja, porque los compradores pueden conseguir bonos nuevos que pagan más", en: "It falls, because buyers can get new bonds that pay more" } },
      { id: 'INV-06-E3-b', text: { es: "Sube, porque las tasas subieron", en: "It rises, because rates went up" } },
      { id: 'INV-06-E3-c', text: { es: "No cambia, porque el cupón es fijo", en: "It does not change, because the coupon is fixed" } },
      { id: 'INV-06-E3-d', text: { es: "Su cupón sube automáticamente a 10%", en: "Its coupon automatically rises to 10%" } },
    ],
    correctOptionId: 'INV-06-E3-a',
    explanation: {
      es: "Precio y tasas se mueven al revés. Si los bonos nuevos pagan 10%, el tuyo de 8% solo se vende si baja su precio, hasta que al comprador le rinda lo mismo. El cupón no cambia. Error común: pensar que un cupón fijo implica precio fijo; solo te afecta si vendes antes del vencimiento.",
      en: "Price and rates move in opposite directions. If new bonds pay 10%, your 8% bond only sells if its price falls until the buyer earns the same. The coupon does not change. Common mistake: thinking a fixed coupon means a fixed price; it only affects you if you sell before maturity.",
    },
    difficulty: 1,
    points: 10,
    competency: 'fixed-income-bonds',
  },
  {
    id: 'INV-06-E4',
    level: 4,
    module: 'INV-06',
    kind: 'numeric',
    flavor: 'case',
    context: {
      es: "Un bono con valor nominal de $100 paga un cupón anual de 6% y hoy cotiza en $96.",
      en: "A bond with a $100 face value pays a 6% annual coupon and trades today at $96.",
    },
    prompt: {
      es: "¿Cuál es su rendimiento corriente, en porcentaje con dos decimales?",
      en: "What is its current yield, as a percentage with two decimals?",
    },
    answer: 6.25,
    unit: '%',
    decimals: 2,
    tolerance: { abs: 0.01 },
    explanation: {
      es: "Cupón anual = 100 × 0.06 = $6. Rendimiento corriente = 6 ÷ 96 = 0.0625 = 6.25%. Al comprar bajo par, el rendimiento supera al cupón. Error común: responder 6% dividiendo entre el valor nominal en lugar del precio.",
      en: "Annual coupon = 100 × 0.06 = $6. Current yield = 6 ÷ 96 = 0.0625 = 6.25%. Buying below par, the yield exceeds the coupon. Common mistake: answering 6% by dividing by face value instead of price.",
    },
    difficulty: 1,
    points: 15,
    competency: 'fixed-income-bonds',
  },
  {
    id: 'INV-06-E5',
    level: 4,
    module: 'INV-06',
    kind: 'classify',
    flavor: 'concept',
    prompt: {
      es: "Clasifica cada situación según el riesgo de renta fija que representa.",
      en: "Classify each situation by the fixed-income risk it represents.",
    },
    categories: [
      { id: 'INV-06-E5-c1', label: { es: "Riesgo de crédito", en: "Credit risk" } },
      { id: 'INV-06-E5-c2', label: { es: "Riesgo de tasa de interés", en: "Interest-rate risk" } },
      { id: 'INV-06-E5-c3', label: { es: "Riesgo de inflación", en: "Inflation risk" } },
      { id: 'INV-06-E5-c4', label: { es: "Riesgo de liquidez", en: "Liquidity risk" } },
    ],
    items: [
      { id: 'INV-06-E5-i1', label: { es: "La empresa emisora entra en problemas y retrasa el pago de cupones", en: "The issuing company runs into trouble and delays coupon payments" }, correctCategoryId: 'INV-06-E5-c1' },
      { id: 'INV-06-E5-i2', label: { es: "Suben las tasas y tu bono vale menos si lo vendes hoy", en: "Rates rise and your bond is worth less if you sell today" }, correctCategoryId: 'INV-06-E5-c2' },
      { id: 'INV-06-E5-i3', label: { es: "Los precios suben tanto que tus cupones fijos alcanzan para menos", en: "Prices rise so much that your fixed coupons buy less" }, correctCategoryId: 'INV-06-E5-c3' },
      { id: 'INV-06-E5-i4', label: { es: "Quieres vender y casi nadie compra ese bono", en: "You want to sell and almost no one buys that bond" }, correctCategoryId: 'INV-06-E5-c4' },
      { id: 'INV-06-E5-i5', label: { es: "Una agencia baja la calificación del emisor", en: "An agency downgrades the issuer's rating" }, correctCategoryId: 'INV-06-E5-c1' },
    ],
    explanation: {
      es: "Crédito: que el emisor no pague (una baja de calificación lo señala). Tasa: suben las tasas y baja el precio. Inflación: los pagos fijos compran menos. Liquidez: no hay comprador rápido a buen precio. Error común: llamar \"riesgo de crédito\" a cualquier baja de precio; si el emisor sigue pagando y bajó por tasas, es riesgo de tasa.",
      en: "Credit: the issuer does not pay (a downgrade signals it). Rate: rates rise and the price falls. Inflation: fixed payments buy less. Liquidity: no quick buyer at a good price. Common mistake: calling any price drop \"credit risk\"; if the issuer keeps paying and the price fell because of rates, it is rate risk.",
    },
    difficulty: 1,
    points: 15,
    competency: 'fixed-income-bonds',
  },
  {
    id: 'INV-06-E6',
    level: 4,
    module: 'INV-06',
    kind: 'multi',
    flavor: 'interpret',
    prompt: {
      es: "Sobre las calificaciones crediticias de los bonos, ¿qué afirmaciones son correctas? Selecciona todas las que apliquen.",
      en: "About bond credit ratings, which statements are correct? Select all that apply.",
    },
    options: [
      { id: 'INV-06-E6-a', text: { es: "Las emiten agencias calificadoras para medir la capacidad de pago del emisor", en: "They are issued by rating agencies to measure the issuer's ability to pay" } },
      { id: 'INV-06-E6-b', text: { es: "Un emisor con peor calificación suele pagar una tasa más alta", en: "An issuer with a worse rating usually pays a higher rate" } },
      { id: 'INV-06-E6-c', text: { es: "Una calificación AAA garantiza que el bono nunca dejará de pagar", en: "An AAA rating guarantees the bond will never default" } },
      { id: 'INV-06-E6-d', text: { es: "La calificación puede cambiar durante la vida del bono", en: "The rating can change during the bond's life" } },
      { id: 'INV-06-E6-e', text: { es: "Miden principalmente el riesgo de que suban las tasas", en: "They mainly measure the risk of rising rates" } },
    ],
    correctOptionIds: ['INV-06-E6-a', 'INV-06-E6-b', 'INV-06-E6-d'],
    explanation: {
      es: "Las calificaciones miden el riesgo de crédito, las asignan agencias, cambian con el tiempo y, a peor calificación, mayor tasa exigida. Ninguna calificación es garantía de pago, y no miden el riesgo de tasa. Error común: tratar una AAA como si fuera riesgo cero.",
      en: "Ratings measure credit risk, are assigned by agencies, change over time and, the worse the rating, the higher the required rate. No rating guarantees payment, and they do not measure rate risk. Common mistake: treating an AAA as zero risk.",
    },
    difficulty: 2,
    points: 15,
    competency: 'fixed-income-bonds',
  },
]
