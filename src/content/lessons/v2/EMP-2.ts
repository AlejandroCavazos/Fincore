import type { Exercise, Lesson } from '../../../types'

/**
 * FINCORE — Temario v2.0, área Emprendimiento, Administración y Estrategia (Nivel 1, Básico).
 * Materias EMP.7 a EMP.12.
 */

export const lessons: Lesson[] = [
  // ───────────────────────────── EMP-07 ─────────────────────────────
  {
    id: 'EMP-07',
    level: 1,
    topicIds: ['EMP.7'],
    title: { es: "Planeación estratégica", en: "Strategic planning" },
    summary: {
      es: "La planeación estratégica define hacia dónde quiere llegar un negocio, cómo va a llegar y cómo sabrá si va por buen camino.",
      en: "Strategic planning defines where a business wants to go, how it will get there and how it will know whether it is on track.",
    },
    minutes: 15,
    objectives: [
      { es: "Distinguir misión, visión, valores y objetivos de un negocio.", en: "Distinguish a business's mission, vision, values and objectives." },
      { es: "Redactar objetivos SMART a partir de metas vagas.", en: "Write SMART objectives from vague goals." },
      { es: "Bajar un objetivo anual a metas trimestrales o mensuales y darles seguimiento.", en: "Break an annual objective into quarterly or monthly targets and track them." },
    ],
    theory: [
      {
        heading: { es: "¿Qué es planear estratégicamente?", en: "What is strategic planning?" },
        body: [
          {
            es: "Planear es decidir **hoy** qué harás **mañana**. La **planeación estratégica** es la planeación de lo grande: hacia dónde va todo el negocio en los próximos años, no qué se hace el lunes. Es como trazar la ruta antes de salir de viaje de Monterrey a Oaxaca.",
            en: "Planning is deciding **today** what you will do **tomorrow**. **Strategic planning** is planning the big picture: where the whole business is heading over the next few years, not what happens on Monday. It is like mapping the route before driving from Monterrey to Oaxaca.",
          },
          {
            es: "Se distingue de la **planeación táctica** (por área, a mediano plazo, como el plan de ventas del año) y de la **operativa** (tareas del día a día, como el rol de turnos). Las tres deben estar alineadas: lo operativo sirve a lo táctico y lo táctico a lo estratégico.",
            en: "It differs from **tactical planning** (by area, medium term, like the year's sales plan) and **operational planning** (day-to-day tasks, like the shift schedule). All three must be aligned: the operational serves the tactical and the tactical serves the strategic.",
          },
          {
            es: "Mini ejemplo: una panadería decide como estrategia \"ser la favorita de las oficinas de la zona\". Su plan táctico: lanzar paquetes de desayuno para empresas. Lo operativo: hornear 40 paquetes cada mañana antes de las 8:00.",
            en: "Mini example: a bakery decides as its strategy \"to be the favorite of the area's offices\". Its tactical plan: launch breakfast packages for companies. The operational part: bake 40 packages every morning before 8:00.",
          },
        ],
        bullets: [
          { es: "Estratégica: todo el negocio, varios años, la dirección.", en: "Strategic: the whole business, several years, the direction." },
          { es: "Táctica: cada área, alrededor de un año, cómo se apoya la estrategia.", en: "Tactical: each area, around one year, how the strategy is supported." },
          { es: "Operativa: días o semanas, tareas concretas y responsables.", en: "Operational: days or weeks, concrete tasks and owners." },
        ],
      },
      {
        heading: { es: "Misión, visión, valores y objetivos", en: "Mission, vision, values and objectives" },
        body: [
          {
            es: "La **misión** dice qué hace el negocio hoy, para quién y por qué importa. La **visión** describe lo que quiere llegar a ser en el futuro. Los **valores** son las reglas de conducta que nadie negocia, como honestidad o puntualidad.",
            en: "The **mission** says what the business does today, for whom and why it matters. The **vision** describes what it wants to become in the future. **Values** are the non-negotiable rules of conduct, such as honesty or punctuality.",
          },
          {
            es: "Los **objetivos** convierten la visión en metas medibles. Un buen objetivo es **SMART**: específico, medible, alcanzable, relevante y con fecha límite. \"Vender más\" no es SMART; \"vender $50,000 al mes en pedidos en línea antes de diciembre\" sí lo es.",
            en: "**Objectives** turn the vision into measurable targets. A good objective is **SMART**: specific, measurable, achievable, relevant and time-bound. \"Sell more\" is not SMART; \"sell $50,000 a month in online orders before December\" is.",
          },
          {
            es: "Mini ejemplo: un taller mecánico en Puebla. Misión: \"reparar autos familiares con precios claros y garantía\". Visión: \"ser el taller más recomendado de la colonia\". Objetivo SMART: \"lograr 30 reseñas positivas nuevas en seis meses\".",
            en: "Mini example: a car repair shop in Puebla. Mission: \"repair family cars with clear prices and a warranty\". Vision: \"be the most recommended shop in the neighborhood\". SMART objective: \"get 30 new positive reviews in six months\".",
          },
        ],
        bullets: [
          { es: "S (específico): qué exactamente.", en: "S (specific): what exactly." },
          { es: "M (medible): con un número.", en: "M (measurable): with a number." },
          { es: "A (alcanzable): retador pero posible con tus recursos.", en: "A (achievable): challenging but possible with your resources." },
          { es: "R (relevante): ayuda a la visión.", en: "R (relevant): it helps the vision." },
          { es: "T (con tiempo): tiene fecha límite.", en: "T (time-bound): it has a deadline." },
        ],
      },
      {
        heading: { es: "Del plan a la acción: metas, responsables y seguimiento", en: "From plan to action: targets, owners and follow-up" },
        body: [
          {
            es: "Un plan que se queda en el cajón no sirve. Para ejecutarlo, cada objetivo anual se **desdobla** en metas más cortas (trimestrales o mensuales), con un **responsable** y unas pocas **acciones** concretas.",
            en: "A plan left in a drawer is useless. To execute it, each annual objective is **broken down** into shorter targets (quarterly or monthly), with an **owner** and a few concrete **actions**.",
          },
          {
            es: "Después viene el **seguimiento**: comparar cada mes lo logrado contra lo planeado. Si vas atrás, ajustas las acciones; si el entorno cambió mucho, revisas el plan. Planear es un ciclo: **planear, ejecutar, medir y ajustar**.",
            en: "Then comes **follow-up**: comparing each month what was achieved against what was planned. If you are behind, you adjust the actions; if the environment changed a lot, you revise the plan. Planning is a cycle: **plan, execute, measure and adjust**.",
          },
          {
            es: "Mini ejemplo: una estética quiere ganar 120 clientas nuevas en el año. Eso son 10 por mes. En marzo lleva 22 en lugar de 30: lanza una promoción de referidos para recuperar el ritmo.",
            en: "Mini example: a beauty salon wants 120 new clients in the year. That is 10 per month. By March it has 22 instead of 30: it launches a referral promotion to catch up.",
          },
        ],
        formula: "Meta mensual promedio = Meta anual ÷ 12   |   Avance (%) = Logrado ÷ Planeado × 100",
      },
    ],
    examples: [
      {
        title: { es: "Convertir una meta vaga en un objetivo SMART", en: "Turning a vague goal into a SMART objective" },
        problem: {
          es: "Lucía tiene una cafetería en Guadalajara y escribe como meta: \"Quiero que me vaya mejor\". Hoy vende en promedio 80 cafés al día. Conviértelo en un objetivo SMART.",
          en: "Lucía owns a coffee shop in Guadalajara and writes as her goal: \"I want to do better\". Today she sells 80 coffees a day on average. Turn it into a SMART objective.",
        },
        steps: [
          { es: "Específico: decide qué significa \"mejor\": vender más cafés.", en: "Specific: decide what \"better\" means: selling more coffees." },
          { es: "Medible: usa su dato actual (80 al día) y fija un número: 100 al día.", en: "Measurable: use her current figure (80 a day) and set a number: 100 a day." },
          { es: "Alcanzable: un aumento de 20 cafés es retador, pero posible si abre más temprano.", en: "Achievable: an increase of 20 coffees is challenging but possible if she opens earlier." },
          { es: "Relevante y con tiempo: apoya su visión de crecer y le pone fecha: en seis meses.", en: "Relevant and time-bound: it supports her vision to grow and has a deadline: in six months." },
        ],
        result: {
          es: "Objetivo SMART: \"Pasar de 80 a 100 cafés vendidos al día en promedio en los próximos seis meses, abriendo a las 7:00\".",
          en: "SMART objective: \"Go from 80 to 100 coffees sold per day on average over the next six months, opening at 7:00\".",
        },
      },
      {
        title: { es: "Desdoblar un objetivo anual", en: "Breaking down an annual objective" },
        problem: {
          es: "Una papelería vendió $300,000 el año pasado y su objetivo es crecer 15% este año. ¿Cuál es la meta anual y cuánto debe vender por trimestre en promedio? (Cifras hipotéticas.)",
          en: "A stationery store sold $300,000 last year and its objective is to grow 15% this year. What is the annual target and how much must it sell per quarter on average? (Hypothetical figures.)",
        },
        steps: [
          { es: "Meta anual: 300,000 × 1.15 = $345,000.", en: "Annual target: 300,000 × 1.15 = $345,000." },
          { es: "Un año tiene 4 trimestres: 345,000 ÷ 4 = $86,250.", en: "A year has 4 quarters: 345,000 ÷ 4 = $86,250." },
          { es: "Asigna un responsable y revisa al cierre de cada trimestre si se alcanzó.", en: "Assign an owner and check at the close of each quarter whether it was reached." },
        ],
        result: {
          es: "Meta anual de $345,000, es decir, $86,250 por trimestre en promedio. Si hay temporadas fuertes (regreso a clases), conviene ajustar la meta de cada trimestre.",
          en: "Annual target of $345,000, that is, $86,250 per quarter on average. If there are strong seasons (back to school), it is wise to adjust each quarter's target.",
        },
      },
    ],
    keyPoints: [
      { es: "La planeación estratégica fija la dirección de todo el negocio a varios años.", en: "Strategic planning sets the direction of the whole business over several years." },
      { es: "Misión = qué hago hoy; visión = qué quiero ser; valores = cómo me comporto.", en: "Mission = what I do today; vision = what I want to become; values = how I behave." },
      { es: "Los objetivos deben ser SMART: específicos, medibles, alcanzables, relevantes y con fecha.", en: "Objectives must be SMART: specific, measurable, achievable, relevant and time-bound." },
      { es: "Un objetivo anual se desdobla en metas cortas con responsables y acciones.", en: "An annual objective is broken into short targets with owners and actions." },
      { es: "Planear es un ciclo: planear, ejecutar, medir y ajustar.", en: "Planning is a cycle: plan, execute, measure and adjust." },
    ],
    exerciseIds: ['EMP-07-E1', 'EMP-07-E2', 'EMP-07-E3', 'EMP-07-E4', 'EMP-07-E5', 'EMP-07-E6'],
  },

  // ───────────────────────────── EMP-08 ─────────────────────────────
  {
    id: 'EMP-08',
    level: 1,
    topicIds: ['EMP.8'],
    title: { es: "Análisis FODA y PESTEL", en: "SWOT and PESTEL analysis" },
    summary: {
      es: "FODA y PESTEL son dos herramientas para mirar el negocio por dentro y el entorno por fuera antes de decidir una estrategia.",
      en: "SWOT and PESTEL are two tools for looking at the business from the inside and at the environment from the outside before choosing a strategy.",
    },
    minutes: 15,
    objectives: [
      { es: "Clasificar factores en fortalezas, oportunidades, debilidades y amenazas.", en: "Classify factors into strengths, weaknesses, opportunities and threats." },
      { es: "Identificar factores políticos, económicos, sociales, tecnológicos, ecológicos y legales del entorno.", en: "Identify political, economic, social, technological, environmental and legal factors in the environment." },
      { es: "Convertir un FODA en estrategias concretas con la matriz cruzada.", en: "Turn a SWOT into concrete strategies with the cross matrix." },
    ],
    theory: [
      {
        heading: { es: "FODA: mirar adentro y afuera", en: "SWOT: looking inside and outside" },
        body: [
          {
            es: "**FODA** son las iniciales de Fortalezas, Oportunidades, Debilidades y Amenazas (en inglés, SWOT). Es una tabla de cuatro cuadros que resume la situación de un negocio en una sola hoja.",
            en: "**SWOT** stands for Strengths, Weaknesses, Opportunities and Threats (in Spanish, FODA). It is a four-box table that summarizes a business's situation on a single page.",
          },
          {
            es: "La clave es separar lo **interno** de lo **externo**. Las **fortalezas** y **debilidades** son internas: dependen de ti (tu receta, tu ubicación, tu falta de sistema de cobro). Las **oportunidades** y **amenazas** son externas: pasan afuera y no las controlas (una nueva universidad cerca, una cadena que abre enfrente).",
            en: "The key is separating the **internal** from the **external**. **Strengths** and **weaknesses** are internal: they depend on you (your recipe, your location, your lack of a payment system). **Opportunities** and **threats** are external: they happen outside and you do not control them (a new university nearby, a chain opening across the street).",
          },
          {
            es: "Mini ejemplo, una taquería: fortaleza = salsa famosa; debilidad = solo acepta efectivo; oportunidad = abrirán oficinas en la cuadra; amenaza = sube el precio de la carne.",
            en: "Mini example, a taco stand: strength = famous salsa; weakness = cash only; opportunity = offices are opening on the block; threat = the price of meat goes up.",
          },
        ],
        bullets: [
          { es: "Fortaleza: interna y positiva.", en: "Strength: internal and positive." },
          { es: "Debilidad: interna y negativa.", en: "Weakness: internal and negative." },
          { es: "Oportunidad: externa y positiva.", en: "Opportunity: external and positive." },
          { es: "Amenaza: externa y negativa.", en: "Threat: external and negative." },
        ],
      },
      {
        heading: { es: "PESTEL: el entorno general", en: "PESTEL: the general environment" },
        body: [
          {
            es: "El **PESTEL** te ayuda a encontrar oportunidades y amenazas de forma ordenada. Revisa seis tipos de factores del entorno general, los que afectan a todos los negocios de un país o región, no solo a ti.",
            en: "**PESTEL** helps you find opportunities and threats in an orderly way. It reviews six types of factors in the general environment, the ones that affect every business in a country or region, not just you.",
          },
          {
            es: "Son: **Políticos** (decisiones de gobierno, programas públicos), **Económicos** (inflación, tipo de cambio, empleo), **Sociales** (gustos, edad de la población, hábitos), **Tecnológicos** (pagos digitales, apps, automatización), **Ecológicos** (clima, agua, reciclaje) y **Legales** (leyes laborales, sanitarias, fiscales).",
            en: "They are: **Political** (government decisions, public programs), **Economic** (inflation, exchange rate, employment), **Social** (tastes, population age, habits), **Technological** (digital payments, apps, automation), **Environmental** (climate, water, recycling) and **Legal** (labor, health and tax laws).",
          },
          {
            es: "Mini ejemplo, una tienda de ropa en Mérida: si el peso se deprecia, la ropa importada se encarece (económico); si crecen las compras por redes sociales, puede vender en línea (tecnológico y social).",
            en: "Mini example, a clothing store in Mérida: if the peso depreciates, imported clothes get more expensive (economic); if shopping through social media grows, it can sell online (technological and social).",
          },
        ],
      },
      {
        heading: { es: "De la lista a la estrategia: matriz FODA cruzada", en: "From list to strategy: the SWOT cross matrix" },
        body: [
          {
            es: "Un FODA no termina en la lista. La **matriz cruzada** combina los cuadros para generar estrategias. Así pasas de \"esto es lo que veo\" a \"esto es lo que voy a hacer\".",
            en: "A SWOT does not end with the list. The **cross matrix** combines the boxes to generate strategies. That is how you go from \"this is what I see\" to \"this is what I will do\".",
          },
          {
            es: "Consejos: sé concreto (\"buena atención\" es vago; \"90% de clientes regresan\" es útil), prioriza los 3 a 5 factores más importantes de cada cuadro y actualiza el análisis al menos una vez al año.",
            en: "Tips: be concrete (\"good service\" is vague; \"90% of customers come back\" is useful), prioritize the 3 to 5 most important factors in each box and update the analysis at least once a year.",
          },
          {
            es: "Mini ejemplo, la taquería: FO = usar su salsa famosa para vender paquetes de comida a las nuevas oficinas. DA = aceptar pagos con tarjeta y ajustar el menú para no depender tanto de la carne cara.",
            en: "Mini example, the taco stand: SO = use its famous salsa to sell lunch packages to the new offices. WT = accept card payments and adjust the menu so it depends less on expensive meat.",
          },
        ],
        bullets: [
          { es: "FO (ofensiva): usar fortalezas para aprovechar oportunidades.", en: "SO (offensive): use strengths to seize opportunities." },
          { es: "FA (defensiva): usar fortalezas para enfrentar amenazas.", en: "ST (defensive): use strengths to face threats." },
          { es: "DO (de reorientación): corregir debilidades para aprovechar oportunidades.", en: "WO (reorientation): fix weaknesses to seize opportunities." },
          { es: "DA (de supervivencia): reducir debilidades y protegerse de amenazas.", en: "WT (survival): reduce weaknesses and protect against threats." },
        ],
      },
    ],
    examples: [
      {
        title: { es: "Armar el FODA de una papelería", en: "Building a stationery store's SWOT" },
        problem: {
          es: "Una papelería frente a una secundaria tiene estos datos: precios bajos; no tiene página ni WhatsApp de pedidos; la escuela ampliará su matrícula; abrirá una tienda de autoservicio con papelería a dos cuadras. Arma su FODA.",
          en: "A stationery store facing a middle school has these facts: low prices; no website or WhatsApp ordering; the school will increase enrollment; a self-service store with a stationery aisle will open two blocks away. Build its SWOT.",
        },
        steps: [
          { es: "Precios bajos: depende de la papelería y la favorece → fortaleza.", en: "Low prices: it depends on the store and helps it → strength." },
          { es: "Sin canal de pedidos: depende de ella y la perjudica → debilidad.", en: "No ordering channel: it depends on the store and hurts it → weakness." },
          { es: "Más alumnos: pasa afuera y la favorece → oportunidad.", en: "More students: it happens outside and helps it → opportunity." },
          { es: "Nuevo competidor: pasa afuera y la perjudica → amenaza.", en: "New competitor: it happens outside and hurts it → threat." },
        ],
        result: {
          es: "Estrategia DO sugerida: abrir pedidos por WhatsApp con listas escolares armadas para atender a los nuevos alumnos.",
          en: "Suggested WO strategy: open WhatsApp ordering with ready-made school supply lists to serve the new students.",
        },
      },
      {
        title: { es: "PESTEL rápido para una purificadora de agua", en: "Quick PESTEL for a water purification shop" },
        problem: {
          es: "Una purificadora de agua en Hermosillo quiere planear su siguiente año. Identifica un factor por letra del PESTEL.",
          en: "A water purification shop in Hermosillo wants to plan its next year. Identify one factor per PESTEL letter.",
        },
        steps: [
          { es: "P: un programa municipal que apoya a pequeños negocios.", en: "P: a municipal program supporting small businesses." },
          { es: "E: sube el costo de la electricidad que usan sus equipos.", en: "E: the cost of the electricity its equipment uses goes up." },
          { es: "S: más familias prefieren garrafón por desconfianza en el agua de la llave.", en: "S: more families prefer large water jugs out of distrust of tap water." },
          { es: "T: pedidos por app y repartidores; E (ecológico): temporadas de calor extremo; L: normas sanitarias para agua purificada.", en: "T: app orders and delivery drivers; E (environmental): extreme heat seasons; L: health standards for purified water." },
        ],
        result: {
          es: "El PESTEL revela oportunidades (hábitos sociales, calor, pedidos por app) y amenazas (costos de energía, cumplimiento sanitario) que alimentan el FODA.",
          en: "The PESTEL reveals opportunities (social habits, heat, app orders) and threats (energy costs, health compliance) that feed the SWOT.",
        },
      },
    ],
    keyPoints: [
      { es: "Fortalezas y debilidades son internas; oportunidades y amenazas, externas.", en: "Strengths and weaknesses are internal; opportunities and threats are external." },
      { es: "PESTEL revisa factores políticos, económicos, sociales, tecnológicos, ecológicos y legales.", en: "PESTEL reviews political, economic, social, technological, environmental and legal factors." },
      { es: "PESTEL alimenta los cuadros externos del FODA.", en: "PESTEL feeds the external boxes of the SWOT." },
      { es: "La matriz cruzada (FO, FA, DO, DA) convierte el análisis en estrategias.", en: "The cross matrix (SO, ST, WO, WT) turns the analysis into strategies." },
      { es: "Un buen FODA es concreto, priorizado y se actualiza.", en: "A good SWOT is concrete, prioritized and updated." },
    ],
    normativeNote: {
      es: "Contenido educativo. Las menciones a leyes, normas sanitarias, programas de gobierno o variables económicas son ejemplos generales; las reglas y condiciones cambian, así que verifica la versión vigente (2026) para tu caso.",
      en: "Educational content. Mentions of laws, health standards, government programs or economic variables are general examples; rules and conditions change, so verify the current version (2026) for your case.",
    },
    exerciseIds: ['EMP-08-E1', 'EMP-08-E2', 'EMP-08-E3', 'EMP-08-E4', 'EMP-08-E5', 'EMP-08-E6'],
  },

  // ───────────────────────────── EMP-09 ─────────────────────────────
  {
    id: 'EMP-09',
    level: 1,
    topicIds: ['EMP.9'],
    title: { es: "Análisis de las cinco fuerzas de Porter", en: "Porter's five forces analysis" },
    summary: {
      es: "Las cinco fuerzas de Porter explican qué tan difícil es ganar dinero en una industria según la presión de competidores, clientes, proveedores, nuevos entrantes y sustitutos.",
      en: "Porter's five forces explain how hard it is to make money in an industry based on pressure from rivals, customers, suppliers, new entrants and substitutes.",
    },
    minutes: 15,
    objectives: [
      { es: "Nombrar y explicar las cinco fuerzas de Porter.", en: "Name and explain Porter's five forces." },
      { es: "Reconocer señales de que una fuerza es alta o baja.", en: "Recognize signs that a force is high or low." },
      { es: "Usar el análisis para decidir cómo proteger las ganancias de un negocio.", en: "Use the analysis to decide how to protect a business's profits." },
    ],
    theory: [
      {
        heading: { es: "Las cinco fuerzas en una industria", en: "The five forces in an industry" },
        body: [
          {
            es: "Michael Porter, profesor de Harvard, propuso que la rentabilidad de una **industria** (el grupo de negocios que venden algo parecido) depende de cinco presiones. Entre más fuertes son, más difícil es cobrar buenos precios y ganar dinero.",
            en: "Michael Porter, a Harvard professor, proposed that the profitability of an **industry** (the group of businesses selling something similar) depends on five pressures. The stronger they are, the harder it is to charge good prices and make money.",
          },
          {
            es: "Imagina las fuerzas como cinco personas jalando tu ganancia: tus **competidores** actuales, los **clientes** que piden descuentos, los **proveedores** que suben precios, los **nuevos competidores** que podrían llegar y los **sustitutos**, productos distintos que resuelven la misma necesidad.",
            en: "Picture the forces as five people pulling at your profit: your current **rivals**, **customers** asking for discounts, **suppliers** raising prices, **new competitors** that could arrive and **substitutes**, different products that meet the same need.",
          },
          {
            es: "Mini ejemplo: los taxis de una ciudad compiten entre sí (rivalidad), pero también con las apps de viaje y el transporte público, que son **sustitutos**.",
            en: "Mini example: a city's taxis compete with each other (rivalry), but also with ride-hailing apps and public transit, which are **substitutes**.",
          },
        ],
        bullets: [
          { es: "Rivalidad entre competidores actuales.", en: "Rivalry among existing competitors." },
          { es: "Amenaza de nuevos entrantes.", en: "Threat of new entrants." },
          { es: "Poder de negociación de los clientes.", en: "Bargaining power of buyers." },
          { es: "Poder de negociación de los proveedores.", en: "Bargaining power of suppliers." },
          { es: "Amenaza de productos sustitutos.", en: "Threat of substitute products." },
        ],
      },
      {
        heading: { es: "¿Cuándo una fuerza es alta?", en: "When is a force high?" },
        body: [
          {
            es: "**Rivalidad** alta: muchos competidores parecidos, productos casi iguales y guerra de precios. **Nuevos entrantes**: la amenaza es alta cuando es barato y fácil abrir; las **barreras de entrada** (inversión grande, permisos, marca reconocida, clientes leales) la reducen.",
            en: "High **rivalry**: many similar competitors, almost identical products and price wars. **New entrants**: the threat is high when opening is cheap and easy; **barriers to entry** (large investment, permits, a recognized brand, loyal customers) reduce it.",
          },
          {
            es: "**Clientes** con poder: pocos clientes que compran mucho, o que pueden cambiarse de proveedor sin costo. **Proveedores** con poder: pocos proveedores de un insumo clave, difícil de reemplazar. **Sustitutos** fuertes: hay una alternativa diferente, más barata o más cómoda.",
            en: "Powerful **customers**: few customers buying a lot, or able to switch suppliers at no cost. Powerful **suppliers**: few suppliers of a key input that is hard to replace. Strong **substitutes**: there is a different alternative that is cheaper or more convenient.",
          },
          {
            es: "Mini ejemplo: un taller de costura que vende el 60% de su producción a una sola tienda departamental tiene un cliente con mucho poder: si la tienda pide descuento, es difícil decir que no.",
            en: "Mini example: a sewing workshop that sells 60% of its output to a single department store has a very powerful customer: if the store asks for a discount, it is hard to say no.",
          },
        ],
        formula: "Concentración de un cliente (%) = Ventas a ese cliente ÷ Ventas totales × 100",
      },
      {
        heading: { es: "Usar las fuerzas para decidir", en: "Using the forces to decide" },
        body: [
          {
            es: "El análisis sirve para dos cosas: decidir si **entrar** a una industria y encontrar cómo **defender** tu ganancia dentro de ella. No es una foto fija: las fuerzas cambian con la tecnología y las leyes.",
            en: "The analysis serves two purposes: deciding whether to **enter** an industry and finding how to **defend** your profit inside it. It is not a fixed snapshot: the forces change with technology and laws.",
          },
          {
            es: "Respuestas típicas: contra la rivalidad, **diferenciarte**; contra clientes poderosos, **diversificar** tu cartera; contra proveedores poderosos, buscar **proveedores alternos**; contra sustitutos, mejorar tu propuesta de valor; contra nuevos entrantes, construir **lealtad y marca**.",
            en: "Typical responses: against rivalry, **differentiate**; against powerful customers, **diversify** your customer base; against powerful suppliers, look for **alternative suppliers**; against substitutes, improve your value proposition; against new entrants, build **loyalty and brand**.",
          },
          {
            es: "Mini ejemplo: una tortillería con un solo proveedor de harina negocia con un segundo proveedor para no depender de uno, y lanza tortillas de nopal para diferenciarse de las demás tortillerías.",
            en: "Mini example: a tortilla shop with a single flour supplier negotiates with a second supplier so it does not depend on one, and launches cactus tortillas to stand out from other tortilla shops.",
          },
        ],
      },
    ],
    examples: [
      {
        title: { es: "Las cinco fuerzas de un gimnasio de barrio", en: "The five forces of a neighborhood gym" },
        problem: {
          es: "Mario quiere abrir un gimnasio en su colonia de Querétaro. Analiza cada fuerza.",
          en: "Mario wants to open a gym in his Querétaro neighborhood. Analyze each force.",
        },
        steps: [
          { es: "Rivalidad: hay tres gimnasios cerca con precios parecidos → alta.", en: "Rivalry: there are three nearby gyms with similar prices → high." },
          { es: "Nuevos entrantes: el equipo cuesta, pero rentar un local es accesible → media.", en: "New entrants: equipment is costly, but renting a space is affordable → medium." },
          { es: "Clientes: cada socio paga poco y es uno entre muchos, pero cambiarse es fácil → media.", en: "Customers: each member pays little and is one among many, but switching is easy → medium." },
          { es: "Proveedores: hay varias marcas de equipo → bajo. Sustitutos: correr en el parque, videos en línea → altos.", en: "Suppliers: there are several equipment brands → low. Substitutes: running in the park, online videos → high." },
        ],
        result: {
          es: "Industria con mucha presión de rivalidad y sustitutos. Mario debería diferenciarse (clases especializadas, horarios amplios) y crear lealtad (comunidad, membresías anuales).",
          en: "An industry with heavy pressure from rivalry and substitutes. Mario should differentiate (specialized classes, long hours) and build loyalty (community, annual memberships).",
        },
      },
      {
        title: { es: "Medir la dependencia de un cliente", en: "Measuring dependence on one customer" },
        problem: {
          es: "Una imprenta vendió $1,200,000 en el año; de eso, $540,000 fueron a una sola cadena de restaurantes. ¿Qué porcentaje representa ese cliente? (Cifras hipotéticas.)",
          en: "A print shop sold $1,200,000 in the year; of that, $540,000 went to a single restaurant chain. What percentage does that customer represent? (Hypothetical figures.)",
        },
        steps: [
          { es: "Divide ventas al cliente entre ventas totales: 540,000 ÷ 1,200,000 = 0.45.", en: "Divide sales to the customer by total sales: 540,000 ÷ 1,200,000 = 0.45." },
          { es: "Multiplica por 100: 45%.", en: "Multiply by 100: 45%." },
          { es: "Interpreta: casi la mitad del negocio depende de un cliente, que tiene mucho poder para negociar.", en: "Interpret: almost half the business depends on one customer, who has strong bargaining power." },
        ],
        result: {
          es: "El cliente concentra el 45% de las ventas. Conviene buscar más clientes para reducir su poder de negociación.",
          en: "The customer accounts for 45% of sales. It is wise to find more customers to reduce its bargaining power.",
        },
      },
    ],
    keyPoints: [
      { es: "Las cinco fuerzas: rivalidad, nuevos entrantes, clientes, proveedores y sustitutos.", en: "The five forces: rivalry, new entrants, buyers, suppliers and substitutes." },
      { es: "Entre más fuertes las fuerzas, menor la rentabilidad de la industria.", en: "The stronger the forces, the lower the industry's profitability." },
      { es: "Las barreras de entrada protegen a quienes ya están en la industria.", en: "Barriers to entry protect those already in the industry." },
      { es: "Un sustituto es un producto distinto que resuelve la misma necesidad.", en: "A substitute is a different product that meets the same need." },
      { es: "Depender de pocos clientes o proveedores les da poder de negociación.", en: "Depending on few customers or suppliers gives them bargaining power." },
    ],
    exerciseIds: ['EMP-09-E1', 'EMP-09-E2', 'EMP-09-E3', 'EMP-09-E4', 'EMP-09-E5', 'EMP-09-E6'],
  },

  // ───────────────────────────── EMP-10 ─────────────────────────────
  {
    id: 'EMP-10',
    level: 1,
    topicIds: ['EMP.10'],
    title: { es: "Modelos de ingresos y monetización", en: "Revenue models and monetization" },
    summary: {
      es: "Un modelo de ingresos explica de qué forma concreta un negocio cobra por el valor que entrega y cómo se calcula ese ingreso.",
      en: "A revenue model explains the concrete way a business charges for the value it delivers and how that revenue is calculated.",
    },
    minutes: 16,
    objectives: [
      { es: "Reconocer los principales modelos de ingresos: venta, suscripción, comisión, publicidad, freemium y renta o uso.", en: "Recognize the main revenue models: sales, subscription, commission, advertising, freemium and rental or usage." },
      { es: "Calcular ingresos básicos de cada modelo con su fórmula.", en: "Calculate basic revenue for each model with its formula." },
      { es: "Elegir un modelo que encaje con el cliente y con el producto.", en: "Choose a model that fits the customer and the product." },
    ],
    theory: [
      {
        heading: { es: "¿Qué es monetizar?", en: "What does monetizing mean?" },
        body: [
          {
            es: "**Monetizar** es convertir el valor que das en dinero que entra. Un **modelo de ingresos** responde a: ¿quién paga?, ¿por qué paga?, ¿cuándo paga? y ¿cuánto? Dos negocios con el mismo producto pueden cobrar de forma muy distinta.",
            en: "**Monetizing** is turning the value you give into money coming in. A **revenue model** answers: who pays?, why do they pay?, when do they pay? and how much? Two businesses with the same product can charge in very different ways.",
          },
          {
            es: "Ejemplo cotidiano: la música. Puedes **comprar** una canción una vez, **suscribirte** a una plataforma cada mes o escucharla gratis con **anuncios**. El producto es igual; cambia el modelo de ingresos.",
            en: "Everyday example: music. You can **buy** a song once, **subscribe** to a platform every month or listen free with **ads**. The product is the same; the revenue model changes.",
          },
          {
            es: "Mini ejemplo: una nutrióloga puede cobrar por consulta suelta ($500 cada una) o por un plan mensual con seguimiento por WhatsApp. El segundo le da ingresos más predecibles.",
            en: "Mini example: a nutritionist can charge per single visit ($500 each) or for a monthly plan with WhatsApp follow-up. The second gives her more predictable income.",
          },
        ],
      },
      {
        heading: { es: "Los modelos más comunes", en: "The most common models" },
        body: [
          {
            es: "**Venta única**: el cliente paga una vez y se lleva el producto (una tienda de ropa). **Suscripción**: paga una cuota periódica por acceso continuo (un gimnasio, una app de películas). **Comisión**: cobras un porcentaje por conectar a compradores y vendedores (una plataforma de entrega de comida, un agente inmobiliario).",
            en: "**One-time sale**: the customer pays once and takes the product (a clothing store). **Subscription**: pays a periodic fee for ongoing access (a gym, a movie app). **Commission**: you charge a percentage for connecting buyers and sellers (a food delivery platform, a real estate agent).",
          },
          {
            es: "**Publicidad**: el usuario no paga; pagan las marcas que quieren su atención (una página de recetas). **Freemium**: lo básico es gratis y se cobra por funciones premium. **Renta o pago por uso**: pagas por el tiempo o la cantidad que usas (renta de mobiliario para fiestas, una lavandería de autoservicio).",
            en: "**Advertising**: the user does not pay; brands that want their attention do (a recipe website). **Freemium**: the basics are free and premium features are charged. **Rental or pay-per-use**: you pay for the time or amount you use (party furniture rental, a self-service laundromat).",
          },
          {
            es: "Mini ejemplo: una app de idiomas con 10,000 usuarios gratis y 300 que pagan la versión premium usa **freemium**; si además muestra anuncios a los gratuitos, combina dos modelos.",
            en: "Mini example: a language app with 10,000 free users and 300 paying for the premium version uses **freemium**; if it also shows ads to free users, it combines two models.",
          },
        ],
        bullets: [
          { es: "Venta única: Ingreso = Unidades × Precio.", en: "One-time sale: Revenue = Units × Price." },
          { es: "Suscripción: Ingreso mensual = Suscriptores × Cuota mensual.", en: "Subscription: Monthly revenue = Subscribers × Monthly fee." },
          { es: "Comisión: Ingreso = Valor de las transacciones × % de comisión.", en: "Commission: Revenue = Transaction value × Commission %." },
          { es: "Freemium: Ingreso = Usuarios × % de conversión × Precio premium.", en: "Freemium: Revenue = Users × Conversion % × Premium price." },
        ],
      },
      {
        heading: { es: "Elegir y combinar modelos", en: "Choosing and combining models" },
        body: [
          {
            es: "Elige el modelo pensando en tu cliente: ¿prefiere pagar poco cada mes o una vez? ¿Usa el producto seguido o de vez en cuando? Si se usa a diario, la suscripción suele encajar; si es una compra ocasional, la venta única o el pago por uso.",
            en: "Choose the model thinking about your customer: do they prefer to pay a little each month or once? Do they use the product often or occasionally? If it is used daily, a subscription usually fits; if it is an occasional purchase, a one-time sale or pay-per-use.",
          },
          {
            es: "Cuidado con dos trampas. Primera: muchos usuarios gratis **no** son ingresos si casi nadie paga. Segunda: la suscripción solo funciona si la gente se **queda**; si cada mes se van muchos, tienes que conseguir clientes nuevos sin parar.",
            en: "Watch out for two traps. First: many free users are **not** revenue if almost nobody pays. Second: subscriptions only work if people **stay**; if many leave every month, you must keep finding new customers nonstop.",
          },
          {
            es: "Mini ejemplo: una lavandería combina pago por uso (cada carga) con una membresía mensual para estudiantes que lavan cada semana. Así atiende a los dos tipos de cliente.",
            en: "Mini example: a laundromat combines pay-per-use (each load) with a monthly membership for students who wash every week. That way it serves both customer types.",
          },
        ],
      },
    ],
    examples: [
      {
        title: { es: "Venta única contra suscripción", en: "One-time sale versus subscription" },
        problem: {
          es: "Un estudio de yoga cobra $150 por clase suelta. Una alumna típica toma 8 clases al mes. Se considera ofrecer una membresía mensual de $990 con clases ilimitadas. ¿Cuánto paga hoy la alumna y qué cambia con la membresía? (Precios hipotéticos.)",
          en: "A yoga studio charges $150 per single class. A typical student takes 8 classes a month. It is considering a $990 monthly membership with unlimited classes. How much does the student pay today and what changes with the membership? (Hypothetical prices.)",
        },
        steps: [
          { es: "Hoy: 8 × 150 = $1,200 al mes.", en: "Today: 8 × 150 = $1,200 a month." },
          { es: "Con membresía: $990 fijos, es decir, $210 menos para la alumna.", en: "With membership: a fixed $990, that is, $210 less for the student." },
          { es: "Para el estudio, el ingreso por alumna baja, pero se vuelve predecible y es más probable que la alumna se quede.", en: "For the studio, revenue per student drops, but it becomes predictable and the student is more likely to stay." },
        ],
        result: {
          es: "La membresía cambia $1,200 variables por $990 seguros. Conviene si atrae más alumnas o reduce las bajas.",
          en: "The membership trades a variable $1,200 for a secure $990. It pays off if it attracts more students or reduces dropouts.",
        },
      },
      {
        title: { es: "Ingreso de un marketplace por comisión", en: "Commission revenue of a marketplace" },
        problem: {
          es: "Una plataforma conecta artesanos de Oaxaca con compradores. En un mes se vendieron $250,000 en productos y la plataforma cobra 12% de comisión. ¿Cuánto ingresa la plataforma? (Cifras hipotéticas.)",
          en: "A platform connects Oaxacan artisans with buyers. In one month $250,000 in products were sold and the platform charges a 12% commission. How much does the platform earn? (Hypothetical figures.)",
        },
        steps: [
          { es: "Fórmula: valor de las transacciones × % de comisión.", en: "Formula: transaction value × commission %." },
          { es: "250,000 × 0.12 = $30,000.", en: "250,000 × 0.12 = $30,000." },
          { es: "Los $220,000 restantes son de los artesanos, no ingreso de la plataforma.", en: "The remaining $220,000 belongs to the artisans, not the platform's revenue." },
        ],
        result: {
          es: "La plataforma ingresa $30,000. Error común: contar los $250,000 completos como ingreso propio.",
          en: "The platform earns $30,000. Common mistake: counting the full $250,000 as its own revenue.",
        },
      },
    ],
    keyPoints: [
      { es: "Monetizar es convertir el valor entregado en dinero que entra.", en: "Monetizing is turning delivered value into incoming money." },
      { es: "Modelos comunes: venta única, suscripción, comisión, publicidad, freemium y pago por uso.", en: "Common models: one-time sale, subscription, commission, advertising, freemium and pay-per-use." },
      { es: "En una comisión, tu ingreso es solo el porcentaje, no todo lo vendido.", en: "With a commission, your revenue is only the percentage, not everything sold." },
      { es: "En freemium, lo que importa es cuántos usuarios se convierten en clientes que pagan.", en: "In freemium, what matters is how many users convert into paying customers." },
      { es: "El mejor modelo encaja con cómo y cada cuánto usa el cliente el producto.", en: "The best model fits how and how often the customer uses the product." },
    ],
    exerciseIds: ['EMP-10-E1', 'EMP-10-E2', 'EMP-10-E3', 'EMP-10-E4', 'EMP-10-E5', 'EMP-10-E6'],
  },

  // ───────────────────────────── EMP-11 ─────────────────────────────
  {
    id: 'EMP-11',
    level: 1,
    topicIds: ['EMP.11'],
    title: { es: "Administración de operaciones", en: "Operations management" },
    summary: {
      es: "La administración de operaciones organiza cómo un negocio convierte insumos en productos o servicios de forma eficiente, con calidad y a tiempo.",
      en: "Operations management organizes how a business turns inputs into products or services efficiently, with quality and on time.",
    },
    minutes: 16,
    objectives: [
      { es: "Describir un proceso como insumos, transformación y resultados.", en: "Describe a process as inputs, transformation and outputs." },
      { es: "Calcular productividad, capacidad utilizada y el efecto de un cuello de botella.", en: "Calculate productivity, capacity utilization and the effect of a bottleneck." },
      { es: "Proponer mejoras básicas de calidad y reducción de desperdicios.", en: "Propose basic quality improvements and waste reduction." },
    ],
    theory: [
      {
        heading: { es: "Operaciones: insumos, proceso y resultados", en: "Operations: inputs, process and outputs" },
        body: [
          {
            es: "Las **operaciones** son el \"cómo se hace\" de un negocio. Todo negocio toma **insumos** (materia prima, trabajo, máquinas, energía), los **transforma** con un proceso y entrega **resultados** (un producto o un servicio).",
            en: "**Operations** are a business's \"how it gets done\". Every business takes **inputs** (raw materials, labor, machines, energy), **transforms** them through a process and delivers **outputs** (a product or a service).",
          },
          {
            es: "Esto aplica a fábricas y también a servicios. En una lavandería, los insumos son ropa sucia, agua, jabón y trabajo; el proceso es lavar, secar y doblar; el resultado es ropa limpia lista para entregar.",
            en: "This applies to factories and to services too. In a laundry, the inputs are dirty clothes, water, soap and labor; the process is washing, drying and folding; the output is clean clothes ready for delivery.",
          },
          {
            es: "Administrar operaciones es cuidar cuatro metas a la vez: **costo** bajo, buena **calidad**, **rapidez** y **flexibilidad** para adaptarse a pedidos distintos.",
            en: "Managing operations means caring for four goals at once: low **cost**, good **quality**, **speed** and **flexibility** to adapt to different orders.",
          },
        ],
        bullets: [
          { es: "Insumos: lo que entra (materiales, personas, equipo, información).", en: "Inputs: what goes in (materials, people, equipment, information)." },
          { es: "Transformación: los pasos del proceso.", en: "Transformation: the process steps." },
          { es: "Resultados: el producto o servicio que recibe el cliente.", en: "Outputs: the product or service the customer receives." },
        ],
      },
      {
        heading: { es: "Productividad, capacidad y cuellos de botella", en: "Productivity, capacity and bottlenecks" },
        body: [
          {
            es: "La **productividad** mide cuánto produces por cada recurso que usas: por ejemplo, piezas por hora de trabajo. Si con las mismas horas haces más, eres más productivo.",
            en: "**Productivity** measures how much you produce per resource used: for example, pieces per labor hour. If you make more with the same hours, you are more productive.",
          },
          {
            es: "La **capacidad** es lo máximo que puedes producir en un periodo. La **utilización** compara lo que produjiste contra esa capacidad. Un proceso con varios pasos solo avanza tan rápido como su paso más lento: ese paso es el **cuello de botella**.",
            en: "**Capacity** is the most you can produce in a period. **Utilization** compares what you produced against that capacity. A multi-step process only moves as fast as its slowest step: that step is the **bottleneck**.",
          },
          {
            es: "Mini ejemplo: en una pizzería se arman 30 pizzas por hora, pero el horno solo cuece 20. Aunque contrates más gente para armar, saldrán 20 por hora: el horno manda.",
            en: "Mini example: a pizzeria assembles 30 pizzas an hour, but the oven only bakes 20. Even if you hire more people to assemble, 20 an hour will come out: the oven rules.",
          },
        ],
        formula: "Productividad = Producción ÷ Recurso usado   |   Utilización (%) = Producción real ÷ Capacidad × 100",
      },
      {
        heading: { es: "Calidad y desperdicios", en: "Quality and waste" },
        body: [
          {
            es: "Hacer las cosas bien a la primera es más barato que corregirlas. La **calidad** se cuida con estándares claros (recetas, listas de verificación) y revisando en el proceso, no solo al final.",
            en: "Doing things right the first time is cheaper than fixing them. **Quality** is protected with clear standards (recipes, checklists) and by checking during the process, not only at the end.",
          },
          {
            es: "La filosofía **lean** (esbelta), popularizada por Toyota, busca eliminar el **desperdicio**: todo lo que cuesta pero no agrega valor para el cliente, como esperas, traslados innecesarios, inventario de más, defectos y producir más de lo que se vende.",
            en: "The **lean** philosophy, popularized by Toyota, seeks to eliminate **waste**: anything that costs but adds no value for the customer, such as waiting, unnecessary movement, excess inventory, defects and producing more than is sold.",
          },
          {
            es: "Mini ejemplo: una cocina económica cambia de lugar la estufa y el refrigerador para que la cocinera dé menos pasos. Atiende más platos por hora sin trabajar más horas.",
            en: "Mini example: a small diner moves the stove and refrigerator so the cook takes fewer steps. She serves more dishes per hour without working more hours.",
          },
        ],
        bullets: [
          { es: "Esperas: personas o máquinas paradas.", en: "Waiting: people or machines standing idle." },
          { es: "Traslados y movimientos innecesarios.", en: "Unnecessary transport and motion." },
          { es: "Inventario de más que se echa a perder o estorba.", en: "Excess inventory that spoils or gets in the way." },
          { es: "Defectos que hay que rehacer.", en: "Defects that must be redone." },
          { es: "Sobreproducción: hacer más de lo que se vende.", en: "Overproduction: making more than is sold." },
        ],
      },
    ],
    examples: [
      {
        title: { es: "Productividad de una maquiladora de playeras", en: "Productivity of a T-shirt workshop" },
        problem: {
          es: "Un taller produjo 1,200 playeras con 4 costureras que trabajaron 40 horas cada una en la semana. Al reorganizar el área, la semana siguiente produjo 1,440 playeras con las mismas horas. ¿Cuánto cambió la productividad? (Cifras hipotéticas.)",
          en: "A workshop produced 1,200 T-shirts with 4 seamstresses who worked 40 hours each that week. After reorganizing the area, the next week it produced 1,440 T-shirts with the same hours. How much did productivity change? (Hypothetical figures.)",
        },
        steps: [
          { es: "Horas totales: 4 × 40 = 160 horas.", en: "Total hours: 4 × 40 = 160 hours." },
          { es: "Antes: 1,200 ÷ 160 = 7.5 playeras por hora.", en: "Before: 1,200 ÷ 160 = 7.5 T-shirts per hour." },
          { es: "Después: 1,440 ÷ 160 = 9 playeras por hora.", en: "After: 1,440 ÷ 160 = 9 T-shirts per hour." },
          { es: "Cambio: (9 − 7.5) ÷ 7.5 = 0.20 → 20%.", en: "Change: (9 − 7.5) ÷ 7.5 = 0.20 → 20%." },
        ],
        result: {
          es: "La productividad subió 20%, de 7.5 a 9 playeras por hora, sin agregar horas de trabajo.",
          en: "Productivity rose 20%, from 7.5 to 9 T-shirts per hour, without adding labor hours.",
        },
      },
      {
        title: { es: "Encontrar el cuello de botella en un autolavado", en: "Finding the bottleneck at a car wash" },
        problem: {
          es: "Un autolavado tiene tres pasos: enjabonar (12 autos por hora), lavar y enjuagar (8 por hora) y secar (10 por hora). Abre 9 horas al día. ¿Cuántos autos puede terminar al día y dónde conviene mejorar?",
          en: "A car wash has three steps: soaping (12 cars per hour), washing and rinsing (8 per hour) and drying (10 per hour). It is open 9 hours a day. How many cars can it finish per day and where should it improve?",
        },
        steps: [
          { es: "El paso más lento es lavar y enjuagar: 8 autos por hora. Ese es el cuello de botella.", en: "The slowest step is washing and rinsing: 8 cars per hour. That is the bottleneck." },
          { es: "Capacidad diaria: 8 × 9 = 72 autos.", en: "Daily capacity: 8 × 9 = 72 cars." },
          { es: "Mejorar el secado no sirve de nada mientras el lavado siga en 8 por hora.", en: "Improving drying does nothing while washing stays at 8 per hour." },
        ],
        result: {
          es: "Puede terminar 72 autos al día. La mejora debe ir al lavado (otra hidrolavadora o un ayudante): si sube a 10 por hora, la capacidad pasa a 90 autos.",
          en: "It can finish 72 cars a day. The improvement should go to washing (another pressure washer or a helper): if it rises to 10 per hour, capacity becomes 90 cars.",
        },
      },
    ],
    keyPoints: [
      { es: "Toda operación convierte insumos en resultados mediante un proceso.", en: "Every operation turns inputs into outputs through a process." },
      { es: "Productividad = producción ÷ recursos usados.", en: "Productivity = output ÷ resources used." },
      { es: "La capacidad de un proceso la fija su paso más lento, el cuello de botella.", en: "A process's capacity is set by its slowest step, the bottleneck." },
      { es: "Mejorar un paso que no es el cuello de botella no aumenta la producción total.", en: "Improving a step that is not the bottleneck does not raise total output." },
      { es: "Lean busca eliminar desperdicios: esperas, traslados, inventario de más, defectos y sobreproducción.", en: "Lean seeks to eliminate waste: waiting, movement, excess inventory, defects and overproduction." },
    ],
    exerciseIds: ['EMP-11-E1', 'EMP-11-E2', 'EMP-11-E3', 'EMP-11-E4', 'EMP-11-E5', 'EMP-11-E6'],
  },

  // ───────────────────────────── EMP-12 ─────────────────────────────
  {
    id: 'EMP-12',
    level: 1,
    topicIds: ['EMP.12'],
    title: { es: "Gestión de proyectos", en: "Project management" },
    summary: {
      es: "Gestionar un proyecto es planear, ejecutar y controlar un esfuerzo temporal para lograr un resultado único dentro del alcance, el tiempo y el costo acordados.",
      en: "Managing a project means planning, executing and controlling a temporary effort to achieve a unique result within the agreed scope, time and cost.",
    },
    minutes: 16,
    objectives: [
      { es: "Distinguir un proyecto de una operación continua y explicar la triple restricción.", en: "Distinguish a project from an ongoing operation and explain the triple constraint." },
      { es: "Ubicar las tareas en las fases del ciclo de vida de un proyecto.", en: "Place tasks within the phases of a project's life cycle." },
      { es: "Calcular la ruta crítica y la holgura en un cronograma sencillo.", en: "Calculate the critical path and slack in a simple schedule." },
    ],
    theory: [
      {
        heading: { es: "¿Qué es un proyecto?", en: "What is a project?" },
        body: [
          {
            es: "Un **proyecto** es un esfuerzo **temporal** (tiene inicio y fin) para crear algo **único**: abrir una sucursal, lanzar una tienda en línea, remodelar un local. Las **operaciones**, en cambio, se repiten todos los días, como atender la caja.",
            en: "A **project** is a **temporary** effort (it has a start and an end) to create something **unique**: opening a branch, launching an online store, remodeling a space. **Operations**, by contrast, repeat every day, like running the register.",
          },
          {
            es: "Todo proyecto vive con la **triple restricción**: **alcance** (qué se va a entregar), **tiempo** (cuándo) y **costo** (cuánto). Si mueves uno, se mueven los otros: si el cliente pide más cosas, normalmente costará más o tardará más. En medio está la **calidad**.",
            en: "Every project lives with the **triple constraint**: **scope** (what will be delivered), **time** (when) and **cost** (how much). If you move one, the others move: if the client asks for more things, it will usually cost more or take longer. **Quality** sits in the middle.",
          },
          {
            es: "Mini ejemplo: remodelar una cocina en 3 semanas con $80,000. Si la dueña decide agregar una barra, el proyecto necesitará más dinero, más días o ambos.",
            en: "Mini example: remodeling a kitchen in 3 weeks for $80,000. If the owner decides to add a counter bar, the project will need more money, more days or both.",
          },
        ],
      },
      {
        heading: { es: "Ciclo de vida: de la idea al cierre", en: "Life cycle: from idea to close" },
        body: [
          {
            es: "Un proyecto pasa por cinco grupos de actividades. **Inicio**: se define el objetivo y se autoriza. **Planeación**: se detalla el alcance, las tareas, el calendario, el presupuesto y los riesgos. **Ejecución**: se hace el trabajo. **Monitoreo y control**: se compara lo real contra el plan y se corrige. **Cierre**: se entrega, se cobra y se aprenden lecciones.",
            en: "A project goes through five groups of activities. **Initiating**: the objective is defined and approved. **Planning**: scope, tasks, schedule, budget and risks are detailed. **Executing**: the work is done. **Monitoring and controlling**: actual results are compared against the plan and corrected. **Closing**: delivery, payment and lessons learned.",
          },
          {
            es: "Una herramienta útil en la planeación es dividir el trabajo en partes pequeñas (la **EDT**, estructura de desglose del trabajo) y asignar a cada tarea un **responsable**, una duración y un costo.",
            en: "A useful planning tool is breaking the work into small parts (the **WBS**, work breakdown structure) and giving each task an **owner**, a duration and a cost.",
          },
          {
            es: "Mini ejemplo, organizar una boda: inicio = fijar fecha y presupuesto con los novios; planeación = lista de proveedores y calendario; ejecución = el gran día; control = revisar pagos y confirmaciones; cierre = pagar saldos y agradecer.",
            en: "Mini example, organizing a wedding: initiating = set date and budget with the couple; planning = supplier list and schedule; executing = the big day; controlling = check payments and confirmations; closing = pay balances and thank everyone.",
          },
        ],
        bullets: [
          { es: "Inicio: ¿qué queremos lograr y por qué?", en: "Initiating: what do we want to achieve and why?" },
          { es: "Planeación: ¿qué, quién, cuándo y cuánto?", en: "Planning: what, who, when and how much?" },
          { es: "Ejecución: hacer el trabajo.", en: "Executing: do the work." },
          { es: "Monitoreo y control: ¿vamos según el plan?", en: "Monitoring and controlling: are we on plan?" },
          { es: "Cierre: entregar y aprender.", en: "Closing: deliver and learn." },
        ],
      },
      {
        heading: { es: "Cronograma y ruta crítica", en: "Schedule and critical path" },
        body: [
          {
            es: "Muchas tareas dependen de otras: no puedes pintar antes de aplanar la pared. Un **diagrama de Gantt** muestra cada tarea como una barra en un calendario. Con las dependencias puedes encontrar la **ruta crítica**: la cadena de tareas más larga de principio a fin.",
            en: "Many tasks depend on others: you cannot paint before plastering the wall. A **Gantt chart** shows each task as a bar on a calendar. With the dependencies you can find the **critical path**: the longest chain of tasks from start to finish.",
          },
          {
            es: "La ruta crítica marca la **duración mínima** del proyecto. Si una tarea crítica se retrasa un día, todo el proyecto se retrasa un día. Las tareas fuera de la ruta crítica tienen **holgura**: pueden retrasarse un poco sin afectar la fecha final.",
            en: "The critical path sets the project's **minimum duration**. If a critical task is one day late, the whole project is one day late. Tasks off the critical path have **slack**: they can be delayed a little without affecting the end date.",
          },
          {
            es: "Mini ejemplo: para abrir una cafetería, la remodelación (20 días) y el trámite de permisos (12 días) pueden ir en paralelo. La remodelación es crítica; los permisos tienen 8 días de holgura.",
            en: "Mini example: to open a coffee shop, remodeling (20 days) and permit paperwork (12 days) can run in parallel. Remodeling is critical; the permits have 8 days of slack.",
          },
        ],
        formula: "Holgura de una ruta = Duración de la ruta crítica − Duración de esa ruta",
      },
    ],
    examples: [
      {
        title: { es: "Ruta crítica para lanzar una tienda en línea", en: "Critical path to launch an online store" },
        problem: {
          es: "Tareas: A) definir catálogo, 4 días; B) tomar fotos, 6 días (después de A); C) programar la página, 10 días (después de A); D) subir productos y probar, 3 días (después de B y C). ¿Cuánto dura el proyecto como mínimo?",
          en: "Tasks: A) define catalog, 4 days; B) take photos, 6 days (after A); C) build the website, 10 days (after A); D) upload products and test, 3 days (after B and C). What is the project's minimum duration?",
        },
        steps: [
          { es: "Ruta A-B-D: 4 + 6 + 3 = 13 días.", en: "Path A-B-D: 4 + 6 + 3 = 13 days." },
          { es: "Ruta A-C-D: 4 + 10 + 3 = 17 días.", en: "Path A-C-D: 4 + 10 + 3 = 17 days." },
          { es: "La más larga es A-C-D: esa es la ruta crítica.", en: "The longest is A-C-D: that is the critical path." },
          { es: "Holgura de B: 17 − 13 = 4 días.", en: "Slack of B: 17 − 13 = 4 days." },
        ],
        result: {
          es: "El proyecto dura como mínimo 17 días. Las fotos pueden retrasarse hasta 4 días sin mover la fecha final; la página no.",
          en: "The project takes at least 17 days. The photos can slip up to 4 days without moving the end date; the website cannot.",
        },
      },
      {
        title: { es: "Controlar el presupuesto de una remodelación", en: "Controlling a remodeling budget" },
        problem: {
          es: "Una remodelación tiene presupuesto de $120,000. A la mitad del tiempo se han gastado $72,000 y el avance real es del 50%. ¿Va bien el costo? (Cifras hipotéticas.)",
          en: "A remodel has a $120,000 budget. Halfway through the schedule, $72,000 has been spent and actual progress is 50%. Is cost on track? (Hypothetical figures.)",
        },
        steps: [
          { es: "Valor del trabajo hecho según el plan: 50% × 120,000 = $60,000.", en: "Planned value of the work done: 50% × 120,000 = $60,000." },
          { es: "Gasto real: $72,000.", en: "Actual spending: $72,000." },
          { es: "Diferencia: 72,000 − 60,000 = $12,000 más de lo previsto para ese avance.", en: "Difference: 72,000 − 60,000 = $12,000 more than expected for that progress." },
        ],
        result: {
          es: "El proyecto va $12,000 por encima del costo para su avance. Hay que revisar causas (precios de material, retrabajos) y ajustar antes de que crezca la desviación.",
          en: "The project is $12,000 over cost for its progress. Causes must be reviewed (material prices, rework) and corrected before the overrun grows.",
        },
      },
    ],
    keyPoints: [
      { es: "Un proyecto es temporal y crea un resultado único; una operación se repite.", en: "A project is temporary and creates a unique result; an operation repeats." },
      { es: "La triple restricción une alcance, tiempo y costo: si cambia uno, cambian los otros.", en: "The triple constraint links scope, time and cost: if one changes, the others change." },
      { es: "Fases: inicio, planeación, ejecución, monitoreo y control, y cierre.", en: "Phases: initiating, planning, executing, monitoring and controlling, and closing." },
      { es: "La ruta crítica es la cadena de tareas más larga y fija la duración mínima.", en: "The critical path is the longest chain of tasks and sets the minimum duration." },
      { es: "Las tareas con holgura pueden retrasarse un poco sin mover la fecha final.", en: "Tasks with slack can be delayed a little without moving the end date." },
    ],
    normativeNote: {
      es: "Contenido educativo. Las fases y términos siguen prácticas difundidas internacionalmente en gestión de proyectos (por ejemplo, las guías del Project Management Institute), que se actualizan periódicamente; verifica la versión vigente (2026) si necesitas una referencia formal.",
      en: "Educational content. The phases and terms follow internationally widespread project management practices (for example, the Project Management Institute's guides), which are updated periodically; verify the current version (2026) if you need a formal reference.",
    },
    exerciseIds: ['EMP-12-E1', 'EMP-12-E2', 'EMP-12-E3', 'EMP-12-E4', 'EMP-12-E5', 'EMP-12-E6'],
  },
]

