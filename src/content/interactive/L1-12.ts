import type { InteractiveLesson } from './types'

export const intL112: InteractiveLesson = {
  lessonId: 'L1-12',
  sections: [
    // Identificación de transacciones
    [
      { text: 'El **ciclo contable** son los pasos que se repiten cada mes para convertir lo que pasa en el negocio en información. Todo empieza con una pregunta: **¿esto se registra?**' },
      { tip: 'Es **transacción** si: ya ocurrió, afecta al negocio (no solo al dueño), se mide en pesos y casi siempre tiene un comprobante (ticket, factura, estado de cuenta).' },
      {
        multi: {
          title: 'En una taquería 🌮, ¿cuáles se registran?',
          items: [
            { text: 'Vendió tacos por $2,300', ok: true },
            { text: 'Pidió una cotización de un refrigerador', ok: false },
            { text: 'Pagó la renta del local con transferencia', ok: true },
            { text: 'El dueño pagó con su tarjeta personal la cena de su familia', ok: false },
            { text: 'Compró tortillas a crédito con factura', ok: true },
            { text: 'Piensan abrir otra sucursal el próximo año', ok: false },
          ],
          why: 'La cotización y los planes **aún no pasan**. La cena familiar es del **dueño**, no del negocio.',
        },
      },
    ],
    // Libro diario y libro mayor
    [
      { text: 'El **libro diario** anota todo en orden de fecha, como un diario personal. El **libro mayor** junta los movimientos **por cuenta** (las cuentas T).' },
      {
        order: {
          title: 'El camino de una operación',
          steps: [
            'Ocurre la operación y llega el comprobante (ticket o factura)',
            'Se anota el asiento en el **libro diario** (póliza)',
            'Se pasa cada línea a su cuenta T en el **libro mayor**',
            'Se saca el saldo de cada cuenta',
          ],
          done: '¡Así es! Del comprobante al diario, del diario al mayor (el **pase**) y de ahí los saldos.',
        },
      },
      {
        ask: '¿Dónde ves rápido cuánto dinero hay en Caja, sin revisar todo el mes?',
        options: [
          { text: 'En el libro mayor', ok: true, reply: '¡Exacto! El mayor junta todo lo de Caja en su cuenta T.' },
          { text: 'En el libro diario', reply: 'El diario está en orden de fecha y mezcla todas las cuentas. Para ver Caja junta, usa el **libro mayor**.' },
        ],
      },
    ],
    // Balanza de comprobación
    [
      { text: 'La **balanza de comprobación** lista el saldo de **todas** las cuentas: deudores en una columna, acreedores en otra. **Las dos deben sumar lo mismo.**' },
      {
        calc: {
          question: 'Saldos deudores: Bancos $60,000 + Mobiliario $25,000 + Renta $8,000. Acreedores: Proveedores $15,000 + Capital social $60,000 + **Ventas ?**. ¿Cuánto deben ser las Ventas para que cuadre?',
          answer: 18000,
          hint: 'los deudores suman 93,000. ¿Cuánto falta en los acreedores para llegar a 93,000?',
          why: '93,000 − 15,000 − 60,000 = **$18,000**. Las dos columnas suman 93,000.',
        },
      },
      {
        sort: {
          title: '¿Mito o realidad?',
          buckets: ['Mito', 'Realidad'],
          items: [
            { text: 'Si la balanza cuadra, todo está bien registrado.', bucket: 0, why: 'No detecta una operación olvidada, un asiento repetido o una cuenta equivocada del mismo lado.' },
            { text: 'Si la balanza **no** cuadra, seguro hay un error.', bucket: 1, why: 'Con partida doble, las dos columnas siempre deben ser iguales.' },
          ],
        },
      },
    ],
    // Ajustes y cierre
    [
      { text: 'Al final del periodo vienen tres pasos más. Solo necesitas la idea general:' },
      {
        order: {
          title: 'Fin de mes',
          steps: [
            '**Ajustes:** que cada ingreso y gasto quede en su mes (por ejemplo, sueldos trabajados que se pagan el mes siguiente)',
            '**Estados financieros:** se preparan con los saldos ajustados',
            '**Cierre:** ingresos y gastos se dejan en cero y la utilidad pasa al capital',
          ],
          done: 'Así el siguiente mes empieza a contar sus ingresos y gastos desde cero.',
        },
      },
      {
        ask: 'Después del cierre, ¿a dónde se va la utilidad del periodo?',
        options: [
          { text: 'Al capital contable', ok: true, reply: '¡Eso! La utilidad es de los dueños, por eso pasa al **capital**.' },
          { text: 'Desaparece', reply: 'No se pierde: pasa al **capital contable**, porque es de los dueños.' },
        ],
      },
    ],
  ],
}
