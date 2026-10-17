import type { InteractiveLesson } from './types'

export const intL112: InteractiveLesson = {
  lessonId: 'L1-12',
  sections: [
    // ¿Esto se anota o no?
    [
      { text: 'Don Toño tiene una taquería 🌮 y una caja de zapatos llena de tickets. Cada mes repite los mismos pasos para ordenarlos: eso es el **ciclo contable**.' },
      {
        ask: 'Toño pidió una **cotización** de un refrigerador, pero no lo compró. ¿Se anota?',
        options: [
          { text: 'No, todavía no pasa nada con el dinero', ok: true, reply: '¡Bien! Solo es una idea. Se anota cuando **ya pasó** algo con el dinero del negocio.' },
          { text: 'Sí, todo papel se anota', reply: 'Un papel no basta. La cotización no cambia nada todavía: **no se anota**.' },
          { text: 'Sí, como si ya lo hubiera comprado', reply: 'Aún no lo compra. Solo se anota lo que **ya ocurrió**: no se anota.' },
        ],
      },
      { text: 'Se anota solo si es una **transacción**:\n✅ **Ya ocurrió.**\n🏪 Es del **negocio**, no del dueño.\n💲 Se mide en **pesos**.\n🧾 Casi siempre tiene **comprobante** (ticket, factura, estado de cuenta).' },
      {
        multi: {
          title: 'En la taquería de Toño, ¿cuáles se anotan?',
          items: [
            { text: 'Vendió tacos por $2,300', ok: true },
            { text: 'Pidió una cotización de un refrigerador', ok: false },
            { text: 'Pagó la luz del local, $950', ok: true },
            { text: 'Toño compró un regalo con su tarjeta personal', ok: false },
            { text: 'Compró tortillas a crédito por $1,200', ok: true },
            { text: 'Piensa abrir otra sucursal el próximo año', ok: false },
          ],
          why: 'La cotización y los planes **aún no pasan**. El regalo es del **dueño**, no del negocio.',
        },
      },
      { tip: 'Antes de anotar, pregúntate: **¿ya pasó, es del negocio y se mide en pesos?**' },
    ],
    // ¿Diario o mayor?
    [
      { text: 'Toño quiere saber cuánto hay en Caja, pero sus notas están **por fecha** y todo revuelto.' },
      { text: '📔 **Libro diario:** anota cada operación en **orden de fecha**. Cada anotación es un **asiento** (en México, con su póliza).\n📚 **Libro mayor:** junta todo **por cuenta**: son las cuentas T.' },
      {
        ask: '¿Dónde ve Toño rápido cuánto hay en Caja?',
        options: [
          { text: 'En el libro mayor', ok: true, reply: '¡Exacto! El mayor junta todo lo de Caja en su cuenta T.' },
          { text: 'En el libro diario', reply: 'El diario va por fecha y mezcla todas las cuentas. Para ver Caja junta, usa el **libro mayor**.' },
          { text: 'En el ticket de la última venta', reply: 'Un ticket es solo una operación. Para ver todo lo de Caja junto, usa el **libro mayor**.' },
        ],
      },
      { text: 'Pasar cada línea del diario a su cuenta del mayor se llama **pase**.' },
      {
        order: {
          title: 'El camino de una operación',
          steps: [
            'Ocurre la operación y llega el comprobante',
            'Se anota el asiento en el libro diario',
            'Se pasa cada línea a su cuenta T del libro mayor',
            'Se saca el saldo de cada cuenta',
          ],
          done: '¡Así es! Del comprobante al diario, del diario al mayor (el **pase**) y de ahí los saldos.',
        },
      },
    ],
    // ¿Cuadran las cuentas?
    [
      { text: 'Fin de mes. Toño quiere revisar que no se le cruzó nada. Para eso arma la **balanza de comprobación**.' },
      { text: 'Es una lista con el saldo de **todas** las cuentas del mayor:\n⬅️ Saldos **deudores** en una columna.\n➡️ Saldos **acreedores** en otra.\n⚖️ Con partida doble, **las dos suman lo mismo**.' },
      {
        calc: {
          question: 'Deudores: Bancos $60,000 + Mobiliario $25,000 + Renta $8,000. Acreedores: Proveedores $15,000 + Capital social $60,000 + Ventas ?. ¿Cuánto deben ser las Ventas para que cuadre?',
          answer: 18000,
          hint: 'Los deudores suman 93,000. ¿Cuánto falta en los acreedores para llegar a 93,000?',
          why: '93,000 − 15,000 − 60,000 = **$18,000**. Las dos columnas suman 93,000.',
        },
      },
      {
        sort: {
          title: '¿Mito o realidad?',
          buckets: ['Mito', 'Realidad'],
          items: [
            { text: 'Si la balanza cuadra, todo está bien registrado', bucket: 0, why: 'Cuadrar no lo prueba todo: hay errores que afectan igual a las dos columnas.' },
            { text: 'Si olvidaste una venta completa, la balanza igual cuadra', bucket: 1, why: 'No se anotó ni el cargo ni el abono: las dos columnas siguen iguales.' },
            { text: 'Un asiento repetido hace que la balanza no cuadre', bucket: 0, why: 'Se repite el cargo y el abono: las dos columnas suben igual y sí cuadra.' },
            { text: 'Si la balanza no cuadra, hay un error', bucket: 1, why: 'Con partida doble, las dos columnas siempre deben ser iguales.' },
          ],
        },
      },
      {
        sort: {
          title: '¿Dónde lo encuentras?',
          buckets: ['Libro diario', 'Libro mayor', 'Balanza'],
          items: [
            { text: '«3 de mayo: cargo a Papelería $1,500, abono a Caja $1,500»', bucket: 0, why: 'Un asiento con su fecha: libro diario.' },
            { text: 'Todos los movimientos de Bancos del mes', bucket: 1, why: 'Todo junto por cuenta: libro mayor.' },
            { text: '«Total deudor $93,000 = total acreedor $93,000»', bucket: 2, why: 'Los dos totales iguales: balanza.' },
            { text: 'La cuenta T de Clientes', bucket: 1, why: 'Las cuentas T forman el mayor.' },
            { text: 'Los asientos uno tras otro por fecha', bucket: 0, why: 'Orden de fecha: libro diario.' },
          ],
        },
      },
      {
        order: {
          title: 'Los primeros pasos del ciclo',
          steps: ['Identificar la transacción', 'Anotarla en el libro diario', 'Pasarla al libro mayor', 'Armar la balanza de comprobación'],
          done: '¡Eso! Ya tienes la primera mitad del ciclo contable.',
        },
      },
    ],
    // ¿Cómo se cierra el mes?
    [
      { text: 'El 31 de enero, Toño le debe **$6,000** a su taquero por días ya trabajados. Se los paga el 5 de febrero.' },
      {
        ask: '¿En qué mes es el gasto de ese sueldo?',
        options: [
          { text: 'En enero, cuando se trabajó', ok: true, reply: '¡Bien! El gasto va en el mes en que **realmente ocurrió**, aunque se pague después.' },
          { text: 'En febrero, cuando se paga', reply: 'El trabajo fue en enero, así que el gasto es de **enero**. Pagar después no lo cambia.' },
          { text: 'En ninguno, porque aún no se paga', reply: 'El taquero ya trabajó: es gasto de **enero**, aunque se pague en febrero.' },
        ],
      },
      { text: 'Para eso sirven los **ajustes**: asientos al final del mes para que cada ingreso y gasto quede **en su mes**.' },
      {
        order: {
          title: 'El fin de mes',
          steps: [
            'Ajustes: cada ingreso y gasto en su mes',
            'Estados financieros con los saldos ajustados',
            'Cierre: ingresos y gastos quedan en cero',
          ],
          done: 'Así el siguiente mes empieza a contar sus ingresos y gastos desde cero.',
        },
      },
      {
        ask: 'Al cerrar, ¿a dónde se va la utilidad del mes?',
        options: [
          { text: 'Al capital contable', ok: true, reply: '¡Eso! La utilidad es de los dueños, por eso pasa al **capital**.' },
          { text: 'Desaparece', reply: 'No se pierde: pasa al **capital contable**, porque es de los dueños.' },
          { text: 'Se queda en Ventas para el mes siguiente', reply: 'En el cierre, Ventas queda en cero. La utilidad pasa al **capital contable**.' },
        ],
      },
      { tip: 'Ajustes → estados financieros → cierre. Solo necesitas la idea: lo practicarás a fondo más adelante.' },
    ],
  ],
}
