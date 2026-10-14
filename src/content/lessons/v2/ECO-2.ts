import type { Exercise, Lesson } from '../../../types'

/**
 * FINCORE — Temario v2.0, área Economía y Entorno Empresarial, parte 2 (Básico).
 * ECO-07 a ECO-12: estructuras de mercado, PIB, inflación/empleo/crecimiento,
 * política monetaria, política fiscal y Banco de México.
 */

const t = (es: string, en: string) => ({ es, en })

const NOTE_COMPETITION = t(
  "Contenido educativo. Las referencias a la ley de competencia económica y a la autoridad antimonopolio de México son generales: el marco institucional se reformó en 2024–2025 y las reglas cambian, así que verifica la ley y el organismo vigentes (2026). Los índices y porcentajes de los ejemplos son hipotéticos.",
  "Educational content. References to Mexico's economic competition law and antitrust authority are general: the institutional framework was reformed in 2024–2025 and rules change, so verify the current law and agency (2026). The indices and percentages in the examples are hypothetical.",
)

const NOTE_STATS = t(
  "Contenido educativo. En México, el INEGI publica las cifras oficiales de PIB, inflación (INPC) y empleo; sus metodologías y años base se actualizan, así que verifica la versión vigente (2026). Todas las cifras de los ejemplos son hipotéticas, no datos reales.",
  "Educational content. In Mexico, INEGI publishes the official figures for GDP, inflation (INPC) and employment; its methodologies and base years are updated, so verify the current version (2026). All figures in the examples are hypothetical, not real data.",
)

const NOTE_BANXICO = t(
  "Contenido educativo basado en el marco general del Banco de México (mandato constitucional, autonomía y meta de inflación). Las tasas cambian con frecuencia y las reglas pueden modificarse: verifica la información vigente (2026) en fuentes oficiales. Las tasas de los ejemplos son hipotéticas.",
  "Educational content based on the general framework of Banco de México (constitutional mandate, autonomy and inflation target). Rates change often and rules may be modified: verify the current information (2026) in official sources. The rates in the examples are hypothetical.",
)

const NOTE_FISCAL = t(
  "Contenido educativo. Las referencias a la Secretaría de Hacienda (SHCP), a la Ley de Ingresos y al Presupuesto de Egresos de la Federación son generales; los procedimientos y montos cambian cada año, así que verifica la versión vigente (2026). Las cifras de los ejemplos son hipotéticas.",
  "Educational content. References to the Ministry of Finance (SHCP), the Federal Revenue Law and the Federal Expenditure Budget are general; procedures and amounts change every year, so verify the current version (2026). The figures in the examples are hypothetical.",
)

