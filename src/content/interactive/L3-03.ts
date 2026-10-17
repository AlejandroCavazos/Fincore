import type { InteractiveLesson } from './types'

export const intL303: InteractiveLesson = {
  lessonId: 'L3-03',
  sections: [
    // ¿Cuánto te deja cada venta?
    [
      { text: 'Lupita tiene el food truck **Tortas La Güera** 🥪. Vende cada torta en **$80**; el pan, la carne y el empaque le cuestan **$52** (costo variable).' },
      {
        ask: 'Este mes vendió **1,800 tortas**: $144,000. ¿Eso es lo que ganó?',
        options: [
          { text: 'No: hay que restar los costos variables y luego los fijos', ok: true, reply: '¡Bien! Vender no es lo mismo que ganar. Vamos por partes.' },
          { text: 'Sí: todo lo que entra es ganancia', reply: 'De cada torta, $52 se van en pan, carne y empaque, y luego hay que pagar los fijos. Hay que **restar variables y fijos**.' },
          { text: 'Solo hay que restar los fijos', reply: 'También se van los **$52 variables** de cada torta. Hay que restar variables y fijos.' },
        ],
      },
      { text: 'El **margen de contribución (MC)** es lo que queda del precio después de los variables. Primero «contribuye» a pagar los fijos; lo que sobra es utilidad.\n**Razón de MC** = MC ÷ precio: cuántos centavos de cada peso quedan.' },
      {
        calc: {
          question: '¿Cuánto le deja **cada torta** (margen por unidad)?',
          answer: 28,
          hint: 'precio − costo variable por torta.',
          why: '80 − 52 = **$28** por torta.',
        },
      },
      {
        ask: '¿Cuál es la **razón de margen de contribución** de la torta?',
        options: [
          { text: '35 %: de cada peso vendido quedan 35 centavos', ok: true, reply: '¡Bien! 28 ÷ 80 = 0.35.' },
          { text: '65 %', reply: 'Ese es el peso del costo variable (52 ÷ 80). La razón de MC es lo que **queda**: 28 ÷ 80 = 35 %.' },
          { text: '28 %', reply: '$28 es el margen en pesos; hay que dividirlo entre el precio: 28 ÷ 80 = **35 %**.' },
        ],
      },
      {
        sim: {
          title: 'Precio y costo de la torta',
          inputs: [
            { key: 'p', label: 'Precio de venta', min: 60, max: 100, step: 5, value: 80 },
            { key: 'cv', label: 'Costo variable por torta', min: 40, max: 60, step: 2, value: 52 },
          ],
          outputs: [
            { label: 'Margen por torta', calc: (x) => x.p - x.cv },
            { label: 'Razón de MC (%)', calc: (x) => Math.round(((x.p - x.cv) / x.p) * 1000) / 10, main: true, unit: '%' },
          ],
          goal: {
            text: 'Sube la razón de MC a **45 % o más** (cambiando precio o costo).',
            check: (x) => (x.p - x.cv) / x.p >= 0.45,
            done: 'Hay dos caminos: cobrar más o gastar menos por torta.',
          },
        },
      },
      {
        calc: {
          question: 'Sus fijos (permiso, sueldo fijo, seguro) son **$42,000** al mes. Con **1,800 tortas**, ¿cuál es su **utilidad de operación**?',
          answer: 8400,
          hint: 'margen por torta × tortas − costos fijos.',
          why: '28 × 1,800 = $50,400; 50,400 − 42,000 = **$8,400**. Ganó $8,400, no $144,000.',
        },
      },
      { tip: '**MC = precio − costo variable**. **Utilidad = MC × unidades − fijos**.' },
    ],
    // ¿Cuándo dejas de perder?
    [
      { text: 'Con fijos de **$42,000**, ¿cuántas tortas necesita Lupita para no perder? Mueve las ventas y búscalo.' },
      {
        sim: {
          title: 'Tortas vendidas en el mes',
          inputs: [{ key: 'q', label: 'Tortas vendidas', min: 500, max: 2500, step: 100, value: 1000 }],
          outputs: [
            { label: 'Margen total', calc: (x) => 28 * x.q },
            { label: 'Costos fijos', calc: () => 42000 },
            { label: 'Utilidad de operación', calc: (x) => 28 * x.q - 42000, main: true },
          ],
          goal: {
            text: 'Vende lo suficiente para **dejar de perder** (utilidad de $0 o más).',
            check: (x) => 28 * x.q - 42000 >= 0,
            done: 'Justo en **1,500 tortas** la utilidad es cero.',
          },
        },
      },
      { text: 'Ese es el **punto de equilibrio**: ahí el **margen total es igual a los fijos** y la utilidad es cero.\n🔢 En unidades: fijos ÷ margen por unidad.\n💲 En pesos: fijos ÷ razón de MC.' },
      {
        calc: {
          question: '¿Cuál es el **punto de equilibrio en tortas**?',
          answer: 1500,
          unit: 'tortas',
          hint: 'fijos ÷ margen por torta: 42,000 ÷ 28.',
          why: '42,000 ÷ 28 = **1,500 tortas**. Ojo: si divides entre el precio ($80) olvidas el costo variable y te salen solo 525.',
        },
      },
      {
        calc: {
          question: '¿Cuál es el **punto de equilibrio en pesos** de venta?',
          answer: 120000,
          hint: 'fijos ÷ razón de MC (0.35), o 1,500 tortas × $80.',
          why: '42,000 ÷ 0.35 = **$120,000**. Comprueba: 1,500 × 80 = $120,000.',
        },
      },
      {
        ask: 'Sube la carne y el costo variable pasa de **$52 a $59**. Precio y fijos no cambian. ¿Qué pasa con el punto de equilibrio en tortas?',
        options: [
          { text: 'Sube: ahora necesita 2,000 tortas', ok: true, reply: '¡Exacto! El margen baja a 80 − 59 = $21, y 42,000 ÷ 21 = 2,000 tortas.' },
          { text: 'No cambia: los fijos son los mismos', reply: 'Los fijos sí, pero cada torta deja menos margen ($21). Necesita **más** tortas: 2,000.' },
          { text: 'Baja', reply: 'Al revés: con menos margen por torta, necesita vender **más** para cubrir los fijos: 2,000.' },
        ],
      },
      { tip: 'El modelo supone precio y costo variable constantes, fijos constantes en el rango relevante y que todo lo producido se vende.' },
    ],
    // ¿Cuánto vender para tu meta?
    [
      {
        ask: 'Si el ISR es **30 %** y quieres **quedarte con $70**, ¿cuánto debes ganar antes del impuesto?',
        options: [
          { text: '$100', ok: true, reply: '¡Eso! 100 − 30 % = 70. Se divide: 70 ÷ (1 − 0.30) = 100.' },
          { text: '$91', reply: 'Eso es 70 × 1.30. Pero el 30 % se cobra sobre lo de antes: 91 − 27.30 = 63.70. Hay que **dividir**: 70 ÷ 0.70 = **$100**.' },
          { text: '$70', reply: 'El ISR se lleva una parte: con $70 te quedarías con $49. Necesitas **$100**.' },
        ],
      },
      { text: 'Lupita quiere quedarse con **$29,400 después de impuestos** al mes. La meta se trata como **un fijo más** que el margen debe cubrir.\nAntes de impuestos = meta ÷ (1 − tasa).' },
      {
        order: {
          title: 'Ordena los pasos para llegar a la meta',
          steps: [
            'Pasar la meta a antes de impuestos: dividir entre (1 − 0.30)',
            'Sumar la utilidad antes de impuestos a los costos fijos',
            'Dividir esa suma entre el margen por torta',
            'Comprobar: margen total − fijos − ISR = la meta',
          ],
          done: 'Primero se quita el efecto del ISR, luego se suma a los fijos y al final se divide entre el margen.',
        },
      },
      {
        calc: {
          question: 'Con ISR de **30 %**, ¿cuánto debe ganar **antes de impuestos** para quedarse con $29,400?',
          answer: 42000,
          hint: 'divide entre 0.70; no multipliques por 1.30.',
          why: '29,400 ÷ 0.70 = **$42,000**. Comprueba: ISR 42,000 × 0.30 = 12,600; 42,000 − 12,600 = $29,400.',
        },
      },
      {
        ask: '¿Cuántas tortas debe vender para esa meta? (Fijos $42,000, antes de impuestos $42,000, margen $28)',
        options: [
          { text: '3,000 tortas', ok: true, reply: '¡Exacto! (42,000 + 42,000) ÷ 28 = 84,000 ÷ 28 = 3,000.' },
          { text: '1,500 tortas', reply: 'Ese es el punto de equilibrio: ahí la utilidad es cero. Falta sumar la meta: (42,000 + 42,000) ÷ 28 = **3,000**.' },
          { text: '2,550 tortas', reply: 'Eso sale de usar la meta después de impuestos (29,400). Primero hay que pasarla a antes de impuestos: **3,000**.' },
        ],
      },
      { tip: 'Tortas para la meta = **(fijos + utilidad antes de impuestos) ÷ margen por torta**.' },
    ],
    // ¿Qué tanto aguantas una caída?
    [
      { text: 'Lupita presupuesta **2,000 tortas** ($160,000). Su equilibrio está en **$120,000**. ¿Cuánto pueden caer sus ventas antes de perder? Eso es el **margen de seguridad**:\nventas presupuestadas − ventas en equilibrio.' },
      {
        calc: {
          question: '¿Cuál es el **margen de seguridad** en pesos?',
          answer: 40000,
          hint: '160,000 − 120,000.',
          why: '160,000 − 120,000 = **$40,000**: sus ventas pueden caer eso antes de perder.',
        },
      },
      {
        calc: {
          question: '¿Qué **porcentaje** de sus ventas presupuestadas es ese margen de seguridad?',
          answer: 25,
          unit: '%',
          hint: '40,000 ÷ 160,000 × 100.',
          why: '40,000 ÷ 160,000 × 100 = **25 %**.',
        },
      },
      { text: 'El **apalancamiento operativo (GAO)** dice cuántas veces se mueve la utilidad por cada 1 % que cambian las ventas:\nGAO = margen total ÷ utilidad de operación.' },
      {
        ask: 'Con 2,000 tortas, el margen total es $56,000 y la utilidad $14,000. ¿Cuál es el **GAO**?',
        options: [
          { text: '4: si las ventas suben 10 %, la utilidad sube 40 %', ok: true, reply: '¡Bien! 56,000 ÷ 14,000 = 4, que también es 1 ÷ 0.25 (el margen de seguridad).' },
          { text: '0.25', reply: 'Ese es el margen de seguridad en decimal. El GAO es su inverso: 1 ÷ 0.25 = **4**.' },
          { text: '2.5', reply: 'Revisa: GAO = 56,000 ÷ 14,000 = **4**.' },
        ],
      },
      {
        rush: {
          title: '¿GAO alto o bajo?',
          seconds: 35,
          labels: ['GAO alto', 'GAO bajo'],
          items: [
            { text: 'Muchos costos fijos y poco margen de seguridad', ans: 0 },
            { text: 'Casi todo es costo variable', ans: 1 },
            { text: 'Ventas muy por encima del equilibrio', ans: 1 },
            { text: 'Vendes apenas un poco más que el equilibrio', ans: 0 },
            { text: 'Una pequeña caída de ventas borra la utilidad', ans: 0 },
          ],
        },
      },
      { tip: 'Muchos fijos = **GAO alto**: ganas mucho cuando las ventas crecen, pero pierdes rápido si caen. **GAO = 1 ÷ margen de seguridad %**.' },
    ],
  ],
}
