import type { Exercise, Lesson } from '../../../types'

/**
 * FINCORE — Temario v2.0, área Inversiones y Mercados Financieros (nivel 4, etapa Avanzado):
 * INV.13 a INV.18 (derivados, criptoactivos, Bitcoin/Ethereum/stablecoins, blockchain,
 * gestión del riesgo y estrategias de largo plazo).
 */

const NOTE_DERIV = {
  es: "Contenido educativo. Las referencias a MexDer (Mercado Mexicano de Derivados), a la CNBV y a Banxico son generales: los contratos, márgenes, comisiones y reglas de operación cambian con el tiempo. Verifica la versión vigente (2026) con tu intermediario y con las autoridades antes de operar. Los derivados pueden generar pérdidas mayores a lo invertido.",
  en: "Educational content. References to MexDer (the Mexican Derivatives Exchange), the CNBV and Banxico are general: contracts, margins, fees and trading rules change over time. Verify the current version (2026) with your broker and the authorities before trading. Derivatives can generate losses larger than the amount invested.",
}

const NOTE_CRYPTO = {
  es: "Contenido educativo. En México la Ley para Regular las Instituciones de Tecnología Financiera (Ley Fintech, 2018) llama activos virtuales a los criptoactivos, y Banxico limita cómo las instituciones financieras pueden operar con ellos; también existen obligaciones de prevención de lavado de dinero y efectos fiscales. Las reglas cambian: verifica la versión vigente (2026) con fuentes oficiales (Banxico, CNBV, SAT). Los precios usados son ejemplos hipotéticos.",
  en: "Educational content. In Mexico the Law to Regulate Financial Technology Institutions (Fintech Law, 2018) calls crypto-assets virtual assets, and Banxico limits how financial institutions may operate with them; there are also anti-money-laundering obligations and tax effects. Rules change: verify the current version (2026) with official sources (Banxico, CNBV, SAT). Prices used are hypothetical examples.",
}

const NOTE_STABLE = {
  es: "Contenido educativo. Los datos técnicos de Bitcoin y Ethereum (suministro, mecanismo de consenso, comisiones) y la regulación de las stablecoins pueden cambiar; varios países y la Unión Europea han creado reglas específicas para ellas. Verifica la información vigente (2026). Todos los precios y comisiones son ejemplos hipotéticos.",
  en: "Educational content. Technical data on Bitcoin and Ethereum (supply, consensus mechanism, fees) and stablecoin regulation can change; several countries and the European Union have created specific rules for them. Verify current information (2026). All prices and fees are hypothetical examples.",
}

const NOTE_BLOCKCHAIN = {
  es: "Contenido educativo. La tokenización de valores, los plazos de liquidación y el uso de registros distribuidos por bancos, bolsas y depósitos de valores (como Indeval en México) están en evolución y dependen de la regulación de cada país (en México, CNBV y Banxico). Verifica la versión vigente (2026). Las cifras son ejemplos hipotéticos.",
  en: "Educational content. Securities tokenization, settlement cycles and the use of distributed ledgers by banks, exchanges and securities depositories (such as Indeval in Mexico) are evolving and depend on each country's regulation (in Mexico, CNBV and Banxico). Verify the current version (2026). Figures are hypothetical examples.",
}

const NOTE_LONG = {
  es: "Contenido educativo. Las reglas de las Afores (CONSAR), de los planes personales de retiro y sus beneficios fiscales (SAT), así como las comisiones de fondos, cambian con el tiempo. Verifica la versión vigente (2026). Los rendimientos usados son ejemplos hipotéticos: rendimientos pasados no garantizan rendimientos futuros.",
  en: "Educational content. The rules for Afores (CONSAR), personal retirement plans and their tax benefits (SAT), as well as fund fees, change over time. Verify the current version (2026). Returns used are hypothetical examples: past returns do not guarantee future returns.",
}

