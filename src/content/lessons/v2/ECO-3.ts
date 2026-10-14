import type { Exercise, Lesson } from '../../../types'

/**
 * FINCORE — Temario v2.0, área Economía y Entorno Empresarial, parte 3 (Intermedio).
 * ECO-13 a ECO-18: economía internacional, tipos de cambio, economía empresarial,
 * teoría de juegos, economía del sector público y finanzas públicas.
 */

const t = (es: string, en: string) => ({ es, en })

export const lessons: Lesson[] = [
  // ───────────────────────────── ECO-13 ─────────────────────────────
  {
    id: 'ECO-13',
    level: 1,
    topicIds: ['ECO.13'],
    title: t("Economía internacional y comercio exterior", "International economics and foreign trade"),
    summary: t(
      "Los países comercian porque cada uno produce mejor ciertas cosas (ventaja comparativa); ese intercambio se registra en la balanza de pagos y se regula con aranceles, cuotas y tratados comerciales.",
      "Countries trade because each one is better at producing certain things (comparative advantage); that exchange is recorded in the balance of payments and regulated with tariffs, quotas and trade agreements.",
    ),
    minutes: 17,
    objectives: [
      t("Explicar la ventaja comparativa usando el costo de oportunidad.", "Explain comparative advantage using opportunity cost."),
      t("Distinguir las partes principales de la balanza de pagos y calcular una balanza comercial.", "Distinguish the main parts of the balance of payments and compute a trade balance."),
      t("Reconocer los instrumentos de política comercial (aranceles, cuotas, tratados) y sus efectos en precios y empresas.", "Recognize trade policy tools (tariffs, quotas, agreements) and their effects on prices and firms."),
    ],
    theory: [
      {
        heading: t("¿Por qué comercian los países? La ventaja comparativa", "Why do countries trade? Comparative advantage"),
        body: [
          t(
            "Tú no siembras tu maíz ni coses tu ropa: te dedicas a lo tuyo y compras lo demás. Los países hacen lo mismo. El **comercio exterior** es la compra y venta de bienes y servicios entre países: lo que vendemos fuera son **exportaciones** y lo que compramos fuera son **importaciones**.",
            "You do not grow your own corn or sew your own clothes: you focus on your work and buy the rest. Countries do the same. **Foreign trade** is the buying and selling of goods and services between countries: what we sell abroad are **exports** and what we buy abroad are **imports**.",
          ),
          t(
            "Un país tiene **ventaja absoluta** si produce algo con menos recursos que otro. Pero lo que de verdad explica el comercio es la **ventaja comparativa**, idea de David Ricardo: conviene especializarse en lo que tiene el **menor costo de oportunidad**, es decir, en lo que sacrificas menos de otra cosa al producirlo.",
            "A country has an **absolute advantage** if it produces something with fewer resources than another. But what really explains trade is **comparative advantage**, David Ricardo's idea: it pays to specialize in what has the **lowest opportunity cost**, that is, what makes you give up the least of something else when you produce it.",
          ),
          t(
            "Aunque un país sea mejor en todo, ambos ganan si cada uno se especializa según su ventaja comparativa y luego intercambian. Mini ejemplo: en una hora, México produce 6 kg de jitomate o 2 herramientas; Canadá, 2 kg de jitomate o 4 herramientas. En México una herramienta cuesta 3 kg de jitomate; en Canadá, solo 0.5 kg. Canadá se especializa en herramientas y México en jitomate.",
            "Even if one country is better at everything, both gain if each specializes according to its comparative advantage and then they trade. Mini example: in one hour, Mexico produces 6 kg of tomatoes or 2 tools; Canada, 2 kg of tomatoes or 4 tools. In Mexico one tool costs 3 kg of tomatoes; in Canada, only 0.5 kg. Canada specializes in tools and Mexico in tomatoes.",
          ),
        ],
        formulas: [
          {
            name: t("Costo de oportunidad de producir un bien", "Opportunity cost of producing a good"),
            expression: "Costo de oportunidad de X = Lo que dejas de producir de Y ÷ Lo que produces de X",
            variables: [
              { symbol: "X", meaning: t("El bien cuyo costo quieres conocer (por ejemplo, computadoras).", "The good whose cost you want to know (for example, computers).") },
              { symbol: "Y", meaning: t("El otro bien que podrías producir con el mismo tiempo y recursos.", "The other good you could produce with the same time and resources.") },
              { symbol: "Lo que dejas de producir de Y", meaning: t("Unidades de Y que harías si dedicaras todo el tiempo a Y.", "Units of Y you would make if you spent all the time on Y.") },
              { symbol: "Lo que produces de X", meaning: t("Unidades de X que harías con ese mismo tiempo.", "Units of X you would make in that same time.") },
            ],
            steps: [
              t("Anota cuánto produce el país de cada bien en el mismo tiempo (por ejemplo, un día).", "Write down how much of each good the country produces in the same time (for example, one day)."),
              t("Divide lo que produce del otro bien entre lo que produce del bien que analizas: el resultado está en unidades del otro bien.", "Divide what it produces of the other good by what it produces of the good you are analyzing: the result is in units of the other good."),
              t("Repite para el otro país y compara: quien tenga el costo más bajo tiene la ventaja comparativa en ese bien.", "Repeat for the other country and compare: whoever has the lower cost has the comparative advantage in that good."),
            ],
            example: t(
              "En un día, un país produce 20 kg de café o 5 radios. Costo de 1 radio = 20 ÷ 5 = **4 kg de café**. Costo de 1 kg de café = 5 ÷ 20 = **0.25 radios**. Si otro país sacrifica solo 2 kg de café por radio, a ese otro país le conviene hacer los radios.",
              "In one day, a country produces 20 kg of coffee or 5 radios. Cost of 1 radio = 20 ÷ 5 = **4 kg of coffee**. Cost of 1 kg of coffee = 5 ÷ 20 = **0.25 radios**. If another country gives up only 2 kg of coffee per radio, that other country should make the radios."
            ),
            mistake: t(
              "Dividir al revés: el bien que analizas siempre va abajo (en el denominador).",
              "Dividing the other way round: the good you are analyzing always goes on the bottom (in the denominator)."
            ),
          },
        ],
      },
      {
        heading: t("La balanza de pagos: el estado de cuenta del país con el mundo", "The balance of payments: the country's statement with the world"),
        body: [
          t(
            "La **balanza de pagos** es un registro de todas las operaciones de un país con el resto del mundo durante un periodo, como el estado de cuenta de tu tarjeta pero a nivel nación. Tiene dos grandes partes.",
            "The **balance of payments** is a record of all of a country's transactions with the rest of the world during a period, like your card statement but at the national level. It has two large parts.",
          ),
          t(
            "La **cuenta corriente** registra exportaciones e importaciones de bienes y servicios (incluido el turismo), los ingresos por inversiones (intereses y utilidades) y las **transferencias**, como las **remesas** que envían los familiares desde el extranjero. La **cuenta financiera** registra la compra y venta de activos: por ejemplo, cuando una empresa extranjera construye una planta en México (**inversión extranjera directa**) o cuando un extranjero compra bonos mexicanos.",
            "The **current account** records exports and imports of goods and services (including tourism), investment income (interest and profits) and **transfers**, such as the **remittances** sent by relatives from abroad. The **financial account** records the purchase and sale of assets: for example, when a foreign company builds a plant in Mexico (**foreign direct investment**) or when a foreigner buys Mexican bonds.",
          ),
          t(
            "La **balanza comercial** es solo una pieza: exportaciones de mercancías menos importaciones. Si sale positiva hay **superávit**; si sale negativa, **déficit**. Mini ejemplo hipotético: un país exporta 520 mil millones de dólares e importa 535 mil millones; su balanza comercial es −15 mil millones (déficit).",
            "The **trade balance** is only one piece: merchandise exports minus imports. If it is positive there is a **surplus**; if negative, a **deficit**. Hypothetical mini example: a country exports 520 billion dollars and imports 535 billion; its trade balance is −15 billion (deficit).",
          ),
        ],
        formulas: [
          {
            name: t("Balanza comercial", "Trade balance"),
            expression: "Balanza comercial = Exportaciones − Importaciones",
            variables: [
              { symbol: "Exportaciones", meaning: t("Valor de las mercancías que el país vende al extranjero en el periodo (por ejemplo, en miles de millones de dólares).", "Value of the goods the country sells abroad in the period (for example, in billions of dollars).") },
              { symbol: "Importaciones", meaning: t("Valor de las mercancías que el país compra al extranjero en el mismo periodo.", "Value of the goods the country buys from abroad in the same period.") },
            ],
            steps: [
              t("Verifica que ambas cifras sean del mismo periodo y la misma moneda.", "Check that both figures are for the same period and currency."),
              t("Resta las importaciones a las exportaciones.", "Subtract imports from exports."),
              t("Lee el signo: positivo es superávit; negativo, déficit.", "Read the sign: positive is a surplus; negative, a deficit."),
            ],
            example: t(
              "Un país exporta 48 mil millones de dólares e importa 41 mil millones: 48 − 41 = **+7 mil millones** (superávit).",
              "A country exports 48 billion dollars and imports 41 billion: 48 − 41 = **+7 billion** (surplus)."
            ),
            mistake: t(
              "Restar al revés (importaciones − exportaciones) y confundir déficit con superávit.",
              "Subtracting the other way round (imports − exports) and mixing up deficit and surplus."
            ),
          },
        ],
        bullets: [
          t("Cuenta corriente: bienes, servicios, ingresos por inversión y remesas.", "Current account: goods, services, investment income and remittances."),
          t("Cuenta financiera: inversión directa, inversión en bonos y acciones, préstamos.", "Financial account: direct investment, investment in bonds and shares, loans."),
          t("Un déficit comercial no es bueno ni malo por sí solo: depende de qué se importa y cómo se financia.", "A trade deficit is not good or bad by itself: it depends on what is imported and how it is financed."),
        ],
      },
      {
        heading: t("Política comercial: aranceles, cuotas y tratados", "Trade policy: tariffs, quotas and agreements"),
        body: [
          t(
            "Los gobiernos influyen en el comercio con la **política comercial**. Un **arancel** es un impuesto que se cobra a un producto importado al entrar al país. Una **cuota** limita la cantidad que se puede importar. También existen **barreras no arancelarias**, como requisitos sanitarios o técnicos que el producto debe cumplir.",
            "Governments influence trade through **trade policy**. A **tariff** is a tax charged on an imported product when it enters the country. A **quota** limits the quantity that can be imported. There are also **non-tariff barriers**, such as sanitary or technical requirements the product must meet.",
          ),
          t(
            "El **proteccionismo** usa estas barreras para proteger a productores locales, pero normalmente sube los precios para los consumidores y para las empresas que usan insumos importados. El **libre comercio** las reduce mediante **tratados**: México tiene muchos, y el más importante es el **T-MEC** con Estados Unidos y Canadá, que sustituyó al TLCAN. Las reglas generales del comercio mundial se discuten en la **Organización Mundial del Comercio (OMC)**.",
            "**Protectionism** uses these barriers to protect local producers, but it usually raises prices for consumers and for firms that use imported inputs. **Free trade** reduces them through **agreements**: Mexico has many, and the most important is the **USMCA** (T-MEC) with the United States and Canada, which replaced NAFTA. The general rules of world trade are discussed at the **World Trade Organization (WTO)**.",
          ),
          t(
            "Mini ejemplo hipotético: una mochila importada vale $1,000 al llegar a la aduana. Con un arancel de 10%, el importador paga $100 más y la mochila ya le cuesta $1,100 antes de venderla.",
            "Hypothetical mini example: an imported backpack is worth $1,000 at customs. With a 10% tariff, the importer pays $100 more and the backpack already costs $1,100 before selling it.",
          ),
        ],
        formulas: [
          {
            name: t("Costo de un producto importado con arancel", "Cost of an imported product with a tariff"),
            expression: "Arancel = Valor en aduana × tasa del arancel;   Costo con arancel = Valor en aduana × (1 + tasa del arancel)",
            variables: [
              { symbol: "Valor en aduana", meaning: t("Lo que vale la mercancía al llegar a la aduana, en pesos.", "What the goods are worth on arrival at customs, in pesos.") },
              { symbol: "tasa del arancel", meaning: t("Porcentaje del impuesto a la importación, en decimal (15 % = 0.15).", "Import tax percentage, as a decimal (15 % = 0.15).") },
              { symbol: "Arancel", meaning: t("Pesos de impuesto que se pagan por cada unidad.", "Pesos of tax paid per unit.") },
            ],
            steps: [
              t("Convierte la tasa a decimal: 12 % = 0.12.", "Convert the rate to a decimal: 12 % = 0.12."),
              t("Calcula el arancel: valor en aduana × tasa.", "Compute the tariff: customs value × rate."),
              t("Súmalo al valor en aduana para obtener el costo total (o multiplica directo por 1 + tasa).", "Add it to the customs value to get the total cost (or multiply directly by 1 + rate)."),
            ],
            example: t(
              "Una licuadora con valor en aduana de $2,400 y arancel hipotético de 12 %. Arancel = $2,400 × 0.12 = $288. Costo con arancel = $2,400 + $288 = **$2,688** (igual a $2,400 × 1.12).",
              "A blender with a customs value of $2,400 and a hypothetical 12 % tariff. Tariff = $2,400 × 0.12 = $288. Cost with tariff = $2,400 + $288 = **$2,688** (same as $2,400 × 1.12)."
            ),
            mistake: t(
              "Reportar solo el arancel como si fuera el costo total, u olvidar sumarlo al valor de la mercancía.",
              "Reporting only the tariff as if it were the total cost, or forgetting to add it to the value of the goods."
            ),
          },
        ],
      },
    ],
    examples: [
      {
        title: t("¿Quién debe especializarse en qué?", "Who should specialize in what?"),
        problem: t(
          "En un día de trabajo, un obrero en el País A produce 10 camisas o 5 bicicletas; en el País B, 6 camisas o 6 bicicletas. ¿En qué producto tiene ventaja comparativa cada país?",
          "In one workday, a worker in Country A produces 10 shirts or 5 bicycles; in Country B, 6 shirts or 6 bicycles. In which product does each country have a comparative advantage?",
        ),
        steps: [
          t("País A: 1 bicicleta cuesta 10 ÷ 5 = 2 camisas; 1 camisa cuesta 5 ÷ 10 = 0.5 bicicletas.", "Country A: 1 bicycle costs 10 ÷ 5 = 2 shirts; 1 shirt costs 5 ÷ 10 = 0.5 bicycles."),
          t("País B: 1 bicicleta cuesta 6 ÷ 6 = 1 camisa; 1 camisa cuesta 1 bicicleta.", "Country B: 1 bicycle costs 6 ÷ 6 = 1 shirt; 1 shirt costs 1 bicycle."),
          t("Camisas: A sacrifica 0.5 bicicletas y B sacrifica 1. A tiene el menor costo.", "Shirts: A gives up 0.5 bicycles and B gives up 1. A has the lower cost."),
          t("Bicicletas: A sacrifica 2 camisas y B solo 1. B tiene el menor costo.", "Bicycles: A gives up 2 shirts and B only 1. B has the lower cost."),
        ],
        result: t(
          "A se especializa en camisas y B en bicicletas; al intercambiar, ambos pueden consumir más que si cada uno produjera todo.",
          "A specializes in shirts and B in bicycles; by trading, both can consume more than if each produced everything.",
        ),
      },
      {
        title: t("Efecto de un arancel en el precio", "Effect of a tariff on price"),
        problem: t(
          "Una tienda importa una pantalla con valor en aduana de $8,000. Supón un arancel hipotético de 20%. Si la tienda quiere ganar $1,500 por pantalla, ¿a cuánto debe venderla antes y después del arancel?",
          "A store imports a TV with a customs value of $8,000. Assume a hypothetical 20% tariff. If the store wants to earn $1,500 per TV, what price must it charge before and after the tariff?",
        ),
        steps: [
          t("Sin arancel: costo $8,000 + ganancia $1,500 = $9,500.", "Without tariff: cost $8,000 + profit $1,500 = $9,500."),
          t("Arancel: $8,000 × 20% = $1,600.", "Tariff: $8,000 × 20% = $1,600."),
          t("Nuevo costo: $8,000 + $1,600 = $9,600.", "New cost: $8,000 + $1,600 = $9,600."),
          t("Nuevo precio: $9,600 + $1,500 = $11,100.", "New price: $9,600 + $1,500 = $11,100."),
        ],
        result: t(
          "El precio sube de $9,500 a $11,100: buena parte del arancel lo termina pagando el consumidor.",
          "The price rises from $9,500 to $11,100: a good part of the tariff ends up being paid by the consumer.",
        ),
      },
    ],
    keyPoints: [
      t("El comercio se explica por la ventaja comparativa: especialízate en lo que tiene menor costo de oportunidad.", "Trade is explained by comparative advantage: specialize in what has the lowest opportunity cost."),
      t("La balanza de pagos registra todo lo que un país hace con el mundo: cuenta corriente y cuenta financiera.", "The balance of payments records everything a country does with the world: current account and financial account."),
      t("Balanza comercial = exportaciones − importaciones; negativa es déficit, positiva es superávit.", "Trade balance = exports − imports; negative is a deficit, positive is a surplus."),
      t("Aranceles, cuotas y requisitos técnicos son barreras que suelen subir precios.", "Tariffs, quotas and technical requirements are barriers that usually raise prices."),
      t("Los tratados como el T-MEC reducen barreras entre los países que los firman.", "Agreements such as the USMCA reduce barriers among the signing countries."),
    ],
    normativeNote: t(
      "Contenido educativo. Las referencias al T-MEC, a la OMC y a los aranceles son generales; las tasas, cuotas y reglas de los tratados cambian y se revisan periódicamente. Las cifras de los ejemplos son hipotéticas. Verifica la versión vigente (2026) antes de tomar decisiones de comercio exterior.",
      "Educational content. References to the USMCA, the WTO and tariffs are general; rates, quotas and treaty rules change and are reviewed periodically. The figures in the examples are hypothetical. Verify the current version (2026) before making foreign trade decisions.",
    ),
    exerciseIds: ['ECO-13-E1', 'ECO-13-E2', 'ECO-13-E3', 'ECO-13-E4', 'ECO-13-E5', 'ECO-13-E6'],
  },

  // ───────────────────────────── ECO-14 ─────────────────────────────
  {
    id: 'ECO-14',
    level: 1,
    topicIds: ['ECO.14'],
    title: t("Tipos de cambio", "Exchange rates"),
    summary: t(
      "El tipo de cambio es el precio de una moneda en términos de otra; en México flota según la oferta y la demanda, y sus movimientos benefician a unos (exportadores) y perjudican a otros (importadores y deudores en dólares).",
      "The exchange rate is the price of one currency in terms of another; in Mexico it floats with supply and demand, and its moves benefit some (exporters) and hurt others (importers and dollar debtors).",
    ),
    minutes: 16,
    objectives: [
      t("Leer un tipo de cambio y distinguir apreciación de depreciación.", "Read an exchange rate and distinguish appreciation from depreciation."),
      t("Calcular conversiones con precio de compra y de venta, variaciones porcentuales y tipos cruzados.", "Compute conversions with buy and sell prices, percentage changes and cross rates."),
      t("Identificar los regímenes cambiarios y los factores que mueven el tipo de cambio.", "Identify exchange rate regimes and the factors that move the exchange rate."),
      t("Explicar quién gana y quién pierde cuando el peso se deprecia.", "Explain who wins and who loses when the peso depreciates."),
    ],
    theory: [
      {
        heading: t("Qué es el tipo de cambio y cómo se lee", "What the exchange rate is and how to read it"),
        body: [
          t(
            "El **tipo de cambio** es el precio de una moneda expresado en otra. En México solemos decir \"el dólar está en 18\": significa que **1 dólar cuesta 18 pesos**. Es igual que el precio del kilo de tortilla, solo que lo que compras es otra moneda.",
            "The **exchange rate** is the price of one currency expressed in another. In Mexico we usually say \"the dollar is at 18\": it means **1 dollar costs 18 pesos**. It is just like the price of a kilo of tortillas, except what you buy is another currency.",
          ),
          t(
            "Si el número sube (de 18 a 20 pesos por dólar), cada dólar cuesta más pesos: el peso se **depreció** (perdió valor) y el dólar se **apreció**. Si baja (de 18 a 17), el peso se **apreció**. Ojo: \"subió el tipo de cambio\" significa que el peso se debilitó.",
            "If the number rises (from 18 to 20 pesos per dollar), each dollar costs more pesos: the peso **depreciated** (lost value) and the dollar **appreciated**. If it falls (from 18 to 17), the peso **appreciated**. Careful: \"the exchange rate went up\" means the peso weakened.",
          ),
          t(
            "En bancos y casas de cambio verás dos precios: el de **compra** (lo que te pagan por tu dólar) y el de **venta** (lo que te cobran por darte un dólar). La venta siempre es mayor; la diferencia, llamada **diferencial** o *spread*, es la ganancia del intermediario. Mini ejemplo: si compran a 17.40 y venden a 18.10, el diferencial es 0.70 pesos por dólar.",
            "At banks and exchange houses you will see two prices: the **buy** price (what they pay you for your dollar) and the **sell** price (what they charge you to give you a dollar). The sell price is always higher; the difference, called the **spread**, is the intermediary's profit. Mini example: if they buy at 17.40 and sell at 18.10, the spread is 0.70 pesos per dollar.",
          ),
        ],
        formulas: [
          {
            name: t("Variación porcentual del tipo de cambio", "Percentage change in the exchange rate"),
            expression: "Variación % = (Tipo nuevo − Tipo anterior) ÷ Tipo anterior × 100",
            variables: [
              { symbol: "Tipo nuevo", meaning: t("Pesos por dólar al final del periodo.", "Pesos per dollar at the end of the period.") },
              { symbol: "Tipo anterior", meaning: t("Pesos por dólar al inicio del periodo (el punto de partida).", "Pesos per dollar at the start of the period (the starting point).") },
            ],
            steps: [
              t("Resta: tipo nuevo − tipo anterior.", "Subtract: new rate − previous rate."),
              t("Divide esa diferencia entre el tipo anterior.", "Divide that difference by the previous rate."),
              t("Multiplica por 100. Positivo: el dólar subió (el peso se depreció); negativo: el peso se apreció.", "Multiply by 100. Positive: the dollar rose (the peso depreciated); negative: the peso appreciated."),
            ],
            example: t(
              "El dólar pasa de 18.50 a 19.98 pesos. Diferencia: 19.98 − 18.50 = 1.48. División: 1.48 ÷ 18.50 = 0.08. Variación = 0.08 × 100 = **8 %**: el dólar cuesta 8 % más.",
              "The dollar moves from 18.50 to 19.98 pesos. Difference: 19.98 − 18.50 = 1.48. Division: 1.48 ÷ 18.50 = 0.08. Change = 0.08 × 100 = **8 %**: the dollar costs 8 % more."
            ),
            mistake: t(
              "Dividir entre el tipo nuevo: la variación siempre se calcula sobre el valor inicial.",
              "Dividing by the new rate: the change is always computed on the starting value."
            ),
          },
          {
            name: t("Cambiar dinero con precio de compra y de venta", "Exchanging money with buy and sell prices"),
            expression: "Pesos que recibes = Dólares que vendes × Precio de compra;   Pesos que pagas = Dólares que compras × Precio de venta;   Diferencial = Venta − Compra",
            variables: [
              { symbol: "Precio de compra", meaning: t("Pesos que la casa de cambio te paga por cada dólar que tú le vendes (el más bajo).", "Pesos the exchange house pays you for each dollar you sell it (the lower one).") },
              { symbol: "Precio de venta", meaning: t("Pesos que la casa de cambio te cobra por cada dólar que tú le compras (el más alto).", "Pesos the exchange house charges you for each dollar you buy from it (the higher one).") },
              { symbol: "Diferencial", meaning: t("Ganancia de la casa de cambio por dólar, en pesos.", "The exchange house's profit per dollar, in pesos.") },
            ],
            steps: [
              t("Pregúntate qué haces tú: si vendes dólares, usa el precio de compra; si compras dólares, usa el de venta.", "Ask yourself what you are doing: if you sell dollars, use the buy price; if you buy dollars, use the sell price."),
              t("Multiplica los dólares por ese precio para obtener pesos.", "Multiply the dollars by that price to get pesos."),
              t("Para el diferencial, resta venta − compra.", "For the spread, subtract sell − buy."),
            ],
            example: t(
              "Una casa compra a $17.80 y vende a $18.50. Si vendes 400 dólares: 400 × 17.80 = **$7,120**. Si compras 250 dólares: 250 × 18.50 = **$4,625**. Diferencial: 18.50 − 17.80 = **$0.70** por dólar.",
              "A house buys at $17.80 and sells at $18.50. If you sell 400 dollars: 400 × 17.80 = **$7,120**. If you buy 250 dollars: 250 × 18.50 = **$4,625**. Spread: 18.50 − 17.80 = **$0.70** per dollar."
            ),
            mistake: t(
              "Leer el letrero desde tu punto de vista: «compra» y «venta» se refieren a lo que hace la casa de cambio, no tú.",
              "Reading the sign from your point of view: «buy» and «sell» refer to what the exchange house does, not you."
            ),
          },
        ],
      },
      {
        heading: t("Regímenes cambiarios y tipos cruzados", "Exchange rate regimes and cross rates"),
        body: [
          t(
            "Un **régimen cambiario** es la regla con la que un país maneja su moneda. En un **tipo de cambio fijo**, el banco central se compromete a mantener un precio, comprando o vendiendo divisas. En un **tipo de cambio flexible o flotante**, el precio lo determinan la oferta y la demanda. Entre ambos hay regímenes **intermedios** (flotación administrada, bandas).",
            "An **exchange rate regime** is the rule a country uses to manage its currency. In a **fixed exchange rate**, the central bank commits to keep a price, buying or selling foreign currency. In a **flexible or floating exchange rate**, supply and demand set the price. In between there are **intermediate** regimes (managed float, bands).",
          ),
          t(
            "México tiene un régimen de **libre flotación** desde finales de 1994. El Banco de México no fija el precio, pero publica cada día hábil un tipo de cambio de referencia llamado **FIX**, que se usa, por ejemplo, para pagar en pesos deudas pactadas en dólares dentro del país.",
            "Mexico has had a **free-floating** regime since late 1994. Banco de México does not set the price, but it publishes every business day a reference exchange rate called **FIX**, used for example to pay in pesos debts agreed in dollars within the country.",
          ),
          t(
            "Un **tipo de cambio cruzado** se obtiene combinando dos cotizaciones con una moneda en común. Mini ejemplo hipotético: si 1 euro = 1.10 dólares y 1 dólar = 18 pesos, entonces 1 euro = 1.10 × 18 = 19.80 pesos.",
            "A **cross rate** is obtained by combining two quotes that share a currency. Hypothetical mini example: if 1 euro = 1.10 dollars and 1 dollar = 18 pesos, then 1 euro = 1.10 × 18 = 19.80 pesos.",
          ),
        ],
        formulas: [
          {
            name: t("Tipo de cambio cruzado", "Cross exchange rate"),
            expression: "MXN por EUR = (USD por EUR) × (MXN por USD)",
            variables: [
              { symbol: "USD por EUR", meaning: t("Cuántos dólares vale 1 euro (o la otra moneda extranjera).", "How many dollars 1 euro (or the other foreign currency) is worth.") },
              { symbol: "MXN por USD", meaning: t("Cuántos pesos vale 1 dólar.", "How many pesos 1 dollar is worth.") },
              { symbol: "MXN por EUR", meaning: t("Cuántos pesos vale 1 euro: el resultado.", "How many pesos 1 euro is worth: the result.") },
            ],
            steps: [
              t("Identifica la moneda en común entre las dos cotizaciones (normalmente el dólar).", "Identify the currency the two quotes share (usually the dollar)."),
              t("Multiplica: unidades de dólar por cada moneda extranjera × pesos por cada dólar.", "Multiply: dollars per unit of foreign currency × pesos per dollar."),
              t("Revisa con sentido común: si la moneda vale más que el dólar, debe costar más pesos que el dólar.", "Check with common sense: if the currency is worth more than the dollar, it must cost more pesos than the dollar."),
            ],
            example: t(
              "Hipotético: 1 libra esterlina = 1.25 dólares y 1 dólar = 17.60 pesos. 1 libra = 1.25 × 17.60 = **22.00 pesos**.",
              "Hypothetical: 1 pound sterling = 1.25 dollars and 1 dollar = 17.60 pesos. 1 pound = 1.25 × 17.60 = **22.00 pesos**."
            ),
            mistake: t(
              "Dividir en lugar de multiplicar: daría menos pesos por una moneda que vale más que el dólar.",
              "Dividing instead of multiplying: it would give fewer pesos for a currency worth more than the dollar."
            ),
          },
        ],
      },
      {
        heading: t("Qué mueve el tipo de cambio y a quién afecta", "What moves the exchange rate and whom it affects"),
        body: [
          t(
            "Como cualquier precio, el tipo de cambio sube cuando más gente quiere dólares que pesos. Los factores principales son: las **tasas de interés** (si en México pagan más que en Estados Unidos, llegan inversionistas a comprar pesos), la **inflación** (una inflación más alta tiende a debilitar la moneda), el **riesgo** percibido del país, el **comercio** (exportaciones traen dólares, importaciones los demandan) y las **remesas**.",
            "Like any price, the exchange rate rises when more people want dollars than pesos. The main factors are: **interest rates** (if Mexico pays more than the United States, investors arrive to buy pesos), **inflation** (higher inflation tends to weaken the currency), the country's perceived **risk**, **trade** (exports bring in dollars, imports demand them) and **remittances**.",
          ),
          t(
            "Cuando el peso se deprecia, **ganan** quienes reciben dólares y gastan en pesos: exportadores, hoteles que atienden turistas extranjeros y familias que reciben remesas. **Pierden** quienes gastan en dólares: importadores, viajeros mexicanos al extranjero y empresas con **deudas en dólares** pero ingresos en pesos.",
            "When the peso depreciates, those who receive dollars and spend in pesos **win**: exporters, hotels serving foreign tourists and families receiving remittances. Those who spend in dollars **lose**: importers, Mexican travelers abroad and companies with **dollar debts** but peso income.",
          ),
          t(
            "Las empresas expuestas pueden protegerse con una **cobertura**, como un contrato *forward*: hoy pactan el tipo de cambio al que comprarán dólares en el futuro. Mini ejemplo: una importadora que pagará 50,000 dólares en tres meses fija hoy el precio y ya no le preocupa si el dólar sube.",
            "Exposed companies can protect themselves with a **hedge**, such as a forward contract: today they agree the rate at which they will buy dollars in the future. Mini example: an importer that will pay 50,000 dollars in three months locks in the price today and no longer worries if the dollar rises.",
          ),
        ],
        bullets: [
          t("Tasas de interés más altas en México: tienden a apreciar el peso.", "Higher interest rates in Mexico: tend to strengthen the peso."),
          t("Más inflación que los socios comerciales: tiende a depreciarlo.", "More inflation than trading partners: tends to weaken it."),
          t("Más exportaciones, turismo y remesas: más oferta de dólares.", "More exports, tourism and remittances: more supply of dollars."),
          t("Episodios de miedo o riesgo: los inversionistas venden pesos.", "Episodes of fear or risk: investors sell pesos."),
        ],
      },
    ],
    examples: [
      {
        title: t("Cambiar dinero para un viaje", "Exchanging money for a trip"),
        problem: t(
          "Ana viajará a Estados Unidos. Una casa de cambio compra dólares a $17.40 y los vende a $18.10 (precios hipotéticos). Ana cambia $25,000 pesos. Al volver le sobran 200 dólares y los vende en la misma casa. ¿Cuántos dólares recibe y cuántos pesos recupera?",
          "Ana will travel to the United States. An exchange house buys dollars at $17.40 and sells them at $18.10 (hypothetical prices). Ana exchanges 25,000 pesos. On her return she has 200 dollars left and sells them at the same house. How many dollars does she get and how many pesos does she recover?",
        ),
        steps: [
          t("Para comprar dólares Ana paga el precio de venta: 25,000 ÷ 18.10 = 1,381.22 dólares.", "To buy dollars Ana pays the sell price: 25,000 ÷ 18.10 = 1,381.22 dollars."),
          t("Al regresar, la casa le compra sus dólares al precio de compra: 200 × 17.40 = $3,480.", "On her return, the house buys her dollars at the buy price: 200 × 17.40 = $3,480."),
          t("Esos 200 dólares le habían costado 200 × 18.10 = $3,620.", "Those 200 dollars had cost her 200 × 18.10 = $3,620."),
          t("Pierde $3,620 − $3,480 = $140 por el diferencial.", "She loses $3,620 − $3,480 = $140 to the spread."),
        ],
        result: t(
          "Recibe 1,381.22 dólares y recupera $3,480. Cambiar de ida y vuelta cuesta el diferencial: conviene calcular bien cuánto cambiar.",
          "She gets 1,381.22 dollars and recovers $3,480. Exchanging back and forth costs the spread: it pays to calculate well how much to exchange.",
        ),
      },
      {
        title: t("Depreciación y precio de un producto importado", "Depreciation and the price of an imported product"),
        problem: t(
          "El tipo de cambio pasa de 17.00 a 18.70 pesos por dólar (cifras hipotéticas). Una laptop cuesta 600 dólares. ¿Cuánto se depreció el peso y cuánto cuesta ahora la laptop en pesos?",
          "The exchange rate moves from 17.00 to 18.70 pesos per dollar (hypothetical figures). A laptop costs 600 dollars. How much did the peso depreciate and how much does the laptop now cost in pesos?",
        ),
        steps: [
          t("Variación: (18.70 − 17.00) ÷ 17.00 = 0.10 = 10%.", "Change: (18.70 − 17.00) ÷ 17.00 = 0.10 = 10%."),
          t("Precio antes: 600 × 17.00 = $10,200.", "Price before: 600 × 17.00 = $10,200."),
          t("Precio después: 600 × 18.70 = $11,220.", "Price after: 600 × 18.70 = $11,220."),
        ],
        result: t(
          "El dólar cuesta 10% más y la laptop sube $1,020, aunque su precio en dólares no cambió.",
          "The dollar costs 10% more and the laptop rises by $1,020, even though its dollar price did not change.",
        ),
      },
    ],
    keyPoints: [
      t("El tipo de cambio es el precio de una moneda en otra; en México se cotiza en pesos por dólar.", "The exchange rate is the price of one currency in another; in Mexico it is quoted in pesos per dollar."),
      t("Si sube el número de pesos por dólar, el peso se deprecia; si baja, se aprecia.", "If the number of pesos per dollar rises, the peso depreciates; if it falls, it appreciates."),
      t("Al comprar dólares pagas el precio de venta; al venderlos recibes el de compra.", "When you buy dollars you pay the sell price; when you sell them you get the buy price."),
      t("México tiene libre flotación; Banxico publica el FIX como referencia.", "Mexico has a free float; Banxico publishes the FIX as a reference."),
      t("Una depreciación ayuda a exportadores y receptores de remesas, y perjudica a importadores y deudores en dólares.", "A depreciation helps exporters and remittance receivers, and hurts importers and dollar debtors."),
    ],
    normativeNote: t(
      "Contenido educativo. La descripción del régimen cambiario y del tipo de cambio FIX del Banco de México es general; los procedimientos pueden cambiar. Todos los tipos de cambio de esta lección son hipotéticos: consulta la cotización vigente (2026) antes de operar.",
      "Educational content. The description of the exchange rate regime and of Banco de México's FIX rate is general; procedures may change. All exchange rates in this lesson are hypothetical: check the current quote (2026) before trading.",
    ),
    exerciseIds: ['ECO-14-E1', 'ECO-14-E2', 'ECO-14-E3', 'ECO-14-E4', 'ECO-14-E5', 'ECO-14-E6'],
  },

  // ───────────────────────────── ECO-15 ─────────────────────────────
  {
    id: 'ECO-15',
    level: 1,
    topicIds: ['ECO.15'],
    title: t("Economía empresarial", "Managerial economics"),
    summary: t(
      "La economía empresarial aplica las herramientas de la economía a las decisiones de un negocio: medir la ganancia real con el costo de oportunidad, decidir con costos marginales y fijar precios según cómo reaccionan los clientes.",
      "Managerial economics applies the tools of economics to business decisions: measuring real profit with opportunity cost, deciding with marginal costs and setting prices based on how customers react.",
    ),
    minutes: 17,
    objectives: [
      t("Distinguir la utilidad contable de la utilidad económica.", "Distinguish accounting profit from economic profit."),
      t("Usar costos fijos, variables, marginales y hundidos para tomar decisiones.", "Use fixed, variable, marginal and sunk costs to make decisions."),
      t("Calcular el punto de equilibrio en unidades.", "Compute the break-even point in units."),
      t("Aplicar la elasticidad precio para decidir si conviene subir o bajar un precio.", "Apply price elasticity to decide whether to raise or lower a price."),
    ],
    theory: [
      {
        heading: t("Pensar como economista en un negocio", "Thinking like an economist in a business"),
        body: [
          t(
            "La **economía empresarial** usa ideas de la economía para responder preguntas de negocio: ¿cuánto producir?, ¿a qué precio vender?, ¿abro otra sucursal? La idea central es el **costo de oportunidad**: el valor de la mejor alternativa a la que renuncias al elegir algo.",
            "**Managerial economics** uses ideas from economics to answer business questions: how much to produce? at what price to sell? should I open another branch? The central idea is **opportunity cost**: the value of the best alternative you give up when you choose something.",
          ),
          t(
            "La **utilidad contable** resta a los ingresos solo los costos que se pagan (renta, insumos, sueldos): los **costos explícitos**. La **utilidad económica** además resta los **costos implícitos**: lo que el dueño deja de ganar por usar su tiempo y su dinero en el negocio, como el sueldo que tendría en otro empleo.",
            "**Accounting profit** subtracts from revenue only the costs that are paid (rent, supplies, wages): **explicit costs**. **Economic profit** also subtracts **implicit costs**: what the owner gives up by using his time and money in the business, such as the salary he would earn in another job.",
          ),
          t(
            "Mini ejemplo: Lucía tiene una panadería que ingresa $600,000 al año y paga $420,000 de costos: utilidad contable de $180,000. Pero dejó un empleo de $240,000 al año. Su utilidad económica es 180,000 − 240,000 = −$60,000: le iría mejor en su antiguo trabajo.",
            "Mini example: Lucía has a bakery that brings in $600,000 a year and pays $420,000 in costs: accounting profit of $180,000. But she left a job paying $240,000 a year. Her economic profit is 180,000 − 240,000 = −$60,000: she would be better off in her old job.",
          ),
        ],
        formulas: [
          {
            name: t("Utilidad contable y utilidad económica", "Accounting profit and economic profit"),
            expression: "Utilidad contable = Ingresos − Costos explícitos;   Utilidad económica = Ingresos − Costos explícitos − Costos implícitos",
            variables: [
              { symbol: "Ingresos", meaning: t("Dinero que entra por ventas en el periodo, en pesos.", "Money coming in from sales in the period, in pesos.") },
              { symbol: "Costos explícitos", meaning: t("Gastos que sí se pagan: renta, sueldos, insumos, en pesos.", "Costs actually paid: rent, wages, supplies, in pesos.") },
              { symbol: "Costos implícitos", meaning: t("Lo que el dueño deja de ganar en su mejor alternativa: el sueldo de otro empleo o el rendimiento de su ahorro, en pesos.", "What the owner gives up in the best alternative: the salary from another job or the return on savings, in pesos.") },
            ],
            steps: [
              t("Calcula la utilidad contable: ingresos − costos explícitos.", "Compute accounting profit: revenue − explicit costs."),
              t("Suma los costos implícitos (sueldo al que renunció, rendimiento perdido del ahorro).", "Add up implicit costs (salary given up, lost return on savings)."),
              t("Resta los costos implícitos a la utilidad contable: eso es la utilidad económica.", "Subtract implicit costs from accounting profit: that is economic profit."),
            ],
            example: t(
              "Una estética ingresa $750,000 al año y paga $520,000. Utilidad contable = 750,000 − 520,000 = $230,000. La dueña dejó un empleo de $200,000. Utilidad económica = 230,000 − 200,000 = **$30,000**.",
              "A hair salon brings in $750,000 a year and pays $520,000. Accounting profit = 750,000 − 520,000 = $230,000. The owner left a $200,000 job. Economic profit = 230,000 − 200,000 = **$30,000**."
            ),
            interpret: t(
              "Positiva: el negocio deja más que tu mejor alternativa. Negativa: aunque haya utilidad contable, te iría mejor en la otra opción.",
              "Positive: the business earns more than your best alternative. Negative: even with an accounting profit, you would do better in the other option."
            ),
            mistake: t(
              "Olvidar los costos implícitos y creer que cualquier utilidad contable significa que el negocio conviene.",
              "Forgetting implicit costs and believing any accounting profit means the business is worthwhile."
            ),
          },
        ],
      },
      {
        heading: t("Costos para decidir: fijos, variables, marginales y hundidos", "Costs for deciding: fixed, variable, marginal and sunk"),
        body: [
          t(
            "Los **costos fijos** no cambian con lo que produces (la renta del local); los **costos variables** sí (la carne y las tortillas de una taquería). El **costo marginal** es lo que cuesta producir **una unidad más**, y el **ingreso marginal** es lo que te deja venderla. La regla de oro: **produce una unidad más mientras el ingreso marginal sea mayor que el costo marginal**.",
            "**Fixed costs** do not change with what you produce (the store rent); **variable costs** do (the meat and tortillas of a taco stand). **Marginal cost** is what it costs to produce **one more unit**, and **marginal revenue** is what selling it brings in. The golden rule: **produce one more unit as long as marginal revenue exceeds marginal cost**.",
          ),
          t(
            "Un **costo hundido** ya se gastó y no se recupera, decidas lo que decidas. Por eso **no debe influir** en decisiones futuras. Si pagaste $30,000 por un estudio de mercado que dice que el producto no se venderá, esos $30,000 no son razón para lanzarlo \"para no perder lo invertido\".",
            "A **sunk cost** has already been spent and cannot be recovered, whatever you decide. That is why it **should not influence** future decisions. If you paid $30,000 for a market study saying the product will not sell, those $30,000 are no reason to launch it \"so as not to lose the investment\".",
          ),
          t(
            "El **punto de equilibrio** es la cantidad en la que no ganas ni pierdes. Cada unidad aporta su **margen de contribución** (precio menos costo variable) para cubrir los costos fijos. Mini ejemplo: un food truck con costos fijos de $45,000 al mes vende tacos a $75 con costo variable de $45: necesita 45,000 ÷ 30 = 1,500 órdenes al mes.",
            "The **break-even point** is the quantity at which you neither gain nor lose. Each unit contributes its **contribution margin** (price minus variable cost) to cover fixed costs. Mini example: a food truck with fixed costs of $45,000 a month sells tacos at $75 with a variable cost of $45: it needs 45,000 ÷ 30 = 1,500 orders a month.",
          ),
        ],
        formulas: [
          {
            name: t("Punto de equilibrio en unidades", "Break-even point in units"),
            expression: "Punto de equilibrio (unidades) = Costos fijos ÷ (Precio − Costo variable unitario)",
            variables: [
              { symbol: "Costos fijos", meaning: t("Gastos que no cambian con lo que vendes (renta, sueldos fijos), en pesos por periodo.", "Costs that do not change with what you sell (rent, fixed salaries), in pesos per period.") },
              { symbol: "Precio", meaning: t("Precio de venta de cada unidad, en pesos.", "Selling price of each unit, in pesos.") },
              { symbol: "Costo variable unitario", meaning: t("Lo que cuesta producir cada unidad (insumos, empaque), en pesos.", "What it costs to produce each unit (supplies, packaging), in pesos.") },
              { symbol: "Precio − Costo variable unitario", meaning: t("Margen de contribución: lo que deja cada unidad para pagar los costos fijos.", "Contribution margin: what each unit leaves to pay fixed costs.") },
            ],
            steps: [
              t("Calcula el margen de contribución: precio − costo variable unitario.", "Compute the contribution margin: price − unit variable cost."),
              t("Divide los costos fijos entre ese margen.", "Divide fixed costs by that margin."),
              t("Si sale con decimales, redondea hacia arriba: no se venden fracciones de unidad.", "If it has decimals, round up: you cannot sell a fraction of a unit."),
            ],
            example: t(
              "Una paletería tiene costos fijos de $36,000 al mes, vende cada paleta en $120 y su costo variable es $75. Margen = 120 − 75 = $45. Equilibrio = 36,000 ÷ 45 = **800 paletas al mes**.",
              "An ice-pop shop has fixed costs of $36,000 a month, sells each pop at $120 and its variable cost is $75. Margin = 120 − 75 = $45. Break-even = 36,000 ÷ 45 = **800 pops a month**."
            ),
            interpret: t(
              "Por debajo de esa cantidad hay pérdida; cada unidad vendida por encima aporta su margen como ganancia.",
              "Below that quantity there is a loss; each unit sold above it adds its margin as profit."
            ),
            mistake: t(
              "Dividir los costos fijos entre el precio, olvidando que cada unidad también tiene su costo variable.",
              "Dividing fixed costs by the price, forgetting that each unit also has its own variable cost."
            ),
          },
        ],
      },
      {
        heading: t("Precios y entorno: usar la elasticidad", "Prices and environment: using elasticity"),
        body: [
          t(
            "Antes de mover un precio, el negocio debe saber cuánto reaccionan sus clientes. La **elasticidad precio de la demanda** compara el cambio porcentual en la cantidad vendida con el cambio porcentual en el precio. Si es **mayor que 1** (demanda **elástica**), los clientes reaccionan mucho; si es **menor que 1** (**inelástica**), reaccionan poco.",
            "Before changing a price, the business must know how much its customers react. The **price elasticity of demand** compares the percentage change in quantity sold with the percentage change in price. If it is **greater than 1** (**elastic** demand), customers react a lot; if it is **less than 1** (**inelastic**), they react little.",
          ),
          t(
            "La consecuencia práctica: con demanda **elástica**, **bajar** el precio aumenta el ingreso total; con demanda **inelástica**, **subir** el precio lo aumenta. Un cine con muchos competidores cerca enfrenta demanda elástica; una farmacia de guardia a medianoche, inelástica.",
            "The practical consequence: with **elastic** demand, **lowering** the price increases total revenue; with **inelastic** demand, **raising** the price increases it. A cinema with many competitors nearby faces elastic demand; an all-night pharmacy at midnight, inelastic.",
          ),
          t(
            "El negocio también vigila su **entorno**: tasas de interés (encarecen créditos), tipo de cambio (encarece insumos importados), inflación (sube costos) y la competencia. Mini ejemplo: si suben las tasas, una mueblería que vende a meses puede ver caer sus ventas aunque no haya cambiado nada dentro de la tienda.",
            "The business also watches its **environment**: interest rates (make loans more expensive), the exchange rate (makes imported inputs more expensive), inflation (raises costs) and competition. Mini example: if rates rise, a furniture store that sells in installments may see its sales fall even though nothing changed inside the store.",
          ),
        ],
        formulas: [
          {
            name: t("Elasticidad precio de la demanda e ingreso total", "Price elasticity of demand and total revenue"),
            expression: "Elasticidad = |% cambio en cantidad| ÷ |% cambio en precio|;   Ingreso total = Precio × Cantidad",
            variables: [
              { symbol: "% cambio en cantidad", meaning: t("(Cantidad nueva − cantidad anterior) ÷ cantidad anterior × 100.", "(New quantity − previous quantity) ÷ previous quantity × 100.") },
              { symbol: "% cambio en precio", meaning: t("(Precio nuevo − precio anterior) ÷ precio anterior × 100.", "(New price − previous price) ÷ previous price × 100.") },
              { symbol: "| |", meaning: t("Valor absoluto: se ignora el signo menos.", "Absolute value: ignore the minus sign.") },
              { symbol: "Ingreso total", meaning: t("Pesos que entran por ventas: precio × unidades vendidas.", "Pesos coming in from sales: price × units sold.") },
            ],
            steps: [
              t("Calcula el % de cambio en el precio sobre el precio anterior.", "Compute the % change in price over the previous price."),
              t("Calcula el % de cambio en la cantidad sobre la cantidad anterior.", "Compute the % change in quantity over the previous quantity."),
              t("Divide ambos sin signo: mayor que 1 = elástica; menor que 1 = inelástica.", "Divide both without sign: greater than 1 = elastic; less than 1 = inelastic."),
              t("Confirma calculando el ingreso total antes y después (precio × cantidad).", "Confirm by computing total revenue before and after (price × quantity)."),
            ],
            example: t(
              "Un gimnasio sube su mensualidad de $200 a $220 y sus socios bajan de 500 a 475. Precio: (220 − 200) ÷ 200 = +10 %. Cantidad: (475 − 500) ÷ 500 = −5 %. Elasticidad = 5 ÷ 10 = **0.5** (inelástica). Ingreso: 200 × 500 = $100,000 contra 220 × 475 = **$104,500**: subir el precio convino.",
              "A gym raises its monthly fee from $200 to $220 and members drop from 500 to 475. Price: (220 − 200) ÷ 200 = +10 %. Quantity: (475 − 500) ÷ 500 = −5 %. Elasticity = 5 ÷ 10 = **0.5** (inelastic). Revenue: 200 × 500 = $100,000 versus 220 × 475 = **$104,500**: raising the price paid off."
            ),
            mistake: t(
              "Calcular los porcentajes sobre el valor nuevo, o confundir elástica con inelástica: si fuera inelástica, bajar el precio reduciría el ingreso.",
              "Computing the percentages on the new value, or mixing up elastic and inelastic: if demand were inelastic, lowering the price would reduce revenue."
            ),
          },
        ],
        bullets: [
          t("Elástica (> 1): bajar el precio sube el ingreso.", "Elastic (> 1): lowering the price raises revenue."),
          t("Inelástica (< 1): subir el precio sube el ingreso.", "Inelastic (< 1): raising the price raises revenue."),
          t("Ingreso total = Precio × Cantidad.", "Total revenue = Price × Quantity."),
        ],
      },
    ],
    examples: [
      {
        title: t("¿Vale la pena seguir con el negocio?", "Is it worth staying in business?"),
        problem: t(
          "Jorge tiene un taller de bicicletas. Ingresos del año: $500,000. Costos pagados: $310,000. Si trabajara en una fábrica ganaría $150,000 al año, y su ahorro de $200,000 metido en el taller podría rendirle 10% en una inversión segura (cifras hipotéticas). Calcula su utilidad contable y económica.",
          "Jorge has a bicycle shop. Annual revenue: $500,000. Costs paid: $310,000. If he worked in a factory he would earn $150,000 a year, and his $200,000 savings put into the shop could earn 10% in a safe investment (hypothetical figures). Compute his accounting and economic profit.",
        ),
        steps: [
          t("Utilidad contable: 500,000 − 310,000 = $190,000.", "Accounting profit: 500,000 − 310,000 = $190,000."),
          t("Costo implícito del ahorro: 200,000 × 10% = $20,000.", "Implicit cost of savings: 200,000 × 10% = $20,000."),
          t("Costos implícitos totales: 150,000 + 20,000 = $170,000.", "Total implicit costs: 150,000 + 20,000 = $170,000."),
          t("Utilidad económica: 190,000 − 170,000 = $20,000.", "Economic profit: 190,000 − 170,000 = $20,000."),
        ],
        result: t(
          "Jorge gana $20,000 más que en su mejor alternativa: económicamente le conviene seguir con el taller.",
          "Jorge earns $20,000 more than in his best alternative: economically it pays to keep the shop.",
        ),
      },
      {
        title: t("¿Bajar o subir el precio?", "Lower or raise the price?"),
        problem: t(
          "Una escuela de natación cobra $800 al mes y tiene 150 alumnos. Estima que si baja a $720 tendría 180 alumnos. ¿Le conviene bajar el precio? ¿Qué tan elástica es su demanda?",
          "A swimming school charges $800 a month and has 150 students. It estimates that if it lowers the price to $720 it would have 180 students. Should it lower the price? How elastic is its demand?",
        ),
        steps: [
          t("Ingreso actual: 800 × 150 = $120,000.", "Current revenue: 800 × 150 = $120,000."),
          t("Ingreso con descuento: 720 × 180 = $129,600.", "Revenue with discount: 720 × 180 = $129,600."),
          t("Cambio en precio: (720 − 800) ÷ 800 = −10%. Cambio en cantidad: (180 − 150) ÷ 150 = +20%.", "Price change: (720 − 800) ÷ 800 = −10%. Quantity change: (180 − 150) ÷ 150 = +20%."),
          t("Elasticidad: 20% ÷ 10% = 2, mayor que 1: demanda elástica.", "Elasticity: 20% ÷ 10% = 2, greater than 1: elastic demand."),
        ],
        result: t(
          "Le conviene bajar el precio: el ingreso sube $9,600. Antes de decidir, revisa que los costos de atender a 30 alumnos más no se coman esa ganancia.",
          "Lowering the price pays off: revenue rises by $9,600. Before deciding, check that the cost of serving 30 more students does not eat up that gain.",
        ),
      },
    ],
    keyPoints: [
      t("La utilidad económica resta también el costo de oportunidad del dueño; la contable no.", "Economic profit also subtracts the owner's opportunity cost; accounting profit does not."),
      t("Produce una unidad más mientras el ingreso marginal supere al costo marginal.", "Produce one more unit while marginal revenue exceeds marginal cost."),
      t("Los costos hundidos no deben influir en las decisiones futuras.", "Sunk costs should not influence future decisions."),
      t("Punto de equilibrio = costos fijos ÷ margen de contribución unitario.", "Break-even = fixed costs ÷ unit contribution margin."),
      t("Con demanda elástica conviene bajar precio; con inelástica, subirlo.", "With elastic demand it pays to lower the price; with inelastic demand, to raise it."),
    ],
    exerciseIds: ['ECO-15-E1', 'ECO-15-E2', 'ECO-15-E3', 'ECO-15-E4', 'ECO-15-E5', 'ECO-15-E6'],
  },

  // ───────────────────────────── ECO-16 ─────────────────────────────
  {
    id: 'ECO-16',
    level: 1,
    topicIds: ['ECO.16'],
    title: t("Teoría de juegos", "Game theory"),
    summary: t(
      "La teoría de juegos estudia decisiones en las que tu resultado depende de lo que hagan otros; con matrices de pagos y árboles se encuentran estrategias dominantes, equilibrios de Nash y amenazas creíbles.",
      "Game theory studies decisions in which your outcome depends on what others do; payoff matrices and trees reveal dominant strategies, Nash equilibria and credible threats.",
    ),
    minutes: 17,
    objectives: [
      t("Identificar jugadores, estrategias y pagos, y distinguir juegos simultáneos de secuenciales.", "Identify players, strategies and payoffs, and distinguish simultaneous from sequential games."),
      t("Encontrar estrategias dominantes y equilibrios de Nash en una matriz de pagos.", "Find dominant strategies and Nash equilibria in a payoff matrix."),
      t("Explicar el dilema del prisionero y por qué la cooperación es difícil.", "Explain the prisoner's dilemma and why cooperation is hard."),
      t("Resolver juegos secuenciales por inducción hacia atrás y detectar amenazas no creíbles.", "Solve sequential games by backward induction and detect non-credible threats."),
    ],
    theory: [
      {
        heading: t("Elementos de un juego", "Elements of a game"),
        body: [
          t(
            "En economía, un **juego** es cualquier situación en la que tu resultado depende de tus decisiones **y** de las de otros. Dos gasolineras en la misma avenida que deciden su precio están en un juego: si una baja y la otra no, se lleva a los clientes.",
            "In economics, a **game** is any situation in which your outcome depends on your decisions **and** on those of others. Two gas stations on the same avenue deciding their price are in a game: if one lowers and the other does not, it takes the customers.",
          ),
          t(
            "Todo juego tiene **jugadores** (quiénes deciden), **estrategias** (qué opciones tiene cada uno) y **pagos** (qué gana cada uno en cada combinación). En un **juego simultáneo** todos deciden sin ver lo que hizo el otro, como en piedra, papel o tijera. En un **juego secuencial** se decide por turnos, viendo la jugada anterior, como en el ajedrez o en una negociación.",
            "Every game has **players** (who decides), **strategies** (what options each has) and **payoffs** (what each gets in each combination). In a **simultaneous game** everyone decides without seeing what the other did, as in rock-paper-scissors. In a **sequential game** players decide in turns, seeing the previous move, as in chess or a negotiation.",
          ),
          t(
            "Los juegos simultáneos se dibujan en una **matriz de pagos**: filas para un jugador, columnas para el otro y en cada casilla el par (pago de fila, pago de columna). Mini ejemplo: si la casilla (Bajar, Mantener) dice (14, 2), la empresa de la fila gana 14 y la de la columna gana 2.",
            "Simultaneous games are drawn in a **payoff matrix**: rows for one player, columns for the other, and in each cell the pair (row payoff, column payoff). Mini example: if the cell (Lower, Keep) says (14, 2), the row firm earns 14 and the column firm earns 2.",
          ),
        ],
      },
      {
        heading: t("Estrategia dominante, equilibrio de Nash y el dilema del prisionero", "Dominant strategy, Nash equilibrium and the prisoner's dilemma"),
        body: [
          t(
            "Una **estrategia dominante** es la que te conviene **sin importar** lo que haga el otro. Para encontrarla, fija la jugada del rival y compara tus pagos; repite para cada jugada del rival. Si la misma opción gana siempre, es dominante.",
            "A **dominant strategy** is the one that is best for you **no matter** what the other does. To find it, fix the rival's move and compare your payoffs; repeat for each rival move. If the same option always wins, it is dominant.",
          ),
          t(
            "Un **equilibrio de Nash** (por el matemático John Nash) es una combinación de estrategias en la que **nadie gana cambiando solo**: cada jugador ya hace lo mejor posible dado lo que hace el otro. No significa que sea el mejor resultado para todos.",
            "A **Nash equilibrium** (after mathematician John Nash) is a combination of strategies in which **no one gains by changing alone**: each player is already doing the best possible given what the other does. It does not mean it is the best outcome for everyone.",
          ),
          t(
            "El **dilema del prisionero** lo muestra: dos empresas ganarían más si ambas mantuvieran precios altos, pero cada una tiene incentivo a bajar el suyo. Ambas bajan y terminan peor. Mini ejemplo: con precios altos ganan 10 y 10; si ambas bajan, 5 y 5. La desconfianza destruye ganancia para las dos.",
            "The **prisoner's dilemma** shows it: two firms would earn more if both kept high prices, but each has an incentive to lower its own. Both lower and end up worse. Mini example: with high prices they earn 10 and 10; if both lower, 5 and 5. Distrust destroys profit for both.",
          ),
        ],
        formulas: [
          {
            name: t("Ganancia conjunta que se pierde en el equilibrio", "Joint profit lost in the equilibrium"),
            expression: "Pérdida conjunta = (Pago 1 + Pago 2 en la casilla cooperativa) − (Pago 1 + Pago 2 en el equilibrio de Nash)",
            variables: [
              { symbol: "Pago 1, Pago 2", meaning: t("Lo que gana cada jugador en una casilla de la matriz (por ejemplo, en miles de pesos).", "What each player earns in a cell of the matrix (for example, in thousands of pesos).") },
              { symbol: "Casilla cooperativa", meaning: t("La combinación en la que ambos estarían mejor si confiaran uno en el otro.", "The combination in which both would be better off if they trusted each other.") },
              { symbol: "Equilibrio de Nash", meaning: t("La casilla donde nadie gana cambiando solo.", "The cell where no one gains by changing alone.") },
            ],
            steps: [
              t("Encuentra el equilibrio de Nash con las mejores respuestas (ver la lista de abajo).", "Find the Nash equilibrium with best responses (see the list below)."),
              t("Suma los dos pagos de la casilla del equilibrio.", "Add the two payoffs of the equilibrium cell."),
              t("Suma los dos pagos de la casilla cooperativa.", "Add the two payoffs of the cooperative cell."),
              t("Resta: cooperativa − equilibrio.", "Subtract: cooperative − equilibrium."),
            ],
            example: t(
              "Dos panaderías: si ambas hacen descuento ganan (20, 20), que es el equilibrio; si ambas mantienen precio ganarían (32, 32). Equilibrio: 20 + 20 = 40. Cooperativa: 32 + 32 = 64. Pérdida conjunta = 64 − 40 = **24 mil pesos**.",
              "Two bakeries: if both discount they earn (20, 20), which is the equilibrium; if both keep prices they would earn (32, 32). Equilibrium: 20 + 20 = 40. Cooperative: 32 + 32 = 64. Joint loss = 64 − 40 = **24 thousand pesos**."
            ),
            mistake: t(
              "Comparar la ganancia de un solo jugador cuando te piden la conjunta (la de ambos sumada).",
              "Comparing one player's profit when you are asked for the joint one (both added together)."
            ),
          },
        ],
        bullets: [
          t("Paso 1: fija la jugada del rival y subraya tu mejor respuesta.", "Step 1: fix the rival's move and underline your best response."),
          t("Paso 2: repite para cada jugada del rival y para el otro jugador.", "Step 2: repeat for each rival move and for the other player."),
          t("Paso 3: la casilla con ambos pagos subrayados es un equilibrio de Nash.", "Step 3: the cell with both payoffs underlined is a Nash equilibrium."),
        ],
      },
      {
        heading: t("Juegos repetidos, secuenciales y amenazas creíbles", "Repeated and sequential games and credible threats"),
        body: [
          t(
            "Cuando el juego se **repite** muchas veces, como dos tortillerías vecinas que compiten todos los días, la cooperación se vuelve más fácil: quien hoy traiciona puede ser castigado mañana. La **reputación** importa.",
            "When the game is **repeated** many times, like two neighboring tortilla shops competing every day, cooperation becomes easier: whoever betrays today can be punished tomorrow. **Reputation** matters.",
          ),
          t(
            "Ojo: que las empresas se pongan de acuerdo para fijar precios o repartirse clientes es una **colusión** y es **ilegal** en México y en muchos países; la autoridad de competencia económica la persigue. La teoría de juegos sirve para entender estas conductas, no para practicarlas.",
            "Careful: firms agreeing to fix prices or split customers is **collusion** and it is **illegal** in Mexico and many countries; the competition authority prosecutes it. Game theory helps understand this behavior, not practice it.",
          ),
          t(
            "En los juegos **secuenciales** se usa la **inducción hacia atrás**: se resuelve primero la última decisión y se avanza al inicio. Así se detectan **amenazas no creíbles**: si una cadena amenaza con una guerra de precios cuando llegue un competidor, pero al llegar le conviene más convivir, la amenaza no es creíble. Mini ejemplo: si pelear le deja 20 y convivir 30, convivirá.",
            "In **sequential** games we use **backward induction**: solve the last decision first and move back to the start. That reveals **non-credible threats**: if a chain threatens a price war when a competitor arrives, but once it arrives it is better off coexisting, the threat is not credible. Mini example: if fighting gives it 20 and coexisting 30, it will coexist.",
          ),
        ],
      },
    ],
    examples: [
      {
        title: t("Publicidad entre dos marcas", "Advertising between two brands"),
        problem: t(
          "Dos cerveceras artesanales deciden si hacen publicidad. Pagos en miles de pesos (A, B): ambas anuncian (40, 40); solo A anuncia (70, 20); solo B anuncia (20, 70); ninguna anuncia (60, 60). ¿Hay estrategia dominante? ¿Cuál es el equilibrio?",
          "Two craft breweries decide whether to advertise. Payoffs in thousands of pesos (A, B): both advertise (40, 40); only A advertises (70, 20); only B advertises (20, 70); neither advertises (60, 60). Is there a dominant strategy? What is the equilibrium?",
        ),
        steps: [
          t("Si B anuncia, A compara 40 (anunciar) contra 20 (no anunciar): anuncia.", "If B advertises, A compares 40 (advertise) with 20 (not advertise): advertises."),
          t("Si B no anuncia, A compara 70 contra 60: anuncia. Anunciar es dominante para A.", "If B does not advertise, A compares 70 with 60: advertises. Advertising is dominant for A."),
          t("El juego es simétrico: anunciar también es dominante para B.", "The game is symmetric: advertising is also dominant for B."),
          t("Equilibrio de Nash: ambas anuncian, con (40, 40).", "Nash equilibrium: both advertise, with (40, 40)."),
        ],
        result: t(
          "Es un dilema del prisionero: ambas estarían mejor sin anunciar (60, 60), pero cada una tiene incentivo a anunciar.",
          "It is a prisoner's dilemma: both would be better off not advertising (60, 60), but each has an incentive to advertise.",
        ),
      },
      {
        title: t("¿Entra la nueva cafetería?", "Does the new coffee shop enter?"),
        problem: t(
          "Una cadena nueva decide si abre en una plaza donde ya hay una cafetería. Si no entra: (0 para la nueva, 50 para la establecida). Si entra y la establecida pelea con precios: (−5, 20). Si entra y la establecida convive: (10, 30). La establecida amenaza con pelear. ¿Qué pasará?",
          "A new chain decides whether to open in a mall that already has a coffee shop. If it stays out: (0 for the newcomer, 50 for the incumbent). If it enters and the incumbent fights with prices: (−5, 20). If it enters and the incumbent accommodates: (10, 30). The incumbent threatens to fight. What will happen?",
        ),
        steps: [
          t("Última decisión: si la nueva entra, la establecida compara pelear (20) con convivir (30): convive.", "Last decision: if the newcomer enters, the incumbent compares fighting (20) with accommodating (30): accommodates."),
          t("La nueva anticipa eso: entrar le deja 10 y no entrar 0.", "The newcomer anticipates that: entering gives 10 and staying out 0."),
          t("La amenaza de pelear no es creíble porque a la establecida no le conviene cumplirla.", "The threat to fight is not credible because carrying it out does not pay for the incumbent."),
        ],
        result: t(
          "La nueva cadena entra y la establecida convive: (10, 30).",
          "The new chain enters and the incumbent accommodates: (10, 30).",
        ),
      },
    ],
    keyPoints: [
      t("Un juego tiene jugadores, estrategias y pagos; puede ser simultáneo o secuencial.", "A game has players, strategies and payoffs; it can be simultaneous or sequential."),
      t("Una estrategia dominante es la mejor sin importar lo que haga el rival.", "A dominant strategy is the best regardless of what the rival does."),
      t("En un equilibrio de Nash nadie gana cambiando solo, aunque no sea el mejor resultado conjunto.", "In a Nash equilibrium no one gains by changing alone, even if it is not the best joint outcome."),
      t("La repetición y la reputación facilitan la cooperación; la colusión de precios es ilegal.", "Repetition and reputation make cooperation easier; price collusion is illegal."),
      t("En juegos secuenciales, resuelve hacia atrás y descarta las amenazas no creíbles.", "In sequential games, solve backward and discard non-credible threats."),
    ],
    normativeNote: t(
      "Contenido educativo. La mención a la autoridad de competencia económica en México es general: su nombre, estructura y facultades han cambiado con reformas recientes. Verifica la legislación vigente (2026). Los pagos de los ejemplos son hipotéticos.",
      "Educational content. The reference to Mexico's competition authority is general: its name, structure and powers have changed with recent reforms. Verify current legislation (2026). The payoffs in the examples are hypothetical.",
    ),
    exerciseIds: ['ECO-16-E1', 'ECO-16-E2', 'ECO-16-E3', 'ECO-16-E4', 'ECO-16-E5', 'ECO-16-E6'],
  },

  // ───────────────────────────── ECO-17 ─────────────────────────────
  {
    id: 'ECO-17',
    level: 1,
    topicIds: ['ECO.17'],
    title: t("Economía del sector público", "Public sector economics"),
    summary: t(
      "La economía del sector público estudia cuándo y cómo debe intervenir el gobierno: corregir fallas de mercado como bienes públicos y externalidades, redistribuir, y evaluar si cada intervención vale lo que cuesta.",
      "Public sector economics studies when and how government should intervene: correcting market failures such as public goods and externalities, redistributing, and assessing whether each intervention is worth its cost.",
    ),
    minutes: 16,
    objectives: [
      t("Reconocer las fallas de mercado que justifican la intervención del gobierno.", "Recognize the market failures that justify government intervention."),
      t("Clasificar bienes en públicos, privados, comunes y de club según rivalidad y exclusión.", "Classify goods as public, private, common or club goods by rivalry and excludability."),
      t("Calcular un impuesto correctivo para una externalidad negativa.", "Compute a corrective tax for a negative externality."),
      t("Evaluar un proyecto público con la relación beneficio-costo.", "Evaluate a public project with the benefit-cost ratio."),
    ],
    theory: [
      {
        heading: t("¿Por qué interviene el gobierno? Las fallas de mercado", "Why does government intervene? Market failures"),
        body: [
          t(
            "Casi siempre, el mercado reparte bien los recursos: quien quiere tacos los compra y quien los vende gana. Pero hay casos en los que el mercado, solo, produce de más, de menos o nada. A esos casos se les llama **fallas de mercado**, y son la razón principal para que intervenga el **sector público** (gobierno y sus organismos).",
            "Most of the time, the market allocates resources well: whoever wants tacos buys them and whoever sells them earns. But there are cases where the market, on its own, produces too much, too little or nothing. Those cases are called **market failures**, and they are the main reason for the **public sector** (government and its agencies) to intervene.",
          ),
          t(
            "Las principales son: **bienes públicos** (nadie los produciría por su cuenta), **externalidades** (efectos sobre terceros que nadie paga), **información asimétrica** (una parte sabe mucho más que la otra, como el vendedor de un auto usado) y **poder de mercado** (un monopolio que cobra de más).",
            "The main ones are: **public goods** (no one would produce them on their own), **externalities** (effects on third parties that no one pays for), **asymmetric information** (one side knows much more than the other, like the seller of a used car) and **market power** (a monopoly that overcharges).",
          ),
          t(
            "El gobierno también interviene por **equidad**: para redistribuir ingresos con programas sociales o impuestos progresivos. Mini ejemplo: el mercado no garantiza que una familia de bajos ingresos pague la escuela; la educación pública busca resolverlo.",
            "Government also intervenes for **equity**: to redistribute income with social programs or progressive taxes. Mini example: the market does not guarantee that a low-income family can pay for school; public education seeks to solve that.",
          ),
        ],
        bullets: [
          t("Bienes públicos: alumbrado, defensa.", "Public goods: street lighting, defense."),
          t("Externalidades: contaminación, vacunación.", "Externalities: pollution, vaccination."),
          t("Información asimétrica: seguros, autos usados, medicinas.", "Asymmetric information: insurance, used cars, medicines."),
          t("Poder de mercado: monopolios y colusiones.", "Market power: monopolies and collusion."),
        ],
      },
      {
        heading: t("Bienes públicos y externalidades", "Public goods and externalities"),
        body: [
          t(
            "Los bienes se clasifican con dos preguntas. ¿Es **rival**? (si yo lo uso, ¿tú ya no puedes?). ¿Es **excluible**? (¿se puede impedir que lo use quien no paga?). Un **bien privado** es rival y excluible (una torta). Un **bien público** no es ni rival ni excluible (el alumbrado de la calle). Un **recurso común** es rival pero no excluible (los peces en mar abierto). Un **bien club** es excluible pero no rival (la televisión de paga).",
            "Goods are classified with two questions. Is it **rival**? (if I use it, can you no longer use it?). Is it **excludable**? (can you prevent non-payers from using it?). A **private good** is rival and excludable (a sandwich). A **public good** is neither rival nor excludable (street lighting). A **common resource** is rival but not excludable (fish in the open sea). A **club good** is excludable but not rival (pay TV).",
          ),
          t(
            "Con los bienes públicos aparece el **polizón** (*free rider*): si igual te alumbran la calle pagues o no, tienes incentivo a no cooperar. Por eso se financian con impuestos.",
            "Public goods bring the **free rider**: if your street gets lit whether you pay or not, you have an incentive not to contribute. That is why they are financed with taxes.",
          ),
          t(
            "Una **externalidad negativa** es un costo que cae sobre terceros: una fábrica que contamina el río no paga el daño, así que produce **más** de lo socialmente eficiente. Se corrige con un **impuesto pigouviano** igual al daño por unidad. Una **externalidad positiva** (vacunarte protege a otros) lleva a producir **menos** de lo ideal y se corrige con subsidios. Mini ejemplo: si cada tonelada causa $250 de daño, el impuesto correctivo es $250 por tonelada.",
            "A **negative externality** is a cost that falls on third parties: a factory that pollutes the river does not pay for the damage, so it produces **more** than is socially efficient. It is corrected with a **Pigouvian tax** equal to the damage per unit. A **positive externality** (getting vaccinated protects others) leads to producing **less** than ideal and is corrected with subsidies. Mini example: if each ton causes $250 of damage, the corrective tax is $250 per ton.",
          ),
        ],
        formulas: [
          {
            name: t("Costo social e impuesto pigouviano", "Social cost and Pigouvian tax"),
            expression: "Costo social = Costo privado + Costo externo;   Impuesto pigouviano = Costo externo por unidad",
            variables: [
              { symbol: "Costo privado", meaning: t("Lo que le cuesta a la empresa producir una unidad, en pesos.", "What it costs the company to produce one unit, in pesos.") },
              { symbol: "Costo externo", meaning: t("Daño por unidad que pagan otros (vecinos, salud, limpieza), en pesos.", "Damage per unit paid by others (neighbors, health, cleaning), in pesos.") },
              { symbol: "Costo social", meaning: t("Costo total para la sociedad por unidad, en pesos.", "Total cost to society per unit, in pesos.") },
              { symbol: "Impuesto pigouviano", meaning: t("Impuesto por unidad que hace que la empresa pague el daño que causa.", "Per-unit tax that makes the company pay for the damage it causes.") },
            ],
            steps: [
              t("Identifica el costo privado y el daño externo, ambos por unidad.", "Identify the private cost and the external damage, both per unit."),
              t("Súmalos para obtener el costo social.", "Add them to get the social cost."),
              t("El impuesto correctivo es igual solo al daño externo, no al costo social completo.", "The corrective tax equals only the external damage, not the full social cost."),
            ],
            example: t(
              "Una curtiduría gasta $800 por lote y contamina el agua con un daño de $150 por lote (hipotético). Costo social = 800 + 150 = **$950**. Impuesto pigouviano = **$150 por lote**.",
              "A tannery spends $800 per batch and pollutes the water with $150 of damage per batch (hypothetical). Social cost = 800 + 150 = **$950**. Pigouvian tax = **$150 per batch**."
            ),
            mistake: t(
              "Poner como impuesto el costo social completo: cobrarías dos veces el costo privado.",
              "Setting the tax equal to the full social cost: you would charge the private cost twice."
            ),
          },
        ],
      },
      {
        heading: t("Fallas de gobierno y evaluación de proyectos", "Government failures and project evaluation"),
        body: [
          t(
            "El gobierno también se equivoca. Las **fallas de gobierno** incluyen burocracia lenta, corrupción, decisiones por presiones políticas o programas que cuestan más de lo que logran. Que exista una falla de mercado no garantiza que la intervención la arregle.",
            "Government also makes mistakes. **Government failures** include slow bureaucracy, corruption, decisions driven by political pressure or programs that cost more than they achieve. The existence of a market failure does not guarantee that intervention will fix it.",
          ),
          t(
            "Por eso los proyectos públicos se evalúan con el **análisis costo-beneficio**: se suman todos los beneficios para la sociedad (tiempo ahorrado, accidentes evitados, salud) y todos los costos, expresados en valor de hoy. Si la **relación beneficio-costo** es mayor que 1, el proyecto crea más valor del que usa.",
            "That is why public projects are evaluated with **cost-benefit analysis**: add up all benefits to society (time saved, accidents avoided, health) and all costs, expressed in today's value. If the **benefit-cost ratio** is greater than 1, the project creates more value than it uses.",
          ),
          t(
            "También se cuidan dos metas que a veces chocan: **eficiencia** (aprovechar al máximo los recursos) y **equidad** (repartir de forma justa). Mini ejemplo hipotético: un puente peatonal cuesta $4 millones y genera beneficios por $6 millones; la relación es 1.5 y conviene.",
            "Two goals that sometimes clash are also considered: **efficiency** (making the most of resources) and **equity** (distributing fairly). Hypothetical mini example: a pedestrian bridge costs $4 million and generates $6 million in benefits; the ratio is 1.5 and it is worthwhile.",
          ),
        ],
        formulas: [
          {
            name: t("Relación beneficio-costo (B/C)", "Benefit-cost ratio (B/C)"),
            expression: "Relación B/C = Valor presente de beneficios ÷ Valor presente de costos",
            variables: [
              { symbol: "Valor presente de beneficios", meaning: t("Todos los beneficios para la sociedad expresados en pesos de hoy.", "All benefits to society expressed in today's pesos.") },
              { symbol: "Valor presente de costos", meaning: t("Todos los costos del proyecto (construcción y operación) en pesos de hoy.", "All project costs (construction and operation) in today's pesos.") },
            ],
            steps: [
              t("Suma los beneficios y los costos, ya en valor de hoy.", "Add up benefits and costs, already in today's value."),
              t("Divide beneficios entre costos (los beneficios van arriba).", "Divide benefits by costs (benefits go on top)."),
              t("Compara con 1: mayor que 1 conviene; menor que 1 no.", "Compare with 1: greater than 1 is worthwhile; less than 1 is not."),
            ],
            example: t(
              "Un parque cuesta $50 millones y da beneficios por $45 millones (valor presente, hipotético). B/C = 45 ÷ 50 = **0.90**: por cada peso invertido se recuperan 90 centavos de beneficio social, así que no conviene.",
              "A park costs $50 million and yields $45 million in benefits (present value, hypothetical). B/C = 45 ÷ 50 = **0.90**: each peso invested returns 90 cents of social benefit, so it is not worthwhile."
            ),
            mistake: t(
              "Dividir al revés (costos ÷ beneficios) y llegar a la conclusión contraria.",
              "Dividing the other way round (costs ÷ benefits) and reaching the opposite conclusion."
            ),
          },
        ],
      },
    ],
    examples: [
      {
        title: t("Impuesto correctivo a una cementera", "Corrective tax on a cement plant"),
        problem: t(
          "Producir una tonelada de cemento le cuesta a la empresa $1,000. Su polvo causa a los vecinos daños de salud y limpieza estimados en $250 por tonelada (cifras hipotéticas). ¿Cuál es el costo social y qué impuesto pigouviano corrige la externalidad?",
          "Producing a ton of cement costs the company $1,000. Its dust causes neighbors health and cleaning damages estimated at $250 per ton (hypothetical figures). What is the social cost and what Pigouvian tax corrects the externality?",
        ),
        steps: [
          t("Costo privado: $1,000 por tonelada.", "Private cost: $1,000 per ton."),
          t("Costo externo: $250 por tonelada.", "External cost: $250 per ton."),
          t("Costo social: 1,000 + 250 = $1,250 por tonelada.", "Social cost: 1,000 + 250 = $1,250 per ton."),
          t("Impuesto pigouviano = daño externo = $250 por tonelada.", "Pigouvian tax = external damage = $250 per ton."),
        ],
        result: t(
          "Con el impuesto, la empresa enfrenta el costo social completo ($1,250) y reduce su producción al nivel eficiente.",
          "With the tax, the company faces the full social cost ($1,250) and cuts output to the efficient level.",
        ),
      },
      {
        title: t("¿Conviene construir la clínica?", "Is it worth building the clinic?"),
        problem: t(
          "Un municipio evalúa una clínica. En valor presente, los costos (construcción y operación) suman $80 millones y los beneficios (consultas, traslados evitados, días de trabajo no perdidos) suman $100 millones (cifras hipotéticas). Calcula el beneficio neto y la relación B/C.",
          "A municipality evaluates a clinic. In present value, costs (construction and operation) add up to $80 million and benefits (consultations, trips avoided, workdays not lost) add up to $100 million (hypothetical figures). Compute the net benefit and the B/C ratio.",
        ),
        steps: [
          t("Beneficio neto: 100 − 80 = $20 millones.", "Net benefit: 100 − 80 = $20 million."),
          t("Relación B/C: 100 ÷ 80 = 1.25.", "B/C ratio: 100 ÷ 80 = 1.25."),
          t("Como 1.25 > 1, cada peso invertido genera 1.25 pesos de beneficio social.", "Since 1.25 > 1, each peso invested generates 1.25 pesos of social benefit."),
        ],
        result: t(
          "El proyecto es conveniente; si hay varios proyectos y poco presupuesto, se comparan sus relaciones B/C.",
          "The project is worthwhile; if there are several projects and little budget, their B/C ratios are compared.",
        ),
      },
    ],
    keyPoints: [
      t("Las fallas de mercado (bienes públicos, externalidades, información asimétrica y poder de mercado) justifican intervenir.", "Market failures (public goods, externalities, asymmetric information and market power) justify intervention."),
      t("Un bien público no es rival ni excluible; por eso aparece el polizón y se financia con impuestos.", "A public good is neither rival nor excludable; that is why free riders appear and it is financed with taxes."),
      t("Con externalidad negativa se produce de más; un impuesto igual al daño por unidad lo corrige.", "With a negative externality too much is produced; a tax equal to the damage per unit corrects it."),
      t("También existen fallas de gobierno: intervenir no siempre mejora.", "Government failures also exist: intervening does not always improve things."),
      t("Un proyecto público conviene si su relación beneficio-costo es mayor que 1.", "A public project is worthwhile if its benefit-cost ratio is greater than 1."),
    ],
    exerciseIds: ['ECO-17-E1', 'ECO-17-E2', 'ECO-17-E3', 'ECO-17-E4', 'ECO-17-E5', 'ECO-17-E6'],
  },

  // ───────────────────────────── ECO-18 ─────────────────────────────
  {
    id: 'ECO-18',
    level: 1,
    topicIds: ['ECO.18'],
    title: t("Finanzas públicas y presupuesto gubernamental", "Public finance and government budget"),
    summary: t(
      "Las finanzas públicas estudian de dónde obtiene dinero el gobierno, en qué lo gasta y cómo se aprueba y vigila el presupuesto; con los balances se mide si gasta más de lo que ingresa.",
      "Public finance studies where government gets money, what it spends it on and how the budget is approved and overseen; balances measure whether it spends more than it takes in.",
    ),
    minutes: 17,
    objectives: [
      t("Distinguir ingresos tributarios y no tributarios, y gasto programable y no programable.", "Distinguish tax and non-tax revenue, and programmable and non-programmable spending."),
      t("Describir el ciclo del presupuesto federal en México y quién aprueba cada parte.", "Describe Mexico's federal budget cycle and who approves each part."),
      t("Calcular el balance presupuestario y el balance primario.", "Compute the budget balance and the primary balance."),
      t("Medir el avance en el ejercicio de un presupuesto.", "Measure progress in executing a budget."),
    ],
    theory: [
      {
        heading: t("Ingresos y gastos del gobierno", "Government revenue and spending"),
        body: [
          t(
            "Las **finanzas públicas** son como las finanzas de tu casa, pero del gobierno: cuánto entra, cuánto sale y cómo se cubre la diferencia. Los **ingresos públicos** se dividen en **tributarios** (los impuestos, como ISR, IVA e IEPS) y **no tributarios** (derechos, productos, aprovechamientos y, en México, una parte importante de ingresos petroleros).",
            "**Public finance** is like your household finances, but for government: how much comes in, how much goes out and how the gap is covered. **Public revenue** is divided into **tax revenue** (taxes such as income tax, VAT and IEPS) and **non-tax revenue** (fees, products, other charges and, in Mexico, a significant share of oil revenue).",
          ),
          t(
            "El **gasto público** se clasifica de varias formas. La más usada en México separa el **gasto programable** (el que se destina a programas y servicios: sueldos de médicos y maestros, hospitales, carreteras, apoyos sociales) del **gasto no programable** (el que no financia un programa concreto: el **costo financiero** o intereses de la deuda, las **participaciones** que la Federación entrega a estados y municipios, y los adeudos de años anteriores).",
            "**Public spending** is classified in several ways. The most used in Mexico separates **programmable spending** (spent on programs and services: salaries of doctors and teachers, hospitals, roads, social support) from **non-programmable spending** (which does not fund a specific program: the **financial cost** or interest on debt, the **revenue shares** the Federation hands to states and municipalities, and debts from previous years).",
          ),
          t(
            "Otra clasificación es la **económica**: **gasto corriente** (lo que se consume en el año, como nómina, papelería o luz) y **gasto de capital** o inversión (lo que deja un activo duradero, como una presa o equipo para un hospital nuevo). Mini ejemplo: pagar al personal de un hospital es corriente; construir el hospital es de capital.",
            "Another classification is the **economic** one: **current spending** (consumed during the year, such as payroll, stationery or electricity) and **capital spending** or investment (which leaves a durable asset, such as a dam or equipment for a new hospital). Mini example: paying a hospital's staff is current; building the hospital is capital.",
          ),
        ],
        bullets: [
          t("Clasificación administrativa: quién gasta (secretaría o dependencia).", "Administrative classification: who spends (ministry or agency)."),
          t("Clasificación funcional: para qué se gasta (salud, educación, seguridad).", "Functional classification: what it is spent on (health, education, security)."),
          t("Clasificación económica: corriente o de capital.", "Economic classification: current or capital."),
        ],
      },
      {
        heading: t("El ciclo del presupuesto en México", "The budget cycle in Mexico"),
        body: [
          t(
            "Cada año, la **Secretaría de Hacienda y Crédito Público (SHCP)** prepara el **Paquete Económico** y el Ejecutivo lo envía al Congreso a inicios de septiembre. Incluye los **Criterios Generales de Política Económica** (los supuestos: crecimiento, inflación, petróleo), la iniciativa de **Ley de Ingresos de la Federación (LIF)** y el proyecto de **Presupuesto de Egresos de la Federación (PEF)**.",
            "Each year the **Ministry of Finance and Public Credit (SHCP)** prepares the **Economic Package** and the Executive sends it to Congress in early September. It includes the **General Economic Policy Criteria** (the assumptions: growth, inflation, oil), the **Federal Revenue Law (LIF)** bill and the draft **Federal Expenditure Budget (PEF)**.",
          ),
          t(
            "La **Ley de Ingresos** la aprueban **las dos cámaras** (Diputados y Senado). El **Presupuesto de Egresos** lo aprueba **solo la Cámara de Diputados**, normalmente a más tardar a mediados de noviembre. Primero se decide cuánto se espera recaudar y después cómo se gasta.",
            "The **Revenue Law** is approved by **both chambers** (Deputies and Senate). The **Expenditure Budget** is approved **only by the Chamber of Deputies**, usually by mid-November at the latest. First it is decided how much is expected to be collected and then how it is spent.",
          ),
          t(
            "Durante el año, las dependencias **ejercen** el presupuesto y Hacienda informa avances en reportes periódicos. Al cierre se presenta la **Cuenta Pública**, que revisa la **Auditoría Superior de la Federación (ASF)**. Mini ejemplo hipotético: si a un programa le aprobaron $2,000 millones y gastó $1,700 millones, su ejercicio fue de 85%.",
            "During the year, agencies **execute** the budget and the Finance Ministry reports progress periodically. At year-end the **Public Account** is presented and reviewed by the **Superior Audit Office of the Federation (ASF)**. Hypothetical mini example: if a program was approved $2,000 million and spent $1,700 million, its execution was 85%.",
          ),
        ],
        formulas: [
          {
            name: t("Avance del ejercicio del presupuesto", "Budget execution rate"),
            expression: "Avance del ejercicio (%) = Gasto ejercido ÷ Presupuesto aprobado × 100",
            variables: [
              { symbol: "Gasto ejercido", meaning: t("Lo que realmente se gastó, en pesos.", "What was actually spent, in pesos.") },
              { symbol: "Presupuesto aprobado", meaning: t("Lo que se autorizó gastar para el año, en pesos.", "What was authorized to be spent for the year, in pesos.") },
            ],
            steps: [
              t("Divide el gasto ejercido entre el presupuesto aprobado.", "Divide spending executed by the approved budget."),
              t("Multiplica por 100 para obtener el %.", "Multiply by 100 to get the %."),
              t("Si quieres el subejercicio (lo no gastado), resta el resultado a 100 %.", "If you want the underspending (what was not spent), subtract the result from 100 %."),
            ],
            example: t(
              "A un programa de vivienda le aprobaron $900 millones y ejerció $774 millones (hipotético). 774 ÷ 900 = 0.86; × 100 = **86 %**. Subejercicio = 100 % − 86 % = 14 %.",
              "A housing program was approved $900 million and executed $774 million (hypothetical). 774 ÷ 900 = 0.86; × 100 = **86 %**. Underspending = 100 % − 86 % = 14 %."
            ),
            mistake: t(
              "Responder el porcentaje no gastado cuando piden el ejercido, o dividir al revés (aprobado ÷ ejercido).",
              "Giving the unspent percentage when asked for the executed one, or dividing the other way round (approved ÷ executed)."
            ),
          },
        ],
      },
      {
        heading: t("Balances: ¿gasta el gobierno más de lo que ingresa?", "Balances: does government spend more than it takes in?"),
        body: [
          t(
            "El **balance presupuestario** es ingresos menos gasto total. Si es negativo hay **déficit** y el gobierno debe pedir prestado; si es positivo hay **superávit**.",
            "The **budget balance** is revenue minus total spending. If it is negative there is a **deficit** and government must borrow; if it is positive there is a **surplus**.",
          ),
          t(
            "El **balance primario** quita del gasto el **costo financiero** (los intereses de la deuda). Responde: sin contar los intereses de deudas pasadas, ¿alcanza lo que entra para lo que se gasta hoy? Un balance primario positivo ayuda a que la deuda no crezca sin control.",
            "The **primary balance** removes the **financial cost** (interest on debt) from spending. It answers: not counting interest on past debts, is what comes in enough for what is spent today? A positive primary balance helps keep debt from growing out of control.",
          ),
          t(
            "En México también se publican los **Requerimientos Financieros del Sector Público (RFSP)**, la medida más amplia del déficit porque incluye actividades que el balance tradicional deja fuera. Mini ejemplo hipotético: ingresos 6,500, gasto 7,100 con 700 de intereses (miles de millones): balance −600, balance primario +100.",
            "Mexico also publishes the **Public Sector Borrowing Requirements (RFSP)**, the broadest measure of the deficit because it includes activities the traditional balance leaves out. Hypothetical mini example: revenue 6,500, spending 7,100 with 700 of interest (billions): balance −600, primary balance +100.",
          ),
        ],
        formulas: [
          {
            name: t("Balance presupuestario y balance primario", "Budget balance and primary balance"),
            expression: "Balance presupuestario = Ingresos − Gasto total;   Balance primario = Ingresos − (Gasto total − Costo financiero)",
            variables: [
              { symbol: "Ingresos", meaning: t("Todo lo que recauda el gobierno en el año (impuestos y otros), en pesos.", "Everything government collects in the year (taxes and others), in pesos.") },
              { symbol: "Gasto total", meaning: t("Todo lo que gasta, incluidos los intereses de la deuda, en pesos.", "Everything it spends, including interest on debt, in pesos.") },
              { symbol: "Costo financiero", meaning: t("Intereses que se pagan por deudas pasadas, en pesos.", "Interest paid on past debts, in pesos.") },
            ],
            steps: [
              t("Balance presupuestario: resta el gasto total a los ingresos.", "Budget balance: subtract total spending from revenue."),
              t("Quita los intereses al gasto total: gasto sin costo financiero.", "Remove interest from total spending: spending without financial cost."),
              t("Balance primario: resta ese gasto sin intereses a los ingresos. Negativo = déficit; positivo = superávit.", "Primary balance: subtract that spending without interest from revenue. Negative = deficit; positive = surplus."),
            ],
            example: t(
              "Hipotético (miles de millones): ingresos 5,200; gasto total 5,900, con 600 de intereses. Balance = 5,200 − 5,900 = **−700**. Gasto sin intereses = 5,900 − 600 = 5,300. Balance primario = 5,200 − 5,300 = **−100**.",
              "Hypothetical (billions): revenue 5,200; total spending 5,900, with 600 of interest. Balance = 5,200 − 5,900 = **−700**. Spending without interest = 5,900 − 600 = 5,300. Primary balance = 5,200 − 5,300 = **−100**."
            ),
            interpret: t(
              "Aquí hasta el balance primario es negativo: ni sin contar intereses alcanza el ingreso para el gasto de hoy, y la deuda tenderá a crecer.",
              "Here even the primary balance is negative: even without counting interest, revenue does not cover today's spending, and debt will tend to grow."
            ),
            mistake: t(
              "Sumar los intereses al gasto en lugar de restarlos al calcular el balance primario.",
              "Adding interest to spending instead of subtracting it when computing the primary balance."
            ),
          },
        ],
      },
    ],
    examples: [
      {
        title: t("Balance presupuestario y primario", "Budget and primary balance"),
        problem: t(
          "Un gobierno estatal hipotético tiene ingresos por 95,000 millones y gasta 101,000 millones en total, de los cuales 8,000 millones son intereses de su deuda. Calcula ambos balances.",
          "A hypothetical state government has revenue of 95,000 million and spends 101,000 million in total, of which 8,000 million is interest on its debt. Compute both balances.",
        ),
        steps: [
          t("Balance presupuestario: 95,000 − 101,000 = −6,000 millones (déficit).", "Budget balance: 95,000 − 101,000 = −6,000 million (deficit)."),
          t("Gasto sin intereses: 101,000 − 8,000 = 93,000 millones.", "Spending without interest: 101,000 − 8,000 = 93,000 million."),
          t("Balance primario: 95,000 − 93,000 = +2,000 millones (superávit primario).", "Primary balance: 95,000 − 93,000 = +2,000 million (primary surplus)."),
        ],
        result: t(
          "Hay déficit total, pero superávit primario: el faltante se debe a los intereses de deudas anteriores, no al gasto corriente de hoy.",
          "There is an overall deficit but a primary surplus: the shortfall is due to interest on previous debts, not to today's spending.",
        ),
      },
      {
        title: t("Clasificar el gasto de un hospital", "Classifying a hospital's spending"),
        problem: t(
          "Una dependencia de salud reporta: construcción de un hospital $500 millones; sueldos del personal $300 millones; medicinas $150 millones; intereses de un crédito usado años atrás $50 millones. ¿Cuánto es gasto de capital y cuánto gasto corriente dentro de lo programable?",
          "A health agency reports: construction of a hospital $500 million; staff salaries $300 million; medicines $150 million; interest on a loan used years ago $50 million. How much is capital spending and how much current spending within programmable spending?",
        ),
        steps: [
          t("Los intereses son costo financiero: gasto no programable ($50 millones), fuera del cálculo.", "Interest is financial cost: non-programmable spending ($50 million), outside the calculation."),
          t("Capital: la construcción deja un activo duradero: $500 millones.", "Capital: construction leaves a durable asset: $500 million."),
          t("Corriente: sueldos + medicinas = 300 + 150 = $450 millones.", "Current: salaries + medicines = 300 + 150 = $450 million."),
        ],
        result: t(
          "Programable: $950 millones ($500 de capital y $450 corrientes); no programable: $50 millones de intereses.",
          "Programmable: $950 million ($500 capital and $450 current); non-programmable: $50 million in interest.",
        ),
      },
    ],
    keyPoints: [
      t("Los ingresos públicos son tributarios (impuestos) y no tributarios (derechos, productos, aprovechamientos, petroleros).", "Public revenue is tax revenue and non-tax revenue (fees, products, other charges, oil)."),
      t("El gasto no programable incluye intereses de la deuda y participaciones a estados y municipios.", "Non-programmable spending includes debt interest and revenue shares to states and municipalities."),
      t("La Ley de Ingresos la aprueban ambas cámaras; el Presupuesto de Egresos, solo Diputados.", "The Revenue Law is approved by both chambers; the Expenditure Budget, only by the Deputies."),
      t("Balance primario = ingresos − gasto sin intereses.", "Primary balance = revenue − spending excluding interest."),
      t("La Cuenta Pública rinde cuentas al cierre y la revisa la ASF.", "The Public Account reports at year-end and is reviewed by the ASF."),
    ],
    normativeNote: t(
      "Contenido educativo basado en el marco general de la Constitución y de la legislación federal de presupuesto y responsabilidad hacendaria de México. Los plazos, clasificaciones y nombres pueden cambiar y hay excepciones (por ejemplo, en años de cambio de gobierno). Las cifras son hipotéticas. Verifica la versión vigente (2026).",
      "Educational content based on the general framework of Mexico's Constitution and federal budget and fiscal responsibility legislation. Deadlines, classifications and names may change and there are exceptions (for example, in years with a change of government). Figures are hypothetical. Verify the current version (2026).",
    ),
    exerciseIds: ['ECO-18-E1', 'ECO-18-E2', 'ECO-18-E3', 'ECO-18-E4', 'ECO-18-E5', 'ECO-18-E6'],
  },
]

