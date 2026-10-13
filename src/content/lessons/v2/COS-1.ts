import type { Exercise, Lesson } from '../../../types'

/**
 * FINCORE — Temario v2.0, área Costos y Contabilidad Administrativa, parte 1 (Básico).
 * COS-01 a COS-06: fundamentos, clasificación y comportamiento, órdenes, procesos, ABC y costos estándar.
 */

const t = (es: string, en: string) => ({ es, en })

export const lessons: Lesson[] = [
  // ───────────────────────────── COS-01 ─────────────────────────────
  {
    id: 'COS-01',
    level: 3,
    topicIds: ['COS.1'],
    title: t("Fundamentos de contabilidad de costos", "Fundamentals of cost accounting"),
    summary: t(
      "La contabilidad de costos mide cuánto cuesta fabricar un producto sumando materia prima directa, mano de obra directa y costos indirectos, y sigue ese costo desde la fábrica hasta el costo de ventas.",
      "Cost accounting measures how much it costs to make a product by adding direct materials, direct labor and overhead, and follows that cost from the factory to cost of goods sold.",
    ),
    minutes: 17,
    objectives: [
      t("Explicar qué es la contabilidad de costos y en qué se diferencia un costo de un gasto.", "Explain what cost accounting is and how a cost differs from an expense."),
      t("Identificar los tres elementos del costo: materia prima directa, mano de obra directa y costos indirectos de fabricación.", "Identify the three cost elements: direct materials, direct labor and manufacturing overhead."),
      t("Calcular el costo primo, el costo de conversión, el costo de producción y el costo de ventas.", "Compute prime cost, conversion cost, cost of production and cost of goods sold."),
    ],
    theory: [
      {
        heading: t("¿Qué es la contabilidad de costos?", "What is cost accounting?"),
        body: [
          t(
            "Imagina una **panadería**. La dueña quiere saber cuánto le cuesta hacer una concha para ponerle un buen precio. La **contabilidad de costos** es la rama de la contabilidad que **mide, registra y analiza** lo que cuesta producir un bien o dar un servicio.",
            "Picture a **bakery**. The owner wants to know how much it costs to make one concha (sweet bread) to set a good price. **Cost accounting** is the branch of accounting that **measures, records and analyzes** what it costs to produce a good or provide a service.",
          ),
          t(
            "Primero, dos palabras que se confunden. Un **costo** es lo que gastas para **fabricar** algo: la harina, el sueldo del panadero, el gas del horno. Ese costo se queda \"guardado\" en el inventario y se vuelve **costo de ventas** cuando vendes el pan. Un **gasto** es lo que pagas para **vender o administrar**: la publicidad o el sueldo de la cajera; se resta en el periodo en que ocurre.",
            "First, two words people mix up. A **cost** is what you spend to **make** something: flour, the baker's wage, gas for the oven. That cost stays \"stored\" in inventory and becomes **cost of goods sold** when you sell the bread. An **expense** is what you pay to **sell or manage**: advertising or the cashier's wage; it is deducted in the period it happens.",
          ),
          t(
            "Mini ejemplo: la harina de hoy ($600) es costo y entra al inventario de pan; el anuncio en redes ($300) es gasto de venta del mes, aunque no se haya horneado nada con él.",
            "Mini example: today's flour ($600) is a cost and goes into the bread inventory; the social media ad ($300) is a selling expense of the month, even though nothing was baked with it.",
          ),
        ],
        bullets: [
          t("Sirve para fijar precios con base en números reales.", "It helps set prices based on real numbers."),
          t("Permite valuar el inventario de lo que fabricas.", "It lets you value the inventory you make."),
          t("Ayuda a controlar desperdicios y comparar lo real contra lo planeado.", "It helps control waste and compare actual against plan."),
          t("Da información interna para decidir qué producir y cómo.", "It gives internal information to decide what to produce and how."),
        ],
      },
      {
        heading: t("Los tres elementos del costo", "The three cost elements"),
        body: [
          t(
            "Todo costo de producción se arma con tres piezas. La **materia prima directa (MPD)** es el material principal que se ve en el producto y se puede medir por pieza: la madera de una mesa o la tela de un pantalón.",
            "Every production cost is built from three pieces. **Direct materials (DM)** are the main material you can see in the product and measure per unit: the wood in a table or the fabric in a pair of pants.",
          ),
          t(
            "La **mano de obra directa (MOD)** es el sueldo de quien **transforma** el material con sus manos o su máquina: el carpintero que arma la mesa. Los **costos indirectos de fabricación (CIF)**, también llamados cargos indirectos, son todos los demás costos de la fábrica que no se pueden medir fácilmente por pieza: la renta de la nave, la luz de las máquinas, el sueldo del supervisor, los clavos y el pegamento.",
            "**Direct labor (DL)** is the wage of whoever **transforms** the material with their hands or machine: the carpenter who assembles the table. **Manufacturing overhead (MOH)**, also called indirect manufacturing costs, is every other factory cost that cannot be easily measured per unit: the plant's rent, electricity for the machines, the supervisor's salary, nails and glue.",
          ),
          t(
            "Dos combinaciones útiles: el **costo primo** (MPD + MOD) muestra lo que es directo, y el **costo de conversión** (MOD + CIF) muestra lo que cuesta transformar el material. Mini ejemplo: una mesa usa $1,200 de madera, $800 de carpintero y $400 de CIF; su costo de producción es $2,400, el primo $2,000 y el de conversión $1,200.",
            "Two useful combinations: **prime cost** (DM + DL) shows what is direct, and **conversion cost** (DL + MOH) shows what it costs to transform the material. Mini example: a table uses $1,200 of wood, $800 of carpenter time and $400 of overhead; its production cost is $2,400, prime cost $2,000 and conversion cost $1,200.",
          ),
        ],
        formulas: [
          {
            name: t("Costo de producción (lo que costó fabricar)", "Cost of production (what it cost to make)"),
            expression: "Costo de producción = MPD + MOD + CIF",
            variables: [
              { symbol: "MPD", meaning: t("Materia prima directa: el material principal del producto, en pesos.", "Direct materials: the product's main material, in pesos.") },
              { symbol: "MOD", meaning: t("Mano de obra directa: el sueldo de quien transforma el material, en pesos. Si te dan horas, MOD = horas × pago por hora.", "Direct labor: the wage of whoever transforms the material, in pesos. If you are given hours, DL = hours × pay per hour.") },
              { symbol: "CIF", meaning: t("Costos indirectos de fabricación: renta, luz, supervisor y materiales menores de la fábrica, en pesos.", "Manufacturing overhead: the factory's rent, power, supervisor and minor materials, in pesos.") },
            ],
            steps: [
              t("Separa cada costo en su elemento: MPD, MOD o CIF. Deja fuera lo de vender o administrar.", "Sort each cost into its element: DM, DL or MOH. Leave out selling and admin costs."),
              t("Si la MOD viene en horas, multiplícalas por el pago por hora.", "If DL is given in hours, multiply them by the pay per hour."),
              t("Suma los tres elementos.", "Add the three elements."),
            ],
            example: t(
              "Un taller de bolsas de piel tiene MPD $9,000, MOD $5,000 y CIF $3,000. Costo de producción = 9,000 + 5,000 + 3,000 = **$17,000**.",
              "A leather bag workshop has DM $9,000, DL $5,000 and MOH $3,000. Cost of production = 9,000 + 5,000 + 3,000 = **$17,000**.",
            ),
            mistake: t(
              "Meter gastos de venta o administración (comisiones, publicidad, sueldo de la cajera). Esos no son costo de producción.",
              "Including selling or admin expenses (commissions, advertising, the cashier's wage). Those are not cost of production.",
            ),
          },
          {
            name: t("Costo primo (lo directo)", "Prime cost (the direct part)"),
            expression: "Costo primo = MPD + MOD",
            variables: [
              { symbol: "MPD", meaning: t("Materia prima directa, en pesos.", "Direct materials, in pesos.") },
              { symbol: "MOD", meaning: t("Mano de obra directa, en pesos.", "Direct labor, in pesos.") },
            ],
            steps: [
              t("Toma la MPD.", "Take DM."),
              t("Súmale la MOD. Los CIF no entran.", "Add DL. Overhead does not go in."),
            ],
            example: t(
              "Con el taller de bolsas: costo primo = 9,000 + 5,000 = **$14,000**.",
              "With the bag workshop: prime cost = 9,000 + 5,000 = **$14,000**.",
            ),
          },
          {
            name: t("Costo de conversión (lo que cuesta transformar)", "Conversion cost (what it costs to transform)"),
            expression: "Costo de conversión = MOD + CIF",
            variables: [
              { symbol: "MOD", meaning: t("Mano de obra directa, en pesos.", "Direct labor, in pesos.") },
              { symbol: "CIF", meaning: t("Costos indirectos de fabricación, en pesos.", "Manufacturing overhead, in pesos.") },
            ],
            steps: [
              t("Toma la MOD.", "Take DL."),
              t("Súmale los CIF. La materia prima no entra.", "Add overhead. Raw materials do not go in."),
            ],
            example: t(
              "Con el taller de bolsas: costo de conversión = 5,000 + 3,000 = **$8,000**.",
              "With the bag workshop: conversion cost = 5,000 + 3,000 = **$8,000**.",
            ),
            mistake: t(
              "Sumar costo primo + costo de conversión para sacar el costo de producción: así cuentas la MOD dos veces (14,000 + 8,000 = 22,000, no 17,000).",
              "Adding prime cost + conversion cost to get cost of production: that counts DL twice (14,000 + 8,000 = 22,000, not 17,000).",
            ),
          },
        ],
      },
      {
        heading: t("Del costo de producción al costo de ventas", "From cost of production to cost of goods sold"),
        body: [
          t(
            "Una fábrica tiene tres inventarios. **Materia prima** (lo que compraste y aún no usas), **producción en proceso** (lo que está a medio hacer) y **producto terminado** (lo que ya está listo para vender). El costo viaja de uno a otro como una banda transportadora.",
            "A factory has three inventories. **Raw materials** (what you bought and have not used yet), **work in process** (what is half made) and **finished goods** (what is ready to sell). Cost travels from one to the next like a conveyor belt.",
          ),
          t(
            "Primero calculas la materia prima usada; luego sumas MOD y CIF para obtener el costo de producción del periodo. Ajustas por lo que quedó a medio hacer para obtener el **costo de lo terminado**. Por último, ajustas por lo que no se vendió para llegar al **costo de ventas**, que es lo que aparece en el estado de resultados.",
            "First you compute the raw materials used; then you add DL and MOH to get the period's cost of production. You adjust for what is half made to get the **cost of goods manufactured**. Finally, you adjust for what was not sold to reach **cost of goods sold**, which is what appears on the income statement.",
          ),
          t(
            "Mini ejemplo: terminaste producto por $90,000, tenías $12,000 de producto terminado al inicio y te quedan $14,000 al final. El costo de ventas es 12,000 + 90,000 − 14,000 = $88,000.",
            "Mini example: you finished goods for $90,000, had $12,000 of finished goods at the start and have $14,000 left at the end. Cost of goods sold is 12,000 + 90,000 − 14,000 = $88,000.",
          ),
        ],
        formulas: [
          {
            name: t("Materia prima usada en el periodo", "Raw materials used in the period"),
            expression: "MP usada = Inv. inicial MP + Compras − Inv. final MP",
            variables: [
              { symbol: "MP usada", meaning: t("Los pesos de material que de verdad entraron a producción.", "The pesos of material that actually went into production.") },
              { symbol: "Inv. inicial MP", meaning: t("Material que ya tenías en el almacén al empezar, en pesos.", "Material already in the storeroom at the start, in pesos.") },
              { symbol: "Compras", meaning: t("Material que compraste en el periodo, en pesos.", "Material bought during the period, in pesos.") },
              { symbol: "Inv. final MP", meaning: t("Material que sigue en el almacén al cierre, en pesos.", "Material still in the storeroom at closing, in pesos.") },
            ],
            steps: [
              t("Suma lo que tenías al inicio más lo que compraste: es todo lo que pudiste usar.", "Add what you had at the start plus what you bought: that is everything you could use."),
              t("Resta lo que sigue en el almacén al cierre: eso no se usó.", "Subtract what is still in the storeroom at closing: that was not used."),
            ],
            example: t(
              "Una fábrica de huaraches tenía $7,000 de cuero, compró $30,000 y le quedan $5,000. Paso 1: 7,000 + 30,000 = 37,000. Paso 2: 37,000 − 5,000 = **$32,000** usados.",
              "A sandal factory had $7,000 of leather, bought $30,000 and has $5,000 left. Step 1: 7,000 + 30,000 = 37,000. Step 2: 37,000 − 5,000 = **$32,000** used.",
            ),
            mistake: t(
              "Tomar solo las compras y olvidar lo que ya había en el almacén al inicio.",
              "Taking only purchases and forgetting what was already in the storeroom at the start.",
            ),
          },
          {
            name: t("Costo de lo terminado (producto que quedó listo)", "Cost of goods manufactured (product finished)"),
            expression: "Costo de lo terminado = Inv. inicial PP + Costo de producción − Inv. final PP",
            variables: [
              { symbol: "Inv. inicial PP", meaning: t("Producción en proceso al inicio: lo que venía a medio hacer, en pesos.", "Opening work in process: what was half made at the start, in pesos.") },
              { symbol: "Costo de producción", meaning: t("MP usada + MOD + CIF del periodo, en pesos.", "Materials used + DL + MOH for the period, in pesos.") },
              { symbol: "Inv. final PP", meaning: t("Lo que quedó a medio hacer al cierre, en pesos.", "What is still half made at closing, in pesos.") },
            ],
            steps: [
              t("Calcula el costo de producción: MP usada + MOD + CIF.", "Compute cost of production: materials used + DL + MOH."),
              t("Súmale lo que venía a medio hacer al inicio.", "Add what was half made at the start."),
              t("Resta lo que quedó a medio hacer al cierre.", "Subtract what is still half made at closing."),
            ],
            example: t(
              "Costo de producción $70,000, en proceso inicial $4,000 y final $6,000. 4,000 + 70,000 = 74,000; 74,000 − 6,000 = **$68,000** terminados.",
              "Cost of production $70,000, opening WIP $4,000 and closing $6,000. 4,000 + 70,000 = 74,000; 74,000 − 6,000 = **$68,000** finished.",
            ),
          },
          {
            name: t("Costo de ventas (costo de lo que sí vendiste)", "Cost of goods sold (cost of what you actually sold)"),
            expression: "Costo de ventas = Inv. inicial PT + Costo de lo terminado − Inv. final PT",
            variables: [
              { symbol: "Inv. inicial PT", meaning: t("Producto terminado que ya tenías listo al inicio, en pesos.", "Finished goods already on hand at the start, in pesos.") },
              { symbol: "Costo de lo terminado", meaning: t("Lo que se terminó de fabricar en el periodo, en pesos.", "What was finished during the period, in pesos.") },
              { symbol: "Inv. final PT", meaning: t("Producto terminado que sigue en bodega sin vender al cierre, en pesos.", "Finished goods still unsold in the warehouse at closing, in pesos.") },
            ],
            steps: [
              t("Suma el producto terminado inicial más lo terminado en el periodo: es todo lo que pudiste vender.", "Add opening finished goods plus what was finished in the period: that is everything you could sell."),
              t("Resta lo que sigue en bodega al cierre: eso no se vendió.", "Subtract what is still in the warehouse at closing: that was not sold."),
            ],
            example: t(
              "Producto terminado inicial $10,000, terminado en el mes $68,000, final $9,000. 10,000 + 68,000 = 78,000; 78,000 − 9,000 = **$69,000** de costo de ventas.",
              "Opening finished goods $10,000, finished in the month $68,000, closing $9,000. 10,000 + 68,000 = 78,000; 78,000 − 9,000 = **$69,000** cost of goods sold.",
            ),
            mistake: t(
              "Sumar el inventario final en lugar de restarlo. Lo que queda en bodega no se vendió.",
              "Adding the closing inventory instead of subtracting it. What is left in the warehouse was not sold.",
            ),
          },
        ],
      },
    ],
    examples: [
      {
        title: t("Costo de una mesa de comedor", "Cost of a dining table"),
        problem: t(
          "Una carpintería hace una mesa con $1,500 de madera, 6 horas de carpintero a $125 por hora y $450 de costos indirectos. Calcula el costo primo, el de conversión y el costo de producción.",
          "A carpentry shop makes a table with $1,500 of wood, 6 hours of carpenter time at $125 per hour and $450 of overhead. Compute prime cost, conversion cost and cost of production.",
        ),
        steps: [
          t("MPD = $1,500 (la madera).", "DM = $1,500 (the wood)."),
          t("MOD = 6 × 125 = $750.", "DL = 6 × 125 = $750."),
          t("Costo primo = 1,500 + 750 = $2,250.", "Prime cost = 1,500 + 750 = $2,250."),
          t("Costo de conversión = 750 + 450 = $1,200.", "Conversion cost = 750 + 450 = $1,200."),
          t("Costo de producción = 1,500 + 750 + 450 = $2,700.", "Cost of production = 1,500 + 750 + 450 = $2,700."),
        ],
        result: t(
          "La mesa cuesta $2,700. Ojo: la MOD aparece en el costo primo y en el de conversión, por eso no se suman entre sí.",
          "The table costs $2,700. Note: DL appears in both prime and conversion cost, so you do not add them together.",
        ),
      },
      {
        title: t("Del almacén al costo de ventas", "From the storeroom to cost of goods sold"),
        problem: t(
          "Una fábrica de bolsas tiene (cifras hipotéticas): inventario inicial de materia prima $10,000, compras $40,000, inventario final de materia prima $8,000; MOD $30,000; CIF $20,000; producción en proceso inicial $5,000 y final $7,000; producto terminado inicial $12,000 y final $14,000. Calcula el costo de ventas.",
          "A bag factory has (hypothetical figures): opening raw materials $10,000, purchases $40,000, closing raw materials $8,000; DL $30,000; MOH $20,000; opening work in process $5,000 and closing $7,000; opening finished goods $12,000 and closing $14,000. Compute cost of goods sold.",
        ),
        steps: [
          t("MP usada = 10,000 + 40,000 − 8,000 = $42,000.", "Materials used = 10,000 + 40,000 − 8,000 = $42,000."),
          t("Costo de producción = 42,000 + 30,000 + 20,000 = $92,000.", "Cost of production = 42,000 + 30,000 + 20,000 = $92,000."),
          t("Costo de lo terminado = 5,000 + 92,000 − 7,000 = $90,000.", "Cost of goods manufactured = 5,000 + 92,000 − 7,000 = $90,000."),
          t("Costo de ventas = 12,000 + 90,000 − 14,000 = $88,000.", "Cost of goods sold = 12,000 + 90,000 − 14,000 = $88,000."),
        ],
        result: t(
          "El costo de ventas es $88,000. Cada paso ajusta por un inventario: materia prima, producción en proceso y producto terminado.",
          "Cost of goods sold is $88,000. Each step adjusts for one inventory: raw materials, work in process and finished goods.",
        ),
      },
    ],
    keyPoints: [
      t("El costo se acumula en el inventario y pasa a costo de ventas al vender; el gasto se resta en el periodo.", "Cost builds up in inventory and becomes cost of goods sold when you sell; an expense is deducted in the period."),
      t("Costo de producción = MPD + MOD + CIF.", "Cost of production = DM + DL + MOH."),
      t("Costo primo = MPD + MOD; costo de conversión = MOD + CIF.", "Prime cost = DM + DL; conversion cost = DL + MOH."),
      t("Los CIF son los costos de fábrica que no se miden fácilmente por pieza: renta, luz, supervisor, materiales menores.", "Overhead is factory cost not easily measured per unit: rent, power, supervisor, minor materials."),
      t("El costo viaja: materia prima → producción en proceso → producto terminado → costo de ventas.", "Cost travels: raw materials → work in process → finished goods → cost of goods sold."),
    ],
    normativeNote: t(
      "Contenido educativo. En México, la valuación de inventarios en estados financieros se rige por las NIF del CINIF (norma de inventarios, NIF C-4) y, a nivel internacional, por la NIC 2; ambas piden incluir en el inventario los costos de producción. Las normas se actualizan: verifica la versión vigente (2026).",
      "Educational content. In Mexico, inventory valuation in financial statements follows CINIF's NIF (inventory standard, NIF C-4) and, internationally, IAS 2; both require production costs to be included in inventory. Standards are updated: verify the current version (2026).",
    ),
    exerciseIds: ['COS-01-E1', 'COS-01-E2', 'COS-01-E3', 'COS-01-E4', 'COS-01-E5', 'COS-01-E6'],
  },

  // ───────────────────────────── COS-02 ─────────────────────────────
  {
    id: 'COS-02',
    level: 3,
    topicIds: ['COS.2'],
    title: t("Clasificación y comportamiento de costos", "Cost classification and behavior"),
    summary: t(
      "Los costos se clasifican según a qué se pueden ligar (directos o indirectos), para qué función sirven y cuándo se restan (del producto o del periodo), y según cómo cambian cuando cambia el volumen (fijos, variables o mixtos).",
      "Costs are classified by what they can be traced to (direct or indirect), which function they serve and when they are deducted (product or period), and by how they change when volume changes (fixed, variable or mixed).",
    ),
    minutes: 16,
    objectives: [
      t("Distinguir costos directos e indirectos respecto a un objeto de costo.", "Distinguish direct and indirect costs relative to a cost object."),
      t("Clasificar costos por función y como costos del producto o del periodo.", "Classify costs by function and as product or period costs."),
      t("Explicar cómo se comportan los costos fijos, variables y mixtos en total y por unidad.", "Explain how fixed, variable and mixed costs behave in total and per unit."),
    ],
    theory: [
      {
        heading: t("Objeto de costo: directos e indirectos", "Cost object: direct and indirect"),
        body: [
          t(
            "Un **objeto de costo** es aquello cuyo costo quieres conocer: un producto, un pedido, un cliente o un departamento. Antes de clasificar un costo como directo o indirecto, siempre pregunta: **¿directo respecto a qué?**",
            "A **cost object** is anything whose cost you want to know: a product, an order, a customer or a department. Before classifying a cost as direct or indirect, always ask: **direct relative to what?**",
          ),
          t(
            "Un **costo directo** se puede ligar de forma clara y económica al objeto: la harina de un pastel de boda. Un **costo indirecto** se comparte entre varios objetos y hay que repartirlo con algún criterio: la renta del local donde se hacen todos los pasteles.",
            "A **direct cost** can be clearly and cheaply traced to the object: the flour in a wedding cake. An **indirect cost** is shared among several objects and must be spread using some criterion: the rent of the shop where all cakes are made.",
          ),
          t(
            "Mini ejemplo: el sueldo del gerente de una sucursal es **indirecto** para cada pastel, pero **directo** si el objeto de costo es la sucursal completa. El mismo costo cambia de etiqueta según el objeto.",
            "Mini example: a branch manager's salary is **indirect** for each cake, but **direct** if the cost object is the whole branch. The same cost changes label depending on the object.",
          ),
        ],
      },
      {
        heading: t("Por función: costos del producto y del periodo", "By function: product and period costs"),
        body: [
          t(
            "Por **función**, los costos se agrupan en **producción** (todo lo de la fábrica), **venta** (publicidad, comisiones, fletes a clientes) y **administración** (oficinas, contabilidad, dirección). En lenguaje cotidiano a los dos últimos se les llama gastos de operación.",
            "By **function**, costs are grouped into **production** (everything in the factory), **selling** (advertising, commissions, delivery to customers) and **administration** (offices, accounting, management). In everyday language the last two are called operating expenses.",
          ),
          t(
            "Esto lleva a otra clasificación según **cuándo** se restan. Los **costos del producto** (MPD, MOD y CIF) se quedan en el inventario hasta que vendes. Los **costos del periodo** (venta y administración) se restan en el mes en que ocurren, vendas o no.",
            "This leads to another classification by **when** they are deducted. **Product costs** (DM, DL and MOH) stay in inventory until you sell. **Period costs** (selling and administration) are deducted in the month they happen, whether you sell or not.",
          ),
          t(
            "Mini ejemplo: una fábrica de huaraches paga $8,000 de luz de la planta y $3,000 de luz de las oficinas. Los $8,000 son costo del producto (CIF); los $3,000 son gasto de administración del periodo.",
            "Mini example: a sandal factory pays $8,000 for plant electricity and $3,000 for office electricity. The $8,000 is a product cost (MOH); the $3,000 is an administrative period expense.",
          ),
        ],
        bullets: [
          t("Producción → costo del producto (va al inventario).", "Production → product cost (goes to inventory)."),
          t("Venta → costo del periodo (gasto de venta).", "Selling → period cost (selling expense)."),
          t("Administración → costo del periodo (gasto de administración).", "Administration → period cost (administrative expense)."),
        ],
      },
      {
        heading: t("Comportamiento: fijos, variables y mixtos", "Behavior: fixed, variable and mixed"),
        body: [
          t(
            "Por **comportamiento**, miras qué le pasa al costo cuando produces más o menos. Un **costo variable** sube en proporción al volumen: si haces el doble de tortas, compras el doble de bolillos. Un **costo fijo** se mantiene igual en total dentro de cierto rango: la renta del local es la misma si vendes 100 o 300 tortas.",
            "By **behavior**, you look at what happens to the cost when you produce more or less. A **variable cost** rises in proportion to volume: if you make twice as many sandwiches, you buy twice as many rolls. A **fixed cost** stays the same in total within a certain range: the shop rent is the same whether you sell 100 or 300 sandwiches.",
          ),
          t(
            "Ojo con el efecto **por unidad**, que es al revés: el variable es **constante por unidad** y el fijo **baja por unidad** cuando produces más, porque se reparte entre más piezas. Ese rango donde las reglas se cumplen se llama **rango relevante**; si creces mucho (rentar otro local), el fijo da un salto.",
            "Watch the **per-unit** effect, which is the opposite: variable cost is **constant per unit** and fixed cost **falls per unit** as you produce more, because it is spread over more pieces. The range where these rules hold is called the **relevant range**; if you grow a lot (renting a second shop), fixed cost jumps.",
          ),
          t(
            "Un **costo mixto** (o semivariable) tiene una parte fija y otra variable, como el recibo del celular con renta mensual más consumo extra. Mini ejemplo: renta $30,000 y material $50 por pieza. Con 1,000 piezas el costo unitario es 30 + 50 = $80; con 1,500 piezas es 20 + 50 = $70.",
            "A **mixed** (or semi-variable) **cost** has a fixed part and a variable part, like a phone bill with a monthly plan plus extra usage. Mini example: rent $30,000 and materials $50 per piece. With 1,000 pieces unit cost is 30 + 50 = $80; with 1,500 pieces it is 20 + 50 = $70.",
          ),
        ],
        formulas: [
          {
            name: t("Costo total (sirve también para un costo mixto)", "Total cost (also works for a mixed cost)"),
            expression: "Costo total = Costo fijo + (Costo variable por unidad × Unidades)",
            variables: [
              { symbol: "Costo total", meaning: t("Todo lo que cuesta el periodo, en pesos.", "Everything the period costs, in pesos.") },
              { symbol: "Costo fijo", meaning: t("La parte que no cambia con el volumen (renta, cuota mensual), en pesos.", "The part that does not change with volume (rent, monthly fee), in pesos.") },
              { symbol: "Costo variable por unidad", meaning: t("Lo que cuesta cada pieza, kilómetro o uso extra, en pesos por unidad.", "What each piece, kilometer or extra use costs, in pesos per unit.") },
              { symbol: "Unidades", meaning: t("Cuántas piezas produces (o kilómetros, horas, etc. que usas).", "How many pieces you produce (or kilometers, hours, etc. you use).") },
            ],
            steps: [
              t("Multiplica el costo variable por unidad por las unidades: esa es la parte variable.", "Multiply the variable cost per unit by the units: that is the variable part."),
              t("Súmale el costo fijo completo.", "Add the full fixed cost."),
            ],
            example: t(
              "Un taller de tazas tiene fijo $18,000 y variable $30 por taza. Con 1,000 tazas: 30 × 1,000 = 30,000; 18,000 + 30,000 = **$48,000**. Con 2,000 tazas: 30 × 2,000 = 60,000; 18,000 + 60,000 = **$78,000**.",
              "A mug workshop has fixed cost $18,000 and variable $30 per mug. With 1,000 mugs: 30 × 1,000 = 30,000; 18,000 + 30,000 = **$48,000**. With 2,000 mugs: 30 × 2,000 = 60,000; 18,000 + 60,000 = **$78,000**.",
            ),
            mistake: t(
              "Creer que si el volumen se duplica, el costo total también se duplica. Solo se duplica la parte variable; el fijo se queda igual.",
              "Thinking that if volume doubles, total cost doubles too. Only the variable part doubles; the fixed part stays the same.",
            ),
          },
          {
            name: t("Costo unitario (cuánto cuesta cada pieza)", "Unit cost (what each piece costs)"),
            expression: "Costo unitario = Costo total ÷ Unidades",
            variables: [
              { symbol: "Costo total", meaning: t("Costo fijo + parte variable, en pesos.", "Fixed cost + variable part, in pesos.") },
              { symbol: "Unidades", meaning: t("Piezas producidas en el periodo.", "Pieces produced in the period.") },
            ],
            steps: [
              t("Calcula primero el costo total con la fórmula anterior.", "First compute total cost with the previous formula."),
              t("Divídelo entre las unidades producidas.", "Divide it by the units produced."),
            ],
            example: t(
              "Con las tazas: 48,000 ÷ 1,000 = **$48** por taza; 78,000 ÷ 2,000 = **$39** por taza.",
              "With the mugs: 48,000 ÷ 1,000 = **$48** per mug; 78,000 ÷ 2,000 = **$39** per mug.",
            ),
            interpret: t(
              "Si el costo unitario baja al producir más, es porque el fijo se reparte entre más piezas (de $18 a $9 por taza); el variable sigue en $30.",
              "If unit cost falls as you produce more, it is because the fixed cost is spread over more pieces ($18 to $9 per mug); the variable part stays at $30.",
            ),
          },
        ],
      },
    ],
    examples: [
      {
        title: t("Clasificar los costos de una pizzería", "Classifying a pizzeria's costs"),
        problem: t(
          "Una pizzería quiere clasificar: queso y harina; sueldo del pizzero; renta del local; reparto en moto a domicilio; sueldo de la contadora. El objeto de costo es cada pizza.",
          "A pizzeria wants to classify: cheese and flour; the pizza maker's wage; shop rent; motorcycle home delivery; the accountant's salary. The cost object is each pizza.",
        ),
        steps: [
          t("Queso y harina: directo, del producto, variable.", "Cheese and flour: direct, product, variable."),
          t("Sueldo del pizzero: directo (MOD), del producto.", "Pizza maker's wage: direct (DL), product."),
          t("Renta del local: indirecto (CIF), del producto, fijo.", "Shop rent: indirect (MOH), product, fixed."),
          t("Reparto a domicilio: costo de venta, del periodo, variable por pedido.", "Home delivery: selling cost, period, variable per order."),
          t("Sueldo de la contadora: administración, del periodo, fijo.", "Accountant's salary: administration, period, fixed."),
        ],
        result: t(
          "Un mismo costo tiene varias etiquetas a la vez: por objeto, por función y por comportamiento. Cada clasificación responde una pregunta distinta.",
          "One cost carries several labels at once: by object, by function and by behavior. Each classification answers a different question.",
        ),
      },
      {
        title: t("Costo unitario a distintos volúmenes", "Unit cost at different volumes"),
        problem: t(
          "Un taller de playeras estampadas tiene costos fijos de $24,000 al mes y un costo variable de $60 por playera. Calcula el costo total y unitario con 400 y con 800 playeras.",
          "A printed T-shirt shop has fixed costs of $24,000 per month and a variable cost of $60 per shirt. Compute total and unit cost with 400 and with 800 shirts.",
        ),
        steps: [
          t("Con 400: total = 24,000 + 60 × 400 = $48,000; unitario = 48,000 ÷ 400 = $120.", "With 400: total = 24,000 + 60 × 400 = $48,000; unit = 48,000 ÷ 400 = $120."),
          t("Con 800: total = 24,000 + 60 × 800 = $72,000; unitario = 72,000 ÷ 800 = $90.", "With 800: total = 24,000 + 60 × 800 = $72,000; unit = 72,000 ÷ 800 = $90."),
          t("El fijo por playera bajó de $60 a $30; el variable siguió en $60.", "Fixed cost per shirt fell from $60 to $30; variable stayed at $60."),
        ],
        result: t(
          "Al duplicar el volumen, el costo total sube 50 % pero el unitario baja de $120 a $90, porque el fijo se reparte entre más playeras.",
          "Doubling volume raises total cost by 50% but unit cost falls from $120 to $90, because the fixed cost is spread over more shirts.",
        ),
      },
    ],
    keyPoints: [
      t("Directo o indirecto siempre depende del objeto de costo elegido.", "Direct or indirect always depends on the chosen cost object."),
      t("Costos del producto van al inventario; costos del periodo se restan en el mes.", "Product costs go to inventory; period costs are deducted in the month."),
      t("Variable: cambia en total, constante por unidad.", "Variable: changes in total, constant per unit."),
      t("Fijo: constante en total dentro del rango relevante, baja por unidad al producir más.", "Fixed: constant in total within the relevant range, falls per unit as output rises."),
      t("Mixto: parte fija más parte variable.", "Mixed: a fixed part plus a variable part."),
    ],
    exerciseIds: ['COS-02-E1', 'COS-02-E2', 'COS-02-E3', 'COS-02-E4', 'COS-02-E5', 'COS-02-E6'],
  },

  // ───────────────────────────── COS-03 ─────────────────────────────
  {
    id: 'COS-03',
    level: 3,
    topicIds: ['COS.3'],
    title: t("Costeo por órdenes de producción", "Job order costing"),
    summary: t(
      "El costeo por órdenes acumula materia prima, mano de obra e indirectos aplicados con una tasa predeterminada en una hoja de costos por cada pedido distinto.",
      "Job order costing accumulates materials, labor and overhead applied with a predetermined rate on a cost sheet for each distinct order.",
    ),
    minutes: 17,
    objectives: [
      t("Reconocer qué negocios usan costeo por órdenes y para qué sirve la hoja de costos.", "Recognize which businesses use job order costing and what the job cost sheet is for."),
      t("Calcular una tasa predeterminada de costos indirectos y aplicarla a una orden.", "Compute a predetermined overhead rate and apply it to a job."),
      t("Identificar costos indirectos subaplicados o sobreaplicados y registrar el costo de una orden vendida.", "Identify underapplied or overapplied overhead and record the cost of a job sold."),
    ],
    theory: [
      {
        heading: t("Cuándo se usa y la hoja de costos", "When to use it and the job cost sheet"),
        body: [
          t(
            "El **costeo por órdenes** sirve cuando cada pedido es **distinto**: una imprenta que hace invitaciones de boda personalizadas, un taller de cocinas integrales a la medida o una constructora que levanta una casa por encargo. Cada pedido se llama **orden de producción** y tiene su propio número.",
            "**Job order costing** is used when each order is **different**: a print shop making personalized wedding invitations, a custom kitchen workshop or a builder putting up a house on commission. Each order is called a **job** and has its own number.",
          ),
          t(
            "Para cada orden se abre una **hoja de costos**: una ficha donde se anotan la materia prima que salió del almacén para ese pedido, las horas de mano de obra que se le dedicaron y los costos indirectos que le tocan. Al terminar, la hoja dice cuánto costó exactamente esa orden.",
            "For each job a **job cost sheet** is opened: a record listing the materials issued from the storeroom for that order, the labor hours spent on it and the overhead it is charged. When finished, the sheet shows exactly what that job cost.",
          ),
          t(
            "Mini ejemplo: la orden #45 de una imprenta (500 invitaciones) usa $8,000 de papel y tinta y 20 horas de impresor a $150. En su hoja ya van $11,000 antes de sumar los indirectos.",
            "Mini example: a print shop's job #45 (500 invitations) uses $8,000 of paper and ink and 20 printer hours at $150. Its sheet already shows $11,000 before adding overhead.",
          ),
        ],
        bullets: [
          t("MPD: según las requisiciones de almacén de esa orden.", "DM: per the storeroom requisitions for that job."),
          t("MOD: horas registradas en la orden × tarifa por hora.", "DL: hours logged on the job × hourly rate."),
          t("CIF: se aplican con una tasa predeterminada.", "MOH: applied using a predetermined rate."),
        ],
        formulas: [
          {
            name: t("Costo total de una orden", "Total cost of a job"),
            expression: "Costo de la orden = MPD + (Horas MOD × Tarifa por hora) + CIF aplicados",
            variables: [
              { symbol: "MPD", meaning: t("Material que salió del almacén para esa orden, en pesos.", "Material issued from the storeroom for that job, in pesos.") },
              { symbol: "Horas MOD", meaning: t("Horas de mano de obra directa trabajadas en esa orden.", "Direct labor hours worked on that job.") },
              { symbol: "Tarifa por hora", meaning: t("Lo que se paga al trabajador por cada hora, en pesos.", "What the worker is paid per hour, in pesos.") },
              { symbol: "CIF aplicados", meaning: t("Indirectos que le tocan a la orden: tasa predeterminada × base que usó (lo ves en la siguiente sección), en pesos.", "Overhead charged to the job: predetermined rate × base it used (see the next section), in pesos.") },
            ],
            steps: [
              t("Anota la MPD de la orden.", "Write down the job's DM."),
              t("Calcula la MOD: horas × tarifa por hora.", "Compute DL: hours × hourly rate."),
              t("Calcula los CIF aplicados: tasa × horas (u otra base) de la orden.", "Compute applied overhead: rate × hours (or other base) of the job."),
              t("Suma los tres.", "Add the three."),
            ],
            example: t(
              "Una orden de 40 libreros usa $6,000 de madera y 30 horas a $140; los CIF se aplican a $60 por hora. MOD = 30 × 140 = 4,200. CIF = 30 × 60 = 1,800. Total = 6,000 + 4,200 + 1,800 = **$12,000**.",
              "A job of 40 bookcases uses $6,000 of wood and 30 hours at $140; overhead is applied at $60 per hour. DL = 30 × 140 = 4,200. MOH = 30 × 60 = 1,800. Total = 6,000 + 4,200 + 1,800 = **$12,000**.",
            ),
            mistake: t(
              "Olvidar los CIF y quedarse solo con material y mano de obra: la orden queda subcosteada y la cotizas barata.",
              "Forgetting overhead and keeping only materials and labor: the job is undercosted and you quote it too cheap.",
            ),
          },
          {
            name: t("Costo por unidad de la orden", "Cost per unit of the job"),
            expression: "Costo por unidad = Costo de la orden ÷ Unidades de la orden",
            variables: [
              { symbol: "Costo de la orden", meaning: t("El total de la hoja de costos, en pesos.", "The cost sheet total, in pesos.") },
              { symbol: "Unidades de la orden", meaning: t("Cuántas piezas incluye el pedido.", "How many pieces the order includes.") },
            ],
            steps: [
              t("Obtén el costo total de la orden.", "Get the job's total cost."),
              t("Divídelo entre las piezas del pedido.", "Divide it by the pieces in the order."),
            ],
            example: t(
              "Con los libreros: 12,000 ÷ 40 = **$300** por librero.",
              "With the bookcases: 12,000 ÷ 40 = **$300** per bookcase.",
            ),
            interpret: t(
              "Ese es el piso: si vendes cada pieza por menos, pierdes. El precio debe quedar arriba para dejar ganancia.",
              "That is the floor: if you sell each piece for less, you lose money. The price must be above it to leave a profit.",
            ),
          },
        ],
      },
      {
        heading: t("La tasa predeterminada de indirectos", "The predetermined overhead rate"),
        body: [
          t(
            "Los CIF reales (luz, renta, supervisor) se conocen hasta fin de mes o de año, pero el cliente quiere su cotización hoy. Por eso se usa una **tasa predeterminada**: al inicio del año divides los CIF **presupuestados** entre una **base** también presupuestada, como horas de mano de obra directa u horas máquina.",
            "Actual overhead (power, rent, supervisor) is only known at month-end or year-end, but the customer wants a quote today. That is why a **predetermined rate** is used: at the start of the year you divide **budgeted** overhead by a **base** that is also budgeted, such as direct labor hours or machine hours.",
          ),
          t(
            "Luego cada orden recibe CIF **aplicados** = tasa × base **real** que consumió. Elige una base que de verdad \"mueva\" los indirectos: si la fábrica es muy automatizada, las horas máquina suelen explicar mejor el consumo de luz y mantenimiento.",
            "Then each job receives **applied** overhead = rate × the **actual** base it used. Choose a base that truly \"drives\" overhead: in a highly automated plant, machine hours usually explain power and maintenance use better.",
          ),
          t(
            "Mini ejemplo: CIF presupuestados $600,000 y 12,000 horas MOD presupuestadas → tasa $50 por hora. La orden #45 usó 20 horas, así que recibe 20 × 50 = $1,000 de CIF.",
            "Mini example: budgeted overhead $600,000 and 12,000 budgeted DL hours → rate $50 per hour. Job #45 used 20 hours, so it receives 20 × 50 = $1,000 of overhead.",
          ),
        ],
        formulas: [
          {
            name: t("Tasa predeterminada de CIF", "Predetermined overhead rate"),
            expression: "Tasa predeterminada = CIF presupuestados ÷ Base presupuestada",
            variables: [
              { symbol: "CIF presupuestados", meaning: t("Los indirectos que esperas gastar en el año, en pesos (un estimado hecho al inicio).", "The overhead you expect to spend in the year, in pesos (an estimate made at the start).") },
              { symbol: "Base presupuestada", meaning: t("Las horas de MOD u horas máquina que esperas usar en el año.", "The DL hours or machine hours you expect to use in the year.") },
            ],
            steps: [
              t("Toma los CIF presupuestados del año (no los reales).", "Take the year's budgeted overhead (not actual)."),
              t("Divídelos entre la base presupuestada: el resultado es pesos por hora.", "Divide by the budgeted base: the result is pesos per hour."),
            ],
            example: t(
              "Un taller espera CIF de $750,000 y 25,000 horas máquina. Tasa = 750,000 ÷ 25,000 = **$30 por hora máquina**.",
              "A workshop expects overhead of $750,000 and 25,000 machine hours. Rate = 750,000 ÷ 25,000 = **$30 per machine hour**.",
            ),
            mistake: t(
              "Dividir al revés (horas ÷ pesos) o usar los CIF reales, que aún no se conocen cuando se fija la tasa.",
              "Dividing the other way (hours ÷ pesos) or using actual overhead, which is not yet known when the rate is set.",
            ),
          },
          {
            name: t("CIF aplicados a una orden", "Overhead applied to a job"),
            expression: "CIF aplicados = Tasa × Base real de la orden",
            variables: [
              { symbol: "Tasa", meaning: t("La tasa predeterminada, en pesos por hora.", "The predetermined rate, in pesos per hour.") },
              { symbol: "Base real de la orden", meaning: t("Las horas (de MOD o de máquina) que esa orden realmente usó.", "The hours (DL or machine) that job actually used.") },
            ],
            steps: [
              t("Revisa cuántas horas reales usó la orden, en la misma base de la tasa.", "Check how many actual hours the job used, in the same base as the rate."),
              t("Multiplica esas horas por la tasa.", "Multiply those hours by the rate."),
            ],
            example: t(
              "Con la tasa de $30, una orden que usó 45 horas máquina recibe 45 × 30 = **$1,350** de CIF.",
              "With the $30 rate, a job that used 45 machine hours receives 45 × 30 = **$1,350** of overhead.",
            ),
            mistake: t(
              "Multiplicar la tasa por los pesos de MOD en lugar de por las horas, o por las horas presupuestadas del año en lugar de las reales de la orden.",
              "Multiplying the rate by DL pesos instead of hours, or by the year's budgeted hours instead of the job's actual hours.",
            ),
          },
        ],
      },
      {
        heading: t("Flujo del costo y ajuste de indirectos", "Cost flow and overhead adjustment"),
        body: [
          t(
            "Mientras se trabaja, la orden está en **producción en proceso**. Al terminarla, su costo pasa a **producto terminado** (inventario). Cuando se entrega y se vende, ese costo sale del inventario y se registra como **costo de ventas**: cargo a Costo de ventas y abono a Inventarios.",
            "While being worked on, the job is in **work in process**. When finished, its cost moves to **finished goods** (inventory). When it is delivered and sold, that cost leaves inventory and is recorded as **cost of goods sold**: debit Cost of goods sold and credit Inventory.",
          ),
          t(
            "Al cierre comparas CIF aplicados contra CIF reales. Si aplicaste **menos** de lo que realmente gastaste, hay CIF **subaplicados** (el costo quedó bajo). Si aplicaste **más**, hay CIF **sobreaplicados**. Cuando la diferencia es pequeña, lo común es ajustarla contra el costo de ventas.",
            "At closing you compare applied overhead against actual overhead. If you applied **less** than you really spent, overhead is **underapplied** (cost was understated). If you applied **more**, it is **overapplied**. When the difference is small, the usual practice is to adjust it against cost of goods sold.",
          ),
          t(
            "Mini ejemplo: aplicaste 12,500 horas × $50 = $625,000 y los CIF reales fueron $610,000. Aplicaste $15,000 de más: CIF sobreaplicados por $15,000.",
            "Mini example: you applied 12,500 hours × $50 = $625,000 and actual overhead was $610,000. You applied $15,000 too much: overhead overapplied by $15,000.",
          ),
        ],
        formulas: [
          {
            name: t("CIF subaplicados o sobreaplicados", "Underapplied or overapplied overhead"),
            expression: "Diferencia = CIF reales − CIF aplicados",
            variables: [
              { symbol: "CIF reales", meaning: t("Los indirectos que de verdad se gastaron en el periodo, en pesos.", "The overhead actually spent in the period, in pesos.") },
              { symbol: "CIF aplicados", meaning: t("Tasa × horas reales de todas las órdenes del periodo, en pesos.", "Rate × actual hours of all jobs in the period, in pesos.") },
            ],
            steps: [
              t("Calcula los CIF aplicados del periodo: tasa × horas reales totales.", "Compute the period's applied overhead: rate × total actual hours."),
              t("Réstalos a los CIF reales.", "Subtract them from actual overhead."),
              t("Lee el signo: positivo = subaplicados; negativo = sobreaplicados.", "Read the sign: positive = underapplied; negative = overapplied."),
            ],
            example: t(
              "Tasa $30, horas reales 9,500, CIF reales $293,500. Aplicados = 9,500 × 30 = 285,000. Diferencia = 293,500 − 285,000 = **$8,500 subaplicados**.",
              "Rate $30, actual hours 9,500, actual overhead $293,500. Applied = 9,500 × 30 = 285,000. Difference = 293,500 − 285,000 = **$8,500 underapplied**.",
            ),
            interpret: t(
              "Subaplicados: aplicaste menos de lo gastado, las órdenes quedaron baratas y el ajuste **sube** el costo de ventas. Sobreaplicados: aplicaste de más y el ajuste lo **baja**.",
              "Underapplied: you applied less than you spent, jobs were undercosted and the adjustment **raises** cost of goods sold. Overapplied: you applied too much and the adjustment **lowers** it.",
            ),
            mistake: t(
              "Confundir los nombres: si lo aplicado es menor que lo real es **sub**aplicado, aunque lo real esté \"arriba\".",
              "Mixing up the names: if applied is less than actual it is **under**applied, even though actual is \"above\".",
            ),
          },
        ],
      },
    ],
    examples: [
      {
        title: t("Hoja de costos de la orden #45", "Job cost sheet for job #45"),
        problem: t(
          "La imprenta del ejemplo aplica CIF a $100 por hora de MOD. La orden #45 usó $8,000 de materiales y 20 horas de impresor a $150. Son 500 invitaciones. Calcula el costo total y por invitación.",
          "The print shop applies overhead at $100 per DL hour. Job #45 used $8,000 of materials and 20 printer hours at $150. It is 500 invitations. Compute total cost and cost per invitation.",
        ),
        steps: [
          t("MPD = $8,000.", "DM = $8,000."),
          t("MOD = 20 × 150 = $3,000.", "DL = 20 × 150 = $3,000."),
          t("CIF aplicados = 20 × 100 = $2,000.", "Applied MOH = 20 × 100 = $2,000."),
          t("Costo total = 8,000 + 3,000 + 2,000 = $13,000.", "Total cost = 8,000 + 3,000 + 2,000 = $13,000."),
          t("Costo por invitación = 13,000 ÷ 500 = $26.", "Cost per invitation = 13,000 ÷ 500 = $26."),
        ],
        result: t(
          "La orden cuesta $13,000, es decir $26 por invitación. Con ese dato la imprenta puede cotizar un precio que deje margen.",
          "The job costs $13,000, or $26 per invitation. With that figure the print shop can quote a price that leaves a margin.",
        ),
      },
      {
        title: t("Tasa predeterminada y ajuste al cierre", "Predetermined rate and year-end adjustment"),
        problem: t(
          "Un taller presupuesta CIF por $360,000 y 9,000 horas máquina. En el año usa 8,800 horas máquina y los CIF reales son $356,000. Calcula la tasa, los CIF aplicados y la diferencia.",
          "A workshop budgets overhead of $360,000 and 9,000 machine hours. During the year it uses 8,800 machine hours and actual overhead is $356,000. Compute the rate, applied overhead and the difference.",
        ),
        steps: [
          t("Tasa = 360,000 ÷ 9,000 = $40 por hora máquina.", "Rate = 360,000 ÷ 9,000 = $40 per machine hour."),
          t("CIF aplicados = 8,800 × 40 = $352,000.", "Applied MOH = 8,800 × 40 = $352,000."),
          t("Diferencia = 356,000 − 352,000 = $4,000; se aplicó menos de lo real.", "Difference = 356,000 − 352,000 = $4,000; less than actual was applied."),
        ],
        result: t(
          "Hay CIF subaplicados por $4,000: las órdenes quedaron un poco subcosteadas y el ajuste aumenta el costo de ventas.",
          "Overhead is underapplied by $4,000: jobs were slightly undercosted and the adjustment increases cost of goods sold.",
        ),
      },
    ],
    keyPoints: [
      t("Órdenes: para pedidos distintos o a la medida; cada uno tiene su hoja de costos.", "Job order: for distinct or custom orders; each has its own cost sheet."),
      t("MPD y MOD se cargan directo a la orden; los CIF se aplican con tasa predeterminada.", "DM and DL are charged directly to the job; overhead is applied with a predetermined rate."),
      t("Tasa = CIF presupuestados ÷ base presupuestada; aplicados = tasa × base real.", "Rate = budgeted overhead ÷ budgeted base; applied = rate × actual base."),
      t("Aplicados < reales: subaplicados; aplicados > reales: sobreaplicados.", "Applied < actual: underapplied; applied > actual: overapplied."),
      t("Al vender la orden: cargo a Costo de ventas, abono a Inventarios.", "When the job is sold: debit Cost of goods sold, credit Inventory."),
    ],
    exerciseIds: ['COS-03-E1', 'COS-03-E2', 'COS-03-E3', 'COS-03-E4', 'COS-03-E5', 'COS-03-E6'],
  },

  // ───────────────────────────── COS-04 ─────────────────────────────
  {
    id: 'COS-04',
    level: 3,
    topicIds: ['COS.4'],
    title: t("Costeo por procesos", "Process costing"),
    summary: t(
      "El costeo por procesos acumula los costos por departamento durante un periodo y los divide entre las unidades equivalentes para obtener un costo unitario promedio de productos idénticos fabricados en serie.",
      "Process costing accumulates costs by department over a period and divides them by equivalent units to get an average unit cost for identical products made in series.",
    ),
    minutes: 18,
    objectives: [
      t("Reconocer cuándo conviene el costeo por procesos y en qué se diferencia del de órdenes.", "Recognize when process costing fits and how it differs from job order costing."),
      t("Calcular unidades equivalentes según el grado de avance.", "Compute equivalent units based on degree of completion."),
      t("Repartir el costo de un departamento entre unidades terminadas e inventario final en proceso.", "Assign a department's cost between completed units and ending work in process."),
    ],
    theory: [
      {
        heading: t("Producción continua, costos por departamento", "Continuous production, costs by department"),
        body: [
          t(
            "Piensa en una **embotelladora de agua**: todas las botellas son iguales y la línea no se detiene. No tiene sentido una hoja de costos por botella. En el **costeo por procesos** los costos se juntan por **departamento** (por ejemplo, purificado, embotellado y etiquetado) durante un periodo, y luego se dividen entre lo producido.",
            "Think of a **water bottling plant**: every bottle is the same and the line never stops. A cost sheet per bottle makes no sense. In **process costing** costs are gathered by **department** (for example, purification, bottling and labeling) over a period, and then divided by what was produced.",
          ),
          t(
            "Se usa en refrescos, cemento, papel, harina o tortillas industriales: producción **continua, en serie y homogénea**. El resultado es un **costo unitario promedio**. Lo que termina un departamento se **transfiere** al siguiente junto con su costo, como una posta en una carrera de relevos.",
            "It is used for soft drinks, cement, paper, flour or industrial tortillas: **continuous, mass and uniform** production. The result is an **average unit cost**. What one department finishes is **transferred** to the next together with its cost, like a baton in a relay race.",
          ),
          t(
            "Mini ejemplo: una tortillería industrial produce 30,000 kg en el mes con costos de $360,000. Si no hay nada a medio hacer, el costo es 360,000 ÷ 30,000 = $12 por kilo.",
            "Mini example: an industrial tortilla maker produces 30,000 kg in the month with costs of $360,000. If nothing is half made, the cost is 360,000 ÷ 30,000 = $12 per kilo.",
          ),
        ],
        bullets: [
          t("Órdenes: productos distintos, costo por pedido.", "Job order: different products, cost per order."),
          t("Procesos: productos iguales, costo por departamento y periodo.", "Process: identical products, cost per department and period."),
          t("Procesos: el costo de lo terminado se transfiere al siguiente departamento.", "Process: the cost of finished output is transferred to the next department."),
        ],
      },
      {
        heading: t("Unidades equivalentes", "Equivalent units"),
        body: [
          t(
            "El problema: al cierre del mes casi siempre quedan unidades **a medio hacer**. No puedes contarlas como completas, pero tampoco como cero. La solución son las **unidades equivalentes**: expresar lo incompleto como si fueran unidades terminadas.",
            "The problem: at month-end there are almost always units **half made**. You cannot count them as complete, but not as zero either. The solution is **equivalent units**: expressing incomplete work as if it were finished units.",
          ),
          t(
            "Si tienes 2,000 unidades al **50 %** de avance, equivalen a 1,000 unidades completas. El avance puede ser distinto para cada elemento: muchas veces la **materia prima** entra completa al inicio (100 %), mientras que la **conversión** (MOD + CIF) va avanzando poco a poco.",
            "If you have 2,000 units **50%** complete, they equal 1,000 complete units. Completion can differ by element: often **materials** go in fully at the start (100%), while **conversion** (DL + MOH) progresses gradually.",
          ),
          t(
            "Mini ejemplo: terminaste 10,000 frascos y quedan 2,000 al 50 % de conversión, con material agregado al inicio. Unidades equivalentes de materiales = 10,000 + 2,000 = 12,000; de conversión = 10,000 + 1,000 = 11,000.",
            "Mini example: you finished 10,000 jars and 2,000 remain 50% through conversion, with materials added at the start. Equivalent units for materials = 10,000 + 2,000 = 12,000; for conversion = 10,000 + 1,000 = 11,000.",
          ),
        ],
        formulas: [
          {
            name: t("Unidades equivalentes (UE)", "Equivalent units (EU)"),
            expression: "Unidades equivalentes = Unidades terminadas + (Unidades en proceso final × % de avance)",
            variables: [
              { symbol: "Unidades terminadas", meaning: t("Piezas que se acabaron y pasaron al siguiente departamento (cuentan al 100 %).", "Pieces finished and passed to the next department (they count at 100%).") },
              { symbol: "Unidades en proceso final", meaning: t("Piezas que quedaron a medio hacer al cierre.", "Pieces left half made at closing.") },
              { symbol: "% de avance", meaning: t("Qué tan terminadas están esas piezas en ese elemento (materiales o conversión), en %.", "How complete those pieces are for that element (materials or conversion), in %.") },
            ],
            steps: [
              t("Convierte el avance a decimal: 30 % = 0.30.", "Convert completion to a decimal: 30% = 0.30."),
              t("Multiplica las unidades en proceso por ese decimal.", "Multiply the units in process by that decimal."),
              t("Súmale las unidades terminadas.", "Add the finished units."),
              t("Repite por separado para materiales y para conversión, porque su avance puede ser distinto.", "Repeat separately for materials and for conversion, because their completion can differ."),
            ],
            example: t(
              "Se terminaron 6,000 botes y quedan 1,500 al 30 % de conversión; el material entra al inicio. Conversión: 1,500 × 0.30 = 450; 6,000 + 450 = **6,450 UE**. Materiales: 1,500 × 1.00 = 1,500; 6,000 + 1,500 = **7,500 UE**.",
              "6,000 cans were finished and 1,500 remain 30% through conversion; materials go in at the start. Conversion: 1,500 × 0.30 = 450; 6,000 + 450 = **6,450 EU**. Materials: 1,500 × 1.00 = 1,500; 6,000 + 1,500 = **7,500 EU**.",
            ),
            mistake: t(
              "Aplicar el % de conversión también a los materiales cuando estos entraron completos al inicio (ahí el avance es 100 %).",
              "Applying the conversion % to materials too when they went in fully at the start (their completion is 100%).",
            ),
          },
        ],
      },
      {
        heading: t("El informe de costos de producción", "The production cost report"),
        body: [
          t(
            "Con las unidades equivalentes armas el **informe de costos de producción** del departamento en tres pasos: (1) costo por unidad equivalente de cada elemento, (2) costo de las unidades terminadas y transferidas, (3) costo del inventario final en proceso.",
            "With equivalent units you build the department's **production cost report** in three steps: (1) cost per equivalent unit for each element, (2) cost of units completed and transferred, (3) cost of ending work in process.",
          ),
          t(
            "La comprobación final es clave: terminadas + en proceso debe dar **exactamente** el costo total del departamento. Aquí usamos el método de **promedio ponderado** (todo el costo del mes se reparte en partes iguales entre todas las unidades equivalentes) sin inventario inicial para que se entienda la idea; existe también el método **PEPS** (primeras entradas, primeras salidas), que separa el trabajo del mes anterior.",
            "The final check is key: completed + in process must equal **exactly** the department's total cost. Here we use the **weighted-average** method (the month's whole cost is spread evenly over all equivalent units) with no opening inventory so the idea is clear; there is also the **FIFO** method (first in, first out), which separates last month's work.",
          ),
          t(
            "Mini ejemplo: si el costo por unidad equivalente es $20 de material y $15 de conversión, cada unidad terminada vale $35, y una unidad al 50 % de conversión con todo su material vale 20 + 7.50 = $27.50.",
            "Mini example: if the cost per equivalent unit is $20 for materials and $15 for conversion, each finished unit is worth $35, and a unit 50% through conversion with all its materials is worth 20 + 7.50 = $27.50.",
          ),
        ],
        formulas: [
          {
            name: t("Costo por unidad equivalente", "Cost per equivalent unit"),
            expression: "Costo por UE = Costo del elemento ÷ UE del elemento",
            variables: [
              { symbol: "Costo por UE", meaning: t("Lo que cuesta una unidad completa de ese elemento, en pesos.", "What one complete unit of that element costs, in pesos.") },
              { symbol: "Costo del elemento", meaning: t("Lo gastado en el mes en materiales, o en conversión (MOD + CIF), en pesos.", "What was spent in the month on materials, or on conversion (DL + MOH), in pesos.") },
              { symbol: "UE del elemento", meaning: t("Las unidades equivalentes de ese mismo elemento.", "The equivalent units of that same element.") },
            ],
            steps: [
              t("Calcula las UE de materiales y las de conversión por separado.", "Compute materials EU and conversion EU separately."),
              t("Divide el costo de materiales entre las UE de materiales.", "Divide materials cost by materials EU."),
              t("Divide el costo de conversión entre las UE de conversión.", "Divide conversion cost by conversion EU."),
            ],
            example: t(
              "Con los botes: materiales $150,000 ÷ 7,500 = **$20**; conversión $96,750 ÷ 6,450 = **$15**. Un bote terminado cuesta 20 + 15 = $35.",
              "With the cans: materials $150,000 ÷ 7,500 = **$20**; conversion $96,750 ÷ 6,450 = **$15**. A finished can costs 20 + 15 = $35.",
            ),
            mistake: t(
              "Dividir el costo de conversión entre las UE de materiales (o al revés). Cada costo va con sus propias UE.",
              "Dividing conversion cost by materials EU (or the other way). Each cost goes with its own EU.",
            ),
          },
          {
            name: t("Costo de las unidades terminadas y transferidas", "Cost of units completed and transferred"),
            expression: "Costo terminadas = Unidades terminadas × (Costo por UE de materiales + Costo por UE de conversión)",
            variables: [
              { symbol: "Unidades terminadas", meaning: t("Piezas acabadas que pasan al siguiente departamento.", "Finished pieces passed to the next department.") },
              { symbol: "Costo por UE de materiales", meaning: t("Pesos de material por unidad completa.", "Pesos of materials per complete unit.") },
              { symbol: "Costo por UE de conversión", meaning: t("Pesos de MOD + CIF por unidad completa.", "Pesos of DL + MOH per complete unit.") },
            ],
            steps: [
              t("Suma los dos costos por UE: es el costo de una pieza terminada.", "Add the two costs per EU: that is the cost of one finished piece."),
              t("Multiplícalo por las unidades terminadas.", "Multiply it by the finished units."),
            ],
            example: t(
              "Con los botes: 20 + 15 = 35; 6,000 × 35 = **$210,000** transferidos.",
              "With the cans: 20 + 15 = 35; 6,000 × 35 = **$210,000** transferred.",
            ),
          },
          {
            name: t("Costo del inventario final en proceso", "Cost of ending work in process"),
            expression: "Costo en proceso = (UE de materiales en proceso × Costo por UE de materiales) + (UE de conversión en proceso × Costo por UE de conversión)",
            variables: [
              { symbol: "UE de materiales en proceso", meaning: t("Unidades en proceso × % de avance en materiales.", "Units in process × materials completion %.") },
              { symbol: "UE de conversión en proceso", meaning: t("Unidades en proceso × % de avance en conversión.", "Units in process × conversion completion %.") },
              { symbol: "Costo por UE de materiales", meaning: t("Pesos de material por unidad completa.", "Pesos of materials per complete unit.") },
              { symbol: "Costo por UE de conversión", meaning: t("Pesos de MOD + CIF por unidad completa.", "Pesos of DL + MOH per complete unit.") },
            ],
            steps: [
              t("Calcula las UE que quedan en proceso de cada elemento (solo la parte a medio hacer).", "Compute the EU left in process for each element (only the half-made part)."),
              t("Multiplica cada una por su costo por UE.", "Multiply each by its cost per EU."),
              t("Suma los dos resultados.", "Add the two results."),
              t("Comprueba: costo terminadas + costo en proceso = costo total del mes.", "Check: completed cost + in-process cost = the month's total cost."),
            ],
            example: t(
              "Con los botes: materiales 1,500 × 20 = 30,000; conversión 450 × 15 = 6,750; total **$36,750**. Comprobación: 210,000 + 36,750 = 246,750 = 150,000 + 96,750.",
              "With the cans: materials 1,500 × 20 = 30,000; conversion 450 × 15 = 6,750; total **$36,750**. Check: 210,000 + 36,750 = 246,750 = 150,000 + 96,750.",
            ),
            interpret: t(
              "Si la comprobación no cuadra, revisa las UE: casi siempre el error está en el % de avance.",
              "If the check does not tie, review the EU: the error is almost always in the completion %.",
            ),
            mistake: t(
              "Valuar las piezas en proceso como si estuvieran completas (1,500 × 35), lo que infla el inventario.",
              "Valuing the pieces in process as if they were complete (1,500 × 35), which inflates inventory.",
            ),
          },
        ],
      },
    ],
    examples: [
      {
        title: t("Departamento de mezclado de una fábrica de salsas", "Mixing department of a sauce factory"),
        problem: t(
          "En el mes, el depto. de mezclado terminó y transfirió 10,000 frascos; quedan 2,000 en proceso al 50 % de conversión. El material se agrega al inicio. Costos del mes: materiales $240,000; conversión $165,000. No había inventario inicial.",
          "During the month, the mixing department completed and transferred 10,000 jars; 2,000 remain in process 50% through conversion. Materials are added at the start. Costs for the month: materials $240,000; conversion $165,000. There was no opening inventory.",
        ),
        steps: [
          t("UE materiales = 10,000 + 2,000 × 100 % = 12,000; UE conversión = 10,000 + 2,000 × 50 % = 11,000.", "EU materials = 10,000 + 2,000 × 100% = 12,000; EU conversion = 10,000 + 2,000 × 50% = 11,000."),
          t("Costo por UE: materiales 240,000 ÷ 12,000 = $20; conversión 165,000 ÷ 11,000 = $15.", "Cost per EU: materials 240,000 ÷ 12,000 = $20; conversion 165,000 ÷ 11,000 = $15."),
          t("Terminadas y transferidas: 10,000 × (20 + 15) = $350,000.", "Completed and transferred: 10,000 × (20 + 15) = $350,000."),
          t("En proceso final: 2,000 × 20 + 1,000 × 15 = 40,000 + 15,000 = $55,000.", "Ending WIP: 2,000 × 20 + 1,000 × 15 = 40,000 + 15,000 = $55,000."),
          t("Comprobación: 350,000 + 55,000 = 405,000 = 240,000 + 165,000.", "Check: 350,000 + 55,000 = 405,000 = 240,000 + 165,000."),
        ],
        result: t(
          "Se transfieren $350,000 al departamento de envasado y quedan $55,000 en producción en proceso. El costo cuadra con lo gastado en el mes.",
          "$350,000 is transferred to the packaging department and $55,000 stays in work in process. The cost ties to what was spent in the month.",
        ),
      },
      {
        title: t("¿Órdenes o procesos?", "Job order or process?"),
        problem: t(
          "Decide el sistema para: (a) una fábrica de cemento; (b) un taller que hace vestidos de novia a la medida; (c) una planta de jugos embotellados.",
          "Choose the system for: (a) a cement plant; (b) a workshop making custom wedding dresses; (c) a bottled juice plant.",
        ),
        steps: [
          t("Cemento: producción continua y uniforme → procesos.", "Cement: continuous, uniform output → process."),
          t("Vestidos a la medida: cada pedido es distinto → órdenes.", "Custom dresses: each order is different → job order."),
          t("Jugos embotellados: unidades idénticas en serie → procesos.", "Bottled juice: identical units in series → process."),
        ],
        result: t(
          "La pregunta clave es si los productos son iguales y continuos (procesos) o distintos por pedido (órdenes).",
          "The key question is whether products are identical and continuous (process) or different per order (job order).",
        ),
      },
    ],
    keyPoints: [
      t("Procesos: productos iguales en serie; costos por departamento y periodo.", "Process: identical products in series; costs by department and period."),
      t("Unidades equivalentes convierten lo incompleto en unidades completas según su avance.", "Equivalent units turn incomplete work into complete units by degree of completion."),
      t("El avance puede ser distinto para materiales y para conversión.", "Completion can differ for materials and for conversion."),
      t("Costo por UE = costo del elemento ÷ UE del elemento.", "Cost per EU = element cost ÷ element EU."),
      t("Terminadas + en proceso final = costo total del departamento.", "Completed + ending WIP = total department cost."),
    ],
    exerciseIds: ['COS-04-E1', 'COS-04-E2', 'COS-04-E3', 'COS-04-E4', 'COS-04-E5', 'COS-04-E6'],
  },

  // ───────────────────────────── COS-05 ─────────────────────────────
  {
    id: 'COS-05',
    level: 3,
    topicIds: ['COS.5'],
    title: t("Costeo basado en actividades (ABC)", "Activity-based costing (ABC)"),
    summary: t(
      "El costeo ABC reparte los costos indirectos según las actividades que cada producto realmente consume, usando un generador de costo por actividad, lo que evita que unos productos subsidien a otros.",
      "ABC assigns overhead according to the activities each product actually consumes, using a cost driver per activity, which prevents some products from subsidizing others.",
    ),
    minutes: 17,
    objectives: [
      t("Explicar por qué una sola base de reparto puede distorsionar el costo de los productos.", "Explain why a single allocation base can distort product costs."),
      t("Aplicar los pasos del ABC: actividades, generadores de costo, tasas y asignación.", "Apply the ABC steps: activities, cost drivers, rates and assignment."),
      t("Interpretar los resultados del ABC y saber cuándo conviene usarlo.", "Interpret ABC results and know when it is worth using."),
    ],
    theory: [
      {
        heading: t("El problema de repartir con una sola base", "The problem with a single allocation base"),
        body: [
          t(
            "En el costeo tradicional, todos los CIF se reparten con **una sola base**, por ejemplo horas máquina. Funciona bien si todos los productos se parecen. Pero imagina una fábrica de dulces que hace una **paleta clásica** (mucho volumen, proceso sencillo) y una **paleta gourmet** (poco volumen, muchos cambios de molde y revisiones de calidad).",
            "In traditional costing, all overhead is spread with **a single base**, for example machine hours. It works well if all products are similar. But picture a candy factory that makes a **classic lollipop** (high volume, simple process) and a **gourmet lollipop** (low volume, many mold changes and quality checks).",
          ),
          t(
            "Si repartes por horas máquina, la paleta clásica, que usa más horas, carga con casi todos los indirectos, **incluidos** los cambios de molde y revisiones que provoca la gourmet. Resultado: la clásica parece cara y la gourmet parece barata. A esto se le llama **subsidio cruzado**: un producto paga costos que provoca otro.",
            "If you allocate by machine hours, the classic lollipop, which uses more hours, carries almost all overhead, **including** the mold changes and checks caused by the gourmet one. Result: the classic looks expensive and the gourmet looks cheap. This is called **cross-subsidization**: one product pays for costs caused by another.",
          ),
          t(
            "Mini ejemplo: si la gourmet provoca 20 de 30 cambios de molde pero solo usa 1,000 de 5,000 horas máquina, repartir por horas le asigna apenas el 20 % de esos costos, aunque provoca dos terceras partes.",
            "Mini example: if the gourmet causes 20 of 30 mold changes but uses only 1,000 of 5,000 machine hours, allocating by hours gives it just 20% of those costs, even though it causes two thirds.",
          ),
        ],
      },
      {
        heading: t("Los pasos del ABC", "The ABC steps"),
        body: [
          t(
            "El **costeo basado en actividades (ABC)** parte de una idea sencilla: los productos consumen **actividades**, y las actividades consumen **recursos**. Una actividad es una tarea que se repite: preparar máquinas, inspeccionar, comprar materiales, mover material.",
            "**Activity-based costing (ABC)** starts from a simple idea: products consume **activities**, and activities consume **resources**. An activity is a recurring task: setting up machines, inspecting, purchasing materials, moving material.",
          ),
          t(
            "Para cada actividad eliges un **generador de costo** (cost driver): la medida que mejor explica por qué ese costo sube. Para preparar máquinas, el número de preparaciones; para inspeccionar, el número de inspecciones; para comprar, el número de órdenes de compra.",
            "For each activity you choose a **cost driver**: the measure that best explains why that cost rises. For machine setup, the number of setups; for inspection, the number of inspections; for purchasing, the number of purchase orders.",
          ),
          t(
            "Mini ejemplo: preparar máquinas cuesta $60,000 al año y hubo 30 preparaciones, así que la tasa es $2,000 por preparación. Un producto que necesitó 20 preparaciones recibe $40,000.",
            "Mini example: machine setup costs $60,000 a year and there were 30 setups, so the rate is $2,000 per setup. A product that needed 20 setups receives $40,000.",
          ),
        ],
        bullets: [
          t("1. Identifica las actividades principales.", "1. Identify the main activities."),
          t("2. Junta el costo de cada actividad (grupo de costos).", "2. Gather each activity's cost (cost pool)."),
          t("3. Elige el generador de costo de cada actividad.", "3. Choose each activity's cost driver."),
          t("4. Calcula la tasa: costo de la actividad ÷ total del generador.", "4. Compute the rate: activity cost ÷ total driver."),
          t("5. Asigna: tasa × generador que consumió cada producto.", "5. Assign: rate × driver each product consumed."),
        ],
        formulas: [
          {
            name: t("Tasa de una actividad", "Activity rate"),
            expression: "Tasa de la actividad = Costo de la actividad ÷ Total del generador",
            variables: [
              { symbol: "Costo de la actividad", meaning: t("Lo que costó esa actividad en el periodo (por ejemplo, todas las preparaciones), en pesos.", "What that activity cost in the period (for example, all setups), in pesos.") },
              { symbol: "Total del generador", meaning: t("Cuántas veces ocurrió el generador en total: número de preparaciones, inspecciones, órdenes de compra u horas.", "How many times the driver occurred in total: number of setups, inspections, purchase orders or hours.") },
            ],
            steps: [
              t("Toma el costo de una sola actividad.", "Take the cost of a single activity."),
              t("Divídelo entre el total de su generador: el resultado es pesos por preparación, por inspección, etc.", "Divide it by its driver total: the result is pesos per setup, per inspection, etc."),
              t("Repite para cada actividad.", "Repeat for each activity."),
            ],
            example: t(
              "Recibir materiales cuesta $36,000 al año y hubo 240 recepciones. Tasa = 36,000 ÷ 240 = **$150 por recepción**.",
              "Receiving materials costs $36,000 a year and there were 240 receipts. Rate = 36,000 ÷ 240 = **$150 per receipt**.",
            ),
            mistake: t(
              "Dividir entre las unidades producidas en lugar del generador de esa actividad: eso regresa a la distorsión de una sola base.",
              "Dividing by units produced instead of that activity's driver: that brings back the single-base distortion.",
            ),
          },
          {
            name: t("CIF asignados a un producto con ABC", "Overhead assigned to a product under ABC"),
            expression: "CIF asignado = (Tasa₁ × Generador₁) + (Tasa₂ × Generador₂) + …",
            variables: [
              { symbol: "Tasa₁, Tasa₂…", meaning: t("La tasa de cada actividad, en pesos por vez que ocurre el generador.", "Each activity's rate, in pesos per driver occurrence.") },
              { symbol: "Generador₁, Generador₂…", meaning: t("Cuánto de cada generador consumió **ese** producto (sus preparaciones, sus inspecciones…).", "How much of each driver **that** product consumed (its setups, its inspections…).") },
            ],
            steps: [
              t("Para cada actividad, multiplica su tasa por lo que el producto consumió de su generador.", "For each activity, multiply its rate by what the product consumed of its driver."),
              t("Suma los resultados de todas las actividades.", "Add the results of all activities."),
              t("Si quieres el CIF por pieza, divide ese total entre las piezas producidas.", "If you want overhead per piece, divide that total by the pieces produced."),
            ],
            example: t(
              "Recepción $150 y preparación $800. El producto X usó 40 recepciones y 15 preparaciones: 40 × 150 = 6,000; 15 × 800 = 12,000; total **$18,000**. Si hizo 3,000 piezas: 18,000 ÷ 3,000 = $6 por pieza.",
              "Receiving $150 and setup $800. Product X used 40 receipts and 15 setups: 40 × 150 = 6,000; 15 × 800 = 12,000; total **$18,000**. If it made 3,000 pieces: 18,000 ÷ 3,000 = $6 per piece.",
            ),
            interpret: t(
              "Comprueba que la suma de lo asignado a todos los productos dé el total de CIF: ABC no crea ni borra costos, solo los reparte mejor.",
              "Check that the amounts assigned to all products add up to total overhead: ABC neither creates nor removes costs, it only spreads them better.",
            ),
            mistake: t(
              "Cruzar tasas: multiplicar la tasa de preparación por el número de inspecciones.",
              "Mixing up rates: multiplying the setup rate by the number of inspections.",
            ),
          },
        ],
      },
      {
        heading: t("Interpretar y decidir con ABC", "Interpreting and deciding with ABC"),
        body: [
          t(
            "Con ABC suele pasar que los productos de **bajo volumen y complejos** resultan más caros de lo que se creía, y los de **alto volumen y sencillos**, más baratos. Esa información sirve para **fijar precios**, decidir qué productos o clientes son rentables y negociar pedidos mínimos.",
            "With ABC it often turns out that **low-volume, complex** products are more expensive than thought, and **high-volume, simple** ones are cheaper. That information helps **set prices**, decide which products or customers are profitable and negotiate minimum orders.",
          ),
          t(
            "También ayuda a **mejorar procesos**: si ves que las inspecciones cuestan mucho, puedes buscar reducirlas. Algunas actividades **no agregan valor** para el cliente (mover material de un lado a otro, reprocesar), y ABC las hace visibles.",
            "It also helps **improve processes**: if you see that inspections cost a lot, you can try to reduce them. Some activities **do not add value** for the customer (moving material around, rework), and ABC makes them visible.",
          ),
          t(
            "Pero ABC **cuesta**: hay que medir actividades y generadores. Vale la pena cuando los CIF son una parte grande del costo y los productos son muy diversos. Mini ejemplo: una fábrica que solo hace un tipo de ladrillo no gana nada con ABC; una que hace 200 modelos de muebles, sí.",
            "But ABC **costs** money: you must measure activities and drivers. It is worth it when overhead is a large share of cost and products are very diverse. Mini example: a plant that makes a single type of brick gains nothing from ABC; one making 200 furniture models does.",
          ),
        ],
      },
    ],
    examples: [
      {
        title: t("Paleta clásica vs. paleta gourmet", "Classic vs. gourmet lollipop"),
        problem: t(
          "CIF totales $200,000: preparación de máquinas $60,000 (30 preparaciones), inspección $40,000 (200 inspecciones), maquinado $100,000 (5,000 horas máquina). Clásica: 10 preparaciones, 50 inspecciones, 4,000 h; 50,000 paletas. Gourmet: 20 preparaciones, 150 inspecciones, 1,000 h; 5,000 paletas. Compara ABC contra repartir todo por horas máquina.",
          "Total overhead $200,000: machine setup $60,000 (30 setups), inspection $40,000 (200 inspections), machining $100,000 (5,000 machine hours). Classic: 10 setups, 50 inspections, 4,000 h; 50,000 lollipops. Gourmet: 20 setups, 150 inspections, 1,000 h; 5,000 lollipops. Compare ABC with allocating everything by machine hours.",
        ),
        steps: [
          t("Tasas ABC: 60,000 ÷ 30 = $2,000 por preparación; 40,000 ÷ 200 = $200 por inspección; 100,000 ÷ 5,000 = $20 por hora.", "ABC rates: 60,000 ÷ 30 = $2,000 per setup; 40,000 ÷ 200 = $200 per inspection; 100,000 ÷ 5,000 = $20 per hour."),
          t("Clásica ABC: 10 × 2,000 + 50 × 200 + 4,000 × 20 = 20,000 + 10,000 + 80,000 = $110,000 → $2.20 por paleta.", "Classic ABC: 10 × 2,000 + 50 × 200 + 4,000 × 20 = 20,000 + 10,000 + 80,000 = $110,000 → $2.20 per lollipop."),
          t("Gourmet ABC: 20 × 2,000 + 150 × 200 + 1,000 × 20 = 40,000 + 30,000 + 20,000 = $90,000 → $18 por paleta.", "Gourmet ABC: 20 × 2,000 + 150 × 200 + 1,000 × 20 = 40,000 + 30,000 + 20,000 = $90,000 → $18 per lollipop."),
          t("Tradicional: 200,000 ÷ 5,000 = $40 por hora. Clásica 4,000 × 40 = $160,000 ($3.20 c/u); gourmet 1,000 × 40 = $40,000 ($8 c/u).", "Traditional: 200,000 ÷ 5,000 = $40 per hour. Classic 4,000 × 40 = $160,000 ($3.20 each); gourmet 1,000 × 40 = $40,000 ($8 each)."),
        ],
        result: t(
          "Con una sola base la gourmet parecía costar $8 de indirectos por paleta; con ABC cuesta $18. La clásica subsidiaba a la gourmet con $1 por paleta.",
          "With a single base the gourmet seemed to carry $8 of overhead per lollipop; with ABC it carries $18. The classic was subsidizing the gourmet by $1 per lollipop.",
        ),
      },
      {
        title: t("Elegir generadores de costo", "Choosing cost drivers"),
        problem: t(
          "Una fábrica de muebles tiene estas actividades: tramitar compras con proveedores, cambiar el herramental entre modelos, barnizar y revisar calidad. Propón un generador para cada una.",
          "A furniture plant has these activities: processing purchases with suppliers, changing tooling between models, varnishing and quality checks. Propose a driver for each.",
        ),
        steps: [
          t("Tramitar compras: número de órdenes de compra.", "Processing purchases: number of purchase orders."),
          t("Cambiar herramental: número de preparaciones (cambios de modelo).", "Changing tooling: number of setups (model changes)."),
          t("Barnizar: metros cuadrados barnizados u horas de la cabina.", "Varnishing: square meters varnished or booth hours."),
          t("Revisar calidad: número de inspecciones.", "Quality checks: number of inspections."),
        ],
        result: t(
          "Un buen generador es fácil de medir y sube cuando sube el costo de la actividad. No existe uno solo correcto; se elige el que mejor explica el consumo.",
          "A good driver is easy to measure and rises when the activity's cost rises. There is no single correct one; you choose the one that best explains consumption.",
        ),
      },
    ],
    keyPoints: [
      t("Una sola base de reparto puede provocar subsidios cruzados entre productos.", "A single allocation base can cause cross-subsidies between products."),
      t("ABC: los productos consumen actividades y las actividades consumen recursos.", "ABC: products consume activities and activities consume resources."),
      t("Tasa de actividad = costo de la actividad ÷ total del generador.", "Activity rate = activity cost ÷ total driver."),
      t("Los productos de bajo volumen y complejos suelen salir más caros con ABC.", "Low-volume, complex products usually come out more expensive under ABC."),
      t("ABC conviene cuando los CIF pesan mucho y los productos son diversos.", "ABC pays off when overhead is significant and products are diverse."),
    ],
    exerciseIds: ['COS-05-E1', 'COS-05-E2', 'COS-05-E3', 'COS-05-E4', 'COS-05-E5', 'COS-05-E6'],
  },

  // ───────────────────────────── COS-06 ─────────────────────────────
  {
    id: 'COS-06',
    level: 3,
    topicIds: ['COS.6'],
    title: t("Costos estándar y análisis de variaciones", "Standard costs and variance analysis"),
    summary: t(
      "Un costo estándar es lo que un producto debería costar; comparar lo real contra el estándar en precio y cantidad (o tarifa y eficiencia) muestra dónde se ganó o se perdió dinero y quién debe explicarlo.",
      "A standard cost is what a product should cost; comparing actual against standard in price and quantity (or rate and efficiency) shows where money was gained or lost and who should explain it.",
    ),
    minutes: 19,
    objectives: [
      t("Explicar qué es un costo estándar y para qué sirve.", "Explain what a standard cost is and what it is for."),
      t("Calcular las variaciones en precio y cantidad de materiales, y en tarifa y eficiencia de mano de obra.", "Compute materials price and quantity variances, and labor rate and efficiency variances."),
      t("Interpretar si una variación es favorable o desfavorable e identificar posibles responsables.", "Interpret whether a variance is favorable or unfavorable and identify likely owners."),
    ],
    theory: [
      {
        heading: t("¿Qué es un costo estándar?", "What is a standard cost?"),
        body: [
          t(
            "Un **costo estándar** es lo que un producto **debería** costar si todo sale como se planeó. Es como la receta de la abuela con cantidades exactas: \"para un pastel, 300 g de harina a $20 el kilo\". Se fija antes de producir, con base en estudios de ingeniería, experiencia y precios esperados.",
            "A **standard cost** is what a product **should** cost if everything goes as planned. It is like grandma's recipe with exact amounts: \"for one cake, 300 g of flour at $20 per kilo\". It is set before producing, based on engineering studies, experience and expected prices.",
          ),
          t(
            "Cada estándar tiene dos partes: **cantidad** (cuánto material u horas por unidad) y **precio** (cuánto cuesta cada kilo u hora). Todo junto forma la **hoja de costo estándar** del producto. Los estándares pueden ser **ideales** (perfección, casi imposibles) o **alcanzables** (exigentes pero realistas); los alcanzables motivan más.",
            "Each standard has two parts: **quantity** (how much material or how many hours per unit) and **price** (what each kilo or hour costs). Together they form the product's **standard cost sheet**. Standards can be **ideal** (perfection, nearly impossible) or **attainable** (demanding but realistic); attainable ones motivate more.",
          ),
          t(
            "La diferencia entre lo real y el estándar es una **variación**. Es **favorable (F)** si gastaste menos de lo que debías y **desfavorable (D)** si gastaste más. Mini ejemplo: el estándar de una barra de chocolate es 0.2 kg de cacao a $100 el kilo = $20 por barra.",
            "The difference between actual and standard is a **variance**. It is **favorable (F)** if you spent less than you should have and **unfavorable (U)** if you spent more. Mini example: the standard for a chocolate bar is 0.2 kg of cocoa at $100 per kilo = $20 per bar.",
          ),
        ],
        bullets: [
          t("Sirve para controlar: comparar real contra estándar.", "It is used to control: compare actual against standard."),
          t("Facilita presupuestos y cotizaciones rápidas.", "It makes budgets and quick quotes easier."),
          t("Permite la administración por excepción: revisar solo las variaciones grandes.", "It enables management by exception: review only large variances."),
        ],
        formulas: [
          {
            name: t("Costo estándar por unidad", "Standard cost per unit"),
            expression: "Costo estándar = Cantidad estándar × Precio estándar",
            variables: [
              { symbol: "Cantidad estándar", meaning: t("Cuánto material (kg, metros) u horas debería llevar una unidad.", "How much material (kg, meters) or how many hours one unit should take.") },
              { symbol: "Precio estándar", meaning: t("Cuánto debería costar cada kilo, metro u hora, en pesos.", "What each kilo, meter or hour should cost, in pesos.") },
            ],
            steps: [
              t("Para cada elemento (material, mano de obra), multiplica la cantidad estándar por su precio estándar.", "For each element (materials, labor), multiply the standard quantity by its standard price."),
              t("Suma los elementos: eso es lo que la unidad debería costar.", "Add the elements: that is what the unit should cost."),
            ],
            example: t(
              "Un pan dulce lleva 0.08 kg de harina a $25 el kilo y 0.1 horas de panadero a $90. Harina: 0.08 × 25 = 2. Mano de obra: 0.1 × 90 = 9. Estándar = 2 + 9 = **$11 por pan**.",
              "A sweet bread uses 0.08 kg of flour at $25 per kilo and 0.1 baker hours at $90. Flour: 0.08 × 25 = 2. Labor: 0.1 × 90 = 9. Standard = 2 + 9 = **$11 per bread**.",
            ),
          },
        ],
      },
      {
        heading: t("Variaciones de materia prima", "Materials variances"),
        body: [
          t(
            "La variación total de materiales se separa en dos para saber **por qué** pasó. La **variación en precio** mide si compraste más caro o más barato que el estándar. La **variación en cantidad** (o en uso) mide si usaste más o menos material del que se permitía para lo que produjiste.",
            "The total materials variance is split in two to find out **why** it happened. The **price variance** measures whether you bought more or less expensively than standard. The **quantity** (or usage) **variance** measures whether you used more or less material than allowed for what you produced.",
          ),
          t(
            "La clave es la **cantidad estándar permitida**: estándar por unidad × unidades **realmente** producidas. Si las fórmulas dan un número positivo, la variación es desfavorable; si es negativo, es favorable.",
            "The key is the **standard quantity allowed**: standard per unit × units **actually** produced. If the formulas give a positive number, the variance is unfavorable; if negative, it is favorable.",
          ),
          t(
            "Mini ejemplo: produces 1,000 barras; se permiten 200 kg de cacao. Usaste 210 kg a $95. Precio: (95 − 100) × 210 = −$1,050 → $1,050 F. Cantidad: (210 − 200) × 100 = $1,000 D. Total: $50 F.",
            "Mini example: you produce 1,000 bars; 200 kg of cocoa are allowed. You used 210 kg at $95. Price: (95 − 100) × 210 = −$1,050 → $1,050 F. Quantity: (210 − 200) × 100 = $1,000 U. Total: $50 F.",
          ),
        ],
        formulas: [
          {
            name: t("Variación en precio de materiales", "Materials price variance"),
            expression: "Var. precio = (Precio real − Precio estándar) × Cantidad real",
            variables: [
              { symbol: "Precio real", meaning: t("Lo que realmente pagaste por kilo o metro, en pesos.", "What you actually paid per kilo or meter, in pesos.") },
              { symbol: "Precio estándar", meaning: t("Lo que debías pagar por kilo o metro según el estándar, en pesos.", "What you should have paid per kilo or meter per the standard, in pesos.") },
              { symbol: "Cantidad real", meaning: t("Los kilos o metros que realmente compraste o usaste.", "The kilos or meters you actually bought or used.") },
            ],
            steps: [
              t("Resta precio real − precio estándar.", "Subtract actual price − standard price."),
              t("Multiplica esa diferencia por la cantidad real.", "Multiply that difference by the actual quantity."),
              t("Lee el signo: positivo = desfavorable (D); negativo = favorable (F).", "Read the sign: positive = unfavorable (U); negative = favorable (F)."),
            ],
            example: t(
              "Se usaron 630 kg de chile comprados a $57; el estándar es $60. (57 − 60) × 630 = −3 × 630 = −1,890 → **$1,890 F**.",
              "630 kg of chili were used, bought at $57; the standard is $60. (57 − 60) × 630 = −3 × 630 = −1,890 → **$1,890 F**.",
            ),
            interpret: t(
              "Favorable: compraste más barato. Desfavorable: compraste más caro. Responsable usual: compras.",
              "Favorable: you bought cheaper. Unfavorable: you bought more expensively. Usual owner: purchasing.",
            ),
            mistake: t(
              "Multiplicar por la cantidad estándar permitida; aquí va la cantidad **real**.",
              "Multiplying by the standard quantity allowed; the **actual** quantity goes here.",
            ),
          },
          {
            name: t("Variación en cantidad de materiales", "Materials quantity variance"),
            expression: "Var. cantidad = (Cantidad real − Cantidad estándar permitida) × Precio estándar",
            variables: [
              { symbol: "Cantidad real", meaning: t("Los kilos o metros que realmente usaste.", "The kilos or meters you actually used.") },
              { symbol: "Cantidad estándar permitida", meaning: t("Estándar por unidad × unidades **realmente** producidas: lo que debiste usar.", "Standard per unit × units **actually** produced: what you should have used.") },
              { symbol: "Precio estándar", meaning: t("Precio por kilo o metro según el estándar, en pesos.", "Price per kilo or meter per the standard, in pesos.") },
            ],
            steps: [
              t("Calcula la cantidad estándar permitida: estándar por unidad × unidades producidas.", "Compute the standard quantity allowed: standard per unit × units produced."),
              t("Resta cantidad real − cantidad permitida.", "Subtract actual quantity − allowed quantity."),
              t("Multiplica por el precio estándar.", "Multiply by the standard price."),
              t("Lee el signo: positivo = desfavorable; negativo = favorable.", "Read the sign: positive = unfavorable; negative = favorable."),
            ],
            example: t(
              "Estándar 0.5 kg por frasco; se hicieron 1,200 frascos; precio estándar $60. Permitida = 0.5 × 1,200 = 600 kg. Se usaron 630 kg: (630 − 600) × 60 = 30 × 60 = **$1,800 D**.",
              "Standard 0.5 kg per jar; 1,200 jars were made; standard price $60. Allowed = 0.5 × 1,200 = 600 kg. 630 kg were used: (630 − 600) × 60 = 30 × 60 = **$1,800 U**.",
            ),
            interpret: t(
              "Desfavorable: hubo desperdicio (se usó más de lo permitido). Responsable usual: producción.",
              "Unfavorable: there was waste (more was used than allowed). Usual owner: production.",
            ),
            mistake: t(
              "Usar las unidades planeadas en lugar de las realmente producidas para la cantidad permitida, o multiplicar por el precio real.",
              "Using planned units instead of units actually produced for the allowed quantity, or multiplying by the actual price.",
            ),
          },
        ],
      },
      {
        heading: t("Variaciones de mano de obra y su interpretación", "Labor variances and their interpretation"),
        body: [
          t(
            "La mano de obra funciona igual, solo cambian los nombres. La **variación en tarifa** compara lo que pagaste por hora contra la tarifa estándar. La **variación en eficiencia** compara las horas reales contra las **horas estándar permitidas** para lo producido.",
            "Labor works the same way; only the names change. The **rate variance** compares what you paid per hour against the standard rate. The **efficiency variance** compares actual hours against the **standard hours allowed** for what was produced.",
          ),
          t(
            "Cada variación tiene un posible **responsable**: el precio de materiales suele ser de **compras**; la cantidad de materiales y la eficiencia, de **producción**; la tarifa, de **recursos humanos** o de quien asigna personal. Pero cuidado: las variaciones se conectan. Comprar material más barato (precio F) puede traer más desperdicio (cantidad D).",
            "Each variance has a likely **owner**: materials price usually belongs to **purchasing**; materials quantity and efficiency to **production**; the rate to **human resources** or whoever assigns staff. But careful: variances are connected. Buying cheaper material (price F) can bring more waste (quantity U).",
          ),
          t(
            "Mini ejemplo: estándar 0.5 h por pieza a $120; produces 800 piezas, se permiten 400 h. Usaste 420 h a $125. Tarifa: (125 − 120) × 420 = $2,100 D. Eficiencia: (420 − 400) × 120 = $2,400 D.",
            "Mini example: standard 0.5 h per piece at $120; you produce 800 pieces, so 400 h are allowed. You used 420 h at $125. Rate: (125 − 120) × 420 = $2,100 U. Efficiency: (420 − 400) × 120 = $2,400 U.",
          ),
        ],
        formulas: [
          {
            name: t("Variación en tarifa de mano de obra", "Labor rate variance"),
            expression: "Var. tarifa = (Tarifa real − Tarifa estándar) × Horas reales",
            variables: [
              { symbol: "Tarifa real", meaning: t("Lo que realmente se pagó por hora, en pesos.", "What was actually paid per hour, in pesos.") },
              { symbol: "Tarifa estándar", meaning: t("Lo que se debía pagar por hora según el estándar, en pesos.", "What should have been paid per hour per the standard, in pesos.") },
              { symbol: "Horas reales", meaning: t("Las horas que de verdad se trabajaron.", "The hours actually worked.") },
            ],
            steps: [
              t("Resta tarifa real − tarifa estándar.", "Subtract actual rate − standard rate."),
              t("Multiplica por las horas reales.", "Multiply by actual hours."),
              t("Lee el signo: positivo = desfavorable; negativo = favorable.", "Read the sign: positive = unfavorable; negative = favorable."),
            ],
            example: t(
              "Tarifa estándar $100; se trabajaron 480 horas pagadas a $105. (105 − 100) × 480 = 5 × 480 = **$2,400 D**.",
              "Standard rate $100; 480 hours were worked, paid at $105. (105 − 100) × 480 = 5 × 480 = **$2,400 U**.",
            ),
            mistake: t(
              "Multiplicar por las horas permitidas; en la tarifa van las horas **reales**.",
              "Multiplying by allowed hours; the rate variance uses **actual** hours.",
            ),
          },
          {
            name: t("Variación en eficiencia de mano de obra", "Labor efficiency variance"),
            expression: "Var. eficiencia = (Horas reales − Horas estándar permitidas) × Tarifa estándar",
            variables: [
              { symbol: "Horas reales", meaning: t("Las horas que de verdad se trabajaron.", "The hours actually worked.") },
              { symbol: "Horas estándar permitidas", meaning: t("Horas estándar por unidad × unidades realmente producidas: las horas que debieron bastar.", "Standard hours per unit × units actually produced: the hours that should have been enough.") },
              { symbol: "Tarifa estándar", meaning: t("Pago por hora según el estándar, en pesos.", "Pay per hour per the standard, in pesos.") },
            ],
            steps: [
              t("Calcula las horas permitidas: horas estándar por unidad × unidades producidas.", "Compute allowed hours: standard hours per unit × units produced."),
              t("Resta horas reales − horas permitidas.", "Subtract actual hours − allowed hours."),
              t("Multiplica por la tarifa estándar (no la real).", "Multiply by the standard rate (not the actual one)."),
              t("Lee el signo: positivo = desfavorable; negativo = favorable.", "Read the sign: positive = unfavorable; negative = favorable."),
            ],
            example: t(
              "Estándar 0.25 h por pieza; se hicieron 2,000 piezas; tarifa estándar $100. Permitidas = 0.25 × 2,000 = 500 h. Reales 480 h: (480 − 500) × 100 = −20 × 100 = −2,000 → **$2,000 F**.",
              "Standard 0.25 h per piece; 2,000 pieces were made; standard rate $100. Allowed = 0.25 × 2,000 = 500 h. Actual 480 h: (480 − 500) × 100 = −20 × 100 = −2,000 → **$2,000 F**.",
            ),
            interpret: t(
              "Favorable: se trabajó más rápido de lo esperado. Desfavorable: se tardaron más (máquinas paradas, personal nuevo, material malo).",
              "Favorable: work was faster than expected. Unfavorable: it took longer (idle machines, new staff, poor material).",
            ),
            mistake: t(
              "Valuar la diferencia de horas con la tarifa real; la eficiencia siempre se multiplica por la tarifa **estándar**.",
              "Valuing the hour difference at the actual rate; efficiency is always multiplied by the **standard** rate.",
            ),
          },
        ],
      },
    ],
    examples: [
      {
        title: t("Variaciones del cacao", "Cocoa variances"),
        problem: t(
          "Estándar: 0.2 kg de cacao a $100 por kilo por barra. Se produjeron 1,000 barras usando 210 kg comprados a $95 por kilo. Calcula las variaciones en precio, en cantidad y total.",
          "Standard: 0.2 kg of cocoa at $100 per kilo per bar. 1,000 bars were produced using 210 kg bought at $95 per kilo. Compute the price, quantity and total variances.",
        ),
        steps: [
          t("Cantidad estándar permitida = 0.2 × 1,000 = 200 kg.", "Standard quantity allowed = 0.2 × 1,000 = 200 kg."),
          t("Var. precio = (95 − 100) × 210 = −1,050 → $1,050 F.", "Price variance = (95 − 100) × 210 = −1,050 → $1,050 F."),
          t("Var. cantidad = (210 − 200) × 100 = 1,000 → $1,000 D.", "Quantity variance = (210 − 200) × 100 = 1,000 → $1,000 U."),
          t("Total: costo real 210 × 95 = $19,950 vs. estándar 200 × 100 = $20,000 → $50 F (= 1,050 F − 1,000 D).", "Total: actual cost 210 × 95 = $19,950 vs. standard 200 × 100 = $20,000 → $50 F (= 1,050 F − 1,000 U)."),
        ],
        result: t(
          "El total casi no se movió, pero esconde dos historias: compras consiguió mejor precio y producción desperdició 10 kg. Vale la pena preguntar si el cacao barato era de menor calidad.",
          "The total barely moved, but it hides two stories: purchasing got a better price and production wasted 10 kg. It is worth asking whether the cheap cocoa was lower quality.",
        ),
      },
      {
        title: t("Variaciones de mano de obra en un taller de costura", "Labor variances in a sewing shop"),
        problem: t(
          "Estándar: 0.5 horas por camisa a $120 la hora. Se hicieron 800 camisas en 420 horas reales, pagadas a $125 la hora. Calcula las variaciones en tarifa, eficiencia y total.",
          "Standard: 0.5 hours per shirt at $120 per hour. 800 shirts were made in 420 actual hours, paid at $125 per hour. Compute the rate, efficiency and total variances.",
        ),
        steps: [
          t("Horas estándar permitidas = 0.5 × 800 = 400 h.", "Standard hours allowed = 0.5 × 800 = 400 h."),
          t("Var. tarifa = (125 − 120) × 420 = $2,100 D.", "Rate variance = (125 − 120) × 420 = $2,100 U."),
          t("Var. eficiencia = (420 − 400) × 120 = $2,400 D.", "Efficiency variance = (420 − 400) × 120 = $2,400 U."),
          t("Total: real 420 × 125 = $52,500 vs. estándar 400 × 120 = $48,000 → $4,500 D.", "Total: actual 420 × 125 = $52,500 vs. standard 400 × 120 = $48,000 → $4,500 U."),
        ],
        result: t(
          "Se gastaron $4,500 de más: $2,100 por pagar más por hora y $2,400 por tardar más. Ambas son desfavorables.",
          "$4,500 too much was spent: $2,100 from paying more per hour and $2,400 from taking longer. Both are unfavorable.",
        ),
      },
    ],
    keyPoints: [
      t("Costo estándar = cantidad estándar × precio estándar: lo que debería costar.", "Standard cost = standard quantity × standard price: what it should cost."),
      t("Usa siempre la cantidad u horas estándar permitidas para la producción real.", "Always use the standard quantity or hours allowed for actual output."),
      t("Positivo = desfavorable (gastaste más); negativo = favorable.", "Positive = unfavorable (you spent more); negative = favorable."),
      t("Precio y tarifa se multiplican por lo real; cantidad y eficiencia, por el precio estándar.", "Price and rate are multiplied by actual quantity; quantity and efficiency by the standard price."),
      t("Las variaciones se conectan: un ahorro en precio puede causar desperdicio.", "Variances are connected: a price saving can cause waste."),
    ],
    normativeNote: t(
      "Contenido educativo. Para reportes internos, cada empresa define sus estándares. Para valuar inventarios en estados financieros, las normas de inventarios (NIF C-4 en México y NIC 2 a nivel internacional) admiten el costo estándar como técnica de medición solo si sus resultados se aproximan al costo real. Verifica la versión vigente (2026).",
      "Educational content. For internal reports, each company defines its own standards. To value inventory in financial statements, inventory standards (NIF C-4 in Mexico and IAS 2 internationally) allow standard cost as a measurement technique only if the results approximate actual cost. Verify the current version (2026).",
    ),
    exerciseIds: ['COS-06-E1', 'COS-06-E2', 'COS-06-E3', 'COS-06-E4', 'COS-06-E5', 'COS-06-E6'],
  },
]

