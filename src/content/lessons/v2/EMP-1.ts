import type { Exercise, Lesson } from '../../../types'

/**
 * FINCORE — Temario v2.0 · Emprendimiento, Administración y Estrategia · Nivel 1 (Básico)
 * EMP.1 a EMP.6: fundamentos de administración, introducción al emprendimiento, identificación de
 * oportunidades, modelos de negocio, Business Model Canvas e investigación de mercados.
 */

const NOTE_ADMIN = {
  es: "Contenido educativo. Los autores y modelos citados (Fayol, Taylor, el proceso administrativo) se presentan de forma general y simplificada; distintos libros los agrupan de manera un poco diferente. Las cifras de los ejemplos son hipotéticas.",
  en: "Educational content. The authors and models cited (Fayol, Taylor, the management process) are presented in a general, simplified way; different textbooks group them slightly differently. The figures in the examples are hypothetical.",
}

const NOTE_STARTUP = {
  es: "Contenido educativo. Los requisitos para abrir un negocio en México (inscripción ante el SAT, licencias municipales, permisos sanitarios, régimen fiscal) dependen de la actividad, del municipio y de la ley vigente. Las cifras de los ejemplos son hipotéticas: verifica los requisitos vigentes (2026) con las autoridades correspondientes.",
  en: "Educational content. The requirements to open a business in Mexico (registration with the SAT, municipal licenses, health permits, tax regime) depend on the activity, the municipality and current law. The figures in the examples are hypothetical: verify the current requirements (2026) with the relevant authorities.",
}

const NOTE_MODELS = {
  es: "Contenido educativo. Los modelos de negocio y las comisiones de los ejemplos son ilustrativos e hipotéticos; no describen a ninguna empresa real. Si cobras por internet o por plataformas digitales, revisa las obligaciones fiscales vigentes (2026) que te correspondan.",
  en: "Educational content. The business models and fees in the examples are illustrative and hypothetical; they do not describe any real company. If you charge online or through digital platforms, check the current tax obligations (2026) that apply to you.",
}

const NOTE_CANVAS = {
  es: "Contenido educativo. El Business Model Canvas fue propuesto por Alexander Osterwalder y popularizado en el libro Business Model Generation, escrito con Yves Pigneur. Es una herramienta de trabajo, no una norma. Las cifras de los ejemplos son hipotéticas.",
  en: "Educational content. The Business Model Canvas was proposed by Alexander Osterwalder and popularized in the book Business Model Generation, written with Yves Pigneur. It is a working tool, not a regulation. The figures in the examples are hypothetical.",
}

const NOTE_MARKET = {
  es: "Contenido educativo. El INEGI publica información estadística útil como fuente secundaria (censos, encuestas y directorios de negocios); verifica los datos y publicaciones vigentes (2026) en sus fuentes oficiales. Si recolectas datos personales en encuestas, revisa la ley de protección de datos personales vigente. Las cifras de los ejemplos son hipotéticas.",
  en: "Educational content. INEGI (Mexico's National Institute of Statistics and Geography) publishes statistical information useful as a secondary source (censuses, surveys and business directories); verify current data and publications (2026) with its official sources. If you collect personal data in surveys, check the current personal data protection law. The figures in the examples are hypothetical.",
}

