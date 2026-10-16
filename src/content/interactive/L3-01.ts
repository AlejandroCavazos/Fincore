import type { InteractiveLesson } from './types'

export const intL301: InteractiveLesson = {
  lessonId: 'L3-01',
  sections: [
    // ¿Qué es un costo y para qué se clasifica?
    [
      { text: 'Repaso integrador 🥖: en toda esta lección acompañas a **Panadería La Espiga**, de doña Rosa. Un **costo** es lo que entrega (dinero, trabajo, materiales) para tener su pan.' },
      {
        match: {
          title: 'Une cada palabra con su significado',
          pairs: [
            ['Costo', 'Valor de los recursos que se sacrifican para tener un bien o servicio'],
            ['Comportamiento', 'Cómo cambia el costo si produces más o menos'],
            ['Rastreabilidad', 'Si el costo se puede ligar a un producto, orden o departamento'],
            ['Objeto de costo', 'Aquello a lo que le quieres sacar el costo: un pan, un pedido, un área'],
          ],
        },
      },
      { text: 'Cada clasificación responde **una pregunta distinta** de doña Rosa. Y un mismo costo puede llevar dos etiquetas a la vez.' },
      {
        sort: {
          title: '¿Qué dos etiquetas lleva cada costo de La Espiga?',
          buckets: ['Variable y directo', 'Fijo e indirecto'],
          items: [
            { text: 'La harina que va dentro de cada bolillo', bucket: 0, why: 'Sube con cada pan (variable) y se ve dentro del pan (directo).' },
            { text: 'La renta del local donde está el horno', bucket: 1, why: 'Se paga igual hagas mucho o poco pan, y sirve a todos los panes.' },
            { text: 'La mantequilla de cada concha', bucket: 0, why: 'Va dentro del producto y crece con cada pieza.' },
            { text: 'El sueldo del supervisor de la panadería', bucket: 1, why: 'Es igual cada mes y cuida toda la producción, no un pan en particular.' },
          ],
        },
      },
      {
        ask: 'Doña Rosa pregunta: «Si mañana hago 200 panes más, ¿cuánto más me va a costar?». ¿Qué clasificación le ayuda?',
        options: [
          { text: 'Por comportamiento (fijo, variable, mixto)', ok: true, reply: '¡Eso! El comportamiento dice qué costos crecen al producir más.' },
          { text: 'Por rastreabilidad (directo, indirecto)', reply: 'Esa responde cuánto cuesta un producto en particular, no cuánto cambia el total al producir más.' },
          { text: 'Ninguna, solo hay que ver el saldo del banco', reply: 'El banco no te dice qué costos se moverán. Para eso está el comportamiento.' },
        ],
      },
      { tip: 'Dos preguntas, dos clasificaciones: **¿cambia con el volumen?** (fijo o variable) y **¿se liga al producto?** (directo o indirecto).' },
    ],
    // Costos fijos, variables y mixtos
    [
      { text: 'Un costo **variable** sube en total con cada pan, pero por pieza es igual. Un costo **fijo** se queda igual en total dentro del rango relevante.' },
      {
        rush: {
          title: 'La Espiga: ¿fijo o variable?',
          seconds: 40,
          labels: ['Fijo', 'Variable'],
          items: [
            { text: 'Renta del local', ans: 0 },
            { text: 'Harina de los panes', ans: 1 },
            { text: 'Sueldo del supervisor', ans: 0 },
            { text: 'Bolsas para entregar el pan', ans: 1 },
            { text: 'Depreciación del horno en línea recta', ans: 0 },
            { text: 'Comisión al repartidor por cada venta', ans: 1 },
          ],
        },
      },
      { text: 'El gas del horno es **mixto**: un cargo fijo más lo que consumes. Doña Rosa lo separa con el **punto alto–punto bajo**: solo usa el mes de más y el de menos actividad.' },
      {
        calc: {
          question: 'Gas de La Espiga: mes bajo **400 hornadas** y **$9,000**; mes alto **900 hornadas** y **$14,000**. ¿Cuánto sube el gas por **cada hornada** (CVu)?',
          answer: 10,
          hint: 'diferencia de costo ÷ diferencia de hornadas.',
          why: '(14,000 − 9,000) ÷ (900 − 400) = 5,000 ÷ 500 = **$10 por hornada**.',
        },
      },
      {
        calc: {
          question: 'Con el CVu de **$10**, ¿cuál es la parte **fija** del gas al mes?',
          answer: 5000,
          hint: 'toma el mes bajo y réstale 10 × 400.',
          why: '9,000 − 10 × 400 = 9,000 − 4,000 = **$5,000**. Compruébalo con el mes alto: 14,000 − 9,000 = $5,000.',
        },
      },
      {
        calc: {
          question: 'El próximo mes planea **700 hornadas**. ¿Cuánto espera pagar de gas?',
          answer: 12000,
          hint: 'parte fija + CVu × hornadas esperadas.',
          why: '5,000 + 10 × 700 = 5,000 + 7,000 = **$12,000**.',
        },
      },
      { tip: 'Error común: dividir el costo total entre las unidades. Eso mezcla lo fijo con lo variable. Usa siempre **diferencia ÷ diferencia**.' },
    ],
    // Costos directos e indirectos
    [
      { text: 'El costo del pan tiene tres partes: **MPD** (lo que va dentro), **MOD** (quien lo hace con sus manos) y **CIF** (lo que ayuda a producir todo). Lo de vender y administrar es **gasto del periodo**.' },
      {
        sort: {
          title: 'Clasifica los costos de La Espiga',
          buckets: ['MPD', 'MOD', 'CIF', 'Gasto del periodo'],
          items: [
            { text: 'Azúcar y huevo de los panes dulces', bucket: 0, why: 'Va dentro del pan: materia prima directa.' },
            { text: 'Sueldo del panadero que amasa', bucket: 1, why: 'Trabaja directamente en el pan: mano de obra directa.' },
            { text: 'Gas del horno', bucket: 2, why: 'Ayuda a hornear todo, pero no se liga a un pan en particular.' },
            { text: 'Seguro del área de producción', bucket: 2, why: 'Es de la fábrica, pero de toda: cargo indirecto.' },
            { text: 'Anuncio en redes para vender más', bucket: 3, why: 'Es de vender, no de producir: gasto del periodo.' },
            { text: 'Sueldo de la persona que lleva la contabilidad', bucket: 3, why: 'Es de administración: no entra al costo del pan.' },
          ],
        },
      },
      { text: 'Un mes: MPD **$36,000**, MOD **$24,000**, CIF **$18,000** y publicidad **$9,000**. Hizo **6,000 piezas**. Calcula en cadena:' },
      {
        calc: {
          question: '¿Cuánto es el **costo primo** (MPD + MOD)?',
          answer: 60000,
          hint: 'solo materia prima directa y mano de obra directa.',
          why: '36,000 + 24,000 = **$60,000**.',
        },
      },
      {
        calc: {
          question: '¿Cuánto es el **costo de conversión** (MOD + CIF)?',
          answer: 42000,
          hint: 'lo que cuesta convertir la harina en pan.',
          why: '24,000 + 18,000 = **$42,000**. Ojo: la MOD está en el primo **y** en el de conversión.',
        },
      },
      {
        calc: {
          question: '¿Cuánto cuesta **cada pieza** (costo de producción ÷ piezas)?',
          answer: 13,
          hint: 'suma MPD + MOD + CIF (sin la publicidad) y divide entre 6,000.',
          why: '(36,000 + 24,000 + 18,000) ÷ 6,000 = 78,000 ÷ 6,000 = **$13 por pieza**. La publicidad no entra: es gasto del periodo.',
        },
      },
      { tip: '**Costo primo** = MPD + MOD. **Conversión** = MOD + CIF. **Producción** = MPD + MOD + CIF.' },
    ],
    // El rango relevante y los errores comunes
    [
      { text: 'La renta de La Espiga es **$18,000** al mes y su horno da hasta **3,000 piezas** (su rango relevante). Mueve la producción y mira qué pasa con la renta **por pieza**.' },
      {
        sim: {
          title: 'La renta repartida entre los panes',
          inputs: [{ key: 'q', label: 'Piezas producidas en el mes', min: 300, max: 3000, step: 100, value: 600 }],
          outputs: [
            { label: 'Renta total del mes', calc: () => 18000 },
            { label: 'Renta por pieza', calc: (x) => Math.round((18000 / x.q) * 100) / 100, main: true },
          ],
          goal: {
            text: 'Haz que la renta por pieza baje a **$10 o menos**.',
            check: (x) => 18000 / x.q <= 10,
            done: 'La renta **total** no se movió: sigue en $18,000. Solo se repartió entre más piezas. Por eso el fijo **por unidad** no es constante.',
          },
        },
      },
      {
        ask: 'Doña Rosa quiere hacer **4,500 piezas**, más de lo que da su horno. Tendrá que rentar otro local. ¿Qué pasa con la renta?',
        options: [
          { text: 'Sigue igual: es un costo fijo', reply: 'Solo es fijo **dentro** del rango relevante. Fuera de él, cambia.' },
          { text: 'Salta a otro nivel: es un costo escalonado', ok: true, reply: '¡Exacto! Al pasar la capacidad, el fijo brinca a un escalón más alto.' },
          { text: 'Baja, porque hace más piezas', reply: 'Por pieza podría bajar, pero en total sube: hay que pagar otro local.' },
        ],
      },
      {
        multi: {
          title: '¿Qué está bien para decidir? Marca todas.',
          items: [
            { text: 'Usar el costo fijo **total** del mes', ok: true },
            { text: 'Usar el costo variable **por unidad**', ok: true },
            { text: 'Suponer que la renta por pieza siempre vale lo mismo', ok: false },
            { text: 'Revisar si la producción se sale del rango relevante', ok: true },
          ],
          why: 'Para decidir se usan **fijos totales** y **variables unitarios**, y se vigila el rango relevante. El fijo por pieza cambia con el volumen.',
        },
      },
      { tip: 'Fijo: constante en **total**, cambia por pieza. Variable: constante **por pieza**, cambia en total.' },
    ],
  ],
}
