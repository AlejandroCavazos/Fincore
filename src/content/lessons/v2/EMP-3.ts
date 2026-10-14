import type { Exercise, Lesson } from '../../../types'

/**
 * FINCORE — Temario v2.0 · Emprendimiento, Administración y Estrategia · Nivel 1 (Intermedio)
 * EMP.13 a EMP.18: viabilidad, KPI, innovación, crecimiento, escalabilidad y venture capital.
 */

const NOTE_FEASIBILITY = {
  es: "Contenido educativo. Los permisos, licencias y registros para abrir un negocio en México (por ejemplo, ante el municipio o el SAT) dependen del giro y del lugar, y sus reglas cambian: verifica los requisitos vigentes (2026) con la autoridad correspondiente. Las cifras de los ejemplos son hipotéticas.",
  en: "Educational content. The permits, licenses and registrations needed to open a business in Mexico (for example, with the municipality or the SAT) depend on the type of business and the location, and their rules change: verify the current requirements (2026) with the relevant authority. The figures in the examples are hypothetical.",
}

const NOTE_GROWTH = {
  es: "Contenido educativo. Las franquicias, las fusiones y las adquisiciones en México tienen reglas propias (por ejemplo, de información al franquiciatario y de competencia económica) que cambian con el tiempo: verifica la normativa vigente (2026) con un especialista antes de firmar. Las cifras de los ejemplos son hipotéticas.",
  en: "Educational content. Franchises, mergers and acquisitions in Mexico have their own rules (for example, on disclosure to the franchisee and on economic competition) that change over time: verify the current regulations (2026) with a specialist before signing. The figures in the examples are hypothetical.",
}

const NOTE_VC = {
  es: "Contenido educativo. En México, las plataformas de financiamiento colectivo (crowdfunding) están reguladas por la Ley Fintech y supervisadas por la CNBV; los fondos de capital privado y emprendedor tienen sus propias reglas. Las normas y prácticas del mercado cambian: verifica la versión vigente (2026) y consulta a un abogado antes de firmar una hoja de términos. Valuaciones y montos de los ejemplos son hipotéticos.",
  en: "Educational content. In Mexico, crowdfunding platforms are regulated by the Fintech Law and supervised by the CNBV (National Banking and Securities Commission); private equity and venture funds have their own rules. Regulations and market practices change: verify the current version (2026) and consult a lawyer before signing a term sheet. Valuations and amounts in the examples are hypothetical.",
}

