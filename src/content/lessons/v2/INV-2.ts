import type { Exercise, Lesson } from '../../../types'

/**
 * FINCORE — Temario v2.0, área Inversiones y Mercados Financieros (nivel 4, etapa Intermedio).
 * Materias INV.7 a INV.12: acciones, ETFs y fondos, FIBRAs, portafolios, análisis fundamental y técnico.
 */

const NOTE_EQUITIES = {
  es: "Contenido educativo. Las referencias a la Bolsa Mexicana de Valores (BMV), a la Bolsa Institucional de Valores (BIVA), al Sistema Internacional de Cotizaciones (SIC), a las casas de bolsa y a la CNBV son generales; las reglas, comisiones e impuestos cambian con el tiempo, así que verifica la versión vigente (2026) antes de invertir. Ningún ejemplo es una recomendación de compra o venta.",
  en: "Educational content. References to the Mexican Stock Exchange (BMV), the Institutional Stock Exchange (BIVA), the International Quotation System (SIC), brokerage firms and the CNBV are general; rules, fees and taxes change over time, so verify the current version (2026) before investing. No example is a buy or sell recommendation.",
}

const NOTE_FUNDS = {
  es: "Contenido educativo. En México los fondos de inversión se rigen por su propia ley y los supervisa la CNBV; los ETFs extranjeros suelen comprarse a través del SIC. Las reglas, comisiones e impuestos cambian: verifica la versión vigente (2026) y lee el prospecto de cada fondo antes de invertir.",
  en: "Educational content. In Mexico, investment funds are governed by their own law and supervised by the CNBV; foreign ETFs are usually bought through the SIC. Rules, fees and taxes change: verify the current version (2026) and read each fund's prospectus before investing.",
}

const NOTE_FIBRAS = {
  es: "Contenido educativo. El régimen de las FIBRAs (entre otras cosas, la obligación de distribuir la mayor parte de su resultado fiscal, que suele citarse como al menos 95 %) proviene de la legislación fiscal mexicana y puede cambiar. Verifica la versión vigente (2026) y el tratamiento fiscal de las distribuciones antes de invertir. Las cifras de los ejemplos son hipotéticas.",
  en: "Educational content. The FIBRA regime (including the obligation to distribute most of its taxable income, usually cited as at least 95%) comes from Mexican tax law and may change. Verify the current version (2026) and the tax treatment of distributions before investing. Figures in the examples are hypothetical.",
}

const NOTE_REPORTS = {
  es: "Contenido educativo. Las empresas que cotizan en bolsa en México publican información financiera periódica conforme a la regulación de la CNBV y de la bolsa en la que cotizan; los plazos y formatos pueden cambiar, así que verifica la versión vigente (2026). Los datos de los ejemplos son hipotéticos y no son recomendaciones.",
  en: "Educational content. Companies listed in Mexico publish periodic financial information under the rules of the CNBV and of the exchange where they are listed; deadlines and formats may change, so verify the current version (2026). Data in the examples are hypothetical and are not recommendations.",
}

