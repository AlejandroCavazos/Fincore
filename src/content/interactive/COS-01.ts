import type { InteractiveLesson } from './types'

export const intCOS01: InteractiveLesson = {
  lessonId: 'COS-01',
  sections: [
    // ¿Qué es la contabilidad de costos?
    [
      { text: 'Doña Lupe tiene una **tortillería** 🌮. Quiere saber cuánto le cuesta cada kilo para ponerle un buen precio. Eso mide la **contabilidad de costos**: lo que cuesta producir algo.' },
      { text: 'Dos palabras que se confunden: un **costo** es para **fabricar** (se guarda en el inventario). Un **gasto** es para **vender o administrar** (se resta en el mes).' },
      {
        sort: {
          title: '¿Costo o gasto en la tortillería?',
          buckets: ['Costo (fabricar)', 'Gasto (vender o administrar)'],
          items: [
            { text: 'La harina de maíz para la masa', bucket: 0, why: 'Se usa para fabricar las tortillas: es costo y entra al inventario.' },
            { text: 'El sueldo del tortillero que opera la máquina', bucket: 0, why: 'Transforma la masa en tortillas: es costo.' },
            { text: 'El gas de la máquina tortilladora', bucket: 0, why: 'Se consume al fabricar: es costo.' },
            { text: 'El anuncio en redes sociales', bucket: 1, why: 'Sirve para vender, no para fabricar: es gasto de venta.' },
            { text: 'El sueldo de la cajera', bucket: 1, why: 'Cobrar es vender, no fabricar: es gasto.' },
          ],
        },
      },
      {
        ask: 'Doña Lupe compró **$600** de harina hoy, pero las tortillas aún no se venden. ¿Qué pasa con ese costo?',
        options: [
          { text: 'Se resta hoy como gasto del mes', reply: 'No: eso pasa con los gastos. La harina es costo de fabricar.' },
          { text: 'Se queda en el inventario y se vuelve costo de ventas al vender', ok: true, reply: '¡Exacto! El costo se queda "guardado" en el inventario hasta que vendes.' },
          { text: 'No se registra hasta fin de año', reply: 'No: se registra, pero se queda en el inventario hasta que se vende.' },
        ],
      },
      { tip: 'Pregunta clave: **¿sirve para fabricar?** Entonces es costo. **¿Sirve para vender o administrar?** Entonces es gasto.' },
    ],
    // Los tres elementos del costo
    [
      { text: 'Todo costo de producción tiene **tres piezas**: el material principal (**MPD**), el sueldo de quien lo transforma (**MOD**) y todo lo demás de la fábrica (**CIF**).' },
      {
        match: {
          title: 'Une cada término con su significado',
          pairs: [
            ['MPD', 'El material principal que se ve en el producto'],
            ['MOD', 'El sueldo de quien transforma el material'],
            ['CIF', 'Los demás costos de la fábrica: renta, luz, supervisor'],
            ['Costo primo', 'MPD + MOD (lo directo)'],
            ['Costo de conversión', 'MOD + CIF (lo que cuesta transformar)'],
          ],
        },
      },
      { text: 'Ahora clasifica los costos de una **carpintería** que hace mesas 🪑.' },
      {
        sort: {
          title: '¿A qué elemento pertenece?',
          buckets: ['MPD', 'MOD', 'CIF', 'No es costo de producción'],
          items: [
            { text: 'La madera de la mesa', bucket: 0, why: 'Es el material principal y se mide por pieza.' },
            { text: 'El sueldo del carpintero que arma la mesa', bucket: 1, why: 'Transforma la madera con sus manos: MOD.' },
            { text: 'Los clavos y el pegamento', bucket: 2, why: 'Son materiales menores que no se miden fácil por pieza: CIF.' },
            { text: 'La renta del taller', bucket: 2, why: 'Es de la fábrica pero se comparte entre todo: CIF.' },
            { text: 'El sueldo del supervisor', bucket: 2, why: 'No arma mesas con sus manos: CIF.' },
            { text: 'La comisión del vendedor', bucket: 3, why: 'Es para vender: gasto, no costo de producción.' },
          ],
        },
      },
      {
        calc: {
          question: 'Una mesa usa **$1,500** de madera, **$900** de carpintero y **$300** de CIF. ¿Cuál es su **costo de producción**?',
          answer: 2700,
          hint: 'suma MPD + MOD + CIF.',
          why: '1,500 + 900 + 300 = **$2,700**. El costo primo sería $2,400 y el de conversión $1,200.',
        },
      },
      {
        calc: {
          question: 'Con la misma mesa (madera $1,500, carpintero $900, CIF $300), ¿cuál es el **costo de conversión**?',
          answer: 1200,
          hint: 'MOD + CIF. La madera no entra.',
          why: '900 + 300 = **$1,200**. Ojo: no sumes primo + conversión para el total, contarías la MOD dos veces.',
        },
      },
      { tip: '**Costo de producción = MPD + MOD + CIF.** Primo = MPD + MOD. Conversión = MOD + CIF.' },
    ],
    // Del costo de producción al costo de ventas
    [
      { text: 'Una fábrica tiene **tres inventarios**: materia prima, producción en proceso y producto terminado. El costo viaja de uno a otro como en una banda transportadora.' },
      {
        order: {
          title: 'Ordena el viaje del costo',
          steps: [
            'Calcular la materia prima usada',
            'Sumar MOD y CIF para obtener el costo de producción',
            'Ajustar por lo que quedó a medio hacer: costo de lo terminado',
            'Ajustar por lo que no se vendió: costo de ventas',
            'Presentar el costo de ventas en el estado de resultados',
          ],
          done: 'Materia prima → en proceso → terminado → vendido. Siempre en ese orden.',
        },
      },
      {
        calc: {
          question: 'La tortillería tenía **$5,000** de harina, compró **$40,000** y le quedan **$3,000**. ¿Cuánta **materia prima usó**?',
          answer: 42000,
          hint: 'inicial + compras − final.',
          why: '5,000 + 40,000 = 45,000; 45,000 − 3,000 = **$42,000** usados.',
        },
      },
      {
        calc: {
          question: 'Terminó producto por **$80,000**, tenía **$6,000** de producto terminado al inicio y le quedan **$4,000** al final. ¿Cuál es el **costo de ventas**?',
          answer: 82000,
          hint: 'inicial PT + terminado − final PT.',
          why: '6,000 + 80,000 = 86,000; 86,000 − 4,000 = **$82,000**. Lo que queda en bodega no se vendió, por eso se resta.',
        },
      },
      { tip: 'En los tres pasos la idea es igual: **lo que tenías + lo que entró − lo que quedó**.' },
    ],
  ],
}