export const exercises: Exercise[] = [
  // ═════════════════════════ COS-01 ═════════════════════════
  {
    id: 'COS-01-E1',
    level: 3,
    module: 'COS-01',
    kind: 'mcq',
    flavor: 'concept',
    context: t(
      "En una tortillería trabajan: el tortillero que opera la máquina, la cajera que cobra, el repartidor que lleva tortillas a las fondas y la dueña que lleva las cuentas.",
      "In a tortilla shop work: the tortilla maker who runs the machine, the cashier who takes payments, the driver who delivers tortillas to small restaurants and the owner who keeps the books.",
    ),
    prompt: t(
      "¿Cuál de estos sueldos es mano de obra directa de las tortillas?",
      "Which of these wages is direct labor for the tortillas?",
    ),
    options: [
      { id: 'COS-01-E1-a', text: t("El del tortillero que opera la máquina", "The tortilla maker who runs the machine") },
      { id: 'COS-01-E1-b', text: t("El de la cajera", "The cashier's") },
      { id: 'COS-01-E1-c', text: t("El del repartidor", "The delivery driver's") },
      { id: 'COS-01-E1-d', text: t("El de la dueña que lleva las cuentas", "The owner who keeps the books") },
    ],
    correctOptionId: 'COS-01-E1-a',
    explanation: t(
      "La MOD es el sueldo de quien transforma la materia prima en producto: el tortillero. La cajera y el repartidor son costos de venta y la dueña que lleva cuentas es administración; todos son costos del periodo. Error común: pensar que cualquier sueldo del negocio es mano de obra directa.",
      "DL is the wage of whoever transforms raw material into product: the tortilla maker. The cashier and the driver are selling costs and the owner keeping the books is administration; all are period costs. Common mistake: thinking any wage in the business is direct labor.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'cost-elements',
  },
  {
    id: 'COS-01-E2',
    level: 3,
    module: 'COS-01',
    kind: 'classify',
    flavor: 'concept',
    context: t(
      "Una fábrica de sillas tapizadas revisa sus costos de producción del mes.",
      "An upholstered chair factory reviews its production costs for the month.",
    ),
    prompt: t(
      "Clasifica cada costo de la fábrica de sillas en su elemento del costo.",
      "Classify each cost of the chair factory into its cost element.",
    ),
    categories: [
      { id: 'COS-01-E2-c1', label: t("Materia prima directa", "Direct materials") },
      { id: 'COS-01-E2-c2', label: t("Mano de obra directa", "Direct labor") },
      { id: 'COS-01-E2-c3', label: t("Costos indirectos de fabricación", "Manufacturing overhead") },
    ],
    items: [
      { id: 'COS-01-E2-i1', label: t("Madera de pino para el armazón", "Pine wood for the frame"), correctCategoryId: 'COS-01-E2-c1' },
      { id: 'COS-01-E2-i2', label: t("Sueldo del carpintero que arma las sillas", "Wage of the carpenter who assembles the chairs"), correctCategoryId: 'COS-01-E2-c2' },
      { id: 'COS-01-E2-i3', label: t("Renta de la nave industrial", "Rent of the factory building"), correctCategoryId: 'COS-01-E2-c3' },
      { id: 'COS-01-E2-i4', label: t("Clavos y pegamento", "Nails and glue"), correctCategoryId: 'COS-01-E2-c3' },
      { id: 'COS-01-E2-i5', label: t("Sueldo del supervisor de planta", "Plant supervisor's salary"), correctCategoryId: 'COS-01-E2-c3' },
      { id: 'COS-01-E2-i6', label: t("Tela para tapizar el asiento", "Fabric to upholster the seat"), correctCategoryId: 'COS-01-E2-c1' },
    ],
    explanation: t(
      "Madera y tela son el material principal y se miden por silla (MPD). El carpintero transforma el material (MOD). Renta, supervisor, clavos y pegamento son de la fábrica pero no se miden fácil por silla (CIF). Error común: poner clavos y pegamento como materia prima directa; son materiales indirectos porque medirlos por pieza no vale la pena.",
      "Wood and fabric are the main material and are measured per chair (DM). The carpenter transforms the material (DL). Rent, supervisor, nails and glue belong to the factory but are not easily measured per chair (MOH). Common mistake: listing nails and glue as direct materials; they are indirect materials because measuring them per piece is not worth it.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'cost-elements',
  },
  {
    id: 'COS-01-E3',
    level: 3,
    module: 'COS-01',
    kind: 'truefalse',
    flavor: 'concept',
    prompt: t(
      "La comisión que se paga al vendedor por cada mueble vendido forma parte del costo de producción del mueble.",
      "The commission paid to the salesperson for each piece of furniture sold is part of the furniture's cost of production.",
    ),
    answer: false,
    explanation: t(
      "Falso. La comisión ocurre al vender, no al fabricar: es un gasto de venta del periodo. El costo de producción solo incluye MPD, MOD y CIF. Error común: pensar que todo lo que varía con cada pieza es costo de producción.",
      "False. The commission arises when selling, not when making: it is a selling expense of the period. Cost of production only includes DM, DL and MOH. Common mistake: thinking everything that varies with each piece is a production cost.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'cost-elements',
  },
  {
    id: 'COS-01-E4',
    level: 3,
    module: 'COS-01',
    kind: 'fields',
    flavor: 'case',
    context: t(
      "Un taller de calzado tuvo en el mes: materia prima directa $18,000; mano de obra directa $12,000; costos indirectos de fabricación $9,000.",
      "A shoe workshop had during the month: direct materials $18,000; direct labor $12,000; manufacturing overhead $9,000.",
    ),
    prompt: t(
      "Calcula el costo primo, el costo de conversión y el costo de producción del taller de calzado, en pesos.",
      "Compute the shoe workshop's prime cost, conversion cost and cost of production, in pesos.",
    ),
    fields: [
      { id: 'f1', label: t("Costo primo", "Prime cost"), answer: 30000, unit: 'MXN', tolerance: { abs: 0.5 } },
      { id: 'f2', label: t("Costo de conversión", "Conversion cost"), answer: 21000, unit: 'MXN', tolerance: { abs: 0.5 } },
      { id: 'f3', label: t("Costo de producción", "Cost of production"), answer: 39000, unit: 'MXN', tolerance: { abs: 0.5 } },
    ],
    explanation: t(
      "Primo = MPD + MOD = 18,000 + 12,000 = $30,000. Conversión = MOD + CIF = 12,000 + 9,000 = $21,000. Producción = 18,000 + 12,000 + 9,000 = $39,000. Error común: sumar primo + conversión ($51,000), lo que cuenta dos veces la MOD.",
      "Prime = DM + DL = 18,000 + 12,000 = $30,000. Conversion = DL + MOH = 12,000 + 9,000 = $21,000. Production = 18,000 + 12,000 + 9,000 = $39,000. Common mistake: adding prime + conversion ($51,000), which counts DL twice.",
    ),
    difficulty: 1,
    points: 15,
    competency: 'cost-elements',
  },
  {
    id: 'COS-01-E5',
    level: 3,
    module: 'COS-01',
    kind: 'numeric',
    flavor: 'case',
    context: t(
      "Una fábrica de mochilas tenía producto terminado inicial por $15,000. En el periodo terminó producción con costo de $120,000 y al cierre le quedan $20,000 de producto terminado.",
      "A backpack factory had opening finished goods of $15,000. During the period it completed production costing $120,000 and at closing it has $20,000 of finished goods left.",
    ),
    prompt: t(
      "¿Cuál es el costo de ventas de la fábrica de mochilas? Responde en pesos.",
      "What is the backpack factory's cost of goods sold? Answer in pesos.",
    ),
    answer: 115000,
    unit: 'MXN',
    decimals: 0,
    tolerance: { abs: 0.5 },
    explanation: t(
      "Costo de ventas = inventario inicial PT + costo de lo terminado − inventario final PT = 15,000 + 120,000 − 20,000 = $115,000. Error común: sumar el inventario final en lugar de restarlo ($155,000); lo que queda en bodega no se vendió.",
      "Cost of goods sold = opening finished goods + cost of goods manufactured − closing finished goods = 15,000 + 120,000 − 20,000 = $115,000. Common mistake: adding the closing inventory instead of subtracting it ($155,000); what remains in the warehouse was not sold.",
    ),
    difficulty: 1,
    points: 15,
    competency: 'cost-elements',
  },
  {
    id: 'COS-01-E6',
    level: 3,
    module: 'COS-01',
    kind: 'mcq',
    flavor: 'case',
    context: t(
      "Una fábrica de jabones artesanales tenía $6,000 de materia prima al inicio del mes, compró $25,000 y al final le quedan $4,000 en el almacén. Todo es materia prima directa.",
      "An artisanal soap factory had $6,000 of raw materials at the start of the month, bought $25,000 and has $4,000 left in the storeroom at month-end. It is all direct materials.",
    ),
    prompt: t(
      "¿Cuánta materia prima usó la fábrica de jabones en la producción del mes?",
      "How much raw material did the soap factory use in the month's production?",
    ),
    options: [
      { id: 'COS-01-E6-a', text: t("$25,000", "$25,000") },
      { id: 'COS-01-E6-b', text: t("$27,000", "$27,000") },
      { id: 'COS-01-E6-c', text: t("$35,000", "$35,000") },
      { id: 'COS-01-E6-d', text: t("$23,000", "$23,000") },
    ],
    correctOptionId: 'COS-01-E6-b',
    explanation: t(
      "MP usada = inicial + compras − final = 6,000 + 25,000 − 4,000 = $27,000. Error común: tomar solo las compras ($25,000) y olvidar que también se usó lo que ya había en el almacén, o sumar el final ($35,000).",
      "Materials used = opening + purchases − closing = 6,000 + 25,000 − 4,000 = $27,000. Common mistake: taking only purchases ($25,000) and forgetting that what was already in the storeroom was also used, or adding the closing amount ($35,000).",
    ),
    difficulty: 1,
    points: 10,
    competency: 'cost-elements',
  },

  // ═════════════════════════ COS-02 ═════════════════════════
  {
    id: 'COS-02-E1',
    level: 3,
    module: 'COS-02',
    kind: 'classify',
    flavor: 'concept',
    context: t(
      "Una pastelería quiere conocer el costo de un pastel de boda específico (ese es el objeto de costo).",
      "A bakery wants to know the cost of a specific wedding cake (that is the cost object).",
    ),
    prompt: t(
      "Clasifica cada costo como directo o indirecto respecto al pastel de boda.",
      "Classify each cost as direct or indirect relative to the wedding cake.",
    ),
    categories: [
      { id: 'COS-02-E1-c1', label: t("Directo", "Direct") },
      { id: 'COS-02-E1-c2', label: t("Indirecto", "Indirect") },
    ],
    items: [
      { id: 'COS-02-E1-i1', label: t("Fondant y harina usados en ese pastel", "Fondant and flour used in that cake"), correctCategoryId: 'COS-02-E1-c1' },
      { id: 'COS-02-E1-i2', label: t("Horas de la decoradora dedicadas solo a ese pastel", "Hours the decorator spent only on that cake"), correctCategoryId: 'COS-02-E1-c1' },
      { id: 'COS-02-E1-i3', label: t("Renta del local donde se hacen todos los pasteles", "Rent of the shop where all cakes are made"), correctCategoryId: 'COS-02-E1-c2' },
      { id: 'COS-02-E1-i4', label: t("Gas del horno que hornea varios pedidos al día", "Gas for the oven that bakes several orders a day"), correctCategoryId: 'COS-02-E1-c2' },
      { id: 'COS-02-E1-i5', label: t("Base especial de acrílico comprada para ese pastel", "Special acrylic stand bought for that cake"), correctCategoryId: 'COS-02-E1-c1' },
    ],
    explanation: t(
      "Directos: se ligan clara y económicamente a ese pastel (fondant, horas de la decoradora, la base comprada para él). Indirectos: se comparten entre muchos pedidos (renta, gas del horno) y hay que repartirlos. Error común: llamar indirecta a la mano de obra solo por ser sueldo; si las horas se registran por pastel, es directa.",
      "Direct: clearly and cheaply traced to that cake (fondant, decorator hours, the stand bought for it). Indirect: shared among many orders (rent, oven gas) and must be allocated. Common mistake: calling labor indirect just because it is a wage; if the hours are logged per cake, it is direct.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'cost-classification',
  },
  {
    id: 'COS-02-E2',
    level: 3,
    module: 'COS-02',
    kind: 'mcq',
    flavor: 'concept',
    prompt: t(
      "En una fábrica de huaraches, ¿cuál de estos es un costo del periodo (no del producto)?",
      "In a sandal factory, which of these is a period cost (not a product cost)?",
    ),
    options: [
      { id: 'COS-02-E2-a', text: t("El cuero para las suelas", "Leather for the soles") },
      { id: 'COS-02-E2-b', text: t("El sueldo del artesano que cose los huaraches", "Wage of the artisan who sews the sandals") },
      { id: 'COS-02-E2-c', text: t("La luz de las máquinas de la planta", "Electricity for the plant's machines") },
      { id: 'COS-02-E2-d', text: t("El sueldo de la contadora de las oficinas", "Salary of the office accountant") },
    ],
    correctOptionId: 'COS-02-E2-d',
    explanation: t(
      "La contadora trabaja en administración: su sueldo se resta en el mes como gasto del periodo. Cuero (MPD), artesano (MOD) y luz de planta (CIF) son costos del producto y se quedan en el inventario hasta vender. Error común: pensar que todo sueldo es costo del periodo.",
      "The accountant works in administration: her salary is deducted in the month as a period expense. Leather (DM), artisan (DL) and plant power (MOH) are product costs and stay in inventory until sold. Common mistake: thinking every salary is a period cost.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'cost-classification',
  },
  {
    id: 'COS-02-E3',
    level: 3,
    module: 'COS-02',
    kind: 'fields',
    flavor: 'case',
    context: t(
      "Una fábrica de velas aromáticas tiene costos fijos de $40,000 al mes y un costo variable de $25 por vela. Ambos volúmenes están dentro del rango relevante.",
      "An aromatic candle factory has fixed costs of $40,000 per month and a variable cost of $25 per candle. Both volumes are within the relevant range.",
    ),
    prompt: t(
      "Calcula el costo total y el costo unitario de la fábrica de velas con 2,000 y con 4,000 velas.",
      "Compute the candle factory's total cost and unit cost with 2,000 and with 4,000 candles.",
    ),
    fields: [
      { id: 'f1', label: t("Costo total con 2,000 velas", "Total cost with 2,000 candles"), answer: 90000, unit: 'MXN', tolerance: { abs: 0.5 } },
      { id: 'f2', label: t("Costo unitario con 2,000 velas", "Unit cost with 2,000 candles"), answer: 45, unit: 'MXN', tolerance: { abs: 0.01 } },
      { id: 'f3', label: t("Costo total con 4,000 velas", "Total cost with 4,000 candles"), answer: 140000, unit: 'MXN', tolerance: { abs: 0.5 } },
      { id: 'f4', label: t("Costo unitario con 4,000 velas", "Unit cost with 4,000 candles"), answer: 35, unit: 'MXN', tolerance: { abs: 0.01 } },
    ],
    explanation: t(
      "Con 2,000: 40,000 + 25 × 2,000 = $90,000; 90,000 ÷ 2,000 = $45. Con 4,000: 40,000 + 25 × 4,000 = $140,000; 140,000 ÷ 4,000 = $35. El fijo por vela baja de $20 a $10. Error común: suponer que si el volumen se duplica el costo total también se duplica ($180,000); solo se duplica la parte variable.",
      "With 2,000: 40,000 + 25 × 2,000 = $90,000; 90,000 ÷ 2,000 = $45. With 4,000: 40,000 + 25 × 4,000 = $140,000; 140,000 ÷ 4,000 = $35. Fixed cost per candle falls from $20 to $10. Common mistake: assuming that if volume doubles total cost doubles too ($180,000); only the variable part doubles.",
    ),
    difficulty: 2,
    points: 15,
    competency: 'cost-classification',
  },
  {
    id: 'COS-02-E4',
    level: 3,
    module: 'COS-02',
    kind: 'truefalse',
    flavor: 'concept',
    prompt: t(
      "Dentro del rango relevante, si aumenta el volumen de producción, el costo fijo por unidad disminuye.",
      "Within the relevant range, if production volume increases, fixed cost per unit decreases.",
    ),
    answer: true,
    explanation: t(
      "Verdadero. El costo fijo total no cambia, pero se reparte entre más unidades, así que a cada una le toca menos. Error común: confundir el comportamiento total (fijo constante) con el unitario (fijo que baja); con el variable pasa al revés: constante por unidad.",
      "True. Total fixed cost does not change, but it is spread over more units, so each one carries less. Common mistake: confusing total behavior (fixed stays constant) with per-unit behavior (fixed falls); variable cost works the opposite way: constant per unit.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'cost-classification',
  },
  {
    id: 'COS-02-E5',
    level: 3,
    module: 'COS-02',
    kind: 'multi',
    flavor: 'concept',
    prompt: t(
      "¿Cuáles de estos costos son mixtos (semivariables)? Selecciona todos los que apliquen.",
      "Which of these costs are mixed (semi-variable)? Select all that apply.",
    ),
    options: [
      { id: 'COS-02-E5-a', text: t("Plan de celular con renta mensual fija más cobro por datos extra", "Phone plan with a fixed monthly fee plus charges for extra data") },
      { id: 'COS-02-E5-b', text: t("Sueldo de un vendedor con base fija más comisión por venta", "Salesperson's pay with a fixed base plus commission per sale") },
      { id: 'COS-02-E5-c', text: t("Renta fija del local", "Fixed shop rent") },
      { id: 'COS-02-E5-d', text: t("Materia prima por pieza producida", "Raw material per piece produced") },
      { id: 'COS-02-E5-e', text: t("Renta de un camión con cuota fija mensual más un cargo por kilómetro", "Truck rental with a fixed monthly fee plus a charge per kilometer") },
    ],
    correctOptionIds: ['COS-02-E5-a', 'COS-02-E5-b', 'COS-02-E5-e'],
    explanation: t(
      "Celular, vendedor con base más comisión y camión con cuota más kilómetros tienen una parte fija y otra que crece con el uso: son mixtos. La renta fija es puramente fija y la materia prima por pieza es puramente variable. Error común: llamar variable a todo costo que sube un poco con el volumen, olvidando la parte fija.",
      "The phone plan, salesperson with base plus commission and truck with fee plus kilometers have a fixed part and a part that grows with use: they are mixed. Fixed rent is purely fixed and raw material per piece is purely variable. Common mistake: calling any cost that rises somewhat with volume variable, forgetting the fixed part.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'cost-classification',
  },
  {
    id: 'COS-02-E6',
    level: 3,
    module: 'COS-02',
    kind: 'numeric',
    flavor: 'case',
    context: t(
      "Una distribuidora renta un camión por una cuota fija de $6,000 al mes más $4 por kilómetro recorrido. Este mes recorrió 1,500 km.",
      "A distributor rents a truck for a fixed fee of $6,000 per month plus $4 per kilometer driven. This month it drove 1,500 km.",
    ),
    prompt: t(
      "¿Cuánto paga la distribuidora por la renta del camión este mes? Responde en pesos.",
      "How much does the distributor pay for the truck rental this month? Answer in pesos.",
    ),
    answer: 12000,
    unit: 'MXN',
    decimals: 0,
    tolerance: { abs: 0.5 },
    explanation: t(
      "Costo mixto = fijo + variable × uso = 6,000 + 4 × 1,500 = 6,000 + 6,000 = $12,000. Error común: calcular solo la parte variable ($6,000) u olvidar que la cuota fija se paga aunque el camión no salga.",
      "Mixed cost = fixed + variable × usage = 6,000 + 4 × 1,500 = 6,000 + 6,000 = $12,000. Common mistake: computing only the variable part ($6,000) or forgetting the fixed fee is paid even if the truck never leaves.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'cost-classification',
  },

  // ═════════════════════════ COS-03 ═════════════════════════
  {
    id: 'COS-03-E1',
    level: 3,
    module: 'COS-03',
    kind: 'mcq',
    flavor: 'concept',
    prompt: t(
      "¿Cuál de estos negocios debería usar costeo por órdenes de producción?",
      "Which of these businesses should use job order costing?",
    ),
    options: [
      { id: 'COS-03-E1-a', text: t("Una refresquera que llena miles de botellas iguales al día", "A soft drink plant filling thousands of identical bottles a day") },
      { id: 'COS-03-E1-b', text: t("Un taller que fabrica cocinas integrales a la medida de cada cliente", "A workshop that builds custom kitchens for each customer") },
      { id: 'COS-03-E1-c', text: t("Una cementera de producción continua", "A continuous-production cement plant") },
      { id: 'COS-03-E1-d', text: t("Una planta que produce harina de maíz en serie", "A plant mass-producing corn flour") },
    ],
    correctOptionId: 'COS-03-E1-b',
    explanation: t(
      "Cada cocina integral es distinta (medidas, materiales, acabados), así que conviene una hoja de costos por pedido. Refrescos, cemento y harina son productos iguales en serie: usan costeo por procesos. Error común: elegir órdenes solo porque el negocio recibe pedidos; la pregunta es si cada pedido es diferente.",
      "Each custom kitchen is different (sizes, materials, finishes), so one cost sheet per order makes sense. Soft drinks, cement and flour are identical products made in series: they use process costing. Common mistake: choosing job order just because the business takes orders; the question is whether each order is different.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'job-order-costing',
  },
  {
    id: 'COS-03-E2',
    level: 3,
    module: 'COS-03',
    kind: 'numeric',
    flavor: 'case',
    context: t(
      "Al inicio del año, un taller de herrería presupuesta costos indirectos por $480,000 y 16,000 horas máquina.",
      "At the start of the year, an ironwork shop budgets overhead of $480,000 and 16,000 machine hours.",
    ),
    prompt: t(
      "¿Cuál es la tasa predeterminada de CIF del taller de herrería por hora máquina? Responde en pesos.",
      "What is the ironwork shop's predetermined overhead rate per machine hour? Answer in pesos.",
    ),
    answer: 30,
    unit: 'MXN',
    decimals: 2,
    tolerance: { abs: 0.01 },
    explanation: t(
      "Tasa = CIF presupuestados ÷ base presupuestada = 480,000 ÷ 16,000 = $30 por hora máquina. Error común: usar los CIF reales del año anterior o dividir al revés (16,000 ÷ 480,000).",
      "Rate = budgeted overhead ÷ budgeted base = 480,000 ÷ 16,000 = $30 per machine hour. Common mistake: using last year's actual overhead or dividing the other way round (16,000 ÷ 480,000).",
    ),
    difficulty: 1,
    points: 10,
    competency: 'job-order-costing',
  },
  {
    id: 'COS-03-E3',
    level: 3,
    module: 'COS-03',
    kind: 'fields',
    flavor: 'case',
    context: t(
      "La orden #12 de un taller de muebles (20 sillas de comedor) usó $15,000 de materiales y 40 horas de mano de obra directa a $120 por hora. El taller aplica CIF a $90 por hora de MOD.",
      "Job #12 at a furniture workshop (20 dining chairs) used $15,000 of materials and 40 direct labor hours at $120 per hour. The workshop applies overhead at $90 per DL hour.",
    ),
    prompt: t(
      "Completa la hoja de costos de la orden #12 en pesos.",
      "Complete the job cost sheet for job #12 in pesos.",
    ),
    fields: [
      { id: 'f1', label: t("Mano de obra directa", "Direct labor"), answer: 4800, unit: 'MXN', tolerance: { abs: 0.5 } },
      { id: 'f2', label: t("CIF aplicados", "Applied overhead"), answer: 3600, unit: 'MXN', tolerance: { abs: 0.5 } },
      { id: 'f3', label: t("Costo total de la orden", "Total job cost"), answer: 23400, unit: 'MXN', tolerance: { abs: 0.5 } },
      { id: 'f4', label: t("Costo por silla", "Cost per chair"), answer: 1170, unit: 'MXN', tolerance: { abs: 0.01 } },
    ],
    explanation: t(
      "MOD = 40 × 120 = $4,800. CIF = 40 × 90 = $3,600. Total = 15,000 + 4,800 + 3,600 = $23,400. Por silla = 23,400 ÷ 20 = $1,170. Error común: aplicar los CIF sobre los pesos de MOD (4,800 × 90) en vez de sobre las horas.",
      "DL = 40 × 120 = $4,800. MOH = 40 × 90 = $3,600. Total = 15,000 + 4,800 + 3,600 = $23,400. Per chair = 23,400 ÷ 20 = $1,170. Common mistake: applying overhead to DL pesos (4,800 × 90) instead of to hours.",
    ),
    difficulty: 2,
    points: 15,
    competency: 'job-order-costing',
  },
  {
    id: 'COS-03-E4',
    level: 3,
    module: 'COS-03',
    kind: 'truefalse',
    flavor: 'concept',
    prompt: t(
      "Si al cierre del año los CIF aplicados a las órdenes son menores que los CIF reales, hay CIF subaplicados.",
      "If at year-end the overhead applied to jobs is less than actual overhead, overhead is underapplied.",
    ),
    answer: true,
    explanation: t(
      "Verdadero. Se aplicó menos de lo que realmente se gastó, así que las órdenes quedaron subcosteadas; el ajuste aumenta el costo de ventas. Error común: confundir los términos y llamarlo sobreaplicado porque los reales están \"por encima\".",
      "True. Less was applied than was actually spent, so jobs were undercosted; the adjustment increases cost of goods sold. Common mistake: mixing up the terms and calling it overapplied because actual is \"above\".",
    ),
    difficulty: 1,
    points: 10,
    competency: 'job-order-costing',
  },
  {
    id: 'COS-03-E5',
    level: 3,
    module: 'COS-03',
    kind: 'journal',
    flavor: 'case',
    context: t(
      "La orden #12 del taller de muebles se terminó y está registrada en Inventarios con un costo de $23,400. Hoy se entrega al cliente y se le vende a crédito en $35,000. (Registra solo el costo, no la venta.)",
      "The furniture workshop's job #12 is finished and recorded in Inventory at a cost of $23,400. Today it is delivered to the customer and sold on credit for $35,000. (Record only the cost, not the sale.)",
    ),
    prompt: t(
      "Registra la póliza del costo de la orden #12 entregada y vendida.",
      "Record the entry for the cost of job #12 delivered and sold.",
    ),
    accountChoices: ['1102', '1104', '1108', '2101', '4101', '5101', '6101'],
    expected: [
      { accountCode: '5101', side: 'D', amount: 23400 },
      { accountCode: '1108', side: 'C', amount: 23400 },
    ],
    explanation: t(
      "Al vender, el costo de la orden sale del inventario y se vuelve costo de ventas: cargo a Costo de ventas $23,400 y abono a Inventarios $23,400. Se registra al costo, no al precio de venta. Error común: usar $35,000 (eso es la venta, otra póliza) o cargar Sueldos porque la orden incluyó mano de obra.",
      "When sold, the job's cost leaves inventory and becomes cost of goods sold: debit Cost of goods sold $23,400 and credit Inventory $23,400. It is recorded at cost, not at selling price. Common mistake: using $35,000 (that is the sale, a separate entry) or debiting Salaries because the job included labor.",
    ),
    difficulty: 2,
    points: 15,
    competency: 'job-order-costing',
  },
  {
    id: 'COS-03-E6',
    level: 3,
    module: 'COS-03',
    kind: 'mcq',
    flavor: 'case',
    context: t(
      "Una imprenta aplica CIF a $45 por hora de MOD. En el año sus órdenes usaron 5,200 horas de MOD y los CIF reales fueron $240,000.",
      "A print shop applies overhead at $45 per DL hour. During the year its jobs used 5,200 DL hours and actual overhead was $240,000.",
    ),
    prompt: t(
      "¿Qué resultado tiene la imprenta al comparar CIF aplicados contra reales?",
      "What does the print shop find when comparing applied and actual overhead?",
    ),
    options: [
      { id: 'COS-03-E6-a', text: t("CIF subaplicados por $6,000", "Overhead underapplied by $6,000") },
      { id: 'COS-03-E6-b', text: t("CIF sobreaplicados por $6,000", "Overhead overapplied by $6,000") },
      { id: 'COS-03-E6-c', text: t("CIF subaplicados por $234,000", "Overhead underapplied by $234,000") },
      { id: 'COS-03-E6-d', text: t("No hay diferencia", "There is no difference") },
    ],
    correctOptionId: 'COS-03-E6-a',
    explanation: t(
      "Aplicados = 5,200 × 45 = $234,000. Reales = $240,000. Se aplicaron $6,000 menos de lo real: subaplicados. Error común: invertir el sentido (aplicados menores que reales es subaplicado, no sobreaplicado) o confundir los aplicados con la diferencia.",
      "Applied = 5,200 × 45 = $234,000. Actual = $240,000. $6,000 less than actual was applied: underapplied. Common mistake: reversing the direction (applied less than actual is underapplied, not overapplied) or confusing applied overhead with the difference.",
    ),
    difficulty: 2,
    points: 15,
    competency: 'job-order-costing',
  },

  // ═════════════════════════ COS-04 ═════════════════════════
  {
    id: 'COS-04-E1',
    level: 3,
    module: 'COS-04',
    kind: 'mcq',
    flavor: 'concept',
    context: t(
      "Una fábrica de salsas tiene dos departamentos en línea: Mezclado y luego Envasado.",
      "A sauce factory has two departments in line: Mixing and then Packaging.",
    ),
    prompt: t(
      "¿Qué pasa con el costo de las unidades que Mezclado termina en el mes?",
      "What happens to the cost of the units Mixing completes during the month?",
    ),
    options: [
      { id: 'COS-04-E1-a', text: t("Se transfiere a Envasado como costo recibido del departamento anterior", "It is transferred to Packaging as cost received from the prior department") },
      { id: 'COS-04-E1-b', text: t("Se registra de inmediato como gasto de venta", "It is immediately recorded as a selling expense") },
      { id: 'COS-04-E1-c', text: t("Se anota en una hoja de costos por cliente", "It is entered on a cost sheet per customer") },
      { id: 'COS-04-E1-d', text: t("Se queda en Mezclado hasta fin de año", "It stays in Mixing until year-end") },
    ],
    correctOptionId: 'COS-04-E1-a',
    explanation: t(
      "En costeo por procesos, lo que termina un departamento pasa al siguiente junto con su costo, que se suma a lo que Envasado agrega. No es gasto (es costo del producto) y no hay hojas por cliente. Error común: pensar que cada departamento calcula su costo de forma aislada sin arrastrar lo anterior.",
      "In process costing, what one department completes moves to the next together with its cost, which is added to what Packaging adds. It is not an expense (it is a product cost) and there are no per-customer sheets. Common mistake: thinking each department computes its cost in isolation without carrying the prior cost forward.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'process-costing',
  },
  {
    id: 'COS-04-E2',
    level: 3,
    module: 'COS-04',
    kind: 'numeric',
    flavor: 'case',
    context: t(
      "En el departamento de horneado de una fábrica de galletas se terminaron 8,000 paquetes y quedan 3,000 en proceso al 40 % de avance en conversión.",
      "In a cookie factory's baking department, 8,000 packs were completed and 3,000 remain in process 40% complete for conversion.",
    ),
    prompt: t(
      "¿Cuántas unidades equivalentes de conversión tiene el departamento de horneado?",
      "How many equivalent units of conversion does the baking department have?",
    ),
    answer: 9200,
    unit: 'units',
    decimals: 0,
    tolerance: { abs: 0.5 },
    explanation: t(
      "UE = terminadas + en proceso × avance = 8,000 + 3,000 × 0.40 = 8,000 + 1,200 = 9,200. Error común: sumar todas como completas (11,000) o tomar solo las terminadas (8,000).",
      "EU = completed + in process × completion = 8,000 + 3,000 × 0.40 = 8,000 + 1,200 = 9,200. Common mistake: counting all as complete (11,000) or only the completed ones (8,000).",
    ),
    difficulty: 1,
    points: 10,
    competency: 'process-costing',
  },
  {
    id: 'COS-04-E3',
    level: 3,
    module: 'COS-04',
    kind: 'fields',
    flavor: 'case',
    context: t(
      "Departamento de envasado de una planta de miel (sin inventario inicial): terminó y transfirió 5,000 frascos; quedan 1,000 en proceso al 60 % de conversión. El material entra completo al inicio. Costos del mes: materiales $90,000; conversión $112,000.",
      "Packaging department of a honey plant (no opening inventory): it completed and transferred 5,000 jars; 1,000 remain in process 60% through conversion. Materials go in fully at the start. Costs for the month: materials $90,000; conversion $112,000.",
    ),
    prompt: t(
      "Prepara el informe de costos del envasado de miel: costos por unidad equivalente y reparto del costo, en pesos.",
      "Prepare the honey packaging cost report: costs per equivalent unit and cost assignment, in pesos.",
    ),
    fields: [
      { id: 'f1', label: t("Costo por UE de materiales", "Cost per EU of materials"), answer: 15, unit: 'MXN', tolerance: { abs: 0.01 } },
      { id: 'f2', label: t("Costo por UE de conversión", "Cost per EU of conversion"), answer: 20, unit: 'MXN', tolerance: { abs: 0.01 } },
      { id: 'f3', label: t("Costo de las unidades terminadas y transferidas", "Cost of units completed and transferred"), answer: 175000, unit: 'MXN', tolerance: { abs: 0.5 } },
      { id: 'f4', label: t("Costo del inventario final en proceso", "Cost of ending work in process"), answer: 27000, unit: 'MXN', tolerance: { abs: 0.5 } },
    ],
    explanation: t(
      "UE materiales = 5,000 + 1,000 = 6,000 → 90,000 ÷ 6,000 = $15. UE conversión = 5,000 + 600 = 5,600 → 112,000 ÷ 5,600 = $20. Terminadas = 5,000 × 35 = $175,000. En proceso = 1,000 × 15 + 600 × 20 = $27,000. Comprobación: 175,000 + 27,000 = $202,000 = 90,000 + 112,000. Error común: aplicar el 60 % también a materiales, que ya entraron completos.",
      "EU materials = 5,000 + 1,000 = 6,000 → 90,000 ÷ 6,000 = $15. EU conversion = 5,000 + 600 = 5,600 → 112,000 ÷ 5,600 = $20. Completed = 5,000 × 35 = $175,000. In process = 1,000 × 15 + 600 × 20 = $27,000. Check: 175,000 + 27,000 = $202,000 = 90,000 + 112,000. Common mistake: applying 60% to materials too, which were already fully added.",
    ),
    difficulty: 2,
    points: 20,
    competency: 'process-costing',
  },
  {
    id: 'COS-04-E4',
    level: 3,
    module: 'COS-04',
    kind: 'truefalse',
    flavor: 'concept',
    prompt: t(
      "En el costeo por procesos se abre una hoja de costos para cada cliente que hace un pedido.",
      "In process costing a cost sheet is opened for each customer who places an order.",
    ),
    answer: false,
    explanation: t(
      "Falso. Las hojas de costos por pedido son del costeo por órdenes. En procesos los costos se acumulan por departamento y periodo, y se obtiene un costo unitario promedio. Error común: mezclar las herramientas de los dos sistemas.",
      "False. Cost sheets per order belong to job order costing. In process costing costs are accumulated by department and period, giving an average unit cost. Common mistake: mixing the tools of the two systems.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'process-costing',
  },
  {
    id: 'COS-04-E5',
    level: 3,
    module: 'COS-04',
    kind: 'classify',
    flavor: 'concept',
    prompt: t(
      "Clasifica cada negocio según el sistema de costeo que le conviene.",
      "Classify each business by the costing system that suits it.",
    ),
    categories: [
      { id: 'COS-04-E5-c1', label: t("Costeo por órdenes", "Job order costing") },
      { id: 'COS-04-E5-c2', label: t("Costeo por procesos", "Process costing") },
    ],
    items: [
      { id: 'COS-04-E5-i1', label: t("Imprenta de invitaciones personalizadas", "Personalized invitation print shop"), correctCategoryId: 'COS-04-E5-c1' },
      { id: 'COS-04-E5-i2', label: t("Planta embotelladora de agua purificada", "Purified water bottling plant"), correctCategoryId: 'COS-04-E5-c2' },
      { id: 'COS-04-E5-i3', label: t("Constructora que levanta una casa por encargo", "Builder putting up a house on commission"), correctCategoryId: 'COS-04-E5-c1' },
      { id: 'COS-04-E5-i4', label: t("Fábrica de papel higiénico", "Toilet paper factory"), correctCategoryId: 'COS-04-E5-c2' },
      { id: 'COS-04-E5-i5', label: t("Taller que hace vestidos de novia a la medida", "Workshop making custom wedding dresses"), correctCategoryId: 'COS-04-E5-c1' },
      { id: 'COS-04-E5-i6', label: t("Molino que produce harina de trigo en serie", "Mill mass-producing wheat flour"), correctCategoryId: 'COS-04-E5-c2' },
    ],
    explanation: t(
      "Órdenes: cada pedido es distinto (invitaciones personalizadas, una casa, un vestido a la medida). Procesos: producción continua de unidades iguales (agua, papel higiénico, harina). Error común: decidir por el tamaño del negocio; lo que importa es si los productos son iguales o distintos.",
      "Job order: each order is different (personalized invitations, a house, a custom dress). Process: continuous production of identical units (water, toilet paper, flour). Common mistake: deciding by the size of the business; what matters is whether products are identical or different.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'process-costing',
  },
  {
    id: 'COS-04-E6',
    level: 3,
    module: 'COS-04',
    kind: 'multi',
    flavor: 'concept',
    prompt: t(
      "¿Qué características indican que conviene el costeo por procesos? Selecciona todas las que apliquen.",
      "Which features indicate that process costing fits? Select all that apply.",
    ),
    options: [
      { id: 'COS-04-E6-a', text: t("La producción es continua y no se detiene por pedido", "Production is continuous and does not stop per order") },
      { id: 'COS-04-E6-b', text: t("Las unidades producidas son idénticas entre sí", "The units produced are identical to each other") },
      { id: 'COS-04-E6-c', text: t("Los costos se pueden acumular por departamento durante el mes", "Costs can be accumulated by department during the month") },
      { id: 'COS-04-E6-d', text: t("Cada pedido lleva especificaciones distintas del cliente", "Each order carries different customer specifications") },
      { id: 'COS-04-E6-e', text: t("El precio se cotiza proyecto por proyecto", "The price is quoted project by project") },
    ],
    correctOptionIds: ['COS-04-E6-a', 'COS-04-E6-b', 'COS-04-E6-c'],
    explanation: t(
      "Producción continua, unidades idénticas y costos acumulados por departamento son las señales del costeo por procesos. Especificaciones distintas por cliente y cotizar por proyecto apuntan al costeo por órdenes. Error común: pensar que una empresa grande siempre usa procesos.",
      "Continuous production, identical units and costs accumulated by department are the signs of process costing. Different customer specifications and quoting per project point to job order costing. Common mistake: thinking a large company always uses process costing.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'process-costing',
  },

  // ═════════════════════════ COS-05 ═════════════════════════
  {
    id: 'COS-05-E1',
    level: 3,
    module: 'COS-05',
    kind: 'mcq',
    flavor: 'concept',
    prompt: t(
      "¿Cuál es el mejor generador de costo para la actividad \"recibir y tramitar pedidos de materiales a proveedores\"?",
      "What is the best cost driver for the activity \"receiving and processing material orders to suppliers\"?",
    ),
    options: [
      { id: 'COS-05-E1-a', text: t("Número de órdenes de compra", "Number of purchase orders") },
      { id: 'COS-05-E1-b', text: t("Horas máquina", "Machine hours") },
      { id: 'COS-05-E1-c', text: t("Metros cuadrados de la planta", "Square meters of the plant") },
      { id: 'COS-05-E1-d', text: t("Unidades vendidas", "Units sold") },
    ],
    correctOptionId: 'COS-05-E1-a',
    explanation: t(
      "El trabajo de compras crece con cada orden que se tramita, sin importar cuántas horas trabajen las máquinas o cuántas unidades se vendan. Error común: usar horas máquina para todo, que es justo la distorsión que ABC busca evitar.",
      "Purchasing work grows with each order processed, regardless of how many hours machines run or how many units are sold. Common mistake: using machine hours for everything, which is exactly the distortion ABC tries to avoid.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'activity-based-costing',
  },
  {
    id: 'COS-05-E2',
    level: 3,
    module: 'COS-05',
    kind: 'numeric',
    flavor: 'case',
    context: t(
      "En una fábrica de piezas de plástico, la actividad \"preparación de lotes\" costó $84,000 en el año y se hicieron 120 preparaciones.",
      "In a plastic parts factory, the \"batch setup\" activity cost $84,000 during the year and 120 setups were made.",
    ),
    prompt: t(
      "¿Cuál es la tasa de la actividad de preparación de lotes por cada preparación? Responde en pesos.",
      "What is the batch setup activity rate per setup? Answer in pesos.",
    ),
    answer: 700,
    unit: 'MXN',
    decimals: 2,
    tolerance: { abs: 0.01 },
    explanation: t(
      "Tasa = costo de la actividad ÷ total del generador = 84,000 ÷ 120 = $700 por preparación. Error común: dividir entre las unidades producidas, que no explican el costo de preparar lotes.",
      "Rate = activity cost ÷ total driver = 84,000 ÷ 120 = $700 per setup. Common mistake: dividing by units produced, which do not explain the cost of setting up batches.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'activity-based-costing',
  },
  {
    id: 'COS-05-E3',
    level: 3,
    module: 'COS-05',
    kind: 'fields',
    flavor: 'case',
    context: t(
      "Una fábrica de cosméticos tiene dos actividades indirectas: preparación de máquinas $45,000 (90 preparaciones) y control de calidad $30,000 (300 inspecciones). El labial A usó 60 preparaciones y 100 inspecciones; el labial B, 30 preparaciones y 200 inspecciones.",
      "A cosmetics factory has two indirect activities: machine setup $45,000 (90 setups) and quality control $30,000 (300 inspections). Lipstick A used 60 setups and 100 inspections; lipstick B, 30 setups and 200 inspections.",
    ),
    prompt: t(
      "Calcula con ABC las tasas de cada actividad y los CIF asignados a cada labial, en pesos.",
      "Using ABC, compute each activity rate and the overhead assigned to each lipstick, in pesos.",
    ),
    fields: [
      { id: 'f1', label: t("Tasa por preparación", "Rate per setup"), answer: 500, unit: 'MXN', tolerance: { abs: 0.01 } },
      { id: 'f2', label: t("Tasa por inspección", "Rate per inspection"), answer: 100, unit: 'MXN', tolerance: { abs: 0.01 } },
      { id: 'f3', label: t("CIF asignados al labial A", "Overhead assigned to lipstick A"), answer: 40000, unit: 'MXN', tolerance: { abs: 0.5 } },
      { id: 'f4', label: t("CIF asignados al labial B", "Overhead assigned to lipstick B"), answer: 35000, unit: 'MXN', tolerance: { abs: 0.5 } },
    ],
    explanation: t(
      "Tasas: 45,000 ÷ 90 = $500; 30,000 ÷ 300 = $100. A: 60 × 500 + 100 × 100 = 30,000 + 10,000 = $40,000. B: 30 × 500 + 200 × 100 = 15,000 + 20,000 = $35,000. Comprobación: 40,000 + 35,000 = $75,000 = total de CIF. Error común: cruzar las tasas (aplicar la de preparación a inspecciones).",
      "Rates: 45,000 ÷ 90 = $500; 30,000 ÷ 300 = $100. A: 60 × 500 + 100 × 100 = 30,000 + 10,000 = $40,000. B: 30 × 500 + 200 × 100 = 15,000 + 20,000 = $35,000. Check: 40,000 + 35,000 = $75,000 = total overhead. Common mistake: mixing up rates (applying the setup rate to inspections).",
    ),
    difficulty: 2,
    points: 20,
    competency: 'activity-based-costing',
  },
  {
    id: 'COS-05-E4',
    level: 3,
    module: 'COS-05',
    kind: 'truefalse',
    flavor: 'interpret',
    prompt: t(
      "Al pasar de repartir los CIF solo por horas máquina a usar ABC, los productos de bajo volumen y muy especializados suelen resultar con un costo mayor.",
      "When moving from allocating overhead only by machine hours to using ABC, low-volume, highly specialized products usually end up with a higher cost.",
    ),
    answer: true,
    explanation: t(
      "Verdadero. Esos productos provocan muchas preparaciones e inspecciones pero usan pocas horas máquina; con una sola base cargan pocos CIF y con ABC reciben los que realmente provocan. Error común: creer que ABC siempre sube todos los costos; solo los redistribuye, el total de CIF es el mismo.",
      "True. Those products cause many setups and inspections but use few machine hours; with a single base they carry little overhead, and with ABC they receive what they actually cause. Common mistake: believing ABC raises all costs; it only redistributes them, total overhead stays the same.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'activity-based-costing',
  },
  {
    id: 'COS-05-E5',
    level: 3,
    module: 'COS-05',
    kind: 'classify',
    flavor: 'concept',
    context: t(
      "Una fábrica de juguetes de plástico organizó sus costos indirectos por actividades.",
      "A plastic toy factory organized its overhead by activities.",
    ),
    prompt: t(
      "Relaciona cada actividad de la fábrica de juguetes con su generador de costo más adecuado.",
      "Match each activity of the toy factory with its most suitable cost driver.",
    ),
    categories: [
      { id: 'COS-05-E5-c1', label: t("Número de preparaciones", "Number of setups") },
      { id: 'COS-05-E5-c2', label: t("Número de inspecciones", "Number of inspections") },
      { id: 'COS-05-E5-c3', label: t("Horas máquina", "Machine hours") },
      { id: 'COS-05-E5-c4', label: t("Número de órdenes de compra", "Number of purchase orders") },
    ],
    items: [
      { id: 'COS-05-E5-i1', label: t("Cambiar los moldes para pasar a otro modelo", "Changing molds to switch to another model"), correctCategoryId: 'COS-05-E5-c1' },
      { id: 'COS-05-E5-i2', label: t("Revisar muestras para detectar defectos", "Checking samples to detect defects"), correctCategoryId: 'COS-05-E5-c2' },
      { id: 'COS-05-E5-i3', label: t("Operar y dar energía a las inyectoras", "Running and powering the injection machines"), correctCategoryId: 'COS-05-E5-c3' },
      { id: 'COS-05-E5-i4', label: t("Tramitar compras de resina con proveedores", "Processing resin purchases with suppliers"), correctCategoryId: 'COS-05-E5-c4' },
      { id: 'COS-05-E5-i5', label: t("Calibrar la máquina al iniciar cada lote", "Calibrating the machine at the start of each batch"), correctCategoryId: 'COS-05-E5-c1' },
    ],
    explanation: t(
      "Cambiar moldes y calibrar al iniciar lote ocurren una vez por preparación; revisar muestras depende de las inspecciones; la energía de las inyectoras crece con las horas que operan; tramitar compras depende del número de órdenes. Error común: asignar la calibración a horas máquina; se hace por lote, no por hora.",
      "Changing molds and calibrating at the start of a batch happen once per setup; checking samples depends on inspections; injection machine power grows with operating hours; processing purchases depends on the number of orders. Common mistake: assigning calibration to machine hours; it is done per batch, not per hour.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'activity-based-costing',
  },
  {
    id: 'COS-05-E6',
    level: 3,
    module: 'COS-05',
    kind: 'multi',
    flavor: 'interpret',
    prompt: t(
      "¿En qué situaciones suele valer la pena implementar costeo ABC? Selecciona todas las que apliquen.",
      "In which situations is implementing ABC usually worthwhile? Select all that apply.",
    ),
    options: [
      { id: 'COS-05-E6-a', text: t("La empresa fabrica muchos productos muy distintos entre sí", "The company makes many very different products") },
      { id: 'COS-05-E6-b', text: t("Los costos indirectos son una parte grande del costo total", "Overhead is a large share of total cost") },
      { id: 'COS-05-E6-c', text: t("Los productos consumen actividades en proporciones muy diferentes", "Products consume activities in very different proportions") },
      { id: 'COS-05-E6-d', text: t("La empresa hace un solo producto homogéneo", "The company makes a single uniform product") },
      { id: 'COS-05-E6-e', text: t("Los costos indirectos son muy pequeños", "Overhead is very small") },
    ],
    correctOptionIds: ['COS-05-E6-a', 'COS-05-E6-b', 'COS-05-E6-c'],
    explanation: t(
      "ABC aporta cuando hay diversidad de productos, CIF importantes y consumo de actividades desigual: ahí una sola base distorsiona más. Con un solo producto o CIF pequeños, el costo de medir actividades supera el beneficio. Error común: pensar que ABC siempre es mejor sin importar su costo de implementación.",
      "ABC adds value when there is product diversity, significant overhead and uneven activity consumption: that is where a single base distorts most. With a single product or small overhead, the cost of measuring activities exceeds the benefit. Common mistake: thinking ABC is always better regardless of its implementation cost.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'activity-based-costing',
  },

  // ═════════════════════════ COS-06 ═════════════════════════
  {
    id: 'COS-06-E1',
    level: 3,
    module: 'COS-06',
    kind: 'mcq',
    flavor: 'interpret',
    prompt: t(
      "Una variación en precio de materiales favorable significa que…",
      "A favorable materials price variance means that…",
    ),
    options: [
      { id: 'COS-06-E1-a', text: t("Se pagó por la materia prima menos que el precio estándar", "Less than the standard price was paid for the raw material") },
      { id: 'COS-06-E1-b', text: t("Se usó menos material del permitido", "Less material than allowed was used") },
      { id: 'COS-06-E1-c', text: t("Se produjeron más unidades de las planeadas", "More units than planned were produced") },
      { id: 'COS-06-E1-d', text: t("La calidad del material fue mejor que la esperada", "Material quality was better than expected") },
    ],
    correctOptionId: 'COS-06-E1-a',
    explanation: t(
      "La variación en precio compara el precio real contra el estándar; es favorable si compraste más barato. Usar menos material es la variación en cantidad, y producir más no es una variación de precio. Error común: suponer que favorable significa mejor calidad; a veces lo barato trae más desperdicio.",
      "The price variance compares actual price against standard; it is favorable if you bought cheaper. Using less material is the quantity variance, and producing more is not a price variance. Common mistake: assuming favorable means better quality; sometimes cheap material brings more waste.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'standard-costing',
  },
  {
    id: 'COS-06-E2',
    level: 3,
    module: 'COS-06',
    kind: 'formula',
    flavor: 'concept',
    prompt: t(
      "Completa la fórmula de la variación en precio de materiales.",
      "Complete the formula for the materials price variance.",
    ),
    template: 'Var. precio / Price variance = ({{b1}} − {{b2}}) × {{b3}}',
    blanks: [
      {
        id: 'b1',
        options: [
          { id: 'COS-06-E2-b1-a', text: t("Precio real", "Actual price") },
          { id: 'COS-06-E2-b1-b', text: t("Cantidad real", "Actual quantity") },
          { id: 'COS-06-E2-b1-c', text: t("Tarifa estándar", "Standard rate") },
        ],
        correctOptionId: 'COS-06-E2-b1-a',
      },
      {
        id: 'b2',
        options: [
          { id: 'COS-06-E2-b2-a', text: t("Cantidad estándar permitida", "Standard quantity allowed") },
          { id: 'COS-06-E2-b2-b', text: t("Precio estándar", "Standard price") },
          { id: 'COS-06-E2-b2-c', text: t("Horas reales", "Actual hours") },
        ],
        correctOptionId: 'COS-06-E2-b2-b',
      },
      {
        id: 'b3',
        options: [
          { id: 'COS-06-E2-b3-a', text: t("Precio estándar", "Standard price") },
          { id: 'COS-06-E2-b3-b', text: t("Unidades vendidas", "Units sold") },
          { id: 'COS-06-E2-b3-c', text: t("Cantidad real", "Actual quantity") },
        ],
        correctOptionId: 'COS-06-E2-b3-c',
      },
    ],
    explanation: t(
      "Var. precio = (Precio real − Precio estándar) × Cantidad real: la diferencia de precio se multiplica por lo que realmente se compró o usó. Error común: multiplicar por la cantidad estándar permitida; esa va en la variación en cantidad, junto con el precio estándar.",
      "Price variance = (Actual price − Standard price) × Actual quantity: the price difference is multiplied by what was actually bought or used. Common mistake: multiplying by the standard quantity allowed; that belongs in the quantity variance, together with the standard price.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'standard-costing',
  },
  {
    id: 'COS-06-E3',
    level: 3,
    module: 'COS-06',
    kind: 'fields',
    flavor: 'case',
    context: t(
      "Un taller de playeras tiene como estándar 2 metros de tela a $40 por metro por playera. Este mes hizo 500 playeras y usó 1,050 metros comprados a $38 por metro.",
      "A T-shirt workshop has a standard of 2 meters of fabric at $40 per meter per shirt. This month it made 500 shirts and used 1,050 meters bought at $38 per meter.",
    ),
    prompt: t(
      "Calcula la cantidad estándar permitida de tela y el monto (sin signo) de las variaciones en precio y en cantidad.",
      "Compute the standard quantity of fabric allowed and the amount (without sign) of the price and quantity variances.",
    ),
    fields: [
      { id: 'f1', label: t("Cantidad estándar permitida (metros)", "Standard quantity allowed (meters)"), answer: 1000, unit: 'none', tolerance: { abs: 0.5 } },
      { id: 'f2', label: t("Variación en precio (monto)", "Price variance (amount)"), answer: 2100, unit: 'MXN', tolerance: { abs: 0.5 } },
      { id: 'f3', label: t("Variación en cantidad (monto)", "Quantity variance (amount)"), answer: 2000, unit: 'MXN', tolerance: { abs: 0.5 } },
    ],
    explanation: t(
      "Permitida = 2 × 500 = 1,000 m. Precio: (38 − 40) × 1,050 = −2,100 → $2,100 favorable. Cantidad: (1,050 − 1,000) × 40 = $2,000 desfavorable. En neto, $100 favorable. Error común: usar 1,000 m en la variación en precio; ahí va la cantidad real (1,050).",
      "Allowed = 2 × 500 = 1,000 m. Price: (38 − 40) × 1,050 = −2,100 → $2,100 favorable. Quantity: (1,050 − 1,000) × 40 = $2,000 unfavorable. Net, $100 favorable. Common mistake: using 1,000 m in the price variance; the actual quantity (1,050) goes there.",
    ),
    difficulty: 2,
    points: 20,
    competency: 'standard-costing',
  },
  {
    id: 'COS-06-E4',
    level: 3,
    module: 'COS-06',
    kind: 'numeric',
    flavor: 'case',
    context: t(
      "En una fábrica de lámparas el estándar es 1.5 horas de MOD por lámpara a $110 la hora. Este mes se hicieron 600 lámparas en 870 horas reales pagadas a $115 la hora.",
      "In a lamp factory the standard is 1.5 DL hours per lamp at $110 per hour. This month 600 lamps were made in 870 actual hours paid at $115 per hour.",
    ),
    prompt: t(
      "¿De cuánto es la variación en eficiencia de mano de obra de la fábrica de lámparas? Escribe el monto sin signo, en pesos.",
      "What is the lamp factory's labor efficiency variance? Enter the amount without sign, in pesos.",
    ),
    answer: 3300,
    unit: 'MXN',
    decimals: 0,
    tolerance: { abs: 0.5 },
    explanation: t(
      "Horas permitidas = 1.5 × 600 = 900. Eficiencia = (870 − 900) × 110 = −3,300 → $3,300 favorable: se trabajó más rápido de lo estándar. Error común: multiplicar por la tarifa real ($115 → 3,450); la eficiencia se valúa a la tarifa estándar. (La variación en tarifa sería (115 − 110) × 870 = $4,350 desfavorable.)",
      "Hours allowed = 1.5 × 600 = 900. Efficiency = (870 − 900) × 110 = −3,300 → $3,300 favorable: work was faster than standard. Common mistake: multiplying by the actual rate ($115 → 3,450); efficiency is valued at the standard rate. (The rate variance would be (115 − 110) × 870 = $4,350 unfavorable.)",
    ),
    difficulty: 2,
    points: 15,
    competency: 'standard-costing',
  },
  {
    id: 'COS-06-E5',
    level: 3,
    module: 'COS-06',
    kind: 'classify',
    flavor: 'interpret',
    prompt: t(
      "Clasifica cada situación como variación favorable o desfavorable.",
      "Classify each situation as a favorable or unfavorable variance.",
    ),
    categories: [
      { id: 'COS-06-E5-c1', label: t("Favorable", "Favorable") },
      { id: 'COS-06-E5-c2', label: t("Desfavorable", "Unfavorable") },
    ],
    items: [
      { id: 'COS-06-E5-i1', label: t("Se compró la materia prima más barata que el estándar", "Raw material was bought cheaper than standard"), correctCategoryId: 'COS-06-E5-c1' },
      { id: 'COS-06-E5-i2', label: t("Se usaron más horas de las permitidas para lo producido", "More hours than allowed were used for the output"), correctCategoryId: 'COS-06-E5-c2' },
      { id: 'COS-06-E5-i3', label: t("Se pagó una tarifa por hora mayor que la estándar", "An hourly rate higher than standard was paid"), correctCategoryId: 'COS-06-E5-c2' },
      { id: 'COS-06-E5-i4', label: t("Se usó menos material del permitido", "Less material than allowed was used"), correctCategoryId: 'COS-06-E5-c1' },
      { id: 'COS-06-E5-i5', label: t("El proveedor subió el precio del acero por encima del estándar", "The supplier raised the price of steel above standard"), correctCategoryId: 'COS-06-E5-c2' },
    ],
    explanation: t(
      "Favorable = gastar menos de lo que se debía (precio más bajo, menos material). Desfavorable = gastar más (más horas, tarifa más alta, precio más alto). Error común: llamar favorable a usar más horas porque \"se trabajó más\"; para costos, más consumo es desfavorable.",
      "Favorable = spending less than you should have (lower price, less material). Unfavorable = spending more (more hours, higher rate, higher price). Common mistake: calling more hours favorable because \"more work was done\"; for costs, more consumption is unfavorable.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'standard-costing',
  },
  {
    id: 'COS-06-E6',
    level: 3,
    module: 'COS-06',
    kind: 'truefalse',
    flavor: 'interpret',
    prompt: t(
      "Una variación favorable en el precio de los materiales siempre es una buena noticia para la empresa.",
      "A favorable materials price variance is always good news for the company.",
    ),
    answer: false,
    explanation: t(
      "Falso. Comprar más barato puede significar material de menor calidad, que provoca más desperdicio (cantidad desfavorable), más horas de retrabajo o quejas de clientes. Las variaciones se analizan juntas. Error común: premiar a compras por el ahorro sin revisar lo que pasó en producción.",
      "False. Buying cheaper may mean lower-quality material, causing more waste (unfavorable quantity), more rework hours or customer complaints. Variances are analyzed together. Common mistake: rewarding purchasing for the saving without checking what happened in production.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'standard-costing',
  },
]
