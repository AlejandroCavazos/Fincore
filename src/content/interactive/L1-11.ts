import type { InteractiveLesson } from './types'

export const intL111: InteractiveLesson = {
  lessonId: 'L1-11',
  sections: [
    // ¿Qué es una cuenta T?
    [
      { text: 'Doña Lupe tiene una tiendita 🛒. Quiere ver de un vistazo **todo lo que entró y salió de su caja**, sin leer la libreta entera.' },
      {
        ask: '¿Qué le ayudaría más?',
        options: [
          { text: 'Una hoja solo para Caja, dividida en dos lados', ok: true, reply: '¡Eso! De un lado lo que entra y del otro lo que sale. Eso es una **cuenta T**.' },
          { text: 'Anotar todo junto en una sola columna', reply: 'Así se mezcla todo. Mejor una hoja **solo para Caja**, con dos lados: lo que entra y lo que sale.' },
          { text: 'Contar los billetes y no anotar nada', reply: 'Contar dice cuánto hay, pero no **por qué**. Mejor una hoja de Caja con dos lados: eso es una **cuenta T**.' },
        ],
      },
      { text: 'La **cuenta T** es un dibujo con forma de T para **una sola cuenta**:\n🏷️ **Arriba:** el nombre (Caja).\n⬅️ **Izquierda:** el **debe**, ahí van los **cargos**.\n➡️ **Derecha:** el **haber**, ahí van los **abonos**.' },
      {
        match: {
          title: 'Las partes de la T',
          pairs: [
            ['Arriba', 'El nombre de la cuenta'],
            ['Izquierda (debe)', 'Los cargos'],
            ['Derecha (haber)', 'Los abonos'],
            ['Libro mayor', 'El conjunto de todas las cuentas T'],
          ],
        },
      },
      { text: '¿De qué lado **aumenta** cada cuenta? Depende de su naturaleza:\n⬅️ **Activo y gasto:** aumentan en el **debe**.\n➡️ **Pasivo, capital e ingreso:** aumentan en el **haber**.' },
      {
        sort: {
          title: '¿De qué lado aumenta?',
          buckets: ['Debe (izquierda)', 'Haber (derecha)'],
          items: [
            { text: 'Caja (activo)', bucket: 0, why: 'Activo: aumenta en el debe.' },
            { text: 'Proveedores (pasivo)', bucket: 1, why: 'Pasivo: aumenta en el haber.' },
            { text: 'Ventas (ingreso)', bucket: 1, why: 'Ingreso: aumenta en el haber.' },
            { text: 'Luz (gasto)', bucket: 0, why: 'Gasto: aumenta en el debe.' },
            { text: 'Capital social (capital)', bucket: 1, why: 'Capital: aumenta en el haber.' },
          ],
        },
      },
      {
        ask: 'Lupe le debe $3,000 a su proveedor desde el mes pasado. ¿Dónde anota ese **saldo inicial** en la T de Proveedores?',
        options: [
          { text: 'En el haber', ok: true, reply: '¡Bien! Proveedores es pasivo y su saldo va del lado donde aumenta: el **haber**.' },
          { text: 'En el debe, porque es lo primero que se anota', reply: 'Ser lo primero no decide el lado. Proveedores es pasivo: su saldo va en el **haber**.' },
          { text: 'Arriba, junto al nombre', reply: 'Arriba solo va el nombre. Proveedores es pasivo: su saldo va en el **haber**.' },
        ],
      },
      { tip: 'Una T por cada cuenta. **Debe** a la izquierda, **haber** a la derecha. El saldo inicial va del lado donde la cuenta aumenta.' },
    ],
    // ¿Cómo se anota cada movimiento?
    [
      { text: 'Lupe ya hizo sus asientos. Ahora toca **pasarlos** a las cuentas T: cada línea va a su cuenta, **del mismo lado**.' },
      {
        ask: 'El asiento dice "**cargo a Caja $800**". ¿Dónde lo anotas?',
        options: [
          { text: 'En el debe de Caja', ok: true, reply: '¡Exacto! Cargo = debe. Va a la izquierda de la T de Caja.' },
          { text: 'En el haber de Caja', reply: 'El haber es para los **abonos**. Un cargo va en el **debe** de Caja.' },
          { text: 'En la T de Ventas', reply: 'La línea dice Caja, así que va a la T de **Caja**, en el **debe** (cargo).' },
        ],
      },
      {
        tacct: {
          title: 'Llena la T de Caja',
          account: 'Caja',
          moves: [
            { story: 'Doña Lupe empieza el día con **$5,000** en la caja.', side: 'D', amount: 5000, why: 'Caja es activo: su saldo inicial va del lado donde aumenta, el debe.' },
            { story: 'Vende **$800** de abarrotes en efectivo.', side: 'D', amount: 800, why: 'Entra dinero: Caja **sube** con cargo.' },
            { story: 'Paga **$2,000** al repartidor de refrescos.', side: 'C', amount: 2000, why: 'Sale dinero: Caja **baja** con abono.' },
            { story: 'Vende **$1,200** más.', side: 'D', amount: 1200, why: 'Entra dinero: cargo.' },
            { story: 'Paga **$500** de luz.', side: 'C', amount: 500, why: 'Sale dinero: abono.' },
          ],
        },
      },
      {
        ask: 'La venta de $800 también toca otra cuenta T. ¿Cuál y de qué lado?',
        options: [
          { text: 'Ventas, en el haber', ok: true, reply: '¡Eso! Cada asiento toca **al menos dos cuentas T**: debe de Caja y haber de Ventas.' },
          { text: 'Ventas, en el debe', reply: 'Ventas es ingreso y aumenta en el **haber**. Lo correcto: haber de Ventas.' },
          { text: 'Ninguna, solo Caja', reply: 'Siempre hay al menos un cargo y un abono. La otra es **Ventas**, en el **haber**.' },
        ],
      },
      {
        rush: {
          title: 'Ahora con Bancos: ¿debe o haber?',
          seconds: 30,
          labels: ['⬅️ Debe (entra)', '➡️ Haber (sale)'],
          items: [
            { text: 'Lupe deposita las ventas del día', ans: 0 },
            { text: 'Paga la renta con transferencia', ans: 1 },
            { text: 'Un cliente le paga por transferencia', ans: 0 },
            { text: 'Transfiere el pago al proveedor', ans: 1 },
            { text: 'El banco le deposita un préstamo', ans: 0 },
            { text: 'Compra un refrigerador pagando del banco', ans: 1 },
          ],
        },
      },
      { tip: 'Pon junto a cada importe el número de la operación, (1), (2), (3)... así sabes de qué asiento viene.' },
    ],
    // ¿Cuánto queda en la cuenta?
    [
      { text: 'Al final del día, Lupe quiere saber cuánto le queda. Ese número es el **saldo**.' },
      { text: 'Para sacarlo:\n➕ Suma el **debe**.\n➕ Suma el **haber**.\n➖ **Resta** el menor al mayor.' },
      {
        calc: {
          question: 'La T de Caja de Lupe tiene en el debe $5,000 + $800 + $1,200 y en el haber $2,000 + $500. ¿Cuál es el saldo?',
          answer: 4500,
          hint: 'Debe: 7,000. Haber: 2,500. Resta.',
          why: '7,000 − 2,500 = **$4,500**. El debe es mayor, así que el saldo es **deudor**.',
        },
      },
      { text: 'Si gana el debe, el saldo es **deudor**. Si gana el haber, es **acreedor**. Si empatan, la cuenta está **saldada** (en cero).' },
      {
        order: {
          title: 'Arma la fórmula del saldo de Proveedores',
          steps: ['Saldo acreedor', '= suma del haber', '− suma del debe'],
          done: '¡Eso! En una cuenta acreedora, el haber es mayor: haber menos debe.',
        },
      },
      {
        calc: {
          question: 'Proveedores tiene en el haber $12,000 y $3,000, y en el debe $8,000. ¿Cuánto queda de saldo?',
          answer: 7000,
          hint: 'Suma el haber (12,000 + 3,000) y réstale el debe.',
          why: 'Haber 15,000 − debe 8,000 = **$7,000** acreedor: es lo que Lupe aún debe.',
        },
      },
      {
        ask: 'En Bancos, el debe suma **$4,000** y el haber suma **$4,000**. ¿Cómo queda?',
        options: [
          { text: 'Saldada (en cero)', ok: true, reply: '¡Eso! Cuando los dos lados son iguales, la cuenta está **saldada**.' },
          { text: 'Con saldo de $8,000', reply: 'Los lados no se suman entre sí: se **restan**. 4,000 − 4,000 = 0: **saldada**.' },
          { text: '$4,000 deudor', reply: 'Ningún lado gana: 4,000 − 4,000 = 0. La cuenta está **saldada**.' },
        ],
      },
    ],
  ],
}
