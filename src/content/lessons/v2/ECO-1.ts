import type { Exercise, Lesson } from '../../../types'

/**
 * FINCORE — Temario v2.0, área Economía y Entorno Empresarial, parte 1 (Básico).
 * ECO-01 a ECO-06: introducción, historia del pensamiento, micro, macro,
 * oferta y demanda, y teoría del consumidor y del productor.
 */

const t = (es: string, en: string) => ({ es, en })

const NOTE_MACRO = t(
  "Contenido educativo. Las menciones al INEGI, al Banco de México y a la Secretaría de Hacienda y Crédito Público (SHCP) describen sus funciones en términos generales; las cifras de este tema son hipotéticas. Las instituciones, sus facultades y sus métodos pueden cambiar: verifica la información vigente (2026) en sus fuentes oficiales.",
  "Educational content. References to INEGI, Banco de México and the Ministry of Finance and Public Credit (SHCP) describe their roles in general terms; the figures in this topic are hypothetical. Institutions, their powers and their methods can change: verify the current information (2026) in their official sources.",
)

export const lessons: Lesson[] = [
  // ───────────────────────────── ECO-01 ─────────────────────────────
  {
    id: 'ECO-01',
    level: 1,
    topicIds: ['ECO.1'],
    title: t("Introducción a la economía", "Introduction to economics"),
    summary: t(
      "La economía estudia cómo personas, empresas y gobiernos eligen qué hacer con recursos escasos, y cada elección tiene un costo de oportunidad.",
      "Economics studies how people, businesses and governments choose what to do with scarce resources, and every choice has an opportunity cost.",
    ),
    minutes: 14,
    objectives: [
      t("Explicar qué es la escasez y por qué obliga a elegir.", "Explain what scarcity is and why it forces us to choose."),
      t("Calcular el costo de oportunidad de una decisión cotidiana.", "Compute the opportunity cost of an everyday decision."),
      t("Identificar los factores de producción y leer una frontera de posibilidades de producción.", "Identify the factors of production and read a production possibilities frontier."),
      t("Distinguir afirmaciones económicas positivas de normativas.", "Distinguish positive from normative economic statements."),
    ],
    theory: [
      {
        heading: t("Escasez, elección y costo de oportunidad", "Scarcity, choice and opportunity cost"),
        body: [
          t(
            "Tu quincena no alcanza para todo lo que quisieras: ropa, salidas, ahorro, un celular nuevo. Eso es la **escasez**: los recursos (dinero, tiempo, materiales) son limitados y los deseos no. La **economía** es la ciencia que estudia cómo elegimos usar esos recursos escasos.",
            "Your paycheck does not cover everything you want: clothes, outings, savings, a new phone. That is **scarcity**: resources (money, time, materials) are limited and wants are not. **Economics** is the science that studies how we choose to use those scarce resources.",
          ),
          t(
            "Como no puedes tenerlo todo, cada vez que eliges algo renuncias a otra cosa. El **costo de oportunidad** es el valor de la **mejor alternativa a la que renuncias**. No es todo lo que dejaste de hacer, solo la mejor opción que no tomaste.",
            "Since you cannot have everything, every time you choose something you give up something else. **Opportunity cost** is the value of the **best alternative you give up**. It is not everything you did not do, only the best option you did not take.",
          ),
          t(
            "El costo de oportunidad incluye dinero que pagas (costo explícito) y beneficios que dejas de recibir (costo implícito). Mini ejemplo: si vas a un curso de 4 sábados que cuesta $1,500 y dejas de ganar $400 cada sábado en tu trabajo extra, el curso te cuesta 1,500 + 4 × 400 = **$3,100**, no solo $1,500.",
            "Opportunity cost includes money you pay (explicit cost) and benefits you stop receiving (implicit cost). Mini example: if you take a 4-Saturday course that costs $1,500 and give up $400 each Saturday from your side job, the course costs you 1,500 + 4 × 400 = **$3,100**, not just $1,500.",
          ),
        ],
        formula: "Costo de oportunidad = costos explícitos + beneficios a los que renuncias (mejor alternativa)",
      },
      {
        heading: t("Factores de producción y frontera de posibilidades", "Factors of production and the possibilities frontier"),
        body: [
          t(
            "Para producir cualquier cosa, una torta o un coche, se combinan **factores de producción**. Son los recursos básicos de una economía y cada uno recibe un pago distinto.",
            "To produce anything, a sandwich or a car, **factors of production** are combined. They are the basic resources of an economy and each one receives a different payment.",
          ),
          t(
            "La **frontera de posibilidades de producción (FPP)** muestra las combinaciones máximas de dos bienes que se pueden producir con los recursos y la tecnología disponibles. Un punto **sobre** la frontera es eficiente; un punto **dentro** desperdicia recursos (por ejemplo, máquinas paradas); un punto **fuera** es inalcanzable por ahora.",
            "The **production possibilities frontier (PPF)** shows the maximum combinations of two goods that can be produced with the available resources and technology. A point **on** the frontier is efficient; a point **inside** wastes resources (for example, idle machines); a point **outside** is unreachable for now.",
          ),
          t(
            "Moverse a lo largo de la frontera muestra el costo de oportunidad: para hacer más de un bien hay que hacer menos del otro. La frontera se expande cuando hay más recursos o mejor tecnología. Mini ejemplo: un taller hace 10 mesas o 40 sillas; cada mesa extra cuesta 4 sillas.",
            "Moving along the frontier shows opportunity cost: to make more of one good you must make less of the other. The frontier expands with more resources or better technology. Mini example: a workshop makes 10 tables or 40 chairs; each extra table costs 4 chairs.",
          ),
        ],
        bullets: [
          t("Tierra: recursos naturales (un terreno, el agua, minerales). Su pago es la renta.", "Land: natural resources (a plot, water, minerals). Its payment is rent."),
          t("Trabajo: el esfuerzo de las personas. Su pago es el salario.", "Labor: people's effort. Its payment is wages."),
          t("Capital: herramientas, máquinas y edificios hechos para producir. Su pago es el interés.", "Capital: tools, machines and buildings made to produce. Its payment is interest."),
          t("Capacidad empresarial: organizar los demás factores y asumir el riesgo. Su pago es la ganancia.", "Entrepreneurship: organizing the other factors and taking the risk. Its payment is profit."),
        ],
      },
      {
        heading: t("Cómo piensan los economistas", "How economists think"),
        body: [
          t(
            "Los economistas usan **modelos**: versiones simplificadas de la realidad, como un mapa del metro que no muestra cada calle pero te ayuda a llegar. Para aislar un efecto suponen **ceteris paribus**, que significa \"todo lo demás constante\".",
            "Economists use **models**: simplified versions of reality, like a subway map that does not show every street but helps you get there. To isolate one effect they assume **ceteris paribus**, which means \"all else equal\".",
          ),
          t(
            "Distinguen dos tipos de afirmaciones. Una **afirmación positiva** describe lo que **es** y se puede comprobar con datos: \"si sube el precio del refresco, se venden menos\". Una **afirmación normativa** dice lo que **debería ser** y depende de valores: \"el gobierno debería prohibir el refresco en escuelas\".",
            "They distinguish two types of statements. A **positive statement** describes what **is** and can be checked with data: \"if the price of soda rises, less is sold\". A **normative statement** says what **should be** and depends on values: \"the government should ban soda in schools\".",
          ),
          t(
            "La economía se divide en **microeconomía** (decisiones de hogares y empresas en mercados concretos) y **macroeconomía** (la economía de un país en conjunto). Mini ejemplo: el precio del aguacate en tu mercado es micro; la inflación de todo México es macro.",
            "Economics is divided into **microeconomics** (decisions of households and firms in specific markets) and **macroeconomics** (a country's economy as a whole). Mini example: the price of avocados at your market is micro; inflation across Mexico is macro.",
          ),
        ],
      },
    ],
    examples: [
      {
        title: t("El verdadero costo de estudiar una maestría", "The true cost of a master's degree"),
        problem: t(
          "Carla gana $15,000 al mes. Piensa dejar su trabajo un año para estudiar una maestría de tiempo completo con colegiatura de $4,000 al mes. Gasta $3,000 al mes en comida, estudie o trabaje. ¿Cuál es su costo de oportunidad anual?",
          "Carla earns $15,000 a month. She is thinking of leaving her job for a year to study a full-time master's with tuition of $4,000 a month. She spends $3,000 a month on food, whether she studies or works. What is her annual opportunity cost?",
        ),
        steps: [
          t("Costo explícito: colegiatura 4,000 × 12 = $48,000.", "Explicit cost: tuition 4,000 × 12 = $48,000."),
          t("Costo implícito: sueldo al que renuncia 15,000 × 12 = $180,000.", "Implicit cost: salary given up 15,000 × 12 = $180,000."),
          t("La comida no cuenta: la paga igual en ambos casos, no depende de la decisión.", "Food does not count: she pays it in both cases; it does not depend on the decision."),
          t("Suma: 48,000 + 180,000 = $228,000.", "Sum: 48,000 + 180,000 = $228,000."),
        ],
        result: t(
          "Estudiar le cuesta $228,000 en el año. El mayor costo no es la colegiatura, sino el sueldo que deja de ganar.",
          "Studying costs her $228,000 for the year. The biggest cost is not tuition but the salary she gives up.",
        ),
      },
      {
        title: t("Leer una frontera de posibilidades", "Reading a possibilities frontier"),
        problem: t(
          "Un taller puede hacer al mes 10 mesas o 40 sillas, con un intercambio constante. Hoy hace 6 mesas. ¿Cuántas sillas puede hacer como máximo? Si quiere pasar a 8 mesas, ¿cuántas sillas sacrifica?",
          "A workshop can make 10 tables or 40 chairs a month, with a constant trade-off. Today it makes 6 tables. How many chairs can it make at most? If it wants to go to 8 tables, how many chairs does it give up?",
        ),
        steps: [
          t("Costo de oportunidad de una mesa: 40 ÷ 10 = 4 sillas.", "Opportunity cost of one table: 40 ÷ 10 = 4 chairs."),
          t("Con 6 mesas quedan recursos para 10 − 6 = 4 mesas, es decir, 4 × 4 = 16 sillas.", "With 6 tables, resources remain for 10 − 6 = 4 tables, that is, 4 × 4 = 16 chairs."),
          t("Pasar a 8 mesas: 2 mesas más × 4 = 8 sillas menos; quedan 8 sillas.", "Moving to 8 tables: 2 more tables × 4 = 8 fewer chairs; 8 chairs remain."),
        ],
        result: t(
          "Con 6 mesas hace hasta 16 sillas; subir a 8 mesas le cuesta 8 sillas. Si hiciera 6 mesas y solo 10 sillas, estaría dentro de la frontera, desperdiciando recursos.",
          "With 6 tables it makes up to 16 chairs; going to 8 tables costs 8 chairs. If it made 6 tables and only 10 chairs, it would be inside the frontier, wasting resources.",
        ),
      },
    ],
    keyPoints: [
      t("Escasez: recursos limitados frente a deseos ilimitados; por eso hay que elegir.", "Scarcity: limited resources versus unlimited wants; that is why we must choose."),
      t("Costo de oportunidad = la mejor alternativa a la que renuncias, en dinero y en beneficios perdidos.", "Opportunity cost = the best alternative you give up, in money and in lost benefits."),
      t("Factores de producción: tierra, trabajo, capital y capacidad empresarial.", "Factors of production: land, labor, capital and entrepreneurship."),
      t("Sobre la FPP = eficiente; dentro = desperdicio; fuera = inalcanzable por ahora.", "On the PPF = efficient; inside = waste; outside = unreachable for now."),
      t("Positivo describe lo que es; normativo opina lo que debería ser.", "Positive describes what is; normative argues what should be."),
    ],
    exerciseIds: ['ECO-01-E1', 'ECO-01-E2', 'ECO-01-E3', 'ECO-01-E4', 'ECO-01-E5', 'ECO-01-E6'],
  },

  // ───────────────────────────── ECO-02 ─────────────────────────────
  {
    id: 'ECO-02',
    level: 1,
    topicIds: ['ECO.2'],
    title: t("Historia del pensamiento económico", "History of economic thought"),
    summary: t(
      "Las ideas económicas evolucionaron del mercantilismo y los clásicos como Adam Smith, a los marginalistas, Keynes y las escuelas actuales, y cada una respondió a los problemas de su época.",
      "Economic ideas evolved from mercantilism and classical thinkers such as Adam Smith to the marginalists, Keynes and today's schools, and each one responded to the problems of its time.",
    ),
    minutes: 15,
    objectives: [
      t("Describir las ideas centrales del mercantilismo y de los fisiócratas.", "Describe the central ideas of mercantilism and the physiocrats."),
      t("Explicar las aportaciones de Adam Smith, David Ricardo y la crítica de Karl Marx.", "Explain the contributions of Adam Smith, David Ricardo and Karl Marx's critique."),
      t("Reconocer las ideas de los marginalistas, de Keynes y del monetarismo.", "Recognize the ideas of the marginalists, Keynes and monetarism."),
      t("Relacionar cada escuela con el problema económico que buscaba resolver.", "Relate each school to the economic problem it sought to solve."),
    ],
    theory: [
      {
        heading: t("Mercantilistas y fisiócratas: ¿de dónde viene la riqueza?", "Mercantilists and physiocrats: where does wealth come from?"),
        body: [
          t(
            "Entre los siglos XVI y XVIII, muchos reinos europeos siguieron el **mercantilismo**: creían que un país era rico si acumulaba **oro y plata**. Para lograrlo había que **exportar más de lo que se importaba** y proteger la industria propia con aranceles y monopolios. La plata extraída de minas de la Nueva España (lo que hoy es México) fue parte de esa historia.",
            "Between the 16th and 18th centuries, many European kingdoms followed **mercantilism**: they believed a country was rich if it accumulated **gold and silver**. To achieve that, it had to **export more than it imported** and protect its own industry with tariffs and monopolies. Silver mined in New Spain (today's Mexico) was part of that story.",
          ),
          t(
            "En el siglo XVIII, en Francia, los **fisiócratas** (su figura principal fue François Quesnay) dijeron que la verdadera riqueza no eran los metales, sino lo que produce la **tierra**: la agricultura era para ellos la única actividad que generaba un excedente. También defendieron dejar trabajar libremente a los productores, con la idea de *laissez faire* (\"dejar hacer\").",
            "In the 18th century, in France, the **physiocrats** (their main figure was François Quesnay) said that true wealth was not metals but what the **land** produces: for them agriculture was the only activity that created a surplus. They also argued for letting producers work freely, with the idea of *laissez faire* (\"let it be\").",
          ),
          t(
            "Mini ejemplo: un mercantilista diría que México es más rico si guarda más reservas de metal; un fisiócrata miraría cuánto maíz y cuántas cosechas produce el campo.",
            "Mini example: a mercantilist would say Mexico is richer if it stores more metal reserves; a physiocrat would look at how much corn and how many harvests the countryside produces.",
          ),
        ],
      },
      {
        heading: t("Los clásicos: Smith, Ricardo, Malthus y la crítica de Marx", "The classics: Smith, Ricardo, Malthus and Marx's critique"),
        body: [
          t(
            "En **1776**, el escocés **Adam Smith** publicó *La riqueza de las naciones*. Explicó que la riqueza nace del **trabajo productivo** y de la **división del trabajo**: si cada persona se especializa en una tarea, todos producen mucho más. También describió la **mano invisible**: al buscar su propio beneficio en mercados competitivos, las personas suelen terminar sirviendo a los demás. Por eso se le considera padre de la economía moderna.",
            "In **1776**, the Scot **Adam Smith** published *The Wealth of Nations*. He explained that wealth comes from **productive labor** and the **division of labor**: if each person specializes in one task, everyone produces much more. He also described the **invisible hand**: by pursuing their own benefit in competitive markets, people often end up serving others. That is why he is considered the father of modern economics.",
          ),
          t(
            "**David Ricardo** (1817) explicó la **ventaja comparativa**: a dos países les conviene comerciar aunque uno sea mejor en todo, si cada uno se especializa en lo que le cuesta relativamente menos. **Thomas Malthus** advirtió que la población podía crecer más rápido que los alimentos. Después, **Karl Marx** (*El capital*, primer tomo en 1867) criticó al capitalismo: sostuvo que la ganancia del capitalista sale del trabajo no pagado al obrero.",
            "**David Ricardo** (1817) explained **comparative advantage**: two countries benefit from trade even if one is better at everything, if each specializes in what costs it relatively less. **Thomas Malthus** warned that population could grow faster than food. Later, **Karl Marx** (*Capital*, first volume in 1867) criticized capitalism: he argued that the capitalist's profit comes from the worker's unpaid labor.",
          ),
          t(
            "Mini ejemplo de división del trabajo: en una tortería, si una persona hace todo, prepara pocas tortas por hora; si una corta, otra arma y otra cobra, el equipo produce más por persona.",
            "Mini example of division of labor: in a sandwich shop, if one person does everything, few sandwiches are made per hour; if one slices, another assembles and another charges, the team produces more per person.",
          ),
        ],
      },
      {
        heading: t("Del margen a Keynes y a las ideas actuales", "From the margin to Keynes and today's ideas"),
        body: [
          t(
            "Hacia la década de **1870**, los **marginalistas** (Jevons, Menger y Walras) cambiaron la pregunta: el valor de algo depende de la **utilidad marginal**, es decir, la satisfacción que da **una unidad más**. Por eso el agua, muy útil, es barata (hay mucha) y un diamante es caro (hay pocos).",
            "Around the **1870s**, the **marginalists** (Jevons, Menger and Walras) changed the question: the value of something depends on **marginal utility**, that is, the satisfaction from **one more unit**. That is why water, very useful, is cheap (there is a lot) and a diamond is expensive (there are few).",
          ),
          t(
            "La **Gran Depresión** de los años treinta dejó a millones sin empleo. En **1936**, **John Maynard Keynes** publicó la *Teoría general* y argumentó que, si la gente y las empresas gastan muy poco (**demanda agregada** insuficiente), el desempleo puede durar mucho; propuso que el gobierno aumente su gasto para reactivar la economía. Más tarde, **Milton Friedman** y el **monetarismo** pusieron el foco en la cantidad de dinero como causa de la inflación, y **Friedrich Hayek** (escuela austriaca) defendió el papel de los precios libres como transmisores de información.",
            "The **Great Depression** of the 1930s left millions unemployed. In **1936**, **John Maynard Keynes** published the *General Theory* and argued that if people and firms spend too little (insufficient **aggregate demand**), unemployment can last a long time; he proposed that the government increase its spending to revive the economy. Later, **Milton Friedman** and **monetarism** focused on the quantity of money as the cause of inflation, and **Friedrich Hayek** (Austrian school) defended free prices as carriers of information.",
          ),
          t(
            "En América Latina, la **CEPAL** con **Raúl Prebisch** impulsó a mediados del siglo XX la industrialización para sustituir importaciones, idea que influyó en México. Hoy, la **economía conductual** estudia cómo las personas reales se equivocan de forma predecible, por ejemplo, al dejar el ahorro \"para el próximo mes\". Mini ejemplo: ante una recesión, un keynesiano propondría más gasto público; un monetarista vigilaría primero la cantidad de dinero.",
            "In Latin America, **ECLAC (CEPAL)** with **Raúl Prebisch** promoted industrialization to replace imports in the mid-20th century, an idea that influenced Mexico. Today, **behavioral economics** studies how real people make predictable mistakes, for example, leaving saving \"for next month\". Mini example: facing a recession, a Keynesian would propose more public spending; a monetarist would first watch the quantity of money.",
          ),
        ],
        bullets: [
          t("Mercantilismo: riqueza = metales; exportar más que importar.", "Mercantilism: wealth = metals; export more than you import."),
          t("Fisiócratas: riqueza = tierra y agricultura; laissez faire.", "Physiocrats: wealth = land and agriculture; laissez faire."),
          t("Clásicos: trabajo, división del trabajo, mercados y ventaja comparativa.", "Classics: labor, division of labor, markets and comparative advantage."),
          t("Marginalistas: el valor depende de la utilidad de una unidad más.", "Marginalists: value depends on the utility of one more unit."),
          t("Keynes: la demanda insuficiente causa desempleo; el gobierno puede intervenir.", "Keynes: insufficient demand causes unemployment; the government can step in."),
          t("Monetarismo: la cantidad de dinero explica la inflación.", "Monetarism: the quantity of money explains inflation."),
        ],
      },
    ],
    examples: [
      {
        title: t("La división del trabajo en una tortería", "Division of labor in a sandwich shop"),
        problem: t(
          "Cuando cada uno de 3 empleados hace tortas completas solo, cada uno prepara 12 por hora. Si se especializan (uno corta, otro arma y otro empaca y cobra), entre los tres preparan 54 por hora. ¿Cuánto aumenta la producción por empleado?",
          "When each of 3 employees makes whole sandwiches alone, each one prepares 12 per hour. If they specialize (one slices, another assembles, another packs and charges), together they prepare 54 per hour. How much does output per employee increase?",
        ),
        steps: [
          t("Producción total sin especializarse: 3 × 12 = 36 tortas por hora.", "Total output without specializing: 3 × 12 = 36 sandwiches per hour."),
          t("Producción por empleado especializado: 54 ÷ 3 = 18 tortas por hora.", "Output per specialized employee: 54 ÷ 3 = 18 sandwiches per hour."),
          t("Aumento: (18 − 12) ÷ 12 = 0.5 = 50 %.", "Increase: (18 − 12) ÷ 12 = 0.5 = 50%."),
        ],
        result: t(
          "Con la misma gente, la producción por empleado sube 50 %: es la idea de Adam Smith sobre la división del trabajo.",
          "With the same people, output per employee rises 50%: this is Adam Smith's idea of the division of labor.",
        ),
      },
      {
        title: t("¿Qué recetaría cada escuela?", "What would each school prescribe?"),
        problem: t(
          "Un país hipotético tiene ventas a la baja y mucho desempleo. Compara qué propondrían un mercantilista, un keynesiano y un clásico.",
          "A hypothetical country has falling sales and high unemployment. Compare what a mercantilist, a Keynesian and a classical economist would propose.",
        ),
        steps: [
          t("Mercantilista: subir aranceles y limitar importaciones para acumular metales.", "Mercantilist: raise tariffs and limit imports to accumulate metals."),
          t("Keynesiano: aumentar el gasto público (por ejemplo, en obras) para elevar la demanda y el empleo.", "Keynesian: increase public spending (for example, on public works) to lift demand and employment."),
          t("Clásico: confiar en que precios y salarios se ajusten y que el mercado se recupere solo.", "Classical: trust that prices and wages adjust and the market recovers on its own."),
        ],
        result: t(
          "Cada escuela parte de una idea distinta de dónde viene la riqueza y qué falla. Conocerlas te ayuda a entender por qué los economistas aún debaten.",
          "Each school starts from a different idea of where wealth comes from and what goes wrong. Knowing them helps you understand why economists still debate.",
        ),
      },
    ],
    keyPoints: [
      t("Mercantilismo: acumular oro y plata y exportar más de lo que se importa.", "Mercantilism: accumulate gold and silver and export more than you import."),
      t("Adam Smith (1776): división del trabajo y mano invisible.", "Adam Smith (1776): division of labor and the invisible hand."),
      t("Ricardo: ventaja comparativa; Marx: crítica a la ganancia capitalista.", "Ricardo: comparative advantage; Marx: critique of capitalist profit."),
      t("Marginalistas (1870s): el valor depende de la utilidad marginal.", "Marginalists (1870s): value depends on marginal utility."),
      t("Keynes (1936): demanda insuficiente y papel activo del gobierno; Friedman: dinero e inflación.", "Keynes (1936): insufficient demand and an active government role; Friedman: money and inflation."),
    ],
    exerciseIds: ['ECO-02-E1', 'ECO-02-E2', 'ECO-02-E3', 'ECO-02-E4', 'ECO-02-E5', 'ECO-02-E6'],
  },

  // ───────────────────────────── ECO-03 ─────────────────────────────
  {
    id: 'ECO-03',
    level: 1,
    topicIds: ['ECO.3'],
    title: t("Microeconomía", "Microeconomics"),
    summary: t(
      "La microeconomía estudia cómo hogares y empresas toman decisiones en el margen, responden a incentivos e interactúan en mercados donde los precios funcionan como señales.",
      "Microeconomics studies how households and firms make decisions at the margin, respond to incentives and interact in markets where prices work as signals.",
    ),
    minutes: 15,
    objectives: [
      t("Describir a los agentes de la microeconomía y el flujo circular entre hogares y empresas.", "Describe the agents of microeconomics and the circular flow between households and firms."),
      t("Tomar decisiones comparando beneficio marginal y costo marginal, ignorando costos hundidos.", "Make decisions by comparing marginal benefit and marginal cost, ignoring sunk costs."),
      t("Explicar cómo los precios e incentivos guían decisiones y cuándo el mercado falla.", "Explain how prices and incentives guide decisions and when the market fails."),
    ],
    theory: [
      {
        heading: t("Agentes y mercados: el flujo circular", "Agents and markets: the circular flow"),
        body: [
          t(
            "La **microeconomía** mira la economía \"de cerca\": cómo decide una familia qué comprar, cómo decide una panadería cuánto pan hornear y cómo se forma el precio en un mercado concreto. A quienes deciden se les llama **agentes económicos**: principalmente **hogares** y **empresas**.",
            "**Microeconomics** looks at the economy \"up close\": how a family decides what to buy, how a bakery decides how much bread to bake and how the price is set in a specific market. Those who decide are called **economic agents**: mainly **households** and **firms**.",
          ),
          t(
            "Un **mercado** es cualquier lugar o medio donde compradores y vendedores intercambian: el tianguis, una tienda en línea o una bolsa de trabajo. El **flujo circular** resume la relación: en el **mercado de bienes y servicios**, los hogares compran lo que producen las empresas; en el **mercado de factores**, los hogares venden su trabajo y otros recursos a las empresas a cambio de salarios, rentas e intereses.",
            "A **market** is any place or medium where buyers and sellers trade: the street market, an online store or a job board. The **circular flow** sums up the relationship: in the **goods and services market**, households buy what firms produce; in the **factor market**, households sell their labor and other resources to firms in exchange for wages, rent and interest.",
          ),
          t(
            "Mini ejemplo: Luis trabaja de cajero en un súper (mercado de factores) y con su sueldo compra tortillas y paga su corte de pelo (mercado de bienes y servicios). El dinero da la vuelta completa.",
            "Mini example: Luis works as a cashier at a supermarket (factor market) and with his wage buys tortillas and pays for a haircut (goods and services market). The money goes full circle.",
          ),
        ],
      },
      {
        heading: t("Pensar en el margen", "Thinking at the margin"),
        body: [
          t(
            "Casi nunca decidimos \"todo o nada\": decidimos **un poco más o un poco menos**. ¿Abro una hora más? ¿Contrato a un empleado más? El **beneficio marginal** es lo que ganas con esa unidad extra; el **costo marginal** es lo que te cuesta.",
            "We rarely decide \"all or nothing\": we decide **a little more or a little less**. Do I open one more hour? Do I hire one more employee? **Marginal benefit** is what you gain from that extra unit; **marginal cost** is what it costs you.",
          ),
          t(
            "La regla es simple: **conviene hacer una unidad más si su beneficio marginal es mayor o igual que su costo marginal**. Cuando el costo extra supera al beneficio extra, conviene parar.",
            "The rule is simple: **one more unit is worth doing if its marginal benefit is greater than or equal to its marginal cost**. When the extra cost exceeds the extra benefit, it is time to stop.",
          ),
          t(
            "Un **costo hundido** es un gasto que ya hiciste y no puedes recuperar, como el boleto no reembolsable de un concierto. Como no cambia sin importar lo que decidas, **no debe influir en la decisión**. Mini ejemplo: si el horno costó $40,000 hace dos años, eso no importa para decidir si hornear una tanda más hoy; importa el gas y la harina de esa tanda.",
            "A **sunk cost** is an expense you already made and cannot recover, like a non-refundable concert ticket. Since it does not change whatever you decide, **it should not influence the decision**. Mini example: if the oven cost $40,000 two years ago, that does not matter when deciding whether to bake one more batch today; the gas and flour for that batch do.",
          ),
        ],
        formula: "Haz una unidad más si: beneficio marginal ≥ costo marginal",
      },
      {
        heading: t("Precios, incentivos y fallas de mercado", "Prices, incentives and market failures"),
        body: [
          t(
            "Un **incentivo** es algo que te motiva a actuar de cierta forma: un descuento, una multa, un bono. Los **precios** son incentivos poderosos y además funcionan como **señales**: si sube mucho el precio del aguacate, los compradores entienden que escasea y compran menos, y los productores ven una oportunidad para sembrar más.",
            "An **incentive** is something that motivates you to act in a certain way: a discount, a fine, a bonus. **Prices** are powerful incentives and also work as **signals**: if the price of avocados rises a lot, buyers understand it is scarce and buy less, and producers see an opportunity to plant more.",
          ),
          t(
            "Los mercados suelen asignar bien los recursos, pero a veces **fallan**. Una **externalidad** ocurre cuando una actividad afecta a terceros que no participan en el trato: una fábrica que contamina un río (externalidad negativa) o un vecino que arregla su fachada y mejora la calle (positiva). También hay fallas cuando una parte sabe mucho más que la otra (**información asimétrica**), como quien vende un auto usado ocultando fallas.",
            "Markets usually allocate resources well, but sometimes they **fail**. An **externality** happens when an activity affects third parties who are not part of the deal: a factory polluting a river (negative externality) or a neighbor fixing up a facade and improving the street (positive). There are also failures when one party knows much more than the other (**asymmetric information**), like someone selling a used car while hiding defects.",
          ),
          t(
            "Mini ejemplo de incentivo: si una cadena cobra cada bolsa de plástico, mucha gente empieza a llevar su propia bolsa. Nadie lo prohibió; el precio cambió la conducta.",
            "Mini example of an incentive: if a store chain charges for each plastic bag, many people start bringing their own bag. Nobody banned it; the price changed behavior.",
          ),
        ],
        bullets: [
          t("Los precios informan qué escasea y qué abunda.", "Prices signal what is scarce and what is plentiful."),
          t("Los incentivos cambian la conducta de hogares y empresas.", "Incentives change the behavior of households and firms."),
          t("Externalidad: efecto sobre terceros que no se refleja en el precio.", "Externality: an effect on third parties not reflected in the price."),
          t("Información asimétrica: una parte sabe más que la otra.", "Asymmetric information: one party knows more than the other."),
        ],
      },
    ],
    examples: [
      {
        title: t("¿Abrir una hora más la panadería?", "Should the bakery open one more hour?"),
        problem: t(
          "Una panadería evalúa abrir una hora más en la noche. En esa hora vendería 40 conchas a $9 cada una. El ayudante cobraría $120 por la hora extra y la luz y el gas extra costarían $80. El local paga $8,000 de renta al mes de todos modos. ¿Le conviene?",
          "A bakery is evaluating opening one more hour at night. In that hour it would sell 40 sweet buns at $9 each. The helper would charge $120 for the extra hour and extra electricity and gas would cost $80. The shop pays $8,000 rent a month anyway. Is it worth it?",
        ),
        steps: [
          t("Beneficio marginal: 40 × 9 = $360.", "Marginal benefit: 40 × 9 = $360."),
          t("Costo marginal: 120 + 80 = $200.", "Marginal cost: 120 + 80 = $200."),
          t("La renta no cambia por abrir una hora más: no entra en la decisión.", "Rent does not change by opening one more hour: it does not enter the decision."),
          t("Ganancia marginal: 360 − 200 = $160 > 0.", "Marginal gain: 360 − 200 = $160 > 0."),
        ],
        result: t(
          "Sí conviene: la hora extra deja $160. La renta es un costo que no depende de esta decisión.",
          "Yes, it is worth it: the extra hour leaves $160. Rent is a cost that does not depend on this decision.",
        ),
      },
      {
        title: t("Un costo hundido en la vida diaria", "A sunk cost in daily life"),
        problem: t(
          "Pagaste $1,200 por un año de gimnasio que no se reembolsa. Te cambiaste de casa y ahora el gimnasio te queda a 50 minutos. Otro gimnasio junto a tu nueva casa cobra $150 al mes. ¿Cómo decidir?",
          "You paid $1,200 for a non-refundable one-year gym membership. You moved, and now that gym is 50 minutes away. Another gym next to your new home charges $150 a month. How should you decide?",
        ),
        steps: [
          t("Los $1,200 ya se pagaron y no regresan, vayas o no: son costo hundido.", "The $1,200 is already paid and will not come back whether you go or not: it is a sunk cost."),
          t("Compara solo lo que cambia: $150 al mes contra casi 2 horas de traslado por visita.", "Compare only what changes: $150 a month against almost 2 hours of travel per visit."),
          t("Si valoras tu tiempo y vas a ir más seguido cerca de casa, pagar el nuevo puede ser mejor.", "If you value your time and will go more often near home, paying for the new one may be better."),
        ],
        result: t(
          "La decisión correcta se basa en costos y beneficios futuros. Pensar \"ya pagué, tengo que ir\" es caer en la falacia del costo hundido.",
          "The right decision is based on future costs and benefits. Thinking \"I already paid, I have to go\" is falling for the sunk cost fallacy.",
        ),
      },
    ],
    keyPoints: [
      t("La microeconomía estudia decisiones de hogares y empresas en mercados concretos.", "Microeconomics studies decisions of households and firms in specific markets."),
      t("Flujo circular: bienes y servicios por un lado, factores de producción por el otro.", "Circular flow: goods and services on one side, factors of production on the other."),
      t("Haz una unidad más si el beneficio marginal es mayor o igual al costo marginal.", "Do one more unit if marginal benefit is greater than or equal to marginal cost."),
      t("Los costos hundidos no deben influir en las decisiones.", "Sunk costs should not influence decisions."),
      t("Precios e incentivos guían conductas; externalidades e información asimétrica son fallas de mercado.", "Prices and incentives guide behavior; externalities and asymmetric information are market failures."),
    ],
    exerciseIds: ['ECO-03-E1', 'ECO-03-E2', 'ECO-03-E3', 'ECO-03-E4', 'ECO-03-E5', 'ECO-03-E6'],
  },

  // ───────────────────────────── ECO-04 ─────────────────────────────
  {
    id: 'ECO-04',
    level: 1,
    topicIds: ['ECO.4'],
    title: t("Macroeconomía", "Macroeconomics"),
    summary: t(
      "La macroeconomía estudia la economía de un país en conjunto: su producción total, el nivel general de precios, el empleo y los ciclos de auge y recesión, y cómo los gobiernos y bancos centrales buscan estabilizarlos.",
      "Macroeconomics studies a country's economy as a whole: its total output, the general price level, employment and boom-and-recession cycles, and how governments and central banks try to stabilize them.",
    ),
    minutes: 14,
    objectives: [
      t("Distinguir preguntas macroeconómicas de microeconómicas y reconocer la falacia de composición.", "Distinguish macroeconomic from microeconomic questions and recognize the fallacy of composition."),
      t("Nombrar los grandes objetivos macroeconómicos y los indicadores que los miden.", "Name the main macroeconomic goals and the indicators that measure them."),
      t("Describir las fases del ciclo económico y calcular una tasa de crecimiento.", "Describe the phases of the business cycle and compute a growth rate."),
      t("Distinguir de forma general la política monetaria de la fiscal.", "Distinguish monetary from fiscal policy in general terms."),
    ],
    theory: [
      {
        heading: t("La economía vista desde el avión", "The economy seen from a plane"),
        body: [
          t(
            "Si la microeconomía mira cada tienda, la **macroeconomía** mira el país desde un avión. Estudia **agregados**: la producción total de bienes y servicios, el nivel general de precios, el empleo de toda la población, las tasas de interés y el comercio con el exterior.",
            "If microeconomics looks at each store, **macroeconomics** looks at the country from a plane. It studies **aggregates**: total output of goods and services, the general price level, employment of the whole population, interest rates and trade with other countries.",
          ),
          t(
            "Ojo con la **falacia de composición**: creer que lo que es cierto para una persona también lo es para todos. Si **tú** ahorras más, te va mejor; pero si **todo el país** recorta su gasto al mismo tiempo, las ventas de los negocios caen, hay despidos y al final los ingresos de todos pueden bajar. A eso se le llama la **paradoja del ahorro**.",
            "Watch out for the **fallacy of composition**: believing that what is true for one person is also true for everyone. If **you** save more, you are better off; but if **the whole country** cuts spending at the same time, business sales fall, there are layoffs and in the end everyone's income can drop. That is called the **paradox of thrift**.",
          ),
          t(
            "Mini ejemplo: \"¿Por qué subió el precio del jitomate en mi mercado?\" es micro. \"¿Por qué subieron en promedio los precios de casi todo en México este año?\" es macro.",
            "Mini example: \"Why did the price of tomatoes rise at my market?\" is micro. \"Why did the prices of almost everything in Mexico rise on average this year?\" is macro.",
          ),
        ],
      },
      {
        heading: t("Objetivos e indicadores", "Goals and indicators"),
        body: [
          t(
            "La mayoría de los países persiguen cuatro grandes objetivos macroeconómicos. Para saber si se cumplen, se miden con **indicadores**: números que se publican con regularidad y que verás a detalle en temas posteriores.",
            "Most countries pursue four major macroeconomic goals. To know whether they are being met, they are measured with **indicators**: numbers published regularly that you will see in detail in later topics.",
          ),
          t(
            "En México, el **INEGI** (Instituto Nacional de Estadística y Geografía) publica, entre otros, el **Producto Interno Bruto (PIB)**, que mide la producción total; el **Índice Nacional de Precios al Consumidor (INPC)**, que sigue los precios; y las encuestas de empleo. El **Banco de México** publica datos de tasas de interés, dinero y balanza de pagos.",
            "In Mexico, **INEGI** (National Institute of Statistics and Geography) publishes, among others, **Gross Domestic Product (GDP)**, which measures total output; the **National Consumer Price Index (INPC)**, which tracks prices; and employment surveys. **Banco de México** publishes data on interest rates, money and the balance of payments.",
          ),
          t(
            "Mini ejemplo: si la producción total de un país hipotético pasa de 1,000 a 1,030 unidades de valor, creció (1,030 − 1,000) ÷ 1,000 = **3 %**.",
            "Mini example: if total output of a hypothetical country goes from 1,000 to 1,030 units of value, it grew (1,030 − 1,000) ÷ 1,000 = **3%**.",
          ),
        ],
        bullets: [
          t("Crecimiento: que la producción aumente de forma sostenida (se mide con el PIB).", "Growth: output rising steadily (measured with GDP)."),
          t("Estabilidad de precios: inflación baja y predecible (se mide con índices de precios).", "Price stability: low and predictable inflation (measured with price indices)."),
          t("Empleo: que quien quiere trabajar encuentre trabajo (se mide con la tasa de desempleo).", "Employment: whoever wants to work finds a job (measured with the unemployment rate)."),
          t("Equilibrio externo: cuentas sanas con el resto del mundo (balanza de pagos).", "External balance: healthy accounts with the rest of the world (balance of payments)."),
        ],
        formula: "Tasa de crecimiento (%) = (valor nuevo − valor anterior) ÷ valor anterior × 100",
      },
      {
        heading: t("El ciclo económico y quién lo estabiliza", "The business cycle and who stabilizes it"),
        body: [
          t(
            "La economía no crece en línea recta: alterna periodos buenos y malos, el **ciclo económico**. En la **expansión** suben la producción, las ventas y el empleo; llega un **pico**; luego viene la **contracción** o **recesión**, con caída de la producción y más desempleo; toca un **valle** y se inicia la recuperación. Una regla práctica muy citada llama recesión a **dos trimestres seguidos** de caída de la producción, aunque los especialistas miran más indicadores.",
            "The economy does not grow in a straight line: it alternates good and bad periods, the **business cycle**. In the **expansion**, output, sales and employment rise; a **peak** arrives; then comes the **contraction** or **recession**, with falling output and more unemployment; it hits a **trough** and recovery begins. A widely cited rule of thumb calls a recession **two consecutive quarters** of falling output, although specialists look at more indicators.",
          ),
          t(
            "Para suavizar el ciclo hay dos grandes herramientas. La **política monetaria** la conduce el **Banco de México**, que es autónomo: influye en las **tasas de interés** para cuidar el poder de compra del peso. La **política fiscal** la decide el gobierno (la **Secretaría de Hacienda** propone y el Congreso aprueba): son los **impuestos** y el **gasto público**.",
            "There are two major tools to smooth the cycle. **Monetary policy** is conducted by **Banco de México**, which is autonomous: it influences **interest rates** to protect the peso's purchasing power. **Fiscal policy** is decided by the government (the **Ministry of Finance** proposes and Congress approves): it is **taxes** and **public spending**.",
          ),
          t(
            "Mini ejemplo: en una recesión, el gobierno podría acelerar obras públicas (fiscal) y el banco central podría bajar su tasa de interés objetivo para abaratar el crédito (monetaria). Cada una se estudia a fondo más adelante.",
            "Mini example: in a recession, the government could speed up public works (fiscal) and the central bank could lower its target interest rate to make credit cheaper (monetary). Each one is studied in depth later.",
          ),
        ],
      },
    ],
    examples: [
      {
        title: t("¿Hubo recesión según la regla práctica?", "Was there a recession by the rule of thumb?"),
        problem: t(
          "La producción trimestral de un país hipotético fue: T1 = 2,000; T2 = 2,050; T3 = 2,009; T4 = 1,989. Calcula el crecimiento de cada trimestre y di si se cumple la regla de dos trimestres seguidos de caída.",
          "Quarterly output of a hypothetical country was: Q1 = 2,000; Q2 = 2,050; Q3 = 2,009; Q4 = 1,989. Compute each quarter's growth and say whether the two-consecutive-quarters-of-decline rule is met.",
        ),
        steps: [
          t("T2: (2,050 − 2,000) ÷ 2,000 = 2.5 %.", "Q2: (2,050 − 2,000) ÷ 2,000 = 2.5%."),
          t("T3: (2,009 − 2,050) ÷ 2,050 = −2.0 %.", "Q3: (2,009 − 2,050) ÷ 2,050 = −2.0%."),
          t("T4: (1,989 − 2,009) ÷ 2,009 ≈ −1.0 %.", "Q4: (1,989 − 2,009) ÷ 2,009 ≈ −1.0%."),
          t("T3 y T4 son dos caídas seguidas.", "Q3 and Q4 are two consecutive declines."),
        ],
        result: t(
          "Sí se cumple la regla práctica: tras un pico en T2, la economía entró en contracción.",
          "Yes, the rule of thumb is met: after a peak in Q2, the economy entered a contraction.",
        ),
      },
      {
        title: t("La paradoja del ahorro en un pueblo", "The paradox of thrift in a town"),
        problem: t(
          "En un pueblo hipotético, todas las familias deciden al mismo tiempo gastar $500 menos al mes en comida fuera de casa para ahorrar. ¿Qué puede pasar con el pueblo en conjunto?",
          "In a hypothetical town, all families decide at the same time to spend $500 less a month on eating out in order to save. What can happen to the town as a whole?",
        ),
        steps: [
          t("Para cada familia, ahorrar $500 parece buena idea (decisión micro).", "For each family, saving $500 seems like a good idea (micro decision)."),
          t("Pero las fondas y taquerías del pueblo venden mucho menos.", "But the town's diners and taco stands sell much less."),
          t("Los negocios recortan horas o despiden personal; esas familias ganan menos.", "Businesses cut hours or lay off staff; those families earn less."),
          t("Con menos ingresos, el ahorro total del pueblo puede no subir como se esperaba.", "With lower incomes, the town's total saving may not rise as expected."),
        ],
        result: t(
          "Lo que conviene a uno no siempre conviene a todos a la vez: por eso la macro estudia la economía en conjunto.",
          "What is good for one is not always good for everyone at once: that is why macro studies the economy as a whole.",
        ),
      },
    ],
    keyPoints: [
      t("La macroeconomía estudia agregados: producción, precios, empleo, tasas y sector externo.", "Macroeconomics studies aggregates: output, prices, employment, rates and the external sector."),
      t("Falacia de composición: lo que vale para uno no siempre vale para todos.", "Fallacy of composition: what holds for one does not always hold for all."),
      t("Objetivos: crecimiento, estabilidad de precios, empleo y equilibrio externo.", "Goals: growth, price stability, employment and external balance."),
      t("Ciclo: expansión, pico, contracción (recesión) y valle.", "Cycle: expansion, peak, contraction (recession) and trough."),
      t("Política monetaria: Banco de México y tasas de interés; política fiscal: impuestos y gasto público.", "Monetary policy: Banco de México and interest rates; fiscal policy: taxes and public spending."),
    ],
    normativeNote: NOTE_MACRO,
    exerciseIds: ['ECO-04-E1', 'ECO-04-E2', 'ECO-04-E3', 'ECO-04-E4', 'ECO-04-E5', 'ECO-04-E6'],
  },

  // ───────────────────────────── ECO-05 ─────────────────────────────
  {
    id: 'ECO-05',
    level: 1,
    topicIds: ['ECO.5'],
    title: t("Oferta, demanda y elasticidad", "Supply, demand and elasticity"),
    summary: t(
      "El precio de mercado surge donde la cantidad que los compradores quieren comprar iguala la que los vendedores quieren vender, y la elasticidad mide cuánto reacciona la cantidad cuando cambia el precio.",
      "The market price arises where the quantity buyers want to buy equals what sellers want to sell, and elasticity measures how much quantity reacts when the price changes.",
    ),
    minutes: 16,
    objectives: [
      t("Explicar la ley de la demanda y distinguir un movimiento sobre la curva de un desplazamiento.", "Explain the law of demand and distinguish a movement along the curve from a shift."),
      t("Explicar la ley de la oferta y encontrar el precio y la cantidad de equilibrio.", "Explain the law of supply and find the equilibrium price and quantity."),
      t("Calcular e interpretar la elasticidad precio de la demanda y su efecto en el ingreso total.", "Compute and interpret the price elasticity of demand and its effect on total revenue."),
    ],
    theory: [
      {
        heading: t("La demanda", "Demand"),
        body: [
          t(
            "La **demanda** muestra cuánto de un bien quieren y pueden comprar las personas a cada precio. La **ley de la demanda** dice que, si todo lo demás se mantiene igual, **cuando el precio sube, la cantidad demandada baja**. Si los tacos suben de $15 a $25, comes menos tacos o te cambias a otra cosa.",
            "**Demand** shows how much of a good people want and are able to buy at each price. The **law of demand** says that, all else equal, **when the price rises, quantity demanded falls**. If tacos go from $15 to $25, you eat fewer tacos or switch to something else.",
          ),
          t(
            "Distingue dos cosas. Si cambia el **precio del propio bien**, hay un **movimiento a lo largo de la curva** (cambia la cantidad demandada). Si cambia **otra cosa**, la curva completa se **desplaza**: a la derecha si la gente quiere más a cualquier precio, a la izquierda si quiere menos.",
            "Tell two things apart. If the **good's own price** changes, there is a **movement along the curve** (quantity demanded changes). If **something else** changes, the whole curve **shifts**: to the right if people want more at any price, to the left if they want less.",
          ),
          t(
            "Mini ejemplo: si sube el precio del té, algunas personas se pasan al café; la demanda de café se desplaza a la derecha aunque el café no haya cambiado de precio.",
            "Mini example: if the price of tea rises, some people switch to coffee; demand for coffee shifts right even though coffee's price has not changed.",
          ),
        ],
        bullets: [
          t("Ingreso: con más ingreso se compra más de un bien normal.", "Income: with more income people buy more of a normal good."),
          t("Precio de sustitutos (té y café) y de complementos (impresora y tinta).", "Price of substitutes (tea and coffee) and of complements (printer and ink)."),
          t("Gustos y modas.", "Tastes and trends."),
          t("Expectativas: si esperas que algo suba, lo compras hoy.", "Expectations: if you expect something to go up, you buy it today."),
          t("Número de compradores en el mercado.", "Number of buyers in the market."),
        ],
      },
      {
        heading: t("La oferta y el equilibrio", "Supply and equilibrium"),
        body: [
          t(
            "La **oferta** muestra cuánto quieren vender los productores a cada precio. La **ley de la oferta** dice que, con lo demás igual, **a mayor precio, mayor cantidad ofrecida**, porque producir se vuelve más atractivo. La oferta se desplaza por cambios en costos de insumos, tecnología, clima o número de vendedores.",
            "**Supply** shows how much producers want to sell at each price. The **law of supply** says that, all else equal, **the higher the price, the greater the quantity supplied**, because producing becomes more attractive. Supply shifts with changes in input costs, technology, weather or the number of sellers.",
          ),
          t(
            "El **equilibrio** es el precio en el que la cantidad demandada es igual a la ofrecida. Si el precio está **por debajo**, la gente quiere más de lo que hay: **escasez** (filas, productos agotados) y el precio tiende a subir. Si está **por encima**, sobra producto: **excedente** (remates, mercancía acumulada) y el precio tiende a bajar.",
            "**Equilibrium** is the price at which quantity demanded equals quantity supplied. If the price is **below** it, people want more than there is: **shortage** (lines, sold-out products) and the price tends to rise. If it is **above**, product is left over: **surplus** (clearance sales, piled-up stock) and the price tends to fall.",
          ),
          t(
            "Mini ejemplo con ecuaciones sencillas: demanda Qd = 100 − 2P y oferta Qs = 20 + 2P. Igualamos: 100 − 2P = 20 + 2P, así que 80 = 4P y **P = $20**; la cantidad es 100 − 40 = **60 unidades**.",
            "Mini example with simple equations: demand Qd = 100 − 2P and supply Qs = 20 + 2P. Set them equal: 100 − 2P = 20 + 2P, so 80 = 4P and **P = $20**; quantity is 100 − 40 = **60 units**.",
          ),
        ],
        formula: "Equilibrio: cantidad demandada (Qd) = cantidad ofrecida (Qs)",
      },
      {
        heading: t("Elasticidad precio de la demanda", "Price elasticity of demand"),
        body: [
          t(
            "La **elasticidad precio de la demanda** mide **qué tanto** reacciona la cantidad demandada cuando cambia el precio. Se calcula dividiendo el cambio porcentual de la cantidad entre el cambio porcentual del precio. Como casi siempre sale negativa (precio y cantidad se mueven al revés), se suele leer su **valor absoluto**. En este tema usamos el valor inicial como base del porcentaje; existe también el método del punto medio, que da resultados un poco distintos.",
            "**Price elasticity of demand** measures **how much** quantity demanded reacts when the price changes. It is computed by dividing the percentage change in quantity by the percentage change in price. Since it is almost always negative (price and quantity move in opposite directions), we usually read its **absolute value**. In this topic we use the initial value as the base for percentages; there is also the midpoint method, which gives slightly different results.",
          ),
          t(
            "Si el valor absoluto es **mayor que 1**, la demanda es **elástica**: la gente reacciona mucho (hay muchos sustitutos, como una marca de papas entre muchas). Si es **menor que 1**, es **inelástica**: la gente casi no reacciona (bienes necesarios y sin sustitutos, como la insulina o la sal).",
            "If the absolute value is **greater than 1**, demand is **elastic**: people react a lot (there are many substitutes, like one brand of chips among many). If it is **less than 1**, it is **inelastic**: people barely react (necessary goods with no substitutes, such as insulin or salt).",
          ),
          t(
            "Esto importa para el **ingreso total** del vendedor (precio × cantidad). Con demanda **inelástica**, subir el precio **aumenta** el ingreso total; con demanda **elástica**, subir el precio lo **reduce**. Mini ejemplo: si el precio sube 10 % y la cantidad baja 25 %, la elasticidad es 25 ÷ 10 = **2.5**: elástica, subir el precio le resta ingresos.",
            "This matters for the seller's **total revenue** (price × quantity). With **inelastic** demand, raising the price **increases** total revenue; with **elastic** demand, raising the price **reduces** it. Mini example: if the price rises 10% and quantity falls 25%, elasticity is 25 ÷ 10 = **2.5**: elastic, so raising the price cuts revenue.",
          ),
        ],
        formula: "Elasticidad = % cambio en cantidad demandada ÷ % cambio en precio",
      },
    ],
    examples: [
      {
        title: t("Equilibrio y escasez en el mercado de garrafones", "Equilibrium and shortage in the water-jug market"),
        problem: t(
          "En una colonia, la demanda semanal de garrafones es Qd = 300 − 5P y la oferta es Qs = 60 + 3P (P en pesos). Encuentra el equilibrio. Si una regla fijara el precio en $25, ¿habría escasez o excedente y de cuánto?",
          "In a neighborhood, weekly demand for water jugs is Qd = 300 − 5P and supply is Qs = 60 + 3P (P in pesos). Find the equilibrium. If a rule set the price at $25, would there be a shortage or a surplus, and how large?",
        ),
        steps: [
          t("Igualamos: 300 − 5P = 60 + 3P → 240 = 8P → P = $30.", "Set equal: 300 − 5P = 60 + 3P → 240 = 8P → P = $30."),
          t("Cantidad de equilibrio: 300 − 5 × 30 = 150 garrafones.", "Equilibrium quantity: 300 − 5 × 30 = 150 jugs."),
          t("A $25: Qd = 300 − 125 = 175; Qs = 60 + 75 = 135.", "At $25: Qd = 300 − 125 = 175; Qs = 60 + 75 = 135."),
          t("Como Qd > Qs, hay escasez de 175 − 135 = 40 garrafones.", "Since Qd > Qs, there is a shortage of 175 − 135 = 40 jugs."),
        ],
        result: t(
          "El equilibrio es $30 y 150 garrafones. Un precio de $25 provoca una escasez de 40 garrafones por semana.",
          "Equilibrium is $30 and 150 jugs. A $25 price causes a shortage of 40 jugs per week.",
        ),
      },
      {
        title: t("¿Conviene subir el precio de las paletas?", "Should the ice-pop shop raise its price?"),
        problem: t(
          "Una paletería vende 200 paletas al día a $20. Si sube el precio a $22, cree que venderá 190. Calcula la elasticidad y di si su ingreso total sube o baja.",
          "An ice-pop shop sells 200 pops a day at $20. If it raises the price to $22, it believes it will sell 190. Compute the elasticity and say whether its total revenue rises or falls.",
        ),
        steps: [
          t("Cambio del precio: (22 − 20) ÷ 20 = 10 %.", "Price change: (22 − 20) ÷ 20 = 10%."),
          t("Cambio de la cantidad: (190 − 200) ÷ 200 = −5 %.", "Quantity change: (190 − 200) ÷ 200 = −5%."),
          t("Elasticidad (valor absoluto): 5 ÷ 10 = 0.5 < 1, demanda inelástica.", "Elasticity (absolute value): 5 ÷ 10 = 0.5 < 1, inelastic demand."),
          t("Ingreso antes: 200 × 20 = $4,000. Después: 190 × 22 = $4,180.", "Revenue before: 200 × 20 = $4,000. After: 190 × 22 = $4,180."),
        ],
        result: t(
          "Con demanda inelástica (0.5), subir el precio aumenta el ingreso diario en $180.",
          "With inelastic demand (0.5), raising the price increases daily revenue by $180.",
        ),
      },
    ],
    keyPoints: [
      t("Ley de la demanda: sube el precio, baja la cantidad demandada.", "Law of demand: price up, quantity demanded down."),
      t("Cambio del propio precio = movimiento sobre la curva; otros factores = desplazamiento.", "Change in own price = movement along the curve; other factors = shift."),
      t("Ley de la oferta: a mayor precio, mayor cantidad ofrecida.", "Law of supply: the higher the price, the larger the quantity supplied."),
      t("Equilibrio: Qd = Qs; debajo del equilibrio hay escasez, arriba hay excedente.", "Equilibrium: Qd = Qs; below it there is a shortage, above it a surplus."),
      t("Elasticidad > 1 elástica; < 1 inelástica. Con demanda inelástica, subir precio sube el ingreso.", "Elasticity > 1 elastic; < 1 inelastic. With inelastic demand, raising price raises revenue."),
    ],
    exerciseIds: ['ECO-05-E1', 'ECO-05-E2', 'ECO-05-E3', 'ECO-05-E4', 'ECO-05-E5', 'ECO-05-E6'],
  },

  // ───────────────────────────── ECO-06 ─────────────────────────────
  {
    id: 'ECO-06',
    level: 1,
    topicIds: ['ECO.6'],
    title: t("Teoría del consumidor y del productor", "Consumer and producer theory"),
    summary: t(
      "El consumidor reparte su presupuesto buscando la mayor satisfacción por cada peso, y el productor combina insumos y costos para producir hasta donde el ingreso extra cubre el costo extra.",
      "The consumer splits a budget seeking the greatest satisfaction per peso, and the producer combines inputs and costs to produce up to the point where extra revenue covers extra cost.",
    ),
    minutes: 17,
    objectives: [
      t("Explicar la utilidad total y marginal y la ley de utilidad marginal decreciente.", "Explain total and marginal utility and the law of diminishing marginal utility."),
      t("Usar la restricción presupuestaria y la regla de utilidad marginal por peso para elegir.", "Use the budget constraint and the marginal-utility-per-peso rule to choose."),
      t("Distinguir costos fijos, variables, totales, promedio y marginales.", "Distinguish fixed, variable, total, average and marginal costs."),
      t("Explicar el producto marginal decreciente y la regla de producción de la empresa.", "Explain diminishing marginal product and the firm's production rule."),
    ],
    theory: [
      {
        heading: t("Utilidad: cuánto te satisface algo", "Utility: how much something satisfies you"),
        body: [
          t(
            "Los economistas llaman **utilidad** a la satisfacción que te da consumir algo. La **utilidad total** es la satisfacción de todo lo que consumes; la **utilidad marginal** es la satisfacción **extra** que te da **una unidad más**.",
            "Economists call **utility** the satisfaction you get from consuming something. **Total utility** is the satisfaction from everything you consume; **marginal utility** is the **extra** satisfaction from **one more unit**.",
          ),
          t(
            "La **ley de la utilidad marginal decreciente** dice que cada unidad adicional te satisface menos que la anterior. El primer taco con hambre sabe a gloria; el quinto ya no tanto. Ojo: la utilidad **total** puede seguir subiendo, solo que cada vez sube **menos**.",
            "The **law of diminishing marginal utility** says each additional unit satisfies you less than the previous one. The first taco when you are hungry tastes wonderful; the fifth, not so much. Note: **total** utility can keep rising, it just rises **less** each time.",
          ),
          t(
            "Mini ejemplo con puntos de satisfacción hipotéticos: 1 taco = 10, 2 tacos = 18, 3 tacos = 24, 4 tacos = 28. La utilidad marginal es 10, 8, 6 y 4: siempre positiva, pero decreciente.",
            "Mini example with hypothetical satisfaction points: 1 taco = 10, 2 tacos = 18, 3 tacos = 24, 4 tacos = 28. Marginal utility is 10, 8, 6 and 4: always positive, but decreasing.",
          ),
        ],
        formula: "Utilidad marginal = cambio en utilidad total ÷ cambio en cantidad",
      },
      {
        heading: t("Presupuesto y la mejor elección", "Budget and the best choice"),
        body: [
          t(
            "Tu **restricción presupuestaria** son todas las combinaciones que puedes pagar con tu ingreso. Si tienes $600 para el fin de semana, el cine cuesta $120 y una pizza $80, cada combinación de boletos y pizzas debe cumplir 120 × boletos + 80 × pizzas ≤ 600. El precio relativo también es un costo de oportunidad: un boleto equivale a 120 ÷ 80 = 1.5 pizzas.",
            "Your **budget constraint** is all the combinations you can afford with your income. If you have $600 for the weekend, the movies cost $120 and a pizza $80, each combination of tickets and pizzas must satisfy 120 × tickets + 80 × pizzas ≤ 600. The relative price is also an opportunity cost: one ticket equals 120 ÷ 80 = 1.5 pizzas.",
          ),
          t(
            "¿Cómo repartir el presupuesto? Compara la **utilidad marginal por peso**: divide la utilidad marginal de cada bien entre su precio. Si el último peso gastado en un bien te da más satisfacción que en otro, mueve dinero hacia el primero. Llegas a la **mejor combinación** cuando la utilidad marginal por peso es igual en todos los bienes y ya gastaste tu presupuesto.",
            "How should you split the budget? Compare **marginal utility per peso**: divide each good's marginal utility by its price. If the last peso spent on one good gives you more satisfaction than on another, move money toward the first. You reach the **best combination** when marginal utility per peso is equal across goods and you have spent your budget.",
          ),
          t(
            "Mini ejemplo: un refresco de $20 te da 40 puntos extra (2 por peso) y un helado de $30 te da 45 (1.5 por peso). Por cada peso, el refresco rinde más: conviene pasar dinero del helado al refresco hasta que se igualen.",
            "Mini example: a $20 soda gives you 40 extra points (2 per peso) and a $30 ice cream gives you 45 (1.5 per peso). Per peso, the soda yields more: it pays to move money from ice cream to soda until they equalize.",
          ),
        ],
        formula: "Mejor elección: UMg de A ÷ precio de A = UMg de B ÷ precio de B",
      },
      {
        heading: t("El productor: producción y costos", "The producer: production and costs"),
        body: [
          t(
            "Una empresa transforma **insumos** (trabajo, máquinas, materiales) en productos. El **producto marginal** es la producción extra que aporta un trabajador o insumo más. En el corto plazo, con el mismo local y las mismas máquinas, aparece el **producto marginal decreciente**: el tercer cocinero en una cocina pequeña ayuda, pero menos que el segundo, porque se estorban.",
            "A firm transforms **inputs** (labor, machines, materials) into products. **Marginal product** is the extra output from one more worker or input. In the short run, with the same premises and machines, **diminishing marginal product** appears: the third cook in a small kitchen helps, but less than the second, because they get in each other's way.",
          ),
          t(
            "Los **costos fijos** no cambian con lo que produces (renta, seguro, sueldo del vigilante). Los **costos variables** suben con la producción (harina, empaques, gas del horno). El **costo total** es la suma. El **costo promedio** es el costo total entre las unidades, y el **costo marginal** es lo que cuesta producir una unidad más.",
            "**Fixed costs** do not change with how much you produce (rent, insurance, the security guard's wage). **Variable costs** rise with output (flour, packaging, oven gas). **Total cost** is their sum. **Average cost** is total cost divided by units, and **marginal cost** is what it costs to produce one more unit.",
          ),
          t(
            "La empresa busca la mayor **ganancia** (ingreso total − costo total). Su regla es la misma de pensar en el margen: **producir mientras el ingreso marginal sea mayor o igual al costo marginal**. Mini ejemplo: si cada pastel se vende en $250 y el siguiente cuesta $180 hacerlo, conviene hornearlo; si el siguiente costara $270, ya no.",
            "The firm seeks the highest **profit** (total revenue − total cost). Its rule is the same as thinking at the margin: **produce as long as marginal revenue is greater than or equal to marginal cost**. Mini example: if each cake sells for $250 and the next one costs $180 to make, it should be baked; if the next one cost $270, it should not.",
          ),
        ],
        formula: "Costo total = costo fijo + costo variable · Costo promedio = costo total ÷ unidades",
      },
    ],
    examples: [
      {
        title: t("Repartir $100 entre tacos y aguas", "Splitting $100 between tacos and drinks"),
        problem: t(
          "Rodrigo tiene $100. Un taco cuesta $20 y un agua fresca $20. Las utilidades marginales (puntos hipotéticos) son: tacos 60, 50, 40, 30; aguas 40, 20, 10. ¿Qué combinación le da más satisfacción?",
          "Rodrigo has $100. A taco costs $20 and an agua fresca costs $20. Marginal utilities (hypothetical points) are: tacos 60, 50, 40, 30; drinks 40, 20, 10. Which combination gives him the most satisfaction?",
        ),
        steps: [
          t("Con $100 y precios de $20 puede comprar 5 unidades en total.", "With $100 and $20 prices he can buy 5 units in total."),
          t("Como los precios son iguales, elige cada vez la unidad con mayor utilidad marginal: taco (60), taco (50), taco o agua (40), el otro de 40, taco (30).", "Since prices are equal, he picks the unit with the highest marginal utility each time: taco (60), taco (50), taco or drink (40), the other 40, taco (30)."),
          t("Resultado: 4 tacos y 1 agua; la siguiente agua solo daría 20 < 30.", "Result: 4 tacos and 1 drink; the next drink would give only 20 < 30."),
          t("Utilidad total: 60 + 50 + 40 + 30 + 40 = 220 puntos.", "Total utility: 60 + 50 + 40 + 30 + 40 = 220 points."),
        ],
        result: t(
          "La mejor combinación es 4 tacos y 1 agua (220 puntos). Ninguna otra combinación de 5 unidades da más satisfacción.",
          "The best combination is 4 tacos and 1 drink (220 points). No other 5-unit combination gives more satisfaction.",
        ),
      },
      {
        title: t("Costos de una fábrica de piñatas", "Costs of a piñata workshop"),
        problem: t(
          "Un taller de piñatas paga $6,000 al mes de renta y luz base. Cada piñata usa $40 de materiales y mano de obra a destajo. Produce 300 piñatas al mes y las vende a $70. Calcula costo total, costo promedio y ganancia.",
          "A piñata workshop pays $6,000 a month in rent and base electricity. Each piñata uses $40 of materials and piece-rate labor. It produces 300 piñatas a month and sells them at $70. Compute total cost, average cost and profit.",
        ),
        steps: [
          t("Costo fijo: $6,000. Costo variable: 300 × 40 = $12,000.", "Fixed cost: $6,000. Variable cost: 300 × 40 = $12,000."),
          t("Costo total: 6,000 + 12,000 = $18,000.", "Total cost: 6,000 + 12,000 = $18,000."),
          t("Costo promedio: 18,000 ÷ 300 = $60 por piñata.", "Average cost: 18,000 ÷ 300 = $60 per piñata."),
          t("Ingreso: 300 × 70 = $21,000. Ganancia: 21,000 − 18,000 = $3,000.", "Revenue: 300 × 70 = $21,000. Profit: 21,000 − 18,000 = $3,000."),
        ],
        result: t(
          "Cada piñata cuesta en promedio $60 y se vende en $70; el taller gana $3,000 al mes. Si produjera más, el costo fijo se repartiría entre más piezas y el costo promedio bajaría.",
          "Each piñata costs $60 on average and sells for $70; the workshop earns $3,000 a month. If it produced more, the fixed cost would be spread over more pieces and the average cost would fall.",
        ),
      },
    ],
    keyPoints: [
      t("Utilidad marginal: satisfacción extra de una unidad más; tiende a disminuir.", "Marginal utility: extra satisfaction from one more unit; it tends to decrease."),
      t("La restricción presupuestaria limita lo que puedes comprar con tu ingreso y los precios.", "The budget constraint limits what you can buy given your income and prices."),
      t("Mejor elección: igualar la utilidad marginal por peso entre bienes.", "Best choice: equalize marginal utility per peso across goods."),
      t("Producto marginal decreciente: con instalaciones fijas, cada trabajador extra aporta menos.", "Diminishing marginal product: with fixed facilities, each extra worker adds less."),
      t("Costo total = fijo + variable; costo promedio = total ÷ unidades.", "Total cost = fixed + variable; average cost = total ÷ units."),
      t("La empresa produce mientras el ingreso marginal sea mayor o igual al costo marginal.", "The firm produces as long as marginal revenue is greater than or equal to marginal cost."),
    ],
    exerciseIds: ['ECO-06-E1', 'ECO-06-E2', 'ECO-06-E3', 'ECO-06-E4', 'ECO-06-E5', 'ECO-06-E6'],
  },
]

