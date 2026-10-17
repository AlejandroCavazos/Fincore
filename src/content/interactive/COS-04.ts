import type { InteractiveLesson } from './types'

export const intCOS04: InteractiveLesson = {
  lessonId: 'COS-04',
  sections: [
    // ¿Y si todo sale igual?
    [
      { text: 'En la **fábrica de jugos Naranjita** 🍊 todas las botellas son iguales y la línea nunca para.' },
      {
        ask: '¿Le conviene abrir una hoja de costos para cada botella?',
        options: [
          { text: 'No: junta los costos del mes y los divide', ok: true, reply: '¡Exacto! Si todo sale igual, junta los costos y los divide entre lo producido.' },
          { text: 'Sí: una hoja por botella', reply: 'Serían millones de hojas iguales. Mejor junta los costos del mes y los divide entre lo producido.' },
          { text: 'Sí: una hoja por cada cliente', reply: 'Las hojas por pedido son para trabajos distintos. Aquí todo sale igual: junta y divide.' },
        ],
      },
      { text: 'Eso es **costeo por procesos** 🏭:\n🔁 producción **continua, en serie e igual**,\n🏢 los costos se juntan **por departamento** en el mes,\n➗ y se dividen entre lo producido: **costo unitario promedio**.' },
      {
        multi: {
          title: '¿Qué señales indican costeo por procesos? Marca todas.',
          items: [
            { text: 'La línea no se detiene por pedido', ok: true },
            { text: 'Todas las unidades son iguales', ok: true },
            { text: 'Los costos se juntan por departamento en el mes', ok: true },
            { text: 'Cada cliente pide algo distinto', ok: false },
          ],
          why: 'Si cada cliente pide algo distinto, conviene **órdenes**. Procesos es para producción continua e igual.',
        },
      },
      {
        sort: {
          title: '¿Órdenes o procesos?',
          buckets: ['Costeo por órdenes', 'Costeo por procesos'],
          items: [
            { text: 'Una fábrica de cemento', bucket: 1, why: 'Producción en serie: procesos.' },
            { text: 'Una carpintería que hace roperos a la medida', bucket: 0, why: 'Cada pedido es distinto: órdenes.' },
            { text: 'Una tortillería industrial', bucket: 1, why: 'Kilos iguales y producción continua: procesos.' },
            { text: 'Una imprenta de invitaciones personalizadas', bucket: 0, why: 'Cada pedido es distinto: órdenes.' },
            { text: 'Una fábrica de papel', bucket: 1, why: 'Producción continua y homogénea: procesos.' },
          ],
        },
      },
      {
        order: {
          title: 'Ordena el relevo del costo en Naranjita',
          steps: [
            'Lavado: lava la fruta y junta su costo',
            'Exprimido: recibe la fruta con su costo y le suma el suyo',
            'Envasado: recibe el jugo con su costo y le suma botella y trabajo',
            'Producto terminado: el costo total llega al almacén',
          ],
          done: 'Cada departamento **transfiere** lo terminado al siguiente junto con su costo, como en una carrera de relevos.',
        },
      },
      { tip: 'Procesos: productos **iguales**, costos **por departamento**, y lo terminado pasa al siguiente **con su costo**.' },
    ],
    // ¿Cuánto vale lo a medio hacer?
    [
      { text: 'Al cierre del mes, en Naranjita quedan botellas **a medio hacer** 🍼. No son cero, pero tampoco están completas.' },
      {
        ask: 'Quedan **2,000 botellas** al **50 %** de avance. ¿A cuántas botellas completas equivalen?',
        options: [
          { text: '1,000', ok: true, reply: '¡Bien! 2,000 × 50 % = 1,000. Eso es una **unidad equivalente**.' },
          { text: '2,000', reply: 'Así las contarías como completas, y solo van a la mitad: equivalen a **1,000**.' },
          { text: '0', reply: 'Ya tienen trabajo hecho, no valen cero. A la mitad, equivalen a **1,000**.' },
        ],
      },
      { text: '🧮 **Unidades equivalentes** = terminadas + (en proceso × % de avance).\n🍊 El **material** suele entrar completo al inicio: 100 %.\n⚙️ La **conversión** (MOD + CIF) avanza poco a poco.' },
      {
        sim: {
          title: 'Unidades equivalentes de conversión',
          inputs: [
            { key: 't', label: 'Botellas terminadas', min: 5000, max: 12000, step: 1000, value: 8000 },
            { key: 'p', label: 'Botellas en proceso al cierre', min: 0, max: 4000, step: 500, value: 2000 },
            { key: 'a', label: '% de avance de conversión', min: 0, max: 100, step: 10, value: 50 },
          ],
          outputs: [
            { label: 'Equivalentes de lo que está en proceso', calc: (x) => (x.p * x.a) / 100, unit: 'unidades' },
            { label: 'Unidades equivalentes de conversión', calc: (x) => x.t + (x.p * x.a) / 100, main: true, unit: 'unidades' },
          ],
          goal: {
            text: 'Llega a **15,000 unidades equivalentes** o más.',
            check: (x) => x.t + (x.p * x.a) / 100 >= 15000,
            done: 'Lo terminado cuenta completo; lo a medio hacer, solo su avance.',
          },
        },
      },
      {
        calc: {
          question: 'Terminaste **7,000** botellas y quedan **2,500** al **40 %** de conversión. ¿Cuántas **unidades equivalentes de conversión** hay?',
          answer: 8000, unit: 'unidades',
          hint: 'Terminadas + en proceso × 0.40.',
          why: '2,500 × 0.40 = 1,000. 7,000 + 1,000 = **8,000** unidades equivalentes.',
        },
      },
      {
        ask: 'Mismo caso: 7,000 terminadas y 2,500 en proceso. La fruta entra **completa al inicio**. ¿Cuántas UE de **materiales** hay?',
        options: [
          { text: '9,500', ok: true, reply: '¡Exacto! 7,000 + 2,500 × 100 % = 9,500. Esas botellas ya tienen toda su fruta.' },
          { text: '8,000', reply: 'Ese es el cálculo de conversión. La fruta entró completa: su avance es 100 %, así que son **9,500**.' },
          { text: '7,000', reply: 'Faltan las que están en proceso: ya tienen toda su fruta. Son **9,500**.' },
        ],
      },
      { tip: 'Cada elemento tiene su propio avance: material casi siempre al **100 %**, conversión **poco a poco**.' },
    ],
    // ¿Cuadra el costo del mes?
    [
      { text: 'El jefe de Naranjita pregunta: "¿Cuánto vale lo que mandamos al almacén y cuánto lo que quedó a medio hacer?" 📊 Eso responde el **informe de costos de producción**.' },
      {
        order: {
          title: 'Ordena los pasos del informe',
          steps: [
            'Calcular el costo por unidad equivalente de cada elemento',
            'Calcular el costo de las unidades terminadas y transferidas',
            'Calcular el costo del inventario final en proceso',
            'Comprobar: terminadas + en proceso = costo total del mes',
          ],
          done: 'Y la comprobación final debe cuadrar **exacto**.',
        },
      },
      { text: 'Los datos (método de **promedio ponderado**, sin inventario inicial):\n✅ Terminó **9,000** botellas; quedan **1,000** al **40 %** de conversión.\n🍊 Material: **$50,000** entre 10,000 UE = **$5**.\n⚙️ Conversión: **$28,200** entre 9,400 UE.' },
      {
        calc: {
          question: '¿Cuál es el **costo por UE de conversión**? ($28,200 entre 9,400 UE)',
          answer: 3,
          hint: 'Cada costo se divide entre **sus propias** UE.',
          why: '28,200 ÷ 9,400 = **$3**.',
        },
      },
      {
        calc: {
          question: 'Cada botella terminada vale $5 de material + $3 de conversión. ¿Cuánto vale lo **terminado y transferido** (9,000 botellas)?',
          answer: 72000,
          hint: 'Terminadas × (5 + 3).',
          why: '9,000 × 8 = **$72,000** transferidos.',
        },
      },
      {
        calc: {
          question: '¿Cuánto vale el **inventario final en proceso**? (1,000 UE de material a $5 y 400 UE de conversión a $3)',
          answer: 6200,
          hint: 'Cada elemento con sus propias UE, no como completas.',
          why: '1,000 × 5 = 5,000; 400 × 3 = 1,200; total **$6,200**. Comprobación: 72,000 + 6,200 = 78,200 = 50,000 + 28,200 ✓',
        },
      },
      {
        multi: {
          title: '¿Qué es cierto? Marca todas.',
          items: [
            { text: 'Terminadas + en proceso debe dar exacto el costo total', ok: true },
            { text: 'Cada costo se divide entre sus propias unidades equivalentes', ok: true },
            { text: 'Existe también el método PEPS, que separa el trabajo del mes anterior', ok: true },
            { text: 'Las botellas en proceso se valúan como si estuvieran completas', ok: false },
          ],
          why: 'Valuar lo que está en proceso como completo **infla el inventario**. Cada elemento va con su avance.',
        },
      },
      { tip: 'Si la comprobación no cuadra, revisa que no hayas cruzado las UE de material con las de conversión.' },
    ],
  ],
}
