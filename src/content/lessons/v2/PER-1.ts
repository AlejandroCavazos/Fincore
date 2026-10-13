import type { Exercise, Lesson } from '../../../types'

/**
 * FINCORE — Temario v2.0 · Finanzas Personales y Educación Financiera · Nivel 1 (Básico)
 * PER.1 a PER.6: dinero, educación financiera, administración, presupuesto, ingresos/gastos/ahorro e inflación.
 */

const NOTE_MONEY = {
  es: "Contenido educativo. Las referencias al Banco de México y a la historia del peso son generales; las reglas y los billetes en circulación cambian con el tiempo, así que verifica la información vigente (2026) en fuentes oficiales.",
  en: "Educational content. References to Banco de México and to the history of the peso are general; rules and the notes in circulation change over time, so verify the current information (2026) with official sources.",
}

const NOTE_CONSUMER = {
  es: "Contenido educativo. Las funciones de autoridades como la CONDUSEF se describen de forma general; sus servicios y reglas cambian, así que verifica la información vigente (2026) antes de tomar decisiones.",
  en: "Educational content. The roles of authorities such as CONDUSEF are described in general terms; their services and rules change, so verify the current information (2026) before making decisions.",
}

const NOTE_BUDGET = {
  es: "Contenido educativo. La regla 50/30/20 es una guía práctica, no una norma. Las cifras de los ejemplos son hipotéticas; ajusta tu presupuesto a tus ingresos y gastos reales.",
  en: "Educational content. The 50/30/20 rule is a practical guide, not a regulation. The figures in the examples are hypothetical; adjust your budget to your real income and expenses.",
}

const NOTE_SAVING = {
  es: "Contenido educativo. Las retenciones de impuestos y cuotas de seguridad social de los ejemplos son hipotéticas. El seguro de depósitos del IPAB tiene límites y condiciones que pueden cambiar: verifica la versión vigente (2026).",
  en: "Educational content. The tax withholdings and social security contributions in the examples are hypothetical. IPAB's deposit insurance has limits and conditions that may change: verify the current version (2026).",
}

const NOTE_INFLATION = {
  es: "Contenido educativo. El INPC lo publica el INEGI y el Banco de México tiene como objetivo una inflación baja y estable (su meta se ha expresado como 3% anual con un intervalo de más o menos un punto). Las cifras de los ejemplos son hipotéticas: verifica los datos y la meta vigentes (2026).",
  en: "Educational content. The INPC (National Consumer Price Index) is published by INEGI, and Banco de México aims for low and stable inflation (its target has been expressed as 3% per year with a range of plus or minus one point). The figures in the examples are hypothetical: verify the current data and target (2026).",
}

