import type { InteractiveLesson } from './types'

export const intCOS04: InteractiveLesson = {
  lessonId: 'COS-04',
  sections: [
    // Producción continua, costos por departamento
    [
      { text: 'En la **fábrica de jugos Naranjita** 🍊 todas las botellas son iguales y la línea no para. No tiene sentido una hoja por botella: se juntan los costos **por departamento** y se dividen entre lo producido.' },
      {
        sort: {
          title: '¿Órdenes o procesos?',
          buckets: ['Costeo por órdenes', 'Costeo por procesos'],
          items: [
            { text: 'Una fábrica de jugos con botellas iguales', bucket: 1, why: 'Producción continua y homogénea: procesos.' },
            { text: 'Una carpintería que hace roperos a la medida', bucket: 0, why: 'Cada pedido es distinto: órdenes.' },
            { text: 'Una fábrica de cemento', bucket: 1, why: 'Producción en serie: procesos.' },
            { text: 'Una imprenta de invitaciones personalizadas', bucket: 0, why: 'Cada pedido es distinto: órdenes.' },
            { text: 'Una tortillería industrial', bucket: 1, why: 'Kilos iguales y producción continua: procesos.' },
          ],
        },
      },
      {
        order: {
          title: 'Ordena el relevo del costo en la fábrica de jugos',
          steps: [
            'Lavado: se lava la fruta y se acumula su costo',
            'Exprimido: recibe la fruta lavada con su costo y le suma el suyo',
            'Envasado: recibe el jugo con su costo y le suma botella y trabajo',
            'Producto terminado: el costo total llega al almacén',
          ],
          done: 'Cada departamento **transfiere** lo terminado al siguiente junto con su costo, como en una carrera de relevos.',
        },
      },
      {
        calc: {
          question: 'En el mes, la fábrica produjo **40,000 litros** con costos de **$320,000** y no quedó nada a medio hacer. ¿Cuál es el **costo por litro**?',
          answer: 8,
          hint: 'costo del periodo ÷ unidades producidas.',
          why: '320,000 ÷ 40,000 = **$8 por litro**: un costo unitario promedio.',
        },
      },
      { tip: 'Procesos: productos **iguales**, costo por **departamento y periodo**.' },
    ],
    // Unidades equivalentes
    [
      { text: 'Al cierre casi siempre quedan botellas **a medio hacer**. No son cero ni son completas. Se convierten en **unidades equivalentes**: como si fueran terminadas.' },
      {
        calc: {
          question: 'Quedan **2,000 botellas** al **50 %** de avance. ¿A cuántas botellas completas **equivalen**?',
          answer: 1000,
          hint: 'unidades × % de avance.',
          why: '2,000 × 0.50 = **1,000** unidades equivalentes.',
        },
      },
      {
        sim: {
          title: 'Unidades equivalentes de conversión',
          inputs: [
            { key: 't', label: 'Botellas terminadas', min: 5000, max: 12000, step: 1000, value: 8000 },
            { key: 'p', label: 'Botellas en proceso al cierre', min: 0, max: 4000, step: 500, value: 2000 },
            { key: 'a', label: '% de avance de conversión', min: 0, max: 100, step: 10, value: 50 },
          ],
          outputs: [
            { label: 'Equivalentes de lo que está en proceso', calc: (x) => (x.p * x.a) / 100 },
            { label: 'Unidades equivalentes de conversión', calc: (x) => x.t + (x.p * x.a) / 100, main: true },
          ],
          goal: {
            text: 'Llega a **15,000 unidades equivalentes** o más.',
            check: (x) => x.t + (x.p * x.a) / 100 >= 15000,
            done: 'UE = terminadas + (en proceso × % de avance). Lo terminado cuenta completo; lo a medio hacer, solo su avance.',
          },
        },
      },
      {
        ask: 'Terminaste **6,000** botellas y quedan **1,500** al **30 %** de conversión. La fruta (material) entra **completa al inicio**. ¿Cuántas UE de **materiales** hay?',
        options: [
          { text: '6,450', reply: 'Ese es el cálculo de conversión. El material entró completo: su avance es 100 %.' },
          { text: '7,500', ok: true, reply: '¡Exacto! 6,000 + 1,500 × 100 % = 7,500. El material ya está todo en esas botellas.' },
          { text: '6,000', reply: 'Faltan las que están en proceso: ya tienen todo su material.' },
        ],
      },
      { tip: 'Cada elemento tiene su propio avance: el material suele estar al **100 %** y la conversión va **poco a poco**.' },
    ],
    // El informe de costos de producción
    [
      { text: 'El **informe de costos de producción** se arma en tres pasos. Usamos **promedio ponderado** y sin inventario inicial.' },
      {
        order: {
          title: 'Ordena los pasos del informe',
          steps: [
            'Calcular el costo por unidad equivalente de cada elemento',
            'Calcular el costo de las unidades terminadas y transferidas',
            'Calcular el costo del inventario final en proceso',
            'Comprobar: terminadas + en proceso = costo total del departamento',
          ],
          done: 'Y la comprobación final debe cuadrar **exacto**.',
        },
      },
      { text: 'La fábrica de jugos: terminó **9,000** botellas y quedan **1,000** al **40 %** de conversión (material al inicio). UE materiales = 10,000; UE conversión = 9,400. Materiales costaron **$50,000** y conversión **$28,200**.' },
      {
        calc: {
          question: '¿Cuál es el **costo por UE de conversión**? ($28,200 entre sus UE)',
          answer: 3,
          hint: 'cada costo se divide entre **sus propias** UE: 9,400.',
          why: '28,200 ÷ 9,400 = **$3**. El de materiales es 50,000 ÷ 10,000 = $5.',
        },
      },
      {
        calc: {
          question: 'Cada botella terminada vale $5 de material + $3 de conversión. ¿Cuánto vale lo **terminado y transferido** (9,000 botellas)?',
          answer: 72000,
          hint: 'terminadas × (5 + 3).',
          why: '9,000 × 8 = **$72,000** transferidos.',
        },
      },
      {
        calc: {
          question: '¿Cuánto vale el **inventario final en proceso**? (1,000 UE de materiales a $5 y 400 UE de conversión a $3)',
          answer: 6200,
          hint: 'no las valúes como completas: cada elemento con sus UE.',
          why: '1,000 × 5 = 5,000; 400 × 3 = 1,200; total **$6,200**. Comprobación: 72,000 + 6,200 = 78,200 = 50,000 + 28,200 ✓',
        },
      },
      {
        multi: {
          title: '¿Qué es cierto? Marca todas.',
          items: [
            { text: 'Terminadas + en proceso debe dar exacto el costo total del departamento', ok: true },
            { text: 'Cada costo se divide entre sus propias unidades equivalentes', ok: true },
            { text: 'Existe también el método PEPS, que separa el trabajo del mes anterior', ok: true },
            { text: 'Las botellas en proceso se valúan como si estuvieran completas', ok: false },
          ],
          why: 'Valuar lo que está en proceso como completo **infla el inventario**. Cada elemento va con su avance.',
        },
      },
      { tip: 'Si la comprobación no cuadra, revisa que no hayas cruzado las UE de materiales con las de conversión.' },
    ],
  ],
}