export const exercises: Exercise[] = [
  // ═════════════════════════ ECO-01 ═════════════════════════
  {
    id: 'ECO-01-E1',
    level: 1,
    module: 'ECO-01',
    kind: 'mcq',
    flavor: 'concept',
    prompt: t(
      "¿Qué describe mejor el concepto económico de escasez?",
      "What best describes the economic concept of scarcity?",
    ),
    options: [
      { id: 'ECO-01-E1-a', text: t("Que un producto se agotó temporalmente en una tienda", "That a product is temporarily sold out at a store") },
      { id: 'ECO-01-E1-b', text: t("Que los recursos son limitados frente a deseos ilimitados, por lo que hay que elegir", "That resources are limited compared with unlimited wants, so we must choose") },
      { id: 'ECO-01-E1-c', text: t("Que solo los países pobres tienen problemas económicos", "That only poor countries have economic problems") },
      { id: 'ECO-01-E1-d', text: t("Que los precios siempre suben con el tiempo", "That prices always rise over time") },
    ],
    correctOptionId: 'ECO-01-E1-b',
    explanation: t(
      "La escasez es la condición permanente de tener recursos limitados (dinero, tiempo, materiales) frente a deseos que no tienen fin; por eso toda persona, empresa o país debe elegir. Error común: confundirla con un producto agotado; eso es una escasez momentánea en un mercado, no el concepto general. Incluso los países ricos enfrentan escasez.",
      "Scarcity is the permanent condition of having limited resources (money, time, materials) versus endless wants; that is why every person, firm or country must choose. Common mistake: confusing it with a sold-out product; that is a momentary shortage in one market, not the general concept. Even rich countries face scarcity.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'economics-intro',
  },
  {
    id: 'ECO-01-E2',
    level: 1,
    module: 'ECO-01',
    kind: 'numeric',
    flavor: 'case',
    context: t(
      "Luis gana $9,000 al mes como repartidor. Piensa dejar ese trabajo 10 meses para estudiar un diplomado de tiempo completo con colegiatura de $2,000 al mes. Gasta $1,500 al mes en comida, estudie o trabaje.",
      "Luis earns $9,000 a month as a delivery driver. He is thinking of leaving that job for 10 months to take a full-time certificate program with tuition of $2,000 a month. He spends $1,500 a month on food, whether he studies or works.",
    ),
    prompt: t(
      "¿Cuál es el costo de oportunidad total de estudiar el diplomado durante esos 10 meses? Responde en pesos.",
      "What is the total opportunity cost of taking the certificate program for those 10 months? Answer in pesos.",
    ),
    answer: 110000,
    unit: 'MXN',
    decimals: 0,
    tolerance: { abs: 0.5 },
    explanation: t(
      "Se suman el costo explícito (colegiatura 2,000 × 10 = $20,000) y el sueldo al que renuncia (9,000 × 10 = $90,000): $110,000. La comida no cuenta porque la paga igual en ambos casos. Error común: responder solo $20,000 (olvidar el sueldo perdido) o sumar la comida y responder $125,000.",
      "Add the explicit cost (tuition 2,000 × 10 = $20,000) and the salary given up (9,000 × 10 = $90,000): $110,000. Food does not count because he pays it in both cases. Common mistake: answering only $20,000 (forgetting the lost salary) or adding food and answering $125,000.",
    ),
    difficulty: 2,
    points: 15,
    competency: 'economics-intro',
  },
  {
    id: 'ECO-01-E3',
    level: 1,
    module: 'ECO-01',
    kind: 'classify',
    flavor: 'concept',
    prompt: t(
      "Clasifica cada afirmación como economía positiva (lo que es) o normativa (lo que debería ser).",
      "Classify each statement as positive economics (what is) or normative economics (what should be).",
    ),
    categories: [
      { id: 'ECO-01-E3-c1', label: t("Afirmación positiva", "Positive statement") },
      { id: 'ECO-01-E3-c2', label: t("Afirmación normativa", "Normative statement") },
    ],
    items: [
      { id: 'ECO-01-E3-i1', label: t("Cuando sube el precio de la gasolina, mucha gente usa menos el auto", "When gasoline prices rise, many people drive less"), correctCategoryId: 'ECO-01-E3-c1' },
      { id: 'ECO-01-E3-i2', label: t("El gobierno debería dar transporte público gratuito", "The government should provide free public transportation"), correctCategoryId: 'ECO-01-E3-c2' },
      { id: 'ECO-01-E3-i3', label: t("En la temporada de lluvias baja el precio de algunas frutas porque hay más cosecha", "In the rainy season some fruit prices fall because there is a bigger harvest"), correctCategoryId: 'ECO-01-E3-c1' },
      { id: 'ECO-01-E3-i4', label: t("Es injusto que los artistas famosos ganen tanto", "It is unfair that famous artists earn so much"), correctCategoryId: 'ECO-01-E3-c2' },
      { id: 'ECO-01-E3-i5', label: t("Las empresas contratan menos personal cuando sus ventas caen", "Firms hire fewer staff when their sales fall"), correctCategoryId: 'ECO-01-E3-c1' },
      { id: 'ECO-01-E3-i6', label: t("Las escuelas deberían enseñar finanzas personales desde la primaria", "Schools should teach personal finance from elementary school"), correctCategoryId: 'ECO-01-E3-c2' },
    ],
    explanation: t(
      "Las positivas describen relaciones que se pueden comprobar con datos (gasolina y uso del auto, lluvias y precios, ventas y contratación). Las normativas expresan opiniones o valores: llevan palabras como \"debería\" o \"injusto\". Error común: creer que una afirmación positiva tiene que ser verdadera; puede ser falsa, pero se puede comprobar.",
      "Positive statements describe relationships that can be checked with data (gasoline and driving, rains and prices, sales and hiring). Normative ones express opinions or values: they use words like \"should\" or \"unfair\". Common mistake: believing a positive statement must be true; it can be false, but it can be tested.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'economics-intro',
  },
  {
    id: 'ECO-01-E4',
    level: 1,
    module: 'ECO-01',
    kind: 'truefalse',
    flavor: 'interpret',
    prompt: t(
      "Un país que produce una combinación de bienes ubicada dentro de su frontera de posibilidades de producción está desperdiciando parte de sus recursos.",
      "A country producing a combination of goods located inside its production possibilities frontier is wasting part of its resources.",
    ),
    answer: true,
    explanation: t(
      "Verdadero. Un punto dentro de la frontera significa que, con los mismos recursos y tecnología, podría producir más de un bien sin sacrificar el otro: hay trabajadores desempleados o máquinas paradas. Error común: pensar que un punto dentro es \"más seguro\" o eficiente; eficiente es estar sobre la frontera.",
      "True. A point inside the frontier means that, with the same resources and technology, it could produce more of one good without giving up the other: there are unemployed workers or idle machines. Common mistake: thinking a point inside is \"safer\" or efficient; efficient means being on the frontier.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'economics-intro',
  },
  {
    id: 'ECO-01-E5',
    level: 1,
    module: 'ECO-01',
    kind: 'multi',
    flavor: 'case',
    context: t(
      "Mariana abre una cocina económica. Usa un terreno que le renta su tío, contrata a un cocinero, compra una estufa industrial, paga IVA en sus compras y es ella quien organiza todo y arriesga sus ahorros.",
      "Mariana opens a small eatery. She uses a plot her uncle rents to her, hires a cook, buys an industrial stove, pays VAT on her purchases and she is the one who organizes everything and risks her savings.",
    ),
    prompt: t(
      "¿Cuáles de estos elementos del negocio de Mariana son factores de producción? Selecciona todos los que apliquen.",
      "Which of these elements of Mariana's business are factors of production? Select all that apply.",
    ),
    options: [
      { id: 'ECO-01-E5-a', text: t("El terreno donde está la cocina (tierra)", "The plot where the eatery is (land)") },
      { id: 'ECO-01-E5-b', text: t("Las horas de trabajo del cocinero (trabajo)", "The cook's working hours (labor)") },
      { id: 'ECO-01-E5-c', text: t("La estufa industrial (capital)", "The industrial stove (capital)") },
      { id: 'ECO-01-E5-d', text: t("El IVA que paga en sus compras", "The VAT she pays on her purchases") },
      { id: 'ECO-01-E5-e', text: t("Su labor de organizar el negocio y asumir el riesgo (capacidad empresarial)", "Her work organizing the business and taking the risk (entrepreneurship)") },
    ],
    correctOptionIds: ['ECO-01-E5-a', 'ECO-01-E5-b', 'ECO-01-E5-c', 'ECO-01-E5-e'],
    explanation: t(
      "Los cuatro factores son tierra (terreno), trabajo (cocinero), capital (estufa) y capacidad empresarial (Mariana organizando y arriesgando). El IVA es un impuesto: una obligación con el gobierno, no un recurso que produzca comida. Error común: olvidar la capacidad empresarial por pensar que la dueña \"no trabaja en la cocina\".",
      "The four factors are land (the plot), labor (the cook), capital (the stove) and entrepreneurship (Mariana organizing and taking risk). VAT is a tax: an obligation to the government, not a resource that produces food. Common mistake: forgetting entrepreneurship because the owner \"does not work in the kitchen\".",
    ),
    difficulty: 1,
    points: 10,
    competency: 'economics-intro',
  },
  {
    id: 'ECO-01-E6',
    level: 1,
    module: 'ECO-01',
    kind: 'fields',
    flavor: 'case',
    context: t(
      "Una carpintería, con todos sus recursos, puede hacer al mes 20 mesas o 60 sillas, con un intercambio constante entre ambos productos.",
      "A carpentry shop, using all its resources, can make 20 tables or 60 chairs a month, with a constant trade-off between both products.",
    ),
    prompt: t(
      "Usa la frontera de posibilidades de producción de la carpintería para completar los campos.",
      "Use the carpentry shop's production possibilities frontier to complete the fields.",
    ),
    fields: [
      { id: 'f1', label: t("Costo de oportunidad de 1 mesa (en sillas)", "Opportunity cost of 1 table (in chairs)"), answer: 3, unit: 'units', tolerance: { abs: 0.01 } },
      { id: 'f2', label: t("Máximo de sillas si hace 12 mesas", "Maximum chairs if it makes 12 tables"), answer: 24, unit: 'units', tolerance: { abs: 0.01 } },
      { id: 'f3', label: t("Sillas que sacrifica al pasar de 12 a 15 mesas", "Chairs given up when moving from 12 to 15 tables"), answer: 9, unit: 'units', tolerance: { abs: 0.01 } },
    ],
    explanation: t(
      "Cada mesa cuesta 60 ÷ 20 = 3 sillas. Con 12 mesas quedan recursos para 20 − 12 = 8 mesas, que equivalen a 8 × 3 = 24 sillas. Pasar a 15 mesas (3 más) sacrifica 3 × 3 = 9 sillas. Error común: invertir la razón y decir que una mesa cuesta 1/3 de silla.",
      "Each table costs 60 ÷ 20 = 3 chairs. With 12 tables, resources remain for 20 − 12 = 8 tables, equivalent to 8 × 3 = 24 chairs. Moving to 15 tables (3 more) gives up 3 × 3 = 9 chairs. Common mistake: inverting the ratio and saying a table costs 1/3 of a chair.",
    ),
    difficulty: 2,
    points: 15,
    competency: 'economics-intro',
  },

  // ═════════════════════════ ECO-02 ═════════════════════════
  {
    id: 'ECO-02-E1',
    level: 1,
    module: 'ECO-02',
    kind: 'mcq',
    flavor: 'concept',
    prompt: t(
      "¿Qué autor publicó en 1776 La riqueza de las naciones y describió la idea de la \"mano invisible\"?",
      "Which author published The Wealth of Nations in 1776 and described the idea of the \"invisible hand\"?",
    ),
    options: [
      { id: 'ECO-02-E1-a', text: t("John Maynard Keynes", "John Maynard Keynes") },
      { id: 'ECO-02-E1-b', text: t("Karl Marx", "Karl Marx") },
      { id: 'ECO-02-E1-c', text: t("Adam Smith", "Adam Smith") },
      { id: 'ECO-02-E1-d', text: t("Milton Friedman", "Milton Friedman") },
    ],
    correctOptionId: 'ECO-02-E1-c',
    explanation: t(
      "Adam Smith publicó La riqueza de las naciones en 1776; explicó la división del trabajo y cómo, en mercados competitivos, el interés propio puede beneficiar a los demás (mano invisible). Keynes escribió en el siglo XX (1936), Marx criticó al capitalismo en el XIX y Friedman es figura del monetarismo. Error común: atribuir la mano invisible a Keynes, que en realidad defendió más intervención del gobierno.",
      "Adam Smith published The Wealth of Nations in 1776; he explained the division of labor and how, in competitive markets, self-interest can benefit others (invisible hand). Keynes wrote in the 20th century (1936), Marx criticized capitalism in the 19th and Friedman is a figure of monetarism. Common mistake: attributing the invisible hand to Keynes, who actually argued for more government intervention.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'economic-thought',
  },
  {
    id: 'ECO-02-E2',
    level: 1,
    module: 'ECO-02',
    kind: 'classify',
    flavor: 'concept',
    prompt: t(
      "Relaciona cada idea con la escuela de pensamiento económico que la defendió.",
      "Match each idea with the school of economic thought that defended it.",
    ),
    categories: [
      { id: 'ECO-02-E2-c1', label: t("Mercantilismo", "Mercantilism") },
      { id: 'ECO-02-E2-c2', label: t("Economía clásica", "Classical economics") },
      { id: 'ECO-02-E2-c3', label: t("Keynesianismo", "Keynesianism") },
    ],
    items: [
      { id: 'ECO-02-E2-i1', label: t("Un país es rico si acumula oro y plata", "A country is rich if it accumulates gold and silver"), correctCategoryId: 'ECO-02-E2-c1' },
      { id: 'ECO-02-E2-i2', label: t("La división del trabajo multiplica la producción", "The division of labor multiplies output"), correctCategoryId: 'ECO-02-E2-c2' },
      { id: 'ECO-02-E2-i3', label: t("En una recesión el gobierno debe aumentar su gasto para crear empleo", "In a recession the government should increase spending to create jobs"), correctCategoryId: 'ECO-02-E2-c3' },
      { id: 'ECO-02-E2-i4', label: t("Dos países ganan al comerciar si cada uno se especializa según su ventaja comparativa", "Two countries gain from trade if each specializes according to its comparative advantage"), correctCategoryId: 'ECO-02-E2-c2' },
      { id: 'ECO-02-E2-i5', label: t("Hay que limitar las importaciones para exportar más de lo que se compra fuera", "Imports must be limited in order to export more than is bought abroad"), correctCategoryId: 'ECO-02-E2-c1' },
      { id: 'ECO-02-E2-i6', label: t("El desempleo prolongado se debe a una demanda agregada insuficiente", "Prolonged unemployment is due to insufficient aggregate demand"), correctCategoryId: 'ECO-02-E2-c3' },
    ],
    explanation: t(
      "Mercantilismo: acumular metales y exportar más de lo que se importa. Clásicos: división del trabajo (Smith) y ventaja comparativa (Ricardo). Keynesianismo: demanda insuficiente y gasto público para reactivar. Error común: poner la ventaja comparativa en el mercantilismo porque habla de comercio exterior; Ricardo defendía el libre comercio, no acumular metales.",
      "Mercantilism: accumulate metals and export more than you import. Classics: division of labor (Smith) and comparative advantage (Ricardo). Keynesianism: insufficient demand and public spending to revive the economy. Common mistake: placing comparative advantage under mercantilism because it is about foreign trade; Ricardo defended free trade, not accumulating metals.",
    ),
    difficulty: 2,
    points: 15,
    competency: 'economic-thought',
  },
  {
    id: 'ECO-02-E3',
    level: 1,
    module: 'ECO-02',
    kind: 'truefalse',
    flavor: 'concept',
    prompt: t(
      "Para los fisiócratas franceses del siglo XVIII, la agricultura era la única actividad que generaba un excedente o riqueza neta.",
      "For the 18th-century French physiocrats, agriculture was the only activity that generated a surplus or net wealth.",
    ),
    answer: true,
    explanation: t(
      "Verdadero. Los fisiócratas, con François Quesnay a la cabeza, pensaban que solo la tierra producía más de lo que se usaba en ella; comercio e industria solo transformaban o movían esa riqueza. Error común: confundirlos con los mercantilistas, que ponían la riqueza en el oro y la plata.",
      "True. The physiocrats, led by François Quesnay, believed only land produced more than what was used on it; trade and industry only transformed or moved that wealth. Common mistake: confusing them with the mercantilists, who placed wealth in gold and silver.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'economic-thought',
  },
  {
    id: 'ECO-02-E4',
    level: 1,
    module: 'ECO-02',
    kind: 'mcq',
    flavor: 'case',
    context: t(
      "Es 1933. Tras la caída de la bolsa de 1929, muchas fábricas están cerradas y millones de personas no tienen trabajo. Precios y salarios han bajado, pero el empleo no se recupera.",
      "It is 1933. After the 1929 stock market crash, many factories are closed and millions of people have no job. Prices and wages have fallen, but employment does not recover.",
    ),
    prompt: t(
      "¿Qué propuesta corresponde a la que haría John Maynard Keynes ante esta situación?",
      "Which proposal matches what John Maynard Keynes would make in this situation?",
    ),
    options: [
      { id: 'ECO-02-E4-a', text: t("Esperar sin intervenir, porque el mercado se ajusta rápido por sí solo", "Wait without intervening, because the market adjusts quickly on its own") },
      { id: 'ECO-02-E4-b', text: t("Acumular oro y prohibir las importaciones", "Accumulate gold and ban imports") },
      { id: 'ECO-02-E4-c', text: t("Que el gobierno aumente su gasto, por ejemplo en obras públicas, para elevar la demanda y el empleo", "Have the government increase spending, for example on public works, to lift demand and employment") },
      { id: 'ECO-02-E4-d', text: t("Volver a una economía basada solo en la agricultura", "Return to an economy based only on agriculture") },
    ],
    correctOptionId: 'ECO-02-E4-c',
    explanation: t(
      "Keynes sostuvo que, cuando la gente y las empresas gastan poco, el desempleo puede durar mucho aunque bajen precios y salarios; por eso propuso que el gobierno gaste más para reactivar la demanda. Error común: elegir \"esperar sin intervenir\", que es la visión clásica que Keynes criticó; acumular oro es mercantilismo y la agricultura como única riqueza es idea fisiócrata.",
      "Keynes argued that when people and firms spend little, unemployment can last a long time even if prices and wages fall; that is why he proposed that the government spend more to revive demand. Common mistake: choosing \"wait without intervening\", which is the classical view Keynes criticized; accumulating gold is mercantilism and agriculture as the only wealth is a physiocratic idea.",
    ),
    difficulty: 2,
    points: 15,
    competency: 'economic-thought',
  },
  {
    id: 'ECO-02-E5',
    level: 1,
    module: 'ECO-02',
    kind: 'fields',
    flavor: 'case',
    context: t(
      "En un taller de tortas, cada uno de 4 empleados trabajando por su cuenta hace 20 tortas por hora. Al especializarse (uno corta, otro rellena, otro arma y otro empaca), entre los cuatro hacen 120 tortas por hora.",
      "In a sandwich workshop, each of 4 employees working on their own makes 20 sandwiches per hour. When they specialize (one slices, one fills, one assembles and one packs), the four together make 120 sandwiches per hour.",
    ),
    prompt: t(
      "Mide el efecto de la división del trabajo que describió Adam Smith completando los campos.",
      "Measure the effect of the division of labor described by Adam Smith by completing the fields.",
    ),
    fields: [
      { id: 'f1', label: t("Tortas por hora entre los 4 sin especializarse", "Sandwiches per hour for the 4 without specializing"), answer: 80, unit: 'units', tolerance: { abs: 0.01 } },
      { id: 'f2', label: t("Tortas por hora por empleado al especializarse", "Sandwiches per hour per employee when specialized"), answer: 30, unit: 'units', tolerance: { abs: 0.01 } },
      { id: 'f3', label: t("Aumento de la producción por empleado (%)", "Increase in output per employee (%)"), answer: 50, unit: '%', tolerance: { abs: 0.1 } },
    ],
    explanation: t(
      "Sin especializarse: 4 × 20 = 80 tortas. Especializados: 120 ÷ 4 = 30 por empleado. Aumento: (30 − 20) ÷ 20 = 50 %. Error común: calcular el aumento sobre el valor nuevo, (30 − 20) ÷ 30 ≈ 33 %; el porcentaje de cambio se mide contra el valor inicial.",
      "Without specializing: 4 × 20 = 80 sandwiches. Specialized: 120 ÷ 4 = 30 per employee. Increase: (30 − 20) ÷ 20 = 50%. Common mistake: computing the increase over the new value, (30 − 20) ÷ 30 ≈ 33%; percentage change is measured against the initial value.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'economic-thought',
  },
  {
    id: 'ECO-02-E6',
    level: 1,
    module: 'ECO-02',
    kind: 'multi',
    flavor: 'concept',
    prompt: t(
      "¿Cuáles de estas afirmaciones sobre la historia del pensamiento económico son correctas? Selecciona todas las que apliquen.",
      "Which of these statements about the history of economic thought are correct? Select all that apply.",
    ),
    options: [
      { id: 'ECO-02-E6-a', text: t("David Ricardo explicó la ventaja comparativa", "David Ricardo explained comparative advantage") },
      { id: 'ECO-02-E6-b', text: t("Keynes escribió La riqueza de las naciones", "Keynes wrote The Wealth of Nations") },
      { id: 'ECO-02-E6-c', text: t("Milton Friedman se asocia con el monetarismo", "Milton Friedman is associated with monetarism") },
      { id: 'ECO-02-E6-d', text: t("Los marginalistas explicaron el valor con la utilidad de una unidad adicional", "The marginalists explained value with the utility of one additional unit") },
      { id: 'ECO-02-E6-e', text: t("Karl Marx fue el principal defensor del mercantilismo", "Karl Marx was the main defender of mercantilism") },
    ],
    correctOptionIds: ['ECO-02-E6-a', 'ECO-02-E6-c', 'ECO-02-E6-d'],
    explanation: t(
      "Ricardo formuló la ventaja comparativa, Friedman es la figura central del monetarismo y los marginalistas (Jevons, Menger, Walras) explicaron el valor con la utilidad marginal. La riqueza de las naciones es de Adam Smith, y Marx fue crítico del capitalismo, no mercantilista. Error común: mezclar autores y épocas; ubica cada idea en su siglo.",
      "Ricardo formulated comparative advantage, Friedman is the central figure of monetarism and the marginalists (Jevons, Menger, Walras) explained value with marginal utility. The Wealth of Nations is by Adam Smith, and Marx was a critic of capitalism, not a mercantilist. Common mistake: mixing authors and eras; place each idea in its century.",
    ),
    difficulty: 2,
    points: 15,
    competency: 'economic-thought',
  },

  // ═════════════════════════ ECO-03 ═════════════════════════
  {
    id: 'ECO-03-E1',
    level: 1,
    module: 'ECO-03',
    kind: 'mcq',
    flavor: 'case',
    context: t(
      "Una cadena de supermercados empieza a cobrar $2 por cada bolsa de plástico. Nadie prohibió las bolsas.",
      "A supermarket chain starts charging $2 for each plastic bag. Nobody banned the bags.",
    ),
    prompt: t(
      "Según la idea de incentivos, ¿qué es lo más probable que ocurra con los clientes de la cadena?",
      "Based on the idea of incentives, what is most likely to happen with the chain's customers?",
    ),
    options: [
      { id: 'ECO-03-E1-a', text: t("Nada cambia, porque $2 es muy poco dinero", "Nothing changes, because $2 is very little money") },
      { id: 'ECO-03-E1-b', text: t("Muchos clientes empiezan a llevar su propia bolsa", "Many customers start bringing their own bag") },
      { id: 'ECO-03-E1-c', text: t("Los clientes piden todavía más bolsas para aprovecharlas", "Customers ask for even more bags to make the most of them") },
      { id: 'ECO-03-E1-d', text: t("La cadena está obligada a regalar bolsas de tela", "The chain is required to give away cloth bags") },
    ],
    correctOptionId: 'ECO-03-E1-b',
    explanation: t(
      "Un precio es un incentivo: al hacer más caro usar bolsas nuevas, muchas personas cambian su conducta y llevan la suya. Error común: pensar que un monto pequeño no cambia nada; en decisiones repetidas, aun un costo pequeño cambia hábitos. No hace falta prohibir para cambiar la conducta.",
      "A price is an incentive: by making new bags more expensive, many people change their behavior and bring their own. Common mistake: thinking a small amount changes nothing; in repeated decisions, even a small cost changes habits. A ban is not needed to change behavior.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'microeconomics',
  },
  {
    id: 'ECO-03-E2',
    level: 1,
    module: 'ECO-03',
    kind: 'numeric',
    flavor: 'case',
    context: t(
      "Una panadería evalúa hornear una tanda extra de 30 bolillos que vendería a $8 cada uno. La tanda extra gastaría $90 de gas y harina y $100 de pago al ayudante. El horno costó $40,000 hace dos años.",
      "A bakery is evaluating baking an extra batch of 30 bread rolls it would sell at $8 each. The extra batch would use $90 of gas and flour and $100 to pay the helper. The oven cost $40,000 two years ago.",
    ),
    prompt: t(
      "¿Cuál es la ganancia marginal (beneficio marginal menos costo marginal) de hornear la tanda extra? Responde en pesos.",
      "What is the marginal gain (marginal benefit minus marginal cost) of baking the extra batch? Answer in pesos.",
    ),
    answer: 50,
    unit: 'MXN',
    decimals: 0,
    tolerance: { abs: 0.5 },
    explanation: t(
      "Beneficio marginal: 30 × 8 = $240. Costo marginal: 90 + 100 = $190. Ganancia marginal: 240 − 190 = $50, así que conviene hornearla. El horno es un costo hundido: ya se pagó y no cambia con esta decisión. Error común: restar parte del costo del horno y concluir que la tanda \"pierde dinero\".",
      "Marginal benefit: 30 × 8 = $240. Marginal cost: 90 + 100 = $190. Marginal gain: 240 − 190 = $50, so baking it pays off. The oven is a sunk cost: it was already paid and does not change with this decision. Common mistake: subtracting part of the oven cost and concluding the batch \"loses money\".",
    ),
    difficulty: 1,
    points: 10,
    competency: 'microeconomics',
  },
  {
    id: 'ECO-03-E3',
    level: 1,
    module: 'ECO-03',
    kind: 'truefalse',
    flavor: 'interpret',
    context: t(
      "Compraste un boleto no reembolsable de $600 para un concierto. El día del evento estás enfermo y preferirías quedarte en casa.",
      "You bought a non-refundable $600 ticket for a concert. On the day of the event you are sick and would rather stay home.",
    ),
    prompt: t(
      "Como ya pagaste $600, la decisión racional es ir al concierto aunque prefieras quedarte en casa.",
      "Since you already paid $600, the rational decision is to go to the concert even though you would rather stay home.",
    ),
    answer: false,
    explanation: t(
      "Falso. Los $600 son un costo hundido: los perdiste vayas o no, así que no deben pesar en la decisión. Solo importan los costos y beneficios futuros: ir enfermo frente a descansar. Error común: la falacia del costo hundido, \"ya pagué, tengo que ir\".",
      "False. The $600 is a sunk cost: you lose it whether you go or not, so it should not weigh on the decision. Only future costs and benefits matter: going while sick versus resting. Common mistake: the sunk cost fallacy, \"I already paid, I have to go\".",
    ),
    difficulty: 1,
    points: 10,
    competency: 'microeconomics',
  },
  {
    id: 'ECO-03-E4',
    level: 1,
    module: 'ECO-03',
    kind: 'classify',
    flavor: 'concept',
    prompt: t(
      "Ubica cada operación en el mercado del flujo circular donde ocurre.",
      "Place each transaction in the circular-flow market where it takes place.",
    ),
    categories: [
      { id: 'ECO-03-E4-c1', label: t("Mercado de bienes y servicios", "Goods and services market") },
      { id: 'ECO-03-E4-c2', label: t("Mercado de factores de producción", "Factor market") },
    ],
    items: [
      { id: 'ECO-03-E4-i1', label: t("Una familia compra tortillas en la tortillería", "A family buys tortillas at the tortilla shop"), correctCategoryId: 'ECO-03-E4-c1' },
      { id: 'ECO-03-E4-i2', label: t("Luis trabaja como cajero y recibe su sueldo", "Luis works as a cashier and receives his wage"), correctCategoryId: 'ECO-03-E4-c2' },
      { id: 'ECO-03-E4-i3', label: t("Una señora renta su local a una farmacia", "A woman rents her shop space to a pharmacy"), correctCategoryId: 'ECO-03-E4-c2' },
      { id: 'ECO-03-E4-i4', label: t("Ana paga un corte de pelo en una estética", "Ana pays for a haircut at a salon"), correctCategoryId: 'ECO-03-E4-c1' },
      { id: 'ECO-03-E4-i5', label: t("Una constructora contrata a un ingeniero", "A construction firm hires an engineer"), correctCategoryId: 'ECO-03-E4-c2' },
      { id: 'ECO-03-E4-i6', label: t("Un estudiante compra un celular en línea", "A student buys a phone online"), correctCategoryId: 'ECO-03-E4-c1' },
    ],
    explanation: t(
      "En el mercado de bienes y servicios los hogares compran lo que producen las empresas (tortillas, corte de pelo, celular). En el mercado de factores los hogares venden trabajo o recursos a las empresas (sueldo del cajero, renta del local, contratación del ingeniero). Error común: poner el corte de pelo en factores porque \"es trabajo\"; para quien lo paga es un servicio que consume.",
      "In the goods and services market households buy what firms produce (tortillas, haircut, phone). In the factor market households sell labor or resources to firms (the cashier's wage, renting the shop, hiring the engineer). Common mistake: placing the haircut under factors because \"it is labor\"; for whoever pays, it is a service being consumed.",
    ),
    difficulty: 2,
    points: 15,
    competency: 'microeconomics',
  },
  {
    id: 'ECO-03-E5',
    level: 1,
    module: 'ECO-03',
    kind: 'mcq',
    flavor: 'concept',
    prompt: t(
      "Una curtiduría tira residuos a un río y los pescadores de río abajo pierden su pesca, sin que nadie les pague. ¿Qué tipo de falla de mercado es?",
      "A tannery dumps waste into a river and the fishermen downstream lose their catch, with no one paying them. What type of market failure is this?",
    ),
    options: [
      { id: 'ECO-03-E5-a', text: t("Una externalidad negativa", "A negative externality") },
      { id: 'ECO-03-E5-b', text: t("Una externalidad positiva", "A positive externality") },
      { id: 'ECO-03-E5-c', text: t("Un costo hundido", "A sunk cost") },
      { id: 'ECO-03-E5-d', text: t("Una ventaja comparativa", "A comparative advantage") },
    ],
    correctOptionId: 'ECO-03-E5-a',
    explanation: t(
      "Es una externalidad negativa: la actividad de la curtiduría impone un costo a terceros (los pescadores) que no participan en sus ventas y que no se refleja en su precio. Error común: confundirla con un costo hundido; un costo hundido es un gasto propio ya hecho, no un daño a otros.",
      "It is a negative externality: the tannery's activity imposes a cost on third parties (the fishermen) who are not part of its sales and that is not reflected in its price. Common mistake: confusing it with a sunk cost; a sunk cost is one's own past expense, not harm to others.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'microeconomics',
  },
  {
    id: 'ECO-03-E6',
    level: 1,
    module: 'ECO-03',
    kind: 'fields',
    flavor: 'case',
    context: t(
      "Un autolavado cobra $60 por auto. Cada trabajador cuesta $400 al día. El primer trabajador lava 10 autos al día; el segundo agrega 8 más; un tercero agregaría solo 5 más.",
      "A car wash charges $60 per car. Each worker costs $400 a day. The first worker washes 10 cars a day; the second adds 8 more; a third would add only 5 more.",
    ),
    prompt: t(
      "Aplica el análisis marginal para decidir cuántos trabajadores contratar y completa los campos.",
      "Apply marginal analysis to decide how many workers to hire and complete the fields.",
    ),
    fields: [
      { id: 'f1', label: t("Ganancia marginal del 2.º trabajador (MXN)", "Marginal gain of the 2nd worker (MXN)"), answer: 80, unit: 'MXN', tolerance: { abs: 0.5 } },
      { id: 'f2', label: t("Beneficio marginal (ingreso extra) del 3.er trabajador (MXN)", "Marginal benefit (extra revenue) of the 3rd worker (MXN)"), answer: 300, unit: 'MXN', tolerance: { abs: 0.5 } },
      { id: 'f3', label: t("Número de trabajadores que conviene contratar", "Number of workers worth hiring"), answer: 2, unit: 'units', tolerance: { abs: 0.01 } },
    ],
    explanation: t(
      "2.º trabajador: 8 × 60 = $480 de beneficio menos $400 de costo = $80 > 0, conviene. 3.er trabajador: 5 × 60 = $300 < $400, perdería $100, no conviene. Se contratan 2. Error común: comparar con el promedio de autos por trabajador en lugar de con lo que aporta el trabajador adicional.",
      "2nd worker: 8 × 60 = $480 benefit minus $400 cost = $80 > 0, worth it. 3rd worker: 5 × 60 = $300 < $400, would lose $100, not worth it. Hire 2. Common mistake: comparing with the average cars per worker instead of what the additional worker adds.",
    ),
    difficulty: 2,
    points: 15,
    competency: 'microeconomics',
  },

  // ═════════════════════════ ECO-04 ═════════════════════════
  {
    id: 'ECO-04-E1',
    level: 1,
    module: 'ECO-04',
    kind: 'mcq',
    flavor: 'concept',
    prompt: t(
      "¿Cuál de estas preguntas pertenece a la macroeconomía?",
      "Which of these questions belongs to macroeconomics?",
    ),
    options: [
      { id: 'ECO-04-E1-a', text: t("¿Cuántos tacos debe preparar una taquería el sábado?", "How many tacos should a taco stand prepare on Saturday?") },
      { id: 'ECO-04-E1-b', text: t("¿Por qué subió el precio del aguacate en un mercado de Morelia?", "Why did the price of avocados rise at a market in Morelia?") },
      { id: 'ECO-04-E1-c', text: t("¿Por qué aumentó el desempleo en todo el país este año?", "Why did unemployment rise across the whole country this year?") },
      { id: 'ECO-04-E1-d', text: t("¿Le conviene a una familia comprar o rentar su casa?", "Is it better for a family to buy or rent its home?") },
    ],
    correctOptionId: 'ECO-04-E1-c',
    explanation: t(
      "El desempleo de todo el país es un agregado: lo estudia la macroeconomía. La taquería, el precio del aguacate en un mercado y la decisión de una familia son decisiones de agentes o mercados concretos: microeconomía. Error común: pensar que algo es macro solo porque involucra dinero o precios.",
      "Unemployment across the whole country is an aggregate: macroeconomics studies it. The taco stand, the avocado price at one market and a family's decision are decisions by specific agents or markets: microeconomics. Common mistake: thinking something is macro just because it involves money or prices.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'macroeconomics',
  },
  {
    id: 'ECO-04-E2',
    level: 1,
    module: 'ECO-04',
    kind: 'classify',
    flavor: 'concept',
    prompt: t(
      "Clasifica cada medida según sea de política monetaria o de política fiscal.",
      "Classify each measure as monetary policy or fiscal policy.",
    ),
    categories: [
      { id: 'ECO-04-E2-c1', label: t("Política monetaria (banco central)", "Monetary policy (central bank)") },
      { id: 'ECO-04-E2-c2', label: t("Política fiscal (gobierno: impuestos y gasto)", "Fiscal policy (government: taxes and spending)") },
    ],
    items: [
      { id: 'ECO-04-E2-i1', label: t("El banco central baja su tasa de interés objetivo", "The central bank lowers its target interest rate"), correctCategoryId: 'ECO-04-E2-c1' },
      { id: 'ECO-04-E2-i2', label: t("El gobierno aumenta el gasto en carreteras y hospitales", "The government increases spending on roads and hospitals"), correctCategoryId: 'ECO-04-E2-c2' },
      { id: 'ECO-04-E2-i3', label: t("Se reduce un impuesto para que las familias tengan más ingreso disponible", "A tax is cut so families have more disposable income"), correctCategoryId: 'ECO-04-E2-c2' },
      { id: 'ECO-04-E2-i4', label: t("El banco central sube su tasa de interés objetivo para frenar la inflación", "The central bank raises its target interest rate to curb inflation"), correctCategoryId: 'ECO-04-E2-c1' },
      { id: 'ECO-04-E2-i5', label: t("El gobierno recorta programas de gasto para reducir su déficit", "The government cuts spending programs to reduce its deficit"), correctCategoryId: 'ECO-04-E2-c2' },
    ],
    explanation: t(
      "Las decisiones sobre la tasa de interés las toma el banco central (en México, el Banco de México, autónomo): política monetaria. Cambiar impuestos o gasto público es política fiscal, que propone Hacienda y aprueba el Congreso. Error común: creer que el banco central decide los impuestos o el gasto en obras.",
      "Interest rate decisions are made by the central bank (in Mexico, the autonomous Banco de México): monetary policy. Changing taxes or public spending is fiscal policy, proposed by the Ministry of Finance and approved by Congress. Common mistake: believing the central bank decides taxes or spending on public works.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'macroeconomics',
  },
  {
    id: 'ECO-04-E3',
    level: 1,
    module: 'ECO-04',
    kind: 'mcq',
    flavor: 'case',
    context: t(
      "Una periodista prepara una nota sobre la economía mexicana y necesita los datos oficiales más recientes del PIB, del índice de precios al consumidor (INPC) y de la encuesta de empleo.",
      "A journalist is preparing a story on the Mexican economy and needs the latest official data on GDP, the consumer price index (INPC) and the employment survey.",
    ),
    prompt: t(
      "¿Qué institución mexicana publica esos tres indicadores?",
      "Which Mexican institution publishes those three indicators?",
    ),
    options: [
      { id: 'ECO-04-E3-a', text: t("El SAT", "The SAT") },
      { id: 'ECO-04-E3-b', text: t("El INEGI", "INEGI") },
      { id: 'ECO-04-E3-c', text: t("La Bolsa Mexicana de Valores", "The Mexican Stock Exchange") },
      { id: 'ECO-04-E3-d', text: t("La Profeco", "Profeco") },
    ],
    correctOptionId: 'ECO-04-E3-b',
    explanation: t(
      "El INEGI produce y publica la estadística oficial de México, incluidos el PIB, el INPC y las encuestas de empleo. El SAT recauda impuestos, la Bolsa es un mercado de valores y la Profeco protege al consumidor. Error común: pensar que el Banco de México publica el INPC; desde hace varios años lo calcula y publica el INEGI.",
      "INEGI produces and publishes Mexico's official statistics, including GDP, the INPC and employment surveys. The SAT collects taxes, the Stock Exchange is a securities market and Profeco protects consumers. Common mistake: thinking Banco de México publishes the INPC; for several years INEGI has computed and published it.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'macroeconomics',
  },
  {
    id: 'ECO-04-E4',
    level: 1,
    module: 'ECO-04',
    kind: 'truefalse',
    flavor: 'interpret',
    prompt: t(
      "Si a una familia le conviene ahorrar más, entonces siempre le convendrá a la economía de todo un país que todas las familias recorten su gasto al mismo tiempo.",
      "If saving more is good for one family, then it will always be good for a whole country's economy if all families cut their spending at the same time.",
    ),
    answer: false,
    explanation: t(
      "Falso. Es la falacia de composición: si todos recortan su gasto a la vez, los negocios venden menos, despiden personal y los ingresos de todos pueden bajar (paradoja del ahorro). Error común: trasladar de forma automática una conclusión individual (micro) al conjunto (macro).",
      "False. It is the fallacy of composition: if everyone cuts spending at once, businesses sell less, lay off staff and everyone's income can fall (paradox of thrift). Common mistake: automatically transferring an individual (micro) conclusion to the whole (macro).",
    ),
    difficulty: 2,
    points: 15,
    competency: 'macroeconomics',
  },
  {
    id: 'ECO-04-E5',
    level: 1,
    module: 'ECO-04',
    kind: 'multi',
    flavor: 'concept',
    prompt: t(
      "¿Cuáles son grandes objetivos macroeconómicos de un país? Selecciona todos los que apliquen.",
      "Which are major macroeconomic goals of a country? Select all that apply.",
    ),
    options: [
      { id: 'ECO-04-E5-a', text: t("Crecimiento sostenido de la producción", "Sustained growth of output") },
      { id: 'ECO-04-E5-b', text: t("Estabilidad de precios (inflación baja y predecible)", "Price stability (low and predictable inflation)") },
      { id: 'ECO-04-E5-c', text: t("Que cada tienda fije el precio que más le convenga a su dueño", "That each store sets the price that best suits its owner") },
      { id: 'ECO-04-E5-d', text: t("Alto nivel de empleo", "A high level of employment") },
      { id: 'ECO-04-E5-e', text: t("Equilibrio en las cuentas con el resto del mundo", "Balance in the accounts with the rest of the world") },
    ],
    correctOptionIds: ['ECO-04-E5-a', 'ECO-04-E5-b', 'ECO-04-E5-d', 'ECO-04-E5-e'],
    explanation: t(
      "Los cuatro grandes objetivos son crecimiento, estabilidad de precios, empleo y equilibrio externo. Cómo fija precios una tienda es una decisión individual, tema de la microeconomía. Error común: olvidar el equilibrio externo, que mide si el país puede sostener su relación económica con el exterior.",
      "The four major goals are growth, price stability, employment and external balance. How a store sets prices is an individual decision, a microeconomics topic. Common mistake: forgetting external balance, which measures whether the country can sustain its economic relationship with the rest of the world.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'macroeconomics',
  },
  {
    id: 'ECO-04-E6',
    level: 1,
    module: 'ECO-04',
    kind: 'fields',
    flavor: 'case',
    context: t(
      "La producción trimestral de un país hipotético (en miles de millones de pesos a precios constantes) fue: T1 = 1,000; T2 = 1,040; T3 = 1,014; T4 = 1,000.",
      "Quarterly output of a hypothetical country (in billions of pesos at constant prices) was: Q1 = 1,000; Q2 = 1,040; Q3 = 1,014; Q4 = 1,000.",
    ),
    prompt: t(
      "Analiza el ciclo económico de este país hipotético y completa los campos.",
      "Analyze this hypothetical country's business cycle and complete the fields.",
    ),
    fields: [
      { id: 'f1', label: t("Crecimiento de T2 frente a T1 (%)", "Growth of Q2 versus Q1 (%)"), answer: 4, unit: '%', tolerance: { abs: 0.05 } },
      { id: 'f2', label: t("Crecimiento de T3 frente a T2 (%)", "Growth of Q3 versus Q2 (%)"), answer: -2.5, unit: '%', tolerance: { abs: 0.05 } },
      { id: 'f3', label: t("Número de trimestres seguidos con caída al final del año", "Number of consecutive quarters of decline at year-end"), answer: 2, unit: 'units', tolerance: { abs: 0.01 } },
    ],
    explanation: t(
      "T2: (1,040 − 1,000) ÷ 1,000 = 4 %. T3: (1,014 − 1,040) ÷ 1,040 = −26 ÷ 1,040 = −2.5 %. T4 también cae (de 1,014 a 1,000), así que hay 2 trimestres seguidos de caída: según la regla práctica, el país entró en recesión tras el pico de T2. Error común: calcular el cambio de T3 contra T1 (1.4 %) en lugar de contra el trimestre anterior.",
      "Q2: (1,040 − 1,000) ÷ 1,000 = 4%. Q3: (1,014 − 1,040) ÷ 1,040 = −26 ÷ 1,040 = −2.5%. Q4 also falls (from 1,014 to 1,000), so there are 2 consecutive quarters of decline: by the rule of thumb, the country entered a recession after the Q2 peak. Common mistake: computing Q3's change against Q1 (1.4%) instead of against the previous quarter.",
    ),
    difficulty: 2,
    points: 15,
    competency: 'macroeconomics',
  },

  // ═════════════════════════ ECO-05 ═════════════════════════
  {
    id: 'ECO-05-E1',
    level: 1,
    module: 'ECO-05',
    kind: 'multi',
    flavor: 'concept',
    prompt: t(
      "¿Cuáles de estos cambios desplazan la curva de demanda de café (y no solo mueven el punto sobre la curva)? Selecciona todos los que apliquen.",
      "Which of these changes shift the demand curve for coffee (and do not just move the point along the curve)? Select all that apply.",
    ),
    options: [
      { id: 'ECO-05-E1-a', text: t("Aumenta el ingreso de los consumidores", "Consumers' income rises") },
      { id: 'ECO-05-E1-b', text: t("Sube el precio del propio café", "The price of coffee itself rises") },
      { id: 'ECO-05-E1-c', text: t("Sube el precio del té, un sustituto", "The price of tea, a substitute, rises") },
      { id: 'ECO-05-E1-d', text: t("Se pone de moda tomar café de especialidad", "Specialty coffee becomes trendy") },
      { id: 'ECO-05-E1-e', text: t("Baja el precio del propio café", "The price of coffee itself falls") },
    ],
    correctOptionIds: ['ECO-05-E1-a', 'ECO-05-E1-c', 'ECO-05-E1-d'],
    explanation: t(
      "Ingreso, precio de un sustituto y gustos son factores distintos al precio del café: desplazan toda la curva. Un cambio en el precio del propio café solo provoca un movimiento a lo largo de la curva (cambia la cantidad demandada). Error común: decir que \"bajó el precio, subió la demanda\"; lo correcto es que subió la cantidad demandada.",
      "Income, the price of a substitute and tastes are factors other than coffee's price: they shift the whole curve. A change in coffee's own price only causes a movement along the curve (quantity demanded changes). Common mistake: saying \"the price fell, demand rose\"; the correct phrasing is that quantity demanded rose.",
    ),
    difficulty: 2,
    points: 15,
    competency: 'supply-demand',
  },
  {
    id: 'ECO-05-E2',
    level: 1,
    module: 'ECO-05',
    kind: 'fields',
    flavor: 'case',
    context: t(
      "En el mercado local de elotes, la demanda diaria es Qd = 100 − 2P y la oferta es Qs = 20 + 2P, con P en pesos.",
      "In the local corn-on-the-cob market, daily demand is Qd = 100 − 2P and supply is Qs = 20 + 2P, with P in pesos.",
    ),
    prompt: t(
      "Encuentra el equilibrio del mercado de elotes y lo que pasaría con un precio de $15.",
      "Find the equilibrium of the corn market and what would happen at a $15 price.",
    ),
    fields: [
      { id: 'f1', label: t("Precio de equilibrio (MXN)", "Equilibrium price (MXN)"), answer: 20, unit: 'MXN', tolerance: { abs: 0.01 } },
      { id: 'f2', label: t("Cantidad de equilibrio (elotes)", "Equilibrium quantity (ears of corn)"), answer: 60, unit: 'units', tolerance: { abs: 0.01 } },
      { id: 'f3', label: t("Escasez a un precio de $15 (elotes)", "Shortage at a $15 price (ears of corn)"), answer: 20, unit: 'units', tolerance: { abs: 0.01 } },
    ],
    explanation: t(
      "Igualando 100 − 2P = 20 + 2P: 80 = 4P, P = $20 y Q = 100 − 40 = 60. A $15: Qd = 100 − 30 = 70 y Qs = 20 + 30 = 50; faltan 70 − 50 = 20 elotes (escasez). Error común: llamar \"excedente\" a esa diferencia; cuando el precio está por debajo del equilibrio la gente quiere más de lo que hay.",
      "Setting 100 − 2P = 20 + 2P: 80 = 4P, P = $20 and Q = 100 − 40 = 60. At $15: Qd = 100 − 30 = 70 and Qs = 20 + 30 = 50; 70 − 50 = 20 ears are missing (shortage). Common mistake: calling that difference a \"surplus\"; when the price is below equilibrium people want more than there is.",
    ),
    difficulty: 2,
    points: 15,
    competency: 'supply-demand',
  },
  {
    id: 'ECO-05-E3',
    level: 1,
    module: 'ECO-05',
    kind: 'numeric',
    flavor: 'case',
    context: t(
      "Un cine sube el precio de sus palomitas medianas de $50 a $55. Las ventas diarias bajan de 400 a 300 paquetes.",
      "A movie theater raises the price of its medium popcorn from $50 to $55. Daily sales fall from 400 to 300 boxes.",
    ),
    prompt: t(
      "Calcula el valor absoluto de la elasticidad precio de la demanda de palomitas, usando los valores iniciales como base.",
      "Compute the absolute value of the price elasticity of demand for popcorn, using the initial values as the base.",
    ),
    answer: 2.5,
    unit: 'none',
    decimals: 1,
    tolerance: { abs: 0.01 },
    explanation: t(
      "Cambio de precio: (55 − 50) ÷ 50 = 10 %. Cambio de cantidad: (300 − 400) ÷ 400 = −25 %. Elasticidad: 25 ÷ 10 = 2.5 en valor absoluto: demanda elástica. Por eso el ingreso cae de 400 × 50 = $20,000 a 300 × 55 = $16,500. Error común: dividir al revés (10 ÷ 25 = 0.4) y concluir que es inelástica.",
      "Price change: (55 − 50) ÷ 50 = 10%. Quantity change: (300 − 400) ÷ 400 = −25%. Elasticity: 25 ÷ 10 = 2.5 in absolute value: elastic demand. That is why revenue falls from 400 × 50 = $20,000 to 300 × 55 = $16,500. Common mistake: dividing the other way (10 ÷ 25 = 0.4) and concluding it is inelastic.",
    ),
    difficulty: 2,
    points: 15,
    competency: 'supply-demand',
  },
  {
    id: 'ECO-05-E4',
    level: 1,
    module: 'ECO-05',
    kind: 'classify',
    flavor: 'interpret',
    prompt: t(
      "Clasifica la demanda de cada bien como relativamente elástica o inelástica.",
      "Classify the demand for each good as relatively elastic or inelastic.",
    ),
    categories: [
      { id: 'ECO-05-E4-c1', label: t("Demanda elástica", "Elastic demand") },
      { id: 'ECO-05-E4-c2', label: t("Demanda inelástica", "Inelastic demand") },
    ],
    items: [
      { id: 'ECO-05-E4-i1', label: t("Insulina para una persona con diabetes", "Insulin for a person with diabetes"), correctCategoryId: 'ECO-05-E4-c2' },
      { id: 'ECO-05-E4-i2', label: t("Una marca específica de papas fritas entre muchas iguales", "One specific brand of chips among many similar ones"), correctCategoryId: 'ECO-05-E4-c1' },
      { id: 'ECO-05-E4-i3', label: t("Sal de cocina", "Table salt"), correctCategoryId: 'ECO-05-E4-c2' },
      { id: 'ECO-05-E4-i4', label: t("Un viaje de vacaciones de lujo", "A luxury vacation trip"), correctCategoryId: 'ECO-05-E4-c1' },
      { id: 'ECO-05-E4-i5', label: t("Gasolina en el corto plazo, para ir al trabajo", "Gasoline in the short run, to get to work"), correctCategoryId: 'ECO-05-E4-c2' },
      { id: 'ECO-05-E4-i6', label: t("Las tortas de un puesto cuando hay cinco puestos iguales en la misma calle", "Sandwiches from one stand when there are five identical stands on the same street"), correctCategoryId: 'ECO-05-E4-c1' },
    ],
    explanation: t(
      "Es inelástica la demanda de bienes necesarios, sin buenos sustitutos o que pesan poco en el gasto: insulina, sal y gasolina a corto plazo. Es elástica cuando hay muchos sustitutos o el bien es prescindible: una marca entre muchas, un puesto entre cinco iguales y los viajes de lujo. Error común: pensar que la gasolina es elástica porque su precio \"duele\"; a corto plazo casi no se puede dejar de usar.",
      "Demand is inelastic for necessary goods, with no good substitutes or that are a small share of spending: insulin, salt and short-run gasoline. It is elastic when there are many substitutes or the good is dispensable: one brand among many, one stand among five identical ones and luxury trips. Common mistake: thinking gasoline is elastic because its price \"hurts\"; in the short run it can hardly be given up.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'supply-demand',
  },
  {
    id: 'ECO-05-E5',
    level: 1,
    module: 'ECO-05',
    kind: 'truefalse',
    flavor: 'interpret',
    prompt: t(
      "Si la demanda de un producto es inelástica, al subir su precio el ingreso total del vendedor aumenta.",
      "If demand for a product is inelastic, raising its price increases the seller's total revenue.",
    ),
    answer: true,
    explanation: t(
      "Verdadero. Con demanda inelástica la cantidad baja en menor proporción que lo que sube el precio, así que precio × cantidad aumenta. Con demanda elástica ocurre lo contrario. Error común: creer que subir el precio siempre aumenta el ingreso; depende de la elasticidad.",
      "True. With inelastic demand, quantity falls by a smaller proportion than the price rises, so price × quantity increases. With elastic demand the opposite happens. Common mistake: believing a price increase always raises revenue; it depends on elasticity.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'supply-demand',
  },
  {
    id: 'ECO-05-E6',
    level: 1,
    module: 'ECO-05',
    kind: 'formula',
    flavor: 'concept',
    prompt: t(
      "Completa la fórmula de la elasticidad precio de la demanda.",
      "Complete the formula for the price elasticity of demand.",
    ),
    template: 'Ed = %Δ {{b1}} ÷ %Δ {{b2}}',
    blanks: [
      {
        id: 'b1',
        options: [
          { id: 'ECO-05-E6-b1-a', text: t("Cantidad demandada", "Quantity demanded") },
          { id: 'ECO-05-E6-b1-b', text: t("Ingreso total", "Total revenue") },
          { id: 'ECO-05-E6-b1-c', text: t("Costo de producción", "Production cost") },
        ],
        correctOptionId: 'ECO-05-E6-b1-a',
      },
      {
        id: 'b2',
        options: [
          { id: 'ECO-05-E6-b2-a', text: t("Cantidad ofrecida", "Quantity supplied") },
          { id: 'ECO-05-E6-b2-b', text: t("Precio", "Price") },
          { id: 'ECO-05-E6-b2-c', text: t("Ingreso del consumidor", "Consumer income") },
        ],
        correctOptionId: 'ECO-05-E6-b2-b',
      },
    ],
    explanation: t(
      "La elasticidad precio de la demanda divide el cambio porcentual de la cantidad demandada entre el cambio porcentual del precio: mide cuánto reacciona la gente a un cambio de precio. Si en lugar del precio usas el ingreso del consumidor, obtienes otra medida (elasticidad ingreso). Error común: poner el precio arriba y la cantidad abajo.",
      "Price elasticity of demand divides the percentage change in quantity demanded by the percentage change in price: it measures how much people react to a price change. If you use consumer income instead of price, you get a different measure (income elasticity). Common mistake: putting price on top and quantity below.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'supply-demand',
  },

  // ═════════════════════════ ECO-06 ═════════════════════════
  {
    id: 'ECO-06-E1',
    level: 1,
    module: 'ECO-06',
    kind: 'numeric',
    flavor: 'concept',
    context: t(
      "La utilidad total (puntos de satisfacción hipotéticos) de Pedro al comer tacos es: 1 taco = 12, 2 tacos = 22, 3 tacos = 29, 4 tacos = 33.",
      "Pedro's total utility (hypothetical satisfaction points) from eating tacos is: 1 taco = 12, 2 tacos = 22, 3 tacos = 29, 4 tacos = 33.",
    ),
    prompt: t(
      "¿Cuál es la utilidad marginal del tercer taco de Pedro?",
      "What is the marginal utility of Pedro's third taco?",
    ),
    answer: 7,
    unit: 'none',
    decimals: 0,
    tolerance: { abs: 0.01 },
    explanation: t(
      "La utilidad marginal del tercer taco es lo que agrega a la total: 29 − 22 = 7 puntos. La serie completa es 12, 10, 7 y 4: decreciente. Error común: responder 29, que es la utilidad total con 3 tacos, no la satisfacción extra del tercero.",
      "The third taco's marginal utility is what it adds to the total: 29 − 22 = 7 points. The full series is 12, 10, 7 and 4: decreasing. Common mistake: answering 29, which is total utility with 3 tacos, not the extra satisfaction from the third.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'consumer-producer-theory',
  },
  {
    id: 'ECO-06-E2',
    level: 1,
    module: 'ECO-06',
    kind: 'truefalse',
    flavor: 'concept',
    prompt: t(
      "La ley de la utilidad marginal decreciente significa que, al consumir más unidades de un bien, la utilidad total siempre empieza a bajar.",
      "The law of diminishing marginal utility means that, as you consume more units of a good, total utility always starts to fall.",
    ),
    answer: false,
    explanation: t(
      "Falso. Lo que disminuye es la satisfacción extra de cada unidad adicional (utilidad marginal). Mientras esa utilidad marginal sea positiva, la utilidad total sigue subiendo, aunque cada vez menos. Error común: confundir utilidad marginal con utilidad total.",
      "False. What decreases is the extra satisfaction from each additional unit (marginal utility). As long as that marginal utility is positive, total utility keeps rising, though by less each time. Common mistake: confusing marginal utility with total utility.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'consumer-producer-theory',
  },
  {
    id: 'ECO-06-E3',
    level: 1,
    module: 'ECO-06',
    kind: 'fields',
    flavor: 'case',
    context: t(
      "Sofía tiene $600 para el fin de semana. Un boleto de cine cuesta $120 y una pizza $80. Gasta todo su presupuesto.",
      "Sofía has $600 for the weekend. A movie ticket costs $120 and a pizza $80. She spends her whole budget.",
    ),
    prompt: t(
      "Usa la restricción presupuestaria de Sofía para completar los campos.",
      "Use Sofía's budget constraint to complete the fields.",
    ),
    fields: [
      { id: 'f1', label: t("Boletos máximos si solo compra cine", "Maximum tickets if she only buys movies"), answer: 5, unit: 'units', tolerance: { abs: 0.01 } },
      { id: 'f2', label: t("Pizzas que puede comprar si compra 3 boletos", "Pizzas she can buy if she buys 3 tickets"), answer: 3, unit: 'units', tolerance: { abs: 0.01 } },
      { id: 'f3', label: t("Costo de oportunidad de 1 boleto (en pizzas)", "Opportunity cost of 1 ticket (in pizzas)"), answer: 1.5, unit: 'units', tolerance: { abs: 0.01 } },
    ],
    explanation: t(
      "Solo cine: 600 ÷ 120 = 5 boletos. Con 3 boletos gasta 360 y le quedan 240, que alcanzan para 240 ÷ 80 = 3 pizzas. Cada boleto equivale a 120 ÷ 80 = 1.5 pizzas. Error común: invertir el precio relativo y responder 0.67 pizzas por boleto (eso es el costo de una pizza en boletos).",
      "Movies only: 600 ÷ 120 = 5 tickets. With 3 tickets she spends 360 and has 240 left, enough for 240 ÷ 80 = 3 pizzas. Each ticket equals 120 ÷ 80 = 1.5 pizzas. Common mistake: inverting the relative price and answering 0.67 pizzas per ticket (that is the cost of a pizza in tickets).",
    ),
    difficulty: 2,
    points: 15,
    competency: 'consumer-producer-theory',
  },
  {
    id: 'ECO-06-E4',
    level: 1,
    module: 'ECO-06',
    kind: 'mcq',
    flavor: 'case',
    context: t(
      "Con su gasto actual, a Daniel el siguiente libro (precio $200) le daría 600 puntos extra de satisfacción, y la siguiente salida al cine (precio $100) le daría 150 puntos extra.",
      "With his current spending, Daniel's next book (price $200) would give him 600 extra satisfaction points, and the next movie outing (price $100) would give him 150 extra points.",
    ),
    prompt: t(
      "Según la regla de utilidad marginal por peso, ¿qué le conviene hacer a Daniel con su presupuesto?",
      "Based on the marginal-utility-per-peso rule, what should Daniel do with his budget?",
    ),
    options: [
      { id: 'ECO-06-E4-a', text: t("Gastar más en cine, porque es más barato", "Spend more on movies, because they are cheaper") },
      { id: 'ECO-06-E4-b', text: t("Mover dinero del cine a los libros, porque cada peso en libros rinde 3 puntos y en cine 1.5", "Move money from movies to books, because each peso on books yields 3 points and on movies 1.5") },
      { id: 'ECO-06-E4-c', text: t("Dejar todo igual, porque ya gasta en ambos", "Leave everything as is, because he already spends on both") },
      { id: 'ECO-06-E4-d', text: t("Dejar de comprar libros, porque cuestan el doble", "Stop buying books, because they cost twice as much") },
    ],
    correctOptionId: 'ECO-06-E4-b',
    explanation: t(
      "Libros: 600 ÷ 200 = 3 puntos por peso. Cine: 150 ÷ 100 = 1.5 puntos por peso. Cada peso movido del cine a los libros aumenta su satisfacción total, hasta que la utilidad marginal por peso se iguale. Error común: decidir solo por el precio o solo por la utilidad; hay que comparar utilidad por peso.",
      "Books: 600 ÷ 200 = 3 points per peso. Movies: 150 ÷ 100 = 1.5 points per peso. Each peso moved from movies to books raises his total satisfaction, until marginal utility per peso is equal. Common mistake: deciding only by price or only by utility; you must compare utility per peso.",
    ),
    difficulty: 2,
    points: 15,
    competency: 'consumer-producer-theory',
  },
  {
    id: 'ECO-06-E5',
    level: 1,
    module: 'ECO-06',
    kind: 'classify',
    flavor: 'concept',
    context: t(
      "Una panadería de barrio revisa sus gastos de un mes.",
      "A neighborhood bakery reviews its expenses for one month.",
    ),
    prompt: t(
      "Clasifica cada gasto de la panadería como costo fijo o costo variable.",
      "Classify each of the bakery's expenses as a fixed cost or a variable cost.",
    ),
    categories: [
      { id: 'ECO-06-E5-c1', label: t("Costo fijo", "Fixed cost") },
      { id: 'ECO-06-E5-c2', label: t("Costo variable", "Variable cost") },
    ],
    items: [
      { id: 'ECO-06-E5-i1', label: t("Renta del local", "Shop rent"), correctCategoryId: 'ECO-06-E5-c1' },
      { id: 'ECO-06-E5-i2', label: t("Harina", "Flour"), correctCategoryId: 'ECO-06-E5-c2' },
      { id: 'ECO-06-E5-i3', label: t("Gas que consume el horno al hornear", "Gas the oven burns while baking"), correctCategoryId: 'ECO-06-E5-c2' },
      { id: 'ECO-06-E5-i4', label: t("Sueldo mensual del vigilante", "The security guard's monthly wage"), correctCategoryId: 'ECO-06-E5-c1' },
      { id: 'ECO-06-E5-i5', label: t("Bolsas de papel para cada venta", "Paper bags for each sale"), correctCategoryId: 'ECO-06-E5-c2' },
      { id: 'ECO-06-E5-i6', label: t("Seguro anual del local", "Annual insurance for the shop"), correctCategoryId: 'ECO-06-E5-c1' },
    ],
    explanation: t(
      "Fijos: renta, sueldo del vigilante y seguro, que se pagan igual se hornee mucho o poco. Variables: harina, gas del horno y bolsas, que aumentan con cada pieza producida o vendida. Error común: llamar fijo a un gasto solo porque se repite cada mes; la pregunta clave es si cambia con la cantidad producida.",
      "Fixed: rent, the guard's wage and insurance, which are paid the same whether a lot or little is baked. Variable: flour, oven gas and bags, which rise with each piece produced or sold. Common mistake: calling an expense fixed just because it recurs monthly; the key question is whether it changes with output.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'consumer-producer-theory',
  },
  {
    id: 'ECO-06-E6',
    level: 1,
    module: 'ECO-06',
    kind: 'fields',
    flavor: 'case',
    context: t(
      "Un taller de bolsas de mezclilla tiene costos fijos de $5,000 al mes y un costo variable de $20 por bolsa. Este mes produce y vende 500 bolsas a $35 cada una.",
      "A denim bag workshop has fixed costs of $5,000 a month and a variable cost of $20 per bag. This month it produces and sells 500 bags at $35 each.",
    ),
    prompt: t(
      "Calcula los costos y la ganancia del taller de bolsas en el mes.",
      "Compute the bag workshop's costs and profit for the month.",
    ),
    fields: [
      { id: 'f1', label: t("Costo total (MXN)", "Total cost (MXN)"), answer: 15000, unit: 'MXN', tolerance: { abs: 0.5 } },
      { id: 'f2', label: t("Costo promedio por bolsa (MXN)", "Average cost per bag (MXN)"), answer: 30, unit: 'MXN', tolerance: { abs: 0.01 } },
      { id: 'f3', label: t("Ganancia del mes (MXN)", "Profit for the month (MXN)"), answer: 2500, unit: 'MXN', tolerance: { abs: 0.5 } },
    ],
    explanation: t(
      "Costo variable: 500 × 20 = $10,000; costo total: 5,000 + 10,000 = $15,000. Costo promedio: 15,000 ÷ 500 = $30. Ingreso: 500 × 35 = $17,500; ganancia: 17,500 − 15,000 = $2,500. Error común: usar solo el costo variable ($20) como costo por bolsa y sobrestimar la ganancia en $5,000.",
      "Variable cost: 500 × 20 = $10,000; total cost: 5,000 + 10,000 = $15,000. Average cost: 15,000 ÷ 500 = $30. Revenue: 500 × 35 = $17,500; profit: 17,500 − 15,000 = $2,500. Common mistake: using only the variable cost ($20) as the cost per bag and overstating profit by $5,000.",
    ),
    difficulty: 2,
    points: 15,
    competency: 'consumer-producer-theory',
  },
]
