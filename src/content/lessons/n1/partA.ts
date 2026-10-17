import type { Exercise, Lesson } from '../../../types'

/**
 * FINCORE — Nivel 1, parte A: temas 1.1 a 1.5
 * (Unidad 1. Introducción a la contabilidad; Unidad 2. Fundamentos contables, temas 1.4 y 1.5).
 */

const NOTE_NIF = {
  es: "Contenido educativo basado en las Normas de Información Financiera (NIF) emitidas por el CINIF (Consejo Mexicano de Normas de Información Financiera). Las normas se actualizan: verifica la versión vigente (2026) antes de aplicarlas en un caso real.",
  en: "Educational content based on the Mexican Financial Reporting Standards (NIF) issued by CINIF (Mexican Financial Reporting Standards Board). Standards are updated: verify the current version (2026) before applying them to a real case.",
}

const NOTE_MONEY = {
  es: "Contenido educativo. Las referencias al Banco de México, a la regulación de activos virtuales y a las NIF del CINIF son generales; las reglas cambian con el tiempo, así que verifica la versión vigente (2026) antes de tomar decisiones.",
  en: "Educational content. References to Banco de México, to the regulation of virtual assets and to CINIF's NIF are general; rules change over time, so verify the current version (2026) before making decisions.",
}

export const lessons: Lesson[] = [
  // ───────────────────────────── L1-01 ─────────────────────────────
  {
    id: 'L1-01',
    level: 1,
    topicIds: ['1.1'],
    title: { es: "¿Qué es la contabilidad y para qué sirve?", en: "What is accounting and what is it for?" },
    summary: {
      es: "La contabilidad es el sistema que anota y ordena el dinero de un negocio para que cualquiera pueda entender cómo va y tomar buenas decisiones.",
      en: "Accounting is the system that records and organizes a business's money so anyone can understand how it is doing and make good decisions.",
    },
    minutes: 14,
    objectives: [
      { es: "Explicar con tus palabras qué es la contabilidad, cuáles son sus objetivos y por qué es importante.", en: "Explain in your own words what accounting is, what its objectives are and why it matters." },
      { es: "Identificar quién usa la información financiera y distinguir usuarios internos y externos.", en: "Identify who uses financial information and distinguish internal and external users." },
      { es: "Reconocer los principales tipos de contabilidad: financiera, administrativa y fiscal, y privada y gubernamental.", en: "Recognize the main types of accounting: financial, managerial and tax, and private and governmental." },
    ],
    theory: [
      {
        heading: { es: "¿Para qué sirve la contabilidad?", en: "What is accounting for?" },
        body: [
          {
            es: "Piensa en una **tiendita de la esquina**. Cada día entra dinero por lo que vende y sale dinero para pagar refrescos, luz o renta. Si nadie lo anota, al final del mes la dueña no sabe si ganó o perdió. La **contabilidad** es justo eso: un sistema para **anotar, ordenar y resumir** en dinero todo lo que pasa en un negocio.",
            en: "Think of a **corner store**. Every day money comes in from sales and goes out to pay for sodas, electricity or rent. If no one writes it down, at the end of the month the owner does not know whether she made or lost money. **Accounting** is exactly that: a system to **record, organize and summarize** in money everything that happens in a business.",
          },
          {
            es: "Su **objetivo** principal es producir **información financiera**: datos claros sobre cuánto tiene el negocio, cuánto debe, cuánto vendió y cuánto ganó. Esa información se presenta en reportes llamados **estados financieros** (los verás más adelante).",
            en: "Its main **objective** is to produce **financial information**: clear data on how much the business owns, how much it owes, how much it sold and how much it earned. That information is presented in reports called **financial statements** (you will see them later).",
          },
          {
            es: "¿Por qué es **importante**? Porque sin números confiables decides a ciegas: no sabes si subir precios, si te alcanza para contratar a alguien o si puedes pedir un préstamo. La contabilidad también ayuda a **controlar** (detectar faltantes o errores) y a **cumplir** con obligaciones, como pagar impuestos.",
            en: "Why is it **important**? Because without reliable numbers you decide blindly: you do not know whether to raise prices, whether you can afford to hire someone or whether you can ask for a loan. Accounting also helps to **control** (spot shortages or mistakes) and to **comply** with obligations, such as paying taxes.",
          },
        ],
        bullets: [
          { es: "Registrar: anotar cada operación (una venta, una compra, un pago).", en: "Record: write down each transaction (a sale, a purchase, a payment)." },
          { es: "Clasificar: agrupar lo parecido (todo lo que se vendió, todo lo que se pagó de renta).", en: "Classify: group similar items (everything sold, all rent paid)." },
          { es: "Resumir: presentar totales en reportes fáciles de leer.", en: "Summarize: present totals in easy-to-read reports." },
          { es: "Informar: entregar esos reportes a quien necesita decidir.", en: "Report: deliver those reports to whoever needs to decide." },
        ],
      },
      {
        heading: { es: "El corte de caja", en: "The cash count" },
        body: [
          {
            es: "El ejemplo más sencillo de control es el **corte de caja**: al cerrar, comparas el dinero que **debería** haber según tus anotaciones con el que **realmente** cuentas. Si no coinciden, hay un **faltante** (falta dinero) o un **sobrante** (sobra dinero), y sabes que algo hay que revisar.",
            en: "The simplest example of control is the **cash count** (corte de caja): at closing, you compare the money that **should** be there according to your notes with the money you **actually** count. If they do not match, there is a **shortage** (money missing) or an **overage** (extra money), and you know something needs checking.",
          },
        ],
        formulas: [
          {
            name: { es: "Dinero que debería haber en caja al cerrar (corte de caja)", en: "Money that should be in the cash box at closing (cash count)" },
            expression: "Caja final = Saldo inicial + Entradas − Salidas",
            variables: [
              { symbol: "Caja final", meaning: { es: "Los pesos que deberían quedar en la caja al cerrar el día, según tus anotaciones.", en: "The pesos that should be left in the cash box at closing, according to your notes." } },
              { symbol: "Saldo inicial", meaning: { es: "Los pesos con los que abriste la caja al empezar el día.", en: "The pesos you opened the cash box with at the start of the day." } },
              { symbol: "Entradas", meaning: { es: "Todo el dinero que entró en el día, en pesos (por ejemplo, las ventas cobradas).", en: "All the money that came in during the day, in pesos (for example, sales collected)." } },
              { symbol: "Salidas", meaning: { es: "Todo el dinero que salió en el día, en pesos (pagos a proveedores, reparaciones, compras).", en: "All the money that went out during the day, in pesos (payments to suppliers, repairs, purchases)." } },
            ],
            steps: [
              { es: "Anota el saldo inicial: el dinero con el que abriste.", en: "Write down the opening balance: the money you opened with." },
              { es: "Súmale todas las entradas del día.", en: "Add all of the day's inflows." },
              { es: "Suma todas las salidas y réstalas al resultado anterior: eso es lo que debería haber.", en: "Add up all the outflows and subtract them from the previous result: that is what should be there." },
              { es: "Compara con lo que cuentas: Diferencia = Caja final − Dinero contado. Si es positiva, falta dinero; si es negativa, sobra.", en: "Compare with what you count: Difference = Ending cash − Money counted. If positive, money is missing; if negative, there is extra." },
            ],
            example: {
              es: "Una frutería abre con $600, vende $2,900 y paga $1,100 al proveedor y $300 de bolsas. Paso 2: $600 + $2,900 = $3,500. Paso 3: salidas $1,100 + $300 = $1,400; $3,500 − $1,400 = $2,100. Debería haber **$2,100**. Si al contar hay $2,050: $2,100 − $2,050 = $50 de faltante.",
              en: "A fruit shop opens with $600, sells $2,900 and pays $1,100 to the supplier and $300 for bags. Step 2: $600 + $2,900 = $3,500. Step 3: outflows $1,100 + $300 = $1,400; $3,500 − $1,400 = $2,100. There should be **$2,100**. If the count shows $2,050: $2,100 − $2,050 = $50 short.",
            },
            interpret: {
              es: "Si lo contado es igual a la caja final, la caja \"cuadra\". Si hay diferencia, revisa tus anotaciones: puede ser un error al cobrar, un pago sin anotar o un faltante real.",
              en: "If the count equals the ending cash, the cash box \"balances\". If there is a difference, check your notes: it may be a charging error, an unrecorded payment or a real shortage.",
            },
            mistake: {
              es: "Olvidar el saldo inicial y calcular solo Entradas − Salidas. Ese resultado dice cuánto cambió la caja en el día, no cuánto debe haber.",
              en: "Forgetting the opening balance and computing only Inflows − Outflows. That result tells how much the cash box changed during the day, not how much should be in it.",
            },
          },
        ],
      },
      {
        heading: { es: "¿Quién mira tus números?", en: "Who looks at your numbers?" },
        body: [
          {
            es: "Un **usuario** es cualquier persona u organización que lee la información financiera para tomar una decisión. Se dividen en dos grupos según si están dentro o fuera del negocio.",
            en: "A **user** is any person or organization that reads financial information to make a decision. They fall into two groups depending on whether they are inside or outside the business.",
          },
          {
            es: "Los **usuarios internos** trabajan dentro y dirigen el negocio: la dueña que lo administra, el gerente, el encargado de compras. Los **usuarios externos** están fuera: el **banco** que decide si presta, el **proveedor** que decide si vende a crédito, un **inversionista** que piensa poner dinero y la **autoridad fiscal** (en México, el SAT) que revisa que se paguen impuestos.",
            en: "**Internal users** work inside and run the business: the owner who manages it, the manager, the purchasing clerk. **External users** are outside: the **bank** deciding whether to lend, the **supplier** deciding whether to sell on credit, an **investor** thinking of putting in money and the **tax authority** (in Mexico, the SAT) checking that taxes are paid.",
          },
          {
            es: "Mini ejemplo: una cafetería pide un préstamo de $50,000. El banco (usuario externo) revisará sus ventas y deudas. La dueña (usuaria interna) usará los mismos números para decidir si abre los domingos.",
            en: "Mini example: a coffee shop asks for a $50,000 loan. The bank (external user) will review its sales and debts. The owner (internal user) will use the same numbers to decide whether to open on Sundays.",
          },
        ],
      },
      {
        heading: { es: "¿Qué tipos de contabilidad hay?", en: "What types of accounting are there?" },
        body: [
          {
            es: "Según **para qué** se usa la información, hay tres tipos principales. La **contabilidad financiera** prepara reportes generales sobre la situación y los resultados del negocio, siguiendo reglas comunes (en México, las **NIF**), para que cualquier usuario, sobre todo externo, los entienda.",
            en: "Depending on **what** the information is for, there are three main types. **Financial accounting** prepares general reports on the business's position and results, following common rules (in Mexico, the **NIF**), so any user, especially external ones, can understand them.",
          },
          {
            es: "La **contabilidad administrativa** (o de costos) prepara información a la medida para decidir dentro del negocio: cuánto cuesta hacer un pastel, qué producto deja más ganancia, cuánto gastar el próximo mes. La **contabilidad fiscal** se enfoca en calcular y pagar correctamente los impuestos que marcan las leyes.",
            en: "**Managerial (or cost) accounting** prepares tailored information for decisions inside the business: how much it costs to bake a cake, which product earns more, how much to spend next month. **Tax accounting** focuses on correctly computing and paying the taxes required by law.",
          },
          {
            es: "Según **quién** la lleva, también se habla de contabilidad **privada** (empresas y negocios), **gubernamental** (gobiernos y dependencias públicas, que registran lo que recaudan y gastan) y la de **organizaciones sin fines de lucro** (asociaciones y fundaciones).",
            en: "Depending on **who** keeps it, we also speak of **private** accounting (companies and businesses), **governmental** accounting (governments and public agencies, which record what they collect and spend) and accounting for **non-profit organizations** (associations and foundations).",
          },
        ],
        bullets: [
          { es: "Financiera: reportes generales con reglas comunes (NIF).", en: "Financial: general reports under common rules (NIF)." },
          { es: "Administrativa o de costos: información interna para decidir.", en: "Managerial or cost: internal information for decisions." },
          { es: "Fiscal: cálculo y pago de impuestos.", en: "Tax: computing and paying taxes." },
          { es: "Gubernamental: registra ingresos y gastos públicos.", en: "Governmental: records public revenue and spending." },
        ],
      },
    ],
    examples: [
      {
        title: { es: "¿Cuánto debe haber en la caja de la tiendita?", en: "How much should be in the corner store's cash box?" },
        problem: {
          es: "Doña Rosa abre su tiendita con $500 en la caja. En el día vende $2,300, paga $900 al repartidor de refrescos y $150 de garrafones de agua. Al cerrar cuenta $1,700. ¿Le cuadra la caja?",
          en: "Doña Rosa opens her corner store with $500 in the cash box. During the day she sells $2,300, pays $900 to the soda delivery driver and $150 for water jugs. At closing she counts $1,700. Does the cash box balance?",
        },
        steps: [
          { es: "Dinero inicial: $500.", en: "Opening cash: $500." },
          { es: "Sumamos lo que entró: $500 + $2,300 = $2,800.", en: "Add what came in: $500 + $2,300 = $2,800." },
          { es: "Restamos lo que salió: $900 + $150 = $1,050; $2,800 − $1,050 = $1,750.", en: "Subtract what went out: $900 + $150 = $1,050; $2,800 − $1,050 = $1,750." },
          { es: "Comparamos con lo contado: $1,750 − $1,700 = $50 de diferencia.", en: "Compare with the count: $1,750 − $1,700 = $50 difference." },
        ],
        result: {
          es: "Deberían haber $1,750; faltan $50. Gracias a sus anotaciones, Doña Rosa detecta el faltante: eso es la función de control de la contabilidad.",
          en: "There should be $1,750; $50 is missing. Thanks to her notes, Doña Rosa spots the shortage: that is accounting's control function.",
        },
      },
      {
        title: { es: "¿Quién usa la información y para qué?", en: "Who uses the information and what for?" },
        problem: {
          es: "Un taller mecánico vendió $120,000 en servicios este año y debe $30,000 a un proveedor de refacciones. Indica para qué le sirve esta información a tres usuarios: el dueño, el proveedor y el banco.",
          en: "A car repair shop sold $120,000 in services this year and owes $30,000 to a parts supplier. State what this information is for to three users: the owner, the supplier and the bank.",
        },
        steps: [
          { es: "Dueño (interno): con $120,000 de ventas decide si contrata otro mecánico.", en: "Owner (internal): with $120,000 in sales he decides whether to hire another mechanic." },
          { es: "Proveedor (externo): ve la deuda de $30,000 y decide si le sigue vendiendo a crédito.", en: "Supplier (external): sees the $30,000 debt and decides whether to keep selling on credit." },
          { es: "Banco (externo): compara ventas y deudas para decidir si le presta.", en: "Bank (external): compares sales and debts to decide whether to lend." },
        ],
        result: {
          es: "La misma información sirve a usuarios distintos para decisiones distintas: uno interno y dos externos.",
          en: "The same information serves different users for different decisions: one internal and two external.",
        },
      },
    ],
    keyPoints: [
      { es: "La contabilidad registra, clasifica y resume en dinero lo que pasa en un negocio.", en: "Accounting records, classifies and summarizes in money what happens in a business." },
      { es: "Su objetivo es dar información financiera útil para tomar decisiones.", en: "Its objective is to provide financial information useful for making decisions." },
      { es: "Usuarios internos dirigen el negocio; externos (banco, proveedores, inversionistas, SAT) están fuera.", en: "Internal users run the business; external users (bank, suppliers, investors, SAT) are outside." },
      { es: "Tipos por propósito: financiera, administrativa (costos) y fiscal.", en: "Types by purpose: financial, managerial (cost) and tax." },
      { es: "Tipos por quién la lleva: privada, gubernamental y sin fines de lucro.", en: "Types by who keeps it: private, governmental and non-profit." },
    ],
    normativeNote: NOTE_NIF,
    exerciseIds: ['N1A-001', 'N1A-007', 'N1A-003', 'N1A-004', 'N1A-008'],
  },

  // ───────────────────────────── L1-02 ─────────────────────────────
  {
    id: 'L1-02',
    level: 1,
    topicIds: ['1.2'],
    title: { es: "Historia y evolución de la contabilidad", en: "History and evolution of accounting" },
    summary: {
      es: "La contabilidad nació hace miles de años para llevar la cuenta de bienes y deudas, se perfeccionó con la partida doble que difundió Luca Pacioli y hoy funciona con normas y computadoras.",
      en: "Accounting was born thousands of years ago to keep track of goods and debts, was refined with the double entry that Luca Pacioli spread, and today works with standards and computers.",
    },
    minutes: 11,
    objectives: [
      { es: "Describir cómo surgieron los primeros registros contables en las civilizaciones antiguas.", en: "Describe how the first accounting records arose in ancient civilizations." },
      { es: "Explicar quién fue Luca Pacioli y en qué consiste la idea básica de la partida doble.", en: "Explain who Luca Pacioli was and the basic idea of double entry." },
      { es: "Reconocer los cambios que llevaron a la contabilidad moderna: industria, normas y tecnología.", en: "Recognize the changes that led to modern accounting: industry, standards and technology." },
    ],
    theory: [
      {
        heading: { es: "¿Desde cuándo llevamos cuentas?", en: "Since when have we kept count?" },
        body: [
          {
            es: "Mucho antes de que existieran las monedas, las personas ya necesitaban **llevar la cuenta**: cuántos costales de grano había en el almacén, cuántas cabezas de ganado tenía alguien o quién le debía qué a quién. Llevar la cuenta es la semilla de la contabilidad.",
            en: "Long before coins existed, people already needed to **keep count**: how many sacks of grain were in the storehouse, how many head of cattle someone had, or who owed what to whom. Keeping count is the seed of accounting.",
          },
          {
            es: "En **Mesopotamia** se usaban pequeñas fichas y después **tablillas de arcilla** con marcas para registrar cosechas, impuestos y deudas; muchos historiadores relacionan estos registros con el nacimiento de la escritura. En **Egipto**, los escribas anotaban lo que entraba y salía de los graneros. En **Mesoamérica**, los pueblos sometidos a los mexicas pagaban tributos que se registraban en documentos pintados.",
            en: "In **Mesopotamia** people used small tokens and later **clay tablets** with marks to record harvests, taxes and debts; many historians link these records to the birth of writing. In **Egypt**, scribes noted what went in and out of granaries. In **Mesoamerica**, peoples subject to the Mexica paid tributes recorded in painted documents.",
          },
          {
            es: "La idea de fondo es la misma que en tu libreta de gastos: anotar para **no olvidar**, para **controlar** y para **rendir cuentas** a alguien más.",
            en: "The underlying idea is the same as in your own expense notebook: write it down so you **do not forget**, to **control** and to **be accountable** to someone else.",
          },
        ],
      },
      {
        heading: { es: "La regla de los dos lados", en: "The two-sides rule" },
        body: [
          {
            es: "En la Edad Media, los comerciantes de ciudades italianas como **Venecia, Génova y Florencia** compraban y vendían mucho, a crédito y con socios. Necesitaban un método ordenado y desarrollaron la **partida doble**.",
            en: "In the Middle Ages, merchants in Italian cities such as **Venice, Genoa and Florence** bought and sold a lot, on credit and with partners. They needed an orderly method and developed **double entry**.",
          },
          {
            es: "**Luca Pacioli**, fraile franciscano y matemático italiano, publicó en **1494** en Venecia el libro *Summa de arithmetica, geometria, proportioni et proportionalita*. Una de sus partes explicaba el método de los comerciantes venecianos. **Pacioli no inventó la partida doble**, pero fue el primero en describirla en un libro impreso, lo que ayudó a difundirla; por eso se le llama \"padre de la contabilidad\".",
            en: "**Luca Pacioli**, an Italian Franciscan friar and mathematician, published in **1494** in Venice the book *Summa de arithmetica, geometria, proportioni et proportionalita*. One of its parts explained the Venetian merchants' method. **Pacioli did not invent double entry**, but he was the first to describe it in a printed book, which helped spread it; that is why he is called the \"father of accounting\".",
          },
          {
            es: "La idea de la **partida doble** es sencilla: **toda operación tiene dos lados** y ambos valen lo mismo. Si compras mercancía por $5,000 en efectivo, la mercancía aumenta $5,000 y el efectivo disminuye $5,000. Siempre se anota de dónde viene el valor y a dónde va.",
            en: "The idea of **double entry** is simple: **every transaction has two sides** and both are worth the same. If you buy $5,000 of goods in cash, goods increase by $5,000 and cash decreases by $5,000. You always record where the value comes from and where it goes.",
          },
          {
            es: "\"Doble\" no significa escribir dos veces lo mismo: significa ver los **dos efectos** de una misma operación. Es como comprar algo a meses: te llevas el producto completo, pagas una parte hoy y quedas debiendo el resto. Lo pagado más lo que debes es el precio total, y así las cuentas **cuadran**.",
            en: "\"Double\" does not mean writing the same thing twice: it means seeing the **two effects** of one transaction. It is like buying something in installments: you take the whole product, pay part today and owe the rest. What you paid plus what you owe is the total price, and that is how the accounts **balance**.",
          },
        ],
        formulas: [
          {
            name: { es: "Los dos lados de una operación (partida doble)", en: "The two sides of a transaction (double entry)" },
            expression: "Lo que recibes = Lo que entregas + Lo que quedas debiendo",
            variables: [
              { symbol: "Lo que recibes", meaning: { es: "El valor en pesos de lo que entra al negocio (mercancía, un equipo, una licuadora).", en: "The value in pesos of what comes into the business (goods, equipment, a blender)." } },
              { symbol: "Lo que entregas", meaning: { es: "Los pesos que pagas en ese momento (efectivo o transferencia).", en: "The pesos you pay at that moment (cash or transfer)." } },
              { symbol: "Lo que quedas debiendo", meaning: { es: "Los pesos que no pagaste todavía: una deuda nueva con quien te vendió.", en: "The pesos you have not paid yet: a new debt to whoever sold to you." } },
            ],
            steps: [
              { es: "Identifica lo que recibes y su valor total.", en: "Identify what you receive and its total value." },
              { es: "Identifica cuánto pagas hoy.", en: "Identify how much you pay today." },
              { es: "Calcula la deuda: Lo que quedas debiendo = Lo que recibes − Lo que entregas.", en: "Compute the debt: What you still owe = What you receive − What you give." },
              { es: "Comprueba: lo pagado + la deuda debe dar el valor total recibido.", en: "Check: amount paid + debt must equal the total value received." },
            ],
            example: {
              es: "Una panadería compra un horno de $9,000; paga $4,000 en efectivo. Paso 3: deuda = $9,000 − $4,000 = $5,000. Paso 4: $4,000 + $5,000 = $9,000. Lado que recibe: horno $9,000. Otro lado: efectivo $4,000 + deuda $5,000 = $9,000. **Cuadra**.",
              en: "A bakery buys a $9,000 oven; it pays $4,000 in cash. Step 3: debt = $9,000 − $4,000 = $5,000. Step 4: $4,000 + $5,000 = $9,000. Receiving side: oven $9,000. Other side: cash $4,000 + debt $5,000 = $9,000. **It balances**.",
            },
            interpret: {
              es: "Si los dos lados dan lo mismo, la operación está bien registrada. Si no, falta anotar algo (casi siempre, la deuda).",
              en: "If both sides are equal, the transaction is recorded correctly. If not, something is missing (almost always, the debt).",
            },
            mistake: {
              es: "Anotar solo el dinero que pagaste y olvidar lo que quedaste debiendo. Así el lado que entrega queda más chico que lo que recibiste.",
              en: "Recording only the money you paid and forgetting what you still owe. Then the giving side ends up smaller than what you received.",
            },
          },
        ],
      },
      {
        heading: { es: "¿Cómo llegamos a hoy?", en: "How did we get here?" },
        body: [
          {
            es: "Con la **Revolución Industrial** aparecieron fábricas grandes y empresas con muchos dueños (accionistas). Hizo falta calcular cuánto costaba fabricar cada producto (**contabilidad de costos**) y que alguien independiente revisara las cuentas (**auditoría**).",
            en: "With the **Industrial Revolution** came large factories and companies with many owners (shareholders). It became necessary to compute how much each product cost to make (**cost accounting**) and to have someone independent review the accounts (**auditing**).",
          },
          {
            es: "En el siglo XX, las crisis financieras mostraron que cada empresa no podía presentar sus números \"a su manera\". Surgieron **normas contables** para que la información fuera comparable. En México, desde 2002 el **CINIF** (Consejo Mexicano de Normas de Información Financiera) emite las **NIF**; a nivel internacional, el IASB emite las **IFRS** (NIIF).",
            en: "In the 20th century, financial crises showed that companies could not present their numbers \"their own way\". **Accounting standards** emerged so information would be comparable. In Mexico, since 2002 **CINIF** (Mexican Financial Reporting Standards Board) has issued the **NIF**; internationally, the IASB issues **IFRS**.",
          },
          {
            es: "Hoy la contabilidad se lleva en **computadoras y sistemas en la nube**, con facturas electrónicas y reportes casi al instante. Pero la base sigue siendo la misma partida doble de hace más de 500 años.",
            en: "Today accounting is kept on **computers and cloud systems**, with electronic invoices and almost instant reports. But the foundation is still the same double entry from over 500 years ago.",
          },
        ],
        bullets: [
          { es: "Antigüedad: fichas y tablillas para contar bienes y deudas.", en: "Antiquity: tokens and tablets to count goods and debts." },
          { es: "1494: Pacioli publica la partida doble en un libro impreso.", en: "1494: Pacioli publishes double entry in a printed book." },
          { es: "Revolución Industrial: contabilidad de costos y auditoría.", en: "Industrial Revolution: cost accounting and auditing." },
          { es: "Siglos XX y XXI: normas (NIF, IFRS) y tecnología.", en: "20th and 21st centuries: standards (NIF, IFRS) and technology." },
        ],
      },
    ],
    examples: [
      {
        title: { es: "Partida doble en una compra mixta", en: "Double entry in a mixed purchase" },
        problem: {
          es: "La tiendita de Doña Rosa compra mercancía por $5,000: paga $2,000 en efectivo y queda a deber $3,000 al proveedor. ¿Cuáles son los dos lados de la operación?",
          en: "Doña Rosa's corner store buys $5,000 of goods: she pays $2,000 in cash and owes $3,000 to the supplier. What are the two sides of the transaction?",
        },
        steps: [
          { es: "Lo que recibe: mercancía por $5,000.", en: "What she receives: goods for $5,000." },
          { es: "Lo que entrega: $2,000 de efectivo.", en: "What she gives: $2,000 in cash." },
          { es: "Lo que queda debiendo: $3,000 al proveedor.", en: "What she still owes: $3,000 to the supplier." },
          { es: "Comprobación: $2,000 + $3,000 = $5,000.", en: "Check: $2,000 + $3,000 = $5,000." },
        ],
        result: {
          es: "Un lado vale $5,000 (mercancía) y el otro también $5,000 (efectivo entregado + deuda). Los dos lados cuadran.",
          en: "One side is worth $5,000 (goods) and the other is also $5,000 (cash given + debt). Both sides balance.",
        },
      },
      {
        title: { es: "¿Cuántos años tiene el libro de Pacioli?", en: "How old is Pacioli's book?" },
        problem: {
          es: "Si el libro de Pacioli se publicó en 1494, ¿cuántos años habían pasado en 2026?",
          en: "If Pacioli's book was published in 1494, how many years had passed by 2026?",
        },
        steps: [
          { es: "Restamos los años: 2026 − 1494.", en: "Subtract the years: 2026 − 1494." },
          { es: "2026 − 1494 = 532.", en: "2026 − 1494 = 532." },
        ],
        result: {
          es: "Habían pasado 532 años, y la partida doble se sigue usando en todo el mundo.",
          en: "532 years had passed, and double entry is still used worldwide.",
        },
      },
    ],
    keyPoints: [
      { es: "Los primeros registros servían para contar bienes, tributos y deudas.", en: "The first records were used to count goods, tributes and debts." },
      { es: "Los comerciantes italianos desarrollaron la partida doble en la Edad Media.", en: "Italian merchants developed double entry in the Middle Ages." },
      { es: "Luca Pacioli la describió en un libro impreso en 1494; no la inventó, la difundió.", en: "Luca Pacioli described it in a book printed in 1494; he did not invent it, he spread it." },
      { es: "Partida doble: cada operación tiene dos lados del mismo valor.", en: "Double entry: every transaction has two sides of equal value." },
      { es: "La contabilidad moderna suma normas (NIF, IFRS) y tecnología, sobre la misma base.", en: "Modern accounting adds standards (NIF, IFRS) and technology on the same foundation." },
    ],
    normativeNote: NOTE_NIF,
    exerciseIds: ['N1A-011', 'N1A-010', 'N1A-013', 'N1A-014', 'N1A-015'],
  },

  // ───────────────────────────── L1-03 ─────────────────────────────
  {
    id: 'L1-03',
    level: 1,
    topicIds: ['1.3'],
    title: { es: "Historia y evolución del dinero", en: "History and evolution of money" },
    summary: {
      es: "El dinero pasó del trueque a objetos valiosos, monedas, billetes respaldados por la confianza y hoy a saldos digitales, y la contabilidad lo usa como su unidad de medida.",
      en: "Money moved from barter to valuable objects, coins, bills backed by trust and today digital balances, and accounting uses it as its unit of measure.",
    },
    minutes: 11,
    objectives: [
      { es: "Explicar por qué el trueque era incómodo y cómo el dinero lo resolvió.", en: "Explain why barter was inconvenient and how money solved it." },
      { es: "Describir el papel de los bancos y qué es el dinero fiduciario.", en: "Describe the role of banks and what fiat money is." },
      { es: "Distinguir el dinero digital de las criptomonedas y reconocer sus riesgos básicos.", en: "Distinguish digital money from cryptocurrencies and recognize their basic risks." },
      { es: "Identificar las tres funciones del dinero.", en: "Identify the three functions of money." },
    ],
    theory: [
      {
        heading: { es: "¿Por qué inventamos el dinero?", en: "Why did we invent money?" },
        body: [
          {
            es: "Antes del dinero existía el **trueque**: cambiar una cosa por otra. Si tú tienes maíz y quieres una gallina, necesitas encontrar a alguien que tenga una gallina **y además** quiera maíz. A eso se le llama **doble coincidencia de necesidades**, y es difícil de lograr.",
            en: "Before money there was **barter**: trading one thing for another. If you have corn and want a hen, you must find someone who has a hen **and also** wants corn. This is called the **double coincidence of wants**, and it is hard to achieve.",
          },
          {
            es: "Para facilitar los intercambios, las sociedades eligieron objetos que todos aceptaban: el **dinero mercancía**. En Mesoamérica, por ejemplo, los mexicas usaban **granos de cacao** para pagar productos pequeños. En otros lugares se usaron conchas, metales o telas.",
            en: "To make trade easier, societies chose objects everyone accepted: **commodity money**. In Mesoamerica, for example, the Mexica used **cacao beans** to pay for small items. Elsewhere, shells, metals or cloth were used.",
          },
          {
            es: "Después llegaron las **monedas de metal** (las primeras se atribuyen al reino de Lidia, en la actual Turquía, hace unos 2,600 años) y más tarde el **papel moneda**, que se usó primero en China. Un billete es mucho más fácil de cargar que un costal de cacao.",
            en: "Then came **metal coins** (the first are attributed to the kingdom of Lydia, in today's Turkey, about 2,600 years ago) and later **paper money**, first used in China. A bill is much easier to carry than a sack of cacao.",
          },
          {
            es: "El dinero cumple **tres funciones** (ver la lista). La de **unidad de cuenta** es la que más usa la contabilidad: como todo tiene precio en pesos, puedes comparar cosas muy distintas. Si sabes cuánto cuesta cada una, una división te dice cuántas de una equivalen a otra, sin necesidad de trueque.",
            en: "Money has **three functions** (see the list). The **unit of account** is the one accounting uses most: since everything has a price in pesos, you can compare very different things. If you know what each one costs, a division tells you how many of one equal another, with no need for barter.",
          },
        ],
        formulas: [
          {
            name: { es: "Equivalencia entre dos bienes usando su precio", en: "Equivalence between two goods using their price" },
            expression: "Cantidad de B = Precio de A ÷ Precio de B",
            variables: [
              { symbol: "Cantidad de B", meaning: { es: "Cuántas unidades del bien B (kilos, piezas) valen lo mismo que una unidad de A.", en: "How many units of good B (kilos, pieces) are worth the same as one unit of A." } },
              { symbol: "Precio de A", meaning: { es: "Lo que cuesta, en pesos, una unidad del bien que quieres \"cambiar\" (el más caro, normalmente).", en: "What one unit of the good you want to \"trade\" costs, in pesos (usually the more expensive one)." } },
              { symbol: "Precio de B", meaning: { es: "Lo que cuesta, en pesos, una unidad del bien con el que lo comparas.", en: "What one unit of the good you compare it with costs, in pesos." } },
            ],
            steps: [
              { es: "Verifica que los dos precios estén en la misma unidad (pesos).", en: "Check that both prices are in the same unit (pesos)." },
              { es: "Divide el precio de A entre el precio de B.", en: "Divide the price of A by the price of B." },
              { es: "Escribe el resultado con la unidad de B (kilos, piezas).", en: "Write the result with B's unit (kilos, pieces)." },
            ],
            example: {
              es: "Un par de huaraches cuesta $360 y un kilo de jitomate $24. Paso 2: $360 ÷ $24 = 15. Un par de huaraches equivale a **15 kilos de jitomate**.",
              en: "A pair of huaraches (sandals) costs $360 and a kilo of tomatoes $24. Step 2: $360 ÷ $24 = 15. One pair of huaraches equals **15 kilos of tomatoes**.",
            },
            mistake: {
              es: "Multiplicar los precios en lugar de dividirlos, o dividir al revés ($24 ÷ $360 = 0.07 es la fracción de par que vale un kilo, no lo que te preguntan).",
              en: "Multiplying the prices instead of dividing them, or dividing the wrong way ($24 ÷ $360 = 0.07 is the fraction of a pair a kilo is worth, not what you were asked).",
            },
          },
        ],
        bullets: [
          { es: "Medio de cambio: sirve para comprar y vender.", en: "Medium of exchange: used to buy and sell." },
          { es: "Unidad de cuenta: pone precio a todo con la misma medida.", en: "Unit of account: prices everything with the same measure." },
          { es: "Depósito de valor: lo puedes guardar y usar después.", en: "Store of value: you can save it and use it later." },
        ],
      },
      {
        heading: { es: "¿Por qué vale un billete?", en: "Why is a bill worth anything?" },
        body: [
          {
            es: "Guardar oro en casa era riesgoso, así que la gente lo dejaba con quien tuviera una bóveda segura y recibía un **recibo** a cambio. Esos recibos empezaron a circular como si fueran dinero. Así nacieron, en parte, los **bancos** y los billetes.",
            en: "Keeping gold at home was risky, so people left it with someone who had a safe vault and received a **receipt** in exchange. Those receipts started to circulate as if they were money. That is, in part, how **banks** and bank notes were born.",
          },
          {
            es: "Un **banco** guarda los depósitos de las personas y presta parte de ese dinero a otros, cobrando **intereses** (el \"precio\" de prestar dinero). Por eso el banco puede pagarte algo por tus ahorros y cobrar más a quien le presta.",
            en: "A **bank** keeps people's deposits and lends part of that money to others, charging **interest** (the \"price\" of lending money). That is why the bank can pay you something for your savings and charge more to those it lends to.",
          },
          {
            es: "Hoy usamos **dinero fiduciario**: \"fiduciario\" viene de *fe* o confianza. Un billete de $500 vale $500 no por el papel, sino porque **confiamos** en él y la ley obliga a aceptarlo. Durante mucho tiempo las monedas importantes estuvieron ligadas al oro; esa relación terminó en 1971, cuando Estados Unidos dejó de cambiar dólares por oro. En México, el **Banco de México** es quien emite los billetes y monedas.",
            en: "Today we use **fiat money**: its value rests on trust. A $500 bill is worth $500 not because of the paper but because we **trust** it and the law requires it to be accepted. For a long time major currencies were tied to gold; that link ended in 1971, when the United States stopped exchanging dollars for gold. In Mexico, **Banco de México** issues bills and coins.",
          },
        ],
        formulas: [
          {
            name: { es: "Lo que gana un banco por la diferencia de intereses", en: "What a bank earns from the interest difference" },
            expression: "Diferencia de intereses = Intereses cobrados − Intereses pagados",
            variables: [
              { symbol: "Diferencia de intereses", meaning: { es: "Los pesos que le quedan al banco para cubrir sus gastos y obtener su ganancia.", en: "The pesos left to the bank to cover its expenses and earn its profit." } },
              { symbol: "Intereses cobrados", meaning: { es: "Los pesos que el banco cobra a quienes les prestó, en el periodo (por ejemplo, un año).", en: "The pesos the bank charges those it lent to, over the period (for example, one year)." } },
              { symbol: "Intereses pagados", meaning: { es: "Los pesos que el banco paga a los ahorradores por sus depósitos, en el mismo periodo.", en: "The pesos the bank pays savers for their deposits, over the same period." } },
            ],
            steps: [
              { es: "Identifica cuántos intereses cobra el banco por sus préstamos.", en: "Identify how much interest the bank collects on its loans." },
              { es: "Identifica cuántos intereses paga a los ahorradores.", en: "Identify how much interest it pays savers." },
              { es: "Resta: cobrados − pagados.", en: "Subtract: collected − paid." },
            ],
            example: {
              es: "Un banco cobra $15,000 de intereses por sus préstamos y paga $4,000 a sus ahorradores. Paso 3: $15,000 − $4,000 = **$11,000** de diferencia.",
              en: "A bank collects $15,000 of interest on its loans and pays $4,000 to its savers. Step 3: $15,000 − $4,000 = **$11,000** difference.",
            },
            mistake: {
              es: "Restar el monto prestado o depositado (por ejemplo, $100,000) en lugar de los intereses. Solo se comparan los intereses.",
              en: "Subtracting the amount lent or deposited (for example, $100,000) instead of the interest. Only the interest amounts are compared.",
            },
          },
        ],
      },
      {
        heading: { es: "Dinero digital y cripto", en: "Digital money and crypto" },
        body: [
          {
            es: "Hoy casi todo el dinero es **digital**: es el saldo de tu cuenta bancaria, que mueves con tarjeta, transferencia o una app. Sigue siendo **pesos mexicanos**; solo cambia la forma de moverlo. En México, muchas transferencias pasan por el sistema SPEI que opera el Banco de México.",
            en: "Today almost all money is **digital**: it is the balance in your bank account, which you move with a card, a transfer or an app. It is still **Mexican pesos**; only the way of moving it changes. In Mexico, many transfers go through the SPEI system run by Banco de México.",
          },
          {
            es: "Las **criptomonedas**, como **bitcoin** (creado en 2009), son distintas: no las emite ningún banco central y se registran en una base de datos compartida llamada **blockchain** (cadena de bloques). Su precio puede **subir o bajar muchísimo** en poco tiempo.",
            en: "**Cryptocurrencies**, such as **bitcoin** (created in 2009), are different: no central bank issues them and they are recorded in a shared database called a **blockchain**. Their price can **rise or fall sharply** in a short time.",
          },
          {
            es: "En México las criptomonedas **no son moneda de curso legal**: nadie está obligado a aceptarlas como pago, a diferencia del peso. Para la contabilidad, el dinero (normalmente el peso) es la **unidad de medida**: todo se registra en pesos, aunque el negocio tenga otros bienes.",
            en: "In Mexico cryptocurrencies are **not legal tender**: no one is required to accept them as payment, unlike the peso. For accounting, money (normally the peso) is the **unit of measure**: everything is recorded in pesos, even if the business holds other items.",
          },
        ],
        bullets: [
          { es: "Dinero digital: pesos en una cuenta, emitidos dentro del sistema oficial.", en: "Digital money: pesos in an account, within the official system." },
          { es: "Criptomoneda: activo digital sin banco central detrás.", en: "Cryptocurrency: digital asset with no central bank behind it." },
          { es: "Riesgo principal de las criptomonedas: su precio es muy volátil.", en: "Main risk of cryptocurrencies: their price is very volatile." },
        ],
      },
    ],
    examples: [
      {
        title: { es: "El dinero como unidad de cuenta", en: "Money as a unit of account" },
        problem: {
          es: "En un tianguis, una gallina cuesta $150 y un kilo de frijol $30. Si quisieras hacer trueque, ¿cuántos kilos de frijol equivalen a una gallina?",
          en: "At a street market, a hen costs $150 and a kilo of beans $30. If you wanted to barter, how many kilos of beans equal one hen?",
        },
        steps: [
          { es: "Ambos precios están en la misma unidad: pesos.", en: "Both prices are in the same unit: pesos." },
          { es: "Dividimos: $150 ÷ $30 = 5.", en: "Divide: $150 ÷ $30 = 5." },
        ],
        result: {
          es: "Una gallina equivale a 5 kilos de frijol. El dinero permite comparar cosas distintas con una sola medida.",
          en: "One hen equals 5 kilos of beans. Money lets you compare different things with a single measure.",
        },
      },
      {
        title: { es: "Los intereses de un banco", en: "A bank's interest" },
        problem: {
          es: "Un banco recibe $100,000 en depósitos. Paga a los ahorradores $3,000 de intereses en el año y presta $80,000 por los que cobra $12,000 de intereses. ¿Cuánto le queda al banco por la diferencia de intereses?",
          en: "A bank receives $100,000 in deposits. It pays savers $3,000 of interest in the year and lends $80,000, on which it collects $12,000 of interest. How much does the bank keep from the interest difference?",
        },
        steps: [
          { es: "Intereses que cobra: $12,000.", en: "Interest it collects: $12,000." },
          { es: "Intereses que paga: $3,000.", en: "Interest it pays: $3,000." },
          { es: "Diferencia: $12,000 − $3,000 = $9,000.", en: "Difference: $12,000 − $3,000 = $9,000." },
        ],
        result: {
          es: "Al banco le quedan $9,000 de diferencia, con lo que paga sus gastos y obtiene su ganancia.",
          en: "The bank keeps a $9,000 difference, which covers its expenses and gives its profit.",
        },
      },
    ],
    keyPoints: [
      { es: "El trueque exige doble coincidencia de necesidades; el dinero lo resuelve.", en: "Barter requires a double coincidence of wants; money solves it." },
      { es: "Funciones del dinero: medio de cambio, unidad de cuenta y depósito de valor.", en: "Functions of money: medium of exchange, unit of account and store of value." },
      { es: "El dinero fiduciario vale por la confianza y la ley, no por su material.", en: "Fiat money is worth something because of trust and law, not its material." },
      { es: "Los bancos guardan depósitos y prestan cobrando intereses.", en: "Banks keep deposits and lend while charging interest." },
      { es: "Las criptomonedas no son moneda de curso legal en México y su precio es muy volátil.", en: "Cryptocurrencies are not legal tender in Mexico and their price is very volatile." },
    ],
    normativeNote: NOTE_MONEY,
    exerciseIds: ['N1A-017', 'N1A-021', 'N1A-024', 'N1A-019', 'N1A-022'],
  },

  // ───────────────────────────── L1-04 ─────────────────────────────
  {
    id: 'L1-04',
    level: 1,
    topicIds: ['1.4'],
    title: { es: "Activos, pasivos y capital contable", en: "Assets, liabilities and equity" },
    summary: {
      es: "Todo negocio tiene cosas que le pertenecen (activos), deudas (pasivos) y lo que de verdad es de los dueños (capital contable), y estos tres elementos describen su patrimonio.",
      en: "Every business has things it owns (assets), debts (liabilities) and what truly belongs to the owners (equity), and these three elements describe its net worth.",
    },
    minutes: 11,
    objectives: [
      { es: "Definir activo, pasivo y capital contable con palabras sencillas.", en: "Define assets, liabilities and equity in simple words." },
      { es: "Clasificar bienes, derechos y deudas comunes de un negocio.", en: "Classify a business's common goods, rights and debts." },
      { es: "Distinguir partidas a corto plazo (circulantes) y a largo plazo (no circulantes).", en: "Distinguish short-term (current) and long-term (non-current) items." },
      { es: "Calcular el capital contable (patrimonio) restando pasivos a activos.", en: "Compute equity (net worth) by subtracting liabilities from assets." },
    ],
    theory: [
      {
        heading: { es: "Las 3 palabras del negocio", en: "The 3 words of a business" },
        body: [
          {
            es: "Un **activo** es todo lo que el negocio **controla** y le va a traer un beneficio: dinero en caja o en el banco, mercancía para vender, mobiliario, una camioneta, o el dinero que un cliente le debe (un **derecho de cobro**). Las NIF lo describen como un recurso económico controlado por la entidad, que viene de operaciones pasadas y del que se esperan beneficios futuros.",
            en: "An **asset** is anything the business **controls** that will bring it a benefit: cash on hand or in the bank, goods for sale, furniture, a van, or money a customer owes it (a **receivable**). The NIF describe it as an economic resource controlled by the entity, arising from past transactions, from which future benefits are expected.",
          },
          {
            es: "Un **pasivo** es una **deuda u obligación** que el negocio tiene hoy y que tendrá que pagar, normalmente con dinero: lo que debe al proveedor, un préstamo del banco, sueldos pendientes. El **capital contable** es lo que **queda para los dueños** después de restar los pasivos a los activos: lo que pusieron al iniciar más las ganancias que han dejado en el negocio.",
            en: "A **liability** is a **debt or obligation** the business has today and will have to pay, usually with money: what it owes the supplier, a bank loan, unpaid wages. **Equity** is what is **left for the owners** after subtracting liabilities from assets: what they put in at the start plus the profits they have left in the business.",
          },
          {
            es: "Activos y pasivos se clasifican por **plazo**. Son **circulantes** (corto plazo) si se cobran, venden, usan o pagan en un año o menos, como el efectivo o la deuda con el proveedor. Son **no circulantes** (largo plazo) si duran o se pagan en más de un año, como un edificio o un préstamo a cinco años.",
            en: "Assets and liabilities are classified by **term**. They are **current** (short-term) if they are collected, sold, used or paid within one year, such as cash or the supplier debt. They are **non-current** (long-term) if they last or are paid over more than one year, such as a building or a five-year loan.",
          },
        ],
        bullets: [
          { es: "Activo circulante: caja, bancos, clientes, inventario.", en: "Current assets: cash, bank, receivables, inventory." },
          { es: "Activo no circulante: terreno, edificio, mobiliario, vehículos, equipo de cómputo.", en: "Non-current assets: land, buildings, furniture, vehicles, computer equipment." },
          { es: "Pasivo a corto plazo: proveedores, sueldos e impuestos por pagar.", en: "Current liabilities: suppliers, wages and taxes payable." },
          { es: "Pasivo a largo plazo: préstamos bancarios a varios años.", en: "Non-current liabilities: multi-year bank loans." },
          { es: "Capital: lo que aportaron los dueños + utilidades no repartidas.", en: "Equity: what owners contributed + undistributed profits." },
        ],
      },
      {
        heading: { es: "¿Un préstamo es activo?", en: "Is a loan an asset?" },
        body: [
          {
            es: "**Cafetería**: sus activos son la cafetera, las mesas, el café y la leche en bodega y el dinero de la caja. Sus pasivos, lo que debe al proveedor de café y el préstamo con que compró la cafetera. Su capital, lo que la dueña invirtió y las ganancias que ha dejado ahí.",
            en: "**Coffee shop**: its assets are the espresso machine, the tables, the coffee and milk in storage and the cash in the register. Its liabilities, what it owes the coffee supplier and the loan used to buy the machine. Its equity, what the owner invested and the profits she has left there.",
          },
          {
            es: "**Taller mecánico**: activos como herramienta, elevadores, refacciones y las cuentas que le deben sus clientes; pasivos como la deuda con la refaccionaria. **Tiendita**: activos como el refrigerador, los anaqueles y la mercancía; pasivos como lo que debe al repartidor de refrescos.",
            en: "**Car repair shop**: assets such as tools, lifts, spare parts and the amounts customers owe it; liabilities such as the debt with the parts store. **Corner store**: assets such as the refrigerator, shelves and goods; liabilities such as what it owes the soda distributor.",
          },
          {
            es: "Ojo con un error común: un **préstamo recibido** no es un activo. El **dinero** que llega al banco sí es activo, pero la **obligación de devolverlo** es un pasivo. Las dos cosas aparecen al mismo tiempo.",
            en: "Watch out for a common mistake: a **loan received** is not an asset. The **money** arriving in the bank is an asset, but the **obligation to repay it** is a liability. Both appear at the same time.",
          },
        ],
      },
      {
        heading: { es: "¿Cuánto es de los dueños?", en: "How much is the owners'?" },
        body: [
          {
            es: "El **patrimonio** es el conjunto de bienes, derechos y obligaciones de un negocio. Lo que de verdad \"vale\" para los dueños es el **patrimonio neto**, que en contabilidad se llama **capital contable**: activos menos pasivos.",
            en: "**Net worth** (patrimonio) is the set of a business's goods, rights and obligations. What it is truly \"worth\" to the owners is the **net worth**, which in accounting is called **equity**: assets minus liabilities.",
          },
          {
            es: "Importante: el negocio es una **entidad** separada de su dueño. La casa, el coche o los ahorros personales de la dueña **no** son activos de la tiendita, y sus deudas personales tampoco son pasivos del negocio. Así se sabe cuánto vale realmente el negocio.",
            en: "Important: the business is an **entity** separate from its owner. The owner's house, car or personal savings are **not** assets of the store, and her personal debts are not liabilities of the business. That is how you know what the business is really worth.",
          },
          {
            es: "Mini ejemplo: una cafetería tiene activos por $80,000 y pasivos por $20,000. Su capital contable es $80,000 − $20,000 = $60,000.",
            en: "Mini example: a coffee shop has assets of $80,000 and liabilities of $20,000. Its equity is $80,000 − $20,000 = $60,000.",
          },
        ],
        formulas: [
          {
            name: { es: "Capital contable (patrimonio neto)", en: "Equity (net worth)" },
            expression: "Capital contable = Activo total − Pasivo total",
            variables: [
              { symbol: "Capital contable", meaning: { es: "Lo que de verdad es de los dueños, en pesos: lo que queda si el negocio pagara todas sus deudas.", en: "What truly belongs to the owners, in pesos: what would be left if the business paid all its debts." } },
              { symbol: "Activo total", meaning: { es: "La suma en pesos de todo lo que el negocio controla: dinero, mercancía, equipo, lo que le deben sus clientes.", en: "The sum in pesos of everything the business controls: cash, goods, equipment, what customers owe it." } },
              { symbol: "Pasivo total", meaning: { es: "La suma en pesos de todo lo que el negocio debe: proveedores, préstamos, sueldos por pagar.", en: "The sum in pesos of everything the business owes: suppliers, loans, wages payable." } },
            ],
            steps: [
              { es: "Separa lo personal del dueño: no entra en el cálculo.", en: "Set aside the owner's personal items: they do not enter the calculation." },
              { es: "Suma todos los activos del negocio: ese es el activo total.", en: "Add up all the business's assets: that is total assets." },
              { es: "Suma todas las deudas: ese es el pasivo total.", en: "Add up all the debts: that is total liabilities." },
              { es: "Resta: activo total − pasivo total = capital contable.", en: "Subtract: total assets − total liabilities = equity." },
            ],
            example: {
              es: "Una papelería tiene mostrador $30,000, mercancía $22,000 y dinero en banco $13,000; debe $9,000 al proveedor y $16,000 de un préstamo. Paso 2: $30,000 + $22,000 + $13,000 = $65,000. Paso 3: $9,000 + $16,000 = $25,000. Paso 4: $65,000 − $25,000 = **$40,000** de capital contable.",
              en: "A stationery shop has a counter $30,000, goods $22,000 and money in the bank $13,000; it owes $9,000 to the supplier and $16,000 on a loan. Step 2: $30,000 + $22,000 + $13,000 = $65,000. Step 3: $9,000 + $16,000 = $25,000. Step 4: $65,000 − $25,000 = **$40,000** of equity.",
            },
            interpret: {
              es: "Un capital positivo es lo que pertenece a los dueños. Si sale negativo, el negocio debe más de lo que tiene: es una señal de alerta.",
              en: "Positive equity is what belongs to the owners. If it is negative, the business owes more than it has: that is a warning sign.",
            },
            mistake: {
              es: "Sumar activos y pasivos en lugar de restarlos, olvidar algún activo (como la mercancía en bodega) o incluir bienes personales del dueño.",
              en: "Adding assets and liabilities instead of subtracting them, forgetting an asset (such as goods in storage) or including the owner's personal items.",
            },
          },
        ],
      },
    ],
    examples: [
      {
        title: { es: "Clasificar y calcular el patrimonio de un taller", en: "Classify and compute a repair shop's net worth" },
        problem: {
          es: "Taller Hernández tiene: herramienta $60,000; dinero en caja y banco $25,000; refacciones $15,000; deuda con la refaccionaria $18,000; préstamo bancario $30,000. ¿Cuánto es su capital contable?",
          en: "Taller Hernández has: tools $60,000; cash on hand and in bank $25,000; spare parts $15,000; debt with the parts store $18,000; bank loan $30,000. What is its equity?",
        },
        steps: [
          { es: "Activos: $60,000 + $25,000 + $15,000 = $100,000.", en: "Assets: $60,000 + $25,000 + $15,000 = $100,000." },
          { es: "Pasivos: $18,000 + $30,000 = $48,000.", en: "Liabilities: $18,000 + $30,000 = $48,000." },
          { es: "Capital contable: $100,000 − $48,000 = $52,000.", en: "Equity: $100,000 − $48,000 = $52,000." },
        ],
        result: { es: "El capital contable del taller es $52,000.", en: "The shop's equity is $52,000." },
      },
      {
        title: { es: "Lo personal no entra al negocio", en: "Personal items stay out of the business" },
        problem: {
          es: "Doña Rosa tiene en su tiendita mercancía por $40,000, un refrigerador de $15,000 y $5,000 en caja; debe $10,000 al proveedor. Además tiene su casa personal de $900,000. ¿Cuál es el capital contable de la tiendita?",
          en: "Doña Rosa's corner store has goods worth $40,000, a $15,000 refrigerator and $5,000 in cash; it owes $10,000 to the supplier. She also owns her personal house worth $900,000. What is the store's equity?",
        },
        steps: [
          { es: "La casa es de Doña Rosa, no del negocio: no se incluye.", en: "The house belongs to Doña Rosa, not the business: it is excluded." },
          { es: "Activos del negocio: $40,000 + $15,000 + $5,000 = $60,000.", en: "Business assets: $40,000 + $15,000 + $5,000 = $60,000." },
          { es: "Capital contable: $60,000 − $10,000 = $50,000.", en: "Equity: $60,000 − $10,000 = $50,000." },
        ],
        result: { es: "El capital contable de la tiendita es $50,000 (no $950,000).", en: "The store's equity is $50,000 (not $950,000)." },
      },
    ],
    keyPoints: [
      { es: "Activo: lo que el negocio controla y le dará beneficios (bienes y derechos de cobro).", en: "Asset: what the business controls that will bring benefits (goods and receivables)." },
      { es: "Pasivo: lo que el negocio debe y tendrá que pagar.", en: "Liability: what the business owes and will have to pay." },
      { es: "Capital contable: lo que queda para los dueños = Activo − Pasivo.", en: "Equity: what is left for the owners = Assets − Liabilities." },
      { es: "Circulante = un año o menos; no circulante = más de un año.", en: "Current = one year or less; non-current = more than one year." },
      { es: "Los bienes y deudas personales del dueño no forman parte del negocio.", en: "The owner's personal goods and debts are not part of the business." },
    ],
    normativeNote: NOTE_NIF,
    exerciseIds: ['N1A-025', 'N1A-029', 'N1A-027', 'N1A-032', 'N1A-031'],
  },

  // ───────────────────────────── L1-05 ─────────────────────────────
  {
    id: 'L1-05',
    level: 1,
    topicIds: ['1.5'],
    title: { es: "Ingresos, costos, gastos y utilidad", en: "Revenue, costs, expenses and profit" },
    summary: {
      es: "La utilidad es lo que queda de los ingresos después de restar los costos y los gastos; si no alcanza, hay pérdida.",
      en: "Profit is what remains of revenue after subtracting costs and expenses; if it falls short, there is a loss.",
    },
    minutes: 11,
    objectives: [
      { es: "Distinguir ingreso, costo y gasto con ejemplos de la vida diaria.", en: "Distinguish revenue, cost and expense with everyday examples." },
      { es: "Reconocer entradas de dinero que no son ingresos (préstamos, aportaciones).", en: "Recognize cash inflows that are not revenue (loans, contributions)." },
      { es: "Calcular la utilidad bruta y la utilidad o pérdida de un periodo.", en: "Compute gross profit and the profit or loss for a period." },
    ],
    theory: [
      {
        heading: { es: "¿Ingreso, costo o gasto?", en: "Income, cost or expense?" },
        body: [
          {
            es: "Un **ingreso** es lo que el negocio **gana por vender** sus productos o servicios: los cafés que vende la cafetería, las reparaciones que cobra el taller. El ingreso aumenta el capital contable de los dueños.",
            en: "**Revenue** is what the business **earns by selling** its products or services: the coffees the coffee shop sells, the repairs the shop charges for. Revenue increases the owners' equity.",
          },
          {
            es: "Un **costo** (o **costo de ventas**) es lo que te costó **lo que vendiste**. Si la tiendita vende un refresco en $20 que compró en $14, el costo de esa venta es $14. Un **gasto** es lo que pagas o consumes para **operar el negocio**, aunque no esté ligado a un producto concreto: renta, luz, sueldos, publicidad.",
            en: "A **cost** (or **cost of sales**) is what **the things you sold** cost you. If the corner store sells a soda for $20 that it bought for $14, the cost of that sale is $14. An **expense** is what you pay or use up to **run the business**, even if it is not tied to a specific product: rent, electricity, wages, advertising.",
          },
          {
            es: "Cuidado: **no toda entrada de dinero es ingreso** y **no toda salida es gasto**. Un préstamo del banco o el dinero que aporta la dueña entran a la caja, pero no son ingresos (no los ganaste vendiendo). Comprar una cafetera que durará años es un activo, no un gasto del mes.",
            en: "Careful: **not every cash inflow is revenue** and **not every outflow is an expense**. A bank loan or money the owner contributes enters the cash box, but it is not revenue (you did not earn it by selling). Buying an espresso machine that will last years is an asset, not an expense of the month.",
          },
        ],
        bullets: [
          { es: "Ingreso: venta de bienes o servicios.", en: "Revenue: sale of goods or services." },
          { es: "Costo: lo que costó la mercancía o insumos que vendiste.", en: "Cost: what the goods or inputs you sold cost." },
          { es: "Gasto: lo necesario para operar (renta, luz, sueldos).", en: "Expense: what is needed to operate (rent, electricity, wages)." },
          { es: "No son ingresos: préstamos recibidos ni aportaciones del dueño.", en: "Not revenue: loans received or owner contributions." },
        ],
      },
      {
        heading: { es: "¿Ganaste o perdiste?", en: "Did you profit or lose?" },
        body: [
          {
            es: "La **utilidad** es la ganancia: lo que queda de los ingresos después de restar costos y gastos de un periodo (un mes, un año). Si los costos y gastos son **mayores** que los ingresos, el resultado es negativo y se llama **pérdida**.",
            en: "**Profit** is the gain: what remains of revenue after subtracting the costs and expenses of a period (a month, a year). If costs and expenses are **greater** than revenue, the result is negative and is called a **loss**.",
          },
          {
            es: "Se calcula en dos pasos. Primero la **utilidad bruta**: ingresos menos costo de ventas; te dice cuánto ganas solo por comprar y vender. Después restas los gastos de operación y obtienes la utilidad (o pérdida) del periodo.",
            en: "It is computed in two steps. First **gross profit**: revenue minus cost of sales; it tells you how much you earn just from buying and selling. Then you subtract operating expenses and get the profit (or loss) for the period.",
          },
          {
            es: "Mini ejemplo: una tiendita vende $50,000 en el mes; esa mercancía le costó $30,000 y pagó $12,000 de renta y luz. Utilidad bruta: $20,000. Utilidad del mes: $20,000 − $12,000 = $8,000.",
            en: "Mini example: a corner store sells $50,000 in the month; those goods cost $30,000 and it paid $12,000 for rent and electricity. Gross profit: $20,000. Profit for the month: $20,000 − $12,000 = $8,000.",
          },
        ],
        formulas: [
          {
            name: { es: "Utilidad bruta", en: "Gross profit" },
            expression: "Utilidad bruta = Ingresos − Costo de ventas",
            variables: [
              { symbol: "Utilidad bruta", meaning: { es: "Lo que ganas, en pesos, solo por comprar (o producir) y vender, antes de pagar renta, luz o sueldos.", en: "What you earn, in pesos, just from buying (or making) and selling, before paying rent, electricity or wages." } },
              { symbol: "Ingresos", meaning: { es: "Lo que vendiste en el periodo (mes, año), en pesos. No incluye préstamos ni aportaciones del dueño.", en: "What you sold in the period (month, year), in pesos. It does not include loans or owner contributions." } },
              { symbol: "Costo de ventas", meaning: { es: "Lo que te costó, en pesos, la mercancía o los insumos de lo que vendiste.", en: "What the goods or inputs of what you sold cost you, in pesos." } },
            ],
            steps: [
              { es: "Toma solo los ingresos por ventas o servicios del periodo.", en: "Take only the period's revenue from sales or services." },
              { es: "Resta el costo de lo que vendiste.", en: "Subtract the cost of what you sold." },
            ],
            example: {
              es: "Una papelería vende $40,000 en el mes; esa mercancía le costó $24,000. Paso 2: $40,000 − $24,000 = **$16,000** de utilidad bruta.",
              en: "A stationery shop sells $40,000 in the month; those goods cost it $24,000. Step 2: $40,000 − $24,000 = **$16,000** of gross profit.",
            },
            mistake: {
              es: "Pensar que la utilidad bruta ya es la ganancia final: todavía faltan los gastos de operación.",
              en: "Thinking gross profit is already the final gain: operating expenses still have to be subtracted.",
            },
          },
          {
            name: { es: "Utilidad (o pérdida) del periodo", en: "Profit (or loss) for the period" },
            expression: "Utilidad (o pérdida) = Utilidad bruta − Gastos = Ingresos − Costo de ventas − Gastos",
            variables: [
              { symbol: "Utilidad (o pérdida)", meaning: { es: "El resultado final del periodo, en pesos. Si es positivo es utilidad (ganancia); si es negativo, pérdida.", en: "The final result for the period, in pesos. If positive it is profit; if negative, a loss." } },
              { symbol: "Utilidad bruta", meaning: { es: "Ingresos − Costo de ventas (fórmula anterior), en pesos.", en: "Revenue − Cost of sales (previous formula), in pesos." } },
              { symbol: "Ingresos", meaning: { es: "Lo que vendiste en el periodo, en pesos.", en: "What you sold in the period, in pesos." } },
              { symbol: "Costo de ventas", meaning: { es: "Lo que costó lo que vendiste, en pesos.", en: "What the things you sold cost, in pesos." } },
              { symbol: "Gastos", meaning: { es: "La suma, en pesos, de lo que pagaste para operar: renta, luz, sueldos, publicidad.", en: "The sum, in pesos, of what you paid to operate: rent, electricity, wages, advertising." } },
            ],
            steps: [
              { es: "Deja fuera las entradas que no son ingresos (préstamos, aportaciones del dueño).", en: "Leave out inflows that are not revenue (loans, owner contributions)." },
              { es: "Calcula la utilidad bruta: ingresos − costo de ventas.", en: "Compute gross profit: revenue − cost of sales." },
              { es: "Suma todos los gastos de operación.", en: "Add up all operating expenses." },
              { es: "Resta: utilidad bruta − gastos. Si sale negativo, escríbelo con signo menos: es pérdida.", en: "Subtract: gross profit − expenses. If negative, write it with a minus sign: it is a loss." },
            ],
            example: {
              es: "La papelería anterior (utilidad bruta $16,000) pagó renta $7,000, luz $1,500 y sueldo $5,000. Paso 3: $7,000 + $1,500 + $5,000 = $13,500. Paso 4: $16,000 − $13,500 = **$2,500** de utilidad. Si sus gastos hubieran sido $18,000: $16,000 − $18,000 = **−$2,000**, una pérdida.",
              en: "The same stationery shop (gross profit $16,000) paid rent $7,000, electricity $1,500 and a wage of $5,000. Step 3: $7,000 + $1,500 + $5,000 = $13,500. Step 4: $16,000 − $13,500 = **$2,500** of profit. If its expenses had been $18,000: $16,000 − $18,000 = **−$2,000**, a loss.",
            },
            interpret: {
              es: "Positivo: el negocio ganó. Cero: ni ganó ni perdió. Negativo: perdió, aunque tenga dinero en caja (ese dinero pudo venir de un préstamo o de una aportación).",
              en: "Positive: the business made money. Zero: it broke even. Negative: it lost money, even if it has cash (that cash may have come from a loan or a contribution).",
            },
            mistake: {
              es: "Contar un préstamo o una aportación como ingreso, o restar el costo de ventas dos veces (una como costo y otra dentro de los gastos).",
              en: "Counting a loan or contribution as revenue, or subtracting cost of sales twice (once as cost and again inside expenses).",
            },
          },
        ],
      },
      {
        heading: { es: "Casos de todos los días", en: "Everyday cases" },
        body: [
          {
            es: "**Cafetería**: vender cafés y pasteles es ingreso; el café, la leche y el azúcar usados en lo que se vendió son costo; la renta del local y el sueldo del barista son gastos. Pedir un préstamo para remodelar no es ingreso, y pagar ese préstamo no es gasto (los intereses sí lo son).",
            en: "**Coffee shop**: selling coffees and pastries is revenue; the coffee, milk and sugar used in what was sold are cost; the shop rent and the barista's wage are expenses. Taking a loan to remodel is not revenue, and repaying it is not an expense (the interest is).",
          },
          {
            es: "**Taller**: cobrar una afinación es ingreso; las refacciones que se instalaron en ese coche son costo; la luz y el sueldo de los mecánicos son gastos. Si un cliente paga el mes siguiente, el ingreso es del mes en que se hizo el trabajo; el cobro solo cambia lo que te debía por dinero.",
            en: "**Repair shop**: charging for a tune-up is revenue; the parts installed in that car are cost; electricity and mechanics' wages are expenses. If a customer pays the following month, the revenue belongs to the month the work was done; collecting only turns what they owed into cash.",
          },
        ],
      },
    ],
    examples: [
      {
        title: { es: "Utilidad del mes de un taller", en: "A repair shop's profit for the month" },
        problem: {
          es: "En marzo, un taller cobra servicios por $80,000. Las refacciones usadas en esos servicios costaron $30,000. Pagó renta $12,000, luz $3,000 y sueldos $25,000. ¿Cuál fue su utilidad?",
          en: "In March, a repair shop bills $80,000 in services. The parts used in those services cost $30,000. It paid rent $12,000, electricity $3,000 and wages $25,000. What was its profit?",
        },
        steps: [
          { es: "Utilidad bruta: $80,000 − $30,000 = $50,000.", en: "Gross profit: $80,000 − $30,000 = $50,000." },
          { es: "Gastos: $12,000 + $3,000 + $25,000 = $40,000.", en: "Expenses: $12,000 + $3,000 + $25,000 = $40,000." },
          { es: "Utilidad: $50,000 − $40,000 = $10,000.", en: "Profit: $50,000 − $40,000 = $10,000." },
        ],
        result: { es: "El taller tuvo una utilidad de $10,000 en marzo.", en: "The shop made a $10,000 profit in March." },
      },
      {
        title: { es: "Cuando hay pérdida (y un préstamo engañoso)", en: "When there is a loss (and a misleading loan)" },
        problem: {
          es: "Una cafetería nueva vende $30,000 en su primer mes; lo vendido le costó $12,000 y sus gastos fueron $21,000. Además recibió un préstamo de $40,000. ¿Ganó o perdió?",
          en: "A new coffee shop sells $30,000 in its first month; what it sold cost $12,000 and its expenses were $21,000. It also received a $40,000 loan. Did it make or lose money?",
        },
        steps: [
          { es: "El préstamo no es ingreso: se deja fuera del cálculo.", en: "The loan is not revenue: leave it out of the calculation." },
          { es: "Utilidad bruta: $30,000 − $12,000 = $18,000.", en: "Gross profit: $30,000 − $12,000 = $18,000." },
          { es: "Resultado: $18,000 − $21,000 = −$3,000.", en: "Result: $18,000 − $21,000 = −$3,000." },
        ],
        result: {
          es: "Tuvo una pérdida de $3,000, aunque su caja tenga más dinero por el préstamo.",
          en: "It had a $3,000 loss, even though its cash box has more money because of the loan.",
        },
      },
    ],
    keyPoints: [
      { es: "Ingreso: lo que ganas al vender bienes o servicios.", en: "Revenue: what you earn by selling goods or services." },
      { es: "Costo: lo que costó lo que vendiste; gasto: lo que cuesta operar.", en: "Cost: what the things you sold cost; expense: what it costs to operate." },
      { es: "Préstamos y aportaciones del dueño no son ingresos.", en: "Loans and owner contributions are not revenue." },
      { es: "Utilidad = Ingresos − Costos − Gastos; si sale negativa, es pérdida.", en: "Profit = Revenue − Costs − Expenses; if negative, it is a loss." },
      { es: "Utilidad bruta = Ingresos − Costo de ventas.", en: "Gross profit = Revenue − Cost of sales." },
    ],
    normativeNote: NOTE_NIF,
    exerciseIds: ['N1A-033', 'N1A-035', 'N1A-034', 'N1A-038', 'N1A-040'],
  },
]

