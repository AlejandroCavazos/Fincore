import type { InteractiveLesson } from './types'

export const intL114: InteractiveLesson = {
  lessonId: 'L1-14',
  sections: [
    // ¿Ganar es lo mismo que cobrar?
    [
      { text: 'Carla tiene una pastelería 🎂. Hoy entregó un pedido de **$5,000** a una escuela, que le pagará en 30 días.' },
      {
        ask: '¿Carla ya ganó esos $5,000 este mes?',
        options: [
          { text: 'Sí: ya vendió, aunque no le han pagado', ok: true, reply: '¡Exacto! El **ingreso** se anota cuando vendes. El **cobro** llegará después.' },
          { text: 'No: hasta que le paguen', reply: 'El pastel ya se entregó: ya es **ingreso**. Lo que falta es el **cobro**.' },
          { text: 'Solo la mitad', reply: 'No se parte. Al entregar, todo es **ingreso** de este mes; el **cobro** llega después.' },
        ],
      },
      { text: '💰 **Ingreso:** cuando vendes o prestas el servicio.\n💵 **Cobro:** cuando el dinero entra.\nLa regla de las NIF: lo que ganas se anota **cuando lo ganas**, no cuando te pagan.' },
      { text: '3 casos que confunden:\n🧾 **Venta a crédito:** ingreso hoy, cobro después.\n🎂 **Anticipo:** cobro hoy, ingreso cuando entregue (mientras, le debe el pastel).\n🏦 **Préstamo:** entra dinero, pero **no es ingreso**.' },
      {
        sort: {
          title: 'Carla en marzo: ¿qué es?',
          buckets: ['Ingreso y cobro', 'Ingreso sin cobro', 'Cobro sin ingreso'],
          items: [
            { text: 'Vende pasteles de contado', bucket: 0, why: 'Vende y cobra al momento: las dos cosas.' },
            { text: 'Entrega un pedido que le pagarán en 30 días', bucket: 1, why: 'Ya vendió, pero el dinero llega después.' },
            { text: 'Cobra una venta hecha en febrero', bucket: 2, why: 'El ingreso fue de febrero; en marzo solo entra el dinero.' },
            { text: 'Recibe anticipo por un pastel de abril', bucket: 2, why: 'Entra dinero, pero el ingreso será en abril.' },
            { text: 'Recibe un préstamo del banco', bucket: 2, why: 'Entra dinero, pero es una deuda, no un ingreso.' },
          ],
        },
      },
      {
        calc: {
          question: 'En junio Carla entrega pedidos por $18,000 que cobrará en julio. También en junio cobra $7,000 de pedidos de mayo. ¿Cuánto es su ingreso de junio?',
          answer: 18000,
          hint: 'Cuenta solo lo que vendió en junio, cobrado o no.',
          why: 'Ingreso de junio: **$18,000**. Los $7,000 son cobros de junio, pero el ingreso fue de mayo.',
        },
      },
    ],
    // ¿Gastar es lo mismo que pagar?
    [
      { text: 'Este mes Carla pagó **$28,000**: $8,000 de renta y $20,000 por un horno nuevo. ¿Gastó $28,000?' },
      {
        ask: '¿Cuánto es gasto del mes?',
        options: [
          { text: '$8,000, solo la renta', ok: true, reply: '¡Bien! El horno durará años: es un **activo**, no gasto del mes.' },
          { text: '$28,000, todo lo que pagó', reply: 'Pagar no siempre es gastar. El horno es un **activo** que durará años. Gasto del mes: **$8,000**.' },
          { text: '$20,000, solo el horno', reply: 'Al revés: la renta del mes sí es gasto; el horno es un **activo**. Gasto: **$8,000**.' },
        ],
      },
      { text: '🔥 **Gasto:** cuando **usas** algo para operar (luz, sueldos, renta).\n💸 **Pago:** cuando **sale** el dinero.' },
      { text: 'Ojo:\n🚫 Pagar una deuda, abonar a un préstamo o comprar equipo **no es gasto** del mes.\n⏳ La luz de este mes que pagas el siguiente **sí es gasto**, aunque no la has pagado.' },
      {
        sort: {
          title: 'Carla en el mes: ¿qué es?',
          buckets: ['Gasto y pago', 'Gasto sin pago', 'Pago sin gasto'],
          items: [
            { text: 'Paga el día 1 la renta de este mes', bucket: 0, why: 'Usa el local este mes y paga: las dos cosas.' },
            { text: 'Le llega el recibo de luz; lo pagará el otro mes', bucket: 1, why: 'Ya usó la luz: es gasto, aunque aún no paga.' },
            { text: 'Compra un horno de contado', bucket: 2, why: 'Sale dinero, pero el horno es un activo.' },
            { text: 'Paga la quincena ya trabajada', bucket: 0, why: 'Trabajo de este mes, pagado: las dos cosas.' },
            { text: 'Abona $10,000 al préstamo del banco', bucket: 2, why: 'Solo baja lo que debe: no es gasto.' },
            { text: 'Sueldos trabajados que pagará el día 5', bucket: 1, why: 'El trabajo ya se hizo: es gasto de este mes.' },
          ],
        },
      },
      { tip: 'Por eso la utilidad y el dinero del banco casi nunca son iguales.' },
    ],
    // ¿Gano o tengo dinero?
    [
      { text: '🏆 **Rentabilidad:** ganar dinero (ingresos mayores que costos y gastos).\n💧 **Liquidez:** tener efectivo para pagar **a tiempo**.\nUn negocio puede tener una sin la otra. Pruébalo:' },
      {
        sim: {
          title: 'Gano, pero no tengo dinero',
          inputs: [
            { key: 'v', label: 'Ventas del mes', min: 0, max: 100000, step: 5000, value: 50000 },
            { key: 'k', label: '% que ya te pagaron los clientes', min: 0, max: 100, step: 10, value: 100 },
            { key: 'g', label: 'Gastos pagados (sueldos, renta)', min: 0, max: 80000, step: 5000, value: 40000 },
          ],
          outputs: [
            { label: 'Utilidad (¿gano?)', calc: (x) => x.v - x.g },
            { label: 'Efectivo que te queda (¿tengo con qué pagar?)', calc: (x) => Math.round((x.v * x.k) / 100) - x.g, main: true },
          ],
          goal: {
            text: 'Haz que la pastelería **gane** (utilidad positiva) pero que el efectivo quede **en negativo**. Pista: vende a crédito.',
            check: (x) => x.v - x.g > 0 && Math.round((x.v * x.k) / 100) - x.g < 0,
            done: '¡Eso es **rentable sin liquidez**! Vendiste bien, pero tus clientes no te han pagado y no te alcanza para la nómina.',
          },
        },
      },
      {
        ask: 'Carla tiene buena utilidad, pero el viernes no le alcanza para la nómina porque las escuelas no le han pagado. ¿Qué le falta?',
        options: [
          { text: 'Liquidez', ok: true, reply: '¡Exacto! Sí gana, pero no tiene **efectivo a tiempo**.' },
          { text: 'Rentabilidad', reply: 'Sí es rentable: tiene buena utilidad. Lo que le falta es **liquidez**, efectivo para pagar a tiempo.' },
          { text: 'Vender más', reply: 'Ya vende bien. El problema es que no ha cobrado: le falta **liquidez**.' },
        ],
      },
      {
        ask: 'Carla pide un préstamo de **$100,000**. ¿Sube su utilidad?',
        options: [
          { text: 'No: entra dinero, pero es una deuda', ok: true, reply: '¡Bien! El préstamo da **liquidez**, pero no es ingreso: la utilidad no cambia.' },
          { text: 'Sí, $100,000', reply: 'Entra dinero, pero hay que devolverlo: es una **deuda**, no ingreso. La utilidad no cambia.' },
          { text: 'Sí, pero solo la mitad', reply: 'Nada del préstamo es ingreso: es una **deuda**. La utilidad no cambia.' },
        ],
      },
      { tip: 'Revisa siempre **los dos**: el estado de resultados (¿gano?) y el de flujos de efectivo (¿tengo con qué pagar?).' },
    ],
  ],
}