export const lessons: Lesson[] = [
  // ───────────────────────────── EMP-01 ─────────────────────────────
  {
    id: 'EMP-01',
    level: 1,
    topicIds: ['EMP.1'],
    title: { es: "Fundamentos de administración", en: "Fundamentals of management" },
    summary: {
      es: "Administrar es coordinar personas y recursos para lograr metas con eficacia y eficiencia, siguiendo un ciclo de planear, organizar, dirigir y controlar.",
      en: "Managing means coordinating people and resources to reach goals effectively and efficiently, following a cycle of planning, organizing, leading and controlling.",
    },
    minutes: 16,
    objectives: [
      { es: "Explicar qué es la administración y distinguir eficacia de eficiencia.", en: "Explain what management is and distinguish effectiveness from efficiency." },
      { es: "Describir las cuatro etapas del proceso administrativo y reconocerlas en un negocio real.", en: "Describe the four stages of the management process and recognize them in a real business." },
      { es: "Identificar los niveles administrativos y las habilidades que necesita cada uno.", en: "Identify the levels of management and the skills each one needs." },
      { es: "Medir el cumplimiento de una meta comparando lo real contra lo planeado.", en: "Measure goal achievement by comparing actual results against the plan." },
    ],
    theory: [
      {
        heading: { es: "¿Qué es administrar?", en: "What does it mean to manage?" },
        body: [
          {
            es: "**Administrar** es lograr que un grupo de personas, con ciertos recursos (dinero, tiempo, materiales, equipo), alcance una meta. Lo hace la gerente de una fábrica, pero también la dueña de una fonda que organiza a sus dos ayudantes para servir 80 comidas antes de las tres de la tarde.",
            en: "**Managing** means getting a group of people, with certain resources (money, time, materials, equipment), to reach a goal. A factory manager does it, but so does the owner of a small diner who organizes her two helpers to serve 80 meals before three in the afternoon.",
          },
          {
            es: "Dos palabras se confunden mucho. **Eficacia** es lograr la meta: se sirvieron las 80 comidas. **Eficiencia** es lograrla gastando lo menos posible: se sirvieron sin tirar comida ni pagar horas extra. Un buen administrador busca las dos a la vez.",
            en: "Two words are often confused. **Effectiveness** is reaching the goal: the 80 meals were served. **Efficiency** is reaching it while spending as little as possible: they were served without wasting food or paying overtime. A good manager seeks both at once.",
          },
          {
            es: "La administración como disciplina tomó forma a inicios del siglo XX. **Frederick Taylor** estudió cómo hacer cada tarea de la manera más rápida y ordenada (administración científica). **Henri Fayol** miró a la empresa completa y propuso funciones y principios para dirigirla, como la **unidad de mando**: cada persona recibe órdenes de un solo jefe.",
            en: "Management as a discipline took shape in the early twentieth century. **Frederick Taylor** studied how to do each task in the fastest, most orderly way (scientific management). **Henri Fayol** looked at the whole company and proposed functions and principles to run it, such as **unity of command**: each person receives orders from only one boss.",
          },
          {
            es: "Mini ejemplo: dos taquerías venden 300 tacos el sábado (ambas son eficaces). Una usó 6 kg de carne y la otra 8 kg para la misma venta: la primera fue más eficiente.",
            en: "Mini example: two taco stands sell 300 tacos on Saturday (both are effective). One used 6 kg of meat and the other 8 kg for the same sales: the first was more efficient.",
          },
        ],
        bullets: [
          { es: "Eficacia: ¿logramos la meta?", en: "Effectiveness: did we reach the goal?" },
          { es: "Eficiencia: ¿cuántos recursos usamos para lograrla?", en: "Efficiency: how many resources did we use to reach it?" },
          { es: "Taylor: mejorar cada tarea paso a paso.", en: "Taylor: improve each task step by step." },
          { es: "Fayol: funciones y principios para dirigir toda la empresa.", en: "Fayol: functions and principles to run the whole company." },
        ],
      },
      {
        heading: { es: "El proceso administrativo", en: "The management process" },
        body: [
          {
            es: "Casi todos los libros resumen el trabajo de administrar en un ciclo de cuatro etapas. Se llama **proceso administrativo** y se repite una y otra vez: al terminar el control, lo aprendido se usa para planear mejor.",
            en: "Almost every textbook summarizes the work of managing in a four-stage cycle. It is called the **management process** and it repeats over and over: when control ends, what was learned is used to plan better.",
          },
          {
            es: "**Planear** es decidir qué quieres lograr y cómo. **Organizar** es repartir tareas, puestos y recursos. **Dirigir** es guiar y motivar a las personas mientras trabajan. **Controlar** es medir lo que pasó, compararlo con lo planeado y corregir.",
            en: "**Planning** is deciding what you want to achieve and how. **Organizing** is assigning tasks, roles and resources. **Leading** is guiding and motivating people while they work. **Controlling** is measuring what happened, comparing it with the plan and correcting.",
          },
          {
            es: "Mini ejemplo en una papelería en regreso a clases: la dueña fija la meta de vender $90,000 en agosto (planear), asigna a una persona a forrar cuadernos y a otra a la caja (organizar), las capacita y anima en los días pesados (dirigir) y cada viernes revisa cuánto lleva vendido (controlar).",
            en: "Mini example in a stationery store during back-to-school season: the owner sets a goal of selling $90,000 in August (planning), assigns one person to cover notebooks and another to the register (organizing), trains and encourages them on busy days (leading) and every Friday checks how much has been sold (controlling).",
          },
        ],
        bullets: [
          { es: "Planear: metas y caminos para llegar.", en: "Plan: goals and paths to reach them." },
          { es: "Organizar: quién hace qué y con qué.", en: "Organize: who does what and with what." },
          { es: "Dirigir: liderar, comunicar y motivar.", en: "Lead: guide, communicate and motivate." },
          { es: "Controlar: medir, comparar y corregir.", en: "Control: measure, compare and correct." },
        ],
        formulas: [
          {
            name: { es: "Porcentaje de cumplimiento de una meta", en: "Goal achievement percentage" },
            expression: "Cumplimiento (%) = Resultado real ÷ Meta × 100",
            variables: [
              { symbol: "Cumplimiento (%)", meaning: { es: "Qué parte de la meta lograste, en porcentaje.", en: "What share of the goal you reached, as a percentage." } },
              { symbol: "Resultado real", meaning: { es: "Lo que de verdad pasó: ventas en pesos, piezas producidas, clientes atendidos.", en: "What actually happened: sales in pesos, pieces produced, customers served." } },
              { symbol: "Meta", meaning: { es: "Lo que planeaste lograr, en la misma unidad que el resultado real.", en: "What you planned to achieve, in the same unit as the actual result." } },
            ],
            steps: [
              { es: "Anota la meta y el resultado real en la misma unidad (pesos con pesos, piezas con piezas).", en: "Write down the goal and the actual result in the same unit (pesos with pesos, pieces with pieces)." },
              { es: "Divide el resultado real entre la meta.", en: "Divide the actual result by the goal." },
              { es: "Multiplica por 100 para expresarlo en porcentaje.", en: "Multiply by 100 to express it as a percentage." },
            ],
            example: {
              es: "Una barbería se puso la meta de vender $40,000 en el mes y vendió $34,000. 34,000 ÷ 40,000 = 0.85. 0.85 × 100 = **85%**. Le faltó 100% − 85% = 15% de la meta.",
              en: "A barbershop set a goal of selling $40,000 in the month and sold $34,000. 34,000 ÷ 40,000 = 0.85. 0.85 × 100 = **85%**. It fell short by 100% − 85% = 15% of the goal.",
            },
            interpret: {
              es: "100% = cumpliste justo la meta. Más de 100% = la superaste. Menos de 100% = te faltó; busca la causa y úsala para planear mejor.",
              en: "100% = you hit the goal exactly. Over 100% = you beat it. Under 100% = you fell short; look for the cause and use it to plan better.",
            },
            mistake: {
              es: "Dividir al revés (meta ÷ resultado real). Daría más de 100% y parecería que superaste la meta cuando te faltó.",
              en: "Dividing the other way round (goal ÷ actual). It would give over 100% and look like you beat the goal when you fell short.",
            },
          },
        ],
      },
      {
        heading: { es: "Niveles y habilidades del administrador", en: "Levels and skills of a manager" },
        body: [
          {
            es: "En una empresa mediana hay tres **niveles administrativos**. El **nivel alto** (dirección general) decide el rumbo a varios años. El **nivel medio** (gerentes de área) convierte ese rumbo en planes por departamento. El **nivel operativo** (supervisores y jefes de turno) cuida el trabajo de todos los días.",
            en: "In a mid-sized company there are three **levels of management**. The **top level** (general management) sets the direction for several years. The **middle level** (department managers) turns that direction into plans for each department. The **operational level** (supervisors and shift leads) looks after day-to-day work.",
          },
          {
            es: "Cada nivel usa una mezcla distinta de habilidades: **técnicas** (saber hacer el trabajo, como manejar la máquina o la caja), **humanas** (tratar bien con la gente, resolver conflictos) y **conceptuales** (ver el panorama completo y pensar a futuro). Mientras más alto el puesto, más pesan las conceptuales; las humanas importan en todos.",
            en: "Each level uses a different mix of skills: **technical** (knowing how to do the work, like running the machine or the register), **human** (dealing well with people, solving conflicts) and **conceptual** (seeing the big picture and thinking ahead). The higher the position, the more conceptual skills matter; human skills matter at every level.",
          },
          {
            es: "Mini ejemplo en una cadena de farmacias: el director decide abrir en otra ciudad (conceptual), la gerente regional arma el plan de contratación (humana y conceptual) y la supervisora de sucursal enseña a usar el sistema de inventario (técnica).",
            en: "Mini example in a pharmacy chain: the director decides to open in another city (conceptual), the regional manager builds the hiring plan (human and conceptual) and the branch supervisor teaches how to use the inventory system (technical).",
          },
        ],
      },
    ],
    examples: [
      {
        title: { es: "¿Se cumplió la meta del vivero?", en: "Did the plant nursery meet its goal?" },
        problem: {
          es: "Un vivero planeó vender 1,200 plantas en primavera. Al final vendió 1,080. ¿Qué porcentaje de la meta cumplió y qué debe hacer después?",
          en: "A plant nursery planned to sell 1,200 plants in spring. In the end it sold 1,080. What percentage of the goal did it achieve and what should it do next?",
        },
        steps: [
          { es: "Identifica los datos: meta = 1,200; real = 1,080.", en: "Identify the data: goal = 1,200; actual = 1,080." },
          { es: "Aplica la fórmula: 1,080 ÷ 1,200 = 0.90.", en: "Apply the formula: 1,080 ÷ 1,200 = 0.90." },
          { es: "Multiplica por 100: 0.90 × 100 = 90%.", en: "Multiply by 100: 0.90 × 100 = 90%." },
          { es: "Controlar no termina en el número: busca la causa (por ejemplo, falta de una planta muy pedida) y úsala para planear la próxima temporada.", en: "Control does not end with the number: look for the cause (for example, a missing high-demand plant) and use it to plan next season." },
        ],
        result: {
          es: "Cumplió el 90% de la meta. La diferencia de 120 plantas es información para corregir en el siguiente ciclo.",
          en: "It achieved 90% of the goal. The 120-plant gap is information to correct in the next cycle.",
        },
      },
      {
        title: { es: "Eficacia contra eficiencia en dos panaderías", en: "Effectiveness versus efficiency in two bakeries" },
        problem: {
          es: "Dos panaderías tenían que hornear 500 piezas. La panadería A horneó 500 piezas con 40 kg de harina. La panadería B horneó 500 piezas con 50 kg. ¿Cuál fue eficaz y cuál más eficiente?",
          en: "Two bakeries had to bake 500 pieces. Bakery A baked 500 pieces with 40 kg of flour. Bakery B baked 500 pieces with 50 kg. Which one was effective and which one more efficient?",
        },
        steps: [
          { es: "Eficacia: ambas lograron las 500 piezas, así que ambas fueron eficaces.", en: "Effectiveness: both reached 500 pieces, so both were effective." },
          { es: "Harina por pieza en A: 40 ÷ 500 = 0.08 kg (80 g).", en: "Flour per piece at A: 40 ÷ 500 = 0.08 kg (80 g)." },
          { es: "Harina por pieza en B: 50 ÷ 500 = 0.10 kg (100 g).", en: "Flour per piece at B: 50 ÷ 500 = 0.10 kg (100 g)." },
          { es: "A usó menos recurso para el mismo resultado.", en: "A used fewer resources for the same result." },
        ],
        result: {
          es: "Las dos fueron eficaces; la panadería A fue más eficiente porque usó 20 g menos de harina por pieza.",
          en: "Both were effective; bakery A was more efficient because it used 20 g less flour per piece.",
        },
      },
    ],
    keyPoints: [
      { es: "Administrar es coordinar personas y recursos para alcanzar metas.", en: "Managing is coordinating people and resources to reach goals." },
      { es: "Eficacia es lograr la meta; eficiencia es lograrla con menos recursos.", en: "Effectiveness is reaching the goal; efficiency is reaching it with fewer resources." },
      { es: "El proceso administrativo es un ciclo: planear, organizar, dirigir y controlar.", en: "The management process is a cycle: plan, organize, lead and control." },
      { es: "Controlar es medir, comparar contra lo planeado y corregir.", en: "Controlling is measuring, comparing against the plan and correcting." },
      { es: "Niveles alto, medio y operativo usan distinta mezcla de habilidades técnicas, humanas y conceptuales.", en: "Top, middle and operational levels use a different mix of technical, human and conceptual skills." },
    ],
    normativeNote: NOTE_ADMIN,
    exerciseIds: ['EMP-01-E1', 'EMP-01-E2', 'EMP-01-E3', 'EMP-01-E4', 'EMP-01-E5', 'EMP-01-E6'],
  },

  // ───────────────────────────── EMP-02 ─────────────────────────────
  {
    id: 'EMP-02',
    level: 1,
    topicIds: ['EMP.2'],
    title: { es: "Introducción al emprendimiento", en: "Introduction to entrepreneurship" },
    summary: {
      es: "Emprender es crear algo nuevo que resuelva un problema y genere valor, asumiendo riesgos de forma calculada y aprendiendo rápido de los clientes.",
      en: "Entrepreneurship is creating something new that solves a problem and generates value, taking calculated risks and learning quickly from customers.",
    },
    minutes: 15,
    objectives: [
      { es: "Explicar qué es emprender y qué distingue a un emprendimiento de un empleo o de un pasatiempo.", en: "Explain what entrepreneurship is and what sets a venture apart from a job or a hobby." },
      { es: "Distinguir tipos de emprendimiento: por necesidad, por oportunidad, de estilo de vida, startup y social.", en: "Distinguish types of entrepreneurship: by necessity, by opportunity, lifestyle, startup and social." },
      { es: "Estimar la inversión inicial de un negocio pequeño, incluyendo un fondo de reserva.", en: "Estimate the startup investment of a small business, including a reserve fund." },
    ],
    theory: [
      {
        heading: { es: "¿Qué es emprender?", en: "What is entrepreneurship?" },
        body: [
          {
            es: "**Emprender** es poner en marcha un proyecto propio que ofrece algo a otras personas a cambio de un pago o de un beneficio. La persona que lo hace es el **emprendedor** o la emprendedora. No necesitas inventar algo nunca visto: abrir una lavandería en una colonia que no tiene ninguna también es emprender.",
            en: "**Entrepreneurship** is launching your own project that offers something to other people in exchange for payment or a benefit. The person who does it is the **entrepreneur**. You do not need to invent something never seen before: opening a laundromat in a neighborhood that has none is also entrepreneurship.",
          },
          {
            es: "La diferencia con un **empleo** es quién asume el **riesgo**: como empleado recibes un sueldo aunque el negocio venda poco; como emprendedor, si no vendes no cobras. La diferencia con un **pasatiempo** es la intención: hacer pasteles para tu familia es un pasatiempo; venderlos cada semana con precio, clientes y cuentas claras ya es un negocio.",
            en: "The difference from a **job** is who takes the **risk**: as an employee you get a salary even if the business sells little; as an entrepreneur, if you do not sell you do not get paid. The difference from a **hobby** is intent: baking cakes for your family is a hobby; selling them every week with prices, customers and clear accounts is already a business.",
          },
          {
            es: "Mini ejemplo: Luis repara bicicletas de sus vecinos gratis los domingos (pasatiempo). Cuando renta un local, fija precios y lleva un registro de ingresos y gastos, se convierte en un emprendimiento.",
            en: "Mini example: Luis fixes his neighbors' bikes for free on Sundays (hobby). When he rents a space, sets prices and keeps a record of income and expenses, it becomes a venture.",
          },
        ],
      },
      {
        heading: { es: "Tipos de emprendimiento", en: "Types of entrepreneurship" },
        body: [
          {
            es: "Según el **motivo**, hay emprendimiento **por necesidad** (no encuentras empleo y vendes comida para tener ingresos) y **por oportunidad** (detectas algo que la gente quiere y decides aprovecharlo aunque tengas otras opciones). Ambos son válidos; el segundo suele planearse con más calma.",
            en: "By **motive**, there is entrepreneurship **by necessity** (you cannot find a job and sell food to have an income) and **by opportunity** (you spot something people want and decide to seize it even though you have other options). Both are valid; the second is usually planned more calmly.",
          },
          {
            es: "Según la **ambición de crecimiento**: el negocio **de estilo de vida** busca un ingreso estable para su dueño (una estética de barrio). Una **startup** es una empresa joven que busca un modelo que pueda crecer muy rápido, muchas veces con tecnología. El **emprendimiento social** pone como meta principal resolver un problema social o ambiental, sin dejar de cuidar que sus números funcionen.",
            en: "By **growth ambition**: a **lifestyle** business seeks a stable income for its owner (a neighborhood hair salon). A **startup** is a young company searching for a model that can grow very fast, often with technology. **Social entrepreneurship** makes solving a social or environmental problem its main goal, while still making sure its numbers work.",
          },
          {
            es: "Mini ejemplo: una app para reservar canchas de fútbol en todo el país es una startup; una cancha de fútbol rápido en tu colonia es un negocio de estilo de vida; una cooperativa que recicla plástico y emplea a madres solteras es un emprendimiento social.",
            en: "Mini example: an app to book soccer fields across the country is a startup; a five-a-side soccer field in your neighborhood is a lifestyle business; a cooperative that recycles plastic and employs single mothers is a social venture.",
          },
        ],
        bullets: [
          { es: "Por necesidad: emprender para generar un ingreso que falta.", en: "By necessity: starting a business to generate missing income." },
          { es: "Por oportunidad: emprender porque detectas una demanda.", en: "By opportunity: starting because you spot a demand." },
          { es: "Estilo de vida: ingreso estable, crecimiento moderado.", en: "Lifestyle: stable income, moderate growth." },
          { es: "Startup: busca crecer rápido con un modelo repetible.", en: "Startup: seeks fast growth with a repeatable model." },
          { es: "Social: el impacto social o ambiental es la meta principal.", en: "Social: social or environmental impact is the main goal." },
        ],
      },
      {
        heading: { es: "Mentalidad y primeros pasos", en: "Mindset and first steps" },
        body: [
          {
            es: "Emprender no es apostar todo a ciegas. El buen emprendedor toma **riesgos calculados**: prueba en pequeño antes de invertir en grande. Por ejemplo, vende 20 pasteles por pedido entre conocidos antes de rentar un local.",
            en: "Entrepreneurship is not betting everything blindly. A good entrepreneur takes **calculated risks**: tests small before investing big. For example, selling 20 cakes to order among acquaintances before renting a shop.",
          },
          {
            es: "Antes de arrancar conviene calcular la **inversión inicial**: todo lo que necesitas pagar antes de recibir tu primer peso de venta (equipo, primeros insumos, trámites) más un **fondo de reserva** para cubrir los gastos fijos de los primeros meses, cuando las ventas todavía son bajas.",
            en: "Before starting, it helps to compute the **startup investment**: everything you need to pay before receiving your first peso of sales (equipment, first supplies, paperwork) plus a **reserve fund** to cover the fixed expenses of the first months, when sales are still low.",
          },
          {
            es: "También ayuda separar desde el día uno el dinero del negocio y el personal, y aprender de cada error. Mini ejemplo: Sofía quiere vender aguas frescas; compra un despachador de $3,000 y $800 de fruta y vasos, y aparta $2,400 para cubrir tres meses de un permiso de $800 al mes (cifras hipotéticas). Su inversión inicial es $3,000 + $800 + $2,400 = $6,200.",
            en: "It also helps to separate business and personal money from day one, and to learn from each mistake. Mini example: Sofía wants to sell aguas frescas (fruit drinks); she buys a $3,000 dispenser and $800 of fruit and cups, and sets aside $2,400 to cover three months of an $800-a-month permit (hypothetical figures). Her startup investment is $3,000 + $800 + $2,400 = $6,200.",
          },
        ],
        formulas: [
          {
            name: { es: "Inversión inicial y cuánto te falta", en: "Startup investment and how much you are short" },
            expression: "Inversión inicial = Equipo + Insumos iniciales + Trámites + Fondo de reserva;  Fondo de reserva = Meses × Gastos fijos al mes;  Te falta = Inversión inicial − Ahorros",
            variables: [
              { symbol: "Inversión inicial", meaning: { es: "Todo el dinero que necesitas antes de vender, en pesos.", en: "All the money you need before selling, in pesos." } },
              { symbol: "Equipo", meaning: { es: "Lo que compras una vez y te dura: máquinas, muebles, herramientas, en pesos.", en: "What you buy once and lasts: machines, furniture, tools, in pesos." } },
              { symbol: "Insumos iniciales", meaning: { es: "La primera compra de materiales o mercancía para empezar a vender, en pesos.", en: "The first purchase of materials or goods to start selling, in pesos." } },
              { symbol: "Trámites", meaning: { es: "Permisos, licencias y registros para abrir, en pesos.", en: "Permits, licenses and registrations to open, in pesos." } },
              { symbol: "Fondo de reserva", meaning: { es: "Un colchón de dinero para pagar los gastos fijos mientras las ventas crecen, en pesos.", en: "A cushion of money to pay fixed expenses while sales grow, in pesos." } },
              { symbol: "Meses", meaning: { es: "Cuántos meses quieres tener cubiertos con el fondo (por ejemplo, 3).", en: "How many months you want the fund to cover (for example, 3)." } },
              { symbol: "Gastos fijos al mes", meaning: { es: "Lo que pagas cada mes aunque no vendas: renta, permisos, luz, en pesos.", en: "What you pay each month even if you do not sell: rent, permits, electricity, in pesos." } },
              { symbol: "Ahorros", meaning: { es: "El dinero que ya tienes para invertir, en pesos.", en: "The money you already have to invest, in pesos." } },
              { symbol: "Te falta", meaning: { es: "Lo que tendrías que conseguir (préstamo, socio, más ahorro), en pesos.", en: "What you would need to raise (loan, partner, more savings), in pesos." } },
            ],
            steps: [
              { es: "Suma todo el equipo.", en: "Add up all the equipment." },
              { es: "Calcula el fondo de reserva: meses × gastos fijos al mes.", en: "Compute the reserve fund: months × fixed expenses per month." },
              { es: "Suma equipo + insumos iniciales + trámites + fondo de reserva: es la inversión inicial.", en: "Add equipment + initial supplies + paperwork + reserve fund: that is the startup investment." },
              { es: "Resta tus ahorros: si sale positivo, eso es lo que te falta.", en: "Subtract your savings: if positive, that is what you are short." },
            ],
            example: {
              es: "Un puesto de hamburguesas: carrito $12,000 + plancha $3,000 = equipo $15,000. Insumos $2,000, trámites $1,000. Reserva = 3 × $2,500 = $7,500. Inversión inicial = 15,000 + 2,000 + 1,000 + 7,500 = **$25,500**. Con $20,000 ahorrados, le falta 25,500 − 20,000 = **$5,500**.",
              en: "A burger stand: cart $12,000 + griddle $3,000 = equipment $15,000. Supplies $2,000, paperwork $1,000. Reserve = 3 × $2,500 = $7,500. Startup investment = 15,000 + 2,000 + 1,000 + 7,500 = **$25,500**. With $20,000 saved, it is short 25,500 − 20,000 = **$5,500**.",
            },
            mistake: {
              es: "Olvidar el fondo de reserva y contar solo el equipo y los insumos. Los primeros meses casi siempre se vende poco.",
              en: "Forgetting the reserve fund and counting only equipment and supplies. Sales are almost always low in the first months.",
            },
          },
        ],
      },
    ],
    examples: [
      {
        title: { es: "Inversión inicial de una estética de barrio", en: "Startup investment for a neighborhood hair salon" },
        problem: {
          es: "Paola abrirá una estética. Necesita: 2 sillones a $6,500 cada uno, secadoras y planchas por $5,000, productos iniciales por $4,000, trámites por $1,500 y un fondo de reserva de 3 meses de gastos fijos de $7,000 al mes (renta y luz). ¿Cuál es su inversión inicial? (cifras hipotéticas)",
          en: "Paola will open a hair salon. She needs: 2 chairs at $6,500 each, dryers and straighteners for $5,000, initial products for $4,000, paperwork for $1,500 and a reserve fund of 3 months of fixed expenses of $7,000 a month (rent and electricity). What is her startup investment? (hypothetical figures)",
        },
        steps: [
          { es: "Equipo: 2 × $6,500 + $5,000 = $13,000 + $5,000 = $18,000.", en: "Equipment: 2 × $6,500 + $5,000 = $13,000 + $5,000 = $18,000." },
          { es: "Insumos y trámites: $4,000 + $1,500 = $5,500.", en: "Supplies and paperwork: $4,000 + $1,500 = $5,500." },
          { es: "Fondo de reserva: 3 × $7,000 = $21,000.", en: "Reserve fund: 3 × $7,000 = $21,000." },
          { es: "Suma todo: $18,000 + $5,500 + $21,000 = $44,500.", en: "Add everything: $18,000 + $5,500 + $21,000 = $44,500." },
        ],
        result: {
          es: "Paola necesita $44,500. Casi la mitad es el fondo de reserva: sin él, un par de meses flojos podrían obligarla a cerrar.",
          en: "Paola needs $44,500. Almost half is the reserve fund: without it, a couple of slow months could force her to close.",
        },
      },
      {
        title: { es: "¿Qué tipo de emprendimiento es?", en: "What type of venture is it?" },
        problem: {
          es: "Clasifica tres casos: (1) Raúl perdió su empleo y empieza a vender tamales para pagar la renta; (2) Ana ve que en su ciudad no hay quien repare celulares en domicilio y deja su trabajo para crear ese servicio con una app que quiere llevar a otras ciudades; (3) Marta crea un taller que capacita a jóvenes en carpintería y vende los muebles que hacen.",
          en: "Classify three cases: (1) Raúl lost his job and starts selling tamales to pay the rent; (2) Ana sees that nobody in her city repairs phones at home and leaves her job to create that service with an app she wants to take to other cities; (3) Marta creates a workshop that trains young people in carpentry and sells the furniture they make.",
        },
        steps: [
          { es: "Caso 1: el motivo es cubrir un ingreso que falta, así que es por necesidad.", en: "Case 1: the motive is to cover missing income, so it is by necessity." },
          { es: "Caso 2: detecta una demanda y busca crecer a otras ciudades con tecnología: por oportunidad y con perfil de startup.", en: "Case 2: she spots a demand and wants to grow to other cities with technology: by opportunity and with a startup profile." },
          { es: "Caso 3: su meta principal es capacitar a jóvenes, y la venta de muebles la sostiene: emprendimiento social.", en: "Case 3: its main goal is training young people, and furniture sales sustain it: social entrepreneurship." },
        ],
        result: {
          es: "(1) Por necesidad, (2) por oportunidad tipo startup y (3) social. Un mismo negocio puede encajar en más de una clasificación.",
          en: "(1) By necessity, (2) by opportunity, startup-type and (3) social. One business can fit more than one classification.",
        },
      },
    ],
    keyPoints: [
      { es: "Emprender es crear un proyecto propio que ofrece valor a cambio de un pago o beneficio.", en: "Entrepreneurship is creating your own project that offers value in exchange for payment or a benefit." },
      { es: "El emprendedor asume el riesgo: si no vende, no cobra.", en: "The entrepreneur takes the risk: if they do not sell, they do not get paid." },
      { es: "Hay emprendimientos por necesidad y por oportunidad; de estilo de vida, startups y sociales.", en: "There are ventures by necessity and by opportunity; lifestyle, startups and social ones." },
      { es: "Riesgo calculado: probar en pequeño antes de invertir en grande.", en: "Calculated risk: test small before investing big." },
      { es: "La inversión inicial incluye un fondo de reserva para los primeros meses.", en: "The startup investment includes a reserve fund for the first months." },
    ],
    normativeNote: NOTE_STARTUP,
    exerciseIds: ['EMP-02-E1', 'EMP-02-E2', 'EMP-02-E3', 'EMP-02-E4', 'EMP-02-E5', 'EMP-02-E6'],
  },

  // ───────────────────────────── EMP-03 ─────────────────────────────
  {
    id: 'EMP-03',
    level: 1,
    topicIds: ['EMP.3'],
    title: { es: "Identificación de oportunidades de negocio", en: "Identifying business opportunities" },
    summary: {
      es: "Una oportunidad de negocio es un problema real que suficientes personas quieren resolver y están dispuestas a pagar; se encuentra observando y se elige comparando con criterios claros.",
      en: "A business opportunity is a real problem that enough people want solved and are willing to pay for; you find it by observing and choose it by comparing with clear criteria.",
    },
    minutes: 15,
    objectives: [
      { es: "Distinguir entre una idea de negocio y una oportunidad de negocio.", en: "Distinguish between a business idea and a business opportunity." },
      { es: "Reconocer fuentes de oportunidades: problemas, cambios y tendencias, y habilidades propias.", en: "Recognize sources of opportunities: problems, changes and trends, and your own skills." },
      { es: "Comparar varias ideas con una matriz de puntuación ponderada.", en: "Compare several ideas with a weighted scoring matrix." },
    ],
    theory: [
      {
        heading: { es: "Idea contra oportunidad", en: "Idea versus opportunity" },
        body: [
          {
            es: "Una **idea** es algo que se te ocurre: \"vender tortas de chilaquiles\". Una **oportunidad** es una idea que además cumple tres condiciones: resuelve un **problema o deseo real**, hay **suficientes personas** que lo tienen y esas personas están **dispuestas a pagar** por la solución.",
            en: "An **idea** is something that occurs to you: \"selling chilaquiles sandwiches\". An **opportunity** is an idea that also meets three conditions: it solves a **real problem or desire**, there are **enough people** who have it, and those people are **willing to pay** for the solution.",
          },
          {
            es: "Un error común es enamorarse de la solución antes de entender el problema. Pregúntate primero: ¿a quién le duele esto?, ¿cómo lo resuelve hoy?, ¿qué tan seguido le pasa? Si la gente ya lo resuelve bien y barato, la oportunidad es pequeña.",
            en: "A common mistake is falling in love with the solution before understanding the problem. First ask yourself: who is hurting from this?, how do they solve it today?, how often does it happen? If people already solve it well and cheaply, the opportunity is small.",
          },
          {
            es: "Mini ejemplo: \"una app para pedir tortillas\" es una idea. Si observas que en tu fraccionamiento la tortillería más cercana está a 3 km y muchas familias trabajan todo el día, y 30 vecinos te dicen que pagarían el envío, empieza a parecer una oportunidad.",
            en: "Mini example: \"an app to order tortillas\" is an idea. If you notice that in your housing development the nearest tortillería is 3 km away, many families work all day, and 30 neighbors tell you they would pay for delivery, it starts to look like an opportunity.",
          },
        ],
        bullets: [
          { es: "Problema o deseo real.", en: "A real problem or desire." },
          { es: "Suficientes personas que lo tienen.", en: "Enough people who have it." },
          { es: "Disposición a pagar por la solución.", en: "Willingness to pay for the solution." },
          { es: "Que tú puedas ofrecer la solución con tus recursos.", en: "That you can offer the solution with your resources." },
        ],
      },
      {
        heading: { es: "Dónde buscar oportunidades", en: "Where to look for opportunities" },
        body: [
          {
            es: "Las oportunidades suelen aparecer en tres lugares. Primero, en los **problemas y molestias** diarios: filas largas, servicios impuntuales, productos difíciles de conseguir. Cada queja que escuchas puede ser una pista.",
            en: "Opportunities usually show up in three places. First, in everyday **problems and annoyances**: long lines, late services, hard-to-find products. Every complaint you hear can be a clue.",
          },
          {
            es: "Segundo, en los **cambios y tendencias**: nuevas tecnologías, cambios en cómo vive la gente (más personas con mascotas, más trabajo desde casa), nuevas reglas o cambios en la población de una zona. Tercero, en **tus propias habilidades y contactos**: lo que sabes hacer bien y la gente que conoces te da ventaja frente a otros.",
            en: "Second, in **changes and trends**: new technologies, changes in how people live (more people with pets, more work from home), new rules or changes in an area's population. Third, in **your own skills and contacts**: what you do well and the people you know give you an edge over others.",
          },
          {
            es: "Mini ejemplo: en una colonia se construyen tres edificios de departamentos pequeños (cambio). Llegan muchas personas que viven solas y trabajan desde casa (tendencia). Una cocinera con experiencia (habilidad) ve la oportunidad de vender comida casera por porción con entrega a domicilio.",
            en: "Mini example: three buildings of small apartments are built in a neighborhood (change). Many people who live alone and work from home arrive (trend). An experienced cook (skill) sees the opportunity to sell home-style food by the portion with home delivery.",
          },
        ],
      },
      {
        heading: { es: "Cómo comparar y elegir", en: "How to compare and choose" },
        body: [
          {
            es: "Cuando tienes varias ideas, una herramienta sencilla es la **matriz de puntuación ponderada**. Eliges criterios (tamaño del problema, tu experiencia, inversión necesaria, competencia), les das un **peso** según su importancia (que sumen 100%) y calificas cada idea del 1 al 10 en cada criterio.",
            en: "When you have several ideas, a simple tool is the **weighted scoring matrix**. You choose criteria (size of the problem, your experience, investment needed, competition), give each a **weight** according to its importance (adding up to 100%) and score each idea from 1 to 10 on each criterion.",
          },
          {
            es: "Luego multiplicas cada calificación por su peso y sumas. La idea con mayor puntaje es la mejor candidata **para investigar primero**, no una garantía de éxito. En criterios negativos como la inversión, califica más alto cuando la inversión es **menor**.",
            en: "Then you multiply each score by its weight and add. The idea with the highest score is the best candidate **to research first**, not a guarantee of success. For negative criteria such as investment, give a higher score when the investment is **lower**.",
          },
          {
            es: "Mini ejemplo con pesos de 50% (problema) y 50% (experiencia): una idea con 8 y 4 obtiene 0.5 × 8 + 0.5 × 4 = 6; otra con 6 y 9 obtiene 0.5 × 6 + 0.5 × 9 = 7.5. La segunda va primero.",
            en: "Mini example with weights of 50% (problem) and 50% (experience): an idea with 8 and 4 scores 0.5 × 8 + 0.5 × 4 = 6; another with 6 and 9 scores 0.5 × 6 + 0.5 × 9 = 7.5. The second goes first.",
          },
        ],
        formulas: [
          {
            name: { es: "Puntaje ponderado de una idea", en: "Weighted score of an idea" },
            expression: "Puntaje = Σ (Peso del criterio × Calificación)",
            variables: [
              { symbol: "Puntaje", meaning: { es: "La nota final de la idea, en la misma escala de 1 a 10.", en: "The idea's final score, on the same 1-to-10 scale." } },
              { symbol: "Σ", meaning: { es: "Letra griega sigma: significa \"suma todos los resultados\".", en: "Greek letter sigma: it means \"add up all the results\"." } },
              { symbol: "Peso del criterio", meaning: { es: "Qué tan importante es ese criterio, en porcentaje convertido a decimal (40% = 0.40). Todos los pesos suman 100%.", en: "How important that criterion is, as a percentage turned into a decimal (40% = 0.40). All weights add up to 100%." } },
              { symbol: "Calificación", meaning: { es: "La nota que le das a la idea en ese criterio, del 1 al 10.", en: "The score you give the idea on that criterion, from 1 to 10." } },
            ],
            steps: [
              { es: "Revisa que los pesos sumen 100% y conviértelos a decimal: 40% = 0.40.", en: "Check that the weights add up to 100% and turn them into decimals: 40% = 0.40." },
              { es: "Multiplica cada calificación por el peso de su criterio.", en: "Multiply each score by its criterion's weight." },
              { es: "Suma todos esos productos: es el puntaje de la idea.", en: "Add all those products: that is the idea's score." },
              { es: "Repite con cada idea y compáralas: la de mayor puntaje se investiga primero.", en: "Repeat for each idea and compare them: the highest score gets researched first." },
            ],
            example: {
              es: "Pesos: problema 50%, experiencia 30%, inversión 20%. Una idea de food truck saca 7, 6 y 4. Puntaje = 0.50 × 7 + 0.30 × 6 + 0.20 × 4 = 3.5 + 1.8 + 0.8 = **6.1**.",
              en: "Weights: problem 50%, experience 30%, investment 20%. A food truck idea scores 7, 6 and 4. Score = 0.50 × 7 + 0.30 × 6 + 0.20 × 4 = 3.5 + 1.8 + 0.8 = **6.1**.",
            },
            interpret: {
              es: "Más alto = mejor candidata para investigar primero. No garantiza el éxito: solo ordena tus opciones.",
              en: "Higher = better candidate to research first. It does not guarantee success: it only ranks your options.",
            },
            mistake: {
              es: "Sacar un promedio simple de las calificaciones, como si todos los criterios pesaran igual.",
              en: "Taking a simple average of the scores, as if every criterion weighed the same.",
            },
          },
        ],
      },
    ],
    examples: [
      {
        title: { es: "Elegir entre tres ideas", en: "Choosing among three ideas" },
        problem: {
          es: "Jorge compara tres ideas con estos pesos: problema 40%, experiencia 30%, inversión (10 = muy baja) 30%. Calificaciones: lavado de autos a domicilio 7, 8, 6; cafetería 6, 5, 3; clases de guitarra en línea 5, 9, 9. ¿Cuál conviene investigar primero?",
          en: "Jorge compares three ideas with these weights: problem 40%, experience 30%, investment (10 = very low) 30%. Scores: mobile car wash 7, 8, 6; coffee shop 6, 5, 3; online guitar lessons 5, 9, 9. Which should he research first?",
        },
        steps: [
          { es: "Lavado: 0.4 × 7 + 0.3 × 8 + 0.3 × 6 = 2.8 + 2.4 + 1.8 = 7.0.", en: "Car wash: 0.4 × 7 + 0.3 × 8 + 0.3 × 6 = 2.8 + 2.4 + 1.8 = 7.0." },
          { es: "Cafetería: 0.4 × 6 + 0.3 × 5 + 0.3 × 3 = 2.4 + 1.5 + 0.9 = 4.8.", en: "Coffee shop: 0.4 × 6 + 0.3 × 5 + 0.3 × 3 = 2.4 + 1.5 + 0.9 = 4.8." },
          { es: "Guitarra: 0.4 × 5 + 0.3 × 9 + 0.3 × 9 = 2.0 + 2.7 + 2.7 = 7.4.", en: "Guitar: 0.4 × 5 + 0.3 × 9 + 0.3 × 9 = 2.0 + 2.7 + 2.7 = 7.4." },
          { es: "Ordena: guitarra 7.4, lavado 7.0, cafetería 4.8.", en: "Rank: guitar 7.4, car wash 7.0, coffee shop 4.8." },
        ],
        result: {
          es: "Las clases de guitarra en línea (7.4) van primero; el lavado (7.0) queda muy cerca, así que vale la pena investigar ambas antes de decidir.",
          en: "Online guitar lessons (7.4) go first; the car wash (7.0) is very close, so it is worth researching both before deciding.",
        },
      },
      {
        title: { es: "De la queja a la oportunidad", en: "From complaint to opportunity" },
        problem: {
          es: "En un grupo de mensajes de una escuela, varios papás se quejan de que no encuentran quién cuide a sus hijos de 2 a 6 de la tarde. Analiza si es una oportunidad.",
          en: "In a school messaging group, several parents complain that they cannot find anyone to look after their children from 2 to 6 in the afternoon. Analyze whether it is an opportunity.",
        },
        steps: [
          { es: "¿Problema real? Sí: los papás trabajan y la escuela termina a las 2.", en: "Real problem? Yes: parents work and school ends at 2." },
          { es: "¿Suficientes personas? Cuenta cuántas familias lo mencionan y pregunta en otras escuelas cercanas.", en: "Enough people? Count how many families mention it and ask at other nearby schools." },
          { es: "¿Disposición a pagar? Pregunta cuánto pagan hoy (abuelos, vecinas) y cuánto pagarían por un lugar seguro con ayuda en tareas.", en: "Willingness to pay? Ask what they pay today (grandparents, neighbors) and what they would pay for a safe place with homework help." },
          { es: "¿Puedes ofrecerlo? Revisa si tienes espacio, experiencia con niños y los permisos que exija tu municipio.", en: "Can you offer it? Check whether you have space, experience with children and the permits your municipality requires." },
        ],
        result: {
          es: "Hay señales de oportunidad (problema frecuente y gente que lo menciona), pero falta confirmar cuántos pagarían y cuánto. El siguiente paso es investigar el mercado.",
          en: "There are signs of an opportunity (a frequent problem and people mentioning it), but it still needs confirming how many would pay and how much. The next step is market research.",
        },
      },
    ],
    keyPoints: [
      { es: "Una oportunidad es una idea con problema real, suficientes personas y disposición a pagar.", en: "An opportunity is an idea with a real problem, enough people and willingness to pay." },
      { es: "Primero entiende el problema; después diseña la solución.", en: "First understand the problem; then design the solution." },
      { es: "Busca en molestias diarias, cambios y tendencias, y en tus habilidades y contactos.", en: "Look in daily annoyances, changes and trends, and in your skills and contacts." },
      { es: "La matriz ponderada ayuda a comparar ideas con criterios claros.", en: "The weighted matrix helps compare ideas with clear criteria." },
      { es: "El mejor puntaje indica qué investigar primero, no garantiza el éxito.", en: "The best score shows what to research first; it does not guarantee success." },
    ],
    exerciseIds: ['EMP-03-E1', 'EMP-03-E2', 'EMP-03-E3', 'EMP-03-E4', 'EMP-03-E5', 'EMP-03-E6'],
  },

  // ───────────────────────────── EMP-04 ─────────────────────────────
  {
    id: 'EMP-04',
    level: 1,
    topicIds: ['EMP.4'],
    title: { es: "Modelos de negocio", en: "Business models" },
    summary: {
      es: "Un modelo de negocio explica cómo una empresa crea valor para sus clientes, cómo se lo entrega y cómo gana dinero con ello.",
      en: "A business model explains how a company creates value for its customers, how it delivers it and how it makes money from it.",
    },
    minutes: 17,
    objectives: [
      { es: "Explicar qué es un modelo de negocio y sus tres preguntas: crear, entregar y capturar valor.", en: "Explain what a business model is and its three questions: create, deliver and capture value." },
      { es: "Reconocer modelos comunes: venta directa, suscripción, freemium, plataforma o marketplace y franquicia.", en: "Recognize common models: direct sales, subscription, freemium, platform or marketplace, and franchise." },
      { es: "Calcular ingresos sencillos de un modelo de suscripción, freemium o comisión.", en: "Compute simple revenues for a subscription, freemium or commission model." },
    ],
    theory: [
      {
        heading: { es: "Crear, entregar y capturar valor", en: "Create, deliver and capture value" },
        body: [
          {
            es: "Un **modelo de negocio** es la \"receta\" de cómo funciona una empresa. Responde tres preguntas: **¿qué valor creo?** (qué problema resuelvo y para quién), **¿cómo lo entrego?** (por qué canal llega al cliente) y **¿cómo capturo valor?** (cómo cobro y cuánto me queda después de mis costos).",
            en: "A **business model** is the \"recipe\" for how a company works. It answers three questions: **what value do I create?** (what problem I solve and for whom), **how do I deliver it?** (through what channel it reaches the customer) and **how do I capture value?** (how I charge and how much is left after my costs).",
          },
          {
            es: "Dos negocios pueden vender lo mismo con modelos distintos. Una lavandería de autoservicio cobra por cada carga; otra ofrece recoger y entregar la ropa por una cuota mensual. El producto (ropa limpia) es parecido, pero cambia cómo se entrega y cómo se cobra.",
            en: "Two businesses can sell the same thing with different models. A self-service laundromat charges per load; another offers to pick up and drop off clothes for a monthly fee. The product (clean clothes) is similar, but how it is delivered and charged changes.",
          },
          {
            es: "Mini ejemplo: una tienda de abarrotes crea valor con cercanía (no tienes que ir al súper), lo entrega en el mostrador y a domicilio por mensaje, y captura valor con el margen entre lo que paga al proveedor y el precio de venta.",
            en: "Mini example: a corner grocery store creates value through proximity (you do not have to go to the supermarket), delivers it at the counter and by message-order delivery, and captures value through the margin between what it pays the supplier and the selling price.",
          },
        ],
        bullets: [
          { es: "Crear valor: problema que resuelves y para quién.", en: "Create value: the problem you solve and for whom." },
          { es: "Entregar valor: canal y forma en que llega al cliente.", en: "Deliver value: the channel and way it reaches the customer." },
          { es: "Capturar valor: cómo cobras y cuánto te queda.", en: "Capture value: how you charge and what you keep." },
        ],
      },
      {
        heading: { es: "Modelos comunes", en: "Common models" },
        body: [
          {
            es: "**Venta directa**: vendes un producto o servicio y cobras cada vez (una paletería). **Suscripción**: el cliente paga una cuota fija cada periodo para usar algo (un gimnasio o una caja mensual de café). **Freemium**: ofreces una versión básica gratis y cobras por una versión con más funciones; solo una parte de los usuarios gratuitos se pasa a la de pago.",
            en: "**Direct sales**: you sell a product or service and charge each time (an ice pop shop). **Subscription**: the customer pays a fixed fee each period to use something (a gym or a monthly coffee box). **Freemium**: you offer a basic version for free and charge for a version with more features; only a share of free users move to the paid one.",
          },
          {
            es: "**Plataforma o marketplace**: conectas a quienes venden con quienes compran y cobras una **comisión** por cada venta (un sitio que une artesanos con compradores). **Franquicia**: un dueño de marca permite a otros abrir negocios con su nombre y su forma de trabajar a cambio de pagos iniciales y periódicos.",
            en: "**Platform or marketplace**: you connect sellers with buyers and charge a **commission** on each sale (a site that connects artisans with buyers). **Franchise**: a brand owner lets others open businesses under its name and way of working in exchange for initial and periodic payments.",
          },
          {
            es: "Mini ejemplo: una nutrióloga puede cobrar por consulta (venta directa), ofrecer un plan mensual con seguimiento semanal (suscripción) o una app con recetas gratis y planes personalizados de pago (freemium).",
            en: "Mini example: a nutritionist can charge per consultation (direct sales), offer a monthly plan with weekly follow-up (subscription) or an app with free recipes and paid personalized plans (freemium).",
          },
        ],
        formulas: [
          {
            name: { es: "Ingreso de una plataforma por comisión", en: "A platform's commission revenue" },
            expression: "Ingreso por comisión = Ventas que pasan por la plataforma × % de comisión",
            variables: [
              { symbol: "Ingreso por comisión", meaning: { es: "Lo que gana la plataforma, en pesos. Es solo su parte, no todo lo vendido.", en: "What the platform earns, in pesos. It is only its share, not everything sold." } },
              { symbol: "Ventas que pasan por la plataforma", meaning: { es: "Todo lo que pagan los compradores a través de la plataforma, en pesos.", en: "Everything buyers pay through the platform, in pesos." } },
              { symbol: "% de comisión", meaning: { es: "La parte de cada venta que se queda la plataforma, en porcentaje (conviértelo a decimal: 15% = 0.15).", en: "The share of each sale the platform keeps, as a percentage (turn it into a decimal: 15% = 0.15)." } },
            ],
            steps: [
              { es: "Convierte la comisión a decimal: 18% = 0.18.", en: "Turn the commission into a decimal: 18% = 0.18." },
              { es: "Multiplica las ventas totales por ese decimal: es el ingreso de la plataforma.", en: "Multiply total sales by that decimal: that is the platform's revenue." },
              { es: "Si quieres saber lo que reciben los vendedores, resta: ventas − comisión.", en: "To know what sellers receive, subtract: sales − commission." },
            ],
            example: {
              es: "Una plataforma de comida casera cobra 18% de comisión. En el mes se venden $50,000. Comisión = 50,000 × 0.18 = **$9,000**. Las cocineras reciben 50,000 − 9,000 = $41,000.",
              en: "A home-cooked food platform charges an 18% commission. $50,000 is sold in the month. Commission = 50,000 × 0.18 = **$9,000**. The cooks receive 50,000 − 9,000 = $41,000.",
            },
            mistake: {
              es: "Reportar todo lo vendido como ingreso de la plataforma. Ese dinero es de los vendedores; la plataforma solo gana su comisión.",
              en: "Reporting everything sold as the platform's revenue. That money belongs to the sellers; the platform only earns its commission.",
            },
          },
        ],
      },
      {
        heading: { es: "Cómo elegir y probar un modelo", en: "How to choose and test a model" },
        body: [
          {
            es: "No hay un modelo \"mejor\". Conviene el que encaja con **cómo compra tu cliente** y con **tus costos**. Si tus clientes usan el servicio cada semana, una suscripción da ingresos más estables. Si compran pocas veces al año, la venta directa suele ser más natural.",
            en: "There is no \"best\" model. The right one fits **how your customer buys** and **your costs**. If your customers use the service every week, a subscription gives steadier income. If they buy a few times a year, direct sales are usually more natural.",
          },
          {
            es: "En el freemium cuida el **porcentaje de conversión**: de cada 100 usuarios gratis, ¿cuántos pagan? Si son muy pocos, los ingresos no alcanzan para sostener a los gratuitos. En un marketplace, el reto es atraer a **los dos lados** (vendedores y compradores) al mismo tiempo.",
            en: "In freemium, watch the **conversion rate**: out of every 100 free users, how many pay? If too few do, revenue is not enough to support the free ones. In a marketplace, the challenge is attracting **both sides** (sellers and buyers) at the same time.",
          },
          {
            es: "Mini ejemplo: una maestra de inglés tiene 40 alumnos que pagan $250 por clase suelta, 4 clases al mes en promedio: $250 × 4 × 40 = $40,000 al mes. Prueba un paquete mensual de $900 por 4 clases; si todos lo toman, recibe $36,000 pero de forma más segura y con menos faltas.",
            en: "Mini example: an English teacher has 40 students paying $250 per single class, 4 classes a month on average: $250 × 4 × 40 = $40,000 a month. She tests a monthly package of $900 for 4 classes; if everyone takes it, she receives $36,000 but more reliably and with fewer no-shows.",
          },
        ],
        formulas: [
          {
            name: { es: "Ingreso de un modelo freemium o de suscripción", en: "Revenue of a freemium or subscription model" },
            expression: "Usuarios que pagan = Usuarios gratis × % de conversión;  Ingreso mensual = Usuarios que pagan × Precio mensual;  Ingreso anual = Ingreso mensual × 12",
            variables: [
              { symbol: "Usuarios gratis", meaning: { es: "Cuántas personas usan la versión gratuita.", en: "How many people use the free version." } },
              { symbol: "% de conversión", meaning: { es: "De cada 100 usuarios gratis, cuántos se pasan al plan de pago, en porcentaje (4% = 0.04).", en: "Out of every 100 free users, how many move to the paid plan, as a percentage (4% = 0.04)." } },
              { symbol: "Usuarios que pagan", meaning: { es: "Cuántas personas pagan el plan cada mes. En una suscripción simple, son tus suscriptores.", en: "How many people pay for the plan each month. In a plain subscription, they are your subscribers." } },
              { symbol: "Precio mensual", meaning: { es: "La cuota que paga cada usuario al mes, en pesos.", en: "The fee each user pays per month, in pesos." } },
              { symbol: "Ingreso mensual", meaning: { es: "Lo que entra por el plan de pago en un mes, en pesos.", en: "What comes in from the paid plan in one month, in pesos." } },
              { symbol: "Ingreso anual", meaning: { es: "Lo que entra en un año (12 meses), en pesos.", en: "What comes in over a year (12 months), in pesos." } },
            ],
            steps: [
              { es: "Convierte la conversión a decimal y multiplícala por los usuarios gratis: son los que pagan. (En una suscripción simple, salta este paso y usa el número de suscriptores.)", en: "Turn the conversion rate into a decimal and multiply it by the free users: those are the payers. (In a plain subscription, skip this step and use the number of subscribers.)" },
              { es: "Multiplica los usuarios que pagan por el precio mensual: es el ingreso mensual.", en: "Multiply paying users by the monthly price: that is monthly revenue." },
              { es: "Multiplica el ingreso mensual por 12 para el ingreso anual.", en: "Multiply monthly revenue by 12 for annual revenue." },
            ],
            example: {
              es: "Una app de ejercicio tiene 8,000 usuarios gratis y el 3% paga el plan de $79 al mes. Usuarios que pagan = 8,000 × 0.03 = 240. Ingreso mensual = 240 × $79 = **$18,960**. Ingreso anual = 18,960 × 12 = **$227,520**.",
              en: "A workout app has 8,000 free users and 3% pay for the $79-a-month plan. Paying users = 8,000 × 0.03 = 240. Monthly revenue = 240 × $79 = **$18,960**. Annual revenue = 18,960 × 12 = **$227,520**.",
            },
            interpret: {
              es: "Si la conversión es muy baja, lo que pagan pocos no alcanza para sostener a todos los usuarios gratis.",
              en: "If conversion is too low, what a few people pay is not enough to support all the free users.",
            },
            mistake: {
              es: "Multiplicar todos los usuarios gratis por el precio, como si todos pagaran.",
              en: "Multiplying all the free users by the price, as if everyone paid.",
            },
          },
        ],
      },
    ],
    examples: [
      {
        title: { es: "Suscripción de cajas de café", en: "Coffee box subscription" },
        problem: {
          es: "Un tostador de café de Veracruz vende cajas mensuales a $350. Tiene 180 suscriptores. Cada caja le cuesta $210 (café, empaque y envío). ¿Cuánto ingresa y cuánto le queda al mes antes de otros gastos? (cifras hipotéticas)",
          en: "A coffee roaster from Veracruz sells monthly boxes at $350. It has 180 subscribers. Each box costs $210 (coffee, packaging and shipping). How much does it take in and how much is left each month before other expenses? (hypothetical figures)",
        },
        steps: [
          { es: "Ingreso mensual: 180 × $350 = $63,000.", en: "Monthly revenue: 180 × $350 = $63,000." },
          { es: "Costo de las cajas: 180 × $210 = $37,800.", en: "Cost of the boxes: 180 × $210 = $37,800." },
          { es: "Le queda: $63,000 − $37,800 = $25,200.", en: "Left over: $63,000 − $37,800 = $25,200." },
        ],
        result: {
          es: "Ingresa $63,000 y le quedan $25,200 para cubrir renta, sueldos y otros gastos. Si 10 suscriptores cancelan, pierde 10 × $140 = $1,400 de lo que le queda cada mes.",
          en: "It takes in $63,000 and has $25,200 left to cover rent, salaries and other expenses. If 10 subscribers cancel, it loses 10 × $140 = $1,400 of what is left each month.",
        },
      },
      {
        title: { es: "Marketplace de tutores", en: "Tutor marketplace" },
        problem: {
          es: "Una plataforma conecta tutores con estudiantes y cobra 15% de comisión. En un mes, los estudiantes pagan $80,000 en clases por la plataforma. ¿Cuánto recibe la plataforma y cuánto los tutores?",
          en: "A platform connects tutors with students and charges a 15% commission. In one month, students pay $80,000 for classes through the platform. How much does the platform receive and how much do tutors get?",
        },
        steps: [
          { es: "Comisión: $80,000 × 0.15 = $12,000.", en: "Commission: $80,000 × 0.15 = $12,000." },
          { es: "Tutores: $80,000 − $12,000 = $68,000.", en: "Tutors: $80,000 − $12,000 = $68,000." },
          { es: "Nota: el ingreso de la plataforma es la comisión, no los $80,000 completos.", en: "Note: the platform's revenue is the commission, not the full $80,000." },
        ],
        result: {
          es: "La plataforma ingresa $12,000 y los tutores reciben $68,000.",
          en: "The platform earns $12,000 and the tutors receive $68,000.",
        },
      },
    ],
    keyPoints: [
      { es: "Un modelo de negocio explica cómo creas, entregas y capturas valor.", en: "A business model explains how you create, deliver and capture value." },
      { es: "El mismo producto puede venderse con modelos distintos.", en: "The same product can be sold with different models." },
      { es: "Modelos comunes: venta directa, suscripción, freemium, marketplace y franquicia.", en: "Common models: direct sales, subscription, freemium, marketplace and franchise." },
      { es: "En un marketplace tu ingreso es la comisión, no el total vendido.", en: "In a marketplace your revenue is the commission, not the total sold." },
      { es: "Elige el modelo según cómo compra tu cliente y cuáles son tus costos.", en: "Choose the model based on how your customer buys and what your costs are." },
    ],
    normativeNote: NOTE_MODELS,
    exerciseIds: ['EMP-04-E1', 'EMP-04-E2', 'EMP-04-E3', 'EMP-04-E4', 'EMP-04-E5', 'EMP-04-E6'],
  },

  // ───────────────────────────── EMP-05 ─────────────────────────────
  {
    id: 'EMP-05',
    level: 1,
    topicIds: ['EMP.5'],
    title: { es: "Business Model Canvas", en: "Business Model Canvas" },
    summary: {
      es: "El Business Model Canvas es un lienzo de nueve bloques que te deja ver en una sola hoja cómo funciona tu negocio y probar cambios rápido.",
      en: "The Business Model Canvas is a nine-block sheet that lets you see on a single page how your business works and test changes quickly.",
    },
    minutes: 17,
    objectives: [
      { es: "Nombrar los nueve bloques del Canvas y explicar qué va en cada uno.", en: "Name the nine blocks of the Canvas and explain what goes in each one." },
      { es: "Llenar un Canvas para un negocio pequeño con ejemplos concretos.", en: "Fill in a Canvas for a small business with concrete examples." },
      { es: "Usar los bloques de ingresos y costos para revisar si los números del modelo cuadran.", en: "Use the revenue and cost blocks to check whether the model's numbers add up." },
    ],
    theory: [
      {
        heading: { es: "Qué es el Canvas y cómo se lee", en: "What the Canvas is and how to read it" },
        body: [
          {
            es: "El **Business Model Canvas** (lienzo de modelo de negocio) es una plantilla de una hoja con **nueve bloques**. Lo propuso Alexander Osterwalder y se volvió muy popular porque sustituye documentos largos por un mapa visual que cabe en una pared.",
            en: "The **Business Model Canvas** is a one-page template with **nine blocks**. It was proposed by Alexander Osterwalder and became very popular because it replaces long documents with a visual map that fits on a wall.",
          },
          {
            es: "Se lee en dos mitades. El **lado derecho** es el del cliente y el valor: a quién sirves, qué le ofreces, cómo llegas y te relacionas con él y cuánto te paga. El **lado izquierdo** es el de la operación: qué recursos, actividades y socios necesitas y cuánto cuesta. Abajo quedan los dos bloques de dinero: **ingresos** y **costos**.",
            en: "It is read in two halves. The **right side** is about the customer and value: whom you serve, what you offer them, how you reach and relate to them and how much they pay you. The **left side** is about operations: what resources, activities and partners you need and how much it costs. At the bottom are the two money blocks: **revenue** and **costs**.",
          },
          {
            es: "Se recomienda escribir con **notas adhesivas**: una idea por nota, para moverlas o quitarlas cuando aprendas algo nuevo. Mini ejemplo: en una pastelería, una nota con \"mamás que organizan fiestas infantiles\" va en segmentos de clientes; otra con \"horno industrial\" va en recursos clave.",
            en: "It is recommended to write on **sticky notes**: one idea per note, so you can move or remove them when you learn something new. Mini example: in a cake shop, a note saying \"moms who organize children's parties\" goes in customer segments; another saying \"industrial oven\" goes in key resources.",
          },
        ],
      },
      {
        heading: { es: "Los nueve bloques", en: "The nine blocks" },
        body: [
          {
            es: "Empieza por el lado del cliente. **Segmentos de clientes**: los grupos de personas para quienes creas valor. **Propuesta de valor**: el problema que resuelves o el beneficio que das, y por qué te eligen a ti. **Canales**: cómo te conocen, compran y reciben (tienda, redes sociales, entrega a domicilio). **Relación con clientes**: el trato que tienes con ellos (personal, automática, comunidad). **Fuentes de ingresos**: cómo y cuánto te pagan.",
            en: "Start with the customer side. **Customer segments**: the groups of people you create value for. **Value proposition**: the problem you solve or the benefit you give, and why they choose you. **Channels**: how they hear about you, buy and receive (store, social media, home delivery). **Customer relationships**: the kind of interaction you have with them (personal, automated, community). **Revenue streams**: how and how much they pay you.",
          },
          {
            es: "Luego el lado de la operación. **Recursos clave**: lo indispensable para funcionar (equipo, local, conocimiento, marca). **Actividades clave**: lo que tienes que hacer muy bien (producir, vender, entregar). **Socios clave**: proveedores y aliados que te ayudan. **Estructura de costos**: los gastos más importantes del modelo.",
            en: "Then the operations side. **Key resources**: what is essential to operate (equipment, premises, knowledge, brand). **Key activities**: what you must do very well (produce, sell, deliver). **Key partners**: suppliers and allies who help you. **Cost structure**: the model's most important expenses.",
          },
          {
            es: "Mini ejemplo en un taller de bicicletas: segmento = ciclistas urbanos; propuesta = reparación en 24 horas; canal = local y mensajes; relación = trato personal; ingresos = cobro por servicio y venta de refacciones; recurso = herramienta y mecánico; actividad = reparar; socio = distribuidor de refacciones; costos = renta, sueldo y refacciones.",
            en: "Mini example in a bike workshop: segment = urban cyclists; proposition = repair within 24 hours; channel = shop and messages; relationship = personal service; revenue = service fees and parts sales; resource = tools and mechanic; activity = repairing; partner = parts distributor; costs = rent, wages and parts.",
          },
        ],
        bullets: [
          { es: "Lado del cliente: segmentos, propuesta de valor, canales, relación, ingresos.", en: "Customer side: segments, value proposition, channels, relationships, revenue." },
          { es: "Lado de la operación: recursos, actividades, socios, costos.", en: "Operations side: resources, activities, partners, costs." },
          { es: "La propuesta de valor está al centro: une ambos lados.", en: "The value proposition sits in the middle: it connects both sides." },
        ],
      },
      {
        heading: { es: "Del lienzo a los números", en: "From the canvas to the numbers" },
        body: [
          {
            es: "El Canvas no es un dibujo bonito: es una lista de **supuestos** (cosas que crees pero aún no compruebas). Por ejemplo, \"las mamás pagarán $500 por un pastel personalizado\". Cada supuesto se prueba hablando con clientes o haciendo ventas pequeñas.",
            en: "The Canvas is not just a nice drawing: it is a list of **assumptions** (things you believe but have not yet verified). For example, \"moms will pay $500 for a custom cake\". Each assumption is tested by talking to customers or making small sales.",
          },
          {
            es: "Los bloques de abajo te dan una revisión rápida: si los **ingresos** esperados no superan a la **estructura de costos**, el modelo no funciona tal como está. Entonces cambias algún bloque (otro segmento, otro canal, otro precio) y vuelves a revisar.",
            en: "The bottom blocks give you a quick check: if expected **revenue** does not exceed the **cost structure**, the model does not work as it stands. Then you change some block (another segment, another channel, another price) and check again.",
          },
          {
            es: "Mini ejemplo: el taller de bicicletas espera 120 servicios al mes a $250 = $30,000 de ingresos. Sus costos mensuales suman $26,000. Le quedan $4,000: funciona, pero con poco margen; podría sumar un bloque de ingresos con venta de accesorios.",
            en: "Mini example: the bike workshop expects 120 services a month at $250 = $30,000 in revenue. Its monthly costs add up to $26,000. It has $4,000 left: it works, but with a thin margin; it could add a revenue stream from selling accessories.",
          },
        ],
        formulas: [
          {
            name: { es: "Resultado mensual del Canvas", en: "Monthly result of the Canvas" },
            expression: "Resultado mensual = Fuentes de ingresos − Estructura de costos;  Fuentes de ingresos = Unidades vendidas × Precio",
            variables: [
              { symbol: "Resultado mensual", meaning: { es: "Lo que le queda al negocio en el mes, en pesos. Si es negativo, pierde.", en: "What the business has left in the month, in pesos. If negative, it loses money." } },
              { symbol: "Fuentes de ingresos", meaning: { es: "Lo que esperas cobrar en el mes, en pesos.", en: "What you expect to bring in during the month, in pesos." } },
              { symbol: "Unidades vendidas", meaning: { es: "Cuántos productos o servicios esperas vender en el mes.", en: "How many products or services you expect to sell in the month." } },
              { symbol: "Precio", meaning: { es: "Lo que cobras por cada uno, en pesos.", en: "What you charge for each one, in pesos." } },
              { symbol: "Estructura de costos", meaning: { es: "La suma de todos los costos del mes, en pesos: insumos, renta, sueldos, publicidad, empaques.", en: "The sum of all the month's costs, in pesos: supplies, rent, wages, advertising, packaging." } },
            ],
            steps: [
              { es: "Calcula los ingresos: unidades vendidas × precio.", en: "Compute revenue: units sold × price." },
              { es: "Suma todos los costos del mes, incluso los pequeños.", en: "Add up all the month's costs, even the small ones." },
              { es: "Resta: ingresos − costos. Ese es el resultado mensual.", en: "Subtract: revenue − costs. That is the monthly result." },
            ],
            example: {
              es: "Un cerrajero espera 60 servicios al mes a $350: ingresos = 60 × 350 = $21,000. Costos: ayudante $8,000 + transporte $3,000 + herramienta $1,500 + publicidad $1,000 + celular $500 = $14,000. Resultado = 21,000 − 14,000 = **$7,000**.",
              en: "A locksmith expects 60 jobs a month at $350: revenue = 60 × 350 = $21,000. Costs: helper $8,000 + transport $3,000 + tools $1,500 + advertising $1,000 + phone $500 = $14,000. Result = 21,000 − 14,000 = **$7,000**.",
            },
            interpret: {
              es: "Positivo: el modelo funciona con esos supuestos. Negativo o muy pequeño: cambia algún bloque (precio, segmento, canal o costos) y vuelve a calcular.",
              en: "Positive: the model works under those assumptions. Negative or very small: change some block (price, segment, channel or costs) and recalculate.",
            },
            mistake: {
              es: "Olvidar algún costo pequeño, como empaques o publicidad, y creer que te queda más de lo real.",
              en: "Forgetting a small cost, such as packaging or advertising, and believing you have more left than you really do.",
            },
          },
        ],
      },
    ],
    examples: [
      {
        title: { es: "Canvas de una tienda de plantas en línea", en: "Canvas for an online plant shop" },
        problem: {
          es: "Daniela vende plantas de interior por redes sociales y las entrega en su ciudad. Acomoda en el Canvas estas notas: jóvenes que viven en departamento; plantas fáciles de cuidar con guía incluida; Instagram y entrega en moto; grupo de mensajes para dudas de cuidado; venta por planta; vivero proveedor; invernadero pequeño; armar pedidos y tomar fotos; compra de plantas, macetas y envíos.",
          en: "Daniela sells indoor plants through social media and delivers them in her city. She places these notes on the Canvas: young people living in apartments; easy-care plants with a guide included; Instagram and motorbike delivery; messaging group for care questions; sales per plant; supplier nursery; small greenhouse; packing orders and taking photos; purchase of plants, pots and delivery.",
        },
        steps: [
          { es: "Segmento: jóvenes que viven en departamento. Propuesta de valor: plantas fáciles con guía.", en: "Segment: young people in apartments. Value proposition: easy plants with a guide." },
          { es: "Canales: Instagram y entrega en moto. Relación: grupo de mensajes. Ingresos: venta por planta.", en: "Channels: Instagram and motorbike delivery. Relationship: messaging group. Revenue: sales per plant." },
          { es: "Socio clave: vivero proveedor. Recurso clave: invernadero pequeño. Actividades: armar pedidos y tomar fotos.", en: "Key partner: supplier nursery. Key resource: small greenhouse. Activities: packing orders and taking photos." },
          { es: "Estructura de costos: compra de plantas, macetas y envíos.", en: "Cost structure: purchase of plants, pots and delivery." },
        ],
        result: {
          es: "Los nueve bloques quedan llenos con una idea concreta cada uno. Daniela ve en una hoja que su gasto más fuerte son los envíos y puede probar cobrar el envío aparte.",
          en: "All nine blocks are filled with one concrete idea each. Daniela sees on one page that her biggest expense is delivery and can test charging for delivery separately.",
        },
      },
      {
        title: { es: "¿Cuadran los números del Canvas?", en: "Do the Canvas numbers add up?" },
        problem: {
          es: "Daniela espera vender 150 plantas al mes a $280. Sus costos mensuales: plantas y macetas $18,000, envíos $9,000, invernadero $4,500 y publicidad $3,000. ¿Cuál es el resultado mensual? (cifras hipotéticas)",
          en: "Daniela expects to sell 150 plants a month at $280. Her monthly costs: plants and pots $18,000, delivery $9,000, greenhouse $4,500 and advertising $3,000. What is the monthly result? (hypothetical figures)",
        },
        steps: [
          { es: "Ingresos: 150 × $280 = $42,000.", en: "Revenue: 150 × $280 = $42,000." },
          { es: "Costos: $18,000 + $9,000 + $4,500 + $3,000 = $34,500.", en: "Costs: $18,000 + $9,000 + $4,500 + $3,000 = $34,500." },
          { es: "Resultado: $42,000 − $34,500 = $7,500.", en: "Result: $42,000 − $34,500 = $7,500." },
        ],
        result: {
          es: "Le quedan $7,500 al mes. Si cobrara $50 de envío en la mitad de los pedidos (75 × $50 = $3,750), su resultado subiría a $11,250.",
          en: "She has $7,500 left each month. If she charged $50 for delivery on half the orders (75 × $50 = $3,750), her result would rise to $11,250.",
        },
      },
    ],
    keyPoints: [
      { es: "El Canvas resume un modelo de negocio en nueve bloques en una sola hoja.", en: "The Canvas summarizes a business model in nine blocks on a single page." },
      { es: "Lado derecho: cliente y valor; lado izquierdo: operación; abajo: ingresos y costos.", en: "Right side: customer and value; left side: operations; bottom: revenue and costs." },
      { es: "La propuesta de valor es el centro que une a clientes con operación.", en: "The value proposition is the center that connects customers with operations." },
      { es: "Cada nota es un supuesto que se debe probar con clientes reales.", en: "Each note is an assumption to test with real customers." },
      { es: "Si los ingresos no superan los costos, cambia un bloque y vuelve a revisar.", en: "If revenue does not exceed costs, change a block and check again." },
    ],
    normativeNote: NOTE_CANVAS,
    exerciseIds: ['EMP-05-E1', 'EMP-05-E2', 'EMP-05-E3', 'EMP-05-E4', 'EMP-05-E5', 'EMP-05-E6'],
  },

  // ───────────────────────────── EMP-06 ─────────────────────────────
  {
    id: 'EMP-06',
    level: 1,
    topicIds: ['EMP.6'],
    title: { es: "Investigación de mercados", en: "Market research" },
    summary: {
      es: "La investigación de mercados reúne datos sobre clientes, competencia y tamaño del mercado para decidir con evidencia en lugar de suposiciones.",
      en: "Market research gathers data on customers, competitors and market size so you decide with evidence instead of assumptions.",
    },
    minutes: 18,
    objectives: [
      { es: "Explicar para qué sirve la investigación de mercados y distinguir fuentes primarias y secundarias.", en: "Explain what market research is for and distinguish primary and secondary sources." },
      { es: "Elegir herramientas adecuadas: encuestas, entrevistas, observación y análisis de competencia.", en: "Choose suitable tools: surveys, interviews, observation and competitor analysis." },
      { es: "Estimar el tamaño del mercado con TAM, SAM y SOM e interpretar resultados de una encuesta.", en: "Estimate market size with TAM, SAM and SOM and interpret survey results." },
    ],
    theory: [
      {
        heading: { es: "Para qué investigar y con qué fuentes", en: "Why research and with what sources" },
        body: [
          {
            es: "La **investigación de mercados** es reunir y analizar información sobre las personas que podrían comprarte, sobre tu competencia y sobre el tamaño de la demanda. Su meta es **reducir la incertidumbre**: decidir con datos y no solo con corazonadas.",
            en: "**Market research** is gathering and analyzing information about the people who could buy from you, your competitors and the size of demand. Its goal is to **reduce uncertainty**: deciding with data and not only with hunches.",
          },
          {
            es: "Hay dos tipos de fuentes. Las **fuentes primarias** son datos que tú mismo recolectas para tu pregunta: encuestas, entrevistas, observación. Las **fuentes secundarias** son datos que alguien más ya publicó: estadísticas del INEGI, estudios de cámaras empresariales, reportes de la industria. Las secundarias son más rápidas y baratas; las primarias responden justo lo que necesitas.",
            en: "There are two types of sources. **Primary sources** are data you collect yourself for your question: surveys, interviews, observation. **Secondary sources** are data someone else already published: INEGI statistics, studies by business chambers, industry reports. Secondary sources are faster and cheaper; primary ones answer exactly what you need.",
          },
          {
            es: "Mini ejemplo: para abrir una tienda de mascotas, primero consultas datos públicos de cuántos hogares hay en tu municipio (secundaria) y después entrevistas a 15 dueños de perros del parque sobre dónde compran croquetas (primaria).",
            en: "Mini example: to open a pet store, you first check public data on how many households there are in your municipality (secondary) and then interview 15 dog owners at the park about where they buy dog food (primary).",
          },
        ],
        bullets: [
          { es: "Primaria: encuestas, entrevistas, observación, ventas de prueba.", en: "Primary: surveys, interviews, observation, test sales." },
          { es: "Secundaria: estadísticas oficiales, estudios publicados, reportes de la industria.", en: "Secondary: official statistics, published studies, industry reports." },
          { es: "Combina ambas: empieza por la secundaria y confirma con la primaria.", en: "Combine both: start with secondary and confirm with primary." },
        ],
      },
      {
        heading: { es: "Herramientas para escuchar al cliente", en: "Tools to listen to the customer" },
        body: [
          {
            es: "La **entrevista** es una conversación a fondo con pocas personas; sirve para entender problemas, motivos y hábitos. La **encuesta** hace las mismas preguntas cerradas a muchas personas; sirve para medir cuántos piensan o hacen algo. La **observación** consiste en mirar lo que la gente realmente hace (cuántos clientes entran a la tienda de enfrente en una hora).",
            en: "An **interview** is an in-depth conversation with a few people; it helps understand problems, motives and habits. A **survey** asks the same closed questions to many people; it helps measure how many think or do something. **Observation** means watching what people actually do (how many customers walk into the store across the street in an hour).",
          },
          {
            es: "Cuida cómo preguntas. Evita las **preguntas que inducen la respuesta** (\"¿verdad que te encantaría...?\"). Pregunta por **hechos del pasado** (\"¿cuánto gastaste la última vez?\") en lugar de promesas a futuro, porque la gente suele decir que compraría más de lo que realmente compra. Y elige una **muestra** que se parezca a tus clientes: preguntar solo a tus amigos sesga los resultados.",
            en: "Be careful how you ask. Avoid **leading questions** (\"wouldn't you love...?\"). Ask about **past facts** (\"how much did you spend last time?\") instead of future promises, because people tend to say they would buy more than they actually do. And choose a **sample** that resembles your customers: asking only your friends biases the results.",
          },
          {
            es: "El **análisis de la competencia** completa el cuadro: visita o revisa en línea a tus competidores y anota precios, horarios, lo que sus clientes elogian y de lo que se quejan. Mini ejemplo: si las reseñas de tres gimnasios cercanos se quejan de aparatos descompuestos, ahí hay un hueco para destacar.",
            en: "**Competitor analysis** completes the picture: visit or check your competitors online and note prices, hours, what their customers praise and what they complain about. Mini example: if reviews of three nearby gyms complain about broken machines, there is a gap where you can stand out.",
          },
        ],
        formulas: [
          {
            name: { es: "Porcentaje de una respuesta en una encuesta", en: "Percentage of an answer in a survey" },
            expression: "Porcentaje (%) = Personas que respondieron eso ÷ Total de encuestados × 100",
            variables: [
              { symbol: "Porcentaje (%)", meaning: { es: "De cada 100 encuestados, cuántos dieron esa respuesta.", en: "Out of every 100 people surveyed, how many gave that answer." } },
              { symbol: "Personas que respondieron eso", meaning: { es: "Cuántas personas dieron la respuesta que te interesa.", en: "How many people gave the answer you care about." } },
              { symbol: "Total de encuestados", meaning: { es: "Cuántas personas contestaron la encuesta (o el grupo sobre el que calculas, si es un subgrupo).", en: "How many people answered the survey (or the group you are calculating over, if it is a subgroup)." } },
            ],
            steps: [
              { es: "Cuenta cuántas personas dieron la respuesta que buscas.", en: "Count how many people gave the answer you are looking for." },
              { es: "Divide ese número entre el total de encuestados.", en: "Divide that number by the total surveyed." },
              { es: "Multiplica por 100 para leerlo como porcentaje.", en: "Multiply by 100 to read it as a percentage." },
            ],
            example: {
              es: "Encuestas a 150 vecinos y 45 dicen que el mes pasado pagaron por lavar su auto. 45 ÷ 150 = 0.30. 0.30 × 100 = **30%**.",
              en: "You survey 150 neighbors and 45 say they paid to have their car washed last month. 45 ÷ 150 = 0.30. 0.30 × 100 = **30%**.",
            },
            interpret: {
              es: "Un porcentaje sobre hechos pasados (lo que ya compraron) es más confiable que uno sobre promesas (\"sí compraría\").",
              en: "A percentage about past facts (what they already bought) is more reliable than one about promises (\"I would buy\").",
            },
            mistake: {
              es: "Dividir al revés (total ÷ respuestas) o usar un total distinto al grupo que realmente contestó.",
              en: "Dividing the other way round (total ÷ answers) or using a total different from the group that actually answered.",
            },
          },
        ],
      },
      {
        heading: { es: "Tamaño del mercado: TAM, SAM y SOM", en: "Market size: TAM, SAM and SOM" },
        body: [
          {
            es: "Para saber si vale la pena, estima el tamaño del mercado en tres capas. **TAM** (mercado total): todo lo que se gasta en ese producto en la zona que analizas. **SAM** (mercado al que sí puedes servir): la parte del TAM que alcanzas con tu canal, zona o tipo de cliente. **SOM** (mercado que puedes ganar): la parte del SAM que de forma realista podrías captar en tus primeros años. Piénsalo como un pastel: el TAM es el pastel entero, el SAM es la parte que alcanzas a servirte y el SOM es la rebanada que de verdad te vas a comer.",
            en: "To see whether it is worth it, estimate market size in three layers. **TAM** (total addressable market): everything spent on that product in the area you analyze. **SAM** (serviceable available market): the part of the TAM you can reach with your channel, area or customer type. **SOM** (serviceable obtainable market): the part of the SAM you could realistically capture in your first years. Think of a cake: the TAM is the whole cake, the SAM is the part you can reach to serve yourself and the SOM is the slice you will actually eat.",
          },
          {
            es: "Cada capa se calcula multiplicando: número de clientes posibles × gasto por cliente da el TAM; el TAM por el porcentaje que alcanzas da el SAM; y el SAM por tu participación esperada da el SOM. Usa supuestos prudentes y escríbelos para revisarlos después.",
            en: "Each layer is computed by multiplying: number of potential customers × spending per customer gives the TAM; TAM times the share you can reach gives the SAM; and SAM times your expected share gives the SOM. Use prudent assumptions and write them down to revisit later.",
          },
          {
            es: "Mini ejemplo hipotético: 10,000 estudiantes en una zona gastan $2,000 al año en útiles: TAM = $20,000,000. Tu papelería alcanza al 20% (los que viven cerca): SAM = $4,000,000. Si esperas ganar el 10% de ellos: SOM = $400,000 al año.",
            en: "Hypothetical mini example: 10,000 students in an area spend $2,000 a year on school supplies: TAM = $20,000,000. Your stationery store reaches 20% (those who live nearby): SAM = $4,000,000. If you expect to win 10% of them: SOM = $400,000 a year.",
          },
        ],
        formulas: [
          {
            name: { es: "Tamaño del mercado en tres capas (TAM, SAM y SOM)", en: "Market size in three layers (TAM, SAM and SOM)" },
            expression: "TAM = Clientes posibles × Gasto anual · SAM = TAM × % alcanzable · SOM = SAM × % que esperas ganar",
            variables: [
              { symbol: "TAM", meaning: { es: "Mercado total: todo lo que se gasta al año en ese producto en la zona, en pesos.", en: "Total market: everything spent per year on that product in the area, in pesos." } },
              { symbol: "Clientes posibles", meaning: { es: "Cuántas personas, hogares o negocios compran ese tipo de producto en la zona.", en: "How many people, households or businesses buy that kind of product in the area." } },
              { symbol: "Gasto anual", meaning: { es: "Lo que gasta cada cliente en un año en ese producto, en pesos.", en: "What each customer spends on that product in a year, in pesos." } },
              { symbol: "SAM", meaning: { es: "Mercado que sí puedes atender con tu zona, canal o tipo de cliente, en pesos al año.", en: "Market you can actually serve with your area, channel or customer type, in pesos per year." } },
              { symbol: "% alcanzable", meaning: { es: "La parte del TAM a la que de verdad llegas, en porcentaje (20% = 0.20).", en: "The share of the TAM you really reach, as a percentage (20% = 0.20)." } },
              { symbol: "SOM", meaning: { es: "Mercado que puedes ganar de forma realista, en pesos al año. Es el que se compara con tus costos.", en: "Market you can realistically win, in pesos per year. It is the one compared with your costs." } },
              { symbol: "% que esperas ganar", meaning: { es: "La parte del SAM que crees que te comprará a ti, en porcentaje (5% = 0.05).", en: "The share of the SAM you believe will buy from you, as a percentage (5% = 0.05)." } },
            ],
            steps: [
              { es: "TAM: multiplica los clientes posibles por lo que gasta cada uno al año.", en: "TAM: multiply potential customers by what each spends per year." },
              { es: "SAM: convierte el % alcanzable a decimal y multiplícalo por el TAM.", en: "SAM: turn the reachable % into a decimal and multiply it by the TAM." },
              { es: "SOM: convierte el % que esperas ganar a decimal y multiplícalo por el SAM (no por el TAM).", en: "SOM: turn the % you expect to win into a decimal and multiply it by the SAM (not the TAM)." },
            ],
            example: {
              es: "En una ciudad hay 30,000 autos y cada dueño gasta $1,500 al año en lavado. TAM = 30,000 × 1,500 = $45,000,000. Tu autolavado alcanza al 20%: SAM = 45,000,000 × 0.20 = $9,000,000. Esperas ganar el 5%: SOM = 9,000,000 × 0.05 = **$450,000 al año**.",
              en: "A city has 30,000 cars and each owner spends $1,500 a year on washes. TAM = 30,000 × 1,500 = $45,000,000. Your car wash reaches 20%: SAM = 45,000,000 × 0.20 = $9,000,000. You expect to win 5%: SOM = 9,000,000 × 0.05 = **$450,000 a year**.",
            },
            interpret: {
              es: "Compara el SOM con tus costos de un año: si no los cubre, el mercado que puedes ganar es muy chico para ese negocio.",
              en: "Compare the SOM with a year of costs: if it does not cover them, the market you can win is too small for that business.",
            },
            mistake: {
              es: "Aplicar el % que esperas ganar al TAM en lugar del SAM. Exagera muchísimo lo que puedes vender.",
              en: "Applying the % you expect to win to the TAM instead of the SAM. It hugely overstates what you can sell.",
            },
          },
        ],
      },
    ],
    examples: [
      {
        title: { es: "Leer los resultados de una encuesta", en: "Reading survey results" },
        problem: {
          es: "Un emprendedor quiere vender desayunos saludables en una zona de oficinas. Encuesta a 160 oficinistas de la zona: 56 dicen que hoy compran desayuno fuera al menos 3 veces por semana, y de ellos 28 gastan más de $80 cada vez. ¿Qué porcentajes obtiene y qué significan?",
          en: "An entrepreneur wants to sell healthy breakfasts in an office area. He surveys 160 office workers in the area: 56 say they currently buy breakfast out at least 3 times a week, and of those, 28 spend more than $80 each time. What percentages does he get and what do they mean?",
        },
        steps: [
          { es: "Compran fuera con frecuencia: 56 ÷ 160 = 0.35 = 35%.", en: "Frequently buy out: 56 ÷ 160 = 0.35 = 35%." },
          { es: "De esos, gastan más de $80: 28 ÷ 56 = 0.50 = 50%.", en: "Of those, spend more than $80: 28 ÷ 56 = 0.50 = 50%." },
          { es: "Sobre el total encuestado: 28 ÷ 160 = 0.175 = 17.5%.", en: "Over the total surveyed: 28 ÷ 160 = 0.175 = 17.5%." },
          { es: "Pregunta por hechos pasados (lo que ya compran), así que el dato es más confiable que un \"sí compraría\".", en: "He asked about past facts (what they already buy), so the data is more reliable than a \"yes, I would buy\"." },
        ],
        result: {
          es: "El 35% ya compra desayuno fuera seguido y la mitad de ellos (17.5% del total) gasta más de $80: ese es su cliente más atractivo.",
          en: "35% already buy breakfast out often and half of them (17.5% of the total) spend more than $80: that is his most attractive customer.",
        },
      },
      {
        title: { es: "Tamaño del mercado de clases de natación", en: "Market size for swimming lessons" },
        problem: {
          es: "En una ciudad hay 40,000 niños de 4 a 10 años y se supone que el 25% toma clases de natación, gastando $6,000 al año. Una nueva escuela de natación alcanza al 30% de esas familias por su ubicación y espera ganar el 8% de ellas. Calcula TAM, SAM y SOM (cifras hipotéticas).",
          en: "In a city there are 40,000 children aged 4 to 10, and it is assumed that 25% take swimming lessons, spending $6,000 a year. A new swim school reaches 30% of those families because of its location and expects to win 8% of them. Compute TAM, SAM and SOM (hypothetical figures).",
        },
        steps: [
          { es: "Clientes posibles: 40,000 × 0.25 = 10,000 niños.", en: "Potential customers: 40,000 × 0.25 = 10,000 children." },
          { es: "TAM: 10,000 × $6,000 = $60,000,000.", en: "TAM: 10,000 × $6,000 = $60,000,000." },
          { es: "SAM: $60,000,000 × 0.30 = $18,000,000.", en: "SAM: $60,000,000 × 0.30 = $18,000,000." },
          { es: "SOM: $18,000,000 × 0.08 = $1,440,000.", en: "SOM: $18,000,000 × 0.08 = $1,440,000." },
        ],
        result: {
          es: "La escuela podría aspirar a unos $1,440,000 al año (240 niños × $6,000). Ese SOM, no el TAM, es el que debe compararse con sus costos.",
          en: "The school could aim for about $1,440,000 a year (240 children × $6,000). That SOM, not the TAM, is what should be compared with its costs.",
        },
      },
    ],
    keyPoints: [
      { es: "Investigar el mercado reduce la incertidumbre antes de invertir.", en: "Market research reduces uncertainty before investing." },
      { es: "Fuentes primarias las recolectas tú; secundarias ya las publicó alguien más.", en: "You collect primary sources yourself; secondary ones were already published by someone else." },
      { es: "Entrevistas para entender, encuestas para medir, observación para ver lo que la gente hace.", en: "Interviews to understand, surveys to measure, observation to see what people do." },
      { es: "Pregunta por hechos pasados y evita preguntas que inducen la respuesta.", en: "Ask about past facts and avoid leading questions." },
      { es: "TAM, SAM y SOM van de lo total a lo que realmente puedes ganar.", en: "TAM, SAM and SOM go from the total to what you can actually win." },
    ],
    normativeNote: NOTE_MARKET,
    exerciseIds: ['EMP-06-E1', 'EMP-06-E2', 'EMP-06-E3', 'EMP-06-E4', 'EMP-06-E5', 'EMP-06-E6'],
  },
]

