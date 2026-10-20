import type { InteractiveLesson } from './types'

export const intL602: InteractiveLesson = {
  lessonId: 'L6-02',
  sections: [
    // Proyectar los próximos años
    [
      { text: 'Carmen tiene la cadena de panaderías **La Espiga** 🥐 y quiere saber cuánto vale. Primero necesita **proyectar**: estimar sus números de los próximos años.' },
      { text: 'Proyectar parte de pocos supuestos llamados **impulsores (drivers)**, por ejemplo: «las ventas crecerán 10 % al año». Ese supuesto mueve todo lo demás.' },
      {
        ask: 'La Espiga vende $1,000,000 hoy (año 0) y crecerá 10 % al año. ¿Cuánto venderá en el año 2?',
        options: [
          { text: '$1,210,000', ok: true, reply: '¡Sí! Año 1: 1,000,000 × 1.10 = 1,100,000. Año 2 crece sobre eso: 1,100,000 × 1.10 = **1,210,000**. Es crecimiento **compuesto**.' },
          { text: '$1,200,000', reply: 'Eso suma 10 % + 10 % sobre el año 0 (crecimiento simple). Pero el año 2 crece sobre el año 1, ya crecido: **$1,210,000**.' },
          { text: '$1,100,000', reply: 'Eso es solo el año 1. El año 2 vuelve a crecer 10 %: 1,100,000 × 1.10 = **$1,210,000**.' },
        ],
      },
      { text: '📈 **Ventas del año n** = ventas de hoy × (1 + g)ⁿ.\ng es el crecimiento en decimal (10 % = 0.10). Igual que los intereses de una cuenta de ahorro.' },
      {
        calc: {
          question: 'Con las mismas ventas de $1,000,000 y 10 % de crecimiento, ¿cuánto venderá La Espiga en el año 3?',
          answer: 1331000,
          hint: '1.10 × 1.10 × 1.10 = 1.331. Multiplica por 1,000,000.',
          why: '1.1³ = 1.331 → 1,000,000 × 1.331 = **$1,331,000**. Con crecimiento simple (× 1.30) te daría $1,300,000.',
        },
      },
      { text: 'En un **modelo integrado** los tres estados (resultados, balance y flujo de efectivo) están conectados: si cambias un supuesto, todo se mueve junto y el balance debe cuadrar.' },
      {
        match: {
          title: 'Une cada dato con a dónde va en el modelo',
          pairs: [
            ['Utilidad neta', 'Aumenta las utilidades retenidas del balance'],
            ['Depreciación', 'Baja el activo fijo y se suma en el flujo de operación'],
            ['Efectivo final del flujo', 'Es igual al efectivo del balance'],
            ['CapEx (compra de hornos)', 'Va al activo fijo, no es gasto del año'],
          ],
        },
      },
      {
        multi: {
          title: 'Carmen revisa su modelo. Marca los vínculos correctos',
          items: [
            { text: 'La utilidad neta aumenta las utilidades retenidas', ok: true },
            { text: 'El efectivo final del flujo coincide con el efectivo del balance', ok: true },
            { text: 'El horno nuevo (CapEx) se registra como gasto del año', ok: false },
            { text: 'Los dividendos se restan como gasto para llegar a la utilidad neta', ok: false },
          ],
          why: 'El CapEx va al **activo fijo** (actividades de inversión). Los dividendos son reparto de utilidades: bajan las **utilidades retenidas**, no son gasto.',
        },
      },
    ],
    // ¿Cuánto dinero libre deja?
    [
      { text: 'Para valuar La Espiga, Carmen necesita saber cuánto **dinero libre** genera cada año: lo que podría repartirse entre bancos y dueños **sin frenar la operación**.' },
      { text: 'Eso es el **flujo libre de efectivo de la empresa (FCFF)**:\n1️⃣ Utilidad de operación (EBIT) × (1 − impuestos)\n2️⃣ ➕ depreciación y amortización (D&A)\n3️⃣ ➖ CapEx (inversión en equipo)\n4️⃣ ➖ aumento de capital de trabajo' },
      {
        ask: '¿Por qué se **suma** la depreciación?',
        options: [
          { text: 'Porque es un gasto en papel: no sale dinero de la caja', ok: true, reply: '¡Exacto! Bajó la utilidad, pero el dinero no salió. Por eso se regresa.' },
          { text: 'Porque es un ingreso extra', reply: 'No es ingreso. Es un gasto **en papel**: reduce la utilidad, pero no sale dinero. Por eso se suma de regreso.' },
          { text: 'Porque así lo pide el banco', reply: 'No es por el banco. Se suma porque es un gasto **en papel**: no sale dinero de la caja.' },
        ],
      },
      {
        sort: {
          title: 'En el FCFF, ¿qué pasa con cada cosa?',
          buckets: ['Se suma', 'Se resta', 'No entra'],
          items: [
            { text: 'Depreciación y amortización', bucket: 0, why: 'Es gasto en papel: se regresa.' },
            { text: 'CapEx: un horno nuevo', bucket: 1, why: 'Es dinero que sí sale para invertir.' },
            { text: 'Aumento de capital de trabajo (más inventario y clientes)', bucket: 1, why: 'Es dinero que queda atrapado en la operación.' },
            { text: 'Intereses del préstamo', bucket: 2, why: 'El FCFF es antes de pagarle a bancos y dueños. El costo de la deuda va en el WACC.' },
            { text: 'Dividendos a los dueños', bucket: 2, why: 'También es un pago a los dueños: el FCFF es antes de pagarles.' },
          ],
        },
      },
      {
        calc: {
          question: 'La Espiga tiene EBIT de $100,000, impuestos de 30 %, D&A de $10,000, CapEx de $20,000, aumento de capital de trabajo de $5,000 e intereses de $8,000. ¿Cuál es su FCFF?',
          answer: 55000,
          hint: '100,000 × 0.70 = 70,000. Luego + 10,000 − 20,000 − 5,000. Los intereses no entran.',
          why: '70,000 + 10,000 − 20,000 − 5,000 = **$55,000**. Si restas los intereses ($8,000) te daría 47,000: es el error más común.',
        },
      },
      {
        order: {
          title: 'Arma el FCFF en orden',
          steps: ['EBIT × (1 − impuestos)', '➕ depreciación y amortización', '➖ CapEx', '➖ aumento de capital de trabajo'],
          done: '¡Eso! Ese flujo se descuenta al **WACC**, el costo promedio del dinero de bancos y dueños juntos.',
        },
      },
    ],
    // ¿Y todo lo que viene después?
    [
      { text: 'Carmen proyecta 5 años. Pero La Espiga seguirá horneando después… No puede proyectar año por año **para siempre**.' },
      { text: '⏳ **Descontar** es traer dinero futuro a pesos de hoy: $100 dentro de un año valen menos que $100 hoy, porque hoy podrías invertirlos.\n🧺 El **valor terminal** resume «todo lo que sigue» en un solo número.' },
      { text: '**Modelo de Gordon:**\nValor terminal = flujo del año siguiente ÷ (WACC − g)\ng = crecimiento constante para siempre. Flujo del año siguiente = último flujo × (1 + g).' },
      {
        calc: {
          question: 'El último FCFF de La Espiga es $100,000. Con g de 2 % y WACC de 10 % (de ejemplo), ¿cuál es el valor terminal?',
          answer: 1275000,
          hint: 'Flujo siguiente: 100,000 × 1.02 = 102,000. Diferencia: 0.10 − 0.02 = 0.08. Divide.',
          why: '102,000 ÷ 0.08 = **$1,275,000**. Es valor al cierre del último año: todavía hay que descontarlo a hoy.',
        },
      },
      {
        ask: '¿Qué pasa si g es **igual** al WACC (por ejemplo, ambos 10 %)?',
        options: [
          { text: 'El denominador es cero y el resultado no tiene sentido', ok: true, reply: '¡Bien! Gordon solo sirve si **WACC > g**. Con g = WACC divides entre cero; con g mayor, sale negativo.' },
          { text: 'El valor terminal queda igual al flujo', reply: 'No: 0.10 − 0.10 = 0, y no se puede dividir entre cero. Gordon solo sirve si **WACC > g**.' },
          { text: 'Sale un valor más alto, pero correcto', reply: 'Sale infinito, y eso no tiene sentido. Gordon pide **WACC > g**. Además, nada crece para siempre más que la economía.' },
        ],
      },
      {
        rush: {
          title: '¿Se puede usar Gordon?',
          seconds: 30,
          labels: ['✅ Sí sirve', '❌ No sirve'],
          items: [
            { text: 'WACC 10 %, g 3 %', ans: 0 },
            { text: 'WACC 8 %, g 8 %', ans: 1 },
            { text: 'WACC 9 %, g 12 %', ans: 1 },
            { text: 'WACC 12 %, g 2 %', ans: 0 },
            { text: 'WACC 7 %, g 9 %', ans: 1 },
            { text: 'WACC 11 %, g 4 %', ans: 0 },
          ],
        },
      },
      { tip: 'Enterprise Value = flujos descontados + valor terminal descontado (los mismos años que el último flujo). El valor terminal suele pesar más de la mitad.' },
    ],
    // ¿Y si me equivoqué un poquito?
    [
      { text: 'Carmen ya tiene un valor. Su sobrino pregunta: «¿y si el WACC no es 10 % sino 11 %?». Eso es un **análisis de sensibilidad**: cambiar **un supuesto a la vez** y ver qué pasa.' },
      {
        ask: 'Si el WACC sube solo 1 punto, ¿cuánto crees que baja el valor terminal?',
        options: [
          { text: 'Bastante, quizá 10 % o más', ok: true, reply: '¡Sí! Como WACC − g es un número chico, un punto mueve mucho el valor. Pruébalo abajo.' },
          { text: 'Solo 1 %', reply: 'Es el error común: confundir el cambio en la tasa (1 punto) con el cambio en el valor, que suele ser de **10 % o más**.' },
          { text: 'Nada, si el flujo es el mismo', reply: 'Sí cambia: el WACC está en el denominador. Un punto puede bajar el valor **10 % o más**.' },
        ],
      },
      {
        sim: {
          title: 'Valor terminal de La Espiga (flujo del año siguiente: $102,000)',
          inputs: [
            { key: 'w', label: 'WACC de ejemplo (%)', min: 8, max: 14, step: 1, value: 10 },
            { key: 'g', label: 'Crecimiento para siempre g (%)', min: 1, max: 4, step: 1, value: 2 },
          ],
          outputs: [
            { label: 'WACC − g', calc: (v) => v.w - v.g, unit: 'puntos' },
            { label: 'Valor terminal', calc: (v) => Math.round(102000 / ((v.w - v.g) / 100)), main: true },
            { label: 'Cambio contra el caso base ($1,275,000)', calc: (v) => Math.round((8 / (v.w - v.g) - 1) * 1000) / 10, unit: '%' },
          ],
          goal: {
            text: 'Encuentra un caso donde el valor terminal baje **más de 20 %** contra el caso base.',
            check: (v) => 8 / (v.w - v.g) - 1 < -0.2,
            done: 'Con pocos puntos de cambio el valor se movió mucho. Por eso se presenta un **rango**, no un solo número.',
          },
        },
      },
      { text: '⚡ **Atajo con Gordon** (mismo flujo): cambio % = (diferencia vieja ÷ diferencia nueva − 1) × 100, donde diferencia = WACC − g.' },
      {
        calc: {
          question: 'El WACC sube de 10 % a 12 % y g se queda en 2 %. ¿En qué porcentaje cambia el valor terminal? (Si baja, escríbelo con signo menos.)',
          answer: -20,
          unit: '%',
          hint: 'Diferencia vieja: 10 − 2 = 8. Nueva: 12 − 2 = 10. Calcula 8 ÷ 10 − 1.',
          why: '8 ÷ 10 = 0.8; 0.8 − 1 = −0.20 → **−20 %**. Dos puntos de tasa bajaron el valor una quinta parte.',
        },
      },
      {
        sort: {
          title: '¿Sensibilidad o escenario?',
          buckets: ['Sensibilidad (un supuesto a la vez)', 'Escenario (varios a la vez)'],
          items: [
            { text: 'Solo cambiar el WACC de 10 % a 11 %', bucket: 0, why: 'Mueves un solo supuesto.' },
            { text: 'Caso pesimista: bajan las ventas y también el margen', bucket: 1, why: 'Cambian varios supuestos juntos, de forma coherente.' },
            { text: 'Solo cambiar g de 2 % a 3 %', bucket: 0, why: 'Un supuesto a la vez.' },
            { text: 'Caso optimista: suben ventas, margen y crecimiento', bucket: 1, why: 'Es un escenario completo.' },
          ],
        },
      },
      { tip: 'Un DCF es tan bueno como sus supuestos. La tabla más común cruza **WACC × g**.' },
    ],
  ],
}