export const lessons: Lesson[] = [
  // ───────────────────────────── INV-07 ─────────────────────────────
  {
    id: 'INV-07',
    level: 4,
    topicIds: ['INV.7'],
    title: { es: "Acciones y renta variable", en: "Stocks and equities" },
    summary: {
      es: "Una acción te hace dueño de una pequeña parte de una empresa; ganas por dividendos y por la subida del precio, pero tu rendimiento no está garantizado.",
      en: "A share makes you owner of a small part of a company; you earn through dividends and price increases, but your return is not guaranteed.",
    },
    minutes: 16,
    objectives: [
      { es: "Explicar qué es una acción y qué derechos te da como accionista.", en: "Explain what a share is and what rights it gives you as a shareholder." },
      { es: "Calcular el rendimiento total de una acción sumando ganancia de precio y dividendos.", en: "Compute a stock's total return by adding price gain and dividends." },
      { es: "Describir cómo se compran acciones en México y la diferencia entre una orden a mercado y una limitada.", en: "Describe how shares are bought in Mexico and the difference between a market order and a limit order." },
    ],
    theory: [
      {
        heading: { es: "¿Qué es una acción y por qué se llama renta variable?", en: "What is a share and why is it called equity (variable income)?" },
        body: [
          {
            es: "Una **acción** es una parte del capital de una empresa. Si una empresa tuviera 1,000 acciones y tú compras 10, eres dueño del 1 % de ella. No le prestas dinero: te vuelves **socio**. Por eso, si a la empresa le va bien, a ti también; si le va mal, tu inversión pierde valor.",
            en: "A **share** is a part of a company's capital. If a company had 1,000 shares and you buy 10, you own 1% of it. You do not lend it money: you become a **partner**. So if the company does well, so do you; if it does badly, your investment loses value.",
          },
          {
            es: "Se llama **renta variable** porque nadie te promete cuánto vas a ganar. En un bono o en CETES sabes de antemano la tasa; en una acción, el resultado depende de las ganancias de la empresa y de lo que otros inversionistas estén dispuestos a pagar por ella cada día.",
            en: "It is called **variable income** because nobody promises how much you will earn. In a bond or CETES you know the rate in advance; in a share, the result depends on the company's profits and on what other investors are willing to pay for it each day.",
          },
          {
            es: "Mini ejemplo: una cadena de cafeterías emite acciones para abrir 50 sucursales nuevas. Quien compra esas acciones pone dinero a cambio de una parte del negocio, sin promesa de pago fijo.",
            en: "Mini example: a coffee shop chain issues shares to open 50 new branches. Whoever buys those shares puts in money in exchange for part of the business, with no promise of a fixed payment.",
          },
        ],
        bullets: [
          { es: "Derecho a recibir **dividendos** si la asamblea decide repartir utilidades.", en: "Right to receive **dividends** if the shareholders' meeting decides to distribute profits." },
          { es: "Derecho a **votar** en asambleas (según el tipo de acción).", en: "Right to **vote** at shareholders' meetings (depending on the share class)." },
          { es: "Derecho a una parte de lo que quede si la empresa se liquida, después de pagar a los acreedores.", en: "Right to a share of what remains if the company is wound up, after creditors are paid." },
          { es: "Responsabilidad limitada: lo más que puedes perder es lo que invertiste.", en: "Limited liability: the most you can lose is what you invested." },
        ],
      },
      {
        heading: { es: "Cómo ganas (y pierdes) con acciones", en: "How you earn (and lose) with stocks" },
        body: [
          {
            es: "Hay dos fuentes de ganancia. La **ganancia de capital** (o plusvalía) es la diferencia entre el precio al que vendes y el precio al que compraste. El **dividendo** es la parte de la utilidad que la empresa reparte en efectivo a sus accionistas. Sumarlas te da el **rendimiento total**.",
            en: "There are two sources of gain. The **capital gain** is the difference between the price you sell at and the price you bought at. The **dividend** is the part of profit the company pays out in cash to shareholders. Adding them gives you the **total return**.",
          },
          {
            es: "No todas las empresas pagan dividendos: muchas que crecen rápido prefieren **reinvertir** sus utilidades. Y el precio puede bajar: si vendes por debajo de tu compra tienes una **minusvalía** (pérdida). Una pérdida solo se vuelve real cuando vendes, pero eso no la hace menos importante.",
            en: "Not every company pays dividends: many fast-growing ones prefer to **reinvest** their profits. And the price can fall: if you sell below your purchase price you have a **capital loss**. A loss only becomes real when you sell, but that does not make it less important.",
          },
          {
            es: "Mini ejemplo: compras una acción en $100, recibes $3 de dividendo y la vendes en $108. Ganaste $8 de precio más $3 de dividendo: $11 sobre $100, es decir, 11 %.",
            en: "Mini example: you buy a share at $100, receive a $3 dividend and sell it at $108. You earned $8 on price plus $3 in dividends: $11 on $100, that is, 11%.",
          },
        ],
        formula: "Rendimiento total = (Precio de venta − Precio de compra + Dividendos) ÷ Precio de compra × 100",
      },
      {
        heading: { es: "Cómo se compran acciones en México", en: "How shares are bought in Mexico" },
        body: [
          {
            es: "Las acciones de empresas mexicanas cotizan en la **Bolsa Mexicana de Valores (BMV)** o en la **Bolsa Institucional de Valores (BIVA)**. Tú no entras directo a la bolsa: abres una cuenta con un **intermediario**, normalmente una **casa de bolsa** autorizada y supervisada por la CNBV, que envía tus órdenes. Acciones extranjeras pueden comprarse a través del **SIC** (Sistema Internacional de Cotizaciones).",
            en: "Shares of Mexican companies trade on the **Mexican Stock Exchange (BMV)** or the **Institutional Stock Exchange (BIVA)**. You do not access the exchange directly: you open an account with an **intermediary**, usually a **brokerage firm** authorized and supervised by the CNBV, which sends your orders. Foreign shares can be bought through the **SIC** (International Quotation System).",
          },
          {
            es: "Al comprar eliges el tipo de **orden**. Una **orden a mercado** se ejecuta de inmediato al mejor precio disponible, aunque no sepas exactamente cuál será. Una **orden limitada** fija el precio máximo que pagas (o el mínimo al que vendes): te protege del precio, pero puede no ejecutarse.",
            en: "When buying you choose the type of **order**. A **market order** executes immediately at the best available price, even if you do not know exactly what it will be. A **limit order** sets the maximum price you pay (or the minimum you sell at): it protects you on price, but it may not execute.",
          },
          {
            es: "Para saber qué tan grande es una empresa se usa la **capitalización de mercado**: precio por acción por número de acciones. Para ver cómo va el mercado mexicano en conjunto se sigue un **índice**, como el S&P/BMV IPC, que agrupa a las emisoras más grandes y negociadas.",
            en: "To know how big a company is you use its **market capitalization**: price per share times number of shares. To see how the Mexican market is doing as a whole you follow an **index**, such as the S&P/BMV IPC, which groups the largest and most traded issuers.",
          },
          {
            es: "Mini ejemplo: una empresa tiene 200 millones de acciones a $50 cada una. Su capitalización es de $10,000 millones.",
            en: "Mini example: a company has 200 million shares at $50 each. Its market capitalization is $10,000 million.",
          },
        ],
        formula: "Capitalización de mercado = Precio por acción × Número de acciones en circulación",
      },
    ],
    examples: [
      {
        title: { es: "Rendimiento total de una inversión en acciones", en: "Total return of a stock investment" },
        problem: {
          es: "Mariana compra 50 acciones a $40 cada una. Durante el año recibe un dividendo de $1.20 por acción y después vende todas a $46. ¿Cuál fue su rendimiento total? (Sin comisiones ni impuestos, cifras hipotéticas.)",
          en: "Mariana buys 50 shares at $40 each. During the year she receives a dividend of $1.20 per share and then sells them all at $46. What was her total return? (No fees or taxes, hypothetical figures.)",
        },
        steps: [
          { es: "Inversión inicial: 50 × $40 = $2,000.", en: "Initial investment: 50 × $40 = $2,000." },
          { es: "Ganancia de capital: ($46 − $40) × 50 = $300.", en: "Capital gain: ($46 − $40) × 50 = $300." },
          { es: "Dividendos: $1.20 × 50 = $60.", en: "Dividends: $1.20 × 50 = $60." },
          { es: "Ganancia total: $300 + $60 = $360; rendimiento: $360 ÷ $2,000 = 0.18.", en: "Total gain: $300 + $60 = $360; return: $360 ÷ $2,000 = 0.18." },
        ],
        result: {
          es: "Rendimiento total de 18 %: 15 puntos vienen del precio y 3 del dividendo.",
          en: "Total return of 18%: 15 points come from price and 3 from the dividend.",
        },
      },
      {
        title: { es: "¿Qué tanto de la empresa es tuyo?", en: "How much of the company is yours?" },
        problem: {
          es: "Una empresa tiene 500 millones de acciones en circulación y cada una cotiza en $30. Luis compra 1,000 acciones. ¿Cuál es la capitalización de mercado y qué porcentaje de la empresa tiene Luis?",
          en: "A company has 500 million shares outstanding, each trading at $30. Luis buys 1,000 shares. What is the market capitalization and what percentage of the company does Luis own?",
        },
        steps: [
          { es: "Capitalización: 500,000,000 × $30 = $15,000 millones.", en: "Capitalization: 500,000,000 × $30 = $15,000 million." },
          { es: "Inversión de Luis: 1,000 × $30 = $30,000.", en: "Luis's investment: 1,000 × $30 = $30,000." },
          { es: "Participación: 1,000 ÷ 500,000,000 = 0.000002, es decir, 0.0002 %.", en: "Stake: 1,000 ÷ 500,000,000 = 0.000002, that is, 0.0002%." },
        ],
        result: {
          es: "Luis es dueño del 0.0002 % de una empresa de $15,000 millones: una parte pequeñísima, pero con los mismos derechos por acción que cualquier otro accionista de esa serie.",
          en: "Luis owns 0.0002% of a $15,000 million company: a tiny part, but with the same per-share rights as any other shareholder of that class.",
        },
      },
    ],
    keyPoints: [
      { es: "Una acción es una parte de la propiedad de una empresa: te vuelves socio, no acreedor.", en: "A share is a part of a company's ownership: you become a partner, not a creditor." },
      { es: "Es renta variable: el rendimiento depende de la empresa y del mercado, no está prometido.", en: "It is variable income: the return depends on the company and the market; it is not promised." },
      { es: "Rendimiento total = ganancia de capital + dividendos, sobre lo que invertiste.", en: "Total return = capital gain + dividends, over what you invested." },
      { es: "En México se compra en la BMV o BIVA a través de una casa de bolsa; acciones extranjeras, vía SIC.", en: "In Mexico you buy on the BMV or BIVA through a brokerage firm; foreign shares, via the SIC." },
      { es: "Orden a mercado: rapidez sin precio seguro. Orden limitada: precio seguro sin ejecución segura.", en: "Market order: speed without a sure price. Limit order: a sure price without sure execution." },
    ],
    normativeNote: NOTE_EQUITIES,
    exerciseIds: ['INV-07-E1', 'INV-07-E2', 'INV-07-E3', 'INV-07-E4', 'INV-07-E5', 'INV-07-E6'],
  },

  // ───────────────────────────── INV-08 ─────────────────────────────
  {
    id: 'INV-08',
    level: 4,
    topicIds: ['INV.8'],
    title: { es: "ETFs y fondos de inversión", en: "ETFs and investment funds" },
    summary: {
      es: "Los fondos de inversión y los ETFs juntan el dinero de muchas personas para comprar una canasta de valores, lo que te da diversificación con poco dinero; sus costos y su forma de operar marcan la diferencia.",
      en: "Investment funds and ETFs pool many people's money to buy a basket of securities, giving you diversification with little money; their costs and the way they trade make the difference.",
    },
    minutes: 15,
    objectives: [
      { es: "Explicar qué es un fondo de inversión y cómo se calcula el precio de su acción.", en: "Explain what an investment fund is and how its share price is computed." },
      { es: "Distinguir un ETF de un fondo de inversión tradicional por la forma de comprarlo y su precio.", en: "Distinguish an ETF from a traditional investment fund by how you buy it and how it is priced." },
      { es: "Calcular el efecto de las comisiones de administración en el largo plazo.", en: "Compute the long-term effect of management fees." },
    ],
    theory: [
      {
        heading: { es: "Fondos de inversión: una canasta compartida", en: "Investment funds: a shared basket" },
        body: [
          {
            es: "Un **fondo de inversión** junta el dinero de muchas personas y lo invierte en una **cartera** de valores (bonos, acciones o ambos) según una estrategia escrita en su **prospecto**. Lo administra una **operadora** profesional. Piensa en una tanda gigante donde, en lugar de turnarse el dinero, todos compran juntos una canasta y cada quien es dueño de una parte.",
            en: "An **investment fund** pools many people's money and invests it in a **portfolio** of securities (bonds, stocks or both) according to a strategy written in its **prospectus**. A professional **management company** runs it. Think of a giant savings circle where, instead of taking turns with the money, everyone buys a basket together and each person owns a part.",
          },
          {
            es: "Tú compras **acciones del fondo**. Su precio se calcula con el **valor neto de los activos por acción** (NAV, por sus siglas en inglés): lo que valen las inversiones del fondo, menos lo que debe, dividido entre las acciones del fondo. Normalmente se calcula una vez al día.",
            en: "You buy **fund shares**. Their price is computed with the **net asset value per share** (NAV): what the fund's investments are worth, minus what it owes, divided by the fund's shares. It is usually computed once a day.",
          },
          {
            es: "Hay fondos de **deuda** (más estables) y de **renta variable** (más volátiles), y cada uno dice cada cuándo puedes sacar tu dinero (**liquidez**): diario, semanal, mensual. Mini ejemplo: con $1,000 en un fondo de deuda tienes una pequeña parte de decenas de bonos que no podrías comprar por separado.",
            en: "There are **debt** funds (more stable) and **equity** funds (more volatile), and each one states how often you can withdraw your money (**liquidity**): daily, weekly, monthly. Mini example: with $1,000 in a debt fund you own a small part of dozens of bonds you could not buy separately.",
          },
        ],
        formula: "Precio por acción del fondo (NAV) = (Activos del fondo − Pasivos del fondo) ÷ Acciones del fondo en circulación",
      },
      {
        heading: { es: "ETFs: un fondo que cotiza como acción", en: "ETFs: a fund that trades like a stock" },
        body: [
          {
            es: "Un **ETF** (Exchange Traded Fund, o fondo cotizado) también es una canasta de valores, pero **cotiza en bolsa**: lo compras y vendes con tu casa de bolsa durante el horario de operación, a un precio que cambia a lo largo del día, igual que una acción.",
            en: "An **ETF** (Exchange Traded Fund) is also a basket of securities, but it **trades on an exchange**: you buy and sell it through your brokerage firm during trading hours, at a price that changes throughout the day, just like a stock.",
          },
          {
            es: "La mayoría de los ETFs **replican un índice**: si el índice sube 5 %, el ETF busca subir casi lo mismo. Con una sola compra puedes tener cientos de empresas, bonos de un país o incluso materias primas. En México puedes comprar ETFs locales en la bolsa y muchos ETFs extranjeros a través del **SIC**.",
            en: "Most ETFs **track an index**: if the index rises 5%, the ETF aims to rise almost the same. With a single purchase you can own hundreds of companies, a country's bonds or even commodities. In Mexico you can buy local ETFs on the exchange and many foreign ETFs through the **SIC**.",
          },
          {
            es: "Mini ejemplo: en lugar de comprar una por una las 35 acciones de un índice, compras un ETF que las contiene en la misma proporción que el índice.",
            en: "Mini example: instead of buying the 35 stocks of an index one by one, you buy an ETF that holds them in the same proportion as the index.",
          },
        ],
        bullets: [
          { es: "Fondo tradicional: lo compras a la operadora o a un distribuidor; precio una vez al día.", en: "Traditional fund: you buy it from the management company or a distributor; priced once a day." },
          { es: "ETF: lo compras en bolsa con una casa de bolsa; precio durante toda la sesión.", en: "ETF: you buy it on the exchange through a brokerage firm; priced throughout the session." },
          { es: "Ambos diversifican y cobran una comisión de administración anual.", en: "Both diversify and charge an annual management fee." },
          { es: "Ninguno garantiza rendimiento: valen lo que valga lo que tienen dentro.", en: "Neither guarantees a return: they are worth what their holdings are worth." },
        ],
      },
      {
        heading: { es: "Gestión activa, pasiva y el peso de las comisiones", en: "Active and passive management and the weight of fees" },
        body: [
          {
            es: "Un fondo de **gestión activa** tiene un equipo que elige qué comprar intentando ganarle al mercado. Uno de **gestión pasiva** (como la mayoría de los ETFs) solo copia un índice. La gestión activa suele cobrar más, y no siempre logra superar a su índice de referencia después de comisiones.",
            en: "An **actively managed** fund has a team that picks what to buy trying to beat the market. A **passively managed** fund (like most ETFs) just copies an index. Active management usually charges more, and it does not always beat its benchmark after fees.",
          },
          {
            es: "La **comisión de administración** (o gasto total anual) es un porcentaje que se descuenta cada año del valor de tu inversión. Parece pequeño, pero se aplica año tras año y reduce el efecto del **interés compuesto**: un punto porcentual menos de rendimiento por diez o veinte años es mucho dinero.",
            en: "The **management fee** (or total annual expense) is a percentage deducted each year from your investment's value. It looks small, but it applies year after year and reduces the effect of **compound interest**: one percentage point less return over ten or twenty years is a lot of money.",
          },
          {
            es: "Mini ejemplo: con $100,000 en un fondo que cobra 1.5 % anual pagas unos $1,500 el primer año; en uno de 0.2 %, unos $200. La diferencia se repite y crece cada año.",
            en: "Mini example: with $100,000 in a fund charging 1.5% a year you pay about $1,500 in the first year; in one charging 0.2%, about $200. The difference repeats and grows every year.",
          },
        ],
        formula: "Valor futuro ≈ Inversión × (1 + rendimiento bruto − comisión)^años",
      },
    ],
    examples: [
      {
        title: { es: "Precio de la acción de un fondo", en: "Price of a fund share" },
        problem: {
          es: "Un fondo de deuda tiene inversiones por $80,500,000 y debe $500,000 (comisiones por pagar). Tiene 8,000,000 de acciones en circulación. ¿Cuál es su precio por acción? Si Ana invierte $5,000, ¿cuántas acciones recibe?",
          en: "A debt fund has investments worth $80,500,000 and owes $500,000 (fees payable). It has 8,000,000 shares outstanding. What is its price per share? If Ana invests $5,000, how many shares does she receive?",
        },
        steps: [
          { es: "Activos netos: $80,500,000 − $500,000 = $80,000,000.", en: "Net assets: $80,500,000 − $500,000 = $80,000,000." },
          { es: "Precio por acción: $80,000,000 ÷ 8,000,000 = $10.", en: "Price per share: $80,000,000 ÷ 8,000,000 = $10." },
          { es: "Acciones de Ana: $5,000 ÷ $10 = 500 acciones.", en: "Ana's shares: $5,000 ÷ $10 = 500 shares." },
        ],
        result: {
          es: "Cada acción del fondo vale $10 y Ana recibe 500. Si mañana las inversiones del fondo suben, sube el precio de sus 500 acciones.",
          en: "Each fund share is worth $10 and Ana receives 500. If the fund's investments rise tomorrow, the price of her 500 shares rises.",
        },
      },
      {
        title: { es: "Un punto de comisión en 10 años", en: "One point of fees over 10 years" },
        problem: {
          es: "Carlos invierte $100,000 por 10 años. El portafolio rinde 8 % anual antes de comisiones (hipotético). Compara un fondo sin comisión relevante (rinde 8 % neto) con uno que cobra 1 % anual (rinde 7 % neto).",
          en: "Carlos invests $100,000 for 10 years. The portfolio earns 8% a year before fees (hypothetical). Compare a fund with no relevant fee (8% net) with one charging 1% a year (7% net).",
        },
        steps: [
          { es: "Al 8 %: $100,000 × 1.08^10 ≈ $215,892.50.", en: "At 8%: $100,000 × 1.08^10 ≈ $215,892.50." },
          { es: "Al 7 %: $100,000 × 1.07^10 ≈ $196,715.14.", en: "At 7%: $100,000 × 1.07^10 ≈ $196,715.14." },
          { es: "Diferencia: $215,892.50 − $196,715.14 ≈ $19,177.36.", en: "Difference: $215,892.50 − $196,715.14 ≈ $19,177.36." },
        ],
        result: {
          es: "Un solo punto de comisión le cuesta a Carlos unos $19,177 en 10 años, casi una quinta parte de lo que invirtió. Comparar comisiones es tan importante como comparar rendimientos.",
          en: "A single point of fees costs Carlos about $19,177 over 10 years, almost a fifth of what he invested. Comparing fees is as important as comparing returns.",
        },
      },
    ],
    keyPoints: [
      { es: "Fondos y ETFs juntan dinero de muchos para comprar una canasta diversificada.", en: "Funds and ETFs pool money from many people to buy a diversified basket." },
      { es: "El precio de la acción de un fondo es su valor neto de activos entre sus acciones (NAV).", en: "A fund share's price is its net asset value divided by its shares (NAV)." },
      { es: "Un ETF cotiza en bolsa durante el día; un fondo tradicional se valúa una vez al día.", en: "An ETF trades on the exchange during the day; a traditional fund is valued once a day." },
      { es: "La gestión pasiva copia un índice; la activa intenta superarlo y suele cobrar más.", en: "Passive management copies an index; active management tries to beat it and usually charges more." },
      { es: "Las comisiones anuales se acumulan con el tiempo y reducen tu interés compuesto.", en: "Annual fees accumulate over time and reduce your compound interest." },
    ],
    normativeNote: NOTE_FUNDS,
    exerciseIds: ['INV-08-E1', 'INV-08-E2', 'INV-08-E3', 'INV-08-E4', 'INV-08-E5', 'INV-08-E6'],
  },

  // ───────────────────────────── INV-09 ─────────────────────────────
  {
    id: 'INV-09',
    level: 4,
    topicIds: ['INV.9'],
    title: { es: "FIBRAs e inversión inmobiliaria", en: "FIBRAs (Mexican REITs) and real estate investing" },
    summary: {
      es: "Las FIBRAs te permiten invertir en bienes raíces desde la bolsa con poco dinero: cobras parte de las rentas mediante distribuciones, aunque el precio del certificado sube y baja como cualquier valor.",
      en: "FIBRAs let you invest in real estate through the stock exchange with little money: you collect part of the rents through distributions, although the certificate's price rises and falls like any security.",
    },
    minutes: 15,
    objectives: [
      { es: "Explicar qué es una FIBRA y qué compras al adquirir sus certificados.", en: "Explain what a FIBRA is and what you buy when you acquire its certificates." },
      { es: "Calcular el rendimiento por distribuciones y la tasa de ocupación de una FIBRA.", en: "Compute a FIBRA's distribution yield and occupancy rate." },
      { es: "Comparar una FIBRA con la compra directa de un inmueble en liquidez, monto, diversificación y riesgos.", en: "Compare a FIBRA with buying a property directly in liquidity, amount, diversification and risks." },
    ],
    theory: [
      {
        heading: { es: "¿Qué es una FIBRA?", en: "What is a FIBRA?" },
        body: [
          {
            es: "FIBRA significa **Fideicomiso de Inversión en Bienes Raíces**. Un **fideicomiso** es un contrato en el que se entregan bienes o dinero a una institución para que los administre con un fin específico. En una FIBRA, ese fin es **comprar, rentar y administrar inmuebles**: naves industriales, centros comerciales, oficinas, hoteles.",
            en: "FIBRA stands for **Real Estate Investment Trust** in Spanish (Fideicomiso de Inversión en Bienes Raíces). A **trust** is a contract in which assets or money are handed to an institution to manage for a specific purpose. In a FIBRA, that purpose is to **buy, rent out and manage properties**: industrial warehouses, shopping centers, offices, hotels.",
          },
          {
            es: "Para juntar el dinero, la FIBRA emite **certificados bursátiles fiduciarios inmobiliarios (CBFIs)** que cotizan en bolsa. Al comprar CBFIs no eres dueño de un local en particular: tienes derecho a una parte de los resultados de **todo el conjunto** de inmuebles. Es la versión mexicana de lo que en otros países se llama REIT.",
            en: "To raise money, the FIBRA issues **real estate trust certificates (CBFIs)** that trade on the exchange. When you buy CBFIs you do not own a specific store: you are entitled to a share of the results of the **whole set** of properties. It is the Mexican version of what other countries call a REIT.",
          },
          {
            es: "Mini ejemplo: con unos cuantos miles de pesos puedes tener una pequeña parte de decenas de bodegas industriales en el norte del país, algo imposible si quisieras comprar una bodega tú solo.",
            en: "Mini example: with a few thousand pesos you can own a small part of dozens of industrial warehouses in northern Mexico, something impossible if you wanted to buy a warehouse on your own.",
          },
        ],
      },
      {
        heading: { es: "Cómo genera rendimiento una FIBRA", en: "How a FIBRA generates returns" },
        body: [
          {
            es: "La FIBRA cobra **rentas** a sus inquilinos, paga gastos e intereses, y reparte buena parte de lo que queda a los tenedores en forma de **distribuciones**, normalmente cada trimestre. Por ley, las FIBRAs deben distribuir la mayor parte de su resultado fiscal (se suele citar al menos 95 %), por eso son atractivas para quien busca un **flujo periódico**.",
            en: "The FIBRA collects **rents** from its tenants, pays expenses and interest, and pays out a large part of what remains to holders as **distributions**, usually every quarter. By law, FIBRAs must distribute most of their taxable income (usually cited as at least 95%), which is why they appeal to those seeking a **periodic cash flow**.",
          },
          {
            es: "Además, el **precio del CBFI** cambia en bolsa: puede subir si los inmuebles ganan valor y las rentas crecen, o bajar si hay inmuebles vacíos o si suben las tasas de interés. Tu rendimiento total es distribuciones más cambio de precio.",
            en: "In addition, the **CBFI price** changes on the exchange: it can rise if properties gain value and rents grow, or fall if properties sit empty or interest rates rise. Your total return is distributions plus price change.",
          },
          {
            es: "Dos datos clave para revisar una FIBRA: el **rendimiento por distribución** (cuánto reparte al año respecto a su precio) y la **tasa de ocupación** (qué parte de sus metros cuadrados está rentada). Mini ejemplo: si un CBFI cuesta $20 y reparte $1.60 al año, rinde 8 % por distribuciones.",
            en: "Two key figures to check a FIBRA: the **distribution yield** (how much it pays per year relative to its price) and the **occupancy rate** (what part of its square meters is rented). Mini example: if a CBFI costs $20 and pays $1.60 a year, its distribution yield is 8%.",
          },
        ],
        formula: "Rendimiento por distribución = Distribuciones de 12 meses ÷ Precio del CBFI × 100   |   Ocupación = m² rentados ÷ m² totales × 100",
      },
      {
        heading: { es: "FIBRA vs. comprar un inmueble directamente", en: "FIBRA vs. buying a property directly" },
        body: [
          {
            es: "Comprar un departamento para rentarlo exige mucho dinero, trámites, encontrar inquilinos, dar mantenimiento y, si necesitas el dinero, venderlo puede tardar meses. Con una FIBRA inviertes montos pequeños, la administración la hacen profesionales y puedes vender tus CBFIs en bolsa en días hábiles.",
            en: "Buying an apartment to rent requires a lot of money, paperwork, finding tenants, doing maintenance and, if you need the money, selling it can take months. With a FIBRA you invest small amounts, professionals do the management and you can sell your CBFIs on the exchange on business days.",
          },
          {
            es: "Pero las FIBRAs tienen riesgos propios: el precio se mueve cada día con el mercado, **suben poco o bajan cuando suben las tasas de interés** (otras inversiones se vuelven más atractivas y su deuda se encarece), pueden concentrarse en un solo sector o región, y algunas cobran rentas en dólares, lo que agrega **riesgo cambiario**.",
            en: "But FIBRAs have their own risks: the price moves every day with the market, **they rise little or fall when interest rates go up** (other investments become more attractive and their debt gets more expensive), they may be concentrated in a single sector or region, and some collect rent in dollars, which adds **currency risk**.",
          },
          {
            es: "Mini ejemplo: si una FIBRA de oficinas pierde inquilinos porque más empresas trabajan a distancia, baja su ocupación, bajan sus distribuciones y probablemente su precio.",
            en: "Mini example: if an office FIBRA loses tenants because more companies work remotely, its occupancy falls, its distributions fall and probably its price too.",
          },
        ],
        bullets: [
          { es: "Monto mínimo: FIBRA, el precio de un CBFI; inmueble, cientos de miles o millones.", en: "Minimum amount: FIBRA, the price of one CBFI; property, hundreds of thousands or millions." },
          { es: "Liquidez: FIBRA, venta en bolsa; inmueble, meses de trámites.", en: "Liquidity: FIBRA, sale on the exchange; property, months of paperwork." },
          { es: "Diversificación: FIBRA, muchos inmuebles; inmueble, todo en uno.", en: "Diversification: FIBRA, many properties; property, everything in one." },
          { es: "Control: con un inmueble propio decides tú; en la FIBRA decide su administración.", en: "Control: with your own property you decide; in a FIBRA its management decides." },
        ],
      },
    ],
    examples: [
      {
        title: { es: "Rendimiento por distribución de una FIBRA", en: "Distribution yield of a FIBRA" },
        problem: {
          es: "El CBFI de una FIBRA industrial cuesta $35. En el último año pagó cuatro distribuciones trimestrales de $0.70 cada una. ¿Cuál es su rendimiento por distribución? Si tienes 300 CBFIs, ¿cuánto recibiste? (Cifras hipotéticas, antes de impuestos.)",
          en: "The CBFI of an industrial FIBRA costs $35. In the last year it paid four quarterly distributions of $0.70 each. What is its distribution yield? If you hold 300 CBFIs, how much did you receive? (Hypothetical figures, before taxes.)",
        },
        steps: [
          { es: "Distribución anual por CBFI: 4 × $0.70 = $2.80.", en: "Annual distribution per CBFI: 4 × $0.70 = $2.80." },
          { es: "Rendimiento: $2.80 ÷ $35 = 0.08, es decir, 8 %.", en: "Yield: $2.80 ÷ $35 = 0.08, that is, 8%." },
          { es: "Lo que recibiste: 300 × $2.80 = $840 en el año.", en: "What you received: 300 × $2.80 = $840 for the year." },
        ],
        result: {
          es: "La FIBRA rinde 8 % por distribuciones y tus 300 CBFIs te dieron $840. Ojo: a eso hay que sumar o restar lo que haya cambiado el precio del CBFI.",
          en: "The FIBRA yields 8% in distributions and your 300 CBFIs paid you $840. Note: you must add or subtract whatever the CBFI price changed.",
        },
      },
      {
        title: { es: "Departamento propio vs. FIBRA", en: "Own apartment vs. FIBRA" },
        problem: {
          es: "Sofía puede comprar un departamento de $2,000,000 que se rentaría en $10,000 al mes, con gastos (predial, mantenimiento, meses vacíos) de $20,000 al año. ¿Cuál es su rendimiento neto por rentas? ¿Qué ventajas le daría una FIBRA? (Cifras hipotéticas.)",
          en: "Sofía can buy a $2,000,000 apartment that would rent for $10,000 a month, with expenses (property tax, maintenance, vacant months) of $20,000 a year. What is its net rental yield? What advantages would a FIBRA give her? (Hypothetical figures.)",
        },
        steps: [
          { es: "Rentas anuales: $10,000 × 12 = $120,000.", en: "Annual rent: $10,000 × 12 = $120,000." },
          { es: "Renta neta: $120,000 − $20,000 = $100,000.", en: "Net rent: $120,000 − $20,000 = $100,000." },
          { es: "Rendimiento neto: $100,000 ÷ $2,000,000 = 5 %.", en: "Net yield: $100,000 ÷ $2,000,000 = 5%." },
          { es: "Con una FIBRA podría invertir solo una parte, repartirla entre muchos inmuebles y vender en bolsa si necesita liquidez.", en: "With a FIBRA she could invest only part, spread it across many properties and sell on the exchange if she needs liquidity." },
        ],
        result: {
          es: "El departamento rinde 5 % neto por rentas y concentra todo en un solo inmueble. La FIBRA ofrece liquidez y diversificación, a cambio de un precio que cambia a diario y de no tener control sobre los inmuebles.",
          en: "The apartment yields 5% net in rent and puts everything in one property. The FIBRA offers liquidity and diversification, in exchange for a price that changes daily and no control over the properties.",
        },
      },
    ],
    keyPoints: [
      { es: "Una FIBRA es un fideicomiso que compra, renta y administra inmuebles; emite CBFIs que cotizan en bolsa.", en: "A FIBRA is a trust that buys, rents out and manages properties; it issues CBFIs that trade on the exchange." },
      { es: "Con CBFIs tienes una parte del conjunto de inmuebles, no un inmueble específico.", en: "With CBFIs you own part of the whole set of properties, not a specific property." },
      { es: "Rinden por distribuciones (de las rentas) más el cambio de precio del CBFI.", en: "They return distributions (from rents) plus the change in CBFI price." },
      { es: "Revisa rendimiento por distribución y tasa de ocupación.", en: "Check the distribution yield and the occupancy rate." },
      { es: "Frente a un inmueble directo: menos dinero, más liquidez y diversificación, pero menos control y precio volátil.", en: "Versus a direct property: less money, more liquidity and diversification, but less control and a volatile price." },
    ],
    normativeNote: NOTE_FIBRAS,
    exerciseIds: ['INV-09-E1', 'INV-09-E2', 'INV-09-E3', 'INV-09-E4', 'INV-09-E5', 'INV-09-E6'],
  },

  // ───────────────────────────── INV-10 ─────────────────────────────
  {
    id: 'INV-10',
    level: 4,
    topicIds: ['INV.10'],
    title: { es: "Construcción y diversificación de portafolios", en: "Portfolio construction and diversification" },
    summary: {
      es: "Un portafolio se construye decidiendo qué porcentaje va a cada tipo de activo según tu objetivo, se diversifica para no depender de una sola apuesta y se rebalancea para mantener el plan.",
      en: "A portfolio is built by deciding what percentage goes to each asset type according to your goal, diversified so you do not depend on a single bet, and rebalanced to stay on plan.",
    },
    minutes: 16,
    objectives: [
      { es: "Definir una asignación de activos a partir del objetivo, el horizonte y la tolerancia al riesgo.", en: "Define an asset allocation based on goal, horizon and risk tolerance." },
      { es: "Explicar cómo la diversificación reduce el riesgo específico, pero no el riesgo de mercado.", en: "Explain how diversification reduces specific risk but not market risk." },
      { es: "Calcular el rendimiento ponderado de un portafolio y los movimientos para rebalancearlo.", en: "Compute a portfolio's weighted return and the trades needed to rebalance it." },
    ],
    theory: [
      {
        heading: { es: "Asignación de activos: el plan del portafolio", en: "Asset allocation: the portfolio plan" },
        body: [
          {
            es: "Un **portafolio** (o cartera) es el conjunto de todas tus inversiones. Construirlo empieza por la **asignación de activos**: decidir qué porcentaje pones en cada tipo de inversión, por ejemplo 60 % en renta variable, 30 % en deuda y 10 % en FIBRAs. Esa decisión explica gran parte de cómo se comportará tu dinero.",
            en: "A **portfolio** is the set of all your investments. Building it starts with **asset allocation**: deciding what percentage you put in each type of investment, for example 60% in equities, 30% in debt and 10% in FIBRAs. That decision explains much of how your money will behave.",
          },
          {
            es: "La asignación depende de tres cosas: tu **objetivo** (para qué es el dinero), tu **horizonte** (cuándo lo necesitas) y tu **tolerancia al riesgo** (cuánto aguantas ver caer tu saldo sin vender por miedo). Dinero que necesitas en un año no debería estar en acciones; dinero para tu retiro en 25 años puede tener más renta variable.",
            en: "The allocation depends on three things: your **goal** (what the money is for), your **horizon** (when you need it) and your **risk tolerance** (how much you can watch your balance fall without selling out of fear). Money you need in one year should not be in stocks; money for retirement in 25 years can hold more equities.",
          },
          {
            es: "Mini ejemplo: Diego ahorra para el enganche de una casa en 2 años y elige 90 % deuda de corto plazo y 10 % renta variable. Su hermana, que invierte para su retiro en 30 años, elige 70 % renta variable y 30 % deuda.",
            en: "Mini example: Diego saves for a house down payment in 2 years and chooses 90% short-term debt and 10% equities. His sister, investing for retirement in 30 years, chooses 70% equities and 30% debt.",
          },
        ],
        bullets: [
          { es: "Horizonte corto → más deuda de corto plazo y liquidez.", en: "Short horizon → more short-term debt and liquidity." },
          { es: "Horizonte largo → puede haber más renta variable.", en: "Long horizon → there can be more equities." },
          { es: "Baja tolerancia al riesgo → menos peso en activos volátiles.", en: "Low risk tolerance → less weight in volatile assets." },
          { es: "Escribe tu asignación objetivo: es tu brújula cuando el mercado se mueve.", en: "Write down your target allocation: it is your compass when the market moves." },
        ],
      },
      {
        heading: { es: "Diversificación: no todo en la misma canasta", en: "Diversification: not all eggs in one basket" },
        body: [
          {
            es: "**Diversificar** es repartir tu dinero entre inversiones que no se mueven igual, para que si una cae, otras compensen. Se puede diversificar por **tipo de activo** (acciones, deuda, inmuebles), por **sector** (bancos, consumo, energía), por **región** (México, Estados Unidos, otros países) y por **moneda** (pesos, dólares).",
            en: "To **diversify** is to spread your money across investments that do not move the same way, so that if one falls, others offset it. You can diversify by **asset type** (stocks, debt, real estate), by **sector** (banks, consumer, energy), by **region** (Mexico, United States, other countries) and by **currency** (pesos, dollars).",
          },
          {
            es: "La clave es la **correlación**: qué tanto dos inversiones suben y bajan juntas. Si tienes acciones de tres bancos mexicanos, se mueven casi igual (alta correlación) y no estás muy diversificado. Si combinas acciones con bonos del gobierno, a menudo se comportan distinto y el conjunto es más estable.",
            en: "The key is **correlation**: how much two investments rise and fall together. If you hold shares of three Mexican banks, they move almost the same (high correlation) and you are not very diversified. If you combine stocks with government bonds, they often behave differently and the whole is more stable.",
          },
          {
            es: "La diversificación reduce el **riesgo específico** (o no sistemático): lo que le pasa a una sola empresa o sector, como un fraude o una huelga. **No elimina el riesgo de mercado** (o sistemático): lo que afecta a casi todo, como una recesión o un alza general de tasas. Mini ejemplo: si una empresa de tu portafolio quiebra pero pesa 3 %, el golpe es pequeño; si pesa 60 %, es enorme.",
            en: "Diversification reduces **specific** (or unsystematic) **risk**: what happens to a single company or sector, such as fraud or a strike. **It does not eliminate market** (or systematic) **risk**: what affects almost everything, such as a recession or a general rise in rates. Mini example: if a company in your portfolio goes bankrupt but weighs 3%, the hit is small; if it weighs 60%, it is huge.",
          },
        ],
      },
      {
        heading: { es: "Rendimiento ponderado y rebalanceo", en: "Weighted return and rebalancing" },
        body: [
          {
            es: "El rendimiento de tu portafolio no es el promedio simple de tus inversiones: cada una cuenta según su **peso** (qué porcentaje del total ocupa). Se multiplica el peso de cada activo por su rendimiento y se suman los resultados.",
            en: "Your portfolio's return is not the simple average of your investments: each one counts according to its **weight** (what percentage of the total it represents). You multiply each asset's weight by its return and add the results.",
          },
          {
            es: "Con el tiempo, lo que más sube ocupa más espacio y tu portafolio se aleja del plan: puedes terminar con más riesgo del que elegiste. **Rebalancear** es vender un poco de lo que creció de más y comprar de lo que quedó abajo para volver a tu asignación objetivo. Se hace cada cierto tiempo (por ejemplo, una vez al año) o cuando un peso se sale de un margen (por ejemplo, ±5 puntos).",
            en: "Over time, what rises most takes up more space and your portfolio drifts from the plan: you can end up with more risk than you chose. **Rebalancing** means selling some of what grew too much and buying what fell behind to return to your target allocation. It is done periodically (for example, once a year) or when a weight moves outside a band (for example, ±5 points).",
          },
          {
            es: "Mini ejemplo: con 50 % en acciones que rinden 10 % y 50 % en deuda que rinde 6 %, el portafolio rinde 0.5 × 10 % + 0.5 × 6 % = 8 %.",
            en: "Mini example: with 50% in stocks returning 10% and 50% in debt returning 6%, the portfolio returns 0.5 × 10% + 0.5 × 6% = 8%.",
          },
        ],
        formula: "Rendimiento del portafolio = Σ (peso del activo × rendimiento del activo)",
      },
    ],
    examples: [
      {
        title: { es: "Rendimiento ponderado de un portafolio", en: "Weighted return of a portfolio" },
        problem: {
          es: "El portafolio de Ernesto tiene 60 % en renta variable, 30 % en deuda y 10 % en FIBRAs. En el año rindieron 10 %, 6 % y 8 %, respectivamente (cifras hipotéticas). ¿Cuánto rindió su portafolio?",
          en: "Ernesto's portfolio has 60% in equities, 30% in debt and 10% in FIBRAs. During the year they returned 10%, 6% and 8%, respectively (hypothetical figures). What did his portfolio return?",
        },
        steps: [
          { es: "Renta variable: 0.60 × 10 % = 6.0 %.", en: "Equities: 0.60 × 10% = 6.0%." },
          { es: "Deuda: 0.30 × 6 % = 1.8 %.", en: "Debt: 0.30 × 6% = 1.8%." },
          { es: "FIBRAs: 0.10 × 8 % = 0.8 %.", en: "FIBRAs: 0.10 × 8% = 0.8%." },
          { es: "Suma: 6.0 % + 1.8 % + 0.8 % = 8.6 %.", en: "Sum: 6.0% + 1.8% + 0.8% = 8.6%." },
        ],
        result: {
          es: "El portafolio rindió 8.6 %. El promedio simple (8 %) sería incorrecto porque ignora que la renta variable pesa el doble que la deuda.",
          en: "The portfolio returned 8.6%. The simple average (8%) would be wrong because it ignores that equities weigh twice as much as debt.",
        },
      },
      {
        title: { es: "Rebalancear un portafolio 70/30", en: "Rebalancing a 70/30 portfolio" },
        problem: {
          es: "Lucía invirtió $100,000 con objetivo 70 % acciones y 30 % deuda ($70,000 y $30,000). Al año, las acciones valen $84,000 y la deuda $31,000. ¿Qué debe mover para volver a 70/30?",
          en: "Lucía invested $100,000 with a 70% stocks and 30% debt target ($70,000 and $30,000). After a year, stocks are worth $84,000 and debt $31,000. What must she move to return to 70/30?",
        },
        steps: [
          { es: "Valor total: $84,000 + $31,000 = $115,000.", en: "Total value: $84,000 + $31,000 = $115,000." },
          { es: "Peso actual de acciones: $84,000 ÷ $115,000 ≈ 73 %, por encima del 70 %.", en: "Current stock weight: $84,000 ÷ $115,000 ≈ 73%, above 70%." },
          { es: "Objetivo en acciones: 0.70 × $115,000 = $80,500; vender $84,000 − $80,500 = $3,500.", en: "Stock target: 0.70 × $115,000 = $80,500; sell $84,000 − $80,500 = $3,500." },
          { es: "Comprar $3,500 de deuda: $31,000 + $3,500 = $34,500 = 30 % de $115,000.", en: "Buy $3,500 of debt: $31,000 + $3,500 = $34,500 = 30% of $115,000." },
        ],
        result: {
          es: "Lucía vende $3,500 de acciones y compra $3,500 de deuda. Así vuelve al nivel de riesgo que eligió, y de paso vende caro y compra lo que se quedó atrás.",
          en: "Lucía sells $3,500 of stocks and buys $3,500 of debt. This returns her to the risk level she chose, and along the way she sells high and buys what fell behind.",
        },
      },
    ],
    keyPoints: [
      { es: "La asignación de activos es el porcentaje que va a cada tipo de inversión; depende de objetivo, horizonte y tolerancia al riesgo.", en: "Asset allocation is the percentage going to each investment type; it depends on goal, horizon and risk tolerance." },
      { es: "Diversifica por tipo de activo, sector, región y moneda.", en: "Diversify by asset type, sector, region and currency." },
      { es: "Lo que importa es la correlación: activos que no se mueven igual se compensan.", en: "What matters is correlation: assets that do not move the same way offset each other." },
      { es: "Diversificar reduce el riesgo específico, no el riesgo de mercado.", en: "Diversifying reduces specific risk, not market risk." },
      { es: "Rendimiento del portafolio = suma de peso × rendimiento; rebalancea para volver a tu plan.", en: "Portfolio return = sum of weight × return; rebalance to get back to your plan." },
    ],
    exerciseIds: ['INV-10-E1', 'INV-10-E2', 'INV-10-E3', 'INV-10-E4', 'INV-10-E5', 'INV-10-E6'],
  },

  // ───────────────────────────── INV-11 ─────────────────────────────
  {
    id: 'INV-11',
    level: 4,
    topicIds: ['INV.11'],
    title: { es: "Análisis fundamental", en: "Fundamental analysis" },
    summary: {
      es: "El análisis fundamental estudia el negocio y los números de una empresa para estimar cuánto vale y compararlo con su precio en bolsa.",
      en: "Fundamental analysis studies a company's business and numbers to estimate what it is worth and compare that with its market price.",
    },
    minutes: 17,
    objectives: [
      { es: "Explicar qué busca el análisis fundamental y qué información usa.", en: "Explain what fundamental analysis seeks and what information it uses." },
      { es: "Calcular e interpretar UPA, P/U, P/VL, ROE y margen neto.", en: "Compute and interpret EPS, P/E, P/B, ROE and net margin." },
      { es: "Estimar un valor por múltiplos y su margen de seguridad frente al precio.", en: "Estimate a value using multiples and its margin of safety against the price." },
    ],
    theory: [
      {
        heading: { es: "Precio no es lo mismo que valor", en: "Price is not the same as value" },
        body: [
          {
            es: "El **análisis fundamental** busca responder: ¿cuánto vale realmente esta empresa? Para eso estudia su **negocio** (qué vende, a quién, qué ventaja tiene frente a la competencia), su **administración** y sus **números** (ventas, utilidades, deudas, flujo de efectivo). El **precio** es lo que pagas hoy en bolsa; el **valor** es lo que, según tu análisis, vale la empresa.",
            en: "**Fundamental analysis** tries to answer: how much is this company really worth? To do so it studies its **business** (what it sells, to whom, what edge it has over competitors), its **management** and its **numbers** (sales, profits, debt, cash flow). The **price** is what you pay today on the exchange; the **value** is what, according to your analysis, the company is worth.",
          },
          {
            es: "Hay dos rutas. **De arriba hacia abajo** (top-down): empiezas por la economía (crecimiento, tasas, tipo de cambio), luego el sector y al final la empresa. **De abajo hacia arriba** (bottom-up): empiezas por la empresa y sus números. Ambas se complementan.",
            en: "There are two routes. **Top-down**: you start with the economy (growth, rates, exchange rate), then the sector and finally the company. **Bottom-up**: you start with the company and its numbers. Both complement each other.",
          },
          {
            es: "La materia prima son los **estados financieros** que las empresas en bolsa publican periódicamente: estado de resultados (ventas y utilidades), balance (lo que tiene y lo que debe) y flujo de efectivo. Mini ejemplo: una cadena de farmacias que crece en ventas, tiene poca deuda y una marca conocida tiene buenos **fundamentales**.",
            en: "The raw material is the **financial statements** that listed companies publish periodically: income statement (sales and profits), balance sheet (what it owns and owes) and cash flow statement. Mini example: a pharmacy chain with growing sales, little debt and a well-known brand has good **fundamentals**.",
          },
        ],
      },
      {
        heading: { es: "Las razones financieras clave", en: "Key financial ratios" },
        body: [
          {
            es: "Una **razón financiera** divide un dato entre otro para poder comparar empresas de tamaños distintos. La **utilidad por acción (UPA)** reparte la utilidad neta entre las acciones: cuánto ganó la empresa por cada acción. El **múltiplo precio/utilidad (P/U)** te dice cuántos pesos pagas por cada peso de utilidad anual.",
            en: "A **financial ratio** divides one figure by another so you can compare companies of different sizes. **Earnings per share (EPS)** spreads net profit across the shares: how much the company earned per share. The **price/earnings multiple (P/E)** tells you how many pesos you pay for each peso of annual profit.",
          },
          {
            es: "El **precio/valor en libros (P/VL)** compara el precio con el capital contable por acción. El **ROE** (rentabilidad sobre el capital) mide cuánta utilidad genera la empresa con el dinero de sus accionistas. El **margen neto** dice cuántos centavos de cada peso vendido quedan como utilidad. La razón **deuda/capital** muestra qué tan endeudada está.",
            en: "**Price/book value (P/B)** compares price with equity per share. **ROE** (return on equity) measures how much profit the company generates with its shareholders' money. **Net margin** tells how many cents of each peso sold remain as profit. The **debt/equity** ratio shows how indebted it is.",
          },
          {
            es: "Ninguna razón sirve sola: compárala con **otras empresas del mismo sector** y con la **historia** de la propia empresa. Mini ejemplo: un P/U de 25 puede ser normal para una empresa de tecnología que crece rápido y caro para un banco maduro.",
            en: "No ratio works alone: compare it with **other companies in the same sector** and with the company's own **history**. Mini example: a P/E of 25 may be normal for a fast-growing tech company and expensive for a mature bank.",
          },
        ],
        bullets: [
          { es: "UPA = Utilidad neta ÷ Acciones en circulación", en: "EPS = Net profit ÷ Shares outstanding" },
          { es: "P/U = Precio por acción ÷ UPA", en: "P/E = Price per share ÷ EPS" },
          { es: "P/VL = Precio por acción ÷ (Capital contable ÷ Acciones)", en: "P/B = Price per share ÷ (Equity ÷ Shares)" },
          { es: "ROE = Utilidad neta ÷ Capital contable × 100", en: "ROE = Net profit ÷ Equity × 100" },
          { es: "Margen neto = Utilidad neta ÷ Ventas × 100", en: "Net margin = Net profit ÷ Sales × 100" },
        ],
      },
      {
        heading: { es: "Valor intrínseco y margen de seguridad", en: "Intrinsic value and margin of safety" },
        body: [
          {
            es: "El **valor intrínseco** es tu estimación de lo que vale una acción. Una forma sencilla de estimarlo es con **múltiplos**: si las empresas parecidas cotizan a un P/U de 14 y esperas una UPA de $3, una estimación razonable es 14 × $3 = $42 por acción. Existen métodos más completos (como descontar flujos futuros), pero todos dependen de supuestos.",
            en: "**Intrinsic value** is your estimate of what a share is worth. A simple way to estimate it is with **multiples**: if similar companies trade at a P/E of 14 and you expect EPS of $3, a reasonable estimate is 14 × $3 = $42 per share. More complete methods exist (such as discounting future cash flows), but all depend on assumptions.",
          },
          {
            es: "Como tu estimación puede fallar, se usa un **margen de seguridad**: comprar solo cuando el precio está suficientemente por debajo del valor estimado. Es como comprar un coche usado: aunque el vendedor diga que vale $150,000, tú ofreces menos para cubrir fallas que no ves.",
            en: "Because your estimate may be wrong, you use a **margin of safety**: buying only when the price is sufficiently below the estimated value. It is like buying a used car: even if the seller says it is worth $150,000, you offer less to cover faults you cannot see.",
          },
          {
            es: "Mini ejemplo: si estimas un valor de $60 y la acción cotiza en $45, tu margen de seguridad es ($60 − $45) ÷ $60 = 25 %.",
            en: "Mini example: if you estimate a value of $60 and the share trades at $45, your margin of safety is ($60 − $45) ÷ $60 = 25%.",
          },
        ],
        formula: "Valor estimado = UPA esperada × P/U de referencia   |   Margen de seguridad = (Valor estimado − Precio) ÷ Valor estimado × 100",
      },
    ],
    examples: [
      {
        title: { es: "UPA y P/U frente al sector", en: "EPS and P/E versus the sector" },
        problem: {
          es: "Una empresa de alimentos tuvo una utilidad neta de $120 millones y tiene 60 millones de acciones. Su acción cotiza en $30. Las empresas parecidas cotizan a un P/U promedio de 12. ¿Cuál es su UPA, su P/U y qué indica la comparación? (Cifras hipotéticas.)",
          en: "A food company had net profit of $120 million and has 60 million shares. Its share trades at $30. Similar companies trade at an average P/E of 12. What are its EPS and P/E, and what does the comparison suggest? (Hypothetical figures.)",
        },
        steps: [
          { es: "UPA: $120,000,000 ÷ 60,000,000 = $2.", en: "EPS: $120,000,000 ÷ 60,000,000 = $2." },
          { es: "P/U: $30 ÷ $2 = 15 veces.", en: "P/E: $30 ÷ $2 = 15 times." },
          { es: "Comparación: 15 contra 12 del sector; pagas más por cada peso de utilidad.", en: "Comparison: 15 versus the sector's 12; you pay more for each peso of profit." },
        ],
        result: {
          es: "La acción cotiza más cara que sus pares. Eso no significa que sea mala compra: puede justificarse si crece más rápido o tiene menos deuda, pero hay que investigar por qué.",
          en: "The share trades more expensively than its peers. That does not mean it is a bad buy: it may be justified if it grows faster or has less debt, but you need to investigate why.",
        },
      },
      {
        title: { es: "Valor por múltiplos y margen de seguridad", en: "Value by multiples and margin of safety" },
        problem: {
          es: "Esperas que una empresa de autopartes tenga una UPA de $3.00 el próximo año. Su sector cotiza a un P/U de 14. La acción está en $35. Estima su valor y su margen de seguridad. (Cifras hipotéticas.)",
          en: "You expect an auto parts company to have EPS of $3.00 next year. Its sector trades at a P/E of 14. The share is at $35. Estimate its value and margin of safety. (Hypothetical figures.)",
        },
        steps: [
          { es: "Valor estimado: 14 × $3.00 = $42.", en: "Estimated value: 14 × $3.00 = $42." },
          { es: "Diferencia: $42 − $35 = $7.", en: "Difference: $42 − $35 = $7." },
          { es: "Margen de seguridad: $7 ÷ $42 ≈ 16.7 %.", en: "Margin of safety: $7 ÷ $42 ≈ 16.7%." },
        ],
        result: {
          es: "Según este cálculo la acción vale unos $42 y cotiza con un margen de seguridad de 16.7 %. Si tu regla personal exige al menos 20 %, todavía esperarías un mejor precio.",
          en: "According to this calculation the share is worth about $42 and trades with a 16.7% margin of safety. If your personal rule requires at least 20%, you would still wait for a better price.",
        },
      },
    ],
    keyPoints: [
      { es: "El análisis fundamental compara el valor estimado de una empresa con su precio.", en: "Fundamental analysis compares a company's estimated value with its price." },
      { es: "Estudia el negocio, la administración y los estados financieros (top-down o bottom-up).", en: "It studies the business, management and financial statements (top-down or bottom-up)." },
      { es: "UPA, P/U, P/VL, ROE, margen neto y deuda/capital son razones básicas.", en: "EPS, P/E, P/B, ROE, net margin and debt/equity are basic ratios." },
      { es: "Las razones se comparan contra empresas del mismo sector y contra la historia.", en: "Ratios are compared against companies in the same sector and against history." },
      { es: "El margen de seguridad protege contra errores en tu estimación de valor.", en: "The margin of safety protects against errors in your value estimate." },
    ],
    normativeNote: NOTE_REPORTS,
    exerciseIds: ['INV-11-E1', 'INV-11-E2', 'INV-11-E3', 'INV-11-E4', 'INV-11-E5', 'INV-11-E6'],
  },

  // ───────────────────────────── INV-12 ─────────────────────────────
  {
    id: 'INV-12',
    level: 4,
    topicIds: ['INV.12'],
    title: { es: "Introducción al análisis técnico", en: "Introduction to technical analysis" },
    summary: {
      es: "El análisis técnico estudia las gráficas de precio y volumen para identificar tendencias, soportes y resistencias; es una herramienta de probabilidades, no una bola de cristal.",
      en: "Technical analysis studies price and volume charts to identify trends, support and resistance; it is a tool of probabilities, not a crystal ball.",
    },
    minutes: 15,
    objectives: [
      { es: "Leer una vela japonesa e identificar si es alcista o bajista.", en: "Read a candlestick and identify whether it is bullish or bearish." },
      { es: "Reconocer tendencias, soportes y resistencias en una gráfica.", en: "Recognize trends, support and resistance on a chart." },
      { es: "Calcular una media móvil simple, interpretar el RSI y fijar un stop loss.", en: "Compute a simple moving average, interpret the RSI and set a stop loss." },
    ],
    theory: [
      {
        heading: { es: "Qué es el análisis técnico y cómo leer una vela", en: "What technical analysis is and how to read a candle" },
        body: [
          {
            es: "El **análisis técnico** estudia el **comportamiento del precio y del volumen** en una gráfica para estimar hacia dónde es más probable que se mueva. A diferencia del análisis fundamental, no pregunta cuánto vale la empresa, sino **cómo se están comportando compradores y vendedores**.",
            en: "**Technical analysis** studies **price and volume behavior** on a chart to estimate where the price is more likely to move. Unlike fundamental analysis, it does not ask what the company is worth, but **how buyers and sellers are behaving**.",
          },
          {
            es: "Se basa en tres ideas: el precio ya refleja la información conocida, los precios se mueven en **tendencias** y ciertos patrones de comportamiento **se repiten** porque las emociones de la gente (miedo, euforia) se repiten.",
            en: "It rests on three ideas: price already reflects known information, prices move in **trends**, and certain behavior patterns **repeat** because people's emotions (fear, euphoria) repeat.",
          },
          {
            es: "La gráfica más usada es la de **velas japonesas**. Cada vela resume un periodo (un día, una hora, una semana) con cuatro precios: **apertura, máximo, mínimo y cierre**. El **cuerpo** va de la apertura al cierre; las **mechas** llegan al máximo y al mínimo. Si cierra arriba de donde abrió es **alcista** (suele pintarse verde o blanca); si cierra abajo, **bajista** (roja o negra).",
            en: "The most used chart is the **candlestick** chart. Each candle summarizes a period (a day, an hour, a week) with four prices: **open, high, low and close**. The **body** goes from open to close; the **wicks** reach the high and low. If it closes above where it opened it is **bullish** (usually green or white); if it closes below, **bearish** (red or black).",
          },
          {
            es: "Mini ejemplo: una acción abre en $50, sube hasta $54, baja hasta $49 y cierra en $53. Es una vela alcista con cuerpo de $3 y rango total de $5.",
            en: "Mini example: a share opens at $50, rises to $54, falls to $49 and closes at $53. It is a bullish candle with a $3 body and a total range of $5.",
          },
        ],
      },
      {
        heading: { es: "Tendencias, soportes y resistencias", en: "Trends, support and resistance" },
        body: [
          {
            es: "Una **tendencia alcista** forma máximos y mínimos cada vez más altos, como una escalera que sube. Una **bajista**, máximos y mínimos cada vez más bajos. Si el precio se mueve de lado sin dirección clara se dice que está en **rango** o lateral.",
            en: "An **uptrend** forms ever higher highs and lows, like a staircase going up. A **downtrend**, ever lower highs and lows. If the price moves sideways without a clear direction it is said to be **range-bound** or sideways.",
          },
          {
            es: "Un **soporte** es un nivel de precio donde, en el pasado, aparecieron compradores y el precio dejó de caer: funciona como un piso. Una **resistencia** es un nivel donde aparecieron vendedores y el precio dejó de subir: funciona como un techo. Cuando el precio rompe una resistencia con fuerza, a veces esa resistencia se convierte en el nuevo soporte.",
            en: "**Support** is a price level where, in the past, buyers appeared and the price stopped falling: it works like a floor. **Resistance** is a level where sellers appeared and the price stopped rising: it works like a ceiling. When the price breaks resistance strongly, that resistance sometimes becomes the new support.",
          },
          {
            es: "El **volumen** (cuántos títulos se negociaron) confirma los movimientos: una subida con mucho volumen indica más convicción que una con poco. Mini ejemplo: si una acción rebotó tres veces cerca de $80, ese nivel es un soporte; si un día cae a $76 con volumen alto, la ruptura es una señal de debilidad.",
            en: "**Volume** (how many securities were traded) confirms moves: a rise on high volume shows more conviction than one on low volume. Mini example: if a share bounced three times near $80, that level is support; if one day it falls to $76 on high volume, the break is a sign of weakness.",
          },
        ],
        bullets: [
          { es: "Alcista: máximos y mínimos crecientes.", en: "Uptrend: rising highs and lows." },
          { es: "Bajista: máximos y mínimos decrecientes.", en: "Downtrend: falling highs and lows." },
          { es: "Soporte: piso donde suelen aparecer compradores.", en: "Support: floor where buyers tend to appear." },
          { es: "Resistencia: techo donde suelen aparecer vendedores.", en: "Resistance: ceiling where sellers tend to appear." },
        ],
      },
      {
        heading: { es: "Indicadores básicos y control del riesgo", en: "Basic indicators and risk control" },
        body: [
          {
            es: "La **media móvil simple** (SMA) es el promedio de los últimos N cierres; se recalcula cada periodo y suaviza el ruido para ver la tendencia. Si el precio está por encima de su media móvil, la tendencia de ese plazo suele considerarse alcista. Cuando una media corta cruza hacia arriba a una larga, muchos lo leen como señal alcista.",
            en: "The **simple moving average** (SMA) is the average of the last N closes; it is recalculated each period and smooths out noise to show the trend. If the price is above its moving average, that time frame's trend is usually considered bullish. When a short average crosses above a long one, many read it as a bullish signal.",
          },
          {
            es: "El **RSI** (índice de fuerza relativa) es un indicador que va de 0 a 100 y mide la fuerza de las subidas frente a las bajadas recientes. Por convención, arriba de 70 se considera **sobrecompra** (subió muy rápido y podría corregir) y abajo de 30, **sobreventa**. No es una orden de compra o venta, solo una alerta.",
            en: "The **RSI** (relative strength index) is an indicator ranging from 0 to 100 that measures the strength of recent gains against recent losses. By convention, above 70 is considered **overbought** (it rose very fast and could correct) and below 30, **oversold**. It is not a buy or sell order, just an alert.",
          },
          {
            es: "Las señales técnicas **fallan con frecuencia**. Por eso se acompañan de un **stop loss**: una orden para vender si el precio cae a un nivel que definiste de antemano, y así limitar la pérdida. Mini ejemplo: compras en $100 y pones el stop loss en $95; si se activa, pierdes alrededor de $5 por acción y no más (salvo saltos bruscos de precio).",
            en: "Technical signals **fail frequently**. That is why they are paired with a **stop loss**: an order to sell if the price falls to a level you defined in advance, to limit the loss. Mini example: you buy at $100 and set the stop loss at $95; if it triggers, you lose about $5 per share and no more (barring sharp price gaps).",
          },
        ],
        formula: "SMA(N) = (Suma de los últimos N cierres) ÷ N   |   Precio de stop = Precio de compra × (1 − % de pérdida máxima)",
      },
    ],
    examples: [
      {
        title: { es: "Media móvil simple de 5 días", en: "5-day simple moving average" },
        problem: {
          es: "Los cierres de una acción en los últimos 5 días fueron $20.00, $21.00, $22.00, $21.50 y $23.00. Calcula la media móvil simple de 5 días y di si el último cierre está arriba o abajo de ella.",
          en: "A share's closes over the last 5 days were $20.00, $21.00, $22.00, $21.50 and $23.00. Compute the 5-day simple moving average and say whether the last close is above or below it.",
        },
        steps: [
          { es: "Suma: 20 + 21 + 22 + 21.5 + 23 = 107.5.", en: "Sum: 20 + 21 + 22 + 21.5 + 23 = 107.5." },
          { es: "SMA(5): 107.5 ÷ 5 = $21.50.", en: "SMA(5): 107.5 ÷ 5 = $21.50." },
          { es: "Último cierre: $23.00 > $21.50.", en: "Last close: $23.00 > $21.50." },
        ],
        result: {
          es: "La SMA de 5 días es $21.50 y el precio está por encima: en ese plazo corto el sesgo es alcista. Mañana se quita el $20.00 y se agrega el nuevo cierre.",
          en: "The 5-day SMA is $21.50 and the price is above it: over that short time frame the bias is bullish. Tomorrow the $20.00 drops out and the new close is added.",
        },
      },
      {
        title: { es: "Plan de entrada con stop loss", en: "Entry plan with a stop loss" },
        problem: {
          es: "Raúl ve que una acción rebotó varias veces en un soporte cerca de $60 y la compra en $62 (200 acciones). Decide salir si el precio cae 5 % desde su compra. ¿Dónde pone el stop loss y cuánto perdería como máximo aproximado? (Sin comisiones.)",
          en: "Raúl sees that a share bounced several times off support near $60 and buys it at $62 (200 shares). He decides to exit if the price falls 5% from his purchase. Where does he set the stop loss and roughly what is his maximum loss? (No fees.)",
        },
        steps: [
          { es: "Precio de stop: $62 × (1 − 0.05) = $58.90.", en: "Stop price: $62 × (1 − 0.05) = $58.90." },
          { es: "Queda por debajo del soporte de $60: solo se activa si el soporte se rompe.", en: "It sits below the $60 support: it only triggers if support breaks." },
          { es: "Pérdida por acción: $62 − $58.90 = $3.10; total: $3.10 × 200 = $620.", en: "Loss per share: $62 − $58.90 = $3.10; total: $3.10 × 200 = $620." },
        ],
        result: {
          es: "Stop loss en $58.90 con una pérdida máxima aproximada de $620. Raúl sabe cuánto arriesga antes de entrar, que es la parte más importante del plan.",
          en: "Stop loss at $58.90 with an approximate maximum loss of $620. Raúl knows how much he risks before entering, which is the most important part of the plan.",
        },
      },
    ],
    keyPoints: [
      { es: "El análisis técnico estudia precio y volumen para estimar probabilidades, no certezas.", en: "Technical analysis studies price and volume to estimate probabilities, not certainties." },
      { es: "Una vela muestra apertura, máximo, mínimo y cierre; alcista si cierra arriba de la apertura.", en: "A candle shows open, high, low and close; bullish if it closes above the open." },
      { es: "Tendencias: máximos y mínimos crecientes (alcista) o decrecientes (bajista).", en: "Trends: rising highs and lows (up) or falling ones (down)." },
      { es: "Soporte es un piso y resistencia un techo; el volumen confirma las rupturas.", en: "Support is a floor and resistance a ceiling; volume confirms breakouts." },
      { es: "SMA y RSI son alertas útiles; usa siempre un stop loss para limitar pérdidas.", en: "SMA and RSI are useful alerts; always use a stop loss to limit losses." },
    ],
    exerciseIds: ['INV-12-E1', 'INV-12-E2', 'INV-12-E3', 'INV-12-E4', 'INV-12-E5', 'INV-12-E6'],
  },
]

