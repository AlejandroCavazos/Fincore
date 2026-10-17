import type { InteractiveLesson } from './types'

export const intL113: InteractiveLesson = {
  lessonId: 'L1-13',
  sections: [
    // Una foto de tu negocio
    [
      { text: 'Mari tiene una panadería 🥖. El banco le pregunta: "¿Cómo está tu negocio **hoy**?"' },
      {
        ask: '¿Qué le debería enseñar Mari?',
        options: [
          { text: 'Lo que tiene, lo que debe y lo que es suyo, a hoy', ok: true, reply: '¡Exacto! Eso es el **estado de situación financiera**.' },
          { text: 'Cuánto vendió el año pasado', reply: 'Eso cuenta lo que pasó en un periodo. El banco pidió **hoy**: lo que tiene, lo que debe y lo que es suyo.' },
          { text: 'Su receta de pan', reply: 'Eso no es un número del negocio. Lo que pide el banco es lo que tiene, lo que debe y lo que es suyo, **a hoy**.' },
        ],
      },
      { text: 'El **estado de situación financiera** (o balance general) es una **foto 📸 en una fecha**:\n🏠 **Activo:** lo que tiene.\n💳 **Pasivo:** lo que debe.\n👩 **Capital:** lo que es de los dueños.' },
      { text: 'Otros estados son una **película 🎬**: cuentan lo que pasó **durante** un periodo.' },
      {
        rush: {
          title: '¿Foto o película?',
          seconds: 25,
          labels: ['📸 Foto (a una fecha)', '🎬 Película (un periodo)'],
          items: [
            { text: 'Cuánto debe Mari al proveedor al 31 de diciembre', ans: 0 },
            { text: 'Cuánto pan vendió en el año', ans: 1 },
            { text: 'Cuánto dinero hay en el banco hoy', ans: 0 },
            { text: 'Cuánto gastó en luz en marzo', ans: 1 },
            { text: 'La utilidad del mes', ans: 1 },
            { text: 'Cuánto vale su horno al cierre', ans: 0 },
          ],
        },
      },
      {
        calc: {
          question: 'La panadería tiene $150,000 de activos y debe $40,000. ¿Cuánto es el capital de Mari?',
          answer: 110000,
          hint: 'Capital = activo − pasivo.',
          why: '150,000 − 40,000 = **$110,000**. La ecuación se cumple: 150,000 = 40,000 + 110,000.',
        },
      },
    ],
    // ¿Ganaste o perdiste?
    [
      { text: 'Este mes Mari vendió **$50,000** de pan. Su hija le dice: "¡Ganaste $50,000!"' },
      {
        ask: '¿Tiene razón?',
        options: [
          { text: 'No: hay que restar lo que costó el pan y los gastos', ok: true, reply: '¡Eso! Lo que se gana es lo que **queda** después de costos y gastos.' },
          { text: 'Sí: todo lo que vende es ganancia', reply: 'Vender no es ganar. A los $50,000 hay que **restarles** el costo del pan y los gastos.' },
          { text: 'No: ganó más, porque además tiene el horno', reply: 'El horno no es ganancia del mes. Hay que **restar** a las ventas el costo y los gastos.' },
        ],
      },
      { text: 'El **estado de resultado integral** es la película del periodo:\n💰 Ingresos\n➖ Costo de lo vendido\n➖ Gastos (renta, sueldos, luz)\n🟰 **Utilidad neta** (o pérdida).' },
      {
        sim: {
          title: 'La panadería de Mari 🥖',
          inputs: [
            { key: 'v', label: 'Ventas del mes', min: 0, max: 100000, step: 1000, value: 50000 },
            { key: 'c', label: 'Costo del pan vendido', min: 0, max: 60000, step: 1000, value: 20000 },
            { key: 'g', label: 'Gastos (renta, sueldos, luz)', min: 0, max: 50000, step: 1000, value: 36000 },
          ],
          outputs: [
            { label: 'Ventas − costo', calc: (x) => x.v - x.c },
            { label: 'Utilidad (o pérdida) neta', calc: (x) => x.v - x.c - x.g, main: true },
          ],
          goal: {
            text: 'Este mes la panadería **pierde**. Muévele hasta que gane **al menos $12,000**.',
            check: (x) => x.v - x.c - x.g >= 12000,
            done: '¡Bien! Por ejemplo, con ventas de $50,000, costo de $20,000 y gastos de $18,000, la utilidad es $12,000.',
          },
        },
      },
      {
        calc: {
          question: 'En el año Mari vendió $80,000. El pan vendido costó $30,000, sueldos $15,000, renta $8,000 y luz $2,000. ¿Cuál es la utilidad neta?',
          answer: 25000,
          hint: 'Ventas menos costo, menos cada gasto.',
          why: '80,000 − 30,000 − 15,000 − 8,000 − 2,000 = **$25,000**.',
        },
      },
      { tip: 'Se llama **integral** porque puede mostrar aparte otras ganancias o pérdidas especiales. En un negocio pequeño casi siempre solo verás la utilidad o pérdida neta.' },
    ],
    // ¿A dónde se fue el dinero?
    [
      { text: 'Mari ganó en el mes, pero su cuenta del banco bajó. ¿Cómo? El **estado de flujos de efectivo** sigue **solo al dinero real**: de dónde vino y en qué se fue.' },
      { text: 'Lo agrupa en 3 actividades:\n🔄 **Operación:** el día a día (cobrar, pagar sueldos, renta, proveedores).\n🏗️ **Inversión:** comprar o vender bienes duraderos (un horno).\n🏦 **Financiamiento:** préstamos y dinero de los dueños, y lo que se les devuelve.' },
      {
        sort: {
          title: '¿Qué actividad es?',
          buckets: ['Operación', 'Inversión', 'Financiamiento'],
          items: [
            { text: 'Mari cobra a sus clientes', bucket: 0, why: 'Es el día a día del negocio.' },
            { text: 'Compra un horno', bucket: 1, why: 'Es un bien duradero: inversión.' },
            { text: 'El banco le presta $50,000', bucket: 2, why: 'Dinero que llega de un préstamo: financiamiento.' },
            { text: 'Paga sueldos', bucket: 0, why: 'Pago del día a día: operación.' },
            { text: 'Vende la camioneta vieja', bucket: 1, why: 'Vender bienes duraderos también es inversión.' },
            { text: 'Su socia aporta dinero', bucket: 2, why: 'Lo que entra o sale con los dueños es financiamiento.' },
          ],
        },
      },
      {
        calc: {
          question: 'Mari empieza con $10,000, cobra $25,000, paga $18,000 de gastos y compra una vitrina de $5,000. ¿Con cuánto efectivo termina?',
          answer: 12000,
          hint: 'Suma lo que entra al inicial y resta lo que sale.',
          why: '10,000 + 25,000 − 18,000 − 5,000 = **$12,000**.',
        },
      },
    ],
    // ¿Por qué cambió lo tuyo?
    [
      { text: 'El capital de Mari empezó el año en $50,000 y lo terminó en otra cifra. El **estado de cambios en el capital contable** explica **por qué**.' },
      {
        sort: {
          title: '¿Sube o baja el capital?',
          buckets: ['Sube', 'Baja'],
          items: [
            { text: 'Una socia aporta dinero', bucket: 0, why: 'Las aportaciones suben el capital.' },
            { text: 'El año deja utilidad', bucket: 0, why: 'La utilidad es de los dueños: sube el capital.' },
            { text: 'Mari retira dinero para ella', bucket: 1, why: 'Los retiros bajan el capital.' },
            { text: 'Se reparten dividendos', bucket: 1, why: 'Lo que se reparte a los dueños baja el capital.' },
            { text: 'El año deja pérdida', bucket: 1, why: 'La pérdida baja el capital.' },
          ],
        },
      },
      {
        calc: {
          question: 'Capital inicial $50,000. Una socia aporta $10,000, la utilidad del año es $12,000 y se reparten $4,000 de dividendos. ¿Capital final?',
          answer: 68000,
          hint: 'Aportación y utilidad suman; dividendos restan.',
          why: '50,000 + 10,000 + 12,000 − 4,000 = **$68,000**.',
        },
      },
      {
        match: {
          title: '¿En qué estado lo busca Mari?',
          pairs: [
            ['Cuánto debe al proveedor al 31 de diciembre', 'Situación financiera'],
            ['Cuánto ganó o perdió en el año', 'Resultado integral'],
            ['Cuánto pagó en efectivo por el horno', 'Flujos de efectivo'],
            ['Cuánto se repartió en dividendos', 'Cambios en el capital'],
          ],
        },
      },
      { tip: 'Los 4 están **conectados**: la utilidad pasa al estado de cambios en el capital, el capital final al balance y el efectivo final del flujo coincide con el del balance.' },
    ],
  ],
}