export const lessons: Lesson[] = [
  // ───────────────────────────── ECO-07 ─────────────────────────────
  {
    id: 'ECO-07',
    level: 1,
    topicIds: ['ECO.7'],
    title: t("Estructuras de mercado y competencia", "Market structures and competition"),
    summary: t(
      "Según cuántas empresas venden, qué tan parecidos son sus productos y qué tan fácil es entrar, un mercado puede ser de competencia perfecta, competencia monopolística, oligopolio o monopolio, y eso cambia precios y opciones para ti.",
      "Depending on how many firms sell, how similar their products are and how easy it is to enter, a market can be perfect competition, monopolistic competition, oligopoly or monopoly, and that changes prices and choices for you.",
    ),
    minutes: 16,
    objectives: [
      t("Distinguir las cuatro estructuras de mercado básicas con ejemplos de la vida diaria en México.", "Distinguish the four basic market structures with everyday examples from Mexico."),
      t("Explicar qué son las barreras a la entrada y por qué permiten a una empresa cobrar más.", "Explain what barriers to entry are and why they let a firm charge more."),
      t("Calcular e interpretar un índice sencillo de concentración (IHH).", "Compute and interpret a simple concentration index (HHI)."),
      t("Reconocer prácticas que dañan la competencia, como los acuerdos de precios entre rivales.", "Recognize practices that harm competition, such as price agreements between rivals."),
    ],
    theory: [
      {
        heading: t("¿Qué es una estructura de mercado?", "What is a market structure?"),
        body: [
          t(
            "Un **mercado** es cualquier lugar, físico o digital, donde se juntan compradores y vendedores de algo: el tianguis de los domingos, una app de comida a domicilio o la venta de boletos de avión. La **estructura de mercado** describe cómo está \"armado\" ese mercado.",
            "A **market** is any place, physical or digital, where buyers and sellers of something meet: the Sunday street market, a food delivery app or the sale of plane tickets. The **market structure** describes how that market is \"built\".",
          ),
          t(
            "Para saber qué estructura tiene un mercado, hazte tres preguntas: ¿**cuántas empresas** venden?, ¿sus productos son **iguales o distintos**?, y ¿qué tan **fácil es entrar** a competir? Las respuestas dicen cuánto **poder de mercado** tiene cada empresa, es decir, cuánto puede subir su precio sin perder a todos sus clientes.",
            "To know a market's structure, ask three questions: **how many firms** sell?, are their products **identical or different**?, and how **easy is it to enter** and compete? The answers tell you how much **market power** each firm has, that is, how much it can raise its price without losing all its customers.",
          ),
          t(
            "Mini ejemplo: en el tianguis hay diez puestos que venden el mismo jitomate. Si uno lo vende más caro, compras en el de al lado. Ese vendedor casi no tiene poder de mercado.",
            "Mini example: at the street market there are ten stalls selling the same tomatoes. If one sells them more expensively, you buy at the next stall. That seller has almost no market power.",
          ),
        ],
        bullets: [
          t("Número de vendedores: muchos, pocos o uno.", "Number of sellers: many, few or one."),
          t("Tipo de producto: idéntico (homogéneo) o diferenciado (con marca, sabor o estilo propio).", "Type of product: identical (homogeneous) or differentiated (with its own brand, flavor or style)."),
          t("Facilidad de entrada: libre o con barreras.", "Ease of entry: free or with barriers."),
          t("Poder de mercado: capacidad de fijar el precio por encima del de la competencia.", "Market power: ability to set the price above the competition's."),
        ],
      },
      {
        heading: t("Las cuatro estructuras básicas", "The four basic structures"),
        body: [
          t(
            "**Competencia perfecta**: muchísimos vendedores, producto idéntico y entrada libre. Nadie controla el precio; todos lo \"toman\" del mercado. Es un modelo ideal; los productores de granos o de jitomate en una central de abasto se le parecen. **Competencia monopolística**: muchos vendedores, pero cada uno con algo distinto (sazón, ubicación, marca). Las taquerías de una ciudad son un buen ejemplo: cada una tiene un poco de poder para cobrar más si su salsa es famosa.",
            "**Perfect competition**: a huge number of sellers, identical product and free entry. No one controls the price; everyone \"takes\" it from the market. It is an ideal model; grain or tomato growers at a wholesale market resemble it. **Monopolistic competition**: many sellers, but each with something different (taste, location, brand). A city's taco stands are a good example: each has a little power to charge more if its salsa is famous.",
          ),
          t(
            "**Oligopolio**: pocas empresas grandes dominan el mercado, como la telefonía móvil o las aerolíneas en una ruta. Cada una vigila lo que hacen las demás antes de mover sus precios. **Monopolio**: una sola empresa vende un producto sin sustitutos cercanos, como la red de agua potable de una ciudad. Existe también el **monopsonio**: un solo comprador, por ejemplo la única fábrica que compra la leche de los ranchos de una región.",
            "**Oligopoly**: a few large firms dominate the market, such as mobile phone service or airlines on a route. Each one watches what the others do before moving its prices. **Monopoly**: a single firm sells a product with no close substitutes, such as a city's drinking water network. There is also **monopsony**: a single buyer, for example the only factory that buys the milk from a region's ranches.",
          ),
          t(
            "Mini ejemplo: si en un pueblo solo hay una gasolinera, el dueño puede cobrar algo más caro porque ir a la siguiente cuesta tiempo y gasolina. Cuando abre una segunda, el precio suele bajar.",
            "Mini example: if a town has only one gas station, the owner can charge a bit more because driving to the next one costs time and fuel. When a second one opens, the price usually drops.",
          ),
        ],
      },
      {
        heading: t("Barreras a la entrada, concentración y competencia", "Barriers to entry, concentration and competition"),
        body: [
          t(
            "Una **barrera a la entrada** es cualquier cosa que hace difícil que llegue un nuevo competidor: una **inversión inicial enorme** (construir una red eléctrica), una **patente** que da derechos exclusivos por un tiempo, una **concesión o licencia** del gobierno, o **economías de escala** (producir mucho hace que cada unidad salga más barata y el pequeño no puede igualar ese costo).",
            "A **barrier to entry** is anything that makes it hard for a new competitor to arrive: a **huge initial investment** (building a power grid), a **patent** that grants exclusive rights for a time, a government **concession or license**, or **economies of scale** (producing a lot makes each unit cheaper and a small firm cannot match that cost).",
          ),
          t(
            "Para medir qué tan concentrado está un mercado se usa el **Índice Herfindahl-Hirschman (IHH)**: elevas al cuadrado la participación de mercado (en %) de cada empresa y sumas. Va de casi 0 (muchísimas empresas pequeñas) a 10,000 (monopolio: 100² = 10,000). Mientras más alto, más concentrado.",
            "To measure how concentrated a market is, we use the **Herfindahl-Hirschman Index (HHI)**: square each firm's market share (in %) and add them up. It ranges from almost 0 (a huge number of small firms) to 10,000 (monopoly: 100² = 10,000). The higher it is, the more concentrated.",
          ),
          t(
            "La competencia beneficia al consumidor: precios más bajos, más calidad y más opciones. Por eso México tiene una **ley de competencia económica** y una autoridad que investiga y sanciona **prácticas monopólicas**, como que varios competidores **se pongan de acuerdo** en precios o se repartan clientes. Mini ejemplo: dos empresas con 50 % cada una dan IHH = 50² + 50² = 5,000, un mercado muy concentrado.",
            "Competition benefits consumers: lower prices, better quality and more choices. That is why Mexico has an **economic competition law** and an authority that investigates and penalizes **monopolistic practices**, such as competitors **agreeing** on prices or splitting up customers. Mini example: two firms with 50% each give HHI = 50² + 50² = 5,000, a very concentrated market.",
          ),
        ],
        formulas: [
          {
            name: t("Índice Herfindahl-Hirschman (IHH): qué tan concentrado está un mercado", "Herfindahl-Hirschman Index (HHI): how concentrated a market is"),
            expression: "IHH = s1² + s2² + … + sn²",
            variables: [
              { symbol: "s1, s2, … sn", meaning: t("La participación de mercado de cada empresa, en % escrito como número entero (40 % se escribe 40, no 0.40).", "Each firm's market share, in % written as a whole number (40% is written 40, not 0.40).") },
              { symbol: "²", meaning: t("Elevar al cuadrado: multiplicar el número por sí mismo (40² = 40 × 40 = 1,600).", "Squaring: multiplying the number by itself (40² = 40 × 40 = 1,600).") },
              { symbol: "n", meaning: t("El número de empresas del mercado.", "The number of firms in the market.") },
              { symbol: "IHH", meaning: t("El índice resultante, sin unidades: de casi 0 a 10,000.", "The resulting index, with no units: from almost 0 to 10,000.") },
            ],
            steps: [
              t("Anota la participación de cada empresa en % (deben sumar 100).", "Write down each firm's share in % (they should add up to 100)."),
              t("Eleva al cuadrado cada participación por separado.", "Square each share separately."),
              t("Suma todos los cuadrados: ese es el IHH.", "Add up all the squares: that is the HHI."),
            ],
            example: t(
              "Cuatro empresas de refrescos con 45 %, 25 %, 20 % y 10 %. Cuadrados: 45² = 2,025; 25² = 625; 20² = 400; 10² = 100. Suma: 2,025 + 625 + 400 + 100 = **3,150**.",
              "Four soft-drink firms with 45%, 25%, 20% and 10%. Squares: 45² = 2,025; 25² = 625; 20² = 400; 10² = 100. Sum: 2,025 + 625 + 400 + 100 = **3,150**.",
            ),
            interpret: t(
              "Mientras más alto, más concentrado: 10,000 es un monopolio (100²) y un número cercano a 0 indica muchísimas empresas pequeñas. Un IHH de varios miles indica pocas empresas con mucho poder, como en un oligopolio.",
              "The higher, the more concentrated: 10,000 is a monopoly (100²) and a number close to 0 means a huge number of small firms. An HHI of several thousand means a few firms with a lot of power, as in an oligopoly.",
            ),
            mistake: t(
              "Sumar las participaciones (siempre da 100) o sumar primero y luego elevar al cuadrado. Primero se eleva cada una y después se suma.",
              "Adding the shares (always gives 100) or adding first and then squaring. First square each one, then add.",
            ),
          },
        ],
      },
    ],
    examples: [
      {
        title: t("Calcular el IHH de un mercado de cemento regional", "Computing the HHI of a regional cement market"),
        problem: t(
          "En una región hipotética venden cemento cuatro empresas con participaciones de 50 %, 25 %, 15 % y 10 %. Calcula el IHH e interprétalo.",
          "In a hypothetical region, four firms sell cement with shares of 50%, 25%, 15% and 10%. Compute the HHI and interpret it.",
        ),
        steps: [
          t("Eleva cada participación al cuadrado: 50² = 2,500; 25² = 625; 15² = 225; 10² = 100.", "Square each share: 50² = 2,500; 25² = 625; 15² = 225; 10² = 100."),
          t("Suma: 2,500 + 625 + 225 + 100 = 3,450.", "Add: 2,500 + 625 + 225 + 100 = 3,450."),
          t("Compara con la escala: 10,000 es monopolio; un número cercano a 0 es mercado muy disperso.", "Compare with the scale: 10,000 is a monopoly; a number near 0 is a very dispersed market."),
        ],
        result: t(
          "IHH = 3,450: un mercado concentrado, típico de un oligopolio. La empresa con 50 % aporta la mayor parte del índice.",
          "HHI = 3,450: a concentrated market, typical of an oligopoly. The firm with 50% contributes most of the index.",
        ),
      },
      {
        title: t("¿Qué estructura es la cafetería de tu colonia?", "Which structure is your neighborhood coffee shop?"),
        problem: t(
          "En tu colonia hay doce cafeterías. Cada una tiene su propio estilo, menú y ambiente. Abrir una nueva no requiere permisos especiales más allá de los normales. ¿Qué estructura de mercado es y qué implica para los precios?",
          "Your neighborhood has twelve coffee shops. Each has its own style, menu and atmosphere. Opening a new one requires no special permits beyond the usual ones. Which market structure is it, and what does it imply for prices?",
        ),
        steps: [
          t("¿Cuántos vendedores? Muchos (doce).", "How many sellers? Many (twelve)."),
          t("¿Producto igual o distinto? Distinto: cada una se diferencia.", "Identical or different product? Different: each one stands out."),
          t("¿Entrada fácil? Sí, no hay barreras importantes.", "Easy entry? Yes, there are no major barriers."),
          t("Muchos vendedores + producto diferenciado + entrada libre = competencia monopolística.", "Many sellers + differentiated product + free entry = monopolistic competition."),
        ],
        result: t(
          "Es competencia monopolística: cada cafetería puede cobrar un poco más si sus clientes valoran su estilo, pero si exagera, la gente se va a otra.",
          "It is monopolistic competition: each coffee shop can charge a bit more if its customers value its style, but if it overdoes it, people go elsewhere.",
        ),
      },
    ],
    keyPoints: [
      t("La estructura de mercado depende del número de vendedores, del tipo de producto y de la facilidad de entrada.", "Market structure depends on the number of sellers, the type of product and the ease of entry."),
      t("Competencia perfecta y competencia monopolística tienen muchos vendedores; el oligopolio, pocos; el monopolio, uno.", "Perfect competition and monopolistic competition have many sellers; oligopoly, a few; monopoly, one."),
      t("Las barreras a la entrada (inversión alta, patentes, concesiones, economías de escala) dan poder de mercado.", "Barriers to entry (high investment, patents, concessions, economies of scale) give market power."),
      t("El IHH suma los cuadrados de las participaciones: más alto significa más concentración (máximo 10,000).", "The HHI adds the squares of market shares: higher means more concentration (maximum 10,000)."),
      t("Los acuerdos de precios entre competidores son prácticas monopólicas que la ley prohíbe.", "Price agreements between competitors are monopolistic practices that the law prohibits."),
    ],
    normativeNote: NOTE_COMPETITION,
    exerciseIds: ['ECO-07-E1', 'ECO-07-E2', 'ECO-07-E3', 'ECO-07-E4', 'ECO-07-E5', 'ECO-07-E6'],
  },

  // ───────────────────────────── ECO-08 ─────────────────────────────
  {
    id: 'ECO-08',
    level: 1,
    topicIds: ['ECO.8'],
    title: t("Producto Interno Bruto (PIB)", "Gross Domestic Product (GDP)"),
    summary: t(
      "El PIB es el valor de todos los bienes y servicios finales producidos dentro de un país en un periodo; se puede medir por producción, gasto o ingreso, y conviene verlo en términos reales y por persona.",
      "GDP is the value of all final goods and services produced within a country in a period; it can be measured by production, spending or income, and it is best viewed in real terms and per person.",
    ),
    minutes: 17,
    objectives: [
      t("Definir el PIB e identificar qué se cuenta y qué no.", "Define GDP and identify what is counted and what is not."),
      t("Calcular el PIB con el método del gasto y con el valor agregado.", "Compute GDP with the expenditure method and with value added."),
      t("Distinguir PIB nominal, PIB real y PIB per cápita.", "Distinguish nominal GDP, real GDP and GDP per capita."),
    ],
    theory: [
      {
        heading: t("¿Qué mide el PIB?", "What does GDP measure?"),
        body: [
          t(
            "El **Producto Interno Bruto (PIB)** es el **valor en dinero** de todos los **bienes y servicios finales** que se producen **dentro del país** durante un periodo (un trimestre o un año). Es como la \"venta total\" de toda la economía. En México lo calcula el **INEGI**.",
            "**Gross Domestic Product (GDP)** is the **money value** of all **final goods and services** produced **within the country** during a period (a quarter or a year). It is like the \"total sales\" of the whole economy. In Mexico it is computed by **INEGI**.",
          ),
          t(
            "Cada palabra importa. **Interno**: cuenta lo que se produce en territorio mexicano, aunque la empresa sea extranjera; un auto armado en Puebla por una armadora alemana sí cuenta. **Final**: solo lo que llega al usuario final; la harina que compra la panadería no se suma aparte, porque ya va incluida en el precio del pan. **Producido en el periodo**: revender un auto usado no es producción nueva.",
            "Every word matters. **Domestic**: it counts what is produced on Mexican territory, even if the firm is foreign; a car assembled in Puebla by a German automaker does count. **Final**: only what reaches the end user; the flour the bakery buys is not added separately, because it is already included in the bread's price. **Produced in the period**: reselling a used car is not new production.",
          ),
          t(
            "Mini ejemplo: si compras acciones de una empresa, no se produjo nada nuevo; solo cambió de dueño un papel. Eso no suma al PIB. Pero la comisión que cobra la casa de bolsa sí es un servicio producido.",
            "Mini example: if you buy shares of a company, nothing new was produced; a paper just changed owners. That does not add to GDP. But the fee the brokerage charges is a service produced.",
          ),
        ],
        bullets: [
          t("Sí cuenta: bienes y servicios finales nuevos producidos en el país.", "Counts: new final goods and services produced in the country."),
          t("No cuenta: bienes intermedios por separado (evita contar doble).", "Does not count: intermediate goods separately (avoids double counting)."),
          t("No cuenta: reventa de bienes usados ni compra de acciones o terrenos ya existentes.", "Does not count: resale of used goods or purchases of existing shares or land."),
          t("No cuenta: transferencias como becas o pensiones (no son pago por producir).", "Does not count: transfers such as scholarships or pensions (they are not payment for producing)."),
        ],
      },
      {
        heading: t("Tres formas de medirlo", "Three ways to measure it"),
        body: [
          t(
            "Todo lo que se produce, alguien lo compra, y lo que se paga se vuelve ingreso de alguien. Por eso el PIB se puede medir de tres formas que, en teoría, dan el mismo resultado.",
            "Everything produced is bought by someone, and what is paid becomes someone's income. That is why GDP can be measured in three ways that, in theory, give the same result.",
          ),
          t(
            "**Método de la producción (valor agregado)**: sumas lo que **agrega** cada etapa: precio de venta menos lo que compró a otros productores. **Método del gasto**: sumas lo que gastan los hogares (**consumo, C**), las empresas en maquinaria y construcción (**inversión, I**), el **gobierno (G)** y las **exportaciones netas** (exportaciones X menos importaciones M). **Método del ingreso**: sumas sueldos, ganancias de las empresas y otros ingresos generados al producir.",
            "**Production method (value added)**: you add what each stage **adds**: selling price minus what it bought from other producers. **Expenditure method**: you add what households spend (**consumption, C**), what firms spend on machinery and construction (**investment, I**), the **government (G)** and **net exports** (exports X minus imports M). **Income method**: you add wages, business profits and other income generated by producing.",
          ),
          t(
            "Las importaciones se **restan** porque se produjeron en otro país: si compras un celular hecho en Asia, ese gasto está dentro de C, pero no es producción mexicana. Mini ejemplo: un agricultor vende maíz por $10 a un molino; el molino vende masa por $18 a una tortillería, que vende tortillas por $30. Valor agregado: 10 + 8 + 12 = $30, igual al precio final.",
            "Imports are **subtracted** because they were produced in another country: if you buy a phone made in Asia, that spending is inside C, but it is not Mexican production. Mini example: a farmer sells corn for $10 to a mill; the mill sells dough for $18 to a tortilla shop, which sells tortillas for $30. Value added: 10 + 8 + 12 = $30, equal to the final price.",
          ),
        ],
        formulas: [
          {
            name: t("PIB por el método del gasto", "GDP by the expenditure method"),
            expression: "PIB = C + I + G + (X − M)",
            variables: [
              { symbol: "PIB", meaning: t("Producto Interno Bruto: el valor de todo lo producido en el país, en pesos.", "Gross Domestic Product: the value of everything produced in the country, in pesos.") },
              { symbol: "C", meaning: t("Consumo: lo que gastan los hogares en bienes y servicios, en pesos.", "Consumption: what households spend on goods and services, in pesos.") },
              { symbol: "I", meaning: t("Inversión: lo que gastan las empresas en maquinaria, equipo y construcción, en pesos.", "Investment: what firms spend on machinery, equipment and construction, in pesos.") },
              { symbol: "G", meaning: t("Gasto del gobierno en bienes y servicios, en pesos.", "Government spending on goods and services, in pesos.") },
              { symbol: "X", meaning: t("Exportaciones: lo que el país vende al extranjero, en pesos.", "Exports: what the country sells abroad, in pesos.") },
              { symbol: "M", meaning: t("Importaciones: lo que el país compra al extranjero, en pesos.", "Imports: what the country buys from abroad, in pesos.") },
            ],
            steps: [
              t("Calcula las exportaciones netas: X − M (puede salir negativo).", "Compute net exports: X − M (it can be negative)."),
              t("Suma C + I + G.", "Add C + I + G."),
              t("Agrega las exportaciones netas a esa suma.", "Add net exports to that sum."),
            ],
            example: t(
              "C = 500, I = 120, G = 100, X = 180, M = 150 (miles de millones). Exportaciones netas: 180 − 150 = 30. C + I + G: 500 + 120 + 100 = 720. PIB: 720 + 30 = **750 miles de millones**.",
              "C = 500, I = 120, G = 100, X = 180, M = 150 (billions). Net exports: 180 − 150 = 30. C + I + G: 500 + 120 + 100 = 720. GDP: 720 + 30 = **750 billion**.",
            ),
            mistake: t(
              "Sumar las importaciones en lugar de restarlas. Lo importado se produjo en otro país, así que no es PIB de México.",
              "Adding imports instead of subtracting them. What is imported was produced in another country, so it is not Mexico's GDP.",
            ),
          },
          {
            name: t("Valor agregado de cada etapa (método de la producción)", "Value added at each stage (production method)"),
            expression: "Valor agregado = Precio de venta − Compras a otros productores;  PIB de la cadena = suma de los valores agregados",
            variables: [
              { symbol: "Precio de venta", meaning: t("Lo que cobra esa etapa por lo que vende, en pesos.", "What that stage charges for what it sells, in pesos.") },
              { symbol: "Compras a otros productores", meaning: t("Lo que esa etapa pagó por los insumos que compró (bienes intermedios), en pesos.", "What that stage paid for the inputs it bought (intermediate goods), in pesos.") },
              { symbol: "Valor agregado", meaning: t("Lo que esa etapa le sumó al producto con su trabajo, en pesos.", "What that stage added to the product with its work, in pesos.") },
            ],
            steps: [
              t("Para cada etapa, resta lo que compró al precio al que vendió.", "For each stage, subtract what it bought from the price it sold at."),
              t("La primera etapa, si no compró insumos, agrega todo su precio de venta.", "The first stage, if it bought no inputs, adds its whole selling price."),
              t("Suma los valores agregados de todas las etapas; debe dar el precio del bien final.", "Add the value added of all stages; it should equal the final good's price."),
            ],
            example: t(
              "Un agricultor vende algodón en $15 a una hilandería; la hilandería vende hilo en $28 a un taller; el taller vende una playera en $50. Agricultor: $15. Hilandería: 28 − 15 = $13. Taller: 50 − 28 = $22. Total: 15 + 13 + 22 = **$50**, igual al precio de la playera.",
              "A farmer sells cotton for $15 to a spinning mill; the mill sells yarn for $28 to a workshop; the workshop sells a T-shirt for $50. Farmer: $15. Mill: 28 − 15 = $13. Workshop: 50 − 28 = $22. Total: 15 + 13 + 22 = **$50**, equal to the T-shirt's price.",
            ),
            mistake: t(
              "Sumar todas las ventas (15 + 28 + 50 = $93). Así cuentas el algodón y el hilo varias veces (doble conteo).",
              "Adding up all the sales (15 + 28 + 50 = $93). That way you count the cotton and the yarn several times (double counting).",
            ),
          },
        ],
      },
      {
        heading: t("PIB nominal, real y per cápita", "Nominal, real and per capita GDP"),
        body: [
          t(
            "El **PIB nominal** usa los precios de cada año. Si los precios suben, el PIB nominal crece aunque se produzca lo mismo. El **PIB real** quita el efecto de los precios usando precios de un **año base**; así ves si de verdad se produjo más.",
            "**Nominal GDP** uses each year's prices. If prices rise, nominal GDP grows even if the same amount is produced. **Real GDP** removes the price effect by using **base-year** prices; that way you see whether more was really produced.",
          ),
          t(
            "Para pasar de nominal a real se usa el **deflactor del PIB**, un índice de precios donde el año base vale 100. El **PIB per cápita** divide el PIB entre la población: da una idea del ingreso promedio por persona, aunque no dice cómo se reparte ni mide cosas como el trabajo en casa o la contaminación.",
            "To go from nominal to real we use the **GDP deflator**, a price index where the base year equals 100. **GDP per capita** divides GDP by the population: it gives an idea of average income per person, although it does not say how it is distributed nor measure things like housework or pollution.",
          ),
          t(
            "Mini ejemplo: un país produce 100 pasteles a $10 (PIB $1,000). Al año siguiente produce los mismos 100, pero a $12. El PIB nominal sube a $1,200 (+20 %), pero el real no cambió: solo subieron los precios.",
            "Mini example: a country produces 100 cakes at $10 (GDP $1,000). The next year it produces the same 100, but at $12. Nominal GDP rises to $1,200 (+20%), but real GDP did not change: only prices went up.",
          ),
        ],
        formulas: [
          {
            name: t("PIB real y crecimiento real", "Real GDP and real growth"),
            expression: "PIB real = PIB nominal ÷ (Deflactor ÷ 100);  Crecimiento real % = (PIB real final ÷ PIB real inicial − 1) × 100",
            variables: [
              { symbol: "PIB nominal", meaning: t("El PIB medido con los precios de ese mismo año, en pesos.", "GDP measured at that same year's prices, in pesos.") },
              { symbol: "Deflactor", meaning: t("Índice de precios del PIB; vale 100 en el año base. Un deflactor de 110 significa que los precios están 10 % arriba del año base.", "GDP price index; it equals 100 in the base year. A deflator of 110 means prices are 10% above the base year.") },
              { symbol: "PIB real", meaning: t("El PIB a precios del año base, en pesos: muestra cuánto se produjo de verdad.", "GDP at base-year prices, in pesos: shows how much was really produced.") },
              { symbol: "Crecimiento real %", meaning: t("Cuánto cambió la producción real de un año a otro, en %.", "How much real production changed from one year to the next, in %.") },
            ],
            steps: [
              t("Divide el deflactor entre 100: 120 → 1.20.", "Divide the deflator by 100: 120 → 1.20."),
              t("Divide el PIB nominal entre ese número: obtienes el PIB real.", "Divide nominal GDP by that number: you get real GDP."),
              t("Divide el PIB real nuevo entre el PIB real anterior, resta 1 y multiplica por 100.", "Divide the new real GDP by the previous real GDP, subtract 1 and multiply by 100."),
            ],
            example: t(
              "PIB nominal del año 2: $3,300 millones; deflactor 120; PIB real del año 1: $2,500 millones. Deflactor ÷ 100 = 1.20. PIB real: 3,300 ÷ 1.20 = $2,750 millones. Crecimiento: (2,750 ÷ 2,500 − 1) × 100 = (1.10 − 1) × 100 = **10 %**.",
              "Year-2 nominal GDP: $3,300 million; deflator 120; year-1 real GDP: $2,500 million. Deflator ÷ 100 = 1.20. Real GDP: 3,300 ÷ 1.20 = $2,750 million. Growth: (2,750 ÷ 2,500 − 1) × 100 = (1.10 − 1) × 100 = **10%**.",
            ),
            interpret: t(
              "Si el crecimiento real es positivo, se produjo más; si es negativo, la economía se contrajo. La diferencia entre crecimiento nominal y real es el efecto de los precios.",
              "If real growth is positive, more was produced; if negative, the economy shrank. The gap between nominal and real growth is the price effect.",
            ),
            mistake: t(
              "Comparar el PIB nominal de un año con el real de otro: mezclas aumento de precios con aumento de producción.",
              "Comparing one year's nominal GDP with another year's real GDP: you mix price increases with production increases.",
            ),
          },
          {
            name: t("PIB per cápita", "GDP per capita"),
            expression: "PIB per cápita = PIB ÷ Población",
            variables: [
              { symbol: "PIB", meaning: t("El PIB del país en el periodo, en pesos.", "The country's GDP for the period, in pesos.") },
              { symbol: "Población", meaning: t("El número de habitantes del país.", "The number of people living in the country.") },
              { symbol: "PIB per cápita", meaning: t("Pesos de PIB por persona: un promedio, no lo que gana cada quien.", "Pesos of GDP per person: an average, not what each person earns.") },
            ],
            steps: [
              t("Expresa el PIB y la población en las mismas unidades (por ejemplo, ambos en millones).", "Express GDP and population in the same units (e.g. both in millions)."),
              t("Divide el PIB entre la población.", "Divide GDP by the population."),
            ],
            example: t(
              "PIB de $1,800,000 millones y 120 millones de habitantes: 1,800,000 ÷ 120 = **$15,000 por persona**.",
              "GDP of $1,800,000 million and 120 million people: 1,800,000 ÷ 120 = **$15,000 per person**.",
            ),
            mistake: t(
              "Creer que es el ingreso de cada persona. Es un promedio: no dice cómo se reparte.",
              "Thinking it is each person's income. It is an average: it does not say how it is distributed.",
            ),
          },
        ],
      },
    ],
    examples: [
      {
        title: t("PIB por el método del gasto", "GDP by the expenditure method"),
        problem: t(
          "Una economía hipotética tiene (en miles de millones de pesos): consumo 700, inversión 180, gasto del gobierno 150, exportaciones 260 e importaciones 290. Calcula el PIB.",
          "A hypothetical economy has (in billions of pesos): consumption 700, investment 180, government spending 150, exports 260 and imports 290. Compute GDP.",
        ),
        steps: [
          t("Exportaciones netas: X − M = 260 − 290 = −30.", "Net exports: X − M = 260 − 290 = −30."),
          t("Suma C + I + G: 700 + 180 + 150 = 1,030.", "Add C + I + G: 700 + 180 + 150 = 1,030."),
          t("Agrega las exportaciones netas: 1,030 + (−30) = 1,000.", "Add net exports: 1,030 + (−30) = 1,000."),
        ],
        result: t(
          "PIB = 1,000 miles de millones. Como importó más de lo que exportó, las exportaciones netas restan.",
          "GDP = 1,000 billion. Since it imported more than it exported, net exports subtract.",
        ),
      },
      {
        title: t("¿Creció de verdad la economía?", "Did the economy really grow?"),
        problem: t(
          "En el año 1 (año base) el PIB nominal fue $5,000 millones. En el año 2 fue $5,775 millones, con un deflactor de 105. ¿Cuánto creció el PIB real?",
          "In year 1 (base year) nominal GDP was $5,000 million. In year 2 it was $5,775 million, with a deflator of 105. How much did real GDP grow?",
        ),
        steps: [
          t("En el año base, PIB real = PIB nominal = 5,000.", "In the base year, real GDP = nominal GDP = 5,000."),
          t("PIB real año 2 = 5,775 ÷ 1.05 = 5,500.", "Real GDP year 2 = 5,775 ÷ 1.05 = 5,500."),
          t("Crecimiento real = (5,500 ÷ 5,000 − 1) × 100 = 10 %.", "Real growth = (5,500 ÷ 5,000 − 1) × 100 = 10%."),
          t("Compara: el nominal creció (5,775 ÷ 5,000 − 1) × 100 = 15.5 %; la diferencia se debe a precios.", "Compare: nominal grew (5,775 ÷ 5,000 − 1) × 100 = 15.5%; the difference is due to prices."),
        ],
        result: t(
          "La producción real creció 10 %; el resto del aumento nominal fue solo por precios más altos.",
          "Real production grew 10%; the rest of the nominal increase was just higher prices.",
        ),
      },
    ],
    keyPoints: [
      t("El PIB es el valor de los bienes y servicios finales producidos dentro del país en un periodo.", "GDP is the value of final goods and services produced within the country in a period."),
      t("No se cuentan bienes intermedios por separado, reventas, compras de activos existentes ni transferencias.", "Intermediate goods separately, resales, purchases of existing assets and transfers are not counted."),
      t("Método del gasto: PIB = C + I + G + (X − M); las importaciones se restan.", "Expenditure method: GDP = C + I + G + (X − M); imports are subtracted."),
      t("El valor agregado de todas las etapas suma lo mismo que el precio del bien final.", "The value added of all stages adds up to the final good's price."),
      t("El PIB real quita el efecto de los precios; el per cápita lo divide entre la población.", "Real GDP removes the price effect; per capita divides it by the population."),
    ],
    normativeNote: NOTE_STATS,
    exerciseIds: ['ECO-08-E1', 'ECO-08-E2', 'ECO-08-E3', 'ECO-08-E4', 'ECO-08-E5', 'ECO-08-E6'],
  },

  // ───────────────────────────── ECO-09 ─────────────────────────────
  {
    id: 'ECO-09',
    level: 1,
    topicIds: ['ECO.9'],
    title: t("Inflación, empleo y crecimiento económico", "Inflation, employment and economic growth"),
    summary: t(
      "La inflación mide qué tan rápido suben los precios, el desempleo cuántas personas buscan trabajo sin encontrarlo y el crecimiento cuánto aumenta la producción real: juntos dicen cómo le va a la economía y a tu bolsillo.",
      "Inflation measures how fast prices rise, unemployment how many people look for work without finding it, and growth how much real production increases: together they tell how the economy and your wallet are doing.",
    ),
    minutes: 18,
    objectives: [
      t("Calcular la inflación con un índice de precios y explicar su efecto en el poder adquisitivo.", "Compute inflation with a price index and explain its effect on purchasing power."),
      t("Clasificar a las personas como ocupadas, desocupadas o fuera de la fuerza laboral y calcular la tasa de desempleo.", "Classify people as employed, unemployed or outside the labor force and compute the unemployment rate."),
      t("Calcular una tasa de crecimiento y estimar con la regla del 70 cuánto tarda algo en duplicarse.", "Compute a growth rate and estimate with the rule of 70 how long something takes to double."),
    ],
    theory: [
      {
        heading: t("Inflación y poder adquisitivo", "Inflation and purchasing power"),
        body: [
          t(
            "La **inflación** es el aumento **generalizado y sostenido** de los precios. No es que suba solo el aguacate un mes; es que, en promedio, casi todo cuesta más con el tiempo. En México se mide con el **Índice Nacional de Precios al Consumidor (INPC)**, que sigue el precio de una \"canasta\" de bienes y servicios que compran los hogares.",
            "**Inflation** is the **general and sustained** rise in prices. It is not just avocados going up one month; it is that, on average, almost everything costs more over time. In Mexico it is measured with the **National Consumer Price Index (INPC)**, which tracks the price of a \"basket\" of goods and services households buy.",
          ),
          t(
            "La inflación reduce tu **poder adquisitivo**: lo que puedes comprar con tu dinero. Si tu sueldo sube 4 % pero los precios suben 6 %, en realidad puedes comprar **menos** que antes. Por eso importa distinguir el **salario nominal** (los pesos que recibes) del **salario real** (lo que esos pesos compran).",
            "Inflation reduces your **purchasing power**: what you can buy with your money. If your salary rises 4% but prices rise 6%, you can actually buy **less** than before. That is why it matters to distinguish the **nominal wage** (the pesos you receive) from the **real wage** (what those pesos buy).",
          ),
          t(
            "Lo contrario es la **deflación** (los precios bajan en general), que también es problemática porque la gente pospone compras. Mini ejemplo: si el INPC pasa de 100 a 104, la inflación del periodo es (104 ÷ 100 − 1) × 100 = 4 %.",
            "The opposite is **deflation** (prices fall in general), which is also problematic because people postpone purchases. Mini example: if the INPC goes from 100 to 104, the period's inflation is (104 ÷ 100 − 1) × 100 = 4%.",
          ),
        ],
        formulas: [
          {
            name: t("Inflación con un índice de precios", "Inflation from a price index"),
            expression: "Inflación % = (INPC final ÷ INPC inicial − 1) × 100",
            variables: [
              { symbol: "INPC inicial", meaning: t("El valor del índice de precios al inicio del periodo (sin unidades).", "The price index value at the start of the period (no units).") },
              { symbol: "INPC final", meaning: t("El valor del índice al final del periodo.", "The index value at the end of the period.") },
              { symbol: "Inflación %", meaning: t("Cuánto subieron los precios en promedio durante el periodo, en %.", "How much prices rose on average during the period, in %.") },
            ],
            steps: [
              t("Divide el índice final entre el inicial.", "Divide the final index by the initial one."),
              t("Resta 1 al resultado.", "Subtract 1 from the result."),
              t("Multiplica por 100 para tenerlo en %.", "Multiply by 100 to express it in %."),
            ],
            example: t(
              "El índice pasa de 80 a 86. División: 86 ÷ 80 = 1.075. Menos 1: 0.075. Por 100: **7.5 %** de inflación.",
              "The index goes from 80 to 86. Division: 86 ÷ 80 = 1.075. Minus 1: 0.075. Times 100: **7.5%** inflation.",
            ),
            interpret: t(
              "Positiva = los precios subieron (inflación); negativa = bajaron (deflación).",
              "Positive = prices rose (inflation); negative = they fell (deflation).",
            ),
            mistake: t(
              "Restar los índices (86 − 80 = 6) y decir 6 %. Eso solo funciona si el índice inicial es exactamente 100.",
              "Subtracting the indices (86 − 80 = 6) and saying 6%. That only works if the initial index is exactly 100.",
            ),
          },
          {
            name: t("Salario real y cambio real del sueldo", "Real wage and real change in pay"),
            expression: "Salario real = Salario nominal ÷ (INPC ÷ 100);  Cambio real % = (Salario real ÷ Salario inicial − 1) × 100",
            variables: [
              { symbol: "Salario nominal", meaning: t("Los pesos que recibes hoy.", "The pesos you receive today.") },
              { symbol: "INPC", meaning: t("El índice de precios de hoy, tomando 100 como el inicio del periodo.", "Today's price index, taking 100 as the start of the period.") },
              { symbol: "Salario real", meaning: t("Lo que vale tu sueldo de hoy en pesos del inicio del periodo (lo que realmente puedes comprar).", "What today's pay is worth in start-of-period pesos (what you can really buy).") },
              { symbol: "Salario inicial", meaning: t("Tu sueldo al inicio del periodo, en pesos.", "Your pay at the start of the period, in pesos.") },
              { symbol: "Cambio real %", meaning: t("Cuánto ganaste o perdiste de poder de compra, en %.", "How much purchasing power you gained or lost, in %.") },
            ],
            steps: [
              t("Divide el INPC entre 100: 105 → 1.05.", "Divide the INPC by 100: 105 → 1.05."),
              t("Divide tu sueldo nuevo entre ese número: es tu salario real.", "Divide your new pay by that number: that is your real wage."),
              t("Compáralo con tu sueldo inicial: (salario real ÷ salario inicial − 1) × 100.", "Compare it with your initial pay: (real wage ÷ initial pay − 1) × 100."),
            ],
            example: t(
              "Ganabas $15,000 y ahora $15,450 (+3 % nominal); el índice pasó de 100 a 105. Salario real: 15,450 ÷ 1.05 ≈ $14,714.29. Cambio real: (14,714.29 ÷ 15,000 − 1) × 100 ≈ **−1.90 %**: perdiste poder de compra.",
              "You earned $15,000 and now $15,450 (+3% nominal); the index went from 100 to 105. Real wage: 15,450 ÷ 1.05 ≈ $14,714.29. Real change: (14,714.29 ÷ 15,000 − 1) × 100 ≈ **−1.90%**: you lost purchasing power.",
            ),
            interpret: t(
              "Si el cambio real es positivo, tu sueldo subió más que los precios; si es negativo, aunque te den más pesos, compras menos.",
              "If the real change is positive, your pay rose more than prices; if negative, even though you get more pesos, you buy less.",
            ),
            mistake: t(
              "Restar aumento − inflación (3 − 5 = −2 %) y darlo como exacto. Es solo una aproximación; el cálculo exacto se hace dividiendo.",
              "Subtracting raise − inflation (3 − 5 = −2%) and giving it as exact. It is only an approximation; the exact calculation is done by dividing.",
            ),
          },
        ],
      },
      {
        heading: t("Empleo y desempleo", "Employment and unemployment"),
        body: [
          t(
            "No todos los adultos cuentan para medir el desempleo. La **Población Económicamente Activa (PEA)** son quienes **trabajan** (población **ocupada**) más quienes **no trabajan pero buscan activamente** empleo (población **desocupada**). Quien no trabaja ni busca, como un estudiante de tiempo completo o una persona jubilada, está en la **Población No Económicamente Activa (PNEA)**.",
            "Not all adults count when measuring unemployment. The **Economically Active Population (PEA)** is those who **work** (the **employed**) plus those who **do not work but actively seek** a job (the **unemployed**). Someone who neither works nor looks for work, such as a full-time student or a retired person, is in the **Not Economically Active Population (PNEA)**.",
          ),
          t(
            "La **tasa de desempleo** (o de desocupación) es el porcentaje de la PEA que está desocupada. En México, el INEGI la mide con una encuesta de hogares. Ojo: una tasa baja no garantiza buenos empleos; también importa la **informalidad** (trabajos sin seguridad social ni prestaciones), que en México es muy alta.",
            "The **unemployment rate** is the percentage of the PEA that is unemployed. In Mexico, INEGI measures it with a household survey. Note: a low rate does not guarantee good jobs; **informality** also matters (jobs without social security or benefits), which is very high in Mexico.",
          ),
          t(
            "Mini ejemplo: en un pueblo hay 2,000 personas en la PEA y 100 buscan trabajo sin encontrarlo. Tasa de desempleo = 100 ÷ 2,000 × 100 = 5 %.",
            "Mini example: a town has 2,000 people in the PEA and 100 are looking for work without finding it. Unemployment rate = 100 ÷ 2,000 × 100 = 5%.",
          ),
        ],
        formulas: [
          {
            name: t("Tasa de desempleo", "Unemployment rate"),
            expression: "PEA = Ocupados + Desocupados;  Tasa de desempleo % = Desocupados ÷ PEA × 100",
            variables: [
              { symbol: "Ocupados", meaning: t("Personas que tienen trabajo.", "People who have a job.") },
              { symbol: "Desocupados", meaning: t("Personas sin trabajo que lo buscan activamente.", "People without a job who are actively looking for one.") },
              { symbol: "PEA", meaning: t("Población Económicamente Activa: ocupados más desocupados. No incluye a quien ni trabaja ni busca.", "Economically Active Population: employed plus unemployed. It excludes those who neither work nor look for work.") },
              { symbol: "Tasa de desempleo %", meaning: t("Qué parte de la PEA no encuentra trabajo, en %.", "What share of the PEA cannot find work, in %.") },
            ],
            steps: [
              t("Calcula la PEA: suma ocupados + desocupados (deja fuera estudiantes, jubilados y quien no busca).", "Compute the PEA: add employed + unemployed (leave out students, retirees and anyone not looking)."),
              t("Divide los desocupados entre la PEA.", "Divide the unemployed by the PEA."),
              t("Multiplica por 100.", "Multiply by 100."),
            ],
            example: t(
              "Hay 2,880,000 ocupados, 120,000 desocupados y 900,000 que no buscan trabajo. PEA: 2,880,000 + 120,000 = 3,000,000. Tasa: 120,000 ÷ 3,000,000 = 0.04 × 100 = **4 %**.",
              "There are 2,880,000 employed, 120,000 unemployed and 900,000 not looking for work. PEA: 2,880,000 + 120,000 = 3,000,000. Rate: 120,000 ÷ 3,000,000 = 0.04 × 100 = **4%**.",
            ),
            mistake: t(
              "Dividir entre toda la población (o sumar a quienes no buscan trabajo). Solo se divide entre la PEA.",
              "Dividing by the whole population (or adding those not looking for work). You only divide by the PEA.",
            ),
          },
        ],
      },
      {
        heading: t("Crecimiento económico", "Economic growth"),
        body: [
          t(
            "El **crecimiento económico** es el aumento del **PIB real** de un periodo a otro. Cuando el PIB real cae durante un tiempo, se habla de **recesión**. La economía no crece en línea recta: alterna épocas buenas y malas, el llamado **ciclo económico**.",
            "**Economic growth** is the increase in **real GDP** from one period to another. When real GDP falls for a while, we speak of a **recession**. The economy does not grow in a straight line: it alternates good and bad times, the so-called **business cycle**.",
          ),
          t(
            "A largo plazo, un país crece si tiene más trabajadores, más **capital** (máquinas, carreteras), mejor **capital humano** (educación, salud) y mejor **tecnología**. Pequeñas diferencias en la tasa de crecimiento se vuelven enormes con los años, como el interés compuesto.",
            "In the long run, a country grows if it has more workers, more **capital** (machines, roads), better **human capital** (education, health) and better **technology**. Small differences in the growth rate become huge over the years, like compound interest.",
          ),
          t(
            "La **regla del 70** da un atajo: divide 70 entre la tasa de crecimiento anual y obtienes, aproximadamente, los años que tarda en duplicarse. Mini ejemplo: con 2 % anual, el PIB se duplica en unos 70 ÷ 2 = 35 años; con 7 %, en unos 10.",
            "The **rule of 70** gives a shortcut: divide 70 by the annual growth rate and you get, approximately, the years it takes to double. Mini example: at 2% a year, GDP doubles in about 70 ÷ 2 = 35 years; at 7%, in about 10.",
          ),
        ],
        bullets: [
          t("Crecimiento % = (PIB real final ÷ PIB real inicial − 1) × 100.", "Growth % = (final real GDP ÷ initial real GDP − 1) × 100."),
          t("Años para duplicarse ≈ 70 ÷ tasa de crecimiento anual (%).", "Years to double ≈ 70 ÷ annual growth rate (%)."),
          t("Fuentes de crecimiento: trabajo, capital, capital humano y tecnología.", "Sources of growth: labor, capital, human capital and technology."),
        ],
        formulas: [
          {
            name: t("Tasa de crecimiento y regla del 70", "Growth rate and the rule of 70"),
            expression: "Crecimiento % = (PIB real final ÷ PIB real inicial − 1) × 100;  Años para duplicarse ≈ 70 ÷ Crecimiento anual %",
            variables: [
              { symbol: "PIB real inicial", meaning: t("El PIB real del primer año, en pesos.", "Real GDP in the first year, in pesos.") },
              { symbol: "PIB real final", meaning: t("El PIB real del año siguiente, en pesos.", "Real GDP in the following year, in pesos.") },
              { symbol: "Crecimiento %", meaning: t("Cuánto aumentó la producción real, en % anual.", "How much real production increased, in % per year.") },
              { symbol: "70", meaning: t("Número fijo de la regla; se divide entre la tasa escrita como número entero (3 %, no 0.03).", "Fixed number of the rule; it is divided by the rate written as a whole number (3%, not 0.03).") },
              { symbol: "Años para duplicarse", meaning: t("Cuántos años, aproximadamente, tarda algo en valer el doble si crece a esa tasa cada año.", "About how many years something takes to double if it grows at that rate every year.") },
            ],
            steps: [
              t("Divide el PIB real final entre el inicial, resta 1 y multiplica por 100: es la tasa de crecimiento.", "Divide the final real GDP by the initial one, subtract 1 and multiply by 100: that is the growth rate."),
              t("Para estimar cuándo se duplica, divide 70 entre esa tasa en %.", "To estimate when it doubles, divide 70 by that rate in %."),
            ],
            example: t(
              "El PIB real pasa de 800 a 828. Crecimiento: (828 ÷ 800 − 1) × 100 = (1.035 − 1) × 100 = **3.5 %**. Si sigue así: 70 ÷ 3.5 = **20 años** para duplicarse.",
              "Real GDP goes from 800 to 828. Growth: (828 ÷ 800 − 1) × 100 = (1.035 − 1) × 100 = **3.5%**. If it continues: 70 ÷ 3.5 = **20 years** to double.",
            ),
            mistake: t(
              "Dividir 100 entre la tasa, como si el crecimiento no fuera compuesto. La regla usa 70.",
              "Dividing 100 by the rate, as if growth were not compounded. The rule uses 70.",
            ),
          },
        ],
      },
    ],
    examples: [
      {
        title: t("¿Te subieron el sueldo de verdad?", "Did you really get a raise?"),
        problem: t(
          "Ana ganaba $12,000 al mes. Le subieron a $12,600. En ese año, el índice de precios pasó de 100 a 107. ¿Ganó o perdió poder adquisitivo?",
          "Ana earned $12,000 a month. She got a raise to $12,600. That year, the price index went from 100 to 107. Did she gain or lose purchasing power?",
        ),
        steps: [
          t("Aumento nominal: (12,600 ÷ 12,000 − 1) × 100 = 5 %.", "Nominal increase: (12,600 ÷ 12,000 − 1) × 100 = 5%."),
          t("Inflación: (107 ÷ 100 − 1) × 100 = 7 %.", "Inflation: (107 ÷ 100 − 1) × 100 = 7%."),
          t("Salario real en pesos del inicio: 12,600 ÷ 1.07 ≈ $11,775.70.", "Real wage in start-of-year pesos: 12,600 ÷ 1.07 ≈ $11,775.70."),
          t("Compara: $11,775.70 < $12,000.", "Compare: $11,775.70 < $12,000."),
        ],
        result: t(
          "Ana perdió poder adquisitivo (cerca de 1.9 %): su aumento de 5 % no alcanzó a cubrir la inflación de 7 %.",
          "Ana lost purchasing power (about 1.9%): her 5% raise did not cover the 7% inflation.",
        ),
      },
      {
        title: t("Tasa de desempleo de una ciudad", "A city's unemployment rate"),
        problem: t(
          "En una ciudad hipotética hay 400,000 personas ocupadas, 16,000 desocupadas que buscan trabajo y 250,000 personas que ni trabajan ni buscan. Calcula la PEA y la tasa de desempleo.",
          "A hypothetical city has 400,000 employed people, 16,000 unemployed people looking for work and 250,000 people who neither work nor look for work. Compute the PEA and the unemployment rate.",
        ),
        steps: [
          t("PEA = ocupados + desocupados = 400,000 + 16,000 = 416,000.", "PEA = employed + unemployed = 400,000 + 16,000 = 416,000."),
          t("Las 250,000 personas que no buscan quedan fuera (PNEA).", "The 250,000 people not looking are left out (PNEA)."),
          t("Tasa = 16,000 ÷ 416,000 × 100 ≈ 3.85 %.", "Rate = 16,000 ÷ 416,000 × 100 ≈ 3.85%."),
        ],
        result: t(
          "PEA = 416,000 y tasa de desempleo ≈ 3.85 %. Error típico: dividir entre toda la población adulta (666,000).",
          "PEA = 416,000 and unemployment rate ≈ 3.85%. Typical mistake: dividing by the whole adult population (666,000).",
        ),
      },
    ],
    keyPoints: [
      t("La inflación es el aumento generalizado y sostenido de precios; en México se mide con el INPC.", "Inflation is the general and sustained rise in prices; in Mexico it is measured with the INPC."),
      t("Si tu sueldo sube menos que la inflación, tu salario real baja.", "If your salary rises less than inflation, your real wage falls."),
      t("PEA = ocupados + desocupados; quien no trabaja ni busca queda fuera.", "PEA = employed + unemployed; whoever neither works nor seeks work is left out."),
      t("Tasa de desempleo = desocupados ÷ PEA; la informalidad también importa.", "Unemployment rate = unemployed ÷ PEA; informality also matters."),
      t("El crecimiento se mide con el PIB real; la regla del 70 estima los años para duplicarse.", "Growth is measured with real GDP; the rule of 70 estimates the years to double."),
    ],
    normativeNote: NOTE_STATS,
    exerciseIds: ['ECO-09-E1', 'ECO-09-E2', 'ECO-09-E3', 'ECO-09-E4', 'ECO-09-E5', 'ECO-09-E6'],
  },

  // ───────────────────────────── ECO-10 ─────────────────────────────
  {
    id: 'ECO-10',
    level: 1,
    topicIds: ['ECO.10'],
    title: t("Política monetaria", "Monetary policy"),
    summary: t(
      "La política monetaria es lo que hace el banco central con la tasa de interés y la liquidez para mantener la inflación baja y estable; sube la tasa para frenar precios y la baja para estimular la economía.",
      "Monetary policy is what the central bank does with the interest rate and liquidity to keep inflation low and stable; it raises the rate to slow prices and lowers it to stimulate the economy.",
    ),
    minutes: 16,
    objectives: [
      t("Explicar qué es la política monetaria y cuál es su herramienta principal en México.", "Explain what monetary policy is and what its main tool is in Mexico."),
      t("Distinguir una política monetaria expansiva de una restrictiva y sus efectos esperados.", "Distinguish expansionary from contractionary monetary policy and their expected effects."),
      t("Describir cómo un cambio en la tasa de referencia llega a tus créditos, ahorros y precios.", "Describe how a change in the policy rate reaches your loans, savings and prices."),
      t("Calcular de forma aproximada una tasa de interés real.", "Approximately compute a real interest rate."),
    ],
    theory: [
      {
        heading: t("¿Qué es la política monetaria?", "What is monetary policy?"),
        body: [
          t(
            "La **política monetaria** son las decisiones del **banco central** sobre el **costo del dinero** (la tasa de interés) y la cantidad de dinero disponible en la economía. En México la conduce el **Banco de México (Banxico)** y su meta principal es mantener la **inflación baja y estable**.",
            "**Monetary policy** is the **central bank's** decisions about the **cost of money** (the interest rate) and the amount of money available in the economy. In Mexico it is run by **Banco de México (Banxico)** and its main goal is to keep **inflation low and stable**.",
          ),
          t(
            "Su herramienta principal es la **tasa de interés de referencia**: en México, la **tasa objetivo para préstamos interbancarios a un día**, es decir, lo que se cobran los bancos entre sí por prestarse dinero de un día para otro. Banxico usa **operaciones de mercado abierto** (comprar o vender valores, prestar o retirar dinero a los bancos) para que esa tasa quede donde la anunció.",
            "Its main tool is the **policy interest rate**: in Mexico, the **target for the overnight interbank rate**, that is, what banks charge each other to lend money overnight. Banxico uses **open market operations** (buying or selling securities, lending to or withdrawing money from banks) to keep that rate where it announced.",
          ),
          t(
            "Mini ejemplo: piensa en la tasa de referencia como el \"precio de mayoreo\" del dinero. Si el mayorista sube su precio, la tiendita (tu banco) también te cobra más.",
            "Mini example: think of the policy rate as the \"wholesale price\" of money. If the wholesaler raises its price, the corner store (your bank) charges you more too.",
          ),
        ],
      },
      {
        heading: t("Expansiva o restrictiva", "Expansionary or contractionary"),
        body: [
          t(
            "Una política **restrictiva** (también llamada contractiva o \"apretada\") **sube la tasa**. Pedir prestado se vuelve más caro y ahorrar más atractivo; la gente y las empresas gastan menos y eso **frena la inflación**, aunque también puede frenar el crecimiento y el empleo.",
            "A **contractionary** (or \"tight\") policy **raises the rate**. Borrowing becomes more expensive and saving more attractive; people and firms spend less and that **slows inflation**, although it can also slow growth and employment.",
          ),
          t(
            "Una política **expansiva** (o \"relajada\") **baja la tasa**. Los créditos se abaratan, se gasta e invierte más y la economía se **estimula**. Se usa cuando la inflación está controlada y la economía va lenta. El riesgo: si se exagera, los precios pueden subir más rápido.",
            "An **expansionary** (or \"loose\") policy **lowers the rate**. Loans get cheaper, people spend and invest more and the economy is **stimulated**. It is used when inflation is under control and the economy is sluggish. The risk: if overdone, prices can rise faster.",
          ),
          t(
            "Mini ejemplo: si la inflación está muy por encima de la meta, lo esperable es que el banco central suba la tasa; si la inflación está en la meta y hay recesión, lo esperable es que la baje.",
            "Mini example: if inflation is well above target, the central bank would be expected to raise the rate; if inflation is on target and there is a recession, it would be expected to lower it.",
          ),
        ],
        bullets: [
          t("Restrictiva: sube la tasa o retira liquidez → menos gasto → menos presión en precios.", "Contractionary: raises the rate or withdraws liquidity → less spending → less price pressure."),
          t("Expansiva: baja la tasa o inyecta liquidez → más gasto → más actividad.", "Expansionary: lowers the rate or injects liquidity → more spending → more activity."),
          t("Comprar valores en el mercado inyecta dinero; venderlos lo retira.", "Buying securities in the market injects money; selling them withdraws it."),
        ],
      },
      {
        heading: t("Cómo llega a tu bolsillo", "How it reaches your wallet"),
        body: [
          t(
            "Un cambio en la tasa de referencia viaja por varios **canales de transmisión**: las tasas de **créditos y ahorros** (tarjetas, hipotecas a tasa variable, pagarés bancarios), el **tipo de cambio** (tasas más altas pueden atraer capital y fortalecer al peso), el **precio de activos** (bonos, acciones) y las **expectativas** de inflación de la gente.",
            "A change in the policy rate travels through several **transmission channels**: the rates on **loans and savings** (cards, variable-rate mortgages, bank notes), the **exchange rate** (higher rates can attract capital and strengthen the peso), **asset prices** (bonds, stocks) and people's inflation **expectations**.",
          ),
          t(
            "Los efectos **no son inmediatos**: suelen tardar varios trimestres en reflejarse por completo en la inflación. Por eso el banco central decide mirando hacia adelante, no solo el dato del mes.",
            "The effects **are not immediate**: they usually take several quarters to fully show up in inflation. That is why the central bank decides by looking ahead, not just at this month's figure.",
          ),
          t(
            "Para saber si una tasa realmente te hace ganar, compárala con la inflación. La **tasa real** es, de forma aproximada, la tasa nominal menos la inflación. Mini ejemplo: si tu ahorro paga 9 % y la inflación es 4 %, tu ganancia real es cerca de 5 %.",
            "To know whether a rate really makes you money, compare it with inflation. The **real rate** is, approximately, the nominal rate minus inflation. Mini example: if your savings pay 9% and inflation is 4%, your real gain is about 5%.",
          ),
        ],
        formulas: [
          {
            name: t("Tasa de interés real (aproximada)", "Real interest rate (approximate)"),
            expression: "Tasa real ≈ Tasa nominal − Inflación",
            variables: [
              { symbol: "Tasa nominal", meaning: t("La tasa que te anuncia el banco o la inversión, en % anual.", "The rate announced by the bank or investment, in % per year.") },
              { symbol: "Inflación", meaning: t("Cuánto suben los precios en el año, en %.", "How much prices rise during the year, in %.") },
              { symbol: "Tasa real", meaning: t("Cuánto crece de verdad tu poder de compra, en % anual.", "How much your purchasing power really grows, in % per year.") },
            ],
            steps: [
              t("Identifica la tasa nominal y la inflación del mismo periodo, ambas en %.", "Identify the nominal rate and inflation for the same period, both in %."),
              t("Resta: tasa nominal − inflación.", "Subtract: nominal rate − inflation."),
              t("Si quieres el monto, multiplica lo invertido por la tasa real en decimal.", "If you want the amount, multiply what you invested by the real rate as a decimal."),
            ],
            example: t(
              "Ahorras $15,000 en un pagaré a 8 % con inflación de 5 %. Tasa real: 8 % − 5 % = **3 %**. Ganancia real aproximada: 15,000 × 0.03 = $450 en poder de compra.",
              "You save $15,000 in a bank note at 8% with 5% inflation. Real rate: 8% − 5% = **3%**. Approximate real gain: 15,000 × 0.03 = $450 in purchasing power.",
            ),
            interpret: t(
              "Positiva: tu dinero gana poder de compra. Negativa: aunque recibas intereses, compras menos que antes.",
              "Positive: your money gains purchasing power. Negative: even though you receive interest, you buy less than before.",
            ),
            mistake: t(
              "Sumar la inflación a la tasa, o creer que toda la tasa nominal es ganancia real.",
              "Adding inflation to the rate, or believing the whole nominal rate is real gain.",
            ),
          },
        ],
      },
    ],
    examples: [
      {
        title: t("Leer una decisión de política monetaria", "Reading a monetary policy decision"),
        problem: t(
          "Supón que la meta de inflación es 3 % y la inflación anual va en 6 % y subiendo. El banco central anuncia que sube su tasa de referencia de 8 % a 8.5 %. ¿Qué tipo de política es y qué efectos busca?",
          "Suppose the inflation target is 3% and annual inflation is at 6% and rising. The central bank announces it is raising its policy rate from 8% to 8.5%. What type of policy is it and what effects does it seek?",
        ),
        steps: [
          t("Compara inflación y meta: 6 % está muy por encima de 3 %.", "Compare inflation and target: 6% is well above 3%."),
          t("Subir la tasa encarece el crédito: es política restrictiva.", "Raising the rate makes credit more expensive: it is contractionary policy."),
          t("Efecto esperado: menos gasto financiado con crédito y más ahorro.", "Expected effect: less credit-financed spending and more saving."),
          t("Con el tiempo (varios trimestres), menor presión sobre los precios.", "Over time (several quarters), less pressure on prices."),
        ],
        result: t(
          "Es una política restrictiva de 0.5 puntos porcentuales para bajar la inflación hacia la meta, aceptando cierto freno a la actividad.",
          "It is a 0.5-percentage-point contractionary move to bring inflation down toward the target, accepting some slowdown in activity.",
        ),
      },
      {
        title: t("¿Cuánto gana de verdad un ahorro?", "How much does a saving really earn?"),
        problem: t(
          "Luis invierte $20,000 en un pagaré que paga 10 % anual. La inflación del año es 4 %. Estima su ganancia nominal y su tasa real aproximada.",
          "Luis invests $20,000 in a bank note paying 10% a year. Inflation for the year is 4%. Estimate his nominal gain and his approximate real rate.",
        ),
        steps: [
          t("Ganancia nominal: 20,000 × 0.10 = $2,000.", "Nominal gain: 20,000 × 0.10 = $2,000."),
          t("Tasa real aproximada: 10 % − 4 % = 6 %.", "Approximate real rate: 10% − 4% = 6%."),
          t("Ganancia real aproximada: 20,000 × 0.06 = $1,200 en poder de compra.", "Approximate real gain: 20,000 × 0.06 = $1,200 in purchasing power."),
        ],
        result: t(
          "Luis gana $2,000 nominales, pero su poder de compra aumenta cerca de 6 % (unos $1,200), porque 4 puntos se los \"come\" la inflación.",
          "Luis earns $2,000 nominal, but his purchasing power rises about 6% (some $1,200), because inflation \"eats\" 4 points.",
        ),
      },
    ],
    keyPoints: [
      t("La política monetaria la conduce el banco central; en México, Banxico, para mantener la inflación baja y estable.", "Monetary policy is run by the central bank; in Mexico, Banxico, to keep inflation low and stable."),
      t("Su herramienta principal es la tasa objetivo de interés interbancario a un día.", "Its main tool is the target overnight interbank interest rate."),
      t("Restrictiva = subir tasa (frena inflación); expansiva = bajar tasa (estimula la economía).", "Contractionary = raise the rate (slows inflation); expansionary = lower the rate (stimulates the economy)."),
      t("Los efectos llegan por créditos, tipo de cambio, precios de activos y expectativas, con rezago.", "Effects arrive through loans, the exchange rate, asset prices and expectations, with a lag."),
      t("Tasa real ≈ tasa nominal − inflación.", "Real rate ≈ nominal rate − inflation."),
    ],
    normativeNote: NOTE_BANXICO,
    exerciseIds: ['ECO-10-E1', 'ECO-10-E2', 'ECO-10-E3', 'ECO-10-E4', 'ECO-10-E5', 'ECO-10-E6'],
  },

  // ───────────────────────────── ECO-11 ─────────────────────────────
  {
    id: 'ECO-11',
    level: 1,
    topicIds: ['ECO.11'],
    title: t("Política fiscal", "Fiscal policy"),
    summary: t(
      "La política fiscal es el uso que hace el gobierno de los impuestos y del gasto público para influir en la economía: puede estimularla (expansiva) o enfriarla (contractiva), y su resultado se ve en el balance de ingresos y gastos.",
      "Fiscal policy is the government's use of taxes and public spending to influence the economy: it can stimulate it (expansionary) or cool it (contractionary), and its result shows in the balance of revenue and spending.",
    ),
    minutes: 16,
    objectives: [
      t("Explicar qué es la política fiscal, quién la diseña y quién la aprueba en México.", "Explain what fiscal policy is, who designs it and who approves it in Mexico."),
      t("Distinguir una política fiscal expansiva de una contractiva.", "Distinguish expansionary from contractionary fiscal policy."),
      t("Calcular un balance fiscal y un multiplicador del gasto sencillo.", "Compute a fiscal balance and a simple spending multiplier."),
      t("Reconocer los estabilizadores automáticos.", "Recognize automatic stabilizers."),
    ],
    theory: [
      {
        heading: t("Ingresos, gasto y quién decide", "Revenue, spending and who decides"),
        body: [
          t(
            "La **política fiscal** son las decisiones del gobierno sobre **cuánto cobra** (impuestos y otros ingresos) y **en qué gasta** (escuelas, hospitales, carreteras, programas sociales, sueldos públicos). Es como el presupuesto de una familia, pero para todo el país.",
            "**Fiscal policy** is the government's decisions about **how much it collects** (taxes and other revenue) and **what it spends on** (schools, hospitals, roads, social programs, public salaries). It is like a family budget, but for the whole country.",
          ),
          t(
            "En México, la **Secretaría de Hacienda y Crédito Público (SHCP)** prepara cada año el **paquete económico**. El Congreso aprueba la **Ley de Ingresos de la Federación** (cuánto se espera recaudar y de dónde), y la **Cámara de Diputados** aprueba el **Presupuesto de Egresos de la Federación** (en qué se gasta).",
            "In Mexico, the **Ministry of Finance and Public Credit (SHCP)** prepares the **economic package** every year. Congress approves the **Federal Revenue Law** (how much is expected to be collected and from where), and the **Chamber of Deputies** approves the **Federal Expenditure Budget** (what it is spent on).",
          ),
          t(
            "Mini ejemplo: cuando pagas IVA en el súper o te retienen ISR de tu sueldo, estás aportando a los ingresos públicos; cuando usas una clínica pública o una carretera libre, estás viendo el gasto.",
            "Mini example: when you pay VAT at the supermarket or ISR is withheld from your salary, you are contributing to public revenue; when you use a public clinic or a toll-free road, you are seeing the spending.",
          ),
        ],
      },
      {
        heading: t("Expansiva, contractiva y el multiplicador", "Expansionary, contractionary and the multiplier"),
        body: [
          t(
            "Una política fiscal **expansiva** busca **estimular** la economía: el gobierno **gasta más** o **cobra menos impuestos**, para que haya más dinero circulando. Se usa en recesiones. Una política **contractiva** hace lo contrario (**gasta menos** o **cobra más**) para enfriar una economía sobrecalentada o para ordenar las finanzas públicas.",
            "An **expansionary** fiscal policy seeks to **stimulate** the economy: the government **spends more** or **collects less in taxes**, so more money circulates. It is used in recessions. A **contractionary** policy does the opposite (**spends less** or **collects more**) to cool an overheated economy or to put public finances in order.",
          ),
          t(
            "El gasto público tiene un **efecto multiplicador**: si el gobierno paga $100 a una constructora, sus trabajadores gastan parte en la fonda, la fonda gasta parte en el mercado, y así sucesivamente. La parte de cada peso extra que la gente gasta se llama **propensión marginal a consumir (PMC)**. En el modelo más simple, el multiplicador es 1 ÷ (1 − PMC).",
            "Public spending has a **multiplier effect**: if the government pays $100 to a construction firm, its workers spend part at the diner, the diner spends part at the market, and so on. The share of each extra peso people spend is called the **marginal propensity to consume (MPC)**. In the simplest model, the multiplier is 1 ÷ (1 − MPC).",
          ),
          t(
            "Mini ejemplo: con PMC = 0.8, el multiplicador es 1 ÷ 0.2 = 5; un gasto extra de $10 millones podría elevar el PIB hasta $50 millones en este modelo simplificado. En la realidad el efecto es menor por impuestos, importaciones y ahorro.",
            "Mini example: with MPC = 0.8, the multiplier is 1 ÷ 0.2 = 5; an extra $10 million in spending could raise GDP by up to $50 million in this simplified model. In reality the effect is smaller because of taxes, imports and saving.",
          ),
        ],
        formulas: [
          {
            name: t("Multiplicador del gasto (modelo simple)", "Spending multiplier (simple model)"),
            expression: "Multiplicador = 1 ÷ (1 − PMC);  ΔPIB ≈ Multiplicador × ΔGasto",
            variables: [
              { symbol: "PMC", meaning: t("Propensión marginal a consumir: de cada peso extra que recibe la gente, qué parte gasta (un decimal entre 0 y 1; 0.8 = gasta 80 centavos de cada peso).", "Marginal propensity to consume: of each extra peso people receive, what share they spend (a decimal between 0 and 1; 0.8 = they spend 80 cents of each peso).") },
              { symbol: "1 − PMC", meaning: t("La parte de cada peso extra que no se gasta (se ahorra).", "The share of each extra peso that is not spent (it is saved).") },
              { symbol: "Multiplicador", meaning: t("Cuántas veces se multiplica el gasto inicial en la economía (sin unidades).", "How many times the initial spending is multiplied in the economy (no units).") },
              { symbol: "ΔGasto", meaning: t("El aumento del gasto del gobierno, en pesos (Δ significa \"cambio\").", "The increase in government spending, in pesos (Δ means \"change\").") },
              { symbol: "ΔPIB", meaning: t("El aumento estimado del PIB, en pesos.", "The estimated increase in GDP, in pesos.") },
            ],
            steps: [
              t("Calcula 1 − PMC.", "Compute 1 − MPC."),
              t("Divide 1 entre ese resultado: es el multiplicador.", "Divide 1 by that result: that is the multiplier."),
              t("Multiplica el multiplicador por el aumento del gasto: es el aumento estimado del PIB.", "Multiply the multiplier by the increase in spending: that is the estimated GDP increase."),
            ],
            example: t(
              "PMC = 0.7 y el gobierno gasta $30 millones más. 1 − 0.7 = 0.3. Multiplicador: 1 ÷ 0.3 ≈ 3.33. ΔPIB ≈ 3.33 × 30 = **$100 millones** (exacto: 30 ÷ 0.3 = 100).",
              "MPC = 0.7 and the government spends $30 million more. 1 − 0.7 = 0.3. Multiplier: 1 ÷ 0.3 ≈ 3.33. ΔGDP ≈ 3.33 × 30 = **$100 million** (exact: 30 ÷ 0.3 = 100).",
            ),
            interpret: t(
              "Mientras más gaste la gente de cada peso extra (PMC alta), mayor es el multiplicador. En la realidad el efecto es menor por impuestos, importaciones y ahorro.",
              "The more people spend of each extra peso (high MPC), the bigger the multiplier. In reality the effect is smaller because of taxes, imports and saving.",
            ),
            mistake: t(
              "Dividir 1 ÷ PMC (1 ÷ 0.7 ≈ 1.43). El denominador es la parte que **no** se gasta: 1 − PMC.",
              "Dividing 1 ÷ MPC (1 ÷ 0.7 ≈ 1.43). The denominator is the share that is **not** spent: 1 − MPC.",
            ),
          },
        ],
      },
      {
        heading: t("Balance fiscal y estabilizadores automáticos", "Fiscal balance and automatic stabilizers"),
        body: [
          t(
            "El **balance fiscal** compara ingresos y gastos del gobierno en un año. Si ingresos > gastos hay **superávit**; si gastos > ingresos hay **déficit**, que se cubre pidiendo prestado (deuda). Una política expansiva suele aumentar el déficit; una contractiva, reducirlo.",
            "The **fiscal balance** compares government revenue and spending in a year. If revenue > spending there is a **surplus**; if spending > revenue there is a **deficit**, which is covered by borrowing (debt). An expansionary policy usually increases the deficit; a contractionary one reduces it.",
          ),
          t(
            "Algunas partes del sistema actúan **solas**, sin que nadie apruebe nada nuevo: son los **estabilizadores automáticos**. En una recesión, la gente gana menos y paga menos ISR, y más personas califican para apoyos; eso amortigua la caída. En un auge pasa lo contrario. Las medidas que sí requieren una decisión nueva (un programa de obras, un cambio de tasas de impuestos) se llaman **discrecionales**.",
            "Some parts of the system act **on their own**, without anyone approving anything new: these are **automatic stabilizers**. In a recession, people earn less and pay less ISR, and more people qualify for support; that cushions the fall. In a boom the opposite happens. Measures that do require a new decision (a public works program, a change in tax rates) are called **discretionary**.",
          ),
          t(
            "Mini ejemplo: un gobierno recauda $900 y gasta $1,000: déficit de $100. Si el siguiente año recauda $1,000 y gasta $950, tiene superávit de $50.",
            "Mini example: a government collects $900 and spends $1,000: a $100 deficit. If the next year it collects $1,000 and spends $950, it has a $50 surplus.",
          ),
        ],
        formulas: [
          {
            name: t("Balance fiscal: superávit o déficit", "Fiscal balance: surplus or deficit"),
            expression: "Balance fiscal = Ingresos − Gastos;  % del gasto financiado con deuda = Déficit ÷ Gastos × 100",
            variables: [
              { symbol: "Ingresos", meaning: t("Lo que el gobierno recaudó en el año (impuestos y otros), en pesos.", "What the government collected in the year (taxes and other), in pesos.") },
              { symbol: "Gastos", meaning: t("Lo que el gobierno gastó en el año, en pesos.", "What the government spent in the year, in pesos.") },
              { symbol: "Balance fiscal", meaning: t("Positivo = superávit (sobró dinero); negativo = déficit (faltó y se pidió prestado), en pesos.", "Positive = surplus (money left over); negative = deficit (money was short and was borrowed), in pesos.") },
              { symbol: "Déficit", meaning: t("El faltante expresado como número positivo, en pesos.", "The shortfall expressed as a positive number, in pesos.") },
            ],
            steps: [
              t("Resta ingresos − gastos.", "Subtract revenue − spending."),
              t("Mira el signo: positivo es superávit; negativo es déficit (y el déficit se reporta como número positivo).", "Look at the sign: positive is a surplus; negative is a deficit (and the deficit is reported as a positive number)."),
              t("Si te lo piden, divide el déficit entre el gasto y multiplica por 100.", "If asked, divide the deficit by spending and multiply by 100."),
            ],
            example: t(
              "Ingresos $4,200 millones; gastos $4,500 millones. Balance: 4,200 − 4,500 = −300 → **déficit de $300 millones**. Parte del gasto con deuda: 300 ÷ 4,500 × 100 ≈ 6.67 %.",
              "Revenue $4,200 million; spending $4,500 million. Balance: 4,200 − 4,500 = −300 → **deficit of $300 million**. Share of spending financed with debt: 300 ÷ 4,500 × 100 ≈ 6.67%.",
            ),
            mistake: t(
              "Restar al revés (gastos − ingresos) y confundir déficit con superávit. Siempre es ingresos menos gastos.",
              "Subtracting the other way (spending − revenue) and confusing deficit with surplus. It is always revenue minus spending.",
            ),
          },
        ],
      },
    ],
    examples: [
      {
        title: t("Efecto de un programa de obras con el multiplicador", "Effect of a public works program with the multiplier"),
        problem: t(
          "En plena recesión, un gobierno hipotético aumenta en $40,000 millones la inversión en carreteras. Si la PMC es 0.6, ¿cuál es el multiplicador simple y el aumento estimado del PIB?",
          "In the middle of a recession, a hypothetical government increases road investment by $40,000 million. If the MPC is 0.6, what is the simple multiplier and the estimated GDP increase?",
        ),
        steps: [
          t("1 − PMC = 1 − 0.6 = 0.4.", "1 − MPC = 1 − 0.6 = 0.4."),
          t("Multiplicador = 1 ÷ 0.4 = 2.5.", "Multiplier = 1 ÷ 0.4 = 2.5."),
          t("ΔPIB ≈ 2.5 × 40,000 = 100,000 millones.", "ΔGDP ≈ 2.5 × 40,000 = 100,000 million."),
        ],
        result: t(
          "Multiplicador 2.5; el PIB podría subir hasta unos $100,000 millones en el modelo simple. Es política fiscal expansiva.",
          "Multiplier 2.5; GDP could rise by up to about $100,000 million in the simple model. It is expansionary fiscal policy.",
        ),
      },
      {
        title: t("Leer un balance fiscal", "Reading a fiscal balance"),
        problem: t(
          "Un estado hipotético recaudó $85,000 millones y gastó $92,000 millones. ¿Hay superávit o déficit y de cuánto? ¿Qué porcentaje del gasto se financió con deuda?",
          "A hypothetical state collected $85,000 million and spent $92,000 million. Is there a surplus or a deficit, and how large? What percentage of spending was financed with debt?",
        ),
        steps: [
          t("Balance = 85,000 − 92,000 = −7,000 millones.", "Balance = 85,000 − 92,000 = −7,000 million."),
          t("Negativo: es un déficit de 7,000 millones.", "Negative: it is a 7,000 million deficit."),
          t("Porcentaje del gasto con deuda: 7,000 ÷ 92,000 × 100 ≈ 7.6 %.", "Share of spending financed with debt: 7,000 ÷ 92,000 × 100 ≈ 7.6%."),
        ],
        result: t(
          "Déficit de $7,000 millones; cerca de 7.6 % del gasto se cubrió pidiendo prestado.",
          "Deficit of $7,000 million; about 7.6% of spending was covered by borrowing.",
        ),
      },
    ],
    keyPoints: [
      t("La política fiscal usa impuestos y gasto público para influir en la economía.", "Fiscal policy uses taxes and public spending to influence the economy."),
      t("En México la SHCP la diseña; el Congreso aprueba la Ley de Ingresos y la Cámara de Diputados el Presupuesto de Egresos.", "In Mexico the SHCP designs it; Congress approves the Revenue Law and the Chamber of Deputies the Expenditure Budget."),
      t("Expansiva: más gasto o menos impuestos; contractiva: menos gasto o más impuestos.", "Expansionary: more spending or lower taxes; contractionary: less spending or higher taxes."),
      t("Multiplicador simple = 1 ÷ (1 − PMC); en la realidad el efecto es menor.", "Simple multiplier = 1 ÷ (1 − MPC); in reality the effect is smaller."),
      t("Balance = ingresos − gastos; los estabilizadores automáticos actúan sin decisiones nuevas.", "Balance = revenue − spending; automatic stabilizers act without new decisions."),
    ],
    normativeNote: NOTE_FISCAL,
    exerciseIds: ['ECO-11-E1', 'ECO-11-E2', 'ECO-11-E3', 'ECO-11-E4', 'ECO-11-E5', 'ECO-11-E6'],
  },

  // ───────────────────────────── ECO-12 ─────────────────────────────
  {
    id: 'ECO-12',
    level: 1,
    topicIds: ['ECO.12'],
    title: t("Banco de México y banca central", "Banco de México and central banking"),
    summary: t(
      "Un banco central es el \"banco de los bancos\": emite la moneda, cuida los sistemas de pago y la estabilidad financiera; en México, Banxico es autónomo y su mandato prioritario es la estabilidad del poder adquisitivo del peso.",
      "A central bank is the \"bankers' bank\": it issues currency and safeguards payment systems and financial stability; in Mexico, Banxico is autonomous and its priority mandate is the stability of the peso's purchasing power.",
    ),
    minutes: 15,
    objectives: [
      t("Explicar qué es un banco central y en qué se diferencia de un banco comercial.", "Explain what a central bank is and how it differs from a commercial bank."),
      t("Identificar el mandato, las funciones principales y la autonomía del Banco de México.", "Identify Banco de México's mandate, main functions and autonomy."),
      t("Interpretar la meta de inflación y su intervalo de variación.", "Interpret the inflation target and its variability range."),
    ],
    theory: [
      {
        heading: t("¿Qué es un banco central?", "What is a central bank?"),
        body: [
          t(
            "Un **banco comercial** (el que te da tu tarjeta de débito) recibe depósitos de personas y empresas y les presta. Un **banco central** no atiende al público: es el **banco de los bancos y del gobierno**. Les guarda reservas, les presta en casos especiales y vigila que el sistema de pagos funcione.",
            "A **commercial bank** (the one that gives you your debit card) takes deposits from people and businesses and lends to them. A **central bank** does not serve the public: it is the **bank of banks and of the government**. It holds their reserves, lends to them in special cases and oversees that the payment system works.",
          ),
          t(
            "Casi todos los países tienen uno: la Reserva Federal en Estados Unidos, el Banco Central Europeo en la zona euro y, en México, el **Banco de México (Banxico)**, fundado en **1925**. Sus decisiones afectan las tasas de interés, la inflación y la confianza en la moneda.",
            "Almost every country has one: the Federal Reserve in the United States, the European Central Bank in the euro area and, in Mexico, **Banco de México (Banxico)**, founded in **1925**. Its decisions affect interest rates, inflation and confidence in the currency.",
          ),
          t(
            "Mini ejemplo: tú no puedes abrir una cuenta en Banxico, pero el billete de $500 que traes en la cartera lo emitió Banxico, y la transferencia SPEI que hiciste ayer viajó por un sistema que Banxico opera.",
            "Mini example: you cannot open an account at Banxico, but the $500 bill in your wallet was issued by Banxico, and the SPEI transfer you made yesterday traveled through a system Banxico operates.",
          ),
        ],
      },
      {
        heading: t("Mandato y funciones de Banxico", "Banxico's mandate and functions"),
        body: [
          t(
            "La Constitución le da a Banxico un **objetivo prioritario**: procurar la **estabilidad del poder adquisitivo de la moneda nacional**, es decir, que tus pesos no pierdan valor rápidamente por la inflación. Para concretarlo, Banxico fijó una **meta de inflación anual de 3 %**, con un **intervalo de variación de ± 1 punto porcentual** (de 2 % a 4 %).",
            "The Constitution gives Banxico a **priority objective**: to seek the **stability of the national currency's purchasing power**, that is, that your pesos do not lose value quickly through inflation. To make it concrete, Banxico set an **annual inflation target of 3%**, with a **variability range of ± 1 percentage point** (from 2% to 4%).",
          ),
          t(
            "Además, Banxico tiene otras finalidades: promover el **sano desarrollo del sistema financiero** y el **buen funcionamiento de los sistemas de pagos**. De ahí salen sus funciones principales.",
            "In addition, Banxico has other purposes: to promote the **sound development of the financial system** and the **proper functioning of payment systems**. Its main functions come from there.",
          ),
          t(
            "Mini ejemplo: si la inflación anual está en 3.8 %, queda arriba de la meta puntual (3 %) pero dentro del intervalo (hasta 4 %). Si llega a 5 %, está fuera del intervalo y Banxico tenderá a una política más restrictiva.",
            "Mini example: if annual inflation is 3.8%, it is above the point target (3%) but within the range (up to 4%). If it reaches 5%, it is outside the range and Banxico will tend toward a tighter policy.",
          ),
        ],
        bullets: [
          t("Emitir billetes y monedas (tiene la exclusividad).", "Issue bills and coins (it has the exclusive right)."),
          t("Conducir la política monetaria (tasa de referencia).", "Conduct monetary policy (policy rate)."),
          t("Operar y regular sistemas de pagos, como el SPEI.", "Operate and regulate payment systems, such as SPEI."),
          t("Administrar las reservas internacionales del país.", "Manage the country's international reserves."),
          t("Actuar como prestamista de última instancia de los bancos.", "Act as lender of last resort to banks."),
          t("Ser agente financiero y banquero del gobierno federal.", "Be the federal government's financial agent and banker."),
        ],
        formulas: [
          {
            name: t("¿Dentro o fuera del intervalo de la meta de inflación?", "Inside or outside the inflation target range?"),
            expression: "Límite inferior = Meta − 1;  Límite superior = Meta + 1;  Exceso = Inflación − Límite superior",
            variables: [
              { symbol: "Meta", meaning: t("La meta puntual de inflación anual, en % (para Banxico, 3 %).", "The point annual inflation target, in % (for Banxico, 3%).") },
              { symbol: "1", meaning: t("El intervalo de variación: ± 1 punto porcentual alrededor de la meta.", "The variability range: ± 1 percentage point around the target.") },
              { symbol: "Inflación", meaning: t("La inflación anual observada, en %.", "The observed annual inflation, in %.") },
              { symbol: "Exceso", meaning: t("Cuántos puntos porcentuales rebasa la inflación el límite superior.", "How many percentage points inflation exceeds the upper limit by.") },
            ],
            steps: [
              t("Calcula los límites: meta − 1 y meta + 1.", "Compute the limits: target − 1 and target + 1."),
              t("Ubica la inflación: si está entre los dos límites, está dentro del intervalo.", "Place the inflation figure: if it is between both limits, it is inside the range."),
              t("Si está arriba, resta inflación − límite superior para saber por cuántos puntos lo rebasa.", "If it is above, subtract inflation − upper limit to know by how many points it exceeds it."),
            ],
            example: t(
              "Meta 3 %, inflación observada 4.3 %. Límites: 3 − 1 = 2 % y 3 + 1 = 4 %. 4.3 % está arriba de 4 %. Exceso: 4.3 − 4 = **0.3 puntos** (respecto a la meta puntual serían 4.3 − 3 = 1.3 puntos).",
              "Target 3%, observed inflation 4.3%. Limits: 3 − 1 = 2% and 3 + 1 = 4%. 4.3% is above 4%. Excess: 4.3 − 4 = **0.3 points** (relative to the point target it would be 4.3 − 3 = 1.3 points).",
            ),
            interpret: t(
              "Fuera del intervalo por arriba, lo esperable es una política más restrictiva (subir la tasa).",
              "Outside the range on the high side, a tighter policy (raising the rate) would be expected.",
            ),
            mistake: t(
              "Comparar contra la meta de 3 % cuando la pregunta pide el exceso sobre el límite superior (4 %).",
              "Comparing against the 3% target when the question asks for the excess over the upper limit (4%).",
            ),
          },
        ],
      },
      {
        heading: t("Autonomía: ¿por qué importa?", "Autonomy: why does it matter?"),
        body: [
          t(
            "Desde **1994**, Banxico es **autónomo**: toma sus decisiones sin recibir órdenes del gobierno en turno. Lo dirige una **Junta de Gobierno** de cinco personas (un gobernador y cuatro subgobernadores), con periodos escalonados para que ningún gobierno los nombre a todos de golpe.",
            "Since **1994**, Banxico has been **autonomous**: it makes its decisions without taking orders from the government in office. It is run by a **Governing Board** of five people (a governor and four deputy governors), with staggered terms so that no government appoints all of them at once.",
          ),
          t(
            "Una regla clave: **ninguna autoridad puede ordenarle a Banxico que le preste dinero**. ¿Por qué? Porque si un gobierno pudiera pagar sus gastos haciendo que el banco central \"imprima\" dinero, habría demasiados pesos persiguiendo los mismos bienes y la inflación se dispararía. Varios países han vivido crisis así.",
            "A key rule: **no authority can order Banxico to lend it money**. Why? Because if a government could pay its expenses by having the central bank \"print\" money, there would be too many pesos chasing the same goods and inflation would soar. Several countries have lived through such crises.",
          ),
          t(
            "La autonomía viene con **rendición de cuentas**: Banxico publica sus decisiones y las minutas de la Junta, e informa periódicamente al Congreso. Mini ejemplo: cuando Banxico anuncia un cambio de tasa, publica un comunicado explicando por qué, y semanas después las minutas con la discusión.",
            "Autonomy comes with **accountability**: Banxico publishes its decisions and the Board's minutes, and reports periodically to Congress. Mini example: when Banxico announces a rate change, it publishes a statement explaining why, and weeks later the minutes with the discussion.",
          ),
        ],
      },
    ],
    examples: [
      {
        title: t("¿Inflación dentro o fuera del intervalo?", "Inflation inside or outside the range?"),
        problem: t(
          "Usando la meta de 3 % ± 1 punto, clasifica tres datos hipotéticos de inflación anual: 2.6 %, 3.9 % y 5.2 %. Para el que esté fuera, ¿por cuántos puntos excede el límite?",
          "Using the 3% ± 1 point target, classify three hypothetical annual inflation figures: 2.6%, 3.9% and 5.2%. For the one outside, by how many points does it exceed the limit?",
        ),
        steps: [
          t("El intervalo va de 3 − 1 = 2 % a 3 + 1 = 4 %.", "The range goes from 3 − 1 = 2% to 3 + 1 = 4%."),
          t("2.6 %: dentro (entre 2 y 4).", "2.6%: inside (between 2 and 4)."),
          t("3.9 %: dentro, aunque cerca del límite superior.", "3.9%: inside, although close to the upper limit."),
          t("5.2 %: fuera; excede el límite superior por 5.2 − 4 = 1.2 puntos.", "5.2%: outside; it exceeds the upper limit by 5.2 − 4 = 1.2 points."),
        ],
        result: t(
          "2.6 % y 3.9 % están dentro del intervalo; 5.2 % lo rebasa por 1.2 puntos (y a la meta puntual por 2.2).",
          "2.6% and 3.9% are within the range; 5.2% exceeds it by 1.2 points (and the point target by 2.2).",
        ),
      },
      {
        title: t("Banco comercial vs. banco central", "Commercial bank vs. central bank"),
        problem: t(
          "Clasifica estas acciones: (1) abrirte una cuenta de nómina, (2) emitir un nuevo billete de $200, (3) darte un crédito para auto, (4) prestar a un banco con un problema temporal de liquidez.",
          "Classify these actions: (1) opening a payroll account for you, (2) issuing a new $200 bill, (3) giving you a car loan, (4) lending to a bank with a temporary liquidity problem.",
        ),
        steps: [
          t("(1) Atender al público con cuentas: banco comercial.", "(1) Serving the public with accounts: commercial bank."),
          t("(2) Emitir moneda: exclusivo del banco central.", "(2) Issuing currency: exclusive to the central bank."),
          t("(3) Crédito a personas: banco comercial.", "(3) Credit to individuals: commercial bank."),
          t("(4) Prestar a bancos en apuros temporales: banco central como prestamista de última instancia.", "(4) Lending to banks in temporary trouble: central bank as lender of last resort."),
        ],
        result: t(
          "1 y 3 son de un banco comercial; 2 y 4 son funciones del banco central (Banxico).",
          "1 and 3 belong to a commercial bank; 2 and 4 are central bank (Banxico) functions.",
        ),
      },
    ],
    keyPoints: [
      t("El banco central es el banco de los bancos y del gobierno; no atiende al público.", "The central bank is the bank of banks and of the government; it does not serve the public."),
      t("El objetivo prioritario de Banxico es la estabilidad del poder adquisitivo del peso.", "Banxico's priority objective is the stability of the peso's purchasing power."),
      t("Meta de inflación: 3 % con intervalo de ± 1 punto porcentual.", "Inflation target: 3% with a ± 1 percentage point range."),
      t("Funciones: emitir moneda, política monetaria, sistemas de pagos, reservas internacionales, prestamista de última instancia.", "Functions: issuing currency, monetary policy, payment systems, international reserves, lender of last resort."),
      t("Es autónomo desde 1994 y ninguna autoridad puede ordenarle que le preste.", "It has been autonomous since 1994 and no authority can order it to lend."),
    ],
    normativeNote: NOTE_BANXICO,
    exerciseIds: ['ECO-12-E1', 'ECO-12-E2', 'ECO-12-E3', 'ECO-12-E4', 'ECO-12-E5', 'ECO-12-E6'],
  },
]