export const exercises: Exercise[] = [
  // ═════════════════════════ INV-07 ═════════════════════════
  {
    id: 'INV-07-E1',
    level: 4,
    module: 'INV-07',
    kind: 'mcq',
    flavor: 'concept',
    prompt: {
      es: "Al comprar acciones de una empresa que cotiza en bolsa, ¿qué obtienes?",
      en: "When you buy shares of a listed company, what do you get?",
    },
    options: [
      { id: 'INV-07-E1-a', text: { es: "Un préstamo a la empresa con una tasa de interés fija", en: "A loan to the company at a fixed interest rate" } },
      { id: 'INV-07-E1-b', text: { es: "Una parte de la propiedad de la empresa, con derecho a sus utilidades si se reparten", en: "A part of the company's ownership, with a right to its profits if they are paid out" } },
      { id: 'INV-07-E1-c', text: { es: "Un depósito garantizado por el gobierno", en: "A government-guaranteed deposit" } },
      { id: 'INV-07-E1-d', text: { es: "El derecho a usar los productos de la empresa sin costo", en: "The right to use the company's products for free" } },
    ],
    correctOptionId: 'INV-07-E1-b',
    explanation: {
      es: "Una acción te hace socio: dueño de una parte del capital, con derecho a dividendos si la asamblea los decreta. Prestar a tasa fija es lo que haces al comprar un bono, y las acciones no tienen garantía del gobierno. Error común: pensar que la acción paga un interés fijo como un pagaré.",
      en: "A share makes you a partner: owner of part of the capital, entitled to dividends if the shareholders' meeting declares them. Lending at a fixed rate is what you do when you buy a bond, and shares carry no government guarantee. Common mistake: thinking a share pays fixed interest like a promissory note.",
    },
    difficulty: 1,
    points: 10,
    competency: 'equities',
  },
  {
    id: 'INV-07-E2',
    level: 4,
    module: 'INV-07',
    kind: 'truefalse',
    flavor: 'concept',
    prompt: {
      es: "Toda empresa que cotiza en bolsa está obligada a pagar dividendos cada año a sus accionistas.",
      en: "Every listed company is required to pay dividends to its shareholders every year.",
    },
    answer: false,
    explanation: {
      es: "Falso. Pagar dividendos es una decisión de la empresa y sus accionistas; muchas empresas en crecimiento prefieren reinvertir sus utilidades y otras no reparten porque tuvieron pérdidas. Error común: confundir el dividendo con el interés garantizado de un instrumento de deuda.",
      en: "False. Paying dividends is a decision of the company and its shareholders; many growing companies prefer to reinvest their profits and others pay nothing because they had losses. Common mistake: confusing a dividend with the guaranteed interest of a debt instrument.",
    },
    difficulty: 1,
    points: 10,
    competency: 'equities',
  },
  {
    id: 'INV-07-E3',
    level: 4,
    module: 'INV-07',
    kind: 'numeric',
    flavor: 'case',
    context: {
      es: "Jorge compró 200 acciones a $25 cada una. En el año recibió un dividendo de $0.50 por acción y luego vendió todas a $27.50. Sin comisiones ni impuestos.",
      en: "Jorge bought 200 shares at $25 each. During the year he received a dividend of $0.50 per share and then sold them all at $27.50. No fees or taxes.",
    },
    prompt: {
      es: "¿Cuál fue el rendimiento total de Jorge en sus acciones? Responde en porcentaje.",
      en: "What was Jorge's total return on his shares? Answer as a percentage.",
    },
    answer: 12,
    unit: '%',
    decimals: 1,
    tolerance: { abs: 0.05 },
    explanation: {
      es: "Inversión: 200 × 25 = $5,000. Ganancia de precio: (27.50 − 25) × 200 = $500. Dividendos: 0.50 × 200 = $100. Total: $600 ÷ $5,000 = 12 %. Error común: olvidar el dividendo y responder 10 %.",
      en: "Investment: 200 × 25 = $5,000. Price gain: (27.50 − 25) × 200 = $500. Dividends: 0.50 × 200 = $100. Total: $600 ÷ $5,000 = 12%. Common mistake: forgetting the dividend and answering 10%.",
    },
    difficulty: 2,
    points: 15,
    competency: 'equities',
  },
  {
    id: 'INV-07-E4',
    level: 4,
    module: 'INV-07',
    kind: 'classify',
    flavor: 'concept',
    prompt: {
      es: "Clasifica cada situación de un accionista según la fuente de su resultado.",
      en: "Classify each shareholder situation by the source of its result.",
    },
    categories: [
      { id: 'INV-07-E4-c1', label: { es: "Ganancia de capital", en: "Capital gain" } },
      { id: 'INV-07-E4-c2', label: { es: "Dividendo", en: "Dividend" } },
      { id: 'INV-07-E4-c3', label: { es: "Minusvalía (pérdida de capital)", en: "Capital loss" } },
    ],
    items: [
      { id: 'INV-07-E4-i1', label: { es: "Compraste en $80 y vendiste en $95", en: "You bought at $80 and sold at $95" }, correctCategoryId: 'INV-07-E4-c1' },
      { id: 'INV-07-E4-i2', label: { es: "La empresa te depositó $2 por acción de sus utilidades", en: "The company deposited $2 per share from its profits" }, correctCategoryId: 'INV-07-E4-c2' },
      { id: 'INV-07-E4-i3', label: { es: "Compraste en $40 y vendiste en $33", en: "You bought at $40 and sold at $33" }, correctCategoryId: 'INV-07-E4-c3' },
      { id: 'INV-07-E4-i4', label: { es: "La asamblea acordó repartir $500 millones entre los accionistas", en: "The shareholders' meeting agreed to pay out $500 million to shareholders" }, correctCategoryId: 'INV-07-E4-c2' },
      { id: 'INV-07-E4-i5', label: { es: "Vendiste tus acciones al doble de lo que pagaste", en: "You sold your shares at double what you paid" }, correctCategoryId: 'INV-07-E4-c1' },
      { id: 'INV-07-E4-i6', label: { es: "Tuviste que vender en plena caída, por debajo de tu precio de compra", en: "You had to sell during a drop, below your purchase price" }, correctCategoryId: 'INV-07-E4-c3' },
    ],
    explanation: {
      es: "Ganancia de capital: vender arriba del precio de compra. Dividendo: reparto de utilidades en efectivo que decide la empresa. Minusvalía: vender abajo del precio de compra. Error común: creer que el dividendo es una ganancia de capital; no depende de que vendas.",
      en: "Capital gain: selling above the purchase price. Dividend: a cash distribution of profits decided by the company. Capital loss: selling below the purchase price. Common mistake: thinking the dividend is a capital gain; it does not depend on selling.",
    },
    difficulty: 1,
    points: 10,
    competency: 'equities',
  },
  {
    id: 'INV-07-E5',
    level: 4,
    module: 'INV-07',
    kind: 'mcq',
    flavor: 'case',
    context: {
      es: "Fernanda quiere comprar acciones de una empresa que hoy cotiza alrededor de $52. Su presupuesto le permite pagar como máximo $50 por acción y no tiene prisa.",
      en: "Fernanda wants to buy shares of a company currently trading around $52. Her budget lets her pay at most $50 per share and she is in no hurry.",
    },
    prompt: {
      es: "¿Qué tipo de orden le conviene enviar a su casa de bolsa?",
      en: "What type of order should she send to her brokerage firm?",
    },
    options: [
      { id: 'INV-07-E5-a', text: { es: "Una orden a mercado, para comprar de inmediato", en: "A market order, to buy immediately" } },
      { id: 'INV-07-E5-b', text: { es: "Una orden limitada de compra a $50", en: "A buy limit order at $50" } },
      { id: 'INV-07-E5-c', text: { es: "Una orden de venta a $52", en: "A sell order at $52" } },
      { id: 'INV-07-E5-d', text: { es: "Ninguna: en México no se pueden fijar precios al comprar acciones", en: "None: in Mexico you cannot set prices when buying shares" } },
    ],
    correctOptionId: 'INV-07-E5-b',
    explanation: {
      es: "La orden limitada fija el precio máximo que paga: solo se ejecuta si el precio baja a $50 o menos. Una orden a mercado compraría ya, cerca de $52, por encima de su límite. La desventaja de la limitada es que puede no ejecutarse. Error común: pensar que la orden a mercado garantiza el precio que ves en pantalla.",
      en: "The limit order sets the maximum price she pays: it only executes if the price falls to $50 or less. A market order would buy now, around $52, above her limit. The drawback of a limit order is that it may not execute. Common mistake: thinking a market order guarantees the price shown on screen.",
    },
    difficulty: 2,
    points: 15,
    competency: 'equities',
  },
  {
    id: 'INV-07-E6',
    level: 4,
    module: 'INV-07',
    kind: 'fields',
    flavor: 'case',
    context: {
      es: "Una empresa de autoservicio tiene 10,000,000 de acciones en circulación que cotizan en $80. En los últimos 12 meses pagó dividendos por $2.40 por acción (cifras hipotéticas).",
      en: "A retail company has 10,000,000 shares outstanding trading at $80. Over the last 12 months it paid dividends of $2.40 per share (hypothetical figures).",
    },
    prompt: {
      es: "Calcula la capitalización de mercado de la empresa y su rendimiento por dividendo.",
      en: "Compute the company's market capitalization and its dividend yield.",
    },
    fields: [
      { id: 'f1', label: { es: "Capitalización de mercado (pesos)", en: "Market capitalization (pesos)" }, answer: 800000000, unit: 'MXN', tolerance: { abs: 0.5 } },
      { id: 'f2', label: { es: "Rendimiento por dividendo (%)", en: "Dividend yield (%)" }, answer: 3, unit: '%', tolerance: { abs: 0.05 } },
    ],
    explanation: {
      es: "Capitalización: 10,000,000 × $80 = $800,000,000. Rendimiento por dividendo: $2.40 ÷ $80 = 0.03 = 3 %. Error común: dividir el dividendo entre la capitalización total en lugar de entre el precio de una acción.",
      en: "Capitalization: 10,000,000 × $80 = $800,000,000. Dividend yield: $2.40 ÷ $80 = 0.03 = 3%. Common mistake: dividing the dividend by total capitalization instead of by the price of one share.",
    },
    difficulty: 2,
    points: 15,
    competency: 'equities',
  },

  // ═════════════════════════ INV-08 ═════════════════════════
  {
    id: 'INV-08-E1',
    level: 4,
    module: 'INV-08',
    kind: 'mcq',
    flavor: 'concept',
    prompt: {
      es: "¿Qué es un ETF?",
      en: "What is an ETF?",
    },
    options: [
      { id: 'INV-08-E1-a', text: { es: "Una cuenta de ahorro bancaria con tasa fija", en: "A bank savings account with a fixed rate" } },
      { id: 'INV-08-E1-b', text: { es: "La acción de una sola empresa tecnológica", en: "The share of a single technology company" } },
      { id: 'INV-08-E1-c', text: { es: "Un fondo que contiene una canasta de valores y cotiza en bolsa como una acción", en: "A fund holding a basket of securities that trades on an exchange like a stock" } },
      { id: 'INV-08-E1-d', text: { es: "Un seguro que garantiza que no pierdas dinero", en: "An insurance policy guaranteeing you will not lose money" } },
    ],
    correctOptionId: 'INV-08-E1-c',
    explanation: {
      es: "Un ETF (fondo cotizado) es una canasta de valores, normalmente ligada a un índice, que se compra y vende en bolsa durante el día. No es una cuenta bancaria, no es una sola empresa y no garantiza rendimiento. Error común: pensar que por estar diversificado no puede perder valor.",
      en: "An ETF (exchange traded fund) is a basket of securities, usually tied to an index, bought and sold on the exchange during the day. It is not a bank account, not a single company and does not guarantee returns. Common mistake: thinking that because it is diversified it cannot lose value.",
    },
    difficulty: 1,
    points: 10,
    competency: 'funds-etfs',
  },
  {
    id: 'INV-08-E2',
    level: 4,
    module: 'INV-08',
    kind: 'truefalse',
    flavor: 'concept',
    prompt: {
      es: "Con una sola compra de un ETF que replica un índice amplio puedes tener una parte de muchas empresas a la vez.",
      en: "With a single purchase of an ETF tracking a broad index you can own a part of many companies at once.",
    },
    answer: true,
    explanation: {
      es: "Verdadero. El ETF contiene todos (o casi todos) los valores del índice en su proporción, así que una compra te da exposición a todos ellos. Eso es diversificación con poco dinero. Error común: creer que necesitas comprar cada acción del índice por separado.",
      en: "True. The ETF holds all (or nearly all) the securities in the index in their proportions, so one purchase gives you exposure to all of them. That is diversification with little money. Common mistake: believing you need to buy each stock in the index separately.",
    },
    difficulty: 1,
    points: 10,
    competency: 'funds-etfs',
  },
  {
    id: 'INV-08-E3',
    level: 4,
    module: 'INV-08',
    kind: 'numeric',
    flavor: 'case',
    context: {
      es: "Un fondo de renta variable tiene inversiones por $52,000,000 y pasivos (comisiones y cuentas por pagar) por $2,000,000. Tiene 4,000,000 de acciones del fondo en circulación.",
      en: "An equity fund has investments worth $52,000,000 and liabilities (fees and payables) of $2,000,000. It has 4,000,000 fund shares outstanding.",
    },
    prompt: {
      es: "¿Cuál es el precio por acción (NAV) de este fondo? Responde en pesos.",
      en: "What is this fund's price per share (NAV)? Answer in pesos.",
    },
    answer: 12.5,
    unit: 'MXN',
    decimals: 2,
    tolerance: { abs: 0.005 },
    explanation: {
      es: "NAV = (52,000,000 − 2,000,000) ÷ 4,000,000 = 50,000,000 ÷ 4,000,000 = $12.50. Error común: no restar los pasivos y responder $13.00.",
      en: "NAV = (52,000,000 − 2,000,000) ÷ 4,000,000 = 50,000,000 ÷ 4,000,000 = $12.50. Common mistake: not subtracting liabilities and answering $13.00.",
    },
    difficulty: 2,
    points: 15,
    competency: 'funds-etfs',
  },
  {
    id: 'INV-08-E4',
    level: 4,
    module: 'INV-08',
    kind: 'classify',
    flavor: 'concept',
    prompt: {
      es: "Clasifica cada característica: ¿es típica de un ETF, de un fondo de inversión tradicional o de ambos?",
      en: "Classify each feature: is it typical of an ETF, of a traditional investment fund or of both?",
    },
    categories: [
      { id: 'INV-08-E4-c1', label: { es: "ETF", en: "ETF" } },
      { id: 'INV-08-E4-c2', label: { es: "Fondo de inversión tradicional", en: "Traditional investment fund" } },
      { id: 'INV-08-E4-c3', label: { es: "Ambos", en: "Both" } },
    ],
    items: [
      { id: 'INV-08-E4-i1', label: { es: "Su precio cambia a lo largo de la sesión de bolsa", en: "Its price changes throughout the trading session" }, correctCategoryId: 'INV-08-E4-c1' },
      { id: 'INV-08-E4-i2', label: { es: "Se compra directamente con la operadora o un distribuidor y se valúa una vez al día", en: "It is bought directly from the management company or a distributor and valued once a day" }, correctCategoryId: 'INV-08-E4-c2' },
      { id: 'INV-08-E4-i3', label: { es: "Cobra una comisión de administración anual", en: "It charges an annual management fee" }, correctCategoryId: 'INV-08-E4-c3' },
      { id: 'INV-08-E4-i4', label: { es: "Se compra con una casa de bolsa como si fuera una acción", en: "It is bought through a brokerage firm as if it were a stock" }, correctCategoryId: 'INV-08-E4-c1' },
      { id: 'INV-08-E4-i5', label: { es: "Junta dinero de muchos inversionistas para comprar una canasta de valores", en: "It pools money from many investors to buy a basket of securities" }, correctCategoryId: 'INV-08-E4-c3' },
      { id: 'INV-08-E4-i6', label: { es: "Su prospecto fija plazos de liquidez como diaria o semanal", en: "Its prospectus sets liquidity terms such as daily or weekly" }, correctCategoryId: 'INV-08-E4-c2' },
    ],
    explanation: {
      es: "ETF: cotiza en bolsa con precio durante la sesión y se compra con casa de bolsa. Fondo tradicional: se compra a la operadora o distribuidora, se valúa una vez al día y tiene plazos de liquidez. Ambos juntan dinero de muchos y cobran comisión. Error común: pensar que los ETFs no cobran comisión; cobran, aunque suelen ser bajas.",
      en: "ETF: trades on the exchange with intraday pricing and is bought through a brokerage firm. Traditional fund: bought from the management company or distributor, valued once a day and has liquidity terms. Both pool money and charge fees. Common mistake: thinking ETFs charge no fee; they do, although it is usually low.",
    },
    difficulty: 2,
    points: 15,
    competency: 'funds-etfs',
  },
  {
    id: 'INV-08-E5',
    level: 4,
    module: 'INV-08',
    kind: 'fields',
    flavor: 'case',
    context: {
      es: "Pilar tiene $200,000 para invertir y compara dos fondos que siguen el mismo índice: el fondo A cobra 0.2 % anual y el fondo B cobra 1.8 % anual. Considera solo el primer año y el saldo inicial.",
      en: "Pilar has $200,000 to invest and compares two funds tracking the same index: fund A charges 0.2% a year and fund B charges 1.8% a year. Consider only the first year and the initial balance.",
    },
    prompt: {
      es: "Calcula cuánto pagaría de comisión en cada fondo durante el primer año y la diferencia entre ambos.",
      en: "Compute how much she would pay in fees in each fund during the first year and the difference between them.",
    },
    fields: [
      { id: 'f1', label: { es: "Comisión del fondo A (pesos)", en: "Fund A fee (pesos)" }, answer: 400, unit: 'MXN', tolerance: { abs: 0.5 } },
      { id: 'f2', label: { es: "Comisión del fondo B (pesos)", en: "Fund B fee (pesos)" }, answer: 3600, unit: 'MXN', tolerance: { abs: 0.5 } },
      { id: 'f3', label: { es: "Diferencia anual (pesos)", en: "Annual difference (pesos)" }, answer: 3200, unit: 'MXN', tolerance: { abs: 0.5 } },
    ],
    explanation: {
      es: "Fondo A: 200,000 × 0.002 = $400. Fondo B: 200,000 × 0.018 = $3,600. Diferencia: $3,200 solo en el primer año; como siguen el mismo índice, esa diferencia se va casi completa al rendimiento y además deja de componerse. Error común: usar 0.2 y 1.8 como si fueran decimales (200,000 × 0.2 = $40,000).",
      en: "Fund A: 200,000 × 0.002 = $400. Fund B: 200,000 × 0.018 = $3,600. Difference: $3,200 in the first year alone; since they track the same index, that difference comes almost entirely out of the return and stops compounding. Common mistake: using 0.2 and 1.8 as decimals (200,000 × 0.2 = $40,000).",
    },
    difficulty: 1,
    points: 15,
    competency: 'funds-etfs',
  },
  {
    id: 'INV-08-E6',
    level: 4,
    module: 'INV-08',
    kind: 'mcq',
    flavor: 'case',
    context: {
      es: "Héctor, de 30 años, quiere invertir cada mes para su retiro. No tiene tiempo de elegir acciones, quiere costos bajos y le basta con obtener lo que dé el mercado en general.",
      en: "Héctor, 30, wants to invest every month for retirement. He has no time to pick stocks, wants low costs and is happy to get whatever the overall market returns.",
    },
    prompt: {
      es: "¿Qué opción se ajusta mejor a lo que busca Héctor para su retiro?",
      en: "Which option best fits what Héctor is looking for his retirement?",
    },
    options: [
      { id: 'INV-08-E6-a', text: { es: "Un ETF de gestión pasiva que replica un índice amplio y cobra comisión baja", en: "A passively managed ETF tracking a broad index with a low fee" } },
      { id: 'INV-08-E6-b', text: { es: "Un fondo de gestión activa con comisión alta que promete ganarle al mercado", en: "An actively managed fund with a high fee promising to beat the market" } },
      { id: 'INV-08-E6-c', text: { es: "Comprar cada mes la acción que más subió el mes anterior", en: "Buying every month the stock that rose most the previous month" } },
      { id: 'INV-08-E6-d', text: { es: "Guardar el dinero en efectivo hasta encontrar la acción perfecta", en: "Keeping the money in cash until he finds the perfect stock" } },
    ],
    correctOptionId: 'INV-08-E6-a',
    explanation: {
      es: "Un ETF pasivo de índice amplio le da diversificación, costos bajos y el rendimiento del mercado sin elegir acciones. La gestión activa cobra más y no siempre supera a su índice; perseguir la acción que más subió concentra el riesgo; el efectivo pierde poder de compra con la inflación. Error común: creer que pagar más comisión asegura más rendimiento.",
      en: "A broad-index passive ETF gives him diversification, low costs and the market return without picking stocks. Active management charges more and does not always beat its index; chasing last month's top stock concentrates risk; cash loses purchasing power to inflation. Common mistake: believing a higher fee ensures a higher return.",
    },
    difficulty: 1,
    points: 10,
    competency: 'funds-etfs',
  },

  // ═════════════════════════ INV-09 ═════════════════════════
  {
    id: 'INV-09-E1',
    level: 4,
    module: 'INV-09',
    kind: 'mcq',
    flavor: 'concept',
    prompt: {
      es: "¿Qué es una FIBRA en el mercado mexicano?",
      en: "What is a FIBRA in the Mexican market?",
    },
    options: [
      { id: 'INV-09-E1-a', text: { es: "Un crédito hipotecario del gobierno para comprar vivienda", en: "A government mortgage loan to buy a home" } },
      { id: 'INV-09-E1-b', text: { es: "Un fideicomiso que compra, renta y administra inmuebles y emite certificados que cotizan en bolsa", en: "A trust that buys, rents out and manages properties and issues certificates that trade on the exchange" } },
      { id: 'INV-09-E1-c', text: { es: "Una cuenta de ahorro para el enganche de una casa", en: "A savings account for a house down payment" } },
      { id: 'INV-09-E1-d', text: { es: "Una empresa constructora que vende departamentos en preventa", en: "A construction company selling apartments in pre-sale" } },
    ],
    correctOptionId: 'INV-09-E1-b',
    explanation: {
      es: "La FIBRA (Fideicomiso de Inversión en Bienes Raíces) junta dinero emitiendo CBFIs en bolsa y lo usa para comprar y rentar inmuebles, repartiendo parte de las rentas. No es un crédito para vivienda ni una cuenta de ahorro. Error común: confundirla con una constructora que vende casas.",
      en: "A FIBRA (Mexican real estate investment trust) raises money by issuing CBFIs on the exchange and uses it to buy and rent out properties, paying out part of the rent. It is not a housing loan or a savings account. Common mistake: confusing it with a builder that sells homes.",
    },
    difficulty: 1,
    points: 10,
    competency: 'reits-fibras',
  },
  {
    id: 'INV-09-E2',
    level: 4,
    module: 'INV-09',
    kind: 'truefalse',
    flavor: 'concept',
    prompt: {
      es: "Si compras CBFIs de una FIBRA de centros comerciales, te vuelves dueño directo de un local específico que puedes usar o rentar tú mismo.",
      en: "If you buy CBFIs of a shopping-center FIBRA, you become the direct owner of a specific store you can use or rent out yourself.",
    },
    answer: false,
    explanation: {
      es: "Falso. Los CBFIs te dan derecho a una parte de los resultados del conjunto de inmuebles del fideicomiso; la administración decide qué se renta y a quién. No tienes un local asignado. Error común: pensar que la FIBRA funciona como una copropiedad de un inmueble concreto.",
      en: "False. CBFIs entitle you to a share of the results of the trust's whole set of properties; management decides what is rented and to whom. You do not get an assigned store. Common mistake: thinking a FIBRA works like co-ownership of a specific property.",
    },
    difficulty: 1,
    points: 10,
    competency: 'reits-fibras',
  },
  {
    id: 'INV-09-E3',
    level: 4,
    module: 'INV-09',
    kind: 'numeric',
    flavor: 'case',
    context: {
      es: "El CBFI de una FIBRA de oficinas cotiza en $28. En los últimos 12 meses pagó cuatro distribuciones trimestrales de $0.49 cada una (cifras hipotéticas).",
      en: "The CBFI of an office FIBRA trades at $28. Over the last 12 months it paid four quarterly distributions of $0.49 each (hypothetical figures).",
    },
    prompt: {
      es: "¿Cuál es el rendimiento por distribución anual de esta FIBRA? Responde en porcentaje.",
      en: "What is this FIBRA's annual distribution yield? Answer as a percentage.",
    },
    answer: 7,
    unit: '%',
    decimals: 1,
    tolerance: { abs: 0.05 },
    explanation: {
      es: "Distribución anual: 4 × 0.49 = $1.96. Rendimiento: 1.96 ÷ 28 = 0.07 = 7 %. Error común: usar una sola distribución trimestral y responder 1.75 %.",
      en: "Annual distribution: 4 × 0.49 = $1.96. Yield: 1.96 ÷ 28 = 0.07 = 7%. Common mistake: using a single quarterly distribution and answering 1.75%.",
    },
    difficulty: 2,
    points: 15,
    competency: 'reits-fibras',
  },
  {
    id: 'INV-09-E4',
    level: 4,
    module: 'INV-09',
    kind: 'multi',
    flavor: 'concept',
    prompt: {
      es: "Frente a comprar un inmueble directamente para rentarlo, ¿qué ventajas suele ofrecer invertir en una FIBRA? Selecciona todas las que apliquen.",
      en: "Compared with buying a property directly to rent it out, what advantages does investing in a FIBRA usually offer? Select all that apply.",
    },
    options: [
      { id: 'INV-09-E4-a', text: { es: "Puedes empezar con mucho menos dinero", en: "You can start with much less money" } },
      { id: 'INV-09-E4-b', text: { es: "Puedes vender en bolsa en días hábiles en lugar de esperar meses", en: "You can sell on the exchange on business days instead of waiting months" } },
      { id: 'INV-09-E4-c', text: { es: "Tu dinero queda repartido entre muchos inmuebles e inquilinos", en: "Your money is spread across many properties and tenants" } },
      { id: 'INV-09-E4-d', text: { es: "El precio del certificado nunca baja", en: "The certificate's price never falls" } },
      { id: 'INV-09-E4-e', text: { es: "Decides tú a quién se renta cada inmueble", en: "You decide who each property is rented to" } },
    ],
    correctOptionIds: ['INV-09-E4-a', 'INV-09-E4-b', 'INV-09-E4-c'],
    explanation: {
      es: "Monto bajo, liquidez en bolsa y diversificación son ventajas reales de la FIBRA. Su precio sí baja (por ejemplo, cuando suben las tasas o aumenta la desocupación) y el control lo tiene la administración, no tú. Error común: creer que los bienes raíces en bolsa son tan \"seguros\" que su precio no cae.",
      en: "Low amount, exchange liquidity and diversification are real FIBRA advantages. Its price does fall (for example, when rates rise or vacancy increases) and control belongs to management, not you. Common mistake: believing listed real estate is so \"safe\" that its price does not fall.",
    },
    difficulty: 2,
    points: 15,
    competency: 'reits-fibras',
  },
  {
    id: 'INV-09-E5',
    level: 4,
    module: 'INV-09',
    kind: 'fields',
    flavor: 'case',
    context: {
      es: "Una FIBRA industrial tiene 80,000 m² de bodegas, de los cuales 72,000 m² están rentados a $150 por m² al mes (cifras hipotéticas).",
      en: "An industrial FIBRA has 80,000 m² of warehouses, of which 72,000 m² are rented at $150 per m² per month (hypothetical figures).",
    },
    prompt: {
      es: "Calcula la tasa de ocupación de la FIBRA y su ingreso mensual por rentas.",
      en: "Compute the FIBRA's occupancy rate and its monthly rental income.",
    },
    fields: [
      { id: 'f1', label: { es: "Tasa de ocupación (%)", en: "Occupancy rate (%)" }, answer: 90, unit: '%', tolerance: { abs: 0.05 } },
      { id: 'f2', label: { es: "Ingreso mensual por rentas (pesos)", en: "Monthly rental income (pesos)" }, answer: 10800000, unit: 'MXN', tolerance: { abs: 0.5 } },
    ],
    explanation: {
      es: "Ocupación: 72,000 ÷ 80,000 = 0.90 = 90 %. Ingreso: 72,000 × $150 = $10,800,000 al mes. Error común: multiplicar los 80,000 m² totales y responder $12,000,000; los metros vacíos no pagan renta.",
      en: "Occupancy: 72,000 ÷ 80,000 = 0.90 = 90%. Income: 72,000 × $150 = $10,800,000 per month. Common mistake: multiplying the full 80,000 m² and answering $12,000,000; vacant meters pay no rent.",
    },
    difficulty: 2,
    points: 15,
    competency: 'reits-fibras',
  },
  {
    id: 'INV-09-E6',
    level: 4,
    module: 'INV-09',
    kind: 'mcq',
    flavor: 'interpret',
    context: {
      es: "Durante varios meses suben las tasas de interés en México y los CETES pagan bastante más que antes.",
      en: "Over several months interest rates rise in Mexico and CETES pay considerably more than before.",
    },
    prompt: {
      es: "¿Qué efecto es más probable sobre el precio de los CBFIs de las FIBRAs?",
      en: "What effect is most likely on the price of FIBRA CBFIs?",
    },
    options: [
      { id: 'INV-09-E6-a', text: { es: "Suben, porque las tasas altas siempre benefician a los inmuebles", en: "They rise, because high rates always benefit real estate" } },
      { id: 'INV-09-E6-b', text: { es: "No cambian, porque las rentas están firmadas por contrato", en: "They do not change, because rents are signed under contract" } },
      { id: 'INV-09-E6-c', text: { es: "Tienden a bajar, porque la deuda se encarece y otras inversiones compiten con sus distribuciones", en: "They tend to fall, because debt gets more expensive and other investments compete with their distributions" } },
      { id: 'INV-09-E6-d', text: { es: "Dejan de cotizar hasta que bajen las tasas", en: "They stop trading until rates come down" } },
    ],
    correctOptionId: 'INV-09-E6-c',
    explanation: {
      es: "Cuando suben las tasas, el financiamiento de las FIBRAs se encarece y los inversionistas pueden obtener más en instrumentos de deuda con menos riesgo, así que exigen más rendimiento a los CBFIs y su precio tiende a bajar. Los contratos de renta dan estabilidad al flujo, pero no fijan el precio en bolsa. Error común: pensar que un flujo estable significa un precio estable.",
      en: "When rates rise, FIBRAs' financing gets more expensive and investors can earn more in lower-risk debt instruments, so they demand more yield from CBFIs and their price tends to fall. Lease contracts stabilize cash flow but do not fix the market price. Common mistake: thinking stable cash flow means a stable price.",
    },
    difficulty: 2,
    points: 15,
    competency: 'reits-fibras',
  },

  // ═════════════════════════ INV-10 ═════════════════════════
  {
    id: 'INV-10-E1',
    level: 4,
    module: 'INV-10',
    kind: 'mcq',
    flavor: 'concept',
    prompt: {
      es: "¿Cuál de estos portafolios está mejor diversificado?",
      en: "Which of these portfolios is best diversified?",
    },
    options: [
      { id: 'INV-10-E1-a', text: { es: "Acciones de tres bancos mexicanos", en: "Shares of three Mexican banks" } },
      { id: 'INV-10-E1-b', text: { es: "Todo el dinero en la acción de la empresa donde trabajas", en: "All the money in the stock of the company you work for" } },
      { id: 'INV-10-E1-c', text: { es: "Un ETF de acciones mexicanas, un ETF de acciones internacionales, deuda gubernamental y una FIBRA", en: "A Mexican equity ETF, an international equity ETF, government debt and a FIBRA" } },
      { id: 'INV-10-E1-d', text: { es: "Cinco FIBRAs de oficinas en la misma ciudad", en: "Five office FIBRAs in the same city" } },
    ],
    correctOptionId: 'INV-10-E1-c',
    explanation: {
      es: "La opción c combina tipos de activo, regiones y monedas que no se mueven igual. Tres bancos o cinco FIBRAs de oficinas en una ciudad tienen alta correlación entre sí, y todo en la empresa donde trabajas une tu ingreso y tus ahorros al mismo riesgo. Error común: creer que tener muchos valores ya es estar diversificado, aunque todos sean del mismo sector.",
      en: "Option c combines asset types, regions and currencies that do not move the same way. Three banks or five office FIBRAs in one city are highly correlated, and everything in your employer ties your income and savings to the same risk. Common mistake: believing that holding many securities already means being diversified, even if they are all in the same sector.",
    },
    difficulty: 1,
    points: 10,
    competency: 'portfolio-construction',
  },
  {
    id: 'INV-10-E2',
    level: 4,
    module: 'INV-10',
    kind: 'truefalse',
    flavor: 'concept',
    prompt: {
      es: "Un portafolio bien diversificado elimina por completo el riesgo de perder dinero en una recesión.",
      en: "A well-diversified portfolio completely eliminates the risk of losing money in a recession.",
    },
    answer: false,
    explanation: {
      es: "Falso. La diversificación reduce el riesgo específico de cada empresa o sector, pero el riesgo de mercado (recesiones, alzas generales de tasas) afecta a casi todos los activos a la vez. Error común: pensar que diversificar es lo mismo que no tener riesgo.",
      en: "False. Diversification reduces the specific risk of each company or sector, but market risk (recessions, general rate hikes) affects almost all assets at once. Common mistake: thinking diversifying is the same as having no risk.",
    },
    difficulty: 1,
    points: 10,
    competency: 'portfolio-construction',
  },
  {
    id: 'INV-10-E3',
    level: 4,
    module: 'INV-10',
    kind: 'numeric',
    flavor: 'case',
    context: {
      es: "Un portafolio tiene 50 % en acciones, 30 % en bonos y 20 % en FIBRAs. En el año, las acciones rindieron 12 %, los bonos 7 % y las FIBRAs 5 % (cifras hipotéticas).",
      en: "A portfolio holds 50% in stocks, 30% in bonds and 20% in FIBRAs. During the year, stocks returned 12%, bonds 7% and FIBRAs 5% (hypothetical figures).",
    },
    prompt: {
      es: "¿Cuál fue el rendimiento ponderado del portafolio? Responde en porcentaje.",
      en: "What was the portfolio's weighted return? Answer as a percentage.",
    },
    answer: 9.1,
    unit: '%',
    decimals: 1,
    tolerance: { abs: 0.05 },
    explanation: {
      es: "0.50 × 12 % + 0.30 × 7 % + 0.20 × 5 % = 6 % + 2.1 % + 1 % = 9.1 %. Error común: sacar el promedio simple (12 + 7 + 5) ÷ 3 = 8 %, que ignora cuánto pesa cada activo.",
      en: "0.50 × 12% + 0.30 × 7% + 0.20 × 5% = 6% + 2.1% + 1% = 9.1%. Common mistake: taking the simple average (12 + 7 + 5) ÷ 3 = 8%, which ignores each asset's weight.",
    },
    difficulty: 2,
    points: 15,
    competency: 'portfolio-construction',
  },
  {
    id: 'INV-10-E4',
    level: 4,
    module: 'INV-10',
    kind: 'classify',
    flavor: 'concept',
    prompt: {
      es: "Clasifica cada evento según el tipo de riesgo de portafolio que representa.",
      en: "Classify each event by the type of portfolio risk it represents.",
    },
    categories: [
      { id: 'INV-10-E4-c1', label: { es: "Riesgo específico (se reduce diversificando)", en: "Specific risk (reduced by diversifying)" } },
      { id: 'INV-10-E4-c2', label: { es: "Riesgo de mercado (no se elimina diversificando)", en: "Market risk (not eliminated by diversifying)" } },
    ],
    items: [
      { id: 'INV-10-E4-i1', label: { es: "Se descubre un fraude contable en una sola empresa", en: "Accounting fraud is discovered at a single company" }, correctCategoryId: 'INV-10-E4-c1' },
      { id: 'INV-10-E4-i2', label: { es: "La economía entra en recesión", en: "The economy enters a recession" }, correctCategoryId: 'INV-10-E4-c2' },
      { id: 'INV-10-E4-i3', label: { es: "Una huelga detiene la planta de una cementera", en: "A strike halts a cement company's plant" }, correctCategoryId: 'INV-10-E4-c1' },
      { id: 'INV-10-E4-i4', label: { es: "El banco central sube las tasas de interés de forma generalizada", en: "The central bank raises interest rates across the board" }, correctCategoryId: 'INV-10-E4-c2' },
      { id: 'INV-10-E4-i5', label: { es: "Un producto estrella de una farmacéutica es retirado del mercado", en: "A drug company's flagship product is pulled from the market" }, correctCategoryId: 'INV-10-E4-c1' },
      { id: 'INV-10-E4-i6', label: { es: "Una crisis financiera global hace caer a casi todas las bolsas", en: "A global financial crisis makes almost every stock market fall" }, correctCategoryId: 'INV-10-E4-c2' },
    ],
    explanation: {
      es: "Fraude, huelga o retiro de un producto afectan a una empresa: si esa empresa pesa poco en tu portafolio, el golpe es pequeño. Recesión, alza generalizada de tasas o crisis global afectan a casi todo: ese riesgo de mercado no desaparece al diversificar. Error común: clasificar el alza de tasas como específica porque la decide una sola institución.",
      en: "Fraud, a strike or a product recall affect one company: if that company weighs little in your portfolio, the hit is small. A recession, a general rate hike or a global crisis affect almost everything: that market risk does not disappear by diversifying. Common mistake: classifying the rate hike as specific because a single institution decides it.",
    },
    difficulty: 2,
    points: 15,
    competency: 'portfolio-construction',
  },
  {
    id: 'INV-10-E5',
    level: 4,
    module: 'INV-10',
    kind: 'fields',
    flavor: 'case',
    context: {
      es: "Tomás invirtió $200,000 con objetivo 60 % acciones ($120,000) y 40 % deuda ($80,000). Un año después, sus acciones valen $144,000 y su deuda $84,000.",
      en: "Tomás invested $200,000 with a 60% stocks ($120,000) and 40% debt ($80,000) target. A year later, his stocks are worth $144,000 and his debt $84,000.",
    },
    prompt: {
      es: "Rebalancea el portafolio de Tomás para volver a 60/40: completa los montos en pesos.",
      en: "Rebalance Tomás's portfolio back to 60/40: fill in the amounts in pesos.",
    },
    fields: [
      { id: 'f1', label: { es: "Valor total actual del portafolio", en: "Current total portfolio value" }, answer: 228000, unit: 'MXN', tolerance: { abs: 0.5 } },
      { id: 'f2', label: { es: "Monto de acciones que debe vender", en: "Amount of stocks he must sell" }, answer: 7200, unit: 'MXN', tolerance: { abs: 0.5 } },
      { id: 'f3', label: { es: "Nuevo monto en deuda después de rebalancear", en: "New amount in debt after rebalancing" }, answer: 91200, unit: 'MXN', tolerance: { abs: 0.5 } },
    ],
    explanation: {
      es: "Total: 144,000 + 84,000 = $228,000. Objetivo en acciones: 0.60 × 228,000 = $136,800, así que vende 144,000 − 136,800 = $7,200. Deuda: 84,000 + 7,200 = $91,200 = 40 % de 228,000. Error común: rebalancear con el monto original de $200,000 en lugar del valor actual.",
      en: "Total: 144,000 + 84,000 = $228,000. Stock target: 0.60 × 228,000 = $136,800, so he sells 144,000 − 136,800 = $7,200. Debt: 84,000 + 7,200 = $91,200 = 40% of 228,000. Common mistake: rebalancing with the original $200,000 instead of the current value.",
    },
    difficulty: 2,
    points: 20,
    competency: 'portfolio-construction',
  },
  {
    id: 'INV-10-E6',
    level: 4,
    module: 'INV-10',
    kind: 'multi',
    flavor: 'case',
    context: {
      es: "Valeria, de 28 años, invierte para su retiro. Hoy tiene el 80 % de su portafolio en acciones de una sola empresa minera mexicana y el 20 % en efectivo.",
      en: "Valeria, 28, invests for retirement. Today she has 80% of her portfolio in the shares of a single Mexican mining company and 20% in cash.",
    },
    prompt: {
      es: "¿Qué cambios mejorarían la diversificación del portafolio de Valeria? Selecciona todas las que apliquen.",
      en: "Which changes would improve the diversification of Valeria's portfolio? Select all that apply.",
    },
    options: [
      { id: 'INV-10-E6-a', text: { es: "Reducir el peso de la minera y comprar un ETF de un índice amplio", en: "Reduce the mining company's weight and buy a broad-index ETF" } },
      { id: 'INV-10-E6-b', text: { es: "Agregar una parte en acciones o ETFs de otros países", en: "Add a portion in stocks or ETFs from other countries" } },
      { id: 'INV-10-E6-c', text: { es: "Comprar acciones de otras dos mineras mexicanas", en: "Buy shares of two other Mexican mining companies" } },
      { id: 'INV-10-E6-d', text: { es: "Incluir instrumentos de deuda acordes a su plan", en: "Include debt instruments consistent with her plan" } },
      { id: 'INV-10-E6-e', text: { es: "Pasar el 20 % en efectivo también a la misma minera", en: "Move the 20% cash into the same mining company too" } },
    ],
    correctOptionIds: ['INV-10-E6-a', 'INV-10-E6-b', 'INV-10-E6-d'],
    explanation: {
      es: "Un ETF amplio, exposición a otras regiones e instrumentos de deuda agregan activos que no se mueven igual que la minera. Comprar otras mineras mexicanas mantiene el mismo sector y país (alta correlación), y meter el efectivo en la minera concentra aún más. Error común: pensar que más empresas del mismo sector es diversificar.",
      en: "A broad ETF, exposure to other regions and debt instruments add assets that do not move like the mining company. Buying other Mexican miners keeps the same sector and country (high correlation), and putting the cash into the miner concentrates even more. Common mistake: thinking that more companies in the same sector is diversifying.",
    },
    difficulty: 2,
    points: 15,
    competency: 'portfolio-construction',
  },

  // ═════════════════════════ INV-11 ═════════════════════════
  {
    id: 'INV-11-E1',
    level: 4,
    module: 'INV-11',
    kind: 'mcq',
    flavor: 'concept',
    prompt: {
      es: "¿Qué busca principalmente el análisis fundamental de una acción?",
      en: "What does fundamental analysis of a stock mainly seek?",
    },
    options: [
      { id: 'INV-11-E1-a', text: { es: "Estimar cuánto vale la empresa a partir de su negocio y sus números, y compararlo con su precio", en: "Estimate what the company is worth from its business and numbers, and compare that with its price" } },
      { id: 'INV-11-E1-b', text: { es: "Predecir el precio de mañana a partir de patrones en la gráfica", en: "Predict tomorrow's price from chart patterns" } },
      { id: 'INV-11-E1-c', text: { es: "Saber qué acciones están de moda en redes sociales", en: "Find out which stocks are trending on social media" } },
      { id: 'INV-11-E1-d', text: { es: "Calcular las comisiones que cobra la casa de bolsa", en: "Compute the fees charged by the brokerage firm" } },
    ],
    correctOptionId: 'INV-11-E1-a',
    explanation: {
      es: "El análisis fundamental estudia el negocio, la administración y los estados financieros para estimar un valor y compararlo con el precio. Leer patrones de la gráfica es análisis técnico. Error común: confundir valor con popularidad o con precio.",
      en: "Fundamental analysis studies the business, management and financial statements to estimate a value and compare it with the price. Reading chart patterns is technical analysis. Common mistake: confusing value with popularity or with price.",
    },
    difficulty: 1,
    points: 10,
    competency: 'fundamental-analysis',
  },
  {
    id: 'INV-11-E2',
    level: 4,
    module: 'INV-11',
    kind: 'fields',
    flavor: 'case',
    context: {
      es: "Una cadena de restaurantes reportó una utilidad neta anual de $90,000,000. Tiene 30,000,000 de acciones en circulación y su acción cotiza en $45 (cifras hipotéticas).",
      en: "A restaurant chain reported annual net profit of $90,000,000. It has 30,000,000 shares outstanding and its share trades at $45 (hypothetical figures).",
    },
    prompt: {
      es: "Calcula la utilidad por acción (UPA) y el múltiplo precio/utilidad (P/U) de la cadena de restaurantes.",
      en: "Compute the restaurant chain's earnings per share (EPS) and price/earnings multiple (P/E).",
    },
    fields: [
      { id: 'f1', label: { es: "UPA (pesos por acción)", en: "EPS (pesos per share)" }, answer: 3, unit: 'MXN', tolerance: { abs: 0.005 } },
      { id: 'f2', label: { es: "P/U (veces)", en: "P/E (times)" }, answer: 15, unit: 'times', tolerance: { abs: 0.05 } },
    ],
    explanation: {
      es: "UPA: 90,000,000 ÷ 30,000,000 = $3. P/U: 45 ÷ 3 = 15 veces: pagas $15 por cada peso de utilidad anual. Error común: dividir la utilidad entre el precio en vez de entre el número de acciones.",
      en: "EPS: 90,000,000 ÷ 30,000,000 = $3. P/E: 45 ÷ 3 = 15 times: you pay $15 for each peso of annual profit. Common mistake: dividing profit by price instead of by the number of shares.",
    },
    difficulty: 2,
    points: 15,
    competency: 'fundamental-analysis',
  },
  {
    id: 'INV-11-E3',
    level: 4,
    module: 'INV-11',
    kind: 'numeric',
    flavor: 'case',
    context: {
      es: "Una empresa de empaques tuvo una utilidad neta de $18,000,000 en el año. Su capital contable es de $120,000,000 (cifras hipotéticas).",
      en: "A packaging company had net profit of $18,000,000 for the year. Its equity is $120,000,000 (hypothetical figures).",
    },
    prompt: {
      es: "¿Cuál es el ROE (rentabilidad sobre el capital) de la empresa de empaques? Responde en porcentaje.",
      en: "What is the packaging company's ROE (return on equity)? Answer as a percentage.",
    },
    answer: 15,
    unit: '%',
    decimals: 1,
    tolerance: { abs: 0.05 },
    explanation: {
      es: "ROE = 18,000,000 ÷ 120,000,000 = 0.15 = 15 %: por cada $100 de capital de los accionistas, la empresa generó $15 de utilidad. Error común: dividir el capital entre la utilidad (6.67) o usar las ventas en lugar del capital.",
      en: "ROE = 18,000,000 ÷ 120,000,000 = 0.15 = 15%: for every $100 of shareholders' equity, the company generated $15 of profit. Common mistake: dividing equity by profit (6.67) or using sales instead of equity.",
    },
    difficulty: 1,
    points: 10,
    competency: 'fundamental-analysis',
  },
  {
    id: 'INV-11-E4',
    level: 4,
    module: 'INV-11',
    kind: 'classify',
    flavor: 'concept',
    prompt: {
      es: "Clasifica cada elemento que revisa un analista fundamental como dato cuantitativo (número de los estados financieros) o cualitativo (características del negocio).",
      en: "Classify each item a fundamental analyst reviews as quantitative data (a number from the financial statements) or qualitative (features of the business).",
    },
    categories: [
      { id: 'INV-11-E4-c1', label: { es: "Cuantitativo", en: "Quantitative" } },
      { id: 'INV-11-E4-c2', label: { es: "Cualitativo", en: "Qualitative" } },
    ],
    items: [
      { id: 'INV-11-E4-i1', label: { es: "Margen neto de los últimos cinco años", en: "Net margin over the last five years" }, correctCategoryId: 'INV-11-E4-c1' },
      { id: 'INV-11-E4-i2', label: { es: "Experiencia y honestidad del equipo directivo", en: "Experience and honesty of the management team" }, correctCategoryId: 'INV-11-E4-c2' },
      { id: 'INV-11-E4-i3', label: { es: "Razón deuda/capital", en: "Debt/equity ratio" }, correctCategoryId: 'INV-11-E4-c1' },
      { id: 'INV-11-E4-i4', label: { es: "Fuerza de su marca frente a la competencia", en: "Strength of its brand against competitors" }, correctCategoryId: 'INV-11-E4-c2' },
      { id: 'INV-11-E4-i5', label: { es: "Crecimiento anual de las ventas", en: "Annual sales growth" }, correctCategoryId: 'INV-11-E4-c1' },
      { id: 'INV-11-E4-i6', label: { es: "Dependencia de un solo cliente o proveedor", en: "Dependence on a single customer or supplier" }, correctCategoryId: 'INV-11-E4-c2' },
    ],
    explanation: {
      es: "Margen neto, deuda/capital y crecimiento de ventas salen de los estados financieros: son cuantitativos. Calidad directiva, fuerza de marca y dependencia de un cliente describen el negocio: son cualitativos y explican si los números pueden sostenerse. Error común: ignorar lo cualitativo porque no es un número.",
      en: "Net margin, debt/equity and sales growth come from the financial statements: they are quantitative. Management quality, brand strength and dependence on one customer describe the business: they are qualitative and explain whether the numbers can last. Common mistake: ignoring the qualitative side because it is not a number.",
    },
    difficulty: 1,
    points: 10,
    competency: 'fundamental-analysis',
  },
  {
    id: 'INV-11-E5',
    level: 4,
    module: 'INV-11',
    kind: 'truefalse',
    flavor: 'interpret',
    prompt: {
      es: "Si una acción tiene un P/U más bajo que el de otra empresa de un sector distinto, eso basta para concluir que es una mejor compra.",
      en: "If a stock has a lower P/E than another company in a different sector, that is enough to conclude it is a better buy.",
    },
    answer: false,
    explanation: {
      es: "Falso. Las razones se comparan contra empresas del mismo sector y contra la historia de la propia empresa; sectores distintos tienen crecimientos y riesgos distintos. Un P/U bajo también puede reflejar que el mercado espera que las utilidades caigan. Error común: usar un solo múltiplo como veredicto.",
      en: "False. Ratios are compared against companies in the same sector and against the company's own history; different sectors have different growth and risk. A low P/E may also reflect that the market expects profits to fall. Common mistake: using a single multiple as a verdict.",
    },
    difficulty: 2,
    points: 15,
    competency: 'fundamental-analysis',
  },
  {
    id: 'INV-11-E6',
    level: 4,
    module: 'INV-11',
    kind: 'numeric',
    flavor: 'case',
    context: {
      es: "Después de analizar a una empresa de telecomunicaciones, estimas que su valor intrínseco es de $50 por acción. Hoy cotiza en $40.",
      en: "After analyzing a telecom company, you estimate its intrinsic value at $50 per share. Today it trades at $40.",
    },
    prompt: {
      es: "¿Cuál es el margen de seguridad de la acción de telecomunicaciones? Responde en porcentaje.",
      en: "What is the telecom share's margin of safety? Answer as a percentage.",
    },
    answer: 20,
    unit: '%',
    decimals: 1,
    tolerance: { abs: 0.05 },
    explanation: {
      es: "Margen de seguridad = (50 − 40) ÷ 50 = 0.20 = 20 %. Se divide entre el valor estimado, no entre el precio. Error común: dividir entre el precio y responder 25 %.",
      en: "Margin of safety = (50 − 40) ÷ 50 = 0.20 = 20%. You divide by the estimated value, not by the price. Common mistake: dividing by the price and answering 25%.",
    },
    difficulty: 2,
    points: 15,
    competency: 'fundamental-analysis',
  },

  // ═════════════════════════ INV-12 ═════════════════════════
  {
    id: 'INV-12-E1',
    level: 4,
    module: 'INV-12',
    kind: 'mcq',
    flavor: 'concept',
    context: {
      es: "La vela diaria de una acción muestra: apertura $72, máximo $73, mínimo $66 y cierre $67.",
      en: "A stock's daily candle shows: open $72, high $73, low $66 and close $67.",
    },
    prompt: {
      es: "¿Cómo se clasifica esa vela y cuánto mide su cuerpo?",
      en: "How is that candle classified and how big is its body?",
    },
    options: [
      { id: 'INV-12-E1-a', text: { es: "Alcista, con cuerpo de $7", en: "Bullish, with a $7 body" } },
      { id: 'INV-12-E1-b', text: { es: "Bajista, con cuerpo de $5", en: "Bearish, with a $5 body" } },
      { id: 'INV-12-E1-c', text: { es: "Bajista, con cuerpo de $7", en: "Bearish, with a $7 body" } },
      { id: 'INV-12-E1-d', text: { es: "Alcista, con cuerpo de $5", en: "Bullish, with a $5 body" } },
    ],
    correctOptionId: 'INV-12-E1-b',
    explanation: {
      es: "Cerró ($67) por debajo de la apertura ($72): es bajista. El cuerpo va de la apertura al cierre: 72 − 67 = $5. Los $7 corresponden al rango completo (máximo 73 − mínimo 66), que incluye las mechas. Error común: confundir el cuerpo con el rango total.",
      en: "It closed ($67) below the open ($72): it is bearish. The body goes from open to close: 72 − 67 = $5. The $7 is the full range (high 73 − low 66), which includes the wicks. Common mistake: confusing the body with the total range.",
    },
    difficulty: 1,
    points: 10,
    competency: 'technical-analysis',
  },
  {
    id: 'INV-12-E2',
    level: 4,
    module: 'INV-12',
    kind: 'numeric',
    flavor: 'case',
    context: {
      es: "Los cierres de una acción en los últimos 4 días fueron $34, $36, $35 y $39.",
      en: "A stock's closes over the last 4 days were $34, $36, $35 and $39.",
    },
    prompt: {
      es: "Calcula la media móvil simple de 4 días de esta acción. Responde en pesos.",
      en: "Compute this stock's 4-day simple moving average. Answer in pesos.",
    },
    answer: 36,
    unit: 'MXN',
    decimals: 2,
    tolerance: { abs: 0.005 },
    explanation: {
      es: "SMA(4) = (34 + 36 + 35 + 39) ÷ 4 = 144 ÷ 4 = $36. El último cierre ($39) está arriba de la media, señal de sesgo alcista de corto plazo. Error común: dividir entre 5 o usar solo el primer y último cierre.",
      en: "SMA(4) = (34 + 36 + 35 + 39) ÷ 4 = 144 ÷ 4 = $36. The last close ($39) is above the average, a sign of short-term bullish bias. Common mistake: dividing by 5 or using only the first and last closes.",
    },
    difficulty: 1,
    points: 10,
    competency: 'technical-analysis',
  },
  {
    id: 'INV-12-E3',
    level: 4,
    module: 'INV-12',
    kind: 'classify',
    flavor: 'interpret',
    prompt: {
      es: "Clasifica cada descripción de gráfica según el concepto de análisis técnico que representa.",
      en: "Classify each chart description by the technical analysis concept it represents.",
    },
    categories: [
      { id: 'INV-12-E3-c1', label: { es: "Tendencia alcista", en: "Uptrend" } },
      { id: 'INV-12-E3-c2', label: { es: "Tendencia bajista", en: "Downtrend" } },
      { id: 'INV-12-E3-c3', label: { es: "Soporte", en: "Support" } },
      { id: 'INV-12-E3-c4', label: { es: "Resistencia", en: "Resistance" } },
    ],
    items: [
      { id: 'INV-12-E3-i1', label: { es: "Cada máximo y cada mínimo quedan más altos que los anteriores", en: "Each high and each low is higher than the previous ones" }, correctCategoryId: 'INV-12-E3-c1' },
      { id: 'INV-12-E3-i2', label: { es: "El precio ha rebotado hacia arriba tres veces cerca de $80", en: "The price has bounced upward three times near $80" }, correctCategoryId: 'INV-12-E3-c3' },
      { id: 'INV-12-E3-i3', label: { es: "Cada rebote se queda más abajo que el anterior y los mínimos también bajan", en: "Each rebound stops lower than the previous one and the lows also fall" }, correctCategoryId: 'INV-12-E3-c2' },
      { id: 'INV-12-E3-i4', label: { es: "Varias veces el precio llegó a $120 y ahí aparecieron vendedores que lo frenaron", en: "Several times the price reached $120 and sellers appeared there and stopped it" }, correctCategoryId: 'INV-12-E3-c4' },
    ],
    explanation: {
      es: "Máximos y mínimos crecientes: tendencia alcista; decrecientes: bajista. Un nivel donde el precio deja de caer y rebota es soporte (piso); donde deja de subir por presión vendedora es resistencia (techo). Error común: invertir soporte y resistencia.",
      en: "Rising highs and lows: uptrend; falling ones: downtrend. A level where price stops falling and bounces is support (floor); where it stops rising due to selling pressure is resistance (ceiling). Common mistake: swapping support and resistance.",
    },
    difficulty: 1,
    points: 10,
    competency: 'technical-analysis',
  },
  {
    id: 'INV-12-E4',
    level: 4,
    module: 'INV-12',
    kind: 'truefalse',
    flavor: 'concept',
    prompt: {
      es: "Cuando una media móvil corta cruza hacia arriba a una media móvil larga, el precio de la acción seguirá subiendo con certeza.",
      en: "When a short moving average crosses above a long moving average, the stock's price will certainly keep rising.",
    },
    answer: false,
    explanation: {
      es: "Falso. El cruce es una señal que muchos leen como alcista, pero las señales técnicas fallan con frecuencia; por eso se usan junto con un stop loss y otras confirmaciones, como el volumen. Error común: tratar una señal de probabilidad como si fuera una garantía.",
      en: "False. The crossover is a signal many read as bullish, but technical signals fail frequently; that is why they are used with a stop loss and other confirmations, such as volume. Common mistake: treating a probability signal as a guarantee.",
    },
    difficulty: 1,
    points: 10,
    competency: 'technical-analysis',
  },
  {
    id: 'INV-12-E5',
    level: 4,
    module: 'INV-12',
    kind: 'fields',
    flavor: 'case',
    context: {
      es: "Andrea compra 100 acciones a $80 y define que saldrá si el precio cae 8 % desde su compra. Sin comisiones.",
      en: "Andrea buys 100 shares at $80 and decides she will exit if the price falls 8% from her purchase. No fees.",
    },
    prompt: {
      es: "Calcula el precio de su stop loss y la pérdida total aproximada si se activa.",
      en: "Compute her stop loss price and the approximate total loss if it triggers.",
    },
    fields: [
      { id: 'f1', label: { es: "Precio del stop loss (pesos)", en: "Stop loss price (pesos)" }, answer: 73.6, unit: 'MXN', tolerance: { abs: 0.005 } },
      { id: 'f2', label: { es: "Pérdida total si se activa (pesos)", en: "Total loss if triggered (pesos)" }, answer: 640, unit: 'MXN', tolerance: { abs: 0.5 } },
    ],
    explanation: {
      es: "Stop: 80 × (1 − 0.08) = $73.60. Pérdida por acción: 80 − 73.60 = $6.40; total: 6.40 × 100 = $640. En un salto brusco de precio la venta podría ejecutarse algo más abajo. Error común: restar 8 pesos en lugar de 8 % y poner el stop en $72.",
      en: "Stop: 80 × (1 − 0.08) = $73.60. Loss per share: 80 − 73.60 = $6.40; total: 6.40 × 100 = $640. In a sharp price gap the sale could execute somewhat lower. Common mistake: subtracting 8 pesos instead of 8% and setting the stop at $72.",
    },
    difficulty: 2,
    points: 15,
    competency: 'technical-analysis',
  },
  {
    id: 'INV-12-E6',
    level: 4,
    module: 'INV-12',
    kind: 'mcq',
    flavor: 'interpret',
    context: {
      es: "Una acción subió 25 % en tres semanas y su RSI de 14 días marca 78.",
      en: "A stock rose 25% in three weeks and its 14-day RSI reads 78.",
    },
    prompt: {
      es: "¿Cuál es la interpretación más adecuada de ese RSI?",
      en: "What is the most appropriate interpretation of that RSI?",
    },
    options: [
      { id: 'INV-12-E6-a', text: { es: "Zona de sobreventa: es momento seguro de comprar", en: "Oversold zone: it is a safe time to buy" } },
      { id: 'INV-12-E6-b', text: { es: "La empresa tiene 78 % de margen neto", en: "The company has a 78% net margin" } },
      { id: 'INV-12-E6-c', text: { es: "Zona de sobrecompra: subió muy rápido y podría corregir, aunque no es una orden de venta", en: "Overbought zone: it rose very fast and could correct, although it is not a sell order" } },
      { id: 'INV-12-E6-d', text: { es: "Hay 78 % de probabilidad de que mañana suba", en: "There is a 78% probability it rises tomorrow" } },
    ],
    correctOptionId: 'INV-12-E6-c',
    explanation: {
      es: "Por convención, un RSI arriba de 70 indica sobrecompra: el precio subió con mucha fuerza y podría corregir o moverse de lado. Es una alerta, no una certeza, y no es una probabilidad ni un dato contable. Sobreventa es abajo de 30. Error común: leer el RSI como porcentaje de probabilidad.",
      en: "By convention, an RSI above 70 signals overbought: the price rose very strongly and could correct or move sideways. It is an alert, not a certainty, and it is neither a probability nor an accounting figure. Oversold is below 30. Common mistake: reading the RSI as a probability percentage.",
    },
    difficulty: 2,
    points: 15,
    competency: 'technical-analysis',
  },
]
