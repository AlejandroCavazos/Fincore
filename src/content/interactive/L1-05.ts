import type { InteractiveLesson } from './types'

export const intL105: InteractiveLesson = {
  lessonId: 'L1-05',
  sections: [
    // ¿Ingreso, costo o gasto?
    [
      {
        text: 'Lupita tiene una cafetería ☕. Para saber si gana, separa todo en 3 cajones:\n💰 **Ingreso:** lo que gana por vender.\n📦 **Costo:** lo que le costó lo que vendió.\n💡 **Gasto:** lo que paga para operar (renta, luz, sueldos).',
      },
      {
        ask: 'Vendió 100 cafés a $40. ¿Qué es eso?',
        options: [
          { text: 'Ingreso', ok: true, reply: '¡Eso! Es lo que gana vendiendo: $4,000 de ingreso.' },
          { text: 'Gasto', reply: 'Un gasto es lo que paga para operar. Vender café es **ingreso**.' },
          { text: 'Costo', reply: 'El costo es lo que le costó lo vendido. Lo que cobra al vender es **ingreso**.' },
        ],
      },
      {
        ask: 'El café y la leche de esos cafés costaron $1,200 y la renta del mes fue $8,000. ¿Cuál es cuál?',
        options: [
          { text: 'Café y leche: costo. Renta: gasto', ok: true, reply: '¡Bien! El café y la leche están ligados a **lo que vendió** (costo). La renta se paga para **operar** (gasto).' },
          { text: 'Los dos son gasto', reply: 'Casi. El café y la leche están ligados directo a lo que vendió: son **costo**. La renta sí es gasto.' },
          { text: 'Café y leche: gasto. Renta: costo', reply: 'Al revés: lo ligado a lo que vendió (café y leche) es **costo**; la renta, que es para operar, es **gasto**.' },
        ],
      },
      {
        sort: {
          title: 'Ayuda a Lupita a llenar sus cajones',
          buckets: ['Ingreso', 'Costo', 'Gasto'],
          items: [
            { text: 'Venta de pasteles', bucket: 0, why: 'Es lo que gana vendiendo.' },
            { text: 'Leche usada en los lattes vendidos', bucket: 1, why: 'Es parte de lo que costó lo vendido.' },
            { text: 'Renta del local', bucket: 2, why: 'Se paga para operar, venda o no.' },
            { text: 'Sueldo del barista', bucket: 2, why: 'Es para operar el negocio.' },
            { text: 'Cobro por servir café en un evento', bucket: 0, why: 'Es un servicio que vendió: ingreso.' },
            { text: 'Azúcar de los cafés vendidos', bucket: 1, why: 'Está ligada a lo que vendió: costo.' },
          ],
        },
      },
      { text: 'Ojo: **no toda entrada de dinero es ingreso**. Un préstamo o el dinero que pone la dueña entran a la caja, pero no los ganó vendiendo.' },
      {
        ask: 'El banco le prestó $20,000 a Lupita. ¿Es ingreso?',
        options: [
          { text: 'No, es una deuda', ok: true, reply: '¡Correcto! Entra dinero, pero no lo ganó vendiendo: hay que devolverlo.' },
          { text: 'Sí, entró dinero', reply: 'Error muy común: un préstamo entra a la caja pero **hay que devolverlo**. Es deuda, no ingreso.' },
          { text: 'Solo la mitad es ingreso', reply: 'Nada de eso es ingreso: todo se tiene que devolver. Es **deuda**.' },
        ],
      },
    ],
    // ¿Ganaste o perdiste?
    [
      {
        ask: 'Un mes, Lupita vendió $40,000 y entre costos y gastos se le fueron $44,000. ¿Cómo le fue?',
        options: [
          { text: 'Perdió $4,000', ok: true, reply: '¡Eso! Salió más de lo que ganó vendiendo: es una **pérdida**.' },
          { text: 'Ganó $40,000', reply: 'Eso es lo que vendió, no lo que ganó. Hay que restar costos y gastos: 40,000 − 44,000 = **pérdida** de $4,000.' },
          { text: 'Ni ganó ni perdió', reply: 'Costos y gastos ($44,000) fueron **mayores** que las ventas ($40,000): perdió $4,000.' },
        ],
      },
      {
        text: 'La **utilidad** se saca en 2 pasos:\n1️⃣ **Utilidad bruta** = Ingresos − Costo de ventas.\n2️⃣ **Utilidad del mes** = Utilidad bruta − Gastos.\n➖ Si sale negativa, es **pérdida**.',
      },
      {
        sim: {
          title: 'El mes de Lupita',
          inputs: [
            { key: 'v', label: 'Ventas del mes', min: 0, max: 100000, step: 1000, value: 40000 },
            { key: 'c', label: 'Costo de lo vendido', min: 0, max: 60000, step: 1000, value: 24000 },
            { key: 'g', label: 'Gastos (renta, luz, sueldos)', min: 0, max: 40000, step: 1000, value: 20000 },
          ],
          outputs: [
            { label: 'Utilidad bruta (ventas − costo)', calc: (x) => x.v - x.c },
            { label: 'Utilidad del mes (bruta − gastos)', calc: (x) => x.v - x.c - x.g, main: true },
          ],
          goal: {
            text: 'Lupita quiere ganar **al menos $10,000** este mes. Mueve los números hasta lograrlo.',
            check: (x) => x.v - x.c - x.g >= 10000,
            done: '¡Lo lograste! Para ganar más hay 3 caminos: vender más, que lo vendido cueste menos o gastar menos.',
          },
        },
      },
      {
        order: {
          title: 'Arma la fórmula',
          steps: ['Ingresos', '− Costo de ventas', '− Gastos', '= Utilidad (o pérdida)'],
          done: '¡La armaste tú! Ingresos − Costo de ventas − Gastos = Utilidad.',
        },
      },
      {
        calc: {
          question: 'En junio Lupita vendió **$60,000**. Lo vendido le costó **$25,000** y sus gastos fueron **$22,000**. Además, su hermano le prestó **$10,000**. ¿Cuál fue la utilidad del mes?',
          answer: 13000,
          hint: 'Deja fuera el préstamo. 60,000 − 25,000 = utilidad bruta; luego resta los gastos.',
          why: 'Utilidad bruta = 60,000 − 25,000 = 35,000. Menos gastos: 35,000 − 22,000 = **$13,000**. El préstamo no es ingreso: si lo sumaste, te dio 23,000.',
        },
      },
      { tip: 'Tener dinero en caja no significa ganar: ese dinero pudo venir de un **préstamo** o de una **aportación**.' },
    ],
    // Casos de todos los días
    [
      { text: 'Lupita pidió un préstamo para remodelar 🛠️. Este mes paga una parte de la deuda y también los **intereses**.' },
      {
        ask: '¿Qué parte es gasto?',
        options: [
          { text: 'Solo los intereses', ok: true, reply: '¡Exacto! Pagar el préstamo solo **baja la deuda**. Los intereses sí son gasto.' },
          { text: 'Todo lo que pagó', reply: 'Pagar la deuda no es gasto: solo baja lo que debe. **Los intereses** sí son gasto.' },
          { text: 'Nada', reply: 'Los **intereses** sí son gasto. Lo que no es gasto es el pago de la deuda.' },
        ],
      },
      {
        ask: 'El taller de enfrente 🔧 hizo una afinación en **marzo** y el cliente pagó en **abril**. ¿De qué mes es el ingreso?',
        options: [
          { text: 'De marzo', ok: true, reply: '¡Bien! El ingreso es del mes en que se hizo el trabajo. El cobro de abril solo cambia lo que le debían por dinero.' },
          { text: 'De abril', reply: 'El trabajo se hizo en marzo: el ingreso es de **marzo**. En abril solo cobró lo que le debían.' },
          { text: 'De los dos meses', reply: 'Se cuenta una sola vez, en el mes del trabajo: **marzo**.' },
        ],
      },
      {
        rush: {
          title: '¿Cuenta para la utilidad?',
          seconds: 35,
          labels: ['Sí cuenta', 'No cuenta'],
          items: [
            { text: 'Venta de pasteles', ans: 0 },
            { text: 'Préstamo recibido del banco', ans: 1 },
            { text: 'Renta del local', ans: 0 },
            { text: 'Dinero que puso la dueña', ans: 1 },
            { text: 'Intereses del préstamo', ans: 0 },
            { text: 'Pago de la deuda al banco', ans: 1 },
            { text: 'Comprar una cafetera que durará años', ans: 1 },
          ],
        },
      },
      {
        multi: {
          title: '¿Cuáles son ingresos de mayo para Lupita?',
          items: [
            { text: 'Venta de cafés en mayo', ok: true },
            { text: 'Préstamo de $20,000', ok: false },
            { text: 'Dinero que Lupita puso de sus ahorros', ok: false },
            { text: 'Cobro por atender un evento en mayo', ok: true },
            { text: 'Cobro en mayo de un evento que atendió en abril', ok: false },
          ],
          why: 'Son ingresos de mayo **lo que vendió en mayo**. El préstamo y los ahorros no son ingresos, y el evento de abril ya fue ingreso de **abril**.',
        },
      },
      { tip: '**Entra dinero ≠ ingreso. Sale dinero ≠ gasto.** Comprar una cafetera que dura años es un **activo**, no un gasto del mes.' },
    ],
  ],
}
