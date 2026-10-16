import type { InteractiveLesson } from './types'

export const intL303: InteractiveLesson = {
  lessonId: 'L3-03',
  sections: [
    // Margen de contribución
    [
      { text: 'Repaso integrador 🥪: Lupita tiene el food truck **Tortas La Güera**. Vende cada torta en **$80** y su pan, carne y empaque le cuestan **$52** (costo variable).' },
      {
        calc: {
          question: '¿Cuánto le deja **cada torta** para pagar fijos y ganar (MCu)?',
          answer: 28,
          hint: 'precio − costo variable por torta.',
          why: '80 − 52 = **$28**. Ese margen «contribuye» primero a cubrir los fijos y luego se vuelve utilidad.',
        },
      },
      {
        ask: '¿Cuál es la **razón de margen de contribución** de la torta?',
        options: [
          { text: '35%: de cada peso vendido quedan 35 centavos', ok: true, reply: '¡Bien! 28 ÷ 80 = 0.35.' },
          { text: '65%', reply: 'Ese es el peso del costo variable (52 ÷ 80). La razón de MC es lo que **queda**.' },
          { text: '28%', reply: '$28 es el margen en pesos; hay que dividirlo entre el precio: 28 ÷ 80.' },
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
            { label: 'Razón de MC (%)', calc: (x) => Math.round(((x.p - x.cv) / x.p) * 1000) / 10, main: true },
          ],
          goal: {
            text: 'Sube la razón de MC a **45% o más** (cambiando precio o costo).',
            check: (x) => (x.p - x.cv) / x.p >= 0.45,
            done: 'Hay dos caminos: cobrar más o gastar menos por torta. Los dos agrandan lo que queda de cada peso.',
          },
        },
      },
      {
        calc: {
          question: 'Los fijos del food truck (permiso, sueldo fijo, seguro) son **$42,000** al mes. Si vende **1,800 tortas**, ¿cuál es su **utilidad de operación**?',
          answer: 8400,
          hint: 'MCu × tortas − costos fijos.',
          why: '28 × 1,800 = $50,400; 50,400 − 42,000 = **$8,400**.',
        },
      },
      { tip: '**MCu = P − CVu** y **Razón MC = MCu ÷ P**. La razón sirve cuando trabajas en pesos de venta.' },
    ],
    // Punto de equilibrio
    [
      { text: 'El **punto de equilibrio** es donde Lupita ni gana ni pierde: el margen total iguala justo a los fijos de **$42,000**.' },
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
            done: 'Justo en **1,500 tortas** la utilidad es cero: ese es el punto de equilibrio.',
          },
        },
      },
      {
        ask: 'Un amigo le dice: «Divide 42,000 entre el precio de $80». ¿Qué le contestas?',
        options: [
          { text: 'Está mal: se divide entre el **margen** ($28), porque cada torta también trae costo variable', ok: true, reply: '¡Eso! 42,000 ÷ 28 = 1,500 tortas. Dividir entre el precio olvida el costo variable.' },
          { text: 'Tiene razón: 525 tortas bastan', reply: 'Con 525 tortas el margen sería 525 × 28 = $14,700: no alcanza para los $42,000 de fijos.' },
          { text: 'Se divide entre el costo variable ($52)', reply: 'No: lo que paga los fijos es el **margen**, no el costo.' },
        ],
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
        multi: {
          title: '¿Qué supone el modelo? Marca todas.',
          items: [
            { text: 'El precio y el costo variable por torta no cambian', ok: true },
            { text: 'Los fijos son constantes dentro del rango relevante', ok: true },
            { text: 'Todo lo que se produce se vende', ok: true },
            { text: 'Los fijos suben con cada torta vendida', ok: false },
          ],
          why: 'El modelo supone precio y CVu constantes, fijos constantes en el rango relevante, que lo producido se vende y, con varios productos, mezcla constante.',
        },
      },
      { tip: '**PE unidades = CF ÷ MCu**. **PE pesos = CF ÷ razón MC**.' },
    ],
    // Utilidad objetivo
    [
      { text: 'Lupita quiere quedarse con **$29,400 después de impuestos** al mes. La meta se trata como **un fijo más** que el margen debe cubrir.' },
      {
        order: {
          title: 'Ordena los pasos para llegar a la meta',
          steps: [
            'Pasar la meta a antes de impuestos: dividir entre (1 − 0.30)',
            'Sumar la utilidad antes de impuestos a los costos fijos',
            'Dividir esa suma entre el margen por torta',
            'Comprobar: margen total − fijos − ISR = la meta',
          ],
          done: 'Primero se quita el efecto del ISR, luego se suma a los fijos y al final se divide entre el MCu.',
        },
      },
      {
        calc: {
          question: 'Con ISR de **30%**, ¿cuánto debe ganar **antes de impuestos** para quedarse con $29,400?',
          answer: 42000,
          hint: 'divide entre 0.70, no multipliques por 1.30.',
          why: '29,400 ÷ 0.70 = **$42,000**. Comprueba: ISR 42,000 × 0.30 = 12,600; 42,000 − 12,600 = $29,400.',
        },
      },
      {
        ask: '¿Cuántas tortas debe vender para esa meta? (Fijos $42,000, UAI $42,000, MCu $28)',
        options: [
          { text: '1,500 tortas', reply: 'Ese es el punto de equilibrio: ahí la utilidad es cero.' },
          { text: '3,000 tortas', ok: true, reply: '¡Exacto! (42,000 + 42,000) ÷ 28 = 84,000 ÷ 28 = 3,000.' },
          { text: '2,550 tortas', reply: 'Eso sale de usar la meta después de impuestos (29,400). Primero hay que pasarla a antes de impuestos.' },
        ],
      },
      { tip: '**UAI = UDI ÷ (1 − t)** y **Q objetivo = (CF + UAI) ÷ MCu**.' },
    ],
    // Margen de seguridad y apalancamiento operativo
    [
      { text: 'Lupita presupuesta **2,000 tortas** ($160,000). Su equilibrio está en **$120,000**. ¿Cuánto puede caer antes de perder?' },
      {
        calc: {
          question: '¿Cuál es el **margen de seguridad** en pesos?',
          answer: 40000,
          hint: 'ventas presupuestadas − ventas en el punto de equilibrio.',
          why: '160,000 − 120,000 = **$40,000**, que es 40,000 ÷ 160,000 = **25%** de sus ventas.',
        },
      },
      {
        ask: 'Con 2,000 tortas, el margen total es $56,000 y la utilidad $14,000. ¿Cuál es el **GAO**?',
        options: [
          { text: '4: si las ventas suben 10%, la utilidad sube 40%', ok: true, reply: '¡Bien! 56,000 ÷ 14,000 = 4, que también es 1 ÷ 0.25 (el margen de seguridad).' },
          { text: '0.25', reply: 'Ese es el margen de seguridad en decimal. El GAO es su inverso: 1 ÷ 0.25.' },
          { text: '2.5', reply: 'Revisa: GAO = MC total ÷ utilidad = 56,000 ÷ 14,000.' },
        ],
      },
      {
        match: {
          title: 'Une cada medida con lo que te dice',
          pairs: [
            ['Margen de contribución', 'Lo que deja cada venta para fijos y utilidad'],
            ['Punto de equilibrio', 'Ventas donde la utilidad es cero'],
            ['Margen de seguridad', 'Cuánto pueden caer las ventas antes de perder'],
            ['GAO', 'Cuántas veces se mueve la utilidad por cada 1% de cambio en ventas'],
          ],
        },
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
      { tip: 'Muchos fijos = **GAO alto**: ganas mucho cuando las ventas crecen, pero pierdes rápido si caen. **GAO = 1 ÷ MS%**.' },
    ],
  ],
}