export const lessons: Lesson[] = [
  // ───────────────────────────── INV-13 ─────────────────────────────
  {
    id: 'INV-13',
    level: 4,
    topicIds: ['INV.13'],
    title: { es: "Derivados financieros: fundamentos", en: "Financial derivatives: fundamentals" },
    summary: {
      es: "Un derivado es un contrato cuyo valor depende de otro activo; forwards, futuros, opciones y swaps sirven para cubrirse de riesgos o para especular con apalancamiento.",
      en: "A derivative is a contract whose value depends on another asset; forwards, futures, options and swaps are used to hedge risks or to speculate with leverage.",
    },
    minutes: 11,
    objectives: [
      { es: "Explicar qué es un derivado y qué es su activo subyacente.", en: "Explain what a derivative is and what its underlying asset is." },
      { es: "Distinguir forwards, futuros, opciones y swaps.", en: "Distinguish forwards, futures, options and swaps." },
      { es: "Calcular el resultado de una opción call o put y de un futuro al vencimiento.", en: "Compute the payoff of a call or put option and of a future at expiration." },
      { es: "Diferenciar el uso de derivados para cobertura y para especulación.", en: "Differentiate using derivatives for hedging versus speculation." },
    ],
    theory: [
      {
        heading: { es: "¿Qué es un derivado?", en: "What is a derivative?" },
        body: [
          {
            es: "Un **derivado** es un contrato cuyo valor **se deriva** de otra cosa, llamada **activo subyacente**: el dólar, una acción, un índice, el maíz o una tasa de interés. El contrato no es el dólar; es un acuerdo sobre qué pasará con el dólar.",
            en: "A **derivative** is a contract whose value **derives** from something else, called the **underlying asset**: the dollar, a stock, an index, corn or an interest rate. The contract is not the dollar; it is an agreement about what will happen with the dollar.",
          },
          {
            es: "Un **forward** es un acuerdo privado para comprar o vender algo en una fecha futura a un precio fijado hoy. Lo negocian dos partes a la medida, fuera de bolsa. Un **futuro** es lo mismo, pero **estandarizado** (tamaño, fecha, calidad) y negociado en un mercado organizado; en México, el **MexDer**.",
            en: "A **forward** is a private agreement to buy or sell something on a future date at a price set today. Two parties negotiate it to measure, over the counter. A **future** is the same, but **standardized** (size, date, quality) and traded on an organized exchange; in Mexico, **MexDer**.",
          },
          {
            es: "En los futuros hay una **cámara de compensación** que se pone en medio de comprador y vendedor y reduce el **riesgo de contraparte** (que el otro no cumpla). A cambio, cada parte deposita un **margen**: una garantía, como el depósito al rentar un departamento. Las ganancias y pérdidas se liquidan todos los días.",
            en: "In futures there is a **clearing house** that stands between buyer and seller and reduces **counterparty risk** (the risk that the other side does not pay). In exchange, each side posts **margin**: a guarantee, like the deposit when renting an apartment. Gains and losses are settled every day.",
          },
          {
            es: "Mini ejemplo: un importador de Monterrey pagará USD 50,000 en tres meses. Firma un forward con su banco a $18.00 por dólar (tipo hipotético). Si el dólar sube a $19.00, él sigue pagando $18.00: se ahorró $50,000.",
            en: "Mini example: an importer in Monterrey will pay USD 50,000 in three months. He signs a forward with his bank at $18.00 per dollar (hypothetical rate). If the dollar rises to $19.00, he still pays $18.00: he saved $50,000.",
          },
        ],
        formulas: [
          {
            name: { es: "Resultado de un futuro o forward al vencimiento", en: "Result of a future or forward at expiration" },
            expression: "Larga: (Precio final − Precio pactado) × Tamaño del contrato   ·   Corta: (Precio pactado − Precio final) × Tamaño del contrato",
            variables: [
              { symbol: "Precio final", meaning: { es: "Precio del subyacente al vencimiento o al cerrar la posición (por ejemplo, pesos por dólar).", en: "Price of the underlying at expiration or when closing the position (for example, pesos per dollar)." } },
              { symbol: "Precio pactado", meaning: { es: "Precio fijado hoy en el contrato, en pesos por unidad.", en: "Price set today in the contract, in pesos per unit." } },
              { symbol: "Tamaño del contrato", meaning: { es: "Cuántas unidades cubre el contrato (por ejemplo, USD 10,000); si son varios contratos, multiplica por el número de contratos.", en: "How many units the contract covers (for example, USD 10,000); if there are several contracts, multiply by the number of contracts." } },
              { symbol: "Larga / Corta", meaning: { es: "Larga: te comprometes a comprar (ganas si sube). Corta: te comprometes a vender (ganas si baja).", en: "Long: you commit to buy (gain if it rises). Short: you commit to sell (gain if it falls)." } },
            ],
            steps: [
              { es: "Identifica si tu posición es larga (compras) o corta (vendes).", en: "Identify whether your position is long (you buy) or short (you sell)." },
              { es: "Calcula la diferencia de precio por unidad según tu posición.", en: "Compute the price difference per unit according to your position." },
              { es: "Multiplica por el tamaño total (unidades por contrato × número de contratos). Positivo es ganancia; negativo, pérdida.", en: "Multiply by the total size (units per contract × number of contracts). Positive is a gain; negative, a loss." },
            ],
            example: {
              es: "Compras (larga) un futuro de USD 20,000 a $19.00 por dólar y al vencer el dólar vale $18.60. Diferencia: 18.60 − 19.00 = −0.40. Resultado: −0.40 × 20,000 = **−$8,000** (pérdida). Quien estaba en la posición corta gana +$8,000.",
              en: "You buy (long) a USD 20,000 future at $19.00 per dollar and at expiration the dollar is worth $18.60. Difference: 18.60 − 19.00 = −0.40. Result: −0.40 × 20,000 = **−$8,000** (loss). The short side gains +$8,000.",
            },
            interpret: {
              es: "Lo que gana una parte lo pierde la otra. Si te estás cubriendo, una pérdida en el futuro suele compensarse con un mejor precio en el mercado.",
              en: "What one side gains, the other loses. If you are hedging, a loss on the future is usually offset by a better price in the market.",
            },
            mistake: {
              es: "Usar el signo de la posición contraria, u olvidar multiplicar por el número de contratos.",
              en: "Using the sign of the opposite position, or forgetting to multiply by the number of contracts.",
            },
          },
        ],
        bullets: [
          { es: "Posición larga: te comprometes a comprar; ganas si el precio sube.", en: "Long position: you commit to buy; you gain if the price rises." },
          { es: "Posición corta: te comprometes a vender; ganas si el precio baja.", en: "Short position: you commit to sell; you gain if the price falls." },
          { es: "Forward: a la medida, privado, con riesgo de contraparte.", en: "Forward: tailored, private, with counterparty risk." },
          { es: "Futuro: estandarizado, en bolsa, con cámara de compensación y margen.", en: "Future: standardized, exchange-traded, with clearing house and margin." },
        ],
      },
      {
        heading: { es: "Opciones: derecho, no obligación", en: "Options: a right, not a duty" },
        body: [
          {
            es: "Una **opción** da a quien la compra el **derecho, pero no la obligación**, de comprar o vender un activo a un precio fijo llamado **precio de ejercicio** (strike), hasta o en una fecha de vencimiento. Por ese derecho paga una **prima**, como el seguro del coche.",
            en: "An **option** gives its buyer the **right, but not the obligation**, to buy or sell an asset at a fixed price called the **strike price**, up to or on an expiration date. For that right the buyer pays a **premium**, like car insurance.",
          },
          {
            es: "Una **opción call** es el derecho a **comprar**: conviene si el precio sube por encima del strike. Una **opción put** es el derecho a **vender**: conviene si el precio baja por debajo del strike. Si no conviene ejercer, el comprador la deja vencer y solo pierde la prima.",
            en: "A **call option** is the right to **buy**: it pays off if the price rises above the strike. A **put option** is the right to **sell**: it pays off if the price falls below the strike. If exercising is not worthwhile, the buyer lets it expire and loses only the premium.",
          },
          {
            es: "El **vendedor** (emisor) de la opción cobra la prima, pero sí queda **obligado** si el comprador ejerce. Por eso su ganancia está limitada a la prima y su pérdida puede ser muy grande.",
            en: "The option **seller** (writer) collects the premium, but is **obligated** if the buyer exercises. That is why the seller's gain is limited to the premium while the loss can be very large.",
          },
          {
            es: "Mini ejemplo: compras un call sobre una acción con strike $100 y prima $5. Al vencer la acción vale $112. Ejerces: ganas 112 − 100 = $12, menos la prima $5 = $7 por acción.",
            en: "Mini example: you buy a call on a stock with a $100 strike and a $5 premium. At expiration the stock is worth $112. You exercise: you gain 112 − 100 = $12, minus the $5 premium = $7 per share.",
          },
        ],
        formulas: [
          {
            name: { es: "Ganancia neta de comprar una opción call", en: "Net gain from buying a call option" },
            expression: "Ganancia call = máx(Precio final − Strike, 0) − Prima",
            variables: [
              { symbol: "máx( , 0)", meaning: { es: "Toma el mayor de los dos números: si la resta sale negativa, vale 0 porque no ejerces.", en: "Take the larger of the two numbers: if the subtraction is negative, it is 0 because you do not exercise." } },
              { symbol: "Precio final", meaning: { es: "Precio de la acción al vencimiento, en pesos.", en: "Stock price at expiration, in pesos." } },
              { symbol: "Strike", meaning: { es: "Precio de ejercicio: al que tienes derecho a comprar, en pesos.", en: "Strike price: the price at which you have the right to buy, in pesos." } },
              { symbol: "Prima", meaning: { es: "Lo que pagaste por la opción, en pesos por acción.", en: "What you paid for the option, in pesos per share." } },
            ],
            steps: [
              { es: "Resta el strike al precio final; si sale negativo, usa 0.", en: "Subtract the strike from the final price; if it is negative, use 0." },
              { es: "Resta la prima: es tu ganancia (o pérdida) por acción.", en: "Subtract the premium: that is your gain (or loss) per share." },
              { es: "Multiplica por el número de acciones que cubren tus opciones.", en: "Multiply by the number of shares your options cover." },
            ],
            example: {
              es: "Call con strike $50 y prima $3; al vencer la acción vale $58. máx(58 − 50, 0) = 8. Ganancia: 8 − 3 = $5 por acción. Con 200 acciones: 5 × 200 = **$1,000**. Si la acción terminara en $47: máx(−3, 0) = 0; 0 − 3 = −$3 por acción (solo pierdes la prima).",
              en: "Call with a $50 strike and $3 premium; at expiration the stock is worth $58. max(58 − 50, 0) = 8. Gain: 8 − 3 = $5 per share. With 200 shares: 5 × 200 = **$1,000**. If the stock ended at $47: max(−3, 0) = 0; 0 − 3 = −$3 per share (you only lose the premium).",
            },
            interpret: {
              es: "Punto de equilibrio: strike + prima (aquí $53). Por encima ganas; por debajo pierdes como máximo la prima.",
              en: "Break-even: strike + premium (here $53). Above it you gain; below it you lose at most the premium.",
            },
            mistake: {
              es: "Olvidar restar la prima y reportar solo la diferencia entre precio final y strike.",
              en: "Forgetting to subtract the premium and reporting only the difference between final price and strike.",
            },
          },
          {
            name: { es: "Ganancia neta de comprar una opción put", en: "Net gain from buying a put option" },
            expression: "Ganancia put = máx(Strike − Precio final, 0) − Prima",
            variables: [
              { symbol: "Strike", meaning: { es: "Precio de ejercicio: al que tienes derecho a vender, en pesos.", en: "Strike price: the price at which you have the right to sell, in pesos." } },
              { symbol: "Precio final", meaning: { es: "Precio de la acción al vencimiento, en pesos.", en: "Stock price at expiration, in pesos." } },
              { symbol: "Prima", meaning: { es: "Lo que pagaste por la opción, en pesos por acción.", en: "What you paid for the option, in pesos per share." } },
            ],
            steps: [
              { es: "Resta el precio final al strike; si sale negativo, usa 0.", en: "Subtract the final price from the strike; if it is negative, use 0." },
              { es: "Resta la prima y multiplica por el número de acciones.", en: "Subtract the premium and multiply by the number of shares." },
            ],
            example: {
              es: "Put con strike $80 y prima $4; al vencer la acción vale $70. máx(80 − 70, 0) = 10. Ganancia: 10 − 4 = **$6 por acción**. Si terminara en $85: máx(−5, 0) = 0; 0 − 4 = −$4 por acción.",
              en: "Put with an $80 strike and $4 premium; at expiration the stock is worth $70. max(80 − 70, 0) = 10. Gain: 10 − 4 = **$6 per share**. If it ended at $85: max(−5, 0) = 0; 0 − 4 = −$4 per share.",
            },
            interpret: {
              es: "Si ya tienes las acciones, el put funciona como seguro: fija un piso de venta en el strike a cambio de la prima.",
              en: "If you already own the shares, the put works as insurance: it sets a sale floor at the strike in exchange for the premium.",
            },
            mistake: {
              es: "Invertir la resta (precio final − strike) como si fuera un call.",
              en: "Reversing the subtraction (final price − strike) as if it were a call.",
            },
          },
        ],
      },
      {
        heading: { es: "¿Protegerte o apostar?", en: "Protect yourself or bet?" },
        body: [
          {
            es: "**Cubrirse** es usar un derivado para reducir un riesgo que ya tienes: el agricultor que vende futuros de maíz para asegurar su precio, o la empresa con deuda en dólares que compra dólares a futuro. **Especular** es tomar un riesgo que no tenías para intentar ganar con un movimiento del precio.",
            en: "**Hedging** is using a derivative to reduce a risk you already have: the farmer who sells corn futures to lock in a price, or the company with dollar debt that buys dollars forward. **Speculating** is taking a risk you did not have in order to try to profit from a price move.",
          },
          {
            es: "Los derivados tienen **apalancamiento**: con poco dinero (margen o prima) controlas un valor mucho mayor (el **nocional**). Eso multiplica las ganancias y también las pérdidas. Si tu margen baja de cierto nivel, te piden depositar más (**llamada de margen**) o cierran tu posición.",
            en: "Derivatives carry **leverage**: with little money (margin or premium) you control a much larger value (the **notional**). That multiplies gains and losses alike. If your margin falls below a certain level, you are asked to deposit more (**margin call**) or your position is closed.",
          },
          {
            es: "Un **swap** es un intercambio de flujos entre dos partes. El más común es el de tasas: una empresa con un crédito a tasa variable la cambia por pagos a tasa fija para saber exactamente cuánto pagará.",
            en: "A **swap** is an exchange of cash flows between two parties. The most common is the interest rate swap: a company with a floating-rate loan swaps it for fixed-rate payments so it knows exactly how much it will pay.",
          },
          {
            es: "Mini ejemplo: con un margen de $20,000 controlas un futuro de $200,000 (10 %). Si el subyacente sube 5 %, ganas $10,000: un 50 % sobre tu margen. Si baja 5 %, pierdes la mitad de tu margen.",
            en: "Mini example: with $20,000 of margin you control a $200,000 future (10%). If the underlying rises 5%, you gain $10,000: 50% on your margin. If it falls 5%, you lose half your margin.",
          },
        ],
        formulas: [
          {
            name: { es: "Nocional, margen y rendimiento sobre el margen", en: "Notional, margin and return on margin" },
            expression: "Nocional = Unidades × Precio pactado   ·   Margen = Nocional × % de margen   ·   Rendimiento sobre margen = Ganancia o pérdida ÷ Margen × 100",
            variables: [
              { symbol: "Nocional", meaning: { es: "Valor total que controlas con el contrato, en pesos.", en: "Total value you control with the contract, in pesos." } },
              { symbol: "Unidades", meaning: { es: "Tamaño del contrato (por ejemplo, USD 10,000).", en: "Contract size (for example, USD 10,000)." } },
              { symbol: "Precio pactado", meaning: { es: "Precio por unidad fijado al abrir la posición, en pesos.", en: "Price per unit set when opening the position, in pesos." } },
              { symbol: "% de margen", meaning: { es: "Porcentaje del nocional que debes depositar como garantía, en decimal (10% = 0.10).", en: "Percentage of the notional you must post as a guarantee, as a decimal (10% = 0.10)." } },
              { symbol: "Ganancia o pérdida", meaning: { es: "Resultado del futuro en pesos: (Precio final − Precio pactado) × Unidades, si es larga.", en: "Result of the future in pesos: (Final price − Agreed price) × Units, if long." } },
            ],
            steps: [
              { es: "Calcula el nocional: unidades × precio pactado.", en: "Compute the notional: units × agreed price." },
              { es: "Calcula el margen: nocional × % de margen.", en: "Compute the margin: notional × margin %." },
              { es: "Calcula la ganancia o pérdida con el cambio de precio.", en: "Compute the gain or loss from the price change." },
              { es: "Divide la ganancia entre el margen (no entre el nocional) y multiplica por 100.", en: "Divide the gain by the margin (not by the notional) and multiply by 100." },
            ],
            example: {
              es: "Futuro de USD 5,000 a $19.00, margen 8%. Nocional: 5,000 × 19.00 = $95,000. Margen: 95,000 × 0.08 = $7,600. El dólar sube a $19.19: ganancia (19.19 − 19.00) × 5,000 = $950. Rendimiento: 950 ÷ 7,600 = 0.125 → **12.5%**, aunque el dólar solo subió 1%.",
              en: "USD 5,000 future at $19.00, 8% margin. Notional: 5,000 × 19.00 = $95,000. Margin: 95,000 × 0.08 = $7,600. The dollar rises to $19.19: gain (19.19 − 19.00) × 5,000 = $950. Return: 950 ÷ 7,600 = 0.125 → **12.5%**, even though the dollar only rose 1%.",
            },
            interpret: {
              es: "El apalancamiento es nocional ÷ margen (aquí 1 ÷ 0.08 = 12.5 veces): multiplica igual las pérdidas. Una baja de 1% te costaría 12.5% de tu margen.",
              en: "Leverage is notional ÷ margin (here 1 ÷ 0.08 = 12.5 times): it multiplies losses equally. A 1% drop would cost you 12.5% of your margin.",
            },
            mistake: {
              es: "Medir el rendimiento contra el nocional en lugar del margen que realmente pusiste.",
              en: "Measuring the return against the notional instead of the margin you actually put up.",
            },
          },
        ],
      },
    ],
    examples: [
      {
        title: { es: "Un importador se cubre con futuros de dólar", en: "An importer hedges with dollar futures" },
        problem: {
          es: "Una empresa pagará USD 100,000 en tres meses. Compra 10 futuros de dólar de USD 10,000 cada uno a $18.50. Al vencimiento el dólar vale $19.30. ¿Cuánto gana con los futuros y cuánto le cuesta en total el pago?",
          en: "A company will pay USD 100,000 in three months. It buys 10 dollar futures of USD 10,000 each at $18.50. At expiration the dollar is worth $19.30. How much does it gain on the futures and what does the payment cost in total?",
        },
        steps: [
          { es: "Posición larga: ganancia = (19.30 − 18.50) × 100,000 = $80,000.", en: "Long position: gain = (19.30 − 18.50) × 100,000 = $80,000." },
          { es: "Compra los dólares en el mercado: 100,000 × 19.30 = $1,930,000.", en: "It buys the dollars in the market: 100,000 × 19.30 = $1,930,000." },
          { es: "Costo neto: 1,930,000 − 80,000 = $1,850,000.", en: "Net cost: 1,930,000 − 80,000 = $1,850,000." },
          { es: "Comprobación: 100,000 × 18.50 = $1,850,000, el precio que fijó.", en: "Check: 100,000 × 18.50 = $1,850,000, the price it locked in." },
        ],
        result: {
          es: "La ganancia del futuro compensa la subida del dólar: la empresa paga efectivamente $18.50 por dólar. Si el dólar hubiera bajado, perdería en el futuro pero compraría más barato: la cobertura elimina la sorpresa, no garantiza ganar.",
          en: "The futures gain offsets the dollar's rise: the company effectively pays $18.50 per dollar. Had the dollar fallen, it would lose on the future but buy cheaper: the hedge removes the surprise, it does not guarantee a gain.",
        },
      },
      {
        title: { es: "Un put como seguro de tu portafolio", en: "A put as insurance for your portfolio" },
        problem: {
          es: "Tienes 100 acciones que valen $250 cada una. Compras puts con strike $240 y prima $6 por acción. Al vencer la acción vale $200. ¿Cuál es el resultado del put y el valor protegido?",
          en: "You own 100 shares worth $250 each. You buy puts with a $240 strike and a $6 premium per share. At expiration the stock is worth $200. What is the put's result and the protected value?",
        },
        steps: [
          { es: "Valor del put al vencer: máx(240 − 200, 0) = $40 por acción.", en: "Put value at expiration: max(240 − 200, 0) = $40 per share." },
          { es: "Ganancia neta del put: 40 − 6 = $34 por acción; × 100 = $3,400.", en: "Net put gain: 40 − 6 = $34 per share; × 100 = $3,400." },
          { es: "Acciones: 100 × 200 = $20,000; más el valor del put 100 × 40 = $4,000 → $24,000.", en: "Shares: 100 × 200 = $20,000; plus the put's value 100 × 40 = $4,000 → $24,000." },
          { es: "Restando la prima pagada ($600), tu piso efectivo es $23,400 (234 por acción).", en: "Subtracting the premium paid ($600), your effective floor is $23,400 (234 per share)." },
        ],
        result: {
          es: "Sin el put tu posición habría caído a $20,000; con el put, a $23,400. Pagaste $600 de prima como un seguro contra caídas fuertes.",
          en: "Without the put your position would have fallen to $20,000; with the put, to $23,400. You paid a $600 premium as insurance against steep drops.",
        },
      },
    ],
    keyPoints: [
      { es: "Un derivado vale según su activo subyacente (dólar, acción, índice, tasa, materia prima).", en: "A derivative's value depends on its underlying asset (dollar, stock, index, rate, commodity)." },
      { es: "Forwards: a la medida y privados; futuros: estandarizados, en bolsa y con margen.", en: "Forwards: tailored and private; futures: standardized, exchange-traded and margined." },
      { es: "Una opción da un derecho a cambio de una prima; el vendedor asume la obligación.", en: "An option grants a right in exchange for a premium; the seller takes on the obligation." },
      { es: "Cubrirse reduce un riesgo que ya tienes; especular agrega riesgo para intentar ganar.", en: "Hedging reduces a risk you already have; speculating adds risk to try to profit." },
      { es: "El apalancamiento multiplica ganancias y pérdidas; puede costar más que lo invertido.", en: "Leverage multiplies gains and losses; it can cost more than what you invested." },
    ],
    normativeNote: NOTE_DERIV,
    exerciseIds: ['INV-13-E2', 'INV-13-E3', 'INV-13-E4', 'INV-13-E5', 'INV-13-E6'],
  },

  // ───────────────────────────── INV-14 ─────────────────────────────
  {
    id: 'INV-14',
    level: 4,
    topicIds: ['INV.14'],
    title: { es: "Criptomonedas y activos digitales", en: "Cryptocurrencies and digital assets" },
    summary: {
      es: "Los criptoactivos son registros digitales que se transfieren sin intermediarios gracias a la criptografía; pueden ser útiles, pero son muy volátiles y exigen cuidar la custodia, el tamaño de la posición y las estafas.",
      en: "Crypto-assets are digital records transferred without intermediaries thanks to cryptography; they can be useful, but they are very volatile and demand care with custody, position size and scams.",
    },
    minutes: 11,
    objectives: [
      { es: "Explicar qué es un criptoactivo, una billetera y una clave privada.", en: "Explain what a crypto-asset, a wallet and a private key are." },
      { es: "Distinguir criptomonedas, tokens, stablecoins, NFT y monedas digitales de bancos centrales.", en: "Distinguish cryptocurrencies, tokens, stablecoins, NFTs and central bank digital currencies." },
      { es: "Identificar los riesgos principales: volatilidad, custodia, fraudes y regulación.", en: "Identify the main risks: volatility, custody, fraud and regulation." },
      { es: "Dimensionar una posición en cripto según su efecto en todo el portafolio.", en: "Size a crypto position by its effect on the whole portfolio." },
    ],
    theory: [
      {
        heading: { es: "¿Dónde vive tu cripto?", en: "Where does your crypto live?" },
        body: [
          {
            es: "Un **criptoactivo** es un registro de valor digital que vive en una **blockchain**: un libro de cuentas compartido por miles de computadoras. Nadie lo emite como un banco; las reglas están escritas en el software y se protegen con **criptografía** (matemáticas para cifrar y firmar).",
            en: "A **crypto-asset** is a digital record of value that lives on a **blockchain**: a ledger shared by thousands of computers. No one issues it like a bank; the rules are written in software and protected by **cryptography** (mathematics to encrypt and sign).",
          },
          {
            es: "Para usarlo necesitas una **billetera** (wallet) que maneja dos llaves. La **clave pública** es como tu CLABE: la compartes para recibir. La **clave privada** es como el NIP y la firma juntos: quien la tiene puede mover tus fondos. Si la pierdes, nadie puede recuperarla.",
            en: "To use it you need a **wallet** that handles two keys. The **public key** is like your bank account number: you share it to receive funds. The **private key** is like your PIN and signature together: whoever has it can move your funds. If you lose it, no one can recover it.",
          },
          {
            es: "Hay dos formas de custodia. En una **plataforma de intercambio** (exchange) la empresa guarda tus claves: es cómodo, pero dependes de que no quiebre ni la hackeen. En la **autocustodia** guardas tú la clave (por ejemplo, en una billetera física): no dependes de nadie, pero un descuido es irreversible.",
            en: "There are two forms of custody. On an **exchange** the company holds your keys: it is convenient, but you depend on it not going bankrupt or being hacked. With **self-custody** you keep the key (for example, in a hardware wallet): you depend on no one, but a slip is irreversible.",
          },
          {
            es: "Mini ejemplo: Ana compra cripto en una plataforma y Luis la pasa a su billetera física. Si la plataforma congela retiros, Ana espera; si Luis pierde su frase de recuperación, pierde todo.",
            en: "Mini example: Ana buys crypto on an exchange and Luis moves his to a hardware wallet. If the exchange freezes withdrawals, Ana waits; if Luis loses his recovery phrase, he loses everything.",
          },
        ],
      },
      {
        heading: { es: "¿Todo lo digital es cripto?", en: "Is everything digital crypto?" },
        body: [
          {
            es: "No todo lo digital es igual. Las **criptomonedas nativas** (como bitcoin o ether) son la moneda propia de su red. Los **tokens** se crean sobre una red existente y representan algo: acceso a un servicio, un voto o un derecho.",
            en: "Not everything digital is the same. **Native cryptocurrencies** (such as bitcoin or ether) are the currency of their own network. **Tokens** are created on top of an existing network and represent something: access to a service, a vote or a right.",
          },
          {
            es: "Las **stablecoins** buscan valer siempre lo mismo que una moneda tradicional, como el dólar. Los **NFT** (tokens no fungibles) son únicos, como un boleto con asiento numerado: registran la propiedad de algo específico. Las **monedas digitales de banco central** (CBDC) no son cripto: las emite un banco central y son dinero oficial en forma digital.",
            en: "**Stablecoins** aim to always be worth the same as a traditional currency, such as the dollar. **NFTs** (non-fungible tokens) are unique, like a ticket with an assigned seat: they record ownership of something specific. **Central bank digital currencies** (CBDCs) are not crypto: a central bank issues them and they are official money in digital form.",
          },
          {
            es: "En México, la Ley Fintech las llama **activos virtuales** y aclara que **no son moneda de curso legal**: nadie está obligado a aceptarlas como pago, a diferencia del peso.",
            en: "In Mexico, the Fintech Law calls them **virtual assets** and clarifies that they are **not legal tender**: no one is required to accept them as payment, unlike the peso.",
          },
        ],
        bullets: [
          { es: "Criptomoneda nativa: la moneda propia de una blockchain.", en: "Native cryptocurrency: a blockchain's own currency." },
          { es: "Token: creado sobre otra red para representar un uso o derecho.", en: "Token: created on another network to represent a use or right." },
          { es: "Stablecoin: busca un precio estable atado a una moneda.", en: "Stablecoin: seeks a stable price pegged to a currency." },
          { es: "NFT: registro único e indivisible de propiedad.", en: "NFT: a unique, indivisible ownership record." },
          { es: "CBDC: dinero digital emitido por un banco central (no es cripto).", en: "CBDC: digital money issued by a central bank (not crypto)." },
        ],
      },
      {
        heading: { es: "¿Cuánto arriesgar en cripto?", en: "How much to risk in crypto?" },
        body: [
          {
            es: "La mayoría de los criptoactivos **no generan flujos** como dividendos o intereses: su precio depende de cuánta gente los quiera usar o comprar. Por eso son muy **volátiles**: caídas de más de la mitad de su valor han ocurrido varias veces en su historia.",
            en: "Most crypto-assets **do not generate cash flows** like dividends or interest: their price depends on how many people want to use or buy them. That is why they are very **volatile**: drops of more than half their value have happened several times in their history.",
          },
          {
            es: "Además hay **fraudes** frecuentes: promesas de rendimientos fijos altísimos, pirámides que pagan con el dinero de los nuevos, proyectos que desaparecen con los fondos y perfiles falsos que piden tus claves. Regla de oro: **nadie legítimo te pide tu clave privada**.",
            en: "There are also frequent **scams**: promises of very high fixed returns, pyramids that pay with newcomers' money, projects that vanish with the funds and fake profiles asking for your keys. Golden rule: **no legitimate party asks for your private key**.",
          },
          {
            es: "La herramienta clave es el **tamaño de la posición**: invierte solo un porcentaje pequeño de tu portafolio que podrías perder sin cambiar tus planes. Así, aun una caída fuerte del cripto tiene un efecto limitado en tu patrimonio total.",
            en: "The key tool is **position size**: invest only a small percentage of your portfolio that you could lose without changing your plans. That way, even a steep crypto drop has a limited effect on your total wealth.",
          },
          {
            es: "Mini ejemplo: con $100,000 invertidos, pones 5 % ($5,000) en cripto. Si cae 70 %, pierdes $3,500: tu portafolio baja 3.5 %, no 70 %.",
            en: "Mini example: with $100,000 invested, you put 5% ($5,000) in crypto. If it falls 70%, you lose $3,500: your portfolio drops 3.5%, not 70%.",
          },
        ],
        formulas: [
          {
            name: { es: "Efecto de una posición en todo el portafolio", en: "Effect of a position on the whole portfolio" },
            expression: "Monto en cripto = Portafolio × Peso   ·   Pérdida = Monto en cripto × Caída   ·   Efecto en el portafolio = Peso × Cambio de precio",
            variables: [
              { symbol: "Portafolio", meaning: { es: "Todo el dinero que tienes invertido, en pesos.", en: "All the money you have invested, in pesos." } },
              { symbol: "Peso", meaning: { es: "Qué parte del portafolio está en esa posición, en % (5% = 0.05).", en: "What share of the portfolio is in that position, in % (5% = 0.05)." } },
              { symbol: "Caída / Cambio de precio", meaning: { es: "Cuánto sube o baja el precio de la posición, en % (cae 60% = −0.60).", en: "How much the position's price rises or falls, in % (falls 60% = −0.60)." } },
              { symbol: "Efecto en el portafolio", meaning: { es: "Cuánto cambia el portafolio completo, en %.", en: "How much the whole portfolio changes, in %." } },
            ],
            steps: [
              { es: "Calcula cuánto dinero hay en la posición: portafolio × peso.", en: "Compute how much money is in the position: portfolio × weight." },
              { es: "Calcula la pérdida en pesos: monto × caída.", en: "Compute the loss in pesos: amount × drop." },
              { es: "Para el efecto total, divide la pérdida entre el portafolio, o multiplica directamente peso × caída.", en: "For the total effect, divide the loss by the portfolio, or directly multiply weight × drop." },
            ],
            example: {
              es: "Portafolio $150,000 con 8% en cripto: 150,000 × 0.08 = $12,000. El cripto cae 40%: 12,000 × 0.40 = $4,800 de pérdida. Efecto: 4,800 ÷ 150,000 = 0.032 → **3.2%** (igual a 8% × 40%).",
              en: "A $150,000 portfolio with 8% in crypto: 150,000 × 0.08 = $12,000. Crypto falls 40%: 12,000 × 0.40 = $4,800 loss. Effect: 4,800 ÷ 150,000 = 0.032 → **3.2%** (same as 8% × 40%).",
            },
            interpret: {
              es: "Usa la fórmula al revés para decidir el tamaño: si no quieres perder más de 2% del total aunque el cripto caiga 50%, el peso máximo es 2% ÷ 50% = 4%.",
              en: "Use the formula backwards to decide the size: if you do not want to lose more than 2% of the total even if crypto falls 50%, the maximum weight is 2% ÷ 50% = 4%.",
            },
            mistake: {
              es: "Decir que el portafolio cayó lo mismo que el cripto, olvidando multiplicar por el peso.",
              en: "Saying the portfolio fell as much as crypto did, forgetting to multiply by the weight.",
            },
          },
        ],
      },
    ],
    examples: [
      {
        title: { es: "¿Cuánto pesa una caída del cripto en tu patrimonio?", en: "How much does a crypto drop weigh on your wealth?" },
        problem: {
          es: "Mariana tiene $400,000 invertidos: 90 % en un fondo diversificado y 10 % en criptoactivos. En un año el fondo sube 6 % y el cripto cae 50 %. ¿Cuál es el cambio total de su portafolio?",
          en: "Mariana has $400,000 invested: 90% in a diversified fund and 10% in crypto-assets. In one year the fund rises 6% and crypto falls 50%. What is her portfolio's total change?",
        },
        steps: [
          { es: "Fondo: 360,000 × 6 % = +$21,600.", en: "Fund: 360,000 × 6% = +$21,600." },
          { es: "Cripto: 40,000 × −50 % = −$20,000.", en: "Crypto: 40,000 × −50% = −$20,000." },
          { es: "Total: 21,600 − 20,000 = +$1,600.", en: "Total: 21,600 − 20,000 = +$1,600." },
          { es: "Porcentaje: 1,600 ÷ 400,000 = +0.4 %.", en: "Percentage: 1,600 ÷ 400,000 = +0.4%." },
        ],
        result: {
          es: "Aunque el cripto perdió la mitad, el portafolio terminó con +0.4 %. Con 40 % en cripto, el resultado habría sido muy negativo: el tamaño de la posición decide el daño.",
          en: "Although crypto lost half, the portfolio ended at +0.4%. With 40% in crypto, the result would have been very negative: position size decides the damage.",
        },
      },
      {
        title: { es: "Detectar una oferta fraudulenta", en: "Spotting a fraudulent offer" },
        problem: {
          es: "Un contacto en redes ofrece: deposita $10,000 en su plataforma de cripto y recibe 15 % mensual garantizado; si traes a dos amigos, ganas bono. ¿Qué señales de alerta hay?",
          en: "A social media contact offers: deposit $10,000 on his crypto platform and receive a guaranteed 15% per month; bring two friends and earn a bonus. What red flags are there?",
        },
        steps: [
          { es: "15 % mensual compuesto es más de 400 % al año (1.15¹² ≈ 5.35): ningún activo legítimo lo garantiza.", en: "15% monthly compounded is over 400% a year (1.15¹² ≈ 5.35): no legitimate asset guarantees that." },
          { es: "Garantizado: en un activo volátil nadie puede garantizar rendimientos.", en: "Guaranteed: in a volatile asset no one can guarantee returns." },
          { es: "Bono por reclutar: rasgo típico de esquemas piramidales.", en: "Recruiting bonus: a typical feature of pyramid schemes." },
          { es: "Contacto no solicitado en redes y plataforma desconocida: verifica si está autorizada.", en: "Unsolicited contact on social media and unknown platform: check whether it is authorized." },
        ],
        result: {
          es: "Hay al menos cuatro señales de fraude. La decisión correcta es no depositar y, si quieres exposición a cripto, usar una plataforma conocida con un monto pequeño.",
          en: "There are at least four fraud signals. The right decision is not to deposit and, if you want crypto exposure, to use a known platform with a small amount.",
        },
      },
    ],
    keyPoints: [
      { es: "Un criptoactivo es un registro digital en una blockchain, protegido con criptografía.", en: "A crypto-asset is a digital record on a blockchain, protected by cryptography." },
      { es: "Quien controla la clave privada controla los fondos; perderla es irreversible.", en: "Whoever controls the private key controls the funds; losing it is irreversible." },
      { es: "Criptomonedas, tokens, stablecoins y NFT son distintos; una CBDC no es cripto.", en: "Cryptocurrencies, tokens, stablecoins and NFTs differ; a CBDC is not crypto." },
      { es: "En México son activos virtuales, no moneda de curso legal.", en: "In Mexico they are virtual assets, not legal tender." },
      { es: "Alta volatilidad y fraudes: limita la posición a lo que puedas perder.", en: "High volatility and scams: limit the position to what you can afford to lose." },
    ],
    normativeNote: NOTE_CRYPTO,
    exerciseIds: ['INV-14-E2', 'INV-14-E3', 'INV-14-E4', 'INV-14-E5', 'INV-14-E6'],
  },

  // ───────────────────────────── INV-15 ─────────────────────────────
  {
    id: 'INV-15',
    level: 4,
    topicIds: ['INV.15'],
    title: { es: "Bitcoin, Ethereum y stablecoins", en: "Bitcoin, Ethereum and stablecoins" },
    summary: {
      es: "Bitcoin es dinero digital escaso, Ethereum es una plataforma de contratos inteligentes y las stablecoins buscan un precio estable; cada uno tiene un diseño, un uso y riesgos distintos.",
      en: "Bitcoin is scarce digital money, Ethereum is a smart-contract platform and stablecoins seek a stable price; each has a different design, use and set of risks.",
    },
    minutes: 11,
    objectives: [
      { es: "Describir el suministro limitado, la minería y la unidad mínima de Bitcoin.", en: "Describe Bitcoin's limited supply, mining and smallest unit." },
      { es: "Explicar qué son los contratos inteligentes y las comisiones de gas en Ethereum.", en: "Explain what smart contracts and gas fees on Ethereum are." },
      { es: "Comparar las stablecoins respaldadas por reservas, por cripto y algorítmicas.", en: "Compare reserve-backed, crypto-backed and algorithmic stablecoins." },
      { es: "Calcular satoshis, comisiones de gas y razones de colateral.", en: "Compute satoshis, gas fees and collateral ratios." },
    ],
    theory: [
      {
        heading: { es: "Bitcoin: dinero con tope", en: "Bitcoin: money with a cap" },
        body: [
          {
            es: "**Bitcoin** nació en 2009 con un documento firmado con el seudónimo Satoshi Nakamoto. Su idea: un dinero digital que se transfiere entre personas sin banco, donde la red entera verifica que nadie gaste dos veces lo mismo.",
            en: "**Bitcoin** was born in 2009 from a paper signed with the pseudonym Satoshi Nakamoto. Its idea: digital money transferred between people without a bank, where the whole network verifies that no one spends the same coin twice.",
          },
          {
            es: "Las transacciones se agrupan en bloques que validan los **mineros** mediante **prueba de trabajo**: compiten con computadoras resolviendo un problema matemático que consume mucha energía. El ganador agrega el bloque y recibe bitcoins nuevos como recompensa.",
            en: "Transactions are grouped into blocks validated by **miners** through **proof of work**: they compete with computers to solve a mathematical puzzle that consumes a lot of energy. The winner adds the block and receives newly created bitcoins as a reward.",
          },
          {
            es: "Su rasgo central es la **escasez**: nunca existirán más de **21 millones** de bitcoins. Aproximadamente cada cuatro años la recompensa a los mineros se reduce a la mitad (el **halving**). Por eso algunos lo comparan con el oro digital, aunque su precio es mucho más volátil.",
            en: "Its central feature is **scarcity**: there will never be more than **21 million** bitcoins. Roughly every four years the miners' reward is cut in half (the **halving**). That is why some compare it to digital gold, although its price is far more volatile.",
          },
          {
            es: "Mini ejemplo: no necesitas comprar un bitcoin entero. La unidad mínima es el **satoshi**: 1 BTC = 100,000,000 satoshis. Con $500 a un precio hipotético de $1,000,000 por BTC compras 0.0005 BTC = 50,000 satoshis.",
            en: "Mini example: you do not need to buy a whole bitcoin. The smallest unit is the **satoshi**: 1 BTC = 100,000,000 satoshis. With $500 at a hypothetical price of $1,000,000 per BTC you buy 0.0005 BTC = 50,000 satoshis.",
          },
        ],
        formulas: [
          {
            name: { es: "Cuántos bitcoins y satoshis compras", en: "How many bitcoins and satoshis you buy" },
            expression: "BTC comprados = Monto ÷ Precio por BTC   ·   Satoshis = BTC × 100,000,000",
            variables: [
              { symbol: "Monto", meaning: { es: "Pesos que inviertes (si la plataforma cobra comisión sobre el monto, usa lo que queda después de restarla).", en: "Pesos you invest (if the platform charges a fee on the amount, use what is left after subtracting it)." } },
              { symbol: "Precio por BTC", meaning: { es: "Lo que cuesta un bitcoin entero, en pesos.", en: "The cost of one whole bitcoin, in pesos." } },
              { symbol: "BTC comprados", meaning: { es: "La fracción de bitcoin que recibes (por ejemplo, 0.0004).", en: "The fraction of bitcoin you receive (for example, 0.0004)." } },
              { symbol: "Satoshis", meaning: { es: "La unidad mínima de bitcoin: 1 BTC = 100,000,000 (cien millones) de satoshis.", en: "Bitcoin's smallest unit: 1 BTC = 100,000,000 (one hundred million) satoshis." } },
            ],
            steps: [
              { es: "Si hay comisión sobre el monto, réstala primero: Monto neto = Monto × (1 − comisión).", en: "If there is a fee on the amount, subtract it first: Net amount = Amount × (1 − fee)." },
              { es: "Divide el monto entre el precio de un BTC.", en: "Divide the amount by the price of one BTC." },
              { es: "Multiplica los BTC por 100,000,000 para pasarlos a satoshis.", en: "Multiply the BTC by 100,000,000 to convert them to satoshis." },
            ],
            example: {
              es: "Inviertes $800 a un precio hipotético de $2,000,000 por BTC, sin comisión. BTC: 800 ÷ 2,000,000 = 0.0004. Satoshis: 0.0004 × 100,000,000 = **40,000 satoshis**.",
              en: "You invest $800 at a hypothetical price of $2,000,000 per BTC, with no fee. BTC: 800 ÷ 2,000,000 = 0.0004. Satoshis: 0.0004 × 100,000,000 = **40,000 satoshis**.",
            },
            mistake: {
              es: "Multiplicar por un millón en lugar de cien millones (te faltarían dos ceros).",
              en: "Multiplying by one million instead of one hundred million (you would be missing two zeros).",
            },
          },
        ],
      },
      {
        heading: { es: "¿Qué hace distinto a Ethereum?", en: "What makes Ethereum different?" },
        body: [
          {
            es: "**Ethereum** (lanzado en 2015) no solo mueve una moneda: permite programar **contratos inteligentes**, programas que se ejecutan solos cuando se cumplen condiciones. Es como una máquina expendedora: metes la moneda correcta y el refresco sale sin que nadie intervenga.",
            en: "**Ethereum** (launched in 2015) does more than move a currency: it lets people program **smart contracts**, programs that run on their own when conditions are met. It is like a vending machine: insert the right coin and the soda comes out without anyone stepping in.",
          },
          {
            es: "Su moneda nativa es el **ether (ETH)**. Cada operación consume **gas**, una medida del trabajo de cómputo; la comisión se paga en ETH y sube cuando la red está congestionada. Sobre Ethereum funcionan tokens, NFT, stablecoins y aplicaciones financieras descentralizadas (**DeFi**).",
            en: "Its native currency is **ether (ETH)**. Each operation consumes **gas**, a measure of computing work; the fee is paid in ETH and rises when the network is congested. Tokens, NFTs, stablecoins and decentralized finance applications (**DeFi**) run on Ethereum.",
          },
          {
            es: "En 2022 Ethereum cambió a **prueba de participación**: en lugar de mineros, validan los bloques quienes **bloquean (stakean)** ETH como garantía; si hacen trampa, pierden parte. Esto redujo muchísimo su consumo de energía. A diferencia de Bitcoin, el ETH no tiene un tope fijo de unidades.",
            en: "In 2022 Ethereum switched to **proof of stake**: instead of miners, blocks are validated by those who **lock (stake)** ETH as collateral; if they cheat, they lose part of it. This drastically cut its energy use. Unlike Bitcoin, ETH has no fixed cap on units.",
          },
          {
            es: "Mini ejemplo: una transferencia simple usa 21,000 unidades de gas. Si el precio del gas es 10 gwei (1 gwei = 0.000000001 ETH), pagas 210,000 gwei = 0.00021 ETH de comisión.",
            en: "Mini example: a simple transfer uses 21,000 gas units. If the gas price is 10 gwei (1 gwei = 0.000000001 ETH), you pay 210,000 gwei = 0.00021 ETH in fees.",
          },
        ],
        formulas: [
          {
            name: { es: "Comisión de gas en Ethereum (en ETH y en pesos)", en: "Ethereum gas fee (in ETH and in pesos)" },
            expression: "Comisión (ETH) = Unidades de gas × Precio del gas (gwei) × 0.000000001   ·   Comisión (pesos) = Comisión (ETH) × Precio del ETH",
            variables: [
              { symbol: "Unidades de gas", meaning: { es: "Cuánto trabajo de cómputo consume la operación (una transferencia simple usa 21,000).", en: "How much computing work the operation uses (a simple transfer uses 21,000)." } },
              { symbol: "Precio del gas (gwei)", meaning: { es: "Lo que pagas por cada unidad de gas, en gwei; sube cuando la red está congestionada.", en: "What you pay per unit of gas, in gwei; it rises when the network is congested." } },
              { symbol: "0.000000001", meaning: { es: "Factor para pasar de gwei a ETH: 1 gwei = 0.000000001 ETH (una milmillonésima).", en: "Factor to convert gwei to ETH: 1 gwei = 0.000000001 ETH (one billionth)." } },
              { symbol: "Precio del ETH", meaning: { es: "Lo que cuesta un ether, en pesos.", en: "The cost of one ether, in pesos." } },
            ],
            steps: [
              { es: "Multiplica las unidades de gas por el precio del gas: obtienes la comisión en gwei.", en: "Multiply the gas units by the gas price: you get the fee in gwei." },
              { es: "Multiplica por 0.000000001 para pasarla a ETH.", en: "Multiply by 0.000000001 to convert it to ETH." },
              { es: "Si la quieres en pesos, multiplica los ETH por el precio del ETH.", en: "If you want it in pesos, multiply the ETH by the ETH price." },
            ],
            example: {
              es: "Una operación usa 50,000 unidades de gas a 8 gwei. 50,000 × 8 = 400,000 gwei. En ETH: 400,000 × 0.000000001 = 0.0004 ETH. Con el ETH a $40,000 (hipotético): 0.0004 × 40,000 = **$16**.",
              en: "An operation uses 50,000 gas units at 8 gwei. 50,000 × 8 = 400,000 gwei. In ETH: 400,000 × 0.000000001 = 0.0004 ETH. With ETH at $40,000 (hypothetical): 0.0004 × 40,000 = **$16**.",
            },
            mistake: {
              es: "Olvidar convertir los gwei a ETH y obtener una comisión absurdamente grande.",
              en: "Forgetting to convert gwei to ETH and getting an absurdly large fee.",
            },
          },
        ],
      },
      {
        heading: { es: "¿Estable significa sin riesgo?", en: "Does stable mean risk-free?" },
        body: [
          {
            es: "Una **stablecoin** busca valer siempre 1 dólar (u otra moneda). Sirve para moverse entre criptoactivos sin volver al banco, para pagos internacionales rápidos y como resguardo dentro del ecosistema cripto. Su estabilidad depende de **cómo se respalda**.",
            en: "A **stablecoin** aims to always be worth 1 dollar (or another currency). It is used to move between crypto-assets without going back to the bank, for fast international payments and as a safe spot inside the crypto ecosystem. Its stability depends on **how it is backed**.",
          },
          {
            es: "Hay tres diseños. **Respaldadas por reservas**: un emisor guarda dólares, bonos de corto plazo u otros activos por cada moneda emitida; dependes de que esas reservas existan y sean líquidas. **Respaldadas por cripto**: depositas más valor en cripto del que recibes (**sobrecolateralización**), y si el colateral cae demasiado, se liquida. **Algorítmicas**: intentan sostener el precio con reglas automáticas y poco o ningún respaldo.",
            en: "There are three designs. **Reserve-backed**: an issuer holds dollars, short-term bonds or other assets for each coin issued; you depend on those reserves existing and being liquid. **Crypto-backed**: you deposit more crypto value than you receive (**overcollateralization**), and if the collateral falls too far, it is liquidated. **Algorithmic**: they try to hold the price with automatic rules and little or no backing.",
          },
          {
            es: "Cuando una stablecoin deja de valer 1 dólar se dice que **perdió su paridad** (depeg). En 2022 una stablecoin algorítmica muy grande (TerraUSD) colapsó en días y casi perdió todo su valor. Lección: **estable no es lo mismo que sin riesgo**.",
            en: "When a stablecoin stops being worth 1 dollar it is said to have **lost its peg** (depeg). In 2022 a very large algorithmic stablecoin (TerraUSD) collapsed within days and lost almost all its value. Lesson: **stable is not the same as risk-free**.",
          },
          {
            es: "Mini ejemplo: un protocolo exige 150 % de colateral. Depositas ETH por $15,000 y puedes recibir hasta 10,000 stablecoins. Si el ETH cae 20 %, tu colateral vale $12,000: la razón baja a 120 %, cerca de la liquidación.",
            en: "Mini example: a protocol requires 150% collateral. You deposit $15,000 of ETH and can receive up to 10,000 stablecoins. If ETH drops 20%, your collateral is worth $12,000: the ratio falls to 120%, close to liquidation.",
          },
        ],
        formulas: [
          {
            name: { es: "Razón de colateral de una stablecoin respaldada por cripto", en: "Collateral ratio of a crypto-backed stablecoin" },
            expression: "Razón de colateral = Valor del colateral ÷ Deuda en stablecoins × 100   ·   Máximo de stablecoins = Colateral ÷ Razón mínima",
            variables: [
              { symbol: "Valor del colateral", meaning: { es: "Lo que vale hoy la cripto que depositaste como garantía, en pesos (o dólares).", en: "What the crypto you deposited as a guarantee is worth today, in pesos (or dollars)." } },
              { symbol: "Deuda en stablecoins", meaning: { es: "Cuántas stablecoins recibiste; cada una vale 1 unidad de moneda.", en: "How many stablecoins you received; each is worth 1 unit of currency." } },
              { symbol: "Razón mínima", meaning: { es: "El mínimo que exige el protocolo, en decimal (150% = 1.5). Si tu razón baja de ahí, liquidan tu colateral.", en: "The minimum the protocol requires, as a decimal (150% = 1.5). If your ratio falls below it, your collateral is liquidated." } },
            ],
            steps: [
              { es: "Para saber cuánto puedes recibir, divide el colateral entre la razón mínima en decimal.", en: "To know how much you can receive, divide the collateral by the minimum ratio as a decimal." },
              { es: "Si la cripto cae, calcula el nuevo colateral: Colateral × (1 − caída).", en: "If the crypto falls, compute the new collateral: Collateral × (1 − drop)." },
              { es: "Divide el colateral entre la deuda y multiplica por 100; compáralo con el mínimo.", en: "Divide the collateral by the debt and multiply by 100; compare it with the minimum." },
            ],
            example: {
              es: "Mínimo 200%. Depositas ETH por $24,000: máximo 24,000 ÷ 2 = 12,000 stablecoins. El ETH cae 30%: 24,000 × 0.70 = $16,800. Razón: 16,800 ÷ 12,000 = 1.40 → **140%**, por debajo de 200%: se liquidaría.",
              en: "Minimum 200%. You deposit $24,000 of ETH: maximum 24,000 ÷ 2 = 12,000 stablecoins. ETH falls 30%: 24,000 × 0.70 = $16,800. Ratio: 16,800 ÷ 12,000 = 1.40 → **140%**, below 200%: it would be liquidated.",
            },
            interpret: {
              es: "Mientras más arriba del mínimo estés, más caída aguantas. Pedir el máximo permitido te deja sin margen de seguridad.",
              en: "The further above the minimum you are, the larger the drop you can withstand. Taking the maximum allowed leaves you no safety margin.",
            },
            mistake: {
              es: "Multiplicar el colateral por la razón mínima en vez de dividir, o seguir usando el valor del colateral de antes de la caída.",
              en: "Multiplying the collateral by the minimum ratio instead of dividing, or still using the collateral value from before the drop.",
            },
          },
        ],
      },
    ],
    examples: [
      {
        title: { es: "Comprar bitcoin en fracciones", en: "Buying bitcoin in fractions" },
        problem: {
          es: "Rodrigo invierte $3,000 en bitcoin a un precio hipotético de $1,200,000 por BTC y la plataforma cobra 1 % de comisión sobre el monto. ¿Cuántos BTC y satoshis recibe?",
          en: "Rodrigo invests $3,000 in bitcoin at a hypothetical price of $1,200,000 per BTC and the platform charges a 1% fee on the amount. How many BTC and satoshis does he receive?",
        },
        steps: [
          { es: "Comisión: 3,000 × 1 % = $30; monto invertido neto: $2,970.", en: "Fee: 3,000 × 1% = $30; net amount invested: $2,970." },
          { es: "BTC: 2,970 ÷ 1,200,000 = 0.002475 BTC.", en: "BTC: 2,970 ÷ 1,200,000 = 0.002475 BTC." },
          { es: "Satoshis: 0.002475 × 100,000,000 = 247,500 satoshis.", en: "Satoshis: 0.002475 × 100,000,000 = 247,500 satoshis." },
        ],
        result: {
          es: "Recibe 0.002475 BTC (247,500 satoshis). Para recuperar lo pagado, el precio debe subir lo suficiente para cubrir también la comisión.",
          en: "He receives 0.002475 BTC (247,500 satoshis). To break even, the price must rise enough to cover the fee as well.",
        },
      },
      {
        title: { es: "Vigilar la razón de colateral", en: "Monitoring the collateral ratio" },
        problem: {
          es: "Sofía deposita ETH por $24,000 en un protocolo que exige un mínimo de 150 % y la liquida por debajo de ese nivel. Pide 12,000 stablecoins de $1. ¿Cuál es su razón inicial y a qué valor de colateral la liquidarían?",
          en: "Sofía deposits $24,000 of ETH in a protocol that requires a 150% minimum and liquidates below that level. She borrows 12,000 one-dollar stablecoins. What is her starting ratio and at what collateral value would she be liquidated?",
        },
        steps: [
          { es: "Razón inicial: 24,000 ÷ 12,000 × 100 = 200 %.", en: "Starting ratio: 24,000 ÷ 12,000 × 100 = 200%." },
          { es: "Valor mínimo del colateral: 12,000 × 150 % = $18,000.", en: "Minimum collateral value: 12,000 × 150% = $18,000." },
          { es: "Caída que tolera: (24,000 − 18,000) ÷ 24,000 = 25 %.", en: "Drop it can withstand: (24,000 − 18,000) ÷ 24,000 = 25%." },
        ],
        result: {
          es: "Empieza en 200 % y la liquidarían si su ETH cae por debajo de $18,000, es decir, con una caída de más de 25 %. Pedir menos stablecoins le da más margen de seguridad.",
          en: "She starts at 200% and would be liquidated if her ETH falls below $18,000, that is, with a drop of more than 25%. Borrowing fewer stablecoins gives her a bigger safety cushion.",
        },
      },
    ],
    keyPoints: [
      { es: "Bitcoin: máximo 21 millones, prueba de trabajo y halving aproximadamente cada cuatro años.", en: "Bitcoin: 21 million maximum, proof of work and a halving roughly every four years." },
      { es: "1 BTC = 100,000,000 satoshis: puedes comprar fracciones pequeñas.", en: "1 BTC = 100,000,000 satoshis: you can buy small fractions." },
      { es: "Ethereum ejecuta contratos inteligentes; cada operación paga gas en ETH.", en: "Ethereum runs smart contracts; each operation pays gas in ETH." },
      { es: "Ethereum usa prueba de participación desde 2022.", en: "Ethereum has used proof of stake since 2022." },
      { es: "Las stablecoins dependen de su respaldo: reservas, cripto sobrecolateralizado o algoritmos.", en: "Stablecoins depend on their backing: reserves, overcollateralized crypto or algorithms." },
      { es: "Una stablecoin puede perder su paridad: estable no significa sin riesgo.", en: "A stablecoin can lose its peg: stable does not mean risk-free." },
    ],
    normativeNote: NOTE_STABLE,
    exerciseIds: ['INV-15-E1', 'INV-15-E2', 'INV-15-E3', 'INV-15-E4', 'INV-15-E6'],
  },

  // ───────────────────────────── INV-16 ─────────────────────────────
  {
    id: 'INV-16',
    level: 4,
    topicIds: ['INV.16'],
    title: { es: "Blockchain aplicado a los mercados financieros", en: "Blockchain applied to financial markets" },
    summary: {
      es: "Blockchain es un registro compartido e inalterable que puede tokenizar activos, acelerar la liquidación y automatizar contratos, aunque enfrenta límites técnicos, legales y de confianza en los datos.",
      en: "Blockchain is a shared, tamper-resistant ledger that can tokenize assets, speed up settlement and automate contracts, although it faces technical, legal and data-trust limits.",
    },
    minutes: 11,
    objectives: [
      { es: "Explicar cómo funciona una blockchain: bloques, hash y consenso.", en: "Explain how a blockchain works: blocks, hash and consensus." },
      { es: "Distinguir blockchains públicas y permisionadas.", en: "Distinguish public and permissioned blockchains." },
      { es: "Describir la tokenización y la liquidación entrega contra pago.", en: "Describe tokenization and delivery-versus-payment settlement." },
      { es: "Reconocer los límites y riesgos de aplicar blockchain en finanzas.", en: "Recognize the limits and risks of applying blockchain in finance." },
    ],
    theory: [
      {
        heading: { es: "¿Cómo funciona una blockchain?", en: "How does a blockchain work?" },
        body: [
          {
            es: "Una **blockchain** es un **registro distribuido**: un libro de cuentas del que muchas computadoras (nodos) tienen copia. Las operaciones se agrupan en **bloques**, y cada bloque guarda el **hash** del anterior. Un hash es una huella digital: un código corto que cambia por completo si alteras un solo dato.",
            en: "A **blockchain** is a **distributed ledger**: a book of accounts copied across many computers (nodes). Transactions are grouped into **blocks**, and each block stores the **hash** of the previous one. A hash is a digital fingerprint: a short code that changes completely if you alter a single piece of data.",
          },
          {
            es: "Como los bloques están encadenados, cambiar uno viejo obligaría a rehacer todos los siguientes y convencer a la mayoría de la red. Por eso el registro es prácticamente **inalterable**. Los nodos se ponen de acuerdo sobre qué bloque sigue con un **mecanismo de consenso** (prueba de trabajo, de participación u otros).",
            en: "Because blocks are chained, changing an old one would require redoing all later ones and convincing most of the network. That is why the ledger is practically **tamper-resistant**. Nodes agree on which block comes next through a **consensus mechanism** (proof of work, proof of stake or others).",
          },
          {
            es: "Hay dos grandes tipos. Las **públicas** (como Bitcoin o Ethereum) permiten que cualquiera participe y vea las operaciones. Las **permisionadas** solo admiten participantes autorizados, como un grupo de bancos; ganan privacidad y control, pero pierden apertura.",
            en: "There are two broad types. **Public** ones (like Bitcoin or Ethereum) let anyone participate and view transactions. **Permissioned** ones admit only authorized participants, such as a group of banks; they gain privacy and control but lose openness.",
          },
          {
            es: "Mini ejemplo: cinco bancos comparten un registro permisionado de garantías. Si uno intenta cambiar en secreto una operación pasada, su copia ya no coincide con la de los otros cuatro y se detecta de inmediato.",
            en: "Mini example: five banks share a permissioned collateral ledger. If one secretly tries to change a past transaction, its copy no longer matches the other four and it is detected immediately.",
          },
        ],
      },
      {
        heading: { es: "¿Qué es tokenizar un activo?", en: "What is tokenizing an asset?" },
        body: [
          {
            es: "**Tokenizar** es representar un activo real (un bono, un inmueble, una participación en un fondo) como un token en una blockchain. Permite dividirlo en fracciones pequeñas, transferirlo a cualquier hora y llevar el registro de dueños en un solo lugar.",
            en: "**Tokenizing** means representing a real asset (a bond, a building, a fund share) as a token on a blockchain. It lets you split it into small fractions, transfer it at any hour and keep the ownership record in one place.",
          },
          {
            es: "Hoy, cuando compras una acción, la **liquidación** (el intercambio final de dinero y títulos) tarda en muchos mercados uno o dos días hábiles y pasa por varios intermediarios. Con blockchain se puede hacer **entrega contra pago (DvP) atómica**: el título y el dinero cambian de manos en el mismo instante, o no cambia ninguno. Eso reduce el riesgo de que una parte cumpla y la otra no.",
            en: "Today, when you buy a stock, **settlement** (the final exchange of money and securities) takes one or two business days in many markets and goes through several intermediaries. With blockchain you can have **atomic delivery versus payment (DvP)**: the security and the money change hands at the same instant, or neither does. That reduces the risk that one side delivers and the other does not.",
          },
          {
            es: "Los **contratos inteligentes** automatizan reglas: pagar cupones a los dueños de un bono tokenizado en su fecha, repartir rentas de un inmueble o retener una garantía hasta que se cumpla una condición. En **DeFi** (finanzas descentralizadas) hay préstamos y casas de cambio automáticas sin intermediario tradicional.",
            en: "**Smart contracts** automate rules: paying coupons to holders of a tokenized bond on schedule, distributing a building's rent or holding collateral until a condition is met. In **DeFi** (decentralized finance) there are loans and automated exchanges without a traditional intermediary.",
          },
          {
            es: "Mini ejemplo: un bono tokenizado de $1,000 paga 8 % anual en cupones semestrales. El contrato inteligente envía $40 a cada dueño cada seis meses, sin que nadie tenga que calcular ni transferir a mano.",
            en: "Mini example: a $1,000 tokenized bond pays 8% a year in semiannual coupons. The smart contract sends $40 to each holder every six months, with no one calculating or transferring by hand.",
          },
        ],
        formulas: [
          {
            name: { es: "Precio por token, tokens comprados y renta que te toca", en: "Price per token, tokens bought and your share of rent" },
            expression: "Precio por token = Valor del activo ÷ Total de tokens   ·   Tokens = Inversión ÷ Precio por token   ·   Tu renta = Tokens × (Renta total ÷ Total de tokens)",
            variables: [
              { symbol: "Valor del activo", meaning: { es: "Lo que vale el inmueble o activo completo, en pesos.", en: "What the whole building or asset is worth, in pesos." } },
              { symbol: "Total de tokens", meaning: { es: "En cuántos tokens se dividió el activo.", en: "How many tokens the asset was split into." } },
              { symbol: "Inversión", meaning: { es: "Los pesos que tú pones.", en: "The pesos you put in." } },
              { symbol: "Renta total", meaning: { es: "Rentas netas anuales que genera el activo y se reparten entre todos los tokens, en pesos.", en: "Net annual rent the asset generates, shared among all tokens, in pesos." } },
            ],
            steps: [
              { es: "Divide el valor del activo entre el total de tokens: es el precio de cada token.", en: "Divide the asset's value by the total tokens: that is the price of each token." },
              { es: "Divide tu inversión entre ese precio: son tus tokens.", en: "Divide your investment by that price: those are your tokens." },
              { es: "Divide la renta total entre el total de tokens (renta por token) y multiplícala por tus tokens.", en: "Divide the total rent by the total tokens (rent per token) and multiply it by your tokens." },
            ],
            example: {
              es: "Un local de $8,000,000 se divide en 400,000 tokens y renta $560,000 netos al año. Precio: 8,000,000 ÷ 400,000 = $20. Con $6,000: 6,000 ÷ 20 = 300 tokens. Renta por token: 560,000 ÷ 400,000 = $1.40. Tu renta: 300 × 1.40 = **$420 al año** (420 ÷ 6,000 = 7%).",
              en: "A $8,000,000 retail space is split into 400,000 tokens and earns $560,000 net rent a year. Price: 8,000,000 ÷ 400,000 = $20. With $6,000: 6,000 ÷ 20 = 300 tokens. Rent per token: 560,000 ÷ 400,000 = $1.40. Your rent: 300 × 1.40 = **$420 a year** (420 ÷ 6,000 = 7%).",
            },
            mistake: {
              es: "Dividir la renta total entre tus tokens en lugar de entre el total de tokens.",
              en: "Dividing the total rent by your tokens instead of by the total tokens.",
            },
          },
        ],
        bullets: [
          { es: "Fraccionamiento: activos caros accesibles con montos pequeños.", en: "Fractionalization: expensive assets accessible with small amounts." },
          { es: "Liquidación más rápida y con menos riesgo de contraparte.", en: "Faster settlement with less counterparty risk." },
          { es: "Registro único y auditable de dueños y operaciones.", en: "A single, auditable record of owners and transactions." },
          { es: "Automatización de pagos y condiciones con contratos inteligentes.", en: "Automation of payments and conditions with smart contracts." },
        ],
      },
      {
        heading: { es: "¿Qué no resuelve la blockchain?", en: "What blockchain does not solve" },
        body: [
          {
            es: "La blockchain garantiza que el registro no se altere, pero **no garantiza que el dato sea verdadero**. Si alguien registra que un inmueble existe y no existe, el token no vale nada. Los servicios que traen datos del mundo real a la cadena se llaman **oráculos**, y son un punto débil.",
            en: "Blockchain guarantees the record is not altered, but it **does not guarantee the data is true**. If someone records that a building exists and it does not, the token is worthless. The services that bring real-world data onto the chain are called **oracles**, and they are a weak point.",
          },
          {
            es: "Otros riesgos: **errores de código** en contratos inteligentes (un error puede vaciar millones y no hay botón de deshacer), **escalabilidad** (algunas redes procesan pocas operaciones por segundo), **privacidad** (en redes públicas todos ven las operaciones) y **marco legal**: un token debe estar reconocido por la ley para que tu derecho sobre el activo sea exigible.",
            en: "Other risks: **code bugs** in smart contracts (one bug can drain millions and there is no undo button), **scalability** (some networks process few transactions per second), **privacy** (on public networks everyone sees transactions) and the **legal framework**: a token must be recognized by law for your claim on the asset to be enforceable.",
          },
          {
            es: "Además, que un activo esté tokenizado **no lo vuelve líquido** por sí mismo: si nadie quiere comprar tu fracción de un edificio, no podrás venderla, aunque la transferencia técnica tarde segundos.",
            en: "Also, an asset being tokenized **does not make it liquid** by itself: if no one wants to buy your fraction of a building, you will not be able to sell it, even if the technical transfer takes seconds.",
          },
          {
            es: "Mini ejemplo: un token promete rentas de un local comercial. Antes de invertir, pregunta: ¿quién verifica que el local y el contrato de renta existen? ¿Qué ley protege tu derecho? ¿Quién compraría tu token si quieres salir?",
            en: "Mini example: a token promises rent from a retail space. Before investing, ask: who verifies that the space and the lease exist? What law protects your claim? Who would buy your token if you want out?",
          },
        ],
      },
    ],
    examples: [
      {
        title: { es: "Fraccionar un inmueble con tokens", en: "Fractionalizing a building with tokens" },
        problem: {
          es: "Un edificio de oficinas vale $20,000,000 y se divide en 200,000 tokens. Genera rentas netas de $1,400,000 al año que se reparten a los tenedores. Si inviertes $10,000, ¿cuántos tokens tienes y cuánto recibes al año?",
          en: "An office building worth $20,000,000 is split into 200,000 tokens. It generates net rent of $1,400,000 a year distributed to holders. If you invest $10,000, how many tokens do you hold and how much do you receive per year?",
        },
        steps: [
          { es: "Precio por token: 20,000,000 ÷ 200,000 = $100.", en: "Price per token: 20,000,000 ÷ 200,000 = $100." },
          { es: "Tokens comprados: 10,000 ÷ 100 = 100 tokens.", en: "Tokens bought: 10,000 ÷ 100 = 100 tokens." },
          { es: "Renta por token: 1,400,000 ÷ 200,000 = $7 al año.", en: "Rent per token: 1,400,000 ÷ 200,000 = $7 a year." },
          { es: "Tu renta: 100 × 7 = $700 al año (7 % sobre lo invertido).", en: "Your rent: 100 × 7 = $700 a year (7% on what you invested)." },
        ],
        result: {
          es: "Con $10,000 tienes 100 tokens y recibes $700 al año. El cálculo supone que el inmueble existe, está bien administrado y que alguien comprará tus tokens si quieres vender.",
          en: "With $10,000 you hold 100 tokens and receive $700 a year. The calculation assumes the building exists, is well managed and that someone will buy your tokens if you want to sell.",
        },
      },
      {
        title: { es: "Liquidación tradicional frente a entrega contra pago atómica", en: "Traditional settlement versus atomic delivery versus payment" },
        problem: {
          es: "Un fondo vende bonos por $5,000,000 a un banco. En el esquema tradicional, el fondo entrega los bonos y espera el pago al día siguiente. Explica el riesgo y cómo lo cambia una liquidación atómica en blockchain.",
          en: "A fund sells $5,000,000 of bonds to a bank. Under the traditional scheme, the fund delivers the bonds and waits for payment the next day. Explain the risk and how atomic settlement on blockchain changes it.",
        },
        steps: [
          { es: "Riesgo tradicional: durante el plazo, si el banco quiebra o falla, el fondo ya entregó y podría no cobrar los $5,000,000.", en: "Traditional risk: during the window, if the bank fails or defaults, the fund has already delivered and might not collect the $5,000,000." },
          { es: "Con DvP atómica, un contrato inteligente intercambia bonos tokenizados por dinero tokenizado en una sola operación.", en: "With atomic DvP, a smart contract swaps tokenized bonds for tokenized money in a single operation." },
          { es: "Si falta el dinero, la operación entera no se ejecuta y los bonos no salen.", en: "If the money is missing, the whole operation does not execute and the bonds do not leave." },
        ],
        result: {
          es: "La liquidación atómica elimina la ventana en la que una parte ya cumplió y la otra no. Requiere que tanto el título como el dinero existan en la misma red o en redes conectadas.",
          en: "Atomic settlement removes the window in which one side has delivered and the other has not. It requires both the security and the money to exist on the same network or on connected networks.",
        },
      },
    ],
    keyPoints: [
      { es: "Blockchain: bloques encadenados por hashes y validados por consenso.", en: "Blockchain: blocks chained by hashes and validated by consensus." },
      { es: "Públicas: abiertas a todos; permisionadas: solo participantes autorizados.", en: "Public: open to all; permissioned: authorized participants only." },
      { es: "Tokenizar permite fraccionar activos y transferirlos con un registro único.", en: "Tokenizing lets assets be fractionalized and transferred with a single record." },
      { es: "La entrega contra pago atómica reduce el riesgo de liquidación.", en: "Atomic delivery versus payment reduces settlement risk." },
      { es: "Inalterable no es verdadero: datos externos, código, ley y liquidez siguen siendo riesgos.", en: "Tamper-resistant is not true: external data, code, law and liquidity remain risks." },
    ],
    normativeNote: NOTE_BLOCKCHAIN,
    exerciseIds: ['INV-16-E1', 'INV-16-E2', 'INV-16-E3', 'INV-16-E5', 'INV-16-E6'],
  },

  // ───────────────────────────── INV-17 ─────────────────────────────
  {
    id: 'INV-17',
    level: 4,
    topicIds: ['INV.17'],
    title: { es: "Gestión del riesgo de inversión", en: "Investment risk management" },
    summary: {
      es: "Gestionar el riesgo es identificar qué puede salir mal, medirlo con herramientas como la volatilidad, la caída máxima y el valor en riesgo, y controlarlo con el tamaño de posición, límites y coberturas.",
      en: "Managing risk means identifying what can go wrong, measuring it with tools such as volatility, maximum drawdown and value at risk, and controlling it with position sizing, limits and hedges.",
    },
    minutes: 11,
    objectives: [
      { es: "Clasificar los principales tipos de riesgo de una inversión.", en: "Classify the main types of investment risk." },
      { es: "Calcular la caída máxima (drawdown) y la ganancia necesaria para recuperarse.", en: "Compute maximum drawdown and the gain needed to recover." },
      { es: "Estimar e interpretar un valor en riesgo (VaR) paramétrico sencillo.", en: "Estimate and interpret a simple parametric value at risk (VaR)." },
      { es: "Dimensionar una posición con base en el riesgo máximo por operación.", en: "Size a position based on maximum risk per trade." },
    ],
    theory: [
      {
        heading: { es: "¿Qué puede salir mal?", en: "What can go wrong?" },
        body: [
          {
            es: "**Riesgo** es la posibilidad de que el resultado sea distinto (sobre todo peor) de lo que esperabas. Gestionarlo no es eliminarlo: es decidir **cuánto riesgo aceptas**, de qué tipo y a cambio de qué rendimiento.",
            en: "**Risk** is the chance that the outcome differs (especially for the worse) from what you expected. Managing it is not eliminating it: it is deciding **how much risk you accept**, of what kind and in exchange for what return.",
          },
          {
            es: "Cada inversión combina varios riesgos. Por ejemplo, un bono en dólares de una empresa tiene riesgo de **tasa** (si suben las tasas, su precio baja), de **crédito** (que la empresa no pague), **cambiario** (que el peso se aprecie) y de **liquidez** (que no encuentres comprador rápido sin rebajar el precio).",
            en: "Every investment combines several risks. For example, a company's dollar bond carries **interest rate** risk (if rates rise, its price falls), **credit** risk (the company does not pay), **currency** risk (the peso appreciates) and **liquidity** risk (you cannot find a buyer quickly without cutting the price).",
          },
          {
            es: "Mini ejemplo: tienes el 60 % de tu dinero en acciones de la empresa donde trabajas. Si a la empresa le va mal, podrías perder a la vez tu empleo y tus ahorros: eso es **riesgo de concentración**.",
            en: "Mini example: you have 60% of your money in shares of the company you work for. If the company does poorly, you could lose your job and your savings at the same time: that is **concentration risk**.",
          },
        ],
        bullets: [
          { es: "Mercado: caen los precios de acciones, bonos o divisas en general.", en: "Market: prices of stocks, bonds or currencies fall broadly." },
          { es: "Crédito: el emisor o deudor no paga.", en: "Credit: the issuer or debtor does not pay." },
          { es: "Liquidez: no puedes vender a tiempo sin perder valor.", en: "Liquidity: you cannot sell in time without losing value." },
          { es: "Inflación: tu rendimiento no alcanza a cubrir el alza de precios.", en: "Inflation: your return does not keep up with rising prices." },
          { es: "Operativo y de contraparte: fallas, fraudes o un intermediario que no cumple.", en: "Operational and counterparty: failures, fraud or an intermediary that does not deliver." },
          { es: "Concentración: demasiado dinero en una sola apuesta.", en: "Concentration: too much money in a single bet." },
        ],
      },
      {
        heading: { es: "¿Cómo se mide el riesgo?", en: "How is risk measured?" },
        body: [
          {
            es: "La **volatilidad** (desviación estándar de los rendimientos) mide cuánto se mueven los precios alrededor de su promedio. A mayor volatilidad, más amplios son los sustos, hacia arriba y hacia abajo.",
            en: "**Volatility** (the standard deviation of returns) measures how much prices move around their average. The higher the volatility, the wider the swings, up and down.",
          },
          {
            es: "La **caída máxima** (drawdown) mide la peor caída desde un máximo hasta un mínimo. Es útil porque muestra el dolor real. Y hay una trampa matemática: **las pérdidas y las ganancias no son simétricas**. Si pierdes 50 %, necesitas ganar 100 % para volver al punto de partida.",
            en: "**Maximum drawdown** measures the worst fall from a peak to a trough. It is useful because it shows the real pain. And there is a mathematical trap: **losses and gains are not symmetric**. If you lose 50%, you need a 100% gain to get back to where you started.",
          },
          {
            es: "El **valor en riesgo (VaR)** responde: con cierta confianza, ¿cuánto es lo máximo que podría perder en un periodo en condiciones normales? Una versión sencilla usa la volatilidad y un factor de confianza (z ≈ 1.65 para 95 %, suponiendo rendimientos con distribución normal). El VaR **no** dice cuánto puedes perder en el peor caso: en crisis la pérdida puede ser mayor.",
            en: "**Value at risk (VaR)** answers: with a given confidence, what is the most I could lose over a period under normal conditions? A simple version uses volatility and a confidence factor (z ≈ 1.65 for 95%, assuming normally distributed returns). VaR does **not** tell you how much you can lose in the worst case: in a crisis the loss can be larger.",
          },
          {
            es: "Mini ejemplo: un portafolio de $500,000 tiene volatilidad diaria de 1.2 %. VaR diario al 95 % = 500,000 × 1.65 × 0.012 = $9,900. En 95 de cada 100 días normales la pérdida no debería superar esa cifra.",
            en: "Mini example: a $500,000 portfolio has 1.2% daily volatility. Daily 95% VaR = 500,000 × 1.65 × 0.012 = $9,900. On 95 out of 100 normal days the loss should not exceed that amount.",
          },
        ],
        formulas: [
          {
            name: { es: "Caída máxima (drawdown)", en: "Maximum drawdown" },
            expression: "Drawdown = (Mínimo − Máximo) ÷ Máximo × 100",
            variables: [
              { symbol: "Máximo", meaning: { es: "El valor más alto que alcanzó el portafolio antes de caer, en pesos.", en: "The highest value the portfolio reached before falling, in pesos." } },
              { symbol: "Mínimo", meaning: { es: "El valor más bajo después de ese máximo, en pesos.", en: "The lowest value after that peak, in pesos." } },
            ],
            steps: [
              { es: "Resta el máximo al mínimo (sale negativo).", en: "Subtract the peak from the trough (the result is negative)." },
              { es: "Divide entre el máximo y multiplica por 100.", en: "Divide by the peak and multiply by 100." },
            ],
            example: {
              es: "Máximo $150,000 y mínimo $90,000. (90,000 − 150,000) ÷ 150,000 = −60,000 ÷ 150,000 = −0.40 → caída de **40%**.",
              en: "Peak $150,000 and trough $90,000. (90,000 − 150,000) ÷ 150,000 = −60,000 ÷ 150,000 = −0.40 → a **40%** drawdown.",
            },
            mistake: {
              es: "Dividir entre el mínimo; eso da la subida necesaria para recuperarse, no la caída.",
              en: "Dividing by the trough; that gives the rise needed to recover, not the drop.",
            },
          },
          {
            name: { es: "Ganancia necesaria para recuperar una pérdida", en: "Gain needed to recover a loss" },
            expression: "Ganancia para recuperar = 1 ÷ (1 − Pérdida) − 1",
            variables: [
              { symbol: "Pérdida", meaning: { es: "La caída sufrida, en decimal (40% = 0.40).", en: "The drop suffered, as a decimal (40% = 0.40)." } },
              { symbol: "Ganancia para recuperar", meaning: { es: "Lo que debe subir la inversión desde el mínimo para volver a su valor original, en decimal.", en: "How much the investment must rise from the trough to return to its original value, as a decimal." } },
            ],
            steps: [
              { es: "Convierte la pérdida a decimal y réstala de 1: es lo que te quedó por cada peso.", en: "Convert the loss to a decimal and subtract it from 1: that is what you kept per peso." },
              { es: "Divide 1 entre ese resultado.", en: "Divide 1 by that result." },
              { es: "Resta 1 y multiplica por 100 para expresarlo en %.", en: "Subtract 1 and multiply by 100 to express it in %." },
            ],
            example: {
              es: "Pérdida de 40%: 1 − 0.40 = 0.60. 1 ÷ 0.60 ≈ 1.6667. 1.6667 − 1 = 0.6667 → **66.67%**. Comprobación: $60 × 1.6667 ≈ $100.",
              en: "A 40% loss: 1 − 0.40 = 0.60. 1 ÷ 0.60 ≈ 1.6667. 1.6667 − 1 = 0.6667 → **66.67%**. Check: $60 × 1.6667 ≈ $100.",
            },
            interpret: {
              es: "Mientras más grande la caída, más desproporcionada es la subida que necesitas: −50% exige +100%.",
              en: "The larger the drop, the more disproportionate the rise you need: −50% requires +100%.",
            },
            mistake: {
              es: "Creer que basta con ganar el mismo porcentaje que se perdió.",
              en: "Believing it is enough to gain the same percentage that was lost.",
            },
          },
          {
            name: { es: "Valor en riesgo (VaR) paramétrico", en: "Parametric value at risk (VaR)" },
            expression: "VaR = Valor × z × σ",
            variables: [
              { symbol: "Valor", meaning: { es: "Valor actual del portafolio o posición, en pesos.", en: "Current value of the portfolio or position, in pesos." } },
              { symbol: "z", meaning: { es: "Factor de confianza de la distribución normal: ≈ 1.65 para 95%.", en: "Normal distribution confidence factor: ≈ 1.65 for 95%." } },
              { symbol: "σ", meaning: { es: "Volatilidad del periodo (diaria si quieres un VaR diario), en decimal (1.2% = 0.012).", en: "Volatility for the period (daily if you want a daily VaR), as a decimal (1.2% = 0.012)." } },
            ],
            steps: [
              { es: "Convierte la volatilidad a decimal.", en: "Convert the volatility to a decimal." },
              { es: "Multiplica el valor por la volatilidad: es el movimiento típico en pesos.", en: "Multiply the value by the volatility: that is the typical move in pesos." },
              { es: "Multiplica por z para el nivel de confianza que quieres.", en: "Multiply by z for the confidence level you want." },
            ],
            example: {
              es: "Portafolio de $300,000 con volatilidad diaria de 1.8% y 95% de confianza. 300,000 × 0.018 = 5,400. 5,400 × 1.65 = **$8,910** de VaR diario.",
              en: "A $300,000 portfolio with 1.8% daily volatility at 95% confidence. 300,000 × 0.018 = 5,400. 5,400 × 1.65 = **$8,910** daily VaR.",
            },
            interpret: {
              es: "En condiciones normales, 95 de cada 100 días la pérdida no debería pasar de $8,910; cerca de 1 día de cada 20 sí puede, y en crisis mucho más.",
              en: "Under normal conditions, on 95 of every 100 days the loss should not exceed $8,910; about 1 day in 20 it can, and in a crisis by much more.",
            },
            mistake: {
              es: "Usar solo la volatilidad (Valor × σ) y olvidar el factor z.",
              en: "Using only volatility (Value × σ) and forgetting the z factor.",
            },
          },
        ],
      },
      {
        heading: { es: "¿Cuánto arriesgar en cada compra?", en: "How much to risk per trade?" },
        body: [
          {
            es: "La herramienta más poderosa es el **tamaño de la posición**. Una regla común entre inversionistas activos es arriesgar solo un porcentaje pequeño del capital (por ejemplo, 1 % o 2 %) en cada operación. Se calcula cuántas acciones comprar según la distancia entre el precio de compra y el precio en que saldrías.",
            en: "The most powerful tool is **position size**. A common rule among active investors is to risk only a small percentage of capital (for example, 1% or 2%) on each trade. You compute how many shares to buy from the distance between the purchase price and the price at which you would exit.",
          },
          {
            es: "Una **orden stop-loss** vende automáticamente si el precio cae a cierto nivel. Ayuda a cortar pérdidas, pero **no garantiza el precio**: si el mercado abre con un salto fuerte a la baja, se vende al siguiente precio disponible, que puede ser mucho menor.",
            en: "A **stop-loss order** sells automatically if the price falls to a certain level. It helps cut losses, but it **does not guarantee the price**: if the market opens with a sharp gap down, it sells at the next available price, which can be much lower.",
          },
          {
            es: "Otras herramientas: **límites** por emisor, sector o país; **coberturas** con derivados (como un put o un forward de dólar); mantener un **colchón líquido** para no vender en mal momento, y escribir de antemano qué harás si el portafolio cae 10 %, 20 % o 30 %, para no decidir con miedo.",
            en: "Other tools: **limits** by issuer, sector or country; **hedges** with derivatives (such as a put or a dollar forward); keeping a **liquid cushion** so you do not sell at a bad time, and writing down in advance what you will do if the portfolio falls 10%, 20% or 30%, so you do not decide out of fear.",
          },
          {
            es: "Mini ejemplo: capital de $100,000 y riesgo máximo de 1 % ($1,000). Compras a $80 con salida en $76: arriesgas $4 por acción, así que compras 1,000 ÷ 4 = 250 acciones ($20,000).",
            en: "Mini example: $100,000 capital and 1% maximum risk ($1,000). You buy at $80 with an exit at $76: you risk $4 per share, so you buy 1,000 ÷ 4 = 250 shares ($20,000).",
          },
        ],
        formulas: [
          {
            name: { es: "Tamaño de la posición según tu riesgo máximo", en: "Position size based on your maximum risk" },
            expression: "Acciones = (Capital × % de riesgo) ÷ (Precio de compra − Precio de salida)   ·   Valor de la posición = Acciones × Precio de compra",
            variables: [
              { symbol: "Capital", meaning: { es: "Todo el dinero de tu cuenta de inversión, en pesos.", en: "All the money in your investment account, in pesos." } },
              { symbol: "% de riesgo", meaning: { es: "Lo máximo que aceptas perder en una operación, en decimal (1% = 0.01).", en: "The most you accept losing on one trade, as a decimal (1% = 0.01)." } },
              { symbol: "Precio de compra", meaning: { es: "Precio al que compras cada acción, en pesos.", en: "Price at which you buy each share, in pesos." } },
              { symbol: "Precio de salida", meaning: { es: "Precio en el que venderías si baja (tu stop-loss), en pesos.", en: "Price at which you would sell if it falls (your stop-loss), in pesos." } },
            ],
            steps: [
              { es: "Calcula el riesgo máximo en pesos: capital × % de riesgo.", en: "Compute the maximum risk in pesos: capital × risk %." },
              { es: "Calcula el riesgo por acción: precio de compra − precio de salida.", en: "Compute the risk per share: purchase price − exit price." },
              { es: "Divide el riesgo máximo entre el riesgo por acción: son las acciones a comprar.", en: "Divide the maximum risk by the risk per share: those are the shares to buy." },
              { es: "Multiplica las acciones por el precio de compra para saber el valor de la posición.", en: "Multiply the shares by the purchase price to know the position value." },
            ],
            example: {
              es: "Capital $150,000 y riesgo de 2%: 150,000 × 0.02 = $3,000. Compras a $60 y saldrías en $54: 60 − 54 = $6 por acción. Acciones: 3,000 ÷ 6 = **500**. Posición: 500 × 60 = $30,000.",
              en: "Capital $150,000 and 2% risk: 150,000 × 0.02 = $3,000. You buy at $60 and would exit at $54: 60 − 54 = $6 per share. Shares: 3,000 ÷ 6 = **500**. Position: 500 × 60 = $30,000.",
            },
            interpret: {
              es: "La posición ($30,000) puede ser mucho mayor que el riesgo ($3,000): lo que limitas es cuánto pierdes si se activa la salida, no cuánto inviertes.",
              en: "The position ($30,000) can be much larger than the risk ($3,000): what you limit is how much you lose if the exit triggers, not how much you invest.",
            },
            mistake: {
              es: "Confundir el riesgo con el monto invertido y comprar solo el riesgo máximo en acciones.",
              en: "Confusing the risk with the amount invested and buying only the maximum risk worth of shares.",
            },
          },
        ],
      },
    ],
    examples: [
      {
        title: { es: "Caída máxima y recuperación", en: "Maximum drawdown and recovery" },
        problem: {
          es: "Un portafolio llegó a un máximo de $250,000, cayó hasta $175,000 y luego subió a $210,000. ¿Cuál fue su caída máxima y cuánto debía subir desde el mínimo para recuperar el máximo?",
          en: "A portfolio reached a peak of $250,000, fell to $175,000 and then rose to $210,000. What was its maximum drawdown and how much did it need to rise from the trough to recover the peak?",
        },
        steps: [
          { es: "Drawdown: (175,000 − 250,000) ÷ 250,000 = −30 %.", en: "Drawdown: (175,000 − 250,000) ÷ 250,000 = −30%." },
          { es: "Ganancia necesaria: 1 ÷ (1 − 0.30) − 1 = 0.4286 → 42.86 %.", en: "Required gain: 1 ÷ (1 − 0.30) − 1 = 0.4286 → 42.86%." },
          { es: "Comprobación: 175,000 × 1.4286 ≈ 250,000.", en: "Check: 175,000 × 1.4286 ≈ 250,000." },
          { es: "Hoy, en $210,000, sigue 16 % abajo del máximo.", en: "Today, at $210,000, it is still 16% below the peak." },
        ],
        result: {
          es: "La caída máxima fue de 30 % y requería una subida de 42.86 % para recuperarse. Evitar caídas grandes vale más de lo que parece.",
          en: "The maximum drawdown was 30% and it needed a 42.86% rise to recover. Avoiding large drops is worth more than it seems.",
        },
      },
      {
        title: { es: "VaR de una posición en acciones", en: "VaR of a stock position" },
        problem: {
          es: "Tienes $800,000 en un fondo de acciones con volatilidad diaria de 1.5 %. Calcula el VaR diario al 95 % (z = 1.65) e interprétalo.",
          en: "You hold $800,000 in an equity fund with 1.5% daily volatility. Compute the daily 95% VaR (z = 1.65) and interpret it.",
        },
        steps: [
          { es: "VaR = 800,000 × 1.65 × 0.015.", en: "VaR = 800,000 × 1.65 × 0.015." },
          { es: "800,000 × 0.015 = 12,000; 12,000 × 1.65 = $19,800.", en: "800,000 × 0.015 = 12,000; 12,000 × 1.65 = $19,800." },
          { es: "Interpretación: en condiciones normales, 95 de cada 100 días la pérdida no debería pasar de $19,800.", en: "Interpretation: under normal conditions, on 95 of every 100 days the loss should not exceed $19,800." },
        ],
        result: {
          es: "VaR diario al 95 % = $19,800. Cerca de 1 día de cada 20 la pérdida puede superarlo, y en una crisis puede ser mucho mayor: el VaR no es el peor caso.",
          en: "Daily 95% VaR = $19,800. About 1 day in 20 the loss may exceed it, and in a crisis it can be much larger: VaR is not the worst case.",
        },
      },
    ],
    keyPoints: [
      { es: "Gestionar el riesgo es decidir cuánto y qué tipo de riesgo aceptas, no eliminarlo.", en: "Managing risk is deciding how much and what kind of risk you accept, not eliminating it." },
      { es: "Riesgos clave: mercado, crédito, liquidez, inflación, cambiario, operativo y concentración.", en: "Key risks: market, credit, liquidity, inflation, currency, operational and concentration." },
      { es: "Pérdidas y ganancias no son simétricas: −50 % exige +100 %.", en: "Losses and gains are not symmetric: −50% requires +100%." },
      { es: "El VaR estima una pérdida normal con cierta confianza; no es el peor caso.", en: "VaR estimates a normal loss at a given confidence; it is not the worst case." },
      { es: "El tamaño de la posición es la herramienta de control más poderosa.", en: "Position size is the most powerful control tool." },
      { es: "Un stop-loss no garantiza el precio de venta.", en: "A stop-loss does not guarantee the sale price." },
    ],
    exerciseIds: ['INV-17-E1', 'INV-17-E2', 'INV-17-E4', 'INV-17-E5', 'INV-17-E6'],
  },

  // ───────────────────────────── INV-18 ─────────────────────────────
  {
    id: 'INV-18',
    level: 4,
    topicIds: ['INV.18'],
    title: { es: "Estrategias de inversión a largo plazo", en: "Long-term investment strategies" },
    summary: {
      es: "Invertir a largo plazo funciona mejor con un plan sencillo: aportar con disciplina, mantener costos bajos, ajustar el riesgo a la etapa de vida y no intentar adivinar el mercado.",
      en: "Long-term investing works best with a simple plan: contribute with discipline, keep costs low, match risk to your life stage and do not try to time the market.",
    },
    minutes: 11,
    objectives: [
      { es: "Comparar la inversión pasiva (indexada) con la gestión activa.", en: "Compare passive (index) investing with active management." },
      { es: "Calcular el costo promedio con aportaciones periódicas.", en: "Compute the average cost with periodic contributions." },
      { es: "Medir el efecto de las comisiones en el largo plazo.", en: "Measure the effect of fees over the long term." },
      { es: "Ajustar la mezcla de activos según el horizonte y la etapa de vida.", en: "Adjust the asset mix by horizon and life stage." },
    ],
    theory: [
      {
        heading: { es: "¿Seguir al mercado o ganarle?", en: "Follow the market or beat it?" },
        body: [
          {
            es: "**Comprar y mantener** es invertir en activos diversificados y conservarlos por años, dejando que el **interés compuesto** trabaje: ganas rendimiento sobre tus rendimientos anteriores. El gran enemigo no es la caída temporal, sino vender por miedo en el peor momento.",
            en: "**Buy and hold** means investing in diversified assets and keeping them for years, letting **compound interest** work: you earn returns on your previous returns. The great enemy is not a temporary fall, but selling out of fear at the worst moment.",
          },
          {
            es: "La **inversión pasiva** compra un índice completo (por ejemplo, con un ETF que replica el mercado) y acepta su rendimiento. La **gestión activa** intenta superar al índice eligiendo acciones o el momento de entrar y salir. Muchos estudios muestran que, después de comisiones, la mayoría de los fondos activos no logran superar a su índice de forma constante a largo plazo.",
            en: "**Passive investing** buys an entire index (for example, with an ETF that tracks the market) and accepts its return. **Active management** tries to beat the index by picking stocks or timing entries and exits. Many studies show that, after fees, most active funds fail to consistently beat their index over the long run.",
          },
          {
            es: "Por eso las **comisiones** importan tanto: una diferencia de 1 % o 2 % al año parece pequeña, pero se compone igual que el rendimiento. **Intentar adivinar el mercado** (market timing) también suele costar: perderte unos pocos de los mejores días puede reducir mucho tu resultado.",
            en: "That is why **fees** matter so much: a 1% or 2% yearly difference looks small, but it compounds just like returns. **Trying to time the market** also tends to cost: missing a few of the best days can greatly reduce your result.",
          },
          {
            es: "Mini ejemplo: $100,000 a 20 años. Al 8 % anual llegan a $466,096; si las comisiones bajan tu rendimiento a 6 %, llegas a $320,714. La diferencia es casi $145,000.",
            en: "Mini example: $100,000 for 20 years. At 8% a year it grows to $466,096; if fees cut your return to 6%, you reach $320,714. The difference is almost $145,000.",
          },
        ],
        formulas: [
          {
            name: { es: "Valor final con interés compuesto y costo de las comisiones", en: "Final value with compound interest and the cost of fees" },
            expression: "Valor final = Monto inicial × (1 + rendimiento neto de comisiones)^años",
            variables: [
              { symbol: "Monto inicial", meaning: { es: "Lo que inviertes hoy, en pesos.", en: "What you invest today, in pesos." } },
              { symbol: "rendimiento neto de comisiones", meaning: { es: "Lo que rinde el fondo al año ya descontadas sus comisiones, en decimal (7% = 0.07).", en: "What the fund earns per year after its fees, as a decimal (7% = 0.07)." } },
              { symbol: "años", meaning: { es: "Cuántos años dejas el dinero invertido sin retirarlo.", en: "How many years you leave the money invested without withdrawing it." } },
              { symbol: "^", meaning: { es: "Elevar a una potencia: multiplicar el factor por sí mismo tantas veces como años.", en: "Raise to a power: multiply the factor by itself as many times as there are years." } },
            ],
            steps: [
              { es: "Convierte el rendimiento neto a decimal y súmale 1 (8% → 1.08).", en: "Convert the net return to a decimal and add 1 (8% → 1.08)." },
              { es: "Eleva ese factor al número de años (en Excel: =1.08^15).", en: "Raise that factor to the number of years (in Excel: =1.08^15)." },
              { es: "Multiplica por el monto inicial.", en: "Multiply by the initial amount." },
              { es: "Para medir el costo de una comisión, repite con el rendimiento más bajo y resta los dos valores finales.", en: "To measure the cost of a fee, repeat with the lower return and subtract the two final values." },
            ],
            example: {
              es: "$50,000 por 15 años. Fondo barato al 8%: 1.08¹⁵ ≈ 3.1722; 50,000 × 3.1722 ≈ $158,608. Fondo caro al 6%: 1.06¹⁵ ≈ 2.3966; 50,000 × 2.3966 ≈ $119,828. Diferencia: 158,608 − 119,828 ≈ **$38,780**.",
              en: "$50,000 for 15 years. Cheap fund at 8%: 1.08¹⁵ ≈ 3.1722; 50,000 × 3.1722 ≈ $158,608. Expensive fund at 6%: 1.06¹⁵ ≈ 2.3966; 50,000 × 2.3966 ≈ $119,828. Difference: 158,608 − 119,828 ≈ **$38,780**.",
            },
            interpret: {
              es: "La diferencia crece con los años porque la comisión también se compone: no solo pierdes el 2%, pierdes lo que ese 2% habría ganado.",
              en: "The difference grows over the years because the fee compounds too: you lose not only the 2%, but what that 2% would have earned.",
            },
            mistake: {
              es: "Calcular el costo como comisión × años × monto (2% × 15 × 50,000 = $15,000), que lo subestima por no componerlo.",
              en: "Computing the cost as fee × years × amount (2% × 15 × 50,000 = $15,000), which understates it because it ignores compounding.",
            },
          },
        ],
      },
      {
        heading: { es: "¿Invertir lo mismo cada mes?", en: "Invest the same every month?" },
        body: [
          {
            es: "El **costo promedio** (en inglés, dollar-cost averaging) consiste en invertir **la misma cantidad cada mes**, sin importar el precio. Cuando el precio está bajo compras más unidades y cuando está alto compras menos.",
            en: "**Dollar-cost averaging** consists of investing **the same amount every month**, regardless of price. When the price is low you buy more units and when it is high you buy fewer.",
          },
          {
            es: "Resultado: tu **costo promedio por unidad** queda por debajo del **precio promedio** del periodo. Además elimina la presión de elegir el momento perfecto y convierte la inversión en un hábito, como domiciliar un pago.",
            en: "Result: your **average cost per unit** ends up below the period's **average price**. It also removes the pressure of picking the perfect moment and turns investing into a habit, like setting up an automatic payment.",
          },
          {
            es: "Si ya tienes una suma grande disponible, invertirla toda de una vez suele rendir más en promedio porque los mercados tienden a subir con el tiempo, pero el costo promedio reduce el arrepentimiento si el mercado cae justo después. Para quien ahorra de su sueldo, aportar cada mes es lo natural.",
            en: "If you already have a large sum available, investing it all at once tends to return more on average because markets tend to rise over time, but averaging reduces regret if the market falls right after. For someone saving from a paycheck, contributing every month is the natural approach.",
          },
          {
            es: "Mini ejemplo: inviertes $3,000 al mes a precios de $100, $75 y $120. Compras 30 + 40 + 25 = 95 unidades por $9,000: costo promedio $94.74, menor que el precio promedio de $98.33.",
            en: "Mini example: you invest $3,000 a month at prices of $100, $75 and $120. You buy 30 + 40 + 25 = 95 units for $9,000: average cost $94.74, lower than the average price of $98.33.",
          },
        ],
        formulas: [
          {
            name: { es: "Costo promedio por unidad frente a precio promedio", en: "Average cost per unit versus average price" },
            expression: "Unidades del mes = Aportación ÷ Precio   ·   Costo promedio = Total invertido ÷ Unidades acumuladas   ·   Precio promedio = Suma de precios ÷ Número de compras",
            variables: [
              { symbol: "Aportación", meaning: { es: "Lo que inviertes cada vez, siempre la misma cantidad, en pesos.", en: "What you invest each time, always the same amount, in pesos." } },
              { symbol: "Precio", meaning: { es: "Precio de una unidad (por ejemplo, del ETF) el día de la compra, en pesos.", en: "Price of one unit (for example, of the ETF) on the purchase date, in pesos." } },
              { symbol: "Total invertido", meaning: { es: "Suma de todas tus aportaciones, en pesos.", en: "Sum of all your contributions, in pesos." } },
              { symbol: "Unidades acumuladas", meaning: { es: "Suma de las unidades compradas en todas las fechas.", en: "Sum of the units bought on all dates." } },
              { symbol: "Precio promedio", meaning: { es: "Promedio simple de los precios de compra, en pesos.", en: "Simple average of the purchase prices, in pesos." } },
            ],
            steps: [
              { es: "En cada fecha divide la aportación entre el precio: son las unidades de ese mes.", en: "On each date divide the contribution by the price: those are that month's units." },
              { es: "Suma las unidades de todos los meses.", en: "Add up the units from all months." },
              { es: "Divide el total invertido entre las unidades acumuladas: es tu costo promedio.", en: "Divide the total invested by the units accumulated: that is your average cost." },
              { es: "Para comparar, suma los precios y divide entre el número de compras: es el precio promedio.", en: "To compare, add the prices and divide by the number of purchases: that is the average price." },
            ],
            example: {
              es: "$1,200 al mes a precios de $60, $40 y $48. Unidades: 1,200 ÷ 60 = 20; 1,200 ÷ 40 = 30; 1,200 ÷ 48 = 25; total 75. Costo promedio: 3,600 ÷ 75 = **$48**. Precio promedio: (60 + 40 + 48) ÷ 3 ≈ **$49.33**.",
              en: "$1,200 a month at prices of $60, $40 and $48. Units: 1,200 ÷ 60 = 20; 1,200 ÷ 40 = 30; 1,200 ÷ 48 = 25; total 75. Average cost: 3,600 ÷ 75 = **$48**. Average price: (60 + 40 + 48) ÷ 3 ≈ **$49.33**.",
            },
            interpret: {
              es: "El costo promedio queda debajo del precio promedio porque compraste más unidades cuando estaban baratas.",
              en: "The average cost ends up below the average price because you bought more units when they were cheap.",
            },
            mistake: {
              es: "Creer que el costo promedio es el promedio simple de los precios.",
              en: "Believing the average cost is the simple average of the prices.",
            },
          },
        ],
      },
      {
        heading: { es: "¿Cómo armo mi plan?", en: "How do I build my plan?" },
        body: [
          {
            es: "Una buena estrategia empieza por **objetivos con fecha**: retiro en 30 años, enganche en 7, universidad de los hijos en 15. Cada meta tiene su horizonte y, por tanto, su nivel de riesgo adecuado.",
            en: "A good strategy starts with **dated goals**: retirement in 30 years, a down payment in 7, the kids' college in 15. Each goal has its own horizon and, therefore, its own suitable level of risk.",
          },
          {
            es: "La estrategia de **ciclo de vida** (glide path) reduce poco a poco la parte en renta variable conforme se acerca la meta. De joven tienes tiempo para recuperarte de caídas; cerca del retiro, una caída fuerte no tendría tiempo de revertirse. En México, las Afores ya aplican este enfoque por edad en sus fondos generacionales.",
            en: "The **life-cycle** strategy (glide path) gradually reduces the equity share as the goal approaches. When young you have time to recover from drops; near retirement, a steep drop would have no time to reverse. In Mexico, Afores already apply this age-based approach in their generational funds.",
          },
          {
            es: "Otros estilos que puedes combinar: **inversión en valor** (empresas baratas frente a su valor), **crecimiento** (empresas que crecen rápido) y **dividendos** (empresas que reparten utilidades con regularidad). Sea cual sea, escribe tu plan: cuánto aportas, en qué, cuándo revisas y qué no harás aunque el mercado se ponga nervioso.",
            en: "Other styles you can combine: **value investing** (companies that are cheap relative to their worth), **growth** (fast-growing companies) and **dividends** (companies that regularly share profits). Whichever you choose, write your plan: how much you contribute, in what, when you review and what you will not do even if the market gets nervous.",
          },
          {
            es: "Mini ejemplo: a los 30 años Laura tiene 80 % en renta variable para su retiro. Cada cinco años baja esa parte unos 10 puntos; a los 60 tendrá cerca de 20 %, protegiendo lo acumulado.",
            en: "Mini example: at 30 Laura has 80% in equities for her retirement. Every five years she lowers that share by about 10 points; at 60 she will have around 20%, protecting what she has built.",
          },
        ],
        bullets: [
          { es: "Define metas con monto y fecha.", en: "Define goals with an amount and a date." },
          { es: "Aporta en automático cada mes.", en: "Contribute automatically every month." },
          { es: "Prefiere vehículos diversificados y de bajo costo.", en: "Prefer diversified, low-cost vehicles." },
          { es: "Reduce el riesgo conforme se acerca cada meta.", en: "Reduce risk as each goal approaches." },
          { es: "Revisa una o dos veces al año, no cada día.", en: "Review once or twice a year, not every day." },
        ],
      },
    ],
    examples: [
      {
        title: { es: "El costo de una comisión alta", en: "The cost of a high fee" },
        problem: {
          es: "Inviertes $200,000 por 10 años. El Fondo A rinde 7 % neto al año y el Fondo B, con la misma cartera pero 2 % más de comisión, rinde 5 % neto. ¿Cuánto tendrás en cada uno?",
          en: "You invest $200,000 for 10 years. Fund A returns 7% net per year and Fund B, with the same holdings but 2% more in fees, returns 5% net. How much will you have in each?",
        },
        steps: [
          { es: "Fondo A: 200,000 × 1.07¹⁰ = 200,000 × 1.96715 = $393,430.27.", en: "Fund A: 200,000 × 1.07¹⁰ = 200,000 × 1.96715 = $393,430.27." },
          { es: "Fondo B: 200,000 × 1.05¹⁰ = 200,000 × 1.62889 = $325,778.93.", en: "Fund B: 200,000 × 1.05¹⁰ = 200,000 × 1.62889 = $325,778.93." },
          { es: "Diferencia: 393,430.27 − 325,778.93 = $67,651.34.", en: "Difference: 393,430.27 − 325,778.93 = $67,651.34." },
        ],
        result: {
          es: "La comisión extra de 2 % anual te cuesta $67,651 en 10 años: más de una tercera parte de lo que invertiste al inicio.",
          en: "The extra 2% yearly fee costs you $67,651 over 10 years: more than a third of what you initially invested.",
        },
      },
      {
        title: { es: "Costo promedio en un mercado que sube y baja", en: "Dollar-cost averaging in a market that rises and falls" },
        problem: {
          es: "Daniel invierte $4,000 al mes durante cuatro meses en un ETF cuyos precios fueron $80, $50, $100 y $80. ¿Cuántas unidades acumula y cuál es su costo promedio frente al precio promedio?",
          en: "Daniel invests $4,000 a month for four months in an ETF whose prices were $80, $50, $100 and $80. How many units does he accumulate and how does his average cost compare to the average price?",
        },
        steps: [
          { es: "Unidades: 4,000 ÷ 80 = 50; ÷ 50 = 80; ÷ 100 = 40; ÷ 80 = 50.", en: "Units: 4,000 ÷ 80 = 50; ÷ 50 = 80; ÷ 100 = 40; ÷ 80 = 50." },
          { es: "Total: 50 + 80 + 40 + 50 = 220 unidades por $16,000.", en: "Total: 50 + 80 + 40 + 50 = 220 units for $16,000." },
          { es: "Costo promedio: 16,000 ÷ 220 = $72.73.", en: "Average cost: 16,000 ÷ 220 = $72.73." },
          { es: "Precio promedio: (80 + 50 + 100 + 80) ÷ 4 = $77.50.", en: "Average price: (80 + 50 + 100 + 80) ÷ 4 = $77.50." },
        ],
        result: {
          es: "Daniel tiene 220 unidades a un costo promedio de $72.73, menor que el precio promedio de $77.50. Al precio final de $80 su inversión vale $17,600: gana aunque el precio terminó igual que al inicio.",
          en: "Daniel holds 220 units at an average cost of $72.73, below the $77.50 average price. At the final $80 price his investment is worth $17,600: he gains even though the price ended where it started.",
        },
      },
    ],
    keyPoints: [
      { es: "El tiempo y el interés compuesto son el motor; vender por miedo los apaga.", en: "Time and compound interest are the engine; selling out of fear shuts them off." },
      { es: "La mayoría de los fondos activos no supera a su índice de forma constante después de comisiones.", en: "Most active funds do not consistently beat their index after fees." },
      { es: "Las comisiones se componen: pequeñas diferencias anuales se vuelven grandes.", en: "Fees compound: small yearly differences become large." },
      { es: "Aportar la misma cantidad cada mes deja un costo promedio menor al precio promedio.", en: "Contributing the same amount each month leaves an average cost below the average price." },
      { es: "El ciclo de vida reduce la renta variable conforme se acerca la meta.", en: "The life-cycle approach reduces equities as the goal approaches." },
    ],
    normativeNote: NOTE_LONG,
    exerciseIds: ['INV-18-E1', 'INV-18-E2', 'INV-18-E3', 'INV-18-E4', 'INV-18-E6'],
  },
]