export const lessons: Lesson[] = [
  // ───────────────────────────── PER-01 ─────────────────────────────
  {
    id: 'PER-01',
    level: 1,
    topicIds: ['PER.1'],
    title: { es: "Historia y funciones del dinero", en: "History and functions of money" },
    summary: {
      es: "El dinero nació para resolver los problemas del trueque y hoy cumple tres funciones: sirve para intercambiar, para medir precios y para guardar valor.",
      en: "Money was born to solve the problems of barter and today it has three functions: it is used to exchange, to measure prices and to store value.",
    },
    minutes: 14,
    objectives: [
      { es: "Explicar por qué el trueque era incómodo y cómo el dinero resolvió ese problema.", en: "Explain why barter was inconvenient and how money solved that problem." },
      { es: "Describir las etapas del dinero: mercancía, monedas, billetes y dinero digital.", en: "Describe the stages of money: commodity, coins, notes and digital money." },
      { es: "Identificar las tres funciones del dinero en situaciones de la vida diaria.", en: "Identify the three functions of money in everyday situations." },
      { es: "Reconocer las características que hacen que algo funcione bien como dinero.", en: "Recognize the characteristics that make something work well as money." },
    ],
    theory: [
      {
        heading: { es: "Del trueque al dinero mercancía", en: "From barter to commodity money" },
        body: [
          {
            es: "Antes del dinero existía el **trueque**: cambiar una cosa por otra. Si tú tenías maíz y querías sandalias, buscabas a alguien con sandalias que quisiera maíz. Funciona en una comunidad pequeña, pero se complica rápido.",
            en: "Before money there was **barter**: trading one thing for another. If you had corn and wanted sandals, you looked for someone with sandals who wanted corn. It works in a small community, but it quickly gets complicated.",
          },
          {
            es: "El gran problema se llama **doble coincidencia de necesidades**: tú necesitas lo que el otro tiene **y** el otro necesita lo que tú tienes, al mismo tiempo. Además, ¿cuántos jitomates vale una gallina? No hay una medida común y muchas cosas no se pueden partir ni guardar.",
            en: "The big problem is called the **double coincidence of wants**: you need what the other person has **and** the other person needs what you have, at the same time. Also, how many tomatoes is a hen worth? There is no common measure, and many things cannot be split or stored.",
          },
          {
            es: "La solución fue elegir un bien que **todos aceptaran**: el **dinero mercancía**. Se usaron sal, conchas, metales y, en Mesoamérica, **semillas de cacao** y **mantas de algodón**. Ese bien tenía valor por sí mismo y servía de \"puente\" en cualquier intercambio.",
            en: "The solution was to choose a good that **everyone accepted**: **commodity money**. Salt, shells, metals and, in Mesoamerica, **cacao beans** and **cotton cloths** were used. That good had value in itself and served as a \"bridge\" in any exchange.",
          },
          {
            es: "Mini ejemplo: un alfarero quiere pescado, pero el pescador no necesita ollas. Con cacao, el alfarero vende sus ollas a quien sí las quiere y con ese cacao paga el pescado. Ya no hace falta la doble coincidencia.",
            en: "Mini example: a potter wants fish, but the fisherman does not need pots. With cacao, the potter sells his pots to someone who does want them and uses that cacao to pay for the fish. The double coincidence is no longer needed.",
          },
        ],
        bullets: [
          { es: "Trueque: cambio directo de bienes, sin dinero.", en: "Barter: direct exchange of goods, without money." },
          { es: "Doble coincidencia: ambos deben querer lo que el otro ofrece.", en: "Double coincidence: both must want what the other offers." },
          { es: "Dinero mercancía: un bien con valor propio que todos aceptan (cacao, sal, metales).", en: "Commodity money: a good with its own value that everyone accepts (cacao, salt, metals)." },
        ],
      },
      {
        heading: { es: "Monedas, billetes y dinero digital", en: "Coins, notes and digital money" },
        body: [
          {
            es: "Con el tiempo, los metales como el oro y la plata ganaron terreno porque duran y se pueden dividir. Luego se acuñaron **monedas**: piezas de metal con un sello que garantizaba su peso y pureza, así nadie tenía que pesarlas en cada compra.",
            en: "Over time, metals such as gold and silver gained ground because they last and can be divided. Then **coins** were minted: pieces of metal with a stamp that guaranteed their weight and purity, so nobody had to weigh them at every purchase.",
          },
          {
            es: "Cargar mucho metal era pesado y riesgoso, así que aparecieron los **billetes**: papeles que al principio se podían cambiar por metal guardado en otro lugar. China fue de los primeros lugares en usar papel moneda. Hoy casi todo el dinero es **fiduciario**: vale porque la gente **confía** en él y la ley obliga a aceptarlo, no porque esté respaldado por oro.",
            en: "Carrying a lot of metal was heavy and risky, so **bank notes** appeared: papers that at first could be exchanged for metal kept somewhere else. China was one of the first places to use paper money. Today almost all money is **fiat**: it is worth something because people **trust** it and the law requires it to be accepted, not because it is backed by gold.",
          },
          {
            es: "En México, el **Banco de México (Banxico)** es quien emite los billetes y monedas del **peso**. Además, la mayor parte del dinero ya no es físico: es **dinero digital** que vive en cuentas bancarias y se mueve con tarjetas, transferencias o el celular.",
            en: "In Mexico, **Banco de México (Banxico)** issues the **peso** notes and coins. Moreover, most money is no longer physical: it is **digital money** that lives in bank accounts and moves through cards, transfers or the phone.",
          },
          {
            es: "Mini ejemplo: en 1993 México quitó tres ceros a su moneda y creó el \"nuevo peso\": $1,000 de los antiguos pasaron a ser $1 nuevo. Un precio de $5,000 pesos viejos quedó en $5. El valor no cambió, solo la forma de escribirlo.",
            en: "Mini example: in 1993 Mexico removed three zeros from its currency and created the \"new peso\": 1,000 old pesos became 1 new peso. A price of 5,000 old pesos became 5. The value did not change, only the way it was written.",
          },
        ],
      },
      {
        heading: { es: "Las tres funciones del dinero y sus características", en: "The three functions of money and its characteristics" },
        body: [
          {
            es: "Los economistas dicen que el dinero cumple **tres funciones**. Es **medio de cambio**: lo das a cambio de bienes y servicios. Es **unidad de cuenta**: todos los precios se expresan en la misma medida (pesos), así puedes comparar. Y es **depósito de valor**: puedes guardarlo hoy y usarlo después.",
            en: "Economists say money has **three functions**. It is a **medium of exchange**: you give it in exchange for goods and services. It is a **unit of account**: all prices are expressed in the same measure (pesos), so you can compare. And it is a **store of value**: you can keep it today and use it later.",
          },
          {
            es: "Para cumplirlas bien, el dinero necesita ciertas **características**. Algo que se pudre, que pesa demasiado o que cualquiera puede copiar no sirve como dinero.",
            en: "To fulfill them well, money needs certain **characteristics**. Something that rots, weighs too much or that anyone can copy does not work as money.",
          },
          {
            es: "Ojo: el dinero es un depósito de valor **imperfecto**. Si los precios suben, el mismo billete compra menos con el tiempo. Lo verás en la lección de inflación.",
            en: "Note: money is an **imperfect** store of value. If prices rise, the same bill buys less over time. You will see this in the inflation lesson.",
          },
          {
            es: "Mini ejemplo: pagas $35 por un pan dulce y un café (medio de cambio); ves que en otra panadería cuesta $30 (unidad de cuenta); y guardas $200 en tu cartera para el fin de semana (depósito de valor).",
            en: "Mini example: you pay $35 for a sweet bread and a coffee (medium of exchange); you see it costs $30 at another bakery (unit of account); and you keep $200 in your wallet for the weekend (store of value).",
          },
        ],
        bullets: [
          { es: "Aceptado: todos lo reciben como pago.", en: "Accepted: everyone takes it as payment." },
          { es: "Durable: no se echa a perder con el uso.", en: "Durable: it does not spoil with use." },
          { es: "Divisible: se puede partir en cantidades pequeñas (centavos, monedas).", en: "Divisible: it can be split into small amounts (cents, coins)." },
          { es: "Portátil: fácil de llevar.", en: "Portable: easy to carry." },
          { es: "Homogéneo y difícil de falsificar: cada peso vale lo mismo y es difícil de copiar.", en: "Uniform and hard to counterfeit: each peso is worth the same and is hard to copy." },
        ],
      },
    ],
    examples: [
      {
        title: { es: "El trueque del mercado", en: "The market barter" },
        problem: {
          es: "En un mercado sin dinero, Lupita tiene 10 kilos de frijol y quiere un rebozo. La tejedora del rebozo solo quiere miel. El apicultor que vende miel sí quiere frijol. ¿Cuántos intercambios necesita Lupita y cómo lo resolvería el dinero?",
          en: "In a market without money, Lupita has 10 kilos of beans and wants a shawl. The shawl weaver only wants honey. The beekeeper selling honey does want beans. How many trades does Lupita need, and how would money solve it?",
        },
        steps: [
          { es: "Lupita no puede cambiar frijol por rebozo directo: la tejedora no quiere frijol.", en: "Lupita cannot trade beans for the shawl directly: the weaver does not want beans." },
          { es: "Intercambio 1: frijol por miel con el apicultor.", en: "Trade 1: beans for honey with the beekeeper." },
          { es: "Intercambio 2: miel por rebozo con la tejedora.", en: "Trade 2: honey for the shawl with the weaver." },
          { es: "Con dinero: vende su frijol a cualquiera que lo quiera y paga el rebozo con ese dinero.", en: "With money: she sells her beans to anyone who wants them and pays for the shawl with that money." },
        ],
        result: {
          es: "Con trueque necesita 2 intercambios y encontrar a la persona exacta. Con dinero, basta con vender y comprar: el dinero funciona como medio de cambio.",
          en: "With barter she needs 2 trades and must find exactly the right person. With money she just sells and buys: money works as a medium of exchange.",
        },
      },
      {
        title: { es: "Convertir precios del peso viejo al nuevo peso", en: "Converting prices from the old peso to the new peso" },
        problem: {
          es: "En 1993 se cambió $1,000 pesos viejos por $1 nuevo peso. Si un refrigerador costaba $2,400,000 pesos viejos, ¿cuánto costaba en nuevos pesos?",
          en: "In 1993, 1,000 old pesos were exchanged for 1 new peso. If a refrigerator cost 2,400,000 old pesos, how much did it cost in new pesos?",
        },
        steps: [
          { es: "Regla: nuevos pesos = pesos viejos ÷ 1,000.", en: "Rule: new pesos = old pesos ÷ 1,000." },
          { es: "2,400,000 ÷ 1,000 = 2,400.", en: "2,400,000 ÷ 1,000 = 2,400." },
          { es: "El refrigerador vale lo mismo; solo cambió la unidad de cuenta.", en: "The refrigerator is worth the same; only the unit of account changed." },
        ],
        result: {
          es: "Costaba $2,400 nuevos pesos. Quitar ceros no hace a nadie más rico ni más pobre.",
          en: "It cost 2,400 new pesos. Removing zeros does not make anyone richer or poorer.",
        },
      },
    ],
    keyPoints: [
      { es: "El trueque exige doble coincidencia de necesidades; el dinero elimina ese problema.", en: "Barter requires a double coincidence of wants; money removes that problem." },
      { es: "El dinero evolucionó: mercancía (cacao, sal), monedas, billetes y dinero digital.", en: "Money evolved: commodity (cacao, salt), coins, notes and digital money." },
      { es: "Hoy el dinero es fiduciario: vale por la confianza y la ley, no por estar respaldado en oro.", en: "Today money is fiat: it is worth something because of trust and law, not gold backing." },
      { es: "Tres funciones: medio de cambio, unidad de cuenta y depósito de valor.", en: "Three functions: medium of exchange, unit of account and store of value." },
      { es: "Buen dinero: aceptado, durable, divisible, portátil y difícil de falsificar.", en: "Good money: accepted, durable, divisible, portable and hard to counterfeit." },
    ],
    normativeNote: NOTE_MONEY,
    exerciseIds: ['PER-01-E1', 'PER-01-E2', 'PER-01-E3', 'PER-01-E4', 'PER-01-E5', 'PER-01-E6'],
  },

  // ───────────────────────────── PER-02 ─────────────────────────────
  {
    id: 'PER-02',
    level: 1,
    topicIds: ['PER.2'],
    title: { es: "Fundamentos de educación financiera", en: "Fundamentals of financial literacy" },
    summary: {
      es: "La educación financiera es saber, querer y poder usar tu dinero para decidir mejor: distinguir necesidades de deseos, ponerte metas claras y comparar antes de comprometerte.",
      en: "Financial literacy is knowing, wanting and being able to use your money to decide better: telling needs from wants, setting clear goals and comparing before committing.",
    },
    minutes: 14,
    objectives: [
      { es: "Explicar qué es la educación financiera y por qué no depende de cuánto ganas.", en: "Explain what financial literacy is and why it does not depend on how much you earn." },
      { es: "Distinguir necesidades de deseos y entender el costo de oportunidad.", en: "Tell needs from wants and understand opportunity cost." },
      { es: "Plantear metas financieras concretas, medibles y con fecha.", en: "Set financial goals that are concrete, measurable and dated." },
      { es: "Aplicar hábitos básicos de consumidor informado, como comparar el costo total.", en: "Apply basic informed-consumer habits, such as comparing the total cost." },
    ],
    theory: [
      {
        heading: { es: "¿Qué es la educación financiera?", en: "What is financial literacy?" },
        body: [
          {
            es: "La **educación financiera** es el conjunto de **conocimientos, habilidades y actitudes** que te ayudan a tomar buenas decisiones con tu dinero. No basta con saber: también hay que **actuar** con esos conocimientos todos los días.",
            en: "**Financial literacy** is the set of **knowledge, skills and attitudes** that help you make good decisions with your money. Knowing is not enough: you also have to **act** on that knowledge every day.",
          },
          {
            es: "Un error común es pensar que es solo para quien gana mucho. En realidad, quien tiene **poco margen** es quien más gana al decidir bien: un mal crédito o una compra impulsiva pesan más cuando el dinero es justo.",
            en: "A common mistake is thinking it is only for people who earn a lot. In fact, people with **little margin** benefit the most from deciding well: a bad loan or an impulse purchase weighs more when money is tight.",
          },
          {
            es: "Mini ejemplo: dos amigos ganan lo mismo. Uno anota sus gastos, compara precios y guarda algo cada quincena; el otro compra lo primero que ve. Al año, el primero tiene un colchón y el segundo vive con angustia, aunque sus ingresos sean iguales.",
            en: "Mini example: two friends earn the same. One writes down expenses, compares prices and puts something aside every payday; the other buys the first thing he sees. After a year, the first has a cushion and the second lives in distress, even though their incomes are equal.",
          },
        ],
        bullets: [
          { es: "Conocimiento: entender conceptos como ahorro, crédito e inflación.", en: "Knowledge: understanding concepts such as saving, credit and inflation." },
          { es: "Habilidad: saber hacer cuentas, leer un contrato o comparar opciones.", en: "Skill: being able to do the math, read a contract or compare options." },
          { es: "Actitud: pensar en el futuro y no solo en el ahora.", en: "Attitude: thinking about the future, not just the present." },
          { es: "Comportamiento: convertir lo anterior en hábitos diarios.", en: "Behavior: turning all of the above into daily habits." },
        ],
      },
      {
        heading: { es: "Necesidades, deseos y costo de oportunidad", en: "Needs, wants and opportunity cost" },
        body: [
          {
            es: "Una **necesidad** es algo indispensable para vivir o trabajar: comida, vivienda, transporte, medicinas. Un **deseo** es algo que te gusta pero puedes posponer o sustituir: el celular de último modelo, comer fuera, ropa de marca. Ambos son válidos, pero las necesidades van primero.",
            en: "A **need** is something essential to live or work: food, housing, transportation, medicine. A **want** is something you like but can postpone or replace: the latest phone, eating out, designer clothes. Both are valid, but needs come first.",
          },
          {
            es: "Como el dinero es **limitado**, cada vez que eliges algo renuncias a otra cosa. Lo que dejas de tener por elegir una opción se llama **costo de oportunidad**. No siempre es dinero: también puede ser tiempo o tranquilidad.",
            en: "Because money is **limited**, every time you choose something you give up something else. What you give up by choosing one option is called the **opportunity cost**. It is not always money: it can also be time or peace of mind.",
          },
          {
            es: "Mini ejemplo: tienes $1,500. Si los gastas en un concierto, el costo de oportunidad puede ser el par de zapatos escolares que tu hijo necesitaba. Preguntarte \"¿qué dejo de hacer con este dinero?\" es una de las herramientas más poderosas de las finanzas personales.",
            en: "Mini example: you have $1,500. If you spend it on a concert, the opportunity cost may be the pair of school shoes your child needed. Asking yourself \"what do I give up with this money?\" is one of the most powerful tools in personal finance.",
          },
        ],
      },
      {
        heading: { es: "Metas claras y decisiones informadas", en: "Clear goals and informed decisions" },
        body: [
          {
            es: "Una meta financiera sirve si es **concreta, medible, alcanzable, relevante y con fecha** (a veces se le llama meta SMART por sus siglas en inglés). \"Quiero ahorrar\" no es una meta; \"quiero juntar $6,000 para el uniforme y útiles antes de agosto\" sí lo es.",
            en: "A financial goal is useful if it is **specific, measurable, achievable, relevant and time-bound** (often called a SMART goal). \"I want to save\" is not a goal; \"I want to put together $6,000 for uniforms and school supplies before August\" is.",
          },
          {
            es: "Antes de comprometerte con una compra o un producto financiero, sé un **consumidor informado**: compara el **costo total**, no solo la mensualidad; lee las condiciones; y pregunta lo que no entiendas. En México, la **CONDUSEF** es la autoridad que orienta y defiende a los usuarios de servicios financieros.",
            en: "Before committing to a purchase or a financial product, be an **informed consumer**: compare the **total cost**, not just the monthly payment; read the terms; and ask about anything you do not understand. In Mexico, **CONDUSEF** is the authority that guides and defends users of financial services.",
          },
          {
            es: "Mini ejemplo: una pantalla cuesta $8,000 de contado o \"solo $450 a la semana\" durante 24 semanas. 450 × 24 = $10,800. La mensualidad parece pequeña, pero pagarías $2,800 más.",
            en: "Mini example: a TV costs $8,000 cash or \"only $450 a week\" for 24 weeks. 450 × 24 = $10,800. The payment looks small, but you would pay $2,800 more.",
          },
        ],
        formula: "Costo total a plazos = pago periódico × número de pagos",
        bullets: [
          { es: "Compara el costo total entre opciones.", en: "Compare the total cost between options." },
          { es: "Lee el contrato y las comisiones antes de firmar.", en: "Read the contract and fees before signing." },
          { es: "Nunca compartas contraseñas, NIP ni códigos de seguridad.", en: "Never share passwords, PINs or security codes." },
          { es: "Si algo no queda claro, pregunta o busca orientación.", en: "If something is unclear, ask or seek guidance." },
        ],
      },
    ],
    examples: [
      {
        title: { es: "Separar necesidades y deseos en una lista de compras", en: "Separating needs and wants in a shopping list" },
        problem: {
          es: "Carlos tiene $2,000 para la quincena después de pagar la renta. Su lista: despensa $1,100, recarga de celular $150, pasajes $400, audífonos nuevos $700, cena con amigos $500. ¿Qué puede pagar sin endeudarse?",
          en: "Carlos has $2,000 for the fortnight after paying rent. His list: groceries $1,100, phone top-up $150, fares $400, new headphones $700, dinner with friends $500. What can he pay without going into debt?",
        },
        steps: [
          { es: "Necesidades: despensa $1,100 + pasajes $400 + recarga $150 (la usa para trabajar) = $1,650.", en: "Needs: groceries $1,100 + fares $400 + top-up $150 (he uses it for work) = $1,650." },
          { es: "Le quedan 2,000 − 1,650 = $350.", en: "He has 2,000 − 1,650 = $350 left." },
          { es: "Deseos: audífonos $700 y cena $500 = $1,200; no le alcanza para ambos.", en: "Wants: headphones $700 and dinner $500 = $1,200; he cannot afford both." },
          { es: "Opciones: una cena más sencilla de hasta $350 o posponer los audífonos y ahorrar para ellos.", en: "Options: a simpler dinner of up to $350, or postpone the headphones and save for them." },
        ],
        result: {
          es: "Cubre primero sus $1,650 de necesidades y decide en qué usar los $350 restantes; el costo de oportunidad de los audífonos hoy sería endeudarse.",
          en: "He covers his $1,650 of needs first and decides how to use the remaining $350; the opportunity cost of the headphones today would be going into debt.",
        },
      },
      {
        title: { es: "Convertir un deseo en meta medible", en: "Turning a wish into a measurable goal" },
        problem: {
          es: "Mariana dice: \"quiero una laptop algún día\". La laptop que necesita cuesta $12,000 y quiere comprarla en 10 meses para la universidad. Conviértelo en meta SMART.",
          en: "Mariana says: \"I want a laptop someday.\" The laptop she needs costs $12,000 and she wants to buy it in 10 months for university. Turn it into a SMART goal.",
        },
        steps: [
          { es: "Concreta: una laptop para la universidad.", en: "Specific: a laptop for university." },
          { es: "Medible: $12,000.", en: "Measurable: $12,000." },
          { es: "Con fecha: 10 meses. Monto mensual: 12,000 ÷ 10 = $1,200.", en: "Time-bound: 10 months. Monthly amount: 12,000 ÷ 10 = $1,200." },
          { es: "Alcanzable: revisa si $1,200 al mes cabe en sus ingresos; si no, ajusta plazo o modelo.", en: "Achievable: check whether $1,200 a month fits her income; if not, adjust the timeframe or model." },
        ],
        result: {
          es: "Meta: \"Ahorrar $1,200 al mes durante 10 meses para comprar una laptop de $12,000 antes de entrar a la universidad\".",
          en: "Goal: \"Save $1,200 a month for 10 months to buy a $12,000 laptop before starting university.\"",
        },
      },
    ],
    keyPoints: [
      { es: "Educación financiera = conocimientos + habilidades + actitudes convertidos en hábitos.", en: "Financial literacy = knowledge + skills + attitudes turned into habits." },
      { es: "No depende de cuánto ganas: con poco margen, decidir bien importa todavía más.", en: "It does not depend on how much you earn: with little margin, deciding well matters even more." },
      { es: "Las necesidades van antes que los deseos.", en: "Needs come before wants." },
      { es: "Toda elección tiene un costo de oportunidad: lo que dejas de hacer.", en: "Every choice has an opportunity cost: what you give up." },
      { es: "Metas concretas, medibles y con fecha; compara siempre el costo total.", en: "Goals that are concrete, measurable and dated; always compare the total cost." },
    ],
    normativeNote: NOTE_CONSUMER,
    exerciseIds: ['PER-02-E1', 'PER-02-E2', 'PER-02-E3', 'PER-02-E4', 'PER-02-E5', 'PER-02-E6'],
  },

  // ───────────────────────────── PER-03 ─────────────────────────────
  {
    id: 'PER-03',
    level: 1,
    topicIds: ['PER.3'],
    title: { es: "Administración del dinero", en: "Money management" },
    summary: {
      es: "Administrar tu dinero es saber cuánto entra, cuánto sale y cuándo, para organizar tus pagos, evitar fugas y no quedarte sin efectivo antes de la siguiente quincena.",
      en: "Managing your money means knowing how much comes in, how much goes out and when, so you can organize payments, stop leaks and not run out of cash before the next payday.",
    },
    minutes: 13,
    objectives: [
      { es: "Explicar qué es el flujo de efectivo personal y calcular tu saldo al final del periodo.", en: "Explain what personal cash flow is and compute your balance at the end of the period." },
      { es: "Registrar gastos y detectar gastos hormiga.", en: "Track expenses and spot small leaks (\"ant expenses\")." },
      { es: "Organizar el dinero con un calendario de pagos y la estrategia de pagarte primero.", en: "Organize money with a payment calendar and the pay-yourself-first strategy." },
    ],
    theory: [
      {
        heading: { es: "Tu flujo de efectivo personal", en: "Your personal cash flow" },
        body: [
          {
            es: "El **flujo de efectivo** es el movimiento de tu dinero: lo que **entra** (sueldo, ventas, apoyos) y lo que **sale** (renta, comida, transporte). Administrar el dinero empieza por conocer ese flujo, igual que una tienda que cuenta su caja al cerrar.",
            en: "**Cash flow** is the movement of your money: what **comes in** (salary, sales, support) and what **goes out** (rent, food, transportation). Managing money starts with knowing that flow, just like a store that counts its cash at closing.",
          },
          {
            es: "Importa **cuánto** pero también **cuándo**. Si cobras el día 15 y el 30, pero la renta se paga el día 1, puedes tener suficiente en el mes y aun así quedarte sin dinero unos días. A eso se le llama un problema de **liquidez**: tener el dinero, pero no en el momento en que lo necesitas.",
            en: "**How much** matters, but so does **when**. If you are paid on the 15th and the 30th but rent is due on the 1st, you can have enough for the month and still run out of money for a few days. That is a **liquidity** problem: having the money, but not when you need it.",
          },
          {
            es: "Mini ejemplo: empiezas el mes con $500, recibes $12,000 y gastas $11,200. Tu saldo final es 500 + 12,000 − 11,200 = $1,300. Si fuera negativo, tendrías que recortar o pedir prestado.",
            en: "Mini example: you start the month with $500, receive $12,000 and spend $11,200. Your ending balance is 500 + 12,000 − 11,200 = $1,300. If it were negative, you would have to cut back or borrow.",
          },
        ],
        formula: "Saldo final = Saldo inicial + Entradas − Salidas",
      },
      {
        heading: { es: "Registrar gastos y detectar fugas", en: "Tracking expenses and spotting leaks" },
        body: [
          {
            es: "No puedes administrar lo que no mides. **Registrar tus gastos** durante al menos un mes (en una libreta, una hoja de cálculo o una app) te muestra en qué se va realmente tu dinero. Anota fecha, concepto, monto y forma de pago.",
            en: "You cannot manage what you do not measure. **Tracking your expenses** for at least one month (in a notebook, a spreadsheet or an app) shows you where your money really goes. Write down date, item, amount and payment method.",
          },
          {
            es: "Al revisar, suelen aparecer los **gastos hormiga**: compras pequeñas y frecuentes que casi no se notan (un café, un refresco, comisiones, apps que no usas). Uno solo no pesa, pero juntos pueden sumar miles de pesos al año.",
            en: "When you review, \"**ant expenses**\" usually appear: small, frequent purchases you barely notice (a coffee, a soda, fees, apps you do not use). One alone does not weigh much, but together they can add up to thousands of pesos a year.",
          },
          {
            es: "Mini ejemplo: un refresco de $25 diario parece poco, pero en 30 días son 25 × 30 = $750. La meta no es prohibirte todo, sino decidir **a propósito** en qué gastas.",
            en: "Mini example: a $25 soda a day seems like little, but in 30 days it is 25 × 30 = $750. The goal is not to forbid yourself everything, but to decide **on purpose** what you spend on.",
          },
        ],
        bullets: [
          { es: "Registra todo, incluso lo pequeño y lo pagado con tarjeta.", en: "Record everything, even small items and card payments." },
          { es: "Agrupa por categorías: vivienda, comida, transporte, diversión.", en: "Group by category: housing, food, transportation, fun." },
          { es: "Revisa cada semana y busca patrones.", en: "Review weekly and look for patterns." },
          { es: "Cancela suscripciones y comisiones que no aprovechas.", en: "Cancel subscriptions and fees you do not use." },
        ],
      },
      {
        heading: { es: "Organizar: calendario de pagos y pagarte primero", en: "Organizing: payment calendar and paying yourself first" },
        body: [
          {
            es: "Un **calendario de pagos** es una lista con la fecha de cada ingreso y de cada pago fijo (renta, luz, internet, colegiatura). Te ayuda a **apartar** el dinero de cada compromiso en la quincena correcta y a no pagar recargos por atraso.",
            en: "A **payment calendar** is a list with the date of every income and every fixed payment (rent, electricity, internet, tuition). It helps you **set aside** money for each commitment in the right fortnight and avoid late fees.",
          },
          {
            es: "La estrategia de **pagarte primero** consiste en separar una parte para ti (tu ahorro) **en cuanto** recibes tu ingreso, antes de gastar en otra cosa. Si esperas a ver \"lo que sobre\", normalmente no sobra nada.",
            en: "The **pay yourself first** strategy means setting aside a portion for yourself (your savings) **as soon as** you receive your income, before spending on anything else. If you wait to see \"what is left\", usually nothing is.",
          },
          {
            es: "También ayuda **separar el dinero por propósito**: una cuenta o \"sobre\" para gastos fijos, otro para el día a día y otro para ahorro. Así ves rápido cuánto puedes gastar sin tocar lo comprometido.",
            en: "It also helps to **separate money by purpose**: one account or \"envelope\" for fixed costs, another for day-to-day spending and another for savings. That way you quickly see how much you can spend without touching what is committed.",
          },
          {
            es: "Mini ejemplo: cobras $8,000 cada quincena y tu renta de $6,000 vence el día 1. Apartas $3,000 en cada quincena para la renta y, el mismo día de cobro, mueves $400 a tu ahorro. Te quedan $4,600 para el resto de la quincena.",
            en: "Mini example: you earn $8,000 each fortnight and your $6,000 rent is due on the 1st. You set aside $3,000 each fortnight for rent and, on payday, move $400 to savings. You have $4,600 left for the rest of the fortnight.",
          },
        ],
      },
    ],
    examples: [
      {
        title: { es: "¿Me alcanza hasta la siguiente quincena?", en: "Will it last until the next payday?" },
        problem: {
          es: "Sofía cobra $9,000 el día 15. Tiene $300 en su cuenta. Del 15 al 30 debe pagar: luz $450, internet $399, despensa $2,800, pasajes $700 y la mitad de la renta $3,500. ¿Cuánto le queda para imprevistos y gustos?",
          en: "Sofía is paid $9,000 on the 15th. She has $300 in her account. From the 15th to the 30th she must pay: electricity $450, internet $399, groceries $2,800, fares $700 and half the rent $3,500. How much is left for unexpected costs and treats?",
        },
        steps: [
          { es: "Entradas + saldo inicial: 300 + 9,000 = $9,300.", en: "Inflows + opening balance: 300 + 9,000 = $9,300." },
          { es: "Salidas: 450 + 399 + 2,800 + 700 + 3,500 = $7,849.", en: "Outflows: 450 + 399 + 2,800 + 700 + 3,500 = $7,849." },
          { es: "Saldo: 9,300 − 7,849 = $1,451.", en: "Balance: 9,300 − 7,849 = $1,451." },
        ],
        result: {
          es: "Le quedan $1,451. Si aplica \"pagarte primero\" con $450 de ahorro, tendrá $1,001 para imprevistos y gustos.",
          en: "She has $1,451 left. If she pays herself first with $450 of savings, she will have $1,001 for unexpected costs and treats.",
        },
      },
      {
        title: { es: "El costo anual de los gastos hormiga", en: "The annual cost of ant expenses" },
        problem: {
          es: "Jorge compra un pan de $18 y un jugo de $22 cada día laboral (5 días a la semana) y paga $99 al mes por una app de streaming que casi no usa. ¿Cuánto gasta en un año (52 semanas, 12 meses)?",
          en: "Jorge buys an $18 pastry and a $22 juice every workday (5 days a week) and pays $99 a month for a streaming app he barely uses. How much does he spend in a year (52 weeks, 12 months)?",
        },
        steps: [
          { es: "Por día: 18 + 22 = $40.", en: "Per day: 18 + 22 = $40." },
          { es: "Por año: 40 × 5 × 52 = $10,400.", en: "Per year: 40 × 5 × 52 = $10,400." },
          { es: "App: 99 × 12 = $1,188.", en: "App: 99 × 12 = $1,188." },
          { es: "Total: 10,400 + 1,188 = $11,588.", en: "Total: 10,400 + 1,188 = $11,588." },
        ],
        result: {
          es: "Gasta $11,588 al año en hábitos pequeños. Cancelar la app y reducir el pan a la mitad le libera dinero sin cambiar su vida.",
          en: "He spends $11,588 a year on small habits. Cancelling the app and halving the pastries frees up money without changing his life.",
        },
      },
    ],
    keyPoints: [
      { es: "Saldo final = saldo inicial + entradas − salidas.", en: "Ending balance = opening balance + inflows − outflows." },
      { es: "Importa cuándo entra y sale el dinero, no solo cuánto (liquidez).", en: "When money comes in and goes out matters, not just how much (liquidity)." },
      { es: "Registrar gastos revela fugas como los gastos hormiga.", en: "Tracking expenses reveals leaks such as ant expenses." },
      { es: "Un calendario de pagos evita atrasos y recargos.", en: "A payment calendar avoids delays and late fees." },
      { es: "Pagarte primero: separa tu ahorro el día que cobras.", en: "Pay yourself first: set aside savings on payday." },
    ],
    exerciseIds: ['PER-03-E1', 'PER-03-E2', 'PER-03-E3', 'PER-03-E4', 'PER-03-E5', 'PER-03-E6'],
  },

  // ───────────────────────────── PER-04 ─────────────────────────────
  {
    id: 'PER-04',
    level: 1,
    topicIds: ['PER.4'],
    title: { es: "Presupuestos personales y familiares", en: "Personal and family budgets" },
    summary: {
      es: "Un presupuesto es un plan que decide por adelantado a dónde irá cada peso del mes; se arma con el ingreso neto, se reparte entre gastos fijos, variables y ahorro, y se revisa contra lo real.",
      en: "A budget is a plan that decides in advance where each peso of the month will go; it is built from net income, split between fixed costs, variable costs and savings, and checked against reality.",
    },
    minutes: 15,
    objectives: [
      { es: "Explicar qué es un presupuesto y en qué se diferencia de solo registrar gastos.", en: "Explain what a budget is and how it differs from just tracking expenses." },
      { es: "Clasificar gastos en fijos y variables e incluir gastos anuales prorrateados.", en: "Classify expenses as fixed or variable and include prorated annual expenses." },
      { es: "Aplicar la regla 50/30/20 y el presupuesto base cero.", en: "Apply the 50/30/20 rule and zero-based budgeting." },
      { es: "Comparar lo presupuestado con lo real y ajustar en familia.", en: "Compare budgeted versus actual and adjust as a family." },
    ],
    theory: [
      {
        heading: { es: "Qué es un presupuesto y cómo se arma", en: "What a budget is and how to build one" },
        body: [
          {
            es: "Registrar gastos mira **hacia atrás** (en qué se fue el dinero). Un **presupuesto** mira **hacia adelante**: es un plan donde decides, antes de que empiece el mes, cuánto vas a destinar a cada cosa.",
            en: "Tracking expenses looks **backward** (where the money went). A **budget** looks **forward**: it is a plan where you decide, before the month starts, how much you will allocate to each thing.",
          },
          {
            es: "Se parte del **ingreso neto**: lo que realmente llega a tu bolsillo después de descuentos. Luego se listan los gastos en dos grupos. **Gastos fijos**: casi el mismo monto cada mes (renta, internet, colegiatura). **Gastos variables**: cambian según tu consumo (despensa, gasolina, luz, salidas).",
            en: "You start from **net income**: what actually reaches your pocket after deductions. Then you list expenses in two groups. **Fixed expenses**: about the same amount every month (rent, internet, tuition). **Variable expenses**: change with your consumption (groceries, gas, electricity, outings).",
          },
          {
            es: "No olvides los **gastos anuales o irregulares**: predial, seguro del auto, inscripciones, regalos de diciembre. Para que no te tomen por sorpresa, **prorratéalos**: divide el total anual entre 12 y aparta esa parte cada mes.",
            en: "Do not forget **annual or irregular expenses**: property tax, car insurance, school enrollment, December gifts. So they do not catch you by surprise, **prorate** them: divide the annual total by 12 and set aside that portion every month.",
          },
          {
            es: "Mini ejemplo: las inscripciones escolares cuestan $3,600 en agosto. Si apartas 3,600 ÷ 12 = $300 al mes, en agosto ya tienes el dinero completo.",
            en: "Mini example: school enrollment costs $3,600 in August. If you set aside 3,600 ÷ 12 = $300 a month, by August you already have the full amount.",
          },
        ],
        formula: "Monto mensual a apartar = Gasto anual ÷ 12",
      },
      {
        heading: { es: "Dos métodos sencillos: 50/30/20 y base cero", en: "Two simple methods: 50/30/20 and zero-based" },
        body: [
          {
            es: "La **regla 50/30/20** es una guía para repartir el ingreso neto: **50%** para necesidades (vivienda, comida, transporte, servicios), **30%** para deseos (salidas, entretenimiento, gustos) y **20%** para ahorro y pago de deudas. Es un punto de partida, no una ley: si tu renta es alta, quizá las necesidades ocupen más.",
            en: "The **50/30/20 rule** is a guide to split net income: **50%** for needs (housing, food, transportation, utilities), **30%** for wants (outings, entertainment, treats) and **20%** for savings and debt payments. It is a starting point, not a law: if your rent is high, needs may take more.",
          },
          {
            es: "El **presupuesto base cero** asigna **cada peso** a un destino hasta que ingreso menos asignaciones da **cero**. No significa gastar todo: el ahorro también es una asignación. La idea es que ningún peso quede \"suelto\" sin plan.",
            en: "**Zero-based budgeting** assigns **every peso** to a destination until income minus allocations equals **zero**. It does not mean spending everything: savings is also an allocation. The idea is that no peso is left \"loose\" without a plan.",
          },
          {
            es: "Mini ejemplo: con un ingreso neto de $14,000, la regla 50/30/20 sugiere $7,000 para necesidades, $4,200 para deseos y $2,800 para ahorro y deudas.",
            en: "Mini example: with a net income of $14,000, the 50/30/20 rule suggests $7,000 for needs, $4,200 for wants and $2,800 for savings and debt.",
          },
        ],
        bullets: [
          { es: "50% necesidades.", en: "50% needs." },
          { es: "30% deseos.", en: "30% wants." },
          { es: "20% ahorro y deudas.", en: "20% savings and debt." },
          { es: "Base cero: ingreso − asignaciones = 0.", en: "Zero-based: income − allocations = 0." },
        ],
      },
      {
        heading: { es: "El presupuesto familiar: seguimiento y ajustes", en: "The family budget: tracking and adjusting" },
        body: [
          {
            es: "En una familia, el presupuesto funciona mejor si se arma **en conjunto**: quién aporta cuánto, qué gastos son compartidos y qué metas tienen en común. Involucrar a los hijos (según su edad) les enseña a decidir con límites.",
            en: "In a family, the budget works better when it is built **together**: who contributes how much, which expenses are shared and which goals they have in common. Involving children (according to their age) teaches them to decide within limits.",
          },
          {
            es: "Al final del mes, compara **lo presupuestado contra lo real**. La diferencia se llama **desviación**. Si gastaste más en una categoría, busca la causa y decide: recortar en otra, ajustar la cifra para el próximo mes o cambiar un hábito.",
            en: "At the end of the month, compare **budgeted versus actual**. The difference is called the **variance**. If you overspent in one category, find the cause and decide: cut another category, adjust the figure for next month or change a habit.",
          },
          {
            es: "Mini ejemplo: presupuestaron $1,000 de transporte y gastaron $1,250. Desviación: 1,250 − 1,000 = $250, es decir, 250 ÷ 1,000 = 25% por encima. Descubren que fueron los taxis de noche y acuerdan salir más temprano.",
            en: "Mini example: they budgeted $1,000 for transportation and spent $1,250. Variance: 1,250 − 1,000 = $250, that is, 250 ÷ 1,000 = 25% over. They find it was late-night taxis and agree to leave earlier.",
          },
        ],
        formula: "Desviación = Real − Presupuestado ; Desviación % = Desviación ÷ Presupuestado × 100",
      },
    ],
    examples: [
      {
        title: { es: "Presupuesto mensual de la familia Ramírez", en: "The Ramírez family's monthly budget" },
        problem: {
          es: "Ingreso neto familiar: $22,000. Gastos fijos: renta $6,500, colegiatura $2,500, internet y celulares $800. Variables estimados: despensa $5,000, transporte $1,800, luz y gas $900. Además, pagan predial de $1,800 al año. ¿Cuánto les queda para deseos y ahorro?",
          en: "Family net income: $22,000. Fixed expenses: rent $6,500, tuition $2,500, internet and phones $800. Estimated variable: groceries $5,000, transportation $1,800, electricity and gas $900. They also pay $1,800 property tax a year. How much is left for wants and savings?",
        },
        steps: [
          { es: "Fijos: 6,500 + 2,500 + 800 = $9,800.", en: "Fixed: 6,500 + 2,500 + 800 = $9,800." },
          { es: "Variables: 5,000 + 1,800 + 900 = $7,700.", en: "Variable: 5,000 + 1,800 + 900 = $7,700." },
          { es: "Predial prorrateado: 1,800 ÷ 12 = $150.", en: "Prorated property tax: 1,800 ÷ 12 = $150." },
          { es: "Total comprometido: 9,800 + 7,700 + 150 = $17,650.", en: "Total committed: 9,800 + 7,700 + 150 = $17,650." },
          { es: "Disponible: 22,000 − 17,650 = $4,350.", en: "Available: 22,000 − 17,650 = $4,350." },
        ],
        result: {
          es: "Les quedan $4,350. Con base cero, podrían asignar, por ejemplo, $2,500 a ahorro y $1,850 a salidas, y el saldo sin asignar quedaría en cero.",
          en: "They have $4,350 left. With zero-based budgeting they could allocate, for example, $2,500 to savings and $1,850 to outings, leaving zero unallocated.",
        },
      },
      {
        title: { es: "Revisar desviaciones al cierre del mes", en: "Reviewing variances at month end" },
        problem: {
          es: "Presupuesto de Luis: comida $3,000, salidas $1,200, transporte $900. Real: comida $2,850, salidas $1,800, transporte $900. ¿Dónde se desvió y cuánto en total?",
          en: "Luis's budget: food $3,000, outings $1,200, transportation $900. Actual: food $2,850, outings $1,800, transportation $900. Where did he deviate and by how much in total?",
        },
        steps: [
          { es: "Comida: 2,850 − 3,000 = −$150 (gastó menos).", en: "Food: 2,850 − 3,000 = −$150 (spent less)." },
          { es: "Salidas: 1,800 − 1,200 = +$600, es decir 600 ÷ 1,200 = 50% por encima.", en: "Outings: 1,800 − 1,200 = +$600, that is 600 ÷ 1,200 = 50% over." },
          { es: "Transporte: 900 − 900 = $0.", en: "Transportation: 900 − 900 = $0." },
          { es: "Total: −150 + 600 + 0 = +$450.", en: "Total: −150 + 600 + 0 = +$450." },
        ],
        result: {
          es: "Se pasó $450 en total, todo por las salidas. Para el próximo mes puede fijar un tope semanal de salidas de $300.",
          en: "He went $450 over in total, all due to outings. Next month he can set a weekly cap on outings of $300.",
        },
      },
    ],
    keyPoints: [
      { es: "El presupuesto es un plan hacia adelante; el registro de gastos mira hacia atrás.", en: "A budget is a forward plan; expense tracking looks backward." },
      { es: "Se arma con el ingreso neto y separa gastos fijos y variables.", en: "It is built from net income and separates fixed and variable expenses." },
      { es: "Los gastos anuales se prorratean: total ÷ 12 cada mes.", en: "Annual expenses are prorated: total ÷ 12 each month." },
      { es: "Regla 50/30/20 como guía; base cero para que cada peso tenga destino.", en: "50/30/20 rule as a guide; zero-based so every peso has a destination." },
      { es: "Compara presupuestado contra real y ajusta en familia.", en: "Compare budgeted versus actual and adjust as a family." },
    ],
    normativeNote: NOTE_BUDGET,
    exerciseIds: ['PER-04-E1', 'PER-04-E2', 'PER-04-E3', 'PER-04-E4', 'PER-04-E5', 'PER-04-E6'],
  },

  // ───────────────────────────── PER-05 ─────────────────────────────
  {
    id: 'PER-05',
    level: 1,
    topicIds: ['PER.5'],
    title: { es: "Ingresos, gastos y ahorro", en: "Income, expenses and saving" },
    summary: {
      es: "Lo que ahorras es la diferencia entre lo que ganas y lo que gastas; conocer tus tipos de ingreso y de gasto te permite aumentar esa diferencia y guardarla en un lugar seguro.",
      en: "What you save is the difference between what you earn and what you spend; knowing your types of income and expenses lets you widen that gap and keep it somewhere safe.",
    },
    minutes: 14,
    objectives: [
      { es: "Distinguir ingreso bruto y neto, y ingreso activo y pasivo.", en: "Distinguish gross and net income, and active and passive income." },
      { es: "Clasificar gastos en necesarios y discrecionales para encontrar margen de ahorro.", en: "Classify expenses as necessary or discretionary to find room to save." },
      { es: "Calcular la tasa de ahorro y el monto mensual para una meta.", en: "Compute the savings rate and the monthly amount for a goal." },
      { es: "Comparar ahorro formal e informal.", en: "Compare formal and informal saving." },
    ],
    theory: [
      {
        heading: { es: "Tipos de ingreso", en: "Types of income" },
        body: [
          {
            es: "El **ingreso bruto** es lo que ganas antes de descuentos. El **ingreso neto** es lo que de verdad recibes después de retenciones (como impuestos y cuotas de seguridad social). Para planear, **usa siempre el neto**: es el dinero con el que realmente cuentas.",
            en: "**Gross income** is what you earn before deductions. **Net income** is what you actually receive after withholdings (such as taxes and social security contributions). For planning, **always use net income**: it is the money you can really count on.",
          },
          {
            es: "Según de dónde viene, el ingreso puede ser **activo** (lo ganas con tu trabajo y tiempo: sueldo, honorarios, propinas, ventas) o **pasivo** (llega sin que trabajes cada hora por él: la renta de un cuarto, los rendimientos de tus ahorros). También puede ser **fijo** (el mismo cada quincena) o **variable** (comisiones, ventas por temporada).",
            en: "Depending on where it comes from, income can be **active** (earned with your work and time: salary, fees, tips, sales) or **passive** (it arrives without you working every hour for it: renting out a room, returns on your savings). It can also be **fixed** (the same every payday) or **variable** (commissions, seasonal sales).",
          },
          {
            es: "Mini ejemplo: tu recibo dice sueldo de $12,000 y descuentos por $1,300. Tu neto es 12,000 − 1,300 = $10,700. Si planeas con $12,000, te faltarán $1,300 cada mes.",
            en: "Mini example: your payslip shows a $12,000 salary and $1,300 in deductions. Your net is 12,000 − 1,300 = $10,700. If you plan with $12,000, you will be $1,300 short every month.",
          },
        ],
        formula: "Ingreso neto = Ingreso bruto − Retenciones",
      },
      {
        heading: { es: "Gastos necesarios y discrecionales", en: "Necessary and discretionary expenses" },
        body: [
          {
            es: "Además de fijos y variables, conviene separar los gastos por **qué tan indispensables** son. **Necesarios**: los que mantienen tu vida y tu trabajo funcionando (vivienda, comida básica, transporte, salud). **Discrecionales**: los que eliges y podrías reducir sin poner en riesgo lo básico (comer fuera, ropa extra, suscripciones).",
            en: "Besides fixed and variable, it helps to separate expenses by **how essential** they are. **Necessary**: those that keep your life and work running (housing, basic food, transportation, health). **Discretionary**: those you choose and could reduce without endangering the basics (eating out, extra clothes, subscriptions).",
          },
          {
            es: "El margen para ahorrar casi siempre sale de los **discrecionales**. Un necesario también se puede abaratar (cambiar de plan de celular, comprar en mercado), pero no eliminar.",
            en: "Room to save almost always comes from **discretionary** expenses. A necessary one can also be made cheaper (switching phone plans, shopping at the market), but not eliminated.",
          },
          {
            es: "Mini ejemplo: si gastas $1,600 al mes en comida a domicilio y cocinas la mitad de esas veces, liberas unos $800 al mes sin dejar de comer.",
            en: "Mini example: if you spend $1,600 a month on food delivery and cook half of those times instead, you free up about $800 a month without going hungry.",
          },
        ],
      },
      {
        heading: { es: "El ahorro: cuánto, para qué y dónde", en: "Saving: how much, what for and where" },
        body: [
          {
            es: "**Ahorrar** es guardar hoy una parte del ingreso para usarla después. La **tasa de ahorro** te dice qué porcentaje de tu ingreso neto logras guardar; muchas guías sugieren empezar con al menos 10% y subir poco a poco, pero empezar con algo es mejor que no empezar.",
            en: "**Saving** is keeping part of your income today to use later. The **savings rate** tells you what percentage of your net income you manage to keep; many guides suggest starting with at least 10% and increasing little by little, but starting with something beats not starting.",
          },
          {
            es: "Ahorra **con un propósito**: una meta con monto y fecha te dice cuánto separar cada mes. Resta lo que ya tienes y divide entre los meses que faltan.",
            en: "Save **with a purpose**: a goal with an amount and a date tells you how much to set aside each month. Subtract what you already have and divide by the months remaining.",
          },
          {
            es: "¿Dónde guardarlo? El **ahorro informal** (alcancía, \"debajo del colchón\", tandas) es fácil, pero puede perderse, robarse o depender de que otros cumplan. El **ahorro formal** se hace en instituciones autorizadas y supervisadas; en los bancos, los depósitos tienen un seguro del **IPAB** hasta cierto límite.",
            en: "Where to keep it? **Informal saving** (piggy bank, \"under the mattress\", tandas or rotating savings groups) is easy, but it can be lost, stolen or depend on others keeping their word. **Formal saving** is done in authorized, supervised institutions; at banks, deposits are insured by **IPAB** up to a certain limit.",
          },
          {
            es: "Mini ejemplo: ganas $10,000 netos y ahorras $1,200. Tu tasa de ahorro es 1,200 ÷ 10,000 × 100 = 12%.",
            en: "Mini example: you earn $10,000 net and save $1,200. Your savings rate is 1,200 ÷ 10,000 × 100 = 12%.",
          },
        ],
        formula: "Ahorro = Ingreso neto − Gastos ; Tasa de ahorro = Ahorro ÷ Ingreso neto × 100",
        bullets: [
          { es: "Ahorro = lo que entra − lo que sale.", en: "Savings = what comes in − what goes out." },
          { es: "Monto mensual para una meta = (meta − lo ahorrado) ÷ meses.", en: "Monthly amount for a goal = (goal − already saved) ÷ months." },
          { es: "Formal: institución autorizada y supervisada.", en: "Formal: authorized and supervised institution." },
          { es: "Informal: sin protección si algo sale mal.", en: "Informal: no protection if something goes wrong." },
        ],
      },
    ],
    examples: [
      {
        title: { es: "La tasa de ahorro de Daniela", en: "Daniela's savings rate" },
        problem: {
          es: "Daniela gana $16,000 brutos al mes y le retienen (cifras hipotéticas) $1,900 de impuestos y $400 de seguridad social. Sus gastos son $12,330. ¿Cuál es su ingreso neto, su ahorro y su tasa de ahorro?",
          en: "Daniela earns $16,000 gross per month and has (hypothetical figures) $1,900 in taxes and $400 in social security withheld. Her expenses are $12,330. What are her net income, her savings and her savings rate?",
        },
        steps: [
          { es: "Neto: 16,000 − 1,900 − 400 = $13,700.", en: "Net: 16,000 − 1,900 − 400 = $13,700." },
          { es: "Ahorro: 13,700 − 12,330 = $1,370.", en: "Savings: 13,700 − 12,330 = $1,370." },
          { es: "Tasa: 1,370 ÷ 13,700 × 100 = 10%.", en: "Rate: 1,370 ÷ 13,700 × 100 = 10%." },
        ],
        result: {
          es: "Neto $13,700, ahorro $1,370 y tasa de ahorro de 10%. Ojo: si calculara sobre el bruto saldría 8.56%, una cifra engañosa.",
          en: "Net $13,700, savings $1,370 and a 10% savings rate. Note: computing it on gross pay would give 8.56%, a misleading figure.",
        },
      },
      {
        title: { es: "Ahorrar para una bicicleta de trabajo", en: "Saving for a work bicycle" },
        problem: {
          es: "Rubén reparte comida y quiere una bicicleta de $7,500. Ya tiene $1,500 guardados y quiere comprarla en 5 meses. Gasta $900 al mes en refrescos y botanas. ¿Cuánto debe ahorrar al mes y de dónde puede salir?",
          en: "Rubén delivers food and wants a $7,500 bicycle. He already has $1,500 saved and wants to buy it in 5 months. He spends $900 a month on sodas and snacks. How much must he save per month and where can it come from?",
        },
        steps: [
          { es: "Le falta: 7,500 − 1,500 = $6,000.", en: "Remaining: 7,500 − 1,500 = $6,000." },
          { es: "Por mes: 6,000 ÷ 5 = $1,200.", en: "Per month: 6,000 ÷ 5 = $1,200." },
          { es: "Si reduce refrescos y botanas a la mitad, libera $450; el resto ($750) debe salir de otros discrecionales o de un ingreso extra.", en: "If he halves sodas and snacks, he frees $450; the rest ($750) must come from other discretionary items or extra income." },
        ],
        result: {
          es: "Necesita $1,200 al mes. Recortar discrecionales y guardar el dinero en una cuenta formal le acerca a la meta con menos riesgo.",
          en: "He needs $1,200 a month. Cutting discretionary items and keeping the money in a formal account gets him to the goal with less risk.",
        },
      },
    ],
    keyPoints: [
      { es: "Planea con el ingreso neto, no con el bruto.", en: "Plan with net income, not gross." },
      { es: "Ingreso activo viene de tu trabajo; pasivo, de tus bienes o ahorros.", en: "Active income comes from your work; passive, from your assets or savings." },
      { es: "El margen de ahorro suele salir de los gastos discrecionales.", en: "Room to save usually comes from discretionary expenses." },
      { es: "Tasa de ahorro = ahorro ÷ ingreso neto × 100.", en: "Savings rate = savings ÷ net income × 100." },
      { es: "El ahorro formal ofrece supervisión y, en bancos, seguro de depósitos; el informal no.", en: "Formal saving offers supervision and, at banks, deposit insurance; informal saving does not." },
    ],
    normativeNote: NOTE_SAVING,
    exerciseIds: ['PER-05-E1', 'PER-05-E2', 'PER-05-E3', 'PER-05-E4', 'PER-05-E5', 'PER-05-E6'],
  },

  // ───────────────────────────── PER-06 ─────────────────────────────
  {
    id: 'PER-06',
    level: 1,
    topicIds: ['PER.6'],
    title: { es: "Inflación y poder adquisitivo", en: "Inflation and purchasing power" },
    summary: {
      es: "La inflación es el aumento generalizado de los precios; hace que el mismo dinero compre menos, por eso tu ingreso y tu ahorro deben crecer al menos al mismo ritmo para no perder poder adquisitivo.",
      en: "Inflation is the general rise in prices; it makes the same money buy less, so your income and savings must grow at least at the same pace to avoid losing purchasing power.",
    },
    minutes: 15,
    objectives: [
      { es: "Definir inflación y poder adquisitivo con ejemplos cotidianos.", en: "Define inflation and purchasing power with everyday examples." },
      { es: "Explicar cómo se mide la inflación en México con el INPC.", en: "Explain how inflation is measured in Mexico with the INPC." },
      { es: "Calcular la inflación de un periodo y el valor real de una cantidad de dinero.", en: "Compute inflation for a period and the real value of an amount of money." },
      { es: "Comparar aumentos de sueldo y rendimientos contra la inflación.", en: "Compare pay raises and returns against inflation." },
    ],
    theory: [
      {
        heading: { es: "¿Qué es la inflación?", en: "What is inflation?" },
        body: [
          {
            es: "La **inflación** es el **aumento generalizado y sostenido** de los precios. \"Generalizado\" significa que suben muchos productos y servicios, no solo uno. \"Sostenido\" significa que pasa a lo largo del tiempo, no en un solo día.",
            en: "**Inflation** is the **general and sustained** rise in prices. \"General\" means that many goods and services go up, not just one. \"Sustained\" means it happens over time, not on a single day.",
          },
          {
            es: "Que suba el jitomate una semana por una mala cosecha **no** es inflación por sí solo: es el cambio de precio de un producto. Hay inflación cuando, en promedio, la canasta de cosas que compran los hogares cuesta más que antes.",
            en: "Tomatoes going up one week because of a bad harvest is **not** inflation by itself: it is a price change in one product. There is inflation when, on average, the basket of things households buy costs more than before.",
          },
          {
            es: "Lo contrario, una baja generalizada de precios, se llama **deflación**. Una inflación **baja y estable** es lo que buscan los bancos centrales; en México esa tarea le toca al **Banco de México**.",
            en: "The opposite, a general fall in prices, is called **deflation**. **Low and stable** inflation is what central banks aim for; in Mexico that job belongs to **Banco de México**.",
          },
          {
            es: "Mini ejemplo: el año pasado tu despensa semanal costaba $1,000 y hoy, con los mismos productos, cuesta $1,050. Tu despensa se encareció 5%.",
            en: "Mini example: last year your weekly groceries cost $1,000 and today, with the same products, they cost $1,050. Your groceries got 5% more expensive.",
          },
        ],
      },
      {
        heading: { es: "Cómo se mide: el INPC", en: "How it is measured: the INPC" },
        body: [
          {
            es: "En México, la inflación se mide con el **Índice Nacional de Precios al Consumidor (INPC)**, que publica el **INEGI**. Funciona como una gran **canasta**: registra los precios de cientos de bienes y servicios que compran los hogares (comida, transporte, renta, educación) y los resume en un solo número.",
            en: "In Mexico, inflation is measured with the **National Consumer Price Index (INPC)**, published by **INEGI**. It works like a big **basket**: it records the prices of hundreds of goods and services households buy (food, transportation, rent, education) and summarizes them in a single number.",
          },
          {
            es: "La inflación de un periodo es el **cambio porcentual** del índice. Si el índice pasa de 100 a 104, los precios subieron en promedio 4%. Lo que importa no es el número del índice, sino cuánto cambia.",
            en: "Inflation for a period is the **percentage change** in the index. If the index goes from 100 to 104, prices rose 4% on average. What matters is not the index number itself, but how much it changes.",
          },
          {
            es: "Mini ejemplo (cifras hipotéticas): el índice era 120 en enero de un año y 126 en enero del siguiente. Inflación anual = (126 ÷ 120 − 1) × 100 = 5%.",
            en: "Mini example (hypothetical figures): the index was 120 in January of one year and 126 in January of the next. Annual inflation = (126 ÷ 120 − 1) × 100 = 5%.",
          },
        ],
        formula: "Inflación % = (Índice final ÷ Índice inicial − 1) × 100",
      },
      {
        heading: { es: "Poder adquisitivo: lo que tu dinero realmente compra", en: "Purchasing power: what your money really buys" },
        body: [
          {
            es: "El **poder adquisitivo** es la cantidad de cosas que puedes comprar con tu dinero. Con inflación, el mismo billete compra **menos**. Por eso se distingue el valor **nominal** (el número que ves: $1,000) del valor **real** (lo que ese dinero compra a precios de hoy).",
            en: "**Purchasing power** is the amount of things you can buy with your money. With inflation, the same bill buys **less**. That is why we distinguish the **nominal** value (the number you see: $1,000) from the **real** value (what that money buys at today's prices).",
          },
          {
            es: "Para saber si un **aumento de sueldo** o un **rendimiento** te hace más rico, compáralo con la inflación. Si tu sueldo sube 4% y los precios suben 6%, en realidad puedes comprar menos que antes. Una forma rápida de estimarlo es restar: rendimiento real ≈ rendimiento nominal − inflación.",
            en: "To know whether a **pay raise** or a **return** makes you richer, compare it with inflation. If your salary rises 4% and prices rise 6%, you can actually buy less than before. A quick way to estimate it is to subtract: real return ≈ nominal return − inflation.",
          },
          {
            es: "Mini ejemplo: guardas $5,000 en efectivo un año y la inflación es 5%. Siguen siendo $5,000, pero su valor real es 5,000 ÷ 1.05 ≈ $4,761.90 de hoy: perdiste unos $238 de poder de compra sin darte cuenta.",
            en: "Mini example: you keep $5,000 in cash for a year and inflation is 5%. It is still $5,000, but its real value is 5,000 ÷ 1.05 ≈ $4,761.90 in today's money: you lost about $238 of purchasing power without noticing.",
          },
        ],
        formula: "Valor real = Valor nominal ÷ (1 + inflación) ; Rendimiento real ≈ Rendimiento nominal − Inflación",
        bullets: [
          { es: "Pide aumentos que al menos igualen la inflación.", en: "Ask for raises that at least match inflation." },
          { es: "Guarda tu ahorro donde pueda ganar un rendimiento, no solo en efectivo.", en: "Keep your savings where they can earn a return, not just in cash." },
          { es: "Actualiza tu presupuesto cuando los precios suben.", en: "Update your budget when prices rise." },
          { es: "Compara precios y marcas para cuidar tu canasta.", en: "Compare prices and brands to protect your basket." },
        ],
      },
    ],
    examples: [
      {
        title: { es: "¿Mi aumento me alcanzó?", en: "Did my raise keep up?" },
        problem: {
          es: "Andrea ganaba $10,000 al mes. Le subieron el sueldo a $10,300. En ese año, la inflación (hipotética) fue de 5%. ¿Ganó o perdió poder adquisitivo?",
          en: "Andrea earned $10,000 a month. Her salary was raised to $10,300. That year, (hypothetical) inflation was 5%. Did she gain or lose purchasing power?",
        },
        steps: [
          { es: "Aumento nominal: (10,300 ÷ 10,000 − 1) × 100 = 3%.", en: "Nominal raise: (10,300 ÷ 10,000 − 1) × 100 = 3%." },
          { es: "Para mantener su poder de compra necesitaba 10,000 × 1.05 = $10,500.", en: "To keep her purchasing power she needed 10,000 × 1.05 = $10,500." },
          { es: "Le faltan 10,500 − 10,300 = $200 al mes.", en: "She is short 10,500 − 10,300 = $200 a month." },
          { es: "Estimación rápida: 3% − 5% ≈ −2% real.", en: "Quick estimate: 3% − 5% ≈ −2% real." },
        ],
        result: {
          es: "Aunque gana más pesos, perdió poder adquisitivo: aproximadamente 2% real.",
          en: "Although she earns more pesos, she lost purchasing power: about 2% in real terms.",
        },
      },
      {
        title: { es: "Ahorro en cuenta contra inflación", en: "Savings account versus inflation" },
        problem: {
          es: "Tomás tiene $20,000 en una cuenta que le paga 8% al año. La inflación (hipotética) del año es 5%. ¿Cuánto tendrá en pesos y cuál fue su rendimiento real exacto?",
          en: "Tomás has $20,000 in an account that pays 8% a year. That year's (hypothetical) inflation is 5%. How much will he have in pesos, and what was his exact real return?",
        },
        steps: [
          { es: "Saldo nominal: 20,000 × 1.08 = $21,600.", en: "Nominal balance: 20,000 × 1.08 = $21,600." },
          { es: "Valor real a precios del inicio: 21,600 ÷ 1.05 ≈ $20,571.43.", en: "Real value at starting prices: 21,600 ÷ 1.05 ≈ $20,571.43." },
          { es: "Rendimiento real: (20,571.43 ÷ 20,000 − 1) × 100 ≈ 2.86%.", en: "Real return: (20,571.43 ÷ 20,000 − 1) × 100 ≈ 2.86%." },
          { es: "La resta rápida (8% − 5% = 3%) da una buena aproximación.", en: "The quick subtraction (8% − 5% = 3%) gives a good approximation." },
        ],
        result: {
          es: "Tendrá $21,600 y su poder de compra creció cerca de 2.86%. Si los hubiera guardado en efectivo, habría perdido frente a la inflación.",
          en: "He will have $21,600 and his purchasing power grew about 2.86%. Had he kept it in cash, he would have lost against inflation.",
        },
      },
    ],
    keyPoints: [
      { es: "Inflación: aumento generalizado y sostenido de los precios.", en: "Inflation: general and sustained rise in prices." },
      { es: "En México se mide con el INPC que publica el INEGI.", en: "In Mexico it is measured with the INPC published by INEGI." },
      { es: "Inflación % = (índice final ÷ índice inicial − 1) × 100.", en: "Inflation % = (final index ÷ starting index − 1) × 100." },
      { es: "Con inflación, el mismo dinero compra menos: valor real = nominal ÷ (1 + inflación).", en: "With inflation, the same money buys less: real value = nominal ÷ (1 + inflation)." },
      { es: "Un aumento o rendimiento solo te mejora si supera la inflación.", en: "A raise or a return only helps you if it beats inflation." },
    ],
    normativeNote: NOTE_INFLATION,
    exerciseIds: ['PER-06-E1', 'PER-06-E2', 'PER-06-E3', 'PER-06-E4', 'PER-06-E5', 'PER-06-E6'],
  },
]

