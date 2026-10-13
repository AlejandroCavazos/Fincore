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
    minutes: 17,
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
        formula: "Cumplimiento (%) = Resultado real ÷ Meta × 100",
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
        formula: "ROI = Utilidad operativa ÷ Activos operativos = (Utilidad ÷ Ventas) × (Ventas ÷ Activos)  |  Ingreso residual = Utilidad operativa − (Tasa mínima × Activos operativos)",
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
        formula: "Rotación de inventario = Costo de ventas ÷ Inventario promedio  |  Días de inventario = 365 ÷ Rotación",
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
    minutes: 18,
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
        formula: "Efecto en la utilidad = Ingresos relevantes − Costos relevantes (variables + fijos evitables + costo de oportunidad)",
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
        formula: "Margen por recurso escaso = (Precio − Costo variable unitario) ÷ Unidades del recurso por producto",
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
