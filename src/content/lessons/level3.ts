import type { Exercise, Lesson } from '../../types'

/** Bilingual text helper. */
const t = (es: string, en: string) => ({ es, en })

// ───────────────────────────── Lessons ─────────────────────────────

export const lessons: Lesson[] = [
  // ─────────────── L3-01 ───────────────
  {
    id: 'L3-01',
    level: 3,
    topicIds: ['3.1', '3.2'],
    title: t(
      'Clasificación de costos: fijos, variables, directos e indirectos',
      'Cost classification: fixed, variable, direct and indirect',
    ),
    summary: t(
      'Aprende a clasificar los costos según su comportamiento ante el volumen y según su rastreabilidad al producto, y a separar costos mixtos con el método de punto alto-punto bajo.',
      'Learn to classify costs by how they behave with volume and by how traceable they are to the product, and to split mixed costs with the high-low method.',
    ),
    minutes: 14,
    objectives: [
      t(
        'Distinguir costos fijos, variables y mixtos según su comportamiento ante cambios en el volumen.',
        'Distinguish fixed, variable and mixed costs by their behaviour as volume changes.',
      ),
      t(
        'Identificar costos directos e indirectos respecto de un objeto de costo.',
        'Identify direct and indirect costs with respect to a cost object.',
      ),
      t(
        'Calcular costo primo, costo de conversión y costo de producción.',
        'Compute prime cost, conversion cost and manufacturing cost.',
      ),
      t(
        'Separar un costo mixto en su parte fija y variable con el método de punto alto-punto bajo.',
        'Split a mixed cost into fixed and variable parts using the high-low method.',
      ),
    ],
    theory: [
      {
        heading: t('¿Qué es un costo y para qué se clasifica?', 'What is a cost and why classify it?'),
        body: [
          t(
            'Un **costo** es el valor de los recursos sacrificados para obtener un bien o servicio. En contabilidad de costos lo clasificamos de distintas maneras porque cada clasificación responde a una pregunta gerencial diferente: ¿cuánto cambiará el costo si produzco más? ¿cuánto cuesta realmente este producto? ¿qué costo desaparece si elimino una línea?',
            'A **cost** is the value of resources given up to obtain a good or service. In cost accounting we classify costs in several ways because each classification answers a different management question: how much will cost change if I produce more? what does this product really cost? which cost disappears if I drop a line?',
          ),
          t(
            'Las dos clasificaciones básicas son por **comportamiento** (fijo, variable, mixto) y por **rastreabilidad** a un objeto de costo (directo, indirecto). Un mismo costo puede ser, por ejemplo, variable y directo (la madera de una silla) o fijo e indirecto (la renta de la planta).',
            'The two basic classifications are by **behaviour** (fixed, variable, mixed) and by **traceability** to a cost object (direct, indirect). The same cost can be, for instance, variable and direct (the wood in a chair) or fixed and indirect (plant rent).',
          ),
        ],
      },
      {
        heading: t('Costos fijos, variables y mixtos', 'Fixed, variable and mixed costs'),
        body: [
          t(
            'Un **costo variable** cambia en total en proporción directa al volumen de actividad, pero es constante por unidad (p. ej., materia prima, comisiones por venta). Un **costo fijo** permanece constante en total dentro de un **rango relevante** de actividad y por eso su monto por unidad disminuye cuando el volumen aumenta (p. ej., renta, sueldo del supervisor, depreciación en línea recta).',
            'A **variable cost** changes in total in direct proportion to activity volume but is constant per unit (e.g., raw materials, sales commissions). A **fixed cost** stays constant in total within a **relevant range** of activity, so its per-unit amount falls as volume rises (e.g., rent, supervisor salary, straight-line depreciation).',
          ),
          t(
            'Un **costo mixto** (semivariable) tiene una parte fija y una variable, como la luz con cargo fijo más consumo. Para planear se separa con el **método de punto alto-punto bajo**: se toman el periodo de mayor y menor actividad, la diferencia de costos entre la diferencia de actividad da el costo variable unitario, y el resto es el costo fijo.',
            'A **mixed cost** (semi-variable) has a fixed part and a variable part, such as electricity with a fixed charge plus usage. For planning it is split with the **high-low method**: take the highest and lowest activity periods; the change in cost divided by the change in activity gives the variable cost per unit, and the remainder is the fixed cost.',
          ),
        ],
        formula: 'CVu = (Costo alto − Costo bajo) / (Actividad alta − Actividad baja);  CF = Costo total − CVu × Actividad',
      },
      {
        heading: t('Costos directos e indirectos', 'Direct and indirect costs'),
        body: [
          t(
            'Un costo es **directo** cuando puede identificarse de forma económica y precisa con un objeto de costo (un producto, una orden, un departamento). Es **indirecto** cuando se comparte entre varios objetos y debe asignarse mediante una base de prorrateo.',
            'A cost is **direct** when it can be traced economically and accurately to a cost object (a product, a job, a department). It is **indirect** when it is shared by several objects and must be allocated using an allocation base.',
          ),
          t(
            'En manufactura, el costo de producción tiene tres elementos: **materia prima directa (MPD)**, **mano de obra directa (MOD)** y **cargos (gastos) indirectos de fabricación (CIF)**. Los CIF incluyen materiales y mano de obra indirectos, depreciación de la planta, seguros de la fábrica, energía, etc. Los gastos de venta y administración no forman parte del costo del producto: son gastos del periodo.',
            'In manufacturing, product cost has three elements: **direct materials (DM)**, **direct labour (DL)** and **manufacturing overhead (MOH)**. MOH includes indirect materials and labour, plant depreciation, factory insurance, power, etc. Selling and administrative expenses are not product costs: they are period expenses.',
          ),
        ],
        bullets: [
          t('Costo primo = MPD + MOD', 'Prime cost = DM + DL'),
          t('Costo de conversión = MOD + CIF', 'Conversion cost = DL + MOH'),
          t('Costo de producción = MPD + MOD + CIF', 'Manufacturing cost = DM + DL + MOH'),
        ],
      },
      {
        heading: t('El rango relevante y los errores comunes', 'The relevant range and common mistakes'),
        body: [
          t(
            'Las clasificaciones fijo/variable solo son válidas dentro del **rango relevante**: si la producción supera la capacidad de la planta habrá que rentar otra nave y el costo "fijo" salta a otro nivel (costo escalonado).',
            'Fixed/variable classifications are only valid within the **relevant range**: if output exceeds plant capacity another building must be rented and the "fixed" cost jumps to a new level (step cost).',
          ),
          t(
            'Error frecuente: tratar el **costo fijo unitario** como si fuera constante. Si la renta es $30,000 al mes, cuesta $30 por unidad al producir 1,000 unidades pero $15 al producir 2,000. Por eso, para decidir, se trabaja con costos fijos **totales** y costos variables **unitarios**.',
            'A frequent mistake is treating **unit fixed cost** as constant. If rent is $30,000 a month, it is $30 per unit at 1,000 units but $15 at 2,000. That is why decisions use **total** fixed costs and **unit** variable costs.',
          ),
        ],
      },
    ],
    examples: [
      {
        title: t('Punto alto-punto bajo en mantenimiento', 'High-low method for maintenance cost'),
        problem: t(
          'El costo de mantenimiento de una planta fue $34,000 en el mes de menor actividad (1,200 horas máquina) y $46,000 en el de mayor actividad (2,000 horas máquina). Estima la parte variable y fija, y el costo esperado para 1,800 horas.',
          'A plant\'s maintenance cost was $34,000 in the lowest-activity month (1,200 machine hours) and $46,000 in the highest (2,000 machine hours). Estimate the variable and fixed parts and the expected cost at 1,800 hours.',
        ),
        steps: [
          t(
            'Costo variable por hora = (46,000 − 34,000) / (2,000 − 1,200) = 12,000 / 800 = $15 por hora.',
            'Variable cost per hour = (46,000 − 34,000) / (2,000 − 1,200) = 12,000 / 800 = $15 per hour.',
          ),
          t(
            'Costo fijo = 34,000 − 15 × 1,200 = 34,000 − 18,000 = $16,000 (comprobación: 46,000 − 15 × 2,000 = $16,000).',
            'Fixed cost = 34,000 − 15 × 1,200 = 34,000 − 18,000 = $16,000 (check: 46,000 − 15 × 2,000 = $16,000).',
          ),
          t(
            'Costo esperado a 1,800 horas = 16,000 + 15 × 1,800 = 16,000 + 27,000 = $43,000.',
            'Expected cost at 1,800 hours = 16,000 + 15 × 1,800 = 16,000 + 27,000 = $43,000.',
          ),
        ],
        result: t(
          'Fórmula de costo: Y = $16,000 + $15 × horas máquina; a 1,800 horas el costo esperado es $43,000.',
          'Cost formula: Y = $16,000 + $15 × machine hours; at 1,800 hours the expected cost is $43,000.',
        ),
      },
      {
        title: t('Elementos del costo en una panadería', 'Cost elements in a bakery'),
        problem: t(
          'En un mes, una panadería industrial usó harina e ingredientes por $40,000 (MPD) y pagó a panaderos $30,000 (MOD). Sus CIF fueron: depreciación del horno $8,000, sueldo del supervisor $12,000 y gas $5,000. Produjo 10,000 piezas. Calcula costo primo, costo de conversión, costo de producción y costo unitario.',
          'In one month an industrial bakery used flour and ingredients of $40,000 (DM) and paid bakers $30,000 (DL). Its MOH was: oven depreciation $8,000, supervisor salary $12,000 and gas $5,000. It produced 10,000 loaves. Compute prime cost, conversion cost, manufacturing cost and unit cost.',
        ),
        steps: [
          t('CIF = 8,000 + 12,000 + 5,000 = $25,000.', 'MOH = 8,000 + 12,000 + 5,000 = $25,000.'),
          t('Costo primo = 40,000 + 30,000 = $70,000.', 'Prime cost = 40,000 + 30,000 = $70,000.'),
          t('Costo de conversión = 30,000 + 25,000 = $55,000.', 'Conversion cost = 30,000 + 25,000 = $55,000.'),
          t(
            'Costo de producción = 40,000 + 30,000 + 25,000 = $95,000; costo unitario = 95,000 / 10,000 = $9.50.',
            'Manufacturing cost = 40,000 + 30,000 + 25,000 = $95,000; unit cost = 95,000 / 10,000 = $9.50.',
          ),
        ],
        result: t(
          'Costo primo $70,000; costo de conversión $55,000; costo de producción $95,000; $9.50 por pieza. Nota que la MOD se incluye tanto en el costo primo como en el de conversión.',
          'Prime cost $70,000; conversion cost $55,000; manufacturing cost $95,000; $9.50 per loaf. Note that DL is included in both prime cost and conversion cost.',
        ),
      },
    ],
    keyPoints: [
      t(
        'Variable: cambia en total, constante por unidad. Fijo: constante en total (en el rango relevante), cambia por unidad.',
        'Variable: changes in total, constant per unit. Fixed: constant in total (within the relevant range), changes per unit.',
      ),
      t(
        'Directo vs. indirecto depende del objeto de costo: lo directo se rastrea, lo indirecto se asigna.',
        'Direct vs. indirect depends on the cost object: direct costs are traced, indirect costs are allocated.',
      ),
      t(
        'Costo de producción = MPD + MOD + CIF; los gastos de venta y administración son del periodo.',
        'Manufacturing cost = DM + DL + MOH; selling and administrative expenses are period costs.',
      ),
      t(
        'El método punto alto-punto bajo separa costos mixtos usando solo los extremos de actividad.',
        'The high-low method splits mixed costs using only the activity extremes.',
      ),
    ],
    exerciseIds: ['N3-001', 'N3-002', 'N3-003', 'N3-004', 'N3-005', 'N3-006'],
  },

  // ─────────────── L3-02 ───────────────
  {
    id: 'L3-02',
    level: 3,
    topicIds: ['3.3', '3.4', '3.5'],
    title: t('Sistemas de costeo: órdenes, procesos y ABC', 'Costing systems: job-order, process and ABC'),
    summary: t(
      'Compara el costeo por órdenes de producción, el costeo por procesos con unidades equivalentes y el costeo basado en actividades (ABC) para asignar los costos indirectos.',
      'Compare job-order costing, process costing with equivalent units and activity-based costing (ABC) for assigning overhead.',
    ),
    minutes: 18,
    objectives: [
      t(
        'Elegir el sistema de costeo adecuado según el tipo de producción.',
        'Choose the right costing system for the type of production.',
      ),
      t(
        'Calcular una tasa predeterminada de CIF y el costo de una orden de producción.',
        'Compute a predetermined overhead rate and the cost of a job.',
      ),
      t(
        'Calcular unidades equivalentes y costo unitario en costeo por procesos (promedio ponderado).',
        'Compute equivalent units and unit cost in process costing (weighted-average).',
      ),
      t(
        'Asignar CIF con ABC usando tasas por actividad y compararlo con el costeo tradicional.',
        'Assign overhead with ABC using activity rates and compare it with traditional costing.',
      ),
    ],
    theory: [
      {
        heading: t('Costeo por órdenes de producción', 'Job-order costing'),
        body: [
          t(
            'Se usa cuando cada producto o lote es distinto y se fabrica a pedido: imprentas, despachos, constructoras, mueblerías a la medida. Los costos se acumulan en una **hoja de costos por orden**: la MPD y la MOD se cargan directamente a cada orden, y los CIF se **aplican** con una **tasa predeterminada**.',
            'It is used when each product or batch is distinct and made to order: print shops, firms, builders, custom furniture makers. Costs accumulate on a **job cost sheet**: DM and DL are charged directly to each job and MOH is **applied** using a **predetermined rate**.',
          ),
          t(
            'La tasa se calcula al inicio del periodo con cifras presupuestadas porque los CIF reales se conocen hasta el cierre. Al final, la diferencia entre CIF reales y aplicados (sub o sobreaplicación) se ajusta, normalmente contra el costo de ventas.',
            'The rate is computed at the start of the period with budgeted figures because actual overhead is only known at period end. Afterwards, the difference between actual and applied overhead (under- or over-applied) is adjusted, usually against cost of goods sold.',
          ),
        ],
        formula: 'Tasa CIF = CIF presupuestados / Base de asignación presupuestada;  CIF aplicados = Tasa × Base real de la orden',
      },
      {
        heading: t('Costeo por procesos y unidades equivalentes', 'Process costing and equivalent units'),
        body: [
          t(
            'Se usa en producción continua de artículos homogéneos (cemento, refrescos, químicos). Los costos se acumulan por **departamento o proceso** y se dividen entre las unidades producidas en el periodo.',
            'It is used in continuous production of homogeneous goods (cement, soft drinks, chemicals). Costs accumulate by **department or process** and are divided by the units produced in the period.',
          ),
          t(
            'Como al cierre hay unidades parcialmente terminadas, se expresan en **unidades equivalentes (UE)**: 1,000 unidades al 40 % de conversión equivalen a 400 unidades terminadas. Con el método de **promedio ponderado**: UE = unidades terminadas + unidades en proceso final × % de avance. Normalmente se calculan UE separadas para materiales y para conversión, porque avanzan a ritmos distintos.',
            'Because some units are only partly finished at period end, they are expressed in **equivalent units (EU)**: 1,000 units 40 % converted equal 400 finished units. Under the **weighted-average** method: EU = units completed + ending WIP units × % complete. EU are usually computed separately for materials and for conversion because they progress at different rates.',
          ),
        ],
        formula: 'Costo por UE = Costos totales del elemento / UE del elemento',
      },
      {
        heading: t('Costeo basado en actividades (ABC)', 'Activity-based costing (ABC)'),
        body: [
          t(
            'El costeo tradicional asigna todos los CIF con una sola base (horas de MOD u horas máquina). Cuando hay productos muy distintos en volumen y complejidad, esto **subcostea** los productos de bajo volumen y complejos y **sobrecostea** los de alto volumen.',
            'Traditional costing assigns all overhead with a single base (DL hours or machine hours). When products differ greatly in volume and complexity, this **under-costs** low-volume complex products and **over-costs** high-volume ones.',
          ),
          t(
            'ABC agrupa los CIF en **actividades** (preparación de máquinas, inspección, maquinado) y cada una tiene un **inductor de costo** (número de preparaciones, inspecciones, horas máquina). Se calcula una tasa por actividad y cada producto recibe costo según cuánto consume de cada inductor.',
            'ABC groups overhead into **activities** (machine setups, inspection, machining), each with a **cost driver** (number of setups, inspections, machine hours). A rate is computed for each activity and each product receives cost according to how much of each driver it consumes.',
          ),
        ],
        formula: 'Tasa de actividad = Costo de la actividad / Total del inductor;  CIF asignados = Σ (Tasa × Inductor consumido)',
      },
      {
        heading: t('Cómo elegir el sistema', 'How to choose a system'),
        body: [
          t(
            'Órdenes y procesos responden a **cómo se produce**; ABC responde a **cómo se asignan los CIF**, por lo que puede combinarse con cualquiera de los dos. ABC es más preciso pero más costoso de mantener: conviene cuando los CIF son una proporción grande del costo y la mezcla de productos es diversa.',
            'Job-order and process costing reflect **how goods are produced**; ABC reflects **how overhead is assigned**, so it can be combined with either. ABC is more accurate but more costly to maintain: it pays off when overhead is a large share of cost and the product mix is diverse.',
          ),
        ],
        bullets: [
          t('Órdenes: productos únicos, costo por orden.', 'Job-order: unique products, cost per job.'),
          t('Procesos: productos homogéneos, costo por departamento y UE.', 'Process: homogeneous products, cost per department and EU.'),
          t('ABC: varias tasas por actividad, mejor rastreo de CIF.', 'ABC: several activity rates, better overhead tracing.'),
        ],
      },
    ],
    examples: [
      {
        title: t('Unidades equivalentes (promedio ponderado)', 'Equivalent units (weighted-average)'),
        problem: t(
          'Un departamento terminó y transfirió 4,500 unidades. Al cierre quedan 1,000 unidades en proceso, con 100 % de materiales y 30 % de conversión. Costos del periodo (incluido el inventario inicial): materiales $110,000 y conversión $72,000. Calcula el costo de lo transferido y del inventario final en proceso.',
          'A department completed and transferred 4,500 units. At period end 1,000 units remain in process, 100 % complete for materials and 30 % for conversion. Period costs (including beginning inventory): materials $110,000 and conversion $72,000. Compute the cost transferred out and the cost of ending WIP.',
        ),
        steps: [
          t(
            'UE materiales = 4,500 + 1,000 × 100 % = 5,500; UE conversión = 4,500 + 1,000 × 30 % = 4,800.',
            'EU materials = 4,500 + 1,000 × 100 % = 5,500; EU conversion = 4,500 + 1,000 × 30 % = 4,800.',
          ),
          t(
            'Costo por UE: materiales 110,000 / 5,500 = $20; conversión 72,000 / 4,800 = $15; total $35 por unidad terminada.',
            'Cost per EU: materials 110,000 / 5,500 = $20; conversion 72,000 / 4,800 = $15; total $35 per finished unit.',
          ),
          t('Costo transferido = 4,500 × 35 = $157,500.', 'Cost transferred out = 4,500 × 35 = $157,500.'),
          t(
            'Inventario final = 1,000 × 20 + 300 × 15 = 20,000 + 4,500 = $24,500. Comprobación: 157,500 + 24,500 = $182,000 = 110,000 + 72,000.',
            'Ending WIP = 1,000 × 20 + 300 × 15 = 20,000 + 4,500 = $24,500. Check: 157,500 + 24,500 = $182,000 = 110,000 + 72,000.',
          ),
        ],
        result: t(
          'Se transfieren $157,500 y quedan $24,500 en el inventario final en proceso.',
          '$157,500 is transferred out and $24,500 remains in ending WIP.',
        ),
      },
      {
        title: t('ABC frente a una tasa única', 'ABC versus a single plantwide rate'),
        problem: t(
          'Una planta tiene CIF por $240,000: preparación de máquinas $80,000 (40 preparaciones) y maquinado $160,000 (8,000 horas máquina). El producto X (500 unidades) usa 30 preparaciones y 2,000 horas máquina; el producto Y (4,000 unidades) usa 10 preparaciones y 6,000 horas máquina. Compara el CIF unitario con ABC y con una tasa única por hora máquina.',
          'A plant has overhead of $240,000: machine setups $80,000 (40 setups) and machining $160,000 (8,000 machine hours). Product X (500 units) uses 30 setups and 2,000 machine hours; product Y (4,000 units) uses 10 setups and 6,000 machine hours. Compare unit overhead under ABC and under a single machine-hour rate.',
        ),
        steps: [
          t(
            'Tasas ABC: preparación 80,000 / 40 = $2,000 por preparación; maquinado 160,000 / 8,000 = $20 por hora máquina.',
            'ABC rates: setups 80,000 / 40 = $2,000 per setup; machining 160,000 / 8,000 = $20 per machine hour.',
          ),
          t(
            'X: 30 × 2,000 + 2,000 × 20 = 60,000 + 40,000 = $100,000 → $200 por unidad. Y: 10 × 2,000 + 6,000 × 20 = 20,000 + 120,000 = $140,000 → $35 por unidad.',
            'X: 30 × 2,000 + 2,000 × 20 = 60,000 + 40,000 = $100,000 → $200 per unit. Y: 10 × 2,000 + 6,000 × 20 = 20,000 + 120,000 = $140,000 → $35 per unit.',
          ),
          t(
            'Tasa única = 240,000 / 8,000 = $30 por hora máquina. X: 2,000 × 30 = $60,000 → $120 por unidad. Y: 6,000 × 30 = $180,000 → $45 por unidad.',
            'Single rate = 240,000 / 8,000 = $30 per machine hour. X: 2,000 × 30 = $60,000 → $120 per unit. Y: 6,000 × 30 = $180,000 → $45 per unit.',
          ),
        ],
        result: t(
          'La tasa única subcostea X ($120 vs. $200) y sobrecostea Y ($45 vs. $35), porque ignora que X, de bajo volumen, consume la mayoría de las preparaciones.',
          'The single rate under-costs X ($120 vs. $200) and over-costs Y ($45 vs. $35) because it ignores that low-volume X consumes most of the setups.',
        ),
      },
    ],
    keyPoints: [
      t(
        'Órdenes para productos a pedido; procesos para producción continua y homogénea.',
        'Job-order for made-to-order products; process costing for continuous, homogeneous production.',
      ),
      t(
        'Los CIF se aplican con una tasa predeterminada basada en presupuesto.',
        'Overhead is applied with a predetermined rate based on the budget.',
      ),
      t(
        'Unidades equivalentes = terminadas + en proceso × % de avance, por elemento del costo.',
        'Equivalent units = completed + WIP × % complete, for each cost element.',
      ),
      t(
        'ABC usa varios inductores y corrige la distorsión de una tasa única.',
        'ABC uses several drivers and corrects the distortion of a single rate.',
      ),
    ],
    normativeNote: t(
      'Contenido educativo. Para estados financieros, el costo de los inventarios producidos se determina conforme a la NIF C-4 (Inventarios) en México y a la NIC 2 / IAS 2 (Inventories) bajo IFRS, que requieren asignar los costos indirectos de producción de forma sistemática con base en la capacidad normal. Los sistemas de costeo internos (como ABC) son herramientas gerenciales. Verifica la versión vigente de las normas a la fecha de consulta (2026).',
      'Educational content. For financial statements, the cost of manufactured inventories is determined under NIF C-4 (Inventories) in Mexico and IAS 2 (Inventories) under IFRS, which require production overhead to be allocated systematically based on normal capacity. Internal costing systems (such as ABC) are management tools. Verify the version of the standards in force as of the consultation date (2026).',
    ),
    exerciseIds: ['N3-007', 'N3-008', 'N3-009', 'N3-010', 'N3-011', 'N3-012'],
  },

  // ─────────────── L3-03 ───────────────
  {
    id: 'L3-03',
    level: 3,
    topicIds: ['3.6', '3.7'],
    title: t('Margen de contribución y punto de equilibrio', 'Contribution margin and break-even point'),
    summary: t(
      'Usa el análisis costo-volumen-utilidad para calcular el punto de equilibrio en unidades y en pesos, las ventas necesarias para una utilidad objetivo y el margen de seguridad.',
      'Use cost-volume-profit analysis to compute the break-even point in units and pesos, the sales needed for a target profit and the margin of safety.',
    ),
    minutes: 16,
    objectives: [
      t(
        'Calcular el margen de contribución unitario, total y la razón de margen de contribución.',
        'Compute unit and total contribution margin and the contribution margin ratio.',
      ),
      t('Determinar el punto de equilibrio en unidades y en pesos.', 'Determine the break-even point in units and in pesos.'),
      t(
        'Calcular las unidades necesarias para una utilidad objetivo antes y después de impuestos.',
        'Compute the units needed for a before-tax and after-tax target profit.',
      ),
      t(
        'Medir el margen de seguridad y el grado de apalancamiento operativo.',
        'Measure the margin of safety and the degree of operating leverage.',
      ),
    ],
    theory: [
      {
        heading: t('Margen de contribución', 'Contribution margin'),
        body: [
          t(
            'El **margen de contribución (MC)** es lo que queda del precio después de cubrir los costos variables. Ese margen "contribuye" primero a cubrir los costos fijos y, una vez cubiertos, se convierte en utilidad.',
            'The **contribution margin (CM)** is what is left of the price after covering variable costs. That margin first "contributes" to covering fixed costs and, once they are covered, becomes profit.',
          ),
          t(
            'La **razón de MC** expresa el margen como porcentaje del precio: indica cuántos centavos de cada peso vendido quedan para fijos y utilidad. Es útil cuando se trabaja en pesos de venta en lugar de unidades.',
            'The **CM ratio** expresses the margin as a percentage of price: it shows how many cents of each peso of sales remain for fixed costs and profit. It is useful when working in sales pesos rather than units.',
          ),
        ],
        formula: 'MCu = P − CVu;  Razón MC = MCu / P;  Utilidad de operación = MCu × Q − CF',
      },
      {
        heading: t('Punto de equilibrio', 'Break-even point'),
        body: [
          t(
            'El **punto de equilibrio (PE)** es el volumen en que la utilidad es cero: el margen de contribución total iguala exactamente a los costos fijos. En unidades se divide el costo fijo entre el margen unitario; en pesos, entre la razón de MC.',
            'The **break-even point (BEP)** is the volume at which profit is zero: total contribution margin exactly equals fixed costs. In units, divide fixed cost by unit margin; in pesos, divide by the CM ratio.',
          ),
          t(
            'Supuestos del modelo: precio y costo variable unitario constantes, costos fijos constantes dentro del rango relevante, lo producido se vende y, si hay varios productos, la mezcla de ventas es constante.',
            'Model assumptions: constant price and unit variable cost, fixed costs constant within the relevant range, everything produced is sold and, with several products, a constant sales mix.',
          ),
        ],
        formula: 'PE (unidades) = CF / (P − CVu);  PE ($) = CF / Razón MC',
      },
      {
        heading: t('Utilidad objetivo', 'Target profit'),
        body: [
          t(
            'Para lograr una utilidad deseada, se trata como si fuera un costo fijo adicional que el margen debe cubrir. Si la meta es **después de impuestos**, primero se convierte a utilidad antes de impuestos dividiendo entre (1 − t).',
            'To reach a desired profit, treat it as an additional fixed cost the margin must cover. If the goal is **after tax**, first convert it to before-tax profit by dividing by (1 − t).',
          ),
        ],
        formula: 'Q objetivo = (CF + Utilidad antes de impuestos) / MCu;  UAI = UDI / (1 − t)',
      },
      {
        heading: t('Margen de seguridad y apalancamiento operativo', 'Margin of safety and operating leverage'),
        body: [
          t(
            'El **margen de seguridad** mide cuánto pueden caer las ventas presupuestadas antes de entrar en pérdida. El **grado de apalancamiento operativo (GAO)** mide la sensibilidad de la utilidad de operación a cambios en ventas: con GAO = 4, un aumento de 10 % en ventas eleva la utilidad 40 %.',
            'The **margin of safety** measures how far budgeted sales can fall before a loss. The **degree of operating leverage (DOL)** measures how sensitive operating income is to changes in sales: with DOL = 4, a 10 % rise in sales raises profit by 40 %.',
          ),
          t(
            'Empresas con muchos costos fijos tienen GAO alto: ganan mucho cuando crecen las ventas pero pierden rápido cuando caen. Nota que GAO = 1 / (margen de seguridad en %).',
            'Firms with high fixed costs have high DOL: they gain a lot when sales grow but lose quickly when sales fall. Note that DOL = 1 / (margin of safety %).',
          ),
        ],
        formula: 'MS ($) = Ventas presupuestadas − Ventas en PE;  MS % = MS / Ventas presupuestadas;  GAO = MC total / Utilidad de operación',
      },
    ],
    examples: [
      {
        title: t('Punto de equilibrio y utilidad objetivo', 'Break-even and target profit'),
        problem: t(
          'Una empresa vende termos a $250 con costo variable de $150 por unidad y costos fijos mensuales de $400,000. Calcula el PE en unidades y en pesos, y las unidades para una utilidad antes de impuestos de $150,000.',
          'A company sells thermoses at $250 with a variable cost of $150 per unit and monthly fixed costs of $400,000. Compute the BEP in units and pesos, and the units needed for a before-tax profit of $150,000.',
        ),
        steps: [
          t('MCu = 250 − 150 = $100; razón MC = 100 / 250 = 40 %.', 'Unit CM = 250 − 150 = $100; CM ratio = 100 / 250 = 40 %.'),
          t('PE unidades = 400,000 / 100 = 4,000 unidades.', 'BEP units = 400,000 / 100 = 4,000 units.'),
          t(
            'PE pesos = 400,000 / 0.40 = $1,000,000 (= 4,000 × 250).',
            'BEP pesos = 400,000 / 0.40 = $1,000,000 (= 4,000 × 250).',
          ),
          t(
            'Q objetivo = (400,000 + 150,000) / 100 = 5,500 unidades.',
            'Target Q = (400,000 + 150,000) / 100 = 5,500 units.',
          ),
        ],
        result: t(
          'PE: 4,000 unidades o $1,000,000; para ganar $150,000 antes de impuestos se requieren 5,500 unidades.',
          'BEP: 4,000 units or $1,000,000; earning $150,000 before tax requires 5,500 units.',
        ),
      },
      {
        title: t('Margen de seguridad y GAO', 'Margin of safety and DOL'),
        problem: t(
          'Con los datos anteriores, la empresa presupuesta vender 5,000 termos. Calcula el margen de seguridad y el GAO.',
          'Using the same data, the company budgets sales of 5,000 thermoses. Compute the margin of safety and the DOL.',
        ),
        steps: [
          t('Ventas presupuestadas = 5,000 × 250 = $1,250,000.', 'Budgeted sales = 5,000 × 250 = $1,250,000.'),
          t(
            'MS = 1,250,000 − 1,000,000 = $250,000; MS % = 250,000 / 1,250,000 = 20 %.',
            'MoS = 1,250,000 − 1,000,000 = $250,000; MoS % = 250,000 / 1,250,000 = 20 %.',
          ),
          t(
            'MC total = 5,000 × 100 = $500,000; utilidad de operación = 500,000 − 400,000 = $100,000.',
            'Total CM = 5,000 × 100 = $500,000; operating income = 500,000 − 400,000 = $100,000.',
          ),
          t('GAO = 500,000 / 100,000 = 5 (= 1 / 0.20).', 'DOL = 500,000 / 100,000 = 5 (= 1 / 0.20).'),
        ],
        result: t(
          'Las ventas pueden caer 20 % ($250,000) antes de pérdidas; con GAO de 5, cada 1 % de cambio en ventas mueve la utilidad 5 %.',
          'Sales can fall 20 % ($250,000) before losses; with a DOL of 5, each 1 % change in sales moves profit by 5 %.',
        ),
      },
    ],
    keyPoints: [
      t('MC = precio − costo variable; primero cubre fijos y luego genera utilidad.', 'CM = price − variable cost; it first covers fixed costs, then generates profit.'),
      t('PE unidades = CF / MCu; PE pesos = CF / razón MC.', 'BEP units = FC / unit CM; BEP pesos = FC / CM ratio.'),
      t(
        'Para metas después de impuestos, divide la utilidad entre (1 − t) antes de sumarla a los fijos.',
        'For after-tax targets, divide profit by (1 − t) before adding it to fixed costs.',
      ),
      t(
        'Margen de seguridad y GAO miden el riesgo operativo; GAO = 1 / MS %.',
        'Margin of safety and DOL measure operating risk; DOL = 1 / MoS %.',
      ),
    ],
    normativeNote: t(
      'Contenido educativo con contexto de México. La tasa de 30 % usada en los cálculos de utilidad después de impuestos corresponde a la tasa general del ISR para personas morales (Ley del Impuesto sobre la Renta) y se emplea solo con fines ilustrativos. Verifica la tasa y las disposiciones vigentes en la ley y el DOF a la fecha de consulta (2026).',
      'Educational content with a Mexican context. The 30 % rate used in after-tax profit calculations is the general corporate income tax (ISR) rate under the Ley del Impuesto sobre la Renta and is used for illustration only. Verify the rate and provisions in force in the law and the DOF as of the consultation date (2026).',
    ),
    exerciseIds: ['N3-013', 'N3-014', 'N3-015', 'N3-016', 'N3-017', 'N3-018', 'N3-019'],
  },

  // ─────────────── L3-04 ───────────────
  {
    id: 'L3-04',
    level: 3,
    topicIds: ['3.8', '3.9', '3.10'],
    title: t(
      'Presupuestos, análisis de variaciones y decisiones gerenciales',
      'Budgets, variance analysis and managerial decisions',
    ),
    summary: t(
      'Construye presupuestos estáticos y flexibles, calcula variaciones de precio y cantidad, y toma decisiones de fabricar o comprar y de pedidos especiales con costos relevantes.',
      'Build static and flexible budgets, compute price and quantity variances, and make make-or-buy and special-order decisions with relevant costs.',
    ),
    minutes: 20,
    objectives: [
      t(
        'Describir la secuencia del presupuesto maestro y la diferencia entre presupuesto estático y flexible.',
        'Describe the master budget sequence and the difference between static and flexible budgets.',
      ),
      t(
        'Calcular e interpretar variaciones de precio y de cantidad (eficiencia) de materiales.',
        'Compute and interpret materials price and quantity (efficiency) variances.',
      ),
      t(
        'Identificar costos relevantes, hundidos y de oportunidad.',
        'Identify relevant, sunk and opportunity costs.',
      ),
      t(
        'Evaluar decisiones de fabricar o comprar y de pedidos especiales.',
        'Evaluate make-or-buy and special-order decisions.',
      ),
    ],
    theory: [
      {
        heading: t('Presupuesto maestro, estático y flexible', 'Master, static and flexible budgets'),
        body: [
          t(
            'El **presupuesto maestro** integra los planes de un periodo. Parte del **presupuesto de ventas**, porque el volumen esperado determina producción, compras de materiales, mano de obra, CIF, gastos de operación, flujo de efectivo y estados financieros proyectados.',
            'The **master budget** integrates the plans for a period. It starts with the **sales budget**, because expected volume drives production, materials purchases, labour, overhead, operating expenses, the cash budget and projected financial statements.',
          ),
          t(
            'El **presupuesto estático** se prepara para un solo nivel de actividad. El **presupuesto flexible** recalcula los costos al nivel de actividad **real**: costos variables = costo unitario × volumen real, más costos fijos. Comparar costos reales contra el estático mezcla el efecto de volumen con el de eficiencia; contra el flexible se aísla el desempeño de control de costos.',
            'A **static budget** is prepared for a single activity level. A **flexible budget** restates costs at the **actual** activity level: variable costs = unit cost × actual volume, plus fixed costs. Comparing actual costs with the static budget mixes the volume effect with efficiency; comparing with the flexible budget isolates cost-control performance.',
          ),
        ],
        formula: 'Presupuesto flexible = CVu × Volumen real + CF',
      },
      {
        heading: t('Variaciones de precio y cantidad', 'Price and quantity variances'),
        body: [
          t(
            'Con **costos estándar** (cantidad y precio esperados por unidad) la variación total de materiales se divide en dos: la **variación de precio** (pagamos más o menos por cada kg) y la **variación de cantidad** o eficiencia (usamos más o menos kg de los permitidos para la producción real).',
            'With **standard costs** (expected quantity and price per unit) the total materials variance is split in two: the **price variance** (we paid more or less per kg) and the **quantity** or efficiency variance (we used more or fewer kg than allowed for actual output).',
          ),
          t(
            'Una variación es **desfavorable (D)** cuando el costo real supera al estándar y **favorable (F)** cuando es menor. Las variaciones se relacionan: comprar material barato de baja calidad puede generar precio favorable pero cantidad desfavorable por mermas. La misma lógica aplica a mano de obra (tarifa y eficiencia).',
            'A variance is **unfavourable (U)** when actual cost exceeds standard and **favourable (F)** when it is lower. Variances interact: buying cheap low-quality material may give a favourable price variance but an unfavourable quantity variance due to waste. The same logic applies to labour (rate and efficiency).',
          ),
        ],
        formula: 'Var. precio = (PR − PE) × CR;  Var. cantidad = (CR − CE permitida) × PE',
        bullets: [
          t('PR = precio real; PE = precio estándar.', 'AP = actual price; SP = standard price.'),
          t(
            'CR = cantidad real usada; CE permitida = estándar por unidad × producción real.',
            'AQ = actual quantity used; SQ allowed = standard per unit × actual output.',
          ),
        ],
      },
      {
        heading: t('Costos relevantes', 'Relevant costs'),
        body: [
          t(
            'Un costo es **relevante** para una decisión si es **futuro** y **difiere** entre alternativas. Los **costos hundidos** (ya incurridos, como un estudio pagado) nunca son relevantes. Los costos fijos asignados que no desaparecen con la decisión tampoco lo son; sí lo son los costos fijos **evitables**.',
            'A cost is **relevant** to a decision if it is **future** and **differs** between alternatives. **Sunk costs** (already incurred, such as a study already paid) are never relevant. Allocated fixed costs that do not go away with the decision are not relevant either; **avoidable** fixed costs are.',
          ),
          t(
            'El **costo de oportunidad** —el beneficio que se sacrifica al elegir una alternativa, como la renta que podría obtenerse del espacio— sí es relevante aunque no se registre en contabilidad.',
            'The **opportunity cost** —the benefit given up by choosing one alternative, such as rent that could be earned on space— is relevant even though it is not recorded in the books.',
          ),
        ],
      },
      {
        heading: t('Fabricar o comprar y pedidos especiales', 'Make-or-buy and special orders'),
        body: [
          t(
            '**Fabricar o comprar:** compara el precio del proveedor con los costos **evitables** de fabricar (variables + fijos evitables) más cualquier costo de oportunidad de la capacidad liberada.',
            '**Make or buy:** compare the supplier\'s price with the **avoidable** costs of making (variable + avoidable fixed) plus any opportunity cost of the capacity freed up.',
          ),
          t(
            '**Pedido especial:** si hay capacidad ociosa y no afecta las ventas normales, se acepta cuando el precio supera el costo **incremental** (variables que sí se incurren más costos específicos del pedido). Los costos fijos existentes no cambian y no deben prorratearse al pedido. Si no hay capacidad ociosa, se suma el margen de las ventas regulares que se perderían.',
            '**Special order:** if there is idle capacity and regular sales are unaffected, accept when price exceeds the **incremental** cost (variable costs actually incurred plus order-specific costs). Existing fixed costs do not change and must not be allocated to the order. With no idle capacity, add the margin on regular sales that would be lost.',
          ),
        ],
      },
    ],
    examples: [
      {
        title: t('Variaciones de materiales en una maquiladora textil', 'Materials variances at a garment plant'),
        problem: t(
          'El estándar de una camisa es 3 metros de tela a $50 por metro. En el mes se produjeron 2,000 camisas y se compraron y usaron 6,300 metros a $48 por metro. Calcula las variaciones.',
          'The standard for a shirt is 3 metres of fabric at $50 per metre. During the month 2,000 shirts were produced and 6,300 metres were bought and used at $48 per metre. Compute the variances.',
        ),
        steps: [
          t('Cantidad estándar permitida = 2,000 × 3 = 6,000 metros.', 'Standard quantity allowed = 2,000 × 3 = 6,000 metres.'),
          t(
            'Variación de precio = (48 − 50) × 6,300 = −$12,600 → $12,600 favorable.',
            'Price variance = (48 − 50) × 6,300 = −$12,600 → $12,600 favourable.',
          ),
          t(
            'Variación de cantidad = (6,300 − 6,000) × 50 = $15,000 desfavorable.',
            'Quantity variance = (6,300 − 6,000) × 50 = $15,000 unfavourable.',
          ),
          t(
            'Total = 6,300 × 48 − 6,000 × 50 = 302,400 − 300,000 = $2,400 desfavorable (= −12,600 + 15,000).',
            'Total = 6,300 × 48 − 6,000 × 50 = 302,400 − 300,000 = $2,400 unfavourable (= −12,600 + 15,000).',
          ),
        ],
        result: t(
          'El ahorro en precio no compensó el exceso de consumo: variación total $2,400 D. Conviene investigar si la tela más barata causó más desperdicio.',
          'The price saving did not offset the excess usage: total variance $2,400 U. It is worth investigating whether cheaper fabric caused more waste.',
        ),
      },
      {
        title: t('Pedido especial con capacidad ociosa', 'Special order with idle capacity'),
        problem: t(
          'Una empresa vende un producto a $500, con costo variable de $300 por unidad y costos fijos de $200,000 mensuales. Tiene capacidad ociosa. Un cliente nuevo ofrece comprar 1,000 unidades a $380 cada una, sin afectar las ventas normales. ¿Debe aceptar?',
          'A company sells a product at $500, with a variable cost of $300 per unit and fixed costs of $200,000 a month. It has idle capacity. A new customer offers to buy 1,000 units at $380 each without affecting regular sales. Should it accept?',
        ),
        steps: [
          t(
            'Los costos fijos no cambian: no son relevantes.',
            'Fixed costs do not change: they are not relevant.',
          ),
          t(
            'Margen incremental por unidad = 380 − 300 = $80.',
            'Incremental margin per unit = 380 − 300 = $80.',
          ),
          t('Utilidad incremental = 1,000 × 80 = $80,000.', 'Incremental profit = 1,000 × 80 = $80,000.'),
        ],
        result: t(
          'Aceptar: la utilidad aumenta $80,000 aunque el precio sea menor que el normal.',
          'Accept: profit rises by $80,000 even though the price is below the regular price.',
        ),
      },
    ],
    keyPoints: [
      t('El presupuesto maestro inicia con el presupuesto de ventas.', 'The master budget starts with the sales budget.'),
      t(
        'Compara el costo real con el presupuesto flexible para evaluar el control de costos.',
        'Compare actual cost with the flexible budget to evaluate cost control.',
      ),
      t(
        'Var. precio = (PR − PE) × CR; var. cantidad = (CR − CE) × PE; real > estándar = desfavorable.',
        'Price var. = (AP − SP) × AQ; quantity var. = (AQ − SQ) × SP; actual > standard = unfavourable.',
      ),
      t(
        'Solo importan costos futuros que difieren entre alternativas; ignora los hundidos e incluye los de oportunidad.',
        'Only future costs that differ between alternatives matter; ignore sunk costs and include opportunity costs.',
      ),
    ],
    exerciseIds: ['N3-020', 'N3-021', 'N3-022', 'N3-023', 'N3-024', 'N3-025', 'N3-026', 'N3-027'],
  },
]