export const exercises: Exercise[] = [
  // ═════════════════════════ L1-01 ═════════════════════════
  {
    id: 'N1A-001',
    level: 1,
    module: 'L1-01',
    kind: 'mcq',
    flavor: 'concept',
    prompt: {
      es: "¿Cuál frase describe mejor qué es la contabilidad?",
      en: "Which sentence best describes what accounting is?",
    },
    options: [
      { id: 'N1A-001-a', text: { es: "Un sistema para anotar, ordenar y resumir en dinero las operaciones de un negocio", en: "A system to record, organize and summarize a business's transactions in money" } },
      { id: 'N1A-001-b', text: { es: "Una técnica para vender más productos", en: "A technique to sell more products" } },
      { id: 'N1A-001-c', text: { es: "El trámite para pagar impuestos una vez al año", en: "The paperwork to pay taxes once a year" } },
      { id: 'N1A-001-d', text: { es: "Una lista de los clientes del negocio", en: "A list of the business's customers" } },
    ],
    correctOptionId: 'N1A-001-a',
    explanation: {
      es: "La contabilidad registra, clasifica y resume en dinero lo que pasa en el negocio para producir información útil. Pagar impuestos es solo una de sus aplicaciones (contabilidad fiscal), y vender más o listar clientes son tareas de ventas, no de contabilidad.",
      en: "Accounting records, classifies and summarizes in money what happens in the business to produce useful information. Paying taxes is only one of its applications (tax accounting), and selling more or listing customers are sales tasks, not accounting.",
    },
    difficulty: 1,
    points: 10,
    competency: 'accounting-basics',
  },
  {
    id: 'N1A-002',
    level: 1,
    module: 'L1-01',
    kind: 'truefalse',
    flavor: 'concept',
    prompt: {
      es: "Una tiendita de barrio no necesita contabilidad porque eso solo sirve a las empresas grandes.",
      en: "A neighborhood corner store does not need accounting because it is only useful for large companies.",
    },
    answer: false,
    explanation: {
      es: "Falso. Cualquier negocio, por pequeño que sea, necesita saber cuánto vende, cuánto gasta y si gana o pierde. Sin registros no puede controlar su caja ni decidir precios. El error común es pensar que la contabilidad es solo para cumplir con el gobierno.",
      en: "False. Any business, however small, needs to know how much it sells, how much it spends and whether it makes or loses money. Without records it cannot control its cash or set prices. The common mistake is thinking accounting is only for complying with the government.",
    },
    difficulty: 1,
    points: 10,
    competency: 'accounting-basics',
  },
  {
    id: 'N1A-003',
    level: 1,
    module: 'L1-01',
    kind: 'multi',
    flavor: 'concept',
    context: {
      es: "Cafetería La Esquina comparte sus números con varias personas.",
      en: "Cafetería La Esquina shares its numbers with several people.",
    },
    prompt: {
      es: "¿Quiénes son usuarios **externos** de la información de la cafetería? Selecciona todas las que apliquen.",
      en: "Who are **external** users of the coffee shop's information? Select all that apply.",
    },
    options: [
      { id: 'N1A-003-a', text: { es: "El banco que estudia prestarle para una segunda sucursal", en: "The bank studying a loan for a second branch" } },
      { id: 'N1A-003-b', text: { es: "La dueña, que decide los precios del menú", en: "The owner, who sets the menu prices" } },
      { id: 'N1A-003-c', text: { es: "El proveedor de café que decide si le vende a crédito", en: "The coffee supplier deciding whether to sell on credit" } },
      { id: 'N1A-003-d', text: { es: "El SAT, que revisa sus impuestos", en: "The SAT, which reviews its taxes" } },
      { id: 'N1A-003-e', text: { es: "El gerente de turno, que organiza los horarios", en: "The shift manager, who organizes schedules" } },
    ],
    correctOptionIds: ['N1A-003-a', 'N1A-003-c', 'N1A-003-d'],
    explanation: {
      es: "Banco, proveedor y SAT están fuera del negocio y usan la información para decidir si prestan, si venden a crédito o si se pagaron bien los impuestos: son externos. La dueña y el gerente trabajan dentro y dirigen la cafetería: son internos. Error común: pensar que la dueña es externa porque \"no es empleada\".",
      en: "The bank, supplier and SAT are outside the business and use the information to decide whether to lend, sell on credit or check taxes were paid correctly: they are external. The owner and the manager work inside and run the coffee shop: they are internal. Common mistake: thinking the owner is external because she is \"not an employee\".",
    },
    difficulty: 1,
    points: 10,
    competency: 'accounting-basics',
  },
  {
    id: 'N1A-004',
    level: 1,
    module: 'L1-01',
    kind: 'classify',
    flavor: 'concept',
    prompt: {
      es: "Clasifica cada tarea según el tipo de contabilidad al que pertenece.",
      en: "Classify each task by the type of accounting it belongs to.",
    },
    categories: [
      { id: 'N1A-004-c1', label: { es: "Contabilidad financiera", en: "Financial accounting" } },
      { id: 'N1A-004-c2', label: { es: "Contabilidad administrativa (de costos)", en: "Managerial (cost) accounting" } },
      { id: 'N1A-004-c3', label: { es: "Contabilidad fiscal", en: "Tax accounting" } },
    ],
    items: [
      { id: 'N1A-004-i1', label: { es: "Preparar los estados financieros del año conforme a las NIF para presentarlos al banco", en: "Prepare the year's financial statements under NIF to present to the bank" }, correctCategoryId: 'N1A-004-c1' },
      { id: 'N1A-004-i2', label: { es: "Calcular cuánto cuesta preparar un capuchino para fijar su precio", en: "Compute how much a cappuccino costs to make in order to set its price" }, correctCategoryId: 'N1A-004-c2' },
      { id: 'N1A-004-i3', label: { es: "Calcular el IVA que se debe pagar este mes", en: "Compute the VAT to be paid this month" }, correctCategoryId: 'N1A-004-c3' },
      { id: 'N1A-004-i4', label: { es: "Hacer el presupuesto de gastos del próximo trimestre", en: "Prepare next quarter's expense budget" }, correctCategoryId: 'N1A-004-c2' },
      { id: 'N1A-004-i5', label: { es: "Presentar la declaración anual de impuestos", en: "File the annual tax return" }, correctCategoryId: 'N1A-004-c3' },
      { id: 'N1A-004-i6', label: { es: "Entregar a un inversionista un reporte general de lo que tiene y debe el negocio", en: "Give an investor a general report of what the business owns and owes" }, correctCategoryId: 'N1A-004-c1' },
    ],
    explanation: {
      es: "Financiera: reportes generales bajo NIF para terceros (banco, inversionista). Administrativa: información interna para decidir (costo del capuchino, presupuesto). Fiscal: impuestos (IVA, declaración anual). Error común: poner el presupuesto en financiera; es una herramienta interna, no un reporte general.",
      en: "Financial: general reports under NIF for third parties (bank, investor). Managerial: internal information for decisions (cappuccino cost, budget). Tax: taxes (VAT, annual return). Common mistake: placing the budget in financial accounting; it is an internal tool, not a general report.",
    },
    difficulty: 2,
    points: 15,
    competency: 'accounting-basics',
  },
  {
    id: 'N1A-005',
    level: 1,
    module: 'L1-01',
    kind: 'mcq',
    flavor: 'case',
    context: {
      es: "Don Luis tiene un taller mecánico. Quiere saber cuál de sus servicios (afinación, frenos o suspensión) le deja más ganancia para decidir cuál anunciar.",
      en: "Don Luis owns a car repair shop. He wants to know which of his services (tune-up, brakes or suspension) earns him the most so he can decide which to advertise.",
    },
    prompt: {
      es: "¿Qué tipo de contabilidad le da a Don Luis la información que busca?",
      en: "Which type of accounting gives Don Luis the information he is looking for?",
    },
    options: [
      { id: 'N1A-005-a', text: { es: "Contabilidad fiscal", en: "Tax accounting" } },
      { id: 'N1A-005-b', text: { es: "Contabilidad gubernamental", en: "Governmental accounting" } },
      { id: 'N1A-005-c', text: { es: "Contabilidad administrativa (de costos)", en: "Managerial (cost) accounting" } },
      { id: 'N1A-005-d', text: { es: "Ninguna: la contabilidad no sirve para eso", en: "None: accounting is not useful for that" } },
    ],
    correctOptionId: 'N1A-005-c',
    explanation: {
      es: "Saber qué servicio deja más ganancia es una decisión interna que requiere información a la medida: es contabilidad administrativa o de costos. La fiscal calcula impuestos y la gubernamental es la de las dependencias públicas.",
      en: "Knowing which service earns the most is an internal decision that needs tailored information: that is managerial or cost accounting. Tax accounting computes taxes and governmental accounting is for public agencies.",
    },
    difficulty: 1,
    points: 10,
    competency: 'accounting-basics',
  },
  {
    id: 'N1A-006',
    level: 1,
    module: 'L1-01',
    kind: 'mcq',
    flavor: 'concept',
    prompt: {
      es: "¿Cuál de estas opciones **no** es un objetivo de la contabilidad?",
      en: "Which of these is **not** an objective of accounting?",
    },
    options: [
      { id: 'N1A-006-a', text: { es: "Registrar las operaciones del negocio", en: "Record the business's transactions" } },
      { id: 'N1A-006-b', text: { es: "Garantizar que el negocio siempre tenga ganancias", en: "Guarantee that the business always makes a profit" } },
      { id: 'N1A-006-c', text: { es: "Dar información útil para tomar decisiones", en: "Provide useful information for decision-making" } },
      { id: 'N1A-006-d', text: { es: "Ayudar a controlar el dinero y detectar errores", en: "Help control money and detect errors" } },
    ],
    correctOptionId: 'N1A-006-b',
    explanation: {
      es: "La contabilidad informa cómo va el negocio, pero no puede garantizar ganancias: eso depende de las decisiones que se tomen. Registrar, informar y controlar sí son sus objetivos. Error común: confundir \"medir\" con \"asegurar\" resultados.",
      en: "Accounting reports how the business is doing, but it cannot guarantee profits: that depends on the decisions made. Recording, reporting and controlling are its objectives. Common mistake: confusing \"measuring\" with \"ensuring\" results.",
    },
    difficulty: 1,
    points: 10,
    competency: 'accounting-basics',
  },
  {
    id: 'N1A-007',
    level: 1,
    module: 'L1-01',
    kind: 'numeric',
    flavor: 'case',
    context: {
      es: "Una papelería abre el día con $800 en caja. Vende $3,400, paga $1,250 a un proveedor de cuadernos y $200 de una reparación menor.",
      en: "A stationery shop opens the day with $800 in the cash box. It sells $3,400, pays $1,250 to a notebook supplier and $200 for a minor repair.",
    },
    prompt: {
      es: "¿Cuánto dinero debería haber en la caja al cerrar? Responde en pesos.",
      en: "How much money should be in the cash box at closing? Answer in pesos.",
    },
    answer: 2750,
    unit: 'MXN',
    decimals: 0,
    tolerance: { abs: 0.5 },
    explanation: {
      es: "Inicial + entradas − salidas: 800 + 3,400 − 1,250 − 200 = $2,750. Llevar esta cuenta permite detectar faltantes. Error común: olvidar el saldo inicial y responder 1,950.",
      en: "Opening + inflows − outflows: 800 + 3,400 − 1,250 − 200 = $2,750. Keeping this count lets you detect shortages. Common mistake: forgetting the opening balance and answering 1,950.",
    },
    difficulty: 1,
    points: 10,
    competency: 'accounting-basics',
  },
  {
    id: 'N1A-008',
    level: 1,
    module: 'L1-01',
    kind: 'truefalse',
    flavor: 'concept',
    prompt: {
      es: "Un municipio que registra lo que recauda por predial y lo que gasta en alumbrado público está aplicando contabilidad gubernamental.",
      en: "A municipality that records what it collects in property tax and what it spends on street lighting is applying governmental accounting.",
    },
    answer: true,
    explanation: {
      es: "Verdadero. La contabilidad gubernamental es la que llevan los gobiernos y dependencias públicas para registrar lo que recaudan y gastan. Error común: pensar que solo las empresas llevan contabilidad.",
      en: "True. Governmental accounting is kept by governments and public agencies to record what they collect and spend. Common mistake: thinking only companies keep accounts.",
    },
    difficulty: 1,
    points: 10,
    competency: 'accounting-basics',
  },

  // ═════════════════════════ L1-02 ═════════════════════════
  {
    id: 'N1A-009',
    level: 1,
    module: 'L1-02',
    kind: 'mcq',
    flavor: 'concept',
    prompt: {
      es: "¿Quién fue Luca Pacioli?",
      en: "Who was Luca Pacioli?",
    },
    options: [
      { id: 'N1A-009-a', text: { es: "Un banquero que creó la primera moneda de metal", en: "A banker who created the first metal coin" } },
      { id: 'N1A-009-b', text: { es: "Un fraile y matemático italiano que en 1494 publicó la primera descripción impresa de la partida doble", en: "An Italian friar and mathematician who in 1494 published the first printed description of double entry" } },
      { id: 'N1A-009-c', text: { es: "El fundador del primer despacho de auditoría en Inglaterra", en: "The founder of the first audit firm in England" } },
      { id: 'N1A-009-d', text: { es: "Un escriba egipcio que contaba los graneros", en: "An Egyptian scribe who counted granaries" } },
    ],
    correctOptionId: 'N1A-009-b',
    explanation: {
      es: "Pacioli, fraile franciscano y matemático, incluyó en su *Summa* (Venecia, 1494) el método de los comerciantes venecianos: fue la primera explicación impresa de la partida doble. No creó monedas ni fundó despachos de auditoría.",
      en: "Pacioli, a Franciscan friar and mathematician, included in his *Summa* (Venice, 1494) the Venetian merchants' method: it was the first printed explanation of double entry. He did not create coins or found audit firms.",
    },
    difficulty: 1,
    points: 10,
    competency: 'accounting-history',
  },
  {
    id: 'N1A-010',
    level: 1,
    module: 'L1-02',
    kind: 'truefalse',
    flavor: 'concept',
    prompt: {
      es: "Luca Pacioli inventó la partida doble; antes de su libro nadie la usaba.",
      en: "Luca Pacioli invented double entry; before his book nobody used it.",
    },
    answer: false,
    explanation: {
      es: "Falso. Los comerciantes de ciudades italianas como Venecia, Génova y Florencia ya la usaban antes. El mérito de Pacioli fue describirla en un libro impreso, lo que ayudó a difundirla. Error común: confundir \"padre de la contabilidad\" con \"inventor\".",
      en: "False. Merchants in Italian cities such as Venice, Genoa and Florence already used it. Pacioli's merit was describing it in a printed book, which helped spread it. Common mistake: confusing \"father of accounting\" with \"inventor\".",
    },
    difficulty: 1,
    points: 10,
    competency: 'accounting-history',
  },
  {
    id: 'N1A-011',
    level: 1,
    module: 'L1-02',
    kind: 'mcq',
    flavor: 'concept',
    prompt: {
      es: "¿En qué material hacían sus registros de cosechas y deudas los antiguos habitantes de Mesopotamia?",
      en: "On what material did the ancient people of Mesopotamia keep their records of harvests and debts?",
    },
    options: [
      { id: 'N1A-011-a', text: { es: "Hojas de papel impreso", en: "Printed paper sheets" } },
      { id: 'N1A-011-b', text: { es: "Billetes de banco", en: "Bank notes" } },
      { id: 'N1A-011-c', text: { es: "Tablillas de arcilla", en: "Clay tablets" } },
      { id: 'N1A-011-d', text: { es: "Discos de computadora", en: "Computer disks" } },
    ],
    correctOptionId: 'N1A-011-c',
    explanation: {
      es: "En Mesopotamia se usaban fichas y tablillas de arcilla con marcas para llevar la cuenta de bienes y deudas. El papel impreso y los billetes llegaron miles de años después.",
      en: "In Mesopotamia, tokens and clay tablets with marks were used to keep track of goods and debts. Printed paper and bank notes came thousands of years later.",
    },
    difficulty: 1,
    points: 10,
    competency: 'accounting-history',
  },
  {
    id: 'N1A-012',
    level: 1,
    module: 'L1-02',
    kind: 'classify',
    flavor: 'concept',
    prompt: {
      es: "Ubica cada hecho en la etapa de la historia de la contabilidad a la que pertenece.",
      en: "Place each event in the stage of accounting history it belongs to.",
    },
    categories: [
      { id: 'N1A-012-c1', label: { es: "Antigüedad", en: "Antiquity" } },
      { id: 'N1A-012-c2', label: { es: "Edad Media y Renacimiento", en: "Middle Ages and Renaissance" } },
      { id: 'N1A-012-c3', label: { es: "Época moderna (de la Revolución Industrial a hoy)", en: "Modern era (from the Industrial Revolution to today)" } },
    ],
    items: [
      { id: 'N1A-012-i1', label: { es: "Tablillas de arcilla para registrar cosechas en Mesopotamia", en: "Clay tablets to record harvests in Mesopotamia" }, correctCategoryId: 'N1A-012-c1' },
      { id: 'N1A-012-i2', label: { es: "Escribas egipcios que anotan lo que entra a los graneros", en: "Egyptian scribes noting what enters the granaries" }, correctCategoryId: 'N1A-012-c1' },
      { id: 'N1A-012-i3', label: { es: "Comerciantes de Venecia y Florencia usan la partida doble", en: "Merchants in Venice and Florence use double entry" }, correctCategoryId: 'N1A-012-c2' },
      { id: 'N1A-012-i4', label: { es: "Pacioli publica su Summa en 1494", en: "Pacioli publishes his Summa in 1494" }, correctCategoryId: 'N1A-012-c2' },
      { id: 'N1A-012-i5', label: { es: "Las fábricas impulsan la contabilidad de costos", en: "Factories drive cost accounting" }, correctCategoryId: 'N1A-012-c3' },
      { id: 'N1A-012-i6', label: { es: "Sistemas contables en la nube y facturas electrónicas", en: "Cloud accounting systems and electronic invoices" }, correctCategoryId: 'N1A-012-c3' },
    ],
    explanation: {
      es: "Antigüedad: tablillas mesopotámicas y escribas egipcios. Edad Media y Renacimiento: comerciantes italianos y el libro de Pacioli (1494). Época moderna: costos industriales y tecnología. Error común: ubicar a Pacioli en la época moderna por ser \"el padre de la contabilidad\".",
      en: "Antiquity: Mesopotamian tablets and Egyptian scribes. Middle Ages and Renaissance: Italian merchants and Pacioli's book (1494). Modern era: industrial costing and technology. Common mistake: placing Pacioli in the modern era because he is \"the father of accounting\".",
    },
    difficulty: 2,
    points: 15,
    competency: 'accounting-history',
  },
  {
    id: 'N1A-013',
    level: 1,
    module: 'L1-02',
    kind: 'mcq',
    flavor: 'concept',
    prompt: {
      es: "¿Cuál es la idea básica de la partida doble?",
      en: "What is the basic idea of double entry?",
    },
    options: [
      { id: 'N1A-013-a', text: { es: "Anotar cada operación dos veces en la misma libreta por si se pierde una", en: "Write each transaction twice in the same notebook in case one is lost" } },
      { id: 'N1A-013-b', text: { es: "Que dos contadores revisen cada operación", en: "Have two accountants review each transaction" } },
      { id: 'N1A-013-c', text: { es: "Toda operación tiene dos lados del mismo valor: lo que se recibe y de dónde sale", en: "Every transaction has two sides of equal value: what is received and where it comes from" } },
      { id: 'N1A-013-d', text: { es: "Cobrar el doble a los clientes que compran a crédito", en: "Charge credit customers double" } },
    ],
    correctOptionId: 'N1A-013-c',
    explanation: {
      es: "La partida doble reconoce que cada operación afecta al menos dos cosas por el mismo importe total: si entra mercancía, sale dinero o nace una deuda. No significa copiar dos veces ni revisar dos veces. Error común: tomar \"doble\" de forma literal.",
      en: "Double entry recognizes that each transaction affects at least two things for the same total amount: if goods come in, money goes out or a debt arises. It does not mean copying twice or reviewing twice. Common mistake: taking \"double\" literally.",
    },
    difficulty: 1,
    points: 10,
    competency: 'accounting-history',
  },
  {
    id: 'N1A-014',
    level: 1,
    module: 'L1-02',
    kind: 'fields',
    flavor: 'case',
    context: {
      es: "Una cafetería compra una licuadora de $6,000: paga $2,500 en efectivo y queda a deber el resto a la tienda.",
      en: "A coffee shop buys a $6,000 blender: it pays $2,500 in cash and owes the rest to the store.",
    },
    prompt: {
      es: "Aplica la idea de la partida doble: completa los dos lados de la operación, en pesos.",
      en: "Apply the idea of double entry: complete both sides of the transaction, in pesos.",
    },
    fields: [
      { id: 'f1', label: { es: "Aumento del equipo (lo que se recibe)", en: "Increase in equipment (what is received)" }, answer: 6000, unit: 'MXN', tolerance: { abs: 0.5 } },
      { id: 'f2', label: { es: "Disminución del efectivo", en: "Decrease in cash" }, answer: 2500, unit: 'MXN', tolerance: { abs: 0.5 } },
      { id: 'f3', label: { es: "Aumento de la deuda con la tienda", en: "Increase in the debt to the store" }, answer: 3500, unit: 'MXN', tolerance: { abs: 0.5 } },
    ],
    explanation: {
      es: "Se recibe un equipo de $6,000. A cambio sale efectivo por $2,500 y nace una deuda de 6,000 − 2,500 = $3,500. Los dos lados cuadran: 2,500 + 3,500 = 6,000. Error común: registrar solo el efectivo y olvidar la deuda.",
      en: "Equipment worth $6,000 is received. In exchange, $2,500 of cash goes out and a debt of 6,000 − 2,500 = $3,500 arises. Both sides balance: 2,500 + 3,500 = 6,000. Common mistake: recording only the cash and forgetting the debt.",
    },
    difficulty: 2,
    points: 15,
    competency: 'accounting-history',
  },
  {
    id: 'N1A-015',
    level: 1,
    module: 'L1-02',
    kind: 'mcq',
    flavor: 'concept',
    prompt: {
      es: "En México, ¿qué organismo emite las Normas de Información Financiera (NIF)?",
      en: "In Mexico, which body issues the Financial Reporting Standards (NIF)?",
    },
    options: [
      { id: 'N1A-015-a', text: { es: "El SAT", en: "The SAT" } },
      { id: 'N1A-015-b', text: { es: "El Banco de México", en: "Banco de México" } },
      { id: 'N1A-015-c', text: { es: "La Secretaría de Economía", en: "The Ministry of Economy" } },
      { id: 'N1A-015-d', text: { es: "El CINIF", en: "CINIF" } },
    ],
    correctOptionId: 'N1A-015-d',
    explanation: {
      es: "El CINIF (Consejo Mexicano de Normas de Información Financiera) emite las NIF. El SAT es la autoridad fiscal y el Banco de México es el banco central; ninguno emite normas contables. Error común: pensar que el SAT dicta cómo se hacen los estados financieros.",
      en: "CINIF (Mexican Financial Reporting Standards Board) issues the NIF. The SAT is the tax authority and Banco de México is the central bank; neither issues accounting standards. Common mistake: thinking the SAT dictates how financial statements are prepared.",
    },
    difficulty: 1,
    points: 10,
    competency: 'accounting-history',
  },
  {
    id: 'N1A-016',
    level: 1,
    module: 'L1-02',
    kind: 'multi',
    flavor: 'concept',
    prompt: {
      es: "¿Qué cambios trajo la evolución hacia la contabilidad moderna? Selecciona todas las que apliquen.",
      en: "Which changes came with the evolution toward modern accounting? Select all that apply.",
    },
    options: [
      { id: 'N1A-016-a', text: { es: "Contabilidad de costos para las fábricas", en: "Cost accounting for factories" } },
      { id: 'N1A-016-b', text: { es: "Normas comunes para que la información sea comparable", en: "Common standards so information is comparable" } },
      { id: 'N1A-016-c', text: { es: "Abandonar la partida doble", en: "Abandoning double entry" } },
      { id: 'N1A-016-d', text: { es: "Sistemas en computadora y en la nube", en: "Computer and cloud systems" } },
      { id: 'N1A-016-e', text: { es: "Volver a registrar todo en tablillas de arcilla", en: "Going back to recording everything on clay tablets" } },
    ],
    correctOptionIds: ['N1A-016-a', 'N1A-016-b', 'N1A-016-d'],
    explanation: {
      es: "La época moderna sumó contabilidad de costos, auditoría, normas (NIF, IFRS) y tecnología. La partida doble no se abandonó: sigue siendo la base de todos los sistemas. Error común: pensar que la tecnología reemplazó la partida doble, cuando en realidad la aplica automáticamente.",
      en: "The modern era added cost accounting, auditing, standards (NIF, IFRS) and technology. Double entry was not abandoned: it is still the basis of every system. Common mistake: thinking technology replaced double entry, when in fact it applies it automatically.",
    },
    difficulty: 1,
    points: 10,
    competency: 'accounting-history',
  },

  // ═════════════════════════ L1-03 ═════════════════════════
  {
    id: 'N1A-017',
    level: 1,
    module: 'L1-03',
    kind: 'mcq',
    flavor: 'concept',
    prompt: {
      es: "¿Cuál era el principal problema del trueque?",
      en: "What was the main problem with barter?",
    },
    options: [
      { id: 'N1A-017-a', text: { es: "Que había que pagar impuestos por cada intercambio", en: "Taxes had to be paid on every exchange" } },
      { id: 'N1A-017-b', text: { es: "Que era necesario encontrar a alguien que tuviera lo que querías y quisiera lo que tú tenías", en: "You had to find someone who had what you wanted and wanted what you had" } },
      { id: 'N1A-017-c', text: { es: "Que los bancos cobraban intereses muy altos", en: "Banks charged very high interest" } },
      { id: 'N1A-017-d', text: { es: "Que los billetes se rompían con facilidad", en: "Bills tore easily" } },
    ],
    correctOptionId: 'N1A-017-b',
    explanation: {
      es: "El trueque exige la doble coincidencia de necesidades: que el otro tenga lo que quieres y, al mismo tiempo, quiera lo tuyo. El dinero resolvió eso porque todos lo aceptan. Bancos y billetes aparecieron mucho después.",
      en: "Barter requires a double coincidence of wants: the other person must have what you want and, at the same time, want what you have. Money solved this because everyone accepts it. Banks and bills appeared much later.",
    },
    difficulty: 1,
    points: 10,
    competency: 'money-history',
  },
  {
    id: 'N1A-018',
    level: 1,
    module: 'L1-03',
    kind: 'truefalse',
    flavor: 'concept',
    prompt: {
      es: "Los mexicas usaban granos de cacao como dinero para pagar productos pequeños.",
      en: "The Mexica used cacao beans as money to pay for small items.",
    },
    answer: true,
    explanation: {
      es: "Verdadero. El cacao era un dinero mercancía en Mesoamérica: tenía valor propio y todos lo aceptaban, así que facilitaba los intercambios. Error común: creer que antes de las monedas solo existía el trueque.",
      en: "True. Cacao was commodity money in Mesoamerica: it had its own value and everyone accepted it, so it made trade easier. Common mistake: believing that before coins there was only barter.",
    },
    difficulty: 1,
    points: 10,
    competency: 'money-history',
  },
  {
    id: 'N1A-019',
    level: 1,
    module: 'L1-03',
    kind: 'mcq',
    flavor: 'concept',
    prompt: {
      es: "¿Por qué un billete de $500 vale $500 si el papel cuesta mucho menos?",
      en: "Why is a $500 bill worth $500 if the paper costs much less?",
    },
    options: [
      { id: 'N1A-019-a', text: { es: "Porque cada billete se puede cambiar por oro en el banco", en: "Because each bill can be exchanged for gold at the bank" } },
      { id: 'N1A-019-b', text: { es: "Porque el papel es muy especial y caro", en: "Because the paper is very special and expensive" } },
      { id: 'N1A-019-c', text: { es: "Porque es dinero fiduciario: su valor viene de la confianza y de que la ley obliga a aceptarlo", en: "Because it is fiat money: its value comes from trust and from the law requiring it to be accepted" } },
      { id: 'N1A-019-d', text: { es: "Porque su valor lo fija cada tienda", en: "Because each store sets its value" } },
    ],
    correctOptionId: 'N1A-019-c',
    explanation: {
      es: "El dinero actual es fiduciario: vale por la confianza de la gente y porque es moneda de curso legal. Ya no se puede cambiar por oro; ese vínculo de las grandes monedas terminó en 1971. Error común: pensar que el billete está respaldado por oro guardado.",
      en: "Today's money is fiat: it is worth something because of people's trust and because it is legal tender. It can no longer be exchanged for gold; that link for major currencies ended in 1971. Common mistake: thinking the bill is backed by stored gold.",
    },
    difficulty: 1,
    points: 10,
    competency: 'money-history',
  },
  {
    id: 'N1A-020',
    level: 1,
    module: 'L1-03',
    kind: 'classify',
    flavor: 'concept',
    prompt: {
      es: "Clasifica cada ejemplo según la forma de dinero que representa.",
      en: "Classify each example by the form of money it represents.",
    },
    categories: [
      { id: 'N1A-020-c1', label: { es: "Dinero mercancía", en: "Commodity money" } },
      { id: 'N1A-020-c2', label: { es: "Dinero fiduciario en efectivo (billetes y monedas)", en: "Fiat cash (bills and coins)" } },
      { id: 'N1A-020-c3', label: { es: "Dinero digital (saldos bancarios)", en: "Digital money (bank balances)" } },
    ],
    items: [
      { id: 'N1A-020-i1', label: { es: "Granos de cacao en un mercado mexica", en: "Cacao beans at a Mexica market" }, correctCategoryId: 'N1A-020-c1' },
      { id: 'N1A-020-i2', label: { es: "Monedas de oro que valen por el metal que contienen", en: "Gold coins worth the metal they contain" }, correctCategoryId: 'N1A-020-c1' },
      { id: 'N1A-020-i3', label: { es: "Un billete de $200 emitido por el Banco de México", en: "A $200 bill issued by Banco de México" }, correctCategoryId: 'N1A-020-c2' },
      { id: 'N1A-020-i4', label: { es: "Una moneda de $10 en tu bolsillo", en: "A $10 coin in your pocket" }, correctCategoryId: 'N1A-020-c2' },
      { id: 'N1A-020-i5', label: { es: "Una transferencia SPEI de $1,500 a un proveedor", en: "A $1,500 SPEI transfer to a supplier" }, correctCategoryId: 'N1A-020-c3' },
      { id: 'N1A-020-i6', label: { es: "El saldo de tu cuenta de débito", en: "Your debit account balance" }, correctCategoryId: 'N1A-020-c3' },
    ],
    explanation: {
      es: "Dinero mercancía: vale por sí mismo (cacao, oro). Fiduciario en efectivo: billetes y monedas actuales, que valen por confianza y ley, no por su material. Digital: pesos registrados en cuentas que se mueven con transferencias o tarjeta. Error común: poner la moneda de $10 como dinero mercancía; su metal vale mucho menos de $10.",
      en: "Commodity money: worth something in itself (cacao, gold). Fiat cash: today's bills and coins, worth something because of trust and law, not their material. Digital: pesos recorded in accounts and moved by transfer or card. Common mistake: classifying the $10 coin as commodity money; its metal is worth much less than $10.",
    },
    difficulty: 2,
    points: 15,
    competency: 'money-history',
  },
  {
    id: 'N1A-021',
    level: 1,
    module: 'L1-03',
    kind: 'multi',
    flavor: 'concept',
    prompt: {
      es: "¿Cuáles son funciones del dinero? Selecciona todas las que apliquen.",
      en: "Which are functions of money? Select all that apply.",
    },
    options: [
      { id: 'N1A-021-a', text: { es: "Medio de cambio: sirve para comprar y vender", en: "Medium of exchange: used to buy and sell" } },
      { id: 'N1A-021-b', text: { es: "Garantizar ganancias a quien lo ahorra", en: "Guarantee profits to whoever saves it" } },
      { id: 'N1A-021-c', text: { es: "Unidad de cuenta: pone precio a todo con la misma medida", en: "Unit of account: prices everything with the same measure" } },
      { id: 'N1A-021-d', text: { es: "Depósito de valor: se puede guardar para usarlo después", en: "Store of value: can be saved for later use" } },
      { id: 'N1A-021-e', text: { es: "Evitar el pago de impuestos", en: "Avoid paying taxes" } },
    ],
    correctOptionIds: ['N1A-021-a', 'N1A-021-c', 'N1A-021-d'],
    explanation: {
      es: "Las tres funciones clásicas del dinero son medio de cambio, unidad de cuenta y depósito de valor. El dinero no garantiza ganancias (con la inflación incluso pierde poder de compra) ni sirve para evitar impuestos. La función de unidad de cuenta es la que usa la contabilidad.",
      en: "The three classic functions of money are medium of exchange, unit of account and store of value. Money does not guarantee profits (with inflation it even loses purchasing power) nor does it avoid taxes. The unit-of-account function is the one accounting uses.",
    },
    difficulty: 1,
    points: 10,
    competency: 'money-history',
  },
  {
    id: 'N1A-022',
    level: 1,
    module: 'L1-03',
    kind: 'truefalse',
    flavor: 'concept',
    prompt: {
      es: "En México, el bitcoin es moneda de curso legal: todos los comercios están obligados a aceptarlo, igual que el peso.",
      en: "In Mexico, bitcoin is legal tender: all businesses must accept it, just like the peso.",
    },
    answer: false,
    explanation: {
      es: "Falso. En México la moneda de curso legal es el peso, que emite el Banco de México. Las criptomonedas no tienen ese carácter: un negocio puede decidir no aceptarlas. Además su precio es muy volátil. Error común: confundir dinero digital (pesos en el banco) con criptomonedas.",
      en: "False. In Mexico the legal tender is the peso, issued by Banco de México. Cryptocurrencies do not have that status: a business may choose not to accept them. Their price is also very volatile. Common mistake: confusing digital money (pesos in the bank) with cryptocurrencies.",
    },
    difficulty: 1,
    points: 10,
    competency: 'money-history',
  },
  {
    id: 'N1A-023',
    level: 1,
    module: 'L1-03',
    kind: 'mcq',
    flavor: 'concept',
    prompt: {
      es: "¿Qué hace un banco con el dinero que depositan los ahorradores?",
      en: "What does a bank do with the money savers deposit?",
    },
    options: [
      { id: 'N1A-023-a', text: { es: "Lo guarda y presta una parte a otras personas o empresas, cobrando intereses", en: "It keeps it and lends part of it to other people or businesses, charging interest" } },
      { id: 'N1A-023-b', text: { es: "Lo quema para que no haya inflación", en: "It burns it so there is no inflation" } },
      { id: 'N1A-023-c', text: { es: "Lo cambia todo por oro", en: "It exchanges all of it for gold" } },
      { id: 'N1A-023-d', text: { es: "Lo entrega al SAT como impuesto", en: "It hands it to the SAT as tax" } },
    ],
    correctOptionId: 'N1A-023-a',
    explanation: {
      es: "El negocio básico de un banco es recibir depósitos y prestar parte de ellos cobrando intereses; con la diferencia entre lo que cobra y lo que paga cubre sus gastos y gana. Error común: creer que el banco solo \"guarda\" el dinero sin usarlo.",
      en: "A bank's basic business is taking deposits and lending part of them while charging interest; the difference between what it collects and what it pays covers its expenses and earns a profit. Common mistake: believing the bank only \"stores\" the money without using it.",
    },
    difficulty: 1,
    points: 10,
    competency: 'money-history',
  },
  {
    id: 'N1A-024',
    level: 1,
    module: 'L1-03',
    kind: 'numeric',
    flavor: 'case',
    context: {
      es: "En un mercado, un guajolote cuesta $480 y un kilo de maíz $16.",
      en: "At a market, a turkey costs $480 and a kilo of corn $16.",
    },
    prompt: {
      es: "Usando el dinero como unidad de cuenta, ¿cuántos kilos de maíz equivalen a un guajolote?",
      en: "Using money as a unit of account, how many kilos of corn equal one turkey?",
    },
    answer: 30,
    unit: 'units',
    decimals: 0,
    tolerance: { abs: 0.01 },
    explanation: {
      es: "Como ambos precios están en pesos, se dividen: 480 ÷ 16 = 30 kilos. Así el dinero permite comparar cosas muy distintas. Error común: multiplicar los precios en lugar de dividirlos.",
      en: "Since both prices are in pesos, divide them: 480 ÷ 16 = 30 kilos. This is how money lets you compare very different things. Common mistake: multiplying the prices instead of dividing them.",
    },
    difficulty: 1,
    points: 10,
    competency: 'money-history',
  },

  // ═════════════════════════ L1-04 ═════════════════════════
  {
    id: 'N1A-025',
    level: 1,
    module: 'L1-04',
    kind: 'classify',
    flavor: 'concept',
    context: {
      es: "Estos son algunos conceptos de la tiendita de Doña Rosa.",
      en: "These are some items from Doña Rosa's corner store.",
    },
    prompt: {
      es: "Clasifica cada concepto como activo, pasivo o capital contable.",
      en: "Classify each item as an asset, a liability or equity.",
    },
    categories: [
      { id: 'N1A-025-c1', label: { es: "Activo", en: "Asset" } },
      { id: 'N1A-025-c2', label: { es: "Pasivo", en: "Liability" } },
      { id: 'N1A-025-c3', label: { es: "Capital contable", en: "Equity" } },
    ],
    items: [
      { id: 'N1A-025-i1', label: { es: "Dinero en la caja registradora", en: "Cash in the register" }, correctCategoryId: 'N1A-025-c1' },
      { id: 'N1A-025-i2', label: { es: "Refrigerador para refrescos", en: "Refrigerator for sodas" }, correctCategoryId: 'N1A-025-c1' },
      { id: 'N1A-025-i3', label: { es: "Lo que se le debe al repartidor de refrescos", en: "What is owed to the soda distributor" }, correctCategoryId: 'N1A-025-c2' },
      { id: 'N1A-025-i4', label: { es: "Préstamo recibido de una caja de ahorro, por devolver", en: "Loan received from a savings cooperative, to be repaid" }, correctCategoryId: 'N1A-025-c2' },
      { id: 'N1A-025-i5', label: { es: "Dinero que Doña Rosa aportó para abrir la tiendita", en: "Money Doña Rosa contributed to open the store" }, correctCategoryId: 'N1A-025-c3' },
      { id: 'N1A-025-i6', label: { es: "Mercancía en los anaqueles", en: "Goods on the shelves" }, correctCategoryId: 'N1A-025-c1' },
    ],
    explanation: {
      es: "Activos: caja, refrigerador y mercancía (recursos que la tiendita controla). Pasivos: la deuda con el repartidor y el préstamo por devolver (obligaciones). Capital: la aportación de la dueña. Error común: poner el préstamo como activo; el dinero recibido es activo, pero la obligación de devolverlo es pasivo.",
      en: "Assets: cash, refrigerator and goods (resources the store controls). Liabilities: the debt to the distributor and the loan to be repaid (obligations). Equity: the owner's contribution. Common mistake: classifying the loan as an asset; the cash received is an asset, but the obligation to repay it is a liability.",
    },
    difficulty: 1,
    points: 10,
    competency: 'accounting-elements',
  },
  {
    id: 'N1A-026',
    level: 1,
    module: 'L1-04',
    kind: 'mcq',
    flavor: 'concept',
    prompt: {
      es: "¿Cuál es la mejor descripción de un activo?",
      en: "Which is the best description of an asset?",
    },
    options: [
      { id: 'N1A-026-a', text: { es: "Cualquier deuda que el negocio tenga que pagar", en: "Any debt the business has to pay" } },
      { id: 'N1A-026-b', text: { es: "Un recurso que el negocio controla y del que espera obtener beneficios", en: "A resource the business controls and expects to benefit from" } },
      { id: 'N1A-026-c', text: { es: "Todo lo que el dueño tiene, incluida su casa", en: "Everything the owner has, including their house" } },
      { id: 'N1A-026-d', text: { es: "Las ventas del mes", en: "The month's sales" } },
    ],
    correctOptionId: 'N1A-026-b',
    explanation: {
      es: "Un activo es un recurso controlado por el negocio, que viene de operaciones pasadas y del que se esperan beneficios. Una deuda es pasivo, las ventas son ingresos y los bienes personales del dueño no son del negocio. Error común: incluir lo personal del dueño.",
      en: "An asset is a resource controlled by the business, arising from past transactions, from which benefits are expected. A debt is a liability, sales are revenue and the owner's personal goods do not belong to the business. Common mistake: including the owner's personal items.",
    },
    difficulty: 1,
    points: 10,
    competency: 'accounting-elements',
  },
  {
    id: 'N1A-027',
    level: 1,
    module: 'L1-04',
    kind: 'truefalse',
    flavor: 'concept',
    prompt: {
      es: "La deuda con el banco por un préstamo recibido es un activo, porque gracias a ella el negocio tiene más dinero.",
      en: "The debt to the bank for a loan received is an asset, because thanks to it the business has more money.",
    },
    answer: false,
    explanation: {
      es: "Falso. El dinero que llega sí es un activo, pero la obligación de devolverlo es un **pasivo**. Al recibir el préstamo suben al mismo tiempo el activo (dinero) y el pasivo (deuda). Error común: ver solo el dinero y olvidar la obligación.",
      en: "False. The money received is an asset, but the obligation to repay it is a **liability**. When the loan is received, both the asset (money) and the liability (debt) increase. Common mistake: seeing only the money and forgetting the obligation.",
    },
    difficulty: 1,
    points: 10,
    competency: 'accounting-elements',
  },
  {
    id: 'N1A-028',
    level: 1,
    module: 'L1-04',
    kind: 'numeric',
    flavor: 'case',
    context: {
      es: "Estética Lupita tiene: sillones y secadoras $45,000; productos para el cabello $8,000; dinero en banco $17,000. Debe $6,000 a su proveedor de tintes y $14,000 de un préstamo.",
      en: "Estética Lupita (a hair salon) has: chairs and dryers $45,000; hair products $8,000; money in the bank $17,000. It owes $6,000 to its dye supplier and $14,000 on a loan.",
    },
    prompt: {
      es: "¿Cuál es el capital contable de la estética? Responde en pesos.",
      en: "What is the salon's equity? Answer in pesos.",
    },
    answer: 50000,
    unit: 'MXN',
    decimals: 0,
    tolerance: { abs: 0.5 },
    explanation: {
      es: "Activos: 45,000 + 8,000 + 17,000 = $70,000. Pasivos: 6,000 + 14,000 = $20,000. Capital = 70,000 − 20,000 = $50,000. Error común: sumar activos y pasivos (90,000).",
      en: "Assets: 45,000 + 8,000 + 17,000 = $70,000. Liabilities: 6,000 + 14,000 = $20,000. Equity = 70,000 − 20,000 = $50,000. Common mistake: adding assets and liabilities (90,000).",
    },
    difficulty: 1,
    points: 10,
    competency: 'accounting-elements',
  },
  {
    id: 'N1A-029',
    level: 1,
    module: 'L1-04',
    kind: 'classify',
    flavor: 'concept',
    prompt: {
      es: "Clasifica cada activo de una mueblería como circulante (corto plazo) o no circulante (largo plazo).",
      en: "Classify each asset of a furniture store as current (short-term) or non-current (long-term).",
    },
    categories: [
      { id: 'N1A-029-c1', label: { es: "Activo circulante", en: "Current asset" } },
      { id: 'N1A-029-c2', label: { es: "Activo no circulante", en: "Non-current asset" } },
    ],
    items: [
      { id: 'N1A-029-i1', label: { es: "Dinero en la cuenta bancaria", en: "Money in the bank account" }, correctCategoryId: 'N1A-029-c1' },
      { id: 'N1A-029-i2', label: { es: "Muebles en exhibición listos para vender", en: "Furniture on display ready to sell" }, correctCategoryId: 'N1A-029-c1' },
      { id: 'N1A-029-i3', label: { es: "Lo que los clientes deben y pagarán en tres meses", en: "What customers owe and will pay in three months" }, correctCategoryId: 'N1A-029-c1' },
      { id: 'N1A-029-i4', label: { es: "Camioneta de reparto que se usará varios años", en: "Delivery van to be used for several years" }, correctCategoryId: 'N1A-029-c2' },
      { id: 'N1A-029-i5', label: { es: "Local propio donde está la tienda", en: "Owned building where the store is located" }, correctCategoryId: 'N1A-029-c2' },
      { id: 'N1A-029-i6', label: { es: "Computadoras de la oficina", en: "Office computers" }, correctCategoryId: 'N1A-029-c2' },
    ],
    explanation: {
      es: "Circulante: lo que se convierte en dinero o se usa en un año o menos (banco, muebles para vender, cobros a tres meses). No circulante: lo que se usa por más de un año (camioneta, local, computadoras). Error común: poner los muebles en exhibición como no circulantes; para una mueblería son mercancía (inventario) que se venderá pronto.",
      en: "Current: what turns into cash or is used within one year (bank, furniture for sale, receivables due in three months). Non-current: what is used for more than a year (van, building, computers). Common mistake: classifying furniture on display as non-current; for a furniture store it is merchandise (inventory) that will be sold soon.",
    },
    difficulty: 2,
    points: 15,
    competency: 'accounting-elements',
  },
  {
    id: 'N1A-030',
    level: 1,
    module: 'L1-04',
    kind: 'formula',
    flavor: 'concept',
    prompt: {
      es: "Completa la fórmula para calcular el patrimonio (capital contable) de un negocio.",
      en: "Complete the formula to compute a business's net worth (equity).",
    },
    template: '{{b1}} − {{b2}} = {{b3}}',
    blanks: [
      {
        id: 'b1',
        options: [
          { id: 'N1A-030-b1-a', text: { es: "Activo", en: "Assets" } },
          { id: 'N1A-030-b1-b', text: { es: "Ingresos", en: "Revenue" } },
          { id: 'N1A-030-b1-c', text: { es: "Gastos", en: "Expenses" } },
        ],
        correctOptionId: 'N1A-030-b1-a',
      },
      {
        id: 'b2',
        options: [
          { id: 'N1A-030-b2-a', text: { es: "Capital contable", en: "Equity" } },
          { id: 'N1A-030-b2-b', text: { es: "Pasivo", en: "Liabilities" } },
          { id: 'N1A-030-b2-c', text: { es: "Costo de ventas", en: "Cost of sales" } },
        ],
        correctOptionId: 'N1A-030-b2-b',
      },
      {
        id: 'b3',
        options: [
          { id: 'N1A-030-b3-a', text: { es: "Utilidad bruta", en: "Gross profit" } },
          { id: 'N1A-030-b3-b', text: { es: "Efectivo", en: "Cash" } },
          { id: 'N1A-030-b3-c', text: { es: "Capital contable", en: "Equity" } },
        ],
        correctOptionId: 'N1A-030-b3-c',
      },
    ],
    explanation: {
      es: "Activo − Pasivo = Capital contable: a lo que el negocio controla le quitas lo que debe y queda lo que es de los dueños. Ingresos, gastos y costos sirven para calcular la utilidad, no el patrimonio. Error común: escribir Activo − Capital = Pasivo y llamarlo patrimonio.",
      en: "Assets − Liabilities = Equity: from what the business controls you subtract what it owes, and what remains belongs to the owners. Revenue, expenses and costs are used to compute profit, not net worth. Common mistake: writing Assets − Equity = Liabilities and calling it net worth.",
    },
    difficulty: 1,
    points: 10,
    competency: 'accounting-elements',
  },
  {
    id: 'N1A-031',
    level: 1,
    module: 'L1-04',
    kind: 'fields',
    flavor: 'case',
    context: {
      es: "Cafetería Aroma tiene: máquina de espresso $45,000; mesas y sillas $20,000; dinero en caja $10,000; café y leche en bodega $5,000. Debe $8,000 al proveedor de café y $12,000 de un préstamo bancario.",
      en: "Cafetería Aroma has: espresso machine $45,000; tables and chairs $20,000; cash on hand $10,000; coffee and milk in storage $5,000. It owes $8,000 to the coffee supplier and $12,000 on a bank loan.",
    },
    prompt: {
      es: "Calcula el activo total, el pasivo total y el capital contable de la cafetería, en pesos.",
      en: "Compute the coffee shop's total assets, total liabilities and equity, in pesos.",
    },
    fields: [
      { id: 'f1', label: { es: "Activo total", en: "Total assets" }, answer: 80000, unit: 'MXN', tolerance: { abs: 0.5 } },
      { id: 'f2', label: { es: "Pasivo total", en: "Total liabilities" }, answer: 20000, unit: 'MXN', tolerance: { abs: 0.5 } },
      { id: 'f3', label: { es: "Capital contable", en: "Equity" }, answer: 60000, unit: 'MXN', tolerance: { abs: 0.5 } },
    ],
    explanation: {
      es: "Activo: 45,000 + 20,000 + 10,000 + 5,000 = $80,000. Pasivo: 8,000 + 12,000 = $20,000. Capital: 80,000 − 20,000 = $60,000. Error común: olvidar el café y la leche; también son activos (inventario).",
      en: "Assets: 45,000 + 20,000 + 10,000 + 5,000 = $80,000. Liabilities: 8,000 + 12,000 = $20,000. Equity: 80,000 − 20,000 = $60,000. Common mistake: forgetting the coffee and milk; they are also assets (inventory).",
    },
    difficulty: 2,
    points: 15,
    competency: 'accounting-elements',
  },
  {
    id: 'N1A-032',
    level: 1,
    module: 'L1-04',
    kind: 'mcq',
    flavor: 'case',
    context: {
      es: "El dueño de una ferretería tiene un coche personal que usa para pasear con su familia los fines de semana; nunca lo usa para el negocio.",
      en: "The owner of a hardware store has a personal car he uses for family outings on weekends; he never uses it for the business.",
    },
    prompt: {
      es: "¿Ese coche forma parte de los activos de la ferretería?",
      en: "Is that car part of the hardware store's assets?",
    },
    options: [
      { id: 'N1A-032-a', text: { es: "Sí, porque todo lo del dueño es del negocio", en: "Yes, because everything the owner has belongs to the business" } },
      { id: 'N1A-032-b', text: { es: "Sí, pero como pasivo", en: "Yes, but as a liability" } },
      { id: 'N1A-032-c', text: { es: "Solo si el coche vale más que la ferretería", en: "Only if the car is worth more than the store" } },
      { id: 'N1A-032-d', text: { es: "No, el negocio es una entidad separada de su dueño", en: "No, the business is an entity separate from its owner" } },
    ],
    correctOptionId: 'N1A-032-d',
    explanation: {
      es: "El negocio es una entidad distinta de su dueño: solo se registran los recursos y deudas del negocio. Un coche personal no es activo de la ferretería (tampoco pasivo). Error común: mezclar el patrimonio personal con el del negocio, lo que hace que sus números no reflejen la realidad.",
      en: "The business is an entity separate from its owner: only the business's resources and debts are recorded. A personal car is not an asset of the store (nor a liability). Common mistake: mixing personal and business net worth, which makes the numbers misleading.",
    },
    difficulty: 1,
    points: 10,
    competency: 'accounting-elements',
  },

  // ═════════════════════════ L1-05 ═════════════════════════
  {
    id: 'N1A-033',
    level: 1,
    module: 'L1-05',
    kind: 'classify',
    flavor: 'concept',
    context: {
      es: "Estas son operaciones de una cafetería durante el mes.",
      en: "These are a coffee shop's transactions during the month.",
    },
    prompt: {
      es: "Clasifica cada operación como ingreso, costo, gasto o ninguno de ellos.",
      en: "Classify each transaction as revenue, cost, expense or none of them.",
    },
    categories: [
      { id: 'N1A-033-c1', label: { es: "Ingreso", en: "Revenue" } },
      { id: 'N1A-033-c2', label: { es: "Costo", en: "Cost" } },
      { id: 'N1A-033-c3', label: { es: "Gasto", en: "Expense" } },
      { id: 'N1A-033-c4', label: { es: "Ninguno (no afecta la utilidad)", en: "None (does not affect profit)" } },
    ],
    items: [
      { id: 'N1A-033-i1', label: { es: "Venta de cafés y pasteles", en: "Sale of coffees and pastries" }, correctCategoryId: 'N1A-033-c1' },
      { id: 'N1A-033-i2', label: { es: "Café, leche y azúcar usados en las bebidas vendidas", en: "Coffee, milk and sugar used in the drinks sold" }, correctCategoryId: 'N1A-033-c2' },
      { id: 'N1A-033-i3', label: { es: "Renta del local", en: "Shop rent" }, correctCategoryId: 'N1A-033-c3' },
      { id: 'N1A-033-i4', label: { es: "Sueldo del barista", en: "Barista's wage" }, correctCategoryId: 'N1A-033-c3' },
      { id: 'N1A-033-i5', label: { es: "Préstamo recibido del banco", en: "Loan received from the bank" }, correctCategoryId: 'N1A-033-c4' },
      { id: 'N1A-033-i6', label: { es: "Cobro por atender un evento con servicio de café", en: "Fee for serving coffee at an event" }, correctCategoryId: 'N1A-033-c1' },
    ],
    explanation: {
      es: "Ingresos: lo que se gana vendiendo (cafés, servicio en eventos). Costo: los insumos de lo que se vendió. Gastos: lo necesario para operar (renta, sueldo). El préstamo no es ingreso: es dinero que hay que devolver. Error común: contar el préstamo como ingreso porque entró dinero.",
      en: "Revenue: what is earned by selling (coffees, event service). Cost: the inputs of what was sold. Expenses: what is needed to operate (rent, wage). The loan is not revenue: it is money that must be repaid. Common mistake: counting the loan as revenue because cash came in.",
    },
    difficulty: 2,
    points: 15,
    competency: 'income-expenses',
  },
  {
    id: 'N1A-034',
    level: 1,
    module: 'L1-05',
    kind: 'numeric',
    flavor: 'case',
    context: {
      es: "Una frutería vende $50,000 en el mes. La fruta que vendió le costó $20,000 y pagó gastos de renta, luz y sueldos por $18,000.",
      en: "A fruit shop sells $50,000 in the month. The fruit it sold cost $20,000 and it paid rent, electricity and wages totaling $18,000.",
    },
    prompt: {
      es: "¿Cuál fue la utilidad de la frutería en el mes? Responde en pesos.",
      en: "What was the fruit shop's profit for the month? Answer in pesos.",
    },
    answer: 12000,
    unit: 'MXN',
    decimals: 0,
    tolerance: { abs: 0.5 },
    explanation: {
      es: "Utilidad = Ingresos − Costos − Gastos = 50,000 − 20,000 − 18,000 = $12,000. La utilidad bruta es 30,000. Error común: restar solo el costo y responder 30,000.",
      en: "Profit = Revenue − Costs − Expenses = 50,000 − 20,000 − 18,000 = $12,000. Gross profit is 30,000. Common mistake: subtracting only the cost and answering 30,000.",
    },
    difficulty: 1,
    points: 10,
    competency: 'income-expenses',
  },
  {
    id: 'N1A-035',
    level: 1,
    module: 'L1-05',
    kind: 'mcq',
    flavor: 'concept',
    prompt: {
      es: "¿Cuál es la diferencia entre un costo y un gasto?",
      en: "What is the difference between a cost and an expense?",
    },
    options: [
      { id: 'N1A-035-a', text: { es: "No hay diferencia: son sinónimos exactos", en: "There is no difference: they are exact synonyms" } },
      { id: 'N1A-035-b', text: { es: "El costo es lo que costó lo que vendiste; el gasto es lo que cuesta operar el negocio", en: "Cost is what the things you sold cost; expense is what it costs to run the business" } },
      { id: 'N1A-035-c', text: { es: "El costo se paga en efectivo y el gasto con tarjeta", en: "Cost is paid in cash and expense by card" } },
      { id: 'N1A-035-d', text: { es: "El costo aumenta la utilidad y el gasto la disminuye", en: "Cost increases profit and expense decreases it" } },
    ],
    correctOptionId: 'N1A-035-b',
    explanation: {
      es: "El costo (de ventas) está ligado a lo que vendiste, como la mercancía o los insumos; el gasto es lo necesario para operar, como renta o sueldos. Ambos disminuyen la utilidad, y la forma de pago no los distingue. Error común: pensar que el costo suma a la utilidad.",
      en: "Cost (of sales) is tied to what you sold, such as goods or inputs; expense is what is needed to operate, such as rent or wages. Both reduce profit, and the payment method does not distinguish them. Common mistake: thinking cost adds to profit.",
    },
    difficulty: 1,
    points: 10,
    competency: 'income-expenses',
  },
  {
    id: 'N1A-036',
    level: 1,
    module: 'L1-05',
    kind: 'truefalse',
    flavor: 'concept',
    prompt: {
      es: "Cuando los costos y gastos de un mes son mayores que los ingresos de ese mes, el negocio tiene una pérdida.",
      en: "When a month's costs and expenses are greater than that month's revenue, the business has a loss.",
    },
    answer: true,
    explanation: {
      es: "Verdadero. Utilidad = Ingresos − Costos − Gastos; si costos y gastos superan los ingresos, el resultado es negativo: pérdida. Error común: pensar que si hay dinero en la caja no puede haber pérdida (el dinero pudo venir de un préstamo).",
      en: "True. Profit = Revenue − Costs − Expenses; if costs and expenses exceed revenue, the result is negative: a loss. Common mistake: thinking there cannot be a loss if there is money in the cash box (it may have come from a loan).",
    },
    difficulty: 1,
    points: 10,
    competency: 'income-expenses',
  },
  {
    id: 'N1A-037',
    level: 1,
    module: 'L1-05',
    kind: 'fields',
    flavor: 'case',
    context: {
      es: "Taller Ruiz, en abril: servicios cobrados $90,000; refacciones usadas en esos servicios $35,000; renta $10,000; luz $4,000; sueldos $28,000.",
      en: "Taller Ruiz, in April: services billed $90,000; parts used in those services $35,000; rent $10,000; electricity $4,000; wages $28,000.",
    },
    prompt: {
      es: "Calcula la utilidad bruta, el total de gastos y la utilidad del mes, en pesos.",
      en: "Compute gross profit, total expenses and profit for the month, in pesos.",
    },
    fields: [
      { id: 'f1', label: { es: "Utilidad bruta", en: "Gross profit" }, answer: 55000, unit: 'MXN', tolerance: { abs: 0.5 } },
      { id: 'f2', label: { es: "Total de gastos", en: "Total expenses" }, answer: 42000, unit: 'MXN', tolerance: { abs: 0.5 } },
      { id: 'f3', label: { es: "Utilidad del mes", en: "Profit for the month" }, answer: 13000, unit: 'MXN', tolerance: { abs: 0.5 } },
    ],
    explanation: {
      es: "Utilidad bruta: 90,000 − 35,000 = $55,000. Gastos: 10,000 + 4,000 + 28,000 = $42,000. Utilidad: 55,000 − 42,000 = $13,000. Error común: sumar las refacciones a los gastos de operación y restarlas dos veces.",
      en: "Gross profit: 90,000 − 35,000 = $55,000. Expenses: 10,000 + 4,000 + 28,000 = $42,000. Profit: 55,000 − 42,000 = $13,000. Common mistake: adding the parts to operating expenses and subtracting them twice.",
    },
    difficulty: 2,
    points: 15,
    competency: 'income-expenses',
  },
  {
    id: 'N1A-038',
    level: 1,
    module: 'L1-05',
    kind: 'numeric',
    flavor: 'case',
    context: {
      es: "Una panadería recién abierta vende $26,000 en su primer mes. La harina y demás insumos de lo vendido costaron $11,000 y sus gastos fueron $19,000. Además, el dueño aportó $30,000 de sus ahorros.",
      en: "A newly opened bakery sells $26,000 in its first month. The flour and other inputs of what it sold cost $11,000 and its expenses were $19,000. In addition, the owner contributed $30,000 from his savings.",
    },
    prompt: {
      es: "¿Cuál fue el resultado del mes? Si es pérdida, escríbelo con signo negativo. Responde en pesos.",
      en: "What was the result for the month? If it is a loss, enter it with a minus sign. Answer in pesos.",
    },
    answer: -4000,
    unit: 'MXN',
    decimals: 0,
    tolerance: { abs: 0.5 },
    explanation: {
      es: "La aportación del dueño no es ingreso, así que se deja fuera. Resultado: 26,000 − 11,000 − 19,000 = −$4,000, es decir, una pérdida de $4,000. Error común: sumar la aportación como ingreso y responder 26,000.",
      en: "The owner's contribution is not revenue, so it is left out. Result: 26,000 − 11,000 − 19,000 = −$4,000, that is, a $4,000 loss. Common mistake: adding the contribution as revenue and answering 26,000.",
    },
    difficulty: 2,
    points: 15,
    competency: 'income-expenses',
  },
  {
    id: 'N1A-039',
    level: 1,
    module: 'L1-05',
    kind: 'formula',
    flavor: 'concept',
    prompt: {
      es: "Completa la fórmula de la utilidad de un periodo.",
      en: "Complete the formula for a period's profit.",
    },
    template: '{{b1}} − {{b2}} − {{b3}} = {{b4}}',
    blanks: [
      {
        id: 'b1',
        options: [
          { id: 'N1A-039-b1-a', text: { es: "Pasivo", en: "Liabilities" } },
          { id: 'N1A-039-b1-b', text: { es: "Ingresos", en: "Revenue" } },
          { id: 'N1A-039-b1-c', text: { es: "Activo", en: "Assets" } },
        ],
        correctOptionId: 'N1A-039-b1-b',
      },
      {
        id: 'b2',
        options: [
          { id: 'N1A-039-b2-a', text: { es: "Costo de ventas", en: "Cost of sales" } },
          { id: 'N1A-039-b2-b', text: { es: "Préstamos recibidos", en: "Loans received" } },
          { id: 'N1A-039-b2-c', text: { es: "Capital contable", en: "Equity" } },
        ],
        correctOptionId: 'N1A-039-b2-a',
      },
      {
        id: 'b3',
        options: [
          { id: 'N1A-039-b3-a', text: { es: "Aportaciones del dueño", en: "Owner contributions" } },
          { id: 'N1A-039-b3-b', text: { es: "Clientes", en: "Accounts receivable" } },
          { id: 'N1A-039-b3-c', text: { es: "Gastos", en: "Expenses" } },
        ],
        correctOptionId: 'N1A-039-b3-c',
      },
      {
        id: 'b4',
        options: [
          { id: 'N1A-039-b4-a', text: { es: "Utilidad (o pérdida)", en: "Profit (or loss)" } },
          { id: 'N1A-039-b4-b', text: { es: "Efectivo en caja", en: "Cash on hand" } },
          { id: 'N1A-039-b4-c', text: { es: "Activo total", en: "Total assets" } },
        ],
        correctOptionId: 'N1A-039-b4-a',
      },
    ],
    explanation: {
      es: "Ingresos − Costo de ventas − Gastos = Utilidad (o pérdida). Préstamos y aportaciones no son ingresos ni gastos, y el resultado no es el efectivo en caja: puedes tener utilidad sin dinero o dinero sin utilidad. Error común: igualar la utilidad con el efectivo.",
      en: "Revenue − Cost of sales − Expenses = Profit (or loss). Loans and contributions are neither revenue nor expenses, and the result is not the cash on hand: you can have profit without cash or cash without profit. Common mistake: equating profit with cash.",
    },
    difficulty: 1,
    points: 10,
    competency: 'income-expenses',
  },
  {
    id: 'N1A-040',
    level: 1,
    module: 'L1-05',
    kind: 'multi',
    flavor: 'concept',
    context: {
      es: "En mayo entró dinero a la caja de Pastelería Dulce Hogar por varios motivos.",
      en: "In May, money came into the cash box of Pastelería Dulce Hogar for several reasons.",
    },
    prompt: {
      es: "¿Cuáles de estas entradas de dinero son **ingresos de mayo**? Selecciona todas las que apliquen.",
      en: "Which of these cash inflows are **May revenue**? Select all that apply.",
    },
    options: [
      { id: 'N1A-040-a', text: { es: "Venta de pasteles de cumpleaños en mayo", en: "Sale of birthday cakes in May" } },
      { id: 'N1A-040-b', text: { es: "Préstamo de $20,000 de una caja popular", en: "$20,000 loan from a credit union" } },
      { id: 'N1A-040-c', text: { es: "Dinero que aportó la dueña para comprar un horno", en: "Money the owner contributed to buy an oven" } },
      { id: 'N1A-040-d', text: { es: "Cobro por un curso de repostería impartido en mayo", en: "Fee for a baking class taught in May" } },
      { id: 'N1A-040-e', text: { es: "Cobro de un pastel que se entregó y registró como venta en abril", en: "Collection for a cake delivered and recorded as a sale in April" } },
    ],
    correctOptionIds: ['N1A-040-a', 'N1A-040-d'],
    explanation: {
      es: "Son ingresos de mayo las ventas y servicios realizados en mayo (pasteles y curso). El préstamo hay que devolverlo y la aportación es capital de la dueña: no son ingresos. El pastel de abril ya fue ingreso de abril; en mayo solo se cobra. Error común: contar como ingreso todo el dinero que entra.",
      en: "May revenue is the sales and services performed in May (cakes and class). The loan must be repaid and the contribution is the owner's equity: they are not revenue. The April cake was already April revenue; in May it is only collected. Common mistake: counting all incoming cash as revenue.",
    },
    difficulty: 2,
    points: 15,
    competency: 'income-expenses',
  },
]