export const exercises: Exercise[] = [
  // ═════════════════════════ EMP-01 ═════════════════════════
  {
    id: 'EMP-01-E1',
    level: 1,
    module: 'EMP-01',
    kind: 'mcq',
    flavor: 'concept',
    context: {
      es: "Cada lunes, el dueño de una ferretería revisa cuántas piezas vendió de cada producto, las compara con lo que esperaba vender y decide qué ajustar.",
      en: "Every Monday, the owner of a hardware store checks how many units of each product he sold, compares them with what he expected to sell and decides what to adjust.",
    },
    prompt: {
      es: "¿Qué etapa del proceso administrativo está realizando el dueño de la ferretería?",
      en: "Which stage of the management process is the hardware store owner carrying out?",
    },
    options: [
      { id: 'EMP-01-E1-a', text: { es: "Planeación", en: "Planning" } },
      { id: 'EMP-01-E1-b', text: { es: "Organización", en: "Organizing" } },
      { id: 'EMP-01-E1-c', text: { es: "Dirección", en: "Leading" } },
      { id: 'EMP-01-E1-d', text: { es: "Control", en: "Controlling" } },
    ],
    correctOptionId: 'EMP-01-E1-d',
    explanation: {
      es: "Medir lo que pasó, compararlo con lo esperado y corregir es la etapa de control. Error común: elegir planeación porque al final decide qué ajustar; pero la decisión nace de comparar resultados, que es el corazón del control.",
      en: "Measuring what happened, comparing it with what was expected and correcting is the controlling stage. Common mistake: choosing planning because he decides what to adjust at the end; but the decision comes from comparing results, which is the heart of control.",
    },
    difficulty: 1,
    points: 10,
    competency: 'management-process',
  },
  {
    id: 'EMP-01-E2',
    level: 1,
    module: 'EMP-01',
    kind: 'truefalse',
    flavor: 'concept',
    prompt: {
      es: "Si un negocio alcanza su meta de ventas pero gasta el doble de lo necesario para lograrla, fue eficaz pero no eficiente.",
      en: "If a business reaches its sales goal but spends twice what was needed to achieve it, it was effective but not efficient.",
    },
    answer: true,
    explanation: {
      es: "Verdadero. Eficacia es lograr la meta (sí la logró) y eficiencia es lograrla con los menores recursos posibles (no lo hizo). Error común: usar ambas palabras como sinónimos.",
      en: "True. Effectiveness is reaching the goal (it did) and efficiency is reaching it with the fewest resources possible (it did not). Common mistake: using both words as synonyms.",
    },
    difficulty: 1,
    points: 10,
    competency: 'management-process',
  },
  {
    id: 'EMP-01-E3',
    level: 1,
    module: 'EMP-01',
    kind: 'classify',
    flavor: 'concept',
    prompt: {
      es: "Clasifica cada acción de la dueña de una lonchería según la etapa del proceso administrativo.",
      en: "Classify each action by the owner of a lunch counter according to the stage of the management process.",
    },
    categories: [
      { id: 'EMP-01-E3-c1', label: { es: "Planear", en: "Plan" } },
      { id: 'EMP-01-E3-c2', label: { es: "Organizar", en: "Organize" } },
      { id: 'EMP-01-E3-c3', label: { es: "Dirigir", en: "Lead" } },
      { id: 'EMP-01-E3-c4', label: { es: "Controlar", en: "Control" } },
    ],
    items: [
      { id: 'EMP-01-E3-i1', label: { es: "Fija la meta de vender 60 comidas corridas al día", en: "Sets the goal of selling 60 set lunches a day" }, correctCategoryId: 'EMP-01-E3-c1' },
      { id: 'EMP-01-E3-i2', label: { es: "Asigna a una ayudante a la cocina y a otra a atender mesas", en: "Assigns one helper to the kitchen and another to wait tables" }, correctCategoryId: 'EMP-01-E3-c2' },
      { id: 'EMP-01-E3-i3', label: { es: "Felicita al equipo y explica cómo servir más rápido en la hora pico", en: "Praises the team and explains how to serve faster at rush hour" }, correctCategoryId: 'EMP-01-E3-c3' },
      { id: 'EMP-01-E3-i4', label: { es: "Cuenta al cierre cuántas comidas vendió y las compara con la meta", en: "At closing, counts how many lunches were sold and compares them with the goal" }, correctCategoryId: 'EMP-01-E3-c4' },
      { id: 'EMP-01-E3-i5', label: { es: "Decide qué menú ofrecerá la próxima semana y qué insumos comprar", en: "Decides which menu to offer next week and which supplies to buy" }, correctCategoryId: 'EMP-01-E3-c1' },
      { id: 'EMP-01-E3-i6', label: { es: "Revisa que el gasto en gas del mes no rebase lo presupuestado", en: "Checks that the month's gas spending does not exceed the budget" }, correctCategoryId: 'EMP-01-E3-c4' },
    ],
    explanation: {
      es: "Planear = metas y decisiones a futuro; organizar = repartir tareas y recursos; dirigir = guiar y motivar; controlar = medir y comparar contra lo planeado. Error común: confundir organizar con dirigir; organizar define quién hace qué, dirigir acompaña a las personas mientras lo hacen.",
      en: "Plan = goals and future decisions; organize = assign tasks and resources; lead = guide and motivate; control = measure and compare against the plan. Common mistake: confusing organizing with leading; organizing defines who does what, leading accompanies people while they do it.",
    },
    difficulty: 1,
    points: 15,
    competency: 'management-process',
  },
  {
    id: 'EMP-01-E4',
    level: 1,
    module: 'EMP-01',
    kind: 'numeric',
    flavor: 'case',
    context: {
      es: "Una florería fijó como meta vender $60,000 en el mes de mayo. Al cierre del mes, sus ventas reales fueron de $54,000.",
      en: "A flower shop set a goal of selling $60,000 in the month of May. At month-end, its actual sales were $54,000.",
    },
    prompt: {
      es: "¿Qué porcentaje de la meta de mayo cumplió la florería?",
      en: "What percentage of its May goal did the flower shop achieve?",
    },
    answer: 90,
    unit: '%',
    decimals: 0,
    tolerance: { abs: 0.1 },
    explanation: {
      es: "Cumplimiento = 54,000 ÷ 60,000 × 100 = 90%. Error común: dividir la meta entre lo real (60,000 ÷ 54,000 ≈ 111%), lo que haría parecer que superó la meta cuando en realidad le faltó un 10%.",
      en: "Achievement = 54,000 ÷ 60,000 × 100 = 90%. Common mistake: dividing the goal by the actual (60,000 ÷ 54,000 ≈ 111%), which would make it look like it beat the goal when it actually fell 10% short.",
    },
    difficulty: 1,
    points: 10,
    competency: 'management-process',
  },
  {
    id: 'EMP-01-E5',
    level: 1,
    module: 'EMP-01',
    kind: 'mcq',
    flavor: 'case',
    context: {
      es: "En una fábrica de muebles, la directora general analiza si conviene exportar a otro país en los próximos cinco años.",
      en: "In a furniture factory, the general director analyzes whether it makes sense to export to another country over the next five years.",
    },
    prompt: {
      es: "¿Qué tipo de habilidad pesa más en esa decisión de la directora general?",
      en: "Which type of skill matters most in that decision by the general director?",
    },
    options: [
      { id: 'EMP-01-E5-a', text: { es: "Técnica: saber operar la sierra y el barnizado", en: "Technical: knowing how to run the saw and varnishing" } },
      { id: 'EMP-01-E5-b', text: { es: "Conceptual: ver el panorama completo y pensar a futuro", en: "Conceptual: seeing the big picture and thinking ahead" } },
      { id: 'EMP-01-E5-c', text: { es: "Manual: rapidez para armar piezas", en: "Manual: speed at assembling pieces" } },
      { id: 'EMP-01-E5-d', text: { es: "Ninguna: en el nivel alto no se necesitan habilidades", en: "None: no skills are needed at the top level" } },
    ],
    correctOptionId: 'EMP-01-E5-b',
    explanation: {
      es: "Decidir el rumbo de la empresa a varios años exige habilidad conceptual, la que más pesa en el nivel alto. Error común: creer que la habilidad técnica es la más importante en todos los niveles; pesa más en el nivel operativo.",
      en: "Deciding the company's direction for several years requires conceptual skill, which matters most at the top level. Common mistake: believing technical skill is the most important at every level; it matters more at the operational level.",
    },
    difficulty: 1,
    points: 10,
    competency: 'management-process',
  },
  {
    id: 'EMP-01-E6',
    level: 1,
    module: 'EMP-01',
    kind: 'multi',
    flavor: 'concept',
    prompt: {
      es: "¿Cuáles de estas afirmaciones sobre los orígenes de la administración son correctas? Selecciona todas las que apliquen.",
      en: "Which of these statements about the origins of management are correct? Select all that apply.",
    },
    options: [
      { id: 'EMP-01-E6-a', text: { es: "Taylor se enfocó en hacer cada tarea de la forma más ordenada y rápida", en: "Taylor focused on doing each task in the most orderly and fastest way" } },
      { id: 'EMP-01-E6-b', text: { es: "Fayol propuso funciones y principios para dirigir la empresa completa", en: "Fayol proposed functions and principles to run the whole company" } },
      { id: 'EMP-01-E6-c', text: { es: "La unidad de mando dice que cada persona debe recibir órdenes de un solo jefe", en: "Unity of command says each person should receive orders from only one boss" } },
      { id: 'EMP-01-E6-d', text: { es: "La administración solo aplica a empresas grandes, no a una fonda", en: "Management only applies to large companies, not to a small diner" } },
    ],
    correctOptionIds: ['EMP-01-E6-a', 'EMP-01-E6-b', 'EMP-01-E6-c'],
    explanation: {
      es: "Taylor estudió las tareas (administración científica), Fayol miró la empresa completa y la unidad de mando es uno de sus principios. La opción d es falsa: cualquier grupo que coordina recursos para una meta, incluso una fonda, administra. Error común: pensar que administrar es cosa solo de corporativos.",
      en: "Taylor studied tasks (scientific management), Fayol looked at the whole company, and unity of command is one of his principles. Option d is false: any group coordinating resources toward a goal, even a small diner, is managing. Common mistake: thinking management is only for corporations.",
    },
    difficulty: 1,
    points: 10,
    competency: 'management-process',
  },

  // ═════════════════════════ EMP-02 ═════════════════════════
  {
    id: 'EMP-02-E1',
    level: 1,
    module: 'EMP-02',
    kind: 'mcq',
    flavor: 'concept',
    prompt: {
      es: "¿Qué diferencia principal hay entre trabajar como empleado y emprender un negocio propio?",
      en: "What is the main difference between working as an employee and starting your own business?",
    },
    options: [
      { id: 'EMP-02-E1-a', text: { es: "El emprendedor asume el riesgo: si el negocio no vende, no cobra", en: "The entrepreneur takes the risk: if the business does not sell, they do not get paid" } },
      { id: 'EMP-02-E1-b', text: { es: "El empleado nunca tiene que trabajar en equipo", en: "The employee never has to work in a team" } },
      { id: 'EMP-02-E1-c', text: { es: "El emprendedor siempre gana más dinero desde el primer mes", en: "The entrepreneur always earns more money from the first month" } },
      { id: 'EMP-02-E1-d', text: { es: "Solo los empleados pagan impuestos", en: "Only employees pay taxes" } },
    ],
    correctOptionId: 'EMP-02-E1-a',
    explanation: {
      es: "La diferencia clave es el riesgo: el empleado recibe su sueldo aunque la empresa venda poco; el emprendedor depende de lo que el negocio genere. Error común: creer que emprender garantiza ganar más desde el inicio; los primeros meses suelen ser los más difíciles.",
      en: "The key difference is risk: the employee gets paid even if the company sells little; the entrepreneur depends on what the business generates. Common mistake: believing entrepreneurship guarantees earning more from the start; the first months are usually the hardest.",
    },
    difficulty: 1,
    points: 10,
    competency: 'entrepreneurship-basics',
  },
  {
    id: 'EMP-02-E2',
    level: 1,
    module: 'EMP-02',
    kind: 'truefalse',
    flavor: 'concept',
    prompt: {
      es: "Para que algo cuente como emprendimiento es indispensable inventar un producto que nunca haya existido.",
      en: "For something to count as entrepreneurship, it is essential to invent a product that has never existed.",
    },
    answer: false,
    explanation: {
      es: "Falso. Emprender es poner en marcha un proyecto propio que ofrece valor; abrir una lavandería donde no hay ninguna o mejorar un servicio existente también cuenta. Error común: pensar que solo los inventores o las empresas de tecnología emprenden.",
      en: "False. Entrepreneurship is launching your own project that offers value; opening a laundromat where there is none or improving an existing service also counts. Common mistake: thinking only inventors or tech companies are entrepreneurs.",
    },
    difficulty: 1,
    points: 10,
    competency: 'entrepreneurship-basics',
  },
  {
    id: 'EMP-02-E3',
    level: 1,
    module: 'EMP-02',
    kind: 'classify',
    flavor: 'concept',
    prompt: {
      es: "Clasifica cada caso según el tipo de emprendimiento que mejor lo describe.",
      en: "Classify each case by the type of venture that best describes it.",
    },
    categories: [
      { id: 'EMP-02-E3-c1', label: { es: "Estilo de vida", en: "Lifestyle" } },
      { id: 'EMP-02-E3-c2', label: { es: "Startup", en: "Startup" } },
      { id: 'EMP-02-E3-c3', label: { es: "Social", en: "Social" } },
    ],
    items: [
      { id: 'EMP-02-E3-i1', label: { es: "Una cerrajería de barrio que da un ingreso estable a su dueño", en: "A neighborhood locksmith that gives its owner a steady income" }, correctCategoryId: 'EMP-02-E3-c1' },
      { id: 'EMP-02-E3-i2', label: { es: "Una app de pagos que quiere llegar a millones de usuarios en pocos años", en: "A payments app that wants to reach millions of users in a few years" }, correctCategoryId: 'EMP-02-E3-c2' },
      { id: 'EMP-02-E3-i3', label: { es: "Una cooperativa que emplea a personas con discapacidad para fabricar jabones", en: "A cooperative that employs people with disabilities to make soap" }, correctCategoryId: 'EMP-02-E3-c3' },
      { id: 'EMP-02-E3-i4', label: { es: "Un consultorio dental familiar con dos sillones", en: "A family dental office with two chairs" }, correctCategoryId: 'EMP-02-E3-c1' },
      { id: 'EMP-02-E3-i5', label: { es: "Una plataforma en línea que busca repetir su modelo en todo el país", en: "An online platform seeking to replicate its model across the country" }, correctCategoryId: 'EMP-02-E3-c2' },
      { id: 'EMP-02-E3-i6', label: { es: "Un negocio que recoge aceite usado de restaurantes para que no contamine el agua", en: "A business that collects used oil from restaurants so it does not pollute water" }, correctCategoryId: 'EMP-02-E3-c3' },
    ],
    explanation: {
      es: "Estilo de vida busca un ingreso estable con crecimiento moderado; una startup busca un modelo repetible para crecer muy rápido; el emprendimiento social pone el impacto social o ambiental como meta principal. Error común: pensar que un negocio social no puede cobrar; sí cobra, pero su propósito central es el impacto.",
      en: "Lifestyle seeks steady income with moderate growth; a startup seeks a repeatable model to grow very fast; social entrepreneurship makes social or environmental impact its main goal. Common mistake: thinking a social business cannot charge; it does charge, but its central purpose is impact.",
    },
    difficulty: 1,
    points: 15,
    competency: 'entrepreneurship-basics',
  },
  {
    id: 'EMP-02-E4',
    level: 1,
    module: 'EMP-02',
    kind: 'multi',
    flavor: 'concept',
    prompt: {
      es: "¿Cuáles de estas prácticas reflejan tomar riesgos calculados al emprender? Selecciona todas las que apliquen.",
      en: "Which of these practices reflect taking calculated risks when starting a business? Select all that apply.",
    },
    options: [
      { id: 'EMP-02-E4-a', text: { es: "Vender por pedido entre conocidos antes de rentar un local", en: "Selling to order among acquaintances before renting a shop" } },
      { id: 'EMP-02-E4-b', text: { es: "Usar todos tus ahorros y pedir préstamos sin haber vendido nada", en: "Using all your savings and taking loans without having sold anything" } },
      { id: 'EMP-02-E4-c', text: { es: "Apartar un fondo de reserva para los primeros meses", en: "Setting aside a reserve fund for the first months" } },
      { id: 'EMP-02-E4-d', text: { es: "Separar desde el inicio el dinero del negocio y el personal", en: "Separating business and personal money from the start" } },
      { id: 'EMP-02-E4-e', text: { es: "Ignorar las opiniones de los clientes para no desanimarte", en: "Ignoring customer feedback so you do not get discouraged" } },
    ],
    correctOptionIds: ['EMP-02-E4-a', 'EMP-02-E4-c', 'EMP-02-E4-d'],
    explanation: {
      es: "Probar en pequeño, tener un colchón y separar las finanzas reducen el daño si algo sale mal. Apostar todo sin pruebas e ignorar a los clientes aumenta el riesgo sin darte información. Error común: confundir valentía con apostar todo de golpe.",
      en: "Testing small, having a cushion and separating finances reduce the damage if something goes wrong. Betting everything without tests and ignoring customers increases risk without giving you information. Common mistake: confusing courage with betting everything at once.",
    },
    difficulty: 1,
    points: 10,
    competency: 'entrepreneurship-basics',
  },
  {
    id: 'EMP-02-E5',
    level: 1,
    module: 'EMP-02',
    kind: 'fields',
    flavor: 'case',
    context: {
      es: "Mariana quiere vender café en una bicicleta adaptada. Necesita: bicicleta-cafetera $25,000, molino $4,500, insumos del primer mes $3,500, trámites $2,000 y un fondo de reserva de 3 meses de gastos fijos de $3,000 al mes. Tiene ahorrados $30,000. (Cifras hipotéticas.)",
      en: "Mariana wants to sell coffee from a converted bicycle. She needs: coffee bike $25,000, grinder $4,500, first-month supplies $3,500, paperwork $2,000 and a reserve fund of 3 months of fixed expenses of $3,000 a month. She has $30,000 saved. (Hypothetical figures.)",
    },
    prompt: {
      es: "Calcula la inversión en equipo, la inversión inicial total y cuánto le falta a Mariana.",
      en: "Compute the equipment investment, the total startup investment and how much Mariana is short.",
    },
    fields: [
      { id: 'f1', label: { es: "Inversión en equipo", en: "Equipment investment" }, answer: 29500, unit: 'MXN', tolerance: { abs: 0.5 } },
      { id: 'f2', label: { es: "Inversión inicial total", en: "Total startup investment" }, answer: 44000, unit: 'MXN', tolerance: { abs: 0.5 } },
      { id: 'f3', label: { es: "Le falta", en: "Shortfall" }, answer: 14000, unit: 'MXN', tolerance: { abs: 0.5 } },
    ],
    explanation: {
      es: "Equipo: 25,000 + 4,500 = $29,500. Fondo de reserva: 3 × 3,000 = $9,000. Total: 29,500 + 3,500 + 2,000 + 9,000 = $44,000. Le falta: 44,000 − 30,000 = $14,000. Error común: olvidar el fondo de reserva y creer que con $35,000 basta.",
      en: "Equipment: 25,000 + 4,500 = $29,500. Reserve fund: 3 × 3,000 = $9,000. Total: 29,500 + 3,500 + 2,000 + 9,000 = $44,000. Shortfall: 44,000 − 30,000 = $14,000. Common mistake: forgetting the reserve fund and thinking $35,000 is enough.",
    },
    difficulty: 2,
    points: 15,
    competency: 'entrepreneurship-basics',
  },
  {
    id: 'EMP-02-E6',
    level: 1,
    module: 'EMP-02',
    kind: 'mcq',
    flavor: 'case',
    context: {
      es: "Gabriel tiene un buen empleo, pero nota que en su ciudad muchos turistas buscan recorridos en bicicleta y nadie los ofrece. Decide crear ese servicio los fines de semana y probarlo antes de dejar su trabajo.",
      en: "Gabriel has a good job, but he notices that many tourists in his city look for bike tours and nobody offers them. He decides to create that service on weekends and test it before quitting his job.",
    },
    prompt: {
      es: "Según su motivo, ¿cómo se clasifica el emprendimiento de Gabriel?",
      en: "By its motive, how is Gabriel's venture classified?",
    },
    options: [
      { id: 'EMP-02-E6-a', text: { es: "Por necesidad", en: "By necessity" } },
      { id: 'EMP-02-E6-b', text: { es: "Por oportunidad", en: "By opportunity" } },
      { id: 'EMP-02-E6-c', text: { es: "Pasatiempo, porque es en fin de semana", en: "Hobby, because it is on weekends" } },
      { id: 'EMP-02-E6-d', text: { es: "Franquicia", en: "Franchise" } },
    ],
    correctOptionId: 'EMP-02-E6-b',
    explanation: {
      es: "Gabriel no emprende por falta de ingresos (ya tiene empleo), sino porque detectó una demanda no atendida: es por oportunidad. Que sea en fin de semana no lo vuelve pasatiempo si cobra y busca clientes. Error común: pensar que solo es emprendimiento si se le dedica tiempo completo.",
      en: "Gabriel is not starting out of lack of income (he already has a job), but because he spotted an unmet demand: it is by opportunity. Being on weekends does not make it a hobby if he charges and seeks customers. Common mistake: thinking it only counts as a venture if it is full time.",
    },
    difficulty: 1,
    points: 10,
    competency: 'entrepreneurship-basics',
  },

  // ═════════════════════════ EMP-03 ═════════════════════════
  {
    id: 'EMP-03-E1',
    level: 1,
    module: 'EMP-03',
    kind: 'mcq',
    flavor: 'concept',
    prompt: {
      es: "¿Qué convierte una idea de negocio en una oportunidad de negocio?",
      en: "What turns a business idea into a business opportunity?",
    },
    options: [
      { id: 'EMP-03-E1-a', text: { es: "Que a ti te guste mucho la idea", en: "That you like the idea a lot" } },
      { id: 'EMP-03-E1-b', text: { es: "Que resuelva un problema real de suficientes personas dispuestas a pagar", en: "That it solves a real problem for enough people willing to pay" } },
      { id: 'EMP-03-E1-c', text: { es: "Que nadie más en el mundo la haya pensado", en: "That nobody else in the world has thought of it" } },
      { id: 'EMP-03-E1-d', text: { es: "Que tenga un nombre llamativo y un logotipo", en: "That it has a catchy name and a logo" } },
    ],
    correctOptionId: 'EMP-03-E1-b',
    explanation: {
      es: "Una oportunidad combina problema real, suficientes personas y disposición a pagar. Gustos propios, originalidad absoluta o un buen logotipo no garantizan que alguien compre. Error común: enamorarse de la solución antes de comprobar el problema.",
      en: "An opportunity combines a real problem, enough people and willingness to pay. Personal taste, absolute originality or a nice logo do not guarantee anyone will buy. Common mistake: falling in love with the solution before verifying the problem.",
    },
    difficulty: 1,
    points: 10,
    competency: 'opportunity-recognition',
  },
  {
    id: 'EMP-03-E2',
    level: 1,
    module: 'EMP-03',
    kind: 'classify',
    flavor: 'concept',
    prompt: {
      es: "Clasifica cada pista según la fuente de oportunidad de la que proviene.",
      en: "Classify each clue by the source of opportunity it comes from.",
    },
    categories: [
      { id: 'EMP-03-E2-c1', label: { es: "Problema o molestia diaria", en: "Everyday problem or annoyance" } },
      { id: 'EMP-03-E2-c2', label: { es: "Cambio o tendencia", en: "Change or trend" } },
      { id: 'EMP-03-E2-c3', label: { es: "Habilidad o contacto propio", en: "Own skill or contact" } },
    ],
    items: [
      { id: 'EMP-03-E2-i1', label: { es: "Los vecinos se quejan de que el camión de la basura pasa sin horario fijo", en: "Neighbors complain that the garbage truck comes at no fixed time" }, correctCategoryId: 'EMP-03-E2-c1' },
      { id: 'EMP-03-E2-i2', label: { es: "Cada vez más personas trabajan desde casa en tu ciudad", en: "More and more people work from home in your city" }, correctCategoryId: 'EMP-03-E2-c2' },
      { id: 'EMP-03-E2-i3', label: { es: "Eres electricista certificado y conoces a varios arquitectos", en: "You are a certified electrician and know several architects" }, correctCategoryId: 'EMP-03-E2-c3' },
      { id: 'EMP-03-E2-i4', label: { es: "En la clínica del barrio la fila para sacar ficha es de dos horas", en: "At the neighborhood clinic, the line to get an appointment takes two hours" }, correctCategoryId: 'EMP-03-E2-c1' },
      { id: 'EMP-03-E2-i5', label: { es: "Abren una universidad nueva y llegarán miles de estudiantes a la zona", en: "A new university opens and thousands of students will arrive in the area" }, correctCategoryId: 'EMP-03-E2-c2' },
      { id: 'EMP-03-E2-i6', label: { es: "Hablas inglés y francés con fluidez y tu prima tiene una agencia de viajes", en: "You speak English and French fluently and your cousin runs a travel agency" }, correctCategoryId: 'EMP-03-E2-c3' },
    ],
    explanation: {
      es: "Las quejas y filas son molestias diarias; el trabajo desde casa y la llegada de estudiantes son cambios o tendencias; tus oficios, idiomas y conocidos son habilidades y contactos. Error común: confundir una tendencia (algo que crece con el tiempo) con una molestia puntual.",
      en: "Complaints and lines are everyday annoyances; working from home and the arrival of students are changes or trends; your trades, languages and acquaintances are skills and contacts. Common mistake: confusing a trend (something growing over time) with a one-off annoyance.",
    },
    difficulty: 1,
    points: 15,
    competency: 'opportunity-recognition',
  },
  {
    id: 'EMP-03-E3',
    level: 1,
    module: 'EMP-03',
    kind: 'numeric',
    flavor: 'case',
    context: {
      es: "Itzel compara dos ideas con estos pesos: tamaño del problema 40%, su experiencia 35% e inversión requerida (10 = muy baja) 25%. Idea A (venta de ropa de segunda mano en línea): 8, 6, 5. Idea B (reparación de computadoras a domicilio): 6, 9, 8.",
      en: "Itzel compares two ideas with these weights: size of the problem 40%, her experience 35% and investment required (10 = very low) 25%. Idea A (selling second-hand clothes online): 8, 6, 5. Idea B (home computer repair): 6, 9, 8.",
    },
    prompt: {
      es: "¿Cuál es el puntaje ponderado de la idea B?",
      en: "What is the weighted score of idea B?",
    },
    answer: 7.55,
    unit: 'none',
    decimals: 2,
    tolerance: { abs: 0.01 },
    explanation: {
      es: "Idea B: 0.40 × 6 + 0.35 × 9 + 0.25 × 8 = 2.40 + 3.15 + 2.00 = 7.55. (La idea A obtiene 3.20 + 2.10 + 1.25 = 6.55, así que B se investiga primero.) Error común: sacar un promedio simple (6 + 9 + 8) ÷ 3 ≈ 7.67, ignorando que los criterios no pesan lo mismo.",
      en: "Idea B: 0.40 × 6 + 0.35 × 9 + 0.25 × 8 = 2.40 + 3.15 + 2.00 = 7.55. (Idea A scores 3.20 + 2.10 + 1.25 = 6.55, so B is researched first.) Common mistake: taking a simple average (6 + 9 + 8) ÷ 3 ≈ 7.67, ignoring that the criteria do not weigh the same.",
    },
    difficulty: 2,
    points: 15,
    competency: 'opportunity-recognition',
  },
  {
    id: 'EMP-03-E4',
    level: 1,
    module: 'EMP-03',
    kind: 'truefalse',
    flavor: 'concept',
    prompt: {
      es: "Si una idea obtiene el puntaje más alto en la matriz ponderada, ya está garantizado que será un negocio exitoso.",
      en: "If an idea gets the highest score in the weighted matrix, it is already guaranteed to be a successful business.",
    },
    answer: false,
    explanation: {
      es: "Falso. La matriz solo ordena tus ideas según tus propios criterios y calificaciones; indica cuál investigar primero. El éxito depende de comprobar con clientes reales. Error común: tomar la matriz como una predicción en lugar de una herramienta para priorizar.",
      en: "False. The matrix only ranks your ideas by your own criteria and scores; it shows which one to research first. Success depends on verifying with real customers. Common mistake: treating the matrix as a prediction instead of a prioritization tool.",
    },
    difficulty: 1,
    points: 10,
    competency: 'opportunity-recognition',
  },
  {
    id: 'EMP-03-E5',
    level: 1,
    module: 'EMP-03',
    kind: 'multi',
    flavor: 'concept',
    prompt: {
      es: "Antes de diseñar tu solución, ¿qué preguntas te ayudan a entender si un problema vale la pena? Selecciona todas las que apliquen.",
      en: "Before designing your solution, which questions help you understand whether a problem is worth it? Select all that apply.",
    },
    options: [
      { id: 'EMP-03-E5-a', text: { es: "¿A quién le pasa este problema?", en: "Who has this problem?" } },
      { id: 'EMP-03-E5-b', text: { es: "¿Cómo lo resuelven hoy y cuánto pagan por ello?", en: "How do they solve it today and how much do they pay for it?" } },
      { id: 'EMP-03-E5-c', text: { es: "¿Qué tan seguido les ocurre?", en: "How often does it happen to them?" } },
      { id: 'EMP-03-E5-d', text: { es: "¿De qué color será el logotipo?", en: "What color will the logo be?" } },
    ],
    correctOptionIds: ['EMP-03-E5-a', 'EMP-03-E5-b', 'EMP-03-E5-c'],
    explanation: {
      es: "Saber a quién le duele, cómo lo resuelve hoy y con qué frecuencia te dice si hay oportunidad. El logotipo es un detalle de marca que viene mucho después. Error común: empezar por la imagen del negocio en lugar de por el problema.",
      en: "Knowing who is hurting, how they solve it today and how often tells you whether there is an opportunity. The logo is a branding detail that comes much later. Common mistake: starting with the business's image instead of the problem.",
    },
    difficulty: 1,
    points: 10,
    competency: 'opportunity-recognition',
  },
  {
    id: 'EMP-03-E6',
    level: 1,
    module: 'EMP-03',
    kind: 'mcq',
    flavor: 'case',
    context: {
      es: "Héctor quiere abrir una papelería frente a una secundaria. Al investigar, descubre que ya hay dos papelerías bien surtidas en la misma calle, con precios bajos y horario amplio, y que los papás están contentos con ellas.",
      en: "Héctor wants to open a stationery store across from a middle school. When researching, he finds there are already two well-stocked stationery stores on the same street, with low prices and long hours, and that parents are happy with them.",
    },
    prompt: {
      es: "Con esa información, ¿qué conclusión es la más razonable para Héctor?",
      en: "With that information, which conclusion is most reasonable for Héctor?",
    },
    options: [
      { id: 'EMP-03-E6-a', text: { es: "Es una gran oportunidad porque hay muchos estudiantes", en: "It is a great opportunity because there are many students" } },
      { id: 'EMP-03-E6-b', text: { es: "La oportunidad es pequeña tal como está; debe buscar un problema que nadie resuelva bien o un enfoque distinto", en: "The opportunity is small as it stands; he should look for a problem nobody solves well or a different angle" } },
      { id: 'EMP-03-E6-c', text: { es: "Debe abrir de inmediato y bajar precios por debajo de su costo", en: "He should open right away and cut prices below his cost" } },
      { id: 'EMP-03-E6-d', text: { es: "La competencia no importa al identificar oportunidades", en: "Competition does not matter when identifying opportunities" } },
    ],
    correctOptionId: 'EMP-03-E6-b',
    explanation: {
      es: "Si la gente ya resuelve bien y barato su problema, el hueco es pequeño. Héctor debería buscar algo no atendido (por ejemplo, impresiones a domicilio) o elegir otra zona. Error común: ver solo el número de clientes posibles e ignorar qué tan bien los atiende la competencia.",
      en: "If people already solve their problem well and cheaply, the gap is small. Héctor should look for something unmet (for example, printing with delivery) or choose another area. Common mistake: looking only at the number of potential customers and ignoring how well competitors serve them.",
    },
    difficulty: 2,
    points: 15,
    competency: 'opportunity-recognition',
  },

  // ═════════════════════════ EMP-04 ═════════════════════════
  {
    id: 'EMP-04-E1',
    level: 1,
    module: 'EMP-04',
    kind: 'classify',
    flavor: 'concept',
    prompt: {
      es: "Clasifica cada negocio según el modelo de negocio que usa.",
      en: "Classify each business by the business model it uses.",
    },
    categories: [
      { id: 'EMP-04-E1-c1', label: { es: "Venta directa", en: "Direct sales" } },
      { id: 'EMP-04-E1-c2', label: { es: "Suscripción", en: "Subscription" } },
      { id: 'EMP-04-E1-c3', label: { es: "Freemium", en: "Freemium" } },
      { id: 'EMP-04-E1-c4', label: { es: "Marketplace (comisión)", en: "Marketplace (commission)" } },
    ],
    items: [
      { id: 'EMP-04-E1-i1', label: { es: "Una paletería que cobra cada paleta que vende", en: "An ice pop shop that charges for each ice pop it sells" }, correctCategoryId: 'EMP-04-E1-c1' },
      { id: 'EMP-04-E1-i2', label: { es: "Un club de lectura que cobra $199 al mes por enviar un libro", en: "A book club that charges $199 a month to send one book" }, correctCategoryId: 'EMP-04-E1-c2' },
      { id: 'EMP-04-E1-i3', label: { es: "Una app de ejercicios gratis con rutinas personalizadas de pago", en: "A free workout app with paid personalized routines" }, correctCategoryId: 'EMP-04-E1-c3' },
      { id: 'EMP-04-E1-i4', label: { es: "Un sitio que une a dueños de casas con plomeros y cobra 10% por trabajo", en: "A site that connects homeowners with plumbers and charges 10% per job" }, correctCategoryId: 'EMP-04-E1-c4' },
      { id: 'EMP-04-E1-i5', label: { es: "Una lavandería que cobra una cuota mensual por recoger y entregar ropa", en: "A laundry that charges a monthly fee to pick up and deliver clothes" }, correctCategoryId: 'EMP-04-E1-c2' },
      { id: 'EMP-04-E1-i6', label: { es: "Una carpintería que fabrica y vende cada mesa por encargo", en: "A carpentry shop that makes and sells each table to order" }, correctCategoryId: 'EMP-04-E1-c1' },
    ],
    explanation: {
      es: "Venta directa = cobras cada venta; suscripción = cuota fija por periodo; freemium = básico gratis y extras de pago; marketplace = conectas a dos lados y cobras comisión. Error común: confundir freemium con suscripción; en el freemium la base es gratis y solo algunos pagan.",
      en: "Direct sales = you charge per sale; subscription = fixed fee per period; freemium = free basics and paid extras; marketplace = you connect two sides and charge a commission. Common mistake: confusing freemium with subscription; in freemium the base is free and only some users pay.",
    },
    difficulty: 1,
    points: 15,
    competency: 'business-models',
  },
  {
    id: 'EMP-04-E2',
    level: 1,
    module: 'EMP-04',
    kind: 'mcq',
    flavor: 'concept',
    prompt: {
      es: "En un modelo de negocio, ¿qué significa capturar valor?",
      en: "In a business model, what does capturing value mean?",
    },
    options: [
      { id: 'EMP-04-E2-a', text: { es: "Elegir el problema que vas a resolver", en: "Choosing the problem you will solve" } },
      { id: 'EMP-04-E2-b', text: { es: "Decidir por qué canal llega el producto al cliente", en: "Deciding through which channel the product reaches the customer" } },
      { id: 'EMP-04-E2-c', text: { es: "Definir cómo cobras y cuánto te queda después de tus costos", en: "Defining how you charge and how much is left after your costs" } },
      { id: 'EMP-04-E2-d', text: { es: "Copiar el modelo de tu competidor más grande", en: "Copying the model of your biggest competitor" } },
    ],
    correctOptionId: 'EMP-04-E2-c',
    explanation: {
      es: "Capturar valor es la parte del dinero: cómo cobras y qué margen te queda. Elegir el problema es crear valor y el canal es entregar valor. Error común: pensar que si el cliente está feliz el negocio ya funciona, aunque no cobres lo suficiente.",
      en: "Capturing value is the money part: how you charge and what margin you keep. Choosing the problem is creating value, and the channel is delivering value. Common mistake: thinking that if the customer is happy the business already works, even if you do not charge enough.",
    },
    difficulty: 1,
    points: 10,
    competency: 'business-models',
  },
  {
    id: 'EMP-04-E3',
    level: 1,
    module: 'EMP-04',
    kind: 'fields',
    flavor: 'case',
    context: {
      es: "Una app de recetas tiene 5,000 usuarios gratuitos. El 4% se pasa al plan premium, que cuesta $99 al mes. (Cifras hipotéticas.)",
      en: "A recipe app has 5,000 free users. 4% upgrade to the premium plan, which costs $99 a month. (Hypothetical figures.)",
    },
    prompt: {
      es: "Calcula los usuarios que pagan, el ingreso mensual y el ingreso anual del plan premium.",
      en: "Compute the paying users, the monthly revenue and the annual revenue from the premium plan.",
    },
    fields: [
      { id: 'f1', label: { es: "Usuarios que pagan", en: "Paying users" }, answer: 200, unit: 'units', tolerance: { abs: 0.5 } },
      { id: 'f2', label: { es: "Ingreso mensual", en: "Monthly revenue" }, answer: 19800, unit: 'MXN', tolerance: { abs: 0.5 } },
      { id: 'f3', label: { es: "Ingreso anual", en: "Annual revenue" }, answer: 237600, unit: 'MXN', tolerance: { abs: 1 } },
    ],
    explanation: {
      es: "Pagan: 5,000 × 0.04 = 200. Mensual: 200 × $99 = $19,800. Anual: $19,800 × 12 = $237,600. Error común: multiplicar los 5,000 usuarios por $99, como si todos pagaran; en el freemium solo una parte se convierte.",
      en: "Paying: 5,000 × 0.04 = 200. Monthly: 200 × $99 = $19,800. Annual: $19,800 × 12 = $237,600. Common mistake: multiplying all 5,000 users by $99 as if everyone paid; in freemium only a share converts.",
    },
    difficulty: 2,
    points: 15,
    competency: 'business-models',
  },
  {
    id: 'EMP-04-E4',
    level: 1,
    module: 'EMP-04',
    kind: 'truefalse',
    flavor: 'concept',
    prompt: {
      es: "Dos negocios que venden el mismo producto siempre tienen el mismo modelo de negocio.",
      en: "Two businesses that sell the same product always have the same business model.",
    },
    answer: false,
    explanation: {
      es: "Falso. Una lavandería puede cobrar por carga (venta directa) y otra por cuota mensual con recolección (suscripción): mismo producto, distinto modelo. Error común: creer que el modelo de negocio es solo el producto que vendes.",
      en: "False. One laundry can charge per load (direct sales) and another a monthly fee with pickup (subscription): same product, different model. Common mistake: believing the business model is just the product you sell.",
    },
    difficulty: 1,
    points: 10,
    competency: 'business-models',
  },
  {
    id: 'EMP-04-E5',
    level: 1,
    module: 'EMP-04',
    kind: 'multi',
    flavor: 'concept',
    prompt: {
      es: "¿Cuáles son retos típicos de los modelos freemium y marketplace? Selecciona todas las que apliquen.",
      en: "Which are typical challenges of freemium and marketplace models? Select all that apply.",
    },
    options: [
      { id: 'EMP-04-E5-a', text: { es: "En freemium, lograr que suficientes usuarios gratuitos pasen al plan de pago", en: "In freemium, getting enough free users to move to the paid plan" } },
      { id: 'EMP-04-E5-b', text: { es: "En marketplace, atraer al mismo tiempo a vendedores y compradores", en: "In a marketplace, attracting sellers and buyers at the same time" } },
      { id: 'EMP-04-E5-c', text: { es: "En marketplace, que la plataforma se queda con el 100% de lo vendido", en: "In a marketplace, that the platform keeps 100% of what is sold" } },
      { id: 'EMP-04-E5-d', text: { es: "En freemium, sostener el costo de atender a los usuarios que no pagan", en: "In freemium, covering the cost of serving users who do not pay" } },
    ],
    correctOptionIds: ['EMP-04-E5-a', 'EMP-04-E5-b', 'EMP-04-E5-d'],
    explanation: {
      es: "El freemium depende de la conversión y de que los que pagan cubran el costo de los gratuitos; el marketplace necesita a los dos lados a la vez. La opción c es falsa: la plataforma solo cobra una comisión. Error común: contar como ingreso de la plataforma todo lo que venden los usuarios.",
      en: "Freemium depends on conversion and on paying users covering the cost of free ones; a marketplace needs both sides at once. Option c is false: the platform only charges a commission. Common mistake: counting everything users sell as the platform's revenue.",
    },
    difficulty: 1,
    points: 10,
    competency: 'business-models',
  },
  {
    id: 'EMP-04-E6',
    level: 1,
    module: 'EMP-04',
    kind: 'numeric',
    flavor: 'case',
    context: {
      es: "Una plataforma en línea conecta a artesanos de Oaxaca con compradores y cobra 12% de comisión por venta. En un mes, los compradores pagan en total $250,000 por artesanías. (Cifras hipotéticas.)",
      en: "An online platform connects artisans from Oaxaca with buyers and charges a 12% commission per sale. In one month, buyers pay a total of $250,000 for crafts. (Hypothetical figures.)",
    },
    prompt: {
      es: "¿Cuánto ingresa la plataforma de artesanías ese mes?",
      en: "How much does the crafts platform earn that month?",
    },
    answer: 30000,
    unit: 'MXN',
    decimals: 0,
    tolerance: { abs: 0.5 },
    explanation: {
      es: "Ingreso por comisión = 250,000 × 0.12 = $30,000. Los otros $220,000 son de los artesanos. Error común: reportar $250,000 como ingreso de la plataforma.",
      en: "Commission revenue = 250,000 × 0.12 = $30,000. The other $220,000 belongs to the artisans. Common mistake: reporting $250,000 as the platform's revenue.",
    },
    difficulty: 1,
    points: 10,
    competency: 'business-models',
  },

  // ═════════════════════════ EMP-05 ═════════════════════════
  {
    id: 'EMP-05-E1',
    level: 1,
    module: 'EMP-05',
    kind: 'classify',
    flavor: 'concept',
    context: {
      es: "Una pastelería que hace pasteles personalizados para fiestas infantiles llena su Business Model Canvas.",
      en: "A cake shop that makes custom cakes for children's parties fills in its Business Model Canvas.",
    },
    prompt: {
      es: "Clasifica cada nota de la pastelería en el bloque del Canvas que le corresponde.",
      en: "Classify each of the cake shop's notes into the Canvas block it belongs to.",
    },
    categories: [
      { id: 'EMP-05-E1-c1', label: { es: "Segmentos de clientes", en: "Customer segments" } },
      { id: 'EMP-05-E1-c2', label: { es: "Propuesta de valor", en: "Value proposition" } },
      { id: 'EMP-05-E1-c3', label: { es: "Canales", en: "Channels" } },
      { id: 'EMP-05-E1-c4', label: { es: "Recursos clave", en: "Key resources" } },
      { id: 'EMP-05-E1-c5', label: { es: "Socios clave", en: "Key partners" } },
      { id: 'EMP-05-E1-c6', label: { es: "Estructura de costos", en: "Cost structure" } },
    ],
    items: [
      { id: 'EMP-05-E1-i1', label: { es: "Mamás y papás que organizan fiestas infantiles", en: "Moms and dads who organize children's parties" }, correctCategoryId: 'EMP-05-E1-c1' },
      { id: 'EMP-05-E1-i2', label: { es: "Pasteles con el personaje favorito del niño, listos en 48 horas", en: "Cakes with the child's favorite character, ready in 48 hours" }, correctCategoryId: 'EMP-05-E1-c2' },
      { id: 'EMP-05-E1-i3', label: { es: "Pedidos por redes sociales y entrega a domicilio", en: "Orders through social media and home delivery" }, correctCategoryId: 'EMP-05-E1-c3' },
      { id: 'EMP-05-E1-i4', label: { es: "Horno industrial y repostera con experiencia", en: "Industrial oven and an experienced pastry chef" }, correctCategoryId: 'EMP-05-E1-c4' },
      { id: 'EMP-05-E1-i5', label: { es: "Salón de fiestas que recomienda la pastelería a sus clientes", en: "Party venue that recommends the cake shop to its customers" }, correctCategoryId: 'EMP-05-E1-c5' },
      { id: 'EMP-05-E1-i6', label: { es: "Harina, mantequilla, renta de la cocina y gasolina para entregas", en: "Flour, butter, kitchen rent and gas for deliveries" }, correctCategoryId: 'EMP-05-E1-c6' },
    ],
    explanation: {
      es: "Segmento = para quién; propuesta = qué beneficio das; canal = cómo te encuentran y reciben; recurso = lo indispensable que tienes; socio = aliado externo que te ayuda; costos = en qué gastas. Error común: poner al salón de fiestas como cliente; no compra pasteles, te ayuda a conseguir clientes, así que es socio clave.",
      en: "Segment = for whom; proposition = what benefit you give; channel = how they find and receive you; resource = the essentials you have; partner = an outside ally who helps you; costs = what you spend on. Common mistake: listing the party venue as a customer; it does not buy cakes, it helps you get customers, so it is a key partner.",
    },
    difficulty: 1,
    points: 20,
    competency: 'business-model-canvas',
  },
  {
    id: 'EMP-05-E2',
    level: 1,
    module: 'EMP-05',
    kind: 'mcq',
    flavor: 'concept',
    prompt: {
      es: "¿Qué bloque está al centro del Business Model Canvas y une el lado del cliente con el de la operación?",
      en: "Which block sits in the center of the Business Model Canvas and connects the customer side with the operations side?",
    },
    options: [
      { id: 'EMP-05-E2-a', text: { es: "Estructura de costos", en: "Cost structure" } },
      { id: 'EMP-05-E2-b', text: { es: "Propuesta de valor", en: "Value proposition" } },
      { id: 'EMP-05-E2-c', text: { es: "Socios clave", en: "Key partners" } },
      { id: 'EMP-05-E2-d', text: { es: "Fuentes de ingresos", en: "Revenue streams" } },
    ],
    correctOptionId: 'EMP-05-E2-b',
    explanation: {
      es: "La propuesta de valor está al centro: todo lo de la derecha existe para llevarla al cliente y todo lo de la izquierda para producirla. Costos e ingresos están abajo y los socios en el extremo izquierdo. Error común: creer que el centro son los ingresos porque el negocio busca ganar dinero.",
      en: "The value proposition sits in the middle: everything on the right exists to bring it to the customer and everything on the left to produce it. Costs and revenue are at the bottom and partners on the far left. Common mistake: believing revenue is at the center because the business aims to make money.",
    },
    difficulty: 1,
    points: 10,
    competency: 'business-model-canvas',
  },
  {
    id: 'EMP-05-E3',
    level: 1,
    module: 'EMP-05',
    kind: 'formula',
    flavor: 'concept',
    prompt: {
      es: "Completa la fórmula que usan los bloques de abajo del Canvas para revisar si el modelo funciona.",
      en: "Complete the formula the bottom blocks of the Canvas use to check whether the model works.",
    },
    template: '{{b1}} − {{b2}} = {{b3}}',
    blanks: [
      {
        id: 'b1',
        options: [
          { id: 'EMP-05-E3-b1-a', text: { es: "Fuentes de ingresos", en: "Revenue streams" } },
          { id: 'EMP-05-E3-b1-b', text: { es: "Segmentos de clientes", en: "Customer segments" } },
          { id: 'EMP-05-E3-b1-c', text: { es: "Recursos clave", en: "Key resources" } },
        ],
        correctOptionId: 'EMP-05-E3-b1-a',
      },
      {
        id: 'b2',
        options: [
          { id: 'EMP-05-E3-b2-a', text: { es: "Canales", en: "Channels" } },
          { id: 'EMP-05-E3-b2-b', text: { es: "Estructura de costos", en: "Cost structure" } },
          { id: 'EMP-05-E3-b2-c', text: { es: "Propuesta de valor", en: "Value proposition" } },
        ],
        correctOptionId: 'EMP-05-E3-b2-b',
      },
      {
        id: 'b3',
        options: [
          { id: 'EMP-05-E3-b3-a', text: { es: "Relación con clientes", en: "Customer relationships" } },
          { id: 'EMP-05-E3-b3-b', text: { es: "Actividades clave", en: "Key activities" } },
          { id: 'EMP-05-E3-b3-c', text: { es: "Resultado del modelo", en: "Model's result" } },
        ],
        correctOptionId: 'EMP-05-E3-b3-c',
      },
    ],
    explanation: {
      es: "Fuentes de ingresos − Estructura de costos = Resultado del modelo. Si el resultado es negativo, hay que cambiar algún bloque. Error común: restar recursos clave en lugar de costos; los recursos son lo que tienes, los costos son lo que te cuesta operar.",
      en: "Revenue streams − Cost structure = Model's result. If the result is negative, some block must change. Common mistake: subtracting key resources instead of costs; resources are what you have, costs are what operating costs you.",
    },
    difficulty: 1,
    points: 10,
    competency: 'business-model-canvas',
  },
  {
    id: 'EMP-05-E4',
    level: 1,
    module: 'EMP-05',
    kind: 'numeric',
    flavor: 'case',
    context: {
      es: "En su Canvas, una repostera espera vender 80 pasteles al mes a $450 cada uno. Su estructura de costos mensual: insumos $14,400, renta de cocina $6,000, publicidad $2,500 y empaques $1,600. (Cifras hipotéticas.)",
      en: "In her Canvas, a pastry chef expects to sell 80 cakes a month at $450 each. Her monthly cost structure: ingredients $14,400, kitchen rent $6,000, advertising $2,500 and packaging $1,600. (Hypothetical figures.)",
    },
    prompt: {
      es: "¿Cuál es el resultado mensual que muestra el Canvas de la repostera?",
      en: "What monthly result does the pastry chef's Canvas show?",
    },
    answer: 11500,
    unit: 'MXN',
    decimals: 0,
    tolerance: { abs: 0.5 },
    explanation: {
      es: "Ingresos: 80 × 450 = $36,000. Costos: 14,400 + 6,000 + 2,500 + 1,600 = $24,500. Resultado: 36,000 − 24,500 = $11,500. Error común: olvidar algún costo pequeño, como los empaques, y sobrestimar el resultado.",
      en: "Revenue: 80 × 450 = $36,000. Costs: 14,400 + 6,000 + 2,500 + 1,600 = $24,500. Result: 36,000 − 24,500 = $11,500. Common mistake: forgetting a small cost, such as packaging, and overstating the result.",
    },
    difficulty: 1,
    points: 15,
    competency: 'business-model-canvas',
  },
  {
    id: 'EMP-05-E5',
    level: 1,
    module: 'EMP-05',
    kind: 'truefalse',
    flavor: 'concept',
    prompt: {
      es: "Lo que escribes en el Business Model Canvas son supuestos que conviene probar con clientes reales y cambiar cuando aprendas algo nuevo.",
      en: "What you write on the Business Model Canvas are assumptions you should test with real customers and change when you learn something new.",
    },
    answer: true,
    explanation: {
      es: "Verdadero. Por eso se recomienda usar notas adhesivas: una idea por nota para moverla o quitarla. Error común: llenar el Canvas una sola vez y tratarlo como un documento terminado.",
      en: "True. That is why sticky notes are recommended: one idea per note so you can move or remove it. Common mistake: filling in the Canvas once and treating it as a finished document.",
    },
    difficulty: 1,
    points: 10,
    competency: 'business-model-canvas',
  },
  {
    id: 'EMP-05-E6',
    level: 1,
    module: 'EMP-05',
    kind: 'multi',
    flavor: 'concept',
    prompt: {
      es: "¿Cuáles de estos bloques pertenecen al lado del cliente (lado derecho) del Canvas? Selecciona todos los que apliquen.",
      en: "Which of these blocks belong to the customer side (right side) of the Canvas? Select all that apply.",
    },
    options: [
      { id: 'EMP-05-E6-a', text: { es: "Canales", en: "Channels" } },
      { id: 'EMP-05-E6-b', text: { es: "Relación con clientes", en: "Customer relationships" } },
      { id: 'EMP-05-E6-c', text: { es: "Actividades clave", en: "Key activities" } },
      { id: 'EMP-05-E6-d', text: { es: "Segmentos de clientes", en: "Customer segments" } },
      { id: 'EMP-05-E6-e', text: { es: "Socios clave", en: "Key partners" } },
    ],
    correctOptionIds: ['EMP-05-E6-a', 'EMP-05-E6-b', 'EMP-05-E6-d'],
    explanation: {
      es: "Canales, relación con clientes y segmentos están del lado derecho (junto con las fuentes de ingresos). Actividades y socios clave son del lado izquierdo, el de la operación. Error común: poner a los socios del lado del cliente porque también son personas externas.",
      en: "Channels, customer relationships and segments are on the right side (along with revenue streams). Key activities and partners are on the left, operations side. Common mistake: placing partners on the customer side because they are also outside parties.",
    },
    difficulty: 1,
    points: 10,
    competency: 'business-model-canvas',
  },

  // ═════════════════════════ EMP-06 ═════════════════════════
  {
    id: 'EMP-06-E1',
    level: 1,
    module: 'EMP-06',
    kind: 'classify',
    flavor: 'concept',
    prompt: {
      es: "Clasifica cada fuente de información de mercado como primaria o secundaria.",
      en: "Classify each source of market information as primary or secondary.",
    },
    categories: [
      { id: 'EMP-06-E1-c1', label: { es: "Fuente primaria", en: "Primary source" } },
      { id: 'EMP-06-E1-c2', label: { es: "Fuente secundaria", en: "Secondary source" } },
    ],
    items: [
      { id: 'EMP-06-E1-i1', label: { es: "Una encuesta que aplicas a 100 clientes de un mercado", en: "A survey you give to 100 shoppers at a market" }, correctCategoryId: 'EMP-06-E1-c1' },
      { id: 'EMP-06-E1-i2', label: { es: "Estadísticas de población publicadas por el INEGI", en: "Population statistics published by INEGI" }, correctCategoryId: 'EMP-06-E1-c2' },
      { id: 'EMP-06-E1-i3', label: { es: "Contar cuántas personas entran a la tienda de enfrente en una hora", en: "Counting how many people enter the store across the street in an hour" }, correctCategoryId: 'EMP-06-E1-c1' },
      { id: 'EMP-06-E1-i4', label: { es: "Un estudio de la industria del café publicado por una cámara empresarial", en: "A coffee industry study published by a business chamber" }, correctCategoryId: 'EMP-06-E1-c2' },
      { id: 'EMP-06-E1-i5', label: { es: "Entrevistas a fondo con 10 dueños de mascotas", en: "In-depth interviews with 10 pet owners" }, correctCategoryId: 'EMP-06-E1-c1' },
      { id: 'EMP-06-E1-i6', label: { es: "Un reportaje de periódico sobre hábitos de compra en línea", en: "A newspaper report on online shopping habits" }, correctCategoryId: 'EMP-06-E1-c2' },
    ],
    explanation: {
      es: "Primaria = datos que tú recolectas para tu pregunta (encuestas, observación, entrevistas). Secundaria = datos que otro ya publicó (INEGI, estudios, reportajes). Error común: pensar que una fuente es primaria por ser oficial; el INEGI es secundaria para ti porque tú no recolectaste esos datos.",
      en: "Primary = data you collect for your question (surveys, observation, interviews). Secondary = data someone else already published (INEGI, studies, news reports). Common mistake: thinking a source is primary because it is official; INEGI is secondary for you because you did not collect that data.",
    },
    difficulty: 1,
    points: 15,
    competency: 'market-research',
  },
  {
    id: 'EMP-06-E2',
    level: 1,
    module: 'EMP-06',
    kind: 'mcq',
    flavor: 'concept',
    prompt: {
      es: "¿Cuál de estas preguntas de encuesta es la mejor para conocer el gasto real de los clientes en lavado de autos?",
      en: "Which of these survey questions is best for learning customers' actual spending on car washes?",
    },
    options: [
      { id: 'EMP-06-E2-a', text: { es: "¿Verdad que pagarías más por un lavado de mejor calidad?", en: "Wouldn't you pay more for a better-quality wash?" } },
      { id: 'EMP-06-E2-b', text: { es: "¿Cuánto pagaste la última vez que lavaste tu auto?", en: "How much did you pay the last time you washed your car?" } },
      { id: 'EMP-06-E2-c', text: { es: "¿Te gustaría que abriera un autolavado increíble cerca de tu casa?", en: "Would you like me to open an amazing car wash near your home?" } },
      { id: 'EMP-06-E2-d', text: { es: "¿Cuánto crees que pagarán otras personas dentro de cinco años?", en: "How much do you think other people will pay in five years?" } },
    ],
    correctOptionId: 'EMP-06-E2-b',
    explanation: {
      es: "Preguntar por un hecho pasado da datos más confiables. Las opciones a y c inducen la respuesta, y la d pide adivinar lo que harán otros a futuro. Error común: confiar en el \"sí, me encantaría\", porque la gente suele decir que compraría más de lo que realmente compra.",
      en: "Asking about a past fact gives more reliable data. Options a and c are leading, and d asks people to guess what others will do in the future. Common mistake: trusting the \"yes, I'd love it\", because people tend to say they would buy more than they actually do.",
    },
    difficulty: 1,
    points: 10,
    competency: 'market-research',
  },
  {
    id: 'EMP-06-E3',
    level: 1,
    module: 'EMP-06',
    kind: 'fields',
    flavor: 'case',
    context: {
      es: "En una ciudad hay 200,000 hogares con mascota que gastan, en promedio, $6,000 al año en croquetas. Una tienda en línea con entrega propia solo alcanza al 15% de esos hogares, y espera ganar el 2% del mercado que puede atender. (Cifras hipotéticas.)",
      en: "In a city there are 200,000 households with pets that spend an average of $6,000 a year on pet food. An online store with its own delivery can only reach 15% of those households and expects to win 2% of the market it can serve. (Hypothetical figures.)",
    },
    prompt: {
      es: "Calcula el TAM, el SAM y el SOM anuales de la tienda de croquetas.",
      en: "Compute the pet food store's annual TAM, SAM and SOM.",
    },
    fields: [
      { id: 'f1', label: { es: "TAM (mercado total)", en: "TAM (total market)" }, answer: 1200000000, unit: 'MXN', tolerance: { abs: 1 } },
      { id: 'f2', label: { es: "SAM (mercado que puede atender)", en: "SAM (serviceable market)" }, answer: 180000000, unit: 'MXN', tolerance: { abs: 1 } },
      { id: 'f3', label: { es: "SOM (mercado que puede ganar)", en: "SOM (obtainable market)" }, answer: 3600000, unit: 'MXN', tolerance: { abs: 1 } },
    ],
    explanation: {
      es: "TAM = 200,000 × 6,000 = $1,200,000,000. SAM = 1,200,000,000 × 0.15 = $180,000,000. SOM = 180,000,000 × 0.02 = $3,600,000. Error común: aplicar el 2% al TAM en lugar de al SAM ($24,000,000), lo que exagera casi siete veces lo que la tienda puede ganar.",
      en: "TAM = 200,000 × 6,000 = $1,200,000,000. SAM = 1,200,000,000 × 0.15 = $180,000,000. SOM = 180,000,000 × 0.02 = $3,600,000. Common mistake: applying the 2% to the TAM instead of the SAM ($24,000,000), which overstates what the store can win almost sevenfold.",
    },
    difficulty: 2,
    points: 20,
    competency: 'market-research',
  },
  {
    id: 'EMP-06-E4',
    level: 1,
    module: 'EMP-06',
    kind: 'numeric',
    flavor: 'interpret',
    context: {
      es: "Un emprendedor que planea vender comida vegetariana encuesta a 240 personas que trabajan en una plaza comercial. 84 responden que la semana pasada compraron comida vegetariana al menos una vez.",
      en: "An entrepreneur planning to sell vegetarian food surveys 240 people who work in a shopping center. 84 answer that last week they bought vegetarian food at least once.",
    },
    prompt: {
      es: "¿Qué porcentaje de los encuestados compró comida vegetariana la semana pasada?",
      en: "What percentage of respondents bought vegetarian food last week?",
    },
    answer: 35,
    unit: '%',
    decimals: 0,
    tolerance: { abs: 0.1 },
    explanation: {
      es: "84 ÷ 240 = 0.35 → 35%. Como la pregunta es sobre un hecho pasado, el dato es más confiable que un \"sí compraría\". Error común: dividir al revés (240 ÷ 84) o calcular sobre una población distinta a la encuestada.",
      en: "84 ÷ 240 = 0.35 → 35%. Since the question is about a past fact, the figure is more reliable than a \"yes, I would buy\". Common mistake: dividing the other way around (240 ÷ 84) or computing over a population other than the one surveyed.",
    },
    difficulty: 1,
    points: 10,
    competency: 'market-research',
  },
  {
    id: 'EMP-06-E5',
    level: 1,
    module: 'EMP-06',
    kind: 'truefalse',
    flavor: 'concept',
    prompt: {
      es: "Encuestar solo a tus amigos y familiares es una buena muestra para estimar cuántos clientes reales tendrá tu negocio.",
      en: "Surveying only your friends and family is a good sample for estimating how many real customers your business will have.",
    },
    answer: false,
    explanation: {
      es: "Falso. Tus amigos y familia suelen querer apoyarte y no se parecen necesariamente a tus clientes, así que sesgan los resultados. La muestra debe parecerse a las personas que realmente comprarían. Error común: tomar el entusiasmo de los conocidos como prueba de demanda.",
      en: "False. Your friends and family tend to want to support you and do not necessarily resemble your customers, so they bias the results. The sample should resemble the people who would actually buy. Common mistake: taking acquaintances' enthusiasm as proof of demand.",
    },
    difficulty: 1,
    points: 10,
    competency: 'market-research',
  },
  {
    id: 'EMP-06-E6',
    level: 1,
    module: 'EMP-06',
    kind: 'mcq',
    flavor: 'case',
    context: {
      es: "Lucía quiere entender por qué las mamás de su colonia eligen una guardería y no otra: qué les preocupa, qué valoran y cómo toman la decisión.",
      en: "Lucía wants to understand why moms in her neighborhood choose one daycare over another: what worries them, what they value and how they make the decision.",
    },
    prompt: {
      es: "¿Qué herramienta de investigación le conviene más a Lucía para empezar?",
      en: "Which research tool suits Lucía best to start with?",
    },
    options: [
      { id: 'EMP-06-E6-a', text: { es: "Entrevistas a fondo con algunas mamás", en: "In-depth interviews with a few moms" } },
      { id: 'EMP-06-E6-b', text: { es: "Una encuesta de opción múltiple a 500 personas de cualquier edad", en: "A multiple-choice survey of 500 people of any age" } },
      { id: 'EMP-06-E6-c', text: { es: "Contar los autos que pasan frente a su casa", en: "Counting the cars that pass in front of her house" } },
      { id: 'EMP-06-E6-d', text: { es: "Calcular el TAM sin hablar con nadie", en: "Computing the TAM without talking to anyone" } },
    ],
    correctOptionId: 'EMP-06-E6-a',
    explanation: {
      es: "Para entender motivos, preocupaciones y cómo se decide, la entrevista a fondo es la herramienta adecuada. Una encuesta mide cuántos, pero primero necesita saber qué preguntar; además, la opción b no se enfoca en mamás. Error común: lanzar una encuesta enorme antes de entender el problema.",
      en: "To understand motives, concerns and how decisions are made, the in-depth interview is the right tool. A survey measures how many, but it first needs to know what to ask; also, option b does not focus on moms. Common mistake: launching a huge survey before understanding the problem.",
    },
    difficulty: 1,
    points: 10,
    competency: 'market-research',
  },
]