export const exercises: Exercise[] = [
  // ═════════════════════════ ECO-07 ═════════════════════════
  {
    id: 'ECO-07-E1',
    level: 1,
    module: 'ECO-07',
    kind: 'mcq',
    flavor: 'concept',
    prompt: t(
      "Un mercado donde una sola empresa vende un producto sin sustitutos cercanos y es muy difícil que entre otra se llama:",
      "A market where a single firm sells a product with no close substitutes and it is very hard for another to enter is called:",
    ),
    options: [
      { id: 'ECO-07-E1-a', text: t("Oligopolio", "Oligopoly") },
      { id: 'ECO-07-E1-b', text: t("Monopolio", "Monopoly") },
      { id: 'ECO-07-E1-c', text: t("Competencia monopolística", "Monopolistic competition") },
      { id: 'ECO-07-E1-d', text: t("Monopsonio", "Monopsony") },
    ],
    correctOptionId: 'ECO-07-E1-b',
    explanation: t(
      "Un solo vendedor, sin sustitutos y con barreras altas es un monopolio. El oligopolio tiene pocos vendedores, la competencia monopolística muchos, y el monopsonio es un solo comprador. Error común: confundir monopolio (un vendedor) con monopsonio (un comprador) porque los nombres se parecen.",
      "A single seller, no substitutes and high barriers is a monopoly. Oligopoly has a few sellers, monopolistic competition many, and monopsony is a single buyer. Common mistake: confusing monopoly (one seller) with monopsony (one buyer) because the names look alike.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'market-structures',
  },
  {
    id: 'ECO-07-E2',
    level: 1,
    module: 'ECO-07',
    kind: 'classify',
    flavor: 'concept',
    prompt: t(
      "Clasifica cada mercado según la estructura a la que más se parece.",
      "Classify each market by the structure it most resembles.",
    ),
    categories: [
      { id: 'ECO-07-E2-c1', label: t("Competencia perfecta", "Perfect competition") },
      { id: 'ECO-07-E2-c2', label: t("Competencia monopolística", "Monopolistic competition") },
      { id: 'ECO-07-E2-c3', label: t("Oligopolio", "Oligopoly") },
      { id: 'ECO-07-E2-c4', label: t("Monopolio", "Monopoly") },
    ],
    items: [
      { id: 'ECO-07-E2-i1', label: t("Cientos de productores que venden el mismo maíz a granel en una central de abasto", "Hundreds of growers selling the same bulk corn at a wholesale market"), correctCategoryId: 'ECO-07-E2-c1' },
      { id: 'ECO-07-E2-i2', label: t("Las taquerías de una ciudad, cada una con su propia salsa y estilo", "A city's taco stands, each with its own salsa and style"), correctCategoryId: 'ECO-07-E2-c2' },
      { id: 'ECO-07-E2-i3', label: t("Tres grandes compañías de telefonía móvil que se reparten casi todo el mercado", "Three large mobile phone companies that share almost the whole market"), correctCategoryId: 'ECO-07-E2-c3' },
      { id: 'ECO-07-E2-i4', label: t("La única red de agua potable que abastece a una ciudad", "The only drinking water network supplying a city"), correctCategoryId: 'ECO-07-E2-c4' },
      { id: 'ECO-07-E2-i5', label: t("Las estéticas y peluquerías de una colonia", "The beauty salons and barbershops in a neighborhood"), correctCategoryId: 'ECO-07-E2-c2' },
      { id: 'ECO-07-E2-i6', label: t("Dos aerolíneas que cubren casi todos los vuelos de una ruta", "Two airlines covering almost all flights on a route"), correctCategoryId: 'ECO-07-E2-c3' },
    ],
    explanation: t(
      "Maíz a granel: producto idéntico y muchísimos vendedores (competencia perfecta). Taquerías y estéticas: muchos vendedores con producto diferenciado (competencia monopolística). Telefonía y aerolíneas de una ruta: pocas empresas grandes (oligopolio). Red de agua: un solo proveedor (monopolio). Error común: llamar \"monopolio\" a cualquier empresa grande, aunque tenga competidores.",
      "Bulk corn: identical product and a huge number of sellers (perfect competition). Taco stands and salons: many sellers with a differentiated product (monopolistic competition). Mobile phones and airlines on a route: a few large firms (oligopoly). Water network: a single provider (monopoly). Common mistake: calling any large firm a \"monopoly\", even if it has competitors.",
    ),
    difficulty: 1,
    points: 15,
    competency: 'market-structures',
  },
  {
    id: 'ECO-07-E3',
    level: 1,
    module: 'ECO-07',
    kind: 'truefalse',
    flavor: 'concept',
    prompt: t(
      "En competencia perfecta, un productor puede vender por encima del precio de mercado sin perder clientes, porque todos los productos son iguales.",
      "In perfect competition, a producer can sell above the market price without losing customers, because all products are the same.",
    ),
    answer: false,
    explanation: t(
      "Falso. Precisamente porque el producto es idéntico y hay muchísimos vendedores, si uno cobra más, los compradores se van con otro: cada empresa es \"tomadora de precios\". Error común: pensar que \"productos iguales\" protege al vendedor; en realidad lo deja sin poder de mercado.",
      "False. Precisely because the product is identical and there are a huge number of sellers, if one charges more, buyers go to another: each firm is a \"price taker\". Common mistake: thinking that \"identical products\" protect the seller; in fact they leave it without market power.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'market-structures',
  },
  {
    id: 'ECO-07-E4',
    level: 1,
    module: 'ECO-07',
    kind: 'numeric',
    flavor: 'case',
    context: t(
      "En una ciudad hipotética, cuatro cadenas de farmacias se reparten el mercado: 40 %, 30 %, 20 % y 10 %.",
      "In a hypothetical city, four pharmacy chains share the market: 40%, 30%, 20% and 10%.",
    ),
    prompt: t(
      "Calcula el Índice Herfindahl-Hirschman (IHH) de este mercado de farmacias.",
      "Compute the Herfindahl-Hirschman Index (HHI) of this pharmacy market.",
    ),
    answer: 3000,
    unit: 'none',
    decimals: 0,
    tolerance: { abs: 0.5 },
    explanation: t(
      "IHH = 40² + 30² + 20² + 10² = 1,600 + 900 + 400 + 100 = 3,000: un mercado concentrado. Error común: sumar las participaciones (100) o elevar al cuadrado la suma; hay que elevar cada participación y luego sumar.",
      "HHI = 40² + 30² + 20² + 10² = 1,600 + 900 + 400 + 100 = 3,000: a concentrated market. Common mistake: adding the shares (100) or squaring the sum; you must square each share and then add.",
    ),
    difficulty: 2,
    points: 15,
    competency: 'market-structures',
  },
  {
    id: 'ECO-07-E5',
    level: 1,
    module: 'ECO-07',
    kind: 'multi',
    flavor: 'concept',
    prompt: t(
      "¿Cuáles de estas situaciones son barreras a la entrada para un nuevo competidor? Selecciona todas las que apliquen.",
      "Which of these situations are barriers to entry for a new competitor? Select all that apply.",
    ),
    options: [
      { id: 'ECO-07-E5-a', text: t("Una patente que da a una farmacéutica derechos exclusivos sobre un medicamento", "A patent giving a drugmaker exclusive rights over a medicine") },
      { id: 'ECO-07-E5-b', text: t("Necesitar una inversión de miles de millones para construir una planta", "Needing an investment of billions to build a plant") },
      { id: 'ECO-07-E5-c', text: t("Que haya muchos compradores pequeños en el mercado", "There being many small buyers in the market") },
      { id: 'ECO-07-E5-d', text: t("Requerir una concesión del gobierno para operar", "Requiring a government concession to operate") },
      { id: 'ECO-07-E5-e', text: t("Que los consumidores conozcan bien los precios de todos los vendedores", "Consumers knowing the prices of all sellers well") },
    ],
    correctOptionIds: ['ECO-07-E5-a', 'ECO-07-E5-b', 'ECO-07-E5-d'],
    explanation: t(
      "Patentes, inversiones iniciales enormes y concesiones dificultan que llegue alguien nuevo: son barreras. Muchos compradores pequeños e información clara sobre precios son rasgos de mercados competitivos, no barreras. Error común: pensar que todo lo que describe un mercado es una barrera.",
      "Patents, huge initial investments and concessions make it hard for someone new to arrive: they are barriers. Many small buyers and clear price information are features of competitive markets, not barriers. Common mistake: thinking everything that describes a market is a barrier.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'market-structures',
  },
  {
    id: 'ECO-07-E6',
    level: 1,
    module: 'ECO-07',
    kind: 'mcq',
    flavor: 'case',
    context: t(
      "En un municipio hay solo tres gasolineras. Sus dueños se reúnen y acuerdan cobrar todos el mismo precio, más alto que antes, y no bajarlo.",
      "A municipality has only three gas stations. Their owners meet and agree to all charge the same price, higher than before, and not lower it.",
    ),
    prompt: t(
      "¿Cómo se describe mejor lo que hicieron los dueños de las gasolineras?",
      "How is what the gas station owners did best described?",
    ),
    options: [
      { id: 'ECO-07-E6-a', text: t("Competencia sana, porque todos ofrecen el mismo precio", "Healthy competition, because they all offer the same price") },
      { id: 'ECO-07-E6-b', text: t("Un monopolio natural, porque solo hay tres", "A natural monopoly, because there are only three") },
      { id: 'ECO-07-E6-c', text: t("Un acuerdo entre competidores para fijar precios (colusión), que la ley de competencia prohíbe", "An agreement between competitors to fix prices (collusion), which competition law prohibits") },
      { id: 'ECO-07-E6-d', text: t("Política monetaria restrictiva aplicada por los empresarios", "Contractionary monetary policy applied by the business owners") },
    ],
    correctOptionId: 'ECO-07-E6-c',
    explanation: t(
      "Es un oligopolio cuyos integrantes se coluden para fijar precios: una práctica monopólica sancionada por la ley de competencia económica, porque daña al consumidor. Que el precio sea igual no significa competencia si fue acordado. Error común: llamarlo monopolio; hay tres vendedores, no uno.",
      "It is an oligopoly whose members collude to fix prices: a monopolistic practice penalized by economic competition law, because it harms consumers. Equal prices do not mean competition if they were agreed upon. Common mistake: calling it a monopoly; there are three sellers, not one.",
    ),
    difficulty: 2,
    points: 15,
    competency: 'market-structures',
  },

  // ═════════════════════════ ECO-08 ═════════════════════════
  {
    id: 'ECO-08-E1',
    level: 1,
    module: 'ECO-08',
    kind: 'mcq',
    flavor: 'concept',
    prompt: t(
      "¿Cuál de estas operaciones suma al PIB de México?",
      "Which of these transactions adds to Mexico's GDP?",
    ),
    options: [
      { id: 'ECO-08-E1-a', text: t("Un auto nuevo armado en una planta de Aguascalientes por una empresa japonesa", "A new car assembled at a plant in Aguascalientes by a Japanese company") },
      { id: 'ECO-08-E1-b', text: t("La compra de un auto usado a un vecino", "Buying a used car from a neighbor") },
      { id: 'ECO-08-E1-c', text: t("Un auto fabricado en Texas por una empresa mexicana", "A car made in Texas by a Mexican company") },
      { id: 'ECO-08-E1-d', text: t("La compra de acciones de una armadora en la bolsa", "Buying shares of an automaker on the stock exchange") },
    ],
    correctOptionId: 'ECO-08-E1-a',
    explanation: t(
      "El PIB cuenta lo producido dentro del territorio, sin importar la nacionalidad de la empresa: el auto armado en Aguascalientes sí suma. El auto usado no es producción nueva, el de Texas se produjo fuera y comprar acciones solo cambia de dueño un activo. Error común: pensar que importa la nacionalidad de la empresa y no el lugar de producción.",
      "GDP counts what is produced within the territory, regardless of the firm's nationality: the car assembled in Aguascalientes does count. The used car is not new production, the Texas car was produced abroad, and buying shares only changes the owner of an asset. Common mistake: thinking the firm's nationality matters rather than the place of production.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'gdp',
  },
  {
    id: 'ECO-08-E2',
    level: 1,
    module: 'ECO-08',
    kind: 'numeric',
    flavor: 'case',
    context: t(
      "Datos de una economía hipotética (miles de millones de pesos): consumo 600, inversión 150, gasto del gobierno 120, exportaciones 200, importaciones 220.",
      "Data for a hypothetical economy (billions of pesos): consumption 600, investment 150, government spending 120, exports 200, imports 220.",
    ),
    prompt: t(
      "Calcula el PIB con el método del gasto, en miles de millones de pesos.",
      "Compute GDP with the expenditure method, in billions of pesos.",
    ),
    answer: 850,
    unit: 'none',
    decimals: 0,
    tolerance: { abs: 0.5 },
    explanation: t(
      "PIB = C + I + G + (X − M) = 600 + 150 + 120 + (200 − 220) = 870 − 20 = 850. Error común: sumar las importaciones (1,290) en lugar de restarlas; las importaciones se produjeron en otro país.",
      "GDP = C + I + G + (X − M) = 600 + 150 + 120 + (200 − 220) = 870 − 20 = 850. Common mistake: adding imports (1,290) instead of subtracting them; imports were produced in another country.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'gdp',
  },
  {
    id: 'ECO-08-E3',
    level: 1,
    module: 'ECO-08',
    kind: 'fields',
    flavor: 'case',
    context: t(
      "Un agricultor vende trigo a un molino por $20. El molino vende la harina a una panadería por $35. La panadería vende el pan a sus clientes por $60. Supón que el agricultor no compró insumos.",
      "A farmer sells wheat to a mill for $20. The mill sells the flour to a bakery for $35. The bakery sells the bread to its customers for $60. Assume the farmer bought no inputs.",
    ),
    prompt: t(
      "Calcula el valor agregado del molino, el de la panadería y la aportación total de la cadena al PIB.",
      "Compute the mill's value added, the bakery's value added and the chain's total contribution to GDP.",
    ),
    fields: [
      { id: 'f1', label: t("Valor agregado del molino ($)", "Mill's value added ($)"), answer: 15, unit: 'MXN', tolerance: { abs: 0.5 } },
      { id: 'f2', label: t("Valor agregado de la panadería ($)", "Bakery's value added ($)"), answer: 25, unit: 'MXN', tolerance: { abs: 0.5 } },
      { id: 'f3', label: t("Aportación total al PIB ($)", "Total contribution to GDP ($)"), answer: 60, unit: 'MXN', tolerance: { abs: 0.5 } },
    ],
    explanation: t(
      "Molino: 35 − 20 = $15. Panadería: 60 − 35 = $25. Total: 20 + 15 + 25 = $60, igual al precio del pan (bien final). Error común: sumar todas las ventas (20 + 35 + 60 = $115), lo que cuenta el trigo y la harina dos o tres veces.",
      "Mill: 35 − 20 = $15. Bakery: 60 − 35 = $25. Total: 20 + 15 + 25 = $60, equal to the bread's price (final good). Common mistake: adding all sales (20 + 35 + 60 = $115), which counts the wheat and flour two or three times.",
    ),
    difficulty: 2,
    points: 15,
    competency: 'gdp',
  },
  {
    id: 'ECO-08-E4',
    level: 1,
    module: 'ECO-08',
    kind: 'truefalse',
    flavor: 'interpret',
    prompt: t(
      "El PIB nominal de un país puede aumentar de un año a otro aunque la cantidad producida de bienes y servicios no cambie.",
      "A country's nominal GDP can increase from one year to the next even if the quantity of goods and services produced does not change.",
    ),
    answer: true,
    explanation: t(
      "Verdadero. El PIB nominal usa precios de cada año: si los precios suben, sube aunque se produzca lo mismo. Por eso se usa el PIB real para medir crecimiento. Error común: leer un aumento del PIB nominal como si fuera más producción.",
      "True. Nominal GDP uses each year's prices: if prices rise, it rises even if the same amount is produced. That is why real GDP is used to measure growth. Common mistake: reading a rise in nominal GDP as if it were more production.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'gdp',
  },
  {
    id: 'ECO-08-E5',
    level: 1,
    module: 'ECO-08',
    kind: 'formula',
    flavor: 'concept',
    prompt: t(
      "Completa la fórmula del PIB por el método del gasto.",
      "Complete the GDP formula under the expenditure method.",
    ),
    template: 'PIB / GDP = {{b1}} + I + G + (X {{b2}} {{b3}})',
    blanks: [
      {
        id: 'b1',
        options: [
          { id: 'ECO-08-E5-b1-a', text: t("C (consumo de los hogares)", "C (household consumption)") },
          { id: 'ECO-08-E5-b1-b', text: t("S (ahorro)", "S (saving)") },
          { id: 'ECO-08-E5-b1-c', text: t("T (impuestos)", "T (taxes)") },
        ],
        correctOptionId: 'ECO-08-E5-b1-a',
      },
      {
        id: 'b2',
        options: [
          { id: 'ECO-08-E5-b2-a', text: t("+", "+") },
          { id: 'ECO-08-E5-b2-b', text: t("−", "−") },
          { id: 'ECO-08-E5-b2-c', text: t("×", "×") },
        ],
        correctOptionId: 'ECO-08-E5-b2-b',
      },
      {
        id: 'b3',
        options: [
          { id: 'ECO-08-E5-b3-a', text: t("M (importaciones)", "M (imports)") },
          { id: 'ECO-08-E5-b3-b', text: t("D (depreciación)", "D (depreciation)") },
          { id: 'ECO-08-E5-b3-c', text: t("P (población)", "P (population)") },
        ],
        correctOptionId: 'ECO-08-E5-b3-a',
      },
    ],
    explanation: t(
      "PIB = C + I + G + (X − M): consumo, inversión, gasto del gobierno y exportaciones netas. Las importaciones se restan porque se produjeron fuera. Error común: poner el ahorro o los impuestos en lugar del consumo; esos no son gasto en bienes finales.",
      "GDP = C + I + G + (X − M): consumption, investment, government spending and net exports. Imports are subtracted because they were produced abroad. Common mistake: putting saving or taxes in place of consumption; those are not spending on final goods.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'gdp',
  },
  {
    id: 'ECO-08-E6',
    level: 1,
    module: 'ECO-08',
    kind: 'fields',
    flavor: 'case',
    context: t(
      "Un país hipotético tuvo un PIB real de $1,960 millones en el año 1. En el año 2, su PIB nominal fue de $2,200 millones y el deflactor del PIB fue 110 (año base = 100).",
      "A hypothetical country had real GDP of $1,960 million in year 1. In year 2, its nominal GDP was $2,200 million and the GDP deflator was 110 (base year = 100).",
    ),
    prompt: t(
      "Calcula el PIB real del año 2 y su crecimiento real respecto al año 1.",
      "Compute year 2 real GDP and its real growth versus year 1.",
    ),
    fields: [
      { id: 'f1', label: t("PIB real año 2 (millones de $)", "Real GDP year 2 ($ million)"), answer: 2000, unit: 'none', tolerance: { abs: 0.5 } },
      { id: 'f2', label: t("Crecimiento real (%)", "Real growth (%)"), answer: 2.04, unit: '%', tolerance: { abs: 0.01 } },
    ],
    explanation: t(
      "PIB real = 2,200 ÷ (110 ÷ 100) = 2,200 ÷ 1.10 = 2,000. Crecimiento = (2,000 ÷ 1,960 − 1) × 100 ≈ 2.04 %. Error común: comparar el nominal 2,200 con 1,960 (≈ 12.24 %), lo que mezcla aumento de precios con producción.",
      "Real GDP = 2,200 ÷ (110 ÷ 100) = 2,200 ÷ 1.10 = 2,000. Growth = (2,000 ÷ 1,960 − 1) × 100 ≈ 2.04%. Common mistake: comparing nominal 2,200 with 1,960 (≈ 12.24%), which mixes price increases with production.",
    ),
    difficulty: 2,
    points: 20,
    competency: 'gdp',
  },

  // ═════════════════════════ ECO-09 ═════════════════════════
  {
    id: 'ECO-09-E1',
    level: 1,
    module: 'ECO-09',
    kind: 'numeric',
    flavor: 'concept',
    context: t(
      "Un índice de precios al consumidor hipotético pasó de 120 en enero de un año a 126 en enero del año siguiente.",
      "A hypothetical consumer price index went from 120 in January of one year to 126 in January of the next year.",
    ),
    prompt: t(
      "¿Cuál fue la inflación anual, en porcentaje?",
      "What was the annual inflation, as a percentage?",
    ),
    answer: 5,
    unit: '%',
    decimals: 2,
    tolerance: { abs: 0.01 },
    explanation: t(
      "Inflación = (126 ÷ 120 − 1) × 100 = (1.05 − 1) × 100 = 5 %. Error común: restar los índices (126 − 120 = 6) y decir 6 %; la diferencia en puntos del índice no es un porcentaje si la base no es 100.",
      "Inflation = (126 ÷ 120 − 1) × 100 = (1.05 − 1) × 100 = 5%. Common mistake: subtracting the indices (126 − 120 = 6) and saying 6%; the point difference in the index is not a percentage unless the base is 100.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'inflation-employment',
  },
  {
    id: 'ECO-09-E2',
    level: 1,
    module: 'ECO-09',
    kind: 'numeric',
    flavor: 'case',
    context: t(
      "En un país hipotético, la Población Económicamente Activa es de 50 millones de personas y 1.5 millones de ellas no tienen trabajo y lo buscan activamente.",
      "In a hypothetical country, the Economically Active Population is 50 million people and 1.5 million of them have no job and are actively looking for one.",
    ),
    prompt: t(
      "Calcula la tasa de desempleo de ese país, en porcentaje.",
      "Compute that country's unemployment rate, as a percentage.",
    ),
    answer: 3,
    unit: '%',
    decimals: 2,
    tolerance: { abs: 0.01 },
    explanation: t(
      "Tasa = desocupados ÷ PEA × 100 = 1.5 ÷ 50 × 100 = 3 %. Error común: dividir entre la población total del país en lugar de la PEA, lo que da una tasa artificialmente baja.",
      "Rate = unemployed ÷ PEA × 100 = 1.5 ÷ 50 × 100 = 3%. Common mistake: dividing by the country's total population instead of the PEA, which gives an artificially low rate.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'inflation-employment',
  },
  {
    id: 'ECO-09-E3',
    level: 1,
    module: 'ECO-09',
    kind: 'classify',
    flavor: 'concept',
    prompt: t(
      "Clasifica a cada persona según su situación en el mercado laboral.",
      "Classify each person by their situation in the labor market.",
    ),
    categories: [
      { id: 'ECO-09-E3-c1', label: t("Ocupada", "Employed") },
      { id: 'ECO-09-E3-c2', label: t("Desocupada (desempleada)", "Unemployed") },
      { id: 'ECO-09-E3-c3', label: t("No económicamente activa (PNEA)", "Not economically active (PNEA)") },
    ],
    items: [
      { id: 'ECO-09-E3-i1', label: t("Sofía, estudiante de tiempo completo que no trabaja ni busca empleo", "Sofía, a full-time student who neither works nor looks for a job"), correctCategoryId: 'ECO-09-E3-c3' },
      { id: 'ECO-09-E3-i2', label: t("Raúl, perdió su empleo y esta semana envió solicitudes a cinco empresas", "Raúl, lost his job and sent applications to five companies this week"), correctCategoryId: 'ECO-09-E3-c2' },
      { id: 'ECO-09-E3-i3', label: t("Doña Carmen, vende tamales por su cuenta todas las mañanas", "Doña Carmen, sells tamales on her own every morning"), correctCategoryId: 'ECO-09-E3-c1' },
      { id: 'ECO-09-E3-i4', label: t("Don Jorge, jubilado que no trabaja ni busca trabajo", "Don Jorge, a retiree who neither works nor looks for work"), correctCategoryId: 'ECO-09-E3-c3' },
      { id: 'ECO-09-E3-i5', label: t("Mariana, trabaja medio tiempo en una cafetería", "Mariana, works part-time at a coffee shop"), correctCategoryId: 'ECO-09-E3-c1' },
      { id: 'ECO-09-E3-i6', label: t("Pablo, recién egresado que acude a entrevistas sin conseguir empleo aún", "Pablo, a recent graduate going to interviews without landing a job yet"), correctCategoryId: 'ECO-09-E3-c2' },
    ],
    explanation: t(
      "Ocupados: quienes trabajan, aunque sea por su cuenta o medio tiempo (Carmen, Mariana). Desocupados: no trabajan pero buscan activamente (Raúl, Pablo). PNEA: ni trabajan ni buscan (Sofía, Jorge). Error común: contar a estudiantes y jubilados como desempleados; no lo son porque no buscan trabajo.",
      "Employed: those who work, even on their own or part-time (Carmen, Mariana). Unemployed: they do not work but actively seek work (Raúl, Pablo). PNEA: they neither work nor seek work (Sofía, Jorge). Common mistake: counting students and retirees as unemployed; they are not because they are not looking for work.",
    ),
    difficulty: 1,
    points: 15,
    competency: 'inflation-employment',
  },
  {
    id: 'ECO-09-E4',
    level: 1,
    module: 'ECO-09',
    kind: 'mcq',
    flavor: 'interpret',
    prompt: t(
      "Si tu sueldo sube 4 % en un año y la inflación de ese año es 6 %, ¿qué pasó con tu salario real?",
      "If your salary rises 4% in a year and inflation that year is 6%, what happened to your real wage?",
    ),
    options: [
      { id: 'ECO-09-E4-a', text: t("Subió cerca de 10 %", "It rose about 10%") },
      { id: 'ECO-09-E4-b', text: t("Subió 4 %, igual que el sueldo", "It rose 4%, same as the salary") },
      { id: 'ECO-09-E4-c', text: t("Bajó cerca de 2 %: puedes comprar menos que antes", "It fell about 2%: you can buy less than before") },
      { id: 'ECO-09-E4-d', text: t("No cambió, porque el sueldo sí aumentó", "It did not change, because the salary did increase") },
    ],
    correctOptionId: 'ECO-09-E4-c',
    explanation: t(
      "El salario real compara lo que ganas con lo que cuestan las cosas: 4 % − 6 % ≈ −2 % (exacto: 1.04 ÷ 1.06 − 1 ≈ −1.9 %). Puedes comprar menos. Error común: fijarse solo en el aumento nominal y creer que se ganó poder de compra.",
      "The real wage compares what you earn with what things cost: 4% − 6% ≈ −2% (exact: 1.04 ÷ 1.06 − 1 ≈ −1.9%). You can buy less. Common mistake: looking only at the nominal raise and believing purchasing power was gained.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'inflation-employment',
  },
  {
    id: 'ECO-09-E5',
    level: 1,
    module: 'ECO-09',
    kind: 'truefalse',
    flavor: 'concept',
    prompt: t(
      "Según la regla del 70, una economía cuyo PIB real crece 2 % al año tarda aproximadamente 35 años en duplicar su tamaño.",
      "According to the rule of 70, an economy whose real GDP grows 2% a year takes approximately 35 years to double in size.",
    ),
    answer: true,
    explanation: t(
      "Verdadero: 70 ÷ 2 = 35 años. La regla es una aproximación del crecimiento compuesto. Error común: dividir 100 ÷ 2 = 50 años, como si el crecimiento fuera simple y no compuesto.",
      "True: 70 ÷ 2 = 35 years. The rule approximates compound growth. Common mistake: dividing 100 ÷ 2 = 50 years, as if growth were simple rather than compound.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'inflation-employment',
  },
  {
    id: 'ECO-09-E6',
    level: 1,
    module: 'ECO-09',
    kind: 'fields',
    flavor: 'case',
    context: t(
      "Diego ganaba $10,000 al mes. Un año después gana $10,500. En ese periodo, el índice de precios pasó de 100 a 103.",
      "Diego earned $10,000 a month. A year later he earns $10,500. In that period, the price index went from 100 to 103.",
    ),
    prompt: t(
      "Calcula el aumento nominal del sueldo de Diego, su sueldo real en pesos del año inicial y su cambio real.",
      "Compute Diego's nominal salary increase, his real salary in starting-year pesos and his real change.",
    ),
    fields: [
      { id: 'f1', label: t("Aumento nominal (%)", "Nominal increase (%)"), answer: 5, unit: '%', tolerance: { abs: 0.01 } },
      { id: 'f2', label: t("Sueldo real en pesos del año inicial ($)", "Real salary in starting-year pesos ($)"), answer: 10194.17, unit: 'MXN', tolerance: { abs: 0.5 } },
      { id: 'f3', label: t("Cambio real (%)", "Real change (%)"), answer: 1.94, unit: '%', tolerance: { abs: 0.01 } },
    ],
    explanation: t(
      "Nominal: (10,500 ÷ 10,000 − 1) × 100 = 5 %. Real: 10,500 ÷ 1.03 ≈ $10,194.17. Cambio real: (10,194.17 ÷ 10,000 − 1) × 100 ≈ 1.94 %. Diego sí ganó poder de compra, pero menos de lo que parece. Error común: restar 5 − 3 = 2 % y dar eso como exacto; es solo una aproximación.",
      "Nominal: (10,500 ÷ 10,000 − 1) × 100 = 5%. Real: 10,500 ÷ 1.03 ≈ $10,194.17. Real change: (10,194.17 ÷ 10,000 − 1) × 100 ≈ 1.94%. Diego did gain purchasing power, but less than it seems. Common mistake: subtracting 5 − 3 = 2% and giving that as exact; it is only an approximation.",
    ),
    difficulty: 2,
    points: 20,
    competency: 'inflation-employment',
  },

  // ═════════════════════════ ECO-10 ═════════════════════════
  {
    id: 'ECO-10-E1',
    level: 1,
    module: 'ECO-10',
    kind: 'mcq',
    flavor: 'concept',
    prompt: t(
      "¿En qué situación es más probable que el banco central suba su tasa de interés de referencia?",
      "In which situation is the central bank most likely to raise its policy interest rate?",
    ),
    options: [
      { id: 'ECO-10-E1-a', text: t("Cuando la inflación está por encima de la meta y sigue subiendo", "When inflation is above target and still rising") },
      { id: 'ECO-10-E1-b', text: t("Cuando hay recesión y la inflación está por debajo de la meta", "When there is a recession and inflation is below target") },
      { id: 'ECO-10-E1-c', text: t("Cuando el gobierno quiere gastar más en carreteras", "When the government wants to spend more on roads") },
      { id: 'ECO-10-E1-d', text: t("Cuando los precios llevan meses bajando en general", "When prices have been falling in general for months") },
    ],
    correctOptionId: 'ECO-10-E1-a',
    explanation: t(
      "Subir la tasa es política restrictiva: encarece el crédito para frenar el gasto y la inflación. Con recesión, inflación baja o deflación, lo lógico sería bajarla. El gasto en carreteras es política fiscal, no monetaria. Error común: mezclar las decisiones del banco central con las del gobierno.",
      "Raising the rate is contractionary policy: it makes credit more expensive to slow spending and inflation. With a recession, low inflation or deflation, the logical move would be to lower it. Road spending is fiscal policy, not monetary. Common mistake: mixing up central bank decisions with government decisions.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'monetary-policy',
  },
  {
    id: 'ECO-10-E2',
    level: 1,
    module: 'ECO-10',
    kind: 'classify',
    flavor: 'concept',
    prompt: t(
      "Clasifica cada acción del banco central como política monetaria expansiva o restrictiva.",
      "Classify each central bank action as expansionary or contractionary monetary policy.",
    ),
    categories: [
      { id: 'ECO-10-E2-c1', label: t("Expansiva", "Expansionary") },
      { id: 'ECO-10-E2-c2', label: t("Restrictiva", "Contractionary") },
    ],
    items: [
      { id: 'ECO-10-E2-i1', label: t("Bajar la tasa de referencia de 7 % a 6.5 %", "Lowering the policy rate from 7% to 6.5%"), correctCategoryId: 'ECO-10-E2-c1' },
      { id: 'ECO-10-E2-i2', label: t("Subir la tasa de referencia en un punto porcentual", "Raising the policy rate by one percentage point"), correctCategoryId: 'ECO-10-E2-c2' },
      { id: 'ECO-10-E2-i3', label: t("Comprar valores a los bancos, entregándoles dinero", "Buying securities from banks, giving them money"), correctCategoryId: 'ECO-10-E2-c1' },
      { id: 'ECO-10-E2-i4', label: t("Vender valores a los bancos, retirándoles dinero", "Selling securities to banks, taking money from them"), correctCategoryId: 'ECO-10-E2-c2' },
      { id: 'ECO-10-E2-i5', label: t("Reducir el porcentaje de depósitos que los bancos deben dejar en reserva", "Reducing the share of deposits banks must keep in reserve"), correctCategoryId: 'ECO-10-E2-c1' },
    ],
    explanation: t(
      "Expansiva: bajar la tasa, comprar valores (inyecta dinero) y reducir reservas obligatorias (los bancos pueden prestar más). Restrictiva: subir la tasa y vender valores (retira dinero). Error común: pensar que cuando el banco central \"compra\" está retirando dinero; al pagar, en realidad lo inyecta.",
      "Expansionary: lowering the rate, buying securities (injects money) and reducing required reserves (banks can lend more). Contractionary: raising the rate and selling securities (withdraws money). Common mistake: thinking that when the central bank \"buys\" it withdraws money; by paying, it actually injects it.",
    ),
    difficulty: 2,
    points: 15,
    competency: 'monetary-policy',
  },
  {
    id: 'ECO-10-E3',
    level: 1,
    module: 'ECO-10',
    kind: 'numeric',
    flavor: 'case',
    context: t(
      "Un pagaré bancario hipotético paga 11 % de interés anual y la inflación esperada para el año es de 4 %.",
      "A hypothetical bank note pays 11% annual interest and expected inflation for the year is 4%.",
    ),
    prompt: t(
      "Usando la aproximación simple, ¿cuál es la tasa de interés real del pagaré, en porcentaje?",
      "Using the simple approximation, what is the bank note's real interest rate, as a percentage?",
    ),
    answer: 7,
    unit: '%',
    decimals: 2,
    tolerance: { abs: 0.01 },
    explanation: t(
      "Tasa real ≈ nominal − inflación = 11 % − 4 % = 7 %. Es lo que realmente crece tu poder de compra. Error común: sumar la inflación (15 %) o creer que el 11 % completo es ganancia real.",
      "Real rate ≈ nominal − inflation = 11% − 4% = 7%. That is how much your purchasing power really grows. Common mistake: adding inflation (15%) or believing the full 11% is a real gain.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'monetary-policy',
  },
  {
    id: 'ECO-10-E4',
    level: 1,
    module: 'ECO-10',
    kind: 'truefalse',
    flavor: 'concept',
    prompt: t(
      "Cuando el banco central sube la tasa de referencia, la inflación baja de inmediato, desde el mes siguiente.",
      "When the central bank raises the policy rate, inflation falls immediately, starting the following month.",
    ),
    answer: false,
    explanation: t(
      "Falso. La política monetaria actúa con rezago: los efectos sobre créditos, gasto y precios suelen tardar varios trimestres en reflejarse por completo. Por eso el banco central decide mirando hacia adelante. Error común: juzgar una decisión por el dato de inflación del mes siguiente.",
      "False. Monetary policy works with a lag: the effects on loans, spending and prices usually take several quarters to fully show. That is why the central bank decides by looking ahead. Common mistake: judging a decision by the next month's inflation figure.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'monetary-policy',
  },
  {
    id: 'ECO-10-E5',
    level: 1,
    module: 'ECO-10',
    kind: 'multi',
    flavor: 'concept',
    prompt: t(
      "¿Por cuáles de estos canales puede un aumento de la tasa de referencia frenar la inflación? Selecciona todas las que apliquen.",
      "Through which of these channels can a policy rate increase slow inflation? Select all that apply.",
    ),
    options: [
      { id: 'ECO-10-E5-a', text: t("Los créditos se encarecen y la gente y las empresas piden y gastan menos", "Loans get more expensive and people and firms borrow and spend less") },
      { id: 'ECO-10-E5-b', text: t("El peso puede fortalecerse y abaratar los bienes importados", "The peso may strengthen and make imported goods cheaper") },
      { id: 'ECO-10-E5-c', text: t("La gente espera menos inflación y ajusta menos sus precios y salarios", "People expect less inflation and adjust their prices and wages less") },
      { id: 'ECO-10-E5-d', text: t("El gobierno sube el IVA automáticamente", "The government automatically raises VAT") },
      { id: 'ECO-10-E5-e', text: t("Banxico fija por decreto el precio de la tortilla", "Banxico sets the price of tortillas by decree") },
    ],
    correctOptionIds: ['ECO-10-E5-a', 'ECO-10-E5-b', 'ECO-10-E5-c'],
    explanation: t(
      "La tasa actúa por el canal del crédito, del tipo de cambio y de las expectativas (también por el precio de los activos). Subir impuestos es una decisión fiscal del Congreso, no un efecto automático, y el banco central no fija precios de productos. Error común: creer que el banco central controla precios directamente.",
      "The rate works through the credit, exchange rate and expectations channels (also through asset prices). Raising taxes is a fiscal decision by Congress, not an automatic effect, and the central bank does not set product prices. Common mistake: believing the central bank controls prices directly.",
    ),
    difficulty: 2,
    points: 15,
    competency: 'monetary-policy',
  },
  {
    id: 'ECO-10-E6',
    level: 1,
    module: 'ECO-10',
    kind: 'mcq',
    flavor: 'case',
    context: t(
      "Lucía tiene un crédito de negocio con tasa variable: paga la tasa interbancaria de referencia del mercado más 3 puntos porcentuales. Esa tasa estaba en 9 % y, después de que el banco central subió su tasa objetivo, pasó a 10 %.",
      "Lucía has a variable-rate business loan: she pays the market's benchmark interbank rate plus 3 percentage points. That rate was 9% and, after the central bank raised its target rate, it went to 10%.",
    ),
    prompt: t(
      "¿Qué tasa anual pagará ahora Lucía por su crédito?",
      "What annual rate will Lucía now pay on her loan?",
    ),
    options: [
      { id: 'ECO-10-E6-a', text: t("12 %, porque su tasa no cambia", "12%, because her rate does not change") },
      { id: 'ECO-10-E6-b', text: t("13 %", "13%") },
      { id: 'ECO-10-E6-c', text: t("10 %", "10%") },
      { id: 'ECO-10-E6-d', text: t("30 %", "30%") },
    ],
    correctOptionId: 'ECO-10-E6-b',
    explanation: t(
      "Antes pagaba 9 % + 3 = 12 %; ahora 10 % + 3 = 13 %. Así llega la política monetaria a tu bolsillo: los créditos a tasa variable se ajustan con la tasa de mercado. Error común: pensar que la tasa queda fija (12 %) u olvidar sumar el margen de 3 puntos (10 %). Con tasa fija, en cambio, la mensualidad no cambiaría.",
      "She used to pay 9% + 3 = 12%; now 10% + 3 = 13%. That is how monetary policy reaches your wallet: variable-rate loans adjust with the market rate. Common mistake: thinking the rate stays fixed (12%) or forgetting to add the 3-point margin (10%). With a fixed rate, by contrast, the payment would not change.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'monetary-policy',
  },

  // ═════════════════════════ ECO-11 ═════════════════════════
  {
    id: 'ECO-11-E1',
    level: 1,
    module: 'ECO-11',
    kind: 'mcq',
    flavor: 'concept',
    prompt: t(
      "¿Cuál es la mejor definición de política fiscal?",
      "What is the best definition of fiscal policy?",
    ),
    options: [
      { id: 'ECO-11-E1-a', text: t("Las decisiones del banco central sobre la tasa de interés", "The central bank's decisions about the interest rate") },
      { id: 'ECO-11-E1-b', text: t("El uso que hace el gobierno de los impuestos y el gasto público para influir en la economía", "The government's use of taxes and public spending to influence the economy") },
      { id: 'ECO-11-E1-c', text: t("Las reglas para que las empresas compitan entre sí", "The rules for firms to compete with each other") },
      { id: 'ECO-11-E1-d', text: t("La revisión que hace el SAT de las declaraciones de una empresa", "The SAT's review of a company's tax returns") },
    ],
    correctOptionId: 'ECO-11-E1-b',
    explanation: t(
      "La política fiscal es el manejo de ingresos (impuestos) y gastos del gobierno. La tasa de interés es política monetaria (banco central), la competencia es política de competencia y revisar declaraciones es fiscalización, una tarea administrativa. Error común: confundir política fiscal con política monetaria.",
      "Fiscal policy is the management of government revenue (taxes) and spending. The interest rate is monetary policy (central bank), competition is competition policy, and reviewing returns is tax enforcement, an administrative task. Common mistake: confusing fiscal policy with monetary policy.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'fiscal-policy',
  },
  {
    id: 'ECO-11-E2',
    level: 1,
    module: 'ECO-11',
    kind: 'classify',
    flavor: 'concept',
    prompt: t(
      "Clasifica cada medida del gobierno como política fiscal expansiva o contractiva.",
      "Classify each government measure as expansionary or contractionary fiscal policy.",
    ),
    categories: [
      { id: 'ECO-11-E2-c1', label: t("Expansiva", "Expansionary") },
      { id: 'ECO-11-E2-c2', label: t("Contractiva", "Contractionary") },
    ],
    items: [
      { id: 'ECO-11-E2-i1', label: t("Aumentar la inversión en hospitales y carreteras", "Increasing investment in hospitals and roads"), correctCategoryId: 'ECO-11-E2-c1' },
      { id: 'ECO-11-E2-i2', label: t("Subir la tasa de un impuesto al consumo", "Raising the rate of a consumption tax"), correctCategoryId: 'ECO-11-E2-c2' },
      { id: 'ECO-11-E2-i3', label: t("Recortar el gasto en programas públicos", "Cutting spending on public programs"), correctCategoryId: 'ECO-11-E2-c2' },
      { id: 'ECO-11-E2-i4', label: t("Reducir el impuesto sobre la renta de las personas", "Reducing personal income tax"), correctCategoryId: 'ECO-11-E2-c1' },
      { id: 'ECO-11-E2-i5', label: t("Aumentar las transferencias a hogares de bajos ingresos", "Increasing transfers to low-income households"), correctCategoryId: 'ECO-11-E2-c1' },
    ],
    explanation: t(
      "Expansiva: más gasto (obras), más transferencias o menos impuestos dejan más dinero circulando. Contractiva: más impuestos o menos gasto lo retiran. Error común: pensar que subir impuestos es expansivo porque el gobierno \"tendrá más para gastar\"; el efecto inmediato es que las familias gastan menos.",
      "Expansionary: more spending (public works), more transfers or lower taxes leave more money circulating. Contractionary: higher taxes or less spending withdraw it. Common mistake: thinking raising taxes is expansionary because the government \"will have more to spend\"; the immediate effect is that families spend less.",
    ),
    difficulty: 1,
    points: 15,
    competency: 'fiscal-policy',
  },
  {
    id: 'ECO-11-E3',
    level: 1,
    module: 'ECO-11',
    kind: 'numeric',
    flavor: 'case',
    context: t(
      "Un gobierno hipotético obtuvo ingresos por $7,000 millones en el año y tuvo gastos por $7,800 millones.",
      "A hypothetical government had revenue of $7,000 million in the year and spending of $7,800 million.",
    ),
    prompt: t(
      "¿De cuántos millones de pesos fue su déficit fiscal? Responde con un número positivo.",
      "How many million pesos was its fiscal deficit? Answer with a positive number.",
    ),
    answer: 800,
    unit: 'none',
    decimals: 0,
    tolerance: { abs: 0.5 },
    explanation: t(
      "Balance = ingresos − gastos = 7,000 − 7,800 = −800: un déficit de 800 millones, que tendrá que financiarse con deuda. Error común: llamarlo superávit por fijarse en que los ingresos son grandes; lo que importa es si alcanzan para cubrir el gasto.",
      "Balance = revenue − spending = 7,000 − 7,800 = −800: an 800 million deficit, which will have to be financed with debt. Common mistake: calling it a surplus because revenue looks large; what matters is whether it covers spending.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'fiscal-policy',
  },
  {
    id: 'ECO-11-E4',
    level: 1,
    module: 'ECO-11',
    kind: 'fields',
    flavor: 'case',
    context: t(
      "En un modelo económico simple, la propensión marginal a consumir (PMC) es 0.75. El gobierno aumenta su gasto en $50 millones.",
      "In a simple economic model, the marginal propensity to consume (MPC) is 0.75. The government increases its spending by $50 million.",
    ),
    prompt: t(
      "Calcula el multiplicador del gasto y el aumento estimado del PIB.",
      "Compute the spending multiplier and the estimated GDP increase.",
    ),
    fields: [
      { id: 'f1', label: t("Multiplicador (veces)", "Multiplier (times)"), answer: 4, unit: 'times', tolerance: { abs: 0.01 } },
      { id: 'f2', label: t("Aumento del PIB (millones de $)", "GDP increase ($ million)"), answer: 200, unit: 'none', tolerance: { abs: 0.5 } },
    ],
    explanation: t(
      "Multiplicador = 1 ÷ (1 − 0.75) = 1 ÷ 0.25 = 4. ΔPIB ≈ 4 × 50 = 200 millones. Error común: usar 1 ÷ 0.75 ≈ 1.33; el denominador es la parte que no se gasta (1 − PMC).",
      "Multiplier = 1 ÷ (1 − 0.75) = 1 ÷ 0.25 = 4. ΔGDP ≈ 4 × 50 = 200 million. Common mistake: using 1 ÷ 0.75 ≈ 1.33; the denominator is the share that is not spent (1 − MPC).",
    ),
    difficulty: 2,
    points: 15,
    competency: 'fiscal-policy',
  },
  {
    id: 'ECO-11-E5',
    level: 1,
    module: 'ECO-11',
    kind: 'truefalse',
    flavor: 'concept',
    prompt: t(
      "En México, el Presupuesto de Egresos de la Federación lo aprueba la Cámara de Diputados, mientras que la Ley de Ingresos la aprueban ambas cámaras del Congreso.",
      "In Mexico, the Federal Expenditure Budget is approved by the Chamber of Deputies, while the Revenue Law is approved by both chambers of Congress.",
    ),
    answer: true,
    explanation: t(
      "Verdadero. La SHCP prepara el paquete económico; la Ley de Ingresos pasa por diputados y senadores, y el Presupuesto de Egresos es facultad exclusiva de la Cámara de Diputados. Error común: creer que Hacienda o el Senado aprueban el gasto; Hacienda lo propone y ejerce, pero no lo aprueba.",
      "True. The SHCP prepares the economic package; the Revenue Law goes through deputies and senators, and the Expenditure Budget is the exclusive power of the Chamber of Deputies. Common mistake: believing the Ministry of Finance or the Senate approves spending; the Ministry proposes and executes it, but does not approve it.",
    ),
    difficulty: 2,
    points: 15,
    competency: 'fiscal-policy',
  },
  {
    id: 'ECO-11-E6',
    level: 1,
    module: 'ECO-11',
    kind: 'multi',
    flavor: 'interpret',
    context: t(
      "La economía entra en recesión: muchas empresas venden menos y algunas personas pierden ingresos.",
      "The economy enters a recession: many firms sell less and some people lose income.",
    ),
    prompt: t(
      "¿Cuáles de estas respuestas son estabilizadores automáticos, es decir, ocurren sin que se apruebe nada nuevo? Selecciona todas las que apliquen.",
      "Which of these responses are automatic stabilizers, that is, they happen without anything new being approved? Select all that apply.",
    ),
    options: [
      { id: 'ECO-11-E6-a', text: t("La recaudación de ISR baja sola porque las personas y empresas ganan menos", "ISR collection falls on its own because people and firms earn less") },
      { id: 'ECO-11-E6-b', text: t("Más personas califican para apoyos que ya existen y el pago total crece", "More people qualify for existing support and the total payout grows") },
      { id: 'ECO-11-E6-c', text: t("El Congreso aprueba una reforma para bajar la tasa del IVA", "Congress approves a reform to lower the VAT rate") },
      { id: 'ECO-11-E6-d', text: t("El gobierno anuncia un nuevo programa de obras para reactivar la economía", "The government announces a new public works program to revive the economy") },
    ],
    correctOptionIds: ['ECO-11-E6-a', 'ECO-11-E6-b'],
    explanation: t(
      "La caída del ISR y el aumento de pagos de programas existentes ocurren solos al bajar los ingresos: son estabilizadores automáticos. Una reforma al IVA o un nuevo programa de obras requieren una decisión nueva: son medidas discrecionales. Error común: llamar \"automática\" a cualquier medida contra la crisis.",
      "The fall in ISR and the rise in payments from existing programs happen on their own as income falls: they are automatic stabilizers. A VAT reform or a new public works program require a new decision: they are discretionary measures. Common mistake: calling any anti-crisis measure \"automatic\".",
    ),
    difficulty: 2,
    points: 15,
    competency: 'fiscal-policy',
  },

  // ═════════════════════════ ECO-12 ═════════════════════════
  {
    id: 'ECO-12-E1',
    level: 1,
    module: 'ECO-12',
    kind: 'mcq',
    flavor: 'concept',
    prompt: t(
      "¿Cuál es el objetivo prioritario que la Constitución le asigna al Banco de México?",
      "What priority objective does the Constitution assign to Banco de México?",
    ),
    options: [
      { id: 'ECO-12-E1-a', text: t("Lograr el pleno empleo", "Achieving full employment") },
      { id: 'ECO-12-E1-b', text: t("Financiar el gasto del gobierno federal", "Financing federal government spending") },
      { id: 'ECO-12-E1-c', text: t("Procurar la estabilidad del poder adquisitivo de la moneda nacional", "Seeking the stability of the national currency's purchasing power") },
      { id: 'ECO-12-E1-d', text: t("Mantener un tipo de cambio fijo frente al dólar", "Keeping a fixed exchange rate against the dollar") },
    ],
    correctOptionId: 'ECO-12-E1-c',
    explanation: t(
      "El mandato prioritario de Banxico es la estabilidad del poder adquisitivo del peso, es decir, inflación baja y estable. No tiene un mandato prioritario de empleo, no puede ser obligado a financiar al gobierno y el peso tiene un tipo de cambio flexible. Error común: pensar que su tarea principal es controlar el dólar.",
      "Banxico's priority mandate is the stability of the peso's purchasing power, that is, low and stable inflation. It does not have a priority employment mandate, it cannot be forced to finance the government, and the peso has a flexible exchange rate. Common mistake: thinking its main job is to control the dollar.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'central-banking',
  },
  {
    id: 'ECO-12-E2',
    level: 1,
    module: 'ECO-12',
    kind: 'truefalse',
    flavor: 'concept',
    prompt: t(
      "Si al gobierno federal le falta dinero, puede ordenar al Banco de México que le preste para cubrir su gasto.",
      "If the federal government is short of money, it can order Banco de México to lend it money to cover its spending.",
    ),
    answer: false,
    explanation: t(
      "Falso. Banxico es autónomo y ninguna autoridad puede ordenarle conceder financiamiento. Esta regla evita que se \"imprima\" dinero para pagar gasto público, lo que dispararía la inflación. Error común: creer que, como es un banco \"del gobierno\", obedece al gobierno en turno.",
      "False. Banxico is autonomous and no authority can order it to grant financing. This rule prevents money from being \"printed\" to pay public spending, which would make inflation soar. Common mistake: believing that, as a \"government\" bank, it obeys the government in office.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'central-banking',
  },
  {
    id: 'ECO-12-E3',
    level: 1,
    module: 'ECO-12',
    kind: 'multi',
    flavor: 'concept',
    prompt: t(
      "¿Cuáles de estas son funciones del Banco de México? Selecciona todas las que apliquen.",
      "Which of these are functions of Banco de México? Select all that apply.",
    ),
    options: [
      { id: 'ECO-12-E3-a', text: t("Emitir billetes y monedas", "Issuing bills and coins") },
      { id: 'ECO-12-E3-b', text: t("Administrar las reservas internacionales del país", "Managing the country's international reserves") },
      { id: 'ECO-12-E3-c', text: t("Cobrar el ISR y el IVA a los contribuyentes", "Collecting ISR and VAT from taxpayers") },
      { id: 'ECO-12-E3-d', text: t("Operar y regular sistemas de pagos como el SPEI", "Operating and regulating payment systems such as SPEI") },
      { id: 'ECO-12-E3-e', text: t("Dar créditos hipotecarios directamente a las familias", "Granting mortgage loans directly to families") },
    ],
    correctOptionIds: ['ECO-12-E3-a', 'ECO-12-E3-b', 'ECO-12-E3-d'],
    explanation: t(
      "Banxico emite la moneda, administra las reservas internacionales y opera los sistemas de pagos. Cobrar impuestos le toca al SAT y dar hipotecas a las familias es tarea de bancos comerciales u otras instituciones. Error común: pensar que Banxico atiende al público como un banco normal.",
      "Banxico issues currency, manages international reserves and operates payment systems. Collecting taxes belongs to the SAT and granting mortgages to families is a task for commercial banks or other institutions. Common mistake: thinking Banxico serves the public like an ordinary bank.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'central-banking',
  },
  {
    id: 'ECO-12-E4',
    level: 1,
    module: 'ECO-12',
    kind: 'classify',
    flavor: 'concept',
    prompt: t(
      "Clasifica cada tarea según la institución mexicana que la realiza.",
      "Classify each task by the Mexican institution that performs it.",
    ),
    categories: [
      { id: 'ECO-12-E4-c1', label: t("Banco de México", "Banco de México") },
      { id: 'ECO-12-E4-c2', label: t("Secretaría de Hacienda (SHCP)", "Ministry of Finance (SHCP)") },
      { id: 'ECO-12-E4-c3', label: t("INEGI", "INEGI") },
    ],
    items: [
      { id: 'ECO-12-E4-i1', label: t("Decidir la tasa objetivo de interés interbancario a un día", "Deciding the target overnight interbank interest rate"), correctCategoryId: 'ECO-12-E4-c1' },
      { id: 'ECO-12-E4-i2', label: t("Calcular el Índice Nacional de Precios al Consumidor", "Computing the National Consumer Price Index"), correctCategoryId: 'ECO-12-E4-c3' },
      { id: 'ECO-12-E4-i3', label: t("Preparar el paquete económico con la propuesta de ingresos y gastos", "Preparing the economic package with the revenue and spending proposal"), correctCategoryId: 'ECO-12-E4-c2' },
      { id: 'ECO-12-E4-i4', label: t("Poner en circulación un nuevo billete", "Putting a new bill into circulation"), correctCategoryId: 'ECO-12-E4-c1' },
      { id: 'ECO-12-E4-i5', label: t("Medir el Producto Interno Bruto del país", "Measuring the country's Gross Domestic Product"), correctCategoryId: 'ECO-12-E4-c3' },
      { id: 'ECO-12-E4-i6', label: t("Diseñar la política de impuestos del gobierno federal", "Designing the federal government's tax policy"), correctCategoryId: 'ECO-12-E4-c2' },
    ],
    explanation: t(
      "Banxico: política monetaria y emisión de billetes. SHCP: política fiscal (impuestos y paquete económico). INEGI: estadísticas oficiales como el INPC y el PIB. Error común: pensar que Banxico calcula la inflación; Banxico la usa para decidir, pero el INPC lo publica el INEGI.",
      "Banxico: monetary policy and issuing bills. SHCP: fiscal policy (taxes and the economic package). INEGI: official statistics such as the INPC and GDP. Common mistake: thinking Banxico computes inflation; Banxico uses it to decide, but the INPC is published by INEGI.",
    ),
    difficulty: 2,
    points: 15,
    competency: 'central-banking',
  },
  {
    id: 'ECO-12-E5',
    level: 1,
    module: 'ECO-12',
    kind: 'numeric',
    flavor: 'interpret',
    context: t(
      "Banxico tiene una meta de inflación de 3 % con un intervalo de variación de ± 1 punto porcentual. Supón que la inflación anual observada es de 4.6 %.",
      "Banxico has a 3% inflation target with a variability range of ± 1 percentage point. Suppose observed annual inflation is 4.6%.",
    ),
    prompt: t(
      "¿Por cuántos puntos porcentuales rebasa esa inflación el límite superior del intervalo?",
      "By how many percentage points does that inflation exceed the upper limit of the range?",
    ),
    answer: 0.6,
    unit: '%',
    decimals: 1,
    tolerance: { abs: 0.01 },
    explanation: t(
      "Límite superior = 3 + 1 = 4 %. Exceso = 4.6 − 4 = 0.6 puntos. Respecto a la meta puntual, el exceso sería 1.6 puntos. Error común: comparar contra 3 % y responder 1.6, o confundir el intervalo con la meta.",
      "Upper limit = 3 + 1 = 4%. Excess = 4.6 − 4 = 0.6 points. Relative to the point target, the excess would be 1.6 points. Common mistake: comparing against 3% and answering 1.6, or confusing the range with the target.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'central-banking',
  },
  {
    id: 'ECO-12-E6',
    level: 1,
    module: 'ECO-12',
    kind: 'mcq',
    flavor: 'case',
    context: t(
      "En un país ficticio, un candidato promete: \"Si gano, el banco central imprimirá todo el dinero que haga falta para pagar las obras del gobierno, sin subir impuestos\".",
      "In a fictional country, a candidate promises: \"If I win, the central bank will print all the money needed to pay for government projects, without raising taxes.\"",
    ),
    prompt: t(
      "¿Cuál es el riesgo económico principal de esa promesa y qué rasgo de la banca central busca evitarlo?",
      "What is the main economic risk of that promise, and which feature of central banking seeks to prevent it?",
    ),
    options: [
      { id: 'ECO-12-E6-a', text: t("Deflación; se evita con un tipo de cambio fijo", "Deflation; it is prevented with a fixed exchange rate") },
      { id: 'ECO-12-E6-b', text: t("Ninguno, porque el dinero nuevo se convierte en obras útiles", "None, because the new money turns into useful projects") },
      { id: 'ECO-12-E6-c', text: t("Aumento del desempleo; se evita con más gasto público", "Rising unemployment; it is prevented with more public spending") },
      { id: 'ECO-12-E6-d', text: t("Inflación alta; se evita con un banco central autónomo que no pueda ser obligado a financiar al gobierno", "High inflation; it is prevented with an autonomous central bank that cannot be forced to finance the government") },
    ],
    correctOptionId: 'ECO-12-E6-d',
    explanation: t(
      "Crear dinero para pagar gasto público pone más pesos a perseguir los mismos bienes, y los precios suben: el riesgo es inflación alta, que daña sobre todo a quienes menos tienen. Por eso la autonomía del banco central y la prohibición de que lo obliguen a prestar al gobierno. Error común: creer que imprimir dinero es una forma \"gratis\" de financiar obras.",
      "Creating money to pay public spending puts more pesos chasing the same goods, and prices rise: the risk is high inflation, which hurts the poorest most. That is why central bank autonomy and the ban on forcing it to lend to the government exist. Common mistake: believing printing money is a \"free\" way to finance projects.",
    ),
    difficulty: 2,
    points: 15,
    competency: 'central-banking',
  },
]