export const exercises: Exercise[] = [
  // ═════════════════════════ EMP-07 ═════════════════════════
  {
    id: 'EMP-07-E1',
    level: 1,
    module: 'EMP-07',
    kind: 'mcq',
    flavor: 'concept',
    prompt: {
      es: "Una florería escribe varias frases para su plan. ¿Cuál de ellas es su visión?",
      en: "A flower shop writes several sentences for its plan. Which one is its vision?",
    },
    options: [
      { id: 'EMP-07-E1-a', text: { es: "\"Vendemos arreglos frescos con entrega el mismo día en la colonia.\"", en: "\"We sell fresh arrangements with same-day delivery in the neighborhood.\"" } },
      { id: 'EMP-07-E1-b', text: { es: "\"En cinco años, ser la florería de referencia para eventos en toda la ciudad.\"", en: "\"In five years, be the go-to flower shop for events across the whole city.\"" } },
      { id: 'EMP-07-E1-c', text: { es: "\"Honestidad y puntualidad en cada pedido.\"", en: "\"Honesty and punctuality in every order.\"" } },
      { id: 'EMP-07-E1-d', text: { es: "\"Vender 200 ramos el 14 de febrero.\"", en: "\"Sell 200 bouquets on February 14.\"" } },
    ],
    correctOptionId: 'EMP-07-E1-b',
    explanation: {
      es: "La visión describe lo que el negocio quiere llegar a ser en el futuro. La opción a es la misión (lo que hace hoy), la c son valores y la d es un objetivo concreto. Error común: confundir visión con misión porque ambas suenan inspiradoras.",
      en: "The vision describes what the business wants to become in the future. Option a is the mission (what it does today), c is values and d is a concrete objective. Common mistake: confusing vision with mission because both sound inspiring.",
    },
    difficulty: 1,
    points: 10,
    competency: 'strategic-planning',
  },
  {
    id: 'EMP-07-E2',
    level: 1,
    module: 'EMP-07',
    kind: 'truefalse',
    flavor: 'concept',
    prompt: {
      es: "\"Vender más este año\" es un objetivo SMART porque es relevante para cualquier negocio.",
      en: "\"Sell more this year\" is a SMART objective because it is relevant to any business.",
    },
    answer: false,
    explanation: {
      es: "Falso. Ser relevante no basta: no dice cuánto más (no es medible) ni es específico. Un objetivo SMART sería \"vender $40,000 más que el año pasado antes del 31 de diciembre\". Error común: creer que con tener fecha o ser importante ya es SMART.",
      en: "False. Being relevant is not enough: it does not say how much more (not measurable) and it is not specific. A SMART objective would be \"sell $40,000 more than last year before December 31\". Common mistake: thinking that having a date or being important already makes it SMART.",
    },
    difficulty: 1,
    points: 10,
    competency: 'strategic-planning',
  },
  {
    id: 'EMP-07-E3',
    level: 1,
    module: 'EMP-07',
    kind: 'classify',
    flavor: 'concept',
    prompt: {
      es: "Clasifica cada frase del plan de una escuela de natación como misión, visión, valor u objetivo.",
      en: "Classify each sentence from a swimming school's plan as mission, vision, value or objective.",
    },
    categories: [
      { id: 'EMP-07-E3-c1', label: { es: "Misión", en: "Mission" } },
      { id: 'EMP-07-E3-c2', label: { es: "Visión", en: "Vision" } },
      { id: 'EMP-07-E3-c3', label: { es: "Valor", en: "Value" } },
      { id: 'EMP-07-E3-c4', label: { es: "Objetivo SMART", en: "SMART objective" } },
    ],
    items: [
      { id: 'EMP-07-E3-i1', label: { es: "Enseñamos a nadar a niños y adultos con instructores certificados", en: "We teach children and adults to swim with certified instructors" }, correctCategoryId: 'EMP-07-E3-c1' },
      { id: 'EMP-07-E3-i2', label: { es: "Llegar a ser la escuela de natación más reconocida del estado", en: "Become the most recognized swimming school in the state" }, correctCategoryId: 'EMP-07-E3-c2' },
      { id: 'EMP-07-E3-i3', label: { es: "La seguridad de cada alumno va primero", en: "Every student's safety comes first" }, correctCategoryId: 'EMP-07-E3-c3' },
      { id: 'EMP-07-E3-i4', label: { es: "Inscribir 60 alumnos nuevos antes de julio", en: "Enroll 60 new students before July" }, correctCategoryId: 'EMP-07-E3-c4' },
      { id: 'EMP-07-E3-i5', label: { es: "Respeto y trato amable a todas las familias", en: "Respect and kind treatment for every family" }, correctCategoryId: 'EMP-07-E3-c3' },
      { id: 'EMP-07-E3-i6', label: { es: "Bajar las cancelaciones de clases a menos de 5% en el segundo semestre", en: "Cut class cancellations to under 5% in the second half of the year" }, correctCategoryId: 'EMP-07-E3-c4' },
    ],
    explanation: {
      es: "Misión = lo que hace hoy y para quién; visión = lo que quiere llegar a ser; valores = reglas de conducta; objetivos SMART = metas con número y fecha. Error común: clasificar un valor como misión porque ambos describen al negocio.",
      en: "Mission = what it does today and for whom; vision = what it wants to become; values = rules of conduct; SMART objectives = targets with a number and a date. Common mistake: classifying a value as the mission because both describe the business.",
    },
    difficulty: 1,
    points: 15,
    competency: 'strategic-planning',
  },
  {
    id: 'EMP-07-E4',
    level: 1,
    module: 'EMP-07',
    kind: 'numeric',
    flavor: 'case',
    context: {
      es: "Una ferretería vendió $480,000 el año pasado. Su objetivo estratégico para este año es crecer 12% en ventas. (Cifras hipotéticas.)",
      en: "A hardware store sold $480,000 last year. Its strategic objective for this year is to grow sales by 12%. (Hypothetical figures.)",
    },
    prompt: {
      es: "¿Cuál es la meta de ventas anual de la ferretería, en pesos?",
      en: "What is the hardware store's annual sales target, in pesos?",
    },
    answer: 537600,
    unit: 'MXN',
    decimals: 0,
    tolerance: { abs: 1 },
    explanation: {
      es: "Meta = 480,000 × 1.12 = $537,600. Se multiplica por 1.12 porque se conserva el 100% y se suma el 12%. Error común: calcular solo el aumento (480,000 × 0.12 = $57,600) y reportarlo como la meta.",
      en: "Target = 480,000 × 1.12 = $537,600. You multiply by 1.12 because you keep 100% and add 12%. Common mistake: calculating only the increase (480,000 × 0.12 = $57,600) and reporting it as the target.",
    },
    difficulty: 1,
    points: 10,
    competency: 'strategic-planning',
  },
  {
    id: 'EMP-07-E5',
    level: 1,
    module: 'EMP-07',
    kind: 'fields',
    flavor: 'case',
    context: {
      es: "La misma ferretería tiene una meta anual de $537,600 y quiere desdoblarla en metas mensuales iguales. El año pasado vendió $480,000. (Cifras hipotéticas.)",
      en: "The same hardware store has an annual target of $537,600 and wants to break it into equal monthly targets. Last year it sold $480,000. (Hypothetical figures.)",
    },
    prompt: {
      es: "Calcula la meta mensual promedio de este año y cuánto más por mes debe vender comparado con el promedio mensual del año pasado.",
      en: "Calculate this year's average monthly target and how much more per month it must sell compared with last year's monthly average.",
    },
    fields: [
      { id: 'f1', label: { es: "Meta mensual promedio (MXN)", en: "Average monthly target (MXN)" }, answer: 44800, unit: 'MXN', tolerance: { abs: 1 } },
      { id: 'f2', label: { es: "Aumento mensual contra el año pasado (MXN)", en: "Monthly increase versus last year (MXN)" }, answer: 4800, unit: 'MXN', tolerance: { abs: 1 } },
    ],
    explanation: {
      es: "Meta mensual = 537,600 ÷ 12 = $44,800. Promedio del año pasado = 480,000 ÷ 12 = $40,000. Aumento = 44,800 − 40,000 = $4,800 por mes. Error común: dividir entre 4 (trimestres) en lugar de 12 meses.",
      en: "Monthly target = 537,600 ÷ 12 = $44,800. Last year's average = 480,000 ÷ 12 = $40,000. Increase = 44,800 − 40,000 = $4,800 per month. Common mistake: dividing by 4 (quarters) instead of 12 months.",
    },
    difficulty: 2,
    points: 15,
    competency: 'strategic-planning',
  },
  {
    id: 'EMP-07-E6',
    level: 1,
    module: 'EMP-07',
    kind: 'multi',
    flavor: 'concept',
    prompt: {
      es: "¿Qué prácticas ayudan a que un plan estratégico sí se ejecute? Selecciona todas las que apliquen.",
      en: "Which practices help a strategic plan actually get executed? Select all that apply.",
    },
    options: [
      { id: 'EMP-07-E6-a', text: { es: "Asignar un responsable a cada meta", en: "Assign an owner to each target" } },
      { id: 'EMP-07-E6-b', text: { es: "Revisar cada mes lo logrado contra lo planeado", en: "Review achieved versus planned every month" } },
      { id: 'EMP-07-E6-c', text: { es: "Escribir el plan una vez y no volver a abrirlo para no distraerse", en: "Write the plan once and never open it again to avoid distractions" } },
      { id: 'EMP-07-E6-d', text: { es: "Desdoblar los objetivos anuales en metas trimestrales o mensuales", en: "Break annual objectives into quarterly or monthly targets" } },
      { id: 'EMP-07-E6-e', text: { es: "Fijar metas sin números para no presionar al equipo", en: "Set targets without numbers so as not to pressure the team" } },
    ],
    correctOptionIds: ['EMP-07-E6-a', 'EMP-07-E6-b', 'EMP-07-E6-d'],
    explanation: {
      es: "Un plan se ejecuta cuando tiene responsables, metas cortas y seguimiento periódico. Guardarlo sin revisarlo o quitar los números impide saber si vas bien. Error común: pensar que planear es un evento de una sola vez y no un ciclo.",
      en: "A plan gets executed when it has owners, short targets and periodic follow-up. Shelving it or removing numbers makes it impossible to know if you are on track. Common mistake: thinking planning is a one-time event rather than a cycle.",
    },
    difficulty: 1,
    points: 10,
    competency: 'strategic-planning',
  },

  // ═════════════════════════ EMP-08 ═════════════════════════
  {
    id: 'EMP-08-E1',
    level: 1,
    module: 'EMP-08',
    kind: 'mcq',
    flavor: 'concept',
    context: {
      es: "Una heladería artesanal en Cuernavaca analiza su situación para el próximo año.",
      en: "An artisanal ice cream shop in Cuernavaca is analyzing its situation for next year.",
    },
    prompt: {
      es: "¿Cuál de estos factores es una amenaza para la heladería?",
      en: "Which of these factors is a threat to the ice cream shop?",
    },
    options: [
      { id: 'EMP-08-E1-a', text: { es: "Sus sabores de frutas locales son muy populares", en: "Its local fruit flavors are very popular" } },
      { id: 'EMP-08-E1-b', text: { es: "Su congelador es viejo y se descompone seguido", en: "Its freezer is old and breaks down often" } },
      { id: 'EMP-08-E1-c', text: { es: "Una cadena nacional de paletas abrirá una sucursal en la misma plaza", en: "A national popsicle chain will open a branch in the same plaza" } },
      { id: 'EMP-08-E1-d', text: { es: "El municipio organizará una feria turística cada fin de semana", en: "The municipality will hold a tourist fair every weekend" } },
    ],
    correctOptionId: 'EMP-08-E1-c',
    explanation: {
      es: "Una amenaza es externa y negativa: la nueva cadena no depende de la heladería y le quitará clientes. La a es fortaleza, la b es debilidad (es interna, aunque sea negativa) y la d es oportunidad. Error común: llamar amenaza a cualquier problema, incluso los internos como el congelador.",
      en: "A threat is external and negative: the new chain does not depend on the shop and will take customers away. Option a is a strength, b is a weakness (it is internal, even though negative) and d is an opportunity. Common mistake: calling any problem a threat, even internal ones like the freezer.",
    },
    difficulty: 1,
    points: 10,
    competency: 'swot-pestel',
  },
  {
    id: 'EMP-08-E2',
    level: 1,
    module: 'EMP-08',
    kind: 'classify',
    flavor: 'case',
    context: {
      es: "Una estética unisex en Toluca reúne estos datos para su FODA.",
      en: "A unisex hair salon in Toluca gathers these facts for its SWOT.",
    },
    prompt: {
      es: "Clasifica cada dato de la estética en el cuadrante del FODA que le corresponde.",
      en: "Classify each of the salon's facts into its SWOT quadrant.",
    },
    categories: [
      { id: 'EMP-08-E2-c1', label: { es: "Fortaleza", en: "Strength" } },
      { id: 'EMP-08-E2-c2', label: { es: "Oportunidad", en: "Opportunity" } },
      { id: 'EMP-08-E2-c3', label: { es: "Debilidad", en: "Weakness" } },
      { id: 'EMP-08-E2-c4', label: { es: "Amenaza", en: "Threat" } },
    ],
    items: [
      { id: 'EMP-08-E2-i1', label: { es: "Sus estilistas tienen 10 años de experiencia", en: "Its stylists have 10 years of experience" }, correctCategoryId: 'EMP-08-E2-c1' },
      { id: 'EMP-08-E2-i2', label: { es: "No tiene sistema de citas y los clientes esperan mucho", en: "It has no booking system and customers wait a long time" }, correctCategoryId: 'EMP-08-E2-c3' },
      { id: 'EMP-08-E2-i3', label: { es: "Se construye un fraccionamiento grande a dos calles", en: "A large housing development is being built two streets away" }, correctCategoryId: 'EMP-08-E2-c2' },
      { id: 'EMP-08-E2-i4', label: { es: "Suben los precios de tintes importados", en: "Prices of imported hair dyes are rising" }, correctCategoryId: 'EMP-08-E2-c4' },
      { id: 'EMP-08-E2-i5', label: { es: "Crece la moda de cortes de barba entre jóvenes", en: "Beard grooming is trending among young people" }, correctCategoryId: 'EMP-08-E2-c2' },
      { id: 'EMP-08-E2-i6', label: { es: "El local es pequeño y solo caben dos sillas", en: "The space is small and only fits two chairs" }, correctCategoryId: 'EMP-08-E2-c3' },
    ],
    explanation: {
      es: "Lo que depende de la estética (experiencia, sistema de citas, tamaño del local) es interno: fortaleza o debilidad. Lo que pasa afuera (fraccionamiento, moda, precios de insumos) es externo: oportunidad o amenaza. Error común: poner el local pequeño como amenaza; es una debilidad porque es propia del negocio.",
      en: "What depends on the salon (experience, booking system, size of the space) is internal: strength or weakness. What happens outside (housing development, trends, input prices) is external: opportunity or threat. Common mistake: listing the small space as a threat; it is a weakness because it belongs to the business.",
    },
    difficulty: 1,
    points: 15,
    competency: 'swot-pestel',
  },
  {
    id: 'EMP-08-E3',
    level: 1,
    module: 'EMP-08',
    kind: 'classify',
    flavor: 'concept',
    prompt: {
      es: "Clasifica cada factor del entorno según la letra del PESTEL a la que pertenece.",
      en: "Classify each environmental factor by the PESTEL letter it belongs to.",
    },
    categories: [
      { id: 'EMP-08-E3-c1', label: { es: "Político", en: "Political" } },
      { id: 'EMP-08-E3-c2', label: { es: "Económico", en: "Economic" } },
      { id: 'EMP-08-E3-c3', label: { es: "Social", en: "Social" } },
      { id: 'EMP-08-E3-c4', label: { es: "Tecnológico", en: "Technological" } },
      { id: 'EMP-08-E3-c5', label: { es: "Ecológico", en: "Environmental" } },
      { id: 'EMP-08-E3-c6', label: { es: "Legal", en: "Legal" } },
    ],
    items: [
      { id: 'EMP-08-E3-i1', label: { es: "El gobierno estatal lanza un programa de apoyo a pequeños comercios", en: "The state government launches a support program for small shops" }, correctCategoryId: 'EMP-08-E3-c1' },
      { id: 'EMP-08-E3-i2', label: { es: "El peso se deprecia frente al dólar", en: "The peso depreciates against the dollar" }, correctCategoryId: 'EMP-08-E3-c2' },
      { id: 'EMP-08-E3-i3', label: { es: "Más personas buscan comida vegetariana", en: "More people look for vegetarian food" }, correctCategoryId: 'EMP-08-E3-c3' },
      { id: 'EMP-08-E3-i4', label: { es: "Se generalizan los pagos con código QR desde el celular", en: "QR-code payments from phones become widespread" }, correctCategoryId: 'EMP-08-E3-c4' },
      { id: 'EMP-08-E3-i5', label: { es: "Una sequía reduce la disponibilidad de agua en la región", en: "A drought reduces water availability in the region" }, correctCategoryId: 'EMP-08-E3-c5' },
      { id: 'EMP-08-E3-i6', label: { es: "Cambia una norma de etiquetado obligatorio de alimentos", en: "A mandatory food labeling rule changes" }, correctCategoryId: 'EMP-08-E3-c6' },
    ],
    explanation: {
      es: "Político = decisiones y programas de gobierno; económico = precios, tipo de cambio, empleo; social = gustos y hábitos; tecnológico = nuevas herramientas; ecológico = clima y recursos naturales; legal = leyes y normas obligatorias. Error común: confundir político con legal; el programa es una decisión de gobierno, la norma de etiquetado es una regla obligatoria.",
      en: "Political = government decisions and programs; economic = prices, exchange rate, employment; social = tastes and habits; technological = new tools; environmental = climate and natural resources; legal = mandatory laws and rules. Common mistake: confusing political with legal; the program is a government decision, the labeling rule is a mandatory regulation.",
    },
    difficulty: 1,
    points: 15,
    competency: 'swot-pestel',
  },
  {
    id: 'EMP-08-E4',
    level: 1,
    module: 'EMP-08',
    kind: 'truefalse',
    flavor: 'concept',
    prompt: {
      es: "En un FODA, las fortalezas y las debilidades son factores externos que el negocio no controla.",
      en: "In a SWOT, strengths and weaknesses are external factors that the business does not control.",
    },
    answer: false,
    explanation: {
      es: "Falso. Fortalezas y debilidades son internas: dependen del propio negocio (personal, procesos, ubicación). Las externas son oportunidades y amenazas. Error común: mezclar ambos ejes y anotar como debilidad algo que pasa en el entorno.",
      en: "False. Strengths and weaknesses are internal: they depend on the business itself (staff, processes, location). The external ones are opportunities and threats. Common mistake: mixing the two axes and listing as a weakness something that happens in the environment.",
    },
    difficulty: 1,
    points: 10,
    competency: 'swot-pestel',
  },
  {
    id: 'EMP-08-E5',
    level: 1,
    module: 'EMP-08',
    kind: 'mcq',
    flavor: 'case',
    context: {
      es: "Una cocina de comida casera en Saltillo tiene una fortaleza: sus guisos son muy reconocidos. Y una oportunidad: una fábrica nueva con 300 empleados abrirá cerca y no tiene comedor.",
      en: "A home-style food kitchen in Saltillo has a strength: its stews are well known. And an opportunity: a new factory with 300 employees will open nearby and has no cafeteria.",
    },
    prompt: {
      es: "¿Qué estrategia FO (fortaleza + oportunidad) le conviene más a la cocina?",
      en: "Which SO (strength + opportunity) strategy suits the kitchen best?",
    },
    options: [
      { id: 'EMP-08-E5-a', text: { es: "Ofrecer a la fábrica un servicio de comida diaria con sus guisos más conocidos", en: "Offer the factory a daily meal service with its best-known stews" } },
      { id: 'EMP-08-E5-b', text: { es: "Cerrar los sábados para ahorrar gas", en: "Close on Saturdays to save gas" } },
      { id: 'EMP-08-E5-c', text: { es: "Bajar precios por miedo a la competencia", en: "Lower prices out of fear of competition" } },
      { id: 'EMP-08-E5-d', text: { es: "Cambiar todo el menú por comida rápida", en: "Replace the whole menu with fast food" } },
    ],
    correctOptionId: 'EMP-08-E5-a',
    explanation: {
      es: "Una estrategia FO usa lo que haces bien para aprovechar algo bueno del entorno: los guisos reconocidos atienden a los empleados sin comedor. Las demás no combinan esa fortaleza con esa oportunidad, y cambiar el menú incluso tira la fortaleza. Error común: elegir acciones defensivas cuando el análisis muestra una oportunidad clara.",
      en: "An SO strategy uses what you do well to seize something good in the environment: the well-known stews serve employees without a cafeteria. The others do not combine that strength with that opportunity, and changing the menu even throws the strength away. Common mistake: choosing defensive actions when the analysis shows a clear opportunity.",
    },
    difficulty: 2,
    points: 15,
    competency: 'swot-pestel',
  },
  {
    id: 'EMP-08-E6',
    level: 1,
    module: 'EMP-08',
    kind: 'multi',
    flavor: 'concept',
    prompt: {
      es: "¿Qué recomendaciones hacen más útil un análisis FODA? Selecciona todas las que apliquen.",
      en: "Which recommendations make a SWOT analysis more useful? Select all that apply.",
    },
    options: [
      { id: 'EMP-08-E6-a', text: { es: "Escribir factores concretos y, si se puede, con datos", en: "Write concrete factors and, when possible, with data" } },
      { id: 'EMP-08-E6-b', text: { es: "Anotar todo lo que se te ocurra sin priorizar", en: "Write down everything that comes to mind without prioritizing" } },
      { id: 'EMP-08-E6-c', text: { es: "Usar el PESTEL para encontrar oportunidades y amenazas", en: "Use PESTEL to find opportunities and threats" } },
      { id: 'EMP-08-E6-d', text: { es: "Cruzar los cuadros para generar estrategias", en: "Cross the boxes to generate strategies" } },
      { id: 'EMP-08-E6-e', text: { es: "Hacerlo una sola vez al abrir el negocio", en: "Do it only once when opening the business" } },
    ],
    correctOptionIds: ['EMP-08-E6-a', 'EMP-08-E6-c', 'EMP-08-E6-d'],
    explanation: {
      es: "Un FODA útil es concreto, se apoya en el PESTEL para lo externo y termina en estrategias cruzadas. Una lista larga sin prioridad confunde, y el entorno cambia, así que hay que actualizarlo. Error común: quedarse en la lista y no decidir nada.",
      en: "A useful SWOT is concrete, relies on PESTEL for the external side and ends in cross strategies. A long unprioritized list confuses, and the environment changes, so it must be updated. Common mistake: stopping at the list and deciding nothing.",
    },
    difficulty: 1,
    points: 10,
    competency: 'swot-pestel',
  },

  // ═════════════════════════ EMP-09 ═════════════════════════
  {
    id: 'EMP-09-E1',
    level: 1,
    module: 'EMP-09',
    kind: 'mcq',
    flavor: 'concept',
    context: {
      es: "Los cines de una ciudad ven que cada vez más familias prefieren ver estrenos en casa por plataformas de streaming.",
      en: "A city's movie theaters see that more and more families prefer to watch new releases at home on streaming platforms.",
    },
    prompt: {
      es: "Para los cines, ¿qué fuerza de Porter representan las plataformas de streaming?",
      en: "For the theaters, which of Porter's forces do the streaming platforms represent?",
    },
    options: [
      { id: 'EMP-09-E1-a', text: { es: "Rivalidad entre competidores actuales", en: "Rivalry among existing competitors" } },
      { id: 'EMP-09-E1-b', text: { es: "Poder de negociación de los proveedores", en: "Bargaining power of suppliers" } },
      { id: 'EMP-09-E1-c', text: { es: "Amenaza de productos sustitutos", en: "Threat of substitute products" } },
      { id: 'EMP-09-E1-d', text: { es: "Poder de negociación de los clientes", en: "Bargaining power of buyers" } },
    ],
    correctOptionId: 'EMP-09-E1-c',
    explanation: {
      es: "El streaming es un producto distinto (no es un cine) que resuelve la misma necesidad: entretenerse viendo películas. Eso es un sustituto. Rivalidad sería otra cadena de cines. Error común: pensar que solo compiten los negocios del mismo tipo.",
      en: "Streaming is a different product (not a theater) that meets the same need: entertainment by watching movies. That is a substitute. Rivalry would be another theater chain. Common mistake: thinking only businesses of the same type compete.",
    },
    difficulty: 1,
    points: 10,
    competency: 'five-forces',
  },
  {
    id: 'EMP-09-E2',
    level: 1,
    module: 'EMP-09',
    kind: 'classify',
    flavor: 'case',
    context: {
      es: "Una panadería de barrio en León identifica estas situaciones.",
      en: "A neighborhood bakery in León identifies these situations.",
    },
    prompt: {
      es: "Clasifica cada situación de la panadería según la fuerza de Porter que describe.",
      en: "Classify each of the bakery's situations by the Porter force it describes.",
    },
    categories: [
      { id: 'EMP-09-E2-c1', label: { es: "Rivalidad", en: "Rivalry" } },
      { id: 'EMP-09-E2-c2', label: { es: "Nuevos entrantes", en: "New entrants" } },
      { id: 'EMP-09-E2-c3', label: { es: "Poder de clientes", en: "Buyer power" } },
      { id: 'EMP-09-E2-c4', label: { es: "Poder de proveedores", en: "Supplier power" } },
      { id: 'EMP-09-E2-c5', label: { es: "Sustitutos", en: "Substitutes" } },
    ],
    items: [
      { id: 'EMP-09-E2-i1', label: { es: "Hay otras cuatro panaderías en la misma avenida", en: "There are four other bakeries on the same avenue" }, correctCategoryId: 'EMP-09-E2-c1' },
      { id: 'EMP-09-E2-i2', label: { es: "Solo un molino de la zona le surte harina", en: "Only one mill in the area supplies its flour" }, correctCategoryId: 'EMP-09-E2-c4' },
      { id: 'EMP-09-E2-i3', label: { es: "Muchos vecinos desayunan cereal de caja en lugar de pan", en: "Many neighbors eat boxed cereal for breakfast instead of bread" }, correctCategoryId: 'EMP-09-E2-c5' },
      { id: 'EMP-09-E2-i4', label: { es: "Una cafetería grande le compra la mitad del pan y pide descuento", en: "A large coffee shop buys half its bread and asks for a discount" }, correctCategoryId: 'EMP-09-E2-c3' },
      { id: 'EMP-09-E2-i5', label: { es: "Abrir un horno casero cuesta poco y cualquiera puede empezar a vender", en: "Starting a home oven is cheap and anyone can start selling" }, correctCategoryId: 'EMP-09-E2-c2' },
    ],
    explanation: {
      es: "Competidores del mismo giro = rivalidad; un solo surtidor de un insumo clave = poder de proveedores; producto distinto para la misma necesidad = sustituto; cliente que concentra compras = poder de clientes; facilidad para abrir = nuevos entrantes. Error común: confundir nuevos entrantes (quienes podrían llegar) con rivalidad (quienes ya están).",
      en: "Competitors in the same line = rivalry; a single source of a key input = supplier power; a different product for the same need = substitute; a customer concentrating purchases = buyer power; ease of opening = new entrants. Common mistake: confusing new entrants (who could arrive) with rivalry (who are already there).",
    },
    difficulty: 1,
    points: 15,
    competency: 'five-forces',
  },
  {
    id: 'EMP-09-E3',
    level: 1,
    module: 'EMP-09',
    kind: 'truefalse',
    flavor: 'concept',
    prompt: {
      es: "Cuando abrir un negocio en una industria requiere mucha inversión, permisos difíciles y una marca reconocida, la amenaza de nuevos entrantes es baja.",
      en: "When opening a business in an industry requires a large investment, hard-to-get permits and a recognized brand, the threat of new entrants is low.",
    },
    answer: true,
    explanation: {
      es: "Verdadero. Inversión alta, permisos y marca son barreras de entrada: hacen difícil que lleguen competidores nuevos, lo que protege a quienes ya están. Error común: pensar que las barreras perjudican a todos; en realidad benefician a los negocios ya establecidos.",
      en: "True. High investment, permits and brand are barriers to entry: they make it hard for new competitors to arrive, which protects those already there. Common mistake: thinking barriers hurt everyone; they actually benefit established businesses.",
    },
    difficulty: 1,
    points: 10,
    competency: 'five-forces',
  },
  {
    id: 'EMP-09-E4',
    level: 1,
    module: 'EMP-09',
    kind: 'numeric',
    flavor: 'case',
    context: {
      es: "Un taller de herrería vendió $900,000 en el año. De esa cantidad, $360,000 fueron trabajos para una sola constructora. (Cifras hipotéticas.)",
      en: "An ironwork shop sold $900,000 in the year. Of that amount, $360,000 was work for a single construction company. (Hypothetical figures.)",
    },
    prompt: {
      es: "¿Qué porcentaje de las ventas del taller depende de la constructora?",
      en: "What percentage of the shop's sales depends on the construction company?",
    },
    answer: 40,
    unit: '%',
    decimals: 0,
    tolerance: { abs: 0.1 },
    explanation: {
      es: "360,000 ÷ 900,000 = 0.40 → 40%. Un cliente que concentra 40% de las ventas tiene mucho poder de negociación: puede exigir descuentos o plazos. Error común: dividir al revés (900,000 ÷ 360,000 = 2.5) y no convertir a porcentaje.",
      en: "360,000 ÷ 900,000 = 0.40 → 40%. A customer concentrating 40% of sales has strong bargaining power: it can demand discounts or payment terms. Common mistake: dividing the other way (900,000 ÷ 360,000 = 2.5) and not converting to a percentage.",
    },
    difficulty: 1,
    points: 10,
    competency: 'five-forces',
  },
  {
    id: 'EMP-09-E5',
    level: 1,
    module: 'EMP-09',
    kind: 'multi',
    flavor: 'concept',
    prompt: {
      es: "¿Cuáles de estas situaciones aumentan el poder de negociación de los proveedores? Selecciona todas las que apliquen.",
      en: "Which of these situations increase suppliers' bargaining power? Select all that apply.",
    },
    options: [
      { id: 'EMP-09-E5-a', text: { es: "Hay muy pocos proveedores del insumo", en: "There are very few suppliers of the input" } },
      { id: 'EMP-09-E5-b', text: { es: "El insumo es difícil de reemplazar por otro", en: "The input is hard to replace with another" } },
      { id: 'EMP-09-E5-c', text: { es: "Existen decenas de proveedores que venden lo mismo", en: "There are dozens of suppliers selling the same thing" } },
      { id: 'EMP-09-E5-d', text: { es: "Cambiar de proveedor implica costos altos, como readaptar maquinaria", en: "Switching suppliers involves high costs, such as retooling machinery" } },
    ],
    correctOptionIds: ['EMP-09-E5-a', 'EMP-09-E5-b', 'EMP-09-E5-d'],
    explanation: {
      es: "El proveedor tiene poder cuando hay pocos como él, su insumo es difícil de sustituir o cambiarse de proveedor cuesta mucho. Si hay decenas que venden lo mismo, el poder lo tienes tú como comprador. Error común: pensar que el poder depende solo del tamaño del proveedor.",
      en: "A supplier has power when there are few like it, its input is hard to substitute or switching suppliers is costly. If dozens sell the same thing, you as the buyer hold the power. Common mistake: thinking power depends only on the supplier's size.",
    },
    difficulty: 1,
    points: 10,
    competency: 'five-forces',
  },
  {
    id: 'EMP-09-E6',
    level: 1,
    module: 'EMP-09',
    kind: 'mcq',
    flavor: 'case',
    context: {
      es: "Una tienda de abarrotes compite con otras tres tiendas iguales en su colonia: mismos productos, mismos precios y ninguna se distingue.",
      en: "A grocery store competes with three identical stores in its neighborhood: same products, same prices and none stands out.",
    },
    prompt: {
      es: "Ante esa rivalidad tan alta, ¿qué respuesta es la más adecuada para la tienda?",
      en: "Given such high rivalry, which response is most appropriate for the store?",
    },
    options: [
      { id: 'EMP-09-E6-a', text: { es: "Bajar todos sus precios por debajo del costo", en: "Cut all its prices below cost" } },
      { id: 'EMP-09-E6-b', text: { es: "Diferenciarse, por ejemplo con entrega a domicilio por WhatsApp y productos locales", en: "Differentiate, for example with WhatsApp home delivery and local products" } },
      { id: 'EMP-09-E6-c', text: { es: "Comprar a un solo proveedor para simplificar", en: "Buy from a single supplier to keep it simple" } },
      { id: 'EMP-09-E6-d', text: { es: "No hacer nada, porque la rivalidad no afecta las ganancias", en: "Do nothing, because rivalry does not affect profits" } },
    ],
    correctOptionId: 'EMP-09-E6-b',
    explanation: {
      es: "Contra la rivalidad, la defensa clásica es diferenciarse: dar algo que los demás no dan para que el cliente no compare solo por precio. Vender bajo el costo genera pérdidas, depender de un solo proveedor sube el poder de ese proveedor y la rivalidad sí presiona las ganancias. Error común: creer que la única arma es el precio.",
      en: "Against rivalry, the classic defense is to differentiate: offer something the others do not so customers do not compare on price alone. Selling below cost creates losses, relying on one supplier raises that supplier's power and rivalry does pressure profits. Common mistake: believing price is the only weapon.",
    },
    difficulty: 1,
    points: 10,
    competency: 'five-forces',
  },

  // ═════════════════════════ EMP-10 ═════════════════════════
  {
    id: 'EMP-10-E1',
    level: 1,
    module: 'EMP-10',
    kind: 'mcq',
    flavor: 'concept',
    context: {
      es: "Una app para organizar finanzas personales es gratis para todos, pero cobra $79 al mes a quien quiere reportes avanzados y sincronizar varias cuentas.",
      en: "A personal finance app is free for everyone, but charges $79 a month to those who want advanced reports and to sync several accounts.",
    },
    prompt: {
      es: "¿Qué modelo de ingresos usa la app?",
      en: "Which revenue model does the app use?",
    },
    options: [
      { id: 'EMP-10-E1-a', text: { es: "Venta única", en: "One-time sale" } },
      { id: 'EMP-10-E1-b', text: { es: "Comisión", en: "Commission" } },
      { id: 'EMP-10-E1-c', text: { es: "Freemium", en: "Freemium" } },
      { id: 'EMP-10-E1-d', text: { es: "Publicidad", en: "Advertising" } },
    ],
    correctOptionId: 'EMP-10-E1-c',
    explanation: {
      es: "Freemium = versión básica gratis y funciones premium de pago. Aunque el cobro es mensual, lo que define el modelo es la combinación gratis + premium. Error común: responder \"suscripción\" o \"publicidad\" solo porque hay pagos mensuales o usuarios gratuitos.",
      en: "Freemium = free basic version and paid premium features. Although the charge is monthly, what defines the model is the free + premium combination. Common mistake: answering \"subscription\" or \"advertising\" just because there are monthly payments or free users.",
    },
    difficulty: 1,
    points: 10,
    competency: 'revenue-models',
  },
  {
    id: 'EMP-10-E2',
    level: 1,
    module: 'EMP-10',
    kind: 'numeric',
    flavor: 'case',
    context: {
      es: "Un servicio de cajas de verduras orgánicas tiene 1,200 suscriptores que pagan $99 al mes cada uno. (Cifras hipotéticas.)",
      en: "An organic vegetable box service has 1,200 subscribers paying $99 a month each. (Hypothetical figures.)",
    },
    prompt: {
      es: "¿Cuál es el ingreso mensual por suscripciones del servicio, en pesos?",
      en: "What is the service's monthly subscription revenue, in pesos?",
    },
    answer: 118800,
    unit: 'MXN',
    decimals: 0,
    tolerance: { abs: 1 },
    explanation: {
      es: "Ingreso mensual = suscriptores × cuota = 1,200 × 99 = $118,800. Error común: multiplicar además por 12 y dar el ingreso anual ($1,425,600) cuando se pregunta el mensual.",
      en: "Monthly revenue = subscribers × fee = 1,200 × 99 = $118,800. Common mistake: also multiplying by 12 and giving the annual revenue ($1,425,600) when the monthly figure is asked.",
    },
    difficulty: 1,
    points: 10,
    competency: 'revenue-models',
  },
  {
    id: 'EMP-10-E3',
    level: 1,
    module: 'EMP-10',
    kind: 'fields',
    flavor: 'case',
    context: {
      es: "Una app de recetas tiene 5,000 usuarios gratuitos activos. El 4% se pasa a la versión premium, que cuesta $150 al mes. (Cifras hipotéticas.)",
      en: "A recipe app has 5,000 active free users. 4% upgrade to the premium version, which costs $150 a month. (Hypothetical figures.)",
    },
    prompt: {
      es: "Calcula cuántos usuarios pagan y el ingreso mensual de la app por la versión premium.",
      en: "Calculate how many users pay and the app's monthly revenue from the premium version.",
    },
    fields: [
      { id: 'f1', label: { es: "Usuarios que pagan", en: "Paying users" }, answer: 200, unit: 'units', tolerance: { abs: 0 } },
      { id: 'f2', label: { es: "Ingreso mensual premium (MXN)", en: "Monthly premium revenue (MXN)" }, answer: 30000, unit: 'MXN', tolerance: { abs: 1 } },
    ],
    explanation: {
      es: "Usuarios que pagan = 5,000 × 0.04 = 200. Ingreso = 200 × 150 = $30,000 al mes. Los 4,800 restantes no generan ingreso por premium. Error común: multiplicar los 5,000 usuarios por $150 como si todos pagaran.",
      en: "Paying users = 5,000 × 0.04 = 200. Revenue = 200 × 150 = $30,000 a month. The remaining 4,800 generate no premium revenue. Common mistake: multiplying all 5,000 users by $150 as if everyone paid.",
    },
    difficulty: 2,
    points: 15,
    competency: 'revenue-models',
  },
  {
    id: 'EMP-10-E4',
    level: 1,
    module: 'EMP-10',
    kind: 'formula',
    flavor: 'concept',
    prompt: {
      es: "Completa la fórmula del ingreso de un negocio que cobra por comisión.",
      en: "Complete the revenue formula for a business that charges a commission.",
    },
    template: 'Ingreso = {{b1}} × {{b2}}',
    blanks: [
      {
        id: 'b1',
        options: [
          { id: 'EMP-10-E4-b1-a', text: { es: "Valor total de las transacciones", en: "Total transaction value" } },
          { id: 'EMP-10-E4-b1-b', text: { es: "Número de empleados", en: "Number of employees" } },
          { id: 'EMP-10-E4-b1-c', text: { es: "Costo de la renta", en: "Rent cost" } },
        ],
        correctOptionId: 'EMP-10-E4-b1-a',
      },
      {
        id: 'b2',
        options: [
          { id: 'EMP-10-E4-b2-a', text: { es: "Número de usuarios gratuitos", en: "Number of free users" } },
          { id: 'EMP-10-E4-b2-b', text: { es: "Porcentaje de comisión", en: "Commission percentage" } },
          { id: 'EMP-10-E4-b2-c', text: { es: "Meses del año", en: "Months in the year" } },
        ],
        correctOptionId: 'EMP-10-E4-b2-b',
      },
    ],
    explanation: {
      es: "Quien cobra comisión gana un porcentaje de lo que se vende a través de él: ingreso = valor de las transacciones × % de comisión. Error común: tomar como ingreso propio todo el valor vendido, cuando la mayor parte es del vendedor.",
      en: "A commission business earns a percentage of what is sold through it: revenue = transaction value × commission %. Common mistake: counting the whole value sold as your own revenue, when most of it belongs to the seller.",
    },
    difficulty: 1,
    points: 10,
    competency: 'revenue-models',
  },
  {
    id: 'EMP-10-E5',
    level: 1,
    module: 'EMP-10',
    kind: 'classify',
    flavor: 'concept',
    prompt: {
      es: "Clasifica cada negocio según su modelo de ingresos principal.",
      en: "Classify each business by its main revenue model.",
    },
    categories: [
      { id: 'EMP-10-E5-c1', label: { es: "Venta única", en: "One-time sale" } },
      { id: 'EMP-10-E5-c2', label: { es: "Suscripción", en: "Subscription" } },
      { id: 'EMP-10-E5-c3', label: { es: "Comisión", en: "Commission" } },
      { id: 'EMP-10-E5-c4', label: { es: "Publicidad", en: "Advertising" } },
      { id: 'EMP-10-E5-c5', label: { es: "Renta o pago por uso", en: "Rental or pay-per-use" } },
    ],
    items: [
      { id: 'EMP-10-E5-i1', label: { es: "Una zapatería que vende cada par en mostrador", en: "A shoe store selling each pair over the counter" }, correctCategoryId: 'EMP-10-E5-c1' },
      { id: 'EMP-10-E5-i2', label: { es: "Un gimnasio con mensualidad fija", en: "A gym with a fixed monthly fee" }, correctCategoryId: 'EMP-10-E5-c2' },
      { id: 'EMP-10-E5-i3', label: { es: "Un agente inmobiliario que cobra un porcentaje por cada casa vendida", en: "A real estate agent who charges a percentage per house sold" }, correctCategoryId: 'EMP-10-E5-c3' },
      { id: 'EMP-10-E5-i4', label: { es: "Un canal de videos gratuito que cobra a marcas por anunciarse", en: "A free video channel that charges brands to advertise" }, correctCategoryId: 'EMP-10-E5-c4' },
      { id: 'EMP-10-E5-i5', label: { es: "Una empresa que renta sillas y mesas para fiestas por día", en: "A company renting party chairs and tables by the day" }, correctCategoryId: 'EMP-10-E5-c5' },
      { id: 'EMP-10-E5-i6', label: { es: "Un servicio de bicicletas públicas que cobra por minuto de uso", en: "A public bike service that charges per minute of use" }, correctCategoryId: 'EMP-10-E5-c5' },
    ],
    explanation: {
      es: "Pago una vez por producto = venta única; cuota periódica = suscripción; porcentaje por intermediar = comisión; pagan las marcas, no el usuario = publicidad; pago por tiempo o cantidad usada = renta o pago por uso. Error común: confundir la renta por día con suscripción; en la renta pagas solo cuando usas.",
      en: "Pay once per product = one-time sale; periodic fee = subscription; percentage for intermediating = commission; brands pay, not the user = advertising; pay by time or amount used = rental or pay-per-use. Common mistake: confusing daily rental with subscription; with rental you pay only when you use it.",
    },
    difficulty: 1,
    points: 15,
    competency: 'revenue-models',
  },
  {
    id: 'EMP-10-E6',
    level: 1,
    module: 'EMP-10',
    kind: 'truefalse',
    flavor: 'interpret',
    prompt: {
      es: "En un modelo freemium, tener más usuarios gratuitos siempre significa tener más ingresos, aunque casi ninguno pague.",
      en: "In a freemium model, having more free users always means more revenue, even if almost none of them pay.",
    },
    answer: false,
    explanation: {
      es: "Falso. Los usuarios gratuitos no pagan; el ingreso depende de cuántos se convierten a premium. Además, atender usuarios gratis cuesta (servidores, soporte). Error común: medir el éxito solo por número de descargas o registros.",
      en: "False. Free users do not pay; revenue depends on how many convert to premium. Also, serving free users costs money (servers, support). Common mistake: measuring success only by downloads or sign-ups.",
    },
    difficulty: 1,
    points: 10,
    competency: 'revenue-models',
  },

  // ═════════════════════════ EMP-11 ═════════════════════════
  {
    id: 'EMP-11-E1',
    level: 1,
    module: 'EMP-11',
    kind: 'mcq',
    flavor: 'concept',
    prompt: {
      es: "En un proceso con varios pasos seguidos, ¿qué es el cuello de botella?",
      en: "In a process with several consecutive steps, what is the bottleneck?",
    },
    options: [
      { id: 'EMP-11-E1-a', text: { es: "El paso más caro del proceso", en: "The most expensive step in the process" } },
      { id: 'EMP-11-E1-b', text: { es: "El paso más lento, que limita la producción de todo el proceso", en: "The slowest step, which limits the output of the whole process" } },
      { id: 'EMP-11-E1-c', text: { es: "El último paso antes de entregar al cliente", en: "The last step before delivery to the customer" } },
      { id: 'EMP-11-E1-d', text: { es: "El paso que más empleados tiene", en: "The step with the most employees" } },
    ],
    correctOptionId: 'EMP-11-E1-b',
    explanation: {
      es: "El cuello de botella es el paso con menor capacidad: como el cuello de una botella, deja pasar menos y fija el ritmo de todo. No tiene que ser el más caro, el último ni el de más personal. Error común: mejorar el paso más visible en lugar del más lento.",
      en: "The bottleneck is the step with the lowest capacity: like a bottle's neck, it lets less through and sets the pace for everything. It need not be the most expensive, the last or the most staffed. Common mistake: improving the most visible step instead of the slowest.",
    },
    difficulty: 1,
    points: 10,
    competency: 'operations',
  },
  {
    id: 'EMP-11-E2',
    level: 1,
    module: 'EMP-11',
    kind: 'numeric',
    flavor: 'case',
    context: {
      es: "Una fábrica de piñatas puede producir hasta 4,500 piñatas al mes. En octubre produjo 3,600. (Cifras hipotéticas.)",
      en: "A piñata factory can produce up to 4,500 piñatas a month. In October it produced 3,600. (Hypothetical figures.)",
    },
    prompt: {
      es: "¿Qué porcentaje de su capacidad utilizó la fábrica de piñatas en octubre?",
      en: "What percentage of its capacity did the piñata factory use in October?",
    },
    answer: 80,
    unit: '%',
    decimals: 0,
    tolerance: { abs: 0.1 },
    explanation: {
      es: "Utilización = 3,600 ÷ 4,500 × 100 = 80%. Le queda 20% de capacidad libre para la temporada fuerte. Error común: dividir capacidad entre producción (4,500 ÷ 3,600 = 125%), lo que daría un resultado imposible.",
      en: "Utilization = 3,600 ÷ 4,500 × 100 = 80%. It has 20% spare capacity for the busy season. Common mistake: dividing capacity by output (4,500 ÷ 3,600 = 125%), which gives an impossible result.",
    },
    difficulty: 1,
    points: 10,
    competency: 'operations',
  },
  {
    id: 'EMP-11-E3',
    level: 1,
    module: 'EMP-11',
    kind: 'fields',
    flavor: 'case',
    context: {
      es: "Una panificadora tiene tres pasos en línea: amasar (30 charolas por hora), hornear (18 charolas por hora) y empacar (40 charolas por hora). Trabaja 8 horas al día.",
      en: "A bakery plant has three steps in line: kneading (30 trays per hour), baking (18 trays per hour) and packing (40 trays per hour). It works 8 hours a day.",
    },
    prompt: {
      es: "Calcula la capacidad de la línea por hora y cuántas charolas puede terminar en un día.",
      en: "Calculate the line's capacity per hour and how many trays it can finish in a day.",
    },
    fields: [
      { id: 'f1', label: { es: "Capacidad de la línea (charolas por hora)", en: "Line capacity (trays per hour)" }, answer: 18, unit: 'units', tolerance: { abs: 0 } },
      { id: 'f2', label: { es: "Charolas terminadas por día", en: "Trays finished per day" }, answer: 144, unit: 'units', tolerance: { abs: 0 } },
    ],
    explanation: {
      es: "El horno es el paso más lento (18 por hora), así que la línea completa solo saca 18 por hora. En 8 horas: 18 × 8 = 144 charolas. Error común: usar el promedio de los tres pasos o la capacidad del empaque (40), que nunca recibirá tantas charolas.",
      en: "The oven is the slowest step (18 per hour), so the whole line only outputs 18 per hour. In 8 hours: 18 × 8 = 144 trays. Common mistake: using the average of the three steps or the packing capacity (40), which will never receive that many trays.",
    },
    difficulty: 2,
    points: 15,
    competency: 'operations',
  },
  {
    id: 'EMP-11-E4',
    level: 1,
    module: 'EMP-11',
    kind: 'classify',
    flavor: 'concept',
    context: {
      es: "Piensa en una taquería que vende tacos de guisado.",
      en: "Think of a taco shop that sells stew tacos.",
    },
    prompt: {
      es: "Clasifica cada elemento de la taquería como insumo, transformación o resultado.",
      en: "Classify each element of the taco shop as input, transformation or output.",
    },
    categories: [
      { id: 'EMP-11-E4-c1', label: { es: "Insumo", en: "Input" } },
      { id: 'EMP-11-E4-c2', label: { es: "Transformación", en: "Transformation" } },
      { id: 'EMP-11-E4-c3', label: { es: "Resultado", en: "Output" } },
    ],
    items: [
      { id: 'EMP-11-E4-i1', label: { es: "Tortillas, carne y verduras", en: "Tortillas, meat and vegetables" }, correctCategoryId: 'EMP-11-E4-c1' },
      { id: 'EMP-11-E4-i2', label: { es: "Guisar la carne y calentar las tortillas", en: "Stewing the meat and warming the tortillas" }, correctCategoryId: 'EMP-11-E4-c2' },
      { id: 'EMP-11-E4-i3', label: { es: "Una orden de tacos servida al cliente", en: "An order of tacos served to the customer" }, correctCategoryId: 'EMP-11-E4-c3' },
      { id: 'EMP-11-E4-i4', label: { es: "Las horas de trabajo de la cocinera", en: "The cook's working hours" }, correctCategoryId: 'EMP-11-E4-c1' },
      { id: 'EMP-11-E4-i5', label: { es: "Armar los tacos con salsa y cebolla", en: "Assembling the tacos with salsa and onion" }, correctCategoryId: 'EMP-11-E4-c2' },
    ],
    explanation: {
      es: "Insumos = lo que entra (ingredientes y trabajo); transformación = los pasos que cambian los insumos (guisar, armar); resultado = lo que recibe el cliente. Error común: olvidar que el trabajo de las personas también es un insumo.",
      en: "Inputs = what goes in (ingredients and labor); transformation = the steps that change the inputs (stewing, assembling); output = what the customer receives. Common mistake: forgetting that people's labor is also an input.",
    },
    difficulty: 1,
    points: 15,
    competency: 'operations',
  },
  {
    id: 'EMP-11-E5',
    level: 1,
    module: 'EMP-11',
    kind: 'truefalse',
    flavor: 'interpret',
    context: {
      es: "En una imprenta, el paso más lento es el corte del papel. El dueño compra una impresora el doble de rápida.",
      en: "In a print shop, the slowest step is cutting the paper. The owner buys a printer that is twice as fast.",
    },
    prompt: {
      es: "Con la impresora nueva, la imprenta producirá el doble de trabajos terminados por día.",
      en: "With the new printer, the print shop will produce twice as many finished jobs per day.",
    },
    answer: false,
    explanation: {
      es: "Falso. El cuello de botella sigue siendo el corte: los trabajos impresos se acumularán esperando ser cortados y la producción terminada no cambia. La inversión debió ir al corte. Error común: mejorar un paso que no es el más lento y esperar que suba toda la producción.",
      en: "False. The bottleneck is still cutting: printed jobs will pile up waiting to be cut and finished output does not change. The investment should have gone to cutting. Common mistake: improving a step that is not the slowest and expecting total output to rise.",
    },
    difficulty: 2,
    points: 15,
    competency: 'operations',
  },
  {
    id: 'EMP-11-E6',
    level: 1,
    module: 'EMP-11',
    kind: 'multi',
    flavor: 'concept',
    prompt: {
      es: "Según la filosofía lean, ¿cuáles de estos son desperdicios que conviene eliminar? Selecciona todos los que apliquen.",
      en: "According to lean thinking, which of these are wastes worth eliminating? Select all that apply.",
    },
    options: [
      { id: 'EMP-11-E6-a', text: { es: "Empleados esperando a que llegue el material", en: "Employees waiting for material to arrive" } },
      { id: 'EMP-11-E6-b', text: { es: "Producir 500 piezas cuando solo se venden 300", en: "Producing 500 pieces when only 300 sell" } },
      { id: 'EMP-11-E6-c', text: { es: "Revisar la calidad durante el proceso", en: "Checking quality during the process" } },
      { id: 'EMP-11-E6-d', text: { es: "Piezas defectuosas que hay que rehacer", en: "Defective pieces that must be redone" } },
      { id: 'EMP-11-E6-e', text: { es: "Caminar al otro extremo del local por cada herramienta", en: "Walking to the other end of the shop for each tool" } },
    ],
    correctOptionIds: ['EMP-11-E6-a', 'EMP-11-E6-b', 'EMP-11-E6-d', 'EMP-11-E6-e'],
    explanation: {
      es: "Esperas, sobreproducción, defectos y movimientos innecesarios cuestan sin agregar valor al cliente. Revisar la calidad durante el proceso no es desperdicio: evita defectos más caros al final. Error común: ver cualquier control como pérdida de tiempo.",
      en: "Waiting, overproduction, defects and unnecessary motion cost money without adding customer value. Checking quality during the process is not waste: it prevents more expensive defects at the end. Common mistake: seeing any control as a waste of time.",
    },
    difficulty: 1,
    points: 10,
    competency: 'operations',
  },

  // ═════════════════════════ EMP-12 ═════════════════════════
  {
    id: 'EMP-12-E1',
    level: 1,
    module: 'EMP-12',
    kind: 'mcq',
    flavor: 'concept',
    context: {
      es: "A la mitad de la construcción de una terraza, el cliente pide agregar un asador de ladrillo que no estaba en el plan.",
      en: "Halfway through building a terrace, the client asks to add a brick grill that was not in the plan.",
    },
    prompt: {
      es: "Según la triple restricción, ¿qué es lo más probable que pase con el proyecto de la terraza?",
      en: "According to the triple constraint, what is most likely to happen to the terrace project?",
    },
    options: [
      { id: 'EMP-12-E1-a', text: { es: "Nada, porque el alcance no afecta tiempo ni costo", en: "Nothing, because scope does not affect time or cost" } },
      { id: 'EMP-12-E1-b', text: { es: "Aumentará el tiempo, el costo o ambos", en: "Time, cost or both will increase" } },
      { id: 'EMP-12-E1-c', text: { es: "Bajará el costo porque se aprovechan los materiales", en: "Cost will drop because materials are reused" } },
      { id: 'EMP-12-E1-d', text: { es: "Se terminará antes porque el cliente está más motivado", en: "It will finish earlier because the client is more motivated" } },
    ],
    correctOptionId: 'EMP-12-E1-b',
    explanation: {
      es: "Alcance, tiempo y costo están ligados: si el alcance crece, normalmente se necesita más tiempo, más dinero o ambos (o sacrificar calidad). Por eso los cambios se documentan y se renegocian. Error común: aceptar cambios \"pequeños\" sin ajustar fecha ni presupuesto.",
      en: "Scope, time and cost are linked: if scope grows, you usually need more time, more money or both (or sacrifice quality). That is why changes are documented and renegotiated. Common mistake: accepting \"small\" changes without adjusting the date or budget.",
    },
    difficulty: 1,
    points: 10,
    competency: 'project-management',
  },
  {
    id: 'EMP-12-E2',
    level: 1,
    module: 'EMP-12',
    kind: 'numeric',
    flavor: 'case',
    context: {
      es: "Proyecto para abrir un puesto de comida: A) conseguir el local, 3 días; B) instalar la cocina, 5 días (después de A); C) diseñar el menú, 2 días (después de A); D) capacitar al personal, 4 días (después de B y C).",
      en: "Project to open a food stand: A) get the space, 3 days; B) install the kitchen, 5 days (after A); C) design the menu, 2 days (after A); D) train the staff, 4 days (after B and C).",
    },
    prompt: {
      es: "¿Cuál es la duración mínima del proyecto del puesto de comida, en días?",
      en: "What is the minimum duration of the food stand project, in days?",
    },
    answer: 12,
    unit: 'days',
    decimals: 0,
    tolerance: { abs: 0 },
    explanation: {
      es: "Rutas: A-B-D = 3 + 5 + 4 = 12 días; A-C-D = 3 + 2 + 4 = 9 días. La ruta crítica es la más larga, A-B-D, así que el proyecto dura 12 días. Error común: sumar todas las tareas (14 días) sin notar que B y C van en paralelo.",
      en: "Paths: A-B-D = 3 + 5 + 4 = 12 days; A-C-D = 3 + 2 + 4 = 9 days. The critical path is the longest, A-B-D, so the project takes 12 days. Common mistake: adding all tasks (14 days) without noticing that B and C run in parallel.",
    },
    difficulty: 2,
    points: 15,
    competency: 'project-management',
  },
  {
    id: 'EMP-12-E3',
    level: 1,
    module: 'EMP-12',
    kind: 'numeric',
    flavor: 'case',
    context: {
      es: "En el mismo proyecto del puesto de comida, la ruta crítica A-B-D dura 12 días y la ruta A-C-D (con el diseño del menú) dura 9 días.",
      en: "In the same food stand project, the critical path A-B-D takes 12 days and path A-C-D (with the menu design) takes 9 days.",
    },
    prompt: {
      es: "¿Cuántos días de holgura tiene la tarea de diseñar el menú?",
      en: "How many days of slack does the menu design task have?",
    },
    answer: 3,
    unit: 'days',
    decimals: 0,
    tolerance: { abs: 0 },
    explanation: {
      es: "Holgura = 12 − 9 = 3 días. El menú puede retrasarse hasta 3 días sin mover la fecha de apertura. Error común: pensar que todas las tareas son igual de urgentes; solo las de la ruta crítica no tienen holgura.",
      en: "Slack = 12 − 9 = 3 days. The menu can be delayed up to 3 days without moving the opening date. Common mistake: thinking all tasks are equally urgent; only critical-path tasks have no slack.",
    },
    difficulty: 1,
    points: 10,
    competency: 'project-management',
  },
  {
    id: 'EMP-12-E4',
    level: 1,
    module: 'EMP-12',
    kind: 'classify',
    flavor: 'case',
    context: {
      es: "Un despacho organiza el proyecto de mudarse a una oficina nueva.",
      en: "A firm organizes the project of moving to a new office.",
    },
    prompt: {
      es: "Clasifica cada actividad de la mudanza del despacho en la fase del proyecto a la que pertenece.",
      en: "Classify each activity of the firm's move into the project phase it belongs to.",
    },
    categories: [
      { id: 'EMP-12-E4-c1', label: { es: "Inicio", en: "Initiating" } },
      { id: 'EMP-12-E4-c2', label: { es: "Planeación", en: "Planning" } },
      { id: 'EMP-12-E4-c3', label: { es: "Ejecución", en: "Executing" } },
      { id: 'EMP-12-E4-c4', label: { es: "Monitoreo y control", en: "Monitoring and controlling" } },
      { id: 'EMP-12-E4-c5', label: { es: "Cierre", en: "Closing" } },
    ],
    items: [
      { id: 'EMP-12-E4-i1', label: { es: "La dirección aprueba la mudanza y fija el objetivo", en: "Management approves the move and sets the objective" }, correctCategoryId: 'EMP-12-E4-c1' },
      { id: 'EMP-12-E4-i2', label: { es: "Hacer el calendario de tareas y el presupuesto", en: "Build the task schedule and the budget" }, correctCategoryId: 'EMP-12-E4-c2' },
      { id: 'EMP-12-E4-i3', label: { es: "Empacar y trasladar los muebles", en: "Pack and move the furniture" }, correctCategoryId: 'EMP-12-E4-c3' },
      { id: 'EMP-12-E4-i4', label: { es: "Comparar cada semana el gasto real contra el presupuesto", en: "Compare actual spending against the budget every week" }, correctCategoryId: 'EMP-12-E4-c4' },
      { id: 'EMP-12-E4-i5', label: { es: "Entregar las llaves de la oficina anterior y anotar lecciones aprendidas", en: "Hand over the old office keys and record lessons learned" }, correctCategoryId: 'EMP-12-E4-c5' },
      { id: 'EMP-12-E4-i6', label: { es: "Identificar riesgos, como lluvia el día de la mudanza", en: "Identify risks, such as rain on moving day" }, correctCategoryId: 'EMP-12-E4-c2' },
    ],
    explanation: {
      es: "Inicio = autorizar y definir objetivo; planeación = calendario, presupuesto y riesgos; ejecución = hacer el trabajo; monitoreo y control = comparar real contra plan; cierre = entregar y aprender. Error común: poner la identificación de riesgos en control; los riesgos se anticipan al planear.",
      en: "Initiating = approve and define the objective; planning = schedule, budget and risks; executing = do the work; monitoring and controlling = compare actual against plan; closing = deliver and learn. Common mistake: putting risk identification under control; risks are anticipated while planning.",
    },
    difficulty: 1,
    points: 15,
    competency: 'project-management',
  },
  {
    id: 'EMP-12-E5',
    level: 1,
    module: 'EMP-12',
    kind: 'truefalse',
    flavor: 'concept',
    prompt: {
      es: "Si una tarea de la ruta crítica se retrasa 2 días y no se hace nada para compensarlo, todo el proyecto se retrasa 2 días.",
      en: "If a critical-path task is delayed 2 days and nothing is done to make up for it, the whole project is delayed 2 days.",
    },
    answer: true,
    explanation: {
      es: "Verdadero. Las tareas de la ruta crítica no tienen holgura: cualquier retraso en ellas pasa directo a la fecha final. Por eso se vigilan con más cuidado. Error común: creer que un retraso se \"absorbe\" solo en las tareas siguientes.",
      en: "True. Critical-path tasks have no slack: any delay in them passes straight to the end date. That is why they are watched more closely. Common mistake: believing a delay is \"absorbed\" on its own by the following tasks.",
    },
    difficulty: 1,
    points: 10,
    competency: 'project-management',
  },
  {
    id: 'EMP-12-E6',
    level: 1,
    module: 'EMP-12',
    kind: 'multi',
    flavor: 'concept',
    prompt: {
      es: "¿Cuáles de estos esfuerzos son proyectos y no operaciones continuas? Selecciona todos los que apliquen.",
      en: "Which of these efforts are projects rather than ongoing operations? Select all that apply.",
    },
    options: [
      { id: 'EMP-12-E6-a', text: { es: "Lanzar la tienda en línea de una boutique", en: "Launching a boutique's online store" } },
      { id: 'EMP-12-E6-b', text: { es: "Cobrar en caja todos los días", en: "Running the register every day" } },
      { id: 'EMP-12-E6-c', text: { es: "Remodelar el local antes de la temporada navideña", en: "Remodeling the shop before the Christmas season" } },
      { id: 'EMP-12-E6-d', text: { es: "Organizar el congreso anual de la empresa de este año", en: "Organizing this year's annual company conference" } },
      { id: 'EMP-12-E6-e', text: { es: "Reponer los anaqueles cada mañana", en: "Restocking the shelves every morning" } },
    ],
    correctOptionIds: ['EMP-12-E6-a', 'EMP-12-E6-c', 'EMP-12-E6-d'],
    explanation: {
      es: "Un proyecto es temporal y crea un resultado único: lanzar la tienda, remodelar y organizar el congreso de este año tienen inicio, fin y entregable. Cobrar y reponer anaqueles se repiten todos los días: son operaciones. Error común: pensar que el congreso no es proyecto por ser anual; cada edición es un esfuerzo con fecha y resultado propios.",
      en: "A project is temporary and creates a unique result: launching the store, remodeling and organizing this year's conference have a start, an end and a deliverable. Running the register and restocking repeat every day: they are operations. Common mistake: thinking the conference is not a project because it is annual; each edition is an effort with its own date and result.",
    },
    difficulty: 1,
    points: 10,
    competency: 'project-management',
  },
]
