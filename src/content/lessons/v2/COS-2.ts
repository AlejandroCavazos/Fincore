import type { Exercise, Lesson } from '../../../types'

/**
 * FINCORE — Temario v2.0, área Costos y Contabilidad Administrativa, parte 2 (Intermedio).
 * COS-07 a COS-12: costos fijos y variables, CVU, punto de equilibrio, presupuestos operativos,
 * contabilidad administrativa y control presupuestal.
 */

const t = (es: string, en: string) => ({ es, en })

const NOTE_MANAGERIAL = t(
  "Contenido educativo. La contabilidad administrativa no está obligada a seguir las Normas de Información Financiera (NIF) del CINIF, pero los estados financieros para terceros sí; para efectos fiscales aplican además las leyes tributarias. Las normas cambian: verifica la versión vigente (2026) antes de aplicarlas en un caso real. Todas las cifras de esta lección son hipotéticas.",
  "Educational content. Managerial accounting is not required to follow CINIF's Mexican Financial Reporting Standards (NIF), but financial statements for third parties are; for tax purposes, tax laws also apply. Standards change: verify the current version (2026) before applying them to a real case. All figures in this lesson are hypothetical.",
)

export const lessons: Lesson[] = [
  // ───────────────────────────── COS-07 ─────────────────────────────
  {
    id: 'COS-07',
    level: 3,
    topicIds: ['COS.7'],
    title: t("Costos fijos y variables", "Fixed and variable costs"),
    summary: t(
      "Separar los costos en fijos y variables te permite escribir una ecuación sencilla del costo total y usarla para proyectar cuánto gastarás con distintos volúmenes.",
      "Splitting costs into fixed and variable lets you write a simple total-cost equation and use it to project how much you will spend at different volumes.",
    ),
    minutes: 16,
    objectives: [
      t("Explicar cómo se comportan los costos fijos y variables en total y por unidad dentro del rango relevante.", "Explain how fixed and variable costs behave in total and per unit within the relevant range."),
      t("Separar un costo mixto en su parte fija y su parte variable con el método de punto alto y punto bajo.", "Split a mixed cost into its fixed and variable parts using the high-low method."),
      t("Usar la ecuación del costo total para proyectar costos y calcular el costo unitario a distintos volúmenes.", "Use the total-cost equation to project costs and compute unit cost at different volumes."),
    ],
    theory: [
      {
        heading: t("Fijos y variables: en total y por unidad", "Fixed and variable: in total and per unit"),
        body: [
          t(
            "Un **costo variable** cambia en total en proporción a lo que produces o vendes: si haces el doble de tortillas, gastas el doble de masa. Un **costo fijo** se mantiene igual en total aunque produzcas más o menos: la renta del local es la misma si vendes 100 o 1,000 kilos.",
            "A **variable cost** changes in total in proportion to what you produce or sell: if you make twice the tortillas, you spend twice the dough. A **fixed cost** stays the same in total whether you produce more or less: the shop's rent is the same whether you sell 100 or 1,000 kilos.",
          ),
          t(
            "Lo curioso es que **por unidad** pasa lo contrario. El costo variable por unidad se queda constante (cada kilo lleva la misma masa), mientras que el costo fijo por unidad **baja** cuando produces más, porque la misma renta se reparte entre más kilos.",
            "The curious part is that **per unit** the opposite happens. The variable cost per unit stays constant (each kilo uses the same dough), while the fixed cost per unit **falls** when you produce more, because the same rent is spread over more kilos.",
          ),
          t(
            "Todo esto vale dentro del **rango relevante**: el intervalo de volumen en el que tu capacidad actual alcanza. Si te sales de él (por ejemplo, necesitas un segundo local), los costos fijos cambian.",
            "All this holds within the **relevant range**: the volume interval your current capacity can handle. If you go beyond it (for example, you need a second shop), fixed costs change.",
          ),
          t(
            "Mini ejemplo: una tortillería paga $12,000 de renta al mes. Con 4,000 kilos, la renta por kilo es $3; con 6,000 kilos, baja a $2. La masa cuesta $9 por kilo en ambos casos.",
            "Mini example: a tortilla shop pays $12,000 rent per month. With 4,000 kilos, rent per kilo is $3; with 6,000 kilos, it drops to $2. Dough costs $9 per kilo in both cases.",
          ),
        ],
        bullets: [
          t("Variable en total: sube y baja con el volumen.", "Variable in total: rises and falls with volume."),
          t("Variable por unidad: constante.", "Variable per unit: constant."),
          t("Fijo en total: constante dentro del rango relevante.", "Fixed in total: constant within the relevant range."),
          t("Fijo por unidad: baja cuando el volumen sube.", "Fixed per unit: falls when volume rises."),
        ],
        formulas: [
          {
            name: t("Costo fijo por unidad", "Fixed cost per unit"),
            expression: "CF por unidad = CF ÷ Q",
            variables: [
              { symbol: "CF por unidad", meaning: t("La parte de los costos fijos que le toca a cada unidad, en pesos.", "The share of fixed costs that falls on each unit, in pesos.") },
              { symbol: "CF", meaning: t("Costos fijos totales del periodo, en pesos: lo que pagas igual aunque produzcas más o menos (renta, sueldos fijos).", "Total fixed costs for the period, in pesos: what you pay the same whether you produce more or less (rent, fixed salaries).") },
              { symbol: "Q", meaning: t("Cantidad de unidades producidas o vendidas en el periodo (piezas, kilos, servicios).", "Number of units produced or sold in the period (pieces, kilos, services).") },
            ],
            steps: [
              t("Suma todos los costos fijos del mes (renta, sueldos fijos, etc.).", "Add up all the month's fixed costs (rent, fixed salaries, etc.)."),
              t("Divide ese total entre las unidades que hiciste o vendiste en el mes.", "Divide that total by the units you made or sold in the month."),
            ],
            example: t("Una lavandería paga $18,000 al mes de renta y sueldo fijo. Si lava 1,500 cargas: 18,000 ÷ 1,500 = **$12 por carga**. Si lava 3,000 cargas: 18,000 ÷ 3,000 = **$6 por carga**. El total sigue en $18,000; lo que cambia es cuánto le toca a cada carga.", "A laundromat pays $18,000 a month in rent and fixed salary. If it washes 1,500 loads: 18,000 ÷ 1,500 = **$12 per load**. If it washes 3,000 loads: 18,000 ÷ 3,000 = **$6 per load**. The total stays at $18,000; what changes is how much falls on each load."),
            interpret: t("Mientras más unidades produces, menor es el fijo por unidad: por eso producir más suele abaratar cada pieza.", "The more units you produce, the lower the fixed cost per unit: that is why producing more usually makes each piece cheaper."),
            mistake: t("Creer que el costo fijo por unidad no cambia. Lo que no cambia es el **total**; por unidad baja al producir más y sube al producir menos.", "Believing fixed cost per unit does not change. What does not change is the **total**; per unit it falls when you produce more and rises when you produce less."),
          },
        ],
      },
      {
        heading: t("Costos mixtos y el método de punto alto y punto bajo", "Mixed costs and the high-low method"),
        body: [
          t(
            "Muchos costos son **mixtos** (o semivariables): tienen una parte fija y una variable. El recibo de luz de un negocio suele traer un cargo fijo más lo que consumes. Otros son **escalonados**: se quedan fijos un tramo y luego saltan, como contratar un supervisor más por cada 10 operarios.",
            "Many costs are **mixed** (or semi-variable): they have a fixed part and a variable part. A business's electricity bill usually has a fixed charge plus what you consume. Others are **step costs**: they stay fixed over a stretch and then jump, like hiring one more supervisor for every 10 workers.",
          ),
          t(
            "Para separar un costo mixto, el **método de punto alto y punto bajo** usa dos meses: el de mayor actividad y el de menor. La diferencia de costo entre ellos solo puede venir de la parte variable, así que la divides entre la diferencia de actividad.",
            "To split a mixed cost, the **high-low method** uses two months: the one with the highest activity and the one with the lowest. The cost difference between them can only come from the variable part, so you divide it by the activity difference.",
          ),
          t(
            "Es un método rápido pero aproximado: solo usa dos datos. Si uno de esos meses fue raro (una descompostura, un día festivo), el resultado se distorsiona.",
            "It is a quick but approximate method: it only uses two data points. If one of those months was unusual (a breakdown, a holiday), the result gets distorted.",
          ),
          t(
            "Mini ejemplo: una panadería gastó $38,000 con 5,000 piezas y $20,000 con 2,000 piezas. Variable: 18,000 ÷ 3,000 = $6 por pieza. Fijo: 38,000 − 5,000 × 6 = $8,000.",
            "Mini example: a bakery spent $38,000 with 5,000 pieces and $20,000 with 2,000 pieces. Variable: 18,000 ÷ 3,000 = $6 per piece. Fixed: 38,000 − 5,000 × 6 = $8,000.",
          ),
        ],
        formulas: [
          {
            name: t("Separar un costo mixto (punto alto y punto bajo)", "Splitting a mixed cost (high-low method)"),
            expression: "cv = (Costo alto − Costo bajo) ÷ (Actividad alta − Actividad baja);  CF = Costo alto − cv × Actividad alta",
            variables: [
              { symbol: "cv", meaning: t("Parte variable: cuántos pesos sube el costo por cada unidad extra de actividad (por hora, por pieza).", "Variable part: how many pesos the cost rises for each extra unit of activity (per hour, per piece).") },
              { symbol: "CF", meaning: t("Parte fija del costo, en pesos al mes: lo que se paga aunque la actividad sea baja.", "Fixed part of the cost, in pesos per month: what is paid even when activity is low.") },
              { symbol: "Costo alto / Costo bajo", meaning: t("El costo total, en pesos, del mes con más actividad y del mes con menos actividad.", "Total cost, in pesos, of the month with the most activity and of the month with the least.") },
              { symbol: "Actividad alta / Actividad baja", meaning: t("La actividad de esos dos meses (horas-máquina, piezas, kWh).", "Activity in those two months (machine hours, pieces, kWh).") },
            ],
            steps: [
              t("Elige el mes de mayor actividad y el de menor actividad (por actividad, no por costo).", "Pick the month with the highest activity and the one with the lowest (by activity, not by cost)."),
              t("Resta los costos: Costo alto − Costo bajo.", "Subtract the costs: High cost − Low cost."),
              t("Resta las actividades: Actividad alta − Actividad baja.", "Subtract the activities: High activity − Low activity."),
              t("Divide la diferencia de costo entre la diferencia de actividad: ese es cv.", "Divide the cost difference by the activity difference: that is vc."),
              t("Calcula la parte fija: al costo alto réstale cv × actividad alta.", "Compute the fixed part: from the high cost subtract vc × high activity."),
              t("Comprueba con el mes bajo: CF + cv × actividad baja debe dar el costo bajo.", "Check with the low month: FC + vc × low activity must equal the low cost."),
            ],
            example: t("Una lavandería gastó $26,000 en un mes con 1,200 cargas y $18,500 en un mes con 700 cargas. Diferencia de costo: 26,000 − 18,500 = 7,500. Diferencia de actividad: 1,200 − 700 = 500. cv = 7,500 ÷ 500 = **$15 por carga**. CF = 26,000 − 1,200 × 15 = 26,000 − 18,000 = **$8,000**. Comprobación: 8,000 + 700 × 15 = 8,000 + 10,500 = 18,500.", "A laundromat spent $26,000 in a month with 1,200 loads and $18,500 in a month with 700 loads. Cost difference: 26,000 − 18,500 = 7,500. Activity difference: 1,200 − 700 = 500. vc = 7,500 ÷ 500 = **$15 per load**. FC = 26,000 − 1,200 × 15 = 26,000 − 18,000 = **$8,000**. Check: 8,000 + 700 × 15 = 8,000 + 10,500 = 18,500."),
            interpret: t("cv te dice cuánto sube el costo por cada unidad más de actividad; CF es lo que pagarías cada mes aunque la actividad fuera mínima (dentro del rango relevante).", "vc tells you how much the cost rises for each additional unit of activity; FC is what you would pay each month even with minimal activity (within the relevant range)."),
            mistake: t("Dividir el costo total de un mes entre su actividad (26,000 ÷ 1,200). Eso mezcla la parte fija con la variable y no da cv.", "Dividing a month's total cost by its activity (26,000 ÷ 1,200). That mixes the fixed and variable parts and does not give vc."),
          },
        ],
      },
      {
        heading: t("La ecuación del costo total y la estructura de costos", "The total-cost equation and cost structure"),
        body: [
          t(
            "Con la parte fija (CF) y el costo variable por unidad (cv) puedes escribir la **ecuación del costo total**. Con ella proyectas cuánto gastarás el próximo mes según el volumen que esperas.",
            "With the fixed part (FC) and the variable cost per unit (vc) you can write the **total-cost equation**. With it you project how much you will spend next month based on the volume you expect.",
          ),
          t(
            "La **estructura de costos** es la proporción de fijos y variables de un negocio. Uno con muchos fijos (una fábrica automatizada) gana mucho cuando vende bastante, pero sufre cuando las ventas caen. Uno con muchos variables (un revendedor por catálogo) arriesga menos, pero cada venta le deja menos.",
            "**Cost structure** is the mix of fixed and variable costs in a business. One with many fixed costs (an automated factory) earns a lot when it sells plenty, but suffers when sales drop. One with many variable costs (a catalog reseller) risks less, but each sale leaves it less.",
          ),
          t(
            "Mini ejemplo: con CF = $8,000 y cv = $6, si la panadería espera 4,000 piezas, su costo total será 8,000 + 6 × 4,000 = $32,000, es decir, $8 por pieza.",
            "Mini example: with FC = $8,000 and vc = $6, if the bakery expects 4,000 pieces, its total cost will be 8,000 + 6 × 4,000 = $32,000, that is, $8 per piece.",
          ),
        ],
        formulas: [
          {
            name: t("Costo total proyectado", "Projected total cost"),
            expression: "Costo total = CF + cv × Q",
            variables: [
              { symbol: "Costo total", meaning: t("Lo que gastarás en total en el periodo, en pesos.", "What you will spend in total in the period, in pesos.") },
              { symbol: "CF", meaning: t("Costos fijos totales del periodo, en pesos: lo que pagas igual aunque produzcas más o menos (renta, sueldos fijos).", "Total fixed costs for the period, in pesos: what you pay the same whether you produce more or less (rent, fixed salaries).") },
              { symbol: "cv", meaning: t("Costo variable por unidad, en pesos: lo que gastas en cada pieza que haces o vendes (material, comisión).", "Variable cost per unit, in pesos: what you spend on each piece you make or sell (material, commission).") },
              { symbol: "Q", meaning: t("Cantidad de unidades producidas o vendidas en el periodo (piezas, kilos, servicios).", "Number of units produced or sold in the period (pieces, kilos, services).") },
            ],
            steps: [
              t("Multiplica el costo variable por unidad por las unidades que esperas: cv × Q.", "Multiply the variable cost per unit by the units you expect: vc × Q."),
              t("Súmale los costos fijos del periodo.", "Add the period's fixed costs."),
            ],
            example: t("Con CF = $8,000 y cv = $15 por carga, si la lavandería espera 1,000 cargas: 15 × 1,000 = 15,000; 8,000 + 15,000 = **$23,000** en el mes.", "With FC = $8,000 and vc = $15 per load, if the laundromat expects 1,000 loads: 15 × 1,000 = 15,000; 8,000 + 15,000 = **$23,000** for the month."),
            mistake: t("Multiplicar también los fijos por las unidades (8,000 × 1,000). Los fijos se suman una sola vez por periodo.", "Also multiplying fixed costs by units (8,000 × 1,000). Fixed costs are added only once per period."),
          },
          {
            name: t("Costo por unidad a un volumen dado", "Cost per unit at a given volume"),
            expression: "Costo unitario = CF ÷ Q + cv",
            variables: [
              { symbol: "Costo unitario", meaning: t("Lo que cuesta en promedio cada unidad, en pesos.", "What each unit costs on average, in pesos.") },
              { symbol: "CF", meaning: t("Costos fijos totales del periodo, en pesos: lo que pagas igual aunque produzcas más o menos (renta, sueldos fijos).", "Total fixed costs for the period, in pesos: what you pay the same whether you produce more or less (rent, fixed salaries).") },
              { symbol: "Q", meaning: t("Cantidad de unidades producidas o vendidas en el periodo (piezas, kilos, servicios).", "Number of units produced or sold in the period (pieces, kilos, services).") },
              { symbol: "cv", meaning: t("Costo variable por unidad, en pesos: lo que gastas en cada pieza que haces o vendes (material, comisión).", "Variable cost per unit, in pesos: what you spend on each piece you make or sell (material, commission).") },
            ],
            steps: [
              t("Reparte los fijos: CF ÷ Q.", "Spread the fixed costs: FC ÷ Q."),
              t("Súmale el costo variable por unidad (cv).", "Add the variable cost per unit (vc)."),
            ],
            example: t("Lavandería con CF = $8,000 y cv = $15. Con 1,000 cargas: 8,000 ÷ 1,000 = 8; 8 + 15 = **$23 por carga**. Con 2,000 cargas: 8,000 ÷ 2,000 = 4; 4 + 15 = **$19 por carga**.", "Laundromat with FC = $8,000 and vc = $15. With 1,000 loads: 8,000 ÷ 1,000 = 8; 8 + 15 = **$23 per load**. With 2,000 loads: 8,000 ÷ 2,000 = 4; 4 + 15 = **$19 per load**."),
            interpret: t("Si el volumen sube, el costo unitario baja, porque los fijos se reparten entre más unidades; el cv se queda igual.", "If volume rises, unit cost falls, because fixed costs are spread over more units; vc stays the same."),
            mistake: t("Responder solo cv (que es solo la parte variable) o sumar CF + cv sin dividir antes los fijos entre las unidades.", "Answering only vc (just the variable part) or adding FC + vc without first dividing fixed costs by the units."),
          },
        ],
      },
    ],
    examples: [
      {
        title: t("Separar el costo de mantenimiento de un taller", "Splitting a workshop's maintenance cost"),
        problem: t(
          "Un taller de carpintería registró su costo de mantenimiento: el mes con más actividad tuvo 900 horas-máquina y costó $31,000; el de menos actividad tuvo 400 horas y costó $18,500. ¿Cuál es la parte variable por hora, la parte fija y el costo esperado con 700 horas?",
          "A carpentry workshop recorded its maintenance cost: the busiest month had 900 machine hours and cost $31,000; the slowest had 400 hours and cost $18,500. What is the variable part per hour, the fixed part and the expected cost at 700 hours?",
        ),
        steps: [
          t("Diferencia de costo: 31,000 − 18,500 = $12,500.", "Cost difference: 31,000 − 18,500 = $12,500."),
          t("Diferencia de actividad: 900 − 400 = 500 horas.", "Activity difference: 900 − 400 = 500 hours."),
          t("Costo variable por hora: 12,500 ÷ 500 = $25.", "Variable cost per hour: 12,500 ÷ 500 = $25."),
          t("Parte fija: 31,000 − 900 × 25 = 31,000 − 22,500 = $8,500.", "Fixed part: 31,000 − 900 × 25 = 31,000 − 22,500 = $8,500."),
          t("Proyección con 700 horas: 8,500 + 25 × 700 = 8,500 + 17,500 = $26,000.", "Projection at 700 hours: 8,500 + 25 × 700 = 8,500 + 17,500 = $26,000."),
        ],
        result: t(
          "Mantenimiento = $8,500 fijos + $25 por hora. Con 700 horas se esperan $26,000.",
          "Maintenance = $8,500 fixed + $25 per hour. At 700 hours, $26,000 is expected.",
        ),
      },
      {
        title: t("Costo unitario a dos volúmenes", "Unit cost at two volumes"),
        problem: t(
          "Una fábrica de bolsas tiene costos fijos de $60,000 al mes y un costo variable de $40 por bolsa. ¿Cuánto cuesta cada bolsa si produce 1,000? ¿Y si produce 2,000?",
          "A bag factory has fixed costs of $60,000 per month and a variable cost of $40 per bag. How much does each bag cost if it produces 1,000? And if it produces 2,000?",
        ),
        steps: [
          t("Con 1,000 bolsas: fijo por bolsa = 60,000 ÷ 1,000 = $60; costo unitario = 60 + 40 = $100.", "With 1,000 bags: fixed per bag = 60,000 ÷ 1,000 = $60; unit cost = 60 + 40 = $100."),
          t("Con 2,000 bolsas: fijo por bolsa = 60,000 ÷ 2,000 = $30; costo unitario = 30 + 40 = $70.", "With 2,000 bags: fixed per bag = 60,000 ÷ 2,000 = $30; unit cost = 30 + 40 = $70."),
          t("El variable por bolsa ($40) no cambió; solo bajó la parte fija por unidad.", "The variable cost per bag ($40) did not change; only the fixed part per unit fell."),
        ],
        result: t(
          "El costo unitario baja de $100 a $70 al duplicar la producción, siempre que siga dentro del rango relevante.",
          "Unit cost falls from $100 to $70 when production doubles, as long as it stays within the relevant range.",
        ),
      },
    ],
    keyPoints: [
      t("El costo variable cambia en total con el volumen, pero es constante por unidad.", "Variable cost changes in total with volume, but is constant per unit."),
      t("El costo fijo es constante en total, pero por unidad baja cuando produces más.", "Fixed cost is constant in total, but per unit it falls when you produce more."),
      t("Esto solo vale dentro del rango relevante; fuera de él, los fijos cambian.", "This only holds within the relevant range; outside it, fixed costs change."),
      t("Los costos mixtos se separan con punto alto y punto bajo: cv = Δcosto ÷ Δactividad.", "Mixed costs are split with the high-low method: vc = Δcost ÷ Δactivity."),
      t("Costo total = CF + cv × Q te sirve para proyectar costos.", "Total cost = FC + vc × Q helps you project costs."),
    ],
    exerciseIds: ['COS-07-E1', 'COS-07-E2', 'COS-07-E3', 'COS-07-E4', 'COS-07-E5', 'COS-07-E6'],
  },

  // ───────────────────────────── COS-08 ─────────────────────────────
  {
    id: 'COS-08',
    level: 3,
    topicIds: ['COS.8'],
    title: t("Análisis costo-volumen-utilidad", "Cost-volume-profit analysis"),
    summary: t(
      "El análisis costo-volumen-utilidad (CVU) muestra cómo cambian las utilidades cuando cambian el precio, el volumen o los costos, usando el margen de contribución como pieza central.",
      "Cost-volume-profit (CVP) analysis shows how profit changes when price, volume or costs change, using the contribution margin as its central piece.",
    ),
    minutes: 18,
    objectives: [
      t("Calcular el margen de contribución unitario, total y como porcentaje de las ventas.", "Compute the contribution margin per unit, in total and as a percentage of sales."),
      t("Usar la ecuación CVU para calcular la utilidad y el volumen necesario para una utilidad meta.", "Use the CVP equation to compute profit and the volume needed for a target profit."),
      t("Evaluar escenarios de qué pasa si e interpretar el grado de apalancamiento operativo.", "Evaluate what-if scenarios and interpret the degree of operating leverage."),
    ],
    theory: [
      {
        heading: t("El margen de contribución", "The contribution margin"),
        body: [
          t(
            "El **margen de contribución** es lo que te queda de cada venta después de pagar sus costos variables. Se llama así porque ese dinero **contribuye** primero a cubrir los costos fijos y, cuando ya los cubrió, se vuelve utilidad.",
            "The **contribution margin** is what is left from each sale after paying its variable costs. It is called that because this money **contributes** first to covering fixed costs and, once they are covered, becomes profit.",
          ),
          t(
            "Se puede ver de tres formas: **por unidad** (precio − costo variable unitario), **en total** (margen unitario × unidades vendidas) y como **razón** o porcentaje de las ventas (margen unitario ÷ precio).",
            "It can be viewed in three ways: **per unit** (price − variable cost per unit), **in total** (unit margin × units sold) and as a **ratio** or percentage of sales (unit margin ÷ price).",
          ),
          t(
            "Mini ejemplo: un puesto vende tortas a $60; el pan, el relleno y el empaque cuestan $25. Cada torta deja $35 de margen, y la razón es 35 ÷ 60 ≈ 58.3 %: de cada peso vendido, unos 58 centavos van a cubrir fijos y generar utilidad.",
            "Mini example: a stand sells tortas at $60; bread, filling and packaging cost $25. Each torta leaves a $35 margin, and the ratio is 35 ÷ 60 ≈ 58.3%: of every peso sold, about 58 cents go to covering fixed costs and generating profit.",
          ),
        ],
        formulas: [
          {
            name: t("Margen de contribución por unidad y total", "Contribution margin per unit and in total"),
            expression: "MC unitario = Precio − cv;  MC total = MC unitario × Q",
            variables: [
              { symbol: "MC unitario", meaning: t("Margen de contribución por unidad, en pesos: Precio − cv.", "Contribution margin per unit, in pesos: Price − vc.") },
              { symbol: "Precio", meaning: t("Lo que cobras por cada unidad, en pesos.", "What you charge for each unit, in pesos.") },
              { symbol: "cv", meaning: t("Costo variable por unidad, en pesos: lo que gastas en cada pieza que haces o vendes (material, comisión).", "Variable cost per unit, in pesos: what you spend on each piece you make or sell (material, commission).") },
              { symbol: "MC total", meaning: t("Lo que dejan todas las unidades vendidas para cubrir fijos y ganar, en pesos.", "What all units sold leave to cover fixed costs and earn, in pesos.") },
              { symbol: "Q", meaning: t("Unidades vendidas en el periodo.", "Units sold in the period.") },
            ],
            steps: [
              t("Resta al precio el costo variable de una unidad: eso es el MC unitario.", "Subtract one unit's variable cost from the price: that is the unit CM."),
              t("Multiplica el MC unitario por las unidades vendidas: eso es el MC total.", "Multiply the unit CM by units sold: that is the total CM."),
            ],
            example: t("Una nevería vende cada cono a $40; el helado, el cono y la servilleta cuestan $16. MC unitario = 40 − 16 = **$24**. Si vende 800 conos: MC total = 24 × 800 = **$19,200**.", "An ice cream shop sells each cone at $40; ice cream, cone and napkin cost $16. Unit CM = 40 − 16 = **$24**. If it sells 800 cones: total CM = 24 × 800 = **$19,200**."),
            mistake: t("Restar también los costos fijos al precio. El margen de contribución solo resta los **variables**; los fijos se restan después, del total.", "Also subtracting fixed costs from the price. The contribution margin subtracts only **variable** costs; fixed costs are subtracted later, from the total."),
          },
          {
            name: t("Razón de margen de contribución", "Contribution margin ratio"),
            expression: "Razón MC = MC unitario ÷ Precio × 100",
            variables: [
              { symbol: "Razón MC", meaning: t("Qué porcentaje de cada peso vendido queda para cubrir fijos y ganar, en %.", "What percentage of each peso sold is left to cover fixed costs and earn, in %.") },
              { symbol: "MC unitario", meaning: t("Margen de contribución por unidad, en pesos: Precio − cv.", "Contribution margin per unit, in pesos: Price − vc.") },
              { symbol: "Precio", meaning: t("Lo que cobras por cada unidad, en pesos.", "What you charge for each unit, in pesos.") },
            ],
            steps: [
              t("Calcula el MC unitario: Precio − cv.", "Compute the unit CM: Price − vc."),
              t("Divide el MC unitario entre el precio.", "Divide the unit CM by the price."),
              t("Multiplica por 100 para leerlo en porcentaje (0.60 = 60 %).", "Multiply by 100 to read it as a percentage (0.60 = 60%)."),
            ],
            example: t("Nevería: MC unitario $24 y precio $40. 24 ÷ 40 = 0.60; 0.60 × 100 = **60 %**. De cada $100 vendidos, $60 van a cubrir fijos y generar utilidad.", "Ice cream shop: unit CM $24 and price $40. 24 ÷ 40 = 0.60; 0.60 × 100 = **60%**. Of every $100 sold, $60 goes to covering fixed costs and generating profit."),
            interpret: t("Mientras más alta, más deja cada peso vendido. Sirve cuando vendes muchos productos distintos y no puedes trabajar por unidad.", "The higher it is, the more each peso sold leaves. It is useful when you sell many different products and cannot work per unit."),
            mistake: t("Dividir entre el costo variable en lugar del precio (24 ÷ 16). La razón siempre se calcula sobre el **precio** de venta.", "Dividing by the variable cost instead of the price (24 ÷ 16). The ratio is always computed on the selling **price**."),
          },
        ],
      },
      {
        heading: t("La ecuación CVU y la utilidad meta", "The CVP equation and target profit"),
        body: [
          t(
            "El modelo CVU resume el negocio en una sola línea: la utilidad de operación es el margen de contribución total menos los costos fijos. Con ella puedes responder: ¿cuánto gano si vendo tanto?, o al revés, ¿cuánto debo vender para ganar tanto?",
            "The CVP model sums up the business in one line: operating profit equals total contribution margin minus fixed costs. With it you can answer: how much do I earn if I sell this much?, or the other way around, how much must I sell to earn this much?",
          ),
          t(
            "Para una **utilidad meta**, sumas esa utilidad a los costos fijos y divides entre el margen unitario (para unidades) o entre la razón de margen (para pesos de venta).",
            "For a **target profit**, you add that profit to fixed costs and divide by the unit margin (for units) or by the margin ratio (for sales pesos).",
          ),
          t(
            "El modelo supone que el precio y el costo variable por unidad no cambian, que los fijos son constantes dentro del rango relevante y que lo que se produce se vende. Son simplificaciones útiles, no verdades absolutas.",
            "The model assumes price and variable cost per unit do not change, that fixed costs are constant within the relevant range and that what is produced is sold. These are useful simplifications, not absolute truths.",
          ),
          t(
            "Mini ejemplo: con margen de $35 por torta y fijos de $42,000 al mes, para ganar $28,000 hay que vender (42,000 + 28,000) ÷ 35 = 2,000 tortas.",
            "Mini example: with a $35 margin per torta and fixed costs of $42,000 per month, earning $28,000 requires selling (42,000 + 28,000) ÷ 35 = 2,000 tortas.",
          ),
        ],
        formulas: [
          {
            name: t("Utilidad de operación (ecuación CVU)", "Operating profit (CVP equation)"),
            expression: "Utilidad = (Precio − cv) × Q − CF",
            variables: [
              { symbol: "Utilidad", meaning: t("Lo que ganas en el periodo después de pagar costos variables y fijos, en pesos.", "What you earn in the period after paying variable and fixed costs, in pesos.") },
              { symbol: "Precio", meaning: t("Lo que cobras por cada unidad, en pesos.", "What you charge for each unit, in pesos.") },
              { symbol: "cv", meaning: t("Costo variable por unidad, en pesos: lo que gastas en cada pieza que haces o vendes (material, comisión).", "Variable cost per unit, in pesos: what you spend on each piece you make or sell (material, commission).") },
              { symbol: "Q", meaning: t("Unidades vendidas en el periodo.", "Units sold in the period.") },
              { symbol: "CF", meaning: t("Costos fijos totales del periodo, en pesos: lo que pagas igual aunque produzcas más o menos (renta, sueldos fijos).", "Total fixed costs for the period, in pesos: what you pay the same whether you produce more or less (rent, fixed salaries).") },
            ],
            steps: [
              t("Calcula el MC unitario: Precio − cv.", "Compute the unit CM: Price − vc."),
              t("Multiplícalo por las unidades vendidas para obtener el MC total.", "Multiply it by units sold to get the total CM."),
              t("Resta los costos fijos del periodo.", "Subtract the period's fixed costs."),
            ],
            example: t("Nevería: precio $40, cv $16, vende 800 conos y tiene fijos de $12,000. MC unitario = 40 − 16 = 24. MC total = 24 × 800 = 19,200. Utilidad = 19,200 − 12,000 = **$7,200**.", "Ice cream shop: price $40, vc $16, sells 800 cones and has fixed costs of $12,000. Unit CM = 40 − 16 = 24. Total CM = 24 × 800 = 19,200. Profit = 19,200 − 12,000 = **$7,200**."),
            interpret: t("Si el resultado es positivo, ganas; si es cero, estás en el punto de equilibrio; si es negativo, pierdes.", "If the result is positive, you earn; if it is zero, you are at break-even; if it is negative, you lose."),
            mistake: t("Hacer ventas − fijos (40 × 800 − 12,000) y olvidar restar los costos variables.", "Doing sales − fixed costs (40 × 800 − 12,000) and forgetting to subtract variable costs."),
          },
          {
            name: t("Unidades para una utilidad meta", "Units for a target profit"),
            expression: "Q meta = (CF + Utilidad meta) ÷ MC unitario",
            variables: [
              { symbol: "Q meta", meaning: t("Unidades que debes vender para ganar lo que quieres.", "Units you must sell to earn what you want.") },
              { symbol: "CF", meaning: t("Costos fijos totales del periodo, en pesos: lo que pagas igual aunque produzcas más o menos (renta, sueldos fijos).", "Total fixed costs for the period, in pesos: what you pay the same whether you produce more or less (rent, fixed salaries).") },
              { symbol: "Utilidad meta", meaning: t("Lo que quieres ganar en el periodo, en pesos.", "What you want to earn in the period, in pesos.") },
              { symbol: "MC unitario", meaning: t("Margen de contribución por unidad, en pesos: Precio − cv.", "Contribution margin per unit, in pesos: Price − vc.") },
            ],
            steps: [
              t("Suma los costos fijos y la utilidad que quieres ganar.", "Add fixed costs and the profit you want to earn."),
              t("Divide ese total entre el MC unitario.", "Divide that total by the unit CM."),
              t("Si sale con decimales, redondea hacia arriba (no se venden medias unidades).", "If it has decimals, round up (you cannot sell half units)."),
              t("Comprueba: Q meta × MC unitario − CF debe dar la utilidad meta.", "Check: Target Q × unit CM − FC must equal the target profit."),
            ],
            example: t("Nevería con fijos de $12,000 y MC de $24 quiere ganar $6,000. 12,000 + 6,000 = 18,000; 18,000 ÷ 24 = **750 conos**. Comprobación: 750 × 24 − 12,000 = 18,000 − 12,000 = 6,000.", "Ice cream shop with fixed costs of $12,000 and a $24 CM wants to earn $6,000. 12,000 + 6,000 = 18,000; 18,000 ÷ 24 = **750 cones**. Check: 750 × 24 − 12,000 = 18,000 − 12,000 = 6,000."),
            mistake: t("Dividir solo los fijos entre el margen: eso da el punto de equilibrio (utilidad cero), no la utilidad meta.", "Dividing only fixed costs by the margin: that gives the break-even point (zero profit), not the target profit."),
          },
          {
            name: t("Ventas en pesos para una utilidad meta", "Sales in pesos for a target profit"),
            expression: "Ventas meta = (CF + Utilidad meta) ÷ Razón MC",
            variables: [
              { symbol: "Ventas meta", meaning: t("Pesos de venta que necesitas para ganar lo que quieres.", "Sales pesos you need to earn what you want.") },
              { symbol: "CF", meaning: t("Costos fijos totales del periodo, en pesos: lo que pagas igual aunque produzcas más o menos (renta, sueldos fijos).", "Total fixed costs for the period, in pesos: what you pay the same whether you produce more or less (rent, fixed salaries).") },
              { symbol: "Utilidad meta", meaning: t("Lo que quieres ganar en el periodo, en pesos.", "What you want to earn in the period, in pesos.") },
              { symbol: "Razón MC", meaning: t("Margen de contribución como fracción del precio, en decimal (60 % = 0.60).", "Contribution margin as a fraction of price, in decimal form (60% = 0.60).") },
            ],
            steps: [
              t("Calcula la razón MC y escríbela en decimal (60 % = 0.60).", "Compute the CM ratio and write it as a decimal (60% = 0.60)."),
              t("Suma los costos fijos y la utilidad meta.", "Add fixed costs and the target profit."),
              t("Divide ese total entre la razón en decimal.", "Divide that total by the ratio in decimal form."),
              t("Si quieres unidades, divide las ventas meta entre el precio.", "If you want units, divide target sales by the price."),
            ],
            example: t("Nevería: razón 60 % = 0.60, fijos $12,000 y meta $6,000. 12,000 + 6,000 = 18,000; 18,000 ÷ 0.60 = **$30,000** de ventas. En conos: 30,000 ÷ 40 = 750.", "Ice cream shop: ratio 60% = 0.60, fixed costs $12,000 and target $6,000. 12,000 + 6,000 = 18,000; 18,000 ÷ 0.60 = **$30,000** in sales. In cones: 30,000 ÷ 40 = 750."),
            mistake: t("Dividir entre 60 en lugar de 0.60, o dividir solo los fijos y olvidar sumar la utilidad meta.", "Dividing by 60 instead of 0.60, or dividing only fixed costs and forgetting to add the target profit."),
          },
        ],
      },
      {
        heading: t("Escenarios de qué pasa si y apalancamiento operativo", "What-if scenarios and operating leverage"),
        body: [
          t(
            "En palabras sencillas: antes de bajar un precio o pagar un anuncio, puedes hacer la cuenta en papel y ver si te conviene. Y el **apalancamiento operativo** es como una lupa: como los costos fijos no cambian, cualquier subida o bajada de las ventas se nota más grande en la utilidad.",
            "In simple words: before lowering a price or paying for an ad, you can do the math on paper and see whether it pays off. And **operating leverage** works like a magnifying glass: since fixed costs do not change, any rise or fall in sales shows up larger in profit.",
          ),
          t(
            "El CVU brilla para probar decisiones antes de tomarlas: bajar el precio para vender más, cambiar un proveedor que abarata el costo variable o pagar una campaña fija. Recalculas la utilidad con los nuevos datos y comparas.",
            "CVP shines at testing decisions before making them: lowering the price to sell more, switching to a supplier that lowers the variable cost, or paying for a fixed campaign. You recompute profit with the new data and compare.",
          ),
          t(
            "El **grado de apalancamiento operativo** (GAO) mide qué tan sensible es tu utilidad a cambios en las ventas. Se calcula como margen de contribución total ÷ utilidad de operación. Un GAO de 2 significa que si las ventas suben 10 %, la utilidad sube 20 % (y si bajan 10 %, la utilidad cae 20 %).",
            "The **degree of operating leverage** (DOL) measures how sensitive your profit is to changes in sales. It is computed as total contribution margin ÷ operating profit. A DOL of 2 means that if sales rise 10%, profit rises 20% (and if they fall 10%, profit falls 20%).",
          ),
          t(
            "Un GAO alto suele venir de muchos costos fijos: más ganancia en las buenas, más riesgo en las malas. El GAO cambia con el nivel de ventas, así que se calcula para un volumen específico.",
            "A high DOL usually comes from many fixed costs: more gain in good times, more risk in bad times. DOL changes with the sales level, so it is computed for a specific volume.",
          ),
          t(
            "Mini ejemplo: un negocio con margen total de $84,000 y utilidad de $42,000 tiene GAO = 2.",
            "Mini example: a business with a total margin of $84,000 and profit of $42,000 has DOL = 2.",
          ),
        ],
        formulas: [
          {
            name: t("Comparar un escenario de qué pasa si", "Comparing a what-if scenario"),
            expression: "Cambio en utilidad = Utilidad del escenario − Utilidad actual",
            variables: [
              { symbol: "Utilidad del escenario", meaning: t("La utilidad recalculada con los datos nuevos (precio, cv, unidades o fijos), en pesos: MC unitario nuevo × Q nuevo − CF nuevo.", "Profit recomputed with the new data (price, vc, units or fixed costs), in pesos: new unit CM × new Q − new FC.") },
              { symbol: "Utilidad actual", meaning: t("La utilidad con los datos de hoy, en pesos: MC unitario × Q − CF.", "Profit with today's data, in pesos: unit CM × Q − FC.") },
            ],
            steps: [
              t("Calcula la utilidad actual con los datos de hoy.", "Compute current profit with today's data."),
              t("Cambia solo lo que cambia la propuesta y recalcula el MC unitario si cambió el precio o el cv.", "Change only what the proposal changes and recompute the unit CM if price or vc changed."),
              t("Calcula la utilidad del escenario con el MC nuevo, las unidades nuevas y los fijos nuevos.", "Compute the scenario's profit with the new CM, new units and new fixed costs."),
              t("Resta: utilidad del escenario − utilidad actual.", "Subtract: scenario profit − current profit."),
            ],
            example: t("Nevería: hoy 800 conos × $24 − 12,000 = $7,200. Propuesta: pagar un anuncio fijo de $3,000 y vender 1,000 conos. Fijos nuevos: 12,000 + 3,000 = 15,000. Escenario: 1,000 × 24 − 15,000 = 24,000 − 15,000 = $9,000. Cambio: 9,000 − 7,200 = **+$1,800**: conviene.", "Ice cream shop: today 800 cones × $24 − 12,000 = $7,200. Proposal: pay a fixed $3,000 ad and sell 1,000 cones. New fixed costs: 12,000 + 3,000 = 15,000. Scenario: 1,000 × 24 − 15,000 = 24,000 − 15,000 = $9,000. Change: 9,000 − 7,200 = **+$1,800**: it pays off."),
            interpret: t("Si el cambio es positivo, la propuesta conviene; si es negativo, te hace ganar menos.", "If the change is positive, the proposal pays off; if it is negative, it makes you earn less."),
            mistake: t("Mezclar datos: aplicar el margen nuevo a las unidades de hoy, o el margen de hoy a las unidades nuevas. Todo el escenario se calcula con los datos nuevos juntos.", "Mixing data: applying the new margin to today's units, or today's margin to the new units. The whole scenario is computed with the new data together."),
          },
          {
            name: t("Grado de apalancamiento operativo (GAO)", "Degree of operating leverage (DOL)"),
            expression: "GAO = MC total ÷ Utilidad de operación;  % cambio en utilidad ≈ GAO × % cambio en ventas",
            variables: [
              { symbol: "GAO", meaning: t("Cuántas veces se multiplica en la utilidad un cambio en las ventas (un número, sin pesos).", "How many times a change in sales is multiplied in profit (a number, no pesos).") },
              { symbol: "MC total", meaning: t("Margen de contribución total: MC unitario × unidades vendidas, en pesos.", "Total contribution margin: unit CM × units sold, in pesos.") },
              { symbol: "Utilidad de operación", meaning: t("MC total − costos fijos, en pesos.", "Total CM − fixed costs, in pesos.") },
              { symbol: "% cambio en ventas", meaning: t("Cuánto suben o bajan las ventas, en %.", "How much sales rise or fall, in %.") },
            ],
            steps: [
              t("Calcula el MC total: (Precio − cv) × unidades.", "Compute the total CM: (Price − vc) × units."),
              t("Calcula la utilidad: MC total − CF.", "Compute profit: total CM − FC."),
              t("Divide el MC total entre la utilidad: ese es el GAO.", "Divide the total CM by profit: that is the DOL."),
              t("Para estimar el efecto de un cambio en ventas, multiplica el GAO por ese porcentaje.", "To estimate the effect of a change in sales, multiply the DOL by that percentage."),
            ],
            example: t("Nevería: MC total $19,200 y utilidad $7,200. GAO = 19,200 ÷ 7,200 ≈ **2.67**. Si las ventas suben 10 %: 2.67 × 10 % ≈ 26.7 % más utilidad. Comprobación: 880 conos × 24 = 21,120; 21,120 − 12,000 = 9,120; 9,120 ÷ 7,200 ≈ 1.267, es decir, +26.7 %.", "Ice cream shop: total CM $19,200 and profit $7,200. DOL = 19,200 ÷ 7,200 ≈ **2.67**. If sales rise 10%: 2.67 × 10% ≈ 26.7% more profit. Check: 880 cones × 24 = 21,120; 21,120 − 12,000 = 9,120; 9,120 ÷ 7,200 ≈ 1.267, that is, +26.7%."),
            interpret: t("Un GAO alto significa más riesgo y más oportunidad: la utilidad sube rápido si vendes más, pero también cae rápido si vendes menos.", "A high DOL means more risk and more opportunity: profit rises fast if you sell more, but also falls fast if you sell less."),
            mistake: t("Dividir las **ventas** entre la utilidad. El GAO usa el **margen de contribución** total, no las ventas.", "Dividing **sales** by profit. DOL uses the total **contribution margin**, not sales."),
          },
        ],
      },
    ],
    examples: [
      {
        title: t("Utilidad meta de un puesto de tortas", "Target profit for a torta stand"),
        problem: t(
          "Un puesto vende tortas a $60 con costo variable de $25 y costos fijos mensuales de $42,000 (renta, sueldos, gas). ¿Cuál es su margen unitario y su razón de margen? ¿Cuántas tortas necesita vender para ganar $28,000 al mes, y a cuántos pesos de venta equivale?",
          "A stand sells tortas at $60 with a variable cost of $25 and monthly fixed costs of $42,000 (rent, wages, gas). What is its unit margin and margin ratio? How many tortas must it sell to earn $28,000 per month, and how many sales pesos is that?",
        ),
        steps: [
          t("Margen unitario: 60 − 25 = $35.", "Unit margin: 60 − 25 = $35."),
          t("Razón de margen: 35 ÷ 60 ≈ 0.5833 (58.33 %).", "Margin ratio: 35 ÷ 60 ≈ 0.5833 (58.33%)."),
          t("Unidades para la meta: (42,000 + 28,000) ÷ 35 = 70,000 ÷ 35 = 2,000 tortas.", "Units for the target: (42,000 + 28,000) ÷ 35 = 70,000 ÷ 35 = 2,000 tortas."),
          t("En pesos: 2,000 × 60 = $120,000 de ventas.", "In pesos: 2,000 × 60 = $120,000 in sales."),
          t("Comprobación: 2,000 × 35 − 42,000 = 70,000 − 42,000 = $28,000.", "Check: 2,000 × 35 − 42,000 = 70,000 − 42,000 = $28,000."),
        ],
        result: t(
          "Debe vender 2,000 tortas ($120,000) al mes para ganar $28,000.",
          "It must sell 2,000 tortas ($120,000) per month to earn $28,000.",
        ),
      },
      {
        title: t("Apalancamiento operativo en acción", "Operating leverage in action"),
        problem: t(
          "El mismo puesto vende hoy 2,400 tortas al mes. Calcula su GAO y estima qué pasa con su utilidad si las ventas suben 10 %. Comprueba con el cálculo directo.",
          "The same stand currently sells 2,400 tortas per month. Compute its DOL and estimate what happens to profit if sales rise 10%. Check with the direct calculation.",
        ),
        steps: [
          t("MC total: 2,400 × 35 = $84,000; utilidad: 84,000 − 42,000 = $42,000.", "Total CM: 2,400 × 35 = $84,000; profit: 84,000 − 42,000 = $42,000."),
          t("GAO = 84,000 ÷ 42,000 = 2.", "DOL = 84,000 ÷ 42,000 = 2."),
          t("Estimación: 2 × 10 % = 20 % más de utilidad.", "Estimate: 2 × 10% = 20% more profit."),
          t("Comprobación: 2,640 tortas × 35 = 92,400; 92,400 − 42,000 = $50,400; 50,400 ÷ 42,000 = 1.20, es decir, +20 %.", "Check: 2,640 tortas × 35 = 92,400; 92,400 − 42,000 = $50,400; 50,400 ÷ 42,000 = 1.20, that is, +20%."),
        ],
        result: t(
          "Con GAO de 2, un 10 % más de ventas eleva la utilidad 20 %: de $42,000 a $50,400.",
          "With a DOL of 2, 10% more sales raises profit 20%: from $42,000 to $50,400.",
        ),
      },
    ],
    keyPoints: [
      t("Margen de contribución = precio − costo variable; primero cubre fijos y luego es utilidad.", "Contribution margin = price − variable cost; it first covers fixed costs and then becomes profit."),
      t("Utilidad = MC total − costos fijos.", "Profit = total CM − fixed costs."),
      t("Unidades para una utilidad meta = (CF + utilidad meta) ÷ MC unitario.", "Units for a target profit = (FC + target profit) ÷ unit CM."),
      t("El modelo supone precio, cv y fijos constantes dentro del rango relevante.", "The model assumes constant price, vc and fixed costs within the relevant range."),
      t("GAO = MC total ÷ utilidad: multiplica el efecto de los cambios en ventas.", "DOL = total CM ÷ profit: it multiplies the effect of changes in sales."),
    ],
    exerciseIds: ['COS-08-E1', 'COS-08-E2', 'COS-08-E3', 'COS-08-E4', 'COS-08-E5', 'COS-08-E6'],
  },

  // ───────────────────────────── COS-09 ─────────────────────────────
  {
    id: 'COS-09',
    level: 3,
    topicIds: ['COS.9'],
    title: t("Punto de equilibrio", "Break-even point"),
    summary: t(
      "El punto de equilibrio es el nivel de ventas en el que no ganas ni pierdes; saber dónde está te dice cuánto debes vender como mínimo y qué tan lejos estás del riesgo de pérdida.",
      "The break-even point is the sales level at which you neither earn nor lose; knowing where it is tells you the minimum you must sell and how far you are from the risk of loss.",
    ),
    minutes: 16,
    objectives: [
      t("Calcular el punto de equilibrio en unidades y en pesos de venta.", "Compute the break-even point in units and in sales pesos."),
      t("Calcular e interpretar el margen de seguridad en unidades, pesos y porcentaje.", "Compute and interpret the margin of safety in units, pesos and percentage."),
      t("Calcular el punto de equilibrio de un negocio con varios productos usando la mezcla de ventas.", "Compute the break-even point of a multi-product business using the sales mix."),
    ],
    theory: [
      {
        heading: t("Qué es y cómo se calcula", "What it is and how to compute it"),
        body: [
          t(
            "El **punto de equilibrio** (PE) es la cantidad de ventas en la que los ingresos cubren exactamente todos los costos: la utilidad es cero. Debajo de él pierdes; arriba de él ganas.",
            "The **break-even point** (BEP) is the sales quantity at which revenue exactly covers all costs: profit is zero. Below it you lose; above it you earn.",
          ),
          t(
            "Como cada unidad deja un margen de contribución, solo necesitas vender las unidades suficientes para juntar el monto de los costos fijos. Por eso el PE en unidades es costos fijos ÷ margen unitario. En pesos, divides los fijos entre la razón de margen.",
            "Since each unit leaves a contribution margin, you only need to sell enough units to gather the amount of fixed costs. That is why BEP in units is fixed costs ÷ unit margin. In pesos, you divide fixed costs by the margin ratio.",
          ),
          t(
            "Si el resultado tiene decimales, redondea **hacia arriba**: con 1,250.4 unidades todavía pierdes un poco, así que el mínimo real es 1,251.",
            "If the result has decimals, round **up**: at 1,250.4 units you still lose a little, so the real minimum is 1,251.",
          ),
          t(
            "Mini ejemplo: una cafetería vende cada taza a $45, con costo variable de $18 y fijos de $54,000 al mes. PE = 54,000 ÷ 27 = 2,000 tazas, o 2,000 × 45 = $90,000.",
            "Mini example: a coffee shop sells each cup at $45, with a variable cost of $18 and fixed costs of $54,000 per month. BEP = 54,000 ÷ 27 = 2,000 cups, or 2,000 × 45 = $90,000.",
          ),
        ],
        formulas: [
          {
            name: t("Punto de equilibrio en unidades", "Break-even point in units"),
            expression: "PE unidades = CF ÷ (Precio − cv)",
            variables: [
              { symbol: "PE unidades", meaning: t("Unidades que debes vender para no ganar ni perder.", "Units you must sell to neither earn nor lose.") },
              { symbol: "CF", meaning: t("Costos fijos totales del periodo, en pesos: lo que pagas igual aunque produzcas más o menos (renta, sueldos fijos).", "Total fixed costs for the period, in pesos: what you pay the same whether you produce more or less (rent, fixed salaries).") },
              { symbol: "Precio", meaning: t("Lo que cobras por cada unidad, en pesos.", "What you charge for each unit, in pesos.") },
              { symbol: "cv", meaning: t("Costo variable por unidad, en pesos: lo que gastas en cada pieza que haces o vendes (material, comisión).", "Variable cost per unit, in pesos: what you spend on each piece you make or sell (material, commission).") },
            ],
            steps: [
              t("Calcula el margen por unidad: Precio − cv.", "Compute the margin per unit: Price − vc."),
              t("Divide los costos fijos entre ese margen.", "Divide fixed costs by that margin."),
              t("Si sale con decimales, redondea hacia arriba.", "If it has decimals, round up."),
            ],
            example: t("Un salón de uñas cobra $300 por servicio, con cv de $120 y fijos de $28,000 al mes. Margen: 300 − 120 = 180. PE = 28,000 ÷ 180 = 155.56 → **156 servicios**. Con 156: 156 × 180 = 28,080, ya cubre los fijos.", "A nail salon charges $300 per service, with a vc of $120 and fixed costs of $28,000 per month. Margin: 300 − 120 = 180. BEP = 28,000 ÷ 180 = 155.56 → **156 services**. With 156: 156 × 180 = 28,080, which already covers fixed costs."),
            interpret: t("Por debajo del PE pierdes; por arriba ganas. Mientras más bajo el PE, más fácil es empezar a ganar.", "Below the BEP you lose; above it you earn. The lower the BEP, the easier it is to start earning."),
            mistake: t("Dividir los fijos entre el **precio** en lugar del margen: olvida que cada unidad también tiene costo variable.", "Dividing fixed costs by the **price** instead of the margin: it forgets that each unit also has a variable cost."),
          },
          {
            name: t("Punto de equilibrio en pesos", "Break-even point in pesos"),
            expression: "PE pesos = CF ÷ Razón MC",
            variables: [
              { symbol: "PE pesos", meaning: t("Pesos de venta que necesitas para no ganar ni perder.", "Sales pesos you need to neither earn nor lose.") },
              { symbol: "CF", meaning: t("Costos fijos totales del periodo, en pesos: lo que pagas igual aunque produzcas más o menos (renta, sueldos fijos).", "Total fixed costs for the period, in pesos: what you pay the same whether you produce more or less (rent, fixed salaries).") },
              { symbol: "Razón MC", meaning: t("Margen de contribución como fracción del precio, en decimal (60 % = 0.60).", "Contribution margin as a fraction of price, in decimal form (60% = 0.60).") },
            ],
            steps: [
              t("Calcula la razón MC en decimal: (Precio − cv) ÷ Precio, o usa la razón promedio del negocio.", "Compute the CM ratio as a decimal: (Price − vc) ÷ Price, or use the business's average ratio."),
              t("Divide los costos fijos entre esa razón.", "Divide fixed costs by that ratio."),
            ],
            example: t("Una papelería vende cientos de artículos con una razón MC promedio de 40 % = 0.40 y fijos de $30,000 al mes. PE = 30,000 ÷ 0.40 = **$75,000** de ventas. Comprobación: 75,000 × 0.40 = 30,000, justo los fijos.", "A stationery store sells hundreds of items with an average CM ratio of 40% = 0.40 and fixed costs of $30,000 per month. BEP = 30,000 ÷ 0.40 = **$75,000** in sales. Check: 75,000 × 0.40 = 30,000, exactly the fixed costs."),
            interpret: t("Úsalo cuando vendes muchos productos distintos y es más fácil pensar en pesos que en piezas.", "Use it when you sell many different products and it is easier to think in pesos than in pieces."),
            mistake: t("Multiplicar los fijos por 1.40, como si el margen fuera un recargo. Se **divide** entre la razón en decimal.", "Multiplying fixed costs by 1.40, as if the margin were a markup. You **divide** by the ratio as a decimal."),
          },
        ],
      },
      {
        heading: t("Margen de seguridad y qué mueve el punto de equilibrio", "Margin of safety and what moves the break-even point"),
        body: [
          t(
            "El **margen de seguridad** es cuánto pueden caer tus ventas antes de llegar a pérdidas. Es la distancia entre tus ventas reales (o presupuestadas) y el punto de equilibrio, y se expresa en unidades, en pesos o en porcentaje de las ventas.",
            "The **margin of safety** is how much your sales can fall before reaching losses. It is the distance between your actual (or budgeted) sales and the break-even point, expressed in units, pesos or as a percentage of sales.",
          ),
          t(
            "El PE se mueve cuando cambian sus ingredientes: si suben los fijos o el costo variable, el PE **sube** (necesitas vender más); si sube el precio, el margen crece y el PE **baja**. El volumen que esperas vender no cambia el PE: cambia el margen de seguridad.",
            "The BEP moves when its ingredients change: if fixed costs or variable cost rise, the BEP **rises** (you need to sell more); if price rises, the margin grows and the BEP **falls**. The volume you expect to sell does not change the BEP: it changes the margin of safety.",
          ),
          t(
            "Mini ejemplo: si la cafetería vende 2,600 tazas y su PE es 2,000, su margen de seguridad es 600 tazas, es decir, 600 ÷ 2,600 ≈ 23.1 % de sus ventas.",
            "Mini example: if the coffee shop sells 2,600 cups and its BEP is 2,000, its margin of safety is 600 cups, that is, 600 ÷ 2,600 ≈ 23.1% of its sales.",
          ),
        ],
        formulas: [
          {
            name: t("Margen de seguridad", "Margin of safety"),
            expression: "MS unidades = Ventas − Ventas en PE;  MS pesos = MS unidades × Precio;  MS % = MS unidades ÷ Ventas × 100",
            variables: [
              { symbol: "MS", meaning: t("Margen de seguridad: cuánto pueden caer las ventas antes de perder.", "Margin of safety: how much sales can fall before losing money.") },
              { symbol: "Ventas", meaning: t("Unidades que vendes o planeas vender (reales o presupuestadas).", "Units you sell or plan to sell (actual or budgeted).") },
              { symbol: "Ventas en PE", meaning: t("Unidades del punto de equilibrio.", "Break-even units.") },
              { symbol: "Precio", meaning: t("Lo que cobras por cada unidad, en pesos.", "What you charge for each unit, in pesos.") },
            ],
            steps: [
              t("Resta: ventas − ventas en el punto de equilibrio. Eso es el MS en unidades.", "Subtract: sales − break-even sales. That is the MS in units."),
              t("Para pesos, multiplica el MS en unidades por el precio.", "For pesos, multiply the MS in units by the price."),
              t("Para porcentaje, divide el MS en unidades entre las **ventas** y multiplica por 100.", "For a percentage, divide the MS in units by **sales** and multiply by 100."),
            ],
            example: t("Un salón de uñas planea 240 servicios a $300 y su PE es 160. MS = 240 − 160 = **80 servicios**. En pesos: 80 × 300 = **$24,000**. En porcentaje: 80 ÷ 240 = 0.333 → **33.3 %**.", "A nail salon plans 240 services at $300 and its BEP is 160. MS = 240 − 160 = **80 services**. In pesos: 80 × 300 = **$24,000**. As a percentage: 80 ÷ 240 = 0.333 → **33.3%**."),
            interpret: t("Un 33 % quiere decir que las ventas pueden caer una tercera parte antes de entrar en pérdidas. Mientras más alto, más tranquilo; si es negativo, ya estás perdiendo.", "33% means sales can drop by a third before turning into losses. The higher it is, the safer; if it is negative, you are already losing."),
            mistake: t("Dividir entre el punto de equilibrio (80 ÷ 160) en lugar de entre las ventas. El porcentaje siempre se mide sobre las ventas.", "Dividing by the break-even point (80 ÷ 160) instead of by sales. The percentage is always measured on sales."),
          },
        ],
      },
      {
        heading: t("Punto de equilibrio con varios productos", "Break-even with several products"),
        body: [
          t(
            "Casi ningún negocio vende un solo producto. Cuando hay varios, se usa la **mezcla de ventas**: la proporción en que normalmente se venden. Por ejemplo, una panadería vende 3 panes dulces por cada pastel.",
            "Almost no business sells a single product. When there are several, you use the **sales mix**: the proportion in which they are normally sold. For example, a bakery sells 3 sweet breads for every cake.",
          ),
          t(
            "Truco práctico: arma un **paquete** con esa mezcla (3 panes + 1 pastel), calcula el margen del paquete y divide los fijos entre él. Así sabes cuántos paquetes necesitas y, multiplicando por la mezcla, cuántas unidades de cada producto.",
            "Practical trick: build a **bundle** with that mix (3 breads + 1 cake), compute the bundle's margin and divide fixed costs by it. That tells you how many bundles you need and, multiplying by the mix, how many units of each product.",
          ),
          t(
            "Ojo: si la mezcla cambia hacia productos de menor margen, el PE sube aunque vendas las mismas unidades totales.",
            "Careful: if the mix shifts toward lower-margin products, the BEP rises even if you sell the same total units.",
          ),
          t(
            "Mini ejemplo: pan dulce con margen de $7 y pastel con margen de $120; el paquete 3:1 deja 3 × 7 + 120 = $141.",
            "Mini example: sweet bread with a $7 margin and cake with a $120 margin; the 3:1 bundle leaves 3 × 7 + 120 = $141.",
          ),
        ],
        formulas: [
          {
            name: t("Punto de equilibrio con mezcla de ventas (paquetes)", "Break-even with a sales mix (bundles)"),
            expression: "MC del paquete = Σ (unidades en la mezcla × MC unitario);  PE paquetes = CF ÷ MC del paquete;  Unidades de cada producto = PE paquetes × unidades en la mezcla",
            variables: [
              { symbol: "MC del paquete", meaning: t("Lo que deja, en pesos, un paquete armado con la mezcla habitual de productos.", "What one bundle built with the usual product mix leaves, in pesos.") },
              { symbol: "Σ", meaning: t("«Suma de»: sumas el resultado de cada producto.", "\"Sum of\": you add up the result for each product.") },
              { symbol: "Unidades en la mezcla", meaning: t("Cuántas unidades de cada producto lleva el paquete (por ejemplo, 3 panes y 1 pastel).", "How many units of each product the bundle has (for example, 3 breads and 1 cake).") },
              { symbol: "MC unitario", meaning: t("Margen de contribución de una unidad de cada producto, en pesos.", "Contribution margin of one unit of each product, in pesos.") },
              { symbol: "PE paquetes", meaning: t("Cuántos paquetes completos hay que vender para no ganar ni perder.", "How many complete bundles must be sold to neither earn nor lose.") },
              { symbol: "CF", meaning: t("Costos fijos totales del periodo, en pesos: lo que pagas igual aunque produzcas más o menos (renta, sueldos fijos).", "Total fixed costs for the period, in pesos: what you pay the same whether you produce more or less (rent, fixed salaries).") },
            ],
            steps: [
              t("Arma el paquete con la mezcla: cuántas unidades de cada producto.", "Build the bundle with the mix: how many units of each product."),
              t("Multiplica cada MC unitario por sus unidades en el paquete y súmalos.", "Multiply each unit CM by its units in the bundle and add them up."),
              t("Divide los costos fijos entre el MC del paquete.", "Divide fixed costs by the bundle's CM."),
              t("Multiplica los paquetes por las unidades de cada producto en la mezcla.", "Multiply the bundles by each product's units in the mix."),
            ],
            example: t("Una taquería vende 4 tacos (MC $10 cada uno) por cada refresco (MC $8); fijos de $24,000. Paquete: 4 × 10 + 1 × 8 = **$48**. PE = 24,000 ÷ 48 = **500 paquetes**. Tacos: 500 × 4 = 2,000; refrescos: 500 × 1 = 500. Comprobación: 2,000 × 10 + 500 × 8 = 20,000 + 4,000 = 24,000.", "A taquería sells 4 tacos (CM $10 each) for every soda (CM $8); fixed costs of $24,000. Bundle: 4 × 10 + 1 × 8 = **$48**. BEP = 24,000 ÷ 48 = **500 bundles**. Tacos: 500 × 4 = 2,000; sodas: 500 × 1 = 500. Check: 2,000 × 10 + 500 × 8 = 20,000 + 4,000 = 24,000."),
            mistake: t("Invertir la mezcla (4 refrescos por taco) o repartir las unidades en partes iguales. Usa exactamente la proporción en que se venden.", "Reversing the mix (4 sodas per taco) or splitting units evenly. Use exactly the proportion in which they sell."),
          },
        ],
      },
    ],
    examples: [
      {
        title: t("Punto de equilibrio y margen de seguridad de una cafetería", "Break-even and margin of safety of a coffee shop"),
        problem: t(
          "Una cafetería vende tazas a $45, con costo variable de $18 y costos fijos de $54,000 al mes. Este mes vendió 2,600 tazas. Calcula el PE en tazas y en pesos y el margen de seguridad.",
          "A coffee shop sells cups at $45, with a variable cost of $18 and fixed costs of $54,000 per month. This month it sold 2,600 cups. Compute the BEP in cups and pesos and the margin of safety.",
        ),
        steps: [
          t("Margen unitario: 45 − 18 = $27; razón: 27 ÷ 45 = 0.60.", "Unit margin: 45 − 18 = $27; ratio: 27 ÷ 45 = 0.60."),
          t("PE en tazas: 54,000 ÷ 27 = 2,000.", "BEP in cups: 54,000 ÷ 27 = 2,000."),
          t("PE en pesos: 54,000 ÷ 0.60 = $90,000 (igual a 2,000 × 45).", "BEP in pesos: 54,000 ÷ 0.60 = $90,000 (same as 2,000 × 45)."),
          t("Margen de seguridad: 2,600 − 2,000 = 600 tazas, o 600 × 45 = $27,000.", "Margin of safety: 2,600 − 2,000 = 600 cups, or 600 × 45 = $27,000."),
          t("En porcentaje: 600 ÷ 2,600 ≈ 23.1 %.", "As a percentage: 600 ÷ 2,600 ≈ 23.1%."),
        ],
        result: t(
          "Necesita 2,000 tazas ($90,000) para no perder; sus ventas podrían caer alrededor de 23 % antes de entrar en pérdidas.",
          "It needs 2,000 cups ($90,000) to avoid losses; its sales could fall about 23% before turning into losses.",
        ),
      },
      {
        title: t("Panadería con dos productos", "Bakery with two products"),
        problem: t(
          "Una panadería vende pan dulce ($12 precio, $5 costo variable) y pasteles ($300 precio, $180 costo variable) en mezcla de 3 panes por cada pastel. Sus costos fijos son $28,200 al mes. ¿Cuántas unidades de cada producto necesita para el equilibrio?",
          "A bakery sells sweet bread ($12 price, $5 variable cost) and cakes ($300 price, $180 variable cost) in a mix of 3 breads per cake. Its fixed costs are $28,200 per month. How many units of each product does it need to break even?",
        ),
        steps: [
          t("Margen del pan: 12 − 5 = $7; margen del pastel: 300 − 180 = $120.", "Bread margin: 12 − 5 = $7; cake margin: 300 − 180 = $120."),
          t("Margen del paquete (3 panes + 1 pastel): 3 × 7 + 120 = $141.", "Bundle margin (3 breads + 1 cake): 3 × 7 + 120 = $141."),
          t("Paquetes en equilibrio: 28,200 ÷ 141 = 200.", "Break-even bundles: 28,200 ÷ 141 = 200."),
          t("Unidades: 200 × 3 = 600 panes y 200 × 1 = 200 pasteles.", "Units: 200 × 3 = 600 breads and 200 × 1 = 200 cakes."),
          t("Comprobación: 600 × 7 + 200 × 120 = 4,200 + 24,000 = $28,200.", "Check: 600 × 7 + 200 × 120 = 4,200 + 24,000 = $28,200."),
        ],
        result: t(
          "Con esa mezcla, el equilibrio está en 600 panes dulces y 200 pasteles al mes.",
          "With that mix, break-even is at 600 sweet breads and 200 cakes per month.",
        ),
      },
    ],
    keyPoints: [
      t("En el punto de equilibrio la utilidad es cero: ingresos = costos totales.", "At the break-even point profit is zero: revenue = total costs."),
      t("PE unidades = CF ÷ margen unitario; PE pesos = CF ÷ razón de margen.", "BEP units = FC ÷ unit margin; BEP pesos = FC ÷ margin ratio."),
      t("Redondea el PE en unidades hacia arriba.", "Round BEP in units up."),
      t("Margen de seguridad: cuánto pueden caer las ventas antes de perder.", "Margin of safety: how much sales can fall before losing."),
      t("Con varios productos, usa un paquete con la mezcla de ventas; si la mezcla cambia, el PE cambia.", "With several products, use a bundle with the sales mix; if the mix changes, the BEP changes."),
    ],
    exerciseIds: ['COS-09-E1', 'COS-09-E2', 'COS-09-E3', 'COS-09-E4', 'COS-09-E5', 'COS-09-E6'],
  },

  // ───────────────────────────── COS-10 ─────────────────────────────
  {
    id: 'COS-10',
    level: 3,
    topicIds: ['COS.10'],
    title: t("Presupuestos operativos", "Operating budgets"),
    summary: t(
      "Los presupuestos operativos traducen el plan de ventas en cuánto producir, cuánto material comprar, cuánta mano de obra contratar y cuánto gastar, en una cadena donde cada presupuesto alimenta al siguiente.",
      "Operating budgets translate the sales plan into how much to produce, how much material to buy, how much labor to hire and how much to spend, in a chain where each budget feeds the next.",
    ),
    minutes: 17,
    objectives: [
      t("Describir el presupuesto maestro y el orden en que se elaboran los presupuestos operativos.", "Describe the master budget and the order in which operating budgets are prepared."),
      t("Elaborar el presupuesto de producción a partir de las ventas y los inventarios deseados.", "Prepare the production budget from sales and desired inventories."),
      t("Calcular los presupuestos de compra de materiales y de mano de obra directa.", "Compute the materials purchases and direct labor budgets."),
    ],
    theory: [
      {
        heading: t("El presupuesto maestro y su cadena", "The master budget and its chain"),
        body: [
          t(
            "Un **presupuesto** es un plan expresado en dinero y cantidades para un periodo futuro, por ejemplo el próximo año. Sirve para **coordinar** áreas (que producción fabrique lo que ventas espera vender), anticipar necesidades de efectivo y luego **comparar** lo real contra lo planeado.",
            "A **budget** is a plan expressed in money and quantities for a future period, for example next year. It helps **coordinate** areas (so production makes what sales expects to sell), anticipate cash needs and later **compare** actual against plan.",
          ),
          t(
            "El conjunto completo se llama **presupuesto maestro**. Tiene dos partes: los **presupuestos operativos** (ventas, producción, materiales, mano de obra, gastos indirectos, costo de ventas, gastos de operación y estado de resultados presupuestado) y los **financieros** (flujo de efectivo, inversiones y estado de situación presupuestado).",
            "The full set is called the **master budget**. It has two parts: **operating budgets** (sales, production, materials, labor, overhead, cost of sales, operating expenses and budgeted income statement) and **financial budgets** (cash flow, capital investments and budgeted balance sheet).",
          ),
          t(
            "Todo arranca con el **presupuesto de ventas**, porque casi todo lo demás depende de cuánto se espera vender. Un pronóstico de ventas exagerado contamina toda la cadena.",
            "Everything starts with the **sales budget**, because almost everything else depends on how much you expect to sell. An inflated sales forecast contaminates the whole chain.",
          ),
          t(
            "Mini ejemplo: una fábrica de sillas espera vender 5,000 sillas a $800: su presupuesto de ventas es $4,000,000, y de ahí parte su plan de producción.",
            "Mini example: a chair factory expects to sell 5,000 chairs at $800: its sales budget is $4,000,000, and its production plan starts from there.",
          ),
        ],
        bullets: [
          t("1. Ventas (unidades y pesos).", "1. Sales (units and pesos)."),
          t("2. Producción (unidades).", "2. Production (units)."),
          t("3. Materiales, mano de obra directa y gastos indirectos.", "3. Materials, direct labor and overhead."),
          t("4. Costo de ventas y gastos de operación.", "4. Cost of sales and operating expenses."),
          t("5. Estado de resultados presupuestado.", "5. Budgeted income statement."),
        ],
      },
      {
        heading: t("Presupuesto de producción", "Production budget"),
        body: [
          t(
            "Producción no fabrica exactamente lo que se vende: también debe dejar un **inventario final** de reserva para no quedarse sin producto, y puede aprovechar el **inventario inicial** que ya tiene en bodega.",
            "Production does not make exactly what is sold: it must also leave an **ending inventory** as a buffer so it does not run out, and it can use the **beginning inventory** already in the warehouse.",
          ),
          t(
            "Por eso: unidades a producir = ventas esperadas + inventario final deseado − inventario inicial. Si quieres terminar con más inventario del que tienes hoy, fabricarás más de lo que vendes; si quieres reducirlo, fabricarás menos.",
            "So: units to produce = expected sales + desired ending inventory − beginning inventory. If you want to end with more inventory than you have today, you will make more than you sell; if you want to reduce it, you will make less.",
          ),
          t(
            "Mini ejemplo: ventas de 5,000 sillas, inventario final deseado de 800 e inicial de 600: producción = 5,000 + 800 − 600 = 5,200 sillas.",
            "Mini example: sales of 5,000 chairs, desired ending inventory of 800 and beginning of 600: production = 5,000 + 800 − 600 = 5,200 chairs.",
          ),
        ],
        formulas: [
          {
            name: t("Unidades a producir", "Units to produce"),
            expression: "Producción = Ventas + Inventario final deseado − Inventario inicial",
            variables: [
              { symbol: "Producción", meaning: t("Unidades que debes fabricar en el periodo.", "Units you must make in the period.") },
              { symbol: "Ventas", meaning: t("Unidades que esperas vender en el periodo.", "Units you expect to sell in the period.") },
              { symbol: "Inventario final deseado", meaning: t("Unidades que quieres tener en bodega al terminar el periodo, como reserva.", "Units you want in the warehouse at the end of the period, as a buffer.") },
              { symbol: "Inventario inicial", meaning: t("Unidades que ya tienes en bodega al empezar.", "Units you already have in the warehouse at the start.") },
            ],
            steps: [
              t("Suma las ventas esperadas y el inventario final que quieres: eso es lo que necesitas en total.", "Add expected sales and the ending inventory you want: that is what you need in total."),
              t("Réstale lo que ya tienes en bodega (inventario inicial).", "Subtract what you already have in the warehouse (beginning inventory)."),
            ],
            example: t("Una fábrica de piñatas espera vender 3,000; tiene 400 en bodega y quiere terminar con 250. Necesidades: 3,000 + 250 = 3,250. Producción: 3,250 − 400 = **2,850 piñatas**.", "A piñata factory expects to sell 3,000; it has 400 in the warehouse and wants to end with 250. Needs: 3,000 + 250 = 3,250. Production: 3,250 − 400 = **2,850 piñatas**."),
            interpret: t("Si produce menos de lo que vende, está bajando su inventario; si produce más, lo está aumentando.", "If it produces less than it sells, it is lowering its inventory; if it produces more, it is raising it."),
            mistake: t("Invertir los inventarios: sumar el inicial y restar el final.", "Reversing the inventories: adding the beginning one and subtracting the ending one."),
          },
        ],
      },
      {
        heading: t("Materiales, mano de obra y gastos", "Materials, labor and expenses"),
        body: [
          t(
            "El **presupuesto de materiales** usa la misma lógica, pero con la materia prima. Primero calculas cuánto material necesita la producción (unidades a producir × material por unidad); luego ajustas por inventarios de materia prima para saber cuánto **comprar**.",
            "The **materials budget** uses the same logic, but with raw materials. First you compute how much material production needs (units to produce × material per unit); then you adjust for raw-material inventories to know how much to **purchase**.",
          ),
          t(
            "El **presupuesto de mano de obra directa** multiplica las unidades a producir por las horas que lleva cada una y por la tarifa por hora. Así sabes cuántas personas y cuántas horas necesitarás.",
            "The **direct labor budget** multiplies units to produce by the hours each one takes and by the hourly rate. That tells you how many people and hours you will need.",
          ),
          t(
            "Después vienen los **gastos indirectos de fabricación** y los **gastos de venta y administración**, que suelen presupuestarse con una parte fija y una variable. Todo desemboca en el estado de resultados presupuestado.",
            "Then come **manufacturing overhead** and **selling and administrative expenses**, usually budgeted with a fixed part and a variable part. Everything flows into the budgeted income statement.",
          ),
          t(
            "Mini ejemplo: 5,200 sillas × 1.5 horas × $100 la hora = $780,000 de mano de obra directa.",
            "Mini example: 5,200 chairs × 1.5 hours × $100 per hour = $780,000 of direct labor.",
          ),
        ],
        formulas: [
          {
            name: t("Compras de materia prima", "Raw material purchases"),
            expression: "Material requerido = Unidades a producir × Material por unidad;  Compras = Material requerido + Inv. final deseado de material − Inv. inicial de material;  Costo de compras = Compras × Costo por unidad de material",
            variables: [
              { symbol: "Material requerido", meaning: t("Cantidad de material que consume la producción (kilos, metros).", "Amount of material production uses (kilos, meters).") },
              { symbol: "Unidades a producir", meaning: t("Lo que salió del presupuesto de producción.", "What came out of the production budget.") },
              { symbol: "Material por unidad", meaning: t("Cuánto material lleva cada producto (por ejemplo, 2 metros de tela).", "How much material each product uses (for example, 2 meters of fabric).") },
              { symbol: "Inv. final deseado de material", meaning: t("Material que quieres que sobre en bodega al final, como reserva.", "Material you want left in the warehouse at the end, as a buffer.") },
              { symbol: "Inv. inicial de material", meaning: t("Material que ya tienes en bodega al empezar.", "Material you already have in the warehouse at the start.") },
              { symbol: "Costo por unidad de material", meaning: t("Precio de cada kilo o metro, en pesos.", "Price of each kilo or meter, in pesos.") },
            ],
            steps: [
              t("Calcula el material requerido: unidades a producir × material por unidad.", "Compute the material required: units to produce × material per unit."),
              t("Súmale el inventario final deseado de material.", "Add the desired ending material inventory."),
              t("Réstale el material que ya tienes: esa es la cantidad a comprar.", "Subtract the material you already have: that is the quantity to buy."),
              t("Multiplica la cantidad a comprar por el precio del material.", "Multiply the quantity to buy by the material's price."),
            ],
            example: t("Las 2,850 piñatas llevan 0.5 kg de papel cada una, a $40 el kilo; hay 300 kg en bodega y se quiere terminar con 200 kg. Requerido: 2,850 × 0.5 = 1,425 kg. Compras: 1,425 + 200 − 300 = **1,325 kg**. Costo: 1,325 × 40 = **$53,000**.", "The 2,850 piñatas use 0.5 kg of paper each, at $40 per kilo; there are 300 kg in stock and the goal is to end with 200 kg. Required: 2,850 × 0.5 = 1,425 kg. Purchases: 1,425 + 200 − 300 = **1,325 kg**. Cost: 1,325 × 40 = **$53,000**."),
            mistake: t("Comprar solo el material requerido, sin descontar lo que ya hay en bodega ni dejar la reserva final.", "Buying only the material required, without subtracting what is already in stock or leaving the ending buffer."),
          },
          {
            name: t("Presupuesto de mano de obra directa (MOD)", "Direct labor budget"),
            expression: "MOD = Unidades a producir × Horas por unidad × Tarifa por hora",
            variables: [
              { symbol: "MOD", meaning: t("Lo que costará pagar a quienes fabrican el producto, en pesos.", "What it will cost to pay the people who make the product, in pesos.") },
              { symbol: "Unidades a producir", meaning: t("Lo que salió del presupuesto de producción.", "What came out of the production budget.") },
              { symbol: "Horas por unidad", meaning: t("Tiempo de trabajo que lleva cada producto, en horas (0.5 = media hora).", "Work time each product takes, in hours (0.5 = half an hour).") },
              { symbol: "Tarifa por hora", meaning: t("Lo que se paga por cada hora de trabajo, en pesos.", "What is paid for each hour of work, in pesos.") },
            ],
            steps: [
              t("Multiplica las unidades a producir por las horas que lleva cada una: ese es el total de horas.", "Multiply units to produce by the hours each one takes: that is total hours."),
              t("Multiplica el total de horas por la tarifa por hora.", "Multiply total hours by the hourly rate."),
            ],
            example: t("Las 2,850 piñatas llevan 0.4 horas cada una y la hora se paga a $80. Horas: 2,850 × 0.4 = 1,140. Costo: 1,140 × 80 = **$91,200**.", "The 2,850 piñatas take 0.4 hours each and the hour is paid at $80. Hours: 2,850 × 0.4 = 1,140. Cost: 1,140 × 80 = **$91,200**."),
            interpret: t("El total de horas también te dice cuánta gente necesitas: 1,140 horas ÷ 160 horas al mes por persona ≈ 7 personas.", "Total hours also tells you how many people you need: 1,140 hours ÷ 160 hours a month per person ≈ 7 people."),
            mistake: t("Multiplicar las unidades por la tarifa y olvidar las horas por unidad.", "Multiplying units by the rate and forgetting the hours per unit."),
          },
        ],
      },
    ],
    examples: [
      {
        title: t("Presupuesto de producción de una fábrica de sillas", "Production budget for a chair factory"),
        problem: t(
          "Una fábrica espera vender 5,000 sillas en el trimestre. Tiene 600 sillas en bodega y quiere terminar el trimestre con 800. ¿Cuántas debe producir?",
          "A factory expects to sell 5,000 chairs in the quarter. It has 600 chairs in the warehouse and wants to end the quarter with 800. How many must it produce?",
        ),
        steps: [
          t("Necesidades totales: ventas + inventario final = 5,000 + 800 = 5,800 sillas.", "Total needs: sales + ending inventory = 5,000 + 800 = 5,800 chairs."),
          t("Menos lo que ya tiene: 5,800 − 600 = 5,200 sillas.", "Less what it already has: 5,800 − 600 = 5,200 chairs."),
        ],
        result: t(
          "Debe producir 5,200 sillas: 200 más de lo que vende, porque quiere aumentar su inventario de 600 a 800.",
          "It must produce 5,200 chairs: 200 more than it sells, because it wants to raise its inventory from 600 to 800.",
        ),
      },
      {
        title: t("Compras de madera para las sillas", "Wood purchases for the chairs"),
        problem: t(
          "Cada silla lleva 3 kg de madera, que cuesta $20 el kilo. Para producir 5,200 sillas, la fábrica tiene 1,400 kg de madera en bodega y quiere terminar con 1,000 kg. ¿Cuántos kilos debe comprar y cuánto costarán?",
          "Each chair uses 3 kg of wood, costing $20 per kilo. To produce 5,200 chairs, the factory has 1,400 kg of wood in stock and wants to end with 1,000 kg. How many kilos must it buy and how much will they cost?",
        ),
        steps: [
          t("Madera requerida: 5,200 × 3 = 15,600 kg.", "Wood required: 5,200 × 3 = 15,600 kg."),
          t("Más inventario final deseado: 15,600 + 1,000 = 16,600 kg.", "Plus desired ending inventory: 15,600 + 1,000 = 16,600 kg."),
          t("Menos inventario inicial: 16,600 − 1,400 = 15,200 kg a comprar.", "Less beginning inventory: 16,600 − 1,400 = 15,200 kg to buy."),
          t("Costo: 15,200 × 20 = $304,000.", "Cost: 15,200 × 20 = $304,000."),
        ],
        result: t(
          "Debe comprar 15,200 kg de madera por $304,000.",
          "It must buy 15,200 kg of wood for $304,000.",
        ),
      },
    ],
    keyPoints: [
      t("El presupuesto maestro une presupuestos operativos y financieros.", "The master budget combines operating and financial budgets."),
      t("Todo empieza con el presupuesto de ventas.", "Everything starts with the sales budget."),
      t("Producción = ventas + inventario final deseado − inventario inicial.", "Production = sales + desired ending inventory − beginning inventory."),
      t("Compras de material: material requerido + inventario final − inventario inicial de material.", "Material purchases: material required + ending − beginning material inventory."),
      t("MOD presupuestada = unidades × horas por unidad × tarifa por hora.", "Budgeted direct labor = units × hours per unit × hourly rate."),
    ],
    exerciseIds: ['COS-10-E1', 'COS-10-E2', 'COS-10-E3', 'COS-10-E4', 'COS-10-E5', 'COS-10-E6'],
  },

  // ───────────────────────────── COS-11 ─────────────────────────────
  {
    id: 'COS-11',
    level: 3,
    topicIds: ['COS.11'],
    title: t("Contabilidad administrativa", "Managerial accounting"),
    summary: t(
      "La contabilidad administrativa prepara información a la medida para que quienes dirigen el negocio planeen, controlen y decidan; una de sus herramientas clave es el costeo directo con enfoque de contribución.",
      "Managerial accounting prepares tailored information so those who run the business can plan, control and decide; one of its key tools is direct (variable) costing with a contribution approach.",
    ),
    minutes: 18,
    objectives: [
      t("Distinguir la contabilidad administrativa de la financiera por usuarios, reglas, enfoque y detalle.", "Distinguish managerial from financial accounting by users, rules, focus and detail."),
      t("Explicar las funciones de planeación, control y toma de decisiones que apoya la información administrativa.", "Explain the planning, control and decision-making functions that managerial information supports."),
      t("Preparar un estado de resultados con costeo directo y explicar su diferencia con el costeo absorbente.", "Prepare an income statement under direct costing and explain its difference from absorption costing."),
    ],
    theory: [
      {
        heading: t("Qué es y en qué se distingue de la financiera", "What it is and how it differs from financial accounting"),
        body: [
          t(
            "La **contabilidad administrativa** es la que produce información para los **usuarios internos**: dueños, directores y gerentes que necesitan decidir. La **financiera** produce estados generales para usuarios externos como bancos, inversionistas o autoridades.",
            "**Managerial accounting** produces information for **internal users**: owners, directors and managers who need to decide. **Financial accounting** produces general statements for external users such as banks, investors or authorities.",
          ),
          t(
            "Como es para uso interno, la administrativa **no está obligada** a seguir las NIF: puede usar el formato que más ayude. Mira al **futuro** (presupuestos, proyecciones) además del pasado, trabaja por **segmentos** (producto, sucursal, cliente) y prefiere la **oportunidad**: un dato aproximado a tiempo vale más que uno exacto tarde.",
            "Since it is for internal use, managerial accounting **is not required** to follow NIF: it can use whatever format helps most. It looks to the **future** (budgets, projections) as well as the past, works by **segments** (product, branch, customer) and favors **timeliness**: an approximate figure on time is worth more than an exact one too late.",
          ),
          t(
            "Mini ejemplo: una cadena de farmacias publica estados financieros anuales para su banco (financiera), pero cada lunes su director revisa un reporte de ventas y margen por sucursal (administrativa).",
            "Mini example: a pharmacy chain publishes annual financial statements for its bank (financial), but every Monday its director reviews a sales and margin report by branch (managerial).",
          ),
        ],
        bullets: [
          t("Usuarios: internos (administrativa) vs. externos (financiera).", "Users: internal (managerial) vs. external (financial)."),
          t("Reglas: libre formato vs. NIF obligatorias.", "Rules: free format vs. mandatory NIF."),
          t("Tiempo: pasado y futuro vs. principalmente pasado.", "Time: past and future vs. mainly past."),
          t("Detalle: por segmento vs. empresa en conjunto.", "Detail: by segment vs. the company as a whole."),
        ],
      },
      {
        heading: t("Para qué sirve: planear, controlar y decidir", "What it is for: planning, controlling and deciding"),
        body: [
          t(
            "**Planear** es fijar metas y la forma de lograrlas: aquí entran los presupuestos y el análisis costo-volumen-utilidad. **Controlar** es comparar lo real con lo planeado y corregir a tiempo. **Decidir** es elegir entre alternativas con la información relevante.",
            "**Planning** is setting goals and how to reach them: budgets and cost-volume-profit analysis come in here. **Controlling** is comparing actual with plan and correcting in time. **Deciding** is choosing between alternatives with the relevant information.",
          ),
          t(
            "En empresas medianas y grandes, quien coordina esta información suele ser el **contralor**: diseña los reportes internos, cuida los costos y apoya a la dirección. En un negocio pequeño, ese papel lo hace el propio dueño o su contador.",
            "In medium and large companies, the person who coordinates this information is usually the **controller**: designs internal reports, watches costs and supports management. In a small business, the owner or their accountant plays that role.",
          ),
          t(
            "Mini ejemplo: una taquería planea vender 9,000 tacos al mes (planear), revisa cada semana cuántos vendió y cuánto gastó en carne (controlar) y, con eso, evalúa si abrir en la noche (decidir).",
            "Mini example: a taquería plans to sell 9,000 tacos a month (planning), checks every week how many it sold and how much it spent on meat (controlling) and, with that, evaluates whether to open at night (deciding).",
          ),
        ],
      },
      {
        heading: t("Costeo directo frente a costeo absorbente", "Direct costing versus absorption costing"),
        body: [
          t(
            "En palabras sencillas: son dos formas de calcular cuánto cuesta cada producto. La diferencia está en los costos fijos de la fábrica (la renta de la nave, el sueldo del supervisor): ¿se reparten entre los productos o se restan completos en el mes?",
            "In simple words: these are two ways to compute what each product costs. The difference lies in the factory's fixed costs (the plant's rent, the supervisor's salary): are they spread over the products, or subtracted in full in the month?",
          ),
          t(
            "En el **costeo absorbente**, el costo de cada unidad incluye los materiales, la mano de obra y **todos** los gastos de fabricación, también los fijos. Es el enfoque que exigen los estados financieros para terceros.",
            "Under **absorption costing**, each unit's cost includes materials, labor and **all** manufacturing overhead, including fixed overhead. It is the approach required for financial statements for third parties.",
          ),
          t(
            "En el **costeo directo** (o variable), el producto solo carga sus costos de fabricación **variables**; los fijos de fabricación se tratan como gasto del periodo. El estado de resultados muestra primero el **margen de contribución** y luego resta todos los fijos. Es muy útil para decidir porque separa lo que cambia con el volumen de lo que no.",
            "Under **direct (variable) costing**, the product carries only its **variable** manufacturing costs; fixed manufacturing overhead is treated as a period expense. The income statement first shows the **contribution margin** and then subtracts all fixed costs. It is very useful for decisions because it separates what changes with volume from what does not.",
          ),
          t(
            "Si produces más de lo que vendes, el absorbente deja parte de los fijos «guardados» en el inventario y muestra **más utilidad**. Si vendes más de lo que produces, pasa lo contrario. Si producción y ventas son iguales, ambas utilidades coinciden.",
            "If you produce more than you sell, absorption costing leaves part of the fixed overhead «stored» in inventory and shows **more profit**. If you sell more than you produce, the opposite happens. If production and sales are equal, both profits match.",
          ),
          t(
            "Mini ejemplo: si quedan 2,000 unidades en inventario y el fijo de fabricación por unidad es $15, la utilidad absorbente supera a la directa en 2,000 × 15 = $30,000.",
            "Mini example: if 2,000 units remain in inventory and fixed manufacturing overhead per unit is $15, absorption profit exceeds direct-costing profit by 2,000 × 15 = $30,000.",
          ),
        ],
        formulas: [
          {
            name: t("Utilidad con costeo directo", "Profit under direct costing"),
            expression: "Utilidad (directo) = Ventas − Costos variables de lo vendido − Costos fijos totales",
            variables: [
              { symbol: "Ventas", meaning: t("Unidades vendidas × precio, en pesos.", "Units sold × price, in pesos.") },
              { symbol: "Costos variables de lo vendido", meaning: t("Unidades vendidas × (cv de fabricación + gasto variable de venta por unidad), en pesos.", "Units sold × (variable manufacturing cost + variable selling expense per unit), in pesos.") },
              { symbol: "Costos fijos totales", meaning: t("Todos los fijos del periodo, en pesos: los de fabricación y los de operación (administración, venta).", "All fixed costs of the period, in pesos: manufacturing and operating (administration, selling).") },
            ],
            steps: [
              t("Calcula las ventas: unidades vendidas × precio.", "Compute sales: units sold × price."),
              t("Calcula los costos variables de lo **vendido** y réstalos: eso es el margen de contribución.", "Compute variable costs of what was **sold** and subtract them: that is the contribution margin."),
              t("Suma **todos** los fijos (fabricación + operación) y réstalos completos.", "Add **all** fixed costs (manufacturing + operating) and subtract them in full."),
            ],
            example: t("Una fábrica de sillas produce 2,000 y vende 1,600 a $500. cv de fabricación $200; fijos de fabricación $120,000; fijos de operación $40,000. Ventas: 1,600 × 500 = 800,000. Variables: 1,600 × 200 = 320,000. MC: 800,000 − 320,000 = 480,000. Fijos: 120,000 + 40,000 = 160,000. Utilidad: 480,000 − 160,000 = **$320,000**.", "A chair factory produces 2,000 and sells 1,600 at $500. Variable manufacturing cost $200; fixed manufacturing overhead $120,000; fixed operating expenses $40,000. Sales: 1,600 × 500 = 800,000. Variable: 1,600 × 200 = 320,000. CM: 800,000 − 320,000 = 480,000. Fixed: 120,000 + 40,000 = 160,000. Profit: 480,000 − 160,000 = **$320,000**."),
            mistake: t("Calcular los variables con las unidades producidas en lugar de las vendidas.", "Computing variable costs with units produced instead of units sold."),
          },
          {
            name: t("Costo unitario con costeo absorbente", "Unit cost under absorption costing"),
            expression: "Costo unitario (absorbente) = cv de fabricación + CF de fabricación ÷ Unidades producidas",
            variables: [
              { symbol: "cv de fabricación", meaning: t("Costo variable de fabricar una unidad (material, mano de obra, indirectos variables), en pesos.", "Variable cost of making one unit (materials, labor, variable overhead), in pesos.") },
              { symbol: "CF de fabricación", meaning: t("Gastos fijos de la fábrica en el periodo, en pesos (no incluye administración ni ventas).", "The factory's fixed overhead for the period, in pesos (excludes administration and selling).") },
              { symbol: "Unidades producidas", meaning: t("Las que fabricaste en el periodo.", "The units you made in the period.") },
            ],
            steps: [
              t("Reparte los fijos de fabricación entre las unidades **producidas**.", "Spread fixed manufacturing overhead over the units **produced**."),
              t("Súmale el costo variable de fabricación por unidad.", "Add the variable manufacturing cost per unit."),
            ],
            example: t("Fábrica de sillas: 120,000 ÷ 2,000 = 60 de fijo por silla; 200 + 60 = **$260 por silla**.", "Chair factory: 120,000 ÷ 2,000 = 60 of fixed overhead per chair; 200 + 60 = **$260 per chair**."),
            mistake: t("Dividir los fijos entre las unidades **vendidas**. Se reparten entre todo lo que se fabricó.", "Dividing fixed overhead by units **sold**. It is spread over everything that was made."),
          },
          {
            name: t("Utilidad con costeo absorbente", "Profit under absorption costing"),
            expression: "Utilidad (absorbente) = Ventas − Unidades vendidas × Costo unitario absorbente − Gastos de operación",
            variables: [
              { symbol: "Ventas", meaning: t("Unidades vendidas × precio, en pesos.", "Units sold × price, in pesos.") },
              { symbol: "Unidades vendidas", meaning: t("Las que vendiste en el periodo.", "The units you sold in the period.") },
              { symbol: "Costo unitario absorbente", meaning: t("cv de fabricación + fijo de fabricación por unidad, en pesos.", "Variable manufacturing cost + fixed overhead per unit, in pesos.") },
              { symbol: "Gastos de operación", meaning: t("Gastos de venta y administración, fijos y variables, en pesos.", "Selling and administrative expenses, fixed and variable, in pesos.") },
            ],
            steps: [
              t("Calcula el costo de ventas: unidades vendidas × costo unitario absorbente.", "Compute cost of sales: units sold × absorption unit cost."),
              t("Resta el costo de ventas a las ventas: eso es la utilidad bruta.", "Subtract cost of sales from sales: that is gross profit."),
              t("Resta los gastos de operación (los de fabricación ya van dentro del costo).", "Subtract operating expenses (manufacturing costs are already in the cost)."),
            ],
            example: t("Fábrica de sillas: costo de ventas 1,600 × 260 = 416,000. Utilidad bruta: 800,000 − 416,000 = 384,000. Menos operación: 384,000 − 40,000 = **$344,000**.", "Chair factory: cost of sales 1,600 × 260 = 416,000. Gross profit: 800,000 − 416,000 = 384,000. Less operating expenses: 384,000 − 40,000 = **$344,000**."),
            mistake: t("Restar otra vez los fijos de fabricación completos: ya están dentro del costo unitario y se contarían dos veces.", "Subtracting the full fixed manufacturing overhead again: it is already inside the unit cost and would be counted twice."),
          },
          {
            name: t("Diferencia entre las dos utilidades", "Difference between the two profits"),
            expression: "Diferencia de utilidad = (Unidades producidas − Unidades vendidas) × CF de fabricación por unidad",
            variables: [
              { symbol: "Unidades producidas", meaning: t("Las que fabricaste en el periodo.", "The units you made in the period.") },
              { symbol: "Unidades vendidas", meaning: t("Las que vendiste en el periodo.", "The units you sold in the period.") },
              { symbol: "CF de fabricación por unidad", meaning: t("Gastos fijos de fabricación ÷ unidades producidas, en pesos.", "Fixed manufacturing overhead ÷ units produced, in pesos.") },
            ],
            steps: [
              t("Calcula el fijo de fabricación por unidad: CF de fabricación ÷ unidades producidas.", "Compute fixed overhead per unit: fixed manufacturing overhead ÷ units produced."),
              t("Calcula cuántas unidades quedaron en inventario: producidas − vendidas.", "Compute how many units remained in inventory: produced − sold."),
              t("Multiplica esas unidades por el fijo por unidad.", "Multiply those units by the fixed cost per unit."),
            ],
            example: t("Fábrica de sillas: fijo por silla 120,000 ÷ 2,000 = 60. Quedaron 2,000 − 1,600 = 400 sillas. Diferencia: 400 × 60 = **$24,000**, igual a 344,000 − 320,000.", "Chair factory: fixed cost per chair 120,000 ÷ 2,000 = 60. 400 chairs remained (2,000 − 1,600). Difference: 400 × 60 = **$24,000**, equal to 344,000 − 320,000."),
            interpret: t("Si el resultado es positivo (se produjo más de lo vendido), el absorbente muestra más utilidad; si es negativo, el directo muestra más; si es cero, son iguales.", "If the result is positive (more was produced than sold), absorption shows more profit; if negative, direct costing shows more; if zero, they are equal."),
            mistake: t("Repartir los fijos entre las unidades vendidas en lugar de las producidas.", "Spreading fixed overhead over units sold instead of units produced."),
          },
        ],
      },
    ],
    examples: [
      {
        title: t("Dos estados de resultados para la misma empresa", "Two income statements for the same company"),
        problem: t(
          "Una empresa produce 10,000 unidades y vende 8,000 a $100. Costo variable de fabricación: $40 por unidad. Gastos fijos de fabricación: $150,000. Gasto variable de venta: $5 por unidad vendida. Gastos fijos de administración: $60,000. No había inventario inicial. Calcula la utilidad con costeo directo y con costeo absorbente.",
          "A company produces 10,000 units and sells 8,000 at $100. Variable manufacturing cost: $40 per unit. Fixed manufacturing overhead: $150,000. Variable selling expense: $5 per unit sold. Fixed administrative expenses: $60,000. There was no beginning inventory. Compute profit under direct and absorption costing.",
        ),
        steps: [
          t("Ventas: 8,000 × 100 = $800,000.", "Sales: 8,000 × 100 = $800,000."),
          t("Directo: costos variables 8,000 × (40 + 5) = $360,000; margen de contribución $440,000; fijos 150,000 + 60,000 = $210,000; utilidad $230,000.", "Direct: variable costs 8,000 × (40 + 5) = $360,000; contribution margin $440,000; fixed 150,000 + 60,000 = $210,000; profit $230,000."),
          t("Absorbente: costo unitario 40 + 150,000 ÷ 10,000 = 40 + 15 = $55; costo de ventas 8,000 × 55 = $440,000; utilidad bruta $360,000.", "Absorption: unit cost 40 + 150,000 ÷ 10,000 = 40 + 15 = $55; cost of sales 8,000 × 55 = $440,000; gross profit $360,000."),
          t("Gastos de operación: 8,000 × 5 + 60,000 = $100,000; utilidad absorbente: 360,000 − 100,000 = $260,000.", "Operating expenses: 8,000 × 5 + 60,000 = $100,000; absorption profit: 360,000 − 100,000 = $260,000."),
          t("Diferencia: 260,000 − 230,000 = $30,000 = 2,000 unidades en inventario × $15.", "Difference: 260,000 − 230,000 = $30,000 = 2,000 units in inventory × $15."),
        ],
        result: t(
          "Directo: $230,000; absorbente: $260,000. La diferencia son los $30,000 de fijos que el absorbente dejó en el inventario final.",
          "Direct: $230,000; absorption: $260,000. The difference is the $30,000 of fixed overhead that absorption costing left in ending inventory.",
        ),
      },
      {
        title: t("Reporte por sucursal para la dirección", "Branch report for management"),
        problem: t(
          "Una zapatería tiene dos sucursales. Centro: ventas $300,000, costos variables $180,000, fijos propios $70,000. Norte: ventas $200,000, costos variables $110,000, fijos propios $100,000. Los fijos comunes (oficina central) son $30,000. Prepara un reporte con enfoque de contribución.",
          "A shoe store has two branches. Downtown: sales $300,000, variable costs $180,000, own fixed costs $70,000. North: sales $200,000, variable costs $110,000, own fixed costs $100,000. Common fixed costs (head office) are $30,000. Prepare a contribution-approach report.",
        ),
        steps: [
          t("Margen de contribución: Centro 300,000 − 180,000 = $120,000; Norte 200,000 − 110,000 = $90,000.", "Contribution margin: Downtown 300,000 − 180,000 = $120,000; North 200,000 − 110,000 = $90,000."),
          t("Margen de la sucursal (menos fijos propios): Centro 120,000 − 70,000 = $50,000; Norte 90,000 − 100,000 = −$10,000.", "Branch margin (less own fixed costs): Downtown 120,000 − 70,000 = $50,000; North 90,000 − 100,000 = −$10,000."),
          t("Utilidad de la empresa: 50,000 − 10,000 − 30,000 = $10,000.", "Company profit: 50,000 − 10,000 − 30,000 = $10,000."),
        ],
        result: t(
          "La sucursal Norte no cubre sus propios fijos; el reporte, que no exige ninguna norma, le da a la dirección una alerta clara para investigar.",
          "The North branch does not cover its own fixed costs; the report, which no standard requires, gives management a clear warning to investigate.",
        ),
      },
    ],
    keyPoints: [
      t("La contabilidad administrativa sirve a usuarios internos y no está obligada a seguir las NIF.", "Managerial accounting serves internal users and is not required to follow NIF."),
      t("Mira al futuro, trabaja por segmentos y privilegia la oportunidad.", "It looks to the future, works by segments and favors timeliness."),
      t("Apoya tres funciones: planear, controlar y decidir.", "It supports three functions: planning, controlling and deciding."),
      t("Costeo directo: solo costos variables al producto; fijos de fabricación al periodo.", "Direct costing: only variable costs to the product; fixed overhead to the period."),
      t("Si la producción supera a las ventas, el absorbente muestra más utilidad que el directo.", "If production exceeds sales, absorption costing shows more profit than direct costing."),
    ],
    normativeNote: NOTE_MANAGERIAL,
    exerciseIds: ['COS-11-E1', 'COS-11-E2', 'COS-11-E3', 'COS-11-E4', 'COS-11-E5', 'COS-11-E6'],
  },

  // ───────────────────────────── COS-12 ─────────────────────────────
  {
    id: 'COS-12',
    level: 3,
    topicIds: ['COS.12'],
    title: t("Control presupuestal y de gestión", "Budgetary and management control"),
    summary: t(
      "El control presupuestal compara lo real con lo planeado, usa presupuestos flexibles para que la comparación sea justa y asigna cada resultado al responsable que lo puede controlar.",
      "Budgetary control compares actual with plan, uses flexible budgets so the comparison is fair, and assigns each result to the manager who can control it.",
    ),
    minutes: 17,
    objectives: [
      t("Describir el ciclo de control y clasificar variaciones como favorables o desfavorables.", "Describe the control cycle and classify variances as favorable or unfavorable."),
      t("Preparar un presupuesto flexible y separar la variación por volumen de la variación de gestión.", "Prepare a flexible budget and separate the volume variance from the management (flexible-budget) variance."),
      t("Identificar los tipos de centros de responsabilidad y aplicar la gestión por excepción.", "Identify the types of responsibility centers and apply management by exception."),
    ],
    theory: [
      {
        heading: t("El ciclo de control y las variaciones", "The control cycle and variances"),
        body: [
          t(
            "Hacer un presupuesto y guardarlo en un cajón no sirve. El **control presupuestal** es un ciclo: **planear**, **ejecutar**, **medir** lo que pasó, **comparar** contra el plan y **corregir**. Luego el ciclo vuelve a empezar.",
            "Making a budget and putting it in a drawer is useless. **Budgetary control** is a cycle: **plan**, **execute**, **measure** what happened, **compare** with the plan and **correct**. Then the cycle starts again.",
          ),
          t(
            "La diferencia entre lo real y lo presupuestado es una **variación**. Es **favorable** si mejora la utilidad (ingresos mayores o costos menores a lo planeado) y **desfavorable** si la empeora (ingresos menores o costos mayores).",
            "The difference between actual and budget is a **variance**. It is **favorable** if it improves profit (revenue higher or costs lower than planned) and **unfavorable** if it worsens it (revenue lower or costs higher).",
          ),
          t(
            "Favorable no siempre es bueno: gastar menos en mantenimiento puede ser un ahorro hoy y una descompostura mañana. Por eso toda variación grande se **investiga**, sea del signo que sea.",
            "Favorable is not always good: spending less on maintenance can be a saving today and a breakdown tomorrow. That is why every large variance is **investigated**, whatever its sign.",
          ),
          t(
            "Mini ejemplo: el presupuesto de papelería de una oficina era $8,000 y se gastaron $9,200: variación desfavorable de $1,200.",
            "Mini example: an office's stationery budget was $8,000 and $9,200 was spent: an unfavorable variance of $1,200.",
          ),
        ],
        formulas: [
          {
            name: t("Variación contra el presupuesto", "Variance against budget"),
            expression: "Variación = Real − Presupuesto",
            variables: [
              { symbol: "Variación", meaning: t("La diferencia entre lo que pasó y lo planeado, en pesos.", "The difference between what happened and what was planned, in pesos.") },
              { symbol: "Real", meaning: t("Lo que de verdad se gastó o se vendió, en pesos.", "What was actually spent or sold, in pesos.") },
              { symbol: "Presupuesto", meaning: t("Lo que se había planeado, en pesos.", "What had been planned, in pesos.") },
            ],
            steps: [
              t("Resta: real − presupuesto.", "Subtract: actual − budget."),
              t("Fíjate si es un **costo** o un **ingreso**.", "Check whether it is a **cost** or a **revenue** item."),
              t("Clasifícala: en costos, positiva es desfavorable y negativa favorable; en ingresos, positiva es favorable y negativa desfavorable.", "Classify it: for costs, positive is unfavorable and negative favorable; for revenue, positive is favorable and negative unfavorable."),
            ],
            example: t("Luz: presupuesto $5,000, real $5,600. 5,600 − 5,000 = +600 en un costo → **$600 desfavorable**. Ventas: presupuesto $80,000, real $86,000. 86,000 − 80,000 = +6,000 en un ingreso → **$6,000 favorable**.", "Electricity: budget $5,000, actual $5,600. 5,600 − 5,000 = +600 on a cost → **$600 unfavorable**. Sales: budget $80,000, actual $86,000. 86,000 − 80,000 = +6,000 on revenue → **$6,000 favorable**."),
            interpret: t("La pregunta clave es: ¿esto mejora o empeora la utilidad? Si la mejora, es favorable.", "The key question is: does this improve or worsen profit? If it improves it, it is favorable."),
            mistake: t("Creer que una variación positiva siempre es buena. En un costo, positiva significa que gastaste de más.", "Believing a positive variance is always good. On a cost, positive means you overspent."),
          },
        ],
      },
      {
        heading: t("Presupuesto estático y presupuesto flexible", "Static budget and flexible budget"),
        body: [
          t(
            "En palabras sencillas: el presupuesto flexible responde a la pregunta «¿cuánto **debí** gastar para lo que **de verdad** hice?». Así evalúas a cada quien con la vara correcta.",
            "In simple words: the flexible budget answers the question \"how much **should** I have spent for what I **actually** did?\". That way you judge everyone with the right yardstick.",
          ),
          t(
            "El **presupuesto estático** se hace para un solo nivel de actividad, el planeado. Si al final se vendió o produjo más, comparar los costos reales contra él es injusto: claro que gastaste más materiales, ¡hiciste más unidades!",
            "The **static budget** is prepared for a single activity level, the planned one. If you ended up selling or producing more, comparing actual costs against it is unfair: of course you used more materials, you made more units!",
          ),
          t(
            "El **presupuesto flexible** recalcula el presupuesto para el **volumen real**, usando los mismos precios, costos variables por unidad y costos fijos del plan. Así puedes separar dos efectos: la **variación por volumen** (flexible − estático), que viene de vender más o menos, y la **variación de presupuesto flexible** (real − flexible), que mide qué tan bien se manejaron precios y costos.",
            "The **flexible budget** recomputes the budget for the **actual volume**, using the plan's prices, variable costs per unit and fixed costs. That way you can separate two effects: the **volume variance** (flexible − static), which comes from selling more or less, and the **flexible-budget variance** (actual − flexible), which measures how well prices and costs were managed.",
          ),
          t(
            "Mini ejemplo: si el plan era gastar $12 de material por unidad y se hicieron 3,500 unidades, el presupuesto flexible de material es 12 × 3,500 = $42,000, aunque el estático dijera otra cifra.",
            "Mini example: if the plan was to spend $12 of material per unit and 3,500 units were made, the flexible material budget is 12 × 3,500 = $42,000, even if the static budget said something else.",
          ),
        ],
        formulas: [
          {
            name: t("Presupuesto flexible de costos", "Flexible cost budget"),
            expression: "Presupuesto flexible = CF presupuestados + cv presupuestado × Volumen real",
            variables: [
              { symbol: "CF presupuestados", meaning: t("Los costos fijos del plan, en pesos.", "The plan's fixed costs, in pesos.") },
              { symbol: "cv presupuestado", meaning: t("El costo variable por unidad del plan, en pesos.", "The plan's variable cost per unit, in pesos.") },
              { symbol: "Volumen real", meaning: t("Las unidades que de verdad se produjeron o vendieron.", "The units actually produced or sold.") },
            ],
            steps: [
              t("Toma el cv y los fijos del plan original.", "Take the vc and fixed costs from the original plan."),
              t("Multiplica el cv por el volumen **real**.", "Multiply vc by the **actual** volume."),
              t("Súmale los fijos presupuestados.", "Add the budgeted fixed costs."),
            ],
            example: t("Un autolavado presupuestó $15,000 fijos más $20 por auto, para 900 autos. Lavó 1,000. Flexible: 20 × 1,000 = 20,000; 15,000 + 20,000 = **$35,000**. (El estático era 15,000 + 20 × 900 = $33,000.)", "A car wash budgeted $15,000 fixed plus $20 per car, for 900 cars. It washed 1,000. Flexible: 20 × 1,000 = 20,000; 15,000 + 20,000 = **$35,000**. (The static one was 15,000 + 20 × 900 = $33,000.)"),
            interpret: t("Contra esta cifra se comparan los costos reales: si se gastó más de $35,000, hubo ineficiencia; no por haber lavado más autos.", "Actual costs are compared against this figure: if more than $35,000 was spent, there was inefficiency, not just because more cars were washed."),
            mistake: t("Usar el volumen planeado: eso es el presupuesto estático, no el flexible.", "Using the planned volume: that is the static budget, not the flexible one."),
          },
          {
            name: t("Utilidad del presupuesto flexible", "Flexible-budget profit"),
            expression: "Utilidad flexible = Volumen real × (Precio presupuestado − cv presupuestado) − CF presupuestados",
            variables: [
              { symbol: "Volumen real", meaning: t("Unidades que de verdad se vendieron.", "Units actually sold.") },
              { symbol: "Precio presupuestado", meaning: t("El precio de venta del plan, en pesos.", "The plan's selling price, in pesos.") },
              { symbol: "cv presupuestado", meaning: t("El costo variable por unidad del plan, en pesos.", "The plan's variable cost per unit, in pesos.") },
              { symbol: "CF presupuestados", meaning: t("Los costos fijos del plan, en pesos.", "The plan's fixed costs, in pesos.") },
            ],
            steps: [
              t("Calcula el margen del plan: precio presupuestado − cv presupuestado.", "Compute the plan's margin: budgeted price − budgeted vc."),
              t("Multiplícalo por el volumen real.", "Multiply it by actual volume."),
              t("Resta los fijos presupuestados.", "Subtract budgeted fixed costs."),
            ],
            example: t("Autolavado: precio del plan $80, cv $20, fijos $15,000; lavó 1,000 autos. Margen: 80 − 20 = 60. Flexible: 60 × 1,000 − 15,000 = 60,000 − 15,000 = **$45,000**. (Estática con 900 autos: 60 × 900 − 15,000 = $39,000.)", "Car wash: plan price $80, vc $20, fixed $15,000; it washed 1,000 cars. Margin: 80 − 20 = 60. Flexible: 60 × 1,000 − 15,000 = 60,000 − 15,000 = **$45,000**. (Static with 900 cars: 60 × 900 − 15,000 = $39,000.)"),
            mistake: t("Usar el precio o el cv reales. El flexible usa los datos del **plan**; solo cambia el volumen.", "Using actual price or vc. The flexible budget uses the **plan's** data; only volume changes."),
          },
          {
            name: t("Variación por volumen y variación de presupuesto flexible", "Volume variance and flexible-budget variance"),
            expression: "Variación por volumen = Utilidad flexible − Utilidad estática;  Variación de presupuesto flexible = Utilidad real − Utilidad flexible",
            variables: [
              { symbol: "Utilidad estática", meaning: t("La utilidad del plan original, con el volumen planeado, en pesos.", "The original plan's profit, at the planned volume, in pesos.") },
              { symbol: "Utilidad flexible", meaning: t("La utilidad que el plan daría con el volumen real, en pesos.", "The profit the plan would give at the actual volume, in pesos.") },
              { symbol: "Utilidad real", meaning: t("La utilidad que de verdad se obtuvo, en pesos.", "The profit actually obtained, in pesos.") },
            ],
            steps: [
              t("Calcula la utilidad flexible con el volumen real y los datos del plan.", "Compute flexible profit with actual volume and the plan's data."),
              t("Variación por volumen: flexible − estática (efecto de vender más o menos).", "Volume variance: flexible − static (effect of selling more or less)."),
              t("Variación de presupuesto flexible: real − flexible (efecto de precios y costos).", "Flexible-budget variance: actual − flexible (effect of prices and costs)."),
              t("En utilidades, positiva es favorable (F) y negativa desfavorable (D). Comprueba: las dos juntas dan real − estática.", "For profit, positive is favorable (F) and negative unfavorable (U). Check: together they equal actual − static."),
            ],
            example: t("Autolavado: estática $39,000, flexible $45,000, real $41,000. Volumen: 45,000 − 39,000 = **$6,000 F**. Flexible: 41,000 − 45,000 = −4,000 → **$4,000 D**. Comprobación: 6,000 − 4,000 = 2,000 = 41,000 − 39,000.", "Car wash: static $39,000, flexible $45,000, actual $41,000. Volume: 45,000 − 39,000 = **$6,000 F**. Flexible: 41,000 − 45,000 = −4,000 → **$4,000 U**. Check: 6,000 − 4,000 = 2,000 = 41,000 − 39,000."),
            interpret: t("Vender más ayudó $6,000, pero precios o costos peores restaron $4,000. Comparar solo real contra estático (+$2,000) escondería el problema.", "Selling more helped by $6,000, but worse prices or costs took away $4,000. Comparing only actual against static (+$2,000) would hide the problem."),
            mistake: t("Comparar solo real contra estático y concluir que todo salió bien.", "Comparing only actual against static and concluding everything went well."),
          },
        ],
      },
      {
        heading: t("Centros de responsabilidad y gestión por excepción", "Responsibility centers and management by exception"),
        body: [
          t(
            "El control de gestión asigna cada resultado a quien **puede controlarlo**. Un **centro de responsabilidad** es un área cuyo jefe responde por ciertos números. Hay cuatro tipos según de qué responde.",
            "Management control assigns each result to whoever **can control it**. A **responsibility center** is an area whose head answers for certain figures. There are four types depending on what it answers for.",
          ),
          t(
            "Como revisar cada renglón cansa y distrae, se usa la **gestión por excepción**: la dirección fija un umbral (por ejemplo, 5 % o cierto monto) y solo investiga las variaciones que lo rebasan, favorables o desfavorables.",
            "Since reviewing every line is tiring and distracting, **management by exception** is used: management sets a threshold (for example, 5% or a certain amount) and only investigates variances that exceed it, favorable or unfavorable.",
          ),
          t(
            "Mini ejemplo: con umbral de 5 %, materiales con $214,000 reales contra $200,000 presupuestados (7 % arriba) se investiga; luz con $31,000 contra $30,000 (3.3 %) no.",
            "Mini example: with a 5% threshold, materials at $214,000 actual against $200,000 budgeted (7% over) is investigated; electricity at $31,000 against $30,000 (3.3%) is not.",
          ),
        ],
        bullets: [
          t("Centro de costos: controla gastos (una planta, mantenimiento).", "Cost center: controls costs (a plant, maintenance)."),
          t("Centro de ingresos: responde por ventas (el departamento comercial).", "Revenue center: answers for sales (the sales department)."),
          t("Centro de utilidades: responde por ingresos y costos (una sucursal).", "Profit center: answers for revenue and costs (a branch)."),
          t("Centro de inversión: además decide en qué invertir (una división).", "Investment center: also decides what to invest in (a division)."),
        ],
        formulas: [
          {
            name: t("Variación en porcentaje (gestión por excepción)", "Percentage variance (management by exception)"),
            expression: "Variación % = (Real − Presupuesto) ÷ Presupuesto × 100",
            variables: [
              { symbol: "Variación %", meaning: t("Qué tan grande es la diferencia comparada con lo planeado, en %.", "How large the difference is compared with the plan, in %.") },
              { symbol: "Real", meaning: t("Lo que de verdad se gastó o se vendió, en pesos.", "What was actually spent or sold, in pesos.") },
              { symbol: "Presupuesto", meaning: t("Lo planeado, en pesos.", "What was planned, in pesos.") },
            ],
            steps: [
              t("Calcula la variación en pesos: real − presupuesto.", "Compute the variance in pesos: actual − budget."),
              t("Divídela entre el **presupuesto** y multiplica por 100.", "Divide it by the **budget** and multiply by 100."),
              t("Compara el porcentaje (sin signo) con el umbral: si lo rebasa, se investiga, sea favorable o desfavorable.", "Compare the percentage (ignoring the sign) with the threshold: if it exceeds it, it is investigated, whether favorable or unfavorable."),
            ],
            example: t("Umbral de 5 %. Gasolina: presupuesto $40,000, real $43,000. 3,000 ÷ 40,000 = 0.075 → **7.5 %** desfavorable: se investiga. Papelería: presupuesto $8,000, real $7,800. −200 ÷ 8,000 = −0.025 → **2.5 %** favorable: no se investiga.", "5% threshold. Fuel: budget $40,000, actual $43,000. 3,000 ÷ 40,000 = 0.075 → **7.5%** unfavorable: investigated. Stationery: budget $8,000, actual $7,800. −200 ÷ 8,000 = −0.025 → **2.5%** favorable: not investigated."),
            mistake: t("Fijarse solo en el monto en pesos (una partida grande puede variar mucho dinero y poco porcentaje) u omitir las favorables, que también se investigan.", "Looking only at the peso amount (a large item can vary a lot of money but a small percentage) or skipping favorable ones, which are also investigated."),
          },
        ],
      },
    ],
    examples: [
      {
        title: t("Presupuesto flexible de una fábrica de mesas", "Flexible budget for a table factory"),
        problem: t(
          "Una fábrica planeó vender 1,000 mesas a $500, con costo variable de $300 y fijos de $120,000 (utilidad planeada $80,000). En realidad vendió 1,100 mesas a $490, con costo variable de $310 y fijos de $125,000. Separa la variación por volumen y la variación de presupuesto flexible.",
          "A factory planned to sell 1,000 tables at $500, with a variable cost of $300 and fixed costs of $120,000 (planned profit $80,000). In reality it sold 1,100 tables at $490, with a variable cost of $310 and fixed costs of $125,000. Separate the volume variance and the flexible-budget variance.",
        ),
        steps: [
          t("Real: ventas 1,100 × 490 = $539,000; variables 1,100 × 310 = $341,000; utilidad 539,000 − 341,000 − 125,000 = $73,000.", "Actual: sales 1,100 × 490 = $539,000; variable 1,100 × 310 = $341,000; profit 539,000 − 341,000 − 125,000 = $73,000."),
          t("Flexible a 1,100 mesas: ventas $550,000; variables $330,000; fijos $120,000; utilidad $100,000.", "Flexible at 1,100 tables: sales $550,000; variable $330,000; fixed $120,000; profit $100,000."),
          t("Variación por volumen: 100,000 − 80,000 = $20,000 favorable (se vendieron 100 mesas más).", "Volume variance: 100,000 − 80,000 = $20,000 favorable (100 more tables were sold)."),
          t("Variación de presupuesto flexible: 73,000 − 100,000 = $27,000 desfavorable (precio $11,000 D, variables $11,000 D, fijos $5,000 D).", "Flexible-budget variance: 73,000 − 100,000 = $27,000 unfavorable (price $11,000 U, variable $11,000 U, fixed $5,000 U)."),
          t("Total: 20,000 F − 27,000 D = 7,000 D, igual a 73,000 − 80,000.", "Total: 20,000 F − 27,000 U = 7,000 U, equal to 73,000 − 80,000."),
        ],
        result: t(
          "Vender más ayudó $20,000, pero el precio más bajo y los costos más altos restaron $27,000. Comparar solo contra el estático (−$7,000) escondía ambos efectos.",
          "Selling more helped by $20,000, but the lower price and higher costs took away $27,000. Comparing only against the static budget (−$7,000) hid both effects.",
        ),
      },
      {
        title: t("Gestión por excepción en un reporte mensual", "Management by exception in a monthly report"),
        problem: t(
          "La dirección investiga toda variación mayor a 5 %. Materiales: presupuesto $200,000, real $214,000. Luz: presupuesto $30,000, real $31,000. Publicidad: presupuesto $50,000, real $44,000. ¿Qué partidas se investigan?",
          "Management investigates every variance above 5%. Materials: budget $200,000, actual $214,000. Electricity: budget $30,000, actual $31,000. Advertising: budget $50,000, actual $44,000. Which items are investigated?",
        ),
        steps: [
          t("Materiales: 14,000 ÷ 200,000 = 7 % desfavorable → se investiga.", "Materials: 14,000 ÷ 200,000 = 7% unfavorable → investigated."),
          t("Luz: 1,000 ÷ 30,000 ≈ 3.3 % desfavorable → no rebasa el umbral.", "Electricity: 1,000 ÷ 30,000 ≈ 3.3% unfavorable → below the threshold."),
          t("Publicidad: 6,000 ÷ 50,000 = 12 % favorable → se investiga: ¿se dejó de anunciar y eso afectará ventas?", "Advertising: 6,000 ÷ 50,000 = 12% favorable → investigated: did advertising stop, and will that hurt sales?"),
        ],
        result: t(
          "Se investigan materiales y publicidad; la luz queda dentro de lo tolerable.",
          "Materials and advertising are investigated; electricity stays within tolerance.",
        ),
      },
    ],
    keyPoints: [
      t("Control presupuestal: planear, ejecutar, medir, comparar y corregir.", "Budgetary control: plan, execute, measure, compare and correct."),
      t("Variación favorable mejora la utilidad; desfavorable la empeora; las grandes se investigan siempre.", "A favorable variance improves profit; an unfavorable one worsens it; large ones are always investigated."),
      t("El presupuesto flexible ajusta el plan al volumen real para comparar de forma justa.", "The flexible budget adjusts the plan to actual volume for a fair comparison."),
      t("Variación por volumen = flexible − estático; variación flexible = real − flexible.", "Volume variance = flexible − static; flexible-budget variance = actual − flexible."),
      t("Cada resultado se asigna al centro de responsabilidad que lo controla: costos, ingresos, utilidades o inversión.", "Each result is assigned to the responsibility center that controls it: cost, revenue, profit or investment."),
    ],
    exerciseIds: ['COS-12-E1', 'COS-12-E2', 'COS-12-E3', 'COS-12-E4', 'COS-12-E5', 'COS-12-E6'],
  },
]

