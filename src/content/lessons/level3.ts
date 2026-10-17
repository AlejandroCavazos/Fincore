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
        heading: t('¿Qué es un costo?', 'What is a cost?'),
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
        heading: t('¿Sube si produces más?', 'Does it rise if you make more?'),
        body: [
          t(
            'En palabras sencillas: algunos costos suben cuando produces más y otros se quedan igual. Piensa en una taquería: la tortilla y la carne aumentan con cada taco vendido; la renta del local se paga igual vendas 100 o 1,000 tacos.',
            'In simple words: some costs rise when you produce more and others stay the same. Think of a taco stand: tortillas and meat increase with every taco sold; the rent is paid the same whether you sell 100 or 1,000 tacos.',
          ),
          t(
            'Un **costo variable** cambia en total en proporción directa al volumen de actividad, pero es constante por unidad (p. ej., materia prima, comisiones por venta). Un **costo fijo** permanece constante en total dentro de un **rango relevante** (el rango de producción que la empresa puede manejar con su capacidad actual) y por eso su monto por unidad disminuye cuando el volumen aumenta (p. ej., renta, sueldo del supervisor, depreciación en línea recta).',
            'A **variable cost** changes in total in direct proportion to activity volume but is constant per unit (e.g., raw materials, sales commissions). A **fixed cost** stays constant in total within a **relevant range** (the range of output the company can handle with its current capacity), so its per-unit amount falls as volume rises (e.g., rent, supervisor salary, straight-line depreciation).',
          ),
          t(
            'Un **costo mixto** (semivariable) tiene una parte fija y una variable, como el recibo de luz: un cargo fijo más lo que consumes. Para planear se separa con el **método de punto alto-punto bajo**, que usa solo el mes de mayor y el de menor actividad para estimar cuánto sube el costo por cada unidad extra.',
            'A **mixed cost** (semi-variable) has a fixed part and a variable part, like the electricity bill: a fixed charge plus what you use. For planning it is split with the **high-low method**, which uses only the highest- and lowest-activity months to estimate how much the cost rises for each extra unit.',
          ),
        ],
        formulas: [
          {
            name: t('Separar un costo mixto (método punto alto-punto bajo)', 'Splitting a mixed cost (high-low method)'),
            expression: 'CVu = (Costo alto − Costo bajo) ÷ (Actividad alta − Actividad baja);  CF = Costo total − CVu × Actividad;  Costo esperado = CF + CVu × Actividad esperada',
            variables: [
              { symbol: 'CVu', meaning: t('Costo variable unitario: pesos que aumenta el costo por cada unidad (u hora) adicional.', 'Unit variable cost: pesos the cost rises for each extra unit (or hour).') },
              { symbol: 'Costo alto / Costo bajo', meaning: t('Costo total en pesos del mes de mayor y del de menor actividad.', 'Total cost in pesos in the highest- and lowest-activity months.') },
              { symbol: 'Actividad alta / Actividad baja', meaning: t('Unidades u horas de esos mismos dos meses.', 'Units or hours in those same two months.') },
              { symbol: 'CF', meaning: t('Costo fijo: pesos que se pagan cada mes aunque no se produzca nada.', 'Fixed cost: pesos paid every month even if nothing is produced.') },
              { symbol: 'Costo total / Actividad', meaning: t('El costo y la actividad de cualquiera de los dos meses (alto o bajo).', 'The cost and activity of either of the two months (high or low).') },
              { symbol: 'Actividad esperada', meaning: t('Las unidades u horas para las que quieres estimar el costo.', 'The units or hours for which you want to estimate the cost.') },
            ],
            steps: [
              t('Elige el mes de mayor y el de menor **actividad** (no el de mayor costo).', 'Pick the highest- and lowest-**activity** months (not the highest-cost month).'),
              t('Resta los costos y resta las actividades; divide la primera diferencia entre la segunda: ese es el CVu.', 'Subtract the costs and subtract the activities; divide the first difference by the second: that is VCu.'),
              t('Toma uno de los dos meses y quítale la parte variable (CVu × su actividad): lo que sobra es el CF.', 'Take one of the two months and remove the variable part (VCu × its activity): what remains is FC.'),
              t('Para estimar otro nivel: CF + CVu × actividad esperada.', 'To estimate another level: FC + VCu × expected activity.'),
            ],
            example: t(
              'Una lavandería gastó $22,000 de agua y luz con 1,000 cargas (mes bajo) y $38,000 con 3,000 cargas (mes alto). CVu = (38,000 − 22,000) ÷ (3,000 − 1,000) = 16,000 ÷ 2,000 = $8 por carga. CF = 22,000 − 8 × 1,000 = 22,000 − 8,000 = $14,000. Para 2,500 cargas: 14,000 + 8 × 2,500 = 14,000 + 20,000 = **$34,000**.',
              'A laundromat spent $22,000 on water and power with 1,000 loads (low month) and $38,000 with 3,000 loads (high month). VCu = (38,000 − 22,000) ÷ (3,000 − 1,000) = 16,000 ÷ 2,000 = $8 per load. FC = 22,000 − 8 × 1,000 = 22,000 − 8,000 = $14,000. For 2,500 loads: 14,000 + 8 × 2,500 = 14,000 + 20,000 = **$34,000**.',
            ),
            interpret: t('Comprueba con el otro mes: debe darte el mismo CF. Si no coincide, revisa la resta o la división.', 'Check with the other month: it must give the same FC. If it does not match, recheck the subtraction or the division.'),
            mistake: t('Dividir el costo total entre las unidades (22,000 ÷ 1,000 = $22): eso mezcla la parte fija con la variable y no es el CVu.', 'Dividing total cost by units (22,000 ÷ 1,000 = $22): that mixes the fixed and variable parts and is not VCu.'),
          },
        ],
      },
      {
        heading: t('¿Va dentro del pan?', 'Does it go into the bread?'),
        body: [
          t(
            'Un costo es **directo** cuando puede identificarse de forma económica y precisa con un objeto de costo (un producto, una orden, un departamento). Es **indirecto** cuando se comparte entre varios objetos y debe asignarse mediante una base de prorrateo.',
            'A cost is **direct** when it can be traced economically and accurately to a cost object (a product, a job, a department). It is **indirect** when it is shared by several objects and must be allocated using an allocation base.',
          ),
          t(
            'En manufactura, el costo de producción tiene tres elementos: **materia prima directa (MPD)**, **mano de obra directa (MOD)** y **cargos (gastos) indirectos de fabricación (CIF)**. Los CIF incluyen materiales y mano de obra indirectos, depreciación de la planta, seguros de la fábrica, energía, etc. Los gastos de venta y administración no forman parte del costo del producto: son gastos del periodo.',
            'In manufacturing, product cost has three elements: **direct materials (DM)**, **direct labour (DL)** and **manufacturing overhead (MOH)**. MOH includes indirect materials and labour, plant depreciation, factory insurance, power, etc. Selling and administrative expenses are not product costs: they are period expenses.',
          ),
          t(
            'Ejemplo de una panadería: la harina es MPD (va dentro del pan), el sueldo del panadero es MOD (trabaja directamente en el pan) y el gas del horno o el sueldo del supervisor son CIF (ayudan a producir todo, pero no se pueden ligar a un pan en particular).',
            'Bakery example: flour is DM (it goes into the bread), the baker\'s wage is DL (works directly on the bread) and oven gas or the supervisor\'s salary are MOH (they help produce everything but cannot be tied to one specific loaf).',
          ),
        ],
        formulas: [
          {
            name: t('Costo primo y costo de conversión', 'Prime cost and conversion cost'),
            expression: 'Costo primo = MPD + MOD;  Costo de conversión = MOD + CIF',
            variables: [
              { symbol: 'MPD', meaning: t('Materia prima directa: pesos de los materiales que forman el producto.', 'Direct materials: pesos of the materials that make up the product.') },
              { symbol: 'MOD', meaning: t('Mano de obra directa: pesos pagados a quienes fabrican el producto con sus manos o máquinas.', 'Direct labour: pesos paid to the people who make the product by hand or machine.') },
              { symbol: 'CIF', meaning: t('Cargos indirectos de fabricación: otros costos de la fábrica (supervisión, luz, depreciación de la planta), en pesos.', 'Manufacturing overhead: other factory costs (supervision, power, plant depreciation), in pesos.') },
            ],
            steps: [
              t('Separa los datos en MPD, MOD y CIF; deja fuera los gastos de venta y de administración.', 'Sort the data into DM, DL and MOH; leave out selling and administrative expenses.'),
              t('Costo primo: suma MPD + MOD (lo "primario", lo directo).', 'Prime cost: add DM + DL (the "primary", direct part).'),
              t('Costo de conversión: suma MOD + CIF (lo que cuesta transformar el material en producto).', 'Conversion cost: add DL + MOH (what it costs to turn material into product).'),
            ],
            example: t(
              'Un taller usa MPD $50,000, MOD $35,000, CIF $20,000 y tiene gastos de venta de $10,000. Costo primo = 50,000 + 35,000 = **$85,000**. Costo de conversión = 35,000 + 20,000 = **$55,000**. Los $10,000 de venta no entran en ninguno.',
              'A workshop uses DM $50,000, DL $35,000, MOH $20,000 and has selling expenses of $10,000. Prime cost = 50,000 + 35,000 = **$85,000**. Conversion cost = 35,000 + 20,000 = **$55,000**. The $10,000 of selling expense goes into neither.',
            ),
            mistake: t('Olvidar que la MOD va en los dos (primo y conversión), o meter gastos de venta en el costo del producto.', 'Forgetting that DL goes into both (prime and conversion), or putting selling expenses into product cost.'),
          },
          {
            name: t('Costo de producción y costo por unidad', 'Manufacturing cost and cost per unit'),
            expression: 'Costo de producción = MPD + MOD + CIF;  Costo unitario = Costo de producción ÷ Unidades producidas',
            variables: [
              { symbol: 'MPD, MOD, CIF', meaning: t('Los tres elementos del costo, en pesos (ver la fórmula anterior).', 'The three cost elements, in pesos (see the previous formula).') },
              { symbol: 'Unidades producidas', meaning: t('Número de piezas fabricadas en el periodo.', 'Number of pieces made in the period.') },
              { symbol: 'Costo unitario', meaning: t('Pesos que cuesta fabricar cada pieza.', 'Pesos it costs to make each piece.') },
            ],
            steps: [
              t('Suma los CIF si vienen por partes (gas, supervisor, depreciación).', 'Add up MOH if it comes in pieces (gas, supervisor, depreciation).'),
              t('Suma MPD + MOD + CIF: ese es el costo de producción.', 'Add DM + DL + MOH: that is manufacturing cost.'),
              t('Divide entre las unidades producidas para obtener el costo por pieza.', 'Divide by units produced to get the cost per piece.'),
            ],
            example: t(
              'Con MPD $50,000, MOD $35,000 y CIF $20,000, y 7,000 piezas: costo de producción = 50,000 + 35,000 + 20,000 = $105,000; costo unitario = 105,000 ÷ 7,000 = **$15 por pieza**.',
              'With DM $50,000, DL $35,000 and MOH $20,000, and 7,000 pieces: manufacturing cost = 50,000 + 35,000 + 20,000 = $105,000; unit cost = 105,000 ÷ 7,000 = **$15 per piece**.',
            ),
            interpret: t('El costo unitario te dice el precio mínimo para no perder en la fábrica; aún falta cubrir los gastos de venta y administración.', 'Unit cost tells you the minimum price to avoid a loss at the factory; selling and administrative expenses still need to be covered.'),
          },
        ],
        bullets: [
          t('Costo primo = MPD + MOD', 'Prime cost = DM + DL'),
          t('Costo de conversión = MOD + CIF', 'Conversion cost = DL + MOH'),
          t('Costo de producción = MPD + MOD + CIF', 'Manufacturing cost = DM + DL + MOH'),
        ],
      },
      {
        heading: t('¿Cuándo lo fijo deja de serlo?', 'When does fixed stop being fixed?'),
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
        formulas: [
          {
            name: t('Costo fijo por unidad', 'Fixed cost per unit'),
            expression: 'CF por unidad = CF total ÷ Unidades producidas',
            variables: [
              { symbol: 'CF total', meaning: t('Costo fijo del periodo en pesos (renta, sueldo del supervisor).', 'Fixed cost for the period in pesos (rent, supervisor salary).') },
              { symbol: 'Unidades producidas', meaning: t('Piezas fabricadas en ese mismo periodo.', 'Pieces made in that same period.') },
            ],
            steps: [
              t('Toma el costo fijo total del mes; no cambia con el volumen.', 'Take the month\'s total fixed cost; it does not change with volume.'),
              t('Divídelo entre las unidades de ese mes.', 'Divide it by that month\'s units.'),
              t('Si cambian las unidades, vuelve a dividir: el resultado por unidad cambia.', 'If units change, divide again: the per-unit result changes.'),
            ],
            example: t(
              'Renta de $24,000 al mes. Con 800 piezas: 24,000 ÷ 800 = $30 por pieza. Con 1,200 piezas: 24,000 ÷ 1,200 = **$20 por pieza**. La renta total sigue en $24,000.',
              'Rent of $24,000 a month. With 800 pieces: 24,000 ÷ 800 = $30 per piece. With 1,200 pieces: 24,000 ÷ 1,200 = **$20 per piece**. Total rent stays at $24,000.',
            ),
            interpret: t('Más volumen = menor costo fijo por pieza. Por eso producir más "abarata" cada unidad, siempre que no rebases el rango relevante.', 'More volume = lower fixed cost per piece. That is why producing more makes each unit "cheaper", as long as you stay within the relevant range.'),
          },
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
    exerciseIds: ['N3-002', 'N3-003', 'N3-004', 'N3-005', 'N3-006'],
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
    minutes: 14,
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
        heading: t('¿Cuánto costó este pedido?', 'What did this order cost?'),
        body: [
          t(
            'En palabras sencillas: cuando cada trabajo es distinto (como un carpintero que hace un clóset a la medida), llevas una "cuenta" por cada pedido para saber cuánto te costó ese pedido en particular.',
            'In simple words: when every job is different (like a carpenter building a custom closet), you keep a "tab" for each order to know how much that specific order cost you.',
          ),
          t(
            'Se usa cuando cada producto o lote es distinto y se fabrica a pedido: imprentas, despachos, constructoras, mueblerías a la medida. Los costos se acumulan en una **hoja de costos por orden** (una ficha por pedido): la MPD y la MOD se cargan directamente a cada orden, y los CIF se **aplican** (se reparten) con una **tasa predeterminada**, es decir, una tarifa fijada desde el inicio del año.',
            'It is used when each product or batch is distinct and made to order: print shops, firms, builders, custom furniture makers. Costs accumulate on a **job cost sheet** (one card per order): DM and DL are charged directly to each job and MOH is **applied** (spread) using a **predetermined rate**, that is, a charge set at the start of the year.',
          ),
          t(
            'La tasa se calcula al inicio del periodo con cifras presupuestadas porque los CIF reales se conocen hasta el cierre, y no puedes esperar al fin de año para cotizarle a un cliente. Al final, la diferencia entre CIF reales y aplicados (sub o sobreaplicación) se ajusta, normalmente contra el costo de ventas.',
            'The rate is computed at the start of the period with budgeted figures because actual overhead is only known at period end, and you cannot wait until year-end to quote a client. Afterwards, the difference between actual and applied overhead (under- or over-applied) is adjusted, usually against cost of goods sold.',
          ),
        ],
        formulas: [
          {
            name: t('Tasa predeterminada de CIF y costo de una orden', 'Predetermined overhead rate and job cost'),
            expression: 'Tasa CIF = CIF presupuestados ÷ Base presupuestada;  CIF aplicados = Tasa × Base real de la orden;  Costo de la orden = MPD + MOD + CIF aplicados',
            variables: [
              { symbol: 'CIF presupuestados', meaning: t('Los costos indirectos que esperas tener en el año, en pesos.', 'The overhead you expect for the year, in pesos.') },
              { symbol: 'Base presupuestada', meaning: t('Total esperado de la base de reparto en el año (por ejemplo, horas de MOD u horas máquina).', 'Expected total of the allocation base for the year (for example, DL hours or machine hours).') },
              { symbol: 'Tasa', meaning: t('Pesos de CIF que se cargan por cada hora (u otra unidad de la base).', 'Pesos of overhead charged per hour (or other base unit).') },
              { symbol: 'Base real de la orden', meaning: t('Horas (o unidades de la base) que realmente consumió esa orden.', 'Hours (or base units) that job actually used.') },
              { symbol: 'MPD, MOD', meaning: t('Materia prima y mano de obra directas cargadas a la orden, en pesos.', 'Direct materials and direct labour charged to the job, in pesos.') },
            ],
            steps: [
              t('Divide los CIF presupuestados entre la base presupuestada: obtienes la tasa por hora.', 'Divide budgeted overhead by the budgeted base: you get the rate per hour.'),
              t('Multiplica la tasa por las **horas** que usó la orden: esos son los CIF aplicados.', 'Multiply the rate by the **hours** the job used: that is applied overhead.'),
              t('Suma MPD + MOD + CIF aplicados: ese es el costo total de la orden.', 'Add DM + DL + applied overhead: that is the job\'s total cost.'),
            ],
            example: t(
              'Un taller presupuesta CIF de $500,000 y 20,000 horas de MOD. Tasa = 500,000 ÷ 20,000 = $25 por hora. Una orden usa MPD $10,000 y MOD $8,000 (300 horas). CIF aplicados = 300 × 25 = $7,500. Costo de la orden = 10,000 + 8,000 + 7,500 = **$25,500**.',
              'A workshop budgets overhead of $500,000 and 20,000 DL hours. Rate = 500,000 ÷ 20,000 = $25 per hour. A job uses DM $10,000 and DL $8,000 (300 hours). Applied overhead = 300 × 25 = $7,500. Job cost = 10,000 + 8,000 + 7,500 = **$25,500**.',
            ),
            mistake: t('Multiplicar la tasa por los **pesos** de MOD ($8,000 × 25) en vez de por las **horas**. La tasa es "por hora", así que va con horas.', 'Multiplying the rate by DL **pesos** ($8,000 × 25) instead of by **hours**. The rate is "per hour", so it goes with hours.'),
          },
          {
            name: t('Importes al vender una orden (inventario perpetuo)', 'Amounts when a job is sold (perpetual inventory)'),
            expression: 'Ventas = Precio cobrado al cliente;  Costo de ventas = Costo acumulado de la orden;  Utilidad bruta = Ventas − Costo de ventas',
            variables: [
              { symbol: 'Precio cobrado al cliente', meaning: t('Lo que el cliente paga o queda a deber, en pesos. Va en Clientes (cargo) y Ventas (abono).', 'What the client pays or owes, in pesos. It goes to Accounts receivable (debit) and Sales (credit).') },
              { symbol: 'Costo acumulado de la orden', meaning: t('El total de la hoja de costos (MPD + MOD + CIF aplicados). Va en Costo de ventas (cargo) e Inventarios (abono).', 'The total of the job cost sheet (DM + DL + applied MOH). It goes to Cost of goods sold (debit) and Inventory (credit).') },
              { symbol: 'Utilidad bruta', meaning: t('Lo que ganas con la orden antes de gastos de operación, en pesos.', 'What you earn on the job before operating expenses, in pesos.') },
            ],
            steps: [
              t('Registra la venta por el **precio**: cargo a Clientes (si es a crédito) y abono a Ventas.', 'Record the sale at the **price**: debit Accounts receivable (if on credit) and credit Sales.'),
              t('Registra la salida del producto por su **costo**: cargo a Costo de ventas y abono a Inventarios.', 'Record the product leaving at its **cost**: debit Cost of goods sold and credit Inventory.'),
              t('Resta costo de ventas a ventas para ver la utilidad bruta.', 'Subtract cost of goods sold from sales to see gross profit.'),
            ],
            example: t(
              'La orden de $25,500 se vende a crédito en $35,000. Asiento 1: Clientes $35,000 / Ventas $35,000. Asiento 2: Costo de ventas $25,500 / Inventarios $25,500. Utilidad bruta = 35,000 − 25,500 = **$9,500**.',
              'The $25,500 job is sold on credit for $35,000. Entry 1: Accounts receivable $35,000 / Sales $35,000. Entry 2: Cost of goods sold $25,500 / Inventory $25,500. Gross profit = 35,000 − 25,500 = **$9,500**.',
            ),
            mistake: t('Sacar el inventario al precio de venta. El inventario siempre sale a su costo; el precio solo va en Ventas y Clientes.', 'Removing inventory at the selling price. Inventory always leaves at cost; the price only goes to Sales and Accounts receivable.'),
          },
        ],
      },
      {
        heading: t('¿Y las paletas a medias?', 'What about half-made ice pops?'),
        body: [
          t(
            'Se usa en producción continua de artículos homogéneos (cemento, refrescos, químicos). Los costos se acumulan por **departamento o proceso** y se dividen entre las unidades producidas en el periodo.',
            'It is used in continuous production of homogeneous goods (cement, soft drinks, chemicals). Costs accumulate by **department or process** and are divided by the units produced in the period.',
          ),
          t(
            'Como al cierre hay unidades a medio hacer (**inventario en proceso**), se expresan en **unidades equivalentes (UE)**: 1,000 unidades al 40 % de conversión equivalen a 400 unidades terminadas. Idea sencilla: dos vasos llenos a la mitad equivalen a un vaso lleno. Con el método de **promedio ponderado**: UE = unidades terminadas + unidades en proceso final × % de avance.',
            'Because some units are half-made at period end (**work in process**, WIP), they are expressed in **equivalent units (EU)**: 1,000 units 40 % converted equal 400 finished units. Simple idea: two half-full glasses equal one full glass. Under the **weighted-average** method: EU = units completed + ending WIP units × % complete.',
          ),
          t(
            'Normalmente se calculan UE separadas para **materiales** y para **conversión** (MOD + CIF), porque avanzan a ritmos distintos: el material suele ponerse completo al inicio, mientras que el trabajo se va agregando poco a poco.',
            'EU are usually computed separately for **materials** and for **conversion** (DL + MOH) because they progress at different rates: material is often added in full at the start, while work is added little by little.',
          ),
        ],
        formulas: [
          {
            name: t('Unidades equivalentes (promedio ponderado)', 'Equivalent units (weighted-average)'),
            expression: 'UE = Unidades terminadas + Unidades en proceso final × % de avance',
            variables: [
              { symbol: 'UE', meaning: t('Unidades equivalentes: cuántas piezas completas "valen" todas las piezas trabajadas.', 'Equivalent units: how many complete pieces all the worked pieces are "worth".') },
              { symbol: 'Unidades terminadas', meaning: t('Piezas acabadas y transferidas al siguiente proceso o almacén.', 'Pieces finished and transferred to the next process or warehouse.') },
              { symbol: 'Unidades en proceso final', meaning: t('Piezas a medio hacer al cierre del periodo.', 'Half-made pieces at period end.') },
              { symbol: '% de avance', meaning: t('Qué tan avanzadas están en ese elemento (materiales o conversión), en decimal: 40 % = 0.40.', 'How complete they are for that element (materials or conversion), as a decimal: 40 % = 0.40.') },
            ],
            steps: [
              t('Haz un cálculo para materiales y otro para conversión, cada uno con su propio % de avance.', 'Do one calculation for materials and another for conversion, each with its own % complete.'),
              t('Multiplica las unidades en proceso final por el % de avance.', 'Multiply ending WIP units by the % complete.'),
              t('Súmale las unidades terminadas (cuentan al 100 %).', 'Add the units completed (they count at 100 %).'),
            ],
            example: t(
              'Se terminan 6,000 unidades y quedan 1,500 en proceso con 100 % de materiales y 60 % de conversión. UE materiales = 6,000 + 1,500 × 1.00 = **7,500**. UE conversión = 6,000 + 1,500 × 0.60 = 6,000 + 900 = **6,900**.',
              '6,000 units are completed and 1,500 remain in process, 100 % complete for materials and 60 % for conversion. EU materials = 6,000 + 1,500 × 1.00 = **7,500**. EU conversion = 6,000 + 1,500 × 0.60 = 6,000 + 900 = **6,900**.',
            ),
            mistake: t('Usar las mismas UE para materiales y conversión. Si el % de avance es distinto, las UE también.', 'Using the same EU for materials and conversion. If the % complete differs, so do the EU.'),
          },
          {
            name: t('Costo por UE, costo transferido e inventario final', 'Cost per EU, cost transferred out and ending WIP'),
            expression: 'Costo por UE = Costos totales del elemento ÷ UE del elemento;  Costo transferido = Unidades terminadas × (Costo UE materiales + Costo UE conversión);  Inventario final = UE en proceso de materiales × Costo UE materiales + UE en proceso de conversión × Costo UE conversión',
            variables: [
              { symbol: 'Costos totales del elemento', meaning: t('Pesos de materiales (o de conversión) a repartir en el periodo, incluido el inventario inicial.', 'Pesos of materials (or conversion) to spread in the period, including beginning inventory.') },
              { symbol: 'UE del elemento', meaning: t('Las UE calculadas para ese mismo elemento.', 'The EU computed for that same element.') },
              { symbol: 'Costo transferido', meaning: t('Pesos que salen con las piezas terminadas.', 'Pesos that leave with the finished pieces.') },
              { symbol: 'UE en proceso', meaning: t('Unidades en proceso × su % de avance, para cada elemento.', 'WIP units × their % complete, for each element.') },
              { symbol: 'Inventario final', meaning: t('Pesos que se quedan en las piezas a medio hacer.', 'Pesos that stay in the half-made pieces.') },
            ],
            steps: [
              t('Divide el costo de materiales entre las UE de materiales, y el de conversión entre las UE de conversión.', 'Divide materials cost by materials EU, and conversion cost by conversion EU.'),
              t('Suma los dos costos por UE y multiplícalo por las unidades terminadas: costo transferido.', 'Add the two costs per EU and multiply by the units completed: cost transferred out.'),
              t('Para el inventario final, multiplica las UE en proceso de cada elemento por su costo por UE y suma.', 'For ending WIP, multiply each element\'s WIP EU by its cost per EU and add.'),
              t('Comprueba: transferido + inventario final = costos totales.', 'Check: transferred + ending WIP = total costs.'),
            ],
            example: t(
              'Con las UE anteriores, materiales $150,000 y conversión $103,500. Costo UE: 150,000 ÷ 7,500 = $20; 103,500 ÷ 6,900 = $15. Transferido = 6,000 × (20 + 15) = 6,000 × 35 = **$210,000**. Inventario final = 1,500 × 20 + 900 × 15 = 30,000 + 13,500 = **$43,500**. Comprobación: 210,000 + 43,500 = $253,500 = 150,000 + 103,500.',
              'With the EU above, materials $150,000 and conversion $103,500. Cost per EU: 150,000 ÷ 7,500 = $20; 103,500 ÷ 6,900 = $15. Transferred = 6,000 × (20 + 15) = 6,000 × 35 = **$210,000**. Ending WIP = 1,500 × 20 + 900 × 15 = 30,000 + 13,500 = **$43,500**. Check: 210,000 + 43,500 = $253,500 = 150,000 + 103,500.',
            ),
            mistake: t('Valuar el inventario final con unidades físicas en conversión (1,500 × 15) en vez de con sus UE (900 × 15).', 'Valuing ending WIP with physical units for conversion (1,500 × 15) instead of its EU (900 × 15).'),
          },
        ],
      },
      {
        heading: t('¿Quién paga los gastos compartidos?', 'Who pays the shared costs?'),
        body: [
          t(
            'El costeo tradicional asigna todos los CIF con una sola base (horas de MOD u horas máquina). Cuando hay productos muy distintos en volumen y complejidad, esto **subcostea** los productos de bajo volumen y complejos y **sobrecostea** los de alto volumen.',
            'Traditional costing assigns all overhead with a single base (DL hours or machine hours). When products differ greatly in volume and complexity, this **under-costs** low-volume complex products and **over-costs** high-volume ones.',
          ),
          t(
            'ABC agrupa los CIF en **actividades** (preparación de máquinas, inspección, maquinado) y cada una tiene un **inductor de costo**: lo que hace que esa actividad cueste más (número de preparaciones, inspecciones, horas máquina). Se calcula una tasa por actividad y cada producto recibe costo según cuánto consume de cada inductor.',
            'ABC groups overhead into **activities** (machine setups, inspection, machining), each with a **cost driver**: what makes that activity cost more (number of setups, inspections, machine hours). A rate is computed for each activity and each product receives cost according to how much of each driver it consumes.',
          ),
          t(
            'Analogía: si varios amigos comparten una cuenta en un restaurante, dividirla en partes iguales (tasa única) es injusto para quien solo pidió un refresco. ABC es como pagar según lo que cada quien consumió.',
            'Analogy: if several friends share a restaurant bill, splitting it equally (single rate) is unfair to whoever only ordered a soda. ABC is like paying according to what each person consumed.',
          ),
        ],
        formulas: [
          {
            name: t('CIF asignados con ABC', 'Overhead assigned under ABC'),
            expression: 'Tasa de actividad = Costo de la actividad ÷ Total del inductor;  CIF asignados = Σ (Tasa × Inductor consumido);  CIF por unidad = CIF asignados ÷ Unidades del producto',
            variables: [
              { symbol: 'Costo de la actividad', meaning: t('Pesos de CIF que corresponden a una actividad (por ejemplo, preparación de máquinas).', 'Pesos of overhead belonging to one activity (for example, machine setups).') },
              { symbol: 'Total del inductor', meaning: t('Cuántas veces ocurre el inductor en toda la planta (preparaciones, inspecciones, horas máquina).', 'How many times the driver occurs in the whole plant (setups, inspections, machine hours).') },
              { symbol: 'Inductor consumido', meaning: t('Cuántas de esas preparaciones, inspecciones u horas usó el producto.', 'How many of those setups, inspections or hours the product used.') },
              { symbol: 'Σ', meaning: t('"Suma de": se suma el resultado de todas las actividades.', '"Sum of": add the result for all activities.') },
              { symbol: 'Unidades del producto', meaning: t('Piezas fabricadas de ese producto.', 'Pieces made of that product.') },
            ],
            steps: [
              t('Para cada actividad, divide su costo entre el total de su inductor: tasa por preparación, por inspección, por hora.', 'For each activity, divide its cost by its driver total: rate per setup, per inspection, per hour.'),
              t('Multiplica cada tasa por lo que consumió el producto de ese inductor.', 'Multiply each rate by how much of that driver the product consumed.'),
              t('Suma todos los resultados: CIF asignados al producto.', 'Add all the results: overhead assigned to the product.'),
              t('Divide entre las unidades del producto para obtener el CIF por unidad.', 'Divide by the product\'s units to get overhead per unit.'),
            ],
            example: t(
              'Preparación $60,000 (30 preparaciones), inspección $40,000 (800 inspecciones), maquinado $100,000 (5,000 horas máquina). Tasas: 60,000 ÷ 30 = $2,000; 40,000 ÷ 800 = $50; 100,000 ÷ 5,000 = $20. El producto A (400 unidades) usa 6 preparaciones, 100 inspecciones y 1,000 horas: 6 × 2,000 + 100 × 50 + 1,000 × 20 = 12,000 + 5,000 + 20,000 = **$37,000**; por unidad 37,000 ÷ 400 = **$92.50**.',
              'Setups $60,000 (30 setups), inspection $40,000 (800 inspections), machining $100,000 (5,000 machine hours). Rates: 60,000 ÷ 30 = $2,000; 40,000 ÷ 800 = $50; 100,000 ÷ 5,000 = $20. Product A (400 units) uses 6 setups, 100 inspections and 1,000 hours: 6 × 2,000 + 100 × 50 + 1,000 × 20 = 12,000 + 5,000 + 20,000 = **$37,000**; per unit 37,000 ÷ 400 = **$92.50**.',
            ),
            mistake: t('Dividir el costo de una actividad entre el inductor de otra (por ejemplo, preparación entre horas máquina). Cada actividad va con su propio inductor.', 'Dividing one activity\'s cost by another\'s driver (for example, setups by machine hours). Each activity goes with its own driver.'),
          },
          {
            name: t('CIF con tasa única (costeo tradicional)', 'Overhead with a single rate (traditional costing)'),
            expression: 'Tasa única = CIF totales ÷ Total de la base;  CIF del producto = Tasa única × Base que usó el producto;  CIF por unidad = CIF del producto ÷ Unidades',
            variables: [
              { symbol: 'CIF totales', meaning: t('Todos los costos indirectos de la planta sumados, en pesos.', 'All plant overhead added together, in pesos.') },
              { symbol: 'Total de la base', meaning: t('Total de la única base usada (por ejemplo, horas máquina de toda la planta).', 'Total of the single base used (for example, machine hours for the whole plant).') },
              { symbol: 'Base que usó el producto', meaning: t('Horas (u otra base) que consumió ese producto.', 'Hours (or other base) that product consumed.') },
              { symbol: 'Unidades', meaning: t('Piezas fabricadas de ese producto.', 'Pieces made of that product.') },
            ],
            steps: [
              t('Suma los CIF de todas las actividades.', 'Add the overhead of all activities.'),
              t('Divide entre el total de la base: tasa única por hora.', 'Divide by the base total: single rate per hour.'),
              t('Multiplica por las horas del producto y divide entre sus unidades.', 'Multiply by the product\'s hours and divide by its units.'),
            ],
            example: t(
              'Con los datos anteriores: CIF totales = 60,000 + 40,000 + 100,000 = $200,000; tasa = 200,000 ÷ 5,000 = $40 por hora. Producto A: 1,000 × 40 = $40,000; por unidad 40,000 ÷ 400 = **$100**.',
              'With the data above: total overhead = 60,000 + 40,000 + 100,000 = $200,000; rate = 200,000 ÷ 5,000 = $40 per hour. Product A: 1,000 × 40 = $40,000; per unit 40,000 ÷ 400 = **$100**.',
            ),
            interpret: t('Compara con ABC: si la tasa única da menos que ABC, el producto está **subcosteado** (parece más barato de lo que es); si da más, está **sobrecosteado**.', 'Compare with ABC: if the single rate gives less than ABC, the product is **under-costed** (looks cheaper than it is); if more, it is **over-costed**.'),
          },
        ],
      },
      {
        heading: t('¿Qué sistema me conviene?', 'Which system suits me?'),
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
    exerciseIds: ['N3-007', 'N3-008', 'N3-009', 'N3-010', 'N3-011'],
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
    minutes: 14,
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
        heading: t('¿Cuánto te deja cada venta?', 'How much does each sale leave you?'),
        body: [
          t(
            'El **margen de contribución (MC)** es lo que queda del precio después de cubrir los costos variables. Ese margen "contribuye" primero a cubrir los costos fijos y, una vez cubiertos, se convierte en utilidad.',
            'The **contribution margin (CM)** is what is left of the price after covering variable costs. That margin first "contributes" to covering fixed costs and, once they are covered, becomes profit.',
          ),
          t(
            'La **razón de MC** expresa el margen como porcentaje del precio: indica cuántos centavos de cada peso vendido quedan para fijos y utilidad. Es útil cuando se trabaja en pesos de venta en lugar de unidades.',
            'The **CM ratio** expresses the margin as a percentage of price: it shows how many cents of each peso of sales remain for fixed costs and profit. It is useful when working in sales pesos rather than units.',
          ),
          t(
            'Ejemplo: si vendes un termo en $250 y los materiales te cuestan $150, cada termo te deja $100 para pagar la renta, los sueldos fijos y, después, para ganar.',
            'Example: if you sell a thermos for $250 and the materials cost you $150, each thermos leaves you $100 to pay rent and fixed salaries and, after that, to earn a profit.',
          ),
        ],
        formulas: [
          {
            name: t('Margen de contribución unitario y razón de MC', 'Unit contribution margin and CM ratio'),
            expression: 'MCu = P − CVu;  Razón MC = MCu ÷ P',
            variables: [
              { symbol: 'MCu', meaning: t('Margen de contribución por unidad, en pesos.', 'Contribution margin per unit, in pesos.') },
              { symbol: 'P', meaning: t('Precio de venta de una unidad, en pesos.', 'Selling price of one unit, in pesos.') },
              { symbol: 'CVu', meaning: t('Costo variable de una unidad (materiales, comisión), en pesos.', 'Variable cost of one unit (materials, commission), in pesos.') },
              { symbol: 'Razón MC', meaning: t('Parte de cada peso vendido que queda para fijos y utilidad, en decimal o %.', 'Share of each sales peso left for fixed costs and profit, as a decimal or %.') },
            ],
            steps: [
              t('Resta al precio el costo variable unitario: MCu.', 'Subtract unit variable cost from price: unit CM.'),
              t('Divide el MCu entre el precio: razón MC en decimal.', 'Divide unit CM by price: CM ratio as a decimal.'),
              t('Multiplica por 100 si la quieres en %.', 'Multiply by 100 if you want it as a %.'),
            ],
            example: t(
              'Una lámpara se vende en $120 y su costo variable es $75. MCu = 120 − 75 = **$45**. Razón MC = 45 ÷ 120 = 0.375 = **37.5 %**: de cada peso vendido quedan 37.5 centavos.',
              'A lamp sells for $120 and its variable cost is $75. Unit CM = 120 − 75 = **$45**. CM ratio = 45 ÷ 120 = 0.375 = **37.5 %**: 37.5 cents of each sales peso remain.',
            ),
            mistake: t('Restar también el costo fijo por unidad. El MC solo resta costos **variables**; los fijos se cubren después, en total.', 'Also subtracting unit fixed cost. CM only subtracts **variable** costs; fixed costs are covered later, in total.'),
          },
          {
            name: t('Utilidad de operación', 'Operating income'),
            expression: 'Utilidad de operación = MCu × Q − CF',
            variables: [
              { symbol: 'MCu', meaning: t('Margen de contribución por unidad, en pesos.', 'Contribution margin per unit, in pesos.') },
              { symbol: 'Q', meaning: t('Unidades vendidas.', 'Units sold.') },
              { symbol: 'CF', meaning: t('Costos fijos totales del periodo, en pesos.', 'Total fixed costs for the period, in pesos.') },
            ],
            steps: [
              t('Multiplica el MCu por las unidades vendidas: MC total.', 'Multiply unit CM by units sold: total CM.'),
              t('Réstale los costos fijos totales.', 'Subtract total fixed costs.'),
            ],
            example: t(
              'Con MCu de $45, 5,000 lámparas y CF de $180,000: MC total = 45 × 5,000 = $225,000; utilidad = 225,000 − 180,000 = **$45,000**.',
              'With unit CM of $45, 5,000 lamps and FC of $180,000: total CM = 45 × 5,000 = $225,000; income = 225,000 − 180,000 = **$45,000**.',
            ),
            interpret: t('Positiva = ganancia; cero = punto de equilibrio; negativa = pérdida.', 'Positive = profit; zero = break-even; negative = loss.'),
          },
        ],
      },
      {
        heading: t('¿Cuándo dejas de perder?', 'When do you stop losing?'),
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
        formulas: [
          {
            name: t('Punto de equilibrio en unidades', 'Break-even point in units'),
            expression: 'PE (unidades) = CF ÷ (P − CVu)',
            variables: [
              { symbol: 'PE (unidades)', meaning: t('Piezas que debes vender para no ganar ni perder.', 'Pieces you must sell to neither gain nor lose.') },
              { symbol: 'CF', meaning: t('Costos fijos totales del periodo, en pesos.', 'Total fixed costs for the period, in pesos.') },
              { symbol: 'P − CVu', meaning: t('Margen de contribución unitario (MCu): precio menos costo variable por pieza, en pesos.', 'Unit contribution margin: price minus variable cost per piece, in pesos.') },
            ],
            steps: [
              t('Calcula el MCu: P − CVu.', 'Compute unit CM: P − VCu.'),
              t('Divide los costos fijos entre el MCu.', 'Divide fixed costs by unit CM.'),
              t('Si sale con decimales, redondea hacia arriba (no se venden fracciones de pieza).', 'If it has decimals, round up (you cannot sell a fraction of a piece).'),
            ],
            example: t(
              'Lámpara: P $120, CVu $75, CF $180,000. MCu = 120 − 75 = $45. PE = 180,000 ÷ 45 = **4,000 lámparas**. Comprobación: 4,000 × 45 = $180,000 = CF, utilidad cero.',
              'Lamp: P $120, VCu $75, FC $180,000. Unit CM = 120 − 75 = $45. BEP = 180,000 ÷ 45 = **4,000 lamps**. Check: 4,000 × 45 = $180,000 = FC, zero profit.',
            ),
            interpret: t('Cada pieza vendida arriba del PE deja utilidad igual al MCu.', 'Each piece sold above the BEP adds profit equal to unit CM.'),
            mistake: t('Dividir entre el precio (180,000 ÷ 120) en vez de entre el margen: olvida que cada venta también genera costo variable.', 'Dividing by price (180,000 ÷ 120) instead of the margin: it forgets that each sale also incurs variable cost.'),
          },
          {
            name: t('Punto de equilibrio en pesos', 'Break-even point in pesos'),
            expression: 'PE ($) = CF ÷ Razón MC   (o también PE ($) = PE unidades × P)',
            variables: [
              { symbol: 'PE ($)', meaning: t('Ventas en pesos necesarias para no ganar ni perder.', 'Sales in pesos needed to neither gain nor lose.') },
              { symbol: 'CF', meaning: t('Costos fijos totales, en pesos.', 'Total fixed costs, in pesos.') },
              { symbol: 'Razón MC', meaning: t('MCu ÷ P, en decimal (37.5 % = 0.375).', 'Unit CM ÷ P, as a decimal (37.5 % = 0.375).') },
              { symbol: 'P', meaning: t('Precio de venta por unidad, en pesos.', 'Selling price per unit, in pesos.') },
            ],
            steps: [
              t('Calcula la razón MC y conviértela a decimal.', 'Compute the CM ratio and convert it to a decimal.'),
              t('Divide los costos fijos entre esa razón.', 'Divide fixed costs by that ratio.'),
              t('Comprueba multiplicando el PE en unidades por el precio.', 'Check by multiplying the BEP in units by the price.'),
            ],
            example: t(
              'Razón MC = 45 ÷ 120 = 0.375. PE ($) = 180,000 ÷ 0.375 = **$480,000**. Comprobación: 4,000 × 120 = $480,000.',
              'CM ratio = 45 ÷ 120 = 0.375. BEP ($) = 180,000 ÷ 0.375 = **$480,000**. Check: 4,000 × 120 = $480,000.',
            ),
            mistake: t('Dividir entre la razón de costo variable (75 ÷ 120 = 0.625) en lugar de la razón MC.', 'Dividing by the variable cost ratio (75 ÷ 120 = 0.625) instead of the CM ratio.'),
          },
        ],
      },
      {
        heading: t('¿Cuánto vender para tu meta?', 'How much to sell for your goal?'),
        body: [
          t(
            'Para lograr una utilidad deseada, se trata como si fuera un costo fijo adicional que el margen debe cubrir. Si la meta es **después de impuestos**, primero se convierte a utilidad antes de impuestos dividiendo entre (1 − t).',
            'To reach a desired profit, treat it as an additional fixed cost the margin must cover. If the goal is **after tax**, first convert it to before-tax profit by dividing by (1 − t).',
          ),
          t(
            '¿Por qué dividir? Porque el ISR se lleva una parte de lo que ganas. Si quieres quedarte con $70 y el impuesto es 30 %, necesitas ganar $100 antes de impuestos: 100 − 30 = 70.',
            'Why divide? Because income tax takes part of what you earn. If you want to keep $70 and the tax is 30 %, you need to earn $100 before tax: 100 − 30 = 70.',
          ),
        ],
        formulas: [
          {
            name: t('Utilidad antes de impuestos a partir de una meta después de impuestos', 'Before-tax profit from an after-tax target'),
            expression: 'UAI = UDI ÷ (1 − t)',
            variables: [
              { symbol: 'UAI', meaning: t('Utilidad antes de impuestos, en pesos.', 'Profit before tax, in pesos.') },
              { symbol: 'UDI', meaning: t('Utilidad después de impuestos que quieres quedarte, en pesos.', 'After-tax profit you want to keep, in pesos.') },
              { symbol: 't', meaning: t('Tasa de impuesto en decimal (30 % = 0.30, la tasa usada en esta lección).', 'Tax rate as a decimal (30 % = 0.30, the rate used in this lesson).') },
            ],
            steps: [
              t('Convierte la tasa a decimal: 30 % = 0.30.', 'Convert the rate to a decimal: 30 % = 0.30.'),
              t('Calcula 1 − t: 1 − 0.30 = 0.70.', 'Compute 1 − t: 1 − 0.30 = 0.70.'),
              t('Divide la UDI entre ese resultado.', 'Divide the after-tax profit by that result.'),
            ],
            example: t(
              'Meta: quedarte con $63,000 después de un ISR de 30 %. UAI = 63,000 ÷ 0.70 = **$90,000**. Comprobación: ISR 90,000 × 0.30 = 27,000; 90,000 − 27,000 = $63,000.',
              'Goal: keep $63,000 after 30 % income tax. Before-tax profit = 63,000 ÷ 0.70 = **$90,000**. Check: tax 90,000 × 0.30 = 27,000; 90,000 − 27,000 = $63,000.',
            ),
            mistake: t('Multiplicar por 1.30 en vez de dividir entre 0.70 (63,000 × 1.30 = $81,900, que se queda corto).', 'Multiplying by 1.30 instead of dividing by 0.70 (63,000 × 1.30 = $81,900, which falls short).'),
          },
          {
            name: t('Unidades para una utilidad objetivo', 'Units for a target profit'),
            expression: 'Q objetivo = (CF + UAI) ÷ MCu',
            variables: [
              { symbol: 'Q objetivo', meaning: t('Piezas que debes vender para lograr la meta.', 'Pieces you must sell to reach the goal.') },
              { symbol: 'CF', meaning: t('Costos fijos totales, en pesos.', 'Total fixed costs, in pesos.') },
              { symbol: 'UAI', meaning: t('Utilidad deseada **antes** de impuestos, en pesos.', 'Desired profit **before** tax, in pesos.') },
              { symbol: 'MCu', meaning: t('Margen de contribución por unidad, en pesos.', 'Contribution margin per unit, in pesos.') },
            ],
            steps: [
              t('Si la meta es después de impuestos, conviértela primero a UAI.', 'If the goal is after tax, first convert it to before-tax profit.'),
              t('Suma CF + UAI: es todo lo que el margen debe cubrir.', 'Add FC + before-tax profit: that is everything the margin must cover.'),
              t('Divide entre el MCu.', 'Divide by unit CM.'),
            ],
            example: t(
              'Lámpara: CF $180,000, MCu $45, meta UAI $90,000. Q = (180,000 + 90,000) ÷ 45 = 270,000 ÷ 45 = **6,000 lámparas**.',
              'Lamp: FC $180,000, unit CM $45, before-tax goal $90,000. Q = (180,000 + 90,000) ÷ 45 = 270,000 ÷ 45 = **6,000 lamps**.',
            ),
            mistake: t('Sumar la utilidad después de impuestos directamente a los fijos, sin dividir antes entre (1 − t).', 'Adding the after-tax profit directly to fixed costs without first dividing by (1 − t).'),
          },
        ],
      },
      {
        heading: t('¿Qué tanto aguantas una caída?', 'How big a drop can you take?'),
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
        formulas: [
          {
            name: t('Margen de seguridad', 'Margin of safety'),
            expression: 'MS ($) = Ventas presupuestadas − Ventas en PE;  MS % = MS ($) ÷ Ventas presupuestadas × 100',
            variables: [
              { symbol: 'MS ($)', meaning: t('Pesos de venta que puedes perder antes de caer en pérdida.', 'Sales pesos you can lose before falling into a loss.') },
              { symbol: 'Ventas presupuestadas', meaning: t('Unidades que planeas vender × precio, en pesos.', 'Units you plan to sell × price, in pesos.') },
              { symbol: 'Ventas en PE', meaning: t('Punto de equilibrio en pesos.', 'Break-even point in pesos.') },
              { symbol: 'MS %', meaning: t('El mismo colchón expresado como porcentaje de las ventas planeadas.', 'The same cushion expressed as a percentage of planned sales.') },
            ],
            steps: [
              t('Calcula las ventas presupuestadas en pesos: unidades × precio.', 'Compute budgeted sales in pesos: units × price.'),
              t('Calcula el PE en pesos.', 'Compute the BEP in pesos.'),
              t('Resta: presupuestadas − PE = MS en pesos.', 'Subtract: budgeted − BEP = MoS in pesos.'),
              t('Divide el MS entre las ventas presupuestadas y multiplica por 100.', 'Divide MoS by budgeted sales and multiply by 100.'),
            ],
            example: t(
              'Lámpara: se planean 6,000 piezas a $120 = $720,000; PE = $480,000. MS = 720,000 − 480,000 = **$240,000**. MS % = 240,000 ÷ 720,000 × 100 = **33.33 %**.',
              'Lamp: 6,000 pieces planned at $120 = $720,000; BEP = $480,000. MoS = 720,000 − 480,000 = **$240,000**. MoS % = 240,000 ÷ 720,000 × 100 = **33.33 %**.',
            ),
            interpret: t('Entre más alto, más "colchón": las ventas pueden caer ese porcentaje antes de perder dinero.', 'The higher it is, the more "cushion": sales can fall that percentage before you lose money.'),
          },
          {
            name: t('Grado de apalancamiento operativo (GAO)', 'Degree of operating leverage (DOL)'),
            expression: 'GAO = MC total ÷ Utilidad de operación',
            variables: [
              { symbol: 'GAO', meaning: t('Cuántas veces se mueve la utilidad (en %) por cada 1 % que se mueven las ventas.', 'How many times profit moves (in %) for each 1 % that sales move.') },
              { symbol: 'MC total', meaning: t('MCu × unidades vendidas, en pesos.', 'Unit CM × units sold, in pesos.') },
              { symbol: 'Utilidad de operación', meaning: t('MC total − CF, en pesos.', 'Total CM − FC, in pesos.') },
            ],
            steps: [
              t('Calcula el MC total: MCu × unidades.', 'Compute total CM: unit CM × units.'),
              t('Réstale los costos fijos: utilidad de operación.', 'Subtract fixed costs: operating income.'),
              t('Divide MC total entre utilidad de operación.', 'Divide total CM by operating income.'),
            ],
            example: t(
              'Lámpara con 6,000 piezas: MC total = 6,000 × 45 = $270,000; utilidad = 270,000 − 180,000 = $90,000. GAO = 270,000 ÷ 90,000 = **3 veces** (igual a 1 ÷ 0.3333).',
              'Lamp with 6,000 pieces: total CM = 6,000 × 45 = $270,000; income = 270,000 − 180,000 = $90,000. DOL = 270,000 ÷ 90,000 = **3 times** (equal to 1 ÷ 0.3333).',
            ),
            interpret: t('Con GAO de 3, si las ventas suben 10 %, la utilidad sube 30 %; si bajan 10 %, la utilidad baja 30 %. Más alto = más riesgo.', 'With a DOL of 3, if sales rise 10 %, profit rises 30 %; if they fall 10 %, profit falls 30 %. Higher = more risk.'),
            mistake: t('Dividir entre ventas totales en vez de entre la utilidad de operación.', 'Dividing by total sales instead of by operating income.'),
          },
        ],
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
    exerciseIds: ['N3-014', 'N3-016', 'N3-017', 'N3-018', 'N3-019'],
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
    minutes: 14,
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
        heading: t('¿Cuánto debiste gastar?', 'How much should you have spent?'),
        body: [
          t(
            'El **presupuesto maestro** integra los planes de un periodo. Parte del **presupuesto de ventas**, porque el volumen esperado determina producción, compras de materiales, mano de obra, CIF, gastos de operación, flujo de efectivo y estados financieros proyectados.',
            'The **master budget** integrates the plans for a period. It starts with the **sales budget**, because expected volume drives production, materials purchases, labour, overhead, operating expenses, the cash budget and projected financial statements.',
          ),
          t(
            'El **presupuesto estático** se prepara para un solo nivel de actividad. El **presupuesto flexible** recalcula los costos al nivel de actividad **real**: costos variables = costo unitario × volumen real, más costos fijos. Comparar costos reales contra el estático mezcla el efecto de volumen con el de eficiencia; contra el flexible se aísla el desempeño de control de costos.',
            'A **static budget** is prepared for a single activity level. A **flexible budget** restates costs at the **actual** activity level: variable costs = unit cost × actual volume, plus fixed costs. Comparing actual costs with the static budget mixes the volume effect with efficiency; comparing with the flexible budget isolates cost-control performance.',
          ),
          t(
            'Ejemplo cotidiano: si planeaste gastar $2,000 en comida para una fiesta de 20 personas y llegaron 30, es normal gastar más. El presupuesto flexible te dice cuánto **debiste** gastar para 30 personas, y solo lo que pase de eso es un sobregasto real.',
            'Everyday example: if you planned to spend $2,000 on food for a 20-person party and 30 came, spending more is normal. The flexible budget tells you how much you **should** have spent for 30 people, and only what goes beyond that is real overspending.',
          ),
        ],
        formulas: [
          {
            name: t('Presupuesto estático, flexible y su variación', 'Static budget, flexible budget and its variance'),
            expression: 'Presupuesto estático = CVu × Volumen presupuestado + CF;  Presupuesto flexible = CVu × Volumen real + CF;  Variación = Costo real − Presupuesto flexible',
            variables: [
              { symbol: 'CVu', meaning: t('Costo variable estándar por unidad, en pesos.', 'Standard variable cost per unit, in pesos.') },
              { symbol: 'Volumen presupuestado', meaning: t('Unidades que se planeaba producir.', 'Units planned to be produced.') },
              { symbol: 'Volumen real', meaning: t('Unidades que realmente se produjeron.', 'Units actually produced.') },
              { symbol: 'CF', meaning: t('Costos fijos del periodo, en pesos; son iguales en ambos presupuestos.', 'Fixed costs for the period, in pesos; they are the same in both budgets.') },
              { symbol: 'Costo real', meaning: t('Lo que realmente se gastó, en pesos.', 'What was actually spent, in pesos.') },
            ],
            steps: [
              t('Estático: multiplica CVu por el volumen **planeado** y suma CF.', 'Static: multiply VCu by the **planned** volume and add FC.'),
              t('Flexible: multiplica CVu por el volumen **real** y suma CF.', 'Flexible: multiply VCu by the **actual** volume and add FC.'),
              t('Resta: costo real − presupuesto flexible.', 'Subtract: actual cost − flexible budget.'),
            ],
            example: t(
              'CVu $20, CF $50,000; se planearon 4,000 unidades y se hicieron 4,500 con costo real de $146,000. Estático = 20 × 4,000 + 50,000 = $130,000. Flexible = 20 × 4,500 + 50,000 = 90,000 + 50,000 = $140,000. Variación = 146,000 − 140,000 = **$6,000 desfavorable**.',
              'VCu $20, FC $50,000; 4,000 units were planned and 4,500 made at an actual cost of $146,000. Static = 20 × 4,000 + 50,000 = $130,000. Flexible = 20 × 4,500 + 50,000 = 90,000 + 50,000 = $140,000. Variance = 146,000 − 140,000 = **$6,000 unfavourable**.',
            ),
            interpret: t('Positiva (real mayor al flexible) = desfavorable, se gastó de más. Negativa = favorable, se ahorró.', 'Positive (actual above flexible) = unfavourable, overspending. Negative = favourable, savings.'),
            mistake: t('Multiplicar también los costos fijos por el volumen real. Los fijos no cambian con el volumen.', 'Also multiplying fixed costs by actual volume. Fixed costs do not change with volume.'),
          },
        ],
      },
      {
        heading: t('¿Pagaste más o usaste más?', 'Did you pay more or use more?'),
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
        formulas: [
          {
            name: t('Variaciones de precio, cantidad y total de materiales', 'Materials price, quantity and total variances'),
            expression: 'CE permitida = Estándar por unidad × Producción real;  Var. precio = (PR − PE) × CR;  Var. cantidad = (CR − CE permitida) × PE;  Var. total = Var. precio + Var. cantidad',
            variables: [
              { symbol: 'PR', meaning: t('Precio real pagado por cada kg, metro o pieza de material, en pesos.', 'Actual price paid per kg, metre or piece of material, in pesos.') },
              { symbol: 'PE', meaning: t('Precio estándar (el que se esperaba pagar), en pesos.', 'Standard price (the one expected), in pesos.') },
              { symbol: 'CR', meaning: t('Cantidad real de material usada (kg, metros).', 'Actual quantity of material used (kg, metres).') },
              { symbol: 'CE permitida', meaning: t('Cantidad que se **debió** usar para la producción real.', 'Quantity that **should** have been used for actual output.') },
              { symbol: 'Estándar por unidad', meaning: t('Material que debería llevar cada pieza (por ejemplo, 2 kg).', 'Material each piece should take (for example, 2 kg).') },
              { symbol: 'Producción real', meaning: t('Unidades realmente fabricadas.', 'Units actually made.') },
            ],
            steps: [
              t('Calcula la CE permitida: estándar por unidad × producción real.', 'Compute SQ allowed: standard per unit × actual output.'),
              t('Precio: resta PR − PE y multiplica por la cantidad **real**.', 'Price: subtract AP − SP and multiply by the **actual** quantity.'),
              t('Cantidad: resta CR − CE permitida y multiplica por el precio **estándar**.', 'Quantity: subtract AQ − SQ allowed and multiply by the **standard** price.'),
              t('Suma las dos: variación total. Comprueba con CR × PR − CE × PE.', 'Add the two: total variance. Check with AQ × AP − SQ × SP.'),
            ],
            example: t(
              'Estándar: 4 m de tela a $25 por camisa. Se hicieron 500 camisas usando 2,100 m a $24. CE = 4 × 500 = 2,000 m. Precio = (24 − 25) × 2,100 = **−$2,100 (favorable)**. Cantidad = (2,100 − 2,000) × 25 = **$2,500 (desfavorable)**. Total = −2,100 + 2,500 = **$400 desfavorable**. Comprobación: 2,100 × 24 − 2,000 × 25 = 50,400 − 50,000 = $400.',
              'Standard: 4 m of fabric at $25 per shirt. 500 shirts were made using 2,100 m at $24. SQ = 4 × 500 = 2,000 m. Price = (24 − 25) × 2,100 = **−$2,100 (favourable)**. Quantity = (2,100 − 2,000) × 25 = **$2,500 (unfavourable)**. Total = −2,100 + 2,500 = **$400 unfavourable**. Check: 2,100 × 24 − 2,000 × 25 = 50,400 − 50,000 = $400.',
            ),
            interpret: t('Resultado positivo = desfavorable (se gastó más de lo estándar); negativo = favorable.', 'Positive result = unfavourable (more than standard was spent); negative = favourable.'),
            mistake: t('Cruzar los datos: en precio va la cantidad **real**; en cantidad va el precio **estándar**.', 'Mixing up the data: price uses the **actual** quantity; quantity uses the **standard** price.'),
          },
        ],
        bullets: [
          t('PR = precio real; PE = precio estándar.', 'AP = actual price; SP = standard price.'),
          t(
            'CR = cantidad real usada; CE permitida = estándar por unidad × producción real.',
            'AQ = actual quantity used; SQ allowed = standard per unit × actual output.',
          ),
        ],
      },
      {
        heading: t('¿Lo ya gastado cuenta?', 'Does money already spent count?'),
        body: [
          t(
            'Un costo es **relevante** para una decisión si es **futuro** y **difiere** entre alternativas. Los **costos hundidos** (ya incurridos, como un estudio pagado) nunca son relevantes. Los costos fijos asignados que no desaparecen con la decisión tampoco lo son; sí lo son los costos fijos **evitables**.',
            'A cost is **relevant** to a decision if it is **future** and **differs** between alternatives. **Sunk costs** (already incurred, such as a study already paid) are never relevant. Allocated fixed costs that do not go away with the decision are not relevant either; **avoidable** fixed costs are.',
          ),
          t(
            'El **costo de oportunidad** —el beneficio que se sacrifica al elegir una alternativa, como la renta que podría obtenerse del espacio— sí es relevante aunque no se registre en contabilidad.',
            'The **opportunity cost** —the benefit given up by choosing one alternative, such as rent that could be earned on space— is relevant even though it is not recorded in the books.',
          ),
          t(
            'Ejemplo sencillo: ya pagaste $150 por un boleto de cine y la película es mala. Esos $150 son **hundidos**: se gastaron te quedes o te vayas, así que no deben decidir por ti. Lo que importa es qué ganas con cada opción **de aquí en adelante**.',
            'Simple example: you already paid $150 for a movie ticket and the film is bad. Those $150 are **sunk**: they are spent whether you stay or leave, so they should not decide for you. What matters is what you gain with each option **from now on**.',
          ),
        ],
      },
      {
        heading: t('¿Hacerlo, comprarlo o aceptar el pedido?', 'Make it, buy it or take the order?'),
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
        formulas: [
          {
            name: t('Fabricar o comprar', 'Make or buy'),
            expression: 'Costo relevante de fabricar = Unidades × CV unitario + Fijos evitables + Costo de oportunidad;  Costo de comprar = Unidades × Precio del proveedor;  Ahorro = Opción más cara − Opción más barata',
            variables: [
              { symbol: 'Unidades', meaning: t('Piezas que se necesitan en el periodo.', 'Pieces needed in the period.') },
              { symbol: 'CV unitario', meaning: t('Costos variables por pieza que desaparecen si compras (materia prima, MOD, CIF variables), en pesos.', 'Variable costs per piece that disappear if you buy (materials, DL, variable overhead), in pesos.') },
              { symbol: 'Fijos evitables', meaning: t('Costos fijos que se eliminan si dejas de fabricar (por ejemplo, un supervisor dedicado), en pesos.', 'Fixed costs eliminated if you stop making (for example, a dedicated supervisor), in pesos.') },
              { symbol: 'Costo de oportunidad', meaning: t('Lo que dejarías de ganar por seguir fabricando (por ejemplo, la renta del espacio), en pesos.', 'What you would give up by keeping on making (for example, rent from the space), in pesos.') },
              { symbol: 'Precio del proveedor', meaning: t('Lo que cobra el proveedor por pieza, en pesos.', 'What the supplier charges per piece, in pesos.') },
            ],
            steps: [
              t('Suma los costos variables por pieza y multiplícalos por las unidades.', 'Add the variable costs per piece and multiply by units.'),
              t('Agrega solo los fijos **evitables** y el costo de oportunidad, si existe.', 'Add only the **avoidable** fixed costs and the opportunity cost, if any.'),
              t('Calcula el costo de comprar: unidades × precio del proveedor.', 'Compute the cost to buy: units × supplier price.'),
              t('Elige la opción más barata; la diferencia es el ahorro.', 'Choose the cheaper option; the difference is the saving.'),
            ],
            example: t(
              'Se necesitan 5,000 piezas. CV unitario $30, fijos evitables $20,000 y el espacio podría rentarse en $10,000. Fabricar = 5,000 × 30 + 20,000 + 10,000 = 150,000 + 30,000 = $180,000. Comprar a $38 = 5,000 × 38 = $190,000. Conviene **fabricar**; ahorro = 190,000 − 180,000 = **$10,000**.',
              '5,000 pieces are needed. Unit VC $30, avoidable fixed costs $20,000 and the space could be rented for $10,000. Make = 5,000 × 30 + 20,000 + 10,000 = 150,000 + 30,000 = $180,000. Buy at $38 = 5,000 × 38 = $190,000. **Make** is better; saving = 190,000 − 180,000 = **$10,000**.',
            ),
            mistake: t('Usar el costo total por pieza (con fijos asignados que se pagan de todos modos) y compararlo con el precio del proveedor.', 'Using full cost per piece (with allocated fixed costs paid anyway) and comparing it with the supplier price.'),
          },
          {
            name: t('Utilidad incremental de un pedido especial', 'Incremental profit of a special order'),
            expression: 'Utilidad incremental = Unidades del pedido × (Precio especial − CV que sí se incurre) − Costos específicos del pedido',
            variables: [
              { symbol: 'Unidades del pedido', meaning: t('Piezas que pide el cliente.', 'Pieces the customer orders.') },
              { symbol: 'Precio especial', meaning: t('Precio por pieza que ofrece el cliente, en pesos.', 'Price per piece the customer offers, in pesos.') },
              { symbol: 'CV que sí se incurre', meaning: t('Costos variables por pieza que este pedido sí genera (si no paga comisión, no la incluyas), en pesos.', 'Variable costs per piece this order actually causes (if it pays no commission, leave it out), in pesos.') },
              { symbol: 'Costos específicos del pedido', meaning: t('Costos extra solo para este pedido (empaque especial, flete), en pesos.', 'Extra costs only for this order (special packaging, freight), in pesos.') },
            ],
            steps: [
              t('Verifica que haya capacidad ociosa; si la hay, ignora los costos fijos actuales.', 'Check there is idle capacity; if so, ignore current fixed costs.'),
              t('Resta al precio especial el costo variable que sí se incurre: margen por pieza.', 'Subtract the variable cost actually incurred from the special price: margin per piece.'),
              t('Multiplica por las unidades del pedido y resta los costos específicos.', 'Multiply by the order units and subtract order-specific costs.'),
            ],
            example: t(
              'Un cliente pide 2,000 piezas a $55; el costo variable es $40 y el empaque especial cuesta $6,000. Utilidad = 2,000 × (55 − 40) − 6,000 = 30,000 − 6,000 = **$24,000** → aceptar.',
              'A customer orders 2,000 pieces at $55; variable cost is $40 and special packaging costs $6,000. Profit = 2,000 × (55 − 40) − 6,000 = 30,000 − 6,000 = **$24,000** → accept.',
            ),
            interpret: t('Positiva = aceptar (la utilidad sube); negativa = rechazar. Si no hay capacidad ociosa, resta también el margen de las ventas normales que perderías.', 'Positive = accept (profit rises); negative = reject. With no idle capacity, also subtract the margin on regular sales you would lose.'),
            mistake: t('Restar el costo fijo por unidad: los fijos se pagan aceptes o no, así que no cambian con el pedido.', 'Subtracting unit fixed cost: fixed costs are paid whether you accept or not, so they do not change with the order.'),
          },
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
    exerciseIds: ['N3-020', 'N3-021', 'N3-022', 'N3-026', 'N3-027'],
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