export const lessons: Lesson[] = [
  // ───────────────────────────── EMP-13 ─────────────────────────────
  {
    id: 'EMP-13',
    level: 1,
    topicIds: ['EMP.13'],
    title: { es: "Evaluación de viabilidad empresarial", en: "Business feasibility assessment" },
    summary: {
      es: "Evaluar la viabilidad es revisar, antes de invertir, si un negocio tiene clientes, se puede operar, cumple la ley y deja dinero suficiente.",
      en: "Assessing feasibility means checking, before investing, whether a business has customers, can be operated, complies with the law and makes enough money.",
    },
    minutes: 18,
    objectives: [
      { es: "Explicar qué es la viabilidad de un negocio y sus cuatro dimensiones: mercado, técnica, legal y financiera.", en: "Explain what business feasibility is and its four dimensions: market, technical, legal and financial." },
      { es: "Estimar las ventas de un negocio a partir de clientes potenciales, frecuencia y ticket promedio.", en: "Estimate a business's sales from potential customers, frequency and average ticket." },
      { es: "Calcular el punto de equilibrio y el periodo de recuperación para decidir si una idea conviene.", en: "Compute the break-even point and the payback period to decide whether an idea is worth it." },
    ],
    theory: [
      {
        heading: { es: "¿Qué significa que un negocio sea viable?", en: "What does it mean for a business to be feasible?" },
        body: [
          {
            es: "Una idea puede sonar genial y aun así fracasar. Un negocio es **viable** cuando puede funcionar en la vida real **y sostenerse en el tiempo**: tiene clientes, se puede operar, es legal y deja dinero. **Evaluar la viabilidad** es hacer esa revisión **antes** de meter tus ahorros o pedir un préstamo.",
            en: "An idea can sound great and still fail. A business is **feasible** when it can work in real life **and sustain itself over time**: it has customers, it can be operated, it is legal and it makes money. **Assessing feasibility** means doing that check **before** putting in your savings or taking out a loan.",
          },
          {
            es: "Para no olvidar nada, se revisa en **cuatro dimensiones**. Basta con que una falle para que el negocio esté en riesgo: una taquería con muchos clientes pero sin permiso de uso de suelo puede ser clausurada.",
            en: "To avoid missing anything, it is checked in **four dimensions**. If just one fails, the business is at risk: a taco stand with many customers but no zoning permit can be shut down.",
          },
          {
            es: "Mini ejemplo: Ana quiere abrir una lavandería en su colonia. Pregunta a sus vecinos si la usarían (mercado), cotiza lavadoras y un local con buena toma de agua (técnica), revisa qué licencia pide su municipio (legal) y calcula si las ventas cubren renta, luz y agua (financiera).",
            en: "Mini example: Ana wants to open a laundromat in her neighborhood. She asks neighbors if they would use it (market), gets quotes for washers and a space with a good water supply (technical), checks what license her municipality requires (legal) and calculates whether sales cover rent, electricity and water (financial).",
          },
        ],
        bullets: [
          { es: "Mercado: ¿hay suficientes personas que quieran y puedan pagar?", en: "Market: are there enough people who want to and can pay?" },
          { es: "Técnica: ¿tengo el lugar, el equipo, los proveedores y el saber hacer?", en: "Technical: do I have the place, equipment, suppliers and know-how?" },
          { es: "Legal y administrativa: ¿qué permisos, registros y contratos necesito?", en: "Legal and administrative: which permits, registrations and contracts do I need?" },
          { es: "Financiera: ¿cuánto debo invertir y cuándo lo recupero?", en: "Financial: how much must I invest and when do I get it back?" },
        ],
      },
      {
        heading: { es: "Viabilidad de mercado y técnica", en: "Market and technical feasibility" },
        body: [
          {
            es: "La pregunta de **mercado** es: ¿cuánto voy a vender? No se responde con optimismo, sino con una **estimación** paso a paso. Partes de los **clientes potenciales** (personas que podrían comprarte), aplicas qué porcentaje realmente compraría, cuántas veces al mes y cuánto gasta cada vez (el **ticket promedio**).",
            en: "The **market** question is: how much will I sell? It is not answered with optimism but with a step-by-step **estimate**. You start from **potential customers** (people who could buy from you), apply what percentage would actually buy, how many times a month and how much each one spends per visit (the **average ticket**).",
          },
          {
            es: "Los porcentajes salen de evidencia: encuestas, contar personas que pasan frente al local, ver cuánto venden negocios parecidos. Es mejor quedarse **conservador** (estimar de menos) que soñar.",
            en: "The percentages come from evidence: surveys, counting people walking past the space, looking at how much similar businesses sell. It is better to be **conservative** (estimate low) than to dream.",
          },
          {
            es: "La viabilidad **técnica** revisa si puedes producir y entregar: **capacidad** (cuántos clientes atiendes por hora), **ubicación**, **equipo**, **proveedores** confiables y personal con las habilidades necesarias. Mini ejemplo: si tu horno hace 60 panes por hora y estimas vender 900 al día, necesitas 15 horas de horneado: quizá debas comprar un segundo horno.",
            en: "**Technical** feasibility checks whether you can produce and deliver: **capacity** (how many customers you serve per hour), **location**, **equipment**, reliable **suppliers** and staff with the necessary skills. Mini example: if your oven bakes 60 loaves per hour and you expect to sell 900 a day, you need 15 hours of baking: you may need a second oven.",
          },
        ],
        formulas: [
          {
            name: { es: "Ventas mensuales estimadas", en: "Estimated monthly sales" },
            expression: "Ventas mensuales estimadas = Clientes potenciales × % que compra × Compras al mes × Ticket promedio",
            variables: [
              { symbol: "Ventas mensuales estimadas", meaning: { es: "Cuánto esperas vender en un mes, en pesos.", en: "How much you expect to sell in a month, in pesos." } },
              { symbol: "Clientes potenciales", meaning: { es: "Personas que podrían comprarte (vecinos de la colonia, oficinistas de un edificio).", en: "People who could buy from you (neighborhood residents, office workers in a building)." } },
              { symbol: "% que compra", meaning: { es: "Qué parte de ellos realmente compraría, según una encuesta o evidencia, en porcentaje.", en: "What share of them would actually buy, based on a survey or evidence, as a percentage." } },
              { symbol: "Compras al mes", meaning: { es: "Cuántas veces al mes compra cada cliente.", en: "How many times a month each customer buys." } },
              { symbol: "Ticket promedio", meaning: { es: "Cuánto gasta un cliente cada vez que compra, en pesos.", en: "How much a customer spends each time they buy, in pesos." } },
            ],
            steps: [
              { es: "Convierte el porcentaje a decimal y multiplícalo por los clientes potenciales: son tus clientes reales.", en: "Convert the percentage to a decimal and multiply it by the potential customers: those are your actual customers." },
              { es: "Multiplica los clientes reales por las compras al mes: es el número de compras.", en: "Multiply the actual customers by purchases per month: that is the number of purchases." },
              { es: "Multiplica el número de compras por el ticket promedio: son las ventas del mes.", en: "Multiply the number of purchases by the average ticket: that is the month's sales." },
            ],
            example: {
              es: "Una tortería en una zona con 3,000 vecinos: 6% le compraría, 3 veces al mes, con ticket de $80. Paso 1: 3,000 × 0.06 = 180 clientes. Paso 2: 180 × 3 = 540 compras. Paso 3: 540 × $80 = **$43,200** al mes.",
              en: "A sandwich shop in an area with 3,000 residents: 6% would buy, 3 times a month, with an $80 ticket. Step 1: 3,000 × 0.06 = 180 customers. Step 2: 180 × 3 = 540 purchases. Step 3: 540 × $80 = **$43,200** a month.",
            },
            interpret: {
              es: "Compara esta cifra con tus costos y tu punto de equilibrio. Si apenas alcanza, el negocio es frágil.",
              en: "Compare this figure with your costs and your break-even point. If it barely covers them, the business is fragile.",
            },
            mistake: {
              es: "Olvidar las compras al mes, como si cada cliente comprara una sola vez.",
              en: "Forgetting purchases per month, as if each customer bought only once.",
            },
          },
        ],
      },
      {
        heading: { es: "Viabilidad financiera: ¿deja dinero y cuándo lo recupero?", en: "Financial feasibility: does it make money and when do I get it back?" },
        body: [
          {
            es: "Primero calcula la **inversión inicial**: todo lo que pagas antes de abrir (equipo, adecuaciones, depósito del local, inventario inicial y un colchón de efectivo para los primeros meses).",
            en: "First compute the **initial investment**: everything you pay before opening (equipment, fit-out, the rent deposit, starting inventory and a cash cushion for the first months).",
          },
          {
            es: "Luego el **punto de equilibrio**: cuántas unidades debes vender para no ganar ni perder. Cada unidad deja un **margen de contribución** (precio menos costo variable) que va pagando los **costos fijos** (renta, sueldos base). Si tus ventas estimadas quedan muy cerca del punto de equilibrio, el negocio es frágil.",
            en: "Then the **break-even point**: how many units you must sell to neither earn nor lose. Each unit leaves a **contribution margin** (price minus variable cost) that pays for **fixed costs** (rent, base salaries). If your estimated sales are very close to break-even, the business is fragile.",
          },
          {
            es: "Por último, el **periodo de recuperación**: cuánto tiempo tarda el flujo de efectivo neto en devolverte la inversión. Más adelante verás herramientas más finas (como el valor presente neto) que toman en cuenta el valor del dinero en el tiempo. Mini ejemplo: inviertes $120,000 y el negocio deja $10,000 netos al mes: recuperas en 12 meses.",
            en: "Finally, the **payback period**: how long the net cash flow takes to return your investment. Later you will see finer tools (like net present value) that account for the time value of money. Mini example: you invest $120,000 and the business nets $10,000 a month: you recover it in 12 months.",
          },
        ],
        formulas: [
          {
            name: { es: "Margen de contribución y punto de equilibrio", en: "Contribution margin and break-even point" },
            expression: "Margen de contribución = Precio − Costo variable unitario  ·  Punto de equilibrio (unidades) = Costos fijos ÷ Margen de contribución",
            variables: [
              { symbol: "Margen de contribución", meaning: { es: "Lo que te deja cada unidad vendida para pagar los costos fijos, en pesos.", en: "What each unit sold leaves you to pay fixed costs, in pesos." } },
              { symbol: "Precio", meaning: { es: "A cuánto vendes cada unidad, en pesos.", en: "What you sell each unit for, in pesos." } },
              { symbol: "Costo variable unitario", meaning: { es: "Lo que cuesta hacer una unidad más (material, empaque), en pesos.", en: "What it costs to make one more unit (materials, packaging), in pesos." } },
              { symbol: "Costos fijos", meaning: { es: "Lo que pagas cada mes aunque no vendas nada (renta, sueldos base), en pesos.", en: "What you pay each month even if you sell nothing (rent, base salaries), in pesos." } },
              { symbol: "Punto de equilibrio (unidades)", meaning: { es: "Unidades que debes vender al mes para no ganar ni perder.", en: "Units you must sell per month to neither earn nor lose." } },
            ],
            steps: [
              { es: "Resta el costo variable al precio: es el margen de contribución.", en: "Subtract the variable cost from the price: that is the contribution margin." },
              { es: "Divide los costos fijos entre ese margen: es el punto de equilibrio en unidades.", en: "Divide fixed costs by that margin: that is the break-even point in units." },
              { es: "Compara con tus ventas estimadas: entre más arriba del equilibrio, más colchón tienes.", en: "Compare with your estimated sales: the further above break-even, the more cushion you have." },
            ],
            example: {
              es: "Una florería vende arreglos a $90; cada uno cuesta $50 en flores y papel; sus costos fijos son $24,000 al mes. Paso 1: $90 − $50 = $40. Paso 2: $24,000 ÷ $40 = **600 arreglos** al mes.",
              en: "A flower shop sells arrangements at $90; each costs $50 in flowers and paper; its fixed costs are $24,000 a month. Step 1: $90 − $50 = $40. Step 2: $24,000 ÷ $40 = **600 arrangements** a month.",
            },
            interpret: {
              es: "Por debajo de esa cantidad pierdes dinero; por arriba, cada unidad extra deja su margen como ganancia.",
              en: "Below that quantity you lose money; above it, each extra unit leaves its margin as profit.",
            },
            mistake: {
              es: "Dividir los costos fijos entre el precio completo, olvidando restar el costo variable.",
              en: "Dividing fixed costs by the full price, forgetting to subtract the variable cost.",
            },
          },
          {
            name: { es: "Utilidad con las ventas estimadas", en: "Profit at estimated sales" },
            expression: "Utilidad = Unidades vendidas × Margen de contribución − Costos fijos",
            variables: [
              { symbol: "Utilidad", meaning: { es: "Lo que gana el negocio en el mes, en pesos (si sale negativa, es pérdida).", en: "What the business earns in the month, in pesos (if negative, it is a loss)." } },
              { symbol: "Unidades vendidas", meaning: { es: "Las unidades que estimas vender al mes.", en: "The units you expect to sell per month." } },
              { symbol: "Margen de contribución", meaning: { es: "Precio − costo variable de cada unidad, en pesos.", en: "Price − variable cost of each unit, in pesos." } },
              { symbol: "Costos fijos", meaning: { es: "Los gastos del mes que no cambian con las ventas, en pesos.", en: "The month's expenses that do not change with sales, in pesos." } },
            ],
            steps: [
              { es: "Multiplica las unidades vendidas por el margen de contribución.", en: "Multiply the units sold by the contribution margin." },
              { es: "Resta los costos fijos: lo que queda es la utilidad del mes.", en: "Subtract the fixed costs: what remains is the month's profit." },
            ],
            example: {
              es: "La misma florería estima vender 800 arreglos. Paso 1: 800 × $40 = $32,000. Paso 2: $32,000 − $24,000 = **$8,000** de utilidad al mes.",
              en: "The same flower shop expects to sell 800 arrangements. Step 1: 800 × $40 = $32,000. Step 2: $32,000 − $24,000 = **$8,000** profit a month.",
            },
            mistake: {
              es: "Multiplicar las unidades por el precio (no por el margen), olvidando el costo variable.",
              en: "Multiplying the units by the price (not by the margin), forgetting the variable cost.",
            },
          },
          {
            name: { es: "Periodo de recuperación de la inversión", en: "Payback period" },
            expression: "Recuperación = Inversión ÷ Flujo neto por periodo",
            variables: [
              { symbol: "Recuperación", meaning: { es: "Cuántos periodos (meses o años) tardas en recuperar lo invertido.", en: "How many periods (months or years) it takes to get back what you invested." } },
              { symbol: "Inversión", meaning: { es: "Todo lo que pagaste antes de abrir, en pesos.", en: "Everything you paid before opening, in pesos." } },
              { symbol: "Flujo neto por periodo", meaning: { es: "El dinero que te queda libre cada mes (o cada año), en pesos.", en: "The money left over each month (or each year), in pesos." } },
            ],
            steps: [
              { es: "Revisa si el flujo es mensual o anual: el resultado sale en esa misma unidad.", en: "Check whether the flow is monthly or yearly: the result comes out in that same unit." },
              { es: "Divide la inversión entre el flujo neto por periodo.", en: "Divide the investment by the net cash flow per period." },
            ],
            example: {
              es: "Una estética invierte $150,000 y le quedan $6,000 netos al mes. Paso 2: $150,000 ÷ $6,000 = **25 meses** (poco más de 2 años).",
              en: "A beauty salon invests $150,000 and nets $6,000 a month. Step 2: $150,000 ÷ $6,000 = **25 months** (just over 2 years).",
            },
            interpret: {
              es: "Entre más corto, menos riesgo. Es una medida sencilla: no toma en cuenta el valor del dinero en el tiempo.",
              en: "The shorter, the lower the risk. It is a simple measure: it ignores the time value of money.",
            },
            mistake: {
              es: "Confundir la unidad: si el flujo es mensual, la respuesta es en meses, no en años.",
              en: "Mixing up the unit: if the flow is monthly, the answer is in months, not years.",
            },
          },
        ],
        bullets: [
          { es: "Inversión inicial: lo que pagas antes de vender el primer producto.", en: "Initial investment: what you pay before selling the first product." },
          { es: "Margen de contribución unitario: precio − costo variable.", en: "Unit contribution margin: price − variable cost." },
          { es: "Punto de equilibrio: ventas mínimas para no perder.", en: "Break-even point: minimum sales to avoid a loss." },
          { es: "Recuperación: tiempo para que el flujo devuelva la inversión.", en: "Payback: time for cash flow to return the investment." },
        ],
      },
    ],
    examples: [
      {
        title: { es: "¿Cuánto venderá un puesto de café frente a oficinas?", en: "How much will a coffee stand outside offices sell?" },
        problem: {
          es: "Luis quiere poner un puesto de café junto a un edificio con 2,500 oficinistas. Una encuesta indica que 8% le compraría, unas 10 veces al mes, con un ticket promedio de $35. Estima sus ventas mensuales.",
          en: "Luis wants to set up a coffee stand next to a building with 2,500 office workers. A survey shows 8% would buy from him, about 10 times a month, with an average ticket of $35. Estimate his monthly sales.",
        },
        steps: [
          { es: "Clientes reales: 2,500 × 8% = 200 personas.", en: "Actual customers: 2,500 × 8% = 200 people." },
          { es: "Compras al mes: 200 × 10 = 2,000 compras.", en: "Purchases per month: 200 × 10 = 2,000 purchases." },
          { es: "Ventas: 2,000 × $35 = $70,000 al mes.", en: "Sales: 2,000 × $35 = $70,000 per month." },
        ],
        result: {
          es: "Luis puede esperar unos $70,000 de ventas al mes. Con esa cifra ya puede comparar contra sus costos y su punto de equilibrio.",
          en: "Luis can expect about $70,000 in monthly sales. With that figure he can compare against his costs and his break-even point.",
        },
      },
      {
        title: { es: "Punto de equilibrio y recuperación de una cocina de comida para llevar", en: "Break-even and payback of a take-out kitchen" },
        problem: {
          es: "Una cocina vende paquetes de comida a $120. El costo variable de cada paquete es $70 y los costos fijos son $25,000 al mes. La inversión inicial fue $240,000 y se espera un flujo neto de $80,000 al año. Calcula el punto de equilibrio mensual y el periodo de recuperación.",
          en: "A kitchen sells meal packs at $120. The variable cost of each pack is $70 and fixed costs are $25,000 per month. The initial investment was $240,000 and a net cash flow of $80,000 per year is expected. Compute the monthly break-even point and the payback period.",
        },
        steps: [
          { es: "Margen de contribución: $120 − $70 = $50 por paquete.", en: "Contribution margin: $120 − $70 = $50 per pack." },
          { es: "Punto de equilibrio: $25,000 ÷ $50 = 500 paquetes al mes.", en: "Break-even: $25,000 ÷ $50 = 500 packs per month." },
          { es: "Recuperación: $240,000 ÷ $80,000 = 3 años.", en: "Payback: $240,000 ÷ $80,000 = 3 years." },
        ],
        result: {
          es: "Debe vender al menos 500 paquetes al mes para no perder, y recuperaría su inversión en 3 años. Si su estimación de ventas está muy por encima de 500, la idea luce financieramente viable.",
          en: "It must sell at least 500 packs a month to avoid a loss, and it would recover its investment in 3 years. If its sales estimate is well above 500, the idea looks financially feasible.",
        },
      },
    ],
    keyPoints: [
      { es: "Viable = tiene clientes, se puede operar, es legal y deja dinero de forma sostenida.", en: "Feasible = it has customers, can be operated, is legal and makes money sustainably." },
      { es: "Se evalúan cuatro dimensiones: mercado, técnica, legal y financiera; si una falla, hay riesgo.", en: "Four dimensions are assessed: market, technical, legal and financial; if one fails, there is risk." },
      { es: "Las ventas se estiman con evidencia: clientes × % que compra × frecuencia × ticket.", en: "Sales are estimated with evidence: customers × % who buy × frequency × ticket." },
      { es: "Punto de equilibrio = costos fijos ÷ margen de contribución unitario.", en: "Break-even = fixed costs ÷ unit contribution margin." },
      { es: "Recuperación = inversión ÷ flujo neto por periodo; entre más corta, menos riesgo.", en: "Payback = investment ÷ net cash flow per period; the shorter, the lower the risk." },
    ],
    normativeNote: NOTE_FEASIBILITY,
    exerciseIds: ['EMP-13-E1', 'EMP-13-E2', 'EMP-13-E3', 'EMP-13-E4', 'EMP-13-E5', 'EMP-13-E6'],
  },

  // ───────────────────────────── EMP-14 ─────────────────────────────
  {
    id: 'EMP-14',
    level: 1,
    topicIds: ['EMP.14'],
    title: { es: "Indicadores de desempeño (KPI)", en: "Key performance indicators (KPIs)" },
    summary: {
      es: "Un KPI es un número clave, ligado a un objetivo y con una meta, que te dice a tiempo si tu negocio va bien o necesita corregir.",
      en: "A KPI is a key number, tied to an objective and with a target, that tells you in time whether your business is on track or needs correcting.",
    },
    minutes: 17,
    objectives: [
      { es: "Distinguir una métrica cualquiera de un KPI y explicar qué lo hace útil.", en: "Distinguish an ordinary metric from a KPI and explain what makes it useful." },
      { es: "Diseñar un KPI con fórmula, meta, frecuencia y responsable, y reconocer indicadores adelantados y rezagados.", en: "Design a KPI with a formula, target, frequency and owner, and recognize leading and lagging indicators." },
      { es: "Calcular e interpretar KPI comunes: ticket promedio, tasa de conversión, entregas a tiempo y margen bruto.", en: "Compute and interpret common KPIs: average ticket, conversion rate, on-time deliveries and gross margin." },
    ],
    theory: [
      {
        heading: { es: "Métricas y KPI: no todo número es clave", en: "Metrics and KPIs: not every number is key" },
        body: [
          {
            es: "Una **métrica** es cualquier cosa que puedes contar: visitas a tu página, likes, clientes atendidos. Un **KPI** (siglas en inglés de *key performance indicator*, indicador clave de desempeño) es una métrica **elegida** porque mide qué tan cerca estás de un **objetivo importante**.",
            en: "A **metric** is anything you can count: page visits, likes, customers served. A **KPI** (key performance indicator) is a metric **chosen** because it measures how close you are to an **important objective**.",
          },
          {
            es: "La diferencia está en la conexión con la decisión. Si tu objetivo es vender más en tu tienda en línea, los likes son una métrica de vanidad; el **porcentaje de visitantes que compran** sí es un KPI, porque si baja sabes que algo falla en tu tienda.",
            en: "The difference is the link to a decision. If your goal is to sell more in your online store, likes are a vanity metric; the **percentage of visitors who buy** is a KPI, because if it drops you know something is wrong in your store.",
          },
          {
            es: "Mini ejemplo: una estética tiene como objetivo que sus clientas regresen. Su KPI puede ser el **porcentaje de clientas que vuelven en 60 días**. Si es 40% y la meta es 55%, la dueña sabe que debe mejorar el servicio o recordarles su siguiente cita.",
            en: "Mini example: a beauty salon's goal is for clients to come back. Its KPI could be the **percentage of clients who return within 60 days**. If it is 40% and the target is 55%, the owner knows she must improve service or remind clients of their next appointment.",
          },
        ],
      },
      {
        heading: { es: "Cómo diseñar un buen KPI", en: "How to design a good KPI" },
        body: [
          {
            es: "Un KPI bien hecho tiene **ficha**: qué mide, con qué **fórmula**, cuál es la **meta**, cada cuándo se revisa (**frecuencia**) y quién es el **responsable** de moverlo. Sin meta, un número no te dice si vas bien o mal.",
            en: "A well-built KPI has a **data sheet**: what it measures, with what **formula**, what the **target** is, how often it is reviewed (**frequency**) and who is **responsible** for moving it. Without a target, a number does not tell you whether you are doing well or badly.",
          },
          {
            es: "Ayuda la regla **SMART**: específico, medible, alcanzable, relevante y con tiempo definido. «Vender más» no es SMART; «subir el ticket promedio de $180 a $200 antes de diciembre» sí lo es.",
            en: "The **SMART** rule helps: specific, measurable, achievable, relevant and time-bound. 'Sell more' is not SMART; 'raise the average ticket from $180 to $200 before December' is.",
          },
          {
            es: "Combina dos tipos. Los **indicadores rezagados** muestran el resultado cuando ya pasó (ventas del mes, utilidad). Los **indicadores adelantados** se mueven antes y anticipan el resultado (cotizaciones enviadas, visitas a clientes). Mini ejemplo: si un vendedor manda menos cotizaciones esta semana, es probable que el mes que entra venda menos.",
            en: "Combine two types. **Lagging indicators** show the result once it has happened (monthly sales, profit). **Leading indicators** move first and anticipate the result (quotes sent, customer visits). Mini example: if a salesperson sends fewer quotes this week, they will probably sell less next month.",
          },
        ],
        bullets: [
          { es: "Nombre y objetivo al que sirve.", en: "Name and the objective it serves." },
          { es: "Fórmula clara y fuente del dato.", en: "Clear formula and data source." },
          { es: "Meta numérica y fecha.", en: "Numeric target and date." },
          { es: "Frecuencia de revisión (diaria, semanal, mensual).", en: "Review frequency (daily, weekly, monthly)." },
          { es: "Responsable de actuar si se desvía.", en: "Owner who acts if it deviates." },
        ],
      },
      {
        heading: { es: "KPI comunes y cómo leerlos en un tablero", en: "Common KPIs and how to read them on a dashboard" },
        body: [
          {
            es: "Cada área del negocio tiene sus KPI típicos. En **ventas**: el **ticket promedio** (cuánto gasta cada cliente por compra) y la **tasa de conversión** (de cada 100 interesados, cuántos compran). En **operaciones**: el **porcentaje de entregas a tiempo**. En **finanzas**: el **margen bruto** (qué parte de cada peso vendido queda después del costo de lo vendido).",
            en: "Each business area has its typical KPIs. In **sales**: the **average ticket** (how much each customer spends per purchase) and the **conversion rate** (out of every 100 interested people, how many buy). In **operations**: the **on-time delivery percentage**. In **finance**: the **gross margin** (what part of each peso sold remains after the cost of goods sold).",
          },
          {
            es: "Un **tablero** (dashboard) junta pocos KPI, entre 5 y 10, con un **semáforo**: verde si cumple la meta, amarillo si está cerca, rojo si está lejos. Lo importante no es el color, sino **qué haces** cuando algo se pone en rojo.",
            en: "A **dashboard** brings together a few KPIs, between 5 and 10, with a **traffic light**: green if it meets the target, yellow if it is close, red if it is far. What matters is not the color but **what you do** when something turns red.",
          },
          {
            es: "Mini ejemplo: una papelería vendió $60,000 en 500 tickets: ticket promedio = $120. Si la meta era $150, puede probar combos de útiles para que cada cliente lleve un poco más.",
            en: "Mini example: a stationery store sold $60,000 across 500 tickets: average ticket = $120. If the target was $150, it can try school-supply bundles so each customer takes a bit more.",
          },
        ],
        formulas: [
          {
            name: { es: "Ticket promedio", en: "Average ticket" },
            expression: "Ticket promedio = Ventas ÷ Núm. de tickets",
            variables: [
              { symbol: "Ticket promedio", meaning: { es: "Cuánto gasta en promedio cada compra, en pesos.", en: "How much each purchase averages, in pesos." } },
              { symbol: "Ventas", meaning: { es: "Lo vendido en el periodo, en pesos.", en: "What was sold in the period, in pesos." } },
              { symbol: "Núm. de tickets", meaning: { es: "Cuántas compras (notas o tickets) hubo en ese periodo.", en: "How many purchases (receipts or tickets) there were in that period." } },
            ],
            steps: [
              { es: "Toma las ventas totales del periodo.", en: "Take the total sales for the period." },
              { es: "Divídelas entre el número de tickets del mismo periodo.", en: "Divide them by the number of tickets in the same period." },
            ],
            example: {
              es: "Una farmacia vendió $84,000 en 600 tickets: $84,000 ÷ 600 = **$140** por compra.",
              en: "A pharmacy sold $84,000 across 600 tickets: $84,000 ÷ 600 = **$140** per purchase.",
            },
            mistake: {
              es: "Dividir entre los días del mes; eso da la venta diaria, no lo que gasta cada cliente.",
              en: "Dividing by the days in the month; that gives daily sales, not what each customer spends.",
            },
          },
          {
            name: { es: "Tasa de conversión", en: "Conversion rate" },
            expression: "Conversión % = Compradores ÷ Visitantes × 100",
            variables: [
              { symbol: "Conversión %", meaning: { es: "De cada 100 interesados, cuántos compran.", en: "Out of every 100 interested people, how many buy." } },
              { symbol: "Compradores", meaning: { es: "Personas que sí compraron.", en: "People who did buy." } },
              { symbol: "Visitantes", meaning: { es: "Todas las personas que entraron a la tienda o a la página.", en: "Everyone who came into the store or visited the page." } },
            ],
            steps: [
              { es: "Divide los compradores entre los visitantes (el número chico entre el grande).", en: "Divide buyers by visitors (the small number by the large one)." },
              { es: "Multiplica por 100 para expresarlo en porcentaje.", en: "Multiply by 100 to express it as a percentage." },
            ],
            example: {
              es: "Una tienda en línea de bolsas tuvo 4,000 visitantes y 100 compraron. Paso 1: 100 ÷ 4,000 = 0.025. Paso 2: 0.025 × 100 = **2.5%**.",
              en: "An online bag store had 4,000 visitors and 100 bought. Step 1: 100 ÷ 4,000 = 0.025. Step 2: 0.025 × 100 = **2.5%**.",
            },
            mistake: {
              es: "Dividir al revés (visitantes ÷ compradores) o no multiplicar por 100.",
              en: "Dividing the other way around (visitors ÷ buyers) or not multiplying by 100.",
            },
          },
          {
            name: { es: "Porcentaje de entregas a tiempo", en: "On-time delivery percentage" },
            expression: "Entregas a tiempo % = Entregas a tiempo ÷ Entregas totales × 100",
            variables: [
              { symbol: "Entregas a tiempo %", meaning: { es: "Qué parte de los pedidos llegó cuando se prometió.", en: "What share of orders arrived when promised." } },
              { symbol: "Entregas a tiempo", meaning: { es: "Pedidos que llegaron puntuales.", en: "Orders that arrived on time." } },
              { symbol: "Entregas totales", meaning: { es: "Todos los pedidos entregados en el periodo.", en: "All orders delivered in the period." } },
            ],
            steps: [
              { es: "Divide las entregas a tiempo entre las entregas totales.", en: "Divide on-time deliveries by total deliveries." },
              { es: "Multiplica por 100 y compáralo con la meta para ver el color del semáforo.", en: "Multiply by 100 and compare it with the target to see the traffic-light color." },
            ],
            example: {
              es: "Una mensajería hizo 300 entregas y 282 llegaron a tiempo: 282 ÷ 300 = 0.94; 0.94 × 100 = **94%**.",
              en: "A courier made 300 deliveries and 282 arrived on time: 282 ÷ 300 = 0.94; 0.94 × 100 = **94%**.",
            },
          },
          {
            name: { es: "Margen bruto", en: "Gross margin" },
            expression: "Margen bruto % = (Ventas − Costo de ventas) ÷ Ventas × 100",
            variables: [
              { symbol: "Margen bruto %", meaning: { es: "Qué parte de cada peso vendido queda después de pagar lo que costó la mercancía.", en: "What part of each peso sold remains after paying what the goods cost." } },
              { symbol: "Ventas", meaning: { es: "Lo vendido en el periodo, en pesos.", en: "What was sold in the period, in pesos." } },
              { symbol: "Costo de ventas", meaning: { es: "Lo que te costó la mercancía que vendiste, en pesos.", en: "What the goods you sold cost you, in pesos." } },
            ],
            steps: [
              { es: "Resta el costo de ventas a las ventas: es la utilidad bruta en pesos.", en: "Subtract the cost of sales from sales: that is gross profit in pesos." },
              { es: "Divide esa utilidad bruta entre las ventas (no entre el costo).", en: "Divide that gross profit by sales (not by cost)." },
              { es: "Multiplica por 100.", en: "Multiply by 100." },
            ],
            example: {
              es: "Una tienda de abarrotes vendió $200,000 y la mercancía le costó $130,000. Paso 1: $200,000 − $130,000 = $70,000. Paso 2: $70,000 ÷ $200,000 = 0.35. Paso 3: **35%**.",
              en: "A grocery store sold $200,000 and the goods cost it $130,000. Step 1: $200,000 − $130,000 = $70,000. Step 2: $70,000 ÷ $200,000 = 0.35. Step 3: **35%**.",
            },
            interpret: {
              es: "35% significa que de cada $100 vendidos te quedan $35 para pagar renta, sueldos y ganar.",
              en: "35% means that out of every $100 sold you keep $35 to pay rent, salaries and make a profit.",
            },
            mistake: {
              es: "Dividir entre el costo en lugar de entre las ventas; eso da un porcentaje más alto que no es el margen.",
              en: "Dividing by cost instead of by sales; that gives a higher percentage that is not the margin.",
            },
          },
        ],
      },
    ],
    examples: [
      {
        title: { es: "KPI de una tienda en línea de artesanías", en: "KPIs of an online crafts store" },
        problem: {
          es: "En marzo, una tienda en línea de artesanías tuvo 5,000 visitantes; 150 compraron y las ventas sumaron $67,500. Calcula la tasa de conversión y el ticket promedio.",
          en: "In March, an online crafts store had 5,000 visitors; 150 bought and sales totaled $67,500. Compute the conversion rate and the average ticket.",
        },
        steps: [
          { es: "Conversión: 150 ÷ 5,000 × 100 = 3%.", en: "Conversion: 150 ÷ 5,000 × 100 = 3%." },
          { es: "Ticket promedio: $67,500 ÷ 150 = $450.", en: "Average ticket: $67,500 ÷ 150 = $450." },
          { es: "Interpretación: 3 de cada 100 visitantes compran y cada compra es de $450 en promedio.", en: "Interpretation: 3 out of every 100 visitors buy and each purchase averages $450." },
        ],
        result: {
          es: "Conversión de 3% y ticket de $450. Para vender más puede atacar dos palancas distintas: que compren más visitantes o que cada compra sea mayor.",
          en: "Conversion of 3% and a $450 ticket. To sell more it can pull two different levers: get more visitors to buy or make each purchase larger.",
        },
      },
      {
        title: { es: "Leer el semáforo de entregas", en: "Reading the delivery traffic light" },
        problem: {
          es: "Una distribuidora de agua purificada tiene como meta entregar a tiempo 95% de sus pedidos. Esta semana hizo 250 entregas, de las cuales 230 llegaron a tiempo. ¿Qué color marca su semáforo si amarillo es de 90% a menos de 95%?",
          en: "A purified water distributor's target is to deliver 95% of its orders on time. This week it made 250 deliveries, of which 230 arrived on time. What color does its traffic light show if yellow is from 90% to under 95%?",
        },
        steps: [
          { es: "Entregas a tiempo: 230 ÷ 250 × 100 = 92%.", en: "On-time deliveries: 230 ÷ 250 × 100 = 92%." },
          { es: "Comparamos: 92% es menor que la meta de 95%, pero mayor o igual que 90%.", en: "Compare: 92% is below the 95% target but at or above 90%." },
          { es: "Acción: el responsable de logística revisa rutas y horarios de los 20 pedidos tardíos.", en: "Action: the logistics owner reviews the routes and schedules of the 20 late orders." },
        ],
        result: {
          es: "El KPI está en amarillo (92%). No es una crisis, pero hay que actuar antes de que caiga a rojo.",
          en: "The KPI is yellow (92%). It is not a crisis, but action is needed before it falls to red.",
        },
      },
    ],
    keyPoints: [
      { es: "Un KPI es una métrica ligada a un objetivo importante y con meta.", en: "A KPI is a metric tied to an important objective and with a target." },
      { es: "Su ficha incluye fórmula, meta, frecuencia y responsable.", en: "Its data sheet includes formula, target, frequency and owner." },
      { es: "Los adelantados anticipan resultados; los rezagados los confirman.", en: "Leading indicators anticipate results; lagging indicators confirm them." },
      { es: "KPI comunes: ticket promedio, conversión, entregas a tiempo y margen bruto.", en: "Common KPIs: average ticket, conversion, on-time deliveries and gross margin." },
      { es: "Pocos KPI bien elegidos valen más que un tablero lleno de números.", en: "A few well-chosen KPIs are worth more than a dashboard full of numbers." },
    ],
    exerciseIds: ['EMP-14-E1', 'EMP-14-E2', 'EMP-14-E3', 'EMP-14-E4', 'EMP-14-E5', 'EMP-14-E6'],
  },

  // ───────────────────────────── EMP-15 ─────────────────────────────
  {
    id: 'EMP-15',
    level: 1,
    topicIds: ['EMP.15'],
    title: { es: "Innovación y transformación empresarial", en: "Innovation and business transformation" },
    summary: {
      es: "Innovar es poner en práctica algo nuevo que crea valor, y transformar es cambiar a fondo cómo opera la empresa, probando en pequeño antes de apostar en grande.",
      en: "Innovating is putting into practice something new that creates value, and transforming is deeply changing how the company operates, testing small before betting big.",
    },
    minutes: 16,
    objectives: [
      { es: "Reconocer los tipos de innovación (producto, proceso, modelo de negocio, comercialización y organización) y su grado (incremental o disruptiva).", en: "Recognize the types of innovation (product, process, business model, marketing and organizational) and their degree (incremental or disruptive)." },
      { es: "Aplicar el ciclo de probar en pequeño: idea, prototipo, medición y aprendizaje.", en: "Apply the test-small cycle: idea, prototype, measurement and learning." },
      { es: "Explicar qué es la transformación empresarial y calcular el retorno de una mejora.", en: "Explain what business transformation is and compute the return on an improvement." },
    ],
    theory: [
      {
        heading: { es: "¿Qué es innovar y qué tipos hay?", en: "What is innovating and what types are there?" },
        body: [
          {
            es: "**Innovar** no es solo inventar. Es **poner en práctica** algo nuevo o mejorado que **crea valor** para clientes o para el negocio. Una idea que se queda en un cuaderno no es innovación; una idea que tus clientes usan y pagan, sí.",
            en: "**Innovating** is not just inventing. It is **putting into practice** something new or improved that **creates value** for customers or the business. An idea that stays in a notebook is not innovation; an idea your customers use and pay for is.",
          },
          {
            es: "Por su **grado**, la innovación puede ser **incremental** (mejoras pequeñas y continuas, como un nuevo sabor de paleta) o **disruptiva** (cambia las reglas del mercado, como cuando las apps de transporte cambiaron la forma de pedir un taxi). La mayoría de las pymes vive de innovaciones incrementales bien hechas.",
            en: "By **degree**, innovation can be **incremental** (small, continuous improvements, like a new ice-pop flavor) or **disruptive** (it changes the market's rules, as when ride-hailing apps changed how people get a taxi). Most small businesses thrive on well-executed incremental innovations.",
          },
          {
            es: "Mini ejemplo: una tortillería que empieza a recibir pedidos por mensaje y los entrega en bicicleta no cambió su producto, pero sí su forma de vender: es innovación en **comercialización**.",
            en: "Mini example: a tortilla shop that starts taking orders by message and delivering them by bicycle did not change its product, but it did change how it sells: that is **marketing** innovation.",
          },
        ],
        bullets: [
          { es: "Producto o servicio: algo nuevo o mejorado que el cliente recibe.", en: "Product or service: something new or improved the customer receives." },
          { es: "Proceso: una forma nueva de producir o entregar, más rápida o barata.", en: "Process: a new way to produce or deliver, faster or cheaper." },
          { es: "Modelo de negocio: cambiar cómo se gana dinero (por ejemplo, de venta a suscripción).", en: "Business model: changing how money is made (for example, from sales to subscription)." },
          { es: "Comercialización: nuevos canales, empaques o formas de promover.", en: "Marketing: new channels, packaging or ways to promote." },
          { es: "Organizacional: nuevas formas de organizar el trabajo o al equipo.", en: "Organizational: new ways to organize work or the team." },
        ],
      },
      {
        heading: { es: "Innovar con método: probar en pequeño", en: "Innovating with method: test small" },
        body: [
          {
            es: "Las ideas nuevas tienen mucha **incertidumbre**: no sabes si a la gente le gustarán. Por eso conviene seguir un ciclo corto: **construir** una versión sencilla, **medir** cómo responden los clientes y **aprender** para decidir si sigues, ajustas o abandonas.",
            en: "New ideas carry a lot of **uncertainty**: you do not know whether people will like them. That is why a short cycle helps: **build** a simple version, **measure** how customers respond and **learn** to decide whether to continue, adjust or drop it.",
          },
          {
            es: "Esa versión sencilla se llama **prototipo** o **producto mínimo viable** (PMV): lo mínimo que permite probar la idea con clientes reales. Antes de definir el experimento, decide **qué número** te dirá que funcionó, por ejemplo: «al menos 30% de quienes prueben el nuevo servicio lo vuelven a pedir».",
            en: "That simple version is called a **prototype** or **minimum viable product** (MVP): the least you need to test the idea with real customers. Before running the experiment, decide **which number** will tell you it worked, for example: 'at least 30% of those who try the new service order it again'.",
          },
          {
            es: "Mini ejemplo: una cafetería quiere vender comidas. En vez de remodelar la cocina, ofrece un solo platillo durante dos semanas, cocinado con el equipo que ya tiene. Si se vende bien, invierte; si no, perdió poco.",
            en: "Mini example: a coffee shop wants to sell lunches. Instead of remodeling the kitchen, it offers a single dish for two weeks, cooked with the equipment it already has. If it sells well, it invests; if not, it lost little.",
          },
        ],
        formula: "Construir → Medir → Aprender (y repetir)",
      },
      {
        heading: { es: "Transformación empresarial y digital", en: "Business and digital transformation" },
        body: [
          {
            es: "La **transformación empresarial** es un cambio profundo en **cómo opera** la empresa: sus procesos, su tecnología, su cultura y a veces su modelo de negocio. La **transformación digital** es cuando ese cambio se apoya en tecnología: ventas en línea, inventarios en la nube, pagos digitales, datos para decidir.",
            en: "**Business transformation** is a deep change in **how the company operates**: its processes, technology, culture and sometimes its business model. **Digital transformation** is when that change relies on technology: online sales, cloud inventories, digital payments, data for decisions.",
          },
          {
            es: "Comprar un programa no es transformarse. Si el equipo no cambia su forma de trabajar, el sistema nuevo termina sin usarse. Por eso importan el **diagnóstico** (qué problema resolver primero), un **piloto** pequeño, la **capacitación** y manejar la **resistencia al cambio** explicando el porqué.",
            en: "Buying software is not transforming. If the team does not change how it works, the new system ends up unused. That is why **diagnosis** (which problem to solve first), a small **pilot**, **training** and managing **resistance to change** by explaining the why all matter.",
          },
          {
            es: "Para decidir si una mejora vale la pena, se compara lo que **cuesta** con lo que **ahorra o genera**. Mini ejemplo: una ferretería invierte $20,000 en un sistema de inventario que le ahorra $35,000 al año en mercancía perdida: retorno = (35,000 − 20,000) ÷ 20,000 × 100 = 75% en el primer año.",
            en: "To decide whether an improvement is worth it, compare what it **costs** with what it **saves or generates**. Mini example: a hardware store invests $20,000 in an inventory system that saves $35,000 a year in lost merchandise: return = (35,000 − 20,000) ÷ 20,000 × 100 = 75% in the first year.",
          },
        ],
        formulas: [
          {
            name: { es: "Retorno de una mejora o inversión", en: "Return on an improvement or investment" },
            expression: "Retorno % = (Beneficio − Costo) ÷ Costo × 100",
            variables: [
              { symbol: "Retorno %", meaning: { es: "Cuánto ganas, en porcentaje, por cada peso invertido en la mejora.", en: "How much you earn, as a percentage, for each peso invested in the improvement." } },
              { symbol: "Beneficio", meaning: { es: "Lo que la mejora ahorra o genera en el periodo que analizas (por ejemplo, un año), en pesos.", en: "What the improvement saves or generates in the period you analyze (for example, a year), in pesos." } },
              { symbol: "Costo", meaning: { es: "Lo que pagaste por la mejora, en pesos.", en: "What you paid for the improvement, in pesos." } },
            ],
            steps: [
              { es: "Lleva el beneficio al periodo que te piden: si es mensual y te piden un año, multiplícalo por 12.", en: "Bring the benefit to the requested period: if it is monthly and you are asked for a year, multiply it by 12." },
              { es: "Resta el costo al beneficio: es la ganancia neta.", en: "Subtract the cost from the benefit: that is the net gain." },
              { es: "Divide la ganancia neta entre el costo y multiplica por 100.", en: "Divide the net gain by the cost and multiply by 100." },
            ],
            example: {
              es: "Una cocina económica invierte $30,000 en un refrigerador nuevo que le ahorra $4,000 al mes en comida echada a perder. Paso 1: $4,000 × 12 = $48,000 al año. Paso 2: $48,000 − $30,000 = $18,000. Paso 3: $18,000 ÷ $30,000 = 0.60; 0.60 × 100 = **60%** en el primer año.",
              en: "A small diner invests $30,000 in a new fridge that saves it $4,000 a month in spoiled food. Step 1: $4,000 × 12 = $48,000 a year. Step 2: $48,000 − $30,000 = $18,000. Step 3: $18,000 ÷ $30,000 = 0.60; 0.60 × 100 = **60%** in the first year.",
            },
            interpret: {
              es: "Positivo: la mejora ya se pagó y dejó ganancia en ese periodo. Negativo: todavía no se recupera (quizá sí más adelante).",
              en: "Positive: the improvement has paid for itself and earned a profit in that period. Negative: it has not paid back yet (it may later).",
            },
            mistake: {
              es: "Usar el beneficio de un solo mes cuando te piden el año, o dividir beneficio ÷ costo sin restar antes el costo.",
              en: "Using a single month's benefit when asked for the year, or dividing benefit ÷ cost without first subtracting the cost.",
            },
          },
        ],
        bullets: [
          { es: "Diagnóstico: elegir el problema más costoso.", en: "Diagnosis: choose the most costly problem." },
          { es: "Piloto: probar en un área o sucursal.", en: "Pilot: test in one area or branch." },
          { es: "Medir: comparar KPI antes y después.", en: "Measure: compare KPIs before and after." },
          { es: "Escalar: extender a toda la empresa lo que funcionó.", en: "Scale: extend what worked to the whole company." },
        ],
      },
    ],
    examples: [
      {
        title: { es: "Tipos de innovación en una panadería", en: "Types of innovation in a bakery" },
        problem: {
          es: "Una panadería hace tres cambios: (1) lanza pan integral con amaranto; (2) compra una amasadora que reduce a la mitad el tiempo de preparación; (3) ofrece una suscripción semanal de pan a domicilio por una cuota fija. Clasifica cada cambio.",
          en: "A bakery makes three changes: (1) it launches whole-wheat bread with amaranth; (2) it buys a dough mixer that halves preparation time; (3) it offers a weekly home-delivery bread subscription for a fixed fee. Classify each change.",
        },
        steps: [
          { es: "(1) El cliente recibe algo nuevo: innovación de producto, incremental.", en: "(1) The customer receives something new: product innovation, incremental." },
          { es: "(2) Cambia la forma de producir: innovación de proceso.", en: "(2) The way of producing changes: process innovation." },
          { es: "(3) Cambia cómo cobra (cuota fija recurrente en vez de venta suelta): innovación de modelo de negocio.", en: "(3) It changes how it charges (a recurring fixed fee instead of one-off sales): business model innovation." },
        ],
        result: {
          es: "Producto, proceso y modelo de negocio. Una misma empresa puede innovar en varios frentes al mismo tiempo.",
          en: "Product, process and business model. A single company can innovate on several fronts at once.",
        },
      },
      {
        title: { es: "¿Conviene extender el piloto de pedidos en línea?", en: "Should the online-ordering pilot be extended?" },
        problem: {
          es: "Una cadena de 4 lavanderías probó en una sucursal un sistema de pedidos en línea. Costó $15,000 y en 6 meses generó $12,000 de utilidad adicional. Calcula el retorno del piloto en ese periodo y comenta si conviene extenderlo.",
          en: "A chain of 4 laundromats piloted an online ordering system in one branch. It cost $15,000 and in 6 months generated $12,000 of extra profit. Compute the pilot's return for that period and comment on whether it should be extended.",
        },
        steps: [
          { es: "Retorno a 6 meses: (12,000 − 15,000) ÷ 15,000 × 100 = −20%.", en: "Return over 6 months: (12,000 − 15,000) ÷ 15,000 × 100 = −20%." },
          { es: "Aún no se recupera, pero genera $2,000 de utilidad adicional al mes: en 7.5 meses recupera el costo.", en: "It has not paid back yet, but it generates $2,000 of extra profit per month: it recovers the cost in 7.5 months." },
          { es: "Si las otras sucursales tienen clientes parecidos, el resultado se puede replicar con un costo menor, porque el sistema ya existe.", en: "If the other branches have similar customers, the result can be replicated at a lower cost, because the system already exists." },
        ],
        result: {
          es: "El retorno a 6 meses es −20%, pero el piloto se paga solo en 7.5 meses y luego deja ganancia. Tiene sentido extenderlo, midiendo cada sucursal.",
          en: "The 6-month return is −20%, but the pilot pays for itself in 7.5 months and then earns a profit. Extending it makes sense, measuring each branch.",
        },
      },
    ],
    keyPoints: [
      { es: "Innovar es poner en práctica algo nuevo que crea valor, no solo tener ideas.", en: "Innovating is putting into practice something new that creates value, not just having ideas." },
      { es: "Tipos: producto, proceso, modelo de negocio, comercialización y organizacional.", en: "Types: product, process, business model, marketing and organizational." },
      { es: "Incremental mejora lo que existe; disruptiva cambia las reglas del mercado.", en: "Incremental improves what exists; disruptive changes the market's rules." },
      { es: "Prueba en pequeño con un PMV y decide antes qué número significa éxito.", en: "Test small with an MVP and decide beforehand which number means success." },
      { es: "Transformar es cambiar procesos, tecnología y cultura; un piloto medido reduce el riesgo.", en: "Transforming means changing processes, technology and culture; a measured pilot lowers the risk." },
    ],
    exerciseIds: ['EMP-15-E1', 'EMP-15-E2', 'EMP-15-E3', 'EMP-15-E4', 'EMP-15-E5', 'EMP-15-E6'],
  },

  // ───────────────────────────── EMP-16 ─────────────────────────────
  {
    id: 'EMP-16',
    level: 1,
    topicIds: ['EMP.16'],
    title: { es: "Estrategias de crecimiento", en: "Growth strategies" },
    summary: {
      es: "Un negocio puede crecer con sus propios recursos o uniéndose a otros, y la matriz de Ansoff ayuda a elegir el camino según el riesgo que puede asumir.",
      en: "A business can grow with its own resources or by joining others, and the Ansoff matrix helps choose the path according to the risk it can take on.",
    },
    minutes: 16,
    objectives: [
      { es: "Distinguir el crecimiento orgánico del inorgánico y dar ejemplos de cada uno.", en: "Distinguish organic from inorganic growth and give examples of each." },
      { es: "Usar la matriz de Ansoff para clasificar opciones de crecimiento según su riesgo.", en: "Use the Ansoff matrix to classify growth options according to their risk." },
      { es: "Calcular la tasa de crecimiento y reconocer los riesgos de crecer demasiado rápido.", en: "Compute the growth rate and recognize the risks of growing too fast." },
    ],
    theory: [
      {
        heading: { es: "Crecer por dentro o crecer con otros", en: "Growing from within or growing with others" },
        body: [
          {
            es: "**Crecer** es aumentar el tamaño del negocio: más ventas, más clientes, más sucursales. Hay dos grandes caminos. El **crecimiento orgánico** usa los recursos propios: vender más, abrir otra sucursal, lanzar productos. Es más lento, pero mantienes el control.",
            en: "**Growing** means increasing the size of the business: more sales, more customers, more branches. There are two broad paths. **Organic growth** uses your own resources: selling more, opening another branch, launching products. It is slower, but you keep control.",
          },
          {
            es: "El **crecimiento inorgánico** se apoya en otras empresas: **comprar** un negocio (adquisición), **fusionarse**, hacer **alianzas** o vender **franquicias** (otros abren tu concepto pagándote por usar tu marca y tu forma de operar). Es más rápido, pero requiere más dinero o compartir el control y las ganancias.",
            en: "**Inorganic growth** relies on other companies: **buying** a business (acquisition), **merging**, forming **alliances** or selling **franchises** (others open your concept and pay you to use your brand and way of operating). It is faster, but it requires more money or sharing control and profits.",
          },
          {
            es: "Mini ejemplo: una marca de helados artesanales abre su segunda tienda con sus utilidades (orgánico). Al año siguiente se alía con una cadena de cines para vender ahí sus helados (inorgánico, por alianza).",
            en: "Mini example: an artisanal ice-cream brand opens its second shop with its profits (organic). The next year it partners with a cinema chain to sell its ice cream there (inorganic, through an alliance).",
          },
        ],
      },
      {
        heading: { es: "La matriz de Ansoff: cuatro caminos", en: "The Ansoff matrix: four paths" },
        body: [
          {
            es: "La **matriz de Ansoff** cruza dos preguntas: ¿vendes productos **actuales o nuevos**? ¿a mercados **actuales o nuevos**? Un **mercado** aquí es un grupo de clientes: una ciudad, un tipo de cliente, un canal. Salen cuatro estrategias, cada una con más riesgo que la anterior.",
            en: "The **Ansoff matrix** crosses two questions: do you sell **existing or new** products? to **existing or new** markets? A **market** here is a group of customers: a city, a customer type, a channel. Four strategies result, each riskier than the previous one.",
          },
          {
            es: "Entre más cosas nuevas combinas, **menos conoces** y más puede fallar. Por eso muchas empresas empiezan por la penetración y avanzan hacia la diversificación solo cuando tienen experiencia y recursos.",
            en: "The more new things you combine, the **less you know** and the more can go wrong. That is why many companies start with penetration and move toward diversification only when they have experience and resources.",
          },
          {
            es: "Mini ejemplo: una taquería en Puebla. Penetración: promoción de martes para que sus clientes vengan más. Desarrollo de mercado: abrir en Tlaxcala. Desarrollo de producto: vender salsas embotelladas a sus clientes. Diversificación: abrir un servicio de banquetes para bodas en otra ciudad.",
            en: "Mini example: a taco shop in Puebla. Penetration: a Tuesday promotion so its customers come more often. Market development: opening in Tlaxcala. Product development: selling bottled salsas to its customers. Diversification: launching a wedding catering service in another city.",
          },
        ],
        bullets: [
          { es: "Penetración de mercado: producto actual, mercado actual (menor riesgo).", en: "Market penetration: existing product, existing market (lowest risk)." },
          { es: "Desarrollo de mercado: producto actual, mercado nuevo.", en: "Market development: existing product, new market." },
          { es: "Desarrollo de producto: producto nuevo, mercado actual.", en: "Product development: new product, existing market." },
          { es: "Diversificación: producto nuevo, mercado nuevo (mayor riesgo).", en: "Diversification: new product, new market (highest risk)." },
        ],
      },
      {
        heading: { es: "Medir el crecimiento y crecer con cuidado", en: "Measuring growth and growing carefully" },
        body: [
          {
            es: "La **tasa de crecimiento** dice cuánto aumentaron las ventas respecto al periodo anterior, en porcentaje. Sirve para comparar años y para ver si una estrategia está dando resultado.",
            en: "The **growth rate** tells how much sales increased compared with the previous period, as a percentage. It is used to compare years and to see whether a strategy is working.",
          },
          {
            es: "Crecer **consume efectivo**: antes de cobrar más ventas, compras más inventario, contratas gente y quizá das crédito a más clientes. Muchas empresas que venden bien quiebran por **quedarse sin caja** a mitad del crecimiento. También se puede perder calidad si el equipo no da abasto.",
            en: "Growing **consumes cash**: before collecting on more sales, you buy more inventory, hire people and perhaps extend credit to more customers. Many companies that sell well go bust by **running out of cash** mid-growth. Quality can also suffer if the team cannot keep up.",
          },
          {
            es: "Mini ejemplo: una tienda pasa de vender $400,000 a $520,000 en un año: crece (520,000 − 400,000) ÷ 400,000 × 100 = 30%. Si para lograrlo tuvo que duplicar su inventario a crédito, debe vigilar que el efectivo alcance para pagar a tiempo.",
            en: "Mini example: a store goes from selling $400,000 to $520,000 in a year: it grows (520,000 − 400,000) ÷ 400,000 × 100 = 30%. If, to achieve it, it had to double its inventory on credit, it must make sure there is enough cash to pay on time.",
          },
        ],
        formulas: [
          {
            name: { es: "Tasa de crecimiento de las ventas", en: "Sales growth rate" },
            expression: "Aumento = Ventas actuales − Ventas anteriores  ·  Tasa de crecimiento % = Aumento ÷ Ventas anteriores × 100",
            variables: [
              { symbol: "Aumento", meaning: { es: "Cuántos pesos más se vendieron que en el periodo anterior.", en: "How many more pesos were sold than in the previous period." } },
              { symbol: "Ventas actuales", meaning: { es: "Ventas del periodo que estás midiendo, en pesos.", en: "Sales in the period you are measuring, in pesos." } },
              { symbol: "Ventas anteriores", meaning: { es: "Ventas del periodo inmediato anterior, en pesos.", en: "Sales in the immediately preceding period, in pesos." } },
              { symbol: "Tasa de crecimiento %", meaning: { es: "Cuánto crecieron las ventas, en porcentaje.", en: "How much sales grew, as a percentage." } },
            ],
            steps: [
              { es: "Resta las ventas anteriores a las actuales: es el aumento en pesos.", en: "Subtract the previous sales from the current ones: that is the increase in pesos." },
              { es: "Divide el aumento entre las ventas **anteriores**.", en: "Divide the increase by the **previous** sales." },
              { es: "Multiplica por 100. Si analizas varios años, cada año se compara con el inmediato anterior.", en: "Multiply by 100. If you analyze several years, each year is compared with the one right before it." },
            ],
            example: {
              es: "Una mueblería vendió $300,000 el año pasado y $354,000 este año. Paso 1: $354,000 − $300,000 = $54,000. Paso 2: $54,000 ÷ $300,000 = 0.18. Paso 3: **18%**.",
              en: "A furniture store sold $300,000 last year and $354,000 this year. Step 1: $354,000 − $300,000 = $54,000. Step 2: $54,000 ÷ $300,000 = 0.18. Step 3: **18%**.",
            },
            interpret: {
              es: "Positivo: las ventas crecieron; negativo: bajaron. Si la tasa sube año con año, el crecimiento se acelera.",
              en: "Positive: sales grew; negative: they fell. If the rate rises year after year, growth is accelerating.",
            },
            mistake: {
              es: "Dividir entre las ventas actuales, o comparar el año 3 contra el año 1 en vez de contra el año 2.",
              en: "Dividing by current sales, or comparing year 3 against year 1 instead of year 2.",
            },
          },
        ],
      },
    ],
    examples: [
      {
        title: { es: "Ubicar las opciones de una cafetería en la matriz de Ansoff", en: "Placing a coffee shop's options on the Ansoff matrix" },
        problem: {
          es: "Una cafetería de Mérida evalúa: (a) tarjeta de lealtad para que sus clientes vuelvan más; (b) vender su café en grano en supermercados de Monterrey; (c) agregar postres para sus clientes de siempre. ¿Qué estrategia es cada una y cuál es la de menor riesgo?",
          en: "A coffee shop in Mérida is considering: (a) a loyalty card so its customers come back more; (b) selling its coffee beans in supermarkets in Monterrey; (c) adding desserts for its regular customers. Which strategy is each one, and which carries the lowest risk?",
        },
        steps: [
          { es: "(a) Mismo producto, mismos clientes: penetración de mercado.", en: "(a) Same product, same customers: market penetration." },
          { es: "(b) Producto que ya tiene (su café) en una ciudad y canal nuevos: desarrollo de mercado.", en: "(b) A product it already has (its coffee) in a new city and channel: market development." },
          { es: "(c) Producto nuevo para los clientes actuales: desarrollo de producto.", en: "(c) A new product for existing customers: product development." },
        ],
        result: {
          es: "La tarjeta de lealtad (penetración) es la de menor riesgo, porque no requiere conocer clientes ni productos nuevos.",
          en: "The loyalty card (penetration) carries the lowest risk, because it does not require knowing new customers or products.",
        },
      },
      {
        title: { es: "Tasa de crecimiento de dos años", en: "Growth rate over two years" },
        problem: {
          es: "Un taller de costura vendió $500,000 en el año 1, $575,000 en el año 2 y $690,000 en el año 3. Calcula la tasa de crecimiento de cada año.",
          en: "A sewing workshop sold $500,000 in year 1, $575,000 in year 2 and $690,000 in year 3. Compute the growth rate for each year.",
        },
        steps: [
          { es: "Año 2: (575,000 − 500,000) ÷ 500,000 × 100 = 15%.", en: "Year 2: (575,000 − 500,000) ÷ 500,000 × 100 = 15%." },
          { es: "Año 3: (690,000 − 575,000) ÷ 575,000 × 100 = 20%.", en: "Year 3: (690,000 − 575,000) ÷ 575,000 × 100 = 20%." },
          { es: "Ojo: cada tasa se calcula sobre el año inmediato anterior, no sobre el año 1.", en: "Note: each rate is computed on the immediately preceding year, not on year 1." },
        ],
        result: {
          es: "Creció 15% en el año 2 y 20% en el año 3: el crecimiento se está acelerando.",
          en: "It grew 15% in year 2 and 20% in year 3: growth is accelerating.",
        },
      },
    ],
    keyPoints: [
      { es: "Orgánico: crecer con recursos propios; inorgánico: con adquisiciones, alianzas o franquicias.", en: "Organic: growing with your own resources; inorganic: through acquisitions, alliances or franchises." },
      { es: "Ansoff cruza producto (actual/nuevo) y mercado (actual/nuevo).", en: "Ansoff crosses product (existing/new) and market (existing/new)." },
      { es: "Penetración es la de menor riesgo; diversificación, la de mayor.", en: "Penetration has the lowest risk; diversification, the highest." },
      { es: "Tasa de crecimiento = (actual − anterior) ÷ anterior × 100.", en: "Growth rate = (current − previous) ÷ previous × 100." },
      { es: "Crecer consume efectivo: planea la caja antes de acelerar.", en: "Growth consumes cash: plan cash before accelerating." },
    ],
    normativeNote: NOTE_GROWTH,
    exerciseIds: ['EMP-16-E1', 'EMP-16-E2', 'EMP-16-E3', 'EMP-16-E4', 'EMP-16-E5', 'EMP-16-E6'],
  },

  // ───────────────────────────── EMP-17 ─────────────────────────────
  {
    id: 'EMP-17',
    level: 1,
    topicIds: ['EMP.17'],
    title: { es: "Escalabilidad de negocios", en: "Business scalability" },
    summary: {
      es: "Un negocio es escalable cuando puede multiplicar sus ingresos sin que sus costos crezcan al mismo ritmo, y eso se prepara con procesos, tecnología y números sanos por cliente.",
      en: "A business is scalable when it can multiply its revenue without its costs growing at the same pace, and that is prepared with processes, technology and healthy per-customer numbers.",
    },
    minutes: 18,
    objectives: [
      { es: "Explicar la diferencia entre crecer y escalar usando costos fijos y variables.", en: "Explain the difference between growing and scaling using fixed and variable costs." },
      { es: "Identificar las características que hacen escalable a un negocio.", en: "Identify the features that make a business scalable." },
      { es: "Calcular el valor de vida del cliente (LTV), el costo de adquisición (CAC) y su relación para decidir si escalar.", en: "Compute customer lifetime value (LTV), acquisition cost (CAC) and their ratio to decide whether to scale." },
    ],
    theory: [
      {
        heading: { es: "Crecer no es lo mismo que escalar", en: "Growing is not the same as scaling" },
        body: [
          {
            es: "**Crecer** es vender más. **Escalar** es vender mucho más **sin que los costos crezcan al mismo ritmo**. Si para duplicar ventas tienes que duplicar personal, local y gastos, creciste pero no escalaste: tu ganancia por cliente sigue igual.",
            en: "**Growing** is selling more. **Scaling** is selling much more **without costs growing at the same pace**. If to double sales you have to double staff, premises and expenses, you grew but did not scale: your profit per customer stays the same.",
          },
          {
            es: "La clave está en el tipo de costos. Los **costos fijos** no cambian con cada venta (una plataforma, un sueldo de diseño). El **costo marginal** es lo que cuesta atender **un cliente más**. Un negocio escalable tiene costos fijos que se reparten entre muchos clientes y un costo marginal **bajo**.",
            en: "The key lies in the type of costs. **Fixed costs** do not change with each sale (a platform, a design salary). The **marginal cost** is what it costs to serve **one more customer**. A scalable business has fixed costs spread over many customers and a **low** marginal cost.",
          },
          {
            es: "Mini ejemplo: una maestra de inglés da clases particulares: cada alumno nuevo requiere una hora más de su tiempo. Si graba un curso en línea, el curso cuesta lo mismo con 10 o con 1,000 alumnos; cada alumno extra casi no le cuesta nada. El curso es más escalable.",
            en: "Mini example: an English teacher gives private lessons: each new student requires another hour of her time. If she records an online course, the course costs the same with 10 or 1,000 students; each extra student costs her almost nothing. The course is more scalable.",
          },
        ],
        formulas: [
          {
            name: { es: "Utilidad según el número de clientes", en: "Profit by number of customers" },
            expression: "Utilidad = Clientes × (Precio − Costo variable por cliente) − Costos fijos",
            variables: [
              { symbol: "Utilidad", meaning: { es: "Lo que gana el negocio en el mes, en pesos (negativa = pérdida).", en: "What the business earns in the month, in pesos (negative = loss)." } },
              { symbol: "Clientes", meaning: { es: "Cuántos clientes o usuarios pagan ese mes.", en: "How many customers or users pay that month." } },
              { symbol: "Precio", meaning: { es: "Lo que paga cada cliente al mes, en pesos.", en: "What each customer pays per month, in pesos." } },
              { symbol: "Costo variable por cliente", meaning: { es: "Lo que cuesta atender a un cliente más (el costo marginal), en pesos.", en: "What it costs to serve one more customer (the marginal cost), in pesos." } },
              { symbol: "Costos fijos", meaning: { es: "Lo que pagas al mes sin importar cuántos clientes tengas, en pesos.", en: "What you pay per month no matter how many customers you have, in pesos." } },
            ],
            steps: [
              { es: "Resta el costo variable al precio: es lo que deja cada cliente.", en: "Subtract the variable cost from the price: that is what each customer leaves." },
              { es: "Multiplícalo por el número de clientes.", en: "Multiply it by the number of customers." },
              { es: "Resta los costos fijos.", en: "Subtract the fixed costs." },
            ],
            example: {
              es: "Una app de recetas cobra $200 al mes, cada usuario cuesta $40 y los fijos son $60,000. Paso 1: $200 − $40 = $160. Con 300 usuarios: 300 × $160 = $48,000; $48,000 − $60,000 = **−$12,000** (pérdida). Con 1,500: 1,500 × $160 = $240,000; $240,000 − $60,000 = **$180,000**.",
              en: "A recipe app charges $200 a month, each user costs $40 and fixed costs are $60,000. Step 1: $200 − $40 = $160. With 300 users: 300 × $160 = $48,000; $48,000 − $60,000 = **−$12,000** (loss). With 1,500: 1,500 × $160 = $240,000; $240,000 − $60,000 = **$180,000**.",
            },
            interpret: {
              es: "Si la utilidad crece mucho más rápido que el número de clientes, el negocio es escalable.",
              en: "If profit grows much faster than the number of customers, the business is scalable.",
            },
            mistake: {
              es: "Olvidar restar los costos fijos; con pocos clientes pueden convertir la ganancia en pérdida.",
              en: "Forgetting to subtract fixed costs; with few customers they can turn a profit into a loss.",
            },
          },
          {
            name: { es: "Costo total promedio por cliente", en: "Average total cost per customer" },
            expression: "Costo promedio por cliente = (Costos fijos + Clientes × Costo variable por cliente) ÷ Clientes",
            variables: [
              { symbol: "Costo promedio por cliente", meaning: { es: "Cuánto te cuesta en total, en promedio, cada cliente, en pesos.", en: "How much each customer costs you in total, on average, in pesos." } },
              { symbol: "Costos fijos", meaning: { es: "Gastos del mes que no cambian con los clientes, en pesos.", en: "Monthly expenses that do not change with customers, in pesos." } },
              { symbol: "Clientes", meaning: { es: "Número de clientes del mes.", en: "Number of customers in the month." } },
              { symbol: "Costo variable por cliente", meaning: { es: "Lo que cuesta atender a cada cliente, en pesos.", en: "What it costs to serve each customer, in pesos." } },
            ],
            steps: [
              { es: "Multiplica los clientes por el costo variable: es el costo variable total.", en: "Multiply customers by the variable cost: that is the total variable cost." },
              { es: "Súmale los costos fijos: es el costo total.", en: "Add the fixed costs: that is the total cost." },
              { es: "Divide el costo total entre el número de clientes.", en: "Divide the total cost by the number of customers." },
            ],
            example: {
              es: "La misma app con 1,500 usuarios. Paso 1: 1,500 × $40 = $60,000. Paso 2: $60,000 + $60,000 = $120,000. Paso 3: $120,000 ÷ 1,500 = **$80** por usuario.",
              en: "The same app with 1,500 users. Step 1: 1,500 × $40 = $60,000. Step 2: $60,000 + $60,000 = $120,000. Step 3: $120,000 ÷ 1,500 = **$80** per user.",
            },
            interpret: {
              es: "Entre más clientes, más se reparten los fijos y más baja el costo promedio: eso es la escala.",
              en: "The more customers, the more fixed costs are spread out and the lower the average cost: that is scale.",
            },
          },
        ],
      },
      {
        heading: { es: "¿Qué hace escalable a un negocio?", en: "What makes a business scalable?" },
        body: [
          {
            es: "Escalar no depende solo de la tecnología. Depende de que el negocio funcione **sin que el dueño haga todo**. Si cada pedido pasa por tus manos, tú eres el **cuello de botella**: el punto que limita cuánto puede crecer todo lo demás.",
            en: "Scaling does not depend only on technology. It depends on the business working **without the owner doing everything**. If every order goes through your hands, you are the **bottleneck**: the point that limits how much everything else can grow.",
          },
          {
            es: "Antes de escalar conviene tener **procesos estandarizados** (documentados paso a paso, para que cualquiera los repita igual), **automatizar** tareas repetitivas y tener un modelo que ya se probó y deja ganancia por cliente. Escalar un negocio que pierde dinero en cada venta solo **multiplica las pérdidas**.",
            en: "Before scaling, it helps to have **standardized processes** (documented step by step so anyone can repeat them the same way), to **automate** repetitive tasks and to have a model that has been tested and earns a profit per customer. Scaling a business that loses money on each sale only **multiplies the losses**.",
          },
          {
            es: "Mini ejemplo: una pastelería con una receta que solo la dueña sabe hacer no puede abrir 10 sucursales. Si documenta recetas, tiempos y presentación, puede capacitar a otros y replicar la calidad.",
            en: "Mini example: a cake shop with a recipe only the owner knows how to make cannot open 10 branches. If she documents recipes, times and presentation, she can train others and replicate the quality.",
          },
        ],
        bullets: [
          { es: "Costo marginal bajo: atender a un cliente más cuesta poco.", en: "Low marginal cost: serving one more customer costs little." },
          { es: "Procesos documentados y repetibles.", en: "Documented, repeatable processes." },
          { es: "Tecnología y automatización en tareas repetitivas.", en: "Technology and automation for repetitive tasks." },
          { es: "Independencia del dueño en la operación diaria.", en: "Independence from the owner in daily operations." },
          { es: "Efecto de red: el servicio vale más mientras más usuarios tiene (por ejemplo, un mercado en línea).", en: "Network effect: the service is worth more the more users it has (for example, an online marketplace)." },
        ],
      },
      {
        heading: { es: "Los números de la escala: LTV y CAC", en: "The numbers of scale: LTV and CAC" },
        body: [
          {
            es: "El **CAC** (costo de adquisición de cliente) es cuánto gastas en publicidad y ventas para conseguir **un** cliente nuevo. El **LTV** (valor de vida del cliente) es cuánto margen te deja un cliente durante todo el tiempo que se queda contigo.",
            en: "**CAC** (customer acquisition cost) is how much you spend on advertising and sales to win **one** new customer. **LTV** (customer lifetime value) is how much margin a customer leaves you during the whole time they stay with you.",
          },
          {
            es: "Si el LTV es mayor que el CAC, cada cliente nuevo **deja ganancia** y tiene sentido invertir para conseguir más. Si es menor, cada cliente te **cuesta** dinero. Una **regla práctica** muy usada en negocios de suscripción es buscar un LTV de al menos unas 3 veces el CAC, pero es una guía, no una ley.",
            en: "If LTV is greater than CAC, each new customer **earns a profit** and it makes sense to invest to win more. If it is lower, each customer **costs** you money. A widely used **rule of thumb** in subscription businesses is to aim for an LTV of at least about 3 times CAC, but it is a guide, not a law.",
          },
          {
            es: "Mini ejemplo: un gimnasio cobra $500 al mes con 60% de margen; sus socios se quedan 10 meses en promedio. LTV = 500 × 60% × 10 = $3,000. Si conseguir a cada socio le cuesta $750 en anuncios, LTV ÷ CAC = 4 veces: puede invertir en crecer.",
            en: "Mini example: a gym charges $500 a month with a 60% margin; members stay 10 months on average. LTV = 500 × 60% × 10 = $3,000. If winning each member costs $750 in ads, LTV ÷ CAC = 4 times: it can invest in growth.",
          },
        ],
        formulas: [
          {
            name: { es: "Valor de vida del cliente (LTV)", en: "Customer lifetime value (LTV)" },
            expression: "LTV = Ingreso mensual por cliente × Margen % × Meses de permanencia",
            variables: [
              { symbol: "LTV", meaning: { es: "El margen total que te deja un cliente mientras se queda contigo, en pesos.", en: "The total margin a customer leaves you while they stay with you, in pesos." } },
              { symbol: "Ingreso mensual por cliente", meaning: { es: "Lo que paga cada cliente al mes, en pesos.", en: "What each customer pays per month, in pesos." } },
              { symbol: "Margen %", meaning: { es: "Qué parte de ese pago te queda después de los costos, en porcentaje.", en: "What part of that payment you keep after costs, as a percentage." } },
              { symbol: "Meses de permanencia", meaning: { es: "Cuántos meses se queda un cliente en promedio.", en: "How many months a customer stays on average." } },
            ],
            steps: [
              { es: "Convierte el margen a decimal y multiplícalo por el ingreso mensual: es lo que te deja el cliente cada mes.", en: "Convert the margin to a decimal and multiply it by the monthly revenue: that is what the customer leaves you each month." },
              { es: "Multiplica ese resultado por los meses de permanencia.", en: "Multiply that result by the months the customer stays." },
            ],
            example: {
              es: "Un servicio de lavado de autos por suscripción cobra $250 al mes con 40% de margen; los clientes se quedan 12 meses. Paso 1: $250 × 0.40 = $100 al mes. Paso 2: $100 × 12 = **$1,200**.",
              en: "A car-wash subscription charges $250 a month with a 40% margin; customers stay 12 months. Step 1: $250 × 0.40 = $100 a month. Step 2: $100 × 12 = **$1,200**.",
            },
            mistake: {
              es: "Olvidar el margen y usar lo que paga el cliente; el LTV mide lo que te deja, no lo que te paga.",
              en: "Forgetting the margin and using what the customer pays; LTV measures what they leave you, not what they pay.",
            },
          },
          {
            name: { es: "Costo de adquisición de cliente (CAC) y relación LTV ÷ CAC", en: "Customer acquisition cost (CAC) and the LTV ÷ CAC ratio" },
            expression: "CAC = Gasto en adquisición ÷ Clientes nuevos  ·  Relación = LTV ÷ CAC",
            variables: [
              { symbol: "CAC", meaning: { es: "Cuánto te cuesta conseguir un cliente nuevo, en pesos.", en: "How much it costs you to win one new customer, in pesos." } },
              { symbol: "Gasto en adquisición", meaning: { es: "Lo gastado en publicidad y ventas en el periodo, en pesos.", en: "What was spent on advertising and sales in the period, in pesos." } },
              { symbol: "Clientes nuevos", meaning: { es: "Clientes que llegaron en ese mismo periodo.", en: "Customers who arrived in that same period." } },
              { symbol: "Relación", meaning: { es: "Cuántas veces cubre el LTV lo que costó conseguir al cliente.", en: "How many times LTV covers what it cost to win the customer." } },
            ],
            steps: [
              { es: "Divide el gasto en adquisición entre los clientes nuevos: es el CAC.", en: "Divide acquisition spend by new customers: that is CAC." },
              { es: "Divide el LTV entre el CAC: es la relación, en \"veces\".", en: "Divide LTV by CAC: that is the ratio, in \"times\"." },
            ],
            example: {
              es: "El lavado de autos gastó $45,000 en anuncios y llegaron 90 clientes. Paso 1: $45,000 ÷ 90 = **$500** de CAC. Paso 2: $1,200 ÷ $500 = **2.4 veces**.",
              en: "The car wash spent $45,000 on ads and 90 customers arrived. Step 1: $45,000 ÷ 90 = **$500** CAC. Step 2: $1,200 ÷ $500 = **2.4 times**.",
            },
            interpret: {
              es: "Mayor que 1: cada cliente deja más de lo que costó. Menor que 1: cada cliente te cuesta dinero. Como guía práctica (no ley), muchos negocios de suscripción buscan unas 3 veces o más.",
              en: "Above 1: each customer brings in more than they cost. Below 1: each customer costs you money. As a rule of thumb (not a law), many subscription businesses aim for about 3 times or more.",
            },
            mistake: {
              es: "Dividir el gasto entre todos los clientes (también los viejos) en lugar de solo los nuevos.",
              en: "Dividing the spend by all customers (including old ones) instead of only the new ones.",
            },
          },
        ],
      },
    ],
    examples: [
      {
        title: { es: "Clases particulares contra curso en línea", en: "Private lessons versus an online course" },
        problem: {
          es: "Opción A, clases particulares: cada alumno paga $1,000 al mes y cuesta $600 en tiempo pagado a un tutor; no hay costos fijos. Opción B, curso en línea: cada alumno paga $1,000 al mes, cuesta $100 (plataforma de cobro) y hay $40,000 de costos fijos mensuales. Compara la utilidad con 50 y con 200 alumnos.",
          en: "Option A, private lessons: each student pays $1,000 a month and costs $600 in time paid to a tutor; there are no fixed costs. Option B, online course: each student pays $1,000 a month, costs $100 (payment platform) and there are $40,000 of monthly fixed costs. Compare profit with 50 and with 200 students.",
        },
        steps: [
          { es: "A con 50: 50 × (1,000 − 600) = $20,000. A con 200: 200 × 400 = $80,000.", en: "A with 50: 50 × (1,000 − 600) = $20,000. A with 200: 200 × 400 = $80,000." },
          { es: "B con 50: 50 × (1,000 − 100) − 40,000 = $5,000. B con 200: 200 × 900 − 40,000 = $140,000.", en: "B with 50: 50 × (1,000 − 100) − 40,000 = $5,000. B with 200: 200 × 900 − 40,000 = $140,000." },
          { es: "Al cuadruplicar alumnos, A multiplica su utilidad por 4; B la multiplica por 28.", en: "When students quadruple, A multiplies its profit by 4; B multiplies it by 28." },
        ],
        result: {
          es: "Con pocos alumnos conviene A, pero B es mucho más escalable: su costo marginal bajo hace que la utilidad crezca mucho más rápido que las ventas.",
          en: "With few students A is better, but B is far more scalable: its low marginal cost makes profit grow much faster than sales.",
        },
      },
      {
        title: { es: "¿Ya puede escalar la caja de snacks por suscripción?", en: "Is the snack-box subscription ready to scale?" },
        problem: {
          es: "Una caja mensual de snacks cuesta $400 y deja 50% de margen. Los clientes se quedan 9 meses en promedio. El mes pasado se gastaron $36,000 en anuncios y llegaron 60 clientes nuevos. Calcula LTV, CAC y su relación.",
          en: "A monthly snack box costs $400 and leaves a 50% margin. Customers stay 9 months on average. Last month $36,000 was spent on ads and 60 new customers arrived. Compute LTV, CAC and their ratio.",
        },
        steps: [
          { es: "LTV: 400 × 50% × 9 = $1,800.", en: "LTV: 400 × 50% × 9 = $1,800." },
          { es: "CAC: $36,000 ÷ 60 = $600.", en: "CAC: $36,000 ÷ 60 = $600." },
          { es: "Relación: 1,800 ÷ 600 = 3 veces.", en: "Ratio: 1,800 ÷ 600 = 3 times." },
        ],
        result: {
          es: "Cada cliente deja 3 veces lo que cuesta conseguirlo: los números permiten invertir más en adquisición, vigilando que el CAC no se dispare al crecer.",
          en: "Each customer brings in 3 times what it costs to win them: the numbers allow more investment in acquisition, watching that CAC does not spike as it grows.",
        },
      },
    ],
    keyPoints: [
      { es: "Escalar es multiplicar ingresos sin multiplicar costos al mismo ritmo.", en: "Scaling is multiplying revenue without multiplying costs at the same pace." },
      { es: "Costo marginal bajo y costos fijos repartidos entre muchos clientes favorecen la escala.", en: "Low marginal cost and fixed costs spread over many customers favor scale." },
      { es: "Procesos documentados, automatización e independencia del dueño quitan cuellos de botella.", en: "Documented processes, automation and independence from the owner remove bottlenecks." },
      { es: "LTV = ingreso mensual × margen × meses; CAC = gasto en adquisición ÷ clientes nuevos.", en: "LTV = monthly revenue × margin × months; CAC = acquisition spend ÷ new customers." },
      { es: "Escalar un negocio con LTV menor que CAC solo multiplica pérdidas.", en: "Scaling a business with LTV below CAC only multiplies losses." },
    ],
    exerciseIds: ['EMP-17-E1', 'EMP-17-E2', 'EMP-17-E3', 'EMP-17-E4', 'EMP-17-E5', 'EMP-17-E6'],
  },

  // ───────────────────────────── EMP-18 ─────────────────────────────
  {
    id: 'EMP-18',
    level: 1,
    topicIds: ['EMP.18'],
    title: { es: "Venture Capital y financiamiento de startups", en: "Venture capital and startup financing" },
    summary: {
      es: "Las startups se financian por etapas, y el venture capital aporta dinero a cambio de una parte de la empresa, lo que diluye a los fundadores en cada ronda.",
      en: "Startups are financed in stages, and venture capital provides money in exchange for a stake in the company, which dilutes the founders in each round.",
    },
    minutes: 19,
    objectives: [
      { es: "Describir las etapas de financiamiento de una startup, desde recursos propios hasta rondas de venture capital.", en: "Describe a startup's financing stages, from own resources to venture capital rounds." },
      { es: "Explicar cómo funciona un fondo de venture capital y qué busca a cambio de su inversión.", en: "Explain how a venture capital fund works and what it seeks in exchange for its investment." },
      { es: "Calcular la valuación post-money, el porcentaje del inversionista y la dilución de los fundadores.", en: "Compute the post-money valuation, the investor's percentage and the founders' dilution." },
    ],
    theory: [
      {
        heading: { es: "Las etapas del dinero de una startup", en: "A startup's money stages" },
        body: [
          {
            es: "Una **startup** es una empresa joven que busca un modelo de negocio que pueda crecer muy rápido, a menudo con tecnología. Como al inicio casi no vende, necesita dinero de fuera, y lo consigue **por etapas**: cada etapa llega cuando la empresa demuestra un avance.",
            en: "A **startup** is a young company searching for a business model that can grow very fast, often with technology. Since it sells almost nothing at first, it needs outside money, and it raises it **in stages**: each stage comes when the company shows progress.",
          },
          {
            es: "Hay dos grandes formas de financiarse. Con **deuda** pides prestado y devuelves con intereses, sin ceder parte de la empresa. Con **capital** (en inglés, *equity*) alguien te da dinero a cambio de un **porcentaje de la empresa**: no lo devuelves, pero ahora esa persona es dueña de una parte.",
            en: "There are two broad ways to finance. With **debt** you borrow and repay with interest, without giving up part of the company. With **equity** someone gives you money in exchange for a **percentage of the company**: you do not pay it back, but that person now owns part of it.",
          },
          {
            es: "Mini ejemplo: dos amigas crean una app para agendar citas en consultorios. Arrancan con sus ahorros, luego un tío invierte a cambio de 5%, después una aceleradora las apoya y, cuando ya tienen cientos de consultorios pagando, buscan un fondo de venture capital.",
            en: "Mini example: two friends create an app to book appointments at medical offices. They start with their savings, then an uncle invests in exchange for 5%, later an accelerator supports them and, once hundreds of offices are paying, they look for a venture capital fund.",
          },
        ],
        bullets: [
          { es: "Recursos propios (bootstrapping): ahorros y reinvertir lo que se gana.", en: "Own resources (bootstrapping): savings and reinvesting what is earned." },
          { es: "Amigos y familia: primeras aportaciones de gente cercana.", en: "Friends and family: first contributions from people close to you." },
          { es: "Inversionistas ángeles: personas que invierten su propio dinero en etapas tempranas.", en: "Angel investors: individuals who invest their own money at early stages." },
          { es: "Aceleradoras: programas que dan mentoría y a veces dinero a cambio de un porcentaje.", en: "Accelerators: programs that provide mentoring and sometimes money in exchange for a stake." },
          { es: "Venture capital: rondas semilla, Serie A, Serie B… con montos cada vez mayores.", en: "Venture capital: seed, Series A, Series B… rounds with ever-larger amounts." },
          { es: "Financiamiento colectivo (crowdfunding): muchas personas aportan poco a través de una plataforma.", en: "Crowdfunding: many people contribute small amounts through a platform." },
        ],
      },
      {
        heading: { es: "¿Cómo funciona el venture capital?", en: "How does venture capital work?" },
        body: [
          {
            es: "Un fondo de **venture capital** (capital emprendedor o de riesgo) junta dinero de inversionistas institucionales y personas con mucho patrimonio, y lo invierte en startups a cambio de **participación**. Sabe que la mayoría de sus inversiones fracasará o rendirá poco, así que busca unas pocas que crezcan muchísimo y paguen por todas.",
            en: "A **venture capital** fund pools money from institutional investors and wealthy individuals and invests it in startups in exchange for **equity**. It knows most of its investments will fail or return little, so it looks for a few that grow enormously and pay for all the rest.",
          },
          {
            es: "Por eso el VC **no es para cualquier negocio**: busca mercados enormes y crecimiento muy acelerado. Una buena panadería de barrio puede ser un gran negocio y aun así no interesarle a un fondo. Además, el fondo quiere una **salida** (*exit*) en algunos años: vender su parte cuando otra empresa compra la startup o cuando esta sale a la bolsa.",
            en: "That is why VC **is not for every business**: it looks for huge markets and very fast growth. A good neighborhood bakery can be a great business and still not interest a fund. Also, the fund wants an **exit** within some years: selling its stake when another company buys the startup or when it lists on the stock exchange.",
          },
          {
            es: "Mini ejemplo: un fondo invierte en 20 startups. Si 14 fracasan, 5 apenas devuelven lo invertido y 1 vale 50 veces más, esa sola puede pagar todo el fondo con ganancia.",
            en: "Mini example: a fund invests in 20 startups. If 14 fail, 5 barely return what was invested and 1 is worth 50 times more, that single one can repay the whole fund with a profit.",
          },
        ],
      },
      {
        heading: { es: "Valuación y dilución: cuánto de tu empresa entregas", en: "Valuation and dilution: how much of your company you give away" },
        body: [
          {
            es: "En palabras sencillas: piensa en tu empresa como un pastel. Cuando entra un inversionista, el pastel crece con su dinero, pero a cambio se lleva una rebanada. Esta sección te enseña a calcular qué tan grande es su rebanada y cuánto te queda a ti.",
            en: "In plain words: think of your company as a cake. When an investor comes in, the cake grows with their money, but in exchange they take a slice. This section teaches you to calculate how big their slice is and how much is left for you.",
          },
          {
            es: "La **valuación pre-money** es cuánto vale la empresa **antes** de recibir la inversión. La **post-money** es ese valor **más** el dinero que entra. El porcentaje del inversionista es su inversión dividida entre la valuación post-money.",
            en: "The **pre-money valuation** is what the company is worth **before** receiving the investment. **Post-money** is that value **plus** the money coming in. The investor's percentage is their investment divided by the post-money valuation.",
          },
          {
            es: "Cada ronda emite acciones nuevas, así que los socios anteriores quedan con un pedazo **más chico** de una empresa que, ojalá, vale más: eso es la **dilución**. Si antes tenías 80% y la nueva ronda toma 25%, te quedas con 80% × (1 − 25%) = 60%.",
            en: "Each round issues new shares, so existing shareholders end up with a **smaller** slice of a company that, hopefully, is worth more: that is **dilution**. If you had 80% and the new round takes 25%, you keep 80% × (1 − 25%) = 60%.",
          },
          {
            es: "Además del precio, la **hoja de términos** (*term sheet*) fija otras condiciones: asientos en el consejo, derechos de voto y la **preferencia de liquidación** (quién cobra primero si la empresa se vende). Mini ejemplo: con pre-money de $8 millones y una inversión de $2 millones, la post-money es $10 millones y el fondo queda con 20%.",
            en: "Besides price, the **term sheet** sets other conditions: board seats, voting rights and the **liquidation preference** (who gets paid first if the company is sold). Mini example: with an $8 million pre-money and a $2 million investment, post-money is $10 million and the fund ends up with 20%.",
          },
        ],
        formulas: [
          {
            name: { es: "Valuación post-money y porcentaje del inversionista", en: "Post-money valuation and investor percentage" },
            expression: "Post-money = Pre-money + Inversión  ·  % inversionista = Inversión ÷ Post-money × 100",
            variables: [
              { symbol: "Post-money", meaning: { es: "Lo que vale la empresa **después** de recibir el dinero, en pesos.", en: "What the company is worth **after** receiving the money, in pesos." } },
              { symbol: "Pre-money", meaning: { es: "Lo que vale la empresa **antes** de recibir el dinero, en pesos.", en: "What the company is worth **before** receiving the money, in pesos." } },
              { symbol: "Inversión", meaning: { es: "El dinero que pone el inversionista en esta ronda, en pesos.", en: "The money the investor puts in this round, in pesos." } },
              { symbol: "% inversionista", meaning: { es: "La parte de la empresa que recibe el inversionista, en porcentaje.", en: "The share of the company the investor receives, as a percentage." } },
            ],
            steps: [
              { es: "Suma la inversión a la pre-money: es la post-money.", en: "Add the investment to the pre-money: that is the post-money." },
              { es: "Divide la inversión entre la post-money (no entre la pre-money).", en: "Divide the investment by the post-money (not by the pre-money)." },
              { es: "Multiplica por 100.", en: "Multiply by 100." },
            ],
            example: {
              es: "Pre-money de $16 millones e inversión de $4 millones. Paso 1: $16 M + $4 M = **$20 M**. Paso 2: $4 M ÷ $20 M = 0.20. Paso 3: **20%** para el inversionista.",
              en: "Pre-money of $16 million and an investment of $4 million. Step 1: $16 M + $4 M = **$20 M**. Step 2: $4 M ÷ $20 M = 0.20. Step 3: **20%** for the investor.",
            },
            mistake: {
              es: "Dividir entre la pre-money; eso exagera el porcentaje que se entrega.",
              en: "Dividing by the pre-money; that overstates the percentage given away.",
            },
          },
          {
            name: { es: "Dilución: tu nuevo porcentaje después de una ronda", en: "Dilution: your new percentage after a round" },
            expression: "% nuevo = % anterior × (1 − % de la ronda)  ·  Valor en papel = % nuevo × Post-money",
            variables: [
              { symbol: "% nuevo", meaning: { es: "La parte de la empresa que te queda después de la ronda.", en: "The share of the company you keep after the round." } },
              { symbol: "% anterior", meaning: { es: "La parte que tenías antes de la ronda.", en: "The share you had before the round." } },
              { symbol: "% de la ronda", meaning: { es: "El porcentaje que se lleva el nuevo inversionista (en decimal: 20% = 0.20).", en: "The percentage the new investor takes (as a decimal: 20% = 0.20)." } },
              { symbol: "Valor en papel", meaning: { es: "Lo que valdría tu parte según la post-money, en pesos; no es dinero en tu bolsa hasta que vendas.", en: "What your stake would be worth at the post-money, in pesos; it is not cash in your pocket until you sell." } },
              { symbol: "Post-money", meaning: { es: "Valor de la empresa ya con el dinero nuevo, en pesos.", en: "The company's value including the new money, in pesos." } },
            ],
            steps: [
              { es: "Calcula el porcentaje de la ronda (inversión ÷ post-money).", en: "Compute the round's percentage (investment ÷ post-money)." },
              { es: "Resta ese porcentaje a 1 (por ejemplo, 1 − 0.20 = 0.80).", en: "Subtract that percentage from 1 (for example, 1 − 0.20 = 0.80)." },
              { es: "Multiplica tu porcentaje anterior por ese resultado.", en: "Multiply your previous percentage by that result." },
              { es: "Para el valor en papel, multiplica tu nuevo porcentaje por la post-money.", en: "For the paper value, multiply your new percentage by the post-money." },
            ],
            example: {
              es: "Los fundadores tienen 90% y entra una ronda que toma 20% con post-money de $20 millones. Paso 2: 1 − 0.20 = 0.80. Paso 3: 90% × 0.80 = **72%**. Paso 4: 0.72 × $20 M = **$14.4 millones** en papel.",
              en: "The founders own 90% and a round takes 20% at a $20 million post-money. Step 2: 1 − 0.20 = 0.80. Step 3: 90% × 0.80 = **72%**. Step 4: 0.72 × $20 M = **$14.4 million** on paper.",
            },
            interpret: {
              es: "Tu porcentaje baja, pero si la empresa vale más, tu parte en pesos puede subir. Lo importante es que el pastel crezca.",
              en: "Your percentage goes down, but if the company is worth more, your stake in pesos can go up. What matters is that the cake grows.",
            },
            mistake: {
              es: "Restar porcentajes (90% − 20% = 70%); la dilución se aplica multiplicando sobre lo que ya tenías.",
              en: "Subtracting percentages (90% − 20% = 70%); dilution is applied by multiplying on what you already had.",
            },
          },
        ],
      },
    ],
    examples: [
      {
        title: { es: "Ronda semilla de una app de logística", en: "Seed round of a logistics app" },
        problem: {
          es: "Las fundadoras de una app de logística tienen 100% de la empresa. Un fondo ofrece invertir $5 millones con una valuación pre-money de $15 millones. ¿Qué porcentaje recibe el fondo y con cuánto se quedan las fundadoras?",
          en: "The founders of a logistics app own 100% of the company. A fund offers to invest $5 million at a pre-money valuation of $15 million. What percentage does the fund receive and how much do the founders keep?",
        },
        steps: [
          { es: "Post-money: $15 M + $5 M = $20 M.", en: "Post-money: $15 M + $5 M = $20 M." },
          { es: "% del fondo: 5 ÷ 20 × 100 = 25%.", en: "Fund's %: 5 ÷ 20 × 100 = 25%." },
          { es: "Fundadoras: 100% × (1 − 25%) = 75%.", en: "Founders: 100% × (1 − 25%) = 75%." },
        ],
        result: {
          es: "El fondo recibe 25% y las fundadoras conservan 75% de una empresa valuada en $20 millones; su parte vale en papel $15 millones.",
          en: "The fund receives 25% and the founders keep 75% of a company valued at $20 million; their stake is worth $15 million on paper.",
        },
      },
      {
        title: { es: "Dilución en una segunda ronda", en: "Dilution in a second round" },
        problem: {
          es: "Tras la ronda semilla, las fundadoras tienen 75%. En la Serie A, un fondo invierte $10 millones con pre-money de $40 millones. ¿Con qué porcentaje se quedan las fundadoras y cuánto vale su parte en papel?",
          en: "After the seed round, the founders own 75%. In Series A, a fund invests $10 million at a $40 million pre-money. What percentage do the founders keep and how much is their stake worth on paper?",
        },
        steps: [
          { es: "Post-money: $40 M + $10 M = $50 M.", en: "Post-money: $40 M + $10 M = $50 M." },
          { es: "% de la Serie A: 10 ÷ 50 × 100 = 20%.", en: "Series A %: 10 ÷ 50 × 100 = 20%." },
          { es: "Fundadoras: 75% × (1 − 20%) = 60%.", en: "Founders: 75% × (1 − 20%) = 60%." },
          { es: "Valor en papel: 60% × $50 M = $30 M.", en: "Paper value: 60% × $50 M = $30 M." },
        ],
        result: {
          es: "Las fundadoras bajan de 75% a 60%, pero su parte sube de $15 a $30 millones en papel: se diluyen, pero el pastel creció.",
          en: "The founders drop from 75% to 60%, but their stake rises from $15 to $30 million on paper: they are diluted, but the pie grew.",
        },
      },
    ],
    keyPoints: [
      { es: "Las startups se financian por etapas: propios, amigos y familia, ángeles, aceleradoras y VC.", en: "Startups are financed in stages: own funds, friends and family, angels, accelerators and VC." },
      { es: "La deuda se devuelve con intereses; el capital (equity) se paga cediendo parte de la empresa.", en: "Debt is repaid with interest; equity is paid for by giving up part of the company." },
      { es: "El VC busca pocas empresas de crecimiento enorme y una salida en algunos años.", en: "VC looks for a few companies with enormous growth and an exit within some years." },
      { es: "Post-money = pre-money + inversión; % inversionista = inversión ÷ post-money.", en: "Post-money = pre-money + investment; investor % = investment ÷ post-money." },
      { es: "Cada ronda diluye a los socios anteriores; lo importante es que el valor de su parte crezca.", en: "Each round dilutes existing shareholders; what matters is that the value of their stake grows." },
    ],
    normativeNote: NOTE_VC,
    exerciseIds: ['EMP-18-E1', 'EMP-18-E2', 'EMP-18-E3', 'EMP-18-E4', 'EMP-18-E5', 'EMP-18-E6'],
  },
]