export const exercises: Exercise[] = [
  // ═════════════════════════ ECO-13 ═════════════════════════
  {
    id: 'ECO-13-E1',
    level: 1,
    module: 'ECO-13',
    kind: 'mcq',
    flavor: 'concept',
    prompt: t(
      "Según la idea de ventaja comparativa, ¿en qué debe especializarse un país?",
      "According to the idea of comparative advantage, what should a country specialize in?",
    ),
    options: [
      { id: 'ECO-13-E1-a', text: t("En lo que produce con el menor costo de oportunidad", "In what it produces with the lowest opportunity cost") },
      { id: 'ECO-13-E1-b', text: t("Solo en lo que produce con menos trabajadores que cualquier otro país", "Only in what it produces with fewer workers than any other country") },
      { id: 'ECO-13-E1-c', text: t("En todo lo que consume, para no depender de nadie", "In everything it consumes, so as not to depend on anyone") },
      { id: 'ECO-13-E1-d', text: t("En lo que tenga el precio de venta más alto en el mundo", "In whatever has the highest selling price in the world") },
    ],
    correctOptionId: 'ECO-13-E1-a',
    explanation: t(
      "La ventaja comparativa compara lo que se sacrifica: conviene producir lo que te cuesta renunciar a menos. El error común es confundirla con la ventaja absoluta (opción b): un país puede ser menos productivo en todo y aun así ganar con el comercio.",
      "Comparative advantage compares what is given up: it pays to produce what makes you give up less. The common mistake is confusing it with absolute advantage (option b): a country can be less productive at everything and still gain from trade.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'international-trade',
  },
  {
    id: 'ECO-13-E2',
    level: 1,
    module: 'ECO-13',
    kind: 'numeric',
    flavor: 'case',
    context: t(
      "En un día de trabajo, un obrero en México produce 12 pares de zapatos o 4 computadoras. En Corea, un obrero produce 6 pares de zapatos o 6 computadoras.",
      "In one workday, a worker in Mexico produces 12 pairs of shoes or 4 computers. In Korea, a worker produces 6 pairs of shoes or 6 computers.",
    ),
    prompt: t(
      "¿Cuál es el costo de oportunidad de producir 1 computadora en México, medido en pares de zapatos?",
      "What is the opportunity cost of producing 1 computer in Mexico, measured in pairs of shoes?",
    ),
    answer: 3,
    unit: 'units',
    decimals: 0,
    tolerance: { abs: 0.01 },
    explanation: t(
      "En México, cada computadora obliga a dejar de hacer 12 ÷ 4 = 3 pares de zapatos. En Corea cuesta solo 1 par, así que Corea tiene ventaja comparativa en computadoras y México en zapatos. Error común: dividir al revés (4 ÷ 12 = 0.33), que es el costo de un par de zapatos en computadoras.",
      "In Mexico, each computer means giving up 12 ÷ 4 = 3 pairs of shoes. In Korea it costs only 1 pair, so Korea has a comparative advantage in computers and Mexico in shoes. Common mistake: dividing the other way (4 ÷ 12 = 0.33), which is the cost of a pair of shoes in computers.",
    ),
    difficulty: 2,
    points: 15,
    competency: 'international-trade',
  },
  {
    id: 'ECO-13-E3',
    level: 1,
    module: 'ECO-13',
    kind: 'fields',
    flavor: 'case',
    context: t(
      "Una tienda de deportes importa bicicletas con un valor en aduana de $3,500 cada una. Supón un arancel hipotético de 15%.",
      "A sporting goods store imports bicycles with a customs value of $3,500 each. Assume a hypothetical 15% tariff.",
    ),
    prompt: t(
      "Calcula el arancel por bicicleta y el costo total de cada bicicleta con arancel.",
      "Compute the tariff per bicycle and the total cost of each bicycle with the tariff.",
    ),
    fields: [
      { id: 'f1', label: t("Arancel por bicicleta ($)", "Tariff per bicycle ($)"), answer: 525, unit: 'MXN', tolerance: { abs: 0.5 } },
      { id: 'f2', label: t("Costo total con arancel ($)", "Total cost with tariff ($)"), answer: 4025, unit: 'MXN', tolerance: { abs: 0.5 } },
    ],
    explanation: t(
      "Arancel: 3,500 × 15% = $525. Costo total: 3,500 + 525 = $4,025 (o 3,500 × 1.15). Error común: escribir solo el arancel como costo total u olvidar sumarlo al valor de la mercancía.",
      "Tariff: 3,500 × 15% = $525. Total cost: 3,500 + 525 = $4,025 (or 3,500 × 1.15). Common mistake: writing only the tariff as the total cost or forgetting to add it to the value of the goods.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'international-trade',
  },
  {
    id: 'ECO-13-E4',
    level: 1,
    module: 'ECO-13',
    kind: 'classify',
    flavor: 'concept',
    prompt: t(
      "Clasifica cada operación de México con el exterior según la cuenta de la balanza de pagos donde se registra.",
      "Classify each of Mexico's transactions with the rest of the world by the balance of payments account where it is recorded.",
    ),
    categories: [
      { id: 'ECO-13-E4-c1', label: t("Cuenta corriente", "Current account") },
      { id: 'ECO-13-E4-c2', label: t("Cuenta financiera", "Financial account") },
    ],
    items: [
      { id: 'ECO-13-E4-i1', label: t("Una empresa michoacana exporta aguacate a Estados Unidos", "A Michoacán company exports avocados to the United States"), correctCategoryId: 'ECO-13-E4-c1' },
      { id: 'ECO-13-E4-i2', label: t("Una familia de Zacatecas recibe remesas de un hijo que trabaja en Texas", "A family in Zacatecas receives remittances from a son working in Texas"), correctCategoryId: 'ECO-13-E4-c1' },
      { id: 'ECO-13-E4-i3', label: t("Turistas canadienses pagan hotel y comidas en Cancún", "Canadian tourists pay for hotel and meals in Cancún"), correctCategoryId: 'ECO-13-E4-c1' },
      { id: 'ECO-13-E4-i4', label: t("Una automotriz alemana construye una nueva planta en Guanajuato", "A German automaker builds a new plant in Guanajuato"), correctCategoryId: 'ECO-13-E4-c2' },
      { id: 'ECO-13-E4-i5', label: t("Un fondo extranjero compra bonos del gobierno mexicano", "A foreign fund buys Mexican government bonds"), correctCategoryId: 'ECO-13-E4-c2' },
      { id: 'ECO-13-E4-i6', label: t("Una empresa mexicana paga intereses a un banco extranjero que le prestó", "A Mexican company pays interest to a foreign bank that lent to it"), correctCategoryId: 'ECO-13-E4-c1' },
    ],
    explanation: t(
      "Bienes, servicios como el turismo, remesas e intereses van a la cuenta corriente. La compra de activos, como una planta (inversión extranjera directa) o bonos, va a la cuenta financiera. Error común: poner los intereses en la cuenta financiera; el préstamo sí es financiero, pero los intereses que genera son un ingreso o pago de la cuenta corriente.",
      "Goods, services such as tourism, remittances and interest go to the current account. Purchases of assets, such as a plant (foreign direct investment) or bonds, go to the financial account. Common mistake: placing interest in the financial account; the loan itself is financial, but the interest it generates is income or payment in the current account.",
    ),
    difficulty: 2,
    points: 15,
    competency: 'international-trade',
  },
  {
    id: 'ECO-13-E5',
    level: 1,
    module: 'ECO-13',
    kind: 'truefalse',
    flavor: 'concept',
    prompt: t(
      "Un arancel a la importación de acero suele encarecer los productos de las empresas mexicanas que usan ese acero como insumo, como fabricantes de refrigeradores.",
      "A tariff on steel imports usually makes products more expensive for Mexican companies that use that steel as an input, such as refrigerator makers.",
    ),
    answer: true,
    explanation: t(
      "Verdadero. El arancel sube el costo del acero importado y permite que el acero nacional también se venda más caro; las empresas que lo usan pagan más y suelen trasladarlo a sus precios. Error común: pensar que un arancel solo afecta al país que exporta.",
      "True. The tariff raises the cost of imported steel and allows domestic steel to sell at a higher price too; companies using it pay more and tend to pass it on to their prices. Common mistake: thinking a tariff only affects the exporting country.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'international-trade',
  },
  {
    id: 'ECO-13-E6',
    level: 1,
    module: 'ECO-13',
    kind: 'multi',
    flavor: 'case',
    context: t(
      "Un gobierno quiere reducir la entrada de juguetes importados para proteger a los fabricantes locales.",
      "A government wants to reduce imports of toys to protect local manufacturers.",
    ),
    prompt: t(
      "¿Cuáles de estas medidas son barreras al comercio exterior? Selecciona todas las que apliquen.",
      "Which of these measures are barriers to foreign trade? Select all that apply.",
    ),
    options: [
      { id: 'ECO-13-E6-a', text: t("Cobrar un arancel de 25% a cada juguete importado", "Charging a 25% tariff on each imported toy") },
      { id: 'ECO-13-E6-b', text: t("Permitir solo la importación de 100,000 juguetes al año", "Allowing only 100,000 toys to be imported per year") },
      { id: 'ECO-13-E6-c', text: t("Exigir certificaciones técnicas muy costosas que solo cumplen fácilmente los fabricantes locales", "Requiring very costly technical certifications that only local manufacturers meet easily") },
      { id: 'ECO-13-E6-d', text: t("Firmar un tratado que elimina aranceles con otro país", "Signing an agreement that eliminates tariffs with another country") },
      { id: 'ECO-13-E6-e', text: t("Bajar a cero el arancel a los juguetes", "Lowering the tariff on toys to zero") },
    ],
    correctOptionIds: ['ECO-13-E6-a', 'ECO-13-E6-b', 'ECO-13-E6-c'],
    explanation: t(
      "El arancel (a), la cuota (b) y los requisitos técnicos excesivos (c, barrera no arancelaria) frenan las importaciones. Un tratado de libre comercio (d) y eliminar el arancel (e) hacen lo contrario: abren el comercio. Error común: olvidar que los requisitos técnicos también pueden funcionar como barrera.",
      "The tariff (a), the quota (b) and excessive technical requirements (c, a non-tariff barrier) curb imports. A free trade agreement (d) and eliminating the tariff (e) do the opposite: they open trade. Common mistake: forgetting that technical requirements can also work as a barrier.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'international-trade',
  },

  // ═════════════════════════ ECO-14 ═════════════════════════
  {
    id: 'ECO-14-E1',
    level: 1,
    module: 'ECO-14',
    kind: 'mcq',
    flavor: 'interpret',
    prompt: t(
      "Si el tipo de cambio pasa de 17 a 19 pesos por dólar, ¿qué ocurrió?",
      "If the exchange rate moves from 17 to 19 pesos per dollar, what happened?",
    ),
    options: [
      { id: 'ECO-14-E1-a', text: t("El peso se apreció frente al dólar", "The peso appreciated against the dollar") },
      { id: 'ECO-14-E1-b', text: t("El peso se depreció frente al dólar", "The peso depreciated against the dollar") },
      { id: 'ECO-14-E1-c', text: t("El dólar perdió valor frente al peso", "The dollar lost value against the peso") },
      { id: 'ECO-14-E1-d', text: t("Nada: solo cambió el número, no el valor", "Nothing: only the number changed, not the value") },
    ],
    correctOptionId: 'ECO-14-E1-b',
    explanation: t(
      "Ahora necesitas más pesos para comprar un dólar: el peso vale menos (se depreció) y el dólar vale más. Error común: leer \"subió el tipo de cambio\" como \"subió el peso\"; es al revés.",
      "Now you need more pesos to buy a dollar: the peso is worth less (it depreciated) and the dollar is worth more. Common mistake: reading \"the exchange rate went up\" as \"the peso went up\"; it is the opposite.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'exchange-rates',
  },
  {
    id: 'ECO-14-E2',
    level: 1,
    module: 'ECO-14',
    kind: 'numeric',
    flavor: 'interpret',
    context: t(
      "En un periodo, el tipo de cambio pasa de 16.00 a 17.20 pesos por dólar (cifras hipotéticas).",
      "Over a period, the exchange rate moves from 16.00 to 17.20 pesos per dollar (hypothetical figures).",
    ),
    prompt: t(
      "¿En qué porcentaje aumentó el precio del dólar en pesos? Responde en %.",
      "By what percentage did the price of the dollar in pesos increase? Answer in %.",
    ),
    answer: 7.5,
    unit: '%',
    decimals: 1,
    tolerance: { abs: 0.05 },
    explanation: t(
      "(17.20 − 16.00) ÷ 16.00 = 1.20 ÷ 16 = 0.075 = 7.5%. Error común: dividir entre el tipo nuevo (1.20 ÷ 17.20 ≈ 7.0%); la variación se calcula sobre el valor inicial.",
      "(17.20 − 16.00) ÷ 16.00 = 1.20 ÷ 16 = 0.075 = 7.5%. Common mistake: dividing by the new rate (1.20 ÷ 17.20 ≈ 7.0%); the change is computed on the starting value.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'exchange-rates',
  },
  {
    id: 'ECO-14-E3',
    level: 1,
    module: 'ECO-14',
    kind: 'fields',
    flavor: 'case',
    context: t(
      "Una casa de cambio publica (precios hipotéticos): compra dólares a $17.50 y vende dólares a $18.30.",
      "An exchange house posts (hypothetical prices): buys dollars at $17.50 and sells dollars at $18.30.",
    ),
    prompt: t(
      "Calcula: a) cuántos pesos recibes si vendes 500 dólares; b) cuántos pesos pagas si compras 300 dólares; c) el diferencial por dólar.",
      "Compute: a) how many pesos you get if you sell 500 dollars; b) how many pesos you pay if you buy 300 dollars; c) the spread per dollar.",
    ),
    fields: [
      { id: 'f1', label: t("a) Pesos recibidos por 500 USD", "a) Pesos received for 500 USD"), answer: 8750, unit: 'MXN', tolerance: { abs: 0.5 } },
      { id: 'f2', label: t("b) Pesos pagados por 300 USD", "b) Pesos paid for 300 USD"), answer: 5490, unit: 'MXN', tolerance: { abs: 0.5 } },
      { id: 'f3', label: t("c) Diferencial por dólar ($)", "c) Spread per dollar ($)"), answer: 0.8, unit: 'MXN', tolerance: { abs: 0.005 } },
    ],
    explanation: t(
      "Si vendes dólares, la casa te los compra a 17.50: 500 × 17.50 = $8,750. Si compras, te los vende a 18.30: 300 × 18.30 = $5,490. Diferencial: 18.30 − 17.50 = $0.80. Error común: usar el precio de venta cuando tú vendes; el letrero se lee desde el punto de vista de la casa de cambio.",
      "If you sell dollars, the house buys them at 17.50: 500 × 17.50 = $8,750. If you buy, it sells them at 18.30: 300 × 18.30 = $5,490. Spread: 18.30 − 17.50 = $0.80. Common mistake: using the sell price when you sell; the board is read from the exchange house's point of view.",
    ),
    difficulty: 2,
    points: 15,
    competency: 'exchange-rates',
  },
  {
    id: 'ECO-14-E4',
    level: 1,
    module: 'ECO-14',
    kind: 'classify',
    flavor: 'case',
    prompt: t(
      "El peso se deprecia fuertemente frente al dólar. Clasifica a cada participante según si, en principio, le beneficia o le perjudica.",
      "The peso depreciates sharply against the dollar. Classify each participant by whether, in principle, it benefits or hurts them.",
    ),
    categories: [
      { id: 'ECO-14-E4-c1', label: t("Le beneficia", "Benefits") },
      { id: 'ECO-14-E4-c2', label: t("Le perjudica", "Hurts") },
    ],
    items: [
      { id: 'ECO-14-E4-i1', label: t("Una tequilera que vende la mayor parte de su producción en Estados Unidos", "A tequila maker that sells most of its output in the United States"), correctCategoryId: 'ECO-14-E4-c1' },
      { id: 'ECO-14-E4-i2', label: t("Una tienda que importa celulares y los vende en pesos", "A store that imports cell phones and sells them in pesos"), correctCategoryId: 'ECO-14-E4-c2' },
      { id: 'ECO-14-E4-i3', label: t("Una familia que recibe remesas en dólares cada mes", "A family that receives remittances in dollars every month"), correctCategoryId: 'ECO-14-E4-c1' },
      { id: 'ECO-14-E4-i4', label: t("Una empresa con un crédito en dólares e ingresos solo en pesos", "A company with a dollar loan and income only in pesos"), correctCategoryId: 'ECO-14-E4-c2' },
      { id: 'ECO-14-E4-i5', label: t("Un hotel de Los Cabos cuyos huéspedes son principalmente extranjeros", "A Los Cabos hotel whose guests are mainly foreigners"), correctCategoryId: 'ECO-14-E4-c1' },
      { id: 'ECO-14-E4-i6', label: t("Una familia mexicana que planea vacacionar en Orlando", "A Mexican family planning a vacation in Orlando"), correctCategoryId: 'ECO-14-E4-c2' },
    ],
    explanation: t(
      "Quien recibe dólares y gasta en pesos (exportadores, receptores de remesas, turismo extranjero) obtiene más pesos por cada dólar. Quien debe pagar en dólares con pesos (importadores, deudores en dólares, viajeros al extranjero) necesita más pesos. Error común: pensar que una depreciación perjudica a todos por igual.",
      "Those who receive dollars and spend in pesos (exporters, remittance receivers, foreign tourism) get more pesos per dollar. Those who must pay in dollars with pesos (importers, dollar debtors, travelers abroad) need more pesos. Common mistake: thinking a depreciation hurts everyone equally.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'exchange-rates',
  },
  {
    id: 'ECO-14-E5',
    level: 1,
    module: 'ECO-14',
    kind: 'truefalse',
    flavor: 'concept',
    prompt: t(
      "En México, el Banco de México fija cada día el precio obligatorio al que bancos y casas de cambio deben comprar y vender dólares.",
      "In Mexico, Banco de México sets every day the mandatory price at which banks and exchange houses must buy and sell dollars.",
    ),
    answer: false,
    explanation: t(
      "Falso. México tiene un régimen de libre flotación: el precio lo determinan la oferta y la demanda, y cada intermediario fija su precio de compra y de venta. Banxico publica el FIX como referencia, no como precio obligatorio. Error común: confundir el FIX con un tipo de cambio fijo.",
      "False. Mexico has a free-floating regime: supply and demand set the price, and each intermediary sets its own buy and sell prices. Banxico publishes the FIX as a reference, not as a mandatory price. Common mistake: confusing the FIX with a fixed exchange rate.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'exchange-rates',
  },
  {
    id: 'ECO-14-E6',
    level: 1,
    module: 'ECO-14',
    kind: 'numeric',
    flavor: 'case',
    context: t(
      "Una importadora de Monterrey comprará maquinaria en Europa. Hoy (cifras hipotéticas) 1 euro = 1.10 dólares y 1 dólar = 18.00 pesos.",
      "A Monterrey importer will buy machinery in Europe. Today (hypothetical figures) 1 euro = 1.10 dollars and 1 dollar = 18.00 pesos.",
    ),
    prompt: t(
      "¿Cuántos pesos cuesta 1 euro según el tipo de cambio cruzado?",
      "How many pesos does 1 euro cost according to the cross rate?",
    ),
    answer: 19.8,
    unit: 'MXN',
    decimals: 2,
    tolerance: { abs: 0.005 },
    explanation: t(
      "Un euro equivale a 1.10 dólares, y cada dólar a 18 pesos: 1.10 × 18.00 = 19.80 pesos por euro. Error común: dividir (18 ÷ 1.10 ≈ 16.36); como el euro vale más que el dólar, debe costar más pesos que el dólar.",
      "One euro equals 1.10 dollars, and each dollar 18 pesos: 1.10 × 18.00 = 19.80 pesos per euro. Common mistake: dividing (18 ÷ 1.10 ≈ 16.36); since the euro is worth more than the dollar, it must cost more pesos than the dollar.",
    ),
    difficulty: 2,
    points: 15,
    competency: 'exchange-rates',
  },

  // ═════════════════════════ ECO-15 ═════════════════════════
  {
    id: 'ECO-15-E1',
    level: 1,
    module: 'ECO-15',
    kind: 'fields',
    flavor: 'case',
    context: t(
      "Mariana dejó un empleo de $300,000 al año para abrir una agencia de diseño. En su primer año la agencia ingresó $900,000 y pagó $650,000 en renta, sueldos y software (cifras hipotéticas).",
      "Mariana left a $300,000-a-year job to open a design agency. In its first year the agency brought in $900,000 and paid $650,000 in rent, wages and software (hypothetical figures).",
    ),
    prompt: t(
      "Calcula la utilidad contable y la utilidad económica de Mariana (usa signo negativo si hay pérdida).",
      "Compute Mariana's accounting profit and economic profit (use a negative sign if there is a loss).",
    ),
    fields: [
      { id: 'f1', label: t("Utilidad contable ($)", "Accounting profit ($)"), answer: 250000, unit: 'MXN', tolerance: { abs: 0.5 } },
      { id: 'f2', label: t("Utilidad económica ($)", "Economic profit ($)"), answer: -50000, unit: 'MXN', tolerance: { abs: 0.5 } },
    ],
    explanation: t(
      "Contable: 900,000 − 650,000 = $250,000. Económica: 250,000 − 300,000 (sueldo al que renunció) = −$50,000. Error común: olvidar el costo implícito y concluir que el negocio es mejor opción que el empleo.",
      "Accounting: 900,000 − 650,000 = $250,000. Economic: 250,000 − 300,000 (salary given up) = −$50,000. Common mistake: forgetting the implicit cost and concluding the business is a better option than the job.",
    ),
    difficulty: 2,
    points: 15,
    competency: 'managerial-economics',
  },
  {
    id: 'ECO-15-E2',
    level: 1,
    module: 'ECO-15',
    kind: 'numeric',
    flavor: 'case',
    context: t(
      "Un taller de cerámica tiene costos fijos de $60,000 al mes. Vende cada taza a $150 y el costo variable por taza es de $90.",
      "A pottery workshop has fixed costs of $60,000 a month. It sells each mug for $150 and the variable cost per mug is $90.",
    ),
    prompt: t(
      "¿Cuántas tazas necesita vender al mes para alcanzar su punto de equilibrio?",
      "How many mugs does it need to sell per month to reach its break-even point?",
    ),
    answer: 1000,
    unit: 'units',
    decimals: 0,
    tolerance: { abs: 0.5 },
    explanation: t(
      "Margen de contribución: 150 − 90 = $60 por taza. Punto de equilibrio: 60,000 ÷ 60 = 1,000 tazas. Error común: dividir los costos fijos entre el precio (60,000 ÷ 150 = 400), olvidando que cada taza también genera costo variable.",
      "Contribution margin: 150 − 90 = $60 per mug. Break-even: 60,000 ÷ 60 = 1,000 mugs. Common mistake: dividing fixed costs by the price (60,000 ÷ 150 = 400), forgetting that each mug also has a variable cost.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'managerial-economics',
  },
  {
    id: 'ECO-15-E3',
    level: 1,
    module: 'ECO-15',
    kind: 'mcq',
    flavor: 'case',
    context: t(
      "Una empresa de botanas gastó $400,000 en desarrollar un nuevo sabor. Las pruebas muestran que lanzarlo costaría $300,000 más y solo generaría $200,000 de ingresos adicionales.",
      "A snack company spent $400,000 developing a new flavor. Tests show that launching it would cost $300,000 more and would only generate $200,000 in additional revenue.",
    ),
    prompt: t(
      "¿Qué debe decidir la empresa?",
      "What should the company decide?",
    ),
    options: [
      { id: 'ECO-15-E3-a', text: t("Lanzarlo, para no desperdiciar los $400,000 ya invertidos", "Launch it, so as not to waste the $400,000 already invested") },
      { id: 'ECO-15-E3-b', text: t("No lanzarlo: los $400,000 son un costo hundido y lanzar resta $100,000 adicionales", "Not launch it: the $400,000 is a sunk cost and launching subtracts another $100,000") },
      { id: 'ECO-15-E3-c', text: t("Lanzarlo, porque $200,000 de ingresos siempre son mejor que nada", "Launch it, because $200,000 in revenue is always better than nothing") },
      { id: 'ECO-15-E3-d', text: t("No lanzarlo, porque la pérdida total sería de $700,000", "Not launch it, because the total loss would be $700,000") },
    ],
    correctOptionId: 'ECO-15-E3-b',
    explanation: t(
      "Los $400,000 ya se gastaron y no cambian con la decisión. Solo cuenta lo que viene: ingresar $200,000 cuesta $300,000, así que lanzar empeora el resultado en $100,000. Error común: la falacia del costo hundido (opción a). La opción d llega a la decisión correcta con un cálculo equivocado: lanzar dejaría una pérdida total de $500,000, no de $700,000.",
      "The $400,000 has already been spent and does not change with the decision. Only what comes next counts: earning $200,000 costs $300,000, so launching worsens the result by $100,000. Common mistake: the sunk cost fallacy (option a). Option d reaches the right decision with a wrong calculation: launching would leave a total loss of $500,000, not $700,000.",
    ),
    difficulty: 2,
    points: 15,
    competency: 'managerial-economics',
  },
  {
    id: 'ECO-15-E4',
    level: 1,
    module: 'ECO-15',
    kind: 'formula',
    flavor: 'concept',
    prompt: t(
      "Completa la fórmula que usa un negocio para saber cuántas unidades debe vender para no ganar ni perder.",
      "Complete the formula a business uses to find how many units it must sell to neither gain nor lose.",
    ),
    template: 'Q* = {{b1}} ÷ ({{b2}} − {{b3}})',
    blanks: [
      {
        id: 'b1',
        options: [
          { id: 'ECO-15-E4-b1-a', text: t("Costos fijos totales", "Total fixed costs") },
          { id: 'ECO-15-E4-b1-b', text: t("Costos variables totales", "Total variable costs") },
          { id: 'ECO-15-E4-b1-c', text: t("Ingreso total", "Total revenue") },
        ],
        correctOptionId: 'ECO-15-E4-b1-a',
      },
      {
        id: 'b2',
        options: [
          { id: 'ECO-15-E4-b2-a', text: t("Costo marginal", "Marginal cost") },
          { id: 'ECO-15-E4-b2-b', text: t("Precio de venta unitario", "Unit selling price") },
          { id: 'ECO-15-E4-b2-c', text: t("Utilidad deseada", "Target profit") },
        ],
        correctOptionId: 'ECO-15-E4-b2-b',
      },
      {
        id: 'b3',
        options: [
          { id: 'ECO-15-E4-b3-a', text: t("Costo fijo unitario", "Unit fixed cost") },
          { id: 'ECO-15-E4-b3-b', text: t("Impuesto unitario", "Unit tax") },
          { id: 'ECO-15-E4-b3-c', text: t("Costo variable unitario", "Unit variable cost") },
        ],
        correctOptionId: 'ECO-15-E4-b3-c',
      },
    ],
    explanation: t(
      "Los costos fijos se cubren con lo que deja cada unidad después de pagar su costo variable: el margen de contribución (precio − costo variable unitario). Error común: restar el costo fijo unitario, que cambia con la cantidad y haría la fórmula circular.",
      "Fixed costs are covered by what each unit leaves after paying its variable cost: the contribution margin (price − unit variable cost). Common mistake: subtracting the unit fixed cost, which changes with quantity and would make the formula circular.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'managerial-economics',
  },
  {
    id: 'ECO-15-E5',
    level: 1,
    module: 'ECO-15',
    kind: 'classify',
    flavor: 'concept',
    prompt: t(
      "Clasifica los costos mensuales de una taquería según si son fijos o variables.",
      "Classify a taco stand's monthly costs as fixed or variable.",
    ),
    categories: [
      { id: 'ECO-15-E5-c1', label: t("Costo fijo", "Fixed cost") },
      { id: 'ECO-15-E5-c2', label: t("Costo variable", "Variable cost") },
    ],
    items: [
      { id: 'ECO-15-E5-i1', label: t("Renta del local", "Store rent"), correctCategoryId: 'ECO-15-E5-c1' },
      { id: 'ECO-15-E5-i2', label: t("Tortillas", "Tortillas"), correctCategoryId: 'ECO-15-E5-c2' },
      { id: 'ECO-15-E5-i3', label: t("Carne al pastor", "Al pastor meat"), correctCategoryId: 'ECO-15-E5-c2' },
      { id: 'ECO-15-E5-i4', label: t("Sueldo fijo del administrador", "Manager's fixed salary"), correctCategoryId: 'ECO-15-E5-c1' },
      { id: 'ECO-15-E5-i5', label: t("Seguro anual del local, pagado por mes", "Annual store insurance, paid monthly"), correctCategoryId: 'ECO-15-E5-c1' },
      { id: 'ECO-15-E5-i6', label: t("Empaques desechables para pedidos para llevar", "Disposable packaging for takeout orders"), correctCategoryId: 'ECO-15-E5-c2' },
    ],
    explanation: t(
      "Los fijos se pagan aunque no vendas un solo taco (renta, sueldo fijo, seguro). Los variables crecen con cada orden (tortillas, carne, empaques). Error común: llamar variable al sueldo del administrador porque \"cambia si lo despides\"; dentro del mes no depende de cuántos tacos se venden.",
      "Fixed costs are paid even if you do not sell a single taco (rent, fixed salary, insurance). Variable costs grow with each order (tortillas, meat, packaging). Common mistake: calling the manager's salary variable because \"it changes if you fire him\"; within the month it does not depend on how many tacos are sold.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'managerial-economics',
  },
  {
    id: 'ECO-15-E6',
    level: 1,
    module: 'ECO-15',
    kind: 'mcq',
    flavor: 'case',
    context: t(
      "Un cine de barrio cobra $100 por boleto y vende 1,000 boletos por semana. Estima que a $90 vendería 1,200 boletos.",
      "A neighborhood cinema charges $100 per ticket and sells 1,000 tickets a week. It estimates that at $90 it would sell 1,200 tickets.",
    ),
    prompt: t(
      "Si solo considera el ingreso por boletos, ¿qué le conviene y por qué?",
      "Considering only ticket revenue, what should it do and why?",
    ),
    options: [
      { id: 'ECO-15-E6-a', text: t("Mantener $100: bajar el precio siempre reduce el ingreso", "Keep $100: lowering the price always reduces revenue") },
      { id: 'ECO-15-E6-b', text: t("Bajar a $90: la demanda es inelástica y el ingreso sube a $108,000", "Lower to $90: demand is inelastic and revenue rises to $108,000") },
      { id: 'ECO-15-E6-c', text: t("Bajar a $90: la demanda es elástica y el ingreso sube de $100,000 a $108,000", "Lower to $90: demand is elastic and revenue rises from $100,000 to $108,000") },
      { id: 'ECO-15-E6-d', text: t("Subir el precio: con demanda elástica subirlo aumenta el ingreso", "Raise the price: with elastic demand raising it increases revenue") },
    ],
    correctOptionId: 'ECO-15-E6-c',
    explanation: t(
      "El precio baja 10% y la cantidad sube 20%: elasticidad 2 (elástica). Ingreso: 100 × 1,000 = $100,000 contra 90 × 1,200 = $108,000. Error común: acertar la decisión pero llamar inelástica a la demanda (opción b); si fuera inelástica, bajar el precio reduciría el ingreso.",
      "Price falls 10% and quantity rises 20%: elasticity 2 (elastic). Revenue: 100 × 1,000 = $100,000 versus 90 × 1,200 = $108,000. Common mistake: getting the decision right but calling demand inelastic (option b); if it were inelastic, lowering the price would reduce revenue.",
    ),
    difficulty: 2,
    points: 15,
    competency: 'managerial-economics',
  },

  // ═════════════════════════ ECO-16 ═════════════════════════
  {
    id: 'ECO-16-E1',
    level: 1,
    module: 'ECO-16',
    kind: 'multi',
    flavor: 'concept',
    prompt: t(
      "¿Cuáles son elementos indispensables para describir un juego en teoría de juegos? Selecciona todas las que apliquen.",
      "Which are essential elements to describe a game in game theory? Select all that apply.",
    ),
    options: [
      { id: 'ECO-16-E1-a', text: t("Los jugadores que toman decisiones", "The players who make decisions") },
      { id: 'ECO-16-E1-b', text: t("Las estrategias disponibles para cada jugador", "The strategies available to each player") },
      { id: 'ECO-16-E1-c', text: t("Los pagos de cada jugador en cada combinación", "Each player's payoffs in each combination") },
      { id: 'ECO-16-E1-d', text: t("Un árbitro que decide quién gana", "A referee who decides who wins") },
      { id: 'ECO-16-E1-e', text: t("La garantía de que todos los jugadores ganen", "A guarantee that all players win") },
    ],
    correctOptionIds: ['ECO-16-E1-a', 'ECO-16-E1-b', 'ECO-16-E1-c'],
    explanation: t(
      "Un juego se define con jugadores, estrategias y pagos. No hace falta un árbitro: el resultado sale de las decisiones de los jugadores. Y nada garantiza que todos ganen; en el dilema del prisionero ambos terminan peor. Error común: pensar que \"juego\" implica un ganador y un perdedor.",
      "A game is defined by players, strategies and payoffs. No referee is needed: the outcome comes from the players' decisions. And nothing guarantees everyone wins; in the prisoner's dilemma both end up worse. Common mistake: thinking a \"game\" implies a winner and a loser.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'game-theory',
  },
  {
    id: 'ECO-16-E2',
    level: 1,
    module: 'ECO-16',
    kind: 'mcq',
    flavor: 'case',
    context: t(
      "Dos farmacias vecinas eligen al mismo tiempo precio Alto o Bajo. Ganancias semanales en miles de pesos (Farmacia A, Farmacia B): Alto-Alto (10, 10); A Alto y B Bajo (2, 14); A Bajo y B Alto (14, 2); Bajo-Bajo (5, 5).",
      "Two neighboring pharmacies choose a High or Low price at the same time. Weekly profits in thousands of pesos (Pharmacy A, Pharmacy B): High-High (10, 10); A High and B Low (2, 14); A Low and B High (14, 2); Low-Low (5, 5).",
    ),
    prompt: t(
      "¿Cuál es el equilibrio de Nash de este juego?",
      "What is the Nash equilibrium of this game?",
    ),
    options: [
      { id: 'ECO-16-E2-a', text: t("Ambas eligen Alto, con (10, 10)", "Both choose High, with (10, 10)") },
      { id: 'ECO-16-E2-b', text: t("Ambas eligen Bajo, con (5, 5)", "Both choose Low, with (5, 5)") },
      { id: 'ECO-16-E2-c', text: t("A elige Bajo y B elige Alto, con (14, 2)", "A chooses Low and B chooses High, with (14, 2)") },
      { id: 'ECO-16-E2-d', text: t("No existe equilibrio porque el juego es simultáneo", "There is no equilibrium because the game is simultaneous") },
    ],
    correctOptionId: 'ECO-16-E2-b',
    explanation: t(
      "Para A: si B pone Alto, Bajo da 14 > 10; si B pone Bajo, Bajo da 5 > 2. Bajo es dominante, y lo mismo para B. En (Bajo, Bajo) nadie gana cambiando solo. Error común: elegir (10, 10) porque es mejor para ambas; no es equilibrio, porque cada una gana más bajando su precio si la otra mantiene el alto.",
      "For A: if B picks High, Low gives 14 > 10; if B picks Low, Low gives 5 > 2. Low is dominant, and the same for B. In (Low, Low) no one gains by changing alone. Common mistake: choosing (10, 10) because it is better for both; it is not an equilibrium, because each one earns more by lowering its price if the other keeps it high.",
    ),
    difficulty: 2,
    points: 15,
    competency: 'game-theory',
  },
  {
    id: 'ECO-16-E3',
    level: 1,
    module: 'ECO-16',
    kind: 'numeric',
    flavor: 'case',
    context: t(
      "Dos líneas de autobuses en la misma ruta deciden si lanzan una Promoción o mantienen precio Normal. Ganancias mensuales en miles de pesos (Línea 1, Línea 2): Promoción-Promoción (30, 30); 1 Promoción y 2 Normal (55, 15); 1 Normal y 2 Promoción (15, 55); Normal-Normal (45, 45).",
      "Two bus lines on the same route decide whether to launch a Promotion or keep a Normal price. Monthly profits in thousands of pesos (Line 1, Line 2): Promotion-Promotion (30, 30); 1 Promotion and 2 Normal (55, 15); 1 Normal and 2 Promotion (15, 55); Normal-Normal (45, 45).",
    ),
    prompt: t(
      "Encuentra el equilibrio de Nash. ¿Cuántos miles de pesos de ganancia conjunta pierden las dos líneas en ese equilibrio frente a la casilla Normal-Normal?",
      "Find the Nash equilibrium. How many thousand pesos of joint profit do the two lines lose in that equilibrium compared with the Normal-Normal cell?",
    ),
    answer: 30,
    unit: 'none',
    decimals: 0,
    tolerance: { abs: 0.01 },
    explanation: t(
      "Promoción es dominante para ambas (30 > 15 y 55 > 45), así que el equilibrio es Promoción-Promoción con 30 + 30 = 60. Normal-Normal daría 45 + 45 = 90. Pierden 90 − 60 = 30 mil pesos. Error común: comparar la ganancia de una sola línea (45 − 30 = 15) en lugar de la conjunta.",
      "Promotion is dominant for both (30 > 15 and 55 > 45), so the equilibrium is Promotion-Promotion with 30 + 30 = 60. Normal-Normal would give 45 + 45 = 90. They lose 90 − 60 = 30 thousand pesos. Common mistake: comparing a single line's profit (45 − 30 = 15) instead of the joint one.",
    ),
    difficulty: 2,
    points: 15,
    competency: 'game-theory',
  },
  {
    id: 'ECO-16-E4',
    level: 1,
    module: 'ECO-16',
    kind: 'truefalse',
    flavor: 'concept',
    prompt: t(
      "En el dilema del prisionero, el equilibrio de Nash siempre es el resultado que más beneficia a ambos jugadores en conjunto.",
      "In the prisoner's dilemma, the Nash equilibrium is always the outcome that most benefits both players together.",
    ),
    answer: false,
    explanation: t(
      "Falso. Esa es justo la lección del dilema: cada jugador elige lo mejor para sí y ambos terminan peor que si hubieran cooperado. Error común: creer que un equilibrio es por definición un buen resultado; solo significa que nadie gana cambiando por su cuenta.",
      "False. That is precisely the lesson of the dilemma: each player chooses what is best for itself and both end up worse than if they had cooperated. Common mistake: believing an equilibrium is by definition a good outcome; it only means no one gains by changing on their own.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'game-theory',
  },
  {
    id: 'ECO-16-E5',
    level: 1,
    module: 'ECO-16',
    kind: 'classify',
    flavor: 'concept',
    prompt: t(
      "Clasifica cada situación como juego simultáneo o juego secuencial.",
      "Classify each situation as a simultaneous game or a sequential game.",
    ),
    categories: [
      { id: 'ECO-16-E5-c1', label: t("Simultáneo", "Simultaneous") },
      { id: 'ECO-16-E5-c2', label: t("Secuencial", "Sequential") },
    ],
    items: [
      { id: 'ECO-16-E5-i1', label: t("Piedra, papel o tijera", "Rock, paper, scissors"), correctCategoryId: 'ECO-16-E5-c1' },
      { id: 'ECO-16-E5-i2', label: t("Una partida de ajedrez", "A game of chess"), correctCategoryId: 'ECO-16-E5-c2' },
      { id: 'ECO-16-E5-i3', label: t("Una licitación en la que cada empresa entrega su oferta en sobre cerrado", "A tender in which each company submits its bid in a sealed envelope"), correctCategoryId: 'ECO-16-E5-c1' },
      { id: 'ECO-16-E5-i4', label: t("Una negociación de sueldo con oferta y contraoferta", "A salary negotiation with offer and counteroffer"), correctCategoryId: 'ECO-16-E5-c2' },
      { id: 'ECO-16-E5-i5', label: t("Una cadena decide su respuesta después de ver que abrió un competidor", "A chain decides its response after seeing that a competitor opened"), correctCategoryId: 'ECO-16-E5-c2' },
      { id: 'ECO-16-E5-i6', label: t("Dos aerolíneas publican sus tarifas el mismo día sin conocer la del otro", "Two airlines publish their fares on the same day without knowing the other's"), correctCategoryId: 'ECO-16-E5-c1' },
    ],
    explanation: t(
      "Lo que importa no es el reloj sino la información: si decides sin conocer la jugada del otro, es simultáneo (sobre cerrado, tarifas el mismo día, piedra-papel-tijera); si decides viendo lo que hizo el otro, es secuencial (ajedrez, contraoferta, respuesta a la entrada). Error común: pensar que la licitación es secuencial porque las ofertas se entregan a distintas horas.",
      "What matters is not the clock but information: if you decide without knowing the other's move, it is simultaneous (sealed envelope, same-day fares, rock-paper-scissors); if you decide having seen what the other did, it is sequential (chess, counteroffer, response to entry). Common mistake: thinking the tender is sequential because bids are delivered at different times.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'game-theory',
  },
  {
    id: 'ECO-16-E6',
    level: 1,
    module: 'ECO-16',
    kind: 'mcq',
    flavor: 'case',
    context: t(
      "Una nueva tienda de conveniencia decide si abre en una colonia donde ya hay otra. Si no entra: (0 para la nueva, 8 para la establecida). Si entra y la establecida responde con guerra de precios: (−2, 1). Si entra y la establecida convive: (3, 4). La establecida anuncia que hará guerra de precios.",
      "A new convenience store decides whether to open in a neighborhood that already has one. If it stays out: (0 for the newcomer, 8 for the incumbent). If it enters and the incumbent responds with a price war: (−2, 1). If it enters and the incumbent accommodates: (3, 4). The incumbent announces it will start a price war.",
    ),
    prompt: t(
      "Usando inducción hacia atrás, ¿qué resultado esperas?",
      "Using backward induction, what outcome do you expect?",
    ),
    options: [
      { id: 'ECO-16-E6-a', text: t("La nueva no entra porque teme la guerra de precios: (0, 8)", "The newcomer stays out because it fears the price war: (0, 8)") },
      { id: 'ECO-16-E6-b', text: t("La nueva entra y la establecida hace la guerra de precios: (−2, 1)", "The newcomer enters and the incumbent wages the price war: (−2, 1)") },
      { id: 'ECO-16-E6-c', text: t("La nueva entra y la establecida convive: (3, 4)", "The newcomer enters and the incumbent accommodates: (3, 4)") },
      { id: 'ECO-16-E6-d', text: t("No se puede saber sin conocer el tamaño de las tiendas", "It cannot be known without the size of the stores") },
    ],
    correctOptionId: 'ECO-16-E6-c',
    explanation: t(
      "Si la nueva entra, a la establecida le conviene convivir (4) más que pelear (1), así que su amenaza no es creíble. Sabiéndolo, la nueva entra porque 3 > 0. Error común: creer la amenaza (opción a) sin revisar si a quien amenaza le conviene cumplirla.",
      "If the newcomer enters, the incumbent is better off accommodating (4) than fighting (1), so its threat is not credible. Knowing this, the newcomer enters because 3 > 0. Common mistake: believing the threat (option a) without checking whether carrying it out pays for the one who makes it.",
    ),
    difficulty: 2,
    points: 15,
    competency: 'game-theory',
  },

  // ═════════════════════════ ECO-17 ═════════════════════════
  {
    id: 'ECO-17-E1',
    level: 1,
    module: 'ECO-17',
    kind: 'classify',
    flavor: 'concept',
    prompt: t(
      "Clasifica cada bien según su rivalidad y su posibilidad de exclusión.",
      "Classify each good by its rivalry and excludability.",
    ),
    categories: [
      { id: 'ECO-17-E1-c1', label: t("Bien privado (rival y excluible)", "Private good (rival and excludable)") },
      { id: 'ECO-17-E1-c2', label: t("Bien público (no rival y no excluible)", "Public good (non-rival and non-excludable)") },
      { id: 'ECO-17-E1-c3', label: t("Recurso común (rival y no excluible)", "Common resource (rival and non-excludable)") },
      { id: 'ECO-17-E1-c4', label: t("Bien club (no rival y excluible)", "Club good (non-rival and excludable)") },
    ],
    items: [
      { id: 'ECO-17-E1-i1', label: t("El alumbrado público de una calle", "A street's public lighting"), correctCategoryId: 'ECO-17-E1-c2' },
      { id: 'ECO-17-E1-i2', label: t("La defensa nacional", "National defense"), correctCategoryId: 'ECO-17-E1-c2' },
      { id: 'ECO-17-E1-i3', label: t("Una torta de tamal", "A tamale sandwich (guajolota)"), correctCategoryId: 'ECO-17-E1-c1' },
      { id: 'ECO-17-E1-i4', label: t("Los peces en mar abierto", "Fish in the open sea"), correctCategoryId: 'ECO-17-E1-c3' },
      { id: 'ECO-17-E1-i5', label: t("Un servicio de televisión de paga", "A pay TV service"), correctCategoryId: 'ECO-17-E1-c4' },
      { id: 'ECO-17-E1-i6', label: t("Una autopista de cuota sin congestión", "An uncongested toll highway"), correctCategoryId: 'ECO-17-E1-c4' },
    ],
    explanation: t(
      "La torta: si tú te la comes, nadie más puede, y la venden solo a quien paga (privado). Alumbrado y defensa benefician a todos a la vez y no se puede excluir (públicos). Los peces se acaban pero es difícil impedir que se pesquen (común). TV de paga y autopista sin tráfico excluyen a quien no paga, pero un usuario más no estorba (club). Error común: llamar bien público a todo lo que da el gobierno, como la autopista de cuota.",
      "The sandwich: if you eat it, no one else can, and it is sold only to whoever pays (private). Lighting and defense benefit everyone at once and no one can be excluded (public). Fish run out but it is hard to stop people fishing (common). Pay TV and an uncongested highway exclude non-payers, but one more user does not get in the way (club). Common mistake: calling everything government provides a public good, like the toll highway.",
    ),
    difficulty: 2,
    points: 15,
    competency: 'public-sector-economics',
  },
  {
    id: 'ECO-17-E2',
    level: 1,
    module: 'ECO-17',
    kind: 'mcq',
    flavor: 'case',
    context: t(
      "Los vecinos de una colonia acuerdan juntar dinero para pagar vigilancia en la calle. Varios no cooperan porque saben que el vigilante cuidará toda la calle de todos modos.",
      "The residents of a neighborhood agree to pool money to pay for street security. Several do not contribute because they know the guard will watch the whole street anyway.",
    ),
    prompt: t(
      "¿Qué problema describe esta situación?",
      "What problem does this situation describe?",
    ),
    options: [
      { id: 'ECO-17-E2-a', text: t("El problema del polizón (free rider)", "The free rider problem") },
      { id: 'ECO-17-E2-b', text: t("Una externalidad negativa", "A negative externality") },
      { id: 'ECO-17-E2-c', text: t("Un monopolio", "A monopoly") },
      { id: 'ECO-17-E2-d', text: t("Información asimétrica", "Asymmetric information") },
    ],
    correctOptionId: 'ECO-17-E2-a',
    explanation: t(
      "La vigilancia de la calle funciona como bien público: no se puede excluir a quien no paga, así que algunos se benefician sin cooperar (polizones). Por eso estos bienes suelen financiarse con impuestos obligatorios. Error común: llamarlo externalidad negativa; aquí nadie impone un costo a otros, simplemente no pagan su parte.",
      "Street security works as a public good: non-payers cannot be excluded, so some benefit without contributing (free riders). That is why such goods are usually financed with mandatory taxes. Common mistake: calling it a negative externality; here no one imposes a cost on others, they simply do not pay their share.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'public-sector-economics',
  },
  {
    id: 'ECO-17-E3',
    level: 1,
    module: 'ECO-17',
    kind: 'truefalse',
    flavor: 'concept',
    prompt: t(
      "Si una curtiduría contamina un río y no paga el daño que causa a los pescadores, tiende a producir más de lo socialmente eficiente.",
      "If a tannery pollutes a river and does not pay for the damage it causes to fishermen, it tends to produce more than is socially efficient.",
    ),
    answer: true,
    explanation: t(
      "Verdadero. Es una externalidad negativa: la curtiduría decide con su costo privado, que es menor que el costo social, así que produce de más. Un impuesto igual al daño por unidad o una regulación lo corrigen. Error común: pensar que produce menos porque \"contaminar es malo para el negocio\".",
      "True. It is a negative externality: the tannery decides based on its private cost, which is lower than the social cost, so it overproduces. A tax equal to the damage per unit or a regulation corrects it. Common mistake: thinking it produces less because \"polluting is bad for business\".",
    ),
    difficulty: 1,
    points: 10,
    competency: 'public-sector-economics',
  },
  {
    id: 'ECO-17-E4',
    level: 1,
    module: 'ECO-17',
    kind: 'fields',
    flavor: 'case',
    context: t(
      "A una fábrica de ladrillos le cuesta $1,200 producir un millar de ladrillos. El humo de sus hornos causa a los vecinos daños estimados en $300 por millar (cifras hipotéticas).",
      "A brick factory spends $1,200 to produce a thousand bricks. The smoke from its kilns causes neighbors damages estimated at $300 per thousand (hypothetical figures).",
    ),
    prompt: t(
      "Calcula el costo social por millar y el impuesto pigouviano por millar que corrige la externalidad.",
      "Compute the social cost per thousand bricks and the Pigouvian tax per thousand that corrects the externality.",
    ),
    fields: [
      { id: 'f1', label: t("Costo social por millar ($)", "Social cost per thousand ($)"), answer: 1500, unit: 'MXN', tolerance: { abs: 0.5 } },
      { id: 'f2', label: t("Impuesto pigouviano por millar ($)", "Pigouvian tax per thousand ($)"), answer: 300, unit: 'MXN', tolerance: { abs: 0.5 } },
    ],
    explanation: t(
      "Costo social = 1,200 + 300 = $1,500. El impuesto correctivo iguala el daño externo: $300 por millar, para que la fábrica enfrente el costo completo. Error común: poner como impuesto el costo social completo ($1,500), lo que cobraría dos veces el costo privado.",
      "Social cost = 1,200 + 300 = $1,500. The corrective tax equals the external damage: $300 per thousand, so the factory faces the full cost. Common mistake: setting the tax at the full social cost ($1,500), which would charge the private cost twice.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'public-sector-economics',
  },
  {
    id: 'ECO-17-E5',
    level: 1,
    module: 'ECO-17',
    kind: 'numeric',
    flavor: 'case',
    context: t(
      "Un gobierno estatal evalúa una línea de transporte público. En valor presente, los costos suman $60 millones y los beneficios sociales (tiempo ahorrado, menos accidentes y menos contaminación) suman $72 millones (cifras hipotéticas).",
      "A state government evaluates a public transit line. In present value, costs add up to $60 million and social benefits (time saved, fewer accidents and less pollution) add up to $72 million (hypothetical figures).",
    ),
    prompt: t(
      "¿Cuál es la relación beneficio-costo del proyecto?",
      "What is the project's benefit-cost ratio?",
    ),
    answer: 1.2,
    unit: 'times',
    decimals: 2,
    tolerance: { abs: 0.005 },
    explanation: t(
      "B/C = 72 ÷ 60 = 1.20. Como es mayor que 1, el proyecto genera más beneficio social del que cuesta. Error común: dividir al revés (60 ÷ 72 ≈ 0.83) y concluir que no conviene.",
      "B/C = 72 ÷ 60 = 1.20. Since it is greater than 1, the project generates more social benefit than it costs. Common mistake: dividing the other way (60 ÷ 72 ≈ 0.83) and concluding it is not worthwhile.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'public-sector-economics',
  },
  {
    id: 'ECO-17-E6',
    level: 1,
    module: 'ECO-17',
    kind: 'multi',
    flavor: 'concept',
    prompt: t(
      "¿Cuáles de estas situaciones son fallas de mercado? Selecciona todas las que apliquen.",
      "Which of these situations are market failures? Select all that apply.",
    ),
    options: [
      { id: 'ECO-17-E6-a', text: t("Una aseguradora no sabe qué clientes manejan con imprudencia, pero ellos sí lo saben", "An insurer does not know which customers drive recklessly, but they do") },
      { id: 'ECO-17-E6-b', text: t("Una única empresa controla el agua embotellada de una región y cobra muy caro", "A single company controls bottled water in a region and charges very high prices") },
      { id: 'ECO-17-E6-c', text: t("Nadie construye un faro porque no puede cobrar a cada barco que lo ve", "No one builds a lighthouse because it cannot charge each ship that sees it") },
      { id: 'ECO-17-E6-d', text: t("El precio del jitomate sube porque una helada redujo la cosecha", "The price of tomatoes rises because a frost reduced the harvest") },
      { id: 'ECO-17-E6-e', text: t("Una empresa eficiente obtiene buenas utilidades", "An efficient company earns good profits") },
    ],
    correctOptionIds: ['ECO-17-E6-a', 'ECO-17-E6-b', 'ECO-17-E6-c'],
    explanation: t(
      "La aseguradora sufre información asimétrica, el proveedor único tiene poder de mercado y el faro es un bien público. Que el jitomate suba tras una helada es el mercado funcionando: el precio refleja la escasez. Y tener utilidades no es una falla. Error común: llamar falla de mercado a cualquier precio que no nos gusta.",
      "The insurer suffers from asymmetric information, the single supplier has market power and the lighthouse is a public good. Tomatoes rising after a frost is the market working: the price reflects scarcity. And earning profits is not a failure. Common mistake: calling any price we dislike a market failure.",
    ),
    difficulty: 2,
    points: 15,
    competency: 'public-sector-economics',
  },

  // ═════════════════════════ ECO-18 ═════════════════════════
  {
    id: 'ECO-18-E1',
    level: 1,
    module: 'ECO-18',
    kind: 'mcq',
    flavor: 'concept',
    prompt: t(
      "En México, ¿quién aprueba el Presupuesto de Egresos de la Federación?",
      "In Mexico, who approves the Federal Expenditure Budget?",
    ),
    options: [
      { id: 'ECO-18-E1-a', text: t("La Secretaría de Hacienda, por sí sola", "The Finance Ministry, on its own") },
      { id: 'ECO-18-E1-b', text: t("El Senado de la República, por sí solo", "The Senate, on its own") },
      { id: 'ECO-18-E1-c', text: t("Exclusivamente la Cámara de Diputados", "Exclusively the Chamber of Deputies") },
      { id: 'ECO-18-E1-d', text: t("El Banco de México", "Banco de México") },
    ],
    correctOptionId: 'ECO-18-E1-c',
    explanation: t(
      "Hacienda prepara el proyecto y el Ejecutivo lo envía, pero aprobarlo es facultad exclusiva de la Cámara de Diputados. Error común: confundirlo con la Ley de Ingresos, que sí pasa por ambas cámaras. Banxico no aprueba el presupuesto: es autónomo y se encarga de la política monetaria.",
      "The Finance Ministry prepares the draft and the Executive sends it, but approving it is the exclusive power of the Chamber of Deputies. Common mistake: confusing it with the Revenue Law, which does go through both chambers. Banxico does not approve the budget: it is autonomous and handles monetary policy.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'public-budget',
  },
  {
    id: 'ECO-18-E2',
    level: 1,
    module: 'ECO-18',
    kind: 'fields',
    flavor: 'case',
    context: t(
      "Un gobierno hipotético tiene ingresos por 7,000 y un gasto total de 7,800 (miles de millones de pesos). De ese gasto, 1,000 son intereses de la deuda.",
      "A hypothetical government has revenue of 7,000 and total spending of 7,800 (billions of pesos). Of that spending, 1,000 is interest on debt.",
    ),
    prompt: t(
      "Calcula el balance presupuestario y el balance primario (usa signo negativo si hay déficit).",
      "Compute the budget balance and the primary balance (use a negative sign if there is a deficit).",
    ),
    fields: [
      { id: 'f1', label: t("Balance presupuestario", "Budget balance"), answer: -800, unit: 'none', tolerance: { abs: 0.5 } },
      { id: 'f2', label: t("Balance primario", "Primary balance"), answer: 200, unit: 'none', tolerance: { abs: 0.5 } },
    ],
    explanation: t(
      "Balance: 7,000 − 7,800 = −800 (déficit). Primario: 7,000 − (7,800 − 1,000) = 7,000 − 6,800 = +200. El déficit se explica por los intereses de deudas pasadas. Error común: sumar los intereses al gasto en lugar de restarlos al calcular el balance primario.",
      "Balance: 7,000 − 7,800 = −800 (deficit). Primary: 7,000 − (7,800 − 1,000) = 7,000 − 6,800 = +200. The deficit is explained by interest on past debts. Common mistake: adding interest to spending instead of subtracting it when computing the primary balance.",
    ),
    difficulty: 2,
    points: 15,
    competency: 'public-budget',
  },
  {
    id: 'ECO-18-E3',
    level: 1,
    module: 'ECO-18',
    kind: 'classify',
    flavor: 'concept',
    prompt: t(
      "Clasifica cada concepto del gasto federal como gasto programable o no programable.",
      "Classify each item of federal spending as programmable or non-programmable.",
    ),
    categories: [
      { id: 'ECO-18-E3-c1', label: t("Gasto programable", "Programmable spending") },
      { id: 'ECO-18-E3-c2', label: t("Gasto no programable", "Non-programmable spending") },
    ],
    items: [
      { id: 'ECO-18-E3-i1', label: t("Sueldos de médicos de hospitales federales", "Salaries of doctors in federal hospitals"), correctCategoryId: 'ECO-18-E3-c1' },
      { id: 'ECO-18-E3-i2', label: t("Construcción de una carretera federal", "Construction of a federal highway"), correctCategoryId: 'ECO-18-E3-c1' },
      { id: 'ECO-18-E3-i3', label: t("Intereses pagados por la deuda pública", "Interest paid on public debt"), correctCategoryId: 'ECO-18-E3-c2' },
      { id: 'ECO-18-E3-i4', label: t("Participaciones que la Federación entrega a estados y municipios", "Revenue shares the Federation hands to states and municipalities"), correctCategoryId: 'ECO-18-E3-c2' },
      { id: 'ECO-18-E3-i5', label: t("Compra de vacunas para una campaña nacional", "Purchase of vaccines for a national campaign"), correctCategoryId: 'ECO-18-E3-c1' },
      { id: 'ECO-18-E3-i6', label: t("Pago de adeudos de ejercicios fiscales anteriores", "Payment of debts from previous fiscal years"), correctCategoryId: 'ECO-18-E3-c2' },
    ],
    explanation: t(
      "Programable: financia programas y servicios concretos (médicos, carreteras, vacunas). No programable: intereses de la deuda, participaciones a estados y municipios y adeudos de años anteriores, que no corresponden a un programa del año. Error común: considerar programables las participaciones porque los estados las gastan en servicios; para la Federación son transferencias no programables.",
      "Programmable: funds specific programs and services (doctors, highways, vaccines). Non-programmable: debt interest, revenue shares to states and municipalities and debts from previous years, which do not belong to a program of the year. Common mistake: considering revenue shares programmable because states spend them on services; for the Federation they are non-programmable transfers.",
    ),
    difficulty: 2,
    points: 15,
    competency: 'public-budget',
  },
  {
    id: 'ECO-18-E4',
    level: 1,
    module: 'ECO-18',
    kind: 'truefalse',
    flavor: 'concept',
    prompt: t(
      "La Ley de Ingresos de la Federación la aprueba únicamente el Senado de la República.",
      "The Federal Revenue Law is approved only by the Senate.",
    ),
    answer: false,
    explanation: t(
      "Falso. La Ley de Ingresos la aprueban ambas cámaras del Congreso: primero Diputados y después el Senado. Lo que aprueba una sola cámara (Diputados) es el Presupuesto de Egresos. Error común: invertir los papeles de las dos cámaras.",
      "False. The Revenue Law is approved by both chambers of Congress: first the Deputies and then the Senate. What a single chamber (Deputies) approves is the Expenditure Budget. Common mistake: swapping the roles of the two chambers.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'public-budget',
  },
  {
    id: 'ECO-18-E5',
    level: 1,
    module: 'ECO-18',
    kind: 'multi',
    flavor: 'concept',
    prompt: t(
      "¿Cuáles de estos gastos de una secretaría son gasto de capital (inversión)? Selecciona todas las que apliquen.",
      "Which of these expenses of a ministry are capital spending (investment)? Select all that apply.",
    ),
    options: [
      { id: 'ECO-18-E5-a', text: t("Construir una presa para riego", "Building an irrigation dam") },
      { id: 'ECO-18-E5-b', text: t("Comprar equipo de rayos X para un hospital nuevo", "Buying X-ray equipment for a new hospital") },
      { id: 'ECO-18-E5-c', text: t("Pagar la nómina quincenal del personal", "Paying staff's biweekly payroll") },
      { id: 'ECO-18-E5-d', text: t("Comprar papelería para las oficinas", "Buying stationery for the offices") },
      { id: 'ECO-18-E5-e', text: t("Pagar el recibo de luz de los edificios", "Paying the buildings' electricity bill") },
    ],
    correctOptionIds: ['ECO-18-E5-a', 'ECO-18-E5-b'],
    explanation: t(
      "La presa y el equipo médico duradero dejan un activo que sirve por muchos años: son gasto de capital. Nómina, papelería y luz se consumen en el periodo: son gasto corriente. Error común: pensar que todo gasto grande es inversión; la nómina puede ser enorme y sigue siendo corriente.",
      "The dam and durable medical equipment leave an asset that serves for many years: they are capital spending. Payroll, stationery and electricity are consumed in the period: they are current spending. Common mistake: thinking every large expense is investment; payroll can be huge and is still current.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'public-budget',
  },
  {
    id: 'ECO-18-E6',
    level: 1,
    module: 'ECO-18',
    kind: 'numeric',
    flavor: 'case',
    context: t(
      "A un programa de becas le aprobaron $1,200 millones para el año. Al cierre, la Cuenta Pública reporta que se ejercieron $1,050 millones (cifras hipotéticas).",
      "A scholarship program was approved $1,200 million for the year. At year-end, the Public Account reports that $1,050 million was spent (hypothetical figures).",
    ),
    prompt: t(
      "¿Qué porcentaje del presupuesto aprobado se ejerció? Responde en %.",
      "What percentage of the approved budget was spent? Answer in %.",
    ),
    answer: 87.5,
    unit: '%',
    decimals: 1,
    tolerance: { abs: 0.05 },
    explanation: t(
      "1,050 ÷ 1,200 = 0.875 = 87.5%. Quedó un subejercicio de 12.5% ($150 millones). Error común: responder 12.5%, que es lo que no se gastó, o dividir al revés (1,200 ÷ 1,050 ≈ 114%).",
      "1,050 ÷ 1,200 = 0.875 = 87.5%. There was an underspend of 12.5% ($150 million). Common mistake: answering 12.5%, which is what was not spent, or dividing the other way (1,200 ÷ 1,050 ≈ 114%).",
    ),
    difficulty: 1,
    points: 10,
    competency: 'public-budget',
  },
]