export const exercises: Exercise[] = [
  // ═════════════════════════ COS-07 ═════════════════════════
  {
    id: 'COS-07-E1',
    level: 3,
    module: 'COS-07',
    kind: 'mcq',
    flavor: 'concept',
    prompt: t(
      "Dentro del rango relevante, una fábrica duplica su producción. ¿Qué pasa con su costo fijo **por unidad**?",
      "Within the relevant range, a factory doubles its production. What happens to its fixed cost **per unit**?",
    ),
    options: [
      { id: 'COS-07-E1-a', text: t("Se duplica", "It doubles") },
      { id: 'COS-07-E1-b', text: t("Se reduce a la mitad", "It is cut in half") },
      { id: 'COS-07-E1-c', text: t("No cambia", "It does not change") },
      { id: 'COS-07-E1-d', text: t("Se vuelve costo variable", "It becomes a variable cost") },
    ],
    correctOptionId: 'COS-07-E1-b',
    explanation: t(
      "El costo fijo total no cambia, pero se reparte entre el doble de unidades, así que por unidad queda a la mitad. Error común: responder que no cambia; eso es cierto para el total fijo y para el costo variable por unidad, no para el fijo por unidad.",
      "Total fixed cost does not change, but it is spread over twice the units, so per unit it is halved. Common mistake: answering that it does not change; that is true for total fixed cost and for variable cost per unit, not for fixed cost per unit.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'fixed-variable-costs',
  },
  {
    id: 'COS-07-E2',
    level: 3,
    module: 'COS-07',
    kind: 'classify',
    flavor: 'concept',
    context: t(
      "Un taller de costura que fabrica uniformes escolares revisa sus costos mensuales.",
      "A sewing workshop that makes school uniforms reviews its monthly costs.",
    ),
    prompt: t(
      "Clasifica cada costo del taller de costura según su comportamiento.",
      "Classify each cost of the sewing workshop by its behavior.",
    ),
    categories: [
      { id: 'COS-07-E2-c1', label: t("Fijo", "Fixed") },
      { id: 'COS-07-E2-c2', label: t("Variable", "Variable") },
      { id: 'COS-07-E2-c3', label: t("Mixto", "Mixed") },
    ],
    items: [
      { id: 'COS-07-E2-i1', label: t("Renta mensual del local", "Monthly rent of the shop"), correctCategoryId: 'COS-07-E2-c1' },
      { id: 'COS-07-E2-i2', label: t("Tela usada en cada uniforme", "Fabric used in each uniform"), correctCategoryId: 'COS-07-E2-c2' },
      { id: 'COS-07-E2-i3', label: t("Recibo de luz con cargo fijo más consumo por kWh", "Electricity bill with a fixed charge plus consumption per kWh"), correctCategoryId: 'COS-07-E2-c3' },
      { id: 'COS-07-E2-i4', label: t("Sueldo mensual de la supervisora", "Supervisor's monthly salary"), correctCategoryId: 'COS-07-E2-c1' },
      { id: 'COS-07-E2-i5', label: t("Comisión de $15 por uniforme vendido", "$15 commission per uniform sold"), correctCategoryId: 'COS-07-E2-c2' },
      { id: 'COS-07-E2-i6', label: t("Teléfono con plan base más cobro por minutos extra", "Phone with a base plan plus a charge for extra minutes"), correctCategoryId: 'COS-07-E2-c3' },
    ],
    explanation: t(
      "Renta y sueldo de supervisora no cambian con los uniformes producidos: fijos. Tela y comisión crecen con cada uniforme: variables. Luz y teléfono tienen una parte que se paga siempre y otra que depende del uso: mixtos. Error común: llamar variable a la luz completa, olvidando su cargo fijo.",
      "Rent and the supervisor's salary do not change with uniforms produced: fixed. Fabric and commission grow with each uniform: variable. Electricity and phone have a part always paid and a part that depends on use: mixed. Common mistake: calling the whole electricity bill variable, forgetting its fixed charge.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'fixed-variable-costs',
  },
  {
    id: 'COS-07-E3',
    level: 3,
    module: 'COS-07',
    kind: 'numeric',
    flavor: 'case',
    context: t(
      "Una fábrica de mochilas tiene costos fijos de $90,000 al mes y un costo variable de $35 por mochila. Este mes produjo 3,000 mochilas.",
      "A backpack factory has fixed costs of $90,000 per month and a variable cost of $35 per backpack. This month it produced 3,000 backpacks.",
    ),
    prompt: t(
      "¿Cuál fue el costo total por mochila este mes? Responde en pesos.",
      "What was the total cost per backpack this month? Answer in pesos.",
    ),
    answer: 65,
    unit: 'MXN',
    decimals: 2,
    tolerance: { abs: 0.01 },
    explanation: t(
      "Costo unitario = CF ÷ Q + cv = 90,000 ÷ 3,000 + 35 = 30 + 35 = $65. Error común: responder $35, que es solo la parte variable, o sumar 90,000 + 35 sin repartir los fijos entre las unidades.",
      "Unit cost = FC ÷ Q + vc = 90,000 ÷ 3,000 + 35 = 30 + 35 = $65. Common mistake: answering $35, which is only the variable part, or adding 90,000 + 35 without spreading the fixed costs over the units.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'fixed-variable-costs',
  },
  {
    id: 'COS-07-E4',
    level: 3,
    module: 'COS-07',
    kind: 'fields',
    flavor: 'case',
    context: t(
      "Una imprenta registró su costo de energía y mantenimiento de máquinas. Mes de más actividad: 4,500 horas-máquina, $61,000. Mes de menos actividad: 2,500 horas-máquina, $41,000.",
      "A print shop recorded its machine energy and maintenance cost. Busiest month: 4,500 machine hours, $61,000. Slowest month: 2,500 machine hours, $41,000.",
    ),
    prompt: t(
      "Usa punto alto y punto bajo para separar el costo de la imprenta y proyecta el costo para un mes de 3,800 horas.",
      "Use the high-low method to split the print shop's cost and project the cost for a month of 3,800 hours.",
    ),
    fields: [
      { id: 'f1', label: t("Costo variable por hora-máquina", "Variable cost per machine hour"), answer: 10, unit: 'MXN', tolerance: { abs: 0.01 } },
      { id: 'f2', label: t("Costo fijo mensual", "Monthly fixed cost"), answer: 16000, unit: 'MXN', tolerance: { abs: 0.5 } },
      { id: 'f3', label: t("Costo proyectado con 3,800 horas", "Projected cost at 3,800 hours"), answer: 54000, unit: 'MXN', tolerance: { abs: 0.5 } },
    ],
    explanation: t(
      "cv = (61,000 − 41,000) ÷ (4,500 − 2,500) = 20,000 ÷ 2,000 = $10 por hora. CF = 61,000 − 4,500 × 10 = $16,000. Proyección: 16,000 + 10 × 3,800 = $54,000. Error común: dividir un costo total entre sus horas (61,000 ÷ 4,500), lo que mezcla la parte fija con la variable.",
      "vc = (61,000 − 41,000) ÷ (4,500 − 2,500) = 20,000 ÷ 2,000 = $10 per hour. FC = 61,000 − 4,500 × 10 = $16,000. Projection: 16,000 + 10 × 3,800 = $54,000. Common mistake: dividing one total cost by its hours (61,000 ÷ 4,500), which mixes the fixed part with the variable part.",
    ),
    difficulty: 2,
    points: 15,
    competency: 'fixed-variable-costs',
  },
  {
    id: 'COS-07-E5',
    level: 3,
    module: 'COS-07',
    kind: 'truefalse',
    flavor: 'concept',
    prompt: t(
      "Un costo fijo nunca cambia, sin importar cuánto crezca el negocio.",
      "A fixed cost never changes, no matter how much the business grows.",
    ),
    answer: false,
    explanation: t(
      "Falso. Un costo es fijo solo dentro del rango relevante. Si el negocio crece tanto que necesita otro local u otra máquina, los fijos suben (se comportan como escalonados). También pueden cambiar por decisiones como renegociar la renta. Error común: entender «fijo» como «para siempre».",
      "False. A cost is fixed only within the relevant range. If the business grows so much that it needs another shop or machine, fixed costs rise (they behave as step costs). They can also change through decisions such as renegotiating rent. Common mistake: understanding «fixed» as «forever».",
    ),
    difficulty: 1,
    points: 10,
    competency: 'fixed-variable-costs',
  },
  {
    id: 'COS-07-E6',
    level: 3,
    module: 'COS-07',
    kind: 'multi',
    flavor: 'concept',
    prompt: t(
      "¿Qué afirmaciones sobre los costos **variables** son correctas dentro del rango relevante? Selecciona todas las que apliquen.",
      "Which statements about **variable** costs are correct within the relevant range? Select all that apply.",
    ),
    options: [
      { id: 'COS-07-E6-a', text: t("Su total sube en proporción al volumen producido", "Their total rises in proportion to the volume produced") },
      { id: 'COS-07-E6-b', text: t("Por unidad bajan cuando se produce más", "Per unit they fall when more is produced") },
      { id: 'COS-07-E6-c', text: t("Por unidad se mantienen constantes", "Per unit they stay constant") },
      { id: 'COS-07-E6-d', text: t("Si no se produce nada, su total es cero", "If nothing is produced, their total is zero") },
      { id: 'COS-07-E6-e', text: t("La renta mensual del local es un buen ejemplo", "The shop's monthly rent is a good example") },
    ],
    correctOptionIds: ['COS-07-E6-a', 'COS-07-E6-c', 'COS-07-E6-d'],
    explanation: t(
      "El costo variable total se mueve con el volumen (y es cero si no hay producción), mientras que por unidad es constante. Bajar por unidad al producir más es propio del costo fijo, y la renta es un costo fijo. Error común: confundir el comportamiento por unidad de fijos y variables.",
      "Total variable cost moves with volume (and is zero if there is no production), while per unit it is constant. Falling per unit as you produce more is a trait of fixed costs, and rent is a fixed cost. Common mistake: confusing the per-unit behavior of fixed and variable costs.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'fixed-variable-costs',
  },

  // ═════════════════════════ COS-08 ═════════════════════════
  {
    id: 'COS-08-E1',
    level: 3,
    module: 'COS-08',
    kind: 'mcq',
    flavor: 'concept',
    prompt: t(
      "¿Qué representa el margen de contribución de un producto?",
      "What does a product's contribution margin represent?",
    ),
    options: [
      { id: 'COS-08-E1-a', text: t("El precio de venta menos todos los costos, fijos y variables", "The selling price minus all costs, fixed and variable") },
      { id: 'COS-08-E1-b', text: t("Lo que queda del precio después de los costos variables, para cubrir fijos y generar utilidad", "What is left of the price after variable costs, to cover fixed costs and generate profit") },
      { id: 'COS-08-E1-c', text: t("La parte de los impuestos que aporta cada venta", "The portion of taxes each sale contributes") },
      { id: 'COS-08-E1-d', text: t("El total de costos fijos dividido entre las unidades vendidas", "Total fixed costs divided by units sold") },
    ],
    correctOptionId: 'COS-08-E1-b',
    explanation: t(
      "Margen de contribución = precio − costo variable. Ese dinero primero cubre los costos fijos y lo que sobra es utilidad. Error común: restar también los fijos; eso ya sería la utilidad, no el margen de contribución.",
      "Contribution margin = price − variable cost. That money first covers fixed costs and what remains is profit. Common mistake: also subtracting fixed costs; that would already be profit, not contribution margin.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'cvp-analysis',
  },
  {
    id: 'COS-08-E2',
    level: 3,
    module: 'COS-08',
    kind: 'numeric',
    flavor: 'case',
    context: t(
      "Un taller vende lámparas artesanales a $150 cada una. El costo variable es $90 por lámpara y los costos fijos son $48,000 al mes. Este mes vendió 1,200 lámparas.",
      "A workshop sells handmade lamps at $150 each. Variable cost is $90 per lamp and fixed costs are $48,000 per month. This month it sold 1,200 lamps.",
    ),
    prompt: t(
      "¿Cuál fue la utilidad de operación del taller de lámparas este mes? Responde en pesos.",
      "What was the lamp workshop's operating profit this month? Answer in pesos.",
    ),
    answer: 24000,
    unit: 'MXN',
    decimals: 0,
    tolerance: { abs: 0.5 },
    explanation: t(
      "MC unitario = 150 − 90 = $60. MC total = 60 × 1,200 = $72,000. Utilidad = 72,000 − 48,000 = $24,000. Error común: calcular ventas − fijos (180,000 − 48,000) olvidando los costos variables.",
      "Unit CM = 150 − 90 = $60. Total CM = 60 × 1,200 = $72,000. Profit = 72,000 − 48,000 = $24,000. Common mistake: computing sales − fixed costs (180,000 − 48,000) forgetting variable costs.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'cvp-analysis',
  },
  {
    id: 'COS-08-E3',
    level: 3,
    module: 'COS-08',
    kind: 'fields',
    flavor: 'case',
    context: t(
      "Una estética cobra en promedio $250 por servicio. Productos y comisión de la estilista suman $100 por servicio. Sus costos fijos son $36,000 al mes y la dueña quiere ganar $18,000 al mes.",
      "A beauty salon charges on average $250 per service. Products and the stylist's commission add up to $100 per service. Its fixed costs are $36,000 per month and the owner wants to earn $18,000 per month.",
    ),
    prompt: t(
      "Calcula la razón de margen de contribución de la estética y cuánto debe vender para lograr la utilidad meta.",
      "Compute the salon's contribution margin ratio and how much it must sell to reach the target profit.",
    ),
    fields: [
      { id: 'f1', label: t("Razón de margen de contribución", "Contribution margin ratio"), answer: 60, unit: '%', tolerance: { abs: 0.05 } },
      { id: 'f2', label: t("Ventas necesarias en pesos", "Required sales in pesos"), answer: 90000, unit: 'MXN', tolerance: { abs: 0.5 } },
      { id: 'f3', label: t("Número de servicios necesarios", "Number of services required"), answer: 360, unit: 'units', tolerance: { abs: 0.5 } },
    ],
    explanation: t(
      "Razón MC = (250 − 100) ÷ 250 = 0.60 = 60 %. Ventas = (36,000 + 18,000) ÷ 0.60 = $90,000. Servicios = 90,000 ÷ 250 = 360 (o 54,000 ÷ 150). Error común: dividir solo los fijos entre la razón (36,000 ÷ 0.6 = 60,000), que da el punto de equilibrio y no la utilidad meta.",
      "CM ratio = (250 − 100) ÷ 250 = 0.60 = 60%. Sales = (36,000 + 18,000) ÷ 0.60 = $90,000. Services = 90,000 ÷ 250 = 360 (or 54,000 ÷ 150). Common mistake: dividing only fixed costs by the ratio (36,000 ÷ 0.6 = 60,000), which gives break-even, not the target profit.",
    ),
    difficulty: 2,
    points: 15,
    competency: 'cvp-analysis',
  },
  {
    id: 'COS-08-E4',
    level: 3,
    module: 'COS-08',
    kind: 'truefalse',
    flavor: 'concept',
    prompt: t(
      "El modelo costo-volumen-utilidad supone que el precio de venta y el costo variable por unidad se mantienen constantes dentro del rango relevante.",
      "The cost-volume-profit model assumes that the selling price and variable cost per unit stay constant within the relevant range.",
    ),
    answer: true,
    explanation: t(
      "Verdadero. Es uno de sus supuestos básicos, junto con fijos constantes y que lo producido se vende. En la vida real hay descuentos por volumen o cambios de precio, por eso el modelo se usa como aproximación y se recalcula cuando cambian los datos. Error común: creer que el CVU predice exactamente cualquier volumen.",
      "True. It is one of its basic assumptions, along with constant fixed costs and that what is produced is sold. In real life there are volume discounts or price changes, so the model is used as an approximation and recomputed when data change. Common mistake: believing CVP predicts any volume exactly.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'cvp-analysis',
  },
  {
    id: 'COS-08-E5',
    level: 3,
    module: 'COS-08',
    kind: 'numeric',
    flavor: 'interpret',
    context: t(
      "Una distribuidora de garrafones vende 5,000 unidades al mes a $80, con costo variable de $50 y costos fijos de $100,000.",
      "A water-jug distributor sells 5,000 units per month at $80, with a variable cost of $50 and fixed costs of $100,000.",
    ),
    prompt: t(
      "¿Cuál es el grado de apalancamiento operativo de la distribuidora de garrafones a ese nivel de ventas?",
      "What is the water-jug distributor's degree of operating leverage at that sales level?",
    ),
    answer: 3,
    unit: 'times',
    decimals: 2,
    tolerance: { abs: 0.01 },
    explanation: t(
      "MC total = 5,000 × (80 − 50) = $150,000. Utilidad = 150,000 − 100,000 = $50,000. GAO = 150,000 ÷ 50,000 = 3: si las ventas suben 10 %, la utilidad sube 30 %. Error común: dividir ventas entre utilidad (400,000 ÷ 50,000 = 8); el GAO usa el margen de contribución.",
      "Total CM = 5,000 × (80 − 50) = $150,000. Profit = 150,000 − 100,000 = $50,000. DOL = 150,000 ÷ 50,000 = 3: if sales rise 10%, profit rises 30%. Common mistake: dividing sales by profit (400,000 ÷ 50,000 = 8); DOL uses contribution margin.",
    ),
    difficulty: 2,
    points: 15,
    competency: 'cvp-analysis',
  },
  {
    id: 'COS-08-E6',
    level: 3,
    module: 'COS-08',
    kind: 'mcq',
    flavor: 'case',
    context: t(
      "Una paletería vende 1,000 paletas al mes con margen de contribución de $40 cada una y costos fijos de $30,000. Propone bajar el precio $5 y espera vender 1,200 paletas. El costo variable y los fijos no cambian.",
      "An ice-pop shop sells 1,000 pops per month with a contribution margin of $40 each and fixed costs of $30,000. It proposes lowering the price by $5 and expects to sell 1,200 pops. Variable and fixed costs do not change.",
    ),
    prompt: t(
      "¿Le conviene a la paletería bajar el precio?",
      "Should the ice-pop shop lower the price?",
    ),
    options: [
      { id: 'COS-08-E6-a', text: t("Sí: la utilidad sube de $10,000 a $12,000", "Yes: profit rises from $10,000 to $12,000") },
      { id: 'COS-08-E6-b', text: t("No: la utilidad baja de $10,000 a $5,000", "No: profit falls from $10,000 to $5,000") },
      { id: 'COS-08-E6-c', text: t("Da igual: la utilidad se queda en $10,000", "It makes no difference: profit stays at $10,000") },
      { id: 'COS-08-E6-d', text: t("Sí: la utilidad sube a $18,000", "Yes: profit rises to $18,000") },
    ],
    correctOptionId: 'COS-08-E6-a',
    explanation: t(
      "Hoy: 1,000 × 40 − 30,000 = $10,000. Propuesta: el margen baja a $35 y 1,200 × 35 − 30,000 = $12,000. Sí conviene, por $2,000. Error común: aplicar el nuevo margen a las ventas actuales (1,000 × 35 − 30,000 = $5,000) o el margen viejo al nuevo volumen (1,200 × 40 − 30,000 = $18,000).",
      "Today: 1,000 × 40 − 30,000 = $10,000. Proposal: the margin drops to $35 and 1,200 × 35 − 30,000 = $12,000. It pays off, by $2,000. Common mistake: applying the new margin to current sales (1,000 × 35 − 30,000 = $5,000) or the old margin to the new volume (1,200 × 40 − 30,000 = $18,000).",
    ),
    difficulty: 2,
    points: 15,
    competency: 'cvp-analysis',
  },

  // ═════════════════════════ COS-09 ═════════════════════════
  {
    id: 'COS-09-E1',
    level: 3,
    module: 'COS-09',
    kind: 'numeric',
    flavor: 'case',
    context: t(
      "Una marca de salsas embotelladas vende cada frasco a $120, con costo variable de $70. Sus costos fijos son $45,000 al mes.",
      "A bottled salsa brand sells each jar at $120, with a variable cost of $70. Its fixed costs are $45,000 per month.",
    ),
    prompt: t(
      "¿Cuántos frascos de salsa debe vender al mes para alcanzar el punto de equilibrio?",
      "How many jars of salsa must it sell per month to reach break-even?",
    ),
    answer: 900,
    unit: 'units',
    decimals: 0,
    tolerance: { abs: 0.5 },
    explanation: t(
      "PE = CF ÷ (precio − cv) = 45,000 ÷ (120 − 70) = 45,000 ÷ 50 = 900 frascos. Error común: dividir entre el precio (45,000 ÷ 120 = 375), lo que ignora que cada frasco también tiene costo variable.",
      "BEP = FC ÷ (price − vc) = 45,000 ÷ (120 − 70) = 45,000 ÷ 50 = 900 jars. Common mistake: dividing by price (45,000 ÷ 120 = 375), which ignores that each jar also has a variable cost.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'break-even',
  },
  {
    id: 'COS-09-E2',
    level: 3,
    module: 'COS-09',
    kind: 'numeric',
    flavor: 'case',
    context: t(
      "Una ferretería vende cientos de artículos distintos. Su razón de margen de contribución promedio es 35 % y sus costos fijos son $63,000 al mes.",
      "A hardware store sells hundreds of different items. Its average contribution margin ratio is 35% and its fixed costs are $63,000 per month.",
    ),
    prompt: t(
      "¿Cuántos pesos de venta al mes necesita la ferretería para no ganar ni perder?",
      "How many pesos of sales per month does the hardware store need to neither earn nor lose?",
    ),
    answer: 180000,
    unit: 'MXN',
    decimals: 0,
    tolerance: { abs: 0.5 },
    explanation: t(
      "Cuando hay muchos artículos se usa el PE en pesos: 63,000 ÷ 0.35 = $180,000. Error común: multiplicar 63,000 × 1.35 = $85,050, como si el margen fuera un recargo sobre los fijos.",
      "When there are many items you use BEP in pesos: 63,000 ÷ 0.35 = $180,000. Common mistake: multiplying 63,000 × 1.35 = $85,050, as if the margin were a markup on fixed costs.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'break-even',
  },
  {
    id: 'COS-09-E3',
    level: 3,
    module: 'COS-09',
    kind: 'fields',
    flavor: 'case',
    context: t(
      "Un negocio de jugos naturales tiene su punto de equilibrio en 1,500 vasos al mes. Presupuesta vender 2,000 vasos a $50 cada uno.",
      "A fresh juice business has its break-even point at 1,500 cups per month. It budgets selling 2,000 cups at $50 each.",
    ),
    prompt: t(
      "Calcula el margen de seguridad del negocio de jugos en vasos, en pesos y en porcentaje.",
      "Compute the juice business's margin of safety in cups, in pesos and as a percentage.",
    ),
    fields: [
      { id: 'f1', label: t("Margen de seguridad en vasos", "Margin of safety in cups"), answer: 500, unit: 'units', tolerance: { abs: 0.5 } },
      { id: 'f2', label: t("Margen de seguridad en pesos", "Margin of safety in pesos"), answer: 25000, unit: 'MXN', tolerance: { abs: 0.5 } },
      { id: 'f3', label: t("Margen de seguridad en porcentaje de las ventas", "Margin of safety as a percentage of sales"), answer: 25, unit: '%', tolerance: { abs: 0.05 } },
    ],
    explanation: t(
      "MS = 2,000 − 1,500 = 500 vasos; 500 × 50 = $25,000; 500 ÷ 2,000 = 25 %. Las ventas pueden caer una cuarta parte antes de entrar en pérdidas. Error común: dividir entre el punto de equilibrio (500 ÷ 1,500 ≈ 33 %); el porcentaje se calcula sobre las ventas.",
      "MoS = 2,000 − 1,500 = 500 cups; 500 × 50 = $25,000; 500 ÷ 2,000 = 25%. Sales can fall by a quarter before turning into losses. Common mistake: dividing by break-even (500 ÷ 1,500 ≈ 33%); the percentage is computed on sales.",
    ),
    difficulty: 2,
    points: 15,
    competency: 'break-even',
  },
  {
    id: 'COS-09-E4',
    level: 3,
    module: 'COS-09',
    kind: 'truefalse',
    flavor: 'concept',
    prompt: t(
      "Si los costos fijos de un negocio aumentan y el precio y el costo variable por unidad no cambian, su punto de equilibrio sube.",
      "If a business's fixed costs increase and price and variable cost per unit do not change, its break-even point rises.",
    ),
    answer: true,
    explanation: t(
      "Verdadero. El margen por unidad es el mismo, pero ahora hay más fijos que cubrir, así que se necesitan más unidades: PE = CF ÷ MC. Error común: pensar que solo los cambios de precio mueven el punto de equilibrio.",
      "True. The margin per unit is the same, but there are now more fixed costs to cover, so more units are needed: BEP = FC ÷ CM. Common mistake: thinking only price changes move the break-even point.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'break-even',
  },
  {
    id: 'COS-09-E5',
    level: 3,
    module: 'COS-09',
    kind: 'mcq',
    flavor: 'case',
    context: t(
      "Una tienda de bicicletas vende accesorios (margen de $30 cada uno) y bicicletas (margen de $60 cada una) en mezcla de 2 accesorios por cada bicicleta. Sus costos fijos son $60,000 al mes.",
      "A bike shop sells accessories ($30 margin each) and bikes ($60 margin each) in a mix of 2 accessories per bike. Its fixed costs are $60,000 per month.",
    ),
    prompt: t(
      "¿Cuál es el punto de equilibrio de la tienda de bicicletas con esa mezcla?",
      "What is the bike shop's break-even point with that mix?",
    ),
    options: [
      { id: 'COS-09-E5-a', text: t("1,000 accesorios y 500 bicicletas", "1,000 accessories and 500 bikes") },
      { id: 'COS-09-E5-b', text: t("500 accesorios y 1,000 bicicletas", "500 accessories and 1,000 bikes") },
      { id: 'COS-09-E5-c', text: t("2,000 accesorios y 1,000 bicicletas", "2,000 accessories and 1,000 bikes") },
      { id: 'COS-09-E5-d', text: t("750 accesorios y 750 bicicletas", "750 accessories and 750 bikes") },
    ],
    correctOptionId: 'COS-09-E5-a',
    explanation: t(
      "Paquete = 2 accesorios + 1 bicicleta: margen 2 × 30 + 60 = $120. Paquetes: 60,000 ÷ 120 = 500, es decir, 1,000 accesorios y 500 bicicletas. Comprobación: 1,000 × 30 + 500 × 60 = $60,000. Error común: invertir la mezcla o repartir en partes iguales.",
      "Bundle = 2 accessories + 1 bike: margin 2 × 30 + 60 = $120. Bundles: 60,000 ÷ 120 = 500, that is, 1,000 accessories and 500 bikes. Check: 1,000 × 30 + 500 × 60 = $60,000. Common mistake: reversing the mix or splitting it evenly.",
    ),
    difficulty: 2,
    points: 15,
    competency: 'break-even',
  },
  {
    id: 'COS-09-E6',
    level: 3,
    module: 'COS-09',
    kind: 'classify',
    flavor: 'interpret',
    prompt: t(
      "Clasifica cada cambio según su efecto en el punto de equilibrio en unidades (todo lo demás igual).",
      "Classify each change by its effect on the break-even point in units (all else equal).",
    ),
    categories: [
      { id: 'COS-09-E6-c1', label: t("Sube", "Rises") },
      { id: 'COS-09-E6-c2', label: t("Baja", "Falls") },
      { id: 'COS-09-E6-c3', label: t("No cambia", "No change") },
    ],
    items: [
      { id: 'COS-09-E6-i1', label: t("Subir el precio de venta", "Raise the selling price"), correctCategoryId: 'COS-09-E6-c2' },
      { id: 'COS-09-E6-i2', label: t("Aumenta el costo de la materia prima por unidad", "Raw material cost per unit increases"), correctCategoryId: 'COS-09-E6-c1' },
      { id: 'COS-09-E6-i3', label: t("Aumenta la renta mensual del local", "Monthly rent increases"), correctCategoryId: 'COS-09-E6-c1' },
      { id: 'COS-09-E6-i4', label: t("Se reduce la comisión que se paga por unidad vendida", "The commission paid per unit sold is reduced"), correctCategoryId: 'COS-09-E6-c2' },
      { id: 'COS-09-E6-i5', label: t("Se espera vender más unidades el próximo mes", "More units are expected to be sold next month"), correctCategoryId: 'COS-09-E6-c3' },
      { id: 'COS-09-E6-i6', label: t("Se contrata una campaña publicitaria de monto fijo", "A fixed-fee advertising campaign is hired"), correctCategoryId: 'COS-09-E6-c1' },
    ],
    explanation: t(
      "PE = CF ÷ (precio − cv). Sube con más fijos (renta, campaña) o menos margen (materia prima más cara). Baja con más margen (precio mayor, comisión menor). Las ventas esperadas no entran en la fórmula: cambian el margen de seguridad, no el PE. Error común: creer que vender más baja el punto de equilibrio.",
      "BEP = FC ÷ (price − vc). It rises with more fixed costs (rent, campaign) or less margin (pricier raw material). It falls with more margin (higher price, lower commission). Expected sales are not in the formula: they change the margin of safety, not the BEP. Common mistake: believing that selling more lowers the break-even point.",
    ),
    difficulty: 2,
    points: 15,
    competency: 'break-even',
  },

  // ═════════════════════════ COS-10 ═════════════════════════
  {
    id: 'COS-10-E1',
    level: 3,
    module: 'COS-10',
    kind: 'mcq',
    flavor: 'concept',
    prompt: t(
      "¿Con qué presupuesto se empieza normalmente a elaborar el presupuesto maestro?",
      "Which budget is normally the starting point for preparing the master budget?",
    ),
    options: [
      { id: 'COS-10-E1-a', text: t("El presupuesto de flujo de efectivo", "The cash flow budget") },
      { id: 'COS-10-E1-b', text: t("El presupuesto de producción", "The production budget") },
      { id: 'COS-10-E1-c', text: t("El presupuesto de ventas", "The sales budget") },
      { id: 'COS-10-E1-d', text: t("El estado de situación financiera presupuestado", "The budgeted balance sheet") },
    ],
    correctOptionId: 'COS-10-E1-c',
    explanation: t(
      "Casi todo depende de cuánto se espera vender: producción, materiales, mano de obra, gastos y efectivo. Por eso se empieza con ventas. Error común: empezar por producción; sin saber cuánto vas a vender no sabes cuánto fabricar.",
      "Almost everything depends on how much you expect to sell: production, materials, labor, expenses and cash. That is why you start with sales. Common mistake: starting with production; without knowing how much you will sell you do not know how much to make.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'operating-budgets',
  },
  {
    id: 'COS-10-E2',
    level: 3,
    module: 'COS-10',
    kind: 'numeric',
    flavor: 'case',
    context: t(
      "Una fábrica de botas espera vender 12,000 pares el próximo semestre. Tiene 2,000 pares en bodega y quiere terminar el semestre con 1,500.",
      "A boot factory expects to sell 12,000 pairs next semester. It has 2,000 pairs in stock and wants to end the semester with 1,500.",
    ),
    prompt: t(
      "¿Cuántos pares de botas debe producir la fábrica en el semestre?",
      "How many pairs of boots must the factory produce in the semester?",
    ),
    answer: 11500,
    unit: 'units',
    decimals: 0,
    tolerance: { abs: 0.5 },
    explanation: t(
      "Producción = ventas + inventario final − inventario inicial = 12,000 + 1,500 − 2,000 = 11,500 pares. Produce menos de lo que vende porque quiere reducir su inventario. Error común: invertir los inventarios y obtener 12,500.",
      "Production = sales + ending inventory − beginning inventory = 12,000 + 1,500 − 2,000 = 11,500 pairs. It produces less than it sells because it wants to reduce its inventory. Common mistake: swapping the inventories and getting 12,500.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'operating-budgets',
  },
  {
    id: 'COS-10-E3',
    level: 3,
    module: 'COS-10',
    kind: 'fields',
    flavor: 'case',
    context: t(
      "Una fábrica de mochilas planea producir 4,000 mochilas. Cada una lleva 2 metros de tela, que cuesta $35 el metro. Tiene 900 metros en bodega y quiere terminar con 600 metros.",
      "A backpack maker plans to produce 4,000 backpacks. Each uses 2 meters of fabric, costing $35 per meter. It has 900 meters in stock and wants to end with 600 meters.",
    ),
    prompt: t(
      "Elabora el presupuesto de compras de tela para la producción de mochilas.",
      "Prepare the fabric purchases budget for the backpack production.",
    ),
    fields: [
      { id: 'f1', label: t("Tela requerida por la producción (metros)", "Fabric required by production (meters)"), answer: 8000, unit: 'units', tolerance: { abs: 0.5 } },
      { id: 'f2', label: t("Tela a comprar (metros)", "Fabric to purchase (meters)"), answer: 7700, unit: 'units', tolerance: { abs: 0.5 } },
      { id: 'f3', label: t("Costo de las compras", "Cost of purchases"), answer: 269500, unit: 'MXN', tolerance: { abs: 0.5 } },
    ],
    explanation: t(
      "Requerida: 4,000 × 2 = 8,000 m. Compras: 8,000 + 600 − 900 = 7,700 m. Costo: 7,700 × 35 = $269,500. Error común: comprar solo lo requerido (8,000 m) sin aprovechar los 900 m de bodega ni dejar los 600 m de reserva.",
      "Required: 4,000 × 2 = 8,000 m. Purchases: 8,000 + 600 − 900 = 7,700 m. Cost: 7,700 × 35 = $269,500. Common mistake: buying only what is required (8,000 m) without using the 900 m in stock or leaving the 600 m buffer.",
    ),
    difficulty: 2,
    points: 15,
    competency: 'operating-budgets',
  },
  {
    id: 'COS-10-E4',
    level: 3,
    module: 'COS-10',
    kind: 'numeric',
    flavor: 'case',
    context: t(
      "Una empresa de muebles planea producir 3,000 burós. Cada buró requiere 0.5 horas de mano de obra directa y la tarifa es de $90 por hora.",
      "A furniture company plans to produce 3,000 nightstands. Each nightstand requires 0.5 hours of direct labor and the rate is $90 per hour.",
    ),
    prompt: t(
      "¿Cuál es el presupuesto de mano de obra directa para los burós? Responde en pesos.",
      "What is the direct labor budget for the nightstands? Answer in pesos.",
    ),
    answer: 135000,
    unit: 'MXN',
    decimals: 0,
    tolerance: { abs: 0.5 },
    explanation: t(
      "Horas: 3,000 × 0.5 = 1,500. Costo: 1,500 × 90 = $135,000. Error común: multiplicar unidades por tarifa sin las horas por unidad (3,000 × 90 = $270,000).",
      "Hours: 3,000 × 0.5 = 1,500. Cost: 1,500 × 90 = $135,000. Common mistake: multiplying units by the rate without hours per unit (3,000 × 90 = $270,000).",
    ),
    difficulty: 1,
    points: 10,
    competency: 'operating-budgets',
  },
  {
    id: 'COS-10-E5',
    level: 3,
    module: 'COS-10',
    kind: 'classify',
    flavor: 'concept',
    prompt: t(
      "Clasifica cada presupuesto dentro de las dos partes del presupuesto maestro.",
      "Classify each budget within the two parts of the master budget.",
    ),
    categories: [
      { id: 'COS-10-E5-c1', label: t("Presupuesto operativo", "Operating budget") },
      { id: 'COS-10-E5-c2', label: t("Presupuesto financiero", "Financial budget") },
    ],
    items: [
      { id: 'COS-10-E5-i1', label: t("Presupuesto de ventas", "Sales budget"), correctCategoryId: 'COS-10-E5-c1' },
      { id: 'COS-10-E5-i2', label: t("Presupuesto de producción", "Production budget"), correctCategoryId: 'COS-10-E5-c1' },
      { id: 'COS-10-E5-i3', label: t("Presupuesto de flujo de efectivo", "Cash flow budget"), correctCategoryId: 'COS-10-E5-c2' },
      { id: 'COS-10-E5-i4', label: t("Presupuesto de gastos de venta y administración", "Selling and administrative expense budget"), correctCategoryId: 'COS-10-E5-c1' },
      { id: 'COS-10-E5-i5', label: t("Estado de situación financiera presupuestado", "Budgeted balance sheet"), correctCategoryId: 'COS-10-E5-c2' },
      { id: 'COS-10-E5-i6', label: t("Presupuesto de inversiones en maquinaria", "Machinery investment budget"), correctCategoryId: 'COS-10-E5-c2' },
    ],
    explanation: t(
      "Los operativos planean la actividad diaria hasta el estado de resultados: ventas, producción, gastos. Los financieros planean el dinero y la posición: efectivo, inversiones y estado de situación. Error común: poner el flujo de efectivo como operativo porque usa datos de ventas; usa esos datos, pero es un presupuesto financiero.",
      "Operating budgets plan day-to-day activity up to the income statement: sales, production, expenses. Financial budgets plan money and position: cash, investments and balance sheet. Common mistake: classing the cash budget as operating because it uses sales data; it uses that data, but it is a financial budget.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'operating-budgets',
  },
  {
    id: 'COS-10-E6',
    level: 3,
    module: 'COS-10',
    kind: 'truefalse',
    flavor: 'interpret',
    prompt: t(
      "Si una empresa quiere terminar el periodo con más producto terminado del que tiene al inicio, su presupuesto de producción será mayor que su presupuesto de ventas en unidades.",
      "If a company wants to end the period with more finished goods than it has at the start, its production budget will be greater than its sales budget in units.",
    ),
    answer: true,
    explanation: t(
      "Verdadero. Producción = ventas + (inventario final − inventario inicial). Si el final es mayor, la diferencia es positiva y se produce más de lo que se vende. Error común: pensar que producción siempre es igual a ventas.",
      "True. Production = sales + (ending inventory − beginning inventory). If ending is higher, the difference is positive and more is produced than sold. Common mistake: thinking production always equals sales.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'operating-budgets',
  },

  // ═════════════════════════ COS-11 ═════════════════════════
  {
    id: 'COS-11-E1',
    level: 3,
    module: 'COS-11',
    kind: 'classify',
    flavor: 'concept',
    prompt: t(
      "Clasifica cada característica según corresponda a la contabilidad administrativa o a la financiera.",
      "Classify each feature as belonging to managerial or financial accounting.",
    ),
    categories: [
      { id: 'COS-11-E1-c1', label: t("Contabilidad administrativa", "Managerial accounting") },
      { id: 'COS-11-E1-c2', label: t("Contabilidad financiera", "Financial accounting") },
    ],
    items: [
      { id: 'COS-11-E1-i1', label: t("Debe seguir las NIF", "Must follow NIF"), correctCategoryId: 'COS-11-E1-c2' },
      { id: 'COS-11-E1-i2', label: t("Usa el formato que más ayude a decidir", "Uses whatever format best helps decision-making"), correctCategoryId: 'COS-11-E1-c1' },
      { id: 'COS-11-E1-i3', label: t("Se dirige sobre todo a bancos, inversionistas y autoridades", "Is aimed mainly at banks, investors and authorities"), correctCategoryId: 'COS-11-E1-c2' },
      { id: 'COS-11-E1-i4', label: t("Incluye proyecciones y presupuestos del próximo año", "Includes projections and budgets for next year"), correctCategoryId: 'COS-11-E1-c1' },
      { id: 'COS-11-E1-i5', label: t("Reporta la rentabilidad de cada sucursal o producto", "Reports the profitability of each branch or product"), correctCategoryId: 'COS-11-E1-c1' },
      { id: 'COS-11-E1-i6', label: t("Presenta a la empresa en conjunto en estados financieros periódicos", "Presents the company as a whole in periodic financial statements"), correctCategoryId: 'COS-11-E1-c2' },
    ],
    explanation: t(
      "La financiera sigue NIF, sirve a externos y muestra a la empresa completa. La administrativa es libre en formato, mira al futuro y detalla por segmentos para usuarios internos. Error común: creer que los presupuestos son parte de los estados financieros para terceros.",
      "Financial accounting follows NIF, serves outsiders and shows the whole company. Managerial accounting has a free format, looks to the future and breaks results down by segment for internal users. Common mistake: believing budgets are part of the financial statements for third parties.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'managerial-accounting',
  },
  {
    id: 'COS-11-E2',
    level: 3,
    module: 'COS-11',
    kind: 'mcq',
    flavor: 'case',
    context: t(
      "Cada viernes, el gerente de una cadena de lavanderías compara los gastos reales de detergente y gas de cada sucursal con lo presupuestado y pide explicaciones donde hubo desvíos.",
      "Every Friday, the manager of a laundromat chain compares each branch's actual detergent and gas spending with budget and asks for explanations where there were deviations.",
    ),
    prompt: t(
      "¿Qué función de la contabilidad administrativa está aplicando el gerente de las lavanderías?",
      "Which managerial accounting function is the laundromat manager applying?",
    ),
    options: [
      { id: 'COS-11-E2-a', text: t("Planeación", "Planning") },
      { id: 'COS-11-E2-b', text: t("Control", "Control") },
      { id: 'COS-11-E2-c', text: t("Cumplimiento fiscal", "Tax compliance") },
      { id: 'COS-11-E2-d', text: t("Auditoría externa", "External audit") },
    ],
    correctOptionId: 'COS-11-E2-b',
    explanation: t(
      "Comparar lo real contra lo planeado y pedir correcciones es control. La planeación fue antes, al hacer el presupuesto. Error común: confundirlo con auditoría externa, que la realiza un tercero independiente sobre los estados financieros.",
      "Comparing actual with plan and asking for corrections is control. Planning happened earlier, when the budget was made. Common mistake: confusing it with an external audit, which an independent third party performs on the financial statements.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'managerial-accounting',
  },
  {
    id: 'COS-11-E3',
    level: 3,
    module: 'COS-11',
    kind: 'fields',
    flavor: 'statement',
    context: t(
      "Una fábrica de licuadoras produjo 5,000 unidades y vendió 4,000 a $200. Costo variable de fabricación: $80 por unidad. Gastos fijos de fabricación: $100,000. Gastos fijos de operación: $50,000. No hay gastos variables de venta ni inventario inicial.",
      "A blender factory produced 5,000 units and sold 4,000 at $200. Variable manufacturing cost: $80 per unit. Fixed manufacturing overhead: $100,000. Fixed operating expenses: $50,000. There are no variable selling expenses and no beginning inventory.",
    ),
    prompt: t(
      "Calcula la utilidad de la fábrica de licuadoras con costeo directo y con costeo absorbente.",
      "Compute the blender factory's profit under direct costing and under absorption costing.",
    ),
    fields: [
      { id: 'f1', label: t("Utilidad con costeo directo", "Profit under direct costing"), answer: 330000, unit: 'MXN', tolerance: { abs: 0.5 } },
      { id: 'f2', label: t("Costo unitario con costeo absorbente", "Unit cost under absorption costing"), answer: 100, unit: 'MXN', tolerance: { abs: 0.01 } },
      { id: 'f3', label: t("Utilidad con costeo absorbente", "Profit under absorption costing"), answer: 350000, unit: 'MXN', tolerance: { abs: 0.5 } },
    ],
    explanation: t(
      "Directo: ventas 800,000 − variables 4,000 × 80 = 320,000 → MC 480,000 − fijos 150,000 = $330,000. Absorbente: costo unitario 80 + 100,000 ÷ 5,000 = $100; costo de ventas 400,000; utilidad bruta 400,000 − 50,000 = $350,000. La diferencia de $20,000 son 1,000 unidades en inventario × $20 de fijo. Error común: repartir los fijos de fabricación entre las unidades vendidas (4,000) en lugar de las producidas.",
      "Direct: sales 800,000 − variable 4,000 × 80 = 320,000 → CM 480,000 − fixed 150,000 = $330,000. Absorption: unit cost 80 + 100,000 ÷ 5,000 = $100; cost of sales 400,000; gross profit 400,000 − 50,000 = $350,000. The $20,000 difference is 1,000 units in inventory × $20 of fixed overhead. Common mistake: spreading fixed overhead over units sold (4,000) instead of units produced.",
    ),
    difficulty: 2,
    points: 20,
    competency: 'managerial-accounting',
  },
  {
    id: 'COS-11-E4',
    level: 3,
    module: 'COS-11',
    kind: 'truefalse',
    flavor: 'concept',
    prompt: t(
      "Los reportes internos que usa la dirección para decidir deben elaborarse obligatoriamente conforme a las NIF.",
      "The internal reports management uses to make decisions must be prepared according to NIF.",
    ),
    answer: false,
    explanation: t(
      "Falso. Las NIF rigen los estados financieros para terceros. Los reportes internos pueden tener el formato y el detalle que la dirección necesite, por ejemplo costeo directo o rentabilidad por sucursal. Error común: pensar que todo reporte con números es «contabilidad financiera».",
      "False. NIF govern financial statements for third parties. Internal reports can have whatever format and detail management needs, for example direct costing or profitability by branch. Common mistake: thinking every report with numbers is «financial accounting».",
    ),
    difficulty: 1,
    points: 10,
    competency: 'managerial-accounting',
  },
  {
    id: 'COS-11-E5',
    level: 3,
    module: 'COS-11',
    kind: 'numeric',
    flavor: 'interpret',
    context: t(
      "Una fábrica de cajas tuvo gastos fijos de fabricación de $75,000; produjo 3,000 cajas y vendió 2,400. No había inventario inicial.",
      "A box factory had fixed manufacturing overhead of $75,000; it produced 3,000 boxes and sold 2,400. There was no beginning inventory.",
    ),
    prompt: t(
      "¿Por cuántos pesos supera la utilidad con costeo absorbente a la utilidad con costeo directo en la fábrica de cajas?",
      "By how many pesos does absorption-costing profit exceed direct-costing profit at the box factory?",
    ),
    answer: 15000,
    unit: 'MXN',
    decimals: 0,
    tolerance: { abs: 0.5 },
    explanation: t(
      "Fijo por caja: 75,000 ÷ 3,000 = $25. Quedaron 3,000 − 2,400 = 600 cajas en inventario, que «guardan» 600 × 25 = $15,000 de fijos. Por eso el absorbente muestra $15,000 más. Error común: dividir los fijos entre las cajas vendidas (75,000 ÷ 2,400).",
      "Fixed per box: 75,000 ÷ 3,000 = $25. 3,000 − 2,400 = 600 boxes remained in inventory, which «store» 600 × 25 = $15,000 of fixed overhead. That is why absorption shows $15,000 more. Common mistake: dividing fixed overhead by boxes sold (75,000 ÷ 2,400).",
    ),
    difficulty: 2,
    points: 15,
    competency: 'managerial-accounting',
  },
  {
    id: 'COS-11-E6',
    level: 3,
    module: 'COS-11',
    kind: 'multi',
    flavor: 'concept',
    prompt: t(
      "¿Cuáles de estos reportes son típicos de la contabilidad administrativa? Selecciona todos los que apliquen.",
      "Which of these reports are typical of managerial accounting? Select all that apply.",
    ),
    options: [
      { id: 'COS-11-E6-a', text: t("Costo unitario de cada producto para fijar precios", "Unit cost of each product to set prices") },
      { id: 'COS-11-E6-b', text: t("Presupuesto de gastos del próximo trimestre", "Expense budget for next quarter") },
      { id: 'COS-11-E6-c', text: t("Declaración anual de impuestos", "Annual tax return") },
      { id: 'COS-11-E6-d', text: t("Margen de contribución por sucursal", "Contribution margin by branch") },
      { id: 'COS-11-E6-e', text: t("Estados financieros dictaminados para los accionistas", "Audited financial statements for shareholders") },
    ],
    correctOptionIds: ['COS-11-E6-a', 'COS-11-E6-b', 'COS-11-E6-d'],
    explanation: t(
      "Costo por producto, presupuestos y márgenes por sucursal son información interna para decidir. La declaración anual es contabilidad fiscal y los estados dictaminados son contabilidad financiera para externos. Error común: marcar los estados dictaminados porque «los ve la dirección»; también los ve, pero se elaboran para terceros bajo NIF.",
      "Product cost, budgets and branch margins are internal information for decisions. The annual return is tax accounting and audited statements are financial accounting for outsiders. Common mistake: ticking audited statements because «management sees them»; it does, but they are prepared for third parties under NIF.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'managerial-accounting',
  },

  // ═════════════════════════ COS-12 ═════════════════════════
  {
    id: 'COS-12-E1',
    level: 3,
    module: 'COS-12',
    kind: 'mcq',
    flavor: 'concept',
    prompt: t(
      "En un reporte de control de gastos, ¿cuándo es **favorable** una variación?",
      "In an expense control report, when is a variance **favorable**?",
    ),
    options: [
      { id: 'COS-12-E1-a', text: t("Cuando el gasto real es mayor que el presupuestado", "When the actual expense is higher than budgeted") },
      { id: 'COS-12-E1-b', text: t("Cuando el gasto real es menor que el presupuestado", "When the actual expense is lower than budgeted") },
      { id: 'COS-12-E1-c', text: t("Cuando el gasto real es igual al del año pasado", "When the actual expense equals last year's") },
      { id: 'COS-12-E1-d', text: t("Solo cuando el gasto real es cero", "Only when the actual expense is zero") },
    ],
    correctOptionId: 'COS-12-E1-b',
    explanation: t(
      "En gastos, gastar menos de lo planeado mejora la utilidad: es favorable. En ingresos es al revés: vender más de lo planeado es favorable. Aun así, las variaciones favorables grandes también se investigan. Error común: pensar que una cifra real mayor siempre es favorable.",
      "For expenses, spending less than planned improves profit: it is favorable. For revenue it is the opposite: selling more than planned is favorable. Even so, large favorable variances are investigated too. Common mistake: thinking a higher actual figure is always favorable.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'budget-control',
  },
  {
    id: 'COS-12-E2',
    level: 3,
    module: 'COS-12',
    kind: 'numeric',
    flavor: 'case',
    context: t(
      "El presupuesto de gastos de fabricación de una planta de envases es de $40,000 fijos más $12 por unidad. Se planearon 3,000 unidades, pero se produjeron 3,500.",
      "A packaging plant's manufacturing expense budget is $40,000 fixed plus $12 per unit. 3,000 units were planned, but 3,500 were produced.",
    ),
    prompt: t(
      "¿Cuál es el presupuesto flexible de gastos de fabricación de la planta de envases para el volumen real? Responde en pesos.",
      "What is the packaging plant's flexible manufacturing expense budget for the actual volume? Answer in pesos.",
    ),
    answer: 82000,
    unit: 'MXN',
    decimals: 0,
    tolerance: { abs: 0.5 },
    explanation: t(
      "Flexible = 40,000 + 12 × 3,500 = 40,000 + 42,000 = $82,000. Contra esta cifra se comparan los gastos reales. Error común: usar las 3,000 unidades planeadas ($76,000), que es el presupuesto estático.",
      "Flexible = 40,000 + 12 × 3,500 = 40,000 + 42,000 = $82,000. Actual expenses are compared against this figure. Common mistake: using the 3,000 planned units ($76,000), which is the static budget.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'budget-control',
  },
  {
    id: 'COS-12-E3',
    level: 3,
    module: 'COS-12',
    kind: 'fields',
    flavor: 'case',
    context: t(
      "Una fábrica de ventiladores planeó vender 2,000 unidades a $300, con costo variable de $180 y fijos de $150,000 (utilidad planeada $90,000). Vendió 2,200 unidades y su utilidad real fue $96,000.",
      "A fan factory planned to sell 2,000 units at $300, with a variable cost of $180 and fixed costs of $150,000 (planned profit $90,000). It sold 2,200 units and its actual profit was $96,000.",
    ),
    prompt: t(
      "Prepara el análisis con presupuesto flexible de la fábrica de ventiladores.",
      "Prepare the fan factory's flexible-budget analysis.",
    ),
    fields: [
      { id: 'f1', label: t("Utilidad del presupuesto flexible (2,200 unidades)", "Flexible-budget profit (2,200 units)"), answer: 114000, unit: 'MXN', tolerance: { abs: 0.5 } },
      { id: 'f2', label: t("Variación por volumen (favorable)", "Volume variance (favorable)"), answer: 24000, unit: 'MXN', tolerance: { abs: 0.5 } },
      { id: 'f3', label: t("Variación de presupuesto flexible (desfavorable)", "Flexible-budget variance (unfavorable)"), answer: 18000, unit: 'MXN', tolerance: { abs: 0.5 } },
    ],
    explanation: t(
      "Flexible: 2,200 × (300 − 180) − 150,000 = 264,000 − 150,000 = $114,000. Volumen: 114,000 − 90,000 = $24,000 F. Flexible: 96,000 − 114,000 = $18,000 D. Aunque la utilidad real superó al plan por $6,000, la gestión de precios y costos restó $18,000. Error común: comparar solo real contra estático y concluir que todo salió bien.",
      "Flexible: 2,200 × (300 − 180) − 150,000 = 264,000 − 150,000 = $114,000. Volume: 114,000 − 90,000 = $24,000 F. Flexible-budget: 96,000 − 114,000 = $18,000 U. Although actual profit beat the plan by $6,000, price and cost management took away $18,000. Common mistake: comparing only actual against static and concluding everything went well.",
    ),
    difficulty: 2,
    points: 20,
    competency: 'budget-control',
  },
  {
    id: 'COS-12-E4',
    level: 3,
    module: 'COS-12',
    kind: 'classify',
    flavor: 'concept',
    prompt: t(
      "Clasifica cada área según el tipo de centro de responsabilidad que le corresponde.",
      "Classify each area by the type of responsibility center it corresponds to.",
    ),
    categories: [
      { id: 'COS-12-E4-c1', label: t("Centro de costos", "Cost center") },
      { id: 'COS-12-E4-c2', label: t("Centro de ingresos", "Revenue center") },
      { id: 'COS-12-E4-c3', label: t("Centro de utilidades", "Profit center") },
      { id: 'COS-12-E4-c4', label: t("Centro de inversión", "Investment center") },
    ],
    items: [
      { id: 'COS-12-E4-i1', label: t("Planta de producción que responde por el costo de fabricar", "Production plant answering for manufacturing cost"), correctCategoryId: 'COS-12-E4-c1' },
      { id: 'COS-12-E4-i2', label: t("Departamento de ventas que responde por cuánto vende", "Sales department answering for how much it sells"), correctCategoryId: 'COS-12-E4-c2' },
      { id: 'COS-12-E4-i3', label: t("Sucursal con su propio estado de resultados", "Branch with its own income statement"), correctCategoryId: 'COS-12-E4-c3' },
      { id: 'COS-12-E4-i4', label: t("División que además decide comprar maquinaria y abrir plantas", "Division that also decides to buy machinery and open plants"), correctCategoryId: 'COS-12-E4-c4' },
      { id: 'COS-12-E4-i5', label: t("Departamento de mantenimiento", "Maintenance department"), correctCategoryId: 'COS-12-E4-c1' },
      { id: 'COS-12-E4-i6', label: t("Tienda en línea que fija sus precios y controla sus costos", "Online store that sets its prices and controls its costs"), correctCategoryId: 'COS-12-E4-c3' },
    ],
    explanation: t(
      "Costos: solo controla gastos (planta, mantenimiento). Ingresos: responde por ventas. Utilidades: ingresos y costos (sucursal, tienda en línea). Inversión: utilidades más decisiones sobre activos (división). Error común: llamar centro de inversión a cualquier sucursal grande; lo que lo define es que decida inversiones.",
      "Cost: only controls expenses (plant, maintenance). Revenue: answers for sales. Profit: revenue and costs (branch, online store). Investment: profit plus decisions on assets (division). Common mistake: calling any large branch an investment center; what defines it is that it decides investments.",
    ),
    difficulty: 2,
    points: 15,
    competency: 'budget-control',
  },
  {
    id: 'COS-12-E5',
    level: 3,
    module: 'COS-12',
    kind: 'truefalse',
    flavor: 'interpret',
    prompt: t(
      "Para evaluar a un gerente de producción que fabricó más unidades de las planeadas, lo más justo es comparar sus costos reales contra el presupuesto estático original.",
      "To evaluate a production manager who made more units than planned, the fairest approach is to compare actual costs against the original static budget.",
    ),
    answer: false,
    explanation: t(
      "Falso. Al producir más, sus costos variables suben de forma natural. Lo justo es compararlos contra el presupuesto flexible, ajustado al volumen real, para medir solo su eficiencia en precios y consumos. Error común: castigar al gerente por gastar más cuando en realidad produjo más.",
      "False. By producing more, variable costs naturally rise. The fair comparison is against the flexible budget, adjusted to actual volume, to measure only efficiency in prices and usage. Common mistake: penalizing the manager for spending more when they actually produced more.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'budget-control',
  },
  {
    id: 'COS-12-E6',
    level: 3,
    module: 'COS-12',
    kind: 'multi',
    flavor: 'case',
    context: t(
      "La dirección de una fábrica de galletas investiga toda variación mayor a 5 % del presupuesto, favorable o desfavorable. Reporte del mes (presupuesto → real): materiales $100,000 → $108,000; energía $20,000 → $20,600; mantenimiento $40,000 → $37,000; sueldos $150,000 → $153,000; fletes $10,000 → $11,000.",
      "A cookie factory's management investigates every variance above 5% of budget, favorable or unfavorable. Monthly report (budget → actual): materials $100,000 → $108,000; energy $20,000 → $20,600; maintenance $40,000 → $37,000; wages $150,000 → $153,000; freight $10,000 → $11,000.",
    ),
    prompt: t(
      "Aplicando gestión por excepción, ¿qué partidas de la fábrica de galletas deben investigarse? Selecciona todas las que apliquen.",
      "Applying management by exception, which of the cookie factory's items should be investigated? Select all that apply.",
    ),
    options: [
      { id: 'COS-12-E6-a', text: t("Materiales", "Materials") },
      { id: 'COS-12-E6-b', text: t("Energía", "Energy") },
      { id: 'COS-12-E6-c', text: t("Mantenimiento", "Maintenance") },
      { id: 'COS-12-E6-d', text: t("Sueldos", "Wages") },
      { id: 'COS-12-E6-e', text: t("Fletes", "Freight") },
    ],
    correctOptionIds: ['COS-12-E6-a', 'COS-12-E6-c', 'COS-12-E6-e'],
    explanation: t(
      "Materiales 8 % D, energía 3 % D, mantenimiento 7.5 % F, sueldos 2 % D, fletes 10 % D. Rebasan el 5 %: materiales, mantenimiento y fletes. Error común: fijarse en el monto y no en el porcentaje (sueldos varió $3,000, pero solo 2 %), u omitir mantenimiento por ser favorable.",
      "Materials 8% U, energy 3% U, maintenance 7.5% F, wages 2% U, freight 10% U. Above 5%: materials, maintenance and freight. Common mistake: looking at the amount instead of the percentage (wages varied $3,000, but only 2%), or skipping maintenance because it is favorable.",
    ),
    difficulty: 2,
    points: 15,
    competency: 'budget-control',
  },
]