export const exercises: Exercise[] = [
  // ───────────────────────────── EMP-13 ─────────────────────────────
  {
    id: 'EMP-13-E1',
    level: 1,
    module: 'EMP-13',
    kind: 'mcq',
    flavor: 'concept',
    prompt: {
      es: "Al evaluar la viabilidad de una estética, revisar qué licencia de funcionamiento pide el municipio corresponde a la dimensión…",
      en: "When assessing the feasibility of a beauty salon, checking which operating license the municipality requires belongs to the dimension…",
    },
    options: [
      { id: 'EMP-13-E1-a', text: { es: "de mercado", en: "market" } },
      { id: 'EMP-13-E1-b', text: { es: "legal y administrativa", en: "legal and administrative" } },
      { id: 'EMP-13-E1-c', text: { es: "técnica", en: "technical" } },
      { id: 'EMP-13-E1-d', text: { es: "financiera", en: "financial" } },
    ],
    correctOptionId: 'EMP-13-E1-b',
    explanation: {
      es: "Permisos, licencias, registros y contratos son la dimensión legal y administrativa. Error común: elegir la técnica porque la licencia se relaciona con el local; la técnica revisa si puedes producir (equipo, capacidad, proveedores), no si te dejan operar.",
      en: "Permits, licenses, registrations and contracts make up the legal and administrative dimension. Common mistake: choosing technical because the license relates to the premises; the technical dimension checks whether you can produce (equipment, capacity, suppliers), not whether you are allowed to operate.",
    },
    difficulty: 1,
    points: 10,
    competency: 'business-feasibility',
  },
  {
    id: 'EMP-13-E2',
    level: 1,
    module: 'EMP-13',
    kind: 'numeric',
    flavor: 'case',
    context: {
      es: "Marta quiere abrir una juguería en una colonia con 4,000 habitantes. Su encuesta indica que 5% le compraría, en promedio 4 veces al mes, con un ticket promedio de $60.",
      en: "Marta wants to open a juice bar in a neighborhood with 4,000 residents. Her survey shows 5% would buy from her, on average 4 times a month, with an average ticket of $60.",
    },
    prompt: {
      es: "¿Cuánto estima vender la juguería al mes? Responde en pesos.",
      en: "How much does the juice bar expect to sell per month? Answer in pesos.",
    },
    answer: 48000,
    unit: 'MXN',
    decimals: 0,
    tolerance: { abs: 0.5 },
    explanation: {
      es: "4,000 × 5% = 200 clientes; 200 × 4 = 800 compras; 800 × $60 = $48,000. Error común: olvidar la frecuencia y responder $12,000 (200 × 60), como si cada cliente comprara una sola vez al mes.",
      en: "4,000 × 5% = 200 customers; 200 × 4 = 800 purchases; 800 × $60 = $48,000. Common mistake: forgetting the frequency and answering $12,000 (200 × 60), as if each customer bought only once a month.",
    },
    difficulty: 1,
    points: 10,
    competency: 'business-feasibility',
  },
  {
    id: 'EMP-13-E3',
    level: 1,
    module: 'EMP-13',
    kind: 'classify',
    flavor: 'concept',
    prompt: {
      es: "Clasifica cada pregunta del estudio de viabilidad de un food truck según la dimensión que revisa.",
      en: "Classify each question in a food truck's feasibility study by the dimension it checks.",
    },
    categories: [
      { id: 'EMP-13-E3-c1', label: { es: "Mercado", en: "Market" } },
      { id: 'EMP-13-E3-c2', label: { es: "Técnica", en: "Technical" } },
      { id: 'EMP-13-E3-c3', label: { es: "Legal y administrativa", en: "Legal and administrative" } },
      { id: 'EMP-13-E3-c4', label: { es: "Financiera", en: "Financial" } },
    ],
    items: [
      { id: 'EMP-13-E3-i1', label: { es: "¿Cuántas personas comen fuera cerca del parque industrial?", en: "How many people eat out near the industrial park?" }, correctCategoryId: 'EMP-13-E3-c1' },
      { id: 'EMP-13-E3-i2', label: { es: "¿La plancha alcanza para preparar 80 órdenes por hora?", en: "Is the griddle enough to prepare 80 orders per hour?" }, correctCategoryId: 'EMP-13-E3-c2' },
      { id: 'EMP-13-E3-i3', label: { es: "¿Qué permiso se necesita para vender en la vía pública?", en: "What permit is needed to sell on public streets?" }, correctCategoryId: 'EMP-13-E3-c3' },
      { id: 'EMP-13-E3-i4', label: { es: "¿En cuántos meses se recupera lo invertido en el camión?", en: "In how many months is the investment in the truck recovered?" }, correctCategoryId: 'EMP-13-E3-c4' },
      { id: 'EMP-13-E3-i5', label: { es: "¿Cuánto pagan hoy esos clientes por una comida?", en: "How much do those customers pay for a meal today?" }, correctCategoryId: 'EMP-13-E3-c1' },
      { id: 'EMP-13-E3-i6', label: { es: "¿Cuántas órdenes al mes cubren los costos fijos?", en: "How many orders a month cover the fixed costs?" }, correctCategoryId: 'EMP-13-E3-c4' },
    ],
    explanation: {
      es: "Mercado: cuántos clientes hay y cuánto pagan. Técnica: capacidad del equipo. Legal: permisos. Financiera: recuperación y punto de equilibrio. Error común: poner el precio que pagan los clientes en financiera; es un dato del mercado que luego alimenta las cuentas.",
      en: "Market: how many customers there are and how much they pay. Technical: equipment capacity. Legal: permits. Financial: payback and break-even. Common mistake: putting the price customers pay under financial; it is market data that later feeds the numbers.",
    },
    difficulty: 2,
    points: 15,
    competency: 'business-feasibility',
  },
  {
    id: 'EMP-13-E4',
    level: 1,
    module: 'EMP-13',
    kind: 'numeric',
    flavor: 'case',
    context: {
      es: "Una papelería con servicio de impresión requiere una inversión inicial de $180,000 y se espera que genere un flujo neto de $7,500 al mes de forma constante.",
      en: "A stationery store with a printing service requires an initial investment of $180,000 and is expected to generate a steady net cash flow of $7,500 per month.",
    },
    prompt: {
      es: "¿En cuántos meses se recupera la inversión?",
      en: "In how many months is the investment recovered?",
    },
    answer: 24,
    unit: 'periods',
    decimals: 0,
    tolerance: { abs: 0.01 },
    explanation: {
      es: "Recuperación = inversión ÷ flujo por periodo = 180,000 ÷ 7,500 = 24 meses (2 años). Error común: dividir entre un flujo anual mal calculado o responder 2 cuando se piden meses.",
      en: "Payback = investment ÷ flow per period = 180,000 ÷ 7,500 = 24 months (2 years). Common mistake: dividing by a miscalculated annual flow or answering 2 when months are asked for.",
    },
    difficulty: 1,
    points: 10,
    competency: 'business-feasibility',
  },
  {
    id: 'EMP-13-E5',
    level: 1,
    module: 'EMP-13',
    kind: 'truefalse',
    flavor: 'concept',
    prompt: {
      es: "Si un estudio muestra que habrá muchos clientes dispuestos a comprar, ya se puede concluir que el negocio es viable.",
      en: "If a study shows there will be many customers willing to buy, you can already conclude the business is feasible.",
    },
    answer: false,
    explanation: {
      es: "Falso. La demanda es solo la dimensión de mercado. El negocio también debe poder operarse, cumplir la ley y dejar dinero: con mucha demanda pero costos mayores al precio, o sin permiso, fracasa. Error común: confundir 'hay clientes' con 'es viable'.",
      en: "False. Demand is only the market dimension. The business must also be operable, comply with the law and make money: with lots of demand but costs above price, or without a permit, it fails. Common mistake: confusing 'there are customers' with 'it is feasible'.",
    },
    difficulty: 1,
    points: 10,
    competency: 'business-feasibility',
  },
  {
    id: 'EMP-13-E6',
    level: 1,
    module: 'EMP-13',
    kind: 'fields',
    flavor: 'case',
    context: {
      es: "Un taller de playeras estampadas vende cada playera a $45. El costo variable (playera lisa, tinta y empaque) es $20 por pieza. Los costos fijos son $30,000 al mes. El estudio de mercado estima ventas de 1,500 playeras al mes.",
      en: "A printed T-shirt workshop sells each shirt at $45. The variable cost (blank shirt, ink and packaging) is $20 per piece. Fixed costs are $30,000 per month. The market study estimates sales of 1,500 shirts per month.",
    },
    prompt: {
      es: "Evalúa la viabilidad financiera del taller de playeras: completa los tres datos.",
      en: "Assess the T-shirt workshop's financial feasibility: complete the three figures.",
    },
    fields: [
      { id: 'f1', label: { es: "Margen de contribución por playera ($)", en: "Contribution margin per shirt ($)" }, answer: 25, unit: 'MXN', tolerance: { abs: 0.01 } },
      { id: 'f2', label: { es: "Punto de equilibrio (playeras al mes)", en: "Break-even point (shirts per month)" }, answer: 1200, unit: 'units', tolerance: { abs: 0.5 } },
      { id: 'f3', label: { es: "Utilidad mensual con las ventas estimadas ($)", en: "Monthly profit at estimated sales ($)" }, answer: 7500, unit: 'MXN', tolerance: { abs: 0.5 } },
    ],
    explanation: {
      es: "Margen: 45 − 20 = $25. Punto de equilibrio: 30,000 ÷ 25 = 1,200 playeras. Utilidad: 1,500 × 25 − 30,000 = $7,500. Las ventas estimadas superan el equilibrio por solo 300 piezas (20%): es viable, pero con poco colchón. Error común: calcular la utilidad como 1,500 × 45 − 30,000, olvidando el costo variable.",
      en: "Margin: 45 − 20 = $25. Break-even: 30,000 ÷ 25 = 1,200 shirts. Profit: 1,500 × 25 − 30,000 = $7,500. Estimated sales exceed break-even by only 300 pieces (20%): it is feasible, but with a thin cushion. Common mistake: computing profit as 1,500 × 45 − 30,000, forgetting the variable cost.",
    },
    difficulty: 2,
    points: 20,
    competency: 'business-feasibility',
  },

  // ───────────────────────────── EMP-14 ─────────────────────────────
  {
    id: 'EMP-14-E1',
    level: 1,
    module: 'EMP-14',
    kind: 'mcq',
    flavor: 'concept',
    prompt: {
      es: "¿Cuál de estos enunciados describe un KPI bien definido?",
      en: "Which of these statements describes a well-defined KPI?",
    },
    options: [
      { id: 'EMP-14-E1-a', text: { es: "Tener más seguidores en redes sociales", en: "Having more social media followers" } },
      { id: 'EMP-14-E1-b', text: { es: "Mejorar la atención al cliente", en: "Improve customer service" } },
      { id: 'EMP-14-E1-c', text: { es: "Porcentaje de pedidos entregados a tiempo, revisado cada semana, con meta de 95% a fin de año y a cargo del jefe de logística", en: "Percentage of orders delivered on time, reviewed weekly, with a 95% target by year-end and owned by the logistics manager" } },
      { id: 'EMP-14-E1-d', text: { es: "Vender lo más posible este año", en: "Sell as much as possible this year" } },
    ],
    correctOptionId: 'EMP-14-E1-c',
    explanation: {
      es: "Un KPI necesita fórmula clara, meta, frecuencia y responsable; solo la opción del porcentaje de entregas a tiempo los tiene. Error común: elegir 'más seguidores': es medible, pero no tiene meta ni se liga a un objetivo de negocio; es una métrica de vanidad.",
      en: "A KPI needs a clear formula, target, frequency and owner; only the on-time delivery option has them. Common mistake: choosing 'more followers': it is measurable, but it has no target and is not tied to a business objective; it is a vanity metric.",
    },
    difficulty: 1,
    points: 10,
    competency: 'kpi',
  },
  {
    id: 'EMP-14-E2',
    level: 1,
    module: 'EMP-14',
    kind: 'numeric',
    flavor: 'case',
    context: {
      es: "La tienda en línea de una marca de café de Chiapas recibió 3,200 visitantes en una semana; 96 de ellos hicieron una compra.",
      en: "The online store of a coffee brand from Chiapas received 3,200 visitors in one week; 96 of them made a purchase.",
    },
    prompt: {
      es: "¿Cuál fue la tasa de conversión de la semana, en porcentaje?",
      en: "What was the week's conversion rate, as a percentage?",
    },
    answer: 3,
    unit: '%',
    decimals: 1,
    tolerance: { abs: 0.05 },
    explanation: {
      es: "Conversión = compradores ÷ visitantes × 100 = 96 ÷ 3,200 × 100 = 3%. Error común: dividir al revés (3,200 ÷ 96 ≈ 33.3) o no multiplicar por 100 y responder 0.03.",
      en: "Conversion = buyers ÷ visitors × 100 = 96 ÷ 3,200 × 100 = 3%. Common mistake: dividing the other way round (3,200 ÷ 96 ≈ 33.3) or not multiplying by 100 and answering 0.03.",
    },
    difficulty: 1,
    points: 10,
    competency: 'kpi',
  },
  {
    id: 'EMP-14-E3',
    level: 1,
    module: 'EMP-14',
    kind: 'classify',
    flavor: 'concept',
    prompt: {
      es: "Clasifica cada indicador de una agencia de seguros de autos como adelantado o rezagado.",
      en: "Classify each indicator of a car insurance agency as leading or lagging.",
    },
    categories: [
      { id: 'EMP-14-E3-c1', label: { es: "Adelantado (anticipa el resultado)", en: "Leading (anticipates the result)" } },
      { id: 'EMP-14-E3-c2', label: { es: "Rezagado (muestra el resultado ya ocurrido)", en: "Lagging (shows the result already achieved)" } },
    ],
    items: [
      { id: 'EMP-14-E3-i1', label: { es: "Cotizaciones enviadas esta semana", en: "Quotes sent this week" }, correctCategoryId: 'EMP-14-E3-c1' },
      { id: 'EMP-14-E3-i2', label: { es: "Primas cobradas en el trimestre", en: "Premiums collected in the quarter" }, correctCategoryId: 'EMP-14-E3-c2' },
      { id: 'EMP-14-E3-i3', label: { es: "Llamadas de seguimiento a prospectos", en: "Follow-up calls to prospects" }, correctCategoryId: 'EMP-14-E3-c1' },
      { id: 'EMP-14-E3-i4', label: { es: "Utilidad neta del año", en: "Net profit for the year" }, correctCategoryId: 'EMP-14-E3-c2' },
      { id: 'EMP-14-E3-i5', label: { es: "Citas agendadas con clientes cuya póliza vence el próximo mes", en: "Appointments booked with clients whose policy expires next month" }, correctCategoryId: 'EMP-14-E3-c1' },
      { id: 'EMP-14-E3-i6', label: { es: "Porcentaje de clientes que no renovaron el año pasado", en: "Percentage of clients who did not renew last year" }, correctCategoryId: 'EMP-14-E3-c2' },
    ],
    explanation: {
      es: "Adelantados: actividades que ocurren antes de la venta (cotizaciones, llamadas, citas). Rezagados: resultados ya cerrados (primas cobradas, utilidad, cancelaciones del año pasado). Error común: tomar 'clientes que no renovaron' como adelantado; describe algo que ya pasó.",
      en: "Leading: activities that happen before the sale (quotes, calls, appointments). Lagging: results already closed (premiums collected, profit, last year's non-renewals). Common mistake: treating 'clients who did not renew' as leading; it describes something that already happened.",
    },
    difficulty: 2,
    points: 15,
    competency: 'kpi',
  },
  {
    id: 'EMP-14-E4',
    level: 1,
    module: 'EMP-14',
    kind: 'formula',
    flavor: 'concept',
    prompt: {
      es: "Completa la fórmula del ticket promedio de un negocio.",
      en: "Complete the formula for a business's average ticket.",
    },
    template: '{{b1}} = {{b2}} ÷ {{b3}}',
    blanks: [
      {
        id: 'b1',
        options: [
          { id: 'EMP-14-E4-b1-a', text: { es: "Ticket promedio", en: "Average ticket" } },
          { id: 'EMP-14-E4-b1-b', text: { es: "Margen bruto", en: "Gross margin" } },
          { id: 'EMP-14-E4-b1-c', text: { es: "Tasa de conversión", en: "Conversion rate" } },
        ],
        correctOptionId: 'EMP-14-E4-b1-a',
      },
      {
        id: 'b2',
        options: [
          { id: 'EMP-14-E4-b2-a', text: { es: "Número de visitantes", en: "Number of visitors" } },
          { id: 'EMP-14-E4-b2-b', text: { es: "Ventas totales del periodo", en: "Total sales for the period" } },
          { id: 'EMP-14-E4-b2-c', text: { es: "Costo de ventas", en: "Cost of sales" } },
        ],
        correctOptionId: 'EMP-14-E4-b2-b',
      },
      {
        id: 'b3',
        options: [
          { id: 'EMP-14-E4-b3-a', text: { es: "Número de tickets (transacciones)", en: "Number of tickets (transactions)" } },
          { id: 'EMP-14-E4-b3-b', text: { es: "Días del mes", en: "Days in the month" } },
          { id: 'EMP-14-E4-b3-c', text: { es: "Número de empleados", en: "Number of employees" } },
        ],
        correctOptionId: 'EMP-14-E4-b3-a',
      },
    ],
    explanation: {
      es: "Ticket promedio = ventas totales del periodo ÷ número de tickets: cuánto gasta en promedio cada compra. Error común: dividir entre los días del mes; eso da la venta diaria promedio, no lo que gasta cada cliente.",
      en: "Average ticket = total sales for the period ÷ number of tickets: how much each purchase averages. Common mistake: dividing by the days in the month; that gives average daily sales, not what each customer spends.",
    },
    difficulty: 1,
    points: 10,
    competency: 'kpi',
  },
  {
    id: 'EMP-14-E5',
    level: 1,
    module: 'EMP-14',
    kind: 'multi',
    flavor: 'concept',
    prompt: {
      es: "Vas a armar la ficha de un KPI para tu negocio. ¿Qué elementos debe incluir? Selecciona todos los que apliquen.",
      en: "You are building a KPI data sheet for your business. Which elements should it include? Select all that apply.",
    },
    options: [
      { id: 'EMP-14-E5-a', text: { es: "Fórmula de cálculo y fuente del dato", en: "Calculation formula and data source" } },
      { id: 'EMP-14-E5-b', text: { es: "Meta numérica con fecha", en: "Numeric target with a date" } },
      { id: 'EMP-14-E5-c', text: { es: "Frecuencia de revisión", en: "Review frequency" } },
      { id: 'EMP-14-E5-d', text: { es: "Responsable de actuar si se desvía", en: "Owner who acts if it deviates" } },
      { id: 'EMP-14-E5-e', text: { es: "El mayor número posible de métricas para no perder detalle", en: "As many metrics as possible so no detail is lost" } },
    ],
    correctOptionIds: ['EMP-14-E5-a', 'EMP-14-E5-b', 'EMP-14-E5-c', 'EMP-14-E5-d'],
    explanation: {
      es: "La ficha lleva fórmula y fuente, meta con fecha, frecuencia y responsable. Error común: pensar que más métricas es mejor; un KPI es justo lo contrario: elegir pocos números clave para enfocarse.",
      en: "The data sheet includes formula and source, a dated target, frequency and owner. Common mistake: thinking more metrics is better; a KPI is exactly the opposite: choosing a few key numbers to focus on.",
    },
    difficulty: 1,
    points: 10,
    competency: 'kpi',
  },
  {
    id: 'EMP-14-E6',
    level: 1,
    module: 'EMP-14',
    kind: 'fields',
    flavor: 'case',
    context: {
      es: "Una distribuidora de abarrotes cerró el mes con estos datos: ventas por $150,000 en 1,200 tickets; costo de lo vendido por $90,000; 400 pedidos a domicilio, de los cuales 368 llegaron a tiempo.",
      en: "A grocery distributor closed the month with these figures: sales of $150,000 across 1,200 tickets; cost of goods sold of $90,000; 400 home-delivery orders, of which 368 arrived on time.",
    },
    prompt: {
      es: "Arma el tablero del mes de la distribuidora: calcula sus tres KPI.",
      en: "Build the distributor's monthly dashboard: compute its three KPIs.",
    },
    fields: [
      { id: 'f1', label: { es: "Ticket promedio ($)", en: "Average ticket ($)" }, answer: 125, unit: 'MXN', tolerance: { abs: 0.01 } },
      { id: 'f2', label: { es: "Entregas a tiempo (%)", en: "On-time deliveries (%)" }, answer: 92, unit: '%', tolerance: { abs: 0.05 } },
      { id: 'f3', label: { es: "Margen bruto (%)", en: "Gross margin (%)" }, answer: 40, unit: '%', tolerance: { abs: 0.05 } },
    ],
    explanation: {
      es: "Ticket: 150,000 ÷ 1,200 = $125. Entregas a tiempo: 368 ÷ 400 × 100 = 92%. Margen bruto: (150,000 − 90,000) ÷ 150,000 × 100 = 40%. Error común: calcular el margen sobre el costo (60,000 ÷ 90,000 ≈ 66.7%); el margen bruto se mide sobre las ventas.",
      en: "Ticket: 150,000 ÷ 1,200 = $125. On-time deliveries: 368 ÷ 400 × 100 = 92%. Gross margin: (150,000 − 90,000) ÷ 150,000 × 100 = 40%. Common mistake: computing the margin on cost (60,000 ÷ 90,000 ≈ 66.7%); gross margin is measured on sales.",
    },
    difficulty: 2,
    points: 20,
    competency: 'kpi',
  },

  // ───────────────────────────── EMP-15 ─────────────────────────────
  {
    id: 'EMP-15-E1',
    level: 1,
    module: 'EMP-15',
    kind: 'mcq',
    flavor: 'concept',
    prompt: {
      es: "Una fábrica de tortillas instala un sensor que ajusta solo la temperatura del comal y reduce el desperdicio de masa. ¿Qué tipo de innovación es?",
      en: "A tortilla factory installs a sensor that automatically adjusts the griddle temperature and reduces dough waste. What type of innovation is it?",
    },
    options: [
      { id: 'EMP-15-E1-a', text: { es: "De producto", en: "Product" } },
      { id: 'EMP-15-E1-b', text: { es: "De modelo de negocio", en: "Business model" } },
      { id: 'EMP-15-E1-c', text: { es: "De comercialización", en: "Marketing" } },
      { id: 'EMP-15-E1-d', text: { es: "De proceso", en: "Process" } },
    ],
    correctOptionId: 'EMP-15-E1-d',
    explanation: {
      es: "Cambia la forma de producir (más eficiente, menos desperdicio) sin cambiar la tortilla que recibe el cliente: es innovación de proceso. Error común: elegir producto porque la mejora ocurre en la fábrica; el producto solo cambia si el cliente recibe algo nuevo.",
      en: "It changes the way of producing (more efficient, less waste) without changing the tortilla the customer receives: it is process innovation. Common mistake: choosing product because the improvement happens in the factory; the product only changes if the customer receives something new.",
    },
    difficulty: 1,
    points: 10,
    competency: 'innovation',
  },
  {
    id: 'EMP-15-E2',
    level: 1,
    module: 'EMP-15',
    kind: 'truefalse',
    flavor: 'concept',
    prompt: {
      es: "Sacar una nueva presentación de 500 ml de una salsa que ya se vendía en 250 ml es un ejemplo de innovación disruptiva.",
      en: "Launching a new 500 ml size of a salsa already sold in 250 ml is an example of disruptive innovation.",
    },
    answer: false,
    explanation: {
      es: "Falso. Es una mejora pequeña sobre algo que ya existe: innovación incremental. La disruptiva cambia las reglas del mercado o la forma en que los clientes resuelven una necesidad. Error común: pensar que todo lo 'nuevo' es disruptivo.",
      en: "False. It is a small improvement on something that already exists: incremental innovation. Disruptive innovation changes the market's rules or the way customers meet a need. Common mistake: thinking everything 'new' is disruptive.",
    },
    difficulty: 1,
    points: 10,
    competency: 'innovation',
  },
  {
    id: 'EMP-15-E3',
    level: 1,
    module: 'EMP-15',
    kind: 'classify',
    flavor: 'concept',
    prompt: {
      es: "Clasifica cada cambio de un estudio de fotografía según el tipo de innovación.",
      en: "Classify each change at a photography studio by type of innovation.",
    },
    categories: [
      { id: 'EMP-15-E3-c1', label: { es: "Producto o servicio", en: "Product or service" } },
      { id: 'EMP-15-E3-c2', label: { es: "Proceso", en: "Process" } },
      { id: 'EMP-15-E3-c3', label: { es: "Modelo de negocio", en: "Business model" } },
      { id: 'EMP-15-E3-c4', label: { es: "Comercialización", en: "Marketing" } },
    ],
    items: [
      { id: 'EMP-15-E3-i1', label: { es: "Ofrecer sesiones con dron para bodas", en: "Offering drone sessions for weddings" }, correctCategoryId: 'EMP-15-E3-c1' },
      { id: 'EMP-15-E3-i2', label: { es: "Editar las fotos con un programa que aplica ajustes en lote y reduce el tiempo de entrega", en: "Editing photos with software that applies batch adjustments and cuts delivery time" }, correctCategoryId: 'EMP-15-E3-c2' },
      { id: 'EMP-15-E3-i3', label: { es: "Cobrar una cuota mensual a escuelas por fotografiar todos sus eventos", en: "Charging schools a monthly fee to photograph all their events" }, correctCategoryId: 'EMP-15-E3-c3' },
      { id: 'EMP-15-E3-i4', label: { es: "Vender paquetes a través de videos cortos en redes sociales", en: "Selling packages through short videos on social media" }, correctCategoryId: 'EMP-15-E3-c4' },
      { id: 'EMP-15-E3-i5', label: { es: "Crear álbumes impresos con realidad aumentada", en: "Creating printed albums with augmented reality" }, correctCategoryId: 'EMP-15-E3-c1' },
      { id: 'EMP-15-E3-i6', label: { es: "Una agenda en línea que asigna automáticamente fotógrafo y estudio", en: "An online calendar that automatically assigns photographer and studio" }, correctCategoryId: 'EMP-15-E3-c2' },
    ],
    explanation: {
      es: "Producto: lo que el cliente recibe (sesiones con dron, álbumes con realidad aumentada). Proceso: cómo se produce u organiza (edición en lote, agenda automática). Modelo de negocio: cómo se cobra (cuota mensual). Comercialización: cómo se promueve y vende (videos en redes). Error común: confundir la cuota mensual con comercialización; cambia la forma de ganar dinero, no solo cómo se anuncia.",
      en: "Product: what the customer receives (drone sessions, AR albums). Process: how it is produced or organized (batch editing, automatic scheduling). Business model: how it charges (monthly fee). Marketing: how it promotes and sells (social media videos). Common mistake: confusing the monthly fee with marketing; it changes how money is made, not just how it is advertised.",
    },
    difficulty: 2,
    points: 15,
    competency: 'innovation',
  },
  {
    id: 'EMP-15-E4',
    level: 1,
    module: 'EMP-15',
    kind: 'multi',
    flavor: 'concept',
    prompt: {
      es: "Una mueblería quiere iniciar su transformación digital. ¿Qué prácticas aumentan la probabilidad de éxito? Selecciona todas las que apliquen.",
      en: "A furniture store wants to start its digital transformation. Which practices increase the chance of success? Select all that apply.",
    },
    options: [
      { id: 'EMP-15-E4-a', text: { es: "Empezar con un piloto en una sola sucursal y medir los resultados", en: "Start with a pilot in a single branch and measure the results" } },
      { id: 'EMP-15-E4-b', text: { es: "Capacitar al equipo y explicar por qué se hace el cambio", en: "Train the team and explain why the change is being made" } },
      { id: 'EMP-15-E4-c', text: { es: "Comprar el sistema más caro y esperar que el personal aprenda solo", en: "Buy the most expensive system and expect staff to learn on their own" } },
      { id: 'EMP-15-E4-d', text: { es: "Hacer un diagnóstico para atacar primero el problema más costoso", en: "Run a diagnosis to tackle the most costly problem first" } },
    ],
    correctOptionIds: ['EMP-15-E4-a', 'EMP-15-E4-b', 'EMP-15-E4-d'],
    explanation: {
      es: "Diagnóstico, piloto medido y capacitación reducen el riesgo y la resistencia al cambio. Error común: creer que transformarse es comprar tecnología; si el equipo no cambia su forma de trabajar, el sistema no se usa.",
      en: "Diagnosis, a measured pilot and training reduce risk and resistance to change. Common mistake: believing transformation means buying technology; if the team does not change how it works, the system goes unused.",
    },
    difficulty: 1,
    points: 10,
    competency: 'innovation',
  },
  {
    id: 'EMP-15-E5',
    level: 1,
    module: 'EMP-15',
    kind: 'numeric',
    flavor: 'case',
    context: {
      es: "Un consultorio dental invierte $48,000 en un sistema de citas y recordatorios automáticos. Gracias a que los pacientes ya no faltan, gana $6,000 adicionales al mes.",
      en: "A dental office invests $48,000 in an automatic appointment and reminder system. Because patients no longer miss appointments, it earns an extra $6,000 per month.",
    },
    prompt: {
      es: "¿Cuál es el retorno del sistema de citas en su primer año, en porcentaje?",
      en: "What is the appointment system's return in its first year, as a percentage?",
    },
    answer: 50,
    unit: '%',
    decimals: 1,
    tolerance: { abs: 0.05 },
    explanation: {
      es: "Beneficio anual: 6,000 × 12 = $72,000. Retorno: (72,000 − 48,000) ÷ 48,000 × 100 = 50%. Error común: usar el beneficio de un solo mes, lo que da (6,000 − 48,000) ÷ 48,000 × 100 = −87.5%, o dividir 72,000 ÷ 48,000 y responder 150 sin restar el costo.",
      en: "Annual benefit: 6,000 × 12 = $72,000. Return: (72,000 − 48,000) ÷ 48,000 × 100 = 50%. Common mistake: using a single month's benefit, giving (6,000 − 48,000) ÷ 48,000 × 100 = −87.5%, or dividing 72,000 ÷ 48,000 and answering 150 without subtracting the cost.",
    },
    difficulty: 2,
    points: 15,
    competency: 'innovation',
  },
  {
    id: 'EMP-15-E6',
    level: 1,
    module: 'EMP-15',
    kind: 'mcq',
    flavor: 'case',
    context: {
      es: "Una cocina económica quiere vender desayunos por suscripción semanal. Antes de lanzar, decidió que el experimento sería un éxito si al menos 30% de quienes prueben la suscripción la renuevan. Ofreció una semana a 50 clientes con lo que ya tenía en la cocina; 9 la renovaron.",
      en: "A home-style eatery wants to sell weekly breakfast subscriptions. Before launching, it decided the experiment would be a success if at least 30% of those who try the subscription renew it. It offered one week to 50 customers using what it already had in the kitchen; 9 renewed.",
    },
    prompt: {
      es: "Según el ciclo construir-medir-aprender, ¿qué conviene hacer con la suscripción de desayunos?",
      en: "Following the build-measure-learn cycle, what should the eatery do with the breakfast subscription?",
    },
    options: [
      { id: 'EMP-15-E6-a', text: { es: "Invertir de inmediato en una cocina más grande, porque 9 clientes ya renovaron", en: "Immediately invest in a bigger kitchen, because 9 customers already renewed" } },
      { id: 'EMP-15-E6-b', text: { es: "Reconocer que no llegó a la meta (18% contra 30%), averiguar por qué y ajustar la oferta antes de invertir", en: "Recognize it missed the target (18% versus 30%), find out why and adjust the offer before investing" } },
      { id: 'EMP-15-E6-c', text: { es: "Cambiar la meta a 15% para que el experimento cuente como éxito", en: "Change the target to 15% so the experiment counts as a success" } },
      { id: 'EMP-15-E6-d', text: { es: "Abandonar cualquier idea nueva, porque innovar no funciona en negocios pequeños", en: "Drop any new idea, because innovation does not work in small businesses" } },
    ],
    correctOptionId: 'EMP-15-E6-b',
    explanation: {
      es: "Renovación: 9 ÷ 50 = 18%, debajo de la meta de 30%. Lo correcto es aprender (preguntar a quienes no renovaron) y ajustar precio, menú u horario antes de invertir. Error común: mover la meta después de ver el resultado; así el experimento ya no sirve para decidir.",
      en: "Renewal: 9 ÷ 50 = 18%, below the 30% target. The right move is to learn (ask those who did not renew) and adjust price, menu or schedule before investing. Common mistake: moving the target after seeing the result; then the experiment no longer helps decide.",
    },
    difficulty: 2,
    points: 15,
    competency: 'innovation',
  },

  // ───────────────────────────── EMP-16 ─────────────────────────────
  {
    id: 'EMP-16-E1',
    level: 1,
    module: 'EMP-16',
    kind: 'classify',
    flavor: 'concept',
    prompt: {
      es: "Una fábrica de dulces de tamarindo de Jalisco evalúa varias opciones. Ubica cada una en la matriz de Ansoff.",
      en: "A tamarind candy factory in Jalisco is evaluating several options. Place each one on the Ansoff matrix.",
    },
    categories: [
      { id: 'EMP-16-E1-c1', label: { es: "Penetración de mercado", en: "Market penetration" } },
      { id: 'EMP-16-E1-c2', label: { es: "Desarrollo de mercado", en: "Market development" } },
      { id: 'EMP-16-E1-c3', label: { es: "Desarrollo de producto", en: "Product development" } },
      { id: 'EMP-16-E1-c4', label: { es: "Diversificación", en: "Diversification" } },
    ],
    items: [
      { id: 'EMP-16-E1-i1', label: { es: "Dar descuento por volumen a las tiendas que ya le compran", en: "Offer volume discounts to the stores that already buy from it" }, correctCategoryId: 'EMP-16-E1-c1' },
      { id: 'EMP-16-E1-i2', label: { es: "Exportar sus mismos dulces a tiendas latinas en Estados Unidos", en: "Export its same candies to Latino stores in the United States" }, correctCategoryId: 'EMP-16-E1-c2' },
      { id: 'EMP-16-E1-i3', label: { es: "Lanzar una versión sin azúcar para sus distribuidores actuales", en: "Launch a sugar-free version for its current distributors" }, correctCategoryId: 'EMP-16-E1-c3' },
      { id: 'EMP-16-E1-i4', label: { es: "Abrir una línea de cosméticos para hoteles de playa", en: "Open a cosmetics line for beach hotels" }, correctCategoryId: 'EMP-16-E1-c4' },
      { id: 'EMP-16-E1-i5', label: { es: "Vender sus dulces de siempre a escuelas de otro estado", en: "Sell its usual candies to schools in another state" }, correctCategoryId: 'EMP-16-E1-c2' },
      { id: 'EMP-16-E1-i6', label: { es: "Hacer una campaña para que sus clientes actuales compren más seguido", en: "Run a campaign so its current customers buy more often" }, correctCategoryId: 'EMP-16-E1-c1' },
    ],
    explanation: {
      es: "Penetración: mismos dulces, mismos clientes (descuento por volumen, campaña). Desarrollo de mercado: mismos dulces, clientes nuevos (exportar, escuelas de otro estado). Desarrollo de producto: dulce nuevo para clientes actuales (sin azúcar). Diversificación: producto y mercado nuevos (cosméticos para hoteles). Error común: poner la exportación en diversificación; el producto es el mismo, solo cambia el mercado.",
      en: "Penetration: same candies, same customers (volume discount, campaign). Market development: same candies, new customers (export, schools in another state). Product development: new candy for current customers (sugar-free). Diversification: new product and market (cosmetics for hotels). Common mistake: putting the export under diversification; the product is the same, only the market changes.",
    },
    difficulty: 2,
    points: 15,
    competency: 'growth-strategy',
  },
  {
    id: 'EMP-16-E2',
    level: 1,
    module: 'EMP-16',
    kind: 'mcq',
    flavor: 'concept',
    prompt: {
      es: "¿Cuál de estas acciones es un ejemplo de crecimiento inorgánico?",
      en: "Which of these actions is an example of inorganic growth?",
    },
    options: [
      { id: 'EMP-16-E2-a', text: { es: "Abrir una nueva sucursal pagada con las utilidades del negocio", en: "Open a new branch paid for with the business's profits" } },
      { id: 'EMP-16-E2-b', text: { es: "Contratar a dos vendedores más para visitar clientes", en: "Hire two more salespeople to visit customers" } },
      { id: 'EMP-16-E2-c', text: { es: "Comprar una panadería de la competencia con todo y clientes", en: "Buy a competing bakery, customers and all" } },
      { id: 'EMP-16-E2-d', text: { es: "Lanzar un nuevo sabor de pan dulce", en: "Launch a new flavor of sweet bread" } },
    ],
    correctOptionId: 'EMP-16-E2-c',
    explanation: {
      es: "Comprar otra empresa (adquisición) es crecimiento inorgánico: creces apoyándote en un negocio que ya existe. Las demás opciones usan recursos propios: son orgánicas. Error común: pensar que abrir una sucursal es inorgánico por ser un paso grande; lo que importa es si creces solo o mediante otras empresas.",
      en: "Buying another company (acquisition) is inorganic growth: you grow by relying on a business that already exists. The other options use your own resources: they are organic. Common mistake: thinking opening a branch is inorganic because it is a big step; what matters is whether you grow alone or through other companies.",
    },
    difficulty: 1,
    points: 10,
    competency: 'growth-strategy',
  },
  {
    id: 'EMP-16-E3',
    level: 1,
    module: 'EMP-16',
    kind: 'numeric',
    flavor: 'case',
    context: {
      es: "Una agencia de viajes vendió $850,000 el año pasado y $1,020,000 este año.",
      en: "A travel agency sold $850,000 last year and $1,020,000 this year.",
    },
    prompt: {
      es: "¿Cuál fue la tasa de crecimiento anual de las ventas de la agencia, en porcentaje?",
      en: "What was the agency's annual sales growth rate, as a percentage?",
    },
    answer: 20,
    unit: '%',
    decimals: 1,
    tolerance: { abs: 0.05 },
    explanation: {
      es: "(1,020,000 − 850,000) ÷ 850,000 × 100 = 170,000 ÷ 850,000 × 100 = 20%. Error común: dividir entre las ventas de este año (170,000 ÷ 1,020,000 ≈ 16.7%); el crecimiento se mide contra el periodo anterior.",
      en: "(1,020,000 − 850,000) ÷ 850,000 × 100 = 170,000 ÷ 850,000 × 100 = 20%. Common mistake: dividing by this year's sales (170,000 ÷ 1,020,000 ≈ 16.7%); growth is measured against the previous period.",
    },
    difficulty: 1,
    points: 10,
    competency: 'growth-strategy',
  },
  {
    id: 'EMP-16-E4',
    level: 1,
    module: 'EMP-16',
    kind: 'truefalse',
    flavor: 'concept',
    prompt: {
      es: "En la matriz de Ansoff, la diversificación es la estrategia de menor riesgo porque reparte el negocio en varios mercados.",
      en: "On the Ansoff matrix, diversification is the lowest-risk strategy because it spreads the business across several markets.",
    },
    answer: false,
    explanation: {
      es: "Falso. La diversificación combina producto nuevo y mercado nuevo: es la de **mayor** riesgo, porque la empresa conoce poco de ambos. La de menor riesgo es la penetración de mercado. Error común: confundirla con la diversificación de un portafolio de inversión, donde repartir sí reduce el riesgo.",
      en: "False. Diversification combines a new product and a new market: it is the **highest**-risk strategy, because the company knows little about either. The lowest-risk one is market penetration. Common mistake: confusing it with diversifying an investment portfolio, where spreading out does reduce risk.",
    },
    difficulty: 1,
    points: 10,
    competency: 'growth-strategy',
  },
  {
    id: 'EMP-16-E5',
    level: 1,
    module: 'EMP-16',
    kind: 'multi',
    flavor: 'concept',
    prompt: {
      es: "Una empresa de limpieza duplicó sus contratos en seis meses. ¿Qué riesgos típicos de crecer demasiado rápido debe vigilar? Selecciona todos los que apliquen.",
      en: "A cleaning company doubled its contracts in six months. Which typical risks of growing too fast should it watch? Select all that apply.",
    },
    options: [
      { id: 'EMP-16-E5-a', text: { es: "Quedarse sin efectivo por pagar sueldos e insumos antes de cobrar", en: "Running out of cash by paying wages and supplies before collecting" } },
      { id: 'EMP-16-E5-b', text: { es: "Bajar la calidad del servicio porque el equipo no da abasto", en: "Service quality dropping because the team cannot keep up" } },
      { id: 'EMP-16-E5-c', text: { es: "Que las ventas mayores garanticen por sí solas más efectivo disponible", en: "Higher sales guaranteeing more available cash on their own" } },
      { id: 'EMP-16-E5-d', text: { es: "Contratar personal sin capacitación suficiente", en: "Hiring staff without enough training" } },
    ],
    correctOptionIds: ['EMP-16-E5-a', 'EMP-16-E5-b', 'EMP-16-E5-d'],
    explanation: {
      es: "Crecer consume caja (pagas antes de cobrar) y presiona la calidad y la capacitación. Error común: creer que vender más siempre da más efectivo; si cobras a 30 o 60 días y pagas sueldos cada quincena, el crecimiento puede dejarte sin dinero.",
      en: "Growth consumes cash (you pay before collecting) and strains quality and training. Common mistake: believing more sales always mean more cash; if you collect at 30 or 60 days and pay wages every two weeks, growth can leave you without money.",
    },
    difficulty: 1,
    points: 10,
    competency: 'growth-strategy',
  },
  {
    id: 'EMP-16-E6',
    level: 1,
    module: 'EMP-16',
    kind: 'fields',
    flavor: 'case',
    context: {
      es: "Una marca de ropa deportiva vendió $600,000 en el año 1, $690,000 en el año 2 y $828,000 en el año 3, tras abrir una tienda en línea.",
      en: "A sportswear brand sold $600,000 in year 1, $690,000 in year 2 and $828,000 in year 3, after opening an online store.",
    },
    prompt: {
      es: "Analiza el crecimiento de la marca de ropa deportiva: completa los tres datos.",
      en: "Analyze the sportswear brand's growth: complete the three figures.",
    },
    fields: [
      { id: 'f1', label: { es: "Crecimiento del año 2 (%)", en: "Year 2 growth (%)" }, answer: 15, unit: '%', tolerance: { abs: 0.05 } },
      { id: 'f2', label: { es: "Aumento de ventas del año 3 en pesos ($)", en: "Year 3 sales increase in pesos ($)" }, answer: 138000, unit: 'MXN', tolerance: { abs: 0.5 } },
      { id: 'f3', label: { es: "Crecimiento del año 3 (%)", en: "Year 3 growth (%)" }, answer: 20, unit: '%', tolerance: { abs: 0.05 } },
    ],
    explanation: {
      es: "Año 2: (690,000 − 600,000) ÷ 600,000 × 100 = 15%. Aumento del año 3: 828,000 − 690,000 = $138,000. Año 3: 138,000 ÷ 690,000 × 100 = 20%. Error común: calcular el año 3 contra el año 1 (228,000 ÷ 600,000 = 38%); cada tasa anual se mide contra el año inmediato anterior.",
      en: "Year 2: (690,000 − 600,000) ÷ 600,000 × 100 = 15%. Year 3 increase: 828,000 − 690,000 = $138,000. Year 3: 138,000 ÷ 690,000 × 100 = 20%. Common mistake: computing year 3 against year 1 (228,000 ÷ 600,000 = 38%); each annual rate is measured against the immediately preceding year.",
    },
    difficulty: 2,
    points: 20,
    competency: 'growth-strategy',
  },

  // ───────────────────────────── EMP-17 ─────────────────────────────
  {
    id: 'EMP-17-E1',
    level: 1,
    module: 'EMP-17',
    kind: 'mcq',
    flavor: 'concept',
    prompt: {
      es: "¿Cuál de estos negocios es el más escalable?",
      en: "Which of these businesses is the most scalable?",
    },
    options: [
      { id: 'EMP-17-E1-a', text: { es: "Un despacho donde el dueño revisa personalmente cada declaración de sus clientes", en: "A firm where the owner personally reviews every client's tax return" } },
      { id: 'EMP-17-E1-b', text: { es: "Una app de recetas por suscripción, donde cada usuario nuevo casi no agrega costo", en: "A subscription recipe app, where each new user adds almost no cost" } },
      { id: 'EMP-17-E1-c', text: { es: "Un restaurante de autor con un chef que cocina cada platillo", en: "A signature restaurant with a chef who cooks every dish" } },
      { id: 'EMP-17-E1-d', text: { es: "Un servicio de jardinería donde cada cliente nuevo requiere un jardinero más", en: "A gardening service where each new customer requires another gardener" } },
    ],
    correctOptionId: 'EMP-17-E1-b',
    explanation: {
      es: "La app tiene costo marginal casi nulo: sus costos fijos se reparten entre más usuarios y la ganancia crece más rápido que las ventas. Error común: elegir la jardinería porque 'puede crecer'; crecer sí, pero cada cliente exige un costo proporcional, así que no escala.",
      en: "The app has an almost zero marginal cost: its fixed costs are spread over more users and profit grows faster than sales. Common mistake: choosing gardening because 'it can grow'; it can, but each customer requires a proportional cost, so it does not scale.",
    },
    difficulty: 1,
    points: 10,
    competency: 'scalability',
  },
  {
    id: 'EMP-17-E2',
    level: 1,
    module: 'EMP-17',
    kind: 'truefalse',
    flavor: 'concept',
    prompt: {
      es: "Si un negocio pierde dinero en cada cliente, escalarlo rápido con mucha publicidad hará que se vuelva rentable.",
      en: "If a business loses money on each customer, scaling it quickly with lots of advertising will make it profitable.",
    },
    answer: false,
    explanation: {
      es: "Falso. Si cada cliente deja pérdida (LTV menor que CAC o margen negativo), más clientes significan más pérdidas. Primero hay que arreglar la economía por cliente y luego escalar. Error común: creer que el volumen arregla un modelo que no funciona.",
      en: "False. If each customer generates a loss (LTV below CAC or a negative margin), more customers mean more losses. First fix the per-customer economics, then scale. Common mistake: believing volume fixes a model that does not work.",
    },
    difficulty: 1,
    points: 10,
    competency: 'scalability',
  },
  {
    id: 'EMP-17-E3',
    level: 1,
    module: 'EMP-17',
    kind: 'numeric',
    flavor: 'case',
    context: {
      es: "Un software para administrar talleres mecánicos cobra $300 al mes por cliente con un margen de 70%. En promedio, cada taller se queda 15 meses.",
      en: "A software for managing auto repair shops charges $300 per month per customer with a 70% margin. On average, each shop stays 15 months.",
    },
    prompt: {
      es: "¿Cuál es el valor de vida del cliente (LTV) del software para talleres? Responde en pesos.",
      en: "What is the customer lifetime value (LTV) of the repair-shop software? Answer in pesos.",
    },
    answer: 3150,
    unit: 'MXN',
    decimals: 0,
    tolerance: { abs: 0.5 },
    explanation: {
      es: "LTV = 300 × 70% × 15 = 210 × 15 = $3,150. Error común: olvidar el margen y responder 300 × 15 = $4,500; el LTV mide lo que el cliente te deja después de costos, no lo que te paga.",
      en: "LTV = 300 × 70% × 15 = 210 × 15 = $3,150. Common mistake: forgetting the margin and answering 300 × 15 = $4,500; LTV measures what the customer leaves you after costs, not what they pay you.",
    },
    difficulty: 1,
    points: 10,
    competency: 'scalability',
  },
  {
    id: 'EMP-17-E4',
    level: 1,
    module: 'EMP-17',
    kind: 'fields',
    flavor: 'case',
    context: {
      es: "Una plataforma de clases de yoga en línea cobra $100 al mes por usuario. Cada usuario le cuesta $20 al mes (cobro y almacenamiento de video) y tiene costos fijos de $50,000 al mes.",
      en: "An online yoga class platform charges $100 per month per user. Each user costs it $20 per month (payment processing and video storage) and it has fixed costs of $50,000 per month.",
    },
    prompt: {
      es: "Mide el efecto de escala de la plataforma de yoga: completa los tres datos.",
      en: "Measure the yoga platform's scale effect: complete the three figures.",
    },
    fields: [
      { id: 'f1', label: { es: "Utilidad mensual con 500 usuarios ($)", en: "Monthly profit with 500 users ($)" }, answer: -10000, unit: 'MXN', tolerance: { abs: 0.5 } },
      { id: 'f2', label: { es: "Utilidad mensual con 2,000 usuarios ($)", en: "Monthly profit with 2,000 users ($)" }, answer: 110000, unit: 'MXN', tolerance: { abs: 0.5 } },
      { id: 'f3', label: { es: "Costo total promedio por usuario con 2,000 usuarios ($)", en: "Average total cost per user with 2,000 users ($)" }, answer: 45, unit: 'MXN', tolerance: { abs: 0.01 } },
    ],
    explanation: {
      es: "Con 500: 500 × (100 − 20) − 50,000 = 40,000 − 50,000 = −$10,000. Con 2,000: 2,000 × 80 − 50,000 = $110,000. Costo promedio con 2,000: (50,000 + 2,000 × 20) ÷ 2,000 = 90,000 ÷ 2,000 = $45. Al repartir los fijos entre más usuarios, el costo por usuario baja: eso es escala. Error común: olvidar los costos fijos y responder $40,000 de utilidad con 500 usuarios.",
      en: "With 500: 500 × (100 − 20) − 50,000 = 40,000 − 50,000 = −$10,000. With 2,000: 2,000 × 80 − 50,000 = $110,000. Average cost with 2,000: (50,000 + 2,000 × 20) ÷ 2,000 = 90,000 ÷ 2,000 = $45. Spreading fixed costs over more users lowers the cost per user: that is scale. Common mistake: forgetting the fixed costs and answering a $40,000 profit with 500 users.",
    },
    difficulty: 2,
    points: 20,
    competency: 'scalability',
  },
  {
    id: 'EMP-17-E5',
    level: 1,
    module: 'EMP-17',
    kind: 'multi',
    flavor: 'concept',
    prompt: {
      es: "¿Qué señales indican que una pastelería está lista para escalar a varias sucursales? Selecciona todas las que apliquen.",
      en: "Which signs indicate a cake shop is ready to scale to several branches? Select all that apply.",
    },
    options: [
      { id: 'EMP-17-E5-a', text: { es: "Sus recetas y procesos están documentados y otros los repiten con la misma calidad", en: "Its recipes and processes are documented and others repeat them with the same quality" } },
      { id: 'EMP-17-E5-b', text: { es: "La dueña todavía decora personalmente cada pastel", en: "The owner still personally decorates every cake" } },
      { id: 'EMP-17-E5-c', text: { es: "Cada cliente deja margen positivo y el LTV supera claramente al CAC", en: "Each customer leaves a positive margin and LTV clearly exceeds CAC" } },
      { id: 'EMP-17-E5-d', text: { es: "Los pedidos y el inventario se manejan con un sistema que no depende de una sola persona", en: "Orders and inventory are handled with a system that does not depend on a single person" } },
    ],
    correctOptionIds: ['EMP-17-E5-a', 'EMP-17-E5-c', 'EMP-17-E5-d'],
    explanation: {
      es: "Procesos documentados, economía por cliente sana y sistemas que no dependen de una persona permiten replicar sin perder calidad ni dinero. Error común: ignorar que la dueña decorando todo es un cuello de botella; con varias sucursales, ella sola no alcanza.",
      en: "Documented processes, healthy per-customer economics and systems that do not depend on one person allow replicating without losing quality or money. Common mistake: ignoring that the owner decorating everything is a bottleneck; with several branches, she alone cannot keep up.",
    },
    difficulty: 1,
    points: 10,
    competency: 'scalability',
  },
  {
    id: 'EMP-17-E6',
    level: 1,
    module: 'EMP-17',
    kind: 'mcq',
    flavor: 'case',
    context: {
      es: "Una app de entrega de flores gastó $60,000 en anuncios el mes pasado y consiguió 50 clientes nuevos. Cada cliente deja en promedio $900 de margen durante todo el tiempo que compra en la app.",
      en: "A flower delivery app spent $60,000 on ads last month and won 50 new customers. Each customer leaves on average $900 of margin during the whole time they buy on the app.",
    },
    prompt: {
      es: "¿Qué conclusión es correcta sobre escalar la publicidad de la app de flores?",
      en: "Which conclusion about scaling the flower app's advertising is correct?",
    },
    options: [
      { id: 'EMP-17-E6-a', text: { es: "Debe duplicar la publicidad: más clientes siempre significan más ganancia", en: "It should double advertising: more customers always mean more profit" } },
      { id: 'EMP-17-E6-b', text: { es: "Está bien, porque el LTV es 1.5 veces el CAC", en: "It is fine, because LTV is 1.5 times CAC" } },
      { id: 'EMP-17-E6-c', text: { es: "Con un CAC de $1,200 y un LTV de $900, pierde $300 por cliente: debe bajar el CAC o subir el LTV antes de escalar", en: "With a $1,200 CAC and a $900 LTV, it loses $300 per customer: it should lower CAC or raise LTV before scaling" } },
      { id: 'EMP-17-E6-d', text: { es: "No se puede concluir nada sin conocer el número de empleados", en: "Nothing can be concluded without knowing the number of employees" } },
    ],
    correctOptionId: 'EMP-17-E6-c',
    explanation: {
      es: "CAC = 60,000 ÷ 50 = $1,200, mayor que el LTV de $900: cada cliente nuevo deja una pérdida de $300. Escalar así multiplica pérdidas. Error común: intercambiar los números (tomar $1,200 como LTV y $900 como CAC) y concluir que todo va bien.",
      en: "CAC = 60,000 ÷ 50 = $1,200, higher than the $900 LTV: each new customer brings a $300 loss. Scaling like this multiplies losses. Common mistake: swapping the numbers (taking $1,200 as LTV and $900 as CAC) and concluding everything is fine.",
    },
    difficulty: 2,
    points: 15,
    competency: 'scalability',
  },

  // ───────────────────────────── EMP-18 ─────────────────────────────
  {
    id: 'EMP-18-E1',
    level: 1,
    module: 'EMP-18',
    kind: 'mcq',
    flavor: 'concept',
    prompt: {
      es: "¿Qué recibe normalmente un fondo de venture capital a cambio del dinero que invierte en una startup?",
      en: "What does a venture capital fund normally receive in exchange for the money it invests in a startup?",
    },
    options: [
      { id: 'EMP-18-E1-a', text: { es: "Pagos mensuales fijos de capital e intereses", en: "Fixed monthly payments of principal and interest" } },
      { id: 'EMP-18-E1-b', text: { es: "Una participación (porcentaje) en la propiedad de la empresa", en: "An ownership stake (percentage) in the company" } },
      { id: 'EMP-18-E1-c', text: { es: "Una garantía hipotecaria sobre la casa de los fundadores", en: "A mortgage guarantee on the founders' house" } },
      { id: 'EMP-18-E1-d', text: { es: "Un descuento permanente en los productos de la startup", en: "A permanent discount on the startup's products" } },
    ],
    correctOptionId: 'EMP-18-E1-b',
    explanation: {
      es: "El VC invierte capital (equity): recibe un porcentaje de la empresa y gana si esta vale mucho más al momento de la salida. Error común: confundirlo con un crédito; el VC no cobra pagos fijos ni se le devuelve el dinero si la empresa fracasa.",
      en: "VC invests equity: it receives a percentage of the company and profits if it is worth much more at exit. Common mistake: confusing it with a loan; VC does not collect fixed payments and does not get its money back if the company fails.",
    },
    difficulty: 1,
    points: 10,
    competency: 'venture-capital',
  },
  {
    id: 'EMP-18-E2',
    level: 1,
    module: 'EMP-18',
    kind: 'numeric',
    flavor: 'case',
    context: {
      es: "Una startup de energía solar para casas recibe una oferta: un fondo invertiría $3 millones con una valuación pre-money de $9 millones.",
      en: "A home solar energy startup receives an offer: a fund would invest $3 million at a pre-money valuation of $9 million.",
    },
    prompt: {
      es: "¿Qué porcentaje de la startup solar recibiría el fondo?",
      en: "What percentage of the solar startup would the fund receive?",
    },
    answer: 25,
    unit: '%',
    decimals: 1,
    tolerance: { abs: 0.05 },
    explanation: {
      es: "Post-money = 9 + 3 = $12 millones. % del fondo = 3 ÷ 12 × 100 = 25%. Error común: dividir entre la pre-money (3 ÷ 9 ≈ 33.3%); la inversión se compara con el valor de la empresa ya con el dinero dentro.",
      en: "Post-money = 9 + 3 = $12 million. Fund's % = 3 ÷ 12 × 100 = 25%. Common mistake: dividing by the pre-money (3 ÷ 9 ≈ 33.3%); the investment is compared with the company's value with the money already in.",
    },
    difficulty: 1,
    points: 10,
    competency: 'venture-capital',
  },
  {
    id: 'EMP-18-E3',
    level: 1,
    module: 'EMP-18',
    kind: 'classify',
    flavor: 'concept',
    prompt: {
      es: "Clasifica cada fuente de dinero de una startup según si los fundadores ceden o no una parte de la empresa.",
      en: "Classify each source of startup money by whether the founders give up part of the company or not.",
    },
    categories: [
      { id: 'EMP-18-E3-c1', label: { es: "Cede participación (capital)", en: "Gives up a stake (equity)" } },
      { id: 'EMP-18-E3-c2', label: { es: "No cede participación", en: "Does not give up a stake" } },
    ],
    items: [
      { id: 'EMP-18-E3-i1', label: { es: "Un inversionista ángel aporta $500,000 a cambio de 10%", en: "An angel investor contributes $500,000 in exchange for 10%" }, correctCategoryId: 'EMP-18-E3-c1' },
      { id: 'EMP-18-E3-i2', label: { es: "Un crédito bancario a 3 años con intereses", en: "A 3-year bank loan with interest" }, correctCategoryId: 'EMP-18-E3-c2' },
      { id: 'EMP-18-E3-i3', label: { es: "Reinvertir las utilidades del propio negocio", en: "Reinvesting the business's own profits" }, correctCategoryId: 'EMP-18-E3-c2' },
      { id: 'EMP-18-E3-i4', label: { es: "Una ronda Serie A de un fondo de venture capital", en: "A Series A round from a venture capital fund" }, correctCategoryId: 'EMP-18-E3-c1' },
      { id: 'EMP-18-E3-i5', label: { es: "Una aceleradora que invierte a cambio de 6% de las acciones", en: "An accelerator that invests in exchange for 6% of the shares" }, correctCategoryId: 'EMP-18-E3-c1' },
      { id: 'EMP-18-E3-i6', label: { es: "Un préstamo de una tía con un pagaré a 12 meses", en: "A loan from an aunt with a 12-month promissory note" }, correctCategoryId: 'EMP-18-E3-c2' },
    ],
    explanation: {
      es: "Ángel, aceleradora y VC dan dinero a cambio de un porcentaje: capital. Crédito bancario y préstamo con pagaré son deuda (se devuelven con intereses) y reinvertir utilidades usa recursos propios: no ceden participación. Error común: pensar que el dinero de familia siempre es capital; depende de lo que se pacte, y un pagaré es deuda.",
      en: "Angel, accelerator and VC provide money in exchange for a percentage: equity. The bank loan and the promissory note are debt (repaid with interest) and reinvesting profits uses own resources: they do not give up a stake. Common mistake: thinking family money is always equity; it depends on the agreement, and a promissory note is debt.",
    },
    difficulty: 1,
    points: 10,
    competency: 'venture-capital',
  },
  {
    id: 'EMP-18-E4',
    level: 1,
    module: 'EMP-18',
    kind: 'truefalse',
    flavor: 'concept',
    prompt: {
      es: "Una tlapalería de barrio rentable que crece 5% al año es un candidato ideal para levantar venture capital.",
      en: "A profitable neighborhood hardware store growing 5% a year is an ideal candidate to raise venture capital.",
    },
    answer: false,
    explanation: {
      es: "Falso. Puede ser un gran negocio, pero el VC busca mercados enormes, crecimiento muy acelerado y una salida que multiplique muchas veces la inversión. Para la tlapalería encajan mejor el crédito o reinvertir utilidades. Error común: pensar que el VC es la meta de cualquier negocio rentable.",
      en: "False. It can be a great business, but VC looks for huge markets, very fast growth and an exit that multiplies the investment many times over. For the hardware store, credit or reinvesting profits fit better. Common mistake: thinking VC is the goal of every profitable business.",
    },
    difficulty: 1,
    points: 10,
    competency: 'venture-capital',
  },
  {
    id: 'EMP-18-E5',
    level: 1,
    module: 'EMP-18',
    kind: 'fields',
    flavor: 'case',
    context: {
      es: "Los fundadores de una startup de educación en línea tienen 100%. En la ronda semilla, un fondo invierte $1.5 millones con pre-money de $6 millones. Un año después, en la Serie A, otro fondo invierte $7.5 millones con pre-money de $22.5 millones.",
      en: "The founders of an online education startup own 100%. In the seed round, a fund invests $1.5 million at a $6 million pre-money. A year later, in Series A, another fund invests $7.5 million at a $22.5 million pre-money.",
    },
    prompt: {
      es: "Sigue la dilución de los fundadores de la startup educativa: completa los tres datos.",
      en: "Track the education startup founders' dilution: complete the three figures.",
    },
    fields: [
      { id: 'f1', label: { es: "Valuación post-money de la ronda semilla ($)", en: "Seed round post-money valuation ($)" }, answer: 7500000, unit: 'MXN', tolerance: { abs: 0.5 } },
      { id: 'f2', label: { es: "Participación de los fundadores después de la semilla (%)", en: "Founders' stake after the seed round (%)" }, answer: 80, unit: '%', tolerance: { abs: 0.05 } },
      { id: 'f3', label: { es: "Participación de los fundadores después de la Serie A (%)", en: "Founders' stake after Series A (%)" }, answer: 60, unit: '%', tolerance: { abs: 0.05 } },
    ],
    explanation: {
      es: "Semilla: post-money = 6 + 1.5 = $7.5 M; el fondo toma 1.5 ÷ 7.5 = 20%, así que los fundadores quedan con 80%. Serie A: post-money = 22.5 + 7.5 = $30 M; el nuevo fondo toma 7.5 ÷ 30 = 25%; fundadores: 80% × (1 − 25%) = 60%. Error común: restar porcentajes (80% − 25% = 55%); la dilución se aplica multiplicando sobre lo que ya se tenía.",
      en: "Seed: post-money = 6 + 1.5 = $7.5 M; the fund takes 1.5 ÷ 7.5 = 20%, so the founders keep 80%. Series A: post-money = 22.5 + 7.5 = $30 M; the new fund takes 7.5 ÷ 30 = 25%; founders: 80% × (1 − 25%) = 60%. Common mistake: subtracting percentages (80% − 25% = 55%); dilution is applied by multiplying on what was already held.",
    },
    difficulty: 2,
    points: 20,
    competency: 'venture-capital',
  },
  {
    id: 'EMP-18-E6',
    level: 1,
    module: 'EMP-18',
    kind: 'formula',
    flavor: 'concept',
    prompt: {
      es: "Completa la fórmula para calcular qué porcentaje de una startup recibe un inversionista en una ronda.",
      en: "Complete the formula to compute what percentage of a startup an investor receives in a round.",
    },
    template: '{{b1}} = {{b2}} ÷ {{b3}} × 100',
    blanks: [
      {
        id: 'b1',
        options: [
          { id: 'EMP-18-E6-b1-a', text: { es: "Valuación pre-money", en: "Pre-money valuation" } },
          { id: 'EMP-18-E6-b1-b', text: { es: "% del inversionista", en: "Investor's %" } },
          { id: 'EMP-18-E6-b1-c', text: { es: "Tasa de interés", en: "Interest rate" } },
        ],
        correctOptionId: 'EMP-18-E6-b1-b',
      },
      {
        id: 'b2',
        options: [
          { id: 'EMP-18-E6-b2-a', text: { es: "Monto de la inversión", en: "Investment amount" } },
          { id: 'EMP-18-E6-b2-b', text: { es: "Ventas anuales", en: "Annual sales" } },
          { id: 'EMP-18-E6-b2-c', text: { es: "Número de fundadores", en: "Number of founders" } },
        ],
        correctOptionId: 'EMP-18-E6-b2-a',
      },
      {
        id: 'b3',
        options: [
          { id: 'EMP-18-E6-b3-a', text: { es: "Valuación pre-money", en: "Pre-money valuation" } },
          { id: 'EMP-18-E6-b3-b', text: { es: "Valuación post-money", en: "Post-money valuation" } },
          { id: 'EMP-18-E6-b3-c', text: { es: "Utilidad neta", en: "Net profit" } },
        ],
        correctOptionId: 'EMP-18-E6-b3-b',
      },
    ],
    explanation: {
      es: "% del inversionista = inversión ÷ valuación post-money × 100, porque después de la ronda la empresa vale la pre-money más el dinero nuevo. Error común: dividir entre la pre-money, lo que exagera el porcentaje que se cede.",
      en: "Investor's % = investment ÷ post-money valuation × 100, because after the round the company is worth the pre-money plus the new money. Common mistake: dividing by the pre-money, which overstates the percentage given up.",
    },
    difficulty: 1,
    points: 10,
    competency: 'venture-capital',
  },
]