export const exercises: Exercise[] = [
  // ═════════════════════════ INV-13 ═════════════════════════
  {
    id: 'INV-13-E1',
    level: 4,
    module: 'INV-13',
    kind: 'mcq',
    flavor: 'concept',
    prompt: {
      es: "En un contrato de futuro sobre el dólar, ¿cuál es el activo subyacente?",
      en: "In a futures contract on the dollar, what is the underlying asset?",
    },
    options: [
      { id: 'INV-13-E1-a', text: { es: "El margen que deposita cada parte", en: "The margin each side posts" } },
      { id: 'INV-13-E1-b', text: { es: "El tipo de cambio peso-dólar", en: "The peso-dollar exchange rate" } },
      { id: 'INV-13-E1-c', text: { es: "La cámara de compensación", en: "The clearing house" } },
      { id: 'INV-13-E1-d', text: { es: "La comisión que cobra el intermediario", en: "The fee the broker charges" } },
    ],
    correctOptionId: 'INV-13-E1-b',
    explanation: {
      es: "El subyacente es el activo del que depende el valor del contrato: aquí, el dólar frente al peso. El margen es una garantía, la cámara de compensación es un intermediario y la comisión es un costo. Error común: confundir la garantía (margen) con lo que se negocia.",
      en: "The underlying is the asset the contract's value depends on: here, the dollar against the peso. Margin is a guarantee, the clearing house is an intermediary and the fee is a cost. Common mistake: confusing the guarantee (margin) with what is being traded.",
    },
    difficulty: 1,
    points: 10,
    competency: 'derivatives',
  },
  {
    id: 'INV-13-E2',
    level: 4,
    module: 'INV-13',
    kind: 'numeric',
    flavor: 'case',
    context: {
      es: "Compras 100 opciones call (una por acción) con precio de ejercicio de $100 y prima de $5 cada una. Al vencimiento la acción cotiza en $118.",
      en: "You buy 100 call options (one per share) with a $100 strike price and a $5 premium each. At expiration the stock trades at $118.",
    },
    prompt: {
      es: "¿Cuál es tu ganancia neta total con estas opciones call? Responde en pesos.",
      en: "What is your total net gain on these call options? Answer in pesos.",
    },
    answer: 1300,
    unit: 'MXN',
    decimals: 0,
    tolerance: { abs: 0.5 },
    explanation: {
      es: "Por acción: máx(118 − 100, 0) − 5 = $13. Por 100 acciones: 13 × 100 = $1,300. Error común: olvidar restar la prima y responder $1,800.",
      en: "Per share: max(118 − 100, 0) − 5 = $13. For 100 shares: 13 × 100 = $1,300. Common mistake: forgetting to subtract the premium and answering $1,800.",
    },
    difficulty: 2,
    points: 15,
    competency: 'derivatives',
  },
  {
    id: 'INV-13-E3',
    level: 4,
    module: 'INV-13',
    kind: 'classify',
    flavor: 'case',
    prompt: {
      es: "Clasifica cada uso de derivados como cobertura o especulación.",
      en: "Classify each use of derivatives as hedging or speculation.",
    },
    categories: [
      { id: 'INV-13-E3-c1', label: { es: "Cobertura", en: "Hedging" } },
      { id: 'INV-13-E3-c2', label: { es: "Especulación", en: "Speculation" } },
    ],
    items: [
      { id: 'INV-13-E3-i1', label: { es: "Un productor de maíz vende futuros para fijar el precio de su cosecha", en: "A corn grower sells futures to lock in the price of his harvest" }, correctCategoryId: 'INV-13-E3-c1' },
      { id: 'INV-13-E3-i2', label: { es: "Una persona sin negocios en dólares compra futuros porque cree que el dólar subirá", en: "A person with no dollar business buys futures because she thinks the dollar will rise" }, correctCategoryId: 'INV-13-E3-c2' },
      { id: 'INV-13-E3-i3', label: { es: "Una empresa con crédito a tasa variable contrata un swap para pagar tasa fija", en: "A company with a floating-rate loan enters a swap to pay a fixed rate" }, correctCategoryId: 'INV-13-E3-c1' },
      { id: 'INV-13-E3-i4', label: { es: "Un inversionista que tiene acciones compra puts para limitar su pérdida", en: "An investor who owns shares buys puts to limit his loss" }, correctCategoryId: 'INV-13-E3-c1' },
      { id: 'INV-13-E3-i5', label: { es: "Un operador compra calls sobre una acción que no tiene, apostando a un alza rápida", en: "A trader buys calls on a stock he does not own, betting on a quick rise" }, correctCategoryId: 'INV-13-E3-c2' },
    ],
    explanation: {
      es: "Es cobertura cuando el derivado reduce un riesgo que ya existía (cosecha, crédito variable, acciones en cartera). Es especulación cuando se toma un riesgo nuevo para intentar ganar con el precio. Error común: pensar que comprar puts siempre es especular; si ya tienes las acciones, funciona como seguro.",
      en: "It is hedging when the derivative reduces a risk that already existed (harvest, floating-rate loan, shares held). It is speculation when a new risk is taken to try to profit from price moves. Common mistake: thinking buying puts is always speculation; if you already own the shares, it works as insurance.",
    },
    difficulty: 2,
    points: 15,
    competency: 'derivatives',
  },
  {
    id: 'INV-13-E4',
    level: 4,
    module: 'INV-13',
    kind: 'truefalse',
    flavor: 'concept',
    prompt: {
      es: "Quien compra una opción put está obligado a vender el activo al precio de ejercicio aunque el precio de mercado sea mayor.",
      en: "The buyer of a put option is obligated to sell the asset at the strike price even if the market price is higher.",
    },
    answer: false,
    explanation: {
      es: "Falso. El comprador de una opción tiene el derecho, no la obligación. Si el precio de mercado es mayor que el strike, simplemente no ejerce y pierde solo la prima. Quien queda obligado es el vendedor de la opción. Error común: confundir opciones con futuros, donde ambas partes sí están obligadas.",
      en: "False. An option buyer has the right, not the obligation. If the market price is above the strike, he simply does not exercise and loses only the premium. The one obligated is the option seller. Common mistake: confusing options with futures, where both sides are indeed obligated.",
    },
    difficulty: 1,
    points: 10,
    competency: 'derivatives',
  },
  {
    id: 'INV-13-E5',
    level: 4,
    module: 'INV-13',
    kind: 'fields',
    flavor: 'case',
    context: {
      es: "Abres una posición larga en un futuro de USD 10,000 a $20.00 por dólar. El margen inicial es 10 % del valor nocional. Al cerrar, el dólar está en $20.50.",
      en: "You open a long position in a USD 10,000 future at $20.00 per dollar. Initial margin is 10% of the notional value. When you close, the dollar is at $20.50.",
    },
    prompt: {
      es: "Calcula el valor nocional, el margen inicial, tu ganancia y el rendimiento sobre el margen del futuro de dólar.",
      en: "Compute the notional value, the initial margin, your gain and the return on margin of the dollar future.",
    },
    fields: [
      { id: 'f1', label: { es: "Valor nocional (MXN)", en: "Notional value (MXN)" }, answer: 200000, unit: 'MXN', tolerance: { abs: 0.5 } },
      { id: 'f2', label: { es: "Margen inicial (MXN)", en: "Initial margin (MXN)" }, answer: 20000, unit: 'MXN', tolerance: { abs: 0.5 } },
      { id: 'f3', label: { es: "Ganancia (MXN)", en: "Gain (MXN)" }, answer: 5000, unit: 'MXN', tolerance: { abs: 0.5 } },
      { id: 'f4', label: { es: "Rendimiento sobre el margen (%)", en: "Return on margin (%)" }, answer: 25, unit: '%', tolerance: { abs: 0.05 } },
    ],
    explanation: {
      es: "Nocional: 10,000 × 20.00 = $200,000. Margen: 10 % = $20,000. Ganancia: (20.50 − 20.00) × 10,000 = $5,000. Rendimiento: 5,000 ÷ 20,000 = 25 %. El dólar solo subió 2.5 %, pero el apalancamiento lo multiplicó por 10. Error común: medir el rendimiento contra el nocional (2.5 %) y olvidar que una baja igual habría costado 25 % del margen.",
      en: "Notional: 10,000 × 20.00 = $200,000. Margin: 10% = $20,000. Gain: (20.50 − 20.00) × 10,000 = $5,000. Return: 5,000 ÷ 20,000 = 25%. The dollar rose only 2.5%, but leverage multiplied it by 10. Common mistake: measuring the return against the notional (2.5%) and forgetting that an equal drop would have cost 25% of the margin.",
    },
    difficulty: 3,
    points: 20,
    competency: 'derivatives',
  },
  {
    id: 'INV-13-E6',
    level: 4,
    module: 'INV-13',
    kind: 'multi',
    flavor: 'concept',
    prompt: {
      es: "¿Qué características distinguen a un futuro de un forward? Selecciona todas las que apliquen.",
      en: "Which features distinguish a future from a forward? Select all that apply.",
    },
    options: [
      { id: 'INV-13-E6-a', text: { es: "Se negocia en un mercado organizado, como MexDer", en: "It trades on an organized exchange, such as MexDer" } },
      { id: 'INV-13-E6-b', text: { es: "Tiene tamaño y fecha estandarizados", en: "It has a standardized size and date" } },
      { id: 'INV-13-E6-c', text: { es: "Se diseña a la medida de las dos partes", en: "It is tailored to the two parties" } },
      { id: 'INV-13-E6-d', text: { es: "Una cámara de compensación reduce el riesgo de contraparte", en: "A clearing house reduces counterparty risk" } },
      { id: 'INV-13-E6-e', text: { es: "Exige margen y liquida ganancias y pérdidas diariamente", en: "It requires margin and settles gains and losses daily" } },
    ],
    correctOptionIds: ['INV-13-E6-a', 'INV-13-E6-b', 'INV-13-E6-d', 'INV-13-E6-e'],
    explanation: {
      es: "El futuro es estandarizado, cotiza en bolsa, usa cámara de compensación y margen con liquidación diaria. Diseñarse a la medida es lo propio del forward, que se pacta en privado. Error común: creer que ambos son iguales porque los dos fijan hoy un precio futuro.",
      en: "A future is standardized, exchange-traded, uses a clearing house and margin with daily settlement. Being tailored is typical of a forward, which is agreed privately. Common mistake: believing both are the same because both lock in a future price today.",
    },
    difficulty: 2,
    points: 15,
    competency: 'derivatives',
  },

  // ═════════════════════════ INV-14 ═════════════════════════
  {
    id: 'INV-14-E1',
    level: 4,
    module: 'INV-14',
    kind: 'mcq',
    flavor: 'concept',
    prompt: {
      es: "En una billetera de criptoactivos, ¿qué permite mover los fondos y nunca debes compartir?",
      en: "In a crypto-asset wallet, what lets you move the funds and must never be shared?",
    },
    options: [
      { id: 'INV-14-E1-a', text: { es: "La clave pública", en: "The public key" } },
      { id: 'INV-14-E1-b', text: { es: "El historial de transacciones", en: "The transaction history" } },
      { id: 'INV-14-E1-c', text: { es: "La clave privada (o su frase de recuperación)", en: "The private key (or its recovery phrase)" } },
      { id: 'INV-14-E1-d', text: { es: "El nombre de la red", en: "The network's name" } },
    ],
    correctOptionId: 'INV-14-E1-c',
    explanation: {
      es: "La clave privada firma las transacciones: quien la tiene controla los fondos, y si se pierde no hay forma de recuperarla. La clave pública se comparte para recibir, como una cuenta bancaria. Error común: pensar que la plataforma o un soporte técnico legítimo puede pedírtela.",
      en: "The private key signs transactions: whoever has it controls the funds, and if lost there is no way to recover it. The public key is shared to receive, like a bank account number. Common mistake: thinking the platform or legitimate tech support may ask you for it.",
    },
    difficulty: 1,
    points: 10,
    competency: 'crypto-assets',
  },
  {
    id: 'INV-14-E2',
    level: 4,
    module: 'INV-14',
    kind: 'fields',
    flavor: 'case',
    context: {
      es: "Héctor tiene un portafolio de $200,000 y decide poner 5 % en criptoactivos. Meses después, el cripto cae 60 % y el resto de su portafolio no cambia.",
      en: "Héctor has a $200,000 portfolio and decides to put 5% in crypto-assets. Months later, crypto falls 60% and the rest of his portfolio does not change.",
    },
    prompt: {
      es: "Calcula el monto en cripto, la pérdida y la caída porcentual de todo el portafolio de Héctor.",
      en: "Compute the amount in crypto, the loss and the percentage drop of Héctor's whole portfolio.",
    },
    fields: [
      { id: 'f1', label: { es: "Monto invertido en cripto (MXN)", en: "Amount invested in crypto (MXN)" }, answer: 10000, unit: 'MXN', tolerance: { abs: 0.5 } },
      { id: 'f2', label: { es: "Pérdida (MXN)", en: "Loss (MXN)" }, answer: 6000, unit: 'MXN', tolerance: { abs: 0.5 } },
      { id: 'f3', label: { es: "Caída del portafolio total (%)", en: "Total portfolio drop (%)" }, answer: 3, unit: '%', tolerance: { abs: 0.05 } },
    ],
    explanation: {
      es: "Cripto: 200,000 × 5 % = $10,000. Pérdida: 10,000 × 60 % = $6,000. Efecto total: 6,000 ÷ 200,000 = 3 % (o 5 % × 60 %). Un tamaño pequeño limita el daño. Error común: decir que el portafolio cayó 60 %.",
      en: "Crypto: 200,000 × 5% = $10,000. Loss: 10,000 × 60% = $6,000. Total effect: 6,000 ÷ 200,000 = 3% (or 5% × 60%). A small size limits the damage. Common mistake: saying the portfolio fell 60%.",
    },
    difficulty: 2,
    points: 15,
    competency: 'crypto-assets',
  },
  {
    id: 'INV-14-E3',
    level: 4,
    module: 'INV-14',
    kind: 'truefalse',
    flavor: 'concept',
    prompt: {
      es: "En México los criptoactivos son moneda de curso legal, así que un comercio está obligado a aceptarlos como pago.",
      en: "In Mexico crypto-assets are legal tender, so a store is required to accept them as payment.",
    },
    answer: false,
    explanation: {
      es: "Falso. La Ley Fintech los trata como activos virtuales y no como moneda de curso legal; la moneda de curso legal en México es el peso. Un comercio puede aceptarlos si quiere, pero no está obligado. Error común: confundir que algo sea legal de poseer con que sea moneda de curso legal.",
      en: "False. The Fintech Law treats them as virtual assets, not legal tender; Mexico's legal tender is the peso. A store may accept them if it wishes, but it is not required to. Common mistake: confusing something being legal to own with it being legal tender.",
    },
    difficulty: 1,
    points: 10,
    competency: 'crypto-assets',
  },
  {
    id: 'INV-14-E4',
    level: 4,
    module: 'INV-14',
    kind: 'classify',
    flavor: 'concept',
    prompt: {
      es: "Clasifica cada activo digital según su tipo.",
      en: "Classify each digital asset by its type.",
    },
    categories: [
      { id: 'INV-14-E4-c1', label: { es: "Criptomoneda nativa", en: "Native cryptocurrency" } },
      { id: 'INV-14-E4-c2', label: { es: "Stablecoin", en: "Stablecoin" } },
      { id: 'INV-14-E4-c3', label: { es: "NFT (token no fungible)", en: "NFT (non-fungible token)" } },
      { id: 'INV-14-E4-c4', label: { es: "Moneda digital de banco central", en: "Central bank digital currency" } },
    ],
    items: [
      { id: 'INV-14-E4-i1', label: { es: "La moneda propia de una red que paga a quienes validan sus bloques", en: "A network's own coin that rewards those who validate its blocks" }, correctCategoryId: 'INV-14-E4-c1' },
      { id: 'INV-14-E4-i2', label: { es: "Un token que busca valer siempre 1 dólar, respaldado por reservas", en: "A token that aims to always be worth 1 dollar, backed by reserves" }, correctCategoryId: 'INV-14-E4-c2' },
      { id: 'INV-14-E4-i3', label: { es: "Un boleto digital único para un concierto con asiento numerado", en: "A unique digital ticket for a concert with an assigned seat" }, correctCategoryId: 'INV-14-E4-c3' },
      { id: 'INV-14-E4-i4', label: { es: "Pesos digitales emitidos directamente por un banco central", en: "Digital pesos issued directly by a central bank" }, correctCategoryId: 'INV-14-E4-c4' },
      { id: 'INV-14-E4-i5', label: { es: "Un certificado digital irrepetible de una obra de arte", en: "A one-of-a-kind digital certificate for a work of art" }, correctCategoryId: 'INV-14-E4-c3' },
    ],
    explanation: {
      es: "La criptomoneda nativa es la moneda de su red; la stablecoin busca un valor fijo; el NFT es único (boleto, certificado de arte); la CBDC la emite un banco central y es dinero oficial, no cripto. Error común: llamar cripto a cualquier dinero digital, incluida la CBDC.",
      en: "A native cryptocurrency is its network's coin; a stablecoin seeks a fixed value; an NFT is unique (ticket, art certificate); a CBDC is issued by a central bank and is official money, not crypto. Common mistake: calling any digital money crypto, including a CBDC.",
    },
    difficulty: 2,
    points: 15,
    competency: 'crypto-assets',
  },
  {
    id: 'INV-14-E5',
    level: 4,
    module: 'INV-14',
    kind: 'multi',
    flavor: 'case',
    context: {
      es: "Un perfil en redes sociales invita a Karla a una plataforma de cripto llamada FuturoMax.",
      en: "A social media profile invites Karla to a crypto platform called FuturoMax.",
    },
    prompt: {
      es: "¿Cuáles de estas características de la oferta son señales de alerta de fraude? Selecciona todas las que apliquen.",
      en: "Which of these features of the offer are fraud red flags? Select all that apply.",
    },
    options: [
      { id: 'INV-14-E5-a', text: { es: "Rendimiento garantizado de 20 % mensual", en: "A guaranteed 20% monthly return" } },
      { id: 'INV-14-E5-b', text: { es: "Te pide tu frase de recuperación para activar tu cuenta", en: "It asks for your recovery phrase to activate your account" } },
      { id: 'INV-14-E5-c', text: { es: "Pagan bonos por cada persona nueva que invites", en: "They pay bonuses for each new person you invite" } },
      { id: 'INV-14-E5-d', text: { es: "Te advierte que el precio puede bajar y que puedes perder", en: "It warns you the price can fall and you can lose money" } },
      { id: 'INV-14-E5-e', text: { es: "Te presionan a depositar hoy porque la oferta se acaba", en: "They pressure you to deposit today because the offer ends" } },
    ],
    correctOptionIds: ['INV-14-E5-a', 'INV-14-E5-b', 'INV-14-E5-c', 'INV-14-E5-e'],
    explanation: {
      es: "Rendimiento garantizado altísimo, pedir la frase de recuperación, bonos por reclutar y presión de tiempo son señales clásicas de fraude o pirámide. Advertir que puedes perder es lo que haría una plataforma seria. Error común: confiar porque la oferta viene de alguien que parece conocido.",
      en: "A very high guaranteed return, asking for the recovery phrase, recruiting bonuses and time pressure are classic signs of fraud or a pyramid. Warning that you can lose money is what a serious platform would do. Common mistake: trusting the offer because it comes from someone who seems familiar.",
    },
    difficulty: 2,
    points: 15,
    competency: 'crypto-assets',
  },
  {
    id: 'INV-14-E6',
    level: 4,
    module: 'INV-14',
    kind: 'mcq',
    flavor: 'case',
    context: {
      es: "Iván guarda todo su cripto en una plataforma de intercambio. Un día la plataforma suspende los retiros por problemas financieros.",
      en: "Iván keeps all his crypto on an exchange. One day the exchange suspends withdrawals because of financial trouble.",
    },
    prompt: {
      es: "¿Qué riesgo se materializó en el caso de Iván?",
      en: "Which risk materialized in Iván's case?",
    },
    options: [
      { id: 'INV-14-E6-a', text: { es: "Riesgo de custodia o de contraparte: dependía de que la plataforma cumpliera", en: "Custody or counterparty risk: he depended on the exchange delivering" } },
      { id: 'INV-14-E6-b', text: { es: "Riesgo de inflación del peso", en: "Peso inflation risk" } },
      { id: 'INV-14-E6-c', text: { es: "Riesgo de perder su clave privada en autocustodia", en: "Risk of losing his private key in self-custody" } },
      { id: 'INV-14-E6-d', text: { es: "Ninguno: la blockchain garantiza que siempre puede retirar", en: "None: the blockchain guarantees he can always withdraw" } },
    ],
    correctOptionId: 'INV-14-E6-a',
    explanation: {
      es: "Al dejar el cripto en la plataforma, ella controla las claves: si quiebra o congela retiros, Iván depende de ella. Es riesgo de custodia o contraparte. No es autocustodia, y la blockchain no protege contra los problemas de un intermediario. Error común: creer que tener cripto en una plataforma es lo mismo que controlarlo directamente.",
      en: "By leaving the crypto on the exchange, it controls the keys: if it fails or freezes withdrawals, Iván depends on it. That is custody or counterparty risk. It is not self-custody, and the blockchain does not protect against an intermediary's problems. Common mistake: believing that holding crypto on an exchange is the same as controlling it directly.",
    },
    difficulty: 1,
    points: 10,
    competency: 'crypto-assets',
  },

  // ═════════════════════════ INV-15 ═════════════════════════
  {
    id: 'INV-15-E1',
    level: 4,
    module: 'INV-15',
    kind: 'mcq',
    flavor: 'concept',
    prompt: {
      es: "¿Cuál es el número máximo de bitcoins que podrán existir según su protocolo?",
      en: "What is the maximum number of bitcoins that can ever exist under its protocol?",
    },
    options: [
      { id: 'INV-15-E1-a', text: { es: "100 millones", en: "100 million" } },
      { id: 'INV-15-E1-b', text: { es: "21 millones", en: "21 million" } },
      { id: 'INV-15-E1-c', text: { es: "No tiene límite, como el ether", en: "There is no limit, like ether" } },
      { id: 'INV-15-E1-d', text: { es: "Lo decide cada año un banco central", en: "A central bank decides it each year" } },
    ],
    correctOptionId: 'INV-15-E1-b',
    explanation: {
      es: "El protocolo de Bitcoin fija un máximo de 21 millones de unidades, y la emisión nueva se reduce a la mitad aproximadamente cada cuatro años. No lo controla ningún banco central. Error común: confundir 100 millones (los satoshis que tiene un bitcoin) con el suministro total.",
      en: "Bitcoin's protocol sets a maximum of 21 million units, and new issuance is halved roughly every four years. No central bank controls it. Common mistake: confusing 100 million (the satoshis in one bitcoin) with total supply.",
    },
    difficulty: 1,
    points: 10,
    competency: 'bitcoin-ethereum-stablecoins',
  },
  {
    id: 'INV-15-E2',
    level: 4,
    module: 'INV-15',
    kind: 'numeric',
    flavor: 'case',
    context: {
      es: "Paola compra bitcoin con $2,000 a un precio hipotético de $1,600,000 por BTC, sin comisiones.",
      en: "Paola buys bitcoin with $2,000 at a hypothetical price of $1,600,000 per BTC, with no fees.",
    },
    prompt: {
      es: "¿Cuántos satoshis recibe Paola?",
      en: "How many satoshis does Paola receive?",
    },
    answer: 125000,
    unit: 'units',
    decimals: 0,
    tolerance: { abs: 0.5 },
    explanation: {
      es: "BTC: 2,000 ÷ 1,600,000 = 0.00125 BTC. Satoshis: 0.00125 × 100,000,000 = 125,000. Error común: multiplicar por un millón en lugar de cien millones y responder 1,250.",
      en: "BTC: 2,000 ÷ 1,600,000 = 0.00125 BTC. Satoshis: 0.00125 × 100,000,000 = 125,000. Common mistake: multiplying by one million instead of one hundred million and answering 1,250.",
    },
    difficulty: 1,
    points: 10,
    competency: 'bitcoin-ethereum-stablecoins',
  },
  {
    id: 'INV-15-E3',
    level: 4,
    module: 'INV-15',
    kind: 'classify',
    flavor: 'concept',
    prompt: {
      es: "Relaciona cada característica con Bitcoin, Ethereum o las stablecoins.",
      en: "Match each feature with Bitcoin, Ethereum or stablecoins.",
    },
    categories: [
      { id: 'INV-15-E3-c1', label: { es: "Bitcoin", en: "Bitcoin" } },
      { id: 'INV-15-E3-c2', label: { es: "Ethereum", en: "Ethereum" } },
      { id: 'INV-15-E3-c3', label: { es: "Stablecoins", en: "Stablecoins" } },
    ],
    items: [
      { id: 'INV-15-E3-i1', label: { es: "Usa prueba de trabajo y tiene halvings periódicos", en: "Uses proof of work and has periodic halvings" }, correctCategoryId: 'INV-15-E3-c1' },
      { id: 'INV-15-E3-i2', label: { es: "Ejecuta contratos inteligentes y cobra comisiones en gas", en: "Runs smart contracts and charges fees in gas" }, correctCategoryId: 'INV-15-E3-c2' },
      { id: 'INV-15-E3-i3', label: { es: "Buscan mantener una paridad con el dólar", en: "Seek to keep a peg to the dollar" }, correctCategoryId: 'INV-15-E3-c3' },
      { id: 'INV-15-E3-i4', label: { es: "Su unidad mínima es el satoshi", en: "Its smallest unit is the satoshi" }, correctCategoryId: 'INV-15-E3-c1' },
      { id: 'INV-15-E3-i5', label: { es: "Cambió a prueba de participación en 2022", en: "Switched to proof of stake in 2022" }, correctCategoryId: 'INV-15-E3-c2' },
      { id: 'INV-15-E3-i6', label: { es: "Su estabilidad depende de reservas o colateral", en: "Their stability depends on reserves or collateral" }, correctCategoryId: 'INV-15-E3-c3' },
    ],
    explanation: {
      es: "Bitcoin: prueba de trabajo, halving y satoshis. Ethereum: contratos inteligentes, gas y prueba de participación desde 2022. Stablecoins: paridad con una moneda sostenida por reservas o colateral. Error común: atribuir a Bitcoin el cambio a prueba de participación, que fue de Ethereum.",
      en: "Bitcoin: proof of work, halving and satoshis. Ethereum: smart contracts, gas and proof of stake since 2022. Stablecoins: a peg to a currency supported by reserves or collateral. Common mistake: attributing the switch to proof of stake to Bitcoin, when it was Ethereum.",
    },
    difficulty: 2,
    points: 15,
    competency: 'bitcoin-ethereum-stablecoins',
  },
  {
    id: 'INV-15-E4',
    level: 4,
    module: 'INV-15',
    kind: 'truefalse',
    flavor: 'concept',
    prompt: {
      es: "Una stablecoin nunca puede perder su paridad con el dólar, porque su nombre indica que es estable.",
      en: "A stablecoin can never lose its peg to the dollar, because its name says it is stable.",
    },
    answer: false,
    explanation: {
      es: "Falso. Su estabilidad depende de que el respaldo exista y funcione. Si las reservas son insuficientes, ilíquidas o el algoritmo falla, puede perder la paridad; en 2022 una stablecoin algorítmica muy grande colapsó. Error común: tratar una stablecoin como si fuera un depósito bancario sin riesgo.",
      en: "False. Its stability depends on the backing existing and working. If reserves are insufficient or illiquid, or the algorithm fails, it can lose its peg; in 2022 a very large algorithmic stablecoin collapsed. Common mistake: treating a stablecoin as if it were a risk-free bank deposit.",
    },
    difficulty: 1,
    points: 10,
    competency: 'bitcoin-ethereum-stablecoins',
  },
  {
    id: 'INV-15-E5',
    level: 4,
    module: 'INV-15',
    kind: 'fields',
    flavor: 'case',
    context: {
      es: "Envías ether a otra billetera. La transferencia usa 21,000 unidades de gas y el precio del gas es 20 gwei (1 gwei = 0.000000001 ETH). Supón un precio hipotético de $50,000 por ETH.",
      en: "You send ether to another wallet. The transfer uses 21,000 gas units and the gas price is 20 gwei (1 gwei = 0.000000001 ETH). Assume a hypothetical price of $50,000 per ETH.",
    },
    prompt: {
      es: "Calcula la comisión de gas de la transferencia en ETH y en pesos.",
      en: "Compute the transfer's gas fee in ETH and in pesos.",
    },
    fields: [
      { id: 'f1', label: { es: "Comisión (ETH)", en: "Fee (ETH)" }, answer: 0.00042, unit: 'none', tolerance: { abs: 0.000001 } },
      { id: 'f2', label: { es: "Comisión (MXN)", en: "Fee (MXN)" }, answer: 21, unit: 'MXN', tolerance: { abs: 0.05 } },
    ],
    explanation: {
      es: "Gas total: 21,000 × 20 = 420,000 gwei = 0.00042 ETH. En pesos: 0.00042 × 50,000 = $21. Si la red se congestiona y el gas sube, la misma transferencia cuesta más. Error común: olvidar convertir gwei a ETH y obtener una comisión absurda.",
      en: "Total gas: 21,000 × 20 = 420,000 gwei = 0.00042 ETH. In pesos: 0.00042 × 50,000 = $21. If the network gets congested and gas rises, the same transfer costs more. Common mistake: forgetting to convert gwei to ETH and getting an absurd fee.",
    },
    difficulty: 2,
    points: 15,
    competency: 'bitcoin-ethereum-stablecoins',
  },
  {
    id: 'INV-15-E6',
    level: 4,
    module: 'INV-15',
    kind: 'fields',
    flavor: 'case',
    context: {
      es: "Un protocolo de stablecoins respaldadas por cripto exige una razón mínima de colateral de 150 %. Depositas ETH por $30,000 y pides el máximo de stablecoins permitido (cada una vale $1). Después, el ETH cae 25 %.",
      en: "A crypto-backed stablecoin protocol requires a minimum collateral ratio of 150%. You deposit $30,000 of ETH and borrow the maximum stablecoins allowed (each worth $1). Then ETH falls 25%.",
    },
    prompt: {
      es: "Calcula las stablecoins recibidas, el nuevo valor del colateral y la nueva razón de colateral tras la caída del ETH.",
      en: "Compute the stablecoins received, the new collateral value and the new collateral ratio after ETH's drop.",
    },
    fields: [
      { id: 'f1', label: { es: "Stablecoins recibidas (unidades)", en: "Stablecoins received (units)" }, answer: 20000, unit: 'units', tolerance: { abs: 0.5 } },
      { id: 'f2', label: { es: "Nuevo valor del colateral (MXN)", en: "New collateral value (MXN)" }, answer: 22500, unit: 'MXN', tolerance: { abs: 0.5 } },
      { id: 'f3', label: { es: "Nueva razón de colateral (%)", en: "New collateral ratio (%)" }, answer: 112.5, unit: '%', tolerance: { abs: 0.05 } },
    ],
    explanation: {
      es: "Máximo: 30,000 ÷ 1.5 = 20,000 stablecoins. Colateral tras caer 25 %: 30,000 × 0.75 = $22,500. Razón: 22,500 ÷ 20,000 = 112.5 %, por debajo del mínimo de 150 %: la posición sería liquidada. Error común: pedir el máximo permitido, sin dejar margen de seguridad para caídas.",
      en: "Maximum: 30,000 ÷ 1.5 = 20,000 stablecoins. Collateral after a 25% drop: 30,000 × 0.75 = $22,500. Ratio: 22,500 ÷ 20,000 = 112.5%, below the 150% minimum: the position would be liquidated. Common mistake: borrowing the maximum allowed, leaving no safety cushion for drops.",
    },
    difficulty: 3,
    points: 20,
    competency: 'bitcoin-ethereum-stablecoins',
  },

  // ═════════════════════════ INV-16 ═════════════════════════
  {
    id: 'INV-16-E1',
    level: 4,
    module: 'INV-16',
    kind: 'mcq',
    flavor: 'concept',
    prompt: {
      es: "¿Por qué es tan difícil alterar un bloque antiguo de una blockchain?",
      en: "Why is it so hard to alter an old block in a blockchain?",
    },
    options: [
      { id: 'INV-16-E1-a', text: { es: "Porque un banco central guarda una copia de respaldo", en: "Because a central bank keeps a backup copy" } },
      { id: 'INV-16-E1-b', text: { es: "Porque cada bloque guarda el hash del anterior y cambiarlo exige rehacer los siguientes y convencer a la mayoría de la red", en: "Because each block stores the previous block's hash, and changing it requires redoing all later blocks and convincing most of the network" } },
      { id: 'INV-16-E1-c', text: { es: "Porque los datos están escritos en papel en varias sucursales", en: "Because the data is written on paper in several branches" } },
      { id: 'INV-16-E1-d', text: { es: "Porque la ley prohíbe modificar bloques", en: "Because the law forbids modifying blocks" } },
    ],
    correctOptionId: 'INV-16-E1-b',
    explanation: {
      es: "El encadenamiento por hashes hace que cualquier cambio rompa la huella de todos los bloques posteriores, y el consenso exige que la mayoría acepte la versión alterada. No depende de un banco central ni de la ley. Error común: pensar que la seguridad viene de una autoridad y no del diseño.",
      en: "Hash chaining means any change breaks the fingerprint of every later block, and consensus requires the majority to accept the altered version. It does not depend on a central bank or the law. Common mistake: thinking security comes from an authority rather than from the design.",
    },
    difficulty: 1,
    points: 10,
    competency: 'blockchain-markets',
  },
  {
    id: 'INV-16-E2',
    level: 4,
    module: 'INV-16',
    kind: 'truefalse',
    flavor: 'concept',
    prompt: {
      es: "Si un dato quedó registrado en una blockchain, entonces está garantizado que el dato es verdadero.",
      en: "If a piece of data is recorded on a blockchain, it is guaranteed to be true.",
    },
    answer: false,
    explanation: {
      es: "Falso. La blockchain garantiza que el registro no se altere después, no que lo registrado sea cierto. Si alguien sube información falsa (por ejemplo, un inmueble inexistente), queda registrada falsamente para siempre. Por eso importan los oráculos y la verificación externa. Error común: confundir inalterable con verdadero.",
      en: "False. Blockchain guarantees the record is not altered later, not that what was recorded is true. If someone uploads false information (for example, a nonexistent building), it stays falsely recorded forever. That is why oracles and external verification matter. Common mistake: confusing tamper-resistant with true.",
    },
    difficulty: 1,
    points: 10,
    competency: 'blockchain-markets',
  },
  {
    id: 'INV-16-E3',
    level: 4,
    module: 'INV-16',
    kind: 'fields',
    flavor: 'case',
    context: {
      es: "Una plaza comercial con valor de $50,000,000 se tokeniza en 500,000 tokens. Genera rentas netas anuales de $3,000,000 que se reparten a los tenedores. Inviertes $25,000.",
      en: "A shopping center worth $50,000,000 is tokenized into 500,000 tokens. It generates net annual rent of $3,000,000 distributed to holders. You invest $25,000.",
    },
    prompt: {
      es: "Calcula el precio por token, cuántos tokens de la plaza comercial compras y cuánta renta anual recibes.",
      en: "Compute the price per token, how many shopping-center tokens you buy and how much annual rent you receive.",
    },
    fields: [
      { id: 'f1', label: { es: "Precio por token (MXN)", en: "Price per token (MXN)" }, answer: 100, unit: 'MXN', tolerance: { abs: 0.05 } },
      { id: 'f2', label: { es: "Tokens comprados", en: "Tokens bought" }, answer: 250, unit: 'units', tolerance: { abs: 0.5 } },
      { id: 'f3', label: { es: "Renta anual recibida (MXN)", en: "Annual rent received (MXN)" }, answer: 1500, unit: 'MXN', tolerance: { abs: 0.5 } },
    ],
    explanation: {
      es: "Precio: 50,000,000 ÷ 500,000 = $100. Tokens: 25,000 ÷ 100 = 250. Renta por token: 3,000,000 ÷ 500,000 = $6; total 250 × 6 = $1,500 (6 % anual). Error común: dividir la renta entre tus tokens en lugar de entre el total de tokens.",
      en: "Price: 50,000,000 ÷ 500,000 = $100. Tokens: 25,000 ÷ 100 = 250. Rent per token: 3,000,000 ÷ 500,000 = $6; total 250 × 6 = $1,500 (6% a year). Common mistake: dividing the rent by your tokens instead of by the total tokens.",
    },
    difficulty: 2,
    points: 15,
    competency: 'blockchain-markets',
  },
  {
    id: 'INV-16-E4',
    level: 4,
    module: 'INV-16',
    kind: 'classify',
    flavor: 'concept',
    prompt: {
      es: "Clasifica cada característica como propia de una blockchain pública o de una permisionada.",
      en: "Classify each feature as typical of a public or a permissioned blockchain.",
    },
    categories: [
      { id: 'INV-16-E4-c1', label: { es: "Pública", en: "Public" } },
      { id: 'INV-16-E4-c2', label: { es: "Permisionada", en: "Permissioned" } },
    ],
    items: [
      { id: 'INV-16-E4-i1', label: { es: "Cualquier persona puede descargar el software y validar", en: "Anyone can download the software and validate" }, correctCategoryId: 'INV-16-E4-c1' },
      { id: 'INV-16-E4-i2', label: { es: "Solo un grupo de bancos autorizados registra operaciones", en: "Only a group of authorized banks records transactions" }, correctCategoryId: 'INV-16-E4-c2' },
      { id: 'INV-16-E4-i3', label: { es: "Todas las operaciones son visibles para el mundo", en: "All transactions are visible to the world" }, correctCategoryId: 'INV-16-E4-c1' },
      { id: 'INV-16-E4-i4', label: { es: "Un operador decide quién entra y qué datos ve cada participante", en: "An operator decides who joins and what data each participant sees" }, correctCategoryId: 'INV-16-E4-c2' },
    ],
    explanation: {
      es: "Las públicas son abiertas: cualquiera participa y ve las operaciones. Las permisionadas restringen quién participa y qué ve, lo que da privacidad y control a instituciones como bancos. Error común: creer que toda blockchain es pública y transparente para todos.",
      en: "Public ones are open: anyone participates and sees transactions. Permissioned ones restrict who participates and what they see, giving privacy and control to institutions such as banks. Common mistake: believing every blockchain is public and transparent to everyone.",
    },
    difficulty: 1,
    points: 10,
    competency: 'blockchain-markets',
  },
  {
    id: 'INV-16-E5',
    level: 4,
    module: 'INV-16',
    kind: 'multi',
    flavor: 'concept',
    prompt: {
      es: "¿Cuáles son beneficios reales que puede aportar la tokenización de activos? Selecciona todas las que apliquen.",
      en: "Which are real benefits that asset tokenization can bring? Select all that apply.",
    },
    options: [
      { id: 'INV-16-E5-a', text: { es: "Dividir activos caros en fracciones accesibles", en: "Splitting expensive assets into affordable fractions" } },
      { id: 'INV-16-E5-b', text: { es: "Garantizar que siempre habrá comprador para tu token", en: "Guaranteeing there will always be a buyer for your token" } },
      { id: 'INV-16-E5-c', text: { es: "Automatizar pagos de cupones o rentas con contratos inteligentes", en: "Automating coupon or rent payments with smart contracts" } },
      { id: 'INV-16-E5-d', text: { es: "Liquidar operaciones más rápido y con menos riesgo de contraparte", en: "Settling trades faster and with less counterparty risk" } },
      { id: 'INV-16-E5-e', text: { es: "Eliminar el riesgo de que el activo pierda valor", en: "Eliminating the risk that the asset loses value" } },
    ],
    correctOptionIds: ['INV-16-E5-a', 'INV-16-E5-c', 'INV-16-E5-d'],
    explanation: {
      es: "Fraccionar, automatizar pagos y agilizar la liquidación son beneficios reales. Pero tokenizar no crea compradores (la liquidez depende de la demanda) ni elimina el riesgo de mercado del activo. Error común: pensar que un token es más seguro que el activo que representa.",
      en: "Fractionalizing, automating payments and speeding up settlement are real benefits. But tokenizing does not create buyers (liquidity depends on demand) nor remove the asset's market risk. Common mistake: thinking a token is safer than the asset it represents.",
    },
    difficulty: 2,
    points: 15,
    competency: 'blockchain-markets',
  },
  {
    id: 'INV-16-E6',
    level: 4,
    module: 'INV-16',
    kind: 'mcq',
    flavor: 'case',
    context: {
      es: "Una casa de bolsa vende bonos tokenizados por $3,000,000 a un fondo. Ambos usan una red donde existen tanto los bonos como dinero tokenizado. El contrato inteligente intercambia los dos en una sola operación.",
      en: "A brokerage sells $3,000,000 of tokenized bonds to a fund. Both use a network where both the bonds and tokenized money exist. The smart contract swaps the two in a single operation.",
    },
    prompt: {
      es: "¿Qué ocurre si al momento de liquidar el fondo no tiene el dinero suficiente?",
      en: "What happens if, at settlement time, the fund does not have enough money?",
    },
    options: [
      { id: 'INV-16-E6-a', text: { es: "Los bonos se entregan y el fondo queda debiendo", en: "The bonds are delivered and the fund owes the money" } },
      { id: 'INV-16-E6-b', text: { es: "La casa de bolsa recibe la mitad y entrega la mitad", en: "The brokerage receives half and delivers half" } },
      { id: 'INV-16-E6-c', text: { es: "La operación completa no se ejecuta: ni salen los bonos ni sale el dinero", en: "The whole operation does not execute: neither the bonds nor the money move" } },
      { id: 'INV-16-E6-d', text: { es: "Un juez decide al día siguiente quién se queda con los bonos", en: "A judge decides the next day who keeps the bonds" } },
    ],
    correctOptionId: 'INV-16-E6-c',
    explanation: {
      es: "En la entrega contra pago atómica ambos lados se ejecutan juntos o ninguno se ejecuta. Así nadie entrega sin cobrar. Error común: pensar que la blockchain obliga a entregar primero y cobrar después, como en la liquidación tradicional con plazo.",
      en: "In atomic delivery versus payment both legs execute together or neither does. That way no one delivers without being paid. Common mistake: thinking blockchain forces delivery first and payment later, as in traditional settlement with a time lag.",
    },
    difficulty: 2,
    points: 15,
    competency: 'blockchain-markets',
  },

  // ═════════════════════════ INV-17 ═════════════════════════
  {
    id: 'INV-17-E1',
    level: 4,
    module: 'INV-17',
    kind: 'classify',
    flavor: 'case',
    prompt: {
      es: "Clasifica cada situación según el tipo de riesgo de inversión que representa.",
      en: "Classify each situation by the type of investment risk it represents.",
    },
    categories: [
      { id: 'INV-17-E1-c1', label: { es: "Riesgo de crédito", en: "Credit risk" } },
      { id: 'INV-17-E1-c2', label: { es: "Riesgo de liquidez", en: "Liquidity risk" } },
      { id: 'INV-17-E1-c3', label: { es: "Riesgo de tasa de interés", en: "Interest rate risk" } },
      { id: 'INV-17-E1-c4', label: { es: "Riesgo de concentración", en: "Concentration risk" } },
    ],
    items: [
      { id: 'INV-17-E1-i1', label: { es: "La empresa que emitió tu bono deja de pagar intereses", en: "The company that issued your bond stops paying interest" }, correctCategoryId: 'INV-17-E1-c1' },
      { id: 'INV-17-E1-i2', label: { es: "Quieres vender un terreno urgente y solo te ofrecen 30 % menos", en: "You want to sell a plot of land urgently and are only offered 30% less" }, correctCategoryId: 'INV-17-E1-c2' },
      { id: 'INV-17-E1-i3', label: { es: "Suben las tasas y el precio de tu bono de largo plazo baja", en: "Rates rise and the price of your long-term bond falls" }, correctCategoryId: 'INV-17-E1-c3' },
      { id: 'INV-17-E1-i4', label: { es: "Tienes 70 % de tus ahorros en acciones de una sola empresa", en: "You have 70% of your savings in a single company's shares" }, correctCategoryId: 'INV-17-E1-c4' },
      { id: 'INV-17-E1-i5', label: { es: "Un pagaré de una financiera pequeña vence y no te lo pagan", en: "A promissory note from a small lender matures and is not paid" }, correctCategoryId: 'INV-17-E1-c1' },
    ],
    explanation: {
      es: "Crédito: el deudor no paga (bono, pagaré). Liquidez: no puedes vender rápido sin rebajar el precio (terreno). Tasa: al subir las tasas bajan los precios de los bonos. Concentración: demasiado en una sola apuesta. Error común: llamar riesgo de mercado a cualquier pérdida sin identificar su causa.",
      en: "Credit: the debtor does not pay (bond, note). Liquidity: you cannot sell quickly without cutting the price (land). Rate: when rates rise, bond prices fall. Concentration: too much in a single bet. Common mistake: calling any loss market risk without identifying its cause.",
    },
    difficulty: 2,
    points: 15,
    competency: 'investment-risk',
  },
  {
    id: 'INV-17-E2',
    level: 4,
    module: 'INV-17',
    kind: 'numeric',
    flavor: 'case',
    context: {
      es: "El portafolio de Elena alcanzó un máximo de $400,000 y después cayó hasta un mínimo de $300,000.",
      en: "Elena's portfolio reached a peak of $400,000 and then fell to a trough of $300,000.",
    },
    prompt: {
      es: "¿Cuál fue la caída máxima (drawdown) del portafolio de Elena, en porcentaje? Responde con número positivo.",
      en: "What was the maximum drawdown of Elena's portfolio, as a percentage? Answer with a positive number.",
    },
    answer: 25,
    unit: '%',
    decimals: 2,
    tolerance: { abs: 0.05 },
    explanation: {
      es: "(300,000 − 400,000) ÷ 400,000 = −25 %, una caída de 25 %. Se mide contra el máximo, no contra el mínimo. Error común: dividir entre 300,000 y responder 33.33 %, que es la subida necesaria para recuperarse.",
      en: "(300,000 − 400,000) ÷ 400,000 = −25%, a 25% drawdown. It is measured against the peak, not the trough. Common mistake: dividing by 300,000 and answering 33.33%, which is the rise needed to recover.",
    },
    difficulty: 1,
    points: 10,
    competency: 'investment-risk',
  },
  {
    id: 'INV-17-E3',
    level: 4,
    module: 'INV-17',
    kind: 'numeric',
    flavor: 'concept',
    prompt: {
      es: "Si una inversión pierde 20 %, ¿qué porcentaje debe ganar después para volver a su valor original?",
      en: "If an investment loses 20%, what percentage must it gain afterward to return to its original value?",
    },
    answer: 25,
    unit: '%',
    decimals: 2,
    tolerance: { abs: 0.05 },
    explanation: {
      es: "1 ÷ (1 − 0.20) − 1 = 1.25 − 1 = 25 %. Ejemplo: $100 caen a $80; para volver a $100 necesitas ganar $20 sobre $80, es decir, 25 %. Error común: responder 20 %, creyendo que pérdidas y ganancias son simétricas.",
      en: "1 ÷ (1 − 0.20) − 1 = 1.25 − 1 = 25%. Example: $100 falls to $80; to return to $100 you need to gain $20 on $80, that is, 25%. Common mistake: answering 20%, believing losses and gains are symmetric.",
    },
    difficulty: 2,
    points: 15,
    competency: 'investment-risk',
  },
  {
    id: 'INV-17-E4',
    level: 4,
    module: 'INV-17',
    kind: 'fields',
    flavor: 'case',
    context: {
      es: "Tomás tiene un capital de $200,000 y arriesga como máximo 1 % por operación. Quiere comprar una acción a $50 y venderla si baja a $45.",
      en: "Tomás has $200,000 in capital and risks at most 1% per trade. He wants to buy a stock at $50 and sell it if it falls to $45.",
    },
    prompt: {
      es: "Calcula el riesgo máximo en pesos, el número de acciones que puede comprar Tomás y el valor de la posición.",
      en: "Compute the maximum risk in pesos, the number of shares Tomás can buy and the position's value.",
    },
    fields: [
      { id: 'f1', label: { es: "Riesgo máximo (MXN)", en: "Maximum risk (MXN)" }, answer: 2000, unit: 'MXN', tolerance: { abs: 0.5 } },
      { id: 'f2', label: { es: "Número de acciones", en: "Number of shares" }, answer: 400, unit: 'units', tolerance: { abs: 0.5 } },
      { id: 'f3', label: { es: "Valor de la posición (MXN)", en: "Position value (MXN)" }, answer: 20000, unit: 'MXN', tolerance: { abs: 0.5 } },
    ],
    explanation: {
      es: "Riesgo: 200,000 × 1 % = $2,000. Riesgo por acción: 50 − 45 = $5. Acciones: 2,000 ÷ 5 = 400. Posición: 400 × 50 = $20,000 (10 % del capital, pero solo arriesga 1 %). Error común: confundir el riesgo con el monto invertido y comprar solo $2,000 de acciones.",
      en: "Risk: 200,000 × 1% = $2,000. Risk per share: 50 − 45 = $5. Shares: 2,000 ÷ 5 = 400. Position: 400 × 50 = $20,000 (10% of capital, yet only 1% at risk). Common mistake: confusing risk with the amount invested and buying only $2,000 of stock.",
    },
    difficulty: 3,
    points: 20,
    competency: 'investment-risk',
  },
  {
    id: 'INV-17-E5',
    level: 4,
    module: 'INV-17',
    kind: 'numeric',
    flavor: 'case',
    context: {
      es: "Un portafolio vale $1,000,000 y su volatilidad diaria es de 1 %. Usa z = 1.65 para 95 % de confianza.",
      en: "A portfolio is worth $1,000,000 and its daily volatility is 1%. Use z = 1.65 for 95% confidence.",
    },
    prompt: {
      es: "¿Cuál es el valor en riesgo (VaR) diario al 95 % de este portafolio de un millón? Responde en pesos.",
      en: "What is the daily 95% value at risk (VaR) of this one-million portfolio? Answer in pesos.",
    },
    answer: 16500,
    unit: 'MXN',
    decimals: 0,
    tolerance: { abs: 0.5 },
    explanation: {
      es: "VaR = 1,000,000 × 1.65 × 0.01 = $16,500. Significa que en condiciones normales, 95 de cada 100 días la pérdida no debería superar $16,500; el otro 5 % de los días puede ser mayor. Error común: usar la volatilidad sola ($10,000) sin el factor de confianza.",
      en: "VaR = 1,000,000 × 1.65 × 0.01 = $16,500. It means that under normal conditions, on 95 of every 100 days the loss should not exceed $16,500; on the other 5% of days it may be larger. Common mistake: using volatility alone ($10,000) without the confidence factor.",
    },
    difficulty: 2,
    points: 15,
    competency: 'investment-risk',
  },
  {
    id: 'INV-17-E6',
    level: 4,
    module: 'INV-17',
    kind: 'truefalse',
    flavor: 'concept',
    prompt: {
      es: "Una orden stop-loss en $45 garantiza que tus acciones se venderán exactamente a $45 si el precio baja.",
      en: "A stop-loss order at $45 guarantees your shares will be sold at exactly $45 if the price falls.",
    },
    answer: false,
    explanation: {
      es: "Falso. Al tocar $45 se activa una orden de venta al siguiente precio disponible. Si el mercado abre con un salto a la baja (por ejemplo, en $38 tras una mala noticia), vendes cerca de $38. Error común: creer que el stop-loss limita la pérdida con precisión en cualquier escenario.",
      en: "False. Hitting $45 triggers a sell order at the next available price. If the market opens with a gap down (for example, at $38 after bad news), you sell near $38. Common mistake: believing the stop-loss limits the loss precisely in every scenario.",
    },
    difficulty: 1,
    points: 10,
    competency: 'investment-risk',
  },

  // ═════════════════════════ INV-18 ═════════════════════════
  {
    id: 'INV-18-E1',
    level: 4,
    module: 'INV-18',
    kind: 'fields',
    flavor: 'case',
    context: {
      es: "Lucía invierte $2,000 cada mes durante tres meses en un ETF. Los precios en las fechas de compra fueron $50, $40 y $80.",
      en: "Lucía invests $2,000 every month for three months in an ETF. Prices on the purchase dates were $50, $40 and $80.",
    },
    prompt: {
      es: "Calcula las unidades que acumula Lucía, su costo promedio por unidad y el precio promedio del periodo.",
      en: "Compute the units Lucía accumulates, her average cost per unit and the period's average price.",
    },
    fields: [
      { id: 'f1', label: { es: "Unidades acumuladas", en: "Units accumulated" }, answer: 115, unit: 'units', tolerance: { abs: 0.5 } },
      { id: 'f2', label: { es: "Costo promedio por unidad (MXN)", en: "Average cost per unit (MXN)" }, answer: 52.17, unit: 'MXN', tolerance: { abs: 0.01 } },
      { id: 'f3', label: { es: "Precio promedio (MXN)", en: "Average price (MXN)" }, answer: 56.67, unit: 'MXN', tolerance: { abs: 0.01 } },
    ],
    explanation: {
      es: "Unidades: 2,000 ÷ 50 = 40; ÷ 40 = 50; ÷ 80 = 25; total 115. Costo promedio: 6,000 ÷ 115 = $52.17. Precio promedio: (50 + 40 + 80) ÷ 3 = $56.67. Al comprar más unidades cuando el precio está bajo, el costo promedio queda debajo del precio promedio. Error común: creer que el costo promedio es igual al promedio simple de los precios.",
      en: "Units: 2,000 ÷ 50 = 40; ÷ 40 = 50; ÷ 80 = 25; total 115. Average cost: 6,000 ÷ 115 = $52.17. Average price: (50 + 40 + 80) ÷ 3 = $56.67. By buying more units when the price is low, the average cost ends up below the average price. Common mistake: believing the average cost equals the simple average of prices.",
    },
    difficulty: 2,
    points: 15,
    competency: 'long-term-strategies',
  },
  {
    id: 'INV-18-E2',
    level: 4,
    module: 'INV-18',
    kind: 'numeric',
    flavor: 'case',
    context: {
      es: "Dos fondos invierten en la misma cartera. Con el Fondo A, de bajo costo, ganas 7 % neto anual; con el Fondo B, que cobra 2 % más, ganas 5 % neto. Inviertes $200,000 durante 10 años sin aportaciones adicionales.",
      en: "Two funds invest in the same holdings. With low-cost Fund A you earn 7% net per year; with Fund B, which charges 2% more, you earn 5% net. You invest $200,000 for 10 years with no additional contributions.",
    },
    prompt: {
      es: "¿Cuántos pesos más tendrás al final con el Fondo A que con el Fondo B? Redondea a pesos.",
      en: "How many more pesos will you have at the end with Fund A than with Fund B? Round to pesos.",
    },
    answer: 67651,
    unit: 'MXN',
    decimals: 0,
    tolerance: { abs: 2 },
    explanation: {
      es: "A: 200,000 × 1.07¹⁰ = $393,430. B: 200,000 × 1.05¹⁰ = $325,779. Diferencia: ≈ $67,651. Error común: calcular 2 % × 10 años × 200,000 = $40,000, olvidando que la comisión también se compone.",
      en: "A: 200,000 × 1.07¹⁰ = $393,430. B: 200,000 × 1.05¹⁰ = $325,779. Difference: ≈ $67,651. Common mistake: computing 2% × 10 years × 200,000 = $40,000, forgetting that the fee also compounds.",
    },
    difficulty: 3,
    points: 20,
    competency: 'long-term-strategies',
  },
  {
    id: 'INV-18-E3',
    level: 4,
    module: 'INV-18',
    kind: 'mcq',
    flavor: 'concept',
    prompt: {
      es: "¿Qué describe mejor la inversión pasiva (indexada)?",
      en: "What best describes passive (index) investing?",
    },
    options: [
      { id: 'INV-18-E3-a', text: { es: "Comprar y vender seguido para aprovechar cada movimiento", en: "Buying and selling often to take advantage of every move" } },
      { id: 'INV-18-E3-b', text: { es: "Replicar un índice completo con bajo costo y aceptar el rendimiento del mercado", en: "Tracking an entire index at low cost and accepting the market's return" } },
      { id: 'INV-18-E3-c', text: { es: "Elegir pocas acciones que un analista cree que superarán al mercado", en: "Picking a few stocks an analyst believes will beat the market" } },
      { id: 'INV-18-E3-d', text: { es: "Dejar el dinero en efectivo hasta que el mercado se vea seguro", en: "Keeping money in cash until the market looks safe" } },
    ],
    correctOptionId: 'INV-18-E3-b',
    explanation: {
      es: "La inversión pasiva compra el índice completo (por ejemplo, con un ETF) y busca igualar al mercado con costos bajos. Elegir acciones o entrar y salir es gestión activa, y esperar efectivo es intentar adivinar el mercado. Error común: creer que pasivo significa no invertir.",
      en: "Passive investing buys the whole index (for example, through an ETF) and seeks to match the market at low cost. Picking stocks or trading in and out is active management, and waiting in cash is market timing. Common mistake: believing passive means not investing.",
    },
    difficulty: 1,
    points: 10,
    competency: 'long-term-strategies',
  },
  {
    id: 'INV-18-E4',
    level: 4,
    module: 'INV-18',
    kind: 'truefalse',
    flavor: 'concept',
    prompt: {
      es: "Para un inversionista de largo plazo, salirse del mercado cada vez que hay noticias negativas y regresar cuando se calma suele mejorar su rendimiento.",
      en: "For a long-term investor, leaving the market whenever there is bad news and returning once it calms down usually improves returns.",
    },
    answer: false,
    explanation: {
      es: "Falso. Los mejores días del mercado suelen llegar cerca de los peores, cuando el miedo es mayor; quien sale tiende a perdérselos y a regresar más caro. Además paga comisiones e impuestos extra. Error común: creer que se puede adivinar de forma constante cuándo entrar y salir.",
      en: "False. The market's best days often come close to the worst ones, when fear is highest; those who leave tend to miss them and return at higher prices. They also pay extra fees and taxes. Common mistake: believing one can consistently guess when to get in and out.",
    },
    difficulty: 1,
    points: 10,
    competency: 'long-term-strategies',
  },
  {
    id: 'INV-18-E5',
    level: 4,
    module: 'INV-18',
    kind: 'classify',
    flavor: 'concept',
    prompt: {
      es: "Clasifica cada descripción según el estilo de inversión de largo plazo.",
      en: "Classify each description by long-term investment style.",
    },
    categories: [
      { id: 'INV-18-E5-c1', label: { es: "Valor", en: "Value" } },
      { id: 'INV-18-E5-c2', label: { es: "Crecimiento", en: "Growth" } },
      { id: 'INV-18-E5-c3', label: { es: "Dividendos", en: "Dividends" } },
      { id: 'INV-18-E5-c4', label: { es: "Indexada (pasiva)", en: "Index (passive)" } },
    ],
    items: [
      { id: 'INV-18-E5-i1', label: { es: "Comprar empresas sólidas que cotizan por debajo de lo que valen sus negocios", en: "Buying solid companies trading below what their businesses are worth" }, correctCategoryId: 'INV-18-E5-c1' },
      { id: 'INV-18-E5-i2', label: { es: "Invertir en empresas cuyas ventas crecen mucho más rápido que la economía", en: "Investing in companies whose sales grow much faster than the economy" }, correctCategoryId: 'INV-18-E5-c2' },
      { id: 'INV-18-E5-i3', label: { es: "Elegir empresas maduras que reparten utilidades cada año", en: "Choosing mature companies that share profits every year" }, correctCategoryId: 'INV-18-E5-c3' },
      { id: 'INV-18-E5-i4', label: { es: "Comprar un ETF que replica todo el mercado y no intentar superarlo", en: "Buying an ETF that tracks the whole market and not trying to beat it" }, correctCategoryId: 'INV-18-E5-c4' },
    ],
    explanation: {
      es: "Valor busca precios bajos frente al valor del negocio; crecimiento, empresas que crecen rápido; dividendos, empresas que reparten utilidades con regularidad; indexada, replicar el mercado con bajo costo. Error común: confundir valor (barato frente a su valor) con crecimiento (crecer rápido, aunque se pague caro).",
      en: "Value seeks low prices relative to business worth; growth, fast-growing companies; dividends, companies that regularly share profits; index, tracking the market at low cost. Common mistake: confusing value (cheap relative to worth) with growth (growing fast, even if pricey).",
    },
    difficulty: 1,
    points: 10,
    competency: 'long-term-strategies',
  },
  {
    id: 'INV-18-E6',
    level: 4,
    module: 'INV-18',
    kind: 'mcq',
    flavor: 'case',
    context: {
      es: "Roberto tiene 58 años y quiere retirarse a los 63. Hoy tiene 85 % de su ahorro para el retiro en acciones porque en los últimos años subieron mucho.",
      en: "Roberto is 58 and wants to retire at 63. Today he has 85% of his retirement savings in stocks because they have risen a lot in recent years.",
    },
    prompt: {
      es: "Según la estrategia de ciclo de vida, ¿qué le conviene a Roberto?",
      en: "Under the life-cycle strategy, what suits Roberto?",
    },
    options: [
      { id: 'INV-18-E6-a', text: { es: "Subir a 100 % en acciones para aprovechar la racha", en: "Go to 100% stocks to ride the streak" } },
      { id: 'INV-18-E6-b', text: { es: "Vender todo y quedarse en efectivo sin rendimiento", en: "Sell everything and stay in cash with no return" } },
      { id: 'INV-18-E6-c', text: { es: "Mantener 85 % porque las acciones siempre suben a largo plazo", en: "Keep 85% because stocks always rise in the long run" } },
      { id: 'INV-18-E6-d', text: { es: "Reducir gradualmente la renta variable y aumentar instrumentos más estables conforme se acerca su retiro", en: "Gradually reduce equities and increase more stable instruments as his retirement approaches" } },
    ],
    correctOptionId: 'INV-18-E6-d',
    explanation: {
      es: "Con cinco años de horizonte, una caída fuerte no tendría tiempo de recuperarse. El ciclo de vida reduce poco a poco la renta variable, sin pasar a todo efectivo, que perdería contra la inflación. Error común: decidir la mezcla por lo que subió recientemente y no por el horizonte.",
      en: "With a five-year horizon, a steep drop would have no time to recover. The life-cycle approach gradually reduces equities, without going all to cash, which would lose to inflation. Common mistake: setting the mix by what rose recently rather than by the horizon.",
    },
    difficulty: 2,
    points: 15,
    competency: 'long-term-strategies',
  },
]
