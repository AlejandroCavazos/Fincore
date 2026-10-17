import type { InteractiveLesson } from './types'

export const intCOS01: InteractiveLesson = {
  lessonId: 'COS-01',
  sections: [
    // ¿Costo o gasto?
    [
      { text: 'Doña Lupe tiene una **tortillería** 🌮. Vende mucho, pero no sabe cuánto le cuesta **cada kilo**. Así no sabe si su precio es bueno.' },
      {
        ask: '¿Qué necesita saber Lupe para ponerle buen precio al kilo?',
        options: [
          { text: 'Cuánto le cuesta hacer cada kilo', ok: true, reply: '¡Eso! Si sabe lo que le cuesta producirlo, sabe cuánto cobrar para ganar.' },
          { text: 'Cuánto cobra la tortillería de enfrente', reply: 'Ayuda a comparar, pero si su costo es más alto, perdería. Primero necesita saber **cuánto le cuesta cada kilo**.' },
          { text: 'Cuántos clientes llegan al día', reply: 'Eso dice cuánto vende, no cuánto le cuesta. Le falta saber **el costo de cada kilo**.' },
        ],
      },
      { text: 'Eso mide la **contabilidad de costos**: lo que cuesta **producir** algo o dar un servicio.' },
      { text: 'Dos palabras que se confunden:\n🏭 **Costo:** lo que gastas para **fabricar**. Se guarda en el inventario.\n📣 **Gasto:** lo que pagas para **vender o administrar**. Se resta en el mes.' },
      {
        sort: {
          title: '¿Costo o gasto en la tortillería?',
          buckets: ['Costo (fabricar)', 'Gasto (vender o administrar)'],
          items: [
            { text: 'La harina de maíz para la masa', bucket: 0, why: 'Se usa para fabricar las tortillas: es costo.' },
            { text: 'El sueldo del tortillero que opera la máquina', bucket: 0, why: 'Transforma la masa en tortillas: es costo.' },
            { text: 'El anuncio en redes sociales', bucket: 1, why: 'Sirve para vender, no para fabricar: es gasto.' },
            { text: 'El sueldo de la cajera', bucket: 1, why: 'Cobrar es vender, no fabricar: es gasto.' },
            { text: 'La comisión del repartidor por cada venta', bucket: 1, why: 'Se paga por vender, no por fabricar: es gasto, no costo de producción.' },
          ],
        },
      },
      {
        ask: 'Lupe compró **$600** de harina hoy, pero esas tortillas aún no se venden. ¿Qué pasa con ese costo?',
        options: [
          { text: 'Se queda en el inventario hasta que vende', ok: true, reply: '¡Exacto! El costo se queda "guardado" y se vuelve **costo de ventas** cuando vende.' },
          { text: 'Se resta hoy como gasto del mes', reply: 'Eso pasa con los gastos. La harina es para fabricar: se queda en el inventario hasta que vende.' },
          { text: 'No se anota hasta fin de año', reply: 'Sí se anota hoy, pero se queda en el inventario hasta que vende.' },
        ],
      },
      { tip: '**¿Sirve para fabricar?** Es costo. **¿Sirve para vender o administrar?** Es gasto.' },
    ],
    // ¿De qué está hecho un costo?
    [
      { text: 'Cada kilo de tortillas de Lupe se arma con **tres piezas**, como una receta 🧩.' },
      { text: '🌽 **MPD** (materia prima directa): el material principal, la masa.\n👷 **MOD** (mano de obra directa): el sueldo de quien la transforma, el tortillero.\n💡 **CIF** (costos indirectos de fabricación): todo lo demás de la fábrica, como la renta o la luz.' },
      {
        sort: {
          title: '¿A qué pieza pertenece?',
          buckets: ['MPD', 'MOD', 'CIF'],
          items: [
            { text: 'La masa de maíz', bucket: 0, why: 'Es el material principal y se mide por kilo: MPD.' },
            { text: 'El sueldo del tortillero que opera la máquina', bucket: 1, why: 'Transforma la masa con su máquina: MOD.' },
            { text: 'La renta del local', bucket: 2, why: 'Es de la fábrica, pero se comparte entre todo: CIF.' },
            { text: 'La luz de la tortilladora', bucket: 2, why: 'No se mide fácil por kilo: CIF.' },
            { text: 'El sueldo de la encargada que supervisa', bucket: 2, why: 'No hace tortillas con sus manos: CIF.' },
          ],
        },
      },
      { text: 'Dos sumas útiles:\n➕ **Costo primo** = MPD + MOD (lo directo).\n🔄 **Costo de conversión** = MOD + CIF (lo que cuesta transformar).\n🧮 **Costo de producción** = MPD + MOD + CIF.' },
      {
        match: {
          title: 'Une cada costo con su suma',
          pairs: [
            ['Costo primo', 'MPD + MOD'],
            ['Costo de conversión', 'MOD + CIF'],
            ['Costo de producción', 'MPD + MOD + CIF'],
          ],
        },
      },
      {
        calc: {
          question: 'Hoy Lupe usó **$1,500** de masa, pagó **$900** al tortillero y tuvo **$300** de CIF. ¿Cuál es su **costo de producción**?',
          answer: 2700,
          hint: 'Suma las tres piezas: MPD + MOD + CIF.',
          why: '1,500 + 900 + 300 = **$2,700**. El costo primo sería 1,500 + 900 = $2,400.',
        },
      },
      {
        calc: {
          question: 'Con los mismos números (masa $1,500, tortillero $900, CIF $300), ¿cuál es el **costo de conversión**?',
          answer: 1200,
          hint: 'MOD + CIF. La masa no entra.',
          why: '900 + 300 = **$1,200**. Ojo: no sumes primo + conversión para el total, contarías la MOD dos veces.',
        },
      },
      { tip: 'Primo = MPD + MOD. Conversión = MOD + CIF. **Producción = MPD + MOD + CIF.**' },
    ],
    // ¿Cuánto costó lo vendido?
    [
      { text: 'Lupe ahora también hace **totopos en bolsa** 🥨. Al cerrar el mes tiene harina en la bodega, totopos a medio hacer y bolsas listas sin vender.' },
      {
        ask: 'Este mes terminó totopos por **$80,000**, pero algunas bolsas siguen en la bodega. ¿Su costo de ventas es $80,000?',
        options: [
          { text: 'No: solo cuenta lo que sí vendió', ok: true, reply: '¡Bien! Lo que sigue en la bodega no se ha vendido. El costo de ventas es solo lo que salió.' },
          { text: 'Sí: todo lo que terminó ya es costo de ventas', reply: 'Lo que sigue en la bodega no se ha vendido. Se vuelve costo de ventas hasta que lo vende.' },
          { text: 'Sí, y además suma lo que quedó en la bodega', reply: 'Al revés: lo que queda en la bodega **se resta**, porque no se vendió.' },
        ],
      },
      { text: 'El costo viaja por **tres inventarios** como en una banda 🏭:\n🌽 **Materia prima:** lo que compró y aún no usa.\n⚙️ **En proceso:** lo que está a medio hacer.\n📦 **Producto terminado:** lo que está listo para vender.' },
      {
        order: {
          title: 'Ordena el viaje del costo',
          steps: [
            'Calcular la materia prima usada',
            'Sumar MOD y CIF: costo de producción',
            'Restar lo que quedó a medio hacer: costo de lo terminado',
            'Restar lo que no se vendió: costo de ventas',
          ],
          done: 'Materia prima → en proceso → terminado → vendido. Siempre en ese orden.',
        },
      },
      {
        calc: {
          question: 'Lupe tenía **$5,000** de harina, compró **$40,000** y le quedan **$3,000**. ¿Cuánta **materia prima usó**?',
          answer: 42000,
          hint: 'Lo que tenía + lo que compró − lo que quedó.',
          why: '5,000 + 40,000 = 45,000. Menos 3,000 que quedan = **$42,000** usados.',
        },
      },
      {
        calc: {
          question: 'Tenía **$6,000** de totopos listos al inicio, terminó **$80,000** y le quedan **$4,000**. ¿Cuál es su **costo de ventas**?',
          answer: 82000,
          hint: 'Terminado inicial + terminado del mes − terminado final.',
          why: '6,000 + 80,000 = 86,000. Menos 4,000 que no vendió = **$82,000**.',
        },
      },
      { tip: 'En cada paso la idea es igual: **lo que tenías + lo que entró − lo que quedó**.' },
    ],
  ],
}
