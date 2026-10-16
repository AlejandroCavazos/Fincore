import type { InteractiveLesson } from './types'

export const intCOS05: InteractiveLesson = {
  lessonId: 'COS-05',
  sections: [
    // El problema de repartir con una sola base
    [
      { text: 'La **Dulcería La Abuela** 🍭 hace una **paleta clásica** (mucho volumen, proceso sencillo) y una **paleta gourmet** (poco volumen, muchos cambios de molde y revisiones).' },
      { text: 'Si reparte **todos** los CIF con una sola base, como las horas máquina, ¿quién paga los cambios de molde?' },
      {
        ask: 'La clásica usa la mayoría de las horas máquina, pero la gourmet provoca la mayoría de los cambios de molde. Repartiendo por horas máquina, ¿qué pasa?',
        options: [
          { text: 'Cada paleta paga justo lo que provoca', reply: 'No: las horas máquina no explican los cambios de molde.' },
          { text: 'La clásica parece cara y la gourmet parece barata', ok: true, reply: '¡Exacto! La clásica paga costos que provoca la gourmet: eso es **subsidio cruzado**.' },
          { text: 'La gourmet parece cara y la clásica barata', reply: 'Al revés: la gourmet usa pocas horas, así que carga con poco.' },
        ],
      },
      {
        calc: {
          question: 'Los cambios de molde cuestan **$90,000**. La gourmet usa **1,000** de **5,000** horas máquina. Repartiendo por horas, ¿cuánto le toca a la gourmet?',
          answer: 18000,
          hint: '1,000 ÷ 5,000 = 20 %.',
          why: '20 % × 90,000 = **$18,000**.',
        },
      },
      {
        calc: {
          question: 'Pero la gourmet provoca **20 de los 30** cambios de molde. Si se reparte por cambios de molde, ¿cuánto le toca de los **$90,000**?',
          answer: 60000,
          hint: '90,000 ÷ 30 = costo por cambio.',
          why: '90,000 ÷ 30 = 3,000 por cambio; 20 × 3,000 = **$60,000**. Con una sola base solo cargaba $18,000.',
        },
      },
      { tip: '**Subsidio cruzado**: un producto paga costos que provoca otro.' },
    ],
    // Los pasos del ABC
    [
      { text: 'Idea del **ABC**: los productos consumen **actividades**, y las actividades consumen **recursos**. Cada actividad tiene su **generador de costo**: lo que hace que el costo suba.' },
      {
        match: {
          title: 'Une cada actividad con su generador',
          pairs: [
            ['Preparar máquinas', 'Número de preparaciones'],
            ['Inspeccionar', 'Número de inspecciones'],
            ['Comprar materiales', 'Número de órdenes de compra'],
            ['Recibir materiales', 'Número de recepciones'],
          ],
        },
      },
      {
        order: {
          title: 'Ordena los pasos del ABC',
          steps: [
            'Identificar las actividades principales',
            'Juntar el costo de cada actividad',
            'Elegir el generador de costo de cada actividad',
            'Calcular la tasa: costo de la actividad ÷ total del generador',
            'Asignar: tasa × generador que consumió cada producto',
          ],
          done: 'Actividades → costo → generador → tasa → asignar.',
        },
      },
      {
        calc: {
          question: 'Inspeccionar cuesta **$48,000** al año y hubo **400 inspecciones**. ¿Cuál es la **tasa por inspección**?',
          answer: 120,
          hint: 'costo de la actividad ÷ total del generador.',
          why: '48,000 ÷ 400 = **$120 por inspección**. No dividas entre las piezas producidas.',
        },
      },
      {
        calc: {
          question: 'Tasas: inspección **$120** y preparación **$2,000**. La gourmet usó **150 inspecciones** y **20 preparaciones**. ¿Cuántos **CIF** se le asignan?',
          answer: 58000,
          hint: 'cada tasa con su propio generador, y suma.',
          why: '150 × 120 = 18,000; 20 × 2,000 = 40,000; total **$58,000**.',
        },
      },
      { tip: 'Nunca cruces tasas: la de preparación va con las preparaciones, no con las inspecciones.' },
    ],
    // Interpretar y decidir con ABC
    [
      { text: 'Con ABC suele pasar que lo de **bajo volumen y complejo** sale más caro de lo que se creía, y lo de **alto volumen y sencillo**, más barato.' },
      {
        multi: {
          title: '¿Para qué sirve ABC? Marca todas.',
          items: [
            { text: 'Fijar precios con mejor información', ok: true },
            { text: 'Decidir qué productos o clientes son rentables', ok: true },
            { text: 'Negociar pedidos mínimos', ok: true },
            { text: 'Ver actividades que no agregan valor, como mover material o reprocesar', ok: true },
            { text: 'Ahorrarse medir actividades y generadores', ok: false },
          ],
          why: 'ABC da muy buena información, pero **cuesta**: hay que medir actividades y generadores.',
        },
      },
      { text: 'Entonces, ¿siempre conviene? Vale la pena cuando los **CIF son grandes** y los productos son **muy diversos**.' },
      {
        sort: {
          title: '¿Le conviene ABC?',
          buckets: ['Sí conviene', 'No gana mucho'],
          items: [
            { text: 'Una fábrica que hace 200 modelos de muebles', bucket: 0, why: 'Productos muy diversos: ABC ayuda.' },
            { text: 'Una fábrica que solo hace un tipo de ladrillo', bucket: 1, why: 'Un solo producto: no hay a quién repartir mal.' },
            { text: 'La dulcería con paleta clásica y gourmet, con CIF altos', bucket: 0, why: 'Productos distintos y CIF grandes: ABC muestra el subsidio cruzado.' },
            { text: 'Un taller que hace una sola pieza igual todo el año', bucket: 1, why: 'Todo es igual: una sola base funciona bien.' },
          ],
        },
      },
      { tip: 'ABC **cuesta**. Úsalo cuando los CIF pesan mucho y tienes productos muy distintos.' },
    ],
  ],
}