// ───────────────────────────── Exercises ─────────────────────────────

export const exercises: Exercise[] = [
  // ════════════ L3-01 ════════════
  {
    id: 'N3-001',
    level: 3,
    module: 'L3-01',
    kind: 'mcq',
    flavor: 'concept',
    prompt: t(
      'Una fábrica de sillas duplica su producción mensual. ¿Cuál de los siguientes costos se duplicará aproximadamente en total?',
      'A chair factory doubles its monthly output. Which of the following costs will roughly double in total?',
    ),
    options: [
      { id: 'N3-001-a', text: t('La renta mensual de la nave industrial', 'The monthly rent of the plant') },
      { id: 'N3-001-b', text: t('El sueldo del gerente de planta', 'The plant manager\'s salary') },
      { id: 'N3-001-c', text: t('La madera utilizada en las sillas', 'The wood used in the chairs') },
      { id: 'N3-001-d', text: t('La depreciación en línea recta de la maquinaria', 'Straight-line depreciation of machinery') },
    ],
    correctOptionId: 'N3-001-c',
    explanation: t(
      'La madera es un costo variable: cada silla consume la misma cantidad, así que el total crece en proporción al volumen. Renta, sueldo del gerente y depreciación en línea recta son fijos dentro del rango relevante: su total no cambia aunque se produzca el doble (lo que baja es su costo por unidad).',
      'Wood is a variable cost: each chair uses the same amount, so the total grows in proportion to volume. Rent, the manager\'s salary and straight-line depreciation are fixed within the relevant range: their totals do not change when output doubles (what falls is their cost per unit).',
    ),
    difficulty: 1,
    points: 10,
    competency: 'cost-behavior',
  },
  {
    id: 'N3-002',
    level: 3,
    module: 'L3-01',
    kind: 'classify',
    flavor: 'concept',
    prompt: t(
      'Clasifica cada costo de una empresa manufacturera según su comportamiento ante el volumen de producción.',
      'Classify each cost of a manufacturing company by its behaviour with respect to production volume.',
    ),
    categories: [
      { id: 'N3-002-c1', label: t('Fijo', 'Fixed') },
      { id: 'N3-002-c2', label: t('Variable', 'Variable') },
      { id: 'N3-002-c3', label: t('Mixto (semivariable)', 'Mixed (semi-variable)') },
    ],
    items: [
      { id: 'N3-002-i1', label: t('Renta de la planta: $45,000 al mes', 'Plant rent: $45,000 per month'), correctCategoryId: 'N3-002-c1' },
      { id: 'N3-002-i2', label: t('Materia prima por unidad producida', 'Raw materials per unit produced'), correctCategoryId: 'N3-002-c2' },
      {
        id: 'N3-002-i3',
        label: t('Energía eléctrica: cargo fijo mensual más consumo por kWh', 'Electricity: fixed monthly charge plus usage per kWh'),
        correctCategoryId: 'N3-002-c3',
      },
      { id: 'N3-002-i4', label: t('Comisión de 5 % sobre ventas', '5 % sales commission'), correctCategoryId: 'N3-002-c2' },
      {
        id: 'N3-002-i5',
        label: t('Seguro anual de la fábrica', 'Annual factory insurance'),
        correctCategoryId: 'N3-002-c1',
      },
      {
        id: 'N3-002-i6',
        label: t(
          'Mantenimiento: contrato base más un cargo por hora máquina trabajada',
          'Maintenance: base contract plus a charge per machine hour worked',
        ),
        correctCategoryId: 'N3-002-c3',
      },
    ],
    explanation: t(
      'Renta y seguro no cambian con el volumen (fijos). Materia prima y comisiones crecen proporcionalmente (variables). La luz con cargo fijo + consumo y el mantenimiento con contrato base + cargo por hora tienen ambos componentes (mixtos). Error común: clasificar como variable cualquier costo que "cambia un poco"; si tiene una parte que se paga aunque no se produzca, es mixto.',
      'Rent and insurance do not change with volume (fixed). Raw materials and commissions grow proportionally (variable). Electricity with fixed charge + usage and maintenance with base contract + hourly charge have both components (mixed). Common mistake: labelling any cost that "changes a bit" as variable; if part of it is paid even with zero output, it is mixed.',
    ),
    difficulty: 1,
    points: 10,
    competency: 'cost-behavior',
  },
  {
    id: 'N3-003',
    level: 3,
    module: 'L3-01',
    kind: 'truefalse',
    flavor: 'concept',
    prompt: t(
      'Dentro del rango relevante, el costo fijo por unidad permanece constante cuando aumenta el volumen de producción.',
      'Within the relevant range, fixed cost per unit stays constant as production volume increases.',
    ),
    answer: false,
    explanation: t(
      'Falso. Lo constante es el costo fijo **total**; el costo fijo **por unidad** disminuye al aumentar el volumen porque el mismo monto se reparte entre más unidades (p. ej., $30,000 / 1,000 = $30 vs. $30,000 / 2,000 = $15). El costo que es constante por unidad es el variable.',
      'False. What stays constant is **total** fixed cost; fixed cost **per unit** falls as volume rises because the same amount is spread over more units (e.g., $30,000 / 1,000 = $30 vs. $30,000 / 2,000 = $15). The cost that is constant per unit is the variable cost.',
    ),
    difficulty: 1,
    points: 10,
    competency: 'cost-behavior',
  },
  {
    id: 'N3-004',
    level: 3,
    module: 'L3-01',
    kind: 'multi',
    flavor: 'concept',
    prompt: t(
      'Para una mueblería que fabrica sofás, selecciona todos los costos que son **directos** respecto de cada sofá.',
      'For a furniture maker that produces sofas, select all the costs that are **direct** with respect to each sofa.',
    ),
    options: [
      { id: 'N3-004-a', text: t('Madera del armazón del sofá', 'Wood for the sofa frame') },
      { id: 'N3-004-b', text: t('Sueldo del supervisor de la planta', 'Plant supervisor\'s salary') },
      { id: 'N3-004-c', text: t('Tela de tapicería usada en el sofá', 'Upholstery fabric used on the sofa') },
      { id: 'N3-004-d', text: t('Depreciación del edificio de la fábrica', 'Depreciation of the factory building') },
      { id: 'N3-004-e', text: t('Pago al tapicero por pieza ensamblada', 'Upholsterer paid per piece assembled') },
    ],
    correctOptionIds: ['N3-004-a', 'N3-004-c', 'N3-004-e'],
    explanation: t(
      'Madera, tela y el pago al tapicero por pieza se identifican de forma precisa con cada sofá: son MPD y MOD. El sueldo del supervisor y la depreciación del edificio benefician a toda la producción; son CIF (indirectos) y se asignan con una base de prorrateo.',
      'Wood, fabric and the upholsterer\'s piece pay are traced precisely to each sofa: they are DM and DL. The supervisor\'s salary and building depreciation benefit all production; they are MOH (indirect) and are allocated using an allocation base.',
    ),
    difficulty: 1,
    points: 10,
    competency: 'direct-indirect-costs',
  },
  {
    id: 'N3-005',
    level: 3,
    module: 'L3-01',
    kind: 'fields',
    flavor: 'case',
    context: t(
      'El costo de energía de una planta fue de $58,000 en el mes de menor producción (2,000 unidades) y de $103,000 en el mes de mayor producción (5,000 unidades).',
      'A plant\'s energy cost was $58,000 in the lowest-output month (2,000 units) and $103,000 in the highest-output month (5,000 units).',
    ),
    prompt: t(
      'Con el método de punto alto-punto bajo, calcula el costo variable por unidad, el costo fijo mensual y el costo esperado para 4,000 unidades (en pesos).',
      'Using the high-low method, compute the variable cost per unit, the monthly fixed cost and the expected cost for 4,000 units (in pesos).',
    ),
    fields: [
      { id: 'f1', label: t('Costo variable por unidad ($)', 'Variable cost per unit ($)'), answer: 15, unit: 'MXN', tolerance: { abs: 0.01 } },
      { id: 'f2', label: t('Costo fijo mensual ($)', 'Monthly fixed cost ($)'), answer: 28000, unit: 'MXN', tolerance: { abs: 0.5 } },
      { id: 'f3', label: t('Costo esperado a 4,000 unidades ($)', 'Expected cost at 4,000 units ($)'), answer: 88000, unit: 'MXN', tolerance: { abs: 0.5 } },
    ],
    explanation: t(
      'CVu = (103,000 − 58,000) / (5,000 − 2,000) = 45,000 / 3,000 = $15. CF = 58,000 − 15 × 2,000 = $28,000 (o 103,000 − 75,000). A 4,000 unidades: 28,000 + 15 × 4,000 = $88,000. Error común: dividir el costo total entre las unidades (58,000 / 2,000 = $29), que mezcla la parte fija con la variable.',
      'VCu = (103,000 − 58,000) / (5,000 − 2,000) = 45,000 / 3,000 = $15. FC = 58,000 − 15 × 2,000 = $28,000 (or 103,000 − 75,000). At 4,000 units: 28,000 + 15 × 4,000 = $88,000. Common mistake: dividing total cost by units (58,000 / 2,000 = $29), which mixes the fixed and variable parts.',
    ),
    difficulty: 2,
    points: 15,
    competency: 'cost-behavior',
  },
  {
    id: 'N3-006',
    level: 3,
    module: 'L3-01',
    kind: 'numeric',
    flavor: 'case',
    context: t(
      'Datos del mes: materia prima directa $120,000; mano de obra directa $80,000; cargos indirectos de fabricación $60,000; gastos de venta $35,000.',
      'Month data: direct materials $120,000; direct labour $80,000; manufacturing overhead $60,000; selling expenses $35,000.',
    ),
    prompt: t(
      'Calcula el costo de conversión del mes, en pesos.',
      'Compute the month\'s conversion cost, in pesos.',
    ),
    answer: 140000,
    unit: 'MXN',
    decimals: 0,
    tolerance: { abs: 0.5 },
    explanation: t(
      'Costo de conversión = MOD + CIF = 80,000 + 60,000 = $140,000. No incluye materia prima (eso sería costo primo: 120,000 + 80,000 = $200,000) ni gastos de venta, que son gastos del periodo y no costo del producto.',
      'Conversion cost = DL + MOH = 80,000 + 60,000 = $140,000. It excludes direct materials (that would be prime cost: 120,000 + 80,000 = $200,000) and selling expenses, which are period expenses, not product cost.',
    ),
    difficulty: 1,
    points: 10,
    competency: 'cost-elements',
  },

  // ════════════ L3-02 ════════════
  {
    id: 'N3-007',
    level: 3,
    module: 'L3-02',
    kind: 'mcq',
    flavor: 'concept',
    prompt: t(
      '¿Qué sistema de costeo es más adecuado para una imprenta que elabora pedidos personalizados (invitaciones, catálogos, folletos) con especificaciones distintas para cada cliente?',
      'Which costing system best suits a print shop that produces customised orders (invitations, catalogues, brochures) with different specifications for each client?',
    ),
    options: [
      { id: 'N3-007-a', text: t('Costeo por procesos', 'Process costing') },
      { id: 'N3-007-b', text: t('Costeo por órdenes de producción', 'Job-order costing') },
      { id: 'N3-007-c', text: t('Costeo directo sin asignar costos', 'Direct costing with no cost assignment') },
      { id: 'N3-007-d', text: t('Costeo por unidades equivalentes', 'Equivalent-unit costing') },
    ],
    correctOptionId: 'N3-007-b',
    explanation: t(
      'Cada pedido es diferente y se identifica con un cliente, así que los costos se acumulan por orden en una hoja de costos. El costeo por procesos (y las unidades equivalentes, que son su herramienta) es para producción continua de artículos homogéneos, como una embotelladora.',
      'Each order is different and identified with a client, so costs are accumulated per job on a job cost sheet. Process costing (and equivalent units, its tool) is for continuous production of homogeneous goods, such as a bottler.',
    ),
    difficulty: 1,
    points: 10,
    competency: 'costing-systems',
  },
  {
    id: 'N3-008',
    level: 3,
    module: 'L3-02',
    kind: 'numeric',
    flavor: 'case',
    context: t(
      'Una mueblería presupuesta CIF anuales por $900,000 y 30,000 horas de mano de obra directa. La orden 105 consumió materia prima directa por $18,000 y mano de obra directa por $12,000 (400 horas).',
      'A furniture maker budgets annual overhead of $900,000 and 30,000 direct labour hours. Job 105 used direct materials of $18,000 and direct labour of $12,000 (400 hours).',
    ),
    prompt: t(
      'Aplicando los CIF con la tasa predeterminada por hora de MOD, calcula el costo total de la orden 105 en pesos.',
      'Applying overhead with the predetermined rate per DL hour, compute the total cost of Job 105 in pesos.',
    ),
    answer: 42000,
    unit: 'MXN',
    decimals: 0,
    tolerance: { abs: 0.5 },
    explanation: t(
      'Tasa = 900,000 / 30,000 = $30 por hora de MOD. CIF aplicados = 400 × 30 = $12,000. Costo de la orden = 18,000 + 12,000 + 12,000 = $42,000. Error común: aplicar la tasa sobre el importe de la MOD ($12,000 × 30) en lugar de sobre las horas.',
      'Rate = 900,000 / 30,000 = $30 per DL hour. Applied MOH = 400 × 30 = $12,000. Job cost = 18,000 + 12,000 + 12,000 = $42,000. Common mistake: applying the rate to DL pesos ($12,000 × 30) instead of hours.',
    ),
    difficulty: 2,
    points: 15,
    competency: 'job-order-costing',
  },
  {
    id: 'N3-009',
    level: 3,
    module: 'L3-02',
    kind: 'journal',
    flavor: 'case',
    context: t(
      'La orden 105 (costo total $42,000, registrada en Inventarios como producto terminado) se entrega y se vende a crédito al cliente en $60,000. Ignora el IVA.',
      'Job 105 (total cost $42,000, carried in Inventory as finished goods) is delivered and sold on credit to the client for $60,000. Ignore VAT.',
    ),
    prompt: t(
      'Registra la venta y el costo de ventas de la orden (sistema de inventarios perpetuos).',
      'Record the sale and the cost of goods sold for the job (perpetual inventory system).',
    ),
    accountChoices: ['1102', '1104', '1108', '2101', '4101', '5101', '6101', '1206'],
    expected: [
      { accountCode: '1104', side: 'D', amount: 60000 },
      { accountCode: '4101', side: 'C', amount: 60000 },
      { accountCode: '5101', side: 'D', amount: 42000 },
      { accountCode: '1108', side: 'C', amount: 42000 },
    ],
    explanation: t(
      'Venta a crédito: cargo a Clientes y abono a Ventas por $60,000. En inventario perpetuo también se reconoce el costo: cargo a Costo de ventas y abono a Inventarios por el costo acumulado de la orden, $42,000. La utilidad bruta de la orden es 60,000 − 42,000 = $18,000. Error común: abonar Inventarios por el precio de venta.',
      'Credit sale: debit Accounts receivable and credit Sales for $60,000. Under perpetual inventory the cost is also recognised: debit Cost of goods sold and credit Inventory for the job\'s accumulated cost, $42,000. Gross profit on the job is 60,000 − 42,000 = $18,000. Common mistake: crediting Inventory at the selling price.',
    ),
    difficulty: 2,
    points: 15,
    competency: 'job-order-costing',
  },
  {
    id: 'N3-010',
    level: 3,
    module: 'L3-02',
    kind: 'fields',
    flavor: 'case',
    context: t(
      'Departamento de mezclado (promedio ponderado): unidades terminadas y transferidas 8,000; inventario final en proceso 2,000 unidades con 100 % de materiales y 40 % de conversión. Costos totales a distribuir: materiales $250,000; conversión $176,000.',
      'Mixing department (weighted-average): units completed and transferred 8,000; ending WIP 2,000 units, 100 % complete for materials and 40 % for conversion. Total costs to account for: materials $250,000; conversion $176,000.',
    ),
    prompt: t(
      'Calcula las unidades equivalentes de conversión, el costo por UE de conversión, el costo de las unidades transferidas y el costo del inventario final en proceso.',
      'Compute equivalent units for conversion, cost per conversion EU, cost of units transferred out and cost of ending WIP.',
    ),
    fields: [
      { id: 'f1', label: t('UE de conversión', 'Conversion EU'), answer: 8800, unit: 'units', tolerance: { abs: 0.5 } },
      { id: 'f2', label: t('Costo por UE de conversión ($)', 'Cost per conversion EU ($)'), answer: 20, unit: 'MXN', tolerance: { abs: 0.01 } },
      { id: 'f3', label: t('Costo de unidades transferidas ($)', 'Cost of units transferred out ($)'), answer: 360000, unit: 'MXN', tolerance: { abs: 0.5 } },
      { id: 'f4', label: t('Costo del inventario final en proceso ($)', 'Cost of ending WIP ($)'), answer: 66000, unit: 'MXN', tolerance: { abs: 0.5 } },
    ],
    explanation: t(
      'UE materiales = 8,000 + 2,000 × 100 % = 10,000 → 250,000 / 10,000 = $25. UE conversión = 8,000 + 2,000 × 40 % = 8,800 → 176,000 / 8,800 = $20. Transferido = 8,000 × (25 + 20) = $360,000. Inventario final = 2,000 × 25 + 800 × 20 = 50,000 + 16,000 = $66,000. Comprobación: 360,000 + 66,000 = $426,000 = 250,000 + 176,000. Error común: usar 10,000 UE también para conversión.',
      'EU materials = 8,000 + 2,000 × 100 % = 10,000 → 250,000 / 10,000 = $25. EU conversion = 8,000 + 2,000 × 40 % = 8,800 → 176,000 / 8,800 = $20. Transferred = 8,000 × (25 + 20) = $360,000. Ending WIP = 2,000 × 25 + 800 × 20 = 50,000 + 16,000 = $66,000. Check: 360,000 + 66,000 = $426,000 = 250,000 + 176,000. Common mistake: using 10,000 EU for conversion too.',
    ),
    difficulty: 3,
    points: 20,
    competency: 'process-costing',
  },
  {
    id: 'N3-011',
    level: 3,
    module: 'L3-02',
    kind: 'truefalse',
    flavor: 'concept',
    prompt: t(
      'En el costeo ABC todos los cargos indirectos se asignan con una sola base, normalmente las horas de mano de obra directa.',
      'In ABC costing all overhead is assigned with a single base, usually direct labour hours.',
    ),
    answer: false,
    explanation: t(
      'Falso. Eso describe el costeo tradicional con tasa única. ABC agrupa los CIF por actividades y usa un inductor distinto para cada una (preparaciones, inspecciones, horas máquina, órdenes de compra), con lo que asigna el costo según el consumo real de cada producto.',
      'False. That describes traditional single-rate costing. ABC groups overhead by activity and uses a different driver for each (setups, inspections, machine hours, purchase orders), assigning cost according to each product\'s actual consumption.',
    ),
    difficulty: 1,
    points: 10,
    competency: 'abc-costing',
  },
  {
    id: 'N3-012',
    level: 3,
    module: 'L3-02',
    kind: 'fields',
    flavor: 'interpret',
    context: t(
      'CIF anuales: preparación de máquinas $120,000 (60 preparaciones); inspección $90,000 (1,500 inspecciones); maquinado $240,000 (12,000 horas máquina). El producto Premium (1,000 unidades) requiere 25 preparaciones, 300 inspecciones y 2,000 horas máquina.',
      'Annual overhead: machine setups $120,000 (60 setups); inspection $90,000 (1,500 inspections); machining $240,000 (12,000 machine hours). Product Premium (1,000 units) requires 25 setups, 300 inspections and 2,000 machine hours.',
    ),
    prompt: t(
      'Calcula los CIF totales asignados a Premium con ABC, el CIF por unidad con ABC y el CIF por unidad con una tasa única basada en horas máquina (en pesos).',
      'Compute total overhead assigned to Premium under ABC, overhead per unit under ABC, and overhead per unit with a single machine-hour rate (in pesos).',
    ),
    fields: [
      { id: 'f1', label: t('CIF asignados con ABC ($)', 'Overhead assigned under ABC ($)'), answer: 108000, unit: 'MXN', tolerance: { abs: 0.5 } },
      { id: 'f2', label: t('CIF por unidad con ABC ($)', 'Overhead per unit under ABC ($)'), answer: 108, unit: 'MXN', tolerance: { abs: 0.01 } },
      { id: 'f3', label: t('CIF por unidad con tasa única ($)', 'Overhead per unit with single rate ($)'), answer: 75, unit: 'MXN', tolerance: { abs: 0.01 } },
    ],
    explanation: t(
      'Tasas: 120,000 / 60 = $2,000 por preparación; 90,000 / 1,500 = $60 por inspección; 240,000 / 12,000 = $20 por hora máquina. Premium: 25 × 2,000 + 300 × 60 + 2,000 × 20 = 50,000 + 18,000 + 40,000 = $108,000 → $108 por unidad. Tasa única = 450,000 / 12,000 = $37.50 por hora → 2,000 × 37.50 = $75,000 → $75 por unidad. Interpretación: la tasa única subcostea a Premium en $33 por unidad porque ignora su alto consumo de preparaciones e inspecciones; un precio basado en $75 podría generar pérdidas ocultas.',
      'Rates: 120,000 / 60 = $2,000 per setup; 90,000 / 1,500 = $60 per inspection; 240,000 / 12,000 = $20 per machine hour. Premium: 25 × 2,000 + 300 × 60 + 2,000 × 20 = 50,000 + 18,000 + 40,000 = $108,000 → $108 per unit. Single rate = 450,000 / 12,000 = $37.50 per hour → 2,000 × 37.50 = $75,000 → $75 per unit. Interpretation: the single rate under-costs Premium by $33 per unit because it ignores its heavy use of setups and inspections; a price based on $75 could hide losses.',
    ),
    difficulty: 3,
    points: 20,
    competency: 'abc-costing',
  },

  // ════════════ L3-03 ════════════
  {
    id: 'N3-013',
    level: 3,
    module: 'L3-03',
    kind: 'formula',
    flavor: 'concept',
    prompt: t(
      'Completa la fórmula del punto de equilibrio en unidades.',
      'Complete the break-even point formula in units.',
    ),
    template: 'PE (unidades / units) = {{b1}} / ({{b2}} − {{b3}})',
    blanks: [
      {
        id: 'b1',
        options: [
          { id: 'N3-013-b1-a', text: t('Costos variables totales', 'Total variable costs') },
          { id: 'N3-013-b1-b', text: t('Costos fijos totales', 'Total fixed costs') },
          { id: 'N3-013-b1-c', text: t('Utilidad deseada', 'Desired profit') },
          { id: 'N3-013-b1-d', text: t('Ventas totales', 'Total sales') },
        ],
        correctOptionId: 'N3-013-b1-b',
      },
      {
        id: 'b2',
        options: [
          { id: 'N3-013-b2-a', text: t('Precio de venta unitario', 'Unit selling price') },
          { id: 'N3-013-b2-b', text: t('Costo fijo unitario', 'Unit fixed cost') },
          { id: 'N3-013-b2-c', text: t('Razón de margen de contribución', 'Contribution margin ratio') },
        ],
        correctOptionId: 'N3-013-b2-a',
      },
      {
        id: 'b3',
        options: [
          { id: 'N3-013-b3-a', text: t('Costo total unitario', 'Unit total cost') },
          { id: 'N3-013-b3-b', text: t('Costo fijo unitario', 'Unit fixed cost') },
          { id: 'N3-013-b3-c', text: t('Costo variable unitario', 'Unit variable cost') },
        ],
        correctOptionId: 'N3-013-b3-c',
      },
    ],
    explanation: t(
      'PE = CF / (P − CVu): los costos fijos se dividen entre el margen de contribución unitario. Restar el costo total unitario es un error común: ese costo ya incluye una porción de fijos que depende del volumen, así que se contarían dos veces.',
      'BEP = FC / (P − VCu): fixed costs are divided by unit contribution margin. Subtracting unit total cost is a common mistake: it already includes a share of fixed costs that depends on volume, so they would be counted twice.',
    ),
    difficulty: 1,
    points: 10,
    competency: 'break-even',
  },
  {
    id: 'N3-014',
    level: 3,
    module: 'L3-03',
    kind: 'numeric',
    flavor: 'case',
    context: t(
      'Una marca de mochilas vende cada pieza en $180; su costo variable es $108 por unidad y sus costos fijos mensuales son $324,000.',
      'A backpack brand sells each piece at $180; its variable cost is $108 per unit and monthly fixed costs are $324,000.',
    ),
    prompt: t(
      'Calcula el punto de equilibrio mensual en unidades.',
      'Compute the monthly break-even point in units.',
    ),
    answer: 4500,
    unit: 'units',
    decimals: 0,
    tolerance: { abs: 0.5 },
    explanation: t(
      'MCu = 180 − 108 = $72. PE = 324,000 / 72 = 4,500 unidades. Comprobación: 4,500 × 72 = $324,000 = costos fijos, utilidad cero. Error común: dividir entre el precio (324,000 / 180 = 1,800), olvidando que cada venta también genera costo variable.',
      'Unit CM = 180 − 108 = $72. BEP = 324,000 / 72 = 4,500 units. Check: 4,500 × 72 = $324,000 = fixed costs, zero profit. Common mistake: dividing by price (324,000 / 180 = 1,800), forgetting that each sale also incurs variable cost.',
    ),
    difficulty: 1,
    points: 10,
    competency: 'break-even',
  },
  {
    id: 'N3-015',
    level: 3,
    module: 'L3-03',
    kind: 'numeric',
    flavor: 'case',
    context: t(
      'Un producto se vende en $80 y su costo variable es $51.20 por unidad. Los costos fijos anuales son $540,000.',
      'A product sells for $80 and its variable cost is $51.20 per unit. Annual fixed costs are $540,000.',
    ),
    prompt: t(
      'Calcula el punto de equilibrio anual en pesos de venta, usando la razón de margen de contribución.',
      'Compute the annual break-even point in sales pesos using the contribution margin ratio.',
    ),
    answer: 1500000,
    unit: 'MXN',
    decimals: 0,
    tolerance: { abs: 1 },
    explanation: t(
      'MCu = 80 − 51.20 = $28.80; razón MC = 28.80 / 80 = 0.36 (36 %). PE ($) = 540,000 / 0.36 = $1,500,000. Comprobación: 1,500,000 / 80 = 18,750 unidades × 28.80 = $540,000. Error común: dividir entre la razón de costo variable (0.64), lo que da $843,750.',
      'Unit CM = 80 − 51.20 = $28.80; CM ratio = 28.80 / 80 = 0.36 (36 %). BEP ($) = 540,000 / 0.36 = $1,500,000. Check: 1,500,000 / 80 = 18,750 units × 28.80 = $540,000. Common mistake: dividing by the variable cost ratio (0.64), giving $843,750.',
    ),
    difficulty: 2,
    points: 15,
    competency: 'break-even',
  },
  {
    id: 'N3-016',
    level: 3,
    module: 'L3-03',
    kind: 'mcq',
    flavor: 'interpret',
    prompt: t(
      'Un proveedor sube el precio de un insumo y el costo variable unitario aumenta, mientras el precio de venta y los costos fijos no cambian. ¿Qué ocurre con el punto de equilibrio en unidades?',
      'A supplier raises the price of an input and unit variable cost increases, while selling price and fixed costs do not change. What happens to the break-even point in units?',
    ),
    options: [
      { id: 'N3-016-a', text: t('Disminuye, porque el costo total por unidad es mayor', 'It falls, because total cost per unit is higher') },
      { id: 'N3-016-b', text: t('No cambia, porque los costos fijos son los mismos', 'It does not change, because fixed costs are the same') },
      { id: 'N3-016-c', text: t('Cambia solo si también cambia el precio', 'It changes only if price also changes') },
      {
        id: 'N3-016-d',
        text: t(
          'Aumenta, porque el margen de contribución unitario disminuye',
          'It rises, because unit contribution margin decreases',
        ),
      },
    ],
    correctOptionId: 'N3-016-d',
    explanation: t(
      'PE = CF / (P − CVu). Si CVu sube con P constante, el denominador (MCu) baja y se necesitan más unidades para cubrir los mismos costos fijos. Pensar que solo los fijos mueven el PE es un error común: cualquier cambio en precio o costo variable altera el margen.',
      'BEP = FC / (P − VCu). If VCu rises with P constant, the denominator (unit CM) falls and more units are needed to cover the same fixed costs. Thinking only fixed costs move the BEP is a common mistake: any change in price or variable cost alters the margin.',
    ),
    difficulty: 1,
    points: 10,
    competency: 'break-even',
  },
  {
    id: 'N3-017',
    level: 3,
    module: 'L3-03',
    kind: 'numeric',
    flavor: 'case',
    context: t(
      'La empresa de termos vende a $250 cada unidad, con costo variable de $150 y costos fijos de $400,000 por periodo. La tasa de ISR es 30 %.',
      'The thermos company sells each unit at $250, with variable cost of $150 and fixed costs of $400,000 per period. The income tax rate is 30 %.',
    ),
    prompt: t(
      '¿Cuántas unidades debe vender para obtener una utilidad **después de impuestos** de $210,000?',
      'How many units must it sell to earn an **after-tax** profit of $210,000?',
    ),
    answer: 7000,
    unit: 'units',
    decimals: 0,
    tolerance: { abs: 0.5 },
    explanation: t(
      'Utilidad antes de impuestos requerida = 210,000 / (1 − 0.30) = $300,000. Q = (400,000 + 300,000) / (250 − 150) = 700,000 / 100 = 7,000 unidades. Comprobación: 7,000 × 100 − 400,000 = 300,000; ISR 90,000; utilidad neta $210,000. Error común: sumar directamente $210,000 (resultado 6,100 unidades), olvidando que el impuesto se lleva parte de la utilidad.',
      'Required before-tax profit = 210,000 / (1 − 0.30) = $300,000. Q = (400,000 + 300,000) / (250 − 150) = 700,000 / 100 = 7,000 units. Check: 7,000 × 100 − 400,000 = 300,000; tax 90,000; net profit $210,000. Common mistake: adding $210,000 directly (6,100 units), forgetting that tax takes part of the profit.',
    ),
    difficulty: 3,
    points: 20,
    competency: 'cvp-target-profit',
  },
  {
    id: 'N3-018',
    level: 3,
    module: 'L3-03',
    kind: 'fields',
    flavor: 'interpret',
    context: t(
      'Una empresa vende un electrodoméstico en $400 con costo variable de $240 y costos fijos de $960,000. Presupuesta vender 8,000 unidades.',
      'A company sells an appliance at $400 with variable cost of $240 and fixed costs of $960,000. It budgets sales of 8,000 units.',
    ),
    prompt: t(
      'Calcula el margen de seguridad en pesos, el margen de seguridad en % (puntos porcentuales, p. ej. 25 para 25 %) y el grado de apalancamiento operativo (veces, 2 decimales).',
      'Compute the margin of safety in pesos, the margin of safety in % (percentage points, e.g. 25 for 25 %) and the degree of operating leverage (times, 2 decimals).',
    ),
    fields: [
      { id: 'f1', label: t('Margen de seguridad ($)', 'Margin of safety ($)'), answer: 800000, unit: 'MXN', tolerance: { abs: 0.5 } },
      { id: 'f2', label: t('Margen de seguridad (%)', 'Margin of safety (%)'), answer: 25, unit: '%', tolerance: { abs: 0.01 } },
      { id: 'f3', label: t('Grado de apalancamiento operativo', 'Degree of operating leverage'), answer: 4, unit: 'times', tolerance: { abs: 0.01 } },
    ],
    explanation: t(
      'MCu = 400 − 240 = $160; PE = 960,000 / 160 = 6,000 unidades = $2,400,000. Ventas presupuestadas = 8,000 × 400 = $3,200,000. MS = 3,200,000 − 2,400,000 = $800,000; MS % = 800,000 / 3,200,000 = 25 %. MC total = 8,000 × 160 = $1,280,000; utilidad = 1,280,000 − 960,000 = $320,000; GAO = 1,280,000 / 320,000 = 4 (= 1 / 0.25). Interpretación: las ventas pueden caer 25 % antes de pérdidas, y un cambio de 10 % en ventas mueve la utilidad 40 %.',
      'Unit CM = 400 − 240 = $160; BEP = 960,000 / 160 = 6,000 units = $2,400,000. Budgeted sales = 8,000 × 400 = $3,200,000. MoS = 3,200,000 − 2,400,000 = $800,000; MoS % = 800,000 / 3,200,000 = 25 %. Total CM = 8,000 × 160 = $1,280,000; profit = 1,280,000 − 960,000 = $320,000; DOL = 1,280,000 / 320,000 = 4 (= 1 / 0.25). Interpretation: sales can fall 25 % before losses, and a 10 % change in sales moves profit by 40 %.',
    ),
    difficulty: 2,
    points: 15,
    competency: 'margin-of-safety',
  },
  {
    id: 'N3-019',
    level: 3,
    module: 'L3-03',
    kind: 'truefalse',
    flavor: 'concept',
    prompt: t(
      'En el punto de equilibrio, el margen de contribución total es igual a los costos fijos totales.',
      'At the break-even point, total contribution margin equals total fixed costs.',
    ),
    answer: true,
    explanation: t(
      'Verdadero. Utilidad = MC total − CF; en el punto de equilibrio la utilidad es cero, por lo tanto MC total = CF. Por eso PE = CF / MCu: es el número de unidades cuyo margen acumulado cubre exactamente los fijos.',
      'True. Profit = total CM − FC; at break-even profit is zero, so total CM = FC. That is why BEP = FC / unit CM: it is the number of units whose accumulated margin exactly covers fixed costs.',
    ),
    difficulty: 1,
    points: 10,
    competency: 'contribution-margin',
  },

  // ════════════ L3-04 ════════════
  {
    id: 'N3-020',
    level: 3,
    module: 'L3-04',
    kind: 'mcq',
    flavor: 'concept',
    prompt: t(
      '¿Cuál es el punto de partida para elaborar el presupuesto maestro de una empresa manufacturera?',
      'What is the starting point for preparing a manufacturing company\'s master budget?',
    ),
    options: [
      { id: 'N3-020-a', text: t('El presupuesto de efectivo', 'The cash budget') },
      { id: 'N3-020-b', text: t('El presupuesto de compras de materiales', 'The materials purchases budget') },
      { id: 'N3-020-c', text: t('El presupuesto de ventas', 'The sales budget') },
      { id: 'N3-020-d', text: t('El estado de situación financiera proyectado', 'The projected statement of financial position') },
    ],
    correctOptionId: 'N3-020-c',
    explanation: t(
      'El volumen de ventas esperado determina cuánto producir, cuánto material comprar, cuánta mano de obra contratar y qué cobros habrá. El presupuesto de efectivo y los estados proyectados se elaboran al final, porque dependen de todos los anteriores.',
      'Expected sales volume determines how much to produce, how much material to buy, how much labour to hire and what collections there will be. The cash budget and projected statements are prepared last because they depend on all the others.',
    ),
    difficulty: 1,
    points: 10,
    competency: 'budgeting',
  },
  {
    id: 'N3-021',
    level: 3,
    module: 'L3-04',
    kind: 'fields',
    flavor: 'case',
    context: t(
      'Una empresa presupuestó producir 10,000 unidades con costo variable estándar de $35 por unidad y costos fijos de $180,000. En realidad produjo 12,000 unidades y su costo total real fue $615,000.',
      'A company budgeted production of 10,000 units with a standard variable cost of $35 per unit and fixed costs of $180,000. It actually produced 12,000 units and its actual total cost was $615,000.',
    ),
    prompt: t(
      'Calcula el costo del presupuesto estático, el costo del presupuesto flexible y la variación del presupuesto flexible (positivo = desfavorable, negativo = favorable), en pesos.',
      'Compute the static budget cost, the flexible budget cost and the flexible-budget variance (positive = unfavourable, negative = favourable), in pesos.',
    ),
    fields: [
      { id: 'f1', label: t('Presupuesto estático ($)', 'Static budget ($)'), answer: 530000, unit: 'MXN', tolerance: { abs: 0.5 } },
      { id: 'f2', label: t('Presupuesto flexible ($)', 'Flexible budget ($)'), answer: 600000, unit: 'MXN', tolerance: { abs: 0.5 } },
      { id: 'f3', label: t('Variación vs. presupuesto flexible ($)', 'Variance vs. flexible budget ($)'), answer: 15000, unit: 'MXN', tolerance: { abs: 0.5 } },
    ],
    explanation: t(
      'Estático = 10,000 × 35 + 180,000 = $530,000. Flexible (a 12,000 unidades reales) = 12,000 × 35 + 180,000 = $600,000. Variación = 615,000 − 600,000 = $15,000 desfavorable. Comparar contra el estático daría $85,000 "de más", pero $70,000 se explican simplemente por producir 2,000 unidades adicionales; solo $15,000 reflejan un problema de control de costos.',
      'Static = 10,000 × 35 + 180,000 = $530,000. Flexible (at the actual 12,000 units) = 12,000 × 35 + 180,000 = $600,000. Variance = 615,000 − 600,000 = $15,000 unfavourable. Comparing with the static budget would show $85,000 "over", but $70,000 is simply explained by producing 2,000 extra units; only $15,000 reflects a cost-control problem.',
    ),
    difficulty: 2,
    points: 15,
    competency: 'flexible-budget',
  },
  {
    id: 'N3-022',
    level: 3,
    module: 'L3-04',
    kind: 'fields',
    flavor: 'case',
    context: t(
      'Estándar por unidad: 2 kg de resina a $30 por kg. En el mes se produjeron 1,000 unidades; se compraron y usaron 2,100 kg a $28.50 por kg.',
      'Standard per unit: 2 kg of resin at $30 per kg. During the month 1,000 units were produced; 2,100 kg were bought and used at $28.50 per kg.',
    ),
    prompt: t(
      'Calcula la variación de precio, la variación de cantidad y la variación total de materiales, en pesos. Usa signo positivo para desfavorable y negativo para favorable.',
      'Compute the materials price variance, quantity variance and total variance, in pesos. Use a positive sign for unfavourable and negative for favourable.',
    ),
    fields: [
      { id: 'f1', label: t('Variación de precio ($)', 'Price variance ($)'), answer: -3150, unit: 'MXN', tolerance: { abs: 0.5 } },
      { id: 'f2', label: t('Variación de cantidad ($)', 'Quantity variance ($)'), answer: 3000, unit: 'MXN', tolerance: { abs: 0.5 } },
      { id: 'f3', label: t('Variación total ($)', 'Total variance ($)'), answer: -150, unit: 'MXN', tolerance: { abs: 0.5 } },
    ],
    explanation: t(
      'Precio = (28.50 − 30) × 2,100 = −$3,150 (favorable). Cantidad estándar permitida = 1,000 × 2 = 2,000 kg; cantidad = (2,100 − 2,000) × 30 = $3,000 (desfavorable). Total = 2,100 × 28.50 − 2,000 × 30 = 59,850 − 60,000 = −$150 (favorable) = −3,150 + 3,000. Error común: calcular la variación de precio con la cantidad estándar en vez de la real, o la de cantidad con el precio real en vez del estándar.',
      'Price = (28.50 − 30) × 2,100 = −$3,150 (favourable). Standard quantity allowed = 1,000 × 2 = 2,000 kg; quantity = (2,100 − 2,000) × 30 = $3,000 (unfavourable). Total = 2,100 × 28.50 − 2,000 × 30 = 59,850 − 60,000 = −$150 (favourable) = −3,150 + 3,000. Common mistake: computing the price variance with standard instead of actual quantity, or the quantity variance with actual instead of standard price.',
    ),
    difficulty: 3,
    points: 20,
    competency: 'variance-analysis',
  },
  {
    id: 'N3-023',
    level: 3,
    module: 'L3-04',
    kind: 'truefalse',
    flavor: 'interpret',
    prompt: t(
      'Una variación favorable en el precio de materiales puede estar relacionada con una variación desfavorable en la cantidad, por ejemplo si se compró material más barato de menor calidad que genera más desperdicio.',
      'A favourable materials price variance can be related to an unfavourable quantity variance, for example if cheaper, lower-quality material was bought that causes more waste.',
    ),
    answer: true,
    explanation: t(
      'Verdadero. Las variaciones no deben evaluarse aisladas: el área de compras puede "ahorrar" en precio y trasladar el costo a producción en forma de mermas. Por eso se investigan juntas y se asigna la responsabilidad a quien controla la causa.',
      'True. Variances should not be assessed in isolation: purchasing may "save" on price and pass the cost to production as waste. That is why they are investigated together and responsibility is assigned to whoever controls the cause.',
    ),
    difficulty: 1,
    points: 10,
    competency: 'variance-analysis',
  },
  {
    id: 'N3-024',
    level: 3,
    module: 'L3-04',
    kind: 'numeric',
    flavor: 'case',
    context: t(
      'Una empresa fabrica 10,000 piezas al año de un componente. Costo unitario: materia prima $40, mano de obra directa $25, CIF variables $15 y CIF fijos asignados $20 (total $100). Un proveedor ofrece venderlo a $88. De los $200,000 de CIF fijos asignados, solo $50,000 (un supervisor) se eliminarían si se compra; el resto continúa.',
      'A company makes 10,000 units a year of a component. Unit cost: direct materials $40, direct labour $25, variable overhead $15 and allocated fixed overhead $20 (total $100). A supplier offers it at $88. Of the $200,000 allocated fixed overhead, only $50,000 (a supervisor) would be eliminated by buying; the rest continues.',
    ),
    prompt: t(
      '¿Cuánto ahorra la empresa al año si **fabrica** el componente en lugar de comprarlo? Responde en pesos.',
      'How much does the company save per year by **making** the component instead of buying it? Answer in pesos.',
    ),
    answer: 30000,
    unit: 'MXN',
    decimals: 0,
    tolerance: { abs: 0.5 },
    explanation: t(
      'Costo relevante de fabricar = variables 10,000 × (40 + 25 + 15) = $800,000 + fijos evitables $50,000 = $850,000. Costo de comprar = 10,000 × 88 = $880,000. Fabricar ahorra 880,000 − 850,000 = $30,000. Error común: comparar el costo total de $100 contra $88 y concluir que comprar ahorra $120,000; los $150,000 de fijos no evitables se pagan en ambas alternativas.',
      'Relevant cost to make = variable 10,000 × (40 + 25 + 15) = $800,000 + avoidable fixed $50,000 = $850,000. Cost to buy = 10,000 × 88 = $880,000. Making saves 880,000 − 850,000 = $30,000. Common mistake: comparing full cost of $100 with $88 and concluding that buying saves $120,000; the $150,000 of unavoidable fixed costs is paid under both alternatives.',
    ),
    difficulty: 2,
    points: 15,
    competency: 'make-or-buy',
  },
  {
    id: 'N3-025',
    level: 3,
    module: 'L3-04',
    kind: 'mcq',
    flavor: 'case',
    context: t(
      'Con los datos del ejercicio anterior (fabricar cuesta $850,000 relevantes y comprar $880,000), la empresa descubre que si compra el componente puede rentar el espacio liberado a un tercero por $45,000 al año.',
      'Using the previous exercise\'s data (making costs $850,000 in relevant costs and buying $880,000), the company finds that if it buys the component it can rent the freed space to a third party for $45,000 a year.',
    ),
    prompt: t('¿Cuál es la mejor decisión y su ventaja anual?', 'What is the best decision and its annual advantage?'),
    options: [
      { id: 'N3-025-a', text: t('Fabricar; ahorra $30,000', 'Make; saves $30,000') },
      { id: 'N3-025-b', text: t('Comprar; ahorra $15,000', 'Buy; saves $15,000') },
      { id: 'N3-025-c', text: t('Comprar; ahorra $120,000', 'Buy; saves $120,000') },
      { id: 'N3-025-d', text: t('Fabricar; ahorra $75,000', 'Make; saves $75,000') },
    ],
    correctOptionId: 'N3-025-b',
    explanation: t(
      'La renta de $45,000 es un costo de oportunidad de fabricar. Costo de fabricar = 850,000 + 45,000 = $895,000 vs. comprar $880,000 → comprar ahorra $15,000. (Equivalente: 880,000 − 45,000 = $835,000 neto de comprar.) "Fabricar, $30,000" ignora el costo de oportunidad; "$120,000" incluye fijos no evitables; "$75,000" suma la renta en el sentido equivocado.',
      'The $45,000 rent is an opportunity cost of making. Cost to make = 850,000 + 45,000 = $895,000 vs. buying $880,000 → buying saves $15,000. (Equivalently: 880,000 − 45,000 = $835,000 net cost of buying.) "Make, $30,000" ignores the opportunity cost; "$120,000" includes unavoidable fixed costs; "$75,000" adds the rent in the wrong direction.',
    ),
    difficulty: 3,
    points: 20,
    competency: 'make-or-buy',
  },
  {
    id: 'N3-026',
    level: 3,
    module: 'L3-04',
    kind: 'multi',
    flavor: 'concept',
    prompt: t(
      'Una empresa evalúa sustituir una máquina. Selecciona todos los conceptos que son **relevantes** para la decisión.',
      'A company is evaluating replacing a machine. Select all the items that are **relevant** to the decision.',
    ),
    options: [
      {
        id: 'N3-026-a',
        text: t('El valor en libros de la máquina actual (costo histórico no depreciado)', 'The book value of the current machine (undepreciated historical cost)'),
      },
      {
        id: 'N3-026-b',
        text: t('Los ahorros futuros en costos de operación de la máquina nueva', 'Future operating cost savings of the new machine'),
      },
      {
        id: 'N3-026-c',
        text: t('El precio al que hoy se puede vender la máquina actual', 'The price at which the current machine can be sold today'),
      },
      {
        id: 'N3-026-d',
        text: t('Los CIF fijos corporativos asignados que no cambian con la decisión', 'Allocated corporate fixed overhead that does not change with the decision'),
      },
      {
        id: 'N3-026-e',
        text: t('El costo de adquisición de la máquina nueva', 'The purchase cost of the new machine'),
      },
    ],
    correctOptionIds: ['N3-026-b', 'N3-026-c', 'N3-026-e'],
    explanation: t(
      'Relevantes: costos e ingresos futuros que difieren entre alternativas → ahorros de operación, valor de venta actual de la máquina vieja y precio de la nueva. El valor en libros es un costo hundido (ya se pagó y no cambia con la decisión) y los CIF corporativos asignados se pagan en ambas alternativas.',
      'Relevant: future costs and revenues that differ between alternatives → operating savings, current sale value of the old machine and price of the new one. Book value is a sunk cost (already paid and unchanged by the decision) and allocated corporate overhead is paid under both alternatives.',
    ),
    difficulty: 2,
    points: 15,
    competency: 'relevant-costs',
  },
  {
    id: 'N3-027',
    level: 3,
    module: 'L3-04',
    kind: 'numeric',
    flavor: 'case',
    context: t(
      'Una planta tiene capacidad para 50,000 unidades y produce 40,000. Precio normal $120; costo variable de manufactura $62 por unidad; comisión variable de venta $8 por unidad; costos fijos $1,200,000. Un cliente extranjero ofrece comprar 8,000 unidades a $80 cada una. El pedido no paga comisión, no afecta las ventas normales y requiere un empaque especial con costo único de $20,000.',
      'A plant has capacity for 50,000 units and produces 40,000. Regular price $120; variable manufacturing cost $62 per unit; variable sales commission $8 per unit; fixed costs $1,200,000. A foreign customer offers to buy 8,000 units at $80 each. The order pays no commission, does not affect regular sales and requires special packaging with a one-time cost of $20,000.',
    ),
    prompt: t(
      '¿En cuánto cambia la utilidad de operación si se acepta el pedido especial? Responde en pesos (negativo si disminuye).',
      'By how much does operating income change if the special order is accepted? Answer in pesos (negative if it decreases).',
    ),
    answer: 124000,
    unit: 'MXN',
    decimals: 0,
    tolerance: { abs: 0.5 },
    explanation: t(
      'Hay capacidad ociosa (10,000 unidades ≥ 8,000), así que los costos fijos no cambian y son irrelevantes. Utilidad incremental = 8,000 × (80 − 62) − 20,000 = 144,000 − 20,000 = $124,000 → aceptar. Errores comunes: restar la comisión de $8 que este pedido no paga, o restar el costo fijo unitario (1,200,000 / 40,000 = $30), lo que haría parecer que el pedido genera pérdida.',
      'There is idle capacity (10,000 units ≥ 8,000), so fixed costs do not change and are irrelevant. Incremental profit = 8,000 × (80 − 62) − 20,000 = 144,000 − 20,000 = $124,000 → accept. Common mistakes: subtracting the $8 commission this order does not pay, or subtracting unit fixed cost (1,200,000 / 40,000 = $30), which would make the order look unprofitable.',
    ),
    difficulty: 3,
    points: 20,
    competency: 'special-order',
  },
]
