import type { Exercise, Lesson } from '../../../types'

/**
 * FINCORE — Temario v2.0, área Costos y Contabilidad Administrativa (nivel 3, etapa Avanzado):
 * COS.13 (indicadores de desempeño empresarial) y COS.14 (costos para la toma de decisiones).
 */

export const lessons: Lesson[] = [
  // ───────────────────────────── COS-13 ─────────────────────────────
  {
    id: 'COS-13',
    level: 3,
    topicIds: ['COS.13'],
    title: { es: "Indicadores de desempeño empresarial", en: "Business performance indicators" },
    summary: {
      es: "Los indicadores clave (KPI) convierten la estrategia en números medibles: el ROI, el ingreso residual y el Balanced Scorecard te dicen si cada área avanza hacia sus metas.",
      en: "Key indicators (KPIs) turn strategy into measurable numbers: ROI, residual income and the Balanced Scorecard tell you whether each area is moving toward its goals.",
    },
    minutes: 19,
    objectives: [
      { es: "Distinguir una métrica cualquiera de un indicador clave (KPI) bien diseñado.", en: "Distinguish an ordinary metric from a well-designed key indicator (KPI)." },
      { es: "Calcular el ROI con el modelo DuPont y el ingreso residual de una división.", en: "Compute ROI with the DuPont model and the residual income of a division." },
      { es: "Ubicar indicadores en las cuatro perspectivas del Balanced Scorecard.", en: "Place indicators in the four perspectives of the Balanced Scorecard." },
      { es: "Calcular e interpretar indicadores operativos como días de inventario y tasa de defectos.", en: "Compute and interpret operating indicators such as inventory days and defect rate." },
    ],
    theory: [
      {
        heading: { es: "¿Qué es un indicador clave (KPI)?", en: "What is a key performance indicator (KPI)?" },
        body: [
          {
            es: "Una **métrica** es cualquier dato que se puede contar: visitas a la página, llamadas, kilos vendidos. Un **indicador clave de desempeño** (KPI, por sus siglas en inglés) es una métrica que la empresa eligió porque mide algo **importante para su estrategia** y tiene una **meta** contra la cual compararse.",
            en: "A **metric** is any data you can count: website visits, calls, kilos sold. A **key performance indicator** (KPI) is a metric the company chose because it measures something **important for its strategy** and has a **target** to compare against.",
          },
          {
            es: "Un buen KPI es claro, medible, tiene un responsable, una meta y una frecuencia (diaria, mensual). Si nadie actúa cuando el indicador se sale de la meta, no es un KPI: es solo un número bonito en un reporte.",
            en: "A good KPI is clear, measurable, has an owner, a target and a frequency (daily, monthly). If nobody acts when the indicator misses its target, it is not a KPI: it is just a pretty number in a report.",
          },
          {
            es: "Hay **indicadores de resultado** (rezagados), que dicen lo que ya pasó, como la utilidad del trimestre, e **indicadores adelantados**, que avisan lo que probablemente pasará, como las cotizaciones enviadas o la satisfacción del cliente. Se necesitan ambos: los adelantados dan tiempo de corregir.",
            en: "There are **outcome (lagging) indicators**, which tell what already happened, like the quarter's profit, and **leading indicators**, which warn what will probably happen, like quotes sent or customer satisfaction. You need both: leading ones give you time to correct.",
          },
          {
            es: "Mini ejemplo: una taquería en Guadalajara mide «tiempo promedio de entrega a domicilio», con meta de 30 minutos, revisión semanal y el encargado de reparto como responsable. Eso sí es un KPI.",
            en: "Mini example: a taco shop in Guadalajara measures \"average home-delivery time\", with a 30-minute target, weekly review and the delivery manager as owner. That is a real KPI.",
          },
        ],
        formulas: [
          {
            name: { es: "Porcentaje de cumplimiento de una meta", en: "Percentage of target achieved" },
            expression: "Cumplimiento (%) = Resultado real ÷ Meta × 100",
            variables: [
              { symbol: "Cumplimiento (%)", meaning: { es: "Qué tanto de la meta lograste, en porcentaje.", en: "How much of the target you achieved, as a percentage." } },
              { symbol: "Resultado real", meaning: { es: "Lo que de verdad pasó en el periodo (pesos vendidos, clientes atendidos, etc.).", en: "What actually happened in the period (pesos sold, customers served, etc.)." } },
              { symbol: "Meta", meaning: { es: "El número que la empresa se propuso alcanzar, en la misma unidad que el resultado.", en: "The number the company set out to reach, in the same unit as the result." } },
            ],
            steps: [
              { es: "Anota el resultado real y la meta en la misma unidad (los dos en pesos, los dos en piezas…).", en: "Write down the actual result and the target in the same unit (both in pesos, both in pieces…)." },
              { es: "Divide el resultado real entre la meta.", en: "Divide the actual result by the target." },
              { es: "Multiplica por 100 para expresarlo en porcentaje.", en: "Multiply by 100 to express it as a percentage." },
              { es: "Compáralo con el semáforo: cerca de 100 % o más es verde; muy abajo, rojo.", en: "Compare it with the traffic light: near 100% or more is green; far below, red." },
            ],
            example: {
              es: "Una tiendita tenía meta de vender $50,000 en el mes y vendió $45,000. 45,000 ÷ 50,000 = 0.9; 0.9 × 100 = **90 %** de cumplimiento.",
              en: "A corner store had a target of selling $50,000 in the month and sold $45,000. 45,000 ÷ 50,000 = 0.9; 0.9 × 100 = **90%** achievement.",
            },
            interpret: {
              es: "100 % significa que llegaste justo a la meta; más de 100 %, que la superaste; menos, que te faltó.",
              en: "100% means you hit the target exactly; above 100%, you beat it; below, you fell short.",
            },
            mistake: {
              es: "Olvidar que en indicadores donde «menos es mejor» (tiempo de entrega, defectos) quedar arriba de la meta es malo, no bueno.",
              en: "Forgetting that in \"less is better\" indicators (delivery time, defects) being above the target is bad, not good.",
            },
          },
        ],
        bullets: [
          { es: "Pocos y relevantes: de 5 a 10 KPI por área suele bastar.", en: "Few and relevant: 5 to 10 KPIs per area is usually enough." },
          { es: "Con meta, responsable y frecuencia de revisión.", en: "With a target, an owner and a review frequency." },
          { es: "Mezcla de indicadores adelantados y de resultado.", en: "A mix of leading and outcome indicators." },
          { es: "Semáforo: verde en meta, amarillo cerca, rojo lejos de la meta.", en: "Traffic light: green on target, yellow close, red far from target." },
        ],
      },
      {
        heading: { es: "Indicadores financieros: ROI, DuPont e ingreso residual", en: "Financial indicators: ROI, DuPont and residual income" },
        body: [
          {
            es: "En palabras sencillas: el ROI responde «por cada peso que metí en el negocio, ¿cuántos centavos de ganancia me regresó?». La **utilidad operativa** es lo que gana el negocio con su actividad normal antes de intereses e impuestos; los **activos operativos** son lo que usa para trabajar (local, equipo, inventario, mercancía).",
            en: "In plain words: ROI answers \"for every peso I put into the business, how many cents of profit did it give back?\". **Operating profit** is what the business earns from its normal activity before interest and taxes; **operating assets** are what it uses to work (premises, equipment, inventory, goods).",
          },
          {
            es: "Cuando una empresa tiene divisiones o sucursales, cada una es un **centro de inversión**: su gerente decide ventas, costos y activos. Para evaluarlo se usa el **rendimiento sobre la inversión** (ROI): cuánta utilidad operativa genera cada peso invertido en activos operativos.",
            en: "When a company has divisions or branches, each one is an **investment center**: its manager decides sales, costs and assets. To evaluate it we use **return on investment** (ROI): how much operating profit each peso invested in operating assets generates.",
          },
          {
            es: "El **modelo DuPont** separa el ROI en dos palancas: el **margen** (cuánto de cada peso vendido queda como utilidad) y la **rotación de activos** (cuántas veces «dan vuelta» los activos en ventas). Una tienda de abarrotes gana con rotación alta y margen bajo; una joyería, al revés.",
            en: "The **DuPont model** splits ROI into two levers: **margin** (how much of each peso sold remains as profit) and **asset turnover** (how many times assets \"turn over\" into sales). A grocery store wins with high turnover and low margin; a jewelry store, the opposite.",
          },
          {
            es: "El ROI tiene una trampa: un gerente con ROI de 20 % puede rechazar un proyecto de 16 % aunque la empresa solo exija 12 %, porque bajaría su promedio. El **ingreso residual** corrige eso: es la utilidad que sobra después de cobrar a la división el rendimiento mínimo exigido sobre sus activos.",
            en: "ROI has a trap: a manager with a 20% ROI may reject a 16% project even if the company only requires 12%, because it would lower the average. **Residual income** fixes that: it is the profit left after charging the division the minimum required return on its assets.",
          },
          {
            es: "Mini ejemplo: una sucursal vende $4,000,000, gana $400,000 y usa activos de $2,000,000. Margen = 10 %, rotación = 2 veces, ROI = 20 %. Con tasa mínima de 12 %, ingreso residual = 400,000 − 240,000 = $160,000.",
            en: "Mini example: a branch sells $4,000,000, earns $400,000 and uses $2,000,000 of assets. Margin = 10%, turnover = 2 times, ROI = 20%. With a 12% minimum rate, residual income = 400,000 − 240,000 = $160,000.",
          },
        ],
        formulas: [
          {
            name: { es: "ROI con el modelo DuPont (margen × rotación)", en: "ROI with the DuPont model (margin × turnover)" },
            expression: "Margen = Utilidad operativa ÷ Ventas × 100  |  Rotación de activos = Ventas ÷ Activos operativos  |  ROI = Margen × Rotación = Utilidad operativa ÷ Activos operativos × 100",
            variables: [
              { symbol: "Utilidad operativa", meaning: { es: "Lo que ganó la división con su operación normal en el año, en pesos.", en: "What the division earned from its normal operations in the year, in pesos." } },
              { symbol: "Ventas", meaning: { es: "Todo lo que vendió la división en el año, en pesos.", en: "Everything the division sold in the year, in pesos." } },
              { symbol: "Activos operativos", meaning: { es: "El valor de lo que usa para trabajar (local, equipo, inventario), en pesos; normalmente el promedio del año.", en: "The value of what it uses to work (premises, equipment, inventory), in pesos; usually the year's average." } },
              { symbol: "Margen", meaning: { es: "Qué parte de cada peso vendido queda como utilidad, en %.", en: "What share of each peso sold remains as profit, in %." } },
              { symbol: "Rotación de activos", meaning: { es: "Cuántas veces al año los activos «se convierten» en ventas, en veces.", en: "How many times a year the assets \"turn into\" sales, in times." } },
              { symbol: "ROI", meaning: { es: "Rendimiento sobre la inversión: utilidad por cada peso de activos, en %.", en: "Return on investment: profit per peso of assets, in %." } },
            ],
            steps: [
              { es: "Calcula el margen: utilidad operativa ÷ ventas × 100.", en: "Compute the margin: operating profit ÷ sales × 100." },
              { es: "Calcula la rotación: ventas ÷ activos operativos (el resultado son «veces», no %).", en: "Compute turnover: sales ÷ operating assets (the result is \"times\", not %)." },
              { es: "Multiplica margen × rotación para obtener el ROI en %.", en: "Multiply margin × turnover to get ROI in %." },
              { es: "Comprueba: utilidad operativa ÷ activos operativos × 100 debe darte el mismo ROI.", en: "Check: operating profit ÷ operating assets × 100 must give the same ROI." },
            ],
            example: {
              es: "Una sucursal vende $6,000,000, gana $450,000 y usa activos por $3,000,000. Margen = 450,000 ÷ 6,000,000 × 100 = 7.5 %. Rotación = 6,000,000 ÷ 3,000,000 = 2 veces. ROI = 7.5 % × 2 = **15 %**. Comprobación: 450,000 ÷ 3,000,000 × 100 = 15 %.",
              en: "A branch sells $6,000,000, earns $450,000 and uses $3,000,000 of assets. Margin = 450,000 ÷ 6,000,000 × 100 = 7.5%. Turnover = 6,000,000 ÷ 3,000,000 = 2 times. ROI = 7.5% × 2 = **15%**. Check: 450,000 ÷ 3,000,000 × 100 = 15%.",
            },
            interpret: {
              es: "Un ROI de 15 % significa que cada $100 en activos generaron $15 de utilidad al año. Si el ROI es bajo, el desglose te dice si el problema es el margen (vendes barato o gastas mucho) o la rotación (tienes demasiados activos para lo que vendes).",
              en: "A 15% ROI means every $100 in assets generated $15 of profit in the year. If ROI is low, the breakdown tells you whether the problem is margin (you sell cheap or spend a lot) or turnover (you have too many assets for what you sell).",
            },
            mistake: {
              es: "Sumar margen y rotación en lugar de multiplicarlos, o dividir la utilidad entre las ventas y llamarle ROI (eso es solo el margen).",
              en: "Adding margin and turnover instead of multiplying them, or dividing profit by sales and calling it ROI (that is only the margin).",
            },
          },
          {
            name: { es: "Ingreso residual", en: "Residual income" },
            expression: "Ingreso residual = Utilidad operativa − (Tasa mínima × Activos operativos)",
            variables: [
              { symbol: "Ingreso residual", meaning: { es: "La utilidad que sobra después de cubrir el rendimiento mínimo que exige la empresa, en pesos.", en: "The profit left after covering the minimum return the company requires, in pesos." } },
              { symbol: "Utilidad operativa", meaning: { es: "Lo que ganó la división (o el proyecto) con su operación, en pesos.", en: "What the division (or project) earned from its operations, in pesos." } },
              { symbol: "Tasa mínima", meaning: { es: "El rendimiento mínimo anual que la empresa exige a sus inversiones, en % (úsalo en decimal: 12 % = 0.12).", en: "The minimum annual return the company requires on its investments, in % (use it as a decimal: 12% = 0.12)." } },
              { symbol: "Activos operativos", meaning: { es: "Lo que la división (o el proyecto) tiene invertido en activos, en pesos.", en: "What the division (or project) has invested in assets, in pesos." } },
            ],
            steps: [
              { es: "Convierte la tasa mínima a decimal: por ejemplo, 10 % = 0.10.", en: "Convert the minimum rate to a decimal: for example, 10% = 0.10." },
              { es: "Calcula el cargo por capital: tasa mínima × activos operativos.", en: "Compute the capital charge: minimum rate × operating assets." },
              { es: "Resta ese cargo a la utilidad operativa.", en: "Subtract that charge from operating profit." },
            ],
            example: {
              es: "Una división gana $500,000 con activos de $4,000,000 y la tasa mínima es 10 %. Cargo por capital = 0.10 × 4,000,000 = $400,000. Ingreso residual = 500,000 − 400,000 = **$100,000**.",
              en: "A division earns $500,000 with $4,000,000 of assets and the minimum rate is 10%. Capital charge = 0.10 × 4,000,000 = $400,000. Residual income = 500,000 − 400,000 = **$100,000**.",
            },
            interpret: {
              es: "Positivo: la división (o el proyecto) gana más de lo mínimo exigido y crea valor. Negativo: no alcanza el mínimo. Para un proyecto nuevo, lo que importa es si su rendimiento supera la tasa mínima, no si supera el ROI actual de la división.",
              en: "Positive: the division (or project) earns more than the required minimum and creates value. Negative: it does not reach the minimum. For a new project, what matters is whether its return beats the minimum rate, not whether it beats the division's current ROI.",
            },
            mistake: {
              es: "Aplicar la tasa mínima a la utilidad (utilidad × tasa) en lugar de a los activos.",
              en: "Applying the minimum rate to profit (profit × rate) instead of to assets.",
            },
          },
        ],
      },
      {
        heading: { es: "Balanced Scorecard e indicadores operativos", en: "Balanced Scorecard and operating indicators" },
        body: [
          {
            es: "Medir solo dinero es como manejar viendo el retrovisor. El **Balanced Scorecard** (cuadro de mando integral), propuesto por Kaplan y Norton en los años noventa, ordena los KPI en **cuatro perspectivas** conectadas: aprendizaje y crecimiento → procesos internos → clientes → finanzas.",
            en: "Measuring only money is like driving while looking in the rear-view mirror. The **Balanced Scorecard**, proposed by Kaplan and Norton in the 1990s, organizes KPIs into **four connected perspectives**: learning and growth → internal processes → customers → finance.",
          },
          {
            es: "La lógica es de causa y efecto: personal capacitado mejora los procesos; procesos con menos errores dejan clientes satisfechos; clientes que vuelven generan utilidades. Si la utilidad cae, el tablero te ayuda a buscar la causa en las otras perspectivas.",
            en: "The logic is cause and effect: trained staff improve processes; processes with fewer errors leave customers satisfied; returning customers generate profit. If profit falls, the scorecard helps you look for the cause in the other perspectives.",
          },
          {
            es: "Los **indicadores operativos** miden el día a día. Los **días de inventario** dicen cuánto tarda, en promedio, la mercancía en venderse; la **tasa de defectos** dice qué parte de la producción sale mal; las **entregas a tiempo** dicen qué tan confiable eres con tus clientes.",
            en: "**Operating indicators** measure day-to-day work. **Inventory days** tell how long, on average, goods take to sell; the **defect rate** tells what share of output comes out wrong; **on-time deliveries** tell how reliable you are with customers.",
          },
          {
            es: "Mini ejemplo: una fábrica de muebles produjo 2,000 sillas y 30 salieron con defecto. Tasa de defectos = 30 ÷ 2,000 = 1.5 %. Si su meta es 1 %, el indicador está en rojo y conviene revisar el proceso de ensamble.",
            en: "Mini example: a furniture factory made 2,000 chairs and 30 were defective. Defect rate = 30 ÷ 2,000 = 1.5%. If its target is 1%, the indicator is red and the assembly process should be reviewed.",
          },
        ],
        formulas: [
          {
            name: { es: "Rotación y días de inventario", en: "Inventory turnover and inventory days" },
            expression: "Rotación de inventario = Costo de ventas ÷ Inventario promedio  |  Días de inventario = 365 ÷ Rotación",
            variables: [
              { symbol: "Costo de ventas", meaning: { es: "Lo que le costó a la empresa la mercancía que vendió en el año, en pesos (no el precio de venta).", en: "What the goods sold during the year cost the company, in pesos (not the selling price)." } },
              { symbol: "Inventario promedio", meaning: { es: "La mercancía que suele tener en bodega, en pesos; si no te lo dan, es (inventario inicial + inventario final) ÷ 2.", en: "The goods it usually holds in stock, in pesos; if not given, it is (beginning inventory + ending inventory) ÷ 2." } },
              { symbol: "Rotación de inventario", meaning: { es: "Cuántas veces al año se vende y se repone todo el inventario, en veces.", en: "How many times a year the whole inventory is sold and replaced, in times." } },
              { symbol: "365", meaning: { es: "Los días de un año.", en: "The days in a year." } },
              { symbol: "Días de inventario", meaning: { es: "Cuántos días tarda, en promedio, la mercancía en venderse.", en: "How many days, on average, goods take to sell." } },
            ],
            steps: [
              { es: "Si hace falta, saca el inventario promedio: (inicial + final) ÷ 2.", en: "If needed, find the average inventory: (beginning + ending) ÷ 2." },
              { es: "Calcula la rotación: costo de ventas ÷ inventario promedio.", en: "Compute turnover: cost of sales ÷ average inventory." },
              { es: "Calcula los días: 365 ÷ rotación.", en: "Compute the days: 365 ÷ turnover." },
              { es: "Compara los días con la meta.", en: "Compare the days with the target." },
            ],
            example: {
              es: "Una papelería empezó el año con $700,000 de inventario y lo terminó con $760,000; su costo de ventas fue $3,650,000. Inventario promedio = (700,000 + 760,000) ÷ 2 = $730,000. Rotación = 3,650,000 ÷ 730,000 = 5 veces. Días = 365 ÷ 5 = **73 días**.",
              en: "A stationery store began the year with $700,000 of inventory and ended with $760,000; its cost of sales was $3,650,000. Average inventory = (700,000 + 760,000) ÷ 2 = $730,000. Turnover = 3,650,000 ÷ 730,000 = 5 times. Days = 365 ÷ 5 = **73 days**.",
            },
            interpret: {
              es: "Menos días es mejor: la mercancía se vende rápido y no inmoviliza dinero. Muchos días indican compras de más o productos que no se venden.",
              en: "Fewer days is better: goods sell quickly and do not tie up money. Many days point to overbuying or products that do not sell.",
            },
            mistake: {
              es: "Usar las ventas en lugar del costo de ventas, o dar como respuesta la rotación (veces) cuando te piden los días.",
              en: "Using sales instead of cost of sales, or answering the turnover (times) when the days are asked for.",
            },
          },
          {
            name: { es: "Indicadores en porcentaje: tasa de defectos y entregas a tiempo", en: "Percentage indicators: defect rate and on-time deliveries" },
            expression: "Tasa de defectos (%) = Piezas defectuosas ÷ Piezas producidas × 100  |  Entregas a tiempo (%) = Pedidos a tiempo ÷ Pedidos totales × 100",
            variables: [
              { symbol: "Piezas defectuosas", meaning: { es: "Las unidades que salieron mal en el periodo.", en: "The units that came out wrong in the period." } },
              { symbol: "Piezas producidas", meaning: { es: "Todas las unidades fabricadas en el periodo, buenas y malas.", en: "All units made in the period, good and bad." } },
              { symbol: "Pedidos a tiempo", meaning: { es: "Los pedidos que llegaron al cliente en la fecha prometida.", en: "Orders that reached the customer on the promised date." } },
              { symbol: "Pedidos totales", meaning: { es: "Todos los pedidos entregados en el periodo.", en: "All orders delivered in the period." } },
            ],
            steps: [
              { es: "Cuenta los casos que te interesan (defectos o pedidos a tiempo).", en: "Count the cases you care about (defects or on-time orders)." },
              { es: "Divide entre el total de piezas o pedidos.", en: "Divide by the total pieces or orders." },
              { es: "Multiplica por 100 y compara con la meta.", en: "Multiply by 100 and compare with the target." },
            ],
            example: {
              es: "Un taller hizo 1,500 piezas y 12 salieron defectuosas: 12 ÷ 1,500 = 0.008; × 100 = **0.8 %** de defectos. De 600 pedidos, 576 llegaron a tiempo: 576 ÷ 600 = 0.96; × 100 = **96 %** a tiempo.",
              en: "A workshop made 1,500 pieces and 12 were defective: 12 ÷ 1,500 = 0.008; × 100 = **0.8%** defects. Of 600 orders, 576 arrived on time: 576 ÷ 600 = 0.96; × 100 = **96%** on time.",
            },
            interpret: {
              es: "En defectos, menos es mejor (debe quedar por debajo de la meta). En entregas a tiempo, más es mejor (debe quedar por encima).",
              en: "For defects, less is better (it must stay below the target). For on-time deliveries, more is better (it must stay above).",
            },
          },
        ],
        bullets: [
          { es: "Financiera: utilidad, ROI, ingreso residual, margen.", en: "Financial: profit, ROI, residual income, margin." },
          { es: "Clientes: satisfacción, recompra, participación de mercado.", en: "Customers: satisfaction, repeat purchases, market share." },
          { es: "Procesos internos: defectos, tiempo de ciclo, entregas a tiempo.", en: "Internal processes: defects, cycle time, on-time deliveries." },
          { es: "Aprendizaje y crecimiento: capacitación, rotación de personal, sistemas.", en: "Learning and growth: training, staff turnover, systems." },
        ],
      },
    ],
    examples: [
      {
        title: { es: "ROI contra ingreso residual en dos divisiones", en: "ROI versus residual income in two divisions" },
        problem: {
          es: "Una empresa exige un rendimiento mínimo de 12 %. La División Norte gana $600,000 con activos de $3,000,000. La División Sur gana $1,500,000 con activos de $10,000,000. ¿Cuál tiene mejor ROI y cuál genera más ingreso residual?",
          en: "A company requires a 12% minimum return. The North Division earns $600,000 with $3,000,000 of assets. The South Division earns $1,500,000 with $10,000,000 of assets. Which has the better ROI and which generates more residual income?",
        },
        steps: [
          { es: "ROI Norte = 600,000 ÷ 3,000,000 = 20 %.", en: "North ROI = 600,000 ÷ 3,000,000 = 20%." },
          { es: "ROI Sur = 1,500,000 ÷ 10,000,000 = 15 %.", en: "South ROI = 1,500,000 ÷ 10,000,000 = 15%." },
          { es: "Ingreso residual Norte = 600,000 − 12 % × 3,000,000 = 600,000 − 360,000 = $240,000.", en: "North residual income = 600,000 − 12% × 3,000,000 = 600,000 − 360,000 = $240,000." },
          { es: "Ingreso residual Sur = 1,500,000 − 12 % × 10,000,000 = 1,500,000 − 1,200,000 = $300,000.", en: "South residual income = 1,500,000 − 12% × 10,000,000 = 1,500,000 − 1,200,000 = $300,000." },
        ],
        result: {
          es: "Norte es más eficiente por peso invertido (ROI 20 %), pero Sur crea más valor en pesos por encima del mínimo ($300,000). Por eso conviene mirar ambos indicadores y no solo uno.",
          en: "North is more efficient per peso invested (20% ROI), but South creates more value in pesos above the minimum ($300,000). That is why it pays to look at both indicators, not just one.",
        },
      },
      {
        title: { es: "Tablero operativo de una distribuidora", en: "Operating dashboard of a distributor" },
        problem: {
          es: "Una distribuidora de abarrotes tuvo en el año un costo de ventas de $3,650,000 y un inventario promedio de $500,000. Además, de 800 pedidos, 744 llegaron a tiempo. Sus metas: máximo 45 días de inventario y 95 % de entregas a tiempo. Evalúa los dos KPI.",
          en: "A grocery distributor had a cost of sales of $3,650,000 for the year and an average inventory of $500,000. Also, of 800 orders, 744 arrived on time. Its targets: at most 45 inventory days and 95% on-time deliveries. Evaluate both KPIs.",
        },
        steps: [
          { es: "Rotación de inventario = 3,650,000 ÷ 500,000 = 7.3 veces al año.", en: "Inventory turnover = 3,650,000 ÷ 500,000 = 7.3 times a year." },
          { es: "Días de inventario = 365 ÷ 7.3 = 50 días. La meta era 45: está fuera de meta.", en: "Inventory days = 365 ÷ 7.3 = 50 days. The target was 45: it misses the target." },
          { es: "Entregas a tiempo = 744 ÷ 800 = 0.93 = 93 %. La meta era 95 %: también está por debajo.", en: "On-time deliveries = 744 ÷ 800 = 0.93 = 93%. The target was 95%: it is also below." },
          { es: "Ambos indicadores apuntan a procesos internos: compras de más y logística lenta.", en: "Both indicators point to internal processes: overbuying and slow logistics." },
        ],
        result: {
          es: "Días de inventario: 50 (meta 45) y entregas a tiempo: 93 % (meta 95 %). Los dos van en amarillo o rojo; conviene revisar compras y reparto antes de que lo resientan las ventas.",
          en: "Inventory days: 50 (target 45) and on-time deliveries: 93% (target 95%). Both are yellow or red; purchasing and delivery should be reviewed before sales feel the impact.",
        },
      },
    ],
    keyPoints: [
      { es: "Un KPI es una métrica estratégica con meta, responsable y frecuencia de revisión.", en: "A KPI is a strategic metric with a target, an owner and a review frequency." },
      { es: "ROI = margen × rotación de activos; mide la eficiencia de cada peso invertido.", en: "ROI = margin × asset turnover; it measures the efficiency of each peso invested." },
      { es: "El ingreso residual evita rechazar proyectos que superan la tasa mínima pero bajan el ROI promedio.", en: "Residual income avoids rejecting projects that beat the minimum rate but lower the average ROI." },
      { es: "El Balanced Scorecard une cuatro perspectivas: finanzas, clientes, procesos internos y aprendizaje.", en: "The Balanced Scorecard links four perspectives: finance, customers, internal processes and learning." },
      { es: "Los indicadores adelantados (operativos, de clientes) avisan antes de que la utilidad caiga.", en: "Leading indicators (operating, customer) warn before profit falls." },
    ],
    exerciseIds: ['COS-13-E1', 'COS-13-E2', 'COS-13-E3', 'COS-13-E4', 'COS-13-E5', 'COS-13-E6'],
  },

  // ───────────────────────────── COS-14 ─────────────────────────────
  {
    id: 'COS-14',
    level: 3,
    topicIds: ['COS.14'],
    title: { es: "Costos para la toma de decisiones", en: "Costs for decision-making" },
    summary: {
      es: "Para decidir solo importan los costos e ingresos relevantes —futuros y que cambian entre alternativas—, aplicados a pedidos especiales, hacer o comprar, eliminar líneas y recursos limitados.",
      en: "To decide, only relevant costs and revenues matter —future ones that differ between alternatives— applied to special orders, make-or-buy, dropping product lines and limited resources.",
    },
    minutes: 20,
    objectives: [
      { es: "Separar costos relevantes de costos hundidos e irrelevantes.", en: "Separate relevant costs from sunk and irrelevant costs." },
      { es: "Evaluar pedidos especiales, decisiones de hacer o comprar y de eliminar una línea.", en: "Evaluate special orders, make-or-buy and drop-a-line decisions." },
      { es: "Elegir la mezcla de productos cuando un recurso es limitado.", en: "Choose the product mix when a resource is limited." },
      { es: "Incluir el costo de oportunidad y los factores cualitativos en la decisión.", en: "Include opportunity cost and qualitative factors in the decision." },
    ],
    theory: [
      {
        heading: { es: "Costos relevantes, hundidos y de oportunidad", en: "Relevant, sunk and opportunity costs" },
        body: [
          {
            es: "Un **costo relevante** cumple dos condiciones: es **futuro** y **cambia** según la alternativa que elijas. Si un costo será igual decidas lo que decidas, no ayuda a decidir, aunque sea grande.",
            en: "A **relevant cost** meets two conditions: it is **future** and it **differs** depending on the alternative you choose. If a cost will be the same whatever you decide, it does not help you decide, even if it is large.",
          },
          {
            es: "Un **costo hundido** es dinero que ya se gastó y no se puede recuperar: la máquina que compraste hace dos años, el estudio de mercado ya pagado. Es irrelevante. Pensar «ya invertí tanto, no puedo dejarlo» es uno de los errores más comunes en los negocios.",
            en: "A **sunk cost** is money already spent that cannot be recovered: the machine you bought two years ago, the market study already paid for. It is irrelevant. Thinking \"I've already invested so much, I can't drop it\" is one of the most common business mistakes.",
          },
          {
            es: "El **costo de oportunidad** es lo que dejas de ganar por elegir una opción en lugar de otra. No aparece en la contabilidad, pero sí es relevante. Si usas tu bodega para producir una pieza, renuncias a la renta que te pagarían por ella.",
            en: "The **opportunity cost** is what you give up by choosing one option over another. It does not appear in the books, but it is relevant. If you use your warehouse to make a part, you give up the rent someone would pay you for it.",
          },
          {
            es: "Mini ejemplo: pagaste $15,000 por un curso de repostería y ahora dudas si abrir tu negocio. Esos $15,000 ya no vuelven: no deben pesar. Lo relevante son los ingresos y costos que vienen y el sueldo al que renunciarías.",
            en: "Mini example: you paid $15,000 for a baking course and now you hesitate to open your business. That $15,000 will not come back: it should not weigh in. What matters are the coming revenues and costs and the salary you would give up.",
          },
        ],
        bullets: [
          { es: "Relevante: futuro y diferente entre alternativas.", en: "Relevant: future and different between alternatives." },
          { es: "Hundido: ya pagado, irrecuperable; siempre irrelevante.", en: "Sunk: already paid, unrecoverable; always irrelevant." },
          { es: "Fijo que no cambia con la decisión: irrelevante.", en: "Fixed cost that does not change with the decision: irrelevant." },
          { es: "Evitable: desaparece si eliges una opción; es relevante.", en: "Avoidable: it disappears if you choose an option; it is relevant." },
          { es: "Costo de oportunidad: beneficio sacrificado; es relevante.", en: "Opportunity cost: benefit given up; it is relevant." },
        ],
      },
      {
        heading: { es: "Pedido especial, hacer o comprar y eliminar una línea", en: "Special order, make or buy and dropping a line" },
        body: [
          {
            es: "Antes, tres palabras clave. **Costo variable**: el que crece con cada pieza que haces (tela, material, comisión por pieza). **Costo fijo**: el que pagas igual hagas 10 o 1,000 piezas (renta, sueldo del gerente). **Margen de contribución**: lo que queda de la venta después de pagar los costos variables; con eso se cubren los fijos y sale la ganancia. Un costo fijo es **evitable** si desaparece al tomar la decisión (por ejemplo, el sueldo de un supervisor que solo trabaja en esa línea).",
            en: "First, three key words. **Variable cost**: one that grows with each piece you make (fabric, materials, commission per piece). **Fixed cost**: one you pay the same whether you make 10 or 1,000 pieces (rent, the manager's salary). **Contribution margin**: what remains from the sale after paying variable costs; it covers fixed costs and leaves the profit. A fixed cost is **avoidable** if it disappears when you make the decision (for example, the salary of a supervisor who only works on that line).",
          },
          {
            es: "**Pedido especial**: un cliente ofrece comprar un lote a un precio menor que el normal. Si tienes **capacidad ociosa** (máquinas y personal sin usar) y no afecta tus ventas normales, conviene aceptarlo si el precio cubre los **costos variables** y cualquier costo extra del pedido. Los costos fijos ya se pagan de todos modos.",
            en: "**Special order**: a customer offers to buy a batch below the normal price. If you have **idle capacity** (unused machines and staff) and it does not affect normal sales, accept it if the price covers **variable costs** and any extra cost of the order. Fixed costs are paid anyway.",
          },
          {
            es: "**Hacer o comprar**: compara lo que te cuesta producir una pieza —solo costos variables más los fijos que **desaparecerían** si dejas de producir— contra el precio del proveedor. Suma el costo de oportunidad si la capacidad liberada tiene otro uso.",
            en: "**Make or buy**: compare what it costs you to make a part —only variable costs plus the fixed costs that would **disappear** if you stop making it— against the supplier's price. Add the opportunity cost if the freed capacity has another use.",
          },
          {
            es: "**Eliminar una línea**: una línea puede mostrar pérdida porque le asignaron costos fijos generales (renta, dirección) que seguirán existiendo. Si su **margen de contribución** es mayor que sus costos fijos evitables, eliminarla **baja** la utilidad total.",
            en: "**Dropping a line**: a line may show a loss because general fixed costs (rent, management) that will still exist were allocated to it. If its **contribution margin** is greater than its avoidable fixed costs, dropping it **lowers** total profit.",
          },
          {
            es: "Mini ejemplo: una imprenta con máquinas libres recibe un pedido de 1,000 volantes a $1.50 c/u. Su costo variable es $0.90 y su costo total «con fijos» es $1.70. Aceptar suma (1.50 − 0.90) × 1,000 = $600 de utilidad.",
            en: "Mini example: a print shop with idle machines receives an order for 1,000 flyers at $1.50 each. Its variable cost is $0.90 and its \"full\" cost with fixed costs is $1.70. Accepting adds (1.50 − 0.90) × 1,000 = $600 of profit.",
          },
        ],
        formulas: [
          {
            name: { es: "Efecto de aceptar un pedido especial", en: "Effect of accepting a special order" },
            expression: "Efecto en la utilidad = (Precio especial − Costo variable unitario − Costo extra unitario) × Unidades del pedido",
            variables: [
              { symbol: "Efecto en la utilidad", meaning: { es: "Cuántos pesos sube (o baja) la utilidad si aceptas el pedido.", en: "How many pesos profit goes up (or down) if you accept the order." } },
              { symbol: "Precio especial", meaning: { es: "Lo que el cliente ofrece pagar por cada pieza, en pesos.", en: "What the customer offers to pay per piece, in pesos." } },
              { symbol: "Costo variable unitario", meaning: { es: "Lo que cuesta hacer una pieza más (materiales + mano de obra + gastos indirectos variables), en pesos.", en: "What it costs to make one more piece (materials + labor + variable overhead), in pesos." } },
              { symbol: "Costo extra unitario", meaning: { es: "Lo que solo existe por este pedido (empaque, bordado, flete), en pesos por pieza.", en: "Costs that exist only because of this order (packaging, embroidery, freight), in pesos per piece." } },
              { symbol: "Unidades del pedido", meaning: { es: "Cuántas piezas pide el cliente.", en: "How many pieces the customer orders." } },
            ],
            steps: [
              { es: "Tacha los costos fijos prorrateados: con capacidad ociosa se pagan igual, aceptes o no.", en: "Cross out the allocated fixed costs: with idle capacity they are paid anyway, whether you accept or not." },
              { es: "Suma el costo variable unitario y el costo extra del pedido: ese es el costo relevante por pieza.", en: "Add the unit variable cost and the order's extra cost: that is the relevant cost per piece." },
              { es: "Resta ese costo al precio especial: es el margen por pieza.", en: "Subtract that cost from the special price: that is the margin per piece." },
              { es: "Multiplica el margen por pieza por las unidades del pedido.", en: "Multiply the margin per piece by the units ordered." },
            ],
            example: {
              es: "Una fábrica de gorras con máquinas libres vende cada gorra a $150; su costo variable es $70 y tiene $30 de fijos prorrateados. Le piden 800 gorras a $100 con un bordado extra de $8. Costo relevante = 70 + 8 = $78. Margen = 100 − 78 = $22. Efecto = 22 × 800 = **+$17,600**.",
              en: "A cap factory with idle machines sells each cap at $150; its variable cost is $70 and it has $30 of allocated fixed costs. It receives an order for 800 caps at $100 with $8 of extra embroidery. Relevant cost = 70 + 8 = $78. Margin = 100 − 78 = $22. Effect = 22 × 800 = **+$17,600**.",
            },
            interpret: {
              es: "Si el efecto es positivo (y hay capacidad ociosa), conviene aceptar; si es negativo, no.",
              en: "If the effect is positive (and there is idle capacity), accept; if negative, do not.",
            },
            mistake: {
              es: "Restar también los fijos prorrateados (100 − 70 − 8 − 30 = −8) y rechazar un pedido que sí deja ganancia.",
              en: "Also subtracting the allocated fixed costs (100 − 70 − 8 − 30 = −8) and rejecting an order that does make money.",
            },
          },
          {
            name: { es: "Hacer o comprar", en: "Make or buy" },
            expression: "Costo relevante de hacer = Costo variable unitario × Unidades + Fijos evitables (+ Costo de oportunidad)  |  Costo de comprar = Precio del proveedor × Unidades  |  Ahorro de hacer = Costo de comprar − Costo relevante de hacer",
            variables: [
              { symbol: "Costo variable unitario", meaning: { es: "Lo que cuesta producir una pieza (materiales + mano de obra + gastos indirectos variables), en pesos.", en: "What it costs to make one piece (materials + labor + variable overhead), in pesos." } },
              { symbol: "Unidades", meaning: { es: "Cuántas piezas necesitas en el periodo.", en: "How many pieces you need in the period." } },
              { symbol: "Fijos evitables", meaning: { es: "Los costos fijos que desaparecerían si dejas de producir (por ejemplo, un supervisor dedicado), en pesos.", en: "The fixed costs that would disappear if you stopped producing (for example, a dedicated supervisor), in pesos." } },
              { symbol: "Costo de oportunidad", meaning: { es: "Lo que ganarías usando esa capacidad en otra cosa (por ejemplo, rentarla); solo si existe ese otro uso.", en: "What you would earn using that capacity for something else (for example, renting it out); only if that other use exists." } },
              { symbol: "Precio del proveedor", meaning: { es: "Lo que cobra el proveedor por pieza, en pesos.", en: "What the supplier charges per piece, in pesos." } },
            ],
            steps: [
              { es: "Suma los costos variables de una pieza y multiplícalos por las unidades.", en: "Add up the variable costs of one piece and multiply by the units." },
              { es: "Agrega solo los fijos evitables (y el costo de oportunidad si la capacidad tiene otro uso). Ignora los fijos que se pagan de todos modos.", en: "Add only the avoidable fixed costs (and the opportunity cost if the capacity has another use). Ignore fixed costs paid anyway." },
              { es: "Calcula el costo de comprar: precio del proveedor × unidades.", en: "Compute the cost of buying: supplier price × units." },
              { es: "Resta: costo de comprar − costo relevante de hacer.", en: "Subtract: cost of buying − relevant cost of making." },
            ],
            example: {
              es: "Una fábrica necesita 5,000 tapas. Costo variable: $12 + $6 + $2 = $20 por tapa. Hacer = 20 × 5,000 = $100,000 + $15,000 de fijos evitables = $115,000. Comprar = $24 × 5,000 = $120,000. Ahorro de hacer = 120,000 − 115,000 = **$5,000**.",
              en: "A factory needs 5,000 lids. Variable cost: $12 + $6 + $2 = $20 per lid. Make = 20 × 5,000 = $100,000 + $15,000 of avoidable fixed costs = $115,000. Buy = $24 × 5,000 = $120,000. Savings from making = 120,000 − 115,000 = **$5,000**.",
            },
            interpret: {
              es: "Si el ahorro es positivo, conviene seguir haciéndolo; si es negativo, conviene comprarlo.",
              en: "If the savings are positive, keep making it; if negative, buy it.",
            },
            mistake: {
              es: "Sumar todos los fijos asignados, incluidos los que no desaparecen (renta, administración), y concluir por error que conviene comprar.",
              en: "Adding all the allocated fixed costs, including those that do not disappear (rent, administration), and wrongly concluding that buying pays.",
            },
          },
          {
            name: { es: "Eliminar o mantener una línea", en: "Drop or keep a product line" },
            expression: "Margen de contribución = Ventas − Costos variables  |  Efecto de eliminar = Fijos evitables − Margen de contribución",
            variables: [
              { symbol: "Ventas", meaning: { es: "Lo que vende la línea en el periodo, en pesos.", en: "What the line sells in the period, in pesos." } },
              { symbol: "Costos variables", meaning: { es: "Los costos de la línea que suben y bajan con lo que vende, en pesos.", en: "The line's costs that rise and fall with what it sells, in pesos." } },
              { symbol: "Margen de contribución", meaning: { es: "Lo que la línea aporta para pagar fijos y dejar utilidad; se pierde completo si la cierras, en pesos.", en: "What the line contributes to pay fixed costs and leave profit; it is lost completely if you close it, in pesos." } },
              { symbol: "Fijos evitables", meaning: { es: "La parte de los fijos asignados que sí desaparece al cerrar la línea, en pesos.", en: "The part of the allocated fixed costs that does disappear when the line closes, in pesos." } },
              { symbol: "Efecto de eliminar", meaning: { es: "Cuánto cambia la utilidad total de la empresa si cierras la línea, en pesos.", en: "How much the company's total profit changes if you close the line, in pesos." } },
            ],
            steps: [
              { es: "Calcula el margen de contribución: ventas − costos variables.", en: "Compute the contribution margin: sales − variable costs." },
              { es: "Separa los fijos asignados: quédate solo con los evitables.", en: "Split the allocated fixed costs: keep only the avoidable ones." },
              { es: "Resta: fijos evitables − margen de contribución.", en: "Subtract: avoidable fixed costs − contribution margin." },
            ],
            example: {
              es: "Una tienda tiene una línea de dulces: ventas $300,000, costos variables $210,000 y fijos asignados $110,000, de los que solo $50,000 son evitables. El reporte muestra pérdida: 300,000 − 210,000 − 110,000 = −$20,000. Margen de contribución = 300,000 − 210,000 = $90,000. Efecto de eliminar = 50,000 − 90,000 = **−$40,000**: la utilidad total bajaría.",
              en: "A store has a candy line: sales $300,000, variable costs $210,000 and allocated fixed costs $110,000, of which only $50,000 are avoidable. The report shows a loss: 300,000 − 210,000 − 110,000 = −$20,000. Contribution margin = 300,000 − 210,000 = $90,000. Effect of dropping = 50,000 − 90,000 = **−$40,000**: total profit would fall.",
            },
            interpret: {
              es: "Negativo: eliminarla baja la utilidad, conviene mantenerla. Positivo: eliminarla sube la utilidad.",
              en: "Negative: dropping it lowers profit, so keep it. Positive: dropping it raises profit.",
            },
            mistake: {
              es: "Creer que al cerrar la línea se ahorran todos los fijos asignados, o decidir solo por la «pérdida» del reporte.",
              en: "Believing that closing the line saves all the allocated fixed costs, or deciding only by the report's \"loss\".",
            },
          },
        ],
      },
      {
        heading: { es: "Recursos limitados y procesar más o vender", en: "Limited resources and sell or process further" },
        body: [
          {
            es: "Cuando un recurso es escaso —horas máquina, kilos de materia prima, metros de anaquel—, no gana el producto con mayor margen por unidad, sino el que da más **margen de contribución por unidad del recurso escaso**. Primero se produce ese, hasta cubrir su demanda, y luego el siguiente.",
            en: "When a resource is scarce —machine hours, kilos of raw material, shelf meters—, the winner is not the product with the highest margin per unit, but the one with the most **contribution margin per unit of the scarce resource**. You make that one first, up to its demand, then the next.",
          },
          {
            es: "**Vender o procesar más**: si un producto ya terminado puede venderse así o transformarse en algo de mayor precio, compara solo el **ingreso adicional** contra el **costo adicional** de procesarlo. Lo que ya costó llegar a ese punto es hundido.",
            en: "**Sell or process further**: if a finished product can be sold as is or turned into something with a higher price, compare only the **additional revenue** with the **additional cost** of processing it. What it already cost to get there is sunk.",
          },
          {
            es: "Los números no lo son todo. Revisa **factores cualitativos**: calidad y puntualidad del proveedor, el efecto en clientes actuales si das precios bajos a otros, el ánimo del personal o la dependencia de un solo proveedor.",
            en: "Numbers are not everything. Check **qualitative factors**: the supplier's quality and punctuality, the effect on current customers if you give low prices to others, staff morale or depending on a single supplier.",
          },
          {
            es: "Mini ejemplo: un horno tiene 10 horas libres. El pastel deja $200 de margen y usa 2 horas ($100 por hora); las galletas dejan $60 por charola y usan 0.5 horas ($120 por hora). Con el horno limitado, primero hornea galletas.",
            en: "Mini example: an oven has 10 free hours. A cake leaves a $200 margin and uses 2 hours ($100 per hour); cookies leave $60 per tray and use 0.5 hours ($120 per hour). With the oven limited, bake cookies first.",
          },
        ],
        formulas: [
          {
            name: { es: "Margen por unidad del recurso escaso y mejor mezcla", en: "Margin per unit of the scarce resource and best mix" },
            expression: "Margen por recurso escaso = (Precio − Costo variable unitario) ÷ Unidades del recurso por producto",
            variables: [
              { symbol: "Precio − Costo variable unitario", meaning: { es: "El margen de contribución de una pieza, en pesos (a veces ya te lo dan calculado).", en: "The contribution margin of one piece, in pesos (sometimes it is already given)." } },
              { symbol: "Unidades del recurso por producto", meaning: { es: "Cuánto del recurso limitado usa una pieza (horas máquina, kilos, metros).", en: "How much of the limited resource one piece uses (machine hours, kilos, meters)." } },
              { symbol: "Margen por recurso escaso", meaning: { es: "Cuántos pesos de margen deja cada hora (o kilo, o metro) del recurso, en pesos por unidad del recurso.", en: "How many pesos of margin each hour (or kilo, or meter) of the resource leaves, in pesos per unit of the resource." } },
            ],
            steps: [
              { es: "Calcula el margen por recurso de cada producto: margen por pieza ÷ recurso que usa.", en: "Compute each product's margin per resource: margin per piece ÷ resource it uses." },
              { es: "Ordénalos de mayor a menor margen por recurso.", en: "Rank them from highest to lowest margin per resource." },
              { es: "Produce primero el de mayor margen por recurso hasta cubrir su demanda máxima; anota cuánto recurso usaste.", en: "Make the one with the highest margin per resource first up to its maximum demand; note how much resource you used." },
              { es: "Con el recurso que sobra, produce el siguiente: recurso sobrante ÷ recurso por pieza.", en: "With the leftover resource, make the next one: leftover resource ÷ resource per piece." },
              { es: "Suma los márgenes: piezas de cada producto × su margen por pieza.", en: "Add up the margins: pieces of each product × its margin per piece." },
            ],
            example: {
              es: "Una imprenta tiene 600 horas. El producto X deja $50 y usa 5 horas ($50 ÷ 5 = $10 por hora); el Y deja $36 y usa 3 horas ($36 ÷ 3 = $12 por hora). Demanda máxima: 100 X y 120 Y. Primero Y: 120 × 3 = 360 horas, margen 120 × 36 = $4,320. Sobran 600 − 360 = 240 horas: 240 ÷ 5 = 48 X, margen 48 × 50 = $2,400. Total = 4,320 + 2,400 = **$6,720**.",
              en: "A print shop has 600 hours. Product X leaves $50 and uses 5 hours ($50 ÷ 5 = $10 per hour); Y leaves $36 and uses 3 hours ($36 ÷ 3 = $12 per hour). Maximum demand: 100 X and 120 Y. First Y: 120 × 3 = 360 hours, margin 120 × 36 = $4,320. 600 − 360 = 240 hours remain: 240 ÷ 5 = 48 X, margin 48 × 50 = $2,400. Total = 4,320 + 2,400 = **$6,720**.",
            },
            mistake: {
              es: "Darle prioridad al producto que deja más por pieza. En el ejemplo, empezar por X da menos: 100 × 50 = $5,000 con 500 horas, y las 100 horas restantes solo alcanzan para 33 Y (33 × 36 = $1,188): total $6,188.",
              en: "Prioritizing the product that leaves more per piece. In the example, starting with X gives less: 100 × 50 = $5,000 using 500 hours, and the remaining 100 hours only cover 33 Y (33 × 36 = $1,188): total $6,188.",
            },
          },
          {
            name: { es: "Vender así o procesar más", en: "Sell as is or process further" },
            expression: "Ganancia adicional = (Precio después de procesar − Precio actual − Costo adicional) × Unidades",
            variables: [
              { symbol: "Precio después de procesar", meaning: { es: "A cuánto venderías cada pieza ya transformada, en pesos.", en: "What you would sell each transformed piece for, in pesos." } },
              { symbol: "Precio actual", meaning: { es: "A cuánto puedes venderla hoy, tal como está, en pesos.", en: "What you can sell it for today, as is, in pesos." } },
              { symbol: "Costo adicional", meaning: { es: "Lo que cuesta el paso extra por pieza (barniz, empaque, mano de obra), en pesos.", en: "What the extra step costs per piece (varnish, packaging, labor), in pesos." } },
              { symbol: "Unidades", meaning: { es: "Cuántas piezas tienes para decidir.", en: "How many pieces you are deciding about." } },
            ],
            steps: [
              { es: "Ignora lo que ya costó producir hasta hoy: es hundido.", en: "Ignore what it already cost to produce up to today: it is sunk." },
              { es: "Calcula el ingreso adicional por pieza: precio después − precio actual.", en: "Compute the additional revenue per piece: price after − current price." },
              { es: "Réstale el costo adicional por pieza.", en: "Subtract the additional cost per piece." },
              { es: "Multiplica por las unidades.", en: "Multiply by the units." },
            ],
            example: {
              es: "Una quesería tiene 200 kg de queso que le costaron $60/kg; lo vende fresco a $90/kg o ahumado a $130/kg, con $25/kg de costo de ahumado. Los $60 son hundidos. Ingreso adicional = 130 − 90 = $40/kg. Ganancia adicional = (40 − 25) × 200 = 15 × 200 = **$3,000**.",
              en: "A cheese shop has 200 kg of cheese that cost $60/kg; it sells it fresh at $90/kg or smoked at $130/kg, with $25/kg of smoking cost. The $60 is sunk. Additional revenue = 130 − 90 = $40/kg. Additional gain = (40 − 25) × 200 = 15 × 200 = **$3,000**.",
            },
            interpret: {
              es: "Positivo: conviene procesar más. Negativo: conviene vender así.",
              en: "Positive: process further. Negative: sell as is.",
            },
            mistake: {
              es: "Restar el costo que ya se gastó para llegar a ese punto; es hundido y no cambia con la decisión.",
              en: "Subtracting the cost already spent to get to that point; it is sunk and does not change with the decision.",
            },
          },
        ],
      },
    ],
    examples: [
      {
        title: { es: "¿Aceptar un pedido especial?", en: "Accept a special order?" },
        problem: {
          es: "Una fábrica de mochilas vende cada una a $450. Su costo variable unitario es $260 y sus costos fijos prorrateados son $90 por mochila. Tiene capacidad ociosa. Una escuela pide 1,500 mochilas a $320, con un bordado extra de $15 por pieza. Las ventas normales no se afectan. ¿Conviene?",
          en: "A backpack factory sells each one at $450. Its unit variable cost is $260 and its allocated fixed costs are $90 per backpack. It has idle capacity. A school orders 1,500 backpacks at $320, with extra embroidery of $15 each. Normal sales are not affected. Should it accept?",
        },
        steps: [
          { es: "Los $90 de fijos prorrateados no cambian si se acepta: son irrelevantes.", en: "The $90 of allocated fixed costs do not change if it accepts: they are irrelevant." },
          { es: "Costo relevante por mochila = 260 + 15 = $275.", en: "Relevant cost per backpack = 260 + 15 = $275." },
          { es: "Margen relevante por mochila = 320 − 275 = $45.", en: "Relevant margin per backpack = 320 − 275 = $45." },
          { es: "Efecto total = 45 × 1,500 = $67,500.", en: "Total effect = 45 × 1,500 = $67,500." },
        ],
        result: {
          es: "Conviene aceptar: la utilidad sube $67,500. Comparar contra el costo «total» de $350 (260 + 90) habría llevado a rechazarlo por error.",
          en: "It should accept: profit rises by $67,500. Comparing against the \"full\" cost of $350 (260 + 90) would have wrongly led to rejecting it.",
        },
      },
      {
        title: { es: "¿Vender así o procesar más?", en: "Sell as is or process further?" },
        problem: {
          es: "Una carpintería de Michoacán tiene 100 mesas sin barnizar que le costaron $700 cada una y puede venderlas a $1,200. Si las barniza, gasta $250 más por mesa y las vende a $1,550. ¿Qué le conviene?",
          en: "A carpentry shop in Michoacán has 100 unvarnished tables that cost $700 each and can sell them at $1,200. If it varnishes them, it spends $250 more per table and sells them at $1,550. What should it do?",
        },
        steps: [
          { es: "Los $700 ya se gastaron: son hundidos y se ignoran.", en: "The $700 was already spent: it is sunk and ignored." },
          { es: "Ingreso adicional por mesa = 1,550 − 1,200 = $350.", en: "Additional revenue per table = 1,550 − 1,200 = $350." },
          { es: "Costo adicional por mesa = $250. Ganancia adicional = 350 − 250 = $100.", en: "Additional cost per table = $250. Additional gain = 350 − 250 = $100." },
          { es: "Para 100 mesas: 100 × 100 = $10,000.", en: "For 100 tables: 100 × 100 = $10,000." },
        ],
        result: {
          es: "Conviene barnizar: gana $10,000 más que vendiendo las mesas sin terminar.",
          en: "It should varnish: it earns $10,000 more than selling the unfinished tables.",
        },
      },
    ],
    keyPoints: [
      { es: "Solo cuentan los costos e ingresos futuros que cambian entre alternativas.", en: "Only future costs and revenues that differ between alternatives count." },
      { es: "Los costos hundidos y los fijos que no cambian son irrelevantes.", en: "Sunk costs and fixed costs that do not change are irrelevant." },
      { es: "Con capacidad ociosa, un pedido especial conviene si su precio cubre los costos variables y extras.", en: "With idle capacity, a special order pays if its price covers variable and extra costs." },
      { es: "Antes de eliminar una línea, compara su margen de contribución con sus fijos evitables.", en: "Before dropping a line, compare its contribution margin with its avoidable fixed costs." },
      { es: "Con un recurso escaso, prioriza el mayor margen por unidad de ese recurso.", en: "With a scarce resource, prioritize the highest margin per unit of that resource." },
      { es: "Completa el análisis con el costo de oportunidad y los factores cualitativos.", en: "Complete the analysis with opportunity cost and qualitative factors." },
    ],
    exerciseIds: ['COS-14-E1', 'COS-14-E2', 'COS-14-E3', 'COS-14-E4', 'COS-14-E5', 'COS-14-E6'],
  },
]

