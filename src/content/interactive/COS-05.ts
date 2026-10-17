import type { InteractiveLesson } from './types'

export const intCOS05: InteractiveLesson = {
  lessonId: 'COS-05',
  sections: [
    // ¿Quién paga los cambios de molde?
    [
      { text: 'La **Dulcería La Abuela** 🍭 hace dos paletas:\n🍭 **Clásica:** muchas piezas, proceso sencillo.\n✨ **Gourmet:** pocas piezas, muchos cambios de molde y revisiones.' },
      { text: 'Hoy reparte **todos** los CIF con una sola base: las **horas máquina**. La clásica usa casi todas las horas.' },
      {
        ask: 'Pero la gourmet provoca la mayoría de los cambios de molde. Repartiendo por horas máquina, ¿qué pasa?',
        options: [
          { text: 'La clásica parece cara y la gourmet parece barata', ok: true, reply: '¡Exacto! La clásica paga costos que provoca la gourmet: eso es **subsidio cruzado**.' },
          { text: 'Cada paleta paga justo lo que provoca', reply: 'Las horas máquina no explican los cambios de molde. La clásica termina pagando de más: **subsidio cruzado**.' },
          { text: 'La gourmet parece cara y la clásica barata', reply: 'Al revés: la gourmet usa pocas horas, así que carga con poco. La clásica parece cara.' },
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
          why: '90,000 ÷ 30 = 3,000 por cambio; 20 × 3,000 = **$60,000**. Con horas máquina solo cargaba $18,000.',
        },
      },
      { tip: '**Subsidio cruzado**: un producto paga costos que provoca otro.' },
    ],
    // ¿Qué provoca cada costo?
    [
      { text: 'La solución es el **ABC** (costeo basado en actividades) 🧩: los productos usan **actividades**, y las actividades usan **recursos**.' },
      { text: 'Cada actividad tiene un **generador de costo**: lo que hace que ese costo suba.\n🔧 Preparar máquinas → número de preparaciones.\n🔍 Inspeccionar → número de inspecciones.\n🛒 Comprar materiales → número de órdenes de compra.' },
      {
        match: {
          title: 'Une cada actividad con su generador',
          pairs: [
            ['Cambiar moldes para otro modelo', 'Número de preparaciones'],
            ['Revisar muestras por defectos', 'Número de inspecciones'],
            ['Tramitar pedidos a proveedores', 'Número de órdenes de compra'],
            ['Operar las máquinas', 'Horas máquina'],
          ],
        },
      },
      {
        order: {
          title: 'Ordena los pasos del ABC',
          steps: [
            'Identificar las actividades',
            'Juntar el costo de cada actividad',
            'Elegir el generador de cada actividad',
            'Tasa = costo de la actividad ÷ total del generador',
            'Asignar: tasa × generador que usó cada producto',
          ],
          done: 'Actividades → costo → generador → tasa → asignar.',
        },
      },
      {
        calc: {
          question: 'Inspeccionar cuesta **$48,000** al año y hubo **400 inspecciones**. ¿Cuál es la **tasa por inspección**?',
          answer: 120,
          hint: 'Costo de la actividad ÷ total del generador.',
          why: '48,000 ÷ 400 = **$120 por inspección**. No dividas entre las paletas producidas.',
        },
      },
      {
        calc: {
          question: 'Tasas: inspección **$120** y preparación **$2,000**. La gourmet usó **150 inspecciones** y **20 preparaciones**. ¿Cuántos **CIF** se le asignan?',
          answer: 58000,
          hint: 'Cada tasa con su propio generador, y suma.',
          why: '150 × 120 = 18,000; 20 × 2,000 = 40,000; total **$58,000**.',
        },
      },
      { tip: 'Nunca cruces tasas: la de preparación va con las preparaciones, no con las inspecciones.' },
    ],
    // ¿Cuándo vale la pena ABC?
    [
      {
        ask: 'Con ABC, ¿qué crees que le pasa al costo de la paleta **gourmet**?',
        options: [
          { text: 'Sube', ok: true, reply: '¡Sí! Lo de **bajo volumen y complejo** suele salir más caro de lo que se creía.' },
          { text: 'Baja', reply: 'Baja el de la clásica. La gourmet, de **bajo volumen y compleja**, suele salir más cara.' },
          { text: 'Se queda igual', reply: 'Cambia: ahora paga los cambios de molde que provoca. Lo de bajo volumen y complejo suele **subir**.' },
        ],
      },
      { text: 'Y lo de **alto volumen y sencillo**, como la clásica, suele salir **más barato**.' },
      {
        multi: {
          title: '¿Para qué sirve ABC? Marca todas.',
          items: [
            { text: 'Fijar precios con mejor información', ok: true },
            { text: 'Decidir qué productos o clientes son rentables', ok: true },
            { text: 'Ver actividades que no agregan valor, como mover material', ok: true },
            { text: 'Ahorrarse medir actividades y generadores', ok: false },
          ],
          why: 'ABC da muy buena información, pero **cuesta**: hay que medir actividades y generadores.',
        },
      },
      { text: 'Entonces, ¿siempre conviene? Vale la pena cuando los **CIF son grandes** y los productos son **muy distintos**.' },
      {
        sort: {
          title: '¿Le conviene ABC?',
          buckets: ['Sí conviene', 'No gana mucho'],
          items: [
            { text: 'Una fábrica que hace 200 modelos de muebles', bucket: 0, why: 'Productos muy distintos: ABC ayuda.' },
            { text: 'Una fábrica que solo hace un tipo de ladrillo', bucket: 1, why: 'Un solo producto: no hay a quién repartir mal.' },
            { text: 'La dulcería, con CIF altos y paletas muy distintas', bucket: 0, why: 'CIF grandes y productos distintos: ABC muestra el subsidio cruzado.' },
            { text: 'Un taller con CIF muy pequeños', bucket: 1, why: 'Si los CIF pesan poco, repartirlos mejor cambia poco.' },
          ],
        },
      },
      { tip: 'ABC **cuesta**. Úsalo cuando los CIF pesan mucho y los productos son muy distintos.' },
    ],
  ],
}
