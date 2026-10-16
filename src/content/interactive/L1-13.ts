import type { InteractiveLesson } from './types'

export const intL113: InteractiveLesson = {
  lessonId: 'L1-13',
  sections: [
    // Estado de situación financiera
    [
      { text: 'El **estado de situación financiera** (o balance general) es una **foto 📸** del negocio en una fecha: lo que tiene, lo que debe y lo que es de los dueños.' },
      { text: 'Otros estados son como una **película 🎬**: cuentan lo que pasó durante un periodo. ¿Sabes distinguirlos?' },
      {
        rush: {
          title: '¿Foto o película?',
          seconds: 25,
          labels: ['📸 Foto (a una fecha)', '🎬 Película (un periodo)'],
          items: [
            { text: 'Cuánto debes al proveedor **al 31 de diciembre**', ans: 0 },
            { text: 'Cuánto vendiste **en el año**', ans: 1 },
            { text: 'Cuánto dinero hay en el banco **hoy**', ans: 0 },
            { text: 'Cuánto gastaste en luz **en marzo**', ans: 1 },
            { text: 'La utilidad **del mes**', ans: 1 },
            { text: 'Cuánto vale tu equipo **al cierre**', ans: 0 },
          ],
        },
      },
      {
        calc: {
          question: 'Una tienda tiene **$150,000** de activos y debe **$40,000**. ¿Cuánto es el capital de sus dueños?',
          answer: 110000,
          hint: 'capital = activo − pasivo.',
          why: '150,000 − 40,000 = **$110,000**. La ecuación siempre se cumple: 150,000 = 40,000 + 110,000.',
        },
      },
    ],
    // Estado de resultado integral
    [
      { text: 'El **estado de resultado integral** es la película del periodo: ingresos menos costos y gastos. Lo que queda es **utilidad neta** (o pérdida).' },
      {
        sim: {
          title: 'La panadería 🥖',
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
            done: '¡Bien! Con ventas de $50,000, costo de $20,000 y gastos de $18,000, la utilidad es justo $12,000.',
          },
        },
      },
    ],
    // Estado de flujos de efectivo
    [
      { text: 'El **estado de flujos de efectivo** sigue **solo al dinero real**: ¿de dónde vino y en qué se fue? Lo agrupa en tres actividades.' },
      {
        sort: {
          title: '¿Qué actividad es?',
          buckets: ['Operación', 'Inversión', 'Financiamiento'],
          items: [
            { text: 'Cobras a tus clientes', bucket: 0, why: 'Es el día a día del negocio.' },
            { text: 'Compras un horno', bucket: 1, why: 'Es un bien duradero: inversión.' },
            { text: 'El banco te presta $50,000', bucket: 2, why: 'Dinero que llega de un préstamo: financiamiento.' },
            { text: 'Pagas sueldos', bucket: 0, why: 'Gasto del día a día: operación.' },
            { text: 'Vendes la camioneta vieja', bucket: 1, why: 'Vender bienes duraderos también es inversión.' },
            { text: 'El dueño retira dinero', bucket: 2, why: 'Lo que entra o sale con los dueños es financiamiento.' },
          ],
        },
      },
      {
        calc: {
          question: 'Empiezas con **$10,000**, cobras **$25,000**, pagas **$18,000** de gastos y compras una vitrina de **$5,000**. ¿Con cuánto efectivo terminas?',
          answer: 12000,
          hint: 'suma lo que entra al inicial y resta lo que sale.',
          why: '10,000 + 25,000 − 18,000 − 5,000 = **$12,000**.',
        },
      },
    ],
    // Estado de cambios en el capital contable
    [
      { text: 'El último estado explica **por qué cambió el capital** de los dueños.' },
      {
        calc: {
          question: 'Capital inicial **$50,000**, utilidad del año **$12,000** y el dueño retiró **$4,000**. ¿Capital final?',
          answer: 58000,
          hint: 'la utilidad suma y el retiro resta.',
          why: '50,000 + 12,000 − 4,000 = **$58,000**.',
        },
      },
      {
        match: {
          title: 'Cada estado responde una pregunta',
          pairs: [
            ['Situación financiera', '¿Qué tengo, qué debo y qué es mío hoy?'],
            ['Resultado integral', '¿Gané o perdí en el periodo?'],
            ['Flujos de efectivo', '¿De dónde vino el dinero y en qué se fue?'],
            ['Cambios en el capital', '¿Por qué cambió lo de los dueños?'],
          ],
        },
      },
      { tip: 'Los 4 están **conectados**: la utilidad pasa al estado de cambios en el capital, el capital final al balance y el efectivo final del flujo coincide con el del balance.' },
    ],
  ],
}