export const exercises: Exercise[] = [
  // ═════════════════════════ COS-13 ═════════════════════════
  {
    id: 'COS-13-E1',
    level: 3,
    module: 'COS-13',
    kind: 'mcq',
    flavor: 'case',
    context: {
      es: "La división Bajío de una empresa tiene un ROI de 20 %. Su gerente recibe un proyecto que requiere $2,000,000 en activos y generaría $320,000 de utilidad operativa al año (16 %). La empresa exige un rendimiento mínimo de 12 %. El bono del gerente depende del ROI de su división.",
      en: "A company's Bajío division has a 20% ROI. Its manager receives a project that requires $2,000,000 in assets and would generate $320,000 of operating profit a year (16%). The company requires a 12% minimum return. The manager's bonus depends on the division's ROI.",
    },
    prompt: {
      es: "¿Qué afirmación describe mejor la situación del proyecto de la división Bajío?",
      en: "Which statement best describes the situation of the Bajío division's project?",
    },
    options: [
      { id: 'COS-13-E1-a', text: { es: "Rechazarlo es correcto para la empresa, porque bajaría el ROI de la división", en: "Rejecting it is right for the company, because it would lower the division's ROI" } },
      { id: 'COS-13-E1-b', text: { es: "Conviene a la empresa: genera $80,000 de ingreso residual; evaluar con ingreso residual evita que el gerente lo rechace", en: "It benefits the company: it generates $80,000 of residual income; evaluating with residual income keeps the manager from rejecting it" } },
      { id: 'COS-13-E1-c', text: { es: "No conviene, porque 16 % es menor que 20 % y la tasa mínima no importa", en: "It does not pay, because 16% is lower than 20% and the minimum rate does not matter" } },
      { id: 'COS-13-E1-d', text: { es: "Conviene a la empresa: genera $320,000 de ingreso residual, porque no se cobra la tasa mínima", en: "It benefits the company: it generates $320,000 of residual income, because the minimum rate is not charged" } },
    ],
    correctOptionId: 'COS-13-E1-b',
    explanation: {
      es: "El proyecto rinde 16 %, más que el mínimo de 12 %: ingreso residual = 320,000 − 12 % × 2,000,000 = 320,000 − 240,000 = $80,000. Un gerente evaluado por ROI lo rechazaría porque baja su promedio de 20 %, aunque crea valor. Error común: comparar contra el ROI actual de la división en lugar de contra la tasa mínima de la empresa.",
      en: "The project returns 16%, above the 12% minimum: residual income = 320,000 − 12% × 2,000,000 = 320,000 − 240,000 = $80,000. A manager evaluated on ROI would reject it because it lowers the 20% average, even though it creates value. Common mistake: comparing against the division's current ROI instead of the company's minimum rate.",
    },
    difficulty: 3,
    points: 20,
    competency: 'performance-indicators',
  },
  {
    id: 'COS-13-E2',
    level: 3,
    module: 'COS-13',
    kind: 'numeric',
    flavor: 'case',
    context: {
      es: "Una ferretería tuvo en el año un costo de ventas de $2,920,000 y un inventario promedio de $400,000. Usa un año de 365 días.",
      en: "A hardware store had a cost of sales of $2,920,000 for the year and an average inventory of $400,000. Use a 365-day year.",
    },
    prompt: {
      es: "¿Cuántos días de inventario tiene la ferretería?",
      en: "How many inventory days does the hardware store have?",
    },
    answer: 50,
    unit: 'days',
    decimals: 0,
    tolerance: { abs: 0.5 },
    explanation: {
      es: "Rotación = 2,920,000 ÷ 400,000 = 7.3 veces. Días = 365 ÷ 7.3 = 50 días: en promedio la mercancía tarda 50 días en venderse. Error común: responder la rotación (7.3) en lugar de los días, o usar las ventas en lugar del costo de ventas.",
      en: "Turnover = 2,920,000 ÷ 400,000 = 7.3 times. Days = 365 ÷ 7.3 = 50 days: on average goods take 50 days to sell. Common mistake: answering the turnover (7.3) instead of the days, or using sales instead of cost of sales.",
    },
    difficulty: 2,
    points: 15,
    competency: 'performance-indicators',
  },
  {
    id: 'COS-13-E3',
    level: 3,
    module: 'COS-13',
    kind: 'fields',
    flavor: 'case',
    context: {
      es: "La sucursal Puebla de una cadena de farmacias vendió $10,000,000 en el año, obtuvo una utilidad operativa de $800,000 y usó activos operativos promedio de $5,000,000.",
      en: "The Puebla branch of a pharmacy chain sold $10,000,000 in the year, earned operating profit of $800,000 and used average operating assets of $5,000,000.",
    },
    prompt: {
      es: "Aplica el modelo DuPont a la sucursal Puebla: calcula el margen, la rotación de activos y el ROI.",
      en: "Apply the DuPont model to the Puebla branch: compute the margin, asset turnover and ROI.",
    },
    fields: [
      { id: 'f1', label: { es: "Margen de utilidad operativa (%)", en: "Operating profit margin (%)" }, answer: 8, unit: '%', tolerance: { abs: 0.01 } },
      { id: 'f2', label: { es: "Rotación de activos (veces)", en: "Asset turnover (times)" }, answer: 2, unit: 'times', tolerance: { abs: 0.01 } },
      { id: 'f3', label: { es: "ROI (%)", en: "ROI (%)" }, answer: 16, unit: '%', tolerance: { abs: 0.01 } },
    ],
    explanation: {
      es: "Margen = 800,000 ÷ 10,000,000 = 8 %. Rotación = 10,000,000 ÷ 5,000,000 = 2 veces. ROI = 8 % × 2 = 16 %, que coincide con 800,000 ÷ 5,000,000. Error común: sumar margen y rotación (10) en lugar de multiplicarlos.",
      en: "Margin = 800,000 ÷ 10,000,000 = 8%. Turnover = 10,000,000 ÷ 5,000,000 = 2 times. ROI = 8% × 2 = 16%, which matches 800,000 ÷ 5,000,000. Common mistake: adding margin and turnover (10) instead of multiplying them.",
    },
    difficulty: 2,
    points: 15,
    competency: 'performance-indicators',
  },
  {
    id: 'COS-13-E4',
    level: 3,
    module: 'COS-13',
    kind: 'numeric',
    flavor: 'case',
    context: {
      es: "La división de empaques de un grupo industrial obtuvo una utilidad operativa de $900,000 con activos operativos de $6,000,000. El grupo exige un rendimiento mínimo de 12 % anual.",
      en: "A manufacturing group's packaging division earned operating profit of $900,000 with operating assets of $6,000,000. The group requires a 12% annual minimum return.",
    },
    prompt: {
      es: "¿Cuál es el ingreso residual de la división de empaques? Responde en pesos.",
      en: "What is the packaging division's residual income? Answer in pesos.",
    },
    answer: 180000,
    unit: 'MXN',
    decimals: 0,
    tolerance: { abs: 0.5 },
    explanation: {
      es: "Cargo por capital = 12 % × 6,000,000 = $720,000. Ingreso residual = 900,000 − 720,000 = $180,000: la división ganó eso por encima de lo mínimo exigido. Error común: aplicar el 12 % a la utilidad (900,000 × 12 %) en lugar de a los activos.",
      en: "Capital charge = 12% × 6,000,000 = $720,000. Residual income = 900,000 − 720,000 = $180,000: the division earned that much above the required minimum. Common mistake: applying the 12% to profit (900,000 × 12%) instead of to assets.",
    },
    difficulty: 2,
    points: 15,
    competency: 'performance-indicators',
  },
  {
    id: 'COS-13-E5',
    level: 3,
    module: 'COS-13',
    kind: 'classify',
    flavor: 'concept',
    prompt: {
      es: "Ubica cada indicador en la perspectiva del Balanced Scorecard a la que pertenece.",
      en: "Place each indicator in the Balanced Scorecard perspective it belongs to.",
    },
    categories: [
      { id: 'COS-13-E5-c1', label: { es: "Financiera", en: "Financial" } },
      { id: 'COS-13-E5-c2', label: { es: "Clientes", en: "Customers" } },
      { id: 'COS-13-E5-c3', label: { es: "Procesos internos", en: "Internal processes" } },
      { id: 'COS-13-E5-c4', label: { es: "Aprendizaje y crecimiento", en: "Learning and growth" } },
    ],
    items: [
      { id: 'COS-13-E5-i1', label: { es: "ROI de la división", en: "Division ROI" }, correctCategoryId: 'COS-13-E5-c1' },
      { id: 'COS-13-E5-i2', label: { es: "Margen de utilidad operativa", en: "Operating profit margin" }, correctCategoryId: 'COS-13-E5-c1' },
      { id: 'COS-13-E5-i3', label: { es: "Índice de satisfacción en la encuesta a clientes", en: "Satisfaction score in the customer survey" }, correctCategoryId: 'COS-13-E5-c2' },
      { id: 'COS-13-E5-i4', label: { es: "Porcentaje de clientes que vuelven a comprar", en: "Percentage of customers who buy again" }, correctCategoryId: 'COS-13-E5-c2' },
      { id: 'COS-13-E5-i5', label: { es: "Tasa de defectos en la línea de producción", en: "Defect rate on the production line" }, correctCategoryId: 'COS-13-E5-c3' },
      { id: 'COS-13-E5-i6', label: { es: "Tiempo promedio desde el pedido hasta la entrega", en: "Average time from order to delivery" }, correctCategoryId: 'COS-13-E5-c3' },
      { id: 'COS-13-E5-i7', label: { es: "Horas de capacitación por empleado al año", en: "Training hours per employee per year" }, correctCategoryId: 'COS-13-E5-c4' },
      { id: 'COS-13-E5-i8', label: { es: "Rotación de personal (renuncias sobre plantilla)", en: "Staff turnover (resignations over headcount)" }, correctCategoryId: 'COS-13-E5-c4' },
    ],
    explanation: {
      es: "Financiera: ROI y margen (resultado en dinero). Clientes: satisfacción y recompra. Procesos internos: defectos y tiempo de entrega (cómo se hace el trabajo). Aprendizaje y crecimiento: capacitación y estabilidad del personal (la base de todo lo demás). Error común: poner el tiempo de entrega en clientes; aunque el cliente lo nota, mide la eficiencia de un proceso interno.",
      en: "Financial: ROI and margin (results in money). Customers: satisfaction and repeat purchases. Internal processes: defects and delivery time (how the work is done). Learning and growth: training and staff stability (the foundation of everything else). Common mistake: placing delivery time under customers; although the customer notices it, it measures the efficiency of an internal process.",
    },
    difficulty: 2,
    points: 15,
    competency: 'performance-indicators',
  },
  {
    id: 'COS-13-E6',
    level: 3,
    module: 'COS-13',
    kind: 'truefalse',
    flavor: 'concept',
    prompt: {
      es: "Un indicador de resultado, como la utilidad del trimestre, avisa con anticipación de los problemas futuros, así que basta con él para dirigir una empresa.",
      en: "An outcome indicator, such as the quarter's profit, warns in advance about future problems, so it is enough on its own to run a company.",
    },
    answer: false,
    explanation: {
      es: "Falso. La utilidad es un indicador rezagado: muestra lo que ya pasó, cuando suele ser tarde para corregir. Los indicadores adelantados (satisfacción, defectos, capacitación) avisan antes. Error común: pensar que un buen tablero solo necesita indicadores financieros.",
      en: "False. Profit is a lagging indicator: it shows what already happened, when it is often too late to correct. Leading indicators (satisfaction, defects, training) warn earlier. Common mistake: thinking a good dashboard only needs financial indicators.",
    },
    difficulty: 1,
    points: 10,
    competency: 'performance-indicators',
  },

  // ═════════════════════════ COS-14 ═════════════════════════
  {
    id: 'COS-14-E1',
    level: 3,
    module: 'COS-14',
    kind: 'truefalse',
    flavor: 'concept',
    context: {
      es: "Hace dos años un taller compró un torno en $300,000. Hoy evalúa reemplazarlo por uno más rápido.",
      en: "Two years ago a workshop bought a lathe for $300,000. Today it is evaluating replacing it with a faster one.",
    },
    prompt: {
      es: "Los $300,000 que se pagaron por el torno actual son un costo relevante para decidir si se reemplaza.",
      en: "The $300,000 paid for the current lathe is a relevant cost for deciding whether to replace it.",
    },
    answer: false,
    explanation: {
      es: "Falso. Es un costo hundido: ya se pagó y no cambia con la decisión. Lo relevante es lo futuro: el precio del torno nuevo, lo que darían hoy por el viejo al venderlo y los ahorros de operación. Error común: no querer reemplazar algo «porque costó mucho».",
      en: "False. It is a sunk cost: it was already paid and does not change with the decision. What matters is the future: the new lathe's price, what the old one would sell for today and the operating savings. Common mistake: refusing to replace something \"because it cost a lot\".",
    },
    difficulty: 1,
    points: 10,
    competency: 'decision-costing',
  },
  {
    id: 'COS-14-E2',
    level: 3,
    module: 'COS-14',
    kind: 'numeric',
    flavor: 'case',
    context: {
      es: "Una fábrica de termos vende cada uno a $250. Costo variable unitario: materiales $80, mano de obra $40 y gastos indirectos variables $20. Los costos fijos prorrateados son $60 por termo. Tiene capacidad ociosa. Un hotel pide 2,000 termos a $180 cada uno, con un empaque especial de $5 por pieza. Las ventas normales no se afectan.",
      en: "A thermos factory sells each one at $250. Unit variable cost: materials $80, labor $40 and variable overhead $20. Allocated fixed costs are $60 per thermos. It has idle capacity. A hotel orders 2,000 thermoses at $180 each, with special packaging of $5 each. Normal sales are not affected.",
    },
    prompt: {
      es: "¿En cuánto aumenta la utilidad de la fábrica de termos si acepta el pedido del hotel? Responde en pesos.",
      en: "By how much does the thermos factory's profit increase if it accepts the hotel order? Answer in pesos.",
    },
    answer: 70000,
    unit: 'MXN',
    decimals: 0,
    tolerance: { abs: 0.5 },
    explanation: {
      es: "Costo relevante = 80 + 40 + 20 + 5 = $145 por termo. Margen = 180 − 145 = $35. Efecto = 35 × 2,000 = $70,000. Los $60 de fijos no cambian. Error común: restar también los fijos (180 − 205 = −25) y rechazar un pedido que sí conviene.",
      en: "Relevant cost = 80 + 40 + 20 + 5 = $145 per thermos. Margin = 180 − 145 = $35. Effect = 35 × 2,000 = $70,000. The $60 of fixed costs do not change. Common mistake: also subtracting fixed costs (180 − 205 = −25) and rejecting an order that does pay.",
    },
    difficulty: 2,
    points: 15,
    competency: 'decision-costing',
  },
  {
    id: 'COS-14-E3',
    level: 3,
    module: 'COS-14',
    kind: 'fields',
    flavor: 'case',
    context: {
      es: "Una armadora de bicicletas produce 10,000 asientos al año. Costo por asiento: materiales $30, mano de obra $20 y gastos indirectos variables $10. Además se le asignan $150,000 de gastos fijos; de ellos, $60,000 (el sueldo de un supervisor) desaparecerían si deja de producirlos. Un proveedor ofrece los asientos a $68 cada uno. La capacidad liberada no tendría otro uso.",
      en: "A bicycle assembler makes 10,000 seats a year. Cost per seat: materials $30, labor $20 and variable overhead $10. It is also allocated $150,000 of fixed costs; of these, $60,000 (a supervisor's salary) would disappear if it stopped making them. A supplier offers the seats at $68 each. The freed capacity would have no other use.",
    },
    prompt: {
      es: "Compara hacer contra comprar los asientos: completa los montos en pesos.",
      en: "Compare making versus buying the seats: complete the amounts in pesos.",
    },
    fields: [
      { id: 'f1', label: { es: "Costo relevante de hacer (10,000 asientos)", en: "Relevant cost of making (10,000 seats)" }, answer: 660000, unit: 'MXN', tolerance: { abs: 0.5 } },
      { id: 'f2', label: { es: "Costo de comprar (10,000 asientos)", en: "Cost of buying (10,000 seats)" }, answer: 680000, unit: 'MXN', tolerance: { abs: 0.5 } },
      { id: 'f3', label: { es: "Ahorro de seguir haciéndolos", en: "Savings from continuing to make them" }, answer: 20000, unit: 'MXN', tolerance: { abs: 0.5 } },
    ],
    explanation: {
      es: "Hacer: (30 + 20 + 10) × 10,000 = $600,000 más $60,000 de fijos evitables = $660,000. Los otros $90,000 de fijos se pagan de todos modos. Comprar: 68 × 10,000 = $680,000. Hacer ahorra 680,000 − 660,000 = $20,000. Error común: sumar los $150,000 completos (hacer = $750,000) y concluir que conviene comprar.",
      en: "Make: (30 + 20 + 10) × 10,000 = $600,000 plus $60,000 of avoidable fixed costs = $660,000. The other $90,000 of fixed costs are paid anyway. Buy: 68 × 10,000 = $680,000. Making saves 680,000 − 660,000 = $20,000. Common mistake: adding the full $150,000 (make = $750,000) and concluding that buying pays.",
    },
    difficulty: 3,
    points: 20,
    competency: 'decision-costing',
  },
  {
    id: 'COS-14-E4',
    level: 3,
    module: 'COS-14',
    kind: 'mcq',
    flavor: 'case',
    context: {
      es: "Una tienda departamental analiza su línea de juguetes: ventas $500,000, costos variables $380,000 y costos fijos asignados $150,000, de los cuales solo $70,000 desaparecerían si la cierra (el resto es renta y administración general). El reporte muestra una pérdida de $30,000.",
      en: "A department store is analyzing its toy line: sales $500,000, variable costs $380,000 and allocated fixed costs $150,000, of which only $70,000 would disappear if it closed the line (the rest is rent and general administration). The report shows a $30,000 loss.",
    },
    prompt: {
      es: "¿Qué le conviene a la tienda departamental con su línea de juguetes?",
      en: "What should the department store do with its toy line?",
    },
    options: [
      { id: 'COS-14-E4-a', text: { es: "Eliminarla: la utilidad total sube $30,000", en: "Drop it: total profit rises by $30,000" } },
      { id: 'COS-14-E4-b', text: { es: "Mantenerla: eliminarla bajaría la utilidad total en $50,000", en: "Keep it: dropping it would lower total profit by $50,000" } },
      { id: 'COS-14-E4-c', text: { es: "Eliminarla: se ahorran $150,000 de costos fijos", en: "Drop it: $150,000 of fixed costs are saved" } },
      { id: 'COS-14-E4-d', text: { es: "Mantenerla: eliminarla bajaría la utilidad total en $120,000", en: "Keep it: dropping it would lower total profit by $120,000" } },
    ],
    correctOptionId: 'COS-14-E4-b',
    explanation: {
      es: "Margen de contribución = 500,000 − 380,000 = $120,000. Si se elimina, se pierde ese margen y solo se ahorran $70,000 de fijos evitables: la utilidad baja 120,000 − 70,000 = $50,000. Los $80,000 restantes se seguirían pagando. Error común: creer que se ahorran los $150,000 o fijarse solo en la pérdida contable de $30,000.",
      en: "Contribution margin = 500,000 − 380,000 = $120,000. If dropped, that margin is lost and only $70,000 of avoidable fixed costs are saved: profit falls 120,000 − 70,000 = $50,000. The remaining $80,000 would still be paid. Common mistake: believing the full $150,000 is saved or looking only at the $30,000 accounting loss.",
    },
    difficulty: 3,
    points: 20,
    competency: 'decision-costing',
  },
  {
    id: 'COS-14-E5',
    level: 3,
    module: 'COS-14',
    kind: 'numeric',
    flavor: 'case',
    context: {
      es: "Un taller de herrería tiene solo 1,000 horas máquina al mes. La puerta A deja $120 de margen de contribución y usa 4 horas; la reja B deja $90 y usa 2 horas. Este mes puede vender como máximo 200 puertas A y 300 rejas B.",
      en: "An ironwork shop has only 1,000 machine hours a month. Door A leaves a $120 contribution margin and uses 4 hours; gate B leaves $90 and uses 2 hours. This month it can sell at most 200 A doors and 300 B gates.",
    },
    prompt: {
      es: "Con la mejor mezcla de producción, ¿cuál es el margen de contribución total máximo del taller de herrería este mes? Responde en pesos.",
      en: "With the best production mix, what is the ironwork shop's maximum total contribution margin this month? Answer in pesos.",
    },
    answer: 39000,
    unit: 'MXN',
    decimals: 0,
    tolerance: { abs: 0.5 },
    explanation: {
      es: "Margen por hora: A = 120 ÷ 4 = $30; B = 90 ÷ 2 = $45. Primero B: 300 × 2 = 600 horas, margen 300 × 90 = $27,000. Quedan 400 horas para A: 400 ÷ 4 = 100 puertas, margen 100 × 120 = $12,000. Total = $39,000. Error común: priorizar A porque deja más por unidad ($120); así se obtendrían solo 200 × 120 + 100 × 90 = $33,000.",
      en: "Margin per hour: A = 120 ÷ 4 = $30; B = 90 ÷ 2 = $45. First B: 300 × 2 = 600 hours, margin 300 × 90 = $27,000. 400 hours remain for A: 400 ÷ 4 = 100 doors, margin 100 × 120 = $12,000. Total = $39,000. Common mistake: prioritizing A because it leaves more per unit ($120); that would yield only 200 × 120 + 100 × 90 = $33,000.",
    },
    difficulty: 3,
    points: 20,
    competency: 'decision-costing',
  },
  {
    id: 'COS-14-E6',
    level: 3,
    module: 'COS-14',
    kind: 'classify',
    flavor: 'case',
    context: {
      es: "Una fábrica de playeras con capacidad ociosa decide si acepta un pedido especial de 3,000 playeras para un evento deportivo.",
      en: "A T-shirt factory with idle capacity is deciding whether to accept a special order of 3,000 T-shirts for a sports event.",
    },
    prompt: {
      es: "Clasifica cada concepto como relevante o irrelevante para decidir si la fábrica de playeras acepta el pedido.",
      en: "Classify each item as relevant or irrelevant for deciding whether the T-shirt factory accepts the order.",
    },
    categories: [
      { id: 'COS-14-E6-c1', label: { es: "Relevante", en: "Relevant" } },
      { id: 'COS-14-E6-c2', label: { es: "Irrelevante", en: "Irrelevant" } },
    ],
    items: [
      { id: 'COS-14-E6-i1', label: { es: "Tela y tinta para las 3,000 playeras", en: "Fabric and ink for the 3,000 T-shirts" }, correctCategoryId: 'COS-14-E6-c1' },
      { id: 'COS-14-E6-i2', label: { es: "Flete adicional para entregar el pedido", en: "Additional freight to deliver the order" }, correctCategoryId: 'COS-14-E6-c1' },
      { id: 'COS-14-E6-i3', label: { es: "Comisión al vendedor que consiguió el pedido", en: "Commission to the salesperson who landed the order" }, correctCategoryId: 'COS-14-E6-c1' },
      { id: 'COS-14-E6-i4', label: { es: "Renta mensual de la nave industrial", en: "Monthly rent of the industrial building" }, correctCategoryId: 'COS-14-E6-c2' },
      { id: 'COS-14-E6-i5', label: { es: "Depreciación de las máquinas de costura ya compradas", en: "Depreciation of the sewing machines already bought" }, correctCategoryId: 'COS-14-E6-c2' },
      { id: 'COS-14-E6-i6', label: { es: "Sueldo fijo del gerente de planta", en: "Plant manager's fixed salary" }, correctCategoryId: 'COS-14-E6-c2' },
    ],
    explanation: {
      es: "Relevantes: tela, tinta, flete y comisión solo existen si se acepta el pedido. Irrelevantes: renta, depreciación de máquinas ya compradas y sueldo del gerente no cambian con la decisión porque hay capacidad ociosa. Error común: incluir la depreciación porque «la máquina se usará»; su costo ya se pagó y no aumenta por el pedido.",
      en: "Relevant: fabric, ink, freight and commission exist only if the order is accepted. Irrelevant: rent, depreciation of machines already bought and the manager's salary do not change with the decision because there is idle capacity. Common mistake: including depreciation because \"the machine will be used\"; its cost was already paid and does not increase with the order.",
    },
    difficulty: 2,
    points: 15,
    competency: 'decision-costing',
  },
]
