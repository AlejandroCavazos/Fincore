import type { InteractiveLesson } from './types'

export const intL301: InteractiveLesson = {
  lessonId: 'L3-01',
  sections: [
    // ¿Qué es un costo?
    [
      { text: 'Doña Rosa tiene la **Panadería La Espiga** 🥖. Para hacer pan entrega harina, horas de trabajo y gas. Todo eso es un **costo**.' },
      {
        ask: 'Rosa pregunta: «Si mañana hago 200 panes más, ¿cuánto más me va a costar?». ¿Qué necesita saber de cada costo?',
        options: [
          { text: 'Si sube o no cuando produce más', ok: true, reply: '¡Eso! A eso se le llama clasificar por **comportamiento**.' },
          { text: 'Si se puede ligar a un pan en particular', reply: 'Eso sirve para saber cuánto cuesta un pan. Para saber cuánto **más** costará producir más, necesita ver **si sube con la producción**.' },
          { text: 'Cuánto tiene en el banco', reply: 'El banco no dice qué costos se moverán. Necesita saber **si cada costo sube cuando produce más**.' },
        ],
      },
      { text: 'Un **costo** es el valor de lo que se entrega para tener un bien o servicio. Se clasifica para responder preguntas:\n📈 **Comportamiento:** ¿cambia si produzco más? (fijo, variable, mixto)\n🔎 **Rastreabilidad:** ¿se liga a un producto? (directo, indirecto)' },
      {
        match: {
          title: 'Une cada palabra con su significado',
          pairs: [
            ['Costo', 'Valor de lo que se entrega para tener un bien o servicio'],
            ['Comportamiento', 'Cómo cambia el costo si produces más o menos'],
            ['Rastreabilidad', 'Si el costo se puede ligar a un producto, orden o departamento'],
            ['Objeto de costo', 'Aquello a lo que le quieres sacar el costo: un pan, un pedido, un área'],
          ],
        },
      },
      {
        sort: {
          title: 'Un costo lleva dos etiquetas. ¿Cuáles lleva cada uno?',
          buckets: ['Variable y directo', 'Fijo e indirecto'],
          items: [
            { text: 'La harina que va dentro de cada bolillo', bucket: 0, why: 'Sube con cada pan (variable) y va dentro del pan (directo).' },
            { text: 'La renta del local donde está el horno', bucket: 1, why: 'Se paga igual hagas mucho o poco pan, y sirve a todos los panes.' },
            { text: 'La mantequilla de cada concha', bucket: 0, why: 'Va dentro del producto y crece con cada pieza.' },
            { text: 'El sueldo del supervisor de la panadería', bucket: 1, why: 'Es igual cada mes y cuida toda la producción, no un pan en particular.' },
          ],
        },
      },
      { tip: 'Dos preguntas, dos clasificaciones: **¿cambia con el volumen?** (fijo o variable) y **¿se liga al producto?** (directo o indirecto).' },
    ],
    // ¿Sube si produces más?
    [
      {
        ask: 'Este mes La Espiga hará **el doble** de pan. ¿Qué costo se duplica, más o menos?',
        options: [
          { text: 'La harina', ok: true, reply: '¡Sí! Más pan, más harina. Es un costo **variable**.' },
          { text: 'La renta del local', reply: 'La renta es la misma hagas poco o mucho pan: es **fija**. La que se duplica es la **harina**.' },
          { text: 'El sueldo del supervisor', reply: 'Su sueldo no cambia con los panes: es **fijo**. La que se duplica es la **harina**.' },
        ],
      },
      { text: 'Tres comportamientos:\n📈 **Variable:** sube en total con cada pan; por pieza es igual.\n🏠 **Fijo:** igual en total dentro del rango relevante.\n🔀 **Mixto:** una parte fija y otra variable, como el recibo de gas: cargo fijo más lo que consumes.' },
      {
        sort: {
          title: '¿Fijo, variable o mixto?',
          buckets: ['Fijo', 'Variable', 'Mixto'],
          items: [
            { text: 'Renta del local: $18,000 al mes', bucket: 0, why: 'Se paga igual hagas mucho o poco pan.' },
            { text: 'Harina de cada pan', bucket: 1, why: 'Sube con cada pieza.' },
            { text: 'Gas: cargo fijo mensual más lo que consumes', bucket: 2, why: 'Tiene una parte fija y otra que crece con el uso.' },
            { text: 'Comisión de 5 % al repartidor por cada venta', bucket: 1, why: 'Crece con cada venta.' },
            { text: 'Seguro anual del local', bucket: 0, why: 'Es igual pase lo que pase con la producción.' },
            { text: 'Mantenimiento del horno: cuota base más un cargo por hora de uso', bucket: 2, why: 'Parte fija (la cuota) y parte variable (las horas).' },
          ],
        },
      },
      { text: 'Para separar un mixto se usa el **punto alto–punto bajo**: solo el mes de más y el de menos actividad. Datos del gas: mes bajo **400 hornadas** y **$9,000**; mes alto **900 hornadas** y **$14,000**.' },
      {
        calc: {
          question: '¿Cuánto sube el gas por **cada hornada** (costo variable unitario)?',
          answer: 10,
          hint: 'diferencia de costo ÷ diferencia de hornadas.',
          why: '(14,000 − 9,000) ÷ (900 − 400) = 5,000 ÷ 500 = **$10 por hornada**.',
        },
      },
      {
        calc: {
          question: 'Con **$10** por hornada, ¿cuál es la parte **fija** del gas al mes?',
          answer: 5000,
          hint: 'toma el mes bajo y réstale 10 × 400.',
          why: '9,000 − 10 × 400 = 9,000 − 4,000 = **$5,000**. Con el mes alto da igual: 14,000 − 9,000 = $5,000.',
        },
      },
      {
        calc: {
          question: 'El próximo mes planea **700 hornadas**. ¿Cuánto espera pagar de gas?',
          answer: 12000,
          hint: 'parte fija + 10 × hornadas esperadas.',
          why: '5,000 + 10 × 700 = 5,000 + 7,000 = **$12,000**.',
        },
      },
      { tip: 'Error común: dividir el costo total entre las unidades. Eso mezcla lo fijo con lo variable. Usa **diferencia ÷ diferencia**.' },
    ],
    // ¿Va dentro del pan?
    [
      {
        ask: 'Un bolillo lleva harina, el trabajo del panadero y el gas del horno. ¿Cuál se puede ligar **a ese bolillo** en particular?',
        options: [
          { text: 'La harina que lleva', ok: true, reply: '¡Sí! Va dentro del pan: es un costo **directo**.' },
          { text: 'El gas del horno', reply: 'El horno cuece muchos panes a la vez: no se sabe cuánto gas es de un bolillo. Es **indirecto**. La que sí se liga es la **harina**.' },
          { text: 'La renta del local', reply: 'La renta sirve a toda la producción: es **indirecta**. La que va dentro del bolillo es la **harina**.' },
        ],
      },
      { text: 'El costo de producir tiene tres partes:\n🌾 **MPD** (materia prima directa): lo que va dentro.\n👩‍🍳 **MOD** (mano de obra directa): quien lo hace con sus manos.\n🔥 **CIF** (cargos indirectos): lo que ayuda a producir todo.\nLo de **vender y administrar** no entra: es **gasto del periodo**.' },
      {
        sort: {
          title: 'Clasifica los costos de producir pan',
          buckets: ['MPD', 'MOD', 'CIF'],
          items: [
            { text: 'Azúcar y huevo de los panes dulces', bucket: 0, why: 'Va dentro del pan: materia prima directa.' },
            { text: 'Sueldo del panadero que amasa', bucket: 1, why: 'Trabaja directamente en el pan: mano de obra directa.' },
            { text: 'Gas del horno', bucket: 2, why: 'Ayuda a hornear todo, pero no se liga a un pan en particular.' },
            { text: 'Pago al decorador por cada pastel que decora', bucket: 1, why: 'Trabaja directamente en cada pastel: mano de obra directa.' },
            { text: 'Sueldo del supervisor de producción', bucket: 2, why: 'Cuida toda la producción: cargo indirecto.' },
          ],
        },
      },
      { text: 'Un mes de La Espiga: MPD **$36,000**, MOD **$24,000**, CIF **$18,000** y publicidad **$9,000**. Hizo **6,000 piezas**.' },
      {
        calc: {
          question: '¿Cuánto es el **costo de conversión** (MOD + CIF)?',
          answer: 42000,
          hint: 'lo que cuesta convertir la harina en pan: mano de obra directa + cargos indirectos.',
          why: '24,000 + 18,000 = **$42,000**. La publicidad no entra: es gasto del periodo.',
        },
      },
      {
        calc: {
          question: '¿Cuánto cuesta **cada pieza** (costo de producción ÷ piezas)?',
          answer: 13,
          hint: 'suma MPD + MOD + CIF (sin la publicidad) y divide entre 6,000.',
          why: '(36,000 + 24,000 + 18,000) ÷ 6,000 = 78,000 ÷ 6,000 = **$13 por pieza**.',
        },
      },
      { tip: '**Costo primo** = MPD + MOD. **Conversión** = MOD + CIF. **Producción** = MPD + MOD + CIF. La MOD está en los tres.' },
    ],
    // ¿Cuándo lo fijo deja de serlo?
    [
      { text: 'La renta de La Espiga es **$18,000** al mes y su horno da hasta **3,000 piezas** (su **rango relevante**).' },
      {
        ask: 'Si Rosa hace más pan, ¿qué pasa con la renta que le toca a **cada pieza**?',
        options: [
          { text: 'Baja, porque se reparte entre más piezas', ok: true, reply: '¡Exacto! La renta total no cambia, pero por pieza baja. Compruébalo abajo.' },
          { text: 'Se queda igual, porque es fija', reply: 'Es fija en **total**. Por pieza **baja**, porque los $18,000 se reparten entre más panes.' },
          { text: 'Sube', reply: 'La renta total sigue en $18,000. Repartida entre más panes, a cada uno le toca **menos**.' },
        ],
      },
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
            done: 'La renta **total** no se movió: sigue en $18,000. Por eso el fijo **por pieza** no es constante.',
          },
        },
      },
      {
        ask: 'Rosa quiere hacer **4,500 piezas**, más de lo que da su horno. Tendrá que rentar otro local. ¿Qué pasa con la renta?',
        options: [
          { text: 'Salta a otro nivel: es un costo escalonado', ok: true, reply: '¡Exacto! Al pasar la capacidad, el fijo brinca a un escalón más alto.' },
          { text: 'Sigue igual: es un costo fijo', reply: 'Solo es fijo **dentro** del rango relevante. Fuera de él **salta** a otro nivel.' },
          { text: 'Baja, porque hace más piezas', reply: 'Por pieza podría bajar, pero en total **sube**: hay que pagar otro local.' },
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
