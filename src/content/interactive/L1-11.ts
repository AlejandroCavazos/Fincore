import type { InteractiveLesson } from './types'

export const intL111: InteractiveLesson = {
  lessonId: 'L1-11',
  sections: [
    // Estructura de la cuenta T
    [
      { text: 'Una **cuenta T** es un dibujo con forma de T para ver los movimientos de **una sola cuenta**. Como tu libreta dividida en dos: de un lado lo que entra, del otro lo que sale.' },
      {
        match: {
          title: 'Las partes de la T',
          pairs: [
            ['Arriba', 'El nombre de la cuenta'],
            ['Izquierda', 'Debe: los cargos'],
            ['Derecha', 'Haber: los abonos'],
            ['Libro mayor', 'El conjunto de todas las cuentas T'],
          ],
        },
      },
      { tip: 'Hay **una cuenta T por cada cuenta** que usa el negocio. El saldo inicial va del lado de su naturaleza.' },
    ],
    // Registro de movimientos
    [
      { text: 'La tiendita de Doña Lupe tiene su cuenta T de **Caja**. Manda cada movimiento a su lado y mira cómo se llena.' },
      {
        tacct: {
          title: 'Llena la T',
          account: 'Caja',
          moves: [
            { story: 'Doña Lupe empieza el día con **$5,000** en la caja.', side: 'D', amount: 5000, why: 'Caja es activo: su saldo inicial va del lado de su naturaleza, el debe.' },
            { story: 'Vende **$800** de abarrotes en efectivo.', side: 'D', amount: 800, why: 'Entra dinero: Caja **sube** con cargo.' },
            { story: 'Paga **$2,000** al repartidor de refrescos.', side: 'C', amount: 2000, why: 'Sale dinero: Caja **baja** con abono.' },
            { story: 'Vende **$1,200** más.', side: 'D', amount: 1200, why: 'Entra dinero: cargo.' },
            { story: 'Paga **$500** de luz.', side: 'C', amount: 500, why: 'Sale dinero: abono.' },
          ],
        },
      },
      { tip: 'Cada asiento toca **al menos dos cuentas T**: la venta de $800 también se anota en el **haber de Ventas**.' },
    ],
    // Cálculo de saldos
    [
      { text: 'Para sacar el saldo: **suma el debe, suma el haber y resta**.' },
      {
        calc: {
          question: 'Proveedores tiene en el haber **$12,000** y **$3,000**, y en el debe **$8,000**. ¿Cuánto queda de saldo?',
          answer: 7000,
          hint: 'suma el haber (12,000 + 3,000) y réstale el debe.',
          why: 'Haber 15,000 − Debe 8,000 = **$7,000**. Como el haber es mayor, el saldo es **acreedor**: es lo que aún se debe.',
        },
      },
      {
        ask: 'Si en una cuenta T el debe suma **$4,000** y el haber suma **$4,000**, ¿cómo queda?',
        options: [
          { text: 'Saldada (en cero)', ok: true, reply: '¡Eso! Cuando los dos lados son iguales, la cuenta está **saldada**.' },
          { text: 'Con saldo de $8,000', reply: 'No se suman: se **restan**. 4,000 − 4,000 = 0, la cuenta está **saldada**.' },
        ],
      },
    ],
  ],
}