export const exercises: Exercise[] = [
  // ═════════════════════════ PER-01 ═════════════════════════
  {
    id: 'PER-01-E1',
    level: 1,
    module: 'PER-01',
    kind: 'mcq',
    flavor: 'concept',
    context: {
      es: "Antes de comprar un celular, Pedro anota que en una tienda cuesta $4,299 y en otra $4,050, y así decide cuál le conviene.",
      en: "Before buying a phone, Pedro notes that it costs $4,299 at one store and $4,050 at another, and that is how he decides which is better.",
    },
    prompt: {
      es: "¿Qué función del dinero le permite a Pedro comparar los precios de las dos tiendas?",
      en: "Which function of money lets Pedro compare the prices at the two stores?",
    },
    options: [
      { id: 'PER-01-E1-a', text: { es: "Medio de cambio", en: "Medium of exchange" } },
      { id: 'PER-01-E1-b', text: { es: "Unidad de cuenta", en: "Unit of account" } },
      { id: 'PER-01-E1-c', text: { es: "Depósito de valor", en: "Store of value" } },
      { id: 'PER-01-E1-d', text: { es: "Dinero mercancía", en: "Commodity money" } },
    ],
    correctOptionId: 'PER-01-E1-b',
    explanation: {
      es: "Como ambos precios están expresados en la misma medida (pesos), Pedro puede compararlos: esa es la función de unidad de cuenta. Todavía no está pagando (medio de cambio) ni guardando dinero (depósito de valor). Error común: elegir medio de cambio solo porque hay una compra de por medio.",
      en: "Since both prices are expressed in the same measure (pesos), Pedro can compare them: that is the unit-of-account function. He is not paying yet (medium of exchange) or keeping money (store of value). Common mistake: choosing medium of exchange just because a purchase is involved.",
    },
    difficulty: 1,
    points: 10,
    competency: 'money-functions',
  },
  {
    id: 'PER-01-E2',
    level: 1,
    module: 'PER-01',
    kind: 'truefalse',
    flavor: 'concept',
    prompt: {
      es: "En el trueque, para que un intercambio ocurra, cada persona debe tener justo lo que la otra quiere en ese momento.",
      en: "In barter, for an exchange to happen, each person must have exactly what the other wants at that moment.",
    },
    answer: true,
    explanation: {
      es: "Verdadero. Es la doble coincidencia de necesidades, el gran problema del trueque. El dinero lo resuelve porque todos lo aceptan y sirve de puente entre intercambios. Error común: creer que el trueque fallaba solo porque los objetos eran pesados.",
      en: "True. That is the double coincidence of wants, barter's big problem. Money solves it because everyone accepts it and it bridges exchanges. Common mistake: thinking barter failed only because the goods were heavy.",
    },
    difficulty: 1,
    points: 10,
    competency: 'money-functions',
  },
  {
    id: 'PER-01-E3',
    level: 1,
    module: 'PER-01',
    kind: 'classify',
    flavor: 'concept',
    prompt: {
      es: "Clasifica cada situación según la función del dinero que muestra.",
      en: "Classify each situation by the function of money it shows.",
    },
    categories: [
      { id: 'PER-01-E3-c1', label: { es: "Medio de cambio", en: "Medium of exchange" } },
      { id: 'PER-01-E3-c2', label: { es: "Unidad de cuenta", en: "Unit of account" } },
      { id: 'PER-01-E3-c3', label: { es: "Depósito de valor", en: "Store of value" } },
    ],
    items: [
      { id: 'PER-01-E3-i1', label: { es: "Pagas $60 por unos tacos al pastor", en: "You pay $60 for some tacos al pastor" }, correctCategoryId: 'PER-01-E3-c1' },
      { id: 'PER-01-E3-i2', label: { es: "Un menú muestra todos los platillos con su precio en pesos", en: "A menu shows every dish with its price in pesos" }, correctCategoryId: 'PER-01-E3-c2' },
      { id: 'PER-01-E3-i3', label: { es: "Guardas $500 en una alcancía para Navidad", en: "You keep $500 in a piggy bank for Christmas" }, correctCategoryId: 'PER-01-E3-c3' },
      { id: 'PER-01-E3-i4', label: { es: "Transfieres $350 al plomero por arreglar una fuga", en: "You transfer $350 to the plumber for fixing a leak" }, correctCategoryId: 'PER-01-E3-c1' },
      { id: 'PER-01-E3-i5', label: { es: "Comparas el precio por litro de dos marcas de leche", en: "You compare the price per liter of two milk brands" }, correctCategoryId: 'PER-01-E3-c2' },
      { id: 'PER-01-E3-i6', label: { es: "Dejas tu aguinaldo en la cuenta para usarlo en marzo", en: "You leave your year-end bonus in your account to use it in March" }, correctCategoryId: 'PER-01-E3-c3' },
    ],
    explanation: {
      es: "Pagar o transferir por algo = medio de cambio. Expresar o comparar precios en pesos = unidad de cuenta. Guardar para usar después = depósito de valor. Error común: pensar que la transferencia no es medio de cambio porque no hay billetes; el dinero digital cumple la misma función.",
      en: "Paying or transferring for something = medium of exchange. Expressing or comparing prices in pesos = unit of account. Keeping it to use later = store of value. Common mistake: thinking a transfer is not a medium of exchange because there are no bills; digital money fulfills the same function.",
    },
    difficulty: 1,
    points: 15,
    competency: 'money-functions',
  },
  {
    id: 'PER-01-E4',
    level: 1,
    module: 'PER-01',
    kind: 'multi',
    flavor: 'concept',
    prompt: {
      es: "¿Qué características debe tener algo para funcionar bien como dinero? Selecciona todas las que apliquen.",
      en: "What characteristics must something have to work well as money? Select all that apply.",
    },
    options: [
      { id: 'PER-01-E4-a', text: { es: "Que dure y no se eche a perder", en: "That it lasts and does not spoil" } },
      { id: 'PER-01-E4-b', text: { es: "Que se pueda dividir en cantidades pequeñas", en: "That it can be divided into small amounts" } },
      { id: 'PER-01-E4-c', text: { es: "Que sea muy pesado para que nadie lo robe", en: "That it is very heavy so nobody steals it" } },
      { id: 'PER-01-E4-d', text: { es: "Que sea aceptado por todos como pago", en: "That everyone accepts it as payment" } },
      { id: 'PER-01-E4-e', text: { es: "Que cualquiera pueda fabricarlo en casa", en: "That anyone can make it at home" } },
    ],
    correctOptionIds: ['PER-01-E4-a', 'PER-01-E4-b', 'PER-01-E4-d'],
    explanation: {
      es: "El buen dinero es durable, divisible, aceptado, portátil y difícil de falsificar. Si fuera muy pesado no sería portátil, y si cualquiera pudiera fabricarlo perdería su valor. Error común: pensar que \"pesado\" lo hace más seguro.",
      en: "Good money is durable, divisible, accepted, portable and hard to counterfeit. If it were very heavy it would not be portable, and if anyone could make it, it would lose its value. Common mistake: thinking \"heavy\" makes it safer.",
    },
    difficulty: 1,
    points: 10,
    competency: 'money-functions',
  },
  {
    id: 'PER-01-E5',
    level: 1,
    module: 'PER-01',
    kind: 'numeric',
    flavor: 'case',
    context: {
      es: "En 1993 México creó el \"nuevo peso\": cada $1,000 pesos antiguos equivalían a $1 nuevo peso. Doña Carmen encontró en un cajón billetes antiguos que sumaban $50,000.",
      en: "In 1993 Mexico created the \"new peso\": every 1,000 old pesos were worth 1 new peso. Doña Carmen found old notes in a drawer adding up to 50,000 pesos.",
    },
    prompt: {
      es: "¿A cuántos nuevos pesos equivalía esa cantidad?",
      en: "How many new pesos was that amount worth?",
    },
    answer: 50,
    unit: 'MXN',
    decimals: 0,
    tolerance: { abs: 0.01 },
    explanation: {
      es: "Se divide entre 1,000: 50,000 ÷ 1,000 = 50 nuevos pesos. Quitar tres ceros solo cambió la forma de escribir los precios, no el valor. Error común: multiplicar por 1,000 en lugar de dividir.",
      en: "Divide by 1,000: 50,000 ÷ 1,000 = 50 new pesos. Removing three zeros only changed how prices were written, not their value. Common mistake: multiplying by 1,000 instead of dividing.",
    },
    difficulty: 1,
    points: 10,
    competency: 'money-functions',
  },
  {
    id: 'PER-01-E6',
    level: 1,
    module: 'PER-01',
    kind: 'mcq',
    flavor: 'concept',
    prompt: {
      es: "Un billete de $200 de hoy es dinero fiduciario. ¿De dónde viene su valor?",
      en: "A $200 bill today is fiat money. Where does its value come from?",
    },
    options: [
      { id: 'PER-01-E6-a', text: { es: "Del papel y la tinta con que está hecho", en: "From the paper and ink it is made of" } },
      { id: 'PER-01-E6-b', text: { es: "De que se puede cambiar por su peso en oro en cualquier banco", en: "From being exchangeable for its weight in gold at any bank" } },
      { id: 'PER-01-E6-c', text: { es: "De la confianza de la gente y de que la ley obliga a aceptarlo", en: "From people's trust and the law requiring it to be accepted" } },
      { id: 'PER-01-E6-d', text: { es: "De la cantidad de semillas de cacao que representa", en: "From the number of cacao beans it represents" } },
    ],
    correctOptionId: 'PER-01-E6-c',
    explanation: {
      es: "El dinero fiduciario vale porque las personas confían en él y la ley lo reconoce como medio de pago; no está respaldado por oro ni por su material. Error común: creer que los billetes actuales se pueden cambiar por oro en el banco.",
      en: "Fiat money is worth something because people trust it and the law recognizes it as a means of payment; it is not backed by gold or by its material. Common mistake: believing today's notes can be exchanged for gold at the bank.",
    },
    difficulty: 1,
    points: 10,
    competency: 'money-functions',
  },

  // ═════════════════════════ PER-02 ═════════════════════════
  {
    id: 'PER-02-E1',
    level: 1,
    module: 'PER-02',
    kind: 'mcq',
    flavor: 'concept',
    prompt: {
      es: "¿Cuál es la mejor descripción de la educación financiera?",
      en: "Which is the best description of financial literacy?",
    },
    options: [
      { id: 'PER-02-E1-a', text: { es: "Saber invertir en la bolsa de valores", en: "Knowing how to invest in the stock market" } },
      { id: 'PER-02-E1-b', text: { es: "Conocimientos, habilidades y actitudes que te ayudan a decidir bien con tu dinero y a convertirlo en hábitos", en: "Knowledge, skills and attitudes that help you decide well with your money and turn it into habits" } },
      { id: 'PER-02-E1-c', text: { es: "Una materia que solo necesitan los contadores", en: "A subject only accountants need" } },
      { id: 'PER-02-E1-d', text: { es: "Ganar más dinero que los demás", en: "Earning more money than others" } },
    ],
    correctOptionId: 'PER-02-E1-b',
    explanation: {
      es: "La educación financiera combina saber, saber hacer y querer hacer, y se nota en el comportamiento diario. Invertir es solo un tema dentro de ella, y no depende de cuánto ganas. Error común: confundirla con \"saber invertir\".",
      en: "Financial literacy combines knowing, knowing how and wanting to, and it shows in daily behavior. Investing is only one topic within it, and it does not depend on how much you earn. Common mistake: confusing it with \"knowing how to invest\".",
    },
    difficulty: 1,
    points: 10,
    competency: 'financial-literacy',
  },
  {
    id: 'PER-02-E2',
    level: 1,
    module: 'PER-02',
    kind: 'truefalse',
    flavor: 'concept',
    prompt: {
      es: "Quien tiene un ingreso alto no necesita educación financiera, porque el dinero siempre le alcanzará.",
      en: "Someone with a high income does not need financial literacy, because the money will always be enough.",
    },
    answer: false,
    explanation: {
      es: "Falso. Sin hábitos sanos, el gasto suele crecer al ritmo del ingreso y también se cae en deudas o malas decisiones. Lo que marca la diferencia es cómo se administra, no solo cuánto entra. Error común: pensar que más ingreso resuelve todo.",
      en: "False. Without healthy habits, spending tends to grow along with income, and people still fall into debt or bad decisions. What makes the difference is how money is managed, not just how much comes in. Common mistake: thinking more income solves everything.",
    },
    difficulty: 1,
    points: 10,
    competency: 'financial-literacy',
  },
  {
    id: 'PER-02-E3',
    level: 1,
    module: 'PER-02',
    kind: 'classify',
    flavor: 'concept',
    context: {
      es: "Elena trabaja como enfermera y vive con su hija de 8 años.",
      en: "Elena works as a nurse and lives with her 8-year-old daughter.",
    },
    prompt: {
      es: "Clasifica cada gasto de Elena como necesidad o deseo.",
      en: "Classify each of Elena's expenses as a need or a want.",
    },
    categories: [
      { id: 'PER-02-E3-c1', label: { es: "Necesidad", en: "Need" } },
      { id: 'PER-02-E3-c2', label: { es: "Deseo", en: "Want" } },
    ],
    items: [
      { id: 'PER-02-E3-i1', label: { es: "Renta del departamento", en: "Apartment rent" }, correctCategoryId: 'PER-02-E3-c1' },
      { id: 'PER-02-E3-i2', label: { es: "Medicamento recetado para su hija", en: "Prescribed medicine for her daughter" }, correctCategoryId: 'PER-02-E3-c1' },
      { id: 'PER-02-E3-i3', label: { es: "Pasajes para ir al hospital donde trabaja", en: "Fares to get to the hospital where she works" }, correctCategoryId: 'PER-02-E3-c1' },
      { id: 'PER-02-E3-i4', label: { es: "Cambiar su celular que funciona bien por el modelo más nuevo", en: "Replacing her working phone with the newest model" }, correctCategoryId: 'PER-02-E3-c2' },
      { id: 'PER-02-E3-i5', label: { es: "Una segunda plataforma de streaming", en: "A second streaming platform" }, correctCategoryId: 'PER-02-E3-c2' },
      { id: 'PER-02-E3-i6', label: { es: "Tenis de marca cuando los suyos aún sirven", en: "Designer sneakers when hers still work" }, correctCategoryId: 'PER-02-E3-c2' },
    ],
    explanation: {
      es: "Vivienda, salud y transporte al trabajo son necesidades: sin ellas su vida y su empleo se afectan. El celular nuevo, otra plataforma y tenis de marca se pueden posponer o sustituir: son deseos. Error común: clasificar el celular como necesidad; el teléfono puede serlo, pero cambiar uno que funciona por el más nuevo es un deseo.",
      en: "Housing, health and transportation to work are needs: without them her life and job are affected. The new phone, another platform and designer sneakers can be postponed or replaced: they are wants. Common mistake: classifying the phone as a need; a phone may be, but replacing a working one with the newest is a want.",
    },
    difficulty: 1,
    points: 15,
    competency: 'financial-literacy',
  },
  {
    id: 'PER-02-E4',
    level: 1,
    module: 'PER-02',
    kind: 'numeric',
    flavor: 'case',
    context: {
      es: "Una lavadora cuesta $4,800 de contado. La misma tienda la ofrece en 12 pagos mensuales de $450.",
      en: "A washing machine costs $4,800 in cash. The same store offers it in 12 monthly payments of $450.",
    },
    prompt: {
      es: "¿Cuántos pesos de más pagarías si eliges los pagos mensuales en lugar del contado?",
      en: "How many extra pesos would you pay if you chose the monthly payments instead of cash?",
    },
    answer: 600,
    unit: 'MXN',
    decimals: 0,
    tolerance: { abs: 0.5 },
    explanation: {
      es: "Costo total a plazos: 450 × 12 = $5,400. Diferencia: 5,400 − 4,800 = $600. Un consumidor informado compara el costo total, no solo el pago mensual. Error común: responder 5,400 (el total) en lugar de la diferencia.",
      en: "Total installment cost: 450 × 12 = $5,400. Difference: 5,400 − 4,800 = $600. An informed consumer compares the total cost, not just the monthly payment. Common mistake: answering 5,400 (the total) instead of the difference.",
    },
    difficulty: 1,
    points: 15,
    competency: 'financial-literacy',
  },
  {
    id: 'PER-02-E5',
    level: 1,
    module: 'PER-02',
    kind: 'multi',
    flavor: 'concept',
    prompt: {
      es: "¿Cuáles de estos hábitos reflejan un comportamiento financiero sano? Selecciona todos los que apliquen.",
      en: "Which of these habits reflect healthy financial behavior? Select all that apply.",
    },
    options: [
      { id: 'PER-02-E5-a', text: { es: "Leer las condiciones y comisiones antes de firmar un contrato", en: "Reading the terms and fees before signing a contract" } },
      { id: 'PER-02-E5-b', text: { es: "Compartir tu NIP con un familiar para que te ayude a pagar", en: "Sharing your PIN with a relative so they can help you pay" } },
      { id: 'PER-02-E5-c', text: { es: "Comparar precios y el costo total entre varias opciones", en: "Comparing prices and the total cost across several options" } },
      { id: 'PER-02-E5-d', text: { es: "Comprar en cuanto ves una oferta, aunque no lo necesites", en: "Buying as soon as you see a deal, even if you do not need it" } },
      { id: 'PER-02-E5-e', text: { es: "Fijarte metas con monto y fecha", en: "Setting goals with an amount and a date" } },
    ],
    correctOptionIds: ['PER-02-E5-a', 'PER-02-E5-c', 'PER-02-E5-e'],
    explanation: {
      es: "Leer condiciones, comparar el costo total y fijar metas concretas son hábitos sanos. El NIP es personal y nunca se comparte, y comprar por impulso una oferta que no necesitas sigue siendo un gasto. Error común: pensar que una oferta siempre es ahorro.",
      en: "Reading terms, comparing total cost and setting concrete goals are healthy habits. A PIN is personal and never shared, and impulse-buying a deal you do not need is still spending. Common mistake: thinking a deal is always a saving.",
    },
    difficulty: 1,
    points: 10,
    competency: 'financial-literacy',
  },
  {
    id: 'PER-02-E6',
    level: 1,
    module: 'PER-02',
    kind: 'mcq',
    flavor: 'case',
    context: {
      es: "A Raúl le cobraron en su tarjeta de débito una comisión que nunca aceptó. Ya reclamó en la sucursal y no le resolvieron.",
      en: "Raúl was charged a fee on his debit card that he never agreed to. He already complained at the branch and it was not resolved.",
    },
    prompt: {
      es: "¿A qué autoridad mexicana puede acudir Raúl para recibir orientación y presentar su queja?",
      en: "Which Mexican authority can Raúl turn to for guidance and to file his complaint?",
    },
    options: [
      { id: 'PER-02-E6-a', text: { es: "A la CONDUSEF", en: "CONDUSEF" } },
      { id: 'PER-02-E6-b', text: { es: "Al INEGI", en: "INEGI" } },
      { id: 'PER-02-E6-c', text: { es: "A la Secretaría de Educación Pública", en: "The Ministry of Public Education" } },
      { id: 'PER-02-E6-d', text: { es: "A ninguna: el banco siempre tiene la última palabra", en: "None: the bank always has the final say" } },
    ],
    correctOptionId: 'PER-02-E6-a',
    explanation: {
      es: "La CONDUSEF orienta y defiende a los usuarios de servicios financieros y atiende sus quejas contra instituciones. El INEGI genera estadísticas y la SEP se ocupa de la educación escolar. Error común: creer que no hay a quién acudir si el banco no resuelve.",
      en: "CONDUSEF guides and defends users of financial services and handles their complaints against institutions. INEGI produces statistics and the SEP handles schooling. Common mistake: believing there is nowhere to go if the bank does not resolve it.",
    },
    difficulty: 1,
    points: 10,
    competency: 'financial-literacy',
  },

  // ═════════════════════════ PER-03 ═════════════════════════
  {
    id: 'PER-03-E1',
    level: 1,
    module: 'PER-03',
    kind: 'mcq',
    flavor: 'concept',
    context: {
      es: "Iván gana lo suficiente en el mes, pero cobra el día 30 y la colegiatura de su hijo vence el día 5. Algunos meses tiene que pedir prestado unos días.",
      en: "Iván earns enough each month, but he is paid on the 30th and his son's tuition is due on the 5th. Some months he has to borrow for a few days.",
    },
    prompt: {
      es: "¿Qué tipo de problema tiene Iván?",
      en: "What kind of problem does Iván have?",
    },
    options: [
      { id: 'PER-03-E1-a', text: { es: "De inflación: los precios subieron", en: "Inflation: prices went up" } },
      { id: 'PER-03-E1-b', text: { es: "De liquidez: el dinero no está disponible cuando lo necesita", en: "Liquidity: the money is not available when he needs it" } },
      { id: 'PER-03-E1-c', text: { es: "De ingresos insuficientes: gana menos de lo que gasta", en: "Insufficient income: he earns less than he spends" } },
      { id: 'PER-03-E1-d', text: { es: "De falsificación de billetes", en: "Counterfeit notes" } },
    ],
    correctOptionId: 'PER-03-E1-b',
    explanation: {
      es: "Iván gana lo suficiente, pero las fechas de cobro y de pago no coinciden: es un problema de liquidez. Se resuelve con un calendario de pagos y apartando el dinero antes. Error común: pensar que necesita ganar más.",
      en: "Iván earns enough, but his pay and payment dates do not match: it is a liquidity problem. It is solved with a payment calendar and by setting money aside in advance. Common mistake: thinking he needs to earn more.",
    },
    difficulty: 1,
    points: 10,
    competency: 'money-management',
  },
  {
    id: 'PER-03-E2',
    level: 1,
    module: 'PER-03',
    kind: 'numeric',
    flavor: 'case',
    context: {
      es: "Fernanda empezó el mes con $1,200 en su cuenta. Cobró dos quincenas de $7,250. Pagó renta $5,000, despensa $3,800, transporte $1,400, servicios $900 y otros gastos $1,650.",
      en: "Fernanda started the month with $1,200 in her account. She was paid two fortnightly checks of $7,250. She paid rent $5,000, groceries $3,800, transportation $1,400, utilities $900 and other expenses $1,650.",
    },
    prompt: {
      es: "¿Con cuánto dinero termina Fernanda el mes? Responde en pesos.",
      en: "How much money does Fernanda end the month with? Answer in pesos.",
    },
    answer: 2950,
    unit: 'MXN',
    decimals: 0,
    tolerance: { abs: 0.5 },
    explanation: {
      es: "Entradas: 7,250 × 2 = $14,500. Salidas: 5,000 + 3,800 + 1,400 + 900 + 1,650 = $12,750. Saldo final = 1,200 + 14,500 − 12,750 = $2,950. Error común: olvidar el saldo inicial (daría 1,750) o contar solo una quincena.",
      en: "Inflows: 7,250 × 2 = $14,500. Outflows: 5,000 + 3,800 + 1,400 + 900 + 1,650 = $12,750. Ending balance = 1,200 + 14,500 − 12,750 = $2,950. Common mistake: forgetting the opening balance (it would give 1,750) or counting only one paycheck.",
    },
    difficulty: 1,
    points: 15,
    competency: 'money-management',
  },
  {
    id: 'PER-03-E3',
    level: 1,
    module: 'PER-03',
    kind: 'classify',
    flavor: 'concept',
    prompt: {
      es: "Clasifica cada movimiento según cómo afecta tu flujo de efectivo personal.",
      en: "Classify each transaction by how it affects your personal cash flow.",
    },
    categories: [
      { id: 'PER-03-E3-c1', label: { es: "Entrada de dinero", en: "Money in" } },
      { id: 'PER-03-E3-c2', label: { es: "Salida de dinero", en: "Money out" } },
      { id: 'PER-03-E3-c3', label: { es: "No cambia tu dinero total (solo lo mueves de lugar)", en: "Does not change your total money (you only move it)" } },
    ],
    items: [
      { id: 'PER-03-E3-i1', label: { es: "Te depositan tu quincena", en: "Your fortnightly pay is deposited" }, correctCategoryId: 'PER-03-E3-c1' },
      { id: 'PER-03-E3-i2', label: { es: "Vendes ropa que ya no usas en un bazar", en: "You sell clothes you no longer use at a flea market" }, correctCategoryId: 'PER-03-E3-c1' },
      { id: 'PER-03-E3-i3', label: { es: "Pagas el recibo del agua", en: "You pay the water bill" }, correctCategoryId: 'PER-03-E3-c2' },
      { id: 'PER-03-E3-i4', label: { es: "Te cobran una comisión por no mantener el saldo mínimo", en: "You are charged a fee for not keeping the minimum balance" }, correctCategoryId: 'PER-03-E3-c2' },
      { id: 'PER-03-E3-i5', label: { es: "Retiras $1,000 del cajero para traer efectivo", en: "You withdraw $1,000 from the ATM to carry cash" }, correctCategoryId: 'PER-03-E3-c3' },
      { id: 'PER-03-E3-i6', label: { es: "Pasas $500 de tu cuenta de nómina a tu cuenta de ahorro", en: "You move $500 from your payroll account to your savings account" }, correctCategoryId: 'PER-03-E3-c3' },
    ],
    explanation: {
      es: "Sueldo y ventas son entradas; recibos y comisiones son salidas. Retirar del cajero o pasar a tu ahorro solo cambia el lugar del dinero: sigue siendo tuyo. Error común: registrar el retiro del cajero como un gasto; el gasto ocurre cuando usas ese efectivo.",
      en: "Pay and sales are inflows; bills and fees are outflows. Withdrawing from the ATM or moving money to savings only changes where the money is: it is still yours. Common mistake: recording the ATM withdrawal as an expense; the expense happens when you spend that cash.",
    },
    difficulty: 2,
    points: 15,
    competency: 'money-management',
  },
  {
    id: 'PER-03-E4',
    level: 1,
    module: 'PER-03',
    kind: 'fields',
    flavor: 'case',
    context: {
      es: "Claudia compra un café de $45 cada día laboral, 5 días a la semana.",
      en: "Claudia buys a $45 coffee every workday, 5 days a week.",
    },
    prompt: {
      es: "Calcula cuánto gasta Claudia en café en 4 semanas y en un año de 52 semanas.",
      en: "Compute how much Claudia spends on coffee in 4 weeks and in a 52-week year.",
    },
    fields: [
      { id: 'f1', label: { es: "Gasto en 4 semanas", en: "Spending in 4 weeks" }, answer: 900, unit: 'MXN', tolerance: { abs: 0.5 } },
      { id: 'f2', label: { es: "Gasto en 52 semanas", en: "Spending in 52 weeks" }, answer: 11700, unit: 'MXN', tolerance: { abs: 0.5 } },
    ],
    explanation: {
      es: "Por semana: 45 × 5 = $225. En 4 semanas: 225 × 4 = $900. En el año: 225 × 52 = $11,700. Un gasto hormiga pequeño se vuelve grande con la frecuencia. Error común: multiplicar por 7 días cuando solo compra en días laborales.",
      en: "Per week: 45 × 5 = $225. In 4 weeks: 225 × 4 = $900. In a year: 225 × 52 = $11,700. A small ant expense becomes large with frequency. Common mistake: multiplying by 7 days when she only buys on workdays.",
    },
    difficulty: 1,
    points: 15,
    competency: 'money-management',
  },
  {
    id: 'PER-03-E5',
    level: 1,
    module: 'PER-03',
    kind: 'truefalse',
    flavor: 'concept',
    prompt: {
      es: "\"Pagarte primero\" significa apartar tu ahorro el mismo día que recibes tu ingreso, antes de gastar en lo demás.",
      en: "\"Paying yourself first\" means setting aside your savings on the same day you receive your income, before spending on anything else.",
    },
    answer: true,
    explanation: {
      es: "Verdadero. Al separar el ahorro de inmediato, lo tratas como un compromiso más y no dependes de que \"sobre\". Error común: creer que significa darte un gusto en cuanto cobras.",
      en: "True. By setting aside savings immediately, you treat it as one more commitment and do not depend on something being \"left over\". Common mistake: thinking it means treating yourself as soon as you get paid.",
    },
    difficulty: 1,
    points: 10,
    competency: 'money-management',
  },
  {
    id: 'PER-03-E6',
    level: 1,
    module: 'PER-03',
    kind: 'mcq',
    flavor: 'case',
    context: {
      es: "Tomás cobra $7,000 los días 15 y 30. Su renta de $5,000 vence el día 1. Casi siempre se gasta la quincena del 15 y el día 1 le falta dinero para la renta.",
      en: "Tomás is paid $7,000 on the 15th and the 30th. His $5,000 rent is due on the 1st. He almost always spends the 15th's paycheck and on the 1st he is short for rent.",
    },
    prompt: {
      es: "¿Qué estrategia de administración le ayuda más a Tomás?",
      en: "Which money-management strategy helps Tomás the most?",
    },
    options: [
      { id: 'PER-03-E6-a', text: { es: "Pedir un préstamo cada mes y pagarlo cuando pueda", en: "Take out a loan every month and repay it when he can" } },
      { id: 'PER-03-E6-b', text: { es: "Esperar a que le suban el sueldo", en: "Wait for a pay raise" } },
      { id: 'PER-03-E6-c', text: { es: "Apartar $2,500 de cada quincena en un sobre o cuenta exclusiva para la renta", en: "Set aside $2,500 from each paycheck in an envelope or account just for rent" } },
      { id: 'PER-03-E6-d', text: { es: "Pagar la renta con lo que quede después de sus gastos", en: "Pay rent with whatever is left after his expenses" } },
    ],
    correctOptionId: 'PER-03-E6-c',
    explanation: {
      es: "Con un calendario de pagos, Tomás reparte la renta entre sus dos quincenas: 5,000 ÷ 2 = $2,500 cada una, separados por propósito para no gastarlos. Pedir prestado cada mes genera costos y esperar un aumento no resuelve el desfase. Error común: pagar con \"lo que sobre\", que es justo lo que hoy le falla.",
      en: "With a payment calendar, Tomás splits the rent across his two paychecks: 5,000 ÷ 2 = $2,500 each, kept separate by purpose so he does not spend them. Borrowing every month creates costs, and waiting for a raise does not fix the timing gap. Common mistake: paying with \"whatever is left\", which is exactly what fails today.",
    },
    difficulty: 1,
    points: 10,
    competency: 'money-management',
  },

  // ═════════════════════════ PER-04 ═════════════════════════
  {
    id: 'PER-04-E1',
    level: 1,
    module: 'PER-04',
    kind: 'formula',
    flavor: 'concept',
    prompt: {
      es: "Completa la fórmula para prorratear un gasto que se paga una vez al año.",
      en: "Complete the formula to prorate an expense paid once a year.",
    },
    template: '{{b1}} ÷ {{b2}} = {{b3}}',
    blanks: [
      {
        id: 'b1',
        options: [
          { id: 'PER-04-E1-b1-a', text: { es: "Gasto anual", en: "Annual expense" } },
          { id: 'PER-04-E1-b1-b', text: { es: "Ingreso neto mensual", en: "Monthly net income" } },
          { id: 'PER-04-E1-b1-c', text: { es: "Ahorro acumulado", en: "Accumulated savings" } },
        ],
        correctOptionId: 'PER-04-E1-b1-a',
      },
      {
        id: 'b2',
        options: [
          { id: 'PER-04-E1-b2-a', text: { es: "52 semanas", en: "52 weeks" } },
          { id: 'PER-04-E1-b2-b', text: { es: "12 meses", en: "12 months" } },
          { id: 'PER-04-E1-b2-c', text: { es: "2 quincenas", en: "2 fortnights" } },
        ],
        correctOptionId: 'PER-04-E1-b2-b',
      },
      {
        id: 'b3',
        options: [
          { id: 'PER-04-E1-b3-a', text: { es: "Monto mensual a apartar", en: "Monthly amount to set aside" } },
          { id: 'PER-04-E1-b3-b', text: { es: "Gasto hormiga", en: "Ant expense" } },
          { id: 'PER-04-E1-b3-c', text: { es: "Desviación del presupuesto", en: "Budget variance" } },
        ],
        correctOptionId: 'PER-04-E1-b3-a',
      },
    ],
    explanation: {
      es: "Gasto anual ÷ 12 meses = monto mensual a apartar. Así un pago grande (predial, seguro, inscripciones) se vuelve una parte fija de tu presupuesto mensual. Error común: dividir entre 52 y obtener un monto semanal, que no encaja con un presupuesto mensual.",
      en: "Annual expense ÷ 12 months = monthly amount to set aside. That way a large payment (property tax, insurance, enrollment) becomes a fixed part of your monthly budget. Common mistake: dividing by 52 and getting a weekly amount, which does not fit a monthly budget.",
    },
    difficulty: 1,
    points: 10,
    competency: 'budgeting',
  },
  {
    id: 'PER-04-E2',
    level: 1,
    module: 'PER-04',
    kind: 'fields',
    flavor: 'case',
    context: {
      es: "Alejandra recibe un ingreso neto de $18,000 al mes y quiere usar la regla 50/30/20 como punto de partida.",
      en: "Alejandra has a net income of $18,000 a month and wants to use the 50/30/20 rule as a starting point.",
    },
    prompt: {
      es: "Calcula cuánto le corresponde a cada grupo según la regla.",
      en: "Compute how much goes to each group according to the rule.",
    },
    fields: [
      { id: 'f1', label: { es: "Necesidades (50%)", en: "Needs (50%)" }, answer: 9000, unit: 'MXN', tolerance: { abs: 0.5 } },
      { id: 'f2', label: { es: "Deseos (30%)", en: "Wants (30%)" }, answer: 5400, unit: 'MXN', tolerance: { abs: 0.5 } },
      { id: 'f3', label: { es: "Ahorro y deudas (20%)", en: "Savings and debt (20%)" }, answer: 3600, unit: 'MXN', tolerance: { abs: 0.5 } },
    ],
    explanation: {
      es: "18,000 × 0.50 = $9,000; 18,000 × 0.30 = $5,400; 18,000 × 0.20 = $3,600. Suman 18,000. Error común: aplicar los porcentajes al ingreso bruto, que no es el dinero que realmente llega.",
      en: "18,000 × 0.50 = $9,000; 18,000 × 0.30 = $5,400; 18,000 × 0.20 = $3,600. They add up to 18,000. Common mistake: applying the percentages to gross income, which is not the money that actually arrives.",
    },
    difficulty: 1,
    points: 15,
    competency: 'budgeting',
  },
  {
    id: 'PER-04-E3',
    level: 1,
    module: 'PER-04',
    kind: 'classify',
    flavor: 'concept',
    prompt: {
      es: "Clasifica cada gasto del hogar como fijo o variable.",
      en: "Classify each household expense as fixed or variable.",
    },
    categories: [
      { id: 'PER-04-E3-c1', label: { es: "Gasto fijo", en: "Fixed expense" } },
      { id: 'PER-04-E3-c2', label: { es: "Gasto variable", en: "Variable expense" } },
    ],
    items: [
      { id: 'PER-04-E3-i1', label: { es: "Renta mensual de la casa", en: "Monthly house rent" }, correctCategoryId: 'PER-04-E3-c1' },
      { id: 'PER-04-E3-i2', label: { es: "Plan de internet con tarifa mensual fija", en: "Internet plan with a fixed monthly fee" }, correctCategoryId: 'PER-04-E3-c1' },
      { id: 'PER-04-E3-i3', label: { es: "Colegiatura mensual de la escuela", en: "Monthly school tuition" }, correctCategoryId: 'PER-04-E3-c1' },
      { id: 'PER-04-E3-i4', label: { es: "Despensa del supermercado", en: "Supermarket groceries" }, correctCategoryId: 'PER-04-E3-c2' },
      { id: 'PER-04-E3-i5', label: { es: "Gasolina del auto", en: "Gas for the car" }, correctCategoryId: 'PER-04-E3-c2' },
      { id: 'PER-04-E3-i6', label: { es: "Recibo de luz, que depende del consumo", en: "Electricity bill, which depends on usage" }, correctCategoryId: 'PER-04-E3-c2' },
    ],
    explanation: {
      es: "Renta, internet y colegiatura cuestan casi lo mismo cada mes: son fijos. Despensa, gasolina y luz cambian según cuánto consumes: son variables. Error común: considerar la luz como fija porque llega siempre; llega siempre, pero su monto cambia.",
      en: "Rent, internet and tuition cost about the same every month: they are fixed. Groceries, gas and electricity change with how much you use: they are variable. Common mistake: treating electricity as fixed because the bill always comes; it always comes, but the amount changes.",
    },
    difficulty: 1,
    points: 15,
    competency: 'budgeting',
  },
  {
    id: 'PER-04-E4',
    level: 1,
    module: 'PER-04',
    kind: 'numeric',
    flavor: 'case',
    context: {
      es: "La familia Torres paga cada año $7,800 del seguro del auto y $2,400 de predial.",
      en: "The Torres family pays $7,800 a year for car insurance and $2,400 for property tax.",
    },
    prompt: {
      es: "¿Cuánto deben apartar cada mes para cubrir ambos pagos anuales?",
      en: "How much must they set aside each month to cover both annual payments?",
    },
    answer: 850,
    unit: 'MXN',
    decimals: 0,
    tolerance: { abs: 0.5 },
    explanation: {
      es: "Total anual: 7,800 + 2,400 = $10,200. Por mes: 10,200 ÷ 12 = $850. Error común: prorratear solo uno de los dos pagos o dividir cada uno entre 12 y olvidar sumarlos.",
      en: "Annual total: 7,800 + 2,400 = $10,200. Per month: 10,200 ÷ 12 = $850. Common mistake: prorating only one of the two payments, or dividing each by 12 and forgetting to add them.",
    },
    difficulty: 1,
    points: 15,
    competency: 'budgeting',
  },
  {
    id: 'PER-04-E5',
    level: 1,
    module: 'PER-04',
    kind: 'mcq',
    flavor: 'case',
    context: {
      es: "La familia Pérez presupuestó $4,000 de comida y al cierre del mes gastó $4,900. Descubren que pidieron comida a domicilio casi todos los fines de semana.",
      en: "The Pérez family budgeted $4,000 for food and by month end they had spent $4,900. They find they ordered delivery almost every weekend.",
    },
    prompt: {
      es: "¿Cuál es la mejor reacción ante esta desviación?",
      en: "What is the best reaction to this variance?",
    },
    options: [
      { id: 'PER-04-E5-a', text: { es: "Dejar de hacer presupuesto porque \"no funciona\"", en: "Stop budgeting because \"it doesn't work\"" } },
      { id: 'PER-04-E5-b', text: { es: "Cubrir la diferencia con la tarjeta de crédito y no hablar del tema", en: "Cover the difference with the credit card and not talk about it" } },
      { id: 'PER-04-E5-c', text: { es: "Analizar la causa, acordar en familia un límite para comida a domicilio y ajustar otra categoría si hace falta", en: "Analyze the cause, agree as a family on a limit for delivery and adjust another category if needed" } },
      { id: 'PER-04-E5-d', text: { es: "Subir el presupuesto de comida a $4,900 sin revisar nada más", en: "Raise the food budget to $4,900 without reviewing anything else" } },
    ],
    correctOptionId: 'PER-04-E5-c',
    explanation: {
      es: "La desviación es de $900 (22.5% más). Lo útil es entender la causa y decidir en conjunto: poner un tope a la comida a domicilio o compensar en otra categoría. Abandonar el presupuesto o tapar con crédito solo esconde el problema. Error común: subir la cifra sin revisar, lo que hace que el presupuesto deje de cuadrar.",
      en: "The variance is $900 (22.5% over). The useful step is to understand the cause and decide together: cap delivery or offset in another category. Abandoning the budget or covering it with credit only hides the problem. Common mistake: raising the figure without reviewing, which makes the budget stop adding up.",
    },
    difficulty: 1,
    points: 10,
    competency: 'budgeting',
  },
  {
    id: 'PER-04-E6',
    level: 1,
    module: 'PER-04',
    kind: 'truefalse',
    flavor: 'concept',
    prompt: {
      es: "En un presupuesto base cero, el ingreso menos todas las asignaciones (incluido el ahorro) debe dar cero, lo cual no significa gastarse todo.",
      en: "In a zero-based budget, income minus all allocations (including savings) must equal zero, which does not mean spending everything.",
    },
    answer: true,
    explanation: {
      es: "Verdadero. Base cero significa que cada peso tiene un destino; el ahorro es uno de esos destinos. Error común: pensar que \"cero\" obliga a quedarse sin ahorro.",
      en: "True. Zero-based means every peso has a destination; savings is one of those destinations. Common mistake: thinking \"zero\" forces you to have no savings.",
    },
    difficulty: 1,
    points: 10,
    competency: 'budgeting',
  },

  // ═════════════════════════ PER-05 ═════════════════════════
  {
    id: 'PER-05-E1',
    level: 1,
    module: 'PER-05',
    kind: 'classify',
    flavor: 'concept',
    prompt: {
      es: "Clasifica cada ingreso como activo o pasivo.",
      en: "Classify each income as active or passive.",
    },
    categories: [
      { id: 'PER-05-E1-c1', label: { es: "Ingreso activo", en: "Active income" } },
      { id: 'PER-05-E1-c2', label: { es: "Ingreso pasivo", en: "Passive income" } },
    ],
    items: [
      { id: 'PER-05-E1-i1', label: { es: "Sueldo como cajero de supermercado", en: "Salary as a supermarket cashier" }, correctCategoryId: 'PER-05-E1-c1' },
      { id: 'PER-05-E1-i2', label: { es: "Propinas como mesero", en: "Tips as a waiter" }, correctCategoryId: 'PER-05-E1-c1' },
      { id: 'PER-05-E1-i3', label: { es: "Honorarios por diseñar un logotipo", en: "Fees for designing a logo" }, correctCategoryId: 'PER-05-E1-c1' },
      { id: 'PER-05-E1-i4', label: { es: "Renta mensual que te pagan por un cuarto de tu casa", en: "Monthly rent you receive for a room in your house" }, correctCategoryId: 'PER-05-E1-c2' },
      { id: 'PER-05-E1-i5', label: { es: "Rendimientos que genera tu cuenta de ahorro", en: "Returns earned by your savings account" }, correctCategoryId: 'PER-05-E1-c2' },
    ],
    explanation: {
      es: "Sueldo, propinas y honorarios dependen de tu trabajo y tu tiempo: son activos. La renta del cuarto y los rendimientos llegan por tus bienes o tu dinero, sin trabajar cada hora por ellos: son pasivos. Error común: creer que los honorarios son pasivos porque no hay patrón.",
      en: "Salary, tips and fees depend on your work and time: they are active. Room rent and returns come from your assets or your money, without working every hour for them: they are passive. Common mistake: thinking fees are passive because there is no employer.",
    },
    difficulty: 1,
    points: 15,
    competency: 'income-expenses-saving',
  },
  {
    id: 'PER-05-E2',
    level: 1,
    module: 'PER-05',
    kind: 'fields',
    flavor: 'case',
    context: {
      es: "El recibo de nómina de Octavio muestra (cifras hipotéticas): sueldo bruto $15,000, retención de impuestos $1,450 y cuota de seguridad social $380. Quiere ahorrar 10% de su ingreso neto.",
      en: "Octavio's payslip shows (hypothetical figures): gross salary $15,000, tax withholding $1,450 and social security contribution $380. He wants to save 10% of his net income.",
    },
    prompt: {
      es: "Calcula el ingreso neto de Octavio y su ahorro mensual.",
      en: "Compute Octavio's net income and his monthly savings.",
    },
    fields: [
      { id: 'f1', label: { es: "Ingreso neto", en: "Net income" }, answer: 13170, unit: 'MXN', tolerance: { abs: 0.5 } },
      { id: 'f2', label: { es: "Ahorro mensual (10% del neto)", en: "Monthly savings (10% of net)" }, answer: 1317, unit: 'MXN', tolerance: { abs: 0.5 } },
    ],
    explanation: {
      es: "Neto: 15,000 − 1,450 − 380 = $13,170. Ahorro: 13,170 × 0.10 = $1,317. Error común: calcular el 10% sobre el bruto ($1,500), que es más de lo que realmente puede separar de lo que recibe.",
      en: "Net: 15,000 − 1,450 − 380 = $13,170. Savings: 13,170 × 0.10 = $1,317. Common mistake: computing 10% of gross ($1,500), which is more than he can actually set aside from what he receives.",
    },
    difficulty: 1,
    points: 15,
    competency: 'income-expenses-saving',
  },
  {
    id: 'PER-05-E3',
    level: 1,
    module: 'PER-05',
    kind: 'numeric',
    flavor: 'case',
    context: {
      es: "Gabriela tiene un ingreso neto de $20,000 al mes y sus gastos suman $17,000.",
      en: "Gabriela has a net income of $20,000 a month and her expenses add up to $17,000.",
    },
    prompt: {
      es: "¿Cuál es la tasa de ahorro de Gabriela? Responde en porcentaje.",
      en: "What is Gabriela's savings rate? Answer as a percentage.",
    },
    answer: 15,
    unit: '%',
    decimals: 1,
    tolerance: { abs: 0.05 },
    explanation: {
      es: "Ahorro: 20,000 − 17,000 = $3,000. Tasa: 3,000 ÷ 20,000 × 100 = 15%. Error común: dividir entre los gastos (3,000 ÷ 17,000 ≈ 17.6%) en lugar de entre el ingreso.",
      en: "Savings: 20,000 − 17,000 = $3,000. Rate: 3,000 ÷ 20,000 × 100 = 15%. Common mistake: dividing by expenses (3,000 ÷ 17,000 ≈ 17.6%) instead of by income.",
    },
    difficulty: 1,
    points: 10,
    competency: 'income-expenses-saving',
  },
  {
    id: 'PER-05-E4',
    level: 1,
    module: 'PER-05',
    kind: 'mcq',
    flavor: 'concept',
    prompt: {
      es: "¿Cuál es una ventaja del ahorro formal en un banco frente a guardar el dinero en casa?",
      en: "What is an advantage of formal saving at a bank over keeping money at home?",
    },
    options: [
      { id: 'PER-05-E4-a', text: { es: "El dinero se duplica automáticamente cada año", en: "The money automatically doubles every year" } },
      { id: 'PER-05-E4-b', text: { es: "La institución está supervisada y los depósitos cuentan con un seguro (IPAB) hasta cierto límite", en: "The institution is supervised and deposits are insured (IPAB) up to a certain limit" } },
      { id: 'PER-05-E4-c', text: { es: "No hay ninguna regla ni contrato", en: "There are no rules or contract at all" } },
      { id: 'PER-05-E4-d', text: { es: "Nunca cobra ninguna comisión, sin importar el producto", en: "It never charges any fee, regardless of the product" } },
    ],
    correctOptionId: 'PER-05-E4-b',
    explanation: {
      es: "En el ahorro formal hay supervisión de autoridades y, en los bancos, un seguro de depósitos del IPAB con límites. El dinero no se duplica solo y algunas cuentas sí cobran comisiones, por eso hay que leer el contrato. Error común: creer que \"formal\" significa sin costos.",
      en: "Formal saving is supervised by authorities and, at banks, deposits have IPAB insurance with limits. Money does not double by itself, and some accounts do charge fees, so you must read the contract. Common mistake: believing \"formal\" means cost-free.",
    },
    difficulty: 1,
    points: 10,
    competency: 'income-expenses-saving',
  },
  {
    id: 'PER-05-E5',
    level: 1,
    module: 'PER-05',
    kind: 'truefalse',
    flavor: 'concept',
    prompt: {
      es: "Un gasto discrecional es uno que puedes reducir o posponer sin poner en riesgo tus necesidades básicas.",
      en: "A discretionary expense is one you can reduce or postpone without endangering your basic needs.",
    },
    answer: true,
    explanation: {
      es: "Verdadero. Comer fuera, suscripciones o ropa extra son discrecionales; por eso de ahí suele salir el margen para ahorrar. Error común: pensar que todo gasto variable es discrecional; la despensa varía pero es necesaria.",
      en: "True. Eating out, subscriptions or extra clothes are discretionary; that is why room to save usually comes from them. Common mistake: thinking every variable expense is discretionary; groceries vary but are necessary.",
    },
    difficulty: 1,
    points: 10,
    competency: 'income-expenses-saving',
  },
  {
    id: 'PER-05-E6',
    level: 1,
    module: 'PER-05',
    kind: 'numeric',
    flavor: 'case',
    context: {
      es: "Lucía quiere juntar $9,000 para un curso de inglés. Ya tiene $1,800 ahorrados y el curso empieza dentro de 8 meses.",
      en: "Lucía wants to put together $9,000 for an English course. She already has $1,800 saved and the course starts in 8 months.",
    },
    prompt: {
      es: "¿Cuánto debe ahorrar Lucía cada mes para llegar a su meta a tiempo?",
      en: "How much must Lucía save each month to reach her goal on time?",
    },
    answer: 900,
    unit: 'MXN',
    decimals: 0,
    tolerance: { abs: 0.5 },
    explanation: {
      es: "Le falta 9,000 − 1,800 = $7,200. Por mes: 7,200 ÷ 8 = $900. Error común: dividir la meta completa (9,000 ÷ 8 = 1,125) sin restar lo que ya tiene.",
      en: "She still needs 9,000 − 1,800 = $7,200. Per month: 7,200 ÷ 8 = $900. Common mistake: dividing the full goal (9,000 ÷ 8 = 1,125) without subtracting what she already has.",
    },
    difficulty: 1,
    points: 15,
    competency: 'income-expenses-saving',
  },

  // ═════════════════════════ PER-06 ═════════════════════════
  {
    id: 'PER-06-E1',
    level: 1,
    module: 'PER-06',
    kind: 'mcq',
    flavor: 'concept',
    prompt: {
      es: "¿Cuál de estas situaciones describe mejor la inflación?",
      en: "Which of these situations best describes inflation?",
    },
    options: [
      { id: 'PER-06-E1-a', text: { es: "El precio del aguacate sube una semana por una helada", en: "The price of avocado rises one week because of a frost" } },
      { id: 'PER-06-E1-b', text: { es: "Muchos bienes y servicios suben de precio de forma continua a lo largo de los meses", en: "Many goods and services keep rising in price over the months" } },
      { id: 'PER-06-E1-c', text: { es: "Una tienda pone en oferta todos sus productos", en: "A store puts all its products on sale" } },
      { id: 'PER-06-E1-d', text: { es: "Tu sueldo aumenta por un ascenso", en: "Your salary rises because of a promotion" } },
    ],
    correctOptionId: 'PER-06-E1-b',
    explanation: {
      es: "La inflación es un aumento generalizado (muchos productos) y sostenido (a lo largo del tiempo) de los precios. El aguacate caro una semana es un cambio de precio de un solo producto. Una oferta es una baja puntual y un ascenso no es un cambio de precios. Error común: llamar inflación a cualquier aumento aislado.",
      en: "Inflation is a general (many products) and sustained (over time) rise in prices. Expensive avocados for one week is a price change in a single product. A sale is a one-off drop and a promotion is not a price change. Common mistake: calling any isolated increase inflation.",
    },
    difficulty: 1,
    points: 10,
    competency: 'inflation',
  },
  {
    id: 'PER-06-E2',
    level: 1,
    module: 'PER-06',
    kind: 'numeric',
    flavor: 'case',
    context: {
      es: "Supón (cifras hipotéticas) que un índice de precios al consumidor valía 130 en junio de un año y 136.5 en junio del año siguiente.",
      en: "Suppose (hypothetical figures) a consumer price index was 130 in June of one year and 136.5 in June of the following year.",
    },
    prompt: {
      es: "¿Cuál fue la inflación anual? Responde en porcentaje.",
      en: "What was the annual inflation? Answer as a percentage.",
    },
    answer: 5,
    unit: '%',
    decimals: 1,
    tolerance: { abs: 0.05 },
    explanation: {
      es: "(136.5 ÷ 130 − 1) × 100 = (1.05 − 1) × 100 = 5%. Error común: restar los índices (136.5 − 130 = 6.5) y llamarlo porcentaje; la inflación es el cambio relativo, no la diferencia de puntos.",
      en: "(136.5 ÷ 130 − 1) × 100 = (1.05 − 1) × 100 = 5%. Common mistake: subtracting the indexes (136.5 − 130 = 6.5) and calling it a percentage; inflation is the relative change, not the point difference.",
    },
    difficulty: 1,
    points: 15,
    competency: 'inflation',
  },
  {
    id: 'PER-06-E3',
    level: 1,
    module: 'PER-06',
    kind: 'numeric',
    flavor: 'case',
    context: {
      es: "Héctor guarda $10,000 en efectivo durante un año. En ese año, la inflación (hipotética) es de 4%.",
      en: "Héctor keeps $10,000 in cash for one year. That year, (hypothetical) inflation is 4%.",
    },
    prompt: {
      es: "¿Cuál es el valor real de esos $10,000 al final del año, a precios del inicio? Responde en pesos con dos decimales.",
      en: "What is the real value of that $10,000 at year end, at starting prices? Answer in pesos with two decimals.",
    },
    answer: 9615.38,
    unit: 'MXN',
    decimals: 2,
    tolerance: { abs: 1 },
    explanation: {
      es: "Valor real = 10,000 ÷ 1.04 ≈ $9,615.38. Sigue teniendo $10,000 en billetes, pero compran lo que antes compraban $9,615.38. Error común: restar 4% directo (10,000 × 0.96 = 9,600); es una aproximación cercana, pero el cálculo correcto divide entre 1 + inflación.",
      en: "Real value = 10,000 ÷ 1.04 ≈ $9,615.38. He still holds $10,000 in bills, but they buy what $9,615.38 used to buy. Common mistake: subtracting 4% directly (10,000 × 0.96 = 9,600); it is a close approximation, but the correct calculation divides by 1 + inflation.",
    },
    difficulty: 2,
    points: 15,
    competency: 'inflation',
  },
  {
    id: 'PER-06-E4',
    level: 1,
    module: 'PER-06',
    kind: 'fields',
    flavor: 'case',
    context: {
      es: "Una familia compraba su canasta de productos del mes por $2,000. Un año después, la misma canasta le cuesta $2,140.",
      en: "A family used to buy its monthly basket of products for $2,000. A year later, the same basket costs $2,140.",
    },
    prompt: {
      es: "Calcula el aumento en pesos y el porcentaje de aumento de la canasta.",
      en: "Compute the increase in pesos and the percentage increase of the basket.",
    },
    fields: [
      { id: 'f1', label: { es: "Aumento en pesos", en: "Increase in pesos" }, answer: 140, unit: 'MXN', tolerance: { abs: 0.5 } },
      { id: 'f2', label: { es: "Aumento porcentual", en: "Percentage increase" }, answer: 7, unit: '%', tolerance: { abs: 0.05 } },
    ],
    explanation: {
      es: "Aumento: 2,140 − 2,000 = $140. Porcentaje: 140 ÷ 2,000 × 100 = 7%. Error común: dividir entre el precio nuevo (140 ÷ 2,140 ≈ 6.5%); el cambio porcentual se mide contra el valor inicial.",
      en: "Increase: 2,140 − 2,000 = $140. Percentage: 140 ÷ 2,000 × 100 = 7%. Common mistake: dividing by the new price (140 ÷ 2,140 ≈ 6.5%); the percentage change is measured against the starting value.",
    },
    difficulty: 1,
    points: 15,
    competency: 'inflation',
  },
  {
    id: 'PER-06-E5',
    level: 1,
    module: 'PER-06',
    kind: 'truefalse',
    flavor: 'interpret',
    prompt: {
      es: "Si tu sueldo sube 3% en un año en que la inflación fue de 5%, tu poder adquisitivo aumentó.",
      en: "If your salary rises 3% in a year when inflation was 5%, your purchasing power increased.",
    },
    answer: false,
    explanation: {
      es: "Falso. Tu sueldo creció menos que los precios, así que puedes comprar menos que antes: perdiste alrededor de 2% real (3% − 5%). Error común: fijarse solo en que ahora recibes más pesos.",
      en: "False. Your salary grew less than prices, so you can buy less than before: you lost about 2% in real terms (3% − 5%). Common mistake: looking only at the fact that you now receive more pesos.",
    },
    difficulty: 1,
    points: 10,
    competency: 'inflation',
  },
  {
    id: 'PER-06-E6',
    level: 1,
    module: 'PER-06',
    kind: 'mcq',
    flavor: 'concept',
    prompt: {
      es: "En México, ¿qué institución publica el Índice Nacional de Precios al Consumidor (INPC)?",
      en: "In Mexico, which institution publishes the National Consumer Price Index (INPC)?",
    },
    options: [
      { id: 'PER-06-E6-a', text: { es: "La CONDUSEF", en: "CONDUSEF" } },
      { id: 'PER-06-E6-b', text: { es: "El SAT", en: "The SAT" } },
      { id: 'PER-06-E6-c', text: { es: "La PROFECO", en: "PROFECO" } },
      { id: 'PER-06-E6-d', text: { es: "El INEGI", en: "INEGI" } },
    ],
    correctOptionId: 'PER-06-E6-d',
    explanation: {
      es: "El INEGI (Instituto Nacional de Estadística y Geografía) publica el INPC, con el que se mide la inflación. El Banco de México lo usa para su objetivo de mantener la inflación baja y estable. Error común: pensar que la PROFECO lo calcula porque vigila precios en tiendas.",
      en: "INEGI (National Institute of Statistics and Geography) publishes the INPC, which is used to measure inflation. Banco de México uses it for its goal of keeping inflation low and stable. Common mistake: thinking PROFECO computes it because it monitors store prices.",
    },
    difficulty: 1,
    points: 10,
    competency: 'inflation',
  },
]
